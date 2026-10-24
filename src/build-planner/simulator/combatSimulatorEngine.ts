// Phase 5.4 - Time-stepped combat simulator (ADR-003, ADR-011, SDD sections 2 and 4).
//
// Deterministic 5-minute (300 s) auto-rotation on a fixed tick (default 50 ms = 6,000 ticks).
// Damage and healing are expected values (crit / lucky strike as EV). The only random element
// is the DMG Stack 20% proc, driven by a seeded PRNG so results are reproducible.
//
// The engine NEVER invents numbers. Everything missing from the game data is replaced by 0 and
// reported in `result.verification` (zero_hallucination rule / ADR-012 decision 4).
import { PROFESSIONS } from '../profession';
import type { BuildStore } from '../store/types';
import { attackStatOf, computeSanitizedBaselineBundle } from './baselineSanitizer';
import type { DynamicBuffRequests } from './baselineSanitizer';
import {
  DYNAMIC_BUFF_RULES,
  pendingToUnverified,
  resolveModuleBonuses,
  resolveRotationActions,
} from './combatMechanicsRegistry';
import type {
  ActiveModuleBonus,
  CombatGameData,
  ParsedEffectRow,
  RotationAction,
} from './combatMechanicsRegistry';
import { DEFAULT_SIMULATION_CONFIG } from './types';
import type {
  BaselineSummary,
  BuffUptimeRow,
  CombatLogEntry,
  FormulaTrace,
  FormulaTraceBucket,
  SimulationConfig,
  SimulationResult,
  SkillSimRow,
  UnverifiedItem,
} from './types';

export { DE_DUPLICATION_REGISTRY } from './baselineSanitizer';

// Versatility -> damage/heal bonus ratio, identical to stats/deriveStats.ts
// (`versatilityDamageBonusPercent: versatilityPercent * 0.35`).
const VERSATILITY_DAMAGE_RATIO = 0.35;

const FIVE_SECONDARY_STATS = ['crit', 'haste', 'luck', 'mastery', 'versatility'] as const;
type SecondaryStat = (typeof FIVE_SECONDARY_STATS)[number];

// ---------------------------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------------------------

export function resolveSimulationConfig(patch?: Partial<SimulationConfig>): SimulationConfig {
  return {
    ...DEFAULT_SIMULATION_CONFIG,
    ...patch,
    target: { ...DEFAULT_SIMULATION_CONFIG.target, ...patch?.target },
    timingOverrides: { ...DEFAULT_SIMULATION_CONFIG.timingOverrides, ...patch?.timingOverrides },
  };
}

// ---------------------------------------------------------------------------------------------
// Deterministic PRNG (mulberry32)
// ---------------------------------------------------------------------------------------------

function createRng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------------------------------------------------------------------------------------------
// Baseline context
// ---------------------------------------------------------------------------------------------

interface BaselineContext {
  attackStat: 'atk' | 'matk';
  activeAtk: number;
  critPct: number;
  critDamageBonusPct: number;
  luckPct: number;
  luckyHitDamageMultiplierPct: number;
  critRecoveryPct: number;
  luckyHitRecoveryMultiplierPct: number;
  versatilityPct: number;
  versatilityDamageBonusPct: number;
  boostPct: number;
  bossDamageBonusPct: number;
  atkSpeedPct: number;
  castSpeedPct: number;
  hastePct: number;
  masteryPct: number;
  finalFive: Record<SecondaryStat, number>;
  moduleBonuses: ActiveModuleBonus[];
  foodEliteDamagePct: number;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function buildBaselineContext(
  state: BuildStore,
  bundle: ReturnType<typeof computeSanitizedBaselineBundle>['bundle'],
  config: SimulationConfig,
): BaselineContext {
  const profession = PROFESSIONS[state.professionKey];
  const attackStat = attackStatOf(state.professionKey);
  const derived = bundle.derivedStats;
  const finalFive = {
    crit: bundle.stats.crit,
    haste: bundle.stats.haste,
    luck: bundle.stats.luck,
    mastery: bundle.stats.mastery,
    versatility: bundle.stats.versatility,
  };
  return {
    attackStat,
    activeAtk: bundle.stats[attackStat],
    critPct: finalFive.crit,
    critDamageBonusPct: derived.critDamageBonusPercent,
    luckPct: finalFive.luck,
    luckyHitDamageMultiplierPct: derived.luckyHitDamageMultiplierPercent,
    critRecoveryPct: derived.critRecoveryPercent,
    luckyHitRecoveryMultiplierPct: derived.luckyHitRecoveryMultiplierPercent,
    versatilityPct: finalFive.versatility,
    versatilityDamageBonusPct: finalFive.versatility * VERSATILITY_DAMAGE_RATIO,
    boostPct:
      profession.attackType === 'physical'
        ? derived.physicalBoostPercent
        : derived.magicalBoostPercent,
    bossDamageBonusPct: bundle.rawStats.bossDamageBonus / 100,
    atkSpeedPct: derived.atkSpeedPercent,
    castSpeedPct: derived.castSpeedPercent,
    hastePct: finalFive.haste,
    masteryPct: finalFive.mastery,
    finalFive,
    moduleBonuses: resolveModuleBonuses(state.moduleSlots),
    foodEliteDamagePct:
      config.includeConsumables &&
      state.cookingBuff.cookingEnabled &&
      config.target.kind !== 'normal'
        ? state.cookingBuff.cookingEliteDamagePercent
        : 0,
  };
}

function toBaselineSummary(ctx: BaselineContext): BaselineSummary {
  return {
    attackStat: ctx.attackStat,
    activeAtk: ctx.activeAtk,
    critPct: ctx.critPct,
    critDamageBonusPct: ctx.critDamageBonusPct,
    luckPct: ctx.luckPct,
    luckyHitDamageMultiplierPct: ctx.luckyHitDamageMultiplierPct,
    versatilityPct: ctx.versatilityPct,
    versatilityDamageBonusPct: ctx.versatilityDamageBonusPct,
    hastePct: ctx.hastePct,
    atkSpeedPct: ctx.atkSpeedPct,
    castSpeedPct: ctx.castSpeedPct,
    boostPct: ctx.boostPct,
    masteryPct: ctx.masteryPct,
    finalStats: { ...ctx.finalFive },
  };
}

// ---------------------------------------------------------------------------------------------
// Buff snapshot + hit evaluation
// ---------------------------------------------------------------------------------------------

interface BuffSnapshot {
  // Additive damage bonus from DMG Stack (%)
  dmgStackPct: number;
  // ATK/MATK multiplier from Agile (%)
  agileAtkMultPct: number;
  // Life Wave: +x% on `lifeWaveStat` while active
  lifeWaveStat: SecondaryStat | null;
  lifeWaveValuePct: number;
}

const NO_BUFFS: BuffSnapshot = {
  dmgStackPct: 0,
  agileAtkMultPct: 0,
  lifeWaveStat: null,
  lifeWaveValuePct: 0,
};

function bucket(label: string, value: number, components: string[]): FormulaTraceBucket {
  return { label, value, components };
}

function fmt(value: number): string {
  return String(parseFloat(value.toFixed(2)));
}

interface EvalResult {
  damage: number;
  heal: number;
  traces: FormulaTrace[];
}

function evaluateAction(
  action: RotationAction,
  ctx: BaselineContext,
  snap: BuffSnapshot,
  config: SimulationConfig,
): EvalResult {
  const lifeCrit = snap.lifeWaveStat === 'crit' ? snap.lifeWaveValuePct : 0;
  const lifeLuck = snap.lifeWaveStat === 'luck' ? snap.lifeWaveValuePct : 0;
  const lifeVers =
    snap.lifeWaveStat === 'versatility' ? snap.lifeWaveValuePct * VERSATILITY_DAMAGE_RATIO : 0;

  const pCrit = clamp(ctx.critPct + lifeCrit, 0, 100) / 100;
  const pLuck = clamp(ctx.luckPct + lifeLuck, 0, 100) / 100;
  const versDmgPct = ctx.versatilityDamageBonusPct + lifeVers;
  const activeAtk = ctx.activeAtk * (1 + snap.agileAtkMultPct / 100);
  const defMitigation = 1 - clamp(config.target.defMitigationPct, 0, 100) / 100;

  // ---- damage bucket components (additive) ----
  const boostComponents: string[] = [];
  let boostSum = 0;
  const addBoost = (label: string, pct: number): void => {
    if (pct === 0) return;
    boostSum += pct;
    boostComponents.push(`${label} ${fmt(pct)}%`);
  };
  addBoost(ctx.attackStat === 'atk' ? 'PHY Boost' : 'MAG Boost', ctx.boostPct);
  for (const m of ctx.moduleBonuses) {
    const applies =
      (m.scope === 'physicalDamage' && ctx.attackStat === 'atk') ||
      (m.scope === 'magicalDamage' && ctx.attackStat === 'matk') ||
      (m.scope === 'specialDamage' && action.skillClass === 'special') ||
      (m.scope === 'eliteBossDamage' && config.target.kind !== 'normal');
    if (applies) addBoost(`${m.name} (Lv.${m.level})`, m.pct);
  }
  if (config.target.kind === 'boss') addBoost('Boss DMG', ctx.bossDamageBonusPct);
  addBoost('Food Elite DMG', ctx.foodEliteDamagePct);
  addBoost('DMG Stack', snap.dmgStackPct);

  // ---- healing bucket components (additive module bonuses only) ----
  const healComponents: string[] = [];
  let healSum = 0;
  for (const m of ctx.moduleBonuses) {
    const applies =
      (m.scope === 'specialHealing' && action.skillClass === 'special') ||
      (m.scope === 'expertiseHealing' && action.skillClass === 'expertise');
    if (applies) {
      healSum += m.pct;
      healComponents.push(`${m.name} (Lv.${m.level}) ${fmt(m.pct)}%`);
    }
  }

  const traces: FormulaTrace[] = [];
  let damage = 0;
  let heal = 0;

  const evalRow = (row: ParsedEffectRow, kind: 'damage' | 'heal'): number => {
    const baseHit = (activeAtk * row.multiplierPct) / 100 + row.flat;
    const versBucket = bucket('Versatility', 1 + versDmgPct / 100, [
      `Versatility ${fmt(versDmgPct)}%`,
    ]);
    const critPercent = kind === 'damage' ? ctx.critDamageBonusPct : ctx.critRecoveryPct;
    const luckPercent =
      kind === 'damage' ? ctx.luckyHitDamageMultiplierPct : ctx.luckyHitRecoveryMultiplierPct;
    const critEv = bucket('Crit EV', 1 + (pCrit * critPercent) / 100, [
      `P(crit) ${fmt(pCrit * 100)}%`,
      `${kind === 'damage' ? 'Crit DMG' : 'Crit Healing'} +${fmt(critPercent)}%`,
    ]);
    const luckEv = bucket('Lucky Strike EV', 1 + (pLuck * luckPercent) / 100, [
      `P(luck) ${fmt(pLuck * 100)}%`,
      `Lucky Strike +${fmt(luckPercent)}%`,
    ]);
    let boostBucket: FormulaTraceBucket;
    let mitigation: number;
    const zeroedTerms: string[] = [];
    if (kind === 'damage') {
      boostBucket = bucket('Additive DMG Bonus', 1 + boostSum / 100, boostComponents);
      mitigation = defMitigation;
      zeroedTerms.push(
        'Elemental bucket',
        'Mastery bucket',
        'Illusion-Breaking bucket',
        'Final DMG bucket',
      );
      if (config.target._todo_verify) zeroedTerms.push('Enemy defense (default 0%)');
    } else {
      boostBucket = bucket('Additive Heal Bonus', 1 + healSum / 100, healComponents);
      mitigation = 1;
      zeroedTerms.push('Healing Output %', 'Target Healing Received %');
    }
    const hitValue =
      baseHit * mitigation * boostBucket.value * versBucket.value * critEv.value * luckEv.value;
    if (traces.length < 8) {
      traces.push({
        actionId: action.actionId,
        rowLabel: row.label,
        kind,
        level: action.level,
        rank: action.rank,
        activeAtkStat: ctx.attackStat,
        activeAtk,
        skillMultiplierPct: row.multiplierPct,
        skillFlat: row.flat,
        baseHit,
        defMitigation: mitigation,
        boostBucket,
        versatilityBucket: versBucket,
        critEv,
        luckEv,
        hitValue,
        zeroedTerms,
      });
    }
    return hitValue;
  };

  for (const row of action.damageRows) damage += evalRow(row, 'damage');
  for (const row of action.healRows) heal += evalRow(row, 'heal');
  return { damage, heal, traces };
}

// ---------------------------------------------------------------------------------------------
// One simulation pass
// ---------------------------------------------------------------------------------------------

interface ActionAccumulator {
  action: RotationAction;
  castCount: number;
  totalDamage: number;
  totalHeal: number;
  traces: FormulaTrace[];
}

interface BuffAccumulator {
  buffId: string;
  name: string;
  source: 'module';
  activeMs: number;
  valueIntegral: number;
  activations: number;
  // dmgStack only: sum of stacks over active ticks (to average stack count)
  stackTickSum: number;
}

interface PassResult {
  accumulators: Map<string, ActionAccumulator>;
  buffs: BuffAccumulator[];
  damagePerTick: Float64Array;
  totalDamage: number;
  totalHeal: number;
  log: CombatLogEntry[];
  skipped: { action: RotationAction; reason: string }[];
}

function isActionEnabled(action: RotationAction, config: SimulationConfig): boolean {
  switch (action.toggle) {
    case 'ultimate':
      return config.useUltimate;
    case 'imagine1':
      return config.useImagine1;
    case 'imagine2':
      return config.useImagine2;
    default:
      return true;
  }
}

function pickHighestSecondary(finalFive: Record<SecondaryStat, number>): SecondaryStat {
  let best: SecondaryStat = FIVE_SECONDARY_STATS[0];
  for (const stat of FIVE_SECONDARY_STATS) {
    if (finalFive[stat] > finalFive[best]) best = stat;
  }
  return best;
}

function simulatePass(
  actions: RotationAction[],
  ctx: BaselineContext,
  requests: DynamicBuffRequests,
  config: SimulationConfig,
  dynamicEnabled: boolean,
  recordLog: boolean,
): PassResult {
  const tickMs = config.tickMs;
  const totalTicks = Math.round((config.durationSec * 1000) / tickMs);
  const rng = createRng(config.rngSeed);

  const accumulators = new Map<string, ActionAccumulator>();
  const skipped: { action: RotationAction; reason: string }[] = [];
  const log: CombatLogEntry[] = [];
  const pushLog = (entry: CombatLogEntry): void => {
    if (recordLog && log.length < config.combatLogLimit) log.push(entry);
  };

  // ---- decide which actions take part ----
  const enabled = actions.filter((a) => isActionEnabled(a, config));
  const basic = enabled.find((a) => a.skillClass === 'basic');
  const rotationPool: RotationAction[] = [];
  for (const action of enabled) {
    if (action.skillClass === 'basic') continue;
    const hasEffect = action.damageRows.length > 0 || action.healRows.length > 0;
    if (!hasEffect) {
      skipped.push({ action, reason: 'No damage or healing row in game data (buff-only skill).' });
      continue;
    }
    if (action.cooldownSec <= 0) {
      skipped.push({ action, reason: 'Cooldown unverified (0): not auto-cast.' });
      continue;
    }
    rotationPool.push(action);
  }
  const basicUsable =
    basic !== undefined &&
    config.basicAttackIntervalSec > 0 &&
    (basic.damageRows.length > 0 || basic.healRows.length > 0);
  if (basic !== undefined && !basicUsable) {
    skipped.push({
      action: basic,
      reason: 'Basic attack interval unverified (0): not used as filler.',
    });
  }

  for (const action of [...rotationPool, ...(basicUsable && basic ? [basic] : [])]) {
    accumulators.set(action.actionId, {
      action,
      castCount: 0,
      totalDamage: 0,
      totalHeal: 0,
      traces: [],
    });
  }
  for (const s of skipped) {
    if (!accumulators.has(s.action.actionId)) {
      accumulators.set(s.action.actionId, {
        action: s.action,
        castCount: 0,
        totalDamage: 0,
        totalHeal: 0,
        traces: [],
      });
    }
  }

  // ---- priority order (knowledge/05 section 2) ----
  // 1) Imagine 1 & 2  2) Ultimate  3) Special / Expertise by expected damage per cast
  const perCast = (a: RotationAction): number => {
    const ev = evaluateAction(a, ctx, NO_BUFFS, config);
    return ev.damage + ev.heal;
  };
  const imaginePool = rotationPool
    .filter((a) => a.skillClass === 'imagine')
    .sort((a, b) => (a.toggle === 'imagine1' ? -1 : 0) - (b.toggle === 'imagine1' ? -1 : 0));
  const ultimatePool = rotationPool.filter((a) => a.skillClass === 'ultimate');
  const corePool = rotationPool
    .filter((a) => a.skillClass === 'special' || a.skillClass === 'expertise')
    .map((a) => ({ a, value: perCast(a) }))
    .sort((x, y) => y.value - x.value)
    .map((x) => x.a);
  const order = [...imaginePool, ...ultimatePool, ...corePool];

  // ---- buff state ----
  const stackPer = (level: 5 | 6): number => DYNAMIC_BUFF_RULES.dmgStack.perStackPct[level];
  const dmgOn = dynamicEnabled && requests.dmgStackLevel !== 0;
  const agileOn = dynamicEnabled && requests.agileLevel !== 0;
  const lifeOn = dynamicEnabled && requests.lifeWaveLevel !== 0;
  const lifeStat = pickHighestSecondary(ctx.finalFive);
  const lifeDamageRelevant = lifeStat === 'crit' || lifeStat === 'luck' || lifeStat === 'versatility';

  const buffs: BuffAccumulator[] = [];
  const dmgBuff: BuffAccumulator = {
    buffId: DYNAMIC_BUFF_RULES.dmgStack.id,
    name: DYNAMIC_BUFF_RULES.dmgStack.name,
    source: 'module',
    activeMs: 0,
    valueIntegral: 0,
    activations: 0,
    stackTickSum: 0,
  };
  const agileBuff: BuffAccumulator = {
    buffId: DYNAMIC_BUFF_RULES.agile.id,
    name: DYNAMIC_BUFF_RULES.agile.name,
    source: 'module',
    activeMs: 0,
    valueIntegral: 0,
    activations: 0,
    stackTickSum: 0,
  };
  const lifeBuff: BuffAccumulator = {
    buffId: DYNAMIC_BUFF_RULES.lifeWave.id,
    name: lifeDamageRelevant
      ? DYNAMIC_BUFF_RULES.lifeWave.name
      : `${DYNAMIC_BUFF_RULES.lifeWave.name} (no modelled damage effect: highest stat is ${lifeStat})`,
    source: 'module',
    activeMs: 0,
    valueIntegral: 0,
    activations: 0,
    stackTickSum: 0,
  };
  if (dmgOn) buffs.push(dmgBuff);
  if (agileOn) buffs.push(agileBuff);
  if (lifeOn) buffs.push(lifeBuff);

  let stacks = 0;
  let stackExpiryMs = 0;
  let agileOffUntilMs = 0;
  let nextHitMs = config.incomingHitIntervalSec > 0 ? config.incomingHitIntervalSec * 1000 : Infinity;
  let lifeUntilMs = 0;
  let nextHpChangeMs = config.hpChangeIntervalSec > 0 ? config.hpChangeIntervalSec * 1000 : Infinity;
  let agileWasActive = false;
  let lifeWasActive = false;

  const nextReadyMs = new Map<string, number>();
  let lockUntilMs = 0;
  const damagePerTick = new Float64Array(totalTicks);
  let totalDamage = 0;
  let totalHeal = 0;

  for (let tick = 0; tick < totalTicks; tick++) {
    const t = tick * tickMs;

    // ---- update timed buffs ----
    if (agileOn) {
      while (t >= nextHitMs) {
        agileOffUntilMs = nextHitMs + DYNAMIC_BUFF_RULES.agile.lostOnHitSec * 1000;
        nextHitMs += config.incomingHitIntervalSec * 1000;
      }
    }
    if (lifeOn) {
      while (t >= nextHpChangeMs) {
        lifeUntilMs = nextHpChangeMs + DYNAMIC_BUFF_RULES.lifeWave.durationSec * 1000;
        lifeBuff.activations += 1;
        nextHpChangeMs += config.hpChangeIntervalSec * 1000;
      }
    }
    if (dmgOn && stacks > 0 && t >= stackExpiryMs) {
      stacks = 0;
      pushLog({ tMs: t, actionId: dmgBuff.buffId, name: dmgBuff.name, kind: 'buff_off', amount: 0 });
    }
    const agileActive = agileOn && t >= agileOffUntilMs;
    const lifeActive = lifeOn && t < lifeUntilMs;
    if (agileActive !== agileWasActive) {
      pushLog({
        tMs: t,
        actionId: agileBuff.buffId,
        name: agileBuff.name,
        kind: agileActive ? 'buff_on' : 'buff_off',
        amount: 0,
      });
      if (agileActive) agileBuff.activations += 1;
      agileWasActive = agileActive;
    }
    if (lifeActive !== lifeWasActive) {
      pushLog({
        tMs: t,
        actionId: lifeBuff.buffId,
        name: lifeBuff.name,
        kind: lifeActive ? 'buff_on' : 'buff_off',
        amount: 0,
      });
      lifeWasActive = lifeActive;
    }

    const dmgLevel = requests.dmgStackLevel;
    const agileLevel = requests.agileLevel;
    const lifeLevel = requests.lifeWaveLevel;
    const snap: BuffSnapshot = {
      dmgStackPct: dmgOn && dmgLevel !== 0 ? stacks * stackPer(dmgLevel) : 0,
      agileAtkMultPct:
        agileActive && agileLevel !== 0 ? DYNAMIC_BUFF_RULES.agile.atkMultPct[agileLevel] : 0,
      lifeWaveStat: lifeActive && lifeDamageRelevant ? lifeStat : null,
      lifeWaveValuePct:
        lifeActive && lifeLevel !== 0 && lifeDamageRelevant
          ? DYNAMIC_BUFF_RULES.lifeWave.valuePct[lifeLevel]
          : 0,
    };

    // ---- integrate buffs ----
    if (dmgOn && stacks > 0) {
      dmgBuff.activeMs += tickMs;
      dmgBuff.valueIntegral += (snap.dmgStackPct * tickMs) / 1000;
      dmgBuff.stackTickSum += stacks;
    }
    if (agileActive) {
      agileBuff.activeMs += tickMs;
      agileBuff.valueIntegral += (snap.agileAtkMultPct * tickMs) / 1000;
    }
    if (lifeActive) {
      lifeBuff.activeMs += tickMs;
      lifeBuff.valueIntegral += (snap.lifeWaveValuePct * tickMs) / 1000;
    }

    // ---- action selection ----
    if (t < lockUntilMs) continue;
    let chosen: RotationAction | undefined;
    for (const action of order) {
      if ((nextReadyMs.get(action.actionId) ?? 0) <= t) {
        chosen = action;
        break;
      }
    }
    let lockMs = tickMs;
    if (chosen !== undefined) {
      nextReadyMs.set(chosen.actionId, t + chosen.cooldownSec * 1000);
      lockMs = Math.max(tickMs, (chosen.castTimeSec * 1000) / (1 + ctx.castSpeedPct / 100));
    } else if (basicUsable && basic !== undefined) {
      chosen = basic;
      lockMs = Math.max(
        tickMs,
        (config.basicAttackIntervalSec * 1000) / (1 + ctx.atkSpeedPct / 100),
      );
    }
    if (chosen === undefined) continue;

    const ev = evaluateAction(chosen, ctx, snap, config);
    const acc = accumulators.get(chosen.actionId);
    if (acc !== undefined) {
      acc.castCount += 1;
      acc.totalDamage += ev.damage;
      acc.totalHeal += ev.heal;
      if (acc.traces.length === 0) acc.traces = ev.traces;
    }
    totalDamage += ev.damage;
    totalHeal += ev.heal;
    damagePerTick[tick] += ev.damage;
    if (ev.damage > 0) {
      pushLog({ tMs: t, actionId: chosen.actionId, name: chosen.name, kind: 'damage', amount: ev.damage });
    }
    if (ev.heal > 0) {
      pushLog({ tMs: t, actionId: chosen.actionId, name: chosen.name, kind: 'heal', amount: ev.heal });
    }

    // DMG Stack: 20% chance per attack action (one roll per cast; hit-level rolls unverified)
    if (dmgOn && ev.damage > 0 && rng() * 100 < DYNAMIC_BUFF_RULES.dmgStack.procChancePct) {
      if (stacks < DYNAMIC_BUFF_RULES.dmgStack.maxStacks) stacks += 1;
      stackExpiryMs = t + DYNAMIC_BUFF_RULES.dmgStack.durationSec * 1000;
      dmgBuff.activations += 1;
      pushLog({ tMs: t, actionId: dmgBuff.buffId, name: dmgBuff.name, kind: 'buff_on', amount: stacks });
    }
    lockUntilMs = t + lockMs;
  }

  for (const s of skipped) {
    pushLog({
      tMs: 0,
      actionId: s.action.actionId,
      name: s.action.name,
      kind: 'skip',
      amount: 0,
      note: s.reason,
    });
  }

  return { accumulators, buffs, damagePerTick, totalDamage, totalHeal, log, skipped };
}

// ---------------------------------------------------------------------------------------------
// Peak burst DPS (sliding window)
// ---------------------------------------------------------------------------------------------

function peakBurstDps(damagePerTick: Float64Array, tickMs: number, windowSec: number): number {
  const windowTicks = Math.max(1, Math.round((windowSec * 1000) / tickMs));
  if (damagePerTick.length === 0) return 0;
  let windowSum = 0;
  let best = 0;
  for (let i = 0; i < damagePerTick.length; i++) {
    windowSum += damagePerTick[i];
    if (i >= windowTicks) windowSum -= damagePerTick[i - windowTicks];
    if (windowSum > best) best = windowSum;
  }
  const effectiveWindowSec = Math.min(windowSec, (damagePerTick.length * tickMs) / 1000);
  return effectiveWindowSec > 0 ? best / effectiveWindowSec : 0;
}

// ---------------------------------------------------------------------------------------------
// Unverified collection
// ---------------------------------------------------------------------------------------------

function collectUnverified(
  actions: RotationAction[],
  requests: DynamicBuffRequests,
  ctx: BaselineContext,
  config: SimulationConfig,
  skipped: { action: RotationAction; reason: string }[],
): UnverifiedItem[] {
  const items: UnverifiedItem[] = [...pendingToUnverified()];
  if (config.target._todo_verify) {
    items.push({
      key: 'target.defMitigation',
      description: `Enemy defense mitigation uses the configured value (${config.target.defMitigationPct}%) instead of a verified formula.`,
    });
  }
  if (config.basicAttackIntervalSec <= 0) {
    items.push({
      key: 'timing.basicAttackInterval',
      description:
        'Basic attack chain duration is not in the game data: the basic attack is not used as filler.',
    });
  }
  for (const action of actions) {
    items.push(...action.unverified);
  }
  for (const s of skipped) {
    items.push({ key: 'rotation.skipped', description: `${s.action.name}: ${s.reason}`, refId: s.action.refId });
  }
  if (requests.lifeWaveLevel !== 0 && config.hpChangeIntervalSec <= 0) {
    items.push({
      key: 'lifeWave.trigger',
      description:
        'Life Wave is requested but no HP change interval is configured: it never triggers (uptime 0%).',
    });
  }
  if (requests.agileLevel !== 0 && config.incomingHitIntervalSec <= 0) {
    items.push({
      key: 'agile.incoming',
      description:
        'No incoming hit interval is configured: Agile is assumed to be active for 100% of the time.',
    });
  }
  if (requests.dmgStackLevel !== 0) {
    items.push({
      key: 'dmgStack.semantics',
      description: DYNAMIC_BUFF_RULES.dmgStack.semanticsToVerify,
    });
  }
  if (requests.lifeWaveLevel !== 0) {
    const stat = pickHighestSecondary(ctx.finalFive);
    if (stat === 'haste' || stat === 'mastery') {
      items.push({
        key: 'lifeWave.stat',
        description: `Life Wave boosts ${stat} (highest stat); that stat has no modelled damage effect.`,
      });
    }
  }
  // de-duplicate by key + refId
  const seen = new Set<string>();
  return items.filter((item) => {
    const id = `${item.key}|${item.refId ?? ''}|${item.description}`;
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}

// ---------------------------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------------------------

export function runCombatSimulation(
  state: BuildStore,
  data: CombatGameData,
  configPatch?: Partial<SimulationConfig>,
): SimulationResult {
  const config = resolveSimulationConfig(configPatch);
  const { bundle, dynamicBuffRequests } = computeSanitizedBaselineBundle(
    state,
    config.includeConsumables,
  );
  const ctx = buildBaselineContext(state, bundle, config);
  const actions = resolveRotationActions(state, bundle.skillReplacements, data, config);

  const live = simulatePass(actions, ctx, dynamicBuffRequests, config, true, true);
  const flat = simulatePass(actions, ctx, dynamicBuffRequests, config, false, false);

  const duration = config.durationSec;
  const totalDamage = live.totalDamage;
  const totalHeal = live.totalHeal;

  const buffIntegralTotal = live.buffs.reduce((sum, b) => sum + b.valueIntegral, 0);
  const durationMs = duration * 1000;

  const buffUptime: BuffUptimeRow[] = live.buffs.map((b) => ({
    buffId: b.buffId,
    name: b.name,
    source: b.source,
    uptimePct: durationMs > 0 ? (b.activeMs / durationMs) * 100 : 0,
    valuePctWhenActive: b.activeMs > 0 ? (b.valueIntegral * 1000) / b.activeMs : 0,
    avgValuePct: duration > 0 ? b.valueIntegral / duration : 0,
    contributionPct: buffIntegralTotal > 0 ? (b.valueIntegral / buffIntegralTotal) * 100 : 0,
  }));
  const averageBuffPct = buffUptime.reduce((sum, b) => sum + b.avgValuePct, 0);

  const rows: SkillSimRow[] = [];
  for (const acc of live.accumulators.values()) {
    rows.push({
      actionId: acc.action.actionId,
      name: acc.action.name,
      sourceCategory: acc.action.source,
      castCount: acc.castCount,
      totalDamage: acc.totalDamage,
      dps: duration > 0 ? acc.totalDamage / duration : 0,
      damageSharePct: totalDamage > 0 ? (acc.totalDamage / totalDamage) * 100 : 0,
      totalHeal: acc.totalHeal,
      hps: duration > 0 ? acc.totalHeal / duration : 0,
      healSharePct: totalHeal > 0 ? (acc.totalHeal / totalHeal) * 100 : 0,
      avgBuffPct: 0,
      buffContributionPct: 0,
      formulaTraces: acc.traces,
      unverified: acc.action.unverified,
    });
  }
  for (const b of live.buffs) {
    rows.push({
      actionId: b.buffId,
      name: b.name,
      sourceCategory: 'module',
      castCount: b.activations,
      totalDamage: 0,
      dps: 0,
      damageSharePct: 0,
      totalHeal: 0,
      hps: 0,
      healSharePct: 0,
      avgBuffPct: duration > 0 ? b.valueIntegral / duration : 0,
      buffContributionPct: buffIntegralTotal > 0 ? (b.valueIntegral / buffIntegralTotal) * 100 : 0,
      formulaTraces: [],
      unverified: [],
    });
  }
  rows.sort((a, b) => b.totalDamage + b.totalHeal - (a.totalDamage + a.totalHeal));

  const unverifiedItems = collectUnverified(
    actions.filter((a) => live.accumulators.has(a.actionId)),
    dynamicBuffRequests,
    ctx,
    config,
    live.skipped,
  );

  return {
    durationSec: duration,
    totalDamage,
    dps: duration > 0 ? totalDamage / duration : 0,
    peakBurstDps: peakBurstDps(live.damagePerTick, config.tickMs, config.burstWindowSec),
    unbuffedBaselineDps: duration > 0 ? flat.totalDamage / duration : 0,
    totalHeal,
    hps: duration > 0 ? totalHeal / duration : 0,
    averageBuffPct,
    rows,
    buffUptime,
    combatLog: live.log,
    baseline: toBaselineSummary(ctx),
    verification: {
      status: unverifiedItems.length > 0 ? 'provisional' : 'verified',
      unverifiedItems,
    },
    config,
  };
}
