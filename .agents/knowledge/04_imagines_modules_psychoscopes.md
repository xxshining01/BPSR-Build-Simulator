# 04 — คัมภีร์ระบบ Battle Imagines, Modules (21 Link Effects), Factor G10 และ Deep Slumber Psychoscope ฉบับสมบูรณ์

เอกสารนี้รวบรวมรายละเอียดเชิงลึกครบทั้ง 4 ระบบโดยไม่มีการย่อหรือตัดทอน เพื่อใช้เป็นโครงสร้างหลักในการเขียน Schema และ Engine คำนวณสเตตัส

---

## 1. ระบบการสวมใส่ Battle Imagines ตามปกติ (2 Active Slots & Tier 0 - 5)

นอกเหนือจากการนำ Imagine ไปใส่ในช่อง Bond ของ Psychoscope แล้ว ในหน้าต่างจัดบิลด์หลัก ผู้เล่นจะต้องเลือกติดตั้ง **Battle Imagines สำหรับใช้งานจริงจำนวน 2 ตัว (`Imagine Slot 1` และ `Imagine Slot 2`)**

### 1.1 ประเภทและโครงสร้างของ Battle Imagine แต่ละตัว
* แบ่งตามระดับและประเภทในเกม (เช่น **Boss / SSR Imagines**, **Elite / SR Imagines**)
* ผู้ใช้สามารถเลือกระดับการอัปเกรดขั้นได้ตั้งแต่ **`Tier 0` ถึง `Tier 5` (รวม 6 ระดับ)**

### 1.2 ผลลัพธ์ 2 ส่วนที่ Battle Imagine มอบให้ตัวละคร (ต้องคำนวณทั้งคู่)
1. **ผลลัพธ์เมื่อสวมใส่ (Equipped Passive Stats & Passive Buffs — ทำงานตลอดเวลา):**
   * **Flat Base Stats:** ทันทีที่ติดตั้งลงใน Slot 1 หรือ Slot 2 จะบวกค่าสเตตัสพื้นฐานเข้าสู่หน้าต่างสเตตัสตัวละครทันที (เช่น `+ATK/MATK`, `+Strength/Agility/Intellect`, `+Endurance/Max HP`, `+Crit/Haste/Luck/Mastery/Versatility`, `+All Element Attack`) โดยค่าสเตตัสนี้จะสูงขึ้นตามระดับ `Tier 0 -> Tier 5`
   * **Passive Trait / Aura Effect:** บัฟติดตัวที่ทำงานอัตโนมัติตามเงื่อนไขของ Imagine ตัวนั้นๆ (เช่น เพิ่ม `PHY Boost %` / `MAG Boost %` ติดตัว, เพิ่มดาเมจธาตุ, เพิ่ม `Healing Output %`, หรือเมื่อ HP > 80% ได้รับ Crit Rate เพิ่มเติม) ซึ่งเปอร์เซ็นต์บัฟจะเพิ่มขึ้นตามระดับ `Tier 0 -> Tier 5`
2. **ผลลัพธ์เมื่อกดใช้งาน (Active Skill Execution & Temporary Buff/Debuff — ทำงานเมื่อกดใช้ในการต่อสู้):**
   * มี **Cooldown** ประจำตัว (เช่น 45 วินาที, 60 วินาที, 90 วินาที) และมีเวลาออกท่า (`castTime` / `summonAnimation`)
   * **Active Action:** เมื่อกดใช้ (และติ๊กเปิด `Imagine 1` หรือ `Imagine 2` ใน 5-Minute Simulator) ตัวละครจะอัญเชิญมอนสเตอร์/บอสของ Imagine นั้นออกมาทำแอคชั่น:
     - สร้างความเสียหาย (`activeDamageMultiplier` คูณกับ `ATK` หรือ `MATK` ตามประเภท), ฮีลหมู่, หรือกางเกราะป้องกัน (`Shield`)
   * **Active Buff / Enemy Debuff:** มอบบัฟก้อนใหญ่ให้ผู้เล่น/ปาร์ตี้ (เช่น เพิ่ม ATK/MATK +15%, เพิ่ม CritDMG +25%, เร่ง Attack/Cast SPD เป็นเวลา 10-15 วินาที) หรือแปะดีบัฟใส่บอส (เช่น ลดเกราะบอส, ทำให้บอสรับดาเมจแรงขึ้น) รวมถึงทำค่า `Illusion-Breaking Strength` สูงเพื่อช่วยเบรกเกจบอส
   * **การเปลี่ยนแปลงตาม Tier 0 - 5:** ยิ่ง Tier สูง ตัวคูณดาเมจตอนกดใช้และเปอร์เซ็นต์บัฟชั่วคราวจะยิ่งสูงขึ้น และที่ **Tier 3 / Tier 5** มักจะปลดล็อกกลไกพิเศษเพิ่มเติม (เช่น ลด Cooldown, เพิ่มจำนวนฮิต, หรือขยายเวลาบัฟ)

---

## 2. ระบบ Modules (5 Slots, 3 หมวดหมู่, และ 21 Link Effects จริง)

### 2.1 โครงสร้างการสวมใส่โมดูล (5 Module Slots)
* ผู้เล่นสามารถติดตั้งโมดูลได้ทั้งหมด **5 Slots (`Slot 1` ถึง `Slot 5`)**
* ในแต่ละ Slot ผู้ใช้สามารถเลือกประเภทโมดูล (`Assault`, `Support`, `Guardian`) และเลือก **เอฟเฟกต์ Link ได้ 3 แถว (`1st`, `2nd`, `3rd Link Effect`)** โดยแต่ละแถวเลือกระดับแต้มได้ตั้งแต่ **`1` ถึง `10`**
* เมื่อใส่ครบทั้ง 5 ชิ้น ระบบจะนำ **ค่า Status พื้นฐานจากตัวโมดูลทั้ง 5 ชิ้น** มารวมเข้าสู่ตัวละคร และนำแต้มของแต่ละ Link Effect มารวมกันเพื่อปลดล็อกเอฟเฟกต์ระดับ **Link Lv.1 ถึง Lv.6** (ตามเกณฑ์แต้มรวม `1 / 4 / 8 / 12 / 16 / 20` แต้ม)

### 2.2 รายชื่อ Link Effects ทั้ง 21 ชนิด และเงื่อนไขการสุ่มออก
* **กลุ่มที่ 1: Basic Link Effects (13 ชนิด — ออกได้ทั้งแถวที่ 1, 2 และ 3):**
  1. `Strength Boost` (เฉพาะ **Assault** — 10.00% / 11.11%): เพิ่ม Strength, ATK และเจาะเกราะกายภาพ
  2. `Agility Boost` (เฉพาะ **Assault** — 10.00% / 11.11%): เพิ่ม Agility, ATK และโบนัสกายภาพ
  3. `Intellect Boost` (เฉพาะ **Assault** — 10.00% / 11.11%): เพิ่ม Intellect, MATK และโบนัสเวท
  4. `Special Attack` (เฉพาะ **Assault** — 10.00% / 11.11%): เพิ่มสเตตัสหลัก และเพิ่มดาเมจสกิลเฉพาะทาง (Special Attack DMG)
  5. `Elite Strike` (เฉพาะ **Assault** — 10.00% / 11.11%): เพิ่มดาเมจที่ทำต่อมอนสเตอร์ระดับ Elite และ Boss
  6. `Healing Boost` (เฉพาะ **Support** — 15.00% / 16.67%): เพิ่มผลฮีลของสกิลประเภท Special Healing
  7. `Healing Enhance` (เฉพาะ **Support** — 15.00% / 16.67%): เพิ่ม `Healing Output %` ของสกิลสายอาชีพ
  8. `Resistance` (เฉพาะ **Guardian** — 15.00% / 16.67%): เพิ่มค่า `Resistance` และ `MATK Reduction %`
  9. `Armor` (เฉพาะ **Guardian** — 15.00% / 16.67%): เพิ่มค่า `Armor` และ `ATK Reduction %`
  10. `Cast Focus` (ออกได้ทั้ง **3 หมวด** — Assault 10%/11.11%, Support/Guardian 15%/16.67%): เพิ่ม `Cast Speed %` และค่าสเตตัส
  11. `Attack SPD` (ออกได้ทั้ง **3 หมวด** — Assault 10%/11.11%, Support/Guardian 15%/16.67%): เพิ่ม `Attack SPD %` และค่าสเตตัส
  12. `Crit Focus` (ออกได้ทั้ง **3 หมวด** — Assault 10%/11.11%, Support/Guardian 15%/16.67%): เพิ่ม `CritDMG %`, `Crit Healing %` และโบนัสธาตุ
  13. `Luck Focus` (ออกได้ทั้ง **3 หมวด** — Assault 10%/11.11%, Support/Guardian 15%/16.67%): เพิ่มโบนัสดาเมจและผลลัพธ์เมื่อติด `Lucky Strike`
* **กลุ่มที่ 2: Special / Supreme Link Effects (8 ชนิด — ออกได้เฉพาะ `1st Link Effect` เท่านั้น):**
  14. `DMG Stack` (เฉพาะ **Assault** — 2.50%): โจมตีสะสม Stack เพิ่ม Damage % ต่อเนื่อง
  15. `Agile` (เฉพาะ **Assault** — 2.50%): เพิ่มความคล่องตัวและฟื้นฟู/ลดการใช้ Stamina
  16. `Life Condense` (เฉพาะ **Support** — 2.00%): เสริมพลังชีวิตและผลฮีลสะสม
  17. `First Aid` (เฉพาะ **Support** — 2.00%): เพิ่มผลฮีลพิเศษเมื่อเป้าหมายมี HP ต่ำกว่าเกณฑ์
  18. `Team Luck & Crit` (เฉพาะ **Support** — 2.00%): มอบบัฟเพิ่ม Crit และ Luck ให้เพื่อนร่วมทีมทั้งปาร์ตี้
  19. `Final Protection` (เฉพาะ **Guardian** — 3.33%): ลดดาเมจหรือสร้างเกราะเมื่ออยู่ในสภาวะวิกฤต
  20. `Life Wave` (ออกได้ทั้ง **3 หมวด** — Assault 2.50%, Support 2.00%, Guardian 3.33%): เพิ่ม Max HP และได้รับบัฟสเตตัสเมื่อ HP เปลี่ยนแปลง
  21. `Life Steal` (ออกได้ทั้ง **3 หมวด** — Assault 2.50%, Support 2.00%, Guardian 3.33%): ดูดเลือดตามสัดส่วนดาเมจที่ทำได้

---

## 3. ระบบ Factor ระดับ G10 (ครบทั้ง 5 ประเภท และของทุกสายอาชีพ)

**Factor ระดับ G10** คือไอเทมสำหรับนำไปฝังลงในโหนด Socket ของ Deep Slumber Psychoscope โดยต้องมีข้อมูลครบทุกชิ้นในระดับ G10 แบ่งเป็น **5 ประเภทหลัก**:
1. **`Polarity` (ขั้วพลังงาน):** ให้ค่าสเตตัสเชิงรุก (เช่น `ATK`, `MATK`, `Strength`, `Agility`, `Intellect`, `PHY/MAG Boost %`, `Elemental Attack/Bonus`)
2. **`Stasis` (สถิต):** ให้ค่าสเตตัสป้องกันและความทนทาน (เช่น `Endurance`, `Max HP`, `Armor`, `Resistance`, `Block`, `Damage Reduction %`)
3. **`Inspiration` (แรงบันดาลใจ):** ให้ค่าสเตตัสความเร็วและซัพพอร์ต (เช่น `Haste`, `Attack SPD %`, `Cast Speed %`, `Healing Output %`, `Shield %`)
4. **`Reality` (สัจธรรม):** ให้ค่าสเตตัสคริติคอล โชค และความชำนาญ (เช่น `Crit`, `CritDMG %`, `Luck`, `Lucky Strike DMG Mult %`, `Mastery`, `Versatility`)
5. **`Class Stasis` (สถิตประจำสายอาชีพ — แยกตาม 9 อาชีพ / 18 สายย่อย):**
   * เป็น Factor พิเศษที่ระบุเงื่อนไข `requiredClassId` และ `requiredSpecId`
   * เมื่อติดตั้งจะมอบเอฟเฟกต์เฉพาะของสายอาชีพนั้นๆ (เช่น เพิ่มตัวคูณดาเมจของสกิลหลักประจำสาย, ลด Cooldown ท่าหากิน, หรือเพิ่มอัตราการเกิด Proc ของ Talent)

---

## 4. ระบบ Deep Slumber Psychoscope ทั้ง 8 สาย, เลเวล, ผัง Tree Map และระบบ Bond Points (3 - 55)

ผู้เล่นสามารถเลือกใช้งาน **Deep Slumber Psychoscope ได้ 1 สาย จากทั้งหมด 8 สาย** โดยระบบภายในแบ่งออกเป็น **2 กลไกที่ทำงานแยกกันแต่รวมผลลัพธ์เข้าด้วยกัน**:

### กลไกที่ 1: เลเวลของ Deep Slumber Psychoscope, ลำดับสาย/ทางแยก (Tree Map) และช่องใส่ Factor G10
1. **การกำหนดเลเวลของ Psychoscope (`Psychoscope Level`):**
   * เมื่อผู้ใช้อัปเลเวลของ Deep Slumber Psychoscope จะเป็นการปลดล็อกโหนดตามลำดับขั้นของผัง Tree Map และปลดล็อกช่องติดตั้ง Factor (Factor Sockets) รวมถึงปลดล็อกช่องใส่ Imagine สำหรับทำแต้ม Bond Points
2. **การเดินผังโหนดตามลำดับสายและทางแยก (Sequential & Branching Tree Map):**
   * ในแต่ละสายของทั้ง 8 สาย จะมีโหนดเรียงตามลำดับจากต้นสายไปยังปลายสาย โดยมี **จุดทางแยก (Branching Choices)** ให้ผู้เล่นเลือกอัปว่าจะไปทางสายบัฟสเตตัสใด (หากเลือกทางแยกหนึ่ง อีกทางแยกในระดับเดียวกันอาจถูกล็อกตามเงื่อนไขแต้ม/เส้นทาง)
   * **โหนดบัฟสเตตัส (Buff Nodes):** เมื่อเลือกอัปจะบวกค่าสเตตัส (`ATK/MATK`, `Crit`, `Haste`, `Mastery`, `Max HP`, `Elemental Bonus`, ฯลฯ) หรือเอฟเฟกต์พิเศษเข้าสู่ตัวละคร
   * **โหนดช่องติดตั้ง Factor (Factor Socket Nodes):** ในจุดที่กำหนดไว้บนผัง Tree Map จะเป็นช่อง Socket ซึ่งระบุชัดเจนว่า **จุดนั้นอนุญาตให้ใส่ Factor G10 ประเภทใดได้บ้าง** (`Polarity`, `Stasis`, `Inspiration`, `Reality`, หรือ `Class Stasis`) ผู้ใช้จะเลือก Factor G10 มาใส่ในแต่ละจุดที่ปลดล็อกแล้ว

### กลไกที่ 2: ระบบ Bond Points (ตั้งแต่ 3 ถึง 55 แต้ม) จากการติดตั้ง Imagines สูงสุด 5 ตัว
* **ที่มาของแต้ม Bond Points:**
  * ในหน้าต่าง Deep Slumber Psychoscope จะมีช่องสำหรับนำ **Imagines มาติดตั้งเพื่อเชื่อมสายสัมพันธ์ (Bond Slots) ได้สูงสุด 5 ตัว** (ปลดล็อกจำนวนช่องตามเลเวลของ Psychoscope)
  * Imagine แต่ละตัวที่นำมาใส่ใน 5 ช่องนี้ จะให้ค่า **Bond Points** ตาม **ระดับความแรร์ (Rarity: เช่น SSR / ทอง vs SR / ม่วง)** และ **ระดับ Tier (`Tier 0` ถึง `Tier 5`)** ของ Imagine ตัวนั้นๆ
  * เมื่อรวมแต้มจาก Imagine ที่ใส่ลงไป (สูงสุด 5 ตัว) จะได้ค่า **Total Bond Points อยู่ในช่วงตั้งแต่ `3` ถึง `55` แต้ม**
  * *(ใน UI ของ Simulator: รองรับทั้งการเลือกใส่ Imagine 5 ตัวพร้อมระบุ Tier เพื่อให้ระบบรวมแต้มให้อัตโนมัติ และมีตัวเลือกให้ปรับค่าระดับ Bond Points รวมตั้งแต่ `3` ถึง `55` ได้โดยตรงเพื่อความสะดวกในการจัดบิลด์)*
* **การปลดล็อก Bond Points Effect ประจำสาย (ทั้ง 8 สาย):**
  * Deep Slumber Psychoscope ทั้ง 8 สาย จะมีตารางเอฟเฟกต์บัฟจากค่า Bond Points ที่แตกต่างกันตามเอกลักษณ์ของแต่ละสาย (เช่น สายเน้นโจมตีกายภาพ, สายเน้นเวท, สายเน้นคริติคอล/ความเร็ว, สายป้องกัน, สายซัพพอร์ต)
  * เมื่อค่า Bond Points รวมถึงระดับที่กำหนดในตารางของสายนั้นๆ (ตั้งแต่ระดับเริ่มต้นที่ `3` แต้ม ไล่ระดับขึ้นไปจนถึงระดับสูงสุดที่ `55` แต้ม) ระบบจะปลดล็อกและอัปเกรด **Bond Points Buff Effect** เข้าสู่การคำนวณสเตตัส Idle และ Combat ของตัวละครทันที