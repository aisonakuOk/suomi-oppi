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
    title: { fi: "Kotoutuminen", en: "Integration" },
    desc: { fi: "Mitä kotoutuminen tarkoittaa? Suomen sijainti, sää ja yhteiskunta.", en: "What does integration mean? Finland's location, weather, and society." },
    color: "#58cc02",
    lessons: [
      {
        id: "koto-1",
        title: { fi: "Mitä kotoutuminen tarkoittaa?", en: "What does integration mean?" },
        icon: "📋",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mitä 'kotoutuminen' tarkoittaa?", en: "What does 'kotoutuminen' mean?" },
            choices: [
              { fi: "Prosessi, jossa maahanmuuttaja tulee osaksi suomalaista yhteiskuntaa", en: "A process where an immigrant becomes part of Finnish society" },
              { fi: "Suomen kansalaisuuden hakeminen", en: "Applying for Finnish citizenship" },
              { fi: "Suomen kielen tentti", en: "A Finnish language exam" },
              { fi: "Muutto takaisin kotimaahan", en: "Moving back to home country" }
            ],
            correct: 0,
            explanation: { fi: "Kotoutuminen on kaksisuuntainen prosessi, jossa maahanmuuttaja oppii taitoja ja tietoja, joita tarvitaan yhteiskunnassa. Samalla yhteiskunta muuttuu monimuotoisemmaksi.", en: "Integration is a two-way process where an immigrant learns skills and knowledge needed in society. At the same time, society becomes more diverse." }
          },
          {
            type: "true-false",
            question: { fi: "Kotoutuminen on vain maahanmuuttajan vastuulla.", en: "Integration is only the immigrant's responsibility." },
            correct: false,
            explanation: { fi: "Kotoutuminen on kaksisuuntainen prosessi. Sekä maahanmuuttaja että vastaanottava yhteiskunta osallistuvat kotoutumiseen.", en: "Integration is a two-way process. Both the immigrant and the receiving society participate in integration." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mikä on 'kotoutumissuunnitelma'?", en: "What is a 'kotoutumissuunnitelma' (integration plan)?" },
            choices: [
              { fi: "Suunnitelma asunnon ostamiseksi", en: "A plan to buy an apartment" },
              { fi: "Henkilökohtainen suunnitelma, joka tehdään maahanmuuttajalle kotoutumisen tueksi", en: "A personal plan made for an immigrant to support integration" },
              { fi: "Työhakemus", en: "A job application" },
              { fi: "Matkasuunnitelma", en: "A travel plan" }
            ],
            correct: 1,
            explanation: { fi: "Kotoutumissuunnitelma tehdään yhdessä TE-toimiston tai kunnan kanssa. Se sisältää esimerkiksi kielikoulutusta ja muita toimenpiteitä.", en: "The integration plan is made together with the TE office or municipality. It includes language training and other measures." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Kotoutumissuunnitelma tehdään yhdessä ___ kanssa.", en: "The integration plan is made together with ___." },
            answer: "TE-toimiston",
            alternatives: ["te-toimiston", "TE-toimisto", "te-toimisto"],
            explanation: { fi: "TE-toimisto (työ- ja elinkeinotoimisto) auttaa maahanmuuttajia työllistymisessä ja kotoutumisessa.", en: "The TE office (Employment and Economic Development Office) helps immigrants with employment and integration." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Kauanko kotoutumisaika yleensä kestää?", en: "How long does the integration period usually last?" },
            choices: [
              { fi: "6 kuukautta", en: "6 months" },
              { fi: "1 vuosi", en: "1 year" },
              { fi: "3 vuotta (voidaan pidentää 5 vuoteen)", en: "3 years (can be extended to 5 years)" },
              { fi: "10 vuotta", en: "10 years" }
            ],
            correct: 2,
            explanation: { fi: "Kotoutumisaika on yleensä 3 vuotta, mutta se voidaan erityisistä syistä pidentää viiteen vuoteen.", en: "The integration period is usually 3 years, but it can be extended to 5 years for special reasons." }
          }
        ]
      },
      {
        id: "koto-2",
        title: { fi: "Suomen sijainti ja alueet", en: "Finland's location and regions" },
        icon: "🗺️",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Missä Suomi sijaitsee?", en: "Where is Finland located?" },
            choices: [
              { fi: "Keski-Euroopassa", en: "Central Europe" },
              { fi: "Pohjois-Euroopassa, Skandinavian itäpuolella", en: "Northern Europe, east of Scandinavia" },
              { fi: "Etelä-Euroopassa", en: "Southern Europe" },
              { fi: "Aasiassa", en: "Asia" }
            ],
            correct: 1,
            explanation: { fi: "Suomi sijaitsee Pohjois-Euroopassa. Sen naapurimaat ovat Ruotsi, Norja ja Venäjä.", en: "Finland is located in Northern Europe. Its neighboring countries are Sweden, Norway, and Russia." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa on noin 5,5 miljoonaa asukasta.", en: "Finland has about 5.5 million inhabitants." },
            correct: true,
            explanation: { fi: "Suomen väkiluku on noin 5,5 miljoonaa. Väestö on keskittynyt Etelä-Suomeen.", en: "Finland's population is about 5.5 million. The population is concentrated in Southern Finland." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomen pääkaupunki on ___.", en: "The capital of Finland is ___." },
            answer: "Helsinki",
            alternatives: ["helsinki"],
            explanation: { fi: "Helsinki on Suomen pääkaupunki ja suurin kaupunki. Se sijaitsee Etelä-Suomessa Suomenlahden rannalla.", en: "Helsinki is Finland's capital and largest city, located in Southern Finland on the coast of the Gulf of Finland." }
          },
          {
            type: "matching",
            instruction: { fi: "Yhdistä kaupunki ja kuvaus", en: "Match the city with its description" },
            pairs: [
              { left: { fi: "Helsinki", en: "Helsinki" }, right: { fi: "Pääkaupunki", en: "Capital city" } },
              { left: { fi: "Tampere", en: "Tampere" }, right: { fi: "Sisämaan suurkaupunki", en: "Inland major city" } },
              { left: { fi: "Turku", en: "Turku" }, right: { fi: "Entinen pääkaupunki", en: "Former capital" } },
              { left: { fi: "Oulu", en: "Oulu" }, right: { fi: "Pohjois-Suomen keskus", en: "Center of Northern Finland" } }
            ],
            explanation: { fi: "Helsinki on nykyinen pääkaupunki. Turku oli Suomen pääkaupunki ennen vuotta 1812.", en: "Helsinki is the current capital. Turku was Finland's capital before 1812." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mikä on Suomen virallinen kaksikielisyys?", en: "What is Finland's official bilingualism?" },
            choices: [
              { fi: "Suomi ja englanti", en: "Finnish and English" },
              { fi: "Suomi ja ruotsi", en: "Finnish and Swedish" },
              { fi: "Suomi ja venäjä", en: "Finnish and Russian" },
              { fi: "Suomi ja saame", en: "Finnish and Sámi" }
            ],
            correct: 1,
            explanation: { fi: "Suomen viralliset kielet ovat suomi ja ruotsi. Noin 5 % väestöstä puhuu äidinkielenään ruotsia.", en: "Finland's official languages are Finnish and Swedish. About 5% of the population speaks Swedish as their mother tongue." }
          }
        ]
      },
      {
        id: "koto-3",
        title: { fi: "Sää ja vuodenajat", en: "Weather and seasons" },
        icon: "🌦️",
        exercises: [
          {
            type: "matching",
            instruction: { fi: "Yhdistä vuodenaika ja kuvaus", en: "Match the season and description" },
            pairs: [
              { left: { fi: "Kevät", en: "Spring" }, right: { fi: "Lumi sulaa, päivät pitenevät", en: "Snow melts, days get longer" } },
              { left: { fi: "Kesä", en: "Summer" }, right: { fi: "Yötön yö, lämmin", en: "Midnight sun, warm" } },
              { left: { fi: "Syksy", en: "Autumn" }, right: { fi: "Lehdet putoavat, sataa", en: "Leaves fall, rain" } },
              { left: { fi: "Talvi", en: "Winter" }, right: { fi: "Kylmä, lunta, pimeää", en: "Cold, snow, dark" } }
            ],
            explanation: { fi: "Suomessa on neljä selkeää vuodenaikaa. Talvi voi kestää jopa 5 kuukautta pohjoisessa.", en: "Finland has four distinct seasons. Winter can last up to 5 months in the north." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa lämpötila voi talvella laskea alle -30 °C.", en: "In Finland, winter temperatures can drop below -30°C." },
            correct: true,
            explanation: { fi: "Erityisesti Pohjois-Suomessa ja Lapissa lämpötila voi laskea hyvin alhaiseksi talvella.", en: "Especially in Northern Finland and Lapland, temperatures can drop very low in winter." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä 'kaamos' tarkoittaa?", en: "What does 'kaamos' (polar night) mean?" },
            choices: [
              { fi: "Aika, jolloin aurinko ei nouse lainkaan", en: "A time when the sun doesn't rise at all" },
              { fi: "Suomalainen juhla", en: "A Finnish celebration" },
              { fi: "Kesäinen yötön yö", en: "Summer midnight sun" },
              { fi: "Sääilmiö keväällä", en: "A spring weather phenomenon" }
            ],
            correct: 0,
            explanation: { fi: "Kaamos on ajanjakso, jolloin aurinko ei nouse lainkaan. Lapissa kaamos kestää useita viikkoja.", en: "Kaamos is a period when the sun doesn't rise at all. In Lapland, kaamos lasts several weeks." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Kesällä Lapissa voi kokea ___, jolloin aurinko ei laske.", en: "In summer in Lapland you can experience ___, when the sun doesn't set." },
            answer: "yöttömän yön",
            alternatives: ["yötön yö", "yöttömän yön", "keskiyön auringon"],
            explanation: { fi: "Yötön yö tarkoittaa, että aurinko ei laske ollenkaan. Tämä tapahtuu kesällä Pohjois-Suomessa.", en: "Midnight sun means the sun doesn't set at all. This happens in summer in Northern Finland." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Miksi talvella on tärkeää pukeutua lämpimästi?", en: "Why is it important to dress warmly in winter?" },
            choices: [
              { fi: "Koska pakkanen voi aiheuttaa paleltumia ja hypotermiaa", en: "Because frost can cause frostbite and hypothermia" },
              { fi: "Koska se on lain vaatimus", en: "Because it's a legal requirement" },
              { fi: "Koska muuten et saa mennä sisälle", en: "Because otherwise you can't go inside" },
              { fi: "Koska se on Suomen perinne", en: "Because it's a Finnish tradition" }
            ],
            correct: 0,
            explanation: { fi: "Talvella on tärkeää pukeutua kerroksittain ja suojata iho pakkaselta. Paleltumia voi tulla nopeasti kovalla pakkasella.", en: "In winter, it's important to dress in layers and protect skin from frost. Frostbite can occur quickly in severe cold." }
          }
        ]
      }
    ]
  },

  // ── MODULE 2: Ihmiset ja kulttuuri ──
  {
    id: "ihmiset-kulttuuri",
    icon: "🧑‍🤝‍🧑",
    title: { fi: "Ihmiset ja kulttuuri", en: "People & Culture" },
    desc: { fi: "Väestö, uskonnot, arvot, tavat ja juhlat.", en: "Population, religions, values, customs, and celebrations." },
    color: "#1cb0f6",
    lessons: [
      {
        id: "ihku-1",
        title: { fi: "Suomen väestö ja uskonnot", en: "Finland's population and religions" },
        icon: "👥",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mikä on Suomen suurin uskonnollinen yhteisö?", en: "What is Finland's largest religious community?" },
            choices: [
              { fi: "Katolinen kirkko", en: "Catholic Church" },
              { fi: "Evankelis-luterilainen kirkko", en: "Evangelical Lutheran Church" },
              { fi: "Ortodoksinen kirkko", en: "Orthodox Church" },
              { fi: "Islam", en: "Islam" }
            ],
            correct: 1,
            explanation: { fi: "Noin 66 % suomalaisista kuuluu evankelis-luterilaiseen kirkkoon. Ortodoksinen kirkko on toiseksi suurin.", en: "About 66% of Finns belong to the Evangelical Lutheran Church. The Orthodox Church is the second largest." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa on uskonnonvapaus.", en: "Finland has freedom of religion." },
            correct: true,
            explanation: { fi: "Uskonnonvapaus on perusoikeus Suomessa. Jokaisella on oikeus harjoittaa uskontoaan tai olla harjoittamatta mitään uskontoa.", en: "Freedom of religion is a fundamental right in Finland. Everyone has the right to practice their religion or not practice any religion." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomessa asuu noin ___ miljoonaa ihmistä.", en: "About ___ million people live in Finland." },
            answer: "5,5",
            alternatives: ["5.5", "viisi ja puoli", "5,5"],
            explanation: { fi: "Suomen väkiluku on noin 5,5 miljoonaa. Suurin osa asuu Etelä-Suomessa.", en: "Finland's population is about 5.5 million. Most people live in Southern Finland." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Kuinka moni suomalainen ei kuulu mihinkään uskonnolliseen yhteisöön?", en: "How many Finns don't belong to any religious community?" },
            choices: [
              { fi: "Noin 5 %", en: "About 5%" },
              { fi: "Noin 15 %", en: "About 15%" },
              { fi: "Noin 30 %", en: "About 30%" },
              { fi: "Noin 50 %", en: "About 50%" }
            ],
            correct: 2,
            explanation: { fi: "Noin 30 % suomalaisista ei kuulu mihinkään uskonnolliseen yhteisöön. Uskonnottomien osuus on kasvanut.", en: "About 30% of Finns don't belong to any religious community. The share of non-religious people has been growing." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä saamelaisten asema on Suomessa?", en: "What is the status of the Sámi people in Finland?" },
            choices: [
              { fi: "He ovat Suomen ainoa alkuperäiskansa", en: "They are Finland's only indigenous people" },
              { fi: "He ovat maahanmuuttajia", en: "They are immigrants" },
              { fi: "He eivät asu enää Suomessa", en: "They no longer live in Finland" },
              { fi: "He ovat ruotsinkielisiä", en: "They are Swedish-speaking" }
            ],
            correct: 0,
            explanation: { fi: "Saamelaiset ovat EU:n ainoa alkuperäiskansa. Heitä asuu Suomessa noin 10 000, erityisesti Lapissa.", en: "The Sámi are the EU's only indigenous people. About 10,000 live in Finland, especially in Lapland." }
          }
        ]
      },
      {
        id: "ihku-2",
        title: { fi: "Arvot ja tapakulttuuri", en: "Values and customs" },
        icon: "🤝",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mikä on tyypillinen suomalainen arvo?", en: "What is a typical Finnish value?" },
            choices: [
              { fi: "Täsmällisyys ja rehellisyys", en: "Punctuality and honesty" },
              { fi: "Hierarkia ja muodollisuus", en: "Hierarchy and formality" },
              { fi: "Suuri sosiaalinen verkosto", en: "Large social network" },
              { fi: "Vastakkainasettelu", en: "Confrontation" }
            ],
            correct: 0,
            explanation: { fi: "Suomalaiset arvostavat täsmällisyyttä, rehellisyyttä, tasa-arvoa ja luonnon kunnioittamista.", en: "Finns value punctuality, honesty, equality, and respect for nature." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa on tavallista sinuttella tuntemattomia aikuisia.", en: "In Finland, it is common to use informal 'you' (sinä) with unknown adults." },
            correct: true,
            explanation: { fi: "Suomalainen kulttuuri on melko epämuodollinen. Sinuttelu on yleistä myös tuntemattomien kanssa, vaikka teitittely on kohteliasta erityisesti vanhempia ihmisiä kohtaan.", en: "Finnish culture is quite informal. Using 'sinä' is common even with strangers, though formal 'te' is polite especially towards older people." }
          },
          {
            type: "matching",
            instruction: { fi: "Yhdistä suomalainen arvo ja sen merkitys", en: "Match the Finnish value with its meaning" },
            pairs: [
              { left: { fi: "Tasa-arvo", en: "Equality" }, right: { fi: "Kaikki ihmiset ovat samanarvoisia", en: "All people are equal" } },
              { left: { fi: "Sisu", en: "Sisu" }, right: { fi: "Sisäinen lujuus ja sinnikkyys", en: "Inner strength and perseverance" } },
              { left: { fi: "Luottamus", en: "Trust" }, right: { fi: "Ihmiset pitävät lupauksensa", en: "People keep their promises" } },
              { left: { fi: "Jokamiehen oikeus", en: "Everyman's right" }, right: { fi: "Vapaus liikkua luonnossa", en: "Freedom to roam in nature" } }
            ],
            explanation: { fi: "Nämä arvot ovat keskeisiä suomalaisessa yhteiskunnassa ja vaikuttavat arkielämään.", en: "These values are central to Finnish society and affect everyday life." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä 'jokamiehen oikeudet' tarkoittavat?", en: "What do 'everyman's rights' mean?" },
            choices: [
              { fi: "Oikeus äänestää vaaleissa", en: "The right to vote in elections" },
              { fi: "Oikeus liikkua luonnossa, poimia marjoja ja sieniä vapaasti", en: "The right to roam in nature, pick berries and mushrooms freely" },
              { fi: "Oikeus ilmaiseen terveydenhuoltoon", en: "The right to free healthcare" },
              { fi: "Oikeus ilmaiseen koulutukseen", en: "The right to free education" }
            ],
            correct: 1,
            explanation: { fi: "Jokamiehen oikeuksilla saa liikkua luonnossa, uida, poimia marjoja ja sieniä – myös toisen omistamalla maalla. Leiriytyminen on sallittua riittävän kaukana asutuksesta.", en: "With everyman's rights you can roam in nature, swim, pick berries and mushrooms – even on privately owned land. Camping is allowed far enough from inhabited areas." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomessa kengät otetaan pois jalasta, kun mennään toisen ___.", en: "In Finland, shoes are taken off when entering someone's ___." },
            answer: "kotiin",
            alternatives: ["kotiin", "asuntoon", "taloon"],
            explanation: { fi: "Kenkien riisuminen on yleinen tapa Suomessa. Se pitää kodin puhtaana, varsinkin talvella.", en: "Removing shoes is a common custom in Finland. It keeps the home clean, especially in winter." }
          }
        ]
      },
      {
        id: "ihku-3",
        title: { fi: "Juhlat ja perinteet", en: "Celebrations and traditions" },
        icon: "🎄",
        exercises: [
          {
            type: "matching",
            instruction: { fi: "Yhdistä juhla ja ajankohta", en: "Match the celebration with its time" },
            pairs: [
              { left: { fi: "Joulu", en: "Christmas" }, right: { fi: "25. joulukuuta", en: "December 25" } },
              { left: { fi: "Juhannus", en: "Midsummer" }, right: { fi: "Kesäkuun loppu", en: "End of June" } },
              { left: { fi: "Vappu", en: "May Day" }, right: { fi: "1. toukokuuta", en: "May 1" } },
              { left: { fi: "Itsenäisyyspäivä", en: "Independence Day" }, right: { fi: "6. joulukuuta", en: "December 6" } }
            ],
            explanation: { fi: "Nämä ovat Suomen tärkeimpiä juhlapäiviä. Itsenäisyyspäivänä 6.12. juhlitaan Suomen itsenäistymistä vuonna 1917.", en: "These are Finland's most important holidays. On Independence Day (Dec 6), Finland's independence from 1917 is celebrated." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä juhannuksena perinteisesti tehdään?", en: "What is traditionally done on Midsummer?" },
            choices: [
              { fi: "Vietetään aikaa mökillä ja poltetaan kokko", en: "Spend time at a summer cottage and light a bonfire" },
              { fi: "Käydään joulukirkossa", en: "Go to Christmas church service" },
              { fi: "Syödään laskiaispullia", en: "Eat Shrove Tuesday buns" },
              { fi: "Marssitaan kaupungilla", en: "March in the city" }
            ],
            correct: 0,
            explanation: { fi: "Juhannus on kesän juhla. Monet suomalaiset viettävät sen mökillä, saunovat, uivat ja polttavat juhannuskokon.", en: "Midsummer is a celebration of summer. Many Finns spend it at a cottage, sauna, swim, and light a Midsummer bonfire." }
          },
          {
            type: "true-false",
            question: { fi: "Suomen itsenäisyyspäivä on 6. joulukuuta.", en: "Finland's Independence Day is December 6." },
            correct: true,
            explanation: { fi: "Suomi itsenäistyi 6.12.1917 Venäjästä. Itsenäisyyspäivää juhlitaan muun muassa presidentin linnanjuhlilla.", en: "Finland gained independence from Russia on December 6, 1917. Independence Day is celebrated with the President's Independence Day Reception." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mikä on 'vappu' Suomessa?", en: "What is 'Vappu' (May Day) in Finland?" },
            choices: [
              { fi: "Opiskelijoiden ja työväen juhla 1. toukokuuta", en: "Students' and workers' celebration on May 1st" },
              { fi: "Uskonnollinen juhla", en: "A religious celebration" },
              { fi: "Lasten päivä", en: "Children's day" },
              { fi: "Kansallinen surujuhla", en: "A national day of mourning" }
            ],
            correct: 0,
            explanation: { fi: "Vappu on iloinen juhla. Opiskelijat laittavat ylioppilaslakkeja päähän. Perinteisesti syödään munkkeja, tippaleipiä ja juodaan simaa.", en: "Vappu is a joyful celebration. Students wear graduation caps. Traditionally people eat doughnuts, funnel cakes, and drink mead (sima)." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomi itsenäistyi vuonna ___.", en: "Finland gained independence in the year ___." },
            answer: "1917",
            alternatives: ["1917"],
            explanation: { fi: "Suomi julistautui itsenäiseksi 6. joulukuuta 1917 Venäjästä.", en: "Finland declared independence from Russia on December 6, 1917." }
          }
        ]
      }
    ]
  },

  // ── MODULE 3: Arki ──
  {
    id: "arki",
    icon: "🏡",
    title: { fi: "Arki", en: "Daily Life" },
    desc: { fi: "Asuminen, viranomaisasiointi, talous ja vapaa-aika.", en: "Housing, dealing with authorities, finances, and free time." },
    color: "#ff9600",
    lessons: [
      {
        id: "arki-1",
        title: { fi: "Asuminen Suomessa", en: "Housing in Finland" },
        icon: "🏢",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mikä on yleisin asumismuoto Suomessa?", en: "What is the most common form of housing in Finland?" },
            choices: [
              { fi: "Omistusasunto (omakotitalo tai osakehuoneisto)", en: "Owner-occupied housing (detached house or apartment)" },
              { fi: "Hotelli", en: "Hotel" },
              { fi: "Yhteisasuminen", en: "Communal living" },
              { fi: "Asuntoauto", en: "Caravan" }
            ],
            correct: 0,
            explanation: { fi: "Suomalaisista noin 65 % asuu omistusasunnossa. Vuokra-asuminen on myös yleistä, erityisesti kaupungeissa.", en: "About 65% of Finns live in owner-occupied housing. Renting is also common, especially in cities." }
          },
          {
            type: "true-false",
            question: { fi: "Vuokralaisella on oikeus saada kirjallinen vuokrasopimus.", en: "A tenant has the right to get a written rental agreement." },
            correct: true,
            explanation: { fi: "Vuokrasopimus kannattaa aina tehdä kirjallisesti. Se suojaa sekä vuokralaista että vuokranantajaa.", en: "A rental agreement should always be made in writing. It protects both the tenant and the landlord." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä 'taloyhtiö' tarkoittaa?", en: "What does 'taloyhtiö' (housing company) mean?" },
            choices: [
              { fi: "Yritys, joka omistaa ja hallinnoi asuinrakennusta", en: "A company that owns and manages a residential building" },
              { fi: "Naapureiden ystäväryhmä", en: "A neighbor friend group" },
              { fi: "Rakennusfirma", en: "A construction company" },
              { fi: "Valtion asuntovirasto", en: "A state housing agency" }
            ],
            correct: 0,
            explanation: { fi: "Taloyhtiö vastaa rakennuksen ylläpidosta. Asukkaat maksavat yhtiövastiketta ja noudattavat järjestyssääntöjä.", en: "The housing company is responsible for building maintenance. Residents pay a maintenance charge and follow house rules." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Taloyhtiön ___ kertovat, mitä asukkaan pitää noudattaa.", en: "The housing company's ___ tell what the resident must follow." },
            answer: "järjestyssäännöt",
            alternatives: ["järjestyssäännöt", "säännöt"],
            explanation: { fi: "Järjestyssäännöt koskevat mm. hiljaisuusaikoja, jätteiden lajittelua ja yhteisten tilojen käyttöä.", en: "House rules cover things like quiet hours, waste sorting, and use of shared spaces." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Milloin hiljaisuusaika yleensä alkaa kerrostalossa?", en: "When does quiet time usually begin in apartment buildings?" },
            choices: [
              { fi: "Klo 18", en: "6 PM" },
              { fi: "Klo 22", en: "10 PM" },
              { fi: "Klo 20", en: "8 PM" },
              { fi: "Keskiyöllä", en: "Midnight" }
            ],
            correct: 1,
            explanation: { fi: "Useimmissa taloyhtiöissä hiljaisuusaika on klo 22–07. Sinä aikana on vältettävä kovaa melua.", en: "In most housing companies, quiet hours are 10 PM – 7 AM. Loud noise should be avoided during this time." }
          }
        ]
      },
      {
        id: "arki-2",
        title: { fi: "Viranomaisasiointi ja talous", en: "Authorities and finances" },
        icon: "🏦",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mikä on henkilötunnus?", en: "What is a personal identity code?" },
            choices: [
              { fi: "Jokaiselle Suomessa asuvalle annettava yksilöllinen tunniste", en: "A unique identifier given to everyone living in Finland" },
              { fi: "Pankkitilin numero", en: "A bank account number" },
              { fi: "Passin numero", en: "A passport number" },
              { fi: "Puhelinnumero", en: "A phone number" }
            ],
            correct: 0,
            explanation: { fi: "Henkilötunnus on tärkeä kaikessa viranomaisasioinnissa. Se annetaan väestörekisteriin kirjautumisen yhteydessä.", en: "The personal identity code is important in all dealings with authorities. It is given when registering in the population register." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa jokaisen on ilmoitettava muutostaan maistraattiin (DVV).", en: "In Finland, everyone must report their move to the Digital and Population Data Services Agency (DVV)." },
            correct: true,
            explanation: { fi: "Muuttoilmoitus pitää tehdä DVV:lle (Digi- ja väestötietovirasto) viimeistään viikon kuluessa muutosta.", en: "A change of address notification must be made to DVV within one week of moving." }
          },
          {
            type: "matching",
            instruction: { fi: "Yhdistä viranomainen ja tehtävä", en: "Match the authority with its function" },
            pairs: [
              { left: { fi: "Kela", en: "Kela" }, right: { fi: "Sosiaaliturvaetuudet", en: "Social security benefits" } },
              { left: { fi: "Vero", en: "Tax office" }, right: { fi: "Verotus", en: "Taxation" } },
              { left: { fi: "DVV", en: "DVV" }, right: { fi: "Väestörekisteri", en: "Population register" } },
              { left: { fi: "Poliisi", en: "Police" }, right: { fi: "Turvallisuus ja luvat", en: "Safety and permits" } }
            ],
            explanation: { fi: "Nämä ovat tärkeimmät viranomaiset, joiden kanssa asioit Suomessa. Monet palvelut löytyvät myös verkossa.", en: "These are the main authorities you'll deal with in Finland. Many services are also available online." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "___ maksaa Suomessa asumistukea, työttömyysetuuksia ja lapsilisiä.", en: "___ pays housing allowance, unemployment benefits, and child benefits in Finland." },
            answer: "Kela",
            alternatives: ["Kela", "KELA", "kela"],
            explanation: { fi: "Kela (Kansaneläkelaitos) hoitaa monia sosiaaliturvaetuuksia Suomessa.", en: "Kela (Social Insurance Institution) handles many social security benefits in Finland." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mikä on verokortti?", en: "What is a tax card?" },
            choices: [
              { fi: "Asiakirja, joka kertoo työnantajalle veroprosenttisi", en: "A document that tells your employer your tax rate" },
              { fi: "Luottokortti", en: "A credit card" },
              { fi: "Henkilöllisyystodistus", en: "An ID card" },
              { fi: "Kirjastokortti", en: "A library card" }
            ],
            correct: 0,
            explanation: { fi: "Verokortti näyttää veroprosenttisi. Työnantaja pidättää palkanmaksun yhteydessä verot.", en: "The tax card shows your tax rate. The employer withholds taxes when paying your salary." }
          }
        ]
      }
    ]
  },

  // ── MODULE 4: Työ ──
  {
    id: "tyo",
    icon: "💼",
    title: { fi: "Työ", en: "Work" },
    desc: { fi: "Työnhaku, työkulttuuri, oikeudet ja velvollisuudet.", en: "Job search, work culture, rights and obligations." },
    color: "#ce82ff",
    lessons: [
      {
        id: "tyo-1",
        title: { fi: "Työnhaku Suomessa", en: "Job search in Finland" },
        icon: "🔍",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mikä on CV?", en: "What is a CV?" },
            choices: [
              { fi: "Ansioluettelo, jossa kerrotaan koulutuksesta ja työkokemuksesta", en: "A resume that describes education and work experience" },
              { fi: "Työsopimus", en: "An employment contract" },
              { fi: "Palkkalaskelma", en: "A payslip" },
              { fi: "Suosituskirje", en: "A recommendation letter" }
            ],
            correct: 0,
            explanation: { fi: "CV eli ansioluettelo on tärkeä osa työnhakua Suomessa. Sen liitteeksi kirjoitetaan usein työhakemus.", en: "A CV (resume) is an important part of job searching in Finland. A cover letter is often attached to it." }
          },
          {
            type: "true-false",
            question: { fi: "TE-toimisto auttaa työnhaussa.", en: "The TE office helps with job searching." },
            correct: true,
            explanation: { fi: "TE-toimisto (työ- ja elinkeinotoimisto) tarjoaa työnvälityspalveluja, koulutusneuvontaa ja tukea työnhakuun.", en: "The TE office provides employment services, training advice, and job search support." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Työnhaussa on tärkeää kirjoittaa hyvä ___ ja CV.", en: "In job searching, it's important to write a good ___ and CV." },
            answer: "työhakemus",
            alternatives: ["työhakemus", "hakemus"],
            explanation: { fi: "Työhakemus eli saatekirje kertoo, miksi haluat juuri kyseiseen työpaikkaan ja mitä osaat.", en: "The cover letter explains why you want that specific job and what your skills are." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Missä voi hakea töitä Suomessa?", en: "Where can you look for jobs in Finland?" },
            choices: [
              { fi: "Vain TE-toimistossa", en: "Only at the TE office" },
              { fi: "Netissä (mol.fi, duunitori.fi, linkedin.com), lehdissä ja verkostojen kautta", en: "Online (mol.fi, duunitori.fi, linkedin.com), newspapers, and through networks" },
              { fi: "Vain sanomalehdissä", en: "Only in newspapers" },
              { fi: "Vain tuttavien kautta", en: "Only through acquaintances" }
            ],
            correct: 1,
            explanation: { fi: "Töitä voi hakea monella tavalla: verkossa, suoraan yrityksiltä, rekrytointifirmojen kautta ja verkostoitumalla.", en: "You can search for jobs in many ways: online, directly from companies, through recruitment firms, and by networking." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä 'työkokeilu' tarkoittaa?", en: "What does 'työkokeilu' (work trial) mean?" },
            choices: [
              { fi: "Mahdollisuus kokeilla työtä työpaikalla ilman työsuhdetta", en: "An opportunity to try work at a workplace without an employment relationship" },
              { fi: "Palkallinen koeaika", en: "A paid trial period" },
              { fi: "Työsopimuksen allekirjoittaminen", en: "Signing an employment contract" },
              { fi: "Työhaastattelu", en: "A job interview" }
            ],
            correct: 0,
            explanation: { fi: "Työkokeilu on tapa tutustua ammattiin tai alaan. Se sovitaan TE-toimiston kautta ja kestää yleensä 1–6 kuukautta.", en: "A work trial is a way to get to know a profession or field. It is arranged through the TE office and usually lasts 1–6 months." }
          }
        ]
      },
      {
        id: "tyo-2",
        title: { fi: "Työkulttuuri ja oikeudet", en: "Work culture and rights" },
        icon: "⚖️",
        exercises: [
          {
            type: "matching",
            instruction: { fi: "Yhdistä termi ja selitys", en: "Match the term with its explanation" },
            pairs: [
              { left: { fi: "Koeaika", en: "Trial period" }, right: { fi: "Enintään 6 kk työsuhteen alussa", en: "Up to 6 months at start of employment" } },
              { left: { fi: "TES", en: "Collective agreement" }, right: { fi: "Työehtosopimus, joka määrää minimipalkan", en: "Agreement that sets minimum wage" } },
              { left: { fi: "Vuosiloma", en: "Annual leave" }, right: { fi: "Palkallinen loma, yleensä 2–5 viikkoa", en: "Paid vacation, usually 2–5 weeks" } },
              { left: { fi: "Ammattiliitto", en: "Trade union" }, right: { fi: "Järjestö, joka puolustaa työntekijöiden etuja", en: "Organization that defends workers' interests" } }
            ],
            explanation: { fi: "Suomessa ei ole lakisääteistä minimipalkkaa, vaan palkat määräytyvät työehtosopimuksen (TES) mukaan.", en: "Finland has no statutory minimum wage; wages are determined by collective agreements (TES)." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa työnantaja saa maksaa miehille ja naisille eri palkkaa samasta työstä.", en: "In Finland, an employer may pay men and women different wages for the same work." },
            correct: false,
            explanation: { fi: "Tasa-arvolaki kieltää sukupuoleen perustuvan syrjinnän palkkauksessa. Samasta työstä on maksettava sama palkka.", en: "The Equality Act prohibits gender-based discrimination in pay. Equal pay must be given for equal work." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Kuinka pitkä on normaali työviikko Suomessa?", en: "How long is a normal work week in Finland?" },
            choices: [
              { fi: "30 tuntia", en: "30 hours" },
              { fi: "37,5–40 tuntia", en: "37.5–40 hours" },
              { fi: "45 tuntia", en: "45 hours" },
              { fi: "50 tuntia", en: "50 hours" }
            ],
            correct: 1,
            explanation: { fi: "Normaali työviikko on 37,5–40 tuntia. Työaikalaki säätelee ylitöitä ja lepoaikoja.", en: "A normal work week is 37.5–40 hours. The Working Hours Act regulates overtime and rest periods." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Työntekijä voi liittyä ___ puolustaakseen oikeuksiaan.", en: "An employee can join a ___ to defend their rights." },
            answer: "ammattiliittoon",
            alternatives: ["ammattiliittoon", "ammattiliitto", "liittoon"],
            explanation: { fi: "Noin 60 % suomalaisista työntekijöistä kuuluu ammattiliittoon. Liitto neuvottelee palkoista ja työehdoista.", en: "About 60% of Finnish employees belong to a trade union. The union negotiates wages and working conditions." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä tarkoittaa 'palkasta pidätetään verot'?", en: "What does 'taxes are withheld from salary' mean?" },
            choices: [
              { fi: "Työnantaja vähentää verot palkasta ennen kuin se maksetaan tilille", en: "The employer deducts taxes from salary before it's paid to the account" },
              { fi: "Työntekijä maksaa verot itse kerran vuodessa", en: "The employee pays taxes once a year themselves" },
              { fi: "Veroja ei tarvitse maksaa", en: "No taxes need to be paid" },
              { fi: "Verot maksetaan vain tuloista yli 50 000 €", en: "Taxes are only paid on income above 50,000€" }
            ],
            correct: 0,
            explanation: { fi: "Suomessa on ennakonpidätys: työnantaja pidättää tuloveron ja maksaa sen verottajalle.", en: "Finland has tax withholding: the employer withholds income tax and pays it to the tax authority." }
          }
        ]
      }
    ]
  },

  // ── MODULE 5: Opiskelu ja koulutus ──
  {
    id: "koulutus",
    icon: "🎓",
    title: { fi: "Opiskelu ja koulutus", en: "Education" },
    desc: { fi: "Koulutusjärjestelmä, perusopetus, toinen aste ja aikuiskoulutus.", en: "Education system, basic education, upper secondary and adult education." },
    color: "#ff4b4b",
    lessons: [
      {
        id: "kou-1",
        title: { fi: "Suomen koulutusjärjestelmä", en: "Finnish education system" },
        icon: "🏫",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Kuinka monta vuotta peruskoulu kestää Suomessa?", en: "How many years does basic education last in Finland?" },
            choices: [
              { fi: "6 vuotta", en: "6 years" },
              { fi: "9 vuotta", en: "9 years" },
              { fi: "12 vuotta", en: "12 years" },
              { fi: "8 vuotta", en: "8 years" }
            ],
            correct: 1,
            explanation: { fi: "Peruskoulu kestää 9 vuotta (luokat 1–9). Sitä ennen lapsi käy esiopetuksen (1 vuosi). Oppivelvollisuus on laajennettu 18 ikävuoteen.", en: "Basic education lasts 9 years (grades 1–9). Before that, children attend pre-primary education (1 year). Compulsory education has been extended to age 18." }
          },
          {
            type: "true-false",
            question: { fi: "Peruskoulu on Suomessa ilmainen.", en: "Basic education is free in Finland." },
            correct: true,
            explanation: { fi: "Peruskoulu on täysin maksuton. Oppilaat saavat ilmaiset oppikirjat, materiaalit ja kouluruoan.", en: "Basic education is completely free. Students receive free textbooks, materials, and school meals." }
          },
          {
            type: "matching",
            instruction: { fi: "Yhdistä koulutusaste ja kuvaus", en: "Match the education level with its description" },
            pairs: [
              { left: { fi: "Esiopetus", en: "Pre-primary" }, right: { fi: "6-vuotiaille, 1 vuosi", en: "For 6-year-olds, 1 year" } },
              { left: { fi: "Peruskoulu", en: "Basic education" }, right: { fi: "7–16-vuotiaille, 9 vuotta", en: "For 7–16-year-olds, 9 years" } },
              { left: { fi: "Lukio", en: "General upper secondary" }, right: { fi: "Yleissivistävä, valmentaa yliopistoon", en: "General, prepares for university" } },
              { left: { fi: "Ammattikoulu", en: "Vocational school" }, right: { fi: "Ammattiin valmentava koulutus", en: "Vocational training" } }
            ],
            explanation: { fi: "Peruskoulun jälkeen voi hakea lukioon tai ammattikouluun. Molemmat ovat toisen asteen koulutusta.", en: "After basic education, you can apply to general upper secondary or vocational school. Both are upper secondary education." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Oppivelvollisuus Suomessa kestää ___ ikävuoteen asti.", en: "Compulsory education in Finland lasts until the age of ___." },
            answer: "18",
            alternatives: ["18", "kahdeksantoista"],
            explanation: { fi: "Vuodesta 2021 alkaen oppivelvollisuus on laajennettu 18 ikävuoteen. Toisen asteen koulutus on maksutonta.", en: "Since 2021, compulsory education has been extended to age 18. Upper secondary education is free of charge." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä aikuiskoulutusmahdollisuuksia Suomessa on?", en: "What adult education opportunities exist in Finland?" },
            choices: [
              { fi: "Kansalaisopistot, ammatilliset kurssit, avoin yliopisto, kielikurssit", en: "Adult education centers, vocational courses, open university, language courses" },
              { fi: "Vain yliopistot", en: "Only universities" },
              { fi: "Koulutus on vain lapsille ja nuorille", en: "Education is only for children and young people" },
              { fi: "Vain yksityiset koulut", en: "Only private schools" }
            ],
            correct: 0,
            explanation: { fi: "Suomessa on paljon aikuiskoulutusmahdollisuuksia. Kansalaisopistot tarjoavat edullisia kursseja kielistä käsitöihin.", en: "Finland has many adult education options. Adult education centers offer affordable courses from languages to handicrafts." }
          }
        ]
      }
    ]
  },

  // ── MODULE 6: Perheet ──
  {
    id: "perheet",
    icon: "👨‍👩‍👧‍👦",
    title: { fi: "Perheet", en: "Families" },
    desc: { fi: "Perhemuodot, avioliitto, lapset ja perhepalvelut.", en: "Family types, marriage, children, and family services." },
    color: "#ff9600",
    lessons: [
      {
        id: "per-1",
        title: { fi: "Perhe-elämä Suomessa", en: "Family life in Finland" },
        icon: "👪",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mikä on 'avoliitto'?", en: "What is 'avoliitto' (cohabitation)?" },
            choices: [
              { fi: "Kaksi ihmistä asuu yhdessä ilman avioliittoa", en: "Two people live together without marriage" },
              { fi: "Avioliitto kirkossa", en: "Church marriage" },
              { fi: "Avioero", en: "Divorce" },
              { fi: "Yksinhuoltajuus", en: "Single parenthood" }
            ],
            correct: 0,
            explanation: { fi: "Avoliitto on yleinen perhemuoto Suomessa. Avoparilla ei ole samoja juridisia oikeuksia kuin avioparilla.", en: "Cohabitation is a common family form in Finland. Cohabiting couples don't have the same legal rights as married couples." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa samaa sukupuolta olevat parit voivat mennä naimisiin.", en: "In Finland, same-sex couples can get married." },
            correct: true,
            explanation: { fi: "Tasa-arvoinen avioliittolaki tuli voimaan Suomessa 1.3.2017.", en: "The equal marriage law came into effect in Finland on March 1, 2017." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Kuka saa lapsilisää Suomessa?", en: "Who receives child benefit in Finland?" },
            choices: [
              { fi: "Kaikki Suomessa asuvat lapsiperheet, jokaisesta alle 17-vuotiaasta lapsesta", en: "All families living in Finland, for each child under 17" },
              { fi: "Vain Suomen kansalaiset", en: "Only Finnish citizens" },
              { fi: "Vain pienituloiset perheet", en: "Only low-income families" },
              { fi: "Vain yksinhuoltajat", en: "Only single parents" }
            ],
            correct: 0,
            explanation: { fi: "Kela maksaa lapsilisää kaikille Suomessa asuville perheille alle 17-vuotiaista lapsista. Summa kasvaa lasten lukumäärän mukaan.", en: "Kela pays child benefit to all families living in Finland for children under 17. The amount increases with the number of children." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomessa molemmilla vanhemmilla on oikeus ___.", en: "In Finland, both parents have the right to ___." },
            answer: "vanhempainvapaaseen",
            alternatives: ["vanhempainvapaaseen", "vanhempainvapaa", "perhevapaaseen"],
            explanation: { fi: "Suomessa sekä äidillä että isällä on oikeus vanhempainvapaaseen. Uudistuksen jälkeen vapaat jaetaan tasa-arvoisemmin.", en: "In Finland, both mother and father have the right to parental leave. After reform, leaves are divided more equally." }
          },
          {
            type: "true-false",
            question: { fi: "Lapsella on lain mukaan oikeus tavata molempia vanhempiaan eron jälkeen.", en: "By law, a child has the right to see both parents after a separation." },
            correct: true,
            explanation: { fi: "Lapsen etu on tärkein periaate. Lapsella on oikeus tavata molempia vanhempiaan, ellei se vaaranna lapsen turvallisuutta.", en: "The child's best interest is the primary principle. A child has the right to see both parents, unless it endangers the child's safety." }
          }
        ]
      }
    ]
  },

  // ── MODULE 7: Terveys ja hyvinvointi ──
  {
    id: "terveys",
    icon: "🏥",
    title: { fi: "Terveys ja hyvinvointi", en: "Health & Wellbeing" },
    desc: { fi: "Terveyspalvelut, hyvinvointi ja terveydenhuolto.", en: "Health services, wellbeing, and healthcare." },
    color: "#1cb0f6",
    lessons: [
      {
        id: "ter-1",
        title: { fi: "Terveyspalvelut Suomessa", en: "Health services in Finland" },
        icon: "🩺",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mihin soitat hätätilanteessa Suomessa?", en: "What number do you call in an emergency in Finland?" },
            choices: [
              { fi: "112", en: "112" },
              { fi: "911", en: "911" },
              { fi: "118", en: "118" },
              { fi: "999", en: "999" }
            ],
            correct: 0,
            explanation: { fi: "Hätänumero Suomessa on 112. Se toimii myös muualla EU:ssa. Soita 112, kun henki, terveys tai omaisuus on vaarassa.", en: "The emergency number in Finland is 112. It also works elsewhere in the EU. Call 112 when life, health, or property is in danger." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa terveydenhuolto on täysin ilmaista.", en: "In Finland, healthcare is completely free." },
            correct: false,
            explanation: { fi: "Julkinen terveydenhuolto on edullista mutta ei täysin ilmaista. Potilasmaksu on pieni, ja vuosittaiselle maksukatolla rajoitetaan kokonaiskustannuksia.", en: "Public healthcare is affordable but not completely free. Patient fees are small, and an annual payment ceiling limits total costs." }
          },
          {
            type: "matching",
            instruction: { fi: "Yhdistä palvelu ja paikka", en: "Match the service with the place" },
            pairs: [
              { left: { fi: "Perusterveydenhuolto", en: "Primary healthcare" }, right: { fi: "Terveyskeskus", en: "Health center" } },
              { left: { fi: "Erikoissairaanhoito", en: "Specialized care" }, right: { fi: "Sairaala", en: "Hospital" } },
              { left: { fi: "Hammashoito", en: "Dental care" }, right: { fi: "Hammashoitola", en: "Dental clinic" } },
              { left: { fi: "Neuvola", en: "Maternity/child clinic" }, right: { fi: "Raskauden ja lasten seuranta", en: "Pregnancy and child monitoring" } }
            ],
            explanation: { fi: "Terveyskeskus on ensimmäinen paikka, johon otetaan yhteyttä ei-kiireellisissä asioissa. Neuvola seuraa raskautta ja lasten kasvua.", en: "The health center is the first place to contact for non-urgent matters. The maternity clinic monitors pregnancy and children's growth." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomen hätänumero on ___.", en: "Finland's emergency number is ___." },
            answer: "112",
            alternatives: ["112"],
            explanation: { fi: "Numero 112 on hätänumero koko EU:ssa. Suomessa se yhdistää poliisiin, palokuntaan ja ambulanssiin.", en: "112 is the emergency number across the EU. In Finland, it connects to police, fire department, and ambulance." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mikä on 'neuvola'?", en: "What is a 'neuvola' (maternity and child health clinic)?" },
            choices: [
              { fi: "Palvelu, joka seuraa raskautta sekä lasten kasvua ja kehitystä", en: "A service that monitors pregnancy and children's growth and development" },
              { fi: "Yksityinen lääkäriasema", en: "A private medical clinic" },
              { fi: "Sairaaalan päivystys", en: "Hospital emergency room" },
              { fi: "Apteekki", en: "Pharmacy" }
            ],
            correct: 0,
            explanation: { fi: "Neuvola on ilmainen palvelu kaikille Suomessa asuville perheille. Se on tärkeä osa suomalaista terveydenhuoltoa.", en: "Neuvola is a free service for all families living in Finland. It's an important part of Finnish healthcare." }
          }
        ]
      }
    ]
  },

  // ── MODULE 8: Yhteiskunta ja vaikuttaminen ──
  {
    id: "yhteiskunta",
    icon: "🏛️",
    title: { fi: "Yhteiskunta ja vaikuttaminen", en: "Society & Participation" },
    desc: { fi: "Demokratia, hallinto, vaalit ja osallistuminen.", en: "Democracy, governance, elections, and participation." },
    color: "#58cc02",
    lessons: [
      {
        id: "yht-1",
        title: { fi: "Demokratia ja hallinto", en: "Democracy and governance" },
        icon: "🗳️",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mikä on Suomen valtiomuoto?", en: "What is Finland's form of government?" },
            choices: [
              { fi: "Tasavalta, jossa on presidentti ja eduskunta", en: "Republic with a president and parliament" },
              { fi: "Kuningaskunta", en: "Kingdom" },
              { fi: "Diktatuuri", en: "Dictatorship" },
              { fi: "Liittovaltio", en: "Federation" }
            ],
            correct: 0,
            explanation: { fi: "Suomi on tasavalta. Presidentti on valtionpäämies ja eduskunta (200 kansanedustajaa) käyttää lainsäädäntövaltaa.", en: "Finland is a republic. The president is the head of state and the parliament (200 MPs) holds legislative power." }
          },
          {
            type: "true-false",
            question: { fi: "Suomen eduskunnassa on 200 kansanedustajaa.", en: "The Finnish parliament has 200 members." },
            correct: true,
            explanation: { fi: "Eduskunta on Suomen ylin lainsäädäntöelin. 200 kansanedustajaa valitaan vaaleilla neljäksi vuodeksi.", en: "Parliament is Finland's supreme legislative body. 200 MPs are elected for four years." }
          },
          {
            type: "matching",
            instruction: { fi: "Yhdistä vaalityyppi ja kuvaus", en: "Match the election type with its description" },
            pairs: [
              { left: { fi: "Eduskuntavaalit", en: "Parliamentary elections" }, right: { fi: "Valitaan kansanedustajat", en: "Choose members of parliament" } },
              { left: { fi: "Presidentinvaali", en: "Presidential election" }, right: { fi: "Valitaan tasavallan presidentti", en: "Choose the president" } },
              { left: { fi: "Kuntavaalit", en: "Municipal elections" }, right: { fi: "Valitaan kunnanvaltuusto", en: "Choose municipal council" } },
              { left: { fi: "Europarlamenttivaalit", en: "EU elections" }, right: { fi: "Valitaan mepit EU:hun", en: "Choose MEPs to EU" } }
            ],
            explanation: { fi: "Suomessa järjestetään neljät erilaiset vaalit. Äänioikeus eduskuntavaaleissa on Suomen kansalaisilla.", en: "Four types of elections are held in Finland. Finnish citizens have voting rights in parliamentary elections." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomen presidentti valitaan ___ vuodeksi kerrallaan.", en: "Finland's president is elected for ___ years at a time." },
            answer: "kuudeksi",
            alternatives: ["kuudeksi", "6", "kuusi"],
            explanation: { fi: "Presidentti valitaan kuudeksi vuodeksi ja voi toimia enintään kaksi kautta peräkkäin.", en: "The president is elected for six years and can serve a maximum of two consecutive terms." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Ketkä saavat äänestää kuntavaaleissa Suomessa?", en: "Who can vote in municipal elections in Finland?" },
            choices: [
              { fi: "Vain Suomen kansalaiset", en: "Only Finnish citizens" },
              { fi: "Kaikki 18 vuotta täyttäneet Suomessa asuvat (myös ulkomaalaiset tietyin ehdoin)", en: "All residents aged 18+ (including foreigners under certain conditions)" },
              { fi: "Vain EU-kansalaiset", en: "Only EU citizens" },
              { fi: "Kaikki veronmaksajat", en: "All taxpayers" }
            ],
            correct: 1,
            explanation: { fi: "Kuntavaaleissa voivat äänestää myös muiden maiden kansalaiset, jos he ovat asuneet Suomessa riittävän kauan.", en: "In municipal elections, citizens of other countries can also vote if they have lived in Finland long enough." }
          }
        ]
      }
    ]
  },

  // ── MODULE 9: Lait ja oikeus ──
  {
    id: "lait",
    icon: "⚖️",
    title: { fi: "Lait ja oikeus", en: "Laws & Legal System" },
    desc: { fi: "Oikeusjärjestelmä, oikeudet, velvollisuudet ja oleskeluluvat.", en: "Legal system, rights, obligations, and residence permits." },
    color: "#ce82ff",
    lessons: [
      {
        id: "lai-1",
        title: { fi: "Oikeudet ja velvollisuudet", en: "Rights and obligations" },
        icon: "📜",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Mikä on Suomen perustuslain tärkein periaate?", en: "What is the most important principle of the Finnish constitution?" },
            choices: [
              { fi: "Ihmisarvon loukkaamattomuus ja yksilön oikeudet", en: "Inviolability of human dignity and individual rights" },
              { fi: "Taloudellinen kasvu", en: "Economic growth" },
              { fi: "Armeijan vahvuus", en: "Military strength" },
              { fi: "Uskonnollinen perinne", en: "Religious tradition" }
            ],
            correct: 0,
            explanation: { fi: "Suomen perustuslaki takaa perusoikeudet kaikille: yhdenvertaisuuden, sananvapauden, uskonnonvapauden ja oikeuden elämään.", en: "The Finnish constitution guarantees fundamental rights to everyone: equality, freedom of speech, freedom of religion, and the right to life." }
          },
          {
            type: "true-false",
            question: { fi: "Suomessa kaikki ovat yhdenvertaisia lain edessä.", en: "In Finland, everyone is equal before the law." },
            correct: true,
            explanation: { fi: "Yhdenvertaisuusperiaate on perusoikeus. Ketään ei saa syrjiä iän, alkuperän, kielen, uskonnon, sukupuolen tai muun syyn perusteella.", en: "The principle of equality is a fundamental right. No one may be discriminated against based on age, origin, language, religion, gender, or other reasons." }
          },
          {
            type: "matching",
            instruction: { fi: "Yhdistä oikeus ja velvollisuus", en: "Match the right with the obligation" },
            pairs: [
              { left: { fi: "Oikeus koulutukseen", en: "Right to education" }, right: { fi: "Oppivelvollisuus", en: "Compulsory education" } },
              { left: { fi: "Oikeus sosiaaliturvaan", en: "Right to social security" }, right: { fi: "Velvollisuus maksaa veroja", en: "Obligation to pay taxes" } },
              { left: { fi: "Sananvapaus", en: "Freedom of speech" }, right: { fi: "Vastuu omista sanoista", en: "Responsibility for one's words" } },
              { left: { fi: "Oikeus turvallisuuteen", en: "Right to safety" }, right: { fi: "Lakien noudattaminen", en: "Obedience to laws" } }
            ],
            explanation: { fi: "Oikeudet ja velvollisuudet kulkevat käsi kädessä. Oikeuksien nauttiminen edellyttää velvollisuuksien noudattamista.", en: "Rights and obligations go hand in hand. Enjoying rights requires fulfilling obligations." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomen kansalaisuutta voi hakea, kun on asunut Suomessa vähintään ___ vuotta.", en: "Finnish citizenship can be applied for after living in Finland for at least ___ years." },
            answer: "5",
            alternatives: ["5", "viisi"],
            explanation: { fi: "Kansalaisuuden edellytyksiä ovat mm. asumisaika (yleensä 5 vuotta), riittävä kielitaito ja nuhteettomuus.", en: "Citizenship requirements include residence time (usually 5 years), sufficient language skills, and good conduct." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mitä 'tasa-arvo' tarkoittaa Suomen laissa?", en: "What does 'tasa-arvo' (equality) mean in Finnish law?" },
            choices: [
              { fi: "Kaikkia ihmisiä kohdellaan samalla tavalla sukupuolesta, taustasta tai uskonnosta riippumatta", en: "All people are treated equally regardless of gender, background, or religion" },
              { fi: "Kaikki saavat saman palkan", en: "Everyone gets the same salary" },
              { fi: "Kaikki ovat samannäköisiä", en: "Everyone looks the same" },
              { fi: "Vain naisten oikeudet", en: "Only women's rights" }
            ],
            correct: 0,
            explanation: { fi: "Tasa-arvo on Suomen perustuslain keskeinen periaate. Tasa-arvolaki ja yhdenvertaisuuslaki suojaavat syrjinnältä.", en: "Equality is a key principle of the Finnish constitution. The Equality Act and Non-Discrimination Act protect against discrimination." }
          }
        ]
      }
    ]
  },

  // ── MODULE 10: Suomen historiaa ──
  {
    id: "historia",
    icon: "📖",
    title: { fi: "Suomen historiaa", en: "Finnish History" },
    desc: { fi: "Suomen historian päävaiheet: Ruotsin ja Venäjän aika, itsenäistyminen.", en: "Key periods of Finnish history: Swedish and Russian rule, independence." },
    color: "#ff4b4b",
    lessons: [
      {
        id: "his-1",
        title: { fi: "Suomen historian pääpiirteet", en: "Key features of Finnish history" },
        icon: "🏰",
        exercises: [
          {
            type: "multiple-choice",
            question: { fi: "Kuinka kauan Suomi oli osa Ruotsia?", en: "How long was Finland part of Sweden?" },
            choices: [
              { fi: "Noin 100 vuotta", en: "About 100 years" },
              { fi: "Noin 400 vuotta", en: "About 400 years" },
              { fi: "Noin 700 vuotta (noin 1150–1809)", en: "About 700 years (approx. 1150–1809)" },
              { fi: "Noin 50 vuotta", en: "About 50 years" }
            ],
            correct: 2,
            explanation: { fi: "Suomi oli osa Ruotsin valtakuntaa noin 700 vuotta. Tänä aikana Suomeen tuli kristinusko, lait ja hallintojärjestelmä Ruotsista.", en: "Finland was part of the Kingdom of Sweden for about 700 years. During this time, Christianity, laws, and administrative systems came from Sweden." }
          },
          {
            type: "true-false",
            question: { fi: "Suomi oli Venäjän autonominen suuriruhtinaskunta vuosina 1809–1917.", en: "Finland was an autonomous Grand Duchy of Russia from 1809–1917." },
            correct: true,
            explanation: { fi: "Vuonna 1809 Suomi siirtyi Venäjän alaisuuteen. Suomi sai pitää omat lakinsa ja sai laajan itsehallinnon.", en: "In 1809, Finland came under Russian rule. Finland was allowed to keep its own laws and received broad autonomy." }
          },
          {
            type: "fill-blank",
            sentence: { fi: "Suomi julistautui itsenäiseksi ___.", en: "Finland declared independence on ___." },
            answer: "6.12.1917",
            alternatives: ["6.12.1917", "6. joulukuuta 1917", "joulukuussa 1917"],
            explanation: { fi: "Suomen eduskunta hyväksyi itsenäisyysjulistuksen 6. joulukuuta 1917. Venäjän vallankumous mahdollisti itsenäistymisen.", en: "The Finnish parliament approved the declaration of independence on December 6, 1917. The Russian Revolution made independence possible." }
          },
          {
            type: "matching",
            instruction: { fi: "Yhdistä tapahtuma ja vuosi", en: "Match the event with the year" },
            pairs: [
              { left: { fi: "Itsenäisyysjulistus", en: "Declaration of independence" }, right: { fi: "1917", en: "1917" } },
              { left: { fi: "Suomi liittyy EU:hun", en: "Finland joins the EU" }, right: { fi: "1995", en: "1995" } },
              { left: { fi: "Naisten äänioikeus", en: "Women's suffrage" }, right: { fi: "1906", en: "1906" } },
              { left: { fi: "Suomi liittyy NATOon", en: "Finland joins NATO" }, right: { fi: "2023", en: "2023" } }
            ],
            explanation: { fi: "Suomi oli ensimmäinen maa Euroopassa, jossa naiset saivat täydet poliittiset oikeudet vuonna 1906.", en: "Finland was the first country in Europe where women gained full political rights in 1906." }
          },
          {
            type: "multiple-choice",
            question: { fi: "Mikä sota käytiin Suomessa vuonna 1918?", en: "What war was fought in Finland in 1918?" },
            choices: [
              { fi: "Sisällissota (kansalaissota)", en: "Civil war" },
              { fi: "Talvisota", en: "Winter War" },
              { fi: "Jatkosota", en: "Continuation War" },
              { fi: "Maailmansota", en: "World War" }
            ],
            correct: 0,
            explanation: { fi: "Suomen sisällissota vuonna 1918 oli lyhyt mutta verinen konflikti. Talvisota Neuvostoliittoa vastaan käytiin 1939–1940.", en: "The Finnish Civil War in 1918 was a short but bloody conflict. The Winter War against the Soviet Union was fought in 1939–1940." }
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
    title: { fi: "Yhteiskunnan peruspiirteet", en: "Basic features of Finnish society" },
    icon: "🏗️",
    exercises: [
      { type: "multiple-choice", question: { fi: "Mikä on hyvinvointivaltio?", en: "What is a welfare state?" }, choices: [{ fi: "Valtio, joka takaa kaikille asukkaille välttämättömän toimeentulon ja palvelut", en: "A state that guarantees basic livelihood and services to all residents" }, { fi: "Valtio, jossa ei ole veroja", en: "A state with no taxes" }, { fi: "Valtio, jossa kaikki ovat rikkaita", en: "A state where everyone is rich" }, { fi: "Valtio, jossa ei ole sääntöjä", en: "A state with no rules" }], correct: 0, explanation: { fi: "Hyvinvointivaltio rahoitetaan veroilla. Palvelut (terveydenhuolto, koulutus, sosiaaliturva) ovat kaikille edullisia tai maksuttomia.", en: "The welfare state is funded by taxes. Services (healthcare, education, social security) are affordable or free for everyone." } },
      { type: "true-false", question: { fi: "Suomessa ihmiset luottavat viranomaisiin enemmän kuin useimmissa muissa maissa.", en: "In Finland, people trust authorities more than in most other countries." }, correct: true, explanation: { fi: "Suomessa luottamus poliisiin, hallitukseen ja oikeusjärjestelmään on maailman korkeimpia. Luottamusta lisäävät matalat tuloerot ja toimiva hallinto.", en: "In Finland, trust in police, government, and the justice system is among the highest in the world. Low income differences and good governance increase trust." } },
      { type: "multiple-choice", question: { fi: "Mitä tarkoittaa, että Suomi on yksilökeskeinen yhteiskunta?", en: "What does it mean that Finland is an individualistic society?" }, choices: [{ fi: "Ihmiset nähdään itsenäisinä yksilöinä, jotka tekevät omat päätöksensä", en: "People are seen as independent individuals making their own decisions" }, { fi: "Ihmiset eivät auta toisiaan", en: "People don't help each other" }, { fi: "Perheellä ei ole merkitystä", en: "Family has no importance" }, { fi: "Ihmiset ovat itsekäs", en: "People are selfish" }], correct: 0, explanation: { fi: "Yksilökeskeisyys tarkoittaa, että jokainen päättää omista asioistaan. Valtion turva tekee ihmiset vähemmän riippuvaisiksi perheestä.", en: "Individualism means everyone decides their own matters. State support makes people less dependent on family." } },
      { type: "fill-blank", sentence: { fi: "Suomessa viranomaisten lahjonta on ___.", en: "In Finland, bribing officials is ___." }, answer: "rikos", alternatives: ["rikos", "laitonta", "kielletty"], explanation: { fi: "Korruptio on Suomessa erittäin harvinaista. Viranomaisten lahjonta on rikos ja siitä rangaistaan.", en: "Corruption is very rare in Finland. Bribing officials is a crime and punishable." } },
      { type: "multiple-choice", question: { fi: "Miksi Suomessa maksetaan korkeita veroja?", en: "Why are taxes high in Finland?" }, choices: [{ fi: "Veroilla rahoitetaan julkiset palvelut kuten terveydenhuolto ja koulutus", en: "Taxes fund public services like healthcare and education" }, { fi: "Koska presidentti haluaa niin", en: "Because the president wants it" }, { fi: "Koska Suomi on köyhä maa", en: "Because Finland is a poor country" }, { fi: "Koska EU vaatii sitä", en: "Because the EU requires it" }], correct: 0, explanation: { fi: "Veroilla rahoitetaan hyvinvointivaltion palvelut. Tutkimusten mukaan suomalaiset maksavat veroja mielellään, koska he kokevat saavansa vastineeksi hyvät palvelut.", en: "Taxes fund welfare state services. Studies show Finns willingly pay taxes because they feel they get good services in return." } }
    ]
  },
  {
    id: "koto-5",
    title: { fi: "Tukea kotoutumiseen", en: "Support for integration" },
    icon: "🤝",
    exercises: [
      { type: "matching", instruction: { fi: "Yhdistä tuen muoto ja kuvaus", en: "Match the support form with its description" }, pairs: [{ left: { fi: "Kielikoulutus", en: "Language training" }, right: { fi: "Suomen tai ruotsin kielen opetus", en: "Finnish or Swedish language teaching" } }, { left: { fi: "Työkokeilu", en: "Work trial" }, right: { fi: "Tutustuminen ammattiin työpaikalla", en: "Getting to know a profession at workplace" } }, { left: { fi: "Omaehtoinen opiskelu", en: "Self-directed study" }, right: { fi: "Itse valittu koulutus tuella", en: "Self-chosen education with support" } }, { left: { fi: "Kuntouttava työtoiminta", en: "Rehabilitative work" }, right: { fi: "Työ- ja toimintakyvyn parantaminen", en: "Improving work and functional capacity" } }], explanation: { fi: "TE-toimisto tarjoaa monia kotoutumista tukevia palveluja. Tavoitteena on työllistyminen ja yhteiskuntaan integroituminen.", en: "The TE office offers many services supporting integration. The goal is employment and societal integration." } },
      { type: "true-false", question: { fi: "Kotoutumiskoulutus sisältää vain kielenopetusta.", en: "Integration training includes only language teaching." }, correct: false, explanation: { fi: "Kotoutumiskoulutus sisältää kielenopetuksen lisäksi yhteiskuntatietoa, työelämätaitoja ja arjen taitoja.", en: "Integration training includes society knowledge, work life skills, and everyday skills in addition to language teaching." } },
      { type: "multiple-choice", question: { fi: "Kuka tekee kotoutumissuunnitelman?", en: "Who makes the integration plan?" }, choices: [{ fi: "Maahanmuuttaja yhdessä TE-toimiston tai kunnan kanssa", en: "The immigrant together with the TE office or municipality" }, { fi: "Poliisi", en: "Police" }, { fi: "Presidentti", en: "President" }, { fi: "Naapurit", en: "Neighbors" }], correct: 0, explanation: { fi: "Kotoutumissuunnitelma on henkilökohtainen ja tehdään yhdessä viranomaisen kanssa. Se huomioi henkilön taustan ja tavoitteet.", en: "The integration plan is personal and made together with an authority. It considers the person's background and goals." } },
      { type: "fill-blank", sentence: { fi: "Kotoutumiskoulutuksessa opiskellaan suomen kieltä ja ___.", en: "In integration training, Finnish language and ___ are studied." }, answer: "yhteiskuntatietoa", alternatives: ["yhteiskuntatietoa", "yhteiskuntaa"], explanation: { fi: "Yhteiskuntatieto on tärkeä osa kotoutumiskoulutusta. Se auttaa ymmärtämään Suomen lakeja, tapoja ja oikeuksia.", en: "Society knowledge is an important part of integration training. It helps understand Finnish laws, customs, and rights." } },
      { type: "multiple-choice", question: { fi: "Mitä sosiaaliset verkostot tarkoittavat kotoutumisessa?", en: "What do social networks mean in integration?" }, choices: [{ fi: "Kaikki ihmiset, jotka henkilö tuntee: perhe, ystävät, työkaverit", en: "All people a person knows: family, friends, colleagues" }, { fi: "Facebook ja Instagram", en: "Facebook and Instagram" }, { fi: "Vain suomalaisia ystäviä", en: "Only Finnish friends" }, { fi: "Viranomaiskontaktit", en: "Authority contacts" }], correct: 0, explanation: { fi: "Sosiaaliset verkostot ovat tärkeitä hyvinvoinnille. On hyödyllistä tutustua sekä muihin maahanmuuttajiin että kantasuomalaisiin.", en: "Social networks are important for wellbeing. It's beneficial to get to know both other immigrants and native Finns." } }
    ]
  }
]);

// ── Extra Arki lessons ──
addLessonsToModule("arki", [
  {
    id: "arki-3",
    title: { fi: "Vapaa-aika ja liikkuminen", en: "Free time and transportation" },
    icon: "🚌",
    exercises: [
      { type: "multiple-choice", question: { fi: "Mikä on joukkoliikenne?", en: "What is public transport?" }, choices: [{ fi: "Bussi, juna, raitiovaunu ja metro", en: "Bus, train, tram and metro" }, { fi: "Vain taksit", en: "Only taxis" }, { fi: "Vain autot", en: "Only cars" }, { fi: "Polkupyörät", en: "Bicycles" }], correct: 0, explanation: { fi: "Suomen kaupungeissa on hyvä joukkoliikenne. Helsingissä on bussi, raitiovaunu, metro ja lähijunat. HSL-kortilla voi matkustaa kaikilla.", en: "Finnish cities have good public transport. Helsinki has buses, trams, metro and commuter trains. HSL card works on all." } },
      { type: "true-false", question: { fi: "Suomessa kirjastokortti on ilmainen.", en: "In Finland, a library card is free." }, correct: true, explanation: { fi: "Kirjastot ovat Suomessa ilmaisia kaikille. Kirjastoista voi lainata kirjojen lisäksi musiikkia, elokuvia, pelejä ja jopa työkaluja.", en: "Libraries are free for everyone in Finland. You can borrow books, music, movies, games, and even tools." } },
      { type: "fill-blank", sentence: { fi: "Suomessa ___ ovat ilmaisia ja avoimia kaikille.", en: "In Finland, ___ are free and open to everyone." }, answer: "kirjastot", alternatives: ["kirjastot", "kirjasto"], explanation: { fi: "Suomen kirjastoverkko on maailman parhaita. Kirjastot tarjoavat myös internet-yhteyden, kursseja ja tapahtumia.", en: "Finland's library network is among the world's best. Libraries also offer internet access, courses, and events." } },
      { type: "multiple-choice", question: { fi: "Mitä tarvitset ajaaksesi autoa Suomessa?", en: "What do you need to drive a car in Finland?" }, choices: [{ fi: "Ajokortti, liikennevakuutus ja katsastettu auto", en: "Driver's license, traffic insurance, and inspected car" }, { fi: "Vain ajokortti", en: "Only a driver's license" }, { fi: "Vain vakuutus", en: "Only insurance" }, { fi: "Ei mitään", en: "Nothing" }], correct: 0, explanation: { fi: "Ajokortti on pakollinen. Liikennevakuutus on pakollinen kaikille autoille. Katsastus tarkistaa auton turvallisuuden.", en: "Driver's license is mandatory. Traffic insurance is mandatory for all cars. Vehicle inspection checks the car's safety." } },
      { type: "matching", instruction: { fi: "Yhdistä vapaa-ajan paikka ja toiminta", en: "Match the leisure place with activity" }, pairs: [{ left: { fi: "Kirjasto", en: "Library" }, right: { fi: "Lainaa kirjoja ja käytä nettiä", en: "Borrow books and use internet" } }, { left: { fi: "Kansalaisopisto", en: "Adult education center" }, right: { fi: "Edullisia kursseja", en: "Affordable courses" } }, { left: { fi: "Uimahalli", en: "Swimming hall" }, right: { fi: "Uinti ja sauna", en: "Swimming and sauna" } }, { left: { fi: "Liikuntapuisto", en: "Sports park" }, right: { fi: "Ulkoliikunta ilmaiseksi", en: "Outdoor sports for free" } }], explanation: { fi: "Suomessa on paljon edullisia vapaa-ajan mahdollisuuksia. Kunnat tarjoavat liikuntapalveluja ja kulttuuritoimintaa.", en: "Finland has many affordable leisure options. Municipalities offer sports services and cultural activities." } }
    ]
  }
]);

// ── Extra Työ lessons ──
addLessonsToModule("tyo", [
  {
    id: "tyo-3",
    title: { fi: "Lait ja säännöt työssä", en: "Laws and rules at work" },
    icon: "📋",
    exercises: [
      { type: "multiple-choice", question: { fi: "Mitä työsopimuksessa sovitaan?", en: "What is agreed in an employment contract?" }, choices: [{ fi: "Työtehtävät, palkka, työaika ja työsuhteen kesto", en: "Work tasks, salary, working hours and duration" }, { fi: "Vain palkka", en: "Only salary" }, { fi: "Vain työaika", en: "Only working hours" }, { fi: "Vain lomat", en: "Only vacations" }], correct: 0, explanation: { fi: "Työsopimus on tehtävä kirjallisesti. Se sisältää kaikki työsuhteen ehdot. Suullinen sopimus on myös sitova, mutta kirjallinen on turvallisempi.", en: "The employment contract should be in writing. It includes all terms of employment. An oral agreement is also binding, but written is safer." } },
      { type: "true-false", question: { fi: "Työnantaja saa irtisanoa työntekijän ilman syytä koeajan jälkeen.", en: "The employer can dismiss an employee without reason after the trial period." }, correct: false, explanation: { fi: "Koeajan jälkeen irtisanomiseen tarvitaan asiallinen ja painava syy. Laiton irtisanomisperuste on esim. raskaus, sairaus tai ammattiliiton jäsenyys.", en: "After the trial period, a proper and serious reason is needed for dismissal. Illegal grounds include pregnancy, illness, or union membership." } },
      { type: "fill-blank", sentence: { fi: "Työnantajan on annettava työntekijälle ___ joka kuukausi.", en: "The employer must give the employee a ___ every month." }, answer: "palkkalaskelma", alternatives: ["palkkalaskelma", "palkkakuitti"], explanation: { fi: "Palkkalaskelmasta näkee bruttopalkan, verot, eläkemaksut ja nettopalkan. Tarkista aina, että tiedot ovat oikein.", en: "The payslip shows gross salary, taxes, pension contributions, and net salary. Always check that the information is correct." } },
      { type: "multiple-choice", question: { fi: "Mitä tehdä, jos sinua syrjitään työpaikalla?", en: "What to do if you're discriminated at work?" }, choices: [{ fi: "Ota yhteyttä ammattiliittoon, työsuojeluviranomaisiin tai tasa-arvovaltuutettuun", en: "Contact your trade union, occupational safety authority, or equality ombudsman" }, { fi: "Ei voi tehdä mitään", en: "Nothing can be done" }, { fi: "Eroaa heti", en: "Resign immediately" }, { fi: "Soittaa poliisille", en: "Call the police" }], correct: 0, explanation: { fi: "Syrjintä on laitonta Suomessa. Ammattiliitto ja työsuojeluviranomaiset auttavat. Myös tasa-arvovaltuutettu neuvoo syrjintäasioissa.", en: "Discrimination is illegal in Finland. Trade unions and occupational safety authorities help. The equality ombudsman also advises on discrimination." } },
      { type: "true-false", question: { fi: "Suomessa on pakollinen työeläkevakuutus kaikille työntekijöille.", en: "Finland has mandatory employment pension insurance for all employees." }, correct: true, explanation: { fi: "Työnantaja ja työntekijä maksavat molemmat eläkemaksuja. Eläke kertyy kaikesta palkkatyöstä ja yrittäjätulosta.", en: "Both employer and employee pay pension contributions. Pension accrues from all paid work and entrepreneurial income." } }
    ]
  }
]);

// ── Extra Koulutus lessons ──
addLessonsToModule("koulutus", [
  {
    id: "kou-2",
    title: { fi: "Koulun arki ja aikuiskoulutus", en: "School life and adult education" },
    icon: "📚",
    exercises: [
      { type: "multiple-choice", question: { fi: "Mikä on opettajan rooli Suomessa?", en: "What is the teacher's role in Finland?" }, choices: [{ fi: "Arvostettu ammattilainen, joka käyttää nykyaikaisia opetusmenetelmiä", en: "A respected professional who uses modern teaching methods" }, { fi: "Vain tiedon jakaja", en: "Only a knowledge deliverer" }, { fi: "Kurinpitäjä", en: "A disciplinarian" }, { fi: "Viihdyttäjä", en: "An entertainer" }], correct: 0, explanation: { fi: "Opettajan ammatti on Suomessa arvostettu ja suosittu. Kaikilla opettajilla on maisterin tutkinto. Opetus perustuu vuorovaikutukseen.", en: "The teaching profession is respected and popular in Finland. All teachers have a master's degree. Teaching is based on interaction." } },
      { type: "true-false", question: { fi: "Suomessa kouluruoka on ilmaista peruskoululaisille.", en: "In Finland, school meals are free for basic education students." }, correct: true, explanation: { fi: "Suomi oli ensimmäinen maa maailmassa, joka tarjosi ilmaisen kouluruoan kaikille koululaisille (1948). Myös oppikirjat ovat ilmaisia.", en: "Finland was the first country in the world to offer free school meals to all students (1948). Textbooks are also free." } },
      { type: "matching", instruction: { fi: "Yhdistä koulutusmuoto ja kohderyhmä", en: "Match education type and target group" }, pairs: [{ left: { fi: "Kansalaisopisto", en: "Adult education center" }, right: { fi: "Kaikille aikuisille, edullinen", en: "For all adults, affordable" } }, { left: { fi: "Avoin yliopisto", en: "Open university" }, right: { fi: "Yliopistokursseja ilman tutkinto-oikeutta", en: "University courses without degree" } }, { left: { fi: "Kotoutumiskoulutus", en: "Integration training" }, right: { fi: "Maahanmuuttajille", en: "For immigrants" } }, { left: { fi: "Oppisopimuskoulutus", en: "Apprenticeship" }, right: { fi: "Ammatin oppiminen työssä", en: "Learning profession at work" } }], explanation: { fi: "Suomessa on monipuolinen aikuiskoulutusjärjestelmä. Kaikilla on mahdollisuus opiskella iästä ja taustasta riippumatta.", en: "Finland has a diverse adult education system. Everyone can study regardless of age and background." } },
      { type: "fill-blank", sentence: { fi: "Peruskoulu kestää Suomessa ___ vuotta.", en: "Basic education in Finland lasts ___ years." }, answer: "9", alternatives: ["9", "yhdeksän"], explanation: { fi: "Peruskoulu alkaa 7-vuotiaana ja kestää 9 vuotta (luokat 1–9). Sitä edeltää 1 vuoden esiopetus.", en: "Basic education starts at age 7 and lasts 9 years (grades 1–9). It's preceded by 1 year of pre-primary education." } },
      { type: "multiple-choice", question: { fi: "Mihin ikään asti oppivelvollisuus kestää?", en: "Until what age does compulsory education last?" }, choices: [{ fi: "15 vuotta", en: "15 years" }, { fi: "16 vuotta", en: "16 years" }, { fi: "18 vuotta", en: "18 years" }, { fi: "20 vuotta", en: "20 years" }], correct: 2, explanation: { fi: "Vuodesta 2021 alkaen oppivelvollisuus kestää 18 ikävuoteen. Toisen asteen koulutus (lukio tai ammattikoulu) on maksutonta.", en: "Since 2021, compulsory education lasts until age 18. Upper secondary education is free of charge." } }
    ]
  }
]);

// ── Extra Perheet lessons ──
addLessonsToModule("perheet", [
  {
    id: "per-2",
    title: { fi: "Tasa-arvo perheissä", en: "Equality in families" },
    icon: "⚖️",
    exercises: [
      { type: "true-false", question: { fi: "Suomessa molemmat vanhemmat ovat lain mukaan vastuussa lasten kasvatuksesta.", en: "In Finland, both parents are legally responsible for raising children." }, correct: true, explanation: { fi: "Suomen lain mukaan molemmat vanhemmat ovat vastuussa lastensa huollosta ja kasvatuksesta riippumatta siitä, ovatko he yhdessä vai eronneet.", en: "Under Finnish law, both parents are responsible for the custody and upbringing of their children, regardless of whether they are together or separated." } },
      { type: "multiple-choice", question: { fi: "Milloin samaa sukupuolta olevien avioliitto tuli mahdolliseksi Suomessa?", en: "When did same-sex marriage become possible in Finland?" }, choices: [{ fi: "2002", en: "2002" }, { fi: "2010", en: "2010" }, { fi: "2017", en: "2017" }, { fi: "2020", en: "2020" }], correct: 2, explanation: { fi: "Tasa-arvoinen avioliittolaki tuli voimaan 1.3.2017. Kansalaisaloite keräsi yli 166 000 allekirjoitusta.", en: "The equal marriage law came into effect on March 1, 2017. A citizens' initiative collected over 166,000 signatures." } },
      { type: "fill-blank", sentence: { fi: "Lapsen ruumiillinen kurittaminen on Suomessa ___.", en: "Physical punishment of children is ___ in Finland." }, answer: "kielletty", alternatives: ["kielletty", "laitonta", "rikos"], explanation: { fi: "Lasten ruumiillinen kurittaminen kiellettiin Suomessa 1984. Lasta ei saa lyödä, tukistaa tai kohdella väkivaltaisesti.", en: "Physical punishment of children was banned in Finland in 1984. Children may not be hit, pulled by the hair, or treated violently." } },
      { type: "multiple-choice", question: { fi: "Mikä on neuvolan tehtävä?", en: "What is the role of neuvola?" }, choices: [{ fi: "Seurata raskautta ja lasten kasvua ja kehitystä", en: "Monitor pregnancy and children's growth and development" }, { fi: "Opettaa lapsia lukemaan", en: "Teach children to read" }, { fi: "Hoitaa sairaita lapsia", en: "Treat sick children" }, { fi: "Järjestää päivähoitoa", en: "Organize daycare" }], correct: 0, explanation: { fi: "Neuvola on ilmainen palvelu kaikille perheille. Äitiysneuvola seuraa raskautta, lastenneuvola lasten kasvua ja kehitystä.", en: "Neuvola is a free service for all families. Maternity clinic monitors pregnancy, child health clinic monitors growth and development." } },
      { type: "true-false", question: { fi: "Suomessa jokaisella lapsella on oikeus päivähoitoon.", en: "In Finland, every child has the right to daycare." }, correct: true, explanation: { fi: "Kaikilla alle kouluikäisillä lapsilla on subjektiivinen oikeus varhaiskasvatukseen. Maksu riippuu perheen tuloista.", en: "All preschool-age children have a subjective right to early childhood education. The fee depends on family income." } }
    ]
  }
]);

// ── Extra Terveys lessons ──
addLessonsToModule("terveys", [
  {
    id: "ter-2",
    title: { fi: "Hyvinvointi ja ennaltaehkäisy", en: "Wellbeing and prevention" },
    icon: "🧘",
    exercises: [
      { type: "multiple-choice", question: { fi: "Mitä hyvinvointialueet tekevät?", en: "What do wellbeing services counties do?" }, choices: [{ fi: "Järjestävät sosiaali- ja terveyspalvelut sekä pelastustoimen", en: "Organize social and health services and rescue services" }, { fi: "Rakentavat teitä", en: "Build roads" }, { fi: "Opettavat kouluissa", en: "Teach in schools" }, { fi: "Keräävät veroja", en: "Collect taxes" }], correct: 0, explanation: { fi: "Hyvinvointialueet aloittivat 1.1.2023. Ne vastaavat terveydenhuollosta, sosiaalipalveluista ja pelastustoimesta.", en: "Wellbeing services counties started on Jan 1, 2023. They are responsible for healthcare, social services, and rescue services." } },
      { type: "true-false", question: { fi: "Suomessa reseptilääkkeet saa vain apteekista.", en: "In Finland, prescription medicines can only be obtained from a pharmacy." }, correct: true, explanation: { fi: "Lääkäri kirjoittaa sähköisen reseptin, ja lääkkeet haetaan apteekista. Kela korvaa osan lääkekustannuksista.", en: "The doctor writes an electronic prescription, and medicines are picked up at the pharmacy. Kela reimburses part of medicine costs." } },
      { type: "fill-blank", sentence: { fi: "Suomen hätänumero on ___, ja se toimii koko EU:ssa.", en: "Finland's emergency number is ___, and it works across the EU." }, answer: "112", alternatives: ["112"], explanation: { fi: "Soita 112, kun henki, terveys tai omaisuus on välittömässä vaarassa. Älä soita 112 kiireettömissä asioissa.", en: "Call 112 when life, health, or property is in immediate danger. Don't call 112 for non-urgent matters." } },
      { type: "multiple-choice", question: { fi: "Mitä Kela-kortti tarkoittaa?", en: "What does the Kela card mean?" }, choices: [{ fi: "Todistus sosiaaliturvasta Suomessa — oikeuttaa julkiseen terveydenhuoltoon", en: "Proof of social security in Finland — entitles to public healthcare" }, { fi: "Luottokortti", en: "Credit card" }, { fi: "Matkustusasiakirja", en: "Travel document" }, { fi: "Kirjastokortti", en: "Library card" }], correct: 0, explanation: { fi: "Kela-kortti osoittaa, että henkilö kuuluu Suomen sosiaaliturvan piiriin. Se on hyvä pitää mukana.", en: "The Kela card shows that a person is covered by Finnish social security. It's good to carry it with you." } },
      { type: "matching", instruction: { fi: "Yhdistä terveyspalvelu ja tilanne", en: "Match health service and situation" }, pairs: [{ left: { fi: "Terveyskeskus", en: "Health center" }, right: { fi: "Flunssa, kiputilat, rokotukset", en: "Flu, pain, vaccinations" } }, { left: { fi: "Päivystys", en: "Emergency room" }, right: { fi: "Kiireellinen hoito illalla/viikonloppuna", en: "Urgent care evenings/weekends" } }, { left: { fi: "Neuvola", en: "Maternity clinic" }, right: { fi: "Raskaus ja lasten terveystarkastukset", en: "Pregnancy and children's checkups" } }, { left: { fi: "112", en: "112" }, right: { fi: "Henkeä uhkaava hätätilanne", en: "Life-threatening emergency" } }], explanation: { fi: "Terveyskeskus on ensimmäinen kontakti ei-kiireellisissä asioissa. Päivystys on kiireellisille tapauksille. 112 on hätätilanteisiin.", en: "Health center is the first contact for non-urgent matters. ER is for urgent cases. 112 is for emergencies." } }
    ]
  }
]);

// ── Extra Yhteiskunta lessons ──
addLessonsToModule("yhteiskunta", [
  {
    id: "yht-2",
    title: { fi: "Osallistuminen ja vaikuttaminen", en: "Participation and influence" },
    icon: "✊",
    exercises: [
      { type: "multiple-choice", question: { fi: "Miten tavallinen ihminen voi vaikuttaa Suomessa?", en: "How can an ordinary person influence things in Finland?" }, choices: [{ fi: "Äänestämällä, osallistumalla yhdistyksiin, tekemällä kansalaisaloitteita", en: "Voting, joining associations, making citizens' initiatives" }, { fi: "Vain äänestämällä", en: "Only by voting" }, { fi: "Ei mitenkään", en: "In no way" }, { fi: "Vain kirjoittamalla lehteen", en: "Only by writing to a newspaper" }], correct: 0, explanation: { fi: "Suomessa on monia tapoja vaikuttaa: äänestäminen, kansalaisaloitteet, yhdistystoiminta, kuntalaisaloitteet ja mielenilmaukset.", en: "Finland has many ways to influence: voting, citizens' initiatives, associations, municipal initiatives, and demonstrations." } },
      { type: "true-false", question: { fi: "Kansalaisaloite, jonka on allekirjoittanut yli 50 000 henkilöä, on käsiteltävä eduskunnassa.", en: "A citizens' initiative signed by over 50,000 people must be processed in parliament." }, correct: true, explanation: { fi: "Kansalaisaloite on demokraattinen tapa vaikuttaa lainsäädäntöön. Tasa-arvoinen avioliittolaki syntyi kansalaisaloitteen kautta.", en: "A citizens' initiative is a democratic way to influence legislation. The equal marriage law came through a citizens' initiative." } },
      { type: "fill-blank", sentence: { fi: "Kuntavaaleissa voivat äänestää myös ___, jotka ovat asuneet Suomessa riittävän kauan.", en: "In municipal elections, ___ who have lived in Finland long enough can also vote." }, answer: "ulkomaalaiset", alternatives: ["ulkomaalaiset", "ulkomaan kansalaiset", "maahanmuuttajat"], explanation: { fi: "Kuntavaaleissa äänioikeus on kaikilla 18 vuotta täyttäneillä, jotka asuvat kunnassa — myös muiden maiden kansalaisilla tietyin ehdoin.", en: "In municipal elections, all 18+ residents can vote — including citizens of other countries under certain conditions." } },
      { type: "multiple-choice", question: { fi: "Kuinka monta poliittista puoluetta on Suomen eduskunnassa?", en: "How many political parties are in the Finnish parliament?" }, choices: [{ fi: "2", en: "2" }, { fi: "5", en: "5" }, { fi: "Noin 8–10", en: "About 8–10" }, { fi: "Yli 20", en: "Over 20" }], correct: 2, explanation: { fi: "Suomessa on monipuoluejärjestelmä. Eduskunnassa on tyypillisesti 8–10 puoluetta. Suurimpia ovat SDP, kokoomus, perussuomalaiset ja keskusta.", en: "Finland has a multi-party system. Parliament typically has 8–10 parties. The largest are SDP, National Coalition, Finns Party, and Centre Party." } },
      { type: "true-false", question: { fi: "Suomen presidentti johtaa ulkopolitiikkaa yhdessä hallituksen kanssa.", en: "Finland's president leads foreign policy together with the government." }, correct: true, explanation: { fi: "Presidentin tärkein tehtävä on ulkopolitiikan johtaminen yhdessä valtioneuvoston kanssa. Presidentti myös vahvistaa lait.", en: "The president's main task is leading foreign policy with the government. The president also ratifies laws." } }
    ]
  }
]);

// ── Extra Lait lessons ──
addLessonsToModule("lait", [
  {
    id: "lai-2",
    title: { fi: "Oleskeluluvat ja kansalaisuus", en: "Residence permits and citizenship" },
    icon: "🛂",
    exercises: [
      { type: "multiple-choice", question: { fi: "Mikä viranomainen käsittelee kansalaisuushakemukset?", en: "Which authority processes citizenship applications?" }, choices: [{ fi: "Maahanmuuttovirasto (Migri)", en: "Finnish Immigration Service (Migri)" }, { fi: "Poliisi", en: "Police" }, { fi: "TE-toimisto", en: "TE office" }, { fi: "Kela", en: "Kela" }], correct: 0, explanation: { fi: "Maahanmuuttovirasto (Migri) käsittelee oleskelulupa- ja kansalaisuushakemukset. Hakemus tehdään sähköisesti Enter Finland -palvelussa.", en: "Finnish Immigration Service (Migri) processes residence permit and citizenship applications. Applications are made electronically via Enter Finland." } },
      { type: "matching", instruction: { fi: "Yhdistä kansalaisuuden edellytys ja kuvaus", en: "Match citizenship requirement and description" }, pairs: [{ left: { fi: "Asumisaika", en: "Residence time" }, right: { fi: "Vähintään 5 vuotta Suomessa", en: "At least 5 years in Finland" } }, { left: { fi: "Kielitaito", en: "Language skills" }, right: { fi: "Suomi tai ruotsi, taso B1", en: "Finnish or Swedish, level B1" } }, { left: { fi: "Nuhteettomuus", en: "Good conduct" }, right: { fi: "Ei vakavia rikoksia", en: "No serious crimes" } }, { left: { fi: "Toimeentulo", en: "Livelihood" }, right: { fi: "Selvitetty tulonlähde", en: "Verified source of income" } }], explanation: { fi: "Kansalaisuuden edellytykset on määritelty kansalaisuuslaissa. Kaikki edellytykset on täytettävä.", en: "Citizenship requirements are defined in the Citizenship Act. All requirements must be met." } },
      { type: "true-false", question: { fi: "Suomen kansalaisuus antaa oikeuden äänestää eduskuntavaaleissa.", en: "Finnish citizenship gives the right to vote in parliamentary elections." }, correct: true, explanation: { fi: "Vain Suomen kansalaiset voivat äänestää eduskuntavaaleissa ja presidentinvaaleissa. Kuntavaaleissa voivat äänestää myös muut.", en: "Only Finnish citizens can vote in parliamentary and presidential elections. Others can also vote in municipal elections." } },
      { type: "fill-blank", sentence: { fi: "Kansalaisuushakemus tehdään ___ kautta.", en: "The citizenship application is made through ___." }, answer: "Migrin", alternatives: ["Migrin", "Maahanmuuttoviraston", "Enter Finland"], explanation: { fi: "Hakemus tehdään sähköisesti Enter Finland -palvelussa tai paperilla Migrille. Käsittelyaika voi olla useita kuukausia.", en: "The application is made electronically via Enter Finland or on paper to Migri. Processing time can be several months." } },
      { type: "multiple-choice", question: { fi: "Voiko Suomen kansalainen menettää kansalaisuutensa?", en: "Can a Finnish citizen lose their citizenship?" }, choices: [{ fi: "Kyllä, mutta vain erityistapauksissa (esim. kaksoiskansalainen, joka ei asu Suomessa)", en: "Yes, but only in special cases (e.g., dual citizen not living in Finland)" }, { fi: "Ei koskaan", en: "Never" }, { fi: "Kyllä, rikoksen vuoksi", en: "Yes, due to crime" }, { fi: "Kyllä, jos ei maksa veroja", en: "Yes, if not paying taxes" }], correct: 0, explanation: { fi: "Kansalaisuuden voi menettää vain harvinaisissa tapauksissa. Suomi sallii kaksoiskansalaisuuden.", en: "Citizenship can only be lost in rare cases. Finland allows dual citizenship." } }
    ]
  }
]);

// ── Extra Historia lessons ──
addLessonsToModule("historia", [
  {
    id: "his-2",
    title: { fi: "Itsenäinen Suomi", en: "Independent Finland" },
    icon: "🇫🇮",
    exercises: [
      { type: "multiple-choice", question: { fi: "Mitä tapahtui talvisodassa 1939–1940?", en: "What happened in the Winter War 1939–1940?" }, choices: [{ fi: "Neuvostoliitto hyökkäsi Suomeen, Suomi puolustautui menestyksekkäästi mutta joutui luovuttamaan alueita", en: "Soviet Union attacked Finland, Finland defended successfully but had to cede territories" }, { fi: "Suomi hyökkäsi Venäjälle", en: "Finland attacked Russia" }, { fi: "Suomi liittyi EU:hun", en: "Finland joined the EU" }, { fi: "Suomi itsenäistyi", en: "Finland became independent" }], correct: 0, explanation: { fi: "Talvisota kesti 105 päivää. Suomi menetti alueita mutta säilytti itsenäisyytensä. Maailma ihaili suomalaisten puolustustahtoa.", en: "The Winter War lasted 105 days. Finland lost territories but maintained independence. The world admired Finnish defense will." } },
      { type: "true-false", question: { fi: "Suomi liittyi NATOon vuonna 2023.", en: "Finland joined NATO in 2023." }, correct: true, explanation: { fi: "Suomi liittyi NATOon 4.4.2023 Venäjän hyökättyä Ukrainaan. Suomi oli aiemmin sotilaallisesti liittoutumaton.", en: "Finland joined NATO on April 4, 2023, after Russia attacked Ukraine. Finland was previously militarily non-aligned." } },
      { type: "matching", instruction: { fi: "Yhdistä tapahtuma ja vuosi", en: "Match the event and year" }, pairs: [{ left: { fi: "EU-jäsenyys", en: "EU membership" }, right: { fi: "1995", en: "1995" } }, { left: { fi: "Euro käyttöön", en: "Euro adopted" }, right: { fi: "2002", en: "2002" } }, { left: { fi: "NATO-jäsenyys", en: "NATO membership" }, right: { fi: "2023", en: "2023" } }, { left: { fi: "Naisten äänioikeus", en: "Women's suffrage" }, right: { fi: "1906", en: "1906" } }], explanation: { fi: "Suomen historia kansainvälisissä järjestöissä: YK (1955), EFTA (1961), EU (1995), euro (2002), NATO (2023).", en: "Finland's history in international organizations: UN (1955), EFTA (1961), EU (1995), euro (2002), NATO (2023)." } },
      { type: "fill-blank", sentence: { fi: "Suomi oli sotilaallisesti ___ ennen NATO-jäsenyyttä.", en: "Finland was militarily ___ before NATO membership." }, answer: "liittoutumaton", alternatives: ["liittoutumaton", "puolueeton"], explanation: { fi: "Suomi oli kylmän sodan aikana puolueeton. Neuvostoliiton hajoamisen jälkeenkin Suomi pysyi liittoutumattomana vuoteen 2023 asti.", en: "Finland was neutral during the Cold War. Even after the Soviet Union's collapse, Finland remained non-aligned until 2023." } },
      { type: "multiple-choice", question: { fi: "Mikä oli Suomen nopean kehityksen perusta sodanjälkeisinä vuosikymmeninä?", en: "What was the basis of Finland's rapid development in post-war decades?" }, choices: [{ fi: "Teollistuminen, koulutus ja hyvinvointivaltion rakentaminen", en: "Industrialization, education, and building the welfare state" }, { fi: "Öljyntuotanto", en: "Oil production" }, { fi: "Siirtomaiden hyväksikäyttö", en: "Colonial exploitation" }, { fi: "Sotakorvaukset muilta mailta", en: "War reparations from other countries" }], correct: 0, explanation: { fi: "Suomi maksoi sotakorvauksia Neuvostoliitolle, mutta samalla teollistui nopeasti. Koulutusjärjestelmä ja hyvinvointivaltio rakennettiin 1960–80-luvuilla.", en: "Finland paid war reparations to the Soviet Union while rapidly industrializing. The education system and welfare state were built in the 1960s–80s." } }
    ]
  }
]);
