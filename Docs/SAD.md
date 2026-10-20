# System Architecture Document (SAD)

**Project:** Blue Protocol: Star Resonance — Build & Combat Simulator  
**Version:** 2.0.0 (Synchronized with Actual Repository Structure)  
**Last Updated:** 2026-10-20

---

## 1. ภาพรวมสถาปัตยกรรมระบบ (System Overview)

ระบบถูกออกแบบโดยแบ่งแยกชั้นข้อมูลและหน้าที่อย่างชัดเจน (Layered Clean Architecture) ออกเป็น **5 ชั้นหลัก (5 Layers)** เพื่อให้การคำนวณสเตตัสและดาเมจมีความแม่นยำตามข้อมูล ZTable จากตัวเกมจริง 100%:

1. **Data & Scraping Pipeline Layer (`.agents/skills/bpsr-data-scraper/scripts/`):** ชุดสคริปต์ Python สำหรับดึงข้อมูลดิบจาก Repository อ้างอิง (`bpsr-build-planner`, `resonance-logs-global`, `StarResonanceAutoMod`), ตรวจสอบความครบถ้วนของข้อมูล, สร้างแคตตาล็อก (`Docs/catalog/`), และนำเข้าฐานข้อมูลที่ตรวจสอบแล้วเข้าสู่โปรเจกต์
2. **Verified Game Database & Schema Layer (`/src/data/`):** จัดเก็บไฟล์ฐานข้อมูล ZTable JSON ทั้ง 17 ไฟล์หลัก (`/src/data/game-db/`), ตารางจำลองการต่อสู้ (`/src/data/game-db/combat-sim/`), พจนานุกรมภาษาอังกฤษ (`/src/data/locales/en_US/`), และ Zod Schemas ทั้ง 7 หมวด (`/src/data/schemas/`)
3. **Core Calculation & Simulation Engine Layer (`/src/engine/`):** สมองกลคำนวณภาษา TypeScript แบบ Pure Functions ที่แยกอิสระจาก UI ประกอบด้วยตัวโหลดฐานข้อมูล (`game-db-loader.ts`), ตัวรวมสเตตัส 2 หน้าต่าง (`stat-aggregator.ts`), ตัวคำนวณดาเมจ/ฮีล (`damage-calculator.ts`), ตัวจำลองการหมุนสกิล 5 นาที (`combat-simulator.ts`), และตัวเปรียบเทียบบิลด์ (`build-comparator.ts`)
4. **Application State Layer (`/src/store/useBuildStore.ts`):** จัดการสถานะของบิลด์ปัจจุบัน, รายการบิลด์ที่บันทึกไว้ใน `localStorage`, และการซิงค์สถานะสายอาชีพ (`specId`) กับสกิลทั้ง 7 ช่องเมื่อมีการอัปโหนดบนผัง Talent Tree
5. **Presentation & Interactive UI Layer (`/src/app/` & `/src/components/`):** หน้าเว็บ Interactive Build Planner (`src/app/page.tsx`) และแผนผัง SVG Talent Tree Map (`src/components/TalentTreeDiagram.tsx`)

---

## 2. แผนผังการไหลของข้อมูล (Data Flow Diagram)

```
[External Verified Repos: bpsr-build-planner / resonance-logs-global]
│
▼ (import_verified_gamedb.py)
[/src/data/game-db/.json (17 Files) + /src/data/locales/en_US/game-data.json]
│
▼ (Loaded & Resolved via)
[/src/engine/game-db-loader.ts] ◄── Validates against ── [/src/data/schemas/.schema.ts]
│
▼
[/src/store/useBuildStore.ts (Zustand + LocalStorage Persistence)]
│
├──► [/src/engine/stat-aggregator.ts]
│         └──► Returns: SummaryWindowStats & FullAttributesWindowStats (@ Lv.60)
│
├──► [/src/engine/damage-calculator.ts] ──► [/src/engine/combat-simulator.ts]
│         └──► Returns: 5-Minute (300s) Action Breakdown, DPS, HPS, Avg Buff %
│
└──► [/src/engine/build-comparator.ts]
└──► Returns: Spec-Locked Stat Diffs & Simulation Diffs (Build A vs Build B)
```

---

## 3. โครงสร้างไดเรกทอรีและไฟล์จริงของโปรเจกต์ (Canonical Directory Structure)

> **กฎเหล็ก (Strict Governance):** โครงสร้างด้านล่างนี้คือโครงสร้างมาตรฐานปัจจุบันของโปรเจกต์ ห้ามสร้างไฟล์ใหม่ ลบไฟล์ หรือเปลี่ยนชื่อไฟล์ให้ต่างไปจากแผนผังนี้โดยไม่ผ่านขั้นตอนขออนุมัติและอัปเดตเอกสารก่อน

```text
BPSR-Build-Simulator/
├── .agents/                                      # ระบบควบคุม AI Agent, กฎเหล็ก, ความทรงจำ และสกิลเฉพาะทาง
│   ├── .agentignore                              # รายการไฟล์ที่ยกเว้นการสแกนของ Agent
│   ├── agents.md                                 # กฎการทำงานหลักและโปรโตคอลควบคุมการแก้ไขเอกสาร
│   ├── config.yaml                               # การตั้งค่าพารามิเตอร์ของ Agent
│   ├── memories.md                               # บันทึกความจำระยะยาวของโปรเจกต์
│   ├── rules/
│   │   ├── zero_hallucination.md                 # กฎห้ามมั่วข้อมูลเกมและตัวเลขสเตตัส
│   │   └── strict_architecture_governance.md     # กฎบังคับยึดตามเอกสาร ADR/SAD/SDD อย่างเคร่งครัด
│   ├── knowledge/                                # คลังความรู้กลไกเกมและสมการคำนวณ
│   │   ├── 01_combat_formulas_and_ratings.md
│   │   ├── 02_classes_talents_and_skills.md
│   │   ├── 03_equipment_refine_and_sigils.md
│   │   ├── 04_imagines_modules_psychoscopes.md
│   │   └── 05_simulator_and_rotation_engine.md
│   ├── skills/                                   # สกิลเฉพาะทางของ Agent (ใช้ชื่อไฟล์ SKILL.md)
│   │   ├── bpsr-combat-simulator/
│   │   │   ├── SKILL.md
│   │   │   └── references/rotation_priority_rules.md
│   │   ├── bpsr-data-scraper/
│   │   │   ├── SKILL.md
│   │   │   ├── references/source_endpoints.md
│   │   │   └── scripts/
│   │   │       ├── audit_data_coverage.py
│   │   │       ├── build_database.py
│   │   │       ├── export_human_readable_catalog.py
│   │   │       ├── extract_maxroll_master_db.py
│   │   │       ├── fetch_github_repos_data.py
│   │   │       ├── generate_readable_lists.py
│   │   │       ├── import_verified_gamedb.py
│   │   │       ├── inspect_extracted_data.py
│   │   │       └── requirements.txt
│   │   ├── bpsr-math-engine/
│   │   │   ├── SKILL.md
│   │   │   └── references/stat_keys_mapping.md
│   │   └── bpsr-planner-ui/
│   │       ├── SKILL.md
│   │       └── assets/component_template.tsx
│   └── tools/
│       ├── validate_game_db.ts
│       └── verify_stat_formula.py
│
├── Docs/                                         # เอกสารสถาปัตยกรรมและรายงานแคตตาล็อกข้อมูลเกม
│   ├── ADR.md                                    # Architectural Decision Records
│   ├── SAD.md                                    # System Architecture Document (ไฟล์นี้)
│   ├── SDD.md                                    # Software Design Document
│   ├── DATA_AUDIT_REPORT.md                      # รายงานผลการตรวจสอบความครบถ้วนของข้อมูลดิบ
│   ├── FULL_GAME_DATA_CATALOG.md                 # รายงานโครงสร้างข้อมูลดิบทั้งหมด
│   └── catalog/                                  # สารานุกรมข้อมูลเกมฉบับมนุษย์อ่านทั้ง 7 หมวด
│       ├── 01_CLASSES_SKILLS_TALENTS.md
│       ├── 02_BATTLE_IMAGINES_ALL_TIERS.md
│       ├── 03_EQUIPMENTS_PERFECTION_AND_SETS.md
│       ├── 04_SIGILS_AND_ENCHANTS.md
│       ├── 05_FACTORS_G10.md
│       ├── 06_DEEP_SLUMBER_PSYCHOSCOPES.md
│       └── 07_MODULES_AND_LINK_LEVELS.md
│
├── public/                                       # ไฟล์ Static Assets และไอคอนเกม
│   └── assets/
│
├── src/
│   ├── app/                                      # Next.js App Router Pages
│   │   ├── layout.tsx                            # Root Layout ของแอปพลิเคชัน
│   │   └── page.tsx                              # หน้าหลักของ Build Planner, Status Windows & Simulator
│   │
│   ├── components/                               # Reusable UI Components
│   │   └── TalentTreeDiagram.tsx                 # แผนผัง SVG Talent Tree Map 2 แท็บ (Basic 30 + Spec 70)
│   │
│   ├── data/
│   │   ├── schemas/                              # Zod Validation Schemas & TypeScript Types ทั้ง 7 ไฟล์
│   │   │   ├── common.schema.ts
│   │   │   ├── class-talent.schema.ts
│   │   │   ├── equipment.schema.ts
│   │   │   ├── imagine.schema.ts
│   │   │   ├── module.schema.ts
│   │   │   ├── psychoscope.schema.ts
│   │   │   ├── user-build.schema.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── game-db/                              # ฐานข้อมูล ZTable ของจริงที่นำเข้าจากตัวเกม (17 ไฟล์หลัก)
│   │   │   ├── attr-icons.json
│   │   │   ├── battle-imagines.json
│   │   │   ├── classes.json
│   │   │   ├── enchant-material-icons.json
│   │   │   ├── enchants.json
│   │   │   ├── equipment.json
│   │   │   ├── modules.json
│   │   │   ├── phantom-factors.json
│   │   │   ├── player-levels.json
│   │   │   ├── refine.json
│   │   │   ├── season-constants.json
│   │   │   ├── season-talents.json
│   │   │   ├── skill-fight-values.json
│   │   │   ├── skill-rank-fight-values.json
│   │   │   ├── skills.json
│   │   │   ├── suits.json
│   │   │   ├── talent-tree.json
│   │   │   └── combat-sim/                       # ตารางตัวคูณสกิลและ Cooldown สำหรับ 5-Min Simulator
│   │   │       ├── SkillBreakdownDetailsRuntime.json
│   │   │       ├── SkillCooldowns.json
│   │   │       ├── SkillDamageChainRuntime.json
│   │   │       ├── SkillEffectTable.json
│   │   │       └── SkillFightLevelTable.json
│   │   │
│   │   ├── locales/en_US/                        # พจนานุกรมคำแปลภาษาอังกฤษของรหัส ID ทั้งหมด
│   │   │   ├── bpsr-bp-ui.json
│   │   │   └── game-data.json
│   │   │
│   │   ├── _external_repos/                      # (Git Ignored) โฟลเดอร์ Clone โปรเจกต์อ้างอิงภายนอก
│   │   └── _raw_dumps/                           # (Git Ignored) โฟลเดอร์พักข้อมูลดิบจากการดึงข้อมูล
│   │
│   ├── engine/                                   # สมองกลคำนวณสเตตัส ดาเมจ และการจำลองการต่อสู้
│   │   ├── game-db-loader.ts                     # ตัวโหลดฐานข้อมูล ZTable, แปลงรหัส AttrID และดึงคำแปล en_US
│   │   ├── stat-aggregator.ts                    # คำนวณสเตตัส Lv.60 แยกเป็น SummaryWindow & FullAttributesWindow
│   │   ├── damage-calculator.ts                  # คำนวณ Expected Damage, Crit, Lucky Strike และ Heal ต่อฮิต
│   │   ├── combat-simulator.ts                   # จำลองลูปการต่อสู้ 5 นาที (300 วินาที / 6,000 Ticks)
│   │   ├── build-comparator.ts                   # เปรียบเทียบบิลด์ A vs B ภายใต้กฎ Spec-Locked
│   │   ├── test-run.ts                           # สคริปต์ CLI สำหรับรันทดสอบ Engine ทั้งระบบผ่าน npx tsx
│   │   └── _reference_logic/                     # (TS Excluded) โค้ดต้นแบบจาก bpsr-build-planner สำหรับเทียบเคียงสูตร
│   │
│   └── store/                                    # State Management
│       └── useBuildStore.ts                      # Zustand Store จัดการบิลด์ปัจจุบันและบันทึกบิลด์ลง LocalStorage
│
├── .gitignore
├── next-env.d.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

---
