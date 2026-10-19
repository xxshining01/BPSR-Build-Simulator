// ไฟล์: src/engine/stat-aggregator.ts
import {
  AttributeKey,
  AttributeKeyEnum,
  ClassId,
  EquipmentSlot,
  EquipmentSlotEnum,
  SpecId,
  UserBuildConfiguration,
} from "../data/schemas";
import {
  CLASS_ID_TO_PROFESSION_ID,
  GameDB,
  SLOT_TO_PART_ID,
  SPEC_ID_TO_STAGE_ID,
  ZTABLE_ATTR_TO_KEY,
} from "./game-db-loader";

// ============================================================================
// 1. OUTPUT INTERFACES (แบ่งเป็น 2 หน้าต่างตามสเปกผู้ใช้ 100%)
// ============================================================================
export interface SummaryWindowStats {
  maxHp: number;
  atk: number;
  matk: number;
  primaryStatKey: "strength" | "intellect" | "agility";
  primaryStatValue: number;
  strength: number;
  intellect: number;
  agility: number;
  endurance: number;
  illusionBreakingStrength: number;
  crit: { rating: number; percent: number };
  haste: { rating: number; percent: number };
  luck: { rating: number; percent: number };
  mastery: { rating: number; percent: number };
  versatility: { rating: number; percent: number; dmgHealBonusPct: number; dmgReductionPct: number };
  block: { rating: number; percent: number };
}

export interface FullAttributesWindowStats {
  offensive: {
    strength: number;
    intellect: number;
    agility: number;
    atk: number;
    matk: number;
    refinedAtk: number;
    refinedMatk: number;
    phyBoostPct: number;
    magBoostPct: number;
    attackSpdPct: number;
    castSpdPct: number;
    critDmgPct: number;
    luckyStrikeDmgMultPct: number;
  };
  defensive: {
    endurance: number;
    maxHp: number;
    armor: number;
    resistance: number;
    refinedArmor: number;
    atkReductionPct: number;
    matkReductionPct: number;
    blockDmgReductionPct: number;
  };
  support: {
    critHealingPct: number;
    luckyStrikeHealingPct: number;
    healingOutputPct: number;
    healingReceivedPct: number;
    shieldPct: number;
    shieldReceivePct: number;
  };
  elementalAttack: {
    allElementAtk: number;
    fireAtk: number;
    iceAtk: number;
    forestAtk: number;
    thunderAtk: number;
    windAtk: number;
    rockAtk: number;
    lightAtk: number;
    darkAtk: number;
  };
  elementalBonus: {
    allElement: number;
    allElementBonusPct: number;
    fire: number;
    fireBonusPct: number;
    ice: number;
    iceBonusPct: number;
    forest: number;
    forestBonusPct: number;
    thunder: number;
    thunderBonusPct: number;
    wind: number;
    windBonusPct: number;
    rock: number;
    rockBonusPct: number;
    light: number;
    lightBonusPct: number;
    dark: number;
    darkBonusPct: number;
  };
  elementResistance: {
    allElementRes: number;
    allElementResPct: number;
    fireRes: number;
    fireResPct: number;
    iceRes: number;
    iceResPct: number;
    forestRes: number;
    forestResPct: number;
    thunderRes: number;
    thunderResPct: number;
    windRes: number;
    windResPct: number;
    rockRes: number;
    rockResPct: number;
    lightRes: number;
    lightResPct: number;
    darkRes: number;
    darkResPct: number;
  };
  other: {
    staminaLimit: number;
    staminaRecovery: number;
  };
}

export interface CalculatedCharacterStatus {
  stateMode: "idle" | "combat";
  summaryWindow: SummaryWindowStats;
  fullAttributesWindow: FullAttributesWindowStats;
  rawMap: Record<AttributeKey, number>;
}

// ============================================================================
// 2. CLASS PROFILES & COEFFICIENTS (อ้างอิงจาก STATUS_CALCULATION.md & profession.ts)
// ============================================================================
interface ClassCombatCoefficients {
  primaryStat: "strength" | "intellect" | "agility";
  attackType: "physical" | "magical";
  baseMainToAtkRate: number;
  r1BonusMainToAtkRate: number;
  hpPerEndurance: number;
  atkSpdPerHastePct: number;
  castSpdPerHastePct: number;
  staminaRecoveryPerSec: number;
}

export const CLASS_COMBAT_PROFILES: Record<ClassId, ClassCombatCoefficients> = {
  blade_warden: {
    primaryStat: "agility",
    attackType: "physical",
    baseMainToAtkRate: 0.6,
    r1BonusMainToAtkRate: 0.125,
    hpPerEndurance: 6,
    atkSpdPerHastePct: 0.6,
    castSpdPerHastePct: 1.0,
    staminaRecoveryPerSec: 185,
  },
  marksman: {
    primaryStat: "agility",
    attackType: "physical",
    baseMainToAtkRate: 0.58,
    r1BonusMainToAtkRate: 0,
    hpPerEndurance: 6,
    atkSpdPerHastePct: 0.6,
    castSpdPerHastePct: 1.0,
    staminaRecoveryPerSec: 185,
  },
  wind_knight: {
    primaryStat: "strength",
    attackType: "physical",
    baseMainToAtkRate: 0.6,
    r1BonusMainToAtkRate: 0.125,
    hpPerEndurance: 6,
    atkSpdPerHastePct: 0.6,
    castSpdPerHastePct: 1.0,
    staminaRecoveryPerSec: 160,
  },
  twin_striker: {
    primaryStat: "strength",
    attackType: "physical",
    baseMainToAtkRate: 0.6,
    r1BonusMainToAtkRate: 0.125,
    hpPerEndurance: 6,
    atkSpdPerHastePct: 0.6,
    castSpdPerHastePct: 1.0,
    staminaRecoveryPerSec: 160,
  },
  heavy_guardian: {
    primaryStat: "strength",
    attackType: "physical",
    baseMainToAtkRate: 0.6,
    r1BonusMainToAtkRate: 0,
    hpPerEndurance: 12,
    atkSpdPerHastePct: 0.6,
    castSpdPerHastePct: 1.0,
    staminaRecoveryPerSec: 160,
  },
  shield_knight: {
    primaryStat: "strength",
    attackType: "physical",
    baseMainToAtkRate: 0.6,
    r1BonusMainToAtkRate: 0,
    hpPerEndurance: 12,
    atkSpdPerHastePct: 0.6,
    castSpdPerHastePct: 1.0,
    staminaRecoveryPerSec: 160,
  },
  spellcaster: {
    primaryStat: "intellect",
    attackType: "magical",
    baseMainToAtkRate: 0.5,
    r1BonusMainToAtkRate: 0.1,
    hpPerEndurance: 6.5,
    atkSpdPerHastePct: 0.2,
    castSpdPerHastePct: 2.0,
    staminaRecoveryPerSec: 240,
  },
  verdant_oracle: {
    primaryStat: "intellect",
    attackType: "magical",
    baseMainToAtkRate: 0.5,
    r1BonusMainToAtkRate: 0.1,
    hpPerEndurance: 6,
    atkSpdPerHastePct: 0.2,
    castSpdPerHastePct: 2.0,
    staminaRecoveryPerSec: 240,
  },
  beat_performer: {
    primaryStat: "intellect",
    attackType: "magical",
    baseMainToAtkRate: 0.5,
    r1BonusMainToAtkRate: 0.1,
    hpPerEndurance: 6,
    atkSpdPerHastePct: 0.6,
    castSpdPerHastePct: 2.0,
    staminaRecoveryPerSec: 240,
  },
};

// ============================================================================
// 3. DIMINISHING RETURNS & CONVERSION HELPERS (Season 3 Constants)
// ============================================================================
const K_SERIES_A = GameDB.seasonConstants?.diminishingA || 50000;
const K_SERIES_B = GameDB.seasonConstants?.diminishingVersatility || 28000;
const K_SERIES_C = GameDB.seasonConstants?.diminishingEnhance || 11000;
const K_SERIES_D = 22000; // S3 Defense Constant

export function calcDiminishingPercent(rating: number, k: number, basePercent = 0): number {
  if (rating <= 0) return basePercent;
  return basePercent + (100 * rating) / (rating + k);
}

/**
 * กฎการปัดเศษแยกส่วนตามเกมจริง (STATUS_CALCULATION.md ข้อ 3):
 * ต้องนำค่า基礎係数 (Base Rate) และ R1ボーナス係数 (R1 Bonus Rate) มาคูณแล้ว Math.floor แยกกันก่อนบวก
 */
export function convertBySeparatelyTruncatedRates(statValue: number, baseRate: number, bonusRate = 0): number {
  const basePart = Math.floor(statValue * baseRate);
  const bonusPart = bonusRate > 0 ? Math.floor(statValue * bonusRate) : 0;
  return basePart + bonusPart;
}

export function createEmptyStatMap(): Record<AttributeKey, number> {
  const map = {} as Record<AttributeKey, number>;
  for (const key of AttributeKeyEnum.options) {
    map[key] = 0;
  }
  // ค่าเริ่มต้นพื้นฐานที่ Lv.60 ตาม STATUS_CALCULATION.md
  map.critRatePct = 5.0;
  map.luckRatePct = 5.0;
  map.masteryPct = 6.0;
  map.critDmgPct = 150.0;        // แสดงผลรวม Base 100% + Bonus 50% (หรือเพิ่มจาก基礎 50%)
  map.critHealingPct = 150.0;
  map.luckyStrikeDmgMultPct = 40.0;
  map.luckyStrikeHealingPct = 40.0;
  map.blockDmgReductionPct = 30.0;
  map.staminaLimit = 1200;
  return map;
}

function addZTableAttr(
  flatMap: Record<AttributeKey, number>,
  pctMap: Record<AttributeKey, number>,
  attrId: number,
  rawVal: number
) {
  const mapped = ZTABLE_ATTR_TO_KEY[attrId];
  if (!mapped) return;
  const val = mapped.scaleDivisor ? rawVal / mapped.scaleDivisor : rawVal;
  if (mapped.isPercent && (mapped.key === "strength" || mapped.key === "intellect" || mapped.key === "agility")) {
    pctMap[mapped.key] += val;
  } else {
    flatMap[mapped.key] += val;
  }
}

// ============================================================================
// 4. MAIN STAT AGGREGATION ENGINE (Idle & Combat State @ Lv.60)
// ============================================================================
export function calculateCharacterStats(
  build: UserBuildConfiguration,
  stateMode: "idle" | "combat" = "idle"
): CalculatedCharacterStatus {
  const flat = createEmptyStatMap();
  const pctBonus = createEmptyStatMap();
  const profile = CLASS_COMBAT_PROFILES[build.classId];
  const stageId = String(SPEC_ID_TO_STAGE_ID[build.specId]);
  const profId = CLASS_ID_TO_PROFESSION_ID[build.classId];

  flat.staminaRecovery = profile.staminaRecoveryPerSec;

  // --------------------------------------------------------------------------
  // 4.1 สเตตัสพื้นฐานตัวละครที่ Lv.60 (ดึงจาก player-levels.json)
  // --------------------------------------------------------------------------
  const levelsArr = GameDB.playerLevels?.levels || [];
  for (const lvEntry of levelsArr) {
    if (lvEntry.level <= build.characterLevel) {
      for (const [attrId, val] of lvEntry.levelUpAttr || []) {
        addZTableAttr(flat, pctBonus, Number(attrId), Number(val));
      }
    }
  }

  // --------------------------------------------------------------------------
  // 4.2 อุปกรณ์ทั้ง 11 ชิ้น + ค่า Perfection (0-100%) + เซ็ตทะลุหลอด + Refine (0-30) + Sigils (Lv.1-3)
  // --------------------------------------------------------------------------
  let equippedGearCount = 0;
  const suitCounts: Record<string, number> = {};

  for (const slot of EquipmentSlotEnum.options) {
    const slotCfg = build.equipments?.[slot];
    if (!slotCfg || !slotCfg.equipmentTemplateId) continue;

    equippedGearCount++;
    const partId = SLOT_TO_PART_ID[slot];
    const eqData = GameDB.equipment?.[partId]?.[slotCfg.equipmentTemplateId];

    if (eqData) {
      // นับจำนวนชิ้นเซ็ต (Suit)
      if (eqData.suitId) {
        const sId = String(eqData.suitId);
        suitCounts[sId] = (suitCounts[sId] || 0) + 1;
      }

      // (ก) Base Stats ของอุปกรณ์
      for (const bs of eqData.baseStats || []) {
        const attrId = Number(bs[0]);
        const val = Number(bs[3] ?? bs[1] ?? 0);
        addZTableAttr(flat, pctBonus, attrId, val);
      }

      // (ข) กรณีเป็นอุปกรณ์เซ็ตที่ล็อกสเตตัสทะลุหลอดตามสายอาชีพ (fixedEvolutionStats)
      const fixedForSpec = eqData.fixedEvolutionStats?.[stageId];
      if (Array.isArray(fixedForSpec) && fixedForSpec.length > 0) {
        for (const fRow of fixedForSpec) {
          // โครงสร้าง: [type, attrId, rawMin, rawMax, isPct, realMin, realMax]
          const attrId = Number(fRow[1]);
          const val = Number(fRow[6] ?? fRow[3] ?? 0);
          addZTableAttr(flat, pctBonus, attrId, val);
        }
      } else {
        // (ค) กรณีเป็นอุปกรณ์ฟาร์ม/ทั่วไป คำนวณตามค่า Perfection (0 - 100%)
        const evoMin = Number(eqData.reforgeEvoMin || 0);
        const evoMax = Number(eqData.reforgeEvoMax || 0);
        const perfRatio = Math.max(0, Math.min(100, slotCfg.perfection ?? 100)) / 100;
        const evoValue = evoMin + (evoMax - evoMin) * perfRatio;

        for (const subStatKey of slotCfg.selectedSubStats || []) {
          flat[subStatKey] += evoValue;
        }
      }

      // (ง) ออปชันม่วง (Legendary Affix / Rare Attribute)
      if (slotCfg.selectedPurpleStat && Array.isArray(eqData.legendaryAffix)) {
        for (const la of eqData.legendaryAffix) {
          const mapped = ZTABLE_ATTR_TO_KEY[Number(la.attrId)];
          if (mapped && mapped.key === slotCfg.selectedPurpleStat) {
            const maxTierVal = Array.isArray(la.values) ? Number(la.values[la.values.length - 1] || 0) : 0;
            addZTableAttr(flat, pctBonus, Number(la.attrId), maxTierVal);
            break;
          }
        }
      }
    }

    // (จ) ระบบตีบวก Refine (0 - 30) จาก refine.json
    if (slotCfg.refineLevel > 0) {
      const refinePoolId = GameDB.refine?.partRefineIds?.[partId]?.[String(profId)] ??
        GameDB.refine?.partRefineIds?.[partId]?.["1"];
      const rawRefineSteps = GameDB.refine?.refineById?.[String(refinePoolId)];

      const refineStepsList = Array.isArray(rawRefineSteps)
        ? rawRefineSteps
        : rawRefineSteps && typeof rawRefineSteps === "object"
          ? Object.values(rawRefineSteps)
          : [];

      for (const step of refineStepsList as any[]) {
        if (Number(step.level) <= slotCfg.refineLevel) {
          for (const [attrId, val] of step.effects || []) {
            addZTableAttr(flat, pctBonus, Number(attrId), Number(val));
          }
        }
      }
    }

    // (ฉ) ระบบ Sigils / Enchants (Lv.1 Base, Lv.2 Refined 精, Lv.3 Perfect 極) จาก enchants.json
    if (slotCfg.sigilId) {
      for (const poolList of Object.values(GameDB.enchants)) {
        const foundSigil = poolList.find((item: any) => String(item.id) === String(slotCfg.sigilId));
        if (foundSigil) {
          let effArray = foundSigil.effects || [];
          if (slotCfg.sigilEmblemLevel === "2" && foundSigil.refined?.effects) {
            effArray = foundSigil.refined.effects;
          } else if (slotCfg.sigilEmblemLevel === "3" && foundSigil.perfect?.effects) {
            effArray = foundSigil.perfect.effects;
          }
          for (const [attrId, val] of effArray) {
            addZTableAttr(flat, pctBonus, Number(attrId), Number(val));
          }
          break;
        }
      }
    }
  }

  // กฎพิเศษจาก STATUS_CALCULATION.md ข้อ 2: เมื่อใส่อุปกรณ์ตั้งแต่ 6 ชิ้นขึ้นไป Max HP +2
  if (equippedGearCount >= 6) {
    flat.maxHp += 2;
  }

  // --------------------------------------------------------------------------
  // 4.3 Battle Imagines ทั้ง 2 ช่อง (ตามระดับ Tier 0 - 5) จาก battle-imagines.json
  // --------------------------------------------------------------------------
  for (const imgSlot of build.battleImagines || []) {
    if (!imgSlot?.imagineId) continue;
    const imgData = GameDB.imagines?.[String(imgSlot.imagineId)];
    if (!imgData) continue;

    const tierIdx = Math.max(0, Math.min(5, Number(imgSlot.tier ?? 5)));
    for (const pRow of imgData.passiveEffects || []) {
      const attrId = Number(pRow[0]);
      const valAtTier = Number(pRow[tierIdx + 1] ?? pRow[1] ?? 0);
      addZTableAttr(flat, pctBonus, attrId, valAtTier);
    }
  }

  // --------------------------------------------------------------------------
  // 4.4 โหนด Talent Tree ที่อัปไว้ จาก talent-tree.json
  // --------------------------------------------------------------------------
  const allTalentNodes = GameDB.talentTree?.nodes || {};
  for (const [nodeId, rank] of Object.entries(build.allocatedTalents || {})) {
    if (rank <= 0) continue;
    const nodeData = allTalentNodes[String(nodeId)];
    if (!nodeData) continue;

    for (const eff of nodeData.effects || []) {
      // โครงสร้าง: [effectType, attrId, value]
      if (eff[0] === 1 && eff.length >= 3) {
        addZTableAttr(flat, pctBonus, Number(eff[1]), Number(eff[2]) * rank);
      }
    }
  }

  // --------------------------------------------------------------------------
  // 4.5 ระบบ Modules ทั้ง 5 ช่อง และแต้มรวม Link Level (Lv.1-6 ที่แต้ม 1, 4, 8, 12, 16, 20)
  // --------------------------------------------------------------------------
  const modulePointsByEffectId: Record<string, number> = {};
  for (const modSlot of build.modules || []) {
    for (const effRow of modSlot.effects || []) {
      modulePointsByEffectId[effRow.effectId] =
        (modulePointsByEffectId[effRow.effectId] || 0) + effRow.points;
    }
  }

  // คำนวณโบนัสจาก Link Thresholds [1, 4, 8, 12, 16, 20]
  const thresholds = [1, 4, 8, 12, 16, 20];
  for (const [effKey, totalPts] of Object.entries(modulePointsByEffectId)) {
    let unlockedLinkLv = 0;
    for (let i = 0; i < thresholds.length; i++) {
      if (totalPts >= thresholds[i]) unlockedLinkLv = i + 1;
    }
    if (unlockedLinkLv > 0) {
      // บวกโบนัสสเตตัสตามประเภท Module Effect
      if (effKey === "strength_boost") {
        flat.strength += totalPts * 12;
        if (unlockedLinkLv >= 6) flat.armorPenetrationPct += 18.8;
      } else if (effKey === "agility_boost") {
        flat.agility += totalPts * 12;
      } else if (effKey === "intellect_boost") {
        flat.intellect += totalPts * 12;
      } else if (effKey === "crit_focus") {
        flat.critDmgPct += unlockedLinkLv * 2.0;
        flat.critHealingPct += unlockedLinkLv * 2.0;
      } else if (effKey === "attack_spd") {
        flat.attackSpdPct += unlockedLinkLv * 1.2;
      } else if (effKey === "cast_focus") {
        flat.castSpdPct += unlockedLinkLv * 1.5;
      } else if (effKey === "elite_strike") {
        flat.eliteBossDmgBonusPct += unlockedLinkLv * 1.8;
      } else if (effKey === "special_attack") {
        flat.specialAttackDmgBonusPct += unlockedLinkLv * 2.0;
      } else if (effKey === "healing_enhance" || effKey === "healing_boost") {
        flat.healingOutputPct += unlockedLinkLv * 2.2;
      } else if (effKey === "armor") {
        flat.armor += totalPts * 45;
      } else if (effKey === "resistance") {
        flat.resistance += totalPts * 45;
      }
    }
  }

  // --------------------------------------------------------------------------
  // 4.6 Deep Slumber Psychoscope (โหนดบัฟ + Factor G10 + Bond Points 3-55)
  // --------------------------------------------------------------------------
  if (build.psychoscope) {
    // (ก) โหนดบัฟบน Tree Map (ordinaryEffects)
    for (const [nodeId, optId] of Object.entries(build.psychoscope.activeBuffChoices || {})) {
      const ordEff = GameDB.seasonTalents?.ordinaryEffects?.[String(optId || nodeId)];
      if (ordEff && Array.isArray(ordEff.effects)) {
        for (const [attrId, val] of ordEff.effects) {
          addZTableAttr(flat, pctBonus, Number(attrId), Number(val));
        }
      }
    }

    // (ข) Factor G10 ที่ติดตั้งในช่อง Socket
    for (const factorId of Object.values(build.psychoscope.equippedFactorsG10 || {})) {
      for (const factorGroup of Object.values(GameDB.phantomFactors?.byClass || {})) {
        const g10 = (factorGroup as any).grades?.find((g: any) => String(g.id) === String(factorId));
        if (g10) {
          for (const eff of g10.effects || []) {
            if (eff[0] === 1 && eff.length >= 3) {
              addZTableAttr(flat, pctBonus, Number(eff[1]), Number(eff[2]));
            }
          }
        }
      }
    }
  }

  // --------------------------------------------------------------------------
  // 4.7 คำนวณ Primary Stats สุทธิ และการแปลงเป็น ATK / MATK / DEF / Haste / HP
  // --------------------------------------------------------------------------
  const finalStr = Math.floor(flat.strength * (1 + pctBonus.strength / 100));
  const finalInt = Math.floor(flat.intellect * (1 + pctBonus.intellect / 100));
  const finalAgi = Math.floor(flat.agility * (1 + pctBonus.agility / 100));
  const finalEnd = Math.floor(flat.endurance);

  flat.strength = finalStr;
  flat.intellect = finalInt;
  flat.agility = finalAgi;
  flat.endurance = finalEnd;

  // แปลง Endurance -> Max HP (ใช้ Math.round สำหรับ Max HP ตาม STATUS_CALCULATION.md ข้อ 2)
  flat.maxHp = Math.round(flat.maxHp + finalEnd * profile.hpPerEndurance);

  // แปลง Strength -> Physical Defense (+0.2/pt), Intellect -> Magical Resistance (+0.5/pt), Agility -> Haste (+0.8/pt)
  flat.armor = Math.floor(flat.armor + finalStr * 0.2);
  flat.resistance = Math.floor(flat.resistance + finalInt * 0.5);
  flat.haste = Math.floor(flat.haste + Math.floor(finalAgi * 0.8));

  // แปลง Main Stat -> ATK หรือ MATK ตามอาชีพ (ใช้ convertBySeparatelyTruncatedRates)
  const mainStatVal = flat[profile.primaryStat];
  const convertedAttack = convertBySeparatelyTruncatedRates(
    mainStatVal,
    profile.baseMainToAtkRate,
    profile.r1BonusMainToAtkRate
  );

  if (profile.attackType === "physical") {
    flat.atk = Math.floor(flat.atk + convertedAttack);
  } else {
    flat.matk = Math.floor(flat.matk + convertedAttack);
  }

  // --------------------------------------------------------------------------
  // 4.8 แปลงแต้ม Rating เป็น Percentage ตามสมการ Diminishing Returns (Season 3)
  // --------------------------------------------------------------------------
  flat.critRatePct = calcDiminishingPercent(flat.crit, K_SERIES_A, 5.0);
  flat.hastePct = calcDiminishingPercent(flat.haste, K_SERIES_A, 0.0); // S3 Base Haste = 0%
  flat.luckRatePct = calcDiminishingPercent(flat.luck, K_SERIES_A, 5.0);
  flat.masteryPct = calcDiminishingPercent(flat.mastery, K_SERIES_A, 6.0);
  flat.blockRatePct = calcDiminishingPercent(flat.block, K_SERIES_A, 0.0);
  flat.versatilityPct = calcDiminishingPercent(flat.versatility, K_SERIES_B, 0.0);

  // แปลง Haste % -> Attack SPD % และ Cast Speed % ตามสัมประสิทธิ์อาชีพ
  flat.attackSpdPct += flat.hastePct * profile.atkSpdPerHastePct;
  flat.castSpdPct += flat.hastePct * profile.castSpdPerHastePct;

  // แปลง Luck % -> Lucky Strike DMG Multiplier % & Healing % (พื้นฐาน 40% + 0.25 * Luck%)
  flat.luckyStrikeDmgMultPct += 0.25 * flat.luckRatePct;
  flat.luckyStrikeHealingPct += 0.25 * flat.luckRatePct;

  // แปลง Armor, Resistance, Refined Armor -> Reduction % (Series D: K = 22000)
  flat.atkReductionPct += calcDiminishingPercent(flat.armor, K_SERIES_D, 0.0);
  flat.matkReductionPct += calcDiminishingPercent(flat.resistance, K_SERIES_D, 0.0);

  // แปลงแต้มธาตุ -> Element Bonus % และ Element Resistance % (Series C: K = 11000)
  flat.allElementBonusPct += calcDiminishingPercent(flat.allElement, K_SERIES_C, 0);
  flat.fireBonusPct += calcDiminishingPercent(flat.fire, K_SERIES_C, 0);
  flat.iceBonusPct += calcDiminishingPercent(flat.ice, K_SERIES_C, 0);
  flat.forestBonusPct += calcDiminishingPercent(flat.forest, K_SERIES_C, 0);
  flat.thunderBonusPct += calcDiminishingPercent(flat.thunder, K_SERIES_C, 0);
  flat.windBonusPct += calcDiminishingPercent(flat.wind, K_SERIES_C, 0);
  flat.rockBonusPct += calcDiminishingPercent(flat.rock, K_SERIES_C, 0);
  flat.lightBonusPct += calcDiminishingPercent(flat.light, K_SERIES_C, 0);
  flat.darkBonusPct += calcDiminishingPercent(flat.dark, K_SERIES_C, 0);

  flat.allElementResPct += calcDiminishingPercent(flat.allElementRes, K_SERIES_C, 0);
  flat.fireResPct += calcDiminishingPercent(flat.fireRes, K_SERIES_C, 0);
  flat.iceResPct += calcDiminishingPercent(flat.iceRes, K_SERIES_C, 0);
  flat.forestResPct += calcDiminishingPercent(flat.forestRes, K_SERIES_C, 0);
  flat.thunderResPct += calcDiminishingPercent(flat.thunderRes, K_SERIES_C, 0);
  flat.windResPct += calcDiminishingPercent(flat.windRes, K_SERIES_C, 0);
  flat.rockResPct += calcDiminishingPercent(flat.rockRes, K_SERIES_C, 0);
  flat.lightResPct += calcDiminishingPercent(flat.lightRes, K_SERIES_C, 0);
  flat.darkResPct += calcDiminishingPercent(flat.darkRes, K_SERIES_C, 0);

  // --------------------------------------------------------------------------
  // 4.9 จัดรูปแบบผลลัพธ์ออกเป็น 2 หน้าต่าง (1. Summary Window & 2. Full Attributes Window)
  // --------------------------------------------------------------------------
  const summaryWindow: SummaryWindowStats = {
    maxHp: flat.maxHp,
    atk: flat.atk,
    matk: flat.matk,
    primaryStatKey: profile.primaryStat,
    primaryStatValue: flat[profile.primaryStat],
    strength: flat.strength,
    intellect: flat.intellect,
    agility: flat.agility,
    endurance: flat.endurance,
    illusionBreakingStrength: flat.illusionBreakingStrength,
    crit: { rating: Math.floor(flat.crit), percent: Number(flat.critRatePct.toFixed(2)) },
    haste: { rating: Math.floor(flat.haste), percent: Number(flat.hastePct.toFixed(2)) },
    luck: { rating: Math.floor(flat.luck), percent: Number(flat.luckRatePct.toFixed(2)) },
    mastery: { rating: Math.floor(flat.mastery), percent: Number(flat.masteryPct.toFixed(2)) },
    versatility: {
      rating: Math.floor(flat.versatility),
      percent: Number(flat.versatilityPct.toFixed(2)),
      dmgHealBonusPct: Number((flat.versatilityPct * 0.35).toFixed(2)),
      dmgReductionPct: Number((flat.versatilityPct * 0.15).toFixed(2)),
    },
    block: { rating: Math.floor(flat.block), percent: Number(flat.blockRatePct.toFixed(2)) },
  };

  const fullAttributesWindow: FullAttributesWindowStats = {
    offensive: {
      strength: flat.strength,
      intellect: flat.intellect,
      agility: flat.agility,
      atk: flat.atk,
      matk: flat.matk,
      refinedAtk: flat.refinedAtk,
      refinedMatk: flat.refinedMatk,
      phyBoostPct: Number(flat.phyBoostPct.toFixed(2)),
      magBoostPct: Number(flat.magBoostPct.toFixed(2)),
      attackSpdPct: Number(flat.attackSpdPct.toFixed(2)),
      castSpdPct: Number(flat.castSpdPct.toFixed(2)),
      critDmgPct: Number(flat.critDmgPct.toFixed(2)),
      luckyStrikeDmgMultPct: Number(flat.luckyStrikeDmgMultPct.toFixed(2)),
    },
    defensive: {
      endurance: flat.endurance,
      maxHp: flat.maxHp,
      armor: flat.armor,
      resistance: flat.resistance,
      refinedArmor: flat.refinedArmor,
      atkReductionPct: Number(flat.atkReductionPct.toFixed(2)),
      matkReductionPct: Number(flat.matkReductionPct.toFixed(2)),
      blockDmgReductionPct: Number(flat.blockDmgReductionPct.toFixed(2)),
    },
    support: {
      critHealingPct: Number(flat.critHealingPct.toFixed(2)),
      luckyStrikeHealingPct: Number(flat.luckyStrikeHealingPct.toFixed(2)),
      healingOutputPct: Number(flat.healingOutputPct.toFixed(2)),
      healingReceivedPct: Number(flat.healingReceivedPct.toFixed(2)),
      shieldPct: Number(flat.shieldPct.toFixed(2)),
      shieldReceivePct: Number(flat.shieldReceivePct.toFixed(2)),
    },
    elementalAttack: {
      allElementAtk: flat.allElementAtk,
      fireAtk: flat.fireAtk,
      iceAtk: flat.iceAtk,
      forestAtk: flat.forestAtk,
      thunderAtk: flat.thunderAtk,
      windAtk: flat.windAtk,
      rockAtk: flat.rockAtk,
      lightAtk: flat.lightAtk,
      darkAtk: flat.darkAtk,
    },
    elementalBonus: {
      allElement: flat.allElement,
      allElementBonusPct: Number(flat.allElementBonusPct.toFixed(2)),
      fire: flat.fire,
      fireBonusPct: Number(flat.fireBonusPct.toFixed(2)),
      ice: flat.ice,
      iceBonusPct: Number(flat.iceBonusPct.toFixed(2)),
      forest: flat.forest,
      forestBonusPct: Number(flat.forestBonusPct.toFixed(2)),
      thunder: flat.thunder,
      thunderBonusPct: Number(flat.thunderBonusPct.toFixed(2)),
      wind: flat.wind,
      windBonusPct: Number(flat.windBonusPct.toFixed(2)),
      rock: flat.rock,
      rockBonusPct: Number(flat.rockBonusPct.toFixed(2)),
      light: flat.light,
      lightBonusPct: Number(flat.lightBonusPct.toFixed(2)),
      dark: flat.dark,
      darkBonusPct: Number(flat.darkBonusPct.toFixed(2)),
    },
    elementResistance: {
      allElementRes: flat.allElementRes,
      allElementResPct: Number(flat.allElementResPct.toFixed(2)),
      fireRes: flat.fireRes,
      fireResPct: Number(flat.fireResPct.toFixed(2)),
      iceRes: flat.iceRes,
      iceResPct: Number(flat.iceResPct.toFixed(2)),
      forestRes: flat.forestRes,
      forestResPct: Number(flat.forestResPct.toFixed(2)),
      thunderRes: flat.thunderRes,
      thunderResPct: Number(flat.thunderResPct.toFixed(2)),
      windRes: flat.windRes,
      windResPct: Number(flat.windResPct.toFixed(2)),
      rockRes: flat.rockRes,
      rockResPct: Number(flat.rockResPct.toFixed(2)),
      lightRes: flat.lightRes,
      lightResPct: Number(flat.lightResPct.toFixed(2)),
      darkRes: flat.darkRes,
      darkResPct: Number(flat.darkResPct.toFixed(2)),
    },
    other: {
      staminaLimit: flat.staminaLimit,
      staminaRecovery: flat.staminaRecovery,
    },
  };

  return {
    stateMode,
    summaryWindow,
    fullAttributesWindow,
    rawMap: flat,
  };
}