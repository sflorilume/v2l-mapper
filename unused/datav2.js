// v1 version. furigana on relevant kanji only (juz 30 - surah 78 only)
 const wordData = [
    {
        "arabic": "عَمَّ",
        "english": "About what",
        "answer": {
            "du": "Worüber",
            "jp": [
                {"text": "何", "furigana": "なに"},
                {"text": "について"}
            ]
        }
    },
    {
        "arabic": "يَتَسَآءَلُونَ",
        "english": "are they asking one another?",
        "answer": {
            "du": "fragen sie einander?",
            "jp": [
                {"text": "彼", "furigana": "かれ"},
                {"text": "らは"},
                {"text": "尋", "furigana": "たず"},
                {"text": "ね"},
                {"text": "合", "furigana": "あ"},
                {"text": "うのか？"}
            ]
        }
    },
    {
        "arabic": "عَنِ",
        "english": "About",
        "answer": {
            "du": "Über",
            "jp": [
                {"text": "について"}
            ]
        }
    },
    {
        "arabic": "ٱلنَّبَإِ",
        "english": "the News",
        "answer": {
            "du": "die Nachricht",
            "jp": [
                {"text": "その"},
                {"text": "知", "furigana": "し"},
                {"text": "らせ"}
            ]
        }
    },
    {
        "arabic": "ٱلْعَظِيمِ",
        "english": "the Great,",
        "answer": {
            "du": "der Große,",
            "jp": [
                {"text": "偉", "furigana": "い"},
                {"text": "大", "furigana": "だい"},
                {"text": "な"}
            ]
        }
    },
    {
        "arabic": "ٱلَّذِى",
        "english": "(About) which",
        "answer": {
            "du": "worüber",
            "jp": [
                {"text": "についての"}
            ]
        }
    },
    {
        "arabic": "هُمْ",
        "english": "they",
        "answer": {
            "du": "sie",
            "jp": [
                {"text": "彼", "furigana": "かれ"},
                {"text": "ら"}
            ]
        }
    },
    {
        "arabic": "فِيهِ",
        "english": "(are) concerning it",
        "answer": {
            "du": "darüber",
            "jp": [
                {"text": "それについて"}
            ]
        }
    },
    {
        "arabic": "مُخْتَلِفُونَ",
        "english": "(in) disagreement.",
        "answer": {
            "du": "in Uneinigkeit.",
            "jp": [
                {"text": "意", "furigana": "い"},
                {"text": "見", "furigana": "けん"},
                {"text": "が"},
                {"text": "分", "furigana": "わ"},
                {"text": "かれている。"}
            ]
        }
    },
    {
        "arabic": "كَلَّا",
        "english": "Nay!",
        "answer": {
            "du": "Nein!",
            "jp": [
                {"text": "決", "furigana": "けっ"},
                {"text": "してそうではない！"}
            ]
        }
    },
    {
        "arabic": "سَيَعْلَمُونَ",
        "english": "Soon they will know.",
        "answer": {
            "du": "Bald werden sie es wissen.",
            "jp": [
                {"text": "すぐに"},
                {"text": "彼", "furigana": "かれ"},
                {"text": "らは"},
                {"text": "知", "furigana": "し"},
                {"text": "るだろう。"}
            ]
        }
    },
    {
        "arabic": "ثُمَّ",
        "english": "Then",
        "answer": {
            "du": "Dann",
            "jp": [
                {"text": "それから"}
            ]
        }
    },
    {
        "arabic": "أَلَمْ",
        "english": "Have not",
        "answer": {
            "du": "Haben nicht",
            "jp": [
                {"text": "ではなかったか"}
            ]
        }
    },
    {
        "arabic": "نَجْعَلِ",
        "english": "We made",
        "answer": {
            "du": "Wir machten",
            "jp": [
                {"text": "私", "furigana": "わたし"},
                {"text": "たちは"},
                {"text": "作", "furigana": "つく"},
                {"text": "った"}
            ]
        }
    },
    {
        "arabic": "ٱلْأَرْضَ",
        "english": "the earth",
        "answer": {
            "du": "die Erde",
            "jp": [
                {"text": "大", "furigana": "だい"},
                {"text": "地", "furigana": "ち"}
            ]
        }
    },
    {
        "arabic": "مِهَـٰدًا",
        "english": "a resting place?",
        "answer": {
            "du": "eine Ruhestätte?",
            "jp": [
                {"text": "安", "furigana": "あん"},
                {"text": "息", "furigana": "そく"},
                {"text": "の"},
                {"text": "場", "furigana": "ば"},
                {"text": "？"}
            ]
        }
    },
    {
        "arabic": "وَٱلْجِبَالَ",
        "english": "And the mountains",
        "answer": {
            "du": "Und die Berge",
            "jp": [
                {"text": "そして"},
                {"text": "山", "furigana": "やま"},
                {"text": "々を"}
            ]
        }
    },

    // second batch
    {
        "arabic": "أَوْتَادًا",
        "english": "(as) pegs,",
        "answer": {
            "du": "als Pflöcke,",
            "jp": [
                {"text": "杭", "furigana": "くい"},
                {"text": "のように"}
            ]
        }
    },
    {
        "arabic": "وَخَلَقْنَـٰكُمْ",
        "english": "And We created you",
        "answer": {
            "du": "Und Wir erschufen euch",
            "jp": [
                {"text": "そして"},
                {"text": "私", "furigana": "わたし"},
                {"text": "たちは"},
                {"text": "あなたがたを"},
                {"text": "創", "furigana": "そう"},
                {"text": "造", "furigana": "ぞう"},
                {"text": "した"}
            ]
        }
    },
    {
        "arabic": "أَزْوَٲجًا",
        "english": "(in) pairs,",
        "answer": {
            "du": "in Paaren,",
            "jp": [
                {"text": "対", "furigana": "つい"},
                {"text": "になって"}
            ]
        }
    },
    {
        "arabic": "وَجَعَلْنَا",
        "english": "And We made",
        "answer": {
            "du": "Und Wir machten",
            "jp": [
                {"text": "そして"},
                {"text": "私", "furigana": "わたし"},
                {"text": "たちは"},
                {"text": "作", "furigana": "つく"},
                {"text": "った"}
            ]
        }
    },
    {
        "arabic": "نَوْمَكُمْ",
        "english": "your sleep",
        "answer": {
            "du": "euren Schlaf",
            "jp": [
                {"text": "あなたがたの"},
                {"text": "眠", "furigana": "ねむ"},
                {"text": "り"}
            ]
        }
    },
    {
        "arabic": "سُبَاتًا",
        "english": "(for) rest,",
        "answer": {
            "du": "zur Erholung,",
            "jp": [
                {"text": "休", "furigana": "きゅう"},
                {"text": "息", "furigana": "そく"},
                {"text": "のために"}
            ]
        }
    },
    {
        "arabic": "ٱلَّيْلَ",
        "english": "the night",
        "answer": {
            "du": "die Nacht",
            "jp": [
                {"text": "夜", "furigana": "よる"}
            ]
        }
    },
    {
        "arabic": "لِبَاسًا",
        "english": "(as) covering,",
        "answer": {
            "du": "als Bedeckung,",
            "jp": [
                {"text": "覆", "furigana": "おお"},
                {"text": "いとして"}
            ]
        }
    },
    {
        "arabic": "ٱلنَّهَارَ",
        "english": "the day",
        "answer": {
            "du": "der Tag",
            "jp": [
                {"text": "昼", "furigana": "ひる"}
            ]
        }
    },
    {
        "arabic": "مَعَاشًا",
        "english": "(for) livelihood,",
        "answer": {
            "du": "zum Lebensunterhalt,",
            "jp": [
                {"text": "生", "furigana": "せい"},
                {"text": "計", "furigana": "けい"},
                {"text": "のために"}
            ]
        }
    },
    {
        "arabic": "وَبَنَيْنَا",
        "english": "And We constructed",
        "answer": {
            "du": "Und Wir errichteten",
            "jp": [
                {"text": "そして"},
                {"text": "私", "furigana": "わたし"},
                {"text": "たちは"},
                {"text": "築", "furigana": "きず"},
                {"text": "いた"}
            ]
        }
    },
    {
        "arabic": "فَوْقَكُمْ",
        "english": "over you",
        "answer": {
            "du": "über euch",
            "jp": [
                {"text": "あなたがたの"},
                {"text": "上", "furigana": "うえ"},
                {"text": "に"}
            ]
        }
    },
    {
        "arabic": "سَبْعًا",
        "english": "seven",
        "answer": {
            "du": "sieben",
            "jp": [
                {"text": "七", "furigana": "なな"},
                {"text": "つの"}
            ]
        }
    },
    {
        "arabic": "شِدَادًا",
        "english": "strong,",
        "answer": {
            "du": "stark,",
            "jp": [
                {"text": "強", "furigana": "きょう"},
                {"text": "力", "furigana": "りょく"},
                {"text": "な"}
            ]
        }
    },
    {
        "arabic": "سِرَاجًا",
        "english": "a lamp",
        "answer": {
            "du": "eine Lampe",
            "jp": [
                {"text": "灯", "furigana": "とも"},
                {"text": "火", "furigana": "び"}
            ]
        }
    },
    {
        "arabic": "وَهَّاجًا",
        "english": "burning,",
        "answer": {
            "du": "brennend,",
            "jp": [
                {"text": "燃", "furigana": "も"},
                {"text": "えるような"}
            ]
        }
    },
    {
        "arabic": "وَأَنزَلْنَا",
        "english": "And We sent down",
        "answer": {
            "du": "Und Wir sandten herab",
            "jp": [
                {"text": "そして"},
                {"text": "私", "furigana": "わたし"},
                {"text": "たちは"},
                {"text": "降", "furigana": "ふ"},
                {"text": "らせた"}
            ]
        }
    },

    // third batch
    {
        "arabic": "مِنَ",
        "english": "from",
        "answer": {
            "du": "von",
            "jp": [
                {"text": "から"}
            ]
        }
    },
    {
        "arabic": "ٱلْمُعْصِرَٲتِ",
        "english": "the rain clouds",
        "answer": {
            "du": "den Regenwolken",
            "jp": [
                {"text": "雨", "furigana": "あま"},
                {"text": "雲", "furigana": "ぐも"}
            ]
        }
    },
    {
        "arabic": "مَآءً",
        "english": "water",
        "answer": {
            "du": "Wasser",
            "jp": [
                {"text": "水", "furigana": "みず"}
            ]
        }
    },
    {
        "arabic": "ثَجَّاجًا",
        "english": "pouring abundantly,",
        "answer": {
            "du": "reichlich strömend,",
            "jp": [
                {"text": "豊", "furigana": "ゆた"},
                {"text": "かに"},
                {"text": "注", "furigana": "そそ"},
                {"text": "ぐ"}
            ]
        }
    },
    {
        "arabic": "لِّنُخْرِجَ",
        "english": "That We may bring forth",
        "answer": {
            "du": "Damit Wir hervorbringen",
            "jp": [
                {"text": "私", "furigana": "わたし"},
                {"text": "たちが"},
                {"text": "生", "furigana": "しょう"},
                {"text": "じさせるために"}
            ]
        }
    },
    {
        "arabic": "بِهِۦ",
        "english": "thereby",
        "answer": {
            "du": "dadurch",
            "jp": [
                {"text": "それによって"}
            ]
        }
    },
    {
        "arabic": "حَبًّا",
        "english": "grain",
        "answer": {
            "du": "Korn",
            "jp": [
                {"text": "穀", "furigana": "こく"},
                {"text": "物", "furigana": "もつ"}
            ]
        }
    },
    {
        "arabic": "وَنَبَاتًا",
        "english": "and vegetation,",
        "answer": {
            "du": "und Pflanzen,",
            "jp": [
                {"text": "植", "furigana": "しょく"},
                {"text": "物", "furigana": "ぶつ"}
            ]
        }
    },
    {
        "arabic": "وَجَنَّـٰتٍ",
        "english": "And gardens",
        "answer": {
            "du": "Und Gärten",
            "jp": [
                {"text": "そして"},
                {"text": "庭", "furigana": "てい"},
                {"text": "園", "furigana": "えん"}
            ]
        }
    },
    {
        "arabic": "أَلْفَافًا",
        "english": "(of) thick foliage.",
        "answer": {
            "du": "mit dichtem Laub.",
            "jp": [
                {"text": "密", "furigana": "みつ"},
                {"text": "な"},
                {"text": "葉", "furigana": "は"},
                {"text": "の"}
            ]
        }
    },
    {
        "arabic": "إِنَّ",
        "english": "Indeed,",
        "answer": {
            "du": "Wahrlich,",
            "jp": [
                {"text": "まことに"}
            ]
        }
    },
    {
        "arabic": "يَوْمَ",
        "english": "(the) Day",
        "answer": {
            "du": "der Tag",
            "jp": [
                {"text": "その"},
                {"text": "日", "furigana": "ひ"}
            ]
        }
    },
    {
        "arabic": "ٱلْفَصْلِ",
        "english": "(of) the Judgment",
        "answer": {
            "du": "des Gerichts",
            "jp": [
                {"text": "審", "furigana": "しん"},
                {"text": "判", "furigana": "ぱん"},
                {"text": "の"},
                {"text": "日", "furigana": "ひ"}
            ]
        }
    },
    {
        "arabic": "كَانَ",
        "english": "is",
        "answer": {
            "du": "ist",
            "jp": [
                {"text": "である"}
            ]
        }
    },
    {
        "arabic": "مِيقَـٰتًا",
        "english": "an appointed time,",
        "answer": {
            "du": "eine festgelegte Zeit,",
            "jp": [
                {"text": "定", "furigana": "さだ"},
                {"text": "められた"},
                {"text": "時", "furigana": "とき"}
            ]
        }
    },
    {
        "arabic": "يُنفَخُ",
        "english": "is blown",
        "answer": {
            "du": "wird geblasen",
            "jp": [
                {"text": "吹", "furigana": "ふ"},
                {"text": "き"},
                {"text": "鳴", "furigana": "なら"},
                {"text": "らされる"}
            ]
        }
    },
    {
        "arabic": "فِى",
        "english": "in",
        "answer": {
            "du": "in",
            "jp": [
                {"text": "の中で"}
            ]
        }
    },

    // fourth batcth
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
                {"text": "あなたがたは"},
                {"text": "出", "furigana": "で"},
                {"text": "てくる"}
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
                {"text": "れをなして"}
            ]
        }
    },
    {
        "arabic": "وَفُتِحَتِ",
        "english": "And is opened",
        "answer": {
            "du": "Und wird geöffnet",
            "jp": [
                {"text": "そして"},
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
                {"text": "門", "furigana": "もん"},
                {"text": "々"}
            ]
        }
    },
    {
        "arabic": "وَسُيِّرَتِ",
        "english": "And are moved",
        "answer": {
            "du": "Und werden bewegt",
            "jp": [
                {"text": "そして"},
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
                {"text": "山", "furigana": "やま"},
                {"text": "々"}
            ]
        }
    },
    {
        "arabic": "سَرَابًا",
        "english": "a mirage.",
        "answer": {
            "du": "eine Fata Morgana.",
            "jp": [
                {"text": "蜃", "furigana": "しん"},
                {"text": "気", "furigana": "き"},
                {"text": "楼", "furigana": "ろう"},
                {"text": "。"}
            ]
        }
    },
        {
        "arabic": "إِنَّ",
        "english": "Indeed,",
        "answer": {
            "du": "Wahrlich,",
            "jp": [
                {"text": "まことに"}
            ]
        }
    },
    {
        "arabic": "جَهَنَّمَ",
        "english": "Hell",
        "answer": {
            "du": "Hölle",
            "jp": [
                {"text": "地", "furigana": "じ"},
                {"text": "獄", "furigana": "ごく"}
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
                {"text": "ち"},
                {"text": "構", "furigana": "かま"},
                {"text": "えている"}
            ]
        }
    },
    {
        "arabic": "لِّلطَّـٰغِينَ",
        "english": "For the transgressors",
        "answer": {
            "du": "Für die Übertreter,",
            "jp": [
                {"text": "横", "furigana": "おう"},
                {"text": "暴", "furigana": "ぼう"},
                {"text": "な"},
                {"text": "者", "furigana": "もの"},
                {"text": "たちのために"}
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
                {"text": "り"},
                {"text": "着", "furigana": "つ"},
                {"text": "く"},
                {"text": "場", "furigana": "ば"},
                {"text": "所", "furigana": "しょ"}
            ]
        }
    },
    {
        "arabic": "لَّـٰبِثِينَ",
        "english": "(They will) be remaining",
        "answer": {
            "du": "(werden) verweilen",
            "jp": [
                {"text": "留", "furigana": "とど"},
                {"text": "まることになる"}
            ]
        }
    },
    {
        "arabic": "فِيهَآ",
        "english": "therein",
        "answer": {
            "du": "darin",
            "jp": [
                {"text": "その"},
                {"text": "中", "furigana": "なか"},
                {"text": "に"}
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
                {"text": "年", "furigana": "とし"},
                {"text": "月", "furigana": "つき"},
                {"text": "を"}
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
                {"text": "わうことはない"}
            ]
        }
    },
    {
        "arabic": "فِيهَا",
        "english": "therein",
        "answer": {
            "du": "darin",
            "jp": [
                {"text": "その"},
                {"text": "中", "furigana": "なか"},
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
                {"text": "涼", "furigana": "すず"},
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
                {"text": "飲", "furigana": "の"},
                {"text": "み"},
                {"text": "物", "furigana": "もの"},
                {"text": "も"}
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
                {"text": "沸", "furigana": "ふっ"},
                {"text": "騰", "furigana": "とう"},
                {"text": "する"},
                {"text": "湯", "furigana": "ゆ"}
            ]
        }
    },
    {
        "arabic": "وَغَسَّاقًا",
        "english": "and purulence,",
        "answer": {
            "du": "und Eiter,",
            "jp": [
                {"text": "膿", "furigana": "うみ"},
                {"text": "のようなもの"}
            ]
        }
    },
    {
        "arabic": "جَزَآءً",
        "english": "A recompense",
        "answer": {
            "du": "Eine Vergeltung",
            "jp": [
                {"text": "報", "furigana": "むく"},
                {"text": "いとして"}
            ]
        }
    },
    {
        "arabic": "وِفَاقًا",
        "english": "appropriate.",
        "answer": {
            "du": "angemessen.",
            "jp": [
                {"text": "相", "furigana": "ふさ"},
                {"text": "わしい"}
            ]
        }
    },
    {
        "arabic": "إِنَّهُمْ",
        "english": "Indeed, they",
        "answer": {
            "du": "Wahrlich, sie",
            "jp": [
                {"text": "まことに"},
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
                {"text": "～であった"}
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
                {"text": "していなかった"}
            ]
        }
    },
    {
        "arabic": "حِسَابًا",
        "english": "an account,",
        "answer": {
            "du": "eine Abrechnung,",
            "jp": [
                {"text": "清", "furigana": "せい"},
                {"text": "算", "furigana": "さん"},
                {"text": "を"}
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
                {"text": "嘘", "furigana": "うそ"},
                {"text": "ついた"}
            ]
        }
    },
    {
        "arabic": "بِـَٔـايَـٰتِنَا",
        "english": "Our Signs",
        "answer": {
            "du": "Unsere Zeichen",
            "jp": [
                {"text": "われらの"},
                {"text": "印", "furigana": "しるし"},
                {"text": "を"}
            ]
        }
    },
    {
        "arabic": "كِذَّابًا",
        "english": "(with) denial.",
        "answer": {
            "du": "(mit) Leugnung.",
            "jp": [
                {"text": "嘘", "furigana": "うそ"},
                {"text": "として"}
            ]
        }
    },
    {
        "arabic": "وَكُلَّ",
        "english": "And every",
        "answer": {
            "du": "Und jedes",
            "jp": [
                {"text": "そして"},
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
                {"text": "もの"},
                {"text": "を"}
            ]
        }
    },
    {
        "arabic": "أَحْصَيْنَـٰهُ",
        "english": "We have enumerated it",
        "answer": {
            "du": "haben Wir es erfasst",
            "jp": [
                {"text": "われらはそれを"},
                {"text": "数", "furigana": "かぞ"},
                {"text": "え"},
                {"text": "上", "furigana": "あ"},
                {"text": "げた"}
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
                {"text": "物", "furigana": "もつ"},
                {"text": "の"},
                {"text": "中", "furigana": "なか"},
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
                {"text": "だから"},
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
                {"text": "して～ない"}
            ]
        }
    },
    {
        "arabic": "نَّزِيدَكُمْ",
        "english": "We will increase you",
        "answer": {
            "du": "werden Wir euch vermehren",
            "jp": [
                {"text": "われらは"},
                {"text": "あなたがたを"},
                {"text": "増", "furigana": "ふ"},
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
                {"text": "ただし"}
            ]
        }
    },
    {
        "arabic": "عَذَابًا",
        "english": "(in) punishment.",
        "answer": {
            "du": "(an) Strafe.",
            "jp": [
                {"text": "懲", "furigana": "ちょう"},
                {"text": "罰", "furigana": "ばつ"},
                {"text": "を"}
            ]
        }
    },
    {
        "arabic": "إِنَّ",
        "english": "Indeed,",
        "answer": {
            "du": "Wahrlich,",
            "jp": [
                {"text": "まことに"}
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
                {"text": "な"},
                {"text": "者", "furigana": "もの"},
                {"text": "たちには"}
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
                {"text": "功", "furigana": "こう"},
                {"text": "がある"}
            ]
        }
    },
    {
        "arabic": "حَدَآئِقَ",
        "english": "Gardens",
        "answer": {
            "du": "Gärten",
            "jp": [
                {"text": "庭", "furigana": "てい"},
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
                {"text": "ぶどうの"},
                {"text": "木", "furigana": "き"}
            ]
        }
    },
    {
        "arabic": "وَكَوَاعِبَ",
        "english": "And splendid companions",
        "answer": {
            "du": "Und prächtige Gefährtinnen",
            "jp": [
                {"text": "魅", "furigana": "み"},
                {"text": "力", "furigana": "りょく"},
                {"text": "的", "furigana": "てき"},
                {"text": "な"},
                {"text": "伴", "furigana": "はん"},
                {"text": "侶", "furigana": "りょ"}
            ]
        }
    },

    // sixth batch
    {
        "arabic": "أَتْرَابًا",
        "english": "well-matched,",
        "answer": {
            "du": "gleichaltrig,",
            "jp": [
                {"text": "同", "furigana": "おな"},
                {"text": "じ"},
                {"text": "年", "furigana": "とし"},
                {"text": "頃", "furigana": "ごろ"},
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
                {"text": "杯", "furigana": "さかずき"},
                {"text": "も"}
            ]
        }
    },
    {
        "arabic": "دِهَاقًا",
        "english": "full.",
        "answer": {
            "du": "voll.",
            "jp": [
                {"text": "満", "furigana": "み"},
                {"text": "ち"},
                {"text": "溢", "furigana": "あふ"},
                {"text": "れる"}
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
                {"text": "くことはない"}
            ]
        }
    },
    {
        "arabic": "فِيهَا",
        "english": "therein",
        "answer": {
            "du": "darin",
            "jp": [
                {"text": "その"},
                {"text": "中", "furigana": "なか"},
                {"text": "で"}
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
                {"text": "益", "furigana": "えき"},
                {"text": "な"},
                {"text": "話", "furigana": "はなし"},
                {"text": "を"}
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
                {"text": "嘘", "furigana": "うそ"},
                {"text": "も"}
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
                {"text": "酬", "furigana": "しゅう"},
                {"text": "として"}
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
                {"text": "あなたの"},
                {"text": "主", "furigana": "ぬし"},
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
                {"text": "賜", "furigana": "たま"},
                {"text": "物", "furigana": "もの"}
            ]
        }
    },
    {
        "arabic": "حِسَابًا",
        "english": "(according to) account,",
        "answer": {
            "du": "(entsprechend) Berechnung,",
            "jp": [
                {"text": "清", "furigana": "せい"},
                {"text": "算", "furigana": "さん"},
                {"text": "に"},
                {"text": "応", "furigana": "おう"},
                {"text": "じて"}
            ]
        }
    },
    {
        "arabic": "رَّبِّ",
        "english": "Lord",
        "answer": {
            "du": "Herr",
            "jp": [
                {"text": "主", "furigana": "ぬし"}
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
                {"text": "そして"},
                {"text": "大", "furigana": "だい"},
                {"text": "地", "furigana": "ち"},
                {"text": "の"}
            ]
        }
    },

    // seventh batch
    {
        "arabic": "وَمَا",
        "english": "and whatever",
        "answer": {
            "du": "und was",
            "jp": [
                {"text": "そして"},
                {"text": "すべての"}
            ]
        }
    },
    {
        "arabic": "بَيْنَهُمَا",
        "english": "(is) between both of them",
        "answer": {
            "du": "(ist) zwischen beiden",
            "jp": [
                {"text": "それらの"},
                {"text": "間", "furigana": "あいだ"},
                {"text": "にある"}
            ]
        }
    },
    {
        "arabic": "ٱلرَّحْمَـٰنِ‌ۖ",
        "english": "the Most Gracious,",
        "answer": {
            "du": "der Allerbarmer,",
            "jp": [
                {"text": "慈", "furigana": "じ"},
                {"text": "悲", "furigana": "ひ"},
                {"text": "深", "furigana": "ぶ"},
                {"text": "き"},
                {"text": "御", "furigana": "み"},
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
                {"text": "権", "furigana": "けん"},
                {"text": "能", "furigana": "のう"},
                {"text": "を"},
                {"text": "持", "furigana": "も"},
                {"text": "つことはない"}
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
                {"text": "言", "furigana": "こと"},
                {"text": "葉", "furigana": "ば"},
                {"text": "を"},
                {"text": "発", "furigana": "はっ"},
                {"text": "する"}
            ]
        }
    },
    {
        "arabic": "يَوْمَ",
        "english": "(The) Day",
        "answer": {
            "du": "(Am) Tag",
            "jp": [
                {"text": "その"},
                {"text": "日", "furigana": "ひ"}
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
                {"text": "つであろう"}
            ]
        }
    },
    {
        "arabic": "ٱلرُّوحُ",
        "english": "the Spirit",
        "answer": {
            "du": "der Geist",
            "jp": [
                {"text": "魂", "furigana": "たましい"},
                {"text": "が"}
            ]
        }
    },
    {
        "arabic": "وَٱلْمَلَـٰٓئِكَةُ",
        "english": "and the Angels",
        "answer": {
            "du": "und die Engel",
            "jp": [
                {"text": "そして"},
                {"text": "天", "furigana": "てん"},
                {"text": "使", "furigana": "し"},
                {"text": "たちが"}
            ]
        }
    },
    {
        "arabic": "صَفًّا‌ۖ",
        "english": "(in) rows,",
        "answer": {
            "du": "(in) Reihen,",
            "jp": [
                {"text": "列", "furigana": "れつ"},
                {"text": "をなして"}
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
                {"text": "話", "furigana": "はな"},
                {"text": "すことはない"}
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
                {"text": "～する"},
                {"text": "者", "furigana": "もの"},
                {"text": "のみ"}
            ]
        }
    },

    // eighth batch
    {
        "arabic": "أَذِنَ",
        "english": "permits",
        "answer": {
            "du": "erlaubt",
            "jp": [
                {"text": "許", "furigana": "ゆる"},
                {"text": "された"}
            ]
        }
    },
    {
        "arabic": "لَهُ",
        "english": "[for] him",
        "answer": {
            "du": "[für] ihn",
            "jp": [
                {"text": "彼", "furigana": "かれ"},
                {"text": "に"}
            ]
        }
    },
    {
        "arabic": "ٱلرَّحْمَـٰنُ",
        "english": "the Most Gracious,",
        "answer": {
            "du": "der Allerbarmer,",
            "jp": [
                {"text": "慈", "furigana": "じ"},
                {"text": "悲", "furigana": "ひ"},
                {"text": "深", "furigana": "ぶ"},
                {"text": "き"},
                {"text": "御", "furigana": "み"},
                {"text": "方", "furigana": "かた"}
            ]
        }
    },
    {
        "arabic": "وَقَالَ",
        "english": "and he (will) say",
        "answer": {
            "du": "und er (wird) sagen",
            "jp": [
                {"text": "そして"},
                {"text": "言", "furigana": "い"},
                {"text": "うであろう"}
            ]
        }
    },
    {
        "arabic": "صَوَابًا",
        "english": "(what is) correct.",
        "answer": {
            "du": "(was) richtig ist.",
            "jp": [
                {"text": "正", "furigana": "ただ"},
                {"text": "しい"},
                {"text": "ことを"}
            ]
        }
    },
    {
        "arabic": "ذَٲلِكَ",
        "english": "That",
        "answer": {
            "du": "Das",
            "jp": [
                {"text": "これこそが"}
            ]
        }
    },
    {
        "arabic": "ٱلْيَوْمُ",
        "english": "(is) the Day",
        "answer": {
            "du": "(ist) der Tag",
            "jp": [
                {"text": "その"},
                {"text": "日", "furigana": "ひ"},
                {"text": "である"}
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
                {"text": "実", "furigana": "じつ"},
                {"text": "の"}
            ]
        }
    },
    {
        "arabic": "فَمَن",
        "english": "So whoever",
        "answer": {
            "du": "Also wer",
            "jp": [
                {"text": "だから"},
                {"text": "誰", "furigana": "だれ"},
                {"text": "でも"}
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
                {"text": "む"},
                {"text": "者", "furigana": "もの"},
                {"text": "は"}
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
                {"text": "るがよい"}
            ]
        }
    },
    {
        "arabic": "إِلَىٰ",
        "english": "towards",
        "answer": {
            "du": "zu",
            "jp": [
                {"text": "～へ"}
            ]
        }
    },
    {
        "arabic": "رَبِّهِۦ",
        "english": "his Lord",
        "answer": {
            "du": "seinem Herrn",
            "jp": [
                {"text": "主", "furigana": "ぬし"},
                {"text": "のもとへ"}
            ]
        }
    },
    {
        "arabic": "مَـَٔـابًا",
        "english": "a return.",
        "answer": {
            "du": "eine Rückkehr.",
            "jp": [
                {"text": "帰", "furigana": "かえ"},
                {"text": "り"},
                {"text": "所", "furigana": "どころ"},
                {"text": "として"}
            ]
        }
    },
    {
        "arabic": "إِنَّآ",
        "english": "Indeed We",
        "answer": {
            "du": "Wahrlich, Wir",
            "jp": [
                {"text": "まことに"},
                {"text": "われらは"}
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
                {"text": "した"}
            ]
        }
    },
    {
        "arabic": "عَذَابًا",
        "english": "(of) a punishment",
        "answer": {
            "du": "(vor) einer Strafe",
            "jp": [
                {"text": "懲", "furigana": "ちょう"},
                {"text": "罰", "furigana": "ばつ"},
                {"text": "を"}
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
                {"text": "い"}
            ]
        }
    },

    // ninth batch
    {
        "arabic": "يَوْمَ",
        "english": "(the) Day",
        "answer": {
            "du": "(am) Tag",
            "jp": [
                {"text": "その"},
                {"text": "日", "furigana": "ひ"}
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
                {"text": "るであろう"}
            ]
        }
    },
    {
        "arabic": "ٱلْمَرْءُ",
        "english": "the man",
        "answer": {
            "du": "der Mensch",
            "jp": [
                {"text": "人", "furigana": "ひと"},
                {"text": "は"}
            ]
        }
    },
    {
        "arabic": "مَا",
        "english": "what",
        "answer": {
            "du": "was",
            "jp": [
                {"text": "何", "furigana": "なに"},
                {"text": "を"}
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
                {"text": "り"},
                {"text": "出", "furigana": "だ"},
                {"text": "したかを"}
            ]
        }
    },
    {
        "arabic": "يَدَاهُ",
        "english": "his hands",
        "answer": {
            "du": "seine Hände",
            "jp": [
                {"text": "両", "furigana": "りょう"},
                {"text": "手", "furigana": "て"},
                {"text": "が"}
            ]
        }
    },
    {
        "arabic": "وَيَقُولُ",
        "english": "and will say",
        "answer": {
            "du": "und wird sagen",
            "jp": [
                {"text": "そして"},
                {"text": "言", "furigana": "い"},
                {"text": "うであろう"}
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
                {"text": "仰", "furigana": "こう"},
                {"text": "者", "furigana": "しゃ"},
                {"text": "は"}
            ]
        }
    },
    {
        "arabic": "يَـٰلَيْتَنِى",
        "english": "`O, I wish",
        "answer": {
            "du": "`O, wäre ich",
            "jp": [
                {"text": "ああ、"},
                {"text": "私", "furigana": "わたし"},
                {"text": "が"}
            ]
        }
    },
    {
        "arabic": "كُنتُ",
        "english": "I were",
        "answer": {
            "du": "doch",
            "jp": [
                {"text": "～であったなら"}
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
                {"text": "であったなら！`"}
            ]
        }
    }
];