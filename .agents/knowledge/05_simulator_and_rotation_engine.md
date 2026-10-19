# 05 — กลไกการจำลอง 5-Minute Auto-Rotation Simulator และการคำนวณตารางสถิติ

เอกสารนี้กำหนดกฎการทำงานของเครื่องยนต์จำลองการต่อสู้อัตโนมัติ 5 นาที (300 วินาที) และการคำนวณตารางผลลัพธ์เชิงสถิติทั้งหมด

---

## 1. พารามิเตอร์และสวิตช์ควบคุมการจำลอง (Simulation Parameters & Toggles)
* **ระยะเวลาจำลองมาตรฐาน:** `5 นาที` (`300.0 วินาที` = `300,000 ms`)
* **ความละเอียดของเวลา (Time Step / Tick Rate):** `50 ms` ต่อ 1 Tick (รวมทั้งสิ้น `6,000 Ticks`)
* **ตัวเลือกเปิด/ปิดของผู้ใช้ (User Action Toggles):**
  1. `useUltimate` (เปิด/ปิด การกดสกิล Ultimate อัตโนมัติเมื่อพร้อม)
  2. `useImagine1` (เปิด/ปิด การกดใช้สกิลของ Imagine ตัวที่ 1 อัตโนมัติเมื่อพร้อม)
  3. `useImagine2` (เปิด/ปิด การกดใช้สกิลของ Imagine ตัวที่ 2 อัตโนมัติเมื่อพร้อม)

---

## 2. ลอจิกการตัดสินใจของบอทเล่นออโต้ (Auto-Play Priority Queue Logic)

ในทุกๆ Tick ที่ตัวละครไม่ได้ติดสถานะร่ายเวท (`isCasting`) หรือติดท่าทางออกอาวุธ (`isAnimationLocked`) ระบบออโต้จะเลือกทำแอคชั่นตามลำดับความสำคัญดังนี้:

1. **Pre-check Triggers & Procs:** ตรวจสอบว่ามี Passive Skill, เอฟเฟกต์จาก Talent, เซ็ตอุปกรณ์ 4 ชิ้น, อาวุธ Far Sea, หรือ Module Link Lv.6 ที่ทำงานแบบ Instant (ไม่กินเวลาออกท่า) หรือไม่ หากมีให้สั่งทำงานทันที
2. **Imagine 1 & Imagine 2:** หากผู้ใช้ติ๊กเปิดไว้ และ Cooldown เป็น `0` ให้กดใช้เพื่อรับบัฟหรือทำดาเมจก่อนเข้าช่วง Burst
3. **Buff / Class Stance Skills:** สกิลเปิดบัฟตัวเองหรือสกิลเข้าโหมดเฉพาะอาชีพที่มีพร้อมใช้งาน
4. **Ultimate Skill:** หากผู้ใช้ติ๊กเปิดไว้, เกจพลังงานเต็ม และไม่อยู่ใน Cooldown
5. **Empowered / Talent Proc Active Skills:** สกิลที่ได้รับการเสริมพลังชั่วคราวจากการติดเงื่อนไขของ Talent (เช่น ติด Crit แล้วปุ่มสกิลสว่างขึ้น)
6. **Core Active Skills (Slot 1 - 4):** เรียงตามค่า `priorityWeight` หรือค่า `DPS per Cast Time` สูงสุดของสายอาชีพนั้นๆ
7. **Basic Attack (การโจมตีปกติ):** หากสกิลกดทั้งหมดติด Cooldown ตัวละครจะทำการโจมตีปกติต่อเนื่องเพื่อสะสมเกจและรอ Cooldown

---

## 3. สมการคำนวณตารางสถิติผลลัพธ์ (Simulation Analytics & Contribution Math)

เมื่อจำลองครบ 300 วินาที ระบบต้องสรุปผลลัพธ์ออกเป็น 2 ส่วน:

### 3.1 ค่าสถิติภาพรวม (Grand Summary Metrics)
* $\text{Total DMG} = \sum_{k=1}^{N} \text{DMG}_k$ (ผลรวมดาเมจจากทุกแอคชั่นตลอด 300 วินาที)
* $\text{DPS} = \frac{\text{Total DMG}}{300}$
* $\text{Total Heal} = \sum_{k=1}^{N} \text{Heal}_k$ (ผลรวมการฮีลจากทุกแอคชั่นตลอด 300 วินาที)
* $\text{HPS} = \frac{\text{Total Heal}}{300}$
* $\text{Average Buff \%} = \frac{1}{300} \int_{0}^{300} \text{TotalActiveBuffPct}(t) \, dt$ (ค่าเฉลี่ยถ่วงน้ำหนักเวลาของบัฟทั้งหมดที่เกิดระหว่างการต่อสู้ 300 วินาที)

### 3.2 ตารางแจกแจงรายสกิลและทุกแอคชั่น (Per-Action Breakdown Table)
ทุกแอคชั่นที่เกิดขึ้น (ทั้ง *การโจมตีปกติ, Active Skill, Passive Skill, สกิลเสริมจาก Talents, Ultimate, และสกิลกดใช้ของ Imagines*) ต้องแสดงเป็นแถวในตารางพร้อมคำนวณค่าต่อไปนี้:

1. **จำนวนครั้ง (`count`):** จำนวนครั้งที่กดใช้สกิล หรือจำนวนครั้งที่พาสซีฟ/Talent ทำงานตลอด 5 นาที
2. **ดาเมจและ DPS ของสกิลนั้น:**
   $$\text{Skill DPS}_j = \frac{\text{Skill Total DMG}_j}{300}$$
3. **อัตราการมีส่วนร่วมด้านดาเมจ (`DMG Contribution %`):**
   $$\text{DMG Share \%}_j = \left( \frac{\text{Skill Total DMG}_j}{\text{Total DMG}} \right) \times 100\%$$
4. **ฮีลและ HPS ของสกิลนั้น:**
   $$\text{Skill HPS}_j = \frac{\text{Skill Total Heal}_j}{300}$$
5. **อัตราการมีส่วนร่วมด้านการฮีล (`Heal Contribution %`):**
   $$\text{Heal Share \%}_j = \left( \frac{\text{Skill Total Heal}_j}{\text{Total Heal}} \right) \times 100\%$$
6. **บัฟเฉลี่ยและอัตราการมีส่วนร่วมด้านบัฟ (`Average Buff & Buff Contribution %`):**
   * ให้ $\text{BuffIntegral}_j = \sum (\text{BuffValue}_{j} \times \text{ActiveDuration}_{j})$ คือผลคูณระหว่างเปอร์เซ็นต์บัฟของสกิล $j$ กับระยะเวลาที่บัฟนั้นแสดงผลตลอด 300 วินาที
   * ค่าบัฟเฉลี่ยของสกิล $j$:
     $$\text{Skill Avg Buff \%}_j = \frac{\text{BuffIntegral}_j}{300}$$
   * อัตราการมีส่วนร่วมของบัฟเทียบกับสกิลอื่น (`Buff Contribution %`):
     $$\text{Buff Share \%}_j = \left( \frac{\text{BuffIntegral}_j}{\sum_{m=1}^{N} \text{BuffIntegral}_m} \right) \times 100\%$$