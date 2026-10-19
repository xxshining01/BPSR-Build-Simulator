# ไฟล์: .agents/skills/bpsr-data-scraper/scripts/fetch_github_repos_data.py
import subprocess
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[4]
EXTERNAL_REPOS_DIR = PROJECT_ROOT / "src" / "data" / "_external_repos"
EXTERNAL_REPOS_DIR.mkdir(parents=True, exist_ok=True)

REPOS = {
    # 1. โปรเจกต์เว็บจัดบิลด์ BPSR โดยตรง (โครงสร้างบิลด์, อุปกรณ์, อาชีพ, UI และ Assets)
    "bpsr-build-planner": "https://github.com/alalwww/bpsr-build-planner.git",
    # 2. โปรเจกต์คำนวณ 5 โมดูลต้นฉบับ
    "StarResonanceAutoMod": "https://github.com/fudiyangjin/StarResonanceAutoMod.git",
    # 3. เว็บคำนวณโมดูลภาษาอังกฤษ
    "star-resonance-module-optimizer": "https://github.com/asgharkapk/star-resonance-module-optimizer.git",
    # 4. โปรเจกต์ DPS Meter & Data Tables ขนาดใหญ่จากไฟล์เกมจริง
    "resonance-logs-global": "https://github.com/donneeee/resonance-logs-global.git",
}

def sync_reference_repos():
    for name, url in REPOS.items():
        target_path = EXTERNAL_REPOS_DIR / name
        if not target_path.exists():
            print(f"[CLONING] กำลังดึงซอร์สโค้ดและตารางข้อมูลจาก {name} ...")
            subprocess.run(["git", "clone", "--depth", "1", url, str(target_path)], check=True)
        else:
            print(f"[EXISTS] มีโฟลเดอร์ {name} อยู่แล้ว (ข้ามการ Clone)")

    print("\n✅ ซิงค์ข้อมูลจาก GitHub ทั้ง 4 โปรเจกต์เสร็จสมบูรณ์!")

if __name__ == "__main__":
    sync_reference_repos()