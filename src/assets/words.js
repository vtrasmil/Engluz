const words = [
  {
    word: "addition",
    hint: "The process of adding numbers"
  },
  {
    word: "meeting",
    hint: "Event in which people come together"
  },
  {
    word: "number",
    hint: "Math symbol used for counting"
  },
  {
    word: "guitar",
    hint: "Musical instrument with strings"
  },
  {
    word: "sunshine",
    hint: "Bright and warm light from the sky"
  },
  {
    word: "ocean",
    hint: "Large body of saltwater"
  },
  {
    word: "computer",
    hint: "Electronic device for processing data"
  },
  {
    word: "library",
    hint: "Place to borrow books and study"
  },
  {
    word: "mountain",
    hint: "Tall landform with steep sides"
  },
  {
    word: "butterfly",
    hint: "Insect with colorful wings"
  },
  {
    word: "telephone",
    hint: "Device for making calls"
  },
  {
    word: "happiness",
    hint: "Feeling of joy and contentment"
  },
  {
    word: "football",
    hint: "Sport played with a round ball"
  },
  {
    word: "painting",
    hint: "Artistic creation using colors"
  },
  {
    word: "journey",
    hint: "Adventure or travel"
  },
  {
    word: "laughter",
    hint: "Sound of amusement"
  },
  {
    word: "adventure",
    hint: "Exciting experience or exploration"
  },
  {
    word: "chocolate",
    hint: "Sweet treat made from cocoa"
  },
  {
    word: "garden",
    hint: "Outdoor area with plants and flowers"
  },
  {
    word: "piano",
    hint: "Musical instrument with keys"
  },
  {
    word: "courage",
    hint: "Strength in the face of fear or danger"
  },
  {
    word: "umbrella",
    hint: "Device used to shield from rain"
  },
  {
    word: "hamburger",
    hint: "Popular fast-food sandwich"
  },
  {
    word: "fireworks",
    hint: "Explosive display of light and color"
  },
  {
    word: "captain",
    hint: "Leader of a ship or team"
  },
  {
    word: "rainbow",
    hint: "Colorful arc in the sky after rain"
  },
  {
    word: "bicycle",
    hint: "Two-wheeled vehicle for transportation"
  },
  {
    word: "diamond",
    hint: "Precious gemstone"
  },
  {
    word: "camera",
    hint: "Device for capturing photos"
  },
  {
    word: "sunglasses",
    hint: "Eyewear to protect from the sun"
  },
  {
    word: "volcano",
    hint: "Mountain that can erupt with lava"
  },
  {
    word: "puzzle",
    hint: "Game or toy requiring problem-solving"
  },
  {
    word: "flower",
    hint: "Blossoming plant"
  },
  {
    word: "cookie",
    hint: "Sweet baked treat"
  },
  {
    word: "treasure",
    hint: "Hidden valuable items"
  },
  {
    word: "starfish",
    hint: "Marine creature with arms"
  },
  {
    word: "jungle",
    hint: "Lush and dense forest"
  },
  {
    word: "whisper",
    hint: "Soft spoken words"
  },
  {
    word: "raincoat",
    hint: "Waterproof outerwear"
  },
  {
    word: "dragon",
    hint: "Mythical fire-breathing creature"
  },
  {
    word: "oxygen",
    hint: "Element essential for life"
  },
  {
    word: "octopus",
    hint: "Marine animal with tentacles"
  },
  {
    word: "astronaut",
    hint: "Person who travels in space"
  },
  {
    word: "robot",
    hint: "Automated machine"
  },
  {
    word: "shark",
    hint: "Predatory sea creature"
  },
  {
    word: "festival",
    hint: "Celebratory event or gathering"
  },
  {
    word: "zebra",
    hint: "Striped African mammal"
  },
  {
    word: "whale",
    hint: "Giant marine mammal"
  },
  {
    word: "ballet",
    hint: "Graceful dance performance"
  },
  {
    word: "globe",
    hint: "Spherical representation of Earth"
  },
  {
    word: "magic",
    hint: "Supernatural or mysterious power"
  },
  {
    word: "explore",
    hint: "To travel and discover new places"
  },
  {
    word: "candle",
    hint: "Wax stick with a wick for lighting"
  },
  {
    word: "island",
    hint: "Land surrounded by water"
  },
  {
    word: "parade",
    hint: "Procession or public celebration"
  },
  {
    word: "dream",
    hint: "Series of thoughts during sleep"
  },
  {
    word: "snowflake",
    hint: "Unique ice crystal"
  },
  {
    word: "rocket",
    hint: "Vehicle for space travel"
  },
  {
    word: "sunflower",
    hint: "Tall yellow flowering plant"
  },
  {
    word: "secret",
    hint: "Concealed or hidden information"
  },
  {
    word: "bookshelf",
    hint: "Furniture for storing books"
  },
  {
    word: "moonlight",
    hint: "Light from the moon"
  },
  {
    word: "penguin",
    hint: "Flightless aquatic bird"
  },
  {
    word: "puzzle",
    hint: "Brain-teasing game"
  },
  {
    word: "chimney",
    hint: "Smokestack on a house"
  },
  {
    word: "squirrel",
    hint: "Bushy-tailed rodent"
  },
  {
    word: "strawberry",
    hint: "Red juicy fruit"
  },
  {
    word: "camera",
    hint: "Device for capturing images"
  },
  {
    word: "mystery",
    hint: "Unknown or puzzling event"
  },
  {
    word: "whisper",
    hint: "Softly spoken words"
  },
  {
    word: "eagle",
    hint: "Large bird of prey"
  },
  {
    word: "fairy",
    hint: "Magical mythical creature"
  },
  {
    word: "garden",
    hint: "Area with cultivated plants"
  },
  {
    word: "butterfly",
    hint: "Insect with colorful wings"
  },
  {
    word: "flower",
    hint: "Blooming plant"
  },
  {
    word: "mountain",
    hint: "Tall landform with peaks"
  },
  {
    word: "rainbow",
    hint: "Colorful arc after rain"
  },
  {
    word: "shipwreck",
    hint: "Sunk or stranded ship"
  },
  {
    word: "sunrise",
    hint: "Dawn, the beginning of the day"
  },
  {
    word: "fireplace",
    hint: "Place for a controlled fire"
  },
  {
    word: "chocolate",
    hint: "Sweet treat made from cocoa"
  },
  {
    word: "jungle",
    hint: "Thick and lush forest"
  },
  {
    word: "dolphin",
    hint: "Marine mammal known for intelligence"
  },
  {
    word: "parrot",
    hint: "Colorful talking bird"
  },
  {
    word: "bicycle",
    hint: "Two-wheeled pedal-powered vehicle"
  },
  {
    word: "kingdom",
    hint: "Realm ruled by a monarch"
  },
  {
    word: "planet",
    hint: "Celestial body in orbit around a star"
  },
  {
    word: "raincoat",
    hint: "Waterproof outerwear"
  },
  {
    word: "volcano",
    hint: "Mountain that can erupt with lava"
  },
  {
    word: "whale",
    hint: "Giant marine mammal"
  },
  {
    word: "robot",
    hint: "Automated machine"
  },
  {
    word: "shark",
    hint: "Predatory sea creature"
  },
  {
    word: "festival",
    hint: "Celebratory event or gathering"
  },
  {
    word: "zebra",
    hint: "Striped African mammal"
  },
  {
    word: "magic",
    hint: "Supernatural or mysterious power"
  },
  {
    word: "explore",
    hint: "To travel and discover new places"
  },
  {
    word: "candle",
    hint: "Wax stick with a wick for lighting"
  },
  {
    word: "island",
    hint: "Land surrounded by water"
  },
  {
    word: "parade",
    hint: "Procession or public celebration"
  },
  {
    word: "dream",
    hint: "Series of thoughts during sleep"
  },
  {
    word: "snowflake",
    hint: "Unique ice crystal"
  },
  {
    word: "rocket",
    hint: "Vehicle for space travel"
  },
  {
    word: "sunflower",
    hint: "Tall yellow flowering plant"
  },
  {
    word: "secret",
    hint: "Concealed or hidden information"
  },
  {
    word: "bookshelf",
    hint: "Furniture for storing books"
  },
  {
    word: "moonlight",
    hint: "Light from the moon"
  },
  {
    word: "penguin",
    hint: "Flightless aquatic bird"
  },
  {
    word: "puzzle",
    hint: "Brain-teasing game"
  },
  {
    word: "chimney",
    hint: "Smokestack on a house"
  },
  {
    word: "squirrel",
    hint: "Bushy-tailed rodent"
  },
  {
    word: "strawberry",
    hint: "Red juicy fruit"
  },
  {
    word: "camera",
    hint: "Device for capturing images"
  },
  {
    word: "mystery",
    hint: "Unknown or puzzling event"
  },
  {
    word: "whisper",
    hint: "Softly spoken words"
  },
  {
    word: "eagle",
    hint: "Large bird of prey"
  },
  {
    word: "fairy",
    hint: "Magical mythical creature"
  },
  {
    word: "garden",
    hint: "Area with cultivated plants"
  },
  {
    word: "butterfly",
    hint: "Insect with colorful wings"
  },
  {
    word: "flower",
    hint: "Blooming plant"
  },
  {
    word: "mountain",
    hint: "Tall landform with peaks"
  },
  {
    word: "rainbow",
    hint: "Colorful arc after rain"
  },
  {
    word: "shipwreck",
    hint: "Sunk or stranded ship"
  },
  {
    word: "sunrise",
    hint: "Dawn, the beginning of the day"
  },
  {
    word: "fireplace",
    hint: "Place for a controlled fire"
  },
  {
    word: "chocolate",
    hint: "Sweet treat made from cocoa"
  },
  {
    word: "jungle",
    hint: "Thick and lush forest"
  },
  {
    word: "dolphin",
    hint: "Marine mammal known for intelligence"
  },
  {
    word: "parrot",
    hint: "Colorful talking bird"
  },
  {
    word: "bicycle",
    hint: "Two-wheeled pedal-powered vehicle"
  },
  {
    word: "kingdom",
    hint: "Realm ruled by a monarch"
  },
  {
    word: "planet",
    hint: "Celestial body in orbit around a star"
  },
  {
    word: "raincoat",
    hint: "Waterproof outerwear"
  },
  {
    word: "volcano",
    hint: "Mountain that can erupt with lava"
  },
  {
    word: "whale",
    hint: "Giant marine mammal"
  },
  {
    word: "robot",
    hint: "Automated machine"
  },
  {
    word: "shark",
    hint: "Predatory sea creature"
  },
  {
    word: "festival",
    hint: "Celebratory event or gathering"
  },
  {
    word: "zebra",
    hint: "Striped African mammal"
  },
  {
    word: "magic",
    hint: "Supernatural or mysterious power"
  },
  {
    word: "explore",
    hint: "To travel and discover new places"
  },
  {
    word: "candle",
    hint: "Wax stick with a wick for lighting"
  },
  {
    word: "island",
    hint: "Land surrounded by water"
  },
  {
    word: "parade",
    hint: "Procession or public celebration"
  },
  {
    word: "dream",
    hint: "Series of thoughts during sleep"
  },
  {
    word: "snowflake",
    hint: "Unique ice crystal"
  },
  {
    word: "rocket",
    hint: "Vehicle for space travel"
  },
  {
    word: "sunflower",
    hint: "Tall yellow flowering plant"
  },
  {
    word: "secret",
    hint: "Concealed or hidden information"
  },
  {
    word: "bookshelf",
    hint: "Furniture for storing books"
  },
  {
    word: "moonlight",
    hint: "Light from the moon"
  },
  {
    word: "penguin",
    hint: "Flightless aquatic bird"
  },
  {
    word: "puzzle",
    hint: "Brain-teasing game"
  },
  {
    word: "chimney",
    hint: "Smokestack on a house"
  },
  {
    word: "squirrel",
    hint: "Bushy-tailed rodent"
  },
  {
    word: "strawberry",
    hint: "Red juicy fruit"
  },
  {
    word: "camera",
    hint: "Device for capturing images"
  },
  {
    word: "mystery",
    hint: "Unknown or puzzling event"
  },
  {
    word: "whisper",
    hint: "Softly spoken words"
  },
  {
    word: "eagle",
    hint: "Large bird of prey"
  },
  {
    word: "fairy",
    hint: "Magical mythical creature"
  },
  {
    word: "garden",
    hint: "Area with cultivated plants"
  },
  {
    word: "butterfly",
    hint: "Insect with colorful wings"
  },
  {
    word: "flower",
    hint: "Blooming plant"
  },
  {
    word: "mountain",
    hint: "Tall landform with peaks"
  },
  {
    word: "rainbow",
    hint: "Colorful arc after rain"
  },
  {
    word: "shipwreck",
    hint: "Sunk or stranded ship"
  },
  {
    word: "sunrise",
    hint: "Dawn, the beginning of the day"
  },
  {
    word: "fireplace",
    hint: "Place for a controlled fire"
  },
  {
    word: "chocolate",
    hint: "Sweet treat made from cocoa"
  },
  {
    word: "jungle",
    hint: "Thick and lush forest"
  },
  {
    word: "dolphin",
    hint: "Marine mammal known for intelligence"
  },
  {
    word: "parrot",
    hint: "Colorful talking bird"
  },
  {
    word: "bicycle",
    hint: "Two-wheeled pedal-powered vehicle"
  },
  {
    word: "kingdom",
    hint: "Realm ruled by a monarch"
  },
  {
    word: "planet",
    hint: "Celestial body in orbit around a star"
  },
  {
    word: "raincoat",
    hint: "Waterproof outerwear"
  },
  {
    word: "volcano",
    hint: "Mountain that can erupt with lava"
  },
  {
    word: "whale",
    hint: "Giant marine mammal"
  },
  {
    word: "robot",
    hint: "Automated machine"
  },
  {
    word: "shark",
    hint: "Predatory sea creature"
  },
  {
    word: "festival",
    hint: "Celebratory event or gathering"
  },
  {
    word: "zebra",
    hint: "Striped African mammal"
  },
  {
    word: "magic",
    hint: "Supernatural or mysterious power"
  },
  {
    word: "explore",
    hint: "To travel and discover new places"
  },
  {
    word: "candle",
    hint: "Wax stick with a wick for lighting"
  },
  {
    word: "island",
    hint: "Land surrounded by water"
  },
  {
    word: "parade",
    hint: "Procession or public celebration"
  },
  {
    word: "dream",
    hint: "Series of thoughts during sleep"
  },
  {
    word: "snowflake",
    hint: "Unique ice crystal"
  },
  {
    word: "rocket",
    hint: "Vehicle for space travel"
  },
  {
    word: "sunflower",
    hint: "Tall yellow flowering plant"
  },
  {
    word: "secret",
    hint: "Concealed or hidden information"
  },
  {
    word: "bookshelf",
    hint: "Furniture for storing books"
  },
  {
    word: "moonlight",
    hint: "Light from the moon"
  },
  {
    word: "penguin",
    hint: "Flightless aquatic bird"
  },
  {
    word: "puzzle",
    hint: "Brain-teasing game"
  },
  {
    word: "chimney",
    hint: "Smokestack on a house"
  },
  {
    word: "squirrel",
    hint: "Bushy-tailed rodent"
  },
  {
    word: "strawberry",
    hint: "Red juicy fruit"
  },
  {
    word: "camera",
    hint: "Device for capturing images"
  },
  {
    word: "mystery",
    hint: "Unknown or puzzling event"
  },
  {
    word: "whisper",
    hint: "Softly spoken words"
  },
  {
    word: "eagle",
    hint: "Large bird of prey"
  },
  {
    word: "fairy",
    hint: "Magical mythical creature"
  },
  {
    word: "garden",
    hint: "Area with cultivated plants"
  },
  {
    word: "butterfly",
    hint: "Insect with colorful wings"
  },
  {
    word: "flower",
    hint: "Blooming plant"
  },
  {
    word: "mountain",
    hint: "Tall landform with peaks"
  },
  {
    word: "rainbow",
    hint: "Colorful arc after rain"
  },
  {
    word: "shipwreck",
    hint: "Sunk or stranded ship"
  },
  {
    word: "sunrise",
    hint: "Dawn, the beginning of the day"
  },
  {
    word: "fireplace",
    hint: "Place for a controlled fire"
  },
  {
    word: "chocolate",
    hint: "Sweet treat made from cocoa"
  },
  {
    word: "jungle",
    hint: "Thick and lush forest"
  },
  {
    word: "dolphin",
    hint: "Marine mammal known for intelligence"
  },
  {
    word: "parrot",
    hint: "Colorful talking bird"
  },
  {
    word: "bicycle",
    hint: "Two-wheeled pedal-powered vehicle"
  },
  {
    word: "kingdom",
    hint: "Realm ruled by a monarch"
  },
  {
    word: "planet",
    hint: "Celestial body in orbit around a star"
  },
  {
    word: "raincoat",
    hint: "Waterproof outerwear"
  },
  {
    word: "volcano",
    hint: "Mountain that can erupt with lava"
  },
  {
    word: "whale",
    hint: "Giant marine mammal"
  },
  {
    word: "robot",
    hint: "Automated machine"
  },
  {
    word: "shark",
    hint: "Predatory sea creature"
  },
  {
    word: "festival",
    hint: "Celebratory event or gathering"
  },
  {
    word: "zebra",
    hint: "Striped African mammal"
  },
  {
    word: "magic",
    hint: "Supernatural or mysterious power"
  },
  {
    word: "explore",
    hint: "To travel and discover new places"
  },
  {
    word: "candle",
    hint: "Wax stick with a wick for lighting"
  },
  {
    word: "island",
    hint: "Land surrounded by water"
  },
  {
    word: "parade",
    hint: "Procession or public celebration"
  },
  {
    word: "dream",
    hint: "Series of thoughts during sleep"
  },
  {
    word: "snowflake",
    hint: "Unique ice crystal"
  },
  {
    word: "rocket",
    hint: "Vehicle for space travel"
  },
  {
    word: "sunflower",
    hint: "Tall yellow flowering plant"
  },
  {
    word: "secret",
    hint: "Concealed or hidden information"
  },
  {
    word: "bookshelf",
    hint: "Furniture for storing books"
  },
  {
    word: "moonlight",
    hint: "Light from the moon"
  },
  {
    word: "penguin",
    hint: "Flightless aquatic bird"
  },
  {
    word: "puzzle",
    hint: "Brain-teasing game"
  },
  {
    word: "chimney",
    hint: "Smokestack on a house"
  },
  {
    word: "squirrel",
    hint: "Bushy-tailed rodent"
  },
  {
    word: "strawberry",
    hint: "Red juicy fruit"
  },
  {
    word: "camera",
    hint: "Device for capturing images"
  },
  {
    word: "mystery",
    hint: "Unknown or puzzling event"
  },
  {
    word: "whisper",
    hint: "Softly spoken words"
  },
  {
    word: "eagle",
    hint: "Large bird of prey"
  },
  {
    word: "fairy",
    hint: "Magical mythical creature"
  },
  {
    word: "garden",
    hint: "Area with cultivated plants"
  },
  {
    word: "butterfly",
    hint: "Insect with colorful wings"
  },
  {
    word: "flower",
    hint: "Blooming plant"
  },
  {
    word: "mountain",
    hint: "Tall landform with peaks"
  },
  {
    word: "rainbow",
    hint: "Colorful arc after rain"
  },
  {
    word: "shipwreck",
    hint: "Sunk or stranded ship"
  },
  {
    word: "sunrise",
    hint: "Dawn, the beginning of the day"
  },
  {
    word: "fireplace",
    hint: "Place for a controlled fire"
  },
  {
    word: "chocolate",
    hint: "Sweet treat made from cocoa"
  },
  {
    word: "jungle",
    hint: "Thick and lush forest"
  },
  {
    word: "dolphin",
    hint: "Marine mammal known for intelligence"
  },
  {
    word: "parrot",
    hint: "Colorful talking bird"
  },
  {
    word: "bicycle",
    hint: "Two-wheeled pedal-powered vehicle"
  },
  {
    word: "kingdom",
    hint: "Realm ruled by a monarch"
  },
  {
    word: "planet",
    hint: "Celestial body in orbit around a star"
  },
  {
    word: "raincoat",
    hint: "Waterproof outerwear"
  },
  {
    word: "volcano",
    hint: "Mountain that can erupt with lava"
  },
  {
    word: "whale",
    hint: "Giant marine mammal"
  },
  {
    word: "robot",
    hint: "Automated machine"
  },
  {
    word: "shark",
    hint: "Predatory sea creature"
  },
  {
    word: "festival",
    hint: "Celebratory event or gathering"
  },
  {
    word: "zebra",
    hint: "Striped African mammal"
  },
  {
    word: "magic",
    hint: "Supernatural or mysterious power"
  },
  {
    word: "explore",
    hint: "To travel and discover new places"
  },
  {
    word: "candle",
    hint: "Wax stick with a wick for lighting"
  },
  {
    word: "island",
    hint: "Land surrounded by water"
  },
  {
    word: "parade",
    hint: "Procession or public celebration"
  },
  {
    word: "dream",
    hint: "Series of thoughts during sleep"
  },
  {
    word: "snowflake",
    hint: "Unique ice crystal"
  },
  {
    word: "rocket",
    hint: "Vehicle for space travel"
  },
  {
    word: "sunflower",
    hint: "Tall yellow flowering plant"
  },
  {
    word: "secret",
    hint: "Concealed or hidden information"
  },
  {
    word: "bookshelf",
    hint: "Furniture for storing books"
  },
  {
    word: "moonlight",
    hint: "Light from the moon"
  },
  {
    word: "penguin",
    hint: "Flightless aquatic bird"
  },
  {
    word: "puzzle",
    hint: "Brain-teasing game"
  },
  {
    word: "chimney",
    hint: "Smokestack on a house"
  },
  {
    word: "squirrel",
    hint: "Bushy-tailed rodent"
  },
  {
    word: "strawberry",
    hint: "Red juicy fruit"
  },
  {
    word: "camera",
    hint: "Device for capturing images"
  },
  {
    word: "mystery",
    hint: "Unknown or puzzling event"
  },
  {
    word: "whisper",
    hint: "Softly spoken words"
  },
  {
    word: "eagle",
    hint: "Large bird of prey"
  },
  {
    word: "fairy",
    hint: "Magical mythical creature"
  },
  {
    word: "garden",
    hint: "Area with cultivated plants"
  },
  {
    word: "butterfly",
    hint: "Insect with colorful wings"
  },
  {
    word: "flower",
    hint: "Blooming plant"
  },
  {
    word: "mountain",
    hint: "Tall landform with peaks"
  },
  {
    word: "rainbow",
    hint: "Colorful arc after rain"
  },
  {
    word: "shipwreck",
    hint: "Sunk or stranded ship"
  },
  {
    word: "sunrise",
    hint: "Dawn, the beginning of the day"
  },
  {
    word: "fireplace",
    hint: "Place for a controlled fire"
  },
  {
    word: "chocolate",
    hint: "Sweet treat made from cocoa"
  },
  {
    word: "jungle",
    hint: "Thick and lush forest"
  },
  {
    word: "dolphin",
    hint: "Marine mammal known for intelligence"
  },
  {
    word: "parrot",
    hint: "Colorful talking bird"
  },
  {
    word: "bicycle",
    hint: "Two-wheeled pedal-powered vehicle"
  },
  {
    word: "kingdom",
    hint: "Realm ruled by a monarch"
  },
  {
    word: "planet",
    hint: "Celestial body in orbit around a star"
  },
  {
    word: "raincoat",
    hint: "Waterproof outerwear"
  },
  {
    word: "volcano",
    hint: "Mountain that can erupt with lava"
  },
  {
    word: "whale",
    hint: "Giant marine mammal"
  },
  {
    word: "robot",
    hint: "Automated machine"
  },
  {
    word: "shark",
    hint: "Predatory sea creature"
  },
  {
    word: "festival",
    hint: "Celebratory event or gathering"
  },
  {
    word: "zebra",
    hint: "Striped African mammal"
  },
  {
    word: "magic",
    hint: "Supernatural or mysterious power"
  },
  {
    word: "explore",
    hint: "To travel and discover new places"
  },
  {
    word: "candle",
    hint: "Wax stick with a wick for lighting"
  },
  {
    word: "island",
    hint: "Land surrounded by water"
  },
  {
    word: "parade",
    hint: "Procession or public celebration"
  },
  {
    word: "dream",
    hint: "Series of thoughts during sleep"
  },
  {
    word: "snowflake",
    hint: "Unique ice crystal"
  },
  {
    word: "rocket",
    hint: "Vehicle for space travel"
  },
  {
    word: "sunflower",
    hint: "Tall yellow flowering plant"
  },
  {
    word: "secret",
    hint: "Concealed or hidden information"
  },
  {
    word: "bookshelf",
    hint: "Furniture for storing books"
  },
  {
    word: "moonlight",
    hint: "Light from the moon"
  },
  {
    word: "penguin",
    hint: "Flightless aquatic bird"
  },
  {
    word: "puzzle",
    hint: "Brain-teasing game"
  },
  {
    word: "chimney",
    hint: "Smokestack on a house"
  },
  {
    word: "squirrel",
    hint: "Bushy-tailed rodent"
  },
  {
    word: "strawberry",
    hint: "Red juicy fruit"
  },
  {
    word: "camera",
    hint: "Device for capturing images"
  },
  {
    word: "mystery",
    hint: "Unknown or puzzling event"
  },
  {
    word: "whisper",
    hint: "Softly spoken words"
  },
  {
    word: "eagle",
    hint: "Large bird of prey"
  },
  {
    word: "fairy",
    hint: "Magical mythical creature"
  },
  {
    word: "garden",
    hint: "Area with cultivated plants"
  },
  {
    word: "butterfly",
    hint: "Insect with colorful wings"
  },
  {
    word: "flower",
    hint: "Blooming plant"
  },
  {
    word: "mountain",
    hint: "Tall landform with peaks"
  },
  {
    word: "rainbow",
    hint: "Colorful arc after rain"
  },
  {
    word: "shipwreck",
    hint: "Sunk or stranded ship"
  },
  {
    word: "sunrise",
    hint: "Dawn, the beginning of the day"
  },
  {
    word: "fireplace",
    hint: "Place for a controlled fire"
  },
  {
    word: "chocolate",
    hint: "Sweet treat made from cocoa"
  },
  {
    word: "jungle",
    hint: "Thick and lush forest"
  },
  {
    word: "dolphin",
    hint: "Marine mammal known for intelligence"
  },
  {
    word: "parrot",
    hint: "Colorful talking bird"
  },
  {
    word: "bicycle",
    hint: "Two-wheeled pedal-powered vehicle"
  },
  {
    word: "kingdom",
    hint: "Realm ruled by a monarch"
  },
  {
    word: "planet",
    hint: "Celestial body in orbit around a star"
  },
  {
    word: "raincoat",
    hint: "Waterproof outerwear"
  },
  {
    word: "volcano",
    hint: "Mountain that can erupt with lava"
  },
  {
    word: "whale",
    hint: "Giant marine mammal"
  },
  {
    word: "robot",
    hint: "Automated machine"
  },
  {
    word: "shark",
    hint: "Predatory sea creature"
  },
  {
    word: "festival",
    hint: "Celebratory event or gathering"
  },
  {
    word: "zebra",
    hint: "Striped African mammal"
  },
  {
    word: "magic",
    hint: "Supernatural or mysterious power"
  },
  {
    word: "explore",
    hint: "To travel and discover new places"
  },
  {
    word: "candle",
    hint: "Wax stick with a wick for lighting"
  },
  {
    word: "island",
    hint: "Land surrounded by water"
  },
  {
    word: "parade",
    hint: "Procession or public celebration"
  },
  {
    word: "dream",
    hint: "Series of thoughts during sleep"
  },
  {
    word: "snowflake",
    hint: "Unique ice crystal"
  },
  {
    word: "rocket",
    hint: "Vehicle for space travel"
  },
  {
    word: "sunflower",
    hint: "Tall yellow flowering plant"
  },
  {
    word: "secret",
    hint: "Concealed or hidden information"
  },
  {
    word: "bookshelf",
    hint: "Furniture for storing books"
  },
  {
    word: "moonlight",
    hint: "Light from the moon"
  },
  {
    word: "penguin",
    hint: "Flightless aquatic bird"
  },
  {
    word: "puzzle",
    hint: "Brain-teasing game"
  },
]

export default words;