# Architecture Decision Records (ADR)
**Project:** Blue Protocol: Star Resonance (BPSR) Build & Combat Simulator

---

## ADR-001: การประมวลผลการคำนวณสเตตัสและการจำลองการต่อสู้บน Client-Side (Web Workers)
* **สถานะ:** Accepted
* **บริบท:** ระบบต้องคำนวณ Status แบบ Real-time ทันทีที่ผู้ใช้เปลี่ยนอุปกรณ์/โหนด และต้องรันการจำลอง Combat Rotation ยาว 5 นาที (300 วินาที) แบบละเอียดระดับ Tick (เช่น ทุกๆ 0.05 วินาที = 6,000 Ticks) หากส่งไปคำนวณที่ Server ทุกครั้งจะเกิด Latency สูงและเปลือง Cost ของ Server
* **การตัดสินใจ:** 
  1. เขียน Stat Calculation Engine เป็น Pure TypeScript Functions ที่รันบน Main Thread สำหรับการอัปเดต UI ทันที (ใช้เวลา < 2ms)
  2. แยก **5-Minute Auto-Rotation Combat Simulator** ไปรันใน **Web Worker** เพื่อไม่ให้หน้าเว็บค้าง (Non-blocking UI) ขณะคำนวณลูป 6,000 Ticks และรัน Monte Carlo / Expected Value
* **ผลลัพธ์:** UI ลื่นไหลระดับ 60fps แม้กดเปลี่ยนของรัวๆ ประหยัดค่า Server (Server ใช้เก็บ/โหลด Build JSON เท่านั้น)

---

## ADR-002: การจำลองระบบสุ่ม (Crit / Lucky Strike / Proc) ด้วย Hybrid Deterministic Expected Value (EV) & Seeded RNG
* **สถานะ:** Accepted
* **บริบท:** เกมมีระบบโอกาสติด (Crit Rate, Luck Rate, โอกาสติดสถานะจาก Talent/Sigil) หากใช้การสุ่มล้วน (Pure RNG) ผลลัพธ์ DPS ตอนกดรันแต่ละครั้งจะไม่เท่ากัน ทำให้ผู้เล่นนำบิลด์มาเปรียบเทียบ (Compare) เพื่อหาความต่างระดับ 1-2% ไม่ได้
* **การตัดสินใจ:** 
  1. **โหมดมาตรฐาน (Default Compare Mode):** ใช้สมการ **Expected Value (EV)** ในการคิดดาเมจและฮีลต่อฮิต เช่น $E[DMG] = Base \times (1 + CritRate \times (CritDMG - 1))$ ส่วนระบบ Proc ที่เป็น Cooldown/Stack จะใช้การสะสมค่าความน่าจะเป็น (Deterministic Accumulator) เมื่อครบ 100% จึงสั่งทำงาน
  2. **โหมดจำลองจริง (Seeded Simulation Mode - เสริม):** ใช้ PRNG (Pseudorandom Number Generator) แบบล็อกค่า `Seed` คงที่ เพื่อให้เกิดลำดับการติด Crit/Proc ที่เหมือนเดิม 100% ทุกครั้งที่รันด้วยบิลด์เดิม
* **ผลลัพธ์:** ผู้ใช้สามารถเทียบ Build A vs Build B แล้วเห็นผลต่างของ DPS ที่แม่นยำ 100% โดยไม่มีตัวแปรเรื่อง "ดวง" มาเกี่ยวข้อง

---

## ADR-003: โครงสร้างข้อมูลเกมแบบ Static JSON Schema แยกขาดจากฐานข้อมูลผู้ใช้ (Relational DB)
* **สถานะ:** Accepted
* **บริบท:** ข้อมูลเกม (อาชีพ, สกิล, ไอเทม, Sigil, Factor G10, Psychoscope, Module) มีความซับซ้อนและเชื่อมโยงกันหลายชั้น แต่เป็นข้อมูลแบบ Read-Only สำหรับผู้เล่นทุกคน ในขณะที่ข้อมูลบิลด์ของผู้ใช้มีการเขียน/อ่านตลอดเวลา
* **การตัดสินใจ:**
  1. เก็บข้อมูล Master Data ของเกมทั้งหมดเป็นไฟล์ **Static TypeScript/JSON (`/src/data/game-db/`)** ที่ผ่านการ Validate ด้วย `Zod Schema` ตอน Build-time
  2. ใช้ **PostgreSQL (ผ่าน Prisma + Supabase)** สำหรับเก็บเฉพาะ User Builds (เก็บเป็น Compact JSON Payload หรือ URL SerializationHash) และ Metadata สำหรับการค้นหา/เปรียบเทียบ
* **ผลลัพธ์:** โหลดหน้าเว็บเร็วมาก ไม่ต้อง Query DB หาข้อมูลไอเทม हजारोंรายการ และ AI สามารถอ่านแก้ไขข้อมูลเกมจากไฟล์ JSON ในโปรเจกต์ได้โดยตรง

---

## ADR-004: กฎการล็อกสายอาชีพในการเปรียบเทียบบิลด์ (Strict Spec-Locked Build Comparison)
* **สถานะ:** Accepted
* **บริบท:** แต่ละสายอาชีพย่อย (Specialization เช่น *Falconry* vs *Wildpack*) มีกลไกสกิล ตัวคูณ และบทบาทที่ต่างกัน การนำคนละสายมาเทียบในตารางเดียวกันจะทำให้ค่า % การมีส่วนร่วมของสกิล (Skill Contribution Breakdown) เพี้ยนและเปรียบเทียบไม่ได้
* **การตัดสินใจ:** บังคับระดับ Schema และ UI State ให้การกด Compare (Build A vs Build B) ต้องมี `classId` และ `specId` (สายอาชีพย่อยหลัก) ตรงกันเท่านั้น หากไม่ตรง ระบบจะไม่อนุญาตให้นำเข้าสู่หน้าต่าง Compare