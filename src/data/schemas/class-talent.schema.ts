import { z } from "zod";
import {
    AttributeKeyEnum,
    CombatBuffEffectSchema,
    ElementTypeEnum,
    HybridIconSchema,
    PrimaryStatTypeEnum,
    StatModifierSchema,
} from "./common.schema";

// ============================================================================
// 1. 9 CLASSES & 18 SPECIALIZATIONS
// ============================================================================
export const ClassIdEnum = z.enum([
    "twin_striker",     // ขวานคู่
    "marksman",         // ธนู
    "spellcaster",      // จอมเวท
    "wind_knight",      // อัศวินสายลม (หอก)
    "blade_warden",     // ซามูไรคาตานะ
    "heavy_guardian",   // ดาบยักษ์เกราะหนัก
    "shield_knight",    // อัศวินโล่ศักดิ์สิทธิ์
    "verdant_oracle",   // นักบวชพงไพร
    "beat_performer",   // นักดนตรีวิญญาณ
]);
export type ClassId = z.infer<typeof ClassIdEnum>;

export const SpecIdEnum = z.enum([
    // Twin Striker
    "berserker", "executioner",
    // Marksman
    "falconry", "wildpack",
    // Spellcaster
    "icicle", "frostbeam",
    // Wind Knight
    "gale", "tempest",
    // Blade Warden
    "iaido", "twinflow",
    // Heavy Guardian
    "bastion", "crag",
    // Shield Knight
    "aegis", "judgement",
    // Verdant Oracle
    "lifebloom", "thornvine",
    // Beat Performer
    "resonance", "harmony",
]);
export type SpecId = z.infer<typeof SpecIdEnum>;

// ============================================================================
// 2. SKILL DEFINITIONS (Active, Basic, Ultimate, Passive & Talent Procs)
// ============================================================================
export const ActionSourceCategoryEnum = z.enum([
    "basic",        // โจมตีปกติ
    "active",       // Active Skill ในช่องสกิล
    "class_special",// สกิลเฉพาะอาชีพ
    "ultimate",     // ท่าไม้ตาย
    "passive",      // พาสซีฟติดตัว
    "talent_proc",  // สกิลเสริมที่ทำงานจากโหนด Talent (เช่น เหยี่ยวโฉบ, หอกน้ำแข็ง)
    "imagine",      // สกิลกดใช้จาก Imagine 1 หรือ 2
]);
export type ActionSourceCategory = z.infer<typeof ActionSourceCategoryEnum>;

export const SkillLevelScalingSchema = z.object({
    level: z.number().int().min(1),
    damageMultiplierPct: z.number().default(0), // เช่น 245.5 = 245.5% ของ ATK/MATK
    flatDamage: z.number().default(0),
    healMultiplierPct: z.number().default(0),
    flatHeal: z.number().default(0),
    shieldMultiplierPct: z.number().default(0),
    flatShield: z.number().default(0),
});

export const SkillTierAdvancementSchema = z.object({
    tier: z.number().int().min(0).max(10),
    description: z.string(),
    cooldownReductionMs: z.number().default(0),
    extraHitCount: z.number().int().default(0),
    multiplierBonusPct: z.number().default(0),
    critRateBonusPct: z.number().default(0),
    appliedBuffs: z.array(CombatBuffEffectSchema).default([]),
});

export const SkillDefinitionSchema = HybridIconSchema.extend({
    id: z.string(),
    name: z.string(),
    classId: ClassIdEnum,
    allowedSpecs: z.array(SpecIdEnum),
    category: ActionSourceCategoryEnum,
    damageType: z.enum(["physical", "magical", "heal", "shield", "buff_only"]),
    element: ElementTypeEnum.default("none"),
    hitCount: z.number().int().min(1).default(1),
    castTimeMs: z.number().nonnegative().default(0),
    animationLockMs: z.number().nonnegative().default(500),
    isChanneling: z.boolean().default(false),
    channelTicks: z.number().int().default(1),
    baseCooldownMs: z.number().nonnegative().default(0),
    scalesWithHaste: z.boolean().default(false),
    maxCharges: z.number().int().min(1).default(1),
    rotationPriority: z.number().int().default(50), // ใช้จัดลำดับใน 5-Min Auto-Rotation
    levelScaling: z.array(SkillLevelScalingSchema),
    tiers: z.array(SkillTierAdvancementSchema).default([]),
    _todo_verify: z.boolean().optional(),
});
export type SkillDefinition = z.infer<typeof SkillDefinitionSchema>;

// ============================================================================
// 3. TALENT TREE NODE SCHEMA (Node-by-Node Tree Map)
// ============================================================================
export const TalentTriggeredProcSchema = z.object({
    procActionId: z.string(),
    procName: z.string(),
    triggerEvent: z.enum(["on_crit", "on_lucky_strike", "on_skill_cast", "on_basic_attack", "periodic"]),
    triggerChancePct: z.number().min(0).max(100).default(100),
    internalCooldownMs: z.number().nonnegative().default(0),
    damageMultiplierPct: z.number().default(0),
    healMultiplierPct: z.number().default(0),
    element: ElementTypeEnum.default("none"),
});

export const TalentRankDataSchema = z.object({
    rank: z.number().int().min(1),
    description: z.string(),
    statModifiers: z.array(StatModifierSchema).default([]),
    skillEnhancements: z
        .array(
            z.object({
                targetSkillId: z.string(),
                multiplierAddPct: z.number().default(0),
                cooldownReduceMs: z.number().default(0),
                critRateAddPct: z.number().default(0),
                extraHits: z.number().int().default(0),
            })
        )
        .default([]),
    combatBuffs: z.array(CombatBuffEffectSchema).default([]),
    triggeredProcs: z.array(TalentTriggeredProcSchema).default([]),
});

export const TalentNodeSchema = HybridIconSchema.extend({
    nodeId: z.string(),
    name: z.string(),
    classId: ClassIdEnum,
    specId: SpecIdEnum.nullable(), // null ถ้าอยู่ในผังต้นไม้ส่วนกลาง (base_class)
    treeSection: z.enum(["base_class", "spec_branch_1", "spec_branch_2"]),
    nodeType: z.enum(["minor_stat", "skill_enhancer", "mechanic_proc", "keystone"]),
    gridPosition: z.object({
        row: z.number().int().nonnegative(),
        col: z.number().int().nonnegative(),
    }),
    maxRank: z.number().int().min(1).max(10),
    pointCostPerRank: z.number().int().min(1).default(1),
    prerequisites: z.object({
        requiredPointsInSection: z.number().int().nonnegative().default(0),
        parentNodes: z
            .array(
                z.object({
                    nodeId: z.string(),
                    minRank: z.number().int().min(1),
                })
            )
            .default([]),
        mutuallyExclusiveWith: z.array(z.string()).default([]),
    }),
    ranks: z.array(TalentRankDataSchema),
    _todo_verify: z.boolean().optional(),
});
export type TalentNode = z.infer<typeof TalentNodeSchema>;

// ============================================================================
// 4. CLASS MASTER DEFINITION (Lv.60 Base Stats & Scaling Ratios)
// ============================================================================
export const ClassMasterDefinitionSchema = HybridIconSchema.extend({
    classId: ClassIdEnum,
    name: z.string(),
    primaryStat: PrimaryStatTypeEnum,
    baseStatsLv60: z.record(AttributeKeyEnum, z.number()),
    statConversionRatios: z.object({
        primaryToAtkOrMatk: z.number(), // เช่น 1 STR = 2.4 ATK
        secondaryToAtk: z.number().default(0),
        enduranceToHp: z.number(),      // เช่น 1 END = 18 Max HP
    }),
    specializations: z.array(
        HybridIconSchema.extend({
            specId: SpecIdEnum,
            name: z.string(),
            role: z.enum(["dps", "tank", "healer", "support"]),
            masteryScalingDescription: z.string(),
            masteryMultiplierPerPct: z.number(), // อัตราขยายกลไกสายอาชีพต่อ 1% Mastery
        })
    ),
});
export type ClassMasterDefinition = z.infer<typeof ClassMasterDefinitionSchema>;