# ไฟล์: .agents/skills/bpsr-data-scraper/scripts/import_verified_gamedb.py
import shutil
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[4]
BP_REPO = PROJECT_ROOT / "src" / "data" / "_external_repos" / "bpsr-build-planner"

TARGET_DB_DIR = PROJECT_ROOT / "src" / "data" / "game-db"
TARGET_LOCALE_DIR = PROJECT_ROOT / "src" / "data" / "locales" / "en_US"
TARGET_REF_LOGIC_DIR = PROJECT_ROOT / "src" / "engine" / "_reference_logic"
TARGET_ASSETS_DIR = PROJECT_ROOT / "public" / "assets"

def import_all_verified_data():
    if not BP_REPO.exists():
        print("❌ ไม่พบโฟลเดอร์ bpsr-build-planner กรุณารัน fetch_github_repos_data.py ก่อน")
        return

    TARGET_DB_DIR.mkdir(parents=True, exist_ok=True)
    TARGET_LOCALE_DIR.mkdir(parents=True, exist_ok=True)
    TARGET_REF_LOGIC_DIR.mkdir(parents=True, exist_ok=True)
    TARGET_ASSETS_DIR.mkdir(parents=True, exist_ok=True)

    # 1. คัดลอกไฟล์ฐานข้อมูล JSON ทั้งหมดจาก bpsr-build-planner/src/data/
    src_data_dir = BP_REPO / "src" / "data"
    copied_json = 0
    for json_file in src_data_dir.glob("*.json"):
        shutil.copy2(json_file, TARGET_DB_DIR / json_file.name)
        copied_json += 1
        print(f"[DB COPIED] src/data/game-db/{json_file.name} ({json_file.stat().st_size / 1024:,.1f} KB)")

    # 2. คัดลอกพจนานุกรมภาษาอังกฤษ (en_US)
    src_en_dir = BP_REPO / "src" / "locales" / "en_US"
    for en_file in src_en_dir.glob("*.json"):
        shutil.copy2(en_file, TARGET_LOCALE_DIR / en_file.name)
        print(f"[LOCALE COPIED] src/data/locales/en_US/{en_file.name} ({en_file.stat().st_size / 1024:,.1f} KB)")

    # 3. คัดลอกไฟล์โค้ดถอดรหัสและคำนวณสเตตัสต้นฉบับมาไว้ใน src/engine/_reference_logic/
    # เพื่อให้เราและ AI ใช้เป็นต้นแบบในการเขียน Engine โดยไม่ผิดเพี้ยนแม้แต่จุดเดียว
    ref_files = [
        "src/build-planner/types.ts",
        "src/build-planner/profession.ts",
        "src/build-planner/stats/attrMaps.ts",
        "src/build-planner/stats/baseStats.ts",
        "src/build-planner/stats/commonCoefficients.ts",
        "src/build-planner/stats/seasonConstants.ts",
        "src/build-planner/stats/calculateRawStats.ts",
        "src/build-planner/stats/deriveStats.ts",
        "src/build-planner/stats/masteryElementBonus.ts",
        "src/build-planner/stats/suitEffects.ts",
        "src/build-planner/stats/cookingBuff.ts",
        "src/build-planner/module/moduleData.ts",
        "src/build-planner/phantom/phantomData.ts",
        "src/build-planner/phantom/phantomEffectSummary.ts",
        "src/build-planner/equipment/equipmentData.ts",
        "src/build-planner/equipment/equipmentSlotPickerData.ts",
        "src/build-planner/talent/talentTreeAlgo.ts",
        "src/build-planner/talent/talentTreeData.ts",
    ]
    for rel_path in ref_files:
        src_f = BP_REPO / rel_path
        if src_f.exists():
            shutil.copy2(src_f, TARGET_REF_LOGIC_DIR / src_f.name)
            print(f"[LOGIC COPIED] src/engine/_reference_logic/{src_f.name}")

    # 4. คัดลอกไฟล์ตารางคูณดาเมจสกิลและ Cooldown จาก resonance-logs-global สำหรับทำ 5-Minute Simulator
    res_logs_dir = PROJECT_ROOT / "src" / "data" / "_external_repos" / "resonance-logs-global" / "parser-data"
    if res_logs_dir.exists():
        combat_db_dir = TARGET_DB_DIR / "combat-sim"
        combat_db_dir.mkdir(parents=True, exist_ok=True)
        for sim_file in [
            "logic/SkillFightLevelTable.json",
            "logic/SkillEffectTable.json",
            "generated/SkillCooldowns.json",
            "generated/SkillBreakdownDetailsRuntime.json",
            "generated/SkillDamageChainRuntime.json",
        ]:
            sf = res_logs_dir / sim_file
            if sf.exists():
                shutil.copy2(sf, combat_db_dir / sf.name)
                print(f"[SIM DB COPIED] src/data/game-db/combat-sim/{sf.name} ({sf.stat().st_size / 1024:,.1f} KB)")

    print("\n" + "=" * 75)
    print(f"✅ นำเข้าฐานข้อมูลเกมจริง ({copied_json} ไฟล์หลัก + ภาษาอังกฤษ + โค้ดถอดรหัสสเตตัส) เข้าสู่โปรเจกต์เสร็จสมบูรณ์!")
    print("=" * 75)

if __name__ == "__main__":
    import_all_verified_data()