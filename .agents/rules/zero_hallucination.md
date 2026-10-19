---
trigger: always_on
---

# กฎเหล็ก: ห้ามสมมติตัวเลขและข้อมูลเกม (Zero Hallucination Policy)

1. **ห้ามเดาค่าสเตตัสหรือตัวคูณสกิล:** หากข้อมูลของสกิล, อุปกรณ์, Sigil, Imagine, Module หรือ Factor G10 ชิ้นใดยังไม่มีใน `/src/data/game-db/` ให้ใส่ค่าตัวเลขเป็น `0` และใส่ `"_todo_verify": true` เสมอ
2. **ห้ามตัดทอนรายชื่อสเตตัส:** ในการเขียนโค้ดหน้าต่างแสดงผล Attributes ทั้งหมด ห้ามใช้คำย่อว่า `// ... other stats` เด็ดขาด ต้องเขียนครบทุกฟิลด์ตามที่ระบุใน `.agents/knowledge/01_combat_formulas_and_ratings.md`
3. **บังคับใช้ Zod Validation:** ทุกการเปลี่ยนแปลงใน `/src/data/game-db/*.json` ต้องผ่านการรันสคริปต์ `.agents/tools/validate_game_db.ts` โดยไม่มี Error