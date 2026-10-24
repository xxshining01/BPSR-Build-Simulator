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
---

## ADR-010: การใช้ `alalwww/bpsr-build-planner` เป็น Base Application 100% และต่อยอดโมดูล Combat Simulator & Multi-Build Comparator

* **สถานะ (Status):** Accepted (บังคับใช้แทนการเขียน UI Build Planner แยกเอง)
* **วันที่ (Date):** 2026-10-22
* **บริบท (Context):**
  * โปรเจกต์โอเพนซอร์ส `alalwww/bpsr-build-planner` มีระบบคำนวณค่าสเตตัสพื้นฐาน (`calculateRawStats.ts`, `deriveStats.ts`), ระบบจัดการอุปกรณ์ 11 ชิ้น (`equipment.json`, `refine.json`, `suits.json`), โมดูล 21 ชนิด (`modules.json`), ระบบตีตรา Sigils (`enchants.json`), ระบบผังสกิลและพรสวรรค์ (`talent-tree.json`), ระบบ Deep Slumber Psychoscope & Factors (`season-talents.json`, `phantom-factors.json`), และระบบบันทึกหลายบิลด์ (`PlanManager` ใน `localStorage`) ที่สมบูรณ์และตรงกับเกมจริง 100% อยู่แล้ว
  * การเขียน UI สำหรับจัดบิลด์ใหม่ตั้งแต่ศูนย์เป็นการทำงานซ้ำซ้อนและเสี่ยงต่อความคลาดเคลื่อนของสูตรพื้นฐาน
  * สิ่งที่ `bpsr-build-planner` ยังขาดไปคือ **ระบบจำลองการต่อสู้ตามเวลาจริง (Time-Stepped Combat Simulator Engine)** ที่นำตัวคูณสกิล, สกิลลูก (`<linktext>`), โหนด Talent ที่ติด Proc, บัฟชั่วคราวตอนกดใช้ Battle Imagine, โบนัสเซ็ตอุปกรณ์ 2/4 ชิ้น, อาวุธทอง Far Sea (`effectType=3`), และเอฟเฟกต์ต่อสู้ของโมดูล/อาหาร/Psychoscope มาคำนวณเป็นค่า DPS / HPS / Total Damage และ **ระบบเปรียบเทียบหลายบิลด์ (Multi-Build Comparator)**
* **การตัดสินใจ (Decision):**
  1. ย้ายซอร์สโค้ดและโครงสร้างทั้งหมดของ `bpsr-build-planner` ขึ้นมาเป็น Root Application ของโปรเจกต์โดยตรง (รักษา UI, Zustand Store, i18n 3 ภาษา `ja`, `en_US`, `zh_Hans`, และระบบ `PlanManager` เดิมไว้ครบ 100%)
  2. สร้างโมดูลส่วนขยายแยกเฉพาะที่ `src/build-planner/simulator/` เพื่อทำหน้าที่จำลองการต่อสู้และเปรียบเทียบหลายบิลด์ โดยเชื่อมต่อกับ `useBuildPlannerStore` และ `loadPlans()` โดยตรง
* **ผลลัพธ์ (Consequences):**
  * ผู้ใช้สามารถจัดบิลด์ด้วย UI ที่สมบูรณ์แบบของ `bpsr-build-planner` ได้ทันที และกดปุ่ม **"⚡ Combat Simulator & Build Compare"** เพื่อจำลองโรเตชั่นการต่อสู้และเปรียบเทียบว่าบิลด์ไหนทำ DPS/HPS สูงที่สุดได้ในคลิกเดียว

---

## ADR-011: สถาปัตยกรรมการแยกสเตตัสตั้งต้นออกจากบัฟจับเวลา (`Clean Baseline Sanitizer` & `De-Duplication Registry`)

* **สถานะ (Status):** Accepted
* **วันที่ (Date):** 2026-10-22
* **บริบท (Context):**
  * จากการตรวจสอบโค้ดจริงของ `calculateRawStats.ts`, `deriveStats.ts`, `cookingBuff.ts`, และ `attrMaps.ts` พบว่า `bpsr-build-planner` มีการนำบัฟที่มีเงื่อนไขเวลาในระหว่างการต่อสู้ (เช่น `Life Wave` 5 วินาทีเมื่อเลือดขยับ, `Agile` ที่หลุดเมื่อโดนตี, `Stat Resonance` 10 วินาทีหลังร่ายสกิล) ไปบวกแช่ไว้ในสเตตัสหน้าแรกทันทีที่ผู้ใช้ติ๊กเปิด
  * นอกจากนี้ โหนด Talent และ Passive ของ Imagine บางตัว (เช่น `Igoreus` `3210180` หรือ Factor `3057040` ของ Beat Performer) ถูกดึงเฉพาะพารามิเตอร์ตัวแรก (`{p1}` หรือ `{p2}` ที่เป็นค่าคงที่) ไปบวกใน `calculateRawStats.ts` แล้ว แต่ทิ้งส่วนที่เป็นเงื่อนไขการต่อสู้ไว้
  * หาก Combat Simulator ดึงค่า `finalStats` หน้าแรกมาใช้ตรงๆ แล้วคำนวณบัฟในไฟต์ทับเข้าไปอีก จะเกิดปัญหา **การคำนวณซ้ำซ้อน (Double Counting)** และ **บัฟจับเวลากลายเป็นบัฟอมตะ 100% Uptime**
* **การตัดสินใจ (Decision):**
  1. สร้างฟังก์ชัน **`computeSanitizedBaselineBundle(state)`** ที่ล้างค่าสวิตช์บัฟจับเวลา (`lifeWaveEnabled: false`, `agileEnabled: false`, `dmgStackEnabled: false`, `statResonanceEnabled: false`, และจัดการ `inspirationEnabled` ไม่ให้ซ้อนทับเมื่อเล่น Verdant Oracle เอง) ก่อนคำนวณสเตตัสตั้งต้นสำหรับส่งเข้า Simulator
  2. แยกบัฟอาหาร (`cookingEnabled`), ยาน้ำเชื่อมธาตุ (`syrupEnabled`), น้ำมันทาอาวุธ (`starOilEnabled`), และบัฟกิจกรรม (`eventBuffEnabled`) ให้สามารถเปิด/ปิดและติดตามระยะเวลา (`remainingDurationSec` พร้อมโบนัส `+30%` จากโหนด `Chrono Elixir` `3002080`) ในลูปการต่อสู้จริง พร้อมนำ `cookingEliteDamagePercent` (`+5%`/`+10%`) ที่โค้ดเดิมไม่ได้คำนวณ มาคูณในสมการดาเมจจริง
  3. บังคับใช้ตาราง **`DE_DUPLICATION_REGISTRY`** ใน `combatSimulatorEngine.ts` โดยระบุรายการ `buffId` / `talentId` ที่ส่วนค่าคงที่ถูกบวกใน `calculateRawStats.ts` ไปแล้ว เพื่อให้ Simulator คำนวณเฉพาะส่วนที่เป็น Dynamic Stack / Proc / Active Window เท่านั้น
* **ผลลัพธ์ (Consequences):**
  * ตัวเลขสเตตัสก่อนเข้าไฟต์และระหว่างไฟต์มีความถูกต้องตามกลไกเกมจริง 100% ไม่มีการคิดซ้ำแม้แต่จุดเดียว และสามารถแสดงกราฟ/ตารางเปรียบเทียบผลของบัฟตามเวลาจริงได้อย่างแม่นยำ

---

## ADR-012: แก้ไขพาธในเอกสารให้ตรงกับโครงสร้างจริงของ `alalwww/bpsr-build-planner` และกำหนดแหล่งข้อมูลของ Simulator

* **สถานะ (Status):** Accepted (ผู้ใช้อนุมัติอย่างชัดเจนเมื่อ 2026-10-24)
* **วันที่ (Date):** 2026-10-24
* **บริบท (Context):**
  * หลังทำ Phase 4 เสร็จ (Root เป็น Vite + React + Zustand ของ `bpsr-build-planner` และ `npm run build` ผ่าน) พบว่า `SAD.md`, `SDD.md`, `ADR-010` และกฎใน `.agents/` อ้างอิงพาธที่ไม่มีอยู่จริงในโค้ด ได้แก่ `BuildPlannerPage.tsx`, `store/useBuildPlannerStore.ts`, `plans/planStorage.ts`, `PlanManager`/`loadPlans()`, `src/data/game-db/`, `src/data/schemas/`, และ `src/engine/build-comparator.ts`
  * โครงสร้างจริง: หน้าจอหลักคือ `src/build-planner/BuildPlanner.tsx`, Store คือ `store/useBuildStore.ts` (ประกอบจาก 7 Slice), ระบบบันทึกหลายบิลด์อยู่ที่ `plan/buildPlan.ts` (`loadBuildPlans()`, `persistBuildPlans()`, ชนิด `BuildPlanData`) และ `store/planSlice.ts` (state `buildPlans`), ฟังก์ชันรวมสเตตัสคือ `computeStatsBundle(state)` ใน `store/derivedSelectors.ts`, ข้อมูลเกมอยู่ที่ `src/data/*.json`, ค่าตัวคูณสกิล (`activeEffectParams`) อยู่ใน `src/locales/<locale>/game-data.json`
  * `buildPlans` ไม่เก็บ `cookingBuff` (บัฟอาหาร/โมดูลที่ติ๊กเปิด) ไว้ในแต่ละบิลด์ จึงต้องกำหนดเงื่อนไขกลางของการจำลองแยกต่างหาก
* **การตัดสินใจ (Decision):**
  1. แก้พาธใน `SAD.md` และ `SDD.md` ให้ตรงกับโครงสร้างจริงข้างต้น โดย **ไม่เปลี่ยนชื่อและเลย์เอาต์ของโฟลเดอร์ `src/build-planner/simulator/`** (`types.ts`, `baselineSanitizer.ts`, `combatMechanicsRegistry.ts`, `combatSimulatorEngine.ts`, `buildComparatorEngine.ts`, `CombatSimulatorDialog.tsx`)
  2. Multi-Build Comparator ดึงบิลด์จาก `buildPlans` ใน `useBuildStore` (หรือ `loadBuildPlans()` ใน `plan/buildPlan.ts`) แทน `PlanManager`/`loadPlans()` และคงกฎ Spec-Locked (เทียบได้เฉพาะ `professionKey` และ `professionTypeKey` เดียวกัน)
  3. แหล่งข้อมูลที่ยืนยันแล้วของ Simulator คือ `src/data/*.json` และ `src/locales/en_US/game-data.json` เท่านั้น ส่วนกฎ `zero_hallucination.md`, `agents.md`, `validate_game_db.ts` และ `bpsr-data-scraper/SKILL.md` ถูกแก้ให้ชี้ไปที่ `src/data/*.json` แทน `src/data/game-db/`
  4. ข้อมูลที่ไม่มีใน `src/data/*.json` / `game-data.json` (เช่น เวลาร่ายสกิล, ช่วงห่างของการโจมตีปกติ, สูตรเกราะมอนสเตอร์, จำนวนฮิตของแถว `per hit`) ต้องตั้งค่าเป็น `0` พร้อม `_todo_verify: true` และผลลัพธ์ต้องถูกติดป้าย `provisional` พร้อมรายการที่ยังไม่ยืนยัน ห้ามเดาตัวเลข
* **ผลลัพธ์ (Consequences):**
  * เอกสาร โค้ด และกฎของ AI Agent อ้างอิงพาธเดียวกันทั้งหมด การพัฒนา Phase 5–6 จึงอ้างอิงเอกสารได้ตรง
  * ตัวเลข DPS/HPS ที่ได้จะมีป้ายสถานะ `provisional` จนกว่าข้อมูลเวลาร่าย/ช่วงโจมตี/เกราะจะถูกยืนยันและเติมลงข้อมูลเกม
  * ไฟล์ทดสอบแบบ co-located (`simulator/*.test.ts`) ไม่ได้รวมอยู่ในมติฉบับนี้ ต้องขออนุญาตแยกต่างหากหากต้องการเพิ่ม
