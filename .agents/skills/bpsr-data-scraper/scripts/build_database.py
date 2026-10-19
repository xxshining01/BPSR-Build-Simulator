import hashlib
import json
import re
from io import BytesIO
from pathlib import Path
from typing import Literal, Dict, Any, List
import httpx
from bs4 import BeautifulSoup
from PIL import Image
from tqdm import tqdm

# ==============================================================================
# CONFIGURATION
# ==============================================================================
# เลือกโหมดรูปภาพ:
# - "download"    : ดาวน์โหลดรูปมาแปลงเป็น .webp ลง /public/assets/ (แนะนำสำหรับ Production)
# - "remote_only" : ไม่ดาวน์โหลดไฟล์ แต่ใช้ลิงก์ต้นทางแสดงผลโดยตรง (เร็วตอนทดสอบสคริปต์)
IMAGE_MODE: Literal["download", "remote_only"] = "download"

PROJECT_ROOT = Path(__file__).resolve().parents[2]
DATA_OUT_DIR = PROJECT_ROOT / "src" / "data"
ASSETS_OUT_DIR = PROJECT_ROOT / "public" / "assets"

# สร้างโฟลเดอร์ตามโครงสร้าง SAD.md
for folder in ["classes", "equipments"]:
    (DATA_OUT_DIR / folder).mkdir(parents=True, exist_ok=True)

for asset_cat in ["skills", "talents", "equipments", "sigils", "imagines", "factors", "psychoscopes", "modules"]:
    (ASSETS_OUT_DIR / asset_cat).mkdir(parents=True, exist_ok=True)


# ==============================================================================
# ASSET DOWNLOADER & WEBP CONVERTER
# ==============================================================================
class AssetManager:
    def __init__(self, mode: Literal["download", "remote_only"] = "download"):
        self.mode = mode
        self.client = httpx.Client(
            headers={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
                # สำคัญมาก: ใส่ Referer เพื่อไม่ให้โดน CDN หรือ Bilibili Wiki บล็อก 403
                "Referer": "https://wiki.biligame.com/",
            },
            timeout=20.0,
            follow_redirects=True,
        )

    def process_icon(self, remote_url: str, category: str, item_id: str, size: tuple = (128, 128)) -> Dict[str, str]:
        """
        คืนค่าทั้ง Local Path และ Remote URL เพื่อให้ Frontend มี Fallback เสมอ
        """
        if not remote_url:
            return {"icon": f"/assets/{category}/placeholder.webp", "iconRemoteUrl": ""}

        # ทำความสะอาดชื่อไฟล์ให้ตรงกับ item_id
        safe_id = re.sub(r"[^a-zA-Z0-9_-]", "_", str(item_id).lower())
        local_rel_path = f"/assets/{category}/{safe_id}.webp"
        local_abs_path = ASSETS_OUT_DIR / category / f"{safe_id}.webp"

        if self.mode == "remote_only":
            return {"icon": remote_url, "iconRemoteUrl": remote_url}

        # ถ้ามีไฟล์อยู่แล้ว ไม่ต้องโหลดซ้ำ
        if local_abs_path.exists():
            return {"icon": local_rel_path, "iconRemoteUrl": remote_url}

        try:
            resp = self.client.get(remote_url)
            resp.raise_for_status()

            # แปลงรูปเป็น WebP พื้นหลังใส (RGBA) และย่อขนาดให้เหมาะกับเว็บ
            img = Image.open(BytesIO(resp.content)).convert("RGBA")
            img.thumbnail(size, Image.Resampling.LANCZOS)
            img.save(local_abs_path, format="WEBP", quality=88, method=6)

            return {"icon": local_rel_path, "iconRemoteUrl": remote_url}
        except Exception as e:
            print(f"[WARN] โหลดรูปไม่สำเร็จ ({item_id}): {e} -> ใช้ Remote URL แทน")
            return {"icon": remote_url, "iconRemoteUrl": remote_url}


# ==============================================================================
# DATA NORMALIZER & WIKI SCRAPER
# ==============================================================================
class BPSRDatabaseBuilder:
    def __init__(self, asset_mgr: AssetManager):
        self.asset_mgr = asset_mgr

    # --------------------------------------------------------------------------
    # 1. แปลงข้อมูล Sigils (ตัวอย่างการสร้าง /src/data/sigils.json)
    # --------------------------------------------------------------------------
    def build_sigils_db(self, raw_sigils: List[Dict[str, Any]]):
        normalized_sigils = []
        for item in tqdm(raw_sigils, desc="Building sigils.json"):
            sigil_id = item.get("id", f"sigil_{hashlib.md5(item['name'].encode()).hexdigest()[:6]}")
            icon_data = self.asset_mgr.process_icon(item.get("icon_url", ""), "sigils", sigil_id)

            normalized_sigils.append({
                "id": sigil_id,
                "name": item["name"],
                "allowedSlots": item.get("allowed_slots", []), # เช่น ["weapon", "head", "ring"]
                "icon": icon_data["icon"],
                "iconRemoteUrl": icon_data["iconRemoteUrl"],
                # เก็บค่าสเตตัสแยกตามระดับ Emblem Lv.1, Lv.2, Lv.3 ตาม SDD
                "emblemLevels": {
                    "1": item.get("lv1_modifiers", []),
                    "2": item.get("lv2_modifiers", []),
                    "3": item.get("lv3_modifiers", []),
                }
            })

        self._save_json(DATA_OUT_DIR / "sigils.json", normalized_sigils)

    # --------------------------------------------------------------------------
    # 2. แปลงข้อมูล Imagines Tier 0-5 (/src/data/imagines.json)
    # --------------------------------------------------------------------------
    def build_imagines_db(self, raw_imagines: List[Dict[str, Any]]):
        normalized_imagines = []
        for item in tqdm(raw_imagines, desc="Building imagines.json"):
            img_id = item.get("id")
            icon_data = self.asset_mgr.process_icon(item.get("icon_url", ""), "imagines", img_id, size=(160, 160))

            normalized_imagines.append({
                "id": img_id,
                "name": item["name"],
                "category": item.get("category", "boss"),
                "icon": icon_data["icon"],
                "iconRemoteUrl": icon_data["iconRemoteUrl"],
                "cooldown": item.get("cooldown", 60),
                "castTime": item.get("cast_time", 0.8),
                # ข้อมูลแยกตามระดับ Tier 0 ถึง 5
                "tiers": {
                    str(tier): {
                        "passiveStats": item.get("tiers", {}).get(str(tier), {}).get("passive_stats", []),
                        "passiveBuffEffects": item.get("tiers", {}).get(str(tier), {}).get("passive_buffs", []),
                        "activeSkillMultiplier": item.get("tiers", {}).get(str(tier), {}).get("active_mult", 0),
                        "activeBuffEffects": item.get("tiers", {}).get(str(tier), {}).get("active_buffs", [])
                    }
                    for tier in range(6) # Tier 0 - 5
                }
            })

        self._save_json(DATA_OUT_DIR / "imagines.json", normalized_imagines)

    # --------------------------------------------------------------------------
    # 3. ฟังก์ชันแกะตารางจาก Bilibili Wiki (สำหรับข้อมูลที่ต้องดึงจากตาราง HTML)
    # --------------------------------------------------------------------------
    def scrape_bwiki_table(self, wiki_url: str, table_selector: str = "table.wikitable") -> List[Dict[str, str]]:
        """
        ใช้ดึงตารางสเตตัสอุปกรณ์, ตาราง Refine 0-30, หรือตาราง Module Link จาก Bilibili Wiki
        """
        resp = self.asset_mgr.client.get(wiki_url)
        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, "lxml")
        
        table = soup.select_one(table_selector)
        if not table:
            return []

        headers = [th.get_text(strip=True) for th in table.select("tr:first-child th")]
        rows_data = []

        for tr in table.select("tr")[1:]:
            cols = tr.select("td")
            if not cols:
                continue
            row_dict = {}
            for idx, td in enumerate(cols):
                key = headers[idx] if idx < len(headers) else f"col_{idx}"
                row_dict[key] = td.get_text(strip=True)
                # ถ้าในช่องตารางมีรูปไอคอน ให้ดึง URL รูปออกมาด้วย
                img_tag = td.select_one("img")
                if img_tag and img_tag.get("src"):
                    src = img_tag["src"]
                    row_dict[f"{key}_img"] = f"https:{src}" if src.startswith("//") else src
            rows_data.append(row_dict)

        return rows_data

    def _save_json(self, path: Path, data: Any):
        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"[SAVED DB] {path.relative_to(PROJECT_ROOT)} ({len(data)} records)")


if __name__ == "__main__":
    asset_manager = AssetManager(mode=IMAGE_MODE)
    builder = BPSRDatabaseBuilder(asset_manager)

    # ทดสอบสร้างข้อมูลตัวอย่างลงไฟล์จริงตามโครงสร้าง SAD.md
    sample_sigils = [
        {
            "id": "sigil_thunder_strike",
            "name": "Thunder Strike Sigil",
            "allowed_slots": ["weapon", "earrings", "necklace", "ring"],
            "icon_url": "",
            "lv1_modifiers": [{"stat": "crit", "value": 45, "type": "flat"}],
            "lv2_modifiers": [{"stat": "crit", "value": 90, "type": "flat"}],
            "lv3_modifiers": [{"stat": "crit", "value": 150, "type": "flat"}]
        }
    ]
    builder.build_sigils_db(sample_sigils)