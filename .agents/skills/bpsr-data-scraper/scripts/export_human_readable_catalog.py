# ไฟล์: .agents/skills/bpsr-data-scraper/scripts/export_human_readable_catalog.py
import os
import re
import json
import ast
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[4]
EXTERNAL_DIR = PROJECT_ROOT / "src" / "data" / "_external_repos"
MAXROLL_DIR = PROJECT_ROOT / "src" / "data" / "_raw_dumps" / "maxroll_planner"
CATALOG_OUT = PROJECT_ROOT / "Docs" / "FULL_GAME_DATA_CATALOG.md"

def find_all_data_files():
    """
    ค้นหาไฟล์ข้อมูลทั้งหมดใน bpsr-build-planner, StarResonanceAutoMod,
    star-resonance-module-optimizer และ maxroll_planner
    """
    discovered = {}
    for root, dirs, files in os.walk(EXTERNAL_DIR):
        if any(skip in root for skip in [".git", "node_modules", "dist", "target"]):
            continue
        for f in files:
            p = Path(root) / f
            if p.suffix.lower() in {".json", ".ts", ".js", ".mjs", ".py", ".md"}:
                rel = str(p.relative_to(EXTERNAL_DIR))
                discovered[rel] = p

    if MAXROLL_DIR.exists():
        for f in MAXROLL_DIR.iterdir():
            if f.is_file():
                discovered[f"maxroll/{f.name}"] = f

    return discovered

def extract_maxroll_texts_and_loader():
    """
    แกะไฟล์ 08_sr-texts-en_US-bcd8bbf7.js (คำแปลภาษาอังกฤษทั้งหมดของ Maxroll)
    และ 07_loader-98169fad.js (โครงสร้างข้อมูลทั้งหมดของ Maxroll Planner)
    """
    texts_file = None
    loader_file = None
    if MAXROLL_DIR.exists():
        for f in MAXROLL_DIR.iterdir():
            if "sr-texts-en_US" in f.name:
                texts_file = f
            elif "loader-" in f.name:
                loader_file = f

    en_texts = {}
    loader_summary = []

    if texts_file and texts_file.exists():
        raw = texts_file.read_text(encoding="utf-8", errors="ignore")
        # ดึง JSON ก้อนใหญ่หรือคู่ Key-Value ในไฟล์ภาษาอังกฤษของ Maxroll
        # รูปแบบในไฟล์มักเป็น JSON.parse('...') หรือ Object Literal
        json_matches = re.findall(r'JSON\.parse\(([\'"].*?[\'"])\)', raw)
        if json_matches:
            for jm in json_matches:
                try:
                    unquoted = ast.literal_eval(jm)
                    parsed = json.loads(unquoted)
                    if isinstance(parsed, dict):
                        en_texts.update(parsed)
                except Exception:
                    pass
        if not en_texts:
            # ดึงคู่ key: "value" โดยตรง
            pairs = re.findall(r'["\']?([a-zA-Z0-9_.-]+)["\']?\s*:\s*["\']([^"\']{2,300})["\']', raw)
            for k, v in pairs:
                en_texts[k] = v

    if loader_file and loader_file.exists():
        raw_loader = loader_file.read_text(encoding="utf-8", errors="ignore")
        # หาชื่อตารางหลักใน loader
        table_names = re.findall(r'([a-zA-Z0-9_]+Table|[a-zA-Z0-9_]+Config|[a-zA-Z0-9_]+Data)\b', raw_loader)
        loader_summary = list(dict.fromkeys(table_names))[:100]

    return en_texts, loader_summary

def extract_bpsr_planner_structure():
    """
    อ่านเอกสารและไฟล์ข้อมูลทั้งหมดใน bpsr-build-planner
    ซึ่งผู้พัฒนาได้แกะ ZTable จากตัวเกมมาจัดระเบียบไว้แล้ว
    """
    bp_dir = EXTERNAL_DIR / "bpsr-build-planner"
    sections = {
        "files_tree": [],
        "status_calc_doc": "",
        "char_model_doc": "",
        "equip_enchant_doc": "",
        "json_samples": {},
    }
    if not bp_dir.exists():
        return sections

    # 1. อ่านไฟล์ Docs ทั้ง 3 ตัวที่สรุปกลไกเกมและโครงสร้างข้อมูลจริง
    for key, fname in [
        ("status_calc_doc", "STATUS_CALCULATION.md"),
        ("char_model_doc", "CHARACTER_DATA_MODEL.md"),
        ("equip_enchant_doc", "EQUIPMENT_ENCHANT.md"),
    ]:
        doc_path = bp_dir / "docs" / fname
        if doc_path.exists():
            sections[key] = doc_path.read_text(encoding="utf-8", errors="ignore")

    # 2. กวาดหาไฟล์ใน src/ และ public/ ทั้งหมดของ bpsr-build-planner
    for root, dirs, files in os.walk(bp_dir):
        if any(skip in root for skip in [".git", "node_modules", "dist"]):
            continue
        for f in files:
            p = Path(root) / f
            rel = str(p.relative_to(bp_dir))
            if not any(rel.endswith(ext) for ext in [".png", ".webp", ".svg", ".ico"]):
                sections["files_tree"].append((rel, p.stat().st_size / 1024))

            # ถ้าเป็นไฟล์ .json หรือไฟล์เก็บข้อมูลใน src/ ให้ดึงโครงสร้างและข้อมูลข้างในออกมา
            if p.suffix.lower() == ".json" and "package" not in f and "tsconfig" not in f:
                try:
                    data = json.loads(p.read_text(encoding="utf-8", errors="ignore"))
                    sections["json_samples"][rel] = data
                except Exception:
                    pass

    return sections

def extract_modules_from_automod_and_optimizer():
    """
    ดึงข้อมูล Module ทั้งหมดจาก StarResonanceAutoMod/module_types.py
    และ star-resonance-module-optimizer/index.html
    """
    mod_info = {"auto_mod_py": "", "optimizer_data": ""}
    
    automod_file = EXTERNAL_DIR / "StarResonanceAutoMod" / "module_types.py"
    if automod_file.exists():
        mod_info["auto_mod_py"] = automod_file.read_text(encoding="utf-8", errors="ignore")

    opt_html = EXTERNAL_DIR / "star-resonance-module-optimizer" / "index.html"
    if opt_html.exists():
        raw_html = opt_html.read_text(encoding="utf-8", errors="ignore")
        # ดึงสคริปต์หรือตารางข้อมูลที่ฝังอยู่ใน index.html
        scripts = re.findall(r'<script[^>]*>(.*?)</script>', raw_html, re.DOTALL)
        mod_info["optimizer_data"] = "\n---\n".join(s.strip() for s in scripts if len(s.strip()) > 100)

    return mod_info

def generate_catalog():
    print("⏳ กำลังสกัดข้อมูลจริงทั้งหมดจากไฟล์ในเครื่องของคุณ...")
    en_texts, loader_tables = extract_maxroll_texts_and_loader()
    bp_data = extract_bpsr_planner_structure()
    mod_data = extract_modules_from_automod_and_optimizer()

    out = []
    out.append("# สารานุกรมข้อมูลดิบทั้งหมดที่สกัดได้จากฐานข้อมูลในเครื่อง (Full Game Data Catalog)\n")

    # -------------------------------------------------------------------------
    # ส่วนที่ A: โครงสร้างไฟล์ทั้งหมดใน bpsr-build-planner (เพื่อให้เห็นว่าไฟล์ข้อมูลอยู่ตรงไหนบ้าง)
    # -------------------------------------------------------------------------
    out.append("## 0. รายชื่อไฟล์โค้ดและฐานข้อมูลทั้งหมดใน `bpsr-build-planner` (ไม่รวมรูปภาพ)\n")
    for rel, sz in sorted(bp_data["files_tree"]):
        out.append(f"- `{rel}` ({sz:,.1f} KB)")

    # -------------------------------------------------------------------------
    # ส่วนที่ B: ข้อมูล JSON ทั้งหมดที่พบใน bpsr-build-planner
    # -------------------------------------------------------------------------
    out.append("\n---\n## 1. สรุปข้อมูลในไฟล์ JSON ทั้งหมดของ `bpsr-build-planner`\n")
    for rel, data in sorted(bp_data["json_samples"].items()):
        out.append(f"### ไฟล์: `{rel}`")
        if isinstance(data, dict):
            keys = list(data.keys())
            out.append(f"- **Type:** Object ({len(keys)} keys) -> ตัวอย่าง Keys: `{keys[:20]}`")
            # แสดงตัวอย่าง 2 รายการแรก
            sample_items = list(data.items())[:2]
            out.append("```json\n" + json.dumps(dict(sample_items), ensure_ascii=False, indent=2)[:1500] + "\n```\n")
        elif isinstance(data, list):
            out.append(f"- **Type:** Array ({len(data)} items)")
            out.append("```json\n" + json.dumps(data[:2], ensure_ascii=False, indent=2)[:1500] + "\n```\n")

    # -------------------------------------------------------------------------
    # ส่วนที่ C: ข้อมูล Module จาก StarResonanceAutoMod & Optimizer
    # -------------------------------------------------------------------------
    out.append("\n---\n## 2. ข้อมูลจริงของระบบ Module (จาก `StarResonanceAutoMod` & `module-optimizer`)\n")
    if mod_data["auto_mod_py"]:
        out.append("### โค้ดตาราง Module ใน `StarResonanceAutoMod/module_types.py`:\n```python\n")
        out.append(mod_data["auto_mod_py"])
        out.append("\n```\n")
    if mod_data["optimizer_data"]:
        out.append("### ข้อมูลที่ฝังใน `star-resonance-module-optimizer/index.html` (ตัดตอน):\n```javascript\n")
        out.append(mod_data["optimizer_data"][:8000])
        out.append("\n```\n")

    # -------------------------------------------------------------------------
    # ส่วนที่ D: เอกสารโมเดลข้อมูลและสมการคำนวณจาก bpsr-build-planner
    # -------------------------------------------------------------------------
    out.append("\n---\n## 3. โมเดลข้อมูลตัวละคร (จาก `docs/CHARACTER_DATA_MODEL.md`)\n")
    out.append(bp_data["char_model_doc"])

    out.append("\n---\n## 4. ข้อมูลระบบอุปกรณ์และออปชัน (จาก `docs/EQUIPMENT_ENCHANT.md`)\n")
    out.append(bp_data["equip_enchant_doc"])

    out.append("\n---\n## 5. สมการคำนวณสเตตัสทั้งหมด (จาก `docs/STATUS_CALCULATION.md`)\n")
    out.append(bp_data["status_calc_doc"])

    # -------------------------------------------------------------------------
    # ส่วนที่ E: ข้อมูลที่พบใน Maxroll Loader & English Texts
    # -------------------------------------------------------------------------
    out.append("\n---\n## 6. ข้อมูลที่สกัดได้จากไฟล์ `07_loader` & `08_sr-texts-en_US` ของ Maxroll\n")
    out.append(f"- **จำนวนข้อความภาษาอังกฤษที่ดึงได้จาก `08_sr-texts-en_US`:** `{len(en_texts):,}` รายการ\n")
    out.append(f"- **รายชื่อตารางข้อมูลที่พบใน `07_loader`:** `{loader_tables}`\n")
    if en_texts:
        sample_en = dict(list(en_texts.items())[:50])
        out.append("### ตัวอย่างข้อความภาษาอังกฤษ 50 รายการแรก:\n```json\n")
        out.append(json.dumps(sample_en, ensure_ascii=False, indent=2))
        out.append("\n```\n")

    full_text = "\n".join(out)
    CATALOG_OUT.write_text(full_text, encoding="utf-8")

    print("=" * 75)
    print(f"✅ สร้างไฟล์สารานุกรมสำเร็จแล้วที่: {CATALOG_OUT}")
    print(f"📦 ขนาดไฟล์รายงาน: {CATALOG_OUT.stat().st_size / 1024:,.1f} KB")
    print("=" * 75)
    print("\n📌 รายชื่อไฟล์โค้ดและ JSON ใน bpsr-build-planner (35 รายการแรก):")
    for rel, sz in sorted(bp_data["files_tree"])[:35]:
        print(f"   - {rel:<55} ({sz:,.1f} KB)")
    print(f"\n📌 รายชื่อไฟล์ JSON ข้อมูลเกมที่พบใน bpsr-build-planner ({len(bp_data['json_samples'])} ไฟล์):")
    for rel in sorted(bp_data["json_samples"].keys()):
        print(f"   - {rel}")

if __name__ == "__main__":
    generate_catalog()