// ไฟล์: src/store/useBuildStore.ts
"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
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
import {
  CLASS_SPEC_KEYSTONE_NODES,
  resolveClassSkillConfiguration,
} from "../engine/game-db-loader";

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

export function buildDefaultSevenSkills(
  classId: ClassId,
  allocatedTalents: Record<string, number>
): UserBuildConfiguration["equippedSkills"] {
  const resolved = resolveClassSkillConfiguration(classId, allocatedTalents);
  const firstFour = resolved.selectablePoolIds.slice(0, 4);

  return [
    // 3 ช่องที่ล็อกปุ่มตายตัวตั้งแต่ต้น
    { slotIndex: 1, skillId: resolved.basicAttackId, skillLevel: 30, skillTier: 6 },   // คลิกซ้าย (LMB)
    { slotIndex: 2, skillId: resolved.specialSkillId, skillLevel: 30, skillTier: 6 },  // กดเลข 1
    { slotIndex: 3, skillId: resolved.ultimateSkillId, skillLevel: 30, skillTier: 6 }, // กดปุ่ม R (Ultimate)
    // 4 ช่องที่ผู้เล่นเลือกสกิลใส่เองได้ (กดเลข 2, 3, 4, 5)
    { slotIndex: 4, skillId: firstFour[0] || "", skillLevel: 30, skillTier: 6 },
    { slotIndex: 5, skillId: firstFour[1] || "", skillLevel: 30, skillTier: 6 },
    { slotIndex: 6, skillId: firstFour[2] || "", skillLevel: 30, skillTier: 6 },
    { slotIndex: 7, skillId: firstFour[3] || "", skillLevel: 30, skillTier: 6 },
  ];
}

export function createDefaultBuild(
  classId: ClassId = "marksman",
  specId?: SpecId
): UserBuildConfiguration {
  const resolvedSpec = specId || CLASS_DEFAULT_SPECS[classId][0];
  const equipments = {} as UserBuildConfiguration["equipments"];
  for (const slot of EquipmentSlotEnum.options) {
    equipments[slot] = EquippedGearSlotConfigSchema.parse({ slot });
  }

  const initialTalents: Record<string, number> = {};
  return {
    buildId: `build_${Date.now()}`,
    buildName: "My BPSR Build",
    characterLevel: 60,
    classId,
    specId: resolvedSpec,
    allocatedTalents: initialTalents,
    equippedSkills: buildDefaultSevenSkills(classId, initialTalents),
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

  setBuildName: (name: string) => void;
  setClassOnly: (classId: ClassId) => void;
  setTalentRank: (nodeId: string, rank: number) => void;
  setBatchTalents: (nextTalents: Record<string, number>, autoSpecId?: SpecId) => void;
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

  saveCurrentBuild: () => void;
  loadSavedBuild: (buildId: string) => void;
  deleteSavedBuild: (buildId: string) => void;
  setCompareTargetBuildId: (buildId: string | null) => void;
  resetActiveBuild: () => void;
}

export const useBuildStore = create<BuildStoreState>()(
  persist(
    (set) => ({
      activeBuild: createDefaultBuild("marksman"),
      savedBuilds: [],
      compareTargetBuildId: null,

      setBuildName: (buildName) =>
        set((state) => ({ activeBuild: { ...state.activeBuild, buildName } })),

      // เลือกเฉพาะอาชีพหลัก (สาย Spec จะไปถูกเลือกผ่านการอัปโหนดใน Talent Tree Map)
      setClassOnly: (classId) =>
        set((state) => ({
          activeBuild: {
            ...createDefaultBuild(classId),
            buildId: state.activeBuild.buildId,
            buildName: state.activeBuild.buildName,
          },
          compareTargetBuildId: null,
        })),

      setTalentRank: (nodeId, rank) =>
        set((state) => {
          const nextTalents = { ...state.activeBuild.allocatedTalents };
          if (rank <= 0) delete nextTalents[nodeId];
          else nextTalents[nodeId] = rank;

          // ตรวจว่าโหนดที่กดเป็น Keystone Spec ของอาชีพนี้หรือไม่ เพื่อเปลี่ยน specId อัตโนมัติ
          let nextSpecId = state.activeBuild.specId;
          const keystones = CLASS_SPEC_KEYSTONE_NODES[state.activeBuild.classId];
          for (const ks of keystones) {
            if (nextTalents[ks.keystoneNodeId] > 0) {
              nextSpecId = ks.specId;
            }
          }

          // อัปเดตสกิลช่อง 1, 2, 3 (Basic / Special / Ultimate) หากโหนด Talent เปลี่ยนแปลงสกิล
          const resolvedFixed = resolveClassSkillConfiguration(state.activeBuild.classId, nextTalents);
          const updatedSkills = state.activeBuild.equippedSkills.map((sk) => {
            if (sk.slotIndex === 1) return { ...sk, skillId: resolvedFixed.basicAttackId };
            if (sk.slotIndex === 2) return { ...sk, skillId: resolvedFixed.specialSkillId };
            if (sk.slotIndex === 3) return { ...sk, skillId: resolvedFixed.ultimateSkillId };
            return sk;
          });

          return {
            activeBuild: {
              ...state.activeBuild,
              specId: nextSpecId,
              allocatedTalents: nextTalents,
              equippedSkills: updatedSkills,
            },
          };
        }),

      setBatchTalents: (nextTalents, autoSpecId) =>
        set((state) => {
          let nextSpecId = autoSpecId || state.activeBuild.specId;
          const keystones = CLASS_SPEC_KEYSTONE_NODES[state.activeBuild.classId];
          for (const ks of keystones) {
            if (nextTalents[ks.keystoneNodeId] > 0) {
              nextSpecId = ks.specId;
            }
          }
          const resolvedFixed = resolveClassSkillConfiguration(state.activeBuild.classId, nextTalents);
          const updatedSkills = state.activeBuild.equippedSkills.map((sk) => {
            if (sk.slotIndex === 1) return { ...sk, skillId: resolvedFixed.basicAttackId };
            if (sk.slotIndex === 2) return { ...sk, skillId: resolvedFixed.specialSkillId };
            if (sk.slotIndex === 3) return { ...sk, skillId: resolvedFixed.ultimateSkillId };
            return sk;
          });

          return {
            activeBuild: {
              ...state.activeBuild,
              specId: nextSpecId,
              allocatedTalents: nextTalents,
              equippedSkills: updatedSkills,
            },
          };
        }),

      setEquippedSkill: (slotIndex, skillId, skillLevel, skillTier) =>
        set((state) => {
          const existing = state.activeBuild.equippedSkills.filter((s) => s.slotIndex !== slotIndex);
          existing.push({ slotIndex, skillId, skillLevel, skillTier });
          existing.sort((a, b) => a.slotIndex - b.slotIndex);
          return { activeBuild: { ...state.activeBuild, equippedSkills: existing } };
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
          activeBuild: createDefaultBuild(state.activeBuild.classId),
        })),
    }),
    {
      name: "bpsr-build-simulator-storage-v2",
    }
  )
);