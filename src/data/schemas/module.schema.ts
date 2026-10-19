import { z } from "zod";
import { CombatBuffEffectSchema, HybridIconSchema, StatModifierSchema } from "./common.schema";

export const ModuleCategoryEnum = z.enum(["assault", "support", "guardian"]);
export type ModuleCategory = z.infer<typeof ModuleCategoryEnum>;

// รายชื่อ 13 Basic Link Effects (ออกได้ทั้งแถวที่ 1, 2 และ 3)
export const BasicModuleEffectIdEnum = z.enum([
    "strength_boost",   // 力量加持 (Assault)
    "agility_boost",    // 敏捷加持 (Assault)
    "intellect_boost",  // 智力加持 (Assault)
    "special_attack",   // 特攻伤害 (Assault)
    "elite_strike",     // 精英打击 (Assault)
    "healing_boost",    // 特攻治疗加持 (Support)
    "healing_enhance",  // 专精治疗加持 (Support)
    "resistance",       // 抵御魔法 (Guardian)
    "armor",            // 抵御物理 (Guardian)
    "cast_focus",       // 施法专注 (All 3)
    "attack_spd",       // 攻速专注 (All 3)
    "crit_focus",       // 暴击专注 (All 3)
    "luck_focus",       // 幸运专注 (All 3)
]);

// รายชื่อ 8 Special Link Effects ซีรีส์ "极-" (ออกได้เฉพาะ 1st Link Effect เท่านั้น)
export const SpecialModuleEffectIdEnum = z.enum([
    "dmg_stack",        // 极-伤害叠加 (Assault)
    "agile",            // 极-灵活身法 (Assault)
    "life_condense",    // 极-生命凝聚 (Support)
    "first_aid",        // 极-急救措施 (Support)
    "team_luck_crit",   // 极-全队幸暴 (Support)
    "final_protection", // 极-绝境守护 (Guardian)
    "life_wave",        // 极-生命波动 (All 3)
    "life_steal",       // 极-生命汲取 (All 3)
]);

export const ModuleEffectIdEnum = z.union([
    BasicModuleEffectIdEnum,
    SpecialModuleEffectIdEnum,
]);
export type ModuleEffectId = z.infer<typeof ModuleEffectIdEnum>;

export const ModuleLinkLevelDataSchema = z.object({
    linkLevel: z.number().int().min(1).max(6),
    requiredTotalPoints: z.number().int(), // มาตรฐาน: Lv1=1, Lv2=4, Lv3=8, Lv4=12, Lv5=16, Lv6=20
    description: z.string(),
    statModifiers: z.array(StatModifierSchema).default([]),
    combatEffects: z.array(CombatBuffEffectSchema).default([]),
});

export const ModuleEffectDefinitionSchema = HybridIconSchema.extend({
    effectId: ModuleEffectIdEnum,
    name: z.string(),
    cnName: z.string(),
    isSpecialFirstSlotOnly: z.boolean(), // true สำหรับ 8 เอฟเฟกต์ซีรีส์ 极
    allowedCategories: z.array(ModuleCategoryEnum).min(1),
    // เอฟเฟกต์ที่ได้รับในแต่ละระดับ Link Lv.1 ถึง Lv.6
    linkLevels: z.record(z.enum(["1", "2", "3", "4", "5", "6"]), ModuleLinkLevelDataSchema),
    _todo_verify: z.boolean().optional(),
});
export type ModuleEffectDefinition = z.infer<typeof ModuleEffectDefinitionSchema>;

// โครงสร้างค่า Status พื้นฐานของตัวโมดูลแต่ละชิ้นเมื่อใส่ครบ 5 ชิ้น
export const ModuleBasePieceStatSchema = z.object({
    category: ModuleCategoryEnum,
    baseStatModifiersPerPiece: z.array(StatModifierSchema),
    pointScalingModifiersPerPoint: z.array(StatModifierSchema).default([]),
});