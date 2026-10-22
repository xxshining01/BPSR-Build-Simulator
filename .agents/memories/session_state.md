# Session State & Master Implementation Checklist
**Last Updated:** 2026-10-22
**Current Phase:** Phase 4 — Merging `alalwww/bpsr-build-planner` into Root Project & Building `src/build-planner/simulator/`

---
## ✅ งานที่ดำเนินการเสร็จสิ้นแล้ว (Completed Milestones)
- [x] **Phase 1: Full Game Data & Text Extraction (100% Verified)**
  - สกัดข้อมูลสกิล 9 อาชีพหลัก (`activeEffectParams`), สกิลเปลี่ยนร่าง, และสกิลลูก (`<linktext>` 226 รายการ) ไว้ใน `Docs/COMBAT_SIMULATOR_MASTER_DATA_2.md` และ `Docs/RESOLVED_SUBSKILLS_AND_BUFFS.md`
  - สกัดข้อมูลโหนด Talent ทั้ง 9 อาชีพ, Battle Imagines 73 ตัว (T0–T5 ทั้ง Passive & Active), และโบนัสเซ็ตอุปกรณ์ (`Suit 100..103` 2 ชิ้น / 4 ชิ้น)
  - สกัดข้อมูล Modules 21 ชนิด (Link Lv.1–6), Sigils/Enchants (Lv.1–3), Deep Slumber Psychoscope 8 สาย (`Link#1200..1219`), Bond Points (`3003610..3003730`), Factors 383 รายการ (G1–G10), อาวุธทอง Far Sea (`legendaryAffixGroups` EffectType=3), และอาหาร/ยา ไว้ใน `Docs/COMPLETE_GEAR_MODULES_PHANTOM_CONSUMABLES.md`, `Docs/FINAL_VERIFIED_MISSING_PIECES.md`, และ `Docs/FINAL_1_PERCENT_EXTRACTION.md`
- [x] **Phase 2: Stat Calculation Audit & De-Duplication Design**
  - ตรวจสอบ `calculateRawStats.ts`, `deriveStats.ts`, `cookingBuff.ts`, และ `attrMaps.ts` ใน `Docs/RAW_AND_DERIVED_STATS_AUDIT.md`
  - กำหนดสเปก `createSanitizedCookingBuff` เพื่อแยกบัฟจับเวลาในไฟต์ (`lifeWaveEnabled`, `agileEnabled`, `dmgStackEnabled`, `statResonanceEnabled`) ออกจากสเตตัสเริ่มต้น และสร้างตาราง `DE_DUPLICATION_REGISTRY` ป้องกันการคิดซ้ำ 100%
- [x] **Phase 3: Architecture & Design Documentation Update (`ADR.md`, `SAD.md`, `SDD.md`)**
  - บันทึก `ADR-010` และ `ADR-011` ใน `Docs/ADR.md`
  - อัปเดตโครงสร้างระบบใน `Docs/SAD.md` และสมการการคำนวณ 6 Multiplier Buckets ใน `Docs/SDD.md` เรียบร้อยแล้ว

---
## 📋 เช็คลิสต์สิ่งที่ต้องทำต่อไปอย่างละเอียด (Next Steps Master Checklist)

### 🟣 Phase 4: ควบรวม `alalwww/bpsr-build-planner` ขึ้นมาเป็น Root Project
- [ ] **4.1** โคลนและย้ายซอร์สโค้ดทั้งหมดของ `alalwww/bpsr-build-planner` (`src/`, `public/`, `index.html`, `vite.config.ts`, `tsconfig.json`, `package.json`) ขึ้นมาไว้ที่ Root ของ `/workspaces/BPSR-Build-Simulator` โดยรักษาโฟลเดอร์ `Docs/` และ `.agents/` ไว้ครบถ้วน
- [ ] **4.2** ติดตั้ง Dependencies (`npm install`) และทดสอบ Build เบื้องต้นเพื่อให้มั่นใจว่า Base Application (`bpsr-build-planner`) ทำงานได้สมบูรณ์ 100%

### 🟠 Phase 5: พัฒนาโมดูลจำลองการต่อสู้และเปรียบเทียบบิลด์ (`src/build-planner/simulator/`)
- [ ] **5.1 สร้าง `src/build-planner/simulator/types.ts`**:
  - นิยามโครงสร้าง `SimulationConfig`, `ActiveBuffInstance`, `SkillExecutionBreakdown`, `FormulaAuditTrace`, `CombatLogEvent`, `SimulationResult`, และ `BuildComparisonReport`
- [ ] **5.2 สร้าง `src/build-planner/simulator/baselineSanitizer.ts`**:
  - เขียนฟังก์ชัน `computeSanitizedBaselineBundle(state, includeConsumables)` ที่ล้างบัฟจับเวลา (`lifeWave`, `agile`, `dmgStack`, `statResonance`) ออกจากสเตตัสตั้งต้น และบังคับใช้ตาราง `DE_DUPLICATION_REGISTRY` ตาม `SDD.md`
- [ ] **5.3 สร้าง `src/build-planner/simulator/combatMechanicsRegistry.ts`**:
  - รวบรวมตารางตัวคูณสกิลของ 9 อาชีพ (`tierMultipliers` G0–G6, `levelFlatBonuses` Lv.1–30), กฎการเปลี่ยนร่างสกิล (`Type 6` & Conditional Evolution), สกิลลูกและ Proc จากโหนด Talent, เอฟเฟกต์กดใช้และ Passive Proc ของ Battle Imagines ทั้ง 73 ตัว, โบนัสเซ็ตอุปกรณ์ 2/4 ชิ้น (`Suit 100..103`), เอฟเฟกต์อาวุธทอง Far Sea (`effectType=3`), โมดูลต่อสู้ (`DMG Stack`, `Agile`, `Life Wave`, `Elite Strike`), อาหาร (`Elite DMG +10%`), และท่าของ Deep Slumber Psychoscope + Factors (`Illusion Energy` & `Illusion-Breaking DMG`)
- [ ] **5.4 สร้าง `src/build-planner/simulator/combatSimulatorEngine.ts`**:
  - พัฒนาลูปจำลองการต่อสู้แบบ Time-Stepped (`dt = 50ms`, ระยะเวลาเริ่มต้น 180s / 300s ปรับได้)
  - จำลองการหมุนสกิลตามลำดับความสำคัญของแต่ละสายอาชีพ (Priority Rotation), การใช้และฟื้นฟู Class Resource, การลด Cooldown แบบไดนามิก, การเปิด/ปิดหน้าต่างบัฟตามวินาทีจริง, และการบันทึก `FormulaAuditTrace` รายสกิลเพื่อใช้ตรวจสอบย้อนกลับ
- [ ] **5.5 สร้าง `src/build-planner/simulator/buildComparatorEngine.ts`**:
  - พัฒนาระบบดึงบิลด์ทั้งหมดจาก `PlanManager` (`loadPlans()`) มารันเทียบกับบิลด์ปัจจุบันภายใต้เงื่อนไขเดียวกัน เพื่อจัดอันดับว่า Comp Build ไหนทำ Effective DPS / HPS / Burst สูงที่สุด พร้อมวิเคราะห์สาเหตุที่ชนะ
- [ ] **5.6 รันชุดทดสอบ Verification Test**:
  - ตรวจสอบผลลัพธ์ของ Simulator เทียบกับการคำนวณมือ (Hand-Calculated Benchmark) เพื่อยืนยันว่าไม่มีการคิดซ้ำและตัวเลขตรงตามสมการใน `SDD.md` 100%

### 🔴 Phase 6: พัฒนาหน้าต่าง UI Dashboard (`src/build-planner/simulator/CombatSimulatorDialog.tsx`)
- [ ] **6.1 สร้าง `CombatSimulatorDialog.tsx`**:
  - แท็บที่ 1 (**Combat Simulation & Formula Inspector**): แสดงการ์ดสรุป Effective DPS, Total Damage, HPS, Avg Crit/Luck Rate, ตารางแยกสัดส่วนดาเมจรายสกิล (Cast Count, Hit Count, Total DMG, DPS, Share %), แถบแสดง Buff Uptime %, และหน้าต่างคลิกดูสมการที่มาของตัวเลขรายสกิล (`Formula Breakdown Inspector`)
  - แท็บที่ 2 (**Multi-Build Comparator**): ตารางเปรียบเทียบหลายบิลด์ที่บันทึกไว้ใน `PlanManager` ชี้วัดบิลด์อันดับ 1 (Best Comp Build) พร้อมเปรียบเทียบความต่างของสเตตัสและดาเมจรายสกิล
- [ ] **6.2 เชื่อมต่อปุ่มเปิดหน้าต่างใน `src/build-planner/BuildPlannerPage.tsx`**:
  - เพิ่มปุ่ม **"⚡ Combat Simulator & Build Compare"** บนแถบเครื่องมือด้านบนของหน้าเว็บ และทดสอบการทำงานจริงบนเบราว์เซอร์