---
name: bpsr-combat-simulator
description: ใช้สกิลนี้เมื่อต้องสร้างหรือปรับปรุงระบบ 5-Minute Auto-Rotation Skill Simulator (Web Worker), ลอจิกการกดสกิลออโต้, การจัดการ Cooldown/Cast Time/Animation Lock, การเปิด/ปิด Ultimate และ Imagine 1-2, และการคำนวณตารางสถิติ DPS, HPS, Average Buff % และอัตราการมีส่วนร่วมของแต่ละสกิล (% Contribution)
---

# BPSR 5-Minute Combat Rotation Simulator Skill

## ภาพรวม / วัตถุประสงค์ (Overview / Goal)
- จำลองการต่อสู้แบบเล่นออโต้เป็นเวลา 5 นาที (300 วินาที) บน Web Worker เพื่อคำนวณ Total DMG, DPS, Total Heal, HPS, Average Buff % และแจกแจงรายละเอียดทุกแอคชั่นที่เกิดขึ้นตลอดการต่อสู้

## แนวทางปฏิบัติและข้อกำหนด (Instructions & Rules)
1. **มาตรฐานเวลาและ Tick:** ใช้ระยะเวลาจำลอง `300,000 ms` (300 วินาที) โดยเดินเวลาทีละ `50 ms` (รวม 6,000 Ticks)
2. **เคารพ Toggle ของผู้ใช้:** ตรวจสอบตัวแปร `useUltimate`, `useImagine1`, `useImagine2` ก่อนนำสกิลเหล่านั้นเข้าสู่คิวการกดเสมอ
3. **การคิดความเร็วร่ายและโจมตี:**
   - เวลาร่าย (`castTime`) ต้องถูกหารด้วย `(1 + castSpdPct / 100)`
   - เวลาออกท่าโจมตี (`animationLock`) ต้องถูกหารด้วย `(1 + attackSpdPct / 100)`
   - Cooldown ของสกิลที่ได้รับผลจาก Haste ต้องถูกปรับลดตามสมการ Haste ของเกม
4. **การบันทึกสถิติแยกตามแหล่งที่มา:** ทุกดาเมจ, ฮีล และบัฟ ต้องระบุประเภทแหล่งที่มาอย่างชัดเจน ได้แก่ `basic` (โจมตีปกติ), `active` (สกิลกด), `passive` (สกิลติดตัว), `talent_proc` (สกิลเสริมจาก Talent), `ultimate` (ท่าไม้ตาย), และ `imagine` (สกิลกดจาก Imagine)
5. **การคำนวณ % Contribution:**
   - `damageSharePct` ของทุกสกิลรวมกันต้องได้ `100.0%`
   - `healSharePct` ของทุกสกิลที่ฮีลรวมกันต้องได้ `100.0%`
   - `buffContributionPct` คำนวณจาก `(Time-Weighted Buff Value ของสกิลนั้น / Sum of All Time-Weighted Buff Values) * 100`

## ตัวอย่าง (Examples)
- **Input:** `CalculatedCombatStats` + `SkillLoadout` + `TalentNodes` + `SimToggles { useUltimate: true, useImagine1: true, useImagine2: false }`
- **Output (`SimulationResult`):**
  ```json
  {
    "durationSeconds": 300,
    "totalDamage": 18450000,
    "dps": 61500,
    "totalHeal": 1200000,
    "hps": 4000,
    "averageBuffPct": 28.4,
    "actionsBreakdown": [
      {
        "actionId": "skill_falcon_dive",
        "name": "Falcon Dive",
        "sourceCategory": "talent_proc",
        "castCount": 94,
        "totalDamage": 5535000,
        "dps": 18450,
        "damageSharePct": 30.0,
        "totalHeal": 0,
        "hps": 0,
        "healSharePct": 0.0,
        "avgBuffPct": 5.2,
        "buffContributionPct": 18.3
      }
    ]
  }
  ```

## สคริปต์และทรัพยากรเสริม (Scripts & References)
- **กฎการจัดลำดับ Priority การกดสกิลออโต้ของแต่ละสายอาชีพ:** `references/rotation_priority_rules.md`