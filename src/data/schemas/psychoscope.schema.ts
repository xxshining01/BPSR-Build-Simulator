import { z } from "zod";
import { ClassIdEnum, SpecIdEnum } from "./class-talent.schema";
import { CombatBuffEffectSchema, HybridIconSchema, StatModifierSchema } from "./common.schema";

// ============================================================================
// 1. FACTOR G10 (5 ประเภท และของทุกสายอาชีพ)
// ============================================================================
export const FactorCategoryEnum = z.enum([
    "polarity",     // ขั้วพลังงาน
    "stasis",       // สถิต
    "inspiration",  // แรงบันดาลใจ
    "reality",      // สัจธรรม
    "class_stasis", // สถิตประจำสายอาชีพ
]);
export type FactorCategory = z.infer<typeof FactorCategoryEnum>;

export const FactorG10DefinitionSchema = HybridIconSchema.extend({
    id: z.string(),
    name: z.string(),
    grade: z.literal("G10").default("G10"),
    category: FactorCategoryEnum,
    requiredClassId: ClassIdEnum.nullable().default(null), // บังคับระบุถ้าเป็น class_stasis
    requiredSpecId: SpecIdEnum.nullable().default(null),
    statModifiers: z.array(StatModifierSchema).default([]),
    combatEffects: z.array(CombatBuffEffectSchema).default([]),
    _todo_verify: z.boolean().optional(),
});
export type FactorG10Definition = z.infer<typeof FactorG10DefinitionSchema>;

// ============================================================================
// 2. DEEP SLUMBER PSYCHOSCOPE (8 สาย + Tree Map + Bond Points 3-55)
// ============================================================================
export const PsychoscopeNodeSchema = z.object({
    nodeId: z.string(),
    name: z.string(),
    requiredPsychoscopeLevel: z.number().int().min(1), // เลเวลของ Psychoscope ที่ต้องใช้ปลดล็อกโหนดนี้
    nodeType: z.enum(["buff_choice", "factor_socket"]),
    gridPosition: z.object({
        stepOrder: z.number().int().min(1), // ลำดับขั้นจากต้นสายไปปลายสาย
        branchIndex: z.number().int().min(0), // ทางแยก (0 = สายกลาง, 1 = แยกบน/ซ้าย, 2 = แยกล่าง/ขวา)
    }),
    parentNodeIds: z.array(z.string()).default([]),
    mutuallyExclusiveNodeIds: z.array(z.string()).default([]), // ทางแยกที่เลือกได้เพียงทางเดียว

    // กรณีเป็นโหนดเลือกบัฟ (buff_choice)
    buffOptions: z
        .array(
            z.object({
                optionId: z.string(),
                name: z.string(),
                statModifiers: z.array(StatModifierSchema).default([]),
                combatEffects: z.array(CombatBuffEffectSchema).default([]),
            })
        )
        .default([]),

    // กรณีเป็นโหนดช่องใส่ Factor G10 (factor_socket)
    allowedFactorCategories: z.array(FactorCategoryEnum).default([]),
});
export type PsychoscopeNode = z.infer<typeof PsychoscopeNodeSchema>;

export const BondPointThresholdEffectSchema = z.object({
    requiredBondPoints: z.number().int().min(3).max(55), // เกณฑ์แต้มตั้งแต่ 3 ถึง 55
    description: z.string(),
    statModifiers: z.array(StatModifierSchema).default([]),
    combatEffects: z.array(CombatBuffEffectSchema).default([]),
});

export const DeepSlumberPsychoscopeSchema = HybridIconSchema.extend({
    psychoscopeId: z.string(), // 1 ใน 8 สาย
    name: z.string(),
    maxLevel: z.number().int().min(1).default(60),
    // ส่วนที่ A: ผังโหนดตามลำดับสายและทางแยก + ช่องใส่ Factor G10
    nodes: z.array(PsychoscopeNodeSchema),
    // ส่วนที่ B: เอฟเฟกต์บัฟจากค่า Bond Points (3 ถึง 55) ที่ได้จากการใส่ Imagines สูงสุด 5 ตัว
    bondPointEffects: z.array(BondPointThresholdEffectSchema),
    _todo_verify: z.boolean().optional(),
});
export type DeepSlumberPsychoscope = z.infer<typeof DeepSlumberPsychoscopeSchema>;