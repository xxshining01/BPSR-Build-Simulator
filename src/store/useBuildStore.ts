// ไฟล์: src/store/useBuildStore.ts
"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
    AttributeKey,
    ClassId,
    EquipmentSlot,
    EquipmentSlotEnum,
    EquippedGearSlotConfigSchema,
    ImagineTierKey,
    ModuleCategory,
    ModuleEffectId,
    SpecId,
    UserBuildConfiguration,
} from "../data/schemas";

export const CLASS_DEFAULT_SPECS: Record<ClassId, [SpecId, SpecId]> = {
    blade_warden: ["iaido", "twinflow"],
    spellcaster: ["icicle", "frostbeam"],
    twin_striker: ["executioner", "berserker"],
    wind_knight: ["gale", "tempest"],
    verdant_oracle: ["thornvine", "lifebloom"],
    heavy_guardian: ["bastion", "crag"],
    marksman: ["wildpack", "falconry"],
    shield_knight: ["judgement", "aegis"],
    beat_performer: ["resonance", "harmony"],
};

export function createDefaultBuild(classId: ClassId = "marksman", specId: SpecId = "falconry"): UserBuildConfiguration {
    const equipments = {} as UserBuildConfiguration["equipments"];
    for (const slot of EquipmentSlotEnum.options) {
        equipments[slot] = EquippedGearSlotConfigSchema.parse({ slot });
    }

    return {
        buildId: `build_${Date.now()}`,
        buildName: "My BPSR Build",
        characterLevel: 60,
        classId,
        specId,
        allocatedTalents: {},
        equippedSkills: [],
        battleImagines: [
            { imagineId: "3923", tier: "5" },
            { imagineId: "3969", tier: "5" },
        ],
        equipments,
        modules: [
            { slotIndex: 1, category: "assault", effects: [] },
            { slotIndex: 2, category: "assault", effects: [] },
            { slotIndex: 3, category: "assault", effects: [] },
            { slotIndex: 4, category: "support", effects: [] },
            { slotIndex: 5, category: "guardian", effects: [] },
        ],
        psychoscope: {
            psychoscopeId: "1",
            level: 60,
            activeBuffChoices: {},
            equippedFactorsG10: {},
            bondImagines: [],
            manualBondPointsOverride: 55,
        },
        simulationToggles: {
            useUltimate: true,
            useImagine1: true,
            useImagine2: true,
            activePartyBuffIds: [],
            activeFoodBuffId: null,
            activeEventBuffIds: [],
        },
    };
}

interface BuildStoreState {
    activeBuild: UserBuildConfiguration;
    savedBuilds: UserBuildConfiguration[];
    compareTargetBuildId: string | null;

    // Actions
    setBuildName: (name: string) => void;
    setClassAndSpec: (classId: ClassId, specId?: SpecId) => void;
    setTalentRank: (nodeId: string, rank: number) => void;
    setEquippedSkill: (slotIndex: number, skillId: string, skillLevel: number, skillTier: number) => void;
    setBattleImagine: (slotIdx: 0 | 1, imagineId: string | null, tier: ImagineTierKey) => void;
    updateEquipmentSlot: (slot: EquipmentSlot, patch: Partial<UserBuildConfiguration["equipments"][EquipmentSlot]>) => void;
    updateModuleSlot: (
        slotIndex: number,
        category: ModuleCategory,
        effects: { slotRow: "1" | "2" | "3"; effectId: ModuleEffectId; points: number }[]
    ) => void;
    updatePsychoscope: (patch: Partial<UserBuildConfiguration["psychoscope"]>) => void;
    updateSimToggles: (patch: Partial<UserBuildConfiguration["simulationToggles"]>) => void;

    // Save / Load / Compare
    saveCurrentBuild: () => void;
    loadSavedBuild: (buildId: string) => void;
    deleteSavedBuild: (buildId: string) => void;
    setCompareTargetBuildId: (buildId: string | null) => void;
    resetActiveBuild: () => void;
}

export const useBuildStore = create<BuildStoreState>()(
    persist(
        (set, get) => ({
            activeBuild: createDefaultBuild("marksman", "falconry"),
            savedBuilds: [],
            compareTargetBuildId: null,

            setBuildName: (buildName) =>
                set((state) => ({ activeBuild: { ...state.activeBuild, buildName } })),

            setClassAndSpec: (classId, specId) => {
                const targetSpec = specId || CLASS_DEFAULT_SPECS[classId][0];
                set((state) => ({
                    activeBuild: {
                        ...createDefaultBuild(classId, targetSpec),
                        buildId: state.activeBuild.buildId,
                        buildName: state.activeBuild.buildName,
                    },
                    compareTargetBuildId: null,
                }));
            },

            setTalentRank: (nodeId, rank) =>
                set((state) => {
                    const nextTalents = { ...state.activeBuild.allocatedTalents };
                    if (rank <= 0) delete nextTalents[nodeId];
                    else nextTalents[nodeId] = rank;
                    return { activeBuild: { ...state.activeBuild, allocatedTalents: nextTalents } };
                }),

            setEquippedSkill: (slotIndex, skillId, skillLevel, skillTier) =>
                set((state) => {
                    const filtered = state.activeBuild.equippedSkills.filter((s) => s.slotIndex !== slotIndex);
                    if (skillId) {
                        filtered.push({ slotIndex, skillId, skillLevel, skillTier });
                    }
                    filtered.sort((a, b) => a.slotIndex - b.slotIndex);
                    return { activeBuild: { ...state.activeBuild, equippedSkills: filtered } };
                }),

            setBattleImagine: (slotIdx, imagineId, tier) =>
                set((state) => {
                    const nextImagines = [...state.activeBuild.battleImagines] as UserBuildConfiguration["battleImagines"];
                    nextImagines[slotIdx] = { imagineId, tier };
                    return { activeBuild: { ...state.activeBuild, battleImagines: nextImagines } };
                }),

            updateEquipmentSlot: (slot, patch) =>
                set((state) => ({
                    activeBuild: {
                        ...state.activeBuild,
                        equipments: {
                            ...state.activeBuild.equipments,
                            [slot]: { ...state.activeBuild.equipments[slot], ...patch },
                        },
                    },
                })),

            updateModuleSlot: (slotIndex, category, effects) =>
                set((state) => ({
                    activeBuild: {
                        ...state.activeBuild,
                        modules: state.activeBuild.modules.map((m) =>
                            m.slotIndex === slotIndex ? { slotIndex, category, effects } : m
                        ),
                    },
                })),

            updatePsychoscope: (patch) =>
                set((state) => ({
                    activeBuild: {
                        ...state.activeBuild,
                        psychoscope: { ...state.activeBuild.psychoscope, ...patch },
                    },
                })),

            updateSimToggles: (patch) =>
                set((state) => ({
                    activeBuild: {
                        ...state.activeBuild,
                        simulationToggles: { ...state.activeBuild.simulationToggles, ...patch },
                    },
                })),

            saveCurrentBuild: () =>
                set((state) => {
                    const copy: UserBuildConfiguration = JSON.parse(JSON.stringify(state.activeBuild));
                    const existingIdx = state.savedBuilds.findIndex((b) => b.buildId === copy.buildId);
                    const nextSaved = [...state.savedBuilds];
                    if (existingIdx >= 0) {
                        nextSaved[existingIdx] = copy;
                    } else {
                        copy.buildId = `build_${Date.now()}`;
                        nextSaved.push(copy);
                    }
                    return { activeBuild: copy, savedBuilds: nextSaved };
                }),

            loadSavedBuild: (buildId) =>
                set((state) => {
                    const found = state.savedBuilds.find((b) => b.buildId === buildId);
                    if (!found) return state;
                    return {
                        activeBuild: JSON.parse(JSON.stringify(found)),
                        compareTargetBuildId: null,
                    };
                }),

            deleteSavedBuild: (buildId) =>
                set((state) => ({
                    savedBuilds: state.savedBuilds.filter((b) => b.buildId !== buildId),
                    compareTargetBuildId: state.compareTargetBuildId === buildId ? null : state.compareTargetBuildId,
                })),

            setCompareTargetBuildId: (compareTargetBuildId) => set({ compareTargetBuildId }),

            resetActiveBuild: () =>
                set((state) => ({
                    activeBuild: createDefaultBuild(state.activeBuild.classId, state.activeBuild.specId),
                })),
        }),
        {
            name: "bpsr-build-simulator-storage-v1",
        }
    )
);