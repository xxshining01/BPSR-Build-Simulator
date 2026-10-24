# เอกสารสถาปัตยกรรมซอฟต์แวร์ (Software Architecture Document - SAD)
**โครงการ:** Blue Protocol: Star Resonance (BPSR) Build Planner & Dynamic Combat Simulator
**เวอร์ชัน:** 3.1.0 (Full Integration with `alalwww/bpsr-build-planner` + Time-Stepped Combat Simulator, พาธแก้ไขตาม ADR-012)
**อัปเดตล่าสุด:** 2026-10-24

---

## 1. ภาพรวมสถาปัตยกรรมระบบ (System Architecture Overview)

ระบบถูกออกแบบโดยใช้ **`alalwww/bpsr-build-planner`** เป็นแกนหลัก (Core Base Application) สำหรับการจัดบิลด์ตัวละครและคำนวณสเตตัสพื้นฐานทั้งหมด และเชื่อมต่อเข้ากับ **Dynamic Combat Simulator & Multi-Build Comparator Engine** (`src/build-planner/simulator/`) โดยมีลำดับการไหลของข้อมูล (Data Pipeline) 4 ชั้นดังนี้:

```text
+-----------------------------------------------------------------------------------+
| Layer 1: Game Data & Localization (src/data/ & src/locales/)                      |
| - Equipment (equipment.json), Refine (refine.json), Suits (suits.json)            |
| - Skills (skills.json), Talents (talent-tree.json), Imagines (battle-imagines...) |
| - Modules (modules.json), Enchants/Sigils (enchants.json)                         |
| - Psychoscope (season-talents.json) & Factors (phantom-factors.json)              |
| - Full Text & Parameter Tables (src/locales/{ja,en_US,zh_Hans}/game-data.json)    |
+-----------------------------------------------------------------------------------+
                                         |
                                         v
+-----------------------------------------------------------------------------------+
| Layer 2: Base Build Planner State & Stat Engine (src/build-planner/)              |
| - Zustand Store (store/useBuildStore.ts + 7 Slices)                               |
| - Saved Builds (plan/buildPlan.ts: loadBuildPlans / persistBuildPlans -> localStorage;|
|   state buildPlans ใน store/planSlice.ts)                                          |
| - Stats Bundle (store/derivedSelectors.ts: computeStatsBundle(state))             |
| - Base Stat Calculator (stats/calculateRawStats.ts & stats/deriveStats.ts)        |
| - Buff & Consumable Config (stats/cookingBuff.ts & stats/attrMaps.ts)             |
+-----------------------------------------------------------------------------------+
                                         |
                                         v
+-----------------------------------------------------------------------------------+
| Layer 3: Baseline Sanitizer & Combat Simulator Engine (src/build-planner/simulator/)|
| 1. baselineSanitizer.ts: ล้างบัฟจับเวลาออกจากสเตตัสเริ่มต้น + ป้องกันการคิดซ้ำ 100%   |
| 2. combatMechanicsRegistry.ts: ฐานข้อมูลกฎการต่อสู้ของ 9 อาชีพ, สกิลลูก, โหนด Proc, |
|    เซ็ตอุปกรณ์ 2/4 ชิ้น, อาวุธ Far Sea (effectType=3), Imagine Active/Passive,      |
|    โมดูล (DMG Stack, Agile, Life Wave, Elite Strike), และ Psychoscope            |
| 3. combatSimulatorEngine.ts: จำลองการต่อสู้แบบ Discrete Time-Stepped (dt=50ms)    |
|    จัดการ Cooldown, Charges, Class Resources, Buff Windows, Procs, และบันทึก       |
|    Formula Breakdown รายสกิลเพื่อใช้ตรวจสอบย้อนกลับได้ทุกบรรทัด                    |
| 4. buildComparatorEngine.ts: รันจำลองเทียบหลายบิลด์จาก buildPlans (planSlice)     |
|    เพื่อจัดอันดับและชี้วัดว่า Comp Build ไหนทำ DPS / HPS / Burst สูงที่สุด             |
+-----------------------------------------------------------------------------------+
                                         |
                                         v
+-----------------------------------------------------------------------------------+
| Layer 4: Interactive UI & Inspector (src/build-planner/)                          |
| - หน้าจัดบิลด์หลักของ bpsr-build-planner (BuildPlanner.tsx)                        |
| - ปุ่มเปิดหน้าต่าง simulator/CombatSimulatorDialog.tsx บน Top Bar                  |
| - แท็บที่ 1: ผลจำลองการต่อสู้ของบิลด์ปัจจุบัน (Skill Breakdown, Buff Uptime,          |
|   Resource Timeline, และหน้าต่างคลิกดูสมการคำนวณจริง Formula Audit Inspector)      |
| - แท็บที่ 2: ตารางเปรียบเทียบหลายบิลด์ (Multi-Build Comparison Matrix & Winner)     |
+-----------------------------------------------------------------------------------+
```

---

## 2. โครงสร้างไดเรกทอรีของโปรเจกต์ (Directory Structure)

```text
D:\BPSR-Build-Simulator\  (Root ของ Repo; แสดงด้วยเครื่องหมาย / ด้านล่างเพื่อความอ่านง่าย)
├── Docs/
│   ├── ADR.md                                      # บันทึกการตัดสินใจทางสถาปัตยกรรม (ADR-001 ถึง ADR-012)
│   ├── SAD.md                                      # เอกสารสถาปัตยกรรมซอฟต์แวร์ฉบับนี้
│   ├── SDD.md                                      # เอกสารการออกแบบสมการและกฎการคำนวณอย่างละเอียด
│   ├── COMBAT_SIMULATOR_MASTER_DATA_2.md           # ข้อมูลสกิล, โหนด Talent, Imagines, Suits ที่สกัดจากเกมจริง
│   ├── RESOLVED_SUBSKILLS_AND_BUFFS.md             # ข้อมูลสกิลลูก (<linktext>) และคำอธิบายบัฟ (attrDescs)
│   ├── COMPLETE_GEAR_MODULES_PHANTOM_CONSUMABLES.md# ข้อมูลอาวุธ, โมดูล Lv.1-6, Psychoscope, อาหารและยา
│   ├── FINAL_VERIFIED_MISSING_PIECES.md            # ข้อมูล Psychoscope Links 1200-1219, Bond Points, Factors, Sigils
│   ├── FINAL_1_PERCENT_EXTRACTION.md               # ข้อมูลเอฟเฟกต์อาวุธ Far Sea (EffectType=3) และออปชันม่วง
│   └── RAW_AND_DERIVED_STATS_AUDIT.md              # ผลตรวจสอบโค้ด calculateRawStats.ts และ deriveStats.ts
├── src/
│   ├── data/                                       # ไฟล์ฐานข้อมูล ZTable JSON ของตัวเกม (equipment, skills, classes, talent-tree, battle-imagines, modules, suits, enchants, season-talents, phantom-factors ฯลฯ)
│   ├── locales/                                    # ไฟล์ภาษาและพารามิเตอร์สกิล (en_US, ja_JP, ko_KR, zh_CN, zh_TW) ไฟล์ละ bpsr-bp-ui.json และ game-data.json
│   └── build-planner/                              # ซอร์สโค้ดหลักของแอปพลิเคชัน
│       ├── BuildPlanner.tsx                        # หน้าจอหลักของ Build Planner + ปุ่มเปิด Combat Simulator
│       ├── types.ts                                # โครงสร้างข้อมูลกลางของระบบ
│       ├── profession.ts                           # นิยาม 9 อาชีพหลักและค่าสัมประสิทธิ์ประจำอาชีพ
│       ├── store/                                  # Zustand Store (useBuildStore.ts) และ Slices ทั้ง 7 ส่วน + derivedSelectors.ts
│       ├── stats/                                  # ระบบคำนวณสเตตัสพื้นฐาน (calculateRawStats, deriveStats, attrMaps, cookingBuff)
│       ├── equipment/                              # ระบบจัดการอุปกรณ์ 11 ชิ้นและเซ็ตอุปกรณ์
│       ├── module/                                 # ระบบจัดการโมดูลและ Link Effects
│       ├── phantom/                                # ระบบจัดการ Deep Slumber Psychoscope และ Factors
│       ├── plan/                                   # ระบบบันทึกและโหลดหลายบิลด์ (buildPlan.ts, planCode.ts, planDefaults.ts)
│       ├── skill/ talent/ character/               # แผงสกิล, ผังพรสวรรค์, แผงตัวละคร
│       ├── components/                             # คอมโพเนนต์ UI ทั้งหมดของระบบ
│       └── simulator/                              # [NEW] โมดูลจำลองการต่อสู้และเปรียบเทียบหลายบิลด์ (เลย์เอาต์คงเดิมตาม ADR-010)
│           ├── types.ts                            # โครงสร้างข้อมูลของ Simulator, Combat Log, Formula Trace, และผลเปรียบเทียบ
│           ├── baselineSanitizer.ts                # ตัวแยกสเตตัสตั้งต้นออกจากบัฟจับเวลาและป้องกันการคิดซ้ำ
│           ├── combatMechanicsRegistry.ts          # ฐานข้อมูลตัวคูณสกิล, สกิลลูก, โหนด Talent, Imagine, Suit, Far Sea, Factor
│           ├── combatSimulatorEngine.ts            # สมองกลจำลองการต่อสู้แบบ Time-Stepped (dt=50ms)
│           ├── buildComparatorEngine.ts            # ตัวรันเปรียบเทียบหลายบิลด์จาก buildPlans (Spec-Locked) พร้อมสรุปจุดเด่น/จุดด้อย
│           └── CombatSimulatorDialog.tsx           # หน้าต่าง UI แสดงผล DPS/HPS, Formula Inspector, และตารางเปรียบเทียบบิลด์
└── package.json
```

---

## 3. การรับประกันความถูกต้องและการไม่คำนวณซ้ำ (Data Integrity & Non-Duplication Guarantee)

1. **แยกสเตตัสก่อนเริ่มไฟต์ออกจากบัฟในไฟต์ (`baselineSanitizer.ts`):**
   * ทุกครั้งที่รัน Simulator ระบบจะสร้าง `SanitizedCookingBuff` ที่ปิดสวิตช์บัฟจับเวลาชั่วคราว (`lifeWaveEnabled: false`, `agileEnabled: false`, `dmgStackEnabled: false`, `statResonanceEnabled: false`) ก่อนเรียก `computeStatsBundle()` เพื่อให้ได้ **Pure Pre-Combat Stats** ที่แท้จริง
2. **การจำลองบัฟตามเวลาและเงื่อนไขจริง (`Dynamic Buff & Proc State Machine`):**
   * บัฟที่มีระยะเวลาจำกัด (เช่น `Muku Chief` 20s, `Focus` 12–15s, `Volt Surge` 12s, `Permafrost` 10s, `Galeform` 15s, `Heroic Melody`, `Life Wave` 5s, `DMG Stack` 8s) จะถูกเปิด/ปิดตามวินาทีจริงในลูป `combatSimulatorEngine.ts` และคำนวณ `DerivedStats` ณ วินาทีนั้นใหม่ทุกครั้งที่มีการเปลี่ยนแปลงบัฟ
3. **ความโปร่งใสที่ตรวจสอบได้ทุกฮิต (`Formula Traceability`):**
   * ในผลลัพธ์ของแต่ละสกิล จะแนบอ็อบเจกต์ `formulaBreakdown` ที่แสดงตัวเลขทุกตัวในสมการ (ตั้งแต่ `Active ATK`, `Skill Multiplier %`, `Flat Bonus`, `Defense Mitigation`, `Additive DMG Bonus Bucket`, `Elemental & Mastery Mult`, `Illusion-Breaking Mult`, `Crit EV`, ไปจนถึง `Lucky Strike EV`) เพื่อให้ผู้ใช้คลิกตรวจสอบเทียบกับการคิดมือได้ 100%