import { z } from "zod";
import {
    CombatBuffEffectSchema,
    ElementTypeEnum,
    HybridIconSchema,
    StatModifierSchema,
} from "./common.schema";

export const ImagineTierKeyEnum = z.enum(["0", "1", "2", "3", "4", "5"]);
export type ImagineTierKey = z.infer<typeof ImagineTierKeyEnum>;

export const ImagineTierDataSchema = z.object({
    tier: z.number().int().min(0).max(5),
    // 1. ค่าสเตตัสและบัฟเมื่อสวมใส่ลงใน Slot 1 หรือ 2 (Passive)
    passiveStatModifiers: z.array(StatModifierSchema).default([]),
    passiveCombatBuffs: z.array(CombatBuffEffectSchema).default([]),

    // 2. ผลลัพธ์เมื่อกดใช้สกิลของ Imagine ในการต่อสู้ (Active)
    activeDamageMultiplierPct: z.number().default(0),
    activeHealMultiplierPct: z.number().default(0),
    activeShieldMultiplierPct: z.number().default(0),
    activeIllusionBreak: z.number().default(0),
    activeBuffsAndDebuffs: z.array(CombatBuffEffectSchema).default([]),

    // 3. แต้ม Bond Points ที่ได้รับเมื่อนำ Imagine ตัวนี้ที่ Tier นี้ไปใส่ในช่อง Bond ของ Psychoscope
    bondPointsGranted: z.number().int().min(1).max(15),
});

export const ImagineDefinitionSchema = HybridIconSchema.extend({
    id: z.string(),
    name: z.string(),
    rarity: z.enum(["SSR", "SR", "R"]).default("SSR"),
    category: z.enum(["boss", "elite", "common"]).default("boss"),
    damageType: z.enum(["physical", "magical", "heal", "shield", "buff_only"]).default("physical"),
    element: ElementTypeEnum.default("none"),
    cooldownMs: z.number().nonnegative().default(60000),
    castTimeMs: z.number().nonnegative().default(800),
    tiers: z.record(ImagineTierKeyEnum, ImagineTierDataSchema),
    _todo_verify: z.boolean().optional(),
});
export type ImagineDefinition = z.infer<typeof ImagineDefinitionSchema>;