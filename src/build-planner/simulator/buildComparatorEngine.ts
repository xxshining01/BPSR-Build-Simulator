// Phase 5.5 - Multi-Build Comparator (SDD section 3, ADR-012 decision 2).
//
// Builds come from the saved plans (`buildPlans` in store/planSlice.ts, persisted by
// plan/buildPlan.ts) plus the build currently open in the editor. Every build is simulated under
// the SAME conditions (same SimulationConfig and the same shared cookingBuff, because saved
// plans do not store the cooking/module-buff switches).
//
// Spec-Locked rule (ADR-004 / agents.md): only builds with the same professionKey AND
// professionTypeKey as the reference build are compared; the others are reported in `excluded`.
import { PROFESSIONS } from '../profession';
import type { BuildPlanData } from '../plan/buildPlan';
import { STATIC_AUTOSAVE_DEFAULTS, getDefaultProfessionState } from '../plan/planDefaults';
import type { BuildStore } from '../store/types';
import type { CombatGameData } from './combatMechanicsRegistry';
import { runCombatSimulation } from './combatSimulatorEngine';
import type {
  BaselineSummary,
  BuildComparisonEntry,
  BuildComparisonExcluded,
  BuildComparisonReport,
  SimulationConfig,
  SimulationResult,
  UnverifiedItem,
} from './types';

export const CURRENT_BUILD_ID = '__current__';

// Builds a BuildStore-shaped state from a saved plan. Functions and the shared cookingBuff come
// from `base`; every build-defining field comes from the plan (optional fields use the same
// defaults as store/planSlice.ts applyPlanState).
export function planToBuildState(plan: BuildPlanData, base: BuildStore): BuildStore {
  const professionDefaults = getDefaultProfessionState(plan.professionKey);
  return {
    ...base,
    planName: plan.name,
    professionKey: plan.professionKey,
    professionTypeKey: plan.professionTypeKey,
    equipped: plan.equipped,
    refineLevels: plan.refineLevels,
    perfectlines: plan.perfectlines,
    evolutionStats: plan.evolutionStats,
    legendaryAffixState: plan.legendaryAffixState,
    legendaryAffixGroupState:
      plan.legendaryAffixGroupState ?? STATIC_AUTOSAVE_DEFAULTS.legendaryAffixGroupState,
    masteryEquipped: plan.masteryEquipped,
    masteryLevels: plan.masteryLevels,
    masteryRanks: plan.masteryRanks,
    fixedLevels: plan.fixedLevels,
    fixedRanks: plan.fixedRanks,
    battleImagines: plan.battleImagines ?? STATIC_AUTOSAVE_DEFAULTS.battleImagines,
    imagineRanks: plan.imagineRanks ?? STATIC_AUTOSAVE_DEFAULTS.imagineRanks,
    roleSkillSlots: plan.roleSkillSlots ?? professionDefaults.roleSkillSlots,
    roleSkillRanks: plan.roleSkillRanks ?? professionDefaults.roleSkillRanks,
    talentR1EnabledIds: new Set(plan.talentR1EnabledIds),
    talentR2EnabledIds: new Set(plan.talentR2EnabledIds),
    slotEnchants: plan.slotEnchants ?? STATIC_AUTOSAVE_DEFAULTS.slotEnchants,
    moduleSlots: plan.moduleSlots ?? STATIC_AUTOSAVE_DEFAULTS.moduleSlots,
    adventurerLevel: plan.adventurerLevel ?? STATIC_AUTOSAVE_DEFAULTS.adventurerLevel,
    phantomEnabled: plan.phantomEnabled ?? STATIC_AUTOSAVE_DEFAULTS.phantomEnabled,
    phantomLevel: plan.phantomLevel ?? STATIC_AUTOSAVE_DEFAULTS.phantomLevel,
    phantomTemplateId: plan.phantomTemplateId ?? STATIC_AUTOSAVE_DEFAULTS.phantomTemplateId,
    phantomBondPoints: plan.phantomBondPoints ?? STATIC_AUTOSAVE_DEFAULTS.phantomBondPoints,
    phantomNodeSelections:
      plan.phantomNodeSelections ?? STATIC_AUTOSAVE_DEFAULTS.phantomNodeSelections,
    phantomFactorSlots: plan.phantomFactorSlots ?? STATIC_AUTOSAVE_DEFAULTS.phantomFactorSlots,
  };
}

export interface ComparatorOptions {
  config?: Partial<SimulationConfig>;
  // Display name of the build currently open in the editor
  currentBuildName?: string;
  // Include the build currently open in the editor (default true)
  includeCurrent?: boolean;
  // Restrict the comparison to these saved plan ids (default: all saved plans)
  planIds?: string[];
}

interface Candidate {
  id: string;
  name: string;
  state: BuildStore;
}

function describeSpec(state: { professionKey: string; professionTypeKey: string }): string {
  return `${state.professionKey} / ${state.professionTypeKey}`;
}

function deltaPct(value: number, best: number): number {
  return best > 0 ? ((value - best) / best) * 100 : 0;
}

function rankOf(values: number[], value: number): number {
  return 1 + values.filter((v) => v > value).length;
}

const STAT_FIELDS: { key: keyof BaselineSummary; label: string }[] = [
  { key: 'activeAtk', label: 'ATK/MATK' },
  { key: 'critPct', label: 'Crit %' },
  { key: 'critDamageBonusPct', label: 'Crit DMG +%' },
  { key: 'luckPct', label: 'Luck %' },
  { key: 'versatilityPct', label: 'Versatility %' },
  { key: 'boostPct', label: 'PHY/MAG Boost %' },
];

function statValue(result: SimulationResult, key: keyof BaselineSummary): number {
  const value = result.baseline[key];
  return typeof value === 'number' ? value : 0;
}

function fmtNum(value: number): string {
  return String(parseFloat(value.toFixed(2)));
}

function mergeUnverified(results: SimulationResult[]): UnverifiedItem[] {
  const seen = new Set<string>();
  const merged: UnverifiedItem[] = [];
  for (const result of results) {
    for (const item of result.verification.unverifiedItems) {
      const id = `${item.key}|${item.refId ?? ''}|${item.description}`;
      if (seen.has(id)) continue;
      seen.add(id);
      merged.push(item);
    }
  }
  return merged;
}

export function runBuildComparison(
  plans: BuildPlanData[],
  currentState: BuildStore,
  data: CombatGameData,
  options: ComparatorOptions = {},
): BuildComparisonReport {
  const specLock = {
    professionKey: currentState.professionKey,
    professionTypeKey: currentState.professionTypeKey,
  };

  const candidates: Candidate[] = [];
  if (options.includeCurrent !== false) {
    candidates.push({
      id: CURRENT_BUILD_ID,
      name: options.currentBuildName ?? (currentState.planName || 'Current build'),
      state: currentState,
    });
  }
  const selectedPlans =
    options.planIds === undefined ? plans : plans.filter((p) => options.planIds?.includes(p.id));
  for (const plan of selectedPlans) {
    candidates.push({ id: plan.id, name: plan.name, state: planToBuildState(plan, currentState) });
  }

  const excluded: BuildComparisonExcluded[] = [];
  const entries: BuildComparisonEntry[] = [];
  const results: SimulationResult[] = [];
  for (const candidate of candidates) {
    if (
      candidate.state.professionKey !== specLock.professionKey ||
      candidate.state.professionTypeKey !== specLock.professionTypeKey
    ) {
      excluded.push({
        planId: candidate.id,
        planName: candidate.name,
        reason: `Spec-Locked: ${describeSpec(candidate.state)} differs from ${describeSpec(specLock)}.`,
      });
      continue;
    }
    const result = runCombatSimulation(candidate.state, data, options.config);
    results.push(result);
    entries.push({
      planId: candidate.id,
      planName: candidate.name,
      professionKey: candidate.state.professionKey,
      professionTypeKey: candidate.state.professionTypeKey,
      result,
      rankByDps: 0,
      rankByHps: 0,
      rankByBurst: 0,
      dpsDeltaVsBestPct: 0,
      hpsDeltaVsBestPct: 0,
      burstDeltaVsBestPct: 0,
      strengths: [],
      weaknesses: [],
    });
  }

  const dpsValues = entries.map((e) => e.result.dps);
  const hpsValues = entries.map((e) => e.result.hps);
  const burstValues = entries.map((e) => e.result.peakBurstDps);
  const bestDps = Math.max(0, ...dpsValues);
  const bestHps = Math.max(0, ...hpsValues);
  const bestBurst = Math.max(0, ...burstValues);

  for (const entry of entries) {
    entry.rankByDps = rankOf(dpsValues, entry.result.dps);
    entry.rankByHps = rankOf(hpsValues, entry.result.hps);
    entry.rankByBurst = rankOf(burstValues, entry.result.peakBurstDps);
    entry.dpsDeltaVsBestPct = deltaPct(entry.result.dps, bestDps);
    entry.hpsDeltaVsBestPct = deltaPct(entry.result.hps, bestHps);
    entry.burstDeltaVsBestPct = deltaPct(entry.result.peakBurstDps, bestBurst);

    if (entries.length > 1) {
      if (entry.rankByDps === 1 && bestDps > 0) entry.strengths.push('Highest Effective DPS');
      if (entry.rankByHps === 1 && bestHps > 0) entry.strengths.push('Highest HPS');
      if (entry.rankByBurst === 1 && bestBurst > 0) entry.strengths.push('Highest burst DPS');
      if (entry.dpsDeltaVsBestPct < -1) {
        entry.weaknesses.push(`Effective DPS ${fmtNum(entry.dpsDeltaVsBestPct)}% vs best`);
      }
      if (entry.hpsDeltaVsBestPct < -1) {
        entry.weaknesses.push(`HPS ${fmtNum(entry.hpsDeltaVsBestPct)}% vs best`);
      }
      if (entry.burstDeltaVsBestPct < -1) {
        entry.weaknesses.push(`Burst DPS ${fmtNum(entry.burstDeltaVsBestPct)}% vs best`);
      }
      for (const field of STAT_FIELDS) {
        const values = entries.map((e) => statValue(e.result, field.key));
        const best = Math.max(...values);
        const mine = statValue(entry.result, field.key);
        if (mine >= best && best > Math.min(...values)) {
          entry.strengths.push(`Highest ${field.label} (${fmtNum(mine)})`);
        } else if (best > 0 && ((best - mine) / best) * 100 > 1) {
          entry.weaknesses.push(`${field.label} ${fmtNum(mine)} vs best ${fmtNum(best)}`);
        }
      }
    }
  }

  const byDps = [...entries].sort((a, b) => b.result.dps - a.result.dps);
  const byHps = [...entries].sort((a, b) => b.result.hps - a.result.hps);
  const byBurst = [...entries].sort((a, b) => b.result.peakBurstDps - a.result.peakBurstDps);

  const winnerReasons: string[] = [];
  if (byDps.length >= 2) {
    const [winner, runnerUp] = byDps;
    const gap = deltaPct(winner.result.dps, runnerUp.result.dps);
    if (winner.result.dps === runnerUp.result.dps) {
      winnerReasons.push('Top builds have identical Effective DPS under the current data.');
    } else {
      winnerReasons.push(
        `${winner.planName} beats ${runnerUp.planName} by ${fmtNum(gap)}% Effective DPS (${fmtNum(winner.result.dps)} vs ${fmtNum(runnerUp.result.dps)}).`,
      );
      for (const field of STAT_FIELDS) {
        const a = statValue(winner.result, field.key);
        const b = statValue(runnerUp.result, field.key);
        if (a !== b) {
          winnerReasons.push(
            `${field.label}: ${fmtNum(a)} vs ${fmtNum(b)} (${a > b ? '+' : ''}${fmtNum(a - b)}).`,
          );
        }
      }
    }
  } else if (byDps.length === 1) {
    winnerReasons.push('Only one build is eligible for comparison under the Spec-Locked rule.');
  }

  const unverifiedItems = mergeUnverified(results);
  return {
    specLock,
    entries,
    excluded,
    winnerByDps: byDps[0]?.result.dps > 0 ? byDps[0].planId : null,
    winnerByHps: byHps[0]?.result.hps > 0 ? byHps[0].planId : null,
    winnerByBurst: byBurst[0]?.result.peakBurstDps > 0 ? byBurst[0].planId : null,
    winnerReasons,
    verification: {
      status: unverifiedItems.length > 0 ? 'provisional' : 'verified',
      unverifiedItems,
    },
  };
}

// Convenience: label for the UI.
export function professionLabel(professionKey: BuildPlanData['professionKey']): string {
  return PROFESSIONS[professionKey].key;
}
