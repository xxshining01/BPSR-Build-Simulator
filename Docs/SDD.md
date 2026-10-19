# System Design Document (SDD)
**Project:** Blue Protocol: Star Resonance Build & Combat Simulator

---

## 1. โครงสร้างสเตตัสตัวละครที่ Lv.60 (Character Attributes Specification)
ระบบต้องจัดการตัวแปรสเตตัสทั้งหมดในรูปแบบ Dictionary Object (`Record<StatKey, number>`) โดยแบ่งการแสดงผลเป็น 2 มุมมอง:

### 1.1 หน้าต่างที่ 1: สรุป (Summary View)
แสดงค่าหลักที่ผู้เล่นใช้ดูภาพรวมบิลด์:
* **Core Stats:** `maxHp`, `atk` หรือ `matk` (ตามสายอาชีพ), `strength` / `intellect` / `agility` (ตามสายอาชีพ), `endurance`, `illusionBreakingStrength`
* **Secondary Combat Ratings (แสดงทั้งแต้มดิบและ % ที่แปลงแล้ว):** `crit`, `haste`, `luck`, `mastery`, `versatility`, `block`

### 1.2 หน้าต่างที่ 2: ข้อมูลเต็ม (Full Attributes View)
แจกแจงครบทุกหมวดหมู่ตามลำดับดังนี้:

| หมวดหมู่ (Category) | รายการสเตตัส (Attribute Keys & Labels) |
| :--- | :--- |
| **Offensive Attributes** | `strength` (Strength), `intellect` (Intellect), `agility` (Agility), `atk` (ATK), `matk` (MATK), `refinedAtk` (Refined ATK), `refinedMatk` (Refined MATK), `phyBoostPct` (PHY Boost %), `magBoostPct` (MAG Boost %), `attackSpdPct` (Attack SPD %), `castSpdPct` (Cast Speed %), `critDmgPct` (CritDMG %), `luckyStrikeDmgMultPct` (Lucky Strike DMG Multiplier %) |
| **Defensive Attributes** | `endurance` (Endurance), `maxHp` (Max HP), `armor` (Armor), `resistance` (Resistance), `refinedArmor` (Refined Armor), `atkReductionPct` (ATK Reduction %), `matkReductionPct` (MATK Reduction %), `blockDmgReductionPct` (Block DMG Reduction %) |
| **Support Attributes** | `critHealingPct` (Crit Healing %), `luckyStrikeHealingPct` (Lucky Strike Healing %), `healingOutputPct` (Healing Output %), `healingReceivedPct` (Healing Received %), `shieldPct` (Shield %), `shieldReceivePct` (Shield Receive %) |
| **Elemental Attack** | `allElementAtk` (All Element Attack), `fireAtk` (Fire Attack), `iceAtk` (Ice Attack), `forestAtk` (Forest Attack), `thunderAtk` (Thunder Attack), `windAtk` (Wind Attack), `rockAtk` (Rock Attack), `lightAtk` (Light Attack), `darkAtk` (Dark Attack) |
| **Elemental Bonus** | `allElement` (All Element), `allElementBonusPct` (All-Element Bonus %), `fire` (Fire), `fireBonusPct` (Fire Bonus %), `ice` (Ice), `iceBonusPct` (Ice Bonus %), `forest` (Forest), `forestBonusPct` (Forest Bonus %), `thunder` (Thunder), `thunderBonusPct` (Thunder Bonus %), `wind` (Wind), `windBonusPct` (Wind Bonus %), `rock` (Rock), `rockBonusPct` (Rock Bonus %), `light` (Light), `lightBonusPct` (Light Bonus %), `dark` (Dark), `darkBonusPct` (Dark Bonus %) |
| **Element Resistance** | `allElementRes` (All Element Resistance), `allElementResPct` (All Element Resistance %), `fireRes` (Fire Resistance), `fireResPct` (Fire Resistance %), `iceRes` (Ice Resistance), `iceResPct` (Ice Resistance %), `forestRes` (Forest Resistance), `forestResPct` (Forest Resistance %), `thunderRes` (Thunder Resistance), `thunderResPct` (Thunder Resistance %), `windRes` (Wind Resistance), `windResPct` (Wind Resistance %), `rockRes` (Rock Resistance), `rockResPct` (Rock Resistance %), `lightRes` (Light Resistance), `lightResPct` (Light Resistance %), `darkRes` (Dark Resistance), `darkResPct` (Dark Resistance %) |
| **Other Attributes** | `staminaLimit` (Stamina Limit), `staminaRecovery` (Stamina Recovery) |

---

## 2. โมดูลการตั้งค่าบิลด์ของผู้ใช้ (User Input Modules)

### 2.1 Class, Talents, Skills & Imagines
* **Class & Specialization:** เลือกอาชีพหลัก และสายแยกย่อย (เช่น Marksman -> Falconry หรือ Wildpack)
* **Talent Tree:** โครงสร้าง Directed Acyclic Graph (DAG) ตรวจสอบแต้มรวม, เงื่อนไขโหนดก่อนหน้า และระดับเลเวลของโหนด
* **Skill Loadout:** เลือก Active Skills ลง Slot, กำหนด `Skill Level` และ `Skill Tier` (ซึ่งจะเปลี่ยนตัวคูณดาเมจ/ฮีล หรือลด Cooldown)
* **Imagines (2 Slots):** เลือก Imagine 2 ตัว พร้อมกำหนดระดับ `Tier (0 - 5)` ดึงค่า Passive Stats เข้าตัวละคร และดึง Active Skill เข้าสู่ระบบ Rotation

### 2.2 Equipment, Refine & Sigils (11 Slots)
* **Slots ทั้ง 11 ช่อง:** อาวุธ (Weapon), หมวก (Head), ชุด (Chest), ถุงมือ (Gloves), รองเท้า (Boots), ต่างหู (Earrings), สร้อยคอ (Necklace), แหวน (Ring), กำไลซ้าย (Left Bracelet), กำไลขวา (Right Bracelet), เครื่องราง (Charm/Talisman)
* **Equipment Source & Set Rules:**
  * รองรับไอเทมฟาร์มแมพ, คราฟท์ร้านเฉพาะ (Set 2 ชิ้น / 4 ชิ้น), คราฟท์ Life Skill, อาวุธ Epic และอาวุธ Far Sea
  * **Stat Restriction Validator:** บังคับตาราง `SlotStatRestrictionMatrix` แยกตามสาย (`STR` / `INT` / `AGI`) เพื่อกรองว่าอุปกรณ์ชิ้นใด **ไม่สามารถ** สุ่มออกสเตตัสใดได้
* **Sub-components ต่อ 1 ชิ้น:**
  * เลือก `Main Stat`, `Sub Stats`, `Extra Stats`, และ `Purple Bonus Stat (โบนัสม่วง)` (ถ้าไอเทมชิ้นนั้นรองรับ)
  * เลือก **Refine Level (0 - 30):** บวกค่าสเตตัสพื้นฐานและ Refined ATK / MATK / Armor ตามตาราง Refine Curve
  * เลือก **Sigil (1 ชิ้นต่ออุปกรณ์):** กรองเฉพาะ Sigil ที่ติดตั้งลง Slot นั้นได้ และเลือกระดับ **Emblem Level (Lv.1, Lv.2, Lv.3)**

### 2.3 Module System (5 Slots)
* มี 5 ช่องติดตั้ง (Slot 1 - 5)
* แต่ละช่องสามารถเลือก **Link Effects ได้ 3 อย่าง** โดยแต่ละอย่างกำหนดแต้มระดับได้ตั้งแต่ **1 ถึง 10**
* **การคำนวณของระบบ:**
  1. รวมค่า Status พื้นฐานจากโมดูลทั้ง 5 ชิ้นเข้าสู่ตัวละคร
  2. รวมแต้มของแต่ละชื่อ Link จากทั้ง 5 ชิ้นเข้าด้วยกัน แล้วเทียบตาราง Threshold เพื่อปลดล็อกระดับ **Link Level (Lv.1 - Lv.6)** ของแต่ละประเภท Link

### 2.4 Deep Slumber Psychoscope & G10 Factors
* เลือก **Psychoscope 1 จาก 8 สาย** และกำหนดเลเวลของ Psychoscope
* เลือกเส้นทางอัปเกรดโหนดตามลำดับสายและทางแยก (Branching Paths)
* ในโหนดที่เป็นช่องใส่ Factor: ให้เลือกติดตั้ง **Factor ระดับ G10** โดยระบบจะกรองตามประเภทช่อง (`Polarity`, `Stasis`, `Inspiration`, `Reality`, และ `Class Stasis` ที่ตรงกับอาชีพ)
* กำหนดค่า **Bond Points (ตั้งแต่ 3 ถึง 55)** เพื่อเปิดใช้งานเอฟเฟกต์บัฟสะสมตามขั้นของสายที่เลือก

---

## 3. ไปป์ไลน์สมการคำนวณ (Mathematical Calculation Pipeline)

การคำนวณแบ่งเป็น 2 สถานะหลัก คือ **Idle State (นอกการต่อสู้)** และ **Combat State (เริ่มการต่อสู้ + บัฟ)**

### 3.1 การรวมค่าสเตตัส (Stat Aggregation Order)
สำหรับสเตตัสแต่ละตัว ($S$):
$$S_{total} = \left( S_{base\_lv60} + \sum S_{flat\_gear} + \sum S_{refine} + \sum S_{sigil} + \sum S_{imagine} + \sum S_{module} + \sum S_{psychoscope} + \sum S_{factor} \right) \times \left( 1 + \sum S_{pct\_passive} \right) + \sum S_{flat\_final}$$

### 3.2 การแปลงค่า Rating เป็น Percentage (Rating Conversion Curve)
สำหรับค่า `Crit`, `Haste`, `Luck`, `Mastery`, `Versatility`, `Block` ที่ Lv.60 ใช้สมการ Diminishing Returns มาตรฐานของเกม:
$$\text{Stat \%} = \text{Base \%} + \frac{\text{Rating}}{\text{Rating} + K_{lv60}} \times C_{max}$$
*(หมายเหตุ: ค่าคงที่ $K_{lv60}$ และ $C_{max}$ ของแต่ละสเตตัสให้ดึงจากไฟล์ `formulas.config.ts` เพื่อให้ปรับจูนตามแพตช์ได้ง่าย)*

### 3.3 สมการดาเมจ (Damage Formula)
สำหรับแต่ละฮิตของสกิล ($i$):
$$\text{Raw DMG}_i = \left( \text{ATK or MATK} \times \text{SkillMultiplier}_i + \text{FlatSkillDMG}_i + \text{RefinedATK/MATK} \right)$$

$$\text{Mitigated DMG}_i = \text{Raw DMG}_i \times \left( 1 - \text{TargetDefMitigation} \right) + \text{ElementalAttack} \times \text{ElemScaling}_i$$

$$\text{Boosted DMG}_i = \text{Mitigated DMG}_i \times \left( 1 + \text{PHY/MAG Boost \%} + \text{DmgBonus \%} \right) \times \left( 1 + \text{ElementalBonus \%} \right) \times \left( 1 + \text{VersatilityDMG \%} \right) \times \left( 1 + \text{MasteryScaling \%} \right)$$

**การคิด Crit และ Lucky Strike (Expected Value ต่อฮิต):**
* ให้ $P_{crit} = \min(1, \text{CritRate})$, $M_{crit} = \text{CritDMG \%}$
* ให้ $P_{luck} = \min(1, \text{LuckRate})$, $M_{luck} = \text{LuckyStrikeDMGMult \%}$
$$\text{Expected DMG}_i = \text{Boosted DMG}_i \times \left( 1 + P_{crit} \times (M_{crit} - 1) \right) \times \left( 1 + P_{luck} \times (M_{luck} - 1) \right)$$

### 3.4 สมการการฮีล (Healing Formula)
$$\text{Base Heal}_i = \left( \text{MATK or Stat} \times \text{HealMultiplier}_i + \text{FlatHeal}_i \right) \times \left( 1 + \text{HealingOutput \%} \right) \times \left( 1 + \text{VersatilityHeal \%} \right)$$
$$\text{Expected Heal}_i = \text{Base Heal}_i \times \left( 1 + P_{crit} \times (\text{CritHealing \%} - 1) \right) \times \left( 1 + P_{luck} \times (\text{LuckyStrikeHealing \%} - 1) \right)$$

---

## 4. ระบบจำลองการต่อสู้อัตโนมัติ 5 นาที (5-Minute Auto-Rotation Simulator)

### 4.1 การตั้งค่าก่อนรัน (Simulation Toggles & Context)
* **Duration:** 300 วินาที (300,000 ms), ความละเอียด Tick = `50ms` (รวม 6,000 Ticks)
* **User Toggles (เปิด/ปิด):**
  * `[x] Use Ultimate Skill`
  * `[x] Use Imagine Slot 1 Active`
  * `[x] Use Imagine Slot 2 Active`
* **External Buffs Context:** เลือกบัฟปาร์ตี้จากอาชีพอื่น, อาหาร (Food), และบัฟอีเว้นท์ (Event)

### 4.2 กลไก State Machine ของ Auto-Rotation
ในแต่ละ Tick ($t$):
1. **Update Timers:** ลด Cooldown ของสกิลทั้งหมด, ลดระยะเวลา Buff/Debuff ที่ทำงานอยู่, ฟื้นฟู Stamina/Class Resource
2. **Process DOTs / HOTs:** หากมีสถานะพิษ/เผาไหม้/ฮีลต่อเนื่องที่ถึงรอบทำงาน ให้คำนวณดาเมจ/ฮีลและบันทึก Log
3. **Check Animation Lock:** หากตัวละครยังอยู่ในช่วง `Cast Time` หรือ `Animation Lock` ของท่าก่อนหน้า ให้ข้ามไป Tick ถัดไป (โดยเวลาร่ายและ Animation จะถูกย่อลงตามค่า `Cast Speed %` และ `Attack SPD %` / `Haste`)
4. **Priority Queue Decision (เมื่อตัวละครว่าง):**
   ตรวจสอบเงื่อนไขและกดสกิลตามลำดับความสำคัญของสายอาชีพนั้นๆ:
   * *ลำดับที่ 1:* Imagine Active 1 / 2 (หากติ๊กเปิดใช้งาน และไม่อยู่ใน Cooldown)
   * *ลำดับที่ 2:* Ultimate Skill (หากติ๊กเปิดใช้งาน และเกจเต็ม/ไม่อยู่ใน Cooldown)
   * *ลำดับที่ 3:* Proc Skills / Empowered Skills ที่เด้งขึ้นมาจาก Talent
   * *ลำดับที่ 4:* Core Active Skills เรียงตาม Priority Weight ของสายอาชีพ
   * *ลำดับที่ 5:* Basic Attack (การโจมตีปกติ เมื่อสกิลอื่นติด Cooldown ทั้งหมด)
5. **Execute & Record:** คำนวณ DMG, Heal, Buff Uptime, และการติด Passive Proc จากสกิลนั้น แล้วบันทึกเข้าตารางสถิติ

### 4.3 ตารางผลลัพธ์การจำลอง (Simulation Output Analytics)
* **Summary Cards:**
  * `Total DMG` และ `DPS` (Total DMG / 300)
  * `Total Heal` และ `HPS` (Total Heal / 300)
  * `Average Buff %` (ค่าเฉลี่ยถ่วงน้ำหนักเวลา Uptime ของบัฟเพิ่มพลังโจมตี/สเตตัสตลอด 300 วินาที)
* **Action Breakdown Table (แจกแจงทุกแอคชั่น):**
  แสดงแยกตามที่มา: *Basic Attack, Active Skills, Passive Skills, Talent Sub-skills, Imagine Skills*
  * `Action Name & Source` (ชื่อท่าและที่มา)
  * `Cast / Trigger Count` (จำนวนครั้งที่ใช้งานหรือทำงาน)
  * `Total DMG` | `Skill DPS` | `DMG Contribution %` ($\frac{\text{Skill DMG}}{\text{Total DMG}} \times 100$)
  * `Total Heal` | `Skill HPS` | `Heal Contribution %` ($\frac{\text{Skill Heal}}{\text{Total Heal}} \times 100$)
  * `Buff/Debuff Uptime %` | `Buff Contribution %` (สัดส่วนการมีส่วนร่วมของบัฟเทียบกับบัฟทั้งหมด)

---

## 5. ระบบบันทึกและเปรียบเทียบบิลด์ (Build Storage & Comparison Engine)
* **Rule Enforcement:** เปรียบเทียบได้เฉพาะ `Build A.specId === Build B.specId` (เช่น *Falconry vs Falconry* เท่านั้น ห้าม *Falconry vs Wildpack*)
* **Comparison Diff View:**
  1. **Stat Diff:** แสดงตารางเปรียบเทียบสเตตัสทั้งหน้า Summary และ Full Attributes พร้อมตัวเลขผลต่าง (`+` สีเขียว / `-` สีแดง)
  2. **Simulation Diff:** เทียบ `DPS Diff (% และตัวเลข)`, `HPS Diff`, `Avg Buff % Diff`
  3. **Skill Contribution Diff:** เทียบตารางสกิลแบบบรรทัดต่อบรรทัดว่าบิลด์ไหนรีดดาเมจจากสกิลใดได้มากกว่ากันเพราะอะไร (เช่น เพราะเปลี่ยน Sigil หรือเปลี่ยนโหนด Psychoscope)