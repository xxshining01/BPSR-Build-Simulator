import { z } from "zod";
import {
    AttributeKeyEnum,
    CombatBuffEffectSchema,
    HybridIconSchema,
    PrimaryStatTypeEnum,
    StatModifierSchema,
} from "./common.schema";

// ============================================================================
// 1. 11 EQUIPMENT SLOTS
// ============================================================================
export const EquipmentSlotEnum = z.enum([
    "weapon",
    "head",
    "chest",
    "gloves",
    "boots",
    "earrings",
    "necklace",
    "ring",
    "bracelet_left",
    "bracelet_right",
    "charm",
]);
export type EquipmentSlot = z.infer<typeof EquipmentSlotEnum>;

// ============================================================================
// 2. SLOT STAT RESTRICTION MATRIX (รู้ว่าค่าใดหาไม่ได้จากชิ้นไหนของแต่ละสาย)
// ============================================================================
export const SlotStatRestrictionRuleSchema = z.object({
    primaryStatGroup: PrimaryStatTypeEnum, // "strength" | "agility" | "intellect"
    slot: EquipmentSlotEnum,
    allowedMainStats: z.array(AttributeKeyEnum),
    allowedSubStats: z.array(AttributeKeyEnum),
    forbiddenSubStats: z.array(AttributeKeyEnum), // สเตตัสที่หาไม่ได้จากอุปกรณ์ชิ้นนี้เด็ดขาด
    allowedExtraStats: z.array(AttributeKeyEnum),
    allowedPurpleStats: z.array(AttributeKeyEnum), // ออปชันม่วง (Rare Attribute) ที่สุ่มออกในชิ้นนี้ได้
});
export type SlotStatRestrictionRule = z.infer<typeof SlotStatRestrictionRuleSchema>;

// ============================================================================
// 3. PERFECTION SCALING (0 - 100) & EQUIPMENT ITEM TEMPLATES
// ============================================================================
export const PerfectionStatRangeSchema = z.object({
    stat: AttributeKeyEnum,
    valueAtPerfect0: z.number(),   // ค่าสเตตัสเมื่อ Perfect = 0
    valueAtPerfect100: z.number(), // ค่าสเตตัสเมื่อ Perfect = 100
});

export const EquipmentSourceCategoryEnum = z.enum([
    "map_drop",          // ดรอปจากแมพ/ดันเจี้ยน (เลือกสเตตัสได้ + มีออปชันม่วง + ปรับ Perfect 0-100 ได้)
    "life_skill_craft",  // คราฟท์จาก Life Skill
    "npc_special_set",   // เซ็ตจากร้านเฉพาะ/NPC (ล็อกประเภทสเตตัส แต่แต้มทะลุหลอด + มีเซ็ต 2/4 ชิ้น)
    "epic_weapon",       // อาวุธ Epic
    "far_sea_weapon",    // อาวุธ Far Sea
]);
export type EquipmentSourceCategory = z.infer<typeof EquipmentSourceCategoryEnum>;

export const EquipmentTemplateSchema = HybridIconSchema.extend({
    id: z.string(),
    name: z.string(),
    level: z.number().int().min(1).max(60).default(60),
    slot: EquipmentSlotEnum,
    primaryStatGroup: PrimaryStatTypeEnum,
    sourceCategory: EquipmentSourceCategoryEnum,
    setId: z.string().nullable().default(null), // ชี้ไปที่ EquipmentSetSchema ถ้าเป็นของเซ็ต

    // กรณีเป็นอุปกรณ์เซ็ต NPC ที่ล็อกสเตตัสตายตัวแต่ให้แต้มทะลุหลอด (Over-capped Locked Stats)
    hasLockedOvercappedStats: z.boolean().default(false),
    lockedStats: z.array(StatModifierSchema).default([]),

    // กรณีเป็นอุปกรณ์ดรอป/คราฟท์ที่ปรับค่า Perfection (0-100) ได้
    perfectionStatRanges: z.array(PerfectionStatRangeSchema).default([]),
    allowsPurpleBonusStat: z.boolean().default(true),

    // เอฟเฟกต์พิเศษประจำอาวุธ Epic หรือ Far Sea
    specialWeaponPassiveStats: z.array(StatModifierSchema).default([]),
    specialWeaponCombatEffects: z.array(CombatBuffEffectSchema).default([]),
    _todo_verify: z.boolean().optional(),
});
export type EquipmentTemplate = z.infer<typeof EquipmentTemplateSchema>;

// ============================================================================
// 4. EQUIPMENT SETS (2-Piece & 4-Piece Bonuses)
// ============================================================================
export const EquipmentSetSchema = z.object({
    setId: z.string(),
    name: z.string(),
    primaryStatGroup: PrimaryStatTypeEnum,
    twoPieceBonus: z.object({
        description: z.string(),
        statModifiers: z.array(StatModifierSchema).default([]),
        combatEffects: z.array(CombatBuffEffectSchema).default([]),
    }),
    fourPieceBonus: z.object({
        description: z.string(),
        statModifiers: z.array(StatModifierSchema).default([]),
        combatEffects: z.array(CombatBuffEffectSchema).default([]),
    }),
    _todo_verify: z.boolean().optional(),
});
export type EquipmentSet = z.infer<typeof EquipmentSetSchema>;

// ============================================================================
// 5. REFINE TABLE (ระดับ 0 ถึง 30 แยกตามช่องอุปกรณ์)
// ============================================================================
export const RefineLevelStepSchema = z.object({
    refineLevel: z.number().int().min(0).max(30),
    slot: EquipmentSlotEnum,
    statModifiers: z.array(StatModifierSchema), // เช่น +Refined ATK, +Refined MATK, +Refined Armor, +Max HP
});
export type RefineLevelStep = z.infer<typeof RefineLevelStepSchema>;

// ============================================================================
// 6. SIGILS (ติดตั้งได้ 1 ชิ้นต่ออุปกรณ์ และเลือก Emblem Lv.1, 2 หรือ 3)
// ============================================================================
export const SigilDefinitionSchema = HybridIconSchema.extend({
    id: z.string(),
    name: z.string(),
    allowedSlots: z.array(EquipmentSlotEnum).min(1), // ระบุว่าติดลงอุปกรณ์ชิ้นใดได้บ้าง
    emblemLevels: z.object({
        "1": z.array(StatModifierSchema),
        "2": z.array(StatModifierSchema),
        "3": z.array(StatModifierSchema),
    }),
    _todo_verify: z.boolean().optional(),
});
export type SigilDefinition = z.infer<typeof SigilDefinitionSchema>;