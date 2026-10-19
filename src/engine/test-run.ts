// ไฟล์: src/engine/test-run.ts
import { UserBuildConfiguration } from "../data/schemas";
import { calculateCharacterStats } from "./stat-aggregator";
import { runFiveMinuteCombatSimulation } from "./combat-simulator";

// จำลองบิลด์ตัวอย่าง: Marksman สาย Falconry ที่ Lv.60 ใส่อาวุธ GS 270 และอุปกรณ์เซ็ต
const sampleBuild: UserBuildConfiguration = {
    buildId: "test-falconry-01",
    buildName: "Marksman Falconry Endgame S3",
    characterLevel: 60,
    classId: "marksman",
    specId: "falconry",
    allocatedTalents: {
        "1101": 1, // Agility Conversion
        "1129": 1, // Falconry Spec
        "1118": 1, // Falcon Raid
        "1135": 1, // Quick Shot (+3% Attack SPD)
    },
    equippedSkills: [
        { slotIndex: 1, skillId: "2230", skillLevel: 30, skillTier: 5 }, // Torrent Volley
        { slotIndex: 2, skillId: "2232", skillLevel: 30, skillTier: 5 }, // Arrow Rain
        { slotIndex: 3, skillId: "2233", skillLevel: 30, skillTier: 5 }, // Powerdraw
        { slotIndex: 4, skillId: "2238", skillLevel: 30, skillTier: 5 }, // Blast Shot
    ],
    battleImagines: [
        { imagineId: "3923", tier: "5" }, // Muku Chief (Tier 5)
        { imagineId: "3969", tier: "5" }, // Igoreus (Tier 5)
    ],
    equipments: {
        weapon: {
            slot: "weapon",
            equipmentTemplateId: "2001516", // Fated Arrow (GS 270)
            perfection: 100,
            refineLevel: 20,
            selectedMainStat: "agility",
            selectedSubStats: ["crit", "haste"],
            selectedExtraStats: [],
            selectedPurpleStat: "attackSpdPct",
            sigilId: "1024601",
            sigilEmblemLevel: "3",
        },
        head: {
            slot: "head",
            equipmentTemplateId: "8000182", // Gaze of the Ashen Void - Phantom (GS 270 Set)
            perfection: 100,
            refineLevel: 15,
            selectedMainStat: "agility",
            selectedSubStats: [],
            selectedExtraStats: [],
            selectedPurpleStat: null,
            sigilId: null,
            sigilEmblemLevel: "3",
        },
        chest: { slot: "chest", equipmentTemplateId: null, perfection: 100, refineLevel: 0, selectedMainStat: null, selectedSubStats: [], selectedExtraStats: [], selectedPurpleStat: null, sigilId: null, sigilEmblemLevel: "3" },
        gloves: { slot: "gloves", equipmentTemplateId: null, perfection: 100, refineLevel: 0, selectedMainStat: null, selectedSubStats: [], selectedExtraStats: [], selectedPurpleStat: null, sigilId: null, sigilEmblemLevel: "3" },
        boots: { slot: "boots", equipmentTemplateId: null, perfection: 100, refineLevel: 0, selectedMainStat: null, selectedSubStats: [], selectedExtraStats: [], selectedPurpleStat: null, sigilId: null, sigilEmblemLevel: "3" },
        earrings: { slot: "earrings", equipmentTemplateId: null, perfection: 100, refineLevel: 0, selectedMainStat: null, selectedSubStats: [], selectedExtraStats: [], selectedPurpleStat: null, sigilId: null, sigilEmblemLevel: "3" },
        necklace: { slot: "necklace", equipmentTemplateId: null, perfection: 100, refineLevel: 0, selectedMainStat: null, selectedSubStats: [], selectedExtraStats: [], selectedPurpleStat: null, sigilId: null, sigilEmblemLevel: "3" },
        ring: { slot: "ring", equipmentTemplateId: null, perfection: 100, refineLevel: 0, selectedMainStat: null, selectedSubStats: [], selectedExtraStats: [], selectedPurpleStat: null, sigilId: null, sigilEmblemLevel: "3" },
        bracelet_left: { slot: "bracelet_left", equipmentTemplateId: null, perfection: 100, refineLevel: 0, selectedMainStat: null, selectedSubStats: [], selectedExtraStats: [], selectedPurpleStat: null, sigilId: null, sigilEmblemLevel: "3" },
        bracelet_right: { slot: "bracelet_right", equipmentTemplateId: null, perfection: 100, refineLevel: 0, selectedMainStat: null, selectedSubStats: [], selectedExtraStats: [], selectedPurpleStat: null, sigilId: null, sigilEmblemLevel: "3" },
        charm: { slot: "charm", equipmentTemplateId: null, perfection: 100, refineLevel: 0, selectedMainStat: null, selectedSubStats: [], selectedExtraStats: [], selectedPurpleStat: null, sigilId: null, sigilEmblemLevel: "3" },
    },
    modules: [
        {
            slotIndex: 1,
            category: "assault",
            effects: [
                { slotRow: "1", effectId: "dmg_stack", points: 10 },
                { slotRow: "2", effectId: "agility_boost", points: 10 },
                { slotRow: "3", effectId: "crit_focus", points: 5 },
            ],
        },
        { slotIndex: 2, category: "assault", effects: [{ slotRow: "1", effectId: "agility_boost", points: 10 }, { slotRow: "2", effectId: "crit_focus", points: 10 }, { slotRow: "3", effectId: "elite_strike", points: 5 }] },
        { slotIndex: 3, category: "assault", effects: [{ slotRow: "1", effectId: "elite_strike", points: 10 }, { slotRow: "2", effectId: "attack_spd", points: 10 }, { slotRow: "3", effectId: "crit_focus", points: 5 }] },
        { slotIndex: 4, category: "support", effects: [] },
        { slotIndex: 5, category: "guardian", effects: [] },
    ],
    psychoscope: {
        psychoscopeId: "1",
        level: 60,
        activeBuffChoices: {},
        equippedFactorsG10: {},
        bondImagines: [],
        manualBondPointsOverride: 55,
    },
    simulationToggles: {
        useUltimate: true,
        useImagine1: true,
        useImagine2: true,
        activePartyBuffIds: [],
        activeFoodBuffId: null,
        activeEventBuffIds: [],
    },
};

console.log("==================================================================");
console.log("1. ผลการคำนวณหน้าต่างที่ 1: สรุป (Summary Window @ Lv.60)");
console.log("==================================================================");
const status = calculateCharacterStats(sampleBuild, "idle");
console.dir(status.summaryWindow, { depth: null });

console.log("\n==================================================================");
console.log("2. ผลการคำนวณหน้าต่างที่ 2: ข้อมูลเต็ม (Full Attributes Window)");
console.log("==================================================================");
console.dir(status.fullAttributesWindow, { depth: null });

console.log("\n==================================================================");
console.log("3. ผลการจำลอง 5-Minute Rotate Skill Simulator (300 วินาที)");
console.log("==================================================================");
const simResult = runFiveMinuteCombatSimulation(sampleBuild);
console.log(`Total DMG : ${simResult.totalDamage.toLocaleString()} | DPS : ${simResult.dps.toLocaleString()}/s`);
console.log(`Total Heal: ${simResult.totalHeal.toLocaleString()} | HPS : ${simResult.hps.toLocaleString()}/s`);
console.log(`Average Buff %: ${simResult.averageBuffPct}%`);
console.table(simResult.actionsBreakdown);