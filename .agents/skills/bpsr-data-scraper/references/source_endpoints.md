# Technical Data Sources & Scraper Endpoints Reference
**Path:** `.agents/skills/bpsr-data-scraper/references/source_endpoints.md`

เอกสารนี้กำหนด URL, โครงสร้าง Network Payload, CSS Selectors, และตาราง Mapping ภาษาจีน-อังกฤษ สำหรับสคริปต์ใน `.agents/skills/bpsr-data-scraper/scripts/`

---

## 1. Maxroll Blue Protocol: Star Resonance Planner (Primary English Schema & Icons)
* **Target URL:** `https://maxroll.gg/blue-protocol/planner`
* **วิธีดึงข้อมูล (Ingestion Method):** Playwright Network Interception (`intercept_planner_json.py`)
* **Network Filter Rules:**
  * ดักจับ Response ที่มี `content-type: application/json` หรือ URL ลงท้ายด้วย `.json`
  * คีย์เวิร์ดใน URL ที่ต้องบันทึก: `planner`, `data`, `db`, `skill`, `item`, `talent`, `bpsr`, `psychoscope`, `imagine`, `sigil`, `module`
* **ข้อมูลที่ต้องสกัดออกมา:**
  1. ชื่อภาษาอังกฤษมาตรฐาน (Official/Global Localization) ของทุกอาชีพ, สกิล, โหนด Talent, อุปกรณ์, Sigil, Factor G10, Deep Slumber Psychoscope และ Module
  2. โครงสร้างพิกัดโหนด `(x, y)` และเส้นเชื่อม `prerequisites` ของ Talent Tree และ Deep Slumber Psychoscope ทั้ง 8 สาย
  3. พาธรูปภาพต้นฉบับจาก CDN เพื่อนำมาเก็บในฟิลด์ `iconRemoteUrl` และดาวน์โหลดลง `/public/assets/<category>/<id>.webp`

---

## 2. Bilibili Game Wiki — 星痕共鸣 (Primary Numerical Tables & CN Datamine)
* **Base URL:** `https://wiki.biligame.com/xhgm/`
* **วิธีดึงข้อมูล (Ingestion Method):** HTTPX + BeautifulSoup4 (`build_database.py`)
* **Required HTTP Headers (บังคับใส่เพื่อกัน 403 Forbidden):**
  ```json
  {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    "Referer": "[https://wiki.biligame.com/](https://wiki.biligame.com/)"
  }
  ```
* **DOM Selectors มาตรฐานของ BWiki:**
    * ตารางข้อมูลหลัก: `table.wikitable` หรือ `table.bwiki-table`
    * รูปไอคอนในตาราง: `td img` (ดึงค่าจากแอตทริบิวต์ src หากขึ้นต้นด้วย // ให้เติม https: ด้านหน้าเสมอ)

* **ตารางคำศัพท์ จีน -> AttributeKey (Translation Dictionary สำหรับ Parser):**
คำศัพท์ใน Wiki จีน (CN),ชื่อในเกม (EN),AttributeKey ในระบบของเรา
力量 / 智力 / 敏捷,Strength / Intellect / Agility,strength / intellect / agility
耐力 / 最大生命,Endurance / Max HP,endurance / maxHp
物理攻击 / 魔法攻击,ATK / MATK,atk / matk
精炼物攻 / 精炼魔攻 / 精炼护甲,Refined ATK / MATK / Armor,refinedAtk / refinedMatk / refinedArmor
破幻强度,Illusion-Breaking Strength,illusionBreakingStrength
暴击 / 急速 / 幸运,Crit / Haste / Luck,crit / haste / luck
精通 / 全能 / 格挡,Mastery / Versatility / Block,mastery / versatility / block
暴击伤害 / 幸运一击倍率,CritDMG % / Lucky Strike DMG Mult %,critDmgPct / luckyStrikeDmgMultPct
物理增伤 / 魔法增伤,PHY Boost % / MAG Boost %,phyBoostPct / magBoostPct
攻击速度 / 施法速度,Attack SPD % / Cast Speed %,attackSpdPct / castSpdPct
火/冰/森/雷/风/岩/光/暗,Fire/Ice/Forest/Thunder/Wind/Rock/Light/Dark,fire* / ice* / forest* / thunder* / wind* / rock* / light* / dark*

## 3. NGA Theorycraft & Community Sheets (Formulas & Rating Constants)
* **Target URL:** https://bbs.nga.cn/ (ค้นหาบอร์ด 星痕共鸣 คีย์เวิร์ด 伤害公式, 属性转化, 阈值)
* **วิธีนำเข้า:** นำค่าคงที่ตัวหารที่เลเวล 60 ($K_{lv60}$) และสูตรการคิด Damage Bucket มาอัปเดตในไฟล์ `.agents/knowledge/01_combat_formulas_and_ratings.md` และ `/src/engine/constants/formulas.config.ts`

## 4. Unity Client Asset Unpacking (Local High-Res Extraction)
* **Target Directory:** `StarResonance_Data/StreamingAssets/` หรือ `AssetBundles`
* **Tools:** `AssetStudioGUI` หรือ `UABEA`
* **แนวทางการนำเข้า:** เมื่อแกะไฟล์ `Texture2D` / `Sprite` ออกมาเป็น `.png` แล้ว ให้วางในโฟลเดอร์ชั่วคราวแล้วรัน `build_database.py` เพื่อย่อขนาดเป็น `128x128` และแปลงเป็น `.webp` ลง `/public/assets/`