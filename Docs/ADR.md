# Architectural Decision Records (ADR)

**Project:** Blue Protocol: Star Resonance — Character Build & Combat Simulator  
**Last Updated:** 2026-10-20  
**Status:** Active & Enforced

---

## ADR-001: Client-Side First Architecture with Next.js (App Router) & TypeScript

- **Status:** Accepted
- **Context:** ระบบต้องการความเร็วในการตอบสนองระดับ Real-time ทันทีที่ผู้ใช้ปรับเปลี่ยนอุปกรณ์, ค่า Perfection (0–100), โหนด Talent, โมดูล หรือระดับ Tier ของ Imagine โดยไม่ควรมี Latency จากการยิง API ไปคำนวณที่ฝั่ง Backend
- **Decision:** พัฒนาในรูปแบบ Rich Client-Side Web Application ด้วย **Next.js (App Router) + TypeScript** โดยให้สมองกลคำนวณทั้งหมด (`/src/engine/`) ทำงานอยู่บนฝั่ง Client และจัดเก็บฐานข้อมูลเกมที่ผ่านการตรวจสอบแล้วไว้ใน `/src/data/game-db/` และพจนานุกรมภาษาใน `/src/data/locales/en_US/`
- **Consequences:** ทำงานได้รวดเร็วระดับ Zero-Latency, ประหยัดค่าใช้จ่าย Server, และตรวจสอบความถูกต้องของโครงสร้างข้อมูลได้ตั้งแต่เวลาเขียนโค้ดด้วย TypeScript และ Zod

---

## ADR-002: Hybrid Image Asset Pipeline (Local Cache First + Remote CDN Fallback)

- **Status:** Accepted
- **Context:** เว็บไซต์อ้างอิงภายนอกมีมาตรการป้องกัน Hotlink (403 Forbidden) หรืออาจเปลี่ยน URL ของไฟล์รูปภาพในอนาคต
- **Decision:** ใช้ระบบจัดการรูปภาพแบบผสมผสาน (Hybrid Asset Pipeline) โดยมีตารางอ้างอิงไอคอนใน `/src/data/game-db/attr-icons.json` และ `enchant-material-icons.json` คู่กับ Path ใน `/public/assets/` และมี Fallback ป้องกันภาพแตกเสมอ

---

## ADR-003: Synchronous Deterministic 5-Minute Combat Simulation Engine

- **Status:** Accepted (Updated on 2026-10-20 — Supersedes initial Web Worker draft)
- **Context:** ระบบต้องจำลองการหมุนสกิลอัตโนมัติเป็นเวลา 5 นาที (300 วินาที = 6,000 Ticks ที่ความละเอียด 50ms ต่อ Tick) ในตอนแรกออกแบบไว้ว่าจะแยกไฟล์ `simulator.worker.ts` แต่จากการทดสอบจริงพบว่าการคำนวณแบบ Deterministic Expected Value (EV) ใน `src/engine/combat-simulator.ts` ใช้เวลาประมวลผลเพียง ~2–5 มิลลิวินาทีเท่านั้น
- **Decision:** รันลูปจำลองการต่อสู้ 6,000 Ticks แบบ Synchronous ผ่านฟังก์ชัน `runFiveMinuteCombatSimulation` ใน `src/engine/combat-simulator.ts` คู่กับ `useMemo` ในฝั่ง React UI โดยไม่ต้องแยกไฟล์ `simulator.worker.ts` เพื่อลดความซับซ้อนของการสื่อสารข้าม Thread และหลีกเลี่ยงปัญหา Bundler ของ Next.js
- **Consequences:** โค้ดสะอาดขึ้น ทดสอบผ่าน CLI (`npx tsx src/engine/test-run.ts`) ได้โดยตรง และอัปเดตตาราง DPS/HPS บนหน้าเว็บได้ทันทีที่เปลี่ยนของสวมใส่

---

## ADR-004: Spec-Locked Build Comparison Rule

- **Status:** Accepted
- **Context:** ในแต่ละอาชีพจะมีสาย Talent หลัก 2 สายที่มีกลไกและบทบาทต่างกัน (เช่น สายทำดาเมจ vs สายฮีล/ซัพพอร์ต) การนำบิลด์คนละสายมาเปรียบเทียบกันโดยตรงจะทำให้การวิเคราะห์ผิดเพี้ยน
- **Decision:** บังคับกฎในระดับ Schema (`validateBuildsCanCompare` ใน `user-build.schema.ts`) และระดับ Engine (`src/engine/build-comparator.ts`) ให้สามารถเปรียบเทียบบิลด์ได้ **เฉพาะภายในอาชีพ (`classId`) และสาย Talent (`specId`) เดียวกันเท่านั้น**

---

## ADR-005: Dual-Window Status Architecture (Summary vs. Full Attributes @ Lv.60)

- **Status:** Accepted
- **Context:** ตัวเกมจริงแบ่งการแสดงผลค่าสถานะตัวละครออกเป็น 2 ระดับ คือ หน้าสรุปค่าหลัก (Summary) และหน้ารายละเอียดเชิงลึก (Full Attributes)
- **Decision:** ออกแบบ `src/engine/stat-aggregator.ts` ให้คืนค่าอ็อบเจกต์ที่แยกโครงสร้างชัดเจนเป็น `summaryWindow` (หน้าต่างที่ 1: สรุป) และ `fullAttributesWindow` (หน้าต่างที่ 2: ข้อมูลเต็มครบทั้ง 6 หมวดหมู่ย่อย) ที่ระดับตัวละคร **Lv.60** เสมอ

---

## ADR-006: Adoption of Verified ZTable Game Database (`bpsr-build-planner` & `resonance-logs-global`)

- **Status:** Accepted (Added on 2026-10-20)
- **Context:** การใช้ Web Scraping ดึงข้อมูลจากหน้าเว็บ Maxroll เพียงอย่างเดียวได้ไฟล์ Bundle ที่ถูกเข้ารหัสและติดสคริปต์โฆษณาจำนวนมาก เสี่ยงต่อการได้ข้อมูลไม่ครบถ้วน ในขณะเดียวกัน เราค้นพบโปรเจกต์ Open-Source `alalwww/bpsr-build-planner` ที่สกัดตาราง `ZTable` จากตัวเกมจริง Season 3 ครบ 100% และโปรเจกต์ `donneeee/resonance-logs-global` ที่มีตารางตัวคูณดาเมจและ Cooldown สกิลจากตัวเกม
- **Decision:** เปลี่ยนโครงสร้างไฟล์ใน `/src/data/game-db/` จากเดิมที่เคยวางแผนไว้ 7 ไฟล์สมมติ มาเป็นการนำเข้าไฟล์ ZTable ของจริงจำนวน **17 ไฟล์หลัก**, โฟลเดอร์ `/src/data/game-db/combat-sim/` จำนวน **5 ไฟล์**, พจนานุกรมภาษาอังกฤษ `/src/data/locales/en_US/` จำนวน **2 ไฟล์**, และเก็บโค้ดต้นแบบการคำนวณไว้เป็นหลักฐานอ้างอิงใน `/src/engine/_reference_logic/` (18 ไฟล์) โดยมี `src/engine/game-db-loader.ts` ทำหน้าที่เป็น Adapter เชื่อมรหัส ID เข้ากับ Zod Schema ของโปรเจกต์
- **Consequences:** ได้ข้อมูลเกมจริงระดับ Zero Hallucination 100% ครบทั้งอุปกรณ์ GS 260/270/280, เซ็ตอุปกรณ์, ออปชันม่วง, Imagine 73 ตัว (Tier 0–5), Sigil Lv.1–3, Module 21 Effects, และ Deep Slumber Psychoscope ทั้ง 8 สาย

---

## ADR-007: Consolidated Workspace UI & Interactive SVG Talent Tree Diagram

- **Status:** Accepted (Added on 2026-10-20)
- **Context:** ในเอกสารร่างแรกได้แยกโฟลเดอร์ UI ออกเป็นโฟลเดอร์ย่อยจำนวนมาก (`planner/`, `status/`, `simulator/`, `comparison/`) ซึ่งทำให้การส่งผ่าน State และการแก้ไขโค้ดข้ามไฟล์ซับซ้อนเกินความจำเป็นในช่วงพัฒนาหลัก
- **Decision:** รวมศูนย์หน้าจอหลักของระบบไว้ใน `src/app/page.tsx` ที่เชื่อมตรงกับ `src/store/useBuildStore.ts` และแยกเฉพาะคอมโพเนนต์ที่มีความซับซ้อนทางกราฟิกสูงออกมาเป็น `src/components/TalentTreeDiagram.tsx` (สำหรับวาดแผนผัง SVG Talent Tree Map 2 แท็บ)
- **Consequences:** โครงสร้างไฟล์กระชับ ไม่มีปัญหา Props Drilling หรือ Circular Dependency และแก้ไขปรับปรุง UI แต่ละแท็บได้รวดเร็ว

---

## ADR-008: Talent-Driven Specialization (31st Point Rule) & 7-Slot Skill System

- **Status:** Accepted (Added on 2026-10-20)
- **Context:** ในระบบเกมจริง ผู้เล่นไม่ได้เลือกสายการเล่น (`Spec`) จาก Dropdown ตอนเลือกอาชีพ แต่เลือกเพียงอาชีพหลัก (1 ใน 9 คลาส) จากนั้นต้องอัปโหนด Basic Talents ให้ครบ 30 โหนด (30 แต้ม) ก่อน แล้วใช้แต้มที่ 31 กดเลือกโหนด Keystone เปิดสายการเล่น (1 ใน 2 สาย) เพื่อปลดล็อกผังเฉพาะตัวอีก 69 แต้ม (รวมเป็น 30 + 70 = 100 โหนด) นอกจากนี้ สกิลในเกมจริงมีทั้งหมด 7 ช่อง (ล็อกปุ่มตายตัว 3 ช่อง คือ คลิกซ้าย, เลข 1, ปุ่ม R และเลือกใส่เอง 4 ช่อง คือ เลข 2, 3, 4, 5) ซึ่งทุกช่องอัปเกรดเลเวลและ Tier ได้ทั้งหมด
- **Decision:** ปรับปรุง `src/engine/game-db-loader.ts`, `src/store/useBuildStore.ts`, `src/components/TalentTreeDiagram.tsx` และ `src/app/page.tsx` ให้รองรับการเปลี่ยน `specId` อัตโนมัติตามโหนด Keystone ที่อัปบนผัง Talent Tree Map และขยายระบบสกิลเป็น 7 ช่องเต็มที่ปรับ Lv. (1–30) และ Tier (0–6) ได้ทุกช่อง

---

## ADR-009: Strict Documentation-First Governance Protocol

- **Status:** Accepted & Strictly Enforced (Added on 2026-10-20)
- **Context:** เพื่อป้องกันไม่ให้โครงสร้างไฟล์ ชื่อไฟล์ หรือสถาปัตยกรรมของโปรเจกต์ผิดเพี้ยนไปจากเอกสารออกแบบโดยพลการในอนาคต
- **Decision:** บังคับใช้กฎ **Documentation-First Change Control Protocol** ใน `.agents/agents.md` และ `.agents/rules/strict_architecture_governance.md` โดย AI Agent ต้องยึดถือโครงสร้างและชื่อไฟล์ตาม `ADR.md`, `SAD.md`, และ `SDD.md` อย่างเคร่งครัด หากจำเป็นต้องเพิ่ม/ลบ/เปลี่ยนชื่อไฟล์หรือเปลี่ยนสถาปัตยกรรมให้ต่างจากเอกสาร **ต้องแจ้งขออนุญาตผู้ใช้ก่อนเสมอ** เมื่อได้รับอนุมัติแล้ว ต้องบันทึกเหตุผลลงใน `ADR.md` และอัปเดต `SAD.md` กับ `SDD.md` ให้เสร็จสิ้นก่อน จึงจะได้รับอนุญาตให้แก้ไขโค้ดจริง
