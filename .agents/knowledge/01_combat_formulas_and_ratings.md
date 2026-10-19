# 01 — สมการการแสดงผลสเตตัส การคำนวณดาเมจ ฮีล บัฟ/ดีบัฟ และปาร์ตี้ (Lv.60 Complete Mathematical Spec)

เอกสารนี้คือบรรทัดฐานทางคณิตศาสตร์ของเกม **Blue Protocol: Star Resonance** ที่ตัวคำนวณใน `/src/engine/` ต้องปฏิบัติตามทุกตัวอักษร

---

## 1. โครงสร้างหน้าต่างแสดงผลสเตตัสที่ Lv.60 (2-Window Display Architecture)

เมื่อผู้ใช้เลือกอุปกรณ์และตัวเลือกทั้งหมดเสร็จสิ้น ระบบต้องคำนวณค่าทั้งในสถานะ **Idle (นอกการต่อสู้)** และ **Combat (เริ่มการต่อสู้)** แล้วแสดงผลแบ่งเป็น 2 หน้าต่างดังนี้:

### 1.1 หน้าต่างที่ 1: สรุป (Summary Window)
แสดงสเตตัสหลัก 11 ค่าที่สรุปความเก่งของตัวละคร:
1. `Max HP` (พลังชีวิตสูงสุด)
2. `ATK` หรือ `MATK` (แสดงตามสายอาชีพกายภาพหรือเวท แต่ในระบบคำนวณเก็บทั้งคู่)
3. `Strength` / `Agility` / `Intellect` (แสดงค่าหลักของอาชีพนั้น)
4. `Endurance` (ความทนทาน)
5. `Illusion-Breaking Strength` (ค่าทะลวงเกราะมายา/เกจเบรกบอส)
6. `Crit` (แสดงทั้งแต้ม Rating และ `% Crit Rate` ที่แปลงแล้ว)
7. `Haste` (แสดงทั้งแต้ม Rating และ `% Haste` ที่แปลงแล้ว)
8. `Luck` (แสดงทั้งแต้ม Rating และ `% Lucky Strike Rate` ที่แปลงแล้ว)
9. `Mastery` (แสดงทั้งแต้ม Rating และ `% Mastery Bonus` ที่แปลงแล้ว)
10. `Versatility` (แสดงทั้งแต้ม Rating และ `% Versatility DMG/Heal/Mitigation` ที่แปลงแล้ว)
11. `Block` (แสดงทั้งแต้ม Rating และ `% Block Rate` ที่แปลงแล้ว)

### 1.2 หน้าต่างที่ 2: ข้อมูลเต็ม (Full Attributes Window)
ต้องแจกแจงสเตตัสทั้งหมดครบทุกตัว แบ่งเป็น 7 หมวดหมู่ตามลำดับดังนี้:

1. **Offensive Attributes (13 ค่า):**
   - `Strength`, `Intellect`, `Agility`
   - `ATK`, `MATK`
   - `Refined ATK`, `Refined MATK`
   - `PHY Boost %`, `MAG Boost %`
   - `Attack SPD %`, `Cast Speed %`
   - `CritDMG %`, `Lucky Strike DMG Multiplier %`
2. **Defensive Attributes (8 ค่า):**
   - `Endurance`, `Max HP`
   - `Armor`, `Resistance`, `Refined Armor`
   - `ATK Reduction %`, `MATK Reduction %`, `Block DMG Reduction %`
3. **Support Attributes (6 ค่า):**
   - `Crit Healing %`, `Lucky Strike Healing %`
   - `Healing Output %`, `Healing Received %`
   - `Shield %`, `Shield Receive %`
4. **Elemental Attack (9 ค่า):**
   - `All Element Attack`
   - `Fire Attack`, `Ice Attack`, `Forest Attack`, `Thunder Attack`, `Wind Attack`, `Rock Attack`, `Light Attack`, `Dark Attack`
5. **Elemental Bonus (18 ค่า):**
   - `All Element`, `All-Element Bonus %`
   - `Fire`, `Fire Bonus %`, `Ice`, `Ice Bonus %`, `Forest`, `Forest Bonus %`, `Thunder`, `Thunder Bonus %`, `Wind`, `Wind Bonus %`, `Rock`, `Rock Bonus %`, `Light`, `Light Bonus %`, `Dark`, `Dark Bonus %`
6. **Element Resistance (18 ค่า):**
   - `All Element Resistance`, `All Element Resistance %`
   - `Fire Resistance`, `Fire Resistance %`, `Ice Resistance`, `Ice Resistance %`, `Forest Resistance`, `Forest Resistance %`, `Thunder Resistance`, `Thunder Resistance %`, `Wind Resistance`, `Wind Resistance %`, `Rock Resistance`, `Rock Resistance %`, `Light Resistance`, `Light Resistance %`, `Dark Resistance`, `Dark Resistance %`
7. **Other Attributes (2 ค่า):**
   - `Stamina Limit`, `Stamina Recovery`

---

## 2. สมการการรวมสเตตัสและการแปลงค่า Primary -> Secondary (Stat Aggregation & Conversion)

### 2.1 ลำดับการรวมค่าสเตตัสพื้นฐาน (Idle & Combat Stat Pipeline)
สำหรับสเตตัส $S$ ใดๆ:
$$S_{\text{flat\_pool}} = S_{\text{base\_lv60}} + S_{\text{gear\_main\_sub\_extra\_purple}} + S_{\text{refine}} + S_{\text{sigil}} + S_{\text{imagine\_passive}} + S_{\text{module\_base}} + S_{\text{psychoscope\_nodes}} + S_{\text{factor\_g10}} + S_{\text{bond\_passive}} + S_{\text{food\_event\_flat}}$$

$$S_{\text{total}} = \left\lfloor S_{\text{flat\_pool}} \times \left( 1 + \sum S_{\text{pct\_bonuses}} \right) + S_{\text{final\_flat\_buffs}} \right\rfloor$$

### 2.2 การแปลงค่า Primary Stats เป็น ATK / MATK / Max HP / Defense
* **สาย Strength (Heavy Guardian, Shield Knight, Wind Knight):**
  $$\text{ATK}_{\text{from\_stat}} = \text{Strength} \times R_{\text{str\_to\_atk}} + \text{Agility} \times R_{\text{agi\_sub}}$$
* **สาย Agility (Marksman, Blade Warden):**
  $$\text{ATK}_{\text{from\_stat}} = \text{Agility} \times R_{\text{agi\_to\_atk}} + \text{Strength} \times R_{\text{str\_sub}}$$
* **สาย Intellect (Spellcaster, Verdant Oracle, Beat Performer):**
  $$\text{MATK}_{\text{from\_stat}} = \text{Intellect} \times R_{\text{int\_to\_matk}}$$
* **ความทนทาน (Endurance):**
  $$\text{Max HP}_{\text{from\_end}} = \text{Endurance} \times R_{\text{end\_to\_hp}}$$
  *(โดยค่าสัมประสิทธิ์ $R$ ประจำแต่ละอาชีพถูกนิยามไว้ในตาราง Base Class Scaling)*

### 2.3 สมการแปลงแต้ม Rating เป็นเปอร์เซ็นต์ที่ Lv.60 (Secondary Rating Conversion)
ค่าสถานะรองทั้ง 6 (`Crit`, `Haste`, `Luck`, `Mastery`, `Versatility`, `Block`) และแต้มธาตุ (`Fire`, `Ice`, ฯลฯ) ใช้สมการ Hyperbolic Diminishing Returns ที่เลเวล 60:

$$\text{Converted \%}(\text{Rating}) = \text{Base \%} + \left( \frac{\text{Rating}}{\text{Rating} + K_{\text{stat, lv60}}} \times M_{\text{cap}} \right) + \sum \text{Direct Flat \% Bonuses}$$

* **ผลลัพธ์ย่อยของแต่ละ Rating:**
  1. **Crit Rating** $\rightarrow$ `Crit Rate %` (ค่าเริ่มต้น Base = `5.0%`, `CritDMG %` เริ่มต้น = `150.0%`)
  2. **Haste Rating** $\rightarrow$ เพิ่มทั้ง `Attack SPD %` และ `Cast Speed %` ในอัตราส่วนเดียวกัน และลด Cooldown ของสกิลที่ติดแท็ก `hasteScaling: true`:
     $$\text{Effective CD} = \frac{\text{Base CD}}{1 + \text{Haste \%}}$$
  3. **Luck Rating** $\rightarrow$ `Lucky Strike Rate %` (โอกาสเกิดดาเมจ/ฮีลพิเศษซ้อนทับอีกชั้น โดยมีตัวคูณเริ่มต้นตาม `Lucky Strike DMG Multiplier %` และ `Lucky Strike Healing %`)
  4. **Mastery Rating** $\rightarrow$ `Mastery %` ซึ่งจะไปคูณกับกลไกเฉพาะของแต่ละสายอาชีพ (เช่น เพิ่มดาเมจเหยี่ยวของ Falconry หรือเพิ่มโบนัสธาตุน้ำแข็งของ Icicle)
  5. **Versatility Rating** $\rightarrow$ แปลงเป็น:
     - `Versatility DMG & Heal Bonus %` = $\text{Versatility \%}$
     - `Versatility DMG Reduction %` = $0.5 \times \text{Versatility \%}$
  6. **Block Rating** $\rightarrow$ `Block Rate %` เมื่อทำการบล็อกสำเร็จ จะลดดาเมจที่ได้รับลงตามค่า `Block DMG Reduction %`
  7. **Element Points (`All Element` + `Specific Element`)** $\rightarrow$ แปลงเป็น `Element Bonus %`:
     $$\text{Total Element Bonus \% (ธาตุ } E\text{)} = \text{All-Element Bonus \%} + E\text{ Bonus \%} + f_{\text{elem}}(\text{All Element} + E)$$

---

## 3. สมการคำนวณดาเมจฉบับสมบูรณ์ (Complete Damage Equation)

การคำนวณดาเมจของสกิล $i$ แยกออกเป็น 7 ตัวคูณอิสระ (7 Multiplicative Buckets) ดังนี้:

### ขั้นที่ 1: Base Skill & Refined Damage Bucket ($B_{\text{base}}$)
* แยกตามประเภทดาเมจของสกิล (`Physical` ใช้ `ATK` และ `Refined ATK` / `Magical` ใช้ `MATK` และ `Refined MATK`):
$$B_{\text{base}} = \left( \text{ATK or MATK}_{\text{combat}} \times \text{SkillMultiplier}_i + \text{SkillFlatBonus}_i \right) \times \left( 1 - \text{EnemyDefMitigation} \right) + \left( \text{Refined ATK or MATK} \times \text{RefineScaling}_i \right)$$
*(หมายเหตุ: `Refined ATK/MATK` คือดาเมจส่วนที่ทะลุเกราะพื้นฐานของมอนสเตอร์)*

### ขั้นที่ 2: Elemental Attack Flat Bucket ($B_{\text{elem\_flat}}$)
* หากสกิลมีธาตุ $E \in \{\text{Fire, Ice, Forest, Thunder, Wind, Rock, Light, Dark}\}$:
$$B_{\text{elem\_flat}} = \left( \text{All Element Attack} + E\text{ Attack} \right) \times \text{SkillElemCoefficient}_i \times \left( 1 - \text{EnemyElemRes \%} \right)$$

### ขั้นที่ 3: Damage Type & General Boost Bucket ($B_{\text{boost}}$)
รวมบัฟเพิ่มดาเมจประเภทเดียวกันแบบ Additive:
$$B_{\text{boost}} = 1 + \text{PHY or MAG Boost \%} + \text{SkillSpecificBonus \%} + \text{GearSetDmgBonus \%} + \text{PartyBuffDmg \%} + \text{EventDmgBonus \%}$$

### ขั้นที่ 4: Elemental Bonus Bucket ($B_{\text{elem\_pct}}$)
$$B_{\text{elem\_pct}} = 1 + \text{All-Element Bonus \%} + E\text{ Bonus \%}$$

### ขั้นที่ 5: Versatility & Mastery Bucket ($B_{\text{vers\_mast}}$)
$$B_{\text{vers\_mast}} = \left( 1 + \text{Versatility DMG \%} \right) \times \left( 1 + \text{Mastery Scaling \%}_i \right)$$

### ขั้นที่ 6: Target Vulnerability & Debuff Bucket ($B_{\text{debuff}}$)
ดีบัฟที่แปะอยู่บนตัวบอส (เช่น ดีบัฟรับดาเมจแรงขึ้นจากอาชีพซัพพอร์ต/แทงค์ หรือจาก Imagine):
$$B_{\text{debuff}} = 1 + \sum \text{TargetDamageTakenIncreased \%}$$

### ขั้นที่ 7: Crit & Lucky Strike Expected Value Bucket ($B_{\text{crit\_luck}}$)
ในโหมดคำนวณค่าคาดหวัง (Expected Value - EV) เพื่อเปรียบเทียบบิลด์:
* ให้ $P_{\text{crit}} = \min(1.0, \text{Crit Rate \%} + \text{SkillCritRateBonus}_i)$
* ให้ $M_{\text{crit}} = \text{CritDMG \%}$ (เช่น 1.50 สำหรับ 150%)
* ให้ $P_{\text{luck}} = \min(1.0, \text{Lucky Strike Rate \%})$
* ให้ $M_{\text{luck}} = \text{Lucky Strike DMG Multiplier \%}$
$$B_{\text{crit\_luck}} = \left( 1 + P_{\text{crit}} \times (M_{\text{crit}} - 1) \right) \times \left( 1 + P_{\text{luck}} \times (M_{\text{luck}} - 1) \right)$$

### สมการรวมดาเมจสุทธิต่อฮิต (Final Hit Damage):
$$\text{Final DMG}_i = \left( B_{\text{base}} + B_{\text{elem\_flat}} \right) \times B_{\text{boost}} \times B_{\text{elem\_pct}} \times B_{\text{vers\_mast}} \times B_{\text{debuff}} \times B_{\text{crit\_luck}} \times B_{\text{special\_independent}}$$
*(โดย $B_{\text{special\_independent}}$ คือตัวคูณแยกอิสระจากอาวุธ Far Sea, โหนดสุดสายของ Talent, หรือ Bond 55 ของ Psychoscope)*

---

## 4. สมการคำนวณการฮีลและเกราะป้องกัน (Healing & Shield Equations)

### 4.1 สมการการฮีล (Healing Formula)
$$\text{Raw Heal}_i = \left( \text{MATK}_{\text{combat}} \times \text{HealMultiplier}_i + \text{HealFlat}_i \right) \times \left( 1 + \text{Healing Output \%} \right) \times \left( 1 + \text{Versatility Heal \%} \right) \times \left( 1 + \text{Target Healing Received \%} \right)$$

$$\text{Expected Heal}_i = \text{Raw Heal}_i \times \left( 1 + P_{\text{crit}} \times (\text{Crit Healing \%} - 1) \right) \times \left( 1 + P_{\text{luck}} \times (\text{Lucky Strike Healing \%} - 1) \right)$$

### 4.2 สมการเกราะป้องกัน (Shield Formula)
$$\text{Final Shield}_i = \left( \text{Stat}_{\text{source}} \times \text{ShieldMultiplier}_i + \text{ShieldFlat}_i \right) \times \left( 1 + \text{Shield \%} \right) \times \left( 1 + \text{Versatility \%} \right) \times \left( 1 + \text{Target Shield Receive \%} \right)$$

---

## 5. ระบบการซ้อนทับของบัฟ/ดีบัฟ ปาร์ตี้ อาหาร และอีเว้นท์ (Buff Stacking Rules)
1. **Same-Source Override:** บัฟชื่อเดียวกันจากอาชีพเดียวกันในปาร์ตี้จะ **ไม่ซ้อนทับกัน** (ใช้ค่าที่สูงที่สุด หรือรีเฟรชเวลา)
2. **Different-Source Stacking:** บัฟจากคนละอาชีพ (เช่น บัฟเพลงจาก *Beat Performer* + บัฟธรรมชาติจาก *Verdant Oracle* + ดีบัฟเปิดเกราะจาก *Shield Knight*) จะคำนวณร่วมกันตาม Bucket ที่ระบุในข้อ 3
3. **Consumables & World Context:**
   - **อาหาร (Food Buff):** เลือกเปิดใช้งานได้ 1 ชนิด บวกค่า Flat Rating (เช่น Crit/Haste/Luck) และ/หรือ `% ATK/MATK/Elemental`
   - **อีเว้นท์ (Event / Dungeon Aura):** ตัวคูณหรือค่าสเตตัสเสริมตามเงื่อนไขดันเจี้ยน/เรด