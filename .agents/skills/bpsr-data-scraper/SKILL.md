---
name: bpsr-data-scraper
description: ใช้สกิลนี้เมื่อผู้ใช้สั่งให้ดึงข้อมูลเกม (Scrape/Ingest), ดักจับ JSON จาก Maxroll Planner, ดึงข้อมูลตาราง Module/Skill IDs จาก GitHub Repos, อัปเดตฐานข้อมูลใน /src/data/game-db/ หรือดาวน์โหลดและแปลงรูปไอคอนเป็น .webp ลงใน /public/assets/
---

# BPSR Data Scraping & Hybrid Asset Ingestion Skill

## ภาพรวม / วัตถุประสงค์ (Overview / Goal)
- รวบรวมข้อมูลดิบของเกม Blue Protocol: Star Resonance จากทั้งหน้าเว็บ Planner (Maxroll), ซอร์สโค้ดเครื่องมือคำนวณบน GitHub และตาราง Wiki มาผสานกันเป็นฐานข้อมูล JSON มาตรฐานของโปรเจกต์
- จัดการดาวน์โหลดรูปภาพไอคอนและแปลงเป็นไฟล์ `.webp` ขนาดเล็กเก็บใน `/public/assets/` พร้อมแนบลิงก์สำรอง (`iconRemoteUrl`)

## แนวทางปฏิบัติและข้อกำหนด (Instructions & Rules)
1. **เลือกรันสคริปต์ให้ตรงกับแหล่งข้อมูล (Pipeline Execution Order):**
   - **ขั้นที่ 1 (ดึงข้อมูลหน้าเว็บ Planner):** รัน `extract_maxroll_master_db.py` เมื่อต้องการดึงโครงสร้างอุปกรณ์, เซ็ต NPC, สกิล, ผังโหนด Talent, Psychoscope และ URL รูปภาพจาก Maxroll Planner
   - **ขั้นที่ 2 (ดึงตารางตัวเลขเชิงลึกจาก GitHub):** รัน `fetch_github_repos_data.py` เมื่อต้องการดึงตารางค่าสเตตัสของ Module ทั้ง 21 ชนิด (Link Lv.1-6), ข้อมูล Protobuf และรหัส ID สกิล/บัฟจากโปรเจกต์ Open-Source บน GitHub
   - **ขั้นที่ 3 (สร้างไฟล์ Database และโหลดรูป):** รัน `build_database.py` เพื่อนำไฟล์ดิบจากขั้นที่ 1 และ 2 มาแปลงเป็น JSON มาตรฐานลงใน `/src/data/game-db/` และดาวน์โหลดรูปภาพเป็น `.webp` ลงใน `/public/assets/`
2. **กฎการจัดการรูปภาพ (Hybrid Icon Rule):**
   - ทุก Record ที่มีรูปภาพ ต้องสร้างฟิลด์ `"icon"` (ชี้ไปที่ `/assets/<category>/<id>.webp`) และ `"iconRemoteUrl"` (URL ต้นทาง) เสมอ
   - เมื่อรันสคริปต์ดาวน์โหลดรูป ต้องตั้งค่า HTTP Header `Referer` และ `User-Agent` เพื่อป้องกัน Error `403 Forbidden`
3. **ห้ามสมมติค่าตัวเลข (Zero Hallucination):**
   - ห้ามแต่งตัวเลขสเตตัสหรือเอฟเฟกต์ขึ้นมาเองเด็ดขาด หากข้อมูลส่วนใดยังหาไม่พบในไฟล์ Dump ให้ใส่ค่า `0` และระบุ `"_todo_verify": true`
4. **การตรวจสอบหลังจบงาน:**
   - เมื่อสร้างหรืออัปเดตไฟล์ใน `/src/data/game-db/` เสร็จ ต้องสั่งรัน `npx tsx .agents/tools/validate_game_db.ts` เพื่อตรวจสอบกับ Zod Schema ทุกครั้ง

## สคริปต์และทรัพยากรเสริม (Scripts & References)
1. **`scripts/extract_maxroll_master_db.py`**
   - **หน้าที่:** เปิดเบราว์เซอร์ด้วย Playwright เพื่อดักจับไฟล์ Network JSON และดึงค่า Global Window State จากหน้าเว็บ `maxroll.gg/blue-protocol/planner` มาเก็บไว้ใน `src/data/_raw_dumps/maxroll_planner/`
2. **`scripts/fetch_github_repos_data.py`**
   - **หน้าที่:** Clone และอัปเดตซอร์สโค้ดฐานข้อมูลจาก GitHub Repositories อ้างอิง (`StarResonanceAutoMod`, `star-resonance-module-optimizer`, `resonance-logs-global`) มาเก็บไว้ใน `src/data/_external_repos/` สำหรับแกะค่าตัวเลข Module Lv.1-6 และรหัสสกิล/บัฟ
3. **`scripts/build_database.py`**
   - **หน้าที่:** อ่านข้อมูลดิบจาก `_raw_dumps/` และ `_external_repos/` (รวมถึงดึงตารางเสริมจาก Bilibili Wiki) มาแปลงเป็นไฟล์ JSON มาตรฐานใน `src/data/game-db/` พร้อมดาวน์โหลดและบีบอัดรูปไอคอนเป็น `.webp` ลงใน `public/assets/`
4. **`references/source_endpoints.md`**
   - **หน้าที่:** เอกสารอ้างอิง URL, HTTP Headers, DOM Selectors และตารางเทียบคำศัพท์สเตตัส จีน-อังกฤษ สำหรับใช้เขียน Parser