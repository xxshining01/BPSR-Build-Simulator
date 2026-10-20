# รายงานการสำรวจข้อมูลเชิงลึกสำหรับระบบ Combat Simulator (Combat Mechanics Audit)

## 1. โครงสร้างตารางตัวคูณดาเมจสกิล (`SkillFightLevelTable.json`)

- จำนวนรายการตัวคูณสกิลทั้งหมด: **16,193 รายการ**
- ตัวอย่าง Key `201`:
```json
{
  "Id": 201,
  "SkillId": 2,
  "Level": 1,
  "SkillEffectId": 201,
  "Name": "",
  "SkillCost": [],
  "SkillResCheck": [],
  "CostCheckResItemsIsOr": false,
  "PVECoolTime": 0.0,
  "FloatParameter": [],
  "ShowParameter": [],
  "ShowSkillCountCD": false,
  "FightValue": 0,
  "CoolTimeOnBattleStart": [],
  "RandomPVECoolTime": [],
  "SkillConditionCheck": [],
  "AbortSingTimeCD": 0.0
}
```
- ตัวอย่าง Key `3301`:
```json
{
  "Id": 3301,
  "SkillId": 33,
  "Level": 1,
  "SkillEffectId": 3301,
  "Name": "",
  "SkillCost": [],
  "SkillResCheck": [],
  "CostCheckResItemsIsOr": false,
  "PVECoolTime": 0.0,
  "FloatParameter": [],
  "ShowParameter": [],
  "ShowSkillCountCD": false,
  "FightValue": 0,
  "CoolTimeOnBattleStart": [],
  "RandomPVECoolTime": [],
  "SkillConditionCheck": [],
  "AbortSingTimeCD": 0.0
}
```
- ตัวอย่าง Key `110101`:
```json
{
  "Id": 110101,
  "SkillId": 1101,
  "Level": 1,
  "SkillEffectId": 110101,
  "Name": "",
  "SkillCost": [],
  "SkillResCheck": [],
  "CostCheckResItemsIsOr": false,
  "PVECoolTime": 0.0,
  "FloatParameter": [],
  "ShowParameter": [],
  "ShowSkillCountCD": false,
  "FightValue": 0,
  "CoolTimeOnBattleStart": [],
  "RandomPVECoolTime": [],
  "SkillConditionCheck": [
    [
      104
    ]
  ],
  "AbortSingTimeCD": 0.0
}
```
- ตัวอย่าง Key `110201`:
```json
{
  "Id": 110201,
  "SkillId": 1102,
  "Level": 1,
  "SkillEffectId": 110201,
  "Name": "",
  "SkillCost": [],
  "SkillResCheck": [],
  "CostCheckResItemsIsOr": false,
  "PVECoolTime": 0.0,
  "FloatParameter": [],
  "ShowParameter": [],
  "ShowSkillCountCD": false,
  "FightValue": 0,
  "CoolTimeOnBattleStart": [],
  "RandomPVECoolTime": [],
  "SkillConditionCheck": [
    [
      104
    ]
  ],
  "AbortSingTimeCD": 0.0
}
```
- ตัวอย่าง Key `110301`:
```json
{
  "Id": 110301,
  "SkillId": 1103,
  "Level": 1,
  "SkillEffectId": 110301,
  "Name": "",
  "SkillCost": [],
  "SkillResCheck": [],
  "CostCheckResItemsIsOr": false,
  "PVECoolTime": 0.0,
  "FloatParameter": [],
  "ShowParameter": [],
  "ShowSkillCountCD": false,
  "FightValue": 0,
  "CoolTimeOnBattleStart": [],
  "RandomPVECoolTime": [],
  "SkillConditionCheck": [
    [
      104
    ]
  ],
  "AbortSingTimeCD": 0.0
}
```

---
## 2. โครงสร้างการเชื่อมโยงสกิลหลัก -> สกิลลูก/Proc (`SkillDamageChainRuntime.json` & `SkillBreakdownDetailsRuntime.json`)

### ไฟล์ `SkillDamageChainRuntime.json` (Type: `dict`, Count: `9`)
```json
{
  "schemaVersion": 1,
  "generatedAt": "2026-06-09T10:47:54.058Z",
  "generatedBy": "SkillDamageChainBridge.gen"
}
```
### ไฟล์ `SkillBreakdownDetailsRuntime.json` (Type: `dict`, Count: `5,459`)
```json
{
  "2450103": {
    "Id": 2450103,
    "DisplayName": "Burn",
    "DisplayNames": {
      "en": "Burn",
      "zh-CN": "灼烧",
      "zh-TW": "灼燒",
      "ja": "燃焼",
      "ko-KR": "화상",
      "fr": "Brûlure",
      "de": "Verbrennung",
      "es": "Quemadura",
      "pt-BR": "Queimadura",
      "th": "เผาไหม้",
      "id": "Burn",
      "design": "引燃效果Buff"
    },
    "DisplayDetailName": "Boar Charge",
    "DisplayDetailNames": {
      "en": "Boar Charge",
      "zh-CN": "小猪冲锋",
      "zh-TW": "小豬衝鋒",
      "ja": "ウリボチャージ",
      "ko-KR": "우리보 돌격",
      "fr": "Charge de sanglier",
      "de": "Wildschweinansturm",
      "es": "Embestida de jabalí",
      "pt-BR": "Investida do Javali",
      "th": "Boarlet Charge",
      "id": "Piggy Assault"
    },
    "DisplayDetailKind": "underlying-skill",
    "Category": "buff-proc",
    "CategoryLabel": "Buff proc",
    "Badge": "Buff",
    "SourceRole": "buff-skill-bridge",
    "Reason": "DamageAttr row links directly to BuffName.",
    "Damag
```
### ไฟล์ `SkillCooldowns.json` (Type: `dict`, Count: `9`)
```json
{
  "schemaVersion": 1,
  "generatedAt": "2026-06-09T10:47:52.859Z",
  "cooldownUnits": "seconds"
}
```

---
## 3. ตารางจำแนกบัฟ, โหนด Talent และแหล่งกำเนิดดาเมจใน `resonance-logs-global`

### ไฟล์ `generated/TalentRecountTable.json` (Count: `7`)
```json
{
  "schemaVersion": 1,
  "generatedAt": "2026-06-08T21:22:37.601Z",
  "source": {
    "ownership": "parser-data/generated/TalentSpecOwnership.json",
    "descriptions": "parser-data/generated/SeasonEffectDescriptions.json"
  }
}
```
### ไฟล์ `generated/ModifierClassificationRuntime.json` (Count: `5`)
```json
{
  "schemaVersion": 1,
  "generatedBy": "ModifierClassificationTable.gen",
  "generatedFrom": {
    "modifierRecountTable": "output/ModifierRecountTable.json",
    "modifierSourceIndex": "output/ModifierSourceIndex.json",
    "effectSources": "output/EffectSources.json",
    "talentSpecOwnership": "output/TalentSpecOwnership.json"
  }
}
```
### ไฟล์ `generated/ModifierContributionRuntime.json` (Count: `5`)
```json
{
  "schemaVersion": 1,
  "generatedBy": "ModifierContributionTable.gen",
  "runtimeOf": "ModifierContributionTable.json"
}
```
### ไฟล์ `generated/EffectSourcesRuntime.json` (Count: `4`)
```json
{
  "effectSourcesById": {
    "buff-source:10001": {
      "sourceId": "buff-source:10001",
      "sourceKind": "buff-proc",
      "sourceType": "buff",
      "sourceName": "Unmapped Buff 10001",
      "sourceNames": {
        "en": "Unmapped Buff 10001",
        "zh-CN": "未映射增益 10001",
        "zh-TW": "未對應增益 10001",
        "ja": "未マッピングバフ 10001",
        "ko-KR": "매핑되지 않은 버프 10001",
        "fr": "Buff non mappé 10001",
        "de": "Nicht zugeordneter Buff 10001",
        "es": "Mejora sin asignar 10001",
        "pt-BR": "Bônus não mapeado 10001",
        "th": "บัฟที่ยังไม่แมป 10001",
        "id": "Buff belum dipetakan 10001",
        "design": "光翼展开判断"
      },
      "sourceEntityId": 10001,
      "runtimeDetection": "active-buff",
      "buffIds": [
        10001
      ],
      "targets": [
        {
          "targetKind": "damage",
          "damageId": 31000100,
          "relationshipKind": "buff-source-damage-row",
          "evidenceSource": "SkillBreakdownDetails.Buff
```
### ไฟล์ `generated/BuffName.json` (Count: `9,806`)

---
## 4. ตรวจสอบกรณีศึกษาตัวอย่างจริง (Case Study: Falconry Node 1129 & Muku Chief 3923)

### กรณีที่ 1: โหนด Talent `[1129] Falconry Spec` ใน `talent-tree.json`:
```json
{
  "weaponGroup": 11,
  "icon": "ui/atlas/talent_passive_11/talent_passive_icon_general_dps_skyhitget",
  "type": 5,
  "effects": [
    [
      6,
      2220,
      2222
    ],
    [
      3,
      2203290,
      1
    ]
  ],
  "buffValueKeys": [
    [
      "a"
    ]
  ],
  "buffPars": [
    [
      0
    ]
  ],
  "cost": 1,
  "fightValue": 26,
  "unlockConsume": [
    [
      1020054,
      2
    ]
  ]
}
```
- คำแปลใน `en_US/game-data.json` (`talents['11291']` หรือ `'1129'`):
```json
{
  "name": "Falconry Spec",
  "description": "Replaces <style=\"accent-gn\">Special Attack</style> with <linktext=1547><style=\"ItemQuality_5\">Double Arrow</style></linktext> and enhances the ability to use this skill.<br>Regenerates <style=\"accent-gn\">2</style> <style=\"accent-gn\">Photon Energy</style> per second.<br>Each <style=\"accent-gn\">1%</style> Haste grants <style=\"accent-gn\">1%</style> CD decrease to <linktext=1547><style=\"ItemQuality_5\">Double Arrow</style></linktext>.<br>You can tame a <style=\"accent-gn\">Falcon</style> to assist you in battle.<br><br><style=\"accent-gn\">Falcon</style> always follows the caster. When the caster deals DMG with Class Skills, the <style=\"accent-gn\">Falcon</style> has a fixed <style=\"accent-gn\">23%</style> chance to swiftly strike the target (guaranteed on Crit), dealing <style=\"physical\">Attack DMG</style> equal to <style=\"accent-gn\">150%</style> ATK to the enemy (which scales with the Level/Tier of <style=\"accent-gn\">Basic Attack</style>). Additionally, when the strike count of the <style=\"accent-gn\">Falcon</style> exceeds <style=\"accent-gn\">5</style>, the next strike of the <style=\"accent-gn\">Falcon</style> combines all excess strikes and DMG.<br><br><i><style=\"text_third_gray\"><size=20>The Falcon responds to the caster's attacks. Haste and Crit increase its strike frequency, and after learning Lightning Strike, the Falcon deals significantly more DMG.</size></style></i>"
}
```
### กรณีที่ 2: Battle Imagine `[3923] Muku Chief` (Active Skill `1989`):
```json
{
  "id": 3923,
  "rarityType": 2,
  "seasonId": 1,
  "classification": 2,
  "icon": "skill_aoyi_skill_icon_005",
  "showSkillType": [
    4,
    12,
    14,
    17,
    23,
    25,
    26,
    29,
    102
  ],
  "maxRank": 5,
  "skillId": 1989,
  "baseFv": 298,
  "fightValues": [
    89,
    179,
    328,
    418,
    597
  ],
  "passiveEffects": [
    [
      12512,
      1000,
      1300,
      1600,
      1900,
      2200,
      2500
    ]
  ]
}
```
- คำแปลใน `en_US/game-data.json` (`battleImagines['3923']` & `skills['1989']`):
```json
{
  "battleImagine_3923": {
    "name": "Muku Chief",
    "dialogue": "Smash! Smash! Smash! Destruction is art!",
    "activeSkillName": "Arcane! Furious Hammer",
    "description": "<style=\"accent-gn\">Summons Boss</style>: Muku Chief to slam the ground around, dealing AoE <style=\"physical\">Attack DMG</style>. Holds <style=\"accent-gn\">2</style> charges. <br>Upon the skill cast, your <style=\"accent-gn\">Crit</style> and <style=\"accent-gn\">Crit DMG</style> are increased for a period.",
    "activeEffectParams": [
      [
        "Total DMG",
        [
          "1000% ATK/MATK +100 (Resilience Break: 100)",
          "1150% ATK/MATK +100 (Resilience Break: 100)",
          "1300% ATK/MATK +100 (Resilience Break: 100)",
          "1450% ATK/MATK +100 (Resilience Break: 100)",
          "1600% ATK/MATK +100 (Resilience Break: 100)",
          "1750% ATK/MATK +100 (Resilience Break: 100)"
        ]
      ],
      [
        "Crit bonus",
        [
          "5600",
          "6720",
          "7840",
          "8960",
          "10080",
          "11200"
        ]
      ],
      [
        "Crit DMG bonus",
        [
          "20%",
          "24%",
          "28%",
          "32%",
          "36%",
          "40%"
        ]
      ],
      [
        "Duration",
        [
          "20s",
          "20s",
          "20s",
          "20s",
          "20s",
          "20s"
        ]
      ],
      [
        "Charge Time",
        [
          "90s",
          "90s",
          "90s",
          "75s",
          "75s",
          "60s"
        ]
      ]
    ],
    "skillLabel": [
      "Resonance Skill",
      "Physical",
      "Direct DMG",
      "AoE",
      "Crit"
    ]
  },
  "skill_1989": null
}
```