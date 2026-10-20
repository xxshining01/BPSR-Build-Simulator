# ไฟล์: .agents/skills/bpsr-data-scraper/scripts/extract_all_combat_mechanics_catalog.py
import json
import re
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[4]
GAME_DB_DIR = PROJECT_ROOT / "src" / "data" / "game-db"
LOCALE_EN_FILE = PROJECT_ROOT / "src" / "data" / "locales" / "en_US" / "game-data.json"
REF_LOGIC_DIR = PROJECT_ROOT / "src" / "engine" / "_reference_logic"
OUT_FILE = PROJECT_ROOT / "Docs" / "COMBAT_SIMULATOR_MASTER_DATA.md"

def load_json(path: Path):
    if not path.exists():
        return {}
    return json.loads(path.read_text(encoding="utf-8", errors="ignore"))

def clean_html(raw) -> str:
    if not raw:
        return ""
    text = str(raw)
    # แปลง <linktext=1234>Name</linktext> ให้เห็นรหัสชัดเจน เช่น [Link#1234: Name]
    text = re.sub(r"<linktext=(\d+)>(.*?)</linktext>", r"[Link#\1: \2]", text)
    text = re.sub(r"<br\s*/?>", " | ", text)
    text = re.sub(r"<[^>]+>", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text

def format_effect_params(params_list) -> list[str]:
    """แปลง activeEffectParams ของสกิลหรือ Imagine ให้เป็นบรรทัดข้อความที่อ่านเข้าใจง่าย"""
    out = []
    if not isinstance(params_list, list):
        return out
    for row in params_list:
        if not isinstance(row, list) or len(row) < 2:
            continue
        label = clean_html(row[0])
        val_part = row[1]
        if isinstance(val_part, list):
            # กรณีเป็นโครงสร้าง [{"r": [...]}, " ATK +", {"l": [...]}] หรือ ["1000%", ..., "1750%"]
            has_dict = any(isinstance(x, dict) for x in val_part)
            if has_dict:
                pieces = []
                for elem in val_part:
                    if isinstance(elem, dict):
                        if "r" in elem and isinstance(elem["r"], list):
                            r_vals = elem["r"]
                            pieces.append(f"[Tier G0→G6: {r_vals[0]} .. {r_vals[-1]} ({', '.join(r_vals)})]")
                        elif "l" in elem and isinstance(elem["l"], list):
                            l_vals = elem["l"]
                            pieces.append(f"[Lv1→Lv30: {l_vals[0]} .. {l_vals[-1]}]")
                    else:
                        pieces.append(clean_html(elem))
                out.append(f"  - **{label}**: {''.join(pieces)}")
            else:
                cleaned_vals = [clean_html(v) for v in val_part]
                if len(cleaned_vals) == 1:
                    out.append(f"  - **{label}**: `{cleaned_vals[0]}`")
                else:
                    out.append(f"  - **{label} (T0→T5)**: {' → '.join(f'`{v}`' for v in cleaned_vals)}")
    return out

def main():
    print("🚀 กำลังสกัดข้อมูลกลไกการต่อสู้ทั้งหมดสำหรับ Combat Simulator...")
    en = load_json(LOCALE_EN_FILE)
    classes_db = load_json(GAME_DB_DIR / "classes.json")
    skills_db = load_json(GAME_DB_DIR / "skills.json")
    talents_db = load_json(GAME_DB_DIR / "talent-tree.json")
    imagines_db = load_json(GAME_DB_DIR / "battle-imagines.json")
    suits_db = load_json(GAME_DB_DIR / "suits.json")
    equip_db = load_json(GAME_DB_DIR / "equipment.json")
    modules_db = load_json(GAME_DB_DIR / "modules.json")
    season_talents_db = load_json(GAME_DB_DIR / "season-talents.json")

    en_classes = en.get("classes", {})
    en_skills = en.get("skills", {})
    en_talents = en.get("talents", {})
    en_imagines = en.get("battleImagines", {})
    en_items = en.get("items", {})
    en_attr_descs = en.get("attrDescs", {})
    en_mod_effects = en.get("moduleEffects", {})
    en_season_talents = en.get("seasonTalents", {})
    en_link_texts = en.get("linkTexts", {}) or en.get("textDescs", {})

    lines = [
        "# สารานุกรมข้อมูลกลไกการต่อสู้ฉบับสมบูรณ์ (Combat Simulator Master Data Specification)",
        "**เอกสารนี้สกัดจากฐานข้อมูลจริง (`en_US/game-data.json` & `ZTable JSONs`) 100% เพื่อใช้เป็นพิมพ์เขียวในการเขียนเอกสาร `ADR.md`, `SAD.md`, `SDD.md` และเขียนโค้ด `combatSimulatorEngine.ts`**\n",
        "---",
    ]

    # =========================================================================
    # SECTION 1: ALL 9 CLASSES — SKILLS & EXACT MULTIPLIERS (G0-G6, Lv.1-30)
    # =========================================================================
    lines.append("\n## หมวดที่ 1: สกิลประจำอาชีพทั้ง 9 คลาส และตารางตัวคูณจริง (`activeEffectParams`)\n")
    for cid, cdata in sorted(classes_db.items(), key=lambda x: int(x[0])):
        cname = clean_html(en_classes.get(str(cid), {}).get("name", f"Class {cid}"))
        lines.append(f"### อาชีพ [{cid}] {cname}")

        skill_groups = [
            ("Basic Attack (คลิกซ้าย)", cdata.get("normalAttackSkill", [])),
            ("Special Skill (ปุ่มเลข 1)", cdata.get("specialSkill", [])),
            ("Ultimate Skill (ปุ่ม R)", cdata.get("ultimateSkill", [])),
            ("Expertise Skills (สกิลเลือกใส่)", cdata.get("normalSkill", [])),
            ("Talent / Proc / Passive Skills (สกิลเสริมจากสาย Talent)", cdata.get("talentSkill", [])),
        ]

        for group_label, s_list in skill_groups:
            if not s_list:
                continue
            lines.append(f"\n#### {group_label}:")
            for sid in s_list:
                s_str = str(sid)
                sk_en = en_skills.get(s_str) or {}
                sk_name = clean_html(sk_en.get("name", f"Skill#{s_str}"))
                sk_desc = clean_html(sk_en.get("description", ""))
                sk_labels = ", ".join(sk_en.get("skillLabel", []))
                lines.append(f"- **`[{s_str}] {sk_name}`** ({sk_labels})")
                if sk_desc:
                    lines.append(f"  - *Description*: {sk_desc}")
                param_lines = format_effect_params(sk_en.get("activeEffectParams", []))
                lines.extend(param_lines)
        lines.append("\n---")

    # =========================================================================
    # SECTION 2: TALENT TREE NODES (KEYSTONES & COMBAT PROC NODES BY CLASS)
    # =========================================================================
    lines.append("\n## หมวดที่ 2: ผังโหนด Talent ทั้ง 9 อาชีพ (โหนดเปิดสาย & โหนดที่มีเอฟเฟกต์การต่อสู้/Proc)\n")
    all_nodes = talents_db.get("nodes", {})
    stages_by_weapon = talents_db.get("stagesByWeaponType", {})

    for cid, cdata in sorted(classes_db.items(), key=lambda x: int(x[0])):
        cname = clean_html(en_classes.get(str(cid), {}).get("name", f"Class {cid}"))
        stages = stages_by_weapon.get(str(cid), [])
        lines.append(f"### ผัง Talent ของอาชีพ [{cid}] {cname} (Stages: `{stages}`)")

        class_nodes = [
            (nid, nd) for nid, nd in all_nodes.items()
            if str(nd.get("weaponGroup")) == str(cid)
        ]
        class_nodes.sort(key=lambda x: int(x[0]))

        for nid, nd in class_nodes:
            # ดึงคำแปลจากรหัส nodeId*10+1 หรือ nodeId
            t_en = en_talents.get(f"{nid}1") or en_talents.get(str(nid)) or {}
            t_name = clean_html(t_en.get("name", f"Node#{nid}"))
            t_desc = clean_html(t_en.get("description", ""))
            ntype = nd.get("type", 0)
            effects = nd.get("effects", [])

            # ข้ามโหนดที่บวกสเตตัสพื้นฐานเล็กน้อย (เช่น Physical Attack I, Agility I) เพื่อเน้นโหนดกลไกการต่อสู้
            is_stat_minor = all(isinstance(e, list) and len(e) > 0 and e[0] == 1 for e in effects) and len(effects) > 0
            if is_stat_minor and ntype not in [5, 2, 3]:
                continue

            type_badge = "★ KEYSTONE SPEC" if ntype == 5 else f"Type {ntype}"
            lines.append(f"- **`[{nid}] {t_name}`** ({type_badge} | Effects: `{effects}`)")
            if t_desc:
                lines.append(f"  - *Combat Logic*: {t_desc}")
        lines.append("\n---")

    # =========================================================================
    # SECTION 3: ALL 73 BATTLE IMAGINES (PASSIVE + ACTIVE SKILL PARAMS T0-T5)
    # =========================================================================
    lines.append("\n## หมวดที่ 3: Battle Imagines ทั้ง 73 ตัว (ทั้งผล Passive สวมใส่ และ Active กดใช้ T0→T5)\n")
    for img_id, img_data in sorted(imagines_db.items(), key=lambda x: int(x[0])):
        im_en = en_imagines.get(str(img_id)) or {}
        name = clean_html(im_en.get("name") or en_items.get(str(img_id), {}).get("name", f"Imagine#{img_id}"))
        act_name = clean_html(im_en.get("activeSkillName", ""))
        desc = clean_html(im_en.get("description", ""))
        labels = ", ".join(im_en.get("skillLabel", []))
        passive_effs = img_data.get("passiveEffects", [])
        buf_passive_effs = img_data.get("bufPassiveEffects", [])

        lines.append(f"### Imagine `[{img_id}] {name}` — Active: *{act_name}* ({labels})")
        lines.append(f"- **Raw Passive Effects**: `passiveEffects={passive_effs}` | `bufPassiveEffects={buf_passive_effs}`")
        if desc:
            lines.append(f"- **Description**: {desc}")
        param_lines = format_effect_params(im_en.get("activeEffectParams", []))
        lines.extend(param_lines)

    # =========================================================================
    # SECTION 4: EQUIPMENT SUIT EFFECTS (2PC / 4PC) & LEGENDARY WEAPON EFFECTS
    # =========================================================================
    lines.append("\n---\n## หมวดที่ 4: โบนัสเซ็ตอุปกรณ์ (2 ชิ้น / 4 ชิ้น) และอาวุธที่มีเอฟเฟกต์ตอนต่อสู้\n")
    for suit_id, sdata in sorted(suits_db.items(), key=lambda x: int(x[0])):
        lines.append(f"### Suit ID `[{suit_id}]`")
        lines.append("```json\n" + json.dumps(sdata, ensure_ascii=False, indent=2) + "\n```")

    # =========================================================================
    # SECTION 5: MODULES & LINK LEVELS (LV.1 - LV.6)
    # =========================================================================
    lines.append("\n---\n## หมวดที่ 5: โมดูลทั้ง 21 ชนิด และผลลัพธ์ที่ระดับ Link Lv.1–6 (`moduleEffects`)\n")
    for mod_id, m_en in sorted(en_mod_effects.items(), key=lambda x: int(x[0]) if str(x[0]).isdigit() else 9999):
        m_name = clean_html(m_en.get("name", f"Module#{mod_id}"))
        m_descs = m_en.get("descriptions") or m_en.get("levels") or m_en
        lines.append(f"- **`[{mod_id}] {m_name}`**: `{clean_html(json.dumps(m_descs, ensure_ascii=False))}`")

    # =========================================================================
    # SECTION 6: DEEP SLUMBER PSYCHOSCOPE (8 TEMPLATES, ORDINARY & BOND EFFECTS)
    # =========================================================================
    lines.append("\n---\n## หมวดที่ 6: Deep Slumber Psychoscope ทั้ง 8 สาย (`templates`, `ordinaryEffects`, `advancedEffects`)\n")
    st_templates = en_season_talents.get("templates", {})
    st_ordinary = en_season_talents.get("ordinaryEffects", {})
    st_advanced = en_season_talents.get("advancedEffects", {})

    lines.append("### 6.1 รายชื่อสาย Psychoscope ทั้ง 8 สาย:")
    for tid, tval in st_templates.items():
        lines.append(f"- **Template `[{tid}]`**: `{clean_html(json.dumps(tval, ensure_ascii=False))}`")

    lines.append("\n### 6.2 โหนดบัฟธรรมดา (`ordinaryEffects`):")
    for oid, oval in list(st_ordinary.items())[:25]:
        lines.append(f"- **`[{oid}]`**: `{clean_html(json.dumps(oval, ensure_ascii=False))}`")

    lines.append("\n### 6.3 เอฟเฟกต์ขั้นบันไดจาก Bond Points (`advancedEffects`):")
    for aid, aval in st_advanced.items():
        lines.append(f"- **`[{aid}]`**: `{clean_html(json.dumps(aval, ensure_ascii=False))}`")

    # =========================================================================
    # SECTION 7: COOKING FOOD & ALCHEMY SERUMS / POTIONS
    # =========================================================================
    lines.append("\n---\n## หมวดที่ 7: บัฟอาหาร (Cooking Cuisine) และยา (Alchemy Serums) ใน `cookingBuff.ts`\n")
    cooking_ts_path = REF_LOGIC_DIR / "cookingBuff.ts"
    if cooking_ts_path.exists():
        lines.append("```typescript\n" + cooking_ts_path.read_text(encoding="utf-8") + "\n```")

    OUT_FILE.write_text("\n".join(lines), encoding="utf-8")
    print("=" * 75)
    print(f"✅ สกัดข้อมูลกลไกการต่อสู้ครบทั้ง 7 หมวดสำเร็จแล้วที่: {OUT_FILE}")
    print(f"📏 ขนาดไฟล์รายงาน: {OUT_FILE.stat().st_size / 1024:.1f} KB")
    print("=" * 75)

if __name__ == "__main__":
    main()