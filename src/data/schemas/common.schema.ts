import { z } from "zod";

// ============================================================================
// 1. PRIMARY & ELEMENT ENUMS
// ============================================================================
export const PrimaryStatTypeEnum = z.enum(["strength", "agility", "intellect"]);
export type PrimaryStatType = z.infer<typeof PrimaryStatTypeEnum>;

export const ElementTypeEnum = z.enum([
    "none",
    "fire",
    "ice",
    "forest",
    "thunder",
    "wind",
    "rock",
    "light",
    "dark",
]);
export type ElementType = z.infer<typeof ElementTypeEnum>;

// ============================================================================
// 2. COMPLETE ATTRIBUTE KEYS (ครอบคลุมทั้งหน้า Summary และ Full Attributes)
// ============================================================================
export const AttributeKeyEnum = z.enum([
    // --- Summary & Core Secondary Ratings ---
    "maxHp",
    "atk",
    "matk",
    "strength",
    "intellect",
    "agility",
    "endurance",
    "illusionBreakingStrength",
    "crit",          // แต้ม Rating
    "critRatePct",   // % ที่แปลงแล้ว
    "haste",         // แต้ม Rating
    "hastePct",      // % ที่แปลงแล้ว
    "luck",          // แต้ม Rating
    "luckRatePct",   // % ที่แปลงแล้ว
    "mastery",       // แต้ม Rating
    "masteryPct",    // % ที่แปลงแล้ว
    "versatility",   // แต้ม Rating
    "versatilityPct",// % ที่แปลงแล้ว
    "block",         // แต้ม Rating
    "blockRatePct",  // % ที่แปลงแล้ว

    // --- Offensive Attributes ---
    "refinedAtk",
    "refinedMatk",
    "phyBoostPct",
    "magBoostPct",
    "attackSpdPct",
    "castSpdPct",
    "critDmgPct",
    "luckyStrikeDmgMultPct",
    "armorPenetrationPct",      // รองรับเอฟเฟกต์เจาะเกราะจาก Module (Strength Boost)
    "magicPenetrationPct",      // รองรับเอฟเฟกต์เจาะเกราะเวทจาก Module (Intellect Boost)
    "eliteBossDmgBonusPct",     // รองรับ Elite Strike
    "specialAttackDmgBonusPct", // รองรับ Special Attack

    // --- Defensive Attributes ---
    "armor",
    "resistance",
    "refinedArmor",
    "atkReductionPct",
    "matkReductionPct",
    "blockDmgReductionPct",

    // --- Support Attributes ---
    "critHealingPct",
    "luckyStrikeHealingPct",
    "healingOutputPct",
    "healingReceivedPct",
    "shieldPct",
    "shieldReceivePct",

    // --- Elemental Attack (9 ค่า) ---
    "allElementAtk",
    "fireAtk",
    "iceAtk",
    "forestAtk",
    "thunderAtk",
    "windAtk",
    "rockAtk",
    "lightAtk",
    "darkAtk",

    // --- Elemental Bonus (18 ค่า: แต้ม + %) ---
    "allElement",
    "allElementBonusPct",
    "fire",
    "fireBonusPct",
    "ice",
    "iceBonusPct",
    "forest",
    "forestBonusPct",
    "thunder",
    "thunderBonusPct",
    "wind",
    "windBonusPct",
    "rock",
    "rockBonusPct",
    "light",
    "lightBonusPct",
    "dark",
    "darkBonusPct",

    // --- Element Resistance (18 ค่า: แต้ม + %) ---
    "allElementRes",
    "allElementResPct",
    "fireRes",
    "fireResPct",
    "iceRes",
    "iceResPct",
    "forestRes",
    "forestResPct",
    "thunderRes",
    "thunderResPct",
    "windRes",
    "windResPct",
    "rockRes",
    "rockResPct",
    "lightRes",
    "lightResPct",
    "darkRes",
    "darkResPct",

    // --- Other Attributes (2 ค่า) ---
    "staminaLimit",
    "staminaRecovery",
]);
export type AttributeKey = z.infer<typeof AttributeKeyEnum>;

// ============================================================================
// 3. HYBRID ICON & STAT MODIFIER SCHEMAS
// ============================================================================
export const HybridIconSchema = z.object({
    icon: z.string().min(1),                 // Local path เช่น "/assets/sigils/sigil_01.webp"
    iconRemoteUrl: z.string().default(""),   // Fallback URL จาก CDN ต้นทาง
});

export const ModifierValueTypeEnum = z.enum([
    "flat",           // บวกค่าคงที่เข้า Flat Pool
    "percent_base",   // คูณกับค่า Base
    "percent_total",  // คูณกับผลรวม Flat Pool (เช่น Strength +8%)
    "final_flat",     // บวกปิดท้ายหลังคูณ % เสร็จ
]);

export const StatModifierSchema = z.object({
    stat: AttributeKeyEnum,
    value: z.number(),
    type: ModifierValueTypeEnum.default("flat"),
    condition: z
        .enum(["always", "combat_only", "hp_above_80", "hp_below_50", "on_crit", "on_lucky_strike", "party_buff"])
        .default("always"),
});
export type StatModifier = z.infer<typeof StatModifierSchema>;

// โครงสร้างสำหรับบัฟ/ดีบัฟที่ทำงานในระหว่างการต่อสู้ (Combat Simulator)
export const CombatBuffEffectSchema = z.object({
    buffId: z.string(),
    name: z.string(),
    target: z.enum(["self", "party", "enemy_debuff"]).default("self"),
    durationMs: z.number().nonnegative(), // 0 = ติดตัวตลอดการต่อสู้
    maxStacks: z.number().int().min(1).default(1),
    internalCooldownMs: z.number().nonnegative().default(0),
    triggerChancePct: z.number().min(0).max(100).default(100),
    modifiers: z.array(StatModifierSchema),
    dmgTakenIncreasedPct: z.number().default(0), // กรณีเป็นดีบัฟแปะบอสให้รับดาเมจแรงขึ้น
});
export type CombatBuffEffect = z.infer<typeof CombatBuffEffectSchema>;