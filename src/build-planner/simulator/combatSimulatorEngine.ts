// Phase 5.4 & Phase 7 Upgrade - Full Dynamic Time-Stepped Combat Simulator
// Simulates dynamic stat changes (Crit, Luck -> Lucky Strike Multiplier, Haste -> Speed/CD,
// Mastery -> Class Damage/Heal Scaling, Versatility), Stat Resonance (1x base + 2x burst),
// Active HP Fluctuation & Healing Sustain (for Life Wave), Talent Procs, Suit Sets, and Far Sea Weapons.
import { PROFESSIONS } from '../profession';
import { calcStatResonanceBonus } from '../stats/cookingBuff';
import {
  recalculateLuckyHitMultipliers,
  recalculateSpeedPercents,
} from '../stats/deriveStats';
import { calculateMasteryFinalPctEffects } from '../stats/masteryElementBonus';
import type { BuildStore } from '../store/types';
import { attackStatOf, computeSanitizedBaselineBundle } from './baselineSanitizer';
import type { DynamicBuffRequests } from './baselineSanitizer';
import {
  DYNAMIC_BUFF_RULES,
  pendingToUnverified,
  resolveExtraCombatModifiers,
  resolveModuleBonuses,
  resolveRotationActions,
} from './combatMechanicsRegistry';
import type {
  ActiveModuleBonus,
  CombatGameData,
  ExtraCombatModifiers,
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

const VERSATILITY_DAMAGE_RATIO = 0.35;
const MASTERY_DAMAGE_DEFAULT_RATIO = 0.45;

const FIVE_SECONDARY_STATS = ['crit', 'haste', 'luck', 'mastery', 'versatility'] as const;
type SecondaryStat = (typeof FIVE_SECONDARY_STATS)[number];

export function resolveSimulationConfig(patch?: Partial<SimulationConfig>): SimulationConfig {
  return {
    ...DEFAULT_SIMULATION_CONFIG,
    ...patch,
    target: { ...DEFAULT_SIMULATION_CONFIG.target, ...patch?.target },
    timingOverrides: { ...DEFAULT_SIMULATION_CONFIG.timingOverrides, ...patch?.timingOverrides },
  };
}

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

interface BaselineContext {
  state: BuildStore;
  attackStat: 'atk' | 'matk';
  activeAtk: number;
  critPct: number;
  critDamageBonusPct: number;
  luckPct: number;
  luckyHitDamageMultiplierPct: number;
  luckyHitDamageBonusRaw: number;
  luckyHitRecoveryBonusRaw: number;
  luckyHitDamageRatioBonus: number;
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
  healingPowerPct: number;
  finalFive: Record<SecondaryStat, number>;
  moduleBonuses: ActiveModuleBonus[];
  extraMods: ExtraCombatModifiers;
  statResonanceAtkBonus: number;
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

  // Calculate how much ATK/MATK Stat Resonance (1x baseline during Healing Melody) adds
  const rawResonanceMainStat = calcStatResonanceBonus(state.cookingBuff);
  const statResonanceAtkBonus = Math.floor(rawResonanceMainStat * profession.atkPerMainStatPoint);

  // Derive luckyHitDamageRatioBonus from current derived stats vs base formula
  const baseLuckRatio =
    finalFive.luck > 0
      ? (derived.luckyHitDamageMultiplierPercent -
          40 -
          bundle.rawStats.luckyHitDamageBonus / 100) /
          finalFive.luck -
        0.25
      : 0;

  return {
    state,
    attackStat,
    activeAtk: bundle.stats[attackStat],
    critPct: finalFive.crit,
    critDamageBonusPct: derived.critDamageBonusPercent,
    luckPct: finalFive.luck,
    luckyHitDamageMultiplierPct: derived.luckyHitDamageMultiplierPercent,
    luckyHitDamageBonusRaw: bundle.rawStats.luckyHitDamageBonus,
    luckyHitRecoveryBonusRaw: bundle.rawStats.luckyHitRecoveryBonus,
    luckyHitDamageRatioBonus: Math.max(0, baseLuckRatio),
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
    healingPowerPct: bundle.rawStats.healingPower / 100,
    finalFive,
    moduleBonuses: resolveModuleBonuses(state.moduleSlots),
    extraMods: resolveExtraCombatModifiers(state, bundle.talentNodesById),
    statResonanceAtkBonus,
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
// Dynamic Buff Snapshot + Hit Evaluation
// ---------------------------------------------------------------------------------------------

interface BuffSnapshot {
  dmgStackPct: number;
  agileAtkMultPct: number;
  lifeWaveStat: SecondaryStat | null;
  lifeWaveValuePct: number;
  // Stat Resonance multiplier: 0 = off, 1 = Healing Melody active, 2 = Encore/Passion Burst active
  statResonanceFactor: number;
  // Skill / Imagine active buffs & dynamic talent procs
  skillAtkMultPct: number;
  skillDmgBoostPct: number;
  skillHealBoostPct: number;
  skillCritPct: number;
  skillCritDmgPct: number;
  skillLuckPct: number;
  skillHastePct: number;
  skillMasteryPct: number;
  skillVersatilityPct: number;
  skillCastSpeedPct: number;
  heroicMelodyActive: boolean;
  igoreusCritDmgPct: number;
}

const NO_BUFFS: BuffSnapshot = {
  dmgStackPct: 0,
  agileAtkMultPct: 0,
  lifeWaveStat: null,
  lifeWaveValuePct: 0,
  statResonanceFactor: 0,
  skillAtkMultPct: 0,
  skillDmgBoostPct: 0,
  skillHealBoostPct: 0,
  skillCritPct: 0,
  skillCritDmgPct: 0,
  skillLuckPct: 0,
  skillHastePct: 0,
  skillMasteryPct: 0,
  skillVersatilityPct: 0,
  skillCastSpeedPct: 0,
  heroicMelodyActive: false,
  igoreusCritDmgPct: 0,
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
  critChance: number;
  effectiveAtkSpeedPct: number;
  effectiveCastSpeedPct: number;
  effectiveHastePct: number;
  traces: FormulaTrace[];
}

function evaluateAction(
  action: RotationAction,
  ctx: BaselineContext,
  snap: BuffSnapshot,
  config: SimulationConfig,
): EvalResult {
  const profession = PROFESSIONS[ctx.state.professionKey];

  const lifeCrit = snap.lifeWaveStat === 'crit' ? snap.lifeWaveValuePct : 0;
  const lifeLuck = snap.lifeWaveStat === 'luck' ? snap.lifeWaveValuePct : 0;
  const lifeVers = snap.lifeWaveStat === 'versatility' ? snap.lifeWaveValuePct : 0;
  const lifeHaste = snap.lifeWaveStat === 'haste' ? snap.lifeWaveValuePct : 0;
  const lifeMastery = snap.lifeWaveStat === 'mastery' ? snap.lifeWaveValuePct : 0;

  // Dynamic Haste -> recalculates Attack Speed & Cast Speed in real-time
  const dynamicHasteDelta = lifeHaste + snap.skillHastePct;
  const effectiveHastePct = ctx.hastePct + dynamicHasteDelta;
  const speedDelta = recalculateSpeedPercents(dynamicHasteDelta, profession, 0, 0, snap.skillCastSpeedPct);
  const effectiveAtkSpeedPct = ctx.atkSpeedPct + speedDelta.atkSpeedPercent;
  const effectiveCastSpeedPct = ctx.castSpeedPct + speedDelta.castSpeedPercent;

  // Dynamic Mastery -> recalculates Mastery ATK/MATK multiplier and Mastery Scaling
  const dynamicMasteryDelta = lifeMastery + snap.skillMasteryPct;
  const effectiveMasteryPct = ctx.masteryPct + dynamicMasteryDelta;
  const masteryAtkEffects = calculateMasteryFinalPctEffects(
    ctx.state.professionKey,
    ctx.state.professionTypeKey,
    dynamicMasteryDelta,
  );
  let masteryAtkMult = 1;
  for (const eff of masteryAtkEffects) {
    if (eff.statId === ctx.attackStat) masteryAtkMult *= eff.multiplier;
  }

  // Dynamic Crit (including Rock Luck +50% on Countercrush & Suit 4pc bonus)
  const countercrushCritBonus =
    ctx.extraMods.hasRockLuckCounterCrit && /countercrush/i.test(action.name) ? 50 : 0;
  const totalCritPct = clamp(
    ctx.critPct + lifeCrit + snap.skillCritPct + ctx.extraMods.suitCritBonusPct + countercrushCritBonus,
    0,
    100,
  );
  const pCrit = totalCritPct / 100;

  // Dynamic Luck -> recalculates Lucky Strike Damage & Recovery Multipliers in real-time!
  // Also applies Talent 1338 (+0.5 Lucky Strike Mult per 1% Luck while Heroic Melody is active)
  const totalLuckPct = clamp(ctx.luckPct + lifeLuck + snap.skillLuckPct, 0, 100);
  const pLuck = totalLuckPct / 100;
  const dynamicLuckRatioBonus =
    ctx.luckyHitDamageRatioBonus +
    (snap.heroicMelodyActive && ctx.extraMods.hasHeroicMelodyLuckMult ? 0.5 : 0);
  const dynamicLuckyMultipliers = recalculateLuckyHitMultipliers(
    totalLuckPct,
    dynamicLuckRatioBonus,
    ctx.luckyHitDamageBonusRaw,
    ctx.luckyHitRecoveryBonusRaw,
  );

  // Dynamic Versatility
  const totalVersPct = ctx.versatilityPct + lifeVers + snap.skillVersatilityPct;
  const versDmgPct = totalVersPct * VERSATILITY_DAMAGE_RATIO;

  // Dynamic Active ATK/MATK (includes Stat Resonance 1x/2x, Agile %, Skill/Imagine ATK %, Mastery %)
  const resonanceAtkAdd = ctx.statResonanceAtkBonus * snap.statResonanceFactor;
  const totalAtkMultPct = snap.agileAtkMultPct + snap.skillAtkMultPct;
  const activeAtk =
    (ctx.activeAtk + resonanceAtkAdd) * (1 + totalAtkMultPct / 100) * masteryAtkMult;

  const defMitigation = 1 - clamp(config.target.defMitigationPct, 0, 100) / 100;

  // ---- Damage Bucket Components (Additive + Mastery Scaling) ----
  const boostComponents: string[] = [];
  let boostSum = 0;
  const addBoost = (label: string, pct: number): void => {
    if (pct === 0) return;
    boostSum += pct;
    boostComponents.push(`${label} ${fmt(pct)}%`);
  };
  addBoost(ctx.attackStat === 'atk' ? 'PHY Boost' : 'MAG Boost', ctx.boostPct);
  addBoost('Mastery Scaling', effectiveMasteryPct * MASTERY_DAMAGE_DEFAULT_RATIO);
  for (const m of ctx.moduleBonuses) {
    const applies =
      (m.scope === 'physicalDamage' && ctx.attackStat === 'atk') ||
      (m.scope === 'magicalDamage' && ctx.attackStat === 'matk') ||
      (m.scope === 'specialDamage' && action.skillClass === 'special') ||
      (m.scope === 'eliteBossDamage' && config.target.kind !== 'normal');
    if (applies) addBoost(`${m.name} (Lv.${m.level})`, m.pct);
  }
  if (ctx.extraMods.farSeaDamageBonusPct > 0) {
    addBoost('Far Sea Weapon', ctx.extraMods.farSeaDamageBonusPct);
  }
  if (ctx.extraMods.suitDamageBonusPct > 0) {
    addBoost('Equipment Suit Bonus', ctx.extraMods.suitDamageBonusPct);
  }
  if (config.target.kind === 'boss') addBoost('Boss DMG', ctx.bossDamageBonusPct);
  addBoost('Food Elite DMG', ctx.foodEliteDamagePct);
  addBoost('DMG Stack', snap.dmgStackPct);
  addBoost('Active Skill/Imagine Buff', snap.skillDmgBoostPct);

  // ---- Healing Bucket Components ----
  const healComponents: string[] = [];
  let healSum = 0;
  const addHealBoost = (label: string, pct: number): void => {
    if (pct === 0) return;
    healSum += pct;
    healComponents.push(`${label} ${fmt(pct)}%`);
  };
  addHealBoost(ctx.attackStat === 'atk' ? 'PHY Boost' : 'MAG Boost', ctx.boostPct);
  addHealBoost('Healing Power', ctx.healingPowerPct);
  addHealBoost('Mastery Healing Scaling', effectiveMasteryPct * MASTERY_DAMAGE_DEFAULT_RATIO);
  addHealBoost('Active Skill/Imagine Heal Buff', snap.skillHealBoostPct);
  for (const m of ctx.moduleBonuses) {
    const applies =
      (m.scope === 'specialHealing' && action.skillClass === 'special') ||
      (m.scope === 'expertiseHealing' && action.skillClass === 'expertise');
    if (applies) {
      addHealBoost(`${m.name} (Lv.${m.level})`, m.pct);
    }
  }

  const traces: FormulaTrace[] = [];
  let damage = 0;
  let heal = 0;

  const evalRow = (row: ParsedEffectRow, kind: 'damage' | 'heal'): number => {
    const baseHit = (activeAtk * row.multiplierPct) / 100 + row.flat;
    const versBucket = bucket('Versatility', 1 + versDmgPct / 100, [
      `Versatility ${fmt(versDmgPct)}% (Total Vers: ${fmt(totalVersPct)}%)`,
    ]);
    const critPercent =
      kind === 'damage'
        ? ctx.critDamageBonusPct + snap.skillCritDmgPct + snap.igoreusCritDmgPct
        : ctx.critRecoveryPct + snap.skillCritDmgPct;
    const luckPercent =
      kind === 'damage'
        ? dynamicLuckyMultipliers.luckyHitDamageMultiplierPercent
        : dynamicLuckyMultipliers.luckyHitRecoveryMultiplierPercent;
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
      boostBucket = bucket('Additive & Mastery DMG Bonus', 1 + boostSum / 100, boostComponents);
      mitigation = defMitigation;
    } else {
      boostBucket = bucket('Additive & Mastery Heal Bonus', 1 + healSum / 100, healComponents);
      mitigation = 1;
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

  // Talent [510] Smite Spec: Converts 45% of damage dealt to healing on targets with Symbiotic Mark
  if (ctx.extraMods.hasSymbioticMarkHeal && damage > 0) {
    heal += damage * 0.45;
  }

  return {
    damage,
    heal,
    critChance: pCrit,
    effectiveAtkSpeedPct,
    effectiveCastSpeedPct,
    effectiveHastePct,
    traces,
  };
}

// ---------------------------------------------------------------------------------------------
// One simulation pass (6,000 ticks @ 50ms)
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
  source: 'module' | 'consumable' | 'imagine' | 'talent';
  activeMs: number;
  valueIntegral: number;
  activations: number;
  stackTickSum: number;
}

interface ActiveTimedSkillBuff {
  id: string;
  name: string;
  source: 'imagine' | 'talent';
  stat:
    | 'atkMult'
    | 'dmgBoost'
    | 'critPct'
    | 'critDmg'
    | 'luckPct'
    | 'hastePct'
    | 'masteryPct'
    | 'versatilityPct'
    | 'castSpeedPct'
    | 'healBoost';
  valuePct: number;
  expiresAtMs: number;
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

  const enabled = actions.filter((a) => isActionEnabled(a, config));
  const basic = enabled.find((a) => a.skillClass === 'basic');
  const rotationPool: RotationAction[] = [];

  for (const action of enabled) {
    if (action.skillClass === 'basic') continue;
    const hasEffect =
      action.damageRows.length > 0 ||
      action.healRows.length > 0 ||
      action.buffEffects.length > 0 ||
      /melody|encore|passion|permafrost|bastion|aria|rhapsody/i.test(action.name);
    if (!hasEffect) {
      skipped.push({ action, reason: 'Passive or non-combat utility skill.' });
      continue;
    }
    rotationPool.push(action);
  }

  const basicUsable =
    basic !== undefined &&
    config.basicAttackIntervalSec > 0 &&
    (basic.damageRows.length > 0 || basic.healRows.length > 0);

  for (const action of [...rotationPool, ...(basicUsable && basic ? [basic] : [])]) {
    accumulators.set(action.actionId, {
      action,
      castCount: 0,
      totalDamage: 0,
      totalHeal: 0,
      traces: [],
    });
  }

  const perCast = (a: RotationAction): number => {
    const ev = evaluateAction(a, ctx, NO_BUFFS, config);
    const buffWeight = a.buffEffects.length > 0 ? 50000 : 0;
    return ev.damage + ev.heal + buffWeight;
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

  // ---- Dynamic Buff Accumulators ----
  const stackPer = (level: 5 | 6): number => DYNAMIC_BUFF_RULES.dmgStack.perStackPct[level];
  const dmgOn = dynamicEnabled && requests.dmgStackLevel !== 0;
  const agileOn = dynamicEnabled && requests.agileLevel !== 0;
  const lifeOn = dynamicEnabled && requests.lifeWaveLevel !== 0;
  const resonanceOn =
    dynamicEnabled && requests.statResonanceRequested && ctx.statResonanceAtkBonus > 0;
  const igoreusOn = dynamicEnabled && ctx.extraMods.igoreusPassiveCritDmgPerStack > 0;

  const lifeStat = pickHighestSecondary(ctx.finalFive);

  const buffs: BuffAccumulator[] = [];
  const buffMap = new Map<string, BuffAccumulator>();
  const registerBuff = (
    id: string,
    name: string,
    source: 'module' | 'consumable' | 'imagine' | 'talent',
  ): BuffAccumulator => {
    let existing = buffMap.get(id);
    if (!existing) {
      existing = {
        buffId: id,
        name,
        source,
        activeMs: 0,
        valueIntegral: 0,
        activations: 0,
        stackTickSum: 0,
      };
      buffMap.set(id, existing);
      buffs.push(existing);
    }
    return existing;
  };

  const dmgBuff = dmgOn
    ? registerBuff(DYNAMIC_BUFF_RULES.dmgStack.id, DYNAMIC_BUFF_RULES.dmgStack.name, 'module')
    : null;
  const agileBuff = agileOn
    ? registerBuff(DYNAMIC_BUFF_RULES.agile.id, DYNAMIC_BUFF_RULES.agile.name, 'module')
    : null;
  const lifeBuff = lifeOn
    ? registerBuff(
        DYNAMIC_BUFF_RULES.lifeWave.id,
        `${DYNAMIC_BUFF_RULES.lifeWave.name} (+${DYNAMIC_BUFF_RULES.lifeWave.valuePct[requests.lifeWaveLevel as 5 | 6]}% ${lifeStat.toUpperCase()})`,
        'module',
      )
    : null;
  const resonanceBuff = resonanceOn
    ? registerBuff(
        DYNAMIC_BUFF_RULES.statResonance.id,
        DYNAMIC_BUFF_RULES.statResonance.name,
        'talent',
      )
    : null;
  const igoreusBuff = igoreusOn
    ? registerBuff('imagine:3969:p2', 'Igoreus Passive {p2} (Crit DMG Stacks)', 'imagine')
    : null;

  let stacks = 0;
  let stackExpiryMs = 0;
  let agileOffUntilMs = 0;
  let nextHitMs =
    config.incomingHitIntervalSec > 0 ? config.incomingHitIntervalSec * 1000 : Infinity;

  // Active HP Fluctuation & Sustain: starts active on pull if sustainHpFluctuation is enabled
  let lifeUntilMs =
    lifeOn && config.sustainHpFluctuation
      ? DYNAMIC_BUFF_RULES.lifeWave.durationSec * 1000
      : 0;
  if (lifeOn && config.sustainHpFluctuation && lifeBuff) {
    lifeBuff.activations = 1;
  }
  const effectiveHpIntervalSec =
    config.hpChangeIntervalSec > 0
      ? config.hpChangeIntervalSec
      : config.sustainHpFluctuation
        ? 4
        : 0;
  let nextHpChangeMs = effectiveHpIntervalSec > 0 ? effectiveHpIntervalSec * 1000 : Infinity;

  let resonanceBurstUntilMs = 0;
  let heroicMelodyUntilMs = 0;
  let igoreusStacks = 0;
  let igoreusExpiryMs = 0;
  const activeSkillBuffs: ActiveTimedSkillBuff[] = [];

  let agileWasActive = false;
  let lifeWasActive = false;

  const nextReadyMs = new Map<string, number>();
  let lockUntilMs = 0;
  const damagePerTick = new Float64Array(totalTicks);
  let totalDamage = 0;
  let totalHeal = 0;

  for (let tick = 0; tick < totalTicks; tick++) {
    const t = tick * tickMs;

    // 1. Incoming Hit -> drops Agile for 5s AND triggers HP fluctuation (activates Life Wave!)
    if (t >= nextHitMs) {
      if (agileOn) {
        agileOffUntilMs = nextHitMs + DYNAMIC_BUFF_RULES.agile.lostOnHitSec * 1000;
      }
      if (lifeOn && lifeBuff) {
        lifeUntilMs = Math.max(lifeUntilMs, t + DYNAMIC_BUFF_RULES.lifeWave.durationSec * 1000);
        lifeBuff.activations += 1;
      }
      nextHitMs += config.incomingHitIntervalSec * 1000;
    }

    // 2. Periodic HP Fluctuation / Active HP Sustain -> refreshes Life Wave
    if (lifeOn && lifeBuff) {
      while (t >= nextHpChangeMs) {
        lifeUntilMs = t + DYNAMIC_BUFF_RULES.lifeWave.durationSec * 1000;
        lifeBuff.activations += 1;
        nextHpChangeMs += effectiveHpIntervalSec * 1000;
      }
    }

    // 3. Expire stacks
    if (dmgOn && stacks > 0 && t >= stackExpiryMs) {
      stacks = 0;
      if (dmgBuff) {
        pushLog({ tMs: t, actionId: dmgBuff.buffId, name: dmgBuff.name, kind: 'buff_off', amount: 0 });
      }
    }
    if (igoreusOn && igoreusStacks > 0 && t >= igoreusExpiryMs) {
      igoreusStacks = 0;
    }

    const agileActive = agileOn && t >= agileOffUntilMs;
    const lifeActive = lifeOn && t < lifeUntilMs;

    if (agileBuff && agileActive !== agileWasActive) {
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
    if (lifeBuff && lifeActive !== lifeWasActive) {
      pushLog({
        tMs: t,
        actionId: lifeBuff.buffId,
        name: lifeBuff.name,
        kind: lifeActive ? 'buff_on' : 'buff_off',
        amount: 0,
      });
      lifeWasActive = lifeActive;
    }

    // Aggregate currently active Skill / Imagine / Talent timed buffs
    let skillAtkMultPct = 0;
    let skillDmgBoostPct = 0;
    let skillHealBoostPct = 0;
    let skillCritPct = 0;
    let skillCritDmgPct = 0;
    let skillLuckPct = 0;
    let skillHastePct = 0;
    let skillMasteryPct = 0;
    let skillVersatilityPct = 0;
    let skillCastSpeedPct = 0;

    for (let i = activeSkillBuffs.length - 1; i >= 0; i--) {
      const b = activeSkillBuffs[i];
      if (t >= b.expiresAtMs) {
        activeSkillBuffs.splice(i, 1);
        continue;
      }
      switch (b.stat) {
        case 'atkMult':
          skillAtkMultPct += b.valuePct;
          break;
        case 'dmgBoost':
          skillDmgBoostPct += b.valuePct;
          break;
        case 'healBoost':
          skillHealBoostPct += b.valuePct;
          break;
        case 'critPct':
          skillCritPct += b.valuePct;
          break;
        case 'critDmg':
          skillCritDmgPct += b.valuePct;
          break;
        case 'luckPct':
          skillLuckPct += b.valuePct;
          break;
        case 'hastePct':
          skillHastePct += b.valuePct;
          break;
        case 'masteryPct':
          skillMasteryPct += b.valuePct;
          break;
        case 'versatilityPct':
          skillVersatilityPct += b.valuePct;
          break;
        case 'castSpeedPct':
          skillCastSpeedPct += b.valuePct;
          break;
      }
      const bAcc = registerBuff(b.id, b.name, b.source);
      bAcc.activeMs += tickMs;
      bAcc.valueIntegral += (b.valuePct * tickMs) / 1000;
    }

    const dmgLevel = requests.dmgStackLevel;
    const agileLevel = requests.agileLevel;
    const lifeLevel = requests.lifeWaveLevel;
    const resonanceFactor = resonanceOn ? (t < resonanceBurstUntilMs ? 2 : 1) : 0;

    const snap: BuffSnapshot = {
      dmgStackPct: dmgOn && dmgLevel !== 0 ? stacks * stackPer(dmgLevel) : 0,
      agileAtkMultPct:
        agileActive && agileLevel !== 0 ? DYNAMIC_BUFF_RULES.agile.atkMultPct[agileLevel] : 0,
      lifeWaveStat: lifeActive ? lifeStat : null,
      lifeWaveValuePct:
        lifeActive && lifeLevel !== 0 ? DYNAMIC_BUFF_RULES.lifeWave.valuePct[lifeLevel] : 0,
      statResonanceFactor: resonanceFactor,
      skillAtkMultPct,
      skillDmgBoostPct,
      skillHealBoostPct,
      skillCritPct,
      skillCritDmgPct,
      skillLuckPct,
      skillHastePct,
      skillMasteryPct,
      skillVersatilityPct,
      skillCastSpeedPct,
      heroicMelodyActive: dynamicEnabled && t < heroicMelodyUntilMs,
      igoreusCritDmgPct: igoreusOn ? igoreusStacks * ctx.extraMods.igoreusPassiveCritDmgPerStack : 0,
    };

    // Integrate core dynamic buffs
    if (dmgBuff && stacks > 0) {
      dmgBuff.activeMs += tickMs;
      dmgBuff.valueIntegral += (snap.dmgStackPct * tickMs) / 1000;
      dmgBuff.stackTickSum += stacks;
    }
    if (agileBuff && agileActive) {
      agileBuff.activeMs += tickMs;
      agileBuff.valueIntegral += (snap.agileAtkMultPct * tickMs) / 1000;
    }
    if (lifeBuff && lifeActive) {
      lifeBuff.activeMs += tickMs;
      lifeBuff.valueIntegral += (snap.lifeWaveValuePct * tickMs) / 1000;
    }
    if (resonanceBuff && resonanceFactor > 0) {
      resonanceBuff.activeMs += tickMs;
      const resPct =
        ctx.activeAtk > 0
          ? ((ctx.statResonanceAtkBonus * resonanceFactor) / ctx.activeAtk) * 100
          : 0;
      resonanceBuff.valueIntegral += (resPct * tickMs) / 1000;
    }
    if (igoreusBuff && igoreusStacks > 0) {
      igoreusBuff.activeMs += tickMs;
      igoreusBuff.valueIntegral += (snap.igoreusCritDmgPct * tickMs) / 1000;
    }

    // ---- Action Selection ----
    if (t < lockUntilMs) continue;
    let chosen: RotationAction | undefined;
    for (const action of order) {
      if ((nextReadyMs.get(action.actionId) ?? 0) <= t) {
        chosen = action;
        break;
      }
    }
    if (chosen === undefined && basicUsable && basic !== undefined) {
      chosen = basic;
    }
    if (chosen === undefined) continue;

    const ev = evaluateAction(chosen, ctx, snap, config);

    // Dynamic Haste affects cooldown recovery and cast speed!
    const hasteCdFactor = 1 + Math.max(0, ev.effectiveHastePct) / 200;
    let lockMs = tickMs;
    if (chosen.skillClass !== 'basic') {
      nextReadyMs.set(chosen.actionId, t + (chosen.cooldownSec * 1000) / hasteCdFactor);
      lockMs = Math.max(
        tickMs,
        (chosen.castTimeSec * 1000) / (1 + Math.max(0, ev.effectiveCastSpeedPct) / 100),
      );
    } else {
      lockMs = Math.max(
        tickMs,
        (config.basicAttackIntervalSec * 1000) / (1 + Math.max(0, ev.effectiveAtkSpeedPct) / 100),
      );
    }

    const acc = accumulators.get(chosen.actionId);
    if (acc !== undefined) {
      acc.castCount += 1;
      acc.totalDamage += ev.damage;
      acc.totalHeal += ev.heal;
      if (acc.traces.length === 0 && ev.traces.length > 0) acc.traces = ev.traces;
    }
    totalDamage += ev.damage;
    totalHeal += ev.heal;
    damagePerTick[tick] += ev.damage;

    if (ev.damage > 0) {
      pushLog({ tMs: t, actionId: chosen.actionId, name: chosen.name, kind: 'damage', amount: ev.damage });
    }
    if (ev.heal > 0) {
      pushLog({ tMs: t, actionId: chosen.actionId, name: chosen.name, kind: 'heal', amount: ev.heal });
      // Active Healing / HP Sustain triggers Life Wave!
      if (lifeOn && config.sustainHpFluctuation && lifeBuff) {
        lifeUntilMs = t + DYNAMIC_BUFF_RULES.lifeWave.durationSec * 1000;
        lifeBuff.activations += 1;
      }
    }

    // Activate skill / Battle Imagine timed buffs
    if (dynamicEnabled) {
      for (const bEff of chosen.buffEffects) {
        const buffId = `${chosen.actionId}:${bEff.stat}`;
        const existingIdx = activeSkillBuffs.findIndex((x) => x.id === buffId);
        const expiresAtMs = t + bEff.durationSec * 1000;
        if (existingIdx >= 0) {
          activeSkillBuffs[existingIdx].expiresAtMs = expiresAtMs;
        } else {
          activeSkillBuffs.push({
            id: buffId,
            name: bEff.label,
            source: chosen.skillClass === 'imagine' ? 'imagine' : 'talent',
            stat: bEff.stat,
            valuePct: bEff.valuePct,
            expiresAtMs,
          });
        }
        const bAcc = registerBuff(
          buffId,
          bEff.label,
          chosen.skillClass === 'imagine' ? 'imagine' : 'talent',
        );
        bAcc.activations += 1;
      }

      // Dynamic Talent & Class Triggers on Skill Cast
      const lowerName = chosen.name.toLowerCase();
      // Beat Performer Stat Resonance 2x Burst on Encore / Passion Burst / Ultimate
      if (
        resonanceOn &&
        (chosen.skillClass === 'ultimate' ||
          lowerName.includes('encore') ||
          lowerName.includes('passion') ||
          lowerName.includes('rhapsody'))
      ) {
        resonanceBurstUntilMs =
          t + DYNAMIC_BUFF_RULES.statResonance.burstDurationSec * 1000;
        if (resonanceBuff) resonanceBuff.activations += 1;
        pushLog({
          tMs: t,
          actionId: DYNAMIC_BUFF_RULES.statResonance.id,
          name: 'Stat Resonance (2x Burst)',
          kind: 'buff_on',
          amount: ctx.statResonanceAtkBonus * 2,
        });
      }

      // Talent [1338]: Heroic Melody active window
      if (
        ctx.extraMods.hasHeroicMelodyLuckMult &&
        (lowerName.includes('heroic') || lowerName.includes('melody') || chosen.skillClass === 'special')
      ) {
        heroicMelodyUntilMs = t + 15000;
      }

      // Talent [267] Quick Chant: Cast SPD +15% while Permafrost is active
      if (
        ctx.extraMods.hasQuickChantCastSpd &&
        (lowerName.includes('permafrost') || chosen.skillClass === 'ultimate' || chosen.skillClass === 'special')
      ) {
        const qcId = 'talent:267:quickChant';
        const existing = activeSkillBuffs.find((x) => x.id === qcId);
        if (existing) {
          existing.expiresAtMs = t + 12000;
        } else {
          activeSkillBuffs.push({
            id: qcId,
            name: '[267] Quick Chant (+15% Cast SPD)',
            source: 'talent',
            stat: 'castSpeedPct',
            valuePct: 15,
            expiresAtMs: t + 12000,
          });
        }
        registerBuff(qcId, '[267] Quick Chant (+15% Cast SPD)', 'talent').activations += 1;
      }

      // Talent [970] Rock Mastery: Mastery +8% while Brave Bastion is active
      if (
        ctx.extraMods.hasRockMastery &&
        (lowerName.includes('bastion') || chosen.skillClass === 'special' || chosen.skillClass === 'ultimate')
      ) {
        const rmId = 'talent:970:rockMastery';
        const existing = activeSkillBuffs.find((x) => x.id === rmId);
        if (existing) {
          existing.expiresAtMs = t + 12000;
        } else {
          activeSkillBuffs.push({
            id: rmId,
            name: '[970] Rock Mastery (+8% Mastery)',
            source: 'talent',
            stat: 'masteryPct',
            valuePct: 8,
            expiresAtMs: t + 12000,
          });
        }
        registerBuff(rmId, '[970] Rock Mastery (+8% Mastery)', 'talent').activations += 1;
      }

      // Imagine [3969] Igoreus {p2}: Crit DMG stacking up to 5 times for 2s on crit
      if (igoreusOn && ev.damage > 0 && rng() < ev.critChance) {
        igoreusStacks = Math.min(5, igoreusStacks + 1);
        igoreusExpiryMs = t + 2500;
        if (igoreusBuff) igoreusBuff.activations += 1;
      }
    }

    // DMG Stack: 20% chance per attack action
    if (dmgOn && ev.damage > 0 && rng() * 100 < DYNAMIC_BUFF_RULES.dmgStack.procChancePct) {
      if (stacks < DYNAMIC_BUFF_RULES.dmgStack.maxStacks) stacks += 1;
      stackExpiryMs = t + DYNAMIC_BUFF_RULES.dmgStack.durationSec * 1000;
      if (dmgBuff) {
        dmgBuff.activations += 1;
        pushLog({ tMs: t, actionId: dmgBuff.buffId, name: dmgBuff.name, kind: 'buff_on', amount: stacks });
      }
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

function collectUnverified(
  actions: RotationAction[],
  _requests: DynamicBuffRequests,
  _ctx: BaselineContext,
  _config: SimulationConfig,
  skipped: { action: RotationAction; reason: string }[],
): UnverifiedItem[] {
  const items: UnverifiedItem[] = [...pendingToUnverified()];
  for (const action of actions) {
    items.push(...action.unverified);
  }
  for (const s of skipped) {
    items.push({ key: 'rotation.skipped', description: `${s.action.name}: ${s.reason}`, refId: s.action.refId });
  }
  const seen = new Set<string>();
  return items.filter((item) => {
    const id = `${item.key}|${item.refId ?? ''}|${item.description}`;
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}

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
      sourceCategory: b.source === 'imagine' ? 'imagine' : b.source === 'talent' ? 'talent_proc' : 'module',
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
