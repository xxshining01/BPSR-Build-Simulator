// ไฟล์: src/app/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import TalentTreeDiagram from "../components/TalentTreeDiagram";
import {
  AttributeKey,
  ClassId,
  ClassIdEnum,
  EquipmentSlot,
  EquipmentSlotEnum,
  ImagineTierKey,
  ModuleCategory,
  ModuleEffectId,
  SpecId,
} from "../data/schemas";
import { compareTwoBuilds } from "../engine/build-comparator";
import { runFiveMinuteCombatSimulation } from "../engine/combat-simulator";
import {
  CLASS_ID_TO_PROFESSION_ID,
  GameDB,
  getEnglishText,
  resolveBattleImagineDetails,
  resolveClassSkillConfiguration,
  SLOT_TO_PART_ID,
} from "../engine/game-db-loader";
import { calculateCharacterStats } from "../engine/stat-aggregator";
import { useBuildStore } from "../store/useBuildStore";

const CLASS_LABELS: Record<ClassId, string> = {
  blade_warden: "Stormblade",
  spellcaster: "Frost Mage",
  twin_striker: "Twin Striker",
  wind_knight: "Wind Knight",
  verdant_oracle: "Verdant Oracle",
  heavy_guardian: "Heavy Guardian",
  marksman: "Marksman",
  shield_knight: "Shield Knight",
  beat_performer: "Beat Performer",
};

const SPEC_LABELS: Record<SpecId, string> = {
  iaido: "Iaido Slash Spec",
  twinflow: "Moonstrike Spec",
  icicle: "Icicle Spec",
  frostbeam: "Frostbeam Spec",
  executioner: "Formless Spec",
  berserker: "Crimson Spec",
  gale: "Vanguard Spec",
  tempest: "Skyward Spec",
  thornvine: "Smite Spec",
  lifebloom: "Lifebind Spec",
  bastion: "Earthfort Spec",
  crag: "Block Spec",
  wildpack: "Wildpack Spec",
  falconry: "Falconry Spec",
  judgement: "Recovery Spec",
  aegis: "Shield Spec",
  resonance: "Dissonance Spec",
  harmony: "Concerto Spec",
};

const SLOT_LABELS: Record<EquipmentSlot, string> = {
  weapon: "1. อาวุธ (Weapon)",
  head: "2. หมวก (Helmet)",
  chest: "3. ชุดเกราะ (Armor)",
  gloves: "4. ถุงมือ (Gloves)",
  boots: "5. รองเท้า (Boots)",
  earrings: "6. ต่างหู (Earrings)",
  necklace: "7. สร้อยคอ (Necklace)",
  ring: "8. แหวน (Ring)",
  bracelet_left: "9. กำไลซ้าย (Bracelet L)",
  bracelet_right: "10. กำไลขวา (Bracelet R)",
  charm: "11. เครื่องราง (Talisman)",
};

const MODULE_EFFECT_OPTIONS: { id: ModuleEffectId; label: string; specialOnly: boolean }[] = [
  { id: "strength_boost", label: "Strength Boost (Assault)", specialOnly: false },
  { id: "agility_boost", label: "Agility Boost (Assault)", specialOnly: false },
  { id: "intellect_boost", label: "Intellect Boost (Assault)", specialOnly: false },
  { id: "special_attack", label: "Special Attack (Assault)", specialOnly: false },
  { id: "elite_strike", label: "Elite Strike (Assault)", specialOnly: false },
  { id: "healing_boost", label: "Healing Boost (Support)", specialOnly: false },
  { id: "healing_enhance", label: "Healing Enhance (Support)", specialOnly: false },
  { id: "resistance", label: "Resistance (Guardian)", specialOnly: false },
  { id: "armor", label: "Armor (Guardian)", specialOnly: false },
  { id: "cast_focus", label: "Cast Focus (All)", specialOnly: false },
  { id: "attack_spd", label: "Attack SPD (All)", specialOnly: false },
  { id: "crit_focus", label: "Crit Focus (All)", specialOnly: false },
  { id: "luck_focus", label: "Luck Focus (All)", specialOnly: false },
  { id: "dmg_stack", label: "[Special 1st] DMG Stack", specialOnly: true },
  { id: "agile", label: "[Special 1st] Agile", specialOnly: true },
  { id: "life_condense", label: "[Special 1st] Life Condense", specialOnly: true },
  { id: "first_aid", label: "[Special 1st] First Aid", specialOnly: true },
  { id: "team_luck_crit", label: "[Special 1st] Team Luck & Crit", specialOnly: true },
  { id: "final_protection", label: "[Special 1st] Final Protection", specialOnly: true },
  { id: "life_wave", label: "[Special 1st] Life Wave", specialOnly: true },
  { id: "life_steal", label: "[Special 1st] Life Steal", specialOnly: true },
];

const SEVEN_SKILL_SLOTS_META = [
  { slotIndex: 1, keybind: "คลิกซ้าย (LMB)", roleLabel: "Basic Attack (ล็อกประจำคลาส/สาย)", isFixed: true },
  { slotIndex: 2, keybind: "กดเลข 1", roleLabel: "Special Skill (ล็อกประจำคลาส/สาย)", isFixed: true },
  { slotIndex: 3, keybind: "กดปุ่ม R", roleLabel: "Ultimate Skill (ท่าไม้ตาย)", isFixed: true },
  { slotIndex: 4, keybind: "กดเลข 2", roleLabel: "Expertise Skill Slot #1 (เลือกใส่ได้)", isFixed: false },
  { slotIndex: 5, keybind: "กดเลข 3", roleLabel: "Expertise Skill Slot #2 (เลือกใส่ได้)", isFixed: false },
  { slotIndex: 6, keybind: "กดเลข 4", roleLabel: "Expertise Skill Slot #3 (เลือกใส่ได้)", isFixed: false },
  { slotIndex: 7, keybind: "กดเลข 5", roleLabel: "Expertise Skill Slot #4 (เลือกใส่ได้)", isFixed: false },
];

export default function BPSRSimulatorPage() {
  const {
    activeBuild,
    savedBuilds,
    compareTargetBuildId,
    setBuildName,
    setClassOnly,
    setBatchTalents,
    setEquippedSkill,
    setBattleImagine,
    updateEquipmentSlot,
    updateModuleSlot,
    updatePsychoscope,
    updateSimToggles,
    saveCurrentBuild,
    loadSavedBuild,
    setCompareTargetBuildId,
    resetActiveBuild,
  } = useBuildStore();

  const [mainTab, setMainTab] = useState<
    "class_talent" | "equipment" | "modules" | "psychoscope" | "simulator" | "compare"
  >("class_talent");
  const [statWindowTab, setStatWindowTab] = useState<"summary" | "full">("summary");

  const charStatus = useMemo(
    () => calculateCharacterStats(activeBuild, "idle"),
    [activeBuild]
  );
  const simResult = useMemo(
    () => runFiveMinuteCombatSimulation(activeBuild),
    [activeBuild]
  );

  const profId = CLASS_ID_TO_PROFESSION_ID[activeBuild.classId];

  // ข้อมูลสกิลทั้ง 7 ช่อง (3 Fixed + 4 Selectable)
  const resolvedClassSkills = useMemo(
    () => resolveClassSkillConfiguration(activeBuild.classId, activeBuild.allocatedTalents),
    [activeBuild.classId, activeBuild.allocatedTalents]
  );

  // รายการ Imagines ทั้ง 73 ตัว
  const allImaginesList = useMemo(() => {
    return Object.keys(GameDB.imagines).map((id) => ({
      id,
      ...getEnglishText("battleImagines", id),
    }));
  }, []);

  const comparableBuilds = useMemo(
    () =>
      savedBuilds.filter(
        (b) => b.classId === activeBuild.classId && b.specId === activeBuild.specId
      ),
    [savedBuilds, activeBuild.classId, activeBuild.specId]
  );

  const comparisonReport = useMemo(() => {
    if (!compareTargetBuildId) return null;
    const target = savedBuilds.find((b) => b.buildId === compareTargetBuildId);
    if (!target) return null;
    return compareTwoBuilds(activeBuild, target);
  }, [activeBuild, savedBuilds, compareTargetBuildId]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* ================= TOP HEADER & BUILD BAR ================= */}
      <header className="border-b border-slate-800 bg-slate-900/90 sticky top-0 z-30 px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-lg">
            SR
          </div>
          <div>
            <h1 className="font-bold text-base tracking-tight text-white">
              Blue Protocol: Star Resonance — Build & Combat Simulator
            </h1>
            <p className="text-xs text-slate-400">
              Lv.60 Exact ZTable Engine • 5-Minute Auto-Rotation Simulator • Spec-Locked Comparator
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <input
            type="text"
            value={activeBuild.buildName}
            onChange={(e) => setBuildName(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-indigo-500"
            placeholder="ชื่อบิลด์..."
          />
          <button
            onClick={saveCurrentBuild}
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3.5 py-2 rounded transition"
          >
            💾 เซฟบิลด์นี้ ({savedBuilds.length})
          </button>
          <button
            onClick={resetActiveBuild}
            className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-3 py-2 rounded border border-slate-700"
          >
            รีเซ็ต
          </button>
          {savedBuilds.length > 0 && (
            <select
              onChange={(e) => e.target.value && loadSavedBuild(e.target.value)}
              value=""
              className="bg-slate-800 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-slate-200"
            >
              <option value="">📂 โหลดบิลด์ที่เซฟไว้...</option>
              {savedBuilds.map((b) => (
                <option key={b.buildId} value={b.buildId}>
                  [{CLASS_LABELS[b.classId]} - {SPEC_LABELS[b.specId]}] {b.buildName}
                </option>
              ))}
            </select>
          )}
        </div>
      </header>

      {/* ================= MAIN WORKSPACE ================= */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
        {/* LEFT/CENTER COLUMN (8 COLS) */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
            {[
              { id: "class_talent", label: "1. อาชีพ / Talents / Skills (7 ช่อง) / Imagines" },
              { id: "equipment", label: "2. อุปกรณ์ 11 ชิ้น / Refine / Sigils" },
              { id: "modules", label: "3. โมดูล (5 Slots & Link Lv.1-6)" },
              { id: "psychoscope", label: "4. Deep Slumber Psychoscope & Factor G10" },
              { id: "simulator", label: "⚡ 5-Min Skill Simulator (DPS/HPS)" },
              { id: "compare", label: `⚖️ เปรียบเทียบบิลด์ (${comparableBuilds.length})` },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setMainTab(t.id as any)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition ${
                  mainTab === t.id
                    ? "bg-indigo-600 text-white shadow"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ---------------- TAB 1: CLASS, TALENT TREE MAP, 7 SKILLS & IMAGINES ---------------- */}
          {mainTab === "class_talent" && (
            <div className="space-y-6">
              {/* 1. เลือกเฉพาะอาชีพหลัก (9 Classes) — สายการเล่นจะเปลี่ยนตามโหนดที่อัปใน Talent Tree Map */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                      1. เลือกอาชีพ (Class Selection)
                    </h2>
                    <p className="text-xs text-slate-400">
                      เลือกเฉพาะอาชีพตั้งต้น ส่วนสายการเล่น (Spec) จะถูกกำหนดโดยอัตโนมัติจากการอัปแต้มที่ 31 บนผัง Talent Tree Map ด้านล่าง
                    </p>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 font-bold">
                    สายการเล่นปัจจุบัน (จากผัง Talent): {SPEC_LABELS[activeBuild.specId]}
                  </div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 pt-1">
                  {ClassIdEnum.options.map((cid) => {
                    const isSelected = activeBuild.classId === cid;
                    return (
                      <button
                        key={cid}
                        onClick={() => setClassOnly(cid)}
                        className={`p-2.5 rounded-xl border text-center transition flex flex-col items-center justify-center gap-1 ${
                          isSelected
                            ? "bg-indigo-600 border-indigo-400 text-white shadow-lg"
                            : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-600"
                        }`}
                      >
                        <span className="text-xs font-extrabold leading-tight">
                          {CLASS_LABELS[cid]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. ผัง Talent Tree Map Diagram (2 Tabs: Basic 30 โหนด และ สายการเล่น 70 โหนด) */}
              <TalentTreeDiagram
                classId={activeBuild.classId}
                activeSpecId={activeBuild.specId}
                allocatedTalents={activeBuild.allocatedTalents}
                onUpdateBatchTalents={setBatchTalents}
              />

              {/* 3. การเลือกจัดสกิลทั้ง 7 ช่อง (3 ช่องล็อกปุ่ม + 4 ช่องเลือกใส่เอง พร้อมปรับ Lv.1-30, Tier 0-6 และคำอธิบายสกิล) */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
                <div>
                  <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                    3. จัดสกิลประจำตัวทั้ง 7 ช่อง (3 ช่องล็อกปุ่มตายตัว + 4 ช่องเลือกใส่ได้)
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    สกิลทั้ง 7 ช่อง (รวมโจมตีปกติคลิกซ้าย, สกิลเลข 1, และท่าไม้ตาย R) สามารถปรับระดับเลเวล (Lv.1-30) และระดับ Tier (G0-G6) ได้ทั้งหมด
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3.5">
                  {SEVEN_SKILL_SLOTS_META.map((meta) => {
                    const savedSlot = activeBuild.equippedSkills.find(
                      (s) => s.slotIndex === meta.slotIndex
                    );

                    // ถ้าเป็น 3 ช่องแรกที่ล็อกปุ่ม ให้ดึง skillId ที่อัปเดตตามโหนด Talent แล้วเสมอ
                    const effectiveSkillId =
                      meta.slotIndex === 1
                        ? resolvedClassSkills.basicAttackId
                        : meta.slotIndex === 2
                        ? resolvedClassSkills.specialSkillId
                        : meta.slotIndex === 3
                        ? resolvedClassSkills.ultimateSkillId
                        : savedSlot?.skillId || "";

                    const currentLevel = savedSlot?.skillLevel ?? 30;
                    const currentTier = savedSlot?.skillTier ?? 6;
                    const skillText = effectiveSkillId
                      ? getEnglishText("skills", effectiveSkillId)
                      : { name: "ยังไม่ได้เลือกสกิล", description: "" };

                    return (
                      <div
                        key={meta.slotIndex}
                        className={`rounded-xl border p-4 space-y-2.5 ${
                          meta.isFixed
                            ? "bg-slate-950/90 border-indigo-500/40"
                            : "bg-slate-950/60 border-slate-800"
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`px-2.5 py-1 rounded-md text-xs font-extrabold ${
                                meta.isFixed
                                  ? "bg-indigo-600 text-white"
                                  : "bg-slate-800 text-amber-300 border border-slate-700"
                              }`}
                            >
                              {meta.keybind}
                            </span>
                            <span className="text-xs font-semibold text-slate-400">
                              {meta.roleLabel}
                            </span>
                          </div>

                          {/* ปรับ Skill Level (1-30) และ Skill Tier (0-6) ได้ทุกช่องรวมถึง Basic Attack */}
                          <div className="flex flex-wrap items-center gap-4">
                            <label className="flex items-center gap-1.5 text-xs text-slate-300">
                              <span>Lv. (1-30):</span>
                              <input
                                type="number"
                                min={1}
                                max={30}
                                value={currentLevel}
                                onChange={(e) =>
                                  setEquippedSkill(
                                    meta.slotIndex,
                                    effectiveSkillId,
                                    Math.max(1, Math.min(30, Number(e.target.value))),
                                    currentTier
                                  )
                                }
                                className="w-14 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs font-bold text-indigo-300"
                              />
                            </label>
                            <label className="flex items-center gap-1.5 text-xs text-slate-300">
                              <span>Tier (0-6):</span>
                              <select
                                value={currentTier}
                                onChange={(e) =>
                                  setEquippedSkill(
                                    meta.slotIndex,
                                    effectiveSkillId,
                                    currentLevel,
                                    Number(e.target.value)
                                  )
                                }
                                className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs font-bold text-amber-300"
                              >
                                {[0, 1, 2, 3, 4, 5, 6].map((t) => (
                                  <option key={t} value={t}>
                                    Tier {t}
                                  </option>
                                ))}
                              </select>
                            </label>
                          </div>
                        </div>

                        {/* ชื่อสกิล หรือ Dropdown เลือกสกิลสำหรับช่องเลข 2, 3, 4, 5 */}
                        {meta.isFixed ? (
                          <div className="text-sm font-bold text-white">
                            [{effectiveSkillId}] {skillText.name}
                          </div>
                        ) : (
                          <select
                            value={effectiveSkillId}
                            onChange={(e) =>
                              setEquippedSkill(
                                meta.slotIndex,
                                e.target.value,
                                currentLevel,
                                currentTier
                              )
                            }
                            className="w-full md:w-2/3 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-bold text-white"
                          >
                            <option value="">-- เลือกสกิลใส่ช่อง {meta.keybind} --</option>
                            {resolvedClassSkills.selectablePoolIds.map((sid) => {
                              const sInfo = getEnglishText("skills", sid);
                              return (
                                <option key={sid} value={sid}>
                                  [{sid}] {sInfo.name}
                                </option>
                              );
                            })}
                          </select>
                        )}

                        {/* Text อธิบายสกิล */}
                        {skillText.description && (
                          <div className="bg-slate-900/90 border border-slate-800/80 rounded-lg p-3 text-xs text-slate-300 leading-relaxed">
                            <span className="text-indigo-400 font-semibold">คำอธิบายสกิล: </span>
                            {skillText.description}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4. Battle Imagines 2 ช่อง (แสดงทั้ง Active Skill + Passive ตอนสวมใส่เฉยๆ + ตัวเลขที่เปลี่ยนตาม Tier 0-5) */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
                <div>
                  <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                    4. เลือก Battle Imagines 2 ตัว (แสดงทั้ง Active กดใช้ และ Passive สวมใส่เฉยๆ ตามระดับ Tier 0 - 5)
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    เมื่อเปลี่ยนระดับ Tier (T0 - T5) ค่าสเตตัสติดตัวและเอฟเฟกต์ Passive จะอัปเดตตัวเลขตาม Tier ทันที
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {([0, 1] as const).map((idx) => {
                    const slot = activeBuild.battleImagines[idx];
                    const details = slot.imagineId
                      ? resolveBattleImagineDetails(slot.imagineId, Number(slot.tier))
                      : null;

                    return (
                      <div
                        key={idx}
                        className="bg-slate-950/90 border border-slate-800 rounded-xl p-4 space-y-3"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-extrabold text-amber-400 uppercase">
                            Battle Imagine Slot #{idx + 1}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-400">ระดับ Tier:</span>
                            <select
                              value={slot.tier}
                              onChange={(e) =>
                                setBattleImagine(
                                  idx,
                                  slot.imagineId,
                                  e.target.value as ImagineTierKey
                                )
                              }
                              className="bg-amber-500/20 border border-amber-500/50 rounded-lg px-2.5 py-1 text-xs text-amber-300 font-extrabold"
                            >
                              {["0", "1", "2", "3", "4", "5"].map((t) => (
                                <option key={t} value={t} className="bg-slate-900 text-white">
                                  Tier {t}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <select
                          value={slot.imagineId || ""}
                          onChange={(e) =>
                            setBattleImagine(idx, e.target.value || null, slot.tier)
                          }
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs font-bold text-white"
                        >
                          <option value="">-- ไม่สวมใส่ Imagine --</option>
                          {allImaginesList.map((im) => (
                            <option key={im.id} value={im.id}>
                              [{im.id}] {im.name}
                            </option>
                          ))}
                        </select>

                        {details && (
                          <div className="space-y-3 pt-1 text-xs">
                            <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-1.5">
                              <span>ความแรร์: <strong className="text-purple-300">{details.rarityLabel}</strong></span>
                              <span>Season {details.seasonId}</span>
                            </div>

                            {/* ส่วนที่ 1: Passive ที่ได้จากการสวมใส่เฉยๆ (โดยยังไม่กดใช้) ตาม Tier ที่เลือก */}
                            <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-3 space-y-2">
                              <div className="text-emerald-300 font-bold flex items-center justify-between">
                                <span>✦ Passive Effect (สวมใส่เฉยๆ ไม่ต้องกดใช้)</span>
                                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[10px]">
                                  แสดงค่าที่ Tier {slot.tier}
                                </span>
                              </div>

                              {/* สเตตัสติดตัว (Passive Stats) */}
                              {details.passiveStats.map((ps) => (
                                <div key={ps.attrId} className="space-y-1">
                                  <div className="flex items-center justify-between text-white font-semibold">
                                    <span>• {ps.statName}:</span>
                                    <span className="text-emerald-300 font-bold text-sm">
                                      {ps.formattedAtSelectedTier}
                                    </span>
                                  </div>
                                  <div className="text-[10px] text-slate-400 font-mono bg-slate-950/80 px-2 py-1 rounded">
                                    เทียบ T0→T5:{" "}
                                    {ps.valuesByTier
                                      .map(
                                        (v, ti) =>
                                          `T${ti}: +${v}${ps.isPercent ? "%" : ""}`
                                      )
                                      .join(" | ")}
                                  </div>
                                </div>
                              ))}

                              {/* เอฟเฟกต์บัฟติดตัว (Passive Buffs) */}
                              {details.passiveBuffs.map((pb) => (
                                <div key={pb.buffId} className="space-y-1">
                                  <p className="text-slate-200 leading-relaxed">
                                    • {pb.descriptionAtSelectedTier}
                                  </p>
                                  <div className="text-[10px] text-slate-400 font-mono bg-slate-950/80 px-2 py-1 rounded">
                                    ค่าตามระดับ Tier (T0→T5):{" "}
                                    {pb.paramsByTier
                                      .map((p, ti) => `T${ti}: [${Array.isArray(p) ? p.join(", ") : p}]`)
                                      .join(" | ")}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* ส่วนที่ 2: Active Skill เมื่อกดเรียกใช้งาน */}
                            <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 space-y-1">
                              <div className="text-amber-300 font-bold">
                                ⚡ Active Skill (เมื่อกดเรียกใช้งาน):
                              </div>
                              <p className="text-slate-300 leading-relaxed text-[11px]">
                                {details.activeSkillDescription}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ---------------- TAB 2: 11 EQUIPMENT SLOTS, REFINE & SIGILS ---------------- */}
          {mainTab === "equipment" && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
              <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                อุปกรณ์สวมใส่ทั้ง 11 ชิ้น (เลือกไอเทม, Perfection 0-100, Refine 0-30, สเตตัสรอง, ออปชันม่วง และ Sigil Lv.1-3)
              </h2>
              <div className="space-y-4">
                {EquipmentSlotEnum.options.map((slot) => {
                  const cfg = activeBuild.equipments[slot];
                  const partId = SLOT_TO_PART_ID[slot];
                  const partItemsObj = GameDB.equipment[partId] || {};

                  const itemCandidates = Object.values(partItemsObj)
                    .filter((it: any) => {
                      if (it.equipGs < 220) return false;
                      if (slot === "weapon" && it.weaponProfessionId && it.weaponProfessionId !== profId) {
                        return false;
                      }
                      return true;
                    })
                    .sort((a: any, b: any) => b.equipGs - a.equipGs)
                    .slice(0, 60);

                  const selectedEqData = cfg.equipmentTemplateId
                    ? partItemsObj[cfg.equipmentTemplateId]
                    : null;

                  const enchantPoolId = selectedEqData?.enchantId || (slot === "weapon" ? "3001" : "3002");
                  const sigilCandidates = GameDB.enchants[String(enchantPoolId)] || [];

                  return (
                    <div
                      key={slot}
                      className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-indigo-300">
                          {SLOT_LABELS[slot]}
                        </span>
                        <div className="flex items-center gap-3">
                          <label className="text-xs text-slate-400 flex items-center gap-1.5">
                            Refine (0-30):
                            <input
                              type="number"
                              min={0}
                              max={30}
                              value={cfg.refineLevel}
                              onChange={(e) =>
                                updateEquipmentSlot(slot, {
                                  refineLevel: Math.max(0, Math.min(30, Number(e.target.value))),
                                })
                              }
                              className="w-16 bg-slate-800 border border-slate-700 rounded px-2 py-0.5 text-xs text-amber-300 font-bold"
                            />
                          </label>
                          <label className="text-xs text-slate-400 flex items-center gap-1.5">
                            Perfection (0-100):
                            <input
                              type="number"
                              min={0}
                              max={100}
                              value={cfg.perfection}
                              onChange={(e) =>
                                updateEquipmentSlot(slot, {
                                  perfection: Math.max(0, Math.min(100, Number(e.target.value))),
                                })
                              }
                              className="w-16 bg-slate-800 border border-slate-700 rounded px-2 py-0.5 text-xs text-emerald-300 font-bold"
                            />
                          </label>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">
                            เลือกอุปกรณ์ (GS 220 - 280)
                          </label>
                          <select
                            value={cfg.equipmentTemplateId || ""}
                            onChange={(e) =>
                              updateEquipmentSlot(slot, {
                                equipmentTemplateId: e.target.value || null,
                              })
                            }
                            className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white"
                          >
                            <option value="">-- ไม่สวมใส่ --</option>
                            {itemCandidates.map((it: any) => {
                              const name = getEnglishText("items", it.id).name;
                              return (
                                <option key={it.id} value={String(it.id)}>
                                  [GS {it.equipGs}] {name} {it.suitId ? `(Set ${it.suitId})` : ""}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">
                            สเตตัสรอง & โบนัสม่วง (Rare Attribute)
                          </label>
                          <div className="flex gap-1.5">
                            <select
                              value={cfg.selectedSubStats[0] || ""}
                              onChange={(e) =>
                                updateEquipmentSlot(slot, {
                                  selectedSubStats: e.target.value
                                    ? [e.target.value as AttributeKey]
                                    : [],
                                })
                              }
                              className="w-1/2 bg-slate-800 border border-slate-700 rounded px-2 py-1.5 text-xs text-white"
                            >
                              <option value="">Sub Stat...</option>
                              {(["crit", "haste", "luck", "mastery", "versatility", "block"] as AttributeKey[]).map(
                                (st) => (
                                  <option key={st} value={st}>
                                    {st.toUpperCase()}
                                  </option>
                                )
                              )}
                            </select>
                            <select
                              value={cfg.selectedPurpleStat || ""}
                              onChange={(e) =>
                                updateEquipmentSlot(slot, {
                                  selectedPurpleStat: (e.target.value as AttributeKey) || null,
                                })
                              }
                              className="w-1/2 bg-purple-950/50 border border-purple-700/60 rounded px-2 py-1.5 text-xs text-purple-200"
                            >
                              <option value="">ไม่มีออปชันม่วง</option>
                              {(
                                [
                                  "attackSpdPct",
                                  "castSpdPct",
                                  "eliteBossDmgBonusPct",
                                  "critDmgPct",
                                  "healingOutputPct",
                                  "shieldPct",
                                ] as AttributeKey[]
                              ).map((pst) => (
                                <option key={pst} value={pst}>
                                  [ม่วง] {pst}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">
                            Sigil / Enchant (Lv.1 Base / Lv.2 精 / Lv.3 極)
                          </label>
                          <div className="flex gap-1.5">
                            <select
                              value={cfg.sigilId || ""}
                              onChange={(e) =>
                                updateEquipmentSlot(slot, { sigilId: e.target.value || null })
                              }
                              className="flex-1 bg-slate-800 border border-slate-700 rounded px-2 py-1.5 text-xs text-white"
                            >
                              <option value="">-- ไม่ฝัง Sigil --</option>
                              {sigilCandidates.map((sg: any) => (
                                <option key={sg.id} value={String(sg.id)}>
                                  {getEnglishText("items", sg.id).name}
                                </option>
                              ))}
                            </select>
                            <select
                              value={cfg.sigilEmblemLevel}
                              onChange={(e) =>
                                updateEquipmentSlot(slot, {
                                  sigilEmblemLevel: e.target.value as "1" | "2" | "3",
                                })
                              }
                              className="w-20 bg-slate-800 border border-slate-700 rounded px-2 py-1.5 text-xs text-amber-300 font-bold"
                            >
                              <option value="1">Lv.1</option>
                              <option value="2">Lv.2</option>
                              <option value="3">Lv.3</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ---------------- TAB 3: 5 MODULES & LINK LV.1-6 ---------------- */}
          {mainTab === "modules" && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
              <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                ติดตั้งโมดูลทั้ง 5 ช่อง (เลือกได้ช่องละ 3 Effects ระดับแต้ม 1-10 เพื่อปลดล็อก Link Lv.1-6)
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {activeBuild.modules.map((mod) => (
                  <div
                    key={mod.slotIndex}
                    className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-300">
                        Module Slot #{mod.slotIndex}
                      </span>
                      <select
                        value={mod.category}
                        onChange={(e) =>
                          updateModuleSlot(
                            mod.slotIndex,
                            e.target.value as ModuleCategory,
                            mod.effects
                          )
                        }
                        className="bg-slate-800 border border-slate-700 rounded px-2.5 py-1 text-xs text-white"
                      >
                        <option value="assault">Assault (โจมตี)</option>
                        <option value="support">Support (สนับสนุน)</option>
                        <option value="guardian">Guardian (ป้องกัน)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {(["1", "2", "3"] as const).map((rowKey) => {
                        const rowItem = mod.effects.find((ef) => ef.slotRow === rowKey);
                        const allowedList = MODULE_EFFECT_OPTIONS.filter(
                          (opt) => rowKey === "1" || !opt.specialOnly
                        );
                        return (
                          <div key={rowKey} className="flex items-center gap-1.5">
                            <select
                              value={rowItem?.effectId || ""}
                              onChange={(e) => {
                                const val = e.target.value as ModuleEffectId;
                                const others = mod.effects.filter((ef) => ef.slotRow !== rowKey);
                                if (val) {
                                  others.push({
                                    slotRow: rowKey,
                                    effectId: val,
                                    points: rowItem?.points || 10,
                                  });
                                }
                                updateModuleSlot(mod.slotIndex, mod.category, others);
                              }}
                              className="flex-1 bg-slate-800 border border-slate-700 rounded px-2 py-1.5 text-xs text-white"
                            >
                              <option value="">-- แถวที่ {rowKey} --</option>
                              {allowedList.map((opt) => (
                                <option key={opt.id} value={opt.id}>
                                  {opt.label}
                                </option>
                              ))}
                            </select>
                            <input
                              type="number"
                              min={1}
                              max={10}
                              value={rowItem?.points || 10}
                              disabled={!rowItem}
                              onChange={(e) => {
                                if (!rowItem) return;
                                const pts = Math.max(1, Math.min(10, Number(e.target.value)));
                                const next = mod.effects.map((ef) =>
                                  ef.slotRow === rowKey ? { ...ef, points: pts } : ef
                                );
                                updateModuleSlot(mod.slotIndex, mod.category, next);
                              }}
                              className="w-14 bg-slate-800 border border-slate-700 rounded px-2 py-1.5 text-xs text-emerald-300 font-bold"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ---------------- TAB 4: DEEP SLUMBER PSYCHOSCOPE & FACTOR G10 ---------------- */}
          {mainTab === "psychoscope" && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
              <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                Deep Slumber Psychoscope (1 จาก 8 สาย), Factor G10 และระดับ Bond Points (3 - 55)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    เลือกสาย Psychoscope (1 - 8)
                  </label>
                  <select
                    value={activeBuild.psychoscope.psychoscopeId}
                    onChange={(e) => updatePsychoscope({ psychoscopeId: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-xs text-white"
                  >
                    {Object.keys(GameDB.seasonTalents?.templates || {}).map((tid) => (
                      <option key={tid} value={tid}>
                        สายที่ {tid}: {getEnglishText("seasonTalents", tid).name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    Psychoscope Level ({activeBuild.psychoscope.level})
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={60}
                    value={activeBuild.psychoscope.level}
                    onChange={(e) => updatePsychoscope({ level: Number(e.target.value) })}
                    className="w-full accent-indigo-500 mt-2"
                  />
                </div>

                <div>
                  <label className="block text-xs text-amber-300 font-semibold mb-1">
                    Bond Points จาก Imagine 5 ตัว ({activeBuild.psychoscope.manualBondPointsOverride ?? 55} / 55)
                  </label>
                  <input
                    type="range"
                    min={3}
                    max={55}
                    value={activeBuild.psychoscope.manualBondPointsOverride ?? 55}
                    onChange={(e) =>
                      updatePsychoscope({ manualBondPointsOverride: Number(e.target.value) })
                    }
                    className="w-full accent-amber-500 mt-2"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ---------------- TAB 5: 5-MINUTE ROTATE SKILL SIMULATOR ---------------- */}
          {mainTab === "simulator" && (
            <div className="space-y-5">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                    5-Minute Auto-Rotation Skill Simulator (300 วินาที)
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-xs">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeBuild.simulationToggles.useUltimate}
                        onChange={(e) => updateSimToggles({ useUltimate: e.target.checked })}
                        className="accent-indigo-500"
                      />
                      <span>เปิดใช้ Ultimate Skill</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeBuild.simulationToggles.useImagine1}
                        onChange={(e) => updateSimToggles({ useImagine1: e.target.checked })}
                        className="accent-indigo-500"
                      />
                      <span>เปิดใช้ Imagine 1</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeBuild.simulationToggles.useImagine2}
                        onChange={(e) => updateSimToggles({ useImagine2: e.target.checked })}
                        className="accent-indigo-500"
                      />
                      <span>เปิดใช้ Imagine 2</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <div className="bg-slate-950 border border-slate-800 rounded-lg p-3">
                    <div className="text-[11px] text-slate-400">Total DMG (5 นาที)</div>
                    <div className="text-base font-bold text-white mt-0.5">
                      {simResult.totalDamage.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-indigo-950/40 border border-indigo-500/40 rounded-lg p-3">
                    <div className="text-[11px] text-indigo-300 font-semibold">DPS เฉลี่ย</div>
                    <div className="text-lg font-extrabold text-indigo-300 mt-0.5">
                      {simResult.dps.toLocaleString()} /s
                    </div>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-lg p-3">
                    <div className="text-[11px] text-slate-400">Total Heal (5 นาที)</div>
                    <div className="text-base font-bold text-emerald-400 mt-0.5">
                      {simResult.totalHeal.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-lg p-3">
                    <div className="text-[11px] text-slate-400">HPS เฉลี่ย</div>
                    <div className="text-base font-bold text-emerald-300 mt-0.5">
                      {simResult.hps.toLocaleString()} /s
                    </div>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-lg p-3">
                    <div className="text-[11px] text-slate-400">Average Buff %</div>
                    <div className="text-base font-bold text-amber-300 mt-0.5">
                      {simResult.averageBuffPct}%
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/60">
                        <th className="py-2.5 px-3">สกิล / แอคชั่น</th>
                        <th className="py-2.5 px-2">ประเภท</th>
                        <th className="py-2.5 px-2 text-right">จำนวนครั้ง</th>
                        <th className="py-2.5 px-3 text-right">Total DMG</th>
                        <th className="py-2.5 px-2 text-right">DPS</th>
                        <th className="py-2.5 px-3 text-right">DMG %</th>
                        <th className="py-2.5 px-2 text-right">HPS</th>
                        <th className="py-2.5 px-2 text-right">Heal %</th>
                        <th className="py-2.5 px-2 text-right">Avg Buff %</th>
                        <th className="py-2.5 px-2 text-right">Buff Share %</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {simResult.actionsBreakdown.map((row) => (
                        <tr key={row.actionId} className="hover:bg-slate-800/40">
                          <td className="py-2.5 px-3 font-semibold text-white">
                            {row.actionName}
                          </td>
                          <td className="py-2.5 px-2">
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">
                              {row.sourceCategory}
                            </span>
                          </td>
                          <td className="py-2.5 px-2 text-right font-mono">
                            {row.triggerOrCastCount}
                          </td>
                          <td className="py-2.5 px-3 text-right font-mono text-slate-200">
                            {row.totalDamage.toLocaleString()}
                          </td>
                          <td className="py-2.5 px-2 text-right font-mono text-indigo-300 font-semibold">
                            {row.dps.toLocaleString()}
                          </td>
                          <td className="py-2.5 px-3 text-right font-mono text-amber-300 font-bold">
                            {row.damageSharePct}%
                          </td>
                          <td className="py-2.5 px-2 text-right font-mono text-emerald-300">
                            {row.hps.toLocaleString()}
                          </td>
                          <td className="py-2.5 px-2 text-right font-mono text-emerald-400">
                            {row.healSharePct}%
                          </td>
                          <td className="py-2.5 px-2 text-right font-mono">
                            {row.avgBuffPct}%
                          </td>
                          <td className="py-2.5 px-2 text-right font-mono text-purple-300">
                            {row.buffContributionPct}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ---------------- TAB 6: SPEC-LOCKED BUILD COMPARATOR ---------------- */}
          {mainTab === "compare" && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                    เปรียบเทียบบิลด์ภายในสาย Talent เดียวกัน ({SPEC_LABELS[activeBuild.specId]})
                  </h2>
                  <p className="text-xs text-slate-400">
                    กฎระบบ: เปรียบเทียบได้เฉพาะบิลด์ที่เป็นสาย {SPEC_LABELS[activeBuild.specId]} เหมือนกันเท่านั้น
                  </p>
                </div>
                <select
                  value={compareTargetBuildId || ""}
                  onChange={(e) => setCompareTargetBuildId(e.target.value || null)}
                  className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                >
                  <option value="">-- เลือกบิลด์สาย {SPEC_LABELS[activeBuild.specId]} มาเทียบ --</option>
                  {comparableBuilds.map((b) => (
                    <option key={b.buildId} value={b.buildId}>
                      {b.buildName}
                    </option>
                  ))}
                </select>
              </div>

              {comparisonReport && comparisonReport.canCompare && (
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5">
                      <div className="text-xs text-slate-400">ผลต่าง DPS (Build B เทียบ Build A)</div>
                      <div
                        className={`text-lg font-extrabold mt-1 ${
                          (comparisonReport.dpsDiff || 0) >= 0 ? "text-emerald-400" : "text-rose-400"
                        }`}
                      >
                        {(comparisonReport.dpsDiff || 0) >= 0 ? "+" : ""}
                        {comparisonReport.dpsDiff?.toLocaleString()} DPS ({comparisonReport.dpsDiffPct}%)
                      </div>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5">
                      <div className="text-xs text-slate-400">ผลต่าง HPS</div>
                      <div className="text-lg font-bold text-emerald-300 mt-1">
                        {(comparisonReport.hpsDiff || 0) >= 0 ? "+" : ""}
                        {comparisonReport.hpsDiff?.toLocaleString()} /s
                      </div>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5">
                      <div className="text-xs text-slate-400">ผลต่าง Average Buff %</div>
                      <div className="text-lg font-bold text-amber-300 mt-1">
                        {(comparisonReport.avgBuffDiff || 0) >= 0 ? "+" : ""}
                        {comparisonReport.avgBuffDiff}%
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ================= RIGHT STICKY COLUMN (4 COLS): 2-WINDOW CHARACTER STATUS @ LV.60 ================= */}
        <div className="lg:col-span-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sticky top-20 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h2 className="text-sm font-bold text-white">
                  สเตตัสตัวละครที่ Lv.60
                </h2>
                <p className="text-[11px] text-indigo-400 font-semibold">
                  {CLASS_LABELS[activeBuild.classId]} • {SPEC_LABELS[activeBuild.specId]}
                </p>
              </div>
              <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
                <button
                  onClick={() => setStatWindowTab("summary")}
                  className={`px-2.5 py-1 rounded font-semibold ${
                    statWindowTab === "summary" ? "bg-indigo-600 text-white" : "text-slate-400"
                  }`}
                >
                  1. สรุป
                </button>
                <button
                  onClick={() => setStatWindowTab("full")}
                  className={`px-2.5 py-1 rounded font-semibold ${
                    statWindowTab === "full" ? "bg-indigo-600 text-white" : "text-slate-400"
                  }`}
                >
                  2. Attributes
                </button>
              </div>
            </div>

            {statWindowTab === "summary" && (
              <div className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Max HP</span>
                    <span className="text-sm font-bold text-emerald-400">
                      {charStatus.summaryWindow.maxHp.toLocaleString()}
                    </span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">ATK / MATK</span>
                    <span className="text-sm font-bold text-amber-300">
                      {Math.max(
                        charStatus.summaryWindow.atk,
                        charStatus.summaryWindow.matk
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px] capitalize">
                      {charStatus.summaryWindow.primaryStatKey} (Main)
                    </span>
                    <span className="text-sm font-bold text-white">
                      {charStatus.summaryWindow.primaryStatValue.toLocaleString()}
                    </span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Endurance</span>
                    <span className="text-sm font-bold text-white">
                      {charStatus.summaryWindow.endurance.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Illusion-Breaking Strength</span>
                  <span className="font-bold text-purple-300">
                    {charStatus.summaryWindow.illusionBreakingStrength}
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-bold text-slate-400 uppercase">
                    Secondary Combat Ratings
                  </div>
                  {[
                    { label: "Crit", data: charStatus.summaryWindow.crit },
                    { label: "Haste", data: charStatus.summaryWindow.haste },
                    { label: "Luck", data: charStatus.summaryWindow.luck },
                    { label: "Mastery", data: charStatus.summaryWindow.mastery },
                    { label: "Versatility", data: charStatus.summaryWindow.versatility },
                    { label: "Block", data: charStatus.summaryWindow.block },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between bg-slate-950/70 px-3 py-2 rounded border border-slate-800/80"
                    >
                      <span className="text-slate-300 font-medium">{item.label}</span>
                      <span className="font-mono text-white">
                        {item.data.rating.toLocaleString()}{" "}
                        <span className="text-indigo-400 font-bold">({item.data.percent}%)</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {statWindowTab === "full" && (
              <div className="max-h-[560px] overflow-y-auto space-y-4 pr-1 text-xs">
                {Object.entries(charStatus.fullAttributesWindow).map(([groupKey, groupObj]) => (
                  <div key={groupKey} className="space-y-1.5">
                    <div className="text-[11px] font-bold text-indigo-400 uppercase border-b border-slate-800 pb-1">
                      {groupKey} Attributes
                    </div>
                    <div className="space-y-1">
                      {Object.entries(groupObj as Record<string, number>).map(([k, v]) => (
                        <div
                          key={k}
                          className="flex justify-between py-1 px-2 rounded hover:bg-slate-800/50"
                        >
                          <span className="text-slate-400">{k}</span>
                          <span className="font-mono text-slate-100 font-semibold">
                            {typeof v === "number" ? v.toLocaleString() : v}
                            {k.endsWith("Pct") ? "%" : ""}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}