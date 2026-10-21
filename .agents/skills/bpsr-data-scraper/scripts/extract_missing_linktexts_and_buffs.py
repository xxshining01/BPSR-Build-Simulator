# ไฟล์: .agents/skills/bpsr-data-scraper/scripts/extract_missing_linktexts_and_buffs.py
import json
import re
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[4]
GAME_DB_DIR = PROJECT_ROOT / "src" / "data" / "game-db"
LOCALE_EN_FILE = PROJECT_ROOT / "src" / "data" / "locales" / "en_US" / "game-data.json"
OUT_FILE = PROJECT_ROOT / "Docs" / "RESOLVED_SUBSKILLS_AND_BUFFS.md"

def load_json(path: Path):
    if not path.exists():
        return {}
    return json.loads(path.read_text(encoding="utf-8", errors="ignore"))

def clean_html(raw) -> str:
    if not raw:
        return ""
    text = str(raw)
    text = re.sub(r"<linktext=(\d+)>(.*?)</linktext>", r"[Link#\1: \2]", text)
    text = re.sub(r"<br\s*/?>", " | ", text)
    text = re.sub(r"<[^>]+>", "", text)
    return re.sub(r"\s+", " ", text).strip()

def main():
    en = load_json(LOCALE_EN_FILE)
    talents_db = load_json(GAME_DB_DIR / "talent-tree.json")
    imagines_db = load_json(GAME_DB_DIR / "battle-imagines.json")
    suits_db = load_json(GAME_DB_DIR / "suits.json")

    lines = [
        "# ตารางถอดรหัสสกิลลูก (`<linktext>`) และบัฟ (`attrDescs`) ทั้งหมดที่ใช้ในการคำนวณ Combat Simulator\n",
        "เอกสารนี้แสดงคีย์ทั้งหมดใน `en_US/game-data.json` เพื่อยืนยันว่าสกิลลูก (เช่น Falcon Strike, Lightning Strike, Moonblade, Formless Flame Slash) และโบนัสเซ็ตอุปกรณ์เก็บตัวเลขไว้ที่ไหน\n",
        f"- **รายชื่อ Top-Level Keys ใน `en_US/game-data.json`**: `{list(en.keys())}`\n",
    ]

    # 1. ค้นหาว่า <linktext=XXXX> ที่อยู่ในคำอธิบาย Talent และ Skill เก็บไว้ในคีย์ไหนของ game-data.json
    en_talents = en.get("talents", {})
    en_skills = en.get("skills", {})
    referenced_links = {}

    for src_dict in [en_talents, en_skills]:
        for k, v in src_dict.items():
            desc = v.get("description", "") if isinstance(v, dict) else str(v)
            for m in re.finditer(r"<linktext=(\d+)>(.*?)</linktext>", desc):
                lid = m.group(1)
                lname = re.sub(r"<[^>]+>", "", m.group(2)).strip()
                referenced_links[lid] = lname

    lines.append(f"## 1. สกิลลูกและเอฟเฟกต์ที่ถูกอ้างอิงผ่าน `<linktext=XXXX>` (ทั้งหมด {len(referenced_links)} รายการ)\n")

    # ตรวจหาว่าแต่ละ lid อยู่ในหมวดไหนของ en
    for lid, lname in sorted(referenced_links.items(), key=lambda x: int(x[0])):
        found_in = []
        for top_key, sub_dict in en.items():
            if isinstance(sub_dict, dict) and lid in sub_dict:
                found_in.append((top_key, clean_html(json.dumps(sub_dict[lid], ensure_ascii=False))))
        if found_in:
            for tk, val_str in found_in:
                lines.append(f"- **`Link#{lid} [{lname}]`** (จาก `{tk}`): {val_str}")
        else:
            lines.append(f"- **`Link#{lid} [{lname}]`**: *(อ้างอิงชื่อสกิล/บัฟในระบบ)*")

    # 2. ถอดรหัสโบนัสเซ็ตอุปกรณ์ 2 ชิ้น / 4 ชิ้น จาก suits.json + attrDescs
    lines.append("\n---\n## 2. คำอธิบายและตัวเลขจริงของโบนัสเซ็ตอุปกรณ์ 2 ชิ้น / 4 ชิ้น (`suits.json` + `attrDescs`)\n")
    en_attr_descs = en.get("attrDescs", {})
    for suit_id, sdata in sorted(suits_db.items(), key=lambda x: int(x[0])):
        lines.append(f"### Suit ID `[{suit_id}]`")
        for tier_obj in sdata.get("tiers", []):
            p_num = tier_obj.get("limitNum")
            lines.append(f"#### โบนัสครบ {p_num} ชิ้น:")
            for stage_id, eff_info in sorted(tier_obj.get("effects", {}).items(), key=lambda x: int(x[0])):
                buff_id = str(eff_info.get("buffId"))
                params = eff_info.get("params", [])
                desc_raw = en_attr_descs.get(buff_id)
                lines.append(f"- **Spec Stage `{stage_id}`** (`buffId={buff_id}`, `params={params}`): `{clean_html(json.dumps(desc_raw, ensure_ascii=False))}`")

    # 3. ถอดรหัส bufPassiveEffects ของ Battle Imagines ทั้งหมด
    lines.append("\n---\n## 3. คำอธิบายและตัวเลขจริงของ `bufPassiveEffects` ของ Battle Imagines ทั้งหมด\n")
    en_imagines = en.get("battleImagines", {})
    for img_id, img_data in sorted(imagines_db.items(), key=lambda x: int(x[0])):
        buf_effs = img_data.get("bufPassiveEffects", [])
        if not buf_effs:
            continue
        im_name = clean_html((en_imagines.get(str(img_id)) or {}).get("name", f"Imagine#{img_id}"))
        for brow in buf_effs:
            bid = str(brow[0])
            tier_params = brow[1:]
            bdesc = en_attr_descs.get(bid)
            lines.append(f"- **Imagine `[{img_id}] {im_name}`** (`buffId={bid}`):")
            lines.append(f"  - *Text Template*: `{clean_html(json.dumps(bdesc, ensure_ascii=False))}`")
            lines.append(f"  - *Values (T0→T5)*: `{tier_params}`")

    OUT_FILE.write_text("\n".join(lines), encoding="utf-8")
    print(f"✅ สกัดข้อมูลสกิลลูก (<linktext>) และบัฟ (attrDescs) สำเร็จที่: {OUT_FILE}")

if __name__ == "__main__":
    main()