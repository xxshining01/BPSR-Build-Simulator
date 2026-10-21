# สารานุกรมข้อมูลกลไกการต่อสู้ฉบับสมบูรณ์ (Combat Simulator Master Data Specification)
**เอกสารนี้สกัดจากฐานข้อมูลจริง (`en_US/game-data.json` & `ZTable JSONs`) 100% เพื่อใช้เป็นพิมพ์เขียวในการเขียนเอกสาร `ADR.md`, `SAD.md`, `SDD.md` และเขียนโค้ด `combatSimulatorEngine.ts`**

---

## หมวดที่ 1: สกิลประจำอาชีพทั้ง 9 คลาส และตารางตัวคูณจริง (`activeEffectParams`)

### อาชีพ [1] Stormblade

#### Basic Attack (คลิกซ้าย):
- **`[1701] Judgment Cut`** (Basic Attack, Physical, Thunder, Direct DMG, Single Target, Melee)
  - *Description*: Blade Intent | Stacks 2 Blade Intent per second. When fully charged, Special Attack is enhanced: Consumes 100 Blade Intent to greatly increase its casting speed. | | Basic Attack: Swift Justice | Unleashes up to four sweeping strikes in longsword form, each dealing Attack DMG. | | Tips: Use the Special Attack promptly when Blade Intent reaches the max to maximize damage.
  - **Strike I**: [Tier G0→G6: 32% .. 44.8% (32%, 33.28%, 34.56%, 38.4%, 39.68%, 40.96%, 44.8%)]ATK +[Lv1→Lv30: 3 .. 126](Resilience Break: 20)
  - **Strike II**: [Tier G0→G6: 52% .. 72.78% (52%, 54.08%, 56.16%, 62.4%, 64.48%, 66.56%, 72.78%)]ATK +[Lv1→Lv30: 4 .. 208](Resilience Break: 32)
  - **Strike III**: [Tier G0→G6: 57% .. 79.8% (57%, 59.28%, 61.56%, 68.4%, 70.68%, 72.96%, 79.8%)]ATK +[Lv1→Lv30: 4 .. 226](Resilience Break: 34)
  - **Strike IV**: [Tier G0→G6: 69% .. 96.6% (69%, 71.76%, 74.52%, 82.8%, 85.56%, 88.32%, 96.6%)]ATK +[Lv1→Lv30: 6 .. 277](Resilience Break: 44)
  - **Red Light Counter**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK +[Lv1→Lv30: 10 .. 400](Resilience Break: 100)

#### Special Skill (ปุ่มเลข 1):
- **`[1714] Iaido Slash`** (Special Attack, Physical, Thunder, Direct DMG, Single Target, Melee)
  - *Description*: Powers up and delivers a swift forward slash, consuming all Thunder Sigils to deal Attack Damage. Each Thunder Sigil consumed boosts DMG by 25%. | | "Everything I see, hear, or sense can be severed." | | Tips: Use when Thunder Sigils reach the max for maximum damage.
  - **Base DMG**: [Tier G0→G6: 157% .. 219.8% (157%, 163.28%, 169.56%, 188.4%, 194.68%, 200.96%, 219.8%)]ATK +[Lv1→Lv30: 15 .. 628](Resilience Break: 487)
  - **CD**: `0.5s`

#### Ultimate Skill (ปุ่ม R):
- **`[1713] Oblivion Combo`** (Ultimate, Physical, Thunder, Direct DMG, AoE, Melee, Energy Restore)
  - *Description*: A supreme sword technique sharp enough to cut the air itself. Unleashes a flurry of slashes in front, dealing Attack Damage to all enemies in range. Grants max Thunder Sigil and fully restores Blade Intent at the end of the strike. | "Heaven's weapon dims even the brightest stars." | | Tips: Cast when Thunder Sigil is empty to quickly charge it. Also effective against multiple targets for massive area damage.
  - **Total DMG**: [Tier G0→G6: 646% .. 904.4% (646%, 671.84%, 697.68%, 775.2%, 801.04%, 826.88%, 904.4%)]ATK +[Lv1→Lv30: 63 .. 2600](Resilience Break: 941)
  - **CD**: `60s`

#### Expertise Skills (สกิลเลือกใส่):
- **`[1705] Overdrive`** (Expertise Skill, Physical, Thunder, Direct DMG, Single Target, Melee)
  - *Description*: Unleashes the power of tachi and shifts its form into a scythe, each attack dealing increased Attack Damage and granting 1 Thunder Sigil. | This skill holds 5 charges. | | Tips: Always keep at least one charge regenerating without overflowing Thunder Sigils.
  - **Strike I**: [Tier G0→G6: 120% .. 168% (120%, 124.8%, 129.6%, 144%, 148.8%, 153.6%, 168%)]ATK +[Lv1→Lv30: 12 .. 480](Resilience Break: 176)
  - **Strike II**: [Tier G0→G6: 120% .. 168% (120%, 124.8%, 129.6%, 144%, 148.8%, 153.6%, 168%)]ATK +[Lv1→Lv30: 12 .. 480](Resilience Break: 177)
  - **Strike III**: [Tier G0→G6: 120% .. 168% (120%, 124.8%, 129.6%, 144%, 148.8%, 153.6%, 168%)]ATK +[Lv1→Lv30: 12 .. 480](Resilience Break: 177)
  - **Charge Time**: `7s`
- **`[1717] Flash Strike`** (Expertise Skill, Physical, Thunder, Direct DMG, Single Target, Melee)
  - *Description*: Consumes all Thunder Sigils to power up and dash forward, slashing all enemies along the path to deal Attack DMG. Each Thunder Sigil increases DMG by 25%. | | "In a blink of lightning, the blade is already unsheathed." | | Tips: A core skill of Iaido Slash Spec. Prioritize using it before Iaido Slash. Use when your Thunder Sigils are at their maximum to maximize damage.
  - **Total DMG**: [Tier G0→G6: 350% .. 490% (350%, 364%, 378%, 420%, 434%, 448%, 490%)]ATK +[Lv1→Lv30: 35 .. 1400](Resilience Break: 566)
  - **CD**: `15s`
- **`[1718] Raijin Dash`** (Expertise Skill, Physical, Thunder, Direct DMG, AoE, Melee)
  - *Description*: Consumes all Thunder Sigils to release slashes across a wide area, dealing Attack DMG. Each Thunder Sigil increases DMG by 25%. Grants immunity to all DMG while slashing. | | Tips: A core skill of Iaido Slash Spec. Use when facing 3 or more targets and your Thunder Sigils are at their maximum to maximize damage.
  - **Total DMG**: [Tier G0→G6: 300% .. 420% (300%, 312%, 324%, 360%, 372%, 384%, 420%)]ATK +[Lv1→Lv30: 30 .. 1200](Resilience Break: 294)
  - **CD**: `25s`
- **`[1719] Scythe Wheel`** (Expertise Skill, Physical, Thunder, Direct DMG, AoE, Summon, Melee)
  - *Description*: Turns the weapon into a scythe, swinging it to perform multi-hit attacks against surrounding enemies, dealing Attack DMG and repelling enemies. The final strike inflicts a 50% [Link#3004: Wound] on the target for 10s. | Summons Moonblades to aid in combat. | | Moonblade: Spins for 35s, dealing Attack DMG on the target every 2s. Casting Moonstrike commands all active Moonblades to release a whirling attack, dealing Attack DMG to nearby enemies. When you die, Moonblades end immediately and the remaining CD of Scythe Wheel is refunded. | | Tips: A core skill of Iaido Slash Spec. Release just prior to each Moonblade's expiration to maximize its DMG.
  - **Skill Damage**: [Tier G0→G6: 300% .. 420% (300%, 312%, 324%, 360%, 372%, 384%, 420%)]ATK +[Lv1→Lv30: 27 .. 1200](Resilience Break: 171)
  - **Moonblade DMG per hit**: [Tier G0→G6: 50% .. 70% (50%, 52%, 54%, 60%, 62%, 64%, 70%)]ATK +[Lv1→Lv30: 5 .. 200]
  - **Trigger Whirl Damage**: [Tier G0→G6: 150% .. 210% (150%, 156%, 162%, 180%, 186%, 192%, 210%)]ATK +[Lv1→Lv30: 15 .. 600]
  - **CD**: `30s`
- **`[1724] Thundercut`** (Expertise Skill, Physical, Thunder, Direct DMG, Single Target, Melee)
  - *Description*: Double lightning-fast Iai Slashes. Inflicts Attack DMG on enemies at the cost of 50 Blade Intent. Once Attack Speed reaches 25%|50%|80%, deals 1|2|3 additional attack(s). If Blade Intent remains after the strike, the skill can be recast. | | Tips: Core skill of the Spec. Consumes Blade Intent to deal DMG. Release when Blade Intent is at its maximum.
  - **Total DMG**: [Tier G0→G6: 150% .. 210% (150%, 156%, 162%, 180%, 186%, 192%, 210%)]ATK +[Lv1→Lv30: 14 .. 600](Resilience Break: 80)
- **`[1730] Volt Surge`** (Expertise Skill, Energy Restore, Increased Damage)
  - *Description*: Enchants the blade with thunderous power. While active, any action that would grant Thunder Sigils would instantly maxes them out. Also increases ATK and grants [Link#1102: Super Armor] for the duration. | | Tips: Best paired with Overdrive and Talents to rapidly gain and spend Thunder Sigils, unleashing massive DMG within a short window.
  - **ATK bonus**: [Tier G0→G6: 4% .. 10% (4%, 4.6%, 5.2%, 7%, 7.6%, 8.2%, 10%)]+[Lv1→Lv30: 5 .. 80]
  - **Duration**: `12s`
  - **CD**: `0.5s`
- **`[1731] Stormflash`** (Expertise Skill, Physical, Thunder, Direct DMG, Single Target, Mastery, Melee, Lucky Effect DMG)
  - *Description*: Unleashes raging Thunder within, generating 20 Blade Intent per second. When in this state, using Expertise Skills that consume Blade Intent triggers a Lightning Strike, dealing Attack DMG to the current target. | | Tips: Pair with Thundercut to generate more Thunder strikes. Higher Mastery significantly increases Moonblade DMG for the Moonstrike Spec.
  - **Thunder Strike DMG per hit**: [Tier G0→G6: 160% .. 224% (160%, 166.4%, 172.8%, 192%, 198.4%, 204.8%, 224%)]ATK +[Lv1→Lv30: 16 .. 640]
  - **Duration**: `10s`
  - **CD**: `45s`
- **`[1720] True Sight`** (Expertise Skill, Physical, Thunder, Direct DMG, Single Target, Melee, Energy Restore, Block)
  - *Description*: Enters a defensive stance, gaining immunity to all DMG. If hit while in this stance, counterattacks with a slash and leaps backward. Recast to dash forward and slash, dealing Attack Damage. If the attack hits a target, gains max Thunder Sigils. | | Tips: Release under intense battles or when confident in timing to gain Thunder Sigil more efficiently.
  - **Slash Backstep Damage**: [Tier G0→G6: 30% .. 42% (30%, 31.2%, 32.4%, 36%, 37.2%, 38.4%, 42%)]ATK +[Lv1→Lv30: 3 .. 120]
  - **Dashing Slash Damage**: [Tier G0→G6: 70% .. 98% (70%, 72.8%, 75.6%, 84%, 86.8%, 89.6%, 98%)]ATK +[Lv1→Lv30: 7 .. 280]
  - **CD**: `30s`

#### Talent / Proc / Passive Skills (สกิลเสริมจากสาย Talent):
- **`[1715] Moonstrike`** (Special Attack, Physical, Thunder, Direct DMG, Single Target, Melee)
  - *Description*: Consumes 3 Thunder Sigils to dash forward with a spinning blade attack, dealing Attack DMG to nearby enemies. Moonblades on the field perform a whirling slashing attack, dealing Attack DMG to surrounding targets. This damage scales with the Level/Tier of Scythe Wheel. | "Under the moonlight, I move as one with the shadows." | | Tips: Use when multiple Moonblades exist to trigger as many whirling attacks as possible.
  - **Base DMG**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK +[Lv1→Lv30: 10 .. 400](Resilience Break: 260)
- **`[1728] Oblivion Combo`** (Ultimate, Physical, Thunder, Direct DMG, AoE, Melee)
  - *Description*: Oblivion Combo | A supreme sword technique sharp enough to cut the air itself. Unleashes a flurry of slashes in front, dealing Attack DMG to all enemies in range. Grants max Thunder Sigil and fully restores Blade Intent at the end of the strike. | "Heaven's weapon dims even the brightest stars." | | Tips: Cast when Thunder Sigil is empty to quickly charge it. Also effective against multiple targets for massive area damage.
- **`[1733] Storm Scythe`** (Special Attack, Physical, Thunder, Direct DMG, Single Target, Melee)
  - *Description*: Quickly slashes horizontally with a scythe condensed from lightning, dealing Attack DMG equal to 300%ATK to the enemy, which scales with the Level/Tier of Thundercut.
  - **Base DMG**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK +[Lv1→Lv30: 10 .. 400]
  - **Moonblade DMG per hit**: `0% ATK +0`
  - **Moonblade Explosion Damage**: `100% ATK +0`
- **`[1734] Thunder Iaido Slash`** (Special Attack, Magic, Thunder, Direct DMG, Single Target, Melee)
  - *Description*: Consume all Thunder Sigil to unleash 5 rapid blade waves, dealing Attack DMG equal to 700% ATK. Scales with the Level/Tier of Special Attack.
  - **Base DMG**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK +[Lv1→Lv30: 10 .. 400]
  - **Moonblade DMG per hit**: `0% ATK +0`
  - **Moonblade Explosion Damage**: `100% ATK +0`
- **`[1735] Dragonhammer`** (Expertise Skill, Physical, Thunder, Direct DMG, Single Target, Melee)
  - *Description*: Enhanced [Link#1501: Flash Strike], Consume all Thunder Sigils, then charges forward after powering up to slash all enemies in path, dealing 510% ATK as Attack DMG (which scales with the Level/Tier of [Link#1501: Flash Strike]). Each Thunder Sigil consumed increases DMG by 25%.
  - **Total DMG**: [Tier G0→G6: 350% .. 490% (350%, 364%, 378%, 420%, 434%, 448%, 490%)]ATK +[Lv1→Lv30: 35 .. 1400]
- **`[1736] Raijin Dash Slash`** (Expertise Skill, Physical, Thunder, Direct DMG, AoE, Melee)
  - *Description*: Enhanced [Link#1554: Raijin Dash], Consume all Thunder Sigils to summon more ferocious lightning, dealing 450% ATK as Attack DMG (which scales with the Level/Tier of [Link#1554: Raijin Dash]). Each Thunder Sigil consumed increases DMG by 25%.
  - **Total DMG**: [Tier G0→G6: 1235% .. 1729% (1235%, 1284.4%, 1333.8%, 1482%, 1531.4%, 1580.8%, 1729%)]ATK+[Lv1→Lv30: 123 .. 4940]
- **`[1737] Divine Sickle`** (Physical, Thunder, Direct DMG, Single Target, Melee)
  - *Description*: Forcefully slashes vertically forward with a scythe wreathed in destructive power, dealing Attack DMG equal to 1500%ATK to the enemies. Scales with the Level/Tier of Basic Attack.
  - **Base DMG**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK +[Lv1→Lv30: 10 .. 400]
  - **Moonblade DMG per hit**: `0% ATK +0`
  - **Moonblade Explosion Damage**: `100% ATK +0`
- **`[1738] Chaos Breaker`** (Special Attack, Physical, Thunder, Direct DMG, Single Target, Melee)
  - *Description*: Enhanced [Link#1507: Moonstrike]. Throws a devastating thunderous cyclone forward, dealing Attack DMG equal to 500% ATK to enemies while gaining full Blade Intent. Scales with the Level/Tier of [Link#1507: Moonstrike].
  - **Thunder Strike DMG per hit**: [Tier G0→G6: 160% .. 224% (160%, 166.4%, 172.8%, 192%, 198.4%, 204.8%, 224%)]ATK +[Lv1→Lv30: 16 .. 640]

---
### อาชีพ [2] Frost Mage

#### Basic Attack (คลิกซ้าย):
- **`[1201] Raincall Surge`** (Basic Attack, Magic, Ice, Direct DMG, Single Target, Ranged)
  - *Description*: Ice Energy | A key resource for unleashing Special Attacks and Expertise Skills. Starts with a maximum of 50 points, regenerating 2 points per second. | | Basic Attack: Raincall Surge | Unleashes up to four consecutive water-based attacks, each dealing Magic Damage. | | Tips: When Ice Energy is low, this skill allows you to deal DMG flexibly as needed.
  - **Strike I**: [Tier G0→G6: 12% .. 16.8% (12%, 12.48%, 12.96%, 14.4%, 14.88%, 15.36%, 16.8%)]MATK +[Lv1→Lv30: 1 .. 72](Resilience Break: 11)
  - **Strike II**: [Tier G0→G6: 12% .. 16.8% (12%, 12.48%, 12.96%, 14.4%, 14.88%, 15.36%, 16.8%)]MATK +[Lv1→Lv30: 1 .. 72](Resilience Break: 11)
  - **Strike III**: [Tier G0→G6: 16% .. 22.4% (16%, 16.64%, 17.28%, 19.2%, 19.84%, 20.48%, 22.4%)]MATK +[Lv1→Lv30: 2 .. 97](Resilience Break: 14)
  - **Strike IV**: [Tier G0→G6: 21% .. 29.37% (21%, 21.84%, 22.68%, 25.2%, 26.04%, 26.88%, 29.37%)]MATK +[Lv1→Lv30: 0 .. 117](Resilience Break: 18)
  - **Red Light Counter**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]MATK +[Lv1→Lv30: 10 .. 400](Resilience Break: 100)

#### Special Skill (ปุ่มเลข 1):
- **`[1242] Frost Lance`** (Special Attack, Magic, Ice, Direct DMG, Single Target, Chanting, Ranged)
  - *Description*: Chants for 1.4s, then consumes 10 Ice Energy to fire a sharp Frost Lance at the target, dealing Magic Damage on impact. | Consuming 1 [Link#1161: Frost Crystal] can skip chanting and increase DMG by 20%. | | Tips: Cast Frost Lance regularly to avoid wasting excess Energy.
  - **Frost Lance Damage**: [Tier G0→G6: 180% .. 252% (180%, 187.2%, 194.4%, 216%, 223.2%, 230.4%, 252%)]MATK +[Lv1→Lv30: 25 .. 1020](Resilience Break: 202)

#### Ultimate Skill (ปุ่ม R):
- **`[1248] Glacier Hymn`** (Ultimate, Magic, Ice, Direct DMG, AoE, Energy Restore, Frozen, Ranged)
  - *Description*: Summons the ice's blessing to unfold an Ice Domain, knocking all enemies back within range. Then summons a comet to strike the targets, dealing Magic DMG and inflicting [Link#1171: Frozen] on all affected enemies. | Ice Domain | Within the Domain, restores 220 Ice Energy over time and gains Ultra Cold. Enemies within the domain are continuously [Link#3011: Slowed] until [Link#1171: Frozen]. | While in Ultra Cold, targets are treated as [Link#1171: Frozen]. | | Tips: Don't use this skill when Ice Energy is about to cap. If you do, burn the Ice Energy quickly afterward. Skills enhanced by the Ultra Cold state are most effective when cast within this skill's duration.
  - **Domain Damage**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]MATK +[Lv1→Lv30: 15 .. 600]
  - **Meteor damage**: [Tier G0→G6: 800% .. 1120% (800%, 832%, 864%, 960%, 992%, 1024%, 1120%)]MATK +[Lv1→Lv30: 120 .. 4800](Resilience Break: 263)
  - **CD**: `60s`

#### Expertise Skills (สกิลเลือกใส่):
- **`[1239] Meteor Storm`** (Expertise Skill, Magic, Ice, Direct DMG, AoE, Ranged)
  - *Description*: Consumes 5 Ice Energy to instantly summon 3 Meteor Storms above the target, dealing Magic Damage to the target and surrounding enemies. | This skill holds 2 charges. | | Tips: This instant-cast DMG skill is best utilized in a highly mobile style of combat to maximize DMG dealt through repeated use.
  - **Total DMG**: [Tier G0→G6: 219.99% .. 307.98% (219.99%, 228.78%, 237.6%, 264%, 272.79%, 281.58%, 307.98%)]MATK +[Lv1→Lv30: 36 .. 1620](Resilience Break: 234)
  - **CD**: `0.5s`
  - **Charge Time**: `15s`
- **`[1211] Crystal Veil`** (Expertise Skill, Magic, Ice, DoT, AoE, Slow, Ranged)
  - *Description*: Casts a slow-moving water orb and gains 1 [Link#1161: Frost Crystal] immediately, and 1 [Link#1161: Frost Crystal] every 3s thereafter. On impact, the orb's velocity decays. While the aqueous orb persists, it continuously deals Magic Damage to all nearby enemies and applies [Link#3003: Frost] to them. | | Ultra Cold: Crystal Veil | While in the Ultra Cold state, the water orb will freeze and violently explode upon ending, dealing higher Magic Damage to all enemies within range. | | This skill holds 2 charges. | | Tips: At least one charge shall be maintained at all times unless Ice Energy overflows. It is recommended to maintain two charges before casting the Ultimate, as combining it with Ultra Cold grants bonus DMG.
  - **Water Ball DMG per hit**: [Tier G0→G6: 8% .. 11.2% (8%, 8.32%, 8.64%, 9.6%, 9.92%, 10.24%, 11.2%)]MATK +[Lv1→Lv30: 1 .. 48](Resilience Break: 3)
  - **Ice Damage**: [Tier G0→G6: 36% .. 50.4% (36%, 37.44%, 38.88%, 43.2%, 44.64%, 46.08%, 50.4%)]MATK +[Lv1→Lv30: 5 .. 216](Resilience Break: 16)
  - **CD**: `25s`
  - **Charge Time**: `25s`
- **`[1244] Blizzard`** (Expertise Skill, Magic, Ice, DoT, AoE, Slow, Chanting, Ranged)
  - *Description*: Chants for 2.9s, then consumes 20 Ice Energy to summon an intense Blizzard at the target location, continuously dealing Magic DMG and applying [Link#3003: Frost] to all enemies within the area. | | Tips: This devastating AoE skill is most effective when used against immobilized enemies to maximize DMG dealt.
  - **Total DMG**: [Tier G0→G6: 558% .. 781.2% (558%, 580.32%, 602.64%, 669.6%, 691.92%, 714.24%, 781.2%)]MATK +[Lv1→Lv30: 72 .. 3294](Resilience Break: 216)
  - **CD**: `30s`
- **`[1210] Maelstrom`** (Expertise Skill, Magic, Ice, DoT, AoE, Slow, Ranged)
  - *Description*: Unleashes a water vortex at the target's feet, continuously dealing Magic DMG to enemies within range. For each target hit, restores 2 Ice Energy, up to 10 Ice Energy per hit. | | Ultra Cold: ​Maelstrom​ | While in the Ultra Cold state, the water vortex will freeze and explode upon ending, dealing higher Magic DMG to all enemies within range. | | Tips: Pair with Frostbeam Spec. Casting at the right moment can restore considerable Ice Energy.
  - **Vortex Total DMG**: [Tier G0→G6: 200% .. 280% (200%, 208%, 216%, 240%, 248%, 256%, 280%)]MATK +[Lv1→Lv30: 20 .. 1200](Resilience Break: 60)
  - **Ice Damage**: [Tier G0→G6: 40% .. 56% (40%, 41.6%, 43.2%, 48%, 49.6%, 51.2%, 56%)]MATK +[Lv1→Lv30: 6 .. 240](Resilience Break: 12)
  - **CD**: `15s`
- **`[1240] Frozen Gale`** (Expertise Skill, Magic, Ice, Direct DMG, AoE, Chanting, Frozen, Ranged)
  - *Description*: Unleashes built-up cold energy in a violent surge, dealing Magic Damage and inflicting [Link#1171: Frozen] on nearby enemies. | Charging the skill alters both its range and DMG. | Tier 1: Chants for 1s, targeting an 8m frontal cone. | Tier 2: Chants for 2s, targeting an 8m frontal cone with 50% increased DMG. | Tier 3: Chants for 3s, targeting an 8m frontal cone with 100% increased DMG. | When holding 1/3/5 [Link#1161: Frost Crystal], the skill will instantly cast at Tier 1/2/3, skipping the charge time. | | Tips: This skill offers both area damage and crowd control. For best results, cast it when you have high Frost Crystal count.
  - **Base DMG**: [Tier G0→G6: 175% .. 245% (175%, 182%, 189%, 210%, 217%, 224%, 245%)]MATK +[Lv1→Lv30: 26 .. 1050](Resilience Break: 83)
  - **CD**: `30s`
- **`[1243] Permafrost`** (Expertise Skill, Haste, Energy Restore)
  - *Description*: Summons the power of frost, gaining Super Armor for the duration while accumulating 6 Ice Energy per second and increasing Haste. | | Tips: Increases Attack SPD and Casting SPD. Since this skill generates Ice Energy, don't use it when Ice Energy is about to cap. If you do, burn the Ice Energy quickly afterward.
  - **Haste bonus**: [Tier G0→G6: 15% .. 21% (15%, 15.6%, 16.2%, 18%, 18.6%, 19.2%, 21%)]+[Lv1→Lv30: 800 .. 1040]
  - **Duration**: `10s`
  - **CD**: `45s`
- **`[1246] Tidepool`** (Expertise Skill, Magic, Ice, DoT, AoE, Channelling, Ranged)
  - *Description*: Summons a surging Tidal Vortex at the target location, dealing Magic DMG on impact. Channels for 5s after casting. Recast to end early. | | Ultra Cold: Tidepool | In the Ultra Cold state, the vortex freezes and violently explodes upon ending, dealing higher Magic DMG to all enemies within range. | | Tips: You cannot move or cast other skills while channeling. Best paired with allies' AoE skills in coordinated attacks.
  - **Tidal Vortex DMG per hit**: [Tier G0→G6: 103.2% .. 144.48% (103.2%, 107.32%, 111.45%, 123.84%, 127.96%, 132.09%, 144.48%)]MATK +[Lv1→Lv30: 12 .. 514](Resilience Break: 6)
  - **Ice Damage**: [Tier G0→G6: 288% .. 403.2% (288%, 299.52%, 311.04%, 345.6%, 357.12%, 368.64%, 403.2%)]MATK +[Lv1→Lv30: 36 .. 1440](Resilience Break: 17)
  - **CD**: `30s`
- **`[1245] Frost Shelter`** (Expertise Skill, Magic, Ice, Direct DMG, AoE, Protect, Frozen)
  - *Description*: Encases yourself in ice, rendering you immune to all DMG but immobilized for the duration. Deals Magic Damage to all nearby enemies, and inflicts [Link#3011: Slow] until they are [Link#1171: Frozen]. | | Tips: Equip this skill in high-pressure situations to increase survivability.
  - **Total DMG**: [Tier G0→G6: 150% .. 210% (150%, 156%, 162%, 180%, 186%, 192%, 210%)]MATK +[Lv1→Lv30: 18 .. 900]
  - **Duration**: `5s`
  - **Charge Time**: `45s`

#### Talent / Proc / Passive Skills (สกิลเสริมจากสาย Talent):
- **`[1241] Frostbeam`** (Special Attack, Magic, Ice, Direct DMG, AoE, Ranged)
  - *Description*: Consumes 15 Ice Energy to launch a concentrated ice beam toward the target, dealing Magic Damage to all enemies in its path every 0.3s. After dealing DMG 5 instances, the beam attempts to consume additional Ice Energy to sustain itself. Every 12 Ice Energy extends the beam by 0.3s and deals 1 additional instance of DMG. Each time Frostbeam deals DMG, it increases its own DMG by 8%, up to 80%. (Terminates when Ice Energy drops below 3.) | Frostbeam's firing interval is affected by Haste. | | Tips: Cast when Ice Energy is near maximum capacity for extended beam duration. While firing, use the joystick to make minor positioning adjustments.
  - **Ray DMG per hit**: [Tier G0→G6: 30% .. 42% (30%, 31.2%, 32.4%, 36%, 37.2%, 38.4%, 42%)]MATK +[Lv1→Lv30: 3 .. 150](Resilience Break: 15)

---
### อาชีพ [3] Twin Striker

#### Basic Attack (คลิกซ้าย):
- **`[1601] Blazing Swing`** (Basic Attack, Physical, Fire, Direct DMG, Single Target, Melee)
  - *Description*: Basic Attack: Scorching Swing | Executes a sequence of up to four attacks, dealing Attack DMG and recovering 3 Flame Soul. | | Tips: Fill the gaps with Basic Attacks when Flame Soul is too low for other offensive skills.
  - **Strike I**: [Tier G0→G6: 15% .. 21% (15%, 15.6%, 16.2%, 18%, 18.6%, 19.2%, 21%)]ATK +[Lv1→Lv30: 1 .. 60](Resilience Break: 18)
  - **Strike II**: [Tier G0→G6: 20% .. 28% (20%, 20.8%, 21.6%, 24%, 24.8%, 25.6%, 28%)]ATK +[Lv1→Lv30: 2 .. 80](Resilience Break: 24)
  - **Strike III**: [Tier G0→G6: 31% .. 43.4% (31%, 32.24%, 33.48%, 37.2%, 38.44%, 39.68%, 43.4%)]ATK +[Lv1→Lv30: 1 .. 120](Resilience Break: 36)
  - **Strike IV**: [Tier G0→G6: 35% .. 49% (35%, 36.4%, 37.8%, 42%, 43.4%, 44.8%, 49%)]ATK +[Lv1→Lv30: 3 .. 140](Resilience Break: 42)
  - **Red Light Counter**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK +[Lv1→Lv30: 10 .. 400](Resilience Break: 100)

#### Special Skill (ปุ่มเลข 1):
- **`[1605] Blazing Ascension`** (Special Attack, Physical, Fire, Direct DMG, Single Target, Melee)
  - *Description*: Wielding the battle axe, spins to continuously attack targets in front, dealing Attack DMG and recovering 15 Flame Soul. | | Strategy: The most basic skill for increasing Formless level. Alternate use with other Expertise Skills.
  - **Total DMG**: [Tier G0→G6: 400% .. 560% (400%, 416%, 432%, 480%, 496%, 512%, 560%)]ATK +[Lv1→Lv30: 40 .. 1600](Resilience Break: 200)
  - **CD**: `3s`

#### Ultimate Skill (ปุ่ม R):
- **`[1618] Cinderfall! Hellfire Shiranui`** (Ultimate, Physical, Fire, Direct DMG, Single Target, Melee)
  - *Description*: Gains the Surge effect and immediately restores all Flame Soul. During this effect, Expertise Skill CD Boost is increased by 10%. Uses Dual Axes to launch enemies into the air, then performs a lethal spiraling aerial attack that rends through them, dealing Attack DMG to all enemies below. | | Tips: Maintain a faster skill rotation.
  - **Total DMG**: [Tier G0→G6: 1000% .. 1400% (1000%, 1040%, 1080%, 1200%, 1240%, 1280%, 1400%)]ATK +[Lv1→Lv30: 100 .. 4000](Resilience Break: 900)
  - **CD**: `60s`

#### Expertise Skills (สกิลเลือกใส่):
- **`[1607] Blazing Assault`** (Expertise Skill, Physical, Fire, Direct DMG, Single Target, Melee)
  - *Description*: Continuously swings the battle axe left and right to attack the target, dealing Attack DMG and recovering 10 Flame Soul. | This skill holds 2 charges. | | Strategy: Make full use of the short CD and 2 charges. Combining it with Blazing Ascension can quickly increase Formless level.
  - **Total DMG**: [Tier G0→G6: 500% .. 700% (500%, 520%, 540%, 600%, 620%, 640%, 700%)]ATK +[Lv1→Lv30: 50 .. 2000](Resilience Break: 200)
  - **Charge Time**: `18s`
- **`[1608] Rage Cleave`** (Expertise Skill, Physical, Fire, Direct DMG, Single Target, Melee)
  - *Description*: With superb technique, continuously unleashes storm-like slashes on the target, dealing Attack DMG and consuming 85 Flame Soul. The skill can be cast again within 2s of the previous instance ending, up to a maximum of 4 times. | | Strategy: High cost makes it unsuitable for increasing Formless level. It is usually used as the main damage dealer after Formless reaches maximum.
  - **Strike I**: [Tier G0→G6: 720% .. 1008% (720%, 748.8%, 777.6%, 864%, 892.8%, 921.6%, 1008%)]ATK +[Lv1→Lv30: 72 .. 2880](Resilience Break: 240)
  - **Strike II**: [Tier G0→G6: 900% .. 1259.98% (900%, 936%, 972%, 1080%, 1116%, 1152%, 1259.98%)]ATK +[Lv1→Lv30: 90 .. 3600](Resilience Break: 300)
  - **Strike III**: [Tier G0→G6: 900% .. 1259.98% (900%, 936%, 972%, 1080%, 1116%, 1152%, 1259.98%)]ATK +[Lv1→Lv30: 90 .. 3600](Resilience Break: 300)
  - **Strike IV**: [Tier G0→G6: 1080% .. 1512% (1080%, 1123.2%, 1166.4%, 1296%, 1339.2%, 1382.4%, 1512%)]ATK +[Lv1→Lv30: 108 .. 4320](Resilience Break: 360)
  - **CD**: `20s`
- **`[1612] Axe Wind`** (Expertise Skill, Physical, Fire, Direct DMG, Single Target, Melee)
  - *Description*: Wields the weapon like a whirlwind, dealing Attack DMG to targets within 3 meters. Each spin consumes 260 Stamina. Tap again while skill is active to end it. | | Strategy: Stamina must be reasonably allocated between damage output and survivability. When safe, it can be used more for dealing damage and increasing Formless level.
  - **DMG per hit**: [Tier G0→G6: 220% .. 307.99% (220%, 228.8%, 237.6%, 264%, 272.8%, 281.6%, 307.99%)]ATK +[Lv1→Lv30: 22 .. 880](Resilience Break: 50)
  - **CD**: `5s`
- **`[1613] Wildfire Dance`** (Expertise Skill, Physical, Fire, Direct DMG, Single Target, Melee)
  - *Description*: Unleashes an ultra-high-speed flurry. Each round consumes 50 Flame Soul, 25% of the Crimson Soul Gauge, or 25% of Max HP to deal Attack DMG to all enemies within 3 meters. | Prioritizes consuming Flame Soul, then Crimson Soul Gauge, then HP. Cannot be cast if HP is below 50%. Tap again while the skill is active to end it. | | Strategy: The absolute core skill of Crimson Spec. Accumulate as much Flame Soul and Crimson Soul Gauge as possible to sustain its use. Observe play while casting to interrupt it at any time for survival.
  - **DMG per hit**: [Tier G0→G6: 150% .. 210% (150%, 156%, 162%, 180%, 186%, 192%, 210%)]ATK +[Lv1→Lv30: 15 .. 600](Resilience Break: 50)
- **`[1614] Unbound Meteor`** (Expertise Skill, Physical, Fire, Direct DMG, Single Target, Melee)
  - *Description*: Releases power to perform a powerful leaping cleave at the target, dealing Attack DMG to enemies within 4 meters of the landing point. Upon landing, creates Crimson Earth, which deals additional Attack DMG to all enemies within 4 meters over 5s, and restores 15 Flame Soul. | | Tips: Use to engage targets and restore Flame Soul. Cast in advance when burst damage is needed to remain within Crimson Earth.
  - **Total DMG**: [Tier G0→G6: 480% .. 672% (480%, 499.2%, 518.4%, 576%, 595.2%, 614.4%, 672%)]ATK +[Lv1→Lv30: 48 .. 1920](Resilience Break: 150)
  - **Fire Area DMG per hit**: [Tier G0→G6: 20% .. 28% (20%, 20.8%, 21.6%, 24%, 24.8%, 25.6%, 28%)]ATK +[Lv1→Lv30: 2 .. 80]
  - **CD**: `10s`
- **`[1615] Wasteland's End`** (Expertise Skill, Haste)
  - *Description*: Imbues the power of fire, granting a Class Skills CD Boost and increased Haste while active. | | Strategy: Use when Formless reaches A or S to maximize benefits during the burst window.
  - **Duration**: `15s`
  - **CD**: `45s`
- **`[1616] Flowing Splendor Slash`** (Expertise Skill, Physical, Fire, Direct DMG, Single Target, Melee)
  - *Description*: Consumes 50 Flame Soul to unleash a powerful cross-shaped energy slash forward. The slash travels forward for a set duration, dealing Attack DMG to all enemies along its path. 100% of the DMG dealt to the primary target is converted into HP. Also grants 50% Life Steal for a certain duration. | | Tips: Combine with rapid Crimson Soul Gauge buildup and gain additional recovery when HP is low.
  - **Total DMG**: [Tier G0→G6: 600% .. 840% (600%, 624%, 648%, 720%, 744%, 768%, 840%)]ATK +[Lv1→Lv30: 60 .. 2400](Resilience Break: 260)
  - **Charge Time**: `12s`
- **`[1617] Endless Hellfire`** (Expertise Skill, Crit)
  - *Description*: Becomes frenzied, increasing all Flame Soul generated by 100%, and temporarily granting increased Crit. | | Strategy: Must maintain during the burst window.
  - **Duration**: `15s`
  - **CD**: `45s`

---
### อาชีพ [4] Wind Knight

#### Basic Attack (คลิกซ้าย):
- **`[1401] Windborne Grace`** (Basic Attack, Physical, Wind, Direct DMG, Single Target, Melee)
  - *Description*: Courage | A key resource for unleashing Special Attacks and select Expertise Skills. Regenerates 3 points per second, with a starting maximum of 100. | | Basic Attack: Windborne Grace | Executes a sequence of up to four attacks, dealing Attack DMG | | Tips: Fill the gaps with Basic Attacks when Courage is too low for other offensive skills.
  - **Strike I**: [Tier G0→G6: 30% .. 42% (30%, 31.2%, 32.4%, 36%, 37.2%, 38.4%, 42%)]ATK +[Lv1→Lv30: 3 .. 120](Resilience Break: 9)
  - **Strike II**: [Tier G0→G6: 50% .. 70% (50%, 52%, 54%, 60%, 62%, 64%, 70%)]ATK +[Lv1→Lv30: 4 .. 200](Resilience Break: 16)
  - **Strike III**: [Tier G0→G6: 54% .. 75.6% (54%, 56.16%, 58.32%, 64.8%, 66.96%, 69.12%, 75.6%)]ATK +[Lv1→Lv30: 3 .. 216](Resilience Break: 15)
  - **Strike IV**: [Tier G0→G6: 66% .. 92.4% (66%, 68.64%, 71.28%, 79.2%, 81.84%, 84.48%, 92.4%)]ATK +[Lv1→Lv30: 6 .. 264](Resilience Break: 21)
  - **Red Light Counter**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK +[Lv1→Lv30: 10 .. 400](Resilience Break: 100)

#### Special Skill (ปุ่มเลข 1):
- **`[1418] Gale Thrust`** (Special Attack, Physical, Wind, Direct DMG, Single Target, Melee)
  - *Description*: Consumes 50 Courage to perform 3 thrusts toward the enemy, dealing Attack DMG with each hit. | | Tips: Time casts carefully, and use this skill between Basic Attacks, as Courage takes time to accumulate.
  - **Total DMG**: [Tier G0→G6: 148% .. 207.2% (148%, 153.92%, 159.84%, 177.6%, 183.52%, 189.44%, 207.2%)]ATK +[Lv1→Lv30: 14 .. 600](Resilience Break: 148)

#### Ultimate Skill (ปุ่ม R):
- **`[1426] Typhoon Cleave`** (Ultimate, Physical, Wind, Direct DMG, AoE, Energy Restore, Melee)
  - *Description*: Launches into enemy lines, dealing Attack DMG to enemies in range and knocking them Airborne. Restores 100 Courage. | "Endless storm, unlock thy mighty power at my knight's command! Wind, reveal thy glory with a surging rush!" | | Tips: Cast when Courage is low.
  - **Total DMG**: [Tier G0→G6: 650% .. 910% (650%, 676%, 702%, 780%, 806%, 832%, 910%)]ATK +[Lv1→Lv30: 65 .. 2600](Resilience Break: 358)
  - **CD**: `60s`

#### Expertise Skills (สกิลเลือกใส่):
- **`[1420] Galeform`** (Expertise Skill, Physical, Wind, Direct DMG, Single Target, Energy Restore, Increased Damage, Melee)
  - *Description*: Stuns enemies in front upon casting, dealing Attack DMG. While active, continuously restores 105 Courage and increases your Strength. | This skill holds 2 charges. | | Tips: Cast when Courage is low.
  - **Total DMG**: [Tier G0→G6: 50% .. 70% (50%, 52%, 54%, 60%, 62%, 64%, 70%)]ATK +[Lv1→Lv30: 5 .. 200]
  - **Strength Bonus**: [Tier G0→G6: 30% .. 38% (30%, 30.8%, 31.6%, 34%, 34.8%, 35.6%, 38%)]+[Lv1→Lv30: 20 .. 175]
  - **Duration**: `15s`
  - **CD**: `30s`
  - **Charge Time**: `30s`
- **`[1421] Spiral Thrust`** (Expertise Skill, Physical, Wind, Direct DMG, Single Target, Melee)
  - *Description*: Consumes 30 Courage to reel in the spinning lance and unleash a final piercing strike. The spiraling gust tears through the air, dealing sustained Attack DMG to enemies within range. The initial strike inflicts a 50% [Link#3004: Wound] on the target, lasting 10s. | | Tips: Whenever you have enough Courage, use it on your most important skill.
  - **Total DMG**: [Tier G0→G6: 497% .. 695.8% (497%, 516.88%, 536.76%, 596.4%, 616.28%, 636.16%, 695.8%)]ATK +[Lv1→Lv30: 49 .. 1995](Resilience Break: 357)
  - **CD**: `20s`
- **`[1422] Breach Pursuit`** (Expertise Skill, Physical, Wind, Direct DMG, AoE, Melee)
  - *Description*: Lunges toward the enemy, dealing Attack DMG and gaining 15 Courage. Can be cast again to unleash a sweeping slash, dealing Attack DMG to all nearby enemies and knocking them Airborne. Targets with Resilience cannot be knocked airborne but will have their Resilience reduced. Additionally, gains 10 Courage for each enemy hit, up to a maximum of 50 Courage. | | Tips: Equip when facing multiple enemies.
  - **Strike I**: [Tier G0→G6: 70% .. 98% (70%, 72.8%, 75.6%, 84%, 86.8%, 89.6%, 98%)]ATK +[Lv1→Lv30: 7 .. 280](Resilience Break: 89)
  - **Strike II**: [Tier G0→G6: 130% .. 182% (130%, 135.2%, 140.4%, 156%, 161.2%, 166.4%, 182%)]ATK +[Lv1→Lv30: 13 .. 520](Resilience Break: 166)
  - **CD**: `12s`
- **`[1425] Falcon Toss`** (Expertise Skill, Physical, Wind, Direct DMG, Single Target, Stagger, Melee)
  - *Description*: Consumes 40 Courage to leap into the air and hurl a wind-forged spear with force. Deals Attack DMG to all enemies in range and greatly reduces their Resilience. Grants 1 stack of Sharp. | | Tips: Effective against enemies with Resilience. Also recommended when dealing with multiple targets.
  - **Charge Damage**: [Tier G0→G6: 75% .. 105% (75%, 78%, 81%, 90%, 93%, 96%, 105%)]ATK +[Lv1→Lv30: 7 .. 300](Resilience Break: 94)
  - **Spear Damage**: [Tier G0→G6: 500% .. 700% (500%, 520%, 540%, 600%, 620%, 640%, 700%)]ATK +[Lv1→Lv30: 50 .. 2000](Resilience Break: 631)
  - **CD**: `0.5s`
  - **Charge Time**: `23s`
- **`[1424] Instant Edge`** (Expertise Skill, Physical, Wind, Direct DMG, Single Target, Melee)
  - *Description*: Consumes 2 stacks of Sharp to leap into the air and deliver a powerful aerial strike, dealing Attack DMG. | | Tips: Combo with Skyward Spec. Cast when Courage is low to prevent overcapping and wasting Courage regeneration.
  - **Total DMG**: [Tier G0→G6: 360% .. 504% (360%, 374.4%, 388.8%, 432%, 446.4%, 460.8%, 504%)]ATK +[Lv1→Lv30: 34 .. 1437](Resilience Break: 523)
- **`[1430] Valor Cyclone`** (Expertise Skill, Physical, Wind, DoT, AoE, Melee)
  - *Description*: Converts Courage into a sustained wind field, dealing Attack DMG to nearby enemies until Courage runs out, using 16 Courage per second. The skill may be deactivated by clicking again. | | Tips: Cast at full Courage and regain Courage during Valor Cyclone to extend duration.
  - **DMG per hit**: [Tier G0→G6: 150% .. 210% (150%, 156%, 162%, 180%, 186%, 192%, 210%)]ATK +[Lv1→Lv30: 18 .. 720]
  - **CD**: `7s`
- **`[1431] Sharp Impact`** (Expertise Skill, Physical, Wind, Direct DMG, AoE, Melee)
  - *Description*: Leaps into the air and crashes down, dealing massive Attack DMG to the target and surrounding enemies. Each stack of Sharp consumed charges the skill for 5%. | | Tips: Sharp Impact deals massive DMG. Consume as much Sharp as possible within a fixed time window to maximize DMG.
  - **Total DMG**: [Tier G0→G6: 600% .. 840% (600%, 624%, 648%, 720%, 744%, 768%, 840%)]ATK +[Lv1→Lv30: 60 .. 2400](Resilience Break: 1231)
  - **CD**: `1s`
- **`[1423] Aegis Gale`** (Expertise Skill, Physical, Wind, Direct DMG, Single Target, Block, Melee)
  - *Description*: Condenses wind pressure in front of the caster, rendering the caster immune to all DMG. Counterattack DMG is incrementally amplified with each incoming attack, dealing Attack DMG in retaliation. | | Tips: This skill is intended to be used in high-pressure situations to increase chances of survival. The more frequent enemy attack, the more this skill brings you.
  - **Base DMG**: [Tier G0→G6: 150% .. 210% (150%, 156%, 162%, 180%, 186%, 192%, 210%)]ATK +[Lv1→Lv30: 15 .. 600]
  - **CD**: `30s`

#### Talent / Proc / Passive Skills (สกิลเสริมจากสาย Talent):
- **`[1409] Typhoon Cleave`** (Ultimate, Physical, Wind, Direct DMG, AoE, Melee)
  - *Description*: Launches into enemy lines, dealing Attack DMG to enemies in range and knocking them Airborne. Restores 100 Courage. | | "Endless storm, unlock thy mighty power at my knight's command! Wind, reveal thy glory with a surging rush!" | | Tips: Cast when Courage is low.
- **`[1410] Typhoon Cleave`** (Ultimate, Physical, Wind, Direct DMG, AoE, Energy Restore, Melee)
  - *Description*: Raises the banner spear, granting Inspire to allies. Afterward, a follow-up leap can be launched, dealing Attack DMG to the enemies within range and knocking them airborne, while restoring 100 Courage. | Inspire: Lasts for 10s. During this time, all allies' Haste +10%. You restore 10 Courage per second and 1 stack of Sharp every 2s. | "Endless storm, unlock thy mighty power at my knight's command! Wind, reveal thy glory with a surging rush! Manifest in the wind! | | Tips: Cast when Courage is low.
  - **Total DMG**: [Tier G0→G6: 650% .. 910% (650%, 676%, 702%, 780%, 806%, 832%, 910%)]ATK +[Lv1→Lv30: 65 .. 2600](Resilience Break: 358)
  - **CD**: `60s`
- **`[1411] Swift Blade`** ()
  - *Description*: Deals Attack DMG equal to 100% ATK to all the enemies, which scales with the Level/Tier of Basic Attack. | Restores 10 Courage immediately upon use.
- **`[1419] Skyfall`** (Special Attack, Physical, Wind, Direct DMG, Single Target, Melee)
  - *Description*: Consumes 35 Courage to leap into the air and deliver a downward strike on the enemy, dealing Attack DMG. | "Even if enemy lines are unbreakable, the wind of victory will tear them asunder!" | | Tips: Cast when Courage is near cap. When casting in succession, the leap is skipped for faster follow-up attacks.
  - **Total DMG**: [Tier G0→G6: 175% .. 245% (175%, 182%, 189%, 210%, 217%, 224%, 245%)]ATK +[Lv1→Lv30: 15 .. 600](Resilience Break: 233)
- **`[1433] Falcon Strike`** (Expertise Skill, Physical, Wind, Direct DMG, Single Target, Stagger, Melee)
  - *Description*: Enhanced [Link#1524: Falcon Toss], leap into the air and gather wind power, launching a fierce wind blade spear. Deals 750% ATK as Attack DMG to all enemies in the area and significantly reduces their tenacity, growing with the upgrade/advancement of the [Link#1524: Falcon Toss] skill. | Immediately gain 3 stacks of [Link#1152: Sharp] after Casting .
  - **Charge Damage**: [Tier G0→G6: 112% .. 156.79% (112%, 116.48%, 120.96%, 134.4%, 138.88%, 143.36%, 156.79%)]ATK +[Lv1→Lv30: 11 .. 450](Resilience Break: 140)
  - **Spear Damage**: [Tier G0→G6: 750% .. 1050% (750%, 780%, 810%, 900%, 930%, 960%, 1050%)]ATK +[Lv1→Lv30: 75 .. 3000](Resilience Break: 937)
- **`[1434] Vortex Strike`** (Expertise Skill, Physical, Wind, Direct DMG, AoE, Melee)
  - *Description*: Empowered [Link#1523: Spiral Thrust] unleashes a final strike, dealing Attack DMG equal to 1265% ATK (which scales with the Level/Tier of [Link#1523: Spiral Thrust]).
  - **Total DMG**: [Tier G0→G6: 1265% .. 1771% (1265%, 1315.6%, 1366.2%, 1518%, 1568.6%, 1619.2%, 1771%)]ATK +[Lv1→Lv30: 125 .. 5059](Resilience Break: 431)
- **`[1435] Drake Cannon`** (Basic Attack, Physical, Wind, Direct DMG, AoE, Melee)
  - *Description*: A thrust followed by a backward leap releasing strong wind pressure, dealing Attack DMG equal to 380% ATK to enemies (which scales with the Level/Tier of Basic Attack). | After casting, immediately restores 20 Courage.
  - **Total DMG**: [Tier G0→G6: 380% .. 532% (380%, 395.2%, 410.4%, 456%, 471.2%, 486.4%, 532%)]ATK +[Lv1→Lv30: 37 .. 1519](Resilience Break: 279)

---
### อาชีพ [5] Verdant Oracle

#### Basic Attack (คลิกซ้าย):
- **`[1501] Vines' Embrace`** (Basic Attack, Magic, Forest, Direct DMG, Single Target, Ranged)
  - *Description*: Energy | A vital resource needed to perform Special Attacks and select Expertise. Regenerates 4 points per second, with a starting maximum of 100 points. | | Basic Attack: Vine's Grip | Executes a sequence of up to four attacks, dealing Magic DMG. | | Tips: Fill the gap with Basic Attacks when Energy is too low to for other offensive abilities.
  - **Strike I**: [Tier G0→G6: 9% .. 12.6% (9%, 9.36%, 9.72%, 10.8%, 11.16%, 11.52%, 12.6%)]MATK +[Lv1→Lv30: 1 .. 54](Resilience Break: 8)
  - **Strike II**: [Tier G0→G6: 16% .. 22.4% (16%, 16.64%, 17.28%, 19.2%, 19.84%, 20.48%, 22.4%)]MATK +[Lv1→Lv30: 2 .. 88](Resilience Break: 12)
  - **Strike III DMG per hit**: [Tier G0→G6: 8% .. 11.2% (8%, 8.32%, 8.64%, 9.6%, 9.92%, 10.24%, 11.2%)]MATK +[Lv1→Lv30: 1 .. 48](Resilience Break: 7)
  - **Strike IV**: [Tier G0→G6: 20% .. 28% (20%, 20.8%, 21.6%, 24%, 24.8%, 25.6%, 28%)]MATK +[Lv1→Lv30: 2 .. 118](Resilience Break: 18)
  - **Red Light Counter**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]MATK +[Lv1→Lv30: 10 .. 400](Resilience Break: 100)

#### Special Skill (ปุ่มเลข 1):
- **`[1518] Wild Bloom`** (Special Attack, Magic, Forest, Direct DMG, Direct Healing, Single Target, Ranged)
  - *Description*: Consumes 20 Energy to summon a giant vine that strikes a target area, dealing Magic DMG and healing the caster and the nearby ally with the lowest HP (Party Members Prioritized). Healing grows with MATK. | | Use on demand in emergencies. For better results, pair with offensive skills to trigger Symbiotic Marks and boost effectiveness.
  - **Total DMG**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]MATK +[Lv1→Lv30: 15 .. 600](Resilience Break: 62)
  - **Total Healing**: [Tier G0→G6: 50% .. 70% (50%, 52%, 54%, 60%, 62%, 64%, 70%)]MATK +[Lv1→Lv30: 20 .. 800]
  - **CD**: `2s`

#### Ultimate Skill (ปุ่ม R):
- **`[1509] Divine Circle Bloom`** (Ultimate, Magic, Forest, Direct DMG, HoT, AoE, Protect, Ranged)
  - *Description*: Creates a barrier using the forest power. When the barrier forms, it continuously deals Magic DMG to nearby enemies. The caster and up to 10 nearby allies receive 25% DMG Reduction and HOT while inside the barrier. | | Tips: Great for easing pressure on the party. Cast before incoming DMG. Requires solid timing awareness.
  - **Expand Damage**: [Tier G0→G6: 125% .. 175% (125%, 130%, 135%, 150%, 155%, 160%, 175%)]MATK +[Lv1→Lv30: 18 .. 750]
  - **DoT**: [Tier G0→G6: 125% .. 175% (125%, 130%, 135%, 150%, 155%, 160%, 175%)]MATK +[Lv1→Lv30: 15 .. 750]
  - **HOT**: [Tier G0→G6: 250% .. 350% (250%, 260%, 270%, 300%, 310%, 320%, 350%)]MATK +[Lv1→Lv30: 25 .. 1000]
  - **CD**: `60s`

#### Expertise Skills (สกิลเลือกใส่):
- **`[1519] Feral Seed`** (Expertise Skill, Magic, Forest, Direct DMG, Single Target, Energy Restore, Ranged)
  - *Description*: Summons a seed to strike enemies, dealing Magic DMG and reducing their Move SPD by 30%. While dealing DMG, the seed restores a total of 30 Energy. | This skill holds 2 charges. | | Tips: Casting is advised when Energy is low.
  - **Total DMG**: [Tier G0→G6: 180% .. 251.99% (180%, 187.2%, 194.4%, 216%, 223.2%, 230.4%, 251.99%)]MATK +[Lv1→Lv30: 26 .. 1080](Resilience Break: 221)
  - **CD**: `15s`
  - **Charge Time**: `15s`
- **`[1520] Infusion`** (Expertise Skill, Magic, Forest, Direct DMG, Single Target, Channelling, Ranged)
  - *Description*: Consumes 30 Energy to channel a seed barrage for 5.9s, dealing Magic DMG to enemies. You can move while channeling. | | Tips: Great for solo play or filling DMG gaps.
  - **Seed Damage**: [Tier G0→G6: 45% .. 63% (45%, 46.8%, 48.6%, 54%, 55.8%, 57.6%, 63%)]MATK +[Lv1→Lv30: 6 .. 272](Resilience Break: 32)
  - **CD**: `22s`
- **`[1522] Nourish`** (Expertise Skill, Magic, Forest, HoT, AoE)
  - *Description*: Consumes 20 Energy to imbue the caster and up to 10 nearby allies (prioritizing teammates) with the forest power for 10s, healing them every second (Interval affected by Haste). | | Tips: Cast after combat begins to provide steady team-wide healing over time.
  - **Single Healing**: [Tier G0→G6: 25% .. 35% (25%, 26%, 27%, 30%, 31%, 32%, 35%)]MATK +[Lv1→Lv30: 2 .. 100]
  - **CD**: `15s`
- **`[1523] Regen Pulse`** (Expertise Skill, Magic, Forest, Direct Healing, AoE, Chanting)
  - *Description*: Chants for 2.3s, then consumes 40 Energy to release a pulse from the caster. The pulse heals the caster and all affected allies. | | Tips: In AoE-heavy healing encounters, use this skill carefully to avoid wasting its dispel and putting it on CD too early.
  - **Total Healing**: [Tier G0→G6: 120% .. 168% (120%, 124.8%, 129.6%, 144%, 148.8%, 153.6%, 168%)]MATK+[Lv1→Lv30: 12 .. 480]
  - **CD**: `20s`
- **`[1521] Grove Wish`** (Expertise Skill, Magic, Forest, Direct Healing, AoE, Channelling)
  - *Description*: Consumes 40 Energy to channel the power of forest for 4s, healing the caster and up to 10 nearby allies over time (party members prioritized). Healing scales with the caster's MATK (plus an additional fixed amount equal to 15% of the target's Max HP), and healing targets also gain 15% All Element Resistance for 10s. | | Tips: A strong healing skill for high-pressure moments. Since it requires channeling, time your cast carefully.
  - **Total Healing**: [Tier G0→G6: 340% .. 476% (340%, 353.6%, 367.2%, 408%, 421.6%, 435.2%, 476%)]MATK +[Lv1→Lv30: 32 .. 1360]
  - **CD**: `20s`
- **`[1531] Nature Ward`** (Expertise Skill, Shield)
  - *Description*: Grants a Nature Shield to the caster and up to 10 nearby allies. | | Tips: Great for high-pressure moments, helping stabilize the party. Pairs well with Smite Spec Talents for healing allies.
  - **Shield**: [Tier G0→G6: 400% .. 560% (400%, 416%, 432%, 480%, 496%, 512%, 560%)]MATK +[Lv1→Lv30: 40 .. 1600]
  - **Extra Shield Amount**: [Tier G0→G6: 12% .. 18% (12%, 12.6%, 13.2%, 15%, 15.6%, 16.2%, 18%)]increases target max HP
  - **CD**: `45s`
  - **Charge Time**: `45s`
- **`[1529] Blossom Charge`** (Expertise Skill, Magic, Forest, Direct DMG, Direct Healing, AoE, Stun, Melee)
  - *Description*: Unleashes vines, inflicting [Link#3005: Stun] on surrounding enemies while dealing Magic DMG, and restoring HP to friendly targets around you. | | Tips: This is an instant cast skill. Paired with Lifebind Spec talents, it provides good damaging and healing capabilities in combats requiring continuous movement.
  - **Total DMG**: [Tier G0→G6: 60% .. 84% (60%, 62.4%, 64.8%, 72%, 74.4%, 76.8%, 84%)]MATK +[Lv1→Lv30: 9 .. 360](Resilience Break: 193)
  - **Total Healing**: [Tier G0→G6: 60% .. 84% (60%, 62.4%, 64.8%, 72%, 74.4%, 76.8%, 84%)]MATK +[Lv1→Lv30: 6 .. 240]
  - **CD**: `12s`
  - **Charge Time**: `12s`
- **`[1524] Fast Growth`** (Expertise Skill, Acceleration)
  - *Description*: Applies an acceleration effect to the caster. Increases MATK and reduces CD while active. | | Tips: Cast when other skills are on CD .
  - **CD decrease**: [Tier G0→G6: 15% .. 35% (15%, 17%, 19%, 25%, 27%, 29%, 35%)]
  - **MATK bonus**: [Lv1→Lv30: 15 .. 160]
  - **Duration**: `7s`
  - **CD**: `45s`

#### Talent / Proc / Passive Skills (สกิลเสริมจากสาย Talent):
- **`[1507] Life Bloom`** (Special Attack, Magic, Forest, Direct Healing, Single Target, Chanting)
  - *Description*: Chants for 1.8s, then consumes 30 Energy to heal the caster and up to 10 nearby allies (Party Members Prioritized). Healing grows with MATK. | | Tips: In emergencies, cast repeatedly for fast healing. Otherwise, use Basic Attacks to stack Regen Buds, boosting Bloom's healing.
  - **Total Healing**: [Tier G0→G6: 70% .. 98% (70%, 72.8%, 75.6%, 84%, 86.8%, 89.6%, 98%)]MATK +[Lv1→Lv30: 7 .. 280]
- **`[1525] Stag Charge`** ()
  - *Description*: Deals Magic DMG equal to 500% ATK to enemies hit along the path, and heals allies hit for 100% ATK. Scales with the Level/Tier of Special attack. Casting it immediately refreshes Infusion.
- **`[1527] Bloomheal`** (Ultimate, Magic, Forest, Direct DMG, Direct Healing, AoE, Ranged)
  - *Description*: Channels for 6s, summoning falling seeds every 0.5s to deal magic dmg to nearby enemies. At the same time, heals up to 10 nearby allies (prioritizing teammates) and grants them 25% DMG Reduction.
  - **Total DMG**: [Tier G0→G6: 1800% .. 2520% (1800%, 1872%, 1944%, 2160%, 2232%, 2304%, 2520%)]MATK +[Lv1→Lv30: 264 .. 10800]
  - **Total Healing**: [Tier G0→G6: 600% .. 840% (600%, 624%, 648%, 720%, 744%, 768%, 840%)]MATK +[Lv1→Lv30: 60 .. 2400]
  - **CD**: `60s`
- **`[1528] Vital Surge`** (Ultimate, Acceleration)
  - *Description*: Immediately resets the CD of Healing Expertise Skills and grants 50 Energy. While active, surrounds you with verdant energy, increasing ATK, reducing skill Energy costs, and each [Link#1527: Life Bloom] cast shortens the remaining CD of Healing Expertise Skills.
  - **ATK bonus**: [Tier G0→G6: 10% .. 20% (10%, 11%, 12%, 15%, 16%, 17%, 20%)]+[Lv1→Lv30: 10 .. 97]
  - **CD decrease**: [Tier G0→G6: 4s .. 6s (4s, 4s, 4s, 5s, 5s, 5s, 6s)]
  - **Duration**: `10s`
  - **CD**: `60s`
- **`[1541] Wild Bloom`** (Special Attack, Magic, Forest, Direct DMG, Direct Healing, Single Target, Ranged)
  - *Description*: Consumes 30 Energy to summon giant vines that strike a target area, dealing Magic DMG and healing the caster and the nearby ally with the lowest HP (Party Members Prioritized). Healing grows with MATK. | | Tips: In emergencies, cast repeatedly for fast healing. Otherwise, use Basic Attacks to stack Regen Buds, which improves both healing and DMG.
  - **Skill Damage**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]MATK +[Lv1→Lv30: 15 .. 600]
  - **Skill Healing**: [Tier G0→G6: 50% .. 70% (50%, 52%, 54%, 60%, 62%, 64%, 70%)]MATK +[Lv1→Lv30: 20 .. 800]

---
### อาชีพ [8] Thunder Flash - Hand Cannon

#### Basic Attack (คลิกซ้าย):
- **`[1801] Thunderclap Arcane`** (Basic Attack, Direct DMG, Thunder, Bullet)
  - *Description*: Basic Attack: Thunderclap Arcane | Performs up to three consecutive thunder-infused strikes, each dealing Thunder Element damage. | Plunge Attack:·Thunderfall from the Heavens | Charges lightning energy into the gauntlet mid-air, then dives down to impact the ground, dealing Thunder Element damageon landing. | Heavy Strike: Thunder Onslaught | Gathers energy to unleash a powerful cannon blast. During the charge, consumes heat gauge to continuously stack Thunder Onslaught, which increases DMG and range. Releasing the skill or completing the charge unleashes a wide fan-shaped Lightning area damage. | Thunderclap | Increases the next Thunder Onslaught's DMG and AoE range, stacking up to 3 times. | | Pro Tips: When monsters are close, hold down Basic Attack to more efficiently knock them back.

#### Special Skill (ปุ่มเลข 1):
- **`[1806] Thunder Zone`** (Expertise Skill, Direct DMG, Thunder, Missile, AoE)
  - *Description*: Thunder Zone | launches into the air and fires a Thunderstorm Bolt at the target. On hit, it deals Thunder DMG and creates a Thunderstorm Zone lasting 7s. | Thunderstorm Zone | deals AoE Thunder DMG every second to all enemies within the range, with a [Link#3011: Slow] debuff. | | Pro Tips: This skill can be cast while airborne, granting enhanced mobility during execution.

#### Ultimate Skill (ปุ่ม R):
- **`[1808] Thunderburst Oblivion`** (Ultimate, Direct DMG, Thunder)
  - *Description*: Thunderburst Oblivion | Launches an Oblivion Bomb that detonates after a short flight or on impact, unleashing a destructive burst of Lightning area damage. Immediately maxes out the weapon's heat gauge upon cast. | | Pro Tips: Cast from a safe distance to unlock a brief window of massive Attack.

#### Expertise Skills (สกิลเลือกใส่):
- **`[1807] Thunder Traverse`** (Special Attack, Direct DMG, Thunder, Bullet)
  - *Description*: Thunder Traverse | Unleashes a relentless stream of Thunder Tracers that track enemies and deal Thunder Element damage on impact. Hold the skill button to continue the barrage, consuming the heat gauge to extend its duration. | | Pro Tips: Best used when fully charged-hold the skill to unleash an overwhelming barrage for dealing massive DMG.

---
### อาชีพ [9] Heavy Guardian

#### Basic Attack (คลิกซ้าย):
- **`[1901] Halberd's Edge`** (Basic Attack, Physical, Rock, Direct DMG, Single Target, Energy Restore, Melee)
  - *Description*: Rage | An initial cap of 100 points is assigned to this resource, which serves as the essential component for the execution of Special Attacks and Expertise. Restores 2 Rage upon taking DMG, subject to a maximum 0.5s CD. | | Basic Attack: Halberd's Edge | A heavy four-strike combo with a wide-blade Guardblade, each strike dealing Attack DMG and generating 5 Rage. | | Tips: Rage should be accumulated through the use of Basic Attacks.
  - **Strike I**: [Tier G0→G6: 30% .. 42% (30%, 31.2%, 32.4%, 36%, 37.2%, 38.4%, 42%)]ATK +[Lv1→Lv30: 3 .. 120](Resilience Break: 41)
  - **Strike II**: [Tier G0→G6: 40% .. 56% (40%, 41.6%, 43.2%, 48%, 49.6%, 51.2%, 56%)]ATK +[Lv1→Lv30: 4 .. 160](Resilience Break: 55)
  - **Strike III**: [Tier G0→G6: 52% .. 72.78% (52%, 54.08%, 56.16%, 62.4%, 64.48%, 66.56%, 72.78%)]ATK +[Lv1→Lv30: 4 .. 208](Resilience Break: 70)
  - **Strike IV**: [Tier G0→G6: 78% .. 109.2% (78%, 81.12%, 84.24%, 93.6%, 96.72%, 99.84%, 109.2%)]ATK +[Lv1→Lv30: 7 .. 312](Resilience Break: 107)
  - **Red Light Counter**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK +[Lv1→Lv30: 10 .. 400](Resilience Break: 100)

#### Special Skill (ปุ่มเลข 1):
- **`[1922] Shield Bash`** (Special Attack, Physical, Rock, Direct DMG, Single Target, Shield, Melee)
  - *Description*: Consumes 40 Rage to unleash a powerful shockwave that deals Attack DMG to all nearby enemies. When sufficient Sand Crystal is available, it is consumed to generate a [Link#1035: Shield] that absorbs all incoming DMG, lasting for 12s. For each additional Sand Crystal consumed, additional shield value is added, with a maximum of 2 Sand Crystals consumed at a time. (Shields can stack, but cannot exceed 150% of Max HP.) | | Tips: Casting is recommended when no shield is active to ensure continuous shield uptime.
  - **Total DMG**: [Tier G0→G6: 130% .. 182% (130%, 135.2%, 140.4%, 156%, 161.2%, 166.4%, 182%)]ATK +[Lv1→Lv30: 13 .. 520](Resilience Break: 578)
  - **Shield Amount per Sand Crystal Consumed**: [Tier G0→G6:  .. 6000 (, 600, 1200, 3000, 3600, 4200, 6000)]ATK +[Lv1→Lv30: 10 .. 1500]
  - **Extra Shield Amount per Sand Crystal Consumed**: [Tier G0→G6: 5% .. 8% (5%, 5.3%, 5.6%, 6.5%, 6.8%, 7.1%, 8%)]Max HP
  - **CD**: `1s`

#### Ultimate Skill (ปุ่ม R):
- **`[1907] Cracking Echo`** (Ultimate, Physical, Rock, Direct DMG, AoE, Protect, Energy Restore, Melee)
  - *Description*: Cracking Echo | Unleashes the Power of Rock, instantly dealing Attack DMG in a large area in the front and [Link#3005: stunning] enemies for 3s, then condenses energy to immediately gain 5 Sand Crystals. Also puts the caster into Rock's Fury state. | Rock's Fury | Lasts for8s, grants [Link#1091: Super Armor], increases Armor by 100% and Max HP by 50%, and grants 40 Rage over time. | | Tips: Use when facing extremely heavy incoming DMG.
  - **Total DMG**: [Tier G0→G6: 450% .. 629.99% (450%, 468%, 486%, 540%, 558%, 576%, 629.99%)]ATK +[Lv1→Lv30: 45 .. 1800](Resilience Break: 884)
  - **CD**: `60s`

#### Expertise Skills (สกิลเลือกใส่):
- **`[1924] Star Shatter`** (Expertise Skill, Physical, Rock, Direct DMG, Single Target, Sprint, Energy Restore, Stun, Melee)
  - *Description*: Charges ahead with immense force. Upon hit, gains 25 Rage and 1 Sand Crystal, deals Attack DMG, and [Link#3005: stuns] the enemy. Becomes unstoppable during the execution of the charge. | This skill holds 2 charges. | | Tips: This skill enhances mobility and accumulates Rage quickly.
  - **Total DMG**: [Tier G0→G6: 260% .. 364% (260%, 270.4%, 280.8%, 312%, 322.4%, 332.8%, 364%)]ATK +[Lv1→Lv30: 26 .. 1040](Resilience Break: 629)
  - **CD**: `12s`
  - **Charge Time**: `12s`
- **`[1927] Sandshroud`** (Expertise Skill, Physical, Rock, DoT, AoE, Energy Restore, Melee)
  - *Description*: Gathers sand around yourself, dealing a burst of Attack DMG to surrounding enemies. The sand then solidifies, dealing Attack DMG to surrounding enemies every second for 6s. Throughout this effect, continuously regenerates Rage and Sand Crystal, providing 33 Rage and 6 Sand Crystals. | | Tips: Keep it active as often as possible. The continuous AoE DMG poses a great threat to the enemies while generating Rage quickly.
  - **Sandstone Solidification DMG**: [Tier G0→G6: 57% .. 79.79% (57%, 59.28%, 61.56%, 68.4%, 70.68%, 72.96%, 79.79%)]ATK +[Lv1→Lv30: 5 .. 228](Resilience Break: 78)
  - **Total DoT**: [Tier G0→G6: 132% .. 184.8% (132%, 137.28%, 142.56%, 158.4%, 163.68%, 168.96%, 184.8%)]ATK +[Lv1→Lv30: 12 .. 528](Resilience Break: 180)
  - **CD**: `15s`
- **`[1936] Stoneform`** (Expertise Skill, Protect)
  - *Description*: Channels the power of sandstone, automatically countering Lethal Skills for the next 10s, while increasing Armor and reducing DMG taken by 20%. | | Tips: Use in high-pressure battles to greatly improve survival.
  - **Armor buff**: [Tier G0→G6: 10% .. 14% (10%, 10.4%, 10.8%, 12%, 12.4%, 12.8%, 14%)]+[Lv1→Lv30: 15 .. 195]
  - **Duration**: `10s`
  - **CD**: `35s`
- **`[1926] Sandgrip`** (Expertise Skill, Physical, Rock, Direct DMG, AoE, Crowd Control, Slow, Melee)
  - *Description*: Consumes 30 Rage to swing your weapon and create a vacuum, pulling nearby enemies toward you. Deals Attack DMG, [Link#3000: interrupts] their actions, and reduces their Move SPD by 70% for 8s. | | Tips: Effectively pulls monsters into range for faster takedowns.
  - **Total DMG**: [Tier G0→G6: 300% .. 420% (300%, 312%, 324%, 360%, 372%, 384%, 420%)]ATK +[Lv1→Lv30: 30 .. 1200](Resilience Break: 608)
  - **CD**: `30s`
- **`[1937] Granite Fury`** (Expertise Skill, Physical, Rock, Direct DMG, Single Target, Melee)
  - *Description*: Consumes 3 Sand Crystals, dealing Attack DMG to the target and reducing DMG taken by 10% for the next 10s (non-stackable). | | Tips: When you have enough Sand Crystals, a good use of Granite Fury delivers high DMG and ensures high chances of survival.
  - **Total DMG**: [Tier G0→G6: 500% .. 700% (500%, 520%, 540%, 600%, 620%, 640%, 700%)]ATK +[Lv1→Lv30: 50 .. 2000](Resilience Break: 677)
- **`[1925] Rage Burst`** (Expertise Skill, Physical, Rock, Direct DMG, AoE, Shield, Melee)
  - *Description*: Consumes 50 Rage and 5 Sand Crystals. Unleashes a mighty roar, dealing Attack DMG to nearby enemies, [Link#3000: interrupting] their actions, and granting an all-DMG-absorbing [Link#1035: Shield]. (Shields may be stacked, with a maximum capacity equivalent to 150% of maximum HP.) Reduces Attack DMG taken from the target by 10% for 12s. | | Tips: Provides damaging capabilities when survival pressure is minimal and grants greater Armor in situations where enemies predominantly inflict Attack DMG.
  - **Total DMG**: [Tier G0→G6: 500% .. 700% (500%, 520%, 540%, 600%, 620%, 640%, 700%)]ATK +[Lv1→Lv30: 50 .. 2000](Resilience Break: 1028)
  - **Shield Amount**: [Tier G0→G6:  .. 30000 (, 3000, 6000, 15000, 18000, 21000, 30000)]ATK +[Lv1→Lv30: 50 .. 7500]
  - **Extra Shield Amount**: [Tier G0→G6: 25% .. 40% (25%, 26.5%, 28%, 32.5%, 34%, 35.5%, 40%)]Max HP
  - **Shield duration**: `12s`
  - **CD**: `15s`
- **`[1938] Brave Bastion`** (Expertise Skill, Protect)
  - *Description*: Creates a rocky barrier around yourself, automatically countering Lethal Skills for a period of time and increasing Block DMG Reduction. Each Sand Crystal consumed extends the duration by 1s (up to 5s). | | Tips: Time carefully and use it during massive incoming Attack DMG to maximize Block DMG Reduction and minimize DMG taken.
  - **Block DMG Reduction Bonus**: [Lv1→Lv30: 10% .. 20%]
  - **Duration**: [Tier G0→G6: 8s .. 13s (8s, 8.5s, 9s, 10.5s, 11s, 11.5s, 13s)]
  - **Charge Time**: `45s`
- **`[1923] Sandward`** (Expertise Skill, Physical, Rock, Direct DMG, AoE, Protect, Melee)
  - *Description*: Erects an immovable rock wall and enter a defensive stance, [Link#1092: taunting] nearby monsters and becoming invincible. Blocking a Lethal Skill causes the wall to shatter and counterattack the target, dealing Attack DMG to all the enemies in front. | | Tips: Ultimate tank skill, perfect for absorbing extreme DMG.
  - **Total DMG**: [Tier G0→G6: 450% .. 629.99% (450%, 468%, 486%, 540%, 558%, 576%, 629.99%)]ATK +[Lv1→Lv30: 45 .. 1800](Resilience Break: 500)
  - **CD**: `45s`

#### Talent / Proc / Passive Skills (สกิลเสริมจากสาย Talent):
- **`[1932] Shield Bash`** ()
  - *Description*: 场地标记01
- **`[1933] Halberd's Edge`** (Basic Attack, Physical, Rock, Direct DMG, Energy Restore)
  - *Description*: Basic Attack: Halberd's Edge | A heavy four-strike combo with a wide-blade weapon, each strike dealing Attack DMG and generating Rage | Plunge Attack: Assault | Raise your blade high and dive from the air, slashing through enemies along your descent. Upon impact with the ground, deals Attack DMG.
  - **Strike I**: [Tier G0→G6: 30% .. 42% (30%, 31.2%, 32.4%, 36%, 37.2%, 38.4%, 42%)]ATK +[Lv1→Lv30: 3 .. 120]
  - **Strike II**: [Tier G0→G6: 40% .. 56% (40%, 41.6%, 43.2%, 48%, 49.6%, 51.2%, 56%)]ATK +[Lv1→Lv30: 4 .. 160]
  - **Strike III**: [Tier G0→G6: 52% .. 72.78% (52%, 54.08%, 56.16%, 62.4%, 64.48%, 66.56%, 72.78%)]ATK +[Lv1→Lv30: 4 .. 208]
  - **Strike IV**: [Tier G0→G6: 78% .. 109.2% (78%, 81.12%, 84.24%, 93.6%, 96.72%, 99.84%, 109.2%)]ATK +[Lv1→Lv30: 7 .. 312]
  - **Plunge Attack**: `0% ATK +0`
  - **Perfect Dodge Attack**: [Tier G0→G6: 66% .. 79.2% (66%, 67.32%, 68.64%, 72.6%, 73.92%, 75.24%, 79.2%)]ATK+[Lv1→Lv30: 27 .. 189]
  - **Counterattack**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK+[Lv1→Lv30: 10 .. 400]
- **`[1939] Granite Fury`** (Expertise Skill, Physical, Rock, Direct DMG, Single Target, Melee)
  - *Description*: Consumes Sand Crystals and Rage, dealing Attack DMG to the target and reducing DMG taken for the next 10s (non-stackable).
  - **Total DMG**: [Tier G0→G6: 500% .. 700% (500%, 520%, 540%, 600%, 620%, 640%, 700%)]ATK+[Lv1→Lv30: 50 .. 2000]
- **`[1940] Rage Burst`** (Expertise Skill, Physical, Rock, Direct DMG, AoE, Shield, Melee)
  - *Description*: Consumes 50 Rage and 5 Sand Crystals to unleash a roar, dealing Attack DMG to nearby enemies and granting a [Link#1035: Shield] that absorbs all damage (stacks up to 50% of Max HP). Also reduces Attack DMG taken by 10% for 12 seconds. | | Tips: Provides output capabilities when survival pressure is minimal and grants greater Attack DMG Reduction under conditions where enemy units predominantly inflict Attack DMG.
  - **Total DMG**: [Tier G0→G6: 500% .. 700% (500%, 520%, 540%, 600%, 620%, 640%, 700%)]ATK+[Lv1→Lv30: 50 .. 2000]
  - **Shield Amount**: [Tier G0→G6:  .. 30000 (, 3000, 6000, 15000, 18000, 21000, 30000)]ATK +[Lv1→Lv30: 50 .. 7500]
  - **护盾持续时间**: `12s`
  - **CD**: `2s`
- **`[1941] Starfall`** (Expertise Skill)
  - *Description*: Enhanced [Link#1537: Star Shatter]. Lunges at the enemy, dealing Attack DMG equal to 500% ATK, knocking them airborne. Scales with the Level/Tier of [Link#1537: Star Shatter]. | Gains double Rage and becomes [Link#1135: Enraged].
  - **Total DMG**: [Tier G0→G6: 260% .. 364% (260%, 270.4%, 280.8%, 312%, 322.4%, 332.8%, 364%)]ATK+[Lv1→Lv30: 26 .. 1040]
  - **Charge Time**: `12s`
- **`[1942] Rupture`** ()
  - *Description*: Raises your weapon for a mighty blow, dealing Attack DMG equal to 300% ATK, and knocking the target airborne. Scales with the Level/Tier of Basic Attack. | Gain 25Rage upon casting.
  - **Strike I**: [Tier G0→G6: 30% .. 42% (30%, 31.2%, 32.4%, 36%, 37.2%, 38.4%, 42%)]ATK +[Lv1→Lv30: 3 .. 120]
  - **Strike II**: [Tier G0→G6: 40% .. 56% (40%, 41.6%, 43.2%, 48%, 49.6%, 51.2%, 56%)]ATK +[Lv1→Lv30: 4 .. 160]
  - **Strike III**: [Tier G0→G6: 52% .. 72.78% (52%, 54.08%, 56.16%, 62.4%, 64.48%, 66.56%, 72.78%)]ATK +[Lv1→Lv30: 4 .. 208]
  - **Strike IV**: [Tier G0→G6: 78% .. 109.2% (78%, 81.12%, 84.24%, 93.6%, 96.72%, 99.84%, 109.2%)]ATK +[Lv1→Lv30: 7 .. 312]
  - **Plunge Attack**: `0% ATK +0`
  - **Counterattack**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK+[Lv1→Lv30: 10 .. 400]
- **`[1943] Stone Fist`** ()
  - *Description*: Empowered [Link#1539: ​Granite Fury​] channels the Power of Rock to summon a massive boulder from above, dealing Attack DMG equal to 800% ATK to the enemies within range (which scales with the Level/Tier of [Link#1539: ​Granite Fury​]) and always triggering Crit.
- **`[1944] Rage Burst`** (Expertise Skill, Physical, Rock, Direct DMG, AoE, Shield)
  - *Description*: Consumes 50 Rage and 5 Sand Crystals to unleash a roar, dealing Attack DMG to nearby enemies and granting a [Link#1035: Shield] that absorbs all damage (stacks up to 150% of Max HP). Also reduces Attack DMG taken by 10% for 12 seconds. | | Tips: Provides output capabilities when survival pressure is minimal and grants greater armor under conditions where enemy units predominantly inflict Attack DMG.
  - **Total DMG**: [Tier G0→G6: 500% .. 700% (500%, 520%, 540%, 600%, 620%, 640%, 700%)]ATK +[Lv1→Lv30: 50 .. 2000]
  - **Shield Amount**: [Tier G0→G6:  .. 30000 (, 3000, 6000, 15000, 18000, 21000, 30000)]ATK +[Lv1→Lv30: 50 .. 7500]
  - **Extra Shield Amount**: [Tier G0→G6: 25% .. 40% (25%, 26.5%, 28%, 32.5%, 34%, 35.5%, 40%)]Max HP
  - **Shield duration**: `12s`

---
### อาชีพ [10] Ritual Dance of Shadowspirits: Ceremonial Blade / Staff

#### Basic Attack (คลิกซ้าย):
- **`[2101] 场地标记01`** ()
  - *Description*: 场地标记01

#### Special Skill (ปุ่มเลข 1):
- **`[2105] Spirit Break`** ()
  - *Description*: 场地标记01
  - **CD**: `1s`

#### Ultimate Skill (ปุ่ม R):
- **`[2108] Spirit Possession`** ()
  - *Description*: 场地标记01
  - **CD**: `1s`

#### Expertise Skills (สกิลเลือกใส่):
- **`[2107] Summon Wedge Pillar`** ()
  - *Description*: 场地标记01

---
### อาชีพ [11] Marksman

#### Basic Attack (คลิกซ้าย):
- **`[2201] Bullseye`** (Basic Attack, Physical, Light, Direct DMG, Single Target, Energy Restore, Ranged)
  - *Description*: Photon Energy | Initial max Photon Energy is 100. Once full, performing a Special Attack will activate Photon Reforge state, consuming 25 Photon Energy per second. The state ends when Photon Energy reaches 0. During this state, certain skills gain enhanced effects. | | Basic Attack: Bullseye | Quickly draw the bow to fire up to four consecutive arrows, each dealing Attack DMG. When not in Photon Reforge state, the attack restores 2 Photon Energy. | | Tips: Use Basic Attack to build up Photon Energy.
  - **Strike I**: [Tier G0→G6: 35% .. 49% (35%, 36.4%, 37.8%, 42%, 43.4%, 44.8%, 49%)]ATK +[Lv1→Lv30: 3 .. 140](Resilience Break: 7)
  - **Strike II**: [Tier G0→G6: 35% .. 49% (35%, 36.4%, 37.8%, 42%, 43.4%, 44.8%, 49%)]ATK +[Lv1→Lv30: 3 .. 140](Resilience Break: 7)
  - **Strike III**: [Tier G0→G6: 70% .. 98% (70%, 72.8%, 75.6%, 84%, 86.8%, 89.6%, 98%)]ATK +[Lv1→Lv30: 6 .. 280](Resilience Break: 14)
  - **Strike IV**: [Tier G0→G6: 60% .. 84% (60%, 62.4%, 64.8%, 72%, 74.4%, 76.8%, 84%)]ATK +[Lv1→Lv30: 6 .. 240](Resilience Break: 12)
  - **Red Light Counter**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK +[Lv1→Lv30: 10 .. 400](Resilience Break: 100)

#### Special Skill (ปุ่มเลข 1):
- **`[2220] Storm Arrow`** (Special Attack, Physical, Light, Direct DMG, Single Target, Energy Restore, Ranged)
  - *Description*: Quickly draws the bow to fire 5 arrows at the target, each dealing Attack DMG and generating 1 Photon Energy. | This skill holds 2 charges. | When Photon Energy reaches max, Storm Arrow instantly gains 2 charges, and the max number of charges increases to 5. | | Tips: Even after five uses, Storm Arrow will continue to re-charge. Use other skills to buy time for more casts.
  - **Total DMG**: [Tier G0→G6: 150% .. 210% (150%, 156%, 162%, 180%, 186%, 192%, 210%)]ATK +[Lv1→Lv30: 10 .. 400](Resilience Break: 100)
  - **Charge Time**: `5s`

#### Ultimate Skill (ปุ่ม R):
- **`[2209] Luminary Bolt`** (Ultimate, Physical, Light, AoE, Armor Reduce, Ranged, DoT)
  - *Description*: Concentrates Photon Energy and fires a massive arrow toward enemies. | Upon impact with an enemy or reaching maximum range, the arrow explodes, dealing continuous Attack DMG to all enemies in the blast area, creating a gravity effect, and inflicting Vulnerability and [Link#3002: Rooted]. | | Tips: An excellent crowd-control skill that can be decisive in multi-target engagements.
  - **Arrow Damage**: [Tier G0→G6: 250% .. 350% (250%, 260%, 270%, 300%, 310%, 320%, 350%)]ATK +[Lv1→Lv30: 25 .. 1000](Resilience Break: 97)
  - **Single Arrow Barrage Damage**: [Tier G0→G6: 25% .. 35% (25%, 26%, 27%, 30%, 31%, 32%, 35%)]ATK +[Lv1→Lv30: 2 .. 100](Resilience Break: 9)
  - **Vulnerability**: `10%`
  - **Duration**: `10s`
  - **CD**: `60s`

#### Expertise Skills (สกิลเลือกใส่):
- **`[2230] Torrent Volley`** (Expertise Skill, Physical, Light, Direct DMG, Single Target, Channelling, Ranged)
  - *Description*: Continuously draws bow to launch a barrage of arrows at enemies, dealing Attack DMG. Recast to end early. | While in Photon Reforge state, Photon Energy consumption stops until the next Special Attack cast and hitting enemies recovers up to 42 Photon Energy. | | Tips: Cast during Photon Reforge state to pause Photon Energy consumption and regenerate Photon Energy.
  - **Total DMG**: [Tier G0→G6: 504% .. 705.6% (504%, 524.16%, 544.32%, 604.8%, 624.96%, 645.12%, 705.6%)]ATK +[Lv1→Lv30: 42 .. 1995](Resilience Break: 189)
  - **CD**: `23s`
- **`[2232] Arrow Rain`** (Expertise Skill, Physical, Light, AoE, Energy Restore, Ranged, DoT)
  - *Description*: Fires a rain of arrows over a target area, dealing continuous Attack DMG. Grants 20 Photon Energy upon cast, plus 2 additional Photon Energy per enemy hit, up to 10 extra. | | Tips: The more enemies hit, the more energy you gain.
  - **Total DMG**: [Tier G0→G6: 200% .. 280% (200%, 208%, 216%, 240%, 248%, 256%, 280%)]ATK +[Lv1→Lv30: 20 .. 800](Resilience Break: 80)
  - **CD**: `20s`
- **`[2237] Wildcall`** (Expertise Skill, Physical, Light, Direct DMG, AoE, Companion, Ranged)
  - *Description*: Summons a powerful combat Companion to provide assistance in battle. | | Summon Wild Wolf: The summoned Wild Wolf pounces on the current target, dealing Attack DMG to the target and nearby enemies, then joins the battle for 20s before disappearing. | | Summon Falcon: The summoned Falcon dives in a straight line, dealing Attack DMG to all enemies in its path before disappearing. | | Tips: Boosts the number of active Companions during the battle. Casting is recommended when all buffs are prepared to ensure maximum efficiency.
  - **Wolf Damage**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK +[Lv1→Lv30: 10 .. 400](Resilience Break: 109)
  - **Falcon Damage**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK +[Lv1→Lv30: 10 .. 400](Resilience Break: 109)
  - **CD**: `0.5s`
  - **Charge Time**: `45s`
- **`[2233] Powerdraw`** (Expertise Skill, Physical, Light, Direct DMG, AoE, Ranged)
  - *Description*: Charges and then fires a piercing arrow that deals Attack DMG and Knockback to all enemies in its path. Cannot knock back targets with Resilience, but reduces targets' Resilience. Powerdraw deals a bonus 100% Crit DMG. | This skill holds 2 charges. | No charge time required when in Photon Reforge state. | | Tips: Great for reducing enemies' Resilience while dealing area damage.
  - **Total DMG**: [Tier G0→G6: 900% .. 1259.99% (900%, 936%, 972%, 1080%, 1116%, 1152%, 1259.99%)]ATK +[Lv1→Lv30: 90 .. 3600](Resilience Break: 493)
  - **CD**: `30s`
  - **Charge Time**: `30s`
- **`[2234] Radiance Barrage`** (Expertise Skill, Physical, Light, AoE, Ranged, DoT)
  - *Description*: Charges and fires Photon Arrows to a target area, dealing continuous Attack DMG. The damage interval scales with Attack SPD. | While in Photon Reforge state, Photon Arrows consume no Photon Energy, generate extra arrows, and deal 50% more Attack DMG. | | Tips: Casting during Photon Reforge increases its damage and consumes no Photon Energy.
  - **Total DMG**: [Tier G0→G6: 1200% .. 1680% (1200%, 1248%, 1296%, 1440%, 1488%, 1536%, 1680%)]ATK +[Lv1→Lv30: 120 .. 4800](Resilience Break: 470)
  - **CD**: `30s`
- **`[2231] Focus`** (Expertise Skill, Haste)
  - *Description*: Enters Focus state, greatly increasing Haste and reducing the CD of Special Attacks by 50%. | | Tips: Best paired with Falconry Spec. Use it just before activating Photon Reforge for maximum uptime.
  - **Haste bonus**: [Tier G0→G6: 15% .. 21% (15%, 15.6%, 16.2%, 18%, 18.6%, 19.2%, 21%)]+[Lv1→Lv30: 800 .. 1040]
  - **Duration**: [Tier G0→G6: 12s .. 15s (12s, 12.3s, 12.6s, 13.5s, 13.8s, 14.1s, 15s)]
  - **CD**: `45s`
- **`[2238] Blast Shot`** (Expertise Skill, Physical, Light, Direct DMG, Single Target, Ranged)
  - *Description*: Fires an Explosive Arrow at the target that detonates on impact. The Explosive Arrow deals Attack DMG to all nearby enemies. | Each time when a Class Skill deals Crit DMG, Explosive Arrow gains 1 charge. At 5 charges or after 6s, the Explosive Arrow explodes, each charge increases the DMG of Explosive Arrow by 100%. | | Tips: Better paired with Falconry Spec. Focus on Crit DMG to power up the explosion.
  - **Explosive Arrow Damage**: [Tier G0→G6: 180% .. 252% (180%, 187.2%, 194.4%, 216%, 223.2%, 230.4%, 252%)]ATK +[Lv1→Lv30: 18 .. 720](Resilience Break: 67)
  - **Detonation Base DMG**: [Tier G0→G6: 70% .. 98% (70%, 72.8%, 75.6%, 84%, 86.8%, 89.6%, 98%)]ATK +[Lv1→Lv30: 7 .. 280](Resilience Break: 26)
  - **CD**: `15s`
- **`[2235] Deter Shot`** (Expertise Skill, Physical, Light, Direct DMG, Single Target, Sprint, Protect, Ranged)
  - *Description*: Leaps upward swiftly and fires at enemies, dealing Attack DMG. Grants immunity to Attack DMG for you and up to 10 nearby Allies for 5s. | This skill holds 2 charges. | | Tips: This is intended to be equipped in high-pressure situations to increase survivability.
  - **Total DMG**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK +[Lv1→Lv30: 10 .. 400]
  - **CD**: `25s`
  - **Charge Time**: `25s`

#### Talent / Proc / Passive Skills (สกิลเสริมจากสาย Talent):
- **`[2224] Lethal Shot`** (Special Attack, Physical, Light, Direct DMG, Single Target, Ranged)
  - *Description*: 场地标记01
- **`[2240] Sky Piercing Star Strike`** (Expertise Skill, Physical, Light, Direct DMG, Single Target, Ranged)
  - *Description*: Fires a giant arrow at the target, dealing Attack DMG equal to 1000% ATK.

---
### อาชีพ [12] Shield Knight

#### Basic Attack (คลิกซ้าย):
- **`[2401] Blade of Justice`** (Basic Attack, Light, Physical, Direct DMG, Single Target, Melee)
  - *Description*: Holy Sigil | Resource required to cast Special Attacks and some Expertise. There are 5 initial Holy Sigils. Each Holy Sigil enters a 10s CD after being consumed, and generates 10 Photon Energy. | | Photon Energy | Resource required to cast some Expertise, starting at a max of 100. | | Basic Attack: Blade of Justice | Unleashes a 3-hit sword combo followed by a Swing, each hit dealing Attack DMG.
  - **Strike I**: [Tier G0→G6: 30% .. 42% (30%, 31.2%, 32.4%, 36%, 37.2%, 38.4%, 42%)]ATK +[Lv1→Lv30: 3 .. 120](Resilience Break: 30)
  - **Strike II**: [Tier G0→G6: 30% .. 42% (30%, 31.2%, 32.4%, 36%, 37.2%, 38.4%, 42%)]ATK +[Lv1→Lv30: 3 .. 120](Resilience Break: 30)
  - **Strike III**: [Tier G0→G6: 60% .. 84% (60%, 62.4%, 64.8%, 72%, 74.4%, 76.8%, 84%)]ATK +[Lv1→Lv30: 6 .. 240](Resilience Break: 60)
  - **Strike IV**: [Tier G0→G6: 80% .. 112% (80%, 83.2%, 86.4%, 96%, 99.2%, 102.4%, 112%)]ATK +[Lv1→Lv30: 8 .. 320](Resilience Break: 80)
  - **Red Light Counter**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK +[Lv1→Lv30: 10 .. 400](Resilience Break: 100)

#### Special Skill (ปุ่มเลข 1):
- **`[2405] Valor Bash`** (Special Attack, Physical, Light, Direct DMG, Single Target, Protect, Melee)
  - *Description*: Consumes 1 Holy Sigil to deliver a powerful shield bash to enemies in front, dealing Attack DMG and increasing your Armor, stacking up to 3 times. | | Tips: Monitor the Armor buff from Valor Bash and try to keep it active at all times.
  - **Total DMG**: [Tier G0→G6: 80% .. 112% (80%, 83.2%, 86.4%, 96%, 99.2%, 102.4%, 112%)]ATK +[Lv1→Lv30: 8 .. 320](Resilience Break: 244)
  - **Armor Increase per Layer**: [Tier G0→G6: 6% .. 8.4% (6%, 6.24%, 6.48%, 7.2%, 7.44%, 7.68%, 8.4%)]
  - **Duration**: `10s`

#### Ultimate Skill (ปุ่ม R):
- **`[2407] Radiant Infusion`** (Ultimate, Light, Physical, Direct DMG, AoE, Protect, Melee)
  - *Description*: Unleashes holy energy to strike nearby enemies, dealing Attack DMG and inflicting [Link#3009: Dazzle] for 5s. Grants a Radiant Shield equal to 300% ATK. For the next 10s, instantly refreshes 1 Holy Sigil for every 2s (prioritizing the Holy Sigil with the longest remaining CD), and generates 10 Photon Energy each time. | | Radiant Shield: Infuses the Shield with light, absorbing 50% of incoming DMG. The effect can stack absorption and reset duration when the Skill is reused. Max absorption cannot exceed 100% of Max HP. | | Tips: Instantly boosts survivability and generates Holy Sigil and Photon Energy. Time the casts wisely.
  - **Total DMG**: [Tier G0→G6: 300% .. 420% (300%, 312%, 324%, 360%, 372%, 384%, 420%)]ATK +[Lv1→Lv30: 30 .. 1200](Resilience Break: 720)
  - **CD**: `60s`

#### Expertise Skills (สกิลเลือกใส่):
- **`[2410] Judgment`** (Expertise Skill, Physical, Light, Direct DMG, Direct Healing, Single Target, Melee)
  - *Description*: Consumes 45 Photon Energy to call down a blast of holy light on the target area, dealing Attack DMG and healing yourself based on HP lost (minimum heal: 5% of Max HP). | | Tips: Cast when your HP is low—but not critically low—to maximize healing while staying safe.
  - **Total DMG**: [Tier G0→G6: 150% .. 210% (150%, 156%, 162%, 180%, 186%, 192%, 210%)]ATK +[Lv1→Lv30: 15 .. 600](Resilience Break: 326)
  - **Total Healing**: [Tier G0→G6: 30% .. 40% (30%, 31%, 32%, 35%, 36%, 37%, 40%)]Lost HP
- **`[2412] Reckoning`** (Expertise Skill, Physical, Light, Direct DMG, AoE, Melee)
  - *Description*: Consumes 2 Holy Sigils. Performs a fiery blade strike at all nearby enemies, dealing Attack DMG. | | Tips: Powerful offensive skill. Use when survivability is not an issue.
  - **Total DMG**: [Tier G0→G6: 350% .. 489.99% (350%, 364%, 378%, 420%, 434%, 448%, 489.99%)]ATK +[Lv1→Lv30: 34 .. 1400](Resilience Break: 451)
- **`[2408] Shield Toss`** (Expertise Skill, Physical, Light, Direct DMG, AoE, Melee)
  - *Description*: Spins and throws a shield, dealing Attack DMG to enemies hit, [Link#3000: interrupting] them, and reducing all DMG they deal to the caster for the next 10s. | | Tips: While improving survivability, it performs well in multi-target situations with its wide-area DMG. Cast it according to your survival conditions or the battle environment.
  - **DMG per hit**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK +[Lv1→Lv30: 10 .. 400](Resilience Break: 65)
  - **Incoming DMG Resistance**: [Tier G0→G6: 10% .. 16% (10%, 11%, 12%, 13%, 14%, 15%, 16%)]
  - **CD**: `12s`
- **`[2421] Sacred Blade`** (Expertise Skill, Physical, Light, Direct DMG, Single Target, Melee)
  - *Description*: Consumes 3 Holy Sigils, summoning a sword from beneath the target's feet to deal Attack DMG to the target, while gaining 5 stacks of Lightforged Barrier. | | Lightforged Barrier: Each stack increases the final Max HP by 2%. You can have up to 10 stacks of Lightforged Barrier, and any damage taken will consume 1 stack. It lasts for 25s or until all stacks are consumed, and the duration resets each time a stack is gained. | | Tips: While having considerable damage capability, it can efficiently replenish Lightforged Barrier.
  - **Total DMG**: [Tier G0→G6: 400% .. 560% (400%, 416%, 432%, 480%, 496%, 512%, 560%)]ATK +[Lv1→Lv30: 40 .. 1600](Resilience Break: 745)
- **`[2420] Radiance`** (Expertise Skill, Protect)
  - *Description*: Gains unwavering resolve and throws 5 shields at the enemies within 10m (closest first), dealing Attack DMG and [Link#3000: interrupting] them. Afterward, throws 1 time every 2s and gains 10 Photon Energy each time. For the next 10s, each instance of damage taken is reduced by a percentage of the caster's Max HP, and the caster automatically counters Lethal Skill. | | Tips: This skill requires no Photon Energy or Holy Sigil to cast and provides solid survivability, making it suitable as an opener.
  - **Total DMG**: [Tier G0→G6: 120% .. 168% (120%, 124.8%, 129.6%, 144%, 148.8%, 153.6%, 168%)]ATK +[Lv1→Lv30: 12 .. 480](Resilience Break: 312)
  - **Resistance ratio**: [Tier G0→G6: 10% .. 14% (10%, 10.4%, 10.8%, 12%, 12.4%, 12.8%, 14%)]Max HP
  - **Charge Time**: `70s`
- **`[2415] Aegis Ward`** (Expertise Skill, Protect, Direct Healing)
  - *Description*: Summons Aegis Ward to shield yourself, automatically countering Lethal Skills while increasing Armor and DMG Reduction. If you take lethal DMG while this effect is active, the effect is consumed to prevent death and immediately restore 25% HP. | | Tips: Powerful Resistance effect combined with death prevention, extremely valuable when facing extreme survival threats.
  - **Armor increase**: [Lv1→Lv30: 1000 .. 1700]
  - **DMG Reduction**: [Tier G0→G6: 20% .. 32% (20%, 21.2%, 22.4%, 26%, 27.2%, 28.4%, 32%)]
  - **Duration**: `10s`
  - **CD**: `45s`
- **`[2419] Zeal Crusade`** (Expertise Skill, Physical, Light, DoT, AoE, Melee)
  - *Description*: Consumes up to 8 stacks of Lightforged Barrier, summoning continuous radiant energy to spiral rapidly around you. Each second, it deals Attack DMG to nearby enemies (interval affected by Attack Speed) and grants 1 stack of Lightforged Barrier. | Each time it deals DMG to 1 target, restores 1% max HP (up to 5%). When activated, each stack of Lightforged Barrier adds 2s to the duration, up to a maximum of 16s. | | Lightforged Barrier: Max HP +2% with each stack. Lightforged Barrier stacks up to 10 times. Any incoming DMG consumes 1 stack. The effect lasts 25s or until all stacks are consumed. Duration resets each time a new stack is gained. | | Tips: Cast Lightforged Barrier to deal DMG and heal. Cast the skill when Lightforged Barrier is fully stacked to achieve excellent defense and burst potential.
  - **DMG per hit**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]ATK +[Lv1→Lv30: 10 .. 400](Resilience Break: 841)
  - **CD**: `45s`
- **`[2409] Divine Circle`** (Expertise Skill, Physical, Light, DoT, HoT, AoE, Melee)
  - *Description*: Creates a holy zone beneath your feet, healing yourself every second and healing allies in the area slightly, dealing Attack DMG to enemies. | | Tips: Great for sustained DMG and healing. Try to cover as much area as possible.
  - **Total DMG**: [Tier G0→G6: 96% .. 134.4% (96%, 99.84%, 103.68%, 115.2%, 119.04%, 122.88%, 134.4%)]ATK +[Lv1→Lv30: 12 .. 792](Resilience Break: 288)
  - **Total Healing**: [Tier G0→G6: 348% .. 487.08% (348%, 361.92%, 375.84%, 417.6%, 431.52%, 445.44%, 487.08%)]ATK +[Lv1→Lv30: 24 .. 1392]
  - **CD**: `30s`

#### Talent / Proc / Passive Skills (สกิลเสริมจากสาย Talent):
- **`[2406] Vanguard Strike`** (Special Attack, Physical, Light, Direct DMG, Single Target, Melee)
  - *Description*: Consumes 1 Holy Sigil. After a brief charge, performs a fierce sweep forward, dealing Attack DMG and gaining 2 stacks of Lightforged Barrier. | | Lightforged Barrier: Each stack increases max HP by 2%, up to 10 stacks. Taking any DMG consumes 1 stack. The Barrier lasts 25s or until all stacks are consumed. Gaining a new stack refreshes the duration. | | Tips: Maintain high stacks of Lightforged Barrier while weaving in attacks. Pay attention to the use of Vanguard Hunt to trigger bonus effects.
  - **Total DMG**: [Tier G0→G6: 120% .. 168% (120%, 124.8%, 129.6%, 144%, 148.8%, 153.6%, 168%)]ATK +[Lv1→Lv30: 12 .. 480](Resilience Break: 503)
- **`[2411] Scorching Judgment`** ()
  - *Description*: 场地标记01
- **`[2413] Inferno Reckon`** ()
  - *Description*: Empowered [Link#1563: Reckoning] deals 2 times the normal DMG of [Link#1563: Reckoning], starts at 250% Crit DMG, and does not consume Holy Sigils, but still generates Holy Energy.
- **`[2416] Condemn`** ()
  - *Description*: Deals Attack DMG equal to 200% ATK to the enemy (which scales with the Level/Tier of Basic Attack).
- **`[2417] Enhanced Condemn`** ()
  - *Description*: Enhanced [Link#1563: Condemn], whose DMG is equal to 2times that of [Link#1563: Condemn].
- **`[2425] Shield Toss`** (Expertise Skill, Light, Physical, Direct DMG)
  - *Description*: Shield Toss | consumes Photon Energy to hurl a spinning shield, dealing Attack DMG to enemies it hits, [Link#3000: interrupting] them and reducing all damage they deal to the caster for a duration.
  - **CD**: `12s`

---
### อาชีพ [13] Beat Performer

#### Basic Attack (คลิกซ้าย):
- **`[2321] String Strike`** (Basic Attack, Magic, Fire, Direct DMG, Single Target, Melee)
  - *Description*: Peaceful Tune | A magical melody that, whenever DMG is dealt, restores HP equal to 20% of the DMG dealt, distributed evenly among up to 5 allies (Party Members Prioritized). | Allies at full HP will not be included in the healing targets. If all Allies are at full HP, the healing will be considered as excess healing. | | Performance Energy: Energy required to play Melody skills (Heroic Melody and Healing Melody). 1 point is regenerated per second. | | Performance Passion: Required to perform music. 1 point is regenerated every 5s. | | Basic Attack: String Strike | Strikes the guitar's sideboard to produce a frenzied wave, dealing Magic DMG to nearby enemies. | | Tips: Using Basic Attacks when Performance Passion and Performance Energy are not maxed out provides consistent healing. Pair with talents to store this healing for emergency use.
  - **Strike I**: [Tier G0→G6: 18% .. 25.2% (18%, 18.72%, 19.44%, 21.6%, 22.32%, 23.04%, 25.2%)]MATK +[Lv1→Lv30: 2 .. 108](Resilience Break: 14)
  - **Strike II**: [Tier G0→G6: 18% .. 25.2% (18%, 18.72%, 19.44%, 21.6%, 22.32%, 23.04%, 25.2%)]MATK +[Lv1→Lv30: 2 .. 108](Resilience Break: 14)
  - **Strike III**: [Tier G0→G6: 30% .. 42% (30%, 31.2%, 32.4%, 36%, 37.2%, 38.4%, 42%)]MATK +[Lv1→Lv30: 4 .. 180](Resilience Break: 24)
  - **Strike IV**: [Tier G0→G6: 42% .. 58.8% (42%, 43.68%, 45.36%, 50.4%, 52.08%, 53.76%, 58.8%)]MATK +[Lv1→Lv30: 6 .. 252](Resilience Break: 34)
  - **Red Light Counter**: [Tier G0→G6: 100% .. 140% (100%, 104%, 108%, 120%, 124%, 128%, 140%)]MATK +[Lv1→Lv30: 15 .. 600](Resilience Break: 100)

#### Special Skill (ปุ่มเลข 1):
- **`[2306] Amplified Beat`** (Special Attack, Magic, Fire, Direct DMG, Single Target, Melee)
  - *Description*: Consumes 3 Performance Passion to swing your guitar with force, dealing heavy Magic DMG to enemies. | | Performance Passion: Required to perform music. Regenerates 1 stack every 5s. | | Tips: High coverage healing skill. Use it before your Performance Passion overflows.
  - **Total DMG**: [Tier G0→G6: 80% .. 112% (80%, 83.2%, 86.4%, 96%, 99.2%, 102.4%, 112%)]MATK +[Lv1→Lv30: 12 .. 480](Resilience Break: 111)

#### Ultimate Skill (ปุ่ม R):
- **`[2314] Rock the Stage`** (Ultimate, Magic, Fire, Direct Healing, Shield, AoE)
  - *Description*: As a passionate music lover, your impromptu performance immediately grants 5 Performance Passion. It also heals nearby allies and gives them a Shield that lasts for 10s, while dealing Magic DMG to nearby enemies. | Performance Passion: Required to perform music. Regenerates 1 stack every 5s. | | Tips: In emergencies, this powerful shield can ease the team's survival pressure. Time the cast carefully.
  - **Shield**: [Tier G0→G6: 20% .. 50% (20%, 25%, 30%, 35%, 40%, 45%, 50%)]Max HP
  - **Total Healing**: [Tier G0→G6: 351% .. 491.4% (351%, 365.04%, 379.08%, 421.2%, 435.24%, 449.28%, 491.4%)]MATK +[Lv1→Lv30: 33 .. 1400]
  - **Total DMG**: [Tier G0→G6: 351% .. 491.4% (351%, 365.04%, 379.08%, 421.2%, 435.24%, 449.28%, 491.4%)]MATK +[Lv1→Lv30: 52 .. 2098]
  - **CD**: `60s`

#### Expertise Skills (สกิลเลือกใส่):
- **`[2308] Harmonic Anthem`** (Expertise Skill, Magic, Fire, Direct DMG, AoE, Melee)
  - *Description*: Leaps high and slams your guitar into the ground to burst sparks, dealing Magic DMG to the enemies within range. | Each instance of DMG dealt by Amplified Beat (only once per multi-target hit) increases the hit count of Harmonic Anthem by 1, up to 3. | | Tips: Master the Amplified Beat's mechanic of increasing hit count to boost Harmonic Anthem's Attack.
  - **DMG per hit**: [Tier G0→G6: 150% .. 210% (150%, 156%, 162%, 180%, 186%, 192%, 210%)]MATK +[Lv1→Lv30: 22 .. 900](Resilience Break: 292)
  - **Charge Time**: `10s`
- **`[2309] Rhapsody of Flame`** (Expertise Skill, Magic, Fire, Direct DMG, Direct Healing, AoE, Melee)
  - *Description*: My Passion Still Burns! Consumes 5 stacks of Performance Passion to summon a randomly shaped graffiti on the ground, healing 10 allies (party members prioritized) and dealing Magic DMG to the enemies within range. | While standing within the graffiti, the caster gains 10% Fire Bonus. | Only 1 graffiti can exist at a time. | | Performance Passion: Required to perform music. 1 point is regenerated every 5s. | | Tips: This skill has the widest range for both healing and DMG. Cast it once the CD ends for max effectiveness.
  - **Total DMG**: [Tier G0→G6: 450% .. 629.99% (450%, 468%, 486%, 540%, 558%, 576%, 629.99%)]MATK +[Lv1→Lv30: 67 .. 2700](Resilience Break: 139)
  - **Total Healing**: [Tier G0→G6: 150% .. 210% (150%, 156%, 162%, 180%, 186%, 192%, 210%)]MATK +[Lv1→Lv30: 15 .. 600]
  - **CD**: `15s`
- **`[2310] Heroic Melody`** (Expertise Skill, Magic, Fire, Direct DMG, HoT, AoE)
  - *Description*: A rousing melody. When Performance Energy exceeds 15 stacks, you can begin the performance, which cannot be stopped once started. CD: 5s. | While performing Heroic Melody, you consume 6 Performance Energy per second, and every 3s, 10 allies restore HP (Interval affected by Haste). | While you perform Heroic Melody, every 7s, your String Strike transforms into [Link#1615: Fierce Strike]. | While you perform Heroic Melody, the conversion rate of Peaceful Tune +50%. | | Performance Energy: Required to play Melody skills (Heroic Melody and Healing Melody). 1 point of energy is regenerated per second. | | Tips: The skill can't be stopped manually, so time its activation wisely to maximize synergy with Peaceful Tune and Fierce Strike.
  - **Single Healing**: [Tier G0→G6: 20% .. 28% (20%, 20.8%, 21.6%, 24%, 24.8%, 25.6%, 28%)]MATK +[Lv1→Lv30: 2 .. 80]
- **`[2311] Healing Melody`** (Expertise Skill, Magic, Fire, HoT, AoE)
  - *Description*: A soothing melody. When Performance Energy exceeds 15, you can start the performance freely and stop at will. Each time you start, a speaker is deployed to perform a Concerto. (Speaker disappears when Healing Melody ends.) CD: 5s. | While performing Healing Melody, consumes 3 Performance Energy per second, and heals 10 allies every 1 second (Interval affected by Haste). | | Speaker: When you cast Healing Beat, Fivefold Crescendo, Rock the Stage, Concert Circuit, the speaker will simultaneously cast the same skill. | | Performance Energy: Required to play Melody skills (Heroic Melody, Healing Melody). Regenerates 1 point per second. | | Tips: Mastering where and when to place the speaker is essential.
  - **Single Healing**: [Tier G0→G6: 20% .. 28% (20%, 20.8%, 21.6%, 24%, 24.8%, 25.6%, 28%)]MATK +[Lv1→Lv30: 2 .. 80]
- **`[2312] Fivefold Crescendo`** (Expertise Skill, Magic, Fire, Direct Healing, AoE)
  - *Description*: Let the passion surge again! Consumes 3 Performance Passion, reigniting the spirits of the weary. Performs a sequence of notes that restores HP to 10 allies within range (prioritizing teammates) and grants Tenacity Chord. Each stack of Tenacity Chord additionally increases Max HP by 0.5% (up to 2.5% Max HP) for 5s (duration cannot be refreshed once 5 stacks are reached). | | Performance Passion: Required to perform music. Regenerates 1 stack every 5s. | | Tips: Highest healing potential. Monitor your team's health to maximize efficiency and prevent overhealing.
  - **Total Healing**: [Tier G0→G6: 350% .. 490% (350%, 364%, 378%, 420%, 434%, 448%, 490%)]MATK +[Lv1→Lv30: 35 .. 1400]
  - **CD**: `35s`
- **`[2313] Passion Burst`** (Expertise Skill, Magic, Fire, Direct DMG, AoE)
  - *Description*: Strums the strings and releases searing flames forward, dealing Magic DMG to the enemies within range. | Charging alters the skill's range and DMG. | Tier 1: Chants for 0.7s, targeting a fan-shaped area with an 8-meter radius in front. | Tier 2: Chants for 1.4s, targeting a fan-shaped area with an 8-meter radius in front and increasing DMG by 50%. | Tier 3: Chants for 2.1s, targeting a fan-shaped area with an 8-meter radius in front and increasing DMG by 100%. | | Tips: High DMG skill. Combine with Talent effects and the amplifier for strong DMG and healing. Be mindful of environmental safety during casting.
  - **Total DMG**: [Tier G0→G6: 250% .. 350% (250%, 260%, 270%, 300%, 310%, 320%, 350%)]MATK +[Lv1→Lv30: 37 .. 1500](Resilience Break: 648)
  - **CD**: `20s`
- **`[2315] Encore`** (Expertise Skill, Blessing)
  - *Description*: The perfect piece for fan interaction. Grants Encore effect to 10 allies for 10s. | Encore: Grants Super Armor. Each time an offensive or healing Expertise Skill is cast, there is a 50% fixed chance to trigger Encore Strings once, dealing DMG to the current target or healing the lowest-HP ally. | | Tips: Cast during your team's burst window for optimal DMG and healing of Encore.
  - **DMG per hit**: [Tier G0→G6: 30% .. 42% (30%, 31.2%, 32.4%, 36%, 37.2%, 38.4%, 42%)]ATK/MATK +[Lv1→Lv30: 4 .. 180]
  - **Single Healing**: [Tier G0→G6: 30% .. 42% (30%, 31.2%, 32.4%, 36%, 37.2%, 38.4%, 42%)]ATK/MATK +[Lv1→Lv30: 3 .. 120]
  - **Duration**: `10s`
  - **CD**: `45s`
- **`[2316] Center Stage`** (Expertise Skill, Blessing, Increased Damage)
  - *Description*: Increases your MATK for a period of time and amplifies the next skill you cast. | | Special Attack: Your next 2 Special Attacks do not consume Performance Passion. | [Link#1607: Fivefold Crescendo]: Doubles the healing instances. | [Link#1614: Heroic Melody]: Halves the time needed to trigger [Link#1615: Fierce Strike]. | [Link#1605: Harmonic Anthem]: Doubles the DMG dealt. | [Link#1608: Passion Burst]: Allows for direct cast in its strongest form, no chanting required. | | Tips: Evaluate the battle environment and your combat style, then apply the appropriate enhancement at the optimal moment.
  - **MATK bonus**: [Tier G0→G6: 4% .. 8% (4%, 4.4%, 4.8%, 6%, 6.4%, 6.8%, 8%)]+[Lv1→Lv30: 5 .. 80]
  - **Duration**: `15s`
  - **CD**: `0.5s`
  - **Charge Time**: `60s`

#### Talent / Proc / Passive Skills (สกิลเสริมจากสาย Talent):
- **`[2307] Healing Beat`** (Special Attack, Magic, Fire, Direct Healing, Single Target)
  - *Description*: Consumes 3 stacks of Performance Passion to play a tune that heals the caster and the nearby ally with the lowest HP (party members prioritized). The healing amount scales with the caster's MATK (plus an additional fixed heal equal to 3% of the target's Max HP). | | Performance Passion: Required to perform music. 1 point is regenerated every 5s. | | Tips: A healing skill with high uptime. Cast it to avoid letting Performance Passion overflow.
  - **Total Healing**: [Tier G0→G6: 60% .. 84% (60%, 62.4%, 64.8%, 72%, 74.4%, 76.8%, 84%)]MATK +[Lv1→Lv30: 6 .. 240]
- **`[2317] Fierce Strike`** ()
  - *Description*: Swings your guitar with force, dealing Magic DMG equal to 300% ATK to nearby enemies. [Link#1605: Harmonic Anthem] instantly gains 1 charge. Scales with the Level/Tier of Basic Attack. | | Tips: Cast this skill when Harmonic Anthem is on CD.
- **`[2332] Passion Fury`** (Expertise Skill, Magic, Fire, Direct DMG, AoE)
  - *Description*: Channels for 6s and continuously spews searing flames forward, dealing Magic DMG equal to 1000% ATK in total to the enemies within range. | | Tips: Move continuously and try to maximize DMG dealt while staying safe.
  - **Seed Damage**: [Tier G0→G6: 45% .. 63% (45%, 46.8%, 48.6%, 54%, 55.8%, 57.6%, 63%)]MATK+[Lv1→Lv30: 6 .. 272]
- **`[2335] Infinite Rhapsody`** (Ultimate, Magic, Fire, Direct DMG, HoT, AoE)
  - *Description*: Instantly releases a powerful sonic wave, dealing Magic DMG to nearby enemies. Heals nearby allies and grants a Shield that lasts for 10s. Doubles the Performance Passion cap and fully restores Performance Passion. | | Performance Passion: Required to perform music. Regenerates 1 stack every 5s. | | Tips: A powerful emergency shield to ease team survival pressure. Time the cast carefully. Once fully charged with Performance Passion, trigger burst.
  - **Shield**: [Tier G0→G6: 20% .. 50% (20%, 25%, 30%, 35%, 40%, 45%, 50%)]Max HP
  - **Total Healing**: [Tier G0→G6: 351% .. 491.4% (351%, 365.04%, 379.08%, 421.2%, 435.24%, 449.28%, 491.4%)]MATK +[Lv1→Lv30: 33 .. 1400]
  - **Total DMG**: [Tier G0→G6: 350% .. 490% (350%, 364%, 378%, 420%, 434%, 448%, 490%)]MATK +[Lv1→Lv30: 52 .. 2100]
  - **CD**: `40s`
- **`[2336] Concert Circuit`** (Ultimate, Magic, Fire, Direct DMG, HoT, AoE, Ranged)
  - *Description*: A mobile performance melody. While performing, continuously heals allies. Deals Magic DMG to nearby enemies. Each healed ally increases healing by 6%, up to 30%. Each enemy hit increases DMG by 6%, up to 30%. | | Tips: Sustained healing and DMG. Adjust your position based on the number and location of targets to maximize efficiency.
  - **Total DMG**: [Tier G0→G6: 1002% .. 1402.8% (1002%, 1042.08%, 1082.16%, 1202.4%, 1242.48%, 1282.56%, 1402.8%)]MATK +[Lv1→Lv30: 150 .. 6000]
  - **Total Healing**: [Tier G0→G6: 1002% .. 1402.8% (1002%, 1042.08%, 1082.16%, 1202.4%, 1242.48%, 1282.56%, 1402.8%)]MATK +[Lv1→Lv30: 96 .. 3996]
  - **CD**: `60s`

---
### อาชีพ [14] Lucy

#### Basic Attack (คลิกซ้าย):
- **`[2501] 场地标记01`** (Basic Attack, Direct DMG, Thunder, Bullet)
  - *Description*: 场地标记01

#### Special Skill (ปุ่มเลข 1):
- **`[2504] 场地标记01`** (Expertise Skill, Magic, Ice, DoT, AoE, Slow, Ranged)
  - *Description*: 场地标记01

#### Ultimate Skill (ปุ่ม R):
- **`[2506] 场地标记01`** (Ultimate, Magic, Ice, Direct DMG, AoE, Energy Restore, Frozen, Ranged)
  - *Description*: 场地标记01

#### Expertise Skills (สกิลเลือกใส่):
- **`[2505] 场地标记01`** (Expertise Skill, Magic, Ice, DoT, AoE, Slow, Ranged)
  - *Description*: 场地标记01

---
### อาชีพ [15] Natsu

#### Basic Attack (คลิกซ้าย):
- **`[2601] 场地标记01`** (Basic Attack, Direct DMG, Thunder, Bullet)
  - *Description*: 场地标记01

#### Special Skill (ปุ่มเลข 1):
- **`[2604] 场地标记01`** (Expertise Skill, Magic, Ice, DoT, AoE, Slow, Ranged)
  - *Description*: 场地标记01

#### Ultimate Skill (ปุ่ม R):
- **`[2606] 场地标记01`** (Ultimate, Magic, Ice, Direct DMG, AoE, Energy Restore, Frozen, Ranged)
  - *Description*: 场地标记01

#### Expertise Skills (สกิลเลือกใส่):
- **`[2605] 场地标记01`** (Expertise Skill, Magic, Ice, DoT, AoE, Slow, Ranged)
  - *Description*: 场地标记01

---

## หมวดที่ 2: ผังโหนด Talent ทั้ง 9 อาชีพ (โหนดเปิดสาย & โหนดที่มีเอฟเฟกต์การต่อสู้/Proc)

### ผัง Talent ของอาชีพ [1] Stormblade (Stages: `[{'id': 100, 'stage': 0, 'bdType': 0, 'rootId': 23248, 'recommendTalent': [23248, 10371, 23247, 10373, 104018, 129006, 101036, 5598, 107018, 3164, 23249, 103023, 136009, 5611, 23250, 108014, 10372, 5599, 5592, 138002, 100022, 5595, 1316, 1314, 137004, 135003, 10370, 1323, 1322, 102007], 'factor': 4, 'recommendModEffectId': [1111, 1113, 1114, 1409, 2104, 2105, 2404], 'mainAttrShow': [11030, 11110, 11140]}, {'id': 101, 'stage': 1, 'bdType': 0, 'rootId': 130003, 'recommendTalent': [130003, 5209, 146002, 148003, 5212, 8466, 8470, 9102, 143004, 154001, 105017, 5600, 1315, 5596, 5210, 5593, 33040, 123028, 33041, 9101, 109017, 8469, 8468, 5211, 5208, 132003, 5612, 38071, 106018, 5602, 128029, 124028, 144003, 141002, 140002, 151002, 149003, 112018, 5601, 8467], 'factor': 4, 'recommendModEffectId': [1111, 1113, 1114, 1409, 2104, 2105, 2404], 'mainAttrShow': [11030, 11110, 11140]}, {'id': 102, 'stage': 1, 'bdType': 1, 'rootId': 131002, 'recommendTalent': [131002, 6306, 166001, 157001, 6305, 7241, 7240, 114011, 162001, 122013, 5605, 6307, 34109, 123029, 5604, 5609, 7242, 5608, 6680, 6678, 167001, 118011, 34110, 120012, 6308, 6309, 1319, 5606, 5603, 156001, 119011, 168001, 155001, 161001, 124029, 7243, 7244, 5610, 37083, 116013], 'factor': 3, 'recommendModEffectId': [1111, 1113, 1114, 1408, 1410, 2104, 2105, 2404], 'mainAttrShow': [11030, 11120, 11130]}]`)
- **`[100] Blade Intent`** (Type 4 | Effects: `[[3, 2200020, 1]]`)
  - *Combat Logic*: 3 points of [Link#1167: Blade Intent] are gained when an Expertise Skill is cast.
- **`[101] Agility Conversion`** (Type 4 | Effects: `[[4, 2, 11332, 1250]]`)
  - *Combat Logic*: Every 8 Agility grants 1 ATK.
- **`[102] Thunder Whirl`** (Type 4 | Effects: `[[3, 2200040, 1]]`)
  - *Combat Logic*: [Link#1096: Piercing Slash] grants [Link#1556: Overdrive] 1 charge.
- **`[103] Keen Strike`** (Type 4 | Effects: `[[3, 2200050, 1]]`)
  - *Combat Logic*: When Basic Attacks deal DMG, 10% chance to trigger [Link#1096: Piercing Slash], once per second.
- **`[104] Keen Enhancement`** (Type 4 | Effects: `[[3, 2200060, 1]]`)
  - *Combat Logic*: Increases the fixed chance to trigger [Link#1096: Piercing Slash] by 10%.
- **`[105] Iaido Mastery`** (Type 4 | Effects: `[[3, 2200070, 1]]`)
  - *Combat Logic*: [Link#1500: Iaido Slash] Crit +10%. | Each 1% Crit chance grants 0.15% Crit DMG for skills that consume [Link#1104: Thunder Sigils]. When Crit chance exceeds 60%, every extra 1% grants an additional 0.88% Crit DMG for skills that consume [Link#1104: Thunder Sigils].
- **`[106] Wind Assault I`** (Type 4 | Effects: `[[3, 2200080, 1]]`)
  - *Combat Logic*: Crit Rate obtained in any way is increased by 12%, but Luck chance obtained in any way are reduced by 10%.
- **`[107] Zen Moment`** (Type 4 | Effects: `[[3, 2200090, 1]]`)
  - *Combat Logic*: Crit hits of Special Attacks grant 100 [Link#1167: Blade Intent].
- **`[108] Thunder Sigil Charm`** (Type 4 | Effects: `[[3, 2200100, 1]]`)
  - *Combat Logic*: Increases Max [Link#1104: Thunder Sigil] by 1.
- **`[109] Thunder Reversal`** (Type 4 | Effects: `[[3, 2200110, 1]]`)
  - *Combat Logic*: Consumes 100 [Link#1167: Blade Intent] to gain stacks of Thunder Reversal Mark. When Thunder Reversal Mark reaches 5 stacks, casting [Link#1500: Iaido Slash] grants the Thunder Reversal effect and removes all Thunder Reversal Mark stacks. | Thunder Reversal: Gain a 10% Thunder DMG bonus for 15s.
- **`[110] Agility Conversion`** (Type 4 | Effects: `[[3, 2200120, 1]]`)
  - *Combat Logic*: Every 10 Agility grants 7 Haste.
- **`[112] Falcon's Heart`** (Type 4 | Effects: `[[3, 2200140, 1]]`)
  - *Combat Logic*: The Falcon ignores 30% of the target's Armor.
- **`[113] Explosive Arrow`** (Type 4 | Effects: `[[3, 2200150, 1]]`)
  - *Combat Logic*: When a Basic Attack or Special Attack deals DMG, it has a fixed 10% chance to fire an [Link#1144: Explosive Arrow], once every 3s.
- **`[114] Light and Shadow Drain`** (Type 4 | Effects: `[[3, 2200160, 1]]`)
  - *Combat Logic*: [Link#1142: Lightseeker Arrow] has a fixed 50% chance to apply [Link#1141: Bleed] to the target.
- **`[115] Stomp`** (Type 4 | Effects: `[[3, 2200170, 1]]`)
  - *Combat Logic*: Casting [Link#1549: Wildcall] again within 10s of its initial cast commands all beasts on the field to immediately cast [Link#1145: Stomp].
- **`[116] Radiant Charge`** (Type 4 | Effects: `[[3, 2200180, 1]]`)
  - *Combat Logic*: When an arrow fired from Radiance Rift deals DMG for 1 time, increases the DMG of the next [Link#1548: Blast Shot] by 20%, up to a maximum of 100%.
- **`[118] Phantom Scythe Realm I`** (Type 4 | Effects: `[[3, 2200200, 1]]`)
  - *Combat Logic*: Increases Max [Link#1101: Moonblades] by 1.
- **`[119] Phantom Scythe Realm II`** (Type 4 | Effects: `[[3, 2200210, 1]]`)
  - *Combat Logic*: Casting [Link#1503: Thundercut] grants 12 + Luck% x 10 points of [Link#1167: Blade Intent].
- **`[120] Condemn`** (Type 4 | Effects: `[[3, 2200220, 1]]`)
  - *Combat Logic*: When casting a skill that consumes Photon Energy, there is a 30% fixed chance for Basic Attacks to evolve into [Link#1598: Condemn].
- **`[121] Divine Circle Defender`** (Type 4 | Effects: `[[3, 2200230, 1]]`)
  - *Combat Logic*: While within the [Link#1560: Divine Circle], the Armor effect provided by [Link#1561: Valor Bash] +30%.
- **`[122] Divine Circle Chant`** (Type 4 | Effects: `[[3, 2200240, 1]]`)
  - *Combat Logic*: The recovery rate of Holy Sigils from Haste +100%.
- **`[123] Lightforged Fortitude`** (Type 4 | Effects: `[[3, 2200250, 1]]`)
  - *Combat Logic*: Throughout the duration of [Link#1172: Radiant Shield], [Link#1170: Block] chance +10%.
- **`[124] Reckon Blaze`** (Type 4 | Effects: `[[3, 2200260, 1]]`)
  - *Combat Logic*: When [Link#1561: Valor Bash] deals Crit DMG, gain Blazing. | Casting [Link#1565: Aegis Ward] guarantees Blazing. | Scorching Heat: For the next 10s, [Link#1563: Reckoning] evolves into [Link#1600: Inferno Reckon].
- **`[126] Sigil Pursuit`** (Type 4 | Effects: `[[3, 2200280, 1]]`)
  - *Combat Logic*: DMG dealt by [Link#1176: Vanguard Hunt] and [Link#1559: Sacred Blade] to targets with [Link#1199: Holy Mark] increases by 20%.
- **`[128] Shadow Despise`** (Type 4 | Effects: `[[3, 2200300, 1]]`)
  - *Combat Logic*: For each enemy within 3m, you gain 3% Armor Penetration, up to 15%. This effect is doubled against Elite or stronger enemies.
- **`[129] Iai Thunder Dance`** (Type 4 | Effects: `[[3, 2200310, 1]]`)
  - *Combat Logic*: When [Link#1104: Thunder Sigils] are at 3 or higher, Special Attack hits twice times consecutively.
- **`[130] String Expansion`** (★ KEYSTONE SPEC | Effects: `[[3, 2200320, 1]]`)
  - *Combat Logic*: Performance Passion max limit +1.
- **`[131] Severed Chapter`** (Type 4 | Effects: `[[3, 2200330, 1]]`)
  - *Combat Logic*: Increases Resilience Break Efficiency of self and Allies within 30 meters by 10%. This effect cannot stack. | After activating [Link#1614: Heroic Melody], you and Allies within 30 meters have an resilience break efficiency +30% and deal 15% more DMG to Resilience Broken targets. This effect cannot stack.
- **`[132] Fiery Beat`** (Type 4 | Effects: `[[3, 2200340, 1]]`)
  - *Combat Logic*: [Link#1609: Healing Beat] Crit Rate +10%. | [Link#1609: Healing Beat ]Healing +10%.
- **`[133] Encore Chain`** (Type 4 | Effects: `[[3, 2200350, 1]]`)
  - *Combat Logic*: When [Link#1193: Encore Strings] triggers, it activates a second time on the same target.
- **`[134] Sonic Therapy`** (Type 4 | Effects: `[[3, 2200360, 1]]`)
  - *Combat Logic*: Converted healing from DMG +20% for targets affected by [Link#1192: Note].
- **`[135] Soundwave Overclock`** (Type 4 | Effects: `[[4, 4, 11722, 10000]]`)
  - *Combat Logic*: Upon casting [Link#1610: Center Stage], grants 15 Soundwave Energy, and doubles all the Soundwave Energy gained in the next 10s.
- **`[136] Vitality Unleash`** (Type 4 | Effects: `[[3, 2200380, 1]]`)
  - *Combat Logic*: 7% of DMG dealt and 15% of healing done is stored as Rhythm. Within 10s after you cast [Link#1610: Center Stage], the use of Expertise and [Link#1609: Healing Beat] consumes Rhythm to grant up to 40% bonus healing. The cap for Rhythm storage is 30 times MATK.
- **`[137] Swift Blade`** (Type 4 | Effects: `[[3, 2200390, 1]]`)
  - *Combat Logic*: When Agility reaches 500 points, Crit DMG and Luck Damage +5%.
- **`[138] Thunder Charm Blade`** (Type 4 | Effects: `[[3, 2200400, 1]]`)
  - *Combat Logic*: For each 1 [Link#1104: Thunder Sigil] consumed by Expertise Skill, gain an additional 3 points of [Link#1167: Blade Intent]. | For every consumption of Blade Intent, grants 20% DMG Reduction for 5s.
- **`[139] Infinite Thunder`** (Type 4 | Effects: `[[3, 2200410, 1]]`)
  - *Combat Logic*: For every 5 [Link#1104: Thunder Sigils] consumed, the remaining CD of [Link#1504: Volt Surge] -0.5s.
- **`[140] Thunder Sigil Rewind`** (Type 4 | Effects: `[[3, 2200420, 1]]`)
  - *Combat Logic*: When consuming [Link#1104: Thunder Sigils], there is a chance to return 1 [Link#1104: Thunder Sigil], and for each additional 1 [Link#1104: Thunder Sigil] consumed, the return chance +9%.
- **`[141] Thunder Might`** (Type 4 | Effects: `[[3, 2200430, 1]]`)
  - *Combat Logic*: Activate [Link#1504: Volt Surge]. [Link#1501: Flash Strike] and [Link#1554: Raijin Dash] evolve into [Link#1584: Dracoflash] and [Link#1585: Phantom Slash].
- **`[142] Unmatched Raijin Dash`** (Type 4 | Effects: `[[3, 2200440, 1]]`)
  - *Combat Logic*: [Link#1554: Raijin Dash] and its enhanced skill ([Link#1585: Phantom Slash]) ignore the target's Armor. | [Link#1554: Raijin Dash] and its enhanced skill ([Link#1585: Phantom Slash]) deal 10% more damage per additional 1 enemy hit.
- **`[143] Violent Slash`** (Type 4 | Effects: `[[3, 2200450, 1]]`)
  - *Combat Logic*: Increases the critical rate of [Link#1500: Iaido Slash] and [Link#1588: Thunder Cut] by 12%.
- **`[144] Wind Assault II`** (Type 4 | Effects: `[[3, 2200460, 1]]`)
  - *Combat Logic*: Crit Rate obtained in any way is increased by 12%, but Luck chance obtained in any way are reduced by 10%.
- **`[145] Dual Blade Intent`** (Type 4 | Effects: `[[3, 2200470, 1]]`)
  - *Combat Logic*: When [Link#1167: Blade Intent] is at least 100, [Link#1501: Flash Strike], [Link#1554: Raijin Dash], and their enhanced skills ([Link#1584: Dracoflash], [Link#1585: Phantom Slash]) +10% Crit and +20% Thunder DMG. | When [Link#1167: Blade Intent] is at least 100, greatly increases [Link#1501: Flash Strike]'s and [Link#1554: Raijin Dash]'s casting speed.
- **`[146] Thunder Sigil Affinity`** (Type 4 | Effects: `[[3, 2200480, 1]]`)
  - *Combat Logic*: Each additional [Link#1104: Thunder Sigil] consumed by Expertise Skill or Special Attacks increases your Thunder DMG dealt by 1.5% when they deal DMG.
- **`[147] Thundrage`** (Type 4 | Effects: `[[3, 2200490, 1]]`)
  - *Combat Logic*: Each use of [Link#1584: Dracoflash] or [Link#1585: Phantom Slash] grants 4 stacks of Thundrage, up to 8 stacks.
- **`[148] Overdrive Refinement`** (Type 4 | Effects: `[[3, 2200500, 1]]`)
  - *Combat Logic*: Reduces the CD of [Link#1556: Overdrive] by 30%.
- **`[149] Blade Intent Thunderstrike`** (Type 4 | Effects: `[[3, 2200510, 1]]`)
  - *Combat Logic*: When [Link#1500: Iaido Slash] deals Crit DMG, if the [Link#1167: Blade Intent] exceeds 20, launches [Link#1100: Thunderstrike] (which can only be triggered once per use of [Link#1500: Iaido Slash]).
- **`[150] Thunder Sigil Charm`** (Type 4 | Effects: `[[3, 2200520, 1]]`)
  - *Combat Logic*: Increases Max [Link#1104: Thunder Sigil] by 1.
- **`[151] Break Slash`** (Type 4 | Effects: `[[3, 2200530, 1]]`)
  - *Combat Logic*: When dealing Crit DMG, [Link#1500: Iaido Slash] and its enhanced skill ([Link#1588: Thunder Cut]) nullifies 30% of the targets' Armor.
- **`[152] Arcane`** (Type 4 | Effects: `[[3, 2200540, 1]]`)
  - *Combat Logic*: Crit DMG +10%
- **`[153] Instant Slash`** (Type 4 | Effects: `[[3, 2200550, 1]]`)
  - *Combat Logic*: [Link#1500: Iaido Slash] reduces the Armor of the target hit by 6%. The effect lasts 5s and stacks up to 5 times.
- **`[154] Advancement`** (Type 4 | Effects: `[[3, 2200560, 1]]`)
  - *Combat Logic*: Mastery +6%
- **`[155] Thunder Scythe`** (Type 4 | Effects: `[[3, 2200570, 1]]`)
  - *Combat Logic*: Reduces the [Link#1586: Charge Seeds] that [Link#1106: Storm Scythe] consumes by 5.
- **`[156] Blade Intent Recovery`** (Type 4 | Effects: `[[3, 2200580, 1]]`)
  - *Combat Logic*: Each 1% Haste increases the REG SPD of [Link#1167: Blade Intent] by 1%.
- **`[157] Moonstrike Spec`** (★ KEYSTONE SPEC | Effects: `[[6, 1714, 1715], [3, 2200590, 1]]`)
  - *Combat Logic*: Replaces Special Attack with [Link#1507: Moonstrike], enhancing the ability. | Cast [Link#1507: Moonstrike] to gain 30 [Link#1167: Blade Intent]. | | Frequent consumption of Thunder Sigils summons Moonblades to continuously attack the target. High Haste accelerates Moonblades' attacks. High Luck increases the frequency of Moonblades triggering Thunder Strike.
- **`[158] Divine Sickle`** (Type 4 | Effects: `[[3, 2200600, 1]]`)
  - *Combat Logic*: Casting [Link#1586: Storm Scythe] 7 times triggers [Link#1587: Divine Sickle]. | [Link#1587: Divine Sickle] is guaranteed to Crit. | When Luck is between 28% and 45%, [Link#1587: Divine Sickle]'s Final DMG increases by 150%, but requires 14 casts of [Link#1586: Storm Scythe] to trigger. | When Luck chance is above 45%, Final DMG increases by 275%, but requires 21 casts of [Link#1586: Storm Scythe] to trigger.
- **`[159] Moonlight Charge`** (Type 4 | Effects: `[[3, 2200610, 1]]`)
  - *Combat Logic*: If Luck chance exceeds 25%, [Link#1101: Moonblades] trigger a Lucky Strike to gain [Link#1106: Charge Seed]. Otherwise, when [Link#1101: Moonblades] deal DMG, it has a fixed 25% chance to gain [Link#1106: Charge Seed].
- **`[160] Blade Intent - Rare`** (Type 4 | Effects: `[[3, 2200620, 1]]`)
  - *Combat Logic*: Increases Max [Link#1167: Blade Intent] by 75.
- **`[161] Thousand Thunder Flashes`** (Type 4 | Effects: `[[3, 2200630, 1]]`)
  - *Combat Logic*: Every 2 times [Link#1100: Thunderstrike] is triggered, the CD of [Link#1505: Stormflash] is reduced by 0.7s.
- **`[162] Chaos Breaker`** (Type 4 | Effects: `[[3, 2200640, 1]]`)
  - *Combat Logic*: When [Link#1505: Stormflash] is activated, [Link#1507: Moonstrike] evolves into [Link#1506: Chaos Breaker].
- **`[163] Enhanced Thunderstrike`** (Type 4 | Effects: `[[3, 2200650, 1]]`)
  - *Combat Logic*: Increases the DMG dealt by [Link#1100: Thunderstrike] by 20%. | Each 1% Luck grants [Link#1100: Thunderstrike] 1% more DMG dealt.
- **`[164] Charge Catcher`** (Type 4 | Effects: `[[3, 2200660, 1]]`)
  - *Combat Logic*: Each enemy defeated grants 1 [Link#1106: Charge Seed] (effective within a team).
- **`[165] Thunderstrike Whisper`** (Type 4 | Effects: `[[3, 2200670, 1]]`)
  - *Combat Logic*: Increases the Thunder DMG [Link#1100: Thunderstrike] deals by 50%, yet [Link#1100: Thunderstrike] never deals Crit DMG.
- **`[166] Moonstrike Sharp Strike`** (Type 4 | Effects: `[[3, 2200680, 1]]`)
  - *Combat Logic*: When [Link#1167: Blade Intent] is at least 50, [Link#1507: Moonstrike] and its enhanced skill ([Link#1506: Chaos Breaker]) are guaranteed to land a Crit.
- **`[167] Thunder Sigil Charm`** (Type 4 | Effects: `[[3, 2200690, 1]]`)
  - *Combat Logic*: Increases Max [Link#1104: Thunder Sigil] by 1. | During [Link#1505: Stormflash], each trigger of [Link#1586: Storm Scythe] extends its duration by 0.5s, up to 5s.
- **`[168] Thunder Rune Mastery`** (Type 4 | Effects: `[[3, 2200700, 1]]`)
  - *Combat Logic*: Doubles Max [Link#1167: Blade Intent].
- **`[169] Raijin Dash Charge`** (Type 4 | Effects: `[[3, 2200710, 1]]`)
  - *Combat Logic*: When [Link#1503: Thundercut] triggers a Lucky Strike, grants 1 [Link#1106: Charge Seed].
- **`[170] Moonblade Swift`** (Type 4 | Effects: `[[3, 2200720, 1]]`)
  - *Combat Logic*: [Link#1101: Moonblades] additionally deal 1 instance of Whirling DMG every 6s. Each 2% Haste reduces its CD by 1%.
- **`[171] Thunder Might`** (Type 4 | Effects: `[[3, 2200730, 1]]`)
  - *Combat Logic*: During [Link#1505: Stormflash], [Link#1586: Storm Scythe] will activate twice in succession.
- **`[172] Thunder Sigil Rewind`** (Type 4 | Effects: `[[3, 2200740, 1]]`)
  - *Combat Logic*: During [Link#1504: Volt Surge], the return chance of Thunder Sigil Rewind doubles, but the damage bonus of non-derivative skills that consume [Link#1104: Thunder Sigil] is reduced from 25% to 20%.
- **`[173] Luck Enhancement`** (Type 4 | Effects: `[[3, 2200130, 1]]`)
  - *Combat Logic*: Lucky Strike ATK +100%.

---
### ผัง Talent ของอาชีพ [2] Frost Mage (Stages: `[{'id': 103, 'stage': 0, 'bdType': 0, 'rootId': 21228, 'recommendTalent': [21228, 10367, 21226, 138003, 201034, 6690, 136010, 203016, 200019, 21227, 202027, 2251, 5567, 10366, 10368, 204016, 137005, 135004, 2260, 5568, 200021, 5565, 5591, 5566, 2250, 10369, 200020, 2261, 21229, 208017], 'factor': 3, 'recommendModEffectId': [1112, 1113, 1114, 1407, 1409, 1410, 2104, 2105], 'mainAttrShow': [11020, 11110, 11130]}, {'id': 104, 'stage': 1, 'bdType': 0, 'rootId': 233002, 'recommendTalent': [233002, 5205, 222011, 5579, 2256, 2257, 217011, 7236, 216011, 7239, 5588, 5586, 234002, 7237, 214011, 33039, 6042, 223027, 240001, 5204, 252001, 249001, 6047, 219011, 2258, 5577, 242002, 5583, 251001, 5587, 241002, 215011, 250001, 6693, 244001, 38070, 224027, 221011, 5876, 245001], 'factor': 3, 'recommendModEffectId': [1112, 1113, 1114, 1407, 1409, 1410, 2104, 2105], 'mainAttrShow': [11020, 11110, 11130]}, {'id': 105, 'stage': 1, 'bdType': 1, 'rootId': 212017, 'recommendTalent': [212017, 8462, 206017, 5569, 2252, 2253, 6302, 211017, 6301, 225026, 35084, 6043, 223026, 263001, 8463, 231003, 8464, 5581, 269001, 210017, 2255, 261001, 6046, 209017, 207018, 6696, 258001, 6697, 257001, 35085, 224026, 5575, 268001, 5571, 259001, 235001, 6045, 271001, 5574, 234001], 'factor': 2, 'recommendModEffectId': [1112, 1113, 1114, 1407, 2104, 2105], 'mainAttrShow': [11020, 11120, 11140]}]`)
- **`[200] Cold Intent - Sharp`** (Type 4 | Effects: `[[3, 2204010, 1]]`)
  - *Combat Logic*: Max Ice Energy +10. | Special Attack DMG +12%.
- **`[201] Intellect Conversion`** (Type 4 | Effects: `[[4, 3, 11342, 1000]]`)
  - *Combat Logic*: Every 10 Intellect grants 1 MATK.
- **`[202] Frost Curse Sigil`** (Type 4 | Effects: `[[3, 2204030, 1]]`)
  - *Combat Logic*: When a Special Attack deals DMG, it has a fixed 5% chance to [Link#1171: Frozen] the target.
- **`[203] Ice Revelation`** (Type 4 | Effects: `[[3, 2204040, 1]]`)
  - *Combat Logic*: Summons 2 permanent Ice Crystal Cores that float beside you. | Ice Crystal Core | When Basic Attacks deal DMG, Ice Crystal Cores have a fixed 10% chance to fire 2 Ice Arrows. | Ice Arrow: Each arrow deals Magic DMG equal to 28% ATK to the target and grants 1 [Link#1161: Frost Crystal] (up to 2 [Link#1161: Frost Crystals] can be stored).
- **`[204] Breath of Frost`** (Type 4 | Effects: `[[3, 2204050, 1]]`)
  - *Combat Logic*: [Link#1161: Frost Crystal] cap +1.
- **`[206] Tide Mastery`** (Type 4 | Effects: `[[3, 2204060, 1]]`)
  - *Combat Logic*: While casting [Link#1509: Frostbeam], you can channel [Link#1508: Tidepool] and [Link#1558: Maelstrom].
- **`[207] Crystal Resonance`** (Type 4 | Effects: `[[3, 2204070, 1]]`)
  - *Combat Logic*: When [Link#1509: Frostbeam] deals DMG, it has a 30% fixed chance to make Ice Crystal Core fire an Ice Arrow. Up to 1 Ice Arrow can be fired every 0.5s. | The final DMG of the Ice Arrow is doubled (this also affects DMG triggered by the Frost Explosion talent).
- **`[208] Frost Explosion`** (Type 4 | Effects: `[[3, 2204080, 1]]`)
  - *Combat Logic*: When Ice Arrows fired by Ice Crystal Cores deal a Crit, they deal an additional instance of Magic DMG equal to 28% ATK. This DMG can trigger Lucky Strike.
- **`[209] Ice Crystal Expansion`** (Type 4 | Effects: `[[3, 2204090, 1]]`)
  - *Combat Logic*: Max Ice Energy +40.
- **`[210] Ice Shard Pact`** (Type 4 | Effects: `[[3, 2204100, 1]]`)
  - *Combat Logic*: Increases [Link#1558: Maelstrom]'s Ice Energy recovery rate by 200%.
- **`[211] Cold Wind Convergence`** (Type 4 | Effects: `[[3, 2204110, 1]]`)
  - *Combat Logic*: When [Link#1514: Frozen Gale] hits a target (only triggers once when hitting multiple targets), it consumes all [Link#1161: Frost Crystals] to summon [Link#1162: Icy Bolt], with the number of [Link#1162: Icy Bolt] equal to the consumed [Link#1161: Frost Crystals]. | [Link#1162: Icy Bolt] deals DMG, restores 5 Ice Energy, and reduces the Ice Energy cost of skills by 3% for the next 15s, stacking up to 6 times.
- **`[212] Frostbeam Spec`** (★ KEYSTONE SPEC | Effects: `[[6, 1242, 1241], [3, 2204120, 1]]`)
  - *Combat Logic*: Replaces Special Attack with [Link#1509: ​Frostbeam​] and enhances the skill. | Every [Link#1161: Frost Crystal] increases [Link#1509: ​Frostbeam​] DMG by 15%. Each 10% Mastery grants an additional 0.85% DMG bonus (up to 5%) and increases the Ice Energy consumed by 30%. | When [Link#1509: ​Frostbeam​] hits a target, every 13 hits reduce the remaining CD of [Link#1515: Permafrost]by 1s (hitting multiple targets only counts once). | | Consumes Ice Energy to channel Frostbeam continuously at the target. High Haste and Mastery greatly speed up its channeling while improving Ice Energy recovery.
- **`[214] Snow Shadow`** (Type 4 | Effects: `[[3, 2204130, 1]]`)
  - *Combat Logic*: For every 25 Ice Energy consumed, the CD of [Link#1510: Crystal Veil] -1s.
- **`[215] Frost Comet`** (Type 4 | Effects: `[[3, 2204140, 1]]`)
  - *Combat Logic*: When [Link#1512: Frost Lance] that consumes [Link#1161: Frost Crystals] deals DMG, there is a fixed 21% chance to summon [Link#1165: Frost Comet].
- **`[216] Frozen Stars`** (Type 4 | Effects: `[[3, 2204150, 1]]`)
  - *Combat Logic*: When [Link#1512: Frost Lance] triggers both a Crit and a Lucky Strike, [Link#1511: Meteor Storm]'s CD is immediately reset. If [Link#1511: Meteor Storm] is already off cooldown, [Link#1511: it] will be automatically cast (but this [Link#1511: Meteor Storm] will deal half damage). This effect can trigger up to 3 times within 1.5s (affected by Attack Speed).
- **`[217] Blizzard Dual Lances`** (Type 4 | Effects: `[[3, 2204160, 1]]`)
  - *Combat Logic*: Within 8s after casting [Link#1513: Blizzard], [Link#1512: Frost Lance] can fire an additional [Link#1512: Frost Lance] at another target near the original one.
- **`[219] Stormy Encounter`** (Type 4 | Effects: `[[3, 2204170, 1]]`)
  - *Combat Logic*: When [Link#1510: Crystal Veil] deals DMG, it has a fixed chance to reduce the CD of [Link#1513: Blizzard] by 1s. The chance equals half percentage of your Luck.
- **`[220] Shattering Strike`** (Type 4 | Effects: `[[3, 2204180, 1]]`)
  - *Combat Logic*: When [Link#1511: Meteor Storm] deals DMG, it causes Ice Crystal Cores to fire Ice Arrows. This effect can trigger up to once per [Link#1511: Meteor Storm] cast.
- **`[221] Glacier fury`** (Type 4 | Effects: `[[3, 2204190, 1]]`)
  - *Combat Logic*: Consuming 15 [Link#1161: Frost Crystals] enhances the next [Link#1513: Blizzard]. | [Link#1513: Blizzard]: Bypasses the casting time and increases DMG dealt by 30%, and trigger Lucky Strike.
- **`[222] Icicle Volley`** (Type 4 | Effects: `[[3, 2204200, 1]]`)
  - *Combat Logic*: For every 10 casts of [Link#1512: Frost Lance], a [Link#1164: Piercing Ice Lance] is launched forward.
- **`[223] Glazed Vastness`** (Type 4 | Effects: `[[3, 2204210, 1]]`)
  - *Combat Logic*: Ice skills deal 8% more DMG to Elites and stronger targets.
- **`[224] Continuous Stream`** (Type 4 | Effects: `[[3, 2204220, 1]]`)
  - *Combat Logic*: Dealing DMG triggers Trickle. | Trickle: Grants a 1% Ice damage bonus for 6s, stacking up to 5 times.
- **`[225] Boundless Frost`** (Type 4 | Effects: `[[3, 2204230, 1]]`)
  - *Combat Logic*: Every 50 Ice Energy consumed grants 1 [Link#1161: Frost Crystal]. | Max [Link#1161: Frost Crystal] +3. Each possessed [Link#1161: Frost Crystal] increases [Link#1509: Frostbeam] DMG by 5%.
- **`[226] Frost Shock`** (Type 4 | Effects: `[[3, 2204240, 1]]`)
  - *Combat Logic*: When an Expertise Skill or Ultimate lands a Lucky Strike, it has a fixed 30% chance to trigger [Link#1163: Frost Shock], once every 3s.
- **`[227] Quick Frozen Blast`** (Type 4 | Effects: `[[3, 2204250, 1]]`)
  - *Combat Logic*: When an Expertise Skill or Ultimate deals DMG to a target with [Link#1171: Frozen], it triggers [Link#1163: Frost Shock], once per second.
- **`[228] Icy Calm`** (Type 4 | Effects: `[[3, 2204260, 1]]`)
  - *Combat Logic*: Each additional target hit by an Expertise Skill or Ultimate grants a 2% bonus to your highest stat among Mastery, Haste, Crit, or Luck for 5s. Hitting more than 5 additional targets still only counts as 5.
- **`[229] Instant Cooling`** (Type 4 | Effects: `[[3, 2204270, 1]]`)
  - *Combat Logic*: Every 35 Ice Energy consumed reduces the remaining CD of [Link#1511: Meteor Storm] and [Link#1514: Frozen Gale] by 1.3s.
- **`[230] Cold Stream`** (Type 4 | Effects: `[[3, 2204280, 1]]`)
  - *Combat Logic*: Max Ice Energy +25. | Every 1% Haste increases Ice Energy's auto REG SPD by 1%.
- **`[231] Frostjade Staff`** (Type 4 | Effects: `[[3, 2204290, 1]]`)
  - *Combat Logic*: When Ice Arrow cast with Ice Crystal Core deals DMG, restores 1 Ice Energy. | In the [Link#1515: Permafrost] status, the recovery doubles.
- **`[233] Icicle Spec`** (★ KEYSTONE SPEC | Effects: `[[3, 2204300, 1]]`)
  - *Combat Logic*: Further enhances [Link#1512: Frost Lance]. | When [Link#1512: Frost Lance] deals Crit DMG, there is a fixed 30% chance for Ice Crystal Cores to fire Ice Arrows. | | Time your use of Ice Energy to chant and launch Frost Lance. Crit and Luck increase the chance to skip chanting and significantly boost the lance's DMG.
- **`[234] Frost Domain`** (Type 4 | Effects: `[[3, 2204310, 1]]`)
  - *Combat Logic*: The area of [Link#1516: Glacier Hymn] -50%. While within the domain, you gain a 25% Ice bonus.
- **`[235] Cold Pulse`** (Type 4 | Effects: `[[3, 2204320, 1]]`)
  - *Combat Logic*: Every 50 hits by [Link#1509: Frostbeam] trigger a [Link#1166: Cold Pulse]. | For each additional enemy hit, increases [Link#1166: Cold Pulse] DMG by 20%, up to 500%.
- **`[236] Intellect Cooling`** (Type 4 | Effects: `[[3, 2204330, 1]]`)
  - *Combat Logic*: When Intellect reaches 300, skill CD -10%.
- **`[237] Secondary Amp`** (Type 4 | Effects: `[[3, 2204340, 1]]`)
  - *Combat Logic*: Boost the highest stat among the following 5 stats: Crit, Haste, Luck, Mastery, and Versatility by 3.5% as a final value.
- **`[238] Cold Intent - Flow`** (Type 4 | Effects: `[[3, 2204350, 1]]`)
  - *Combat Logic*: Ice Energy cap +40. | Special Attack damage +4%.
- **`[239] Ice Comet`** (Type 4 | Effects: `[[3, 2204360, 1]]`)
  - *Combat Logic*: When Intellect reaches 500, gain 5% Ice bonus.
- **`[240] Endless Cold`** (Type 4 | Effects: `[[3, 2204370, 1]]`)
  - *Combat Logic*: Every 20 [Link#1161: Frost Crystals] consumed grants Endless Cold effect. | Endless Cold: For 10s, increases [Link#1511: Meteor Storm] DMG by 150%, and removes its CD and Ice Energy cost. During this period, Ice Arrows triggered by [Link#1511: Meteor Storm] cannot produce [Link#1161: Frost Crystal]. | When Endless Cold is triggered during [Link#1515: Permafrost], enter the Endless Cold state after the effect of [Link#1515: Permafrost] ends. If the number of [Link#1161: Frost Crystals] consumed during this period exceeds 20, proportionally increase the final damage dealt by [Link#1511: Meteor Storm] (up to 100%).
- **`[241] Frost Lance Barrage`** (Type 4 | Effects: `[[3, 2204380, 1]]`)
  - *Combat Logic*: During [Link#1512: Permafrost], [Link#1515: Frost Lance] fires 2 consecutive shots.
- **`[242] Freezing Meteor Storm`** (Type 4 | Effects: `[[3, 2204390, 1]]`)
  - *Combat Logic*: When [Link#1511: Meteor Storm] deals damage, 20% chance to apply [Link#1171: Frozen] to the target. | Throughout the duration of [Link#1515: Permafrost], when [Link#1512: Frost Lance] and [Link#1511: Meteor Storm] critically hit, extends the duration of [Link#1515: Permafrost] by 0.5s, up to 5s of extension.
- **`[243] Energy Saving`** (Type 4 | Effects: `[[3, 2204400, 1]]`)
  - *Combat Logic*: When consuming [Link#1161: Frost Crystal] to cast [Link#1512: Frost Lance], refunds 50% of the Ice Energy consumed after the cast. | When casting [Link#1512: Frost Lance] without consuming [Link#1161: Frost Crystal], an additional 50% of the Ice Energy consumed is deducted after the cast.
- **`[244] Frost Blade`** (Type 4 | Effects: `[[3, 2204410, 1]]`)
  - *Combat Logic*: [Link#1512: Frost Lances] that consume [Link#1161: Frost Crystal] deal 30% more DMG.
- **`[245] Deep Cold Magic Spear`** (Type 4 | Effects: `[[3, 2204420, 1]]`)
  - *Combat Logic*: [Link#1512: Frost Lance] deals 70% more DMG. | [Link#1512: Frost Lance] costs 100% more time to use.
- **`[246] Meteor Storm Expansion`** (Type 4 | Effects: `[[3, 2204430, 1]]`)
  - *Combat Logic*: [Link#1511: Meteor Storm] hit count +1. | [Link#1511: Meteor Storm] gains 10% Ice Bonus.
- **`[247] Frost Lance Crit`** (Type 4 | Effects: `[[3, 2204440, 1]]`)
  - *Combat Logic*: [Link#1512: Frost Lance] deals 1.5% more Crit DMG. The effect lasts 6s and stacks up to 10 times.
- **`[248] Infusion Sublimation`** (Type 4 | Effects: `[[3, 2204450, 1]]`)
  - *Combat Logic*: Increases Max [Link#1161: Frost Crystal] by 1. | During [Link#1515: Permafrost], Ice ATK increases by 150. | When [Link#1515: Permafrost] ends, your [Link#1161: Frost Crystal] resets to the amount you had before the activation of [Link#1515: Permafrost].
- **`[249] Deadly Frost Lance`** (Type 4 | Effects: `[[3, 2204460, 1]]`)
  - *Combat Logic*: [Link#1512: Frost Lance] deals 20% more DMG to targets with HP less than 35%
- **`[250] Critical Cold`** (Type 4 | Effects: `[[3, 2204470, 1]]`)
  - *Combat Logic*: During [Link#1515: Permafrost], increases Crit DMG dealt by 15%. | During [Link#1515: Permafrost], increases allies' critical rate by 3%.
- **`[251] Bitter Cold`** (Type 4 | Effects: `[[3, 2204480, 1]]`)
  - *Combat Logic*: Every 265 Intellect grants 0.5% bonus Crit DMG.
- **`[252] Sharp Blizzard`** (Type 4 | Effects: `[[3, 2204490, 1]]`)
  - *Combat Logic*: Increases the critical rate of [Link#1513: Blizzard] by 50%. | Increases the Crit DMG of [Link#1513: Blizzard] by 15%.
- **`[253] Frost Crystal Empowerment`** (Type 4 | Effects: `[[3, 2204500, 1]]`)
  - *Combat Logic*: Each [Link#1161: Frost Crystal] consumed increases Intellect by 55. This effect lasts 10s and stacks up to 5 times.
- **`[254] Frost Assault`** (Type 4 | Effects: `[[3, 2204510, 1]]`)
  - *Combat Logic*: [Link#1513: Blizzard] reduces the Ice Resistance of targets hit by 10%. The effect lasts 10s and does not stack, and only works on your own.
- **`[255] Luck Damage`** (Type 4 | Effects: `[[3, 2204520, 1]]`)
  - *Combat Logic*: Lucky Strike DMG Multiplier +15%. | Every 2% Luck grants 1% Lucky Strike DMG Multiplier.
- **`[256] Cold Retention`** (Type 4 | Effects: `[[3, 2204530, 1]]`)
  - *Combat Logic*: In the [Link#1515: Permafrost] status, the cost of [Link#1509: Frostbeam] decreases by 25%.
- **`[257] Frost Revelation`** (Type 4 | Effects: `[[3, 2204540, 1]]`)
  - *Combat Logic*: The first hit of [Link#1508: Tidepool] on the target grants 5 Ice Energy. Each additional [Link#1161: Frost Crystal] increases Ice Energy restored by 10.
- **`[258] Law of Energy Surge`** (Type 4 | Effects: `[[3, 2204550, 1]]`)
  - *Combat Logic*: Every 50 Ice Arrows shot increases the DMG of your next [Link#1514: Frozen Gale] by 200% for 30s. Additionally, casting [Link#1514: Frozen Gale] grants the [Link#1130: Law of Energy Surge].
- **`[259] Power of Ice Crystals`** (Type 4 | Effects: `[[3, 2204560, 1]]`)
  - *Combat Logic*: When Ice Energy is above 50%, deals 8% more Ice damage.
- **`[260] Ice Crystal Recovery`** (Type 4 | Effects: `[[3, 2204570, 1]]`)
  - *Combat Logic*: When Ice Energy is below 50%, enhances the recovery rate of Ice Energy by 10%.
- **`[261] Rapid Ice Arrow`** (Type 4 | Effects: `[[3, 2204580, 1]]`)
  - *Combat Logic*: During [Link#1515: Permafrost], [Link#1509: Frostbeam] fires 2 additional Ice Arrows generated by Ice Crystal Core.
- **`[262] Endless Tide`** (Type 4 | Effects: `[[3, 2204590, 1]]`)
  - *Combat Logic*: During [Link#1515: Permafrost], each Ice Arrow triggered by Ice Crystal Core extends the duration of [Link#1515: Permafrost] by 0.5s, up to 5s.
- **`[263] Frost Tide`** (Type 4 | Effects: `[[3, 2204600, 1]]`)
  - *Combat Logic*: When dealing DMG, [Link#1509: Frostbeam] has a fixed 20% chance to grant [Link#1161: Frost Crystal]. If Max [Link#1161: Frost Crystal] is reached, grants 5% bonus Ice damage dealt instead for 3s.
- **`[264] Ray Mastery I`** (Type 4 | Effects: `[[3, 2204610, 1]]`)
  - *Combat Logic*: [Link#1509: Frostbeam] deals 2% more Ice damage. | [Link#1509: Frostbeam] deals 5% more Ice damage to the main target.
- **`[265] Wide Area Ice Arrow`** (Type 4 | Effects: `[[3, 2204620, 1]]`)
  - *Combat Logic*: Every 10 hits of Expertise Skill allows Ice Crystal Core to fire Ice Arrow (triggers up to once every 0.5s).
- **`[266] Intellect Ice Crystal`** (Type 4 | Effects: `[[3, 2204630, 1]]`)
  - *Combat Logic*: Every 50 Intellect grants 1 Max Ice Energy, up to 100 from this source.
- **`[267] Quick Chant`** (Type 4 | Effects: `[[3, 2204640, 1]]`)
  - *Combat Logic*: Increases Haste by 2500. | During [Link#1515: Permafrost], Casting SPD increases by 15%.
- **`[268] Sharp Ice Arrow`** (Type 4 | Effects: `[[3, 2204650, 1]]`)
  - *Combat Logic*: Ice Arrows from Ice Crystal Core are guaranteed to Crit. | Increases the Crit DMG of Ice Arrows from Ice Crystal Core by 10%.
- **`[269] Ray's Swan Song`** (Type 4 | Effects: `[[3, 2204660, 1]]`)
  - *Combat Logic*: When dealing DMG, [Link#1509: Frostbeam] gains a fixed 10% chance to double Mastery for 3s (which can only be triggers once on multiple hits).
- **`[270] Ice Crystal Expansion`** (Type 4 | Effects: `[[3, 2204670, 1]]`)
  - *Combat Logic*: Max Ice Energy +40.
- **`[271] Intellect Amp`** (Type 4 | Effects: `[[3, 2204680, 1]]`)
  - *Combat Logic*: Increases Intellect by 5%.

---
### ผัง Talent ของอาชีพ [3] Twin Striker (Stages: `[{'id': 127, 'stage': 0, 'bdType': 0, 'rootId': 27137, 'recommendTalent': [27137, 6889, 3172, 304005, 309005, 6888, 302005, 3170, 300005, 6918, 27144, 311005, 6892, 305005, 6891, 3173, 303005, 27136, 307005, 3171, 308005, 3177, 6893, 301005, 27135, 6899, 310005, 6890, 27134, 306005], 'factor': 5, 'recommendModEffectId': [1110, 1114, 1410, 2104, 2105, 2404], 'mainAttrShow': [11010, 11130, 11140]}, {'id': 128, 'stage': 1, 'bdType': 0, 'rootId': 312005, 'recommendTalent': [312005, 6896, 313005, 6901, 333005, 6900, 319005, 3179, 315005, 6915, 322005, 3175, 323005, 6917, 317005, 27145, 328005, 6916, 314005, 27139, 320005, 6904, 321005, 3188, 326006, 6894, 324005, 6903, 334005, 337005, 27146, 316005, 330005, 3174, 318005, 6895, 332005, 3189, 327005, 27148], 'factor': 5, 'recommendModEffectId': [1110, 1114, 1410, 2104, 2105, 2404], 'mainAttrShow': [11010, 11130, 11140]}, {'id': 129, 'stage': 1, 'bdType': 1, 'rootId': 342005, 'recommendTalent': [342005, 6907, 355005, 6923, 348005, 6905, 359005, 27140, 344005, 27142, 347006, 6911, 346005, 3182, 343005, 6920, 366005, 6909, 326005, 3185, 352005, 3194, 357005, 6914, 354005, 6908, 363005, 3192, 362005, 27150, 356005, 349005, 6921, 365005, 27143, 364005, 3187, 350005, 3184, 361005], 'factor': 3, 'recommendModEffectId': [1110, 1114, 1408, 1409, 2104, 2105, 2404], 'mainAttrShow': [11010, 11110, 11120]}]`)
- **`[300] Power Conversion`** (Type 4 | Effects: `[[4, 0, 11332, 1250]]`)
  - *Combat Logic*: Every 8 Strength grants 1 ATK.
- **`[301] Swift Turn`** (Type 4 | Effects: `[[4, 4, 11722, 10000]]`)
  - *Combat Logic*: For every 1% Haste, gains 1% Attack SPD.
- **`[302] Infernal Combo`** (Type 4 | Effects: `[[3, 2208030, 1]]`)
  - *Combat Logic*: When Special Attacks or Basic Attacks deal damage, grants [Link#1211: Infernal Combo] (triggers only once when hitting multiple targets).
- **`[303] Crimson Lotus`** (Type 4 | Effects: `[[3, 2208040, 1]]`)
  - *Combat Logic*: Gain adaptive effects when [Link#1211: Infernal Combo] reaches max stacks: | | Formless Spec: ATK +8%. | Crimson Spec: Crimson Recovery effect +10%.
- **`[304] Crimson Flame Pursuit`** (Type 4 | Effects: `[[3, 2208050, 1]]`)
  - *Combat Logic*: Special Attack hits cause the target to take +2.5% DMG. The effect lasts 8s and stacks up to 3 times.
- **`[305] Wild Soul - Break`** (Type 4 | Effects: `[[3, 2208060, 1]]`)
  - *Combat Logic*: When Strength reaches 500 points, Expertise Skill damage +5%.
- **`[306] Crimson Lotus Duality`** (Type 4 | Effects: `[[3, 2208070, 1]]`)
  - *Combat Logic*: Each stack of [Link#1211: Infernal Combo] grants effects based on the relationship between Luck Chance and Crit Chance: | | When Luck Chance is greater than or equal to Crit Chance, each stack of [Link#1211: Infernal Combo] grants 1.6% Lucky Strike Multiplier. | When Crit Chance is greater than Luck Chance, each stack of [Link#1211: Infernal Combo] grants 1.2% Crit DMG.
- **`[307] Flame Soul Seal`** (Type 4 | Effects: `[[3, 2208080, 1]]`)
  - *Combat Logic*: Flame Soul cap +50. | Every 50 Flame Soul gained triggers [Link#1211: Infernal Combo].
- **`[308] Wild Soul - Swift`** (Type 4 | Effects: `[[3, 2208090, 1]]`)
  - *Combat Logic*: When Strength reaches 300 points, the effect of the talent [Link#1211: Infernal Combo] is increased by 50%.
- **`[309] Ember Epiphany`** (Type 4 | Effects: `[[3, 2208100, 1]]`)
  - *Combat Logic*: Grants the [Link#1218: Flame Suppression] specialization effect.
- **`[310] Crimson Lotus Ember Epiphany`** (Type 4 | Effects: `[[3, 2208110, 1]]`)
  - *Combat Logic*: While in the [Link#1211: Infernal Combo] state, the [Link#1218: Flame Suppression] effect is increased by 50%.
- **`[311] Soaring Crimson Flame Pursuit`** (Type 4 | Effects: `[[3, 2208120, 1]]`)
  - *Combat Logic*: Enhances Crimson Flame Pursuit based on the target's lost HP: | | When the target's HP is below 80%, enhances the base effect by 30%. | The lower the target's HP, the higher the bonus, up to a maximum enhancement of 100% when the target's HP drops to 30%.
- **`[312] Formless Expertise Spec`** (★ KEYSTONE SPEC | Effects: `[[3, 2208130, 1]]`)
  - *Combat Logic*: By using different Special Attacks and Expertise Skills, the Formless level can be raised from E to S (a total of 6 levels). During its 8s duration, each 1 level grants [Link#1622: Blazing Assault], [Link#1623: Rage Cleave], and [Link#1624: Axe Wind] a 2% CD Speed increase. | | Trigger Formless effects to accelerate CDs, chain Blazing Assault to boost Expertise Skill DMG, and combine with the core Formless Flame Slash mechanic to deal massive combo DMG.
- **`[313] Blazing Pact`** (Type 4 | Effects: `[[3, 2208140, 1]]`)
  - *Combat Logic*: After casting [Link#1622: Blazing Assault], the next Expertise Skill deals +20% Final DMG, but its Crit Chance is halved.
- **`[314] Soaring Flame`** (Type 4 | Effects: `[[3, 2208150, 1]]`)
  - *Combat Logic*: After gaining Formless 6 times or activating [Link#1625: Wasteland's End], [Link#1619: Blazing Ascension] evolves into [Link#1620: Soaring Flame]. | Gains [Link#1620: Blaze] after casting [Link#1212: Soaring Flame].
- **`[315] Time Wheel Rewind`** (Type 4 | Effects: `[[3, 2208160, 1]]`)
  - *Combat Logic*: When Formless is obtained, the remaining CD of the skill with the longest current CD among [Link#1622: Blazing Assault], [Link#1623: Rage Cleave], and [Link#1624: Axe Wind] is reduced by 1.5s.
- **`[316] Inferno`** (Type 4 | Effects: `[[3, 2208170, 1]]`)
  - *Combat Logic*: In [Link#1212: Blaze] state, Expertise Skills inflict [Link#1213: Burn] when they hit a target.
- **`[317] Inferno Explosion`** (Type 4 | Effects: `[[3, 2208180, 1]]`)
  - *Combat Logic*: When a target is inflicted with [Link#1213: Burn], there is a 30% fixed chance to accumulate 1 stack of Wildfire that lasts for 10s. When Wildfire reaches 12 stacks, it triggers [Link#1214: Explosion] and clears Wildfire stacks.
- **`[318] Lucky Explosion`** (Type 4 | Effects: `[[3, 2208190, 1]]`)
  - *Combat Logic*: [Link#1213: Burn] can trigger Lucky Strike. | Based on the target's current [Link#1213: Burn] stacks, increases [Link#1214: Explosion] damage. Each additional 1 stack of [Link#1213: Burn] increases [Link#1214: Explosion] damage by 5%.
- **`[319] Wasteland Raid`** (Type 4 | Effects: `[[3, 2208200, 1]]`)
  - *Combat Logic*: During [Link#1625: Wasteland's End], triggering a Lucky Strike with [Link#1623: Rage Cleave] or [Link#1624: Axe Wind] reduces the charge time of [Link#1622: Blazing Assault] by 1s.
- **`[320] Time Wheel Lucky Soul`** (Type 4 | Effects: `[[3, 2208210, 1]]`)
  - *Combat Logic*: Each 1 level of the Formless effect increases Lucky Strike DMG by 2%.
- **`[321] Time Wheel Agile Soul`** (Type 4 | Effects: `[[3, 2208220, 1]]`)
  - *Combat Logic*: Each 1 level of the Formless effect grants 2.5% Strength.
- **`[322] Returning Soul`** (Type 4 | Effects: `[[3, 2208230, 1]]`)
  - *Combat Logic*: [Link#1622: Blazing Assault] restores 5% of lost Flame Soul. When Formless is at S level, enhances recovery effect to 10%.
- **`[323] Double Inferno`** (Type 4 | Effects: `[[3, 2208240, 1]]`)
  - *Combat Logic*: [Link#1624: Axe Wind] applies 3 stacks of [Link#1213: Burn] to hit targets. | At S Formless level, targets hit by [Link#1624: Axe Wind] accumulate 1 stack of Wildfire that lasts for 10s. When Wildfire reaches 12 stacks, it triggers [Link#1214: Explosion] and clears Wildfire stacks.
- **`[324] Hellfire Meteor`** (Type 4 | Effects: `[[3, 2208250, 1]]`)
  - *Combat Logic*: In the Formless S-Rank state, each cast of [Link#1623: Rage Cleave] summons 1 [Link#1215: Hellfire Meteor] at the primary target's location.
- **`[325] Supreme Battlefield`** (Type 4 | Effects: `[[3, 2208260, 1]]`)
  - *Combat Logic*: Every 1% Mastery grants 0.2% Fire Bonus.
- **`[326] Wasteland Finale`** (Type 4 | Effects: `[[3, 2208270, 1]]`)
  - *Combat Logic*: Gains 25% Fire Bonus for 15s after casting Ultimate.
- **`[327] Expertise Formless Flame Slash`** (Type 4 | Effects: `[[3, 2208280, 1]]`)
  - *Combat Logic*: [Link#1623: Rage Cleave], [Link#1622: Blazing Assault], and [Link#1624: Axe Wind] can trigger [Link#1216: Formless Flame Slash].
- **`[328] Formless Flame Slash Luck`** (Type 4 | Effects: `[[3, 2208290, 1]]`)
  - *Combat Logic*: Every 1% Luck increases the trigger chance of [Link#1216: Formless Flame Slash stages 1 to 3 by 0.2%/0.1%/0.05% respectively, but the Crit Rate of Formless Flame Slash] is halved.
- **`[329] Formless Combo`** (Type 4 | Effects: `[[3, 2208300, 1]]`)
  - *Combat Logic*: For every 5 hits an Expertise Skill deals to the main target, it grants a buff that increases the Lucky Strike Multiplier by 27% and reduces Lucky Strike Crit Rate by 20% for the next 8s. This effect stacks up to 3 times.
- **`[330] Formless Flame Slash - Break`** (Type 4 | Effects: `[[3, 2208310, 1]]`)
  - *Combat Logic*: [Link#1216: Formless Flame Slash] can trigger Lucky Strike. | Lucky Strike DMG Multiplier +5%. Every 1% Luck grants 0.8% Lucky Strike DMG Multiplier.
- **`[331] Formless Flame Slash - Luck`** (Type 4 | Effects: `[[3, 2208320, 1]]`)
  - *Combat Logic*: [Link#1216: Formless Flame Slash] Luck Chance +8%.
- **`[332] Formless Flame Slash - Blaze`** (Type 4 | Effects: `[[3, 2208330, 1]]`)
  - *Combat Logic*: [Link#1216: Formless Flame Slash] gains 5% Fire Bonus.
- **`[333] Formless Flame Slash Attack Break`** (Type 4 | Effects: `[[3, 2208340, 1]]`)
  - *Combat Logic*: Basic Attacks, [Link#1619: Blazing Ascension], and [Link#1620: Soaring Flame] can trigger [Link#1216: Formless Flame Slash].
- **`[334] Lucky Blade Combo`** (Type 4 | Effects: `[[3, 2208350, 1]]`)
  - *Combat Logic*: Expertise Skills ignore 35% of the target's Armor.
- **`[335] Formless Flame Slash Combo`** (Type 4 | Effects: `[[3, 2208360, 1]]`)
  - *Combat Logic*: Each 1 level of the Formless effect provides 2% [Link#1216: Formless Flame Slash] DMG.
- **`[336] Oblivion Inferno`** (Type 4 | Effects: `[[3, 2208370, 1]]`)
  - *Combat Logic*: During [Link#1625: Wasteland's End], Expertise Skill DMG +30%.
- **`[337] Instant Wasteland`** (Type 4 | Effects: `[[3, 2208380, 1]]`)
  - *Combat Logic*: When Formless is obtained, the remaining CD of [Link#1625: Wasteland's End] is reduced by 0.5s or its duration is extended by 0.5s (total extended duration cannot exceed 5s).
- **`[338] Burning Attack`** (Type 4 | Effects: `[[3, 2208390, 1]]`)
  - *Combat Logic*: Fire Bonus +8% when attacking Elite or higher targets.
- **`[339] Varied Strikes`** (Type 4 | Effects: `[[3, 2208400, 1]]`)
  - *Combat Logic*: For each additional target hit by an Expertise Skill, DMG dealt +10%, up to 60%.
- **`[340] Flame Soul Attack Spirit`** (Type 4 | Effects: `[[3, 2208410, 1]]`)
  - *Combat Logic*: When killing a target, Flame Soul +5.
- **`[341] Stellar Spark`** (Type 4 | Effects: `[[3, 2208420, 1]]`)
  - *Combat Logic*: Expertise Skill DMG increases Fire ATK by 22 for the next 10s. Stacks up to 10 times.
- **`[342] Crimson Expertise Spec`** (★ KEYSTONE SPEC | Effects: `[[6, 1605, 1606], [3, 2208430, 1]]`)
  - *Combat Logic*: Gains the Crimson Recovery effect: When hitting the main target (excluding [Link#1626: Wildfire Dance]), 20% of the DMG dealt is converted into Crimson Soul Gauge (Crimson Soul Gauge value cannot exceed Max HP). When Flame Soul is insufficient, 25% of the Crimson Soul Gauge value can be consumed to extend the duration of [Link#1626: Wildfire Dance] by 0.8s. | | Build the gauge quickly through Crimson Recovery, then leverage high Attack SPD to trigger Wildfire Dance frequently. Use this as the core mechanic and combine it with other skill effects to unleash massive DMG within the burst window.
- **`[343] Soul Flame`** (Type 4 | Effects: `[[3, 2208440, 1]]`)
  - *Combat Logic*: For every 10% Crimson Soul Gauge charged, immediately gains a buff: Increases ATK bonuses from all sources by 2% for 5s. This effect can stack up to 3 times.
- **`[344] Raging Flame Sharpness I`** (Type 4 | Effects: `[[3, 2208450, 1]]`)
  - *Combat Logic*: For every 10% Max HP or Crimson Soul Gauge lost, a stack of a buff is immediately gained: Crit Chance from all sources is increased by 2.5% for 5s. This effect can stack up to 3 times.
- **`[345] Crimson Earth - Flame Soul`** (Type 4 | Effects: `[[3, 2208460, 1]]`)
  - *Combat Logic*: While within Crimson Earth, Flame Soul recovery efficiency +30%. | While within Crimson Earth, [Link#1626: Wildfire Dance] DMG +50%.
- **`[346] Crimson Earth - Swift`** (Type 4 | Effects: `[[3, 2208470, 1]]`)
  - *Combat Logic*: Every 1% Attack SPD increases the Crimson Recovery effect by 1% while within Crimson Earth.
- **`[347] Crimson Earth Meteor I`** (Type 4 | Effects: `[[3, 2208480, 1]]`)
  - *Combat Logic*: Every 2 casts of [Link#1627: Unbound Meteor] cause [Link#1627: Unbound Meteor] to evolve into [Link#1628: Falling Hellfire].
- **`[348] Raging Flame Sharpness II`** (Type 4 | Effects: `[[3, 2208490, 1]]`)
  - *Combat Logic*: Every 1% Haste grants 0.5% Expertise Skill CD Boost.
- **`[349] Crimson Earth Meteor II`** (Type 4 | Effects: `[[3, 2208500, 1]]`)
  - *Combat Logic*: [Link#1627: Unbound Meteor] and its enhanced skill ([Link#1628: Falling Hellfire]) gain 15% Fire Bonus. This is increased by an additional 15% within Crimson Earth.
- **`[350] Destined Meteor`** (Type 4 | Effects: `[[3, 2208510, 1]]`)
  - *Combat Logic*: Casting [Link#1630: Flowing Splendor Slash], [Link#1627: Unbound Meteor], and its enhanced skill ([Link#1628: Falling Hellfire]) consumes up to 2 stacks of [Link#1211: Infernal Combo]. Each stack of [Link#1211: Infernal Combo] grants that skill a 10% Fire Bonus.
- **`[351] Crimson Break Slash`** (Type 4 | Effects: `[[3, 2208520, 1]]`)
  - *Combat Logic*: Crit DMG +8%.
- **`[352] Hellfire Manifestation`** (Type 4 | Effects: `[[3, 2208530, 1]]`)
  - *Combat Logic*: While [Link#1629: Endless Hellfire] is active, the Crimson Recovery effect is doubled and the final consumption of the Crimson Soul Gauge is reduced by half.
- **`[353] Crimson Focus`** (Type 4 | Effects: `[[3, 2208540, 1]]`)
  - *Combat Logic*: For every 1% Attack SPD exceeding 30%, 0.2% Expertise Skill DMG is provided.
- **`[354] Flowing Splendor Rotation`** (Type 4 | Effects: `[[3, 2208550, 1]]`)
  - *Combat Logic*: After casting [Link#1630: Flowing Splendor Slash], [Link#1626: Wildfire Dance] DMG is increased by50% for 5s. | [Link#1630: Flowing Splendor Slash] charge count +1.
- **`[355] Instant Flowing Splendor`** (Type 4 | Effects: `[[3, 2208560, 1]]`)
  - *Combat Logic*: When [Link#1621: Frenzied Slash] deals DMG, there is a 15% fixed chance to grant [Link#1630: Flowing Splendor Slash] 1 charge and cause its next cast to consume no Flame Soul.
- **`[356] Ultimate Hellfire`** (Type 4 | Effects: `[[3, 2208570, 1]]`)
  - *Combat Logic*: Activating [Link#1629: Endless Hellfire] immediately grants 5 stacks of [Link#1211: Infernal Combo], which are not consumed while it is active. | [Link#1629: While Endless Hellfire] is active, Strength +15%.
- **`[357] Crimson Crit`** (Type 4 | Effects: `[[3, 2208580, 1]]`)
  - *Combat Logic*: When Crimson Soul Gauge is charged above 50%, Fire ATK +50%.
- **`[358] Crimson Pierce`** (Type 4 | Effects: `[[3, 2208590, 1]]`)
  - *Combat Logic*: When dealing Crit DMG, ignores 22% of the target's Armor.
- **`[359] Unbound Meteor Combo`** (Type 4 | Effects: `[[3, 2208600, 1]]`)
  - *Combat Logic*: [Link#1628: Falling Hellfire] is enhanced into a continuous three-hit strike form. | Every 1% Crimson Soul Gauge increases [Link#1628: Falling Hellfire] DMG by 1%.
- **`[360] Crimson Epiphany`** (Type 4 | Effects: `[[3, 2208610, 1]]`)
  - *Combat Logic*: Every 1% Mastery grants 2% Crimson Recovery final effect.
- **`[361] Wildfire Dance Final Slash`** (Type 4 | Effects: `[[3, 2208620, 1]]`)
  - *Combat Logic*: After [Link#1626: Wildfire Dance] deals Crit DMG 10 times (hits on multiple targets count as one), it triggers a Final Slash that deals 500% ATK as Attack DMG to enemies. | [Link#1626: Each Crit DMG instance dealt by Wildfire Dance] grants the Final Slash a 3% Final DMG Bonus (up to a maximum of 100%).
- **`[362] Wildfire Formless Flame Slash`** (Type 4 | Effects: `[[3, 2208630, 1]]`)
  - *Combat Logic*: [Link#1626: Wildfire Dance] can trigger [Link#1216: Formless Flame Slash], but can no longer trigger Lucky Strikes. | [Link#1216: The damage multiplier of Formless Flame Slash] is adjusted to the skill multiplier that triggered it * (30% + Crit%).
- **`[363] Wild Slash Combo`** (Type 4 | Effects: `[[3, 2208640, 1]]`)
  - *Combat Logic*: Each time [Link#1626: Wildfire Dance] deals DMG 1 time, it grants the next [Link#1627: Unbound Meteor], [Link#1628: Falling Hellfire], or [Link#1630: Flowing Splendor Slash] a 2.5% Final DMG Bonus (up to a maximum of 100%). Casting any of these skills clears this bonus.
- **`[364] Arcane Wildfire Bloodline`** (Type 4 | Effects: `[[3, 2208650, 1]]`)
  - *Combat Logic*: When [Link#1626: Wildfire Dance] deals DMG, there is a fixed chance of 12% + Haste% / 2.5 to gain 1 stack of Crimson Bloodline. When Crimson Bloodline reaches 7 stacks, it triggers [Link#1217: Great Crimson Lotus] and clears all Crimson Bloodline stacks.
- **`[365] Arcane Wildfire Haste`** (Type 4 | Effects: `[[3, 2208660, 1]]`)
  - *Combat Logic*: [Link#1626: Wildfire Dance] Attack SPD +20%.
- **`[366] Arcane Raging Flame`** (Type 4 | Effects: `[[3, 2208670, 1]]`)
  - *Combat Logic*: Every 15% Crimson Soul Gauge charged reduces the remaining CD of [Link#1629: Endless Hellfire] by 0.5s. Every 10% of Haste reduces it by an additional 0.1s, up to 1s.

---
### ผัง Talent ของอาชีพ [4] Wind Knight (Stages: `[{'id': 106, 'stage': 0, 'bdType': 0, 'rootId': 69126, 'recommendTalent': [69126, 10442, 69127, 1497, 401015, 1495, 436001, 10443, 431007, 10445, 69125, 403014, 430008, 402013, 6084, 437001, 1496, 6083, 10444, 404014, 69128, 1498, 438001, 6081, 6085, 6082, 435001, 6681, 400016, 429008], 'factor': 5, 'recommendModEffectId': [1110, 1113, 1114, 1408, 2104, 2105, 2404], 'mainAttrShow': [11010, 11120, 11140]}, {'id': 107, 'stage': 1, 'bdType': 0, 'rootId': 433007, 'recommendTalent': [433007, 1499, 6090, 6086, 411014, 6087, 6091, 1500, 434012, 409014, 6089, 6096, 6386, 35105, 8586, 1503, 8584, 452001, 6095, 406014, 453001, 443002, 6094, 410014, 35106, 413014, 6682, 448001, 6685, 440001, 43049, 407014, 6683, 445001, 6088, 444002, 6092, 405014, 6388, 447001], 'factor': 5, 'recommendModEffectId': [1110, 1113, 1114, 1408, 2104, 2105, 2404], 'mainAttrShow': [11010, 11120, 11140]}, {'id': 108, 'stage': 1, 'bdType': 1, 'rootId': 432008, 'recommendTalent': [432008, 1501, 6100, 6097, 416010, 7300, 6687, 467001, 37119, 6099, 6101, 418011, 6098, 5247, 33057, 6103, 5248, 1504, 7301, 417010, 463001, 466001, 6106, 420010, 459001, 6107, 419010, 37120, 421010, 6688, 457001, 33058, 422010, 5249, 425023, 424023, 7302, 423011, 6689, 468001], 'factor': 4, 'recommendModEffectId': [1110, 1113, 1114, 1409, 1410, 2104, 2105, 2404], 'mainAttrShow': [11010, 11110, 11130]}]`)
- **`[400] Swift Shadow`** (Type 4 | Effects: `[[3, 2205010, 1]]`)
  - *Combat Logic*: Every 50 points of Courage consumed reduces the CD of [Link#1523: Spiral Thrust], [Link#1522: Breach Pursuit], and [Link#1524: Falcon Toss] by 1s.
- **`[401] Power Conversion`** (Type 4 | Effects: `[[4, 0, 11332, 1250]]`)
  - *Combat Logic*: Every 8 Strength grants 1 ATK.
- **`[402] Vulnerable Strike`** (Type 4 | Effects: `[[3, 2205030, 1]]`)
  - *Combat Logic*: Dealing DMG grants a fixed 30% chance to apply Vulnerability to the enemy. | Vulnerability: Increases the DMG you deal to the target by 10% for 5s.
- **`[403] Sharp`** (Type 4 | Effects: `[[3, 2205040, 1]]`)
  - *Combat Logic*: Dealing DMG with Special Attacks grants [Link#1152: Sharp].
- **`[404] Sharp Expansion`** (Type 4 | Effects: `[[3, 2205050, 1]]`)
  - *Combat Logic*: [Link#1152: Sharp] cap +1.
- **`[405] Wind Rift Diffusion`** (Type 4 | Effects: `[[3, 2205060, 1]]`)
  - *Combat Logic*: Expertise and Ultimates deal 10% more DMG to targets inflicted with [Link#1153: Rend], and when hitting [Link#1153: Rend] targets, deal 1 additional hit of 75% DMG.
- **`[406] Wind Tear`** (Type 4 | Effects: `[[3, 2205070, 1]]`)
  - *Combat Logic*: When [Link#1517: Gale Thrust] deals DMG, apply [Link#1153: Rend] to targets.
- **`[407] Quickshot Meteor`** (Type 4 | Effects: `[[3, 2205080, 1]]`)
  - *Combat Logic*: [Link#1517: Gale Thrust] is enhanced, increasing hit counts by 2. | Reduces [Link#1517: Gale Thrust's ]Courage consumption by 20%.
- **`[409] Sharp Expansion`** (Type 4 | Effects: `[[3, 2205090, 1]]`)
  - *Combat Logic*: [Link#1152: Sharp] cap +1.
- **`[410] Swift Blade`** (Type 4 | Effects: `[[3, 2205100, 1]]`)
  - *Combat Logic*: When [Link#1518: Valor Cyclone] deals DMG, it has a fixed 7% chance to evolve Basic Attacks into [Link#1592: Swift Blade].
- **`[411] Zephyr Waltz Agility`** (Type 4 | Effects: `[[3, 2205110, 1]]`)
  - *Combat Logic*: Additional Courage recovery: Recovers 1 extra point of Courage per second for every 2 stacks of [Link#1152: Sharp].
- **`[412] Wind Chaser`** (Type 4 | Effects: `[[3, 2205120, 1]]`)
  - *Combat Logic*: During the casting of [Link#1518: Valor Cyclone], for every 20 points of Courage consumed, increase the DMG of [Link#1518: Valor Cyclone] by 4%, up to 20%.
- **`[413] Vortex Strike`** (Type 4 | Effects: `[[3, 2205130, 1]]`)
  - *Combat Logic*: After every 2 casts of [Link#1591: Drake Cannon], your [Link#1523: Spiral Thrust] evolves into [Link#1590: Vortex Strike].
- **`[414] Instantaneous Crit`** (Type 4 | Effects: `[[3, 2205140, 1]]`)
  - *Combat Logic*: While [Link#1157: Chasing Step] is active, [Link#1519: Instant Edge] and [Link#1521: Sharp Impact] have their Crit Chance doubled. Additionally, for [Link#1519: Instant Edge] and [Link#1521: Sharp Impact], every 1% excess Crit is converted into 3% Crit DMG for the respective skill.
- **`[416] Spear Thrust`** (Type 4 | Effects: `[[3, 2205150, 1]]`)
  - *Combat Logic*: When [Link#1520: Skyfall] lands a Lucky Strike, it triggers [Link#1156: Spear Thrust], once every 2s. | Dealing DMG with [Link#1156: Spear Thrust] restores 8 points of Courage. This effect triggers only once, even if multiple targets are hit.
- **`[417] Wind Fury`** (Type 4 | Effects: `[[3, 2205160, 1]]`)
  - *Combat Logic*: Casting [Link#1521: Sharp Impact] grants [Link#1187: Wind Fury].
- **`[418] Sharp Expansion`** (Type 4 | Effects: `[[3, 2205170, 1]]`)
  - *Combat Logic*: [Link#1152: Sharp] cap +1.
- **`[419] Air Dance Strike`** (Type 4 | Effects: `[[3, 2205180, 1]]`)
  - *Combat Logic*: [Link#1521: Sharp Impact] and its enhanced skill ([Link#1159: Typhoon: Sharp Impact]) increase the Courage restored by the next [Link#1553: ​Galeform​] by 50%. | Casting [Link#1521: Sharp Impact] immediately grants 3 [Link#1152: Sharp], and casting its enhanced skill [Link#1159: Typhoon: Sharp Impact] immediately grants 6 [Link#1152: Sharp].
- **`[420] Sharp Expansion`** (Type 4 | Effects: `[[3, 2205190, 1]]`)
  - *Combat Logic*: [Link#1152: Sharp] cap +1.
- **`[421] Tornado Dance`** (Type 4 | Effects: `[[3, 2205200, 1]]`)
  - *Combat Logic*: During [Link#1187: Wind Fury], DMG dealt by [Link#1519: Instant Edge] and [Link#1589: Azure Sever] triggers [Link#1158: Tornado] (triggered at most once when hitting multiple targets).
- **`[422] Chasing Step`** (Type 4 | Effects: `[[3, 2205210, 1]]`)
  - *Combat Logic*: When [Link#1520: Skyfall] or [Link#1524: Falcon Toss] deals a Crit or Lucky Strike, they trigger [Link#1157: Chasing Step]. | When [Link#1520: Skyfall] or [Link#1524: Falcon Toss] trigger a Crit and Lucky Strike simultaneously, they grant 2 stacks of [Link#1157: Chasing Step].
- **`[423] Divine Wind Support`** (Type 4 | Effects: `[[3, 2205320, 1]]`)
  - *Combat Logic*: When [Link#1524: Falcon Toss] and its enhanced skill ([Link#1589: Azure Sever]), or [Link#1519: Instant Edge] hits 1 target, the DMG gains a 10% Wind bonus.
- **`[424] Combat Expertise`** (Type 4 | Effects: `[[3, 2205220, 1]]`)
  - *Combat Logic*: As the battle goes on, grants continuously increasing ATK. Every 10s, ATK +2.5%, up to 10%. Cleared after battle.
- **`[425] Momentum Surge`** (Type 4 | Effects: `[[3, 2205230, 1]]`)
  - *Combat Logic*: Increases [Link#1152: Sharp] effect by 1%, and for each enemy within 12m, additionally increases by 1%, up to 3%.
- **`[427] Catcher`** (Type 4 | Effects: `[[3, 2205240, 1]]`)
  - *Combat Logic*: In combat, for every 1 enemy target defeated (party-wide effect), ATK +65 for 30s, up to 650.
- **`[428] Wind Split Technique`** (Type 4 | Effects: `[[3, 2205250, 1]]`)
  - *Combat Logic*: When [Link#1153: Rend] deals DMG, it has a fixed 50% chance to grant 2 points of Courage.
- **`[429] Tempestrike`** (Type 4 | Effects: `[[3, 2205260, 1]]`)
  - *Combat Logic*: When [Link#1553: Galeform] ends, it applies the [Link#1179: Tempestrike]. | Every 50 points of Courage or 3 points of Sharp consumed during [Link#1553: Galeform] extends the duration of [Link#1179: Tempestrike] by 1s.
- **`[430] Divine Concealment`** (Type 4 | Effects: `[[3, 2205270, 1]]`)
  - *Combat Logic*: Consuming Courage increases Haste by 1% and Speed by 2% for 5s, stacking up to 5 times.
- **`[431] Valor`** (Type 4 | Effects: `[[3, 2205280, 1]]`)
  - *Combat Logic*: Increases Max Courage by 30.
- **`[432] Skyward Spec`** (★ KEYSTONE SPEC | Effects: `[[6, 1418, 1419], [3, 2205290, 1]]`)
  - *Combat Logic*: Replaces Special Attack with [Link#1520: Skyfall] and enhances the skill. | When having [Link#1152: Sharp], gains ATK based on the max number of [Link#1152: Sharp]. | | Skyfall and Instant Edge can chain together, skipping the aerial cast delay. High Luck and critical rate enable Skyfall to trigger a low-cost Instant Edge.
- **`[433] Vanguard Spec`** (★ KEYSTONE SPEC | Effects: `[[3, 2205300, 1]]`)
  - *Combat Logic*: Further enhances [Link#1517: Gale Thrust]. | Casting [Link#1517: Gale Thrust] grants a 20% fixed chance to cause Basic Attacks to evolve into [Link#1592: Swift Blade], with an additional 5% chance per stack of [Link#1152: Sharp]. | | Maximize Courage gain and expenditure to reduce the CD of Expertise skills. Haste increases Courage generation and the casting speed of core Expertise skills.
- **`[434] Battle Cry`** (Type 4 | Effects: `[[6, 1426, 1410], [3, 2205310, 1]]`)
  - *Combat Logic*: [Link#1525: Typhoon Cleave] raises the banner spear, granting Inspire to allies and increasing the caster's Crit DMG by 50% for 10s. Afterward, a follow-up leap can be launched, dealing Attack DMG to the enemies within range and knocking them airborne, while restoring 100 Courage. | Inspire: Lasts for 10s. All allies gain 10% Haste (only one effect can be active at a time). You restore 10 Courage per second and 1 [Link#1152: Sharp every 2s].
- **`[435] Swift`** (Type 4 | Effects: `[[4, 4, 11722, 10000]]`)
  - *Combat Logic*: Each 1% Haste provides 1% Attack Speed.
- **`[436] Sharp Expansion`** (Type 4 | Effects: `[[3, 2205340, 1]]`)
  - *Combat Logic*: [Link#1152: Sharp] cap +1.
- **`[437] Long Lance Sharp Blade`** (Type 4 | Effects: `[[3, 2205350, 1]]`)
  - *Combat Logic*: When Strength reaches 300 points, Expertise Skill damage +7%.
- **`[438] Sharp`** (Type 4 | Effects: `[[3, 2205360, 1]]`)
  - *Combat Logic*: When Strength reaches 500 points, the additional ATK from [Link#1152: Sharp] increases to 6%.
- **`[439] Break Pursuit Advancement`** (Type 4 | Effects: `[[3, 2205370, 1]]`)
  - *Combat Logic*: Within 15s after Casting the Ultimate, Casting [Link#1522: Breach Pursuit] will not start CD. This effect is removed after the duration ends or after Casting 3 times [Link#1522: Breach Pursuit].
- **`[440] Wind Spiral`** (Type 4 | Effects: `[[3, 2205380, 1]]`)
  - *Combat Logic*: When [Link#1517: Gale Thrust] deals DMG, it has a fixed 50% chance to grant 1 stack of Wind Spiral for 20s, stacking up to 10 times. | Wind Spiral: When casting [Link#1523: Spiral Thrust] or [Link#1518: Valor Cyclone], it triggers a Spiral Explosion, dealing Attack DMG equal to Wind Spiral stacks x 200% ATK to nearby enemies. Each 1% of Mastery increases this DMG multiplier by 7%, up to 560%. This DMG cannot Crit, and decreases by 5% for each additional target hit, down to a minimum of 25%. Triggering this clears all Wind Spiral stacks.
- **`[441] Vigor Spike`** (Type 4 | Effects: `[[3, 2205390, 1]]`)
  - *Combat Logic*: When [Link#1152: Sharp] reaches full amount and the caster is in combat, enters [Link#1155: Vigor Spike] state, effective up to once every 30s (affected by CD Boost stats).
- **`[442] Fearless Gale`** (Type 4 | Effects: `[[3, 2205400, 1]]`)
  - *Combat Logic*: After casting [Link#1523: Spiral Thrust] or [Link#1522: Breach Pursuit] or [Link#1518: Valor Cyclone], the next [Link#1517: Gale Thrust] will not consume Courage. This effect is removed after leaving combat.
- **`[443] Whispering Breeze`** (Type 4 | Effects: `[[3, 2205410, 1]]`)
  - *Combat Logic*: When Courage is below or equal to 50%, reduces the Energy [Link#1518: Valor Cyclone] consumes by 2. | When Courage is above 50%, increases the DMG [Link#1518: Valor Cyclone] deals by 12%.
- **`[444] Rapid Drake Cannon`** (Type 4 | Effects: `[[3, 2205420, 1]]`)
  - *Combat Logic*: Using [Link#1592: Swift Blade] grants it a fixed 10% chance to evolve Basic Attack into [Link#1591: Drake Cannon] in 10s. Each failure to evolve increases the chance by 10% until success.
- **`[445] Rupture`** (Type 4 | Effects: `[[3, 2205430, 1]]`)
  - *Combat Logic*: When [Link#1518: Valor Cyclone] deals DMG, it has a fixed 50% chance to inflict [Link#1154: Rupture].
- **`[446] Spiral Tear`** (Type 4 | Effects: `[[3, 2205440, 1]]`)
  - *Combat Logic*: [Link#1523: Spiral Thrust] and [Link#1590: Vortex Strike] deals 30% more DMG to the targets with [Link#1153: Rend].
- **`[447] Fortitude`** (Type 4 | Effects: `[[3, 2205450, 1]]`)
  - *Combat Logic*: During [Link#1518: Valor Cyclone], gains [Link#1102: Super Armor] and reduces DMG taken by 20%. | When [Link#1518: Valor Cyclone] deals DMG, restores HP equal to 10% ATK.
- **`[448] Swift Breeze`** (Type 4 | Effects: `[[3, 2205460, 1]]`)
  - *Combat Logic*: Each 1% Haste accelerates the REG SPD of Courage by 2%.
- **`[449] Breath of Wind`** (Type 4 | Effects: `[[3, 2205470, 1]]`)
  - *Combat Logic*: Skills that consume Courage ([Link#1523: Spiral Thrust] and its enhanced skills, [Link#1518: Valor Cyclone], [Link#1524: Falcon Toss] and its enhanced skills, [Link#1517: Gale Thrust]) gain 6% Wind Bonus.
- **`[450] Wind Rise`** (Type 4 | Effects: `[[3, 2205480, 1]]`)
  - *Combat Logic*: When [Link#1518: Valor Cyclone] deals DMG, increases [Link#1591: Drake Cannon] and [Link#1590: Vortex Strike] Crit Chance by 7%, and Crit DMG by 5%. The effect lasts 5s and stacks up to 7 times.
- **`[451] Strong Attack`** (Type 4 | Effects: `[[3, 2205490, 1]]`)
  - *Combat Logic*: When [Link#1518: Valor Cyclone] deals DMG, reduces the CD of Ultimate by 0.5s (which can only be triggers once on multiple hits).
- **`[452] Spiral Flame`** (Type 4 | Effects: `[[3, 2205500, 1]]`)
  - *Combat Logic*: Using [Link#1590: Vortex Strike], increases Haste by 25% for 10s.
- **`[453] Dragon's Fury Flame`** (Type 4 | Effects: `[[3, 2205510, 1]]`)
  - *Combat Logic*: The Crit chance of [Link#1591: ​Drake Cannon​] and [Link#1590: ​Vortex Strike​] is doubled. | Increases the Crit DMG of [Link#1591: Drake Cannon] and [Link#1590: Vortex Strike] by 8%. | Each 1% Haste grants 0.5% Crit DMG for [Link#1591: Drake Cannon​] and [Link#1590: ​Vortex Strike​].
- **`[454] Wind Gate Drake Cannon`** (Type 4 | Effects: `[[3, 2205520, 1]]`)
  - *Combat Logic*: Every 22 triggers of [Link#1518: Valor Cyclone] allows Basic Attack to evolve into [Link#1591: Drake Cannon] in 10s.
- **`[455] Bird Advancement`** (Type 4 | Effects: `[[3, 2205530, 1]]`)
  - *Combat Logic*: Increases the charge of [Link#1524: Falcon Toss] by 1. | Reduces Courage consumed by [Link#1524: Falcon Toss] by 50%.
- **`[456] Sharp Advancement`** (Type 4 | Effects: `[[3, 2205540, 1]]`)
  - *Combat Logic*: Enhances the effectiveness of [Link#1187: Wind Fury] by 50%. | When [Link#1519: Instant Edge] consumes [Link#1157: Chasing Step], doubles the charge efficiency of [Link#1521: Sharp Impact].
- **`[457] Spear Recovery`** (Type 4 | Effects: `[[3, 2205550, 1]]`)
  - *Combat Logic*: [Link#1156: Spear Thrust] reduces the CD of [Link#1524: Falcon Toss] by 2s (which can only be triggers once on multiple hits).
- **`[458] Sharp Long Breath`** (Type 4 | Effects: `[[3, 2205560, 1]]`)
  - *Combat Logic*: During [Link#1187: Wind Fury], [Link#1524: Falcon Toss] evolves into [Link#1589: Azure Sever] once.
- **`[459] Sharp Expansion`** (Type 4 | Effects: `[[3, 2205570, 1]]`)
  - *Combat Logic*: [Link#1152: Sharp] cap +1.
- **`[460] Skyfall`** (Type 4 | Effects: `[[3, 2205580, 1]]`)
  - *Combat Logic*: When dealing DMG, [Link#1520: Skyfall] gains a fixed 15% chance to grant 1 stack of [Link#1152: Sharp].
- **`[461] Pursuit Power`** (Type 4 | Effects: `[[3, 2205590, 1]]`)
  - *Combat Logic*: [Link#1157: Chasing Step] consumed increases Strength by 15%. The effect lasts 10s and stacks up to 2 times.
- **`[462] Exceptional Elegance`** (Type 4 | Effects: `[[3, 2205600, 1]]`)
  - *Combat Logic*: During [Link#1553: Galeform], increases the DMG dealt by [Link#1519: Instant Edge] and [Link#1520: Skyfall] by 25%.
- **`[463] Typhoon: Sharp Impact`** (Type 4 | Effects: `[[3, 2205610, 1]]`)
  - *Combat Logic*: [Link#1521: Sharp Impact] is enhanced, evolving into [Link#1159: Typhoon: Sharp Impact].
- **`[464] Instant Edge Break Style`** (Type 4 | Effects: `[[3, 2205620, 1]]`)
  - *Combat Logic*: [Link#1519: Instant Edge] consumes 1 more [Link#1152: Sharp]. | Increases the DMG dealt by [Link#1519: Instant Edge] by 90%.
- **`[465] Wind Swirl Strike`** (Type 4 | Effects: `[[3, 2205630, 1]]`)
  - *Combat Logic*: Increases the DMG dealt by [Link#1158: Tornado] by 30%. | Increases the DMG dealt by [Link#1156: Spear Thrust] by 30%.
- **`[466] Sharp Pursuit`** (Type 4 | Effects: `[[3, 2205640, 1]]`)
  - *Combat Logic*: When [Link#1519: Instant Edge] consumes [Link#1157: Chasing Step], grants 1 stack of [Link#1152: Sharp].
- **`[467] Instant Edge Combo`** (Type 4 | Effects: `[[3, 2205650, 1]]`)
  - *Combat Logic*: [Link#1519: Instant Edge] has a fixed 25% chance to trigger one extra instance of DMG (if Lucky Strike chance exceeds 25%, that becomes the new trigger chance). This extra DMG equals [Link#1519: Instant Edge] DMG x current Lucky Strike DMG multiplier%, and is affected by all relevant [Link#1519: Instant Edge] DMG bonuses.
- **`[468] Break Style`** (Type 4 | Effects: `[[3, 2205660, 1]]`)
  - *Combat Logic*: When dealing Crit DMG, Expertise Skill ignore the targets' 50% Armor.
- **`[469] Sharp Echo`** (Type 4 | Effects: `[[3, 2205670, 1]]`)
  - *Combat Logic*: If [Link#1152: Sharp] isn't at Max stacks, increases the DMG dealt by [Link#1520: Skyfall] by 25%.
- **`[470] Kamikaze Luck`** (Type 4 | Effects: `[[3, 2205680, 1]]`)
  - *Combat Logic*: For each 1 stack of [Link#1152: Sharp] consumed, gains 3 points of Courage. | Increases Lucky Strike final DMG by 50%.

---
### ผัง Talent ของอาชีพ [5] Verdant Oracle (Stages: `[{'id': 109, 'stage': 0, 'bdType': 0, 'rootId': 24069, 'recommendTalent': [24069, 10358, 503011, 502011, 501013, 529008, 6708, 504011, 538001, 5532, 2241, 24070, 537001, 10361, 5513, 24067, 2240, 5512, 536001, 10360, 530006, 10359, 5511, 539001, 5514, 2246, 500011, 2247, 24068, 507011], 'factor': 2, 'recommendModEffectId': [1112, 1205, 1206, 1410, 2204, 2205, 2406], 'mainAttrShow': [11020, 11130, 11140]}, {'id': 110, 'stage': 1, 'bdType': 0, 'rootId': 510012, 'recommendTalent': [510012, 8449, 505013, 7234, 532003, 7232, 512014, 540001, 7235, 528017, 5515, 2248, 533001, 5516, 542001, 7233, 5536, 7303, 550001, 506014, 37078, 546001, 551001, 5537, 2249, 5518, 525013, 5533, 523015, 6710, 2242, 548001, 544001, 545001, 6709, 555001, 37079, 526016, 6711, 552001], 'factor': 2, 'recommendModEffectId': [1112, 1205, 1206, 1410, 2204, 2205, 2406], 'mainAttrShow': [11020, 11130, 11140]}, {'id': 111, 'stage': 1, 'bdType': 1, 'rootId': 531002, 'recommendTalent': [531002, 8454, 514003, 6292, 520003, 5522, 2245, 533002, 5524, 40024, 8451, 516003, 515003, 6108, 562001, 5526, 561001, 6289, 521003, 556001, 5528, 2243, 5530, 518003, 2244, 519003, 6714, 6716, 559001, 566001, 563001, 565001, 557001, 571001, 570001, 8453, 560001, 6713, 525014, 524013], 'factor': 1, 'recommendModEffectId': [1205, 1206, 1407, 2204, 2205, 2406], 'mainAttrShow': [11020, 11120, 11140]}]`)
- **`[500] Brimming Vitality`** (Type 4 | Effects: `[[3, 2202020, 1]]`)
  - *Combat Logic*: Increases Energy REG SPD by 20%.
- **`[501] Intellect Conversion`** (Type 4 | Effects: `[[4, 3, 11342, 1000]]`)
  - *Combat Logic*: Every 10 points of Intellect provides 1 point of MATK.
- **`[502] Inspiration`** (Type 4 | Effects: `[[3, 2202040, 1]]`)
  - *Combat Logic*: Applies [Link#1107: Inspiration] to yourself and allies within 30 meters.
- **`[503] Regen Bud`** (Type 4 | Effects: `[[3, 2202050, 1]]`)
  - *Combat Logic*: Casting a Special Attack grants 1 [Link#1108: Regen Bud]. | | Initial cap of [Link#1108: Regen Buds]: 4. | When an Expertise Skill or Ultimate generates healing, 2 [Link#1108: Regen Buds] are consumed to throw a [Link#1115: Nourishing Seed], triggering up to once per second. | When an Expertise Skill or Ultimate deals DMG, 2 [Link#1108: Regen Buds] are consumed to shoot a [Link#1116: Wild Seed], once per second.
- **`[504] Breath of Buds`** (Type 4 | Effects: `[[3, 2202060, 1]]`)
  - *Combat Logic*: Increases Max [Link#1108: Regen Bud] by 4.
- **`[505] Nature Shield`** (Type 4 | Effects: `[[3, 2202120, 1]]`)
  - *Combat Logic*: When [Link#1526: Wild Bloom] heals a target, it also applies [Link#1111: Nature Shield] to them. | Targets with [Link#1111: Nature Shield] restore HP when hit, with the amount equal to 10% of your ATK. This effect can occur up to once per second.
- **`[506] Arcane of Green`** (Type 4 | Effects: `[[3, 2202080, 1]]`)
  - *Combat Logic*: When [Link#1529: Feral Seed] deals DMG, it increases [Link#1530: ATK by Mastery % x Luck %] for the next 10s.
- **`[507] Healing Breath`** (Type 4 | Effects: `[[3, 2202090, 1]]`)
  - *Combat Logic*: When a Special Attack, Expertise Skill, or Ultimate generates Healing, there is a 20% to trigger [Link#1109: Healing Chain]. For every 2% Luck, the chance +1%.
- **`[508] Wild Blessing`** (Type 4 | Effects: `[[3, 2202100, 1]]`)
  - *Combat Logic*: [Link#1526: Wild Bloom] now holds up to 2 charges. | [Link#1526: Wild Bloom]'s Energy cost -15%.
- **`[509] Flourish`** (Type 4 | Effects: `[[3, 2202320, 1]]`)
  - *Combat Logic*: When [Link#1530: Infusion], [Link#1529: Feral Seed], or [Link#1526: Wild Bloom] deals DMG, 30% chance to reduce the CD of the Ultimate by 1s, once per second.
- **`[510] Smite Spec`** (★ KEYSTONE SPEC | Effects: `[[3, 2202110, 1]]`)
  - *Combat Logic*: Further enhances the ability to use [Link#1526: Wild Bloom]. | [Link#1526: Wild Bloom], [Link#1532: Regen Pulse], and [Link#1535: ​Nature Ward​] grant Symbiotic Mark to allies. | Symbiotic Mark: Lasts for 10s. All of the caster's DMG will heal allies with Symbiotic Mark for 45% of the DMG dealt. | Increases the final DMG of Lucky Strikes by 50%. | When overhealing a target with Symbiotic Mark, if the overheal reaches 30% of their Max HP, the excess healing is converted into a regeneration effect lasting for 10s. This effect can trigger only once every 30s. | | Healing of Stillness: If the caster deals no DMG to enemies for 5s, each hit of the caster's Basic Attack will heal up to 10 allies (party members prioritized), with the 4-hit combo restoring 12.6% Max HP in total. After using an Ultimate, Basic Attacks immediately start healing, but this effect is disabled upon dealing DMG to enemies. | | Capable of converting attacks into healing. Lucky Strikes from attacks trigger various healing effects, enhancing healing while increasing DMG dealt.
- **`[511] Double Infusion`** (Type 4 | Effects: `[[3, 2202130, 1]]`)
  - *Combat Logic*: After casting [Link#1593: Stag Charge], the number of channels for the next [Link#1530: Infusion] +100%.
- **`[512] Final Bloomwheel`** (Type 4 | Effects: `[[3, 2202140, 1]]`)
  - *Combat Logic*: When [Link#1526: Wild Bloom] deals DMG, reduces the remaining CD of [Link#1530: Infusion] by 1s. If the DMG triggers a Lucky Strike, the remaining CD is reduced by 3s.
- **`[514] Verdant Root`** (Type 4 | Effects: `[[3, 2202160, 1]]`)
  - *Combat Logic*: While in battle state, standing still for 2s creates a Grass Domain. | Grass Domain: While inside the Grass Domain, your Haste +10%. Upon exiting the Grass Domain, your Movement SPD +50% for 0.5s, and Grass Domain disappears.
- **`[515] Full Bloom`** (Type 4 | Effects: `[[3, 2202170, 1]]`)
  - *Combat Logic*: Casting [Link#1527: Life Bloom] grants a 40% chance to reduce the remaining CD of [Link#1533: Blossom Charge] and [Link#1528: Nourish] by 2s. Each 1% of Mastery increases this chance by 0.4%, up to a maximum of 60%. | Casting [Link#1527: Life Bloom] grants a 50% chance to reduce the remaining CD of [Link#1583: Fast Growth] by 0.2s, triggering at most once every 10s. Each 20% of Haste increases the CD reduction by 0.1s, up to a maximum of 0.5s.
- **`[516] Healing Infusion`** (Type 4 | Effects: `[[3, 2202180, 1]]`)
  - *Combat Logic*: Every 5 uses of [Link#1527: Life Bloom] enhances the next direct healing Expertise Skill by 100%.
- **`[518] Verdant Duet`** (Type 4 | Effects: `[[3, 2202200, 1]]`)
  - *Combat Logic*: [Link#1527: Life Bloom] has a fixed 20% chance to heal 1 additional time.
- **`[519] Floral Whisper`** (Type 4 | Effects: `[[3, 2202210, 1]]`)
  - *Combat Logic*: Healing Expertise generate 20% more healing, but healing from [Link#1527: Life Bloom] -50%.
- **`[520] Lifeforce Extension`** (Type 4 | Effects: `[[3, 2202220, 1]]`)
  - *Combat Logic*: Increases the Healing of [Link#1109: Healing Chain] by 10%. For every 7% Mastery, [Link#1109: Healing Chain] jumps 1 additional time. | [Link#1109: Healing Chain] restores 1% of an ally's Max HP with each tick.
- **`[521] Nourish Essence`** (Type 4 | Effects: `[[3, 2202230, 1]]`)
  - *Combat Logic*: When [Link#1527: Life Bloom] generates healing, 50% chance to apply [Link#1528: Nourish].
- **`[522] Endless Blossom`** (Type 4 | Effects: `[[3, 2202240, 1]]`)
  - *Combat Logic*: When casting [Link#1533: Blossom Charge], [Link#1534: Grove Wish], or [Link#1532: Regen Pulse], 20% chance that the next cast of [Link#1527: Life Bloom] within 5s consumes no Energy.
- **`[523] Stag Charge`** (Type 4 | Effects: `[[3, 2202250, 1]]`)
  - *Combat Logic*: After triggering a total of 10 [Link#1115: Nourishing Seeds] or [Link#1116: Wild Seeds], [Link#1526: Wild Bloom] evolves into [Link#1593: Stag Charge]. | Casting [Link#1593: Stag Charge] instants grants 3 [Link#1108: Regen Buds].
- **`[524] Wings of Revival`** (Type 4 | Effects: `[[3, 2202260, 1]]`)
  - *Combat Logic*: When an ally within 20 meters takes DMG exceeding 30% of their HP, Revival triggers, which can affect the same target up to once every 45s. | Revival: Restores HP equal to 50% of the DMG taken over 5s.
- **`[525] Natural Bloom`** (Type 4 | Effects: `[[3, 2202270, 1]]`)
  - *Combat Logic*: When healing an ally with lower than 30% HP, Natural Bloom triggers, instantly restoring HP equal to 200% ATK to them. This effect can occur up to once every 30s.
- **`[526] Healing Pulse`** (Type 4 | Effects: `[[3, 2202280, 1]]`)
  - *Combat Logic*: When an enemy within 10 meters that you are engaged with is defeated (effective within a team), generates a [Link#1110: Healing Pulse]. This can only occur once every 10s.
- **`[527] Gift of Life`** (Type 4 | Effects: `[[3, 2202290, 1]]`)
  - *Combat Logic*: When an enemy within 10 meters that you are engaged with is defeated (effective within a team), generates a [Link#1113: Healing Orb]. This can only occur once every 2s.
- **`[528] Bud Acquisition`** (Type 4 | Effects: `[[3, 2202300, 1]]`)
  - *Combat Logic*: When an enemy within 10 meters that you are engaged with is defeated (effective within a team), generates an [Link#1114: Engram Orb], which grants 1 [Link#1108: Regen Bud] upon pickup.
- **`[529] Defensive Blessing`** (Type 4 | Effects: `[[3, 2202310, 1]]`)
  - *Combat Logic*: [Link#1107: Inspiration] provides the target with an additional 400 Armor.
- **`[530] Flowers Ascension`** (Type 4 | Effects: `[[3, 2202330, 1]]`)
  - *Combat Logic*: When [Link#1116: Wild Seed] deals DMG or [Link#1115: Nourishing Seed] generates healing, you gain a 10% Forest DMG bonus for the next 8s.
- **`[531] Lifebind Spec`** (★ KEYSTONE SPEC | Effects: `[[6, 1518, 1507], [3, 2202340, 1]]`)
  - *Combat Logic*: Replace Special Attack with [Link#1527: Life Bloom] and enhances the skill. | [Link#1527: Life Bloom] generates 20% more healing. | Casting [Link#1527: Life Bloom] grants 1 additional [Link#1108: Regen Bud]. | | Whenever safety allows, aim to cast as many healing skills as possible. Haste increases cast speed, and Mastery enhances healing potency.
- **`[532] Thorn`** (Type 4 | Effects: `[[3, 2202360, 1]]`)
  - *Combat Logic*: When [Link#1116: Wild Seed] hits a target, it inflicts [Link#1117: Thorn] on them. | Forest DMG dealt by players to targets with [Link#1117: Thorn] +20%.
- **`[533] Vital Surge`** (Type 4 | Effects: `[[6, 1509, 1528]]`)
  - *Combat Logic*: Replace Ultimate, [Link#1531: Divine Circle Bloom] with [Link#1551: Vital Surge].
- **`[534] Verdant Blessing`** (Type 4 | Effects: `[[3, 2202380, 1]]`)
  - *Combat Logic*: When HP of an ally with [Link#1107: Inspiration] drops below 20%, Blessing triggers. | Blessing: Grants a [Link#1111: Nature Shield] and reduces the DMG taken by 35% for 8s, once every 60s.
- **`[535] Bloomheal`** (Type 4 | Effects: `[[6, 1509, 1527]]`)
  - *Combat Logic*: Replace Ultimate, [Link#1531: Divine Circle Bloom] with [Link#1552: Bloomheal].
- **`[536] Dancing Seed`** (Type 4 | Effects: `[[3, 2202400, 1]]`)
  - *Combat Logic*: When a DMG-type Expertise Skill triggers Lucky Strike, next [Link#1116: Wild Seed] launches 1 more projectile. | For every 5 [Link#1115: Nourishing Seeds] thrown, next [Link#1115: Nourishing Seed] throws 1 more projectile.
- **`[537] Energy Surge`** (Type 4 | Effects: `[[3, 2202410, 1]]`)
  - *Combat Logic*: Every 2% haste provides 1% energy natural recovery efficiency.
- **`[538] Regeneration Bud`** (Type 4 | Effects: `[[3, 2202420, 1]]`)
  - *Combat Logic*: When dealing damage with Basic Attacks, 10% chance to gain 1 [Link#1108: Regen Bud].
- **`[539] Omnipotent Breath`** (Type 4 | Effects: `[[3, 2202430, 1]]`)
  - *Combat Logic*: When Intellect reaches 500, versatility +4%.
- **`[540] Shelter`** (Type 4 | Effects: `[[3, 2202440, 1]]`)
  - *Combat Logic*: Within 5s after Casting [Link#1530: Infusion], the damage absorption of the [Link#1111: Nature Shield] added by [Link#1526: Wild Bloom] or [Link#1535: Nature Ward] is doubled.
- **`[541] Pulse Breath`** (Type 4 | Effects: `[[3, 2202450, 1]]`)
  - *Combat Logic*: If equipped with [Link#1532: Regen Pulse] skill, [Link#1535: Nature Ward] and Ultimates will trigger [Link#1532: Regen Pulse] when their CDs are completed.
- **`[542] Feral Seed Symbiosis`** (Type 4 | Effects: `[[3, 2202460, 1]]`)
  - *Combat Logic*: When active Symbiotic Marks reach 5 or more, [Link#1529: ​Feral Seed​] and [Link#1116: Wild Seed] DMG increases by 100%.
- **`[543] Wild Protection`** (Type 4 | Effects: `[[3, 2202470, 1]]`)
  - *Combat Logic*: The charge count of [Link#1535: Nature Ward] +1. | The charge time of [Link#1535: Nature Ward] decreases by 5s.
- **`[544] Wide-area Thorns`** (Type 4 | Effects: `[[3, 2202480, 1]]`)
  - *Combat Logic*: Successful hit of [Link#1529: Feral Seed] on the targets with [Link#1117: Thorn] spreads [Link#1117: Thorn] to other units within 10 meters. | Attacking Elite or stronger targets grants 8% Forest Bonus.
- **`[545] Thornbreaker`** (Type 4 | Effects: `[[3, 2202490, 1]]`)
  - *Combat Logic*: [Link#1530: Infusion] and [Link#1593: Stag Charge] deal 100% more Final DMG to [Link#1117: Thorned] targets (each 1% of Mastery grants an additional 4%), but the healing conversion of [Link#1530: Infusion] and [Link#1593: Stag Charge] is halved.
- **`[546] Pulse Duality`** (Type 4 | Effects: `[[3, 2202500, 1]]`)
  - *Combat Logic*: When [Link#1532: Regen Pulse] is actively used, it spreads twice.
- **`[547] Swift Shelter`** (Type 4 | Effects: `[[3, 2202510, 1]]`)
  - *Combat Logic*: Each use or trigger of [Link#1532: Regen Pulse], reduces the CD of [Link#1535: Nature Ward] by 2s.
- **`[548] Pulse Retrospect`** (Type 4 | Effects: `[[3, 2202520, 1]]`)
  - *Combat Logic*: [Link#1532: Regen Pulse] returns to your position after it reaches the max distance. | [Link#1532: Regen Pulse] now deals DMG to enemies.
- **`[549] Swift Bud`** (Type 4 | Effects: `[[3, 2202530, 1]]`)
  - *Combat Logic*: Each [Link#1108: Regen Bud] gained, reduces the CD of [Link#1529: Feral Seed] by 1 second.
- **`[550] Breath of Symbiosis`** (Type 4 | Effects: `[[3, 2202540, 1]]`)
  - *Combat Logic*: Symbiotic Mark increases converted healing by 2%. Each 5% Mastery grants an additional 1%. | Symbiotic Mark also grants 2% Max HP for 5s (duration cannot be refreshed when reapplied).
- **`[551] Symbiosis Extension`** (Type 4 | Effects: `[[3, 2202550, 1]]`)
  - *Combat Logic*: Each [Link#1116: Wild Seed] fired extends the duration of activated Symbiotic Mark by 1s.
- **`[552] Pulse Echo`** (Type 4 | Effects: `[[3, 2202560, 1]]`)
  - *Combat Logic*: When dealing DMG, [Link#1530: Infusion] grants 1 stack of Pulse Echo. | Pulse Echo: Increases DMG dealt of [Link#1532: Regen Pulse] by 20%, which lasts 12s and stacks up to 5 times.
- **`[553] Luck Damage`** (Type 4 | Effects: `[[3, 2202570, 1]]`)
  - *Combat Logic*: Lucky Strike DMG Multiplier +5%. | Every 1% Luck grants 1.5% Lucky Strike DMG Multiplier.
- **`[554] Verdant Impact`** (Type 4 | Effects: `[[3, 2202580, 1]]`)
  - *Combat Logic*: For every 20 stacks of Pulse Echo gained, the next actively cast [Link#1532: Regen Pulse] triggers a [Link#1533: Blossom Charge] at both the nearest enemy and the Ally with lowest HP.
- **`[555] Wild Luck`** (Type 4 | Effects: `[[3, 2202590, 1]]`)
  - *Combat Logic*: When [Link#1526: Wild Bloom] or [Link#1532: Regen Pulse] deal DMG, grants a chance (equal to the half percentage of Luck) to gain 1 [Link#1108: Regen Bud]. If the target is affected by [Link#1117: Thorn], doubles the chance.
- **`[556] Verdant Nourishment`** (Type 4 | Effects: `[[3, 2202600, 1]]`)
  - *Combat Logic*: If you're affected with [Link#1528: Nourish], reduces all DMG taken by 10%. | If the targets are affected by [Link#1528: Nourish], enhances their Healing Received from yourself by 5%. If the stack of [Link#1528: Nourish] is above or equal to 3, additionally enhances Healing Received by 3%.
- **`[557] Ultimate Inspiration`** (Type 4 | Effects: `[[3, 2202610, 1]]`)
  - *Combat Logic*: Doubles the effectiveness of [Link#1107: Inspiration].
- **`[558] Life Bloom`** (Type 4 | Effects: `[[3, 2202620, 1]]`)
  - *Combat Logic*: Using [Link#1533: Blossom Charge] enhances the next [Link#1527: Life Bloom], skipping the cast and increasing the Healing by 50%.
- **`[559] Vitality`** (Type 4 | Effects: `[[3, 2202630, 1]]`)
  - *Combat Logic*: [Link#1528: Nourish] can stack up to 5 times. | Each use of [Link#1527: Life Bloom] grants the targets with [Link#1528: Nourish] 1 stack of [Link#1528: Nourish].
- **`[560] Flourishing Progress`** (Type 4 | Effects: `[[3, 2202640, 1]]`)
  - *Combat Logic*: When holding 2 or more [Link#1108: Regen Buds], casting [Link#1533: Blossom Charge] for damage or healing always triggers a corresponding seed (without costing [Link#1108: Regen Buds]) and grants 1 [Link#1108: Regen Bud].
- **`[561] Blooming Reincarnation`** (Type 4 | Effects: `[[3, 2202650, 1]]`)
  - *Combat Logic*: Casting [Link#1527: Life Bloom] increases [Link#1527: Life Bloom]'s healing by 20% and its Energy consumed by 10% for 4s. This effect can stack up to 5 times.
- **`[562] Energy Arcane`** (Type 4 | Effects: `[[3, 2202660, 1]]`)
  - *Combat Logic*: During [Link#1583: Fast Growth], increases Energy REG SPD by 50%. | Increases [Link#1534: Grove Wish]'s Crit by 10%
- **`[563] Transcendence`** (Type 4 | Effects: `[[3, 2202670, 1]]`)
  - *Combat Logic*: Every 60 self-heals from [Link#1528: Nourish] grants [Link#1195: Transcendence].
- **`[564] Flourishing Flower`** (Type 4 | Effects: `[[3, 2202680, 1]]`)
  - *Combat Logic*: Within Grass Domain, Flower Stalk appeared 50% earlier.
- **`[565] Tricolor Revelation`** (Type 4 | Effects: `[[3, 2202690, 1]]`)
  - *Combat Logic*: Consumes [Link#1121: Moonlight Solace] to launch Flower Dance - Tricolor Revelation. | Flower Dance - Tricolor Revelation: Grants all effects of Flower Stalks, once every 60s.
- **`[566] Flower Time Dance`** (Type 4 | Effects: `[[3, 2202700, 1]]`)
  - *Combat Logic*: Every 45s, generates 1 Flower Stalk in the following order: [Link#1119: Crimson Insight], [Link#1120: Golden Devotion], and [Link#1121: Moonlight Solace].
- **`[567] Bud to Blossom`** (Type 4 | Effects: `[[3, 2202710, 1]]`)
  - *Combat Logic*: When a Flower Stalk appears, grants 1 [Link#1108: Regen Bud] every 2s for 10s.
- **`[568] Inspire and Strengthen`** (Type 4 | Effects: `[[3, 2202720, 1]]`)
  - *Combat Logic*: [Link#1107: Inspiration] grants 135 bonus Intellect, Strength, Agility, and Endurance.
- **`[569] Energy Expansion`** (Type 4 | Effects: `[[3, 2202730, 1]]`)
  - *Combat Logic*: Increases Max Energy by 20. | Using [Link#1533: Blossom Charge] restores 30% lost Energy.
- **`[570] Rescue`** (Type 4 | Effects: `[[3, 2202740, 1]]`)
  - *Combat Logic*: Healing Expertise Skill restore 25% more HP to the targets with HP below 50%.
- **`[571] Instant Bloom`** (Type 4 | Effects: `[[3, 2202750, 1]]`)
  - *Combat Logic*: Every 5 uses of [Link#1527: Life Bloom] accelerates the using of [Link#1534: Grove Wish] or [Link#1532: Regen Pulse] by 100% and increases their Healing by 50% in 15s.

---
### ผัง Talent ของอาชีพ [8] Thunder Flash - Hand Cannon (Stages: `[{'id': 124, 'stage': 0, 'bdType': 0, 'rootId': 0, 'recommendTalent': [], 'factor': 3, 'recommendModEffectId': [], 'mainAttrShow': []}, {'id': 125, 'stage': 1, 'bdType': 0, 'rootId': 0, 'recommendTalent': [], 'factor': 3, 'recommendModEffectId': [], 'mainAttrShow': []}, {'id': 126, 'stage': 1, 'bdType': 1, 'rootId': 0, 'recommendTalent': [], 'factor': 3, 'recommendModEffectId': [], 'mainAttrShow': []}]`)

---
### ผัง Talent ของอาชีพ [9] Heavy Guardian (Stages: `[{'id': 112, 'stage': 0, 'bdType': 0, 'rootId': 22086, 'recommendTalent': [22086, 10439, 22087, 903011, 901013, 1486, 927012, 1490, 10440, 900301, 6054, 6073, 912027, 904011, 22089, 6058, 936001, 902011, 938001, 22088, 937001, 10441, 1485, 6056, 6717, 929007, 939001, 1491, 6059, 10438], 'factor': 1, 'recommendModEffectId': [1307, 1308, 2304], 'mainAttrShow': [11010, 11140, 11150]}, {'id': 113, 'stage': 1, 'bdType': 0, 'rootId': 931006, 'recommendTalent': [931006, 6065, 8579, 914007, 8582, 950001, 6080, 943001, 922007, 1489, 6076, 932008, 6066, 6067, 6070, 41037, 9041, 951001, 6074, 921007, 8583, 955001, 1488, 6068, 6072, 945001, 1494, 940001, 6721, 920007, 949001, 954001, 41040, 9038, 925017, 6719, 941001, 917007, 41039, 928019], 'factor': 1, 'recommendModEffectId': [1307, 1308, 2304], 'mainAttrShow': [11010, 11140, 11150]}, {'id': 114, 'stage': 1, 'bdType': 1, 'rootId': 930006, 'recommendTalent': [930006, 6062, 7296, 907011, 1487, 6064, 8577, 960001, 6075, 906012, 959001, 6077, 966001, 7298, 6063, 923013, 962001, 964001, 957001, 6060, 924018, 8581, 1492, 6055, 6057, 963001, 1493, 967001, 965001, 925018, 6722, 969001, 8580, 42032, 911012, 6724, 961001, 933004, 7295, 928020], 'factor': 3, 'recommendModEffectId': [1307, 1308, 1410, 2304], 'mainAttrShow': [11010, 11140, 11130]}]`)
- **`[900] Stone Fragment Tide`** (Type 4 | Effects: `[[3, 2201020, 1]]`)
  - *Combat Logic*: For 8s after you cast [Link#1536: Cracking Echo], each Basic Attack pulls a target between 8 and 20 meters away toward you. The same target cannot be pulled again within 3s.
- **`[901] Power Conversion`** (Type 4 | Effects: `[[1, 11352, 7000], [4, 0, 11352, 12000]]`)
  - *Combat Logic*: Armor +7000 | | Every 3 Strength grants 3.6 Armor.
- **`[902] Life Suppress`** (Type 4 | Effects: `[[3, 2201040, 1]]`)
  - *Combat Logic*: You gain the [Link#1122: Suppress] Expertise effect.
- **`[903] Weakness Strike`** (Type 4 | Effects: `[[3, 2201050, 1]]`)
  - *Combat Logic*: When dealing DMG, Basic Attacks have a fixed 10% chance to trigger [Link#1123: Weakness Strike] once.
- **`[904] Enhanced Weakness Strike`** (Type 4 | Effects: `[[3, 2201060, 1]]`)
  - *Combat Logic*: [Link#1123: Weakness Strike]'s fixed trigger chance +10%.
- **`[906] Block Recovery`** (Type 4 | Effects: `[[3, 2201080, 1]]`)
  - *Combat Logic*: Successful [Link#1170: Block] restores 1% of your HP and 2 Rage. This can only occur once per second. | Triggering [Link#1126: Lucky Block] restores 2% of your HP and 4 Rage. This can only occur once per second.
- **`[907] Countercrush`** (Type 4 | Effects: `[[3, 2201090, 1]]`)
  - *Combat Logic*: A successful [Link#1170: Block] triggers a [Link#1125: Countercrush], once per second. | On a [Link#1126: Lucky Block], randomly triggers 1 to 3 [Link#1125: Countercrush], once per second.
- **`[911] Rock Heal`** (Type 4 | Effects: `[[3, 2201010, 1]]`)
  - *Combat Logic*: [Link#1597: Stone Fist] restores 5% max HP. For every 1 extra enemy hit, restores an additional 2% max HP (up to a total of 15%. Excess healing is converted into an equivalent Shield.
- **`[913] Fortune Bastion`** (Type 4 | Effects: `[[3, 2201150, 1]]`)
  - *Combat Logic*: During [Link#1543: Brave Bastion], you can [Link#1170: Block ]Magic DMG.
- **`[914] Slam Shelter`** (Type 4 | Effects: `[[3, 2201160, 1]]`)
  - *Combat Logic*: A successful hit with [Link#1540: Shield Bash] reduces the target's DMG dealt to you by 3% for 10s, stacking up to 3 times.
- **`[916] Resolute Breath`** (Type 4 | Effects: `[[3, 2201170, 1]]`)
  - *Combat Logic*: While shielded, use Basic Attack midair to slam down, detonating the shield and dealing damage equal to 30% max HP to nearby enemies.
- **`[917] Smash Support`** (Type 4 | Effects: `[[3, 2201180, 1]]`)
  - *Combat Logic*: Increases the effectiveness of Shield granted by [Link#1540: Shield Bash] by 30%.
- **`[918] Sandy Shelter`** (Type 4 | Effects: `[[3, 2201190, 1]]`)
  - *Combat Logic*: During [Link#1542: Stoneform], every 20 Rage gained triggers [Link#1168: Sandy Shelter].
- **`[919] Shield Combo`** (Type 4 | Effects: `[[3, 2201200, 1]]`)
  - *Combat Logic*: Basic Attacks have a fixed 5% chance to trigger [Link#1127: Shield Combo] upon dealing DMG. Each 1% Mastery grants an extra 0.2% chance.
- **`[920] Breath of Stone`** (Type 4 | Effects: `[[3, 2201210, 1]]`)
  - *Combat Logic*: Each Sand Crystal consumed reduces the CD of [Link#1542: Stoneform] by 1s.
- **`[921] Elemental Harmony`** (Type 4 | Effects: `[[3, 2201220, 1]]`)
  - *Combat Logic*: While shielded, MATK Reduction +10%. Each 1% of Mastery increases this effect by 0.5%, up to a maximum of 40%.
- **`[922] Shield Echo`** (Type 4 | Effects: `[[3, 2201240, 1]]`)
  - *Combat Logic*: During [Link#1541: Sandshroud], adding a shield to yourself via [Link#1540: Shield Bash] triggers [Link#1128: Shield Echo].
- **`[923] Shattering Rageblow`** (Type 4 | Effects: `[[3, 2201250, 1]]`)
  - *Combat Logic*: When dealing DMG, [Link#1539: Granite Fury] has a 20% chance to allow your next Basic Attack to evolve into [Link#1169: Rageblow]. Each 2% Luck adds 1% chance. | After casting [Link#1169: Rageblow], increases [Link#1170: Block] DMG Reduction by 10% for 10s.
- **`[925] Survival Instinct`** (Type 4 | Effects: `[[3, 2201270, 1]]`)
  - *Combat Logic*: When HP falls below 30%, triggers [Link#1129: Survival Instinct], once every 60s.
- **`[926] Shadow Veil`** (Type 4 | Effects: `[[3, 2201280, 1]]`)
  - *Combat Logic*: Each enemy within 3 meters increases your [Link#1170: Block] chance by 3%, up to 15%. (Doubles the effect against Elite or stronger enemies.) Remains unchanged when Earthfort Spec is active. | If Block Spec is activated, the effect becomes: Every enemy within 3 meters increases [Link#1170: Block] DMG Reduction by 1%, up to 5%. (Doubles the effect against Elite or stronger enemies.)
- **`[927] Valiant Fury`** (Type 4 | Effects: `[[3, 2201290, 1]]`)
  - *Combat Logic*: When [Link#1135: Enraged], you gain 30% bonus Armor, decreasing by 5% per second.
- **`[928] Group Suppress`** (Type 4 | Effects: `[[3, 2201300, 1]]`)
  - *Combat Logic*: Each enemy within 3 meters enhances the effectiveness of [Link#1122: Suppress] by 3%, up to 15%. This effect is doubled against Elite or stronger enemies.
- **`[929] Rage Awakening`** (Type 4 | Effects: `[[3, 2201310, 1]]`)
  - *Combat Logic*: Consuming Rage has a chance to enter [Link#1135: Enraged] state for 5s. The more Rage you consume, the higher the chance. Each Rage increases the chance by 1%.
- **`[930] Block Spec`** (★ KEYSTONE SPEC | Effects: `[[6, 1922, 1930], [3, 2201320, 1]]`)
  - *Combat Logic*: Replaces Special Attack with [Link#1538: Countercrush], and enhances the ability. | When [Link#1126: Lucky Block] triggers, increases Block DMG Reduction by 10%. | | Try to keep Countercrush active as much as possible. While it's active, part of incoming DMG can be blocked. High Luck allows parry to yield various buffs.
- **`[931] Earthfort Spec`** (★ KEYSTONE SPEC | Effects: `[[3, 2201330, 1]]`)
  - *Combat Logic*: Further enhances the ability to use [Link#1540: Shield Bash]. | Each additional enemy hit increases the damage dealt by [Link#1540: Shield Bash] by 30%, up to 150%. | When attacked, increases All-Element Resistance by 0.6% for 4s, stacking up to 10 times. Each 1% Mastery increases this effect by 2%. | | Maintain shield uptime whenever possible. Besides reducing incoming damage, the shield also applies certain effects when active.
- **`[932] Resonant Domain`** (Type 4 | Effects: `[[3, 2201340, 1]]`)
  - *Combat Logic*: [Link#1536: Cracking Echo] generates a [Link#1137: Sandfield] that lasts for 5s.
- **`[933] Sandstone Rewind`** (Type 4 | Effects: `[[3, 2201350, 1]]`)
  - *Combat Logic*: When [Link#1169: Rageblow] deals DMG, it reduces the CD of [Link#1543: Brave Bastion] by 3s. | Casting [Link#1543: Brave Bastion] immediately restores 50% Max HP. Any excess healing is converted into a shield that lasts 10s.
- **`[934] Sandstone Shock`** (Type 4 | Effects: `[[3, 2201360, 1]]`)
  - *Combat Logic*: During [Link#1543: Brave Bastion], casting [Link#1538: Countercrush] or [Link#1539: Granite Fury] triggers [Link#1136: Sand Crystal Shock].
- **`[935] Block Blessing`** (Type 4 | Effects: `[[3, 2201370, 1]]`)
  - *Combat Logic*: A successful [Link#1170: Block] grants a fixed 30% chance for your next [Link#1539: Granite Fury] cast to consume no Sand Crystals. This effect can occur up to once every 3s.
- **`[936] Fury Shelter`** (Type 4 | Effects: `[[3, 2201380, 1]]`)
  - *Combat Logic*: While [Link#1135: Enraged], Max HP +20%.
- **`[937] Enraged Suppress`** (Type 4 | Effects: `[[3, 2201390, 1]]`)
  - *Combat Logic*: While [Link#1135: Enraged], [Link#1122: Suppress] effect +50%.
- **`[938] Enrage Delay`** (Type 4 | Effects: `[[3, 2201400, 1]]`)
  - *Combat Logic*: When Strength reaches 500, extends the duration of [Link#1135: Enraged] by 1 second.
- **`[939] Sandstone Revival`** (Type 4 | Effects: `[[3, 2201410, 1]]`)
  - *Combat Logic*: For each 1 Sand Crystal consumed, restore 1% of Max HP.
- **`[940] Enrage Expansion`** (Type 4 | Effects: `[[3, 2201420, 1]]`)
  - *Combat Logic*: While [Link#1135: Enraged], Attack Speed +8%.
- **`[941] Rage Burst improvement`** (Type 4 | Effects: `[[3, 2201430, 1]]`)
  - *Combat Logic*: The charge count of [Link#1544: Rage Burst] +1. | While [Link#1135: Enraged], [Link#1544: Rage Burst] and [Link#1134: Terra Sunder] become instant cast.
- **`[942] Star Fury`** (Type 4 | Effects: `[[3, 2201440, 1]]`)
  - *Combat Logic*: Increases [Link#1537: Star Shatter] and [Link#1594: Starfall] DMG by 30%, and guarantees [Link#1135: Enraged] status.
- **`[943] Stone Domain`** (Type 4 | Effects: `[[3, 2201450, 1]]`)
  - *Combat Logic*: Throughout the duration of [Link#1541: Sandshroud], being attacked reduces the attack speed of enemy targets within a 5 meter radius by 30% for 3s. | throughout the duration of [Link#1541: Sandshroud], Armor of allies within an 8 meter radius +10%.
- **`[944] Amplified Earthfort`** (Type 4 | Effects: `[[3, 2201460, 1]]`)
  - *Combat Logic*: Upon the triggering of [Link#1123: Weakness Strike], gains [Link#1124: Amplified Earthfort].
- **`[945] Boulder Shield`** (Type 4 | Effects: `[[3, 2201470, 1]]`)
  - *Combat Logic*: During [Link#1542: Stoneform], reduces all DMG taken by 10%.
- **`[946] Shield Bash`** (Type 4 | Effects: `[[3, 2201480, 1]]`)
  - *Combat Logic*: Enhances Shield effectiveness by 10%. | During [Link#1541: Sandshroud], additionally enhances Shield effectiveness by 10%.
- **`[947] Recovery`** (Type 4 | Effects: `[[3, 2201490, 1]]`)
  - *Combat Logic*: Each successful hit of Expertise Skill or Special Attack increases Strength by 1% in 5s. The effect stacks up to 10 times. With 10 stacks, increases Strength by 10% for 8s. During this effect, the next Expertise Skill heals you for 20% of the DMG dealt, yet no additional Strength stacks can be gained.
- **`[948] Starfall`** (Type 4 | Effects: `[[3, 2201500, 1]]`)
  - *Combat Logic*: For every 20 Sand Crystals consumed, [Link#1537: Star Shatter] evolves into [Link#1594: Starfall].
- **`[949] Rock Master`** (Type 4 | Effects: `[[3, 2201510, 1]]`)
  - *Combat Logic*: Casting [Link#1594: Starfall] grants Rock Master. | Rock Master: For 15s, Basic Attack evolves into 1 [Link#1595: Rupture], and [Link#1544: Rage Burst] evolves into 1 [Link#1134: Terra Sunder]. | When Rock Master activates, grants 10% Rock Bonus for 10s.
- **`[950] Shatter Strike`** (Type 4 | Effects: `[[3, 2201520, 1]]`)
  - *Combat Logic*: When [Link#1537: Star Shatter] or [Link#1594: Starfall] defeats a target, [Link#1537: Star Shatter ]immediately recovers 1 charge.
- **`[951] Enraged Rupture`** (Type 4 | Effects: `[[3, 2201530, 1]]`)
  - *Combat Logic*: While [Link#1135: Enraged], [Link#1595: Rupture] is bound to trigger [Link#1123: Weakness Strike].
- **`[952] Bash Pursuit`** (Type 4 | Effects: `[[3, 2201540, 1]]`)
  - *Combat Logic*: Every 50 times damage is taken, the next [Link#1540: Shield Bash] deals additional fixed damage equal to 100% HP + 300% of current shield amount (shield amount cannot exceed 150% Max HP). Can trigger at most once every 20s. Every 2% of Mastery reduces the required times of damage taken by 1. Every 1% of Versatility reduces the trigger interval by 1% (up to 50%).
- **`[953] Great Rock Master`** (Type 4 | Effects: `[[3, 2201550, 1]]`)
  - *Combat Logic*: Casting [Link#1542: Stoneform​] grants Rock Master: For 15s, Basic Attack evolves into 1 [Link#1595: Rupture], and [Link#1544: Rage Burst] evolves into 1[Link#1134: Terra Sunder].
- **`[954] Bravery in Battle`** (Type 4 | Effects: `[[3, 2201560, 1]]`)
  - *Combat Logic*: While in combat, overhealing is converted into a shield (total shield cannot exceed 50% of Max HP).
- **`[955] Rock Guard`** (Type 4 | Effects: `[[3, 2201570, 1]]`)
  - *Combat Logic*: Armor +5%. | Each attack of [Link#1134: Terra Sunder] deals an additional instance of Attack DMG to the target, equal to 100% Armor.
- **`[956] Rampart Fury`** (Type 4 | Effects: `[[3, 2201580, 1]]`)
  - *Combat Logic*: When you take DMG, [Link#1126: Lucky Block] reduces DMG taken by 2%, lasting for 8s, stacking up to 3 times.
- **`[957] Block Shelter`** (Type 4 | Effects: `[[3, 2201590, 1]]`)
  - *Combat Logic*: [Link#1539: Granite Fury] DMG enhances [Link#1126: Lucky Block] DMG Reduction by 2% for 8s. Stacks up to 3 times.
- **`[958] Sand Block`** (Type 4 | Effects: `[[3, 2201600, 1]]`)
  - *Combat Logic*: Successfully [Link#1170: Blocking] has a fixed 20% chance to gain 1 Sand Crystal. If it was a [Link#1126: Lucky Block], gain an additional 1 Sand Crystal.[Link#1170: ]
- **`[959] Rock Heart`** (Type 4 | Effects: `[[3, 2201610, 1]]`)
  - *Combat Logic*: Every 10 casts of [Link#1539: ​Granite Fury​] grant Rock Heart. | Rock Heart: For 10s, [Link#1539: ​Granite Fury​] evolves into [Link#1597: Stone Fist]. | When Rock Heart activates, grants 10% Rock Bonus for 10s. | Casting [Link#1597: Stone Fist] guarantees [Link#1135: Enraged].
- **`[960] Granite`** (Type 4 | Effects: `[[3, 2201620, 1]]`)
  - *Combat Logic*: After casting [Link#1597: Stone Fist], for the next 10s, summons 1 [Link#1131: Granite] every 2s.
- **`[961] Granite Fury`** (Type 4 | Effects: `[[3, 2201630, 1]]`)
  - *Combat Logic*: For every 50 Rage generated, summons 1 [Link#1131: Granite].
- **`[962] Granite Fury Pursuit`** (Type 4 | Effects: `[[3, 2201640, 1]]`)
  - *Combat Logic*: Every 50 times damage is taken, the next [Link#1539: Granite Fury] deals additional fixed damage equal to 7,000% of Armor. Can trigger at most once every 20s. Every 2% Mastery reduces the required times of damage taken by 1. Every 1% Luck reduces the trigger interval by 1% (up to 50%).
- **`[963] Rampart Fortitude`** (Type 4 | Effects: `[[3, 2201650, 1]]`)
  - *Combat Logic*: While [Link#1543: Brave Bastion] is active, taking DMG doubles [Link#1125: Countercrush] DMG.
- **`[964] Rage Enhancement`** (Type 4 | Effects: `[[3, 2201660, 1]]`)
  - *Combat Logic*: [Link#1539: Granite Fury] consumes 1 Sand Crystal.
- **`[965] Granite Combo`** (Type 4 | Effects: `[[3, 2201670, 1]]`)
  - *Combat Logic*: When [Link#1131: Granite] deals DMG, there is a chance, of which equals Luck Chance, to summon an additional [Link#1131: Granite].
- **`[966] Intimidation`** (Type 4 | Effects: `[[3, 2201680, 1]]`)
  - *Combat Logic*: When [Link#1131: Granite] hits a target, it reduces all DMG taken by 10% for the next 5s.
- **`[967] Granite Fury`** (Type 4 | Effects: `[[3, 2201690, 1]]`)
  - *Combat Logic*: Summoning 20 [Link#1131: Granites] grants Rock Heart: For 10s, [Link#1539: Granite Fury] evolves into [Link#1597: Stone Fist].
- **`[968] Counter Storm`** (Type 4 | Effects: `[[3, 2201700, 1]]`)
  - *Combat Logic*: For 10s after casting [Link#1536: Cracking Echo], trigger 1 [Link#1125: Countercrush] every 2s.
- **`[969] Rock Luck`** (Type 4 | Effects: `[[3, 2201710, 1]]`)
  - *Combat Logic*: Luck Chance +5%. | [Link#1125: Countercrush] Crit +50%.
- **`[970] Rock Mastery`** (Type 4 | Effects: `[[3, 2201720, 1]]`)
  - *Combat Logic*: Mastery +6,250. | During [Link#1543: Brave Bastion], Mastery +8%.
- **`[971] Enraged Rock Heart`** (Type 4 | Effects: `[[3, 2201730, 1]]`)
  - *Combat Logic*: While [Link#1135: Enraged], increases Luck Chance by 10%.

---
### ผัง Talent ของอาชีพ [10] Ritual Dance of Shadowspirits: Ceremonial Blade / Staff (Stages: `[]`)

---
### ผัง Talent ของอาชีพ [11] Marksman (Stages: `[{'id': 115, 'stage': 0, 'bdType': 0, 'rootId': 25096, 'recommendTalent': [25096, 10362, 25095, 3061, 5540, 3062, 1107012, 6699, 1134001, 5539, 1132001, 3064, 1102010, 25097, 1131002, 1103009, 10363, 1104009, 25094, 1135001, 3063, 5541, 1133001, 10365, 10364, 1125010, 5542, 5538, 1100011, 1101012], 'factor': 2, 'recommendModEffectId': [1111, 1113, 1114, 1408, 2104, 2105], 'mainAttrShow': [11030, 11120, 11140]}, {'id': 116, 'stage': 1, 'bdType': 0, 'rootId': 1126010, 'recommendTalent': [1126010, 3065, 3067, 1109010, 6296, 34105, 1108010, 1150001, 8461, 1111010, 8460, 1112010, 5547, 1106010, 5551, 1151001, 5549, 1124011, 5550, 1130002, 5543, 1145001, 5553, 1105010, 34106, 1143001, 6700, 1146001, 1110010, 5546, 5552, 1114005, 1137001, 1139001, 1140001, 6701, 1138001, 1141001, 6293, 1123011], 'factor': 2, 'recommendModEffectId': [1111, 1113, 1114, 1408, 2104, 2105], 'mainAttrShow': [11030, 11120, 11140]}, {'id': 117, 'stage': 1, 'bdType': 1, 'rootId': 1129002, 'recommendTalent': [1129002, 3069, 3070, 1118004, 5202, 5559, 1112011, 1120003, 6298, 34107, 1115003, 1152001, 5560, 1162001, 5562, 1124012, 5561, 1119004, 5201, 33038, 5556, 5564, 1117003, 6707, 1164001, 5557, 5563, 1157001, 1160001, 1165001, 6705, 1166001, 38069, 1156001, 1161001, 1116003, 1163001, 1158001, 6297, 1123012], 'factor': 1, 'recommendModEffectId': [1111, 1113, 1114, 1408, 1409, 1410, 2104, 2105], 'mainAttrShow': [11030, 11120, 11110]}]`)
- **`[1100] Photon Limit`** (Type 4 | Effects: `[[3, 2203010, 1]]`)
  - *Combat Logic*: Increases Max Photon Energy by 20, extending the duration of [Link#1138: Photon Reforge]. Unaffected when Wildpack Spec is active. | If Falconry Spec is activated, the effect becomes: Max Photon Energy -20 but [Link#1138: Photon Reforge] state can be entered more quickly.
- **`[1101] Agility Conversion`** (Type 4 | Effects: `[[4, 2, 11122, 7000]]`)
  - *Combat Logic*: Every 10 Agility grants 7 Haste.
- **`[1102] Vulnerable Strike`** (Type 4 | Effects: `[[3, 2203030, 1]]`)
  - *Combat Logic*: Dealing DMG grants a fixed 30% chance to apply Vulnerability to the enemy. | Vulnerability: Increases the DMG you deal to the target by 10% for 5s.
- **`[1103] Wolf Pact`** (Type 4 | Effects: `[[3, 2203040, 1]]`)
  - *Combat Logic*: Tames a Wild Wolf to fight alongside you. [Link#1601: Storm Arrow] has a 30% fixed chance to trigger Coordinated Attack. | | Wild Wolf | A Wild Wolf fights alongside you. | Basic Attack: Sweeps the enemy, dealing Attack DMG equal to 60% ATK (which scales with the Level/Tier of your Basic Attack). | Coordinated Attack: Wild Wolf leaps to the enemy and bites, dealing Attack DMG equal to 100% ATK (which scales with the Level/Tier of your Basic Attack).
- **`[1104] Psychic Surge`** (Type 4 | Effects: `[[3, 2203050, 1]]`)
  - *Combat Logic*: For every 15 Special Attacks cast, Photon Energy granted by the next cast of [Link#1550: Arrow Rain] +100%.
- **`[1105] Battle Howl`** (Type 4 | Effects: `[[3, 2203060, 1]]`)
  - *Combat Logic*: While [Link#1549: Wildcall] is active, the Wild Wolf is bound to deal Crit DMG on hit.
- **`[1106] Direwolf's Hunger`** (Type 4 | Effects: `[[3, 2203070, 1]]`)
  - *Combat Logic*: When the Wild Wolf deals Crit DMG, you and your Beast gain 2% Haste for 10s. This effect stacks up to 5 times. | When Haste exceeds 35%, every extra 1% of Haste grants 0.2% ATK.
- **`[1107] Meditation`** (Type 4 | Effects: `[[3, 2203080, 1]]`)
  - *Combat Logic*: While in [Link#1138: Photon Reforge], Photon Energy drain per second is reduced from 25 to 20, allowing the effect to last longer. Unaffected when Wildpack Spec is active. | If Falconry Spec is activated, the effect becomes: Photon Energy regeneration is increased from 2 to 3 points per second, reducing the time required to enter [Link#1138: Photon Reforge].
- **`[1108] Phantom Wolfstrike`** (Type 4 | Effects: `[[3, 2203090, 1]]`)
  - *Combat Logic*: When Wild Wolf launches a Coordinated Attack, or [Link#1139: Tail Sweep], there is a fixed 30% chance to summon a Phantom Direwolf using [Link#1140: Pounce and Bite] to attack the current enemy. | [Link#1140: Pounce and Bite] inflicts [Link#1141: Bleed], and if the target is already suffered from [Link#1141: Bleed], [Link#1140: Pounce and Bite] deals Crit DMG.
- **`[1109] Direwolf Bite`** (Type 4 | Effects: `[[3, 2203100, 1]]`)
  - *Combat Logic*: Wild Wolf's Coordinated Attack has a 50% fixed chance to inflict [Link#1141: Bleed].
- **`[1110] Demon Wolf Twin`** (Type 4 | Effects: `[[3, 2203110, 1]]`)
  - *Combat Logic*: When [Link#1601: Storm Arrow] deals DMG in battle, it has a fixed 10% chance to summon a Wild Wolf for 8s. This effect can occur once every 40s.
- **`[1111] Photon Reforge Lore`** (Type 4 | Effects: `[[3, 2203120, 1]]`)
  - *Combat Logic*: While [Link#1138: Photon Reforge] is active, all of the Wild Wolf's attacks nullify the target's Armor.
- **`[1112] Twin Arrows`** (Type 4 | Effects: `[[3, 2203130, 1]]`)
  - *Combat Logic*: [Link#1546: Luminary Bolt] additionally causes a Photon Explosion, dealing Attack DMG equal to 1,500% ATK (which scales with the Level/Tier of Ultimate), and also knocks targets airborne and increases the DMG you deal to them by 5% for 10s.
- **`[1114] Tracer Arrows`** (Type 4 | Effects: `[[3, 2203140, 1]]`)
  - *Combat Logic*: While [Link#1138: Photon Reforge] is active, for each beast on the battlefield, [Link#1601: Storm Arrow] fires 1 extra [Link#1142: Lightseeker Arrow] (up to 4 arrows).
- **`[1115] Radiant Spirit`** (Type 4 | Effects: `[[3, 2203150, 1]]`)
  - *Combat Logic*: Extends the duration of [Link#1555: Focus] by 3s.
- **`[1116] Swift`** (Type 4 | Effects: `[[3, 2203160, 1]]`)
  - *Combat Logic*: Applies Swift to the Falcon when casting [Link#1143: Lightning Strike]. | Swiftness: Increases Attack SPD by 10%. This effect lasts 8s and stacks up to 3 times.
- **`[1117] Radiant Sharpshooter`** (Type 4 | Effects: `[[3, 2203170, 1]]`)
  - *Combat Logic*: Reduces Max Photon Energy by 20.
- **`[1118] Falcon Raid`** (Type 4 | Effects: `[[3, 2203180, 1]]`)
  - *Combat Logic*: For every 3 instances of Crit DMG dealt by Special Attacks, the Falcon instantly launches [Link#1143: Lightning Strike].
- **`[1119] Meteor`** (Type 4 | Effects: `[[3, 2203190, 1]]`)
  - *Combat Logic*: When the Falcon strikes, grants you a fixed 30% chance to gain 1 stack of Weak Point Aim. | Using [Link#1557: Quadraflare] leaves behind a Radiance Rift midair. Radiance Rift fires [Link#1188: Photon Arrows] equal to the current number of Weak Point Aim stacks.
- **`[1120] Piercing Shot`** (Type 4 | Effects: `[[3, 2203200, 1]]`)
  - *Combat Logic*: Increases the Crit of [Link#1547: Double Arrow] and [Link#1557: Quadraflare] by 7%.
- **`[1121] Falcon's Heart`** (Type 4 | Effects: `[[3, 2203210, 1]]`)
  - *Combat Logic*: The Falcon ignores 30% of the target's Armor.
- **`[1122] Lightfall`** (Type 4 | Effects: `[[3, 2203220, 1]]`)
  - *Combat Logic*: Each 1% critical rate increases Crit DMG by 0.5%. | When [Link#1547: Double Arrow] or [Link#1557: Quadraflare] deals Crit DMG, 2 Photon Energy is restored.
- **`[1123] Focused Shot`** (Type 4 | Effects: `[[3, 2203230, 1]]`)
  - *Combat Logic*: Every target hit grants 1% Light DMG bonus. The bonus lasts 3s and can layerup to 4 times.
- **`[1124] Valiant Heart`** (Type 4 | Effects: `[[3, 2203240, 1]]`)
  - *Combat Logic*: Companions deal 15% more DMG to Elites or stronger enemies.
- **`[1125] Overcharge`** (Type 4 | Effects: `[[3, 2203250, 1]]`)
  - *Combat Logic*: When Basic Attacks deal DMG, there is a 5% fixed chance to instantly grant Special Attack 1 charge, up to the maximum charge limit.
- **`[1126] Wildpack Spec`** (★ KEYSTONE SPEC | Effects: `[[3, 2203260, 1]]`)
  - *Combat Logic*: Further enhances [Link#1601: Storm Arrow] and the Wild Wolf's power. | [Link#1601: Storm Arrow] always deals 200% Crit DMG on critical hits. | While [Link#1138: Photon Reforge] is active, the chance for the Wild Wolf to trigger Coordinated Attack is increased to 100%. | | The Wild Wolf becomes empowered, and Haste allows both you and the wolf to attack more frequently.
- **`[1127] Arrow Barrage`** (Type 4 | Effects: `[[3, 2203270, 1]]`)
  - *Combat Logic*: Basic Attacks have a fixed 20% chance to fire one arrow at each of up to 3 enemies near the target.
- **`[1128] Sundering Arrow`** (Type 4 | Effects: `[[3, 2203280, 1]]`)
  - *Combat Logic*: Basic Attacks have a fixed 15% chance to trigger [Link#1151: Split Arrow], once per second.
- **`[1129] Falconry Spec`** (★ KEYSTONE SPEC | Effects: `[[6, 2220, 2222], [3, 2203290, 1]]`)
  - *Combat Logic*: Replaces Special Attack with [Link#1547: Double Arrow] and enhances the ability to use this skill. | Regenerates 2 Photon Energy per second. | Each 1% Haste grants 1% CD decrease to [Link#1547: Double Arrow]. | You can tame a Falcon to assist you in battle. | | Falcon always follows the caster. When the caster deals DMG with Class Skills, the Falcon has a fixed 23% chance to swiftly strike the target (guaranteed on Crit), dealing Attack DMG equal to 150% ATK to the enemy (which scales with the Level/Tier of Basic Attack). Additionally, when the strike count of the Falcon exceeds 5, the next strike of the Falcon combines all excess strikes and DMG. | | The Falcon responds to the caster's attacks. Haste and Crit increase its strike frequency, and after learning Lightning Strike, the Falcon deals significantly more DMG.
- **`[1130] Wolf Dancer`** (Type 4 | Effects: `[[3, 2203300, 1]]`)
  - *Combat Logic*: After you use [Link#1550: Arrow Rain], the Wild Wolf continuously performs [Link#1139: Tail Sweep] until the [Link#1550: Arrow Rain] ends. | Wild Wolf's [Link#1139: Tail Sweep] is bound to deal Crit DMG and to inflict [Link#1141: Bleed].
- **`[1131] Explosive Arrow`** (Type 4 | Effects: `[[3, 2203310, 1]]`)
  - *Combat Logic*: When a Basic Attack or Special Attack deals DMG, it has a fixed 10% chance to fire an [Link#1144: Explosive Arrow], once every 3s.
- **`[1132] Rapid Shot`** (Type 4 | Effects: `[[3, 2203320, 1]]`)
  - *Combat Logic*: Every 5% Haste provides an additional 1% attack speed.
- **`[1133] Beast Power`** (Type 4 | Effects: `[[3, 2203330, 1]]`)
  - *Combat Logic*: Companion's damage +10%.
- **`[1134] Dexterity`** (Type 4 | Effects: `[[3, 2203340, 1]]`)
  - *Combat Logic*: When Agility reaches 500 points, attack speed +5%.
- **`[1136] Wolf Sharp Strike`** (Type 4 | Effects: `[[3, 2203360, 1]]`)
  - *Combat Logic*: In the state of [Link#1138: Photon Reforge], Wolf Crit DMG +50%.
- **`[1137] Beast Tidal Power`** (Type 4 | Effects: `[[3, 2203370, 1]]`)
  - *Combat Logic*: Increases Light Bonus by 3%. | For 5s after casting [Link#1580: Torrent Volley] or its enhanced form [Link#1602: Lumi Torrent], increases Light Bonus by 10%.
- **`[1138] Arrow Rain Acceleration`** (Type 4 | Effects: `[[3, 2203380, 1]]`)
  - *Combat Logic*: Each time you summon 1 Wolf or Phantom Wolf, the remaining CD of [Link#1550: Arrow Rain] -0.5s.
- **`[1139] Life Hunt`** (Type 4 | Effects: `[[3, 2203390, 1]]`)
  - *Combat Logic*: For each additional [Link#1141: Bleed] effect on the target, Wolf deals +3% damage to it.
- **`[1140] Wolf Fang Pact`** (Type 4 | Effects: `[[3, 2203400, 1]]`)
  - *Combat Logic*: Wild Wolf's Coordinated Attack or Tail Sweep deals damage (triggers only once even when hitting multiple targets) and reduces the remaining CD of [Link#1601: Storm Arrow] by 1s.
- **`[1141] Light and Shadow Drain`** (Type 4 | Effects: `[[3, 2203410, 1]]`)
  - *Combat Logic*: [Link#1142: Lightseeker Arrow] has a fixed 50% chance to apply [Link#1141: Bleed] to the target.
- **`[1142] Wolf Evolution`** (Type 4 | Effects: `[[3, 2203420, 1]]`)
  - *Combat Logic*: Wild Wolf evolves into its Adult Form, increases DMG by 30%, DMG Range by 50%.
- **`[1143] Legendary Beast`** (Type 4 | Effects: `[[3, 2203430, 1]]`)
  - *Combat Logic*: Casting [Link#1549: Wildcall] summons a Legendary Companion based on current Photon Energy: If Photon Energy is below 50%, summons [Link#1146: Legendary Eagle]. If Photon Energy reaches 50% or more, summons [Link#1147: Legendary Boar]. | [Link#1549: Wildcall] now holds up to 2 charges.
- **`[1144] Lumi Torrent`** (Type 4 | Effects: `[[3, 2203440, 1]]`)
  - *Combat Logic*: While in [Link#1138: Photon Reforge] state, [Link#1580: Torrent Volley] continuously charges. After 30s of charging, [Link#1580: Torrent Volley] evolves into [Link#1602: Lumi Torrent]. | Upon casting [Link#1602: Lumi Torrent], immediately gain full Photon Energy.
- **`[1145] Wild Call CD`** (Type 4 | Effects: `[[3, 2203450, 1]]`)
  - *Combat Logic*: For each [Link#1142: Lightseeker Arrow] fired, reduces the remaining CD of [Link#1549: Wildcall] by 0.4s (when Haste exceeds 30%, each extra 1% Haste reduces an additional 0.005s, up to 0.8s).
- **`[1146] Mastery of Bleed`** (Type 4 | Effects: `[[3, 2203460, 1]]`)
  - *Combat Logic*: Each 1% Mastery grants 6% [Link#1141: Bleed] DMG.
- **`[1147] Light Chasing Sharp`** (Type 4 | Effects: `[[3, 2203470, 1]]`)
  - *Combat Logic*: While [Link#1138: Photon Reforge] is active, reduces [Link#1601: Storm Arrow] CD by 50%.
- **`[1148] Arrow of Light`** (Type 4 | Effects: `[[3, 2203480, 1]]`)
  - *Combat Logic*: [Link#1550: Arrow Rain] and [Link#1142: Lightseeker Arrow] are bound to deal Crit DMG.
- **`[1149] Light Intent`** (Type 4 | Effects: `[[3, 2203490, 1]]`)
  - *Combat Logic*: Increases Max Photon Energy by 20.
- **`[1150] Wolf's Bite`** (Type 4 | Effects: `[[3, 2203500, 1]]`)
  - *Combat Logic*: Wild Wolf deals additionally 30% DMG to targets with current HP less than or equal to 35%.
- **`[1151] Stomp`** (Type 4 | Effects: `[[3, 2203510, 1]]`)
  - *Combat Logic*: Casting [Link#1549: Wildcall] again within 10s of its initial cast commands all beasts on the field to immediately cast [Link#1145: Stomp].
- **`[1152] Steel Beak`** (Type 4 | Effects: `[[3, 2203520, 1]]`)
  - *Combat Logic*: When the caster and the Falcon deal Crit DMG, inflicts 1 stack of [Link#1148: Steel Beak] to the target. | Every 10 stacks of [Link#1148: Steel Beak] trigger [Link#1143: Lightning Strike], up to once every 3s.
- **`[1153] Phantom Falcon`** (Type 4 | Effects: `[[3, 2203530, 1]]`)
  - *Combat Logic*: Triggering Implosion 5 times summons a [Link#1150: Phantom Falcon] to charge at the target. For each additional target hit by the [Link#1150: Phantom Falcon], its DMG increases by 20%, up to 200%.
- **`[1154] Focused Concentration`** (Type 4 | Effects: `[[3, 2203540, 1]]`)
  - *Combat Logic*: Throughout the duration of [Link#1555: Focus], gains 0.5% Crit and 1% Crit DMG every 0.5s, stacking up to 15 times.
- **`[1155] Dual Arrow Mastery`** (Type 4 | Effects: `[[3, 2203550, 1]]`)
  - *Combat Logic*: When a Special Attack deals Crit DMG, reduces the remaining CD of [Link#1548: Blast Shot] and [Link#1582: Powerdraw] by 1 second.
- **`[1156] Sharp Double Arrow I`** (Type 4 | Effects: `[[3, 2203560, 1]]`)
  - *Combat Logic*: Increases the Crit DMG of [Link#1547: Double Arrow] and [Link#1557: Quadraflare] by 15%.
- **`[1157] Light Energy Stasis`** (Type 4 | Effects: `[[3, 2203570, 1]]`)
  - *Combat Logic*: When [Link#1581: Radiance Barrage] hits a target, it applies Light Energy Stasis to them. | Light Energy Stasis: movement speed -30%. Being hit by [Link#1582: Powerdraw] is bound to deal Crit DMG. Lasts for 5s.
- **`[1158] Falcon Break`** (Type 4 | Effects: `[[3, 2203580, 1]]`)
  - *Combat Logic*: The Falcon ignores 20% of the target's Armor, and 40% when dealing Crit DMG.
- **`[1159] Eagle Eye`** (Type 4 | Effects: `[[3, 2203590, 1]]`)
  - *Combat Logic*: When Photon Energy is above 50%, casting [Link#1581: Radiance Barrage] counts as [Link#1138: Photon Reforge].
- **`[1160] Celestial Eagle`** (Type 4 | Effects: `[[3, 2203600, 1]]`)
  - *Combat Logic*: While [Link#1555: Focus] is active, [Link#1581: Radiance Barrage] summons 1 [Link#1149: Celestial Eagle] at the target's location. | Now, each 1% of Haste increases the CD Boost of Focus by 1%.
- **`[1161] Radiant Charge`** (Type 4 | Effects: `[[3, 2203610, 1]]`)
  - *Combat Logic*: When an arrow fired from Radiance Rift deals DMG for 1 time, increases the DMG of the next [Link#1548: Blast Shot] by 20%, up to a maximum of 100%.
- **`[1162] Light Prism`** (Type 4 | Effects: `[[3, 2203620, 1]]`)
  - *Combat Logic*: When [Link#1143: Lightning Strike] hits a target, it triggers Light Prism. | Light Prism: Deals area damage equal to 100% ATK to up to 5 surrounding enemy targets, and additionally applies 3 stacks of [Link#1148: Steel Beak].
- **`[1163] Lightning Strike`** (Type 4 | Effects: `[[3, 2203630, 1]]`)
  - *Combat Logic*: Increases [Link#1143: Lightning Strike] DMG by 30%.
- **`[1164] Energy Gathering Power`** (Type 4 | Effects: `[[3, 2203640, 1]]`)
  - *Combat Logic*: [Link#1582: Powerdraw] CD -50%. | When Photon Energy is above 50%, casting [Link#1582: Powerdraw] counts as [Link#1138: Photon Reforge].
- **`[1165] Steel Beak Strike`** (Type 4 | Effects: `[[3, 2203650, 1]]`)
  - *Combat Logic*: When [Link#1582: Powerdraw] hits a target, it applies 2 stacks of [Link#1148: Steel Beak]. If it deals Crit DMG, it applies 5 stacks of [Link#1148: Steel Beak].
- **`[1166] Steel Beak Gathering`** (Type 4 | Effects: `[[3, 2203660, 1]]`)
  - *Combat Logic*: When [Link#1149: Celestial Eagle] hits a target, it prevents the target's [Link#1148: Steel Beak] from naturally decaying.
- **`[1167] Chain Explosion`** (Type 4 | Effects: `[[3, 2203670, 1]]`)
  - *Combat Logic*: [Link#1548: Blast Shot] Upon detonation, inflicts 10 stacks of [Link#1148: Steel Beak] on all targets hit.

---
### ผัง Talent ของอาชีพ [12] Shield Knight (Stages: `[{'id': 121, 'stage': 0, 'bdType': 0, 'rootId': 25139, 'recommendTalent': [25139, 10526, 1201008, 1200008, 1206008, 10528, 6601, 1203009, 10527, 25140, 1207008, 6603, 6602, 1205008, 1595, 1233001, 6726, 25142, 1234001, 1603, 1231004, 25141, 10525, 1204008, 1600, 6604, 1202009, 1599, 1596, 1232001], 'factor': 2, 'recommendModEffectId': [1307, 1308, 1409, 2204, 2304, 2404, 2405], 'mainAttrShow': [11010, 11110, 11140]}, {'id': 122, 'stage': 1, 'bdType': 0, 'rootId': 1208009, 'recommendTalent': [1208009, 6456, 1597, 1212009, 1209009, 1211009, 6605, 6457, 8681, 6606, 8682, 1598, 1239001, 6607, 1217013, 6621, 1602, 1237001, 6458, 1230012, 6611, 6729, 6459, 1248001, 1216009, 6609, 1214009, 6610, 1213009, 1250001, 1249001, 1236001, 1246001, 1228012, 1238001, 6612, 1235001, 8684, 1242001, 1243001], 'factor': 2, 'recommendModEffectId': [1307, 1308, 1409, 2204, 2304, 2404, 2405], 'mainAttrShow': [11010, 11110, 11140]}, {'id': 123, 'stage': 1, 'bdType': 1, 'rootId': 1218011, 'recommendTalent': [1218011, 6460, 1604, 1220011, 1219011, 1221011, 6614, 6461, 8685, 6613, 8687, 1605, 1260001, 6615, 1217014, 8686, 1227013, 6623, 1607, 1257001, 6618, 34160, 6617, 40078, 1259001, 1225008, 6619, 1226008, 1251001, 1256001, 1264001, 8688, 1229013, 1258001, 1252001, 1254001, 6734, 1262001, 6732, 1266001], 'factor': 4, 'recommendModEffectId': [1307, 1308, 2204, 2304, 2404, 2405], 'mainAttrShow': [11010, 11120, 11140]}]`)
- **`[1200] Lightforged Body`** (Type 4 | Effects: `[[3, 2206010, 1]]`)
  - *Combat Logic*: Every 1 Holy Sigil consumed grants a [Link#1172: Radiant Shield] equal to 45% ATK (depending on Adventurer Level, up to 90%).
- **`[1201] Condemn`** (Type 4 | Effects: `[[3, 2206020, 1]]`)
  - *Combat Logic*: When casting a skill that consumes Photon Energy, there is a 30% fixed chance for Basic Attacks to evolve into [Link#1598: Condemn].
- **`[1202] Blessing of Holy Sigil`** (Type 4 | Effects: `[[3, 2206030, 1]]`)
  - *Combat Logic*: When using a Skill that consumes Holy Sigils, 20% chance for your next Holy Sigil-consuming skill to consume no Holy Sigils. The effect lasts for 8s or until a Holy Sigil-consuming skill is cast.
- **`[1203] Ring of Judgment`** (Type 4 | Effects: `[[3, 2206040, 1]]`)
  - *Combat Logic*: Casting [Link#1564: Judgment] generates a [Link#1560: Divine Circle], with a CD of 30s. | Each Holy Sigil consumed reduces the remaining CD by 1s.
- **`[1204] Lightforge Continuum`** (Type 4 | Effects: `[[3, 2206050, 1]]`)
  - *Combat Logic*: For every 20 Photon Energy consumed, gains [Link#1172: Radiant Shield] equal to 45% ATK (this ratio is affected by Adventurer Level, up to 90%).
- **`[1205] Haste Sigil`** (Type 4 | Effects: `[[3, 2206060, 1]]`)
  - *Combat Logic*: Each 1% Haste increases the recovery speed of Holy Sigil by 1%. Recovery time = Initial recovery time / (1 + recovery speed bonus).
- **`[1206] Power Conversion`** (Type 4 | Effects: `[[1, 11352, 7000], [4, 0, 11352, 12000]]`)
  - *Combat Logic*: Armor +7000 | | Every 3 Strength grants 3.6 Armor.
- **`[1207] Light of Condemn`** (Type 4 | Effects: `[[3, 2206080, 1]]`)
  - *Combat Logic*: While inside a [Link#1560: Divine Circle], your [Link#1598: Condemn] is enhanced, thrusting a blade of light forward and dealing double DMG.
- **`[1208] Recovery Spec`** (★ KEYSTONE SPEC | Effects: `[[3, 2206090, 1]]`)
  - *Combat Logic*: Further enhances your ability to use [Link#1561: Valor Bash]. | [Link#1561: Valor Bash] is accompanied by [Link#1174: Radiant Impact]. | | Try to maintain the Armor bonus from Valor Bash, and trigger Inferno Reckon through high Crits to gain more Photon Energy. Sufficient Photon Energy means continuous self-healing under the blessing of Judgment and Scorching Judgment.
- **`[1209] Oracle`** (Type 4 | Effects: `[[3, 2206100, 1]]`)
  - *Combat Logic*: When a skill that consumes Holy Sigil critically hits, gain an additional 30% Photon Energy. | Crit DMG of skills that consume Photon Energy +30%.
- **`[1210] Judgment Revelation`** (Type 4 | Effects: `[[3, 2206110, 1]]`)
  - *Combat Logic*: When [Link#1177: Divine Strike] Crits, there's a 50% fixed chance to automatically cast [Link#1564: Judgment] on the target (this [Link#1564: Judgment] cannot trigger [Link#1177: Divine Strike]).
- **`[1211] Divine Circle Defender`** (Type 4 | Effects: `[[3, 2206120, 1]]`)
  - *Combat Logic*: While within the [Link#1560: Divine Circle], the Armor effect provided by [Link#1561: Valor Bash] +30%.
- **`[1212] Radiant Guard`** (Type 4 | Effects: `[[3, 2206130, 1]]`)
  - *Combat Logic*: Casting [Link#1562: Shield Toss] immediately grants a [Link#1172: Radiant Shield] equal to 55% Armor (affected by Versatility and Element bonuses). | The charge count of [Link#1562: Shield Toss] +1.
- **`[1213] Aegis Ward's Anthem`** (Type 4 | Effects: `[[3, 2206140, 1]]`)
  - *Combat Logic*: For every 2 Holy Sigils consumed, the remaining CD of [Link#1565: Aegis Ward] -1 second.
- **`[1214] Fearless Shield`** (Type 4 | Effects: `[[3, 2206150, 1]]`)
  - *Combat Logic*: Each time [Link#1562: Shield Toss] deals DMG, gain a [Link#1172: Radiant Shield] equal to 13.75% Armor (affected by Versatility and Element bonuses).
- **`[1215] Aegis Ward's Retribution`** (Type 4 | Effects: `[[3, 2206160, 1]]`)
  - *Combat Logic*: During [Link#1565: Aegis Ward], [Link#1170: Block] chance is increased to 1.5 times. | When attacked, reduces [Link#1565: Aegis Ward]'s remaining CD by 0.5s. This effect can only trigger once per second.
- **`[1216] Lightforged Greatsword`** (Type 4 | Effects: `[[3, 2206170, 1]]`)
  - *Combat Logic*: After every 10 casts of [Link#1564: Judgment], the next [Link#1564: Judgment] is enhanced into Scorching Judgment. | Scorching Judgment: Summon a holy greatsword to descend upon the target area for 5s, healing yourself (Healing equal to that of [Link#1564: Judgment]) while dealing damage over time to nearby enemies and inflicting Scorch, totally dealing Attack DMG equal to 600% ATK (scales with [Link#1564: Judgment] level/rank). | Scorch: Reduces damage taken from the target by 3% for 10s. Stacks up to 10 times. Grants 3 stacks of Scorch on Crit.
- **`[1217] Holy Barrier`** (Type 4 | Effects: `[[3, 2206180, 1]]`)
  - *Combat Logic*: Using Ultimate Skill creates a Holy Barrier, shielding nearby allies from DMG. The Holy Barrier lasts for 15s or until it absorbs Total DMG equal to 150% Max HP +3000% Armor.
- **`[1218] Shield Spec`** (★ KEYSTONE SPEC | Effects: `[[6, 2405, 2406], [3, 2206190, 1]]`)
  - *Combat Logic*: Replaces Special Attack with [Link#1566: Vanguard Strike] and enhances its power. | Each additional enemy hit by [Link#1566: Vanguard Strike] grants 2 extra Photon Energy, up to 10. | Successfully Block prevents losing the stacks of Lightforged Barrier. | | Lightforged Barrier: Each stack increases Max HP by 2%, up to 10 stacks, with each instance of DMG removing 1 stack. It lasts 25s or until all stacks are consumed. gaining stacks resets the duration. | | Managing Lightforged Barrier is crucial for sustaining high HP and triggering self-healing and DMG Reduction effects from Judgment, Zeal Crusade, and Radiance.
- **`[1219] Light Barrier`** (Type 4 | Effects: `[[3, 2206200, 1]]`)
  - *Combat Logic*: [Link#1175: Lightforged Barrier] cap +2.
- **`[1220] Ascension of the Lightforged Barrier`** (Type 4 | Effects: `[[3, 2206210, 1]]`)
  - *Combat Logic*: Photon Energy cap +20. | When you have at least 5 stacks of [Link#1175: Lightforged Barrier], [Link#1564: Judgment] consumes 5 less Photon Energy.
- **`[1221] Divine Circle Chant`** (Type 4 | Effects: `[[3, 2206220, 1]]`)
  - *Combat Logic*: The recovery rate of Holy Sigils from Haste +100%.
- **`[1222] Holy Strike`** (Type 4 | Effects: `[[3, 2206230, 1]]`)
  - *Combat Logic*: Each time 1 stack of [Link#1175: Lightforged Barrier] is consumed or deducted, 10% chance to obtain 1 Holy Sigil.
- **`[1223] Holy Radiance`** (Type 4 | Effects: `[[3, 2206240, 1]]`)
  - *Combat Logic*: When [Link#1559: Sacred Blade] hits an enemy target, it applies a [Link#1199: Holy Mark] to the target. | [Link#1566: Vanguard Strike] can spread this [Link#1199: Holy Mark] to hit enemy targets.
- **`[1224] Determination Slash`** (Type 4 | Effects: `[[3, 2206250, 1]]`)
  - *Combat Logic*: When [Link#1175: Lightforged Barrier] has 5 or fewer stacks, taking DMG no longer reduces its stacks. When [Link#1175: Lightforged Barrier] has more than 5 stacks, taking DMG has a 50% fixed chance not to reduce its stacks.
- **`[1225] Lightforged Drive`** (Type 4 | Effects: `[[3, 2206260, 1]]`)
  - *Combat Logic*: When casting [Link#1568: Radiance], it automatically releases [Link#1564: Judgment] to up to 5 nearby enemy targets.
- **`[1226] Ruthless Rewind`** (Type 4 | Effects: `[[3, 2206270, 1]]`)
  - *Combat Logic*: During [Link#1567: Zeal Crusade], each Holy Sigil consumed grants [Link#1567: Zeal Crusade] 1 stack of charge. When the charge reaches 3 stacks, [Link#1567: Zeal Crusade] bursts outward, dealing DMG equal to 6% max HP.
- **`[1227] Divine Circle Resonance`** (Type 4 | Effects: `[[3, 2206280, 1]]`)
  - *Combat Logic*: For each enemy inside [Link#1560: Divine Circle], increases [Link#1560: Divine Circle] DMG by 25% and [Link#1560: Divine Circle] Healing by 5% (caps at 10 enemies).
- **`[1228] Judgment Pursuit`** (Type 4 | Effects: `[[3, 2206290, 1]]`)
  - *Combat Logic*: Every 50 times damage is taken, the next [Link#1564: Judgment] deals additional fixed damage equal to 200% Max HP. Can trigger at most once every 20s. Every 2% of Mastery reduces the required times of damage taken by 1. Every 1% of Haste reduces the trigger interval by 1% (up to 50%).
- **`[1229] Divine Circle Blessing`** (Type 4 | Effects: `[[3, 2206300, 1]]`)
  - *Combat Logic*: While within the [Link#1560: Divine Circle], your Healing Received +10%.
- **`[1230] Lightforged Balance`** (Type 4 | Effects: `[[3, 2206310, 1]]`)
  - *Combat Logic*: When your HP percentage is higher than your target's, DMG taken from that target -5%. | When your HP percentage is lower than your target's, [Link#1564: Judgment] deals 50% more DMG.
- **`[1231] Lightforged Fortitude`** (Type 4 | Effects: `[[3, 2206320, 1]]`)
  - *Combat Logic*: Throughout the duration of [Link#1172: Radiant Shield], [Link#1170: Block] chance +10%.
- **`[1232] Energy Guard`** (Type 4 | Effects: `[[3, 2206330, 1]]`)
  - *Combat Logic*: After casting an Ultimate, all allies' Max HP is increased by 10% for 10s (this effect does not stack).
- **`[1233] Life Enhancement`** (Type 4 | Effects: `[[3, 2206340, 1]]`)
  - *Combat Logic*: When Strength reaches 500 points, Max HP +12%.
- **`[1234] Condemn Time Limit`** (Type 4 | Effects: `[[3, 2206350, 1]]`)
  - *Combat Logic*: When [Link#1598: Condemn] deals damage, it immediately cools down 1 Holy Sigil (prioritizing the Holy Sigil with the longest remaining CD).
- **`[1235] Sword Dance`** (Type 4 | Effects: `[[3, 2206360, 1]]`)
  - *Combat Logic*: When a Expertise Skill critically heals, gain a 15% healing bonus.
- **`[1236] Shield Impact`** (Type 4 | Effects: `[[3, 2206370, 1]]`)
  - *Combat Logic*: Hold [Link#1561: Valor Bash] to charge, then dash forward a short distance.
- **`[1237] Reckon Shield`** (Type 4 | Effects: `[[3, 2206380, 1]]`)
  - *Combat Logic*: Each time [Link#1600: Inferno Reckon] or [Link#1563: Reckoning] deals Crit DMG to 1 enemy target, [Link#1170: Block] chance +5%, lasting for 10s, stacking up to 5 times.
- **`[1238] Holy Light Time Limit`** (Type 4 | Effects: `[[3, 2206390, 1]]`)
  - *Combat Logic*: During [Link#1565: Aegis Ward], when an Expertise Skill deals Crit DMG, there's a 50% fixed chance to instantly reset 1 Holy Sigil CD (prioritizing Holy Sigil with the longest remaining CD). This effect triggers only once when multiple targets are hit.
- **`[1239] Holy Summon`** (Type 4 | Effects: `[[3, 2206400, 1]]`)
  - *Combat Logic*: When [Link#1562: Shield Toss] or [Link#1564: Judgment] deals DMG, 10% chance to trigger [Link#1177: Divine Strike]. If Crit DMG is dealt, the chance increases to 50%.
- **`[1240] Light Chain`** (Type 4 | Effects: `[[3, 2206410, 1]]`)
  - *Combat Logic*: While [Link#1565: Aegis Ward] is active, the chance of [Link#1177: Divine Strike] is doubled. | Every 3 times [Link#1177: Divine Strike] is triggered, the duration of [Link#1565: Aegis Ward] is extended by 1 second.
- **`[1241] Reckon Blaze`** (Type 4 | Effects: `[[3, 2206420, 1]]`)
  - *Combat Logic*: When [Link#1561: Valor Bash] deals Crit DMG, gain Blazing. | Casting [Link#1565: Aegis Ward] guarantees Blazing. | Scorching Heat: For the next 10s, [Link#1563: Reckoning] evolves into [Link#1600: Inferno Reckon].
- **`[1242] Holy Heal`** (Type 4 | Effects: `[[3, 2206430, 1]]`)
  - *Combat Logic*: While having [Link#1172: Radiant Shield], gains 12% healing bonus.
- **`[1243] Light Protection`** (Type 4 | Effects: `[[3, 2206440, 1]]`)
  - *Combat Logic*: While having [Link#1172: Radiant Shield], gain 5% Light bonus.
- **`[1244] Ultimate Guard`** (Type 4 | Effects: `[[3, 2206450, 1]]`)
  - *Combat Logic*: For 10s after casting [Link#1562: Shield Toss], increases [Link#1170: Block Chance] by 15%.
- **`[1245] Shield Guard`** (Type 4 | Effects: `[[3, 2206460, 1]]`)
  - *Combat Logic*: [Link#1561: Valor Bash] heals for 120% ATK when it deals DMG, and increases DMG dealt by 8% for 8s.
- **`[1246] Radiant Heal`** (Type 4 | Effects: `[[3, 2206470, 1]]`)
  - *Combat Logic*: Increases [Link#1564: Judgment] Healing by 25%.
- **`[1247] Ultimate Strike`** (Type 4 | Effects: `[[3, 2206480, 1]]`)
  - *Combat Logic*: When [Link#1177: Divine Strike] deals DMG, increases Strength by 2% for 10s, stacking up to 5 times.
- **`[1248] Magic Guard`** (Type 4 | Effects: `[[3, 2206490, 1]]`)
  - *Combat Logic*: While [Link#1565: Aegis Ward] is active, each 1% Mastery grants 0.5% MATK Reduction, up to 30%.
- **`[1249] Ultimate Conquest`** (Type 4 | Effects: `[[3, 2206500, 1]]`)
  - *Combat Logic*: Increases [Link#1567: Zeal Crusade] DMG by 50%.
- **`[1251] Adversity Enhancement`** (Type 4 | Effects: `[[3, 2206520, 1]]`)
  - *Combat Logic*: Special Attack and damaging Expertise are enhanced based on missing HP. For every 1% HP lost, increases their DMG by 1%.
- **`[1252] Wide Raid`** (Type 4 | Effects: `[[3, 2206530, 1]]`)
  - *Combat Logic*: Increases [Link#1567: Zeal Crusade] range by 100%. While | [Link#1567: Zeal Crusade] is active, the effect of Bold Fearless is doubled.
- **`[1253] Bold Fearless`** (Type 4 | Effects: `[[3, 2206540, 1]]`)
  - *Combat Logic*: When [Link#1559: Sacred Blade] or [Link#1564: Judgment] deals DMG, there is a fixed 25% chance to cause [Link#1566: Vanguard Strike] to evolve into [Link#1176: Vanguard Hunt]. | [Link#1176: Vanguard Hunt]: Deals Attack DMG equal to 240% ATK to the target, restores 2% of your max HP, and gains Bold Fearless. | Bold Fearless: Increases Haste by 3% for 10s, stacking up to 10 times.
- **`[1254] Radiant Core`** (Type 4 | Effects: `[[3, 2206550, 1]]`)
  - *Combat Logic*: [Link#1176: Vanguard Hunt] can grant [Link#1198: Radiant Core]. | Gaining [Link#1198: Radiant Core] again reduces its burst time by 2s.
- **`[1255] Conquest Pursuit`** (Type 4 | Effects: `[[3, 2206560, 1]]`)
  - *Combat Logic*: While [Link#1567: Zeal Crusade] is active, [Link#1566: Vanguard Strike] evolves into [Link#1176: Vanguard Hunt].
- **`[1256] Decisive Blade`** (Type 4 | Effects: `[[3, 2206570, 1]]`)
  - *Combat Logic*: After [Link#1198: Radiant Core] explosion, [Link#1559: Sacred Blade] DMG +100% for 20s. Holds up to 3 charges, casting [Link#1559: Sacred Blade] consumes one charge.
- **`[1257] Zeal Haste`** (Type 4 | Effects: `[[3, 2206580, 1]]`)
  - *Combat Logic*: For every 15 points of Photon Energy consumed, the remaining CD of [Link#1567: Zeal Crusade] -1 second.
- **`[1258] Holy Sigil Enhancement`** (Type 4 | Effects: `[[3, 2206590, 1]]`)
  - *Combat Logic*: When [Link#1564: Judgment] deals DMG, the target takes double DMG from [Link#1199: Holy Mark] for the next 5s.
- **`[1259] Divine Guard`** (Type 4 | Effects: `[[3, 2206600, 1]]`)
  - *Combat Logic*: When in the [Link#1560: Divine Circle], reduces all DMG taken by 10%. | For each enemy within 10m, ATK Reduction increases by 1.5% (up to 9%), and MATK Reduction increases by 0.75% (up to 4.5%).
- **`[1260] Judgment Improvement`** (Type 4 | Effects: `[[3, 2206610, 1]]`)
  - *Combat Logic*: For each 1 stack of [Link#1175: Lightforged Barrier] you possess, [Link#1564: Judgment] gains 2% healing bonus. When [Link#1175: Lightforged Barrier]≥5 stacks, DMG Reduction +8%.
- **`[1261] Sigil Pursuit`** (Type 4 | Effects: `[[3, 2206620, 1]]`)
  - *Combat Logic*: DMG dealt by [Link#1176: Vanguard Hunt] and [Link#1559: Sacred Blade] to targets with [Link#1199: Holy Mark] increases by 20%.
- **`[1262] Overflow Healwall`** (Type 4 | Effects: `[[3, 2206630, 1]]`)
  - *Combat Logic*: When your accumulated overhealing reaches 10% of your Max HP, gains 1 stack of [Link#1175: Lightforged Barrier].
- **`[1263] Light Healing`** (Type 4 | Effects: `[[3, 2206640, 1]]`)
  - *Combat Logic*: While having [Link#1172: Radiant Shield], gains 12% healing bonus.
- **`[1264] Light Protection`** (Type 4 | Effects: `[[3, 2206650, 1]]`)
  - *Combat Logic*: While having [Link#1172: Radiant shield], gain 5% Light bonus.
- **`[1265] Resolved to Return`** (Type 4 | Effects: `[[3, 2206660, 1]]`)
  - *Combat Logic*: Each time 1 stack of [Link#1175: Lightforged Barrier] is consumed or deducted, reduces the remaining CD of [Link#1568: Radiance] by 1 second.
- **`[1266] Halo`** (Type 4 | Effects: `[[3, 2206670, 1]]`)
  - *Combat Logic*: [Link#1560: Divine Circle] now has a halo effect, [Link#3005: stunning] enemy targets for 3s the first time it deals DMG.
- **`[1267] Judgment Pursuit`** (Type 4 | Effects: `[[3, 2206680, 1]]`)
  - *Combat Logic*: Every 50 times damage is taken, the next [Link#1564: Judgment] deals additional fixed damage equal to 5000% of Armor. Can trigger at most once every 20s. Every 2% Mastery reduces the required times of damage taken by 1. Every 1% Crit reduces the trigger interval by 1% (up to 50%).

---
### ผัง Talent ของอาชีพ [13] Beat Performer (Stages: `[{'id': 118, 'stage': 0, 'bdType': 0, 'rootId': 70024, 'recommendTalent': [70024, 10518, 1300006, 6554, 1331001, 70023, 1303006, 6555, 1334001, 2403, 1307006, 10520, 1301006, 70021, 1333001, 6556, 1304006, 10517, 2398, 1305006, 10519, 6553, 1302006, 6735, 1332001, 6552, 2400, 1306006, 2399, 70022], 'factor': 3, 'recommendModEffectId': [1112, 1205, 1206, 1408, 1410, 2204, 2205, 2406], 'mainAttrShow': [11020, 11120, 11130]}, {'id': 119, 'stage': 1, 'bdType': 0, 'rootId': 1308006, 'recommendTalent': [1308006, 5404, 6557, 2401, 2405, 1309006, 8669, 6558, 1344001, 8671, 1313006, 5406, 1312006, 6559, 1326012, 1337001, 1315006, 6560, 1328012, 2402, 1330011, 6564, 1316006, 6737, 1329011, 6739, 1314006, 6736, 1341001, 8670, 1349001, 8672, 1350001, 5405, 1348001, 1336001, 1339001, 6561, 1311006, 1342001], 'factor': 3, 'recommendModEffectId': [1112, 1205, 1206, 1408, 1410, 2204, 2205, 2406], 'mainAttrShow': [11020, 11120, 11130]}, {'id': 120, 'stage': 1, 'bdType': 1, 'rootId': 1317006, 'recommendTalent': [1317006, 5408, 6567, 2406, 40069, 1325006, 7354, 6568, 2409, 37135, 1323006, 6570, 1326011, 40070, 1330012, 5410, 1353001, 6569, 1328011, 6742, 1361001, 2407, 1321006, 6573, 1324006, 1329012, 6572, 1320006, 6574, 1360001, 33081, 1318006, 1354001, 1352001, 1355001, 1364001, 1358001, 1363001, 6740, 1362001], 'factor': 2, 'recommendModEffectId': [1205, 1206, 1407, 1409, 2204, 2205, 2406], 'mainAttrShow': [11020, 11110, 11120]}]`)
- **`[1300] Passion Surge`** (Type 4 | Effects: `[[3, 2207010, 1]]`)
  - *Combat Logic*: When [Link#1133: Melody] is active, there is a 15% fixed chance per second to gain Passion Surge. | | Passion Surge: Special Attack costs zero Performance Passion for 10s. Removed after Special Attack is cast.
- **`[1301] String Expansion`** (Type 4 | Effects: `[[3, 2207020, 1]]`)
  - *Combat Logic*: Performance Passion max limit +1.
- **`[1302] Heat Surge`** (Type 4 | Effects: `[[3, 2207030, 1]]`)
  - *Combat Logic*: When [Link#1133: Melody] is activated, the trigger chance for Passion Surge +an extra 3% every 1 second (up to 30%). | | Passion Surge: Special Attack costs zero Performance Passion for 10s. Removed after Special Attack is cast.
- **`[1303] Intellect Conversion`** (Type 4 | Effects: `[[4, 3, 11342, 1000]]`)
  - *Combat Logic*: Every 10 points of Intellect provides 1 point of MATK.
- **`[1304] Arcane Ascension`** (Type 4 | Effects: `[[3, 2207050, 1]]`)
  - *Combat Logic*: Special Attack costs 1 less Performance Passion.
- **`[1305] Melody: Heat Core`** (Type 4 | Effects: `[[3, 2207060, 1]]`)
  - *Combat Logic*: [Link#1133: Melody] heals ally targets below 50% HP with 100% bonus effect.
- **`[1306] Flame Pursuit`** (Type 4 | Effects: `[[3, 2207070, 1]]`)
  - *Combat Logic*: After using 3 Special Attacks, the next Basic Attack hit triggers [Link#1190: Flame Pillar Blast].
- **`[1307] Flame Pursuit II`** (Type 4 | Effects: `[[3, 2207080, 1]]`)
  - *Combat Logic*: [Link#1190: Flame Pillar Blast] becomes a two-hit combo.
- **`[1308] Dissonance Spec`** (★ KEYSTONE SPEC | Effects: `[[3, 2207090, 1]]`)
  - *Combat Logic*: While in [Link#1603: Rhapsody of Flame], increases all Luck Chance acquired by any means by 50% and increases DMG Reduction by 25%. | | Healing of Stillness: If you deal no DMG to enemies for 5s, each hit of your Basic Attack will heal up to 10 allies (party members prioritized), with the full 4-hit combo restoring 15.75% of their max HP in total. After casting an Ultimate, Basic Attacks immediately start healing, and [Link#1615: Fierce Strike] can trigger the 4th hit healing effect, but this is disabled upon dealing DMG to enemies. | | Maintaining Heroic Melody and Rhapsody of Flame is crucial. Heroic Melody enhances healing while consecutive Fierce Strikes accelerate Harmonic Anthem casting frequency.
- **`[1309] Lucky Soundwave`** (Type 4 | Effects: `[[3, 2207100, 1]]`)
  - *Combat Logic*: Gains 1 Soundwave Energy whenever Expertise Skills or [Link#1604: Amplified Beat] trigger a Lucky Strike.
- **`[1310] Trio Rhapsody`** (Type 4 | Effects: `[[3, 2207110, 1]]`)
  - *Combat Logic*: [Link#1603: Rhapsody of Flame] always appears in its most powerful form. | While in [Link#1603: Rhapsody of Flame], ATK increases by Haste % x 0.6.
- **`[1311] Severed Chapter`** (Type 4 | Effects: `[[3, 2207120, 1]]`)
  - *Combat Logic*: Increases Resilience Break Efficiency of self and Allies within 30 meters by 10%. This effect cannot stack. | After activating [Link#1614: Heroic Melody], you and Allies within 30 meters have an resilience break efficiency +30% and deal 15% more DMG to Resilience Broken targets. This effect cannot stack.
- **`[1312] Sound Blaze`** (Type 4 | Effects: `[[3, 2207130, 1]]`)
  - *Combat Logic*: Gain 1 Soundwave Energy each time you deal DMG equal to 10 times ATK. | Soundwave Energy stores up to 50. | Skills consuming Performance Passion trigger [Link#1191: Scorching Impact] when dealing DMG, consuming all Soundwave Energy. Each 1 Soundwave Energy increases [Link#1191: Scorching Impact] DMG by 16%.
- **`[1313] Healing Note`** (Type 4 | Effects: `[[3, 2207140, 1]]`)
  - *Combat Logic*: Basic Attack deals an extra instance of DMG. | For every 5 Soundwave Energy obtained, creates a [Link#1192: Note] for the ally with the lowest HP.
- **`[1314] Blazing Heal`** (Type 4 | Effects: `[[3, 2207150, 1]]`)
  - *Combat Logic*: Stores excess Healing (up to 500% of Max HP). After activating [Link#1614: Heroic Melody], consumes stored Healing to recover allies' HP every 1 second, up to 15% of Max HP per second.
- **`[1315] Concerto`** (Type 4 | Effects: `[[3, 2207160, 1]]`)
  - *Combat Logic*: During [Link#1603: Rhapsody of Flame], [Link#1604: Amplified Beat] gains 1 additional attack. | [Link#1604: Amplified Beat]'s DMG -20%.
- **`[1316] Restart`** (Type 4 | Effects: `[[3, 2207170, 1]]`)
  - *Combat Logic*: When [Link#1605: Harmonic Anthem] or [Link#1615: Fierce Strike] triggers a Lucky Strike, limited to a single activation when striking multiple targets, immediately resets [Link#1603: Rhapsody of Flame]'s CD and allows [Link#1603: Rhapsody of Flame] not to consume Performance Passion for 10s, this effect is nullified upon casting [Link#1603: Rhapsody of Flame].
- **`[1317] Concerto Spec`** (★ KEYSTONE SPEC | Effects: `[[6, 2306, 2307], [3, 2207180, 1], [6, 2321, 2301]]`)
  - *Combat Logic*: Replaces Special Attack with [Link#1609: Healing Beat]. While | [Link#1606: Healing Melody] is active, reduces the remaining CD of [Link#1607: Fivefold Crescendo] and [Link#1608: Passion Burst] by 1 second per second. | | Precisely placing the speaker ensures it echoes your Expertise whenever they are cast.
- **`[1318] Brilliant Charge`** (Type 4 | Effects: `[[3, 2207190, 1]]`)
  - *Combat Logic*: When [Link#1609: Healing Beat] or [Link#1608: Passion Burst] applies Crit Healing or deals Crit DMG (triggers only once when hitting multiple targets), gains 1 Performance Passion.
- **`[1319] Double Recovery Note`** (Type 4 | Effects: `[[3, 2207200, 1]]`)
  - *Combat Logic*: [Link#1609: Healing Beat] provides an additional equal Healing to targets under the influence of [Link#1606: Healing Melody].
- **`[1320] Crit Healing`** (Type 4 | Effects: `[[3, 2207210, 1]]`)
  - *Combat Logic*: Increases Crit Healing by 25%.
- **`[1321] Fiery Beat`** (Type 4 | Effects: `[[3, 2207220, 1]]`)
  - *Combat Logic*: [Link#1609: Healing Beat] Crit Rate +10%. | [Link#1609: Healing Beat ]Healing +10%.
- **`[1322] Critical Encore`** (Type 4 | Effects: `[[3, 2207230, 1]]`)
  - *Combat Logic*: Every 1% Crit Rate grants 1% trigger chance for [Link#1193: Encore Strings].
- **`[1323] Passion Fury`** (Type 4 | Effects: `[[3, 2207240, 1]]`)
  - *Combat Logic*: For each 10 Performance Passion consumed, enhances [Link#1608: Passion Burst] to [Link#1617: Passion Fury] for 10s.
- **`[1324] Stat Resonance`** (Type 4 | Effects: `[[3, 2207250, 1]]`)
  - *Combat Logic*: While [Link#1606: Healing Melody] is active, grants allies appropriate buffs (Strength, Intellect, Agility) equal to 8% of Intellect. (Buffs from different Beat Performers cannot stack. Only one with the highest value applies.)
- **`[1325] Stat Resonance Crit`** (Type 4 | Effects: `[[3, 2207260, 1]]`)
  - *Combat Logic*: For 10s after using [Link#1608: Passion Burst] or its enhanced form ([Link#1617: Passion Fury), doubles the buffs that Healing Melody] provides to allies. While channeling [Link#1617: Passion Fury], DMG Reduction +10%. The duration of the doubled stat buffs is refreshed and extended by 0.4s for every 0.2s channeled.
- **`[1326] Fire Day`** (Type 4 | Effects: `[[3, 2207270, 1]]`)
  - *Combat Logic*: Increases Fire Bonus by 8% when attacking Elite or higher targets.
- **`[1327] Critical Acclaim`** (Type 4 | Effects: `[[3, 2207280, 1]]`)
  - *Combat Logic*: During [Link#1610: Center Stage], triggering [Link#1193: Encore Strings] has a 30% fixed chance to grant Passion Surge. | | Passion Surge: Special Attack costs zero Performance Passion for 10s. Removed after Special Attack is cast.
- **`[1328] Rhythm Spirit`** (Type 4 | Effects: `[[3, 2207290, 1]]`)
  - *Combat Logic*: Defeating an enemy has a fixed 50% chance to grant you 1 Performance Passion.
- **`[1329] Infinite Rhapsody`** (Type 4 | Effects: `[[6, 2314, 2335]]`)
  - *Combat Logic*: Replace Ultimate [Link#1579: Rock the Stage] with [Link#1612: Infinite Rhapsody].
- **`[1330] Concert Circuit`** (Type 4 | Effects: `[[6, 2314, 2336]]`)
  - *Combat Logic*: Replace Ultimate [Link#1579: Rock the Stage] with [Link#1613: Concert Circuit].
- **`[1331] Encore Chain`** (Type 4 | Effects: `[[3, 2207320, 1]]`)
  - *Combat Logic*: When [Link#1193: Encore Strings] triggers, it activates a second time on the same target.
- **`[1332] Heat Boost`** (Type 4 | Effects: `[[3, 2207330, 1]]`)
  - *Combat Logic*: When Intellect reaches 500, the Performance Energy cap +20%.
- **`[1333] Variation`** (Type 4 | Effects: `[[3, 2207340, 1]]`)
  - *Combat Logic*: Increases Max HP by 20% and activates Dissonance Spec with its original effect intact. | If Concerto Spec is activated, its effect is adjusted to replace Basic Attack with [Link#1618: Resonant Strings].
- **`[1334] Melody Chord`** (Type 4 | Effects: `[[3, 2207350, 1]]`)
  - *Combat Logic*: [Link#1133: Melody] Healing +20%. | Each 1% Haste increases the REG SPD of Performance Passion by 1%.
- **`[1335] Exaltation`** (Type 4 | Effects: `[[3, 2207360, 1]]`)
  - *Combat Logic*: Performance Energy REG SPD +10%.
- **`[1336] Indomitable Chord`** (Type 4 | Effects: `[[3, 2207370, 1]]`)
  - *Combat Logic*: While [Link#1614: Heroic Melody] is active, grants [Link#1102: Super Armor], increases DMG Reduction by 25%, and boosts Movement Speed by 10%. | [Link#1614: While Heroic Melody] is active, grants Tenacity Chord. Each stack of Tenacity Chord additionally increases Max HP by 0.5% (up to 2.5% Max HP) for 5s (duration cannot be refreshed once 5 stacks are reached).
- **`[1337] Swing Reflux`** (Type 4 | Effects: `[[3, 2207380, 1]]`)
  - *Combat Logic*: Hitting a target with [Link#1615: Fierce Strike] recovers 5 Performance Energy. Each additional target hit provides 1 extra Performance Energy, up to 10 total.
- **`[1338] Luck Multiplier`** (Type 4 | Effects: `[[3, 2207390, 1]]`)
  - *Combat Logic*: Every 1% Luck grants 0.5% Lucky Strike DMG Multiplier. | After activating [Link#1614: Heroic Melody], doubles its conversion efficiency.
- **`[1339] Resonant Counterpoint`** (Type 4 | Effects: `[[3, 2207400, 1]]`)
  - *Combat Logic*: When a [Link#1192: Note] forms, there's a 50% fixed chance to create an extra [Link#1192: Note] for a different target.
- **`[1340] Sonic Cure`** (Type 4 | Effects: `[[3, 2207410, 1]]`)
  - *Combat Logic*: When Expertise deal DMG (only triggers once when hitting multiple targets), additionally heal targets with [Link#1192: Note].
- **`[1341] Sonic Therapy`** (Type 4 | Effects: `[[3, 2207420, 1]]`)
  - *Combat Logic*: Converted healing from DMG +20% for targets affected by [Link#1192: Note].
- **`[1342] Flame's Rampage`** (Type 4 | Effects: `[[3, 2207430, 1]]`)
  - *Combat Logic*: When [Link#1614: Heroic Melody] is active, [Link#1603: Rhapsody of Flame] will erupt, dealing Magic DMG equal to 350% ATK every 3s to targets it touches (DMG interval affected by Haste). This DMG can trigger Lucky Strike. | While in [Link#1603: Rhapsody of Flame], each hit of [Link#1605: Harmonic Anthem] also heals 1 ally with the lowest HP for 30% of the DMG dealt (this value scales proportionally when hitting multiple targets).
- **`[1343] Flame Note`** (Type 4 | Effects: `[[3, 2207440, 1]]`)
  - *Combat Logic*: When you use an Expertise Skill, [Link#1603: Rhapsody of Flame] will erupt with Rhythm, dealing Magic DMG equal to 700% of ATK and granting [Link#1192: Note] to allies it touches.
- **`[1344] Finale Command`** (Type 4 | Effects: `[[3, 2207450, 1]]`)
  - *Combat Logic*: Within 10s of casting [Link#1616: Encore], each use of [Link#1603: Rhapsody of Flame] caused targets affected by [Link#1616: Encore] to trigger [Link#1193: Encore Strings].
- **`[1345] Encore Persistence`** (Type 4 | Effects: `[[3, 2207460, 1]]`)
  - *Combat Logic*: Permanently benefits from [Link#1616: Encore] effect. | For every 5 triggers of [Link#1193: Encore Strings], the next [Link#1604: Amplified Beat] and [Link#1605: Harmonic Anthem] deal 50% more DMG.
- **`[1346] Encore Luck Boost`** (Type 4 | Effects: `[[3, 2207470, 1]]`)
  - *Combat Logic*: Every 1% Luck Chance grants 1% trigger chance for [Link#1193: Encore Strings].
- **`[1347] Encore Sharp Strike`** (Type 4 | Effects: `[[3, 2207480, 1]]`)
  - *Combat Logic*: Triggering [Link#1193: Encore Strings] to deal DMG or healing grants 2 Performance Energy. If the [Link#1193: Encore Strings] triggers Lucky Strike, grants 3 additional Performance Energy.
- **`[1348] Absolute Center Stage`** (Type 4 | Effects: `[[3, 2207490, 1]]`)
  - *Combat Logic*: After you use [Link#1610: Center Stage], the number of enhanced skills increases from 1 to 2.
- **`[1349] Center Stage: Mad Tune`** (Type 4 | Effects: `[[3, 2207500, 1]]`)
  - *Combat Logic*: Each Performance Passion consumed reduces the CD of [Link#1610: Center Stage] by 1 second.
- **`[1350] Tower Multiwave`** (Type 4 | Effects: `[[3, 2207510, 1]]`)
  - *Combat Logic*: Casting [Link#1610: Center Stage] immediately extends [Link#1614: Heroic Melody] by 5s.
- **`[1351] Soundwave Overclock`** (Type 4 | Effects: `[[3, 2207520, 1]]`)
  - *Combat Logic*: Upon casting [Link#1610: Center Stage], grants 15 Soundwave Energy, and doubles all the Soundwave Energy gained in the next 10s.
- **`[1352] Crit Charge Rhythm`** (Type 4 | Effects: `[[3, 2207530, 1]]`)
  - *Combat Logic*: [Link#1607: Fivefold Crescendo] deals Crit DMG or healing (only triggers once for multiple targets), grants 2 Performance Energy. When | [Link#1606: Healing Melody] lands a Crit Hit, grants 1 Performance Energy(only triggers once for multiple targets).
- **`[1353] Tower Flame Blast`** (Type 4 | Effects: `[[3, 2207540, 1]]`)
  - *Combat Logic*: The speaker releases a [Link#1197: Flame Shock] every 5s.
- **`[1354] Multi-Target Heat Amp`** (Type 4 | Effects: `[[3, 2207550, 1]]`)
  - *Combat Logic*: [Link#1608: Passion Burst] and its enhanced version ([Link#1617: Passion Fury]) deal 5% more DMG per additional target hit, up to 25%.
- **`[1355] Heated Tower Flame Blast`** (Type 4 | Effects: `[[3, 2207560, 1]]`)
  - *Combat Logic*: When [Link#1608: Passion Burst] and its enhanced version ([Link#1617: Passion Fury]) hit the speaker, it immediately releases a [Link#1197: Flame Shock].
- **`[1356] Sonic Verdict`** (Type 4 | Effects: `[[3, 2207570, 1]]`)
  - *Combat Logic*: While [Link#1606: Healing Melody] is active, [Link#1607: Fivefold Crescendo] also deals DMG, with its total DMG scaling equal to its healing multiplier. | [Link#1606: While Healing Melody] is active, reduces the caster's DMG taken by (10% + Haste % x 0.4) (max -30%).
- **`[1357] Harmonic Amplifier`** (Type 4 | Effects: `[[3, 2207580, 1]]`)
  - *Combat Logic*: Increases the DMG dealt and healing of skills triggered by the speaker by 30%.
- **`[1358] Crescendo Healing Chord`** (Type 4 | Effects: `[[3, 2207590, 1]]`)
  - *Combat Logic*: [Link#1606: Healing Melody] gains 7% Healing Strength for every second it remains active, stacking up to 5 times. | [Link#1606: Healing Melody] additionally restores a fixed amount equal to 0.3% of the target's Max HP when healing.
- **`[1359] Crit Scale`** (Type 4 | Effects: `[[3, 2207600, 1]]`)
  - *Combat Logic*: Increases Crit Rate by 10% against enemies above 50% HP. | Increases Crit Rate by 10% against enemies below 50% HP.
- **`[1360] Symphonic Aria`** (Type 4 | Effects: `[[3, 2207610, 1]]`)
  - *Combat Logic*: Enhances Healing by 10% for targets affected by [Link#1606: Healing Melody].
- **`[1361] Vitality Unleash`** (Type 4 | Effects: `[[3, 2207620, 1]]`)
  - *Combat Logic*: 7% of DMG dealt and 15% of healing done is stored as Rhythm. Within 10s after you cast [Link#1610: Center Stage], the use of Expertise and [Link#1609: Healing Beat] consumes Rhythm to grant up to 40% bonus healing. The cap for Rhythm storage is 30 times MATK.
- **`[1362] Encore Chain`** (Type 4 | Effects: `[[3, 2207630, 1]]`)
  - *Combat Logic*: Within 10s after you cast [Link#1616: Encore], each use of Expertise Skill triggers [Link#1193: Encore Strings] for targets affected by [Link#1616: Encore].
- **`[1363] Tower Resonance`** (Type 4 | Effects: `[[3, 2207640, 1]]`)
  - *Combat Logic*: Permanently benefits from [Link#1616: Encore] effect. | Each trigger of [Link#1193: Encore Strings] reduces the remaining CD of Expertise by 1 second.
- **`[1364] Stat Resonance Overload`** (Type 4 | Effects: `[[3, 2207650, 1]]`)
  - *Combat Logic*: For 15s after actively casting [Link#1616: Encore], the stat bonuses provided by [Link#1606: Healing Melody] are +100%.
- **`[1365] Center Stage: Concerto`** (Type 4 | Effects: `[[3, 2207660, 1]]`)
  - *Combat Logic*: The charges of [Link#1610: Center Stage] increase by 1.
- **`[1366] Absolute Center Stage`** (Type 4 | Effects: `[[3, 2207490, 1]]`)
  - *Combat Logic*: After you use [Link#1610: Center Stage], the number of enhanced skills increases from 1 to 2.
- **`[1367] Spiral Flame`** (Type 4 | Effects: `[[3, 2207680, 1]]`)
  - *Combat Logic*: After casting [Link#1610: Center Stage], summon a wave of [Link#1173: Sonic Surge].

---
### ผัง Talent ของอาชีพ [14] Lucy (Stages: `[{'id': 130, 'stage': 0, 'bdType': 0, 'rootId': 0, 'recommendTalent': [], 'factor': 3, 'recommendModEffectId': [], 'mainAttrShow': []}, {'id': 131, 'stage': 1, 'bdType': 0, 'rootId': 0, 'recommendTalent': [], 'factor': 3, 'recommendModEffectId': [], 'mainAttrShow': []}, {'id': 132, 'stage': 1, 'bdType': 1, 'rootId': 0, 'recommendTalent': [], 'factor': 3, 'recommendModEffectId': [], 'mainAttrShow': []}]`)

---
### ผัง Talent ของอาชีพ [15] Natsu (Stages: `[{'id': 133, 'stage': 0, 'bdType': 0, 'rootId': 0, 'recommendTalent': [], 'factor': 3, 'recommendModEffectId': [], 'mainAttrShow': []}, {'id': 134, 'stage': 1, 'bdType': 0, 'rootId': 0, 'recommendTalent': [], 'factor': 3, 'recommendModEffectId': [], 'mainAttrShow': []}, {'id': 135, 'stage': 1, 'bdType': 1, 'rootId': 0, 'recommendTalent': [], 'factor': 3, 'recommendModEffectId': [], 'mainAttrShow': []}]`)

---

## หมวดที่ 3: Battle Imagines ทั้ง 73 ตัว (ทั้งผล Passive สวมใส่ และ Active กดใช้ T0→T5)

### Imagine `[3901] Inferno Ogre` — Active: *Arcane! Flame Roar* (Resonance Skill, Physical, Direct DMG, AoE, Direct Healing, Shield)
- **Raw Passive Effects**: `passiveEffects=[[11802, 800, 1040, 1280, 1520, 1760, 2000], [11044, 500, 650, 800, 950, 1100, 1250]]` | `bufPassiveEffects=[]`
- **Description**: Transforms into Boss: Inferno Ogre to unleash a forward fiery breath that deals Attack DMG and [Link#3000: interrupts] affected targets. Concurrently, applies Healing to you, and 100% excess healing is converted into a Shield lasting 20s. The transformed form reduces DMG taken by 50%.
  - **Total DMG (T0→T5)**: `1197% ATK/MATK +119 (Resilience Break: 77)` → `1376.2% ATK/MATK +119 (Resilience Break: 77)` → `1556.1% ATK/MATK +119 (Resilience Break: 77)` → `1735.3% ATK/MATK +119 (Resilience Break: 77)` → `1915.2% ATK/MATK +119 (Resilience Break: 77)` → `2094.4% ATK/MATK +119 (Resilience Break: 77)`
  - **Total Healing (T0→T5)**: `749% ATK/MATK +70` → `805.14% ATK/MATK +70` → `861.28% ATK/MATK +70` → `1029.84% ATK/MATK +70` → `1086.05% ATK/MATK +70` → `1142.19% ATK/MATK +70`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3902] Tempest Ogre` — Active: *Arcane! Thunderfall Grasp* (Resonance Skill, Magic, Direct DMG, AoE, Crowd Control)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210030, [3730, 500, 500], [4849, 500, 500], [5968, 500, 500], [7087, 1000, 800], [8206, 1000, 800], [9325, 2000, 1000]]]`
- **Description**: Summons Boss: Tempest Ogre and channels the power of thunder to generate a vortex, continuously pulling in enemies near the target and dealing AoE Magic DMG when the duration ends.
  - **Total DMG (T0→T5)**: `1050% ATK/MATK +105 (Resilience Break: 100)` → `1207.4% ATK/MATK +105 (Resilience Break: 100)` → `1365% ATK/MATK +105 (Resilience Break: 100)` → `1522.5% ATK/MATK +105 (Resilience Break: 100)` → `1680% ATK/MATK +105 (Resilience Break: 100)` → `1837.5% ATK/MATK +105 (Resilience Break: 100)`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3903] Brigand Leader` — Active: *Arcane! Blazing Axe* (Resonance Skill, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210050, [2910], [3783], [4656], [5529], [6402], [7275]]]`
- **Description**: Transforms into Boss: Brigand Leader and summons a blazing giant axe, increasing the party's ATK within range for a period and granting yourself additional ATK boost. | (This effect cannot stack and only one can be active at a time.)
  - **ATK bonus (T0→T5)**: `15%` → `18%` → `21%` → `24%` → `27%` → `30%`
  - **Ally ATK bonus (T0→T5)**: `5%` → `6%` → `7%` → `8%` → `9%` → `10%`
  - **Duration (T0→T5)**: `15s` → `15s` → `15s` → `15s` → `15s` → `15s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3904] Muku Warrior` — Active: *Stunt! Super Critical* (Resonance Skill, Physical, Direct DMG, Single Target, Crit)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210060, [5600], [7280], [8960], [10640], [12320], [14000]]]`
- **Description**: Summons Elite: Muku Warrior to leap forward and deliver a powerful strike, dealing AoE Attack DMG. This attack is guaranteed to Crit. | Upon the skill cast, your Crit and Crit DMG are increased for a period.
  - **Total DMG (T0→T5)**: `600% ATK/MATK +60 (Resilience Break: 100)` → `690% ATK/MATK +60 (Resilience Break: 100)` → `780% ATK/MATK +60 (Resilience Break: 100)` → `870% ATK/MATK +60 (Resilience Break: 100)` → `960% ATK/MATK +60 (Resilience Break: 100)` → `1050% ATK/MATK +60 (Resilience Break: 100)`
  - **Crit bonus (T0→T5)**: `4480` → `5376` → `6272` → `7168` → `8064` → `8960`
  - **Crit DMG bonus (T0→T5)**: `8%` → `9.6%` → `11.2%` → `12.8%` → `14.4%` → `16%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3905] Boarrier Tyrant` — Active: *Stunt! Boarrier Rush* (Resonance Skill, Physical, Direct DMG, Single Target, Increased Damage, Wound)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3200004, [600], [780], [960], [1140], [1320], [1500]]]`
- **Description**: Summons Elite: Boarrier Tyrant to charge forward with tusks for 3s. Deals Attack DMG and knocks enemies airborne during the charge. Boarrier tusks tear through flesh, inflicting 100% [Link#3004: Wound] on enemies hit for 15s. | Upon the skill cast, the DMG dealt and healing of your Special Attack are increased for a period.
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 200)` → `1725% ATK/MATK +150 (Resilience Break: 200)` → `1950% ATK/MATK +150 (Resilience Break: 200)` → `2175% ATK/MATK +150 (Resilience Break: 200)` → `2400% ATK/MATK +150 (Resilience Break: 200)` → `2625% ATK/MATK +150 (Resilience Break: 200)`
  - **Special Attack bonus (T0→T5)**: `16%` → `19.2%` → `22.4%` → `25.6%` → `28.8%` → `32%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3906] Frost Ogre` — Active: *Arcane! Frostquake* (Resonance Skill, Physical, Direct DMG, AoE, Stagger, Frozen)
- **Raw Passive Effects**: `passiveEffects=[[11832, 2000, 2600, 3200, 3800, 4400, 5000]]` | `bufPassiveEffects=[]`
- **Description**: Summons Boss: Frost Ogre to execute a spinning attack with an ice hammer, resulting in Attack DMG and [Link#1171: freezing] all targets on hit. | Upon the skill cast, your Resilience Break Bonus is increased for a period.
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 15000)` → `1724% ATK/MATK +150 (Resilience Break: 15000)` → `1950% ATK/MATK +150 (Resilience Break: 15000)` → `2175% ATK/MATK +150 (Resilience Break: 15000)` → `2400% ATK/MATK +150 (Resilience Break: 15000)` → `2625% ATK/MATK +150 (Resilience Break: 15000)`
  - **Resilience Break bonus (T0→T5)**: `45%` → `54%` → `63%` → `72%` → `81%` → `90%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3907] Inferno Goblin Mage` — Active: *Stunt! Falling Star* (Resonance Skill, Magic, Direct DMG, AoE, Main attribute)
- **Raw Passive Effects**: `passiveEffects=[[11024, 400, 520, 640, 760, 880, 1000]]` | `bufPassiveEffects=[]`
- **Description**: Transforms into Elite: Inferno Goblin Mage and summons meteors from the sky, dealing Magic DMG and [Link#3000: interrupting] the target's actions. | Upon the skill cast, your Intellect is increased for a period.
  - **Total DMG (T0→T5)**: `525% ATK/MATK +52 (Resilience Break: 100)` → `603.7% ATK/MATK +52 (Resilience Break: 100)` → `682.5% ATK/MATK +52 (Resilience Break: 100)` → `761.2% ATK/MATK +52 (Resilience Break: 100)` → `840% ATK/MATK +52 (Resilience Break: 100)` → `918.7% ATK/MATK +52 (Resilience Break: 100)`
  - **Intellect bonus (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3908] Muku King` — Active: *Arcane! Pulse Benediction* (Resonance Skill, Magic, HoT, AoE, Healing Boost)
- **Raw Passive Effects**: `passiveEffects=[[11792, 800, 1040, 1280, 1520, 1760, 2000]]` | `bufPassiveEffects=[[3210100, [3000, 3000], [3900, 3900], [4800, 4800], [5700, 5700], [6600, 6600], [7500, 7500]]]`
- **Description**: Summons Boss: Muku King to channel Forest Energy, healing up to 10 allies over time and dispelling [Link#3021: debuffs]. | Upon the skill cast, your healing received is increased for a period.
  - **Total Healing (T0→T5)**: `600% ATK/MATK + 60` → `690% ATK/MATK + 60` → `780% ATK/MATK + 60` → `870% ATK/MATK + 60` → `960% ATK/MATK + 60` → `1050% ATK/MATK + 60`
  - **Healing Received up (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Duration (T0→T5)**: `10s` → `10s` → `10s` → `10s` → `10s` → `10s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3910] ​Void Ogre` — Active: *Stunt! Chaotic Barrage* (Resonance Skill, Physical, Magic, Direct DMG, Direct Healing, DoT, Single Target)
- **Raw Passive Effects**: `passiveEffects=[[11324, 500, 650, 800, 950, 1100, 1250]]` | `bufPassiveEffects=[]`
- **Description**: Summons Elite: Void Ogre, roars in place, and fires 6 whirlwind-like Void Projectiles at the target, dealing Attack DMG. Inflicts Void Corruption Decay on the target for 10s, dealing Magic DMG per second, up to 5 stacks. 100% of the DMG dealt over time is converted into your HP.
  - **Total DMG (T0→T5)**: `402% ATK/MATK +36 (Resilience Break: 36)` → `462% ATK/MATK +36 (Resilience Break: 36)` → `522.6% ATK/MATK +36 (Resilience Break: 36)` → `582.6% ATK/MATK +36 (Resilience Break: 36)` → `643.2% ATK/MATK +36 (Resilience Break: 36)` → `703.2% ATK/MATK +36 (Resilience Break: 36)`
  - **Single Decay DMG per hit (T0→T5)**: `24% ATK/MATK +2 (Resilience Break: 2)` → `27.6% ATK/MATK +2 (Resilience Break: 2)` → `31.2% ATK/MATK +2 (Resilience Break: 2)` → `34.8% ATK/MATK +2 (Resilience Break: 2)` → `38.4% ATK/MATK +2 (Resilience Break: 2)` → `42% ATK/MATK +2 (Resilience Break: 2)`
  - **CD (T0→T5)**: `60s` → `60s` → `60s` → `60s` → `60s` → `60s`
### Imagine `[3911] Tatta` — Active: *Arcane! Heart of Flame* (Resonance Skill, Protect)
- **Raw Passive Effects**: `passiveEffects=[[11014, 600, 780, 960, 1140, 1320, 1500], [11024, 600, 780, 960, 1140, 1320, 1500], [11034, 600, 780, 960, 1140, 1320, 1500]]` | `bufPassiveEffects=[]`
- **Description**: Summons Tatta to grant Battle Will to the entire team, preventing all allies from being defeated and ensuring their HP does not fall below a certain threshold for a period of time. | Exhausted: Cannot be affected by the same type of effect within 60s (Exhausted effects are enhanced in party dungeons of Nightmare mode).
  - **Min. HP (T0→T5)**: `1%` → `2.8%` → `4.6%` → `6.4%` → `8.2%` → `10%`
  - **Duration (T0→T5)**: `3s` → `3.9s` → `4.8s` → `5.7s` → `6.6s` → `7.5s`
  - **CD (T0→T5)**: `150s` → `150s` → `150s` → `125s` → `125s` → `100s`
### Imagine `[3913] Shadow Captain` — Active: *Stunt! Electro Bomb* (Resonance Skill, Physical, Direct DMG, AoE, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3200005, [600], [780], [960], [1140], [1320], [1500]]]`
- **Description**: Transforms into Elite: Shadow Captain to launch an Electro Bomb at the designated target, dealing AoE Attack DMG and [Link#3000: interrupting] the target's actions. | Upon the skill cast, the DMG dealt and healing of your Expertise Skill are increased for a period.
  - **Total DMG (T0→T5)**: `750% ATK/MATK +75 (Resilience Break: 100)` → `806.25% ATK/MATK +75 (Resilience Break: 100)` → `862.5% ATK/MATK +75 (Resilience Break: 100)` → `1031.25% ATK/MATK +75 (Resilience Break: 100)` → `1087.5% ATK/MATK +75 (Resilience Break: 100)` → `1143.75% ATK/MATK +75 (Resilience Break: 100)`
  - **Expertise Skill Bonus (T0→T5)**: `16%` → `19.2%` → `22.4%` → `25.6%` → `28.8%` → `32%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3914] Goblin Guard` — Active: *Stunt! Blade Sweep* (Resonance Skill, Physical, Direct DMG, Single Target, Protect, Armor Reduce)
- **Raw Passive Effects**: `passiveEffects=[[11172, 2240, 2912, 3584, 4256, 4928, 5600]]` | `bufPassiveEffects=[]`
- **Description**: Summons Elite: Goblin Guard to perform multiple sword energy attacks forward, dealing Attack DMG. Sword energy hits will reduce the target's Armor. | (The effect cannot stack, and only one effect of the same type will be effective.) | Upon the skill cast, your Block DMG reduction is increased for a period.
  - **Total DMG (T0→T5)**: `600% ATK/MATK +60 (Resilience Break: 99)` → `690% ATK/MATK +60 (Resilience Break: 99)` → `780% ATK/MATK +60 (Resilience Break: 99)` → `870% ATK/MATK +60 (Resilience Break: 99)` → `960% ATK/MATK +60 (Resilience Break: 99)` → `1050% ATK/MATK +60 (Resilience Break: 99)`
  - **Block DMG Reduction Bonus (T0→T5)**: `7.5%` → `9%` → `10.5%` → `12%` → `13.5%` → `15%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **Armor Penetration (T0→T5)**: `650` → `780` → `910` → `1040` → `1170` → `1300`
  - **Duration (T0→T5)**: `10s` → `10s` → `10s` → `10s` → `10s` → `10s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3915] Goblin Warrior` — Active: *Stunt! Frenzied Shot* (Resonance Skill, Physical, Direct DMG, AoE, Luck)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3200009, [1120], [1456], [1792], [2128], [2464], [2800]]]`
- **Description**: Summons Elite: Goblin Warrior to shoot in a fan-shaped area in front, dealing Attack DMG. | Upon the skill cast, your Luck and Lucky Strike Chance are increased for a period.
  - **Total DMG (T0→T5)**: `900% ATK/MATK +88 (Resilience Break: 100)` → `1034.8% ATK/MATK +88 (Resilience Break: 100)` → `1170% ATK/MATK +88 (Resilience Break: 100)` → `1304.8% ATK/MATK +88 (Resilience Break: 100)` → `1440% ATK/MATK +88 (Resilience Break: 100)` → `1574.8% ATK/MATK +88 (Resilience Break: 100)`
  - **Luck Bonus (T0→T5)**: `4480` → `5376` → `6272` → `7168` → `8064` → `8960`
  - **Lucky Strike Multiplier (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3917] Shadow Commander` — Active: *Stunt! Heavy Slash* (Resonance Skill, Physical, Direct DMG, Single Target, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210110, [10], [10], [10], [15], [15], [20]]]`
- **Description**: Summons Elite: Shadow Commander to execute a forward flurry of slashes, inflicting Attack DMG and [Link#3000: interrupting] the target's actions. All Heavy Slash charges are consumed in the process to significantly amplify the DMG inflicted.
  - **Strike I (T0→T5)**: `90% ATK/MATK +9 (Resilience Break: 15)` → `103.5% ATK/MATK +9 (Resilience Break: 15)` → `117% ATK/MATK +9 (Resilience Break: 15)` → `130.5% ATK/MATK +9 (Resilience Break: 15)` → `144% ATK/MATK +9 (Resilience Break: 15)` → `157.5% ATK/MATK +9 (Resilience Break: 15)`
  - **Strike II (T0→T5)**: `150% ATK/MATK +15 (Resilience Break: 25)` → `172.5% ATK/MATK +15 (Resilience Break: 25)` → `195% ATK/MATK +15 (Resilience Break: 25)` → `217.5% ATK/MATK +15 (Resilience Break: 25)` → `240% ATK/MATK +15 (Resilience Break: 25)` → `262.5% ATK/MATK +15 (Resilience Break: 25)`
  - **Strike III (T0→T5)**: `360% ATK/MATK +36 (Resilience Break: 60)` → `414% ATK/MATK +36 (Resilience Break: 60)` → `468% ATK/MATK +36 (Resilience Break: 60)` → `522% ATK/MATK +36 (Resilience Break: 60)` → `576% ATK/MATK +36 (Resilience Break: 60)` → `630% ATK/MATK +36 (Resilience Break: 60)`
  - **Damage per stack (T0→T5)**: `15%` → `15%` → `15%` → `15%` → `15%` → `15%`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3920] Airona` — Active: *Arcane! Blessing of Life* (Resonance Skill)
- **Raw Passive Effects**: `passiveEffects=[[11014, 600, 780, 960, 1140, 1320, 1500], [11024, 600, 780, 960, 1140, 1320, 1500], [11034, 600, 780, 960, 1140, 1320, 1500]]` | `bufPassiveEffects=[]`
- **Description**: Summons Airona. After a brief cast, revives up to 4 nearby teammates. Weakness: Cannot be affected by the same type of effect within 60s (Weakness effects are enhanced in party dungeons of Nightmare mode).
  - **Revived HP (T0→T5)**: `10%` → `20%` → `30%` → `30%` → `40%` → `50%`
  - **CD (T0→T5)**: `150s` → `150s` → `150s` → `125s` → `125s` → `100s`
### Imagine `[3921] Tina` — Active: *Arcane! Time Decree* (Resonance Skill, Acceleration)
- **Raw Passive Effects**: `passiveEffects=[[11014, 600, 780, 960, 1140, 1320, 1500], [11024, 600, 780, 960, 1140, 1320, 1500], [11034, 600, 780, 960, 1140, 1320, 1500]]` | `bufPassiveEffects=[]`
- **Description**: Summons Tina to channel the power of time, reducing the Skill CDs of yourself and up to 10 surrounding allies for a certain period. | (Cannot be affected by the same type of effect within 60s.)
  - **CD decrease (T0→T5)**: `50%` → `60%` → `70%` → `80%` → `90%` → `100%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `150s` → `150s` → `150s` → `125s` → `125s` → `100s`
### Imagine `[3922] Olvera` — Active: *Arcane! Flash Execution* (Resonance Skill, Physical, Magic, Direct DMG, AoE, Crowd Control)
- **Raw Passive Effects**: `passiveEffects=[[11014, 600, 780, 960, 1140, 1320, 1500], [11024, 600, 780, 960, 1140, 1320, 1500], [11034, 600, 780, 960, 1140, 1320, 1500]]` | `bufPassiveEffects=[]`
- **Description**: Summons Olvera to shuttle back and forth in a forward direction, drawing in enemies encountered along the path, dealing Attack DMG, and [Link#3000: interrupting] their actions. When dealing DMG, there is a chance to inflict Seed of Lightning on the targets for 10s. Dealing DMG to targets with Seed of Lightning will cause an explosion (CD: 2s), dealing Magic DMG. Any target with Seed of Lightning defeated will reduce CD time by 20s.
  - **Total DMG (T0→T5)**: `612% ATK/MATK +58 (Resilience Break: 51)` → `703.5% ATK/MATK +58 (Resilience Break: 51)` → `795.6% ATK/MATK +58 (Resilience Break: 51)` → `887.4% ATK/MATK +58 (Resilience Break: 51)` → `979.2% ATK/MATK +58 (Resilience Break: 51)` → `1071% ATK/MATK +58 (Resilience Break: 51)`
  - **Explosion Damage (T0→T5)**: `105% ATK/MATK +10 (Resilience Break: 8)` → `120.7% ATK/MATK +10 (Resilience Break: 8)` → `136.5% ATK/MATK +10 (Resilience Break: 8)` → `152.2% ATK/MATK +10 (Resilience Break: 8)` → `168% ATK/MATK +10 (Resilience Break: 8)` → `183.7% ATK/MATK +10 (Resilience Break: 8)`
  - **Probability (T0→T5)**: `40%` → `52%` → `64%` → `76%` → `88%` → `100%`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3923] Muku Chief` — Active: *Arcane! Furious Hammer* (Resonance Skill, Physical, Direct DMG, AoE, Crit)
- **Raw Passive Effects**: `passiveEffects=[[12512, 1000, 1300, 1600, 1900, 2200, 2500]]` | `bufPassiveEffects=[]`
- **Description**: Summons Boss: Muku Chief to slam the ground around, dealing AoE Attack DMG. Holds 2 charges. | Upon the skill cast, your Crit and Crit DMG are increased for a period.
  - **Total DMG (T0→T5)**: `1000% ATK/MATK +100 (Resilience Break: 100)` → `1150% ATK/MATK +100 (Resilience Break: 100)` → `1300% ATK/MATK +100 (Resilience Break: 100)` → `1450% ATK/MATK +100 (Resilience Break: 100)` → `1600% ATK/MATK +100 (Resilience Break: 100)` → `1750% ATK/MATK +100 (Resilience Break: 100)`
  - **Crit bonus (T0→T5)**: `5600` → `6720` → `7840` → `8960` → `10080` → `11200`
  - **Crit DMG bonus (T0→T5)**: `20%` → `24%` → `28%` → `32%` → `36%` → `40%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **Charge Time (T0→T5)**: `90s` → `90s` → `90s` → `75s` → `75s` → `60s`
### Imagine `[3925] Mighty Colossus` — Active: *Stunt! Invisible Impact* (Resonance Skill, Physical, Direct DMG, Single Target, Stagger)
- **Raw Passive Effects**: `passiveEffects=[[11832, 1000, 1300, 1600, 1900, 2200, 2500]]` | `bufPassiveEffects=[]`
- **Description**: Transforms into Elite: Mighty Colossus to charge and deal Attack DMG. The longer you charge, the greater the effect on Resilience breaking. Each stack increases the Resilience Break done by 50%. (3 stacks at Tier 3 and 6 stacks at Tier 5.) | Upon the skill cast, your Resilience Break Bonus is increased for a period.
  - **Total DMG (T0→T5)**: `900% ATK/MATK +90 (Resilience Break: 1500)` → `1034.9% ATK/MATK +90 (Resilience Break: 1500)` → `1170% ATK/MATK +90 (Resilience Break: 1500)` → `1305% ATK/MATK +90 (Resilience Break: 1500)` → `1440% ATK/MATK +90 (Resilience Break: 1500)` → `1575% ATK/MATK +90 (Resilience Break: 1500)`
  - **Resilience Break bonus (T0→T5)**: `25%` → `30%` → `35%` → `40%` → `45%` → `50%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3926] Storm Goblin King` — Active: *Arcane! Meteor Shower* (Resonance Skill, Magic, Direct DMG, AoE, Luck)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210020, [2240], [2912], [3584], [4256], [4928], [5600]]]`
- **Description**: Summons Boss: Storm Goblin King to release a meteor shower at the target, dealing Magic DMG. Upon the skill cast, your Luck and DMG dealt and healing of Luck effects are increased for a period. | Tier 5: While active, trigger​ all unlocked ​passive Luck effects​ from your Plains Battle Imagines.
  - **Total DMG (T0→T5)**: `1050% ATK/MATK +105 (Resilience Break: 100)` → `1207% ATK/MATK +105 (Resilience Break: 100)` → `1365% ATK/MATK +105 (Resilience Break: 100)` → `1522.5% ATK/MATK +105 (Resilience Break: 100)` → `1680% ATK/MATK +105 (Resilience Break: 100)` → `1837.5% ATK/MATK +105 (Resilience Break: 100)`
  - **Luck Bonus (T0→T5)**: `5600` → `6720` → `7840` → `8960` → `10080` → `11200`
  - **Luck Effect bonus (T0→T5)**: `16%` → `19.2%` → `22.4%` → `25.6%` → `28.8%` → `32%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `150s` → `150s` → `150s` → `125s` → `125s` → `100s`
### Imagine `[3927] Jungle Goblin Warrior` — Active: *Stunt! Roar Command* (Resonance Skill, Physical, Direct DMG, AoE, Main attribute)
- **Raw Passive Effects**: `passiveEffects=[[11014, 400, 520, 640, 760, 880, 1000]]` | `bufPassiveEffects=[]`
- **Description**: Summons Elite: Jungle Goblin Warrior and roars. | Casts the skill, temporarily boosting Strength, empowering the next attack to deal bonus Attack DMG in a limited area, and [Link#3000: interrupting] the target's actions.
  - **Total DMG (T0→T5)**: `750% ATK/MATK+ 75 (Resilience Break: 100)` → `862.5% ATK/MATK+ 75 (Resilience Break: 100)` → `975% ATK/MATK+ 75 (Resilience Break: 100)` → `1087.5% ATK/MATK+ 75 (Resilience Break: 100)` → `1200% ATK/MATK+ 75 (Resilience Break: 100)` → `1312.5% ATK/MATK+ 75 (Resilience Break: 100)`
  - **Strength Bonus (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3928] Muku Scout` — Active: *Stunt! Predator Slash* (Resonance Skill, Physical, Direct DMG, Single Target, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210040, [200], [260], [320], [380], [440], [500]]]`
- **Description**: Summons Elite: Muku Scout to chase the target, dealing Attack DMG. | Upon the skill cast, immediately gains full passive effects, and the stack count is doubled within 20s.
  - **Total DMG (T0→T5)**: `760% ATK/MATK +60 (Resilience Break: 100)` → `874% ATK/MATK +60 (Resilience Break: 100)` → `988% ATK/MATK +60 (Resilience Break: 100)` → `1102% ATK/MATK +60 (Resilience Break: 100)` → `1216% ATK/MATK +60 (Resilience Break: 100)` → `1330% ATK/MATK +60 (Resilience Break: 100)`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3929] Void Arachnocrab` — Active: *Stunt! Shell Defense* (Resonance Skill, Protect)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3200020, [20, 450], [20, 585], [20, 720], [15, 855], [15, 990], [10, 1125]]]`
- **Description**: Transforms into Elite: Void Arachnocrab, and gains Invincibility for 5s.
  - **CD (T0→T5)**: `90s` → `90s` → `90s` → `75s` → `75s` → `60s`
### Imagine `[3930] Brigand Guard Captain` — Active: *Stunt! Earth Shield* (Resonance Skill, Direct Healing, Protect)
- **Raw Passive Effects**: `passiveEffects=[[11044, 500, 650, 800, 950, 1100, 1250]]` | `bufPassiveEffects=[]`
- **Description**: Transforms into Elite: Brigand Guard Captain to grant Earth Shield, recovering a percentage of lost HP when you are attacked, up to 9 times. During this, your Endurance is increased.
  - **HP Recover (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Endurance Bonus (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Duration (T0→T5)**: `15s` → `15s` → `15s` → `15s` → `15s` → `15s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3934] Brigand Scout Leader` — Active: *Stunt! Blink Ambush* (Resonance Skill, Physical, Direct DMG, Single Target, Main attribute)
- **Raw Passive Effects**: `passiveEffects=[[11034, 400, 520, 640, 760, 880, 1000]]` | `bufPassiveEffects=[]`
- **Description**: Summons Elite: Brigand Scout Leader to execute continuous attacks on the designated target, dealing Attack DMG and [Link#3000: interrupting] their actions. | Upon the skill cast, your Agility is increased for a period.
  - **Total DMG (T0→T5)**: `750% ATK/MATK +75 (Resilience Break: 100)` → `862.4% ATK/MATK +75 (Resilience Break: 100)` → `975% ATK/MATK +75 (Resilience Break: 100)` → `1087.5% ATK/MATK +75 (Resilience Break: 100)` → `1200% ATK/MATK +75 (Resilience Break: 100)` → `1312.5% ATK/MATK +75 (Resilience Break: 100)`
  - **Agility Bonus (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3935] Golden Juggernaut` — Active: *Arcane! Thunder Roar* (Resonance Skill, Physical, Direct DMG, Single Target, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[[11812, 800, 1040, 1280, 1520, 1760, 2000]]` | `bufPassiveEffects=[]`
- **Description**: Transforms into Boss: Golden Juggernaut, granting yourself and 10 allies Shield. When dealing DMG, the shielded targets generate Thunderstrike (CD: 0.5s), and the DMG dealt depends on the friendly ATK. | (This effect cannot stack and only one will be effective.)
  - **DMG per hit (T0→T5)**: `12% ATK +5 (Resilience Break: 1)` → `13.8% ATK +5 (Resilience Break: 1)` → `15.6% ATK +5 (Resilience Break: 1)` → `17.4% ATK +5 (Resilience Break: 1)` → `19.2% ATK +5 (Resilience Break: 1)` → `21% ATK +5 (Resilience Break: 1)`
  - **Shield (T0→T5)**: `30% Max HP` → `36% Max HP` → `42% Max HP` → `48% Max HP` → `54% Max HP` → `60% Max HP`
  - **Duration (T0→T5)**: `15s` → `15s` → `15s` → `15s` → `15s` → `15s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3936] Lizardman Mage` — Active: *Stunt! Water of Silence* (Resonance Skill, Physical, Direct DMG, Silence, AoE)
- **Raw Passive Effects**: `passiveEffects=[[13122, 300, 390, 480, 570, 660, 750]]` | `bufPassiveEffects=[]`
- **Description**: Summons Elite: Lizardman Mage to conjure the Water of Silence at the target's location, dealing Magic DMG and inflicting [Link#3011: Slow]. | Upon the skill cast, your Ice Bonus is increased for a period.
  - **Total DMG (T0→T5)**: `750% ATK/MATK +70 (Resilience Break: 100)` → `862% ATK/MATK +70 (Resilience Break: 100)` → `975% ATK/MATK +70 (Resilience Break: 100)` → `1087% ATK/MATK +70 (Resilience Break: 100)` → `1200% ATK/MATK +70 (Resilience Break: 100)` → `1312% ATK/MATK +70 (Resilience Break: 100)`
  - **Ice Bonus (T0→T5)**: `8%` → `9.6%` → `11.2%` → `12.8%` → `14.4%` → `16%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3937] Lizardman Hunter` — Active: *Stunt! Thunder Suppress* (Resonance Skill, Magic, Direct DMG, AoE, Luck)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210080, [1120], [1456], [1792], [2128], [2464], [2800]]]`
- **Description**: Summons Elite: Lizardman Hunter to chant briefly, dealing Magic DMG. | Upon the skill cast, your Luck and Lucky Strike Chance are increased for a period.
  - **Total DMG (T0→T5)**: `650% ATK/MATK +65 (Resilience Break: 100)` → `747.5% ATK/MATK +65 (Resilience Break: 100)` → `845% ATK/MATK +65 (Resilience Break: 100)` → `942.5% ATK/MATK +65 (Resilience Break: 100)` → `1040% ATK/MATK +65 (Resilience Break: 100)` → `1137.5% ATK/MATK +65 (Resilience Break: 100)`
  - **Luck Bonus (T0→T5)**: `4480` → `5376` → `6272` → `7168` → `8064` → `8960`
  - **Lucky Strike Multiplier (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3938] Phantom Arachnocrab` — Active: *Arcane! Cocoon Tech* (Resonance Skill, Physical, Direct DMG, AoE, Mastery)
- **Raw Passive Effects**: `passiveEffects=[[11142, 8960, 11648, 14336, 17024, 19712, 22400]]` | `bufPassiveEffects=[]`
- **Description**: Summons Boss: Phantom Arachnocrab and transforms into a cocoon. Following a brief delay, the cocoon bursts, dealing Attack DMG and [Link#3000: interrupting] the actions of the affected target. Your Mastery is increased for a period.
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 100)` → `1612.5% ATK/MATK +150 (Resilience Break: 100)` → `1725% ATK/MATK +150 (Resilience Break: 100)` → `2062.5% ATK/MATK +150 (Resilience Break: 100)` → `2175% ATK/MATK +150 (Resilience Break: 100)` → `2287.5% ATK/MATK +150 (Resilience Break: 100)`
  - **Mastery bonus (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3939] Great Warhog` — Active: *Stunt! Lightning Orb* (Resonance Skill, Physical, Direct DMG, AoE, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[[13172, 300, 390, 480, 570, 660, 750]]` | `bufPassiveEffects=[]`
- **Description**: Summons Elite: Great Warhog to release a Lightning Orb forward, dealing Attack DMG. | Upon the skill cast, your Light Bonus is increased for a period.
  - **Total DMG (T0→T5)**: `900% ATK/MATK +90 (Resilience Break: 100)` → `1034.9% ATK/MATK +90 (Resilience Break: 100)` → `1170% ATK/MATK +90 (Resilience Break: 100)` → `1305% ATK/MATK +90 (Resilience Break: 100)` → `1440% ATK/MATK +90 (Resilience Break: 100)` → `1575% ATK/MATK +90 (Resilience Break: 100)`
  - **Light Bonus (T0→T5)**: `8%` → `9.6%` → `11.2%` → `12.8%` → `14.4%` → `16%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3940] Storm Goblin Warrior` — Active: *Stunt! Whirlwind Strike* (Resonance Skill, Physical, Direct DMG, AoE, Envelop, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[[13152, 300, 390, 480, 570, 660, 750]]` | `bufPassiveEffects=[]`
- **Description**: Summons Elite: Storm Goblin Warrior to continuously release Whirlwind Slash, dealing Attack DMG and pulling in all surrounding units. | Upon the skill cast, your Wind Bonus is increased for a period.
  - **Total DMG (T0→T5)**: `750% ATK/MATK +70 (Resilience Break: 100)` → `862% ATK/MATK +70 (Resilience Break: 100)` → `975% ATK/MATK +70 (Resilience Break: 100)` → `1087% ATK/MATK +70 (Resilience Break: 100)` → `1200% ATK/MATK +70 (Resilience Break: 100)` → `1312% ATK/MATK +70 (Resilience Break: 100)`
  - **Wind Bonus (T0→T5)**: `8%` → `9.6%` → `11.2%` → `12.8%` → `14.4%` → `16%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3941] Void Bzzar` — Active: *Stunt! Transform into Bee* (Resonance Skill, Physical, Direct DMG)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3200025, [1120], [1456], [1792], [2128], [2464], [2800]]]`
- **Description**: Transforms into Elite: Void Bzzar for a period of time, during which you can release stings and projectiles.
  - **Transformation Duration (T0→T5)**: `15s` → `18s` → `21s` → `24s` → `27s` → `30s`
  - **CD (T0→T5)**: `90s` → `90s` → `90s` → `75s` → `75s` → `60s`
### Imagine `[3942] Venobzzar Incubator` — Active: *Arcane! Poison Explosion* (Resonance Skill, Physical, DoT, AoE, Vulnerability)
- **Raw Passive Effects**: `passiveEffects=[[11014, 600, 780, 960, 1140, 1320, 1500], [11024, 600, 780, 960, 1140, 1320, 1500], [11034, 600, 780, 960, 1140, 1320, 1500]]` | `bufPassiveEffects=[]`
- **Description**: Summons Boss: Venobzzar Incubator to continuously attack surrounding units, dealing Attack DMG. Each attack inflicts Vulnerability on the target, and your DMG dealt to the target is increased. | (This effect cannot stack and only one will be effective.)
  - **Blast DMG (T0→T5)**: `150% ATK/MATK +15 (Resilience Break: 10)` → `161.25% ATK/MATK +15 (Resilience Break: 10)` → `172.5% ATK/MATK +15 (Resilience Break: 10)` → `206.25% ATK/MATK +15 (Resilience Break: 10)` → `217.5% ATK/MATK +15 (Resilience Break: 10)` → `228.75% ATK/MATK +15 (Resilience Break: 10)`
  - **Single DoT (T0→T5)**: `94% ATK/MATK +9 (Resilience Break: 6)` → `101.05% ATK/MATK +9 (Resilience Break: 6)` → `108.1% ATK/MATK +9 (Resilience Break: 6)` → `129.25% ATK/MATK +9 (Resilience Break: 6)` → `136.3% ATK/MATK +9 (Resilience Break: 6)` → `143.35% ATK/MATK +9 (Resilience Break: 6)`
  - **Vulnerability (applies to yourself) (T0→T5)**: `8%` → `9.6%` → `11.2%` → `12.8%` → `14.4%` → `16%`
  - **Vulnerability (applies to allies) (T0→T5)**: `4%` → `4.8%` → `5.6%` → `6.4%` → `7.2%` → `8%`
  - **Duration (T0→T5)**: `8s` → `8s` → `8s` → `8s` → `8s` → `8s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3943] Iron Fang` — Active: *Arcane! Infernal Thrust* (Resonance Skill, Physical, Direct DMG, AoE, Wound)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3200002, [800], [1040], [1280], [1520], [1760], [2000]]]`
- **Description**: Summons Boss: Iron Fang to deliver AoE Attack DMG to nearby enemies, inflicting a 100% [Link#3004: Wound] on all affected targets for 15s.
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 100)` → `1725% ATK/MATK +150 (Resilience Break: 100)` → `1950% ATK/MATK +150 (Resilience Break: 100)` → `2175% ATK/MATK +150 (Resilience Break: 100)` → `2400% ATK/MATK +150 (Resilience Break: 100)` → `2625% ATK/MATK +150 (Resilience Break: 100)`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3944] Celestial Flier` — Active: *Arcane! Azure Gale* (Resonance Skill, Physical, Direct DMG, Ice, Single Target, Haste)
- **Raw Passive Effects**: `passiveEffects=[[11122, 8960, 11648, 14336, 17024, 19712, 22400]]` | `bufPassiveEffects=[]`
- **Description**: Summons Boss: Celestial Flier to charge forward, dealing Ice Attack DMG and [Link#3000: interrupting] the targets' actions. After casting, your Haste is increased for a period of time.
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 100)` → `1725% ATK/MATK +150 (Resilience Break: 100)` → `1950% ATK/MATK +150 (Resilience Break: 100)` → `2175% ATK/MATK +150 (Resilience Break: 100)` → `2400% ATK/MATK +150 (Resilience Break: 100)` → `2625% ATK/MATK +150 (Resilience Break: 100)`
  - **Haste Bonus (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3945] Lizardman King` — Active: *Arcane! Silent Tide* (Resonance Skill, Physical, Direct DMG, Ice, AoE, Silence)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210090, [2240], [2912], [3584], [4256], [4928], [5600]]]`
- **Description**: Summons Boss: Lizardman King to deal Ice Attack DMG to nearby enemies and [Link#3001: Silence] them for 10s.
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 100)` → `1725% ATK/MATK +150 (Resilience Break: 100)` → `1950% ATK/MATK +150 (Resilience Break: 100)` → `2175% ATK/MATK +150 (Resilience Break: 100)` → `2400% ATK/MATK +150 (Resilience Break: 100)` → `2625% ATK/MATK +150 (Resilience Break: 100)`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3946] Goblin King` — Active: *Arcane! Goblin March* (Resonance Skill)
- **Raw Passive Effects**: `passiveEffects=[[11152, 8960, 11648, 14336, 17024, 19712, 22400]]` | `bufPassiveEffects=[]`
- **Description**: Resonates with the power of Boss: Goblin King, summoning 1–3 goblins at random to cast skills. | Always summons 1 from Elite: Goblin Guard or Elite: Goblin Warrior. | Has a chance to additionally summon 1 Elite: Jungle Goblin Warrior. | Has a chance to summon 1 from Elite: Storm Goblin Axe or Boss: Storm Goblin King. Has a 30% chance to summon the Boss.
  - **Extra Elite Summon Probability (T0→T5)**: `60%` → `80%` → `80%` → `100%` → `100%` → `100%`
  - **Additional Probability to Summon Elite or Boss (T0→T5)**: `40%` → `60%` → `60%` → `80%` → `80%` → `100%`
  - **CD (T0→T5)**: `150s` → `150s` → `150s` → `125s` → `125s` → `100s`
  - **"Blade Sweep" | Total DMG (T0→T5)**: `600% ATK/MATK +60 (Resilience Break: 99)` → `690% ATK/MATK +60 (Resilience Break: 99)` → `780% ATK/MATK +60 (Resilience Break: 99)` → `870% ATK/MATK +60 (Resilience Break: 99)` → `960% ATK/MATK +60 (Resilience Break: 99)` → `1050% ATK/MATK +60 (Resilience Break: 99)`
  - **"Blade Sweep" Block DMG Reduction Bonus (T0→T5)**: `7.5%` → `9%` → `10.5%` → `12%` → `13.5%` → `15%`
  - **"Blade Sweep" Block DMG Reduction Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **"Blade Sweep" Armor Penetration (T0→T5)**: `650` → `780` → `910` → `1040` → `1170` → `1300`
  - **"Blade Sweep" Penetration Duration (T0→T5)**: `10s` → `10s` → `10s` → `10s` → `10s` → `10s`
  - **"Frenzied Shot" | Total DMG (T0→T5)**: `900% ATK/MATK +88 (Resilience Break: 100)` → `1034.8% ATK/MATK +88 (Resilience Break: 100)` → `1170% ATK/MATK +88 (Resilience Break: 100)` → `1304.8% ATK/MATK +88 (Resilience Break: 100)` → `1440% ATK/MATK +88 (Resilience Break: 100)` → `1574.8% ATK/MATK +88 (Resilience Break: 100)`
  - **"Frenzied Shot" Luck Bonus (T0→T5)**: `4480` → `5376` → `6272` → `7168` → `8064` → `8960`
  - **"Frenzied Shot" Lucky Strike Multiplier (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **"Frenzied Shot" Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **"Roar Command" | Total DMG (T0→T5)**: `750% ATK/MATK+ 75 (Resilience Break: 100)` → `862.5% ATK/MATK+ 75 (Resilience Break: 100)` → `975% ATK/MATK+ 75 (Resilience Break: 100)` → `1087.5% ATK/MATK+ 75 (Resilience Break: 100)` → `1200% ATK/MATK+ 75 (Resilience Break: 100)` → `1312.5% ATK/MATK+ 75 (Resilience Break: 100)`
  - **"Roar Command" Strength Bonus (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **"Roar Command" Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **"Whirlwind Strike" | Total DMG (T0→T5)**: `750% ATK/MATK +70 (Resilience Break: 100)` → `862% ATK/MATK +70 (Resilience Break: 100)` → `975% ATK/MATK +70 (Resilience Break: 100)` → `1087% ATK/MATK +70 (Resilience Break: 100)` → `1200% ATK/MATK +70 (Resilience Break: 100)` → `1312% ATK/MATK +70 (Resilience Break: 100)`
  - **"Whirlwind Strike" Wind Bonus (T0→T5)**: `8%` → `9.6%` → `11.2%` → `12.8%` → `14.4%` → `16%`
  - **"Whirlwind Strike" Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **"Meteor Shower" | Total DMG (T0→T5)**: `1050% ATK/MATK +105 (Resilience Break: 100)` → `1207% ATK/MATK +105 (Resilience Break: 100)` → `1365% ATK/MATK +105 (Resilience Break: 100)` → `1522.5% ATK/MATK +105 (Resilience Break: 100)` → `1680% ATK/MATK +105 (Resilience Break: 100)` → `1837.5% ATK/MATK +105 (Resilience Break: 100)`
  - **"Meteor Shower" Luck Bonus (T0→T5)**: `5600` → `6720` → `7840` → `8960` → `10080` → `11200`
  - **"Meteor Shower" Increased Luck effects (T0→T5)**: `16%` → `19.2%` → `22.4%` → `25.6%` → `28.8%` → `32%`
  - **"Meteor Shower" Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
### Imagine `[3947] Muku Vanguard` — Active: *Stunt! Spiral Severance* (Resonance Skill, Physical, Direct DMG, Single Target, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[[13142, 300, 390, 480, 570, 660, 750]]` | `bufPassiveEffects=[]`
- **Description**: Summons Elite: Muku Vanguard to charge forward, dealing Attack DMG. | Upon the skill cast, your Thunder Bonus is increased for a period.
  - **Total DMG (T0→T5)**: `900% ATK/MATK +90 (Resilience Break: 100)` → `1034.9% ATK/MATK +90 (Resilience Break: 100)` → `1170% ATK/MATK +90 (Resilience Break: 100)` → `1305% ATK/MATK +90 (Resilience Break: 100)` → `1440% ATK/MATK +90 (Resilience Break: 100)` → `1575% ATK/MATK +90 (Resilience Break: 100)`
  - **Thunder Bonus (T0→T5)**: `8%` → `9.6%` → `11.2%` → `12.8%` → `14.4%` → `16%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3948] Rorola` — Active: *Arcane! Divine Reliance* (Resonance Skill, Physical, Direct DMG, AoE, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[[11014, 600, 780, 960, 1140, 1320, 1500], [11024, 600, 780, 960, 1140, 1320, 1500], [11034, 600, 780, 960, 1140, 1320, 1500]]` | `bufPassiveEffects=[]`
- **Description**: Summons Rorola, resonating with the power of ancestors to gain a damage boost for some time. Also, every 10 hits on targets grant an additional damage boost, stacking up to 5 times. Once the cap is reached, subsequent hits extend the duration of the additional boost (the duration of the Base DMG boost does not extend). Each extension adds 3s, with a maximum of 5 extensions. At the same time, grants the Life Steal effect, restoring HP equal to a portion of damage dealt (the duration can extend). | This skill holds 2 charges.
  - **Total DMG (T0→T5)**: `1500% ATK/MATK+ 149 (Resilience Break: 100)` → `1724.6% ATK/MATK+ 149 (Resilience Break: 100)` → `1950% ATK/MATK+ 149 (Resilience Break: 100)` → `2174.9% ATK/MATK+ 149 (Resilience Break: 100)` → `2400% ATK/MATK+ 149 (Resilience Break: 100)` → `2624.9% ATK/MATK+ 149 (Resilience Break: 100)`
  - **DMG Boost (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Extra DMG Boost (T0→T5)**: `1.2%` → `1.44%` → `1.68%` → `1.92%` → `2.16%` → `2.4%`
  - **Life Steal Ratio (T0→T5)**: `1%` → `1%` → `1%` → `1%` → `1%` → `1%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **Overdrive Time (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3949] Dorothy` — Active: *Arcane! Illusion Resonance* (Resonance Skill, Physical, Direct DMG, Single Target)
- **Raw Passive Effects**: `passiveEffects=[[11014, 600, 780, 960, 1140, 1320, 1500], [11024, 600, 780, 960, 1140, 1320, 1500], [11034, 600, 780, 960, 1140, 1320, 1500]]` | `bufPassiveEffects=[]`
- **Description**: Transforms into Dorothy, replacing basic attack modules and gaining [Link#1210: Artisan's Power]. | Passive: Dealing damage has a 40% chance to trigger Chain Lightning (trigger interval: at least 0.5s). | ① Charges and fires a powerful shot at the target, dealing Attack DMG. Each additional charge increases the damage by 150%. | ② Leaps into the air and launches a Thunderstorm Bolt at the target, dealing Attack DMG and creating a Thunderstorm Zone at the target for 7s. Thunderstorm Zone deals Attack DMG per second to enemies within and [Link#3011: slows] them. | ③ Continuously unleashes Thunder Tracers, dealing Attack DMG and inflicting [Link#3008: Paralysis] on hit. | ④ Fires an Oblivion Bomb, which explodes after traveling a distance or upon impact, dealing Attack DMG.
  - **Transformation Cooldown (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **[Passive] (T0→T5)**: `Effect` → `Effect` → `Effect` → `Effect` → `Effect` → `Effect`
  - **Lightning Chain (T0→T5)**: `1000% ATK/MATK +50` → `1000% ATK/MATK +50` → `1000% ATK/MATK +50` → `1000% ATK/MATK +50` → `1000% ATK/MATK +50` → `1000% ATK/MATK +50`
  - **[Basic Attack] (T0→T5)**: `Effect` → `Effect` → `Effect` → `Effect` → `Effect` → `Effect`
  - **Basic Attack 1st Hit (T0→T5)**: `400% ATK/MATK +20` → `480% ATK/MATK +20` → `560% ATK/MATK +20` → `640% ATK/MATK +20` → `720% ATK/MATK +20` → `800% ATK/MATK +20`
  - **Basic Attack 2nd Hit (T0→T5)**: `800% ATK/MATK +40` → `960% ATK/MATK +40` → `1120% ATK/MATK +40` → `1280% ATK/MATK +40` → `1440% ATK/MATK +40` → `1600% ATK/MATK +40`
  - **Basic Attack 3rd Hit (T0→T5)**: `800% ATK/MATK +40` → `960% ATK/MATK +40` → `1120% ATK/MATK +40` → `1280% ATK/MATK +40` → `1440% ATK/MATK +40` → `1600% ATK/MATK +40`
  - **Skill 1 (T0→T5)**: `Effect` → `Effect` → `Effect` → `Effect` → `Effect` → `Effect`
  - **Charged Shot DMG Per Hit (T0→T5)**: `1000% ATK/MATK +50` → `1200% ATK/MATK +50` → `1400% ATK/MATK +50` → `1600% ATK/MATK +50` → `1800% ATK/MATK +50` → `2000% ATK/MATK +50`
  - **Skill 1 Cooldown (T0→T5)**: `10s` → `10s` → `10s` → `10s` → `10s` → `10s`
  - **Skill 2 (T0→T5)**: `Effect` → `Effect` → `Effect` → `Effect` → `Effect` → `Effect`
  - **Thunderstorm Bolt (T0→T5)**: `1280% ATK/MATK +64` → `1536% ATK/MATK +64` → `1792% ATK/MATK +64` → `2048% ATK/MATK +64` → `2304% ATK/MATK +64` → `2560% ATK/MATK +64`
  - **Thunderstorm Zone DMG per Hit (T0→T5)**: `384% ATK/MATK +19` → `460.8% ATK/MATK +19` → `537.6% ATK/MATK +19` → `614.4% ATK/MATK +19` → `691.2% ATK/MATK +19` → `768% ATK/MATK +19`
  - **Skill 2 Cooldown (T0→T5)**: `15s` → `15s` → `15s` → `15s` → `15s` → `15s`
  - **Skill 3 (T0→T5)**: `Effect` → `Effect` → `Effect` → `Effect` → `Effect` → `Effect`
  - **Thunder Tracer (T0→T5)**: `267% ATK/MATK +13` → `320.4% ATK/MATK +13` → `373.8% ATK/MATK +13` → `427.2% ATK/MATK +13` → `480.6% ATK/MATK +13` → `534% ATK/MATK +13`
  - **Skill 3 Cooldown (T0→T5)**: `25s` → `25s` → `25s` → `25s` → `25s` → `25s`
  - **Ultimate Skill (T0→T5)**: `Effect` → `Effect` → `Effect` → `Effect` → `Effect` → `Effect`
  - **Oblivion Bomb (T0→T5)**: `5000% ATK/MATK +250` → `6000% ATK/MATK +250` → `7000% ATK/MATK +250` → `8000% ATK/MATK +250` → `9000% ATK/MATK +250` → `10000% ATK/MATK +250`
  - **Ultimate Cooldown (T0→T5)**: `45s` → `45s` → `45s` → `45s` → `45s` → `45s`
### Imagine `[3950] Boyce` — Active: *Arcane! Allscape Sublimation* (Resonance Skill, Magic, Ice, Direct DMG, AoE, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[[11014, 600, 780, 960, 1140, 1320, 1500], [11024, 600, 780, 960, 1140, 1320, 1500], [11034, 600, 780, 960, 1140, 1320, 1500]]` | `bufPassiveEffects=[]`
- **Description**: Summons Boyce to create a field of frost by concentrating ice power, dealing Ice Magic DMG. | After casting, your ATK is increased for a period of time. Each cast of a Special Attack grants an additional increase, stacking up to 5 times. At max stacks, gain a bonus to Attack SPD and Casting SPD. Performing a Special Attack extends this bonus's duration by 3s, up to a max of 5 times (The ATK bonus's duration is not affected). | This skill holds 2 charges.
  - **Total DMG (T0→T5)**: `1050% ATK/MATK +105 (Resilience Break: 100)` → `1207.4% ATK/MATK +105 (Resilience Break: 100)` → `1365% ATK/MATK +105 (Resilience Break: 100)` → `1522.5% ATK/MATK +105 (Resilience Break: 100)` → `1680% ATK/MATK +105 (Resilience Break: 100)` → `1837.5% ATK/MATK +105 (Resilience Break: 100)`
  - **ATK Boost (T0→T5)**: `8%` → `9.6%` → `11.2%` → `12.8%` → `14.4%` → `16%`
  - **Extra ATK Boost (T0→T5)**: `1%` → `1.2%` → `1.4%` → `1.6%` → `1.8%` → `2%`
  - **Attack SPD Boost (T0→T5)**: `5%` → `6%` → `7%` → `8%` → `9%` → `10%`
  - **Casting SPD Boost (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **Overdrive Time (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3951] Fafala` — Active: *Arcane! Guardian's Boundary* (Resonance Skill, Physical, Direct DMG, AoE, Protect)
- **Raw Passive Effects**: `passiveEffects=[[11014, 600, 780, 960, 1140, 1320, 1500], [11024, 600, 780, 960, 1140, 1320, 1500], [11034, 600, 780, 960, 1140, 1320, 1500]]` | `bufPassiveEffects=[]`
- **Description**: Summons Fafala to create a field. | You and allies within the field gain Final DMG Reduction and Super Armor. When you deal damage from inside the field, inflict bonus damage based on a percentage of your DEF (can trigger at most once every 1s). When you take damage, reduce the CD of this Skill by 1s (can trigger at most once every 2s). | [This effect does not stack. Only one instance of this effect can be active at a time.
  - **Final DMG Reduction (T0→T5)**: `15%` → `18%` → `21%` → `24%` → `27%` → `30%`
  - **Extra Armor DMG (T0→T5)**: `200%+Season Level*1%` → `240%+Season Level*1.2%` → `280%+Season Level*1.4%` → `320%+Season Level*1.6%` → `360%+Season Level*1.8%` → `400%+Season Level*2%`
  - **Duration (T0→T5)**: `15s` → `15s` → `15s` → `15s` → `15s` → `15s`
  - **Cooldown (T0→T5)**: `90s` → `90s` → `90s` → `75s` → `75s` → `60s`
### Imagine `[3952] Blackstone Captain` — Active: *Arcane! Blazing Flames* (Resonance Skill, Physical, Fire, Direct DMG, AoE, Haste)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3200032, [1300], [1690], [2080], [2470], [2860], [3250]]]`
- **Description**: Summons Boss: Blackstone Captain to ignite flames centered on yourself, dealing Fire Attack DMG. | After casting, your Attack SPD and Casting SPD are increased for a period of time.
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 100)` → `1725% ATK/MATK +150 (Resilience Break: 100)` → `1950% ATK/MATK +150 (Resilience Break: 100)` → `2175% ATK/MATK +150 (Resilience Break: 100)` → `2400% ATK/MATK +150 (Resilience Break: 100)` → `2625% ATK/MATK +150 (Resilience Break: 100)`
  - **Attack SPD Boost (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Casting SPD Boost (T0→T5)**: `30%` → `36%` → `42%` → `48%` → `54%` → `60%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **Cooldown (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3953] Goblin Chief` — Active: *Arcane! Peerless Thrust* (Resonance Skill, Physical, Direct DMG, AoE, Increased Damage, Healing Boost)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3200033, [900], [1170], [1440], [1710], [1980], [2250]]]`
- **Description**: Summons Boss: Goblin Chief to briefly charge up and unleash a forward blade wave that deals Attack DMG. | After casting, your Expertise Skill's DMG and healing are increased for a period of time. During this time, dealing damage with an Expertise Skill reduces the CD of this Skill by 0.3s (can trigger at most once every 1s).
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 100)` → `1725% ATK/MATK +150 (Resilience Break: 100)` → `1950% ATK/MATK +150 (Resilience Break: 100)` → `2175% ATK/MATK +150 (Resilience Break: 100)` → `2400% ATK/MATK +150 (Resilience Break: 100)` → `2625% ATK/MATK +150 (Resilience Break: 100)`
  - **Expertise Skill Boost (T0→T5)**: `22%` → `26.4%` → `30.8%` → `35.2%` → `39.6%` → `44%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **Cooldown (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3954] Crimson Foxen` — Active: *Arcane! Phantom Ambush* (Resonance Skill, Physical, Direct DMG, AoE, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210120, [240], [312], [384], [456], [528], [600]]]`
- **Description**: Summons Boss: Crimson Foxen to spin and pounce on the target, dealing Attack DMG. | After casting, your Companion ATK is increased for a period of time.
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 100)` → `1725% ATK/MATK +150 (Resilience Break: 100)` → `1950% ATK/MATK +150 (Resilience Break: 100)` → `2175% ATK/MATK +150 (Resilience Break: 100)` → `2400% ATK/MATK +150 (Resilience Break: 100)` → `2625% ATK/MATK +150 (Resilience Break: 100)`
  - **Companion ATK Boost (T0→T5)**: `20%` → `24%` → `28%` → `32%` → `36%` → `40%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **Cooldown (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3955] Cabbage Kingpin` — Active: *Arcane! Cabbage Hammer* (Resonance Skill, Physical, Direct DMG, AoE, Main attribute, Increased Damage, Haste, Mastery, Versatility)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210130, [300, 300, 225, 6160, 0, 6160], [390, 390, 292, 8008, 0, 8008], [480, 480, 359, 9856, 0, 9856], [570, 570, 426, 11704, 0, 11704], [660, 660, 493, 13552, 0, 13552], [750, 750, 560, 15400, 0, 15400]]]`
- **Description**: Summons Boss: Cabbage Kingpin to briefly charge up and slam the ground with a hammer, dealing Attack DMG. | After casting, your passive effect is locked to the displayed sigil for 20s, and its effect is increased by 100%-150%.
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 100)` → `1725% ATK/MATK +150 (Resilience Break: 100)` → `1950% ATK/MATK +150 (Resilience Break: 100)` → `2175% ATK/MATK +150 (Resilience Break: 100)` → `2400% ATK/MATK +150 (Resilience Break: 100)` → `2625% ATK/MATK +150 (Resilience Break: 100)`
  - **Cooldown (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3956] Flamehorn` — Active: *Arcane! Flame Spirit's Fortune* (Resonance Skill, Physical, Direct DMG, AoE, Luck)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210140, [800, 5600, 0, 5600], [1040, 7280, 0, 7280], [1280, 8960, 0, 8960], [1520, 10640, 0, 10640], [1760, 12320, 0, 12320], [2000, 14000, 0, 14000]]]`
- **Description**: Summons Boss: Flamehorn to repeatedly ram the target with its horns, dealing Attack DMG. | Grants a Luck effect: Triggering a Lucky Strike causes an explosion at the target's location, dealing Magic DMG (cooldown: 0.1s), and immediately grants the Absolute Luck effect. For the duration, Absolute Luck's cooldown becomes 5s.
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 100)` → `1724.8% ATK/MATK +150 (Resilience Break: 100)` → `1950% ATK/MATK +150 (Resilience Break: 100)` → `2175% ATK/MATK +150 (Resilience Break: 100)` → `2400% ATK/MATK +150 (Resilience Break: 100)` → `2625% ATK/MATK +150 (Resilience Break: 100)`
  - **Luck Effect DMG (T0→T5)**: `50% ATK/MATK +5` → `57.5% ATK/MATK +5` → `65% ATK/MATK +5` → `72.5% ATK/MATK +5` → `80% ATK/MATK +5` → `87.5% ATK/MATK +5`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **Cooldown (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3957] Basilisk` — Active: *Arcane! Fatal Spiral* (Resonance Skill, Physical, Direct DMG, AoE, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[[11014, 600, 780, 960, 1140, 1320, 1500], [11024, 600, 780, 960, 1140, 1320, 1500], [11034, 600, 780, 960, 1140, 1320, 1500]]` | `bufPassiveEffects=[]`
- **Description**: Summons Boss: Basilisk to spin toward the target, dealing Attack DMG. | After casting, grants an All-Element Bonus to you and up to 10 nearby allies (prioritizing teammates) for a period of time. | (Cannot be affected by the same type of effect within 60s)
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 96)` → `1724.4% ATK/MATK +150 (Resilience Break: 96)` → `1950% ATK/MATK +150 (Resilience Break: 96)` → `2175% ATK/MATK +150 (Resilience Break: 96)` → `2400% ATK/MATK +150 (Resilience Break: 96)` → `2625% ATK/MATK +150 (Resilience Break: 96)`
  - **All-Element Bonus (T0→T5)**: `5%` → `6%` → `7%` → `8%` → `9%` → `10%`
  - **Duration (T0→T5)**: `10s` → `10s` → `10s` → `10s` → `10s` → `10s`
  - **Cooldown (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3958] Bluespine Lizard` — Active: *Stunt! Frost Breath* (Resonance Skill, Physical, Direct DMG, AoE, Versatility)
- **Raw Passive Effects**: `passiveEffects=[[11152, 5040, 6552, 8064, 9576, 11088, 12600]]` | `bufPassiveEffects=[]`
- **Description**: Summons Elite: Bluespine Lizard to breathe frost forward, dealing Attack DMG to targets in the area. | After casting, increases Versatility for a period of time.
  - **Total DMG (T0→T5)**: `750% ATK/MATK +72 (Resilience Break: 96)` → `862.2% ATK/MATK +72 (Resilience Break: 96)` → `975% ATK/MATK +72 (Resilience Break: 96)` → `1087.2% ATK/MATK +72 (Resilience Break: 96)` → `1200% ATK/MATK +72 (Resilience Break: 96)` → `1312.2% ATK/MATK +72 (Resilience Break: 96)`
  - **Versatility Boost (T0→T5)**: `6.5%` → `7.8%` → `9.1%` → `10.4%` → `11.7%` → `13%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **Cooldown (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3959] Blackstone Commander` — Active: *Stunt! Lightning Smite* (Resonance Skill, Magic, Direct DMG, AoE)
- **Raw Passive Effects**: `passiveEffects=[[11354, 600, 780, 960, 1140, 1320, 1500]]` | `bufPassiveEffects=[]`
- **Description**: Summons Elite: Blackstone Commander to call down lightning from the sky, dealing Magic DMG. | For a period of time after the skill is cast, when you deal damage, you will also deal additional Attack DMG to the target equal to a percentage of your Armor (can trigger at most once every 1s).
  - **Total DMG (T0→T5)**: `525% ATK/MATK +52 (Resilience Break: 100)` → `603.7% ATK/MATK +52 (Resilience Break: 100)` → `682.5% ATK/MATK +52 (Resilience Break: 100)` → `761.2% ATK/MATK +52 (Resilience Break: 100)` → `840% ATK/MATK +52 (Resilience Break: 100)` → `918.7% ATK/MATK +52 (Resilience Break: 100)`
  - **Extra Armor DMG (T0→T5)**: `100%+Season Level*0.5%` → `120%+Season Level*0.6%` → `140%+Season Level*0.7%` → `160%+Season Level*0.8%` → `180%+Season Level*0.9%` → `200%+Season Level*1%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **Cooldown (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3960] Blackstone Vanguard` — Active: *Stunt! Blade Storm* (Resonance Skill, Physical, Direct DMG, AoE)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210150, [1000], [1000], [1000], [2500], [2500], [4000]]]`
- **Description**: Transforms into Elite: Blackstone Vanguard to perform a spinning attack that deals Fire Attack DMG. Every stack of Blade Intent allows for an additional spin (up to 15 stacks). This damage benefits from all types of elemental bonuses and is not affected by passive effects.
  - **Total DMG (T0→T5)**: `650% ATK/MATK +65 (Resilience Break: 20)` → `747.5% ATK/MATK +65 (Resilience Break: 20)` → `845% ATK/MATK +65 (Resilience Break: 20)` → `942.5% ATK/MATK +65 (Resilience Break: 20)` → `1040% ATK/MATK +65 (Resilience Break: 20)` → `1137.5% ATK/MATK +65 (Resilience Break: 20)`
  - **Cooldown (T0→T5)**: `90s` → `90s` → `90s` → `75s` → `75s` → `60s`
### Imagine `[3961] Goblin Trickster` — Active: *Stunt! Carpet Bombing* (Resonance Skill, Magic, Direct DMG, AoE)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210160, [1200], [1560], [1920], [2280], [2640], [3000]]]`
- **Description**: Summons Elite: Goblin Trickster to channel for a long time before dealing massive AoE Magic DMG. (This skill damages enemies and up to 20 allies!)
  - **Total DMG (T0→T5)**: `300% ATK/MATK +30` → `345% ATK/MATK +30` → `390% ATK/MATK +30` → `435% ATK/MATK +30` → `480% ATK/MATK +30` → `525% ATK/MATK +30`
  - **Cooldown (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3962] Goblin Shaman` — Active: *Stunt! Healing Bomb* (Resonance Skill, Magic, Direct DMG, AoE)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3200034, [500, 80000, 4500], [500, 80000, 5850], [500, 80000, 7200], [500, 80000, 8550], [500, 80000, 9900], [500, 80000, 11250]]]`
- **Description**: Summons Elite: Goblin Shaman to briefly channel before summoning an exploding magic orb. The explosion deals Magic DMG to targets in the area and heals up to 10 nearby allies (prioritizing teammates). | After casting, for 20s, you deal damage every 2s to the surrounding area equal to 50% of the self-healing from your Class Skills.
  - **Total DMG (T0→T5)**: `525% ATK/MATK +52 (Resilience Break: 100)` → `603.7% ATK/MATK +52 (Resilience Break: 100)` → `682.5% ATK/MATK +52 (Resilience Break: 100)` → `761.2% ATK/MATK +52 (Resilience Break: 100)` → `840% ATK/MATK +52 (Resilience Break: 100)` → `918.7% ATK/MATK +52 (Resilience Break: 100)`
  - **Total Healing (T0→T5)**: `300% ATK/MATK +30` → `345% ATK/MATK +30` → `390% ATK/MATK +30` → `435% ATK/MATK +30` → `480% ATK/MATK +30` → `525% ATK/MATK +30`
  - **Cooldown (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3963] Blackfire Foxen` — Active: *Stunt! Kinetic Strike* (Resonance Skill, Physical, Direct DMG, AoE, Mastery)
- **Raw Passive Effects**: `passiveEffects=[[11142, 5040, 6552, 8064, 9576, 11088, 12600]]` | `bufPassiveEffects=[]`
- **Description**: Summons Elite: Blackfire Foxen to pounce on, bite, and then swipe its tail at the target, dealing Attack DMG. | After casting, your Mastery is increased for a period of time.
  - **Total DMG (T0→T5)**: `750% ATK/MATK +74 (Resilience Break: 100)` → `862.4% ATK/MATK +74 (Resilience Break: 100)` → `975% ATK/MATK +74 (Resilience Break: 100)` → `1087.4% ATK/MATK +74 (Resilience Break: 100)` → `1200% ATK/MATK +74 (Resilience Break: 100)` → `1312.4% ATK/MATK +74 (Resilience Break: 100)`
  - **Mastery Boost (T0→T5)**: `6.5%` → `7.8%` → `9.1%` → `10.4%` → `11.7%` → `13%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **Cooldown (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3964] Gloomy Cabbage` — Active: *Stunt! Cabbage Boomerang* (Resonance Skill, Physical, Direct DMG, AoE, Crit)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3200035, [500, 700], [650, 910], [800, 1120], [950, 1330], [1100, 1540], [1250, 1750]]]`
- **Description**: Summons Elite: Gloomy Cabbage to briefly charge up and swing a greatsword, dealing Attack DMG to targets in the area. | After casting, your Crit and Crit DMG are increased for a while (the values fluctuate based on the Cabbage sigil).
  - **Total DMG (T0→T5)**: `750% ATK/MATK +74 (Resilience Break: 100)` → `862.4% ATK/MATK +74 (Resilience Break: 100)` → `975% ATK/MATK +74 (Resilience Break: 100)` → `1087.4% ATK/MATK +74 (Resilience Break: 100)` → `1200% ATK/MATK +74 (Resilience Break: 100)` → `1312.4% ATK/MATK +74 (Resilience Break: 100)`
  - **Tier 1 Crit Boost (T0→T5)**: `3360` → `4032` → `4704` → `5376` → `6048` → `6720`
  - **Tier 1 Crit DMG Boost (T0→T5)**: `6%` → `7.2%` → `8.4%` → `9.6%` → `10.8%` → `12%`
  - **Tier 2 Crit Boost (T0→T5)**: `4480` → `5376` → `6272` → `7168` → `8064` → `8960`
  - **Tier 2 Crit DMG Boost (T0→T5)**: `8%` → `9.6%` → `11.2%` → `12.8%` → `14.4%` → `16%`
  - **Tier 3 Crit Boost (T0→T5)**: `5600` → `6720` → `7840` → `8960` → `10080` → `11200`
  - **Tier 3 Crit DMG Boost (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **Cooldown (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3965] Ruthless Cabbage` — Active: *Stunt! Cabbage Blitz* (Resonance Skill, Magic, Direct DMG, AoE)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210170, [500], [650], [800], [950], [1100], [1250]]]`
- **Description**: Summons Elite: Ruthless Cabbage to randomly call down 1-3 bolts of simulated lightning, dealing Magic DMG to targets in the area.
  - **DMG per hit (T0→T5)**: `333% ATK/MATK +33 (Resilience Break: 33)` → `382.9% ATK/MATK +33 (Resilience Break: 33)` → `432.9% ATK/MATK +33 (Resilience Break: 33)` → `482.8% ATK/MATK +33 (Resilience Break: 33)` → `532.8% ATK/MATK +33 (Resilience Break: 33)` → `582.7% ATK/MATK +33 (Resilience Break: 33)`
  - **Cooldown (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3966] Emerald Caprahorn` — Active: *Stunt! Twin Fangs* (Resonance Skill, Physical, Direct DMG, AoE, Haste)
- **Raw Passive Effects**: `passiveEffects=[[11122, 5040, 6552, 8064, 9576, 11088, 12600]]` | `bufPassiveEffects=[]`
- **Description**: Summons Elite: Emerald Caprahorn to fire two consecutive projectiles, dealing Attack DMG to targets in the area. | After casting, your Haste is increased for a period of time.
  - **Total DMG (T0→T5)**: `750% ATK/MATK +74 (Resilience Break: 100)` → `806.24% ATK/MATK +74 (Resilience Break: 100)` → `862.5% ATK/MATK +74 (Resilience Break: 100)` → `1031.24% ATK/MATK +74 (Resilience Break: 100)` → `1087.5% ATK/MATK +74 (Resilience Break: 100)` → `1143.74% ATK/MATK +74 (Resilience Break: 100)`
  - **Haste Boost (T0→T5)**: `6.5%` → `7.8%` → `9.1%` → `10.4%` → `11.7%` → `13%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **Cooldown (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3968] Denvel` — Active: *Arcane! Void Corruption Blade* (Resonance Skill, Physical, Direct DMG, AoE, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3200036, [400, 400], [520, 520], [640, 640], [760, 760], [880, 880], [1000, 1000]]]`
- **Description**: Summons Denvel to attract nearby monsters and deal Attack DMG. | After casting, grants a temporary enhancement: the user takes damage equal to 0.1% of Max HP every 0.2s and gains a DMG boost, with an additional boost for every 100,000 Max HP (Total base and extra DMG boost is capped, and the Max HP requirement is adjusted each season). | This skill holds 2 charges.
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 100)` → `1725% ATK/MATK +150 (Resilience Break: 100)` → `1950% ATK/MATK +150 (Resilience Break: 100)` → `2175% ATK/MATK +150 (Resilience Break: 100)` → `2400% ATK/MATK +150 (Resilience Break: 100)` → `2625% ATK/MATK +150 (Resilience Break: 100)`
  - **DMG Boost (T0→T5)**: `` → `` → `` → `` → `` → ``
  - **Extra DMG Boost (T0→T5)**: `` → `` → `` → `` → `` → ``
  - **Total DMG Boost Limit (T0→T5)**: `` → `` → `` → `` → `` → ``
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **Charge Time (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3969] Igoreus` — Active: *Arcane! Rift Recoil* (Resonance Skill, Physical, Direct DMG, AoE, Increased Damage, Crit)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210180, [560, 166], [728, 216], [896, 267], [1064, 318], [1232, 369], [1400, 420]]]`
- **Description**: Summons Igoreus to deal Attack DMG. Holds 2 charges. | After casting, your Crit is temporarily increased. Any base Crit Rate exceeding 60% is converted into a Crit DMG boost at a set ratio.
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 100)` → `1725% ATK/MATK +150 (Resilience Break: 100)` → `1950% ATK/MATK +150 (Resilience Break: 100)` → `2175% ATK/MATK +150 (Resilience Break: 100)` → `2400% ATK/MATK +150 (Resilience Break: 100)` → `2625% ATK/MATK +150 (Resilience Break: 100)`
  - **Crit Bonus (T0→T5)**: `` → `` → `` → `` → `` → ``
  - **Excess Crit to Crit DMG Conversion Rate (T0→T5)**: `` → `` → `` → `` → `` → ``
  - **Crit DMG Limit (T0→T5)**: `` → `` → `` → `` → `` → ``
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **Charge Time (T0→T5)**: `90s` → `90s` → `90s` → `75s` → `75s` → `60s`
### Imagine `[3970] Plague Nappo` — Active: *Arcane! Command Quadrant* (Resonance Skill, Physical, Direct DMG, Single Target, AoE, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[[11014, 600, 780, 960, 1140, 1320, 1500], [11024, 600, 780, 960, 1140, 1320, 1500], [11034, 600, 780, 960, 1140, 1320, 1500]]` | `bufPassiveEffects=[[3200037, [200, 4000], [260, 5200], [320, 6400], [380, 7600], [440, 8800], [500, 10000]]]`
- **Description**: Summons Plague Nappo. The Nappo's attack method and skill effects change based on the type of skill cast previously. | If cast directly or after a Special Attack, summons Stormblade Nappo to deal AoE Attack DMG once, and reduces the current Resonance Skill's CD by 81.25%. | If cast after an Expertise Skill, summons Marksman Nappo to deal Attack DMG to a single target, and reduces the current Resonance Skill's CD by 68.75%. | If cast after an Ultimate, summons Wind Knight Nappo to deal Attack DMG once, reduces the current Resonance Skill's CD by 25%, and temporarily increases your DMG. | If cast after another Resonance Skill, summons Beat Performer Nappo to reduce the CD of the previously cast Resonance Skill (excluding this one).
  - **Stormblade Nappo Damage (T0→T5)**: `2000% ATK/MATK +200 (Resilience Break: 100)` → `2299.5% ATK/MATK +200 (Resilience Break: 100)` → `2600% ATK/MATK +200 (Resilience Break: 100)` → `2900% ATK/MATK +200 (Resilience Break: 100)` → `3200% ATK/MATK +200 (Resilience Break: 100)` → `3500% ATK/MATK +200 (Resilience Break: 100)`
  - **Marksman Nappo Damage (T0→T5)**: `6000% ATK/MATK +600 (Resilience Break: 2000)` → `6900% ATK/MATK +600 (Resilience Break: 2000)` → `7800% ATK/MATK +600 (Resilience Break: 2000)` → `8700% ATK/MATK +600 (Resilience Break: 2000)` → `9600% ATK/MATK +600 (Resilience Break: 2000)` → `10500% ATK/MATK +600 (Resilience Break: 2000)`
  - **Wind Knight Nappo Damage (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 100)` → `1724.9% ATK/MATK +150 (Resilience Break: 100)` → `1950% ATK/MATK +150 (Resilience Break: 100)` → `2175% ATK/MATK +150 (Resilience Break: 100)` → `2400% ATK/MATK +150 (Resilience Break: 100)` → `2625% ATK/MATK +150 (Resilience Break: 100)`
  - **DMG Boost (T0→T5)**: `12.5%` → `15%` → `17.5%` → `20%` → `22.5%` → `25%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **Beat Performer Nappo Damage (T0→T5)**: `4500% ATK/MATK +450 (Resilience Break: 300)` → `5175% ATK/MATK +450 (Resilience Break: 300)` → `5850% ATK/MATK +450 (Resilience Break: 300)` → `6525% ATK/MATK +450 (Resilience Break: 300)` → `7200% ATK/MATK +450 (Resilience Break: 300)` → `7875% ATK/MATK +450 (Resilience Break: 300)`
  - **Other Resonance Skills CD Reduction (T0→T5)**: `40%` → `52%` → `64%` → `76%` → `88%` → `100%`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3971] Kartgriff` — Active: *Arcane! Superconductor Surge* (Resonance Skill, Magic, Direct DMG, AoE, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3200038, [600, 800], [780, 1040], [960, 1280], [1140, 1520], [1320, 1760], [1500, 2000]]]`
- **Description**: Summons Kartgriff to deal Magic DMG. | After casting, temporarily grants a Main Stats and Healing Received boost to you and up to 10 nearby allies (prioritizing teammates). | (Cannot be affected by the same type of effect within 60s.)
  - **Total DMG (T0→T5)**: `1050% ATK/MATK +105 (Resilience Break: 100)` → `1207.4% ATK/MATK +105 (Resilience Break: 100)` → `1365% ATK/MATK +105 (Resilience Break: 100)` → `1522.5% ATK/MATK +105 (Resilience Break: 100)` → `1680% ATK/MATK +105 (Resilience Break: 100)` → `1837.5% ATK/MATK +105 (Resilience Break: 100)`
  - **Main Attribute Enhanced (T0→T5)**: `7.5%` → `9%` → `10.5%` → `12%` → `13.5%` → `15%`
  - **Healing Received up (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Duration (T0→T5)**: `15s` → `15s` → `15s` → `15s` → `15s` → `15s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3972] Predator Spider` — Active: *Arcane! Shuttle Fang* (Resonance Skill, Physical, Direct DMG, AoE, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210190, [120, 20, 240], [156, 24, 288], [192, 28, 336], [228, 32, 384], [264, 36, 432], [300, 40, 480]]]`
- **Description**: Summons Boss: Predator Spider to deal Attack DMG. | After casting, your passive ATK bonus is temporarily enhanced according to your Mastery Percentage. Every 5% Mastery grants extra ATK for each passive stack (up to a max limit).
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 100)` → `1725% ATK/MATK +150 (Resilience Break: 100)` → `1950% ATK/MATK +150 (Resilience Break: 100)` → `2175% ATK/MATK +150 (Resilience Break: 100)` → `2400% ATK/MATK +150 (Resilience Break: 100)` → `2625% ATK/MATK +150 (Resilience Break: 100)`
  - **Extra ATK Boost Per Stack (T0→T5)**: `0.2%` → `0.24%` → `0.28%` → `0.32%` → `0.36%` → `0.4%`
  - **Extra ATK Boost Per Stack Limit (T0→T5)**: `2.4%` → `2.88%` → `3.36%` → `3.84%` → `4.32%` → `4.8%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3973] Rebel King` — Active: *Arcane! Flash Stomp* (Resonance Skill, Physical, Direct DMG, AoE, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210200, [160], [208], [256], [304], [352], [400]]]`
- **Description**: Summons Boss: Rebel King to deal Attack DMG. | After casting, temporarily grants full passive stacks, with the effect multiplied by 2.
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 100)` → `1725% ATK/MATK +150 (Resilience Break: 100)` → `1950% ATK/MATK +150 (Resilience Break: 100)` → `2175% ATK/MATK +150 (Resilience Break: 100)` → `2400% ATK/MATK +150 (Resilience Break: 100)` → `2625% ATK/MATK +150 (Resilience Break: 100)`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3974] Void Watcher` — Active: *Arcane! Precision Burst* (Resonance Skill, Magic, Direct DMG, AoE, Increased Damage, Acceleration)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210210, [8000, 2000], [10400, 2600], [12800, 3200], [15200, 3800], [17600, 4400], [20000, 5000]]]`
- **Description**: Summons Boss: Void Watcher, dealing Magic DMG and occupying an area for a period of time. | You and your teammates within the area gain increased ATK, Attack SPD, and Casting SPD. The effect on yourself is multiplied by 2.5. | (Does not stack; only one of the same effect may be active.)
  - **Total DMG (T0→T5)**: `1050% ATK/MATK +105 (Resilience Break: 93)` → `1206.3% ATK/MATK +105 (Resilience Break: 93)` → `1365% ATK/MATK +105 (Resilience Break: 93)` → `1522.5% ATK/MATK +105 (Resilience Break: 93)` → `1680% ATK/MATK +105 (Resilience Break: 93)` → `1837.5% ATK/MATK +105 (Resilience Break: 93)`
  - **ATK bonus (T0→T5)**: `3%` → `3.6%` → `4.2%` → `4.8%` → `5.4%` → `6%`
  - **Attack SPD Boost (T0→T5)**: `3%` → `3.6%` → `4.2%` → `4.8%` → `5.4%` → `6%`
  - **Casting SPD Boost (T0→T5)**: `6%` → `7.2%` → `8.4%` → `9.6%` → `10.8%` → `12%`
  - **Duration (T0→T5)**: `15s` → `15s` → `15s` → `15s` → `15s` → `15s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3975] Ridge Fang` — Active: *Arcane! Piercing Roar* (Resonance Skill, Physical, Direct DMG, AoE, Protect)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210220, [9000, 1000, 400, 90000], [9000, 1000, 520, 85000], [9000, 1000, 640, 80000], [9000, 1500, 760, 73000], [9000, 1500, 880, 68000], [9000, 2000, 1000, 60000]]]`
- **Description**: Summons Boss: Ridge Fang to deal Attack DMG. | After casting, instantly resets Survival Instinct CD. You remain Invigorated temporarily, and your Armor and Max HP are increased.
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 100)` → `1725% ATK/MATK +150 (Resilience Break: 100)` → `1950% ATK/MATK +150 (Resilience Break: 100)` → `2175% ATK/MATK +150 (Resilience Break: 100)` → `2400% ATK/MATK +150 (Resilience Break: 100)` → `2625% ATK/MATK +150 (Resilience Break: 100)`
  - **Armor Boost (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Max HP Boost (T0→T5)**: `10%` → `12%` → `14%` → `16%` → `18%` → `20%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3976] Bloodthirsty Furball` — Active: *Arcane! Swift Devour* (Resonance Skill, Physical, Direct DMG, AoE, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210230, [16000], [20800], [25600], [30400], [35200], [40000]]]`
- **Description**: Summons Boss: Bloodthirsty Furball to deal Attack DMG. | For a period of time after casting, every time your Class Skills and Luck effect deal damage, they add extra damage on top of the skill's base value, equal to a certain percentage of your ATK.
  - **Total DMG (T0→T5)**: `1500% ATK/MATK +150 (Resilience Break: 100)` → `1725% ATK/MATK +150 (Resilience Break: 100)` → `1950% ATK/MATK +150 (Resilience Break: 100)` → `2175% ATK/MATK +150 (Resilience Break: 100)` → `2400% ATK/MATK +150 (Resilience Break: 100)` → `2625% ATK/MATK +150 (Resilience Break: 100)`
  - **Additional Damage (T0→T5)**: `39% ATK/MATK` → `46.8% ATK/MATK` → `54.6% ATK/MATK` → `62.4% ATK/MATK` → `70.2% ATK/MATK` → `78% ATK/MATK`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3977] Killer Arachnocrab` — Active: *Stunt! Hidden Strike* (Resonance Skill, Physical, Direct DMG, AoE, Luck)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3210240, [1120, 400], [1456, 520], [1792, 640], [2128, 760], [2464, 880], [2800, 1000]]]`
- **Description**: Summons Elite: Killer Arachnocrab to deal Attack DMG. | After casting, you gain full passive stacks for a period of time, during which they do not decrease.
  - **Total DMG (T0→T5)**: `750% ATK/MATK +75 (Resilience Break: 100)` → `862.5% ATK/MATK +75 (Resilience Break: 100)` → `975% ATK/MATK +75 (Resilience Break: 100)` → `1087.5% ATK/MATK +75 (Resilience Break: 100)` → `1200% ATK/MATK +75 (Resilience Break: 100)` → `1312.5% ATK/MATK +75 (Resilience Break: 100)`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3978] Verdant Fang` — Active: *Stunt! Absolute Zero* (Resonance Skill, Physical, Direct DMG, AoE, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[]` | `bufPassiveEffects=[[3200039, [1200], [1560], [1920], [2280], [2640], [3000]]]`
- **Description**: Summons Elite: Verdant Fang to deal Attack DMG. | For a period of time after casting, each Class Skill used reduces your remaining Ultimate CD (triggers up to once every 1s).
  - **Total DMG (T0→T5)**: `750% ATK/MATK +75 (Resilience Break: 100)` → `862.5% ATK/MATK +75 (Resilience Break: 100)` → `975% ATK/MATK +75 (Resilience Break: 100)` → `1087.5% ATK/MATK +75 (Resilience Break: 100)` → `1200% ATK/MATK +75 (Resilience Break: 100)` → `1312.5% ATK/MATK +75 (Resilience Break: 100)`
  - **CD Decrease Per Cast (T0→T5)**: `5%` → `6%` → `7%` → `8%` → `9%` → `10%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3979] Man-Eating Furball` — Active: *Stunt! Abyssal Breath* (Resonance Skill, Physical, Direct DMG, AoE, Increased Damage)
- **Raw Passive Effects**: `passiveEffects=[[13112, 300, 390, 480, 570, 660, 750]]` | `bufPassiveEffects=[]`
- **Description**: Summons Elite: Man-Eating Furball to deal Attack DMG. | After casting, your Fire Bonus is temporarily increased.
  - **Total DMG (T0→T5)**: `750% ATK/MATK +75 (Resilience Break: 99)` → `862.2% ATK/MATK +75 (Resilience Break: 99)` → `975% ATK/MATK +75 (Resilience Break: 99)` → `1087.5% ATK/MATK +75 (Resilience Break: 99)` → `1200% ATK/MATK +75 (Resilience Break: 99)` → `1312.5% ATK/MATK +75 (Resilience Break: 99)`
  - **Fire Bonus (T0→T5)**: `8%` → `9.6%` → `11.2%` → `12.8%` → `14.4%` → `16%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3980] Dogorman` — Active: *Stunt! Ground Smash* (Resonance Skill, Physical, Direct DMG, AoE, Protect)
- **Raw Passive Effects**: `passiveEffects=[[11324, 500, 650, 800, 950, 1100, 1250]]` | `bufPassiveEffects=[]`
- **Description**: Summons Elite: Dogorman, dealing Attack DMG equal to a percentage of your HP. | After casting, your HP is also temporarily increased.
  - **Total DMG (T0→T5)**: `50% Max HP +75 (Resilience Break: 99)` → `60% Max HP +75 (Resilience Break: 99)` → `70% Max HP +75 (Resilience Break: 99)` → `80% Max HP +75 (Resilience Break: 99)` → `90% Max HP +75 (Resilience Break: 99)` → `100% Max HP +75 (Resilience Break: 99)`
  - **HP Boost (T0→T5)**: `8%` → `9.6%` → `11.2%` → `12.8%` → `14.4%` → `16%`
  - **Duration (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3981] Sanctuary Eye` — Active: *Stunt! Lock-On Shot* (Resonance Skill, Physical, Direct DMG, AoE, Shield)
- **Raw Passive Effects**: `passiveEffects=[[11812, 400, 520, 640, 760, 880, 1000]]` | `bufPassiveEffects=[]`
- **Description**: Summons Elite: Sanctuary Eye to deal Attack DMG. | After casting, grants a Shield to yourself and up to 10 nearby allies for a period of time (prioritizes teammates).
  - **Total DMG (T0→T5)**: `750% ATK/MATK +75 (Resilience Break: 100)` → `806.25% ATK/MATK +75 (Resilience Break: 100)` → `862.49% ATK/MATK +75 (Resilience Break: 100)` → `1031.25% ATK/MATK +75 (Resilience Break: 100)` → `1087.5% ATK/MATK +75 (Resilience Break: 100)` → `1143.75% ATK/MATK +75 (Resilience Break: 100)`
  - **Shield (T0→T5)**: `10% Max HP` → `12% Max HP` → `14% Max HP` → `16% Max HP` → `18% Max HP` → `20% Max HP`
  - **Duration (T0→T5)**: `15s` → `15s` → `15s` → `15s` → `15s` → `15s`
  - **CD (T0→T5)**: `120s` → `120s` → `120s` → `100s` → `100s` → `80s`
### Imagine `[3982] Lucy` — Active: *Arcane! Celestial Spirit Mage* (Resonance Skill, Magic, Increased Damage, Shield, Protect)
- **Raw Passive Effects**: `passiveEffects=[[11014, 600, 780, 960, 1140, 1320, 1500], [11024, 600, 780, 960, 1140, 1320, 1500], [11034, 600, 780, 960, 1140, 1320, 1500]]` | `bufPassiveEffects=[]`
- **Description**: Transform into Celestial Spirit Mage - Lucy, replacing your skill set while gaining [Link#1219: Ability Conversion]. | Passive: Dealing damage converts 50% of the damage dealt into healing for up to 10 nearby allies (prioritizing teammates). | 1. Fleuve d'Étoiles: Manifests the Fleuve d'Étoiles and swings it continuously, dealing Light Magic DMG to targets. | 2. Celestial Guardian: Harnesses the power of Celestial Spirits to grant a shield lasting 20s to up to 10 allies within range (prioritizing teammates). Simultaneously inflicts debuffs on up to 5 enemies within range, reducing ATK, applying Vulnerability, and reducing Element Resistance for 10s. | 3. Aqua Metria: Draws upon the power of Aquarius to unleash waves forward, dealing Water Magic DMG to targets in their path, with an additional 50% of the damage dealt converted into healing.
  - **Transformation Cooldown (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **[Basic Attack] | Basic Attack I (T0→T5)**: `400% ATK/MATK +20` → `520% ATK/MATK +20` → `640% ATK/MATK +20` → `760% ATK/MATK +20` → `880% ATK/MATK +20` → `1000% ATK/MATK +20`
  - **Basic Attack II (T0→T5)**: `480% ATK/MATK +24` → `624% ATK/MATK +24` → `768% ATK/MATK +24` → `912% ATK/MATK +24` → `1056% ATK/MATK +24` → `1200% ATK/MATK +24`
  - **Basic Attack III (T0→T5)**: `720% ATK/MATK +36` → `936% ATK/MATK +36` → `1152% ATK/MATK +36` → `1368% ATK/MATK +36` → `1584% ATK/MATK +36` → `1800% ATK/MATK +36`
  - **[Fleuve d'étoiles] | Fleuve d'étoiles DMG (T0→T5)**: `3000% ATK/MATK +150` → `3900% ATK/MATK +150` → `4800% ATK/MATK +150` → `5700% ATK/MATK +150` → `6600% ATK/MATK +150` → `7500% ATK/MATK +150`
  - **Fleuve d'étoiles Cooldown (T0→T5)**: `10s` → `10s` → `10s` → `10s` → `10s` → `10s`
  - **[Celestial Spirit Guard] | Celestial Spirit Guard Shield (T0→T5)**: `7.5% increases target max HP` → `9% increases target max HP` → `10.5% increases target max HP` → `12% increases target max HP` → `13.5% increases target max HP` → `15% increases target max HP`
  - **Celestial Spirit Guard ATK Reduction (T0→T5)**: `` → `` → `` → `` → `` → ``
  - **Celestial Spirit Guard Vulnerability (T0→T5)**: `3%` → `3.6%` → `4.2%` → `4.8%` → `5.4%` → `6%`
  - **Celestial Spirit Guard Elemental Resistance Reduction (T0→T5)**: `3%` → `3.6%` → `4.2%` → `4.8%` → `5.4%` → `6%`
  - **Celestial Spirit Guard Cooldown (T0→T5)**: `70 seconds` → `70 seconds` → `70 seconds` → `70 seconds` → `70 seconds` → `70 seconds`
  - **Aqua Metria | Aqua Metria DMG per hit (T0→T5)**: `1200% ATK/MATK+60` → `1560% ATK/MATK+60` → `1920% ATK/MATK+60` → `2280% ATK/MATK+60` → `2640% ATK/MATK+60` → `3000% ATK/MATK+60`
  - **Aqua Metria Cooldown (T0→T5)**: `40 seconds` → `40 seconds` → `40 seconds` → `40 seconds` → `40 seconds` → `40 seconds`
### Imagine `[3983] Natsu` — Active: *Arcane! Dragon Slayer* (Resonance Skill, Physical)
- **Raw Passive Effects**: `passiveEffects=[[11334, 720, 936, 1152, 1368, 1584, 1800], [11344, 720, 936, 1152, 1368, 1584, 1800]]` | `bufPassiveEffects=[]`
- **Description**: Transform into Fire Dragon Slayer - Natsu, replacing your skill set while gaining [Link#1217: Ability Conversion]. | Passive: Casting skills other than an Ultimate Skill grants stacks of Dragon Flame based on the skill type. Every 10 stacks of Dragon Flame automatically converts into 1 stack of Dragon Force. Dragon Force can stack up to 5 times. Each stack of Dragon Force grants a Fire Bonus. | 1. Fire Dragon's Iron Fist: Charges briefly before unleashing a blazing punch forward, dealing Fire Attack DMG and accumulating 5 stacks of Dragon Flame. | 2. Fire Dragon's Wing Attack: Leaps fiercely and dashes forward, dealing Fire Attack DMG and accumulating 5 stacks of Dragon Flame. | 3. Fire Dragon's Roar: Gathers the power of flames to spew a massive blast of fire forward, dealing Fire Attack DMG. If at max Dragon Force stacks, consumes all stacks of Dragon Force to gain CD reduction for Natsu's skills and a Fire Bonus. This effect persists for the duration of the current transformation and can stack up to 3 times.
  - **Dragon Force Element Bonus (T0→T5)**: `9%` → `9%` → `9%` → `11.7%` → `11.7%` → `14.4%`
  - **Transformation Cooldown (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`
  - **[Basic Attack] | Basic Attack I (T0→T5)**: `250% ATK/MATK +12` → `300% ATK/MATK +12` → `350% ATK/MATK +12` → `400% ATK/MATK +12` → `450% ATK/MATK +12` → `500% ATK/MATK +12`
  - **Basic Attack II (T0→T5)**: `300% ATK/MATK +15` → `360% ATK/MATK +15` → `420% ATK/MATK +15` → `480% ATK/MATK +15` → `540% ATK/MATK +15` → `600% ATK/MATK +15`
  - **Basic Attack III (T0→T5)**: `450% ATK/MATK +22` → `540% ATK/MATK +22` → `629.9% ATK/MATK +22` → `720% ATK/MATK +22` → `810% ATK/MATK +22` → `900% ATK/MATK +22`
  - **[Fire Dragon's Iron Fist] | Fire Dragon's Iron Fist DMG (T0→T5)**: `1400% ATK/MATK +70` → `1680% ATK/MATK +70` → `1960% ATK/MATK +70` → `2240% ATK/MATK +70` → `2520% ATK/MATK +70` → `2800% ATK/MATK +70`
  - **Fire Dragon's Iron Fist Cooldown (T0→T5)**: `5s` → `5s` → `5s` → `5s` → `5s` → `5s`
  - **[Fire Dragon's Wing Attack] | Fire Dragon's Wing Attack DMG (T0→T5)**: `4000% ATK/MATK +200` → `4800% ATK/MATK +200` → `5600% ATK/MATK +200` → `6400% ATK/MATK +200` → `7200% ATK/MATK +200` → `8000% ATK/MATK +200`
  - **Fire Dragon's Wing Attack Cooldown (T0→T5)**: `15s` → `15s` → `15s` → `15s` → `15s` → `15s`
  - **[Fire Dragon's Roar] | Fire Dragon's Roar DMG (T0→T5)**: `4499% ATK/MATK +220` → `4948.9% ATK/MATK +220` → `5398.8% ATK/MATK +220` → `6748.5% ATK/MATK +220` → `7198.4% ATK/MATK +220` → `7648.3% ATK/MATK +220`
  - **Fire Dragon's Roar CD Reduction (T0→T5)**: `` → `` → `` → `` → `` → ``
  - **Fire Dragon's Roar Element Bonus (T0→T5)**: `25%` → `25%` → `25%` → `32.5%` → `32.5%` → `40%`
  - **Fire Dragon's Roar Cooldown (T0→T5)**: `20s` → `20s` → `20s` → `20s` → `20s` → `20s`

---
## หมวดที่ 4: โบนัสเซ็ตอุปกรณ์ (2 ชิ้น / 4 ชิ้น) และอาวุธที่มีเอฟเฟกต์ตอนต่อสู้

### Suit ID `[100]`
```json
{
  "tiers": [
    {
      "limitNum": 2,
      "fightValue": 0,
      "effects": {}
    },
    {
      "limitNum": 4,
      "fightValue": 750,
      "effects": {
        "101": {
          "buffId": 2401120,
          "params": [
            100
          ]
        },
        "102": {
          "buffId": 2401240,
          "params": [
            1000
          ]
        },
        "104": {
          "buffId": 2402130,
          "params": [
            1500,
            500
          ]
        },
        "105": {
          "buffId": 2402220,
          "params": [
            1000
          ]
        },
        "107": {
          "buffId": 2403130,
          "params": [
            100
          ]
        },
        "108": {
          "buffId": 2403210,
          "params": [
            100
          ]
        },
        "110": {
          "buffId": 2404140,
          "params": [
            2000,
            1000
          ]
        },
        "111": {
          "buffId": 2404210,
          "params": [
            0
          ]
        },
        "113": {
          "buffId": 2406140,
          "params": [
            300
          ]
        },
        "114": {
          "buffId": 2406240,
          "params": [
            3000
          ]
        },
        "116": {
          "buffId": 2405140,
          "params": [
            600
          ]
        },
        "117": {
          "buffId": 2405230,
          "params": [
            0
          ]
        },
        "119": {
          "buffId": 2408120,
          "params": [
            0
          ]
        },
        "120": {
          "buffId": 2408220,
          "params": [
            0
          ]
        },
        "122": {
          "buffId": 2407130,
          "params": [
            100,
            50
          ]
        },
        "123": {
          "buffId": 2407240,
          "params": [
            100
          ]
        },
        "128": {
          "buffId": 2409060,
          "params": [
            0
          ]
        },
        "129": {
          "buffId": 2409100,
          "params": [
            0
          ]
        }
      }
    }
  ]
}
```
### Suit ID `[101]`
```json
{
  "tiers": [
    {
      "limitNum": 2,
      "fightValue": 400,
      "effects": {
        "101": {
          "buffId": 2401130,
          "params": [
            0
          ]
        },
        "102": {
          "buffId": 2401260,
          "params": [
            0
          ]
        },
        "104": {
          "buffId": 2402140,
          "params": [
            0
          ]
        },
        "105": {
          "buffId": 2402260,
          "params": [
            0
          ]
        },
        "107": {
          "buffId": 2403140,
          "params": [
            0
          ]
        },
        "108": {
          "buffId": 2403280,
          "params": [
            0
          ]
        },
        "110": {
          "buffId": 2404150,
          "params": [
            0
          ]
        },
        "111": {
          "buffId": 2404260,
          "params": [
            0
          ]
        },
        "113": {
          "buffId": 2406150,
          "params": [
            0
          ]
        },
        "114": {
          "buffId": 2406270,
          "params": [
            0
          ]
        },
        "116": {
          "buffId": 2405150,
          "params": [
            0
          ]
        },
        "117": {
          "buffId": 2405260,
          "params": [
            0
          ]
        },
        "119": {
          "buffId": 2408130,
          "params": [
            0
          ]
        },
        "120": {
          "buffId": 2408260,
          "params": [
            0
          ]
        },
        "122": {
          "buffId": 2407140,
          "params": [
            0
          ]
        },
        "123": {
          "buffId": 2407280,
          "params": [
            0
          ]
        },
        "128": {
          "buffId": 2409070,
          "params": [
            0
          ]
        },
        "129": {
          "buffId": 2409110,
          "params": [
            0
          ]
        }
      }
    },
    {
      "limitNum": 4,
      "fightValue": 550,
      "effects": {
        "101": {
          "buffId": 2401140,
          "params": [
            0
          ]
        },
        "102": {
          "buffId": 2401270,
          "params": [
            0
          ]
        },
        "104": {
          "buffId": 2402150,
          "params": [
            0
          ]
        },
        "105": {
          "buffId": 2402270,
          "params": [
            0
          ]
        },
        "107": {
          "buffId": 2403150,
          "params": [
            0
          ]
        },
        "108": {
          "buffId": 2403270,
          "params": [
            0
          ]
        },
        "110": {
          "buffId": 2404160,
          "params": [
            0
          ]
        },
        "111": {
          "buffId": 2404270,
          "params": [
            0
          ]
        },
        "113": {
          "buffId": 2406160,
          "params": [
            0
          ]
        },
        "114": {
          "buffId": 2406280,
          "params": [
            0
          ]
        },
        "116": {
          "buffId": 2405160,
          "params": [
            0
          ]
        },
        "117": {
          "buffId": 2405250,
          "params": [
            0
          ]
        },
        "119": {
          "buffId": 2408140,
          "params": [
            0
          ]
        },
        "120": {
          "buffId": 2408270,
          "params": [
            0
          ]
        },
        "122": {
          "buffId": 2407150,
          "params": [
            0
          ]
        },
        "123": {
          "buffId": 2407290,
          "params": [
            0
          ]
        },
        "128": {
          "buffId": 2409080,
          "params": [
            0
          ]
        },
        "129": {
          "buffId": 2409120,
          "params": [
            0
          ]
        }
      }
    }
  ]
}
```
### Suit ID `[102]`
```json
{
  "tiers": [
    {
      "limitNum": 2,
      "fightValue": 400,
      "effects": {
        "101": {
          "buffId": 2401130,
          "params": [
            0
          ]
        },
        "102": {
          "buffId": 2401260,
          "params": [
            0
          ]
        },
        "104": {
          "buffId": 2402140,
          "params": [
            0
          ]
        },
        "105": {
          "buffId": 2402260,
          "params": [
            0
          ]
        },
        "107": {
          "buffId": 2403140,
          "params": [
            0
          ]
        },
        "108": {
          "buffId": 2403270,
          "params": [
            0
          ]
        },
        "110": {
          "buffId": 2404150,
          "params": [
            0
          ]
        },
        "111": {
          "buffId": 2404260,
          "params": [
            0
          ]
        },
        "113": {
          "buffId": 2406150,
          "params": [
            0
          ]
        },
        "114": {
          "buffId": 2406270,
          "params": [
            0
          ]
        },
        "116": {
          "buffId": 2405150,
          "params": [
            0
          ]
        },
        "117": {
          "buffId": 2405250,
          "params": [
            0
          ]
        },
        "119": {
          "buffId": 2408130,
          "params": [
            0
          ]
        },
        "120": {
          "buffId": 2408260,
          "params": [
            0
          ]
        },
        "122": {
          "buffId": 2407140,
          "params": [
            0
          ]
        },
        "123": {
          "buffId": 2407280,
          "params": [
            0
          ]
        },
        "128": {
          "buffId": 2409070,
          "params": [
            0
          ]
        },
        "129": {
          "buffId": 2409110,
          "params": [
            0
          ]
        }
      }
    },
    {
      "limitNum": 4,
      "fightValue": 550,
      "effects": {
        "101": {
          "buffId": 2401140,
          "params": [
            0
          ]
        },
        "102": {
          "buffId": 2401270,
          "params": [
            0
          ]
        },
        "104": {
          "buffId": 2402150,
          "params": [
            0
          ]
        },
        "105": {
          "buffId": 2402270,
          "params": [
            0
          ]
        },
        "107": {
          "buffId": 2403150,
          "params": [
            0
          ]
        },
        "108": {
          "buffId": 2403280,
          "params": [
            0
          ]
        },
        "110": {
          "buffId": 2404160,
          "params": [
            0
          ]
        },
        "111": {
          "buffId": 2404270,
          "params": [
            0
          ]
        },
        "113": {
          "buffId": 2406160,
          "params": [
            0
          ]
        },
        "114": {
          "buffId": 2406280,
          "params": [
            0
          ]
        },
        "116": {
          "buffId": 2405160,
          "params": [
            0
          ]
        },
        "117": {
          "buffId": 2405260,
          "params": [
            0
          ]
        },
        "119": {
          "buffId": 2408140,
          "params": [
            0
          ]
        },
        "120": {
          "buffId": 2408270,
          "params": [
            0
          ]
        },
        "122": {
          "buffId": 2407150,
          "params": [
            0
          ]
        },
        "123": {
          "buffId": 2407290,
          "params": [
            0
          ]
        },
        "128": {
          "buffId": 2409080,
          "params": [
            0
          ]
        },
        "129": {
          "buffId": 2409120,
          "params": [
            0
          ]
        }
      }
    }
  ]
}
```
### Suit ID `[103]`
```json
{
  "tiers": [
    {
      "limitNum": 2,
      "fightValue": 400,
      "effects": {
        "101": {
          "buffId": 2401110,
          "params": [
            1000
          ]
        },
        "102": {
          "buffId": 2401230,
          "params": [
            2000
          ]
        },
        "104": {
          "buffId": 2402110,
          "params": [
            1500
          ]
        },
        "105": {
          "buffId": 2402210,
          "params": [
            1000,
            500
          ]
        },
        "107": {
          "buffId": 2403120,
          "params": [
            800
          ]
        },
        "108": {
          "buffId": 2403220,
          "params": [
            1000
          ]
        },
        "110": {
          "buffId": 2404130,
          "params": [
            400
          ]
        },
        "111": {
          "buffId": 2404220,
          "params": [
            2000
          ]
        },
        "113": {
          "buffId": 2406110,
          "params": [
            2000
          ]
        },
        "114": {
          "buffId": 2406210,
          "params": [
            2000
          ]
        },
        "116": {
          "buffId": 2405130,
          "params": [
            3000
          ]
        },
        "117": {
          "buffId": 2405210,
          "params": [
            1500
          ]
        },
        "119": {
          "buffId": 2408110,
          "params": [
            1200
          ]
        },
        "120": {
          "buffId": 2408210,
          "params": [
            2000
          ]
        },
        "122": {
          "buffId": 2407110,
          "params": [
            1000,
            300
          ]
        },
        "123": {
          "buffId": 2407230,
          "params": [
            200,
            100
          ]
        },
        "128": {
          "buffId": 2409050,
          "params": [
            0
          ]
        },
        "129": {
          "buffId": 2409090,
          "params": [
            0
          ]
        }
      }
    },
    {
      "limitNum": 4,
      "fightValue": 550,
      "effects": {
        "101": {
          "buffId": 2401120,
          "params": [
            100
          ]
        },
        "102": {
          "buffId": 2401240,
          "params": [
            1000
          ]
        },
        "104": {
          "buffId": 2402130,
          "params": [
            1500,
            500
          ]
        },
        "105": {
          "buffId": 2402220,
          "params": [
            1000
          ]
        },
        "107": {
          "buffId": 2403130,
          "params": [
            100
          ]
        },
        "108": {
          "buffId": 2403210,
          "params": [
            100
          ]
        },
        "110": {
          "buffId": 2404140,
          "params": [
            2000,
            1000
          ]
        },
        "111": {
          "buffId": 2404210,
          "params": [
            0
          ]
        },
        "113": {
          "buffId": 2406140,
          "params": [
            300
          ]
        },
        "114": {
          "buffId": 2406240,
          "params": [
            3000
          ]
        },
        "116": {
          "buffId": 2405140,
          "params": [
            600
          ]
        },
        "117": {
          "buffId": 2405230,
          "params": [
            0
          ]
        },
        "119": {
          "buffId": 2408120,
          "params": [
            0
          ]
        },
        "120": {
          "buffId": 2408220,
          "params": [
            0
          ]
        },
        "122": {
          "buffId": 2407130,
          "params": [
            100,
            50
          ]
        },
        "123": {
          "buffId": 2407240,
          "params": [
            100
          ]
        },
        "128": {
          "buffId": 2409060,
          "params": [
            0
          ]
        },
        "129": {
          "buffId": 2409100,
          "params": [
            0
          ]
        }
      }
    }
  ]
}
```

---
## หมวดที่ 5: โมดูลทั้ง 21 ชนิด และผลลัพธ์ที่ระดับ Link Lv.1–6 (`moduleEffects` & `modules.json`)

- **`[1110]`**: `Strength Boost`
- **`[1111]`**: `Agility Boost`
- **`[1112]`**: `Intellect Boost`
- **`[1113]`**: `Special Attack`
- **`[1114]`**: `Elite Strike`
- **`[1205]`**: `Healing Boost`
- **`[1206]`**: `Healing Enhance`
- **`[1307]`**: `Resistance`
- **`[1308]`**: `Armor`
- **`[1407]`**: `Cast Focus`
- **`[1408]`**: `Attack SPD`
- **`[1409]`**: `Crit Focus`
- **`[1410]`**: `Luck Focus`
- **`[2104]`**: `DMG Stack`
- **`[2105]`**: `Agile`
- **`[2204]`**: `Life Condense`
- **`[2205]`**: `First Aid`
- **`[2304]`**: `Final Protection`
- **`[2404]`**: `Life Wave`
- **`[2405]`**: `Life Steal`
- **`[2406]`**: `Team Luck & Crit`

### โครงสร้างการคำนวณ Module Link Lv.1–6 จาก `moduleData.ts`:
```typescript
import modulesDataRaw from '../../data/modules.json';
import recommendIconSrcAsset from '../../assets/modules/mod_icon_recommend.png';
import modAttack5Src from '../../assets/modules/item_icons_mod_device_attack5.png';
import modSupport5Src from '../../assets/modules/item_icons_mod_device_5.png';
import modProtect5Src from '../../assets/modules/item_icons_device_protect5.png';
import type { ModuleSlots } from '../types';
import type { Profession } from '../profession';
import { createAssetMap } from '../assetMap';
import {
  MOD_ADAPTIVE_ATK_ATTR_ID,
  MOD_ADAPTIVE_MAIN_STAT_ATTR_ID,
  MOD_ATTR_TO_STAT,
  MOD_CAST_SPEED_FINAL_PCT_ATTR_ID,
  TALENT_ATK_SPEED_FINAL_PCT_ATTR_ID,
} from '../stats/attrMaps';

// 全属性攻撃力(モジュールのet=1加算のうち、rawStats.allAttrAtkへ特殊対応するattrId)。
// calculateRawStats.tsの同名の特殊分岐と対応を揃える(enchant側と同じ扱い)。
const MOD_ALL_ATTR_ATK_ATTR_ID = 11502;

export const recommendIconSrc = recommendIconSrcAsset;

// --- Asset globs ---
const modIcon = createAssetMap(
  import.meta.glob<{ default: string }>('../../assets/modules/item_mod_device*.png', {
    eager: true,
  }),
);
const effectIcon = createAssetMap(
  import.meta.glob<{ default: string }>('../../assets/modules/mod_effect_icon_*.png', {
    eager: true,
  }),
);
const emptySlotIcon = createAssetMap(
  import.meta.glob<{ default: string }>('../../assets/modules/mod_device_empty_*.png', {
    eager: true,
  }),
);
const qualityBg = createAssetMap(
  import.meta.glob<{ default: string }>('../../assets/ui/item_quality_*.png', { eager: true }),
);

export function getModIcon(modType: number, quality: number): string | undefined {
  if (quality === 4) {
    if (modType === 1) return modAttack5Src;
    if (modType === 2) return modSupport5Src;
    if (modType === 3) return modProtect5Src;
  }
  const prefix = modType === 1 ? 'attack' : modType === 3 ? 'protect' : '';
  const suffix = quality + 1;
  return modIcon(`item_mod_device_${prefix}${suffix}`);
}

export function getQualityBg(quality: number): string | undefined {
  const bgIdx = quality >= 3 ? 4 : quality + 1;
  return qualityBg(`item_quality_${bgIdx}`);
}

export function getEffectIcon(iconName: string): string | undefined {
  return effectIcon(iconName);
}

export function getEmptySlotIcon(n: number): string | undefined {
  return emptySlotIcon(`mod_device_empty_${Math.min(n, 6)}`);
}

export function getModHoles(quality: number): number {
  if (quality === 1) return 1;
  if (quality === 2) return 2;
  return 3;
}

// --- Data ---
interface ModDataEntry {
  id: number;
  modType: number;
  quality: number;
  holes: number;
}

interface EffectData {
  icon: string;
  levels: ([number, number, number[][], number[]] | null | undefined)[];
}

interface ModsData {
  mods: ModDataEntry[];
  effectsByType: Record<string, number[]>;
  effects: Record<string, EffectData>;
  linkEffects: [number, number, number[][]][];
  recommendedEffects: Record<string, Record<string, number[]>>;
}

export const modulesData = modulesDataRaw as unknown as ModsData;

export function getModById(modId: number): ModDataEntry | undefined {
  return modulesData.mods.find((m) => m.id === modId);
}

export const isExtremeEffect = (effectId: number | null): boolean =>
  effectId != null && Math.floor(effectId / 1000) === 2;

export const MAX_LINK = [10, 10, 5] as const;

export const STAT_ORDER = [
  'maxHp',
  'atk',
  'matk',
  'allAttrAtk',
  'physicalDef',
  'strength',
  'agility',
  'intellect',
  'endurance',
  'crit',
  'haste',
  'luck',
  'mastery',
  'versatility',
  'allAttrStr',
  'critDamageBonus',
  'critRecoveryBonus',
  'luckyHitDamageBonus',
  'luckyHitRecoveryBonus',
  'physicalReductionBonus',
  'magicalReductionBonus',
  'physicalDefIgnoreBonus',
];

// STAT_ORDER のうち、rawStatsへの実数値ポイント加算ではなく%表示(単位100=1%)になる
// もの(会心ダメージ/会心回復/幸運の一撃ダメージ率/回復の倍率/物理・魔法軽減/
// 物理防御力無視)。formatEffectDesc側のMOD_PCT_ATTR_IDSと対象は同じだが、
// こちらはStatId単位(装備効果合計欄の表示用)。
export const MOD_PCT_STAT_IDS = new Set<string>([
  'critDamageBonus',
  'critRecoveryBonus',
  'luckyHitDamageBonus',
  'luckyHitRecoveryBonus',
  'physicalReductionBonus',
  'magicalReductionBonus',
  'physicalDefIgnoreBonus',
]);

// --- Effect category classification ---
const EFFECT_MOD_TYPES: Map<number, Set<number>> = (() => {
  const map = new Map<number, Set<number>>();
  for (const [typeStr, ids] of Object.entries(modulesData.effectsByType)) {
    const t = parseInt(typeStr);
    for (const id of ids as number[]) {
      if (!map.has(id)) map.set(id, new Set());
      map.get(id)!.add(t);
    }
  }
  return map;
})();

export function getEffectCategory(effectId: number): number {
  const isExt = isExtremeEffect(effectId);
  const types = EFFECT_MOD_TYPES.get(effectId) ?? new Set<number>();
  const inDef = types.has(3),
    inSup = types.has(2),
    inAtk = types.has(1);
  const isDefOnly = inDef && !inSup && !inAtk;
  const isSuppOnly = inSup && !inDef && !inAtk;
  const isAtkOnly = inAtk && !inDef && !inSup;
  if (isExt) {
    if (isDefOnly) return 0;
    if (isSuppOnly) return 1;
    if (isAtkOnly) return 2;
    return 3;
  } else {
    if (isDefOnly) return 4;
    if (isSuppOnly) return 5;
    if (isAtkOnly) return 6;
    return 7;
  }
}

export function getMajorGroup(cat: number): number {
  return cat <= 3 ? 0 : cat;
}

// --- Description formatting ---

// et=1(通常のステータス加算)のうち、rawStatsへのポイント加算ではなく%表示(単位100=1%)
// になるattrId。攻撃速度/詠唱速度の%finalバリアント(11722/11732、StatIdを持たないため
// MOD_ATTR_TO_STATには含まれない)、会心ダメージ/会心回復(12512/12742)、
// 物理軽減/魔法軽減(12562/12582)、幸運の一撃ダメージ率/回復の倍率(12532/12722)、
// 物理防御力無視(11392)。後者はMOD_ATTR_TO_STAT経由のrawStats項目だが、
// 表示だけは他の%系ステータスと同様ここで変換する。
const MOD_PCT_ATTR_IDS = new Set<number>([
  11722, 11732, 12512, 12742, 12562, 12582, 12532, 12722, 11392,
]);

// 効果の説明文を行単位の配列で返す(呼び出し元で改行区切りに描画する)。
export function formatEffectDesc(
  config: number[][],
  ev: number[],
  tgAttrDesc: (key: string) => string,
  tgAttr: (key: string) => string,
  tStat: (key: string) => string,
): string[] {
  const parts: string[] = [];
  for (const [et, attrId, val] of config) {
    if (et === 1) {
      const sid = MOD_ATTR_TO_STAT[attrId];
      const name = sid ? tStat(sid) : tgAttr(String(attrId));
      const valueText = MOD_PCT_ATTR_IDS.has(attrId) ? `${(val / 100).toFixed(2)}%` : String(val);
      parts.push(`${name} +${valueText}`);
    } else if (et === 3) {
      const template = tgAttrDesc(String(attrId));
      if (template && !template.startsWith('attrDescs.')) {
        const desc = template.replace(/\{p(\d+)}/g, (_: string, n: string) => {
          const pval = ev[parseInt(n) - 1] ?? 0;
          return `${(pval / 100).toFixed(2)}%`;
        });
        parts.push(desc);
      }
    } else if (et === 5) {
      const template = tgAttrDesc(String(attrId));
      if (template && !template.startsWith('attrDescs.')) {
        parts.push(template.replace(/\{v}/g, String(val)));
      }
    }
  }
  return parts;
}

// --- Stats helpers ---

interface AchievedModuleEffect {
  effectId: number;
  level: number;
  config: number[][];
  ev: number[];
}

// 全ホールのリンクスタック数を effectId 別に集計し、各エフェクトが到達しているレベルの
// config(効果内容)/ev(表示用パラメータ)を返す。集計自体は collectEquippedEffects、
// レベル判定は getEffectLevel を共通利用する。
function getAchievedModuleEffects(moduleSlots: ModuleSlots): AchievedModuleEffect[] {
  const result: AchievedModuleEffect[] = [];
  for (const [effectId, totalLink] of collectEquippedEffects(moduleSlots)) {
    const level = getEffectLevel(effectId, totalLink);
    if (level === 0) continue;
    const lvData = modulesData.effects[String(effectId)]?.levels[level];
    if (!lvData) continue;
    result.push({ effectId, level, config: lvData[2], ev: lvData[3] ?? [] });
  }
  return result;
}

export interface ModuleTotalStatsResult {
  stats: Record<string, number>;
  // 攻撃速度/詠唱速度の%finalバリアント(calculateRawStatsのatkSpeedFinalPctAddend/
  // castSpeedFinalPctAddendと同じ単位: %そのままの数値)。StatId(rawStats)を持たないため
  // statsには含まれず、ここだけ別枠で返す。
  atkSpeedFinalPctAddend: number;
  castSpeedFinalPctAddend: number;
}

// 通常のステータス加算(et=1)に加え、「適応筋力/知力/敏捷」「適応物理/魔法攻撃力」(et=5)も
// クラスのメインステータス/攻撃タイプに応じた実ステータスへ合算する。
// calculateRawStats.tsの同名処理と対応を揃えること(全属性攻撃力の特殊対応、攻撃速度/
// 詠唱速度の%finalバリアントの個別集計)。
export function calcModuleTotalStats(
  moduleSlots: ModuleSlots,
  profession: Profession,
): ModuleTotalStatsResult {
  const stats: Record<string, number> = {};
  let atkSpeedFinalPctAddend = 0;
  let castSpeedFinalPctAddend = 0;
  const atkStatId = profession.attackType === 'physical' ? 'atk' : 'matk';
  for (const eff of getAchievedModuleEffects(moduleSlots)) {
    for (const [et, attrId, val] of eff.config) {
      if (et === 1 && attrId === MOD_ALL_ATTR_ATK_ATTR_ID) {
        stats.allAttrAtk = (stats.allAttrAtk ?? 0) + val;
      } else if (et === 1 && attrId === TALENT_ATK_SPEED_FINAL_PCT_ATTR_ID) {
        atkSpeedFinalPctAddend += val / 100;
      } else if (et === 1 && attrId === MOD_CAST_SPEED_FINAL_PCT_ATTR_ID) {
        castSpeedFinalPctAddend += val / 100;
      } else if (et === 1) {
        const sid = MOD_ATTR_TO_STAT[attrId];
        if (sid) stats[sid] = (stats[sid] ?? 0) + val;
      } else if (et === 5 && attrId === MOD_ADAPTIVE_MAIN_STAT_ATTR_ID) {
        stats[profession.mainStat] = (stats[profession.mainStat] ?? 0) + val;
      } else if (et === 5 && attrId === MOD_ADAPTIVE_ATK_ATTR_ID) {
        stats[atkStatId] = (stats[atkStatId] ?? 0) + val;
      }
    }
  }
  return { stats, atkSpeedFinalPctAddend, castSpeedFinalPctAddend };
}

export interface ModuleSpecialEffect {
  /** et:attrId をキーとした集約グループの一意キー(複数の効果が同じ属性を持つ場合に合算する単位)。 */
  key: string;
  icon: string | undefined;
  config: number[][];
  ev: number[];
}

// パワーコア効果のうち、通常のステータス加算(et=1)・適応ステータス/攻撃力(et=5)以外の
// 特殊効果(攻撃速度/詠唱速度/極HP変動/極幸運会心等)を抽出する。
// 同じ効果(et+attrId が同一)が複数のホールから発動している場合は値を合算して1件にまとめる。
// 「極」等の条件付き専用効果は attrId が他と重複しないため、自然に単独表示のまま保たれる。
export function calcModuleSpecialEffects(moduleSlots: ModuleSlots): ModuleSpecialEffect[] {
  const groups = new Map<
    string,
    { et: number; attrId: number; valSum: number; evSum: number[]; icon: string | undefined }
  >();
  for (const eff of getAchievedModuleEffects(moduleSlots)) {
    const effData = modulesData.effects[String(eff.effectId)];
    for (const [et, attrId, val] of eff.config) {
      if (et === 1) continue;
      if (
        et === 5 &&
        (attrId === MOD_ADAPTIVE_MAIN_STAT_ATTR_ID || attrId === MOD_ADAPTIVE_ATK_ATTR_ID)
      )
        continue;
      const key = `${et}:${attrId}`;
      let group = groups.get(key);
      if (!group) {
        group = { et, attrId, valSum: 0, evSum: [], icon: effData?.icon };
        groups.set(key, group);
      }
      group.valSum += val;
      eff.ev.forEach((v, i) => {
        group!.evSum[i] = (group!.evSum[i] ?? 0) + v;
      });
    }
  }
  return [...groups.values()].map((g) => ({
    key: `${g.et}:${g.attrId}`,
    icon: g.icon,
    config: [[g.et, g.attrId, g.valSum]],
    ev: g.evSum,
  }));
}

export function calcEffectTotalLink(effectId: number, moduleSlots: ModuleSlots): number {
  return collectEquippedEffects(moduleSlots).get(effectId) ?? 0;
}

export function getEffectLevel(effectId: number, totalLink: number): number {
  const effData = modulesData.effects[String(effectId)];
  if (!effData) return 0;
  for (let lv = effData.levels.length - 1; lv >= 1; lv--) {
    const lvData = effData.levels[lv];
    if (lvData && lvData[1] <= totalLink) return lv;
  }
  return 0;
}

export function calcGlobalLink(moduleSlots: ModuleSlots): number {
  let total = 0;
  for (const link of collectEquippedEffects(moduleSlots).values()) total += link;
  return total;
}

export function collectEquippedEffects(moduleSlots: ModuleSlots): Map<number, number> {
  const effectLinks = new Map<number, number>();
  for (const slot of moduleSlots) {
    if (!slot) continue;
    for (const h of slot.holes) {
      if (h.effectId != null)
        effectLinks.set(h.effectId, (effectLinks.get(h.effectId) ?? 0) + h.linkCount);
    }
  }
  return effectLinks;
}

```

---
## หมวดที่ 6: Deep Slumber Psychoscope ทั้ง 8 สาย (`seasonTalents` & `phantomData.ts`)

### 6.1 รายชื่อสาย Psychoscope ทั้ง 8 สาย:
- **Template `[1]`**: `"Fantasia Impact"`
- **Template `[2]`**: `"Phantom Execution"`
- **Template `[3]`**: `"Phantom Arrow"`
- **Template `[4]`**: `"Mirage Dream"`
- **Template `[5]`**: `"Dreamforce"`
- **Template `[6]`**: `"Oblivion Dream"`
- **Template `[7]`**: `"Shattered Illusion"`
- **Template `[8]`**: `"Endless Mind"`
- **Template `[20001]`**: `"Overload Crit"`
- **Template `[20002]`**: `"Torrent of Fate"`
- **Template `[20003]`**: `"Imagine Acceleration"`
- **Template `[20004]`**: `"Coordinated Strike"`
- **Template `[20005]`**: `"High-Energy Pulse"`
- **Template `[20006]`**: `"Mastery Boost"`

### 6.2 โหนดบัฟธรรมดา (`ordinaryEffects`):
- **`[1001]`**: `"Fantasia Impact"`
- **`[1002]`**: `"Linkage"`
- **`[1003]`**: `"Reconstruct"`
- **`[1004]`**: `"Time-Step"`
- **`[1005]`**: `"Multi-Phasic Strike"`
- **`[1006]`**: `"Ripple of Fate"`
- **`[1007]`**: `"Dual"`
- **`[1008]`**: `"Chrono Elixir"`
- **`[1009]`**: `"Blink Breath"`
- **`[1010]`**: `"Ultimate Fortune"`
- **`[1101]`**: `"Phantom Execution"`
- **`[1102]`**: `"Mirage Edge"`
- **`[1103]`**: `"Execution Force"`
- **`[1104]`**: `"Time-Slit"`
- **`[1105]`**: `"Instant"`
- **`[1106]`**: `"Nirvana Leap"`
- **`[1107]`**: `"Cinder of Reverie"`
- **`[1108]`**: `"Chrono Elixir"`
- **`[1109]`**: `"Blink Breath"`
- **`[1110]`**: `"Swift-Calc"`
- **`[1201]`**: `"Phantom Arrow"`
- **`[1202]`**: `"Dual Time"`
- **`[1203]`**: `"Dreamarrow Storm"`
- **`[1204]`**: `"Mirage Shot"`
- **`[1205]`**: `"Eightfold Skyflow"`
- **`[1206]`**: `"Beauty of Refinement"`
- **`[1207]`**: `"Phantom Pierce"`
- **`[1208]`**: `"Chrono Elixir"`
- **`[1209]`**: `"Blink Breath"`
- **`[1210]`**: `"Expert Technique"`

### 6.3 เอฟเฟกต์ขั้นบันไดจาก Bond Points (`advancedEffects`):
- **`[101]`**: `"General 1"`
- **`[102]`**: `"General 2"`
- **`[103]`**: `"General 3"`
- **`[104]`**: `"General 4"`
- **`[105]`**: `"General 5"`
- **`[106]`**: `"Fantasia Impact - Exclusive"`
- **`[107]`**: `"General 1"`
- **`[108]`**: `"General 2"`
- **`[109]`**: `"General 3"`
- **`[110]`**: `"General 4"`
- **`[111]`**: `"General 5"`
- **`[112]`**: `"Phantom Execution - Exclusive"`
- **`[113]`**: `"General 1"`
- **`[114]`**: `"General 2"`
- **`[115]`**: `"General 3"`
- **`[116]`**: `"General 4"`
- **`[117]`**: `"General 5"`
- **`[118]`**: `"Phantom Arrow - Exclusive"`
- **`[119]`**: `"General 1"`
- **`[120]`**: `"General 2"`
- **`[121]`**: `"General 3"`
- **`[122]`**: `"General 4"`
- **`[123]`**: `"General 5"`
- **`[124]`**: `"Mirage Dream - Exclusive"`
- **`[125]`**: `"General 1"`
- **`[126]`**: `"General 2"`
- **`[127]`**: `"General 3"`
- **`[128]`**: `"General 4"`
- **`[129]`**: `"General 5"`
- **`[130]`**: `"Dreamforce - Exclusive"`
- **`[131]`**: `"General 1"`
- **`[132]`**: `"General 2"`
- **`[133]`**: `"General 3"`
- **`[134]`**: `"General 4"`
- **`[135]`**: `"General 5"`
- **`[136]`**: `"Oblivion Dream - Exclusive"`
- **`[137]`**: `"General 1"`
- **`[138]`**: `"General 2"`
- **`[139]`**: `"General 3"`
- **`[140]`**: `"General 4"`
- **`[141]`**: `"General 5"`
- **`[142]`**: `"Shattered Illusion - Exclusive"`
- **`[143]`**: `"General 1"`
- **`[144]`**: `"General 2"`
- **`[145]`**: `"General 3"`
- **`[146]`**: `"General 4"`
- **`[147]`**: `"General 5"`
- **`[148]`**: `"Endless Mind - Exclusive"`

### โครงสร้างการคำนวณเอฟเฟกต์ Psychoscope & Bond Points จาก `phantomEffectSummary.ts`:
```typescript
import type { StatId } from '../types';
import { substituteEffectDescParams } from '../components/gameText';
import { PROFESSIONS } from '../profession';
import {
  BOND_BUFF_STAT_EFFECTS,
  FACTOR_POLARITY_EFFECTS,
  FACTOR_SINGLE_STAT_PCT_BONUS,
  IMAGINE_PCT_BASE,
  IMAGINE_PCT_FINAL,
  ORDINARY_EFFECT_BONUS,
  PHANTOM_ATTR_TO_STAT,
  PHANTOM_EFFECT_TYPE_POLARITY,
  PHANTOM_EFFECT_TYPE_STAT,
  type ImagineFinalStatId,
} from '../stats/attrMaps';
import type { PhantomFactorSlotValue, TreeStep, TreeStepKind } from './phantomData';
import {
  getActivePhantomNodeIds,
  getSTAsset,
  getUnlockLevel,
  iconPathToFile,
  isFactorClassLegacy,
  pfData,
  stData,
} from './phantomData';
import { factorBaseName, getNodeIcon, type GameDataT } from './phantomView';

// 効果一覧ダイアログ(合計セクション)専用の集計ロジック。calculateRawStats.ts の
// 潜在因子効果/絆レベル効果ブロックと同じ対応表(attrMaps.ts)を参照して独立に再集計する。
// 表示専用のため、他ソース(装備/アビリティ等)と混ざった合算値は扱わず、心相投影ツリー
// (固定ノード+因子スロット+絆レベル)由来の変化量のみを対象にする。絆レベル効果は
// BondBuffStatEffectの要素単位(1つのbuffIdが複数要素を持つ場合もそれぞれ独立)で振り分ける:
// static/final_pct/main_statはそのまま集計、highest_ofは対象ステータス未確定のため専用の
// highestOfBonusへ合算(表側で「5ステータス最大値へ加算」の1行として表示)、ratio_ofのみ
// (他ソース込みの現在のステータス値が必要で計算不能)実際のゲーム内説明文をそのまま
// 個別効果として表示する。

// pctBonus/finalPctと同じ単位規約(calculateRawStats.ts PERCENT_BASIS_POINTS): 10000 = 100%。
const PERCENT_BASIS_POINTS = 10000;

export interface PhantomStatDelta {
  statId: StatId;
  /** 平坦加算値(addStat相当)。 */
  flat: number;
  /** 基礎ステータス等への%乗算値、1/10000単位(addPctBonus相当)。 */
  pct: number;
  /** 収益逓減後の最終値への直接加算%、1/10000単位(phantomFinalPct相当)。 */
  finalPct: number;
}

export interface PhantomIndividualEffect {
  key: string;
  /** ノード名/因子名(表示用)。 */
  name: string;
  /** 効果説明文。ordinary由来は<br>等のタグを含む場合があるためrenderMarkupで描画すること。 */
  desc: string;
  /** ノード種別に応じたアイコンURL(getNodeIcon相当)。 */
  icon: string;
  /** 表示順ソートキー。初級(ordinary)は常に-1、中級(factor)は装着因子のtypeId
   * (1=極性/2=恒常性/3=第六感/4=クラス恒常性/5=クラス狂想/6=真実)。 */
  sortOrder: number;
}

export interface PhantomEffectTotals {
  statDeltas: PhantomStatDelta[];
  individualEffects: PhantomIndividualEffect[];
  /** 絆レベル効果の「会心/ファスト/幸運/器用さ/万能のうち最大値へ加算」の合計値(実数)。
   * 対象ステータスは他ソース込みの現在値次第で確定できないため、専用行として別に返す。 */
  highestOfBonus: number;
}

// 潜在Lv・現在の選択/因子装着状況から、心相投影ツリー由来のステータス変化を集計する。
// calculateRawStats.ts と異なり phantomEnabled(ON/OFF)は見ない(現在の設定内容そのものを
// 確認するためのダイアログのため、無効化中でも「有効にした場合の効果」を表示する)。
export function computePhantomEffectTotals(
  tg: GameDataT,
  // bpsr-bp-ui名前空間の翻訳関数。絆レベル効果の個別効果名(game-data側に該当キーが無いラベル)
  // でのみ使う。
  tUi: GameDataT,
  phantomTemplateId: number,
  phantomLevel: number,
  phantomNodeSelections: Record<number, number>,
  phantomFactorSlots: Record<number, PhantomFactorSlotValue | null>,
  professionId: number,
  phantomBondPoints: number,
): PhantomEffectTotals {
  const tmpl = stData.templates[String(phantomTemplateId)];
  if (!tmpl) return { statDeltas: [], individualEffects: [], highestOfBonus: 0 };

  const deltaMap = new Map<StatId, PhantomStatDelta>();
  const getDelta = (statId: StatId): PhantomStatDelta => {
    let entry = deltaMap.get(statId);
    if (!entry) {
      entry = { statId, flat: 0, pct: 0, finalPct: 0 };
      deltaMap.set(statId, entry);
    }
    return entry;
  };
  const addFlat = (statId: StatId, value: number) => {
    if (value === 0) return;
    getDelta(statId).flat += value;
  };
  const addPct = (statId: StatId, value: number) => {
    if (value === 0) return;
    getDelta(statId).pct += value;
  };
  const addFinalPct = (statId: StatId, value: number) => {
    if (value === 0) return;
    getDelta(statId).finalPct += value;
  };

  const individualEffects: PhantomIndividualEffect[] = [];

  const activeIds = getActivePhantomNodeIds(
    tmpl.rootNodeId,
    phantomTemplateId,
    phantomNodeSelections,
  );
  for (const nodeId of activeIds) {
    const node = stData.treeNodes[String(nodeId)];
    if (!node) continue;
    if (phantomLevel < getUnlockLevel(node.unlockCondition)) continue;

    if (node.nodeType === 1) {
      const oe = stData.ordinaryEffects[String(nodeId)];
      if (!oe) continue;
      const name = tg(`seasonTalents.ordinaryEffects.${nodeId}`);
      const icon = getNodeIcon(nodeId, 1);
      // type=1: calculateRawStats.ts では常に対象外(条件付き/スキル固有効果のため)。
      // 表示用にそのまま個別効果として列挙する。
      for (const e of oe.effects) {
        if (e[0] !== 1) continue;
        const attrName = tg(`attributes.${e[1]}`, { defaultValue: String(e[1]) });
        individualEffects.push({
          key: `ordinary-${nodeId}-attr-${e[1]}`,
          name,
          desc: `${attrName} +${e[2]}`,
          icon,
          sortOrder: -1,
        });
      }
      // type=3: ORDINARY_EFFECT_BONUS対応があれば集計、なければ説明文をそのまま個別表示。
      const idx3 = oe.effects.findIndex((e) => e[0] === 3);
      if (idx3 >= 0) {
        const buffId = oe.effects[idx3][1];
        const bonus = ORDINARY_EFFECT_BONUS[buffId];
        if (bonus) {
          if (bonus.kind === 'flat') addFlat(bonus.stat, bonus.value);
          else addFinalPct(bonus.stat, bonus.value);
        } else {
          const tmplStr = tg(`attrDescs.${buffId}`, { defaultValue: '' });
          if (tmplStr) {
            const pars = oe.buffPars[idx3] ?? [];
            individualEffects.push({
              key: `ordinary-${nodeId}-buff-${buffId}`,
              name,
              desc: substituteEffectDescParams(tmplStr, pars),
              icon,
              sortOrder: -1,
            });
          }
        }
      }
      continue;
    }

    if (node.nodeType !== 2) continue;
    const slot = phantomFactorSlots[node.groupId];
    if (!slot) continue;
    if (isFactorClassLegacy(slot.classKey)) continue;
    const factorClass = pfData.byClass[slot.classKey];
    if (!factorClass) continue;
    if (factorClass.professionIds.length > 0 && !factorClass.professionIds.includes(professionId))
      continue;
    const gradeData = factorClass.grades[slot.grade - 1];
    if (!gradeData) continue;

    const slotName = tg(`seasonTalents.intermediateSlots.${node.groupId}`);
    const name = `${slotName}: ${factorBaseName(tg, slot.classKey)} G${slot.grade}`;
    const icon = getNodeIcon(node.groupId, 2);
    // 極性(1)→恒常性(2)→第六感(3)→クラス恒常性(4)→クラス狂想(5)→真実(6)の順で
    // ソートするためのキー。装着中の因子クラス自身のtypeIdを使う(スロットの
    // factorTypesではなく、装着因子自体の分類で並べる)。
    const factorSortOrder = factorClass.typeId;

    for (const eff of gradeData.effects) {
      if (eff[0] !== PHANTOM_EFFECT_TYPE_STAT) continue;
      const [, attrId, value] = eff;
      const baseStatId = IMAGINE_PCT_BASE[attrId];
      if (baseStatId !== undefined) {
        addPct(baseStatId, value);
        continue;
      }
      const finalStatKey = IMAGINE_PCT_FINAL[attrId as ImagineFinalStatId];
      if (finalStatKey !== undefined) {
        addFinalPct(finalStatKey, value);
        continue;
      }
      const statId = PHANTOM_ATTR_TO_STAT[attrId];
      if (statId !== undefined) {
        addFlat(statId, value);
        continue;
      }
      const attrName = tg(`attributes.${attrId}`, { defaultValue: String(attrId) });
      individualEffects.push({
        key: `factor-${node.groupId}-attr-${attrId}`,
        name,
        desc: `${attrName} +${value}`,
        icon,
        sortOrder: factorSortOrder,
      });
    }

    for (let i = 0; i < gradeData.effects.length; i++) {
      const [effectType, buffId] = gradeData.effects[i];
      if (effectType !== PHANTOM_EFFECT_TYPE_POLARITY) continue;
      const polarity = FACTOR_POLARITY_EFFECTS[buffId];
      const pars = gradeData.buffPars?.[i] ?? [];
      if (polarity) {
        addPct(polarity.boostStat, pars[polarity.boostIdx] ?? 0);
        addPct(polarity.penaltyStat, -(pars[polarity.penaltyIdx] ?? 0));
        continue;
      }
      const singleStat = FACTOR_SINGLE_STAT_PCT_BONUS[buffId];
      if (singleStat) {
        addFinalPct(singleStat.stat, pars[singleStat.paramIndex] ?? 0);
        continue;
      }
      const tmplStr = tg(`attrDescs.${buffId}`, { defaultValue: '' });
      if (tmplStr) {
        individualEffects.push({
          key: `factor-${node.groupId}-buff-${buffId}`,
          name,
          desc: substituteEffectDescParams(tmplStr, pars, true),
          icon,
          sortOrder: factorSortOrder,
        });
      }
    }
  }

  // 絆レベル効果(上級ノード効果): レベル1〜5は全テンプレート共通・累積加算、レベル6のみ
  // テンプレート固有。calculateRawStats.tsの絆レベル効果ブロックと同じBOND_BUFF_STAT_EFFECTS
  // を、1つのbuffIdが持つ複数要素も独立に振り分ける(同じbuffId内でstatic+highest_ofが
  // 混在するケースがあり、staticだけを理由に丸ごと個別効果へフォールバックすると集計できる
  // 分まで説明文任せになってしまうため)。ratio_ofのみ(他ソース込みの現在のステータス値が
  // 必要で計算不能)、そのbuffId全体を実際のゲーム内説明文のまま個別効果として表示する。
  const mainStatId = Object.values(PROFESSIONS).find(
    (p) => p.professionId === professionId,
  )?.mainStat;
  let highestOfBonus = 0;
  const activeAdvEffects = Object.values(stData.advancedEffects).filter(
    (ae) => ae.effectId === tmpl.advancedEffectId && phantomBondPoints >= ae.unlockFraction,
  );
  for (const ae of activeAdvEffects) {
    const icon = getSTAsset(iconPathToFile(ae.icon));
    for (let i = 0; i < ae.effects.length; i++) {
      const [effectType, buffId] = ae.effects[i];
      if (effectType !== PHANTOM_EFFECT_TYPE_POLARITY) continue;
      const statEffects = BOND_BUFF_STAT_EFFECTS[buffId];
      const hasRatioOf = statEffects?.some((e) => e.type === 'ratio_of');
      if (statEffects && !hasRatioOf) {
        for (const eff of statEffects) {
          if (eff.type === 'static') addFlat(eff.stat, eff.value);
          else if (eff.type === 'final_pct') addFinalPct(eff.stat, eff.value);
          else if (eff.type === 'main_stat' && mainStatId) addFlat(mainStatId, eff.value);
          else if (eff.type === 'highest_of') highestOfBonus += eff.value;
        }
        continue;
      }
      const pars = ae.buffPars[i] ?? [];
      const tmplStr = tg(`attrDescs.${buffId}`, { defaultValue: '' });
      if (tmplStr) {
        individualEffects.push({
          key: `bond-${ae.level}-${buffId}`,
          name: tUi('buildPlanner.phantom.effectSummary.bondLevelLabel', { level: ae.level }),
          desc: substituteEffectDescParams(tmplStr, pars),
          icon,
          sortOrder: -2,
        });
      }
    }
  }

  // 上級(sortOrder=-2)→初級(sortOrder=-1)→中級(typeId昇順: 極性→恒常性→第六感→クラス恒常性→クラス狂想→真実)の順に整列。
  // Array.sortは安定ソートのため、同じsortOrder内の元の並び順(ノード出現順)は保たれる。
  individualEffects.sort((a, b) => a.sortOrder - b.sortOrder);

  return { statDeltas: [...deltaMap.values()], individualEffects, highestOfBonus };
}

export function formatPctDelta(rawValue: number): number {
  return rawValue / (PERCENT_BASIS_POINTS / 100);
}

// ---- 中級/初級ノード一覧(選択済みルート/未開放ルートの判定) ----

export type PhantomNodeRowStatus = 'active' | 'locked-level' | 'locked-route';

export interface PhantomNodeRow {
  nodeId: number;
  status: PhantomNodeRowStatus;
  /** treeSteps全体における出現順(1始まり)。PhantomNodeConfigのnumberedSlotNameと同じ採番。 */
  stepNum: number;
}

const ORDINARY_KINDS: TreeStepKind[] = ['fixed-ordinary', 'choice-ordinary'];
const FACTOR_KINDS: TreeStepKind[] = ['solo-factor', 'choice-factor-type', 'path-factor'];

// treeSteps(テンプレートの全ノードを網羅する構造。未選択の分岐先も含む)を走査し、
// 各ノードが「選択中で潜在Lvも十分(active)」「選択中だが潜在Lv不足(locked-level)」
// 「選択しなかったルート(locked-route)」のいずれかを判定する。
function computeNodeRows(
  treeSteps: TreeStep[],
  activeNodeIds: ReadonlySet<number>,
  levelUnlockedNodeIds: ReadonlySet<number>,
  phantomNodeSelections: Record<number, number>,
  kinds: TreeStepKind[],
): PhantomNodeRow[] {
  const rows: PhantomNodeRow[] = [];
  treeSteps.forEach((step, stepIdx) => {
    if (!kinds.includes(step.kind)) return;
    const stepNum = stepIdx + 1;
    if (step.kind === 'fixed-ordinary' || step.kind === 'solo-factor') {
      const nodeId = step.nodeIds[0];
      rows.push({
        nodeId,
        stepNum,
        status: levelUnlockedNodeIds.has(nodeId) ? 'active' : 'locked-level',
      });
      return;
    }
    let chosen: number | undefined;
    if (step.kind === 'path-factor') {
      const activeStepIds = step.nodeIds.filter((id) => activeNodeIds.has(id));
      if (activeStepIds.length === 0) {
        chosen = undefined;
      } else if (activeStepIds.length === 1) {
        chosen = activeStepIds[0];
      } else {
        const storedSel = phantomNodeSelections[step.sameGroupId];
        chosen =
          storedSel !== undefined && activeStepIds.includes(storedSel)
            ? storedSel
            : activeStepIds[0];
      }
    } else {
      chosen = phantomNodeSelections[step.sameGroupId] ?? step.nodeIds[0];
    }
    for (const nodeId of step.nodeIds) {
      if (nodeId === chosen) {
        rows.push({
          nodeId,
          stepNum,
          status: levelUnlockedNodeIds.has(nodeId) ? 'active' : 'locked-level',
        });
      } else {
        rows.push({ nodeId, stepNum, status: 'locked-route' });
      }
    }
  });
  return rows;
}

export function computeOrdinaryNodeRows(
  treeSteps: TreeStep[],
  activeNodeIds: ReadonlySet<number>,
  levelUnlockedNodeIds: ReadonlySet<number>,
  phantomNodeSelections: Record<number, number>,
): PhantomNodeRow[] {
  return computeNodeRows(
    treeSteps,
    activeNodeIds,
    levelUnlockedNodeIds,
    phantomNodeSelections,
    ORDINARY_KINDS,
  );
}

export function computeFactorNodeRows(
  treeSteps: TreeStep[],
  activeNodeIds: ReadonlySet<number>,
  levelUnlockedNodeIds: ReadonlySet<number>,
  phantomNodeSelections: Record<number, number>,
): PhantomNodeRow[] {
  return computeNodeRows(
    treeSteps,
    activeNodeIds,
    levelUnlockedNodeIds,
    phantomNodeSelections,
    FACTOR_KINDS,
  );
}

```

---
## หมวดที่ 7: บัฟอาหาร (Cooking Cuisine) และยา (Alchemy Serums) ใน `cookingBuff.ts`

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