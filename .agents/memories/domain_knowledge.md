# BPSR Domain Knowledge, Calculation Rules & De-Duplication Specification
**Last Updated:** 2026-10-24

---

## 1. โครงสร้างการเชื่อมต่อกับ `alalwww/bpsr-build-planner`
- แอปพลิเคชันหลักใช้ Vite + React + TypeScript + Zustand (`src/build-planner/store/useBuildPlannerStore.ts`)
- การคำนวณสเตตัสพื้นฐานอยู่ใน `src/build-planner/stats/calculateRawStats.ts` และ `src/build-planner/stats/deriveStats.ts`
- ข้อมูลตัวเกมทั้งหมดอยู่ใน `src/data/*.json` และข้อความพร้อมตารางตัวคูณสกิล (`activeEffectParams`) อยู่ใน `src/locales/{en_US,ja,zh_Hans}/game-data.json`
- โฟลเดอร์ `src-tauri/icons/` จำเป็นต้องมีอยู่ในโปรเจกต์เสมอ เพราะ `src/about/AboutPanel.tsx` มีการ import ไอคอน `../../src-tauri/icons/32x32.png` ตอนสั่ง `npm run build`

---

## 2. กฎเหล็กการแยกสเตตัสเริ่มต้น vs บัฟจับเวลาในไฟต์ (`ADR-011` & `SDD.md`)

### 2.1 บัฟใน `cookingBuff.ts` ที่ห้ามนำมาคิดเป็นสเตตัสยืนพื้นก่อนเริ่มไฟต์
ใน `bpsr-build-planner` เดิม หากผู้ใช้ติ๊กเปิดสวิตช์ 4 ตัวนี้ โค้ดจะนำไปบวกเป็นค่าถาวร 100% ทันที ใน Simulator ต้องบังคับตั้งเป็น `false` ตอนคำนวณ Baseline Stats แล้วนำมาจำลองตามเวลาจริงในลูป 5 นาทีแทน:
1. **`lifeWaveEnabled` (Module `2404` Life Wave Lv.5/6):** บวก `+6%` (Lv.5) หรือ `+10%` (Lv.6) ให้สเตตัสสูงสุดใน 5 ค่า (`crit`, `haste`, `luck`, `mastery`, `versatility`) เป็นเวลา **5 วินาทีเมื่อ HP เปลี่ยนแปลง**
2. **`agileEnabled` (Module `2105` Agile Lv.5/6):** คูณ `ATK/MATK` `+6%` (Lv.5) หรือ `+10%` (Lv.6) เมื่อเข้าไฟต์ **แต่บัฟจะดับทันทีเมื่อได้รับความเสียหายเป็นเวลา 5 วินาที**
3. **`dmgStackEnabled` (Module `2104` DMG Stack Lv.5/6):** ในโค้ดเดิมของ `bpsr-build-planner` มีแค่ UI แต่ยังไม่ได้เอาไปคำนวณดาเมจ ใน Simulator ต้องจำลองการไต่ระดับ 1 ถึง 4 ชั้น (โอกาส 20% เมื่อโจมตี นาน 8 วินาที บวกชั้นละ `+1.65%` ที่ Lv.5 หรือ `+2.75%` ที่ Lv.6 = สูงสุด `+11% DMG`)
4. **`statResonanceEnabled` (Beat Performer Talent `1324`/`1325`):** บวก Main Stat ตามค่า Intellect ขณะเปิด `Healing Melody` และเพิ่มเป็น 2 เท่าเป็นเวลา **10–15 วินาทีหลังใช้ `Passion Burst` หรือ `Encore`**

### 2.2 รายการที่บวกใน `calculateRawStats.ts` ไปแล้ว (ห้ามบวกซ้ำใน Simulator — `DE_DUPLICATION_REGISTRY`)
- **Talent `Type 1` & `Type 4` ทุกโหนด:** บวกค่า Flat Stat และอัตราแปลง Main Stat -> ATK/Armor/Haste/AtkSPD ใน Base Stats ไปแล้ว
- **Talent `2207340` (`1333` Variation):** บวก `Max HP +20%` (เมื่อเล่น `type1`) ไปแล้ว
- **Talent `2204340` (`237` Secondary Amp):** บวกสเตตัสสูงสุด `+3.5%` ไปแล้ว
- **Talent `2207210`, `2200540`, `2208520`:** บวก `Crit Healing +25%`, `Crit DMG +10%`, `Crit DMG +8%` ไปแล้ว
- **Talent `2204520`, `2208310`, `2202570`, `2207390`:** บวกค่าคงที่ `Lucky Strike Multiplier` และอัตราแปลง `Luck%` พื้นฐานไปแล้ว (Simulator คิดเพิ่มเฉพาะโหนด `1338` ตอนเปิด `Heroic Melody` ที่เพิ่มอัตราแปลงเป็น 2 เท่า และโหนด `330` ที่เปิดให้ `Formless Flame Slash` ติด Lucky Strike ได้)
- **Talent `2205680` (`470`) & `2202110` (`510`):** บวก `Lucky Strike DMG +50%` ไปแล้ว (Simulator คิดเฉพาะการฟื้นฟู Courage และการแปลงดาเมจ 45% เป็นฮีลของ `Symbiotic Mark`)
- **Talent `2204640` (`267` Quick Chant):** บวก `Haste +2,500` ไปแล้ว (Simulator คิดเฉพาะ `Casting SPD +15%` ตอนเปิด `Permafrost`)
- **Talent `2201720` (`970`) & `2201710` (`969`):** บวก `Mastery +6,250` และ `Luck +5%` ไปแล้ว (Simulator คิดเฉพาะ `Mastery +8%` ตอนเปิด `Brave Bastion` และ `Countercrush Crit +50%`)
- **Imagine `[3969] Igoreus` (`3210180`):** บวก `{p1}` (`Crit DMG +5.6%..14%` ถาวร) ไปแล้ว (Simulator คิดเฉพาะ `{p2}` ตอนติด Crit ซ้อน 5 ชั้น นาน 2s และสกิลกดใช้ Active 20s)
- **Factor `[202181]` (`3057040`):** บวก `{p2}` (`MATK%` ถาวร) ไปแล้ว (Simulator คิดเฉพาะการลดฮีล `{p1}` และการสร้าง Illusion Energy)

### 2.3 รายการที่ `calculateRawStats.ts` ข้ามไป (`continue;`) และต้องคำนวณใน Simulator เท่านั้น
1. **อาวุธทอง Far Sea ช่องที่ 3 และ 4 ที่เป็น `effectType === 3`:**
   - `2400003`: `Attack DMG +8%`
   - `2400004`: `Magic DMG +8%`
   - `2401020`..`2409040`: บวก `PHY Boost` หรือ `MAG Boost` `+5%` ถึง `+8%` ขณะบัฟประจำคลาสทำงาน
2. **โบนัสเซ็ตอุปกรณ์ 2 ชิ้น / 4 ชิ้น (`suits.json` รหัส `100..103`)**
3. **โมดูลที่มี `effectType === 3` (ที่ระดับ Link Lv.5 และ Lv.6):**
   - `1111 Agility Boost` (+3.6% / +6.0% Attack DMG)
   - `1112 Intellect Boost` (+3.6% / +6.0% Magic DMG)
   - `1113 Special Attack` (+7.2% / +12.0% Special Attack DMG)
   - `1114 Elite Strike` (+3.9% / +6.6% Elite/Boss DMG)
   - `1205 Healing Boost` (+7.2% / +12.0% Special Attack Healing)
   - `1206 Healing Enhance` (+7.2% / +12.0% Expertise Skill Healing)
   - `2104 DMG Stack`, `2105 Agile`, `2404 Life Wave`
4. **อาหาร `cookingEliteDamagePercent`:** บวก `+5%` หรือ `+10%` ดาเมจต่อ Elite/Boss
5. **Deep Slumber Psychoscope (`Link#1200..1209`) และโบนัส `Illusion-Breaking DMG +%` จาก Season 3 Factors (G1–G10)**