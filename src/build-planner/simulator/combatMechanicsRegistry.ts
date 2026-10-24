// Phase 5.3 - Combat Mechanics Registry (SAD.md section 2, SDD.md section 4).
//
// Single source of combat rules for the simulator. Everything here is either
//   (a) parsed from verified game data (src/locales/en_US/game-data.json `activeEffectParams`,
//       src/data/*.json), or
//   (b) a constant that is already verified elsewhere in the repo (stats/cookingBuff.ts) or in
//       .agents/memories/domain_knowledge.md section 2.3, or
//   (c) listed in PENDING_MECHANICS with value 0 and `_todo_verify: true`.
// Nothing is guessed (rule: zero_hallucination).
import { PROFESSIONS } from '../profession';
import { AGILE_VALUES, DMG_STACK_PER_STACK, LIFE_WAVE_VALUES } from '../stats/cookingBuff';
import { getClassData, getPowerCoreLevel } from '../stats/gameData';
import type { BuildStore } from '../store/types';
import type { ModuleSlots } from '../types';
import type { SimulationConfig, SourceCategory, UnverifiedItem } from './types';

// ---------------------------------------------------------------------------------------------
// 1. Locale text data (activeEffectParams). Loaded lazily: the JSON is ~3.6 MB.
// ---------------------------------------------------------------------------------------------

// Mirrors SkillTooltip.tsx: string (fixed) / r = per rank G0-G6 / l = per level 1-30 /
// u = both dimensions (value = l[level-1] + r[rank], shown as % when u === 'up').
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
  // rank-indexed strings, e.g. '1197% ATK/MATK +119 (Resilience Break: 77)'
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
// 2. Parsing of activeEffectParams
// ---------------------------------------------------------------------------------------------

// Same output format as extract-ztable.mjs formatUpPercent (raw/100 -> %, max 2 decimals).
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
  | 'timing_cd'
  | 'timing_duration'
  | 'timing_charge'
  | 'other';

export interface ParsedEffectRow {
  label: string;
  kind: EffectRowKind;
  // % of ATK/MATK (0 when the row has no multiplier)
  multiplierPct: number;
  // Flat addition (the number after '+')
  flat: number;
  // Seconds for timing rows
  seconds: number;
  rawText: string;
}

// '1,200% ATK/MATK +119 (Resilience Break: 77)' / '12% MATK +4 (...)' / '34% ATK'
const DAMAGE_TEXT_RE = /^([\d.,]+)%\s*(?:ATK\/MATK|MATK|ATK)(?:\s*\+\s*([\d.,]+))?/;
const SECONDS_RE = /^([\d.,]+)\s*s\b/;

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
    rawText: text,
  };
  const secMatch = SECONDS_RE.exec(text.trim());
  if (secMatch !== null) {
    const seconds = toNumber(secMatch[1]);
    if (/^(cd|cooldown)$/i.test(label)) return { ...base, kind: 'timing_cd', seconds };
    if (/^duration$/i.test(label)) return { ...base, kind: 'timing_duration', seconds };
    if (/^charge time$/i.test(label)) return { ...base, kind: 'timing_charge', seconds };
    return base;
  }
  const dmg = DAMAGE_TEXT_RE.exec(text.trim());
  if (dmg === null) return base;
  const multiplierPct = toNumber(dmg[1]);
  const flat = dmg[2] !== undefined ? toNumber(dmg[2]) : 0;
  const isTotal = /total/i.test(label);
  if (/shield/i.test(label)) return { ...base, kind: 'shield', multiplierPct, flat };
  if (/heal/i.test(label)) {
    return { ...base, kind: isTotal ? 'heal_total' : 'heal_hit', multiplierPct, flat };
  }
  return { ...base, kind: isTotal ? 'damage_total' : 'damage_hit', multiplierPct, flat };
}

// Class skills: parts[] are resolved at (level, rank) and joined (same as SkillTooltip).
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

// Battle Imagines: one string per rank.
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
// 3. Rotation actions
// ---------------------------------------------------------------------------------------------

export type SkillClass = 'basic' | 'special' | 'ultimate' | 'expertise' | 'imagine';
export type ActionToggle = 'none' | 'ultimate' | 'imagine1' | 'imagine2';

export interface RotationAction {
  actionId: string;
  refId: number;
  name: string;
  source: SourceCategory;
  skillClass: SkillClass;
  toggle: ActionToggle;
  level: number;
  rank: number;
  // Rows that deal damage per cast (Total rows win; otherwise the hit rows are summed once)
  damageRows: ParsedEffectRow[];
  healRows: ParsedEffectRow[];
  cooldownSec: number;
  castTimeSec: number;
  durationSec: number;
  unverified: UnverifiedItem[];
}

// If a skill has any `Total ...` row, only the Total rows are used (the per-hit rows are the
// breakdown of the same damage; summing both would double count).
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
  if (dmg.usedHitSum || heal.usedHitSum) {
    unverified.push({
      key: 'rows.hitComposition',
      description:
        'No "Total" row in game data: the hit rows are summed once per cast. The real number of hits per cast is unverified.',
      refId: seed.refId,
    });
  }
  if (
    [...dmg.rows, ...heal.rows].some((r) => /per hit/i.test(r.label)) &&
    !unverified.some((u) => u.key === 'rows.perHitCount')
  ) {
    unverified.push({
      key: 'rows.perHitCount',
      description: 'A "per hit" row is counted once per cast. The hit count is unverified.',
      refId: seed.refId,
    });
  }

  const override = config.timingOverrides[seed.refId];
  const cdRow = seed.rows.find((r) => r.kind === 'timing_cd');
  const durationRow = seed.rows.find((r) => r.kind === 'timing_duration');
  const cooldownSec = override?.cooldownSec ?? cdRow?.seconds ?? 0;
  const castTimeSec = override?.castTimeSec ?? 0;
  if (override?.cooldownSec === undefined && cdRow === undefined) {
    unverified.push({
      key: 'timing.cooldown',
      description: 'No CD row in game data: cooldown = 0, so the skill is not auto-cast.',
      refId: seed.refId,
    });
  }
  if (override?.castTimeSec === undefined) {
    unverified.push({
      key: 'timing.castTime',
      description:
        'Cast time is not in the game data: 0 s is used (one simulator tick per action at minimum).',
      refId: seed.refId,
    });
  }

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
    cooldownSec,
    castTimeSec,
    durationSec: durationRow?.seconds ?? 0,
    unverified,
  };
}

// Builds the list of rotation actions for a build:
//   fixed skills (basic / special / ultimate, with talent replacements), the equipped Mastery
//   (Expertise) skills, and the two Battle Imagines.
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
// 4. Module combat bonuses (effectType === 3, skipped by calculateRawStats.ts)
//    Values: .agents/memories/domain_knowledge.md section 2.3 item 3 (verified).
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
  // Percent at Link Lv.5 / Lv.6
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
// 5. Dynamic (timed) buff rules
//    Numbers: stats/cookingBuff.ts (DMG_STACK_PER_STACK, AGILE_VALUES, LIFE_WAVE_VALUES) and
//    .agents/memories/domain_knowledge.md section 2.1.
// ---------------------------------------------------------------------------------------------

export const DYNAMIC_BUFF_RULES = {
  dmgStack: {
    id: 'module:2104',
    name: 'DMG Stack',
    // 20% chance on attack, up to 4 stacks, 8 s
    procChancePct: 20,
    maxStacks: 4,
    durationSec: 8,
    perStackPct: DMG_STACK_PER_STACK,
    // Whether a new stack refreshes the timer of every stack is not stated in the data.
    semanticsToVerify: 'Stack timer refresh rule (all stacks refresh together is assumed).',
  },
  agile: {
    id: 'module:2105',
    name: 'Agile',
    // ATK/MATK multiplier while active; lost for 5 s when damage is taken
    atkMultPct: { 5: AGILE_VALUES[5].atkMultPercent, 6: AGILE_VALUES[6].atkMultPercent },
    lostOnHitSec: 5,
  },
  lifeWave: {
    id: 'module:2404',
    name: 'Life Wave',
    // Highest of crit/haste/luck/mastery/versatility +x% for 5 s after an HP change
    valuePct: LIFE_WAVE_VALUES,
    durationSec: 5,
  },
} as const;

// ---------------------------------------------------------------------------------------------
// 6. Pending mechanics (NOT modelled: value 0 + _todo_verify)
// ---------------------------------------------------------------------------------------------

export type PendingCategory =
  | 'talent_proc'
  | 'imagine_passive'
  | 'imagine_buff'
  | 'suit_set'
  | 'far_sea'
  | 'psychoscope'
  | 'factor'
  | 'stat_resonance'
  | 'elemental'
  | 'mastery'
  | 'illusion_breaking'
  | 'defense'
  | 'resource'
  | 'cooldown_haste'
  | 'role_skill';

export interface PendingMechanic {
  id: string;
  category: PendingCategory;
  description: string;
  value: 0;
  _todo_verify: true;
}

export const PENDING_MECHANICS: readonly PendingMechanic[] = [
  {
    id: 'talent.procs',
    category: 'talent_proc',
    description:
      'Talent-node procs and sub-skills (<linktext> skills) are not simulated. Their multipliers are in Docs/RESOLVED_SUBSKILLS_AND_BUFFS.md and still need to be wired to talent-tree.json.',
    value: 0,
    _todo_verify: true,
  },
  {
    id: 'imagine.passive',
    category: 'imagine_passive',
    description:
      'Battle Imagine passive procs (conditional parts such as Igoreus {p2}) are not simulated. Permanent parts are already in the baseline.',
    value: 0,
    _todo_verify: true,
  },
  {
    id: 'imagine.buffRows',
    category: 'imagine_buff',
    description:
      'Imagine active buffs (ATK bonus, Crit bonus, Special Attack bonus...) are not applied to damage. Only their Total DMG / Total Healing rows are simulated.',
    value: 0,
    _todo_verify: true,
  },
  {
    id: 'suit.set24',
    category: 'suit_set',
    description: 'Equipment set bonuses 2/4 pieces (suits.json 100..103) are not applied.',
    value: 0,
    _todo_verify: true,
  },
  {
    id: 'weapon.farSea',
    category: 'far_sea',
    description:
      'Far Sea golden weapon effectType=3 affixes (2400003, 2400004, 2401020..2409040) are not applied.',
    value: 0,
    _todo_verify: true,
  },
  {
    id: 'phantom.psychoscope',
    category: 'psychoscope',
    description: 'Deep Slumber Psychoscope nodes (Link#1200..1219) are not applied in combat.',
    value: 0,
    _todo_verify: true,
  },
  {
    id: 'phantom.factors',
    category: 'factor',
    description:
      'Factor G1-G10 conditional parts and Illusion-Breaking DMG % are not applied (value 0).',
    value: 0,
    _todo_verify: true,
  },
  {
    id: 'buff.statResonance',
    category: 'stat_resonance',
    description:
      'Beat Performer stat resonance (talents 1324/1325) is not simulated; it is removed from the baseline by the sanitizer.',
    value: 0,
    _todo_verify: true,
  },
  {
    id: 'bucket.elemental',
    category: 'elemental',
    description:
      'Elemental flat/percent buckets are not applied: the per-skill element coefficient is not in the data.',
    value: 0,
    _todo_verify: true,
  },
  {
    id: 'bucket.mastery',
    category: 'mastery',
    description: 'Per-spec Mastery scaling bucket is not applied.',
    value: 0,
    _todo_verify: true,
  },
  {
    id: 'bucket.illusionBreaking',
    category: 'illusion_breaking',
    description: 'Illusion-Breaking DMG bucket is not applied.',
    value: 0,
    _todo_verify: true,
  },
  {
    id: 'target.defense',
    category: 'defense',
    description:
      'Enemy armor mitigation formula is unverified: the target mitigation is the configured value (default 0%).',
    value: 0,
    _todo_verify: true,
  },
  {
    id: 'skill.resources',
    category: 'resource',
    description:
      'Class resources (Ice Energy, Flame Soul, Stamina...) and charge systems are not modelled; skills are limited by cooldown only.',
    value: 0,
    _todo_verify: true,
  },
  {
    id: 'skill.cdHaste',
    category: 'cooldown_haste',
    description:
      'Haste scaling of cooldowns is not applied: the data does not tag which skills scale with Haste.',
    value: 0,
    _todo_verify: true,
  },
  {
    id: 'skill.roleSkills',
    category: 'role_skill',
    description: 'Role skills and talent skills are not part of the simulated rotation.',
    value: 0,
    _todo_verify: true,
  },
];

export function pendingToUnverified(): UnverifiedItem[] {
  return PENDING_MECHANICS.map((m) => ({ key: m.id, description: m.description }));
}
