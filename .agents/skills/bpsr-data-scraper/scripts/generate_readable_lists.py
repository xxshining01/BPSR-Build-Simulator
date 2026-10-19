# ไฟล์: .agents/skills/bpsr-data-scraper/scripts/generate_readable_lists.py
import json
import re
from pathlib import Path
from typing import Any, Dict, List

PROJECT_ROOT = Path(__file__).resolve().parents[4]
BP_DIR = PROJECT_ROOT / "src" / "data" / "_external_repos" / "bpsr-build-planner"
DATA_DIR = BP_DIR / "src" / "data"
LOCALE_EN_PATH = BP_DIR / "src" / "locales" / "en_US" / "game-data.json"
OUT_DIR = PROJECT_ROOT / "Docs" / "catalog"
OUT_DIR.mkdir(parents=True, exist_ok=True)


def load_json(path: Path) -> Any:
    if not path.exists():
        print(f"[WARN] ไม่พบไฟล์: {path}")
        return {}
    return json.loads(path.read_text(encoding="utf-8", errors="ignore"))


print("⏳ กำลังโหลดฐานข้อมูลและพจนานุกรมภาษาอังกฤษ (en_US/game-data.json)...")
en = load_json(LOCALE_EN_PATH)

# โหลดตารางข้อมูลทั้งหมดจาก bpsr-build-planner/src/data/
classes_db = load_json(DATA_DIR / "classes.json")
skills_db = load_json(DATA_DIR / "skills.json")
talent_tree_db = load_json(DATA_DIR / "talent-tree.json")
imagines_db = load_json(DATA_DIR / "battle-imagines.json")
equipment_db = load_json(DATA_DIR / "equipment.json")
suits_db = load_json(DATA_DIR / "suits.json")
refine_db = load_json(DATA_DIR / "refine.json")
enchants_db = load_json(DATA_DIR / "enchants.json")
factors_db = load_json(DATA_DIR / "phantom-factors.json")
season_talents_db = load_json(DATA_DIR / "season-talents.json")
modules_db = load_json(DATA_DIR / "modules.json")

# พจนานุกรมย่อยใน en_US/game-data.json
en_items = en.get("items", {})
en_skills = en.get("skills", {})
en_classes = en.get("classes", {})
en_parts = en.get("parts", {})
en_attrs = en.get("attributes", {})
en_talents = en.get("talents", {})
en_season_talents = en.get("seasonTalents", {})
en_imagines = en.get("battleImagines", {})
en_talent_stages = en.get("talentStages", {})
en_mod_effects = en.get("moduleEffects", {})
en_attr_descs = en.get("attrDescs", {})
en_stat_descs = en.get("statDescs", {})
en_text_descs = en.get("textDescs", {})


# ==============================================================================
# HELPER FUNCTIONS: แปลงรหัส ID เป็นชื่อและข้อความที่มนุษย์อ่านเข้าใจ
# ==============================================================================
def clean_markup(text: str) -> str:
    if not text:
        return ""
    # ลบแท็กสีหรือสไตล์ของเกม เช่น <style=...>, </style>, <color=...>
    text = re.sub(r"<[^>]+>", "", str(text))
    return text.strip()


def get_name_desc(dict_obj: Dict[str, Any], key: Any, fallback_prefix: str = "ID") -> tuple[str, str]:
    entry = dict_obj.get(str(key))
    if isinstance(entry, dict):
        name = clean_markup(entry.get("name") or entry.get("title") or f"{fallback_prefix} {key}")
        desc = clean_markup(entry.get("description") or entry.get("desc") or entry.get("text") or "")
        return name, desc
    elif isinstance(entry, str):
        return clean_markup(entry), ""
    return f"{fallback_prefix} {key}", ""


def resolve_attr_name(attr_id: Any) -> str:
    s_id = str(attr_id)
    if s_id in en_attrs:
        name, _ = get_name_desc(en_attrs, s_id, "Attr")
        return name
    if s_id in en_stat_descs:
        name, _ = get_name_desc(en_stat_descs, s_id, "Stat")
        return name
    # พยายามตัดเลขท้าย (เช่น 11012 -> 11010) ซึ่งเป็นรหัสแม่ของสเตตัสใน ZTable
    if len(s_id) >= 5:
        base_id = s_id[:-1] + "0"
        if base_id in en_attrs:
            name, _ = get_name_desc(en_attrs, base_id, "Attr")
            return name
    return f"Attr#{s_id}"


def format_effect_pair(eff: Any) -> str:
    """แปลง [attrId, value] หรือ [type, attrId, value] เป็นข้อความ เช่น 'Strength +50'"""
    if not isinstance(eff, list) or len(eff) < 2:
        return str(eff)
    if len(eff) == 2:
        attr_id, val = eff[0], eff[1]
        return f"{resolve_attr_name(attr_id)}: +{val}"
    elif len(eff) >= 3:
        eff_type, attr_id, val = eff[0], eff[1], eff[2]
        if eff_type == 3:
            # อ้างอิง Buff/Effect Description
            b_name, b_desc = get_name_desc(en_attr_descs, attr_id, "Buff")
            if not b_desc:
                b_name, b_desc = get_name_desc(en_text_descs, attr_id, "Effect")
            return f"[Buff {attr_id}] {b_name} {b_desc}".strip()
        return f"{resolve_attr_name(attr_id)}: +{val} (Type {eff_type})"
    return str(eff)


def fill_params(template_text: str, params: List[Any]) -> str:
    if not template_text:
        return ""
    res = template_text
    for idx, p in enumerate(params):
        res = res.replace(f"{{{idx}}}", str(p))
        res = res.replace(f"{{p{idx+1}}}", str(p))
    return clean_markup(res)


# ==============================================================================
# หมวดที่ 1: CLASSES, SKILLS & TALENT TREES
# ==============================================================================
def build_01_classes_skills_talents():
    print("📝 กำลังสร้างรายงานหมวดที่ 1: Classes, Skills & Talent Trees...")
    lines = ["# 1. รายการอาชีพ (Classes), สกิลประจำคลาส (Skills) และผังโหนด Talents ทั้งหมด\n"]

    nodes_dict = talent_tree_db.get("nodes", {})
    tree_by_weapon = talent_tree_db.get("treeNodesByWeaponType", {})
    stages_by_weapon = talent_tree_db.get("stagesByWeaponType", {})

    for cid, cdata in sorted(classes_db.items(), key=lambda x: int(x[0])):
        if not cdata.get("isOpen", False):
            continue
        cname, cdesc = get_name_desc(en_classes, cid, "Class")
        lines.append(f"## อาชีพ [{cid}]: **{cname}**")
        if cdesc:
            lines.append(f"- **คำอธิบายคลาส:** {cdesc}")

        # สายย่อย (Talent Stages / Specializations)
        stage_ids = cdata.get("showTalentStage", [])
        stage_names = []
        for sid in stage_ids:
            sname, sdesc = get_name_desc(en_talent_stages, sid, "Spec")
            stage_names.append(f"**{sname}** (Stage ID: `{sid}`)" + (f" — {sdesc}" if sdesc else ""))
        lines.append(f"- **สาย Talents ย่อย (Specializations):** {', '.join(stage_names) if stage_names else 'N/A'}\n")

        # สกิลประจำอาชีพ
        lines.append("### 1.1 รายการสกิลประจำคลาส (Skills)")
        skill_groups = [
            ("การโจมตีปกติ (Normal Attack)", cdata.get("normalAttackSkill", [])),
            ("สกิลพิเศษประจำอาชีพ (Special Skill)", cdata.get("specialSkill", [])),
            ("ท่าไม้ตาย (Ultimate Skill)", cdata.get("ultimateSkill", [])),
            ("สกิลเลือกใส่ Slot 4 ช่อง (Normal Skills Pool)", cdata.get("normalSkill", [])),
            ("สกิลพาสซีฟ/อภิสิทธิ์ (Talent Skills Pool)", cdata.get("talentSkill", [])),
            ("สกิลบทบาท Season 3 (Role Skills Pool)", cdata.get("roleSkill", [])),
        ]
        for group_label, s_ids in skill_groups:
            lines.append(f"#### {group_label}:")
            for sid in s_ids:
                sname, sdesc = get_name_desc(en_skills, sid, "Skill")
                s_meta = skills_db.get(str(sid), {})
                max_rank = s_meta.get("maxRank", 0)
                lines.append(f"- **[{sid}] {sname}** (Max Tier/Rank: `{max_rank}`)")
                if sdesc:
                    lines.append(f"  - *Text:* {sdesc}")

        # ผัง Talent Tree Map ของอาชีพนี้
        lines.append("\n### 1.2 ผังโหนด Talents (Talent Tree Nodes & Connections)")
        # ตรวจสอบโหนดใน treeNodesByWeaponType ที่ตรงกับอาชีพ
        class_tree_nodes = tree_by_weapon.get(str(cid), {})
        if not class_tree_nodes and str(cid) in stages_by_weapon:
            class_tree_nodes = stages_by_weapon.get(str(cid), {})

        if isinstance(class_tree_nodes, dict) and class_tree_nodes:
            for stage_key, stage_nodes in class_tree_nodes.items():
                st_name, _ = get_name_desc(en_talent_stages, stage_key, "Branch")
                lines.append(f"#### สายผังโหนด: **{st_name}** (Key: `{stage_key}`)")
                if isinstance(stage_nodes, dict):
                    for n_id, n_info in stage_nodes.items():
                        t_name, t_desc = get_name_desc(en_talents, n_id, "Node")
                        node_def = nodes_dict.get(str(n_id), {})
                        eff_list = [format_effect_pair(e) for e in node_def.get("effects", [])]
                        cost = node_def.get("cost", 1)
                        prereq = n_info.get("prev", n_info.get("parent", n_info.get(" condition", [])))
                        lines.append(
                            f"- **Node [{n_id}] {t_name}** (Cost: `{cost}`, โยงจากโหนด: `{prereq}`)"
                        )
                        if t_desc:
                            lines.append(f"  - *Text:* {t_desc}")
                        if eff_list:
                            lines.append(f"  - *Effects:* {', '.join(eff_list)}")
                elif isinstance(stage_nodes, list):
                    for n_item in stage_nodes:
                        n_id = n_item.get("id") if isinstance(n_item, dict) else n_item
                        t_name, t_desc = get_name_desc(en_talents, n_id, "Node")
                        node_def = nodes_dict.get(str(n_id), {})
                        eff_list = [format_effect_pair(e) for e in node_def.get("effects", [])]
                        lines.append(f"- **Node [{n_id}] {t_name}** | Info: `{n_item}`")
                        if t_desc:
                            lines.append(f"  - *Text:* {t_desc}")
                        if eff_list:
                            lines.append(f"  - *Effects:* {', '.join(eff_list)}")
        else:
            # ดึงจาก nodes_dict ที่ weaponGroup ตรงกับ cid
            matching_nodes = [
                (nid, nd) for nid, nd in nodes_dict.items() if str(nd.get("weaponGroup")) == str(cid)
            ]
            lines.append(f"- พบโหนดของคลาสนี้จำนวน `{len(matching_nodes)}` โหนด:")
            for nid, nd in matching_nodes:
                t_name, t_desc = get_name_desc(en_talents, nid, "Node")
                eff_list = [format_effect_pair(e) for e in nd.get("effects", [])]
                buff_pars = nd.get("buffPars", [])
                resolved_desc = fill_params(t_desc, buff_pars[0] if buff_pars and isinstance(buff_pars[0], list) else buff_pars)
                lines.append(f"  - **Node [{nid}] {t_name}** (Cost: `{nd.get('cost', 1)}`, Type: `{nd.get('type')}`)")
                if resolved_desc:
                    lines.append(f"    - *Text:* {resolved_desc}")
                if eff_list:
                    lines.append(f"    - *Stat Effects:* {', '.join(eff_list)}")

        lines.append("\n---\n")

    # เพิ่มส่วน Global / Base Nodes (weaponGroup == 0)
    base_nodes = [(nid, nd) for nid, nd in nodes_dict.items() if nd.get("weaponGroup") == 0]
    if base_nodes:
        lines.append(f"## โหนดพื้นฐานส่วนกลาง (Common / Base Talent Nodes — {len(base_nodes)} โหนด)\n")
        for nid, nd in base_nodes[:100]:
            t_name, t_desc = get_name_desc(en_talents, nid, "Node")
            eff_list = [format_effect_pair(e) for e in nd.get("effects", [])]
            lines.append(f"- **Node [{nid}] {t_name}**: {t_desc} | Effects: `{', '.join(eff_list)}`")

    (OUT_DIR / "01_CLASSES_SKILLS_TALENTS.md").write_text("\n".join(lines), encoding="utf-8")


# ==============================================================================
# หมวดที่ 2: BATTLE IMAGINES (ครบทั้ง 73 ตัว พร้อมค่า Tier 0-5)
# ==============================================================================
def build_02_imagines():
    print("📝 กำลังสร้างรายงานหมวดที่ 2: Battle Imagines (73 ตัว พร้อมค่า Tier 0-5)...")
    lines = ["# 2. รายการ Battle Imagines ทั้งหมด (ระดับความแรร์, สกิลกดใช้, และค่าสเตตัส/บัฟตามระดับ Tier 0-5)\n"]
    lines.append(f"พบข้อมูล Battle Imagines ทั้งหมด **{len(imagines_db)} ตัว** ดังนี้:\n")

    rarity_map = {1: "R (Blue)", 2: "SR (Purple / Elite)", 3: "SSR (Gold / Boss)", 4: "UR/Mythic"}

    for img_id, img_data in sorted(imagines_db.items(), key=lambda x: int(x[0])):
        iname, idesc = get_name_desc(en_imagines, img_id, "Imagine")
        if iname.startswith("Imagine "):
            iname, idesc = get_name_desc(en_items, img_id, "Imagine")

        rarity = rarity_map.get(img_data.get("rarityType", 0), f"Rarity {img_data.get('rarityType')}")
        skill_id = img_data.get("skillId")
        sk_name, sk_desc = get_name_desc(en_skills, skill_id, "ActiveSkill")

        lines.append(f"## [{img_id}] **{iname}** — ระดับ: `{rarity}` (Season {img_data.get('seasonId', 1)})")
        if idesc:
            lines.append(f"- **คำอธิบาย Imagine:** {idesc}")
        lines.append(f"- **สกิลเมื่อกดใช้งาน (Active Skill [{skill_id}] - {sk_name}):**")
        if sk_desc:
            lines.append(f"  - *Active Text:* {sk_desc}")

        # Passive Stat Effects ตามระดับ Tier 0 ถึง 5
        passive_effs = img_data.get("passiveEffects", [])
        if passive_effs:
            lines.append("- **ค่าสเตตัสติดตัวตามระดับ Tier 0 ถึง Tier 5 (Passive Stats by Tier):**")
            for row in passive_effs:
                attr_id = row[0]
                tier_vals = row[1:]  # [Tier0, Tier1, Tier2, Tier3, Tier4, Tier5]
                tier_str = ", ".join([f"T{idx}: `+{v}`" for idx, v in enumerate(tier_vals)])
                lines.append(f"  - **{resolve_attr_name(attr_id)}**: {tier_str}")

        # Passive Buff Effects ตามระดับ Tier 0 ถึง 5
        buf_passives = img_data.get("bufPassiveEffects", [])
        if buf_passives:
            lines.append("- **เอฟเฟกต์บัฟพิเศษตามระดับ Tier 0 ถึง Tier 5 (Passive Buffs by Tier):**")
            for brow in buf_passives:
                buff_id = brow[0]
                tier_params = brow[1:]
                b_name, b_desc = get_name_desc(en_attr_descs, buff_id, "Buff")
                if not b_desc:
                    b_name, b_desc = get_name_desc(en_text_descs, buff_id, "Buff")
                lines.append(f"  - **Buff [{buff_id}] {b_name}**:")
                if b_desc:
                    lines.append(f"    - *Template Text:* {b_desc}")
                for t_idx, p_list in enumerate(tier_params):
                    p_arr = p_list if isinstance(p_list, list) else [p_list]
                    filled = fill_params(b_desc, p_arr) if b_desc else f"Params: {p_arr}"
                    lines.append(f"    - **Tier {t_idx}**: {filled} *(ค่าตัวแปร: `{p_arr}`)*")

        lines.append("\n---\n")

    (OUT_DIR / "02_BATTLE_IMAGINES_ALL_TIERS.md").write_text("\n".join(lines), encoding="utf-8")


# ==============================================================================
# หมวดที่ 3: EQUIPMENTS, PERFECTION 100, RARE ATTRIBUTES & SUIT SETS
# ==============================================================================
def build_03_equipments_and_sets():
    print("📝 กำลังสร้างรายงานหมวดที่ 3: Equipments, Perfection 100, Rare Attributes & Sets...")
    lines = [
        "# 3. รายการอุปกรณ์สวมใส่ทั้ง 11 ชิ้น, สเตตัสที่ Perfection 100, ออปชันม่วง (Legendary Affix) และเซ็ตอุปกรณ์ (Suits)\n"
    ]

    # 3.1 เซ็ตอุปกรณ์ (Suits 2 ชิ้น / 4 ชิ้น)
    lines.append("## 3.1 รายการเอฟเฟกต์เซ็ตอุปกรณ์ทั้งหมด (`suits.json`)\n")
    for suit_id, suit_data in sorted(suits_db.items()):
        sname, sdesc = get_name_desc(en_items, suit_id, "Suit Set")
        lines.append(f"### เซ็ต [{suit_id}]: **{sname}**")
        for tier_obj in suit_data.get("tiers", []):
            limit_num = tier_obj.get("limitNum")
            fv = tier_obj.get("fightValue", 0)
            lines.append(f"- **โบนัสสวมใส่ครบ {limit_num} ชิ้น (Fight Value: +{fv}):**")
            effs = tier_obj.get("effects", {})
            if not effs:
                lines.append("  - *(สเตตัสพื้นฐานประจำชิ้นเซ็ต)*")
            for spec_key, eff_detail in effs.items():
                sp_name, _ = get_name_desc(en_talent_stages, spec_key, "Spec")
                buff_id = eff_detail.get("buffId")
                params = eff_detail.get("params", [])
                b_name, b_desc = get_name_desc(en_attr_descs, buff_id, "SetBuff")
                if not b_desc:
                    b_name, b_desc = get_name_desc(en_text_descs, buff_id, "SetBuff")
                filled = fill_params(b_desc, params) if b_desc else f"Buff {buff_id} Params: {params}"
                lines.append(f"  - สาย **{sp_name} (`{spec_key}`)**: {b_name} — {filled}")
        lines.append("")

    # 3.2 รายการอุปกรณ์สวมใส่แยกตามช่อง 200 - 210
    lines.append("\n---\n## 3.2 รายการอุปกรณ์สวมใส่แยกตามช่อง (11 Slots) พร้อมค่า Perfection 0-100 และออปชันม่วง\n")
    for part_id, items_dict in sorted(equipment_db.items(), key=lambda x: int(x[0])):
        part_name, _ = get_name_desc(en_parts, part_id, "Slot")
        lines.append(f"### ช่องสวมใส่ [{part_id}]: **{part_name}** (จำนวนทั้งหมด `{len(items_dict)}` ชิ้น)")

        # เรียงตาม Gear Score (equipGs) จากสูงสุดลงมา เพื่อดูอุปกรณ์ Endgame ก่อน
        sorted_items = sorted(
            items_dict.values(),
            key=lambda x: (x.get("equipGs", 0), x.get("quality", 0), x.get("id", 0)),
            reverse=True,
        )

        # แสดงรายละเอียดของอุปกรณ์ระดับสูงสุดในช่องนั้นๆ (เช่น 35 ชิ้นแรก หรือทั้งหมดถ้าต้องการ)
        for eq in sorted_items[:40]:
            eq_id = eq.get("id")
            eq_name, eq_desc = get_name_desc(en_items, eq_id, "Gear")
            gs = eq.get("equipGs", 0)
            qual = eq.get("quality", 0)
            suit_id = eq.get("suitId")
            ench_id = eq.get("enchantId")

            lines.append(
                f"#### [{eq_id}] **{eq_name}** (GS: `{gs}`, Quality: `{qual}`, Suit: `{suit_id or 'None'}`, EnchantPool: `{ench_id or 'None'}`)"
            )

            # Base Stats
            base_stats = eq.get("baseStats", [])
            if base_stats:
                b_strs = [f"{resolve_attr_name(bs[0])}: `{bs[1]} ~ {bs[3]}`" for bs in base_stats if len(bs) >= 4]
                lines.append(f"- **สเตตัสพื้นฐาน (Base Stats):** {', '.join(b_strs)}")

            # Perfection / Evolution Stats (0 - 100%)
            evo_min = eq.get("reforgeEvoMin", 0)
            evo_max = eq.get("reforgeEvoMax", 0)
            max_perf = eq.get("reforgeMaxPerfectline", 100)
            evo_list = eq.get("evo", [])
            fixed_evo = eq.get("fixedEvolutionStats", {})

            if evo_list:
                evo_names = [resolve_attr_name(e_attr) for e_attr in evo_list]
                lines.append(
                    f"- **สเตตัสรองที่เลือกได้ (Sub/Evo Stats Pool — ที่ Perfection 0% -> {max_perf}% ค่าจะวิ่งจาก `{evo_min}` -> `{evo_max}`):** {', '.join(evo_names)}"
                )
            if fixed_evo:
                f_strs = [f"{resolve_attr_name(k)}: `+{v}`" for k, v in fixed_evo.items()]
                lines.append(f"- **สเตตัสเซ็ตล็อกตายตัวแต้มทะลุหลอด (Fixed Over-capped Stats):** {', '.join(f_strs)}")

            # ออปชันม่วง (Legendary Affix / Rare Attributes)
            leg_affixes = eq.get("legendaryAffix", [])
            if leg_affixes:
                aff_strs = []
                for la in leg_affixes:
                    if isinstance(la, dict):
                        a_name = resolve_attr_name(la.get("attrId"))
                        vals = la.get("values", [])
                        is_pct = la.get("isPercent", False)
                        unit = "%" if is_pct else ""
                        aff_strs.append(f"{a_name} (`{vals}{unit}`)")
                if aff_strs:
                    lines.append(f"- **ออปชันม่วงที่เลือกได้ (Rare / Legendary Affixes):** {', '.join(aff_strs)}")

        lines.append("\n---\n")

    (OUT_DIR / "03_EQUIPMENTS_PERFECTION_AND_SETS.md").write_text("\n".join(lines), encoding="utf-8")


# ==============================================================================
# หมวดที่ 4: SIGILS / ENCHANTS (Gems & Engravings Lv.1, 2, 3)
# ==============================================================================
def build_04_sigils_enchants():
    print("📝 กำลังสร้างรายงานหมวดที่ 4: Sigils / Enchants (Lv.1, 2, 3)...")
    lines = ["# 4. รายการ Sigils / Enchants ทั้งหมด, ช่องอุปกรณ์ที่ติดตั้งได้ และค่าสเตตัสที่ Lv.1 (Base), Lv.2 (Refined) และ Lv.3 (Perfect)\n"]

    slot_group_desc = {
        "1001": "GS 40 อุปกรณ์ทุกส่วน (Gems)",
        "1002": "GS 60 อุปกรณ์ทุกส่วน (Gems)",
        "1003": "GS 70-90 อุปกรณ์ทุกส่วน (Gems)",
        "2001": "GS 100-180 เฉพาะ **อาวุธ (Weapon)**",
        "2002": "GS 120-170 เฉพาะ **หมวก, เสื้อ, ถุงมือ, รองเท้า (Head/Chest/Gloves/Boots)**",
        "2003": "GS 120-160 เฉพาะ **ต่างหู, สร้อยคอ, แหวน (Earrings/Necklace/Ring)**",
        "2004": "GS 120-170 เฉพาะ **กำไลซ้าย, กำไลขวา, เครื่องราง (Bracelets/Charm)**",
        "3001": "Season 3 (GS 220+) เฉพาะ **อาวุธ (Weapon)**",
        "3002": "Season 3 (GS 220+) เฉพาะ **หมวก, เสื้อ, ถุงมือ, รองเท้า (Head/Chest/Gloves/Boots)**",
        "3003": "Season 3 (GS 220+) เฉพาะ **ต่างหู, สร้อยคอ, แหวน (Earrings/Necklace/Ring)**",
        "3004": "Season 3 (GS 220+) เฉพาะ **กำไลซ้าย, กำไลขวา, เครื่องราง (Bracelets/Charm)**",
    }

    for pool_id, item_list in sorted(enchants_db.items(), key=lambda x: int(x[0])):
        lines.append(f"## กลุ่มการติดตั้ง [{pool_id}]: {slot_group_desc.get(str(pool_id), 'Slot Group ' + str(pool_id))}")
        lines.append(f"มีรายการให้เลือกทั้งหมด **{len(item_list)} ชนิด**:\n")

        for item in item_list:
            iid = item.get("id")
            iname, idesc = get_name_desc(en_items, iid, "Sigil")
            qual = item.get("quality", 1)

            lv1_effs = [format_effect_pair(e) for e in item.get("effects", [])]
            refined_obj = item.get("refined", {})
            perfect_obj = item.get("perfect", {})

            lv2_effs = [format_effect_pair(e) for e in refined_obj.get("effects", [])] if refined_obj else []
            lv3_effs = [format_effect_pair(e) for e in perfect_obj.get("effects", [])] if perfect_obj else []

            lines.append(f"- **[{iid}] {iname}** (Quality: `{qual}`)")
            lines.append(f"  - **Lv.1 (Base):** {', '.join(lv1_effs)}")
            if lv2_effs:
                lines.append(f"  - **Lv.2 (Refined / 精):** {', '.join(lv2_effs)}")
            if lv3_effs:
                lines.append(f"  - **Lv.3 (Perfect / 極):** {', '.join(lv3_effs)}")

        lines.append("\n---\n")

    (OUT_DIR / "04_SIGILS_AND_ENCHANTS.md").write_text("\n".join(lines), encoding="utf-8")


# ==============================================================================
# หมวดที่ 5: PHANTOM FACTORS (G1 - G10 ครบทุกประเภทและทุกคลาส)
# ==============================================================================
def build_05_factors():
    print("📝 กำลังสร้างรายงานหมวดที่ 5: Phantom Factors (G1-G10)...")
    lines = ["# 5. รายการ Factor ทั้งหมด แยกตามประเภท คลาสที่ใส่ได้ และค่าสถานะ/บัฟจนถึงระดับ G10\n"]

    factor_types = factors_db.get("factorTypes", {})
    lines.append("## ประเภทของ Factor (`factorTypes`):\n")
    for ft_id, ft_name in factor_types.items():
        lines.append(f"- **Type `{ft_id}`**: {ft_name}")
    lines.append("\n---\n")

    by_class = factors_db.get("byClass", {})
    for factor_group_id, fdata in sorted(by_class.items(), key=lambda x: int(x[0])):
        t_id = fdata.get("typeId")
        prof_ids = fdata.get("professionIds", [])
        prof_names = [get_name_desc(en_classes, pid, "Class")[0] for pid in prof_ids]
        season_id = fdata.get("seasonId", 1)
        grades = fdata.get("grades", [])

        if not grades:
            continue

        # ดึงชื่อ Factor จากเกรดสูงสุด (เช่น G10)
        max_grade = grades[-1]
        g10_id = max_grade.get("id")
        fname, fdesc = get_name_desc(en_items, g10_id, "Factor")

        lines.append(
            f"### Factor Group [{factor_group_id}] (G10 Item ID: `{g10_id}`): **{fname}**"
        )
        lines.append(
            f"- **ประเภท (Type):** `{t_id}` ({factor_types.get(str(t_id), '')}) | **Season:** `{season_id}` | **คลาสที่ใส่ได้:** {', '.join(prof_names) if prof_names else 'All Classes'}"
        )
        if fdesc:
            lines.append(f"- **คำอธิบาย:** {fdesc}")

        # แสดงผลลัพธ์ที่ระดับ G1 และ G10 (และระดับอื่นๆ)
        for g in grades:
            lvl = g.get("level")
            gid = g.get("id")
            g_name, _ = get_name_desc(en_items, gid, f"G{lvl}")
            effs = [format_effect_pair(e) for e in g.get("effects", [])]
            bpars = g.get("buffPars", [])
            lines.append(f"  - **ระดับ G{lvl} (`{gid}` - {g_name}):** {', '.join(effs)} | พารามิเตอร์บัฟ: `{bpars}`")

        lines.append("")

    (OUT_DIR / "05_FACTORS_G10.md").write_text("\n".join(lines), encoding="utf-8")


# ==============================================================================
# หมวดที่ 6: DEEP SLUMBER PSYCHOSCOPE (8 สาย, โหนด Tree Map, ช่องใส่ Factor, และ Bond Points)
# ==============================================================================
def build_06_psychoscopes():
    print("📝 กำลังสร้างรายงานหมวดที่ 6: Deep Slumber Psychoscope (8 สาย + โหนด + Bond Points)...")
    lines = [
        "# 6. รายการ Deep Slumber Psychoscope ทั้ง 8 สาย, ผังโหนดบัฟ, ช่องใส่ Factor และโบนัสตามขั้น Bond Points\n"
    ]

    templates = season_talents_db.get("templates", {})
    tree_nodes = season_talents_db.get("treeNodes", {})
    ord_effects = season_talents_db.get("ordinaryEffects", {})
    inter_slots = season_talents_db.get("intermediateSlots", {})
    adv_effects = season_talents_db.get("advancedEffects", {})
    bond_slots = season_talents_db.get("bondSlots", {})

    lines.append(f"## 6.1 รายชื่อสาย Deep Slumber Psychoscope ทั้ง {len(templates)} สาย (`templates`)\n")
    for tid, tdata in sorted(templates.items(), key=lambda x: int(x[0])):
        tname, tdesc = get_name_desc(en_season_talents, tid, "Psychoscope")
        adv_id = tdata.get("advancedEffectId")
        adv_name, adv_desc = get_name_desc(en_season_talents, adv_id, "CoreEffect")
        lines.append(
            f"### สายที่ [{tid}]: **{tname}** (Root Node: `{tdata.get('rootNodeId')}`, Advanced Effect ID: `{adv_id}`)"
        )
        if tdesc:
            lines.append(f"- **คำอธิบาย:** {tdesc}")
        if adv_name or adv_desc:
            lines.append(f"- **เอฟเฟกต์ประจำสาย ({adv_name}):** {adv_desc}")

        # เอฟเฟกต์ขั้นบันไดจาก Bond Points ของสายนี้
        adv_entry = adv_effects.get(str(adv_id), {})
        if adv_entry:
            lines.append(f"- **ข้อมูลเอฟเฟกต์ขั้นบันได Bond Points (`advancedEffects[{adv_id}]`):**")
            lines.append("```json\n" + json.dumps(adv_entry, ensure_ascii=False, indent=2) + "\n```")
        lines.append("")

    lines.append("\n---\n## 6.2 รายละเอียดโหนดทั้งหมดบนผัง Tree Map (`treeNodes`)\n")
    for nid, ndata in sorted(tree_nodes.items(), key=lambda x: int(x[0])):
        n_name, n_desc = get_name_desc(en_season_talents, nid, "PsychoscopeNode")
        ntype = ndata.get("nodeType")
        type_str = "โหนดเลือกบัฟ (Buff Node)" if ntype == 1 else "โหนดช่องใส่ Factor (Factor Socket)"
        lines.append(f"- **Node [{nid}] {n_name}** — ประเภท: `{type_str}` | ข้อมูลโครงสร้าง: `{ndata}`")
        if n_desc:
            lines.append(f"  - *Text:* {n_desc}")

    lines.append("\n---\n## 6.3 รายการเอฟเฟกต์บัฟในโหนด (`ordinaryEffects`)\n")
    for oid, odata in sorted(ord_effects.items(), key=lambda x: int(x[0])):
        oname, odesc = get_name_desc(en_season_talents, oid, "NodeBuff")
        lines.append(f"- **Effect [{oid}] {oname}**: {odesc} | Raw: `{odata}`")

    lines.append("\n---\n## 6.4 เงื่อนไขช่องใส่ Factor (`intermediateSlots`) และช่อง Bond (`bondSlots`)\n")
    lines.append("### ช่องใส่ Factor (`intermediateSlots`):")
    lines.append("```json\n" + json.dumps(inter_slots, ensure_ascii=False, indent=2) + "\n```")
    lines.append("### ช่องใส่ Imagine สะสมแต้ม Bond (`bondSlots`):")
    lines.append("```json\n" + json.dumps(bond_slots, ensure_ascii=False, indent=2) + "\n```")

    (OUT_DIR / "06_DEEP_SLUMBER_PSYCHOSCOPES.md").write_text("\n".join(lines), encoding="utf-8")


# ==============================================================================
# หมวดที่ 7: MODULES (ความแรร์, จำนวนช่อง Effect, และค่าสเตตัส/บัฟของทั้ง 21 Effects ที่ Lv.1-6)
# ==============================================================================
def build_07_modules():
    print("📝 กำลังสร้างรายงานหมวดที่ 7: Modules & Link Effects Lv.1-6...")
    lines = [
        "# 7. รายการ Modules, ระดับความแรร์, จำนวนช่อง Effect, และผลลัพธ์ของทั้ง 21 Link Effects ที่ระดับ Lv.1 - Lv.6\n"
    ]

    # 7.1 รายการตัวโมดูลและความแรร์
    lines.append("## 7.1 ประเภทและระดับความแรร์ของตัวโมดูล (`mods`)\n")
    mod_type_map = {1: "Assault (โจมตี)", 2: "Support (สนับสนุน/ฮีล)", 3: "Guardian (ป้องกัน)"}
    qual_map = {
        1: "Basic (ฟ้า - 1 ช่อง)",
        2: "Advanced (ม่วง - 2 ช่อง)",
        3: "Excellent (ทอง - 3 ช่อง)",
        4: "Excellent Preferred (ทองพิเศษ - 3 ช่อง)",
    }

    for m in modules_db.get("mods", []):
        mid = m.get("id")
        mname, mdesc = get_name_desc(en_items, mid, "Module")
        mtype = mod_type_map.get(m.get("modType"), str(m.get("modType")))
        mqual = qual_map.get(m.get("quality"), str(m.get("quality")))
        holes = m.get("holes", 1)
        lines.append(
            f"- **[{mid}] {mname}** — ประเภท: `{mtype}` | ความแรร์: `{mqual}` | จำนวนช่องใส่ Effect: `{holes} ช่อง`"
        )

    # 7.2 เอฟเฟกต์ที่ปรากฏได้ในแต่ละประเภทโมดูล
    lines.append("\n---\n## 7.2 รายการ Effect ที่ปรากฏได้ในแต่ละประเภทโมดูล (`effectsByType`)\n")
    effs_by_type = modules_db.get("effectsByType", {})
    for t_key, eff_id_list in effs_by_type.items():
        t_label = mod_type_map.get(int(t_key), f"Type {t_key}")
        eff_names = [f"[{eid}] {get_name_desc(en_mod_effects, eid, 'Effect')[0]}" for eid in eff_id_list]
        lines.append(f"- **{t_label}**: {', '.join(eff_names)}")

    # 7.3 รายละเอียดค่าสเตตัสต่อแต้ม (effects) และโบนัส Link Lv.1-6 (linkEffects)
    lines.append("\n---\n## 7.3 รายละเอียดทั้ง 21 Module Effects: ค่าสเตตัสต่อแต้ม และบัฟที่ระดับ Link Lv.1 ถึง Lv.6\n")
    raw_effects = modules_db.get("effects", {})
    raw_link_effects = modules_db.get("linkEffects", {})

    # แปลง raw_effects ให้เป็น dict { str(id): data } เสมอ ไม่ว่าต้นทางจะเป็น list หรือ dict
    effects_dict = {}
    if isinstance(raw_effects, dict):
        effects_dict = {str(k): v for k, v in raw_effects.items()}
    elif isinstance(raw_effects, list):
        for item in raw_effects:
            if isinstance(item, dict) and ("id" in item or "effectId" in item):
                k = str(item.get("id") or item.get("effectId"))
                effects_dict[k] = item

    # แปลง raw_link_effects ให้เป็น dict { str(effectId): list_of_levels } เสมอ
    link_dict = {}
    if isinstance(raw_link_effects, dict):
        link_dict = {str(k): v for k, v in raw_link_effects.items()}
    elif isinstance(raw_link_effects, list):
        for item in raw_link_effects:
            if isinstance(item, dict):
                k = str(item.get("effectId") or item.get("id") or item.get("attrId") or "unknown")
                link_dict.setdefault(k, []).append(item)
            else:
                link_dict.setdefault("all_links", []).append(item)

    # วนลูปแสดงผลครบทั้ง 21 Effects
    all_effect_ids = sorted(
        set(list(effects_dict.keys()) + [k for k in link_dict.keys() if k.isdigit()]),
        key=lambda x: int(x) if x.isdigit() else 999999,
    )

    for eid in all_effect_ids:
        ename, edesc = get_name_desc(en_mod_effects, eid, "ModuleEffect")
        edata = effects_dict.get(eid, {})
        lines.append(f"### Effect [{eid}]: **{ename}**")
        if edesc:
            lines.append(f"- **คำอธิบาย:** {edesc}")
        if edata:
            lines.append(f"- **ข้อมูลสเตตัสต่อแต้ม (`effects[{eid}]`):**")
            lines.append("```json\n" + json.dumps(edata, ensure_ascii=False, indent=2) + "\n```")

        l_data = link_dict.get(eid, [])
        if l_data:
            lines.append("- **ผลลัพธ์เมื่อปลดล็อกแต่ละระดับ Link Level (Lv.1 ถึง Lv.6):**")
            if isinstance(l_data, list):
                for idx, lv_item in enumerate(l_data):
                    if isinstance(lv_item, dict):
                        eff_strs = [format_effect_pair(e) for e in lv_item.get("effects", [])]
                        lines.append(
                            f"  - **Link Step {idx+1}**: {', '.join(eff_strs) if eff_strs else ''} | Raw: `{lv_item}`"
                        )
                    else:
                        lines.append(f"  - **Link Lv.{idx+1}**: `{lv_item}`")
            elif isinstance(l_data, dict):
                for lk, lv_item in l_data.items():
                    lines.append(f"  - **Link Lv.{lk}**: `{lv_item}`")
        lines.append("")

    # กรณี linkEffects เก็บโครงสร้างรวมไว้ที่อื่น ให้ Dump ออกมาดูด้วย
    if "all_links" in link_dict or (isinstance(raw_link_effects, list) and not link_dict):
        lines.append("### โครงสร้างดิบของ `linkEffects`:")
        lines.append("```json\n" + json.dumps(raw_link_effects[:10], ensure_ascii=False, indent=2) + "\n```")

    (OUT_DIR / "07_MODULES_AND_LINK_LEVELS.md").write_text("\n".join(lines), encoding="utf-8")


if __name__ == "__main__":
    build_01_classes_skills_talents()
    build_02_imagines()
    build_03_equipments_and_sets()
    build_04_sigils_enchants()
    build_05_factors()
    build_06_psychoscopes()
    build_07_modules()
    print("\n" + "=" * 75)
    print(f"✅ สร้างแคตตาล็อกรายการตัวเลือกทั้ง 7 หมวดเสร็จสมบูรณ์ที่โฟลเดอร์: {OUT_DIR}")
    for f in sorted(OUT_DIR.glob("*.md")):
        print(f"   📄 {f.name:<42} ({f.stat().st_size / 1024:,.1f} KB)")
    print("=" * 75)