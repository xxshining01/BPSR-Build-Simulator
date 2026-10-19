# ไฟล์: .agents/skills/bpsr-data-scraper/scripts/inspect_extracted_data.py
import os
import re
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[4]
EXTERNAL_DIR = PROJECT_ROOT / "src" / "data" / "_external_repos"
MAXROLL_DUMP_DIR = PROJECT_ROOT / "src" / "data" / "_raw_dumps" / "maxroll_planner"

def inspect_planner_and_optimizer_repos():
    print("=" * 75)
    print("1. โครงสร้างไฟล์ทั้งหมดใน bpsr-build-planner และ star-resonance-module-optimizer")
    print("=" * 75)

    skip_dirs = {".git", "node_modules", "dist", "build", "__pycache__"}

    for repo_name in ["bpsr-build-planner", "star-resonance-module-optimizer"]:
        repo_dir = EXTERNAL_DIR / repo_name
        print(f"\n📂 โปรเจกต์: {repo_name}")
        if not repo_dir.exists():
            print("   ❌ ยังไม่ได้ Clone โปรเจกต์นี้")
            continue

        all_files = []
        for root, dirs, files in os.walk(repo_dir):
            dirs[:] = [d for d in dirs if d not in skip_dirs]
            for file in files:
                full_path = Path(root) / file
                size_kb = full_path.stat().st_size / 1024
                rel_path = full_path.relative_to(repo_dir)
                all_files.append((rel_path, size_kb))

        # แสดงรายการไฟล์ทั้งหมดเพื่อดูโครงสร้างโปรเจกต์
        all_files.sort(key=lambda x: str(x[0]))
        for rel_path, size_kb in all_files[:60]:
            print(f"   - {str(rel_path):<55} ({size_kb:,.1f} KB)")
        if len(all_files) > 60:
            print(f"   ... และอีก {len(all_files) - 60} ไฟล์")

def inspect_maxroll_sr_tools_bundles():
    print("\n" + "=" * 75)
    print("2. ตรวจสอบไฟล์ฐานข้อมูล Maxroll sr-tools (.js / .json) ที่ดึงมาได้")
    print("=" * 75)

    if not MAXROLL_DUMP_DIR.exists():
        print("❌ ไม่พบโฟลเดอร์ maxroll_planner")
        return

    for f in sorted(MAXROLL_DUMP_DIR.iterdir()):
        if not f.is_file():
            continue
        size_kb = f.stat().st_size / 1024
        print(f"📄 {f.name:<40} ({size_kb:,.1f} KB)")

        # ถ้าเป็นไฟล์ฐานข้อมูลหลักของ sr-tools ให้สแกนหา Keys สำคัญข้างใน
        if "loader-" in f.name or "sr-texts-" in f.name:
            text = f.read_text(encoding="utf-8", errors="ignore")
            sample_keys = re.findall(r'"([a-zA-Z0-9_]{4,25})"\s*:', text)
            unique_keys = list(dict.fromkeys(sample_keys))[:25]
            print(f"   🔍 ตัวอย่าง Keys ที่พบข้างใน: {unique_keys}")

if __name__ == "__main__":
    inspect_planner_and_optimizer_repos()
    inspect_maxroll_sr_tools_bundles()