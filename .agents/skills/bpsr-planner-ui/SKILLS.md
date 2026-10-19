---
name: bpsr-planner-ui
description: ใช้สกิลนี้เมื่อต้องสร้างหรือแก้ไขหน้าเว็บ UI ของ Build Simulator (อ้างอิงรูปแบบ Maxroll Planner), หน้าต่างเลือกอุปกรณ์ 11 ช่อง, Sigil, Refine 0-30, Module 5 ช่อง, Deep Slumber Psychoscope, หน้าต่างแสดงสเตตัส 2 แท็บ (สรุป vs Attributes เต็ม) และหน้าต่างเปรียบเทียบบิลด์ (Spec-Locked Build Compare)
---

# BPSR Planner & Comparator UI Skill

## ภาพรวม / วัตถุประสงค์ (Overview / Goal)
- สร้างส่วนติดต่อผู้ใช้ (UI) ที่มีข้อมูลแน่นแต่ใช้งานลื่นไหลสำหรับการจัดบิลด์ แสดงผลสเตตัสแบบ Real-time และเปรียบเทียบบิลด์ภายในสายอาชีพเดียวกัน

## แนวทางปฏิบัติและข้อกำหนด (Instructions & Rules)
1. **การกรองตัวเลือกตามกฎเกม (UI-Level Filtering):**
   - เมื่อผู้ใช้คลิกเลือกสเตตัสในอุปกรณ์แต่ละชิ้น ต้องกรองเอาสเตตัสที่หาไม่ได้ในชิ้นนั้นออกทันทีตามสายอาชีพ (`STR` / `INT` / `AGI`)
   - ช่องเลือก Sigil ต้องแสดงเฉพาะ Sigil ที่ติดตั้งลงอุปกรณ์ชิ้นนั้นได้
   - โหนดใส่ Factor G10 ใน Psychoscope ต้องแสดงเฉพาะ Factor ที่ตรงกับสี/ประเภทโหนด (`Polarity`, `Stasis`, `Inspiration`, `Reality`, `Class Stasis`)
2. **หน้าต่างสเตตัส 2 มุมมอง:**
   - **หน้าต่างที่ 1 (สรุป):** แสดง Max HP, ATK/MATK, STR/INT/AGI, Endurance, Illusion-Breaking Strength และกราฟ/หลอดของ Crit, Haste, Luck, Mastery, Versatility, Block
   - **หน้าต่างที่ 2 (Attributes):** แสดงตารางแจกแจงครบทุกหมวดตามที่ระบุใน `SDD.md`
3. **กฎเหล็กหน้าเปรียบเทียบบิลด์ (Compare View):**
   - อนุญาตให้เลือกเปรียบเทียบได้เฉพาะบิลด์ที่มี `specId` เดียวกันเท่านั้น (เช่น *Falconry vs Falconry* ห้ามเทียบ *Falconry vs Wildpack*)
   - แสดงตัวเลขผลต่าง (`+` สีเขียว `text-emerald-400`, `-` สีแดง `text-rose-400`) ทั้งในตารางสเตตัสและตารางผลการจำลอง 5 นาที
4. **การแสดงผลรูปไอคอน:** ต้องเรียกใช้ `<GameIcon />` เสมอ ห้ามใช้ `<img>` ธรรมดาโดยไม่มี Fallback

## ตัวอย่าง (Examples)
- **Input:** ผู้ใช้คลิกที่ช่อง "แหวน (Ring)" ของอาชีพสาย `Intellect`
- **Output UI Behavior:** เปิด Modal สำหรับตั้งค่า Ring ที่มี Dropdown เลือก Main/Sub/Extra/Purple Stat (โดยซ่อนค่าที่ไม่สามารถสุ่มออกบนแหวนของสาย INT ได้), Slider เลือก Refine `0-30`, และช่องเลือก Sigil เฉพาะที่ใส่ลง `ring` ได้

## สคริปต์และทรัพยากรเสริม (Scripts & References)
- **เทมเพลตมาตรฐานของ UI Slot Component:** `assets/component_template.tsx`