# รายงานการตรวจสอบความถูกต้องของฐานข้อมูลกฎการต่อสู้ (`combat-rules-db.json` Verification Report)

- **ไฟล์ฐานข้อมูลสำหรับรันจริง (Runtime JSON)**: `src/data/game-db/combat-rules-db.json` (871.8 KB)
- **จำนวนอาชีพผู้เล่นจริงที่ตรวจสอบ**: `9 / 9 อาชีพ` (ตัดอาชีพขยะ/Placeholder ออกแล้ว)
- **จำนวนสกิลที่แปลงค่าสำเร็จ**: `139 / 150 สกิล` (รวมสกิลเปลี่ยนร่างอย่าง Double Arrow 2222ครบถ้วน)
- **จำนวนโหนด Talent ของ 9 อาชีพ**: `613 โหนด`
- **จำนวน Battle Imagines (T0–T5)**: `73 ตัว` (อุดช่องว่างของ Denvel 3968 & Igoreus 3969 เรียบร้อย)

## ตารางตรวจสอบความครบถ้วนรายอาชีพ (9 Playable Classes Checklist)

| รหัส | อาชีพ | Basic | Special | Ultimate | Expertise | Talent/Replaced Skills | สถานะ |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| `1` | **Stormblade** | 1 | 1 | 1 | 8 | 9 | ✅ PASS |
| `2` | **Frost Mage** | 1 | 1 | 1 | 8 | 2 | ✅ PASS |
| `3` | **Twin Striker** | 1 | 1 | 1 | 8 | 1 | ✅ PASS |
| `4` | **Wind Knight** | 1 | 1 | 1 | 8 | 9 | ✅ PASS |
| `5` | **Verdant Oracle** | 1 | 1 | 1 | 8 | 8 | ✅ PASS |
| `9` | **Heavy Guardian** | 1 | 1 | 1 | 8 | 9 | ✅ PASS |
| `11` | **Marksman** | 1 | 1 | 1 | 8 | 3 | ✅ PASS |
| `12` | **Shield Knight** | 1 | 1 | 1 | 8 | 7 | ✅ PASS |
| `13` | **Beat Performer** | 1 | 1 | 1 | 8 | 9 | ✅ PASS |

## ตัวอย่างการตรวจพิสูจน์จุดที่เคยตกหล่น

### 1. สกิลเปลี่ยนร่าง `[2222] Double Arrow` (ของสาย Falconry Spec):
```json
{
  "skillId": 2222,
  "name": "Double Arrow",
  "labels": [
    "Special Attack",
    "Physical",
    "Light",
    "Direct DMG",
    "Single Target",
    "Energy Restore",
    "Ranged"
  ],
  "description": "Slides sideways and quickly shoots 2 arrows, dealing Attack DMG. In Photon Reforge state, Double Arrow evolves into Quadraflare, leaping into the air and firing 4 empowered arrows that deal high Attack DMG with doubled critical rate. This skill holds 3 charges. Tips: Keep an eye on the Photon Reforge state and use ​Quadraflare​ at the right moment.",
  "maxCharges": 3,
  "hits": [
    {
      "label": "Normal",
      "kind": "damage",
      "isCounterOrDodge": false,
      "tierMultipliersPct": [
        200.0,
        208.0,
        216.0,
        240.0,
        248.0,
        256.0,
        280.0
      ],
      "levelFlatBonuses": [
        20.0,
        46.0,
        73.0,
        100.0,
        127.0,
        154.0,
        181.0,
        208.0,
        235.0,
        262.0,
        288.0,
        315.0,
        342.0,
        369.0,
        396.0,
        423.0,
        450.0,
        477.0,
        504.0,
        531.0,
        557.0,
        584.0,
        611.0,
        638.0,
        665.0,
        692.0,
        719.0,
        746.0,
        773.0,
        800.0
      ]
    },
    {
      "label": "Enhanced",
      "kind": "damage",
      "isCounterOrDodge": false,
      "tierMultipliersPct": [
        600.0,
        624.0,
        648.0,
        720.0,
        744.0,
        768.0,
        840.0
      ],
      "levelFlatBonuses": [
        58.0,
        138.0,
        218.0,
        298.0,
        378.0,
        459.0,
        543.0,
        623.0,
        704.0,
        784.0,
        865.0,
        945.0,
        1025.0,
        1105.0,
        1185.0,
        1267.0,
        1347.0,
        1427.0,
        1511.0,
        1591.0,
        1672.0,
        1752.0,
        1833.0,
        1913.0,
        1993.0,
        2074.0,
        2154.0,
        2234.0,
        2314.0,
        2400.0
      ]
    }
  ],
  "cooldownSec": 0.0,
  "chargeTimeSec": 7.0,
  "durationSec": 0.0,
  "buffs": []
}
```
### 2. คำอธิบายจริงของโบนัสเซ็ตอุปกรณ์ (`Suit 101` & `103` ของสาย Marksman `116`/`117`):
```json
{
  "suit_101_2pc_117": {
    "buffId": 2405260,
    "params": [
      0
    ],
    "description": "Each use of Special Attacks reduces the remaining CD on Radiance Barrage by 1s. Greatly increases the Casting SPD of Radiance Barrage."
  },
  "suit_101_4pc_117": {
    "buffId": 2405250,
    "params": [
      0
    ],
    "description": "While Focus is active, Crit DMG +50%."
  },
  "suit_103_2pc_117": {
    "buffId": 2405210,
    "params": [
      1500
    ],
    "description": "Increases Falcon Strike, Lightning Strike DMG by{p1}"
  },
  "suit_103_4pc_117": {
    "buffId": 2405230,
    "params": [
      0
    ],
    "description": "After consuming Photon Reforge, your next 2 Special Attacks will not consume charges"
  }
}
```