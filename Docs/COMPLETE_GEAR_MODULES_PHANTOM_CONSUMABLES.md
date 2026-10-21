# ข้อมูลฉบับสมบูรณ์ของ 5 ระบบที่เหลือสำหรับการคำนวณ Combat Simulator
ประกอบด้วย: **1. อาวุธพิเศษ & ออปชันม่วง (`equipment.json`), 2. Sigils ทุกระดับ (`enchants.json`), 3. Modules ครบ 21 ชนิด Lv.1–6 (`modules.json`), 4. Deep Slumber Psychoscope ทั้ง 8 สาย + Bond Points + Factors (`season-talents.json` & `phantom-factors.json`), และ 5. อาหารและยา (`cookingBuff.ts`)**

---

## 1. เอฟเฟกต์อาวุธพิเศษ (Far Sea / Raid Weapons) และออปชันม่วง (`equipment.json`)

### 1.1 รายการอาวุธ (`partId = 200`) และเอฟเฟกต์พิเศษประจำอาวุธ:
- **`[2000101] {'name': 'Novice Scythe Blade', 'description': 'A relatively fine weapon in the Stormblade.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000102] {'name': 'Novice Frost Staff', 'description': 'A relatively fine weapon in the Frost Mage.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000103] {'name': 'Novice Axe', 'description': 'A well-crafted weapon for the Twin Striker class.', 'flavorText': 'Crimson Lotus Hellfire, purifying evil in one battle.', 'weaponName': '涤罪恶火（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000104] {'name': 'Novice Lance', 'description': 'A relatively fine weapon in the Wind Knight.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000105] {'name': 'Novice Glory Ring', 'description': 'A relatively fine weapon in the Verdant Oracle.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000106] {'name': 'Thunder Strike', 'description': 'Thunder Flash - A relatively fine weapon in the Hand Cannon Class.', 'flavorText': 'Thunder Flash, unavoidable.', 'weaponName': '雷霆一闪（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000107] {'name': 'Novice Edge', 'description': 'A well-crafted weapon for Heavy Guardian.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000108] {'name': "Dark Spirit's Prayer", 'description': "Dark Spirit's Prayer - Ritual Blade, a relatively fine weapon for the Class.", 'flavorText': 'Ordinary ceremonial knife.', 'weaponName': '暗灵祈舞（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000109] {'name': 'Novice Longbow', 'description': 'A relatively fine weapon in the Marksman.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000110] {'name': 'Novice Aegis', 'description': 'A well-crafted weapon for Shield Knight.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000111] {'name': 'Novice Electric Guitar', 'description': 'A well-crafted weapon for Beat Performer.', 'flavorText': "A fiery melody forged in soul, echoing across the galaxy's light.", 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000191] {'name': 'Special small-scale weapon test', 'description': 'A relatively fine weapon in the Stormblade.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '小专武测试'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['101', '102']`)
- **`[2000192] {'name': 'Special large-scale weapon test', 'description': 'A relatively fine weapon in the Stormblade.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '大专武测试'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000201] {'name': 'Refined Scythe Blade', 'description': 'A rare good weapon in the Stormblade.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000202] {'name': 'Refined Frost Staff', 'description': 'A rare good weapon in the Frost Mage.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000203] {'name': 'Refined Lance', 'description': 'A rare good weapon for the Wind Knight class.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000204] {'name': 'Refined Glory Ring', 'description': 'A rare good weapon for the Verdant Oracle class.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000205] {'name': 'Refined Edge', 'description': 'A rare high-quality weapon for Heavy Guardian.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000206] {'name': 'Refined Longbow', 'description': 'A rare good weapon for the Marksman class.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000207] {'name': 'Refined Aegis', 'description': 'A rare high-quality weapon for Shield Knight.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000208] {'name': 'Refined Electric Guitar (Magic)', 'description': 'A well-crafted weapon for Beat Performer.', 'flavorText': "A fiery melody forged in soul, echoing across the galaxy's light.", 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000301] {'name': 'Stormblade Tachi - Novice', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000302] {'name': 'Everfrost Staff - Apprentice', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000303] {'name': 'Zephyr Lance - Assault', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000304] {'name': 'Revival Ring - Medic', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000305] {'name': 'Shatterblade - Guard', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000306] {'name': 'Luminous Longbow - Scout', 'description': 'An epic Marksman weapon.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000307] {'name': 'Divine Shield - Protector', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000308] {'name': 'Stormblade Tachi - Oboro', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '天罚神雷（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000309] {'name': 'Stormblade Tachi - Feather', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '天罚神雷（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000310] {'name': 'Stormblade Tachi - Oboro', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '天罚神雷（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000311] {'name': 'Stormblade Tachi - Feather', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '天罚神雷（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000312] {'name': 'Everfrost Staff - Frostbreath', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '冰之玉响（魔法）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000313] {'name': 'Everfrost Staff - Crystal', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '冰之玉响（魔法）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000314] {'name': 'Everfrost Staff - Frostbreath', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '冰之玉响（魔法）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000315] {'name': 'Everfrost Staff - Crystal', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '冰之玉响（魔法）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000316] {'name': 'Zephyr Lance - Gale', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '正义之风（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000317] {'name': 'Zephyr Lance - Windstride', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '正义之风（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000318] {'name': 'Zephyr Lance - Gale', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '正义之风（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000319] {'name': 'Zephyr Lance - Windstride', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '正义之风（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000320] {'name': 'Revival Ring - Puretrace', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '命理之森（魔法）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000321] {'name': 'Revival Ring - Healer', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '命理之森（魔法）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000322] {'name': 'Revival Ring - Puretrace', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '命理之森（魔法）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000323] {'name': 'Revival Ring - Healer', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '命理之森（魔法）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000324] {'name': 'Shatterblade - Bold', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '砂岩守御（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000325] {'name': 'Shatterblade - Ward', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '砂岩守御（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000326] {'name': 'Shatterblade - Bold', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '砂岩守御（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000327] {'name': 'Shatterblade - Ward', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '砂岩守御（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000328] {'name': 'Luminous Longbow - Hunter', 'description': 'An epic Marksman weapon.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '金玉长弓（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000329] {'name': 'Luminar Longbow - Sentry', 'description': 'An epic Marksman weapon.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '金玉长弓（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000330] {'name': 'Luminous Longbow - Hunter', 'description': 'An epic Marksman weapon.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '金玉长弓（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000331] {'name': 'Luminar Longbow - Sentry', 'description': 'An epic Marksman weapon.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '金玉长弓（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000332] {'name': 'Shield of Holy Light - Dawnlight', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '光灼银辉（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000333] {'name': 'Shield of Holy Light - Daybreak', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '光灼银辉（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000334] {'name': 'Shield of Holy Light - Dawnlight', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '光灼银辉（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000335] {'name': 'Shield of Holy Light - Daybreak', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '光灼银辉（物理）·极'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000336] {'name': 'Stormblade Tachi - Novice', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000337] {'name': 'Everfrost Staff - Apprentice', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000338] {'name': 'Zephyr Lance - Assault', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000339] {'name': 'Revival Ring - Medic', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000340] {'name': 'Shatterblade - Guard', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000341] {'name': 'Luminous Longbow - Scout', 'description': 'An epic Marksman weapon.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000342] {'name': 'Divine Shield - Protector', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000343] {'name': 'Stormblade Tachi - Novice', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000344] {'name': 'Everfrost Staff - Apprentice', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000345] {'name': 'Zephyr Lance - Assault', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000346] {'name': 'Revival Ring - Medic', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000347] {'name': 'Shatterblade - Guard', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000348] {'name': 'Luminous Longbow - Scout', 'description': 'An epic Marksman weapon.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000349] {'name': 'Divine Shield - Protector', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000350] {'name': 'Blazing Strings - Chant', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000351] {'name': 'Blazing Strings - Battle Ode', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000352] {'name': 'Blazing Strings - Battle Ode', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000353] {'name': 'Blazing Strings - Tribute', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000354] {'name': 'Blazing Strings - Tribute', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000355] {'name': 'Blazing Strings - Chant', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000356] {'name': 'Blazing Strings - Chant', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000357] {'name': 'Stormblade Tachi - Novice', 'description': 'An epic Stormblade weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Divine thunder descends, like heaven's punishment! Its blade is sharp enough to cut hair with a blow.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000358] {'name': 'Everfrost Staff - Apprentice', 'description': 'An epic Frost Mage weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Jade in essence, ice to the touch.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000359] {'name': 'Zephyr Lance - Assault', 'description': 'An epic Wind Knight weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Steady as the forest, swift as the wind, unyielding as the mountain, fierce as the fire.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000360] {'name': 'Revival Ring - Medic', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Embraced by the forest, ashes blaze anew.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000361] {'name': 'Shatterblade - Guard', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Turn stone to sand, gather sand to walls-stand unwavering, oath unbroken.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000362] {'name': 'Luminous Longbow - Scout', 'description': 'An epic Marksman weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Bend the bow like a full moon, unleash fury like a piercing rainbow.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000363] {'name': 'Divine Shield - Protector', 'description': 'An epic Shield Knight weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Clad in unyielding steel, ablaze with silver radiance.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000364] {'name': 'Blazing Strings - Chant', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000401] {'name': 'Glory Blade - Edge', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000402] {'name': 'Glory Blade - Avidya', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000403] {'name': 'Glory Blade - Chaos', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000404] {'name': 'Glory Blade - Avidya', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000405] {'name': 'Glory Blade - Chaos', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000406] {'name': 'Glory Staff - Incantation', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000407] {'name': 'Glory Staff - Frost', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000408] {'name': 'Glory Staff - Glacial', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000409] {'name': 'Glory Staff - Frost', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000410] {'name': 'Glory Staff - Glacial', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000411] {'name': 'Tethered Lance - Vanguard', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000412] {'name': 'Glory Lance - Verdant', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000413] {'name': 'Glory Lance - Tempest Flow', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000414] {'name': 'Glory Lance - Verdant', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000415] {'name': 'Glory Lance - Tempest Flow', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000416] {'name': 'Glory Ring - Warden', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000417] {'name': 'Glory Ring - Harmony', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000418] {'name': 'Glory Ring - Wish', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000419] {'name': 'Glory Ring - Harmony', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000420] {'name': 'Glory Ring - Wish', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000421] {'name': 'Glory Edge - Conquest', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000422] {'name': 'Glory Edge - Valor', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000423] {'name': 'Glory Edge - Tenacity', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000424] {'name': 'Glory Edge - Valor', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000425] {'name': 'Glory Edge - Tenacity', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000426] {'name': 'Glory Bow - Ranger', 'description': 'An epic Marksman weapon.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000427] {'name': 'Glory Bow - Forest', 'description': 'An epic Marksman weapon.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000428] {'name': 'Glory Bow - Precise', 'description': 'An epic Marksman weapon.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000429] {'name': 'Glory Bow - Forest', 'description': 'An epic Marksman weapon.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000430] {'name': 'Glory Bow - Precise', 'description': 'An epic Marksman weapon.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000431] {'name': 'Glory Aeg- Order', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000432] {'name': 'Glory Aeg - Radiant', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000433] {'name': 'Glory Aeg- Daybreak', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000434] {'name': 'Glory Aeg - Radiant', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000435] {'name': 'Glory Aeg- Daybreak', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000436] {'name': 'Glory Blade - Edge', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '[战火]天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000437] {'name': 'Glory Staff - Incantation', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '[战火]冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000438] {'name': 'Glory Lance - Vanguard', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '[战火]正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000439] {'name': 'Glory Ring - Warden', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '[战火]命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000440] {'name': 'Glory Edge - Conquest', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '[战火]砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000441] {'name': 'Glory Bow - Ranger', 'description': 'An epic Marksman weapon.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '[战火]金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000442] {'name': 'Glory Aeg- Order', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '[战火]光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000443] {'name': 'Glory Blade - Edge', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000444] {'name': 'Glory Staff - Incantation', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000445] {'name': 'Tethered Lance - Vanguard', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000446] {'name': 'Glory Ring - Warden', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000447] {'name': 'Glory Edge - Conquest', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000448] {'name': 'Glory Bow - Ranger', 'description': 'An epic Marksman weapon.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000449] {'name': 'Glory Aeg- Order', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000450] {'name': 'Thermal Arm - Harmo', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000451] {'name': 'Thermal Arm - Breaker', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000452] {'name': 'Thermal Arm - Breaker', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000453] {'name': 'Thermal Arm - Carol', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000454] {'name': 'Thermal Arm - Carol', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000455] {'name': 'Thermal Arm - Harmo', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000456] {'name': 'Thermal Arm - Harmo', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000457] {'name': 'Glory Blade - Edge', 'description': 'An epic Stormblade weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Divine thunder descends, like heaven's punishment! Its blade is sharp enough to cut hair with a blow.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000458] {'name': 'Glory Staff - Incantation', 'description': 'An epic Frost Mage weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Jade in essence, ice to the touch.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000459] {'name': 'Tethered Lance - Vanguard', 'description': 'An epic Wind Knight weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Steady as the forest, swift as the wind, unyielding as the mountain, fierce as the fire.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000460] {'name': 'Glory Ring - Warden', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Embraced by the forest, ashes blaze anew.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000461] {'name': 'Glory Edge - Conquest', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Turn stone to sand, gather sand to walls-stand unwavering, oath unbroken.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000462] {'name': 'Glory Bow - Ranger', 'description': 'An epic Marksman weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Bend the bow like a full moon, unleash fury like a piercing rainbow.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000463] {'name': 'Glory Aeg- Order', 'description': 'An epic Shield Knight weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Clad in unyielding steel, ablaze with silver radiance.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000464] {'name': 'Thermal Arm - Harmo', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000501] {'name': 'Thunder Blade - Anatta', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine Thunder Descends, like a heavenly punishment! Its blade is sharp enough to cut hair with a blow. An epic Stormblade weapon.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000502] {'name': 'Thunder Blade - Illuminate', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine Thunder Descends, like a heavenly punishment! Its blade is sharp enough to cut hair with a blow, An epic Stormblade weapon.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000503] {'name': 'Thunder Blade - Mirage', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine Thunder Descends, like a heavenly punishment! Its blade is sharp enough to cut hair with a blow, An epic Stormblade weapon.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000504] {'name': 'Thunder Blade - Illuminate', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine Thunder Descends, like a heavenly punishment! Its blade is sharp enough to cut hair with a blow, An epic Stormblade weapon.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000505] {'name': 'Thunder Blade - Mirage', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine Thunder Descends, like a heavenly punishment! Its blade is sharp enough to cut hair with a blow, An epic Stormblade weapon.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000506] {'name': 'Eclipse Staff - Magitech', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its texture is like jade, its feel like ice, an epic weapon for the Frost Mage.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000507] {'name': 'Eclipse Staff - Iceflow', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its texture is like jade, its feel like ice, an epic weapon for the Frost Mage.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000508] {'name': 'Eclipse Staff - Frostblade', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its texture is like jade, its feel like ice, an epic weapon for the Frost Mage.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000509] {'name': 'Eclipse Staff - Iceflow', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its texture is like jade, its feel like ice, an epic weapon for the Frost Mage.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000510] {'name': 'Eclipse Staff - Frostblade', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its texture is like jade, its feel like ice, an epic weapon for the Frost Mage.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000511] {'name': 'Eclipse Lance - Lionheart', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As gentle as a forest, as swift as the wind, immovable as a mountain, aggressive as fire, an epic weapon for the Wind Knight.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000512] {'name': 'Eclipse Lance - Storm', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As slow as a forest, as swift as the wind, immovable as a mountain, aggressive as fire, an epic weapon for the Wind Knight.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000513] {'name': 'Eclipse Lance - Strider', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As slow as a forest, as swift as the wind, immovable as a mountain, aggressive as fire, an epic weapon for the Wind Knight.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000514] {'name': 'Eclipse Lance - Storm', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As slow as a forest, as swift as the wind, immovable as a mountain, aggressive as fire, an epic weapon for the Wind Knight.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000515] {'name': 'Eclipse Lance - Strider', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As slow as a forest, as swift as the wind, immovable as a mountain, aggressive as fire, an epic weapon for the Wind Knight.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000516] {'name': 'Eclipse Ring - Oracle', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, resurrected from ashes, an epic weapon for the Verdant Oracle.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000517] {'name': 'Eclipse Ring - Soul', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, resurrected from ashes, an epic weapon for the Verdant Oracle.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000518] {'name': 'Eclipse Ring - Gospel', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, resurrected from ashes, an epic weapon for the Verdant Oracle.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000519] {'name': 'Eclipse Ring - Soul', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, resurrected from ashes, an epic weapon for the Verdant Oracle.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000520] {'name': 'Eclipse Ring - Gospel', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, resurrected from ashes, an epic weapon for the Verdant Oracle.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000521] {'name': 'Mountain Cleaver - Command', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering commitment! An epic weapon for the Heavy Guardian Class.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000522] {'name': 'Mountain Cleaver - Justiciar', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering commitment! An epic weapon for the Heavy Guardian Class.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000523] {'name': 'Mountain Cleaver - Undying', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering commitment! An epic weapon for the Heavy Guardian Class.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000524] {'name': 'Mountain Cleaver - Justiciar', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering commitment! An epic weapon for the Heavy Guardian Class.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000525] {'name': 'Mountain Cleaver - Undying', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering commitment! An epic weapon for the Heavy Guardian Class.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000526] {'name': 'Jade Longbow - Breaker', 'description': 'An epic Marksman weapon.', 'flavorText': 'Drawing a bow to its full moon, with energy piercing the rainbow, an epic weapon for the Marksman.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000527] {'name': 'Jade Longbow - Beastlord', 'description': 'An epic Marksman weapon.', 'flavorText': 'Drawing a bow to its full moon, with energy piercing the rainbow, an epic weapon for the Marksman.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000528] {'name': 'Jade Longbow - Hawkeye', 'description': 'An epic Marksman weapon.', 'flavorText': 'Drawing a bow to its full moon, with energy piercing the rainbow, an epic weapon for the Marksman.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000529] {'name': 'Jade Longbow - Beastlord', 'description': 'An epic Marksman weapon.', 'flavorText': 'Drawing a bow to its full moon, with energy piercing the rainbow, an epic weapon for the Marksman.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000530] {'name': 'Jade Longbow - Hawkeye', 'description': 'An epic Marksman weapon.', 'flavorText': 'Drawing a bow to its full moon, with energy piercing the rainbow, an epic weapon for the Marksman.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000531] {'name': 'Sacred Legacy - Judgment', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bear the burden and hold the sharp weapons. With a dazzling silver glow, this is an epic weapon for the Shield Knights.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000532] {'name': 'Sacred Legacy - Oath', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bearing Greatplate and wielding sharp weapons, with a dazzling silver glow, an epic weapon for the Shield Knights', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000533] {'name': 'Sacred Legacy - Reveal', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bearing Greatplate and wielding sharp weapons, with a dazzling silver glow, an epic weapon for the Shield Knights', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000534] {'name': 'Sacred Legacy - Oath', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bearing Greatplate and wielding sharp weapons, with a dazzling silver glow, an epic weapon for the Shield Knights', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000535] {'name': 'Sacred Legacy - Reveal', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bearing Greatplate and wielding sharp weapons, with a dazzling silver glow, an epic weapon for the Shield Knights', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000536] {'name': 'Thunder Blade - Anatta', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine Thunder Descends, like a heavenly punishment! Its blade is sharp enough to cut hair with a blow, An epic Stormblade weapon.', 'weaponName': '[战火]天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000537] {'name': 'Eclipse Staff - Magitech', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its texture is like jade, its feel like ice, an epic weapon for the Frost Mage.', 'weaponName': '[战火]冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000538] {'name': 'Eclipse Lance - Lionheart', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As slow as a forest, as swift as the wind, immovable as a mountain, aggressive as fire, an epic weapon for the Wind Knight.', 'weaponName': '[战火]正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000539] {'name': 'Eclipse Ring - Oracle', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, resurrected from ashes, an epic weapon for the Verdant Oracle.', 'weaponName': '[战火]命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000540] {'name': 'Mountain Cleaver - Command', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering commitment! An epic weapon for the Heavy Guardian Class.', 'weaponName': '[战火]砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000541] {'name': 'Jade Longbow - Breaker', 'description': 'An epic Marksman weapon.', 'flavorText': 'Drawing a bow to its full moon, with energy piercing the rainbow, an epic weapon for the Marksman.', 'weaponName': '[战火]金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000542] {'name': 'Sacred Legacy - Judgment', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bearing Greatplate and wielding sharp weapons, with a dazzling silver glow, an epic weapon for the Shield Knights', 'weaponName': '[战火]光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000543] {'name': 'Thunder Blade - Anatta', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine Thunder Descends, like a heavenly punishment! Its blade is sharp enough to cut hair with a blow, An epic Stormblade weapon.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000544] {'name': 'Eclipse Staff - Magitech', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its texture is like jade, its feel like ice, an epic weapon for the Frost Mage.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000545] {'name': 'Eclipse Lance - Lionheart', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As gentle as a forest, as swift as the wind, immovable as a mountain, aggressive as fire, an epic weapon for the Wind Knight.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000546] {'name': 'Eclipse Ring - Oracle', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, resurrected from ashes, an epic weapon for the Verdant Oracle.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000547] {'name': 'Mountain Cleaver - Command', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering commitment! An epic weapon for the Heavy Guardian Class.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000548] {'name': 'Jade Longbow - Breaker', 'description': 'An epic Marksman weapon.', 'flavorText': 'Drawing a bow to its full moon, with energy piercing the rainbow, an epic weapon for the Marksman.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000549] {'name': 'Sacred Legacy - Judgment', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bear the burden and hold the sharp weapons. With a dazzling silver glow, this is an epic weapon for the Shield Knights.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000550] {'name': 'Celestial Pyre - Severe', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000551] {'name': 'Celestial Pyre - Silent', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000552] {'name': 'Celestial Pyre - Silent', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000553] {'name': 'Celestial Pyre - Chant', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000554] {'name': 'Celestial Pyre - Chant', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000555] {'name': 'Celestial Pyre - Severe', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000556] {'name': 'Celestial Pyre - Severe', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '吉他'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000557] {'name': 'Thunder Blade - Anatta', 'description': 'An epic Stormblade weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Divine thunder descends, like heaven's punishment! Its blade is razor-sharp, capable of severing a hair upon touch, making it an epic weapon for the Stormblade class.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000558] {'name': 'Eclipse Staff - Magitech', 'description': 'An epic Frost Mage weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | With a jade-like texture and an icy touch, this epic weapon is forged for the Frost Mage class.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000559] {'name': 'Eclipse Lance - Lionheart', 'description': 'An epic Wind Knight weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Steady as the forest, swift as the wind, unyielding as the mountain, fierce as the fire. This epic weapon is forged for the Wind Knight class.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000560] {'name': 'Eclipse Ring - Oracle', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Surrounded by forest and rekindled by embers, this epic weapon is forged for the Verdant Oracle class.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000561] {'name': 'Mountain Cleaver - Command', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Turn stone to sand, gather sand to walls-stand unwavering, oath unbroken! An epic weapon for Guardblade Class.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000562] {'name': 'Jade Longbow - Breaker', 'description': 'An epic Marksman weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Bend the bow like a full moon, unleash fury like a piercing rainbow, this is an epic weapon for the Marksman class.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000563] {'name': 'Sacred Legacy - Judgment', 'description': 'An epic Shield Knight weapon.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Clad in unyielding steel, ablaze with silver radiance, this is an epic Shield Knight weapon.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000564] {'name': 'Celestial Pyre - Severe', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': "Handcrafted to perfection—Though devoid of rare attributes, every detail is imbued with the artisan's soul. | | Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000601] {'name': 'Stormfire Cleaver', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine Thunder Descends, like a heavenly punishment! Its blade is sharp enough to cut hair with a blow, An epic Stormblade weapon.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['101', '102']`)
- **`[2000602] {'name': 'Permafrost Crystal Staff', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its texture is like jade, its feel like ice, an epic weapon for the Frost Mage.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['104', '105']`)
- **`[2000603] {'name': 'Gale-Impaling Spear', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As slow as a forest, as swift as the wind, immovable as a mountain, aggressive as fire, an epic weapon for the Wind Knight.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['107', '108']`)
- **`[2000604] {'name': 'Flourishing Nature', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, resurrected from ashes, an epic weapon for the Verdant Oracle.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['110', '111']`)
- **`[2000605] {'name': 'Blade of Endless Fury', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering commitment! An epic weapon for the Heavy Guardian Class.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['113', '114']`)
- **`[2000606] {'name': 'Sunflare Eternal Bow', 'description': 'An epic Marksman weapon.', 'flavorText': 'Drawing a bow to its full moon, with energy piercing the rainbow, an epic weapon for the Marksman.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['116', '117']`)
- **`[2000607] {'name': 'Radiant Bastion', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bearing Greatplate and wielding sharp weapons, with a dazzling silver glow, an epic Shield Knight weapon.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['122', '123']`)
- **`[2000608] {'name': 'Inferno Shockwave', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '灵魂吉他（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['119', '120']`)
- **`[2000609] {'name': 'Thunder Blade', 'description': 'An epic Stormblade weapon.', 'flavorText': 'Divine Thunder Descends, like a heavenly punishment! Its blade is sharp enough to cut hair with a blow, An epic Stormblade weapon.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['101', '102']`)
- **`[2000610] {'name': 'Abyssal Frost Staff', 'description': 'An epic Frost Mage weapon.', 'flavorText': 'Its texture is like jade, its feel like ice, an epic weapon for the Frost Mage.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['104', '105']`)
- **`[2000611] {'name': 'Azure Skyfire Lance', 'description': 'An epic Wind Knight weapon.', 'flavorText': 'As slow as a forest, as swift as the wind, immovable as a mountain, aggressive as fire, an epic weapon for the Wind Knight.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['107', '108']`)
- **`[2000612] {'name': 'Luminous World Ring', 'description': 'An epic Verdant Oracle weapon.', 'flavorText': 'Surrounded by the forest, resurrected from ashes, an epic weapon for the Verdant Oracle.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['110', '111']`)
- **`[2000613] {'name': 'Rock Spinebreaker', 'description': 'An epic Heavy Guardian weapon.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering commitment! An epic weapon for the Heavy Guardian Class.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['113', '114']`)
- **`[2000614] {'name': 'Jade Treasure Bow', 'description': 'An epic Marksman weapon.', 'flavorText': 'Drawing a bow to its full moon, with energy piercing the rainbow, an epic weapon for the Marksman.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['116', '117']`)
- **`[2000615] {'name': 'Blazing Light Guardian', 'description': 'An epic Shield Knight weapon.', 'flavorText': 'Bearing Greatplate and wielding sharp weapons, with a dazzling silver glow, an epic Shield Knight weapon.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['122', '123']`)
- **`[2000616] {'name': 'Celestial Pyre', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '灵魂吉他（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['119', '120']`)
- **`[2000617] {'name': 'Shadow of the Far Sea', 'description': 'An epic weapon for the Stormblade class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"In the dark of night, tides surge like a silent blade slicing through the deep. | Lightning cleaves the waves, leaving behind traces that vanish in an instant. | The scythe dances with the wind. What it reaps is not just mortal bodies, but the rifts of fate. | Each strike is a judgment jointly issued by the sea and storm. | And the echo that remains is but solemn silence within shattered tides." | (Excerpt from "Book of the Depths VII")', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['101', '102']`)
- **`[2000618] {'name': 'Revelation of the Far Sea', 'description': 'An epic weapon for the Frost Mage class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"Between the sea\'s breaths lies an untold truth. | It carves verses into the surging waves, writing them upon moonlit waters. | The tip of the staff catches a fleeting ripple, turning it into light. | Light pierces the mist, reaching even the deepest longing. | If you\'re willing to listen, the sea will offer you its answer." | (Excerpt from "Book of the Depths II")', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['104', '105']`)
- **`[2000619] {'name': 'Wish of the Far Sea', 'description': 'An epic weapon for the Wind Knight class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"Its edge points straight into the distance, like tides rushing toward the endless sky. | It holds the sea\'s whispers, engraving vows between wind and water. | Every thrust is for the sake of protection, turning gales into unwavering creed. | And the knight\'s wish shall echo with the tide, reaching the farthest shore." | (Excerpt from "Book of the Depths VIII")', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['107', '108']`)
- **`[2000620] {'name': 'Grace of the Far Sea', 'description': 'An epic weapon for the Verdant Oracle class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"In the realm of ebbing tides, the sea leaves behind its final sigh. | The shattered reflections of starlight float on the water, like dreams yet unbroken. | Listen! Each rising tide is the heartbeat of a gentle and solemn deity. | The light surging through the ring soothes bloodstains, granting peace to weary souls." | (Excerpt from "Book of the Depths I")', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['110', '111']`)
- **`[2000621] {'name': 'Waiting of the Far Sea', 'description': 'An epic weapon for the Heavy Guardian class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"The tide is not only gentle; it can become a stern barrier. | Great waves lie prostrate before the reefs, safeguarding the silence behind. | The blade\'s edge is like the spine of the earth, firm and unyielding. | Each impact echoes the ceaseless song of the ocean. | Guardian, the faith of the deep sea has long been bound to your soul." | (Excerpt from "Book of the Depths III")', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['113', '114']`)
- **`[2000622] {'name': 'Gaze of the Far Sea', 'description': 'An epic weapon for the Marksman class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"The sea\'s gaze reaches farther than the wind, longer than the waves. | The bowstring draws tight, as if binding the skyline tightly. | The arrow carry the breath of the tide, crossing the boundary of water and sky. | It always finds its destination, reaching where the heart yearns." | (Excerpt from "Book of the Depths IV")', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['116', '117']`)
- **`[2000623] {'name': 'Vow of the Far Sea', 'description': 'An epic weapon for the Shield Knight class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"Withdraw, withdraw, yet there always remain the unyielding reefs. | That is the ocean\'s silent vow, standing firmly on the shore forever. | The shield bears the waves, embracing the surge without resistance. | With every impact, it endures alongside the sea, without end. | It grants peace to the soul, so the brave may walk without fear. | In the eternal sound of the tide, protection becomes an endless poem." | (Excerpt from "Book of the Depths V")', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['122', '123']`)
- **`[2000624] {'name': 'Hymn of the Far Sea', 'description': 'An epic weapon for the Beat Performer. It can be upgraded\nto higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"Waves strike the reef like trembling strings. | Their sound rises from the surge, chasing the wind into the boundless sky. | Each chord is a secret the deep sea has yet to speak. | Stars and waterlight resonate, weaving a melody that surrounds the battlefield. | And those who listen shall find their way home within the hymn." | (Excerpt from "Book of the Depths VI")', 'weaponName': '灵魂吉他（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['119', '120']`)
- **`[2000625] {'name': 'Fury of the Far Sea', 'description': 'An epic Twin Striker weapon.It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter breaking through to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"When the tides converge within the abyss, they cleave through chaos, forging a fearless heart into the surging waves. | A vow of resolve is cast into the boundless depths. | Within that ceaseless tempest, only an unyielding soul may endure the deep sea\'s eternal solitude." | (Excerpt from "Book of the Depths IX")', 'weaponName': '双斧'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['128', '129']`)
- **`[2000626] {'name': 'Ember - Shadow of the Far Sea', 'description': 'An epic weapon for the Stormblade class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"In the dark of night, tides surge like a silent blade slicing through the deep. | Lightning cleaves the waves, leaving behind traces that vanish in an instant. | The scythe dances with the wind. What it reaps is not just mortal bodies, but the rifts of fate. | Each strike is a judgment jointly issued by the sea and storm. | And the echo that remains is but solemn silence within shattered tides." | (Excerpt from "Book of the Depths VII")', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['101', '102']`)
- **`[2000627] {'name': 'Ember - Revelation of the Far Sea', 'description': 'An epic weapon for the Frost Mage class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"Between the sea\'s breaths lies an untold truth. | It carves verses into the surging waves, writing them upon moonlit waters. | The tip of the staff catches a fleeting ripple, turning it into light. | Light pierces the mist, reaching even the deepest longing. | If you\'re willing to listen, the sea will offer you its answer." | (Excerpt from "Book of the Depths II")', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['104', '105']`)
- **`[2000628] {'name': 'Ember - Wish of the Far Sea', 'description': 'An epic weapon for the Wind Knight class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"Its edge points straight into the distance, like tides rushing toward the endless sky. | It holds the sea\'s whispers, engraving vows between wind and water. | Every thrust is for the sake of protection, turning gales into unwavering creed. | And the knight\'s wish shall echo with the tide, reaching the farthest shore." | (Excerpt from "Book of the Depths VIII")', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['107', '108']`)
- **`[2000629] {'name': 'Ember - Grace of the Far Sea', 'description': 'An epic weapon for the Verdant Oracle class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"In the realm of ebbing tides, the sea leaves behind its final sigh. | The shattered reflections of starlight float on the water, like dreams yet unbroken. | Listen! Each rising tide is the heartbeat of a gentle and solemn deity. | The light surging through the ring soothes bloodstains, granting peace to weary souls." | (Excerpt from "Book of the Depths I")', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['110', '111']`)
- **`[2000630] {'name': 'Ember - Waiting of the Far Sea', 'description': 'An epic weapon for the Heavy Guardian class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"The tide is not only gentle; it can become a stern barrier. | Great waves lie prostrate before the reefs, safeguarding the silence behind. | The blade\'s edge is like the spine of the earth, firm and unyielding. | Each impact echoes the ceaseless song of the ocean. | Guardian, the faith of the deep sea has long been bound to your soul." | (Excerpt from "Book of the Depths III")', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['113', '114']`)
- **`[2000631] {'name': 'Ember - Gaze of the Far Sea', 'description': 'An epic weapon for the Marksman class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"The sea\'s gaze reaches farther than the wind, longer than the waves. | The bowstring draws tight, as if binding the skyline tightly. | The arrow carry the breath of the tide, crossing the boundary of water and sky. | It always finds its destination, reaching where the heart yearns." | (Excerpt from "Book of the Depths IV")', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['116', '117']`)
- **`[2000632] {'name': 'Ember - Vow of the Far Sea', 'description': 'An epic weapon for the Shield Knight class. It can upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"Withdraw, withdraw, yet there always remain the unyielding reefs. | That is the ocean\'s silent vow, standing firmly on the shore forever. | The shield bears the waves, embracing the surge without resistance. | With every impact, it endures alongside the sea, without end. | It grants peace to the soul, so the brave may walk without fear. | In the eternal sound of the tide, protection becomes an endless poem." | (Excerpt from "Book of the Depths V")', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['122', '123']`)
- **`[2000633] {'name': 'Ember - Hymn of the Far Sea', 'description': 'An epic Beat Performer weapon. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"Waves strike the reef like trembling strings. | Their sound rises from the surge, chasing the wind into the boundless sky. | Each chord is a secret the deep sea has yet to speak. | Stars and waterlight resonate, weaving a melody that surrounds the battlefield. | And those who listen shall find their way home within the hymn." | (Excerpt from "Book of the Depths VI")', 'weaponName': '灵魂吉他（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['119', '120']`)
- **`[2000634] {'name': 'Ember - Fury of the Far Sea', 'description': 'An epic Twin Stiker weapon. It can upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"When the tides converge within the abyss, they cleave through chaos, forging a fearless heart into the surging waves. | A vow of resolve is cast into the boundless depths. | Within that ceaseless tempest, only an unyielding soul may endure the deep sea\'s eternal solitude." | (Excerpt from "Book of the Depths IX")', 'weaponName': '双斧'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['128', '129']`)
- **`[2000701] {'name': 'Journeyman Scythe Blade', 'description': 'A weapon of superior quality for the Stormblade Class.', 'flavorText': "Divine thunder descends, like heaven's punishment! Its blade is sharp enough to cut hair with a blow.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000702] {'name': 'Journeyman Frost Staff', 'description': 'A weapon of superior quality for the Frost Mage Class.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000703] {'name': 'Journeyman Lance', 'description': 'A weapon of superior quality for the Wind Knight Class.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000704] {'name': 'Journeyman Spell Ring', 'description': 'A weapon of superior quality for the Verdant Oracle Class.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000705] {'name': 'Journeyman Guard Blade', 'description': 'A well-crafted weapon for Heavy Guardian.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000706] {'name': 'Journeyman Longbow', 'description': 'A weapon of superior quality for the Marksman Class.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000707] {'name': 'Journeyman Aegis', 'description': 'A well-crafted weapon for Shield Knight.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000708] {'name': 'Journeyman Electric Guitar', 'description': 'A well-crafted weapon for Beat Performer.', 'flavorText': "A fiery melody forged in soul, echoing across the galaxy's light.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000709] {'name': 'Exquisite Journeyman Scythe Blade', 'description': 'A rare weapon of exceptional quality for the Stormblade Class.', 'flavorText': "Divine thunder descends, like heaven's punishment! Its blade is sharp enough to cut hair with a blow.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000710] {'name': 'Exquisite Journeyman Frost Staff', 'description': 'A rare weapon of exceptional quality for the Frost Mage Class.', 'flavorText': 'Jade in essence, ice to the touch.', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000711] {'name': 'Exquisite Journeyman Lance', 'description': 'A rare weapon of exceptional quality for the Wind Knight Class.', 'flavorText': 'Steady as the forest, swift as the wind; unyielding as the mountain, fierce as the fire.', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000712] {'name': 'Exquisite Journeyman Spell Ring', 'description': 'A rare weapon of exceptional quality for the Verdant Oracle Class.', 'flavorText': 'Embraced by the forest, ashes blaze anew.', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000713] {'name': 'Exquisite Journeyman Guard Blade', 'description': 'A rare high-quality weapon for Heavy Guardian.', 'flavorText': 'Turn stone to sand, gather sand to walls—stand unwavering, oath unbroken.', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000714] {'name': 'Exquisite Journeyman Longbow', 'description': 'A rare weapon of exceptional quality for the Marksman Class.', 'flavorText': 'Bend the bow like a full moon, unleash fury like a piercing rainbow.', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000715] {'name': 'Exquisite Journeyman Aegis', 'description': 'A rare high-quality weapon for Shield Knight.', 'flavorText': 'Clad in unyielding steel, ablaze with silver radiance.', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000716] {'name': 'Exquisite Journeyman Electric Guitar', 'description': 'A well-crafted weapon for Beat Performer.', 'flavorText': "A fiery melody forged in soul, echoing across the galaxy's light.", 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000801] {'name': 'Dragonbone Lance - Windstride', 'description': 'An epic weapon for the Wind Knight Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000802] {'name': 'Dragonbone Lance - Windstride', 'description': 'An epic weapon for the Wind Knight Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000803] {'name': 'Dragonbone Lance - Gale', 'description': 'An epic weapon for the Wind Knight Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000804] {'name': 'Dragonbone Lance - Gale', 'description': 'An epic weapon for the Wind Knight Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000805] {'name': 'Cleaving Greatsword - Bold', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000806] {'name': 'Cleaving Greatsword - Bold', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000807] {'name': 'Cleaving Greatsword - Ward', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000808] {'name': 'Cleaving Greatsword - Ward', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000809] {'name': 'Wall Shield - Dawnlight', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000810] {'name': 'Wall Shield - Dawnlight', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000811] {'name': 'Wall Shield - Daybreak', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000812] {'name': 'Wall Shield - Daybreak', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000813] {'name': 'Thunderbolt Tachi - Oboro', 'description': 'An epic weapon for the Stormblade Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000814] {'name': 'Thunderbolt Tachi - Oboro', 'description': 'An epic weapon for the Stormblade Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000815] {'name': 'Thunderbolt Tachi - Feather', 'description': 'An epic weapon for the Stormblade Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000816] {'name': 'Thunderbolt Tachi - Feather', 'description': 'An epic weapon for the Stormblade Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000817] {'name': 'Windstride Longbow - Hunter', 'description': 'An epic weapon for the Marksman Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000818] {'name': 'Windstride Longbow - Hunter', 'description': 'An epic weapon for the Marksman Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000819] {'name': 'Windstride Longbow - Sentry', 'description': 'An epic weapon for the Marksman Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000820] {'name': 'Windstride Longbow - Sentry', 'description': 'An epic weapon for the Marksman Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000821] {'name': 'Frostbound Staff - Crystal', 'description': 'An epic weapon for the Frost Mage Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000822] {'name': 'Frostbound Staff - Crystal', 'description': 'An epic weapon for the Frost Mage Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000823] {'name': 'Frostbound Staff - Frostbreath', 'description': 'An epic weapon for the Frost Mage Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000824] {'name': 'Frostbound Staff - Frostbreath', 'description': 'An epic weapon for the Frost Mage Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000825] {'name': 'Remedy Ring - Healer', 'description': 'An epic weapon for the Verdant Oracle Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000826] {'name': 'Remedy Ring - Healer', 'description': 'An epic weapon for the Verdant Oracle Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000827] {'name': 'Remedy Ring - Puretrace', 'description': 'An epic weapon for the Verdant Oracle Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000828] {'name': 'Remedy Ring - Puretrace', 'description': 'An epic weapon for the Verdant Oracle Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000829] {'name': 'Burning Chord - Tribute', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000830] {'name': 'Burning Chord - Tribute', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000831] {'name': 'Burning Chord - Battle Ode', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000832] {'name': 'Burning Chord - Battle Ode', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000833] {'name': 'Thunderbolt Tachi - Novice', 'description': 'An epic weapon for the Stormblade Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000834] {'name': 'Frostbound Staff - Apprentice', 'description': 'An epic weapon for the Frost Mage Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000835] {'name': 'Dragonbone Lance - Assault', 'description': 'An epic weapon for the Wind Knight Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000836] {'name': 'Windstride Longbow - Scout', 'description': 'An epic weapon for the Marksman Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000837] {'name': 'Cleaving Greatsword - Guard', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000838] {'name': 'Burning Chord - Minstrel', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000839] {'name': 'Remedy Ring - Medic', 'description': 'An epic weapon for the Verdant Oracle Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000840] {'name': 'Wall Shield - Guardian', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000841] {'name': '120GS STR Weapon - Combo 1 - 100 Perfect Luck = Mastery', 'description': 'An epic Twin Striker weapon.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '120GS力量武器-连打1-100完美幸运=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000842] {'name': '120GS STR Weapon - Combo 2 - 100 Perfect Mastery = Luck', 'description': 'An epic Twin Striker weapon.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '120GS力量武器-连打2-100完美精通=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000843] {'name': '120GS STR Weapon - Berserker 1 - 100 Perfect Mastery = Crit', 'description': 'An epic Twin Striker weapon.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '120GS力量武器-狂战1-100完美精通=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000844] {'name': '120GS STR Weapon - Berserker 2 - 100 Perfect Crit = Mastery', 'description': 'An epic Twin Striker weapon.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '120GS力量武器-狂战2-100完美暴击=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000845] {'name': '120GS STR Weapon - Epic Dual Axes - 80 Perfect Random = Random', 'description': 'An epic Twin Striker weapon.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '120GS力量武器-双斧紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000901] {'name': 'Daybreak Lance - Tempest Flow', 'description': 'An epic weapon for the Wind Knight Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000902] {'name': 'Daybreak Lance - Tempest Flow', 'description': 'An epic weapon for the Wind Knight Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000903] {'name': 'Daybreak Lance - Verdant', 'description': 'An epic weapon for the Wind Knight Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000904] {'name': 'Daybreak Lance - Verdant', 'description': 'An epic weapon for the Wind Knight Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000905] {'name': 'Groundbreaker Blade - Valor', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000906] {'name': 'Groundbreaker Blade - Valor', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000907] {'name': 'Groundbreaker Blade - Tenacity', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000908] {'name': 'Groundbreaker Blade - Tenacity', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000909] {'name': 'Everlasting Shield - Radiant', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000910] {'name': 'Everlasting Shield - Radiant', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000911] {'name': 'Everlasting Shield - Dawn', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000912] {'name': 'Everlasting Shield - Dawn', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000913] {'name': 'Thunderblast Blade - Avidya', 'description': 'An epic weapon for the Stormblade Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000914] {'name': 'Thunderblast Blade - Avidya', 'description': 'An epic weapon for the Stormblade Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000915] {'name': 'Thunderblast Blade - Chaos', 'description': 'An epic weapon for the Stormblade Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000916] {'name': 'Thunderblast Blade - Chaos', 'description': 'An epic weapon for the Stormblade Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000917] {'name': 'Shadowcast Longbow - Forestshade', 'description': 'An epic weapon for the Marksman Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000918] {'name': 'Shadowcast Longbow - Forestshade', 'description': 'An epic weapon for the Marksman Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000919] {'name': 'Shadowcast Longbow - Precision', 'description': 'An epic weapon for the Marksman Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000920] {'name': 'Shadowcast Longbow - Precision', 'description': 'An epic weapon for the Marksman Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000921] {'name': 'Snowtomb Staff - Glacial', 'description': 'An epic weapon for the Frost Mage Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000922] {'name': 'Snowtomb Staff - Glacial', 'description': 'An epic weapon for the Frost Mage Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000923] {'name': 'Snowtomb Staff - Frostbound', 'description': 'An epic weapon for the Frost Mage Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000924] {'name': 'Snowtomb Staff - Frostbound', 'description': 'An epic weapon for the Frost Mage Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000925] {'name': 'Vitality Ring - Wish', 'description': 'An epic weapon for the Verdant Oracle Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000926] {'name': 'Vitality Ring - Wish', 'description': 'An epic weapon for the Verdant Oracle Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000927] {'name': 'Vitality Ring - Harmony', 'description': 'An epic weapon for the Verdant Oracle Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000928] {'name': 'Vitality Ring - Harmony', 'description': 'An epic weapon for the Verdant Oracle Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000929] {'name': 'Solar Shocker - Carol', 'description': 'This epic weapon is forged for the Soul Bard.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000930] {'name': 'Solar Shocker - Carol', 'description': 'This epic weapon is forged for the Soul Bard.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000931] {'name': 'Solar Shocker - Boundary Breaker', 'description': 'This epic weapon is forged for the Soul Bard.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000932] {'name': 'Solar Shocker - Boundary Breaker', 'description': 'This epic weapon is forged for the Soul Bard.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000933] {'name': 'Thunderblast Blade - Kengo', 'description': 'An epic weapon for the Stormblade Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000934] {'name': 'Snowtomb Staff - Incantation', 'description': 'An epic weapon for the Frost Mage Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000935] {'name': 'Daybreak Lance - Vanguard', 'description': 'An epic weapon for the Wind Knight Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000936] {'name': 'Shadowcast Longbow - Ranger', 'description': 'An epic weapon for the Marksman Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000937] {'name': 'Groundbreaker Blade - Conquest', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000938] {'name': 'Solar Shocker - Harmony', 'description': 'This epic weapon is forged for the Soul Bard.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000939] {'name': 'Vitality Ring - Aegis', 'description': 'An epic weapon for the Verdant Oracle Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000940] {'name': 'Everlasting Shield - Order', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000941] {'name': '140GS STR Weapon - Combo 1 - 100 Perfect Luck = Mastery', 'description': 'An epic Twin Striker weapon.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '140GS力量武器-连打1-100完美幸运=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000942] {'name': '140GS STR Weapon - Combo 2 - 100 Perfect Mastery = Luck', 'description': 'An epic Twin Striker weapon.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '140GS力量武器-连打2-100完美精通=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000943] {'name': '140GS STR Weapon - Berserker 1 - 100 Perfect Mastery = Crit', 'description': 'An epic Twin Striker weapon.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '140GS力量武器-狂战1-100完美精通=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000944] {'name': '140GS STR Weapon - Berserker 2 - 100 Perfect Crit = Mastery', 'description': 'An epic Twin Striker weapon.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '140GS力量武器-狂战2-100完美暴击=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2000945] {'name': '140GS STR Weapon - Epic Dual Axes - 80 Perfect Random = Random', 'description': 'An epic Twin Striker weapon.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '140GS力量武器-双斧紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001001] {'name': 'Crimson Breaker - Strider', 'description': 'An epic weapon for the Wind Knight Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001002] {'name': 'Crimson Breaker - Strider', 'description': 'An epic weapon for the Wind Knight Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001003] {'name': 'Crimson Breaker - Storm', 'description': 'An epic weapon for the Wind Knight Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001004] {'name': 'Crimson Breaker - Storm', 'description': 'An epic weapon for the Wind Knight Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001005] {'name': 'World Cleaver - Justiciar', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001006] {'name': 'World Cleaver - Justiciar', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001007] {'name': 'World Cleaver - Undying', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001008] {'name': 'World Cleaver - Undying', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001009] {'name': 'Shield of the Ancients - Oath', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001010] {'name': 'Shield of the Ancients - Oath', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001011] {'name': 'Shield of the Ancients - Revelation', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001012] {'name': 'Shield of the Ancients - Revelation', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001013] {'name': 'Mountain Cleaver - Illumination', 'description': 'An epic weapon for the Stormblade Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001014] {'name': 'Mountain Cleaver - Illumination', 'description': 'An epic weapon for the Stormblade Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001015] {'name': 'Mountain Cleaver - Mirage', 'description': 'An epic weapon for the Stormblade Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001016] {'name': 'Mountain Cleaver - Mirage', 'description': 'An epic weapon for the Stormblade Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001017] {'name': 'Dragonbreath Longbow - Beastlord', 'description': 'An epic weapon for the Marksman Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001018] {'name': 'Dragonbreath Longbow - Beastlord', 'description': 'An epic weapon for the Marksman Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001019] {'name': 'Dragonbreath Longbow - Hawkeye', 'description': 'An epic weapon for the Marksman Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001020] {'name': 'Dragonbreath Longbow - Hawkeye', 'description': 'An epic weapon for the Marksman Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001021] {'name': 'Frostcurse Staff - Frostblade', 'description': 'An epic weapon for the Frost Mage Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001022] {'name': 'Frostcurse Staff - Frostblade', 'description': 'An epic weapon for the Frost Mage Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001023] {'name': 'Frostcurse Staff - Iceflow', 'description': 'An epic weapon for the Frost Mage Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001024] {'name': 'Frostcurse Staff - Iceflow', 'description': 'An epic weapon for the Frost Mage Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001025] {'name': 'Hymn of Life Ring - Gospel', 'description': 'An epic weapon for the Verdant Oracle Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001026] {'name': 'Hymn of Life Ring - Gospel', 'description': 'An epic weapon for the Verdant Oracle Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001027] {'name': 'Hymn of Life Ring - Soul', 'description': 'An epic weapon for the Verdant Oracle Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001028] {'name': 'Hymn of Life Ring - Soul', 'description': 'An epic weapon for the Verdant Oracle Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001029] {'name': 'Molten Resonator - Chant', 'description': 'This epic weapon is forged for the Soul Bard.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001030] {'name': 'Molten Resonator - Chant', 'description': 'This epic weapon is forged for the Soul Bard.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001031] {'name': 'Molten Resonator - Silent Annihilation', 'description': 'This epic weapon is forged for the Soul Bard.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001032] {'name': 'Molten Resonator - Silent Annihilation', 'description': 'This epic weapon is forged for the Soul Bard.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001033] {'name': "Mountain Cleaver - Mind's Eye", 'description': 'An epic weapon for the Stormblade Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001034] {'name': 'Frostcurse Staff - Sorcery', 'description': 'An epic weapon for the Frost Mage Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001035] {'name': 'Crimson Breaker - Lionheart', 'description': 'An epic weapon for the Wind Knight Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001036] {'name': 'Dragonbreath Longbow - Rupture', 'description': 'An epic weapon for the Marksman Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001037] {'name': 'World Cleaver - Commander', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001038] {'name': 'Molten Resonator - Dissonance', 'description': 'This epic weapon is forged for the Soul Bard.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001039] {'name': 'Hymn of Life Ring - Divine Word', 'description': 'An epic weapon for the Verdant Oracle Class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001040] {'name': 'Shield of the Ancients - Judgment', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': ''}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001041] {'name': '160GS STR Weapon - Combo 1 - 100 Perfect Luck = Mastery', 'description': 'An epic Twin Striker weapon.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '160GS力量武器-连打1-100完美幸运=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001042] {'name': '160GS STR Weapon - Combo 2 - 100 Perfect Mastery = Luck', 'description': 'An epic Twin Striker weapon.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '160GS力量武器-连打2-100完美精通=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001043] {'name': '160GS STR Weapon - Berserker 1 - 100 Perfect Mastery = Crit', 'description': 'An epic Twin Striker weapon.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '160GS力量武器-狂战1-100完美精通=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001044] {'name': '160GS STR Weapon - Berserker 2 - 100 Perfect Crit = Mastery', 'description': 'An epic Twin Striker weapon.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '160GS力量武器-狂战2-100完美暴击=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001045] {'name': '160GS STR Weapon - Epic Dual Axes - 80 Perfect Random = Random', 'description': 'An epic Twin Striker weapon.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '160GS力量武器-双斧紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001101] {'name': 'Azure Thunder', 'description': 'An epic weapon for the Stormblade.', 'flavorText': 'Divine Thunder Descends, like a heavenly punishment! Its blade is sharp enough to cut hair with a blow, an epic weapon in the Stormblade.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['101', '102']`)
- **`[2001102] {'name': 'Everfrost Scepter', 'description': 'An epic weapon for the Frost Mage.', 'flavorText': 'Its texture is like jade, its feel like ice, an epic weapon for the Frost Mage.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['104', '105']`)
- **`[2001103] {'name': 'Daybreak Piercer', 'description': 'An epic weapon for the Wind Knight.', 'flavorText': 'As slow as a forest, as swift as the wind, immovable as a mountain, aggressive as fire, an epic weapon for the Wind Knight.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['107', '108']`)
- **`[2001104] {'name': 'Hymn of Vitality Band', 'description': 'An epic weapon for the Verdant Oracle.', 'flavorText': 'Surrounded by the forest, resurrected from ashes, an epic weapon for the Verdant Oracle.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['110', '111']`)
- **`[2001105] {'name': 'Voidburial Starblade', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering commitment! An epic weapon for the Heavy Guardian Class.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['113', '114']`)
- **`[2001106] {'name': 'Starlight Chaser', 'description': 'An epic weapon for the Marksman.', 'flavorText': 'Drawing a bow to its full moon, with energy piercing the rainbow, an epic weapon for the Marksman.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['116', '117']`)
- **`[2001107] {'name': 'Sanctum of Unbroken Law', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'Bearing Greatplate and wielding sharp weapons, with a dazzling silver glow, an epic Shield Knight weapon.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['122', '123']`)
- **`[2001108] {'name': 'Fury Resonance', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '灵魂吉他（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['119', '120']`)
- **`[2001109] {'name': 'Azure Thunder - Alt.', 'description': 'An epic weapon for the Stormblade.', 'flavorText': 'Divine Thunder Descends, like a heavenly punishment! Its blade is sharp enough to cut hair with a blow, an epic weapon in the Stormblade.', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['101', '102']`)
- **`[2001110] {'name': 'Everfrost Scepter - Alt.', 'description': 'An epic weapon for the Frost Mage.', 'flavorText': 'Its texture is like jade, its feel like ice, an epic weapon for the Frost Mage.', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['104', '105']`)
- **`[2001111] {'name': 'Daybreak Piercer - Alt.', 'description': 'An epic weapon for the Wind Knight.', 'flavorText': 'As slow as a forest, as swift as the wind, immovable as a mountain, aggressive as fire, an epic weapon for the Wind Knight.', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['107', '108']`)
- **`[2001112] {'name': 'Hymn of Vitality Band - Alt.', 'description': 'An epic weapon for the Verdant Oracle.', 'flavorText': 'Surrounded by the forest, resurrected from ashes, an epic weapon for the Verdant Oracle.', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['110', '111']`)
- **`[2001113] {'name': 'Voidburial Starblade - Alt.', 'description': 'An epic weapon for the Heavy Guardian.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering commitment! An epic weapon for the Heavy Guardian Class.', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['113', '114']`)
- **`[2001114] {'name': 'Starlight Chaser - Alt.', 'description': 'An epic weapon for the Marksman.', 'flavorText': 'Drawing a bow to its full moon, with energy piercing the rainbow, an epic weapon for the Marksman.', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['116', '117']`)
- **`[2001115] {'name': 'Sanctum of Unbroken Law - Alt.', 'description': 'An epic weapon for the Shield Knight.', 'flavorText': 'Bearing Greatplate and wielding sharp weapons, with a dazzling silver glow, an epic Shield Knight weapon.', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['122', '123']`)
- **`[2001116] {'name': 'Fury Resonance - Alt.', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '灵魂吉他（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['119', '120']`)
- **`[2001117] {'name': 'Journeyman Scythe Blade', 'description': 'A relatively fine weapon in the Stormblade.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '进阶冒险者太刀镰（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001118] {'name': 'Journeyman Frost Staff', 'description': 'A relatively fine weapon in the Frost Mage.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '进阶冒险者冰魔杖（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001119] {'name': 'Journeyman Lance', 'description': 'A relatively fine weapon in the Wind Knight.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '进阶冒险者长枪（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001120] {'name': 'Journeyman Spell Ring', 'description': 'A relatively fine weapon in the Verdant Oracle.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '进阶冒险者法环（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001121] {'name': 'Journeyman Guard Blade', 'description': 'A well-crafted weapon for Heavy Guardian.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '进阶冒险者卫刃（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001122] {'name': 'Journeyman Longbow', 'description': 'A relatively fine weapon in the Marksman.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '进阶冒险者长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001123] {'name': 'Journeyman Aegis', 'description': 'A well-crafted weapon for Shield Knight.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '进阶冒险者剑盾（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001124] {'name': 'Journeyman Electric Guitar', 'description': 'A well-crafted weapon for Beat Performer.', 'flavorText': "A fiery melody forged in soul, echoing across the galaxy's light.", 'weaponName': '进阶冒险者电吉他（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001125] {'name': 'Journeyman Dual Axes (Physical)', 'description': 'A well-crafted weapon for the Twin Striker class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '进阶冒险者双斧（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001126] {'name': 'Journeyman Scythe Blade', 'description': 'A relatively fine weapon in the Stormblade.', 'flavorText': 'Divine thunder descends, like heavenly punishment! Its blade is sharp enough to cut hair with a blow.', 'weaponName': '进阶冒险者太刀镰（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001127] {'name': 'Journeyman Frost Staff', 'description': 'A relatively fine weapon in the Frost Mage.', 'flavorText': 'Its quality is like jade, its feel like ice.', 'weaponName': '进阶冒险者冰魔杖（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001128] {'name': 'Journeyman Lance', 'description': 'A relatively fine weapon in the Wind Knight.', 'flavorText': 'As gentle as a forest, as swift as the wind, as immovable as a mountain, as aggressive as fire.', 'weaponName': '进阶冒险者长枪（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001129] {'name': 'Journeyman Spell Ring', 'description': 'A relatively fine weapon in the Verdant Oracle.', 'flavorText': 'Surrounded by the forest, rising from the ashes.', 'weaponName': '进阶冒险者法环（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001130] {'name': 'Journeyman Guard Blade', 'description': 'A well-crafted weapon for Heavy Guardian.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering determination.', 'weaponName': '进阶冒险者卫刃（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001131] {'name': 'Journeyman Longbow', 'description': 'A relatively fine weapon in the Marksman.', 'flavorText': 'Draw the bow to a full moon, the energy runs through the rainbow.', 'weaponName': '进阶冒险者长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001132] {'name': 'Journeyman Aegis', 'description': 'A well-crafted weapon for Shield Knight.', 'flavorText': 'Bear the burden and hold the sharp, scorching silver light.', 'weaponName': '进阶冒险者剑盾（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001133] {'name': 'Journeyman Electric Guitar', 'description': 'A well-crafted weapon for Beat Performer.', 'flavorText': "A fiery melody forged in soul, echoing across the galaxy's light.", 'weaponName': '进阶冒险者电吉他（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001134] {'name': 'Journeyman Dual Axes (Physical)', 'description': 'A well-crafted weapon for the Twin Striker class.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '进阶冒险者双斧（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001201] {'name': 'Phantom Thorn', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-空枪1-100完美暴击=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001202] {'name': 'Phantom Thorn', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-空枪2-100完美幸运=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001203] {'name': 'Phantom Thorn', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-重装1-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001204] {'name': 'Phantom Thorn', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-重装2-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001205] {'name': 'Slumberdream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-格挡1-100完美幸运=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001206] {'name': 'Slumberdream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-格挡2-100完美精通=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001207] {'name': 'Slumberdream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-岩盾1-100完美精通=全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001208] {'name': 'Slumberdream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-岩盾2-100完美全能=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001209] {'name': 'Dream Bulwark', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-防护1-100完美暴击=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001210] {'name': 'Dream Bulwark', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-防护2-100完美精通=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001211] {'name': 'Dream Bulwark', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-光盾1-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001212] {'name': 'Dream Bulwark', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-光盾2-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001213] {'name': 'Veiled Moon Cleaver', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-居合1-100完美暴击=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001214] {'name': 'Veiled Moon Cleaver', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-居合2-100完美精通=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001215] {'name': 'Veiled Moon Cleaver', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-月刃1-100完美急速=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001216] {'name': 'Veiled Moon Cleaver', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-月刃2-100完美幸运=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001217] {'name': 'Phantomgleam Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-狼弓1-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001218] {'name': 'Phantomgleam Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-狼弓2-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001219] {'name': 'Phantomgleam Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-鹰弓1-100完美暴击=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001220] {'name': 'Phantomgleam Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-鹰弓2-100完美急速=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001221] {'name': 'Dreamweave Branch', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-冰矛1-100完美暴击=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001222] {'name': 'Dreamweave Branch', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-冰矛2-100完美幸运=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001223] {'name': 'Dreamweave Branch', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-射线1-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001224] {'name': 'Dreamweave Branch', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-射线2-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001225] {'name': 'Dream Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-愈合1-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001226] {'name': 'Dream Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-愈合2-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001227] {'name': 'Dream Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-惩击1-100完美幸运=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001228] {'name': 'Dream Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-惩击2-100完美精通=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001229] {'name': 'Phantom Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-协奏1-100完美暴击=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001230] {'name': 'Phantom Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-协奏2-100完美急速=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001231] {'name': 'Phantom Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-狂音1-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001232] {'name': 'Phantom Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-狂音2-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001233] {'name': 'Veiled Moon Cleaver', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-太刀紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001234] {'name': 'Dreamweave Branch', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-冰法紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001235] {'name': 'Phantom Thorn', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-青岚紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001236] {'name': 'Phantomgleam Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-弓箭紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001237] {'name': 'Slumberdream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-巨刃紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001238] {'name': 'Phantom Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-吉他紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001239] {'name': 'Dream Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-森语紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001240] {'name': 'Dream Bulwark', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-神盾紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001241] {'name': 'Furydream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-连打1-100完美幸运=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001242] {'name': 'Furydream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-连打2-100完美精通=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001243] {'name': 'Furydream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-狂战1-100完美精通=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001244] {'name': 'Furydream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-狂战2-100完美暴击=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001245] {'name': 'Furydream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-双斧紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001246] {'name': 'Veiled Moon Cleaver', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-太刀-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001247] {'name': 'Veiled Moon Cleaver', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-太刀-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001248] {'name': 'Veiled Moon Cleaver', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-太刀-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001249] {'name': 'Veiled Moon Cleaver', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-太刀-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001250] {'name': 'Veiled Moon Cleaver', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-太刀-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001251] {'name': 'Dreamweave Branch', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-冰法-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001252] {'name': 'Dreamweave Branch', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-冰法-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001253] {'name': 'Dreamweave Branch', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-冰法-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001254] {'name': 'Dreamweave Branch', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-冰法-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001255] {'name': 'Dreamweave Branch', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-冰法-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001256] {'name': 'Phantom Thorn', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-青岚-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001257] {'name': 'Phantom Thorn', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-青岚-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001258] {'name': 'Phantom Thorn', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-青岚-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001259] {'name': 'Phantom Thorn', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-青岚-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001260] {'name': 'Phantom Thorn', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-青岚-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001261] {'name': 'Phantomgleam Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-弓箭-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001262] {'name': 'Phantomgleam Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-弓箭-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001263] {'name': 'Phantomgleam Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-弓箭-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001264] {'name': 'Phantomgleam Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-弓箭-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001265] {'name': 'Phantomgleam Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS敏捷武器-弓箭-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001266] {'name': 'Slumberdream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-巨刃-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001267] {'name': 'Slumberdream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-巨刃-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001268] {'name': 'Slumberdream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-巨刃-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001269] {'name': 'Slumberdream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-巨刃-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001270] {'name': 'Slumberdream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-巨刃-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001271] {'name': 'Phantom Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-吉他-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001272] {'name': 'Phantom Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-吉他-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001273] {'name': 'Phantom Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-吉他-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001274] {'name': 'Phantom Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-吉他-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001275] {'name': 'Phantom Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-吉他-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001276] {'name': 'Dream Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-森语-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001277] {'name': 'Dream Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-森语-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001278] {'name': 'Dream Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-森语-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001279] {'name': 'Dream Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-森语-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001280] {'name': 'Dream Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS智力武器-森语-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001281] {'name': 'Dream Bulwark', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-神盾-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001282] {'name': 'Dream Bulwark', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-神盾-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001283] {'name': 'Dream Bulwark', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-神盾-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001284] {'name': 'Dream Bulwark', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-神盾-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001285] {'name': 'Dream Bulwark', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-神盾-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001286] {'name': 'Furydream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-双斧-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001287] {'name': 'Furydream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-双斧-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001288] {'name': 'Furydream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-双斧-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001289] {'name': 'Furydream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-双斧-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001290] {'name': 'Furydream Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '220GS力量武器-双斧-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001301] {'name': 'Dreamrend Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-空枪1-100完美暴击=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001302] {'name': 'Dreamrend Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-空枪2-100完美幸运=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001303] {'name': 'Dreamrend Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-重装1-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001304] {'name': 'Dreamrend Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-重装2-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001305] {'name': 'Vow of Clarity Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-格挡1-100完美幸运=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001306] {'name': 'Vow of Clarity Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-格挡2-100完美精通=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001307] {'name': 'Vow of Clarity Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-岩盾1-100完美精通=全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001308] {'name': 'Vow of Clarity Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-岩盾2-100完美全能=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001309] {'name': 'Equilibrium Shield', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-防护1-100完美暴击=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001310] {'name': 'Equilibrium Shield', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-防护2-100完美精通=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001311] {'name': 'Equilibrium Shield', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-光盾1-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001312] {'name': 'Equilibrium Shield', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-光盾2-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001313] {'name': 'Dreamshatter Reverse Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-居合1-100完美暴击=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001314] {'name': 'Dreamshatter Reverse Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-居合2-100完美精通=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001315] {'name': 'Dreamshatter Reverse Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-月刃1-100完美急速=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001316] {'name': 'Dreamshatter Reverse Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-月刃2-100完美幸运=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001317] {'name': 'Cloudpierce Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-狼弓1-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001318] {'name': 'Cloudpierce Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-狼弓2-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001319] {'name': 'Cloudpierce Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-鹰弓1-100完美暴击=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001320] {'name': 'Cloudpierce Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-鹰弓2-100完美急速=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001321] {'name': 'Staff of Awakened Truth', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-冰矛1-100完美暴击=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001322] {'name': 'Staff of Awakened Truth', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-冰矛2-100完美幸运=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001323] {'name': 'Staff of Awakened Truth', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-射线1-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001324] {'name': 'Staff of Awakened Truth', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-射线2-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001325] {'name': 'Clarifying Spell Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-愈合1-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001326] {'name': 'Clarifying Spell Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-愈合2-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001327] {'name': 'Clarifying Spell Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-惩击1-100完美幸运=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001328] {'name': 'Clarifying Spell Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-惩击2-100完美精通=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001329] {'name': 'Dawnbreak Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-协奏1-100完美暴击=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001330] {'name': 'Dawnbreak Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-协奏2-100完美急速=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001331] {'name': 'Dawnbreak Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-狂音1-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001332] {'name': 'Dawnbreak Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-狂音2-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001333] {'name': 'Dreamshatter Reverse Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-太刀紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001334] {'name': 'Staff of Awakened Truth', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-冰法紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001335] {'name': 'Dreamrend Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-青岚紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001336] {'name': 'Cloudpierce Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-弓箭紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001337] {'name': 'Vow of Clarity Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-巨刃紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001338] {'name': 'Dawnbreak Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-吉他紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001339] {'name': 'Clarifying Spell Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-森语紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001340] {'name': 'Equilibrium Shield', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-神盾紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001341] {'name': 'Terrorshatter Twin Axes', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-连打1-100完美幸运=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001342] {'name': 'Terrorshatter Twin Axes', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-连打2-100完美精通=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001343] {'name': 'Terrorshatter Twin Axes', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-狂战1-100完美精通=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001344] {'name': 'Terrorshatter Twin Axes', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-狂战2-100完美暴击=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001345] {'name': 'Terrorshatter Twin Axes', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-双斧紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001346] {'name': 'Dreamshatter Reverse Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-太刀-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001347] {'name': 'Dreamshatter Reverse Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-太刀-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001348] {'name': 'Dreamshatter Reverse Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-太刀-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001349] {'name': 'Dreamshatter Reverse Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-太刀-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001350] {'name': 'Dreamshatter Reverse Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-太刀-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001351] {'name': 'Staff of Awakened Truth', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-冰法-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001352] {'name': 'Staff of Awakened Truth', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-冰法-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001353] {'name': 'Staff of Awakened Truth', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-冰法-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001354] {'name': 'Staff of Awakened Truth', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-冰法-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001355] {'name': 'Staff of Awakened Truth', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-冰法-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001356] {'name': 'Dreamrend Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-青岚-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001357] {'name': 'Dreamrend Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-青岚-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001358] {'name': 'Dreamrend Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-青岚-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001359] {'name': 'Dreamrend Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-青岚-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001360] {'name': 'Dreamrend Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-青岚-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001361] {'name': 'Cloudpierce Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-弓箭-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001362] {'name': 'Cloudpierce Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-弓箭-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001363] {'name': 'Cloudpierce Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-弓箭-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001364] {'name': 'Cloudpierce Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-弓箭-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001365] {'name': 'Cloudpierce Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS敏捷武器-弓箭-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001366] {'name': 'Vow of Clarity Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-巨刃-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001367] {'name': 'Vow of Clarity Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-巨刃-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001368] {'name': 'Vow of Clarity Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-巨刃-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001369] {'name': 'Vow of Clarity Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-巨刃-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001370] {'name': 'Vow of Clarity Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-巨刃-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001371] {'name': 'Dawnbreak Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-吉他-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001372] {'name': 'Dawnbreak Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-吉他-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001373] {'name': 'Dawnbreak Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-吉他-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001374] {'name': 'Dawnbreak Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-吉他-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001375] {'name': 'Dawnbreak Lute', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-吉他-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001376] {'name': 'Clarifying Spell Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-森语-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001377] {'name': 'Clarifying Spell Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-森语-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001378] {'name': 'Clarifying Spell Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-森语-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001379] {'name': 'Clarifying Spell Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-森语-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001380] {'name': 'Clarifying Spell Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS智力武器-森语-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001381] {'name': 'Equilibrium Shield', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-神盾-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001382] {'name': 'Equilibrium Shield', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-神盾-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001383] {'name': 'Equilibrium Shield', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-神盾-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001384] {'name': 'Equilibrium Shield', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-神盾-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001385] {'name': 'Equilibrium Shield', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-神盾-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001386] {'name': 'Terrorshatter Twin Axes', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-双斧-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001387] {'name': 'Terrorshatter Twin Axes', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-双斧-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001388] {'name': 'Terrorshatter Twin Axes', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-双斧-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001389] {'name': 'Terrorshatter Twin Axes', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-双斧-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001390] {'name': 'Terrorshatter Twin Axes', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '240GS力量武器-双斧-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001401] {'name': 'Boundary Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-空枪1-100完美暴击=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001402] {'name': 'Boundary Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-空枪2-100完美幸运=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001403] {'name': 'Boundary Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-重装1-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001404] {'name': 'Boundary Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-重装2-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001405] {'name': 'Unmovable Vow Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-格挡1-100完美幸运=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001406] {'name': 'Unmovable Vow Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-格挡2-100完美精通=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001407] {'name': 'Unmovable Vow Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-岩盾1-100完美精通=全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001408] {'name': 'Unmovable Vow Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-岩盾2-100完美全能=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001409] {'name': 'Unbreakable Shield of the Covenant', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-防护1-100完美暴击=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001410] {'name': 'Unbreakable Shield of the Covenant', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-防护2-100完美精通=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001411] {'name': 'Unbreakable Shield of the Covenant', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-光盾1-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001412] {'name': 'Unbreakable Shield of the Covenant', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-光盾2-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001413] {'name': 'Clearheart Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-居合1-100完美暴击=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001414] {'name': 'Clearheart Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-居合2-100完美精通=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001415] {'name': 'Clearheart Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-月刃1-100完美急速=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001416] {'name': 'Clearheart Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-月刃2-100完美幸运=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001417] {'name': 'Revelation Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-狼弓1-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001418] {'name': 'Revelation Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-狼弓2-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001419] {'name': 'Revelation Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-鹰弓1-100完美暴击=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001420] {'name': 'Revelation Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-鹰弓2-100完美急速=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001421] {'name': 'Staff of Unity', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-冰矛1-100完美暴击=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001422] {'name': 'Staff of Unity', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-冰矛2-100完美幸运=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001423] {'name': 'Staff of Unity', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-射线1-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001424] {'name': 'Staff of Unity', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-射线2-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001425] {'name': 'Sylvan Resonance Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-愈合1-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001426] {'name': 'Sylvan Resonance Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-愈合2-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001427] {'name': 'Sylvan Resonance Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-惩击1-100完美幸运=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001428] {'name': 'Sylvan Resonance Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-惩击2-100完美精通=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001429] {'name': 'Final Creation Song', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-协奏1-100完美暴击=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001430] {'name': 'Final Creation Song', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-协奏2-100完美急速=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001431] {'name': 'Final Creation Song', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-狂音1-100完美急速=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001432] {'name': 'Final Creation Song', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-狂音2-100完美精通=急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001433] {'name': 'Clearheart Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-太刀紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001434] {'name': 'Staff of Unity', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-冰法紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001435] {'name': 'Boundary Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-青岚紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001436] {'name': 'Revelation Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-弓箭紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001437] {'name': 'Unmovable Vow Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-巨刃紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001438] {'name': 'Final Creation Song', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-吉他紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001439] {'name': 'Sylvan Resonance Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-森语紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001440] {'name': 'Unbreakable Shield of the Covenant', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-神盾紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001441] {'name': 'Holyfire Twin Blades', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-连打1-100完美幸运=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001442] {'name': 'Holyfire Twin Blades', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-连打2-100完美精通=幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001443] {'name': 'Holyfire Twin Blades', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-狂战1-100完美精通=暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001444] {'name': 'Holyfire Twin Blades', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-狂战2-100完美暴击=精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001445] {'name': 'Holyfire Twin Blades', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-双斧紫-80完美随机=随机'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001446] {'name': 'Clearheart Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-太刀-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001447] {'name': 'Clearheart Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-太刀-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001448] {'name': 'Clearheart Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-太刀-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001449] {'name': 'Clearheart Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-太刀-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001450] {'name': 'Clearheart Blade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-太刀-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001451] {'name': 'Staff of Unity', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-冰法-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001452] {'name': 'Staff of Unity', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-冰法-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001453] {'name': 'Staff of Unity', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-冰法-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001454] {'name': 'Staff of Unity', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-冰法-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001455] {'name': 'Staff of Unity', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-冰法-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001456] {'name': 'Boundary Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-青岚-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001457] {'name': 'Boundary Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-青岚-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001458] {'name': 'Boundary Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-青岚-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001459] {'name': 'Boundary Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-青岚-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001460] {'name': 'Boundary Spear', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-青岚-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001461] {'name': 'Revelation Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-弓箭-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001462] {'name': 'Revelation Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-弓箭-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001463] {'name': 'Revelation Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-弓箭-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001464] {'name': 'Revelation Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-弓箭-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001465] {'name': 'Revelation Bow', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS敏捷武器-弓箭-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001466] {'name': 'Unmovable Vow Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-巨刃-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001467] {'name': 'Unmovable Vow Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-巨刃-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001468] {'name': 'Unmovable Vow Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-巨刃-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001469] {'name': 'Unmovable Vow Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-巨刃-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001470] {'name': 'Unmovable Vow Greatblade', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-巨刃-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001471] {'name': 'Final Creation Song', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-吉他-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001472] {'name': 'Final Creation Song', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-吉他-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001473] {'name': 'Final Creation Song', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-吉他-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001474] {'name': 'Final Creation Song', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-吉他-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001475] {'name': 'Final Creation Song', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-吉他-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001476] {'name': 'Sylvan Resonance Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-森语-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001477] {'name': 'Sylvan Resonance Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-森语-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001478] {'name': 'Sylvan Resonance Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-森语-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001479] {'name': 'Sylvan Resonance Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-森语-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001480] {'name': 'Sylvan Resonance Ring', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS智力武器-森语-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001481] {'name': 'Unbreakable Shield of the Covenant', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-神盾-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001482] {'name': 'Unbreakable Shield of the Covenant', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-神盾-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001483] {'name': 'Unbreakable Shield of the Covenant', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-神盾-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001484] {'name': 'Unbreakable Shield of the Covenant', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-神盾-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001485] {'name': 'Unbreakable Shield of the Covenant', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-神盾-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001486] {'name': 'Holyfire Twin Blades', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-双斧-制造-暴击'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001487] {'name': 'Holyfire Twin Blades', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-双斧-制造-急速'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001488] {'name': 'Holyfire Twin Blades', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-双斧-制造-幸运'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001489] {'name': 'Holyfire Twin Blades', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-双斧-制造-精通'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001490] {'name': 'Holyfire Twin Blades', 'description': 'ui/atlas/weap_icon/weap_equip_square_03', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '260GS力量武器-双斧-制造-全能'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `[]`)
- **`[2001501] {'name': 'Unthinking Veiled Moon Blade', 'description': 'An epic weapon for the Stormblade.', 'flavorText': 'Divine Thunder Descends, like a heavenly punishment! Its blade is sharp enough to cut hair with a blow. An epic Stormblade weapon.', 'weaponName': '无想胧月闪'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['101', '102']`)
- **`[2001502] {'name': 'Staff of Starlight Fantasy', 'description': 'An epic weapon for the Frost Mage.', 'flavorText': 'Its texture is like jade, its feel like ice, an epic weapon for the Frost Mage.', 'weaponName': '众星幻想之杖'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['104', '105']`)
- **`[2001503] {'name': 'Ragedream Axe', 'description': 'An epic weapon for the Twin Striker class. | | This weapon cannot be forged into Fury of the Far Sea.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '梦呓怒涛斧'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['128', '129']`)
- **`[2001504] {'name': 'Mirage Spear', 'description': 'An epic weapon for the Wind Knight.', 'flavorText': 'As gentle as a forest, as swift as the wind, immovable as a mountain, aggressive as fire, an epic weapon for the Wind Knight.', 'weaponName': '蜃影千幻枪'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['107', '108']`)
- **`[2001505] {'name': 'Voidforge Ring', 'description': 'An epic weapon for the Verdant Oracle.', 'flavorText': 'Surrounded by the forest, resurrected from ashes, an epic weapon for the Verdant Oracle.', 'weaponName': '虚界造物环'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['110', '111']`)
- **`[2001506] {'name': 'Crushing Nightmare Blade', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering commitment! An epic weapon for the Heavy Guardian Class.', 'weaponName': '千钧梦魇之刃'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['113', '114']`)
- **`[2001507] {'name': 'Phantomstar Bow', 'description': 'An epic weapon for the Marksman.', 'flavorText': 'Drawing a bow to its full moon, with energy piercing the rainbow, an epic weapon for the Marksman.', 'weaponName': '星幻流光弓'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['116', '117']`)
- **`[2001508] {'name': 'Oath of the Immortal Watch', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'Bear the burden and hold the sharp weapons. With a dazzling silver glow, this is an epic weapon for the Shield Knights.', 'weaponName': '不朽守望之誓'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['122', '123']`)
- **`[2001509] {'name': 'Voidcall Movement', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '虚空共鸣乐章'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['119', '120']`)
- **`[2001510] {'name': 'Serene Water Blade', 'description': 'An epic weapon for the Stormblade.', 'flavorText': 'Divine Thunder Descends, like a heavenly punishment! Its blade is sharp enough to cut hair with a blow. An epic Stormblade weapon.', 'weaponName': '明镜止水斩'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['101', '102']`)
- **`[2001511] {'name': 'Staff of Manifested Truth', 'description': 'An epic weapon for the Frost Mage.', 'flavorText': 'Its texture is like jade, its feel like ice, an epic weapon for the Frost Mage.', 'weaponName': '真理显现之杖'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['104', '105']`)
- **`[2001512] {'name': 'Declaration of Oblivion', 'description': 'An epic weapon for the Twin Striker class. | | This weapon cannot be forged into Fury of the Far Sea.', 'flavorText': 'ui/atlas/weap_icon/weap_equip_square_03', 'weaponName': '寂灭宣言'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['128', '129']`)
- **`[2001513] {'name': 'Skyrend Spear', 'description': 'An epic weapon for the Wind Knight.', 'flavorText': 'As gentle as a forest, as swift as the wind, immovable as a mountain, aggressive as fire, an epic weapon for the Wind Knight.', 'weaponName': '破障眺空枪'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['107', '108']`)
- **`[2001514] {'name': 'Ring of True Genesis', 'description': 'An epic weapon for the Verdant Oracle.', 'flavorText': 'Surrounded by the forest, resurrected from ashes, an epic weapon for the Verdant Oracle.', 'weaponName': '真源创生环'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['110', '111']`)
- **`[2001515] {'name': 'Sturdy Marble Greatblade', 'description': 'An epic weapon for Heavy Guardian.', 'flavorText': 'Turning rock into sand, gathering sand into a wall, steadfast protection, unwavering commitment! An epic weapon for the Heavy Guardian Class.', 'weaponName': '不摧理石巨刃'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['113', '114']`)
- **`[2001516] {'name': 'Fated Arrow', 'description': 'An epic weapon for the Marksman.', 'flavorText': 'Drawing a bow to its full moon, with energy piercing the rainbow, an epic weapon for the Marksman.', 'weaponName': '天命既定之矢'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['116', '117']`)
- **`[2001517] {'name': 'Boundary Stone of Reality', 'description': 'An epic weapon for Shield Knight.', 'flavorText': 'Bear the burden and hold the sharp weapons. With a dazzling silver glow, this is an epic weapon for the Shield Knights.', 'weaponName': '真实界碑'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['122', '123']`)
- **`[2001518] {'name': 'Worldwake Song', 'description': 'This epic weapon is forged for the Beat Performer.', 'flavorText': 'Emberstride Strings (Em), Cindercleave Edge (C), Gilded Pyre Chord (G), and Dawnforged Symphony (D)', 'weaponName': '世界清醒之音'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['119', '120']`)
- **`[8000001] {'name': 'Shadow of the Far Sea', 'description': 'An epic weapon for the Stormblade class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"In the dark of night, tides surge like a silent blade slicing through the deep. | Lightning cleaves the waves, leaving behind traces that vanish in an instant. | The scythe dances with the wind. What it reaps is not just mortal bodies, but the rifts of fate. | Each strike is a judgment jointly issued by the sea and storm. | And the echo that remains is but solemn silence within shattered tides." | (Excerpt from "Book of the Depths VII")', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['101', '102']`)
- **`[8000002] {'name': 'Revelation of the Far Sea', 'description': 'An epic weapon for the Frost Mage class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"Between the sea\'s breaths lies an untold truth. | It carves verses into the surging waves, writing them upon moonlit waters. | The tip of the staff catches a fleeting ripple, turning it into light. | Light pierces the mist, reaching even the deepest longing. | If you\'re willing to listen, the sea will offer you its answer." | (Excerpt from "Book of the Depths II")', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['104', '105']`)
- **`[8000003] {'name': 'Wish of the Far Sea', 'description': 'An epic weapon for the Wind Knight class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"Its edge points straight into the distance, like tides rushing toward the endless sky. | It holds the sea\'s whispers, engraving vows between wind and water. | Every thrust is for the sake of protection, turning gales into unwavering creed. | And the knight\'s wish shall echo with the tide, reaching the farthest shore." | (Excerpt from "Book of the Depths VIII")', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['107', '108']`)
- **`[8000004] {'name': 'Grace of the Far Sea', 'description': 'An epic weapon for the Verdant Oracle class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"In the realm of ebbing tides, the sea leaves behind its final sigh. | The shattered reflections of starlight float on the water, like dreams yet unbroken. | Listen! Each rising tide is the heartbeat of a gentle and solemn deity. | The light surging through the ring soothes bloodstains, granting peace to weary souls." | (Excerpt from "Book of the Depths I")', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['110', '111']`)
- **`[8000005] {'name': 'Waiting of the Far Sea', 'description': 'An epic weapon for the Heavy Guardian class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"The tide is not only gentle; it can become a stern barrier. | Great waves lie prostrate before the reefs, safeguarding the silence behind. | The blade\'s edge is like the spine of the earth, firm and unyielding. | Each impact echoes the ceaseless song of the ocean. | Guardian, the faith of the deep sea has long been bound to your soul." | (Excerpt from "Book of the Depths III")', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['113', '114']`)
- **`[8000006] {'name': 'Gaze of the Far Sea', 'description': 'An epic weapon for the Marksman class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"The sea\'s gaze reaches farther than the wind, longer than the waves. | The bowstring draws tight, as if binding the skyline tightly. | The arrow carry the breath of the tide, crossing the boundary of water and sky. | It always finds its destination, reaching where the heart yearns." | (Excerpt from "Book of the Depths IV")', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['116', '117']`)
- **`[8000007] {'name': 'Vow of the Far Sea', 'description': 'An epic weapon for the Shield Knight class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"Withdraw, withdraw, yet there always remain the unyielding reefs. | That is the ocean\'s silent vow, standing firmly on the shore forever. | The shield bears the waves, embracing the surge without resistance. | With every impact, it endures alongside the sea, without end. | It grants peace to the soul, so the brave may walk without fear. | In the eternal sound of the tide, protection becomes an endless poem." | (Excerpt from "Book of the Depths V")', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['122', '123']`)
- **`[8000008] {'name': 'Hymn of the Far Sea', 'description': 'An epic weapon for the Beat Performer. It can be upgraded\nto higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"Waves strike the reef like trembling strings. | Their sound rises from the surge, chasing the wind into the boundless sky. | Each chord is a secret the deep sea has yet to speak. | Stars and waterlight resonate, weaving a melody that surrounds the battlefield. | And those who listen shall find their way home within the hymn." | (Excerpt from "Book of the Depths VI")', 'weaponName': '灵魂吉他（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['119', '120']`)
- **`[8000009] {'name': 'Shadow of the Far Sea', 'description': 'An epic weapon for the Stormblade class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"In the dark of night, tides surge like a silent blade slicing through the deep. | Lightning cleaves the waves, leaving behind traces that vanish in an instant. | The scythe dances with the wind. What it reaps is not just mortal bodies, but the rifts of fate. | Each strike is a judgment jointly issued by the sea and storm. | And the echo that remains is but solemn silence within shattered tides." | (Excerpt from "Book of the Depths VII")', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['101', '102']`)
- **`[8000010] {'name': 'Revelation of the Far Sea', 'description': 'An epic weapon for the Frost Mage class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"Between the sea\'s breaths lies an untold truth. | It carves verses into the surging waves, writing them upon moonlit waters. | The tip of the staff catches a fleeting ripple, turning it into light. | Light pierces the mist, reaching even the deepest longing. | If you\'re willing to listen, the sea will offer you its answer." | (Excerpt from "Book of the Depths II")', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['104', '105']`)
- **`[8000011] {'name': 'Wish of the Far Sea', 'description': 'An epic weapon for the Wind Knight class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"Its edge points straight into the distance, like tides rushing toward the endless sky. | It holds the sea\'s whispers, engraving vows between wind and water. | Every thrust is for the sake of protection, turning gales into unwavering creed. | And the knight\'s wish shall echo with the tide, reaching the farthest shore." | (Excerpt from "Book of the Depths VIII")', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['107', '108']`)
- **`[8000012] {'name': 'Grace of the Far Sea', 'description': 'An epic weapon for the Verdant Oracle class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"In the realm of ebbing tides, the sea leaves behind its final sigh. | The shattered reflections of starlight float on the water, like dreams yet unbroken. | Listen! Each rising tide is the heartbeat of a gentle and solemn deity. | The light surging through the ring soothes bloodstains, granting peace to weary souls." | (Excerpt from "Book of the Depths I")', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['110', '111']`)
- **`[8000013] {'name': 'Waiting of the Far Sea', 'description': 'An epic weapon for the Heavy Guardian class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"The tide is not only gentle; it can become a stern barrier. | Great waves lie prostrate before the reefs, safeguarding the silence behind. | The blade\'s edge is like the spine of the earth, firm and unyielding. | Each impact echoes the ceaseless song of the ocean. | Guardian, the faith of the deep sea has long been bound to your soul." | (Excerpt from "Book of the Depths III")', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['113', '114']`)
- **`[8000014] {'name': 'Gaze of the Far Sea', 'description': 'An epic weapon for the Marksman class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"The sea\'s gaze reaches farther than the wind, longer than the waves. | The bowstring draws tight, as if binding the skyline tightly. | The arrow carry the breath of the tide, crossing the boundary of water and sky. | It always finds its destination, reaching where the heart yearns." | (Excerpt from "Book of the Depths IV")', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['116', '117']`)
- **`[8000015] {'name': 'Vow of the Far Sea', 'description': 'An epic weapon for the Shield Knight class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"Withdraw, withdraw, yet there always remain the unyielding reefs. | That is the ocean\'s silent vow, standing firmly on the shore forever. | The shield bears the waves, embracing the surge without resistance. | With every impact, it endures alongside the sea, without end. | It grants peace to the soul, so the brave may walk without fear. | In the eternal sound of the tide, protection becomes an endless poem." | (Excerpt from "Book of the Depths V")', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['122', '123']`)
- **`[8000016] {'name': 'Hymn of the Far Sea', 'description': 'An epic weapon for the Beat Performer. It can be upgraded\nto higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"Waves strike the reef like trembling strings. | Their sound rises from the surge, chasing the wind into the boundless sky. | Each chord is a secret the deep sea has yet to speak. | Stars and waterlight resonate, weaving a melody that surrounds the battlefield. | And those who listen shall find their way home within the hymn." | (Excerpt from "Book of the Depths VI")', 'weaponName': '灵魂吉他（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['119', '120']`)
- **`[8000017] {'name': 'Shadow of the Far Sea', 'description': 'An epic weapon for the Stormblade class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"In the dark of night, tides surge like a silent blade slicing through the deep. | Lightning cleaves the waves, leaving behind traces that vanish in an instant. | The scythe dances with the wind. What it reaps is not just mortal bodies, but the rifts of fate. | Each strike is a judgment jointly issued by the sea and storm. | And the echo that remains is but solemn silence within shattered tides." | (Excerpt from "Book of the Depths VII")', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['101', '102']`)
- **`[8000018] {'name': 'Revelation of the Far Sea', 'description': 'An epic weapon for the Frost Mage class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"Between the sea\'s breaths lies an untold truth. | It carves verses into the surging waves, writing them upon moonlit waters. | The tip of the staff catches a fleeting ripple, turning it into light. | Light pierces the mist, reaching even the deepest longing. | If you\'re willing to listen, the sea will offer you its answer." | (Excerpt from "Book of the Depths II")', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['104', '105']`)
- **`[8000019] {'name': 'Wish of the Far Sea', 'description': 'An epic weapon for the Wind Knight class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"Its edge points straight into the distance, like tides rushing toward the endless sky. | It holds the sea\'s whispers, engraving vows between wind and water. | Every thrust is for the sake of protection, turning gales into unwavering creed. | And the knight\'s wish shall echo with the tide, reaching the farthest shore." | (Excerpt from "Book of the Depths VIII")', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['107', '108']`)
- **`[8000020] {'name': 'Grace of the Far Sea', 'description': 'An epic weapon for the Verdant Oracle class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"In the realm of ebbing tides, the sea leaves behind its final sigh. | The shattered reflections of starlight float on the water, like dreams yet unbroken. | Listen! Each rising tide is the heartbeat of a gentle and solemn deity. | The light surging through the ring soothes bloodstains, granting peace to weary souls." | (Excerpt from "Book of the Depths I")', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['110', '111']`)
- **`[8000021] {'name': 'Waiting of the Far Sea', 'description': 'An epic weapon for the Heavy Guardian class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"The tide is not only gentle; it can become a stern barrier. | Great waves lie prostrate before the reefs, safeguarding the silence behind. | The blade\'s edge is like the spine of the earth, firm and unyielding. | Each impact echoes the ceaseless song of the ocean. | Guardian, the faith of the deep sea has long been bound to your soul." | (Excerpt from "Book of the Depths III")', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['113', '114']`)
- **`[8000022] {'name': 'Gaze of the Far Sea', 'description': 'An epic weapon for the Marksman class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"The sea\'s gaze reaches farther than the wind, longer than the waves. | The bowstring draws tight, as if binding the skyline tightly. | The arrow carry the breath of the tide, crossing the boundary of water and sky. | It always finds its destination, reaching where the heart yearns." | (Excerpt from "Book of the Depths IV")', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['116', '117']`)
- **`[8000023] {'name': 'Vow of the Far Sea', 'description': 'An epic weapon for the Shield Knight class. It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"Withdraw, withdraw, yet there always remain the unyielding reefs. | That is the ocean\'s silent vow, standing firmly on the shore forever. | The shield bears the waves, embracing the surge without resistance. | With every impact, it endures alongside the sea, without end. | It grants peace to the soul, so the brave may walk without fear. | In the eternal sound of the tide, protection becomes an endless poem." | (Excerpt from "Book of the Depths V")', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['122', '123']`)
- **`[8000024] {'name': 'Hymn of the Far Sea', 'description': 'An epic weapon for the Beat Performer. It can be upgraded\nto higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter upgrading to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"Waves strike the reef like trembling strings. | Their sound rises from the surge, chasing the wind into the boundless sky. | Each chord is a secret the deep sea has yet to speak. | Stars and waterlight resonate, weaving a melody that surrounds the battlefield. | And those who listen shall find their way home within the hymn." | (Excerpt from "Book of the Depths VI")', 'weaponName': '灵魂吉他（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['119', '120']`)
- **`[8000079] {'name': 'Fury of the Far Sea', 'description': 'An epic Twin Striker weapon.It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter breaking through to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"When the tides converge within the abyss, they cleave through chaos, forging a fearless heart into the surging waves. | A vow of resolve is cast into the boundless depths. | Within that ceaseless tempest, only an unyielding soul may endure the deep sea\'s eternal solitude." | (Excerpt from "Book of the Depths IX")', 'weaponName': '双斧'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['128', '129']`)
- **`[8000080] {'name': 'Fury of the Far Sea', 'description': 'An epic Twin Striker weapon.It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter breaking through to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"When the tides converge within the abyss, they cleave through chaos, forging a fearless heart into the surging waves. | A vow of resolve is cast into the boundless depths. | Within that ceaseless tempest, only an unyielding soul may endure the deep sea\'s eternal solitude." | (Excerpt from "Book of the Depths IX")', 'weaponName': '双斧'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['128', '129']`)
- **`[8000081] {'name': 'Fury of the Far Sea', 'description': 'An epic Twin Striker weapon.It can be upgraded to higher levels using a few Glinting Stellar Cores as this season progresses.\\nAfter breaking through to item level 180, it can be crafted at Lunel, an NPC of the Artisan Guild, into an "Ember - Far Sea" weapon at item level 220, which also activates the weapon\'s visual effects.\\nThe gear Modification feature can be used to select up to 4 entry effects for "Ember - Far Sea" weapons.', 'flavorText': '"When the tides converge within the abyss, they cleave through chaos, forging a fearless heart into the surging waves. | A vow of resolve is cast into the boundless depths. | Within that ceaseless tempest, only an unyielding soul may endure the deep sea\'s eternal solitude." | (Excerpt from "Book of the Depths IX")', 'weaponName': '双斧'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['128', '129']`)
- **`[8000082] {'name': 'Ember - Shadow of the Far Sea', 'description': 'An epic weapon for the Stormblade class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"In the dark of night, tides surge like a silent blade slicing through the deep. | Lightning cleaves the waves, leaving behind traces that vanish in an instant. | The scythe dances with the wind. What it reaps is not just mortal bodies, but the rifts of fate. | Each strike is a judgment jointly issued by the sea and storm. | And the echo that remains is but solemn silence within shattered tides." | (Excerpt from "Book of the Depths VII")', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['101', '102']`)
- **`[8000083] {'name': 'Ember - Revelation of the Far Sea', 'description': 'An epic weapon for the Frost Mage class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"Between the sea\'s breaths lies an untold truth. | It carves verses into the surging waves, writing them upon moonlit waters. | The tip of the staff catches a fleeting ripple, turning it into light. | Light pierces the mist, reaching even the deepest longing. | If you\'re willing to listen, the sea will offer you its answer." | (Excerpt from "Book of the Depths II")', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['104', '105']`)
- **`[8000084] {'name': 'Ember - Wish of the Far Sea', 'description': 'An epic weapon for the Wind Knight class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"Its edge points straight into the distance, like tides rushing toward the endless sky. | It holds the sea\'s whispers, engraving vows between wind and water. | Every thrust is for the sake of protection, turning gales into unwavering creed. | And the knight\'s wish shall echo with the tide, reaching the farthest shore." | (Excerpt from "Book of the Depths VIII")', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['107', '108']`)
- **`[8000085] {'name': 'Ember - Grace of the Far Sea', 'description': 'An epic weapon for the Verdant Oracle class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"In the realm of ebbing tides, the sea leaves behind its final sigh. | The shattered reflections of starlight float on the water, like dreams yet unbroken. | Listen! Each rising tide is the heartbeat of a gentle and solemn deity. | The light surging through the ring soothes bloodstains, granting peace to weary souls." | (Excerpt from "Book of the Depths I")', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['110', '111']`)
- **`[8000086] {'name': 'Ember - Waiting of the Far Sea', 'description': 'An epic weapon for the Heavy Guardian class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"The tide is not only gentle; it can become a stern barrier. | Great waves lie prostrate before the reefs, safeguarding the silence behind. | The blade\'s edge is like the spine of the earth, firm and unyielding. | Each impact echoes the ceaseless song of the ocean. | Guardian, the faith of the deep sea has long been bound to your soul." | (Excerpt from "Book of the Depths III")', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['113', '114']`)
- **`[8000087] {'name': 'Ember - Gaze of the Far Sea', 'description': 'An epic weapon for the Marksman class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"The sea\'s gaze reaches farther than the wind, longer than the waves. | The bowstring draws tight, as if binding the skyline tightly. | The arrow carry the breath of the tide, crossing the boundary of water and sky. | It always finds its destination, reaching where the heart yearns." | (Excerpt from "Book of the Depths IV")', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['116', '117']`)
- **`[8000088] {'name': 'Ember - Vow of the Far Sea', 'description': 'An epic weapon for the Shield Knight class. It can upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"Withdraw, withdraw, yet there always remain the unyielding reefs. | That is the ocean\'s silent vow, standing firmly on the shore forever. | The shield bears the waves, embracing the surge without resistance. | With every impact, it endures alongside the sea, without end. | It grants peace to the soul, so the brave may walk without fear. | In the eternal sound of the tide, protection becomes an endless poem." | (Excerpt from "Book of the Depths V")', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['122', '123']`)
- **`[8000089] {'name': 'Ember - Hymn of the Far Sea', 'description': 'An epic Beat Performer weapon. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"Waves strike the reef like trembling strings. | Their sound rises from the surge, chasing the wind into the boundless sky. | Each chord is a secret the deep sea has yet to speak. | Stars and waterlight resonate, weaving a melody that surrounds the battlefield. | And those who listen shall find their way home within the hymn." | (Excerpt from "Book of the Depths VI")', 'weaponName': '灵魂吉他（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['119', '120']`)
- **`[8000090] {'name': 'Ember - Fury of the Far Sea', 'description': 'An epic Twin Stiker weapon. It can upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"When the tides converge within the abyss, they cleave through chaos, forging a fearless heart into the surging waves. | A vow of resolve is cast into the boundless depths. | Within that ceaseless tempest, only an unyielding soul may endure the deep sea\'s eternal solitude." | (Excerpt from "Book of the Depths IX")', 'weaponName': '双斧'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['128', '129']`)
- **`[8000091] {'name': 'Ember - Shadow of the Far Sea', 'description': 'An epic weapon for the Stormblade class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"In the dark of night, tides surge like a silent blade slicing through the deep. | Lightning cleaves the waves, leaving behind traces that vanish in an instant. | The scythe dances with the wind. What it reaps is not just mortal bodies, but the rifts of fate. | Each strike is a judgment jointly issued by the sea and storm. | And the echo that remains is but solemn silence within shattered tides." | (Excerpt from "Book of the Depths VII")', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['101', '102']`)
- **`[8000092] {'name': 'Ember - Revelation of the Far Sea', 'description': 'An epic weapon for the Frost Mage class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"Between the sea\'s breaths lies an untold truth. | It carves verses into the surging waves, writing them upon moonlit waters. | The tip of the staff catches a fleeting ripple, turning it into light. | Light pierces the mist, reaching even the deepest longing. | If you\'re willing to listen, the sea will offer you its answer." | (Excerpt from "Book of the Depths II")', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['104', '105']`)
- **`[8000093] {'name': 'Ember - Wish of the Far Sea', 'description': 'An epic weapon for the Wind Knight class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"Its edge points straight into the distance, like tides rushing toward the endless sky. | It holds the sea\'s whispers, engraving vows between wind and water. | Every thrust is for the sake of protection, turning gales into unwavering creed. | And the knight\'s wish shall echo with the tide, reaching the farthest shore." | (Excerpt from "Book of the Depths VIII")', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['107', '108']`)
- **`[8000094] {'name': 'Ember - Grace of the Far Sea', 'description': 'An epic weapon for the Verdant Oracle class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"In the realm of ebbing tides, the sea leaves behind its final sigh. | The shattered reflections of starlight float on the water, like dreams yet unbroken. | Listen! Each rising tide is the heartbeat of a gentle and solemn deity. | The light surging through the ring soothes bloodstains, granting peace to weary souls." | (Excerpt from "Book of the Depths I")', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['110', '111']`)
- **`[8000095] {'name': 'Ember - Waiting of the Far Sea', 'description': 'An epic weapon for the Heavy Guardian class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"The tide is not only gentle; it can become a stern barrier. | Great waves lie prostrate before the reefs, safeguarding the silence behind. | The blade\'s edge is like the spine of the earth, firm and unyielding. | Each impact echoes the ceaseless song of the ocean. | Guardian, the faith of the deep sea has long been bound to your soul." | (Excerpt from "Book of the Depths III")', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['113', '114']`)
- **`[8000096] {'name': 'Ember - Gaze of the Far Sea', 'description': 'An epic weapon for the Marksman class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"The sea\'s gaze reaches farther than the wind, longer than the waves. | The bowstring draws tight, as if binding the skyline tightly. | The arrow carry the breath of the tide, crossing the boundary of water and sky. | It always finds its destination, reaching where the heart yearns." | (Excerpt from "Book of the Depths IV")', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['116', '117']`)
- **`[8000097] {'name': 'Ember - Vow of the Far Sea', 'description': 'An epic weapon for the Shield Knight class. It can upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"Withdraw, withdraw, yet there always remain the unyielding reefs. | That is the ocean\'s silent vow, standing firmly on the shore forever. | The shield bears the waves, embracing the surge without resistance. | With every impact, it endures alongside the sea, without end. | It grants peace to the soul, so the brave may walk without fear. | In the eternal sound of the tide, protection becomes an endless poem." | (Excerpt from "Book of the Depths V")', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['122', '123']`)
- **`[8000098] {'name': 'Ember - Hymn of the Far Sea', 'description': 'An epic Beat Performer weapon. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"Waves strike the reef like trembling strings. | Their sound rises from the surge, chasing the wind into the boundless sky. | Each chord is a secret the deep sea has yet to speak. | Stars and waterlight resonate, weaving a melody that surrounds the battlefield. | And those who listen shall find their way home within the hymn." | (Excerpt from "Book of the Depths VI")', 'weaponName': '灵魂吉他（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['119', '120']`)
- **`[8000099] {'name': 'Ember - Fury of the Far Sea', 'description': 'An epic Twin Stiker weapon. It can upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"When the tides converge within the abyss, they cleave through chaos, forging a fearless heart into the surging waves. | A vow of resolve is cast into the boundless depths. | Within that ceaseless tempest, only an unyielding soul may endure the deep sea\'s eternal solitude." | (Excerpt from "Book of the Depths IX")', 'weaponName': '双斧'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['128', '129']`)
- **`[8000100] {'name': 'Ember - Shadow of the Far Sea', 'description': 'An epic weapon for the Stormblade class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"In the dark of night, tides surge like a silent blade slicing through the deep. | Lightning cleaves the waves, leaving behind traces that vanish in an instant. | The scythe dances with the wind. What it reaps is not just mortal bodies, but the rifts of fate. | Each strike is a judgment jointly issued by the sea and storm. | And the echo that remains is but solemn silence within shattered tides." | (Excerpt from "Book of the Depths VII")', 'weaponName': '天罚神雷（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['101', '102']`)
- **`[8000101] {'name': 'Ember - Revelation of the Far Sea', 'description': 'An epic weapon for the Frost Mage class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"Between the sea\'s breaths lies an untold truth. | It carves verses into the surging waves, writing them upon moonlit waters. | The tip of the staff catches a fleeting ripple, turning it into light. | Light pierces the mist, reaching even the deepest longing. | If you\'re willing to listen, the sea will offer you its answer." | (Excerpt from "Book of the Depths II")', 'weaponName': '冰之玉响（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['104', '105']`)
- **`[8000102] {'name': 'Ember - Wish of the Far Sea', 'description': 'An epic weapon for the Wind Knight class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"Its edge points straight into the distance, like tides rushing toward the endless sky. | It holds the sea\'s whispers, engraving vows between wind and water. | Every thrust is for the sake of protection, turning gales into unwavering creed. | And the knight\'s wish shall echo with the tide, reaching the farthest shore." | (Excerpt from "Book of the Depths VIII")', 'weaponName': '正义之风（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['107', '108']`)
- **`[8000103] {'name': 'Ember - Grace of the Far Sea', 'description': 'An epic weapon for the Verdant Oracle class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"In the realm of ebbing tides, the sea leaves behind its final sigh. | The shattered reflections of starlight float on the water, like dreams yet unbroken. | Listen! Each rising tide is the heartbeat of a gentle and solemn deity. | The light surging through the ring soothes bloodstains, granting peace to weary souls." | (Excerpt from "Book of the Depths I")', 'weaponName': '命理之森（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['110', '111']`)
- **`[8000104] {'name': 'Ember - Waiting of the Far Sea', 'description': 'An epic weapon for the Heavy Guardian class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"The tide is not only gentle; it can become a stern barrier. | Great waves lie prostrate before the reefs, safeguarding the silence behind. | The blade\'s edge is like the spine of the earth, firm and unyielding. | Each impact echoes the ceaseless song of the ocean. | Guardian, the faith of the deep sea has long been bound to your soul." | (Excerpt from "Book of the Depths III")', 'weaponName': '砂岩守御（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['113', '114']`)
- **`[8000105] {'name': 'Ember - Gaze of the Far Sea', 'description': 'An epic weapon for the Marksman class. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"The sea\'s gaze reaches farther than the wind, longer than the waves. | The bowstring draws tight, as if binding the skyline tightly. | The arrow carry the breath of the tide, crossing the boundary of water and sky. | It always finds its destination, reaching where the heart yearns." | (Excerpt from "Book of the Depths IV")', 'weaponName': '金玉长弓（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['116', '117']`)
- **`[8000106] {'name': 'Ember - Vow of the Far Sea', 'description': 'An epic weapon for the Shield Knight class. It can upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"Withdraw, withdraw, yet there always remain the unyielding reefs. | That is the ocean\'s silent vow, standing firmly on the shore forever. | The shield bears the waves, embracing the surge without resistance. | With every impact, it endures alongside the sea, without end. | It grants peace to the soul, so the brave may walk without fear. | In the eternal sound of the tide, protection becomes an endless poem." | (Excerpt from "Book of the Depths V")', 'weaponName': '光灼银辉（物理）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['122', '123']`)
- **`[8000107] {'name': 'Ember - Hymn of the Far Sea', 'description': 'An epic Beat Performer weapon. It can be upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"Waves strike the reef like trembling strings. | Their sound rises from the surge, chasing the wind into the boundless sky. | Each chord is a secret the deep sea has yet to speak. | Stars and waterlight resonate, weaving a melody that surrounds the battlefield. | And those who listen shall find their way home within the hymn." | (Excerpt from "Book of the Depths VI")', 'weaponName': '灵魂吉他（魔法）'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['119', '120']`)
- **`[8000108] {'name': 'Ember - Fury of the Far Sea', 'description': 'An epic Twin Stiker weapon. It can upgraded to higher levels using a few Glinting Stellar Cores during the current season.', 'flavorText': '"When the tides converge within the abyss, they cleave through chaos, forging a fearless heart into the surging waves. | A vow of resolve is cast into the boundless depths. | Within that ceaseless tempest, only an unyielding soul may endure the deep sea\'s eternal solitude." | (Excerpt from "Book of the Depths IX")', 'weaponName': '双斧'}`** (GS `None` | Suit `None` | FixedEvoSpecs: `['128', '129']`)

### 1.2 สรุปชนิดของออปชันม่วง (`legendaryAffix`) ของอุปกรณ์สวมใส่ช่องอื่นๆ (201–210):

---
## 2. ข้อมูล Sigils (Enchants) ทั้งหมด แยกตามระดับ Lv.1 (Base), Lv.2 (`refined`), Lv.3 (`perfect`)

- **`[1001] Sigil#1001`**: **Lv.1**:  | **Lv.2**:  | **Lv.3**:  | **Lv.4**:  | **Lv.5**:  | **Lv.6**:  | **Lv.7**:  | **Lv.8**:  | **Lv.9**:  | **Lv.10**:  | **Lv.11**:  | **Lv.12**:  | **Lv.13**:  | **Lv.14**:  | **Lv.15**:  | **Lv.16**:  | **Lv.17**:  | **Lv.18**:  | **Lv.19**:  | **Lv.20**:  | **Lv.21**:  | **Lv.22**:  | **Lv.23**:  | **Lv.24**:  | **Lv.25**:  | **Lv.26**:  | **Lv.27**:  | **Lv.28**:  | **Lv.29**:  | **Lv.30**:  | **Lv.31**:  | **Lv.32**:  | **Lv.33**:  | **Lv.34**:  | **Lv.35**:  | **Lv.36**: 
- **`[1002] Sigil#1002`**: **Lv.1**:  | **Lv.2**:  | **Lv.3**:  | **Lv.4**:  | **Lv.5**:  | **Lv.6**:  | **Lv.7**:  | **Lv.8**:  | **Lv.9**:  | **Lv.10**:  | **Lv.11**:  | **Lv.12**:  | **Lv.13**:  | **Lv.14**:  | **Lv.15**:  | **Lv.16**:  | **Lv.17**:  | **Lv.18**:  | **Lv.19**:  | **Lv.20**:  | **Lv.21**:  | **Lv.22**:  | **Lv.23**:  | **Lv.24**:  | **Lv.25**:  | **Lv.26**:  | **Lv.27**:  | **Lv.28**:  | **Lv.29**:  | **Lv.30**:  | **Lv.31**:  | **Lv.32**:  | **Lv.33**:  | **Lv.34**:  | **Lv.35**:  | **Lv.36**: 
- **`[1003] Sigil#1003`**: **Lv.1**:  | **Lv.2**:  | **Lv.3**:  | **Lv.4**:  | **Lv.5**:  | **Lv.6**:  | **Lv.7**:  | **Lv.8**:  | **Lv.9**:  | **Lv.10**:  | **Lv.11**:  | **Lv.12**:  | **Lv.13**:  | **Lv.14**:  | **Lv.15**:  | **Lv.16**:  | **Lv.17**:  | **Lv.18**:  | **Lv.19**:  | **Lv.20**:  | **Lv.21**:  | **Lv.22**:  | **Lv.23**:  | **Lv.24**:  | **Lv.25**:  | **Lv.26**:  | **Lv.27**:  | **Lv.28**:  | **Lv.29**:  | **Lv.30**:  | **Lv.31**:  | **Lv.32**:  | **Lv.33**:  | **Lv.34**:  | **Lv.35**:  | **Lv.36**: 
- **`[2001] Sigil#2001`**: **Lv.1**:  | **Lv.2**:  | **Lv.3**:  | **Lv.4**:  | **Lv.5**:  | **Lv.6**:  | **Lv.7**:  | **Lv.8**: 
- **`[2002] Sigil#2002`**: **Lv.1**:  | **Lv.2**:  | **Lv.3**:  | **Lv.4**:  | **Lv.5**:  | **Lv.6**:  | **Lv.7**:  | **Lv.8**:  | **Lv.9**:  | **Lv.10**: 
- **`[2003] Sigil#2003`**: **Lv.1**:  | **Lv.2**:  | **Lv.3**:  | **Lv.4**:  | **Lv.5**:  | **Lv.6**:  | **Lv.7**:  | **Lv.8**:  | **Lv.9**: 
- **`[2004] Sigil#2004`**: **Lv.1**:  | **Lv.2**:  | **Lv.3**:  | **Lv.4**:  | **Lv.5**:  | **Lv.6**:  | **Lv.7**:  | **Lv.8**:  | **Lv.9**:  | **Lv.10**:  | **Lv.11**:  | **Lv.12**:  | **Lv.13**:  | **Lv.14**:  | **Lv.15**:  | **Lv.16**:  | **Lv.17**: 
- **`[3001] Sigil#3001`**: **Lv.1**:  | **Lv.2**:  | **Lv.3**:  | **Lv.4**:  | **Lv.5**:  | **Lv.6**:  | **Lv.7**:  | **Lv.8**:  | **Lv.9**:  | **Lv.10**:  | **Lv.11**:  | **Lv.12**:  | **Lv.13**:  | **Lv.14**:  | **Lv.15**:  | **Lv.16**:  | **Lv.17**:  | **Lv.18**:  | **Lv.19**:  | **Lv.20**:  | **Lv.21**:  | **Lv.22**:  | **Lv.23**:  | **Lv.24**:  | **Lv.25**:  | **Lv.26**:  | **Lv.27**:  | **Lv.28**:  | **Lv.29**: 
- **`[3002] Sigil#3002`**: **Lv.1**:  | **Lv.2**:  | **Lv.3**:  | **Lv.4**:  | **Lv.5**:  | **Lv.6**:  | **Lv.7**:  | **Lv.8**:  | **Lv.9**:  | **Lv.10**:  | **Lv.11**:  | **Lv.12**:  | **Lv.13**:  | **Lv.14**:  | **Lv.15**:  | **Lv.16**:  | **Lv.17**:  | **Lv.18**:  | **Lv.19**:  | **Lv.20**:  | **Lv.21**:  | **Lv.22**:  | **Lv.23**:  | **Lv.24**:  | **Lv.25**:  | **Lv.26**:  | **Lv.27**:  | **Lv.28**:  | **Lv.29**:  | **Lv.30**:  | **Lv.31**:  | **Lv.32**:  | **Lv.33**:  | **Lv.34**:  | **Lv.35**:  | **Lv.36**:  | **Lv.37**: 
- **`[3003] Sigil#3003`**: **Lv.1**:  | **Lv.2**:  | **Lv.3**:  | **Lv.4**:  | **Lv.5**:  | **Lv.6**:  | **Lv.7**:  | **Lv.8**:  | **Lv.9**:  | **Lv.10**:  | **Lv.11**:  | **Lv.12**:  | **Lv.13**:  | **Lv.14**:  | **Lv.15**:  | **Lv.16**:  | **Lv.17**:  | **Lv.18**:  | **Lv.19**:  | **Lv.20**:  | **Lv.21**:  | **Lv.22**:  | **Lv.23**:  | **Lv.24**:  | **Lv.25**:  | **Lv.26**:  | **Lv.27**: 
- **`[3004] Sigil#3004`**: **Lv.1**:  | **Lv.2**:  | **Lv.3**:  | **Lv.4**:  | **Lv.5**:  | **Lv.6**:  | **Lv.7**:  | **Lv.8**:  | **Lv.9**:  | **Lv.10**:  | **Lv.11**:  | **Lv.12**:  | **Lv.13**:  | **Lv.14**:  | **Lv.15**:  | **Lv.16**:  | **Lv.17**:  | **Lv.18**:  | **Lv.19**:  | **Lv.20**:  | **Lv.21**:  | **Lv.22**:  | **Lv.23**:  | **Lv.24**:  | **Lv.25**:  | **Lv.26**:  | **Lv.27**:  | **Lv.28**:  | **Lv.29**:  | **Lv.30**:  | **Lv.31**:  | **Lv.32**:  | **Lv.33**:  | **Lv.34**:  | **Lv.35**:  | **Lv.36**:  | **Lv.37**:  | **Lv.38**: 

---
## 3. ข้อมูล Modules ทั้ง 21 ชนิด ครบทุกระดับ Link Lv.1 ถึง Lv.6 (`modules.json` + `attrDescs`)

### Module Effect `[1110] Strength Boost`
- **Link Lv.1 (ใช้ `1` แต้ม)**: ATK +5
- **Link Lv.2 (ใช้ `4` แต้ม)**: ATK +10
- **Link Lv.3 (ใช้ `8` แต้ม)**: ATK +15 ; Strength +10
- **Link Lv.4 (ใช้ `12` แต้ม)**: ATK +20 ; Strength +20
- **Link Lv.5 (ใช้ `16` แต้ม)**: ATK +25 ; Strength +30 ; Armor Penetration +1150
- **Link Lv.6 (ใช้ `20` แต้ม)**: ATK +30 ; Strength +40 ; Armor Penetration +1880
### Module Effect `[1111] Agility Boost`
- **Link Lv.1 (ใช้ `1` แต้ม)**: ATK +5
- **Link Lv.2 (ใช้ `4` แต้ม)**: ATK +10
- **Link Lv.3 (ใช้ `8` แต้ม)**: ATK +15 ; Agility +10
- **Link Lv.4 (ใช้ `12` แต้ม)**: ATK +20 ; Agility +20
- **Link Lv.5 (ใช้ `16` แต้ม)**: ATK +25 ; Agility +30 ; [Combat Effect #2300220]: Attack DMG +3.60% (raw:360)
- **Link Lv.6 (ใช้ `20` แต้ม)**: ATK +30 ; Agility +40 ; [Combat Effect #2300220]: Attack DMG +6.00% (raw:600)
### Module Effect `[1112] Intellect Boost`
- **Link Lv.1 (ใช้ `1` แต้ม)**: MATK +5
- **Link Lv.2 (ใช้ `4` แต้ม)**: MATK +10
- **Link Lv.3 (ใช้ `8` แต้ม)**: MATK +15 ; Intellect +10
- **Link Lv.4 (ใช้ `12` แต้ม)**: MATK +20 ; Intellect +20
- **Link Lv.5 (ใช้ `16` แต้ม)**: MATK +25 ; Intellect +30 ; [Combat Effect #2300310]: Magic DMG +3.60% (raw:360)
- **Link Lv.6 (ใช้ `20` แต้ม)**: MATK +30 ; Intellect +40 ; [Combat Effect #2300310]: Magic DMG +6.00% (raw:600)
### Module Effect `[1113] Special Attack`
- **Link Lv.1 (ใช้ `1` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +5
- **Link Lv.2 (ใช้ `4` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +10
- **Link Lv.3 (ใช้ `8` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +15 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +10
- **Link Lv.4 (ใช้ `12` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +20 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +20
- **Link Lv.5 (ใช้ `16` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +25 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +30 ; [Combat Effect #2300120]: Special Attack elemental DMG +7.20% (raw:720)
- **Link Lv.6 (ใช้ `20` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +30 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +40 ; [Combat Effect #2300120]: Special Attack elemental DMG +12.00% (raw:1200)
### Module Effect `[1114] Elite Strike`
- **Link Lv.1 (ใช้ `1` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +5
- **Link Lv.2 (ใช้ `4` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +10
- **Link Lv.3 (ใช้ `8` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +15 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +10
- **Link Lv.4 (ใช้ `12` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +20 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +20
- **Link Lv.5 (ใช้ `16` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +25 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +30 ; [Combat Effect #2300020]: Increases the DMG dealt to Elites or stronger enemies by 3.90% (raw:390).
- **Link Lv.6 (ใช้ `20` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +30 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +40 ; [Combat Effect #2300020]: Increases the DMG dealt to Elites or stronger enemies by 6.60% (raw:660).
### Module Effect `[1205] Healing Boost`
- **Link Lv.1 (ใช้ `1` แต้ม)**: MATK +5
- **Link Lv.2 (ใช้ `4` แต้ม)**: MATK +10
- **Link Lv.3 (ใช้ `8` แต้ม)**: MATK +15 ; Intellect +10
- **Link Lv.4 (ใช้ `12` แต้ม)**: MATK +20 ; Intellect +20
- **Link Lv.5 (ใช้ `16` แต้ม)**: MATK +25 ; Intellect +30 ; [Combat Effect #2300410]: Special attack healing +7.20% (raw:720)
- **Link Lv.6 (ใช้ `20` แต้ม)**: MATK +30 ; Intellect +40 ; [Combat Effect #2300410]: Special attack healing +12.00% (raw:1200)
### Module Effect `[1206] Healing Enhance`
- **Link Lv.1 (ใช้ `1` แต้ม)**: MATK +5
- **Link Lv.2 (ใช้ `4` แต้ม)**: MATK +10
- **Link Lv.3 (ใช้ `8` แต้ม)**: MATK +15 ; Intellect +10
- **Link Lv.4 (ใช้ `12` แต้ม)**: MATK +20 ; Intellect +20
- **Link Lv.5 (ใช้ `16` แต้ม)**: MATK +25 ; Intellect +30 ; [Combat Effect #2300420]: Expertise Skill healing +7.20% (raw:720)
- **Link Lv.6 (ใช้ `20` แต้ม)**: MATK +30 ; Intellect +40 ; [Combat Effect #2300420]: Expertise Skill healing +12.00% (raw:1200)
### Module Effect `[1307] Resistance`
- **Link Lv.1 (ใช้ `1` แต้ม)**: Endurance +30
- **Link Lv.2 (ใช้ `4` แต้ม)**: Endurance +60
- **Link Lv.3 (ใช้ `8` แต้ม)**: Endurance +90 ; Max HP +100
- **Link Lv.4 (ใช้ `12` แต้ม)**: Endurance +120 ; Max HP +200
- **Link Lv.5 (ใช้ `16` แต้ม)**: Endurance +150 ; Max HP +300 ; MATK Reduction +360
- **Link Lv.6 (ใช้ `20` แต้ม)**: Endurance +180 ; Max HP +400 ; MATK Reduction +600
### Module Effect `[1308] Armor`
- **Link Lv.1 (ใช้ `1` แต้ม)**: Armor +80
- **Link Lv.2 (ใช้ `4` แต้ม)**: Armor +160
- **Link Lv.3 (ใช้ `8` แต้ม)**: Armor +240 ; All Element Attack +5
- **Link Lv.4 (ใช้ `12` แต้ม)**: Armor +320 ; All Element Attack +10
- **Link Lv.5 (ใช้ `16` แต้ม)**: Armor +400 ; All Element Attack +15 ; Attr#12562 +360
- **Link Lv.6 (ใช้ `20` แต้ม)**: Armor +480 ; All Element Attack +20 ; Attr#12562 +600
### Module Effect `[1407] Cast Focus`
- **Link Lv.1 (ใช้ `1` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +5
- **Link Lv.2 (ใช้ `4` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +10
- **Link Lv.3 (ใช้ `8` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +20
- **Link Lv.4 (ใช้ `12` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +30
- **Link Lv.5 (ใช้ `16` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +40 ; Cast Speed +720
- **Link Lv.6 (ใช้ `20` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +50 ; Cast Speed +1200
### Module Effect `[1408] Attack SPD`
- **Link Lv.1 (ใช้ `1` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +5
- **Link Lv.2 (ใช้ `4` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +10
- **Link Lv.3 (ใช้ `8` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +20
- **Link Lv.4 (ใช้ `12` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +30
- **Link Lv.5 (ใช้ `16` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +40 ; Attack SPD +360
- **Link Lv.6 (ใช้ `20` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +50 ; Attack SPD +600
### Module Effect `[1409] Crit Focus`
- **Link Lv.1 (ใช้ `1` แต้ม)**: Max HP +300
- **Link Lv.2 (ใช้ `4` แต้ม)**: Max HP +600
- **Link Lv.3 (ใช้ `8` แต้ม)**: Max HP +900 ; All Element +20
- **Link Lv.4 (ใช้ `12` แต้ม)**: Max HP +1200 ; All Element +40
- **Link Lv.5 (ใช้ `16` แต้ม)**: Max HP +1500 ; All Element +60 ; Crit DMG +710 ; Crit Healing +710
- **Link Lv.6 (ใช้ `20` แต้ม)**: Max HP +1800 ; All Element +80 ; Crit DMG +1200 ; Crit Healing +1200
### Module Effect `[1410] Luck Focus`
- **Link Lv.1 (ใช้ `1` แต้ม)**: Max HP +300
- **Link Lv.2 (ใช้ `4` แต้ม)**: Max HP +600
- **Link Lv.3 (ใช้ `8` แต้ม)**: Max HP +900 ; All Element +20
- **Link Lv.4 (ใช้ `12` แต้ม)**: Max HP +1200 ; All Element +40
- **Link Lv.5 (ใช้ `16` แต้ม)**: Max HP +1500 ; All Element +60 ; Lucky Strike DMG Multiplier +470 ; Attr#12722 +370
- **Link Lv.6 (ใช้ `20` แต้ม)**: Max HP +1800 ; All Element +80 ; Lucky Strike DMG Multiplier +780 ; Attr#12722 +620
### Module Effect `[2104] DMG Stack`
- **Link Lv.1 (ใช้ `1` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +10
- **Link Lv.2 (ใช้ `4` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +20
- **Link Lv.3 (ใช้ `8` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +30 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +20
- **Link Lv.4 (ใช้ `12` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +40 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +40
- **Link Lv.5 (ใช้ `16` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +50 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +60 ; [Combat Effect #2300620]: When dealing DMG, you have a 20.00% (raw:2000) chance to increase your DMG dealt to that target by 1.65% (raw:165) for 8s, stacking up to 4 times.
- **Link Lv.6 (ใช้ `20` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +60 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +80 ; [Combat Effect #2300620]: When dealing DMG, you have a 20.00% (raw:2000) chance to increase your DMG dealt to that target by 2.75% (raw:275) for 8s, stacking up to 4 times.
### Module Effect `[2105] Agile`
- **Link Lv.1 (ใช้ `1` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +10
- **Link Lv.2 (ใช้ `4` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +20
- **Link Lv.3 (ใช้ `8` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +30 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +20
- **Link Lv.4 (ใช้ `12` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +40 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +40
- **Link Lv.5 (ใช้ `16` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +50 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +60 ; [Combat Effect #2302020]: After entering combat, Speed +18.00% (raw:1800) and ATK +6.00% (raw:600), removed upon taking damage. If no damage is taken within 5s, regain the buff.
- **Link Lv.6 (ใช้ `20` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +60 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +80 ; [Combat Effect #2302020]: After entering combat, Speed +30.00% (raw:3000) and ATK +10.00% (raw:1000), removed upon taking damage. If no damage is taken within 5s, regain the buff.
### Module Effect `[2204] Life Condense`
- **Link Lv.1 (ใช้ `1` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +10
- **Link Lv.2 (ใช้ `4` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +20
- **Link Lv.3 (ใช้ `8` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +30 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +20
- **Link Lv.4 (ใช้ `12` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +40 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +40
- **Link Lv.5 (ใช้ `16` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +50 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +60 ; [Combat Effect #2300070]: When your HP is above 50.00% (raw:5000), every additional 5.00% (raw:500) increases your Healing by 0.66% (raw:66).
- **Link Lv.6 (ใช้ `20` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +60 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +80 ; [Combat Effect #2300070]: When your HP is above 50.00% (raw:5000), every additional 5.00% (raw:500) increases your Healing by 1.10% (raw:110).
### Module Effect `[2205] First Aid`
- **Link Lv.1 (ใช้ `1` แต้ม)**: MATK +10
- **Link Lv.2 (ใช้ `4` แต้ม)**: MATK +20
- **Link Lv.3 (ใช้ `8` แต้ม)**: MATK +30 ; Intellect +20
- **Link Lv.4 (ใช้ `12` แต้ม)**: MATK +40 ; Intellect +40
- **Link Lv.5 (ใช้ `16` แต้ม)**: MATK +50 ; Intellect +60 ; [Combat Effect #2302320]: When HP drops below 50.00% (raw:5000), receiving damage grants a healing aura that heals you and up to 10 nearby allies for 7.20% (raw:720) HP per second for 5s. CD: 30s.
- **Link Lv.6 (ใช้ `20` แต้ม)**: MATK +60 ; Intellect +80 ; [Combat Effect #2302320]: When HP drops below 50.00% (raw:5000), receiving damage grants a healing aura that heals you and up to 10 nearby allies for 12.00% (raw:1200) HP per second for 5s. CD: 30s.
### Module Effect `[2304] Final Protection`
- **Link Lv.1 (ใช้ `1` แต้ม)**: Max HP +600
- **Link Lv.2 (ใช้ `4` แต้ม)**: Max HP +1200
- **Link Lv.3 (ใช้ `8` แต้ม)**: Max HP +1800 ; Strength +20
- **Link Lv.4 (ใช้ `12` แต้ม)**: Max HP +2400 ; Strength +40
- **Link Lv.5 (ใช้ `16` แต้ม)**: Max HP +3000 ; Strength +60 ; [Combat Effect #2300820]: You gain 2.00% (raw:200) DMG Reduction. If your HP is below 70.00% (raw:7000), you gain an additional 2.40% (raw:240) DMG Reduction for every 20.00% (raw:2000) HP missing from that threshold, stacking up to 3 times.
- **Link Lv.6 (ใช้ `20` แต้ม)**: Max HP +3600 ; Strength +80 ; [Combat Effect #2300820]: You gain 3.50% (raw:350) DMG Reduction. If your HP is below 70.00% (raw:7000), you gain an additional 4.00% (raw:400) DMG Reduction for every 20.00% (raw:2000) HP missing from that threshold, stacking up to 3 times.
### Module Effect `[2404] Life Wave`
- **Link Lv.1 (ใช้ `1` แต้ม)**: Max HP +600
- **Link Lv.2 (ใช้ `4` แต้ม)**: Max HP +1200
- **Link Lv.3 (ใช้ `8` แต้ม)**: Max HP +1800 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +20
- **Link Lv.4 (ใช้ `12` แต้ม)**: Max HP +2400 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +40
- **Link Lv.5 (ใช้ `16` แต้ม)**: Max HP +3000 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +60 ; [Combat Effect #2302420]: When HP changes, the highest attribute among Crit, mastery, haste, versatility, or luck +6.00% (raw:600), lasting 5s.
- **Link Lv.6 (ใช้ `20` แต้ม)**: Max HP +3600 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +80 ; [Combat Effect #2302420]: When HP changes, the highest attribute among Crit, mastery, haste, versatility, or luck +10.00% (raw:1000), lasting 5s.
### Module Effect `[2405] Life Steal`
- **Link Lv.1 (ใช้ `1` แต้ม)**: ATK +10
- **Link Lv.2 (ใช้ `4` แต้ม)**: ATK +20
- **Link Lv.3 (ใช้ `8` แต้ม)**: ATK +30 ; Strength +20
- **Link Lv.4 (ใช้ `12` แต้ม)**: ATK +40 ; Strength +40
- **Link Lv.5 (ใช้ `16` แต้ม)**: ATK +50 ; Strength +60 ; [Combat Effect #2300080]: When your Class Skill deals DMG, you restore HP equal to 1.80% (raw:180) of that DMG, up to 5.00% (raw:500) of your Max HP.
- **Link Lv.6 (ใช้ `20` แต้ม)**: ATK +60 ; Strength +80 ; [Combat Effect #2300080]: When your Class Skill deals DMG, you restore HP equal to 3.00% (raw:300) of that DMG, up to 5.00% (raw:500) of your Max HP.
### Module Effect `[2406] Team Luck & Crit`
- **Link Lv.1 (ใช้ `1` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +10
- **Link Lv.2 (ใช้ `4` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +20
- **Link Lv.3 (ใช้ `8` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +30 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +20
- **Link Lv.4 (ใช้ `12` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +40 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +40
- **Link Lv.5 (ใช้ `16` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +50 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +60 ; [Combat Effect #2302120]: Entire team deals 3.10% (raw:310) more Crit DMG and 2.00% (raw:200) more Luck Damage. This effect is doubled on yourself. (Only one effect can be active at a time.)
- **Link Lv.6 (ใช้ `20` แต้ม)**: [Adaptive #99006]: Adaptive ATK/MATK +60 ; [Adaptive #99005]: Adaptive Strength/Intellect/Agility +80 ; [Combat Effect #2302120]: Entire team deals 5.20% (raw:520) more Crit DMG and 3.40% (raw:340) more Luck Damage. This effect is doubled on yourself. (Only one effect can be active at a time.)

---
## 4. ข้อมูล Deep Slumber Psychoscope ทั้ง 8 สาย, โหนดบัฟ, Bond Points, และ Factors (`season-talents.json` & `phantom-factors.json`)

### 4.1 โหนดบัฟธรรมดา (`ordinaryEffects`) พร้อมค่าสเตตัสและคำอธิบายจริง:
- **`[1001] Fantasia Impact`**: Buff[3002010]: Every 20 Lucky Strikes trigger [Link#1200: Fantasia Impact], up to once every 10s. Each Lucky Strike triggered reduces internal CD of [Link#1200: Fantasia Impact] by 0.30s. (raw effects=`[[3, 3002010, 1]]`, buffPars=`[[0]]`)
- **`[1002] Linkage`**: Buff[3002020]: For each teammate within 10m, increases Luck Chance by 1%, up to 3%. (raw effects=`[[3, 3002020, 1]]`, buffPars=`[[0]]`)
- **`[1003] Reconstruct`**: Buff[3002030]: Lucky Strike Multiplier + 10%. (raw effects=`[[3, 3002030, 1]]`, buffPars=`[[0]]`)
- **`[1004] Time-Step`**: Buff[3002040]: Internal CD of [Link#1200: Fantasia Impact] +5s; Illusion-Breaking DMG of [Link#1200: Fantasia Impact] +100%. (raw effects=`[[3, 3002040, 1]]`, buffPars=`[[0]]`)
- **`[1005] Multi-Phasic Strike`**: Buff[3002050]: [Link#1200: Fantasia Impact] required triggers +10; Illusion-Breaking DMG of [Link#1200: Fantasia Impact] +100%. (raw effects=`[[3, 3002050, 1]]`, buffPars=`[[0]]`)
- **`[1006] Ripple of Fate`**: Buff[3002060]: [Link#1200: Fantasia Impact] Illusion-Breaking DMG increases by 15% for each 1 additional enemy hit, up to a maximum of 60%. (raw effects=`[[3, 3002060, 1]]`, buffPars=`[[0]]`)
- **`[1007] Dual`**: Buff[3002070]: [Link#1200: Fantasia Impact] has a fixed 50% chance to trigger one extra time. (raw effects=`[[3, 3002070, 1]]`, buffPars=`[[0]]`)
- **`[1008] Chrono Elixir`**: Buff[3002080]: Food and Potion duration +30%. (raw effects=`[[3, 3002080, 1]]`, buffPars=`[[0]]`)
- **`[1009] Blink Breath`**: Buff[3002090]: Increases Movement Speed by 10%, and restores 35 Stamina per second while in combat. (raw effects=`[[3, 3002090, 1]]`, buffPars=`[[0]]`)
- **`[1010] Ultimate Fortune`**: Buff[3002100]: Every 10 Lucky Strikes triggered increase main attributes by 10% for 5s. (raw effects=`[[3, 3002100, 1]]`, buffPars=`[[0]]`)
- **`[1101] Phantom Execution`**: Buff[3002210]: Within 15s, after 10 instances of casting non-Basic Attack Class Skills, your next Class Skill will trigger [Link#1201: Phantom Execution] (up to once every 15s. (raw effects=`[[3, 3002210, 1]]`, buffPars=`[[0]]`)
- **`[1102] Mirage Edge`**: Buff[3002220]: [Link#1201: Phantom Execution]: The Crit Chance obtained in any way increases by 6%. (raw effects=`[[3, 3002220, 1]]`, buffPars=`[[0]]`)
- **`[1103] Execution Force`**: Buff[3002230]: For each instance your Class Skills deal a Crit, increases [Link#1201: Phantom Execution] Illusion-Breaking DMG by 6% for 8s, stacking up to 5 times. (raw effects=`[[3, 3002230, 1]]`, buffPars=`[[0]]`)
- **`[1104] Time-Slit`**: Buff[3002240]: When [Link#1201: Phantom Execution] hits a single target, grants one of the following 3 effects at random (cannot stack): Time-Slit - Illusion: Increases main attributes by 10% for 10s. Time-Slit - Dream: Reduces the CD of Special Attack and Expertise Skills by 22% for 7s. Time-Slit - Slumber: Increases Illusion-Breaking DMG of Expertise Skills by 25% for 15s. (raw effects=`[[3, 3002240, 1]]`, buffPars=`[[0]]`)
- **`[1105] Instant`**: Buff[3002250]: Defeating an enemy instantly refreshes [Link#1201: Phantom Execution] CD. (raw effects=`[[3, 3002250, 1]]`, buffPars=`[[0]]`)
- **`[1106] Nirvana Leap`**: Buff[3002260]: [Link#1201: Phantom Execution] jumps to 2 nearby targets, with Illusion-Breaking DMG reduced by 35% per jump. (raw effects=`[[3, 3002260, 1]]`, buffPars=`[[0]]`)
- **`[1107] Cinder of Reverie`**: Buff[3002270]: [Link#1201: Phantom Execution] unleashes an extra burst, but that burst's Illusion-Breaking DMG decreases by 50%. (raw effects=`[[3, 3002270, 1]]`, buffPars=`[[0]]`)
- **`[1108] Chrono Elixir`**: Buff[3002080]: Food and Potion duration +30%. (raw effects=`[[3, 3002080, 1]]`, buffPars=`[[0]]`)
- **`[1109] Blink Breath`**: Buff[3002090]: Increases Movement Speed by 10%, and restores 35 Stamina per second while in combat. (raw effects=`[[3, 3002090, 1]]`, buffPars=`[[0]]`)
- **`[1110] Swift-Calc`**: Buff[3002280]: When non-Basic Attack Direct-DMG class skills deal Crit DMG, [Link#1201: Phantom Execution] trigger count +1, and internal CD −0.5s (up to once every 0.5s). (raw effects=`[[3, 3002280, 1]]`, buffPars=`[[0]]`)
- **`[1201] Phantom Arrow`**: Buff[3002410]: Casting a DMG-type Expertise Skill summons [Link#1202: Phantom Arrows], up to once every 7s. During combat, each summon of [Link#1202: Phantom Arrows] increases the number of [Link#1202: Phantom Arrows] summoned the next time by 1 (up to 8). Each use of Special Attack reduces internal CD of [Link#1202: Phantom Arrow] by 0.6s. If no [Link#1202: Phantom Arrow] is triggered for 60s, stack count resets. Each 1% Mastery increases its DMG by 0.5%. (raw effects=`[[3, 3002410, 1]]`, buffPars=`[[0]]`)
- **`[1202] Dual Time`**: Buff[3002420]: When Special Attack reduces [Link#1202: Phantom Arrow] CD, it has a fixed 30% chance to double the reduction. (raw effects=`[[3, 3002420, 1]]`, buffPars=`[[0]]`)
- **`[1203] Dreamarrow Storm`**: Buff[3002430]: Increases [Link#1202: Phantom Arrow] Illusion-Breaking DMG by 50%, but [Link#1202: Phantom Arrow] can no longer deal Crit DMG. (raw effects=`[[3, 3002430, 1]]`, buffPars=`[[0]]`)
- **`[1204] Mirage Shot`**: Buff[3002440]: Illusion-Breaking DMG of [Link#1202: Phantom Arrow] +30%. (raw effects=`[[3, 3002440, 1]]`, buffPars=`[[0]]`)
- **`[1205] Eightfold Skyflow`**: Buff[3002450]: Increases [Link#1202: Phantom Arrow] Illusion-Breaking DMG by 15%. Increases [Link#1202: Phantom Arrow] max stack count by 2. (raw effects=`[[3, 3002450, 1]]`, buffPars=`[[0]]`)
- **`[1206] Beauty of Refinement`**: Buff[3002460]: Refined ATK and Refined Armor +10%. (raw effects=`[[3, 3002460, 1]]`, buffPars=`[[0]]`)
- **`[1207] Phantom Pierce`**: Buff[3002470]: [Link#1202: Phantom Arrow] nullifies Defense (both Armor and Resistance). (raw effects=`[[3, 3002470, 1]]`, buffPars=`[[0]]`)
- **`[1208] Chrono Elixir`**: Buff[3002080]: Food and Potion duration +30%. (raw effects=`[[3, 3002080, 1]]`, buffPars=`[[0]]`)
- **`[1209] Blink Breath`**: Buff[3002090]: Increases Movement Speed by 10%, and restores 35 Stamina per second while in combat. (raw effects=`[[3, 3002090, 1]]`, buffPars=`[[0]]`)
- **`[1210] Expert Technique`**: Buff[3002480]: Illusion-Breaking DMG of Expertise Skill +20%. (raw effects=`[[3, 3002480, 1]]`, buffPars=`[[0]]`)
- **`[1301] Mirage Dream`**: Buff[3002610]: When Basic Attack or Special Attack deals 12 hits to the main target (melee skills count +1), triggers [Link#1203: Mirage Dream] for 8s, stacking up to 10 times. (raw effects=`[[3, 3002610, 1]]`, buffPars=`[[0]]`)
- **`[1302] Dual Ascension Formation`**: Buff[3002620]: Increases [Link#1203: Mirage Dream] max stack count by 3. (raw effects=`[[3, 3002620, 1]]`, buffPars=`[[0]]`)
- **`[1303] Battlestart - Rare`**: Buff[3002630]: Grants full stacks of [Link#1203: Mirage Dream] upon combat entering, but reduces max stack count by 2. (raw effects=`[[3, 3002630, 1]]`, buffPars=`[[0]]`)
- **`[1304] Cross the Mirage`**: Buff[3002640]: Each stack of [Link#1203: Mirage Dream] grants 0.75% Defense nullification (both Armor and Resistance). (raw effects=`[[3, 3002640, 1]]`, buffPars=`[[0]]`)
- **`[1305] Rapid Assault Stacks`**: Buff[3002650]: Each stack of [Link#1203: Mirage Dream] grants 0.5% Attack SPD. (raw effects=`[[3, 3002650, 1]]`, buffPars=`[[0]]`)
- **`[1306] Decimate`**: Buff[3002660]: Against targets with current HP ≤30%, Illusion-Breaking DMG +15%. (raw effects=`[[3, 3002660, 1]]`, buffPars=`[[0]]`)
- **`[1307] Beauty of Refinement`**: Buff[3002460]: Refined ATK and Refined Armor +10%. (raw effects=`[[3, 3002460, 1]]`, buffPars=`[[0]]`)
- **`[1308] Immortal Stance`**: Buff[3002670]: When [Link#1203: Mirage Dream] reaches max stacks, grants 1% Life Steal and [Link#1102: Super Armor]. (raw effects=`[[3, 3002670, 1]]`, buffPars=`[[0]]`)
- **`[1309] Chrono Elixir`**: Buff[3002080]: Food and Potion duration +30%. (raw effects=`[[3, 3002080, 1]]`, buffPars=`[[0]]`)
- **`[1310] Grace`**: Buff[3002680]: When [Link#1203: Mirage Dream] reaches max stacks, boosts the highest stat among the 4 following stats (Crit, Haste, Luck, and Mastery) by 5%. (raw effects=`[[3, 3002680, 1]]`, buffPars=`[[0]]`)
- **`[1401] Dreamforce`**: Buff[3002810]: In combat, gain Vestige every 2s. At 5 stacks, [Link#1204: Dreamforce] is immediately activated for 10s. [Link#1204: Dreamforce] prevents gaining Vestige while active. (raw effects=`[[3, 3002810, 1]]`, buffPars=`[[0]]`)
- **`[1402] Dream Massacre`**: Buff[3002820]: Defeating an enemy grants 2 Vestige. (raw effects=`[[3, 3002820, 1]]`, buffPars=`[[0]]`)
- **`[1403] Boundary`**: Buff[3002830]: Standing still reduces Vestige interval by 1s. (raw effects=`[[3, 3002830, 1]]`, buffPars=`[[0]]`)
- **`[1404] Unbreaking Might`**: Buff[3002840]: While [Link#1204: Dreamforce] is active, gains [Link#1102: Super Armor]. (raw effects=`[[3, 3002840, 1]]`, buffPars=`[[0]]`)
- **`[1405] Godspeed`**: Buff[3002850]: While [Link#1204: Dreamforce] is active, Max HP increase by 15%. (raw effects=`[[3, 3002850, 1]]`, buffPars=`[[0]]`)
- **`[1406] Conserve`**: Buff[3002860]: [Link#1204: Dreamforce] duration +5s. (raw effects=`[[3, 3002860, 1]]`, buffPars=`[[0]]`)
- **`[1407] Beauty of Refinement`**: Buff[3002460]: Refined ATK and Refined Armor +10%. (raw effects=`[[3, 3002460, 1]]`, buffPars=`[[0]]`)
- **`[1408] Chrono Elixir`**: Buff[3002080]: Food and Potion duration +30%. (raw effects=`[[3, 3002080, 1]]`, buffPars=`[[0]]`)
- **`[1409] Blink Breath`**: Buff[3002090]: Increases Movement Speed by 10%, and restores 35 Stamina per second while in combat. (raw effects=`[[3, 3002090, 1]]`, buffPars=`[[0]]`)
- **`[1410] Amplify - Rare`**: Buff[3002870]: While [Link#1204: Dreamforce] is active, boosts the highest stat among the 4 following stats (Crit, Haste, Luck, and Mastery) by 3%. (raw effects=`[[3, 3002870, 1]]`, buffPars=`[[0]]`)
- **`[1501] Oblivion Dream`**: Buff[3003010]: Applies Oblivion Dream, inflicting [Link#1205: Oblivion] on enemies within 5m. (raw effects=`[[3, 3003010, 1]]`, buffPars=`[[0]]`)
- **`[1502] Bloodbound Surge`**: Buff[3003020]: When your HP falls below 50%, triggers [Link#1206: Annihilation Strike] (up to once every 15s). (raw effects=`[[3, 3003020, 1]]`, buffPars=`[[0]]`)
- **`[1503] Dream Obsession`**: Buff[3003070]: Oblivion Dream grants allies within range 5% Illusion-Breaking DMG Reduction. If there are 3 or more enemies within range, Illusion-Breaking DMG Reduction additionally increases by 3%. (raw effects=`[[3, 3003070, 1]]`, buffPars=`[[0]]`)
- **`[1504] Chrono Elixir`**: Buff[3002080]: Food and Potion duration +30%. (raw effects=`[[3, 3002080, 1]]`, buffPars=`[[0]]`)
- **`[1505] Limit Extension`**: Buff[3003040]: Oblivion Dream range increases to 10m. (raw effects=`[[3, 3003040, 1]]`, buffPars=`[[0]]`)
- **`[1506] Harmony Grace`**: Buff[3003050]: Oblivion Dream erupts upon combat entering, increasing the main stats of allies within range by 2% for 8s. It erupts again every 15s. (raw effects=`[[3, 3003050, 1]]`, buffPars=`[[0]]`)
- **`[1507] tuning`**: Buff[3003060]: Against enemies or allies within Oblivion Dream, gains 3% All-Element Bonus. (raw effects=`[[3, 3003060, 1]]`, buffPars=`[[0]]`)
- **`[1508] Illusion Obsession`**: Buff[3003030]: Taking lethal DMG triggers [Link#1207: Near Death] for 1s, up to once every 45s. (raw effects=`[[3, 3003030, 1]]`, buffPars=`[[0]]`)
- **`[1509] Beauty of Refinement`**: Buff[3002460]: Refined ATK and Refined Armor +10%. (raw effects=`[[3, 3002460, 1]]`, buffPars=`[[0]]`)
- **`[1510] Feint Strike`**: Buff[3003080]: Deals 6% more Illusion-Breaking DMG to targets affected by Oblivion Dream. (raw effects=`[[3, 3003080, 1]]`, buffPars=`[[0]]`)
- **`[1601] Shattered Illusion`**: Buff[3003210]: Every 5s, the next damage you deal will trigger [Link#1208: Shattered Illusion]. Each 1% Mastery grants it 0.65% Element Bonus. (raw effects=`[[3, 3003210, 1]]`, buffPars=`[[0]]`)
- **`[1602] Illusory Countershock`**: Buff[3003220]: When hit, you have a fixed 30% chance to trigger [Link#1208: Shattered Illusion] (up to once every 3s). (raw effects=`[[3, 3003220, 1]]`, buffPars=`[[0]]`)
- **`[1603] Judgment - Sharp`**: Buff[3003230]: [Link#1208: Shattered Illusion] always triggers Crit. (raw effects=`[[3, 3003230, 1]]`, buffPars=`[[0]]`)
- **`[1604] Judgment - Break`**: Buff[3003240]: [Link#1208: Shattered Illusion] Illusion-Breaking DMG increases by 20% for each 1 additional enemy hit, up to a maximum of 80%. (raw effects=`[[3, 3003240, 1]]`, buffPars=`[[0]]`)
- **`[1605] Stasis Recovery`**: Buff[3003250]: Restores 2% Max HP every 3s. While standing still, the amount is doubled. (raw effects=`[[3, 3003250, 1]]`, buffPars=`[[0]]`)
- **`[1606] Judgment - Heal`**: Buff[3003260]: When [Link#1208: Shattered Illusion] deals damage, restores 2% Max HP (only triggers once when hitting multiple targets). (raw effects=`[[3, 3003260, 1]]`, buffPars=`[[0]]`)
- **`[1607] Chrono Elixir`**: Buff[3002080]: Food and Potion duration +30%. (raw effects=`[[3, 3002080, 1]]`, buffPars=`[[0]]`)
- **`[1608] Surge`**: Buff[3003270]: When hit, reduces [Link#1208: Shattered Illusion] CD by 0.5s (up to once per second). (raw effects=`[[3, 3003270, 1]]`, buffPars=`[[0]]`)
- **`[1609] Resilience`**: Buff[3003280]: Armor +15%. (raw effects=`[[3, 3003280, 1]]`, buffPars=`[[0]]`)
- **`[1610] Uplift`**: Buff[3003290]: When current HP is no less than 80%, every time [Link#1208: Shattered Illusion] is triggered or cast, main stats increase by 3% for 10s, stacking up to 5 times. Loses this effect when HP drops below 40%. (raw effects=`[[3, 3003290, 1]]`, buffPars=`[[0]]`)
- **`[1701] Endless Mind`**: Buff[3003410]: When dealing damage or providing healing, gains [Link#1209: Endless Mind] for 10s (after activation, you no longer benefit from teammates' [Link#1209: Endless Mind]). (raw effects=`[[3, 3003410, 1]]`, buffPars=`[[0]]`)
- **`[1702] Aegis of the Soul`**: Buff[3003420]: Each stack of [Link#1209: Endless Mind] grants 1% main stats. (raw effects=`[[3, 3003420, 1]]`, buffPars=`[[0]]`)
- **`[1703] Safeguard`**: Buff[3003430]: Targets affected by [Link#1209: Endless Mind] gain a Shield equal to 10% Max HP when hit (up to once every 30s). (raw effects=`[[3, 3003430, 1]]`, buffPars=`[[0]]`)
- **`[1704] Swiftflow`**: Buff[3003440]: Each stack of [Link#1209: Endless Mind] grants your Expertise Skills a 2.5% CD Boost. (raw effects=`[[3, 3003440, 1]]`, buffPars=`[[0]]`)
- **`[1705] Resurge`**: Buff[3003450]: Grants your Ultimate Skill a 15% CD Boost. (raw effects=`[[3, 3003450, 1]]`, buffPars=`[[0]]`)
- **`[1706] Still-Continuum`**: Buff[3003460]: Increases the max stack count of [Link#1209: Endless Mind] by 1. While standing still, [Link#1209: Endless Mind] duration does not decrease. (raw effects=`[[3, 3003460, 1]]`, buffPars=`[[0]]`)
- **`[1707] Split Brilliance`**: Buff[3003470]: [Link#1209: Endless Mind] now affects up to 5 teammates, but max stack count decreases by 1. (raw effects=`[[3, 3003470, 1]]`, buffPars=`[[0]]`)
- **`[1708] Chrono Elixir`**: Buff[3002080]: Food and Potion duration +30%. (raw effects=`[[3, 3002080, 1]]`, buffPars=`[[0]]`)
- **`[1709] Blink Breath`**: Buff[3002090]: Increases Movement Speed by 10%, and restores 35 Stamina per second while in combat. (raw effects=`[[3, 3002090, 1]]`, buffPars=`[[0]]`)
- **`[1710] Finale Chant`**: Buff[3003480]: After casting the Ultimate, immediately gains 1 stack of [Link#1209: Endless Mind], and for the next 10s, all stat bonuses from [Link#1209: Endless Mind] are doubled. (raw effects=`[[3, 3003480, 1]]`, buffPars=`[[0]]`)
- **`[5001] Overload Crit`**: Buff[3004410]: Start combat with the Epic "Crit" entry — Overload Crit: Crit +30%. For any permanent Crit above 50%, every 2% is converted to 1% Crit DMG (up to 50%). (raw effects=`[[3, 3004410, 1]]`, buffPars=`[[0]]`)
- **`[5002] Crit Craving`**: Buff[3004420]: Increases the chance of obtaining Crit entries (raw effects=`[[3, 3004420, 1]]`, buffPars=`[[0]]`)
- **`[5003] Crit Legacy`**: Buff[3004430]: Start combat with an additional Rare "Crit" entry. (raw effects=`[[3, 3004430, 1]]`, buffPars=`[[0]]`)
- **`[5004] Crit Fate`**: Buff[3004440]: The first Crit entry to drop is guaranteed to be of epic quality or higher (raw effects=`[[3, 3004440, 1]]`, buffPars=`[[0]]`)
- **`[5005] Rare Lucky Star`**: Buff[3004450]: Increases the chance to obtain entries of rare quality or higher (raw effects=`[[3, 3004450, 1]]`, buffPars=`[[0]]`)
- **`[5006] Epic Boost`**: Buff[3004460]: Doubles the probability of obtaining epic entries (raw effects=`[[3, 3004460, 1]]`, buffPars=`[[0]]`)
- **`[5007] Crit Craving`**: Buff[3004420]: Increases the chance of obtaining Crit entries (raw effects=`[[3, 3004420, 1]]`, buffPars=`[[0]]`)
- **`[5008] Crit Craving`**: Buff[3004420]: Increases the chance of obtaining Crit entries (raw effects=`[[3, 3004420, 1]]`, buffPars=`[[0]]`)
- **`[5009] Rare Lucky Star`**: Buff[3004450]: Increases the chance to obtain entries of rare quality or higher (raw effects=`[[3, 3004450, 1]]`, buffPars=`[[0]]`)
- **`[5101] Torrent of Fate`**: Buff[3003810]: Start combat with the Epic "Luck" entry — Torrent of Fate: Grants the Luck effect, dealing AoE DMG equal to 200% ATK at the target location (CD: 0.5s). For each "Luck" entry owned, this damage's final DMG +50%. (raw effects=`[[3, 3003810, 1]]`, buffPars=`[[0]]`)
- **`[5102] Luck's Favor`**: Buff[3003820]: Increases the chance of obtaining Luck entries (raw effects=`[[3, 3003820, 1]]`, buffPars=`[[0]]`)
- **`[5103] The Chosen One`**: Buff[3003830]: Start combat with an additional Rare "Luck" entry. (raw effects=`[[3, 3003830, 1]]`, buffPars=`[[0]]`)
- **`[5104] Beginner's Fortune`**: Buff[3003840]: The first Luck entry to drop is guaranteed to be of epic quality or higher (raw effects=`[[3, 3003840, 1]]`, buffPars=`[[0]]`)
- **`[5105] Rare Lucky Star`**: Buff[3004450]: Increases the chance to obtain entries of rare quality or higher (raw effects=`[[3, 3004450, 1]]`, buffPars=`[[0]]`)
- **`[5106] Epic Boost`**: Buff[3004460]: Doubles the probability of obtaining epic entries (raw effects=`[[3, 3004460, 1]]`, buffPars=`[[0]]`)
- **`[5107] Luck's Favor`**: Buff[3003820]: Increases the chance of obtaining Luck entries (raw effects=`[[3, 3003820, 1]]`, buffPars=`[[0]]`)
- **`[5108] Luck's Favor`**: Buff[3003820]: Increases the chance of obtaining Luck entries (raw effects=`[[3, 3003820, 1]]`, buffPars=`[[0]]`)
- **`[5109] Rare Lucky Star`**: Buff[3004450]: Increases the chance to obtain entries of rare quality or higher (raw effects=`[[3, 3004450, 1]]`, buffPars=`[[0]]`)
- **`[5201] Imagine Acceleration`**: Buff[3004010]: Start combat with the Epic "Imagine" entry — Imagine Acceleration: Battle Imagine CD −80%. (raw effects=`[[3, 3004010, 1]]`, buffPars=`[[0]]`)
- **`[5202] Imagine Resonance`**: Buff[3004020]: Increases the chance of obtaining Imagine entries (raw effects=`[[3, 3004020, 1]]`, buffPars=`[[0]]`)
- **`[5203] Nascent Mindscape`**: Buff[3004030]: Start combat with an additional Rare "Imagine" entry. (raw effects=`[[3, 3004030, 1]]`, buffPars=`[[0]]`)
- **`[5204] Dreamscape Emergence`**: Buff[3004040]: The first Imagine entry to drop is guaranteed to be of epic quality or higher (raw effects=`[[3, 3004040, 1]]`, buffPars=`[[0]]`)
- **`[5205] Rare Lucky Star`**: Buff[3004450]: Increases the chance to obtain entries of rare quality or higher (raw effects=`[[3, 3004450, 1]]`, buffPars=`[[0]]`)
- **`[5206] Epic Boost`**: Buff[3004460]: Doubles the probability of obtaining epic entries (raw effects=`[[3, 3004460, 1]]`, buffPars=`[[0]]`)
- **`[5207] Imagine Resonance`**: Buff[3004020]: Increases the chance of obtaining Imagine entries (raw effects=`[[3, 3004020, 1]]`, buffPars=`[[0]]`)
- **`[5208] Imagine Resonance`**: Buff[3004020]: Increases the chance of obtaining Imagine entries (raw effects=`[[3, 3004020, 1]]`, buffPars=`[[0]]`)
- **`[5209] Rare Lucky Star`**: Buff[3004450]: Increases the chance to obtain entries of rare quality or higher (raw effects=`[[3, 3004450, 1]]`, buffPars=`[[0]]`)
- **`[5301] Coordinated Strike`**: Buff[3004210]: Start combat with the Epic "Team" entry — Sync Strike: When your Class Skills deal damage, restores 1% HP to yourself and nearby allies and grants a 10% ATK bonus for 3s (CD: 0.3s). (raw effects=`[[3, 3004210, 1]]`, buffPars=`[[0]]`)
- **`[5302] Team Cohesion`**: Buff[3004220]: Increases the chance of obtaining Team entries (raw effects=`[[3, 3004220, 1]]`, buffPars=`[[0]]`)
- **`[5303] Natural Leader`**: Buff[3004230]: Start combat with one additional Rare "Team" entry. (raw effects=`[[3, 3004230, 1]]`, buffPars=`[[0]]`)
- **`[5304] Precision Support`**: Buff[3004240]: The first Team entry to drop is guaranteed to be of epic quality or higher (raw effects=`[[3, 3004240, 1]]`, buffPars=`[[0]]`)
- **`[5305] Rare Lucky Star`**: Buff[3004450]: Increases the chance to obtain entries of rare quality or higher (raw effects=`[[3, 3004450, 1]]`, buffPars=`[[0]]`)
- **`[5306] Epic Boost`**: Buff[3004460]: Doubles the probability of obtaining epic entries (raw effects=`[[3, 3004460, 1]]`, buffPars=`[[0]]`)
- **`[5307] Team Cohesion`**: Buff[3004220]: Increases the chance of obtaining Team entries (raw effects=`[[3, 3004220, 1]]`, buffPars=`[[0]]`)
- **`[5308] Team Cohesion`**: Buff[3004220]: Increases the chance of obtaining Team entries (raw effects=`[[3, 3004220, 1]]`, buffPars=`[[0]]`)
- **`[5309] Rare Lucky Star`**: Buff[3004450]: Increases the chance to obtain entries of rare quality or higher (raw effects=`[[3, 3004450, 1]]`, buffPars=`[[0]]`)
- **`[5401] High-Energy Pulse`**: Buff[3004610]: Start combat with the Epic "Pulse" entry. High-Energy Pulse Beam: While in combat, deals AoE damage in a straight line directly in front every 3s, and unlocks [Pulse] entry drops. (raw effects=`[[3, 3004610, 1]]`, buffPars=`[[0]]`)
- **`[5402] Sync Protocol`**: Buff[3004620]: Increases the chance of obtaining Pulse entries. (raw effects=`[[3, 3004620, 1]]`, buffPars=`[[0]]`)
- **`[5403] Pulse Channel`**: Buff[3004630]: Start combat with an additional Rare "Pulse" entry. (raw effects=`[[3, 3004630, 1]]`, buffPars=`[[0]]`)
- **`[5404] Pulse Overdrive`**: Buff[3004640]: The first Pulse entry to drop is guaranteed to be of Epic quality or higher. (raw effects=`[[3, 3004640, 1]]`, buffPars=`[[0]]`)
- **`[5405] Rare Lucky Star`**: Buff[3004450]: Increases the chance to obtain entries of rare quality or higher (raw effects=`[[3, 3004450, 1]]`, buffPars=`[[0]]`)
- **`[5406] Epic Boost`**: Buff[3004460]: Doubles the probability of obtaining epic entries (raw effects=`[[3, 3004460, 1]]`, buffPars=`[[0]]`)
- **`[5407] Sync Protocol`**: Buff[3004620]: Increases the chance of obtaining Pulse entries. (raw effects=`[[3, 3004620, 1]]`, buffPars=`[[0]]`)
- **`[5408] Sync Protocol`**: Buff[3004620]: Increases the chance of obtaining Pulse entries. (raw effects=`[[3, 3004620, 1]]`, buffPars=`[[0]]`)
- **`[5409] Rare Lucky Star`**: Buff[3004450]: Increases the chance to obtain entries of rare quality or higher (raw effects=`[[3, 3004450, 1]]`, buffPars=`[[0]]`)
- **`[5501] Mastery Boost`**: Buff[3004810]: Start combat with the Epic "Mastery" entry. Mastery Boost: Each 1% of Mastery increases PHY Boost and MAG Boost by 0.4%. (raw effects=`[[3, 3004810, 1]]`, buffPars=`[[0]]`)
- **`[5502] Pursuit of Truth`**: Buff[3004820]: Increases the chance of obtaining Mastery entries. (raw effects=`[[3, 3004820, 1]]`, buffPars=`[[0]]`)
- **`[5503] Universal Comprehension`**: Buff[3004830]: Start combat with an additional Rare "Mastery" entry. (raw effects=`[[3, 3004830, 1]]`, buffPars=`[[0]]`)
- **`[5504] Ultimate Research`**: Buff[3004840]: The first Mastery entry to drop is guaranteed to be of Epic quality or higher. (raw effects=`[[3, 3004840, 1]]`, buffPars=`[[0]]`)
- **`[5505] Rare Lucky Star`**: Buff[3004450]: Increases the chance to obtain entries of rare quality or higher (raw effects=`[[3, 3004450, 1]]`, buffPars=`[[0]]`)
- **`[5506] Epic Boost`**: Buff[3004460]: Doubles the probability of obtaining epic entries (raw effects=`[[3, 3004460, 1]]`, buffPars=`[[0]]`)
- **`[5507] Pursuit of Truth`**: Buff[3004820]: Increases the chance of obtaining Mastery entries. (raw effects=`[[3, 3004820, 1]]`, buffPars=`[[0]]`)
- **`[5508] Pursuit of Truth`**: Buff[3004820]: Increases the chance of obtaining Mastery entries. (raw effects=`[[3, 3004820, 1]]`, buffPars=`[[0]]`)
- **`[5509] Rare Lucky Star`**: Buff[3004450]: Increases the chance to obtain entries of rare quality or higher (raw effects=`[[3, 3004450, 1]]`, buffPars=`[[0]]`)

### 4.2 เอฟเฟกต์ขั้นบันไดจาก Bond Points (`advancedEffects`) ครบทั้ง 8 สาย:
- **`[101] General 1`** (Bond Data): `[[3, 3003610, 1]]`
- **`[102] General 2`** (Bond Data): `[[3, 3003620, 1]]`
- **`[103] General 3`** (Bond Data): `[[3, 3003630, 1]]`
- **`[104] General 4`** (Bond Data): `[[3, 3003640, 1]]`
- **`[105] General 5`** (Bond Data): `[[3, 3003650, 1]]`
- **`[106] Fantasia Impact - Exclusive`** (Bond Data): `[[3, 3003660, 1]]`
- **`[107] General 1`** (Bond Data): `[[3, 3003610, 1]]`
- **`[108] General 2`** (Bond Data): `[[3, 3003620, 1]]`
- **`[109] General 3`** (Bond Data): `[[3, 3003630, 1]]`
- **`[110] General 4`** (Bond Data): `[[3, 3003640, 1]]`
- **`[111] General 5`** (Bond Data): `[[3, 3003650, 1]]`
- **`[112] Phantom Execution - Exclusive`** (Bond Data): `[[3, 3003670, 1]]`
- **`[113] General 1`** (Bond Data): `[[3, 3003610, 1]]`
- **`[114] General 2`** (Bond Data): `[[3, 3003620, 1]]`
- **`[115] General 3`** (Bond Data): `[[3, 3003630, 1]]`
- **`[116] General 4`** (Bond Data): `[[3, 3003640, 1]]`
- **`[117] General 5`** (Bond Data): `[[3, 3003650, 1]]`
- **`[118] Phantom Arrow - Exclusive`** (Bond Data): `[[3, 3003680, 1]]`
- **`[119] General 1`** (Bond Data): `[[3, 3003610, 1]]`
- **`[120] General 2`** (Bond Data): `[[3, 3003620, 1]]`
- **`[121] General 3`** (Bond Data): `[[3, 3003630, 1]]`
- **`[122] General 4`** (Bond Data): `[[3, 3003640, 1]]`
- **`[123] General 5`** (Bond Data): `[[3, 3003650, 1]]`
- **`[124] Mirage Dream - Exclusive`** (Bond Data): `[[3, 3003690, 1]]`
- **`[125] General 1`** (Bond Data): `[[3, 3003610, 1]]`
- **`[126] General 2`** (Bond Data): `[[3, 3003620, 1]]`
- **`[127] General 3`** (Bond Data): `[[3, 3003630, 1]]`
- **`[128] General 4`** (Bond Data): `[[3, 3003640, 1]]`
- **`[129] General 5`** (Bond Data): `[[3, 3003650, 1]]`
- **`[130] Dreamforce - Exclusive`** (Bond Data): `[[3, 3003700, 1]]`
- **`[131] General 1`** (Bond Data): `[[3, 3003610, 1]]`
- **`[132] General 2`** (Bond Data): `[[3, 3003620, 1]]`
- **`[133] General 3`** (Bond Data): `[[3, 3003630, 1]]`
- **`[134] General 4`** (Bond Data): `[[3, 3003640, 1]]`
- **`[135] General 5`** (Bond Data): `[[3, 3003650, 1]]`
- **`[136] Oblivion Dream - Exclusive`** (Bond Data): `[[3, 3003710, 1]]`
- **`[137] General 1`** (Bond Data): `[[3, 3003610, 1]]`
- **`[138] General 2`** (Bond Data): `[[3, 3003620, 1]]`
- **`[139] General 3`** (Bond Data): `[[3, 3003630, 1]]`
- **`[140] General 4`** (Bond Data): `[[3, 3003640, 1]]`
- **`[141] General 5`** (Bond Data): `[[3, 3003650, 1]]`
- **`[142] Shattered Illusion - Exclusive`** (Bond Data): `[[3, 3003720, 1]]`
- **`[143] General 1`** (Bond Data): `[[3, 3003610, 1]]`
- **`[144] General 2`** (Bond Data): `[[3, 3003620, 1]]`
- **`[145] General 3`** (Bond Data): `[[3, 3003630, 1]]`
- **`[146] General 4`** (Bond Data): `[[3, 3003640, 1]]`
- **`[147] General 5`** (Bond Data): `[[3, 3003650, 1]]`
- **`[148] Endless Mind - Exclusive`** (Bond Data): `[[3, 3003730, 1]]`

### 4.3 ตารางค่าคงที่และการแปลงสเตตัสของ Psychoscope, Factors, Imagines และ Suits จาก `attrMaps.ts`:
```typescript
import type { ElementId, StatId } from '../types';

// ZTableのAttrId/BuffId → アプリ内 StatId・効果のマッピング定義。
// calculateRawStats.ts / calculateAbilityScore.ts から参照される。

// アビリティツリー(talent-tree.json)の effects[n][0] (EffectType)。
export const TALENT_EFFECT_TYPE_FLAT_STAT = 1; // 平坦ステータス加算
export const TALENT_EFFECT_TYPE_TYPE1_FINAL_PCT = 3; // 型依存の最終%ボーナス(type1使用時のみ)
export const TALENT_EFFECT_TYPE_CONVERSION_RATE = 4; // メインステータス→他ステータスへの変換率ボーナス
export const TALENT_EFFECT_TYPE_SKILL_REPLACEMENT = 6; // スキル置き換え(fromSkillId→toSkillId)

// モジュールエフェクト(modules.json)の effects[n][0] (EffectType)。
export const MOD_EFFECT_TYPE_STAT = 1; // 通常のステータス加算
export const MOD_EFFECT_TYPE_ADAPTIVE = 5; // 適応ステータス・攻撃力(モジュール専用)

// 潜在因子/絆レベル(phantom-factors.json, season-talents.json)の effects[n][0] (EffectType)。
export const PHANTOM_EFFECT_TYPE_STAT = 1; // 平坦ステータス加算・%乗算値
export const PHANTOM_EFFECT_TYPE_POLARITY = 3; // 極性バフ/絆レベルのBuffId参照(boost/penalty)

// 属性(「全」を除く8属性)ごとの属性攻撃力/属性強度 AttrId → StatId マッピング。
// クラスアビリティの小ノード(weaponGroup:0の共通ノード、例: talentId 20〜27)等で使われる。
export const ELEMENT_ATK_STAT: Record<ElementId, StatId> = {
  fire: 'fireAtk',
  ice: 'iceAtk',
  forest: 'forestAtk',
  thunder: 'thunderAtk',
  wind: 'windAtk',
  rock: 'rockAtk',
  light: 'lightAtk',
  dark: 'darkAtk',
};
// 属性別の属性強度は現状ゲームデータ上に個別AttrIdの使用例がなく、シロップ/脊椎試薬
// (料理バフ)による加算のみが実際のソース。属性ボーナス%算出時にallAttrStrと合算する。
export const ELEMENT_ATTR_STR_STAT: Record<ElementId, StatId> = {
  fire: 'fireAttrStr',
  ice: 'iceAttrStr',
  forest: 'forestAttrStr',
  thunder: 'thunderAttrStr',
  wind: 'windAttrStr',
  rock: 'rockAttrStr',
  light: 'lightAttrStr',
  dark: 'darkAttrStr',
};
// 属性強度の収益逓減カーブを経由しない、属性ボーナス%への直接加算(蒼海武器の4枠選択式
// レアステータス・一部装備の固定進化ステータスで確認、attrId 13112〜13172)。
// 単位は他の"実数値/100=%"系(EVO_PCT_ATTR_TO_STAT等)と同じ。闇属性のみ対応するAttrIdが
// ゲームデータ上に存在しないため未対応(Partialなのはこのため)。
export const ELEMENT_BONUS_STAT: Partial<Record<ElementId, StatId>> = {
  fire: 'fireBonus',
  ice: 'iceBonus',
  forest: 'forestBonus',
  thunder: 'thunderBonus',
  wind: 'windBonus',
  rock: 'rockBonus',
  light: 'lightBonus',
};

// アビリティ type=1 効果 (平坦加算) の AttrId → StatId マッピング
export const TALENT_ATTR_TO_STAT: Partial<Record<number, StatId>> = {
  11012: 'strength',
  11022: 'intellect',
  11032: 'agility',
  11042: 'endurance',
  11112: 'crit',
  11122: 'haste',
  11132: 'luck',
  11142: 'mastery',
  11152: 'versatility',
  11332: 'atk',
  11342: 'matk',
  11352: 'physicalDef',
  // 回復力(共通の小ノード、例: talentId 47「回復効果」)。
  11792: 'healingPower',
  // 対ボスダメージ軽減(ヘヴィガーディアンR2アビリティ「精鋭の牙」talentId 924)。
  12642: 'bossDamageReduction',
  // 属性攻撃力(個別属性): 全クラス共通の小ノード(例: talentId 20〜27)で使われる。
  11512: ELEMENT_ATK_STAT.fire,
  11522: ELEMENT_ATK_STAT.ice,
  11532: ELEMENT_ATK_STAT.forest,
  11542: ELEMENT_ATK_STAT.thunder,
  11552: ELEMENT_ATK_STAT.wind,
  11562: ELEMENT_ATK_STAT.rock,
  11572: ELEMENT_ATK_STAT.light,
  11582: ELEMENT_ATK_STAT.dark,
};

// アビリティ type=3 効果(BuffId参照)のうち、型(ProfessionTypeKey)によって内容が変わるもの。
// ZTable側に型別のパラメータテーブルがないため、説明文(game-data.json)から手動で値を確定している。
export interface TalentType1OnlyFinalPct {
  stat: StatId;
  value: number; // 単位: 1/10000 (2000 → 20%)
}

// ビートパフォーマーR1アビリティ「変奏」: 響奏型では効果内容が変わる(通常攻撃の変更)ため、
// 最大HP+20%は狂音型(type1)使用時のみ適用する。
export const TALENT_TYPE1_ONLY_FINAL_PCT: Partial<Record<number, TalentType1OnlyFinalPct>> = {
  2207340: { stat: 'maxHp', value: 2000 },
};

// アビリティ type=1 効果のうち、attrIdが「攻撃速度」の%finalバリアント(単位1/10000)のもの。
// atkSpeedPercentはStatId(rawStats)ではなくDerivedStats側の値のため、TALENT_ATTR_TO_STAT/
// IMAGINE_PCT_FINALには乗らず、deriveStats()への直接加算として個別に扱う
// (例: ディバインアーチャー「迅射」talentId 1135、他に talentId 41/42 も同じattrIdを使う)。
//
// 同じattrIdはtype=4(TALENT_EFFECT_TYPE_CONVERSION_RATE)効果でも使われるが、そちらは
// 「ファスト%→攻撃速度%の変換率そのものへのボーナス」という別の意味(例: ストームブレイド/
// ツインストライカー/ゲイルランサー「迅速」talentId 135/301/435「ファスト1%につき攻撃速度+1%」)。
// TALENT_ATTR_TO_STATにはrawStats側のStatIdしか載せられないため、calculateRawStats.tsの
// type=4分岐でこの定数と直接比較し、atkSpeedPerHastePercentBonusとして個別集計する。
export const TALENT_ATK_SPEED_FINAL_PCT_ATTR_ID = 11722;

// アビリティ type=3 効果(BuffId参照)のうち、「会心/ファスト/幸運/器用さ/万能のうち
// 最終値が最も高い1項目」に最終%加算するもの(HP変動/鼓舞と同じ加算方式・単位。
// LIFE_WAVE_VALUES/INSPIRATION_VALUESと同じ%そのままの数値、350ではなく3.5→+3.5%)。
// 型に関わらず常に適用される。
// フロストメイジR1アビリティ「二段増幅」: 該当5ステータスのうち最終値最大の1項目+3.5%。
export const TALENT_HIGHEST_OF_FINAL_PCT: Partial<Record<number, number>> = {
  2204340: 3.5,
};

// アビリティ type=3 効果(BuffId参照)のうち、幸運%1ptあたりの幸運の一撃ダメージ倍率への
// 変換率ボーナス(deriveStats.tsの基礎係数0.25に加算する。単位はconversionRateBonusと同じ
// 直接比率)。2026-08-09不具合報告(ビートパフォーマー「幸運相乗」)を起点に、他クラスの
// 「幸運寄り」R2アビリティも同型の未対応効果がないか全クラス監査して発見。
// - ビートパフォーマー(狂音型/響奏型共通)R2「幸運相乗」(talentId 1338): 幸運1%につき+0.5%。
//   「ブレイブメロディー発動後は変換効率2倍」は戦闘状態依存の条件付き効果のため対象外。
// - フロストメイジR2「玄氷の共鳴」(talentId 255): 幸運2%につき+1%(=+0.5)。
// - ツインストライカーR2(talentId 330): 幸運1%につき+0.8%。「イラプションで幸運の一撃が
//   発生可能になる」は対象スキル限定の条件付き効果のため対象外(この変換率ボーナス自体は
//   スキル限定の記述がないため常時有効と判断)。
// - ヴァーダントオラクルR2(talentId 553): 幸運1%につき+1.5%。
export const TALENT_LUCKY_HIT_DAMAGE_RATIO_BONUS: Partial<Record<number, number>> = {
  2207390: 0.5,
  2204520: 0.5,
  2208310: 0.8,
  2202570: 1.5,
};

// アビリティ type=3 効果(BuffId参照)のうち、型に関わらず常に適用される、特定の1ステータスへの
// 平坦加算。会心回復等、収益逓減カーブを経由しないraw値(EVO_PCT_ATTR_TO_STAT等と同じ単位:
// 100 = 1%)を対象とする効果に使う。
// ビートパフォーマー響奏型R2アビリティ「会心回復」: 会心回復+25%。
// ストームブレイドR2アビリティ「爆裂」: 会心ダメージ+10%。
// ツインストライカーR2アビリティ「炎舞破斬」: 会心ダメージ+8%。
// フロストメイジR2(talentId 255)・ツインストライカーR2(talentId 330)・
// ヴァーダントオラクルR2(talentId 553): 幸運の一撃ダメージ倍率への平坦加算(それぞれ+15%/
// +5%/+5%)。TALENT_LUCKY_HIT_DAMAGE_RATIO_BONUSの変換率ボーナスと同じアビリティの一部
// (2026-08-09不具合報告での全クラス監査で発見)。
// ディバインアーチャーR2(talentId 470)・ヴァーダントオラクルR2(talentId 510):
// 「幸運の一撃が与える最終ダメージ+50%」。いずれも条件付き/スタック消費型の効果(「鋭利消費で
// 勇心+3pt」「共生の印」等)に併記される形で無条件の平坦加算として存在するため、その部分のみ
// 対応する。
export const TALENT_FLAT_PCT_TO_STAT: Partial<Record<number, { stat: StatId; value: number }>> = {
  2207210: { stat: 'critRecoveryBonus', value: 2500 },
  2200540: { stat: 'critDamageBonus', value: 1000 },
  2208520: { stat: 'critDamageBonus', value: 800 },
  2204520: { stat: 'luckyHitDamageBonus', value: 1500 },
  2208310: { stat: 'luckyHitDamageBonus', value: 500 },
  2202570: { stat: 'luckyHitDamageBonus', value: 500 },
  2205680: { stat: 'luckyHitDamageBonus', value: 5000 },
  2202110: { stat: 'luckyHitDamageBonus', value: 5000 },
};

// アビリティ type=3 効果(BuffId参照)のうち、型に関わらず常に適用される、rawStats側の実数値
// ステータスへの平坦加算(TALENT_ATTR_TO_STATのtype=1加算と同じ単位・同じaddStat経路。
// 会心/ファスト等は収益逓減カーブの対象になる)。TALENT_FLAT_PCT_TO_STATとは異なり、
// 対象は「%そのものの最終値」ではなく「カーブ適用前の実数値レーティング」である点に注意。
// フロストメイジR2アビリティ「高速詠唱」: ファスト+2500(パーマフロスト中の詠唱速度+15%は
// 状態依存の条件付き効果のため対象外)。
// ヘヴィガーディアンR2アビリティ「剛岩精通」: 器用さ+6250(勇壮砦壁の有効中の器用さ+8%は
// 状態依存の条件付き効果のため対象外)。
export const TALENT_RAW_FLAT_TO_STAT: Partial<Record<number, { stat: StatId; value: number }>> = {
  2204640: { stat: 'haste', value: 2500 },
  2201720: { stat: 'mastery', value: 6250 },
};

// アビリティ type=3 効果(BuffId参照)のうち、型に関わらず常に適用される、会心/ファスト/幸運/
// 器用さ/万能いずれか1つの最終%表示値への直接加算(finalPctAddendと同じ単位: 100 = 1%。
// TALENT_HIGHEST_OF_FINAL_PCTの「5ステータス中最大の1項目」ではなく、対象ステータスが
// 固定されている点が異なる)。
// ストームブレイドR2アビリティ「烈風」: 器用さ+6%。
// ヘヴィガーディアンR2アビリティ「幸運の剛岩」: 幸運確率+5%(レジスト反撃の会心+50%は
// スキル固有の条件付き効果のため対象外)。
export const TALENT_FINAL_PCT_ADDEND_TO_STAT: Partial<
  Record<number, { stat: StatId; value: number }>
> = {
  2200560: { stat: 'mastery', value: 600 },
  2201710: { stat: 'luck', value: 500 },
};

// アビリティ type=3 効果(BuffId参照)のうち、型に関わらず常に適用される、基礎ステータス
// (筋力/知力/敏捷等)への%乗算ボーナス(IMAGINE_PCT_BASEと同じaddPctBonus経路・同じ単位:
// 1/10000)。TALENT_FINAL_PCT_ADDEND_TO_STATとは異なり、対象は収益逓減カーブを経由しない
// 素の基礎ステータスであるため、%表示値ではなく実数値そのものへの乗算として扱う。
// フロストメイジR2アビリティ「知力強化」: 知力+5%。
export const TALENT_BASE_PCT_TO_STAT: Partial<Record<number, { stat: StatId; value: number }>> = {
  2204680: { stat: 'intellect', value: 500 },
};

export const LEVEL_ATTR_TO_STAT: Partial<Record<number, StatId>> = {
  11012: 'strength',
  11022: 'intellect',
  11032: 'agility',
  11042: 'endurance',
};

// 絆レベル effectType=3 BuffId → ステータス効果マッピング
export type BondBuffStatEffect =
  | { type: 'static'; stat: StatId; value: number }
  | { type: 'highest_of'; stats: StatId[]; value: number }
  // 最終%ボーナスへの直接加算(finalPctAddendと同じ単位: 100 = 1%)
  | { type: 'final_pct'; stat: StatId; value: number }
  // クラスのメインステータス(筋力/知力/敏捷)への平坦加算
  | { type: 'main_stat'; value: number }
  // 現時点のtotal[sourceStat]にratioを乗じてtargetStatへ加算
  | { type: 'ratio_of'; sourceStat: StatId; targetStat: StatId; ratio: number };

// レベル1〜5(unlockFraction 2/5/12/20/25)は全8テンプレート共通の絆報酬(累積加算される)。
// レベル6(unlockFraction 35)のみテンプレートごとに異なる固有報酬(buffId 3003660〜3003730、
// テンプレート1体につき1種類)。値は`src/locales/*/game-data.json`の`attrDescs.{buffId}`
// (ゲーム内説明文、静的テキストでbuffPars非依存)から直接確認済み。
export const BOND_BUFF_STAT_EFFECTS: Partial<Record<number, BondBuffStatEffect[]>> = {
  // Lv1(2pt)/Lv2(5pt)/Lv4(20pt) 共通: 滅妄強度+100。耐久力+750
  3003610: [
    { type: 'static', stat: 'illusionPower', value: 100 },
    { type: 'static', stat: 'endurance', value: 750 },
  ],
  3003620: [
    { type: 'static', stat: 'illusionPower', value: 100 },
    { type: 'static', stat: 'endurance', value: 750 },
  ],
  3003640: [
    { type: 'static', stat: 'illusionPower', value: 100 },
    { type: 'static', stat: 'endurance', value: 750 },
  ],
  // Lv3(12pt): 会心、ファスト、幸運、器用さ、万能のうち最も高い1項目+750。耐久力+750
  3003630: [
    {
      type: 'highest_of',
      stats: ['crit', 'haste', 'luck', 'mastery', 'versatility'],
      value: 750,
    },
    { type: 'static', stat: 'endurance', value: 750 },
  ],
  // Lv5(25pt): 会心、ファスト、幸運、器用さ、万能のうち最も高い1項目+1250。耐久力+750
  3003650: [
    {
      type: 'highest_of',
      stats: ['crit', 'haste', 'luck', 'mastery', 'versatility'],
      value: 1250,
    },
    { type: 'static', stat: 'endurance', value: 750 },
  ],
  // Lv6(35pt)固有報酬。テンプレート1「幸運+1%」
  3003660: [{ type: 'final_pct', stat: 'luck', value: 100 }],
  // テンプレート2「会心+1%」
  3003670: [{ type: 'final_pct', stat: 'crit', value: 100 }],
  // テンプレート3「マスタリースキルの虚妄ダメージ+6%」はスキル固有効果のため対象外
  // (静的ステータスモデルでは表現不可)。
  // テンプレート4「滅妄ダメージ+4%」・テンプレート5「滅妄ダメージ+2%」も対応するStatIdが
  // 存在しないため対象外(illusionPowerは実数値の"滅妄強度"であり、ダメージ%とは別軸)。
  // テンプレート6「寂滅の夢の影響を受けている対象を攻撃すると、会心確率、幸運確率+2%」は
  // 対象の状態異常に依存する条件付き効果のため対象外。
  // テンプレート7「物理防御力75ptにつき、攻撃力+1pt」
  3003720: [{ type: 'ratio_of', sourceStat: 'physicalDef', targetStat: 'atk', ratio: 1 / 75 }],
  // テンプレート8「現在のメインステータス+150」
  3003730: [{ type: 'main_stat', value: 150 }],
};

// 潜在因子 effectType=1 AttrId → StatId マッピング（平坦加算値。末尾が2のIDは加算、4のIDは%乗算のため別扱い）
export const PHANTOM_ATTR_TO_STAT: Partial<Record<number, StatId>> = {
  11012: 'strength',
  11022: 'intellect',
  11032: 'agility',
  11042: 'endurance',
  11322: 'maxHp',
  11352: 'physicalDef',
  11442: 'illusionPower',
  13002: 'allAttrStr',
  13202: 'allAttrResist',
  11802: 'receivedRecovery',
  11812: 'barrierStrength',
};

// 潜在因子 effectType=3 極性バフ (BuffId → boost/penalty stat, pars index)
// pars 単位: 100 = 1% (renderEffectDesc の pAsPercent と同様)
// 効果: boost_stat *= (1 + pars[boostIdx] / 10000), penalty_stat *= (1 - pars[penaltyIdx] / 10000)
export interface PolarityEffect {
  boostStat: StatId;
  boostIdx: number;
  penaltyStat: StatId;
  penaltyIdx: number;
}

export const FACTOR_POLARITY_EFFECTS: Partial<Record<number, PolarityEffect>> = {
  3058050: { boostStat: 'crit', boostIdx: 1, penaltyStat: 'mastery', penaltyIdx: 0 }, // 会心+, 器用さ(mastery)-
  3058060: { boostStat: 'luck', boostIdx: 1, penaltyStat: 'haste', penaltyIdx: 0 }, // 幸運+, ファスト-
  3058070: { boostStat: 'mastery', boostIdx: 1, penaltyStat: 'luck', penaltyIdx: 0 }, // 器用さ(mastery)+, 幸運-
  3058080: { boostStat: 'haste', boostIdx: 1, penaltyStat: 'crit', penaltyIdx: 0 }, // ファスト+, 会心-
};

// 潜在因子 effectType=3(第六感、クラス固有)のうち、FACTOR_POLARITY_EFFECTSのような
// 「対になる2ステータスへのboost/penalty」ではなく、無条件で常時有効な単独ステータスへの
// %ボーナスを持つもの。buffPars内の対象インデックス(paramIndex)のみを対象にする
// (残りのパラメータはスキル固有の副作用のため、他のスキル固有効果と同様にこのアプリの
// 静的ステータスモデルでは対象外)。
// atk/matk/maxHp/physicalDefはメインステータス変換(知力→魔法攻撃力等)を経由する
// "derived"な値のため、raw stat自体への%乗算(addPctBonus)では変換後の分に反映されない
// (2026-09-16不具合報告: ビートパフォーマーX4「魔法攻撃力+6.64%」がG7実測4532→4832なのに
// 4548にしかならなかった。知力由来の魔法攻撃力分に%が反映されていなかったのが原因)。
// IMAGINE_PCT_FINALと同じ「最終値%ボーナス」バケツ(phantomFinalPct)に積むことで、
// mainStat変換後の合計値に一度だけ乗算されるようにする。対象はIMAGINE_PCT_FINALと同じ4種
// (maxHp/atk/matk/physicalDef)に限る。
export interface FactorSingleStatBonus {
  stat: FinalPctStatId;
  paramIndex: number;
}

export const FACTOR_SINGLE_STAT_PCT_BONUS: Partial<Record<number, FactorSingleStatBonus>> = {
  // ビートパフォーマーX4「第六感」: 魔法攻撃力+p2(pars[1]、無条件)。p1(pars[0])は
  // 「ピースフルロンドが変換する回復量-x%」というスキル固有の副作用のため対象外。
  3057040: { stat: 'matk', paramIndex: 1 },
};

// 潜在レベルアップ AttrId → StatId マッピング
export const PHANTOM_LEVEL_ATTR_TO_STAT: Partial<Record<number, StatId>> = {
  11442: 'illusionPower',
  11042: 'endurance',
};

// モジュールエフェクト EffectType=1 AttrId → StatId マッピング
export const MOD_ATTR_TO_STAT: Partial<Record<number, StatId>> = {
  11012: 'strength',
  11022: 'intellect',
  11032: 'agility',
  11042: 'endurance',
  11112: 'crit',
  11122: 'haste',
  11132: 'luck',
  11142: 'mastery',
  11152: 'versatility',
  11322: 'maxHp',
  11332: 'atk',
  11342: 'matk',
  11352: 'physicalDef',
  13002: 'allAttrStr',
  // 会心ダメージ/会心回復(「集中・会心」等): EVO_PCT_ATTR_TO_STATと同じattrId・同じ単位
  // (100=1%)のrawStats項目のため、他のMOD_ATTR_TO_STATエントリと同様addStat()にそのまま乗る。
  12512: 'critDamageBonus',
  12742: 'critRecoveryBonus',
  // 物理軽減/魔法軽減(「物理耐性」「魔法耐性」)。単位は他の%系attrIdと同じ100=1%。
  // 12562はProfileAttrTable(ZTable)側に表示名を持たないattrIdだが、MOD_ATTR_TO_STATに
  // マッピングすることでformatEffectDesc/tStat側の名前(buildPlanner.stats.*)が使われる
  // ため、ZTableの名前欠落を気にせず解決できる(12512/12742と同じ理由)。
  12562: 'physicalReductionBonus',
  12582: 'magicalReductionBonus',
  // 幸運の一撃ダメージ率(「集中・幸運」等): EVO_PCT_ATTR_TO_STATの12532と同じrawStats項目。
  12532: 'luckyHitDamageBonus',
  // 幸運の一撃回復の倍率(「集中・幸運」等)。12722もProfileAttrTableに表示名を持たない
  // attrIdだが、12562/12582と同じ理由でMOD_ATTR_TO_STAT経由なら問題にならない。
  12722: 'luckyHitRecoveryBonus',
  // 物理防御力無視(「筋力強化」等)。
  11392: 'physicalDefIgnoreBonus',
};

// モジュール専用の「適応」効果 (EffectType=5)。クラスのメインステータス/攻撃タイプに
// 応じて実際のステータスへ加算する。値は数値そのもの(%ではない)。
export const MOD_ADAPTIVE_MAIN_STAT_ATTR_ID = 99005; // 適応筋力/知力/敏捷 → profession.mainStat
export const MOD_ADAPTIVE_ATK_ATTR_ID = 99006; // 適応物理/魔法攻撃力 → profession.attackTypeに応じ atk/matk

// モジュール専用: 詠唱速度の%finalバリアント(「集中・詠唱」等)。攻撃速度側の
// TALENT_ATK_SPEED_FINAL_PCT_ATTR_ID(11722)と同じ理由でStatId(rawStats)を持たず
// castSpeedPercentはDerivedStats側の値のため、MOD_ATTR_TO_STATには含めず
// calculateRawStats()内で個別集計し、deriveStats()へcastSpeedFinalPctAddendとして渡す。
export const MOD_CAST_SPEED_FINAL_PCT_ATTR_ID = 11732;

// 精錬効果(RefineTable)のAttrId。atk/matk/physicalDef/magicalDef本体とは別枠(防御減衰の
// 対象外・被ダメージ計算で別途乗算される値)のため、他の attrId→StatId マップとは異なり
// refineXxx専用の個別定数として定義する。
export const REFINE_ATK_ATTR_ID = 11412; // 精錬物攻 → refinePhysAtk
export const REFINE_MATK_ATTR_ID = 11432; // 精錬魔攻 → refineMagAtk
export const REFINE_DEF_ATTR_ID = 11422; // 精錬防御力 → refineDef
export const REFINE_ENDURANCE_ATTR_ID = 11042; // 精錬耐久 → endurance

// EquipAttrLibTable の AttrId → StatId マッピング。
export const EQUIP_ATTR_TO_STAT: Partial<Record<number, StatId>> = {
  11442: 'illusionPower',
  11332: 'atk',
  11342: 'matk',
  11352: 'physicalDef',
  11012: 'strength',
  11022: 'intellect',
  11032: 'agility',
  11042: 'endurance',
};

// 装着効果(エンチャント) AttrId → StatId マッピング。
// 11502(全属性攻撃力)は atk/matk 両方に加算するため、このマップには含めず別途処理。
export const ENCHANT_ATTR_TO_STAT: Partial<Record<number, StatId>> = {
  11012: 'strength',
  11022: 'intellect',
  11032: 'agility',
  11042: 'endurance',
  11112: 'crit',
  11122: 'haste',
  11132: 'luck',
  11142: 'mastery',
  11152: 'versatility',
  // 物理/魔法攻撃力(例: 「荒野カニクモの刻印」matk+38、耳飾り/首飾り/指輪等の装着効果)。
  11332: 'atk',
  11342: 'matk',
};

// 進化ステータス固定効果 AttrId → StatId (fixedEvolutionStats の isPercent=false エントリ用)
export const EVO_ATTR_TO_STAT: Partial<Record<number, StatId>> = {
  11112: 'crit',
  11122: 'haste',
  11132: 'luck',
  11142: 'mastery',
  11152: 'versatility',
};

// 実数値/100=%の規約(EquipAttrLibTableのisPercent=true系。会心ダメージ・幸運の一撃ダメージ等)
// を持つステータス。素の実数値ではなく%表記で表示すべき箇所(StatsDetailDialogの追加バフ列、
// PhantomEffectSummaryDialogの合計テーブル等)で共通利用する(2026-08-09不具合報告: +400のような
// 素の実数値がそのまま表示され分かりづらかった)。
// 物理/魔法増強(physicalEnhance/magicalEnhance)は含めない: 収益逓減カーブを経由する"強化度"
// レーティング(会心/ファスト等と同じ性質)であり、実数値をそのまま/100して%表示すると
// カーブ変換後の実際の%とは一致しない(2026-08-12不具合報告)。属性ボーナス(fireBonus等)は
// カーブを経由しない直接加算のためこちらに含める。
export const RAW_PERCENT_STAT_IDS = new Set<StatId>([
  'critDamageBonus',
  'critRecoveryBonus',
  'luckyHitDamageBonus',
  'luckyHitRecoveryBonus',
  'healingPower',
  'receivedRecovery',
  'barrierStrength',
  'breakEfficiency',
  'bossDamageBonus',
  'bossDamageReduction',
  'physicalReductionBonus',
  'magicalReductionBonus',
  'physicalDefIgnoreBonus',
  'fireBonus',
  'iceBonus',
  'forestBonus',
  'thunderBonus',
  'windBonus',
  'rockBonus',
  'lightBonus',
]);

// 進化ステータス固定効果 AttrId → StatId (fixedEvolutionStats の isPercent=true エントリ用。
// 蒼海武器シリーズ等)。対象ステータスはderiveStats側で収益減少曲線を経由しない固定基礎%への
// 直接加算(会心ダメージ/幸運の一撃ダメージ率/会心回復/バリア強度)。
// (会心/幸運/ファスト/器用さ/万能の"%"バリアント、物理・魔法増強の"%"バリアントは
// EVO_PCT_FINAL_ATTR_TO_STAT側を参照)
export const EVO_PCT_ATTR_TO_STAT: Partial<Record<number, StatId>> = {
  11812: 'barrierStrength',
  12512: 'critDamageBonus',
  12532: 'luckyHitDamageBonus',
  12742: 'critRecoveryBonus',
  11792: 'healingPower',
  11832: 'breakEfficiency',
  12632: 'bossDamageBonus',
  // 属性ボーナス%への直接加算(蒼海武器4枠選択式レアステータス・一部固定進化ステータス)。
  13112: 'fireBonus',
  13122: 'iceBonus',
  13132: 'forestBonus',
  13142: 'thunderBonus',
  13152: 'windBonus',
  13162: 'rockBonus',
  13172: 'lightBonus',
};

// 進化ステータス固定効果 AttrId → StatId (fixedEvolutionStats の isPercent=true エントリのうち、
// 会心/幸運/ファスト/器用さ/万能の"%"バリアント。既存のflat系attrId(11112/11132/11122/11142/
// 11152)とgame-data.json上で同名のため、収益逓減カーブ適用後の最終%への直接加算として扱う
// (finalPctAddendと同じ単位: 100 = 1%)。
// 11952(万能)は蒼海武器レアステータスでのみ確認。他4件と同じ命名規則・並び(11712/11782/
// 11932/11942の次)であることからの類推であり、ゲーム内表示での実測未確認。
// 12552/12572(物理/魔法増強の"%"バリアント、蒼海武器等)も同様に、強化薬等由来の実数値が
// 収益逓減カーブを経由して算出された最終%(physicalBoostPercent/magicalBoostPercent)への
// 直接加算として扱う(2026-08-12不具合報告: 従来はphysicalEnhance/magicalEnhanceの実数値へ
// 平坦加算していたため、カーブ通過前の実数値段階で強化薬分と合算されてしまい、収益逓減の
// 影響を余分に受けて過小評価になっていた)。
export const EVO_PCT_FINAL_ATTR_TO_STAT: Partial<Record<number, StatId>> = {
  11712: 'crit',
  11782: 'luck',
  11932: 'haste',
  11942: 'mastery',
  11952: 'versatility',
  12552: 'physicalEnhance',
  12572: 'magicalEnhance',
};

// 刻印(伝説刻印) AttrId → 最終ステータスへの%乗算(武器/アクセサリのみ・isPercent=true)。
// 2400001/2400002はeffectType=3の特殊関数効果(物理/魔法攻撃力ボーナス)で、意味的には
// 11334/11344と同じ物理/魔法攻撃力%ボーナスのため同じバケツに集約する。
export const AFFIX_STAT_EFFECTS: Record<number, { statId: StatId }> = {
  11334: { statId: 'atk' },
  11344: { statId: 'matk' },
  2400001: { statId: 'atk' },
  2400002: { statId: 'matk' },
};

// 刻印(伝説刻印、単体選択枠) AttrId → rawStatsへの平坦加算。
// 筋力/知力/敏捷(11014/11024/11034)は防具でも%扱いのため IMAGINE_PCT_BASE 側で処理する。
// 11792/11812/11832/12632は収益逓減カーブを経由しない"100=1%"のrawStats項目
// (EVO_PCT_ATTR_TO_STAT/legendaryAffixGroup側と同じ単位)のため、isPercent=trueでも
// そのままaddStatする(表示側のfmtPct(value/100)で%変換する)。
export const LEGENDARY_AFFIX_FLAT_STAT: Partial<Record<number, StatId>> = {
  11322: 'maxHp',
  11352: 'physicalDef',
  13202: 'allAttrResist',
  11792: 'healingPower',
  11812: 'barrierStrength',
  11832: 'breakEfficiency',
  12632: 'bossDamageBonus',
  // 92000(移動速度): isPercent=false・%換算の裏付けがないため、生の値をそのまま加算し
  // %表記なしで表示する(表示側は fmtDec2、下記 StatsDetailDialog 参照)。
  92000: 'moveSpeed',
};

// Base stat (strength/intellect/agility/endurance) percentage bonuses applied to rawStats before deriveStats.
// Unit: 1/10000 (value 600 → 6%).
export const IMAGINE_PCT_BASE: Partial<Record<number, StatId>> = {
  11014: 'strength',
  11024: 'intellect',
  11034: 'agility',
  11044: 'endurance',
};

// Final stat percentage bonuses applied after deriveStats + affix multipliers.
// Unit: 1/10000 (value 3584 → 35.84%).
export const IMAGINE_PCT_FINAL = {
  11324: 'maxHp',
  11334: 'atk',
  11344: 'matk',
  11354: 'physicalDef',
} as const;
export type ImagineFinalStatId = keyof typeof IMAGINE_PCT_FINAL;
// IMAGINE_PCT_FINALの値側('maxHp'/'atk'/'matk'/'physicalDef')の型。他のマップ
// (FACTOR_SINGLE_STAT_PCT_BONUS等)がphantomFinalPctへ積む対象stat名を指定する際に使う。
export type FinalPctStatId = (typeof IMAGINE_PCT_FINAL)[ImagineFinalStatId];
// maxHp(耐久力由来)/atk・matk(メインステータス由来)/physicalDef(筋力由来)は、他のrawStatから
// deriveStats.ts内で変換加算される"derived"な値のため、rawStats自体への%ボーナス
// (addPctBonus)を掛けても変換後の加算分には反映されない。%ボーナスはこの4種に限りFinalPct
// バケツ(phantomFinalPct、mainStat変換後の値に一度だけ乗算)へ振り分ける必要がある
// (2026-09-17不具合報告: cookingBuff.statCorrectionsのmaxHp/atk/matkの%補正が、addPctBonus
// 経由では耐久力/メインステータス由来分に未反映だった)。
export const FINAL_PCT_STAT_IDS = new Set<string>(Object.values(IMAGINE_PCT_FINAL));

// バトルイマジン パッシブの会心/ファスト/幸運/器用さ/万能/レジストは、筋力等と違って%専用の
// AttrIdを持たず、TALENT/MOD/ENCHANT等と同じ実数値レーティングとして加算される(収益減少カーブは
// deriveStats側で一括適用されるため、ここで%として扱うと二重に乗算されてしまう)。
// 11172(レジスト、AttrBlockのAttrAdd)はイマジン「ゴブリン衛士」(id 3914)のパッシブでのみ使用。
// 会心ダメージ等の"raw/100=%"系AttrId(既に%済みの生値)はここには含めない。IMAGINE_RAW_PERCENT_STAT参照。
export const IMAGINE_FLAT_STAT: Partial<Record<number, StatId>> = {
  11112: 'crit',
  11122: 'haste',
  11132: 'luck',
  11142: 'mastery',
  11152: 'versatility',
  11172: 'resist',
};

// バトルイマジン パッシブのうち、収益逓減カーブを経由しない"raw/100=%"規約(RAW_PERCENT_STAT_IDS/
// EVO_PCT_ATTR_TO_STAT等と同じ単位)の生値を持つもの。IMAGINE_FLAT_STATの実数値レーティングとは
// 異なり、addStatで加算した値をそのまま/100して%表示する(SkillTooltip/StatsDetailDialog共通)。
// 12512(会心ダメージ)はイマジン「ムークボス」(id 3923)のパッシブで使用。2026-08-09不具合報告で
// EVO_PCT_ATTR_TO_STAT/MOD_ATTR_TO_STATには既に登録済みなのにイマジン側だけ漏れていたことが発覚し、
// 一旦IMAGINE_FLAT_STATへ追加(実数値レーティングと混同し%表記漏れの原因になっていた)。2026-08-12
// 不具合報告(バリア強度/ブレイク効率/属性ボーナス等も同様に未対応と判明)を機に、"raw/100=%"系を
// このマップへ切り出して集約した。
export const IMAGINE_RAW_PERCENT_STAT: Partial<Record<number, StatId>> = {
  11792: 'healingPower',
  11802: 'receivedRecovery',
  11812: 'barrierStrength',
  11832: 'breakEfficiency',
  12512: 'critDamageBonus',
  13112: ELEMENT_BONUS_STAT.fire,
  13122: ELEMENT_BONUS_STAT.ice,
  13142: ELEMENT_BONUS_STAT.thunder,
  13152: ELEMENT_BONUS_STAT.wind,
  13172: ELEMENT_BONUS_STAT.light,
};

// バトルイマジン パッシブのうち、FightAttrTable直下のAttrIdを持たずBuffId参照でのみ効果が
// 定義されるもの(bufPassiveEffects)。効果文が「固定加算」+「条件付き/スタック式の追加分」の
// 複合になっているケースが大半のため、このマップでは無条件で常時有効な先頭パラメータ
// (paramIndex)のみを対象にする(条件付き/スタック式の残り部分は、他のスキル固有効果と同様に
// このアプリの静的ステータスモデルでは対象外)。
// 3210180(イゴレウス, id 3969): 「会心ダメージ+{p1}(常時)。会心ダメージを与えるたび一定確率で
// +{p2}(0.1秒毎最大1回、5スタックまで、持続2秒)」のp1のみ対応、p2はスタック式のため対象外。
export const IMAGINE_BUF_FLAT_STAT: Partial<Record<number, { stat: StatId; paramIndex: number }>> =
  {
    3210180: { stat: 'critDamageBonus', paramIndex: 0 },
  };

// 心相ツリーの固定ノード(nodeType=1, ordinaryEffect)は大半がスキル固有/条件付き効果
// (このアプリの静的ステータスモデルでは表現不可)だが、一部は単純なステータスボーナスとして
// 表現できる。BuffId(effectType=3の第2要素)ごとに手動で対応付ける。
export type OrdinaryEffectBonus =
  { kind: 'flat'; stat: StatId; value: number } | { kind: 'finalPct'; stat: StatId; value: number };

export const ORDINARY_EFFECT_BONUS: Partial<Record<number, OrdinaryEffectBonus>> = {
  // 瞬間ブレス: 戦闘中のスタミナ回復+35pt/秒(移動速度+10%は対応するStatIdが無いため対象外)
  3002090: { kind: 'flat', stat: 'staminaRegen', value: 35 },
  // 物理防御力+15%(無条件の固定ノード)
  3003280: { kind: 'finalPct', stat: 'physicalDef', value: 1500 },
  // イマジンインパクト(心相ツリー)固定ノード「リビルド」: 「幸運の一撃倍率+10%」。
  // 表記は「ダメージ」を明示しないが、回復には影響しないダメージ専用の効果(2026-08-09
  // 不具合報告でユーザー確認)。
  3002030: { kind: 'flat', stat: 'luckyHitDamageBonus', value: 1000 },
};

```

### 4.4 ข้อมูล Factor (`phantom-factors.json`) และเอฟเฟกต์ตามระดับ G1–G10:
- **Factor Key `factorTypes`**: `{"1": "極性", "2": "恒常性", "3": "第六感", "4": "クラス恒常性", "5": "クラス狂想", "6": "真実"}`
- **Factor Key `byClass`**: `{"200101": {"typeId": 3, "professionIds": [1], "seasonId": 2, "grades": [{"id": 20010001, "level": 1, "effects": [[3, 3050011, 1]], "buffPars": [[140]], "fightValue": 0}, {"id": 20010002, "level": 2, "effects": [[3, 3050011, 1]], "buffPars": [[180]], "fightValue": 0}, {"id": 20010003, "level": 3, "effects": [[3, 3050011, 1]], "buffPars": [[220]], "fightValue": 0}, {"id": 20010004, "level": 4, "effects": [[3, 3050011, 1]], "buffPars": [[260]], "fightValue": 0}, {"id": 20010005, "level": 5, "effects": [[3, 3050011, 1]], "buffPars": [[300]], "fightValue": 0}, {"id": 20010006, "level": 6, "effects`

---
## 5. ข้อมูลบัฟอาหาร (Cooking Cuisine Lv.1–3) และยา (Alchemy Serums Lv.1–3)

### 5.1 โค้ดและตารางตัวเลขจริงของอาหารและยาทั้งหมดจาก `cookingBuff.ts`:
```typescript
import type { Profession } from '../profession';
import type { CookingBuffState, StatCorrectionEntry, StatId } from '../types';

// イベントバフのメインステータス加算量の既定値(旧・海風の宴の固定効果量を踏襲)。
export const DEFAULT_EVENT_BUFF_VALUE = 500;

export const DEFAULT_COOKING_BUFF: CookingBuffState = {
  cookingEnabled: false,
  cookingAtkValue: 270,
  cookingEliteDamagePercent: 10,
  syrupEnabled: false,
  syrupElement: 'fire',
  syrupElementStrength: 2000,
  starOilEnabled: false,
  starOilValue: 1350,
  eventBuffEnabled: false,
  eventBuffValue: DEFAULT_EVENT_BUFF_VALUE,
  inspirationEnabled: false,
  inspirationVariant: 'lifebind',
  statResonanceEnabled: false,
  statResonanceBaseValue: 7800,
  statResonanceMultiplierPercent: 32,
  luckyCritEnabled: false,
  luckyCritVariant: 'self',
  lifeWaveEnabled: false,
  dmgStackEnabled: false,
  dmgStackCount: 4,
  agileEnabled: false,
  statCorrectionEnabled: false,
  statCorrections: {},
};

// モジュールのパワーコア効果(Lv5/6)のうち、バフ計算対象となるeffectId。
export const POWER_CORE_EFFECT_IDS = {
  luckyCrit: 2406, // 極・幸運会心(Team Luck & Crit)
  lifeWave: 2404, // 極・HP変動(Life Wave)
  dmgStack: 2104, // 極・ダメージ増強(DMG Stack)
  agile: 2105, // 極・適応力(Agile)
} as const;

// 幸運会心: 会心ダメージ/幸運ダメージへの加算量(Lv5/6。単位はcritDamageBonus/luckyHitDamageBonus
// と同じ、%*100)。自分が発動した場合はこの値の2倍を加算する。
export const LUCKY_CRIT_VALUES: Record<5 | 6, { critDamage: number; luckyDamage: number }> = {
  5: { critDamage: 310, luckyDamage: 200 },
  6: { critDamage: 520, luckyDamage: 340 },
};

// 極・HP変動: 会心/幸運/ファスト/器用さ/万能のうち計算結果が最も高い項目への加算量(%、Lv5/6)。
export const LIFE_WAVE_VALUES: Record<5 | 6, number> = { 5: 6, 6: 10 };

// 極・ダメージ増強: 1スタックあたりのダメージ増加%(Lv5/6)。現時点では表示のみでステ計算には含めない。
export const DMG_STACK_PER_STACK: Record<5 | 6, number> = { 5: 1.65, 6: 2.75 };

// 極・適応力: 移動速度%(表示のみ、未計算)/物理・魔法攻撃力への乗算バフ%(Lv5/6)。
export const AGILE_VALUES: Record<5 | 6, { moveSpeed: number; atkMultPercent: number }> = {
  5: { moveSpeed: 18, atkMultPercent: 6 },
  6: { moveSpeed: 30, atkMultPercent: 10 },
};

// 幸運会心の選択中バリアントに応じた、会心ダメージ/幸運ダメージへの加算量を算出する。
// 「自分」は自身のパワーコア到達Lv(5/6)の値を2倍、「被Lv5/6」は固定Lvの値をそのまま返す。
export function calcLuckyCritBonus(
  cookingBuff: CookingBuffState,
  ownLevel: 0 | 5 | 6,
): { critDamage: number; luckyDamage: number } {
  if (!cookingBuff.luckyCritEnabled) return { critDamage: 0, luckyDamage: 0 };
  if (cookingBuff.luckyCritVariant === 'receivedLv5') return LUCKY_CRIT_VALUES[5];
  if (cookingBuff.luckyCritVariant === 'receivedLv6') return LUCKY_CRIT_VALUES[6];
  // 'self': 自身のパワーコアがLv5/6未達成の場合は無効
  if (ownLevel === 0) return { critDamage: 0, luckyDamage: 0 };
  const base = LUCKY_CRIT_VALUES[ownLevel];
  return { critDamage: base.critDamage * 2, luckyDamage: base.luckyDamage * 2 };
}

// 鼓舞(森癒・威咲)による加算量。ヴァーダントオラクルのアビリティツリー由来
// (talentId 502「鼓舞」R1 base: 筋力/知力/俊敏/耐久+135pt・会心/幸運/ファスト/器用さ/万能+1.5%、
// talentId 529「防御強化」R1: 物理防御力+400pt、talentId 568「鼓舞強化」森癒R2: 上記4ステータスに
// さらに+135pt、talentId 557「鼓舞の極意」森癒R2: 鼓舞の効果を全て(物理防御力含む)2倍にする、
// と実機で確認)。威咲はR1のみ(森癒限定のR2強化を受けられない)ため据え置き、森癒はR2強化込みで
// (135+135)×2 = 270×2 = 540pt / 1.5%×2 = 3% / 物理防御力は400×2 = 800ptとなる。
// mainStat=筋力/知力/俊敏/耐久全てへの平坦加算、percent=会心/幸運/ファスト/器用さ/万能の
// 最終計算結果への直接加算(%)、physDef=物理防御力への平坦加算。
export const INSPIRATION_VALUES: Record<
  CookingBuffState['inspirationVariant'],
  { mainStat: number; percent: number; physDef: number }
> = {
  lifebind: { mainStat: 540, percent: 3, physDef: 800 },
  smite: { mainStat: 135, percent: 1.5, physDef: 400 },
};

// 鼓舞のpercent効果(最終計算結果への直接加算)の対象ステータス。
export const INSPIRATION_PERCENT_STAT_IDS: StatId[] = [
  'crit',
  'haste',
  'luck',
  'mastery',
  'versatility',
];

// 能力共鳴(響奏バフ)の平均倍率(%)の選択肢。
export const STAT_RESONANCE_MULTIPLIER_OPTIONS = [8, 12, 16, 24, 32] as const;

// 精鋭ダメージ(料理)の選択肢。反映先のステータスが現状存在しないため、選択できるだけで
// 計算には使わない(将来対応するAttrId/StatIdが判明したら計算に組み込む)。
export const ELITE_DAMAGE_OPTIONS = [0, 5, 10] as const;

// 能力共鳴(Stat Resonance、響奏バフ): 基準値×倍率(%)÷100を算出する。
export function calcStatResonanceBonus(cookingBuff: CookingBuffState): number {
  if (!cookingBuff.statResonanceEnabled || cookingBuff.statResonanceBaseValue === 0) return 0;
  return (cookingBuff.statResonanceBaseValue * cookingBuff.statResonanceMultiplierPercent) / 100;
}

export interface CookingBuffResult {
  // 料理バフ表示用: 最終atk/matkへの料理攻撃力加算量(料理、0=なし)。
  atkBonus: number;
}

// 料理(cookingAtkValue)による最終atk/matkへの加算量を算出する。装備・アビリティ等の
// 加算・乗算計算がすべて終わった後の値に対して加算するため、呼び出し側でrawStats/deriveStats
// 算出後の最終値に対してこの結果を加算する。
export function applyCookingBuff(cookingBuff: CookingBuffState): CookingBuffResult {
  const atkBonus = cookingBuff.cookingEnabled ? cookingBuff.cookingAtkValue : 0;
  return { atkBonus };
}

// 最終ステータスへの料理バフ系(適応力・料理攻撃力・鼓舞・HP変動)の
// 調整を1件ずつ表す。multiplier: 対象statに乗算する係数。addend: 対象statに加算する値。
export interface CookingAdjustment {
  statId: StatId;
  multiplier?: number;
  addend?: number;
}

// 適応力(乗算)→料理攻撃力(加算)→鼓舞(複数statへの加算)→アビリティ(二段増幅、実数値が
// 最大のstat種別へ加算)→HP変動(その時点の最終%表示値が最大のstat種別へ加算)の順で、
// 最終ステータス(finalStats)に対する調整リストを算出する。二段増幅とHP変動は「最大stat」の
// 判定基準が異なる点に注意(2026-08-05不具合報告で判明): 二段増幅はゲーム内が収益逓減曲線
// 適用前の実数値(highestOfFiveRawStats、%変換前の装備等由来の実数値。ファストはagility変換
// 込みのhasteReal)で判定するのに対し、HP変動(パワーコア)はfinalStatsのスクラッチコピー
// (working、それ以前の調整が適用済みの最終%表示値)で判定する。呼び出し側はこのリストを
// 自身の出力形(実数値 / StatBreakdownEntryの multiplier・cookingBonus)に適用するだけでよい。
export function computeCookingAdjustments(
  finalStats: Record<StatId, number>,
  cookingAtkStatId: StatId,
  cookingAtkBonus: number,
  inspirationPercentBonus: number,
  highestStatFinalPctBonus: number,
  lifeWaveBonus: number,
  agileAtkMultPercent: number,
  // 二段増幅の「5ステータス中最大の1項目」判定用の実数値(%変換前。crit/luck/mastery/
  // versatilityはrawStatsそのまま、hasteはagility変換込みのderived.hasteRealを渡す)。
  highestOfFiveRawStats: Record<StatId, number>,
  // ステータス補正(仮)の最終値補正(finalValue)分。無効時は呼び出し側で{}を渡す。
  statCorrections: Partial<Record<StatId, StatCorrectionEntry>> = {},
): CookingAdjustment[] {
  const adjustments: CookingAdjustment[] = [];
  const working = { ...finalStats };

  if (agileAtkMultPercent !== 0) {
    const multiplier = 1 + agileAtkMultPercent / 100;
    working[cookingAtkStatId] *= multiplier;
    adjustments.push({ statId: cookingAtkStatId, multiplier });
  }
  if (cookingAtkBonus !== 0) {
    working[cookingAtkStatId] += cookingAtkBonus;
    adjustments.push({ statId: cookingAtkStatId, addend: cookingAtkBonus });
  }
  if (inspirationPercentBonus !== 0) {
    for (const statId of INSPIRATION_PERCENT_STAT_IDS) {
      working[statId] += inspirationPercentBonus;
      adjustments.push({ statId, addend: inspirationPercentBonus });
    }
  }
  const addToHighestOf = (bonus: number, basis: Record<StatId, number>) => {
    if (bonus === 0) return;
    let maxStatId = INSPIRATION_PERCENT_STAT_IDS[0];
    for (const statId of INSPIRATION_PERCENT_STAT_IDS.slice(1)) {
      if (basis[statId] > basis[maxStatId]) maxStatId = statId;
    }
    working[maxStatId] += bonus;
    adjustments.push({ statId: maxStatId, addend: bonus });
  };
  // 二段増幅: 実数値(収益逓減曲線適用前)基準。
  addToHighestOf(highestStatFinalPctBonus, highestOfFiveRawStats);
  // HP変動(パワーコア): その時点の最終%表示値基準。
  addToHighestOf(lifeWaveBonus, working);

  for (const [statId, entry] of Object.entries(statCorrections) as [
    StatId,
    StatCorrectionEntry,
  ][]) {
    if (entry.finalValue === 0) continue;
    working[statId] += entry.finalValue;
    adjustments.push({ statId, addend: entry.finalValue });
  }

  return adjustments;
}

// ステータス補正(仮)パネルの対象ステータス一覧(クラスのメイン攻撃力に応じて解決。
// 筋力/知力/俊敏はクラスのメインステータスに関わらず常に全て表示する)。
export interface StatCorrectionTarget {
  id: StatId;
  isPercent: boolean;
}

export function getStatCorrectionTargets(profession: Profession): StatCorrectionTarget[] {
  const atkStatId: StatId = profession.attackType === 'physical' ? 'atk' : 'matk';
  return [
    { id: 'maxHp', isPercent: false },
    { id: atkStatId, isPercent: false },
    { id: 'strength', isPercent: false },
    { id: 'intellect', isPercent: false },
    { id: 'agility', isPercent: false },
    { id: 'endurance', isPercent: false },
    { id: 'crit', isPercent: true },
    { id: 'haste', isPercent: true },
    { id: 'luck', isPercent: true },
    { id: 'mastery', isPercent: true },
    { id: 'versatility', isPercent: true },
    { id: 'resist', isPercent: true },
  ];
}

```

### 5.2 ชื่อและคำอธิบายใน UI (`bpsr-bp-ui.json`):
```json
{}
```