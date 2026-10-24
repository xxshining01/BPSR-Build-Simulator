# Session State & Master Implementation Checklist
**Last Updated:** 2026-10-24
**Repository:** https://github.com/xxshining01/BPSR-Build-Simulator
**Working Environment:** Windows PC (Local Command Prompt / PowerShell & VS Code)
**Current Phase:** All Phases (Phase 1–6) Completed Successfully (100%)

---

## 🚨 กฎเหล็กสำหรับ AI Agent (CRITICAL OPERATING RULES)
1. **ห้ามใช้คำสั่ง Linux บนเครื่องผู้ใช้เด็ดขาด:** ผู้ใช้ทำงานบน **Windows PC** ห้ามส่งคำสั่ง Linux เช่น `bash - << 'EOF'`, `cp -r`, `rm -rf`, หรือพาธ `/tmp/` และ `/workspaces/` เด็ดขาด ให้ใช้คำสั่งสำหรับ Windows (`cmd` / `powershell`) หรือสคริปต์ไฟล์ `.py` เท่านั้น
2. **ห้ามใช้เครื่องหมาย Backticks 3 ตัวซ้อนกันในกล่องโค้ด:** เพื่อป้องกันระบบแชทตัดกล่องข้อความผิดพลาดจนโค้ดหลุดออกมานอกกล่อง
3. **ยึดโฟลเดอร์ของ Repo `BPSR-Build-Simulator` เพียงที่เดียว:** ห้ามสั่งให้ผู้ใช้สร้างโฟลเดอร์แยกชื่ออื่น (เช่น `bpsr-simulator`) นอกเหนือจากโฟลเดอร์ Repo หลักเด็ดขาด
4. **ยึดมั่นในสถาปัตยกรรม ADR-010, ADR-011, และ ADR-012:** ใช้ `alalwww/bpsr-build-planner` เป็น Base Application 100% แล้วต่อยอดระบบจำลองการต่อสู้ 5 นาทีไว้ใน `src/build-planner/simulator/` เท่านั้น

---

## ✅ งานที่ดำเนินการเสร็จสิ้นแล้วครบ 100% (Completed Milestones: Phase 1–6)

### Phase 1: สกัดข้อมูลดิบและกลไกการต่อสู้จากตัวเกมจริงครบ 100% (บันทึกใน `Docs/`)
- [x] สกิลทั้ง 9 อาชีพหลัก (`activeEffectParams` G0–G6, Lv.1–30), สกิลเปลี่ยนร่าง, และสกิลลูก (`<linktext>` 226 รายการ) ใน `Docs/COMBAT_SIMULATOR_MASTER_DATA_2.md` และ `Docs/RESOLVED_SUBSKILLS_AND_BUFFS.md`
- [x] โหนด Talent ทั้ง 9 อาชีพ, Battle Imagines ทั้ง 73 ตัว (T0–T5 ทั้ง Passive & Active), และโบนัสเซ็ตอุปกรณ์ (`Suit 100..103` 2 ชิ้น / 4 ชิ้น)
- [x] โมดูลทั้ง 21 ชนิด (Link Lv.1–6), Sigils/Enchants (Lv.1–3), Deep Slumber Psychoscope ทั้ง 8 สาย (`Link#1200..1219`), Bond Points (`3003610..3003730`), Factors 383 รายการ (G1–G10), อาวุธทอง Far Sea (`legendaryAffixGroups` EffectType=3), และอาหาร/ยา ใน `Docs/COMPLETE_GEAR_MODULES_PHANTOM_CONSUMABLES.md`, `Docs/FINAL_VERIFIED_MISSING_PIECES.md`, และ `Docs/FINAL_1_PERCENT_EXTRACTION.md`

### Phase 2: ตรวจสอบสมการสเตตัสและออกแบบระบบป้องกันการคำนวณซ้ำ (`Docs/RAW_AND_DERIVED_STATS_AUDIT.md`)
- [x] ผ่าโค้ด `calculateRawStats.ts`, `deriveStats.ts`, `cookingBuff.ts`, และ `attrMaps.ts`
- [x] ออกแบบฟังก์ชัน `createSanitizedCookingBuff` เพื่อแยกบัฟจับเวลาในไฟต์ (`lifeWaveEnabled`, `agileEnabled`, `dmgStackEnabled`, `statResonanceEnabled`) ออกจากสเตตัสเริ่มต้น และสร้างตาราง `DE_DUPLICATION_REGISTRY`

### Phase 3: อัปเดตเอกสารสถาปัตยกรรมหลัก (`Docs/ADR.md`, `Docs/SAD.md`, `Docs/SDD.md`)
- [x] บันทึก `ADR-010` และ `ADR-011` ใน `Docs/ADR.md` พร้อมโครงสร้างระบบใน `Docs/SAD.md` และสมการ 6 Multiplier Buckets ใน `Docs/SDD.md`

### Phase 4: แทนที่โค้ด Next.js ตัวเก่าใน Repo `BPSR-Build-Simulator` ด้วย `alalwww/bpsr-build-planner` (บน Windows PC)
- [x] **4.1** ล้างโค้ด Next.js ตัวเก่า และยกเลิกการติดตาม `.next/` ใน Git tracking พร้อมเพิ่ม `.next/` ลงใน `.gitignore`
- [x] **4.2** นำโค้ดฐานจาก `alalwww/bpsr-build-planner` (Vite + React 19 + Zustand 5) มาจัดวางใน root ของ `BPSR-Build-Simulator`
- [x] **4.3** รัน `npm install` และ `npm run build` ผ่าน 100% โดยไม่มีข้อผิดพลาด
- [x] **4.4** บันทึกการอนุมัติสถาปัตยกรรม `ADR-012` ปรับแก้ชื่อไฟล์และพาธของเอกสารสถาปัตยกรรมให้ตรงกับโค้ดของจริง (`BuildPlanner.tsx`, `useBuildStore.ts`, `planSlice.ts`, `src/data/*.json`)

### Phase 5: พัฒนาโมดูลจำลองการต่อสู้ 5 นาที (`src/build-planner/simulator/`) ตาม `SAD.md` และ `SDD.md`
- [x] **5.1 สร้าง `src/build-planner/simulator/types.ts`**:
  - นิยามโครงสร้าง `SimulationConfig`, `SkillSimRow`, `FormulaTrace`, `BuffUptimeRow`, `CombatLogEntry`, `SimulationResult`, และ `BuildComparisonReport`
- [x] **5.2 สร้าง `src/build-planner/simulator/baselineSanitizer.ts`**:
  - เขียนฟังก์ชัน `computeSanitizedBaselineBundle` ที่ล้างบัฟจับเวลา (`lifeWaveEnabled`, `agileEnabled`, `dmgStackEnabled`, `statResonanceEnabled`) ออกจากสเตตัสเริ่มต้น และบังคับใช้ตาราง `DE_DUPLICATION_REGISTRY`
- [x] **5.3 สร้าง `src/build-planner/simulator/combatMechanicsRegistry.ts`**:
  - โหลดและแคช `src/locales/en_US/game-data.json`, แปลงพารามิเตอร์ `activeEffectParams` (CD, Cast time, Duration, Multipliers, Flat), จัดการโมดูล Link 5/6 (`Agility Boost`, `Intellect Boost`, `Special Attack`, `Elite Strike`, `Healing Boost`, `Healing Enhance`), บัฟแบบ dynamic (`DMG Stack`, `Agile`, `Life Wave`) และระบุ `_todo_verify: true` ตามกฎ Zero Hallucination
- [x] **5.4 สร้าง `src/build-planner/simulator/combatSimulatorEngine.ts`**:
  - พัฒนาลูปจำลองการต่อสู้ 5 นาที (300 วินาที / 6,000 ทิกส์ ที่ 50ms) แบบ Time-Stepped คำนวณ Effective DPS, Peak Burst DPS (10s sliding window), Baseline DPS, Effective HPS, สัดส่วนการมีส่วนร่วมของบัฟ (%) และบันทึก `FormulaTrace` 6 Multiplier Buckets
- [x] **5.5 สร้าง `src/build-planner/simulator/buildComparatorEngine.ts`**:
  - รันเปรียบเทียบบิลด์จาก `buildPlans` (จาก `store/planSlice.ts` และ `plan/buildPlan.ts`) ร่วมกับบิลด์ปัจจุบันแบบ Spec-Locked (สายอาชีพตรงกัน) พร้อมจัดอันดับและวิเคราะห์เหตุผลการชนะ

### Phase 6: พัฒนาหน้าต่าง UI Dashboard (`src/build-planner/simulator/CombatSimulatorDialog.tsx`)
- [x] **6.1 สร้าง `src/build-planner/simulator/simulator.css` และ `CombatSimulatorDialog.tsx`**:
  - ครอบด้วย `DraggableDialog` รองรับการลากและขยายหน้าต่าง (Resizable)
  - แท็บที่ 1 `5-Min Simulation`: Metric Cards (Effective DPS, Peak Burst, Baseline DPS, HPS, Avg Buff %), Zero-Hallucination Verification Banner, Skill Rotation Breakdown Table พร้อมปุ่ม Formula Audit เปิดดู Multiplier Buckets แบบอินเตอร์แอคทีฟ, Buff Uptime Table, และ Combat Log History
  - แท็บที่ 2 `Multi-Build Comparator`: ตารางจัดอันดับบิลด์เปรียบเทียบในสายอาชีพเดียวกัน (Spec-Locked), Winner Analysis ("ทำไมบิลด์นี้ถึงชนะ"), และรายชื่อบิลด์ที่ถูกคัดออก
  - แท็บที่ 3 `Simulator Settings`: ปรับแต่ง Duration, Tick rate, Target Mitigation, Hit rate, Seed
- [x] **6.2 เชื่อมต่อปุ่มเปิดหน้าต่างเข้ากับ `src/build-planner/BuildPlanner.tsx`**:
  - เพิ่มปุ่ม `⚡ Combat Sim` ในแถบนำทางส่วนหัว (`build-planner__nav-right`) และแสดงไดอะล็อกเมื่อกด
- [x] **6.3 ตรวจสอบและคอมไพล์ผ่าน 100%**:
  - รัน `npm run build` ผ่าน 0 Error (`tsc -b && vite build`)
  - รัน `npx tsx .agents/tools/validate_game_db.ts` โครงสร้าง Zod Schema ผ่าน 100%