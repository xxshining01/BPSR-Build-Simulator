# ไฟล์: .agents/skills/bpsr-data-scraper/scripts/extract_maxroll_master_db.py
import asyncio
import json
import re
from pathlib import Path
from playwright.async_api import async_playwright

PROJECT_ROOT = Path(__file__).resolve().parents[4]
DUMP_DIR = PROJECT_ROOT / "src" / "data" / "_raw_dumps" / "maxroll_planner"
DUMP_DIR.mkdir(parents=True, exist_ok=True)

PLANNER_URL = "https://maxroll.gg/blue-protocol/planner"

async def dump_all_planner_databases():
    # ล้างไฟล์ขยะเก่าออกก่อนเริ่ม
    for old_file in DUMP_DIR.glob("*"):
        if old_file.is_file():
            old_file.unlink()

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
        )
        page = await context.new_page()

        # บล็อกโฆษณาและ Tracker ทั้งหมดเพื่อให้หน้าเว็บโหลดเร็วและไม่เซฟไฟล์ขยะ
        await page.route("**/*", lambda route: route.abort() if any(
            ad in route.request.url for ad in [
                "adsrvr", "criteo", "gumgum", "rubicon", "pubmatic", "primis",
                "id5-sync", "3lift", "cpmstar", "cookielaw", "onetrust", "google-analytics",
                "doubleclick", "amazon-adsystem", "ad-score", "crwdcntrl"
            ]
        ) else route.continue_())

        captured_count = 0

        async def on_response(response):
            nonlocal captured_count
            url = response.url
            # กรองเฉพาะไฟล์ที่มาจากโดเมนของ Maxroll เท่านั้น!
            if "maxroll.gg" not in url:
                return

            content_type = response.headers.get("content-type", "").lower()
            if any(ext in url.lower() for ext in [".png", ".webp", ".jpg", ".svg", ".woff", ".css"]):
                return

            try:
                body = await response.text()
                size_kb = len(body.encode("utf-8")) / 1024

                # เก็บทุกไฟล์ JSON จาก maxroll.gg หรือไฟล์ JS ขนาดใหญ่ที่มีข้อมูลเกม
                is_json = "json" in content_type or url.split("?")[0].endswith(".json")
                has_game_data = size_kb > 10 and any(
                    kw in body for kw in ["Falconry", "Wildpack", "Psychoscope", "Illusion", "Versatility", "Emblem", "Perfection"]
                )

                if is_json or has_game_data:
                    captured_count += 1
                    raw_name = url.split("/")[-1].split("?")[0]
                    safe_name = re.sub(r"[^a-zA-Z0-9._-]", "_", raw_name)[:50]
                    ext = ".json" if is_json else ".js"
                    if not safe_name.endswith(ext):
                        safe_name = f"{captured_count:02d}_{safe_name}{ext}"
                    else:
                        safe_name = f"{captured_count:02d}_{safe_name}"

                    out_path = DUMP_DIR / safe_name
                    if is_json:
                        try:
                            parsed = json.loads(body)
                            out_path.write_text(json.dumps(parsed, ensure_ascii=False, indent=2), encoding="utf-8")
                        except Exception:
                            out_path.write_text(body, encoding="utf-8")
                    else:
                        out_path.write_text(body, encoding="utf-8")

                    print(f"[MAXROLL DATA #{captured_count}] {safe_name} ({size_kb:,.1f} KB) <- {url}")
            except Exception:
                pass

        page.on("response", on_response)

        print(f"1. กำลังเปิดหน้าเว็บ {PLANNER_URL} (บล็อกโฆษณาทั้งหมดแล้ว) ...")
        await page.goto(PLANNER_URL, wait_until="domcontentloaded", timeout=60000)

        print("2. กรุณาลองคลิกเลือกอาชีพ / ช่องอุปกรณ์ / โมดูล / Psychoscope บนหน้าเว็บที่เด้งขึ้นมา (มีเวลา 25 วินาที)...")
        await page.wait_for_timeout(25000)

        # ดึง Global Variables ทั้งหมดในหน้าเว็บที่มีขนาดใหญ่ (เช่น Remix Context / Planner Store)
        window_dump = await page.evaluate("""() => {
            const result = {};
            for (const key of Object.keys(window)) {
                if (key.startsWith('__') || key.toLowerCase().includes('data') || key.toLowerCase().includes('planner') || key.toLowerCase().includes('remix')) {
                    try {
                        result[key] = window[key];
                    } catch (e) {}
                }
            }
            return result;
        }""")

        if window_dump:
            win_path = DUMP_DIR / "00_window_globals.json"
            win_path.write_text(json.dumps(window_dump, ensure_ascii=False, indent=2), encoding="utf-8")
            print(f"[SAVED WINDOW STATE] 00_window_globals.json ({win_path.stat().st_size / 1024:,.1f} KB)")

        await browser.close()
        print(f"\n✅ เสร็จสมบูรณ์! ดึงไฟล์ของแท้จาก Maxroll ได้ทั้งหมด {captured_count} ไฟล์ ที่: {DUMP_DIR}")

if __name__ == "__main__":
    asyncio.run(dump_all_planner_databases())