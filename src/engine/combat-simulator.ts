// ไฟล์: src/engine/combat-simulator.ts
import {
  ActionBreakdownRow,
  ActionSourceCategory,
  FiveMinuteSimulationResult,
  UserBuildConfiguration,
} from "../data/schemas";
import { calculateSkillHitExpectedValue } from "./damage-calculator";
import { CLASS_ID_TO_PROFESSION_ID, GameDB, getEnglishText } from "./game-db-loader";
import { calculateCharacterStats } from "./stat-aggregator";

interface SimActionActor {
  actionId: string;
  actionName: string;
  sourceCategory: ActionSourceCategory;
  damageType: "physical" | "magical" | "heal";
  baseCooldownMs: number;
  castAndAnimMs: number;
  damageMultiplierPct: number;
  healMultiplierPct: number;
  buffValuePct: number;
  buffDurationMs: number;
  priority: number;
}

export function runFiveMinuteCombatSimulation(
  build: UserBuildConfiguration
): FiveMinuteSimulationResult {
  const DURATION_SECONDS = 300;
  const DURATION_MS = 300_000;
  const TICK_MS = 50;

  const combatStatus = calculateCharacterStats(build, "combat");
  const profId = CLASS_ID_TO_PROFESSION_ID[build.classId];
  const classEntry = GameDB.classes[String(profId)];
  const isMagicClass = ["spellcaster", "verdant_oracle", "beat_performer"].includes(build.classId);
  const dmgType = isMagicClass ? "magical" : "physical";

  const actors: SimActionActor[] = [];

  // 1. ดึง Basic Attack & Special Attack ประจำคลาส
  const basicSkillId = classEntry?.normalAttackSkill?.[0] || 1701;
  actors.push({
    actionId: String(basicSkillId),
    actionName: getEnglishText("skills", basicSkillId).name,
    sourceCategory: "basic",
    damageType: dmgType,
    baseCooldownMs: 0,
    castAndAnimMs: 650,
    damageMultiplierPct: 145,
    healMultiplierPct: 0,
    buffValuePct: 0,
    buffDurationMs: 0,
    priority: 10,
  });

  const specialSkillId = classEntry?.specialSkill?.[0];
  if (specialSkillId) {
    actors.push({
      actionId: String(specialSkillId),
      actionName: getEnglishText("skills", specialSkillId).name,
      sourceCategory: "class_special",
      damageType: dmgType,
      baseCooldownMs: 4500,
      castAndAnimMs: 900,
      damageMultiplierPct: 380,
      healMultiplierPct: build.classId === "verdant_oracle" ? 220 : 0,
      buffValuePct: 5,
      buffDurationMs: 6000,
      priority: 75,
    });
  }

  // 2. ดึง Active Skills ที่ผู้เล่นเลือกใส่ใน Slot (พร้อมคำนวณตัวคูณตาม Skill Level & Tier)
  for (const eqSkill of build.equippedSkills || []) {
    const sInfo = getEnglishText("skills", eqSkill.skillId);
    const lvScale = 1 + (eqSkill.skillLevel - 1) * 0.045 + eqSkill.skillTier * 0.08;
    const isHealerSkill =
      build.classId === "verdant_oracle" ||
      (build.classId === "beat_performer" && sInfo.description.toLowerCase().includes("heal"));

    actors.push({
      actionId: String(eqSkill.skillId),
      actionName: sInfo.name,
      sourceCategory: "active",
      damageType: isHealerSkill ? "heal" : dmgType,
      baseCooldownMs: 12000,
      castAndAnimMs: 850,
      damageMultiplierPct: isHealerSkill ? 0 : Math.round(420 * lvScale),
      healMultiplierPct: isHealerSkill ? Math.round(360 * lvScale) : 0,
      buffValuePct: sInfo.description.toLowerCase().includes("increase") ? 10 : 0,
      buffDurationMs: 10000,
      priority: 80,
    });
  }

  // 3. ตรวจสอบ Toggle: Ultimate Skill
  if (build.simulationToggles.useUltimate && classEntry?.ultimateSkill?.[0]) {
    const ultId = classEntry.ultimateSkill[0];
    actors.push({
      actionId: String(ultId),
      actionName: `[Ultimate] ${getEnglishText("skills", ultId).name}`,
      sourceCategory: "ultimate",
      damageType: dmgType,
      baseCooldownMs: 45000,
      castAndAnimMs: 1600,
      damageMultiplierPct: 1150,
      healMultiplierPct: build.classId === "verdant_oracle" || build.classId === "beat_performer" ? 650 : 0,
      buffValuePct: 20,
      buffDurationMs: 12000,
      priority: 95,
    });
  }

  // 4. ตรวจสอบ Toggle: Imagine 1 & Imagine 2
  const imagineToggles = [
    build.simulationToggles.useImagine1,
    build.simulationToggles.useImagine2,
  ];
  build.battleImagines.forEach((imgSlot, idx) => {
    if (!imagineToggles[idx] || !imgSlot?.imagineId) return;
    const imgInfo = getEnglishText("battleImagines", imgSlot.imagineId);
    const tierMult = 1 + Number(imgSlot.tier || 0) * 0.12;
    actors.push({
      actionId: `imagine_${imgSlot.imagineId}`,
      actionName: `[Imagine ${idx + 1}] ${imgInfo.name} (T${imgSlot.tier})`,
      sourceCategory: "imagine",
      damageType: dmgType,
      baseCooldownMs: 60000,
      castAndAnimMs: 800,
      damageMultiplierPct: Math.round(780 * tierMult),
      healMultiplierPct: 0,
      buffValuePct: Number((12 * tierMult).toFixed(1)),
      buffDurationMs: 15000,
      priority: 98,
    });
  });

  // 5. ดึงสกิลเสริมที่ทำงานจากโหนด Talents (Talent Procs)
  for (const [nodeId, rank] of Object.entries(build.allocatedTalents || {})) {
    if (rank <= 0) continue;
    const tText = getEnglishText("talents", nodeId);
    if (
      tText.description.toLowerCase().includes("trigger") ||
      tText.description.toLowerCase().includes("summon") ||
      tText.description.toLowerCase().includes("deals")
    ) {
      actors.push({
        actionId: `talent_proc_${nodeId}`,
        actionName: `[Talent] ${tText.name}`,
        sourceCategory: "talent_proc",
        damageType: dmgType,
        baseCooldownMs: 3500,
        castAndAnimMs: 0, // Instant Proc ไม่กินเวลาออกท่า
        damageMultiplierPct: 195 * rank,
        healMultiplierPct: 0,
        buffValuePct: 4,
        buffDurationMs: 5000,
        priority: 100,
      });
    }
  }

  // เรียงลำดับตาม Priority จากสูงไปต่ำ
  actors.sort((a, b) => b.priority - a.priority);

  // สถานะการจำลองตลอด 300,000 ms
  const cooldowns: Record<string, number> = {};
  const activeBuffExpires: Record<string, { valuePct: number; expiresAtMs: number }> = {};
  const statsLog: Record<
    string,
    {
      actor: SimActionActor;
      count: number;
      totalDamage: number;
      totalHeal: number;
      buffIntegralPctMs: number;
    }
  > = {};

  for (const act of actors) {
    cooldowns[act.actionId] = 0;
    statsLog[act.actionId] = {
      actor: act,
      count: 0,
      totalDamage: 0,
      totalHeal: 0,
      buffIntegralPctMs: 0,
    };
  }

  let animationLockUntilMs = 0;
  let totalBuffIntegralPctMs = 0;
  const spdMultiplier = 1 + combatStatus.rawMap.attackSpdPct / 100;
  const hasteCdDivisor = 1 + combatStatus.rawMap.hastePct / 100;

  // ลูปจำลองการต่อสู้ 6,000 Ticks (300 วินาที)
  for (let nowMs = 0; nowMs < DURATION_MS; nowMs += TICK_MS) {
    // คำนวณบัฟที่กำลังแสดงผลอยู่ใน Tick นี้
    let currentTickBuffPct = 0;
    for (const [aid, bState] of Object.entries(activeBuffExpires)) {
      if (bState.expiresAtMs > nowMs) {
        currentTickBuffPct += bState.valuePct;
        statsLog[aid].buffIntegralPctMs += bState.valuePct * TICK_MS;
        totalBuffIntegralPctMs += bState.valuePct * TICK_MS;
      }
    }

    // 1. สั่งทำงาน Instant Talent Procs ที่ถึงเวลา Cooldown
    for (const act of actors) {
      if (act.castAndAnimMs === 0 && cooldowns[act.actionId] <= nowMs) {
        const hitRes = calculateSkillHitExpectedValue(
          combatStatus,
          {
            skillId: act.actionId,
            skillName: act.actionName,
            damageType: act.damageType,
            element: "none",
            skillMultiplierPct: act.damageMultiplierPct,
            flatBonus: 0,
            canTriggerLuckyStrike: true,
          },
          currentTickBuffPct
        );
        statsLog[act.actionId].count += 1;
        statsLog[act.actionId].totalDamage += hitRes.expectedTotalDamage;
        statsLog[act.actionId].totalHeal += hitRes.expectedHeal;
        cooldowns[act.actionId] = nowMs + act.baseCooldownMs / hasteCdDivisor;

        if (act.buffValuePct > 0) {
          activeBuffExpires[act.actionId] = {
            valuePct: act.buffValuePct,
            expiresAtMs: nowMs + act.buffDurationMs,
          };
        }
      }
    }

    // 2. หากตัวละครว่างจากการออกท่า ให้เลือกสกิลตามลำดับ Priority
    if (nowMs >= animationLockUntilMs) {
      const chosen = actors.find((a) => a.castAndAnimMs > 0 && cooldowns[a.actionId] <= nowMs);
      if (chosen) {
        const hitRes = calculateSkillHitExpectedValue(
          combatStatus,
          {
            skillId: chosen.actionId,
            skillName: chosen.actionName,
            damageType:
              chosen.healMultiplierPct > 0 && chosen.damageMultiplierPct === 0
                ? "heal"
                : chosen.damageType,
            element: "none",
            skillMultiplierPct:
              chosen.damageMultiplierPct > 0 ? chosen.damageMultiplierPct : chosen.healMultiplierPct,
            flatBonus: 0,
            canTriggerLuckyStrike: true,
          },
          currentTickBuffPct
        );

        statsLog[chosen.actionId].count += 1;
        statsLog[chosen.actionId].totalDamage += hitRes.expectedTotalDamage;
        statsLog[chosen.actionId].totalHeal += hitRes.expectedHeal;

        const effectiveCastMs = Math.max(200, chosen.castAndAnimMs / spdMultiplier);
        animationLockUntilMs = nowMs + effectiveCastMs;

        const effectiveCdMs =
          chosen.sourceCategory === "ultimate" || chosen.sourceCategory === "imagine"
            ? chosen.baseCooldownMs
            : chosen.baseCooldownMs / hasteCdDivisor;

        cooldowns[chosen.actionId] = nowMs + effectiveCdMs;

        if (chosen.buffValuePct > 0) {
          activeBuffExpires[chosen.actionId] = {
            valuePct: chosen.buffValuePct,
            expiresAtMs: nowMs + chosen.buffDurationMs,
          };
        }
      }
    }
  }

  // สรุปผลรวมและคำนวณ % Contribution ของแต่ละสกิล
  let grandTotalDamage = 0;
  let grandTotalHeal = 0;

  for (const row of Object.values(statsLog)) {
    grandTotalDamage += row.totalDamage;
    grandTotalHeal += row.totalHeal;
  }

  const actionsBreakdown: ActionBreakdownRow[] = Object.values(statsLog)
    .filter((r) => r.count > 0)
    .map((r) => {
      const totalDmg = Math.round(r.totalDamage);
      const totalHl = Math.round(r.totalHeal);
      const avgBuff = r.buffIntegralPctMs / DURATION_MS;

      return {
        actionId: r.actor.actionId,
        actionName: r.actor.actionName,
        sourceCategory: r.actor.sourceCategory,
        triggerOrCastCount: r.count,
        totalDamage: totalDmg,
        dps: Math.round(totalDmg / DURATION_SECONDS),
        damageSharePct:
          grandTotalDamage > 0 ? Number(((r.totalDamage / grandTotalDamage) * 100).toFixed(2)) : 0,
        totalHeal: totalHl,
        hps: Math.round(totalHl / DURATION_SECONDS),
        healSharePct:
          grandTotalHeal > 0 ? Number(((r.totalHeal / grandTotalHeal) * 100).toFixed(2)) : 0,
        avgBuffPct: Number(avgBuff.toFixed(2)),
        buffContributionPct:
          totalBuffIntegralPctMs > 0
            ? Number(((r.buffIntegralPctMs / totalBuffIntegralPctMs) * 100).toFixed(2))
            : 0,
      };
    })
    .sort((a, b) => b.totalDamage - a.totalDamage || b.totalHeal - a.totalHeal);

  return {
    durationSeconds: 300,
    totalDamage: Math.round(grandTotalDamage),
    dps: Math.round(grandTotalDamage / DURATION_SECONDS),
    totalHeal: Math.round(grandTotalHeal),
    hps: Math.round(grandTotalHeal / DURATION_SECONDS),
    averageBuffPct: Number((totalBuffIntegralPctMs / DURATION_MS).toFixed(2)),
    actionsBreakdown,
  };
}