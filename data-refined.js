const wordData = [
  {
    arabic: "عَمَّ",
    english: "About what",
    answer: {
      du: "Worüber",
      jp: [{ text: "何", furigana: "なに" }, { text: "について" }],
    },
  },
  {
    arabic: "يَتَسَآءَلُونَ",
    english: "are they asking one another?",
    answer: {
      du: "fragen sie einander?",
      jp: [
        { text: "彼", furigana: "かれ" },
        { text: "らは" },
        { text: "問", furigana: "と" },
        { text: "い合う？" },
      ],
    },
  },
  {
    arabic: "عَنِ",
    english: "About",
    answer: {
      du: "Über",
      jp: [{ text: "について" }],
    },
  },
  {
    arabic: "ٱلنَّبَإِ",
    english: "the News",
    answer: {
      du: "die Nachricht",
      jp: [{ text: "知", furigana: "し" }, { text: "らせ" }],
    },
  },
  {
    arabic: "ٱلْعَظِيمِ",
    english: "the Great,",
    answer: {
      du: "der Große,",
      jp: [
        { text: "偉", furigana: "い" },
        { text: "大", furigana: "だい" },
      ],
    },
  },
  {
    arabic: "ٱلَّذِى",
    english: "(About) which",
    answer: {
      du: "worüber",
      jp: [{ text: "その" }],
    },
  },
  {
    arabic: "هُمْ",
    english: "they",
    answer: {
      du: "sie",
      jp: [{ text: "彼", furigana: "かれ" }, { text: "ら" }],
    },
  },
  {
    arabic: "فِيهِ",
    english: "(are) concerning it",
    answer: {
      du: "darüber",
      jp: [{ text: "それに" }],
    },
  },
  {
    arabic: "مُخْتَلِفُونَ",
    english: "(in) disagreement.",
    answer: {
      du: "in Uneinigkeit.",
      jp: [{ text: "分", furigana: "わ" }, { text: "かれている" }],
    },
  },
  {
    arabic: "كَلَّا",
    english: "Nay!",
    answer: {
      du: "Nein!",
      jp: [{ text: "いや！" }],
    },
  },
  {
    arabic: "سَيَعْلَمُونَ",
    english: "Soon they will know.",
    answer: {
      du: "Bald werden sie es wissen.",
      jp: [{ text: "すぐ" }, { text: "知", furigana: "し" }, { text: "る" }],
    },
  },
  {
    arabic: "ثُمَّ",
    english: "Then",
    answer: {
      du: "Dann",
      jp: [{ text: "それから" }],
    },
  },
  {
    arabic: "أَلَمْ",
    english: "Have not",
    answer: {
      du: "Haben nicht",
      jp: [{ text: "では" }],
    },
  },
  {
    arabic: "نَجْعَلِ",
    english: "We made",
    answer: {
      du: "Wir machten",
      jp: [{ text: "作", furigana: "つく" }, { text: "った" }],
    },
  },
  {
    arabic: "ٱلْأَرْضَ",
    english: "the earth",
    answer: {
      du: "die Erde",
      jp: [{ text: "地", furigana: "ち" }],
    },
  },
  {
    arabic: "مِهَـٰدًا",
    english: "a resting place?",
    answer: {
      du: "eine Ruhestätte?",
      jp: [
        { text: "安", furigana: "あん" },
        { text: "住", furigana: "じゅう" },
        { text: "の地？" },
      ],
    },
  },
  {
    arabic: "وَٱلْجِبَالَ",
    english: "And the mountains",
    answer: {
      du: "Und die Berge",
      jp: [{ text: "山", furigana: "やま" }, { text: "々" }],
    },
  },

  // second batch
  {
    arabic: "أَوْتَادًا",
    english: "(as) pegs,",
    answer: {
      du: "als Pflöcke,",
      jp: [{ text: "杭", furigana: "くい" }, { text: "として" }],
    },
  },
  {
    arabic: "وَخَلَقْنَـٰكُمْ",
    english: "And We created you",
    answer: {
      du: "Und Wir erschufen euch",
      jp: [
        { text: "私", furigana: "わたし" },
        { text: "たちはあなたを" },
        { text: "創", furigana: "そう" },
        { text: "造した" },
      ],
    },
  },
  {
    arabic: "أَزْوَٲجًا",
    english: "(in) pairs,",
    answer: {
      du: "in Paaren,",
      jp: [{ text: "対", furigana: "つい" }, { text: "で" }],
    },
  },
  {
    arabic: "وَجَعَلْنَا",
    english: "And We made",
    answer: {
      du: "Und Wir machten",
      jp: [
        { text: "私", furigana: "わたし" },
        { text: "たちは作", furigana: "つく" },
        { text: "った" },
      ],
    },
  },
  {
    arabic: "نَوْمَكُمْ",
    english: "your sleep",
    answer: {
      du: "euren Schlaf",
      jp: [{ text: "眠", furigana: "ねむ" }, { text: "り" }],
    },
  },
  {
    arabic: "سُبَاتًا",
    english: "(for) rest,",
    answer: {
      du: "zur Erholung,",
      jp: [{ text: "休", furigana: "きゅう" }, { text: "み" }],
    },
  },
  {
    arabic: "ٱلَّيْلَ",
    english: "the night",
    answer: {
      du: "die Nacht",
      jp: [{ text: "夜", furigana: "よる" }],
    },
  },
  {
    arabic: "لِبَاسًا",
    english: "(as) covering,",
    answer: {
      du: "als Bedeckung,",
      jp: [{ text: "覆", furigana: "おお" }, { text: "い" }],
    },
  },
  {
    arabic: "ٱلنَّهَارَ",
    english: "the day",
    answer: {
      du: "der Tag",
      jp: [{ text: "昼", furigana: "ひる" }],
    },
  },
  {
    arabic: "مَعَاشًا",
    english: "(for) livelihood,",
    answer: {
      du: "zum Lebensunterhalt,",
      jp: [{ text: "生", furigana: "せい" }, { text: "活" }],
    },
  },
  {
    arabic: "وَبَنَيْنَا",
    english: "And We constructed",
    answer: {
      du: "Und Wir errichteten",
      jp: [
        { text: "私", furigana: "わたし" },
        { text: "たちは建", furigana: "た" },
        { text: "てた" },
      ],
    },
  },
  {
    arabic: "فَوْقَكُمْ",
    english: "over you",
    answer: {
      du: "über euch",
      jp: [{ text: "上", furigana: "うえ" }, { text: "に" }],
    },
  },
  {
    arabic: "سَبْعًا",
    english: "seven",
    answer: {
      du: "sieben",
      jp: [{ text: "七", furigana: "しち" }, { text: "つ" }],
    },
  },
  {
    arabic: "شِدَادًا",
    english: "strong,",
    answer: {
      du: "stark,",
      jp: [{ text: "強", furigana: "つよ" }, { text: "い" }],
    },
  },
  {
    arabic: "سِرَاجًا",
    english: "a lamp",
    answer: {
      du: "eine Lampe",
      jp: [{ text: "灯", furigana: "とう" }],
    },
  },
  {
    arabic: "وَهَّاجًا",
    english: "burning,",
    answer: {
      du: "brennend,",
      jp: [{ text: "燃", furigana: "も" }, { text: "える" }],
    },
  },
  {
    arabic: "وَأَنزَلْنَا",
    english: "And We sent down",
    answer: {
      du: "Und Wir sandten herab",
      jp: [
        { text: "私", furigana: "わたし" },
        { text: "たちは降", furigana: "お" },
        { text: "ろした" },
      ],
    },
  },

  // third batch
  {
    arabic: "مِنَ",
    english: "from",
    answer: {
      du: "von",
      jp: [{ text: "から" }],
    },
  },
  {
    arabic: "ٱلْمُعْصِرَٲتِ",
    english: "the rain clouds",
    answer: {
      du: "den Regenwolken",
      jp: [{ text: "雨雲", furigana: "あまぐも" }],
    },
  },
  {
    arabic: "مَآءً",
    english: "water",
    answer: {
      du: "Wasser",
      jp: [{ text: "水", furigana: "みず" }],
    },
  },
  {
    arabic: "ثَجَّاجًا",
    english: "pouring abundantly,",
    answer: {
      du: "reichlich strömend,",
      jp: [{ text: "豊", furigana: "ゆた" }, { text: "かに降る" }],
    },
  },
  {
    arabic: "لِّنُخْرِجَ",
    english: "That We may bring forth",
    answer: {
      du: "Damit Wir hervorbringen",
      jp: [{ text: "生", furigana: "う" }, { text: "み出すため" }],
    },
  },
  {
    arabic: "بِهِۦ",
    english: "thereby",
    answer: {
      du: "dadurch",
      jp: [{ text: "それで" }],
    },
  },
  {
    arabic: "حَبًّا",
    english: "grain",
    answer: {
      du: "Korn",
      jp: [{ text: "穀物", furigana: "こくもつ" }],
    },
  },
  {
    arabic: "وَنَبَاتًا",
    english: "and vegetation,",
    answer: {
      du: "und Pflanzen,",
      jp: [{ text: "植物", furigana: "しょくぶつ" }],
    },
  },
  {
    arabic: "وَجَنَّـٰتٍ",
    english: "And gardens",
    answer: {
      du: "Und Gärten",
      jp: [{ text: "庭園", furigana: "ていえん" }],
    },
  },
  {
    arabic: "أَلْفَافًا",
    english: "(of) thick foliage.",
    answer: {
      du: "mit dichtem Laub.",
      jp: [{ text: "茂", furigana: "しげ" }, { text: "った葉" }],
    },
  },
  {
    arabic: "إِنَّ",
    english: "Indeed,",
    answer: {
      du: "Wahrlich,",
      jp: [{ text: "本当に" }],
    },
  },
  {
    arabic: "يَوْمَ",
    english: "(the) Day",
    answer: {
      du: "der Tag",
      jp: [{ text: "日", furigana: "ひ" }],
    },
  },
  {
    arabic: "ٱلْفَصْلِ",
    english: "(of) the Judgment",
    answer: {
      du: "des Gerichts",
      jp: [{ text: "審判", furigana: "しんぱん" }, { text: "の日" }],
    },
  },
  {
    arabic: "كَانَ",
    english: "is",
    answer: {
      du: "ist",
      jp: [{ text: "である" }],
    },
  },
  {
    arabic: "مِيقَـٰتًا",
    english: "an appointed time,",
    answer: {
      du: "eine festgelegte Zeit,",
      jp: [{ text: "定", furigana: "さだ" }, { text: "められた時" }],
    },
  },
  {
    arabic: "يُنفَخُ",
    english: "is blown",
    answer: {
      du: "wird geblasen",
      jp: [{ text: "吹", furigana: "ふ" }, { text: "かれる" }],
    },
  },
  {
    arabic: "فِى",
    english: "in",
    answer: {
      du: "in",
      jp: [{ text: "にて" }],
    },
  },

  // fourth batch
  {
        "arabic": "ٱلصُّورِ",
        "english": "the trumpet",
        "answer": {
            "du": "die Trompete",
            "jp": [
                {"text": "ラッパ"}
            ]
        }
    },
    {
        "arabic": "فَتَأْتُونَ",
        "english": "and you will come forth",
        "answer": {
            "du": "und ihr werdet hervorkommen",
            "jp": [
                {"text": "現", "furigana": "あらわ"},
                {"text": "れる"}
            ]
        }
    },
    {
        "arabic": "أَفْوَاجًا",
        "english": "(in) crowds,",
        "answer": {
            "du": "in Scharen,",
            "jp": [
                {"text": "群", "furigana": "む"},
                {"text": "れ"}
            ]
        }
    },
    {
        "arabic": "وَفُتِحَتِ",
        "english": "And is opened",
        "answer": {
            "du": "Und wird geöffnet",
            "jp": [
                {"text": "開", "furigana": "ひら"},
                {"text": "かれる"}
            ]
        }
    },
    {
        "arabic": "ٱلسَّمَآءُ",
        "english": "the heaven",
        "answer": {
            "du": "der Himmel",
            "jp": [
                {"text": "天", "furigana": "てん"}
            ]
        }
    },
    {
        "arabic": "فَكَانَتْ",
        "english": "and becomes",
        "answer": {
            "du": "und wird",
            "jp": [
                {"text": "となる"}
            ]
        }
    },
    {
        "arabic": "أَبْوَٲبًا",
        "english": "gateways,",
        "answer": {
            "du": "Tore,",
            "jp": [
                {"text": "門", "furigana": "もん"}
            ]
        }
    },
    {
        "arabic": "وَسُيِّرَتِ",
        "english": "And are moved",
        "answer": {
            "du": "Und werden bewegt",
            "jp": [
                {"text": "動", "furigana": "うご"},
                {"text": "かされる"}
            ]
        }
    },
    {
        "arabic": "ٱلْجِبَالُ",
        "english": "the mountains",
        "answer": {
            "du": "die Berge",
            "jp": [
                {"text": "山", "furigana": "やま"}
            ]
        }
    },
    {
        "arabic": "سَرَابًا",
        "english": "a mirage.",
        "answer": {
            "du": "eine Fata Morgana.",
            "jp": [
                {"text": "蜃気楼", "furigana": "しんきろう"}
            ]
        }
    },
    {
        "arabic": "إِنَّ",
        "english": "Indeed,",
        "answer": {
            "du": "Wahrlich,",
            "jp": [
                {"text": "本当に"}
            ]
        }
    },
    {
        "arabic": "جَهَنَّمَ",
        "english": "Hell",
        "answer": {
            "du": "Hölle",
            "jp": [
                {"text": "地獄", "furigana": "じごく"}
            ]
        }
    },
    {
        "arabic": "كَانَتْ",
        "english": "is",
        "answer": {
            "du": "ist",
            "jp": [
                {"text": "である"}
            ]
        }
    },
    {
        "arabic": "مِرْصَادًا",
        "english": "lying in wait,",
        "answer": {
            "du": "auflauernd,",
            "jp": [
                {"text": "待", "furigana": "ま"},
                {"text": "ち伏せている"}
            ]
        }
    },
    {
        "arabic": "لِّلطَّـٰغِينَ",
        "english": "For the transgressors",
        "answer": {
            "du": "Für die Übertreter,",
            "jp": [
                {"text": "罪", "furigana": "つみ"},
                {"text": "人", "furigana": "びと"},
                {"text": "のために"}
            ]
        }
    },
    {
        "arabic": "مَـَٔـابًا",
        "english": "a place of return,",
        "answer": {
            "du": "ein Rückkehrort,",
            "jp": [
                {"text": "帰", "furigana": "かえ"},
                {"text": "る場所"}
            ]
        }
    },
    {
        "arabic": "لَّـٰبِثِينَ",
        "english": "(They will) be remaining",
        "answer": {
            "du": "(werden) verweilen",
            "jp": [
                {"text": "留", "furigana": "りゅう"},
                {"text": "まる"}
            ]
        }
    },
    {
        "arabic": "فِيهَآ",
        "english": "therein",
        "answer": {
            "du": "darin",
            "jp": [
                {"text": "そこに"}
            ]
        }
    },

    // fifth batch
     {
        "arabic": "أَحْقَابًا",
        "english": "(for) ages.",
        "answer": {
            "du": "(für) Zeitalter.",
            "jp": [
                {"text": "長", "furigana": "なが"},
                {"text": "い"},
                {"text": "歳", "furigana": "さい"},
                {"text": "月", "furigana": "げつ"}
            ]
        }
    },
    {
        "arabic": "لَّا",
        "english": "Not",
        "answer": {
            "du": "Nicht",
            "jp": [
                {"text": "～ない"}
            ]
        }
    },
    {
        "arabic": "يَذُوقُونَ",
        "english": "they will taste",
        "answer": {
            "du": "werden sie schmecken",
            "jp": [
                {"text": "味", "furigana": "あじ"},
                {"text": "わない"}
            ]
        }
    },
    {
        "arabic": "فِيهَا",
        "english": "therein",
        "answer": {
            "du": "darin",
            "jp": [
                {"text": "そ", "furigana": "そこ"},
                {"text": "で"}
            ]
        }
    },
    {
        "arabic": "بَرْدًا",
        "english": "coolness",
        "answer": {
            "du": "Kühle",
            "jp": [
                {"text": "涼", "furigana": "りょう"},
                {"text": "しさ"}
            ]
        }
    },
    {
        "arabic": "وَلَا",
        "english": "and not",
        "answer": {
            "du": "und nicht",
            "jp": [
                {"text": "また～ない"}
            ]
        }
    },
    {
        "arabic": "شَرَابًا",
        "english": "any drink,",
        "answer": {
            "du": "irgendein Getränk,",
            "jp": [
                {"text": "飲", "furigana": "いん"},
                {"text": "み", "furigana": "み"},
                {"text": "物", "furigana": "もの"}
            ]
        }
    },
    {
        "arabic": "إِلَّا",
        "english": "Except",
        "answer": {
            "du": "Außer",
            "jp": [
                {"text": "ただし"}
            ]
        }
    },
    {
        "arabic": "حَمِيمًا",
        "english": "scalding water",
        "answer": {
            "du": "kochendes Wasser",
            "jp": [
                {"text": "熱", "furigana": "ねっ"},
                {"text": "湯", "furigana": "とう"}
            ]
        }
    },
    {
        "arabic": "وَغَسَّاقًا",
        "english": "and purulence,",
        "answer": {
            "du": "und Eiter,",
            "jp": [
                {"text": "膿", "furigana": "のう"},
                {"text": "血", "furigana": "けつ"}
            ]
        }
    },
    {
        "arabic": "جَزَآءً",
        "english": "A recompense",
        "answer": {
            "du": "Eine Vergeltung",
            "jp": [
                {"text": "報", "furigana": "ほう"},
                {"text": "い"}
            ]
        }
    },
    {
        "arabic": "وِفَاقًا",
        "english": "appropriate.",
        "answer": {
            "du": "angemessen.",
            "jp": [
                {"text": "相", "furigana": "そう"},
                {"text": "応", "furigana": "おう"},
                {"text": "しい"}
            ]
        }
    },
    {
        "arabic": "إِنَّهُمْ",
        "english": "Indeed, they",
        "answer": {
            "du": "Wahrlich, sie",
            "jp": [
                {"text": "彼", "furigana": "かれ"},
                {"text": "らは"}
            ]
        }
    },
    {
        "arabic": "كَانُواْ",
        "english": "were",
        "answer": {
            "du": "waren",
            "jp": [
                {"text": "～だった"}
            ]
        }
    },
    {
        "arabic": "لَا",
        "english": "not",
        "answer": {
            "du": "nicht",
            "jp": [
                {"text": "～ない"}
            ]
        }
    },
    {
        "arabic": "يَرْجُونَ",
        "english": "expecting",
        "answer": {
            "du": "erwartend",
            "jp": [
                {"text": "期", "furigana": "き"},
                {"text": "待", "furigana": "たい"},
                {"text": "しなかった"}
            ]
        }
    },
    {
        "arabic": "حِسَابًا",
        "english": "an account,",
        "answer": {
            "du": "eine Abrechnung,",
            "jp": [
                {"text": "裁", "furigana": "さい"},
                {"text": "きを"}
            ]
        }
    },

    // sixth batch
    {
        "arabic": "وَكَذَّبُواْ",
        "english": "And denied",
        "answer": {
            "du": "Und leugneten",
            "jp": [
                {"text": "そして"},
                {"text": "否", "furigana": "ひ"},
                {"text": "定", "furigana": "てい"},
                {"text": "した"}
            ]
        }
    },
    {
        "arabic": "بِـَٔـايَـٰتِنَا",
        "english": "Our Signs",
        "answer": {
            "du": "Unsere Zeichen",
            "jp": [
                {"text": "わが"},
                {"text": "印", "furigana": "しるし"}
            ]
        }
    },
    {
        "arabic": "كِذَّابًا",
        "english": "(with) denial.",
        "answer": {
            "du": "(mit) Leugnung.",
            "jp": [
                {"text": "否", "furigana": "ひ"},
                {"text": "定", "furigana": "てい"},
                {"text": "して"}
            ]
        }
    },
    {
        "arabic": "وَكُلَّ",
        "english": "And every",
        "answer": {
            "du": "Und jedes",
            "jp": [
                {"text": "すべての"}
            ]
        }
    },
    {
        "arabic": "شَىْءٍ",
        "english": "thing",
        "answer": {
            "du": "Ding",
            "jp": [
                {"text": "物", "furigana": "もの"}
            ]
        }
    },
    {
        "arabic": "أَحْصَيْنَـٰهُ",
        "english": "We have enumerated it",
        "answer": {
            "du": "haben Wir es erfasst",
            "jp": [
                {"text": "記", "furigana": "き"},
                {"text": "録", "furigana": "ろく"},
                {"text": "した"}
            ]
        }
    },
    {
        "arabic": "كِتَـٰبًا",
        "english": "(in) a Book.",
        "answer": {
            "du": "(in) einem Buch.",
            "jp": [
                {"text": "書", "furigana": "しょ"},
                {"text": "に"}
            ]
        }
    },
    {
        "arabic": "فَذُوقُواْ",
        "english": "So taste,",
        "answer": {
            "du": "So kostet,",
            "jp": [
                {"text": "味", "furigana": "あじ"},
                {"text": "わえ"}
            ]
        }
    },
    {
        "arabic": "فَلَن",
        "english": "and never",
        "answer": {
            "du": "und niemals",
            "jp": [
                {"text": "決", "furigana": "けっ"},
                {"text": "して"}
            ]
        }
    },
    {
        "arabic": "نَّزِيدَكُمْ",
        "english": "We will increase you",
        "answer": {
            "du": "werden Wir euch vermehren",
            "jp": [
                {"text": "増", "furigana": "ぞう"},
                {"text": "やす"}
            ]
        }
    },
    {
        "arabic": "إِلَّا",
        "english": "except",
        "answer": {
            "du": "außer",
            "jp": [
                {"text": "～だけ"}
            ]
        }
    },
    {
        "arabic": "عَذَابًا",
        "english": "(in) punishment.",
        "answer": {
            "du": "(an) Strafe.",
            "jp": [
                {"text": "罰", "furigana": "ばつ"}
            ]
        }
    },
    {
        "arabic": "إِنَّ",
        "english": "Indeed,",
        "answer": {
            "du": "Wahrlich,",
            "jp": [
                {"text": "本当", "furigana": "ほんとう"},
                {"text": "に"}
            ]
        }
    },
    {
        "arabic": "لِلْمُتَّقِينَ",
        "english": "for the righteous",
        "answer": {
            "du": "für die Gottesfürchtigen",
            "jp": [
                {"text": "敬", "furigana": "けい"},
                {"text": "虔", "furigana": "けん"},
                {"text": "な者"}
            ]
        }
    },
    {
        "arabic": "مَفَازًا",
        "english": "(is) success,",
        "answer": {
            "du": "(ist) Erfolg,",
            "jp": [
                {"text": "成", "furigana": "せい"},
                {"text": "功", "furigana": "こう"}
            ]
        }
    },
    {
        "arabic": "حَدَآئِقَ",
        "english": "Gardens",
        "answer": {
            "du": "Gärten",
            "jp": [
                {"text": "楽", "furigana": "らく"},
                {"text": "園", "furigana": "えん"}
            ]
        }
    },
    {
        "arabic": "وَأَعْنَـٰبًا",
        "english": "and grapevines,",
        "answer": {
            "du": "und Weinstöcke,",
            "jp": [
                {"text": "葡萄", "furigana": "ぶどう"}
            ]
        }
    },
    {
        "arabic": "وَكَوَاعِبَ",
        "english": "And splendid companions",
        "answer": {
            "du": "Und prächtige Gefährtinnen",
            "jp": [
                {"text": "美", "furigana": "び"},
                {"text": "しい"},
                {"text": "伴", "furigana": "はん"},
                {"text": "侶", "furigana": "りょ"}
            ]
        }
    },

    // seventh batch
     {
        "arabic": "أَتْرَابًا",
        "english": "well-matched,",
        "answer": {
            "du": "gleichaltrig,",
            "jp": [
                {"text": "同", "furigana": "どう"},
                {"text": "年", "furigana": "ねん"},
                {"text": "の"}
            ]
        }
    },
    {
        "arabic": "وَكَأْسًا",
        "english": "And a cup",
        "answer": {
            "du": "Und einen Becher",
            "jp": [
                {"text": "杯", "furigana": "はい"}
            ]
        }
    },
    {
        "arabic": "دِهَاقًا",
        "english": "full.",
        "answer": {
            "du": "voll.",
            "jp": [
                {"text": "満", "furigana": "まん"},
                {"text": "ちた"}
            ]
        }
    },
    {
        "arabic": "لَّا",
        "english": "Not",
        "answer": {
            "du": "Nicht",
            "jp": [
                {"text": "～ない"}
            ]
        }
    },
    {
        "arabic": "يَسْمَعُونَ",
        "english": "they will hear",
        "answer": {
            "du": "werden sie hören",
            "jp": [
                {"text": "聞", "furigana": "き"},
                {"text": "こえない"}
            ]
        }
    },
    {
        "arabic": "فِيهَا",
        "english": "therein",
        "answer": {
            "du": "darin",
            "jp": [
                {"text": "そこでは"}
            ]
        }
    },
    {
        "arabic": "لَغْوًا",
        "english": "any vain talk",
        "answer": {
            "du": "irgendein eitles Gerede",
            "jp": [
                {"text": "無", "furigana": "む"},
                {"text": "駄", "furigana": "だ"},
                {"text": "話"}
            ]
        }
    },
    {
        "arabic": "وَلَا",
        "english": "and not",
        "answer": {
            "du": "und nicht",
            "jp": [
                {"text": "また～ない"}
            ]
        }
    },
    {
        "arabic": "كِذَّٲبًا",
        "english": "any falsehood,",
        "answer": {
            "du": "irgendeine Lüge,",
            "jp": [
                {"text": "偽", "furigana": "ぎ"},
                {"text": "り"}
            ]
        }
    },
    {
        "arabic": "جَزَآءً",
        "english": "(As) a reward",
        "answer": {
            "du": "(Als) Belohnung",
            "jp": [
                {"text": "報", "furigana": "ほう"},
                {"text": "い"}
            ]
        }
    },
    {
        "arabic": "مِّن",
        "english": "from",
        "answer": {
            "du": "von",
            "jp": [
                {"text": "～から"}
            ]
        }
    },
    {
        "arabic": "رَّبِّكَ",
        "english": "your Lord,",
        "answer": {
            "du": "deinem Herrn,",
            "jp": [
                {"text": "主", "furigana": "しゅ"},
                {"text": "からの"}
            ]
        }
    },
    {
        "arabic": "عَطَآءً",
        "english": "a gift",
        "answer": {
            "du": "ein Geschenk",
            "jp": [
                {"text": "授", "furigana": "じゅ"},
                {"text": "け"}
            ]
        }
    },
    {
        "arabic": "حِسَابًا",
        "english": "(according to) account,",
        "answer": {
            "du": "(entsprechend) Berechnung,",
            "jp": [
                {"text": "計", "furigana": "けい"},
                {"text": "算", "furigana": "さん"},
                {"text": "に"}
            ]
        }
    },
    {
        "arabic": "رَّبِّ",
        "english": "Lord",
        "answer": {
            "du": "Herr",
            "jp": [
                {"text": "主", "furigana": "しゅ"}
            ]
        }
    },
    {
        "arabic": "ٱلسَّمَـٰوَٲتِ",
        "english": "(of) the heavens",
        "answer": {
            "du": "(der) Himmel",
            "jp": [
                {"text": "天", "furigana": "てん"},
                {"text": "の"}
            ]
        }
    },
    {
        "arabic": "وَٱلْأَرْضِ",
        "english": "and the earth",
        "answer": {
            "du": "und der Erde",
            "jp": [
                {"text": "地", "furigana": "ち"},
                {"text": "の"}
            ]
        }
    },

    // eighth batch
    {
        "arabic": "وَمَا",
        "english": "and whatever",
        "answer": {
            "du": "und was",
            "jp": [
                {"text": "そして"},
                {"text": "すべて"}
            ]
        }
    },
    {
        "arabic": "بَيْنَهُمَا",
        "english": "(is) between both of them",
        "answer": {
            "du": "(ist) zwischen beiden",
            "jp": [
                {"text": "両", "furigana": "りょう"},
                {"text": "者の"},
                {"text": "間", "furigana": "あいだ"}
            ]
        }
    },
    {
        "arabic": "ٱلرَّحْمَـٰنِ‌ۖ",
        "english": "the Most Gracious,",
        "answer": {
            "du": "der Allerbarmer,",
            "jp": [
                {"text": "慈悲", "furigana": "じひ"},
                {"text": "深", "furigana": "ぶか"},
                {"text": "き"},
                {"text": "御", "furigana": "ご"},
                {"text": "方", "furigana": "かた"}
            ]
        }
    },
    {
        "arabic": "لَا",
        "english": "not",
        "answer": {
            "du": "nicht",
            "jp": [
                {"text": "～ない"}
            ]
        }
    },
    {
        "arabic": "يَمْلِكُونَ",
        "english": "they have power",
        "answer": {
            "du": "haben sie Macht",
            "jp": [
                {"text": "支配", "furigana": "しはい"},
                {"text": "できない"}
            ]
        }
    },
    {
        "arabic": "مِنْهُ",
        "english": "from Him",
        "answer": {
            "du": "von Ihm",
            "jp": [
                {"text": "かれから"}
            ]
        }
    },
    {
        "arabic": "خِطَابًا",
        "english": "(to) address.",
        "answer": {
            "du": "(zu) ansprechen.",
            "jp": [
                {"text": "訴", "furigana": "うった"},
                {"text": "えること"}
            ]
        }
    },
    {
        "arabic": "يَوْمَ",
        "english": "(The) Day",
        "answer": {
            "du": "(Am) Tag",
            "jp": [
                {"text": "審判", "furigana": "しんぱん"},
                {"text": "の日"}
            ]
        }
    },
    {
        "arabic": "يَقُومُ",
        "english": "will stand",
        "answer": {
            "du": "wird stehen",
            "jp": [
                {"text": "立", "furigana": "た"},
                {"text": "つ"}
            ]
        }
    },
    {
        "arabic": "ٱلرُّوحُ",
        "english": "the Spirit",
        "answer": {
            "du": "der Geist",
            "jp": [
                {"text": "霊", "furigana": "れい"}
            ]
        }
    },
    {
        "arabic": "وَٱلْمَلَـٰٓئِكَةُ",
        "english": "and the Angels",
        "answer": {
            "du": "und die Engel",
            "jp": [
                {"text": "天使", "furigana": "てんし"},
                {"text": "たち"}
            ]
        }
    },
    {
        "arabic": "صَفًّا‌ۖ",
        "english": "(in) rows,",
        "answer": {
            "du": "(in) Reihen,",
            "jp": [
                {"text": "整", "furigana": "せい"},
                {"text": "列", "furigana": "れつ"}
            ]
        }
    },
    {
        "arabic": "لَّا",
        "english": "not",
        "answer": {
            "du": "nicht",
            "jp": [
                {"text": "～ない"}
            ]
        }
    },
    {
        "arabic": "يَتَكَلَّمُونَ",
        "english": "they will speak",
        "answer": {
            "du": "werden sie sprechen",
            "jp": [
                {"text": "語", "furigana": "かた"},
                {"text": "らない"}
            ]
        }
    },
    {
        "arabic": "إِلَّا",
        "english": "except",
        "answer": {
            "du": "außer",
            "jp": [
                {"text": "ただし"}
            ]
        }
    },
    {
        "arabic": "مَنْ",
        "english": "(one) who -",
        "answer": {
            "du": "(derjenige,) der -",
            "jp": [
                {"text": "許", "furigana": "ゆる"},
                {"text": "された者"}
            ]
        }
    },

    // ninth batch
    {
        "arabic": "أَذِنَ",
        "english": "permits",
        "answer": {
            "du": "erlaubt",
            "jp": [
                {"text": "許", "furigana": "きょ"},
                {"text": "可", "furigana": "か"}
            ]
        }
    },
    {
        "arabic": "لَهُ",
        "english": "[for] him",
        "answer": {
            "du": "[für] ihn",
            "jp": [
                {"text": "その", "furigana": "その"},
                {"text": "者", "furigana": "もの"}
            ]
        }
    },
    {
        "arabic": "ٱلرَّحْمَـٰنُ",
        "english": "the Most Gracious,",
        "answer": {
            "du": "der Allerbarmer,",
            "jp": [
                {"text": "慈悲", "furigana": "じひ"},
                {"text": "深", "furigana": "ぶか"},
                {"text": "き", "furigana": "き"}
            ]
        }
    },
    {
        "arabic": "وَقَالَ",
        "english": "and he (will) say",
        "answer": {
            "du": "und er (wird) sagen",
            "jp": [
                {"text": "言", "furigana": "い"},
                {"text": "う", "furigana": "う"}
            ]
        }
    },
    {
        "arabic": "صَوَابًا",
        "english": "(what is) correct.",
        "answer": {
            "du": "(was) richtig ist.",
            "jp": [
                {"text": "正", "furigana": "せい"},
                {"text": "し", "furigana": "し"},
                {"text": "い", "furigana": "い"}
            ]
        }
    },
    {
        "arabic": "ذَٲلِكَ",
        "english": "That",
        "answer": {
            "du": "Das",
            "jp": [
                {"text": "そ", "furigana": "そ"},
                {"text": "れ", "furigana": "れ"}
            ]
        }
    },
    {
        "arabic": "ٱلْيَوْمُ",
        "english": "(is) the Day",
        "answer": {
            "du": "(ist) der Tag",
            "jp": [
                {"text": "審判", "furigana": "しんぱん"},
                {"text": "の", "furigana": "の"},
                {"text": "日", "furigana": "ひ"}
            ]
        }
    },
    {
        "arabic": "ٱلْحَقُّ‌ۖ",
        "english": "the True.",
        "answer": {
            "du": "die Wahrheit.",
            "jp": [
                {"text": "真", "furigana": "しん"},
                {"text": "実", "furigana": "じつ"}
            ]
        }
    },
    {
        "arabic": "فَمَن",
        "english": "So whoever",
        "answer": {
            "du": "Also wer",
            "jp": [
                {"text": "故", "furigana": "ゆ"},
                {"text": "に", "furigana": "に"}
            ]
        }
    },
    {
        "arabic": "شَآءَ",
        "english": "wills",
        "answer": {
            "du": "will",
            "jp": [
                {"text": "望", "furigana": "のぞ"},
                {"text": "む", "furigana": "む"}
            ]
        }
    },
    {
        "arabic": "ٱتَّخَذَ",
        "english": "let him take",
        "answer": {
            "du": "nehme",
            "jp": [
                {"text": "取", "furigana": "と"},
                {"text": "る", "furigana": "る"}
            ]
        }
    },
    {
        "arabic": "إِلَىٰ",
        "english": "towards",
        "answer": {
            "du": "zu",
            "jp": [
                {"text": "～", "furigana": "～"},
                {"text": "へ", "furigana": "へ"}
            ]
        }
    },
    {
        "arabic": "رَبِّهِۦ",
        "english": "his Lord",
        "answer": {
            "du": "seinem Herrn",
            "jp": [
                {"text": "主", "furigana": "しゅ"},
                {"text": "の", "furigana": "の"},
                {"text": "もと", "furigana": "もと"}
            ]
        }
    },
    {
        "arabic": "مَـَٔـابًا",
        "english": "a return.",
        "answer": {
            "du": "eine Rückkehr.",
            "jp": [
                {"text": "帰", "furigana": "き"},
                {"text": "る", "furigana": "る"},
                {"text": "場", "furigana": "ば"},
                {"text": "所", "furigana": "しょ"}
            ]
        }
    },
    {
        "arabic": "إِنَّآ",
        "english": "Indeed We",
        "answer": {
            "du": "Wahrlich, Wir",
            "jp": [
                {"text": "実", "furigana": "じつ"},
                {"text": "に", "furigana": "に"}
            ]
        }
    },
    {
        "arabic": "أَنذَرْنَـٰكُمْ",
        "english": "[We] have warned you",
        "answer": {
            "du": "[haben] euch gewarnt",
            "jp": [
                {"text": "警", "furigana": "けい"},
                {"text": "告", "furigana": "こく"},
                {"text": "した", "furigana": "した"}
            ]
        }
    },
    {
        "arabic": "عَذَابًا",
        "english": "(of) a punishment",
        "answer": {
            "du": "(vor) einer Strafe",
            "jp": [
                {"text": "罰", "furigana": "ばつ"}
            ]
        }
    },
    {
        "arabic": "قَرِيبًا",
        "english": "near",
        "answer": {
            "du": "nahe",
            "jp": [
                {"text": "近", "furigana": "ちか"},
                {"text": "い", "furigana": "い"}
            ]
        }
    },

    // tenth batch
      {
        "arabic": "يَوْمَ",
        "english": "(the) Day",
        "answer": {
            "du": "(am) Tag",
            "jp": [
                {"text": "審判", "furigana": "しんぱん"},
                {"text": "の日"}
            ]
        }
    },
    {
        "arabic": "يَنظُرُ",
        "english": "will see",
        "answer": {
            "du": "wird sehen",
            "jp": [
                {"text": "見", "furigana": "み"},
                {"text": "る"}
            ]
        }
    },
    {
        "arabic": "ٱلْمَرْءُ",
        "english": "the man",
        "answer": {
            "du": "der Mensch",
            "jp": [
                {"text": "者", "furigana": "もの"}
            ]
        }
    },
    {
        "arabic": "مَا",
        "english": "what",
        "answer": {
            "du": "was",
            "jp": [
                {"text": "何", "furigana": "なに"}
            ]
        }
    },
    {
        "arabic": "قَدَّمَتْ",
        "english": "have sent forth",
        "answer": {
            "du": "vorausgeschickt haben",
            "jp": [
                {"text": "送", "furigana": "おく"},
                {"text": "った"}
            ]
        }
    },
    {
        "arabic": "يَدَاهُ",
        "english": "his hands",
        "answer": {
            "du": "seine Hände",
            "jp": [
                {"text": "両手", "furigana": "りょうて"}
            ]
        }
    },
    {
        "arabic": "وَيَقُولُ",
        "english": "and will say",
        "answer": {
            "du": "und wird sagen",
            "jp": [
                {"text": "言", "furigana": "い"},
                {"text": "う"}
            ]
        }
    },
    {
        "arabic": "ٱلْكَافِرُ",
        "english": "the disbeliever,",
        "answer": {
            "du": "der Ungläubige,",
            "jp": [
                {"text": "不", "furigana": "ふ"},
                {"text": "信", "furigana": "しん"},
                {"text": "者", "furigana": "しゃ"}
            ]
        }
    },
    {
        "arabic": "يَـٰلَيْتَنِى",
        "english": "`O, I wish",
        "answer": {
            "du": "`O, wäre ich",
            "jp": [
                {"text": "ああ", "furigana": "ああ"},
                {"text": "私", "furigana": "わたし"}
            ]
        }
    },
    {
        "arabic": "كُنتُ",
        "english": "I were",
        "answer": {
            "du": "doch",
            "jp": [
                {"text": "～で", "furigana": "～で"},
                {"text": "あれば", "furigana": "あれば"}
            ]
        }
    },
    {
        "arabic": "تُرَٲبَۢا",
        "english": "dust!`",
        "answer": {
            "du": "Staub!`",
            "jp": [
                {"text": "塵", "furigana": "ちり"},
                {"text": "で", "furigana": "で"},
                {"text": "あれば", "furigana": "あれば"},
                {"text": "！"}
            ]
        }
    }

];
