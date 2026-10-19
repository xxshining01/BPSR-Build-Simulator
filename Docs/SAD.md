# Software Architecture Document (SAD) — v2.0
**Project:** Blue Protocol: Star Resonance (BPSR) Build & Combat Simulator

---

## 1. ภาพรวมสถาปัตยกรรมและ Tech Stack (Architecture Overview)
ระบบถูกแบ่งออกเป็น 3 ส่วนหลักที่ทำงานสอดประสานกัน:
1. **Offline Data & Asset Ingestion Pipeline (Python):** ระบบดูดข้อมูลดิบจากแหล่งอ้างอิง (Maxroll Network JSON, Bilibili Wiki, Game Data Tables) แปลงเข้าสู่โครงสร้างมาตรฐาน พร้อมดาวน์โหลดและบีบอัดรูปไอคอนเป็น `.webp`
2. **Client-Side Application & Simulation Engine (Next.js + Web Workers):** หน้าเว็บจัดบิลด์ที่คำนวณสเตตัส Lv.60 แบบ Real-time (< 2ms) และจำลองการต่อสู้ออโต้ 5 นาทีบน Background Thread
3. **Agentic Development Workspace (`.agents/`):** โครงสร้างควบคุม AI Agent ที่แยก `skills/`, `rules/`, `tools/` และ `knowledge/` เพื่อให้ AI สร้างและดูแลโค้ดตามกลไกเกมจริง

### Tech Stack
* **Frontend & App Router:** Next.js 15+ (App Router), React 19, TypeScript 5.6+ (Strict Mode)
* **UI & Styling:** Tailwind CSS, shadcn/ui, Radix UI, Lucide Icons, Recharts (กราฟ DPS/Contribution)
* **State Management:** `Zustand` + `immer` (จัดการ Nested Build State) + `persist` (LocalStorage)
* **Schema & Validation:** `Zod` (ใช้ร่วมกันระหว่าง Data Pipeline และ Runtime Engine)
* **Simulation Threading:** Web Workers API (รันลูป 5-Minute Combat Simulation 6,000 Ticks)
* **Data & Asset Scraper:** Python 3.11+, Playwright, HTTPX, BeautifulSoup4, Pillow (WebP Converter)
* **Cloud Build Storage (Optional):** Supabase (PostgreSQL) + Prisma ORM

## 2. แผนผังสถาปัตยกรรมระบบรวม (Integrated System Diagram)

```text
+---------------------------------------------------------------------------------------------------+
|                        1. OFFLINE DATA & HYBRID ASSET PIPELINE (Python)                           |
|                                                                                                   |
|  [Maxroll Planner] ---> (intercept_planner_json.py) ---+                                          |
|  [Bilibili Wiki]   ---> (build_database.py) -----------+--> Validate via Zod Schema               |
|  [NGA / Sheets]    ---> (Formula Constants) -----------+          |                               |
|                                                                   v                               |
|                         +-----------------------------------------+----------------------------+  |
|                         |                                                                      |  |
|                         v (JSON Master DB)                                 v (WebP Conversion) |  |
|             [/src/data/game-db/*.json]                            [/public/assets/**/*.webp]   |  |
|             (Includes `icon` + `iconRemoteUrl`)                   (Local Self-Hosted Icons)    |  |
+-------------------------+--------------------------------------------------+-------------------+  |
                          |                                                  |
==========================|==================================================|======================
                          v                                                  v
+---------------------------------------------------------------------------------------------------+
|                             2. CLIENT BROWSER RUNTIME (Next.js App)                               |
|                                                                                                   |
|  +----------------------------------------------------+     +----------------------------------+  |
|  |                 Planner UI Views                   |     |      <GameIcon/> Component      |  |
|  | (Class, Talents, 11 Gears, 5 Modules, Psychoscope) |     |  1st: Load Local `/assets/*.webp`|  |
|  +-------------------------+--------------------------+     |  2nd: Fallback `iconRemoteUrl`   |  |
|                            |                                |       with `no-referrer` policy  |  |
|                            v                                +----------------------------------+  |
|  +----------------------------------------------------+                                           |
|  |         Zustand Build Store (useBuildStore)        |                                           |
|  +---------+-------------------------------+----------+                                           |
|            | (Sync < 2ms)                  | (Async Message)                                      |
|            v                               v                                                      |
|  +-----------------------+       +-------------------------------------------------------------+  |
|  | Stat Aggregator       |       |            Web Worker (`simulator.worker.ts`)               |  |
|  | & Damage Calculator   |       |  - 300s (6,000 Ticks @ 50ms) Auto-Rotation State Machine    |  |
|  | (Idle & Combat Lv.60) |       |  - Toggles: [Ultimate] [Imagine 1] [Imagine 2]              |  |
|  +-----------+-----------+       +-----------------------------+-------------------------------+  |
|              |                                                 |                                  |
|              v                                                 v                                  |
|  +-----------------------+       +-------------------------------------------------------------+  |
|  | 2-Tab Attributes UI   |       |              Simulation & Spec-Locked Comparator            |  |
|  | 1. Summary Window     |       |  - Total DMG/DPS, Total Heal/HPS, Avg Buff %                |  |
|  | 2. Full Attributes    |       |  - Per-Skill Contribution % (Basic/Active/Passive/Imagine)  |  |
|  +-----------------------+       |  - Compare Mode (Enforces BuildA.specId === BuildB.specId)  |  |
|                                  +-------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
```

## 3. สถาปัตยกรรมระบบจัดการข้อมูลและรูปภาพ (Data & Hybrid Asset Architecture)
Dual-Path Icon Resolution:
ข้อมูลไอเทม, สกิล, Talent, Imagine, Sigil, Factor G10 และ Module ทุกชิ้นใน JSON จะเก็บ Path รูปภาพ 2 ฟิลด์เสมอ:
"icon": ชี้ไปยังไฟล์ในโปรเจกต์ เช่น "/assets/sigils/sigil_101.webp"
"iconRemoteUrl": ลิงก์ต้นทางจาก CDN อ้างอิง
คอมโพเนนต์ <GameIcon /> จะเรียก "icon" ก่อนเสมอเพื่อให้โหลดเร็วและรองรับการ Export บิลด์เป็นรูปภาพ (Canvas) แต่หากไฟล์ในเครื่องยังไม่ได้ดาวน์โหลด จะสลับไปใช้ "iconRemoteUrl" พร้อมแนบ referrerPolicy="no-referrer" เพื่อป้องกันการถูกบล็อก 403 Forbidden
Build-Time Schema Gatekeeper:
ทุกครั้งที่รันสคริปต์ Python ดูดข้อมูลเสร็จ ระบบจะรัน .agents/tools/validate_game_db.ts เพื่อตรวจว่า JSON ทุกไฟล์ตรงกับ Zod Schema 100% ก่อนอนุญาตให้นำขึ้นระบบ

## 4. โครงสร้างไดเรกทอรีทั้งหมดของโปรเจกต์ (Full Repository Tree)
```text
bpsr-simulator/
├── .agents/                                  # [AI Agentic Workspace Standard]
│   ├── agents.md                             # Core Persona & Orchestration Protocol
│   ├── config.yaml                           # Model Config, Permissions & Tool Bindings
│   ├── memories.md                           # Long-term Project State & Decisions Log
│   ├── .agentignore                          # ไฟล์ที่ห้าม Agent อ่านเพื่อประหยัด Token
│   ├── skills/                               # ความสามารถเฉพาะทาง (Modular Skills)
│   │   ├── bpsr-data-scraper/
│   │   │   ├── SKILL.md
│   │   │   ├── scripts/
│   │   │   │   ├── extract_maxroll_master_db.py    # 1. ดึง JSON ทั้งหมดจากหน้าเว็บ Maxroll Planner[cite: 1]
│   │   │   │   ├── fetch_github_repos_data.py      # 2. Clone ข้อมูล Module/Log จาก GitHub Repos
│   │   │   │   ├── build_database.py               # 3. แปลงไฟล์ดิบทั้งหมดเข้า /src/data/game-db/ + โหลดรูป .webp[cite: 1]
│   │   │   │   └── requirements.txt                # รายการ Python Libraries ที่ต้องใช้
│   │   │   └── references/
│   │   │       └── source_endpoints.md
│   │   ├── bpsr-math-engine/
│   │   │   ├── SKILL.md
│   │   │   └── references/
│   │   │       └── stat_keys_mapping.md
│   │   ├── bpsr-combat-simulator/
│   │   │   ├── SKILL.md
│   │   │   └── references/
│   │   │       └── rotation_priority_rules.md
│   │   └── bpsr-planner-ui/
│   │       ├── SKILL.md
│   │       └── assets/
│   │           └── component_template.tsx
│   ├── tools/                                # Custom Function Calling Scripts สำหรับ Agent
│   │   ├── validate_game_db.ts               # ตรวจสอบความถูกต้องของ JSON ทั้งหมดด้วย Zod
│   │   └── verify_stat_formula.py            # ทดสอบสมการคำนวณเทียบกับค่าจริงในเกม
│   ├── rules/                                # Guardrails & Coding Standards
│   │   ├── architecture_guardrails.md
│   │   ├── zero_hallucination.md
│   │   └── style_guide.md
│   ├── prompts/                              # Prompt Templates สำหรับสั่งงานซ้ำ
│   │   ├── ingest_new_class.txt
│   │   └── audit_dps_formula.txt
│   └── knowledge/                            # คลังความรู้กลไกเกม BPSR ทั้งหมด
│       ├── 01_combat_formulas_and_ratings.md
│       ├── 02_classes_talents_and_skills.md
│       ├── 03_equipment_refine_and_sigils.md
│       ├── 04_imagines_modules_psychoscopes.md
│       └── business_glossary.md
├── docs/                                     # เอกสารสถาปัตยกรรมระบบ
│   ├── ADR.md
│   ├── SDD.md
│   └── SAD.md
├── public/
│   └── assets/                               # ไฟล์รูป .webp ที่ดึงมาเก็บในโปรเจกต์
│       ├── skills/
│       ├── talents/
│       ├── equipments/
│       ├── sigils/
│       ├── imagines/
│       ├── factors/
│       ├── psychoscopes/
│       └── modules/
└── src/
    ├── app/                                  # Next.js App Router (Planner & Compare Pages)
    ├── components/
    │   ├── common/GameIcon.tsx               # Hybrid Local WebP + Remote Fallback Icon
    │   ├── planner/                          # UI จัดบิลด์ (Class, Gear 11 ชิ้น, Module, Deep)
    │   ├── stats/                            # หน้าต่างสเตตัส 1.สรุป และ 2.Attributes (ข้อมูลเต็ม)
    │   ├── simulator/                        # แผงควบคุม 5-Min Sim & ตารางแจกแจง % สกิล
    │   └── compare/                          # หน้าต่างเปรียบเทียบบิลด์ในสาย Talent เดียวกัน
    ├── data/
    │   ├── _raw_dumps/                       # ไฟล์ JSON ดิบจากการดักจับ (อยู่ใน .agentignore)
    │   ├── schemas/                          # Zod Schemas
    │       ├── common.schema.ts              # 1. สเตตัสทั้งหมด (Summary & Full Attributes), ธาตุ, รูปไอคอน และ Modifier
    │       ├── class-talent.schema.ts        # 2. อาชีพทั้ง 9 (18 สาย), สกิล (Lv/Tier) และผังโหนด Talent Tree Map
    │       ├── equipment.schema.ts           # 3. อุปกรณ์ 11 ชิ้น, Perfection 0-100, เซ็ต NPC, อาวุธพิเศษ, Refine 0-30, Sigils
    │       ├── imagine.schema.ts             # 4. Battle Imagines (Tier 0-5) และแต้ม Bond Points ตามความแรร์
    │       ├── module.schema.ts              # 5. Modules 5 ช่อง, 21 Link Effects จริง และเกณฑ์แต้ม Lv.1-6
    │       ├── psychoscope.schema.ts         # 6. Deep Slumber Psychoscope 8 สาย, ผังโหนด, Factor G10 และ Bond 3-55
    │       ├── user-build.schema.ts          # 7. โครงสร้างไฟล์เซฟบิลด์ของผู้ใช้, กฎ Compare และผลลัพธ์ 5-Min Simulator
    │       └── index.ts                      # 8. จุดรวม Export ทั้งหมด
    ├── game-db/                          # ข้อมูลเกมที่ Clean แล้วพร้อมใช้งาน
    ├── engine/                               # Pure TS Calculation & Web Worker Simulator
    └── store/                                # Zustand State Store
```
