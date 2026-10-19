# Project Long-Term Memories — BPSR Build & Combat Simulator

## Architectural & System Decisions
- [2026-10-18] **Hybrid Image Asset Pipeline:** ดาวน์โหลดรูปไอคอนเป็น `.webp` เก็บใน `/public/assets/<category>/<id>.webp` เป็นหลัก และเก็บ `iconRemoteUrl` ไว้เป็น Fallback ใน `<GameIcon />` (ใส่ `referrerPolicy="no-referrer"` กันติด 403 Forbidden)
- [2026-10-18] **Spec-Locked Build Comparison:** หน้าเปรียบเทียบบิลด์ (Compare Mode) บังคับให้เทียบได้เฉพาะสายอาชีพย่อย (`specId`) เดียวกันเท่านั้น (เช่น `Falconry` vs `Falconry` ห้ามเทียบ `Falconry` vs `Wildpack`)
- [2026-10-18] **5-Minute Auto-Rotation Simulator:** จำลองการต่อสู้ 300 วินาที (6,000 Ticks @ 50ms) บน Web Worker โดยมี Toggle เปิด/ปิด `Ultimate`, `Imagine 1`, `Imagine 2` และคำนวณด้วย Expected Value (EV) เป็นค่าเริ่มต้น

## Game Mechanics & Data Source Standards
- [2026-10-19] **3-Stage Data Scraping Pipeline:**
  1. `extract_maxroll_master_db.py`: ดัก Network JSON และ `window` state จากหน้า `maxroll.gg/blue-protocol/planner` (เลิกใช้ `intercept_planner_json.py` ตัวเก่า)[cite: 1]
  2. `fetch_github_repos_data.py`: Clone ซอร์สโค้ดและตารางข้อมูลจาก GitHub (`fudiyangjin/StarResonanceAutoMod`, `asgharkapk/star-resonance-module-optimizer`, `donneeee/resonance-logs-global`) เก็บใน `src/data/_external_repos/` (และใส่ใน `.agentignore`)
  3. `build_database.py`: รวมข้อมูลดิบ แปลงเข้า Zod Schema ลง `/src/data/game-db/` และแปลงรูปเป็น `.webp`[cite: 1]
- [2026-10-19] **Complete 9 Classes (18 Specializations):** รองรับครบทั้ง 9 อาชีพ ได้แก่ `Twin Striker` (Berserker / Executioner), `Marksman` (Falconry / Wildpack), `Spellcaster` (Icicle / Frostbeam), `Wind Knight` (Gale / Tempest), `Blade Warden` (Iaido / Twinflow), `Heavy Guardian` (Bastion / Crag), `Shield Knight` (Aegis / Judgement), `Verdant Oracle` (Lifebloom / Thornvine), และ `Beat Performer` (Resonance / Harmony)
- [2026-10-19] **Equipment System Rules:** รองรับ 11 ช่องสวมใส่, ค่า `Perfection (0-100)`, การตีบวก `Refine (0-30)`, การฝัง `Sigil (Emblem Lv.1-3)`, ตารางล็อกสเตตัสที่หาไม่ได้แยกตามสาย `STR/AGI/INT`, ออปชันม่วง (`Purple Bonus Stat` สำหรับของนอกเซ็ต) และอุปกรณ์เซ็ต NPC ที่ล็อกชนิดสเตตัสแต่ให้แต้มทะลุหลอด (Over-capped) พร้อมเอฟเฟกต์เซ็ต 2/4 ชิ้น[cite: 1]
- [2026-10-19] **Module System (21 Real Link Effects):** ติดตั้ง 5 Slots, แบ่งเป็น 3 หมวด (`Assault`, `Support`, `Guardian`), เลือกได้ 3 แถวต่อชิ้น (แต้ม 1-10)[cite: 2] มี Basic Link 13 ชนิด (ออกได้ทุกแถว) และ Special Link ซีรีส์ `极` 8 ชนิด (ออกเฉพาะแถวที่ 1)[cite: 2] ปลดล็อก Link Lv.1-6 ที่แต้มรวม `1 / 4 / 8 / 12 / 16 / 20`
- [2026-10-19] **Imagines & Deep Slumber Psychoscope Separation:**
  - *Battle Imagines (ใส่ปกติ 2 ช่อง Tier 0-5):* ให้ทั้ง Passive Stats ติดตัว และ Active Skill กดใช้ในการต่อสู้[cite: 1]
  - *Deep Slumber Psychoscope (8 สาย):* แยกเป็น (A) การอัปเลเวล Psychoscope เพื่อเดินโหนด Tree Map และปลดล็อกช่องใส่ `Factor G10` ทั้ง 5 ประเภท (`Polarity`, `Stasis`, `Inspiration`, `Reality`, `Class Stasis`) และ (B) การใส่ Imagine สูงสุด 5 ตัวในช่อง Bond เพื่อคำนวณแต้ม `Bond Points (3-55)` ตามความแรร์และ Tier เพื่อปลดล็อก Bond Buff Effect[cite: 1]

## Progress Milestones
- [x] Architecture Documents (`ADR.md`, `SDD.md`, `SAD.md`)
- [x] `.agents/` Workspace, Skills (`SKILL.md`), Scraper Scripts & Deep-Dive Knowledge Base (`01` - `05`)
- [x] Zod Schemas (`/src/data/schemas/`) — *Completed on 2026-10-19*
- [ ] Run Data Scraper Pipeline & Populate `/src/data/game-db/`
- [ ] Core Stat Aggregator & Damage Calculator Engine (`/src/engine/`)
- [ ] 5-Minute Combat Rotation Web Worker (`/src/engine/simulator.worker.ts`)
- [ ] Next.js Planner UI & Spec-Locked Comparator UI