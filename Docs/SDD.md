# เอกสารการออกแบบรายละเอียดซอฟต์แวร์ (Software Design Document - SDD)
**โครงการ:** Blue Protocol: Star Resonance (BPSR) Build Planner & Dynamic Combat Simulator
**เวอร์ชัน:** 3.0.0 (Detailed Mathematical & State Machine Specification)
**อัปเดตล่าสุด:** 2026-10-22

---

## 1. การออกแบบระบบแยกสเตตัสตั้งต้นและป้องกันการคำนวณซ้ำ (`baselineSanitizer.ts`)

### 1.1 ปัญหาของการนำ `finalStats` หน้าแรกมาใช้โดยตรง
ใน `src/build-planner/stats/calculateRawStats.ts` และ `cookingBuff.ts` เมื่อผู้ใช้กดเปิดสวิตช์ในแผง Buff/Consumables ค่าต่อไปนี้จะถูกบวกแช่เป็นค่าถาวร 100%:
1. `lifeWaveEnabled` (Module `2404` Life Wave Lv.5/6): บวก `+6%` หรือ `+10%` ให้สเตตัสสูงสุดใน 5 ค่า (`crit`, `haste`, `luck`, `mastery`, `versatility`) ตลอดเวลา ทั้งที่ในเกมจริงมีผลแค่ **5 วินาทีเมื่อ HP เปลี่ยนแปลง**
2. `agileEnabled` (Module `2105` Agile Lv.5/6): คูณ `ATK/MATK` `+6%` หรือ `+10%` ตลอดเวลา ทั้งที่ในเกมจริง **บัฟจะหายทันทีเมื่อได้รับความเสียหายเป็นเวลา 5 วินาที**
3. `statResonanceEnabled` (Beat Performer Talent `1324`/`1325`): บวก `Main Stat` แช่ตลอดเวลา ทั้งที่ในเกมจริงตัวคูณ 2 เท่า (`16%`–`32%`) มีผลเฉพาะ **10–15 วินาทีหลังจากร่าย `Passion Burst` หรือ `Encore` ขณะเปิด `Healing Melody`**
4. `inspirationEnabled` (Verdant Oracle Talent `502`): หากผู้เล่นกำลังจำลองตัวละครอาชีพ `[5] Verdant Oracle` ที่อัปโหนด `502` ไว้ และเผลอเปิดสวิตช์นี้ อาจเกิดความสับสนเรื่องแหล่งที่มาของบัฟ

### 1.2 อัลกอริทึม `createSanitizedCookingBuff(rawBuff, includeConsumables)`
ก่อนเริ่มลูปจำลองการต่อสู้ที่ $t = 0\text{ ms}$ ระบบจะสร้าง `sanitizedCookingBuff` ดังนี้:
```typescript
export function createSanitizedCookingBuff(
  rawBuff: CookingBuffState,
  includeConsumables: boolean,
): CookingBuffState {
  return {
    ...rawBuff,
    cookingEnabled: includeConsumables ? rawBuff.cookingEnabled : false,
    syrupEnabled: includeConsumables ? rawBuff.syrupEnabled : false,
    starOilEnabled: includeConsumables ? rawBuff.starOilEnabled : false,
    eventBuffEnabled: includeConsumables ? rawBuff.eventBuffEnabled : false,
    // ปิดบัฟจับเวลาในไฟต์ทั้งหมดออกจากสเตตัสตั้งต้น เพื่อไปจำลองตามเวลาจริงในลูป Combat!
    lifeWaveEnabled: false,
    agileEnabled: false,
    dmgStackEnabled: false,
    statResonanceEnabled: false,
  };
}
```

### 1.3 ตาราง `DE_DUPLICATION_REGISTRY` (รายการที่คำนวณใน `calculateRawStats.ts` ไปแล้ว ห้ามบวกซ้ำใน Simulator)
| รหัส (ID) | ชื่อเอฟเฟกต์ | ส่วนที่อยู่ใน Base Stats แล้ว (`DO NOT ADD AGAIN`) | ส่วนที่ Simulator ต้องคำนวณเพิ่มในไฟต์ (`DYNAMIC ONLY`) |
| :--- | :--- | :--- | :--- |
| `Talent 2207340` | `[1333] Variation` | `Max HP +20%` (เมื่อเล่นสาย Dissonance `type1`) | เปลี่ยน Basic Attack เป็น `Resonant Strings` เมื่อเล่นสาย `type2` |
| `Talent 2204340` | `[237] Secondary Amp` | บวกสเตตัสสูงสุดใน 5 ค่า `+3.5%` | - |
| `Talent 2207210` | `[1320] Crit Healing` | `Crit Healing +25%` | - |
| `Talent 2200540` | `[152] Arcane` | `Crit DMG +10%` | - |
| `Talent 2208520` | `[351] Crimson Break Slash` | `Crit DMG +8%` | - |
| `Talent 2204520` | `[255] Luck Damage` | `Lucky Strike Mult +15%` และ `+0.5` ต่อ `1% Luck` | - |
| `Talent 2208310` | `[330] Formless Flame Slash - Break` | `Lucky Strike Mult +5%` และ `+0.8` ต่อ `1% Luck` | เปิดให้ `Formless Flame Slash` ติด Lucky Strike ได้ |
| `Talent 2202570` | `[553] Luck Damage` | `Lucky Strike Mult +5%` และ `+1.5` ต่อ `1% Luck` | - |
| `Talent 2207390` | `[1338] Luck Multiplier` | `+0.5` Lucky Strike Mult ต่อ `1% Luck` | ขณะเปิด `Heroic Melody` บวกเพิ่มอีก `+0.5 * Luck%` |
| `Talent 2205680` | `[470] Kamikaze Luck` | `Lucky Strike DMG +50%` | ทุก 1 `Sharp` ที่ใช้ ฟื้นฟู `+3 Courage` |
| `Talent 2202110` | `[510] Smite Spec` | `Lucky Strike DMG +50%` | แปลงดาเมจ `45%` เป็นฮีลให้เป้าหมายที่มี `Symbiotic Mark` |
| `Talent 2204640` | `[267] Quick Chant` | `Haste +2,500` | ขณะเปิด `Permafrost` บวก `Casting SPD +15%` |
| `Talent 2201720` | `[970] Rock Mastery` | `Mastery +6,250` | ขณะเปิด `Brave Bastion` บวก `Mastery +8%` |
| `Talent 2201710` | `[969] Rock Luck` | `Luck +5%` | สกิล `Countercrush` มีโอกาส `Crit +50%` |
| `Talent 2200560` | `[154] Advancement` | `Mastery +6%` | - |
| `Talent 2204680` | `[271] Intellect Amp` | `Intellect +5%` | - |
| `Imagine 3210180` | `[3969] Igoreus Passive` | `{p1}`: `Crit DMG +5.6%..14%` ถาวร | `{p2}`: เมื่อติด Crit มีโอกาส `Crit%` ได้รับ `Crit DMG +1.66%..4.2%` ซ้อน 5 ชั้น นาน 2s + สกิลกดใช้ Active 20s |
| `Factor 3057040` | `[202181] Beat Performer Factor` | `{p2}`: `MATK +1.95%..9.00%` ถาวร | `{p1}`: ลดฮีล `Peaceful Tune` ลง `5%..32%` และได้ `8 Illusion Energy/s` ขณะเปิด `Heroic Melody` |
| `Module 2406` | `Team Luck & Crit Lv.5/6` | บวก `Crit DMG` & `Luck DMG` เมื่อเปิด `luckyCritEnabled` | ตรวจสอบจาก `moduleSlots` โดยตรงโดยไม่บวกซ้ำกับ `luckyCritEnabled` |

---

## 2. สมการการคำนวณความเสียหายและฮีลในแต่ละ Tick (`Combat Damage & Healing Equations`)

1. **พลังโจมตีสุทธิ ณ วินาทีที่ $t$ (`ActiveATK(t)`):** คำนวณจาก `BaseATK` บวกค่าแปลงจาก `MainStat(t)` ที่ได้รับบัฟชั่วคราวในไฟต์ (เช่น *Boyce*, *Brigand Leader*, *Muku Scout*, *Sharp*, *Dreamforce*, *Endless Mind*, *Stat Resonance*) แล้วคูณด้วย `% ATK Bonus` ในไฟต์
2. **ตัวคูณสกิลและโบนัสคงที่ (`SkillMult(H)` & `SkillFlat(H)`):** ดึงจากอาร์เรย์ 7 ระดับ (`G0..G6`) และ 30 เลเวล (`Lv.1..30`) ของแต่ละฮิตย่อยใน `skills.json` / `game-data.json` หากเป็นสกิลลูกที่ระบุว่าสเกลตามระดับของสกิลแม่ (เช่น *Falcon Strike* 150% ATK สเกลตาม Basic Attack) จะคูณด้วยอัตราส่วน $\text{TierMult}(\text{Parent}, G) / \text{TierMult}(\text{Parent}, 0)$
3. **การหักลบเกราะมอนสเตอร์และการเจาะเกราะ (`DefMitigation(H, t)`):** คำนวณเกราะมอนสเตอร์หลังหักลบ `% Armor Ignore` จากโมดูล `Strength Boost`, โหนด Talent (*Falcon's Heart*, *Falcon Break*, *Break Slash*, *Lucky Blade Combo*, *Break Style*), เซ็ตอุปกรณ์ 2/4 ชิ้น, และ Psychoscope (*Cross the Mirage*, *Phantom Pierce*)
4. **ตะกร้าตัวคูณความเสียหาย 6 ตะกร้า (`Multiplier Buckets`):**
   * `Physical / Magical Boost Bucket`: ค่าจาก `DerivedStats` + อาวุธทอง Far Sea ช่องที่ 4 (`2401020`..`2409040` บวก `+5%..8%` ขณะบัฟทำงาน) + โหนด Psychoscope `Mastery Boost` (`5501`)
   * `Elemental & Mastery Bucket`: โบนัสธาตุประจำสกิล + บัฟธาตุในไฟต์ + โบนัสจาก `Mastery %` ประจำสายอาชีพ
   * `Additive Damage Bonus Bucket`: รวม `Boss DMG%` + โมดูล (`Elite Strike` +6.6%, `Special Attack` +12%, `Agility/Intellect Boost` +6%, `DMG Stack` +2.75% x4 ชั้น) + อาหาร (`cookingEliteDamagePercent` +10%) + อาวุธทอง Far Sea ช่องที่ 3 (`2400003`/`2400004` +8%) + โบนัสเซ็ตอุปกรณ์ (`Suit 100..103`) + บัฟกดใช้ของ Imagine (*Rorola*, *Boarrier Tyrant*, *Shadow Captain*, *Goblin Chief*, *Denvel*) + ดีบัฟ `Vulnerability` บนตัวบอส
   * `Versatility Bucket`: $1 + \text{versatilityDamageBonusPercent} / 100$
   * `Illusion-Breaking Damage Bucket`: คำนวณโบนัส `Illusion-Breaking DMG +%` จากโหนด Psychoscope, Bond Points Lv.6, และ Factors (G1–G10) ที่ตรงกับสกิลนั้น
   * `Final Damage Multiplier Bucket`: คูณแยกสำหรับโหนดที่ระบุว่าเป็น `Final DMG`
5. **การคำนวณ Critical Hit และ Lucky Strike (`Crit & Luck EV + Procs`):**
   * คำนวณ `Crit Rate %` และ `Crit DMG %` ณ วินาทีนั้น (รองรับท่าที่ Guaranteed Crit 100%, ท่าที่ Cannot Crit 0%, และการแปลง Excess Crit เป็น Crit DMG จาก *Igoreus*, *Overload Crit*, *Iaido Mastery*, *Instantaneous Crit*)
   * คำนวณการเกิด Lucky Strike และทริกเกอร์ **Luck Effect Procs** (*Thunderstrike*, *Spear Thrust*, *Frost Comet*, *Brigand Leader Burn*, *Storm Goblin King Meteor*, *Goblin Warrior Arrow*, *Lizardman Hunter Thunder*, *Killer Arachnocrab*, *Fantasia Impact*) ตาม Internal Cooldown (ICD) จริง

---

## 3. การออกแบบตัวเปรียบเทียบหลายบิลด์ (`buildComparatorEngine.ts`)

1. ดึงรายการบิลด์ทั้งหมดจาก `PlanManager` (`loadPlans()`) และบิลด์ที่กำลังเปิดอยู่ในหน้าจอปัจจุบัน
2. รัน `runCombatSimulation()` ให้ทุกบิลด์ภายใต้เงื่อนไขการต่อสู้เดียวกัน
3. สรุปตารางจัดอันดับ (`BuildComparisonReport`) ชี้วัดว่าบิลด์ไหนทำ **Effective DPS / HPS / Burst Window Damage** สูงที่สุด พร้อมแยกแยะสาเหตุที่ชนะอย่างละเอียด