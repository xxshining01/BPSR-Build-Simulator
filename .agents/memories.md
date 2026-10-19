# Project Long-Term Memories — BPSR Build & Combat Simulator

## 1. Architectural & System Decisions

- [2026-10-18] **Hybrid Image Asset Pipeline:** ดาวน์โหลดรูปไอคอนเป็น `.webp` เก็บใน `/public/assets/<category>/<id>.webp` เป็นหลัก และเก็บ `iconRemoteUrl` ไว้เป็น Fallback ใน `<GameIcon />` (ใส่ `referrerPolicy="no-referrer"` กันติด 403 Forbidden)
- [2026-10-18] **Spec-Locked Build Comparison:** หน้าเปรียบเทียบบิลด์ (Compare Mode) บังคับให้เทียบได้เฉพาะสายอาชีพย่อย (`specId`) เดียวกันเท่านั้น (เช่น `Falconry` vs `Falconry` ห้ามเทียบ `Falconry` vs `Wildpack`)
- [2026-10-18] **5-Minute Auto-Rotation Simulator:** จำลองการต่อสู้ 300 วินาที (6,000 Ticks @ 50ms) บน Web Worker โดยมี Toggle เปิด/ปิด `Ultimate`, `Imagine 1`, `Imagine 2` และคำนวณด้วย Expected Value (EV) เป็นค่าเริ่มต้น
- [2026-10-19] **Git & Repository Management:** เชื่อมต่อโปรเจกต์กับ `https://github.com/xxshining01/BPSR-Build-Simulator.git` เรียบร้อยแล้ว โดยตั้งค่า `.gitignore` ให้ข้าม `node_modules/`, `src/data/_external_repos/` และ `src/data/_raw_dumps/` เพื่อป้องกันปัญหา Nested Git Submodule และไฟล์ขนาดใหญ่เกินพิกัด

---

## 2. Validated Data Sources & Extraction Pipeline

- [2026-10-19] **Primary Master Data Source (`alalwww/bpsr-build-planner`):**
  - ค้นพบและ Clone โปรเจกต์ `bpsr-build-planner` มาไว้ใน `src/data/_external_repos/bpsr-build-planner/` ซึ่งมีข้อมูล ZTable ที่สกัดจากตัวเกมจริงครบ 100% ในโฟลเดอร์ `src/data/*.json`[cite: 6] ได้แก่:
    - `classes.json`, `skills.json`, `skill-fight-values.json`, `skill-rank-fight-values.json`, `talent-tree.json`[cite: 6]
    - `equipment.json` (12.6 MB), `suits.json`, `refine.json`, `enchants.json`[cite: 6]
    - `battle-imagines.json` (73 ตัว)[cite: 6]
    - `season-talents.json` (Deep Slumber Psychoscope), `phantom-factors.json` (Factor G1-G10)[cite: 6]
    - `modules.json`, `player-levels.json`, `season-constants.json`[cite: 6]
  - พจนานุกรมแปลรหัส ID เป็นชื่อและคำอธิบายภาษาอังกฤษทั้งหมดอยู่ที่ `src/locales/en_US/game-data.json` (3.5 MB)[cite: 6]
- [2026-10-19] **Secondary Reference Sources:**
  - `fudiyangjin/StarResonanceAutoMod` (`module_types.py` สำหรับรหัส Module ทั้ง 21 ชนิดและเกณฑ์แต้ม `1, 4, 8, 12, 16, 20`)[cite: 6]
  - `asgharkapk/star-resonance-module-optimizer` (Preset โมดูลและ URL ไอคอนจาก Maxroll)[cite: 6]
  - `donneeee/resonance-logs-global` (`parser-data/` สำหรับตารางตัวคูณดาเมจสกิล `SkillFightLevelTable.json`, `SkillEffectTable.json` และ `SkillCooldowns.json` สำหรับทำ 5-Minute Simulator)
  - `maxroll.gg/blue-protocol/planner` (`07_loader-98169fad.js` และ `08_sr-texts-en_US-bcd8bbf7.js` 52,307 รายการคำแปล)[cite: 6]

---

## 3. Verified Game Mechanics & Mathematical Constants (จาก ZTable & `STATUS_CALCULATION.md`)

- [2026-10-19] **Diminishing Returns Formula & Season Constants:**
  - สมการแปลงแต้มเป็น %: `Stat% = base% + 100 * real / (real + K)`[cite: 6]
  - ค่าคงที่ `K` ปัจจุบัน (Season 3): `K_A = 50000` (Crit, Haste, Luck, Mastery, Block), `K_B = 28000` (Versatility), `K_C = 11000` (PHY/MAG Boost, Element Bonus/Res), `K_D = 22000` (Armor, Resistance, Refined Armor)[cite: 6]
  - ค่า `base%`: Crit = `5%`, Luck = `5%`, Mastery = `6%`, Haste = `0%` (ปรับแก้ตามผลทดสอบจริงใน S3), Block = `0%`, Versatility = `0%`[cite: 6]
- [2026-10-19] **Core Stat Conversions & Truncation Rules:**
  - การแปลงค่า Main Stat -> ATK/MATK และ Haste ต้องคำนวณแยกส่วนระหว่าง Base Rate กับ R1 Talent Bonus Rate แล้วปัดเศษทศนิยมทิ้ง (`Math.floor`) แยกกันก่อนนำมาบวกกัน (`convertBySeparatelyTruncatedRates`)[cite: 6]
  - `Agility` แปลงเป็นแต้ม `Haste` ที่อัตรา `0.8 pt` ต่อ 1 Agility ทุกคลาส[cite: 6]
  - `Lucky Strike Multiplier` มีค่าพื้นฐาน `40% + 0.25 * Luck%` (บวกโบนัสอัตราส่วนจากโหนด R2 ของแต่ละอาชีพ)[cite: 6]
  - `Versatility` คูณแยกอิสระ (Multiplicative) โดยเพิ่มดาเมจ/ฮีล/เกราะ `Versatility% * 0.35` และลดดาเมจที่ได้รับ `Versatility% * 0.15`[cite: 6]
- [2026-10-19] **Equipment, Perfection & Enchants (Sigils):**
  - ช่องอุปกรณ์ใช้รหัส Part ID `200` (อาวุธ) ถึง `210` (เครื่องราง) รวม 11 ชิ้น[cite: 6]
  - ค่าสเตตัสตามระดับ Perfection (0-100%): `min + (max - min) * perfection / 100` (ดึงจาก `reforgeEvoMin` และ `reforgeEvoMax` โดยอาวุธมีค่าเป็น 2 เท่าของชุดเกราะ)[cite: 6]
  - ระบบ Sigil/Enchant แบ่งตาม `enchantId` (`1001-1003` เป็น Gems และ `2001-2004` / `3001-3004` เป็น Engravings 3 ระดับ: Base / Refined `精` / Perfect `極`)[cite: 6]

---

## 4. Progress Milestones

- [x] Architecture Documents (`ADR.md`, `SDD.md`, `SAD.md`)
- [x] `.agents/` Workspace, Skills (`SKILL.md`), Rules & Deep-Dive Knowledge Base (`01` - `05`)
- [x] Initialize Node.js / TypeScript (`package.json`, `tsconfig.json`) & Zod Schemas (`/src/data/schemas/`)
- [x] Setup GitHub Repository (`xxshining01/BPSR-Build-Simulator`) & `.gitignore`
- [x] Extract Raw Game Databases (`bpsr-build-planner`, `StarResonanceAutoMod`, `resonance-logs-global`, `Maxroll bundles`)
- [x] Build Relational Joiner & Human-Readable Catalog Generator (`generate_readable_lists.py` -> `Docs/catalog/01..07.md`)
- [ ] Verify Generated Catalog Lists (`Docs/catalog/01..07.md`) & Transform into `/src/data/game-db/`
- [ ] Core Stat Aggregator & Damage Calculator Engine (`/src/engine/`)
- [ ] 5-Minute Combat Rotation Web Worker (`/src/engine/simulator.worker.ts`)
- [ ] Next.js Planner UI & Spec-Locked Comparator UI
