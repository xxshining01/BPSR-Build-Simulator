# BPSR Domain Knowledge & Calculation Rules
**Last Updated:** 2026-10-22

## 1. กฎเหล็กการป้องกันการคำนวณซ้ำ (Non-Duplication Rules)
1. **ห้ามนำบัฟจับเวลาใน `cookingBuff.ts` มาเป็นสเตตัสเริ่มต้นของ Simulator**:
   - `lifeWaveEnabled` (Module 2404): ทำงานเฉพาะเมื่อ HP เปลี่ยนแปลง นาน 5 วินาที (+6% / +10% ให้สเตตัสสูงสุดใน 5 ค่า)
   - `agileEnabled` (Module 2105): บวก ATK +6% / +10% เมื่ออยู่ในไฟต์ แต่หลุดทันทีเมื่อได้รับความเสียหายเป็นเวลา 5 วินาที
   - `dmgStackEnabled` (Module 2104): เมื่อโจมตีมีโอกาส 20% ที่จะได้บัฟ +1.65% / +2.75% DMG นาน 8 วินาที ซ้อนทับสูงสุด 4 ชั้น
   - `statResonanceEnabled` (Beat Performer Talent 1324/1325): บวก Main Stat 8% ของ INT ขณะเปิด `Healing Melody` และเพิ่มเป็น 2 เท่า (16%–32%) นาน 10–15 วินาทีหลังใช้ `Passion Burst` หรือ `Encore`
2. **รายการที่บวกใน `calculateRawStats.ts` ไปแล้ว (ห้ามบวกซ้ำใน Simulator)**:
   - ดูตาราง `DE_DUPLICATION_REGISTRY` ใน `Docs/SDD.md` หัวข้อ 1.3 (เช่น `Igoreus` `3210180` บวก `{p1}` Crit DMG พื้นฐานไปแล้ว ให้จำลองเฉพาะ `{p2}` ตอนติด Crit และตอนกดใช้ Active 20 วินาที)
3. **รายการที่ `calculateRawStats.ts` ข้ามไป (`continue;`) และต้องคำนวณใน Simulator เท่านั้น**:
   - อาวุธทอง Far Sea ช่องที่ 3 และ 4 ที่เป็น `effectType === 3` (`2400003` Attack DMG +8%, `2400004` Magic DMG +8%, และ `2401020..2409040` บวก PHY/MAG Boost +5%..8% ขณะบัฟประจำอาชีพทำงาน)
   - โบนัสเซ็ตอุปกรณ์ 2 ชิ้น / 4 ชิ้น (`suits.json` รหัส `100..103`)
   - โมดูลที่มี `effectType === 3` (`Agility Boost` +6% Attack DMG, `Intellect Boost` +6% Magic DMG, `Special Attack` +12%, `Elite Strike` +6.6%, `Healing Boost` +12%, `Healing Enhance` +12%, `DMG Stack` +11%)
   - อาหาร `cookingEliteDamagePercent` (+5% / +10% Elite/Boss DMG)
   - ท่าโจมตีและบัฟของ Deep Slumber Psychoscope (`Link#1200..1209`) และโบนัส `Illusion-Breaking DMG +%` จาก Factors (G1–G10)