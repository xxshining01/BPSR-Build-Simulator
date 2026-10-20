# Software Design Document (SDD)

**Project:** Blue Protocol: Star Resonance — Character Build & Combat Simulator  
**Version:** 2.0.0 (Synchronized with Implementation)  
**Last Updated:** 2026-10-20

---

## 1. การออกแบบระบบฐานข้อมูลและตัวแปลงรหัส (`src/engine/game-db-loader.ts`)

### 1.1 การจับคู่รหัสสเตตัส (`ZTABLE_ATTR_TO_KEY`)

ฐานข้อมูลเกม (`src/data/game-db/*.json`) ใช้รหัสตัวเลข `attrId` ตามมาตรฐาน ZTable (เช่น `11012` = Strength, `11112` = Crit, `11722` = Attack SPD %) โมดูล `game-db-loader.ts` ทำหน้าที่แปลงรหัสเหล่านี้ให้เป็น `AttributeKey` ตามที่นิยามไว้ใน `src/data/schemas/common.schema.ts` พร้อมตัวหารสเกล (`scaleDivisor: 100` สำหรับค่าเปอร์เซ็นต์ที่เก็บในรูปหน่วยเต็มร้อย)

### 1.2 การแก้ไขผังสกิลประจำคลาส 7 ช่อง (`resolveClassSkillConfiguration`)

- ทุกอาชีพใน `classes.json` มีสกิลล็อกปุ่มตายตัว 3 ช่อง ได้แก่:
  - **ช่องที่ 1 (คลิกซ้าย / LMB):** `normalAttackSkill[0]` (Basic Attack)
  - **ช่องที่ 2 (กดเลข 1):** `specialSkill[0]` (Special Skill)
  - **ช่องที่ 3 (กดปุ่ม R):** `ultimateSkill[0]` (Ultimate Skill)
- และมีคลังสกิลเลือกใส่เอง (`normalSkill`) สำหรับใส่ลงใน **ช่องที่ 4, 5, 6, 7 (กดเลข 2, 3, 4, 5)**
- เมื่อผู้เล่นอัปโหนดในผัง Talent Tree ที่มี Effect ประเภท `Type 6` (`[6, fromSkillId, toSkillId]`) ฟังก์ชัน `resolveClassSkillConfiguration` จะสลับรหัสสกิลในช่องที่ 1, 2 หรือ 3 ให้เป็นสกิลขั้นพัฒนาของสายนั้นโดยอัตโนมัติ (เช่น เปลี่ยน _Storm Arrow_ เป็น _Double Arrow_ เมื่อเปิดสาย _Falconry Spec_)
- ทั้ง 7 ช่องสกิลอนุญาตให้ผู้เล่นปรับระดับ **Skill Level (1–30)** และ **Skill Tier (0–6)** ได้ทุกช่อง

### 1.3 การถอดรหัส Battle Imagines (`resolveBattleImagineDetails`)

อ่านข้อมูลจาก `battle-imagines.json` ร่วมกับ `locales/en_US/game-data.json` เพื่อส่งออกข้อมูลครบทั้ง 2 ส่วนตามระดับ **Tier 0 ถึง Tier 5** ที่ผู้เล่นเลือก:

1. **Passive Effect (ผลลัพธ์จากการสวมใส่เฉยๆ โดยไม่ต้องกดใช้):**
   - `passiveStats`: ดึงจากอาร์เรย์ `passiveEffects` (`[attrId, valT0, valT1, valT2, valT3, valT4, valT5]`) แสดงค่าสเตตัสที่ได้ใน Tier ปัจจุบัน พร้อมตารางเทียบค่าตั้งแต่ T0 ถึง T5
   - `passiveBuffs`: ดึงจากอาร์เรย์ `bufPassiveEffects` แทนค่าพารามิเตอร์ตาม Tier ลงในคำอธิบายบัฟ
2. **Active Skill (ผลลัพธ์เมื่อกดเรียกใช้งาน):** ดึงชื่อและคำอธิบายสกิลจากการเชื่อมโยง `skillId`

### 1.4 การสร้างข้อมูลแผนภาพ Talent Tree Map (`buildClassTalentTreeDiagram`)

แบ่งผังโหนด Talent ของแต่ละอาชีพออกเป็น 2 แท็บตามกติกาจริงของเกม:

- **Tab 1 (`basicTreeNodes`):** โหนดพื้นฐาน 30 โหนด (ใช้แต้มอัปโหนดละ 1 แต้ม รวม 30 แต้ม) จัดเรียงเป็นลำดับขั้น (Row 0 ถึง Row 5 แถวละ 5 โหนด) พร้อมรายการโหนดก่อนหน้า (`prerequisiteNodeIds`) เพื่อบังคับให้อัปเรียงจากต้นสายไปปลายสาย
- **Tab 2 (`specChoices`):** เมื่ออัป Basic ครบ 30/30 แต้ม แต้มที่ 31 จะใช้เลือกโหนดเปิดสายการเล่นหลัก (`isKeystoneSpec: true` จาก `CLASS_SPEC_KEYSTONE_NODES`) ระหว่าง 2 สายของอาชีพ เมื่อเลือกแล้วจะปลดล็อกโหนดในสายนั้นให้อัปต่อได้อีก 69 แต้ม (รวมใช้แต้มใน Tab 2 ได้สูงสุด 70 แต้ม และรวมทั้ง 2 แท็บเป็น 30 + 70 = 100 แต้ม)

---

## 2. การออกแบบระบบคำนวณสเตตัสตัวละครที่ Lv.60 (`src/engine/stat-aggregator.ts`)

ฟังก์ชันหลัก `calculateCharacterStats(build, stateMode)` คำนวณค่าสถานะที่ **Character Level 60** ตามลำดับขั้นในเอกสาร `STATUS_CALCULATION.md`:

### 2.1 ลำดับการรวบรวมแต้มดิบ (Raw Stat Aggregation)

1. **สเตตัสตามเลเวลตัวละคร (Lv.1–60):** รวมค่า `levelUpAttr` จาก `player-levels.json`
2. **อุปกรณ์ทั้ง 11 ชิ้น (`equipments`):**
   - ดึง `baseStats` ของอุปกรณ์แต่ละชิ้นจาก `equipment.json`
   - **กรณีอุปกรณ์เซ็ต (Raid Suit GS 270) หรืออาวุธ Far Sea (GS 280):** ดึงค่าสเตตัสทะลุหลอดที่ล็อกตามสายอาชีพ (`fixedEvolutionStats[stageId]`)
   - **กรณีอุปกรณ์ฟาร์มมาตรฐาน:** คำนวณสเตตัสรองจากค่า Perfection (0–100%) ด้วยสมการ:
     $$\text{SubStatValue} = \text{reforgeEvoMin} + (\text{reforgeEvoMax} - \text{reforgeEvoMin}) \times \frac{\text{Perfection}}{100}$$
   - **ออปชันม่วง (`selectedPurpleStat`):** ดึงค่าจาก `legendaryAffix` ของอุปกรณ์ชิ้นนั้น
   - **ระบบตีบวก (`refineLevel` 0–30):** รวมโบนัสสะสมจาก `refine.json` ตามช่องสวมใส่และอาชีพ
   - **ระบบฝัง Sigil (`sigilId` & `sigilEmblemLevel` 1–3):** ดึงค่าสเตตัสจาก `enchants.json` ตามระดับ Lv.1 (Base), Lv.2 (`refined` / 精), หรือ Lv.3 (`perfect` / 極)
   - **โบนัสสวมใส่ครบ 6 ชิ้น:** บวก `Max HP +2` ตามกฎเกมจริง
3. **Battle Imagines (2 ช่อง):** นำค่า `passiveEffects` ตามระดับ Tier (0–5) ของ Imagine ทั้ง 2 ช่องมาบวกเข้าสเตตัสตัวละครทันที
4. **โหนด Talent Tree (`allocatedTalents`):** รวมโบนัสสเตตัสจากทุกโหนดที่ผู้เล่นอัปไว้
5. **ระบบ Modules (5 ช่อง & Link Lv.1–6):** รวมแต้มของแต่ละ `effectId` จากโมดูลทั้ง 5 ชิ้น แล้วเทียบกับเกณฑ์ `[1, 4, 8, 12, 16, 20]` เพื่อปลดล็อกโบนัสสเตตัสและบัฟระดับ Link Lv.1 ถึง Lv.6
6. **Deep Slumber Psychoscope & Factor G10:** รวมโบนัสจากโหนดบัฟ (`ordinaryEffects`), Factor G10 ที่ติดตั้งในช่อง Socket (`phantom-factors.json`), และโบนัสตามระดับแต้ม Bond Points (3–55)

### 2.2 การแปลงค่า Primary Stats และสมการ Diminishing Returns (Season 3 Constants)

- **การปัดเศษแยกส่วน (`convertBySeparatelyTruncatedRates`):**
  $$\text{ConvertedATK} = \lfloor \text{MainStat} \times \text{BaseRate} \rfloor + \lfloor \text{MainStat} \times \text{R1BonusRate} \rfloor$$
- **การแปลงสเตตัสพื้นฐานประจำคลาส:**
  - $\text{Max HP} = \text{round}(\text{BaseHP} + \text{Endurance} \times \text{hpPerEndurance})$
  - $\text{Armor} = \lfloor \text{BaseArmor} + \text{Strength} \times 0.2 \rfloor$
  - $\text{Resistance} = \lfloor \text{BaseResistance} + \text{Intellect} \times 0.5 \rfloor$
  - $\text{Haste Rating} = \lfloor \text{BaseHaste} + \lfloor \text{Agility} \times 0.8 \rfloor \rfloor$
- **สมการ Diminishing Returns (Season 3):**
  $$\text{Stat\%} = \text{Base\%} + \frac{100 \times \text{Rating}}{\text{Rating} + K}$$
  - **Series A ($K_A = 50,000$):** Crit ($\text{Base } 5\%$), Luck ($\text{Base } 5\%$), Mastery ($\text{Base } 6\%$), Haste ($\text{Base } 0\%$), Block ($\text{Base } 0\%$)
  - **Series B ($K_B = 28,000$):** Versatility ($\text{Base } 0\%$) $\rightarrow$ เพิ่มดาเมจ/ฮีล/เกราะ $\text{Versatility\%} \times 0.35$ และลดดาเมจที่ได้รับ $\text{Versatility\%} \times 0.15$
  - **Series C ($K_C = 11,000$):** Physical/Magical Boost และ Elemental Bonus / Elemental Resistance
  - **Series D ($K_D = 22,000$):** Armor Mitigation % และ Magical Resistance Mitigation %

### 2.3 โครงสร้างข้อมูลขาออก 2 หน้าต่าง (`SummaryWindowStats` & `FullAttributesWindowStats`)

- **หน้าต่างที่ 1 (`summaryWindow`):** `maxHp`, `atk`, `matk`, `primaryStatKey`, `primaryStatValue`, `strength`, `intellect`, `agility`, `endurance`, `illusionBreakingStrength`, และอ็อบเจกต์ `{ rating, percent }` ของ `crit`, `haste`, `luck`, `mastery`, `versatility`, `block`
- **หน้าต่างที่ 2 (`fullAttributesWindow`):** แบ่งเป็น 6 หมวดหมู่ย่อยครบตามหน้าจอเกมจริง ได้แก่ `offensive`, `defensive`, `support`, `elementalAttack`, `elementalBonus`, `elementResistance`, และ `other` (`staminaLimit`, `staminaRecovery`)

---

## 3. การออกแบบระบบคำนวณดาเมจและจำลองการต่อสู้ 5 นาที (`damage-calculator.ts` & `combat-simulator.ts`)

### 3.1 สมการคำนวณดาเมจและฮีลต่อฮิต (`calculateSkillHitExpectedValue`)

- **สมการดาเมจหลัก:**
  $$\text{MitigatedATKPool} = \text{ATK} \times (1 - \text{EnemyDefMitigation}) + \text{RefinedATK} + \text{ElementalATK}$$
  $$\text{ExpectedDirectDMG} = (\text{MitigatedATKPool} \times \text{SkillMult\%}) \times \text{AdditiveBonusMult} \times \text{ElemBonusMult} \times \text{VersatilityMult} \times \text{CritExpectedMult}$$
- **สมการดาเมจ Lucky Strike (ทะลุเกราะป้องกัน 100%):**
  $$\text{ExpectedLuckyDMG} = \text{LuckProb} \times (\text{ATK} + \text{RefinedATK}) \times \text{LuckyStrikeMult\%} \times \text{CritExpectedMult} \times \text{AdditiveBonusMult} \times \text{ElemBonusMult} \times \text{VersatilityMult}$$

### 3.2 ลูปจำลองการหมุนสกิล 5 นาที (`runFiveMinuteCombatSimulation`)

- จำลองเวลา `300,000 ms` (300 วินาที) โดยเดินเวลาทีละ `50 ms` (6,000 Ticks)
- ดึงตัวคูณของสกิลทั้ง 7 ช่องตามระดับ **Skill Level (1–30)** และ **Tier (0–6)** ที่ผู้เล่นตั้งไว้:
  - ช่องที่ 1 (`[LMB]` Basic Attack), ช่องที่ 2 (`[Key 1]` Special Skill), ช่องที่ 3 (`[Key R - Ultimate]` Ultimate Skill — เปิด/ปิดได้ด้วย `useUltimate`)
  - ช่องที่ 4–7 (`[Key 2]` ถึง `[Key 5]` Expertise Skills)
- ดึงสกิลกดใช้ของ Battle Imagine ช่องที่ 1 และ 2 (เปิด/ปิดได้ด้วย `useImagine1`, `useImagine2`) และดึงสกิลเสริมที่เกิดจากโหนด Talent (`talent_proc`)
- บันทึกสถิติของทุกแอคชั่นลงใน `actionsBreakdown` เพื่อคำนวณ `triggerOrCastCount`, `totalDamage`, `dps`, `damageSharePct`, `totalHeal`, `hps`, `healSharePct`, `avgBuffPct`, และ `buffContributionPct`

---

## 4. การออกแบบ UI คอมโพเนนต์ (`src/app/page.tsx` & `src/components/TalentTreeDiagram.tsx`)

1. **`src/components/TalentTreeDiagram.tsx`:**
   - วาดแผนผัง SVG ของโหนด Talent แยกเป็น **Tab 1: Basic Talents (30 โหนด)** และ **Tab 2: สายการเล่นเฉพาะตัว (70 แต้ม)**
   - ตรวจสอบเงื่อนไขโหนดก่อนหน้า (`canAllocateNode`) บังคับให้อัป Basic ครบ 30 แต้มก่อนจึงจะกดเลือกโหนดเปิดสาย (แต้มที่ 31) ใน Tab 2 ได้
   - แสดงกล่องคำอธิบายโหนดและโบนัสสเตตัสแบบ Real-time เมื่อนำเมาส์ไปชี้ (`onMouseEnter`)
2. **`src/app/page.tsx`:**
   - แบ่งพื้นที่ทำงานเป็นฝั่งซ้าย 8 คอลัมน์ (6 แท็บหลัก: อาชีพ/Talents/Skills/Imagines, อุปกรณ์ 11 ชิ้น, โมดูล 5 ช่อง, Deep Slumber Psychoscope, 5-Min Simulator, และ Spec-Locked Compare) และฝั่งขวาแบบ Sticky 4 คอลัมน์ (สลับดูสเตตัสหน้าต่างที่ 1: สรุป และหน้าต่างที่ 2: Attributes)
