# ไฟล์: .agents/skills/bpsr-data-scraper/scripts/extract_maxroll_master_db.py
import asyncio
import json
from pathlib import Path
from playwright.async_api import async_playwright

PROJECT_ROOT = Path(__file__).resolve().parents[4]
DUMP_DIR = PROJECT_ROOT / "src" / "data" / "_raw_dumps" / "maxroll_planner"
DUMP_DIR.mkdir(parents=True, exist_ok=True)

PLANNER_URL = "https://maxroll.gg/blue-protocol/planner"

async def dump_all_planner_databases():
    async with async_playwright() as p:
        # เปิดเบราว์เซอร์เพื่อดักไฟล์ฐานข้อมูลทั้งหมดที่ Planner โหลดขึ้นมา
        browser = await p.chromium.launch(headless=False) # เปิดหน้าจอให้เห็นจะช่วยผ่าน Cloudflare ได้ง่ายขึ้น
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
        )
        page = await context.new_page()

        captured_count = 0

        async def on_response(response):
            nonlocal captured_count
            url = response.url
            content_type = response.headers.get("content-type", "")

            # ดักจับทุกไฟล์ JSON หรือไฟล์ข้อมูลเกมจาก CDN ของ Maxroll
            if "json" in content_type or ".json" in url or "data" in url:
                try:
                    body = await response.text()
                    data = json.loads(body)
                    
                    # สร้างชื่อไฟล์จาก URL เพื่อดูว่าไฟล์ไหนเก็บ Equipments, Sets, Talents, Psychoscopes
                    clean_name = url.split("/")[-1].split("?")[0]
                    if not clean_name.endswith(".json"):
                        clean_name = f"payload_{captured_count}_{clean_name[:30]}.json"
                    
                    out_file = DUMP_DIR / clean_name
                    with open(out_file, "w", encoding="utf-8") as f:
                        json.dump(data, f, ensure_ascii=False, indent=2)
                    
                    captured_count += 1
                    print(f"[SAVED #{captured_count}] {clean_name} (Size: {len(body)//1024} KB) <- {url}")
                except Exception:
                    pass

        page.on("response", on_response)

        print(f"1. กำลังเปิดหน้าเว็บ {PLANNER_URL} ...")
        await page.goto(PLANNER_URL, wait_until="domcontentloaded", timeout=60000)

        print("2. กรุณาคลิกเลือกอาชีพ / ช่องอุปกรณ์ / โมดูล / Psychoscope บนหน้าเว็บที่เด้งขึ้นมาสัก 15 วินาที เพื่อให้เว็บโหลด JSON ครบทุกหมวด...")
        await page.wait_for_timeout(20000)

        # ดึงข้อมูลที่อาจจะฝังอยู่ใน window.__NEXT_DATA__ หรือ Global State ของเว็บด้วย
        next_data = await page.evaluate("() => window.__NEXT_DATA__ || window.__INITIAL_STATE__ || null")
        if next_data:
            with open(DUMP_DIR / "_window_state_dump.json", "w", encoding="utf-8") as f:
                json.dump(next_data, f, ensure_ascii=False, indent=2)
            print("[SAVED] _window_state_dump.json จาก Global Window Object!")

        await browser.close()
        print(f"\nเสร็จสมบูรณ์! ดึงไฟล์ฐานข้อมูลมาได้ทั้งหมด {captured_count} ไฟล์ ที่โฟลเดอร์: {DUMP_DIR.resolve()}")

if __name__ == "__main__":
    asyncio.run(dump_all_planner_databases())