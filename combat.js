const combatAreas = [{
    areaName: 'Farmlands',
    type: 'combat',
    media: 'assets/media/skills/combat/farmlands.svg',
    monsters: [37, 38, 67, 68, 69],
    difficulty: [0, 2],
    slayerItem: 0
}, {
    areaName: 'Dragon Valley',
    type: 'combat',
    media: 'assets/media/skills/combat/dragon_valley.svg',
    monsters: [63, 64, 65, 66],
    difficulty: [3, 4],
    slayerItem: 0
}, {
    areaName: 'Wet Forest',
    type: 'combat',
    media: 'assets/media/skills/combat/wet_forest.svg',
    monsters: [82, 14, 12, 13],
    difficulty: [1, 2],
    slayerItem: 0
}, {
    areaName: 'Wizard Tower',
    type: 'combat',
    media: 'assets/media/skills/combat/wizard_tower.svg',
    monsters: [70, 79, 78],
    difficulty: [2, 4],
    slayerItem: 0
}, {
    areaName: 'Castle of Kings',
    type: 'combat',
    media: 'assets/media/skills/combat/castle_of_kings.svg',
    monsters: [71, 0, 72, 73, 74],
    difficulty: [1, 3],
    slayerItem: 0
}, {
    areaName: 'Bandit Hideout',
    type: 'combat',
    media: 'assets/media/skills/combat/bandit_hideout.svg',
    monsters: [75, 76],
    difficulty: [1, 2],
    slayerItem: 0
}, {
    areaName: 'Giant Dungeon',
    type: 'combat',
    media: 'assets/media/monsters/hill_giant.svg',
    monsters: [1, 2],
    difficulty: [1, 2],
    slayerItem: 0
}, {
    areaName: 'Sandy Shores',
    type: 'combat',
    media: 'assets/media/skills/combat/sandy_shores.svg',
    monsters: [5, 4, 3, 6],
    difficulty: [0, 2],
    slayerItem: 0
}, {
    areaName: 'Icy Hills',
    type: 'combat',
    media: 'assets/media/skills/combat/icy_hills.svg',
    monsters: [8, 7, 54],
    difficulty: [1, 3],
    slayerItem: 0
}, {
    areaName: 'Golbin Village',
    type: 'combat',
    media: 'assets/media/skills/combat/goblin_village.svg',
    monsters: [35, 36],
    difficulty: [0],
    slayerItem: 0
}, {
    areaName: 'Graveyard',
    type: 'combat',
    media: 'assets/media/skills/combat/death.svg',
    monsters: [81, 59, 60, 62],
    difficulty: [0, 2],
    slayerItem: 0
}];
const slayerAreas = [{
    areaName: 'Penumbra',
    type: 'slayer',
    media: 'assets/media/skills/combat/penumbra.svg',
    monsters: [9, 10, 11, 15, 16, 17],
    difficulty: [1, 3],
    slayerLevel: 1,
    slayerItem: 0
}, {
    areaName: 'Strange Cave',
    type: 'slayer',
    media: 'assets/media/skills/combat/strange_cave.svg',
    monsters: [20, 18, 19, 21],
    difficulty: [2, 3],
    slayerLevel: 10,
    slayerItem: CONSTANTS.item.Mirror_Shield
}, {
    areaName: 'High Lands',
    type: 'slayer',
    media: 'assets/media/skills/combat/high_lands.svg',
    monsters: [22, 23],
    difficulty: [4],
    slayerLevel: 60,
    slayerItem: CONSTANTS.item.Magical_Ring
}, {
    areaName: 'Holy Isles',
    type: 'slayer',
    media: 'assets/media/skills/combat/holy_isles.svg',
    monsters: [24, 25, 26, 27],
    difficulty: [2, 3],
    slayerLevel: 30,
    slayerItem: 0
}, {
    areaName: 'Forest of Goo',
    type: 'slayer',
    media: 'assets/media/skills/combat/forest_of_goo.svg',
    monsters: [28, 29, 30, 31],
    difficulty: [1, 3],
    slayerLevel: 1,
    slayerItem: 0
}, {
    areaName: 'Desolate Plains',
    type: 'slayer',
    media: 'assets/media/skills/combat/desolate_plains.svg',
    monsters: [32, 33, 34],
    difficulty: [5],
    slayerLevel: 70,
    slayerItem: 0
}];
const DUNGEONS = [{
    name: 'Chicken Coop',
    media: 'assets/media/monsters/mumma_chicken.svg',
    type: '<small class="badge badge-pill badge-warning">Dungeon</small>',
    difficulty: [1],
    recommendedStats: [20, 20, 20],
    monsters: [37, 37, 37, 37, 39, 40],
    rewardCount: 1,
    rewards: [CONSTANTS.item.Egg_Chest],
    slayerItem: 0
}, {
    name: 'Undead Graveyard',
    media: 'assets/media/skills/combat/graveyard.svg',
    type: '<small class="badge badge-pill badge-warning">Dungeon</small>',
    difficulty: [2],
    recommendedStats: [40, 40, 40],
    monsters: [59, 59, 59, 60, 60, 60, 62, 61],
    rewardCount: 1,
    rewards: [CONSTANTS.item.Standard_Chest],
    slayerItem: 0
}, {
    name: 'Spider Forest',
    media: 'assets/media/skills/combat/spider_forest.svg',
    type: '<small class="badge badge-pill badge-warning">Dungeon</small>',
    difficulty: [3],
    recommendedStats: [60, 60, 60],
    monsters: [50, 51, 50, 51, 50, 52, 52, 53],
    rewardCount: 1,
    rewards: [CONSTANTS.item.Spider_Chest],
    slayerItem: 0
}, {
    name: 'Frozen Cove',
    media: 'assets/media/skills/combat/frozen_cove.svg',
    type: '<small class="badge badge-pill badge-warning">Dungeon</small>',
    difficulty: [4],
    recommendedStats: [70, 70, 70],
    monsters: [54, 54, 54, 55, 55, 55, 56, 57],
    rewardCount: 1,
    rewards: [CONSTANTS.item.Frozen_Chest],
    slayerItem: 0
}, {
    name: 'Deep Sea Ship',
    media: 'assets/media/skills/combat/ship.svg',
    type: "<small class='badge badge-pill badge-warning'>Dungeon</small>",
    difficulty: [4],
    recommendedStats: [80, 80, 80],
    monsters: [41, 41, 41, 41, 41, 41, 41, 58, 42, 43],
    rewardCount: 1,
    rewards: [CONSTANTS.item.Pirate_Booty],
    slayerItem: 0
}, {
    name: 'Volcanic Cave',
    media: 'assets/media/skills/combat/volcanic_cave.svg',
    type: '<small class="badge badge-pill badge-danger">Elite Dungeon</small>',
    difficulty: [5],
    recommendedStats: [90, 90, 90],
    monsters: [44, 45, 46, 47, 48, 49],
    rewardCount: 1,
    rewards: [CONSTANTS.item.Elite_Chest, CONSTANTS.item.Fire_Cape],
    slayerItem: 0
}, {
    name: 'Bandit Base',
    media: 'assets/media/skills/combat/bandit_base.svg',
    type: '<small class="badge badge-pill badge-warning">Dungeon</small>',
    difficulty: [2],
    monsters: [75, 75, 75, 76, 76, 76, 77],
    rewardCount: 1,
    rewards: [CONSTANTS.item.Bandit_Chest],
    slayerItem: 0
}, {
    name: 'Hall of Wizards',
    media: 'assets/media/skills/combat/hall_of_wizards.svg',
    type: '<small class="badge badge-pill badge-warning">Dungeon</small>',
    difficulty: [3],
    monsters: [70, 70, 70, 79, 79, 79, 78, 78, 80],
    rewardCount: 1,
    rewards: [CONSTANTS.item.Magic_Chest],
    slayerItem: 0
}];
const combatAreaDisplayOrder = [
    CONSTANTS.combatArea.Goblin_Village,
    CONSTANTS.combatArea.Farmlands,
    CONSTANTS.combatArea.Graveyard,
    CONSTANTS.combatArea.Sandy_Shores,
    CONSTANTS.combatArea.Wet_Forest,
    CONSTANTS.combatArea.Bandit_Hideout,
    CONSTANTS.combatArea.Giant_Dungeon,
    CONSTANTS.combatArea.Icy_Hills,
    CONSTANTS.combatArea.Castle_of_Kings,
    CONSTANTS.combatArea.Wizard_Tower,
    CONSTANTS.combatArea.Dragon_Valley
];
const slayerAreaDisplayOrder = [
    CONSTANTS.slayerArea.Penumbra,
    CONSTANTS.slayerArea.Forest_of_Goo,
    CONSTANTS.slayerArea.Strange_Cave,
    CONSTANTS.slayerArea.Holy_Isles,
    CONSTANTS.slayerArea.High_Lands,
    CONSTANTS.slayerArea.Desolate_Plains
];
const dungeonAreaDisplayOrder = [
    CONSTANTS.dungeon.Chicken_Coop,
    CONSTANTS.dungeon.Undead_Graveyard,
    CONSTANTS.dungeon.Bandit_Base,
    CONSTANTS.dungeon.Hall_of_Wizards,
    CONSTANTS.dungeon.Spider_Forest,
    CONSTANTS.dungeon.Deep_Sea_Ship,
    CONSTANTS.dungeon.Frozen_Cove,
    CONSTANTS.dungeon.Volcanic_Cave
];
var combatLevel = 0;
var numberMultiplier = 10;
var isInCombat = false;
var enemyFinder = null;
var playerAttackSpeed = 3000;
const enemySpawnTimer = 3000;
var currentCombatFood = 0;
var forcedEnemy = null;
var itemLost = 0;
var selectedSpell = 0;
var runeCheck = [];
var monsterStats = [];
var dungeonCompleteCount = [];
const me = 'w';
var listView = true;
const itemDropMax = 16;
const combatMenuCount = 5;
var slayerTask = [];
var slayerLockedItem = null;
var isCurrentlyEquipping = false;
var isCurrentlyUnequipping = false;
var currentlyEquipping = null;
var currentlyUnequipping = null;
var useSpecialAttack = false;
var autoEatNotify = true;
var enemyInCombat;
var playerTimer;
var enemyTimer;
var selectedCombatArea = null;
var isDungeon = false;
var selectedDungeon = null;
var dungeonCount = null;
var effectiveAttackLevel;
var maximumAttackRoll;
var effectiveStrengthLevel;
var baseMaxHit;
var effectiveDefenceLevel;
var maximumDefenceRoll;
var effectiveRangedDefenceLevel;
var maximumRangedDefenceRoll;
var effectiveMagicDefenceLevel;
var maximumMagicDefenceRoll;
var damageReduction = 0;
var isPrayer = false;
var prayerLoaded = false;
var activePrayer = [];
var prayerBonusAttack = 0;
var prayerBonusStrength = 0;
var prayerBonusDefence = 0;
var prayerBonusAttackRanged = 0;
var prayerBonusStrengthRanged = 0;
var prayerBonusDefenceRanged = 0;
var prayerBonusAttackMagic = 0;
var prayerBonusDamageMagic = 0;
var prayerBonusDefenceMagic = 0;
var prayerBonusProtectItem = 0;
var prayerBonusHitpoints = 1;
var prayerBonusProtectFromMelee = 0;
var prayerBonusProtectFromRanged = 0;
var prayerBonusProtectFromMagic = 0;
var prayerBonusHitpointHeal = 0;
var chanceToDoubleLoot = 0;
//SPECIAL ATTACK VARS
//NEED MOAR GLOBALS
var specialAttackUsed = false;
var specialAttackInterval = 120000; //Its 2 minutes, saved you some brain power
var enemySlowed = false;
var enemyBleeding = false;
var bleedTimer = null;
var attackCount = 1;
var damageMultiplier = 1;
var lifesteal = 0;
var enemyAttackSpeedMultiplier = 1;
var bleedMultiplier = 0;
var ancientBowHit = 0;
var specialAttackTimer = null;
var enemySlowTimer = null;
var attackTimer = null;
//If Attack < Defense: Accuracy = 0.5 × Maximum Attack Roll ÷ Maximum Defense Roll
//If Attack > Defense: Accuracy = 1 – 0.5 × Maximum Defense Roll ÷ Maximum Attack Roll
//0 - helmet, 1 - platebody, 2 - platelegs, 3 - boots, 4 - weapon, 5 - shield, 6 - amulet, 7 - ring, 8 - gloves, 9 - quiver, 10 - cape
var equippedItems = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var equipmentSets = [];
var equipmentSetCount = 0;
var selectedEquipmentSet = 0;
const emptyGear = ['armour_helmet', 'armour_platebody', 'armour_platelegs', 'armour_boots', 'weapon_sword', 'armour_shield', 'misc_amulet', 'misc_ring', 'armour_gloves', 'weapon_quiver', 'armour_cape'];
var equippedFood = [{ itemID: 0, qty: 0 }, { itemID: 0, qty: 0 }, { itemID: 0, qty: 0 }];
var droppedLoot = [];
var ammo = 0;
var prayerPoints = 1;
//for player and enemy details
var combatData = {
    player: {
        hitpoints: 100
    },
    enemy: {
        hitpoints: 0,
        effectiveAttackLevel: 0,
        maximumAttackRoll: 0,
        effectiveStrengthLevel: 0,
        maximumStrengthRoll: 0,
        effectiveDefenceLevel: 0,
        maximumDefenceRoll: 0
    }
};
//Default attack style
// 0 - stab, 1 - slash, 2 - defence, 3 - accurate, 4 - rapid, 5 - longrange, 6 - magic/standard, 7 - magic/defensive
var attackStyle = 0;
const attackStyleSkills = [CONSTANTS.skill.Attack, CONSTANTS.skill.Strength, CONSTANTS.skill.Defence];
var selectedAttackStyle = [0, 3, 6];
const hitpointRegenInterval = 10000;
var hitpointRegen;
//Hitpoint regen
function regenerateHitpoints() {
    clearTimeout(hitpointRegen);
    hitpointRegen = setTimeout(function() {
        if (combatData.player.hitpoints < skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier) {
            let regen = 1 + Math.floor(skillLevel[CONSTANTS.skill.Hitpoints] / 10);
            if (equippedItems[CONSTANTS.equipmentSlot.Cape] === CONSTANTS.item.Hitpoints_Skillcape) regen += 1 * numberMultiplier;
            if (activePrayer[CONSTANTS.prayer.Rapid_Heal]) {
                if (prayerPoints >= PRAYER[CONSTANTS.prayer.Rapid_Heal].pointsPerRegen) {
                    regen *= 2;
                    updatePrayerPoints(PRAYER[CONSTANTS.prayer.Rapid_Heal].pointsPerRegen);
                } else {
                    togglePrayer(CONSTANTS.prayer.Rapid_Heal);
                }
            }
            if (herbloreBonuses[13].bonus[0] === 7 && herbloreBonuses[13].charges > 0) {
                let chance = Math.floor(Math.random() * 100);
                if (herbloreBonuses[13].bonus[1] > chance) regen *= Math.floor(1 + items[herbloreBonuses[13].itemID].potionBonus / 100);
                updateHerbloreBonuses(herbloreBonuses[13].itemID);
            }
            if (equippedItems[CONSTANTS.equipmentSlot.Ring] === CONSTANTS.item.Gold_Ruby_Ring) {
                regen = Math.floor(regen * (1 + items[CONSTANTS.item.Gold_Ruby_Ring].hpRegenBonus / 100));
            }
            updatePlayerHitpoints(regen);
        }
        regenerateHitpoints();
        //im lazy so i just put this in here
        checkGameVersion();
        saveData();
        //yes im putting the farming time remaining update function inside the hitpoints regen timer
        //nothing wrong with that???
        //its efficient
        updateTimeRemaining(0);
        updateTimeRemaining(1);
        updateTimeRemaining(2);
    }, hitpointRegenInterval);
}
//main combat starting function
function startCombat(timer = 0) {
    updateKillCount();
    if (timer === 0 || timer === 1) {
        //animate the progress bars for you
        $('#combat-progress-attack-player').stop(false, false).animate({ width: '100%' }, playerAttackSpeed, 'linear');
        $('#combat-progress-attack-player').animate({ width: '0%' }, 0, 'linear');
        //perform these actions when the timer hits 0
        playerTimer = setTimeout(function() {
            if (attackCount > 1) {
                attack(0);
                let count = 1;
                let attackTimer = setInterval(function() {
                    attack(0);
                    count++;
                    if (count >= attackCount) {
                        clearInterval(attackTimer);
                        updateCombat();
                    }
                }, count * 200);
            } else {
                attack(0);
                updateCombat();
            }
        }, playerAttackSpeed);
    }
    //Who 2 - Enemy
    if (timer === 0 || timer === 2) {
        let enemyAttackSpeed = MONSTERS[enemyInCombat].attackSpeed * enemyAttackSpeedMultiplier;
        $('#combat-enemy-attack-speed').text(enemyAttackSpeed / 1000 + 's');
        //animate the progress bars for enemy
        $('#combat-progress-attack-enemy').stop(false, false).animate({ width: '100%' }, enemyAttackSpeed, 'linear');
        $('#combat-progress-attack-enemy').animate({ width: '0%' }, 0, 'linear');
        if (isInCombat && equippedItems[CONSTANTS.equipmentSlot.Ring] === CONSTANTS.item.Gold_Diamond_Ring && combatData.player.hitpoints <= skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier * 0.1) {
            stopCombat();
            Swal.fire({
                title: 'Combat Stopped',
                text: 'Your ring has automatically stopped combat.',
                imageUrl: items[CONSTANTS.item.Gold_Diamond_Ring].media,
                imageWidth: 64,
                imageHeight: 64,
                imageAlt: 'Gold Diamond Ring'
            });
        } else {
            //perform these actions when the timer hits 0
            enemyTimer = setTimeout(function() {
                attack(1);
                let enemyCombatStatus = checkCombatStatus(0);
                //Repeat if not ded
                if (enemyCombatStatus) {
                    startCombat(2);
                } else {
                    //DEATH
                    monsterStats[enemyInCombat].killedPlayer++;
                    stopCombat(true, true);
                }
                //saveData();
            }, enemyAttackSpeed);
        }
    }
}

function updateCombat() {
    let playerCombatStatus = checkCombatStatus(1);
    //Repeat
    if (playerCombatStatus) {
        resetSpecialAttack();
        startCombat(1);
    } else {
        resetSpecialAttack(true);
        if (isDungeon) {
            if (dungeonCount < DUNGEONS[selectedDungeon].monsters.length - 1) {
                updateKillCount(enemyInCombat);
                stopCombat();
                dungeonCount++;
                updateDungeonEnemyCount();
                selectMonster(DUNGEONS[selectedDungeon].monsters[dungeonCount]);
            } else {
                dungeonCompleteCount[selectedDungeon]++;
                if (!autoRestartDungeon) {
                    updateKillCount(enemyInCombat);
                    dropLoot(enemyInCombat);
                    dungeonCount[selectedDungeon]++;
                    if (selectedDungeon === CONSTANTS.dungeon.Volcanic_Cave) {
                        addItemToBank(CONSTANTS.item.Fire_Cape, 1);
                    }
                    stopCombat();
                    Swal.fire({
                        title: 'Dungeon Complete!',
                        text: 'Well Done! You beat the dungeon. A reward has been added to your bank.',
                        imageUrl: 'assets/media/skills/combat/dungeon.svg',
                        imageWidth: 64,
                        imageHeight: 64,
                        imageAlt: 'Dungeon Complete'
                    });
                } else {
                    updateKillCount(enemyInCombat);
                    dungeonCount[selectedDungeon]++;
                    dropLoot(enemyInCombat);
                    if (selectedDungeon === CONSTANTS.dungeon.Volcanic_Cave) {
                        addItemToBank(CONSTANTS.item.Fire_Cape, 1);
                    }
                    stopCombat();
                    selectDungeon(selectedDungeon);
                    findEnemy();
                }
            }
        } else {
            updateKillCount(enemyInCombat);
            updateSlayer(enemyInCombat);
            dropLoot(enemyInCombat);
            stopCombat();
            loadNewEnemy();
        }
        statsCombat[0].count++;
        updateStats('combat');
    }
}

function attack(attacker) {
    //attacker 0 - Player
    //attacker 1 - enemy
    if (attacker === 0) {
        let hasAmmo = true;
        let hasRunes = true;
        let playerAccuracy;
        let skill;
        //check which attack type we are going for
        //Ranged
        /*if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].type === "Ranged Weapon") {
        	//set skill to ranged
        	skill = CONSTANTS.skill.Ranged;
        	//check ammo
        	if ((equippedItems[CONSTANTS.equipmentSlot.Quiver] === 0) || (ammo < 1)) {
        		hasAmmo = false;
        	}
        }
        //Melee
        else {
        	//set the skill we are training
        	skill = attackStyleSkills[attackStyle];
        }*/
        let enemyDefenceRoll;
        if (attackStyle < 3) enemyDefenceRoll = combatData.enemy.maximumDefenceRoll;
        else if (attackStyle < 6) enemyDefenceRoll = combatData.enemy.maximumRangedDefenceRoll;
        else enemyDefenceRoll = combatData.enemy.maximumMagicDefenceRoll;
        if (maximumAttackRoll < enemyDefenceRoll) playerAccuracy = 0.5 * maximumAttackRoll / enemyDefenceRoll * 100;
        else playerAccuracy = (1 - 0.5 * enemyDefenceRoll / maximumAttackRoll) * 100;
        let chanceToHit = Math.floor(Math.random() * 100);
        if (herbloreBonuses[13].bonus[0] === 9 && herbloreBonuses[13].charges > 0) {
            let diamondLuck = Math.floor(Math.random() * 100);
            if (chanceToHit > diamondLuck) chanceToHit = diamondLuck;
        }
        if (itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]] != 0) itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]].totalAttacks++;
        if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].type === 'Ranged Weapon' || items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isRanged) {
            if (equippedItems[CONSTANTS.equipmentSlot.Quiver] === 0 || ammo < 1) {
                hasAmmo = false;
            }
            if (hasAmmo) {
                let chanceToKeep = 0;
                let chanceValue = 50;
                if (equippedItems[CONSTANTS.equipmentSlot.Cape] === CONSTANTS.item.Ranged_Skillcape) {
                    chanceToKeep = Math.floor(Math.random() * 100);
                    chanceValue = 50;
                }
                if (equippedItems[CONSTANTS.equipmentSlot.Cape] === CONSTANTS.item.Cape_of_Arrow_Preservation) {
                    chanceToKeep = Math.floor(Math.random() * 100);
                    chanceValue = 80;
                }
                if (chanceToKeep < chanceValue) {
                    if (itemStats[equippedItems[CONSTANTS.equipmentSlot.Quiver]] != 0) itemStats[equippedItems[CONSTANTS.equipmentSlot.Quiver]].amountUsedInCombat++;
                    ammo--;
                    equipmentSets[selectedEquipmentSet].ammo--;
                }
                if (itemStats[equippedItems[CONSTANTS.equipmentSlot.Quiver]] != 0) itemStats[equippedItems[CONSTANTS.equipmentSlot.Quiver]].totalAttacks++;
                updateAmmo();
            }
        }
        if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isMagic) {
            let hasCape = false;
            if (equippedItems[CONSTANTS.equipmentSlot.Cape] === CONSTANTS.item.Magic_Skillcape) hasCape = true;
            hasRunes = checkRuneCount(selectedSpell);
            if (hasRunes) {
                for (let i = 0; i < runeCheck.length; i++) {
                    if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].providesRune !== SPELLS[selectedSpell].runesRequired[runeCheck[i].reqID].id) {
                        if (hasCape && (SPELLS[selectedSpell].runesRequired[runeCheck[i].reqID].id !== CONSTANTS.item.Air_Rune || SPELLS[selectedSpell].runesRequired[runeCheck[i].reqID].id !== CONSTANTS.item.Water_Rune || SPELLS[selectedSpell].runesRequired[runeCheck[i].reqID].id !== CONSTANTS.item.Earth_Rune || SPELLS[selectedSpell].runesRequired[runeCheck[i].reqID].id !== CONSTANTS.item.Fire_Rune)) {
                            //bank[runeCheck[i].bankID].qty -= SPELLS[selectedSpell].runesRequired[runeCheck[i].reqID].qty;
                            //updateItemInBank(runeCheck[i].bankID, SPELLS[selectedSpell].runesRequired[runeCheck[i].reqID].id, 0, true);
                        } else {
                            if (runeCheck[i].bankID > -1) {
                                itemStats[SPELLS[selectedSpell].runesRequired[runeCheck[i].reqID].id].amountUsedInCombat += SPELLS[selectedSpell].runesRequired[runeCheck[i].reqID].qty;
                                bank[runeCheck[i].bankID].qty -= SPELLS[selectedSpell].runesRequired[runeCheck[i].reqID].qty;
                                updateItemInBank(runeCheck[i].bankID, SPELLS[selectedSpell].runesRequired[runeCheck[i].reqID].id, 0, true);
                            }
                        }
                    }
                }
                updateRunes();
            }
        }
        if (!hasAmmo) {
            notifyPlayer(CONSTANTS.skill.Ranged, 'You have no ammo', 'danger');
        } else if (!hasRunes) {
            notifyPlayer(CONSTANTS.skill.Magic, "You don't have enough runes", 'danger');
        } else {
            let damageToEnemy = 0;
            if (ancientBowHit > 0) playerAccuracy = 169;
            if (playerAccuracy > chanceToHit) {
                damageToEnemy = (Math.floor(Math.random() * baseMaxHit) + 1) * damageMultiplier;
                if (ancientBowHit > 0) damageToEnemy = baseMaxHit * 2 * damageMultiplier;
                if (combatData.enemy.hitpoints < damageToEnemy) {
                    damageToEnemy = combatData.enemy.hitpoints;
                }
                damageEnemy(damageToEnemy);
                let combatXpToAdd = Math.floor(damageToEnemy / numberMultiplier * 4) * combatXp;
                if (combatXpToAdd < 4) combatXpToAdd = 4 * combatXp;
                let hpXpToAdd = combatXp * Math.round(damageToEnemy / numberMultiplier * 1.33 * 100) / 100;
                let prayerXpToAdd = combatXp * Math.round(damageToEnemy / numberMultiplier * 100) / 100;
                for (let i = 0; i < activePrayer.length; i++) {
                    if (activePrayer[i]) prayerXpToAdd += Math.floor(damageToEnemy / numberMultiplier * 2) * PRAYER[i].pointsPerPlayer;
                }
                if (equippedItems[CONSTANTS.equipmentSlot.Ring] === CONSTANTS.item.Gold_Emerald_Ring) {
                    combatXpToAdd += Math.floor(combatXpToAdd * 0.1);
                    hpXpToAdd += Math.floor(hpXpToAdd * 0.1);
                    prayerXpToAdd += Math.floor(prayerXpToAdd * 0.1);
                }
                if (attackStyle === CONSTANTS.attackStyle.Stab) {
                    addXP(CONSTANTS.skill.Attack, combatXpToAdd);
                    updateSkillWindow(CONSTANTS.skill.Attack);
                    if (itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]] != 0) itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]].damageDealt += damageToEnemy;
                }
                if (attackStyle === CONSTANTS.attackStyle.Slash) {
                    addXP(CONSTANTS.skill.Strength, combatXpToAdd);
                    updateSkillWindow(CONSTANTS.skill.Strength);
                    if (itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]] != 0) itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]].damageDealt += damageToEnemy;
                }
                if (attackStyle === CONSTANTS.attackStyle.Block) {
                    addXP(CONSTANTS.skill.Defence, combatXpToAdd);
                    updateSkillWindow(CONSTANTS.skill.Defence);
                    if (itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]] != 0) itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]].damageDealt += damageToEnemy;
                }
                if (attackStyle === CONSTANTS.attackStyle.Accurate || attackStyle === CONSTANTS.attackStyle.Rapid) {
                    addXP(CONSTANTS.skill.Ranged, combatXpToAdd);
                    updateSkillWindow(CONSTANTS.skill.Ranged);
                    if (itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]] != 0) itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]].damageDealt += damageToEnemy;
                    if (itemStats[equippedItems[CONSTANTS.equipmentSlot.Quiver]] != 0) itemStats[equippedItems[CONSTANTS.equipmentSlot.Quiver]].damageDealt += damageToEnemy;
                }
                if (attackStyle === CONSTANTS.attackStyle.Longrange) {
                    addXP(CONSTANTS.skill.Ranged, Math.floor(combatXpToAdd / 2));
                    addXP(CONSTANTS.skill.Defence, Math.floor(combatXpToAdd / 2));
                    updateSkillWindow(CONSTANTS.skill.Ranged);
                    if (itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]] != 0) itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]].damageDealt += damageToEnemy;
                    if (itemStats[equippedItems[CONSTANTS.equipmentSlot.Quiver]] != 0) itemStats[equippedItems[CONSTANTS.equipmentSlot.Quiver]].damageDealt += damageToEnemy;
                }
                if (attackStyle === CONSTANTS.attackStyle.Magic) {
                    addXP(CONSTANTS.skill.Magic, combatXpToAdd);
                    updateSkillWindow(CONSTANTS.skill.Magic);
                    if (itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]] != 0) itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]].damageDealt += damageToEnemy;
                }
                if (attackStyle === CONSTANTS.attackStyle.Defensive) {
                    addXP(CONSTANTS.skill.Magic, Math.floor(combatXpToAdd / 2));
                    addXP(CONSTANTS.skill.Defence, Math.floor(combatXpToAdd / 2));
                    updateSkillWindow(CONSTANTS.skill.Magic);
                    if (itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]] != 0) itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]].damageDealt += damageToEnemy;
                }
                addXP(CONSTANTS.skill.Prayer, prayerXpToAdd);
                addXP(CONSTANTS.skill.Hitpoints, hpXpToAdd);
                updateSkillWindow(CONSTANTS.skill.Hitpoints);
                updateSkillWindow(CONSTANTS.skill.Prayer);
                monsterStats[enemyInCombat].damageTakenFromPlayer += damageToEnemy;
                monsterStats[enemyInCombat].hitsFromPlayer++;
                statsCombat[1].count += damageToEnemy;
                updateStats('combat');
                //add that sweet sweet lifesteal
                let ls = Math.floor(damageToEnemy * lifesteal);
                if (ls > 0) updatePlayerHitpoints(ls);
                if (enemySlowed && enemySlowTimer !== null) {
                    enemySlowTimer = setTimeout(function() {
                        enemySlowed = false;
                        enemySlowTimer = null;
                    }, 30000);
                }
            } else {
                statsCombat[3].count++;
                updateStats('combat');
                //console.log("[PLAYER] Missed!");
                if (itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]] != 0) itemStats[equippedItems[CONSTANTS.equipmentSlot.Weapon]].missedAttacks++;
                if (
                    (attackStyle === CONSTANTS.attackStyle.Accurate || attackStyle === CONSTANTS.attackStyle.Rapid || attackStyle === CONSTANTS.attackStyle.Longrange) && equippedItems[CONSTANTS.equipmentSlot.Quiver] != 0) itemStats[equippedItems[CONSTANTS.equipmentSlot.Quiver]].missedAttacks++;
                monsterStats[enemyInCombat].playerMissed++;
            }
            if (herbloreBonuses[13].bonus[0] !== null && herbloreBonuses[13].bonus[0] !== 11 && herbloreBonuses[13].bonus[0] !== 7 && herbloreBonuses[13].charges > 0) {
                updateHerbloreBonuses(herbloreBonuses[13].itemID);
            }
            for (let i = 0; i < activePrayer.length; i++) {
                if (activePrayer[i]) updatePrayerPoints(PRAYER[i].pointsPerPlayer);
            }
            if (bleedMultiplier > 0 && damageToEnemy > 0 && !enemyBleeding) {
                enemyBleeding = true;
                let count = 0;
                let bleedPerInterval = Math.floor(damageToEnemy * 0.1);
                bleedTimer = setInterval(function() {
                    damageEnemy(bleedPerInterval);
                    count++;
                    if (count >= 10 || combatData.enemy.hitpoints < 1) {
                        clearInterval(bleedTimer);
                        bleedTimer = null;
                        enemyBleeding = false;
                        updateDebuffs();
                        if (combatData.enemy.hitpoints < 1) updateCombat();
                    }
                }, 1000);
            }
            //saveData();
        }
    } else if (attacker === 1) {
        let enemyAccuracy;
        let playerDefenceRoll;
        let prayerActive = false;
        if (combatData.enemy.attackType === CONSTANTS.attackType.Melee) playerDefenceRoll = maximumDefenceRoll;
        else if (combatData.enemy.attackType === CONSTANTS.attackType.Ranged) playerDefenceRoll = maximumRangedDefenceRoll;
        else if (combatData.enemy.attackType === CONSTANTS.attackType.Magic) playerDefenceRoll = maximumMagicDefenceRoll;
        if (combatData.enemy.maximumAttackRoll < playerDefenceRoll) enemyAccuracy = 0.5 * combatData.enemy.maximumAttackRoll / playerDefenceRoll * 100;
        else enemyAccuracy = (1 - 0.5 * playerDefenceRoll / combatData.enemy.maximumAttackRoll) * 100;
        if (combatData.enemy.attackType === CONSTANTS.attackType.Melee && prayerBonusProtectFromMelee > 0) prayerActive = true;
        else if (combatData.enemy.attackType === CONSTANTS.attackType.Ranged && prayerBonusProtectFromRanged > 0) prayerActive = true;
        else if (combatData.enemy.attackType === CONSTANTS.attackType.Magic && prayerBonusProtectFromMagic > 0) prayerActive = true;
        let enemyChanceToHit = Math.floor(Math.random() * 100);
        if ((enemyAccuracy > enemyChanceToHit && !prayerActive) || (prayerActive && enemyChanceToHit >= 95)) {
            let damageToPlayer = Math.floor(Math.random() * combatData.enemy.maximumStrengthRoll) + 1;
            damageToPlayer -= Math.floor(damageReduction / 100 * damageToPlayer);
            //combatData.player.hitpoints -= damageToPlayer;
            if (damageToPlayer > 0) updatePlayerHitpoints(-damageToPlayer);
            $('#combat-player-hitpoints-current').text(combatData.player.hitpoints);
            let playerHitpointsBar = Math.floor(combatData.player.hitpoints / (skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier) * 100);
            $('#combat-player-hitpoints-bar').css('width', playerHitpointsBar + '%');
            if (isInCombat && equippedItems[CONSTANTS.equipmentSlot.Ring] === CONSTANTS.item.Gold_Sapphire_Ring) {
                let reflectDamage = Math.floor(Math.random() * 3 * numberMultiplier);
                if (combatData.enemy.hitpoints > reflectDamage) {
                    combatData.enemy.hitpoints -= reflectDamage;
                    $('#combat-enemy-hitpoints-current').text(combatData.enemy.hitpoints);
                    let enemyHitpointsBar = Math.floor(combatData.enemy.hitpoints / (MONSTERS[enemyInCombat].hitpoints * numberMultiplier) * 100);
                    $('#combat-enemy-hitpoints-bar').css('width', enemyHitpointsBar + '%');
                    statsCombat[1].count += reflectDamage;
                    updateStats('combat');
                    //console.log("[PLAYER] Damage Reflected for " + reflectDamage);
                }
            }
            for (let i = 0; i < equippedItems.length; i++) {
                if (i != CONSTANTS.equipmentSlot.Weapon && i != CONSTANTS.equipmentSlot.Quiver) {
                    if (equippedItems[i] != 0) {
                        itemStats[equippedItems[i]].damageTaken += damageToPlayer;
                    }
                }
            }
            if (prayerBonusHitpointHeal > 0 && combatData.player.hitpoints > 0 && combatData.player.hitpoints <= skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier * 0.1) updatePlayerHitpoints(Math.floor(skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier * (1 + prayerBonusHitpointHeal / 100)));
            monsterStats[enemyInCombat].damageDealtToPlayer += damageToPlayer;
            monsterStats[enemyInCombat].hitsToPlayer++;
            statsCombat[2].count += damageToPlayer;
            updateStats('combat');
            updateHitpoints();
            if (currentAutoEat > 0) {
                if (combatData.player.hitpoints > 0 && combatData.player.hitpoints <= Math.floor(skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier * (autoEatData[currentAutoEat - 1].eatAt / 100))) {
                    eatFood(autoEatData[currentAutoEat - 1].efficiency, true);
                }
            }
            //console.log("[ENEMY] Successful hit for " + damageToPlayer);
        } else {
            monsterStats[enemyInCombat].enemyMissed++;
            //console.log("[ENEMY] Missed!");
        }
        for (let i = 0; i < activePrayer.length; i++) {
            if (activePrayer[i]) updatePrayerPoints(PRAYER[i].pointsPerEnemy);
        }
        //saveData();
    }
    updateDebuffs();
    updateGameTitle();
}

function damageEnemy(dmg) {
    combatData.enemy.hitpoints -= dmg;
    $('#combat-enemy-hitpoints-current').text(formatNumber(combatData.enemy.hitpoints));
    let enemyHitpointsBar = Math.floor(combatData.enemy.hitpoints / (MONSTERS[enemyInCombat].hitpoints * numberMultiplier) * 100);
    $('#combat-enemy-hitpoints-bar').css('width', enemyHitpointsBar + '%');
}

function stopCombat(death = false, stopDungeon = false, runAway = false) {
    if (playerTimer) {
        clearTimeout(playerTimer);
    }
    if (enemyTimer) {
        clearTimeout(enemyTimer);
    }
    if (enemyFinder) {
        clearTimeout(enemyFinder);
    }
    if (enemyInCombat !== undefined && enemyInCombat !== null && runAway) monsterStats[enemyInCombat].ranAway++;
    resetEnemyScreen();
    $('#combat-progress-attack-player').stop(true, true).animate({ width: '0%' }, 0, 'linear');
    $('#combat-progress-attack-enemy').stop(true, true).animate({ width: '0%' }, 0, 'linear');
    isInCombat = false;
    updateGameTitle();
    $('#skill-nav-name-' + CONSTANTS.skill.Hitpoints).removeClass('text-success');
    $('#skill-nav-name-' + CONSTANTS.skill.Ranged).removeClass('text-success');
    $('#skill-nav-name-' + CONSTANTS.skill.Magic).removeClass('text-success');
    //$("#skill-nav-name-" + CONSTANTS.skill.Prayer).removeClass("text-success");
    $('#skill-nav-name-' + (attackStyle + 6)).removeClass('text-success');
    if (death) {
        showMap();
        if (prayerBonusProtectItem > 0) itemLost = 0;
        else applyDeathPenalty();
        updatePlayerStats();
        if (itemLost != 0) {
            //Death notification
            Swal.fire({
                title: 'You Died!',
                html: 'It looks like you lost your:<br><img class="skill-icon-sm mr-2" src=' + items[itemLost].media + '>' + items[itemLost].name,
                imageUrl: 'assets/media/skills/combat/combat.svg',
                imageWidth: 64,
                imageHeight: 64,
                imageAlt: 'Combat'
            });
        } else {
            Swal.fire({
                title: 'You Died!',
                html: 'Luck was on your side today. You lost nothing.',
                imageUrl: 'assets/media/skills/combat/combat.svg',
                imageWidth: 64,
                imageHeight: 64,
                imageAlt: 'Combat'
            });
        }
        for (let i = 0; i < activePrayer.length; i++) {
            if (activePrayer[i]) togglePrayer(i);
        }
        //reset HP to 20%
        updatePlayerHitpoints(Math.floor(skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier * 0.2));
        gloveCheck();
    }
    if (stopDungeon) {
        isDungeon = false;
        selectedDungeon = false;
        dungeonCount = 0;
        clearLoot();
        $('#combat-dungeon-img').addClass('d-none');
        $('#combat-dungeon-count').text('');
        $('#combat-dungeon-name').text('');
    }
    $('#combat-enemy-debuffs').html('');
}

function applyDeathPenalty() {
    //lol rekt
    let deathPenalty = Math.floor(Math.random() * equippedItems.length);
    itemLost = equippedItems[deathPenalty];
    itemStats[itemLost].deathCount++;
    equippedItems[deathPenalty] = 0;
    equipmentSets[selectedEquipmentSet].equipment[deathPenalty] = 0;
    if (deathPenalty === CONSTANTS.equipmentSlot.Quiver) {
        ammo = 0;
        equipmentSets[selectedEquipmentSet].ammo = 0;
        updateAmmo();
    }
    clearLoot();
    loadCombatGear();
    statsCombat[4].count++;
    updateStats('combat');
}

function checkCombatStatus(check) {
    if (check === 0) {
        if (combatData.player.hitpoints < 1) {
            return false;
        } else {
            return true;
        }
    } else if (check === 1) {
        if (combatData.enemy.hitpoints < 1) {
            return false;
        } else {
            return true;
        }
    }
}
//load the combat screen and stats for you
function updateHitpoints() {
    if (combatData.player.hitpoints < 0) combatData.player.hitpoints = 0;
    if (skillLevel[CONSTANTS.skill.Hitpoints] > 99) skillLevel[CONSTANTS.skill.Hitpoints] = 99;
    if (combatData.player.hitpoints > skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier) combatData.player.hitpoints = skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier;
    //Update all numbers on screen
    $('#combat-player-hitpoints-max').text(formatNumber(skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier));
    $('#combat-player-hitpoints-current').text(formatNumber(combatData.player.hitpoints));
    $('#thieving-player-hitpoints-max').text(formatNumber(skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier));
    $('#thieving-player-hitpoints-current').text(formatNumber(combatData.player.hitpoints));
    if (combatData.player.hitpoints < skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier) {
        $('#nav-hitpoints-current').attr('class', 'text-danger mr-2');
        $('#nav-hitpoints-current-thieving').attr('class', 'text-danger mr-2');
    } else {
        $('#nav-hitpoints-current').attr('class', 'text-success mr-2');
        $('#nav-hitpoints-current-thieving').attr('class', 'text-success mr-2');
    }
    $('#nav-hitpoints-current').text('(' + formatNumber(combatData.player.hitpoints) + ')');
    $('#nav-hitpoints-current-thieving').text('(' + formatNumber(combatData.player.hitpoints) + ')');
    let hitpointsBar = Math.floor(combatData.player.hitpoints / (skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier) * 100);
    $('#combat-player-hitpoints-bar').css('width', hitpointsBar + '%');
    $('#thieving-player-hitpoints-bar').css('width', hitpointsBar + '%');
    updateGameTitle();
}

function resetEnemyScreen() {
    enemyInCombat = undefined;
    $('#combat-enemy-name').text('-');
    $('#combat-enemy-hitpoints-max').text('-');
    $('#combat-enemy-hitpoints-current').text('-');
    $('#combat-enemy-hitpoints-bar').css('width', '0%');
    $('#combat-enemy-attack-bonus').text('-');
    $('#combat-enemy-strength-bonus').text('-');
    $('#combat-enemy-defence-bonus').text('-');
    $('#combat-enemy-combat-level').text('-');
    $('#combat-enemy-attack-level').text('-');
    $('#combat-enemy-strength-level').text('-');
    $('#combat-enemy-defence-level').text('-');
    $('#combat-enemy-ranged-level').text('-');
    $('#combat-enemy-magic-level').text('-');
    $('#combat-enemy-img').html('');
    $('#combat-enemy-options').html('');
    $('#combat-enemy-options').append('<button type="button" class="btn btn-lg btn-warning m-1"  onClick="stopCombat(false, true, true); showMap();"><img class="nav-img" src="assets/media/skills/combat/run.svg">Run / Area Select</button><br>');
}

function findEnemy() {
    if (isDungeon && selectedDungeon != null) {
        selectMonster(DUNGEONS[selectedDungeon].monsters[dungeonCount]);
    } else {
        selectMonster(null);
    }
}

function selectMonster(m) {
    selectCombatArea(selectedCombatArea);
    forcedEnemy = m;
    loadNewEnemy();
}

function loadNewEnemy() {
    if (idleChecker(CONSTANTS.skill.Hitpoints)) {
        One.helpers('notify', {
            type: 'danger',
            from: 'bottom',
            align: 'center',
            message: 'Honestly, who can fight AND train a skill at the same time???'
        });
    } else {
        isInCombat = true;
        updateGameTitle();
        //set the skill name to green
        updateNav();
        $('#skill-nav-name-9').attr('class', 'nav-main-link-name text-success');
        if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].type === 'Ranged Weapon' || items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isRanged) {
            $('#skill-nav-name-' + CONSTANTS.skill.Ranged).attr('class', 'nav-main-link-name text-success');
        }
        if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isMagic) {
            $('#skill-nav-name-' + CONSTANTS.skill.Magic).attr('class', 'nav-main-link-name text-success');
        } else {
            $('#skill-nav-name-' + (attackStyle + 6)).attr('class', 'nav-main-link-name text-success');
        }
        resetEnemyScreen();
        $('#combat-enemy-options').html('<p><button type="button" class="btn btn-lg btn-warning m-1" onClick="stopCombat(false, true, true); showMap();"><img class="nav-img" src="assets/media/skills/combat/run.svg">Run / Area Select</button></p>');
        $('#combat-enemy-img').append('<div class="combat-enemy-img spinner-border text-danger" role="status"></div>');
        enemyFinder = setTimeout(function() {
            $('#combat-player-hitpoints-current').text(combatData.player.hitpoints);
            let enemy;
            if (forcedEnemy === null) {
                enemy = combatAreas[selectedCombatArea].monsters[Math.floor(Math.random() * combatAreas[selectedCombatArea].monsters.length)];
            } else {
                enemy = forcedEnemy;
            }
            enemyInCombat = enemy;
            monsterStats[enemy].seen++;
            combatData.enemy.hitpoints = MONSTERS[enemy].hitpoints * numberMultiplier;
            combatData.enemy.effectiveDefenceLevel = Math.floor(MONSTERS[enemy].defenceLevel + 8 + 1);
            combatData.enemy.maximumDefenceRoll = combatData.enemy.effectiveDefenceLevel * (MONSTERS[enemy].defenceBonus + 64);
            combatData.enemy.effectiveRangedDefenceLevel = Math.floor(MONSTERS[enemy].defenceLevel + 8 + 1);
            combatData.enemy.maximumRangedDefenceRoll = combatData.enemy.effectiveRangedDefenceLevel * (MONSTERS[enemy].defenceBonusRanged + 64);
            combatData.enemy.effectiveMagicDefenceLevel = Math.floor(Math.floor(MONSTERS[enemy].magicLevel * 0.7) + Math.floor(MONSTERS[enemy].defenceLevel * 0.3) + 8 + 1);
            combatData.enemy.maximumMagicDefenceRoll = combatData.enemy.effectiveMagicDefenceLevel * (MONSTERS[enemy].defenceBonusMagic + 64);
            combatData.enemy.attackType = MONSTERS[enemy].attackType;
            if (MONSTERS[enemy].attackType === CONSTANTS.attackType.Melee) {
                combatData.enemy.effectiveAttackLevel = Math.floor(MONSTERS[enemy].attackLevel + 8 + 1);
                combatData.enemy.maximumAttackRoll = combatData.enemy.effectiveAttackLevel * (MONSTERS[enemy].attackBonus + 64);
                combatData.enemy.effectiveStrengthLevel = Math.floor(MONSTERS[enemy].strengthLevel + 8 + 1);
                combatData.enemy.maximumStrengthRoll = Math.floor(numberMultiplier * (1.3 + combatData.enemy.effectiveStrengthLevel / 10 + MONSTERS[enemy].strengthBonus / 80 + combatData.enemy.effectiveStrengthLevel * MONSTERS[enemy].strengthBonus / 640));
            } else if (MONSTERS[enemy].attackType === CONSTANTS.attackType.Ranged) {
                combatData.enemy.effectiveAttackLevel = Math.floor(MONSTERS[enemy].rangedLevel + 8 + 1);
                combatData.enemy.maximumAttackRoll = combatData.enemy.effectiveAttackLevel * (MONSTERS[enemy].attackBonusRanged + 64);
                combatData.enemy.effectiveStrengthLevel = Math.floor(MONSTERS[enemy].rangedLevel + 8 + 1);
                combatData.enemy.maximumStrengthRoll = Math.floor(numberMultiplier * (1.3 + combatData.enemy.effectiveStrengthLevel / 10 + MONSTERS[enemy].strengthBonusRanged / 80 + combatData.enemy.effectiveStrengthLevel * MONSTERS[enemy].strengthBonusRanged / 640));
            } else if (MONSTERS[enemy].attackType === CONSTANTS.attackType.Magic) {
                combatData.enemy.effectiveAttackLevel = Math.floor(MONSTERS[enemy].magicLevel + 8 + 1);
                combatData.enemy.maximumAttackRoll = combatData.enemy.effectiveAttackLevel * (MONSTERS[enemy].attackBonusMagic + 64);
                combatData.enemy.maximumStrengthRoll = Math.floor(numberMultiplier * (SPELLS[MONSTERS[enemy].selectedSpell].maxHit + SPELLS[MONSTERS[enemy].selectedSpell].maxHit * (MONSTERS[enemy].damageBonusMagic / 100)));
            }
            $('#combat-enemy-name').text(MONSTERS[enemy].name);
            $('#combat-enemy-hitpoints-max').text(formatNumber(MONSTERS[enemy].hitpoints * numberMultiplier));
            $('#combat-enemy-hitpoints-current').text(formatNumber(MONSTERS[enemy].hitpoints * numberMultiplier));
            $('#combat-enemy-hitpoints-bar').css('width', '100%');
            $('#combat-enemy-attack-speed').text(MONSTERS[enemy].attackSpeed / 1000 + 's');
            $('#combat-enemy-attack-bonus').text(numberWithCommas(combatData.enemy.maximumAttackRoll));
            $('#combat-enemy-strength-bonus').text(numberWithCommas(combatData.enemy.maximumStrengthRoll));
            $('#combat-enemy-defence-evasion').text(numberWithCommas(combatData.enemy.maximumDefenceRoll));
            $('#combat-enemy-ranged-evasion').text(numberWithCommas(combatData.enemy.maximumRangedDefenceRoll));
            $('#combat-enemy-magic-evasion').text(numberWithCommas(combatData.enemy.maximumMagicDefenceRoll));
            $('#combat-enemy-attack-level').text(MONSTERS[enemy].attackLevel);
            $('#combat-enemy-strength-level').text(MONSTERS[enemy].strengthLevel);
            $('#combat-enemy-defence-level').text(MONSTERS[enemy].defenceLevel);
            $('#combat-enemy-ranged-level').text(MONSTERS[enemy].rangedLevel);
            $('#combat-enemy-magic-level').text(MONSTERS[enemy].magicLevel);
            $('#combat-enemy-combat-level').text(getMonsterCombatLevel(enemy));
            if (MONSTERS[enemy].attackType === CONSTANTS.attackType.Melee) {
                $('#combat-enemy-attack-type').attr('src', 'assets/media/skills/combat/combat.svg');
                $('#combat-enemy-attack-type').attr('data-original-title', 'Melee');
            } else if (MONSTERS[enemy].attackType === CONSTANTS.attackType.Ranged) {
                $('#combat-enemy-attack-type').attr('src', 'assets/media/skills/ranged/ranged.svg');
                $('#combat-enemy-attack-type').attr('data-original-title', 'Ranged');
            } else if (MONSTERS[enemy].attackType === CONSTANTS.attackType.Magic) {
                $('#combat-enemy-attack-type').attr('src', 'assets/media/skills/magic/magic.svg');
                $('#combat-enemy-attack-type').attr('data-original-title', 'Magic');
            }
            updateTooltips();
            $('#combat-enemy-img').html('');
            if (MONSTERS[enemy].isBoss || (isDungeon && dungeonCount === DUNGEONS[selectedDungeon].monsters.length - 1)) $('#combat-enemy-img').append('<img class="combat-enemy-img dungeon-boss" src="' + MONSTERS[enemy].media + '">');
            else $('#combat-enemy-img').append('<img class="combat-enemy-img" src="' + MONSTERS[enemy].media + '">');
            if (MONSTERS[enemy].description != undefined) {
                $('#combat-enemy-img').append('<br><span class="text-danger">' + MONSTERS[enemy].description + '</span>');
            }
            startCombat();
        }, enemySpawnTimer);
    }
}

function updateNav() {
    if (isInCombat) {
        $('#skill-nav-name-' + CONSTANTS.skill.Hitpoints).attr('class', 'nav-main-link-name text-success');
        if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].type === 'Ranged Weapon' || items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isRanged) {
            $('#skill-nav-name-' + CONSTANTS.skill.Ranged).addClass('text-success');
            $('#skill-nav-name-' + CONSTANTS.skill.Attack).removeClass('text-success');
            $('#skill-nav-name-' + CONSTANTS.skill.Strength).removeClass('text-success');
            $('#skill-nav-name-' + CONSTANTS.skill.Defence).removeClass('text-success');
            $('#skill-nav-name-' + CONSTANTS.skill.Magic).removeClass('text-success');
        } else if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isMagic) {
            $('#skill-nav-name-' + CONSTANTS.skill.Magic).addClass('text-success');
            $('#skill-nav-name-' + CONSTANTS.skill.Attack).removeClass('text-success');
            $('#skill-nav-name-' + CONSTANTS.skill.Strength).removeClass('text-success');
            $('#skill-nav-name-' + CONSTANTS.skill.Defence).removeClass('text-success');
            $('#skill-nav-name-' + CONSTANTS.skill.Ranged).removeClass('text-success');
        } else {
            $('#skill-nav-name-' + (attackStyle + 6)).addClass('text-success');
            $('#skill-nav-name-' + CONSTANTS.skill.Ranged).removeClass('text-success');
            $('#skill-nav-name-' + CONSTANTS.skill.Magic).removeClass('text-success');
        }
    } else {
        $('#skill-nav-name-' + CONSTANTS.skill.Attack).removeClass('text-success');
        $('#skill-nav-name-' + CONSTANTS.skill.Strength).removeClass('text-success');
        $('#skill-nav-name-' + CONSTANTS.skill.Defence).removeClass('text-success');
        $('#skill-nav-name-' + CONSTANTS.skill.Hitpoints).removeClass('text-success');
        $('#skill-nav-name-' + CONSTANTS.skill.Ranged).removeClass('text-success');
        $('#skill-nav-name-' + CONSTANTS.skill.Magic).removeClass('text-success');
    }
}

function updateSpellbook() {
    if (!items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isMagic) $('#combat-spellbook-notice').removeClass('d-none');
    else $('#combat-spellbook-notice').addClass('d-none');
    //$("#combat-spellbook").removeClass("d-none");
    //$("#combat-runes-container").removeClass("d-none");
    $('#combat-spellbook-container').html('');
    let spellbook = '<div class="row">';
    for (let i = 0; i < SPELLS.length; i++) {
        let runes = '';
        for (let r = 0; r < SPELLS[i].runesRequired.length; r++) {
            runes += SPELLS[i].runesRequired[r].qty + "<img class='skill-icon-sm' src='" + items[SPELLS[i].runesRequired[r].id].media + "'>";
        }
        if (i === selectedSpell) spellbook += '<div class="col-4 col-md-3"><ul class="nav nav-pills nav-justified push"><li class="nav-item mr-1"><a class="nav-link border border-success border-2x js-tooltip-enabled p-0" id="spell-select-' + i + '" href="javascript:selectSpell(' + i + ');" data-toggle="tooltip" data-html="true" data-placement="bottom" title="" data-original-title="<span class=\'text-warning\'>' + SPELLS[i].name + '</span><br><small>Max Hit: ' + SPELLS[i].maxHit * numberMultiplier + '<br>Requires:<br>' + runes + '"><img class="skill-icon-xs" src="' + SPELLS[i].media + '"></a></li></ul></div>';
        else if (SPELLS[i].magicLevelRequired > skillLevel[CONSTANTS.skill.Magic]) spellbook += '<div class="col-4 col-md-3" id="spell-select-' + i + '"><ul class="nav nav-pills nav-justified push"><li class="nav-item mr-1"><a class="nav-link border js-tooltip-enabled p-0" id="spell-select-' + i + '" data-toggle="tooltip" data-html="true" data-placement="bottom" title="" data-original-title="<span class=\'text-warning\'>Unlocked at Magic Level ' + SPELLS[i].magicLevelRequired + '"><img class="skill-icon-xs" src="assets/media/main/question.svg"></a></li></ul></div>';
        else spellbook += '<div class="col-4 col-md-3""><ul class="nav nav-pills nav-justified push"><li class="nav-item mr-1"><a class="nav-link border js-tooltip-enabled p-0" id="spell-select-' + i + '" href="javascript:selectSpell(' + i + ');" data-toggle="tooltip" data-html="true" data-placement="bottom" title="" data-original-title="<span class=\'text-warning\'>' + SPELLS[i].name + '</span><br><small>Max Hit: ' + SPELLS[i].maxHit * numberMultiplier + '<br>Requires:<br>' + runes + '"><img class="skill-icon-xs" src="' + SPELLS[i].media + '"></a></li></ul></div>';
    }
    spellbook += '</div>';
    $('#combat-spellbook-container').html(spellbook);
    updateTooltips();
    selectSpell(selectedSpell);
    /*}
    else { 
    	$("#combat-spellbook").addClass("d-none"); 
    	$("#combat-runes-container").addClass("d-none"); 
    }*/
}

function updateRunes() {
    let qty = 0;
    for (let i = 0; i < runecraftingItems.length; i++) {
        qty = 0;
        $('#combat-rune-qty-' + i).text(formatNumber(qty));
        for (let ii = 0; ii < bank.length; ii++) {
            if (bank[ii].id === runecraftingItems[i].itemID) $('#combat-rune-qty-' + i).text(formatNumber(bank[ii].qty));
        }
        if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].providesRune != undefined) {
            $('#combat-rune-qty-' + items[items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].providesRune].runecraftingID).text('∞ :D');
        }
        if (equippedItems[CONSTANTS.equipmentSlot.Cape] === CONSTANTS.item.Magic_Skillcape) {
            $('#combat-rune-qty-' + items[CONSTANTS.item.Air_Rune].runecraftingID).text('∞ :D');
            $('#combat-rune-qty-' + items[CONSTANTS.item.Water_Rune].runecraftingID).text('∞ :D');
            $('#combat-rune-qty-' + items[CONSTANTS.item.Earth_Rune].runecraftingID).text('∞ :D');
            $('#combat-rune-qty-' + items[CONSTANTS.item.Fire_Rune].runecraftingID).text('∞ :D');
        }
    }
}

function selectSpell(spell) {
    $('#spell-select-' + selectedSpell).removeClass('border-success border-2x');
    $('#spell-select-' + spell).addClass('border-success border-2x');
    selectedSpell = spell;
    let runes = [];
    for (let i = 0; i < SPELLS[selectedSpell].runesRequired.length; i++) {
        runes.push(SPELLS[selectedSpell].runesRequired[i].id);
    }
    for (let i = 0; i < runecraftingItems.length; i++) {
        if (runes.includes(runecraftingItems[i].itemID)) $('#combat-rune-' + i).addClass('border border-success');
        else $('#combat-rune-' + i).removeClass('border border-success');
    }
    if (!isCurrentlyEquipping && !isCurrentlyUnequipping) updatePlayerStats();
}

function loadCombatGear(refresh = false) {
    for (let i = 0; i < equippedItems.length; i++) {
        if (equippedItems[i] !== 0) {
            $('#combat-equipment-slot-' + i).attr('src', items[equippedItems[i]].media);
            $('#combat-equipment-slot-' + i + '-1').attr('src', items[equippedItems[i]].media);
        } else {
            $('#combat-equipment-slot-' + i).attr('src', 'assets/media/bank/' + emptyGear[i] + '.svg');
            $('#combat-equipment-slot-' + i + '-1').attr('src', 'assets/media/bank/' + emptyGear[i] + '.svg');
        }
    }
    if (!refresh) loadEquipmentSets();
    updateRunes();
    updateSpellbook();
    updateEquipmentHeader();
    updateEquipTooltips();
    updateTooltips();
}

function loadEquipmentSets() {
    updateEquipmentSetTooltips();
    //set available slots
    for (let i = 0; i < 3; i++) {
        if (equipmentSetCount >= i) {
            $('#combat-equipment-set-' + i).attr('class', 'btn btn-primary m-1 js-tooltip-enabled');
            $('#combat-equipment-set-' + i + '-1').attr('class', 'btn btn-sm btn-primary m-1 js-tooltip-enabled');
        } else {
            $('#combat-equipment-set-' + i).attr('data-original-title', 'Check the shop to unlock');
            $('#combat-equipment-set-' + i + '-1').attr('data-original-title', 'Check the shop to unlock');
        }
        if (selectedEquipmentSet === i) {
            $('#combat-equipment-set-' + i).attr('class', 'btn btn-success m-1 js-tooltip-enabled');
            $('#combat-equipment-set-' + i + '-1').attr('class', 'btn btn-sm btn-success m-1 js-tooltip-enabled');
        }
    }
}

function updateEquipmentSetTooltips() {
    //set tooltips
    let set;
    for (let i = 0; i < equipmentSets.length; i++) {
        set = '';
        for (let f = 0; f < equipmentSets[i].equipment.length; f++) {
            if (equipmentSets[i].equipment[f] > 0) set += '<img class="skill-icon-xxs mr-1" src="' + items[equipmentSets[i].equipment[f]].media + '">' + items[equipmentSets[i].equipment[f]].name + '<br>';
        }
        $('#combat-equipment-set-' + i).attr('data-original-title', set);
        $('#combat-equipment-set-' + i + '-1').attr('data-original-title', set);
    }
}
//for equiping gear - item uses itemID
function equipItem(bankItemID, item, qty = 1, equipmentSet) {
    if (equipmentSet === -1) equipmentSet = selectedEquipmentSet;
    if (isDungeon && isInCombat) notifyPlayer(CONSTANTS.skill.Attack, 'You cannot do that during a dungeon', 'danger');
    else {
        if (items[item].attackLevelRequired != undefined && skillLevel[CONSTANTS.skill.Attack] < items[item].attackLevelRequired) notifyPlayer(CONSTANTS.skill.Attack, "You don't have the required level to equip that.", 'danger');
        else if (items[item].defenceLevelRequired != undefined && skillLevel[CONSTANTS.skill.Defence] < items[item].defenceLevelRequired) notifyPlayer(CONSTANTS.skill.Defence, "You don't have the required level to equip that.", 'danger');
        else if (items[item].rangedLevelRequired != undefined && skillLevel[CONSTANTS.skill.Ranged] < items[item].rangedLevelRequired) notifyPlayer(CONSTANTS.skill.Ranged, "You don't have the required level to equip that.", 'danger');
        else if (items[item].magicLevelRequired != undefined && skillLevel[CONSTANTS.skill.Magic] < items[item].magicLevelRequired) notifyPlayer(CONSTANTS.skill.Magic, "You don't have the required level to equip that.", 'danger');
        else {
            isCurrentlyEquipping = true;
            let unequipCount = 0;
            //check if we are equipping a 2H - We need to remove the shield if we are
            if (items[item].isTwoHanded && equipmentSets[equipmentSet].equipment[CONSTANTS.equipmentSlot.Shield] != 0) {
                let checkForShield = checkBankForItem(equipmentSets[equipmentSet].equipment[CONSTANTS.equipmentSlot.Shield]);
                if (!checkForShield) {
                    unequipCount++;
                }
            }
            //Check if we are removing an existing equipped item
            if (equipmentSets[equipmentSet].equipment[items[item].equipmentSlot] != 0) {
                let checkForItem = checkBankForItem(equipmentSets[equipmentSet].equipment[items[item].equipmentSlot]);
                if (!checkForItem) {
                    unequipCount++;
                }
            }
            if (items[item].equipmentSlot === CONSTANTS.equipmentSlot.Shield && items[equipmentSets[equipmentSet].equipment[CONSTANTS.equipmentSlot.Weapon]].isTwoHanded) {
                let checkForSword = checkBankForItem(equipmentSets[equipmentSet].equipment[CONSTANTS.equipmentSlot.Weapon]);
                if (!checkForSword) {
                    unequipCount++;
                }
            }
            //See if we have enough bank space
            if (baseBankMax + bankMax >= bank.length + unequipCount) {
                let check = [true];
                if (equipmentSets[equipmentSet].equipment[items[item].equipmentSlot] != 0) {
                    if (items[item].equipmentSlot === CONSTANTS.equipmentSlot.Quiver) {
                        if (equipmentSets[equipmentSet].equipment[items[item].equipmentSlot] != item) check.push(unequipItem(items[item].equipmentSlot, equipmentSet));
                    } else check.push(unequipItem(items[item].equipmentSlot, equipmentSet));
                }
                if (items[item].isTwoHanded && equipmentSets[equipmentSet].equipment[CONSTANTS.equipmentSlot.Shield] != 0) check.push(unequipItem(CONSTANTS.equipmentSlot.Shield, equipmentSet));
                if (items[item].equipmentSlot === CONSTANTS.equipmentSlot.Shield && items[equipmentSets[equipmentSet].equipment[CONSTANTS.equipmentSlot.Weapon]].isTwoHanded) check.push(unequipItem(CONSTANTS.equipmentSlot.Weapon, equipmentSet));
                let unequipCheck = true;
                for (let i = 0; i < check.length; i++)
                    if (check[i] === false) unequipCheck = false;
                if (unequipCheck) {
                    $('.js-popover-enabled').each(function() {
                        $(this).popover('hide');
                    });
                    if (bank[bankItemID].qty < qty) {
                        qty = bank[bankItemID].qty;
                    }
                    updateItemInBank(bankItemID, item, -qty, false);
                    equipmentSets[equipmentSet].equipment[items[item].equipmentSlot] = item;
                    if (items[item].type === 'Ammo') {
                        equipmentSets[equipmentSet].ammo += qty;
                        ammo += qty;
                    }
                    currentlyEquipping = items[item].equipmentSlot;
                    updateNav();
                    setAttackStyle();
                    updateShop('gloves');
                    loadThieving();
                    updateSpellbook();
                    updateRunes();
                    updateEquipTooltips();
                    updateWCRates();
                    updateMiningRates();
                    updatePlayerStats();
                    updateEquipmentHeader();
                    updateSlayerAreaRequirements();
                    if (items[item].equipmentSlot === CONSTANTS.equipmentSlot.Weapon) window.setTimeout(function() {
                        updateAttackStyleOptions();
                    }, 100);
                    if (selectedEquipmentSet === equipmentSet) {
                        setEquipmentSet(equipmentSet);
                        $('#combat-equipment-slot-' + items[item].equipmentSlot).attr('src', items[item].media);
                        $('#combat-equipment-slot-' + items[item].equipmentSlot + '-1').attr('src', items[item].media);
                    }
                    updateEquipmentSetTooltips();
                    //saveData();
                    currentlyEquipping = null;
                }
            } else notifyPlayer(CONSTANTS.skill.Attack, "You can't fit your currently equipped items into your bank.", 'danger');
            isCurrentlyEquipping = false;
        }
    }
}

function unequipItem(equipmentSlot, equipmentSet = null) {
    if (equipmentSet === null) equipmentSet = selectedEquipmentSet;
    if (isDungeon && isInCombat) {
        notifyPlayer(CONSTANTS.skill.Attack, 'You cannot do that during a dungeon', 'danger');
        return false;
    } else {
        if (equipmentSets[equipmentSet].equipment[equipmentSlot] > 0) {
            if (slayerLockedItem !== null && equipmentSets[equipmentSet].equipment[equipmentSlot] === slayerLockedItem) {
                notifyPlayer(CONSTANTS.skill.Slayer, 'You cannot remove that item in this area', 'danger');
                return false;
            } else {
                isCurrentlyUnequipping = true;
                let itemQty = 1;
                if (items[equipmentSets[equipmentSet].equipment[equipmentSlot]].type === 'Ammo') {
                    itemQty = equipmentSets[equipmentSet].ammo;
                }
                let itemForBank = addItemToBank(equipmentSets[equipmentSet].equipment[equipmentSlot], itemQty, false);
                if (itemForBank) {
                    if (items[equipmentSets[equipmentSet].equipment[equipmentSlot]].type === 'Ammo') {
                        equipmentSets[equipmentSet].ammo = 0;
                    }
                    equipmentSets[equipmentSet].equipment[equipmentSlot] = 0;
                    if (selectedEquipmentSet === equipmentSet) {
                        $('#combat-equipment-slot-' + equipmentSlot).attr('src', 'assets/media/bank/' + emptyGear[equipmentSlot] + '.svg');
                        $('#combat-equipment-slot-' + equipmentSlot + '-1').attr('src', 'assets/media/bank/' + emptyGear[equipmentSlot] + '.svg');
                    }
                    currentlyUnequipping = equipmentSlot;
                    if (!isCurrentlyEquipping) {
                        setAttackStyle(attackStyle);
                        updateShop('gloves');
                        //saveData();
                        loadThieving();
                        updateSpellbook();
                        updateRunes();
                        updateEquipTooltips();
                        updateWCRates();
                        updateMiningRates();
                        updatePlayerStats();
                        updateEquipmentHeader();
                        setEquipmentSet(equipmentSet);
                        updateEquipmentSetTooltips();
                        updateSlayerAreaRequirements();
                    }
                    currentlyUnequipping = null;
                    isCurrentlyUnequipping = false;
                    return true;
                } else {
                    bankFullNotify();
                    isCurrentlyUnequipping = false;
                    return false;
                }
            }
        }
    }
}

function updateEquipTooltips() {
    let itemStat = '';
    for (let i = 0; i < equippedItems.length; i++) {
        if (equippedItems[i] > 0) {
            itemStat = '';
            if (items[equippedItems[i]].description != undefined) itemStat += '<br><span class="text-info">' + items[equippedItems[i]].description + '</span>';
            if (items[equippedItems[i]].attackBonus[0] > 0) itemStat += '<br>+' + items[equippedItems[i]].attackBonus[0] + ' Melee Stab Bonus';
            if (items[equippedItems[i]].attackBonus[0] < 0) itemStat += '<br><span class="text-danger">' + items[equippedItems[i]].attackBonus[0] + ' Melee Stab Bonus</span>';
            if (items[equippedItems[i]].attackBonus[1] > 0) itemStat += '<br>+' + items[equippedItems[i]].attackBonus[1] + ' Melee Slash Bonus';
            if (items[equippedItems[i]].attackBonus[1] < 0) itemStat += '<br><span class="text-danger">' + items[equippedItems[i]].attackBonus[1] + ' Melee Slash Bonus</span>';
            if (items[equippedItems[i]].attackBonus[2] > 0) itemStat += '<br>+' + items[equippedItems[i]].attackBonus[2] + ' Melee Block Bonus';
            if (items[equippedItems[i]].attackBonus[2] < 0) itemStat += '<br><span class="text-danger">' + items[equippedItems[i]].attackBonus[2] + ' Melee Block Bonus</span>';
            if (items[equippedItems[i]].strengthBonus != undefined && items[equippedItems[i]].strengthBonus > 0) itemStat += '<br>+' + items[equippedItems[i]].strengthBonus + ' Melee Strength Bonus';
            if (items[equippedItems[i]].strengthBonus != undefined && items[equippedItems[i]].strengthBonus < 0) itemStat += '<br><span class="text-danger">' + items[equippedItems[i]].strengthBonus + ' Melee Strength Bonus</span>';
            if (items[equippedItems[i]].rangedStrengthBonus != undefined && items[equippedItems[i]].rangedStrengthBonus > 0) itemStat += '<br>+' + items[equippedItems[i]].rangedStrengthBonus + ' Ranged Strength Bonus';
            if (items[equippedItems[i]].rangedStrengthBonus != undefined && items[equippedItems[i]].rangedStrengthBonus < 0) itemStat += '<br><span class="text-danger">' + items[equippedItems[i]].rangedStrengthBonus + ' Ranged Strength Bonus</span>';
            if (items[equippedItems[i]].defenceBonus != undefined && items[equippedItems[i]].defenceBonus > 0) itemStat += '<br>+' + items[equippedItems[i]].defenceBonus + ' Melee Defence Bonus';
            if (items[equippedItems[i]].defenceBonus != undefined && items[equippedItems[i]].defenceBonus < 0) itemStat += '<br><span class="text-danger">' + items[equippedItems[i]].defenceBonus + ' Melee Defence Bonus</span>';
            if (items[equippedItems[i]].rangedAttackBonus != undefined && items[equippedItems[i]].rangedAttackBonus > 0) itemStat += '<br>+' + items[equippedItems[i]].rangedAttackBonus + ' Ranged Attack Bonus';
            if (items[equippedItems[i]].rangedAttackBonus != undefined && items[equippedItems[i]].rangedAttackBonus < 0) itemStat += '<br><span class="text-danger">' + items[equippedItems[i]].rangedAttackBonus + ' Ranged Attack Bonus</span>';
            if (items[equippedItems[i]].rangedDefenceBonus != undefined && items[equippedItems[i]].rangedDefenceBonus > 0) itemStat += '<br>+' + items[equippedItems[i]].rangedDefenceBonus + ' Ranged Defence Bonus';
            if (items[equippedItems[i]].rangedDefenceBonus != undefined && items[equippedItems[i]].rangedDefenceBonus < 0) itemStat += '<br><span class="text-danger">' + items[equippedItems[i]].rangedDefenceBonus + ' Ranged Defence Bonus</span>';
            if (items[equippedItems[i]].magicAttackBonus != undefined && items[equippedItems[i]].magicAttackBonus > 0) itemStat += '<br>+' + items[equippedItems[i]].magicAttackBonus + ' Magic Attack Bonus';
            if (items[equippedItems[i]].magicAttackBonus != undefined && items[equippedItems[i]].magicAttackBonus < 0) itemStat += '<br><span class="text-danger">' + items[equippedItems[i]].magicAttackBonus + ' Magic Attack Bonus</span>';
            if (items[equippedItems[i]].magicDefenceBonus != undefined && items[equippedItems[i]].magicDefenceBonus > 0) itemStat += '<br>+' + items[equippedItems[i]].magicDefenceBonus + ' Magic Defence Bonus';
            if (items[equippedItems[i]].magicDefenceBonus != undefined && items[equippedItems[i]].magicDefenceBonus < 0) itemStat += '<br><span class="text-danger">' + items[equippedItems[i]].magicDefenceBonus + ' Magic Defence Bonus</span>';
            if (items[equippedItems[i]].magicDamageBonus != undefined && items[equippedItems[i]].magicDamageBonus > 0) itemStat += '<br>+' + items[equippedItems[i]].magicDamageBonus + '% Magic Attack Bonus';
            if (items[equippedItems[i]].magicDamageBonus != undefined && items[equippedItems[i]].magicDamageBonus < 0) itemStat += '<br><span class="text-danger">' + items[equippedItems[i]].magicDamageBonus + '% Magic Damage Bonus</span>';
            if (items[equippedItems[i]].damageReduction != undefined && items[equippedItems[i]].damageReduction > 0) itemStat += '<br>+' + items[equippedItems[i]].damageReduction + '% Damage Reduction';
            if (items[equippedItems[i]].damageReduction != undefined && items[equippedItems[i]].damageReduction < 0) itemStat += '<br><span class="text-danger">' + items[equippedItems[i]].damageReduction + '% Damage Reduction</span>';
            $('#combat-equipment-slot-' + i).attr('data-original-title', '<span class="text-warning">' + items[equippedItems[i]].name + "</span><small class='text-success'>" + itemStat + '</small><br><small>(Left-click to unequip)</small>');
            $('#combat-equipment-slot-' + i + '-1').attr('data-original-title', '<span class="text-warning">' + items[equippedItems[i]].name + "</span><small class='text-success'>" + itemStat + '</small><br><small>(Left-click to unequip)</small>');
        } else {
            $('#combat-equipment-slot-' + i).attr('data-original-title', 'Empty');
            $('#combat-equipment-slot-' + i + '-1').attr('data-original-title', 'Empty');
        }
    }
}

function updatePlayerStats() {
    playerAttackSpeed = 4000;
    //MELEE
    let attackBonus = 0;
    let strengthBonus = 0;
    let defenceBonus = 0;
    //RANGED
    let attackBonusRanged = 0;
    let defenceBonusRanged = 0;
    let strengthBonusRanged = 0;
    //MAGIC
    let attackBonusMagic = 0;
    let defenceBonusMagic = 0;
    let damageBonusMagic = 0;
    //OTHER
    let attackStyleBonus = 1;
    let meleeDefenceBonus = 1;
    let rangedDefenceBonus = 1;
    let magicDefenceBonus = 1;
    damageReduction = 0;
    chanceToDoubleLoot = 0;
    let herbloreBonus = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (herbloreBonuses[13].bonus[0] !== null) {
        herbloreBonus[herbloreBonuses[13].bonus[0]] = herbloreBonuses[13].bonus[1];
    }
    damageReduction += herbloreBonus[8];
    for (let i = 0; i < equippedItems.length; i++) {
        if (equippedItems[i] != 0) {
            if (items[equippedItems[i]].attackBonus[attackStyle] !== undefined) attackBonus += items[equippedItems[i]].attackBonus[attackStyle];
            if (items[equippedItems[i]].defenceBonus !== undefined) defenceBonus += items[equippedItems[i]].defenceBonus;
            if (items[equippedItems[i]].strengthBonus !== undefined) strengthBonus += items[equippedItems[i]].strengthBonus;
            if (items[equippedItems[i]].damageReduction !== undefined) damageReduction += items[equippedItems[i]].damageReduction;
            if (items[equippedItems[i]].rangedAttackBonus !== undefined) attackBonusRanged += items[equippedItems[i]].rangedAttackBonus;
            if (items[equippedItems[i]].rangedDefenceBonus !== undefined) defenceBonusRanged += items[equippedItems[i]].rangedDefenceBonus;
            if (items[equippedItems[i]].rangedStrengthBonus !== undefined) strengthBonusRanged += items[equippedItems[i]].rangedStrengthBonus;
            if (items[equippedItems[i]].magicAttackBonus !== undefined) attackBonusMagic += items[equippedItems[i]].magicAttackBonus;
            if (items[equippedItems[i]].magicDefenceBonus !== undefined) defenceBonusMagic += items[equippedItems[i]].magicDefenceBonus;
            if (items[equippedItems[i]].magicDamageBonus !== undefined) damageBonusMagic += items[equippedItems[i]].magicDamageBonus;
            if (items[equippedItems[i]].chanceToDoubleLoot !== undefined) chanceToDoubleLoot += items[equippedItems[i]].chanceToDoubleLoot;
        }
    }
    //RANGED
    if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].type === 'Ranged Weapon' || items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isRanged) {
        if (attackStyle === CONSTANTS.attackStyle.Accurate) {
            attackStyleBonus += 3;
            playerAttackSpeed = items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].attackSpeed;
        } else if (attackStyle === CONSTANTS.attackStyle.Rapid) {
            playerAttackSpeed = items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].attackSpeed - 400;
        } else if (attackStyle === CONSTANTS.attackStyle.Longrange) {
            meleeDefenceBonus += 3;
            playerAttackSpeed = items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].attackSpeed;
        }
        effectiveAttackLevel = Math.floor(skillLevel[CONSTANTS.skill.Ranged] + 8 + attackStyleBonus);
        maximumAttackRoll = Math.floor(effectiveAttackLevel * (attackBonusRanged + 64) * (1 + herbloreBonus[3] / 100) * (1 + prayerBonusAttackRanged / 100));
        effectiveStrengthLevel = Math.floor(skillLevel[CONSTANTS.skill.Ranged] + attackStyleBonus);
        baseMaxHit = Math.floor(numberMultiplier * ((1.3 + effectiveStrengthLevel / 10 + strengthBonusRanged / 80 + effectiveStrengthLevel * strengthBonusRanged / 640) * (1 + herbloreBonus[4] / 100) * (1 + prayerBonusStrengthRanged / 100)));
    } else if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isMagic) {
        effectiveAttackLevel = Math.floor(skillLevel[CONSTANTS.skill.Magic] + 8 + attackStyleBonus);
        maximumAttackRoll = Math.floor(effectiveAttackLevel * (attackBonusMagic + 64) * (1 + herbloreBonus[5] / 100) * (1 + prayerBonusAttackMagic / 100));
        //effectiveStrengthLevel = Math.floor(skillLevel[CONSTANTS.skill.Magic] + attackStyleBonus);
        baseMaxHit = Math.floor(numberMultiplier * ((SPELLS[selectedSpell].maxHit + SPELLS[selectedSpell].maxHit * (damageBonusMagic / 100)) * (1 + prayerBonusDamageMagic / 100) * (1 + herbloreBonus[6] / 100)));
    } else {
        //MELEE
        effectiveAttackLevel = Math.floor(skillLevel[CONSTANTS.skill.Attack] + 8 + attackStyleBonus);
        maximumAttackRoll = Math.floor(effectiveAttackLevel * (attackBonus + 64) * (1 + herbloreBonus[0] / 100) * (1 + prayerBonusAttack / 100));
        effectiveStrengthLevel = Math.floor(skillLevel[CONSTANTS.skill.Strength] + 8 + 1);
        baseMaxHit = Math.floor(numberMultiplier * ((1.3 + effectiveStrengthLevel / 10 + strengthBonus / 80 + effectiveStrengthLevel * strengthBonus / 640) * (1 + herbloreBonus[2] / 100) * (1 + prayerBonusStrength / 100)));
    }
    $('#combat-player-attack-bonus').text(numberWithCommas(maximumAttackRoll));
    $('#combat-player-strength-bonus').text(baseMaxHit);
    $('#combat-player-damage-reduction').text(damageReduction + '%');
    //Melee defence
    effectiveDefenceLevel = Math.floor(skillLevel[CONSTANTS.skill.Defence] + 8 + meleeDefenceBonus);
    maximumDefenceRoll = Math.floor(effectiveDefenceLevel * (defenceBonus + 64) * (1 + herbloreBonus[1] / 100) * (1 + prayerBonusDefence / 100));
    $('#combat-player-defence-bonus').text(numberWithCommas(maximumDefenceRoll));
    //Ranged Defence
    effectiveRangedDefenceLevel = Math.floor(skillLevel[CONSTANTS.skill.Defence] + 8 + 1);
    maximumRangedDefenceRoll = Math.floor(effectiveRangedDefenceLevel * (defenceBonusRanged + 64) * (1 + herbloreBonus[3] / 100) * (1 + prayerBonusDefenceRanged / 100));
    $('#combat-player-defence-bonus-ranged').text(numberWithCommas(maximumRangedDefenceRoll));
    //Magic Defence
    effectiveMagicDefenceLevel = Math.floor(skillLevel[CONSTANTS.skill.Magic] * 0.7 + skillLevel[CONSTANTS.skill.Defence] * 0.3);
    maximumMagicDefenceRoll = Math.floor(effectiveMagicDefenceLevel * (defenceBonusMagic + 64) * (1 + herbloreBonus[5] / 100) * (1 + prayerBonusDefenceMagic / 100) + 8 + 1);
    $('#combat-player-defence-bonus-magic').text(numberWithCommas(maximumMagicDefenceRoll));
    //attack speed
    if (equippedItems[CONSTANTS.equipmentSlot.Weapon] != 0 && items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].type != 'Ranged Weapon') {
        playerAttackSpeed = items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].attackSpeed;
    }
    $('#combat-player-attack-speed').text(playerAttackSpeed / 1000 + 's');
    updateSpecialAttack();
    updateAmmo();
    updateTooltips();
}

function updateAmmo() {
    $('#combat-player-ammo').text(formatNumber(ammo));
    $('#combat-player-ammo-1').text(formatNumber(ammo));
    if (ammo < 1) {
        equippedItems[CONSTANTS.equipmentSlot.Quiver] = 0;
        equipmentSets[selectedEquipmentSet].equipment[CONSTANTS.equipmentSlot.Quiver] = 0;
    }
}

function setAttackStyle(style = attackStyle) {
    $('#combat-attack-style-' + attackStyle).attr('class', 'btn btn-outline-secondary m-1');
    if (isInCombat) {
        $('#skill-nav-name-' + (attackStyle + 6)).attr('class', 'nav-main-link-name');
    }
    if (style < 3) selectedAttackStyle[0] = style;
    else if (style < 6) selectedAttackStyle[1] = style;
    else selectedAttackStyle[2] = style;
    if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].type === 'Ranged Weapon' || items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isRanged) {
        //if ((attackStyle < 3) || (attackStyle > 5))
        attackStyle = selectedAttackStyle[1];
        if (isInCombat) {
            $('#skill-nav-name-' + CONSTANTS.skill.Ranged).attr('class', 'nav-main-link-name text-success');
        }
        $('#combat-skill-img-1').attr('src', 'assets/media/skills/ranged/ranged.svg');
        $('#combat-skill-img-2').attr('src', 'assets/media/skills/ranged/ranged.svg');
    } else if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isMagic) {
        //if (attackStyle < 6)
        attackStyle = selectedAttackStyle[2];
        $('#combat-skill-img-1').attr('src', 'assets/media/skills/magic/magic.svg');
        $('#combat-skill-img-2').attr('src', 'assets/media/skills/magic/magic.svg');
    } else {
        //if (attackStyle > 2)
        attackStyle = selectedAttackStyle[0];
        $('#combat-skill-img-1').attr('src', 'assets/media/skills/combat/' + setToLowercase(skillName[attackStyleSkills[attackStyle]]) + '.svg');
        $('#combat-skill-img-2').attr('src', 'assets/media/skills/combat/' + setToLowercase(skillName[attackStyleSkills[attackStyle]]) + '.svg');
    }
    $('#combat-attack-style-' + attackStyle).attr('class', 'btn btn-secondary m-1');
    if (!isCurrentlyEquipping && !isCurrentlyUnequipping) {
        updatePlayerStats();
        //saveData();
    }
    updateTooltips();
}

function updateAttackStyleOptions() {
    if (currentlyEquipping === CONSTANTS.equipmentSlot.Weapon || currentlyUnequipping === CONSTANTS.equipmentSlot.Weapon || currentlyUnequipping === null) {
        $('[data-toggle="tooltip"]').tooltip('hide');
        for (let i = 0; i < 8; i++) {
            $('#combat-attack-style-' + i).addClass('d-none');
        }
        if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].type === 'Ranged Weapon' || items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isRanged) {
            $('#combat-attack-style-3').removeClass('d-none');
            $('#combat-attack-style-4').removeClass('d-none');
            $('#combat-attack-style-5').removeClass('d-none');
        } else if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isMagic) {
            $('#combat-attack-style-6').removeClass('d-none');
            $('#combat-attack-style-7').removeClass('d-none');
        } else {
            $('#combat-attack-style-0').removeClass('d-none');
            $('#combat-attack-style-1').removeClass('d-none');
            $('#combat-attack-style-2').removeClass('d-none');
        }
        updateTooltips();
        $('#combat-attack-style-' + attackStyle).attr('class', 'btn btn-secondary m-1');
    }
}
//for displaying and handling area selection
function showMap() {
    resetEnemyScreen();
    selectedCombatArea = null;
    slayerLockedItem = null;
    //loadCombatAreas();
    $('#combat-area-selection').removeClass('d-none');
    $('html,body').scrollTop(0);
}

function viewCombatDetails(combatArea) {
    selectedCombatArea = combatArea;
    $('#combat-details-name').html(combatAreas[combatArea].areaName);
    $('#combat-details-img').attr('src', combatAreas[combatArea].media);
    $('#combat-enemies').html('');
    let canSee = true;
    if (combatAreas[combatArea].type === 'slayer') {
        $('#combat-details-slayer-level').text('Level Required: ' + combatAreas[combatArea].slayerLevel);
        $('#combat-details-slayer-level').removeClass('d-none');
        $('#combat-details-slayer-level-img').removeClass('d-none');
        if (skillLevel[CONSTANTS.skill.Slayer] < combatAreas[combatArea].slayerLevel) canSee = false;
        if (combatAreas[combatArea].slayerItem > 0) {
            $('#combat-details-slayer-item').text(items[combatAreas[combatArea].slayerItem].name + ' required to be equipped');
            $('#combat-details-slayer-item').removeClass('d-none');
            $('#combat-details-slayer-item-img').attr('src', items[combatAreas[combatArea].slayerItem].media);
            $('#combat-details-slayer-item-img').removeClass('d-none');
            if (!equippedItems.includes(combatAreas[combatArea].slayerItem)) canSee = false;
            if (equippedItems.includes(CONSTANTS.item.Slayer_Skillcape)) canSee = true;
        } else {
            $('#combat-details-slayer-item').addClass('d-none');
            $('#combat-details-slayer-item-img').addClass('d-none');
        }
    } else {
        $('#combat-details-slayer-level').addClass('d-none');
        $('#combat-details-slayer-level-img').addClass('d-none');
        $('#combat-details-slayer-item').addClass('d-none');
        $('#combat-details-slayer-item-img').addClass('d-none');
    }
    if (canSee) {
        let areaEnemies = '';
        let drops = '';
        let attackType = '';
        for (let i = 0; i < combatAreas[combatArea].monsters.length; i++) {
            if (MONSTERS[combatAreas[combatArea].monsters[i]].attackType === CONSTANTS.attackType.Melee) attackType = '<img class="skill-icon-xs m-2" src="assets/media/skills/combat/combat.svg">';
            if (MONSTERS[combatAreas[combatArea].monsters[i]].attackType === CONSTANTS.attackType.Ranged) attackType = '<img class="skill-icon-xs m-2" src="assets/media/skills/ranged/ranged.svg">';
            if (MONSTERS[combatAreas[combatArea].monsters[i]].attackType === CONSTANTS.attackType.Magic) attackType = '<img class="skill-icon-xs m-2" src="assets/media/skills/magic/magic.svg">';
            drops = '';
            for (let ii = 0; ii < MONSTERS[combatAreas[combatArea].monsters[i]].lootTable.length; ii++) {
                drops += "<img class='skill-icon-xs mr-2' src='" + items[MONSTERS[combatAreas[combatArea].monsters[i]].lootTable[ii][0]].media + "'>" + items[MONSTERS[combatAreas[combatArea].monsters[i]].lootTable[ii][0]].name + '<br>';
            }
            areaEnemies += '<button type="button" class="btn btn-lg btn-outline-secondary js-tooltip-enabled" style="width: 100%" onClick="selectMonster(' + combatAreas[combatArea].monsters[i] + ')" data-dismiss="modal" data-toggle="tooltip" data-html="true" data-placement="left" title="" data-original-title="<small class=\'text-info\'>Possible Drops:</small><br><small>' + drops + '</small>">';
            areaEnemies += '<div class="media d-flex align-items-center push"><div class="mr-3">';
            areaEnemies += '<img class="shop-img" src="' + MONSTERS[combatAreas[combatArea].monsters[i]].media + '">';
            areaEnemies += '<div class="font-size-sm"><img class="skill-icon-xs m-1" src="assets/media/skills/hitpoints/hitpoints.svg">' + MONSTERS[combatAreas[combatArea].monsters[i]].hitpoints * numberMultiplier + '</div>';
            areaEnemies += '</div><div class="media-body">';
            areaEnemies += '<div class="font-w600 text-uppercase">' + MONSTERS[combatAreas[combatArea].monsters[i]].name + '</div>';
            areaEnemies += '<div class="font-size-sm">Combat Level: ' + getMonsterCombatLevel(combatAreas[combatArea].monsters[i]) + '</div>';
            areaEnemies += '<div class="font-size-sm">Attack Type: ' + attackType + '</div>';
            if (showEnemySkillLevels) {
                areaEnemies += '<div class="font-size-sm"><img class="skill-icon-xs m-1" src="assets/media/skills/attack/attack.svg">' + MONSTERS[combatAreas[combatArea].monsters[i]].attackLevel;
                areaEnemies += '<img class="skill-icon-xs m-1" src="assets/media/skills/strength/strength.svg">' + MONSTERS[combatAreas[combatArea].monsters[i]].strengthLevel;
                areaEnemies += '</div><div class="font-size-sm">';
                areaEnemies += '<img class="skill-icon-xs m-1" src="assets/media/skills/defence/defence.svg">' + MONSTERS[combatAreas[combatArea].monsters[i]].defenceLevel;
                areaEnemies += '<img class="skill-icon-xs m-1" src="assets/media/skills/ranged/ranged.svg">' + MONSTERS[combatAreas[combatArea].monsters[i]].rangedLevel;
                areaEnemies += '<img class="skill-icon-xs m-1" src="assets/media/skills/magic/magic.svg">' + MONSTERS[combatAreas[combatArea].monsters[i]].magicLevel;
                areaEnemies += '</div>';
            }
            areaEnemies += '</button>';
        }
        $('#combat-enemies').html(areaEnemies);
    }
    updateTooltips();
    $('#modal-combat-details').modal('show');
}

function viewDungeonDetails(dungeon) {
    $('#dungeon-details-name').html(DUNGEONS[dungeon].name);
    $('#dungeon-details-img').attr('src', DUNGEONS[dungeon].media);
    $('#dungeon-details-type').html('Type: ' + DUNGEONS[dungeon].type);
    $('#dungeon-details-start-btn').attr('onClick', 'selectDungeon(' + dungeon + ')');
    $('#dungeon-details-difficulty').html(DUNGEONS[dungeon].difficulty);
    switch (DUNGEONS[dungeon].difficulty) {
        case 0:
            $('#dungeon-details-difficulty').html('Difficulty: <small class="badge badge-pill badge-success">Easy</small>');
            break;
        case 1:
            $('#dungeon-details-difficulty').html('Difficulty: <small class="badge badge-pill badge-warning">Medium</small>');
            break;
        case 2:
            $('#dungeon-details-difficulty').html('Difficulty: <small class="badge badge-pill badge-warning">Hard</small>');
            break;
        case 3:
            $('#dungeon-details-difficulty').html('Difficulty: <small class="badge badge-pill badge-danger">Very Hard</small>');
            break;
        case 4:
            $('#dungeon-details-difficulty').html('Difficulty: <small class="badge badge-pill badge-primary">Legendary</small>');
            break;
    }
    $('#dungeon-details-monster-count').html('Enemies: <small class="badge badge-pill badge-info">' + DUNGEONS[dungeon].monsters.length + '</small>');
    $('#dungeon-details-rewards').html('Rewards:<br>');
    let itemName;
    for (let i = 0; i < DUNGEONS[dungeon].rewards.length; i++) {
        itemName = items[DUNGEONS[dungeon].rewards[i]].name;
        if (items[DUNGEONS[dungeon].rewards[i]].canOpen) itemName = '<a href="javascript:viewItemContents(' + DUNGEONS[dungeon].rewards[i] + ')">' + items[DUNGEONS[dungeon].rewards[i]].name + '</a>';
        $('#dungeon-details-rewards').append('<img class="skill-icon-xs mr-2" src="' + items[DUNGEONS[dungeon].rewards[i]].media + '">' + itemName + '<br>');
    }
    $('#modal-dungeon-details').modal('show');
}

function selectCombatArea(combatArea) {
    $('#combat-area-selection').addClass('d-none');
    $('#combat-select-area-0').addClass('d-none');
    $('#combat-select-area-1').addClass('d-none');
    $('#combat-select-area-2').addClass('d-none');
    $('#combat-select-' + combatArea).removeClass('bg-success');
    //$("#combat-area-container").addClass("d-none");
    //$("#combat-dungeon-container").addClass("d-none");
    //$("#combat-map").addClass("d-none");
    //$("#combat-view-switch").addClass("d-none");
    selectedCombatArea = combatArea;
    if (combatArea !== null) {
        if (combatAreas[combatArea].slayerItem > 0) {
            slayerLockedItem = combatAreas[selectedCombatArea].slayerItem;
        }
    }
    window.location.hash = 'combat-fight-container-enemy';
}

function loadEquippedFood() {
    $('#combat-food-container').html('');
    $('#thieving-food-container').html('');
    let foodContainer = '<div class="btn-group">';
    if (equippedFood[currentCombatFood].qty > 0) {
        foodContainer += '<button type="button" class="btn btn-outline-secondary text-combat-smoke font-size-sm" onClick="eatFood();"> (' + equippedFood[currentCombatFood].qty + ')<img class="combat-food" src="' + items[equippedFood[currentCombatFood].itemID].media + '">+' + items[equippedFood[currentCombatFood].itemID].healsFor * numberMultiplier + ' HP</button>';
    } else {
        foodContainer += '<button type="button" class="btn btn-outline-secondary"><img class="combat-food" src="assets/media/skills/combat/food_empty.svg"> Empty</button>';
    }
    foodContainer += '<button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" id="dropdown-food-select" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
    foodContainer += '<span class="sr-only">Toggle Dropdown</span>';
    foodContainer += '</button>';
    foodContainer += '<div class="dropdown-menu font-size-sm" aria-labelledby="dropdown-food-select" x-placement="bottom-start" style="position: absolute; transform: translate3d(74px, 38px, 0px); top: 0px; left: 0px; will-change: transform;">';
    for (i = 0; i < equippedFood.length; i++) {
        if (equippedFood[i].itemID != 0) {
            foodContainer += '<a class="dropdown-item" id="combat-food-select-' + i + '" href="javascript:selectEquippedFood(' + i + ')">(' + equippedFood[i].qty + ')<img class="combat-food" src="' + items[equippedFood[i].itemID].media + '">+' + items[equippedFood[i].itemID].healsFor * numberMultiplier + ' HP</a>';
        } else {
            foodContainer += '<a class="dropdown-item" id="combat-food-select-' + i + '" href="javascript:selectEquippedFood(' + i + ')"><img class="combat-food" src="assets/media/skills/combat/food_empty.svg"> Empty</a>';
        }
    }
    if (equippedFood[currentCombatFood].itemID != 0) {
        foodContainer += '<div class="dropdown-divider"></div>';
        foodContainer += '<a class="dropdown-item text-danger" href="javascript:unequipFood(' + currentCombatFood + ')">Unequip</a>';
    }
    foodContainer += '</div></div>';
    $('#combat-food-container').append(foodContainer);
    $('#thieving-food-container').append(foodContainer);
}

function selectEquippedFood(food) {
    if (isDungeon && isInCombat) {
        notifyPlayer(CONSTANTS.skill.Attack, 'You cannot do that during a dungeon', 'danger');
    } else {
        currentCombatFood = food;
        loadEquippedFood();
        //saveData();
    }
}

function eatFood(efficiency = 100, autoEat = false) {
    if (equippedFood[currentCombatFood].qty > 0 && combatData.player.hitpoints < skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier) {
        if (currentAutoEat > 0 && autoEat) efficiency = autoEatData[currentAutoEat - 1].efficiency;
        let hp = Math.floor(items[equippedFood[currentCombatFood].itemID].healsFor * numberMultiplier * (efficiency / 100));
        statsCombat[6].count += items[equippedFood[currentCombatFood].itemID].healsFor * numberMultiplier;
        itemStats[equippedFood[currentCombatFood].itemID].timesEaten++;
        if (combatData.player.hitpoints + hp > skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier) hp = skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier - combatData.player.hitpoints;
        itemStats[equippedFood[currentCombatFood].itemID].healedFor += hp;
        if (autoEat) {
            updatePlayerHitpoints(hp, false);
            if (autoEatNotify) notifyPlayer(CONSTANTS.skill.Hitpoints, 'Auto eating activated', 'success');
            autoEatNotify = false;
            window.setTimeout(function() {
                autoEatNotify = true;
            }, 2000);
        } else updatePlayerHitpoints(hp);
        equippedFood[currentCombatFood].qty--;
        if (equippedFood[currentCombatFood].qty < 1) {
            equippedFood[currentCombatFood].itemID = 0;
        }
        loadEquippedFood();
        statsCombat[5].count++;
        updateStats('combat');
        //saveData();
        if (autoEat && combatData.player.hitpoints < skillLevel[CONSTANTS.skill.Hitpoints] * numberMultiplier * (autoEatData[currentAutoEat - 1].maxHP / 100)) eatFood(autoEatData[currentAutoEat - 1].efficiency, true);
    }
}

function equipFood(bankID, itemID, qty) {
    if (isDungeon && isInCombat) {
        notifyPlayer(CONSTANTS.skill.Attack, 'You cannot do that during a dungeon', 'danger');
    } else {
        let equipped = false;
        //check if already equipped exists first
        for (i = 0; i < equippedFood.length; i++) {
            if (equippedFood[i].itemID === itemID) {
                if (bank[bankID].qty >= qty) {
                    equippedFood[i].qty += qty;
                    bank[bankID].qty -= qty;
                } else {
                    equippedFood[i].qty += bank[bankID].qty;
                    bank[bankID].qty = 0;
                }
                if (bank[bankID].qty === 0) {
                    $('.js-popover-enabled').each(function() {
                        $(this).popover('hide');
                    });
                    removeItemFromBank(bankID);
                } else {
                    $('.js-popover-enabled').each(function() {
                        $(this).popover('hide');
                    });
                    //Update the item in the bank to show new qty
                    updateItemInBank(bankID, itemID, bank[bankID].qty, true);
                }
                loadEquippedFood();
                //saveData();
                equipped = true;
                break;
            }
        }
        //then check for empty slot
        if (!equipped) {
            for (i = 0; i < equippedFood.length; i++) {
                if (equippedFood[i].itemID === 0) {
                    equippedFood[i].itemID = itemID;
                    if (bank[bankID].qty >= qty) {
                        equippedFood[i].qty = qty;
                        bank[bankID].qty -= qty;
                    } else {
                        equippedFood[i].qty = bank[bankID].qty;
                        bank[bankID].qty = 0;
                    }
                    if (bank[bankID].qty === 0) {
                        $('.js-popover-enabled').each(function() {
                            $(this).popover('hide');
                        });
                        removeItemFromBank(bankID);
                    } else {
                        //Update the item in the bank to show new qty
                        $('.js-popover-enabled').each(function() {
                            $(this).popover('hide');
                        });
                        updateItemInBank(bankID, itemID, bank[bankID].qty, true);
                    }
                    loadEquippedFood();
                    //saveData();
                    equipped = true;
                    break;
                }
            }
        }
        if (!equipped) {
            One.helpers('notify', {
                type: 'danger',
                from: 'bottom',
                align: 'center',
                message: 'You need to free up a slot to equip that.'
            });
        }
    }
}

function unequipFood() {
    if (isDungeon && isInCombat) {
        notifyPlayer(CONSTANTS.skill.Attack, 'You cannot do that during a dungeon', 'danger');
    } else {
        let addFoodToBank = addItemToBank(equippedFood[currentCombatFood].itemID, equippedFood[currentCombatFood].qty, false);
        if (addFoodToBank) {
            equippedFood[currentCombatFood].itemID = 0;
            equippedFood[currentCombatFood].qty = 0;
            loadEquippedFood();
            //saveData();
        } else {
            One.helpers('notify', {
                type: 'danger',
                from: 'bottom',
                align: 'center',
                message: 'Your bank is too full to do that!'
            });
        }
    }
}

function loadLoot() {
    $('[data-toggle="tooltip"]').tooltip('hide');
    $('#combat-loot-container').html('');
    let combatLoot = '';
    let description = '';
    let spec = '';
    let hp = '';
    for (let i = 0; i < droppedLoot.length; i++) {
        description = '';
        spec = '';
        hp = '';
        if (items[droppedLoot[i].itemID].description !== undefined) description = "<small class='text-info'>" + items[droppedLoot[i].itemID].description + '</small><br>';
        if (items[droppedLoot[i].itemID].hasSpecialAttack) spec = "<small class='text-success'>Special Attack: <span class='text-warning'>" + items[droppedLoot[i].itemID].specialAttack + '</span></small>';
        if (items[droppedLoot[i].itemID].canEat) hp = "<img class='skill-icon-xs ml-2' src='assets/media/skills/hitpoints/hitpoints.svg'> <span class='text-success'>+" + items[droppedLoot[i].itemID].healsFor * numberMultiplier + '</span>';
        combatLoot += '<div class="js-tooltip-enabled" data-toggle="tooltip" data-html="true" data-placement="top" title="" data-original-title="<div class=\'media d-flex align-items-center push\'><div class=\'mr-3\'><img class=\'bank-img m-1\' src=\'' + items[droppedLoot[i].itemID].media + "'></div><div class='media-body'><div class='font-w600'>" + items[droppedLoot[i].itemID].name + '</div>' + description + spec + "<div class='font-size-sm'><img class='skill-icon-xs' src='assets/media/main/coins.svg'> " + items[droppedLoot[i].itemID].sellsFor + hp + '</div></div></div>"><a class="btn btn-lg btn-light" role="button" id="loot-' + i + '" onClick="collectLoot(' + i + ',' + droppedLoot[i].itemID + ',' + droppedLoot[i].qty + ');" style="margin: 10px;"><img class="bank-img" src="' + items[droppedLoot[i].itemID].media + '"><br><div class="font-size-sm font-w600 text-center text-uppercase">' + droppedLoot[i].qty + '</div></a></div>';
        //combatLoot += '<a class="btn btn-lg btn-light" role="button" id="loot-' + i + '" onClick="collectLoot(' + i + ',' + droppedLoot[i].itemID + ','+ droppedLoot[i].qty + ');" style="margin: 10px;"><img class="bank-img" src="' + items[droppedLoot[i].itemID].media + '"><br><div class="font-size-sm font-w600 text-center text-uppercase">'+ droppedLoot[i].qty +'</div></a>';
    }
    $('#combat-loot-container').append(combatLoot);
    $('#combat-loot-text').text('Loot to Collect (' + droppedLoot.length + ' / ' + itemDropMax + ')');
    updateTooltips();
}

function dropLoot(enemy) {
    //DROP BONES
    if (!isDungeon) {
        let qty = 1;
        if (chanceToDoubleLoot > 0) {
            let chance = Math.floor(Math.random() * 100);
            if (chance < chanceToDoubleLoot) qty *= 2;
        }
        if (equippedItems[CONSTANTS.equipmentSlot.Amulet] === CONSTANTS.item.Amulet_of_Looting) {
            let addBoneToBank = addItemToBank(MONSTERS[enemy].bones, qty);
            if (!addBoneToBank) {
                bankFullNotify();
            }
        } else {
            let stacked = false;
            for (let i = 0; i < droppedLoot.length; i++) {
                if (droppedLoot[i].itemID === MONSTERS[enemy].bones) {
                    droppedLoot[i].qty += qty;
                    stacked = true;
                    break;
                }
            }
            if (!stacked) {
                if (droppedLoot.length >= itemDropMax) droppedLoot.splice(itemDropMax - 1, 1);
                droppedLoot.unshift({ itemID: MONSTERS[enemy].bones, qty: qty });
            }
        }
    }
    let lootChance = 100;
    if (MONSTERS[enemy].lootChance != undefined) {
        lootChance = Math.floor(Math.random() * 100) + MONSTERS[enemy].lootChance;
    }
    if (lootChance >= 100) {
        let qtyLootToDrop = 1;
        let itemQty = 1;
        if (isDungeon) qtyLootToDrop = DUNGEONS[selectedDungeon].rewardCount;
        for (let i = 0; i < qtyLootToDrop; i++) {
            if (droppedLoot.length >= itemDropMax) droppedLoot.splice(itemDropMax - 1, 1);
            let itemToDrop = selectFromLootTable(CONSTANTS.skill.Hitpoints, enemy);
            if (equippedItems.includes(CONSTANTS.item.Gold_Topaz_Ring)) {
                let chanceForRing = Math.random() * 500000;
                let cbLevel = getMonsterCombatLevel(enemy);
                if (cbLevel > chanceForRing) addItemToBank(CONSTANTS.item.Signet_Ring_Half_B, 1);
            }
            let count = 0;
            for (let i = 0; i < MONSTERS[enemy].lootTable.length; i++) {
                if (MONSTERS[enemy].lootTable[i][0] != itemToDrop) count++;
                else break;
            }
            itemQty = Math.floor(Math.random() * MONSTERS[enemy].lootTable[count][2]) + 1;
            if (chanceToDoubleLoot > 0) {
                let chance = Math.floor(Math.random() * 100);
                if (chance < chanceToDoubleLoot) itemQty *= 2;
            }
            if (items[itemToDrop].tier === 'Herb' && items[itemToDrop].type === 'Seeds') {
                if (herbloreBonuses[13].bonus[0] === 11 && herbloreBonuses[13].charges > 0) {
                    let chance = Math.floor(Math.random() * 100);
                    if (herbloreBonuses[13].bonus[1] > chance) itemToDrop = items[itemToDrop].grownItemID;
                    updateHerbloreBonuses(herbloreBonuses[13].itemID);
                }
            }
            if (isDungeon || equippedItems[CONSTANTS.equipmentSlot.Amulet] === CONSTANTS.item.Amulet_of_Looting) {
                let addToBank = addItemToBank(itemToDrop, itemQty);
                if (!addToBank) {
                    bankFullNotify();
                }
            } else {
                droppedLoot.splice(1, 0, { itemID: itemToDrop, qty: itemQty });
                //droppedLoot.unshift();
            }
        }
        let coinsToDrop = 0;
        if (MONSTERS[enemy].dropCoins !== undefined) {
            coinsToDrop = Math.floor(Math.random() * (MONSTERS[enemy].dropCoins[1] - MONSTERS[enemy].dropCoins[0])) + MONSTERS[enemy].dropCoins[0];
        }
        if (equippedItems[CONSTANTS.equipmentSlot.Ring] === CONSTANTS.item.Gold_Topaz_Ring) coinsToDrop += Math.floor(coinsToDrop * 0.15);
        if (equippedItems.includes(CONSTANTS.item.Aorpheats_Signet_Ring)) coinsToDrop *= items[CONSTANTS.item.Aorpheats_Signet_Ring].gpMultiplier;
        if (coinsToDrop > 0) {
            gp += coinsToDrop;
            updateGP();
            gpNotify(coinsToDrop);
        }
    }
    if (equippedItems[CONSTANTS.equipmentSlot.Amulet] !== CONSTANTS.item.Amulet_of_Looting) loadLoot();
    $('#combat-loot-text').text('Loot to Collect (' + droppedLoot.length + ' / ' + itemDropMax + ')');
}

function collectLoot(lootID, itemID, qty) {
    let addToBank = addItemToBank(itemID, qty);
    if (addToBank) {
        droppedLoot.splice(lootID, 1);
    } else {
        bankFullNotify();
    }
    loadLoot();
}

function clearLoot() {
    droppedLoot = [];
    loadLoot();
}

function lootAll() {
    while (droppedLoot.length) {
        let addToBank = addItemToBank(droppedLoot[0].itemID, droppedLoot[0].qty);
        if (addToBank) droppedLoot.splice(0, 1);
        else {
            bankFullNotify();
            break;
        }
    }
    loadLoot();
}
//for displaying and handling area selection
function loadDungeons() {
    resetEnemyScreen();
    $('#combat-area-container').addClass('d-none');
    $('#combat-dungeon-container').removeClass('d-none');
    $('#combat-dungeon-container').html('');
    let dungeonContainer = '';
    for (i = 0; i < DUNGEONS.length; i++) {
        dungeonContainer += '<div class="col-6 col-md-4 col-lg-4 col-xl-3" id="dungeon-area-0">';
        dungeonContainer += '<a class="block block-rounded block-link-pop border-top border-combat border-4x" href="javascript: selectDungeon(' + i + ');">';
        dungeonContainer += '<div class="block-content block-content-full">';
        dungeonContainer += '<div class="font-size-sm font-w600 text-center text-uppercase text-muted">';
        dungeonContainer += '<span class="badge badge-pill badge-danger">Dungeon</span><br>';
        dungeonContainer += DUNGEONS[i].name;
        dungeonContainer += '</div><div class="font-size-h2 font-w400 text-center text-dark">';
        dungeonContainer += '<img class="skill-icon-md" src="' + DUNGEONS[i].media + '"></div>';
        dungeonContainer += '<div class="font-size-sm font-w400 text-center text-muted">';
        dungeonContainer += 'Recommend:<br>';
        if (skillLevel[CONSTANTS.skill.Attack] < DUNGEONS[i].recommendedStats[0]) {
            dungeonContainer += '<img class="skill-icon-xs spaced" src="assets/media/skills/combat/attack.svg"><span class="text-danger">' + DUNGEONS[i].recommendedStats[0] + '</span>';
        } else {
            dungeonContainer += '<img class="skill-icon-xs spaced" src="assets/media/skills/combat/attack.svg"><span class="text-success">' + DUNGEONS[i].recommendedStats[0] + '</span>';
        }
        if (skillLevel[CONSTANTS.skill.Strength] < DUNGEONS[i].recommendedStats[0]) {
            dungeonContainer += '<img class="skill-icon-xs spaced" src="assets/media/skills/combat/strength.svg"><span class="text-danger">' + DUNGEONS[i].recommendedStats[1] + '</span>';
        } else {
            dungeonContainer += '<img class="skill-icon-xs spaced" src="assets/media/skills/combat/strength.svg"><span class="text-success">' + DUNGEONS[i].recommendedStats[1] + '</span>';
        }
        if (skillLevel[CONSTANTS.skill.Defence] < DUNGEONS[i].recommendedStats[0]) {
            dungeonContainer += '<img class="skill-icon-xs spaced" src="assets/media/skills/combat/defence.svg"><span class="text-danger">' + DUNGEONS[i].recommendedStats[2] + '</span>';
        } else {
            dungeonContainer += '<img class="skill-icon-xs spaced" src="assets/media/skills/combat/defence.svg"><span class="text-success">' + DUNGEONS[i].recommendedStats[2] + '</span>';
        }
        dungeonContainer += '<br>Reward:<br>';
        for (let ii = 0; ii < DUNGEONS[i].rewards.length; ii++) {
            dungeonContainer += '<img class="skill-icon-xs mr-2" src="' + items[DUNGEONS[i].rewards[ii]].media + '">' + items[DUNGEONS[i].rewards[ii]].name + '<br>';
        }
        dungeonContainer += '</div></div></a></div>';
    }
    $('#combat-dungeon-container').html(dungeonContainer);
}

function selectDungeon(dungeon, forceStart = false) {
    $('#combat-area-container').addClass('d-none');
    $('#combat-dungeon-container').addClass('d-none');
    $('#combat-map').addClass('d-none');
    $('#combat-view-switch').addClass('d-none');
    $('#combat-dungeon-img').removeClass('d-none');
    isDungeon = true;
    selectedDungeon = dungeon;
    dungeonCount = 0;
    $('#combat-dungeon-name').text(DUNGEONS[selectedDungeon].name + ' -');
    updateDungeonEnemyCount();
    $('#combat-enemy-options').html('<button type="button" class="btn btn-lg btn-info m-1" onClick="findEnemy();"><img class="nav-img" src="assets/media/skills/combat/combat.svg">Start Combat</button><button type="button" class="btn btn-lg btn-warning m-1" onclick="stopCombat(false, true); showMap();"><img class="nav-img" src="assets/media/skills/combat/run.svg">Run / Area Select</button>');
    if (forceStart) findEnemy();
}

function updateDungeonEnemyCount() {
    $('#combat-dungeon-count').text('(' + (dungeonCount + 1) + ' / ' + DUNGEONS[selectedDungeon].monsters.length + ')');
}

function checkRuneCount(spell) {
    runeCheck = [];
    let hasCape = false;
    if (equippedItems[CONSTANTS.equipmentSlot.Cape] === CONSTANTS.item.Magic_Skillcape) hasCape = true;
    //check the requirements first
    for (let i = 0; i < SPELLS[spell].runesRequired.length; i++) {
        if (hasCape && (SPELLS[spell].runesRequired[i].id === CONSTANTS.item.Air_Rune || SPELLS[spell].runesRequired[i].id === CONSTANTS.item.Water_Rune || SPELLS[spell].runesRequired[i].id === CONSTANTS.item.Earth_Rune || SPELLS[spell].runesRequired[i].id === CONSTANTS.item.Fire_Rune)) runeCheck.push({ reqID: 0, bankID: -1, check: 1 });
        else if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].providesRune === SPELLS[selectedSpell].runesRequired[i].id) runeCheck.push({ reqID: 0, bankID: -1, check: 1 });
        else runeCheck.push({ reqID: 0, bankID: 0, check: 0 });
        //now loop through the bank and check if requirements are met
        for (let ii = 0; ii < bank.length; ii++) {
            if (bank[ii].id === SPELLS[spell].runesRequired[i].id && bank[ii].qty >= SPELLS[spell].runesRequired[i].qty) {
                runeCheck[i].reqID = i;
                runeCheck[i].bankID = ii;
                runeCheck[i].check = 1;
            }
        }
    }
    //sort the from highest bankID to lowest
    runeCheck.sort(function(a, b) {
        return b.bankID - a.bankID;
    });
    //see what results we got
    //If one of the requirements failed, return false
    for (let i = 0; i < runeCheck.length; i++) {
        if (runeCheck[i].check != 1) {
            return false;
        }
    }
    //return true if all passes the check
    return true;
}

function updateKillCount(monster = null) {
    for (let i = monsterStats.length; i < MONSTERS.length; i++) {
        monsterStats.push({
            monsterID: i,
            damageDealtToPlayer: 0,
            damageTakenFromPlayer: 0,
            killedByPlayer: 0,
            killedPlayer: 0,
            hitsToPlayer: 0,
            hitsFromPlayer: 0,
            enemyMissed: 0,
            playerMissed: 0,
            seen: 0,
            ranAway: 0
        });
    }
    if (monster !== null) monsterStats[monster].killedByPlayer++;
}

function updateDungeonCount(dungeon = null) {
    for (let i = dungeonCompleteCount.length; i < DUNGEONS.length; i++) {
        dungeonCompleteCount.push(0);
    }
    if (dungeon != null) dungeonCompleteCount[dungeon]++;
}

function updateGameTitle() {
    if (isInCombat || isThieving) $('title').text('Hitpoints: ' + combatData.player.hitpoints);
    else $('title').text(gameTitle);
}

function viewMonsters(areaType, areaID) {
    $('#combat-table-' + areaType + '-' + areaID).toggleClass('d-none');
}

function loadAreas() {
    //RUNS ONCE ON LOAD ONLY
    //BUILDS THE COMBAT AREAS FOR ME
    $('#combat-select-area-0').html('');
    $('#combat-select-area-1').html('');
    $('#combat-select-area-2').html('');
    let c = '';
    let s = '';
    let d = '';
    for (let i = 0; i < combatAreaDisplayOrder.length; i++) {
        let cID = combatAreaDisplayOrder[i];
        c += '<div class="col-12 col-md-6 col-xl-4">';
        c += '<div class="block block-content block-rounded border-top border-combat border-4x pointer-enabled" onClick="viewMonsters(0, ' + cID + ')" id="clickable">';
        c += '<div class="media d-flex align-items-center push">';
        c += '<div class="mr-3">';
        c += '<img class="shop-img" src="' + combatAreas[cID].media + '"></div>';
        c += '<div class="media-body">';
        c += '<div class="font-w600">' + combatAreas[cID].areaName + '</div>';
        c += '<div class="font-size-sm"><small>Monster Difficulty:';
        if (combatAreas[cID].difficulty[0] === 0) c += '<span class="badge badge-pill badge-success m-1">Very Easy</span>';
        else if (combatAreas[cID].difficulty[0] === 1) c += '<span class="badge badge-pill badge-success m-1">Easy</span>';
        else if (combatAreas[cID].difficulty[0] === 2) c += '<span class="badge badge-pill badge-warning m-1">Medium</span>';
        else if (combatAreas[cID].difficulty[0] === 3) c += '<span class="badge badge-pill badge-danger m-1">Hard</span>';
        else if (combatAreas[cID].difficulty[0] === 4) c += '<span class="badge badge-pill badge-danger m-1">Very Hard</span>';
        if (combatAreas[cID].difficulty.length > 1) {
            if (combatAreas[cID].difficulty[1] === 1) c += '- <span class="badge badge-pill badge-success m-1">Easy</span>';
            else if (combatAreas[cID].difficulty[1] === 2) c += '- <span class="badge badge-pill badge-warning m-1">Medium</span>';
            else if (combatAreas[cID].difficulty[1] === 3) c += '- <span class="badge badge-pill badge-danger m-1">Hard</span>';
            else if (combatAreas[cID].difficulty[1] === 4) c += '- <span class="badge badge-pill badge-danger m-1">Very hard</span>';
        }
        c += '</small></div>';
        c += '</div></div>';
        c += '<table class="table table-sm table-vcenter d-none" id="combat-table-0-' + cID + '">';
        c += '<thead>';
        c += '<tr>';
        c += '<th class="text-center" style="width: 75px;"><small>#</small></th>';
        c += '<th style="width: 125px;"><small>Name</small></th>';
        c += '<th style="width: 50px;"><small>Type</small></th>';
        c += '<th class="text-center"><small>Options</small></th>';
        c += '</tr>';
        c += '</thead>';
        for (let f = 0; f < combatAreas[cID].monsters.length; f++) {
            c += '<tbody>';
            c += '<tr>';
            c += '<th class="text-center" scope="row">';
            c += '<img class="skill-icon-sm" src="' + MONSTERS[combatAreas[cID].monsters[f]].media + '">';
            c += '</th>';
            c += '<td class="font-w600 font-size-sm">';
            c += MONSTERS[combatAreas[cID].monsters[f]].name + '<br>';
            c += '<small class="font-w400">Combat Level: ' + getMonsterCombatLevel(combatAreas[cID].monsters[f]) + '</small><br>';
            c += '<small><img class="skill-icon-xs mr-2" src="assets/media/skills/combat/hitpoints.svg">' + numberWithCommas(MONSTERS[combatAreas[cID].monsters[f]].hitpoints * numberMultiplier) + '</small>';
            c += '</td>';
            c += '<td class="font-w600 font-size-sm">';
            if (MONSTERS[combatAreas[cID].monsters[f]].attackType === CONSTANTS.attackType.Melee) c += '<img class="skill-icon-xxs" src="assets/media/skills/combat/combat.svg">';
            else if (MONSTERS[combatAreas[cID].monsters[f]].attackType === CONSTANTS.attackType.Ranged) c += '<img class="skill-icon-xxs" src="assets/media/skills/ranged/ranged.svg">';
            else if (MONSTERS[combatAreas[cID].monsters[f]].attackType === CONSTANTS.attackType.Magic) c += '<img class="skill-icon-xxs" src="assets/media/skills/magic/magic.svg">';
            c += '</td>';
            c += '<td class="text-center">';
            c += '<button role="button" class="btn btn-sm btn-danger m-1" onClick="selectMonster(' + combatAreas[cID].monsters[f] + ')">Fight</button>';
            c += '<button role="button" class="btn btn-sm btn-primary m-1" onClick="viewMonsterDrops(' + combatAreas[cID].monsters[f] + ')">Drops</button>';
            c += '</td>';
            c += '</tr>';
            c += '</tbody>';
        }
        c += '</table></div></div>';
    }
    for (let i = 0; i < slayerAreaDisplayOrder.length; i++) {
        let sID = slayerAreaDisplayOrder[i];
        s += '<div class="col-12 col-md-6 col-xl-4">';
        s += '<div class="block block-content block-rounded border-top border-combat border-4x pointer-enabled" onClick="viewMonsters(1, ' + sID + ')" id="clickable">';
        s += '<div class="media d-flex align-items-center push">';
        s += '<div class="mr-3">';
        s += '<img class="shop-img" src="' + slayerAreas[sID].media + '"></div>';
        s += '<div class="media-body">';
        s += '<div class="font-w600">' + slayerAreas[sID].areaName + '</div>';
        s += '<div class="font-size-sm"><small>Monster Difficulty:';
        if (slayerAreas[sID].difficulty[0] === 0) s += '<span class="badge badge-pill badge-success m-1">Very Easy</span>';
        else if (slayerAreas[sID].difficulty[0] === 1) s += '<span class="badge badge-pill badge-success m-1">Easy</span>';
        else if (slayerAreas[sID].difficulty[0] === 2) s += '<span class="badge badge-pill badge-warning m-1">Medium</span>';
        else if (slayerAreas[sID].difficulty[0] === 3) s += '<span class="badge badge-pill badge-danger m-1">Hard</span>';
        else if (slayerAreas[sID].difficulty[0] === 4) s += '<span class="badge badge-pill badge-danger m-1">Very Hard</span>';
        if (slayerAreas[sID].difficulty.length > 1) {
            if (slayerAreas[sID].difficulty[1] === 1) s += '- <span class="badge badge-pill badge-success m-1">Easy</span>';
            else if (slayerAreas[sID].difficulty[1] === 2) s += '- <span class="badge badge-pill badge-warning m-1">Medium</span>';
            else if (slayerAreas[sID].difficulty[1] === 3) s += '- <span class="badge badge-pill badge-danger m-1">Hard</span>';
            else if (slayerAreas[sID].difficulty[1] === 4) s += '- <span class="badge badge-pill badge-danger m-1">Very hard</span>';
        }
        s += '</small></div>';
        if (slayerAreas[sID].slayerLevel > 1 || slayerAreas[sID].slayerItem > 0) {
            s += '<div class="font-size-sm"><small>Entry Requirements:';
            if (slayerAreas[sID].slayerLevel > 1) s += '<img class="skill-icon-xs mr-1 ml-2" src="assets/media/skills/slayer/slayer.svg"><span id="combat-slayer-level-req-' + sID + '">Level ' + slayerAreas[sID].slayerLevel + '</span>';
            if (slayerAreas[sID].slayerItem > 0) s += '<img class="skill-icon-xs mr-1 ml-2" src="' + items[slayerAreas[sID].slayerItem].media + '"><span id="combat-slayer-item-req-' + sID + '">Equipped</span>';
            s += '</small></div>';
        }
        s += '</div></div>';
        s += '<table class="table table-sm table-vcenter d-none" id="combat-table-1-' + sID + '">';
        s += '<thead>';
        s += '<tr>';
        s += '<th class="text-center" style="width: 75px;"><small>#</small></th>';
        s += '<th style="width: 125px;"><small>Name</small></th>';
        s += '<th style="width: 50px;"><small>Type</small></th>';
        s += '<th class="text-center"><small>Options</small></th>';
        s += '</tr>';
        s += '</thead>';
        for (let f = 0; f < slayerAreas[sID].monsters.length; f++) {
            s += '<tbody>';
            s += '<tr>';
            s += '<th class="text-center" scope="row">';
            s += '<img class="skill-icon-sm" src="' + MONSTERS[slayerAreas[sID].monsters[f]].media + '">';
            s += '</th>';
            s += '<td class="font-w600 font-size-sm">';
            s += MONSTERS[slayerAreas[sID].monsters[f]].name + '<br>';
            s += '<small class="font-w400">Combat Level: ' + getMonsterCombatLevel(slayerAreas[sID].monsters[f]) + '</small><br>';
            s += '<small><img class="skill-icon-xs mr-2" src="assets/media/skills/combat/hitpoints.svg">' + numberWithCommas(MONSTERS[slayerAreas[sID].monsters[f]].hitpoints * numberMultiplier) + '</small>';
            s += '</td>';
            s += '<td class="font-w600 font-size-sm">';
            if (MONSTERS[slayerAreas[sID].monsters[f]].attackType === CONSTANTS.attackType.Melee) s += '<img class="skill-icon-xxs" src="assets/media/skills/combat/combat.svg">';
            else if (MONSTERS[slayerAreas[sID].monsters[f]].attackType === CONSTANTS.attackType.Ranged) s += '<img class="skill-icon-xxs" src="assets/media/skills/ranged/ranged.svg">';
            else if (MONSTERS[slayerAreas[sID].monsters[f]].attackType === CONSTANTS.attackType.Magic) s += '<img class="skill-icon-xxs" src="assets/media/skills/magic/magic.svg">';
            s += '</td>';
            s += '<td class="text-center">';
            s += '<button role="button" class="btn btn-sm btn-danger m-1" id="combat-slayer-fight-button-' + sID + '-' + f + '" onClick="selectMonster(' + slayerAreas[sID].monsters[f] + ')">Fight</button>';
            s += '<button role="button" class="btn btn-sm btn-primary m-1" onClick="viewMonsterDrops(' + slayerAreas[sID].monsters[f] + ')">Drops</button>';
            s += '</td>';
            s += '</tr>';
            s += '</tbody>';
        }
        s += '</table></div></div>';
    }
    for (let i = 0; i < dungeonAreaDisplayOrder.length; i++) {
        let dID = dungeonAreaDisplayOrder[i];
        d += '<div class="col-12 col-md-6 col-xl-4">';
        d += '<div class="block block-content block-rounded border-top border-combat border-4x pointer-enabled" onClick="viewMonsters(2, ' + dID + ')" id="clickable">';
        d += '<div class="media d-flex align-items-center push">';
        d += '<div class="mr-3">';
        d += '<img class="shop-img" src="' + DUNGEONS[dID].media + '"></div>';
        d += '<div class="media-body">';
        d += '<div class="font-w600">' + DUNGEONS[dID].name + '</div>';
        d += '<div class="font-size-sm"><small>Dungeon Difficulty:';
        if (DUNGEONS[dID].difficulty[0] === 0) d += '<span class="badge badge-pill badge-success m-1">Very Easy</span>';
        else if (DUNGEONS[dID].difficulty[0] === 1) d += '<span class="badge badge-pill badge-success m-1">Easy</span>';
        else if (DUNGEONS[dID].difficulty[0] === 2) d += '<span class="badge badge-pill badge-warning m-1">Medium</span>';
        else if (DUNGEONS[dID].difficulty[0] === 3) d += '<span class="badge badge-pill badge-danger m-1">Hard</span>';
        else if (DUNGEONS[dID].difficulty[0] === 4) d += '<span class="badge badge-pill badge-danger m-1">Very Hard</span>';
        else if (DUNGEONS[dID].difficulty[0] === 5) d += '<span class="badge badge-pill badge-dark m-1">Elite</span>';
        d += '</small></div>';
        d += '<div class="font-size-sm"><small>Monsters: ' + DUNGEONS[dID].monsters.length;
        d += '</small></div>';
        d += '<div class="font-size-sm"><small>Highest Combat Level Monster: ' + getMonsterCombatLevel(DUNGEONS[dID].monsters[DUNGEONS[dID].monsters.length - 1]);
        d += '</small></div>';
        d += '<div class="font-size-sm"><small>Reward:';
        for (let f = 0; f < DUNGEONS[dID].rewards.length; f++) {
            if (items[DUNGEONS[dID].rewards[f]].dropTable !== undefined) d += '<a href="javascript:viewItemContents(' + DUNGEONS[dID].rewards[f] + ')"><img class="skill-icon-xxs ml-3 mr-2" src="' + items[DUNGEONS[dID].rewards[f]].media + '">' + items[DUNGEONS[dID].rewards[f]].name + '</a>';
            else d += '<img class="skill-icon-xxs ml-3 mr-2" src="' + items[DUNGEONS[dID].rewards[f]].media + '">' + items[DUNGEONS[dID].rewards[f]].name;
        }
        d += '</small></div>';
        d += '</div></div>';
        d += '<div class="font-size-sm d-none" id="combat-table-2-' + dID + '"><button role="button" class="btn btn-sm btn-danger m-1" style="width: 100%;" onClick="selectDungeon(' + dID + ', true)">Start Dungeon</button>';
        d += '</div>';
        d += '</div></div>';
    }
    $('#combat-select-area-0').html(c);
    $('#combat-select-area-1').html(s);
    $('#combat-select-area-2').html(d);
    updateSlayerAreaRequirements();
}

function updateSlayerAreaRequirements() {
    let check = [false, false];
    for (let i = 0; i < slayerAreas.length; i++) {
        check = [false, false];
        if (slayerAreas[i].slayerLevel > skillLevel[CONSTANTS.skill.Slayer]) {
            $('#combat-slayer-level-req-' + i).removeClass('text-success');
            $('#combat-slayer-level-req-' + i).addClass('text-danger');
        } else {
            $('#combat-slayer-level-req-' + i).removeClass('text-danger');
            $('#combat-slayer-level-req-' + i).addClass('text-success');
            check[0] = true;
        }
        if (slayerAreas[i].slayerItem > 0) {
            if (!equippedItems.includes(slayerAreas[i].slayerItem)) {
                $('#combat-slayer-item-req-' + i).removeClass('text-success');
                $('#combat-slayer-item-req-' + i).addClass('text-danger');
            } else {
                $('#combat-slayer-item-req-' + i).removeClass('text-danger');
                $('#combat-slayer-item-req-' + i).addClass('text-success');
                check[1] = true;
            }
        } else check[1] = true;
        if (!check.includes(false)) {
            for (let f = 0; f < slayerAreas[i].monsters.length; f++) {
                $('#combat-slayer-fight-button-' + i + '-' + f).removeClass('d-none');
            }
        } else {
            for (let f = 0; f < slayerAreas[i].monsters.length; f++) {
                $('#combat-slayer-fight-button-' + i + '-' + f).addClass('d-none');
            }
        }
    }
}

function showCombatArea(areaID) {
    if (selectedCombatArea !== null) {
        $('#combat-select-area-' + selectedCombatArea).addClass('d-none');
        $('#combat-select-' + selectedCombatArea).removeClass('bg-combat-menu-selected');
    }
    if (areaID !== selectedCombatArea) {
        $('#combat-select-area-' + areaID).removeClass('d-none');
        $('#combat-select-' + areaID).addClass('bg-combat-menu-selected');
        selectedCombatArea = areaID;
    } else selectedCombatArea = null;
}
//for displaying and handling area selection
function loadCombatAreas() {
    resetEnemyScreen();
    selectedCombatArea = null;
    slayerLockedItem = null;
    $('#combat-map').addClass('d-none');
    $('#combat-area-container').removeClass('d-none');
    $('#combat-view-switch').removeClass('d-none');
    $('#combat-area-container').html('');
    $('#combat-dungeon-container').removeClass('d-none');
    $('#combat-dungeon-container').html('');
    let combatAreaContainer = '';
    for (i = 0; i < combatAreas.length; i++) {
        combatAreaContainer += '<div class="col-12 col-md-6 col-xl-4">';
        combatAreaContainer += '<a class="block block-content block-rounded block-link-pop border-top border-combat border-4x" href="javascript: viewCombatDetails(' + i + ');">';
        combatAreaContainer += '<div class="media d-flex align-items-center push"><div class="mr-3">';
        combatAreaContainer += '<img class="shop-img" src="' + combatAreas[i].media + '"></div>';
        combatAreaContainer += '<div class="media-body">';
        combatAreaContainer += '<div class="font-w600">' + combatAreas[i].areaName + '</div>';
        combatAreaContainer += '<div class="font-size-sm"><small>Monster Difficulty: <span class="badge badge-pill badge-success m-1">Easy</span><span class="badge badge-pill badge-warning m-1">Medium</span></small></div>';
        combatAreaContainer += '</div></div></a></div>';
        /*combatAreaContainer += '<div class="col-6 col-md-4 col-lg-4 col-xl-3" id="combat-area-0">';
        combatAreaContainer += '<a class="block block-rounded block-link-pop border-top border-combat border-4x" href="javascript: viewCombatDetails(' + i + ');">';
        combatAreaContainer += '<div class="block-content block-content-full">';
        combatAreaContainer += '<div class="font-size-sm font-w600 text-center text-uppercase text-muted">';
		
        if (combatAreas[i].type === "combat") combatAreaContainer += '<img class="skill-icon-xs mr-2" src="assets/media/skills/combat/combat.svg"><small>Combat Area</small><br>';
        else if (combatAreas[i].type === "slayer") combatAreaContainer += '<img class="skill-icon-xs mr-2" src="assets/media/skills/slayer/slayer.svg"><small>Slayer Area</small><br>';
        combatAreaContainer += combatAreas[i].areaName;
        combatAreaContainer += '</div><div class="font-size-h2 font-w400 text-center text-dark">';                
        combatAreaContainer += '<img class="skill-icon-md" src="' + combatAreas[i].media + '"></div>';
        combatAreaContainer += '<div class="font-size-sm font-w400 text-center text-muted">';
        combatAreaContainer += '</div></div></a></div>';*/
    }
    let dungeonContainer = '';
    for (let i = 0; i < DUNGEONS.length; i++) {
        dungeonContainer += '<div class="col-6 col-md-4 col-lg-4 col-xl-3" id="dungeon-area-0">';
        dungeonContainer += '<a class="block block-rounded block-link-pop border-top border-combat border-4x" href="javascript: viewDungeonDetails(' + i + ');">';
        dungeonContainer += '<div class="block-content block-content-full">';
        dungeonContainer += '<div class="font-size-sm font-w600 text-center text-uppercase text-muted">';
        if (i === CONSTANTS.dungeon.Volcanic_Cave) dungeonContainer += '<small class="badge badge-pill badge-danger">Elite Dungeon</small><br>';
        else dungeonContainer += '<small class="badge badge-pill badge-warning">Dungeon</small><br>';
        dungeonContainer += DUNGEONS[i].name;
        dungeonContainer += '</div><div class="font-size-h2 font-w400 text-center text-dark">';
        dungeonContainer += '<img class="skill-icon-md" src="' + DUNGEONS[i].media + '"></div>';
        dungeonContainer += '<div class="font-size-sm font-w400 text-center text-muted">';
        dungeonContainer += 'Recommend:<br>';
        dungeonContainer += '<br>Reward:<br>';
        for (let ii = 0; ii < DUNGEONS[i].rewards.length; ii++) {
            dungeonContainer += '<img class="skill-icon-xs mr-2" src="' + items[DUNGEONS[i].rewards[ii]].media + '">' + items[DUNGEONS[i].rewards[ii]].name + '<br>';
        }
        dungeonContainer += '</div></div></a></div>';
    }
    $('#combat-area-container').html(combatAreaContainer);
    $('#combat-dungeon-container').html(dungeonContainer);
}

function switchView() {
    if (listView) listView = false;
    else listView = true;
    showMap();
    //saveData();
}

function changeCombatMenu(menu) {
    for (let i = 0; i < combatMenuCount; i++) {
        $('#combat-menu-' + i).addClass('d-none');
        $('#combat-menu-item-' + i).removeClass('border border-2x border-combat-outline');
    }
    $('#combat-menu-' + menu).removeClass('d-none');
    $('#combat-menu-item-' + menu).addClass('border border-2x border-combat-outline');
}

function updatePrayerMenu() {
    if (!prayerLoaded) {
        $('[data-toggle="tooltip"]').tooltip('hide');
        $('#combat-prayer-container').html('');
        $('#combat-player-active-prayers').html('');
        let prayer = '<div class="row">';
        let cPrayer = '';
        let active, ppPlayer, ppEnemy, ppRegen;
        for (let i = 0; i < PRAYER.length; i++) {
            if (activePrayer[i]) active = 'border-combat-outline';
            else active = '';
            ppPlayer = '';
            ppEnemy = '';
            ppRegen = '';
            if (PRAYER[i].pointsPerPlayer != undefined && PRAYER[i].pointsPerPlayer > 0) ppPlayer = "<br><small><small class='text-info'>" + PRAYER[i].pointsPerPlayer + "</small> per <small class='text-success'>PLAYER</small> Attack</small>";
            if (PRAYER[i].pointsPerEnemy != undefined && PRAYER[i].pointsPerEnemy > 0) ppEnemy = "<br><small><small class='text-info'>" + PRAYER[i].pointsPerEnemy + "</small> per <small class='text-danger'>ENEMY</small> Attack</small>";
            if (PRAYER[i].pointsPerRegen != undefined && PRAYER[i].pointsPerRegen > 0) ppRegen = "<br><small><small class='text-info'>" + PRAYER[i].pointsPerRegen + "</small> per <small class='text-info'>HP REGEN</small></small>";
            if (skillLevel[CONSTANTS.skill.Prayer] >= PRAYER[i].prayerLevel) prayer += '<div class="col-3"><ul class="nav nav-pills nav-justified push"><li class="nav-item mr-1"><a class="nav-link border ' + active + ' border-2x js-tooltip-enabled p-0" id="prayer-select-' + i + '" href="javascript:togglePrayer(' + i + ');"data-toggle="tooltip" data-html="true" data-placement="bottom" title="" data-original-title="<span class=\'text-warning\'>' + PRAYER[i].name + "</span><br><small class='text-info'>" + PRAYER[i].description + "</small><br><small class='text-warning'>Prayer Point Cost:</small>" + ppPlayer + ppEnemy + ppRegen + '"><img class="skill-icon-xs" src="' + PRAYER[i].media + '"></a></li></ul></div>';
            else prayer += '<div class="col-3"><ul class="nav nav-pills nav-justified push"><li class="nav-item mr-1"><a class="nav-link border border-2x js-tooltip-enabled p-0" id="prayer-select-' + i + '" data-toggle="tooltip" data-html="true" data-placement="bottom" title="" data-original-title="<span class=\'text-warning\'>Unlocked at Prayer Level ' + PRAYER[i].prayerLevel + '</span>"><img class="skill-icon-xs" src="assets/media/main/question.svg"></a></li></ul></div>';
            let h = '';
            if (!activePrayer[i]) h = 'd-none';
            cPrayer += '<a class="js-tooltip-enabled m-1 ' + h + '" id="combat-prayer-' + i + '" href="javascript:togglePrayer(' + i + ');" data-toggle="tooltip" data-html="true" data-placement="bottom" title="" data-original-title="<span class=\'text-warning\'>' + PRAYER[i].name + "</span><br><small class='text-info'>" + PRAYER[i].description + '</small>"><img class="skill-icon-xs" src="' + PRAYER[i].media + '"></a>';
        }
        prayer += '</div>';
        $('#combat-prayer-container').html(prayer);
        $('#combat-player-active-prayers').html(cPrayer);
        updateTooltips();
        prayerLoaded = true;
    } else {
        $('[data-toggle="tooltip"]').tooltip('hide');
        for (let i = 0; i < activePrayer.length; i++) {
            if (activePrayer[i]) {
                $('#prayer-select-' + i).addClass('border-success');
                $('#combat-prayer-' + i).removeClass('d-none');
            } else {
                $('#prayer-select-' + i).removeClass('border-success');
                $('#combat-prayer-' + i).addClass('d-none');
            }
        }
    }
}

function loadPrayer() {
    for (let i = 0; i < PRAYER.length; i++) {
        activePrayer.push(false);
    }
}

function togglePrayer(prayer) {
    $('[data-toggle="tooltip"]').tooltip('hide');
    //RESET PRAYERS
    prayerBonusAttack = 0;
    prayerBonusStrength = 0;
    prayerBonusDefence = 0;
    prayerBonusAttackRanged = 0;
    prayerBonusStrengthRanged = 0;
    prayerBonusDefenceRanged = 0;
    prayerBonusAttackMagic = 0;
    prayerBonusDamageMagic = 0;
    prayerBonusDefenceMagic = 0;
    prayerBonusProtectItem = 0;
    prayerBonusHitpoints = 1;
    prayerBonusHitpointHeal = 0;
    prayerBonusProtectFromMagic = 0;
    prayerBonusProtectFromMelee = 0;
    prayerBonusProtectFromRanged = 0;
    isPrayer = false;
    let count = 0;
    for (let i = 0; i < activePrayer.length; i++) {
        if (activePrayer[i]) count++;
    }
    if (count < 2) {
        if (activePrayer[prayer]) activePrayer[prayer] = false;
        else {
            if (prayerPoints >= PRAYER[prayer].pointsPerPlayer && prayerPoints >= PRAYER[prayer].pointsPerEnemy && prayerPoints >= PRAYER[prayer].pointsPerRegen) activePrayer[prayer] = true;
            else notifyPlayer(CONSTANTS.skill.Prayer, "You don't have enough Prayer Points", (type = 'danger'));
        }
    } else {
        if (activePrayer[prayer]) activePrayer[prayer] = false;
        else notifyPlayer(CONSTANTS.skill.Prayer, 'You can only have a max of 2 Prayers active simultaneously', (type = 'danger'));
    }
    for (let i = 0; i < activePrayer.length; i++) {
        if (activePrayer[i]) {
            for (let f = 0; f < PRAYER[i].vars.length; f++) {
                window[PRAYER[i].vars[f]] += PRAYER[i].values[f];
            }
            isPrayer = true;
        }
    }
    updatePrayerPoints();
    updatePrayerMenu();
    updatePlayerStats();
}

function updatePrayerPoints(qty = 0) {
    if (isPrayer) $('#skill-nav-name-' + CONSTANTS.skill.Prayer).addClass('text-success');
    else $('#skill-nav-name-' + CONSTANTS.skill.Prayer).removeClass('text-success');
    if (equippedItems[CONSTANTS.equipmentSlot.Cape] === CONSTANTS.item.Prayer_Skillcape && qty > 0) {
        qty = Math.floor(qty / 2);
        if (qty === 0) qty = 1;
    }
    if (herbloreBonuses[13].bonus[0] === 10 && herbloreBonuses[13].charges > 0) {
        let chance = Math.floor(Math.random() * 100);
        if (herbloreBonuses[13].bonus[1] > chance) qty = 0;
        updateHerbloreBonuses(herbloreBonuses[13].itemID);
    }
    prayerPoints -= qty;
    if (prayerPoints < 0) prayerPoints = 0;
    if (prayerPoints < 1) {
        for (let i = 0; i < activePrayer.length; i++) {
            if (activePrayer[i]) togglePrayer(i);
        }
    }
    $('#combat-player-prayer-points-0').text(formatNumber(prayerPoints));
    $('#combat-player-prayer-points-1').text(formatNumber(prayerPoints));
    $('#combat-player-prayer-points-2').text('(' + formatNumber(prayerPoints) + ')');
    $('#combat-player-prayer-points-3').text('(' + formatNumber(prayerPoints) + ')');
    if (prayerPoints < 1) $('#combat-player-prayer-points-2').attr('class', 'text-danger');
    else $('#combat-player-prayer-points-2').attr('class', 'text-success');
}

function updateSlayer(enemy) {
    let bonusXP = 0;
    if (items[equippedItems[CONSTANTS.equipmentSlot.Helmet]].slayerBonusXP !== undefined) bonusXP += items[equippedItems[CONSTANTS.equipmentSlot.Helmet]].slayerBonusXP;
    if (items[equippedItems[CONSTANTS.equipmentSlot.Platebody]].slayerBonusXP !== undefined) bonusXP += items[equippedItems[CONSTANTS.equipmentSlot.Platebody]].slayerBonusXP;
    if (MONSTERS[enemy].slayerXP > 0) addXP(CONSTANTS.skill.Slayer, Math.floor(MONSTERS[enemy].slayerXP * (1 + bonusXP / 100)));
    if (slayerTask.length) {
        if (enemy === slayerTask[0].monsterID) {
            let xp = Math.floor(MONSTERS[enemy].hitpoints * (1 + bonusXP / 100));
            addXP(CONSTANTS.skill.Slayer, xp);
            updateSlayerCoins(MONSTERS[enemy].hitpoints);
            updateSlayerTask(1);
        }
    }
    updateSkillWindow(CONSTANTS.skill.Slayer);
}

function updateSlayerCoins(qty = 0) {
    slayerCoins += qty;
    if (qty > 0) notifySlayer('+' + qty, 'success');
    else if (qty < 0) notifySlayer(qty, 'danger');
    let cost = getSlayerCost();
    $('#shop-current-slayer').text(formatNumber(slayerCoins) + ' SC');
    $('#shop-current-slayer-c').attr('data-original-title', numberWithCommas(slayerCoins) + " Slayer Coins<br><small class='text-warning'>Earn SC from Slayer Tasks</small>");
    $('#slayer-task-refresh').attr('data-original-title', "Request new Slayer Task<br><small class='text-warning'>Costs 5% of your Slayer Coins<br>Costs " + numberWithCommas(cost) + ' of ' + numberWithCommas(slayerCoins) + ' SC</small>');
    $('#nav-slayer-coins-1').text('(' + formatNumber(slayerCoins) + ')');
    $('#nav-slayer-coins-2').text('(' + formatNumber(slayerCoins) + ')');
    updateTooltips();
}

function updateSlayerTask(qty) {
    if (qty > 0) {
        slayerTask[0].count -= qty;
        if (slayerTask[0].count < 1) {
            slayerTask = [];
            notifyPlayer(CONSTANTS.skill.Slayer, 'You have completed your Slayer task.', 'success');
            if (autoSlayerTask) getSlayerTask();
        }
    }
    if (!slayerTask.length) {
        $('#combat-player-slayer-task').html('<button type="button" class="btn btn-sm btn-success" onclick="getSlayerTask();">New Task</button>');
    } else {
        $('[data-toggle="tooltip"]').tooltip('hide');
        let a = findEnemyArea(slayerTask[0].monsterID);
        let cost = getSlayerCost();
        $('#combat-player-slayer-task').html('<img class="skill-icon-xs m-0 mr-2 js-tooltip-enabled" src="' + MONSTERS[slayerTask[0].monsterID].media + '" data-toggle="tooltip" data-html="true" data-placement="bottom" title data-original-title="<small>Found in:</small><br><span class=\'text-warning\'>' + a + '</span>"><a class="combat-action" href="#" onClick="jumpToEnemy(' + slayerTask[0].monsterID + '); return false;">' + numberWithCommas(slayerTask[0].count) + ' x ' + MONSTERS[slayerTask[0].monsterID].name + '</a>');
        $('#combat-player-slayer-new-btn').html('<a class="pointer-enabled combat-action" id="slayer-task-refresh" href="#" onclick="newSlayerTask(); return false;"><small>New Task</small></a>');
    }
}

function getSlayerTask() {
    $('[data-toggle="tooltip"]').tooltip('hide');
    let monster = Math.floor(Math.random() * MONSTERS.length);
    if (MONSTERS[monster].canSlayer) {
        let accept = false;
        let canAccess = true;
        let mCombat = getMonsterCombatLevel(monster);
        if (combatLevel >= 100 && mCombat >= combatLevel / 4) accept = true;
        else if (combatLevel >= 50 && combatLevel >= mCombat && mCombat >= combatLevel / 4) accept = true;
        else if (combatLevel < 50 && combatLevel >= mCombat) accept = true;
        let a;
        if (MONSTERS[monster].slayerXP === undefined) {
            for (let i = 0; i < combatAreas.length; i++) {
                for (let f = 0; f < combatAreas[i].monsters.length; f++) {
                    if (combatAreas[i].monsters[f] === monster) {
                        a = i;
                        break;
                    }
                }
            }
        } else {
            for (let i = 0; i < slayerAreas.length; i++) {
                for (let f = 0; f < slayerAreas[i].monsters.length; f++) {
                    if (slayerAreas[i].monsters[f] === monster) {
                        a = i;
                        break;
                    }
                }
            }
            if (slayerAreas[a].slayerLevel > skillLevel[CONSTANTS.skill.Slayer]) canAccess = false;
        }
        if (accept && canAccess) {
            let count = getSlayerCount();
            slayerTask.push({ monsterID: monster, count: count });
            let a = findEnemyArea(monster);
            let cost = getSlayerCost();
            $('#combat-player-slayer-task').html('<img class="skill-icon-xs js-tooltip-enabled" src="' + MONSTERS[monster].media + '" data-toggle="tooltip" data-html="true" data-placement="bottom" title data-original-title="<small>Found in:</small><br><span class=\'text-warning\'>' + a + '</span>"><a class="combat-action" href="#" onClick="jumpToEnemy(' + monster + '); return false;">' + numberWithCommas(count) + ' x ' + MONSTERS[monster].name + '</a>');
            $('#combat-player-slayer-new-btn').html('<a class="combat-action" id="slayer-task-refresh" href="#" onclick="newSlayerTask(); return false;"><small>New Task</small></a>');
            updateTooltips();
            saveData();
        } else {
            getSlayerTask();
        }
    } else {
        getSlayerTask();
    }
}

function getSlayerCount() {
    return Math.floor(Math.random() * (skillLevel[CONSTANTS.skill.Slayer] * 5)) + 5;
}

function updateCombatLevel(id = 'player') {
    let base = 0.25 * (skillLevel[CONSTANTS.skill.Defence] + skillLevel[CONSTANTS.skill.Hitpoints] + Math.floor(skillLevel[CONSTANTS.skill.Prayer] / 2));
    let melee = 0.325 * (skillLevel[CONSTANTS.skill.Attack] + skillLevel[CONSTANTS.skill.Strength]);
    let range = 0.325 * Math.floor(3 * skillLevel[CONSTANTS.skill.Ranged] / 2);
    let magic = 0.325 * Math.floor(3 * skillLevel[CONSTANTS.skill.Magic] / 2);
    let levels = [melee, range, magic];
    combatLevel = Math.floor(base + Math.max(...levels));
    $('#combat-level-sidebar').text(combatLevel);
    $('#combat-player-combat-level').text(combatLevel);
}

function getMonsterCombatLevel(monster) {
    let prayer = 1;
    let base = 0.25 * (MONSTERS[monster].defenceLevel + MONSTERS[monster].hitpoints + Math.floor(prayer / 2));
    let melee = 0.325 * (MONSTERS[monster].attackLevel + MONSTERS[monster].strengthLevel);
    let range = 0.325 * Math.floor(3 * MONSTERS[monster].rangedLevel / 2);
    let magic = 0.325 * Math.floor(3 * MONSTERS[monster].magicLevel / 2);
    let levels = [melee, range, magic];
    return Math.floor(base + Math.max(...levels));
}

function newSlayerTask() {
    $('#combat-player-slayer-task').html('<img class="skill-icon-xs m-0 mr-2 js-tooltip-enabled" src="assets/media/main/question.svg"> Locating...');
    $('#combat-player-slayer-new-btn').html('<div id="slayer-task-spinner" class="spinner-border spinner-border-sm text-primary ml-2" role="status"></div>');
    let cost = getSlayerCost();
    updateSlayerCoins(-cost);
    slayerTask = [];
    window.setTimeout(function() {
        getSlayerTask();
        updateSlayerTask(0);
        updateTooltips();
        saveData();
    }, 1000);
}

function getSlayerCost() {
    let cost = 0;
    if (slayerCoins < 20) cost = 0;
    else cost = Math.floor(slayerCoins * 0.05);
    if (cost > 2000) cost = 2000;
    return cost;
}

function findEnemyArea(enemy) {
    let a;
    if (MONSTERS[enemy].slayerXP !== undefined) {
        for (let i = 0; i < slayerAreas.length; i++) {
            for (let f = 0; f < slayerAreas[i].monsters.length; f++) {
                if (slayerAreas[i].monsters[f] === enemy) {
                    a = i;
                    break;
                }
            }
        }
        return slayerAreas[a].areaName;
    } else {
        for (let i = 0; i < combatAreas.length; i++) {
            for (let f = 0; f < combatAreas[i].monsters.length; f++) {
                if (combatAreas[i].monsters[f] === enemy) {
                    a = i;
                    break;
                }
            }
        }
        return combatAreas[a].areaName;
    }
}

function jumpToEnemy(enemy) {
    if (!isDungeon) {
        let canFight = true;
        let a;
        if (MONSTERS[enemy].slayerXP !== undefined) {
            for (let i = 0; i < slayerAreas.length; i++) {
                for (let f = 0; f < slayerAreas[i].monsters.length; f++) {
                    if (slayerAreas[i].monsters[f] === enemy) {
                        if (slayerAreas[i].slayerItem > 0) {
                            if (!equippedItems.includes(slayerAreas[i].slayerItem)) canFight = false;
                        }
                    }
                }
            }
        }
        if (canFight) {
            stopCombat();
            selectMonster(enemy);
        }
    }
}

function resetSpecialAttack(force = false) {
    useSpecialAttack = false;
    //RESET VARS TO DEFAULT
    attackCount = 1;
    damageMultiplier = 1;
    lifesteal = 0;
    ancientBowHit = 0;
    BleedMultiplier = 0;
    clearInterval(attackTimer);
    attackTimer = null;
    if (!enemySlowed || force) enemyAttackSpeedMultiplier = 1;
    if (!enemyBleeding || force) {
        bleedMultiplier = 0;
        enemyBleeding = false;
        clearInterval(bleedTimer);
    }
}

function toggleSpecialAttack() {
    resetSpecialAttack();
    if (!specialAttackUsed) {
        if (useSpecialAttack) useSpecialAttack = false;
        else useSpecialAttack = true;
        let weapon = equippedItems[CONSTANTS.equipmentSlot.Weapon];
        switch (weapon) {
            case CONSTANTS.item.Dragon_Claw:
                attackCount = 2;
                break;
            case CONSTANTS.item.Ancient_Claw:
                attackCount = 2;
                break;
            case CONSTANTS.item.Ancient_Sword:
                lifesteal = 0.25;
                break;
            case CONSTANTS.item.Ancient_2H_Sword:
                damageMultiplier = 2;
                break;
            case CONSTANTS.item.Ancient_Longbow:
                ancientBowHit = 1;
                break;
            case CONSTANTS.item.Ice_Sword:
                enemySlowed = true;
                enemyAttackSpeedMultiplier = 1.3;
                break;
            case CONSTANTS.item.Ice_Longbow:
                enemySlowed = true;
                enemyAttackSpeedMultiplier = 1.3;
                break;
            case CONSTANTS.item.Elite_Magic_Wand:
                damageMultiplier = 1.5;
                break;
            case CONSTANTS.item.Sunset_Rapier:
                bleedMultiplier = 1;
                break;
        }
        startSpecialAttackTimer();
    }
}

function startSpecialAttackTimer() {
    clearTimeout(specialAttackTimer);
    $('#combat-player-special-attack-main').html('<div id="slayer-task-spinner" class="spinner-border spinner-border-sm text-info mr-2" role="status"></div>');
    $('#combat-player-special-attack-description').text('Special Attack on cooldown...');
    specialAttackTimer = setTimeout(function() {
        let s = '';
        if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].hasSpecialAttack) s = items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].specialAttack;
        $('#combat-player-special-attack-main').html('<a class="combat-action" href="javascript:toggleSpecialAttack();"><small>Use Special Attack</small></a>');
        $('#combat-player-special-attack-description').text(s);
        specialAttackTimer = null;
        if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].hasSpecialAttack && autoUseSpecialAttack) toggleSpecialAttack();
    }, specialAttackInterval);
}

function updateSpecialAttack() {
    if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].hasSpecialAttack) $('#combat-player-special-attack').removeClass('d-none');
    else $('#combat-player-special-attack').addClass('d-none');
    let s = '';
    if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].hasSpecialAttack) s = items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].specialAttack;
    if (specialAttackTimer === null || !specialAttackTimer) {
        $('#combat-player-special-attack-main').html('<a class="combat-action" href="javascript:toggleSpecialAttack();"><small>Use Special Attack</small></a>');
        $('#combat-player-special-attack-description').text(s);
    } else {
        $('#combat-player-special-attack-main').html('<div id="slayer-task-spinner" class="spinner-border spinner-border-sm text-info mr-2" role="status"></div>');
        $('#combat-player-special-attack-description').text('Special Attack on cooldown...');
    }
}

function updateEquipmentHeader() {
    if (equippedItems[CONSTANTS.equipmentSlot.Helmet] !== 0) {
        $('#page-header-equipment-dropdown').html('<img class="skill-icon-xxs" src="' + items[equippedItems[CONSTANTS.equipmentSlot.Helmet]].media + '">');
        $('#combat-menu-item-0').attr('src', items[equippedItems[CONSTANTS.equipmentSlot.Helmet]].media);
    } else {
        $('#page-header-equipment-dropdown').html('<img class="skill-icon-xxs" src="assets/media/bank/' + emptyGear[CONSTANTS.equipmentSlot.Helmet] + '.svg">');
        $('#combat-menu-item-0').attr('src', 'assets/media/bank/' + emptyGear[CONSTANTS.equipmentSlot.Helmet] + '.svg');
    }
}

function updatePlayerHitpoints(qty, notify = true) {
    combatData.player.hitpoints += qty;
    updateHitpoints();
    let type = 'success';
    let sign = '+';
    if (qty < 0) {
        type = 'danger';
        sign = '';
    }
    if (notify && showHPNotify) notifyPlayer(CONSTANTS.skill.Hitpoints, sign + qty, type);
}

function updateDebuffs() {
    if (enemyBleeding) $('#combat-enemy-debuffs-bleeding').removeClass('d-none');
    else $('#combat-enemy-debuffs-bleeding').addClass('d-none');
}

function setEquipmentSet(set) {
    if (equipmentSetCount >= set) {
        if (!isDungeon) {
            $('#combat-equipment-set-' + selectedEquipmentSet).attr('class', 'btn btn-primary m-1 js-tooltip-enabled');
            $('#combat-equipment-set-' + selectedEquipmentSet + '-1').attr('class', 'btn btn-sm btn-primary m-1 js-tooltip-enabled');
            $('#combat-equipment-set-' + set).attr('class', 'btn btn-success m-1 js-tooltip-enabled');
            $('#combat-equipment-set-' + set + '-1').attr('class', 'btn btn-sm btn-success m-1 js-tooltip-enabled');
            selectedEquipmentSet = set;
            equippedItems = equipmentSets[set].equipment;
            ammo = equipmentSets[set].ammo;
            loadCombatGear(true);
            if (equippedItems[CONSTANTS.equipmentSlot.Weapon].isMagic) setAttackStyle(selectedAttackStyle[2]);
            else if (items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].type === 'Ranged Weapon' || items[equippedItems[CONSTANTS.equipmentSlot.Weapon]].isRanged) setAttackStyle(selectedAttackStyle[1]);
            else setAttackStyle(selectedAttackStyle[0]);
            updateAttackStyleOptions();
            //saveData();
        } else {
            notifyPlayer(CONSTANTS.skill.Attack, 'You cannot do that while in a Dungeon.', 'danger');
        }
    }
}

function togglePlayerContainer() {
    $('#combat-player-container').toggleClass('d-none');
}
