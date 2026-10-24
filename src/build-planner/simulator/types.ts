// Phase 5.1 - shared data contracts for the combat simulator
// (Docs/SAD.md section 2, Docs/SDD.md section 4, ADR-010/011/012).
//
// Policy (zero_hallucination): any value that does not exist in src/data/*.json or
// src/locales/en_US/game-data.json is set to 0, flagged `_todo_verify: true`, and listed in
// SimulationResult.verification. No guessed numbers are ever inserted.
import type { ProfessionKey, ProfessionTypeKey } from '../profession';

// ---- Constants (.agents/knowledge/05_simulator_and_rotation_engine.md section 1) ----

export const SIM_DURATION_SEC_DEFAULT = 300;
export const SIM_TICK_MS_DEFAULT = 50;

// ---- Common ----

export type SourceCategory =
  | 'basic'
  | 'active'
  | 'passive'
  | 'talent_proc'
  | 'ultimate'
  | 'imagine'
  | 'module'
  | 'consumable';

export type TargetKind = 'normal' | 'elite' | 'boss';

// provisional = at least one unverified value (substituted by 0) influences the result.
export type VerificationStatus = 'verified' | 'provisional';

export interface UnverifiedItem {
  // e.g. 'timing.castTime', 'target.defMitigation'
  key: string;
  // Human readable impact description (shown verbatim in the UI)
  description: string;
  // Related skillId / imagineId (optional)
  refId?: number;
}

export interface VerificationSummary {
  status: VerificationStatus;
  unverifiedItems: UnverifiedItem[];
}

// ---- Simulation config ----

export interface SkillTimingOverride {
  cooldownSec?: number;
  castTimeSec?: number;
}

export interface SimulationConfig {
  // Default 300 s (5 minutes)
  durationSec: number;
  // Default 50 ms (6,000 ticks)
  tickMs: number;
  useUltimate: boolean;
  useImagine1: boolean;
  useImagine2: boolean;
  // Whether food / syrup / star oil / event buffs are part of the baseline stats
  includeConsumables: boolean;
  target: {
    kind: TargetKind;
    // Enemy defense mitigation (%). The formula is unverified, so default is 0 + _todo_verify.
    defMitigationPct: number;
    _todo_verify: boolean;
  };
  // Duration of one basic-attack chain (s). Not present in ZTable data, so default is 0
  // (unverified). When 0 the basic attack is NOT used as filler.
  basicAttackIntervalSec: number;
  // Only if the user holds verified values may they override timing per skillId.
  timingOverrides: Record<number, SkillTimingOverride>;
  // Interval between hits taken (s). 0 = never. Drives the 5 s Agile drop-off.
  incomingHitIntervalSec: number;
  // Interval between HP changes (s). 0 = never. Drives the Life Wave trigger.
  hpChangeIntervalSec: number;
  // Sliding window used for Peak Burst DPS (s)
  burstWindowSec: number;
  // Seed of the deterministic PRNG used for the DMG Stack 20% roll (ADR-003)
  rngSeed: number;
  // Max retained combat log entries (memory guard)
  combatLogLimit: number;
}

export const DEFAULT_SIMULATION_CONFIG: SimulationConfig = {
  durationSec: SIM_DURATION_SEC_DEFAULT,
  tickMs: SIM_TICK_MS_DEFAULT,
  useUltimate: true,
  useImagine1: true,
  useImagine2: true,
  includeConsumables: true,
  target: { kind: 'boss', defMitigationPct: 0, _todo_verify: true },
  basicAttackIntervalSec: 0,
  timingOverrides: {},
  incomingHitIntervalSec: 0,
  hpChangeIntervalSec: 0,
  burstWindowSec: 10,
  rngSeed: 1,
  combatLogLimit: 2000,
};

// ---- Formula traceability (Formula Audit Inspector) ----

export interface FormulaTraceBucket {
  label: string;
  // Multiplier (already expressed as 1 + x)
  value: number;
  // Breakdown for display, e.g. ['PHY Boost 12.3%', 'Elite Strike 6.6%']
  components: string[];
}

export interface FormulaTrace {
  actionId: string;
  rowLabel: string;
  kind: 'damage' | 'heal';
  level: number;
  rank: number;
  activeAtkStat: 'atk' | 'matk';
  activeAtk: number;
  skillMultiplierPct: number;
  skillFlat: number;
  // Atk x mult% + flat
  baseHit: number;
  defMitigation: number;
  boostBucket: FormulaTraceBucket;
  versatilityBucket: FormulaTraceBucket;
  critEv: FormulaTraceBucket;
  luckEv: FormulaTraceBucket;
  // Expected value of one hit
  hitValue: number;
  // Terms that were set to 0 because they are unverified
  zeroedTerms: string[];
}

// ---- Rows (per-action table) ----

export interface SkillSimRow {
  actionId: string;
  name: string;
  sourceCategory: SourceCategory;
  castCount: number;
  totalDamage: number;
  dps: number;
  damageSharePct: number;
  totalHeal: number;
  hps: number;
  healSharePct: number;
  avgBuffPct: number;
  buffContributionPct: number;
  // Representative traces used for this row (Formula Audit Inspector)
  formulaTraces: FormulaTrace[];
  // Unverified items attached to this row (UI badge)
  unverified: UnverifiedItem[];
}

export interface BuffUptimeRow {
  buffId: string;
  name: string;
  source: 'module' | 'consumable' | 'imagine' | 'talent';
  // Percentage of time the buff is active
  uptimePct: number;
  // Effect while active (%). For DMG Stack: average stacks x per-stack value.
  valuePctWhenActive: number;
  // Time-weighted average effect (%)
  avgValuePct: number;
  // Share of the integral of all buffs (%)
  contributionPct: number;
}

export interface CombatLogEntry {
  tMs: number;
  actionId: string;
  name: string;
  kind: 'damage' | 'heal' | 'buff_on' | 'buff_off' | 'skip';
  amount: number;
  note?: string;
}

// ---- Sanitized baseline summary ----

export interface BaselineSummary {
  attackStat: 'atk' | 'matk';
  activeAtk: number;
  critPct: number;
  critDamageBonusPct: number;
  luckPct: number;
  luckyHitDamageMultiplierPct: number;
  versatilityPct: number;
  versatilityDamageBonusPct: number;
  hastePct: number;
  atkSpeedPct: number;
  castSpeedPct: number;
  boostPct: number;
  masteryPct: number;
  // Reference: the five secondary final values (%) after sanitizing
  finalStats: Record<'crit' | 'haste' | 'luck' | 'mastery' | 'versatility', number>;
}

// ---- Simulation result ----

export interface SimulationResult {
  durationSec: number;
  totalDamage: number;
  // Effective DPS (dynamic buffs included)
  dps: number;
  peakBurstDps: number;
  // DPS of the same rotation with every dynamic buff (DMG Stack/Agile/Life Wave/Imagine buffs) off
  unbuffedBaselineDps: number;
  totalHeal: number;
  hps: number;
  averageBuffPct: number;
  rows: SkillSimRow[];
  buffUptime: BuffUptimeRow[];
  combatLog: CombatLogEntry[];
  baseline: BaselineSummary;
  verification: VerificationSummary;
  config: SimulationConfig;
}

// ---- Build comparison ----

export interface BuildComparisonEntry {
  planId: string;
  planName: string;
  professionKey: ProfessionKey;
  professionTypeKey: ProfessionTypeKey;
  result: SimulationResult;
  rankByDps: number;
  rankByHps: number;
  rankByBurst: number;
  // Difference (%) against the best value of each metric. The best entry is 0.
  dpsDeltaVsBestPct: number;
  hpsDeltaVsBestPct: number;
  burstDeltaVsBestPct: number;
  strengths: string[];
  weaknesses: string[];
}

export interface BuildComparisonExcluded {
  planId: string;
  planName: string;
  reason: string;
}

export interface BuildComparisonReport {
  // Spec-Locked: only builds with the same professionKey / professionTypeKey are compared
  specLock: { professionKey: ProfessionKey; professionTypeKey: ProfessionTypeKey };
  entries: BuildComparisonEntry[];
  excluded: BuildComparisonExcluded[];
  winnerByDps: string | null;
  winnerByHps: string | null;
  winnerByBurst: string | null;
  // Why the winner won (numeric differences of baseline stats)
  winnerReasons: string[];
  verification: VerificationSummary;
}
