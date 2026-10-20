# ไฟล์: .agents/skills/bpsr-data-scraper/scripts/audit_combat_mechanics.py
import json
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[4]
GAME_DB_DIR = PROJECT_ROOT / "src" / "data" / "game-db"
COMBAT_SIM_DIR = GAME_DB_DIR / "combat-sim"
LOCALE_EN_FILE = PROJECT_ROOT / "src" / "data" / "locales" / "en_US" / "game-data.json"
RES_LOGS_DIR = PROJECT_ROOT / "src" / "data" / "_external_repos" / "resonance-logs-global" / "parser-data"
OUT_REPORT = PROJECT_ROOT / "Docs" / "COMBAT_MECHANICS_AUDIT.md"

def load_json(path: Path):
    if not path.exists():
        return None
    return json.loads(path.read_text(encoding="utf-8", errors="ignore"))

def run_combat_audit():
    print("🔍 กำลังตรวจสอบโครงสร้างข้อมูลเชิงลึกสำหรับ Combat Simulator...")
    en = load_json(LOCALE_EN_FILE) or {}
    en_skills = en.get("skills", {})
    en_talents = en.get("talents", {})
    en_imagines = en.get("battleImagines", {})

    lines = ["# รายงานการสำรวจข้อมูลเชิงลึกสำหรับระบบ Combat Simulator (Combat Mechanics Audit)\n"]

    # 1. ตรวจสอบ SkillFightLevelTable.json (ตารางตัวคูณสกิลตามเลเวล)
    fight_lv_table = load_json(COMBAT_SIM_DIR / "SkillFightLevelTable.json")
    lines.append("## 1. โครงสร้างตารางตัวคูณดาเมจสกิล (`SkillFightLevelTable.json`)\n")
    if isinstance(fight_lv_table, dict):
        lines.append(f"- จำนวนรายการตัวคูณสกิลทั้งหมด: **{len(fight_lv_table):,} รายการ**")
        sample_keys = list(fight_lv_table.keys())[:5]
        for k in sample_keys:
            lines.append(f"- ตัวอย่าง Key `{k}`:")
            lines.append("```json\n" + json.dumps(fight_lv_table[k], ensure_ascii=False, indent=2)[:800] + "\n```")
    elif isinstance(fight_lv_table, list):
        lines.append(f"- จำนวนรายการทั้งหมด (List): **{len(fight_lv_table):,} รายการ**")
        lines.append("```json\n" + json.dumps(fight_lv_table[:2], ensure_ascii=False, indent=2)[:800] + "\n```")

    # 2. ตรวจสอบ SkillDamageChainRuntime.json & SkillBreakdownDetailsRuntime.json
    lines.append("\n---\n## 2. โครงสร้างการเชื่อมโยงสกิลหลัก -> สกิลลูก/Proc (`SkillDamageChainRuntime.json` & `SkillBreakdownDetailsRuntime.json`)\n")
    for fname in ["SkillDamageChainRuntime.json", "SkillBreakdownDetailsRuntime.json", "SkillCooldowns.json"]:
        data = load_json(COMBAT_SIM_DIR / fname)
        if data is not None:
            dtype = type(data).__name__
            dlen = len(data) if isinstance(data, (dict, list)) else 0
            lines.append(f"### ไฟล์ `{fname}` (Type: `{dtype}`, Count: `{dlen:,}`)")
            if isinstance(data, dict):
                sample = dict(list(data.items())[:3])
                lines.append("```json\n" + json.dumps(sample, ensure_ascii=False, indent=2)[:1000] + "\n```")
            elif isinstance(data, list):
                lines.append("```json\n" + json.dumps(data[:3], ensure_ascii=False, indent=2)[:1000] + "\n```")

    # 3. ตรวจสอบตารางจำแนกบัฟและโหนด Talent ใน resonance-logs-global
    lines.append("\n---\n## 3. ตารางจำแนกบัฟ, โหนด Talent และแหล่งกำเนิดดาเมจใน `resonance-logs-global`\n")
    if RES_LOGS_DIR.exists():
        for rel_name in [
            "generated/TalentRecountTable.json",
            "generated/ModifierClassificationRuntime.json",
            "generated/ModifierContributionRuntime.json",
            "generated/EffectSourcesRuntime.json",
            "generated/BuffName.json",
        ]:
            fpath = RES_LOGS_DIR / rel_name
            data = load_json(fpath)
            if data is not None:
                dlen = len(data) if isinstance(data, (dict, list)) else 0
                lines.append(f"### ไฟล์ `{rel_name}` (Count: `{dlen:,}`)")
                if isinstance(data, dict):
                    sample = dict(list(data.items())[:3])
                    lines.append("```json\n" + json.dumps(sample, ensure_ascii=False, indent=2)[:1000] + "\n```")
    else:
        lines.append("- ⚠️ ไม่พบโฟลเดอร์ `_external_repos/resonance-logs-global`")

    # 4. ทดสอบเจาะดูข้อมูลจริงของตัวอย่างที่คุณยกมา:
    # (ก) Marksman Falconry Node 1129 & สกิลเหยี่ยว
    # (ข) Battle Imagine 3923 (Muku Chief) -> Active Skill 1989
    lines.append("\n---\n## 4. ตรวจสอบกรณีศึกษาตัวอย่างจริง (Case Study: Falconry Node 1129 & Muku Chief 3923)\n")
    talent_tree = load_json(GAME_DB_DIR / "talent-tree.json") or {}
    node_1129 = talent_tree.get("nodes", {}).get("1129")
    lines.append("### กรณีที่ 1: โหนด Talent `[1129] Falconry Spec` ใน `talent-tree.json`:")
    lines.append("```json\n" + json.dumps(node_1129, ensure_ascii=False, indent=2) + "\n```")
    lines.append("- คำแปลใน `en_US/game-data.json` (`talents['11291']` หรือ `'1129'`):")
    lines.append("```json\n" + json.dumps(en_talents.get("11291") or en_talents.get("1129"), ensure_ascii=False, indent=2) + "\n```")

    imagines = load_json(GAME_DB_DIR / "battle-imagines.json") or {}
    muku_3923 = imagines.get("3923")
    lines.append("### กรณีที่ 2: Battle Imagine `[3923] Muku Chief` (Active Skill `1989`):")
    lines.append("```json\n" + json.dumps(muku_3923, ensure_ascii=False, indent=2) + "\n```")
    lines.append("- คำแปลใน `en_US/game-data.json` (`battleImagines['3923']` & `skills['1989']`):")
    lines.append("```json\n" + json.dumps({
        "battleImagine_3923": en_imagines.get("3923"),
        "skill_1989": en_skills.get("1989")
    }, ensure_ascii=False, indent=2) + "\n```")

    report_str = "\n".join(lines)
    OUT_REPORT.write_text(report_str, encoding="utf-8")
    print(report_str)
    print("\n" + "=" * 75)
    print(f"✅ บันทึกรายงานการสำรวจไว้ที่: {OUT_REPORT}")
    print("=" * 75)

if __name__ == "__main__":
    run_combat_audit()