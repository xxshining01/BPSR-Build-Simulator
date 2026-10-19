// ไฟล์: src/engine/damage-calculator.ts
import { ElementType } from "../data/schemas";
import { CalculatedCharacterStatus } from "./stat-aggregator";

export interface SkillHitInput {
  skillId: string;
  skillName: string;
  damageType: "physical" | "magical" | "heal" | "shield";
  element: ElementType;
  skillMultiplierPct: number; // เช่น 300 = 300% ATK
  flatBonus: number;
  canTriggerLuckyStrike: boolean; // false สำหรับ DOT/HOT หรือพาสซีฟบางชนิด
  extraCritRatePct?: number;
  extraCritDmgPct?: number;
  extraDmgBonusPct?: number;
}

export interface HitCalculationResult {
  expectedTotalDamage: number;
  expectedDirectDamage: number;
  expectedLuckyStrikeDamage: number;
  expectedHeal: number;
}

export function calculateSkillHitExpectedValue(
  status: CalculatedCharacterStatus,
  hit: SkillHitInput,
  activeCombatBuffBonusPct = 0,
  enemyDefMitigation = hit.damageType === "physical" ? 0.30 : 0.08 // ค่ามาตรฐานตาม STATUS_CALCULATION.md ข้อ 3
): HitCalculationResult {
  const s = status.rawMap;
  const critProb = Math.min(1.0, (s.critRatePct + (hit.extraCritRatePct || 0)) / 100);
  const critMult = 1 + critProb * ((s.critDmgPct + (hit.extraCritDmgPct || 0) - 100) / 100);
  const luckProb = Math.min(1.0, s.luckRatePct / 100);
  const versatilityMult = 1 + (s.versatilityPct * 0.35) / 100;

  // กรณีเป็นสกิลฮีล
  if (hit.damageType === "heal") {
    const baseHeal =
      (s.matk * (hit.skillMultiplierPct / 100) + hit.flatBonus) *
      (1 + (s.healingOutputPct + activeCombatBuffBonusPct) / 100) *
      versatilityMult;

    const critHealMult = 1 + critProb * ((s.critHealingPct - 100) / 100);
    const directHeal = baseHeal * critHealMult;
    const luckyHeal = hit.canTriggerLuckyStrike
      ? luckProb * s.matk * (s.luckyStrikeHealingPct / 100) * critHealMult * versatilityMult
      : 0;

    return {
      expectedTotalDamage: 0,
      expectedDirectDamage: 0,
      expectedLuckyStrikeDamage: 0,
      expectedHeal: directHeal + luckyHeal,
    };
  }

  // กรณีเป็นสกิลทำดาเมจ (Physical / Magical)
  const mainAtk = hit.damageType === "physical" ? s.atk : s.matk;
  const refinedAtk = hit.damageType === "physical" ? s.refinedAtk : s.refinedMatk;

  // Elemental Attack (นับรวมในส่วนเดียวกับ精錬攻撃力 ทะลุเกราะมอนสเตอร์ ตาม STATUS_CALCULATION.md ข้อ 3 & 6)
  const elemAtkKey = hit.element !== "none" ? (`${hit.element}Atk` as keyof typeof s) : null;
  const elemBonusKey = hit.element !== "none" ? (`${hit.element}BonusPct` as keyof typeof s) : null;
  const totalElemAtk = s.allElementAtk + (elemAtkKey ? Number(s[elemAtkKey] || 0) : 0);
  const totalElemBonusPct = s.allElementBonusPct + (elemBonusKey ? Number(s[elemBonusKey] || 0) : 0);

  // สมการแกนหลัก: {(攻撃力 × 防御による減衰) + 精錬攻撃力 + 属性攻撃力} × スキル倍率 + flatBonus
  const mitigatedAtkPool = mainAtk * (1 - enemyDefMitigation) + refinedAtk + totalElemAtk;
  const rawSkillDmg = mitigatedAtkPool * (hit.skillMultiplierPct / 100) + hit.flatBonus;

  // ตัวคูณ Damage Boost + Elemental Bonus + Elite Bonus + Active Buff
  const typeBoostPct = hit.damageType === "physical" ? s.phyBoostPct : s.magBoostPct;
  const additiveDmgBonusMult =
    1 +
    (typeBoostPct +
      s.eliteBossDmgBonusPct +
      (hit.extraDmgBonusPct || 0) +
      activeCombatBuffBonusPct +
      s.luckRatePct) / // 幸運増強 = 幸運%
      100;

  const elemBonusMult = 1 + totalElemBonusPct / 100;

  const expectedDirectDamage =
    rawSkillDmg * additiveDmgBonusMult * elemBonusMult * versatilityMult * critMult;

  // ดาเมจส่วนของ Lucky Strike (ทะลุเกราะมอนสเตอร์ 100% ตาม STATUS_CALCULATION.md ข้อ 2)
  const expectedLuckyStrikeDamage = hit.canTriggerLuckyStrike
    ? luckProb *
      (mainAtk + refinedAtk) *
      (s.luckyStrikeDmgMultPct / 100) *
      critMult *
      additiveDmgBonusMult *
      elemBonusMult *
      versatilityMult
    : 0;

  return {
    expectedTotalDamage: expectedDirectDamage + expectedLuckyStrikeDamage,
    expectedDirectDamage,
    expectedLuckyStrikeDamage,
    expectedHeal: 0,
  };
}