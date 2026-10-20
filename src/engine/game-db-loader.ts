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
import playerLevelsRaw from "../data/game-db/player-levels.json";
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
  playerLevels: playerLevelsRaw as Record<string, any>,
  seasonConstants: seasonConstantsRaw as {
    diminishingA: number;
    diminishingVersatility: number;
    diminishingEnhance: number;
  },
  localeEn: localeEnRaw as Record<string, Record<string, any>>,
};

// ============================================================================
// 1. ZTABLE ATTR_ID -> ATTRIBUTE_KEY MAPPING
// ============================================================================
export const ZTABLE_ATTR_TO_KEY: Record<
  number,
  { key: AttributeKey; label: string; isPercent?: boolean; scaleDivisor?: number }
> = {
  11010: { key: "strength", label: "Strength" },
  11012: { key: "strength", label: "Strength" },
  11014: { key: "strength", label: "Strength %", isPercent: true, scaleDivisor: 100 },
  11020: { key: "intellect", label: "Intellect" },
  11022: { key: "intellect", label: "Intellect" },
  11024: { key: "intellect", label: "Intellect %", isPercent: true, scaleDivisor: 100 },
  11030: { key: "agility", label: "Agility" },
  11032: { key: "agility", label: "Agility" },
  11034: { key: "agility", label: "Agility %", isPercent: true, scaleDivisor: 100 },
  11040: { key: "endurance", label: "Endurance" },
  11042: { key: "endurance", label: "Endurance" },
  11044: { key: "endurance", label: "Endurance" },

  11110: { key: "crit", label: "Crit" },
  11112: { key: "crit", label: "Crit" },
  11120: { key: "haste", label: "Haste" },
  11122: { key: "haste", label: "Haste" },
  11130: { key: "luck", label: "Luck" },
  11132: { key: "luck", label: "Luck" },
  11140: { key: "mastery", label: "Mastery" },
  11142: { key: "mastery", label: "Mastery" },
  11150: { key: "versatility", label: "Versatility" },
  11152: { key: "versatility", label: "Versatility" },
  11160: { key: "block", label: "Block" },
  11162: { key: "block", label: "Block" },

  11310: { key: "maxHp", label: "Max HP" },
  11312: { key: "maxHp", label: "Max HP" },
  11330: { key: "atk", label: "ATK" },
  11332: { key: "atk", label: "ATK" },
  11340: { key: "matk", label: "MATK" },
  11342: { key: "matk", label: "MATK" },
  11350: { key: "armor", label: "Armor" },
  11352: { key: "armor", label: "Armor" },
  11360: { key: "resistance", label: "Resistance" },
  11362: { key: "resistance", label: "Resistance" },
  11372: { key: "refinedAtk", label: "Refined ATK" },
  11382: { key: "refinedMatk", label: "Refined MATK" },
  11392: { key: "refinedArmor", label: "Refined Armor" },
  11402: { key: "illusionBreakingStrength", label: "Illusion-Breaking Strength" },

  11712: { key: "critDmgPct", label: "Crit DMG", isPercent: true, scaleDivisor: 100 },
  11722: { key: "attackSpdPct", label: "Attack SPD", isPercent: true, scaleDivisor: 100 },
  11732: { key: "castSpdPct", label: "Cast Speed", isPercent: true, scaleDivisor: 100 },
  11742: { key: "luckyStrikeDmgMultPct", label: "Lucky Strike DMG Mult", isPercent: true, scaleDivisor: 100 },
  11752: { key: "critHealingPct", label: "Crit Healing", isPercent: true, scaleDivisor: 100 },
  11782: { key: "luckyStrikeHealingPct", label: "Lucky Strike Healing", isPercent: true, scaleDivisor: 100 },
  11792: { key: "healingOutputPct", label: "Healing Output", isPercent: true, scaleDivisor: 100 },
  11802: { key: "healingReceivedPct", label: "Healing Received", isPercent: true, scaleDivisor: 100 },
  11812: { key: "shieldPct", label: "Shield Strength", isPercent: true, scaleDivisor: 100 },
  11822: { key: "shieldReceivePct", label: "Shield Received", isPercent: true, scaleDivisor: 100 },
  12542: { key: "blockDmgReductionPct", label: "Block DMG Reduction", isPercent: true, scaleDivisor: 100 },
  12632: { key: "eliteBossDmgBonusPct", label: "DMG Bonus vs. Bosses", isPercent: true, scaleDivisor: 100 },

  11502: { key: "allElementAtk", label: "All Element ATK" },
  11512: { key: "fireAtk", label: "Fire ATK" },
  11522: { key: "iceAtk", label: "Ice ATK" },
  11532: { key: "forestAtk", label: "Forest ATK" },
  11542: { key: "thunderAtk", label: "Thunder ATK" },
  11552: { key: "windAtk", label: "Wind ATK" },
  11562: { key: "rockAtk", label: "Rock ATK" },
  11572: { key: "lightAtk", label: "Light ATK" },
  11582: { key: "darkAtk", label: "Dark ATK" },

  13002: { key: "allElement", label: "All Element" },
  13012: { key: "fire", label: "Fire" },
  13022: { key: "ice", label: "Ice" },
  13032: { key: "forest", label: "Forest" },
  13042: { key: "thunder", label: "Thunder" },
  13052: { key: "wind", label: "Wind" },
  13062: { key: "rock", label: "Rock" },
  13072: { key: "light", label: "Light" },
  13082: { key: "dark", label: "Dark" },

  13102: { key: "allElementBonusPct", label: "All Element Bonus", isPercent: true, scaleDivisor: 100 },
  13112: { key: "fireBonusPct", label: "Fire Bonus", isPercent: true, scaleDivisor: 100 },
  13122: { key: "iceBonusPct", label: "Ice Bonus", isPercent: true, scaleDivisor: 100 },
  13132: { key: "forestBonusPct", label: "Forest Bonus", isPercent: true, scaleDivisor: 100 },
  13142: { key: "thunderBonusPct", label: "Thunder Bonus", isPercent: true, scaleDivisor: 100 },
  13152: { key: "windBonusPct", label: "Wind Bonus", isPercent: true, scaleDivisor: 100 },
  13162: { key: "rockBonusPct", label: "Rock Bonus", isPercent: true, scaleDivisor: 100 },
  13172: { key: "lightBonusPct", label: "Light Bonus", isPercent: true, scaleDivisor: 100 },
  13182: { key: "darkBonusPct", label: "Dark Bonus", isPercent: true, scaleDivisor: 100 },

  13202: { key: "allElementRes", label: "All Element Res" },
  13212: { key: "fireRes", label: "Fire Res" },
  13222: { key: "iceRes", label: "Ice Res" },
  13232: { key: "forestRes", label: "Forest Res" },
  13242: { key: "thunderRes", label: "Thunder Res" },
  13252: { key: "windRes", label: "Wind Res" },
  13262: { key: "rockRes", label: "Rock Res" },
  13272: { key: "lightRes", label: "Light Res" },
  13282: { key: "darkRes", label: "Dark Res" },
};

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

export const CLASS_ID_TO_PROFESSION_ID: Record<ClassId, number> = {
  blade_warden: 1,
  spellcaster: 2,
  twin_striker: 3,
  wind_knight: 4,
  verdant_oracle: 5,
  heavy_guardian: 9,
  marksman: 11,
  shield_knight: 12,
  beat_performer: 13,
};

export const SPEC_ID_TO_STAGE_ID: Record<SpecId, number> = {
  iaido: 101,
  twinflow: 102,
  icicle: 104,
  frostbeam: 105,
  gale: 107,
  tempest: 108,
  thornvine: 110,
  lifebloom: 111,
  bastion: 113,
  crag: 114,
  wildpack: 116,
  falconry: 117,
  resonance: 119,
  harmony: 120,
  judgement: 122,
  aegis: 123,
  executioner: 128,
  berserker: 129,
};

export const CLASS_SPEC_KEYSTONE_NODES: Record<
  ClassId,
  [
    { specId: SpecId; stageId: number; keystoneNodeId: string; label: string },
    { specId: SpecId; stageId: number; keystoneNodeId: string; label: string }
  ]
> = {
  blade_warden: [
    { specId: "iaido", stageId: 101, keystoneNodeId: "130", label: "Iaido Slash Spec" },
    { specId: "twinflow", stageId: 102, keystoneNodeId: "157", label: "Moonstrike Spec" },
  ],
  spellcaster: [
    { specId: "icicle", stageId: 104, keystoneNodeId: "233", label: "Icicle Spec" },
    { specId: "frostbeam", stageId: 105, keystoneNodeId: "212", label: "Frostbeam Spec" },
  ],
  twin_striker: [
    { specId: "executioner", stageId: 128, keystoneNodeId: "312", label: "Formless Spec" },
    { specId: "berserker", stageId: 129, keystoneNodeId: "342", label: "Crimson Spec" },
  ],
  wind_knight: [
    { specId: "gale", stageId: 107, keystoneNodeId: "433", label: "Vanguard Spec" },
    { specId: "tempest", stageId: 108, keystoneNodeId: "432", label: "Skyward Spec" },
  ],
  verdant_oracle: [
    { specId: "thornvine", stageId: 110, keystoneNodeId: "510", label: "Smite Spec" },
    { specId: "lifebloom", stageId: 111, keystoneNodeId: "531", label: "Lifebind Spec" },
  ],
  heavy_guardian: [
    { specId: "bastion", stageId: 113, keystoneNodeId: "931", label: "Earthfort Spec" },
    { specId: "crag", stageId: 114, keystoneNodeId: "930", label: "Block Spec" },
  ],
  marksman: [
    { specId: "wildpack", stageId: 116, keystoneNodeId: "1126", label: "Wildpack Spec" },
    { specId: "falconry", stageId: 117, keystoneNodeId: "1129", label: "Falconry Spec" },
  ],
  shield_knight: [
    { specId: "judgement", stageId: 122, keystoneNodeId: "1208", label: "Recovery Spec" },
    { specId: "aegis", stageId: 123, keystoneNodeId: "1218", label: "Shield Spec" },
  ],
  beat_performer: [
    { specId: "resonance", stageId: 119, keystoneNodeId: "1308", label: "Dissonance Spec" },
    { specId: "harmony", stageId: 120, keystoneNodeId: "1317", label: "Concerto Spec" },
  ],
};

export function cleanGameMarkup(raw: string | undefined | null): string {
  if (!raw) return "";
  return String(raw)
    .replace(/<[^>]+>/g, "")
    .replace(/\\n/g, " ")
    .trim();
}

export function getEnglishText(
  category:
    | "items"
    | "skills"
    | "classes"
    | "parts"
    | "attributes"
    | "talents"
    | "seasonTalents"
    | "battleImagines"
    | "moduleEffects"
    | "attrDescs"
    | "statDescs"
    | "textDescs",
  id: string | number
): { name: string; description: string } {
  const entry = GameDB.localeEn?.[category]?.[String(id)];
  if (!entry) return { name: `${category}#${id}`, description: "" };
  if (typeof entry === "string") return { name: cleanGameMarkup(entry), description: "" };
  return {
    name: cleanGameMarkup(entry.name || entry.title || `${category}#${id}`),
    description: cleanGameMarkup(entry.description || entry.desc || entry.text || ""),
  };
}

export interface ResolvedFixedSkills {
  basicAttackId: string;
  specialSkillId: string;
  ultimateSkillId: string;
  selectablePoolIds: string[];
}

export function resolveClassSkillConfiguration(
  classId: ClassId,
  allocatedTalents: Record<string, number>
): ResolvedFixedSkills {
  const profId = CLASS_ID_TO_PROFESSION_ID[classId];
  const cData = GameDB.classes[String(profId)] || {};

  let basicId = String(cData.normalAttackSkill?.[0] || "1701");
  let specialId = String(cData.specialSkill?.[0] || "1714");
  let ultimateId = String(cData.ultimateSkill?.[0] || "1713");

  const allNodes = GameDB.talentTree?.nodes || {};
  for (const [nodeId, rank] of Object.entries(allocatedTalents || {})) {
    if (rank <= 0) continue;
    const nd = allNodes[String(nodeId)];
    if (!nd || !Array.isArray(nd.effects)) continue;
    for (const eff of nd.effects) {
      if (eff[0] === 6 && eff.length >= 3) {
        const fromSkill = String(eff[1]);
        const toSkill = String(eff[2]);
        if (fromSkill === basicId) basicId = toSkill;
        if (fromSkill === specialId) specialId = toSkill;
        if (fromSkill === ultimateId) ultimateId = toSkill;
      }
    }
  }

  const selectablePoolIds = (cData.normalSkill || []).map((id: number) => String(id));
  return {
    basicAttackId: basicId,
    specialSkillId: specialId,
    ultimateSkillId: ultimateId,
    selectablePoolIds,
  };
}

export interface ImaginePassiveStatTierRow {
  attrId: number;
  statName: string;
  isPercent: boolean;
  valuesByTier: [number, number, number, number, number, number];
  formattedAtSelectedTier: string;
}

export interface ImaginePassiveBuffTierRow {
  buffId: number;
  buffTitle: string;
  descriptionAtSelectedTier: string;
  paramsByTier: any[];
}

export interface ResolvedBattleImagineInfo {
  id: string;
  name: string;
  rarityLabel: string;
  seasonId: number;
  activeSkillName: string;
  activeSkillDescription: string;
  passiveStats: ImaginePassiveStatTierRow[];
  passiveBuffs: ImaginePassiveBuffTierRow[];
}

export function resolveBattleImagineDetails(
  imagineId: string | number,
  selectedTier: number = 5
): ResolvedBattleImagineInfo | null {
  const raw = GameDB.imagines?.[String(imagineId)];
  if (!raw) return null;

  const tIdx = Math.max(0, Math.min(5, Number(selectedTier)));
  const imText = getEnglishText("battleImagines", imagineId);
  const itemText = getEnglishText("items", imagineId);
  const name = !imText.name.startsWith("battleImagines#") ? imText.name : itemText.name;

  const skText = getEnglishText("skills", raw.skillId);
  const activeSkillName = !skText.name.startsWith("skills#")
    ? skText.name
    : `Resonance Skill #${raw.skillId}`;
  const activeSkillDescription = imText.description || skText.description || itemText.description;

  const rarityMap: Record<number, string> = {
    1: "R (Blue / Elite)",
    2: "SR (Purple / Boss)",
    3: "SSR (Gold / Supreme)",
  };

  const passiveStats: ImaginePassiveStatTierRow[] = [];
  for (const row of raw.passiveEffects || []) {
    const attrId = Number(row[0]);
    const mapped = ZTABLE_ATTR_TO_KEY[attrId];
    const attrLocale = getEnglishText("attributes", attrId);
    const statName =
      mapped?.label ||
      (!attrLocale.name.startsWith("attributes#") ? attrLocale.name : `Stat #${attrId}`);
    const isPct = Boolean(mapped?.isPercent);
    const divisor = mapped?.scaleDivisor || 1;

    const vals = [0, 1, 2, 3, 4, 5].map((i) => {
      const v = Number(row[i + 1] ?? row[1] ?? 0);
      return Number((v / divisor).toFixed(2));
    }) as [number, number, number, number, number, number];

    const currentVal = vals[tIdx];
    passiveStats.push({
      attrId,
      statName,
      isPercent: isPct,
      valuesByTier: vals,
      formattedAtSelectedTier: `+${currentVal}${isPct ? "%" : ""}`,
    });
  }

  const passiveBuffs: ImaginePassiveBuffTierRow[] = [];
  for (const brow of raw.bufPassiveEffects || []) {
    const buffId = Number(brow[0]);
    const tierParams = brow.slice(1, 7);
    const currentParams = Array.isArray(tierParams[tIdx])
      ? tierParams[tIdx]
      : [tierParams[tIdx] ?? 0];

    let template =
      getEnglishText("attrDescs", buffId).description ||
      getEnglishText("attrDescs", buffId).name ||
      getEnglishText("textDescs", buffId).description ||
      getEnglishText("textDescs", buffId).name ||
      "";

    if (template.startsWith("attrDescs#") || template.startsWith("textDescs#")) {
      template = "";
    }

    let descAtTier = template;
    if (descAtTier) {
      currentParams.forEach((p: number, idx: number) => {
        const displayP =
          p >= 100 && p % 10 === 0 ? `${p} (หรือ ${(p / 100).toFixed(1)}%)` : String(p);
        descAtTier = descAtTier
          .replace(new RegExp(`\\{${idx}\\}`, "g"), displayP)
          .replace(new RegExp(`\\{p${idx + 1}\\}`, "g"), displayP);
      });
    } else {
      const formattedParams = currentParams
        .map((p: number) => (p >= 100 ? `+${p} Rating (หรือ +${(p / 100).toFixed(1)}%)` : `+${p}`))
        .join(", ");
      descAtTier = `Passive Resonance Effect [${buffId}]: มอบโบนัสติดตัว ${formattedParams}`;
    }

    passiveBuffs.push({
      buffId,
      buffTitle: `Passive Effect #${buffId}`,
      descriptionAtSelectedTier: descAtTier,
      paramsByTier: tierParams,
    });
  }

  return {
    id: String(imagineId),
    name,
    rarityLabel: rarityMap[raw.rarityType] || `Rarity ${raw.rarityType}`,
    seasonId: raw.seasonId || 1,
    activeSkillName,
    activeSkillDescription,
    passiveStats,
    passiveBuffs,
  };
}

export interface TalentDiagramNode {
  nodeId: string;
  name: string;
  description: string;
  cost: number;
  maxRank: number;
  row: number;
  col: number;
  prerequisiteNodeIds: string[];
  isKeystoneSpec: boolean;
  specId?: SpecId;
  statEffectsSummary: string[];
}

export interface ClassTalentTreeDiagramData {
  basicTreeNodes: TalentDiagramNode[];
  specChoices: {
    specId: SpecId;
    stageId: number;
    keystoneNode: TalentDiagramNode;
    branchNodes: TalentDiagramNode[];
  }[];
}

export function buildClassTalentTreeDiagram(classId: ClassId): ClassTalentTreeDiagramData {
  const profId = CLASS_ID_TO_PROFESSION_ID[classId];
  const allNodes = (GameDB.talentTree?.nodes || {}) as Record<string, any>;
  const specDefs = CLASS_SPEC_KEYSTONE_NODES[classId];

  const classRawNodes = Object.entries(allNodes)
    .filter(([, nd]) => Number(nd.weaponGroup) === profId)
    .sort((a, b) => Number(a[0]) - Number(b[0]));

  const commonRawNodes = Object.entries(allNodes)
    .filter(([, nd]) => Number(nd.weaponGroup) === 0)
    .sort((a, b) => Number(a[0]) - Number(b[0]));

  const toDiagramNode = (
    nid: string,
    nd: any,
    row: number,
    col: number,
    prereqs: string[],
    isKeystone = false,
    specId?: SpecId
  ): TalentDiagramNode => {
    const txt = getEnglishText("talents", nid);
    const effSummaries: string[] = [];
    for (const eff of nd.effects || []) {
      if (eff[0] === 1 && eff.length >= 3) {
        const mapped = ZTABLE_ATTR_TO_KEY[Number(eff[1])];
        if (mapped) {
          const val = mapped.scaleDivisor ? Number(eff[2]) / mapped.scaleDivisor : Number(eff[2]);
          effSummaries.push(`${mapped.label} +${val}${mapped.isPercent ? "%" : ""}`);
        }
      }
    }
    return {
      nodeId: String(nid),
      name: txt.name.startsWith("talents#") ? `Talent Node ${nid}` : txt.name,
      description: txt.description || effSummaries.join(", ") || "Passive Talent Node",
      cost: Number(nd.cost || 1),
      maxRank: 1,
      row,
      col,
      prerequisiteNodeIds: prereqs,
      isKeystoneSpec: isKeystone,
      specId,
      statEffectsSummary: effSummaries,
    };
  };

  const k1Id = Number(specDefs[0].keystoneNodeId);
  const k2Id = Number(specDefs[1].keystoneNodeId);
  const minKeystoneId = Math.min(k1Id, k2Id);

  const preKeystoneClassNodes = classRawNodes.filter(([nid]) => Number(nid) < minKeystoneId);
  const basicPool: [string, any][] = [...preKeystoneClassNodes];
  for (const cNode of commonRawNodes) {
    if (basicPool.length >= 30) break;
    basicPool.push(cNode);
  }
  const finalBasic30 = basicPool.slice(0, 30);

  const basicTreeNodes: TalentDiagramNode[] = finalBasic30.map(([nid, nd], idx) => {
    const row = Math.floor(idx / 5);
    const col = idx % 5;
    const prereqs: string[] = [];
    if (row > 0) {
      const parentIdx = (row - 1) * 5 + col;
      if (finalBasic30[parentIdx]) {
        prereqs.push(String(finalBasic30[parentIdx][0]));
      }
    }
    return toDiagramNode(String(nid), nd, row, col, prereqs, false);
  });

  const specChoices = specDefs.map((sDef, sIdx) => {
    const keystoneEntry = allNodes[sDef.keystoneNodeId] || { cost: 1, effects: [] };
    const keystoneNode = toDiagramNode(
      sDef.keystoneNodeId,
      keystoneEntry,
      0,
      2,
      basicTreeNodes.slice(-5).map((n) => n.nodeId),
      true,
      sDef.specId
    );
    keystoneNode.name = sDef.label;

    const otherKeystoneId = Number(specDefs[1 - sIdx].keystoneNodeId);
    const myKeystoneId = Number(sDef.keystoneNodeId);

    const specClassNodes = classRawNodes.filter(([nid]) => {
      const num = Number(nid);
      if (num === k1Id || num === k2Id) return false;
      if (myKeystoneId < otherKeystoneId) {
        return num > myKeystoneId && num < otherKeystoneId;
      } else {
        return num > myKeystoneId;
      }
    });

    const combinedSpecPool: [string, any][] = [...specClassNodes];
    for (const [cnid, cnd] of commonRawNodes) {
      const syntheticId = `${sDef.stageId}_stat_${cnid}`;
      if (!combinedSpecPool.some(([id]) => id === cnid)) {
        const baseObj = typeof cnd === "object" && cnd !== null ? cnd : {};
        combinedSpecPool.push([syntheticId, { ...baseObj, realNodeId: cnid }]);
      }
    }

    const branchNodes: TalentDiagramNode[] = [keystoneNode];
    combinedSpecPool.forEach(([nid, nd], idx) => {
      const row = Math.floor(idx / 5) + 1;
      const col = idx % 5;
      const prereqs: string[] = [];
      if (row === 1) {
        prereqs.push(keystoneNode.nodeId);
      } else {
        const prevIdx = (row - 2) * 5 + col;
        if (combinedSpecPool[prevIdx]) {
          prereqs.push(String(combinedSpecPool[prevIdx][0]));
        }
      }

      const lookupId = nd.realNodeId ? String(nd.realNodeId) : String(nid);
      const diagNode = toDiagramNode(lookupId, nd, row, col, prereqs, false, sDef.specId);
      diagNode.nodeId = String(nid);
      branchNodes.push(diagNode);
    });

    return {
      specId: sDef.specId,
      stageId: sDef.stageId,
      keystoneNode,
      branchNodes,
    };
  });

  return {
    basicTreeNodes,
    specChoices,
  };
}