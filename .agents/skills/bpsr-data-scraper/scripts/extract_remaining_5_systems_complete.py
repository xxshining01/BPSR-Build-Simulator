# ไฟล์: .agents/skills/bpsr-data-scraper/scripts/extract_remaining_5_systems_complete.py
import json
import re
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[4]
GAME_DB_DIR = PROJECT_ROOT / "src" / "data" / "game-db"
LOCALE_EN_FILE = PROJECT_ROOT / "src" / "data" / "locales" / "en_US" / "game-data.json"
LOCALE_UI_FILE = PROJECT_ROOT / "src" / "data" / "locales" / "en_US" / "bpsr-bp-ui.json"
REF_LOGIC_DIR = PROJECT_ROOT / "src" / "engine" / "_reference_logic"
OUT_FILE = PROJECT_ROOT / "Docs" / "COMPLETE_GEAR_MODULES_PHANTOM_CONSUMABLES.md"

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

def sub_params(template: str, params: list, divide_by_100: bool = True) -> str:
    if not template:
        return ""
    res = clean_html(template)
    for idx, p in enumerate(params):
        p_num = idx + 1
        if isinstance(p, (int, float)) and divide_by_100 and abs(p) >= 100 and p % 5 == 0:
            val_str = f"{p} (หรือ {p/100:.2f}%)"
        else:
            val_str = str(p)
        res = res.replace(f"{{p{p_num}}}", val_str).replace(f"{{{idx}}}", val_str)
    return res

def main():
    print("🔍 กำลังสกัดข้อมูล 5 หมวดที่เหลือ (Weapons/PurpleAffix, Sigils, Modules Lv1-6, Psychoscope/Factors/Bonds, Food/Potions)...")
    en = load_json(LOCALE_EN_FILE)
    ui_en = load_json(LOCALE_UI_FILE)
    equip_db = load_json(GAME_DB_DIR / "equipment.json")
    enchants_db = load_json(GAME_DB_DIR / "enchants.json")
    modules_db = load_json(GAME_DB_DIR / "modules.json")
    season_talents_db = load_json(GAME_DB_DIR / "season-talents.json")
    phantom_factors_db = load_json(GAME_DB_DIR / "phantom-factors.json")

    en_items = en.get("items", {})
    en_attrs = en.get("attributes", {})
    en_attr_descs = en.get("attrDescs", {})
    en_mod_effects = en.get("moduleEffects", {})
    en_season_talents = en.get("seasonTalents", {})

    lines = [
        "# ข้อมูลฉบับสมบูรณ์ของ 5 ระบบที่เหลือสำหรับการคำนวณ Combat Simulator",
        "ประกอบด้วย: **1. อาวุธพิเศษ & ออปชันม่วง (`equipment.json`), 2. Sigils ทุกระดับ (`enchants.json`), 3. Modules ครบ 21 ชนิด Lv.1–6 (`modules.json`), 4. Deep Slumber Psychoscope ทั้ง 8 สาย + Bond Points + Factors (`season-talents.json` & `phantom-factors.json`), และ 5. อาหารและยา (`cookingBuff.ts`)**\n",
        "---",
    ]

    # =========================================================================
    # 1. WEAPON SPECIAL EFFECTS & PURPLE STATS (LEGENDARY AFFIXES)
    # =========================================================================
    lines.append("\n## 1. เอฟเฟกต์อาวุธพิเศษ (Far Sea / Raid Weapons) และออปชันม่วง (`equipment.json`)\n")
    weapons = equip_db.get("200", {})
    lines.append("### 1.1 รายการอาวุธ (`partId = 200`) และเอฟเฟกต์พิเศษประจำอาวุธ:")
    for wid, wdata in sorted(weapons.items(), key=lambda x: int(x[0])):
        wname = clean_html(en_items.get(str(wid), f"Weapon#{wid}"))
        gs = wdata.get("gearScore")
        suit_id = wdata.get("suitId")
        leg_affix = wdata.get("legendaryAffix", [])
        fixed_evo = wdata.get("fixedEvolutionStats", {})
        affix_strs = []
        for row in leg_affix:
            if isinstance(row, list) and len(row) >= 3:
                et, aid, val = row[0], row[1], row[2]
                if et == 3:
                    desc = sub_params(en_attr_descs.get(str(aid), f"Buff#{aid}"), [val])
                    affix_strs.append(f"Buff[{aid}]: {desc}")
                else:
                    aname = clean_html(en_attrs.get(str(aid), f"Attr#{aid}"))
                    affix_strs.append(f"{aname} +{val}")
        lines.append(f"- **`[{wid}] {wname}`** (GS `{gs}` | Suit `{suit_id}` | FixedEvoSpecs: `{list(fixed_evo.keys())}`)")
        if affix_strs:
            lines.append(f"  - *Legendary Affixes / Weapon Effects*: {' ; '.join(affix_strs)}")

    lines.append("\n### 1.2 สรุปชนิดของออปชันม่วง (`legendaryAffix`) ของอุปกรณ์สวมใส่ช่องอื่นๆ (201–210):")
    unique_purple_affixes = {}
    for part_id, items_dict in equip_db.items():
        if part_id == "200" or not isinstance(items_dict, dict):
            continue
        for iid, idata in items_dict.items():
            for row in idata.get("legendaryAffix", []):
                if isinstance(row, list) and len(row) >= 3:
                    key = (row[0], row[1], row[2])
                    unique_purple_affixes[key] = part_id

    for (et, aid, val), sample_part in sorted(unique_purple_affixes.items()):
        if et == 3:
            desc = sub_params(en_attr_descs.get(str(aid), f"Buff#{aid}"), [val])
            lines.append(f"- **Effect Type 3 `[{aid}]`** (Val=`{val}`): `{desc}`")
        else:
            aname = clean_html(en_attrs.get(str(aid), f"Attr#{aid}"))
            lines.append(f"- **Stat Type `{et}` `[{aid}] {aname}`**: `+{val}` (หรือ `+{val/100:.2f}%` หากเป็นค่า %)")

    # =========================================================================
    # 2. SIGILS / ENCHANTS (ALL GEMS & LV.1 / LV.2 / LV.3 VALUES)
    # =========================================================================
    lines.append("\n---\n## 2. ข้อมูล Sigils (Enchants) ทั้งหมด แยกตามระดับ Lv.1 (Base), Lv.2 (`refined`), Lv.3 (`perfect`)\n")
    for eid, elist in sorted(enchants_db.items(), key=lambda x: int(x[0])):
        ename = clean_html(en_items.get(str(eid), f"Sigil#{eid}"))
        if not isinstance(elist, list):
            continue
        tier_summaries = []
        for idx, tier_entry in enumerate(elist):
            lv_label = f"Lv.{idx + 1}"
            if isinstance(tier_entry, dict):
                effs = tier_entry.get("effects", [])
                eff_txts = []
                for erow in effs:
                    if isinstance(erow, list) and len(erow) >= 3:
                        aname = clean_html(en_attrs.get(str(erow[1]), f"Attr#{erow[1]}"))
                        eff_txts.append(f"{aname} +{erow[2]}")
                tier_summaries.append(f"**{lv_label}**: {', '.join(eff_txts)}")
        lines.append(f"- **`[{eid}] {ename}`**: {' | '.join(tier_summaries)}")

    # =========================================================================
    # 3. MODULES (ALL 21 EFFECTS & LINK LEVELS LV.1 TO LV.6)
    # =========================================================================
    lines.append("\n---\n## 3. ข้อมูล Modules ทั้ง 21 ชนิด ครบทุกระดับ Link Lv.1 ถึง Lv.6 (`modules.json` + `attrDescs`)\n")
    mod_effects_data = modules_db.get("effects", {})
    for eff_id, edata in sorted(mod_effects_data.items(), key=lambda x: int(x[0])):
        ename = clean_html(en_mod_effects.get(str(eff_id), f"ModuleEffect#{eff_id}"))
        lines.append(f"### Module Effect `[{eff_id}] {ename}`")
        levels_arr = edata.get("levels", [])
        for lv_idx, lv_row in enumerate(levels_arr):
            if not lv_row or lv_idx == 0:
                continue
            # โครงสร้าง lv_row: [level, reqLinkPoints, config_array, ev_params_array]
            req_pts = lv_row[1] if len(lv_row) > 1 else 0
            cfg_list = lv_row[2] if len(lv_row) > 2 else []
            ev_list = lv_row[3] if len(lv_row) > 3 else []
            desc_parts = []
            for cfg in cfg_list:
                if not isinstance(cfg, list) or len(cfg) < 3:
                    continue
                et, aid, val = cfg[0], cfg[1], cfg[2]
                if et == 1:
                    aname = clean_html(en_attrs.get(str(aid), f"Attr#{aid}"))
                    desc_parts.append(f"{aname} +{val}")
                elif et == 3:
                    tmpl = clean_html(en_attr_descs.get(str(aid), f"Buff#{aid}"))
                    for p_i, p_v in enumerate(ev_list):
                        tmpl = tmpl.replace(f"{{p{p_i+1}}}", f"{p_v/100:.2f}% (raw:{p_v})")
                    desc_parts.append(f"[Combat Effect #{aid}]: {tmpl}")
                elif et == 5:
                    tmpl = clean_html(en_attr_descs.get(str(aid), f"Adaptive#{aid}")).replace("{v}", str(val))
                    desc_parts.append(f"[Adaptive #{aid}]: {tmpl}")
            lines.append(f"- **Link Lv.{lv_idx} (ใช้ `{req_pts}` แต้ม)**: {' ; '.join(desc_parts)}")

    # =========================================================================
    # 4. DEEP SLUMBER PSYCHOSCOPE (TEMPLATES, ORDINARY BUFFS, BOND POINTS, FACTORS)
    # =========================================================================
    lines.append("\n---\n## 4. ข้อมูล Deep Slumber Psychoscope ทั้ง 8 สาย, โหนดบัฟ, Bond Points, และ Factors (`season-talents.json` & `phantom-factors.json`)\n")
    st_templates = season_talents_db.get("templates", {})
    st_ordinary = season_talents_db.get("ordinaryEffects", {})
    st_advanced = season_talents_db.get("advancedEffects", {})

    en_st_templates = en_season_talents.get("templates", {})
    en_st_ordinary = en_season_talents.get("ordinaryEffects", {})
    en_st_advanced = en_season_talents.get("advancedEffects", {})

    lines.append("### 4.1 โหนดบัฟธรรมดา (`ordinaryEffects`) พร้อมค่าสเตตัสและคำอธิบายจริง:")
    for oid, odata in sorted(st_ordinary.items(), key=lambda x: int(x[0])):
        oname = clean_html(en_st_ordinary.get(str(oid), f"Ordinary#{oid}"))
        effects = odata.get("effects", [])
        buff_pars = odata.get("buffPars", [])
        eff_strs = []
        for erow in effects:
            if isinstance(erow, list) and len(erow) >= 3:
                et, aid, val = erow[0], erow[1], erow[2]
                if et == 3:
                    bdesc = sub_params(en_attr_descs.get(str(aid), f"Buff#{aid}"), buff_pars[0] if buff_pars else [val])
                    eff_strs.append(f"Buff[{aid}]: {bdesc}")
                else:
                    aname = clean_html(en_attrs.get(str(aid), f"Attr#{aid}"))
                    eff_strs.append(f"{aname} +{val}")
        lines.append(f"- **`[{oid}] {oname}`**: {' | '.join(eff_strs)} (raw effects=`{effects}`, buffPars=`{buff_pars}`)")

    lines.append("\n### 4.2 เอฟเฟกต์ขั้นบันไดจาก Bond Points (`advancedEffects`) ครบทั้ง 8 สาย:")
    for aid, adata in sorted(st_advanced.items(), key=lambda x: int(x[0])):
        aname = clean_html(en_st_advanced.get(str(aid), f"BondEffect#{aid}"))
        req_bond = adata.get("points") or adata.get("bondPoints") or adata.get("unlockPoints")
        levels_info = adata.get("levels") or adata.get("effects") or adata
        lines.append(f"- **`[{aid}] {aname}`** (Bond Data): `{clean_html(json.dumps(levels_info, ensure_ascii=False))}`")

    # ดึงตารางแปลรหัสบัฟของ Psychoscope & Bond Points จาก attrMaps.ts
    attr_maps_path = REF_LOGIC_DIR / "attrMaps.ts"
    if attr_maps_path.exists():
        lines.append("\n### 4.3 ตารางค่าคงที่และการแปลงสเตตัสของ Psychoscope, Factors, Imagines และ Suits จาก `attrMaps.ts`:")
        lines.append("```typescript\n" + attr_maps_path.read_text(encoding="utf-8") + "\n```")

    lines.append("\n### 4.4 ข้อมูล Factor (`phantom-factors.json`) และเอฟเฟกต์ตามระดับ G1–G10:")
    pf_effects = phantom_factors_db.get("effects", {}) or phantom_factors_db
    for fk, fv in list(pf_effects.items())[:30]:
        lines.append(f"- **Factor Key `{fk}`**: `{clean_html(json.dumps(fv, ensure_ascii=False))[:600]}`")

    # =========================================================================
    # 5. COOKING FOOD & ALCHEMY SERUMS / POTIONS (COMPLETE TABLE)
    # =========================================================================
    lines.append("\n---\n## 5. ข้อมูลบัฟอาหาร (Cooking Cuisine Lv.1–3) และยา (Alchemy Serums Lv.1–3)\n")
    cooking_ts_path = REF_LOGIC_DIR / "cookingBuff.ts"
    if cooking_ts_path.exists():
        lines.append("### 5.1 โค้ดและตารางตัวเลขจริงของอาหารและยาทั้งหมดจาก `cookingBuff.ts`:")
        lines.append("```typescript\n" + cooking_ts_path.read_text(encoding="utf-8") + "\n```")

    if ui_en:
        lines.append("\n### 5.2 ชื่อและคำอธิบายใน UI (`bpsr-bp-ui.json`):")
        cooking_ui = {k: v for k, v in ui_en.items() if "cook" in k.lower() or "food" in k.lower() or "potion" in k.lower() or "buff" in k.lower()}
        lines.append("```json\n" + json.dumps(cooking_ui, ensure_ascii=False, indent=2) + "\n```")

    OUT_FILE.write_text("\n".join(lines), encoding="utf-8")
    print("=" * 75)
    print(f"✅ สกัดข้อมูลทั้ง 5 ระบบที่เหลือสำเร็จที่: {OUT_FILE}")
    print(f"📏 ขนาดไฟล์: {OUT_FILE.stat().st_size / 1024:.1f} KB")
    print("=" * 75)

if __name__ == "__main__":
    main()