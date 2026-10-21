# ไฟล์: .agents/skills/bpsr-data-scraper/scripts/extract_final_missing_pieces.py
import json
import re
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[4]
GAME_DB_DIR = PROJECT_ROOT / "src" / "data" / "game-db"
LOCALE_EN_FILE = PROJECT_ROOT / "src" / "data" / "locales" / "en_US" / "game-data.json"
REF_LOGIC_DIR = PROJECT_ROOT / "src" / "engine" / "_reference_logic"
OUT_FILE = PROJECT_ROOT / "Docs" / "FINAL_VERIFIED_MISSING_PIECES.md"

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
    equip_db = load_json(GAME_DB_DIR / "equipment.json")
    enchants_db = load_json(GAME_DB_DIR / "enchants.json")
    season_talents_db = load_json(GAME_DB_DIR / "season-talents.json")
    phantom_factors_db = load_json(GAME_DB_DIR / "phantom-factors.json")

    en_items = en.get("items", {})
    en_attrs = en.get("attributes", {})
    en_attr_descs = en.get("attrDescs", {})
    en_text_descs = en.get("textDescs", {})
    en_st = en.get("seasonTalents", {})

    lines = [
        "# ข้อมูลส่วนสุดท้ายที่เก็บตกครบ 100% (Psychoscope Links 1200-1220, Factors G1-G10, Sigils, Equipment Affixes)\n"
    ]

    # =========================================================================
    # 1. PSYCHOSCOPE SUB-SKILLS (Link#1200 .. Link#1225 ใน textDescs)
    # =========================================================================
    lines.append("## 1. ตัวคูณดาเมจและเอฟเฟกต์ของสกิลลูก Deep Slumber Psychoscope (`textDescs` รหัส `1200`–`1225`)\n")
    for tid in range(1195, 1230):
        t_entry = en_text_descs.get(str(tid))
        if t_entry:
            lines.append(f"- **`Link#{tid}`**: `{clean_html(json.dumps(t_entry, ensure_ascii=False))}`")

    # =========================================================================
    # 2. PSYCHOSCOPE BOND POINT EXCLUSIVE EFFECTS (3003610 .. 3003730)
    # =========================================================================
    lines.append("\n---\n## 2. คำอธิบายจริงของโบนัสขั้นบันได Bond Points ทั้ง 8 สาย (`3003610`–`3003730`)\n")
    for bid in range(3003610, 3003740, 10):
        bdesc = en_attr_descs.get(str(bid))
        if bdesc:
            lines.append(f"- **`Buff#{bid}`**: `{clean_html(json.dumps(bdesc, ensure_ascii=False))}`")

    # =========================================================================
    # 3. ALL PHANTOM FACTORS (COMMON & BY_CLASS G1..G10 WITH RESOLVED TEXT)
    # =========================================================================
    lines.append("\n---\n## 3. รายการ Factors ทั้งหมด (`phantom-factors.json` + คำแปลและค่า G1→G10)\n")
    for section_key in ["common", "byClass"]:
        sec_dict = phantom_factors_db.get(section_key, {})
        lines.append(f"### หมวด `{section_key}` (จำนวน {len(sec_dict)} รายการ):")
        for fid, fdata in sorted(sec_dict.items(), key=lambda x: int(x[0]) if str(x[0]).isdigit() else 0):
            fname = clean_html(en_items.get(str(fid)) or en_st.get("factors", {}).get(str(fid), f"Factor#{fid}"))
            type_id = fdata.get("typeId")
            prof_ids = fdata.get("professionIds", [])
            grades = fdata.get("grades", [])
            if not grades:
                continue
            g1 = grades[0]
            g_max = grades[-1]
            effs_g1 = g1.get("effects", [])
            effs_gmax = g_max.get("effects", [])
            pars_g1 = g1.get("buffPars", [])
            pars_gmax = g_max.get("buffPars", [])

            desc_list = []
            for idx, erow in enumerate(effs_gmax):
                if isinstance(erow, list) and len(erow) >= 2:
                    et, aid = erow[0], erow[1]
                    v1 = effs_g1[idx][2] if idx < len(effs_g1) and len(effs_g1[idx]) >= 3 else 0
                    vmax = erow[2] if len(erow) >= 3 else 0
                    if et == 3:
                        raw_d = clean_html(en_attr_descs.get(str(aid), f"Buff#{aid}"))
                        p1 = pars_g1[idx] if idx < len(pars_g1) else pars_g1
                        pmax = pars_gmax[idx] if idx < len(pars_gmax) else pars_gmax
                        desc_list.append(f"Buff[{aid}]: {raw_d} (G1 pars=`{p1}` → G{len(grades)} pars=`{pmax}`)")
                    else:
                        aname = clean_html(en_attrs.get(str(aid), f"Attr#{aid}"))
                        desc_list.append(f"{aname}: G1 `+{v1}` → G{len(grades)} `+{vmax}`")

            lines.append(f"- **`[{fid}] {fname}`** (Type `{type_id}` | Classes `{prof_ids}`): {' ; '.join(desc_list)}")

    # =========================================================================
    # 4. SIGILS / ENCHANTS (INSPECT ACTUAL KEYS IN enchants.json)
    # =========================================================================
    lines.append("\n---\n## 4. โครงสร้างจริงและรายการ Sigils ทั้งหมดใน `enchants.json`\n")
    for group_id, elist in sorted(enchants_db.items(), key=lambda x: int(x[0])):
        lines.append(f"### Enchant Group `[{group_id}]` (จำนวน {len(elist)} รายการ):")
        for entry in elist[:15]:
            item_id = entry.get("itemId") or entry.get("id")
            iname = clean_html((en_items.get(str(item_id)) or {}).get("name", f"Item#{item_id}") if isinstance(en_items.get(str(item_id)), dict) else en_items.get(str(item_id), f"Item#{item_id}"))
            lines.append(f"- **`[{item_id}] {iname}`**: `{clean_html(json.dumps(entry, ensure_ascii=False))}`")

    # =========================================================================
    # 5. EQUIPMENT STRUCTURE & LEGENDARY AFFIXES (FROM equipmentData.ts & equipment.json)
    # =========================================================================
    lines.append("\n---\n## 5. โครงสร้างจริงของอาวุธ Far Sea และออปชันม่วงใน `equipment.json` & `equipmentData.ts`\n")
    sample_far_sea = equip_db.get("200", {}).get("2000631") or equip_db.get("200", {}).get("2000617")
    lines.append("### ตัวอย่างโครงสร้าง JSON จริงของอาวุธ Far Sea (`2000631` Ember - Gaze of the Far Sea):")
    lines.append("```json\n" + json.dumps(sample_far_sea, ensure_ascii=False, indent=2) + "\n```")

    sample_armor = next(iter(equip_db.get("201", {}).values()), {})
    lines.append("### ตัวอย่างโครงสร้าง JSON จริงของอุปกรณ์สวมใส่ (`partId = 201` Helmet):")
    lines.append("```json\n" + json.dumps(sample_armor, ensure_ascii=False, indent=2) + "\n```")

    eq_data_ts = REF_LOGIC_DIR / "equipmentData.ts"
    if eq_data_ts.exists():
        lines.append("### โค้ดการอ่านค่าอุปกรณ์และออปชันม่วงจาก `equipmentData.ts`:")
        lines.append("```typescript\n" + eq_data_ts.read_text(encoding="utf-8") + "\n```")

    OUT_FILE.write_text("\n".join(lines), encoding="utf-8")
    print(f"✅ สร้างไฟล์เก็บตกส่วนสุดท้ายสำเร็จที่: {OUT_FILE}")

if __name__ == "__main__":
    main()