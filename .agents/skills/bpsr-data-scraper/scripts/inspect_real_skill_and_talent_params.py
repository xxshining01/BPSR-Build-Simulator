# ไฟล์: .agents/skills/bpsr-data-scraper/scripts/inspect_real_skill_and_talent_params.py
import json
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[4]
GAME_DB_DIR = PROJECT_ROOT / "src" / "data" / "game-db"
COMBAT_SIM_DIR = GAME_DB_DIR / "combat-sim"
LOCALE_EN_FILE = PROJECT_ROOT / "src" / "data" / "locales" / "en_US" / "game-data.json"
RES_LOGS_DIR = PROJECT_ROOT / "src" / "data" / "_external_repos" / "resonance-logs-global" / "parser-data"
OUT_FILE = PROJECT_ROOT / "Docs" / "REAL_SKILL_AND_TALENT_PARAMS.md"

def load_json(path: Path):
    if not path.exists():
        return {}
    return json.loads(path.read_text(encoding="utf-8", errors="ignore"))

def main():
    en = load_json(LOCALE_EN_FILE)
    en_skills = en.get("skills", {})
    classes_db = load_json(GAME_DB_DIR / "classes.json")
    skills_db = load_json(GAME_DB_DIR / "skills.json")

    lines = ["# ตรวจสอบข้อมูลพารามิเตอร์จริงของ Skills, Imagines และ Combat Tables\n"]

    # 1. ตรวจสอบโครงสร้างข้อมูลของ Skills ใน en_US/game-data.json (ยกตัวอย่าง Marksman Class 11)
    lines.append("## 1. ข้อมูลจริงของสกิล Marksman ใน `en_US/game-data.json` (`skills`) และ `skills.json`\n")
    mm_class = classes_db.get("11", {})
    mm_skill_ids = (
        mm_class.get("normalAttackSkill", [])
        + mm_class.get("specialSkill", [])
        + mm_class.get("ultimateSkill", [])
        + mm_class.get("normalSkill", [])
        + mm_class.get("talentSkill", [])
    )

    for sid in mm_skill_ids[:8]:
        s_str = str(sid)
        lines.append(f"### Skill [{s_str}] ใน `skills.json` + `en_US/game-data.json`:")
        lines.append("```json\n" + json.dumps({
            "skills_json_meta": skills_db.get(s_str),
            "locale_en_skill": en_skills.get(s_str)
        }, ensure_ascii=False, indent=2)[:2500] + "\n```\n")

    # 2. ตรวจสอบไส้ในจริงๆ (ข้าม Header Metadata) ของไฟล์ใน combat-sim/ และ resonance-logs-global
    lines.append("\n---\n## 2. ไส้ในของจริง (ข้าม Header) ของตารางใน `combat-sim/` และ `resonance-logs-global`\n")
    files_to_peek = [
        COMBAT_SIM_DIR / "SkillCooldowns.json",
        COMBAT_SIM_DIR / "SkillDamageChainRuntime.json",
        COMBAT_SIM_DIR / "SkillEffectTable.json",
        RES_LOGS_DIR / "generated" / "TalentRecountTable.json",
        RES_LOGS_DIR / "generated" / "ModifierClassificationRuntime.json",
    ]

    for fp in files_to_peek:
        if not fp.exists():
            continue
        data = load_json(fp)
        lines.append(f"### ไฟล์ `{fp.name}` — รายชื่อ Keys ระดับบนสุด: `{list(data.keys()) if isinstance(data, dict) else 'List'}`")
        if isinstance(data, dict):
            for k, v in data.items():
                if isinstance(v, dict) and len(v) > 0:
                    sample_sub = dict(list(v.items())[:2])
                    lines.append(f"- ตัวอย่างข้อมูลใน `{k}` (ทั้งหมด `{len(v):,}` รายการ):")
                    lines.append("```json\n" + json.dumps(sample_sub, ensure_ascii=False, indent=2)[:1200] + "\n```")
                elif isinstance(v, list) and len(v) > 0:
                    lines.append(f"- ตัวอย่างข้อมูลใน `{k}` (ทั้งหมด `{len(v):,}` รายการ):")
                    lines.append("```json\n" + json.dumps(v[:2], ensure_ascii=False, indent=2)[:1200] + "\n```")

    # 3. ค้นหาข้อมูลของสกิล Marksman (เช่น 2201 Bullseye, 2220 Storm Arrow, 2230 Torrent Volley) ใน SkillEffectTable & SkillFightLevelTable
    lines.append("\n---\n## 3. ค้นหาตัวเลขของสกิล Marksman (`2201`, `2220`, `2230`) ใน `SkillFightLevelTable.json` & `SkillEffectTable.json`\n")
    fight_lv = load_json(COMBAT_SIM_DIR / "SkillFightLevelTable.json")
    eff_table = load_json(COMBAT_SIM_DIR / "SkillEffectTable.json")

    found_fl = {k: v for k, v in fight_lv.items() if isinstance(v, dict) and v.get("SkillId") in [2201, 2220, 2230, 1989]}
    lines.append(f"- พบใน `SkillFightLevelTable.json` จำนวน `{len(found_fl)}` รายการ (แสดง 3 รายการแรก):")
    lines.append("```json\n" + json.dumps(dict(list(found_fl.items())[:3]), ensure_ascii=False, indent=2) + "\n```")

    found_eff = {k: v for k, v in eff_table.items() if str(k).startswith(("2201", "2220", "2230", "1989"))}
    lines.append(f"- พบใน `SkillEffectTable.json` จำนวน `{len(found_eff)}` รายการ (แสดง 2 รายการแรก):")
    lines.append("```json\n" + json.dumps(dict(list(found_eff.items())[:2]), ensure_ascii=False, indent=2)[:2000] + "\n```")

    OUT_FILE.write_text("\n".join(lines), encoding="utf-8")
    print(f"✅ สร้างไฟล์ตรวจสอบของจริงเสร็จแล้วที่: {OUT_FILE}")

if __name__ == "__main__":
    main()