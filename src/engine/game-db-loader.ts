// ไฟล์: src/engine/game-db-loader.ts
import classesRaw from "../data/game-db/classes.json";
import skillsRaw from "../data/game-db/skills.json";
import skillFightValuesRaw from "../data/game-db/skill-fight-values.json";
import talentTreeRaw from "../data/game-db/talent-tree.json";
import equipmentRaw from "../data/game-db/equipment.json";
import suitsRaw from "../data/game-db/suits.json";
import refineRaw from "../data/game-db/refine.json";
import enchantsRaw from "../data/game-db/enchants.json";
import imaginesRaw from "../data/game-db/battle-imagines.json";
import modulesRaw from "../data/game-db/modules.json";
import seasonTalentsRaw from "../data/game-db/season-talents.json";
import phantomFactorsRaw from "../data/game-db/phantom-factors.json";
import seasonConstantsRaw from "../data/game-db/season-constants.json";
import localeEnRaw from "../data/locales/en_US/game-data.json";
import { AttributeKey, ClassId, EquipmentSlot, SpecId } from "../data/schemas";

export const GameDB = {
  classes: classesRaw as Record<string, any>,
  skills: skillsRaw as Record<string, any>,
  skillFightValues: skillFightValuesRaw as Record<string, number[]>,
  talentTree: talentTreeRaw as Record<string, any>,
  equipment: equipmentRaw as Record<string, Record<string, any>>,
  suits: suitsRaw as Record<string, any>,
  refine: refineRaw as Record<string, any>,
  enchants: enchantsRaw as Record<string, any[]>,
  imagines: imaginesRaw as Record<string, any>,
  modules: modulesRaw as Record<string, any>,
  seasonTalents: seasonTalentsRaw as Record<string, any>,
  phantomFactors: phantomFactorsRaw as Record<string, any>,
  seasonConstants: seasonConstantsRaw as {
    diminishingA: number;
    diminishingVersatility: number;
    diminishingEnhance: number;
  },
  localeEn: localeEnRaw as Record<string, Record<string, any>>,
};

// ============================================================================
// 1. ZTABLE ATTR_ID -> ATTRIBUTE_KEY MAPPING (อ้างอิงจาก attrMaps.ts และ ZTable)
// ============================================================================
export const ZTABLE_ATTR_TO_KEY: Record<number, { key: AttributeKey; isPercent?: boolean; scaleDivisor?: number }> = {
  // Primary Stats
  11010: { key: "strength" },
  11012: { key: "strength" },
  11014: { key: "strength", isPercent: true, scaleDivisor: 100 },
  11020: { key: "intellect" },
  11022: { key: "intellect" },
  11024: { key: "intellect", isPercent: true, scaleDivisor: 100 },
  11030: { key: "agility" },
  11032: { key: "agility" },
  11034: { key: "agility", isPercent: true, scaleDivisor: 100 },
  11040: { key: "endurance" },
  11042: { key: "endurance" },
  11044: { key: "endurance" },

  // Secondary Combat Ratings
  11110: { key: "crit" },
  11112: { key: "crit" },
  11120: { key: "haste" },
  11122: { key: "haste" },
  11130: { key: "luck" },
  11132: { key: "luck" },
  11140: { key: "mastery" },
  11142: { key: "mastery" },
  11150: { key: "versatility" },
  11152: { key: "versatility" },
  11160: { key: "block" },
  11162: { key: "block" },

  // Core Offensive & Defensive
  11310: { key: "maxHp" },
  11312: { key: "maxHp" },
  11330: { key: "atk" },
  11332: { key: "atk" },
  11340: { key: "matk" },
  11342: { key: "matk" },
  11350: { key: "armor" },
  11352: { key: "armor" },
  11360: { key: "resistance" },
  11362: { key: "resistance" },
  11372: { key: "refinedAtk" },
  11382: { key: "refinedMatk" },
  11392: { key: "refinedArmor" },
  11402: { key: "illusionBreakingStrength" },

  // Speed, Crit DMG, Lucky Strike & Support (Scale /100 = %)
  11712: { key: "critDmgPct", isPercent: true, scaleDivisor: 100 },
  11722: { key: "attackSpdPct", isPercent: true, scaleDivisor: 100 },
  11732: { key: "castSpdPct", isPercent: true, scaleDivisor: 100 },
  11742: { key: "luckyStrikeDmgMultPct", isPercent: true, scaleDivisor: 100 },
  11752: { key: "critHealingPct", isPercent: true, scaleDivisor: 100 },
  11782: { key: "luckyStrikeHealingPct", isPercent: true, scaleDivisor: 100 },
  11792: { key: "healingOutputPct", isPercent: true, scaleDivisor: 100 },
  11802: { key: "healingReceivedPct", isPercent: true, scaleDivisor: 100 },
  11812: { key: "shieldPct", isPercent: true, scaleDivisor: 100 },
  11822: { key: "shieldReceivePct", isPercent: true, scaleDivisor: 100 },
  12542: { key: "blockDmgReductionPct", isPercent: true, scaleDivisor: 100 },
  12632: { key: "eliteBossDmgBonusPct", isPercent: true, scaleDivisor: 100 },

  // Elemental Attack & Bonus
  11502: { key: "allElementAtk" },
  11512: { key: "fireAtk" },
  11522: { key: "iceAtk" },
  11532: { key: "forestAtk" },
  11542: { key: "thunderAtk" },
  11552: { key: "windAtk" },
  11562: { key: "rockAtk" },
  11572: { key: "lightAtk" },
  11582: { key: "darkAtk" },

  13002: { key: "allElement" },
  13012: { key: "fire" },
  13022: { key: "ice" },
  13032: { key: "forest" },
  13042: { key: "thunder" },
  13052: { key: "wind" },
  13062: { key: "rock" },
  13072: { key: "light" },
  13082: { key: "dark" },

  13102: { key: "allElementBonusPct", isPercent: true, scaleDivisor: 100 },
  13112: { key: "fireBonusPct", isPercent: true, scaleDivisor: 100 },
  13122: { key: "iceBonusPct", isPercent: true, scaleDivisor: 100 },
  13132: { key: "forestBonusPct", isPercent: true, scaleDivisor: 100 },
  13142: { key: "thunderBonusPct", isPercent: true, scaleDivisor: 100 },
  13152: { key: "windBonusPct", isPercent: true, scaleDivisor: 100 },
  13162: { key: "rockBonusPct", isPercent: true, scaleDivisor: 100 },
  13172: { key: "lightBonusPct", isPercent: true, scaleDivisor: 100 },
  13182: { key: "darkBonusPct", isPercent: true, scaleDivisor: 100 },

  // Elemental Resistance
  13202: { key: "allElementRes" },
  13212: { key: "fireRes" },
  13222: { key: "iceRes" },
  13232: { key: "forestRes" },
  13242: { key: "thunderRes" },
  13252: { key: "windRes" },
  13262: { key: "rockRes" },
  13272: { key: "lightRes" },
  13282: { key: "darkRes" },
};

// ============================================================================
// 2. EQUIPMENT PART ID (200-210) <-> EQUIPMENT SLOT MAPPING
// ============================================================================
export const SLOT_TO_PART_ID: Record<EquipmentSlot, string> = {
  weapon: "200",
  head: "201",
  chest: "202",
  gloves: "203",
  boots: "204",
  earrings: "205",
  necklace: "206",
  ring: "207",
  bracelet_left: "208",
  bracelet_right: "209",
  charm: "210",
};

// ============================================================================
// 3. CLASS & SPECIALIZATION (STAGE ID) MAPPING
// ============================================================================
export const CLASS_ID_TO_PROFESSION_ID: Record<ClassId, number> = {
  blade_warden: 1,   // Stormblade
  spellcaster: 2,    // Frost Mage
  twin_striker: 3,   // Twin Striker
  wind_knight: 4,    // Wind Knight
  verdant_oracle: 5, // Verdant Oracle
  heavy_guardian: 9, // Heavy Guardian
  marksman: 11,      // Marksman
  shield_knight: 12, // Shield Knight
  beat_performer: 13,// Beat Performer
};

export const SPEC_ID_TO_STAGE_ID: Record<SpecId, number> = {
  iaido: 101,      // Stormblade - Iaido Slash
  twinflow: 102,   // Stormblade - Moonstrike
  icicle: 104,     // Frost Mage - Icicle
  frostbeam: 105,  // Frost Mage - Frostbeam
  gale: 107,       // Wind Knight - Vanguard
  tempest: 108,    // Wind Knight - Skyward
  thornvine: 110,  // Verdant Oracle - Smite
  lifebloom: 111,  // Verdant Oracle - Lifebind
  bastion: 113,    // Heavy Guardian - Earthfort
  crag: 114,       // Heavy Guardian - Block
  wildpack: 116,   // Marksman - Wildpack
  falconry: 117,   // Marksman - Falconry
  resonance: 119,  // Beat Performer - Dissonance
  harmony: 120,    // Beat Performer - Concerto
  judgement: 122,  // Shield Knight - Recovery
  aegis: 123,      // Shield Knight - Shield
  executioner: 128,// Twin Striker - Formless
  berserker: 129,  // Twin Striker - Crimson
};

export function getEnglishText(
  category: "items" | "skills" | "classes" | "parts" | "attributes" | "talents" | "seasonTalents" | "battleImagines" | "moduleEffects",
  id: string | number
): { name: string; description: string } {
  const entry = GameDB.localeEn?.[category]?.[String(id)];
  if (!entry) return { name: `${category}#${id}`, description: "" };
  if (typeof entry === "string") return { name: entry, description: "" };
  return {
    name: (entry.name || entry.title || `${category}#${id}`).replace(/<[^>]+>/g, ""),
    description: (entry.description || entry.desc || entry.text || "").replace(/<[^>]+>/g, ""),
  };
}