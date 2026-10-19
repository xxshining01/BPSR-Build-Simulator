# 6. รายการ Deep Slumber Psychoscope ทั้ง 8 สาย, ผังโหนดบัฟ, ช่องใส่ Factor และโบนัสตามขั้น Bond Points

## 6.1 รายชื่อสาย Deep Slumber Psychoscope ทั้ง 8 สาย (`templates`)

### สายที่ [1]: **Psychoscope 1** (Root Node: `1001`, Advanced Effect ID: `100`)
- **เอฟเฟกต์ประจำสาย (CoreEffect 100):** 

### สายที่ [2]: **Psychoscope 2** (Root Node: `1101`, Advanced Effect ID: `101`)
- **เอฟเฟกต์ประจำสาย (CoreEffect 101):** 
- **ข้อมูลเอฟเฟกต์ขั้นบันได Bond Points (`advancedEffects[101]`):**
```json
{
  "effectId": 100,
  "level": 1,
  "effects": [
    [
      3,
      3003610,
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
  "icon": "ui/atlas/talent_passive_1/talent_passive_icon_general_dps_fullattack",
  "unlockFraction": 2,
  "fightValue": 125
}
```

### สายที่ [3]: **Psychoscope 3** (Root Node: `1201`, Advanced Effect ID: `102`)
- **เอฟเฟกต์ประจำสาย (CoreEffect 102):** 
- **ข้อมูลเอฟเฟกต์ขั้นบันได Bond Points (`advancedEffects[102]`):**
```json
{
  "effectId": 100,
  "level": 2,
  "effects": [
    [
      3,
      3003620,
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
  "icon": "ui/atlas/talent_passive_1/talent_passive_icon_general_dps_draw",
  "unlockFraction": 5,
  "fightValue": 250
}
```

### สายที่ [4]: **Psychoscope 4** (Root Node: `1301`, Advanced Effect ID: `103`)
- **เอฟเฟกต์ประจำสาย (CoreEffect 103):** 
- **ข้อมูลเอฟเฟกต์ขั้นบันได Bond Points (`advancedEffects[103]`):**
```json
{
  "effectId": 100,
  "level": 3,
  "effects": [
    [
      3,
      3003630,
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
  "icon": "ui/atlas/talent_passive_1/taidao144",
  "unlockFraction": 12,
  "fightValue": 435
}
```

### สายที่ [5]: **Psychoscope 5** (Root Node: `1401`, Advanced Effect ID: `104`)
- **เอฟเฟกต์ประจำสาย (CoreEffect 104):** 
- **ข้อมูลเอฟเฟกต์ขั้นบันได Bond Points (`advancedEffects[104]`):**
```json
{
  "effectId": 100,
  "level": 4,
  "effects": [
    [
      3,
      3003640,
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
  "icon": "ui/atlas/talent_passive_1/talent_passive_icon_general_dps_fullattack",
  "unlockFraction": 20,
  "fightValue": 560
}
```

### สายที่ [6]: **Psychoscope 6** (Root Node: `1501`, Advanced Effect ID: `105`)
- **เอฟเฟกต์ประจำสาย (CoreEffect 105):** 
- **ข้อมูลเอฟเฟกต์ขั้นบันได Bond Points (`advancedEffects[105]`):**
```json
{
  "effectId": 100,
  "level": 5,
  "effects": [
    [
      3,
      3003650,
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
  "icon": "ui/atlas/talent_passive_1/talent_passive_icon_general_dps_draw",
  "unlockFraction": 25,
  "fightValue": 745
}
```

### สายที่ [7]: **Psychoscope 7** (Root Node: `1601`, Advanced Effect ID: `106`)
- **เอฟเฟกต์ประจำสาย (CoreEffect 106):** 
- **ข้อมูลเอฟเฟกต์ขั้นบันได Bond Points (`advancedEffects[106]`):**
```json
{
  "effectId": 100,
  "level": 6,
  "effects": [
    [
      3,
      3003660,
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
  "icon": "ui/atlas/talent_passive_1/taidao144",
  "unlockFraction": 35,
  "fightValue": 1000
}
```

### สายที่ [8]: **Psychoscope 8** (Root Node: `1701`, Advanced Effect ID: `107`)
- **เอฟเฟกต์ประจำสาย (CoreEffect 107):** 
- **ข้อมูลเอฟเฟกต์ขั้นบันได Bond Points (`advancedEffects[107]`):**
```json
{
  "effectId": 101,
  "level": 1,
  "effects": [
    [
      3,
      3003610,
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
  "icon": "ui/atlas/talent_passive_1/talent_passive_icon_general_dps_instant",
  "unlockFraction": 2,
  "fightValue": 125
}
```


---
## 6.2 รายละเอียดโหนดทั้งหมดบนผัง Tree Map (`treeNodes`)

- **Node [100] PsychoscopeNode 100** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 2, 'groupId': 100, 'preNodes': [1002, 1003], 'nextNodes': [103], 'unlockCondition': [[93, 3, 5]], 'sameGroupId': 0}`
- **Node [101] PsychoscopeNode 101** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 2, 'groupId': 101, 'preNodes': [1004, 1005], 'nextNodes': [104, 109], 'unlockCondition': [[93, 3, 25]], 'sameGroupId': 0}`
- **Node [102] PsychoscopeNode 102** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 2, 'groupId': 102, 'preNodes': [1007], 'nextNodes': [105], 'unlockCondition': [[93, 3, 45]], 'sameGroupId': 102}`
- **Node [103] PsychoscopeNode 103** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 2, 'groupId': 103, 'preNodes': [100], 'nextNodes': [106], 'unlockCondition': [[93, 3, 10]], 'sameGroupId': 0}`
- **Node [104] PsychoscopeNode 104** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 2, 'groupId': 104, 'preNodes': [101], 'nextNodes': [107], 'unlockCondition': [[93, 3, 30]], 'sameGroupId': 109}`
- **Node [105] PsychoscopeNode 105** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 2, 'groupId': 105, 'preNodes': [108, 102], 'nextNodes': [1008, 1009, 217], 'unlockCondition': [[93, 3, 50]], 'sameGroupId': 0}`
- **Node [106] PsychoscopeNode 106** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 2, 'groupId': 106, 'preNodes': [103], 'nextNodes': [1004, 1005, 216], 'unlockCondition': [[93, 3, 15]], 'sameGroupId': 0}`
- **Node [107] PsychoscopeNode 107** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 2, 'groupId': 107, 'preNodes': [109, 104], 'nextNodes': [1006, 1007], 'unlockCondition': [[93, 3, 35]], 'sameGroupId': 0}`
- **Node [108] PsychoscopeNode 108** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 2, 'groupId': 108, 'preNodes': [1006], 'nextNodes': [105], 'unlockCondition': [[93, 3, 45]], 'sameGroupId': 102}`
- **Node [109] PsychoscopeNode 109** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 2, 'groupId': 109, 'preNodes': [101], 'nextNodes': [107], 'unlockCondition': [[93, 3, 30]], 'sameGroupId': 109}`
- **Node [110] PsychoscopeNode 110** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 2, 'groupId': 110, 'preNodes': [1103, 1102], 'nextNodes': [113], 'unlockCondition': [[93, 3, 5]], 'sameGroupId': 0}`
- **Node [111] PsychoscopeNode 111** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 2, 'groupId': 111, 'preNodes': [1104, 1105], 'nextNodes': [114, 119], 'unlockCondition': [[93, 3, 25]], 'sameGroupId': 0}`
- **Node [112] PsychoscopeNode 112** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 2, 'groupId': 112, 'preNodes': [1107], 'nextNodes': [115], 'unlockCondition': [[93, 3, 45]], 'sameGroupId': 118}`
- **Node [113] PsychoscopeNode 113** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 2, 'groupId': 113, 'preNodes': [110], 'nextNodes': [116], 'unlockCondition': [[93, 3, 10]], 'sameGroupId': 0}`
- **Node [114] PsychoscopeNode 114** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 2, 'groupId': 114, 'preNodes': [111], 'nextNodes': [117], 'unlockCondition': [[93, 3, 30]], 'sameGroupId': 119}`
- **Node [115] PsychoscopeNode 115** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 2, 'groupId': 115, 'preNodes': [112, 118], 'nextNodes': [1108, 1109, 219], 'unlockCondition': [[93, 3, 50]], 'sameGroupId': 0}`
- **Node [116] PsychoscopeNode 116** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 2, 'groupId': 116, 'preNodes': [113], 'nextNodes': [1104, 1105, 218], 'unlockCondition': [[93, 3, 15]], 'sameGroupId': 0}`
- **Node [117] PsychoscopeNode 117** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 2, 'groupId': 117, 'preNodes': [119, 114], 'nextNodes': [1106, 1107], 'unlockCondition': [[93, 3, 35]], 'sameGroupId': 0}`
- **Node [118] PsychoscopeNode 118** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 2, 'groupId': 118, 'preNodes': [1106], 'nextNodes': [115], 'unlockCondition': [[93, 3, 45]], 'sameGroupId': 118}`
- **Node [119] PsychoscopeNode 119** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 2, 'groupId': 119, 'preNodes': [111], 'nextNodes': [117], 'unlockCondition': [[93, 3, 30]], 'sameGroupId': 119}`
- **Node [120] PsychoscopeNode 120** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 2, 'groupId': 120, 'preNodes': [1203, 1202], 'nextNodes': [123], 'unlockCondition': [[93, 3, 5]], 'sameGroupId': 0}`
- **Node [121] PsychoscopeNode 121** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 2, 'groupId': 121, 'preNodes': [1204, 1205], 'nextNodes': [124, 129], 'unlockCondition': [[93, 3, 25]], 'sameGroupId': 0}`
- **Node [122] PsychoscopeNode 122** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 2, 'groupId': 122, 'preNodes': [1207], 'nextNodes': [125], 'unlockCondition': [[93, 3, 45]], 'sameGroupId': 128}`
- **Node [123] PsychoscopeNode 123** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 2, 'groupId': 123, 'preNodes': [120], 'nextNodes': [126], 'unlockCondition': [[93, 3, 10]], 'sameGroupId': 0}`
- **Node [124] PsychoscopeNode 124** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 2, 'groupId': 124, 'preNodes': [121], 'nextNodes': [127], 'unlockCondition': [[93, 3, 30]], 'sameGroupId': 129}`
- **Node [125] PsychoscopeNode 125** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 2, 'groupId': 125, 'preNodes': [122, 128], 'nextNodes': [1208, 1209, 221], 'unlockCondition': [[93, 3, 50]], 'sameGroupId': 0}`
- **Node [126] PsychoscopeNode 126** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 2, 'groupId': 126, 'preNodes': [123], 'nextNodes': [1204, 1205, 220], 'unlockCondition': [[93, 3, 15]], 'sameGroupId': 0}`
- **Node [127] PsychoscopeNode 127** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 2, 'groupId': 127, 'preNodes': [129, 124], 'nextNodes': [1206, 1207], 'unlockCondition': [[93, 3, 35]], 'sameGroupId': 0}`
- **Node [128] PsychoscopeNode 128** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 2, 'groupId': 128, 'preNodes': [1206], 'nextNodes': [125], 'unlockCondition': [[93, 3, 45]], 'sameGroupId': 128}`
- **Node [129] PsychoscopeNode 129** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 2, 'groupId': 129, 'preNodes': [121], 'nextNodes': [127], 'unlockCondition': [[93, 3, 30]], 'sameGroupId': 129}`
- **Node [130] PsychoscopeNode 130** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 2, 'groupId': 130, 'preNodes': [1302, 1303], 'nextNodes': [133], 'unlockCondition': [[93, 3, 5]], 'sameGroupId': 0}`
- **Node [131] PsychoscopeNode 131** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 2, 'groupId': 131, 'preNodes': [1304, 1305], 'nextNodes': [139, 134], 'unlockCondition': [[93, 3, 25]], 'sameGroupId': 0}`
- **Node [132] PsychoscopeNode 132** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 2, 'groupId': 132, 'preNodes': [1306], 'nextNodes': [135], 'unlockCondition': [[93, 3, 45]], 'sameGroupId': 138}`
- **Node [133] PsychoscopeNode 133** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 2, 'groupId': 133, 'preNodes': [130], 'nextNodes': [136], 'unlockCondition': [[93, 3, 10]], 'sameGroupId': 0}`
- **Node [134] PsychoscopeNode 134** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 2, 'groupId': 134, 'preNodes': [131], 'nextNodes': [137], 'unlockCondition': [[93, 3, 30]], 'sameGroupId': 139}`
- **Node [135] PsychoscopeNode 135** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 2, 'groupId': 135, 'preNodes': [132, 138], 'nextNodes': [1308, 1309, 223], 'unlockCondition': [[93, 3, 50]], 'sameGroupId': 0}`
- **Node [136] PsychoscopeNode 136** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 2, 'groupId': 136, 'preNodes': [133], 'nextNodes': [1304, 1305, 222], 'unlockCondition': [[93, 3, 15]], 'sameGroupId': 0}`
- **Node [137] PsychoscopeNode 137** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 2, 'groupId': 137, 'preNodes': [134, 139], 'nextNodes': [1306, 1307], 'unlockCondition': [[93, 3, 35]], 'sameGroupId': 0}`
- **Node [138] PsychoscopeNode 138** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 2, 'groupId': 138, 'preNodes': [1307], 'nextNodes': [135], 'unlockCondition': [[93, 3, 45]], 'sameGroupId': 138}`
- **Node [139] PsychoscopeNode 139** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 2, 'groupId': 139, 'preNodes': [131], 'nextNodes': [137], 'unlockCondition': [[93, 3, 30]], 'sameGroupId': 139}`
- **Node [140] PsychoscopeNode 140** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 2, 'groupId': 140, 'preNodes': [1403, 1402], 'nextNodes': [143], 'unlockCondition': [[93, 3, 5]], 'sameGroupId': 0}`
- **Node [141] PsychoscopeNode 141** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 2, 'groupId': 141, 'preNodes': [1405, 1404], 'nextNodes': [144, 149], 'unlockCondition': [[93, 3, 25]], 'sameGroupId': 0}`
- **Node [142] PsychoscopeNode 142** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 2, 'groupId': 142, 'preNodes': [1406], 'nextNodes': [145], 'unlockCondition': [[93, 3, 45]], 'sameGroupId': 148}`
- **Node [143] PsychoscopeNode 143** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 2, 'groupId': 143, 'preNodes': [140], 'nextNodes': [146], 'unlockCondition': [[93, 3, 10]], 'sameGroupId': 0}`
- **Node [144] PsychoscopeNode 144** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 2, 'groupId': 144, 'preNodes': [141], 'nextNodes': [147], 'unlockCondition': [[93, 3, 30]], 'sameGroupId': 149}`
- **Node [145] PsychoscopeNode 145** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 2, 'groupId': 145, 'preNodes': [142, 148], 'nextNodes': [1408, 1409, 225], 'unlockCondition': [[93, 3, 50]], 'sameGroupId': 0}`
- **Node [146] PsychoscopeNode 146** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 2, 'groupId': 146, 'preNodes': [143], 'nextNodes': [1404, 1405, 224], 'unlockCondition': [[93, 3, 15]], 'sameGroupId': 0}`
- **Node [147] PsychoscopeNode 147** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 2, 'groupId': 147, 'preNodes': [144, 149], 'nextNodes': [1406, 1407], 'unlockCondition': [[93, 3, 35]], 'sameGroupId': 0}`
- **Node [148] PsychoscopeNode 148** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 2, 'groupId': 148, 'preNodes': [1407], 'nextNodes': [145], 'unlockCondition': [[93, 3, 45]], 'sameGroupId': 148}`
- **Node [149] PsychoscopeNode 149** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 2, 'groupId': 149, 'preNodes': [141], 'nextNodes': [147], 'unlockCondition': [[93, 3, 30]], 'sameGroupId': 149}`
- **Node [150] PsychoscopeNode 150** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 2, 'groupId': 150, 'preNodes': [1503, 1502], 'nextNodes': [155], 'unlockCondition': [[93, 3, 5]], 'sameGroupId': 0}`
- **Node [151] PsychoscopeNode 151** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 2, 'groupId': 151, 'preNodes': [1505, 1504], 'nextNodes': [159, 153], 'unlockCondition': [[93, 3, 25]], 'sameGroupId': 0}`
- **Node [152] PsychoscopeNode 152** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 2, 'groupId': 152, 'preNodes': [1507], 'nextNodes': [154], 'unlockCondition': [[93, 3, 45]], 'sameGroupId': 158}`
- **Node [153] PsychoscopeNode 153** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 2, 'groupId': 153, 'preNodes': [151], 'nextNodes': [157], 'unlockCondition': [[93, 3, 30]], 'sameGroupId': 159}`
- **Node [154] PsychoscopeNode 154** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 2, 'groupId': 154, 'preNodes': [158, 152], 'nextNodes': [1509, 1508, 227], 'unlockCondition': [[93, 3, 50]], 'sameGroupId': 0}`
- **Node [155] PsychoscopeNode 155** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 2, 'groupId': 155, 'preNodes': [150], 'nextNodes': [156], 'unlockCondition': [[93, 3, 10]], 'sameGroupId': 0}`
- **Node [156] PsychoscopeNode 156** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 2, 'groupId': 156, 'preNodes': [155], 'nextNodes': [1504, 1505, 226], 'unlockCondition': [[93, 3, 15]], 'sameGroupId': 0}`
- **Node [157] PsychoscopeNode 157** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 2, 'groupId': 157, 'preNodes': [153, 159], 'nextNodes': [1506, 1507], 'unlockCondition': [[93, 3, 35]], 'sameGroupId': 0}`
- **Node [158] PsychoscopeNode 158** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 2, 'groupId': 158, 'preNodes': [1506], 'nextNodes': [154], 'unlockCondition': [[93, 3, 45]], 'sameGroupId': 158}`
- **Node [159] PsychoscopeNode 159** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 2, 'groupId': 159, 'preNodes': [151], 'nextNodes': [157], 'unlockCondition': [[93, 3, 30]], 'sameGroupId': 159}`
- **Node [160] PsychoscopeNode 160** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 2, 'groupId': 160, 'preNodes': [1602], 'nextNodes': [163], 'unlockCondition': [[93, 3, 5]], 'sameGroupId': 0}`
- **Node [161] PsychoscopeNode 161** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 2, 'groupId': 161, 'preNodes': [1604, 1603], 'nextNodes': [164, 169], 'unlockCondition': [[93, 3, 25]], 'sameGroupId': 0}`
- **Node [162] PsychoscopeNode 162** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 2, 'groupId': 162, 'preNodes': [1605, 1606], 'nextNodes': [165], 'unlockCondition': [[93, 3, 45]], 'sameGroupId': 168}`
- **Node [163] PsychoscopeNode 163** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 2, 'groupId': 163, 'preNodes': [160], 'nextNodes': [166], 'unlockCondition': [[93, 3, 10]], 'sameGroupId': 0}`
- **Node [164] PsychoscopeNode 164** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 2, 'groupId': 164, 'preNodes': [161], 'nextNodes': [167], 'unlockCondition': [[93, 3, 30]], 'sameGroupId': 169}`
- **Node [165] PsychoscopeNode 165** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 2, 'groupId': 165, 'preNodes': [168, 162], 'nextNodes': [1608, 1609, 229], 'unlockCondition': [[93, 3, 50]], 'sameGroupId': 0}`
- **Node [166] PsychoscopeNode 166** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 2, 'groupId': 166, 'preNodes': [163], 'nextNodes': [1603, 1604, 228], 'unlockCondition': [[93, 3, 15]], 'sameGroupId': 0}`
- **Node [167] PsychoscopeNode 167** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 2, 'groupId': 167, 'preNodes': [169, 164], 'nextNodes': [1606, 1605, 1607], 'unlockCondition': [[93, 3, 35]], 'sameGroupId': 0}`
- **Node [168] PsychoscopeNode 168** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 2, 'groupId': 168, 'preNodes': [1607, 1606], 'nextNodes': [165], 'unlockCondition': [[93, 3, 45]], 'sameGroupId': 168}`
- **Node [169] PsychoscopeNode 169** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 2, 'groupId': 169, 'preNodes': [161], 'nextNodes': [167], 'unlockCondition': [[93, 3, 30]], 'sameGroupId': 169}`
- **Node [170] PsychoscopeNode 170** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 2, 'groupId': 170, 'preNodes': [1703, 1702], 'nextNodes': [173], 'unlockCondition': [[93, 3, 5]], 'sameGroupId': 0}`
- **Node [171] PsychoscopeNode 171** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 2, 'groupId': 171, 'preNodes': [1705, 1704], 'nextNodes': [174, 179], 'unlockCondition': [[93, 3, 25]], 'sameGroupId': 0}`
- **Node [172] PsychoscopeNode 172** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 2, 'groupId': 172, 'preNodes': [1707], 'nextNodes': [175], 'unlockCondition': [[93, 3, 45]], 'sameGroupId': 177}`
- **Node [173] PsychoscopeNode 173** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 2, 'groupId': 173, 'preNodes': [170], 'nextNodes': [176], 'unlockCondition': [[93, 3, 10]], 'sameGroupId': 0}`
- **Node [174] PsychoscopeNode 174** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 2, 'groupId': 174, 'preNodes': [171], 'nextNodes': [178], 'unlockCondition': [[93, 3, 30]], 'sameGroupId': 179}`
- **Node [175] PsychoscopeNode 175** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 2, 'groupId': 175, 'preNodes': [177, 172], 'nextNodes': [1708, 1709, 231], 'unlockCondition': [[93, 3, 50]], 'sameGroupId': 0}`
- **Node [176] PsychoscopeNode 176** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 2, 'groupId': 176, 'preNodes': [173], 'nextNodes': [1704, 1705, 230], 'unlockCondition': [[93, 3, 15]], 'sameGroupId': 0}`
- **Node [177] PsychoscopeNode 177** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 2, 'groupId': 177, 'preNodes': [1706], 'nextNodes': [175], 'unlockCondition': [[93, 3, 45]], 'sameGroupId': 177}`
- **Node [178] PsychoscopeNode 178** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 2, 'groupId': 178, 'preNodes': [179, 174], 'nextNodes': [1706, 1707], 'unlockCondition': [[93, 3, 35]], 'sameGroupId': 0}`
- **Node [179] PsychoscopeNode 179** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 2, 'groupId': 179, 'preNodes': [171], 'nextNodes': [178], 'unlockCondition': [[93, 3, 30]], 'sameGroupId': 179}`
- **Node [216] PsychoscopeNode 216** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 2, 'groupId': 216, 'preNodes': [106], 'nextNodes': [], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 0}`
- **Node [217] PsychoscopeNode 217** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 2, 'groupId': 217, 'preNodes': [105], 'nextNodes': [], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 0}`
- **Node [218] PsychoscopeNode 218** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 2, 'groupId': 218, 'preNodes': [116], 'nextNodes': [], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 0}`
- **Node [219] PsychoscopeNode 219** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 2, 'groupId': 219, 'preNodes': [115], 'nextNodes': [], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 0}`
- **Node [220] PsychoscopeNode 220** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 2, 'groupId': 220, 'preNodes': [126], 'nextNodes': [], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 0}`
- **Node [221] PsychoscopeNode 221** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 2, 'groupId': 221, 'preNodes': [125], 'nextNodes': [], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 0}`
- **Node [222] PsychoscopeNode 222** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 2, 'groupId': 222, 'preNodes': [136], 'nextNodes': [], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 0}`
- **Node [223] PsychoscopeNode 223** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 2, 'groupId': 223, 'preNodes': [135], 'nextNodes': [], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 0}`
- **Node [224] PsychoscopeNode 224** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 2, 'groupId': 224, 'preNodes': [146], 'nextNodes': [], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 0}`
- **Node [225] PsychoscopeNode 225** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 2, 'groupId': 225, 'preNodes': [145], 'nextNodes': [], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 0}`
- **Node [226] PsychoscopeNode 226** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 2, 'groupId': 226, 'preNodes': [156], 'nextNodes': [], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 0}`
- **Node [227] PsychoscopeNode 227** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 2, 'groupId': 227, 'preNodes': [154], 'nextNodes': [], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 0}`
- **Node [228] PsychoscopeNode 228** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 2, 'groupId': 228, 'preNodes': [166], 'nextNodes': [], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 0}`
- **Node [229] PsychoscopeNode 229** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 2, 'groupId': 229, 'preNodes': [165], 'nextNodes': [], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 0}`
- **Node [230] PsychoscopeNode 230** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 2, 'groupId': 230, 'preNodes': [176], 'nextNodes': [], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 0}`
- **Node [231] PsychoscopeNode 231** — ประเภท: `โหนดช่องใส่ Factor (Factor Socket)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 2, 'groupId': 231, 'preNodes': [175], 'nextNodes': [], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 0}`
- **Node [1001] PsychoscopeNode 1001** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 1, 'groupId': 1001, 'preNodes': [], 'nextNodes': [1002, 1003], 'unlockCondition': [], 'sameGroupId': 0}`
- **Node [1002] PsychoscopeNode 1002** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 1, 'groupId': 1002, 'preNodes': [1001], 'nextNodes': [100], 'unlockCondition': [], 'sameGroupId': 1002}`
- **Node [1003] PsychoscopeNode 1003** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 1, 'groupId': 1003, 'preNodes': [1001], 'nextNodes': [100], 'unlockCondition': [], 'sameGroupId': 1002}`
- **Node [1004] PsychoscopeNode 1004** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 1, 'groupId': 1004, 'preNodes': [106], 'nextNodes': [101], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 1005}`
- **Node [1005] PsychoscopeNode 1005** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 1, 'groupId': 1005, 'preNodes': [106], 'nextNodes': [101], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 1005}`
- **Node [1006] PsychoscopeNode 1006** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 1, 'groupId': 1006, 'preNodes': [107], 'nextNodes': [108], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1007}`
- **Node [1007] PsychoscopeNode 1007** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 1, 'groupId': 1007, 'preNodes': [107], 'nextNodes': [102], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1007}`
- **Node [1008] PsychoscopeNode 1008** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 1, 'groupId': 1008, 'preNodes': [105], 'nextNodes': [1010], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 1009}`
- **Node [1009] PsychoscopeNode 1009** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 1, 'groupId': 1009, 'preNodes': [105], 'nextNodes': [1010], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 1009}`
- **Node [1010] PsychoscopeNode 1010** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 1, 'nodeType': 1, 'groupId': 1010, 'preNodes': [], 'nextNodes': [], 'unlockCondition': [[93, 3, 60]], 'sameGroupId': 0}`
- **Node [1101] PsychoscopeNode 1101** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 1, 'groupId': 1101, 'preNodes': [], 'nextNodes': [1102, 1103], 'unlockCondition': [], 'sameGroupId': 0}`
- **Node [1102] PsychoscopeNode 1102** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 1, 'groupId': 1102, 'preNodes': [1101], 'nextNodes': [110], 'unlockCondition': [], 'sameGroupId': 1103}`
- **Node [1103] PsychoscopeNode 1103** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 1, 'groupId': 1103, 'preNodes': [1101], 'nextNodes': [110], 'unlockCondition': [], 'sameGroupId': 1103}`
- **Node [1104] PsychoscopeNode 1104** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 1, 'groupId': 1104, 'preNodes': [116], 'nextNodes': [111], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 1105}`
- **Node [1105] PsychoscopeNode 1105** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 1, 'groupId': 1105, 'preNodes': [116], 'nextNodes': [111], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 1105}`
- **Node [1106] PsychoscopeNode 1106** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 1, 'groupId': 1106, 'preNodes': [117], 'nextNodes': [118], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1107}`
- **Node [1107] PsychoscopeNode 1107** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 1, 'groupId': 1107, 'preNodes': [117], 'nextNodes': [112], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1107}`
- **Node [1108] PsychoscopeNode 1108** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 1, 'groupId': 1108, 'preNodes': [115], 'nextNodes': [1110], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 1109}`
- **Node [1109] PsychoscopeNode 1109** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 1, 'groupId': 1109, 'preNodes': [115], 'nextNodes': [1110], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 1109}`
- **Node [1110] PsychoscopeNode 1110** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 2, 'nodeType': 1, 'groupId': 1110, 'preNodes': [1109, 1108], 'nextNodes': [], 'unlockCondition': [[93, 3, 60]], 'sameGroupId': 0}`
- **Node [1201] PsychoscopeNode 1201** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 1, 'groupId': 1201, 'preNodes': [], 'nextNodes': [1202, 1203], 'unlockCondition': [], 'sameGroupId': 0}`
- **Node [1202] PsychoscopeNode 1202** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 1, 'groupId': 1202, 'preNodes': [1201], 'nextNodes': [120], 'unlockCondition': [], 'sameGroupId': 1203}`
- **Node [1203] PsychoscopeNode 1203** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 1, 'groupId': 1203, 'preNodes': [1201], 'nextNodes': [120], 'unlockCondition': [], 'sameGroupId': 1203}`
- **Node [1204] PsychoscopeNode 1204** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 1, 'groupId': 1204, 'preNodes': [126], 'nextNodes': [121], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 1205}`
- **Node [1205] PsychoscopeNode 1205** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 1, 'groupId': 1205, 'preNodes': [126], 'nextNodes': [121], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 1205}`
- **Node [1206] PsychoscopeNode 1206** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 1, 'groupId': 1206, 'preNodes': [127], 'nextNodes': [128], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1207}`
- **Node [1207] PsychoscopeNode 1207** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 1, 'groupId': 1207, 'preNodes': [127], 'nextNodes': [122], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1207}`
- **Node [1208] PsychoscopeNode 1208** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 1, 'groupId': 1208, 'preNodes': [125], 'nextNodes': [1210], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 1209}`
- **Node [1209] PsychoscopeNode 1209** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 1, 'groupId': 1209, 'preNodes': [125], 'nextNodes': [1210], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 1209}`
- **Node [1210] PsychoscopeNode 1210** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 3, 'nodeType': 1, 'groupId': 1210, 'preNodes': [1209, 1208], 'nextNodes': [], 'unlockCondition': [[93, 3, 60]], 'sameGroupId': 0}`
- **Node [1301] PsychoscopeNode 1301** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 1, 'groupId': 1301, 'preNodes': [], 'nextNodes': [1302, 1303], 'unlockCondition': [], 'sameGroupId': 0}`
- **Node [1302] PsychoscopeNode 1302** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 1, 'groupId': 1302, 'preNodes': [1301], 'nextNodes': [130], 'unlockCondition': [], 'sameGroupId': 1303}`
- **Node [1303] PsychoscopeNode 1303** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 1, 'groupId': 1303, 'preNodes': [1301], 'nextNodes': [130], 'unlockCondition': [], 'sameGroupId': 1303}`
- **Node [1304] PsychoscopeNode 1304** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 1, 'groupId': 1304, 'preNodes': [136], 'nextNodes': [131], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 1305}`
- **Node [1305] PsychoscopeNode 1305** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 1, 'groupId': 1305, 'preNodes': [136], 'nextNodes': [131], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 1305}`
- **Node [1306] PsychoscopeNode 1306** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 1, 'groupId': 1306, 'preNodes': [137], 'nextNodes': [132], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1307}`
- **Node [1307] PsychoscopeNode 1307** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 1, 'groupId': 1307, 'preNodes': [137], 'nextNodes': [138], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1307}`
- **Node [1308] PsychoscopeNode 1308** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 1, 'groupId': 1308, 'preNodes': [135], 'nextNodes': [1310], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 1309}`
- **Node [1309] PsychoscopeNode 1309** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 1, 'groupId': 1309, 'preNodes': [135], 'nextNodes': [1310], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 1309}`
- **Node [1310] PsychoscopeNode 1310** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 4, 'nodeType': 1, 'groupId': 1310, 'preNodes': [1308, 1309], 'nextNodes': [], 'unlockCondition': [[93, 3, 60]], 'sameGroupId': 0}`
- **Node [1401] PsychoscopeNode 1401** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 1, 'groupId': 1401, 'preNodes': [], 'nextNodes': [1402, 1403], 'unlockCondition': [], 'sameGroupId': 0}`
- **Node [1402] PsychoscopeNode 1402** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 1, 'groupId': 1402, 'preNodes': [1401], 'nextNodes': [140], 'unlockCondition': [], 'sameGroupId': 1403}`
- **Node [1403] PsychoscopeNode 1403** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 1, 'groupId': 1403, 'preNodes': [1401], 'nextNodes': [140], 'unlockCondition': [], 'sameGroupId': 1403}`
- **Node [1404] PsychoscopeNode 1404** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 1, 'groupId': 1404, 'preNodes': [146], 'nextNodes': [141], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 1405}`
- **Node [1405] PsychoscopeNode 1405** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 1, 'groupId': 1405, 'preNodes': [146], 'nextNodes': [141], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 1405}`
- **Node [1406] PsychoscopeNode 1406** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 1, 'groupId': 1406, 'preNodes': [147], 'nextNodes': [142], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1407}`
- **Node [1407] PsychoscopeNode 1407** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 1, 'groupId': 1407, 'preNodes': [147], 'nextNodes': [148], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1407}`
- **Node [1408] PsychoscopeNode 1408** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 1, 'groupId': 1408, 'preNodes': [145], 'nextNodes': [1410], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 1409}`
- **Node [1409] PsychoscopeNode 1409** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 1, 'groupId': 1409, 'preNodes': [145], 'nextNodes': [1410], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 1409}`
- **Node [1410] PsychoscopeNode 1410** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 5, 'nodeType': 1, 'groupId': 1410, 'preNodes': [1409, 1408], 'nextNodes': [], 'unlockCondition': [[93, 3, 60]], 'sameGroupId': 0}`
- **Node [1501] PsychoscopeNode 1501** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 1, 'groupId': 1501, 'preNodes': [], 'nextNodes': [1502, 1503], 'unlockCondition': [], 'sameGroupId': 0}`
- **Node [1502] PsychoscopeNode 1502** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 1, 'groupId': 1502, 'preNodes': [1501], 'nextNodes': [150], 'unlockCondition': [], 'sameGroupId': 1503}`
- **Node [1503] PsychoscopeNode 1503** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 1, 'groupId': 1503, 'preNodes': [1501], 'nextNodes': [150], 'unlockCondition': [], 'sameGroupId': 1503}`
- **Node [1504] PsychoscopeNode 1504** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 1, 'groupId': 1504, 'preNodes': [156], 'nextNodes': [151], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 1505}`
- **Node [1505] PsychoscopeNode 1505** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 1, 'groupId': 1505, 'preNodes': [156], 'nextNodes': [151], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 1505}`
- **Node [1506] PsychoscopeNode 1506** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 1, 'groupId': 1506, 'preNodes': [157], 'nextNodes': [158], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1507}`
- **Node [1507] PsychoscopeNode 1507** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 1, 'groupId': 1507, 'preNodes': [157], 'nextNodes': [152], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1507}`
- **Node [1508] PsychoscopeNode 1508** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 1, 'groupId': 1508, 'preNodes': [154], 'nextNodes': [1510], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 1509}`
- **Node [1509] PsychoscopeNode 1509** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 1, 'groupId': 1509, 'preNodes': [154], 'nextNodes': [1510], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 1509}`
- **Node [1510] PsychoscopeNode 1510** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 6, 'nodeType': 1, 'groupId': 1510, 'preNodes': [1509, 1508], 'nextNodes': [], 'unlockCondition': [[93, 3, 60]], 'sameGroupId': 0}`
- **Node [1601] PsychoscopeNode 1601** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 1, 'groupId': 1601, 'preNodes': [], 'nextNodes': [1602], 'unlockCondition': [], 'sameGroupId': 0}`
- **Node [1602] PsychoscopeNode 1602** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 1, 'groupId': 1602, 'preNodes': [1601], 'nextNodes': [160], 'unlockCondition': [], 'sameGroupId': 0}`
- **Node [1603] PsychoscopeNode 1603** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 1, 'groupId': 1603, 'preNodes': [166], 'nextNodes': [161], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 1604}`
- **Node [1604] PsychoscopeNode 1604** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 1, 'groupId': 1604, 'preNodes': [166], 'nextNodes': [161], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 1604}`
- **Node [1605] PsychoscopeNode 1605** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 1, 'groupId': 1605, 'preNodes': [167], 'nextNodes': [162], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1607}`
- **Node [1606] PsychoscopeNode 1606** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 1, 'groupId': 1606, 'preNodes': [167], 'nextNodes': [162, 168], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1607}`
- **Node [1607] PsychoscopeNode 1607** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 1, 'groupId': 1607, 'preNodes': [167], 'nextNodes': [168], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1607}`
- **Node [1608] PsychoscopeNode 1608** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 1, 'groupId': 1608, 'preNodes': [165], 'nextNodes': [1610], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 1609}`
- **Node [1609] PsychoscopeNode 1609** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 1, 'groupId': 1609, 'preNodes': [165], 'nextNodes': [1610], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 1609}`
- **Node [1610] PsychoscopeNode 1610** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 7, 'nodeType': 1, 'groupId': 1610, 'preNodes': [1609, 1608], 'nextNodes': [], 'unlockCondition': [[93, 3, 60]], 'sameGroupId': 0}`
- **Node [1701] PsychoscopeNode 1701** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 1, 'groupId': 1701, 'preNodes': [], 'nextNodes': [1702, 1703], 'unlockCondition': [], 'sameGroupId': 0}`
- **Node [1702] PsychoscopeNode 1702** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 1, 'groupId': 1702, 'preNodes': [1701], 'nextNodes': [170], 'unlockCondition': [], 'sameGroupId': 1703}`
- **Node [1703] PsychoscopeNode 1703** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 1, 'groupId': 1703, 'preNodes': [1701], 'nextNodes': [170], 'unlockCondition': [], 'sameGroupId': 1703}`
- **Node [1704] PsychoscopeNode 1704** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 1, 'groupId': 1704, 'preNodes': [176], 'nextNodes': [171], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 1705}`
- **Node [1705] PsychoscopeNode 1705** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 1, 'groupId': 1705, 'preNodes': [176], 'nextNodes': [171], 'unlockCondition': [[93, 3, 20]], 'sameGroupId': 1705}`
- **Node [1706] PsychoscopeNode 1706** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 1, 'groupId': 1706, 'preNodes': [178], 'nextNodes': [177], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1707}`
- **Node [1707] PsychoscopeNode 1707** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 1, 'groupId': 1707, 'preNodes': [178], 'nextNodes': [172], 'unlockCondition': [[93, 3, 40]], 'sameGroupId': 1707}`
- **Node [1708] PsychoscopeNode 1708** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 1, 'groupId': 1708, 'preNodes': [175], 'nextNodes': [1710], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 1709}`
- **Node [1709] PsychoscopeNode 1709** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 1, 'groupId': 1709, 'preNodes': [175], 'nextNodes': [1710], 'unlockCondition': [[93, 3, 55]], 'sameGroupId': 1709}`
- **Node [1710] PsychoscopeNode 1710** — ประเภท: `โหนดเลือกบัฟ (Buff Node)` | ข้อมูลโครงสร้าง: `{'templateId': 8, 'nodeType': 1, 'groupId': 1710, 'preNodes': [1709, 1708], 'nextNodes': [], 'unlockCondition': [[93, 3, 60]], 'sameGroupId': 0}`

---
## 6.3 รายการเอฟเฟกต์บัฟในโหนด (`ordinaryEffects`)

- **Effect [1001] NodeBuff 1001**:  | Raw: `{'id': 1001, 'level': 1, 'effects': [[3, 3002010, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent/s2talent01_01', 'unlockConsume': [[1220005, 1]], 'fightValue': 650}`
- **Effect [1002] NodeBuff 1002**:  | Raw: `{'id': 1002, 'level': 1, 'effects': [[3, 3002020, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1003] NodeBuff 1003**:  | Raw: `{'id': 1003, 'level': 1, 'effects': [[3, 3002030, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_03', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1004] NodeBuff 1004**:  | Raw: `{'id': 1004, 'level': 1, 'effects': [[3, 3002040, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_04', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1005] NodeBuff 1005**:  | Raw: `{'id': 1005, 'level': 1, 'effects': [[3, 3002050, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1006] NodeBuff 1006**:  | Raw: `{'id': 1006, 'level': 1, 'effects': [[3, 3002060, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1007] NodeBuff 1007**:  | Raw: `{'id': 1007, 'level': 1, 'effects': [[3, 3002070, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_07', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1008] NodeBuff 1008**:  | Raw: `{'id': 1008, 'level': 1, 'effects': [[3, 3002080, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_08', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1009] NodeBuff 1009**:  | Raw: `{'id': 1009, 'level': 1, 'effects': [[3, 3002090, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_09', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1010] NodeBuff 1010**:  | Raw: `{'id': 1010, 'level': 1, 'effects': [[3, 3002100, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_10', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1101] NodeBuff 1101**:  | Raw: `{'id': 1101, 'level': 1, 'effects': [[3, 3002210, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent/s2talent02_01', 'unlockConsume': [[1220005, 1]], 'fightValue': 650}`
- **Effect [1102] NodeBuff 1102**:  | Raw: `{'id': 1102, 'level': 1, 'effects': [[3, 3002220, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent02_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1103] NodeBuff 1103**:  | Raw: `{'id': 1103, 'level': 1, 'effects': [[3, 3002230, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent02_03', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1104] NodeBuff 1104**:  | Raw: `{'id': 1104, 'level': 1, 'effects': [[3, 3002240, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent02_04', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1105] NodeBuff 1105**:  | Raw: `{'id': 1105, 'level': 1, 'effects': [[3, 3002250, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent02_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1106] NodeBuff 1106**:  | Raw: `{'id': 1106, 'level': 1, 'effects': [[3, 3002260, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent02_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1107] NodeBuff 1107**:  | Raw: `{'id': 1107, 'level': 1, 'effects': [[3, 3002270, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent02_07', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1108] NodeBuff 1108**:  | Raw: `{'id': 1108, 'level': 1, 'effects': [[3, 3002080, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_08', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1109] NodeBuff 1109**:  | Raw: `{'id': 1109, 'level': 1, 'effects': [[3, 3002090, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_09', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1110] NodeBuff 1110**:  | Raw: `{'id': 1110, 'level': 1, 'effects': [[3, 3002280, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent02_08', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1201] NodeBuff 1201**:  | Raw: `{'id': 1201, 'level': 1, 'effects': [[3, 3002410, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent/s2talent03_01', 'unlockConsume': [[1220005, 1]], 'fightValue': 650}`
- **Effect [1202] NodeBuff 1202**:  | Raw: `{'id': 1202, 'level': 1, 'effects': [[3, 3002420, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent03_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1203] NodeBuff 1203**:  | Raw: `{'id': 1203, 'level': 1, 'effects': [[3, 3002430, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent03_03', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1204] NodeBuff 1204**:  | Raw: `{'id': 1204, 'level': 1, 'effects': [[3, 3002440, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent03_04', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1205] NodeBuff 1205**:  | Raw: `{'id': 1205, 'level': 1, 'effects': [[3, 3002450, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent03_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1206] NodeBuff 1206**:  | Raw: `{'id': 1206, 'level': 1, 'effects': [[3, 3002460, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent03_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1207] NodeBuff 1207**:  | Raw: `{'id': 1207, 'level': 1, 'effects': [[3, 3002470, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent03_07', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1208] NodeBuff 1208**:  | Raw: `{'id': 1208, 'level': 1, 'effects': [[3, 3002080, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_08', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1209] NodeBuff 1209**:  | Raw: `{'id': 1209, 'level': 1, 'effects': [[3, 3002090, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_09', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1210] NodeBuff 1210**:  | Raw: `{'id': 1210, 'level': 1, 'effects': [[3, 3002480, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent03_08', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1301] NodeBuff 1301**:  | Raw: `{'id': 1301, 'level': 1, 'effects': [[3, 3002610, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent/s2talent04_01', 'unlockConsume': [[1220005, 1]], 'fightValue': 650}`
- **Effect [1302] NodeBuff 1302**:  | Raw: `{'id': 1302, 'level': 1, 'effects': [[3, 3002620, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent04_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1303] NodeBuff 1303**:  | Raw: `{'id': 1303, 'level': 1, 'effects': [[3, 3002630, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent04_03', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1304] NodeBuff 1304**:  | Raw: `{'id': 1304, 'level': 1, 'effects': [[3, 3002640, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent04_04', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1305] NodeBuff 1305**:  | Raw: `{'id': 1305, 'level': 1, 'effects': [[3, 3002650, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent04_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1306] NodeBuff 1306**:  | Raw: `{'id': 1306, 'level': 1, 'effects': [[3, 3002660, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent04_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1307] NodeBuff 1307**:  | Raw: `{'id': 1307, 'level': 1, 'effects': [[3, 3002460, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent03_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1308] NodeBuff 1308**:  | Raw: `{'id': 1308, 'level': 1, 'effects': [[3, 3002670, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent04_07', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1309] NodeBuff 1309**:  | Raw: `{'id': 1309, 'level': 1, 'effects': [[3, 3002080, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_08', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1310] NodeBuff 1310**:  | Raw: `{'id': 1310, 'level': 1, 'effects': [[3, 3002680, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent04_08', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1401] NodeBuff 1401**:  | Raw: `{'id': 1401, 'level': 1, 'effects': [[3, 3002810, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent/s2talent05_01', 'unlockConsume': [[1220005, 1]], 'fightValue': 650}`
- **Effect [1402] NodeBuff 1402**:  | Raw: `{'id': 1402, 'level': 1, 'effects': [[3, 3002820, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent05_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1403] NodeBuff 1403**:  | Raw: `{'id': 1403, 'level': 1, 'effects': [[3, 3002830, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent05_03', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1404] NodeBuff 1404**:  | Raw: `{'id': 1404, 'level': 1, 'effects': [[3, 3002840, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent05_04', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1405] NodeBuff 1405**:  | Raw: `{'id': 1405, 'level': 1, 'effects': [[3, 3002850, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent05_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1406] NodeBuff 1406**:  | Raw: `{'id': 1406, 'level': 1, 'effects': [[3, 3002860, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent05_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1407] NodeBuff 1407**:  | Raw: `{'id': 1407, 'level': 1, 'effects': [[3, 3002460, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent03_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1408] NodeBuff 1408**:  | Raw: `{'id': 1408, 'level': 1, 'effects': [[3, 3002080, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_08', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1409] NodeBuff 1409**:  | Raw: `{'id': 1409, 'level': 1, 'effects': [[3, 3002090, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_09', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1410] NodeBuff 1410**:  | Raw: `{'id': 1410, 'level': 1, 'effects': [[3, 3002870, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent05_07', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1501] NodeBuff 1501**:  | Raw: `{'id': 1501, 'level': 1, 'effects': [[3, 3003010, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent/s2talent06_01', 'unlockConsume': [[1220005, 1]], 'fightValue': 650}`
- **Effect [1502] NodeBuff 1502**:  | Raw: `{'id': 1502, 'level': 1, 'effects': [[3, 3003020, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent06_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1503] NodeBuff 1503**:  | Raw: `{'id': 1503, 'level': 1, 'effects': [[3, 3003070, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent06_03', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1504] NodeBuff 1504**:  | Raw: `{'id': 1504, 'level': 1, 'effects': [[3, 3002080, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_08', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1505] NodeBuff 1505**:  | Raw: `{'id': 1505, 'level': 1, 'effects': [[3, 3003040, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent06_04', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1506] NodeBuff 1506**:  | Raw: `{'id': 1506, 'level': 1, 'effects': [[3, 3003050, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent06_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1507] NodeBuff 1507**:  | Raw: `{'id': 1507, 'level': 1, 'effects': [[3, 3003060, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent06_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1508] NodeBuff 1508**:  | Raw: `{'id': 1508, 'level': 1, 'effects': [[3, 3003030, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent06_07', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1509] NodeBuff 1509**:  | Raw: `{'id': 1509, 'level': 1, 'effects': [[3, 3002460, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent03_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1510] NodeBuff 1510**:  | Raw: `{'id': 1510, 'level': 1, 'effects': [[3, 3003080, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent06_08', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1601] NodeBuff 1601**:  | Raw: `{'id': 1601, 'level': 1, 'effects': [[3, 3003210, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent/s2talent07_01', 'unlockConsume': [[1220005, 1]], 'fightValue': 650}`
- **Effect [1602] NodeBuff 1602**:  | Raw: `{'id': 1602, 'level': 1, 'effects': [[3, 3003220, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent07_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1603] NodeBuff 1603**:  | Raw: `{'id': 1603, 'level': 1, 'effects': [[3, 3003230, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent07_03', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1604] NodeBuff 1604**:  | Raw: `{'id': 1604, 'level': 1, 'effects': [[3, 3003240, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent07_04', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1605] NodeBuff 1605**:  | Raw: `{'id': 1605, 'level': 1, 'effects': [[3, 3003250, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent07_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1606] NodeBuff 1606**:  | Raw: `{'id': 1606, 'level': 1, 'effects': [[3, 3003260, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent07_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1607] NodeBuff 1607**:  | Raw: `{'id': 1607, 'level': 1, 'effects': [[3, 3002080, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_08', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1608] NodeBuff 1608**:  | Raw: `{'id': 1608, 'level': 1, 'effects': [[3, 3003270, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent07_07', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1609] NodeBuff 1609**:  | Raw: `{'id': 1609, 'level': 1, 'effects': [[3, 3003280, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent07_08', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1610] NodeBuff 1610**:  | Raw: `{'id': 1610, 'level': 1, 'effects': [[3, 3003290, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent07_09', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1701] NodeBuff 1701**:  | Raw: `{'id': 1701, 'level': 1, 'effects': [[3, 3003410, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent/s2talent08_01', 'unlockConsume': [[1220005, 1]], 'fightValue': 650}`
- **Effect [1702] NodeBuff 1702**:  | Raw: `{'id': 1702, 'level': 1, 'effects': [[3, 3003420, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent08_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1703] NodeBuff 1703**:  | Raw: `{'id': 1703, 'level': 1, 'effects': [[3, 3003430, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent08_03', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1704] NodeBuff 1704**:  | Raw: `{'id': 1704, 'level': 1, 'effects': [[3, 3003440, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent08_04', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1705] NodeBuff 1705**:  | Raw: `{'id': 1705, 'level': 1, 'effects': [[3, 3003450, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent08_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1706] NodeBuff 1706**:  | Raw: `{'id': 1706, 'level': 1, 'effects': [[3, 3003460, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent08_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1707] NodeBuff 1707**:  | Raw: `{'id': 1707, 'level': 1, 'effects': [[3, 3003470, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent08_07', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1708] NodeBuff 1708**:  | Raw: `{'id': 1708, 'level': 1, 'effects': [[3, 3002080, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_08', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1709] NodeBuff 1709**:  | Raw: `{'id': 1709, 'level': 1, 'effects': [[3, 3002090, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent01_09', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [1710] NodeBuff 1710**:  | Raw: `{'id': 1710, 'level': 1, 'effects': [[3, 3003480, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent08_08', 'unlockConsume': [[1220005, 1]], 'fightValue': 260}`
- **Effect [5001] NodeBuff 5001**:  | Raw: `{'id': 5001, 'level': 1, 'effects': [[3, 3004410, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent/s2talent051_01', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5002] NodeBuff 5002**:  | Raw: `{'id': 5002, 'level': 1, 'effects': [[3, 3004420, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5003] NodeBuff 5003**:  | Raw: `{'id': 5003, 'level': 1, 'effects': [[3, 3004430, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_03', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5004] NodeBuff 5004**:  | Raw: `{'id': 5004, 'level': 1, 'effects': [[3, 3004440, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_04', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5005] NodeBuff 5005**:  | Raw: `{'id': 5005, 'level': 1, 'effects': [[3, 3004450, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5006] NodeBuff 5006**:  | Raw: `{'id': 5006, 'level': 1, 'effects': [[3, 3004460, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5007] NodeBuff 5007**:  | Raw: `{'id': 5007, 'level': 1, 'effects': [[3, 3004420, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5008] NodeBuff 5008**:  | Raw: `{'id': 5008, 'level': 1, 'effects': [[3, 3004420, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5009] NodeBuff 5009**:  | Raw: `{'id': 5009, 'level': 1, 'effects': [[3, 3004450, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5101] NodeBuff 5101**:  | Raw: `{'id': 5101, 'level': 1, 'effects': [[3, 3003810, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent/s2talent052_01', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5102] NodeBuff 5102**:  | Raw: `{'id': 5102, 'level': 1, 'effects': [[3, 3003820, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent052_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5103] NodeBuff 5103**:  | Raw: `{'id': 5103, 'level': 1, 'effects': [[3, 3003830, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent052_03', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5104] NodeBuff 5104**:  | Raw: `{'id': 5104, 'level': 1, 'effects': [[3, 3003840, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent052_04', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5105] NodeBuff 5105**:  | Raw: `{'id': 5105, 'level': 1, 'effects': [[3, 3004450, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5106] NodeBuff 5106**:  | Raw: `{'id': 5106, 'level': 1, 'effects': [[3, 3004460, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5107] NodeBuff 5107**:  | Raw: `{'id': 5107, 'level': 1, 'effects': [[3, 3003820, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent052_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5108] NodeBuff 5108**:  | Raw: `{'id': 5108, 'level': 1, 'effects': [[3, 3003820, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent052_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5109] NodeBuff 5109**:  | Raw: `{'id': 5109, 'level': 1, 'effects': [[3, 3004450, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5201] NodeBuff 5201**:  | Raw: `{'id': 5201, 'level': 1, 'effects': [[3, 3004010, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent/s2talent053_01', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5202] NodeBuff 5202**:  | Raw: `{'id': 5202, 'level': 1, 'effects': [[3, 3004020, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent053_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5203] NodeBuff 5203**:  | Raw: `{'id': 5203, 'level': 1, 'effects': [[3, 3004030, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent053_03', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5204] NodeBuff 5204**:  | Raw: `{'id': 5204, 'level': 1, 'effects': [[3, 3004040, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent053_04', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5205] NodeBuff 5205**:  | Raw: `{'id': 5205, 'level': 1, 'effects': [[3, 3004450, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5206] NodeBuff 5206**:  | Raw: `{'id': 5206, 'level': 1, 'effects': [[3, 3004460, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5207] NodeBuff 5207**:  | Raw: `{'id': 5207, 'level': 1, 'effects': [[3, 3004020, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent053_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5208] NodeBuff 5208**:  | Raw: `{'id': 5208, 'level': 1, 'effects': [[3, 3004020, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent053_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5209] NodeBuff 5209**:  | Raw: `{'id': 5209, 'level': 1, 'effects': [[3, 3004450, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5301] NodeBuff 5301**:  | Raw: `{'id': 5301, 'level': 1, 'effects': [[3, 3004210, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent/s2talent054_01', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5302] NodeBuff 5302**:  | Raw: `{'id': 5302, 'level': 1, 'effects': [[3, 3004220, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent054_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5303] NodeBuff 5303**:  | Raw: `{'id': 5303, 'level': 1, 'effects': [[3, 3004230, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent054_03', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5304] NodeBuff 5304**:  | Raw: `{'id': 5304, 'level': 1, 'effects': [[3, 3004240, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent054_04', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5305] NodeBuff 5305**:  | Raw: `{'id': 5305, 'level': 1, 'effects': [[3, 3004450, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5306] NodeBuff 5306**:  | Raw: `{'id': 5306, 'level': 1, 'effects': [[3, 3004460, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5307] NodeBuff 5307**:  | Raw: `{'id': 5307, 'level': 1, 'effects': [[3, 3004220, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent054_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5308] NodeBuff 5308**:  | Raw: `{'id': 5308, 'level': 1, 'effects': [[3, 3004220, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent054_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5309] NodeBuff 5309**:  | Raw: `{'id': 5309, 'level': 1, 'effects': [[3, 3004450, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5401] NodeBuff 5401**:  | Raw: `{'id': 5401, 'level': 1, 'effects': [[3, 3004610, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent/s2talent055_01', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5402] NodeBuff 5402**:  | Raw: `{'id': 5402, 'level': 1, 'effects': [[3, 3004620, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent052_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5403] NodeBuff 5403**:  | Raw: `{'id': 5403, 'level': 1, 'effects': [[3, 3004630, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent052_03', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5404] NodeBuff 5404**:  | Raw: `{'id': 5404, 'level': 1, 'effects': [[3, 3004640, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent052_04', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5405] NodeBuff 5405**:  | Raw: `{'id': 5405, 'level': 1, 'effects': [[3, 3004450, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5406] NodeBuff 5406**:  | Raw: `{'id': 5406, 'level': 1, 'effects': [[3, 3004460, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5407] NodeBuff 5407**:  | Raw: `{'id': 5407, 'level': 1, 'effects': [[3, 3004620, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent052_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5408] NodeBuff 5408**:  | Raw: `{'id': 5408, 'level': 1, 'effects': [[3, 3004620, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent052_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5409] NodeBuff 5409**:  | Raw: `{'id': 5409, 'level': 1, 'effects': [[3, 3004450, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5501] NodeBuff 5501**:  | Raw: `{'id': 5501, 'level': 1, 'effects': [[3, 3004810, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent/s2talent056_01', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5502] NodeBuff 5502**:  | Raw: `{'id': 5502, 'level': 1, 'effects': [[3, 3004820, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent054_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5503] NodeBuff 5503**:  | Raw: `{'id': 5503, 'level': 1, 'effects': [[3, 3004830, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent054_03', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5504] NodeBuff 5504**:  | Raw: `{'id': 5504, 'level': 1, 'effects': [[3, 3004840, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent054_04', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5505] NodeBuff 5505**:  | Raw: `{'id': 5505, 'level': 1, 'effects': [[3, 3004450, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5506] NodeBuff 5506**:  | Raw: `{'id': 5506, 'level': 1, 'effects': [[3, 3004460, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_06', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5507] NodeBuff 5507**:  | Raw: `{'id': 5507, 'level': 1, 'effects': [[3, 3004820, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent054_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5508] NodeBuff 5508**:  | Raw: `{'id': 5508, 'level': 1, 'effects': [[3, 3004820, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent054_02', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`
- **Effect [5509] NodeBuff 5509**:  | Raw: `{'id': 5509, 'level': 1, 'effects': [[3, 3004450, 1]], 'buffValueKeys': [['a']], 'buffPars': [[0]], 'icon': 'ui/atlas/season_talent_icon/s2talent051_05', 'unlockConsume': [[1220005, 1]], 'fightValue': 0}`

---
## 6.4 เงื่อนไขช่องใส่ Factor (`intermediateSlots`) และช่อง Bond (`bondSlots`)

### ช่องใส่ Factor (`intermediateSlots`):
```json
{
  "100": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "101": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "102": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "103": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "104": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "105": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "106": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "107": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "108": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "109": {
    "factorTypes": [
      4
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality3"
  },
  "110": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "111": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "112": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "113": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "114": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "115": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "116": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "117": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "118": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "119": {
    "factorTypes": [
      4
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality3"
  },
  "120": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "121": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "122": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "123": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "124": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "125": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "126": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "127": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "128": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "129": {
    "factorTypes": [
      4
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality3"
  },
  "130": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "131": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "132": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "133": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "134": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "135": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "136": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "137": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "138": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "139": {
    "factorTypes": [
      4
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality3"
  },
  "140": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "141": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "142": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "143": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "144": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "145": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "146": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "147": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "148": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "149": {
    "factorTypes": [
      4
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality3"
  },
  "150": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "151": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "152": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "153": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "154": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "155": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "156": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "157": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "158": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "159": {
    "factorTypes": [
      4
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality3"
  },
  "160": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "161": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "162": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "163": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "164": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "165": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "166": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "167": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "168": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "169": {
    "factorTypes": [
      4
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality3"
  },
  "170": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "171": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "172": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "173": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "174": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "175": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "176": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "177": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "178": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "179": {
    "factorTypes": [
      4
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality3"
  },
  "180": {
    "factorTypes": [
      5
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality5"
  },
  "181": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "182": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "183": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "184": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "185": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "186": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "187": {
    "factorTypes": [
      5
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality5"
  },
  "188": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "189": {
    "factorTypes": [
      5
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality5"
  },
  "190": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "191": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "192": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "193": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "194": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "195": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "196": {
    "factorTypes": [
      5
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality5"
  },
  "197": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "198": {
    "factorTypes": [
      5
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality5"
  },
  "199": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "200": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "201": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "202": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "203": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "204": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "205": {
    "factorTypes": [
      5
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality5"
  },
  "206": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "207": {
    "factorTypes": [
      5
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality5"
  },
  "208": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "209": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "210": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "211": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "212": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "213": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "214": {
    "factorTypes": [
      5
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality5"
  },
  "215": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "216": {
    "factorTypes": [
      6
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "217": {
    "factorTypes": [
      6
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "218": {
    "factorTypes": [
      6
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "219": {
    "factorTypes": [
      6
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "220": {
    "factorTypes": [
      6
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "221": {
    "factorTypes": [
      6
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "222": {
    "factorTypes": [
      6
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "223": {
    "factorTypes": [
      6
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "224": {
    "factorTypes": [
      6
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "225": {
    "factorTypes": [
      6
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "226": {
    "factorTypes": [
      6
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "227": {
    "factorTypes": [
      6
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "228": {
    "factorTypes": [
      6
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "229": {
    "factorTypes": [
      6
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "230": {
    "factorTypes": [
      6
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "231": {
    "factorTypes": [
      6
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "232": {
    "factorTypes": [
      5
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality5"
  },
  "233": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "234": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "235": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "236": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "237": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "238": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "239": {
    "factorTypes": [
      5
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality5"
  },
  "240": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "241": {
    "factorTypes": [
      5
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality5"
  },
  "242": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "243": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "244": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "245": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  },
  "246": {
    "factorTypes": [],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality2"
  },
  "247": {
    "factorTypes": [
      2
    ],
    "professionIds": [],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality4"
  },
  "248": {
    "factorTypes": [
      5
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality5"
  },
  "249": {
    "factorTypes": [
      3
    ],
    "professionIds": [
      1,
      2,
      3,
      4,
      5,
      9,
      11,
      12,
      13
    ],
    "icon": "ui/atlas/season_talent/img_season_talent_tree_quality1"
  }
}
```
### ช่องใส่ Imagine สะสมแต้ม Bond (`bondSlots`):
```json
{
  "1": {
    "templateId": 5,
    "slotIndex": 1,
    "unlockCondition": []
  },
  "2": {
    "templateId": 5,
    "slotIndex": 2,
    "unlockCondition": [
      [
        93,
        3,
        10
      ]
    ]
  },
  "3": {
    "templateId": 5,
    "slotIndex": 3,
    "unlockCondition": [
      [
        93,
        3,
        25
      ]
    ]
  },
  "4": {
    "templateId": 5,
    "slotIndex": 4,
    "unlockCondition": [
      [
        93,
        3,
        40
      ]
    ]
  },
  "5": {
    "templateId": 5,
    "slotIndex": 5,
    "unlockCondition": [
      [
        93,
        3,
        60
      ]
    ]
  },
  "6": {
    "templateId": 2,
    "slotIndex": 1,
    "unlockCondition": []
  },
  "7": {
    "templateId": 2,
    "slotIndex": 2,
    "unlockCondition": [
      [
        93,
        3,
        10
      ]
    ]
  },
  "8": {
    "templateId": 2,
    "slotIndex": 3,
    "unlockCondition": [
      [
        93,
        3,
        25
      ]
    ]
  },
  "9": {
    "templateId": 2,
    "slotIndex": 4,
    "unlockCondition": [
      [
        93,
        3,
        40
      ]
    ]
  },
  "10": {
    "templateId": 2,
    "slotIndex": 5,
    "unlockCondition": [
      [
        93,
        3,
        60
      ]
    ]
  },
  "11": {
    "templateId": 3,
    "slotIndex": 1,
    "unlockCondition": []
  },
  "12": {
    "templateId": 3,
    "slotIndex": 2,
    "unlockCondition": [
      [
        93,
        3,
        10
      ]
    ]
  },
  "13": {
    "templateId": 3,
    "slotIndex": 3,
    "unlockCondition": [
      [
        93,
        3,
        25
      ]
    ]
  },
  "14": {
    "templateId": 3,
    "slotIndex": 4,
    "unlockCondition": [
      [
        93,
        3,
        40
      ]
    ]
  },
  "15": {
    "templateId": 3,
    "slotIndex": 5,
    "unlockCondition": [
      [
        93,
        3,
        60
      ]
    ]
  },
  "16": {
    "templateId": 4,
    "slotIndex": 1,
    "unlockCondition": []
  },
  "17": {
    "templateId": 4,
    "slotIndex": 2,
    "unlockCondition": [
      [
        93,
        3,
        10
      ]
    ]
  },
  "18": {
    "templateId": 4,
    "slotIndex": 3,
    "unlockCondition": [
      [
        93,
        3,
        25
      ]
    ]
  },
  "19": {
    "templateId": 4,
    "slotIndex": 4,
    "unlockCondition": [
      [
        93,
        3,
        40
      ]
    ]
  },
  "20": {
    "templateId": 4,
    "slotIndex": 5,
    "unlockCondition": [
      [
        93,
        3,
        60
      ]
    ]
  },
  "21": {
    "templateId": 1,
    "slotIndex": 1,
    "unlockCondition": []
  },
  "22": {
    "templateId": 1,
    "slotIndex": 2,
    "unlockCondition": [
      [
        93,
        3,
        10
      ]
    ]
  },
  "23": {
    "templateId": 1,
    "slotIndex": 3,
    "unlockCondition": [
      [
        93,
        3,
        25
      ]
    ]
  },
  "24": {
    "templateId": 1,
    "slotIndex": 4,
    "unlockCondition": [
      [
        93,
        3,
        40
      ]
    ]
  },
  "25": {
    "templateId": 1,
    "slotIndex": 5,
    "unlockCondition": [
      [
        93,
        3,
        60
      ]
    ]
  },
  "26": {
    "templateId": 6,
    "slotIndex": 1,
    "unlockCondition": []
  },
  "27": {
    "templateId": 6,
    "slotIndex": 2,
    "unlockCondition": [
      [
        93,
        3,
        10
      ]
    ]
  },
  "28": {
    "templateId": 6,
    "slotIndex": 3,
    "unlockCondition": [
      [
        93,
        3,
        25
      ]
    ]
  },
  "29": {
    "templateId": 6,
    "slotIndex": 4,
    "unlockCondition": [
      [
        93,
        3,
        40
      ]
    ]
  },
  "30": {
    "templateId": 6,
    "slotIndex": 5,
    "unlockCondition": [
      [
        93,
        3,
        60
      ]
    ]
  },
  "31": {
    "templateId": 7,
    "slotIndex": 1,
    "unlockCondition": []
  },
  "32": {
    "templateId": 7,
    "slotIndex": 2,
    "unlockCondition": [
      [
        93,
        3,
        10
      ]
    ]
  },
  "33": {
    "templateId": 7,
    "slotIndex": 3,
    "unlockCondition": [
      [
        93,
        3,
        25
      ]
    ]
  },
  "34": {
    "templateId": 7,
    "slotIndex": 4,
    "unlockCondition": [
      [
        93,
        3,
        40
      ]
    ]
  },
  "35": {
    "templateId": 7,
    "slotIndex": 5,
    "unlockCondition": [
      [
        93,
        3,
        60
      ]
    ]
  },
  "36": {
    "templateId": 8,
    "slotIndex": 1,
    "unlockCondition": []
  },
  "37": {
    "templateId": 8,
    "slotIndex": 2,
    "unlockCondition": [
      [
        93,
        3,
        10
      ]
    ]
  },
  "38": {
    "templateId": 8,
    "slotIndex": 3,
    "unlockCondition": [
      [
        93,
        3,
        25
      ]
    ]
  },
  "39": {
    "templateId": 8,
    "slotIndex": 4,
    "unlockCondition": [
      [
        93,
        3,
        40
      ]
    ]
  },
  "40": {
    "templateId": 8,
    "slotIndex": 5,
    "unlockCondition": [
      [
        93,
        3,
        60
      ]
    ]
  }
}
```