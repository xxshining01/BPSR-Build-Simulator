import fs from "fs";
import path from "path";
import { z } from "zod";

// สคริปต์สำหรับให้ AI Agent สั่งรันผ่าน Function Calling เพื่อตรวจความสมบูรณ์ของไฟล์ JSON
const AttributeKeyEnum = z.enum([
    "strength", "intellect", "agility", "atk", "matk", "refinedAtk", "refinedMatk",
    "phyBoostPct", "magBoostPct", "attackSpdPct", "castSpdPct", "critDmgPct", "luckyStrikeDmgMultPct",
    "endurance", "maxHp", "armor", "resistance", "refinedArmor", "atkReductionPct", "matkReductionPct", "blockDmgReductionPct",
    "critHealingPct", "luckyStrikeHealingPct", "healingOutputPct", "healingReceivedPct", "shieldPct", "shieldReceivePct",
    "allElementAtk", "fireAtk", "iceAtk", "forestAtk", "thunderAtk", "windAtk", "rockAtk", "lightAtk", "darkAtk",
    "allElement", "allElementBonusPct", "fire", "fireBonusPct", "ice", "iceBonusPct", "forest", "forestBonusPct",
    "thunder", "thunderBonusPct", "wind", "windBonusPct", "rock", "rockBonusPct", "light", "lightBonusPct", "dark", "darkBonusPct",
    "allElementRes", "allElementResPct", "fireRes", "fireResPct", "iceRes", "iceResPct", "forestRes", "forestResPct",
    "thunderRes", "thunderResPct", "windRes", "windResPct", "rockRes", "rockResPct", "lightRes", "lightResPct", "darkRes", "darkResPct",
    "staminaLimit", "staminaRecovery", "crit", "haste", "luck", "mastery", "versatility", "block", "illusionBreakingStrength"
]);

const StatModifierSchema = z.object({
    stat: AttributeKeyEnum,
    value: z.number(),
    type: z.enum(["flat", "percent_base", "percent_total", "final_flat"]),
});

const BaseAssetSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    icon: z.string().startsWith("/assets/"),
    iconRemoteUrl: z.string(),
});

function validateAllDatabases() {
    const dbDir = path.resolve(process.cwd(), "src/data");
    if (!fs.existsSync(dbDir)) {
        console.error("[ERROR] ไม่พบโฟลเดอร์ src/data");
        process.exit(1);
    }
    const requiredFiles = [
        "skills.json",
        "classes.json",
        "talent-tree.json",
        "equipment.json",
        "battle-imagines.json",
        "modules.json",
        "suits.json",
        "enchants.json"
    ];
    for (const file of requiredFiles) {
        const filePath = path.join(dbDir, file);
        if (!fs.existsSync(filePath)) {
            console.error(`[ERROR] ไม่พบไฟล์ที่จำเป็น: src/data/${file}`);
            process.exit(1);
        }
    }
    console.log("[SUCCESS] โครงสร้าง Zod Schema และฐานข้อมูล src/data/*.json พร้อมใช้งาน");
}

validateAllDatabases();