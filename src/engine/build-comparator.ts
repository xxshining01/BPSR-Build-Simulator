// ไฟล์: src/engine/build-comparator.ts
import {
    AttributeKey,
    AttributeKeyEnum,
    FiveMinuteSimulationResult,
    UserBuildConfiguration,
    validateBuildsCanCompare,
} from "../data/schemas";
import { runFiveMinuteCombatSimulation } from "./combat-simulator";
import { CalculatedCharacterStatus, calculateCharacterStats } from "./stat-aggregator";

export interface StatDiffEntry {
    key: AttributeKey;
    valueA: number;
    valueB: number;
    diff: number;      // valueB - valueA
    diffPct: number;   // ((valueB - valueA) / valueA) * 100
}

export interface BuildComparisonReport {
    canCompare: boolean;
    errorReason?: string;
    buildAName: string;
    buildBName: string;
    statusA?: CalculatedCharacterStatus;
    statusB?: CalculatedCharacterStatus;
    simA?: FiveMinuteSimulationResult;
    simB?: FiveMinuteSimulationResult;
    dpsDiff?: number;
    dpsDiffPct?: number;
    hpsDiff?: number;
    avgBuffDiff?: number;
    statDiffs?: Record<AttributeKey, StatDiffEntry>;
}

export function compareTwoBuilds(
    buildA: UserBuildConfiguration,
    buildB: UserBuildConfiguration
): BuildComparisonReport {
    const validation = validateBuildsCanCompare(buildA, buildB);
    if (!validation.canCompare) {
        return {
            canCompare: false,
            errorReason: validation.reason,
            buildAName: buildA.buildName,
            buildBName: buildB.buildName,
        };
    }

    const statusA = calculateCharacterStats(buildA, "idle");
    const statusB = calculateCharacterStats(buildB, "idle");
    const simA = runFiveMinuteCombatSimulation(buildA);
    const simB = runFiveMinuteCombatSimulation(buildB);

    const statDiffs = {} as Record<AttributeKey, StatDiffEntry>;
    for (const key of AttributeKeyEnum.options) {
        const valA = Number(statusA.rawMap[key] || 0);
        const valB = Number(statusB.rawMap[key] || 0);
        const diff = Number((valB - valA).toFixed(2));
        const diffPct = valA !== 0 ? Number((((valB - valA) / Math.abs(valA)) * 100).toFixed(2)) : 0;
        statDiffs[key] = { key, valueA: valA, valueB: valB, diff, diffPct };
    }

    const dpsDiff = simB.dps - simA.dps;
    const dpsDiffPct = simA.dps > 0 ? Number(((dpsDiff / simA.dps) * 100).toFixed(2)) : 0;

    return {
        canCompare: true,
        buildAName: buildA.buildName,
        buildBName: buildB.buildName,
        statusA,
        statusB,
        simA,
        simB,
        dpsDiff,
        dpsDiffPct,
        hpsDiff: simB.hps - simA.hps,
        avgBuffDiff: Number((simB.averageBuffPct - simA.averageBuffPct).toFixed(2)),
        statDiffs,
    };
}