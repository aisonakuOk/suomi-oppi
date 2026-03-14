// ============================================================
// Suomi Oppi — Content Database
// Based on yhteiskuntaorientaatio.fi curriculum
// Target: B1-B2 level Finnish society knowledge
// For citizenship test preparation
// ============================================================

const MODULES = [
  // ── MODULE 1: Kotoutuminen ──
  {
    id: "kotoutuminen",
    icon: "🏠",
    title: { fi: "Kotoutuminen", en: "Integration", ru: "Интеграция", ru: "Интеграция" },
    desc: { fi: "Mitä kotoutuminen tarkoittaa? Suomen sijainti, sää ja yhteiskunta.", en: "What does integration mean? Finland's location, weather, and society.", ru: "Что означает интеграция? Расположение Финляндии, погода и общество.", ru: "Что означает интеграция? Расположение Финляндии, погода и общество." },
    color: "#58cc02",
    lessons: [
      {
        id: "koto-1",
        title: { fi: "Mitä kotoutuminen tarkoittaa?", en: "What does integration mean?", ru: "Что означает интеграция?", ru: "Что означает интеграция?" },
        icon: "📋",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mitä 'kotoutuminen' tarkoittaa?", en: "What does 'kotoutuminen' mean?", ru: "Что означает «kotoutuminen» (интеграция)?" },
            choices: [
              { fi: "Prosessi, jossa maahanmuuttaja tulee osaksi suomalaista yhteiskuntaa", en: "A process where an immigrant becomes part of Finnish society", ru: "Процесс, в ходе которого иммигрант становится частью финского общества" },
              { fi: "Suomen kansalaisuuden hakeminen", en: "Applying for Finnish citizenship", ru: "Подача заявления на финское гражданство" },
              { fi: "Suomen kielen tentti", en: "A Finnish language exam", ru: "Экзамен по финскому языку" },
              { fi: "Muutto takaisin kotimaahan", en: "Moving back to home country", ru: "Возвращение на родину" }
            ],
            correct: 0,
            explanation: { fi: "Kotoutuminen on kaksisuuntainen prosessi, jossa maahanmuuttaja oppii taitoja ja tietoja, joita tarvitaan yhteiskunnassa. Samalla yhteiskunta muuttuu monimuotoisemmaksi.", en: "Integration is a two-way process where an immigrant learns skills and knowledge needed in society. At the same time, society becomes more diverse.", ru: "Интеграция — это двусторонний процесс, в ходе которого иммигрант приобретает навыки и знания, необходимые в обществе. В то же время общество становится более разнообразным." }
          },
          {
            type: "true-false",
            question: { fi: "Kotoutuminen on vain maahanmuuttajan vastuulla.", en: "Integration is only the immigrant's responsibility.", ru: "Интеграция — это только обязанность иммигранта." },
            correct: false,
            explanation: { fi: "Kotoutuminen on kaksisuuntainen prosessi. Sekä maahanmuuttaja että vastaanottava yhteiskunta osallistuvat kotoutumiseen.", en: "Integration is a two-way process. Both the immigrant and the receiving society participate in integration.", ru: "Интеграция — это двусторонний процесс. В интеграции участвуют как иммигрант, так и принимающее общество." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mikä on 'kotoutumissuunnitelma'?", en: "What is a 'kotoutumissuunnitelma' (integration plan)?", ru: "Что такое «kotoutumissuunnitelma» (план интеграции)?" },
            choices: [
              { fi: "Suunnitelma asunnon ostamiseksi", en: "A plan to buy an apartment", ru: "План покупки квартиры" },
              { fi: "Henkilökohtainen suunnitelma, joka tehdään maahanmuuttajalle kotoutumisen tueksi", en: "A personal plan made for an immigrant to support integration", ru: "Личный план, составленный для иммигранта в поддержку интеграции" },
              { fi: "Työhakemus", en: "A job application", ru: "Заявление о приёме на работу" },
              { fi: "Matkasuunnitelma", en: "A travel plan", ru: "План путешествия" }
            ],
            correct: 1,
            explanation: { fi: "Kotoutumissuunnitelma tehdään yhdessä TE-toimiston tai kunnan kanssa. Se sisältää esimerkiksi kielikoulutusta ja muita toimenpiteitä.", en: "The integration plan is made together with the TE office or municipality. It includes language training and other measures.", ru: "План интеграции составляется совместно с бюро TE или муниципалитетом. Он включает языковые курсы и другие мероприятия." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Kotoutumissuunnitelma tehdään yhdessä ___ kanssa.", en: "The integration plan is made together with ___.", ru: "План интеграции составляется совместно с ___." },
            answer: "TE-toimiston",
            alternatives: ["te-toimiston", "TE-toimisto", "te-toimisto"],
            explanation: { fi: "TE-toimisto (työ- ja elinkeinotoimisto) auttaa maahanmuuttajia työllistymisessä ja kotoutumisessa.", en: "The TE office (Employment and Economic Development Office) helps immigrants with employment and integration.", ru: "Бюро TE (Бюро труда и экономического развития) помогает иммигрантам с трудоустройством и интеграцией." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Kauanko kotoutumisaika yleensä kestää?", en: "How long does the integration period usually last?", ru: "Сколько обычно длится период интеграции?" },
            choices: [
              { fi: "6 kuukautta", en: "6 months", ru: "6 месяцев" },
              { fi: "1 vuosi", en: "1 year", ru: "1 год" },
              { fi: "3 vuotta (voidaan pidentää 5 vuoteen)", en: "3 years (can be extended to 5 years)", ru: "3 года (может быть продлён до 5 лет)" },
              { fi: "10 vuotta", en: "10 years", ru: "10 лет" }
            ],
            correct: 2,
            explanation: { fi: "Kotoutumisaika on yleensä 3 vuotta, mutta se voidaan erityisistä syistä pidentää viiteen vuoteen.", en: "The integration period is usually 3 years, but it can be extended to 5 years for special reasons.", ru: "Период интеграции обычно составляет 3 года, но по особым причинам может быть продлён до 5 лет." }
          }
        ]
      },
      {
        id: "koto-2",
        title: { fi: "Suomen sijainti ja alueet", en: "Finland's location and regions", ru: "Расположение и регионы Финляндии" },
        icon: "🗺️",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Missä Suomi sijaitsee?", en: "Where is Finland located?", ru: "Где расположена Финляндия?" },
            choices: [
              { fi: "Keski-Euroopassa", en: "Central Europe", ru: "Центральная Европа" },
              { fi: "Pohjois-Euroopassa, Skandinavian itäpuolella", en: "Northern Europe, east of Scandinavia", ru: "Северная Европа, к востоку от Скандинавии" },
              { fi: "Etelä-Euroopassa", en: "Southern Europe", ru: "Южная Европа" },
              { fi: "Aasiassa", en: "Asia", ru: "Азия" }
            ],
            correct: 1,
            explanation: { fi: "Suomi sijaitsee Pohjois-Euroopassa. Sen naapurimaat ovat Ruotsi, Norja ja Venäjä.", en: "Finland is located in Northern Europe. Its neighboring countries are Sweden, Norway, and Russia.", ru: "Финляндия расположена в Северной Европе. Её соседние страны — Швеция, Норвегия и Россия." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa on noin 5,5 miljoonaa asukasta.", en: "Finland has about 5.5 million inhabitants.", ru: "В Финляндии около 5,5 миллионов жителей." },
            correct: true,
            explanation: { fi: "Suomen väkiluku on noin 5,5 miljoonaa. Väestö on keskittynyt Etelä-Suomeen.", en: "Finland's population is about 5.5 million. The population is concentrated in Southern Finland.", ru: "Население Финляндии составляет около 5,5 миллионов. Население сосредоточено в Южной Финляндии." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomen pääkaupunki on ___.", en: "The capital of Finland is ___.", ru: "Столица Финляндии — ___." },
            answer: "Helsinki",
            alternatives: ["helsinki"],
            explanation: { fi: "Helsinki on Suomen pääkaupunki ja suurin kaupunki. Se sijaitsee Etelä-Suomessa Suomenlahden rannalla.", en: "Helsinki is Finland's capital and largest city, located in Southern Finland on the coast of the Gulf of Finland.", ru: "Хельсинки — столица и крупнейший город Финляндии, расположенный в Южной Финляндии на берегу Финского залива." }
          },
          {
            type: "matching",
            instruction: { fi: "Yhdistä kaupunki ja kuvaus", en: "Match the city with its description", ru: "Сопоставьте город с его описанием" },
            pairs: [
              { left: { fi: "Helsinki", en: "Helsinki", ru: "Хельсинки" }, right: { fi: "Pääkaupunki", en: "Capital city", ru: "Столица" } },
              { left: { fi: "Tampere", en: "Tampere", ru: "Тампере" }, right: { fi: "Sisämaan suurkaupunki", en: "Inland major city", ru: "Крупный город во внутренней части страны" } },
              { left: { fi: "Turku", en: "Turku", ru: "Турку" }, right: { fi: "Entinen pääkaupunki", en: "Former capital", ru: "Бывшая столица" } },
              { left: { fi: "Oulu", en: "Oulu", ru: "Оулу" }, right: { fi: "Pohjois-Suomen keskus", en: "Center of Northern Finland", ru: "Центр Северной Финляндии" } }
            ],
            explanation: { fi: "Helsinki on nykyinen pääkaupunki. Turku oli Suomen pääkaupunki ennen vuotta 1812.", en: "Helsinki is the current capital. Turku was Finland's capital before 1812.", ru: "Хельсинки — нынешняя столица. Турку была столицей Финляндии до 1812 года." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mikä on Suomen virallinen kaksikielisyys?", en: "What is Finland's official bilingualism?", ru: "Каково официальное двуязычие Финляндии?" },
            choices: [
              { fi: "Suomi ja englanti", en: "Finnish and English", ru: "Финский и английский" },
              { fi: "Suomi ja ruotsi", en: "Finnish and Swedish", ru: "Финский и шведский" },
              { fi: "Suomi ja venäjä", en: "Finnish and Russian", ru: "Финский и русский" },
              { fi: "Suomi ja saame", en: "Finnish and Sámi", ru: "Финский и саамский" }
            ],
            correct: 1,
            explanation: { fi: "Suomen viralliset kielet ovat suomi ja ruotsi. Noin 5 % väestöstä puhuu äidinkielenään ruotsia.", en: "Finland's official languages are Finnish and Swedish. About 5% of the population speaks Swedish as their mother tongue.", ru: "Официальные языки Финляндии — финский и шведский. Около 5% населения говорят на шведском как на родном языке." }
          }
        ]
      },
      {
        id: "koto-3",
        title: { fi: "Sää ja vuodenajat", en: "Weather and seasons", ru: "Погода и времена года" },
        icon: "🌦️",
        exercises: [
          {
            type: "matching",
            instruction: { fi: "Yhdistä vuodenaika ja kuvaus", en: "Match the season and description", ru: "Сопоставьте время года и описание" },
            pairs: [
              { left: { fi: "Kevät", en: "Spring", ru: "Весна" }, right: { fi: "Lumi sulaa, päivät pitenevät", en: "Snow melts, days get longer", ru: "Снег тает, дни становятся длиннее" } },
              { left: { fi: "Kesä", en: "Summer", ru: "Лето" }, right: { fi: "Yötön yö, lämmin", en: "Midnight sun, warm", ru: "Полуночное солнце, тепло" } },
              { left: { fi: "Syksy", en: "Autumn", ru: "Осень" }, right: { fi: "Lehdet putoavat, sataa", en: "Leaves fall, rain", ru: "Листья опадают, дождь" } },
              { left: { fi: "Talvi", en: "Winter", ru: "Зима" }, right: { fi: "Kylmä, lunta, pimeää", en: "Cold, snow, dark", ru: "Холодно, снег, темно" } }
            ],
            explanation: { fi: "Suomessa on neljä selkeää vuodenaikaa. Talvi voi kestää jopa 5 kuukautta pohjoisessa.", en: "Finland has four distinct seasons. Winter can last up to 5 months in the north.", ru: "В Финляндии четыре выраженных времени года. Зима на севере может длиться до 5 месяцев." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa lämpötila voi talvella laskea alle -30 °C.", en: "In Finland, winter temperatures can drop below -30°C.", ru: "В Финляндии зимой температура может опускаться ниже -30°C." },
            correct: true,
            explanation: { fi: "Erityisesti Pohjois-Suomessa ja Lapissa lämpötila voi laskea hyvin alhaiseksi talvella.", en: "Especially in Northern Finland and Lapland, temperatures can drop very low in winter.", ru: "Особенно в Северной Финляндии и Лапландии температура зимой может опускаться очень низко." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä 'kaamos' tarkoittaa?", en: "What does 'kaamos' (polar night) mean?", ru: "Что означает «kaamos» (полярная ночь)?" },
            choices: [
              { fi: "Aika, jolloin aurinko ei nouse lainkaan", en: "A time when the sun doesn't rise at all", ru: "Время, когда солнце совсем не восходит" },
              { fi: "Suomalainen juhla", en: "A Finnish celebration", ru: "Финский праздник" },
              { fi: "Kesäinen yötön yö", en: "Summer midnight sun", ru: "Летнее полуночное солнце" },
              { fi: "Sääilmiö keväällä", en: "A spring weather phenomenon", ru: "Весеннее погодное явление" }
            ],
            correct: 0,
            explanation: { fi: "Kaamos on ajanjakso, jolloin aurinko ei nouse lainkaan. Lapissa kaamos kestää useita viikkoja.", en: "Kaamos is a period when the sun doesn't rise at all. In Lapland, kaamos lasts several weeks.", ru: "Kaamos — это период, когда солнце вообще не восходит. В Лапландии kaamos длится несколько недель." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Kesällä Lapissa voi kokea ___, jolloin aurinko ei laske.", en: "In summer in Lapland you can experience ___, when the sun doesn't set.", ru: "Летом в Лапландии можно увидеть ___, когда солнце не заходит." },
            answer: "yöttömän yön",
            alternatives: ["yötön yö", "yöttömän yön", "keskiyön auringon"],
            explanation: { fi: "Yötön yö tarkoittaa, että aurinko ei laske ollenkaan. Tämä tapahtuu kesällä Pohjois-Suomessa.", en: "Midnight sun means the sun doesn't set at all. This happens in summer in Northern Finland.", ru: "Полуночное солнце означает, что солнце совсем не заходит. Это происходит летом в Северной Финляндии." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Miksi talvella on tärkeää pukeutua lämpimästi?", en: "Why is it important to dress warmly in winter?", ru: "Почему зимой важно тепло одеваться?" },
            choices: [
              { fi: "Koska pakkanen voi aiheuttaa paleltumia ja hypotermiaa", en: "Because frost can cause frostbite and hypothermia", ru: "Потому что мороз может вызвать обморожение и гипотермию" },
              { fi: "Koska se on lain vaatimus", en: "Because it's a legal requirement", ru: "Потому что это требование закона" },
              { fi: "Koska muuten et saa mennä sisälle", en: "Because otherwise you can't go inside", ru: "Потому что иначе нельзя зайти внутрь" },
              { fi: "Koska se on Suomen perinne", en: "Because it's a Finnish tradition", ru: "Потому что это финская традиция" }
            ],
            correct: 0,
            explanation: { fi: "Talvella on tärkeää pukeutua kerroksittain ja suojata iho pakkaselta. Paleltumia voi tulla nopeasti kovalla pakkasella.", en: "In winter, it's important to dress in layers and protect skin from frost. Frostbite can occur quickly in severe cold.", ru: "Зимой важно одеваться многослойно и защищать кожу от мороза. Обморожение может наступить быстро при сильном холоде." }
          }
        ]
      }
    ]
  },

  // ── MODULE 2: Ihmiset ja kulttuuri ──
  {
    id: "ihmiset-kulttuuri",
    icon: "🧑‍🤝‍🧑",
    title: { fi: "Ihmiset ja kulttuuri", en: "People & Culture", ru: "Люди и культура" },
    desc: { fi: "Väestö, uskonnot, arvot, tavat ja juhlat.", en: "Population, religions, values, customs, and celebrations.", ru: "Население, религии, ценности, обычаи и праздники." },
    color: "#1cb0f6",
    lessons: [
      {
        id: "ihku-1",
        title: { fi: "Suomen väestö ja uskonnot", en: "Finland's population and religions", ru: "Население и религии Финляндии" },
        icon: "👥",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mikä on Suomen suurin uskonnollinen yhteisö?", en: "What is Finland's largest religious community?", ru: "Какая самая крупная религиозная община в Финляндии?" },
            choices: [
              { fi: "Katolinen kirkko", en: "Catholic Church", ru: "Католическая церковь" },
              { fi: "Evankelis-luterilainen kirkko", en: "Evangelical Lutheran Church", ru: "Евангелическо-лютеранская церковь" },
              { fi: "Ortodoksinen kirkko", en: "Orthodox Church", ru: "Православная церковь" },
              { fi: "Islam", en: "Islam", ru: "Ислам" }
            ],
            correct: 1,
            explanation: { fi: "Noin 66 % suomalaisista kuuluu evankelis-luterilaiseen kirkkoon. Ortodoksinen kirkko on toiseksi suurin.", en: "About 66% of Finns belong to the Evangelical Lutheran Church. The Orthodox Church is the second largest.", ru: "Около 66% финнов принадлежат к Евангелическо-лютеранской церкви. Православная церковь — вторая по величине." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa on uskonnonvapaus.", en: "Finland has freedom of religion.", ru: "В Финляндии существует свобода вероисповедания." },
            correct: true,
            explanation: { fi: "Uskonnonvapaus on perusoikeus Suomessa. Jokaisella on oikeus harjoittaa uskontoaan tai olla harjoittamatta mitään uskontoa.", en: "Freedom of religion is a fundamental right in Finland. Everyone has the right to practice their religion or not practice any religion.", ru: "Свобода вероисповедания — основное право в Финляндии. Каждый имеет право исповедовать свою религию или не исповедовать никакую." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomessa asuu noin ___ miljoonaa ihmistä.", en: "About ___ million people live in Finland.", ru: "В Финляндии проживает около ___ миллионов человек." },
            answer: "5,5",
            alternatives: ["5.5", "viisi ja puoli", "5,5"],
            explanation: { fi: "Suomen väkiluku on noin 5,5 miljoonaa. Suurin osa asuu Etelä-Suomessa.", en: "Finland's population is about 5.5 million. Most people live in Southern Finland.", ru: "Население Финляндии составляет около 5,5 миллионов. Большинство живёт в Южной Финляндии." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Kuinka moni suomalainen ei kuulu mihinkään uskonnolliseen yhteisöön?", en: "How many Finns don't belong to any religious community?", ru: "Сколько финнов не принадлежат ни к одной религиозной общине?" },
            choices: [
              { fi: "Noin 5 %", en: "About 5%", ru: "Около 5%" },
              { fi: "Noin 15 %", en: "About 15%", ru: "Около 15%" },
              { fi: "Noin 30 %", en: "About 30%", ru: "Около 30%" },
              { fi: "Noin 50 %", en: "About 50%", ru: "Около 50%" }
            ],
            correct: 2,
            explanation: { fi: "Noin 30 % suomalaisista ei kuulu mihinkään uskonnolliseen yhteisöön. Uskonnottomien osuus on kasvanut.", en: "About 30% of Finns don't belong to any religious community. The share of non-religious people has been growing.", ru: "Около 30% финнов не принадлежат ни к одной религиозной общине. Доля нерелигиозных людей растёт." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä saamelaisten asema on Suomessa?", en: "What is the status of the Sámi people in Finland?", ru: "Каков статус саамского народа в Финляндии?" },
            choices: [
              { fi: "He ovat Suomen ainoa alkuperäiskansa", en: "They are Finland's only indigenous people", ru: "Они являются единственным коренным народом Финляндии" },
              { fi: "He ovat maahanmuuttajia", en: "They are immigrants", ru: "Они являются иммигрантами" },
              { fi: "He eivät asu enää Suomessa", en: "They no longer live in Finland", ru: "Они больше не живут в Финляндии" },
              { fi: "He ovat ruotsinkielisiä", en: "They are Swedish-speaking", ru: "Они говорят по-шведски" }
            ],
            correct: 0,
            explanation: { fi: "Saamelaiset ovat EU:n ainoa alkuperäiskansa. Heitä asuu Suomessa noin 10 000, erityisesti Lapissa.", en: "The Sámi are the EU's only indigenous people. About 10,000 live in Finland, especially in Lapland.", ru: "Саамы — единственный коренной народ ЕС. Около 10 000 живут в Финляндии, особенно в Лапландии." }
          }
        ]
      },
      {
        id: "ihku-2",
        title: { fi: "Arvot ja tapakulttuuri", en: "Values and customs", ru: "Ценности и обычаи" },
        icon: "🤝",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mikä on tyypillinen suomalainen arvo?", en: "What is a typical Finnish value?", ru: "Какая типичная финская ценность?" },
            choices: [
              { fi: "Täsmällisyys ja rehellisyys", en: "Punctuality and honesty", ru: "Пунктуальность и честность" },
              { fi: "Hierarkia ja muodollisuus", en: "Hierarchy and formality", ru: "Иерархия и формальность" },
              { fi: "Suuri sosiaalinen verkosto", en: "Large social network", ru: "Большая социальная сеть" },
              { fi: "Vastakkainasettelu", en: "Confrontation", ru: "Конфронтация" }
            ],
            correct: 0,
            explanation: { fi: "Suomalaiset arvostavat täsmällisyyttä, rehellisyyttä, tasa-arvoa ja luonnon kunnioittamista.", en: "Finns value punctuality, honesty, equality, and respect for nature.", ru: "Финны ценят пунктуальность, честность, равенство и уважение к природе." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa on tavallista sinuttella tuntemattomia aikuisia.", en: "In Finland, it is common to use informal 'you' (sinä) with unknown adults.", ru: "В Финляндии принято обращаться на «ты» (sinä) к незнакомым взрослым." },
            correct: true,
            explanation: { fi: "Suomalainen kulttuuri on melko epämuodollinen. Sinuttelu on yleistä myös tuntemattomien kanssa, vaikka teitittely on kohteliasta erityisesti vanhempia ihmisiä kohtaan.", en: "Finnish culture is quite informal. Using 'sinä' is common even with strangers, though formal 'te' is polite especially towards older people.", ru: "Финская культура довольно неформальна. Обращение на «sinä» распространено даже с незнакомыми, хотя вежливая форма «te» уместна, особенно по отношению к пожилым людям." }
          },
          {
            type: "matching",
            instruction: { fi: "Yhdistä suomalainen arvo ja sen merkitys", en: "Match the Finnish value with its meaning", ru: "Сопоставьте финскую ценность с её значением" },
            pairs: [
              { left: { fi: "Tasa-arvo", en: "Equality", ru: "Равенство" }, right: { fi: "Kaikki ihmiset ovat samanarvoisia", en: "All people are equal", ru: "Все люди равны" } },
              { left: { fi: "Sisu", en: "Sisu", ru: "Сису" }, right: { fi: "Sisäinen lujuus ja sinnikkyys", en: "Inner strength and perseverance", ru: "Внутренняя сила и упорство" } },
              { left: { fi: "Luottamus", en: "Trust", ru: "Доверие" }, right: { fi: "Ihmiset pitävät lupauksensa", en: "People keep their promises", ru: "Люди держат свои обещания" } },
              { left: { fi: "Jokamiehen oikeus", en: "Everyman's right", ru: "Право каждого" }, right: { fi: "Vapaus liikkua luonnossa", en: "Freedom to roam in nature", ru: "Свобода передвижения на природе" } }
            ],
            explanation: { fi: "Nämä arvot ovat keskeisiä suomalaisessa yhteiskunnassa ja vaikuttavat arkielämään.", en: "These values are central to Finnish society and affect everyday life.", ru: "Эти ценности являются основой финского общества и влияют на повседневную жизнь." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä 'jokamiehen oikeudet' tarkoittavat?", en: "What do 'everyman's rights' mean?", ru: "Что означает «право каждого человека»?" },
            choices: [
              { fi: "Oikeus äänestää vaaleissa", en: "The right to vote in elections", ru: "Право голосовать на выборах" },
              { fi: "Oikeus liikkua luonnossa, poimia marjoja ja sieniä vapaasti", en: "The right to roam in nature, pick berries and mushrooms freely", ru: "Право гулять на природе, свободно собирать ягоды и грибы" },
              { fi: "Oikeus ilmaiseen terveydenhuoltoon", en: "The right to free healthcare", ru: "Право на бесплатное медицинское обслуживание" },
              { fi: "Oikeus ilmaiseen koulutukseen", en: "The right to free education", ru: "Право на бесплатное образование" }
            ],
            correct: 1,
            explanation: { fi: "Jokamiehen oikeuksilla saa liikkua luonnossa, uida, poimia marjoja ja sieniä – myös toisen omistamalla maalla. Leiriytyminen on sallittua riittävän kaukana asutuksesta.", en: "With everyman's rights you can roam in nature, swim, pick berries and mushrooms – even on privately owned land. Camping is allowed far enough from inhabited areas.", ru: "Право каждого позволяет гулять на природе, купаться, собирать ягоды и грибы — даже на частной земле. Разрешено ставить палатку достаточно далеко от жилых территорий." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomessa kengät otetaan pois jalasta, kun mennään toisen ___.", en: "In Finland, shoes are taken off when entering someone's ___.", ru: "В Финляндии снимают обувь, когда входят в чей-то ___." },
            answer: "kotiin",
            alternatives: ["kotiin", "asuntoon", "taloon"],
            explanation: { fi: "Kenkien riisuminen on yleinen tapa Suomessa. Se pitää kodin puhtaana, varsinkin talvella.", en: "Removing shoes is a common custom in Finland. It keeps the home clean, especially in winter.", ru: "Снятие обуви — распространённый обычай в Финляндии. Это помогает содержать дом в чистоте, особенно зимой." }
          }
        ]
      },
      {
        id: "ihku-3",
        title: { fi: "Juhlat ja perinteet", en: "Celebrations and traditions", ru: "Праздники и традиции" },
        icon: "🎄",
        exercises: [
          {
            type: "matching",
            instruction: { fi: "Yhdistä juhla ja ajankohta", en: "Match the celebration with its time", ru: "Сопоставьте праздник со временем его проведения" },
            pairs: [
              { left: { fi: "Joulu", en: "Christmas", ru: "Рождество" }, right: { fi: "25. joulukuuta", en: "December 25", ru: "25 декабря" } },
              { left: { fi: "Juhannus", en: "Midsummer", ru: "Иванов день" }, right: { fi: "Kesäkuun loppu", en: "End of June", ru: "Конец июня" } },
              { left: { fi: "Vappu", en: "May Day", ru: "Первое мая" }, right: { fi: "1. toukokuuta", en: "May 1", ru: "1 мая" } },
              { left: { fi: "Itsenäisyyspäivä", en: "Independence Day", ru: "День независимости" }, right: { fi: "6. joulukuuta", en: "December 6", ru: "6 декабря" } }
            ],
            explanation: { fi: "Nämä ovat Suomen tärkeimpiä juhlapäiviä. Itsenäisyyspäivänä 6.12. juhlitaan Suomen itsenäistymistä vuonna 1917.", en: "These are Finland's most important holidays. On Independence Day (Dec 6), Finland's independence from 1917 is celebrated.", ru: "Это важнейшие праздники Финляндии. В День независимости (6 декабря) отмечается независимость Финляндии с 1917 года." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä juhannuksena perinteisesti tehdään?", en: "What is traditionally done on Midsummer?", ru: "Что традиционно делают на Иванов день?" },
            choices: [
              { fi: "Vietetään aikaa mökillä ja poltetaan kokko", en: "Spend time at a summer cottage and light a bonfire", ru: "Проводят время на даче и жгут костёр" },
              { fi: "Käydään joulukirkossa", en: "Go to Christmas church service", ru: "Ходят на рождественскую службу" },
              { fi: "Syödään laskiaispullia", en: "Eat Shrove Tuesday buns", ru: "Едят масленичные булочки" },
              { fi: "Marssitaan kaupungilla", en: "March in the city", ru: "Маршируют по городу" }
            ],
            correct: 0,
            explanation: { fi: "Juhannus on kesän juhla. Monet suomalaiset viettävät sen mökillä, saunovat, uivat ja polttavat juhannuskokon.", en: "Midsummer is a celebration of summer. Many Finns spend it at a cottage, sauna, swim, and light a Midsummer bonfire.", ru: "Иванов день — это праздник лета. Многие финны проводят его на даче, ходят в сауну, купаются и жгут костёр." }
          },
          {
            type: "true-false",
            question: { fi: "Suomen itsenäisyyspäivä on 6. joulukuuta.", en: "Finland's Independence Day is December 6.", ru: "День независимости Финляндии — 6 декабря." },
            correct: true,
            explanation: { fi: "Suomi itsenäistyi 6.12.1917 Venäjästä. Itsenäisyyspäivää juhlitaan muun muassa presidentin linnanjuhlilla.", en: "Finland gained independence from Russia on December 6, 1917. Independence Day is celebrated with the President's Independence Day Reception.", ru: "Финляндия обрела независимость от России 6 декабря 1917 года. День независимости отмечается приёмом Президента." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mikä on 'vappu' Suomessa?", en: "What is 'Vappu' (May Day) in Finland?", ru: "Что такое «Vappu» (Первое мая) в Финляндии?" },
            choices: [
              { fi: "Opiskelijoiden ja työväen juhla 1. toukokuuta", en: "Students' and workers' celebration on May 1st", ru: "Праздник студентов и рабочих 1 мая" },
              { fi: "Uskonnollinen juhla", en: "A religious celebration", ru: "Религиозный праздник" },
              { fi: "Lasten päivä", en: "Children's day", ru: "День детей" },
              { fi: "Kansallinen surujuhla", en: "A national day of mourning", ru: "Национальный день траура" }
            ],
            correct: 0,
            explanation: { fi: "Vappu on iloinen juhla. Opiskelijat laittavat ylioppilaslakkeja päähän. Perinteisesti syödään munkkeja, tippaleipiä ja juodaan simaa.", en: "Vappu is a joyful celebration. Students wear graduation caps. Traditionally people eat doughnuts, funnel cakes, and drink mead (sima).", ru: "Vappu — это весёлый праздник. Студенты надевают выпускные фуражки. Традиционно едят пончики, воронкообразные пирожные и пьют медовуху (sima)." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomi itsenäistyi vuonna ___.", en: "Finland gained independence in the year ___.", ru: "Финляндия обрела независимость в ___ году." },
            answer: "1917",
            alternatives: ["1917"],
            explanation: { fi: "Suomi julistautui itsenäiseksi 6. joulukuuta 1917 Venäjästä.", en: "Finland declared independence from Russia on December 6, 1917.", ru: "Финляндия провозгласила независимость от России 6 декабря 1917 года." }
          }
        ]
      }
    ]
  },

  // ── MODULE 3: Arki ──
  {
    id: "arki",
    icon: "🏡",
    title: { fi: "Arki", en: "Daily Life", ru: "Повседневная жизнь" },
    desc: { fi: "Asuminen, viranomaisasiointi, talous ja vapaa-aika.", en: "Housing, dealing with authorities, finances, and free time.", ru: "Жильё, работа с властями, финансы и свободное время." },
    color: "#ff9600",
    lessons: [
      {
        id: "arki-1",
        title: { fi: "Asuminen Suomessa", en: "Housing in Finland", ru: "Жильё в Финляндии" },
        icon: "🏢",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mikä on yleisin asumismuoto Suomessa?", en: "What is the most common form of housing in Finland?", ru: "Какой самый распространённый вид жилья в Финляндии?" },
            choices: [
              { fi: "Omistusasunto (omakotitalo tai osakehuoneisto)", en: "Owner-occupied housing (detached house or apartment)", ru: "Собственное жильё (частный дом или квартира)" },
              { fi: "Hotelli", en: "Hotel", ru: "Гостиница" },
              { fi: "Yhteisasuminen", en: "Communal living", ru: "Совместное проживание" },
              { fi: "Asuntoauto", en: "Caravan", ru: "Автодом" }
            ],
            correct: 0,
            explanation: { fi: "Suomalaisista noin 65 % asuu omistusasunnossa. Vuokra-asuminen on myös yleistä, erityisesti kaupungeissa.", en: "About 65% of Finns live in owner-occupied housing. Renting is also common, especially in cities.", ru: "Около 65% финнов живут в собственном жилье. Аренда также распространена, особенно в городах." }
          },
          {
            type: "true-false",
            question: { fi: "Vuokralaisella on oikeus saada kirjallinen vuokrasopimus.", en: "A tenant has the right to get a written rental agreement.", ru: "Арендатор имеет право получить письменный договор аренды." },
            correct: true,
            explanation: { fi: "Vuokrasopimus kannattaa aina tehdä kirjallisesti. Se suojaa sekä vuokralaista että vuokranantajaa.", en: "A rental agreement should always be made in writing. It protects both the tenant and the landlord.", ru: "Договор аренды всегда следует составлять в письменном виде. Он защищает как арендатора, так и арендодателя." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä 'taloyhtiö' tarkoittaa?", en: "What does 'taloyhtiö' (housing company) mean?", ru: "Что означает «taloyhtiö» (жилищное товарищество)?" },
            choices: [
              { fi: "Yritys, joka omistaa ja hallinnoi asuinrakennusta", en: "A company that owns and manages a residential building", ru: "Компания, которая владеет жилым зданием и управляет им" },
              { fi: "Naapureiden ystäväryhmä", en: "A neighbor friend group", ru: "Группа друзей-соседей" },
              { fi: "Rakennusfirma", en: "A construction company", ru: "Строительная компания" },
              { fi: "Valtion asuntovirasto", en: "A state housing agency", ru: "Государственное жилищное агентство" }
            ],
            correct: 0,
            explanation: { fi: "Taloyhtiö vastaa rakennuksen ylläpidosta. Asukkaat maksavat yhtiövastiketta ja noudattavat järjestyssääntöjä.", en: "The housing company is responsible for building maintenance. Residents pay a maintenance charge and follow house rules.", ru: "Жилищное товарищество отвечает за содержание здания. Жители платят плату за обслуживание и соблюдают правила дома." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Taloyhtiön ___ kertovat, mitä asukkaan pitää noudattaa.", en: "The housing company's ___ tell what the resident must follow.", ru: "___ жилищного товарищества определяют, что должен соблюдать жилец." },
            answer: "järjestyssäännöt",
            alternatives: ["järjestyssäännöt", "säännöt"],
            explanation: { fi: "Järjestyssäännöt koskevat mm. hiljaisuusaikoja, jätteiden lajittelua ja yhteisten tilojen käyttöä.", en: "House rules cover things like quiet hours, waste sorting, and use of shared spaces.", ru: "Правила дома охватывают такие вопросы, как часы тишины, сортировка мусора и использование общих помещений." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Milloin hiljaisuusaika yleensä alkaa kerrostalossa?", en: "When does quiet time usually begin in apartment buildings?", ru: "Когда обычно начинается время тишины в многоквартирных домах?" },
            choices: [
              { fi: "Klo 18", en: "6 PM", ru: "18:00" },
              { fi: "Klo 22", en: "10 PM", ru: "22:00" },
              { fi: "Klo 20", en: "8 PM", ru: "20:00" },
              { fi: "Keskiyöllä", en: "Midnight", ru: "Полночь" }
            ],
            correct: 1,
            explanation: { fi: "Useimmissa taloyhtiöissä hiljaisuusaika on klo 22–07. Sinä aikana on vältettävä kovaa melua.", en: "In most housing companies, quiet hours are 10 PM – 7 AM. Loud noise should be avoided during this time.", ru: "В большинстве жилищных товариществ часы тишины — с 22:00 до 07:00. В это время следует избегать громкого шума." }
          }
        ]
      },
      {
        id: "arki-2",
        title: { fi: "Viranomaisasiointi ja talous", en: "Authorities and finances", ru: "Органы власти и финансы" },
        icon: "🏦",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mikä on henkilötunnus?", en: "What is a personal identity code?", ru: "Что такое личный идентификационный код?" },
            choices: [
              { fi: "Jokaiselle Suomessa asuvalle annettava yksilöllinen tunniste", en: "A unique identifier given to everyone living in Finland", ru: "Уникальный идентификатор, присваиваемый каждому проживающему в Финляндии" },
              { fi: "Pankkitilin numero", en: "A bank account number", ru: "Номер банковского счёта" },
              { fi: "Passin numero", en: "A passport number", ru: "Номер паспорта" },
              { fi: "Puhelinnumero", en: "A phone number", ru: "Номер телефона" }
            ],
            correct: 0,
            explanation: { fi: "Henkilötunnus on tärkeä kaikessa viranomaisasioinnissa. Se annetaan väestörekisteriin kirjautumisen yhteydessä.", en: "The personal identity code is important in all dealings with authorities. It is given when registering in the population register.", ru: "Личный идентификационный код важен при любом обращении к властям. Он присваивается при регистрации в реестре населения." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa jokaisen on ilmoitettava muutostaan maistraattiin (DVV).", en: "In Finland, everyone must report their move to the Digital and Population Data Services Agency (DVV).", ru: "В Финляндии каждый обязан сообщить о переезде в Агентство цифровых технологий и данных о населении (DVV)." },
            correct: true,
            explanation: { fi: "Muuttoilmoitus pitää tehdä DVV:lle (Digi- ja väestötietovirasto) viimeistään viikon kuluessa muutosta.", en: "A change of address notification must be made to DVV within one week of moving.", ru: "Уведомление о смене адреса необходимо подать в DVV в течение одной недели после переезда." }
          },
          {
            type: "matching",
            instruction: { fi: "Yhdistä viranomainen ja tehtävä", en: "Match the authority with its function", ru: "Сопоставьте орган власти с его функцией" },
            pairs: [
              { left: { fi: "Kela", en: "Kela", ru: "Kela" }, right: { fi: "Sosiaaliturvaetuudet", en: "Social security benefits", ru: "Пособия по социальному обеспечению" } },
              { left: { fi: "Vero", en: "Tax office", ru: "Налоговая служба" }, right: { fi: "Verotus", en: "Taxation", ru: "Налогообложение" } },
              { left: { fi: "DVV", en: "DVV", ru: "DVV" }, right: { fi: "Väestörekisteri", en: "Population register", ru: "Реестр населения" } },
              { left: { fi: "Poliisi", en: "Police", ru: "Полиция" }, right: { fi: "Turvallisuus ja luvat", en: "Safety and permits", ru: "Безопасность и разрешения" } }
            ],
            explanation: { fi: "Nämä ovat tärkeimmät viranomaiset, joiden kanssa asioit Suomessa. Monet palvelut löytyvät myös verkossa.", en: "These are the main authorities you'll deal with in Finland. Many services are also available online.", ru: "Это основные органы власти, с которыми вы будете иметь дело в Финляндии. Многие услуги также доступны онлайн." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "___ maksaa Suomessa asumistukea, työttömyysetuuksia ja lapsilisiä.", en: "___ pays housing allowance, unemployment benefits, and child benefits in Finland.", ru: "___ выплачивает жилищное пособие, пособие по безработице и детские пособия в Финляндии." },
            answer: "Kela",
            alternatives: ["Kela", "KELA", "kela"],
            explanation: { fi: "Kela (Kansaneläkelaitos) hoitaa monia sosiaaliturvaetuuksia Suomessa.", en: "Kela (Social Insurance Institution) handles many social security benefits in Finland.", ru: "Kela (Ведомство социального страхования) ведает многими пособиями социального обеспечения в Финляндии." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mikä on verokortti?", en: "What is a tax card?", ru: "Что такое налоговая карта?" },
            choices: [
              { fi: "Asiakirja, joka kertoo työnantajalle veroprosenttisi", en: "A document that tells your employer your tax rate", ru: "Документ, сообщающий работодателю вашу налоговую ставку" },
              { fi: "Luottokortti", en: "A credit card", ru: "Кредитная карта" },
              { fi: "Henkilöllisyystodistus", en: "An ID card", ru: "Удостоверение личности" },
              { fi: "Kirjastokortti", en: "A library card", ru: "Библиотечная карта" }
            ],
            correct: 0,
            explanation: { fi: "Verokortti näyttää veroprosenttisi. Työnantaja pidättää palkanmaksun yhteydessä verot.", en: "The tax card shows your tax rate. The employer withholds taxes when paying your salary.", ru: "Налоговая карта показывает вашу налоговую ставку. Работодатель удерживает налоги при выплате зарплаты." }
          }
        ]
      }
    ]
  },

  // ── MODULE 4: Työ ──
  {
    id: "tyo",
    icon: "💼",
    title: { fi: "Työ", en: "Work", ru: "Работа" },
    desc: { fi: "Työnhaku, työkulttuuri, oikeudet ja velvollisuudet.", en: "Job search, work culture, rights and obligations.", ru: "Поиск работы, рабочая культура, права и обязанности." },
    color: "#ce82ff",
    lessons: [
      {
        id: "tyo-1",
        title: { fi: "Työnhaku Suomessa", en: "Job search in Finland", ru: "Поиск работы в Финляндии" },
        icon: "🔍",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mikä on CV?", en: "What is a CV?", ru: "Что такое CV (резюме)?" },
            choices: [
              { fi: "Ansioluettelo, jossa kerrotaan koulutuksesta ja työkokemuksesta", en: "A resume that describes education and work experience", ru: "Резюме, в котором описываются образование и опыт работы" },
              { fi: "Työsopimus", en: "An employment contract", ru: "Трудовой договор" },
              { fi: "Palkkalaskelma", en: "A payslip", ru: "Расчётный лист" },
              { fi: "Suosituskirje", en: "A recommendation letter", ru: "Рекомендательное письмо" }
            ],
            correct: 0,
            explanation: { fi: "CV eli ansioluettelo on tärkeä osa työnhakua Suomessa. Sen liitteeksi kirjoitetaan usein työhakemus.", en: "A CV (resume) is an important part of job searching in Finland. A cover letter is often attached to it.", ru: "CV (резюме) — важная часть поиска работы в Финляндии. К нему часто прилагается сопроводительное письмо." }
          },
          {
            type: "true-false",
            question: { fi: "TE-toimisto auttaa työnhaussa.", en: "The TE office helps with job searching.", ru: "Бюро TE помогает с поиском работы." },
            correct: true,
            explanation: { fi: "TE-toimisto (työ- ja elinkeinotoimisto) tarjoaa työnvälityspalveluja, koulutusneuvontaa ja tukea työnhakuun.", en: "The TE office provides employment services, training advice, and job search support.", ru: "Бюро TE предоставляет услуги по трудоустройству, консультации по обучению и поддержку при поиске работы." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Työnhaussa on tärkeää kirjoittaa hyvä ___ ja CV.", en: "In job searching, it's important to write a good ___ and CV.", ru: "При поиске работы важно написать хорошее ___ и CV." },
            answer: "työhakemus",
            alternatives: ["työhakemus", "hakemus"],
            explanation: { fi: "Työhakemus eli saatekirje kertoo, miksi haluat juuri kyseiseen työpaikkaan ja mitä osaat.", en: "The cover letter explains why you want that specific job and what your skills are.", ru: "Сопроводительное письмо объясняет, почему вы хотите именно эту работу и каковы ваши навыки." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Missä voi hakea töitä Suomessa?", en: "Where can you look for jobs in Finland?", ru: "Где можно искать работу в Финляндии?" },
            choices: [
              { fi: "Vain TE-toimistossa", en: "Only at the TE office", ru: "Только в бюро TE" },
              { fi: "Netissä (mol.fi, duunitori.fi, linkedin.com), lehdissä ja verkostojen kautta", en: "Online (mol.fi, duunitori.fi, linkedin.com), newspapers, and through networks", ru: "В интернете (mol.fi, duunitori.fi, linkedin.com), в газетах и через знакомства" },
              { fi: "Vain sanomalehdissä", en: "Only in newspapers", ru: "Только в газетах" },
              { fi: "Vain tuttavien kautta", en: "Only through acquaintances", ru: "Только через знакомых" }
            ],
            correct: 1,
            explanation: { fi: "Töitä voi hakea monella tavalla: verkossa, suoraan yrityksiltä, rekrytointifirmojen kautta ja verkostoitumalla.", en: "You can search for jobs in many ways: online, directly from companies, through recruitment firms, and by networking.", ru: "Работу можно искать разными способами: в интернете, напрямую у компаний, через кадровые агентства и через знакомства." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä 'työkokeilu' tarkoittaa?", en: "What does 'työkokeilu' (work trial) mean?", ru: "Что означает «työkokeilu» (рабочая стажировка)?" },
            choices: [
              { fi: "Mahdollisuus kokeilla työtä työpaikalla ilman työsuhdetta", en: "An opportunity to try work at a workplace without an employment relationship", ru: "Возможность попробовать работу на рабочем месте без трудовых отношений" },
              { fi: "Palkallinen koeaika", en: "A paid trial period", ru: "Оплачиваемый испытательный срок" },
              { fi: "Työsopimuksen allekirjoittaminen", en: "Signing an employment contract", ru: "Подписание трудового договора" },
              { fi: "Työhaastattelu", en: "A job interview", ru: "Собеседование" }
            ],
            correct: 0,
            explanation: { fi: "Työkokeilu on tapa tutustua ammattiin tai alaan. Se sovitaan TE-toimiston kautta ja kestää yleensä 1–6 kuukautta.", en: "A work trial is a way to get to know a profession or field. It is arranged through the TE office and usually lasts 1–6 months.", ru: "Рабочая стажировка — способ познакомиться с профессией или отраслью. Она организуется через бюро TE и обычно длится 1–6 месяцев." }
          }
        ]
      },
      {
        id: "tyo-2",
        title: { fi: "Työkulttuuri ja oikeudet", en: "Work culture and rights", ru: "Рабочая культура и права" },
        icon: "⚖️",
        exercises: [
          {
            type: "matching",
            instruction: { fi: "Yhdistä termi ja selitys", en: "Match the term with its explanation", ru: "Сопоставьте термин с его объяснением" },
            pairs: [
              { left: { fi: "Koeaika", en: "Trial period", ru: "Испытательный срок" }, right: { fi: "Enintään 6 kk työsuhteen alussa", en: "Up to 6 months at start of employment", ru: "До 6 месяцев в начале трудовых отношений" } },
              { left: { fi: "TES", en: "Collective agreement", ru: "Коллективный договор" }, right: { fi: "Työehtosopimus, joka määrää minimipalkan", en: "Agreement that sets minimum wage", ru: "Соглашение, устанавливающее минимальную зарплату" } },
              { left: { fi: "Vuosiloma", en: "Annual leave", ru: "Ежегодный отпуск" }, right: { fi: "Palkallinen loma, yleensä 2–5 viikkoa", en: "Paid vacation, usually 2–5 weeks", ru: "Оплачиваемый отпуск, обычно 2–5 недель" } },
              { left: { fi: "Ammattiliitto", en: "Trade union", ru: "Профсоюз" }, right: { fi: "Järjestö, joka puolustaa työntekijöiden etuja", en: "Organization that defends workers' interests", ru: "Организация, защищающая интересы работников" } }
            ],
            explanation: { fi: "Suomessa ei ole lakisääteistä minimipalkkaa, vaan palkat määräytyvät työehtosopimuksen (TES) mukaan.", en: "Finland has no statutory minimum wage; wages are determined by collective agreements (TES).", ru: "В Финляндии нет установленной законом минимальной зарплаты; зарплаты определяются коллективными договорами (TES)." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa työnantaja saa maksaa miehille ja naisille eri palkkaa samasta työstä.", en: "In Finland, an employer may pay men and women different wages for the same work.", ru: "В Финляндии работодатель может платить мужчинам и женщинам разную зарплату за одинаковую работу." },
            correct: false,
            explanation: { fi: "Tasa-arvolaki kieltää sukupuoleen perustuvan syrjinnän palkkauksessa. Samasta työstä on maksettava sama palkka.", en: "The Equality Act prohibits gender-based discrimination in pay. Equal pay must be given for equal work.", ru: "Закон о равенстве запрещает дискриминацию по половому признаку в оплате труда. За равный труд должна выплачиваться равная зарплата." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Kuinka pitkä on normaali työviikko Suomessa?", en: "How long is a normal work week in Finland?", ru: "Какова продолжительность обычной рабочей недели в Финляндии?" },
            choices: [
              { fi: "30 tuntia", en: "30 hours", ru: "30 часов" },
              { fi: "37,5–40 tuntia", en: "37.5–40 hours", ru: "37,5–40 часов" },
              { fi: "45 tuntia", en: "45 hours", ru: "45 часов" },
              { fi: "50 tuntia", en: "50 hours", ru: "50 часов" }
            ],
            correct: 1,
            explanation: { fi: "Normaali työviikko on 37,5–40 tuntia. Työaikalaki säätelee ylitöitä ja lepoaikoja.", en: "A normal work week is 37.5–40 hours. The Working Hours Act regulates overtime and rest periods.", ru: "Обычная рабочая неделя составляет 37,5–40 часов. Закон о рабочем времени регулирует сверхурочную работу и время отдыха." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Työntekijä voi liittyä ___ puolustaakseen oikeuksiaan.", en: "An employee can join a ___ to defend their rights.", ru: "Работник может вступить в ___, чтобы защитить свои права." },
            answer: "ammattiliittoon",
            alternatives: ["ammattiliittoon", "ammattiliitto", "liittoon"],
            explanation: { fi: "Noin 60 % suomalaisista työntekijöistä kuuluu ammattiliittoon. Liitto neuvottelee palkoista ja työehdoista.", en: "About 60% of Finnish employees belong to a trade union. The union negotiates wages and working conditions.", ru: "Около 60% финских работников состоят в профсоюзе. Профсоюз ведёт переговоры о зарплатах и условиях труда." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä tarkoittaa 'palkasta pidätetään verot'?", en: "What does 'taxes are withheld from salary' mean?", ru: "Что означает «налоги удерживаются из зарплаты»?" },
            choices: [
              { fi: "Työnantaja vähentää verot palkasta ennen kuin se maksetaan tilille", en: "The employer deducts taxes from salary before it's paid to the account", ru: "Работодатель удерживает налоги из зарплаты до её перечисления на счёт" },
              { fi: "Työntekijä maksaa verot itse kerran vuodessa", en: "The employee pays taxes once a year themselves", ru: "Работник сам платит налоги раз в год" },
              { fi: "Veroja ei tarvitse maksaa", en: "No taxes need to be paid", ru: "Налоги платить не нужно" },
              { fi: "Verot maksetaan vain tuloista yli 50 000 €", en: "Taxes are only paid on income above 50,000€", ru: "Налоги платятся только с дохода свыше 50 000 €" }
            ],
            correct: 0,
            explanation: { fi: "Suomessa on ennakonpidätys: työnantaja pidättää tuloveron ja maksaa sen verottajalle.", en: "Finland has tax withholding: the employer withholds income tax and pays it to the tax authority.", ru: "В Финляндии действует система удержания налогов: работодатель удерживает подоходный налог и перечисляет его в налоговую службу." }
          }
        ]
      }
    ]
  },

  // ── MODULE 5: Opiskelu ja koulutus ──
  {
    id: "koulutus",
    icon: "🎓",
    title: { fi: "Opiskelu ja koulutus", en: "Education", ru: "Образование" },
    desc: { fi: "Koulutusjärjestelmä, perusopetus, toinen aste ja aikuiskoulutus.", en: "Education system, basic education, upper secondary and adult education.", ru: "Система образования, основное образование, среднее и образование для взрослых." },
    color: "#ff4b4b",
    lessons: [
      {
        id: "kou-1",
        title: { fi: "Suomen koulutusjärjestelmä", en: "Finnish education system", ru: "Финская система образования" },
        icon: "🏫",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Kuinka monta vuotta peruskoulu kestää Suomessa?", en: "How many years does basic education last in Finland?", ru: "Сколько лет длится основное образование в Финляндии?" },
            choices: [
              { fi: "6 vuotta", en: "6 years", ru: "6 лет" },
              { fi: "9 vuotta", en: "9 years", ru: "9 лет" },
              { fi: "12 vuotta", en: "12 years", ru: "12 лет" },
              { fi: "8 vuotta", en: "8 years", ru: "8 лет" }
            ],
            correct: 1,
            explanation: { fi: "Peruskoulu kestää 9 vuotta (luokat 1–9). Sitä ennen lapsi käy esiopetuksen (1 vuosi). Oppivelvollisuus on laajennettu 18 ikävuoteen.", en: "Basic education lasts 9 years (grades 1–9). Before that, children attend pre-primary education (1 year). Compulsory education has been extended to age 18.", ru: "Основное образование длится 9 лет (классы 1–9). До этого дети проходят дошкольное обучение (1 год). Обязательное образование продлено до 18 лет." }
          },
          {
            type: "true-false",
            question: { fi: "Peruskoulu on Suomessa ilmainen.", en: "Basic education is free in Finland.", ru: "Основное образование в Финляндии бесплатное." },
            correct: true,
            explanation: { fi: "Peruskoulu on täysin maksuton. Oppilaat saavat ilmaiset oppikirjat, materiaalit ja kouluruoan.", en: "Basic education is completely free. Students receive free textbooks, materials, and school meals.", ru: "Основное образование полностью бесплатное. Ученики получают бесплатные учебники, материалы и школьные обеды." }
          },
          {
            type: "matching",
            instruction: { fi: "Yhdistä koulutusaste ja kuvaus", en: "Match the education level with its description", ru: "Сопоставьте уровень образования с его описанием" },
            pairs: [
              { left: { fi: "Esiopetus", en: "Pre-primary", ru: "Дошкольное обучение" }, right: { fi: "6-vuotiaille, 1 vuosi", en: "For 6-year-olds, 1 year", ru: "Для 6-летних, 1 год" } },
              { left: { fi: "Peruskoulu", en: "Basic education", ru: "Основное образование" }, right: { fi: "7–16-vuotiaille, 9 vuotta", en: "For 7–16-year-olds, 9 years", ru: "Для 7–16-летних, 9 лет" } },
              { left: { fi: "Lukio", en: "General upper secondary", ru: "Общее среднее образование" }, right: { fi: "Yleissivistävä, valmentaa yliopistoon", en: "General, prepares for university", ru: "Общеобразовательное, подготовка к университету" } },
              { left: { fi: "Ammattikoulu", en: "Vocational school", ru: "Профессиональное училище" }, right: { fi: "Ammattiin valmentava koulutus", en: "Vocational training", ru: "Профессиональное обучение" } }
            ],
            explanation: { fi: "Peruskoulun jälkeen voi hakea lukioon tai ammattikouluun. Molemmat ovat toisen asteen koulutusta.", en: "After basic education, you can apply to general upper secondary or vocational school. Both are upper secondary education.", ru: "После основного образования можно поступить в общеобразовательную школу или профессиональное училище. Оба относятся к среднему образованию." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Oppivelvollisuus Suomessa kestää ___ ikävuoteen asti.", en: "Compulsory education in Finland lasts until the age of ___.", ru: "Обязательное образование в Финляндии длится до ___ лет." },
            answer: "18",
            alternatives: ["18", "kahdeksantoista"],
            explanation: { fi: "Vuodesta 2021 alkaen oppivelvollisuus on laajennettu 18 ikävuoteen. Toisen asteen koulutus on maksutonta.", en: "Since 2021, compulsory education has been extended to age 18. Upper secondary education is free of charge.", ru: "С 2021 года обязательное образование продлено до 18 лет. Среднее образование является бесплатным." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä aikuiskoulutusmahdollisuuksia Suomessa on?", en: "What adult education opportunities exist in Finland?", ru: "Какие возможности образования для взрослых существуют в Финляндии?" },
            choices: [
              { fi: "Kansalaisopistot, ammatilliset kurssit, avoin yliopisto, kielikurssit", en: "Adult education centers, vocational courses, open university, language courses", ru: "Народные училища, профессиональные курсы, открытый университет, языковые курсы" },
              { fi: "Vain yliopistot", en: "Only universities", ru: "Только университеты" },
              { fi: "Koulutus on vain lapsille ja nuorille", en: "Education is only for children and young people", ru: "Образование только для детей и молодёжи" },
              { fi: "Vain yksityiset koulut", en: "Only private schools", ru: "Только частные школы" }
            ],
            correct: 0,
            explanation: { fi: "Suomessa on paljon aikuiskoulutusmahdollisuuksia. Kansalaisopistot tarjoavat edullisia kursseja kielistä käsitöihin.", en: "Finland has many adult education options. Adult education centers offer affordable courses from languages to handicrafts.", ru: "В Финляндии много возможностей для образования взрослых. Народные училища предлагают доступные курсы — от языков до рукоделия." }
          }
        ]
      }
    ]
  },

  // ── MODULE 6: Perheet ──
  {
    id: "perheet",
    icon: "👨‍👩‍👧‍👦",
    title: { fi: "Perheet", en: "Families", ru: "Семьи" },
    desc: { fi: "Perhemuodot, avioliitto, lapset ja perhepalvelut.", en: "Family types, marriage, children, and family services.", ru: "Типы семей, брак, дети и семейные услуги." },
    color: "#ff9600",
    lessons: [
      {
        id: "per-1",
        title: { fi: "Perhe-elämä Suomessa", en: "Family life in Finland", ru: "Семейная жизнь в Финляндии" },
        icon: "👪",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mikä on 'avoliitto'?", en: "What is 'avoliitto' (cohabitation)?", ru: "Что такое «avoliitto» (сожительство)?" },
            choices: [
              { fi: "Kaksi ihmistä asuu yhdessä ilman avioliittoa", en: "Two people live together without marriage", ru: "Два человека живут вместе без брака" },
              { fi: "Avioliitto kirkossa", en: "Church marriage", ru: "Церковный брак" },
              { fi: "Avioero", en: "Divorce", ru: "Развод" },
              { fi: "Yksinhuoltajuus", en: "Single parenthood", ru: "Одинокое родительство" }
            ],
            correct: 0,
            explanation: { fi: "Avoliitto on yleinen perhemuoto Suomessa. Avoparilla ei ole samoja juridisia oikeuksia kuin avioparilla.", en: "Cohabitation is a common family form in Finland. Cohabiting couples don't have the same legal rights as married couples.", ru: "Сожительство — распространённая форма семьи в Финляндии. Сожительствующие пары не имеют таких же юридических прав, как супружеские пары." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa samaa sukupuolta olevat parit voivat mennä naimisiin.", en: "In Finland, same-sex couples can get married.", ru: "В Финляндии однополые пары могут вступать в брак." },
            correct: true,
            explanation: { fi: "Tasa-arvoinen avioliittolaki tuli voimaan Suomessa 1.3.2017.", en: "The equal marriage law came into effect in Finland on March 1, 2017.", ru: "Закон о равном браке вступил в силу в Финляндии 1 марта 2017 года." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Kuka saa lapsilisää Suomessa?", en: "Who receives child benefit in Finland?", ru: "Кто получает детское пособие в Финляндии?" },
            choices: [
              { fi: "Kaikki Suomessa asuvat lapsiperheet, jokaisesta alle 17-vuotiaasta lapsesta", en: "All families living in Finland, for each child under 17", ru: "Все семьи, проживающие в Финляндии, за каждого ребёнка до 17 лет" },
              { fi: "Vain Suomen kansalaiset", en: "Only Finnish citizens", ru: "Только граждане Финляндии" },
              { fi: "Vain pienituloiset perheet", en: "Only low-income families", ru: "Только малоимущие семьи" },
              { fi: "Vain yksinhuoltajat", en: "Only single parents", ru: "Только родители-одиночки" }
            ],
            correct: 0,
            explanation: { fi: "Kela maksaa lapsilisää kaikille Suomessa asuville perheille alle 17-vuotiaista lapsista. Summa kasvaa lasten lukumäärän mukaan.", en: "Kela pays child benefit to all families living in Finland for children under 17. The amount increases with the number of children.", ru: "Kela выплачивает детское пособие всем семьям, проживающим в Финляндии, на детей до 17 лет. Сумма увеличивается с количеством детей." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomessa molemmilla vanhemmilla on oikeus ___.", en: "In Finland, both parents have the right to ___.", ru: "В Финляндии оба родителя имеют право на ___." },
            answer: "vanhempainvapaaseen",
            alternatives: ["vanhempainvapaaseen", "vanhempainvapaa", "perhevapaaseen"],
            explanation: { fi: "Suomessa sekä äidillä että isällä on oikeus vanhempainvapaaseen. Uudistuksen jälkeen vapaat jaetaan tasa-arvoisemmin.", en: "In Finland, both mother and father have the right to parental leave. After reform, leaves are divided more equally.", ru: "В Финляндии и мать, и отец имеют право на отпуск по уходу за ребёнком. После реформы отпуска распределяются более равномерно." }
          },
          {
            type: "true-false",
            question: { fi: "Lapsella on lain mukaan oikeus tavata molempia vanhempiaan eron jälkeen.", en: "By law, a child has the right to see both parents after a separation.", ru: "По закону ребёнок имеет право видеться с обоими родителями после развода." },
            correct: true,
            explanation: { fi: "Lapsen etu on tärkein periaate. Lapsella on oikeus tavata molempia vanhempiaan, ellei se vaaranna lapsen turvallisuutta.", en: "The child's best interest is the primary principle. A child has the right to see both parents, unless it endangers the child's safety.", ru: "Интересы ребёнка — главный принцип. Ребёнок имеет право видеться с обоими родителями, если это не угрожает его безопасности." }
          }
        ]
      }
    ]
  },

  // ── MODULE 7: Terveys ja hyvinvointi ──
  {
    id: "terveys",
    icon: "🏥",
    title: { fi: "Terveys ja hyvinvointi", en: "Health & Wellbeing", ru: "Здоровье и благополучие" },
    desc: { fi: "Terveyspalvelut, hyvinvointi ja terveydenhuolto.", en: "Health services, wellbeing, and healthcare.", ru: "Медицинские услуги, благополучие и здравоохранение." },
    color: "#1cb0f6",
    lessons: [
      {
        id: "ter-1",
        title: { fi: "Terveyspalvelut Suomessa", en: "Health services in Finland", ru: "Медицинские услуги в Финляндии" },
        icon: "🩺",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mihin soitat hätätilanteessa Suomessa?", en: "What number do you call in an emergency in Finland?", ru: "По какому номеру звонят в экстренной ситуации в Финляндии?" },
            choices: [
              { fi: "112", en: "112", ru: "112" },
              { fi: "911", en: "911", ru: "911" },
              { fi: "118", en: "118", ru: "118" },
              { fi: "999", en: "999", ru: "999" }
            ],
            correct: 0,
            explanation: { fi: "Hätänumero Suomessa on 112. Se toimii myös muualla EU:ssa. Soita 112, kun henki, terveys tai omaisuus on vaarassa.", en: "The emergency number in Finland is 112. It also works elsewhere in the EU. Call 112 when life, health, or property is in danger.", ru: "Номер экстренной помощи в Финляндии — 112. Он также действует в других странах ЕС. Звоните 112, когда жизни, здоровью или имуществу угрожает опасность." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa terveydenhuolto on täysin ilmaista.", en: "In Finland, healthcare is completely free.", ru: "В Финляндии здравоохранение полностью бесплатное." },
            correct: false,
            explanation: { fi: "Julkinen terveydenhuolto on edullista mutta ei täysin ilmaista. Potilasmaksu on pieni, ja vuosittaiselle maksukatolla rajoitetaan kokonaiskustannuksia.", en: "Public healthcare is affordable but not completely free. Patient fees are small, and an annual payment ceiling limits total costs.", ru: "Государственное здравоохранение доступно по цене, но не полностью бесплатно. Плата пациентов невелика, а годовой потолок платежей ограничивает общие расходы." }
          },
          {
            type: "matching",
            instruction: { fi: "Yhdistä palvelu ja paikka", en: "Match the service with the place", ru: "Сопоставьте услугу с местом" },
            pairs: [
              { left: { fi: "Perusterveydenhuolto", en: "Primary healthcare", ru: "Первичная медицинская помощь" }, right: { fi: "Terveyskeskus", en: "Health center", ru: "Поликлиника" } },
              { left: { fi: "Erikoissairaanhoito", en: "Specialized care", ru: "Специализированная помощь" }, right: { fi: "Sairaala", en: "Hospital", ru: "Больница" } },
              { left: { fi: "Hammashoito", en: "Dental care", ru: "Стоматологическая помощь" }, right: { fi: "Hammashoitola", en: "Dental clinic", ru: "Стоматологическая клиника" } },
              { left: { fi: "Neuvola", en: "Maternity/child clinic", ru: "Женская/детская консультация" }, right: { fi: "Raskauden ja lasten seuranta", en: "Pregnancy and child monitoring", ru: "Наблюдение за беременностью и детьми" } }
            ],
            explanation: { fi: "Terveyskeskus on ensimmäinen paikka, johon otetaan yhteyttä ei-kiireellisissä asioissa. Neuvola seuraa raskautta ja lasten kasvua.", en: "The health center is the first place to contact for non-urgent matters. The maternity clinic monitors pregnancy and children's growth.", ru: "Поликлиника — первое место обращения при неэкстренных вопросах. Женская консультация наблюдает за беременностью и ростом детей." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomen hätänumero on ___.", en: "Finland's emergency number is ___.", ru: "Номер экстренной помощи в Финляндии — ___." },
            answer: "112",
            alternatives: ["112"],
            explanation: { fi: "Numero 112 on hätänumero koko EU:ssa. Suomessa se yhdistää poliisiin, palokuntaan ja ambulanssiin.", en: "112 is the emergency number across the EU. In Finland, it connects to police, fire department, and ambulance.", ru: "112 — номер экстренной помощи по всему ЕС. В Финляндии он соединяет с полицией, пожарной службой и скорой помощью." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mikä on 'neuvola'?", en: "What is a 'neuvola' (maternity and child health clinic)?", ru: "Что такое «neuvola» (женская и детская консультация)?" },
            choices: [
              { fi: "Palvelu, joka seuraa raskautta sekä lasten kasvua ja kehitystä", en: "A service that monitors pregnancy and children's growth and development", ru: "Служба, которая наблюдает за беременностью, ростом и развитием детей" },
              { fi: "Yksityinen lääkäriasema", en: "A private medical clinic", ru: "Частная медицинская клиника" },
              { fi: "Sairaaalan päivystys", en: "Hospital emergency room", ru: "Приёмное отделение больницы" },
              { fi: "Apteekki", en: "Pharmacy", ru: "Аптека" }
            ],
            correct: 0,
            explanation: { fi: "Neuvola on ilmainen palvelu kaikille Suomessa asuville perheille. Se on tärkeä osa suomalaista terveydenhuoltoa.", en: "Neuvola is a free service for all families living in Finland. It's an important part of Finnish healthcare.", ru: "Neuvola — бесплатная услуга для всех семей, проживающих в Финляндии. Это важная часть финского здравоохранения." }
          }
        ]
      }
    ]
  },

  // ── MODULE 8: Yhteiskunta ja vaikuttaminen ──
  {
    id: "yhteiskunta",
    icon: "🏛️",
    title: { fi: "Yhteiskunta ja vaikuttaminen", en: "Society & Participation", ru: "Общество и участие" },
    desc: { fi: "Demokratia, hallinto, vaalit ja osallistuminen.", en: "Democracy, governance, elections, and participation.", ru: "Демократия, управление, выборы и участие." },
    color: "#58cc02",
    lessons: [
      {
        id: "yht-1",
        title: { fi: "Demokratia ja hallinto", en: "Democracy and governance", ru: "Демократия и управление" },
        icon: "🗳️",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mikä on Suomen valtiomuoto?", en: "What is Finland's form of government?", ru: "Какая форма правления в Финляндии?" },
            choices: [
              { fi: "Tasavalta, jossa on presidentti ja eduskunta", en: "Republic with a president and parliament", ru: "Республика с президентом и парламентом" },
              { fi: "Kuningaskunta", en: "Kingdom", ru: "Королевство" },
              { fi: "Diktatuuri", en: "Dictatorship", ru: "Диктатура" },
              { fi: "Liittovaltio", en: "Federation", ru: "Федерация" }
            ],
            correct: 0,
            explanation: { fi: "Suomi on tasavalta. Presidentti on valtionpäämies ja eduskunta (200 kansanedustajaa) käyttää lainsäädäntövaltaa.", en: "Finland is a republic. The president is the head of state and the parliament (200 MPs) holds legislative power.", ru: "Финляндия — республика. Президент является главой государства, а парламент (200 депутатов) осуществляет законодательную власть." }
          },
          {
            type: "true-false",
            question: { fi: "Suomen eduskunnassa on 200 kansanedustajaa.", en: "The Finnish parliament has 200 members.", ru: "В финском парламенте 200 депутатов." },
            correct: true,
            explanation: { fi: "Eduskunta on Suomen ylin lainsäädäntöelin. 200 kansanedustajaa valitaan vaaleilla neljäksi vuodeksi.", en: "Parliament is Finland's supreme legislative body. 200 MPs are elected for four years.", ru: "Парламент — высший законодательный орган Финляндии. 200 депутатов избираются на четыре года." }
          },
          {
            type: "matching",
            instruction: { fi: "Yhdistä vaalityyppi ja kuvaus", en: "Match the election type with its description", ru: "Сопоставьте тип выборов с его описанием" },
            pairs: [
              { left: { fi: "Eduskuntavaalit", en: "Parliamentary elections", ru: "Парламентские выборы" }, right: { fi: "Valitaan kansanedustajat", en: "Choose members of parliament", ru: "Избрание членов парламента" } },
              { left: { fi: "Presidentinvaali", en: "Presidential election", ru: "Президентские выборы" }, right: { fi: "Valitaan tasavallan presidentti", en: "Choose the president", ru: "Избрание президента" } },
              { left: { fi: "Kuntavaalit", en: "Municipal elections", ru: "Муниципальные выборы" }, right: { fi: "Valitaan kunnanvaltuusto", en: "Choose municipal council", ru: "Избрание муниципального совета" } },
              { left: { fi: "Europarlamenttivaalit", en: "EU elections", ru: "Выборы в Европарламент" }, right: { fi: "Valitaan mepit EU:hun", en: "Choose MEPs to EU", ru: "Избрание депутатов Европарламента" } }
            ],
            explanation: { fi: "Suomessa järjestetään neljät erilaiset vaalit. Äänioikeus eduskuntavaaleissa on Suomen kansalaisilla.", en: "Four types of elections are held in Finland. Finnish citizens have voting rights in parliamentary elections.", ru: "В Финляндии проводятся четыре вида выборов. Граждане Финляндии имеют право голоса на парламентских выборах." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomen presidentti valitaan ___ vuodeksi kerrallaan.", en: "Finland's president is elected for ___ years at a time.", ru: "Президент Финляндии избирается на ___ лет." },
            answer: "kuudeksi",
            alternatives: ["kuudeksi", "6", "kuusi"],
            explanation: { fi: "Presidentti valitaan kuudeksi vuodeksi ja voi toimia enintään kaksi kautta peräkkäin.", en: "The president is elected for six years and can serve a maximum of two consecutive terms.", ru: "Президент избирается на шесть лет и может занимать должность не более двух сроков подряд." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Ketkä saavat äänestää kuntavaaleissa Suomessa?", en: "Who can vote in municipal elections in Finland?", ru: "Кто может голосовать на муниципальных выборах в Финляндии?" },
            choices: [
              { fi: "Vain Suomen kansalaiset", en: "Only Finnish citizens", ru: "Только граждане Финляндии" },
              { fi: "Kaikki 18 vuotta täyttäneet Suomessa asuvat (myös ulkomaalaiset tietyin ehdoin)", en: "All residents aged 18+ (including foreigners under certain conditions)", ru: "Все жители старше 18 лет (включая иностранцев при определённых условиях)" },
              { fi: "Vain EU-kansalaiset", en: "Only EU citizens", ru: "Только граждане ЕС" },
              { fi: "Kaikki veronmaksajat", en: "All taxpayers", ru: "Все налогоплательщики" }
            ],
            correct: 1,
            explanation: { fi: "Kuntavaaleissa voivat äänestää myös muiden maiden kansalaiset, jos he ovat asuneet Suomessa riittävän kauan.", en: "In municipal elections, citizens of other countries can also vote if they have lived in Finland long enough.", ru: "На муниципальных выборах граждане других стран также могут голосовать, если они прожили в Финляндии достаточно долго." }
          }
        ]
      }
    ]
  },

  // ── MODULE 9: Lait ja oikeus ──
  {
    id: "lait",
    icon: "⚖️",
    title: { fi: "Lait ja oikeus", en: "Laws & Legal System", ru: "Законы и правовая система" },
    desc: { fi: "Oikeusjärjestelmä, oikeudet, velvollisuudet ja oleskeluluvat.", en: "Legal system, rights, obligations, and residence permits.", ru: "Правовая система, права, обязанности и виды на жительство." },
    color: "#ce82ff",
    lessons: [
      {
        id: "lai-1",
        title: { fi: "Oikeudet ja velvollisuudet", en: "Rights and obligations", ru: "Права и обязанности" },
        icon: "📜",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mikä on Suomen perustuslain tärkein periaate?", en: "What is the most important principle of the Finnish constitution?", ru: "Каков важнейший принцип Конституции Финляндии?" },
            choices: [
              { fi: "Ihmisarvon loukkaamattomuus ja yksilön oikeudet", en: "Inviolability of human dignity and individual rights", ru: "Неприкосновенность человеческого достоинства и права личности" },
              { fi: "Taloudellinen kasvu", en: "Economic growth", ru: "Экономический рост" },
              { fi: "Armeijan vahvuus", en: "Military strength", ru: "Военная мощь" },
              { fi: "Uskonnollinen perinne", en: "Religious tradition", ru: "Религиозная традиция" }
            ],
            correct: 0,
            explanation: { fi: "Suomen perustuslaki takaa perusoikeudet kaikille: yhdenvertaisuuden, sananvapauden, uskonnonvapauden ja oikeuden elämään.", en: "The Finnish constitution guarantees fundamental rights to everyone: equality, freedom of speech, freedom of religion, and the right to life.", ru: "Конституция Финляндии гарантирует основные права каждому: равенство, свободу слова, свободу вероисповедания и право на жизнь." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa kaikki ovat yhdenvertaisia lain edessä.", en: "In Finland, everyone is equal before the law.", ru: "В Финляндии все равны перед законом." },
            correct: true,
            explanation: { fi: "Yhdenvertaisuusperiaate on perusoikeus. Ketään ei saa syrjiä iän, alkuperän, kielen, uskonnon, sukupuolen tai muun syyn perusteella.", en: "The principle of equality is a fundamental right. No one may be discriminated against based on age, origin, language, religion, gender, or other reasons.", ru: "Принцип равенства — основное право. Никто не может подвергаться дискриминации по возрасту, происхождению, языку, религии, полу или иным основаниям." }
          },
          {
            type: "matching",
            instruction: { fi: "Yhdistä oikeus ja velvollisuus", en: "Match the right with the obligation", ru: "Сопоставьте право с обязанностью" },
            pairs: [
              { left: { fi: "Oikeus koulutukseen", en: "Right to education", ru: "Право на образование" }, right: { fi: "Oppivelvollisuus", en: "Compulsory education", ru: "Обязательное образование" } },
              { left: { fi: "Oikeus sosiaaliturvaan", en: "Right to social security", ru: "Право на социальное обеспечение" }, right: { fi: "Velvollisuus maksaa veroja", en: "Obligation to pay taxes", ru: "Обязанность платить налоги" } },
              { left: { fi: "Sananvapaus", en: "Freedom of speech", ru: "Свобода слова" }, right: { fi: "Vastuu omista sanoista", en: "Responsibility for one's words", ru: "Ответственность за свои слова" } },
              { left: { fi: "Oikeus turvallisuuteen", en: "Right to safety", ru: "Право на безопасность" }, right: { fi: "Lakien noudattaminen", en: "Obedience to laws", ru: "Соблюдение законов" } }
            ],
            explanation: { fi: "Oikeudet ja velvollisuudet kulkevat käsi kädessä. Oikeuksien nauttiminen edellyttää velvollisuuksien noudattamista.", en: "Rights and obligations go hand in hand. Enjoying rights requires fulfilling obligations.", ru: "Права и обязанности идут рука об руку. Пользование правами требует выполнения обязанностей." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomen kansalaisuutta voi hakea, kun on asunut Suomessa vähintään ___ vuotta.", en: "Finnish citizenship can be applied for after living in Finland for at least ___ years.", ru: "Гражданство Финляндии можно запросить после проживания в Финляндии не менее ___ лет." },
            answer: "5",
            alternatives: ["5", "viisi"],
            explanation: { fi: "Kansalaisuuden edellytyksiä ovat mm. asumisaika (yleensä 5 vuotta), riittävä kielitaito ja nuhteettomuus.", en: "Citizenship requirements include residence time (usually 5 years), sufficient language skills, and good conduct.", ru: "Требования к гражданству включают срок проживания (обычно 5 лет), достаточное владение языком и безупречное поведение." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä 'tasa-arvo' tarkoittaa Suomen laissa?", en: "What does 'tasa-arvo' (equality) mean in Finnish law?", ru: "Что означает «tasa-arvo» (равенство) в финском законодательстве?" },
            choices: [
              { fi: "Kaikkia ihmisiä kohdellaan samalla tavalla sukupuolesta, taustasta tai uskonnosta riippumatta", en: "All people are treated equally regardless of gender, background, or religion", ru: "Ко всем людям относятся одинаково, независимо от пола, происхождения или религии" },
              { fi: "Kaikki saavat saman palkan", en: "Everyone gets the same salary", ru: "Все получают одинаковую зарплату" },
              { fi: "Kaikki ovat samannäköisiä", en: "Everyone looks the same", ru: "Все выглядят одинаково" },
              { fi: "Vain naisten oikeudet", en: "Only women's rights", ru: "Только права женщин" }
            ],
            correct: 0,
            explanation: { fi: "Tasa-arvo on Suomen perustuslain keskeinen periaate. Tasa-arvolaki ja yhdenvertaisuuslaki suojaavat syrjinnältä.", en: "Equality is a key principle of the Finnish constitution. The Equality Act and Non-Discrimination Act protect against discrimination.", ru: "Равенство — ключевой принцип Конституции Финляндии. Закон о равенстве и Закон о недискриминации защищают от дискриминации." }
          }
        ]
      }
    ]
  },

  // ── MODULE 10: Suomen historiaa ──
  {
    id: "historia",
    icon: "📖",
    title: { fi: "Suomen historiaa", en: "Finnish History", ru: "История Финляндии" },
    desc: { fi: "Suomen historian päävaiheet: Ruotsin ja Venäjän aika, itsenäistyminen.", en: "Key periods of Finnish history: Swedish and Russian rule, independence.", ru: "Основные периоды истории Финляндии: шведское и российское правление, независимость." },
    color: "#ff4b4b",
    lessons: [
      {
        id: "his-1",
        title: { fi: "Suomen historian pääpiirteet", en: "Key features of Finnish history", ru: "Основные черты истории Финляндии" },
        icon: "🏰",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Kuinka kauan Suomi oli osa Ruotsia?", en: "How long was Finland part of Sweden?", ru: "Как долго Финляндия была частью Швеции?" },
            choices: [
              { fi: "Noin 100 vuotta", en: "About 100 years", ru: "Около 100 лет" },
              { fi: "Noin 400 vuotta", en: "About 400 years", ru: "Около 400 лет" },
              { fi: "Noin 700 vuotta (noin 1150–1809)", en: "About 700 years (approx. 1150–1809)", ru: "Около 700 лет (приблизительно 1150–1809)" },
              { fi: "Noin 50 vuotta", en: "About 50 years", ru: "Около 50 лет" }
            ],
            correct: 2,
            explanation: { fi: "Suomi oli osa Ruotsin valtakuntaa noin 700 vuotta. Tänä aikana Suomeen tuli kristinusko, lait ja hallintojärjestelmä Ruotsista.", en: "Finland was part of the Kingdom of Sweden for about 700 years. During this time, Christianity, laws, and administrative systems came from Sweden.", ru: "Финляндия была частью Шведского королевства около 700 лет. За это время из Швеции пришли христианство, законы и административная система." }
          },
          {
            type: "true-false",
            question: { fi: "Suomi oli Venäjän autonominen suuriruhtinaskunta vuosina 1809–1917.", en: "Finland was an autonomous Grand Duchy of Russia from 1809–1917.", ru: "Финляндия была автономным Великим княжеством Российской империи в 1809–1917 годах." },
            correct: true,
            explanation: { fi: "Vuonna 1809 Suomi siirtyi Venäjän alaisuuteen. Suomi sai pitää omat lakinsa ja sai laajan itsehallinnon.", en: "In 1809, Finland came under Russian rule. Finland was allowed to keep its own laws and received broad autonomy.", ru: "В 1809 году Финляндия перешла под власть России. Финляндии было разрешено сохранить свои законы, и она получила широкую автономию." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomi julistautui itsenäiseksi ___.", en: "Finland declared independence on ___.", ru: "Финляндия провозгласила независимость ___." },
            answer: "6.12.1917",
            alternatives: ["6.12.1917", "6. joulukuuta 1917", "joulukuussa 1917"],
            explanation: { fi: "Suomen eduskunta hyväksyi itsenäisyysjulistuksen 6. joulukuuta 1917. Venäjän vallankumous mahdollisti itsenäistymisen.", en: "The Finnish parliament approved the declaration of independence on December 6, 1917. The Russian Revolution made independence possible.", ru: "Финский парламент утвердил декларацию независимости 6 декабря 1917 года. Русская революция сделала независимость возможной." }
          },
          {
            type: "matching",
            instruction: { fi: "Yhdistä tapahtuma ja vuosi", en: "Match the event with the year", ru: "Сопоставьте событие с годом" },
            pairs: [
              { left: { fi: "Itsenäisyysjulistus", en: "Declaration of independence", ru: "Провозглашение независимости" }, right: { fi: "1917", en: "1917", ru: "1917" } },
              { left: { fi: "Suomi liittyy EU:hun", en: "Finland joins the EU", ru: "Финляндия вступает в ЕС" }, right: { fi: "1995", en: "1995", ru: "1995" } },
              { left: { fi: "Naisten äänioikeus", en: "Women's suffrage", ru: "Избирательное право женщин" }, right: { fi: "1906", en: "1906", ru: "1906" } },
              { left: { fi: "Suomi liittyy NATOon", en: "Finland joins NATO", ru: "Финляндия вступает в НАТО" }, right: { fi: "2023", en: "2023", ru: "2023" } }
            ],
            explanation: { fi: "Suomi oli ensimmäinen maa Euroopassa, jossa naiset saivat täydet poliittiset oikeudet vuonna 1906.", en: "Finland was the first country in Europe where women gained full political rights in 1906.", ru: "Финляндия стала первой страной в Европе, где женщины получили полные политические права в 1906 году." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mikä sota käytiin Suomessa vuonna 1918?", en: "What war was fought in Finland in 1918?", ru: "Какая война велась в Финляндии в 1918 году?" },
            choices: [
              { fi: "Sisällissota (kansalaissota)", en: "Civil war", ru: "Гражданская война" },
              { fi: "Talvisota", en: "Winter War", ru: "Зимняя война" },
              { fi: "Jatkosota", en: "Continuation War", ru: "Война-продолжение" },
              { fi: "Maailmansota", en: "World War", ru: "Мировая война" }
            ],
            correct: 0,
            explanation: { fi: "Suomen sisällissota vuonna 1918 oli lyhyt mutta verinen konflikti. Talvisota Neuvostoliittoa vastaan käytiin 1939–1940.", en: "The Finnish Civil War in 1918 was a short but bloody conflict. The Winter War against the Soviet Union was fought in 1939–1940.", ru: "Гражданская война в Финляндии в 1918 году была коротким, но кровопролитным конфликтом. Зимняя война против Советского Союза велась в 1939–1940 годах." }
          }
        ]
      }
    ]
  }
];

// ============================================================
// Add extra lessons to modules for comprehensive coverage
// ============================================================

// Helper to add lessons to existing modules
function addLessonsToModule(moduleId, lessons) {
  const mod = MODULES.find(m => m.id === moduleId);
  if (mod) mod.lessons.push(...lessons);
}

// ── Extra Kotoutuminen lessons ──
addLessonsToModule("kotoutuminen", [
  {
    id: "koto-4",
    title: { fi: "Yhteiskunnan peruspiirteet", en: "Basic features of Finnish society", ru: "Основные черты финского общества" },
    icon: "🏗️",
    exercises: [
      { type: "multiple-choice", question: { fi: "Mikä on hyvinvointivaltio?", en: "What is a welfare state?", ru: "Что такое государство всеобщего благосостояния?" }, choices: [{ fi: "Valtio, joka takaa kaikille asukkaille välttämättömän toimeentulon ja palvelut", en: "A state that guarantees basic livelihood and services to all residents", ru: "Государство, которое гарантирует базовый уровень жизни и услуги всем жителям" }, { fi: "Valtio, jossa ei ole veroja", en: "A state with no taxes", ru: "Государство без налогов" }, { fi: "Valtio, jossa kaikki ovat rikkaita", en: "A state where everyone is rich", ru: "Государство, где все богаты" }, { fi: "Valtio, jossa ei ole sääntöjä", en: "A state with no rules", ru: "Государство без правил" }], correct: 0, explanation: { fi: "Hyvinvointivaltio rahoitetaan veroilla. Palvelut (terveydenhuolto, koulutus, sosiaaliturva) ovat kaikille edullisia tai maksuttomia.", en: "The welfare state is funded by taxes. Services (healthcare, education, social security) are affordable or free for everyone.", ru: "Государство всеобщего благосостояния финансируется за счёт налогов. Услуги (здравоохранение, образование, социальное обеспечение) доступны или бесплатны для всех." } },
      { type: "true-false", question: { fi: "Suomessa ihmiset luottavat viranomaisiin enemmän kuin useimmissa muissa maissa.", en: "In Finland, people trust authorities more than in most other countries.", ru: "В Финляндии люди доверяют властям больше, чем в большинстве других стран." }, correct: true, explanation: { fi: "Suomessa luottamus poliisiin, hallitukseen ja oikeusjärjestelmään on maailman korkeimpia. Luottamusta lisäävät matalat tuloerot ja toimiva hallinto.", en: "In Finland, trust in police, government, and the justice system is among the highest in the world. Low income differences and good governance increase trust.", ru: "В Финляндии доверие к полиции, правительству и судебной системе — одно из самых высоких в мире. Низкий разрыв в доходах и хорошее управление повышают доверие." } },
      { type: "multiple-choice", question: { fi: "Mitä tarkoittaa, että Suomi on yksilökeskeinen yhteiskunta?", en: "What does it mean that Finland is an individualistic society?", ru: "Что означает, что Финляндия — индивидуалистическое общество?" }, choices: [{ fi: "Ihmiset nähdään itsenäisinä yksilöinä, jotka tekevät omat päätöksensä", en: "People are seen as independent individuals making their own decisions", ru: "Люди воспринимаются как самостоятельные личности, принимающие собственные решения" }, { fi: "Ihmiset eivät auta toisiaan", en: "People don't help each other", ru: "Люди не помогают друг другу" }, { fi: "Perheellä ei ole merkitystä", en: "Family has no importance", ru: "Семья не имеет значения" }, { fi: "Ihmiset ovat itsekäs", en: "People are selfish", ru: "Люди эгоистичны" }], correct: 0, explanation: { fi: "Yksilökeskeisyys tarkoittaa, että jokainen päättää omista asioistaan. Valtion turva tekee ihmiset vähemmän riippuvaisiksi perheestä.", en: "Individualism means everyone decides their own matters. State support makes people less dependent on family.", ru: "Индивидуализм означает, что каждый решает свои дела сам. Государственная поддержка делает людей менее зависимыми от семьи." } },
      { type: "fill-blank", sentence: { fi: "Suomessa viranomaisten lahjonta on ___.", en: "In Finland, bribing officials is ___.", ru: "В Финляндии подкуп чиновников — это ___." }, answer: "rikos", alternatives: ["rikos", "laitonta", "kielletty"], explanation: { fi: "Korruptio on Suomessa erittäin harvinaista. Viranomaisten lahjonta on rikos ja siitä rangaistaan.", en: "Corruption is very rare in Finland. Bribing officials is a crime and punishable.", ru: "Коррупция в Финляндии крайне редка. Подкуп чиновников — это преступление, которое карается по закону." } },
      { type: "multiple-choice", question: { fi: "Miksi Suomessa maksetaan korkeita veroja?", en: "Why are taxes high in Finland?", ru: "Почему в Финляндии высокие налоги?" }, choices: [{ fi: "Veroilla rahoitetaan julkiset palvelut kuten terveydenhuolto ja koulutus", en: "Taxes fund public services like healthcare and education", ru: "Налоги финансируют государственные услуги, такие как здравоохранение и образование" }, { fi: "Koska presidentti haluaa niin", en: "Because the president wants it", ru: "Потому что президент так хочет" }, { fi: "Koska Suomi on köyhä maa", en: "Because Finland is a poor country", ru: "Потому что Финляндия — бедная страна" }, { fi: "Koska EU vaatii sitä", en: "Because the EU requires it", ru: "Потому что этого требует ЕС" }], correct: 0, explanation: { fi: "Veroilla rahoitetaan hyvinvointivaltion palvelut. Tutkimusten mukaan suomalaiset maksavat veroja mielellään, koska he kokevat saavansa vastineeksi hyvät palvelut.", en: "Taxes fund welfare state services. Studies show Finns willingly pay taxes because they feel they get good services in return.", ru: "Налоги финансируют услуги государства благосостояния. Исследования показывают, что финны охотно платят налоги, потому что чувствуют, что получают взамен хорошие услуги." } }
    ]
  },
  {
    id: "koto-5",
    title: { fi: "Tukea kotoutumiseen", en: "Support for integration", ru: "Поддержка интеграции" },
    icon: "🤝",
    exercises: [
      { type: "matching", instruction: { fi: "Yhdistä tuen muoto ja kuvaus", en: "Match the support form with its description", ru: "Сопоставьте форму поддержки с её описанием" }, pairs: [{ left: { fi: "Kielikoulutus", en: "Language training", ru: "Языковые курсы" }, right: { fi: "Suomen tai ruotsin kielen opetus", en: "Finnish or Swedish language teaching", ru: "Обучение финскому или шведскому языку" } }, { left: { fi: "Työkokeilu", en: "Work trial", ru: "Рабочая стажировка" }, right: { fi: "Tutustuminen ammattiin työpaikalla", en: "Getting to know a profession at workplace", ru: "Знакомство с профессией на рабочем месте" } }, { left: { fi: "Omaehtoinen opiskelu", en: "Self-directed study", ru: "Самостоятельное обучение" }, right: { fi: "Itse valittu koulutus tuella", en: "Self-chosen education with support", ru: "Самостоятельно выбранное обучение при поддержке" } }, { left: { fi: "Kuntouttava työtoiminta", en: "Rehabilitative work", ru: "Реабилитационная трудовая деятельность" }, right: { fi: "Työ- ja toimintakyvyn parantaminen", en: "Improving work and functional capacity", ru: "Улучшение трудоспособности и функциональных возможностей" } }], explanation: { fi: "TE-toimisto tarjoaa monia kotoutumista tukevia palveluja. Tavoitteena on työllistyminen ja yhteiskuntaan integroituminen.", en: "The TE office offers many services supporting integration. The goal is employment and societal integration.", ru: "Бюро TE предлагает множество услуг по поддержке интеграции. Цель — трудоустройство и интеграция в общество." } },
      { type: "true-false", question: { fi: "Kotoutumiskoulutus sisältää vain kielenopetusta.", en: "Integration training includes only language teaching.", ru: "Интеграционное обучение включает только языковые курсы." }, correct: false, explanation: { fi: "Kotoutumiskoulutus sisältää kielenopetuksen lisäksi yhteiskuntatietoa, työelämätaitoja ja arjen taitoja.", en: "Integration training includes society knowledge, work life skills, and everyday skills in addition to language teaching.", ru: "Интеграционное обучение включает знания об обществе, навыки трудовой жизни и бытовые навыки в дополнение к языковым курсам." } },
      { type: "multiple-choice", question: { fi: "Kuka tekee kotoutumissuunnitelman?", en: "Who makes the integration plan?", ru: "Кто составляет план интеграции?" }, choices: [{ fi: "Maahanmuuttaja yhdessä TE-toimiston tai kunnan kanssa", en: "The immigrant together with the TE office or municipality", ru: "Иммигрант совместно с бюро TE или муниципалитетом" }, { fi: "Poliisi", en: "Police", ru: "Полиция" }, { fi: "Presidentti", en: "President", ru: "Президент" }, { fi: "Naapurit", en: "Neighbors", ru: "Соседи" }], correct: 0, explanation: { fi: "Kotoutumissuunnitelma on henkilökohtainen ja tehdään yhdessä viranomaisen kanssa. Se huomioi henkilön taustan ja tavoitteet.", en: "The integration plan is personal and made together with an authority. It considers the person's background and goals.", ru: "План интеграции является личным и составляется совместно с органом власти. Он учитывает биографию и цели человека." } },
      { type: "fill-blank", sentence: { fi: "Kotoutumiskoulutuksessa opiskellaan suomen kieltä ja ___.", en: "In integration training, Finnish language and ___ are studied.", ru: "На курсах интеграции изучаются финский язык и ___." }, answer: "yhteiskuntatietoa", alternatives: ["yhteiskuntatietoa", "yhteiskuntaa"], explanation: { fi: "Yhteiskuntatieto on tärkeä osa kotoutumiskoulutusta. Se auttaa ymmärtämään Suomen lakeja, tapoja ja oikeuksia.", en: "Society knowledge is an important part of integration training. It helps understand Finnish laws, customs, and rights.", ru: "Знание об обществе — важная часть интеграционного обучения. Оно помогает понять финские законы, обычаи и права." } },
      { type: "multiple-choice", question: { fi: "Mitä sosiaaliset verkostot tarkoittavat kotoutumisessa?", en: "What do social networks mean in integration?", ru: "Что означают социальные связи в контексте интеграции?" }, choices: [{ fi: "Kaikki ihmiset, jotka henkilö tuntee: perhe, ystävät, työkaverit", en: "All people a person knows: family, friends, colleagues", ru: "Все люди, которых человек знает: семья, друзья, коллеги" }, { fi: "Facebook ja Instagram", en: "Facebook and Instagram", ru: "Facebook и Instagram" }, { fi: "Vain suomalaisia ystäviä", en: "Only Finnish friends", ru: "Только финские друзья" }, { fi: "Viranomaiskontaktit", en: "Authority contacts", ru: "Контакты с властями" }], correct: 0, explanation: { fi: "Sosiaaliset verkostot ovat tärkeitä hyvinvoinnille. On hyödyllistä tutustua sekä muihin maahanmuuttajiin että kantasuomalaisiin.", en: "Social networks are important for wellbeing. It's beneficial to get to know both other immigrants and native Finns.", ru: "Социальные связи важны для благополучия. Полезно знакомиться как с другими иммигрантами, так и с коренными финнами." } }
    ]
  }
]);

// ── Extra Arki lessons ──
addLessonsToModule("arki", [
  {
    id: "arki-3",
    title: { fi: "Vapaa-aika ja liikkuminen", en: "Free time and transportation", ru: "Свободное время и транспорт" },
    icon: "🚌",
    exercises: [
      { type: "multiple-choice", question: { fi: "Mikä on joukkoliikenne?", en: "What is public transport?", ru: "Что такое общественный транспорт?" }, choices: [{ fi: "Bussi, juna, raitiovaunu ja metro", en: "Bus, train, tram and metro", ru: "Автобус, поезд, трамвай и метро" }, { fi: "Vain taksit", en: "Only taxis", ru: "Только такси" }, { fi: "Vain autot", en: "Only cars", ru: "Только автомобили" }, { fi: "Polkupyörät", en: "Bicycles", ru: "Велосипеды" }], correct: 0, explanation: { fi: "Suomen kaupungeissa on hyvä joukkoliikenne. Helsingissä on bussi, raitiovaunu, metro ja lähijunat. HSL-kortilla voi matkustaa kaikilla.", en: "Finnish cities have good public transport. Helsinki has buses, trams, metro and commuter trains. HSL card works on all.", ru: "В финских городах хороший общественный транспорт. В Хельсинки есть автобусы, трамваи, метро и пригородные поезда. Карта HSL действует на всех видах." } },
      { type: "true-false", question: { fi: "Suomessa kirjastokortti on ilmainen.", en: "In Finland, a library card is free.", ru: "В Финляндии библиотечная карта бесплатная." }, correct: true, explanation: { fi: "Kirjastot ovat Suomessa ilmaisia kaikille. Kirjastoista voi lainata kirjojen lisäksi musiikkia, elokuvia, pelejä ja jopa työkaluja.", en: "Libraries are free for everyone in Finland. You can borrow books, music, movies, games, and even tools.", ru: "Библиотеки в Финляндии бесплатны для всех. Можно брать книги, музыку, фильмы, игры и даже инструменты." } },
      { type: "fill-blank", sentence: { fi: "Suomessa ___ ovat ilmaisia ja avoimia kaikille.", en: "In Finland, ___ are free and open to everyone.", ru: "В Финляндии ___ бесплатны и открыты для всех." }, answer: "kirjastot", alternatives: ["kirjastot", "kirjasto"], explanation: { fi: "Suomen kirjastoverkko on maailman parhaita. Kirjastot tarjoavat myös internet-yhteyden, kursseja ja tapahtumia.", en: "Finland's library network is among the world's best. Libraries also offer internet access, courses, and events.", ru: "Библиотечная сеть Финляндии — одна из лучших в мире. Библиотеки также предлагают доступ в интернет, курсы и мероприятия." } },
      { type: "multiple-choice", question: { fi: "Mitä tarvitset ajaaksesi autoa Suomessa?", en: "What do you need to drive a car in Finland?", ru: "Что нужно для вождения автомобиля в Финляндии?" }, choices: [{ fi: "Ajokortti, liikennevakuutus ja katsastettu auto", en: "Driver's license, traffic insurance, and inspected car", ru: "Водительские права, страховка транспортного средства и прошедший техосмотр автомобиль" }, { fi: "Vain ajokortti", en: "Only a driver's license", ru: "Только водительские права" }, { fi: "Vain vakuutus", en: "Only insurance", ru: "Только страховка" }, { fi: "Ei mitään", en: "Nothing", ru: "Ничего" }], correct: 0, explanation: { fi: "Ajokortti on pakollinen. Liikennevakuutus on pakollinen kaikille autoille. Katsastus tarkistaa auton turvallisuuden.", en: "Driver's license is mandatory. Traffic insurance is mandatory for all cars. Vehicle inspection checks the car's safety.", ru: "Водительские права обязательны. Страховка обязательна для всех автомобилей. Техосмотр проверяет безопасность автомобиля." } },
      { type: "matching", instruction: { fi: "Yhdistä vapaa-ajan paikka ja toiminta", en: "Match the leisure place with activity", ru: "Сопоставьте место досуга с занятием" }, pairs: [{ left: { fi: "Kirjasto", en: "Library", ru: "Библиотека" }, right: { fi: "Lainaa kirjoja ja käytä nettiä", en: "Borrow books and use internet", ru: "Брать книги и пользоваться интернетом" } }, { left: { fi: "Kansalaisopisto", en: "Adult education center", ru: "Народное училище" }, right: { fi: "Edullisia kursseja", en: "Affordable courses", ru: "Доступные курсы" } }, { left: { fi: "Uimahalli", en: "Swimming hall", ru: "Бассейн" }, right: { fi: "Uinti ja sauna", en: "Swimming and sauna", ru: "Плавание и сауна" } }, { left: { fi: "Liikuntapuisto", en: "Sports park", ru: "Спортивный парк" }, right: { fi: "Ulkoliikunta ilmaiseksi", en: "Outdoor sports for free", ru: "Бесплатный спорт на открытом воздухе" } }], explanation: { fi: "Suomessa on paljon edullisia vapaa-ajan mahdollisuuksia. Kunnat tarjoavat liikuntapalveluja ja kulttuuritoimintaa.", en: "Finland has many affordable leisure options. Municipalities offer sports services and cultural activities.", ru: "В Финляндии много доступных вариантов досуга. Муниципалитеты предлагают спортивные и культурные мероприятия." } }
    ]
  }
]);

// ── Extra Työ lessons ──
addLessonsToModule("tyo", [
  {
    id: "tyo-3",
    title: { fi: "Lait ja säännöt työssä", en: "Laws and rules at work", ru: "Законы и правила на работе" },
    icon: "📋",
    exercises: [
      { type: "multiple-choice", question: { fi: "Mitä työsopimuksessa sovitaan?", en: "What is agreed in an employment contract?", ru: "О чём договариваются в трудовом договоре?" }, choices: [{ fi: "Työtehtävät, palkka, työaika ja työsuhteen kesto", en: "Work tasks, salary, working hours and duration", ru: "Рабочие обязанности, зарплата, рабочее время и срок действия" }, { fi: "Vain palkka", en: "Only salary", ru: "Только зарплата" }, { fi: "Vain työaika", en: "Only working hours", ru: "Только рабочее время" }, { fi: "Vain lomat", en: "Only vacations", ru: "Только отпуска" }], correct: 0, explanation: { fi: "Työsopimus on tehtävä kirjallisesti. Se sisältää kaikki työsuhteen ehdot. Suullinen sopimus on myös sitova, mutta kirjallinen on turvallisempi.", en: "The employment contract should be in writing. It includes all terms of employment. An oral agreement is also binding, but written is safer.", ru: "Трудовой договор должен быть составлен в письменной форме. Он включает все условия трудоустройства. Устная договорённость тоже обязательна, но письменная безопаснее." } },
      { type: "true-false", question: { fi: "Työnantaja saa irtisanoa työntekijän ilman syytä koeajan jälkeen.", en: "The employer can dismiss an employee without reason after the trial period.", ru: "Работодатель может уволить работника без причины после испытательного срока." }, correct: false, explanation: { fi: "Koeajan jälkeen irtisanomiseen tarvitaan asiallinen ja painava syy. Laiton irtisanomisperuste on esim. raskaus, sairaus tai ammattiliiton jäsenyys.", en: "After the trial period, a proper and serious reason is needed for dismissal. Illegal grounds include pregnancy, illness, or union membership.", ru: "После испытательного срока для увольнения необходима надлежащая и веская причина. Незаконные основания включают беременность, болезнь или членство в профсоюзе." } },
      { type: "fill-blank", sentence: { fi: "Työnantajan on annettava työntekijälle ___ joka kuukausi.", en: "The employer must give the employee a ___ every month.", ru: "Работодатель обязан ежемесячно выдавать работнику ___." }, answer: "palkkalaskelma", alternatives: ["palkkalaskelma", "palkkakuitti"], explanation: { fi: "Palkkalaskelmasta näkee bruttopalkan, verot, eläkemaksut ja nettopalkan. Tarkista aina, että tiedot ovat oikein.", en: "The payslip shows gross salary, taxes, pension contributions, and net salary. Always check that the information is correct.", ru: "Расчётный лист показывает начисленную зарплату, налоги, пенсионные взносы и чистую зарплату. Всегда проверяйте правильность данных." } },
      { type: "multiple-choice", question: { fi: "Mitä tehdä, jos sinua syrjitään työpaikalla?", en: "What to do if you're discriminated at work?", ru: "Что делать, если вас дискриминируют на работе?" }, choices: [{ fi: "Ota yhteyttä ammattiliittoon, työsuojeluviranomaisiin tai tasa-arvovaltuutettuun", en: "Contact your trade union, occupational safety authority, or equality ombudsman", ru: "Обратитесь в профсоюз, орган охраны труда или к уполномоченному по вопросам равенства" }, { fi: "Ei voi tehdä mitään", en: "Nothing can be done", ru: "Ничего нельзя сделать" }, { fi: "Eroaa heti", en: "Resign immediately", ru: "Немедленно уволиться" }, { fi: "Soittaa poliisille", en: "Call the police", ru: "Позвонить в полицию" }], correct: 0, explanation: { fi: "Syrjintä on laitonta Suomessa. Ammattiliitto ja työsuojeluviranomaiset auttavat. Myös tasa-arvovaltuutettu neuvoo syrjintäasioissa.", en: "Discrimination is illegal in Finland. Trade unions and occupational safety authorities help. The equality ombudsman also advises on discrimination.", ru: "Дискриминация незаконна в Финляндии. Профсоюзы и органы охраны труда помогают. Уполномоченный по вопросам равенства также консультирует по вопросам дискриминации." } },
      { type: "true-false", question: { fi: "Suomessa on pakollinen työeläkevakuutus kaikille työntekijöille.", en: "Finland has mandatory employment pension insurance for all employees.", ru: "В Финляндии обязательное пенсионное страхование для всех работников." }, correct: true, explanation: { fi: "Työnantaja ja työntekijä maksavat molemmat eläkemaksuja. Eläke kertyy kaikesta palkkatyöstä ja yrittäjätulosta.", en: "Both employer and employee pay pension contributions. Pension accrues from all paid work and entrepreneurial income.", ru: "И работодатель, и работник платят пенсионные взносы. Пенсия накапливается со всей оплачиваемой работы и дохода от предпринимательства." } }
    ]
  }
]);

// ── Extra Koulutus lessons ──
addLessonsToModule("koulutus", [
  {
    id: "kou-2",
    title: { fi: "Koulun arki ja aikuiskoulutus", en: "School life and adult education", ru: "Школьная жизнь и образование для взрослых" },
    icon: "📚",
    exercises: [
      { type: "multiple-choice", question: { fi: "Mikä on opettajan rooli Suomessa?", en: "What is the teacher's role in Finland?", ru: "Какова роль учителя в Финляндии?" }, choices: [{ fi: "Arvostettu ammattilainen, joka käyttää nykyaikaisia opetusmenetelmiä", en: "A respected professional who uses modern teaching methods", ru: "Уважаемый профессионал, использующий современные методы обучения" }, { fi: "Vain tiedon jakaja", en: "Only a knowledge deliverer", ru: "Только транслятор знаний" }, { fi: "Kurinpitäjä", en: "A disciplinarian", ru: "Блюститель дисциплины" }, { fi: "Viihdyttäjä", en: "An entertainer", ru: "Развлекатель" }], correct: 0, explanation: { fi: "Opettajan ammatti on Suomessa arvostettu ja suosittu. Kaikilla opettajilla on maisterin tutkinto. Opetus perustuu vuorovaikutukseen.", en: "The teaching profession is respected and popular in Finland. All teachers have a master's degree. Teaching is based on interaction.", ru: "Профессия учителя уважаема и популярна в Финляндии. Все учителя имеют степень магистра. Обучение основано на взаимодействии." } },
      { type: "true-false", question: { fi: "Suomessa kouluruoka on ilmaista peruskoululaisille.", en: "In Finland, school meals are free for basic education students.", ru: "В Финляндии школьные обеды бесплатны для учащихся основной школы." }, correct: true, explanation: { fi: "Suomi oli ensimmäinen maa maailmassa, joka tarjosi ilmaisen kouluruoan kaikille koululaisille (1948). Myös oppikirjat ovat ilmaisia.", en: "Finland was the first country in the world to offer free school meals to all students (1948). Textbooks are also free.", ru: "Финляндия стала первой страной в мире, предложившей бесплатные школьные обеды всем ученикам (1948). Учебники тоже бесплатные." } },
      { type: "matching", instruction: { fi: "Yhdistä koulutusmuoto ja kohderyhmä", en: "Match education type and target group", ru: "Сопоставьте вид образования и целевую группу" }, pairs: [{ left: { fi: "Kansalaisopisto", en: "Adult education center", ru: "Народное училище" }, right: { fi: "Kaikille aikuisille, edullinen", en: "For all adults, affordable", ru: "Для всех взрослых, доступное" } }, { left: { fi: "Avoin yliopisto", en: "Open university", ru: "Открытый университет" }, right: { fi: "Yliopistokursseja ilman tutkinto-oikeutta", en: "University courses without degree", ru: "Университетские курсы без получения диплома" } }, { left: { fi: "Kotoutumiskoulutus", en: "Integration training", ru: "Интеграционное обучение" }, right: { fi: "Maahanmuuttajille", en: "For immigrants", ru: "Для иммигрантов" } }, { left: { fi: "Oppisopimuskoulutus", en: "Apprenticeship", ru: "Обучение по договору" }, right: { fi: "Ammatin oppiminen työssä", en: "Learning profession at work", ru: "Освоение профессии на рабочем месте" } }], explanation: { fi: "Suomessa on monipuolinen aikuiskoulutusjärjestelmä. Kaikilla on mahdollisuus opiskella iästä ja taustasta riippumatta.", en: "Finland has a diverse adult education system. Everyone can study regardless of age and background.", ru: "В Финляндии разнообразная система образования для взрослых. Каждый может учиться вне зависимости от возраста и происхождения." } },
      { type: "fill-blank", sentence: { fi: "Peruskoulu kestää Suomessa ___ vuotta.", en: "Basic education in Finland lasts ___ years.", ru: "Основное образование в Финляндии длится ___ лет." }, answer: "9", alternatives: ["9", "yhdeksän"], explanation: { fi: "Peruskoulu alkaa 7-vuotiaana ja kestää 9 vuotta (luokat 1–9). Sitä edeltää 1 vuoden esiopetus.", en: "Basic education starts at age 7 and lasts 9 years (grades 1–9). It's preceded by 1 year of pre-primary education.", ru: "Основное образование начинается в 7 лет и длится 9 лет (классы 1–9). Ему предшествует 1 год дошкольного обучения." } },
      { type: "multiple-choice", question: { fi: "Mihin ikään asti oppivelvollisuus kestää?", en: "Until what age does compulsory education last?", ru: "До какого возраста длится обязательное образование?" }, choices: [{ fi: "15 vuotta", en: "15 years", ru: "15 лет" }, { fi: "16 vuotta", en: "16 years", ru: "16 лет" }, { fi: "18 vuotta", en: "18 years", ru: "18 лет" }, { fi: "20 vuotta", en: "20 years", ru: "20 лет" }], correct: 2, explanation: { fi: "Vuodesta 2021 alkaen oppivelvollisuus kestää 18 ikävuoteen. Toisen asteen koulutus (lukio tai ammattikoulu) on maksutonta.", en: "Since 2021, compulsory education lasts until age 18. Upper secondary education is free of charge.", ru: "С 2021 года обязательное образование длится до 18 лет. Среднее образование является бесплатным." } }
    ]
  }
]);

// ── Extra Perheet lessons ──
addLessonsToModule("perheet", [
  {
    id: "per-2",
    title: { fi: "Tasa-arvo perheissä", en: "Equality in families", ru: "Равенство в семье" },
    icon: "⚖️",
    exercises: [
      { type: "true-false", question: { fi: "Suomessa molemmat vanhemmat ovat lain mukaan vastuussa lasten kasvatuksesta.", en: "In Finland, both parents are legally responsible for raising children.", ru: "В Финляндии оба родителя несут юридическую ответственность за воспитание детей." }, correct: true, explanation: { fi: "Suomen lain mukaan molemmat vanhemmat ovat vastuussa lastensa huollosta ja kasvatuksesta riippumatta siitä, ovatko he yhdessä vai eronneet.", en: "Under Finnish law, both parents are responsible for the custody and upbringing of their children, regardless of whether they are together or separated.", ru: "По финскому законодательству оба родителя несут ответственность за опеку и воспитание своих детей, независимо от того, живут они вместе или раздельно." } },
      { type: "multiple-choice", question: { fi: "Milloin samaa sukupuolta olevien avioliitto tuli mahdolliseksi Suomessa?", en: "When did same-sex marriage become possible in Finland?", ru: "Когда однополые браки стали возможны в Финляндии?" }, choices: [{ fi: "2002", en: "2002", ru: "2002" }, { fi: "2010", en: "2010", ru: "2010" }, { fi: "2017", en: "2017", ru: "2017" }, { fi: "2020", en: "2020", ru: "2020" }], correct: 2, explanation: { fi: "Tasa-arvoinen avioliittolaki tuli voimaan 1.3.2017. Kansalaisaloite keräsi yli 166 000 allekirjoitusta.", en: "The equal marriage law came into effect on March 1, 2017. A citizens' initiative collected over 166,000 signatures.", ru: "Закон о равном браке вступил в силу 1 марта 2017 года. Гражданская инициатива собрала более 166 000 подписей." } },
      { type: "fill-blank", sentence: { fi: "Lapsen ruumiillinen kurittaminen on Suomessa ___.", en: "Physical punishment of children is ___ in Finland.", ru: "Физическое наказание детей в Финляндии ___." }, answer: "kielletty", alternatives: ["kielletty", "laitonta", "rikos"], explanation: { fi: "Lasten ruumiillinen kurittaminen kiellettiin Suomessa 1984. Lasta ei saa lyödä, tukistaa tai kohdella väkivaltaisesti.", en: "Physical punishment of children was banned in Finland in 1984. Children may not be hit, pulled by the hair, or treated violently.", ru: "Физическое наказание детей было запрещено в Финляндии в 1984 году. Детей нельзя бить, таскать за волосы или обращаться с ними жестоко." } },
      { type: "multiple-choice", question: { fi: "Mikä on neuvolan tehtävä?", en: "What is the role of neuvola?", ru: "Какова роль neuvola?" }, choices: [{ fi: "Seurata raskautta ja lasten kasvua ja kehitystä", en: "Monitor pregnancy and children's growth and development", ru: "Наблюдение за беременностью, ростом и развитием детей" }, { fi: "Opettaa lapsia lukemaan", en: "Teach children to read", ru: "Обучение детей чтению" }, { fi: "Hoitaa sairaita lapsia", en: "Treat sick children", ru: "Лечение больных детей" }, { fi: "Järjestää päivähoitoa", en: "Organize daycare", ru: "Организация детских садов" }], correct: 0, explanation: { fi: "Neuvola on ilmainen palvelu kaikille perheille. Äitiysneuvola seuraa raskautta, lastenneuvola lasten kasvua ja kehitystä.", en: "Neuvola is a free service for all families. Maternity clinic monitors pregnancy, child health clinic monitors growth and development.", ru: "Neuvola — бесплатная услуга для всех семей. Женская консультация наблюдает за беременностью, детская — за ростом и развитием." } },
      { type: "true-false", question: { fi: "Suomessa jokaisella lapsella on oikeus päivähoitoon.", en: "In Finland, every child has the right to daycare.", ru: "В Финляндии каждый ребёнок имеет право на детский сад." }, correct: true, explanation: { fi: "Kaikilla alle kouluikäisillä lapsilla on subjektiivinen oikeus varhaiskasvatukseen. Maksu riippuu perheen tuloista.", en: "All preschool-age children have a subjective right to early childhood education. The fee depends on family income.", ru: "Все дети дошкольного возраста имеют субъективное право на дошкольное воспитание. Плата зависит от дохода семьи." } }
    ]
  }
]);

// ── Extra Terveys lessons ──
addLessonsToModule("terveys", [
  {
    id: "ter-2",
    title: { fi: "Hyvinvointi ja ennaltaehkäisy", en: "Wellbeing and prevention", ru: "Благополучие и профилактика" },
    icon: "🧘",
    exercises: [
      { type: "multiple-choice", question: { fi: "Mitä hyvinvointialueet tekevät?", en: "What do wellbeing services counties do?", ru: "Чем занимаются округа благополучия?" }, choices: [{ fi: "Järjestävät sosiaali- ja terveyspalvelut sekä pelastustoimen", en: "Organize social and health services and rescue services", ru: "Организуют социальные и медицинские услуги, а также спасательные службы" }, { fi: "Rakentavat teitä", en: "Build roads", ru: "Строят дороги" }, { fi: "Opettavat kouluissa", en: "Teach in schools", ru: "Преподают в школах" }, { fi: "Keräävät veroja", en: "Collect taxes", ru: "Собирают налоги" }], correct: 0, explanation: { fi: "Hyvinvointialueet aloittivat 1.1.2023. Ne vastaavat terveydenhuollosta, sosiaalipalveluista ja pelastustoimesta.", en: "Wellbeing services counties started on Jan 1, 2023. They are responsible for healthcare, social services, and rescue services.", ru: "Округа благополучия начали работу 1 января 2023 года. Они отвечают за здравоохранение, социальные услуги и спасательные службы." } },
      { type: "true-false", question: { fi: "Suomessa reseptilääkkeet saa vain apteekista.", en: "In Finland, prescription medicines can only be obtained from a pharmacy.", ru: "В Финляндии рецептурные лекарства можно получить только в аптеке." }, correct: true, explanation: { fi: "Lääkäri kirjoittaa sähköisen reseptin, ja lääkkeet haetaan apteekista. Kela korvaa osan lääkekustannuksista.", en: "The doctor writes an electronic prescription, and medicines are picked up at the pharmacy. Kela reimburses part of medicine costs.", ru: "Врач выписывает электронный рецепт, а лекарства забирают в аптеке. Kela возмещает часть стоимости лекарств." } },
      { type: "fill-blank", sentence: { fi: "Suomen hätänumero on ___, ja se toimii koko EU:ssa.", en: "Finland's emergency number is ___, and it works across the EU.", ru: "Номер экстренной помощи в Финляндии — ___, и он действует по всему ЕС." }, answer: "112", alternatives: ["112"], explanation: { fi: "Soita 112, kun henki, terveys tai omaisuus on välittömässä vaarassa. Älä soita 112 kiireettömissä asioissa.", en: "Call 112 when life, health, or property is in immediate danger. Don't call 112 for non-urgent matters.", ru: "Звоните 112, когда жизни, здоровью или имуществу угрожает непосредственная опасность. Не звоните 112 по неэкстренным вопросам." } },
      { type: "multiple-choice", question: { fi: "Mitä Kela-kortti tarkoittaa?", en: "What does the Kela card mean?", ru: "Что такое карта Kela?" }, choices: [{ fi: "Todistus sosiaaliturvasta Suomessa — oikeuttaa julkiseen terveydenhuoltoon", en: "Proof of social security in Finland — entitles to public healthcare", ru: "Подтверждение социального обеспечения в Финляндии — даёт право на государственное здравоохранение" }, { fi: "Luottokortti", en: "Credit card" }, { fi: "Matkustusasiakirja", en: "Travel document", ru: "Проездной документ" }, { fi: "Kirjastokortti", en: "Library card" }], correct: 0, explanation: { fi: "Kela-kortti osoittaa, että henkilö kuuluu Suomen sosiaaliturvan piiriin. Se on hyvä pitää mukana.", en: "The Kela card shows that a person is covered by Finnish social security. It's good to carry it with you.", ru: "Карта Kela подтверждает, что человек охвачен финским социальным обеспечением. Её хорошо иметь при себе." } },
      { type: "matching", instruction: { fi: "Yhdistä terveyspalvelu ja tilanne", en: "Match health service and situation", ru: "Сопоставьте медицинскую услугу и ситуацию" }, pairs: [{ left: { fi: "Terveyskeskus", en: "Health center", ru: "Поликлиника" }, right: { fi: "Flunssa, kiputilat, rokotukset", en: "Flu, pain, vaccinations", ru: "Грипп, боль, прививки" } }, { left: { fi: "Päivystys", en: "Emergency room", ru: "Приёмное отделение" }, right: { fi: "Kiireellinen hoito illalla/viikonloppuna", en: "Urgent care evenings/weekends", ru: "Экстренная помощь вечером/в выходные" } }, { left: { fi: "Neuvola", en: "Maternity clinic", ru: "Женская консультация" }, right: { fi: "Raskaus ja lasten terveystarkastukset", en: "Pregnancy and children's checkups", ru: "Беременность и медосмотры детей" } }, { left: { fi: "112", en: "112", ru: "112" }, right: { fi: "Henkeä uhkaava hätätilanne", en: "Life-threatening emergency", ru: "Угрожающая жизни экстренная ситуация" } }], explanation: { fi: "Terveyskeskus on ensimmäinen kontakti ei-kiireellisissä asioissa. Päivystys on kiireellisille tapauksille. 112 on hätätilanteisiin.", en: "Health center is the first contact for non-urgent matters. ER is for urgent cases. 112 is for emergencies.", ru: "Поликлиника — первое место обращения при неэкстренных вопросах. Приёмное отделение — для экстренных случаев. 112 — для чрезвычайных ситуаций." } }
    ]
  }
]);

// ── Extra Yhteiskunta lessons ──
addLessonsToModule("yhteiskunta", [
  {
    id: "yht-2",
    title: { fi: "Osallistuminen ja vaikuttaminen", en: "Participation and influence", ru: "Участие и влияние" },
    icon: "✊",
    exercises: [
      { type: "multiple-choice", question: { fi: "Miten tavallinen ihminen voi vaikuttaa Suomessa?", en: "How can an ordinary person influence things in Finland?", ru: "Как обычный человек может влиять на события в Финляндии?" }, choices: [{ fi: "Äänestämällä, osallistumalla yhdistyksiin, tekemällä kansalaisaloitteita", en: "Voting, joining associations, making citizens' initiatives", ru: "Голосование, участие в объединениях, создание гражданских инициатив" }, { fi: "Vain äänestämällä", en: "Only by voting", ru: "Только голосованием" }, { fi: "Ei mitenkään", en: "In no way", ru: "Никак" }, { fi: "Vain kirjoittamalla lehteen", en: "Only by writing to a newspaper", ru: "Только написав в газету" }], correct: 0, explanation: { fi: "Suomessa on monia tapoja vaikuttaa: äänestäminen, kansalaisaloitteet, yhdistystoiminta, kuntalaisaloitteet ja mielenilmaukset.", en: "Finland has many ways to influence: voting, citizens' initiatives, associations, municipal initiatives, and demonstrations.", ru: "В Финляндии есть много способов влиять: голосование, гражданские инициативы, объединения, муниципальные инициативы и демонстрации." } },
      { type: "true-false", question: { fi: "Kansalaisaloite, jonka on allekirjoittanut yli 50 000 henkilöä, on käsiteltävä eduskunnassa.", en: "A citizens' initiative signed by over 50,000 people must be processed in parliament.", ru: "Гражданская инициатива, подписанная более чем 50 000 человек, должна быть рассмотрена в парламенте." }, correct: true, explanation: { fi: "Kansalaisaloite on demokraattinen tapa vaikuttaa lainsäädäntöön. Tasa-arvoinen avioliittolaki syntyi kansalaisaloitteen kautta.", en: "A citizens' initiative is a democratic way to influence legislation. The equal marriage law came through a citizens' initiative.", ru: "Гражданская инициатива — демократический способ влиять на законодательство. Закон о равном браке был принят благодаря гражданской инициативе." } },
      { type: "fill-blank", sentence: { fi: "Kuntavaaleissa voivat äänestää myös ___, jotka ovat asuneet Suomessa riittävän kauan.", en: "In municipal elections, ___ who have lived in Finland long enough can also vote.", ru: "На муниципальных выборах могут голосовать и ___, которые прожили в Финляндии достаточно долго." }, answer: "ulkomaalaiset", alternatives: ["ulkomaalaiset", "ulkomaan kansalaiset", "maahanmuuttajat"], explanation: { fi: "Kuntavaaleissa äänioikeus on kaikilla 18 vuotta täyttäneillä, jotka asuvat kunnassa — myös muiden maiden kansalaisilla tietyin ehdoin.", en: "In municipal elections, all 18+ residents can vote — including citizens of other countries under certain conditions.", ru: "На муниципальных выборах могут голосовать все жители старше 18 лет, включая граждан других стран при определённых условиях." } },
      { type: "multiple-choice", question: { fi: "Kuinka monta poliittista puoluetta on Suomen eduskunnassa?", en: "How many political parties are in the Finnish parliament?", ru: "Сколько политических партий в финском парламенте?" }, choices: [{ fi: "2", en: "2", ru: "2" }, { fi: "5", en: "5", ru: "5" }, { fi: "Noin 8–10", en: "About 8–10", ru: "Около 8–10" }, { fi: "Yli 20", en: "Over 20", ru: "Более 20" }], correct: 2, explanation: { fi: "Suomessa on monipuoluejärjestelmä. Eduskunnassa on tyypillisesti 8–10 puoluetta. Suurimpia ovat SDP, kokoomus, perussuomalaiset ja keskusta.", en: "Finland has a multi-party system. Parliament typically has 8–10 parties. The largest are SDP, National Coalition, Finns Party, and Centre Party.", ru: "В Финляндии многопартийная система. В парламенте обычно 8–10 партий. Крупнейшие — СДПФ, Национальная коалиция, Истинные финны и Партия центра." } },
      { type: "true-false", question: { fi: "Suomen presidentti johtaa ulkopolitiikkaa yhdessä hallituksen kanssa.", en: "Finland's president leads foreign policy together with the government.", ru: "Президент Финляндии руководит внешней политикой совместно с правительством." }, correct: true, explanation: { fi: "Presidentin tärkein tehtävä on ulkopolitiikan johtaminen yhdessä valtioneuvoston kanssa. Presidentti myös vahvistaa lait.", en: "The president's main task is leading foreign policy with the government. The president also ratifies laws.", ru: "Главная задача президента — руководство внешней политикой совместно с правительством. Президент также утверждает законы." } }
    ]
  }
]);

// ── Extra Lait lessons ──
addLessonsToModule("lait", [
  {
    id: "lai-2",
    title: { fi: "Oleskeluluvat ja kansalaisuus", en: "Residence permits and citizenship", ru: "Виды на жительство и гражданство" },
    icon: "🛂",
    exercises: [
      { type: "multiple-choice", question: { fi: "Mikä viranomainen käsittelee kansalaisuushakemukset?", en: "Which authority processes citizenship applications?", ru: "Какой орган рассматривает заявления на гражданство?" }, choices: [{ fi: "Maahanmuuttovirasto (Migri)", en: "Finnish Immigration Service (Migri)", ru: "Миграционная служба Финляндии (Migri)" }, { fi: "Poliisi", en: "Police", ru: "Полиция" }, { fi: "TE-toimisto", en: "TE office", ru: "Бюро TE" }, { fi: "Kela", en: "Kela", ru: "Kela" }], correct: 0, explanation: { fi: "Maahanmuuttovirasto (Migri) käsittelee oleskelulupa- ja kansalaisuushakemukset. Hakemus tehdään sähköisesti Enter Finland -palvelussa.", en: "Finnish Immigration Service (Migri) processes residence permit and citizenship applications. Applications are made electronically via Enter Finland.", ru: "Миграционная служба Финляндии (Migri) рассматривает заявления на вид на жительство и гражданство. Заявления подаются электронно через Enter Finland." } },
      { type: "matching", instruction: { fi: "Yhdistä kansalaisuuden edellytys ja kuvaus", en: "Match citizenship requirement and description", ru: "Сопоставьте требование к гражданству и описание" }, pairs: [{ left: { fi: "Asumisaika", en: "Residence time", ru: "Срок проживания" }, right: { fi: "Vähintään 5 vuotta Suomessa", en: "At least 5 years in Finland", ru: "Не менее 5 лет в Финляндии" } }, { left: { fi: "Kielitaito", en: "Language skills", ru: "Владение языком" }, right: { fi: "Suomi tai ruotsi, taso B1", en: "Finnish or Swedish, level B1", ru: "Финский или шведский, уровень B1" } }, { left: { fi: "Nuhteettomuus", en: "Good conduct", ru: "Безупречное поведение" }, right: { fi: "Ei vakavia rikoksia", en: "No serious crimes", ru: "Отсутствие серьёзных преступлений" } }, { left: { fi: "Toimeentulo", en: "Livelihood", ru: "Средства к существованию" }, right: { fi: "Selvitetty tulonlähde", en: "Verified source of income", ru: "Подтверждённый источник дохода" } }], explanation: { fi: "Kansalaisuuden edellytykset on määritelty kansalaisuuslaissa. Kaikki edellytykset on täytettävä.", en: "Citizenship requirements are defined in the Citizenship Act. All requirements must be met.", ru: "Требования к гражданству определены Законом о гражданстве. Все требования должны быть выполнены." } },
      { type: "true-false", question: { fi: "Suomen kansalaisuus antaa oikeuden äänestää eduskuntavaaleissa.", en: "Finnish citizenship gives the right to vote in parliamentary elections.", ru: "Гражданство Финляндии даёт право голосовать на парламентских выборах." }, correct: true, explanation: { fi: "Vain Suomen kansalaiset voivat äänestää eduskuntavaaleissa ja presidentinvaaleissa. Kuntavaaleissa voivat äänestää myös muut.", en: "Only Finnish citizens can vote in parliamentary and presidential elections. Others can also vote in municipal elections.", ru: "Только граждане Финляндии могут голосовать на парламентских и президентских выборах. На муниципальных выборах могут голосовать и другие." } },
      { type: "fill-blank", sentence: { fi: "Kansalaisuushakemus tehdään ___ kautta.", en: "The citizenship application is made through ___.", ru: "Заявление на гражданство подаётся через ___." }, answer: "Migrin", alternatives: ["Migrin", "Maahanmuuttoviraston", "Enter Finland"], explanation: { fi: "Hakemus tehdään sähköisesti Enter Finland -palvelussa tai paperilla Migrille. Käsittelyaika voi olla useita kuukausia.", en: "The application is made electronically via Enter Finland or on paper to Migri. Processing time can be several months.", ru: "Заявление подаётся электронно через Enter Finland или на бумаге в Migri. Срок рассмотрения может составлять несколько месяцев." } },
      { type: "multiple-choice", question: { fi: "Voiko Suomen kansalainen menettää kansalaisuutensa?", en: "Can a Finnish citizen lose their citizenship?", ru: "Может ли гражданин Финляндии потерять гражданство?" }, choices: [{ fi: "Kyllä, mutta vain erityistapauksissa (esim. kaksoiskansalainen, joka ei asu Suomessa)", en: "Yes, but only in special cases (e.g., dual citizen not living in Finland)", ru: "Да, но только в особых случаях (напр., лицо с двойным гражданством, не проживающее в Финляндии)" }, { fi: "Ei koskaan", en: "Never", ru: "Никогда" }, { fi: "Kyllä, rikoksen vuoksi", en: "Yes, due to crime", ru: "Да, из-за преступления" }, { fi: "Kyllä, jos ei maksa veroja", en: "Yes, if not paying taxes", ru: "Да, если не платить налоги" }], correct: 0, explanation: { fi: "Kansalaisuuden voi menettää vain harvinaisissa tapauksissa. Suomi sallii kaksoiskansalaisuuden.", en: "Citizenship can only be lost in rare cases. Finland allows dual citizenship.", ru: "Гражданство может быть утрачено лишь в редких случаях. Финляндия допускает двойное гражданство." } }
    ]
  }
]);

// ── Extra Historia lessons ──
addLessonsToModule("historia", [
  {
    id: "his-2",
    title: { fi: "Itsenäinen Suomi", en: "Independent Finland", ru: "Независимая Финляндия" },
    icon: "🇫🇮",
    exercises: [
      { type: "multiple-choice", question: { fi: "Mitä tapahtui talvisodassa 1939–1940?", en: "What happened in the Winter War 1939–1940?", ru: "Что произошло в Зимней войне 1939–1940 годов?" }, choices: [{ fi: "Neuvostoliitto hyökkäsi Suomeen, Suomi puolustautui menestyksekkäästi mutta joutui luovuttamaan alueita", en: "Soviet Union attacked Finland, Finland defended successfully but had to cede territories", ru: "Советский Союз напал на Финляндию, Финляндия успешно оборонялась, но была вынуждена уступить территории" }, { fi: "Suomi hyökkäsi Venäjälle", en: "Finland attacked Russia", ru: "Финляндия напала на Россию" }, { fi: "Suomi liittyi EU:hun", en: "Finland joined the EU", ru: "Финляндия вступила в ЕС" }, { fi: "Suomi itsenäistyi", en: "Finland became independent", ru: "Финляндия стала независимой" }], correct: 0, explanation: { fi: "Talvisota kesti 105 päivää. Suomi menetti alueita mutta säilytti itsenäisyytensä. Maailma ihaili suomalaisten puolustustahtoa.", en: "The Winter War lasted 105 days. Finland lost territories but maintained independence. The world admired Finnish defense will.", ru: "Зимняя война длилась 105 дней. Финляндия потеряла территории, но сохранила независимость. Мир восхищался волей финнов к обороне." } },
      { type: "true-false", question: { fi: "Suomi liittyi NATOon vuonna 2023.", en: "Finland joined NATO in 2023.", ru: "Финляндия вступила в НАТО в 2023 году." }, correct: true, explanation: { fi: "Suomi liittyi NATOon 4.4.2023 Venäjän hyökättyä Ukrainaan. Suomi oli aiemmin sotilaallisesti liittoutumaton.", en: "Finland joined NATO on April 4, 2023, after Russia attacked Ukraine. Finland was previously militarily non-aligned.", ru: "Финляндия вступила в НАТО 4 апреля 2023 года после нападения России на Украину. Ранее Финляндия была военно нейтральной." } },
      { type: "matching", instruction: { fi: "Yhdistä tapahtuma ja vuosi", en: "Match the event and year", ru: "Сопоставьте событие и год" }, pairs: [{ left: { fi: "EU-jäsenyys", en: "EU membership", ru: "Членство в ЕС" }, right: { fi: "1995", en: "1995", ru: "1995" } }, { left: { fi: "Euro käyttöön", en: "Euro adopted", ru: "Введение евро" }, right: { fi: "2002", en: "2002", ru: "2002" } }, { left: { fi: "NATO-jäsenyys", en: "NATO membership", ru: "Членство в НАТО" }, right: { fi: "2023", en: "2023", ru: "2023" } }, { left: { fi: "Naisten äänioikeus", en: "Women's suffrage", ru: "Избирательное право женщин" }, right: { fi: "1906", en: "1906", ru: "1906" } }], explanation: { fi: "Suomen historia kansainvälisissä järjestöissä: YK (1955), EFTA (1961), EU (1995), euro (2002), NATO (2023).", en: "Finland's history in international organizations: UN (1955), EFTA (1961), EU (1995), euro (2002), NATO (2023).", ru: "История Финляндии в международных организациях: ООН (1955), ЕАСТ (1961), ЕС (1995), евро (2002), НАТО (2023)." } },
      { type: "fill-blank", sentence: { fi: "Suomi oli sotilaallisesti ___ ennen NATO-jäsenyyttä.", en: "Finland was militarily ___ before NATO membership.", ru: "До вступления в НАТО Финляндия была военно ___." }, answer: "liittoutumaton", alternatives: ["liittoutumaton", "puolueeton"], explanation: { fi: "Suomi oli kylmän sodan aikana puolueeton. Neuvostoliiton hajoamisen jälkeenkin Suomi pysyi liittoutumattomana vuoteen 2023 asti.", en: "Finland was neutral during the Cold War. Even after the Soviet Union's collapse, Finland remained non-aligned until 2023.", ru: "Финляндия была нейтральной во время холодной войны. Даже после распада Советского Союза Финляндия оставалась неприсоединившейся до 2023 года." } },
      { type: "multiple-choice", question: { fi: "Mikä oli Suomen nopean kehityksen perusta sodanjälkeisinä vuosikymmeninä?", en: "What was the basis of Finland's rapid development in post-war decades?", ru: "Что стало основой быстрого развития Финляндии в послевоенные десятилетия?" }, choices: [{ fi: "Teollistuminen, koulutus ja hyvinvointivaltion rakentaminen", en: "Industrialization, education, and building the welfare state", ru: "Индустриализация, образование и построение государства благосостояния" }, { fi: "Öljyntuotanto", en: "Oil production", ru: "Добыча нефти" }, { fi: "Siirtomaiden hyväksikäyttö", en: "Colonial exploitation", ru: "Колониальная эксплуатация" }, { fi: "Sotakorvaukset muilta mailta", en: "War reparations from other countries", ru: "Военные репарации от других стран" }], correct: 0, explanation: { fi: "Suomi maksoi sotakorvauksia Neuvostoliitolle, mutta samalla teollistui nopeasti. Koulutusjärjestelmä ja hyvinvointivaltio rakennettiin 1960–80-luvuilla.", en: "Finland paid war reparations to the Soviet Union while rapidly industrializing. The education system and welfare state were built in the 1960s–80s.", ru: "Финляндия выплачивала военные репарации Советскому Союзу, одновременно быстро индустриализируясь. Система образования и государство благосостояния были построены в 1960–80-х годах." } }
    ]
  }
]);
