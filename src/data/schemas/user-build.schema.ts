import { z } from "zod";
import { ActionSourceCategoryEnum, ClassIdEnum, SpecIdEnum } from "./class-talent.schema";
import { AttributeKeyEnum } from "./common.schema";
import { EquipmentSlotEnum } from "./equipment.schema";
import { ImagineTierKeyEnum } from "./imagine.schema";
import { ModuleCategoryEnum, ModuleEffectIdEnum } from "./module.schema";

// ============================================================================
// 1. USER BUILD CONFIGURATION (สิ่งที่ผู้ใช้กำหนดบนหน้าเว็บ)
// ============================================================================
export const EquippedGearSlotConfigSchema = z.object({
    slot: EquipmentSlotEnum,
    equipmentTemplateId: z.string().nullable().default(null),
    perfection: z.number().int().min(0).max(100).default(100), // ค่า Perfect 0-100
    refineLevel: z.number().int().min(0).max(30).default(0),   // ค่า Refine 0-30
    selectedMainStat: AttributeKeyEnum.nullable().default(null),
    selectedSubStats: z.array(AttributeKeyEnum).default([]),
    selectedExtraStats: z.array(AttributeKeyEnum).default([]),
    selectedPurpleStat: AttributeKeyEnum.nullable().default(null), // ออปชันม่วง (ถ้ามี)
    sigilId: z.string().nullable().default(null),
    sigilEmblemLevel: z.enum(["1", "2", "3"]).default("3"),
});

export const EquippedModuleSlotConfigSchema = z.object({
    slotIndex: z.number().int().min(1).max(5), // 5 Slots
    category: ModuleCategoryEnum.default("assault"),
    // เลือกเอฟเฟกต์ได้ 3 อย่าง จากระดับแต้ม 1-10
    effects: z
        .array(
            z.object({
                slotRow: z.enum(["1", "2", "3"]),
                effectId: ModuleEffectIdEnum,
                points: z.number().int().min(1).max(10),
            })
        )
        .max(3),
});

export const UserBuildConfigurationSchema = z.object({
    buildId: z.string(),
    buildName: z.string().min(1).default("New BPSR Build"),
    characterLevel: z.literal(60).default(60),

    // 1. อาชีพ, สาย Talent, สกิล และ Battle Imagines 2 ตัว
    classId: ClassIdEnum,
    specId: SpecIdEnum,
    allocatedTalents: z.record(z.string(), z.number().int().min(0)), // { [nodeId]: rank }
    equippedSkills: z.array(
        z.object({
            slotIndex: z.number().int().min(1).max(6),
            skillId: z.string(),
            skillLevel: z.number().int().min(1),
            skillTier: z.number().int().min(0),
        })
    ),
    battleImagines: z.tuple([
        z.object({ imagineId: z.string().nullable(), tier: ImagineTierKeyEnum.default("5") }),
        z.object({ imagineId: z.string().nullable(), tier: ImagineTierKeyEnum.default("5") }),
    ]),

    // 2. อุปกรณ์สวมใส่ทั้ง 11 ชิ้น + Refine + Sigil
    equipments: z.record(EquipmentSlotEnum, EquippedGearSlotConfigSchema),

    // 3. โมดูลทั้ง 5 ช่อง
    modules: z.array(EquippedModuleSlotConfigSchema).length(5),

    // 4. Deep Slumber Psychoscope 1 จาก 8 สาย + Factor G10 + Bond Points (3-55)
    psychoscope: z.object({
        psychoscopeId: z.string(),
        level: z.number().int().min(1).max(60).default(60),
        activeBuffChoices: z.record(z.string(), z.string()), // { [nodeId]: selectedOptionId }
        equippedFactorsG10: z.record(z.string(), z.string()), // { [socketNodeId]: factorId }
        bondImagines: z
            .array(
                z.object({
                    imagineId: z.string().nullable(),
                    tier: ImagineTierKeyEnum.default("5"),
                })
            )
            .max(5),
        manualBondPointsOverride: z.number().int().min(3).max(55).nullable().default(null),
    }),

    // 5. ตัวเลือกการจำลอง 5-Minute Simulator & บัฟเสริม
    simulationToggles: z.object({
        useUltimate: z.boolean().default(true),
        useImagine1: z.boolean().default(true),
        useImagine2: z.boolean().default(true),
        activePartyBuffIds: z.array(z.string()).default([]),
        activeFoodBuffId: z.string().nullable().default(null),
        activeEventBuffIds: z.array(z.string()).default([]),
    }),
});
export type UserBuildConfiguration = z.infer<typeof UserBuildConfigurationSchema>;

// ============================================================================
// 2. 5-MINUTE SIMULATION OUTPUT SCHEMA
// ============================================================================
export const ActionBreakdownRowSchema = z.object({
    actionId: z.string(),
    actionName: z.string(),
    sourceCategory: ActionSourceCategoryEnum,
    triggerOrCastCount: z.number().int().nonnegative(),
    totalDamage: z.number().nonnegative(),
    dps: z.number().nonnegative(),
    damageSharePct: z.number().min(0).max(100), // คิดเป็นกี่ % ของดาเมจรวม
    totalHeal: z.number().nonnegative(),
    hps: z.number().nonnegative(),
    healSharePct: z.number().min(0).max(100),   // คิดเป็นกี่ % ของฮีลรวม
    avgBuffPct: z.number().nonnegative(),
    buffContributionPct: z.number().min(0).max(100), // คิดเป็นกี่ % ของบัฟรวม
});
export type ActionBreakdownRow = z.infer<typeof ActionBreakdownRowSchema>;

export const FiveMinuteSimulationResultSchema = z.object({
    durationSeconds: z.literal(300),
    totalDamage: z.number().nonnegative(),
    dps: z.number().nonnegative(),
    totalHeal: z.number().nonnegative(),
    hps: z.number().nonnegative(),
    averageBuffPct: z.number().nonnegative(),
    actionsBreakdown: z.array(ActionBreakdownRowSchema),
});
export type FiveMinuteSimulationResult = z.infer<typeof FiveMinuteSimulationResultSchema>;

// ============================================================================
// 3. SPEC-LOCKED BUILD COMPARISON VALIDATOR
// ============================================================================
export function validateBuildsCanCompare(
    buildA: UserBuildConfiguration,
    buildB: UserBuildConfiguration
): { canCompare: boolean; reason?: string } {
    if (buildA.classId !== buildB.classId || buildA.specId !== buildB.specId) {
        return {
            canCompare: false,
            reason: `ไม่สามารถเปรียบเทียบข้ามสาย Talent ได้ (${buildA.specId} vs ${buildB.specId}) กรุณาเลือกบิลด์ในสาย ${buildA.specId} เหมือนกันเท่านั้น`,
        };
    }
    return { canCompare: true };
}