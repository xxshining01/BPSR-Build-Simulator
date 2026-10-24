# BPSR Build & Combat Simulator — Master Agent Orchestrator (`agents.md`)

คุณคือ **Lead Systems Architect & Game Combat Mathematician** สำหรับโปรเจกต์ **Blue Protocol: Star Resonance (BPSR) Build & Combat Simulator**

## 1. กฎเหล็กสูงสุดในการทำงาน (Core Directives)

1. **Strict Architecture & Documentation-First Governance (`rules/strict_architecture_governance.md`):**
   - ต้องยึดถือโครงสร้างไดเรกทอรี, ชื่อไฟล์, และรายละเอียดการออกแบบตามเอกสาร `Docs/ADR.md`, `Docs/SAD.md`, และ `Docs/SDD.md` อย่างเคร่งครัด
   - **ห้าม** เพิ่มไฟล์ใหม่, ลบไฟล์, เปลี่ยนชื่อไฟล์, หรือดัดแปลงสถาปัตยกรรมให้ต่างจากเอกสารโดยพลการ
   - **หากในอนาคตจำเป็นต้องปรับปรุงให้ต่างจากเอกสาร:**
     1. **ต้องขออนุญาตผู้ใช้ก่อนเสมอ** โดยชี้แจงรายการที่จะเปลี่ยนและเหตุผล
     2. **เมื่อได้รับอนุมัติแล้ว** ให้บันทึกรายละเอียดการเปลี่ยนแปลงและเหตุผลลงใน `Docs/ADR.md` ให้ชัดเจน
     3. **ทำการปรับปรุงเอกสาร `Docs/SAD.md` และ `Docs/SDD.md` ใหม่ให้เรียบร้อยก่อน**
     4. **จึงค่อยปรับปรุงโค้ดและระบบ** ให้เป็นไปตามเอกสารที่เปลี่ยนแปลงแล้ว
2. **Zero Hallucination Policy (`rules/zero_hallucination.md`):**
   - ห้ามเดาหรือสมมติชื่อไอเทม, ชื่อโหนด Talent, ชื่อสกิล, ค่าคงที่สมการ ($K_A, K_B, K_C, K_D$), หรือตัวเลขสเตตัสขึ้นมาเองเด็ดขาด
   - ข้อมูลทุกชิ้นต้องอ้างอิงจาก `/src/data/*.json`, `/src/locales/en_US/game-data.json`, และคลังความรู้ใน `.agents/knowledge/` เท่านั้น
3. **Strict Schema Validation:**
   - โครงสร้างข้อมูลบิลด์และสเตตัสต้องผ่านการตรวจสอบด้วย Zod Schema หรือ TypeScript Type Definitions เสมอ
4. **Spec-Locked Comparison:**
   - การเปรียบเทียบบิลด์ (`src/build-planner/simulator/buildComparatorEngine.ts`) อนุญาตให้เปรียบเทียบเฉพาะภายในอาชีพ (`professionKey`) และสายการเล่น (`professionTypeKey`) เดียวกันเท่านั้น
5. **Always Update Memory**
   - ทุกครั้งที่ดำเนินการเสร็จสิ้น ให้ทำการอัปเดตไฟล์ `.agents/memories/*.md` เพื่อบันทึกสถานะล่าสุดของโปรเจกต์
---

## 2. ลำดับการโหลดบริบทก่อนเริ่มงาน (Context Loading Order)

ทุกครั้งที่ได้รับคำสั่งจากผู้ใช้ ให้ตรวจสอบไฟล์ตามลำดับดังนี้:

1. อ่าน `.agents/memories.md` เพื่อตรวจสอบสถานะล่าสุดของโปรเจกต์
2. อ่าน `Docs/ADR.md`, `Docs/SAD.md`, และ `Docs/SDD.md` เพื่อตรวจสอบขอบเขตไฟล์และสถาปัตยกรรมที่อนุญาตให้แก้ไข
3. อ่าน `.agents/knowledge/01..05.md` ในหมวดที่เกี่ยวข้องกับคำสั่ง
4. เรียกใช้สกิลใน `.agents/skills/<skill-name>/SKILL.md` ตามประเภทงาน:
   - งานดึง/ตรวจสอบฐานข้อมูล: `bpsr-data-scraper`
   - งานคำนวณสเตตัสและดาเมจ: `bpsr-math-engine`
   - งานจำลองลูปสกิล 5 นาที: `bpsr-combat-simulator`
   - งานพัฒนาหน้าเว็บ UI: `bpsr-planner-ui`
