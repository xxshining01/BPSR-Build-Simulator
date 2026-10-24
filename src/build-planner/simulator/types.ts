// Phase 5.1 & Phase 7 Upgrade - shared data contracts for the full dynamic combat simulator
import type { ProfessionKey, ProfessionTypeKey } from '../profession';

export const SIM_DURATION_SEC_DEFAULT = 300;
export const SIM_TICK_MS_DEFAULT = 50;

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

export type VerificationStatus = 'verified' | 'provisional';

export interface UnverifiedItem {
  key: string;
  description: string;
  refId?: number;
}

export interface VerificationSummary {
  status: VerificationStatus;
  unverifiedItems: UnverifiedItem[];
}

export interface SkillTimingOverride {
  cooldownSec?: number;
  castTimeSec?: number;
}

export interface SimulationConfig {
  durationSec: number;
  tickMs: number;
  useUltimate: boolean;
  useImagine1: boolean;
  useImagine2: boolean;
  includeConsumables: boolean;
  target: {
    kind: TargetKind;
    defMitigationPct: number;
    _todo_verify: boolean;
  };
  // Default 1.2s basic attack filler interval so basic attacks weave naturally between cooldowns
  basicAttackIntervalSec: number;
  timingOverrides: Record<number, SkillTimingOverride>;
  // Interval between incoming hits (s). 0 = never hit (Agile stays 100%).
  incomingHitIntervalSec: number;
  // Interval between HP fluctuations / active HP sustain (s). Default 4s so Life Wave stays active.
  hpChangeIntervalSec: number;
  // When true, any healing skill or periodic HP sustain keeps HP fluctuating for Life Wave
  sustainHpFluctuation: boolean;
  burstWindowSec: number;
  rngSeed: number;
  combatLogLimit: number;
}

export const DEFAULT_SIMULATION_CONFIG: SimulationConfig = {
  durationSec: SIM_DURATION_SEC_DEFAULT,
  tickMs: SIM_TICK_MS_DEFAULT,
  useUltimate: true,
  useImagine1: true,
  useImagine2: true,
  includeConsumables: true,
  target: { kind: 'boss', defMitigationPct: 0, _todo_verify: false },
  basicAttackIntervalSec: 1.2,
  timingOverrides: {},
  incomingHitIntervalSec: 15,
  hpChangeIntervalSec: 4,
  sustainHpFluctuation: true,
  burstWindowSec: 10,
  rngSeed: 1,
  combatLogLimit: 2000,
};

export interface FormulaTraceBucket {
  label: string;
  value: number;
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
  baseHit: number;
  defMitigation: number;
  boostBucket: FormulaTraceBucket;
  versatilityBucket: FormulaTraceBucket;
  critEv: FormulaTraceBucket;
  luckEv: FormulaTraceBucket;
  hitValue: number;
  zeroedTerms: string[];
}

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
  formulaTraces: FormulaTrace[];
  unverified: UnverifiedItem[];
}

export interface BuffUptimeRow {
  buffId: string;
  name: string;
  source: 'module' | 'consumable' | 'imagine' | 'talent';
  uptimePct: number;
  valuePctWhenActive: number;
  avgValuePct: number;
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
  finalStats: Record<'crit' | 'haste' | 'luck' | 'mastery' | 'versatility', number>;
}

export interface SimulationResult {
  durationSec: number;
  totalDamage: number;
  dps: number;
  peakBurstDps: number;
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

export interface BuildComparisonEntry {
  planId: string;
  planName: string;
  professionKey: ProfessionKey;
  professionTypeKey: ProfessionTypeKey;
  result: SimulationResult;
  rankByDps: number;
  rankByHps: number;
  rankByBurst: number;
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
  specLock: { professionKey: ProfessionKey; professionTypeKey: ProfessionTypeKey };
  entries: BuildComparisonEntry[];
  excluded: BuildComparisonExcluded[];
  winnerByDps: string | null;
  winnerByHps: string | null;
  winnerByBurst: string | null;
  winnerReasons: string[];
  verification: VerificationSummary;
}
