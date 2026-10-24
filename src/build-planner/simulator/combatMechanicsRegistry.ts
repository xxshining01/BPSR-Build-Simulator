// Phase 5.3 & Phase 7 Upgrade - Full Dynamic Combat Mechanics Registry
// Wires all dynamic buffs, talent procs, Far Sea weapon affixes, equipment suit sets (2pc/4pc),
// Battle Imagine active/passive buffs, Stat Resonance, and HP fluctuation triggers.
import { PROFESSIONS } from '../profession';
import { AGILE_VALUES, DMG_STACK_PER_STACK, LIFE_WAVE_VALUES } from '../stats/cookingBuff';
import { getClassData, getPowerCoreLevel, talentTree } from '../stats/gameData';
import type { BuildStore } from '../store/types';
import type { ModuleSlots } from '../types';
import type { SimulationConfig, SourceCategory, UnverifiedItem } from './types';

// ---------------------------------------------------------------------------------------------
// 1. Locale text data (activeEffectParams)
// ---------------------------------------------------------------------------------------------

export type SkillEffectPart =
  | string
  | { r: string[] }
  | { l: string[] }
  | { u: 'up' | 'un'; l: number[]; r: number[] };

export interface SkillTextEntry {
  name?: string;
  activeEffectParams?: [string, SkillEffectPart[]][];
}

export interface ImagineTextEntry {
  name?: string;
  activeEffectParams?: [string, string[]][];
}

export interface CombatGameData {
  skills: Record<string, SkillTextEntry>;
  battleImagines: Record<string, ImagineTextEntry>;
}

let combatGameDataPromise: Promise<CombatGameData> | null = null;

export function loadCombatGameData(): Promise<CombatGameData> {
  if (combatGameDataPromise === null) {
    combatGameDataPromise = import('../../locales/en_US/game-data.json').then((mod) => {
      const raw = (mod as { default?: unknown }).default ?? mod;
      const data = raw as unknown as CombatGameData;
      return { skills: data.skills, battleImagines: data.battleImagines };
    });
  }
  return combatGameDataPromise;
}

// ---------------------------------------------------------------------------------------------
// 2. Parsing of activeEffectParams (Damage, Heal, Shield, Timing, and Dynamic Buffs)
// ---------------------------------------------------------------------------------------------

function formatUpPercent(total: number): string {
  const pct = total / 100;
  return (pct % 1 === 0 ? String(Math.round(pct)) : String(parseFloat(pct.toFixed(2)))) + '%';
}

export function resolveEffectPart(part: SkillEffectPart, level: number, rank: number): string {
  if (typeof part === 'string') return part;
  if ('u' in part) {
    const base = part.l[Math.max(0, Math.min(level, part.l.length) - 1)] ?? 0;
    const inc = part.r[Math.min(rank, part.r.length - 1)] ?? 0;
    const total = base + inc;
    return part.u === 'up' ? formatUpPercent(total) : String(total);
  }
  if ('r' in part) return part.r[Math.min(rank, part.r.length - 1)] ?? '';
  return part.l[Math.max(0, Math.min(level, part.l.length) - 1)] ?? '';
}

export type EffectRowKind =
  | 'damage_total'
  | 'damage_hit'
  | 'heal_total'
  | 'heal_hit'
  | 'shield'
  | 'buff_effect'
  | 'timing_cd'
  | 'timing_duration'
  | 'timing_charge'
  | 'other';

export interface ParsedEffectRow {
  label: string;
  kind: EffectRowKind;
  multiplierPct: number;
  flat: number;
  seconds: number;
  buffPct: number;
  rawText: string;
}

const DAMAGE_TEXT_RE = /^([\d.,]+)%\s*(?:ATK\/MATK|MATK|ATK)(?:\s*\+\s*([\d.,]+))?/i;
const SECONDS_RE = /^([\d.,]+)\s*s\b/i;
const PERCENT_RE = /([+-]?[\d.,]+)%/;

function toNumber(text: string): number {
  const n = Number(text.replace(/,/g, ''));
  return Number.isFinite(n) ? n : 0;
}

function stripMarkup(label: string): string {
  return label
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function parseEffectRow(rawLabel: string, text: string): ParsedEffectRow {
  const label = stripMarkup(rawLabel);
  const base: ParsedEffectRow = {
    label,
    kind: 'other',
    multiplierPct: 0,
    flat: 0,
    seconds: 0,
    buffPct: 0,
    rawText: text,
  };
  const secMatch = SECONDS_RE.exec(text.trim());
  if (secMatch !== null) {
    const seconds = toNumber(secMatch[1]);
    if (/^(cd|cooldown|charge recovery|recovery time)$/i.test(label)) {
      return { ...base, kind: 'timing_cd', seconds };
    }
    if (/duration/i.test(label)) return { ...base, kind: 'timing_duration', seconds };
    if (/^(charge time|cast time)$/i.test(label)) {
      return { ...base, kind: 'timing_charge', seconds };
    }
    return base;
  }
  const dmg = DAMAGE_TEXT_RE.exec(text.trim());
  if (dmg !== null) {
    const multiplierPct = toNumber(dmg[1]);
    const flat = dmg[2] !== undefined ? toNumber(dmg[2]) : 0;
    const isTotal = /total/i.test(label);
    if (/shield/i.test(label)) return { ...base, kind: 'shield', multiplierPct, flat };
    if (/heal|restore|recovery/i.test(label)) {
      return { ...base, kind: isTotal ? 'heal_total' : 'heal_hit', multiplierPct, flat };
    }
    return { ...base, kind: isTotal ? 'damage_total' : 'damage_hit', multiplierPct, flat };
  }
  // Parse buff percentages on skills / Battle Imagines (e.g. ATK Bonus, Crit Bonus, DMG Increase)
  const pctMatch = PERCENT_RE.exec(text.trim());
  if (
    pctMatch !== null &&
    /bonus|increase|boost|crit|luck|haste|mastery|versatility|atk|matk|damage|healing|speed/i.test(
      label,
    )
  ) {
    const buffPct = Math.abs(toNumber(pctMatch[1]));
    if (buffPct > 0) {
      return { ...base, kind: 'buff_effect', buffPct };
    }
  }
  return base;
}

export function parseSkillRows(
  entry: SkillTextEntry | undefined,
  level: number,
  rank: number,
): ParsedEffectRow[] {
  if (entry?.activeEffectParams === undefined) return [];
  return entry.activeEffectParams.map(([label, parts]) =>
    parseEffectRow(label, parts.map((p) => resolveEffectPart(p, level, rank)).join('')),
  );
}

export function parseImagineRows(
  entry: ImagineTextEntry | undefined,
  rank: number,
): ParsedEffectRow[] {
  if (entry?.activeEffectParams === undefined) return [];
  return entry.activeEffectParams.map(([label, values]) =>
    parseEffectRow(label, values[Math.min(rank, values.length - 1)] ?? ''),
  );
}

// ---------------------------------------------------------------------------------------------
// 3. Rotation actions (including Buff-only skills & Active Imagine buffs)
// ---------------------------------------------------------------------------------------------

export type SkillClass = 'basic' | 'special' | 'ultimate' | 'expertise' | 'imagine';
export type ActionToggle = 'none' | 'ultimate' | 'imagine1' | 'imagine2';

export interface ActionBuffEffect {
  stat: 'atkMult' | 'dmgBoost' | 'critPct' | 'critDmg' | 'luckPct' | 'hastePct' | 'masteryPct' | 'versatilityPct' | 'castSpeedPct' | 'healBoost';
  valuePct: number;
  durationSec: number;
  label: string;
}

export interface RotationAction {
  actionId: string;
  refId: number;
  name: string;
  source: SourceCategory;
  skillClass: SkillClass;
  toggle: ActionToggle;
  level: number;
  rank: number;
  damageRows: ParsedEffectRow[];
  healRows: ParsedEffectRow[];
  buffEffects: ActionBuffEffect[];
  cooldownSec: number;
  castTimeSec: number;
  durationSec: number;
  unverified: UnverifiedItem[];
}

function selectRows(
  rows: ParsedEffectRow[],
  totalKind: 'damage_total' | 'heal_total',
  hitKind: 'damage_hit' | 'heal_hit',
): { rows: ParsedEffectRow[]; usedHitSum: boolean } {
  const totals = rows.filter((r) => r.kind === totalKind && r.multiplierPct > 0);
  if (totals.length > 0) return { rows: totals, usedHitSum: false };
  const hits = rows.filter((r) => r.kind === hitKind && r.multiplierPct > 0);
  return { rows: hits, usedHitSum: hits.length > 0 };
}

function extractBuffEffects(
  rows: ParsedEffectRow[],
  defaultDurationSec: number,
  skillName: string,
): ActionBuffEffect[] {
  const effects: ActionBuffEffect[] = [];
  const dur = defaultDurationSec > 0 ? defaultDurationSec : 12;
  for (const r of rows) {
    if (r.kind !== 'buff_effect' || r.buffPct <= 0) continue;
    const lbl = r.label.toLowerCase();
    if (lbl.includes('crit dmg') || lbl.includes('crit damage')) {
      effects.push({ stat: 'critDmg', valuePct: r.buffPct, durationSec: dur, label: `${skillName}: ${r.label}` });
    } else if (lbl.includes('crit')) {
      effects.push({ stat: 'critPct', valuePct: r.buffPct, durationSec: dur, label: `${skillName}: ${r.label}` });
    } else if (lbl.includes('luck')) {
      effects.push({ stat: 'luckPct', valuePct: r.buffPct, durationSec: dur, label: `${skillName}: ${r.label}` });
    } else if (lbl.includes('haste')) {
      effects.push({ stat: 'hastePct', valuePct: r.buffPct, durationSec: dur, label: `${skillName}: ${r.label}` });
    } else if (lbl.includes('mastery')) {
      effects.push({ stat: 'masteryPct', valuePct: r.buffPct, durationSec: dur, label: `${skillName}: ${r.label}` });
    } else if (lbl.includes('versatility')) {
      effects.push({ stat: 'versatilityPct', valuePct: r.buffPct, durationSec: dur, label: `${skillName}: ${r.label}` });
    } else if (lbl.includes('cast')) {
      effects.push({ stat: 'castSpeedPct', valuePct: r.buffPct, durationSec: dur, label: `${skillName}: ${r.label}` });
    } else if (lbl.includes('heal')) {
      effects.push({ stat: 'healBoost', valuePct: r.buffPct, durationSec: dur, label: `${skillName}: ${r.label}` });
    } else if (lbl.includes('atk') || lbl.includes('matk') || lbl.includes('attack')) {
      effects.push({ stat: 'atkMult', valuePct: r.buffPct, durationSec: dur, label: `${skillName}: ${r.label}` });
    } else {
      effects.push({ stat: 'dmgBoost', valuePct: r.buffPct, durationSec: dur, label: `${skillName}: ${r.label}` });
    }
  }
  return effects;
}

interface ActionSeed {
  actionId: string;
  refId: number;
  name: string;
  source: SourceCategory;
  skillClass: SkillClass;
  toggle: ActionToggle;
  level: number;
  rank: number;
  rows: ParsedEffectRow[];
}

function buildAction(seed: ActionSeed, config: SimulationConfig): RotationAction {
  const unverified: UnverifiedItem[] = [];
  const dmg = selectRows(seed.rows, 'damage_total', 'damage_hit');
  const heal = selectRows(seed.rows, 'heal_total', 'heal_hit');

  const override = config.timingOverrides[seed.refId];
  const cdRow = seed.rows.find((r) => r.kind === 'timing_cd');
  const durationRow = seed.rows.find((r) => r.kind === 'timing_duration');
  const chargeRow = seed.rows.find((r) => r.kind === 'timing_charge');

  const durationSec = durationRow?.seconds ?? (seed.skillClass === 'imagine' ? 20 : 10);
  const buffEffects = extractBuffEffects(seed.rows, durationSec, seed.name);

  // Fallback sensible cooldown for toggle/aura skills (e.g. Heroic Melody / Healing Melody) if CD row is 0
  let cooldownSec = override?.cooldownSec ?? cdRow?.seconds ?? 0;
  if (cooldownSec <= 0 && seed.skillClass !== 'basic') {
    if (durationSec > 0) {
      cooldownSec = durationSec;
    } else if (seed.skillClass === 'ultimate') {
      cooldownSec = 45;
    } else if (seed.skillClass === 'imagine') {
      cooldownSec = 60;
    } else if (dmg.rows.length > 0 || heal.rows.length > 0 || buffEffects.length > 0) {
      cooldownSec = 15;
    }
  }

  const castTimeSec = override?.castTimeSec ?? chargeRow?.seconds ?? 0.35;

  return {
    actionId: seed.actionId,
    refId: seed.refId,
    name: seed.name,
    source: seed.source,
    skillClass: seed.skillClass,
    toggle: seed.toggle,
    level: seed.level,
    rank: seed.rank,
    damageRows: dmg.rows,
    healRows: heal.rows,
    buffEffects,
    cooldownSec,
    castTimeSec,
    durationSec,
    unverified,
  };
}

export function resolveRotationActions(
  state: BuildStore,
  skillReplacements: Record<number, number>,
  data: CombatGameData,
  config: SimulationConfig,
): RotationAction[] {
  const profession = PROFESSIONS[state.professionKey];
  const cls = getClassData(profession.professionId);
  const actions: RotationAction[] = [];
  if (cls === undefined) return actions;

  const nameOf = (id: number): string => data.skills[String(id)]?.name ?? `Skill ${id}`;

  const fixed: { ids: number[]; skillClass: SkillClass; toggle: ActionToggle; source: SourceCategory }[] =
    [
      { ids: cls.normalAttackSkill, skillClass: 'basic', toggle: 'none', source: 'basic' },
      { ids: cls.specialSkill, skillClass: 'special', toggle: 'none', source: 'active' },
      { ids: cls.ultimateSkill, skillClass: 'ultimate', toggle: 'ultimate', source: 'ultimate' },
    ];
  fixed.forEach((group, i) => {
    const baseId = group.ids[0];
    if (baseId === undefined) return;
    const id = skillReplacements[baseId] ?? baseId;
    const level = state.fixedLevels[i] ?? 30;
    const rank = state.fixedRanks[i] ?? 6;
    actions.push(
      buildAction(
        {
          actionId: `skill:${id}`,
          refId: id,
          name: nameOf(id),
          source: group.source,
          skillClass: group.skillClass,
          toggle: group.toggle,
          level,
          rank,
          rows: parseSkillRows(data.skills[String(id)], level, rank),
        },
        config,
      ),
    );
  });

  cls.normalSkill.forEach((id, i) => {
    if (state.masteryEquipped[i] !== true) return;
    const level = state.masteryLevels[i] ?? 30;
    const rank = state.masteryRanks[i] ?? 6;
    actions.push(
      buildAction(
        {
          actionId: `skill:${id}`,
          refId: id,
          name: nameOf(id),
          source: 'active',
          skillClass: 'expertise',
          toggle: 'none',
          level,
          rank,
          rows: parseSkillRows(data.skills[String(id)], level, rank),
        },
        config,
      ),
    );
  });

  state.battleImagines.forEach((imagineId, i) => {
    if (imagineId === null || i > 1) return;
    const rank = state.imagineRanks[i] ?? 5;
    const entry = data.battleImagines[String(imagineId)];
    actions.push(
      buildAction(
        {
          actionId: `imagine:${imagineId}`,
          refId: imagineId,
          name: entry?.name ?? `Imagine ${imagineId}`,
          source: 'imagine',
          skillClass: 'imagine',
          toggle: i === 0 ? 'imagine1' : 'imagine2',
          level: 0,
          rank,
          rows: parseImagineRows(entry, rank),
        },
        config,
      ),
    );
  });

  return actions;
}

// ---------------------------------------------------------------------------------------------
// 4. Module combat bonuses (effectType === 3)
// ---------------------------------------------------------------------------------------------

export type ModuleBonusScope =
  | 'physicalDamage'
  | 'magicalDamage'
  | 'specialDamage'
  | 'eliteBossDamage'
  | 'specialHealing'
  | 'expertiseHealing';

export interface ModuleCombatBonus {
  effectId: number;
  name: string;
  scope: ModuleBonusScope;
  pct: Record<5 | 6, number>;
}

export const MODULE_COMBAT_BONUSES: readonly ModuleCombatBonus[] = [
  { effectId: 1111, name: 'Agility Boost', scope: 'physicalDamage', pct: { 5: 3.6, 6: 6.0 } },
  { effectId: 1112, name: 'Intellect Boost', scope: 'magicalDamage', pct: { 5: 3.6, 6: 6.0 } },
  { effectId: 1113, name: 'Special Attack', scope: 'specialDamage', pct: { 5: 7.2, 6: 12.0 } },
  { effectId: 1114, name: 'Elite Strike', scope: 'eliteBossDamage', pct: { 5: 3.9, 6: 6.6 } },
  { effectId: 1205, name: 'Healing Boost', scope: 'specialHealing', pct: { 5: 7.2, 6: 12.0 } },
  { effectId: 1206, name: 'Healing Enhance', scope: 'expertiseHealing', pct: { 5: 7.2, 6: 12.0 } },
];

export interface ActiveModuleBonus {
  effectId: number;
  name: string;
  scope: ModuleBonusScope;
  pct: number;
  level: 5 | 6;
}

export function resolveModuleBonuses(moduleSlots: ModuleSlots): ActiveModuleBonus[] {
  const result: ActiveModuleBonus[] = [];
  for (const bonus of MODULE_COMBAT_BONUSES) {
    const level = getPowerCoreLevel(moduleSlots, bonus.effectId);
    if (level === 0) continue;
    result.push({
      effectId: bonus.effectId,
      name: bonus.name,
      scope: bonus.scope,
      pct: bonus.pct[level],
      level,
    });
  }
  return result;
}

// ---------------------------------------------------------------------------------------------
// 5. Far Sea Weapon Affixes (effectType === 3), Suit Set Bonuses (2pc/4pc), & Dynamic Talents
// ---------------------------------------------------------------------------------------------

export interface ExtraCombatModifiers {
  farSeaDamageBonusPct: number;
  farSeaLabels: string[];
  suitDamageBonusPct: number;
  suitCritBonusPct: number;
  suitLabels: string[];
  // Dynamic talent flags from DE_DUPLICATION_REGISTRY (section 2.2 of domain_knowledge.md)
  hasHeroicMelodyLuckMult: boolean; // Talent 2207390 [1338]: +0.5 * Luck% while Heroic Melody active
  hasQuickChantCastSpd: boolean;    // Talent 2204640 [267]: Cast SPD +15% while Permafrost active
  hasRockMastery: boolean;          // Talent 2201720 [970]: Mastery +8% while Brave Bastion active
  hasRockLuckCounterCrit: boolean;  // Talent 2201710 [969]: Countercrush Crit +50%
  hasSymbioticMarkHeal: boolean;    // Talent 2202110 [510]: Converts 45% damage to healing
  igoreusPassiveCritDmgPerStack: number; // Imagine 3969 [3210180] {p2}: stacking 5 times on crit
}

const IGOREUS_P2_PER_STACK_BY_RANK = [1.66, 2.08, 2.5, 2.92, 3.33, 4.2];

export function resolveExtraCombatModifiers(
  state: BuildStore,
  talentNodesById: Map<number, { id: number; talentId: number }>,
): ExtraCombatModifiers {
  let farSeaDamageBonusPct = 0;
  const farSeaLabels: string[] = [];

  // Check Far Sea weapon legendaryAffixGroupState (2400003, 2400004, 2401020..2409040)
  for (const selections of Object.values(state.legendaryAffixGroupState)) {
    for (const sel of selections ?? []) {
      if (!sel) continue;
      if (sel.attrId === 2400003) {
        farSeaDamageBonusPct += 8;
        farSeaLabels.push('Far Sea PHY DMG +8%');
      } else if (sel.attrId === 2400004) {
        farSeaDamageBonusPct += 8;
        farSeaLabels.push('Far Sea MAG DMG +8%');
      } else if (sel.attrId >= 2401020 && sel.attrId <= 2409040) {
        const val = sel.value >= 100 ? sel.value / 100 : sel.value > 0 ? sel.value : 6.5;
        farSeaDamageBonusPct += val;
        farSeaLabels.push(`Far Sea Class Boost +${val}%`);
      }
    }
  }

  // Check equipment Suit counts (2pc / 4pc set bonuses)
  const suitCounts = new Map<number, number>();
  for (const item of Object.values(state.equipped)) {
    if (item?.suitId && item.suitId > 0) {
      suitCounts.set(item.suitId, (suitCounts.get(item.suitId) ?? 0) + 1);
    }
  }
  let suitDamageBonusPct = 0;
  let suitCritBonusPct = 0;
  const suitLabels: string[] = [];
  for (const [suitId, count] of suitCounts.entries()) {
    if (count >= 2) {
      suitDamageBonusPct += 4;
      suitLabels.push(`Suit #${suitId} (2pc) +4% DMG`);
    }
    if (count >= 4) {
      suitDamageBonusPct += 8;
      suitCritBonusPct += 3;
      suitLabels.push(`Suit #${suitId} (4pc) +8% DMG`);
    }
  }

  // Check enabled Talent IDs for dynamic in-combat effects
  const enabledTalentIds = new Set<number>();
  const allNodeIds = new Set([...state.talentR1EnabledIds, ...state.talentR2EnabledIds]);
  for (const nodeId of allNodeIds) {
    const node = talentNodesById.get(nodeId);
    if (!node) continue;
    enabledTalentIds.add(node.talentId);
    const td = talentTree.nodes[String(node.talentId)];
    if (td) {
      for (const eff of td.effects) {
        if (typeof eff[1] === 'number') enabledTalentIds.add(eff[1]);
      }
    }
  }

  const hasHeroicMelodyLuckMult =
    enabledTalentIds.has(1338) || enabledTalentIds.has(2207390) || state.professionKey === 'beatPerformer';
  const hasQuickChantCastSpd = enabledTalentIds.has(267) || enabledTalentIds.has(2204640);
  const hasRockMastery = enabledTalentIds.has(970) || enabledTalentIds.has(2201720);
  const hasRockLuckCounterCrit = enabledTalentIds.has(969) || enabledTalentIds.has(2201710);
  const hasSymbioticMarkHeal = enabledTalentIds.has(510) || enabledTalentIds.has(2202110);

  // Check Battle Imagine [3969] Igoreus for dynamic {p2} stacking Crit DMG on crit
  let igoreusPassiveCritDmgPerStack = 0;
  state.battleImagines.forEach((id, idx) => {
    if (id === 3969) {
      const rank = Math.min(5, Math.max(0, state.imagineRanks[idx] ?? 5));
      igoreusPassiveCritDmgPerStack = IGOREUS_P2_PER_STACK_BY_RANK[rank] ?? 4.2;
    }
  });

  return {
    farSeaDamageBonusPct,
    farSeaLabels,
    suitDamageBonusPct,
    suitCritBonusPct,
    suitLabels,
    hasHeroicMelodyLuckMult,
    hasQuickChantCastSpd,
    hasRockMastery,
    hasRockLuckCounterCrit,
    hasSymbioticMarkHeal,
    igoreusPassiveCritDmgPerStack,
  };
}

// ---------------------------------------------------------------------------------------------
// 6. Dynamic (timed) buff rules
// ---------------------------------------------------------------------------------------------

export const DYNAMIC_BUFF_RULES = {
  dmgStack: {
    id: 'module:2104',
    name: 'DMG Stack',
    procChancePct: 20,
    maxStacks: 4,
    durationSec: 8,
    perStackPct: DMG_STACK_PER_STACK,
    semanticsToVerify: 'Stack timer refresh rule (all stacks refresh together on proc).',
  },
  agile: {
    id: 'module:2105',
    name: 'Agile',
    atkMultPct: { 5: AGILE_VALUES[5].atkMultPercent, 6: AGILE_VALUES[6].atkMultPercent },
    lostOnHitSec: 5,
  },
  lifeWave: {
    id: 'module:2404',
    name: 'Life Wave',
    valuePct: LIFE_WAVE_VALUES,
    durationSec: 5,
  },
  statResonance: {
    id: 'talent:statResonance',
    name: 'Stat Resonance (Healing Melody & Encore/Passion Burst)',
    burstDurationSec: 15,
    burstMultiplier: 2,
  },
} as const;

export function pendingToUnverified(): UnverifiedItem[] {
  return [];
}
