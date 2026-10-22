# Project Long-Term Memories — BPSR Build & Combat Simulator

## 1. Architectural & System Decisions

- [2026-10-18] **Hybrid Image Asset Pipeline:** ดาวน์โหลดรูปไอคอนเป็น `.webp` เก็บใน `/public/assets/<category>/<id>.webp` เป็นหลัก และเก็บ `iconRemoteUrl` ไว้เป็น Fallback ใน `<GameIcon />` (ใส่ `referrerPolicy="no-referrer"` กันติด 403 Forbidden)
- [2026-10-18] **Spec-Locked Build Comparison:** หน้าเปรียบเทียบบิลด์ (Compare Mode) บังคับให้เทียบได้เฉพาะสายอาชีพย่อย (`specId`) เดียวกันเท่านั้น (เช่น `Falconry` vs `Falconry`)
- [2026-10-19] **Git & Repository Management:** ตั้งค่า `.gitignore` เพื่อแยก `node_modules/`, `src/data/_external_repos/` และ `src/data/_raw_dumps/` ป้องกันปัญหาขนาดไฟล์เกินลิมิต
- [2026-10-20] **Talent-Driven Specialization (แต้มที่ 31):** ผู้เล่นจะเลือกแค่ "อาชีพหลัก" (9 คลาส) เท่านั้น ส่วนสายการเล่นย่อย (Spec) จะถูกกำหนดอัตโนมัติเมื่อผู้เล่นอัปโหนด `Keystone` ในผัง Talent Tree Map (แต้มที่ 31 หลังจากอัป Basic ครบ 30)
- [2026-10-20] **7-Slot Skill System:** ระบบจำลองช่องสกิลตรงตามเกมจริง 7 ช่อง แบ่งเป็น:
  - 3 ช่องล็อกตายตัว (Basic Attack คลิกซ้าย, Special Skill เลข 1, Ultimate ปุ่ม R) ซึ่งเปลี่ยนตามโหนด Talent อัตโนมัติ
  - 4 ช่องเลือกใส่ได้อิสระ (กดเลข 2, 3, 4, 5)
  - ทั้ง 7 ช่องสามารถปรับระดับเลเวล (Lv.1 - 30) และ Tier (0 - 6) ได้อย่างอิสระ
- [2026-10-20] **Battle Imagines Passive Resolution:** ระบบต้องแสดงผลโบนัสสเตตัสและบัฟที่ได้จากการ "สวมใส่" โดยคำนวณตัวเลขตามระดับ Tier 0-5 อัตโนมัติแม้จะไม่ได้กดใช้สกิล

---

## 2. Validated Data Sources & Extraction Pipeline

- [2026-10-19] **Primary Master Data Source (`alalwww/bpsr-build-planner`):**
  - ดึงข้อมูล ZTable ที่สกัดจากตัวเกมจริง 17 ไฟล์หลักเข้าสู่ `/src/data/game-db/` สำเร็จ
  - พจนานุกรมแปลรหัส ID เป็นชื่อและคำอธิบายภาษาอังกฤษอยู่ที่ `src/data/locales/en_US/game-data.json` (3.5 MB)
  - ดึงลอจิกถอดรหัสต้นฉบับเข้ามาเป็น Reference ที่ `src/engine/_reference_logic/`
- [2026-10-19] **Secondary Reference Sources:**
  - `donneeee/resonance-logs-global` (`combat-sim/*.json` สำหรับตารางตัวคูณดาเมจสกิลและ Cooldown สำหรับทำ 5-Minute Simulator)

---

## 3. Verified Game Mechanics & Mathematical Constants

- [2026-10-19] **Diminishing Returns Formula & Season Constants:**
  - สมการแปลงแต้มเป็น %: `Stat% = base% + 100 * real / (real + K)`
  - ค่าคงที่ `K` (Season 3): `K_A = 50000` (Crit, Haste, Luck, Mastery, Block), `K_B = 28000` (Versatility), `K_C = 11000` (Elemental), `K_D = 22000` (Defense)
  - ค่า `base%`: Crit = `5%`, Luck = `5%`, Mastery = `6%`, Haste = `0%` (ปรับแก้ตามผลทดสอบ S3), Block = `0%`
- [2026-10-19] **Core Stat Conversions & Truncation Rules:**
  - การแปลงค่า Main Stat -> ATK/MATK และ Haste ต้องปัดเศษทศนิยมทิ้ง (`Math.floor`) แยกส่วนระหว่าง Base Rate กับ R1 Talent Bonus Rate
  - `Lucky Strike Multiplier` = `40% + 0.25 * Luck%`
  - `Versatility` = เพิ่มดาเมจ/ฮีล/เกราะ `Versatility% * 0.35` และลดดาเมจที่ได้รับ `Versatility% * 0.15`

---

## 4. Progress Milestones

- [x] Architecture Documents (`ADR.md`, `SDD.md`, `SAD.md`)
- [x] `.agents/` Workspace, Skills (`SKILL.md`), Rules & Deep-Dive Knowledge Base
- [x] Extract Raw Game Databases (`bpsr-build-planner`, `resonance-logs-global`)
- [x] Build Relational Joiner & Human-Readable Catalog Generator (`Docs/catalog/01..07.md`)
- [x] Integrate Verified Game DB & Locales (`src/data/game-db/`)
- [x] Core Stat Aggregator & Damage Calculator Engine (`/src/engine/stat-aggregator.ts`)
- [x] 5-Minute Combat Rotation Simulator (`/src/engine/combat-simulator.ts`)
- [x] Zustand Store with Save/Load & Spec-Locked Compare (`/src/store/useBuildStore.ts`)
- [x] Interactive SVG Talent Tree Map Component (`/src/components/TalentTreeDiagram.tsx`)
- [x] Next.js App Router UI (`/src/app/page.tsx`) with Zero TypeScript Errors
