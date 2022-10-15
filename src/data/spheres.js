export default {
  "AGRICULTURE": {
    "compatible": [
      "FOOD",
      "FERTILITY",
      "RAIN"
    ],
    "conflicting": []
  },
  "ANIMALS": {
    "compatible": [
      "PLANTS"
    ],
    "conflicting": []
  },
  "ART": {
    "compatible": [
      "INSPIRATION",
      "BEAUTY"
    ],
    "conflicting": []
  },
  "BALANCE": {
    "compatible": [],
    "conflicting": []
  },
  "BEAUTY": {
    "compatible": [
      "ART"
    ],
    "conflicting": [
      "BLIGHT",
      "DEFORMITY",
      "DISEASE",
      "MUCK"
    ]
  },
  "BIRTH": {
    "compatible": [
      "CHILDREN",
      "CREATION",
      "FAMILY",
      "MARRIAGE",
      "PREGNANCY",
      "REBIRTH",
      "YOUTH"
    ],
    "conflicting": []
  },
  "BLIGHT": {
    "compatible": [
      "DISEASE",
      "DEATH"
    ],
    "conflicting": [
      "BEAUTY",
      "FOOD",
      "FERTILITY",
      "HEALING"
    ]
  },
  "BOUNDARIES": {
    "compatible": [],
    "conflicting": []
  },
  "CAVERNS": {
    "compatible": [
      "MOUNTAINS",
      "EARTH"
    ],
    "conflicting": []
  },
  "CHAOS": {
    "compatible": [
      "WAR"
    ],
    "conflicting": [
      "DISCIPLINE",
      "ORDER",
      "LAWS"
    ]
  },
  "CHARITY": {
    "compatible": [
      "GENEROSITY",
      "SACRIFICE"
    ],
    "conflicting": [
      "JEALOUSY"
    ]
  },
  "CHILDREN": {
    "compatible": [
      "BIRTH",
      "FAMILY",
      "YOUTH",
      "PREGNANCY"
    ],
    "conflicting": []
  },
  "COASTS": {
    "compatible": [
      "LAKES",
      "OCEANS"
    ],
    "conflicting": []
  },
  "CONSOLATION": {
    "compatible": [],
    "conflicting": [
      "MISERY"
    ]
  },
  "COURAGE": {
    "compatible": [],
    "conflicting": []
  },
  "CRAFTS": {
    "compatible": [
      "CREATION",
      "LABOR",
      "METALS"
    ],
    "conflicting": []
  },
  "CREATION": {
    "compatible": [
      "CRAFTS",
      "BIRTH",
      "PREGNANCY",
      "REBIRTH"
    ],
    "conflicting": []
  },
  "DANCE": {
    "compatible": [
      "FESTIVALS",
      "MUSIC",
      "REVELRY"
    ],
    "conflicting": []
  },
  "DARKNESS": {
    "compatible": [
      "NIGHT"
    ],
    "conflicting": [
      "DAWN",
      "DAY",
      "LIGHT",
      "TWILIGHT",
      "SUN"
    ]
  },
  "DAWN": {
    "compatible": [
      "SUN",
      "TWILIGHT"
    ],
    "conflicting": [
      "NIGHT",
      "DAY",
      "DARKNESS"
    ]
  },
  "DAY": {
    "compatible": [
      "LIGHT",
      "SUN"
    ],
    "conflicting": [
      "DARKNESS",
      "NIGHT",
      "DAWN",
      "DUSK",
      "DREAMS",
      "NIGHTMARES",
      "TWILIGHT"
    ]
  },
  "DEATH": {
    "compatible": [
      "BLIGHT",
      "DISEASE",
      "MURDER",
      "REBIRTH",
      "SUICIDE",
      "WAR"
    ],
    "conflicting": [
      "HEALING",
      "LONGEVITY",
      "YOUTH"
    ]
  },
  "DEFORMITY": {
    "compatible": [
      "DISEASE"
    ],
    "conflicting": [
      "BEAUTY"
    ]
  },
  "DEPRAVITY": {
    "compatible": [
      "LUST"
    ],
    "conflicting": [
      "LAWS"
    ]
  },
  "DISCIPLINE": {
    "compatible": [
      "LAWS",
      "ORDER"
    ],
    "conflicting": [
      "CHAOS"
    ]
  },
  "DISEASE": {
    "compatible": [
      "BLIGHT",
      "DEATH",
      "DEFORMITY"
    ],
    "conflicting": [
      "BEAUTY",
      "HEALING"
    ]
  },
  "DREAMS": {
    "compatible": [
      "NIGHT",
      "NIGHTMARES"
    ],
    "conflicting": [
      "DAY"
    ]
  },
  "DUSK": {
    "compatible": [
      "TWILIGHT"
    ],
    "conflicting": [
      "NIGHT",
      "DAY"
    ]
  },
  "DUTY": {
    "compatible": [
      "ORDER"
    ],
    "conflicting": []
  },
  "EARTH": {
    "compatible": [
      "CAVERNS",
      "MOUNTAINS",
      "VOLCANOS"
    ],
    "conflicting": []
  },
  "FAMILY": {
    "compatible": [
      "BIRTH",
      "CHILDREN",
      "MARRIAGE",
      "PREGNANCY"
    ],
    "conflicting": []
  },
  "FAME": {
    "compatible": [
      "RUMORS"
    ],
    "conflicting": [
      "SILENCE"
    ]
  },
  "FATE": {
    "compatible": [],
    "conflicting": [
      "LUCK"
    ]
  },
  "FERTILITY": {
    "compatible": [
      "AGRICULTURE",
      "FOOD",
      "RAIN"
    ],
    "conflicting": [
      "BLIGHT"
    ]
  },
  "FESTIVALS": {
    "compatible": [
      "DANCE",
      "MUSIC",
      "REVELRY",
      "SONG"
    ],
    "conflicting": [
      "MISERY"
    ]
  },
  "FIRE": {
    "compatible": [
      "METALS",
      "SUN",
      "VOLCANOS"
    ],
    "conflicting": [
      "WATER",
      "OCEANS",
      "LAKES",
      "RIVERS"
    ]
  },
  "FISH": {
    "compatible": [
      "OCEANS",
      "LAKES",
      "RIVERS",
      "WATER",
      "FISHING"
    ],
    "conflicting": []
  },
  "FISHING": {
    "compatible": [
      "FISH",
      "HUNTING"
    ],
    "conflicting": []
  },
  "FOOD": {
    "compatible": [
      "AGRICULTURE",
      "FERTILITY"
    ],
    "conflicting": [
      "BLIGHT"
    ]
  },
  "FORGIVENESS": {
    "compatible": [
      "MERCY"
    ],
    "conflicting": [
      "REVENGE"
    ]
  },
  "FORTRESSES": {
    "compatible": [
      "WAR"
    ],
    "conflicting": []
  },
  "FREEDOM": {
    "compatible": [],
    "conflicting": [
      "ORDER"
    ]
  },
  "GAMBLING": {
    "compatible": [
      "GAMES",
      "LUCK"
    ],
    "conflicting": []
  },
  "GAMES": {
    "compatible": [
      "GAMBLING",
      "LUCK"
    ],
    "conflicting": []
  },
  "GENEROSITY": {
    "compatible": [
      "CHARITY",
      "SACRIFICE"
    ],
    "conflicting": []
  },
  "HAPPINESS": {
    "compatible": [
      "REVELRY"
    ],
    "conflicting": [
      "MISERY"
    ]
  },
  "HEALING": {
    "compatible": [],
    "conflicting": [
      "DISEASE",
      "BLIGHT",
      "DEATH"
    ]
  },
  "HOSPITALITY": {
    "compatible": [],
    "conflicting": []
  },
  "HUNTING": {
    "compatible": [
      "FISHING"
    ],
    "conflicting": []
  },
  "INSPIRATION": {
    "compatible": [
      "ART",
      "PAINTING",
      "POETRY"
    ],
    "conflicting": []
  },
  "JEALOUSY": {
    "compatible": [],
    "conflicting": [
      "CHARITY"
    ]
  },
  "JEWELS": {
    "compatible": [
      "MINERALS",
      "WEALTH"
    ],
    "conflicting": []
  },
  "JUSTICE": {
    "compatible": [
      "LAWS"
    ],
    "conflicting": []
  },
  "LABOR": {
    "compatible": [
      "CRAFTS"
    ],
    "conflicting": []
  },
  "LAKES": {
    "compatible": [
      "COASTS",
      "FISH",
      "OCEANS",
      "RIVERS"
    ],
    "conflicting": [
      "FIRE"
    ]
  },
  "LAWS": {
    "compatible": [
      "DISCIPLINE",
      "JUSTICE",
      "OATHS",
      "ORDER"
    ],
    "conflicting": [
      "CHAOS",
      "DEPRAVITY",
      "MURDER",
      "THEFT"
    ]
  },
  "LIES": {
    "compatible": [
      "TREACHERY",
      "TRICKERY"
    ],
    "conflicting": [
      "TRUTH"
    ]
  },
  "LIGHT": {
    "compatible": [
      "DAY",
      "RAINBOWS",
      "SUN"
    ],
    "conflicting": [
      "DARKNESS",
      "TWILIGHT"
    ]
  },
  "LIGHTNING": {
    "compatible": [
      "RAIN",
      "STORMS",
      "THUNDER"
    ],
    "conflicting": []
  },
  "LONGEVITY": {
    "compatible": [
      "YOUTH"
    ],
    "conflicting": [
      "DEATH"
    ]
  },
  "LOVE": {
    "compatible": [],
    "conflicting": []
  },
  "LOYALTY": {
    "compatible": [
      "OATHS"
    ],
    "conflicting": [
      "TREACHERY"
    ]
  },
  "LUCK": {
    "compatible": [
      "GAMBLING",
      "GAMES"
    ],
    "conflicting": [
      "FATE"
    ]
  },
  "LUST": {
    "compatible": [
      "DEPRAVITY"
    ],
    "conflicting": []
  },
  "MARRIAGE": {
    "compatible": [
      "BIRTH",
      "FAMILY",
      "OATHS",
      "PREGNANCY"
    ],
    "conflicting": []
  },
  "MERCY": {
    "compatible": [
      "FORGIVENESS"
    ],
    "conflicting": [
      "REVENGE"
    ]
  },
  "METALS": {
    "compatible": [
      "CRAFTS",
      "FIRE",
      "MINERALS"
    ],
    "conflicting": []
  },
  "MINERALS": {
    "compatible": [
      "JEWELS",
      "METALS"
    ],
    "conflicting": []
  },
  "MISERY": {
    "compatible": [
      "TORTURE"
    ],
    "conflicting": [
      "CONSOLATION",
      "FESTIVALS",
      "REVELRY",
      "HAPPINESS"
    ]
  },
  "MIST": {
    "compatible": [],
    "conflicting": []
  },
  "MOON": {
    "compatible": [
      "NIGHT",
      "SKY"
    ],
    "conflicting": []
  },
  "MOUNTAINS": {
    "compatible": [
      "CAVERNS",
      "EARTH",
      "VOLCANOS"
    ],
    "conflicting": []
  },
  "MUCK": {
    "compatible": [],
    "conflicting": [
      "BEAUTY"
    ]
  },
  "MURDER": {
    "compatible": [
      "DEATH"
    ],
    "conflicting": [
      "LAWS"
    ]
  },
  "MUSIC": {
    "compatible": [
      "DANCE",
      "FESTIVALS",
      "REVELRY",
      "SONG"
    ],
    "conflicting": [
      "SILENCE"
    ]
  },
  "NATURE": {
    "compatible": [
      "RAIN",
      "SUN",
      "WATER",
      "WEATHER"
    ],
    "conflicting": []
  },
  "NIGHT": {
    "compatible": [
      "DARKNESS",
      "DREAMS",
      "MOON",
      "NIGHTMARES",
      "STARS"
    ],
    "conflicting": [
      "DAY",
      "DAWN",
      "DUSK",
      "TWILIGHT"
    ]
  },
  "NIGHTMARES": {
    "compatible": [
      "DREAMS",
      "NIGHT"
    ],
    "conflicting": [
      "DAY"
    ]
  },
  "OATHS": {
    "compatible": [
      "LAWS",
      "LOYALTY",
      "MARRIAGE"
    ],
    "conflicting": [
      "TREACHERY"
    ]
  },
  "OCEANS": {
    "compatible": [
      "COASTS",
      "FISH",
      "LAKES",
      "RIVERS",
      "SALT"
    ],
    "conflicting": [
      "FIRE"
    ]
  },
  "ORDER": {
    "compatible": [
      "DISCIPLINE",
      "DUTY",
      "LAWS"
    ],
    "conflicting": [
      "CHAOS",
      "FREEDOM"
    ]
  },
  "PAINTING": {
    "compatible": [
      "INSPIRATION"
    ],
    "conflicting": []
  },
  "PEACE": {
    "compatible": [],
    "conflicting": []
  },
  "PERSUASION": {
    "compatible": [
      "POETRY",
      "SPEECH"
    ],
    "conflicting": []
  },
  "PLANTS": {
    "compatible": [
      "ANIMALS",
      "RAIN"
    ],
    "conflicting": []
  },
  "POETRY": {
    "compatible": [
      "INSPIRATION",
      "PERSUASION",
      "SONG",
      "WRITING"
    ],
    "conflicting": []
  },
  "PREGNANCY": {
    "compatible": [
      "BIRTH",
      "CHILDREN",
      "CREATION",
      "FAMILY",
      "MARRIAGE"
    ],
    "conflicting": []
  },
  "RAIN": {
    "compatible": [
      "AGRICULTURE",
      "FERTILITY",
      "LIGHTNING",
      "NATURE",
      "PLANTS",
      "RAINBOWS",
      "STORMS",
      "THUNDER",
      "TREES"
    ],
    "conflicting": []
  },
  "RAINBOWS": {
    "compatible": [
      "LIGHT",
      "RAIN",
      "SKY"
    ],
    "conflicting": []
  },
  "REBIRTH": {
    "compatible": [
      "BIRTH",
      "CREATION",
      "DEATH"
    ],
    "conflicting": []
  },
  "REVELRY": {
    "compatible": [
      "DANCE",
      "FESTIVALS",
      "HAPPINESS",
      "MUSIC",
      "SONG"
    ],
    "conflicting": [
      "MISERY"
    ]
  },
  "REVENGE": {
    "compatible": [],
    "conflicting": [
      "FORGIVENESS",
      "MERCY"
    ]
  },
  "RIVERS": {
    "compatible": [
      "FISH",
      "LAKES",
      "OCEANS"
    ],
    "conflicting": [
      "FIRE"
    ]
  },
  "RULERSHIP": {
    "compatible": [],
    "conflicting": []
  },
  "RUMORS": {
    "compatible": [
      "FAME"
    ],
    "conflicting": []
  },
  "SACRIFICE": {
    "compatible": [
      "CHARITY",
      "GENEROSITY"
    ],
    "conflicting": [
      "WEALTH"
    ]
  },
  "SALT": {
    "compatible": [
      "OCEANS"
    ],
    "conflicting": []
  },
  "SCHOLARSHIP": {
    "compatible": [
      "WISDOM",
      "WRITING"
    ],
    "conflicting": []
  },
  "SEASONS": {
    "compatible": [],
    "conflicting": []
  },
  "SILENCE": {
    "compatible": [],
    "conflicting": [
      "FAME",
      "MUSIC"
    ]
  },
  "SKY": {
    "compatible": [
      "MOON",
      "RAINBOWS",
      "SUN",
      "STARS",
      "WEATHER",
      "WIND"
    ],
    "conflicting": []
  },
  "SONG": {
    "compatible": [
      "FESTIVALS",
      "MUSIC",
      "POETRY",
      "REVELRY"
    ],
    "conflicting": []
  },
  "SPEECH": {
    "compatible": [
      "PERSUASION"
    ],
    "conflicting": []
  },
  "STARS": {
    "compatible": [
      "NIGHT",
      "SKY"
    ],
    "conflicting": []
  },
  "STORMS": {
    "compatible": [
      "LIGHTNING",
      "RAIN",
      "THUNDER"
    ],
    "conflicting": []
  },
  "STRENGTH": {
    "compatible": [],
    "conflicting": []
  },
  "SUICIDE": {
    "compatible": [
      "DEATH"
    ],
    "conflicting": []
  },
  "SUN": {
    "compatible": [
      "DAWN",
      "DAY",
      "FIRE",
      "LIGHT",
      "NATURE",
      "SKY"
    ],
    "conflicting": [
      "DARKNESS"
    ]
  },
  "THEFT": {
    "compatible": [],
    "conflicting": [
      "LAWS",
      "TRADE"
    ]
  },
  "THRALLDOM": {
    "compatible": [],
    "conflicting": []
  },
  "THUNDER": {
    "compatible": [
      "LIGHTNING",
      "RAIN",
      "STORMS"
    ],
    "conflicting": []
  },
  "TORTURE": {
    "compatible": [
      "MISERY"
    ],
    "conflicting": []
  },
  "TRADE": {
    "compatible": [
      "WEALTH"
    ],
    "conflicting": [
      "THEFT"
    ]
  },
  "TRAVELERS": {
    "compatible": [],
    "conflicting": []
  },
  "TREACHERY": {
    "compatible": [
      "LIES",
      "TRICKERY"
    ],
    "conflicting": [
      "LOYALTY",
      "OATHS"
    ]
  },
  "TREES": {
    "compatible": [
      "RAIN"
    ],
    "conflicting": []
  },
  "TRICKERY": {
    "compatible": [
      "LIES",
      "TREACHERY"
    ],
    "conflicting": [
      "TRUTH"
    ]
  },
  "TRUTH": {
    "compatible": [],
    "conflicting": [
      "LIES",
      "TRICKERY"
    ]
  },
  "TWILIGHT": {
    "compatible": [
      "DAWN",
      "DUSK"
    ],
    "conflicting": [
      "LIGHT",
      "DARKNESS",
      "DAY",
      "NIGHT"
    ]
  },
  "VALOR": {
    "compatible": [
      "WAR"
    ],
    "conflicting": []
  },
  "VICTORY": {
    "compatible": [
      "WAR"
    ],
    "conflicting": []
  },
  "VOLCANOS": {
    "compatible": [
      "EARTH",
      "FIRE",
      "MOUNTAINS"
    ],
    "conflicting": []
  },
  "WAR": {
    "compatible": [
      "CHAOS",
      "DEATH",
      "FORTRESSES",
      "VALOR",
      "VICTORY"
    ],
    "conflicting": []
  },
  "WATER": {
    "compatible": [
      "FISH",
      "NATURE"
    ],
    "conflicting": [
      "FIRE"
    ]
  },
  "WEALTH": {
    "compatible": [
      "JEWELS",
      "TRADE"
    ],
    "conflicting": [
      "SACRIFICE"
    ]
  },
  "WEATHER": {
    "compatible": [
      "NATURE",
      "SKY"
    ],
    "conflicting": []
  },
  "WIND": {
    "compatible": [
      "SKY"
    ],
    "conflicting": []
  },
  "WISDOM": {
    "compatible": [
      "SCHOLARSHIP"
    ],
    "conflicting": []
  },
  "WRITING": {
    "compatible": [
      "POETRY",
      "SCHOLARSHIP"
    ],
    "conflicting": []
  },
  "YOUTH": {
    "compatible": [
      "BIRTH",
      "CHILDREN",
      "LONGEVITY"
    ],
    "conflicting": [
      "DEATH"
    ]
  }
}
