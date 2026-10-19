# รายงานการตรวจสอบความครบถ้วนของฐานข้อมูล (Data Coverage Audit Report)

## 1. ภาพรวมขุมทรัพย์ใน `bpsr-build-planner`

- **จำนวนรูปภาพ/ไอคอนทั้งหมดในโปรเจกต์นี้:** `1,894` ไฟล์

  - โฟลเดอร์ `assets`: `1,877` ไฟล์
  - โฟลเดอร์ `icons`: `15` ไฟล์
  - โฟลเดอร์ `app-icon.png`: `1` ไฟล์
  - โฟลเดอร์ `ogp.png`: `1` ไฟล์

### ไฟล์ข้อมูล JSON / Data Tables ที่ใหญ่ที่สุดใน `bpsr-build-planner`:

- `src\data\equipment.json` (12,627.7 KB)
- `src\locales\ko_KR\game-data.json` (3,964.6 KB)
- `src\locales\ja_JP\game-data.json` (3,898.4 KB)
- `src\locales\en_US\game-data.json` (3,571.6 KB)
- `src\locales\zh_CN\game-data.json` (3,347.4 KB)
- `src\locales\zh_TW\game-data.json` (3,347.4 KB)
- `src\data\phantom-factors.json` (1,289.4 KB)
- `src\data\talent-tree.json` (727.7 KB)
- `src\data\enchants.json` (282.7 KB)
- `src\data\season-talents.json` (175.7 KB)
- `package-lock.json` (122.6 KB)
- `src\data\attr-icons.json` (89.1 KB)
- `src\data\modules.json` (82.3 KB)
- `src\about\changelog.json` (63.6 KB)
- `src\data\battle-imagines.json` (52.5 KB)
- `src\data\skill-fight-values.json` (43.6 KB)
- `src\data\player-levels.json` (42.8 KB)
- `src\data\refine.json` (41.5 KB)
- `src\data\skills.json` (25.7 KB)
- `src\locales\ja_JP\bpsr-bp-ui.json` (24.6 KB)
- `src\locales\ko_KR\bpsr-bp-ui.json` (23.8 KB)
- `src\locales\en_US\bpsr-bp-ui.json` (21.5 KB)
- `src\locales\zh_CN\bpsr-bp-ui.json` (21.4 KB)
- `src\locales\zh_TW\bpsr-bp-ui.json` (21.4 KB)
- `src\data\enchant-material-icons.json` (16.4 KB)
- `src\data\suits.json` (16.4 KB)
- `src\data\classes.json` (12.0 KB)
- `src\data\skill-rank-fight-values.json` (9.4 KB)
- `src-tauri\tauri.conf.json` (2.3 KB)
- `package.json` (1.5 KB)

### ไฟล์โค้ดคำนวณและสคริปต์สำคัญใน `bpsr-build-planner`:

- `scripts\extract-ztable.mjs` (75.3 KB)
- `src\build-planner\stats\calculateRawStats.test.ts` (65.5 KB)
- `src\build-planner\stats\calculateRawStats.ts` (57.6 KB)
- `scripts\lib\extractLocaleText.mjs` (56.7 KB)
- `src\build-planner\equipment\EquipmentSlotPicker.tsx` (56.5 KB)
- `src\build-planner\talent\TalentTreePanel.tsx` (42.4 KB)
- `src\build-planner\character\StatsDetailDialog.tsx` (35.4 KB)
- `src\build-planner\stats\attrMaps.ts` (34.5 KB)
- `src\build-planner\character\PlanManager.tsx` (24.4 KB)
- `src\build-planner\store\useBuildStore.test.ts` (23.5 KB)
- `src\build-planner\plan\planCode.ts` (23.2 KB)
- `src\build-planner\character\BuffEffectDialog.tsx` (21.7 KB)
- `src\build-planner\store\derivedSelectors.ts` (21.2 KB)
- `src\build-planner\phantom\PhantomNodeConfig.tsx` (18.2 KB)
- `src\build-planner\character\CharacterPanel.tsx` (18.1 KB)
- `src\build-planner\phantom\PhantomPanel.tsx` (17.9 KB)
- `src\build-planner\equipment\EquipmentItemPopup.tsx` (17.8 KB)
- `src\build-planner\store\planSlice.ts` (16.6 KB)
- `src\build-planner\stats\deriveStats.ts` (16.2 KB)
- `src\build-planner\stats\deriveStats.test.ts` (16.2 KB)
- `src\build-planner\phantom\phantomEffectSummary.ts` (15.9 KB)
- `src\build-planner\phantom\PhantomEffectSummaryDialog.tsx` (15.2 KB)
- `src\build-planner\stats\calculateAbilityScore.ts` (14.7 KB)
- `src\build-planner\plan\ShareBuildButton.tsx` (13.9 KB)
- `src\build-planner\module\moduleData.ts` (13.5 KB)
- `src\build-planner\phantom\phantomData.ts` (12.7 KB)
- `src\build-planner\BuildPlanner.tsx` (12.5 KB)
- `src\build-planner\types.ts` (12.3 KB)
- `src\build-planner\module\ModulePresetBar.tsx` (12.0 KB)
- `src\build-planner\equipment\equipmentSlotPickerData.ts` (11.7 KB)

---
## 2. ผลการตรวจสอบเทียบกับความต้องการทั้ง 8 ข้อของระบบเรา

### 1. สมการคำนวณสเตตัส, ดาเมจ, ฮีล, บัฟ และค่า Rating Lv.60
- **สถานะ:** ✅ พบเอกสารต้นฉบับสมบูรณ์
  - `bpsr-build-planner/docs/STATUS_CALCULATION.md` (47.4 KB)
  - `bpsr-build-planner/docs/CHARACTER_DATA_MODEL.md` (16.8 KB)
  - `bpsr-build-planner/docs/EQUIPMENT_ENCHANT.md` (11.2 KB)

### 2. ข้อมูลอาชีพทั้ง 9 (18 สาย), สกิล และผังโหนด Talents
- **สถานะ:** ✅ พบไฟล์ข้อมูล
  - `src\build-planner\classData.ts` (1.4 KB)
  - `src\build-planner\profession.ts` (9.3 KB)
  - `src\build-planner\character\classIcons.ts` (0.8 KB)
  - `src\build-planner\skill\imagineFilterData.ts` (2.0 KB)
  - `src\build-planner\skill\skillData.ts` (1.8 KB)
  - `src\build-planner\skill\useDragReorder.ts` (0.8 KB)
  - `src\build-planner\stats\calculateAbilityScore.test.ts` (6.0 KB)
  - `src\build-planner\stats\calculateAbilityScore.ts` (14.7 KB)
  - `src\build-planner\store\skillSlice.ts` (6.6 KB)
  - `src\build-planner\store\talentSlice.ts` (2.0 KB)
  - `src\build-planner\talent\talentTreeAlgo.test.ts` (7.4 KB)
  - `src\build-planner\talent\talentTreeAlgo.ts` (8.2 KB)
  - `src\build-planner\talent\talentTreeData.ts` (3.4 KB)
  - `src\data\classes.json` (12.0 KB)
  - `src\data\season-talents.json` (175.7 KB)
  - `resonance-logs-global/parser-data/generated/TalentRecountTable.json` (4,723 KB)
  - `resonance-logs-global/parser-data/logic/SkillFightLevelTable.json` (7,835 KB)

### 3. อุปกรณ์สวมใส่ 11 ชิ้น, Perfection 0-100, เซ็ต NPC, อาวุธพิเศษ, ออปชันม่วง, ข้อจำกัด STR/AGI/INT
- **สถานะ:** ✅ พบไฟล์ข้อมูล
  - `src\build-planner\assetMap.ts` (0.9 KB)
  - `src\build-planner\equipment\equipmentData.test.ts` (5.0 KB)
  - `src\build-planner\equipment\equipmentData.ts` (11.5 KB)
  - `src\build-planner\equipment\equipmentSlotPickerData.test.ts` (1.9 KB)
  - `src\build-planner\equipment\equipmentSlotPickerData.ts` (11.7 KB)
  - `src\build-planner\module\modulePresets.ts` (2.1 KB)
  - `src\build-planner\store\equipmentSlice.ts` (9.2 KB)
  - `src\build-planner\store\modulePresetSlice.ts` (2.8 KB)
  - `src\data\enchant-material-icons.json` (16.4 KB)
  - `src\data\enchants.json` (282.7 KB)
  - `src\data\equipment.json` (12627.7 KB)
  - `src\data\refine.json` (41.5 KB)

### 4. ข้อมูล Imagines (Tier 0-5, สเตตัสติดตัว, สกิลกดใช้ และแต้ม Bond)
- **สถานะ:** ✅ พบไฟล์ข้อมูล
  - `src\build-planner\phantom\phantomData.test.ts` (4.2 KB)
  - `src\build-planner\phantom\phantomData.ts` (12.7 KB)
  - `src\build-planner\phantom\phantomEffectSummary.ts` (15.9 KB)
  - `src\build-planner\phantom\phantomView.ts` (6.2 KB)
  - `src\build-planner\skill\imagineFilterData.ts` (2.0 KB)
  - `src\build-planner\store\phantomLegacyAutosave.test.ts` (4.2 KB)
  - `src\build-planner\store\phantomSlice.ts` (6.0 KB)
  - `src\data\battle-imagines.json` (52.5 KB)
  - `src\data\phantom-factors.json` (1289.4 KB)

### 5. ข้อมูล Sigils (ช่องที่ใส่ได้ และค่าสเตตัส Lv.1, 2, 3)
- **สถานะ:** ⚠️ ต้องตรวจสอบชื่อไฟล์ใน repo

### 6 & 7. ข้อมูล Factor G10 และ Deep Slumber Psychoscope ทั้ง 8 สาย + Bond Points (3-55)
- **สถานะ:** ✅ พบไฟล์ข้อมูล
  - `src\data\phantom-factors.json` (1289.4 KB)

### 8. ข้อมูล Modules (5 ช่อง, 21 Link Effects และแต้มปลดล็อก Lv.1-6)
- **สถานะ:** ✅ พบครบทั้งใน bpsr-build-planner และ AutoMod
  - `src\build-planner\components\useLinkTextPopup.ts` (3.1 KB)
  - `src\build-planner\module\moduleData.test.ts` (5.3 KB)
  - `src\build-planner\module\moduleData.ts` (13.5 KB)
  - `src\build-planner\module\modulePresets.ts` (2.1 KB)
  - `src\build-planner\store\modulePresetSlice.ts` (2.8 KB)
  - `src\build-planner\store\moduleSlice.ts` (1.0 KB)
  - `src\data\modules.json` (82.3 KB)
  - `StarResonanceAutoMod/module_types.py` (12.3 KB)
  - `star-resonance-module-optimizer/index.html` (106.2 KB)


---
## 3. ผลการสแกนภายในไฟล์ 10 MB ของ Maxroll (`sr-tools`)

- พบคำว่า **`Falconry`** ใน `07_loader-98169fad.js`: `...l_dps_petbig.webp"       },       {         id: "falconry-spec",         name: "Falconry Spec",         icon: "db/icons/talents/talent_passive_icon_general_dps_skyhitget.webp"       }     ]   },   {  ...`
- พบคำว่า **`Wildpack`** ใน `07_loader-98169fad.js`: `...ommon_icon03.webp"       },       {         id: "wildpack-spec",         name: "Wildpack Spec",         icon: "db/icons/talents/talent_passive_icon_general_dps_petbig.webp"       },       {         id...`
- พบคำว่า **`Falconry`** ใน `08_sr-texts-en_US-bcd8bbf7.js`: `...c",   325849415: "Arrow Barrage",   325849416: "Sundering Arrow",   325849417: "Falconry Spec",   325849441: "Wolf Dancer",   325849442: "Explosive Arrow",   325849443: "Rapid Shot",   325849444: "Bea...`
- พบคำว่า **`Wildpack`** ใน `08_sr-texts-en_US-bcd8bbf7.js`: `...d Shot",   325849412: "Valiant Heart",   325849413: "Overcharge",   325849414: "Wildpack Spec",   325849415: "Arrow Barrage",   325849416: "Sundering Arrow",   325849417: "Falconry Spec",   325849441:...`
- พบคำว่า **`Psychoscope`** ใน `08_sr-texts-en_US-bcd8bbf7.js`: `...purity. During the tuning process, it serves as a driving medium to enhance the Psychoscope's performance. Can also be traded to Mael, the Bahamar Highlands' Legacy expert, in exchange for Phantom Fac...`
- พบคำว่า **`Strength Boost`** ใน `08_sr-texts-en_US-bcd8bbf7.js`: `...180101,114180102,114180103},{2,2,1},"PVEStunnedDamage","un")*})',   835051319: "Strength Boost",   835051320: "Strength Boost",   835051321: "Strength Boost",   835051322: "Strength Boost",   83505132...`
- พบคำว่า **`Elite Strike`** ใน `08_sr-texts-en_US-bcd8bbf7.js`: `...   1786889839: "Special Attack",   1786889840: "Special Attack",   1786889841: "Elite Strike",   1786889865: "Elite Strike",   1786889866: "Elite Strike",   1786889867: "Elite Strike",   1786889868: "...`
- พบคำว่า **`Illusion`** ใน `08_sr-texts-en_US-bcd8bbf7.js`: `...aze of the Ashen Void - Void Corruption",   69656959: "Gaze of the Ashen Void - Illusion - Replica",   69656960: "Gaze of the Ashen Void - Illusion - Replica",   69656984: "Gaze of the Ashen Void - Il...`