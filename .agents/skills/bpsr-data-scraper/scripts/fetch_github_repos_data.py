# ไฟล์: .agents/skills/bpsr-data-scraper/scripts/fetch_github_repos_data.py
import subprocess
from pathlib import Path

EXTERNAL_REPOS_DIR = Path("src/data/_external_repos")
EXTERNAL_REPOS_DIR.mkdir(parents=True, exist_ok=True)

REPOS = {
    # 1. โปรเจกต์คำนวณ 5 โมดูลต้นฉบับ (มี module_types.py, module_parser.py, module_optimizer.py)
    "StarResonanceAutoMod": "https://github.com/fudiyangjin/StarResonanceAutoMod.git",
    # 2. เว็บคำนวณโมดูล React ภาษาอังกฤษ (มีตารางค่าสเตตัส Module Lv.1-6 ภาษาอังกฤษ)
    "star-resonance-module-optimizer": "https://github.com/asgharkapk/star-resonance-module-optimizer.git",
    # 3. โปรเจกต์ DPS Meter & Combat Log ภาษาอังกฤษ (มี parser-data เก็บ ID สกิล, บัฟ, อาชีพครบทั้งหมด)
    "resonance-logs-global": "https://github.com/donneeee/resonance-logs-global.git",
}

def sync_reference_repos():
    for name, url in REPOS.items():
        target_path = EXTERNAL_REPOS_DIR / name
        if not target_path.exists():
            print(f"[CLONING] กำลังดึงซอร์สโค้ดและตารางข้อมูลจาก {name} ...")
            subprocess.run(["git", "clone", "--depth", "1", url, str(target_path)], check=True)
        else:
            print(f"[UPDATING] อัปเดตข้อมูลล่าสุดของ {name} ...")
            subprocess.run(["git", "-C", str(target_path), "pull"], check=True)

    print("\n✅ ดึงข้อมูลจาก GitHub ทั้ง 3 โปรเจกต์เสร็จสมบูรณ์!")
    print("ไฟล์ข้อมูลสำคัญที่พร้อมนำไปแปลงเป็น JSON:")
    print("1. src/data/_external_repos/StarResonanceAutoMod/module_types.py")
    print("2. src/data/_external_repos/star-resonance-module-optimizer/src/")
    print("3. src/data/_external_repos/resonance-logs-global/parser-data/")

if __name__ == "__main__":
    sync_reference_repos()