
const MODULE_ID = "obojima-brewing-pf2e";

let OBOJIMA_POTION_ICONS = null;
const OBOJIMA_FALLBACK_POTION_ICONS = [
  "icons/consumables/potions/bottle-bulb-corked-blue.webp",
  "icons/consumables/potions/bottle-bulb-corked-green.webp",
  "icons/consumables/potions/bottle-bulb-corked-purple.webp",
  "icons/consumables/potions/bottle-bulb-corked-red.webp",
  "icons/consumables/potions/bottle-round-corked-blue.webp",
  "icons/consumables/potions/bottle-round-corked-green.webp",
  "icons/consumables/potions/bottle-round-corked-purple.webp",
  "icons/consumables/potions/bottle-round-corked-red.webp",
  "icons/consumables/potions/potion-bottle-corked-blue.webp",
  "icons/consumables/potions/potion-bottle-corked-green.webp",
  "icons/consumables/potions/potion-bottle-corked-purple.webp",
  "icons/consumables/potions/potion-bottle-corked-red.webp",
  "icons/consumables/potions/potion-bottle-round-blue.webp",
  "icons/consumables/potions/potion-bottle-round-green.webp",
  "icons/consumables/potions/potion-bottle-round-purple.webp",
  "icons/consumables/potions/potion-bottle-round-red.webp"
];

async function browseImageDir(dir) {
  // Core Data assets are in the public source. User Data assets are in data.
  // Try public first so Core Data paths such as icons/consumables/potions work reliably.
  for (const source of ["public", "data"]) {
    try {
      const result = await FilePicker.browse(source, dir);
      const files = (result.files ?? [])
        .filter(f => /\.(webp|png|jpg|jpeg|svg)$/i.test(f))
        .sort((a, b) => a.localeCompare(b));
      if (files.length) return files;
    } catch (_) { /* try the next source */ }
  }
  return [];
}

async function getObojimaPotionIcons() {
  if (Array.isArray(OBOJIMA_POTION_ICONS)) return OBOJIMA_POTION_ICONS;
  const files = await browseImageDir("icons/consumables/potions");
  OBOJIMA_POTION_ICONS = files.length ? files : OBOJIMA_FALLBACK_POTION_ICONS;
  return OBOJIMA_POTION_ICONS;
}

function whimsyPotionIcon(index) {
  const icons = Array.isArray(OBOJIMA_POTION_ICONS) && OBOJIMA_POTION_ICONS.length ? OBOJIMA_POTION_ICONS : OBOJIMA_FALLBACK_POTION_ICONS;
  const n = Number(index) || 1;
  // Deterministic pseudo-random spread so icons stay stable between reloads.
  return icons[Math.abs((n * 17 + 11) % icons.length)];
}


const INGREDIENTS = [
  {
    "name": "Acid Dew",
    "combat": 55,
    "utility": 35,
    "whimsy": 24
  },
  {
    "name": "Aether Apple",
    "combat": 6,
    "utility": 20,
    "whimsy": 0
  },
  {
    "name": "Alabaster Moth Wing",
    "combat": 21,
    "utility": 20,
    "whimsy": 37
  },
  {
    "name": "Amber",
    "combat": 3,
    "utility": 1,
    "whimsy": 0
  },
  {
    "name": "Angel's Trumpet",
    "combat": 49,
    "utility": 20,
    "whimsy": 77
  },
  {
    "name": "Ankheg Antenna",
    "combat": 78,
    "utility": 20,
    "whimsy": 10
  },
  {
    "name": "Anvil Pepper",
    "combat": 43,
    "utility": 66,
    "whimsy": 53
  },
  {
    "name": "Apper Carrot",
    "combat": 2,
    "utility": 2,
    "whimsy": 1
  },
  {
    "name": "Ashblossom",
    "combat": 52,
    "utility": 99,
    "whimsy": 4
  },
  {
    "name": "Ashen Hops",
    "combat": 74,
    "utility": 73,
    "whimsy": 57
  },
  {
    "name": "Autumn Glass",
    "combat": 68,
    "utility": 82,
    "whimsy": 68
  },
  {
    "name": "Bamboo",
    "combat": 6,
    "utility": 16,
    "whimsy": 29
  },
  {
    "name": "Bane Berry",
    "combat": 73,
    "utility": 39,
    "whimsy": 11
  },
  {
    "name": "Bashu Powder",
    "combat": 2,
    "utility": 5,
    "whimsy": 19
  },
  {
    "name": "Basilisk Dandruff",
    "combat": 2,
    "utility": 2,
    "whimsy": 2
  },
  {
    "name": "Bearded Green",
    "combat": 9,
    "utility": 28,
    "whimsy": 64
  },
  {
    "name": "Beetle Lantern",
    "combat": 9,
    "utility": 48,
    "whimsy": 17
  },
  {
    "name": "Bellflower Resin",
    "combat": 68,
    "utility": 30,
    "whimsy": 22
  },
  {
    "name": "Bitter Star Anise",
    "combat": 61,
    "utility": 74,
    "whimsy": 62
  },
  {
    "name": "Black Cinnamon",
    "combat": 7,
    "utility": 41,
    "whimsy": 3
  },
  {
    "name": "Black Pearl",
    "combat": 31,
    "utility": 16,
    "whimsy": 0
  },
  {
    "name": "Blackthorn Honey",
    "combat": 23,
    "utility": 29,
    "whimsy": 87
  },
  {
    "name": "Blightshore Sand",
    "combat": 58,
    "utility": 22,
    "whimsy": 25
  },
  {
    "name": "Blightshrooms",
    "combat": 59,
    "utility": 93,
    "whimsy": 14
  },
  {
    "name": "Bloodroot",
    "combat": 32,
    "utility": 66,
    "whimsy": 0
  },
  {
    "name": "Blossom of Spirit Vine",
    "combat": 59,
    "utility": 36,
    "whimsy": 25
  },
  {
    "name": "Blue Back Salmon",
    "combat": 3,
    "utility": 6,
    "whimsy": 1
  },
  {
    "name": "Blue-Ringed Octopus Skin",
    "combat": 83,
    "utility": 22,
    "whimsy": 29
  },
  {
    "name": "Bluecap Milk",
    "combat": 20,
    "utility": 20,
    "whimsy": 19
  },
  {
    "name": "Boom Bell",
    "combat": 1,
    "utility": 8,
    "whimsy": 2
  },
  {
    "name": "Bora Bug",
    "combat": 14,
    "utility": 9,
    "whimsy": 29
  },
  {
    "name": "Bottled Cap (Supa-Fizz)",
    "combat": 9,
    "utility": 13,
    "whimsy": 38
  },
  {
    "name": "Bottled Lightning",
    "combat": 34,
    "utility": 66,
    "whimsy": 27
  },
  {
    "name": "Bristlecone Tear",
    "combat": 41,
    "utility": 12,
    "whimsy": 12
  },
  {
    "name": "Bronze Pollen",
    "combat": 23,
    "utility": 66,
    "whimsy": 1
  },
  {
    "name": "Brush Reed",
    "combat": 10,
    "utility": 9,
    "whimsy": 7
  },
  {
    "name": "Bubble Gum",
    "combat": 36,
    "utility": 19,
    "whimsy": 59
  },
  {
    "name": "Bundle of Driko Twigs",
    "combat": 16,
    "utility": 7,
    "whimsy": 1
  },
  {
    "name": "Camp Mite",
    "combat": 1,
    "utility": 3,
    "whimsy": 8
  },
  {
    "name": "Candlefish Oil",
    "combat": 51,
    "utility": 29,
    "whimsy": 81
  },
  {
    "name": "Carrion Crawler Scum",
    "combat": 64,
    "utility": 12,
    "whimsy": 13
  },
  {
    "name": "Cat's Cradle Vine",
    "combat": 51,
    "utility": 94,
    "whimsy": 56
  },
  {
    "name": "Cat's Tongue",
    "combat": 1,
    "utility": 1,
    "whimsy": 8
  },
  {
    "name": "Cave Chrysanthemum",
    "combat": 9,
    "utility": 1,
    "whimsy": 0
  },
  {
    "name": "Chalk Lotus",
    "combat": 17,
    "utility": 36,
    "whimsy": 6
  },
  {
    "name": "Chattering Reed",
    "combat": 32,
    "utility": 33,
    "whimsy": 53
  },
  {
    "name": "Chicken Egg",
    "combat": 6,
    "utility": 5,
    "whimsy": 12
  },
  {
    "name": "Chisuya's Heavenly Tea",
    "combat": 4,
    "utility": 13,
    "whimsy": 4
  },
  {
    "name": "Clay Snake Tail",
    "combat": 20,
    "utility": 15,
    "whimsy": 16
  },
  {
    "name": "Clockwork Acorn",
    "combat": 73,
    "utility": 64,
    "whimsy": 42
  },
  {
    "name": "Cloud Horn",
    "combat": 21,
    "utility": 11,
    "whimsy": 6
  },
  {
    "name": "Coal From the Spirit Train",
    "combat": 56,
    "utility": 50,
    "whimsy": 44
  },
  {
    "name": "Copperleaf",
    "combat": 85,
    "utility": 66,
    "whimsy": 74
  },
  {
    "name": "Corrupted Seawater",
    "combat": 45,
    "utility": 10,
    "whimsy": 0
  },
  {
    "name": "Corrupted Slime",
    "combat": 12,
    "utility": 35,
    "whimsy": 4
  },
  {
    "name": "Crackling Jasper",
    "combat": 22,
    "utility": 37,
    "whimsy": 33
  },
  {
    "name": "Cranberry Meteor",
    "combat": 1,
    "utility": 1,
    "whimsy": 1
  },
  {
    "name": "Creeping Bolete",
    "combat": 11,
    "utility": 31,
    "whimsy": 9
  },
  {
    "name": "Cricket Sugar",
    "combat": 22,
    "utility": 25,
    "whimsy": 52
  },
  {
    "name": "Crimson Octopus Ink",
    "combat": 56,
    "utility": 21,
    "whimsy": 3
  },
  {
    "name": "Crimson Peppercorn",
    "combat": 40,
    "utility": 48,
    "whimsy": 53
  },
  {
    "name": "Crownberry",
    "combat": 82,
    "utility": 40,
    "whimsy": 6
  },
  {
    "name": "Crystal Cabbage",
    "combat": 72,
    "utility": 82,
    "whimsy": 74
  },
  {
    "name": "Dandelion Fuse",
    "combat": 14,
    "utility": 17,
    "whimsy": 28
  },
  {
    "name": "Dawn Petal",
    "combat": 55,
    "utility": 32,
    "whimsy": 18
  },
  {
    "name": "Death Cap",
    "combat": 97,
    "utility": 41,
    "whimsy": 8
  },
  {
    "name": "Dewdrop Pearl",
    "combat": 43,
    "utility": 22,
    "whimsy": 10
  },
  {
    "name": "Dorrin Plate",
    "combat": 4,
    "utility": 4,
    "whimsy": 24
  },
  {
    "name": "Dragon Fangs of Yutro",
    "combat": 26,
    "utility": 59,
    "whimsy": 22
  },
  {
    "name": "Dragon Root",
    "combat": 50,
    "utility": 17,
    "whimsy": 22
  },
  {
    "name": "Dream Moth Dust",
    "combat": 62,
    "utility": 26,
    "whimsy": 16
  },
  {
    "name": "Dreamlilly",
    "combat": 20,
    "utility": 12,
    "whimsy": 49
  },
  {
    "name": "Dried Fruit",
    "combat": 11,
    "utility": 5,
    "whimsy": 30
  },
  {
    "name": "Driftwood Pepper",
    "combat": 55,
    "utility": 65,
    "whimsy": 57
  },
  {
    "name": "Dust Bunny Fur",
    "combat": 53,
    "utility": 73,
    "whimsy": 81
  },
  {
    "name": "Eagle Feather",
    "combat": 16,
    "utility": 65,
    "whimsy": 14
  },
  {
    "name": "Eagle Heart",
    "combat": 11,
    "utility": 26,
    "whimsy": 59
  },
  {
    "name": "Earwax",
    "combat": 13,
    "utility": 7,
    "whimsy": 2
  },
  {
    "name": "Eelgrass Noodle",
    "combat": 19,
    "utility": 28,
    "whimsy": 29
  },
  {
    "name": "Elemental Dust",
    "combat": 62,
    "utility": 99,
    "whimsy": 0
  },
  {
    "name": "Ember Fig",
    "combat": 47,
    "utility": 11,
    "whimsy": 16
  },
  {
    "name": "Essence of Glumbug",
    "combat": 12,
    "utility": 20,
    "whimsy": 23
  },
  {
    "name": "Essence of Ill Omen",
    "combat": 14,
    "utility": 21,
    "whimsy": 19
  },
  {
    "name": "Everfrost Berry",
    "combat": 8,
    "utility": 14,
    "whimsy": 0
  },
  {
    "name": "Fable Fern",
    "combat": 38,
    "utility": 64,
    "whimsy": 8
  },
  {
    "name": "Fairy Stool",
    "combat": 35,
    "utility": 25,
    "whimsy": 91
  },
  {
    "name": "Fairy Willow",
    "combat": 38,
    "utility": 43,
    "whimsy": 43
  },
  {
    "name": "False Mandrake",
    "combat": 17,
    "utility": 31,
    "whimsy": 80
  },
  {
    "name": "Feather Rock",
    "combat": 26,
    "utility": 36,
    "whimsy": 29
  },
  {
    "name": "Fiddlehead Spark",
    "combat": 91,
    "utility": 53,
    "whimsy": 62
  },
  {
    "name": "Fire Giant Hair",
    "combat": 93,
    "utility": 14,
    "whimsy": 32
  },
  {
    "name": "Fire Peas",
    "combat": 76,
    "utility": 13,
    "whimsy": 31
  },
  {
    "name": "Firefly Curd",
    "combat": 7,
    "utility": 4,
    "whimsy": 7
  },
  {
    "name": "Fish Folk Tooth",
    "combat": 1,
    "utility": 0,
    "whimsy": 1
  },
  {
    "name": "Fish Head",
    "combat": 1,
    "utility": 0,
    "whimsy": 2
  },
  {
    "name": "Fizzing Green",
    "combat": 18,
    "utility": 13,
    "whimsy": 18
  },
  {
    "name": "Flame Lily",
    "combat": 71,
    "utility": 24,
    "whimsy": 19
  },
  {
    "name": "Flash Paper",
    "combat": 6,
    "utility": 26,
    "whimsy": 9
  },
  {
    "name": "Floating Onion",
    "combat": 8,
    "utility": 47,
    "whimsy": 19
  },
  {
    "name": "Forge Slag",
    "combat": 5,
    "utility": 32,
    "whimsy": 6
  },
  {
    "name": "Foxfire Jelly",
    "combat": 26,
    "utility": 43,
    "whimsy": 34
  },
  {
    "name": "Frost Lichen",
    "combat": 17,
    "utility": 76,
    "whimsy": 33
  },
  {
    "name": "Frosted Basil",
    "combat": 76,
    "utility": 52,
    "whimsy": 57
  },
  {
    "name": "Fungal Teacup",
    "combat": 86,
    "utility": 68,
    "whimsy": 85
  },
  {
    "name": "Gargoyle Powder",
    "combat": 11,
    "utility": 15,
    "whimsy": 31
  },
  {
    "name": "Ghost Residue",
    "combat": 38,
    "utility": 44,
    "whimsy": 80
  },
  {
    "name": "Giant Koi Fish Scale",
    "combat": 52,
    "utility": 64,
    "whimsy": 69
  },
  {
    "name": "Giant Poisonous Snake Scale",
    "combat": 44,
    "utility": 14,
    "whimsy": 5
  },
  {
    "name": "Giant Toad Slime",
    "combat": 73,
    "utility": 20,
    "whimsy": 30
  },
  {
    "name": "Giant Wolf Spider Leg",
    "combat": 32,
    "utility": 9,
    "whimsy": 3
  },
  {
    "name": "Gillyweed",
    "combat": 11,
    "utility": 34,
    "whimsy": 9
  },
  {
    "name": "Ginger Imp Root",
    "combat": 2,
    "utility": 4,
    "whimsy": 2
  },
  {
    "name": "Glassberry",
    "combat": 20,
    "utility": 23,
    "whimsy": 49
  },
  {
    "name": "Glow Worms of the Vale",
    "combat": 43,
    "utility": 16,
    "whimsy": 4
  },
  {
    "name": "Glowcap Milk",
    "combat": 35,
    "utility": 56,
    "whimsy": 43
  },
  {
    "name": "Goblin Mustard",
    "combat": 83,
    "utility": 25,
    "whimsy": 16
  },
  {
    "name": "Gohaku Rice",
    "combat": 4,
    "utility": 2,
    "whimsy": 15
  },
  {
    "name": "Golden Root",
    "combat": 55,
    "utility": 47,
    "whimsy": 32
  },
  {
    "name": "Goldfinch Eggshell",
    "combat": 27,
    "utility": 88,
    "whimsy": 29
  },
  {
    "name": "Grave Mint",
    "combat": 1,
    "utility": 1,
    "whimsy": 4
  },
  {
    "name": "Green Pepper Slime",
    "combat": 34,
    "utility": 39,
    "whimsy": 27
  },
  {
    "name": "Green Slime",
    "combat": 2,
    "utility": 1,
    "whimsy": 1
  },
  {
    "name": "Grey Ooze Slime",
    "combat": 26,
    "utility": 60,
    "whimsy": 3
  },
  {
    "name": "Hagfinger",
    "combat": 19,
    "utility": 43,
    "whimsy": 95
  },
  {
    "name": "Hakuma Sapwood",
    "combat": 3,
    "utility": 9,
    "whimsy": 0
  },
  {
    "name": "Hakumon's Ramen Broth",
    "combat": 20,
    "utility": 22,
    "whimsy": 40
  },
  {
    "name": "Hand of Eryo",
    "combat": 20,
    "utility": 52,
    "whimsy": 12
  },
  {
    "name": "Happy Joy Cake",
    "combat": 52,
    "utility": 33,
    "whimsy": 20
  },
  {
    "name": "Hearthsalt",
    "combat": 42,
    "utility": 24,
    "whimsy": 27
  },
  {
    "name": "Hill Dragon Egg",
    "combat": 28,
    "utility": 9,
    "whimsy": 9
  },
  {
    "name": "Hill Giant Pustule",
    "combat": 97,
    "utility": 39,
    "whimsy": 8
  },
  {
    "name": "Hill Giant Toenail",
    "combat": 100,
    "utility": 30,
    "whimsy": 6
  },
  {
    "name": "Honeyed Lichen",
    "combat": 24,
    "utility": 85,
    "whimsy": 8
  },
  {
    "name": "Howlier Fur",
    "combat": 4,
    "utility": 3,
    "whimsy": 4
  },
  {
    "name": "Hush Violet",
    "combat": 53,
    "utility": 63,
    "whimsy": 90
  },
  {
    "name": "Idle Claws",
    "combat": 96,
    "utility": 20,
    "whimsy": 35
  },
  {
    "name": "Imp Ichor",
    "combat": 96,
    "utility": 53,
    "whimsy": 1
  },
  {
    "name": "Irimbi Chrysalis",
    "combat": 45,
    "utility": 33,
    "whimsy": 49
  },
  {
    "name": "Iron Plum",
    "combat": 16,
    "utility": 16,
    "whimsy": 16
  },
  {
    "name": "Itchi Berry",
    "combat": 2,
    "utility": 5,
    "whimsy": 3
  },
  {
    "name": "Ivory Cork",
    "combat": 35,
    "utility": 5,
    "whimsy": 15
  },
  {
    "name": "Jack-O-Lantern Bits",
    "combat": 3,
    "utility": 3,
    "whimsy": 3
  },
  {
    "name": "Jellyfish Sugar",
    "combat": 41,
    "utility": 64,
    "whimsy": 10
  },
  {
    "name": "Jester's Nutmeg",
    "combat": 50,
    "utility": 70,
    "whimsy": 75
  },
  {
    "name": "Jumping Bonfire",
    "combat": 10,
    "utility": 18,
    "whimsy": 28
  },
  {
    "name": "Juniper Spark",
    "combat": 61,
    "utility": 74,
    "whimsy": 93
  },
  {
    "name": "Kettle Mushroom",
    "combat": 13,
    "utility": 5,
    "whimsy": 0
  },
  {
    "name": "Kingfisher Scale",
    "combat": 8,
    "utility": 11,
    "whimsy": 10
  },
  {
    "name": "Kioth Leech",
    "combat": 4,
    "utility": 11,
    "whimsy": 4
  },
  {
    "name": "Knobble Leaf Seaweed",
    "combat": 1,
    "utility": 5,
    "whimsy": 1
  },
  {
    "name": "Kojo Root",
    "combat": 23,
    "utility": 17,
    "whimsy": 18
  },
  {
    "name": "Kojobi Fruit",
    "combat": 21,
    "utility": 37,
    "whimsy": 6
  },
  {
    "name": "Lantern Beetle Shell",
    "combat": 45,
    "utility": 32,
    "whimsy": 48
  },
  {
    "name": "Laughing Moss",
    "combat": 32,
    "utility": 32,
    "whimsy": 34
  },
  {
    "name": "Laughing Parsnip",
    "combat": 80,
    "utility": 76,
    "whimsy": 47
  },
  {
    "name": "Lemon Thunder",
    "combat": 86,
    "utility": 13,
    "whimsy": 10
  },
  {
    "name": "Licorice Feather",
    "combat": 13,
    "utility": 26,
    "whimsy": 0
  },
  {
    "name": "Lightning Moss",
    "combat": 22,
    "utility": 58,
    "whimsy": 8
  },
  {
    "name": "Lightning Pea",
    "combat": 13,
    "utility": 13,
    "whimsy": 11
  },
  {
    "name": "Lion's Plume",
    "combat": 21,
    "utility": 26,
    "whimsy": 14
  },
  {
    "name": "Lionfish Poison",
    "combat": 67,
    "utility": 67,
    "whimsy": 43
  },
  {
    "name": "Little Cloud Bean",
    "combat": 51,
    "utility": 47,
    "whimsy": 28
  },
  {
    "name": "Living Spud",
    "combat": 44,
    "utility": 24,
    "whimsy": 31
  },
  {
    "name": "Lizard Pepper",
    "combat": 83,
    "utility": 17,
    "whimsy": 26
  },
  {
    "name": "Lonesome Sage",
    "combat": 50,
    "utility": 85,
    "whimsy": 68
  },
  {
    "name": "Lovers Vine",
    "combat": 29,
    "utility": 8,
    "whimsy": 0
  },
  {
    "name": "Magic Monk's Rice Wine",
    "combat": 29,
    "utility": 19,
    "whimsy": 29
  },
  {
    "name": "Mandrake Root",
    "combat": 7,
    "utility": 12,
    "whimsy": 2
  },
  {
    "name": "Marble Onion",
    "combat": 8,
    "utility": 3,
    "whimsy": 16
  },
  {
    "name": "Marshmallow Reed",
    "combat": 31,
    "utility": 24,
    "whimsy": 20
  },
  {
    "name": "Mellowort",
    "combat": 10,
    "utility": 5,
    "whimsy": 16
  },
  {
    "name": "Meteor Chicory",
    "combat": 49,
    "utility": 36,
    "whimsy": 32
  },
  {
    "name": "Milkweed Glass",
    "combat": 50,
    "utility": 65,
    "whimsy": 35
  },
  {
    "name": "Mindflayer Stinkhorn",
    "combat": 45,
    "utility": 25,
    "whimsy": 72
  },
  {
    "name": "Mirror Clove",
    "combat": 19,
    "utility": 25,
    "whimsy": 87
  },
  {
    "name": "Mist Turnip",
    "combat": 0,
    "utility": 6,
    "whimsy": 14
  },
  {
    "name": "Molted Lizard Skin",
    "combat": 66,
    "utility": 45,
    "whimsy": 56
  },
  {
    "name": "Monkey's Coil",
    "combat": 2,
    "utility": 9,
    "whimsy": 4
  },
  {
    "name": "Moon Jelly Curd",
    "combat": 26,
    "utility": 18,
    "whimsy": 15
  },
  {
    "name": "Moonstalker",
    "combat": 56,
    "utility": 47,
    "whimsy": 94
  },
  {
    "name": "Morning Dew",
    "combat": 10,
    "utility": 43,
    "whimsy": 17
  },
  {
    "name": "Mossy Peach Pit",
    "combat": 27,
    "utility": 68,
    "whimsy": 0
  },
  {
    "name": "Moth Lantern Oil",
    "combat": 49,
    "utility": 37,
    "whimsy": 82
  },
  {
    "name": "Mountain Ox Dung",
    "combat": 9,
    "utility": 4,
    "whimsy": 3
  },
  {
    "name": "Mountain Snail",
    "combat": 31,
    "utility": 37,
    "whimsy": 53
  },
  {
    "name": "Mournshade",
    "combat": 21,
    "utility": 11,
    "whimsy": 19
  },
  {
    "name": "Mouse Tree Nut",
    "combat": 7,
    "utility": 22,
    "whimsy": 2
  },
  {
    "name": "Mudberry",
    "combat": 65,
    "utility": 89,
    "whimsy": 57
  },
  {
    "name": "Mumblewort",
    "combat": 6,
    "utility": 3,
    "whimsy": 0
  },
  {
    "name": "Munchanka Root",
    "combat": 28,
    "utility": 33,
    "whimsy": 35
  },
  {
    "name": "Muroosa Bush",
    "combat": 16,
    "utility": 75,
    "whimsy": 16
  },
  {
    "name": "Nakudama Spice",
    "combat": 12,
    "utility": 16,
    "whimsy": 34
  },
  {
    "name": "Narutomaki",
    "combat": 8,
    "utility": 8,
    "whimsy": 20
  },
  {
    "name": "Needleberry",
    "combat": 6,
    "utility": 31,
    "whimsy": 3
  },
  {
    "name": "Night Thistle",
    "combat": 36,
    "utility": 44,
    "whimsy": 33
  },
  {
    "name": "Nightjar Syrup",
    "combat": 12,
    "utility": 8,
    "whimsy": 57
  },
  {
    "name": "Nightshade",
    "combat": 63,
    "utility": 37,
    "whimsy": 24
  },
  {
    "name": "Nobblewort",
    "combat": 11,
    "utility": 10,
    "whimsy": 9
  },
  {
    "name": "Nokumai's Frozen Breath",
    "combat": 61,
    "utility": 23,
    "whimsy": 7
  },
  {
    "name": "Noodle Eel",
    "combat": 25,
    "utility": 16,
    "whimsy": 21
  },
  {
    "name": "Noonshadow Leaf",
    "combat": 61,
    "utility": 78,
    "whimsy": 79
  },
  {
    "name": "Nothic Eye",
    "combat": 24,
    "utility": 19,
    "whimsy": 51
  },
  {
    "name": "Ochre Beetle Wax",
    "combat": 90,
    "utility": 15,
    "whimsy": 27
  },
  {
    "name": "Olisuba Bush",
    "combat": 27,
    "utility": 76,
    "whimsy": 4
  },
  {
    "name": "Opal Garlic",
    "combat": 6,
    "utility": 21,
    "whimsy": 9
  },
  {
    "name": "Oporion Glass",
    "combat": 5,
    "utility": 5,
    "whimsy": 5
  },
  {
    "name": "Opu Opu Spring Water",
    "combat": 8,
    "utility": 34,
    "whimsy": 14
  },
  {
    "name": "Orange Slime",
    "combat": 14,
    "utility": 54,
    "whimsy": 3
  },
  {
    "name": "Orange Thunderroot",
    "combat": 15,
    "utility": 22,
    "whimsy": 21
  },
  {
    "name": "Origami Crane",
    "combat": 4,
    "utility": 5,
    "whimsy": 2
  },
  {
    "name": "Ota Lantern Oil",
    "combat": 32,
    "utility": 9,
    "whimsy": 59
  },
  {
    "name": "Painted Pepper",
    "combat": 36,
    "utility": 19,
    "whimsy": 28
  },
  {
    "name": "Paper Lotus",
    "combat": 68,
    "utility": 43,
    "whimsy": 67
  },
  {
    "name": "Peeping Willow",
    "combat": 14,
    "utility": 8,
    "whimsy": 2
  },
  {
    "name": "Peppermint Toadstool",
    "combat": 44,
    "utility": 78,
    "whimsy": 77
  },
  {
    "name": "Petrified Alligator",
    "combat": 50,
    "utility": 48,
    "whimsy": 39
  },
  {
    "name": "Pickled Stardust",
    "combat": 0,
    "utility": 1,
    "whimsy": 2
  },
  {
    "name": "Pinecone Pearl",
    "combat": 36,
    "utility": 29,
    "whimsy": 24
  },
  {
    "name": "Pink Candle Wax",
    "combat": 1,
    "utility": 0,
    "whimsy": 1
  },
  {
    "name": "Pixie's Parasol",
    "combat": 49,
    "utility": 39,
    "whimsy": 91
  },
  {
    "name": "Plumage of a Running Kirio",
    "combat": 69,
    "utility": 26,
    "whimsy": 26
  },
  {
    "name": "Poison",
    "combat": 19,
    "utility": 12,
    "whimsy": 1
  },
  {
    "name": "Pok Pok Flakes",
    "combat": 16,
    "utility": 8,
    "whimsy": 40
  },
  {
    "name": "Pollen of the First Yawn",
    "combat": 55,
    "utility": 28,
    "whimsy": 8
  },
  {
    "name": "Puddle Orchid",
    "combat": 37,
    "utility": 58,
    "whimsy": 44
  },
  {
    "name": "Pungent Sea Foam",
    "combat": 0,
    "utility": 10,
    "whimsy": 3
  },
  {
    "name": "Purple Worm Bile",
    "combat": 96,
    "utility": 47,
    "whimsy": 0
  },
  {
    "name": "Pyramid Melon",
    "combat": 14,
    "utility": 15,
    "whimsy": 29
  },
  {
    "name": "Queen's Dilemma",
    "combat": 28,
    "utility": 28,
    "whimsy": 18
  },
  {
    "name": "Quicksilver Bean",
    "combat": 52,
    "utility": 76,
    "whimsy": 61
  },
  {
    "name": "Quipper Scales",
    "combat": 36,
    "utility": 7,
    "whimsy": 16
  },
  {
    "name": "Rabbit Moon Carrot",
    "combat": 21,
    "utility": 23,
    "whimsy": 20
  },
  {
    "name": "Rainbow Mushroom",
    "combat": 41,
    "utility": 31,
    "whimsy": 99
  },
  {
    "name": "Rainbow Onion",
    "combat": 34,
    "utility": 9,
    "whimsy": 3
  },
  {
    "name": "Raka Paste",
    "combat": 17,
    "utility": 3,
    "whimsy": 5
  },
  {
    "name": "Rattle Shoot",
    "combat": 11,
    "utility": 19,
    "whimsy": 1
  },
  {
    "name": "Red Amanita Mushroom",
    "combat": 8,
    "utility": 4,
    "whimsy": 17
  },
  {
    "name": "Redcap Honey",
    "combat": 31,
    "utility": 50,
    "whimsy": 43
  },
  {
    "name": "Reed Dragonfly Wing",
    "combat": 46,
    "utility": 51,
    "whimsy": 64
  },
  {
    "name": "Remorhaz Sulphur",
    "combat": 91,
    "utility": 24,
    "whimsy": 7
  },
  {
    "name": "Ribbon Root",
    "combat": 6,
    "utility": 6,
    "whimsy": 5
  },
  {
    "name": "Riverglass Salt",
    "combat": 53,
    "utility": 69,
    "whimsy": 88
  },
  {
    "name": "Ronin Neko Figurine",
    "combat": 52,
    "utility": 33,
    "whimsy": 3
  },
  {
    "name": "Rooster Ember",
    "combat": 17,
    "utility": 10,
    "whimsy": 6
  },
  {
    "name": "Rose Quartz Pepper",
    "combat": 32,
    "utility": 33,
    "whimsy": 21
  },
  {
    "name": "Rubble from a Rubble Golem",
    "combat": 41,
    "utility": 19,
    "whimsy": 6
  },
  {
    "name": "Rust Crab",
    "combat": 21,
    "utility": 19,
    "whimsy": 19
  },
  {
    "name": "Rustleberry",
    "combat": 22,
    "utility": 42,
    "whimsy": 67
  },
  {
    "name": "Saffron Slug Trail",
    "combat": 61,
    "utility": 65,
    "whimsy": 74
  },
  {
    "name": "Sage Arol's Beetle",
    "combat": 23,
    "utility": 61,
    "whimsy": 13
  },
  {
    "name": "Salted Comet Dust",
    "combat": 84,
    "utility": 74,
    "whimsy": 64
  },
  {
    "name": "Sandglass Seed",
    "combat": 7,
    "utility": 18,
    "whimsy": 3
  },
  {
    "name": "Sapphire Leek",
    "combat": 15,
    "utility": 27,
    "whimsy": 44
  },
  {
    "name": "Scalefruit Rind",
    "combat": 22,
    "utility": 5,
    "whimsy": 8
  },
  {
    "name": "Screaming Thyme",
    "combat": 13,
    "utility": 71,
    "whimsy": 16
  },
  {
    "name": "Sea Water",
    "combat": 3,
    "utility": 1,
    "whimsy": 6
  },
  {
    "name": "Seafoam Turnip",
    "combat": 74,
    "utility": 33,
    "whimsy": 31
  },
  {
    "name": "Seashell",
    "combat": 4,
    "utility": 6,
    "whimsy": 5
  },
  {
    "name": "Seaweed",
    "combat": 6,
    "utility": 18,
    "whimsy": 32
  },
  {
    "name": "Shadow Lemon",
    "combat": 23,
    "utility": 91,
    "whimsy": 20
  },
  {
    "name": "Shadowroot",
    "combat": 26,
    "utility": 49,
    "whimsy": 6
  },
  {
    "name": "Sheep Dragon Wool",
    "combat": 16,
    "utility": 20,
    "whimsy": 25
  },
  {
    "name": "Silver Kelp Knot",
    "combat": 0,
    "utility": 1,
    "whimsy": 2
  },
  {
    "name": "Silverthorn",
    "combat": 60,
    "utility": 54,
    "whimsy": 100
  },
  {
    "name": "Singing Caraway",
    "combat": 42,
    "utility": 45,
    "whimsy": 33
  },
  {
    "name": "Singing Nettle",
    "combat": 50,
    "utility": 42,
    "whimsy": 79
  },
  {
    "name": "Skulk Petal",
    "combat": 27,
    "utility": 45,
    "whimsy": 79
  },
  {
    "name": "Skullcap Cherry",
    "combat": 56,
    "utility": 34,
    "whimsy": 21
  },
  {
    "name": "Sleeping Merchant",
    "combat": 48,
    "utility": 48,
    "whimsy": 48
  },
  {
    "name": "Sleepy Fern",
    "combat": 17,
    "utility": 84,
    "whimsy": 18
  },
  {
    "name": "Smoked Moon Bean",
    "combat": 17,
    "utility": 49,
    "whimsy": 88
  },
  {
    "name": "Snap Vine Sap",
    "combat": 4,
    "utility": 5,
    "whimsy": 8
  },
  {
    "name": "Snow Cricket Shell",
    "combat": 0,
    "utility": 4,
    "whimsy": 9
  },
  {
    "name": "Soaproot",
    "combat": 40,
    "utility": 11,
    "whimsy": 10
  },
  {
    "name": "Soda Lilly",
    "combat": 25,
    "utility": 66,
    "whimsy": 11
  },
  {
    "name": "Sour Salamander Egg",
    "combat": 54,
    "utility": 62,
    "whimsy": 64
  },
  {
    "name": "Sourgrass",
    "combat": 63,
    "utility": 36,
    "whimsy": 2
  },
  {
    "name": "Spark Plug",
    "combat": 38,
    "utility": 5,
    "whimsy": 0
  },
  {
    "name": "Sparkle Yam",
    "combat": 73,
    "utility": 64,
    "whimsy": 88
  },
  {
    "name": "Spectral Oat",
    "combat": 7,
    "utility": 1,
    "whimsy": 3
  },
  {
    "name": "Spider Silk Tea",
    "combat": 7,
    "utility": 12,
    "whimsy": 6
  },
  {
    "name": "Spindle Leg Spider Webs",
    "combat": 12,
    "utility": 5,
    "whimsy": 3
  },
  {
    "name": "Spirit Root",
    "combat": 12,
    "utility": 5,
    "whimsy": 29
  },
  {
    "name": "Spirit Tea",
    "combat": 16,
    "utility": 22,
    "whimsy": 15
  },
  {
    "name": "Spring Moss",
    "combat": 11,
    "utility": 6,
    "whimsy": 40
  },
  {
    "name": "Squid Ink",
    "combat": 14,
    "utility": 9,
    "whimsy": 14
  },
  {
    "name": "Starshell",
    "combat": 15,
    "utility": 23,
    "whimsy": 65
  },
  {
    "name": "Stone Giant Skin",
    "combat": 93,
    "utility": 20,
    "whimsy": 36
  },
  {
    "name": "Storm Giant's Toe",
    "combat": 97,
    "utility": 44,
    "whimsy": 22
  },
  {
    "name": "Sun Shroom",
    "combat": 10,
    "utility": 7,
    "whimsy": 45
  },
  {
    "name": "Tangle Weed",
    "combat": 22,
    "utility": 11,
    "whimsy": 9
  },
  {
    "name": "Tears of the Moon",
    "combat": 42,
    "utility": 51,
    "whimsy": 51
  },
  {
    "name": "Theki Root",
    "combat": 41,
    "utility": 75,
    "whimsy": 21
  },
  {
    "name": "Toka Truffle",
    "combat": 47,
    "utility": 28,
    "whimsy": 20
  },
  {
    "name": "True Dragon Scale",
    "combat": 97,
    "utility": 25,
    "whimsy": 2
  },
  {
    "name": "Ube",
    "combat": 9,
    "utility": 20,
    "whimsy": 4
  },
  {
    "name": "Varrow",
    "combat": 2,
    "utility": 3,
    "whimsy": 17
  },
  {
    "name": "Vinyl Record",
    "combat": 16,
    "utility": 28,
    "whimsy": 28
  },
  {
    "name": "Water Elemental Droplet",
    "combat": 50,
    "utility": 100,
    "whimsy": 18
  },
  {
    "name": "White Ghost Orchid Seed",
    "combat": 43,
    "utility": 74,
    "whimsy": 26
  },
  {
    "name": "Willowshade Bush",
    "combat": 22,
    "utility": 70,
    "whimsy": 1
  },
  {
    "name": "Windbloom",
    "combat": 38,
    "utility": 38,
    "whimsy": 21
  },
  {
    "name": "Witch's Broom",
    "combat": 14,
    "utility": 2,
    "whimsy": 6
  },
  {
    "name": "Witch's Eye Coral",
    "combat": 19,
    "utility": 21,
    "whimsy": 47
  },
  {
    "name": "Wolfenite",
    "combat": 14,
    "utility": 13,
    "whimsy": 24
  },
  {
    "name": "Wolfsbane",
    "combat": 93,
    "utility": 25,
    "whimsy": 29
  },
  {
    "name": "Wufu Whisky",
    "combat": 60,
    "utility": 31,
    "whimsy": 2
  },
  {
    "name": "Wychwood",
    "combat": 31,
    "utility": 50,
    "whimsy": 17
  },
  {
    "name": "Wyvern Saliva",
    "combat": 87,
    "utility": 25,
    "whimsy": 24
  },
  {
    "name": "Wyvern Stinger",
    "combat": 86,
    "utility": 28,
    "whimsy": 34
  },
  {
    "name": "Yugi Sap",
    "combat": 2,
    "utility": 1,
    "whimsy": 4
  },
  {
    "name": "Yuma Shrub",
    "combat": 12,
    "utility": 14,
    "whimsy": 12
  }
];
const WHIMSY_POTIONS = [
  {
    "index": 1,
    "name": "Melodious Bird Calls",
    "level": 1,
    "description": "For 24 hours, you can perfectly imitate the call of any songbird you have heard."
  },
  {
    "index": 2,
    "name": "Projected Thoughts",
    "level": 1,
    "description": "A thought bubble appears over your head for 1 hour and can display silent words or simple images of your choice."
  },
  {
    "index": 3,
    "name": "Intoxicating Aroma",
    "level": 1,
    "description": "For 22 years you smell like a perfectly made perfume; it does not count against active potion limits."
  },
  {
    "index": 4,
    "name": "Ladybug Kinship",
    "level": 1,
    "description": "For 1 minute you evaporate into a swarm of ladybugs, then reform where the swarm ends."
  },
  {
    "index": 5,
    "name": "Essence of Umami",
    "level": 1,
    "description": "A food you pour this onto becomes a magical version of the eater's ideal meal."
  },
  {
    "index": 6,
    "name": "Vocal Stranger",
    "level": 2,
    "description": "For 1 hour you can perfectly mimic one familiar voice, or a random unfamiliar voice if you choose no target."
  },
  {
    "index": 7,
    "name": "Beard Brew",
    "level": 2,
    "description": "You instantly grow facial hair, even if you normally could not. It remains until shaved."
  },
  {
    "index": 8,
    "name": "Photosynthetic Skin",
    "level": 2,
    "description": "For 24 hours, while in sunlight, you regain 1 Hit Point at the start of each hour."
  },
  {
    "index": 9,
    "name": "Paradise Plumage",
    "level": 2,
    "description": "For 24 hours you grow dazzling plumage; gain a +2 circumstance bonus to Performance checks to distract or amaze."
  },
  {
    "index": 10,
    "name": "Musical Mixer",
    "level": 2,
    "description": "When uncorked, the elixir produces gentle ethereal music for 1 hour as it evaporates."
  },
  {
    "index": 11,
    "name": "Stink Brew",
    "level": 3,
    "description": "For 1d4 rounds, creatures within 15 feet must attempt a Fortitude save or be unwilling to move closer to you."
  },
  {
    "index": 12,
    "name": "Duko the Trickster's Elixir",
    "level": 3,
    "description": "You produce one foul egg from your mouth within 1 hour; this does not count against active potion limits."
  },
  {
    "index": 13,
    "name": "Manifested Nostalgia",
    "level": 3,
    "description": "For 4 hours you become a childlike version of yourself, one size smaller to a minimum of Small."
  },
  {
    "index": 14,
    "name": "Pigment",
    "level": 3,
    "description": "For 8 hours you can produce endless oil paint from your fingertips, choosing colors at will."
  },
  {
    "index": 15,
    "name": "Audio Oddity",
    "level": 3,
    "description": "For 1 hour, every spell you cast produces a strange, embarrassing, harmless sound."
  },
  {
    "index": 16,
    "name": "Hindsight",
    "level": 4,
    "description": "When poured onto and licked from an object, reveals one minor but useful fact about that object."
  },
  {
    "index": 17,
    "name": "Super Singing",
    "level": 4,
    "description": "For 1 hour you cannot speak without singing; gain a +2 circumstance bonus to vocal Performance checks."
  },
  {
    "index": 18,
    "name": "Fluffplum Tonic",
    "level": 4,
    "description": "For 1 hour you weigh 1 pound and fall as though affected by feather fall."
  },
  {
    "index": 19,
    "name": "Merriment",
    "level": 4,
    "description": "For 1 hour gain a +2 circumstance bonus to one skill, but a -2 penalty to checks not using that skill."
  },
  {
    "index": 20,
    "name": "Bubble Message",
    "level": 4,
    "description": "You hiccup a message bubble that travels to a familiar creature and repeats your message in your voice."
  },
  {
    "index": 21,
    "name": "Crystal Clear",
    "level": 5,
    "description": "Makes a non-magical liquid invisible for 1d4 hours if the volume is no larger than a 20-foot cube."
  },
  {
    "index": 22,
    "name": "Elder Elixir",
    "level": 5,
    "description": "Your age temporarily doubles for 1d12 months; it does not count against active potion limits."
  },
  {
    "index": 23,
    "name": "Witch's Hidden Gem",
    "level": 5,
    "description": "For 1 hour, liquids you drink taste and function as wine to you."
  },
  {
    "index": 24,
    "name": "Carbonated Snake",
    "level": 5,
    "description": "When shaken and aimed, the elixir becomes a small poisonous snake in a nearby space."
  },
  {
    "index": 25,
    "name": "Shadow Child",
    "level": 5,
    "description": "For 1 hour, an unseen childlike shadow servant follows your directions as unseen servant."
  },
  {
    "index": 26,
    "name": "Hsirebbig",
    "level": 6,
    "description": "For 24 hours, your speech sounds like gibberish to everyone not under the same potion."
  },
  {
    "index": 27,
    "name": "Sky Swimming",
    "level": 6,
    "description": "For 10 minutes you gain a fly Speed of 15 feet, but movement looks and feels like swimming."
  },
  {
    "index": 28,
    "name": "Passing Memory",
    "level": 6,
    "description": "Stores one chosen memory from the brewer; a later drinker experiences that memory."
  },
  {
    "index": 29,
    "name": "Bottled Slime",
    "level": 6,
    "description": "A tiny soda slime escapes if shattered; it acts independently and mischievously."
  },
  {
    "index": 30,
    "name": "Oil of the Trademark Flourish",
    "level": 6,
    "description": "Apply to an object to give it a permanent signature sound whenever used, removable as a curse."
  },
  {
    "index": 31,
    "name": "Mosspot",
    "level": 7,
    "description": "For 1 hour you polymorph into a mossling-like spirit; the effect needs no concentration."
  },
  {
    "index": 32,
    "name": "Incredible Luck",
    "level": 7,
    "description": "For the next 1d4 checks, attacks, or saves you make, gain a +2 circumstance bonus."
  },
  {
    "index": 33,
    "name": "Grand Friendship",
    "level": 7,
    "description": "Shared among up to eight creatures; for 24 hours they can fly while holding hands with all other drinkers."
  },
  {
    "index": 34,
    "name": "Witch's Lament",
    "level": 7,
    "description": "A raincloud weeps over you, then your head permanently becomes a GM-chosen animal head until cured."
  },
  {
    "index": 35,
    "name": "Spirit Appendage",
    "level": 8,
    "description": "You grow a 6-foot prehensile tail for 1d12 days; it can serve as a third arm for simple tasks."
  },
  {
    "index": 36,
    "name": "Move a Thing",
    "level": 8,
    "description": "Poured onto an object of 500 pounds or less, it becomes lighter over time until it weighs 10 pounds for 1 week."
  },
  {
    "index": 37,
    "name": "Gobble Gunk",
    "level": 8,
    "description": "For 1 hour you can safely eat anything that fits in your mouth, then regurgitate it when the effect ends."
  },
  {
    "index": 38,
    "name": "Pocket Portal",
    "level": 8,
    "description": "Buried for 24 hours, it opens a temporary spirit portal for 24 hours."
  },
  {
    "index": 39,
    "name": "Don't Eat Dirt",
    "level": 9,
    "description": "For 10 days you become immune to being prone; if you would fall prone, you remain standing."
  },
  {
    "index": 40,
    "name": "Lunar Elixir",
    "level": 9,
    "description": "Creates a moon-gravity cylinder for 8 hours: jump distances triple and falling damage is halved inside."
  },
  {
    "index": 41,
    "name": "Lifetime Supply",
    "level": 9,
    "description": "Your hair grows 1d4+2 times 100 feet, then all hair falls out when the potion ends after 1 minute."
  },
  {
    "index": 42,
    "name": "Invisible Tonic",
    "level": 9,
    "description": "Poured onto a Small or smaller object, it becomes invisible until the effect is removed as a curse."
  },
  {
    "index": 43,
    "name": "Liquid Disguise",
    "level": 10,
    "description": "For 24 hours, you take the visage of a random humanoid within 1 mile."
  },
  {
    "index": 44,
    "name": "Spirit Sweets",
    "level": 10,
    "description": "Spirits find this irresistible; it can intoxicate or attract low-rank spirits for a time."
  },
  {
    "index": 45,
    "name": "A New Look",
    "level": 10,
    "description": "Your head becomes that of a random anthropomorphic animal until cured; it does not count against active potion limits."
  },
  {
    "index": 46,
    "name": "Shadow Puppet",
    "level": 10,
    "description": "Your shadow gains sentience and personality until cured, though it cannot physically affect the world."
  },
  {
    "index": 47,
    "name": "Object Embodiment",
    "level": 11,
    "description": "For 1 hour your body becomes an object of your choice as true polymorph-like whimsy."
  },
  {
    "index": 48,
    "name": "Phoenix Elixir",
    "level": 11,
    "description": "For 24 hours you are immune to fire; when the effect ends, you burn away and are reborn from a nearby bonfire 1 hour later."
  },
  {
    "index": 49,
    "name": "Unknown Elixir",
    "level": 11,
    "description": "You gain the ability to cast one random spell of 6th rank or lower once before the effect ends."
  },
  {
    "index": 50,
    "name": "Illusion in a Bottle",
    "level": 11,
    "description": "Poured out, it creates a major image-like illusion of your choice for 1 hour."
  },
  {
    "index": 51,
    "name": "Homegrown",
    "level": 13,
    "description": "Poured onto a clear 50-foot-square surface, it creates a furnished foam home after 1 minute."
  },
  {
    "index": 52,
    "name": "Mind Transfer",
    "level": 13,
    "description": "The first creature to touch you within 1 hour becomes host to your mind and soul until the effect ends or is dispelled."
  },
  {
    "index": 53,
    "name": "New Life",
    "level": 14,
    "description": "For 7 years or until cured, you gain a flawless illusionary disguise matching a familiar humanoid."
  },
  {
    "index": 54,
    "name": "Ups-A-Daisy",
    "level": 14,
    "description": "Poured onto a creature or object, it awakens the target for 1 year, as an awaken-like effect."
  },
  {
    "index": 55,
    "name": "Spiritual Rebuke",
    "level": 15,
    "description": "Poured on earth, creates a 10-foot antimagic zone lasting 1 year."
  },
  {
    "index": 56,
    "name": "Newly Found Magic",
    "level": 15,
    "description": "You permanently learn one random 3rd-rank spell and can cast it once before your next daily preparations; it does not count against active potion limits."
  }
,
  {
    "index": 57,
    "name": "Potion of Borrowed Balance",
    "level": 1,
    "description": "For 10 minutes, tiny unseen hands steady you whenever you wobble; gain a +1 item bonus to Acrobatics checks to Balance and you ignore uneven ground caused by loose clutter."
  },
  {
    "index": 58,
    "name": "Potion of Endless Chalk",
    "level": 1,
    "description": "For 24 hours, one fingertip can leave harmless chalk marks on stone, wood, metal, or glass. The marks can be wiped away normally."
  },
  {
    "index": 59,
    "name": "Potion of Friendly Echoes",
    "level": 1,
    "description": "For 10 minutes, you may cause your whispered words to repeat softly from a point within 30 feet, useful for distractions or quiet signals."
  },
  {
    "index": 60,
    "name": "Potion of Feather Pockets",
    "level": 1,
    "description": "For 8 hours, one worn container you designate treats up to 1 Bulk of mundane contents as negligible Bulk."
  },
  {
    "index": 61,
    "name": "Potion of Lantern Eyes",
    "level": 2,
    "description": "For 1 hour, your eyes shed bright light in a 10-foot radius and dim light for another 10 feet. You can suppress or resume the glow as an action."
  },
  {
    "index": 62,
    "name": "Potion of Polite Doorways",
    "level": 2,
    "description": "For 10 minutes, unlocked doors, curtains, and shutters within reach swing open or closed for you with a courteous creak when you ask."
  },
  {
    "index": 63,
    "name": "Potion of Borrowed Scent",
    "level": 2,
    "description": "For 1 hour, you can choose to smell like one creature or object you touched while drinking the potion, granting a +1 item bonus to Deception checks involving scent."
  },
  {
    "index": 64,
    "name": "Potion of Dry Socks",
    "level": 2,
    "description": "For 24 hours, your clothing and worn gear remain comfortably dry in rain, mist, and shallow water, though immersion still wets unattended items."
  },
  {
    "index": 65,
    "name": "Potion of Quiet Footprints",
    "level": 3,
    "description": "For 1 hour, your footprints fade 1 round after you leave them, giving you a +1 item bonus to checks to avoid being tracked by mundane means."
  },
  {
    "index": 66,
    "name": "Potion of Borrowed Handwriting",
    "level": 3,
    "description": "For 1 hour, you can perfectly reproduce handwriting you have studied for at least 1 minute, though you do not learn the writer's language or secrets."
  },
  {
    "index": 67,
    "name": "Potion of Pocket Umbrella",
    "level": 3,
    "description": "For 8 hours, a small floating umbrella follows you, shielding you and one held object from rain, falling ash, and similar harmless precipitation."
  },
  {
    "index": 68,
    "name": "Potion of Honest Reflection",
    "level": 3,
    "description": "For 10 minutes, reflections you look into show whether your current clothing, disguise, or posture would draw unusual attention in the local culture."
  },
  {
    "index": 69,
    "name": "Potion of Echo Storage",
    "level": 4,
    "description": "You speak one sentence of 25 words or fewer into the bottle. Within the next 24 hours, you may uncork it to replay the sentence in your voice."
  },
  {
    "index": 70,
    "name": "Potion of Perfect Direction",
    "level": 4,
    "description": "For 8 hours, you always know the direction and approximate distance to the place where you drank this potion, provided it is on the same plane."
  },
  {
    "index": 71,
    "name": "Potion of Candlefish",
    "level": 4,
    "description": "For 1 hour, a tiny glowing fish swims through the air near you, shedding light as a candle and obeying simple directions within 60 feet."
  },
  {
    "index": 72,
    "name": "Potion of Mended Manners",
    "level": 4,
    "description": "For 10 minutes, your accidental spills, torn hems, smudges, and social clumsiness magically correct themselves, granting a +1 item bonus to Diplomacy checks at formal gatherings."
  },
  {
    "index": 73,
    "name": "Bottle of Folded Distance",
    "level": 5,
    "description": "For 1 hour, you may fold one rope, ladder, pole, or similar flexible tool of up to 20 feet into a palm-sized knot and unfold it again as an Interact action."
  },
  {
    "index": 74,
    "name": "Potion of Moth-Wing Silence",
    "level": 5,
    "description": "For 10 minutes, your clothing and carried gear make no sound, granting a +1 item bonus to Stealth checks to Sneak."
  },
  {
    "index": 75,
    "name": "Potion of Eager Broom",
    "level": 5,
    "description": "For 1 hour, one broom, mop, brush, or similar cleaning tool animates and tidies a 10-foot square each minute, obeying simple spoken directions."
  },
  {
    "index": 76,
    "name": "Potion of Second First Impression",
    "level": 5,
    "description": "Within 10 minutes of drinking, you may reintroduce yourself to one creature; you gain a +2 circumstance bonus to your next Diplomacy check against that creature."
  },
  {
    "index": 77,
    "name": "Potion of Living Map",
    "level": 6,
    "description": "For 8 hours, a mundane map you carry updates with rooms, streets, or paths you personally explore, though it cannot reveal hidden areas you did not notice."
  },
  {
    "index": 78,
    "name": "Potion of Animated Rope",
    "level": 6,
    "description": "For 10 minutes, one rope up to 50 feet long obeys simple commands such as coil, knot, climb, pull, or bind, using your actions to direct it."
  },
  {
    "index": 79,
    "name": "Potion of Borrowed Reflection",
    "level": 6,
    "description": "For 10 minutes, your reflection can peer from any mirror or still water you can see within 60 feet, letting you observe from that surface's angle."
  },
  {
    "index": 80,
    "name": "Potion of Convenient Labeling",
    "level": 6,
    "description": "For 24 hours, any container you touch can display a short magical label visible only to creatures you designate."
  },
  {
    "index": 81,
    "name": "Potion of Tiny Cloud",
    "level": 7,
    "description": "For 1 hour, a personal cloud follows you. It can provide shade, drizzle water into a cup, or lightly obscure your square once per minute."
  },
  {
    "index": 82,
    "name": "Potion of Shared Dream",
    "level": 7,
    "description": "If you drink this before resting, up to six willing creatures who sleep within 30 feet share a lucid dream and can converse during the rest."
  },
  {
    "index": 83,
    "name": "Potion of Soft Landing",
    "level": 7,
    "description": "For 1 hour, the first time you would take falling damage, a pile of illusory cushions becomes real for an instant and reduces the damage by 30."
  },
  {
    "index": 84,
    "name": "Potion of Borrowed Knack",
    "level": 7,
    "description": "Choose a mundane tool you hold while drinking. For 1 hour, you gain a +1 item bonus to checks using that tool for noncombat tasks."
  },
  {
    "index": 85,
    "name": "Potion of Paper Self",
    "level": 8,
    "description": "For 10 minutes, you can flatten yourself like folded paper, allowing you to squeeze through gaps as narrow as 1 inch, though you cannot carry bulky objects through them."
  },
  {
    "index": 86,
    "name": "Potion of Chatty Lock",
    "level": 8,
    "description": "For 10 minutes, one lock, latch, or hinge you touch answers three simple questions about the last creature to open it."
  },
  {
    "index": 87,
    "name": "Potion of Helpful Hat",
    "level": 8,
    "description": "For 1 hour, a hat you wear produces one mundane handheld object of negligible Bulk each minute, such as chalk, twine, a spoon, or a button."
  },
  {
    "index": 88,
    "name": "Potion of Sincere Applause",
    "level": 8,
    "description": "For 10 minutes, harmless spectral hands applaud when you complete a Performance, providing a +2 circumstance bonus to one Performance check made during the duration."
  },
  {
    "index": 89,
    "name": "Potion of Pocket Workshop",
    "level": 9,
    "description": "For 1 hour, you may unfold a tiny extradimensional workbench containing basic artisan's tools. It cannot replace costly materials or specialized laboratories."
  },
  {
    "index": 90,
    "name": "Potion of Living Shadow",
    "level": 9,
    "description": "For 10 minutes, your shadow detaches and performs simple unattended tasks within 30 feet, such as carrying a negligible object, pointing, or opening an unlocked door."
  },
  {
    "index": 91,
    "name": "Potion of Rumor Bubbles",
    "level": 9,
    "description": "For 10 minutes, when you enter a settlement, three floating bubbles whisper harmless recent rumors known to common locals, though they may be incomplete or exaggerated."
  },
  {
    "index": 92,
    "name": "Potion of Unlost Object",
    "level": 9,
    "description": "For 24 hours, you may name one mundane object you own; you always know the direction to it while it remains within 1 mile."
  },
  {
    "index": 93,
    "name": "Potion of Borrowed Voice",
    "level": 10,
    "description": "For 1 hour, you can speak in the voice of any creature you have heard for at least 1 minute, gaining a +2 circumstance bonus to Deception checks using the voice."
  },
  {
    "index": 94,
    "name": "Potion of Gravity Ribbon",
    "level": 10,
    "description": "Once within 10 minutes, you may create a 10-foot-square ribbon of altered gravity for 1 round, allowing creatures crossing it to walk along a wall or ceiling until the round ends."
  },
  {
    "index": 95,
    "name": "Potion of Bottled Audience",
    "level": 10,
    "description": "When opened, illusory spectators fill a 30-foot area for 10 minutes. They cheer, gasp, or boo on cue and provide cover for social misdirection, not physical attacks."
  },
  {
    "index": 96,
    "name": "Potion of Message in the Rain",
    "level": 10,
    "description": "For 24 hours, you can write a message of up to 25 words in falling rain or mist. A chosen creature within 1 mile sees it as droplets arrange themselves nearby."
  },
  {
    "index": 97,
    "name": "Potion of Mirror Errand",
    "level": 11,
    "description": "For 10 minutes, your reflection can step into one mirror and emerge from another mirror you can see within 120 feet, carrying one negligible object."
  },
  {
    "index": 98,
    "name": "Potion of Talking Footprints",
    "level": 11,
    "description": "For 1 hour, your footprints can whisper a short message to the next creature that follows them, then vanish."
  },
  {
    "index": 99,
    "name": "Potion of Polymathic Tongue",
    "level": 11,
    "description": "For 1 hour, you can understand and speak one language used by a creature you touched while drinking the potion, though you cannot read or write it."
  },
  {
    "index": 100,
    "name": "Potion of Borrowed Posture",
    "level": 11,
    "description": "For 8 hours, you can perfectly imitate the stance, gait, and habitual gestures of one humanoid you observed for 10 minutes, granting a +2 circumstance bonus to Impersonate them."
  },
  {
    "index": 101,
    "name": "Potion of Door Memory",
    "level": 12,
    "description": "Pour this on a wall, door, or archway. For 10 minutes, it shows a translucent image of the last creature to pass through or touch that passage."
  },
  {
    "index": 102,
    "name": "Potion of Gentle Duplicate",
    "level": 12,
    "description": "For 1 hour, you create a fragile duplicate of one mundane object of 1 Bulk or less. It functions for simple tasks but collapses into bubbles if used as a weapon or sold."
  },
  {
    "index": 103,
    "name": "Potion of Convenient Weather",
    "level": 12,
    "description": "For 1 hour, a 20-foot emanation around you has pleasant temperature, a mild breeze, and clear air, protecting against ordinary discomfort but not environmental damage."
  },
  {
    "index": 104,
    "name": "Potion of Borrowed Eyes",
    "level": 12,
    "description": "For 10 minutes, a willing adjacent creature may let you see through its eyes as long as it remains within 1 mile; you are dazzled while doing so."
  },
  {
    "index": 105,
    "name": "Potion of Forgotten Door",
    "level": 13,
    "description": "For 1 hour, you create a faint doorway on a flat surface. Only creatures you designate can perceive or use it, and it opens into the other side if the wall is no more than 5 feet thick."
  },
  {
    "index": 106,
    "name": "Potion of Painted Servant",
    "level": 13,
    "description": "You paint a Small or smaller simple servant onto a surface. It becomes real for 1 hour and can perform simple household tasks but cannot attack."
  },
  {
    "index": 107,
    "name": "Potion of Name Tagging",
    "level": 13,
    "description": "For 24 hours, you can see a harmless floating label above any creature who willingly tells you their name, title, or nickname."
  },
  {
    "index": 108,
    "name": "Potion of Borrowed Footsteps",
    "level": 13,
    "description": "For 1 hour, you leave the tracks, scent, and gait of a creature whose footprint you touch while drinking, gaining a +2 circumstance bonus to mislead trackers."
  },
  {
    "index": 109,
    "name": "Potion of Bottled Dawn",
    "level": 14,
    "description": "When opened, sunrise-colored light fills a 60-foot emanation for 10 minutes, counteracting magical darkness of 6th rank or lower and suppressing mundane gloom."
  },
  {
    "index": 110,
    "name": "Potion of Page-Walker",
    "level": 14,
    "description": "For 10 minutes, you may step into a book, map, or painting large enough to hold your silhouette, moving through its depicted space and emerging from the same surface."
  },
  {
    "index": 111,
    "name": "Potion of Borrowed Hearth",
    "level": 14,
    "description": "For 8 hours, you can conjure the warmth, smell, and emotional comfort of a safe home, granting allies a +2 circumstance bonus to checks against fear during a rest."
  },
  {
    "index": 112,
    "name": "Potion of Clockwork Choreography",
    "level": 14,
    "description": "For 1 minute, up to six willing creatures within 30 feet know each other's intended movements, gaining a +1 item bonus to Acrobatics checks and checks to Aid each other."
  },
  {
    "index": 113,
    "name": "Potion of Painted Reality",
    "level": 15,
    "description": "You may paint one mundane object of up to 2 Bulk. It becomes real for 1 hour, after which it runs into harmless colored liquid."
  },
  {
    "index": 114,
    "name": "Potion of Stolen Tomorrow",
    "level": 15,
    "description": "When you drink this, choose one harmless ongoing effect on yourself with a duration of at least 10 minutes. It pauses and resumes at the next dawn with its remaining duration."
  },
  {
    "index": 115,
    "name": "Potion of Impossible Library",
    "level": 15,
    "description": "For 1 hour, you can perfectly recall the contents of one book, scroll, or set of notes you have read within the last year."
  },
  {
    "index": 116,
    "name": "Potion of Reverse Footnote",
    "level": 15,
    "description": "For 10 minutes, when you speak a factual statement aloud, tiny glowing footnotes appear in the air citing where you learned it, if you honestly know."
  },
  {
    "index": 117,
    "name": "Potion of Borrowed Room",
    "level": 16,
    "description": "For 1 hour, a door you open may instead lead to a harmless extradimensional sitting room. The room contains mundane seating and vanishes when empty."
  },
  {
    "index": 118,
    "name": "Potion of Tiny Town",
    "level": 16,
    "description": "Pour this onto a table to create a miniature illusory model of the nearest settlement for 10 minutes, showing major streets and public buildings you have visited."
  },
  {
    "index": 119,
    "name": "Potion of Moonlit Appointment",
    "level": 16,
    "description": "Name a willing creature you know. At the next moonrise, both of you hear a brief chime and know the direction to each other for 10 minutes if on the same plane."
  },
  {
    "index": 120,
    "name": "Potion of Reliable Coincidence",
    "level": 16,
    "description": "Once within 24 hours, when you need a small mundane object worth 1 gp or less, you find that you packed it after all."
  },
  {
    "index": 121,
    "name": "Potion of Borrowed Horizon",
    "level": 17,
    "description": "For 10 minutes, you can see from a point in the sky directly above you, out to 1 mile, as though your eyes hovered there."
  },
  {
    "index": 122,
    "name": "Potion of Courteous Wall",
    "level": 17,
    "description": "For 10 minutes, one 10-foot section of non-magical wall you touch becomes politely permeable to you and willing creatures you guide, but remains solid to others."
  },
  {
    "index": 123,
    "name": "Potion of Grand Rehearsal",
    "level": 17,
    "description": "Drink before attempting a noncombat activity that takes no more than 10 minutes. You experience a harmless mental rehearsal and gain a +2 circumstance bonus to the check."
  },
  {
    "index": 124,
    "name": "Potion of Borrowed Silence",
    "level": 17,
    "description": "For 10 minutes, you can gather all sound you make into a visible glass marble. Breaking the marble releases the stored sound at once."
  },
  {
    "index": 125,
    "name": "Potion of Edit Spoken Word",
    "level": 18,
    "description": "Within 1 minute of drinking, you may alter one sentence of 25 words or fewer that you spoke in the last minute. Creatures remember the revised sentence unless they succeed at a Will save."
  },
  {
    "index": 126,
    "name": "Potion of Gravity Picnic",
    "level": 18,
    "description": "For 10 minutes, a 20-foot cube you designate has subjective gravity chosen by you. Creatures can orient themselves with an Interact action."
  },
  {
    "index": 127,
    "name": "Potion of Wandering Doorbell",
    "level": 18,
    "description": "For 24 hours, you may designate one doorway. Whenever a creature passes through it, you hear a distinctive chime regardless of distance on the same plane."
  },
  {
    "index": 128,
    "name": "Potion of Borrowed Weather",
    "level": 18,
    "description": "For 1 hour, you may carry the weather from your current location in a 20-foot emanation, preserving rain, snow, mist, or clear sky as harmless ambience."
  },
  {
    "index": 129,
    "name": "Potion of Polite Impossibility",
    "level": 19,
    "description": "Once within 1 hour, you may ask reality for a small courtesy: an unlocked door is not stuck, a chair is available, a dropped item rolls toward you, or a candle relights."
  },
  {
    "index": 130,
    "name": "Potion of Museum Moment",
    "level": 19,
    "description": "For 10 minutes, one room becomes perfectly still except for creatures you designate. Dust hangs in the air, spilled liquid pauses, and unattended objects do not fall."
  },
  {
    "index": 131,
    "name": "Potion of Borrowed Legend",
    "level": 19,
    "description": "For 1 hour, mundane witnesses who see you perform a dramatic deed remember it with harmless embellishments, granting a +2 circumstance bonus to Gather Information about your reputation."
  },
  {
    "index": 132,
    "name": "Potion of Starry Stair",
    "level": 19,
    "description": "For 10 minutes, a stairway of tiny stars forms between two points you can see within 120 feet, supporting creatures you designate."
  },
  {
    "index": 133,
    "name": "Potion of Yesterday's Key",
    "level": 20,
    "description": "For 1 minute, you may open one lock, gate, or seal that you personally opened within the last year, as though using the same key or method again."
  },
  {
    "index": 134,
    "name": "Potion of Friendly Paradox",
    "level": 20,
    "description": "Once within 10 minutes, when a mundane object of 1 Bulk or less would be destroyed, it instead appears intact in your hand with a ribbon tied around it."
  },
  {
    "index": 135,
    "name": "Potion of Impossible Shortcut",
    "level": 20,
    "description": "For 10 minutes, you may lead willing companions through a door, alley, or curtain to emerge from a similar mundane passage within 1 mile that you have visited."
  },
  {
    "index": 136,
    "name": "Potion of Unwritten Invitation",
    "level": 20,
    "description": "For 24 hours, you and up to six allies are treated by mundane social magic and household wards as invited guests unless you act with hostility."
  }];
const SIDE_EFFECTS = [
  "Feathers cover your body for 1d4 days.",
  "You become a tiny frog for 1d4 days.",
  "You feel devoted to the first living thing you see for 1 hour.",
  "Your skin turns green; you breathe water but not air for 1d4 hours.",
  "Gills appear and let you breathe underwater for 1d4 hours.",
  "You can only speak falsehoods for 1d4 days.",
  "Your soul briefly swaps with a harmless spirit unless you succeed at a Fortitude save.",
  "You glow with bright light in a 20-foot radius for 1d4 hours.",
  "You forget how to read for 1d4 days.",
  "You become misty and insubstantial for 1d4 hours.",
  "You receive a vague prophetic image.",
  "You register as undead for 1d4 hours.",
  "Your body turns to stone for 1d4 rounds.",
  "Your hair changes to the potion's color.",
  "You gain a +2 circumstance bonus against fear for 1d4 hours.",
  "You can only speak in rhyme for 1d4 hours.",
  "Your shadow vanishes for 1d4 days.",
  "Your appearance shifts dramatically for 1d4 hours.",
  "Gain resistance 5 to cold for 1d4 hours.",
  "You hover 1 foot above the ground for 1d4 hours.",
  "A third arm grows for 1d4 days, useful for simple tasks only.",
  "Gain resistance 5 to vitality damage for 1d4 hours.",
  "You can speak with animals for 1d4 hours.",
  "Regain 1d10 Hit Points at the start of each of your turns for 1d4 rounds.",
  "You do not need sleep for 1d8 days.",
  "One disease affecting you is cured.",
  "Your fingers become limp; you cannot hold objects for 1d4 hours.",
  "You are frightened 1 for 1d4 rounds by alien visions.",
  "All tattoos and ink marks on you vanish.",
  "Spiky vines grow from you for 1d4 days; creatures touching you take 1 piercing damage.",
  "A third eye gives +2 circumstance bonus to Perception for 1d4 hours.",
  "If you die within 24 hours, you immediately stabilize at dying 1 instead of dying.",
  "Your features become unsettling; take a -2 circumstance penalty to Diplomacy for 1d4 hours.",
  "You shrink by 1 size category for 1d4 hours.",
  "Gain resistance 5 to force for 1d4 hours.",
  "Gain resistance 5 to electricity for 1d4 hours.",
  "Your skin stiffens; you are slowed 1 for 1d4 rounds.",
  "Your skin becomes metallic; gain resistance 3 to physical damage for 1d4 hours.",
  "Mushrooms sprout from your head.",
  "Gain a +2 status bonus to Athletics for 1d4 hours.",
  "You understand all spoken languages for 1d4 hours.",
  "You cannot knowingly tell a lie for 1d4 days.",
  "Recover one expended spell slot or prepared spell of your lowest available rank.",
  "For 1d4 rounds, you can pass through very thin barriers with GM approval.",
  "You can read surface thoughts as detect thoughts for 1 minute.",
  "You forget one language you know for 1d4 days.",
  "Your fingers become sticky; gain a climb Speed of 10 feet for 1d4 hours.",
  "You teleport to the nearest visible body of water.",
  "Your reflection vanishes for 1d4 days.",
  "Gain resistance 5 to mental damage for 1d4 hours.",
  "Your hair flows as if underwater for 1d4 days.",
  "You become 1d6 years older.",
  "You can speak with plants for 1d4 hours.",
  "Your Speed doubles for 1d6 rounds.",
  "Gain resistance 5 to fire for 1d4 hours.",
  "A minor deity notices you; ask one yes/no question, answer is cryptic.",
  "You sweat flammable oil; fire damage against you gains +2 for 1d4 hours.",
  "You are frightened 2 by fiendish hallucinations for 1d4 rounds.",
  "Your hair becomes a random color.",
  "Your inner thoughts are audible for 1d4 hours.",
  "Gain resistance 5 to poison for 1d4 hours.",
  "You can exhale a small cone of flame once per minute for 1d4 hours.",
  "You are blinded for 1d4 rounds.",
  "Your hair triples in length.",
  "You become very drunk; take a -2 circumstance penalty to Reflex and Perception for 1 hour.",
  "Insect mandibles grow on your face for 1d4 days.",
  "Wings sprout; gain a fly Speed of 15 feet for 1d4 hours.",
  "Your eyes change color randomly.",
  "You fall asleep for 1d4 hours unless awakened.",
  "You can smell gold within 50 feet for 1d4 days.",
  "You become transparent for 1d6 hours.",
  "Your mouth vanishes for 1d4 hours.",
  "You hear surface thoughts nearby for 1 minute.",
  "You become invisible for 1d4 minutes or until hostile action.",
  "You take on a watery elemental appearance for 1d4 hours.",
  "Your ancestry appears to change for 1d4 days.",
  "You are fatigued for 24 hours.",
  "You grow one size category for 1d4 hours.",
  "You can cast one random cantrip for 1d4 days.",
  "Your skin becomes a random color.",
  "Your jumps are four times normal for 1d4 hours.",
  "Gain resistance 5 to acid for 1d4 hours.",
  "You grow a long ginger beard.",
  "Your hair color changes with your mood.",
  "Gain a +1 item bonus to AC for 1d4 rounds.",
  "A sneeze creates a harmless illusory duplicate for 1d4 minutes.",
  "You cough up a swarm of harmless angry insects.",
  "Goat horns grow from your head.",
  "You emit musk that attracts animals for 1d4 hours.",
  "Gain 1d12 temporary Hit Points.",
  "Your hands and feet web; gain a swim Speed of 15 feet for 1d4 hours.",
  "Gain resistance 5 to void damage for 1d4 hours.",
  "You gain darkvision for 1d4 hours.",
  "You lose one random prepared spell or spell slot until daily preparations.",
  "All your hair falls out.",
  "You become 1d6 years younger.",
  "You forget the last 24 hours.",
  "You teleport to where the potion was brewed or found.",
  "Your breath becomes a flurry of snow.",
  "For 1d4 rounds, fire damage heals you for half the damage instead of harming you."
];



const CRITICAL_FAILURE_POTION_EFFECTS = [
  "The potion is saturated with unstable magical energy. When consumed, it detonates inside the drinker. Roll on your Variant Wild Magic table.",
  "The potion is cursed. Upon consumption, roll on your Curses table.",
  "The potion manifests the drinker's deepest fears. The drinker must attempt a DC 14 Will save or take 14 (5d6) mental damage. They also suffer hallucinations for 1 hour. Roll on your Hallucinations table.",
  "The potion causes the drinker to forget how to breathe. They must attempt a DC 15 Fortitude save or begin suffocating. At the end of each of their turns they may repeat the save, ending the effect on a success.",
  "The potion fills the drinker with overwhelming affection and devotion toward the first creature they see after consuming it. The GM determines the exact nature of this attachment; it should function similarly to a charm effect.",
  "After the potion is consumed, the empty vessel fuses to the drinker's hand. It cannot be removed except by remove curse, wish, or similarly powerful magic.",
  "The potion contains reality-warping magic. Upon consumption, roll on your Strange Mutations table.",
  "The drinker must succeed at a DC 15 Will save or gain the flaw: 'Everything belongs to me and I am entitled to it.'",
  "The potion violently explodes within the drinker. They take 21 (6d6) fire damage, with a DC 14 basic Reflex save.",
  "The imbiber vomits out an ooze that immediately attacks.",
  "For the next 1d6 days, the drinker is plagued by a magical earworm. Each time they make daily preparations, they must attempt a DC 12 Will save. On a failure, they are fatigued until their next daily preparations. Roll on your Ballads, Ditties & Songs table to determine the tune.",
  "Brilliant flashes of light erupt from the drinker's eyes. They must attempt a DC 13 Fortitude save or become blinded for 2d12 hours. At the end of each hour they may repeat the save, ending the effect on a success.",
  "A metallic cage suddenly materializes around the drinker. The drinker or an ally may attempt a DC 20 Athletics check to bend the bars and free them.",
  "The potion detonates in a burst of force. The drinker takes 21 (6d6) force damage, with a DC 14 basic Reflex save.",
  "A fine orange mist pours from the drinker's mouth after consumption. The drinker is affected by Polymorphic Fog, or an equivalent transformation effect chosen by the GM.",
  "The potion is profoundly toxic. Roll on your Detrimental Potions & Poisons table.",
  "All of the bones in one of the drinker's hands vanish for 24 hours. The hand becomes limp and unusable until the effect ends.",
  "The potion shocks the drinker and suppresses conscious thought. They become stunned 2, then stupefied 2 for 1d4 hours. At the end of each hour they may attempt a DC 14 Will save to end the stupefied condition early.",
  "The potion contains a magical parasite. The drinker must attempt a DC 14 Fortitude save or become confused for 1 minute and afflicted with a short-term madness determined by the GM.",
  "The potion is lethally poisonous. The drinker must attempt a DC 13 Fortitude save. On a failure they drop to 0 HP and fall unconscious, but their dying value does not increase. On a success they lose half their current Hit Points and fall unconscious for 1d6 minutes."
];

function randomCriticalFailurePotionEffect() {
  const index = Math.floor(Math.random() * CRITICAL_FAILURE_POTION_EFFECTS.length);
  return { index: index + 1, text: CRITICAL_FAILURE_POTION_EFFECTS[index] };
}

function criticalFailurePotionDescription(effect) {
  if (!effect) return "";
  return `<hr><p><strong>Critical Failure Potion Consequence:</strong> d20 result ${effect.index}</p><p>${htmlEscape(effect.text)}</p>`;
}

function criticalFailurePotionItemData(effect, level=1, quantity=1) {
  const safeLevel = Number.isFinite(Number(level)) ? Number(level) : 1;
  const data = {
    name: "Unstable Potion",
    type: "consumable",
    img: "icons/consumables/potions/potion-bottle-corked-blue.webp",
    system: {
      quantity: Number.isFinite(Number(quantity)) ? Number(quantity) : 1,
      level: { value: safeLevel },
      category: "potion",
      traits: { value: ["magical", "potion"], rarity: "uncommon", otherTags: [] },
      description: {
        value: `<p>This false potion contains no stable beneficial alchemical effect.</p>${criticalFailurePotionDescription(effect)}`,
        gm: criticalFailurePotionDescription(effect)
      },
      uses: { value: 1, max: 1, per: "charges", autoDestroy: true },
      identification: {
        status: "identified",
        unidentified: {
          name: "Unidentified Consumable",
          img: "icons/consumables/potions/potion-bottle-corked-blue.webp",
          data: { description: { value: unidentifiedBrewDescription(null) } }
        },
        misidentified: {}
      }
    },
    flags: {
      [MODULE_ID]: {
        brewed: true,
        falsePotion: true,
        criticalFailureBrew: true,
        criticalFailureEffect: effect,
        sideEffect: null,
        mystified: true,
        usesPF2eIdentification: true
      }
    }
  };
  applyPF2eMystification(data, {
    unidentifiedName: "Unidentified Consumable",
    unidentifiedDescription: unidentifiedBrewDescription(null),
    unidentifiedImg: "icons/consumables/potions/potion-bottle-corked-blue.webp"
  });
  return data;
}

const COMBAT_CATEGORIES = new Set(["poison", "oil", "bomb"]);
const UTILITY_CATEGORIES = new Set(["elixir", "potion", "oil", "food"]);

function addHandlebarsHelpers() {
  if (!Handlebars.helpers.add) Handlebars.registerHelper("add", (a,b) => Number(a)+Number(b));
}

function ingredientData(item) {
  const flags = item?.flags?.[MODULE_ID];
  if (!flags?.ingredient) return null;
  return { id: item.id, uuid: item.uuid, name: item.name, img: item.img, combat: Number(flags.combat ?? 0), utility: Number(flags.utility ?? 0), whimsy: Number(flags.whimsy ?? 0), item };
}

function getSelectedActor() {
  const token = canvas?.tokens?.controlled?.[0];
  if (token?.actor) return token.actor;
  const actor = game.user?.character;
  if (actor) return actor;
  return null;
}

function getCraftingModifier(actor) { return getSkillModifier(actor, "crafting"); }

function getSkillModifier(actor, skillSlug) {
  const slug = String(skillSlug ?? "").toLowerCase();
  const longSlug = slug === "cra" ? "crafting" : slug === "sur" ? "survival" : slug;
  const shortSlug = longSlug === "crafting" ? "cra" : longSlug === "survival" ? "sur" : longSlug;
  const candidates = [
    actor?.system?.skills?.[longSlug]?.totalModifier,
    actor?.skills?.[longSlug]?.totalModifier,
    actor?.system?.skills?.[shortSlug]?.totalModifier,
    actor?.skills?.[shortSlug]?.totalModifier,
    actor?.system?.skills?.[longSlug]?.mod?.value,
    actor?.system?.skills?.[shortSlug]?.mod?.value,
    actor?.system?.skills?.[longSlug]?.value,
    actor?.system?.skills?.[shortSlug]?.value
  ];
  for (const c of candidates) {
    const n = Number(c);
    if (Number.isFinite(n)) return n;
  }
  console.warn(MODULE_ID, `Could not find ${longSlug} modifier for ${actor?.name}. Defaulting to +0.`, actor);
  return 0;
}

function getSurvivalModifier(actor) { return getSkillModifier(actor, "survival"); }

function actorHasAlchemicalCrafting(actor) {
  const items = Array.from(actor?.items ?? []);

  // The PF2e system can represent access to alchemical crafting in more than one way:
  //   * the Alchemical Crafting skill feat
  //   * an Alchemical Crafting class feature, most notably on Alchemists
  //   * an Alchemist class item / class slug on the actor
  // Accept any of these so Alchemists do not need to also carry the skill feat item.
  const hasNamedFeatureOrFeat = items.some(item => {
    const name = normalizeName(item?.name);
    const slug = normalizeName(item?.slug ?? item?.system?.slug ?? item?.flags?.pf2e?.slug ?? "");
    const type = String(item?.type ?? "").toLowerCase();
    const isFeatOrFeature = ["feat", "classfeature", "feature"].includes(type) || type.includes("feature");

    return (name === "alchemical crafting" || slug === "alchemical crafting")
      && (isFeatOrFeature || type === "");
  });
  if (hasNamedFeatureOrFeat) return true;

  const hasAlchemistClassItem = items.some(item => {
    const name = normalizeName(item?.name);
    const slug = normalizeName(item?.slug ?? item?.system?.slug ?? item?.flags?.pf2e?.slug ?? "");
    const type = String(item?.type ?? "").toLowerCase();
    return type === "class" && (name === "alchemist" || slug === "alchemist");
  });
  if (hasAlchemistClassItem) return true;

  const actorClassSlug = normalizeName(
    actor?.system?.details?.class?.slug
    ?? actor?.system?.details?.class?.value
    ?? actor?.class?.slug
    ?? actor?.class?.name
    ?? ""
  );
  return actorClassSlug === "alchemist";
}

function itemHasObojimaLabRuleElement(item) {
  for (const rule of itemRuleElements(item)) {
    const key = String(rule?.key ?? "").toLowerCase();
    const option = String(rule?.option ?? "").toLowerCase();
    const selectors = ruleSelectors(rule);

    // Recommended Rule Element for custom brewing gear:
    // { "key": "RollOption", "option": "obojima-alchemical-lab" }
    if (key === "rolloption" && option === "obojima-alchemical-lab") return true;

    // Compatibility: allow a FlatModifier-style RE to mark gear as a lab, even though
    // it does not apply a numeric bonus by itself.
    if (selectors.includes("obojima-alchemical-lab")) return true;
  }
  return false;
}

function itemHasObojimaLabFlag(item) {
  const namespaces = [MODULE_ID, "obojimaBrewing", "obojima-brewing"];
  return namespaces.some(ns => {
    const flags = item?.flags?.[ns] ?? {};
    return Boolean(flags.alchemicalLab || flags.countsAsAlchemicalLab || flags.brewingLab || flags.brewingKit);
  });
}

function actorHasAlchemistLab(actor) {
  const items = Array.from(actor?.items ?? []);
  return items.some(item => {
    const raw = String(item?.name ?? "").toLowerCase();
    const name = normalizeName(item?.name);
    return raw.includes("alchemist") && raw.includes("lab")
      || name === "alchemist lab"
      || name === "alchemist lab expanded"
      || name === "expanded alchemist lab"
      || name === "alchemist toolkit"
      || name === "alchemists toolkit"
      || name === "alchemist s toolkit"
      || itemHasObojimaLabFlag(item)
      || itemHasObojimaLabRuleElement(item);
  });
}

async function confirmExternalAlchemistLab(actor) {
  return await Dialog.confirm({
    title: "Alchemical Workspace Required",
    content: `<p><strong>${htmlEscape(actor?.name ?? "This character")}</strong> does not appear to have an Alchemist's Lab, Alchemist's Lab (Expanded), Alchemist's Toolkit, or Obojima-compatible custom brewing equipment in inventory.</p><p>Do they have access to a suitable alchemical workspace, such as a lab, toolkit, brewing kit, or cauldron, for this brewing attempt?</p>`,
    yes: () => true,
    no: () => false,
    defaultYes: false
  });
}

function normalizeName(name) {
  return String(name ?? "").toLowerCase()
    .replace(/\((lesser|moderate|greater|major|minor|true|standard|greater)\)/gi, "")
    .replace(/\b(lesser|moderate|greater|major|minor|true|standard)\b/gi, "")
    .replace(/[^a-z0-9]+/g, " ").trim();
}

function itemLevel(item) {
  const raw = item?.system?.level?.value ?? item?.system?.level ?? item?.level ?? 0;
  const n = Number(raw);
  return Number.isFinite(n) ? n : 0;
}

function itemCategory(item) {
  const sys = item?.system ?? {};
  const rawCandidates = [
    sys.category,
    sys.category?.value,
    sys.consumableType,
    sys.consumableType?.value,
    sys.type,
    sys.type?.value,
    sys.usage?.value,
    ...(sys.traits?.value ?? []),
    ...(sys.traits?.otherTags ?? [])
  ].filter(Boolean).map(x => String(x).toLowerCase());

  const candidates = new Set(rawCandidates);
  const name = String(item?.name ?? "").toLowerCase();

  // Only match whole words in names. The previous v0.13 test used name.includes("oil"),
  // which incorrectly categorized "Bagpipes of Turmoil" as an oil because "turmoil" contains "oil".
  const nameHas = (word) => new RegExp(`(^|[^a-z])${word}([^a-z]|$)`, "i").test(name);
  for (const word of ["bomb", "poison", "oil", "elixir", "potion", "food"]) {
    if (nameHas(word)) candidates.add(word);
  }
  if (nameHas("meal") || nameHas("snack") || nameHas("ration")) candidates.add("food");

  return [...candidates];
}

async function scanPF2eConsumables() {
  const combat = [];
  const utility = [];
  const seenCombat = new Set();
  const seenUtility = new Set();
  const packs = game.packs.filter(p => p.documentName === "Item" && (p.metadata?.packageName === "pf2e" || p.collection?.startsWith("pf2e.")));
  for (const pack of packs) {
    let docs = [];
    try { docs = await pack.getDocuments(); } catch (err) { console.warn(MODULE_ID, "Could not scan pack", pack.collection, err); continue; }
    for (const item of docs) {
      // Products must be PF2e consumables. Do not scan equipment/treasure, even if their names
      // contain words like "oil" or "poison".
      if (item.type !== "consumable") continue;
      const cats = itemCategory(item);
      const key = item.uuid ?? `${pack.collection}.${item.id}`;
      if (cats.some(c => COMBAT_CATEGORIES.has(c)) && !seenCombat.has(key)) {
        combat.push(item);
        seenCombat.add(key);
      }
      if (cats.some(c => UTILITY_CATEGORIES.has(c)) && !seenUtility.has(key)) {
        utility.push(item);
        seenUtility.add(key);
      }
    }
  }
  const sort = (a,b) => itemLevel(a)-itemLevel(b) || normalizeName(a.name).localeCompare(normalizeName(b.name)) || a.name.localeCompare(b.name);
  return { combat: combat.sort(sort), utility: utility.sort(sort) };
}

function determineWinner(totals) {
  // Deterministic tie-break: Combat, then Utility, then Whimsy.
  if (totals.combat >= totals.utility && totals.combat >= totals.whimsy) return "combat";
  if (totals.utility >= totals.whimsy) return "utility";
  return "whimsy";
}

function clampIndex(total, listLength) {
  if (!listLength) return 0;
  return Math.min(Math.max(Number(total) || 1, 1), listLength) - 1;
}

function productLevelFromIngredientTotal(total) {
  // Ingredient values now map to product level, not to a direct row index.
  // This keeps high-level products reachable even when a category has hundreds of possible products.
  return Math.min(Math.max(Math.ceil((Number(total) || 1) / 15), 1), 20);
}

function ingredientTotalRangeForLevel(level) {
  const l = Math.min(Math.max(Number(level) || 1, 1), 20);
  return { min: (l - 1) * 15 + 1, max: l * 15 };
}

function deterministicProductIndex({ ingredients, winner, total, level, listLength }) {
  if (!listLength) return 0;
  const key = [...ingredients].sort().join("|") + `|${winner}|${total}|${level}`;
  return stableHash(key) % listLength;
}

function productsAtLevel(list, level) {
  const exact = (list ?? []).filter(i => itemLevel(i) === level);
  if (exact.length) return exact;
  const withDistance = (list ?? []).map(i => ({ item: i, distance: Math.abs(itemLevel(i) - level) })).sort((a,b) => a.distance - b.distance || itemLevel(a.item)-itemLevel(b.item) || normalizeName(a.item.name).localeCompare(normalizeName(b.item.name)));
  const nearest = withDistance[0]?.distance;
  return withDistance.filter(x => x.distance === nearest).map(x => x.item);
}

function whimsyAtLevel(level) {
  const exact = WHIMSY_POTIONS.filter(w => Number(w.level) === level);
  if (exact.length) return exact;
  const withDistance = WHIMSY_POTIONS.map(w => ({ item: w, distance: Math.abs(Number(w.level) - level) })).sort((a,b) => a.distance - b.distance || Number(a.item.level)-Number(b.item.level) || a.item.name.localeCompare(b.item.name));
  const nearest = withDistance[0]?.distance;
  return withDistance.filter(x => x.distance === nearest).map(x => x.item);
}

function selectProductForBrew({ winner, total, ingredients, resultTables, levelAdjustment = 0 }) {
  const baseLevel = productLevelFromIngredientTotal(total);
  const targetLevel = Math.min(Math.max(baseLevel + levelAdjustment, 1), 20);
  const list = winner === "whimsy" ? whimsyAtLevel(targetLevel) : productsAtLevel(resultTables[winner] ?? [], targetLevel);
  const idx = deterministicProductIndex({ ingredients, winner, total, level: targetLevel, listLength: list.length });
  return { item: list[idx], productLevel: targetLevel, baseProductLevel: baseLevel, pool: list, poolIndex: idx };
}

function pf2eDCByLevel(level) {
  const table = [14,15,16,18,19,20,22,23,24,26,27,28,30,31,32,34,35,36,38,39,40,42,44,46,48,50];
  return table[Math.min(Math.max(Number(level)||0, 0), table.length-1)] ?? 20;
}

function isProficiencyWithoutLevelEnabled() {
  const checks = [
    ["pf2e", "proficiencyVariant"],
    ["pf2e", "proficiencyWithoutLevel"],
    ["pf2e", "pwol"],
    ["pf2e", "variantRules"]
  ];
  for (const [namespace, key] of checks) {
    try {
      const value = game.settings.get(namespace, key);
      if (value === true) return true;
      if (typeof value === "string" && /without|pwl|pwol|no-?level/i.test(value)) return true;
      if (value && typeof value === "object" && (value.proficiencyWithoutLevel || value.pwol || value.proficiencyVariant === "ProficiencyWithoutLevel")) return true;
    } catch (_) {}
  }
  return !!(game.pf2e?.settings?.variants?.proficiencyWithoutLevel || game.pf2e?.settings?.variantRules?.proficiencyWithoutLevel);
}

function brewingDCByLevel(level) {
  const base = pf2eDCByLevel(level);
  return isProficiencyWithoutLevelEnabled() ? Math.max(10, base - (Number(level) || 0)) : base;
}

function stableHash(text) {
  let h = 2166136261;
  for (const ch of String(text ?? "")) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  return Math.abs(h >>> 0);
}

function ingredientLevel(ing) {
  return Math.max(1, Math.ceil(Math.max(Number(ing.combat)||0, Number(ing.utility)||0, Number(ing.whimsy)||0) / 5));
}

const OBOJIMA_CORE_ICON_DIRS = {
  plant: ["icons/consumables/plants"],
  fruit: ["icons/consumables/fruit", "icons/consumables/vegetable", "icons/consumables/nuts"],
  mushroom: ["icons/consumables/mushrooms"],
  flower: ["icons/commodities/flowers", "icons/consumables/plants"],
  mineral: ["icons/commodities/gems", "icons/commodities/stone", "icons/commodities/materials", "icons/commodities/metal"],
  liquid: ["icons/consumables/potions", "icons/consumables/drinks", "icons/commodities/materials"],
  animal: ["icons/commodities/biological", "icons/commodities/leather", "icons/commodities/claws", "icons/commodities/bones", "icons/consumables/meat"],
  feather: ["icons/commodities/materials", "icons/commodities/biological"],
  claw: ["icons/commodities/claws", "icons/commodities/bones"],
  bone: ["icons/commodities/bones", "icons/commodities/claws"],
  food: ["icons/consumables/food", "icons/consumables/grains", "icons/consumables/fruit", "icons/consumables/vegetable", "icons/consumables/nuts"],
  curio: ["icons/commodities/materials", "icons/sundries/misc", "icons/sundries/lights", "icons/sundries/books"]
};

const OBOJIMA_CORE_ICON_FALLBACKS = {
  plant: ["icons/consumables/plants/dried-herb-bundle-brown.webp"],
  fruit: ["icons/consumables/fruit/apple-green.webp", "icons/consumables/fruit/apple-red.webp"],
  mushroom: ["icons/consumables/mushrooms/mushroom-red-white.webp", "icons/consumables/mushrooms/mushroom-brown.webp"],
  flower: ["icons/commodities/flowers/flower-blue.webp", "icons/commodities/flowers/flower-red.webp"],
  mineral: ["icons/commodities/gems/gem-faceted-purple.webp", "icons/commodities/gems/gem-faceted-green.webp"],
  liquid: ["icons/consumables/potions/potion-bottle-corked-blue.webp", "icons/consumables/potions/potion-bottle-corked-green.webp"],
  animal: ["icons/commodities/biological/eye-blue.webp", "icons/commodities/leather/fur-white.webp", "icons/commodities/bones/bone-jaw-teeth-white.webp"],
  feather: ["icons/commodities/materials/feather-blue.webp", "icons/commodities/materials/feather-white.webp"],
  claw: ["icons/commodities/claws/claw-brown.webp", "icons/commodities/claws/claw-white.webp"],
  bone: ["icons/commodities/bones/bone-white.webp", "icons/commodities/bones/tooth-white.webp"],
  food: ["icons/consumables/food/bowl-stew-brown.webp", "icons/consumables/grains/rice-white.webp"],
  curio: ["icons/commodities/materials/bowl-powder-gold.webp", "icons/sundries/misc/coin-gold.webp"]
};

const OBOJIMA_INGREDIENT_ICON_POOLS = {};

async function browseCoreIconDir(dir) {
  return browseImageDir(dir);
}

async function getIngredientIconPool(category) {
  if (Array.isArray(OBOJIMA_INGREDIENT_ICON_POOLS[category])) return OBOJIMA_INGREDIENT_ICON_POOLS[category];
  const dirs = OBOJIMA_CORE_ICON_DIRS[category] ?? OBOJIMA_CORE_ICON_DIRS.curio;
  const files = [];
  for (const dir of dirs) files.push(...await browseCoreIconDir(dir));
  const unique = [...new Set(files)];
  OBOJIMA_INGREDIENT_ICON_POOLS[category] = unique.length ? unique : (OBOJIMA_CORE_ICON_FALLBACKS[category] ?? OBOJIMA_CORE_ICON_FALLBACKS.curio);
  return OBOJIMA_INGREDIENT_ICON_POOLS[category];
}

function ingredientIconCategory(name) {
  const n = String(name ?? "").toLowerCase();
  // More specific checks first. This prevents items like honey, wax, and coral
  // from falling through to the wrong creature-part folders.
  if (/honey|cake|rice|egg|broth|tea|wine|whisky|whiskey|paste|fruit|melon|apple|carrot|ube|spud|nut|salmon|eel|crab|food|narutomaki/.test(n)) return "food";
  if (/mushroom|shroom|bolete|truffle|stinkhorn|death cap|amanita|fairy stool|parasol|lichen|moss/.test(n)) return "mushroom";
  if (/flower|blossom|petal|lily|lilly|orchid|trumpet|thistle|nettle|willow|vine|bloom|rose|lotus/.test(n)) return "flower";
  if (/wax|candle|paper|record|figurine|crane|broom|lantern|spark plug|plate|bonfire|merchant|clock|map|coin|dilema|dilemma/.test(n)) return "curio";
  if (/coral|pearl|jasper|slag|glass|crystal|shell|amber|stone|ore|coal|starshell|wolfenite|metal|gem|bead|sand|dust|sulphur|sulfur/.test(n)) return "mineral";
  if (/bottled|water|oil|slime|poison|sap|ink|powder|brew|essence|fizz|tonic|dew|ichor|bile|saliva|residue|scum/.test(n)) return "liquid";
  if (/plume|feather|wool|wing/.test(n)) return "feather";
  if (/fang|tooth|claw|talon|horn|antenna|mandible/.test(n)) return "claw";
  if (/bone|scale|skin|tail|fur|web|bug|mite|leech|spider|snail|alligator|dragon|lizard|chrysalis|beetle|octopus|toad|ooze|pustule|eye|nothic|quipper|remorhaz|giant|elemental|imp|crawler|snake/.test(n)) return "animal";
  if (/root|reed|bamboo|shrub|weed|wort|sprout|shoot|sapwood|tree|grass|green|thorn|bush/.test(n)) return "plant";
  return ["plant","flower","mushroom","mineral","animal","liquid","food","curio"][stableHash(name)%8];
}

function ingredientType(name) {
  return { plant: "Plant", fruit: "Foodstuff", mushroom: "Mushroom", flower: "Flower", mineral: "Mineral", liquid: "Liquid", animal: "Animal Part", feather: "Animal Part", claw: "Animal Part", bone: "Animal Part", food: "Foodstuff", curio: "Curio" }[ingredientIconCategory(name)] ?? "Reagent";
}

function iconSearchTerms(name, category) {
  const n = String(name ?? "").toLowerCase();
  const terms = [];
  const add = (...xs) => xs.forEach(x => { if (x && !terms.includes(x)) terms.push(x); });
  for (const word of n.split(/[^a-z]+/).filter(w => w.length >= 4)) add(word);
  if (/honey/.test(n)) add("honey", "sweet", "syrup");
  if (/wax|candle/.test(n)) add("wax", "candle");
  if (/coral/.test(n)) add("coral");
  if (/truffle/.test(n)) add("truffle", "mushroom", "fungus");
  if (/mushroom|shroom|stool|cap|amanita|parasol|stinkhorn/.test(n)) add("mushroom", "fungus");
  if (/berry/.test(n)) add("berry", "berries");
  if (/apple/.test(n)) add("apple");
  if (/carrot/.test(n)) add("carrot");
  if (/egg/.test(n)) add("egg");
  if (/rice/.test(n)) add("rice", "grain");
  if (/tea/.test(n)) add("tea", "leaves");
  if (/wine|whisky|whiskey|broth|water|dew|oil|bile|ichor|slime|poison|sap/.test(n)) add("bottle", "vial", "potion", "liquid");
  if (/pearl/.test(n)) add("pearl");
  if (/jasper|gem|crystal|wolfenite|glass/.test(n)) add("gem", "crystal");
  if (/slag|ore|coal|sulphur|sulfur|sand|dust|powder/.test(n)) add("ore", "powder", "stone");
  if (/scale|skin|hide|fur|wool/.test(n)) add("scale", "hide", "fur", "leather");
  if (/fang|tooth|claw|talon|horn/.test(n)) add("claw", "tooth", "fang", "horn");
  if (/bone/.test(n)) add("bone");
  if (/feather|plume|wing/.test(n)) add("feather", "wing");
  if (/eye/.test(n)) add("eye");
  if (/root|mandrake/.test(n)) add("root");
  if (/flower|blossom|lily|lilly|orchid|trumpet|petal|thistle/.test(n)) add("flower", "blossom");
  if (/vine|weed|grass|reed|bamboo|bush|shrub|nettle|thorn/.test(n)) add("leaf", "plant", "herb");
  if (!terms.length) add(category);
  return terms;
}

async function ingredientIcon(name) {
  const category = ingredientIconCategory(name);
  const pool = await getIngredientIconPool(category);
  const terms = iconSearchTerms(name, category);
  const scored = pool.map(path => {
    const p = path.toLowerCase();
    let score = 0;
    for (const term of terms) {
      if (p.includes(term)) score += term.length + 10;
    }
    return { path, score };
  }).filter(x => x.score > 0).sort((a,b) => b.score - a.score || a.path.localeCompare(b.path));
  if (scored.length) return scored[stableHash(name) % Math.min(scored.length, 6)].path;
  return pool[stableHash(name) % pool.length];
}

function titleCaseWords(text) {
  return String(text ?? "").replace(/\b\w/g, c => c.toUpperCase());
}

function ingredientKeywords(name) {
  const n = String(name ?? "").toLowerCase();
  const tags = [];
  const add = (...xs) => xs.forEach(x => { if (!tags.includes(x)) tags.push(x); });
  if (/lichen|moss/.test(n)) add("moss");
  if (/mushroom|shroom|truffle|stinkhorn|death cap|amanita|stool|parasol|bolete/.test(n)) add("fungus");
  if (/flower|blossom|lily|lilly|orchid|trumpet|petal|thistle|nettle|lotus|chrysanthemum|bellflower/.test(n)) add("flower");
  if (/root|mandrake|bloodroot|theki/.test(n)) add("root");
  if (/vine|weed|grass|reed|bamboo|bush|shrub|thorn|willow|sapwood|wood|tree|wort|green/.test(n)) add("plant");
  if (/apple|berry|fruit|melon|carrot|ube|spud|nut|hops|anise|rice|egg|cake|gum|pepper/.test(n)) add("food");
  if (/salmon|eel|crab|fish|toad|snake|octopus|spider|mite|bug|leech|beetle|snail|crawler|quipper/.test(n)) add("small-creature");
  if (/dragon|wyvern|remorhaz|giant|basilisk|ankheg|alligator|lizard|wolf|eagle|imp|elemental/.test(n)) add("monster");
  if (/scale|skin|fur|wool|hide|feather|plume|wing|tail|antenna|stinger/.test(n)) add("outer-part");
  if (/fang|tooth|claw|talon|horn|bone/.test(n)) add("hard-part");
  if (/eye|heart|pustule|ichor|bile|saliva|scum|slime|residue|droplet|milk|poison|venom|ink|oil|sap|dew|water|broth|tea|wine|whisky|whiskey/.test(n)) add("fluid");
  if (/pearl|jasper|crystal|glass|gem|amber|stone|ore|coal|slag|sand|dust|powder|sulphur|sulfur|salt|chalk|bronze|silver|gold|alabaster|wolfenite/.test(n)) add("mineral");
  if (/wax|candle|paper|record|figurine|crane|broom|lantern|spark plug|plate|bonfire|clockwork|origami|instrument/.test(n)) add("curio");
  if (/ghost|spirit|moon|dream|aether|shadow|fairy|pixie|hag|witch|angel|bane|blight|corrupted|frost|fire|flame|lightning|storm|sun|night/.test(n)) add("magical");
  if (!tags.length) tags.push("reagent");
  return tags;
}

function pickIngredientText(name, options, salt = "") {
  return options[stableHash(`${name}|${salt}`) % options.length];
}

function sensoryLine(name, tags) {
  if (tags.includes("fungus")) return pickIngredientText(name, [
    "Its smell is damp and mineral, like rainwater trapped under stone.",
    "A dusting of spores clings to the fingers and glimmers briefly in lamplight.",
    "When sliced thin, the flesh shows rings that darken as though bruised by moonlight.",
    "The cap gives a soft sigh when broken, releasing a cool cellar scent."
  ], "sense-fungus");
  if (tags.includes("flower")) return pickIngredientText(name, [
    "The petals keep their color after drying, but only if pressed before sunset.",
    "Its scent changes with the weather: sweet in heat, sharp in rain, and nearly metallic before storms.",
    "The pollen stains cloth easily and is prized because it refuses to mix evenly unless the brew is ready.",
    "A single blossom can perfume an entire workroom for an hour, then vanish from memory almost at once."
  ], "sense-flower");
  if (tags.includes("root") || tags.includes("plant")) return pickIngredientText(name, [
    "Its fibers darken when bruised, so careful cutters use bone knives rather than steel.",
    "The cut ends bead with sap that tastes bitter at first and strangely clean a moment later.",
    "Dried properly, it snaps with a glassy sound instead of bending.",
    "Herbalists judge the best samples by the twist of the stem and the smell of fresh earth around it."
  ], "sense-plant");
  if (tags.includes("food")) return pickIngredientText(name, [
    "It is edible, but the aftertaste is the part alchemists care about: that lingering note carries the magic.",
    "Cooks prize it for flavor; brewers prize it for what happens after the flavor should have faded.",
    "It bruises easily, and the bruised portions often prove stronger than the pretty ones.",
    "When warmed, it releases a smell that makes nearby reagents foam, curdle, or settle according to their nature."
  ], "sense-food");
  if (tags.includes("fluid")) return pickIngredientText(name, [
    "It clings to glass in slow streaks and leaves a faint halo wherever it dries.",
    "A proper sample separates into layers unless shaken exactly three times.",
    "It is safest in wax-sealed vials; cork alone tends to stain and swell.",
    "Under candlelight, its surface dimples as if something beneath it were breathing."
  ], "sense-fluid");
  if (tags.includes("mineral")) return pickIngredientText(name, [
    "Ground too fine, it becomes dull; left too coarse, it refuses to dissolve.",
    "It rings faintly against porcelain, a tone experienced brewers use to judge purity.",
    "The best pieces show color deep inside the fracture rather than only on the surface.",
    "When dropped into a mortar, it briefly pulls nearby dust into tiny orbiting lines."
  ], "sense-mineral");
  if (tags.includes("outer-part") || tags.includes("hard-part") || tags.includes("monster") || tags.includes("small-creature")) return pickIngredientText(name, [
    "Fresh samples are much stronger than trophy pieces, though far less pleasant to handle.",
    "It must be cleaned quickly but not boiled, or the last useful trace of the creature is lost.",
    "A good specimen still remembers motion: it curls, twitches, or clicks when the brew heats.",
    "Hunters wrap it in saltcloth until a brewer can scrape away the mundane tissue."
  ], "sense-creature");
  if (tags.includes("curio")) return pickIngredientText(name, [
    "Its value comes from history as much as substance; the more it has been handled, the better it brews.",
    "It refuses to behave like a normal material, which is exactly why experimental alchemists keep buying it.",
    "The object is shaved, soaked, or burned not for what it is, but for the odd memory caught inside it.",
    "Some reagents are grown or mined; this one is accumulated through use, accident, and rumor."
  ], "sense-curio");
  return pickIngredientText(name, [
    "It looks unassuming until placed beside another reagent, at which point its hidden nature becomes obvious.",
    "Every guild describes it differently, but all agree that poor storage ruins it quickly.",
    "Its best quality is not strength, but how clearly it pushes a mixture in one direction.",
    "Apprentices often overlook it; masters usually do not."
  ], "sense-default");
}

function sourceLine(name, tags) {
  const n = String(name ?? "").toLowerCase();
  if (/ghost|spirit|shadow/.test(n)) return "Collectors report that the best samples appear where strong emotions have soaked into a place and then been left undisturbed.";
  if (/frost|ice|everfrost|frozen|remorhaz/.test(n)) return "It is gathered cold and kept cold; thawing it too quickly leaves only a mundane residue.";
  if (/fire|flame|ash|ember|sulphur|sulfur/.test(n)) return "It is collected from scorched ground, volcanic vents, or creatures that carry heat in their bodies.";
  if (/lightning|storm|spark/.test(n)) return "It is safest to harvest after a storm, when the charge has settled but not yet vanished.";
  if (/moon|night|dream/.test(n)) return "It is traditionally gathered by moonlight, when its color and scent become easiest to read.";
  if (/blight|corrupted|bane|nightshade|death/.test(n)) return "Wise gatherers use gloves, masks, and a second pair of tongs; even the harmless-looking pieces have opinions about being picked.";
  if (tags.includes("fungus")) return pickIngredientText(name, [
    "It grows in places where rot is active but not triumphant: old logs, cellar stones, wet roots, and abandoned thresholds.",
    "Foragers mark the patch and return later, because the first fruiting body is rarely the strongest.",
    "It is usually found by smell before sight, especially after a warm rain."
  ], "source-fungus");
  if (tags.includes("flower")) return pickIngredientText(name, [
    "The plant is fussy about harvest time; an hour too early gives a pretty flower and a useless reagent.",
    "Most specimens are found in thin soil where ordinary flowers would not bother trying.",
    "It is clipped with the stem intact, then hung upside down until the color stops changing."
  ], "source-flower");
  if (tags.includes("mineral")) return pickIngredientText(name, [
    "Miners sell it by weight, but alchemists buy it by flaw, color, and the strange marks hidden in the fracture.",
    "It is rarely found alone; one good piece usually means the surrounding stone has been changed as well.",
    "A clean sample should be wrapped in cloth rather than kept loose with coins and tools."
  ], "source-mineral");
  if (tags.includes("monster") || tags.includes("small-creature") || tags.includes("outer-part") || tags.includes("hard-part")) return pickIngredientText(name, [
    "It is taken from dangerous fauna or the leavings of such creatures, which makes fresh samples expensive and old samples suspicious.",
    "Harvesters prefer specimens from healthy creatures; sickness muddies the values and can spoil an otherwise fine brew.",
    "The part carries a trace of instinct, and that instinct can dominate a careless recipe."
  ], "source-creature");
  if (tags.includes("food")) return pickIngredientText(name, [
    "Markets sell it as food, but brewers quietly sort through the baskets for the pieces that smell just slightly impossible.",
    "The kitchen and laboratory argue over this ingredient constantly, and both sides are right.",
    "It keeps poorly unless dried, pickled, candied, smoked, or sung to, depending on local tradition."
  ], "source-food");
  if (tags.includes("curio")) return pickIngredientText(name, [
    "It enters alchemy by accident: discarded, gifted, misused, repaired, or loved long enough to become useful.",
    "Dealers call it junk until a brewer asks for it by name; then the price triples.",
    "No two samples behave quite the same, so recipes involving it are written with unusually wide margins."
  ], "source-curio");
  return pickIngredientText(name, [
    "Most samples are ordinary until handled correctly, which is why trained gatherers matter more than rich buyers.",
    "Its origin is humble, but the right preparation draws out a surprisingly decisive alchemical voice.",
    "It is one of those reagents that teaches patience: rush the preparation and it contributes almost nothing."
  ], "source-default");
}

function preparationLine(name, tags, focus) {
  const focusPrep = {
    combat: [
      "In combat brews it sharpens the mixture's edge, making the final product more aggressive and immediate.",
      "It tends to make recipes hotter, harsher, louder, or more dangerous than the brewer expected.",
      "Battlefield alchemists like it because it acts quickly and rarely asks permission."
    ],
    utility: [
      "In utility brews it steadies the result, giving the product a practical and dependable character.",
      "It helps a recipe hold together under travel, weather, and rough handling.",
      "Careful brewers use it when they want the final draught to solve a problem rather than create one."
    ],
    whimsy: [
      "In whimsical brews it introduces the little sideways twist that turns a useful mixture into a story.",
      "It encourages transformations, coincidences, improbable colors, and other effects that make formula books nervous.",
      "Brewers seeking predictable results use it sparingly; brewers seeking memorable results do not."
    ]
  }[focus];
  return pickIngredientText(name, focusPrep, `prep-${focus}`);
}

const OBOJIMA_INGREDIENT_DESCRIPTIONS = {
  "Acid Dew": "Acid Dew is a volatile liquid usually gathered in shallow pools. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Aether Apple": "Aether Apple looks edible enough, but its juice separates into strange colors when mixed with clean water. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Alabaster Moth Wing": "Alabaster Moth Wing is almost weightless, but a single strand can change the way a simmering brew moves. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Amber": "Amber is a spark-flecked mineral usually gathered near geothermal vents. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Angel's Trumpet": "Angel's Trumpet is a delicate flower usually gathered near standing stones. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Ankheg Antenna": "Ankheg Antenna is a bristled creature usually gathered where the creature laired. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Anvil Pepper": "Anvil Pepper is a sweet-bitter food usually gathered where cooks and hedge-witches trade. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Apper Carrot": "Apper Carrot is a fermented food usually gathered in farmhouse pantries. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Ashblossom": "Ashblossom is a nectar-heavy flower usually gathered near standing stones. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Ashen Hops": "Ashen Hops is a sun-warmed food usually gathered from careful growers. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Autumn Glass": "Autumn Glass is a heavy mineral usually gathered from old deposits. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Bamboo": "Bamboo is a peculiar curio usually gathered among travelling peddlers. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Bane Berry": "Bane Berry looks edible enough, but its juice separates into strange colors when mixed with clean water. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Bashu Powder": "Bashu Powder is a metallic-smelling liquid usually gathered before it evaporates or curdles. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Basilisk Dandruff": "Basilisk Dandruff is a unlikely curio usually gathered from old shrines. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Bearded Green": "Bearded Green is a peculiar curio usually gathered where ordinary objects linger too long. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Beetle Lantern": "Beetle Lantern is a ritual-worn curio usually gathered from old shrines. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Bellflower Resin": "Bellflower Resin is a nectar-heavy flower usually gathered in brief seasonal blooms. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Bitter Star Anise": "Bitter Star Anise is a hollow-sounding curio usually gathered among travelling peddlers. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Black Cinnamon": "Black Cinnamon is a unlikely curio usually gathered from old shrines. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Black Pearl": "Black Pearl is a rich food usually gathered where cooks and hedge-witches trade. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Blackthorn Honey": "Blackthorn Honey pours slowly and darkly, clinging to spoons as if reluctant to become part of any recipe. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Blightshore Sand": "Blightshore Sand is a glassy mineral usually gathered near geothermal vents. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Blightshrooms": "Blightshrooms is a speckled mushroom usually gathered on rain-soaked roots. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Bloodroot": "Bloodroot darkens when exposed to air and is best used before its color settles. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Blossom of Spirit Vine": "Blossom of Spirit Vine feels lighter than it should, as though part of it has not fully agreed to remain material. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Blue Back Salmon": "Blue Back Salmon is a hollow-sounding curio usually gathered among travelling peddlers. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Blue-Ringed Octopus Skin": "Blue-Ringed Octopus Skin is a oily creature usually gathered from parts most hunters discard. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Bluecap Milk": "Bluecap Milk bruises easily and releases most of its strength through scent rather than color. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Boom Bell": "Boom Bell is a ritual-worn curio usually gathered in forgotten storerooms. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Bora Bug": "Bora Bug is a weathered curio usually gathered from old shrines. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Bottled Cap (Supa-Fizz)": "Bottled Cap (Supa-Fizz) bruises easily and releases most of its strength through scent rather than color. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Bottled Lightning": "Bottled Lightning prickles against glass and makes nearby hair rise when a storm is approaching. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Bristlecone Tear": "Bristlecone Tear is a fermented food usually gathered where cooks and hedge-witches trade. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Bronze Pollen": "Bronze Pollen is a ritual-worn curio usually gathered where ordinary objects linger too long. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Brush Reed": "Brush Reed is a wind-dried plant usually gathered where roads cut through wild country. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Bubble Gum": "Bubble Gum is a peculiar curio usually gathered from old shrines. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Bundle of Driko Twigs": "Bundle of Driko Twigs is a ritual-worn curio usually gathered among travelling peddlers. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Camp Mite": "Camp Mite is a ritual-worn curio usually gathered from old shrines. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Candlefish Oil": "Candlefish Oil is a clear liquid usually gathered in shallow pools. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Carrion Crawler Scum": "Carrion Crawler Scum is a peculiar curio usually gathered from old shrines. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Cat's Cradle Vine": "Cat's Cradle Vine is a thorned plant usually gathered where roads cut through wild country. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Cat's Tongue": "Cat's Tongue is a peculiar curio usually gathered in junk drawers. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Cave Chrysanthemum": "Cave Chrysanthemum is a well-handled curio usually gathered where ordinary objects linger too long. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Chalk Lotus": "Chalk Lotus is a ritual-worn curio usually gathered in junk drawers. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Chattering Reed": "Chattering Reed is a green-veined plant usually gathered in neglected gardens. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Chicken Egg": "Chicken Egg is a rich food usually gathered where cooks and hedge-witches trade. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Chisuya's Heavenly Tea": "Chisuya's Heavenly Tea is a starchy food usually gathered in market baskets. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Clay Snake Tail": "Clay Snake Tail is a chitinous creature usually gathered from shed remains. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Clockwork Acorn": "Clockwork Acorn is a ritual-worn curio usually gathered in forgotten storerooms. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Cloud Horn": "Cloud Horn is a well-handled curio usually gathered from old shrines. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Coal From the Spirit Train": "Coal From the Spirit Train feels lighter than it should, as though part of it has not fully agreed to remain material. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Copperleaf": "Copperleaf is a springy plant usually gathered in neglected gardens. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Corrupted Seawater": "Corrupted Seawater is a slow-moving liquid usually gathered before it evaporates or curdles. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Corrupted Slime": "Corrupted Slime resists containers, slowly flattening itself against corks and seams until properly salted. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Crackling Jasper": "Crackling Jasper is a salt-grained mineral usually gathered from old deposits. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Cranberry Meteor": "Cranberry Meteor looks edible enough, but its juice separates into strange colors when mixed with clean water. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Creeping Bolete": "Creeping Bolete is a speckled mushroom usually gathered where moonlight reaches damp soil. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Cricket Sugar": "Cricket Sugar is a hollow-sounding curio usually gathered from old shrines. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Crimson Octopus Ink": "Crimson Octopus Ink is a clear liquid usually gathered after careful distillation. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Crimson Peppercorn": "Crimson Peppercorn is a rich food usually gathered around camp kitchens. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Crownberry": "Crownberry looks edible enough, but its juice separates into strange colors when mixed with clean water. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Crystal Cabbage": "Crystal Cabbage is a salt-grained mineral usually gathered from old deposits. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Dandelion Fuse": "Dandelion Fuse is a ritual-worn curio usually gathered in junk drawers. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Dawn Petal": "Dawn Petal is a short-lived flower usually gathered in temple gardens. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Death Cap": "Death Cap bruises easily and releases most of its strength through scent rather than color. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Dewdrop Pearl": "Dewdrop Pearl is a tart food usually gathered around camp kitchens. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Dorrin Plate": "Dorrin Plate is a painted curio usually gathered from old shrines. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Dragon Fangs of Yutro": "Dragon Fangs of Yutro carries a hot reptilian musk and keeps a trace of old predatory magic even after cleaning. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Dragon Root": "Dragon Root carries a hot reptilian musk and keeps a trace of old predatory magic even after cleaning. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Dream Moth Dust": "Dream Moth Dust is a pearled liquid usually gathered after careful distillation. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Dreamlilly": "Dreamlilly is a hollow-sounding curio usually gathered in junk drawers. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Dried Fruit": "Dried Fruit looks edible enough, but its juice separates into strange colors when mixed with clean water. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Driftwood Pepper": "Driftwood Pepper is a springy plant usually gathered in neglected gardens. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Dust Bunny Fur": "Dust Bunny Fur is a sinewy creature usually gathered from parts most hunters discard. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Eagle Feather": "Eagle Feather is almost weightless, but a single strand can change the way a simmering brew moves. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Eagle Heart": "Eagle Heart is a oily creature usually gathered from a fresh carcass. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Earwax": "Earwax softens at a surprisingly low heat and carries old impressions from every seal, candle, or charm it once held. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Eelgrass Noodle": "Eelgrass Noodle is a fibrous plant usually gathered on wind-scoured slopes. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Elemental Dust": "Elemental Dust is a sharp liquid usually gathered at dawn. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Ember Fig": "Ember Fig is a painted curio usually gathered where ordinary objects linger too long. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Essence of Glumbug": "Essence of Glumbug is a slow-moving liquid usually gathered at dawn. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Essence of Ill Omen": "Essence of Ill Omen is a viscous liquid usually gathered at dawn. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Everfrost Berry": "Everfrost Berry looks edible enough, but its juice separates into strange colors when mixed with clean water. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Fable Fern": "Fable Fern is a ritual-worn curio usually gathered from old shrines. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Fairy Stool": "Fairy Stool bruises easily and releases most of its strength through scent rather than color. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Fairy Willow": "Fairy Willow is a sharp-scented plant usually gathered on wind-scoured slopes. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "False Mandrake": "False Mandrake is a wind-dried plant usually gathered along hedgerows. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Feather Rock": "Feather Rock is almost weightless, but a single strand can change the way a simmering brew moves. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Fiddlehead Spark": "Fiddlehead Spark is a weathered curio usually gathered from old shrines. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Fire Giant Hair": "Fire Giant Hair is a well-handled curio usually gathered in junk drawers. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Fire Peas": "Fire Peas is a fermented food usually gathered around camp kitchens. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Firefly Curd": "Firefly Curd is a hollow-sounding curio usually gathered where ordinary objects linger too long. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Fish Folk Tooth": "Fish Folk Tooth must be powdered slowly; rush the grinding and it sheds sharp flakes into the mortar. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Fish Head": "Fish Head is a ritual-worn curio usually gathered from old shrines. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Fizzing Green": "Fizzing Green is a painted curio usually gathered where ordinary objects linger too long. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Flame Lily": "Flame Lily is a fragrant flower usually gathered near standing stones. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Flash Paper": "Flash Paper is a unlikely curio usually gathered in junk drawers. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Floating Onion": "Floating Onion is a painted curio usually gathered in junk drawers. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Forge Slag": "Forge Slag is a salt-grained mineral usually gathered near geothermal vents. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Foxfire Jelly": "Foxfire Jelly is a weathered curio usually gathered in junk drawers. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Frost Lichen": "Frost Lichen is a springy plant usually gathered along hedgerows. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Frosted Basil": "Frosted Basil is a well-handled curio usually gathered from old shrines. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Fungal Teacup": "Fungal Teacup is a tart food usually gathered where cooks and hedge-witches trade. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Gargoyle Powder": "Gargoyle Powder is a slow-moving liquid usually gathered from sealed vessels. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Ghost Residue": "Ghost Residue feels lighter than it should, as though part of it has not fully agreed to remain material. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Giant Koi Fish Scale": "Giant Koi Fish Scale is a predatory creature usually gathered after careful field dressing. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Giant Poisonous Snake Scale": "Giant Poisonous Snake Scale is a scaled creature usually gathered from a fresh carcass. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Giant Toad Slime": "Giant Toad Slime resists containers, slowly flattening itself against corks and seams until properly salted. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Giant Wolf Spider Leg": "Giant Wolf Spider Leg is a bristled creature usually gathered after careful field dressing. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Gillyweed": "Gillyweed is a thorned plant usually gathered near running water. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Ginger Imp Root": "Ginger Imp Root is knotted and fibrous, with rings that stain a knife differently depending on the season. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Glassberry": "Glassberry looks edible enough, but its juice separates into strange colors when mixed with clean water. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Glow Worms of the Vale": "Glow Worms of the Vale is a unlikely curio usually gathered from old shrines. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Glowcap Milk": "Glowcap Milk bruises easily and releases most of its strength through scent rather than color. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Goblin Mustard": "Goblin Mustard is a hollow-sounding curio usually gathered among travelling peddlers. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Gohaku Rice": "Gohaku Rice is a sun-warmed food usually gathered where cooks and hedge-witches trade. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Golden Root": "Golden Root is knotted and fibrous, with rings that stain a knife differently depending on the season. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Goldfinch Eggshell": "Goldfinch Eggshell is a fermented food usually gathered from careful growers. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Grave Mint": "Grave Mint is a unlikely curio usually gathered in junk drawers. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Green Pepper Slime": "Green Pepper Slime resists containers, slowly flattening itself against corks and seams until properly salted. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Green Slime": "Green Slime resists containers, slowly flattening itself against corks and seams until properly salted. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Grey Ooze Slime": "Grey Ooze Slime resists containers, slowly flattening itself against corks and seams until properly salted. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Hagfinger": "Hagfinger is a hollow-sounding curio usually gathered among travelling peddlers. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Hakuma Sapwood": "Hakuma Sapwood is a springy plant usually gathered in neglected gardens. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Hakumon's Ramen Broth": "Hakumon's Ramen Broth is a fermented food usually gathered in farmhouse pantries. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Hand of Eryo": "Hand of Eryo is a weathered curio usually gathered from old shrines. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Happy Joy Cake": "Happy Joy Cake is a fermented food usually gathered from careful growers. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Hearthsalt": "Hearthsalt is a bristled creature usually gathered from a fresh carcass. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Hill Dragon Egg": "Hill Dragon Egg carries a hot reptilian musk and keeps a trace of old predatory magic even after cleaning. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Hill Giant Pustule": "Hill Giant Pustule is a sinewy creature usually gathered from parts most hunters discard. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Hill Giant Toenail": "Hill Giant Toenail is a ritual-worn curio usually gathered in junk drawers. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Honeyed Lichen": "Honeyed Lichen pours slowly and darkly, clinging to spoons as if reluctant to become part of any recipe. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Howlier Fur": "Howlier Fur is a sinewy creature usually gathered from parts most hunters discard. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Hush Violet": "Hush Violet is a peculiar curio usually gathered from old shrines. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Idle Claws": "Idle Claws must be powdered slowly; rush the grinding and it sheds sharp flakes into the mortar. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Imp Ichor": "Imp Ichor is a oily creature usually gathered from shed remains. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Irimbi Chrysalis": "Irimbi Chrysalis is a bristled creature usually gathered from shed remains. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Iron Plum": "Iron Plum is a peculiar curio usually gathered from old shrines. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Itchi Berry": "Itchi Berry looks edible enough, but its juice separates into strange colors when mixed with clean water. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Ivory Cork": "Ivory Cork is a hollow-sounding curio usually gathered from old shrines. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Jack-O-Lantern Bits": "Jack-O-Lantern Bits is a weathered curio usually gathered in junk drawers. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Jellyfish Sugar": "Jellyfish Sugar is a peculiar curio usually gathered from old shrines. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Jester's Nutmeg": "Jester's Nutmeg is a unlikely curio usually gathered among travelling peddlers. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Jumping Bonfire": "Jumping Bonfire is a peculiar curio usually gathered where ordinary objects linger too long. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Juniper Spark": "Juniper Spark is a hollow-sounding curio usually gathered where ordinary objects linger too long. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Kettle Mushroom": "Kettle Mushroom bruises easily and releases most of its strength through scent rather than color. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Kingfisher Scale": "Kingfisher Scale is a sinewy creature usually gathered where the creature laired. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Kioth Leech": "Kioth Leech is a weathered curio usually gathered where ordinary objects linger too long. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Knobble Leaf Seaweed": "Knobble Leaf Seaweed is a sap-rich plant usually gathered in neglected gardens. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Kojo Root": "Kojo Root is knotted and fibrous, with rings that stain a knife differently depending on the season. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Kojobi Fruit": "Kojobi Fruit looks edible enough, but its juice separates into strange colors when mixed with clean water. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Lantern Beetle Shell": "Lantern Beetle Shell is a oily creature usually gathered where the creature laired. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Laughing Moss": "Laughing Moss is a fibrous plant usually gathered on wind-scoured slopes. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Laughing Parsnip": "Laughing Parsnip is a hollow-sounding curio usually gathered in junk drawers. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Lemon Thunder": "Lemon Thunder is a unlikely curio usually gathered in junk drawers. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Licorice Feather": "Licorice Feather is almost weightless, but a single strand can change the way a simmering brew moves. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Lightning Moss": "Lightning Moss prickles against glass and makes nearby hair rise when a storm is approaching. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Lightning Pea": "Lightning Pea prickles against glass and makes nearby hair rise when a storm is approaching. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Lion's Plume": "Lion's Plume is a peculiar curio usually gathered where ordinary objects linger too long. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Lionfish Poison": "Lionfish Poison is a slow-moving liquid usually gathered in shallow pools. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Little Cloud Bean": "Little Cloud Bean is a painted curio usually gathered where ordinary objects linger too long. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Living Spud": "Living Spud is a stubborn little tuber that sometimes shifts in its sack when no one is looking. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Lizard Pepper": "Lizard Pepper is a starchy food usually gathered where cooks and hedge-witches trade. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Lonesome Sage": "Lonesome Sage is a unlikely curio usually gathered in junk drawers. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Lovers Vine": "Lovers Vine is a thorned plant usually gathered where roads cut through wild country. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Magic Monk's Rice Wine": "Magic Monk's Rice Wine is a sweet-bitter food usually gathered from careful growers. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Mandrake Root": "Mandrake Root is knotted and fibrous, with rings that stain a knife differently depending on the season. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Marble Onion": "Marble Onion is a painted curio usually gathered in junk drawers. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Marshmallow Reed": "Marshmallow Reed is a sharp-scented plant usually gathered on wind-scoured slopes. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Mellowort": "Mellowort is a hollow-sounding curio usually gathered from old shrines. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Meteor Chicory": "Meteor Chicory is a hollow-sounding curio usually gathered where ordinary objects linger too long. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Milkweed Glass": "Milkweed Glass is a sap-rich plant usually gathered on wind-scoured slopes. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Mindflayer Stinkhorn": "Mindflayer Stinkhorn is a speckled mushroom usually gathered in shaded cellars. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Mirror Clove": "Mirror Clove is a well-handled curio usually gathered in forgotten storerooms. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Mist Turnip": "Mist Turnip is a hollow-sounding curio usually gathered in junk drawers. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Molted Lizard Skin": "Molted Lizard Skin is a warm-boned creature usually gathered after careful field dressing. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Monkey's Coil": "Monkey's Coil is a pearled liquid usually gathered after careful distillation. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Moon Jelly Curd": "Moon Jelly Curd looks dull by day but takes on a quiet silver clarity under moonlight. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Moonstalker": "Moonstalker looks dull by day but takes on a quiet silver clarity under moonlight. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Morning Dew": "Morning Dew is a pearled liquid usually gathered before it evaporates or curdles. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Mossy Peach Pit": "Mossy Peach Pit is a green-veined plant usually gathered near running water. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Moth Lantern Oil": "Moth Lantern Oil is a viscous liquid usually gathered after careful distillation. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Mountain Ox Dung": "Mountain Ox Dung is a rich food usually gathered in market baskets. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Mountain Snail": "Mountain Snail is a weathered curio usually gathered in forgotten storerooms. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Mournshade": "Mournshade is a ritual-worn curio usually gathered where ordinary objects linger too long. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Mouse Tree Nut": "Mouse Tree Nut is a weathered curio usually gathered in junk drawers. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Mudberry": "Mudberry looks edible enough, but its juice separates into strange colors when mixed with clean water. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Mumblewort": "Mumblewort is a weathered curio usually gathered in junk drawers. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Munchanka Root": "Munchanka Root is knotted and fibrous, with rings that stain a knife differently depending on the season. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Muroosa Bush": "Muroosa Bush is a fibrous plant usually gathered near running water. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Nakudama Spice": "Nakudama Spice is a well-handled curio usually gathered in forgotten storerooms. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Narutomaki": "Narutomaki is a unlikely curio usually gathered where ordinary objects linger too long. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Needleberry": "Needleberry looks edible enough, but its juice separates into strange colors when mixed with clean water. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Night Thistle": "Night Thistle is a green-veined plant usually gathered near running water. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Nightjar Syrup": "Nightjar Syrup is a weathered curio usually gathered in forgotten storerooms. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Nightshade": "Nightshade is a hollow-sounding curio usually gathered in junk drawers. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Nobblewort": "Nobblewort is a hollow-sounding curio usually gathered where ordinary objects linger too long. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Nokumai's Frozen Breath": "Nokumai's Frozen Breath is a unlikely curio usually gathered where ordinary objects linger too long. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Noodle Eel": "Noodle Eel is a peculiar curio usually gathered from old shrines. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Noonshadow Leaf": "Noonshadow Leaf is a green-veined plant usually gathered in neglected gardens. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Nothic Eye": "Nothic Eye reflects more light than it receives, which is why careful brewers cover it until the last step. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Ochre Beetle Wax": "Ochre Beetle Wax softens at a surprisingly low heat and carries old impressions from every seal, candle, or charm it once held. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Olisuba Bush": "Olisuba Bush is a springy plant usually gathered on wind-scoured slopes. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Opal Garlic": "Opal Garlic is a well-handled curio usually gathered among travelling peddlers. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Oporion Glass": "Oporion Glass is a resonant mineral usually gathered from old deposits. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Opu Opu Spring Water": "Opu Opu Spring Water is a viscous liquid usually gathered at dawn. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Orange Slime": "Orange Slime resists containers, slowly flattening itself against corks and seams until properly salted. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Orange Thunderroot": "Orange Thunderroot is knotted and fibrous, with rings that stain a knife differently depending on the season. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Origami Crane": "Origami Crane is a well-handled curio usually gathered from old shrines. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Ota Lantern Oil": "Ota Lantern Oil is a metallic-smelling liquid usually gathered at dawn. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Painted Pepper": "Painted Pepper is a tart food usually gathered where cooks and hedge-witches trade. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Paper Lotus": "Paper Lotus is a well-handled curio usually gathered where ordinary objects linger too long. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Peeping Willow": "Peeping Willow is a sharp-scented plant usually gathered where roads cut through wild country. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Peppermint Toadstool": "Peppermint Toadstool bruises easily and releases most of its strength through scent rather than color. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Petrified Alligator": "Petrified Alligator is a peculiar curio usually gathered from old shrines. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Pickled Stardust": "Pickled Stardust is a clear liquid usually gathered in shallow pools. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Pinecone Pearl": "Pinecone Pearl is a starchy food usually gathered in market baskets. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Pink Candle Wax": "Pink Candle Wax softens at a surprisingly low heat and carries old impressions from every seal, candle, or charm it once held. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Pixie's Parasol": "Pixie's Parasol is a hollow-sounding curio usually gathered in junk drawers. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Plumage of a Running Kirio": "Plumage of a Running Kirio is almost weightless, but a single strand can change the way a simmering brew moves. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Poison": "Poison is a metallic-smelling liquid usually gathered before it evaporates or curdles. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Pok Pok Flakes": "Pok Pok Flakes is a hollow-sounding curio usually gathered in forgotten storerooms. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Pollen of the First Yawn": "Pollen of the First Yawn is a painted curio usually gathered in forgotten storerooms. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Puddle Orchid": "Puddle Orchid is a fragrant flower usually gathered in temple gardens. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Pungent Sea Foam": "Pungent Sea Foam is a hollow-sounding curio usually gathered in forgotten storerooms. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Purple Worm Bile": "Purple Worm Bile is a predatory creature usually gathered from parts most hunters discard. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Pyramid Melon": "Pyramid Melon looks edible enough, but its juice separates into strange colors when mixed with clean water. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Queen's Dilemma": "Queen's Dilemma is a unlikely curio usually gathered in junk drawers. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Quicksilver Bean": "Quicksilver Bean is a peculiar curio usually gathered in forgotten storerooms. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Quipper Scales": "Quipper Scales is a predatory creature usually gathered where the creature laired. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Rabbit Moon Carrot": "Rabbit Moon Carrot looks dull by day but takes on a quiet silver clarity under moonlight. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Rainbow Mushroom": "Rainbow Mushroom bruises easily and releases most of its strength through scent rather than color. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Rainbow Onion": "Rainbow Onion is a unlikely curio usually gathered in junk drawers. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Raka Paste": "Raka Paste is a pearled liquid usually gathered from sealed vessels. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Rattle Shoot": "Rattle Shoot is a ritual-worn curio usually gathered in junk drawers. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Red Amanita Mushroom": "Red Amanita Mushroom bruises easily and releases most of its strength through scent rather than color. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Redcap Honey": "Redcap Honey pours slowly and darkly, clinging to spoons as if reluctant to become part of any recipe. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Reed Dragonfly Wing": "Reed Dragonfly Wing carries a hot reptilian musk and keeps a trace of old predatory magic even after cleaning. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Remorhaz Sulphur": "Remorhaz Sulphur is a glassy mineral usually gathered near geothermal vents. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Ribbon Root": "Ribbon Root is knotted and fibrous, with rings that stain a knife differently depending on the season. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Riverglass Salt": "Riverglass Salt is a heavy mineral usually gathered near geothermal vents. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Ronin Neko Figurine": "Ronin Neko Figurine is a unlikely curio usually gathered where ordinary objects linger too long. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Rooster Ember": "Rooster Ember is a well-handled curio usually gathered in junk drawers. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Rose Quartz Pepper": "Rose Quartz Pepper is a sun-warmed food usually gathered in farmhouse pantries. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Rubble from a Rubble Golem": "Rubble from a Rubble Golem is a well-handled curio usually gathered where ordinary objects linger too long. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Rust Crab": "Rust Crab is a ritual-worn curio usually gathered where ordinary objects linger too long. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Rustleberry": "Rustleberry looks edible enough, but its juice separates into strange colors when mixed with clean water. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Saffron Slug Trail": "Saffron Slug Trail is a unlikely curio usually gathered from old shrines. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Sage Arol's Beetle": "Sage Arol's Beetle is a weathered curio usually gathered among travelling peddlers. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Salted Comet Dust": "Salted Comet Dust is a sharp liquid usually gathered before it evaporates or curdles. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Sandglass Seed": "Sandglass Seed is a glassy mineral usually gathered near geothermal vents. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Sapphire Leek": "Sapphire Leek is a thorned plant usually gathered on wind-scoured slopes. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Scalefruit Rind": "Scalefruit Rind looks edible enough, but its juice separates into strange colors when mixed with clean water. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Screaming Thyme": "Screaming Thyme is a peculiar curio usually gathered in forgotten storerooms. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Sea Water": "Sea Water is a viscous liquid usually gathered after careful distillation. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Seafoam Turnip": "Seafoam Turnip is a well-handled curio usually gathered in junk drawers. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Seashell": "Seashell is a bristled creature usually gathered after careful field dressing. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Seaweed": "Seaweed is a springy plant usually gathered near running water. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Shadow Lemon": "Shadow Lemon is a well-handled curio usually gathered among travelling peddlers. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Shadowroot": "Shadowroot is knotted and fibrous, with rings that stain a knife differently depending on the season. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Sheep Dragon Wool": "Sheep Dragon Wool carries a hot reptilian musk and keeps a trace of old predatory magic even after cleaning. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Silver Kelp Knot": "Silver Kelp Knot is a springy plant usually gathered near running water. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Silverthorn": "Silverthorn is a fibrous plant usually gathered where roads cut through wild country. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Singing Caraway": "Singing Caraway is a ritual-worn curio usually gathered from old shrines. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Singing Nettle": "Singing Nettle is a sharp-scented plant usually gathered in neglected gardens. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Skulk Petal": "Skulk Petal is a fragrant flower usually gathered near standing stones. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Skullcap Cherry": "Skullcap Cherry bruises easily and releases most of its strength through scent rather than color. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Sleeping Merchant": "Sleeping Merchant is a hollow-sounding curio usually gathered in forgotten storerooms. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Sleepy Fern": "Sleepy Fern is a hollow-sounding curio usually gathered where ordinary objects linger too long. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Smoked Moon Bean": "Smoked Moon Bean looks dull by day but takes on a quiet silver clarity under moonlight. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Snap Vine Sap": "Snap Vine Sap is a fibrous plant usually gathered near running water. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Snow Cricket Shell": "Snow Cricket Shell is a bristled creature usually gathered from parts most hunters discard. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Soaproot": "Soaproot is knotted and fibrous, with rings that stain a knife differently depending on the season. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Soda Lilly": "Soda Lilly is a well-handled curio usually gathered from old shrines. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "Sour Salamander Egg": "Sour Salamander Egg is a oddly filling food usually gathered in market baskets. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Sourgrass": "Sourgrass is a wind-dried plant usually gathered in neglected gardens. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Spark Plug": "Spark Plug is a well-handled curio usually gathered in forgotten storerooms. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Sparkle Yam": "Sparkle Yam is a hollow-sounding curio usually gathered from old shrines. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Spectral Oat": "Spectral Oat is a peculiar curio usually gathered in forgotten storerooms. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Spider Silk Tea": "Spider Silk Tea is a tart food usually gathered in farmhouse pantries. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Spindle Leg Spider Webs": "Spindle Leg Spider Webs is a sinewy creature usually gathered from parts most hunters discard. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. It rewards patience during preparation and punishes dramatic shortcuts.",
  "Spirit Root": "Spirit Root feels lighter than it should, as though part of it has not fully agreed to remain material. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Spirit Tea": "Spirit Tea feels lighter than it should, as though part of it has not fully agreed to remain material. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Spring Moss": "Spring Moss is a springy plant usually gathered near running water. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Squid Ink": "Squid Ink is a volatile liquid usually gathered from sealed vessels. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Starshell": "Starshell is a predatory creature usually gathered from shed remains. Brewers value it because it nudges magic away from utility and toward story, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Stone Giant Skin": "Stone Giant Skin is a predatory creature usually gathered after careful field dressing. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Storm Giant's Toe": "Storm Giant's Toe is a weathered curio usually gathered where ordinary objects linger too long. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Sun Shroom": "Sun Shroom is a spongy mushroom usually gathered where moonlight reaches damp soil. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Tangle Weed": "Tangle Weed is a springy plant usually gathered where roads cut through wild country. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Tears of the Moon": "Tears of the Moon looks dull by day but takes on a quiet silver clarity under moonlight. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Theki Root": "Theki Root is knotted and fibrous, with rings that stain a knife differently depending on the season. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Toka Truffle": "Toka Truffle bruises easily and releases most of its strength through scent rather than color. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "True Dragon Scale": "True Dragon Scale carries a hot reptilian musk and keeps a trace of old predatory magic even after cleaning. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Ube": "Ube is a rich food usually gathered where cooks and hedge-witches trade. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Varrow": "Varrow is a painted curio usually gathered among travelling peddlers. Brewers value it because it coaxes strange coincidences out of otherwise sensible recipes, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Vinyl Record": "Vinyl Record is a weathered curio usually gathered from old shrines. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Water Elemental Droplet": "Water Elemental Droplet is a sharp liquid usually gathered before it evaporates or curdles. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Most markets sell inferior samples under the same name.",
  "White Ghost Orchid Seed": "White Ghost Orchid Seed feels lighter than it should, as though part of it has not fully agreed to remain material. Brewers value it because it turns raw magic toward problem-solving rather than spectacle, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Willowshade Bush": "Willowshade Bush is a fibrous plant usually gathered where roads cut through wild country. Brewers value it because it anchors useful effects so they survive handling and delay, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Windbloom": "Windbloom is a ritual-worn curio usually gathered where ordinary objects linger too long. Brewers value it because it pushes a brew toward heat, pressure, venom, or impact, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Witch's Broom": "Witch's Broom is a weathered curio usually gathered among travelling peddlers. Brewers value it because it gives offensive products a quick, hungry edge, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Witch's Eye Coral": "Witch's Eye Coral has a reef-born hardness and a faint salt smell; thin chips click like porcelain when shaken in a vial. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Wolfenite": "Wolfenite is a spark-flecked mineral usually gathered in river gravel. Brewers value it because it invites color, transformation, mimicry, and other sideways effects, especially when prepared with clean tools and a steady flame. Inexperienced brewers often use too much of it and blame the recipe.",
  "Wolfsbane": "Wolfsbane is a painted curio usually gathered where ordinary objects linger too long. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Wufu Whisky": "Wufu Whisky is a oddly filling food usually gathered where cooks and hedge-witches trade. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. It is best stored separately, since it tends to lend its character to nearby reagents.",
  "Wychwood": "Wychwood is a thorned plant usually gathered in neglected gardens. Brewers value it because it makes restorative and travel mixtures more dependable, especially when prepared with clean tools and a steady flame. Its best quality is subtle: the mixture changes before the brewer notices why.",
  "Wyvern Saliva": "Wyvern Saliva carries a hot reptilian musk and keeps a trace of old predatory magic even after cleaning. Brewers value it because it adds bite and immediacy to violent mixtures, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue.",
  "Wyvern Stinger": "Wyvern Stinger carries a hot reptilian musk and keeps a trace of old predatory magic even after cleaning. Brewers value it because it helps a concoction strike before it settles, especially when prepared with clean tools and a steady flame. A careful alchemist labels the harvest place as well as the date.",
  "Yugi Sap": "Yugi Sap is a wind-dried plant usually gathered near running water. Brewers value it because it makes brews memorable in ways formula books rarely approve, especially when prepared with clean tools and a steady flame. Old hands test a sample by smell before they ever put it on a scale.",
  "Yuma Shrub": "Yuma Shrub is a fibrous plant usually gathered near running water. Brewers value it because it steadies practical brews and helps them keep their shape, especially when prepared with clean tools and a steady flame. Poor specimens go flat quickly, leaving only color and no virtue."
};

function ingredientFlavor(ing) {
  const name = ing.name;
  const level = ingredientLevel(ing);
  const type = ingredientType(name);
  const vals = [Number(ing.combat)||0, Number(ing.utility)||0, Number(ing.whimsy)||0];
  const max = Math.max(...vals);
  const focus = max === vals[0] ? "combat" : max === vals[1] ? "utility" : "whimsy";
  const description = OBOJIMA_INGREDIENT_DESCRIPTIONS[name] ?? `${name} is a distinctive ${type.toLowerCase()} with a brewing profile that deserves separate notes.`;
  const potency = level <= 2
    ? "Apprentices can afford to experiment with it, but good notes still matter."
    : level <= 5
      ? "Journeyman brewers keep it sorted carefully, since substitutions begin to matter at this strength."
      : level <= 9
        ? "Its potency is obvious in the mortar, and a careless measure can pull a recipe off course."
        : level <= 14
          ? "Merchants rarely leave it on the open shelf; serious buyers know to ask quietly."
          : "Only expert alchemists handle it casually, and even they prefer gloves, clean tools, and witnesses.";
  return `<p><strong>Ingredient Type:</strong> ${type}</p><p>${description}</p><p><strong>Brewing Tendency:</strong> ${focus[0].toUpperCase()+focus.slice(1)}</p><p><em>${potency}</em></p>`;
}

function ingredientPrice(level, name) {
  const l = Math.max(1, Number(level) || 1);
  const treasureByLevel = {1:175,2:300,3:500,4:850,5:1350,6:2000,7:2900,8:4000,9:5700,10:8000,11:11500,12:16500,13:25000,14:36500,15:54500,16:82500,17:128000,18:208000,19:355000,20:490000};
  if (l <= 1) return { sp: 1 + (stableHash(name) % 5) };
  // Derived from Table 10-9 as a modest raw-material value: roughly 0.15%-0.40% of the party treasure budget for that level.
  const budget = treasureByLevel[Math.min(l,20)] ?? treasureByLevel[20];
  const spread = 0.0015 + ((stableHash(name) % 250) / 100000);
  const gp = Math.max(1, Math.round(budget * spread));
  return { gp };
}

async function getOrCreateItemFolder(name, parent=null, sorting="a") {
  let folder = game.folders.find(f => f.type === "Item" && f.name === name && (f.folder?.id ?? null) === (parent?.id ?? parent ?? null));
  if (!folder) folder = await Folder.create({ name, type: "Item", folder: parent?.id ?? parent ?? null, sorting });
  return folder;
}

function itemNameForFormula(resultName) { return `Formula: ${resultName}`; }

function gmUserIds() { return game.users.filter(u => u.isGM).map(u => u.id); }
function primaryActiveGM() { return game.users.find(u => u.isGM && u.active) ?? game.users.find(u => u.isGM); }
async function createGMOnlyMessage(content, actor=null) {
  const speaker = actor ? ChatMessage.getSpeaker({ actor }) : ChatMessage.getSpeaker();
  if (game.user.isGM) {
    return ChatMessage.create({ speaker, whisper: gmUserIds(), blind: true, content });
  }
  const gm = primaryActiveGM();
  if (!gm) return ui.notifications.warn("No active GM is available to receive Obojima Brewing Notes.");
  game.socket.emit(`module.${MODULE_ID}`, { type: "gm-brewing-note", content, speaker });
}


async function createFormulaItem(actor, { resultName, ingredients, winner, value, level }) {
  const description = `<p><strong>Formula for:</strong> ${resultName}</p><p><strong>Ingredients:</strong> ${ingredients.join(" + ")}</p><p>This formula records the exact Obojima-style ingredient combination needed to reproduce this brew.</p>`;
  const flags = { [MODULE_ID]: { formula: true, resultName, ingredients, winner, value, resultLevel: level } };

  // Use an equipment item rather than treasure: in PF2e it is visible in the normal inventory,
  // supports negligible bulk cleanly, and avoids some worlds/modules treating treasure as coinage.
  const formulaData = {
    name: itemNameForFormula(resultName),
    type: "equipment",
    img: "icons/sundries/documents/document-symbol-circle-brown.webp",
    system: {
      quantity: 1,
      level: { value: 0 },
      price: { value: { gp: 0 } },
      bulk: { value: 0 },
      traits: { value: [], rarity: "common", otherTags: [] },
      description: { value: description, gm: "" }
    },
    flags
  };

  try {
    const created = await actor.createEmbeddedDocuments("Item", [formulaData]);
    if (created?.length) return created;
  } catch (err) {
    console.warn(`${MODULE_ID} | Equipment formula creation failed; trying treasure fallback.`, err);
  }

  // Fallback for older PF2e schemas/worlds that may not accept equipment in the expected shape.
  const treasureFallback = foundry.utils.deepClone(formulaData);
  treasureFallback.type = "treasure";
  treasureFallback.system.traits = { value: [], rarity: "common", otherTags: [] };
  const created = await actor.createEmbeddedDocuments("Item", [treasureFallback]);
  if (!created?.length) ui.notifications.warn(`Obojima Brewing could not create the formula item for ${resultName}. Check the console for errors.`);
  return created;
}


async function repairFormulaBulkItems() {
  if (!game.user.isGM) return;
  const actors = Array.from(game.actors ?? []);
  for (const actor of actors) {
    const updates = actor.items
      .filter(i => i.flags?.[MODULE_ID]?.formula && (i.system?.bulk?.value === "-" || Number.isNaN(Number(i.system?.bulk?.value))))
      .map(i => ({ _id: i.id, "system.bulk.value": 0 }));
    if (updates.length) {
      try { await actor.updateEmbeddedDocuments("Item", updates); }
      catch (err) { console.warn(`${MODULE_ID} | Could not repair formula bulk for ${actor.name}.`, err); }
    }
  }
}

async function createIngredientItems() {
  if (!game.user.isGM) return;
  const root = await getOrCreateItemFolder("Obojima Ingredients", null, "m");
  for (const ing of INGREDIENTS) {
    const level = ingredientLevel(ing);
    const levelFolder = await getOrCreateItemFolder(`Level ${String(level).padStart(2,"0")} Ingredients`, root, "a");
    const img = await ingredientIcon(ing.name);
    const price = ingredientPrice(level, ing.name);
    const description = ingredientFlavor(ing);
    const type = ingredientType(ing.name);
    const gmDescription = `<p><strong>Ingredient Type:</strong> ${type}</p><p><strong>GM Ingredient Values</strong>: Combat ${ing.combat}, Utility ${ing.utility}, Whimsy ${ing.whimsy}</p><p><strong>Obojima Ingredient Level:</strong> ${level}</p>`;
    const existing = game.items.find(i => i.flags?.[MODULE_ID]?.ingredient && i.name === ing.name);
    const data = {
      name: ing.name,
      type: "consumable",
      img,
      folder: levelFolder.id,
      system: { quantity: 1, level: { value: level }, price: { value: price }, traits: { value: ["ingredient"], rarity: "common", otherTags: [] }, description: { value: description, gm: gmDescription } },
      flags: { [MODULE_ID]: { ingredient: true, combat: ing.combat, utility: ing.utility, whimsy: ing.whimsy, ingredientLevel: level, ingredientType: type, coreIconCategory: ingredientIconCategory(ing.name) } }
    };
    if (existing) await existing.update({ img, folder: levelFolder.id, "system.level.value": level, "system.price.value": price, "system.description.value": description, "system.description.gm": gmDescription, [`flags.${MODULE_ID}`]: data.flags[MODULE_ID] });
    else await Item.create(data);
  }
}

function unidentifiedBrewDescription(sideEffect=null) {
  return `<p><em>This brew is unidentified. Its true effect is hidden until it is identified with the PF2e item identification system.</em></p>` +
    (sideEffect ? `<p><em>Something about it seems unstable.</em></p>` : "");
}

function trueBrewDescription(trueDescription, sideEffect=null) {
  return `${trueDescription ?? ""}${sideEffect ? `<hr><p><strong>Brewing Side Effect:</strong> ${sideEffect}</p>` : ""}`;
}

function applyPF2eMystification(itemData, { unidentifiedName, unidentifiedDescription, unidentifiedImg } = {}) {
  itemData.system ??= {};
  itemData.system.identification ??= {};
  itemData.system.identification.status = "unidentified";
  itemData.system.identification.unidentified = {
    name: unidentifiedName ?? `Unusual ${itemData.type === "consumable" ? "Consumable" : "Item"}`,
    img: unidentifiedImg ?? itemData.img ?? "icons/consumables/potions/potion-bottle-corked-blue.webp",
    data: {
      description: { value: unidentifiedDescription ?? unidentifiedBrewDescription() }
    }
  };
  itemData.system.identification.misidentified ??= {};
  return itemData;
}

function whimsyItemData(w, mystified=false, sideEffect=null) {
  const trueDesc = trueBrewDescription(`<p>${w.description}</p>`, sideEffect);
  const data = {
    name: w.name,
    type: "consumable",
    img: whimsyPotionIcon(w.index),
    system: {
      quantity: 1,
      level: { value: w.level },
      category: "potion",
      traits: { value: ["magical", "potion", "whimsy"], rarity: "uncommon", otherTags: [] },
      description: { value: trueDesc, gm: sideEffect ? `<p><strong>Brewing Side Effect:</strong> ${sideEffect}</p>` : "" },
      uses: { value: 1, max: 1, per: "charges", autoDestroy: true },
      identification: { status: "identified", unidentified: { name: "Unknown Whimsical Potion", img: "icons/consumables/potions/potion-bottle-corked-blue.webp", data: { description: { value: unidentifiedBrewDescription(sideEffect) } } }, misidentified: {} }
    },
    flags: { [MODULE_ID]: { whimsyPotion: true, resultIndex: w.index, trueName: w.name, trueDescription: w.description, sideEffect, mystified } }
  };
  if (mystified) applyPF2eMystification(data, {
    unidentifiedName: "Unidentified Consumable",
    unidentifiedDescription: unidentifiedBrewDescription(sideEffect),
    unidentifiedImg: "icons/consumables/potions/potion-bottle-corked-blue.webp"
  });
  return data;
}

async function createWhimsyDirectoryItems() {
  if (!game.user.isGM) return;
  await getObojimaPotionIcons();
  const folderName = "Obojima Whimsy Potions";
  let folder = game.folders.find(f => f.type === "Item" && f.name === folderName) ?? await Folder.create({ name: folderName, type: "Item" });
  const existing = new Map(game.items.filter(i => i.folder?.id === folder.id || i.flags?.[MODULE_ID]?.whimsyPotion).map(i => [i.name, i]));
  for (const w of WHIMSY_POTIONS) {
    const data = whimsyItemData(w, false, null);
    data.folder = folder.id;
    const existingItem = existing.get(w.name);
    if (existingItem) {
      await existingItem.update({ img: data.img, "system.identification.unidentified.img": "icons/consumables/potions/potion-bottle-corked-blue.webp" });
    } else {
      await Item.create(data);
    }
  }
}


function htmlEscape(value) {
  return String(value ?? "").replace(/[&<>"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[ch]));
}

function productJournalContent(title, rows) {
  const body = rows.map((r, i) => `<tr><td>${i+1}</td><td>${htmlEscape(r.range ?? "—")}</td><td>${Number(r.level) || 0}</td><td>${htmlEscape(r.name)}</td><td>${Number(r.itemLevel ?? r.level) || 0}</td></tr>`).join("");
  return `<h1>${htmlEscape(title)}</h1><p>This reference is generated by the Obojima Brewing module. Ingredient totals now determine a <strong>Product Level</strong> first. Product level uses a 15-point range per level, matching the smoothed ingredient level scale. The exact product is then chosen deterministically from products of that level using the three ingredient names, so the same recipe remains reproducible while the full PF2e item list remains reachable.</p><table><thead><tr><th>#</th><th>Ingredient Total Range</th><th>Product Level</th><th>Product</th><th>Item Level</th></tr></thead><tbody>${body}</tbody></table>`;
}

function levelGroupedProductRows(list, title) {
  const rows = [];
  for (let level = 1; level <= 20; level++) {
    const range = ingredientTotalRangeForLevel(level);
    const products = title === "whimsy" ? whimsyAtLevel(level) : productsAtLevel(list, level);
    for (const product of products) rows.push({ range: `${range.min}-${range.max}`, level, name: product.name, itemLevel: title === "whimsy" ? product.level : itemLevel(product) });
  }
  return rows;
}


function bonusFlagJournalContent() {
  return `<h1>Obojima Item Bonuses</h1>
<p>Custom items can grant bonuses to Obojima brewing and harvesting in two ways: PF2e Rule Elements or module flags. Rule Elements are recommended because they can be edited from an item sheet's <strong>Rules</strong> tab.</p>

<h2>Recommended Method: PF2e Rule Elements</h2>
<p>Create a new Rule Element on the item, choose <strong>FlatModifier</strong>, and paste one of the JSON examples below. The module reads these custom selectors directly.</p>

<h3>Harvesting Rule Element Selectors</h3>
<table>
<thead><tr><th>Selector</th><th>Effect</th></tr></thead>
<tbody>
<tr><td><code>obojima-harvest</code></td><td>Bonus to all Obojima harvesting checks.</td></tr>
<tr><td><code>obojima-ingredient-harvest</code></td><td>Bonus only when harvesting brewing ingredients.</td></tr>
<tr><td><code>obojima-monster-part-harvest</code></td><td>Bonus only when harvesting monster parts.</td></tr>
<tr><td><code>obojima-extra-ingredients</code></td><td>Creates this many additional brewing ingredients on a successful ingredient harvest.</td></tr>
<tr><td><code>obojima-extra-monster-parts</code></td><td>Creates this many additional monster parts on a successful monster-part harvest.</td></tr>
<tr><td><code>obojima-harvest-level</code></td><td>Raises the generated harvested item's effective level by this amount.</td></tr>
</tbody>
</table>

<h3>Brewing Rule Element Selectors</h3>
<table>
<thead><tr><th>Selector</th><th>Effect</th></tr></thead>
<tbody>
<tr><td><code>obojima-brewing</code></td><td>Bonus to all Obojima brewing Crafting checks.</td></tr>
<tr><td><code>obojima-combat-brewing</code></td><td>Bonus to brewing checks when the winning product category is Combat.</td></tr>
<tr><td><code>obojima-utility-brewing</code></td><td>Bonus to brewing checks when the winning product category is Utility.</td></tr>
<tr><td><code>obojima-whimsy-brewing</code></td><td>Bonus to brewing checks when the winning product category is Whimsy.</td></tr>
<tr><td><code>obojima-extra-brewed-items</code></td><td>Creates this many additional copies of the baseline product on a successful or critically successful brew.</td></tr>
<tr><td><code>obojima-alchemical-lab</code></td><td>Marks a custom item as counting as suitable alchemical brewing equipment.</td></tr>
</tbody>
</table>

<h3>Custom Brewing Equipment</h3>
<p>The module automatically accepts <strong>Alchemist's Lab</strong>, <strong>Alchemist's Lab (Expanded)</strong>, and <strong>Alchemist's Toolkit</strong> as suitable brewing equipment. To make a custom item such as a Brewing Kit or Black Cauldron count as brewing equipment, add this Rule Element:</p>
<pre><code>{
  "key": "RollOption",
  "domain": "all",
  "option": "obojima-alchemical-lab"
}</code></pre>
<p>For compatibility, the module also recognizes a Rule Element using selector <code>obojima-alchemical-lab</code>, or the legacy module flag <code>alchemicalLab: true</code>.</p>

<h2>Example Rule Elements</h2>
<p><strong>Harvesting Kit +1</strong></p>
<pre><code>{
  "key": "FlatModifier",
  "selector": "obojima-harvest",
  "type": "item",
  "value": 1
}</code></pre>

<p><strong>Masterwork Cauldron +1 to brewing</strong></p>
<pre><code>{
  "key": "FlatModifier",
  "selector": "obojima-brewing",
  "type": "item",
  "value": 1
}</code></pre>

<p><strong>Black Cauldron counts as brewing equipment</strong></p>
<pre><code>{
  "key": "RollOption",
  "domain": "all",
  "option": "obojima-alchemical-lab"
}</code></pre>

<p><strong>Fey Alembic +2 to Whimsy brewing</strong></p>
<pre><code>{
  "key": "FlatModifier",
  "selector": "obojima-whimsy-brewing",
  "type": "item",
  "value": 2
}</code></pre>

<p><strong>Efficient Reagent Rack: +1 extra brewed item</strong></p>
<pre><code>{
  "key": "FlatModifier",
  "selector": "obojima-extra-brewed-items",
  "type": "item",
  "value": 1
}</code></pre>

<p><strong>Grand Trophy Hunter's Kit: +2 monster-part harvest checks and +1 harvest level</strong></p>
<pre><code>{
  "key": "FlatModifier",
  "selector": "obojima-monster-part-harvest",
  "type": "item",
  "value": 2
}</code></pre>
<pre><code>{
  "key": "FlatModifier",
  "selector": "obojima-harvest-level",
  "type": "item",
  "value": 1
}</code></pre>

<h2>Legacy Module Flags</h2>
<p>The module still supports older custom flags stored under <code>flags.obojima-brewing-pf2e</code>, <code>flags.obojimaBrewing</code>, or <code>flags.obojima-brewing</code>.</p>
<table>
<thead><tr><th>Flag</th><th>Effect</th></tr></thead>
<tbody>
<tr><td><code>harvestBonus</code></td><td>Bonus to all harvesting checks.</td></tr>
<tr><td><code>ingredientHarvestBonus</code></td><td>Bonus to ingredient harvesting.</td></tr>
<tr><td><code>monsterPartHarvestBonus</code></td><td>Bonus to monster-part harvesting.</td></tr>
<tr><td><code>extraIngredients</code></td><td>Additional ingredients on successful harvest.</td></tr>
<tr><td><code>extraMonsterParts</code></td><td>Additional monster parts on successful harvest.</td></tr>
<tr><td><code>harvestLevelBonus</code></td><td>Raises harvested item level.</td></tr>
<tr><td><code>brewingBonus</code></td><td>Bonus to all brewing checks.</td></tr>
<tr><td><code>combatBrewingBonus</code></td><td>Bonus to Combat brewing.</td></tr>
<tr><td><code>utilityBrewingBonus</code></td><td>Bonus to Utility brewing.</td></tr>
<tr><td><code>whimsyBrewingBonus</code></td><td>Bonus to Whimsy brewing.</td></tr>
<tr><td><code>extraBrewedItems</code></td><td>Additional brewed items on success.</td></tr>
<tr><td><code>alchemicalLab</code></td><td>Marks a custom item as suitable brewing equipment.</td></tr>
</tbody>
</table>`;
}


function obojimaPrimerJournalContent() {
  return `<h1>Obojima Brewing for Pathfinder 2e</h1>
<p><em>A Guide to Magical Ingredients, Brewing, and Harvesting</em></p>
<p><a href="modules/obojima-brewing-pf2e/docs/Obojima-Brewing-for-Pathfinder-2e.pdf">Open the uploaded PDF primer</a></p>
<h2>Introduction</h2>
<p>The Obojima Brewing system is an alternate crafting system for Pathfinder 2e that allows characters to gather magical ingredients from the world, harvest exotic materials from slain creatures, and combine them into mysterious alchemical brews.</p>
<p>Unlike normal Pathfinder crafting, brewers rarely know exactly what they are creating. Instead, the magical properties of the ingredients determine the category and strength of the final product. Even experienced alchemists frequently discover surprising new concoctions.</p>
<h2>Ingredients</h2>
<p>Brewing requires three magical ingredients. Ingredients may be natural finds or monster-derived materials harvested from defeated creatures. Each ingredient has an item level, value, description, icon, and three hidden brewing values: <strong>Combat</strong>, <strong>Utility</strong>, and <strong>Whimsy</strong>.</p>
<h2>Harvesting Ingredients and Monster Parts</h2>
<p>After combat ends, the GM may choose whether each defeated creature yields a brewing ingredient, a monster part, both, or neither. Generated ingredients are named after the creature and automatically saved for future use. Monster parts are valuable crafting materials for Pathfinder's normal Craft activity and have item level, bulk, gold piece value, description, and icon.</p>
<p>When a player attempts to remove either an ingredient or monster part from a defeated creature, they choose <strong>Crafting</strong> or <strong>Survival</strong>. Success transfers the item to the character; failure destroys or spoils the material.</p>
<h2>Brewing</h2>
<p>Brewing requires three ingredients, a Crafting check, and access to suitable alchemical equipment such as an Alchemist's Lab, Alchemist's Lab (Expanded), Alchemist's Toolkit, Brewing Kit, Black Cauldron, or other Obojima-compatible custom equipment.</p>
<p>The module checks whether the brewer has Alchemical Crafting as a skill feat or class feature. Characters lacking formal training may still attempt brewing, but the final result is reduced by one degree of success.</p>
<h2>Brewing Categories and Products</h2>
<p>The three hidden ingredient values are totaled. The highest total determines whether the result is Combat, Utility, or Whimsy. Combat results produce bombs, poisons, oils, and similar aggressive consumables. Utility results produce potions, elixirs, foods, oils, and practical consumables. Whimsy results produce custom magical brews inspired by Obojima.</p>
<p>The module maps the winning total to a product level, then deterministically selects a product of the winning category and level.</p>
<h2>Brewing Results</h2>
<ul>
<li><strong>Critical Success:</strong> two copies of the baseline product and a formula.</li>
<li><strong>Success:</strong> one copy of the baseline product and a formula.</li>
<li><strong>Failure:</strong> an unidentified potion is produced; the formula is not learned.</li>
<li><strong>Critical Failure:</strong> an unidentified false potion is produced. It has no beneficial effect and triggers a hidden unstable consequence when consumed.</li>
</ul>
<h2>Formulae</h2>
<p>Successful brews create formula items that record the product and the three ingredients used. These formulae have negligible bulk and let brewers track discovered recipes.</p>
<h2>Equipment Bonuses</h2>
<p>Specialized equipment may improve harvesting and brewing through PF2e Rule Elements. See the <strong>Obojima Item Bonuses</strong> journal entry for the selectors and examples used by the module.</p>
<h2>Design Philosophy</h2>
<p>The system rewards exploration, hunting unusual creatures, discovering rare ingredients, recording successful recipes, and occasionally surviving spectacular brewing disasters.</p>`;
}

async function createProductJournals() {
  if (!game.user.isGM) return;
  const tables = await scanPF2eConsumables();
  const journalData = [
    ["Obojima Combat Products", levelGroupedProductRows(tables.combat, "combat")],
    ["Obojima Utility Products", levelGroupedProductRows(tables.utility, "utility")],
    ["Obojima Whimsy Products", levelGroupedProductRows([], "whimsy")]
  ];
  let folder = game.folders.find(f => f.type === "JournalEntry" && f.name === "Obojima Brewing References");
  if (!folder) folder = await Folder.create({ name: "Obojima Brewing References", type: "JournalEntry", sorting: "a" });

  for (const [name, rows] of journalData) {
    const content = productJournalContent(name, rows);
    let existing = game.journal.find(j => j.flags?.[MODULE_ID]?.productReference && j.name === name);
    if (!existing) existing = game.journal.find(j => j.name === name);
    const pageData = { name: "Products", type: "text", text: { format: 1, content } };
    if (!existing) {
      await JournalEntry.create({ name, folder: folder.id, flags: { [MODULE_ID]: { productReference: true } }, pages: [pageData] });
    } else {
      await existing.update({ folder: folder.id, flags: { [MODULE_ID]: { ...(existing.flags?.[MODULE_ID] ?? {}), productReference: true } } });
      const pages = Array.from(existing.pages ?? []);
      if (pages.length) {
        await existing.updateEmbeddedDocuments("JournalEntryPage", [{ _id: pages[0].id, name: "Products", type: "text", text: { format: 1, content } }]);
        const extras = pages.slice(1).map(p => p.id);
        if (extras.length) await existing.deleteEmbeddedDocuments("JournalEntryPage", extras);
      } else {
        await existing.createEmbeddedDocuments("JournalEntryPage", [pageData]);
      }
    }
  }

  const bonusName = "Obojima Item Bonus Flags";
  const bonusContent = bonusFlagJournalContent();
  let bonusEntry = game.journal.find(j => j.flags?.[MODULE_ID]?.bonusReference && j.name === bonusName) ?? game.journal.find(j => j.name === bonusName);
  const bonusPageData = { name: "Item Bonus Flags", type: "text", text: { format: 1, content: bonusContent } };
  if (!bonusEntry) {
    await JournalEntry.create({ name: bonusName, folder: folder.id, flags: { [MODULE_ID]: { bonusReference: true } }, pages: [bonusPageData] });
  } else {
    await bonusEntry.update({ folder: folder.id, flags: { [MODULE_ID]: { ...(bonusEntry.flags?.[MODULE_ID] ?? {}), bonusReference: true } } });
    const pages = Array.from(bonusEntry.pages ?? []);
    if (pages.length) {
      await bonusEntry.updateEmbeddedDocuments("JournalEntryPage", [{ _id: pages[0].id, name: "Item Bonus Flags", type: "text", text: { format: 1, content: bonusContent } }]);
      const extras = pages.slice(1).map(p => p.id);
      if (extras.length) await bonusEntry.deleteEmbeddedDocuments("JournalEntryPage", extras);
    } else {
      await bonusEntry.createEmbeddedDocuments("JournalEntryPage", [bonusPageData]);
    }
  }

  const primerName = "Obojima Brewing Primer";
  const primerContent = obojimaPrimerJournalContent();
  let primerEntry = game.journal.find(j => j.flags?.[MODULE_ID]?.primerReference && j.name === primerName) ?? game.journal.find(j => j.name === primerName);
  const primerPageData = { name: "Primer", type: "text", text: { format: 1, content: primerContent } };
  if (!primerEntry) {
    await JournalEntry.create({ name: primerName, folder: folder.id, flags: { [MODULE_ID]: { primerReference: true } }, pages: [primerPageData] });
  } else {
    await primerEntry.update({ folder: folder.id, flags: { [MODULE_ID]: { ...(primerEntry.flags?.[MODULE_ID] ?? {}), primerReference: true } } });
    const pages = Array.from(primerEntry.pages ?? []);
    if (pages.length) {
      await primerEntry.updateEmbeddedDocuments("JournalEntryPage", [{ _id: pages[0].id, name: "Primer", type: "text", text: { format: 1, content: primerContent } }]);
      const extras = pages.slice(1).map(p => p.id);
      if (extras.length) await primerEntry.deleteEmbeddedDocuments("JournalEntryPage", extras);
    } else {
      await primerEntry.createEmbeddedDocuments("JournalEntryPage", [primerPageData]);
    }
  }
}



// ---------------------------
// Creature harvesting support
// ---------------------------


const MONSTER_PART_VALUE_TABLES = {
  light: [1.5, 2.25, 3.5, 5, 7, 12, 18, 30, 45, 64, 90, 125, 175, 250, 375, 560, 810, 1250, 1875, 3000, 5000, 8750, 10000, 17500, 20000, 35000, 40000],
  hybrid: [3.5, 5, 7, 12, 18, 27, 45, 65, 100, 140, 200, 275, 390, 560, 840, 1250, 1850, 2800, 4300, 7000, 12000, 17500, 24000, 35000, 48000, 70000, 96000],
  full: [6.5, 9, 13, 22, 30, 50, 80, 125, 180, 250, 360, 500, 720, 1030, 1560, 2300, 3400, 5150, 8000, 13000, 22500, 30000, 45000, 60000, 90000, 120000, 180000]
};

function registerObojimaSettings() {
  game.settings.register(MODULE_ID, "generateBrewingIngredients", {
    name: "Generate Brewing Ingredients",
    hint: "When combat ends, offer to add Obojima brewing ingredients to defeated creatures.",
    scope: "world",
    config: true,
    type: Boolean,
    default: true
  });
  game.settings.register(MODULE_ID, "generateMonsterParts", {
    name: "Generate Monster Parts",
    hint: "When combat ends, offer to add crafting monster parts to defeated creatures.",
    scope: "world",
    config: true,
    type: Boolean,
    default: true
  });
  game.settings.register(MODULE_ID, "monsterPartsValueMode", {
    name: "Monster Parts Value Mode",
    hint: "Controls the gold-piece value of generated monster parts, using the Battlezoo-style light, hybrid, or full value progression.",
    scope: "world",
    config: true,
    type: String,
    choices: { light: "Light", hybrid: "Hybrid", full: "Full" },
    default: "hybrid"
  });
}

function getSettingSafe(key, fallback) {
  try { return game.settings.get(MODULE_ID, key); }
  catch (_) { return fallback; }
}

function rawActorLevel(actor) {
  const raw = actor?.system?.details?.level?.value ?? actor?.system?.details?.level ?? actor?.level ?? 1;
  const n = Number(raw);
  return Number.isFinite(n) ? Math.max(-1, Math.min(25, n)) : 1;
}

function coinsFromGpValue(gpValue) {
  let cp = Math.max(0, Math.round((Number(gpValue) || 0) * 100));
  const gp = Math.floor(cp / 100); cp -= gp * 100;
  const sp = Math.floor(cp / 10); cp -= sp * 10;
  const value = {};
  if (gp) value.gp = gp;
  if (sp) value.sp = sp;
  if (cp) value.cp = cp;
  if (!Object.keys(value).length) value.cp = 0;
  return value;
}

function monsterPartValueForActor(actor) {
  return monsterPartValueForLevel(rawActorLevel(actor));
}

function actorSize(actor) {
  return String(actor?.system?.traits?.size?.value ?? actor?.system?.traits?.size ?? "med").toLowerCase();
}

function monsterPartBulkForActor(actor, partName="") {
  const size = actorSize(actor);
  const base = ({ tiny: 0, sm: 0.1, small: 0.1, med: 1, medium: 1, lg: 2, large: 2, huge: 4, grg: 8, gargantuan: 8 })[size] ?? 1;
  if (base <= 0) return 0;
  if (base < 1) return (stableHash(`${actor?.name}|${partName}|bulk`) % 4 === 0) ? 1 : 0.1;
  const factorSteps = [0.5, 0.75, 1, 1.25, 1.5];
  const factor = factorSteps[stableHash(`${actor?.name}|${partName}|bulk`) % factorSteps.length];
  return Math.max(1, Math.round(base * factor));
}

function monsterPartSuffixesForActor(actor) {
  const profile = harvestProfileForActor(actor);
  const byProfile = {
    dragon: ["Scale Cluster", "Fang", "Heartstring", "Breath Gland", "Wing Membrane", "Claw"],
    reptile: ["Scale Cluster", "Fang", "Hide Strip", "Venom Gland", "Sinew"],
    beast: ["Hide", "Claw", "Femur", "Heart", "Sinew", "Pelt"],
    animal: ["Hide", "Claw", "Femur", "Heart", "Sinew", "Pelt"],
    spider: ["Chitin Plate", "Venom Gland", "Silk Spinneret", "Mandible", "Compound Eye"],
    insect: ["Chitin Plate", "Mandible", "Wing Case", "Antenna Bundle", "Ichor Sac"],
    ooze: ["Gelatinous Core", "Reactive Slime", "Acidic Residue", "Membrane Sheet"],
    undead: ["Blackened Bone", "Ectoplasmic Scrap", "Grave Marrow", "Withered Heart"],
    fiend: ["Horn Fragment", "Ichor Vessel", "Ember-Heart", "Claw", "Brimstone Sinew"],
    elemental: ["Elemental Core", "Resonant Shard", "Crystalline Heart", "Charged Dust"],
    plant: ["Heartwood", "Thorn Cluster", "Sap Vessel", "Root Mass", "Living Bark"],
    fungus: ["Mycelial Mat", "Spore Sac", "Fungal Cap", "Puffball Core"],
    aberration: ["Nerve Cluster", "Unblinking Eye", "Bile Sac", "Tongue", "Dream Gland"],
    humanoid: ["Bone", "Sinew", "Blood Vessel", "Hair Bundle"],
    default: ["Bone", "Heart", "Hide", "Claw", "Fang", "Eye", "Sinew", "Blood Vessel"]
  };
  return byProfile[profile] ?? byProfile.default;
}

function chooseMonsterPartSuffix(actor) {
  const list = monsterPartSuffixesForActor(actor);
  const key = `${actor?.name ?? "creature"}|${actor?.id ?? ""}|part|${Date.now()}|${Math.random()}`;
  return list[stableHash(key) % list.length];
}

function monsterPartFlavor({ partName, actor, suffix, level, gpValue, bulk }) {
  const creature = actor?.name ?? "the creature";
  const traits = actorTraits(actor);
  const traitText = traits.length ? ` Its ${traits.slice(0, 3).join(", ")} nature is still evident in the material.` : "";
  const useText = /scale|hide|chitin|membrane|bark|plate/i.test(suffix)
    ? "Crafters prize it for armor, shields, reinforcement, and other work where resilience matters."
    : /fang|claw|horn|mandible|bone|sinew/i.test(suffix)
      ? "It is best suited to weapons, hafts, bindings, talismans, and structural work that benefits from predatory strength."
      : /heart|core|gland|ichor|blood|bile|dust|residue|slime/i.test(suffix)
        ? "It holds unstable internal potency and is most useful when worked into magical, alchemical, or invested items."
        : "It is a useful raw monster part suitable for PF2e crafting projects that call for special materials or monster-derived components.";
  return `<p><strong>Monster Part:</strong> Crafting Material</p><p>${partName} was recovered from ${htmlEscape(creature)}. It has been cleaned and preserved well enough to be used as a valuable crafting material rather than a brewing reagent.${traitText}</p><p>${useText}</p><p><strong>Crafting Value:</strong> ${gpValue} gp. <strong>Bulk:</strong> ${htmlEscape(String(bulk))}. <strong>Source Level:</strong> ${level}.</p>`;
}

async function monsterPartIcon(name, suffix, actor) {
  const category = harvestIconCategoryForSuffix(suffix, actor);
  const pool = await getIngredientIconPool(category);
  return pool[stableHash(`${name}|${suffix}|monster-part|${actor?.name}`) % pool.length];
}

async function addMonsterPartToDirectory(itemData, level) {
  if (!game.user?.isGM) return null;
  const root = await getOrCreateItemFolder("Obojima Monster Parts", null, "m");
  const levelFolder = await getOrCreateItemFolder(`Level ${String(level).padStart(2,"0")} Parts`, root, "a");
  const data = foundry.utils.deepClone(itemData);
  data.folder = levelFolder.id;
  data.flags ??= {};
  data.flags[MODULE_ID] = { ...(data.flags[MODULE_ID] ?? {}), monsterPart: true, harvested: true, harvestedDirectory: true };
  delete data._id;
  const existing = game.items.find(i => i.flags?.[MODULE_ID]?.monsterPart && i.flags?.[MODULE_ID]?.harvestedDirectory && i.name === data.name);
  if (existing) {
    await existing.update({
      img: data.img,
      folder: levelFolder.id,
      "system.level.value": data.system?.level?.value ?? level,
      "system.price.value": data.system?.price?.value ?? {},
      "system.bulk.value": Number(data.system?.bulk?.value ?? 0),
      "system.description.value": data.system?.description?.value ?? "",
      "system.description.gm": data.system?.description?.gm ?? "",
      [`flags.${MODULE_ID}`]: data.flags[MODULE_ID]
    });
    return existing;
  }
  return Item.create(data);
}

async function createHarvestedMonsterPart(actor) {
  const level = actorLevel(actor);
  const suffix = chooseMonsterPartSuffix(actor);
  const baseName = actor?.name ?? "Creature";
  const partName = `${baseName} ${suffix}`;
  const gpValue = monsterPartValueForActor(actor);
  const bulk = monsterPartBulkForActor(actor, partName);
  const img = await monsterPartIcon(partName, suffix, actor);
  const description = monsterPartFlavor({ partName, actor, suffix, level, gpValue, bulk });
  const itemData = {
    name: partName,
    type: "treasure",
    img,
    system: {
      quantity: 1,
      level: { value: level },
      price: { value: coinsFromGpValue(gpValue) },
      bulk: { value: Number(bulk) || 0 },
      traits: { value: [], rarity: "common", otherTags: [] },
      description: { value: description, gm: `<p><strong>Obojima Monster Part</strong></p><p><strong>Source:</strong> ${htmlEscape(baseName)}; <strong>Level:</strong> ${level}; <strong>Value Mode:</strong> ${htmlEscape(String(getSettingSafe("monsterPartsValueMode", "hybrid")))}; <strong>Value:</strong> ${gpValue} gp; <strong>Bulk:</strong> ${htmlEscape(String(bulk))}</p>` }
    },
    flags: { [MODULE_ID]: { monsterPart: true, isMonsterPart: true, harvested: true, sourceActorName: baseName, sourceLevel: level, sourceTraits: actorTraits(actor), suffix, gpValue, bulk: Number(bulk) || 0, valueMode: getSettingSafe("monsterPartsValueMode", "hybrid") } }
  };
  const created = await actor.createEmbeddedDocuments("Item", [itemData]);
  await addMonsterPartToDirectory(itemData, level);
  await actor.setFlag(MODULE_ID, "harvestedMonsterPart", true);
  return created?.[0];
}

const HARVEST_SUFFIXES = {
  dragon: ["Scale", "Fang", "Blood", "Heart", "Claw", "Breath Gland"],
  reptile: ["Scale", "Skin", "Fang", "Claw", "Blood"],
  beast: ["Hide", "Claw", "Bone", "Tooth", "Heart", "Eye", "Blood"],
  animal: ["Hide", "Claw", "Bone", "Tooth", "Heart", "Eye", "Blood"],
  spider: ["Venom Sac", "Chitin", "Mandible", "Silk Gland", "Compound Eye"],
  insect: ["Chitin", "Mandible", "Wing", "Antenna", "Ichor"],
  ooze: ["Slime", "Residue", "Core", "Gel", "Membrane"],
  undead: ["Ectoplasm", "Grave Dust", "Blackened Bone", "Cold Marrow", "Withered Heart"],
  fiend: ["Ichor", "Horn", "Ember-Blood", "Claw", "Ashen Heart"],
  elemental: ["Core", "Elemental Dust", "Crystalline Shard", "Essence", "Resonant Heart"],
  plant: ["Sap", "Root", "Spore", "Thorn", "Seed", "Heartwood"],
  fungus: ["Spores", "Cap", "Mycelium", "Gill", "Puff"],
  aberration: ["Eye", "Nerve Cluster", "Bile", "Tongue", "Residue", "Dream-Gland"],
  humanoid: ["Blood", "Bone", "Hair", "Tooth", "Heart"],
  default: ["Blood", "Bone", "Heart", "Eye", "Skin", "Claw", "Tooth", "Scale", "Venom Sac", "Ichor", "Essence"]
};

function actorLevel(actor) {
  const raw = actor?.system?.details?.level?.value ?? actor?.system?.details?.level ?? actor?.level ?? 1;
  const n = Number(raw);
  return Number.isFinite(n) ? Math.max(1, Math.min(25, n)) : 1;
}

function actorTraits(actor) {
  const traits = actor?.system?.traits?.value ?? actor?.system?.details?.creatureType ?? [];
  const arr = Array.isArray(traits) ? traits : Object.values(traits ?? {});
  return arr.map(t => String(t).toLowerCase());
}

function combatantIsEnemy(combatant) {
  const disposition = combatant?.token?.disposition ?? combatant?.token?.object?.document?.disposition;
  return disposition === CONST.TOKEN_DISPOSITIONS?.HOSTILE || disposition === -1 || combatant?.actor?.type === "npc";
}

function combatantIsDead(combatant) {
  if (combatant?.defeated) return true;
  const hp = Number(combatant?.actor?.system?.attributes?.hp?.value);
  return Number.isFinite(hp) && hp <= 0;
}

function harvestProfileForActor(actor) {
  const traits = actorTraits(actor);
  const name = String(actor?.name ?? "Creature").toLowerCase();
  const has = (...terms) => terms.some(t => traits.includes(t) || name.includes(t));
  if (has("dragon")) return "dragon";
  if (has("reptile", "lizard", "snake", "serpent", "wyvern")) return "reptile";
  if (has("spider", "arachnid")) return "spider";
  if (has("insect", "beetle", "wasp", "ant")) return "insect";
  if (has("ooze")) return "ooze";
  if (has("undead", "ghost", "zombie", "skeleton", "wraith")) return "undead";
  if (has("fiend", "demon", "devil", "daemon")) return "fiend";
  if (has("elemental")) return "elemental";
  if (has("plant", "leshy")) return "plant";
  if (has("fungus", "fungal", "mushroom")) return "fungus";
  if (has("aberration")) return "aberration";
  if (has("beast", "animal")) return "beast";
  if (has("humanoid")) return "humanoid";
  return "default";
}

function chooseHarvestSuffix(actor) {
  const profile = harvestProfileForActor(actor);
  const list = HARVEST_SUFFIXES[profile] ?? HARVEST_SUFFIXES.default;
  const key = `${actor?.name ?? "creature"}|${actor?.id ?? ""}|${Date.now()}|${Math.random()}`;
  return list[stableHash(key) % list.length];
}

function harvestIconCategoryForSuffix(suffix, actor) {
  const s = String(suffix ?? "").toLowerCase();
  const profile = harvestProfileForActor(actor);
  if (/scale|skin|hide|membrane/.test(s)) return "animal";
  if (/fang|tooth|claw|horn|talon|mandible/.test(s)) return "claw";
  if (/bone|marrow/.test(s)) return "bone";
  if (/blood|ichor|venom|bile|slime|residue|sap|essence|gel/.test(s)) return "liquid";
  if (/eye|heart|gland|nerve|core|pustule|tongue/.test(s)) return "animal";
  if (/spore|cap|mycelium|gill|root|thorn|seed|heartwood/.test(s)) return profile === "fungus" ? "mushroom" : "plant";
  if (/dust|shard|crystal/.test(s)) return "mineral";
  return profile === "elemental" ? "mineral" : "animal";
}

function harvestValuesForActor(actor, suffix) {
  const level = actorLevel(actor);
  const maxBase = Math.max(1, level * 5);
  const s = String(suffix ?? "").toLowerCase();
  const traits = actorTraits(actor);
  let focus = "combat";
  if (/heart|eye|core|essence|gland|sap|root|seed|heartwood/.test(s)) focus = "utility";
  if (/spore|ectoplasm|residue|dream|eye|dust|feather/.test(s) || traits.includes("fey")) focus = "whimsy";
  if (/fang|claw|tooth|venom|bile|ichor|horn|mandible/.test(s)) focus = "combat";
  const seed = stableHash(`${actor?.name}|${actor?.id}|${suffix}|${Date.now()}|${Math.random()}`);
  const rand = (offset, min, max) => min + ((seed >> offset) % (max - min + 1));
  const high = Math.max(1, maxBase + rand(0, -2, 2));
  const mid = Math.max(0, Math.round(maxBase * (0.45 + rand(4, 0, 20) / 100)));
  const low = Math.max(0, Math.round(maxBase * (0.12 + rand(9, 0, 18) / 100)));
  const values = { combat: low, utility: low, whimsy: low };
  values[focus] = high;
  const secondary = focus === "combat" ? (traits.includes("magical") || traits.includes("fey") ? "whimsy" : "utility") : focus === "utility" ? "combat" : "utility";
  values[secondary] = mid;
  return values;
}

async function generatedHarvestIcon(name, suffix, actor) {
  const category = harvestIconCategoryForSuffix(suffix, actor);
  const pool = await getIngredientIconPool(category);
  return pool[stableHash(`${name}|${suffix}|${actor?.name}`) % pool.length];
}

function harvestFlavor({ ingredientName, actor, suffix, values, level }) {
  const creature = actor?.name ?? "the creature";
  const profile = harvestProfileForActor(actor);
  const focus = values.combat >= values.utility && values.combat >= values.whimsy ? "combat" : values.utility >= values.whimsy ? "utility" : "whimsy";
  const focusText = {
    combat: "It carries the forceful alchemical signature of a dangerous creature, lending itself to bombs, poisons, oils, and other aggressive brews.",
    utility: "Its structure is unusually stable, making it valuable for restorative, protective, and practical concoctions.",
    whimsy: "Its magic behaves oddly under pressure, tugging otherwise sensible recipes toward improbable and whimsical effects."
  }[focus];
  return `<p><strong>Ingredient Type:</strong> Harvested Creature Part</p><p>${ingredientName} was harvested from ${creature}. The ${suffix.toLowerCase()} retains a trace of the creature's ${profile === "default" ? "living" : profile} nature, and careful brewers can coax that resonance into a usable reagent.</p><p>${focusText}</p><p><em>This is a level ${level} dynamically generated ingredient.</em></p>`;
}


async function addHarvestedIngredientToDirectory(itemData, level) {
  if (!game.user?.isGM) return null;
  const root = await getOrCreateItemFolder("Obojima Ingredients", null, "m");
  const levelFolder = await getOrCreateItemFolder(`Level ${String(level).padStart(2,"0")} Ingredients`, root, "a");
  const data = foundry.utils.deepClone(itemData);
  data.folder = levelFolder.id;
  data.flags ??= {};
  data.flags[MODULE_ID] = { ...(data.flags[MODULE_ID] ?? {}), ingredient: true, harvested: true, harvestedDirectory: true };
  delete data._id;
  const existing = game.items.find(i => i.flags?.[MODULE_ID]?.harvestedDirectory && i.name === data.name);
  if (existing) {
    await existing.update({
      img: data.img,
      folder: levelFolder.id,
      "system.level.value": data.system?.level?.value ?? level,
      "system.price.value": data.system?.price?.value ?? {},
      "system.description.value": data.system?.description?.value ?? "",
      "system.description.gm": data.system?.description?.gm ?? "",
      [`flags.${MODULE_ID}`]: data.flags[MODULE_ID]
    });
    return existing;
  }
  return Item.create(data);
}

async function createHarvestedIngredient(actor) {
  const level = actorLevel(actor);
  const suffix = chooseHarvestSuffix(actor);
  const baseName = actor?.name ?? "Creature";
  const ingredientName = `${baseName} ${suffix}`;
  const values = harvestValuesForActor(actor, suffix);
  const img = await generatedHarvestIcon(ingredientName, suffix, actor);
  const price = ingredientPrice(level, ingredientName);
  const type = "Harvested Creature Part";
  const description = harvestFlavor({ ingredientName, actor, suffix, values, level });
  const gmDescription = `<p><strong>Ingredient Type:</strong> ${type}</p><p><strong>GM Ingredient Values</strong>: Combat ${values.combat}, Utility ${values.utility}, Whimsy ${values.whimsy}</p><p><strong>Obojima Ingredient Level:</strong> ${level}</p><p><strong>Harvested From:</strong> ${htmlEscape(baseName)}</p>`;
  const itemData = {
    name: ingredientName,
    type: "consumable",
    img,
    system: {
      quantity: 1,
      level: { value: level },
      price: { value: price },
      traits: { value: ["ingredient"], rarity: "common", otherTags: [] },
      description: { value: description, gm: gmDescription }
    },
    flags: { [MODULE_ID]: { ingredient: true, harvested: true, sourceActorName: baseName, suffix, combat: values.combat, utility: values.utility, whimsy: values.whimsy, ingredientLevel: level, ingredientType: type, coreIconCategory: harvestIconCategoryForSuffix(suffix, actor) } }
  };
  const created = await actor.createEmbeddedDocuments("Item", [itemData]);
  await addHarvestedIngredientToDirectory(itemData, level);
  await actor.setFlag(MODULE_ID, "harvestedIngredient", true);
  return created?.[0];
}

async function showHarvestDialogForCombat(combat) {
  if (!game.user.isGM || !combat) return;
  const generateIngredients = !!getSettingSafe("generateBrewingIngredients", true);
  const generateParts = !!getSettingSafe("generateMonsterParts", true);
  if (!generateIngredients && !generateParts) return;

  const candidates = (combat.combatants ?? []).filter(c => {
    if (!c.actor || !combatantIsEnemy(c) || !combatantIsDead(c)) return false;
    const needsIngredient = generateIngredients && !c.actor.getFlag(MODULE_ID, "harvestedIngredient");
    const needsPart = generateParts && !c.actor.getFlag(MODULE_ID, "harvestedMonsterPart");
    return needsIngredient || needsPart;
  });
  if (!candidates.length) return;

  const rows = candidates.map(c => {
    const level = actorLevel(c.actor);
    const ingredientDone = !!c.actor.getFlag(MODULE_ID, "harvestedIngredient");
    const partDone = !!c.actor.getFlag(MODULE_ID, "harvestedMonsterPart");
    const ingredientCell = generateIngredients
      ? `<label><input type="checkbox" name="harvestIngredient" value="${htmlEscape(c.id)}" ${ingredientDone ? "disabled" : "checked"}> Ingredient</label>`
      : `<span>Disabled</span>`;
    const partCell = generateParts
      ? `<label><input type="checkbox" name="harvestPart" value="${htmlEscape(c.id)}" ${partDone ? "disabled" : "checked"}> Monster Part</label>`
      : `<span>Disabled</span>`;
    return `<div class="obojima-harvest-row"><strong>${htmlEscape(c.actor.name)}</strong> <span>Level ${level}</span> <span>${ingredientCell}</span> <span>${partCell}</span></div>`;
  }).join("");

  const mode = getSettingSafe("monsterPartsValueMode", "hybrid");
  const content = `<form class="obojima-harvest-form"><p>Select what should be added to each defeated enemy. Items are added directly to the NPC actor inventory, so Item Piles should expose them as loot if it uses that inventory.</p><p><strong>Monster Parts Value Mode:</strong> ${htmlEscape(String(mode))}</p>${rows}</form>`;
  const selected = await new Promise(resolve => {
    new Dialog({
      title: "Harvest Obojima Materials",
      content,
      buttons: {
        harvest: {
          label: "Create Selected",
          icon: '<i class="fas fa-seedling"></i>',
          callback: html => resolve({
            ingredients: Array.from(html[0].querySelectorAll('input[name="harvestIngredient"]:checked')).map(i => i.value),
            parts: Array.from(html[0].querySelectorAll('input[name="harvestPart"]:checked')).map(i => i.value)
          })
        },
        none: { label: "Skip", callback: () => resolve({ ingredients: [], parts: [] }) }
      },
      default: "harvest",
      close: () => resolve({ ingredients: [], parts: [] })
    }).render(true);
  });
  if (!selected || (!selected.ingredients?.length && !selected.parts?.length)) return;

  const created = [];
  for (const id of selected.ingredients ?? []) {
    const c = candidates.find(x => x.id === id);
    if (!c?.actor) continue;
    try {
      const item = await createHarvestedIngredient(c.actor);
      if (item) created.push({ actor: c.actor.name, item: item.name, kind: "Brewing Ingredient" });
    } catch (err) {
      console.error(MODULE_ID, `Could not create harvested ingredient for ${c.actor.name}`, err);
      ui.notifications.error(`Could not create harvested ingredient for ${c.actor.name}. See console.`);
    }
  }
  for (const id of selected.parts ?? []) {
    const c = candidates.find(x => x.id === id);
    if (!c?.actor) continue;
    try {
      const item = await createHarvestedMonsterPart(c.actor);
      if (item) created.push({ actor: c.actor.name, item: item.name, kind: "Monster Part" });
    } catch (err) {
      console.error(MODULE_ID, `Could not create monster part for ${c.actor.name}`, err);
      ui.notifications.error(`Could not create monster part for ${c.actor.name}. See console.`);
    }
  }
  if (created.length) {
    await ChatMessage.create({
      whisper: ChatMessage.getWhisperRecipients("GM"),
      speaker: ChatMessage.getSpeaker(),
      content: `<h3>Harvested Obojima Materials</h3><ul>${created.map(r => `<li><strong>${htmlEscape(r.actor)}:</strong> ${htmlEscape(r.item)} <em>(${htmlEscape(r.kind)})</em></li>`).join("")}</ul>`
    });
  }
}

class ObojimaBrewingApp extends Application {
  constructor(options={}) {
    super(options);
    this.slots = [null,null,null];
    this.resultTables = { combat: [], utility: [] };
    this.scanPromise = this.refreshTables();
  }
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "obojima-brewing-app", title: "Brewing Cauldron", template: `modules/${MODULE_ID}/templates/brewing-app.hbs`, width: 650, height: "auto", resizable: true
    });
  }
  async refreshTables() { this.resultTables = await scanPF2eConsumables(); this.render(false); }
  getTotals() { return this.slots.reduce((t,s) => { if (s) { t.combat+=s.combat; t.utility+=s.utility; t.whimsy+=s.whimsy; } return t; }, {combat:0, utility:0, whimsy:0}); }
  getWinner() { return determineWinner(this.getTotals()); }
  getData() {
    const actor = getSelectedActor();
    const totals = this.getTotals();
    const winner = this.slots.every(Boolean) ? this.getWinner() : "—";
    const total = winner === "—" ? 0 : totals[winner];
    const selection = winner === "—" ? null : selectProductForBrew({ winner, total, ingredients: this.slots.filter(Boolean).map(s=>s.name), resultTables: this.resultTables });
    const item = selection?.item;
    const range = selection ? ingredientTotalRangeForLevel(selection.productLevel) : null;
    return { actorName: actor?.name ?? "No selected token or assigned character", slots: this.slots, totals, winner: winner === "—" ? "—" : winner[0].toUpperCase()+winner.slice(1), resultIndex: total || "—", productLevel: selection?.productLevel ?? "—", productRange: range ? `${range.min}-${range.max}` : "—", productPoolSize: selection?.pool?.length ?? 0, preview: item?.name ?? "Drop three ingredients to preview a result.", isGM: game.user.isGM };
  }
  activateListeners(html) {
    super.activateListeners(html);
    html.find(".obojima-slot").on("drop", this._onDrop.bind(this));
    html.find(".clear-slot").on("click", ev => { this.slots[Number(ev.currentTarget.dataset.slot)] = null; this.render(); });
    html.find(".reset-brew").on("click", () => { this.slots = [null,null,null]; this.render(); });
    html.find(".roll-brew").on("click", () => this.brew());
  }
  async _onDrop(event) {
    event.preventDefault();
    const slot = Number(event.currentTarget.dataset.slot);
    let data;
    try { data = JSON.parse(event.originalEvent?.dataTransfer?.getData("text/plain") || event.dataTransfer?.getData("text/plain")); } catch { return ui.notifications.warn("Drop an ingredient item here."); }
    const uuid = data.uuid || data.itemUuid;
    const item = uuid ? await fromUuid(uuid) : null;
    const ing = ingredientData(item);
    if (!ing) return ui.notifications.warn("That item is not an Obojima ingredient.");
    this.slots[slot] = ing;
    this.render();
  }
  async brew() {
    await this.scanPromise;
    const actor = getSelectedActor();
    if (!actor) return ui.notifications.warn("Select a PC token or assign yourself a character before brewing.");
    if (!this.slots.every(Boolean)) return ui.notifications.warn("You need three ingredients.");
    const totals = this.getTotals();
    const winner = this.getWinner();
    const totalValue = totals[winner];
    const baseSelection = selectProductForBrew({ winner, total: totalValue, ingredients: this.slots.map(s=>s.name), resultTables: this.resultTables });
    if (!baseSelection?.item) return ui.notifications.error(`No ${winner} result table found. Is the PF2e system active and loaded?`);
    const base = baseSelection.item;
    const level = baseSelection.productLevel;
     const lacksAlchemicalCrafting = !actorHasAlchemicalCrafting(actor);
    if (lacksAlchemicalCrafting) {
      ui.notifications.warn(`${actor.name} does not have Alchemical Crafting. Brewing will proceed, but the result will be reduced by one degree of success.`);
    }
    const hasInventoryLab = actorHasAlchemistLab(actor);
    let hasLabAccess = hasInventoryLab;
    if (!hasInventoryLab) {
      hasLabAccess = await confirmExternalAlchemistLab(actor);
      if (!hasLabAccess) return ui.notifications.warn("Brewing requires access to an alchemist's lab.");
    }
    const labBonus = hasInventoryLab || hasLabAccess ? 1 : 0;
    const brewingBonuses = getObojimaBrewingBonuses(actor, winner);
    const dc = brewingDCByLevel(level);
    const baseCraftingMod = getCraftingModifier(actor);
    const craftingMod = baseCraftingMod + labBonus + brewingBonuses.checkBonus;
    const roll = await new Roll("1d20 + @crafting", { crafting: craftingMod }).evaluate();
    const pwl = isProficiencyWithoutLevelEnabled();
    const baseDC = pf2eDCByLevel(level);
    await roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor }),
      flavor: `<strong>Obojima Brewing Crafting Check</strong><br>` +
        `Item Level: ${level}; Base DC: ${baseDC}; Final DC: ${dc}${pwl ? " (Proficiency Without Level)" : ""}<br>` +
        `Crafting Modifier Used: ${craftingMod >= 0 ? "+" : ""}${craftingMod}` +
        `${labBonus ? ` (includes +1 Alchemist's Lab bonus${hasInventoryLab ? "" : " from external lab access"})` : ""}` +
        `${brewingBonuses.checkBonus ? ` (includes ${brewingBonuses.checkBonus >= 0 ? "+" : ""}${brewingBonuses.checkBonus} Obojima brewing item bonus)` : ""}` +
        `${lacksAlchemicalCrafting ? `<br><strong>Alchemical Crafting missing:</strong> final result will be reduced by one degree of success.` : ""}`
    });
    const total = roll.total;
    let degree = 1;
    if (total >= dc + 10) degree = 3;
    else if (total >= dc) degree = 2;
    else if (total <= dc - 10) degree = 0;
    const die = roll.dice?.[0]?.total;
    if (die === 20) degree = Math.min(3, degree + 1);
    if (die === 1) degree = Math.max(0, degree - 1);
    const degreeBeforeAlchemicalCraftingPenalty = degree;
    if (lacksAlchemicalCrafting) degree = Math.max(0, degree - 1);
    const finalSelection = baseSelection;
    const final = finalSelection.item;
    const finalLevel = finalSelection.productLevel;
    const extraBrewedItems = degree >= 2 ? brewingBonuses.extraBrewedItems : 0;
    const productQuantity = (degree === 3 ? 2 : 1) + extraBrewedItems;
    const criticalFailureEffect = degree === 0 ? randomCriticalFailurePotionEffect() : null;
    const sideEffect = degree === 1 ? SIDE_EFFECTS[Math.floor(Math.random()*SIDE_EFFECTS.length)] : null;
    let itemData;
    if (criticalFailureEffect) {
      // Critical failures create a false potion. It is not the baseline product with an added drawback.
      // Players only see an unidentified consumable; the stored GM data contains the delayed consequence.
      itemData = criticalFailurePotionItemData(criticalFailureEffect, finalLevel, 1);
    }
    else if (winner === "whimsy") { 
      await getObojimaPotionIcons(); 
      itemData = whimsyItemData(final, degree < 2, sideEffect); 
      itemData.system.quantity = productQuantity;
    }
    else {
      itemData = final.toObject();
      const trueDescription = itemData.system?.description?.value ?? "";
      itemData.name = final.name;
      itemData.system = foundry.utils.deepClone(itemData.system ?? {});
      itemData.system.quantity = productQuantity;
      itemData.system.description ??= { value: "", gm: "" };
      itemData.system.description.value = trueBrewDescription(trueDescription, sideEffect);
      itemData.system.description.gm = sideEffect ? `<p><strong>Brewing Side Effect:</strong> ${sideEffect}</p>` : (itemData.system.description.gm ?? "");
      if (degree < 2) applyPF2eMystification(itemData, {
        unidentifiedName: "Unidentified Consumable",
        unidentifiedDescription: unidentifiedBrewDescription(sideEffect),
        unidentifiedImg: "icons/consumables/potions/potion-bottle-corked-blue.webp"
      });
      itemData.flags ??= {};
      itemData.flags[MODULE_ID] = { ...(itemData.flags[MODULE_ID] ?? {}), brewed: true, trueName: final.name, trueDescription, sideEffect, criticalFailureEffect: null, criticalFailureBrew: false, winner, ingredientTotal: totals[winner], mystified: degree < 2, usesPF2eIdentification: degree < 2 };
      delete itemData._id;
    }
    const created = await actor.createEmbeddedDocuments("Item", [itemData]);
    // consume ingredients from actor inventory when possible
    for (const s of this.slots) {
      const owned = actor.items.get(s.id);
      if (owned) {
        const qty = Number(owned.system?.quantity ?? 1);
        if (qty > 1) await owned.update({ "system.quantity": qty - 1 });
        else await owned.delete();
      }
    }
    let formulaCreated = null;
    let formulaAlreadyKnown = false;
    let formulaCreationFailed = false;
    if (degree >= 2) {
      const recipeKey = this.slots.map(s => s.name).sort().join(" + ");
      const recipes = foundry.utils.deepClone(actor.getFlag(MODULE_ID, "recipes") ?? {});
      recipes[recipeKey] = { result: winner === "whimsy" ? final.name : final.name, winner, value: totals[winner], productLevel: finalLevel, ingredients: this.slots.map(s=>s.name), learnedAt: new Date().toISOString() };
      await actor.setFlag(MODULE_ID, "recipes", recipes);
      const sortedIngredients = JSON.stringify(this.slots.map(s=>s.name).sort());
      const existingFormula = actor.items.find(i =>
        i.flags?.[MODULE_ID]?.formula &&
        i.flags[MODULE_ID].resultName === final.name &&
        JSON.stringify([...(i.flags[MODULE_ID].ingredients ?? [])].sort()) === sortedIngredients
      );
      if (existingFormula) {
        formulaAlreadyKnown = true;
      } else {
        try {
          formulaCreated = await createFormulaItem(actor, { resultName: final.name, ingredients: this.slots.map(s=>s.name), winner, value: totals[winner], level: finalLevel });
          formulaCreationFailed = !formulaCreated?.length;
        } catch (err) {
          formulaCreationFailed = true;
          console.error(`${MODULE_ID} | Formula creation failed.`, err);
          ui.notifications.error(`Obojima Brewing could not create the formula item. Check the console for details.`);
        }
      }
    }
    const formulaLine = degree >= 2
      ? (formulaAlreadyKnown
          ? `<p><strong>Formula already known:</strong> ${itemNameForFormula(final.name)}</p>`
          : (formulaCreationFailed
              ? `<p><strong>Formula creation failed:</strong> ${itemNameForFormula(final.name)}. Check the console.</p>`
              : `<p><strong>Formula created:</strong> ${formulaCreated?.[0]?.name ?? itemNameForFormula(final.name)}</p>`)) +
        `<p><strong>Recipe learned:</strong> ${this.slots.map(s=>s.name).join(" + ")}</p>`
      : `<p>The result is unidentified and the recipe is not learned.</p><p><em>Any hidden brewing complications have been sent privately to the GM.</em></p>`;
    const degreeText = ["Critical Failure", "Failure", "Success", "Critical Success"][degree];
    const alchemicalCraftingPenaltyLine = lacksAlchemicalCrafting
      ? `<p><strong>Missing Alchemical Crafting:</strong> Result reduced from ${["Critical Failure", "Failure", "Success", "Critical Success"][degreeBeforeAlchemicalCraftingPenalty]} to ${degreeText}.</p>`
      : "";
    const publicBrewingContent = degree < 2
      ? `<h3>Brewing Complete</h3><p>A potion has been produced and placed in your inventory, but its nature is unidentified.</p>`
      : `<h3>Brewing Result: ${degreeText}</h3><p><strong>Created:</strong> ${created[0]?.name ?? itemData.name}${productQuantity > 1 ? ` ×${productQuantity}` : ""}</p>${alchemicalCraftingPenaltyLine}${degree===3 ? `<p><strong>Critical Success:</strong> Created two copies of the baseline product. The learned formula remains the normal result for this ingredient combination.</p>` : ""}${extraBrewedItems ? `<p><strong>Brewing item bonus:</strong> Created ${extraBrewedItems} additional brewed item${extraBrewedItems === 1 ? "" : "s"}.</p>` : ""}${formulaLine}`;
    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor }),
      content: publicBrewingContent
    });
    if (degree < 2) {
      const trueDescription = winner === "whimsy" ? final.description : (final.system?.description?.value ?? "");
      await createGMOnlyMessage(`<h3>GM Brewing Notes</h3><p><strong>Brewing Degree:</strong> ${degreeText}${lacksAlchemicalCrafting ? ` (reduced from ${["Critical Failure", "Failure", "Success", "Critical Success"][degreeBeforeAlchemicalCraftingPenalty]} due to missing Alchemical Crafting)` : ""}</p><p><strong>Baseline Product:</strong> ${final.name}</p><p><strong>Category:</strong> ${winner}; <strong>Value:</strong> ${totals[winner]}; <strong>Product Level:</strong> ${finalLevel}</p>${criticalFailureEffect ? `<p><strong>Created False Potion:</strong> The item is not ${final.name}; it only contains the hidden critical-failure consequence below.</p><p><strong>Critical Failure Potion Consequence:</strong> d20 result ${criticalFailureEffect.index}</p><p>${htmlEscape(criticalFailureEffect.text)}</p>` : `<p><strong>True Effect:</strong></p>${trueDescription}<p><strong>Side Effect:</strong> ${sideEffect ?? "None"}</p>`}`, actor);
    }
    this.slots = [null,null,null];
    this.render();
  }
}

function addSceneControl(controls) {
  const tool = { name: "obojima-brewing", title: "Brewing Cauldron", icon: "fas fa-flask", button: true, onClick: () => game.obojimaBrewing.open() };
  if (Array.isArray(controls)) {
    const token = controls.find(c => c.name === "token") ?? controls[0];
    token?.tools?.push(tool);
  } else if (controls?.tokens?.tools) {
    controls.tokens.tools["obojima-brewing"] = tool;
  }
}


function isObojimaHarvestedMaterialData(data) {
  const flags = data?.flags?.[MODULE_ID] ?? data?.flags?.[MODULE_ID.replaceAll(".", "_")];
  return !!(flags?.harvested && (flags?.ingredient || flags?.monsterPart));
}

function harvestedMaterialKind(data) {
  const flags = data?.flags?.[MODULE_ID] ?? {};
  return flags?.monsterPart ? "Monster Part" : "Ingredient";
}

function isCharacterActor(actor) {
  return String(actor?.type ?? "").toLowerCase() === "character";
}

function harvestedIngredientLevelFromData(data) {
  return Number(data?.flags?.[MODULE_ID]?.ingredientLevel ?? data?.flags?.[MODULE_ID]?.sourceLevel ?? data?.system?.level?.value ?? 1) || 1;
}

function obojimaFlagData(documentLike) {
  return documentLike?.flags?.[MODULE_ID]
    ?? documentLike?.flags?.obojimaBrewing
    ?? documentLike?.flags?.["obojima-brewing"]
    ?? {};
}

function numericFlagValue(flags, key) {
  const value = Number(flags?.[key] ?? 0);
  return Number.isFinite(value) ? value : 0;
}

function itemRuleElements(item) {
  const rules = item?.system?.rules;
  if (Array.isArray(rules)) return rules;
  if (Array.isArray(rules?.value)) return rules.value;
  return [];
}

function numericRuleValue(rule) {
  const raw = rule?.value ?? rule?.values?.[0]?.value ?? 0;
  if (typeof raw === "number") return Number.isFinite(raw) ? raw : 0;
  if (typeof raw === "string") {
    const trimmed = raw.trim();
    // Only evaluate simple numeric strings here. PF2e roll formulas are intentionally ignored.
    if (/^[+-]?\d+(?:\.\d+)?$/.test(trimmed)) {
      const n = Number(trimmed);
      return Number.isFinite(n) ? n : 0;
    }
  }
  return 0;
}

function ruleSelectors(rule) {
  const selector = rule?.selector ?? rule?.selectors;
  if (Array.isArray(selector)) return selector.map(s => String(s).toLowerCase());
  if (selector) return [String(selector).toLowerCase()];
  return [];
}

function obojimaRuleElementBonuses(item) {
  const totals = {};
  const add = (key, value) => { totals[key] = (totals[key] ?? 0) + value; };

  for (const rule of itemRuleElements(item)) {
    if (String(rule?.key ?? "").toLowerCase() !== "flatmodifier") continue;
    const value = numericRuleValue(rule);
    if (!value) continue;
    for (const selector of ruleSelectors(rule)) {
      switch (selector) {
        case "obojima-harvest": add("harvestBonus", value); break;
        case "obojima-ingredient-harvest": add("ingredientHarvestBonus", value); break;
        case "obojima-monster-part-harvest": add("monsterPartHarvestBonus", value); break;
        case "obojima-extra-ingredients": add("extraIngredients", value); break;
        case "obojima-extra-monster-parts": add("extraMonsterParts", value); break;
        case "obojima-harvest-level": add("harvestLevelBonus", value); break;
        case "obojima-brewing": add("brewingBonus", value); break;
        case "obojima-combat-brewing": add("combatBrewingBonus", value); break;
        case "obojima-utility-brewing": add("utilityBrewingBonus", value); break;
        case "obojima-whimsy-brewing": add("whimsyBrewingBonus", value); break;
        case "obojima-extra-brewed-items": add("extraBrewedItems", value); break;
      }
    }
  }
  return totals;
}

function numericRuleBonus(ruleTotals, key) {
  const value = Number(ruleTotals?.[key] ?? 0);
  return Number.isFinite(value) ? value : 0;
}

function getObojimaHarvestBonuses(actor, kind="Ingredient") {
  const isPart = String(kind).toLowerCase().includes("part");
  const totals = {
    checkBonus: 0,
    ingredientHarvestBonus: 0,
    monsterPartHarvestBonus: 0,
    extraIngredients: 0,
    extraMonsterParts: 0,
    harvestLevelBonus: 0
  };

  for (const item of actor?.items ?? []) {
    const quantity = Number(item?.system?.quantity ?? item?.system?.quantity?.value ?? 1);
    if (Number.isFinite(quantity) && quantity <= 0) continue;

    const flags = obojimaFlagData(item);
    const rules = obojimaRuleElementBonuses(item);
    totals.ingredientHarvestBonus += numericFlagValue(flags, "ingredientHarvestBonus") + numericRuleBonus(rules, "ingredientHarvestBonus");
    totals.monsterPartHarvestBonus += numericFlagValue(flags, "monsterPartHarvestBonus") + numericRuleBonus(rules, "monsterPartHarvestBonus");
    totals.extraIngredients += numericFlagValue(flags, "extraIngredients") + numericRuleBonus(rules, "extraIngredients");
    totals.extraMonsterParts += numericFlagValue(flags, "extraMonsterParts") + numericRuleBonus(rules, "extraMonsterParts");
    totals.harvestLevelBonus += numericFlagValue(flags, "harvestLevelBonus") + numericRuleBonus(rules, "harvestLevelBonus");

    // Generic support for simple harvesting tools.
    totals.checkBonus += numericFlagValue(flags, "harvestBonus") + numericRuleBonus(rules, "harvestBonus");
  }

  totals.checkBonus += isPart ? totals.monsterPartHarvestBonus : totals.ingredientHarvestBonus;
  totals.extraItems = Math.max(0, Math.floor(isPart ? totals.extraMonsterParts : totals.extraIngredients));
  totals.harvestLevelBonus = Math.max(0, Math.floor(totals.harvestLevelBonus));
  return totals;
}


function getObojimaBrewingBonuses(actor, winner="") {
  const category = String(winner ?? "").toLowerCase();
  const totals = {
    brewingBonus: 0,
    combatBrewingBonus: 0,
    utilityBrewingBonus: 0,
    whimsyBrewingBonus: 0,
    extraBrewedItems: 0,
    checkBonus: 0
  };

  for (const item of actor?.items ?? []) {
    const quantity = Number(item?.system?.quantity ?? item?.system?.quantity?.value ?? 1);
    if (Number.isFinite(quantity) && quantity <= 0) continue;

    const flags = obojimaFlagData(item);
    const rules = obojimaRuleElementBonuses(item);
    totals.brewingBonus += numericFlagValue(flags, "brewingBonus") + numericRuleBonus(rules, "brewingBonus");
    totals.combatBrewingBonus += numericFlagValue(flags, "combatBrewingBonus") + numericRuleBonus(rules, "combatBrewingBonus");
    totals.utilityBrewingBonus += numericFlagValue(flags, "utilityBrewingBonus") + numericRuleBonus(rules, "utilityBrewingBonus");
    totals.whimsyBrewingBonus += numericFlagValue(flags, "whimsyBrewingBonus") + numericRuleBonus(rules, "whimsyBrewingBonus");
    totals.extraBrewedItems += numericFlagValue(flags, "extraBrewedItems") + numericRuleBonus(rules, "extraBrewedItems");
  }

  totals.checkBonus += totals.brewingBonus;
  if (category === "combat") totals.checkBonus += totals.combatBrewingBonus;
  else if (category === "utility") totals.checkBonus += totals.utilityBrewingBonus;
  else if (category === "whimsy") totals.checkBonus += totals.whimsyBrewingBonus;

  totals.extraBrewedItems = Math.max(0, Math.floor(totals.extraBrewedItems));
  return totals;
}

function monsterPartValueForLevel(level) {
  const mode = String(getSettingSafe("monsterPartsValueMode", "hybrid") || "hybrid");
  const table = MONSTER_PART_VALUE_TABLES[mode] ?? MONSTER_PART_VALUE_TABLES.hybrid;
  const index = Math.max(0, Math.min(table.length - 1, Number(level) + 1));
  return table[index] ?? table[2] ?? 7;
}

function addQuantityToItemData(itemData, extra) {
  const amount = Math.max(0, Math.floor(Number(extra) || 0));
  if (!amount) return itemData;
  itemData.system ??= {};
  const current = Number(itemData.system.quantity ?? itemData.system.quantity?.value ?? 1);
  const newQuantity = (Number.isFinite(current) ? current : 1) + amount;
  if (typeof itemData.system.quantity === "object") itemData.system.quantity.value = newQuantity;
  else itemData.system.quantity = newQuantity;
  return itemData;
}

function applyHarvestLevelBonusToItemData(itemData, levelBonus, kind="Ingredient") {
  const bonus = Math.max(0, Math.floor(Number(levelBonus) || 0));
  if (!bonus) return itemData;

  const flags = itemData.flags?.[MODULE_ID] ?? {};
  const oldLevel = harvestedIngredientLevelFromData(itemData);
  const newLevel = Math.max(1, Math.min(25, oldLevel + bonus));
  itemData.system ??= {};
  itemData.system.level ??= {};
  itemData.system.level.value = newLevel;
  itemData.flags ??= {};
  itemData.flags[MODULE_ID] = { ...(itemData.flags[MODULE_ID] ?? {}), harvestLevelBonusApplied: bonus };

  const isPart = String(kind).toLowerCase().includes("part") || flags?.monsterPart;
  if (isPart) {
    const gpValue = monsterPartValueForLevel(newLevel);
    itemData.system.price ??= {};
    itemData.system.price.value = coinsFromGpValue(gpValue);
    itemData.flags[MODULE_ID].sourceLevel = newLevel;
    itemData.flags[MODULE_ID].gpValue = gpValue;
  } else {
    itemData.system.price ??= {};
    itemData.system.price.value = ingredientPrice(newLevel, itemData.name ?? "Harvested Ingredient");
    itemData.flags[MODULE_ID].ingredientLevel = newLevel;

    // Increase the actual brewing values so quality-improving tools matter in future brews.
    const scale = oldLevel > 0 ? newLevel / oldLevel : 1;
    for (const key of ["combat", "utility", "whimsy"]) {
      if (Number.isFinite(Number(flags?.[key]))) {
        itemData.flags[MODULE_ID][key] = Math.max(0, Math.round(Number(flags[key]) * scale));
      }
    }
  }

  const note = `<p><em>Harvesting tools improved this material by ${bonus} level${bonus === 1 ? "" : "s"}.</em></p>`;
  itemData.system.description ??= {};
  itemData.system.description.value = `${itemData.system.description.value ?? ""}${note}`;
  itemData.system.description.gm = `${itemData.system.description.gm ?? ""}${note}`;
  return itemData;
}

async function chooseHarvestLootSkill(actor, itemName, kind="Material") {
  return new Promise(resolve => {
    const content = `<p><strong>${htmlEscape(actor?.name ?? "This character")}</strong> is attempting to collect <strong>${htmlEscape(itemName)}</strong>.</p><p>Choose the skill used to safely harvest and preserve this ${htmlEscape(String(kind).toLowerCase())}.</p>`;
    new Dialog({
      title: `Collect Obojima ${kind}`,
      content,
      buttons: {
        crafting: { label: "Crafting", icon: '<i class="fas fa-hammer"></i>', callback: () => resolve("crafting") },
        survival: { label: "Survival", icon: '<i class="fas fa-tree"></i>', callback: () => resolve("survival") },
        cancel: { label: "Cancel", icon: '<i class="fas fa-times"></i>', callback: () => resolve(null) }
      },
      default: "crafting",
      close: () => resolve(null)
    }).render(true);
  });
}

async function resolveHarvestLootAttempt({ actor, itemData, skillOverride = null, existingItem = null }) {
  const kind = harvestedMaterialKind(itemData);
  const skill = skillOverride ?? await chooseHarvestLootSkill(actor, itemData.name, kind);
  if (!skill) return ui.notifications.info(`${kind} collection cancelled.`);

  const level = harvestedIngredientLevelFromData(itemData);
  const dc = brewingDCByLevel(level);
  const baseDC = pf2eDCByLevel(level);
  const pwl = isProficiencyWithoutLevelEnabled();
  const bonuses = getObojimaHarvestBonuses(actor, kind);
  const baseMod = skill === "survival" ? getSurvivalModifier(actor) : getCraftingModifier(actor);
  const mod = baseMod + bonuses.checkBonus;
  const roll = await new Roll("1d20 + @mod", { mod }).evaluate();
  const skillLabel = skill === "survival" ? "Survival" : "Crafting";
  const bonusText = bonuses.checkBonus ? `; Obojima Harvest Bonus: ${bonuses.checkBonus >= 0 ? "+" : ""}${bonuses.checkBonus}` : "";
  const extraText = bonuses.extraItems ? `; Extra ${kind}${bonuses.extraItems === 1 ? "" : "s"} on Success: ${bonuses.extraItems}` : "";
  const levelBonusText = bonuses.harvestLevelBonus ? `; Harvest Level Bonus: +${bonuses.harvestLevelBonus}` : "";
  await roll.toMessage({
    speaker: ChatMessage.getSpeaker({ actor }),
    flavor: `<strong>Collect Obojima ${kind} (${skillLabel})</strong><br>` +
      `${kind} Level: ${level}; Base DC: ${baseDC}; Final DC: ${dc}${pwl ? " (Proficiency Without Level)" : ""}<br>` +
      `${skillLabel} Modifier Used: ${baseMod >= 0 ? "+" : ""}${baseMod}${bonusText}${extraText}${levelBonusText}`
  });

  const total = Number(roll.total) || 0;
  let degree = 1;
  if (total >= dc + 10) degree = 3;
  else if (total >= dc) degree = 2;
  else if (total <= dc - 10) degree = 0;

  // Natural 20/1 degree adjustment, matching PF2e check expectations.
  const die = roll.dice?.[0]?.total;
  if (die === 20) degree = Math.min(3, degree + 1);
  if (die === 1) degree = Math.max(0, degree - 1);

  if (degree >= 2) {
    const cloned = foundry.utils.deepClone(itemData);
    cloned.flags ??= {};
    cloned.flags[MODULE_ID] = { ...(cloned.flags[MODULE_ID] ?? {}), harvestCheckPassed: true };
    addQuantityToItemData(cloned, bonuses.extraItems);
    applyHarvestLevelBonusToItemData(cloned, bonuses.harvestLevelBonus, kind);
    const extraNotice = bonuses.extraItems ? ` (${1 + bonuses.extraItems} total)` : "";

    if (existingItem && existingItem.parent?.id === actor.id) {
      delete cloned._id;
      await existingItem.update(cloned, { obojimaHarvestSkillCheckPassed: true });
    } else {
      delete cloned._id;
      await actor.createEmbeddedDocuments("Item", [cloned], { obojimaHarvestSkillCheckPassed: true });
    }

    ui.notifications.info(`${actor.name} successfully collected ${itemData.name}${extraNotice}.`);
    return true;
  }

  if (existingItem && existingItem.parent?.id === actor.id) {
    await existingItem.delete({ obojimaHarvestSkillCheckFailed: true }).catch(err => console.warn(MODULE_ID, "Could not delete spoiled harvested material", err));
  }

  ui.notifications.warn(`${itemData.name} was spoiled or destroyed during collection.`);
  ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ actor }),
    content: `<p><strong>Obojima ${kind} Lost:</strong> ${htmlEscape(itemData.name)} was spoiled or destroyed during collection.</p>`
  });
  return false;
}



async function createPlayerHarvestChoiceMessage(user, actor, itemData, existingItem = null) {
  const kind = harvestedMaterialKind(itemData);
  const content = `
    <div class="obojima-harvest-request">
      <p><strong>${htmlEscape(actor?.name ?? "Your character")}</strong> is attempting to collect <strong>${htmlEscape(itemData?.name ?? "a harvested material")}</strong>.</p>
      <p>Choose the skill used to safely harvest and preserve this ${htmlEscape(String(kind).toLowerCase())}.</p>
      <p>
        <button type="button" data-obojima-harvest-choice="crafting"><i class="fas fa-hammer"></i> Crafting</button>
        <button type="button" data-obojima-harvest-choice="survival"><i class="fas fa-tree"></i> Survival</button>
      </p>
    </div>`;
  await ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ actor }),
    whisper: [user.id],
    content,
    flags: {
      [MODULE_ID]: {
        harvestChoiceRequest: true,
        actorUuid: actor.uuid,
        actorId: actor.id,
        itemUuid: existingItem?.uuid ?? null,
        itemId: existingItem?.id ?? null,
        itemData: foundry.utils.deepClone(itemData)
      }
    }
  });
}

function attachHarvestChoiceListeners(message, html) {
  const request = message.getFlag?.(MODULE_ID, "harvestChoiceRequest");
  if (!request) return;
  const whisper = message.whisper ?? [];
  if (Array.isArray(whisper) && whisper.length && !whisper.includes(game.user.id) && !game.user.isGM) return;

  const root = html?.jquery ? html[0] : (html instanceof HTMLElement ? html : html?.[0] ?? html);
  const buttons = root?.querySelectorAll?.("[data-obojima-harvest-choice]") ?? [];
  for (const button of buttons) {
    button.addEventListener("click", async event => {
      event.preventDefault();
      const skill = button.dataset.obojimaHarvestChoice;
      const actorUuid = message.getFlag(MODULE_ID, "actorUuid");
      const actorId = message.getFlag(MODULE_ID, "actorId");
      const itemData = message.getFlag(MODULE_ID, "itemData");
      const itemUuid = message.getFlag(MODULE_ID, "itemUuid");
      const itemId = message.getFlag(MODULE_ID, "itemId");
      const actor = (actorUuid ? await fromUuid(actorUuid) : null) ?? game.actors?.get(actorId);
      if (!actor) return ui.notifications.warn("Obojima harvest request failed: actor not found.");
      if (!actor.testUserPermission?.(game.user, "OWNER") && !game.user.isGM) {
        return ui.notifications.warn("Obojima harvest request failed: you do not own this actor.");
      }
      const existingItem = (itemUuid ? await fromUuid(itemUuid) : null) ?? actor.items?.get(itemId);
      await message.update({ content: `${message.content}<p><em>${htmlEscape(game.user.name)} chose ${skill === "survival" ? "Survival" : "Crafting"}.</em></p>` }).catch(() => {});
      await resolveHarvestLootAttempt({ actor, itemData: foundry.utils.deepClone(itemData), skillOverride: skill, existingItem });
    }, { once: true });
  }
}

function activeOwningPlayerForActor(actor) {
  const users = game.users?.contents ?? Array.from(game.users ?? []);
  return users.find(u => {
    if (!u?.active || u.isGM) return false;
    try {
      return actor?.testUserPermission?.(u, "OWNER");
    } catch (err) {
      const level = actor?.ownership?.[u.id] ?? actor?.permission?.[u.id] ?? 0;
      return Number(level) >= (CONST?.DOCUMENT_OWNERSHIP_LEVELS?.OWNER ?? 3);
    }
  }) ?? null;
}

function requestPlayerHarvestLootAttempt(actor, itemData, existingItem = null) {
  const user = activeOwningPlayerForActor(actor);
  if (!user || user.id === game.user.id) return false;

  // Use a whispered chat card rather than a remote Dialog. This is more reliable with Item Piles
  // because the player's client can click the button when they actually see it, and the GM client
  // does not need to open a dialog on the player's behalf.
  createPlayerHarvestChoiceMessage(user, actor, itemData, existingItem);
  ui.notifications.info(`Asked ${user.name} to choose Crafting or Survival for ${itemData?.name ?? "the harvested material"}.`);
  return true;
}

function shouldThisClientHandleHarvestedInventoryItem(actor) {
  const owner = activeOwningPlayerForActor(actor);
  if (owner) return game.user.id === owner.id;
  return game.user.isGM;
}

function handleHarvestedMaterialCreatedOnCharacter(item, options, userId) {
  const actor = item?.parent;
  if (!actor || !isCharacterActor(actor)) return;
  if (options?.obojimaHarvestSkillCheckPassed || options?.obojimaHarvestSkillCheckFailed) return;
  const source = item?.toObject?.() ?? item;
  if (!isObojimaHarvestedMaterialData(source)) return;
  if (source?.flags?.[MODULE_ID]?.harvestCheckPassed) return;
  if (!shouldThisClientHandleHarvestedInventoryItem(actor)) return;

  // Let Item Piles/PF2e complete the transfer normally. Once the material is in the
  // character inventory, ask the owning player which skill to use. On success the
  // item is marked as harvested; on failure this same inventory item is deleted.
  const itemData = foundry.utils.deepClone(source);
  if (!requestPlayerHarvestLootAttempt(actor, itemData, item)) {
    setTimeout(() => resolveHarvestLootAttempt({ actor, itemData, existingItem: item }), 50);
  }
}

function interceptHarvestedIngredientLoot(item, data, options, userId) {
  // Deprecated in v0.32: do not cancel Item Piles/PF2e transfers. Cancelling the
  // transfer can leave PF2e's ItemTransfer flow holding a stale source item id.
  return undefined;
}


const OBOJIMA_TRIGGERED_CRIT_FAIL_EFFECTS = new Set();

async function obojimaItemFromUuid(uuid) {
  if (!uuid) return null;
  try {
    const doc = await fromUuid(uuid);
    return doc?.documentName === "Item" ? doc : null;
  } catch (_err) {
    return null;
  }
}

async function findCriticalFailureBrewItemFromMessage(message) {
  const flags = message.flags ?? {};
  const pf2e = flags.pf2e ?? {};
  const speaker = message.speaker ?? {};
  const actor = game.actors?.get(speaker.actor) ?? null;

  const ids = [
    pf2e.context?.item?.id,
    pf2e.item?.id,
    pf2e.origin?.id
  ].filter(Boolean);
  for (const id of ids) {
    const item = actor?.items?.get(id);
    if (item?.flags?.[MODULE_ID]?.criticalFailureBrew) return item;
  }

  const uuids = [
    pf2e.context?.item?.uuid,
    pf2e.item?.uuid,
    pf2e.origin?.uuid,
    flags.core?.sourceId
  ].filter(Boolean);
  for (const uuid of uuids) {
    const item = await obojimaItemFromUuid(uuid);
    if (item?.flags?.[MODULE_ID]?.criticalFailureBrew) return item;
  }

  return null;
}

async function triggerCriticalFailurePotionEffect(item, actor=null, sourceKey=null) {
  if (!game.user.isGM) return;
  const data = item?.flags?.[MODULE_ID];
  if (!data?.criticalFailureBrew || !data?.criticalFailureEffect) return;
  const key = sourceKey ?? item.uuid ?? `${actor?.id ?? item.parent?.id ?? "unknown"}.${item.id}`;
  if (OBOJIMA_TRIGGERED_CRIT_FAIL_EFFECTS.has(key)) return;
  OBOJIMA_TRIGGERED_CRIT_FAIL_EFFECTS.add(key);
  const effect = data.criticalFailureEffect;
  await ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ actor: actor ?? item.parent ?? undefined }),
    whisper: gmUserIds(),
    blind: true,
    content: `<h3>Unstable Potion Consequence</h3><p>The potion's true nature reveals itself as it is consumed.</p><p><strong>d20 Result ${effect.index}:</strong> ${htmlEscape(effect.text)}</p>`,
    flags: { [MODULE_ID]: { criticalFailureEffectCard: true } }
  });
}

async function handleCriticalFailurePotionUse(message) {
  if (!game.user.isGM) return;
  if (message.flags?.[MODULE_ID]?.criticalFailureEffectCard) return;
  const item = await findCriticalFailureBrewItemFromMessage(message);
  if (!item) return;
  await triggerCriticalFailurePotionEffect(item, item.parent, `message.${message.id}.${item.id}`);
}

async function handleCriticalFailurePotionDelete(item) {
  if (!game.user.isGM) return;
  if (!item?.flags?.[MODULE_ID]?.criticalFailureBrew) return;
  await triggerCriticalFailurePotionEffect(item, item.parent, `delete.${item.parent?.id ?? "actor"}.${item.id}`);
}

Hooks.once("init", () => {
  registerObojimaSettings();
  addHandlebarsHelpers();
  game.obojimaBrewing = { open: () => new ObojimaBrewingApp().render(true), ingredients: INGREDIENTS, whimsyPotions: WHIMSY_POTIONS, sideEffects: SIDE_EFFECTS, scanPF2eConsumables, brewingDCByLevel, isProficiencyWithoutLevelEnabled, getCraftingModifier, getSurvivalModifier, actorHasAlchemicalCrafting, actorHasAlchemistLab, itemLevel, productLevelFromIngredientTotal, selectProductForBrew, createProductJournals, showHarvestDialogForCombat, createHarvestedIngredient, createHarvestedMonsterPart, monsterPartValueForActor, repairFormulaBulkItems, getObojimaHarvestBonuses, getObojimaBrewingBonuses };
});
Hooks.on("getSceneControlButtons", addSceneControl);
Hooks.on("createItem", handleHarvestedMaterialCreatedOnCharacter);
Hooks.on("renderChatMessage", attachHarvestChoiceListeners);
Hooks.on("createChatMessage", handleCriticalFailurePotionUse);
Hooks.on("deleteItem", handleCriticalFailurePotionDelete);
Hooks.on("deleteCombat", combat => { setTimeout(() => showHarvestDialogForCombat(combat), 250); });
Hooks.once("ready", async () => {
  game.socket.on(`module.${MODULE_ID}`, async data => {
    if (data?.type === "gm-brewing-note") {
      if (!game.user.isGM) return;
      const primary = primaryActiveGM();
      if (primary && game.user.id !== primary.id) return;
      await ChatMessage.create({ speaker: data.speaker ?? ChatMessage.getSpeaker(), whisper: gmUserIds(), blind: true, content: data.content });
      return;
    }

    if (data?.type === "harvest-loot-request") {
      if (data.userId !== game.user.id) return;
      const actor = (data.actorUuid ? await fromUuid(data.actorUuid) : null) ?? game.actors?.get(data.actorId);
      if (!actor) return ui.notifications.warn("Obojima harvest request failed: actor not found.");
      if (!actor.testUserPermission?.(game.user, "OWNER")) return ui.notifications.warn("Obojima harvest request failed: you do not own this actor.");
      await resolveHarvestLootAttempt({ actor, itemData: foundry.utils.deepClone(data.itemData) });
      return;
    }
  });
  await getObojimaPotionIcons();
  await createIngredientItems();
  await createWhimsyDirectoryItems();
  await createProductJournals();
  await repairFormulaBulkItems();
  console.log(`${MODULE_ID} v0.38 ready. Open with game.obojimaBrewing.open()`);
});
