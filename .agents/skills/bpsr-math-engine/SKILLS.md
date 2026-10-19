---
name: bpsr-math-engine
description: ใช้สกิลนี้เมื่อต้องเขียน แก้ไข หรือตรวจสอบสมการคำนวณสเตตัสตัวละครที่ Lv.60 (Idle และ Combat), การแปลงค่า Rating (Crit, Haste, Luck, Mastery, Versatility, Block) เป็น %, สมการคำนวณดาเมจ, สมการการฮีล และการรวมบัฟจากอุปกรณ์, Refine 0-30, Sigil, Imagine, Module และ Psychoscope ในโฟลเดอร์ /src/engine/
---

# BPSR Mathematical Stat & Damage Engine Skill

## ภาพรวม / วัตถุประสงค์ (Overview / Goal)
- พัฒนาและดูแล Pure TypeScript Functions ใน `/src/engine/` สำหรับคำนวณสเตตัสตัวละครที่ Lv.60 ทั้งหน้าต่างสรุป (Summary) และหน้าต่างข้อมูลเต็ม (Full Attributes) รวมถึงสมการคำนวณดาเมจและฮีลที่ถูกต้องตามกลไกเกม

## แนวทางปฏิบัติและข้อกำหนด (Instructions & Rules)
1. **Pure Function เท่านั้น:** โค้ดใน `/src/engine/` ห้าม import React, Zustand หรือ DOM API เด็ดขาด เพื่อให้รันบน Web Worker และ Unit Test ได้
2. **อ้างอิงสมการจากคลังความรู้:** ก่อนแก้ไขสูตร ต้องอ่าน `.agents/knowledge/01_combat_formulas_and_ratings.md` เสมอ
3. **ลำดับการรวมสเตตัส (Aggregation Pipeline):**
   - ขั้นที่ 1: รวม Base Stats Lv.60 ของอาชีพ + Flat Stats จากอุปกรณ์ทั้ง 11 ชิ้น + ค่า Refine (0-30) + Sigil (Lv.1-3) + Imagine Passive (Tier 0-5) + Module 5 ชิ้น + Deep Slumber Psychoscope & Factor G10 + Bond Points (3-55)
   - ขั้นที่ 2: คูณด้วย `% Passive Modifiers` (เช่น `STR %`, `INT %`, `AGI %`, `Max HP %`)
   - ขั้นที่ 3: แปลงค่า Combat Ratings (`Crit`, `Haste`, `Luck`, `Mastery`, `Versatility`, `Block`) เป็น `%` ตามสมการ Diminishing Returns ที่ Lv.60
4. **ความครบถ้วนของ Output Object:** ฟังก์ชัน `calculateCharacterStats()` ต้องคืนค่าครบทุกสเตตัสทั้งหมวด Offensive, Defensive, Support, Elemental Attack, Elemental Bonus, Element Resistance และ Other Attributes โดยห้ามมีค่า `NaN` หรือ `undefined`

## ตัวอย่าง (Examples)
- **Input:** `BuildConfiguration` Object (ระบุอาชีพ Lv.60, อุปกรณ์ 11 ชิ้น, Module 5 ชิ้น, Psychoscope) + `CombatContext` (สถานะ Idle หรือ Combat พร้อมบัฟปาร์ตี้/อาหาร/อีเว้นท์)
- **Output:**
  ```typescript
  {
    summary: { maxHp: 48500, matk: 6420, intellect: 2890, endurance: 1950, illusionBreakingStrength: 320, crit: 1450, critPct: 34.5, ... },
    fullAttributes: {
      offensive: { strength: 210, intellect: 2890, agility: 340, atk: 850, matk: 6420, refinedAtk: 0, refinedMatk: 680, phyBoostPct: 0, magBoostPct: 24.5, ... },
      defensive: { ... },
      support: { ... },
      elementalAttack: { ... },
      elementalBonus: { ... },
      elementResistance: { ... },
      other: { staminaLimit: 100, staminaRecovery: 12 }
    }
  }
  ```

## สคริปต์และทรัพยากรเสริม (Scripts & References)
- **ตาราง Mapping ชื่อตัวแปรสเตตัสทั้งหมด:** `references/stat_keys_mapping.md`
- **เครื่องมือทดสอบความถูกต้องของสมการ:** `tools/verify_stat_formula.py`