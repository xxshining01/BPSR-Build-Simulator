# ⚡ BPSR Build Planner & 5-Minute Combat Simulator

🌐 **Live Web Application (คลิกเพื่อเข้าใช้งานผ่านเวบได้ทันที):**  
�� **[https://xxshining01.github.io/BPSR-Build-Simulator/](https://xxshining01.github.io/BPSR-Build-Simulator/)**

---

## 🙏 Credits & Attribution / เครดิตและแหล่งอ้างอิง

> **English:**  
> This project is built upon and forked from the open-source project **[alalwww/bpsr-build-planner](https://github.com/alalwww/bpsr-build-planner)** created by **[alalwww](https://github.com/alalwww)** (licensed under the MIT License).  
> All foundational UI components, character stat derivation formulas (`calculateRawStats`, `deriveStats`), ZTable data extraction pipelines, and multi-language databases (`en_US`, `ja_JP`, `ko_KR`, `zh_CN`, `zh_TW`) are credited to the original author.  
> This repository extends the original planner by integrating a **5-Minute Time-Stepped Combat Simulator & Spec-Locked Multi-Build Comparator** (`src/build-planner/simulator/`) and sets **English (`en_US`)** as the default startup language.

> **ภาษาไทย:**  
> ปรเจกตนี้พันาต่อยอดและดัดแปลงมาจากปรเจกตอเพนอรส **[alalwww/bpsr-build-planner](https://github.com/alalwww/bpsr-build-planner)** ึ่งพันาดย **[alalwww](https://github.com/alalwww)** (ภายใต้สัาอนุาต MIT License)  
> ครงสร้างหน้าเวบหลัก, ระบบจำลองอุปกร, สมการคำนวค่าสถานะพื้นาน (`calculateRawStats`, `deriveStats`), สคริปตสกัดข้อมลจาก ZTable และานข้อมลหลายภาษาทั้งหมด เปนผลงานของผ้พันาต้นบับ  
> Repository นี้ได้เพิ่มส่วนขยาย **ระบบจำลองการต่อส้จริง 5 นาที (5-Minute Time-Stepped Combat Simulator)** และ **ระบบเปรียบเทียบหลายบิลด (Multi-Build Comparator)** เข้าไปเพิ่มเติม รวมถึงปรับภาษาเริ่มต้นให้เปนภาษาอังกษ (`en_US`)

---

# 🇬🇧 English Documentation

## 1. Overview
**BPSR Build Simulator** is an all-in-one character build planner, ability score calculator, and dynamic 5-minute combat simulator for **Blue Protocol: Star Resonance (BPSR)**. It runs directly in your web browser without installation.

### Core Build Planner Features (from `alalwww/bpsr-build-planner`)
* **9 Playable Classes & Dual Specializations:** Supports all classes and talent trees (R1 & R2 nodes) with automatic skill replacements.
* **Complete Equipment Configuration:** Customize weapons and armor across 11 slots, including Perfectline (0–100%), Refinement levels (with milestone bonuses), Evolution stats, Reforging, Enchants, Raid Suit sets (2pc/4pc), and Far Sea Golden Weapon legendary affixes.
* **Modules & Power Cores:** 5 module slots with automatic link total calculation and Lv.5 / Lv.6 Power Core special effect detection (`Team Luck & Crit`, `Life Wave`, `DMG Stack`, `Agile`).
* **Skills & Battle Imagines:** Configure Fixed, Mastery (Expertise), and Role skills (Lv.1–30, Rank G0–G6) alongside 2 Battle Imagines (Rank T0–T5).
* **Deep Slumber Psychoscope (Phantom):** Configure Phantom levels, season talent trees, Bond points, and Polarity/Single-stat Factors (G1–G10).
* **Consumables & Party Buffs:** Toggle Cooking dishes, Elemental Syrups, Star Oils, Event buffs, Verdant Oracle *Inspiration* (`Lifebind` / `Smite`), and Beat Performer *Stat Resonance*.
* **Build Management & Sharing:** Save multiple builds locally, export/import build codes, and generate shareable short URLs.

### ⚡ New Combat Simulator Features (`src/build-planner/simulator/`)
* **Time-Stepped 5-Minute Simulation Loop:** Executes a deterministic 300-second (6,000 ticks at 50ms resolution) combat loop using priority-based skill rotations and basic attack weaving.
* **Clean Baseline Sanitization & De-Duplication (`ADR-011`):** Prevents double-counting by stripping timed buffs (`Life Wave`, `Agile`, `DMG Stack`, `Stat Resonance`) from permanent pre-combat stats and simulating their exact uptime and triggers dynamically in combat.
* **Dynamic In-Combat Stat Recalculation:**
  * **Life Wave (`2404`):** Triggers on HP fluctuations / active healing sustain for 5s, boosting your highest secondary stat (`Crit`, `Luck`, `Versatility`, `Haste`, or `Mastery`) and dynamically recalculating Diminishing Returns, Cooldown/Cast Speed, and Lucky Strike Multipliers on every tick.
  * **Agile (`2105`):** Multiplies active `ATK/MATK` (+6% / +10%) and simulates the 5-second drop-off window whenever the character takes an incoming hit.
  * **DMG Stack (`2104`):** Uses a deterministic PRNG (`mulberry32`) to roll the 20% proc chance per attack, stacking up to 4 times (+1.65% / +2.75% per stack for 8s).
  * **Stat Resonance (`1324`/`1325`):** Simulates 1x base main-stat conversion during *Healing Melody* and triggers a **2x Resonance Burst** for 15s upon casting *Encore*, *Passion Burst*, or *Ultimate*.
  * **Dynamic Talent Procs, Far Sea Weapons & Suit Bonuses:** Evaluates *Heroic Melody* (`[1338]` +0.5 Luck Mult), *Quick Chant* (`[267]` +15% Cast SPD), *Rock Mastery* (`[970]` +8% Mastery), *Rock Luck* (`[969]` +50% Countercrush Crit), *Smite Spec* (`[510]` 45% damage-to-healing conversion), *Igoreus* `{p2}` stacking Crit DMG on crit, Far Sea `effectType=3` affixes, and 2pc/4pc Suit set bonuses.
* **Interactive Formula Audit Inspector:** Click **Formula Audit** on any skill to inspect the exact 6 Multiplier Buckets (`Base Hit`, `Additive & Mastery Boost`, `Versatility`, `Crit EV`, `Lucky Strike EV`, and `Target Defense Mitigation`).
* **Spec-Locked Multi-Build Comparator:** Compare all saved builds belonging to the same Class & Specialization side-by-side, ranking them by Effective DPS, Peak 10s Burst DPS, and Effective HPS with automated Winner Analysis.

---

## 2. Calculation Architecture

### Stat Derivation Pipeline
1. **Raw Stats Aggregation (`calculateRawStats.ts`):** Sums flat stats from base character level, equipment, refinement, talents, enchants, modules, phantom nodes, and consumables, then applies additive base-percentage multipliers (`pctBonus`) using verified in-game rounding/truncation rules.
2. **Diminishing Returns & Conversion (`deriveStats.ts`):** Converts main stats (`Strength`, `Intellect`, `Agility`, `Endurance`) into `ATK`, `MATK`, `DEF`, `Max HP`, and `Haste` via separately truncated rates, then passes secondary stats (`Crit`, `Haste`, `Luck`, `Mastery`, `Versatility`, `Enhance`) through seasonal diminishing-return curves.
3. **6-Bucket Combat Hit Evaluation (`combatSimulatorEngine.ts`):**
   $$\text{Hit Expected Value} = \text{BaseHit} \times \text{DefMitigation} \times \text{BoostBucket} \times \text{VersatilityBucket} \times \text{CritEV} \times \text{LuckEV}$$
   * $\text{BaseHit} = (\text{ActiveATK} \times \text{SkillMultiplier\%}) + \text{SkillFlat}$
   * $\text{BoostBucket} = 1 + \frac{\text{PHY/MAG Boost} + \text{MasteryScaling} + \text{ModuleBonuses} + \text{FarSea} + \text{SuitBonus} + \text{BossDMG} + \text{FoodElite} + \text{DMGStack} + \text{ActiveSkillBuffs}}{100}$
   * $\text{VersatilityBucket} = 1 + \frac{\text{TotalVersatility\%} \times 0.35}{100}$
   * $\text{CritEV} = 1 + P(\text{Crit}) \times \frac{\text{CritDMG\%}}{100}$
   * $\text{LuckEV} = 1 + P(\text{Luck}) \times \frac{\text{LuckyStrikeMultiplier\%}}{100}$

---

## 3. How to Use
1. Open **[https://xxshining01.github.io/BPSR-Build-Simulator/](https://xxshining01.github.io/BPSR-Build-Simulator/)**.
2. Select your **Class & Specialization** at the top-left and configure your Equipment, Modules, Talents, Skills, Battle Imagines, Phantom, and Cooking Buffs.
3. Click the **`⚡ Combat Sim`** button on the top-right navigation bar.
4. In the **📊 5-Min Simulation** tab:
   * Toggle `Ultimate`, `Imagine 1`, `Imagine 2`, or `Consumables` and click **`▶ Run 5-Min Sim`**.
   * Review **Effective DPS**, **Peak Burst DPS**, **Baseline DPS**, **Effective HPS**, and **Dynamic Buff Uptime %**.
   * Click **`Formula Audit`** on any skill row to inspect the exact numbers feeding into each multiplier bucket.
5. In the **⚔️ Multi-Build Comparator** tab:
   * Save 2 or more builds for the same class/spec using the Plan selector, then open this tab to rank them and read the **Winner Analysis**.
6. In the **⚙️ Simulator Settings** tab:
   * Adjust `Simulation Duration`, `HP Fluctuation / Sustain Interval`, `Incoming Hit Interval`, `Active HP Sustain`, or `Target Category` (`Boss` / `Elite` / `Normal`).

---
---

# 🇹🇭 ค่มือการใช้งานและการคำนว (ภาษาไทย)

## 1. ภาพรวมของระบบ
**BPSR Build Simulator** คือเวบแอปพลิเคชันสำหรับวางแผนจัดบิลดตัวละคร คำนวคะแนนความสามารถ (Ability Score) และจำลองการต่อส้จริงเปนเวลา 5 นาทีสำหรับเกม **Blue Protocol: Star Resonance (BPSR)** ดยสามารถเปิดใช้งานผ่านเวบเบราวเอรได้ทันที

### ฟีเจอรหลักของระบบจัดบิลด (จาก `alalwww/bpsr-build-planner`)
* **ครบทุกอาชีพและสายความชำนา (9 Classes & Dual Specs):** รองรับผัง Talent ทั้ง R1 และ R2 พร้อมระบบเปลี่ยนสกิลอัตนมัติตามหนดที่อัป
* **ระบบปรับแต่งอุปกรครบ 11 ช่อง:** ปรับค่าความสมบร (Perfectline 0–100%), ระดับการตีบวก (Refine พร้อมบนัสทุกๆ 5 ระดับ), ออปชัน Evolution, การรีฟอรจ (Reforge), รนสลัก (Enchants), บนัสเตอุปกรเรด (2 ชิ้น / 4 ชิ้น) และออปชันอาวุทอง Far Sea
* **ระบบมดลและ Power Core (Modules):** ติดตั้งมดล 5 ช่อง คำนวแต้ม Link รวมอัตนมัติ และตรวจสอบเงื่อนไขเอฟเฟกตพิเศษระดับ Lv.5 / Lv.6 (`Team Luck & Crit`, `Life Wave`, `DMG Stack`, `Agile`)
* **สกิลและ Battle Imagines:** ตั้งค่าระดับสกิล (Lv.1–30) และขั้นทะลวง (G0–G6) ของสกิลหลัก, สกิล Mastery และสกิล Role พร้อมเลือกติดตั้ง Battle Imagine ได้ 2 ช่อง (T0–T5)
* **ระบบ Deep Slumber Psychoscope (Phantom):** ตั้งค่าเลเวลจิตภาพ, ผังหนดประจำีัน, แต้มสายสัมพัน (Bond Points) และสลอต Factor (G1–G10)
* **อาหาร ยา และบัฟปารตี้:** เปิด/ปิดบัฟอาหาร, น้ำเชื่อมาตุ (Syrup), น้ำมันดาว (Star Oil), บัฟกิจกรรม, บัฟ *Inspiration* ของอาชีพ Verdant Oracle และบัฟ *Stat Resonance* ของอาชีพ Beat Performer

### ⚡ ฟีเจอรใหม่: ระบบจำลองการต่อส้ 5 นาที (`src/build-planner/simulator/`)
* **จำลองลปการต่อส้ 5 นาทีแบบ Time-Stepped:** จำลองการต่อส้ 300 วินาที (แบ่งเปน 6,000 Ticks ที่ความละเอียดทุกๆ 50 มิลลิวินาที) จัดลำดับการกดสกิลตามความสำคั (Priority Queue) สลับกับการจมตีปกติ (Basic Attack Weaving)
* **ระบบแยกสเตตัสเริ่มต้นและป้องกันการคิดบัฟ้ำ้อน (`ADR-011`):** ในหน้าจัดบิลดปกติ หากติกเปิดบัฟอย่าง `Life Wave`, `Agile`, หรือ `Stat Resonance` ตัวเลขจะถกบวกแช่ไว้ 100% ตลอดเวลา แต่ในหมด Simulator ระบบจะคัดแยกบัฟจับเวลาเหล่านี้ออกจากค่าสเตตัสยืนพื้น (Baseline) แล้วนำมาจำลองการติดบัฟ/หลุดบัฟตามเวลาจริงในลป 5 นาทีแทน
* **การคำนวสเตตัสและบัฟที่ขึ้น-ลงระหว่างการต่อส้ (Dynamic In-Combat Recalculation):**
  * **Life Wave (`2404`):** ทำงานนาน 5 วินาทีเมื่อเกิดการเปลี่ยนแปลงของ HP (จากการดนจมตีหรือจากการฮีลเลี้ยงเลือด) ดยจะบวก +6% (Lv.5) หรือ +10% (Lv.6) ให้กับค่าสถานะรองที่สงที่สุด (`Crit`, `Luck`, `Versatility`, `Haste`, หรือ `Mastery`) พร้อมนำค่าที่เพิ่มขึ้นไปคำนวความเรวจมตี/ร่ายเวท, ลดคลดาวน และอัปเดตตัวค Lucky Strike ใหม่ทุกๆ Tick
  * **Agile (`2105`):** คพลังจมตี `ATK/MATK` เพิ่ม +6% (Lv.5) หรือ +10% (Lv.6) และจำลองจังหวะบัฟดับไป 5 วินาทีเมื่อตัวละครถกมอนสเตอรจมตี (`Incoming Hit Interval`)
  * **DMG Stack (`2104`):** สุ่มอกาส 20% ทุกครั้งที่จมตีเพื่อสะสมบัฟดาเมจสงสุด 4 ชั้น (+1.65% / +2.75% ต่อชั้น นาน 8 วินาที) ด้วยตัวสุ่มแบบ Deterministic Seed ที่ให้ผลลัพแม่นยำและทดสอบ้ำได้
  * **Stat Resonance (`1324`/`1325`):** จำลองการเพิ่มค่าสเตตัสหลักของ Beat Performer ขะเปิด *Healing Melody* (1 เท่า) และพุ่งเปน **2 เท่า (Resonance Burst)** นาน 15 วินาทีเมื่อกดใช้สกิล *Encore*, *Passion Burst*, หรือ *Ultimate*
  * **หนด Talent แบบมีเงื่อนไข, อาวุทอง Far Sea และบนัสเตอุปกร:** คำนวหนด `[1338]` (เพิ่มอัตราแปลง Luck อีก +0.5 เท่าขะเปิด Heroic Melody), `[267] Quick Chant` (ความเรวร่าย +15% ขะเปิด Permafrost), `[970] Rock Mastery` (Mastery +8% ขะเปิด Brave Bastion), `[969] Rock Luck` (อกาสคริของ Countercrush +50%), `[510] Smite Spec` (แปลงดาเมจ 45% เปนยอดฮีล), พาสีฟ `{p2}` ของ *Igoreus* (สะสม Crit DMG 5 ชั้นเมื่อติดคริ), ออปชันอาวุทอง Far Sea (`effectType=3`) และบนัสเต 2 ชิ้น / 4 ชิ้น
* **หน้าต่างตรวจสอบสมการ (Formula Audit Inspector):** กดปุ่ม **`Formula Audit`** ในตารางสกิลเพื่อดที่มาของตัวเลขทั้ง 6 ถังตัวค (6 Multiplier Buckets) แบบละเอียด
* **ระบบเปรียบเทียบหลายบิลด (Spec-Locked Multi-Build Comparator):** นำบิลดทั้งหมดที่บันทึกไว้ในสายอาชีพเดียวกันมาจำลองการต่อส้แข่งขันกันพร้อมกัน จัดอันดับทั้งด้าน **Effective DPS**, **Peak Burst DPS (10 วินาที)**, และ **Effective HPS** พร้อมสรุปวิเคราะหสาเหตุที่บิลดอันดับ 1 ชนะดยอัตนมัติ

---

## 2. วิีใช้งานระบบจำลองการต่อส้ (Combat Simulator)
1. เข้าไปที่ลิงก **[https://xxshining01.github.io/BPSR-Build-Simulator/](https://xxshining01.github.io/BPSR-Build-Simulator/)**
2. เลือกอาชีพ สายสกิล อุปกร มดล ทาเลนต และบัฟอาหารที่ต้องการ
3. กดปุ่ม **`⚡ Combat Sim`** ที่แถบเมนด้านขวาบน
4. **แทบ 📊 5-Min Simulation:** ดสรุปยอด DPS, Peak Burst, Baseline DPS, HPS, ตารางสัดส่วนดาเมจของแต่ละสกิล และตาราง Uptime ของบัฟแต่ละชนิด (สามารถกดปุ่ม `Formula Audit` ท้ายแถวสกิลเพื่อดสมการคำนวของสกิลนั้นๆ ได้)
5. **แทบ ⚔️ Multi-Build Comparator:** ใช้เปรียบเทียบบิลดปัจจุบันกับบิลดอื่นๆ ที่คุกด Save เกบไว้ในระบบ เพื่อดว่าการจัดของหรือมดลแบบไหนทำดาเมจ/ฮีลได้สงกว่ากันกี่เปอรเนต
6. **แทบ ⚙️ Simulator Settings:** ปรับตั้งค่าระยะเวลาจำลอง, ความถี่การแกว่งของเลือด (`HP Fluctuation / Sustain Interval`), ความถี่การดนมอนสเตอรจมตี (`Incoming Hit Interval`), สวิตชเลี้ยงเลือดอัตนมัติ (`Active HP Sustain`), และประเภทเป้าหมาย (`Boss` / `Elite` / `Normal`)

---

## 3. การรันปรเจกตในเครื่อง (Local Development)

ต้องการ Node.js เวอรชัน 22 ขึ้นไป รันคำสั่งต่อไปนี้ใน Windows PowerShell:

<pre><code>npm install
npm run dev
</code></pre>

สำหรับการทดสอบคอมไพลและสร้างไฟลสำหรับ Web / GitHub Pages (`dist-web`):

<pre><code>npm run build
npm run build:web
</code></pre>

---

## 📄 License
Licensed under the **MIT License**.  
Original application copyright © **[alalwww](https://github.com/alalwww)** ([alalwww/bpsr-build-planner](https://github.com/alalwww/bpsr-build-planner)).  
Combat Simulator & Multi-Build Comparator extensions copyright © **[xxshining01](https://github.com/xxshining01)**.