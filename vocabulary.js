// ============================================================
// Suomi Oppi — Vocabulary Database
// Key terms for Finnish citizenship test (B1-B2)
// ============================================================

const VOCABULARY = [
  // ── Kotoutuminen ──
  { id: "v-koto-1", module: "kotoutuminen", fi: "kotoutuminen", en: "integration", definition_fi: "Prosessi, jossa maahanmuuttaja tulee osaksi suomalaista yhteiskuntaa", definition_en: "Process where an immigrant becomes part of Finnish society", example_fi: "Kotoutuminen on kaksisuuntainen prosessi." },
  { id: "v-koto-2", module: "kotoutuminen", fi: "kotoutumissuunnitelma", en: "integration plan", definition_fi: "Henkilökohtainen suunnitelma kotoutumisen tueksi, tehdään TE-toimistossa", definition_en: "Personal plan to support integration, made at the TE office", example_fi: "Kotoutumissuunnitelma tehdään yhdessä TE-toimiston kanssa." },
  { id: "v-koto-3", module: "kotoutuminen", fi: "oleskelulupa", en: "residence permit", definition_fi: "Lupa asua Suomessa", definition_en: "Permission to live in Finland", example_fi: "Oleskelulupa voi olla määräaikainen tai pysyvä." },
  { id: "v-koto-4", module: "kotoutuminen", fi: "hyvinvointivaltio", en: "welfare state", definition_fi: "Valtio, joka takaa kaikille asukkailleen välttämättömän toimeentulon", definition_en: "State that guarantees all residents basic livelihood", example_fi: "Suomi on pohjoismainen hyvinvointivaltio." },
  { id: "v-koto-5", module: "kotoutuminen", fi: "kansalliskieli", en: "national language", definition_fi: "Maan virallinen kieli", definition_en: "Official language of a country", example_fi: "Suomen kansalliskielet ovat suomi ja ruotsi." },
  { id: "v-koto-6", module: "kotoutuminen", fi: "kaupungistuminen", en: "urbanization", definition_fi: "Kehitys, jossa ihmiset muuttavat maaseudulta kaupunkeihin", definition_en: "Development where people move from countryside to cities", example_fi: "Suomessa kaupungistuminen alkoi 1950-luvulla." },
  { id: "v-koto-7", module: "kotoutuminen", fi: "pääkaupunkiseutu", en: "capital region", definition_fi: "Helsinki, Espoo, Vantaa ja Kauniainen", definition_en: "Helsinki, Espoo, Vantaa and Kauniainen", example_fi: "Pääkaupunkiseudulla asuu yli miljoona ihmistä." },

  // ── Ihmiset ja kulttuuri ──
  { id: "v-ihku-1", module: "ihmiset-kulttuuri", fi: "tasa-arvo", en: "equality", definition_fi: "Kaikkien ihmisten yhtäläinen arvo yksilöinä, erityisesti sukupuolten tasa-arvo", definition_en: "Equal value of all people, especially gender equality", example_fi: "Tasa-arvo on Suomen perustuslain keskeinen periaate." },
  { id: "v-ihku-2", module: "ihmiset-kulttuuri", fi: "yhdenvertaisuus", en: "non-discrimination / equality", definition_fi: "Kaikki ihmiset ovat samanarvoisia, ketään ei saa syrjiä", definition_en: "All people are equal, no one may be discriminated against", example_fi: "Yhdenvertaisuuslaki suojaa syrjinnältä." },
  { id: "v-ihku-3", module: "ihmiset-kulttuuri", fi: "uskonnonvapaus", en: "freedom of religion", definition_fi: "Oikeus harjoittaa uskontoaan tai olla harjoittamatta", definition_en: "Right to practice or not practice a religion", example_fi: "Uskonnonvapaus on perusoikeus Suomessa." },
  { id: "v-ihku-4", module: "ihmiset-kulttuuri", fi: "sananvapaus", en: "freedom of speech", definition_fi: "Oikeus ilmaista mielipiteensä vapaasti", definition_en: "Right to freely express one's opinions", example_fi: "Sananvapaus on turvattu perustuslaissa." },
  { id: "v-ihku-5", module: "ihmiset-kulttuuri", fi: "jokamiehen oikeudet", en: "everyman's rights", definition_fi: "Oikeus liikkua luonnossa, poimia marjoja ja sieniä vapaasti", definition_en: "Right to roam in nature, pick berries and mushrooms freely", example_fi: "Jokamiehen oikeudet sallivat marjastuksen ja sienestyksen." },
  { id: "v-ihku-6", module: "ihmiset-kulttuuri", fi: "sisu", en: "sisu (inner strength)", definition_fi: "Sisäinen lujuus, sinnikkyys ja päättäväisyys", definition_en: "Inner strength, perseverance and determination", example_fi: "Sisu on tyypillinen suomalainen arvo." },
  { id: "v-ihku-7", module: "ihmiset-kulttuuri", fi: "evankelis-luterilainen kirkko", en: "Evangelical Lutheran Church", definition_fi: "Suomen suurin uskonnollinen yhteisö, noin 66 % väestöstä", definition_en: "Finland's largest religious community, about 66% of population", example_fi: "Suomessa on kaksi kansankirkkoa." },
  { id: "v-ihku-8", module: "ihmiset-kulttuuri", fi: "alkuperäiskansa", en: "indigenous people", definition_fi: "Alkuperäinen kansa, joka on asunut alueella ennen valtion syntyä", definition_en: "Original people who lived in the area before the state existed", example_fi: "Saamelaiset ovat Suomen ainoa alkuperäiskansa." },
  { id: "v-ihku-9", module: "ihmiset-kulttuuri", fi: "itsenäisyyspäivä", en: "Independence Day", definition_fi: "6. joulukuuta, juhla Suomen itsenäistymisen kunniaksi", definition_en: "December 6, celebration of Finland's independence", example_fi: "Itsenäisyyspäivänä järjestetään presidentin linnanjuhlat." },
  { id: "v-ihku-10", module: "ihmiset-kulttuuri", fi: "asevelvollisuus", en: "military conscription", definition_fi: "Velvollisuus suorittaa varusmiespalvelus, koskee 18–60-vuotiaita miehiä", definition_en: "Obligation to perform military service, applies to men aged 18–60", example_fi: "Suomessa on yleinen asevelvollisuus." },

  // ── Arki ──
  { id: "v-arki-1", module: "arki", fi: "henkilötunnus", en: "personal identity code", definition_fi: "Jokaiselle Suomessa asuvalle annettava yksilöllinen tunniste", definition_en: "Unique identifier given to everyone living in Finland", example_fi: "Henkilötunnus tarvitaan viranomaisasioinnissa." },
  { id: "v-arki-2", module: "arki", fi: "taloyhtiö", en: "housing company", definition_fi: "Yritys, joka omistaa ja hallinnoi asuinrakennusta", definition_en: "Company that owns and manages a residential building", example_fi: "Taloyhtiö vastaa rakennuksen ylläpidosta." },
  { id: "v-arki-3", module: "arki", fi: "vuokrasopimus", en: "rental agreement", definition_fi: "Kirjallinen sopimus vuokra-asunnosta vuokralaisen ja vuokranantajan välillä", definition_en: "Written agreement between tenant and landlord", example_fi: "Vuokrasopimus kannattaa aina tehdä kirjallisesti." },
  { id: "v-arki-4", module: "arki", fi: "Kela", en: "Kela (Social Insurance Institution)", definition_fi: "Viranomainen, joka hoitaa sosiaaliturvaetuuksia", definition_en: "Authority that handles social security benefits", example_fi: "Kela maksaa asumistukea ja lapsilisää." },
  { id: "v-arki-5", module: "arki", fi: "verokortti", en: "tax card", definition_fi: "Asiakirja, joka kertoo työnantajalle veroprosenttisi", definition_en: "Document telling employer your tax rate", example_fi: "Verokortin saa verotoimistosta tai verkosta." },
  { id: "v-arki-6", module: "arki", fi: "muuttoilmoitus", en: "change of address notification", definition_fi: "Ilmoitus DVV:lle osoitteenmuutoksesta", definition_en: "Notification to DVV about address change", example_fi: "Muuttoilmoitus on tehtävä viikon kuluessa." },
  { id: "v-arki-7", module: "arki", fi: "järjestyssäännöt", en: "house rules", definition_fi: "Taloyhtiön säännöt, joita asukkaiden on noudatettava", definition_en: "Housing company rules that residents must follow", example_fi: "Järjestyssäännöt koskevat mm. hiljaisuusaikoja." },

  // ── Työ ──
  { id: "v-tyo-1", module: "tyo", fi: "työsopimus", en: "employment contract", definition_fi: "Sopimus työnantajan ja työntekijän välillä", definition_en: "Agreement between employer and employee", example_fi: "Työsopimus voi olla määräaikainen tai toistaiseksi voimassa oleva." },
  { id: "v-tyo-2", module: "tyo", fi: "työehtosopimus (TES)", en: "collective agreement", definition_fi: "Sopimus, joka määrää alan minimipalkan ja työehdot", definition_en: "Agreement that sets industry minimum wage and working conditions", example_fi: "Suomessa ei ole lakisääteistä minimipalkkaa vaan palkat määräytyvät TES:n mukaan." },
  { id: "v-tyo-3", module: "tyo", fi: "ammattiliitto", en: "trade union", definition_fi: "Järjestö, joka puolustaa työntekijöiden etuja", definition_en: "Organization that defends workers' interests", example_fi: "Noin 60 % suomalaisista työntekijöistä kuuluu ammattiliittoon." },
  { id: "v-tyo-4", module: "tyo", fi: "koeaika", en: "trial period", definition_fi: "Työsuhteen alun jakso, enintään 6 kuukautta", definition_en: "Initial period of employment, max 6 months", example_fi: "Koeaikana molemmat osapuolet voivat purkaa sopimuksen." },
  { id: "v-tyo-5", module: "tyo", fi: "ennakonpidätys", en: "tax withholding", definition_fi: "Työnantaja vähentää verot palkasta ennen maksamista", definition_en: "Employer deducts taxes from salary before payment", example_fi: "Ennakonpidätysprosentti näkyy verokortissa." },
  { id: "v-tyo-6", module: "tyo", fi: "vuosiloma", en: "annual leave", definition_fi: "Palkallinen loma, yleensä 2–5 viikkoa vuodessa", definition_en: "Paid vacation, usually 2–5 weeks per year", example_fi: "Vuosiloma kertyy työsuhteen keston mukaan." },
  { id: "v-tyo-7", module: "tyo", fi: "TE-toimisto", en: "TE office (Employment office)", definition_fi: "Työ- ja elinkeinotoimisto, auttaa työnhaussa ja koulutuksessa", definition_en: "Employment and Economic Development Office", example_fi: "TE-toimisto tarjoaa työnvälityspalveluja." },

  // ── Koulutus ──
  { id: "v-kou-1", module: "koulutus", fi: "oppivelvollisuus", en: "compulsory education", definition_fi: "Velvollisuus käydä koulua, Suomessa 18 ikävuoteen asti", definition_en: "Obligation to attend school, in Finland until age 18", example_fi: "Oppivelvollisuus laajennettiin 18 ikävuoteen vuonna 2021." },
  { id: "v-kou-2", module: "koulutus", fi: "peruskoulu", en: "basic education / comprehensive school", definition_fi: "9-vuotinen yleissivistävä koulutus kaikille lapsille", definition_en: "9-year general education for all children", example_fi: "Peruskoulu on Suomessa täysin maksuton." },
  { id: "v-kou-3", module: "koulutus", fi: "lukio", en: "general upper secondary school", definition_fi: "Yleissivistävä toisen asteen koulu, valmentaa yliopistoon", definition_en: "General upper secondary, prepares for university", example_fi: "Lukion jälkeen voi hakea yliopistoon tai ammattikorkeakouluun." },
  { id: "v-kou-4", module: "koulutus", fi: "ammattikoulu", en: "vocational school", definition_fi: "Ammattiin valmentava toisen asteen koulu", definition_en: "Vocational upper secondary school", example_fi: "Ammattikoulussa voi opiskella esim. kokin tai sähköasentajan ammatin." },
  { id: "v-kou-5", module: "koulutus", fi: "kansalaisopisto", en: "adult education center", definition_fi: "Edullisia kursseja aikuisille kielistä käsitöihin", definition_en: "Affordable courses for adults from languages to handicrafts", example_fi: "Kansalaisopistoissa voi opiskella esim. suomen kieltä." },

  // ── Perheet ──
  { id: "v-per-1", module: "perheet", fi: "avoliitto", en: "cohabitation", definition_fi: "Kaksi ihmistä asuu yhdessä ilman avioliittoa", definition_en: "Two people living together without marriage", example_fi: "Avoliitto on yleinen perhemuoto Suomessa." },
  { id: "v-per-2", module: "perheet", fi: "vanhempainvapaa", en: "parental leave", definition_fi: "Palkallinen vapaa lapsen syntymän jälkeen molemmille vanhemmille", definition_en: "Paid leave after childbirth for both parents", example_fi: "Vanhempainvapaat jaetaan tasa-arvoisesti." },
  { id: "v-per-3", module: "perheet", fi: "lapsilisä", en: "child benefit", definition_fi: "Kelan maksama tuki alle 17-vuotiaista lapsista", definition_en: "Kela benefit for children under 17", example_fi: "Lapsilisä maksetaan kuukausittain." },
  { id: "v-per-4", module: "perheet", fi: "neuvola", en: "maternity/child health clinic", definition_fi: "Ilmainen palvelu raskauden ja lasten kasvun seurantaan", definition_en: "Free service for pregnancy and child growth monitoring", example_fi: "Neuvolassa seurataan lapsen kasvua ja kehitystä." },
  { id: "v-per-5", module: "perheet", fi: "lastensuojelu", en: "child protection", definition_fi: "Viranomaisten toiminta lapsen hyvinvoinnin turvaamiseksi", definition_en: "Authorities' work to ensure child welfare", example_fi: "Lastensuojelun tarkoitus on suojella lasta." },

  // ── Terveys ──
  { id: "v-ter-1", module: "terveys", fi: "terveyskeskus", en: "health center", definition_fi: "Julkisen perusterveydenhuollon paikka", definition_en: "Public primary healthcare facility", example_fi: "Terveyskeskukseen voi varata ajan lääkärille." },
  { id: "v-ter-2", module: "terveys", fi: "hätänumero", en: "emergency number", definition_fi: "112 — yhdistää poliisiin, palokuntaan ja ambulanssiin", definition_en: "112 — connects to police, fire department and ambulance", example_fi: "Hätänumero 112 toimii koko EU:ssa." },
  { id: "v-ter-3", module: "terveys", fi: "hyvinvointialue", en: "wellbeing services county", definition_fi: "Alue, joka järjestää sosiaali- ja terveyspalvelut", definition_en: "Region that organizes social and health services", example_fi: "Hyvinvointialueet aloittivat toimintansa 2023." },

  // ── Yhteiskunta ──
  { id: "v-yht-1", module: "yhteiskunta", fi: "eduskunta", en: "parliament", definition_fi: "Suomen ylin lainsäädäntöelin, 200 kansanedustajaa", definition_en: "Finland's supreme legislative body, 200 MPs", example_fi: "Eduskunta säätää lait ja hyväksyy budjetin." },
  { id: "v-yht-2", module: "yhteiskunta", fi: "perustuslaki", en: "constitution", definition_fi: "Suomen tärkein laki, joka määrittää perusoikeudet", definition_en: "Finland's most important law, defines fundamental rights", example_fi: "Perustuslaki takaa kaikille perusoikeudet." },
  { id: "v-yht-3", module: "yhteiskunta", fi: "kansanedustaja", en: "member of parliament", definition_fi: "Vaaleilla valittu eduskunnan jäsen", definition_en: "Elected member of parliament", example_fi: "Kansanedustajat valitaan neljäksi vuodeksi." },
  { id: "v-yht-4", module: "yhteiskunta", fi: "äänioikeus", en: "right to vote", definition_fi: "Oikeus äänestää vaaleissa", definition_en: "Right to vote in elections", example_fi: "Äänioikeus eduskuntavaaleissa on Suomen kansalaisilla." },
  { id: "v-yht-5", module: "yhteiskunta", fi: "kunta", en: "municipality", definition_fi: "Paikallinen hallintoalue, vastaa lähipalveluista", definition_en: "Local administrative area, responsible for local services", example_fi: "Suomessa on noin 300 kuntaa." },
  { id: "v-yht-6", module: "yhteiskunta", fi: "demokratia", en: "democracy", definition_fi: "Hallintomuoto, jossa valta on kansalla", definition_en: "Form of government where power belongs to the people", example_fi: "Suomi on liberaali demokratia." },
  { id: "v-yht-7", module: "yhteiskunta", fi: "hallitus", en: "government", definition_fi: "Pääministerin johtama ministereiden ryhmä", definition_en: "Group of ministers led by the prime minister", example_fi: "Hallitus valmistelee lakiesityksiä eduskunnalle." },

  // ── Lait ──
  { id: "v-lai-1", module: "lait", fi: "kansalaisuus", en: "citizenship", definition_fi: "Henkilön juridinen side valtioon", definition_en: "Person's legal bond with a state", example_fi: "Suomen kansalaisuutta voi hakea 5 vuoden asumisen jälkeen." },
  { id: "v-lai-2", module: "lait", fi: "tasa-arvolaki", en: "Equality Act", definition_fi: "Laki, joka kieltää sukupuoleen perustuvan syrjinnän", definition_en: "Law prohibiting gender-based discrimination", example_fi: "Tasa-arvolaki koskee työelämää ja koulutusta." },
  { id: "v-lai-3", module: "lait", fi: "yhdenvertaisuuslaki", en: "Non-Discrimination Act", definition_fi: "Laki, joka kieltää syrjinnän muilla perusteilla", definition_en: "Law prohibiting discrimination on other grounds", example_fi: "Yhdenvertaisuuslaki suojaa esim. etnistä syrjintää vastaan." },
  { id: "v-lai-4", module: "lait", fi: "oikeusapu", en: "legal aid", definition_fi: "Valtion tarjoama ilmainen tai edullinen oikeudellinen apu", definition_en: "Free or affordable legal help provided by the state", example_fi: "Oikeusapua saa oikeusaputoimistosta." },
  { id: "v-lai-5", module: "lait", fi: "rikosrekisteri", en: "criminal record", definition_fi: "Rekisteri henkilön tuomioista", definition_en: "Register of a person's convictions", example_fi: "Rikosrekisterimerkintä voi vaikuttaa kansalaisuushakemukseen." },

  // ── Historia ──
  { id: "v-his-1", module: "historia", fi: "suuriruhtinaskunta", en: "grand duchy", definition_fi: "Suomen asema osana Venäjää 1809–1917", definition_en: "Finland's status as part of Russia 1809–1917", example_fi: "Suomi oli autonominen suuriruhtinaskunta." },
  { id: "v-his-2", module: "historia", fi: "sisällissota", en: "civil war", definition_fi: "Vuoden 1918 sota punaisten ja valkoisten välillä", definition_en: "The 1918 war between reds and whites", example_fi: "Sisällissota käytiin keväällä 1918." },
  { id: "v-his-3", module: "historia", fi: "talvisota", en: "Winter War", definition_fi: "Sota Neuvostoliittoa vastaan 1939–1940", definition_en: "War against the Soviet Union 1939–1940", example_fi: "Talvisota alkoi 30.11.1939." },
  { id: "v-his-4", module: "historia", fi: "jatkosota", en: "Continuation War", definition_fi: "Sota Neuvostoliittoa vastaan 1941–1944", definition_en: "War against the Soviet Union 1941–1944", example_fi: "Jatkosota päättyi välirauhaan syyskuussa 1944." },
  { id: "v-his-5", module: "historia", fi: "EU-jäsenyys", en: "EU membership", definition_fi: "Suomi liittyi Euroopan unioniin 1995", definition_en: "Finland joined the European Union in 1995", example_fi: "Suomesta tuli EU:n jäsen vuonna 1995." },
];

// ============================================================
// Reading Comprehension Passages
// ============================================================

const READING_PASSAGES = [
  {
    id: "read-koto-1",
    module: "kotoutuminen",
    title: { fi: "Kotoutuminen Suomessa", en: "Integration in Finland" },
    text: {
      fi: "Kotoutuminen tarkoittaa sitä, että ihminen tottuu uuteen kotimaahansa. Hän oppii kieltä, löytää työtä tai opiskelupaikan ja oman paikkansa yhteiskunnassa. Kotoutuminen on kaksisuuntainen prosessi: sekä maahanmuuttaja että vastaanottava yhteiskunta osallistuvat siihen.\n\nSuomessa kotoutumisaika on yleensä kolme vuotta, ja se voidaan erityisistä syistä pidentää viiteen vuoteen. Tänä aikana maahanmuuttaja saa tukea esimerkiksi kielikoulutuksen ja työllistymisen muodossa. Kotoutumissuunnitelma tehdään yhdessä TE-toimiston kanssa.\n\nKotoutumiseen vaikuttavat monet asiat: muuton syy, kielitaito, terveys, perhetilanne ja tulevaisuuden suunnitelmat. Tärkeää on myös yhteiskunnan vastaanottavuus — miten hyvin uudet tulijat otetaan vastaan.",
      en: "Integration means a person gets used to their new homeland. They learn the language, find work or a study place, and their own place in society. Integration is a two-way process: both the immigrant and the receiving society participate.\n\nIn Finland, the integration period is usually three years, and can be extended to five years for special reasons. During this time, the immigrant receives support such as language training and employment services. The integration plan is made together with the TE office.\n\nMany things affect integration: the reason for moving, language skills, health, family situation, and future plans. The receptiveness of society is also important — how well newcomers are received."
    },
    questions: [
      {
        question: { fi: "Kuinka kauan kotoutumisaika yleensä kestää Suomessa?", en: "How long does the integration period usually last in Finland?" },
        choices: [
          { fi: "1 vuosi", en: "1 year" },
          { fi: "3 vuotta", en: "3 years" },
          { fi: "5 vuotta", en: "5 years" },
          { fi: "10 vuotta", en: "10 years" }
        ],
        correct: 1
      },
      {
        question: { fi: "Kenen kanssa kotoutumissuunnitelma tehdään?", en: "With whom is the integration plan made?" },
        choices: [
          { fi: "Poliisin kanssa", en: "With the police" },
          { fi: "Kelan kanssa", en: "With Kela" },
          { fi: "TE-toimiston kanssa", en: "With the TE office" },
          { fi: "Naapureiden kanssa", en: "With neighbors" }
        ],
        correct: 2
      },
      {
        question: { fi: "Mitä kotoutumisen kaksisuuntaisuus tarkoittaa?", en: "What does the two-way nature of integration mean?" },
        choices: [
          { fi: "Maahanmuuttaja muuttaa edestakaisin", en: "The immigrant moves back and forth" },
          { fi: "Sekä maahanmuuttaja että yhteiskunta osallistuvat kotoutumiseen", en: "Both the immigrant and society participate in integration" },
          { fi: "Kaksi kieltä on opittava", en: "Two languages must be learned" },
          { fi: "Kaksi suunnitelmaa tehdään", en: "Two plans are made" }
        ],
        correct: 1
      }
    ]
  },
  {
    id: "read-yhteiskunta-1",
    module: "yhteiskunta",
    title: { fi: "Suomen hallintojärjestelmä", en: "Finland's system of government" },
    text: {
      fi: "Suomi on tasavalta, jonka valtionpäämies on presidentti. Presidentti valitaan suoralla kansanvaalilla kuudeksi vuodeksi kerrallaan, ja sama henkilö voi toimia presidenttinä enintään kaksi kautta peräkkäin. Presidentti johtaa ulkopolitiikkaa yhdessä hallituksen kanssa.\n\nEduskunta on Suomen ylin lainsäädäntöelin. Siihen kuuluu 200 kansanedustajaa, jotka valitaan vaaleilla neljäksi vuodeksi. Eduskunta säätää lait, hyväksyy valtion talousarvion ja valvoo hallituksen toimintaa.\n\nHallitus käyttää toimeenpanovaltaa. Pääministeri johtaa hallitusta, ja ministerit vastaavat kukin omasta hallinnonalastaan. Hallitus valmistelee lakiesityksiä ja toteuttaa eduskunnan päätöksiä.\n\nPaikallishallinto perustuu kuntiin. Jokaisessa kunnassa on kunnanvaltuusto, jonka asukkaat valitsevat kuntavaaleissa. Kunnat vastaavat monista lähipalveluista, kuten kouluista ja kirjastoista.",
      en: "Finland is a republic whose head of state is the president. The president is elected by direct popular vote for six years at a time, and the same person can serve as president for a maximum of two consecutive terms. The president leads foreign policy together with the government.\n\nParliament is Finland's supreme legislative body. It consists of 200 members of parliament elected for four years. Parliament enacts laws, approves the state budget, and oversees the government.\n\nThe government exercises executive power. The prime minister leads the government, and ministers are each responsible for their own administrative area. The government prepares legislative proposals and implements parliament's decisions.\n\nLocal administration is based on municipalities. Each municipality has a municipal council elected by residents in municipal elections. Municipalities are responsible for many local services, such as schools and libraries."
    },
    questions: [
      {
        question: { fi: "Kuinka moneksi vuodeksi presidentti valitaan?", en: "For how many years is the president elected?" },
        choices: [
          { fi: "4 vuodeksi", en: "4 years" },
          { fi: "5 vuodeksi", en: "5 years" },
          { fi: "6 vuodeksi", en: "6 years" },
          { fi: "8 vuodeksi", en: "8 years" }
        ],
        correct: 2
      },
      {
        question: { fi: "Montako kansanedustajaa eduskunnassa on?", en: "How many MPs are in parliament?" },
        choices: [
          { fi: "100", en: "100" },
          { fi: "150", en: "150" },
          { fi: "200", en: "200" },
          { fi: "300", en: "300" }
        ],
        correct: 2
      },
      {
        question: { fi: "Kuka johtaa hallitusta?", en: "Who leads the government?" },
        choices: [
          { fi: "Presidentti", en: "The president" },
          { fi: "Pääministeri", en: "The prime minister" },
          { fi: "Eduskunnan puhemies", en: "The Speaker of Parliament" },
          { fi: "Oikeuskansleri", en: "The Chancellor of Justice" }
        ],
        correct: 1
      }
    ]
  },
  {
    id: "read-lait-1",
    module: "lait",
    title: { fi: "Oikeudet ja velvollisuudet Suomessa", en: "Rights and obligations in Finland" },
    text: {
      fi: "Suomen perustuslaki takaa kaikille perusoikeudet riippumatta kansalaisuudesta tai taustasta. Näihin kuuluvat yhdenvertaisuus lain edessä, oikeus elämään, sananvapaus, uskonnonvapaus ja oikeus sosiaaliturvaan. Ketään ei saa syrjiä iän, alkuperän, kielen, uskonnon, sukupuolen tai muun syyn perusteella.\n\nOikeuksien rinnalla kulkevat velvollisuudet. Jokaisen Suomessa asuvan on noudatettava Suomen lakeja. Veronmaksuvelvollisuus koskee kaikkia, jotka saavat tuloja Suomessa. Lapsilla on oppivelvollisuus 18 ikävuoteen asti.\n\nSuomen kansalaisuutta voi hakea, kun on asunut Suomessa vähintään viisi vuotta ja täyttää muut edellytykset: riittävä suomen tai ruotsin kielen taito, nuhteettomuus ja selvitetty henkilöllisyys. Kansalaisuus antaa oikeuden äänestää eduskuntavaaleissa ja Suomen passin.",
      en: "The Finnish constitution guarantees fundamental rights to everyone regardless of citizenship or background. These include equality before the law, right to life, freedom of speech, freedom of religion, and right to social security. No one may be discriminated against based on age, origin, language, religion, gender, or other reasons.\n\nAlongside rights come obligations. Everyone living in Finland must obey Finnish laws. The obligation to pay taxes applies to everyone who earns income in Finland. Children have compulsory education until age 18.\n\nFinnish citizenship can be applied for after living in Finland for at least five years and meeting other requirements: sufficient Finnish or Swedish language skills, good conduct, and verified identity. Citizenship gives the right to vote in parliamentary elections and a Finnish passport."
    },
    questions: [
      {
        question: { fi: "Mitä perusoikeuksia perustuslaki takaa?", en: "What fundamental rights does the constitution guarantee?" },
        choices: [
          { fi: "Vain Suomen kansalaisille oikeuksia", en: "Rights only for Finnish citizens" },
          { fi: "Yhdenvertaisuus, sananvapaus, uskonnonvapaus ja oikeus sosiaaliturvaan kaikille", en: "Equality, freedom of speech, freedom of religion and social security for all" },
          { fi: "Vain oikeus työhön", en: "Only the right to work" },
          { fi: "Oikeuksia vain yli 18-vuotiaille", en: "Rights only for those over 18" }
        ],
        correct: 1
      },
      {
        question: { fi: "Montako vuotta pitää asua Suomessa ennen kansalaisuushakemusta?", en: "How many years must one live in Finland before applying for citizenship?" },
        choices: [
          { fi: "2 vuotta", en: "2 years" },
          { fi: "3 vuotta", en: "3 years" },
          { fi: "5 vuotta", en: "5 years" },
          { fi: "10 vuotta", en: "10 years" }
        ],
        correct: 2
      },
      {
        question: { fi: "Mikä oikeus tulee kansalaisuuden mukana?", en: "What right comes with citizenship?" },
        choices: [
          { fi: "Oikeus ilmaiseen asuntoon", en: "Right to free housing" },
          { fi: "Oikeus äänestää eduskuntavaaleissa", en: "Right to vote in parliamentary elections" },
          { fi: "Oikeus olla maksamatta veroja", en: "Right not to pay taxes" },
          { fi: "Oikeus ilmaiseen autoon", en: "Right to a free car" }
        ],
        correct: 1
      }
    ]
  },
  {
    id: "read-tyo-1",
    module: "tyo",
    title: { fi: "Työelämä Suomessa", en: "Working life in Finland" },
    text: {
      fi: "Suomalainen työkulttuuri perustuu luottamukseen, täsmällisyyteen ja tasavertaisuuteen. Työpaikoilla hierarkia on usein matala: esimiestä voi puhutella etunimellä, ja kaikkien mielipiteitä kuunnellaan. Kokouksiin tullaan ajoissa, ja sovituista asioista pidetään kiinni.\n\nSuomessa ei ole lakisääteistä minimipalkkaa. Palkat määräytyvät työehtosopimuksen (TES) mukaan, joka sovitaan ammattiliittojen ja työnantajajärjestöjen välillä. Normaali työviikko on 37,5–40 tuntia, ja vuosilomaa kertyy 2–5 viikkoa vuodessa.\n\nTyöturvallisuus on tärkeä osa suomalaista työelämää. Työnantajan on huolehdittava turvallisista työoloista. Työntekijällä on oikeus kieltäytyä vaarallisesta työstä. Jos ongelmia ilmenee, voi ottaa yhteyttä työsuojeluviranomaisiin tai ammattiliittoon.",
      en: "Finnish work culture is based on trust, punctuality, and equality. Workplace hierarchy is often flat: you can address your boss by first name, and everyone's opinions are listened to. People arrive on time for meetings, and agreements are kept.\n\nFinland has no statutory minimum wage. Wages are determined by collective agreements negotiated between trade unions and employer organizations. A normal work week is 37.5–40 hours, and annual leave accumulates 2–5 weeks per year.\n\nOccupational safety is an important part of Finnish working life. The employer must ensure safe working conditions. An employee has the right to refuse dangerous work. If problems arise, you can contact occupational safety authorities or your trade union."
    },
    questions: [
      {
        question: { fi: "Miten palkat määräytyvät Suomessa?", en: "How are wages determined in Finland?" },
        choices: [
          { fi: "Laki määrää minimipalkan", en: "The law sets the minimum wage" },
          { fi: "Työnantaja päättää yksin", en: "The employer decides alone" },
          { fi: "Työehtosopimuksen mukaan", en: "According to collective agreements" },
          { fi: "Työntekijä valitsee palkkansa", en: "The employee chooses their salary" }
        ],
        correct: 2
      },
      {
        question: { fi: "Kuinka pitkä on normaali työviikko?", en: "How long is a normal work week?" },
        choices: [
          { fi: "30 tuntia", en: "30 hours" },
          { fi: "37,5–40 tuntia", en: "37.5–40 hours" },
          { fi: "45 tuntia", en: "45 hours" },
          { fi: "50 tuntia", en: "50 hours" }
        ],
        correct: 1
      },
      {
        question: { fi: "Mitä työntekijä voi tehdä, jos työ on vaarallista?", en: "What can an employee do if work is dangerous?" },
        choices: [
          { fi: "Ei mitään", en: "Nothing" },
          { fi: "Kieltäytyä vaarallisesta työstä", en: "Refuse dangerous work" },
          { fi: "Soittaa poliisille", en: "Call the police" },
          { fi: "Lopettaa töissä heti", en: "Quit immediately" }
        ],
        correct: 1
      }
    ]
  },
  {
    id: "read-historia-1",
    module: "historia",
    title: { fi: "Suomen tie itsenäisyyteen", en: "Finland's path to independence" },
    text: {
      fi: "Suomi oli osa Ruotsin valtakuntaa noin 700 vuotta, vuodesta 1150 vuoteen 1809. Tänä aikana Suomeen tuli kristinusko, ruotsalainen oikeusjärjestelmä ja hallintokulttuuri. Ruotsin kieli oli hallinnon ja sivistyksen kieli.\n\nVuonna 1809 Suomi siirtyi Venäjän alaisuuteen ja sai autonomisen suuriruhtinaskunnan aseman. Suomi sai pitää omat lakinsa, uskonnon ja hallinnon. Tämä ajanjakso vahvisti suomalaista kansallistunnetta. Vuonna 1906 Suomi sai ensimmäisenä Euroopassa yleisen ja yhtäläisen äänioikeuden — myös naisille.\n\nVenäjän vallankumous vuonna 1917 avasi tien itsenäisyydelle. Suomen eduskunta hyväksyi itsenäisyysjulistuksen 6. joulukuuta 1917. Itsenäistymisen jälkeen vuonna 1918 käytiin lyhyt mutta verinen sisällissota. Sen jälkeen Suomi rakensi demokraattista yhteiskuntaa.",
      en: "Finland was part of the Kingdom of Sweden for about 700 years, from 1150 to 1809. During this time, Christianity, the Swedish legal system, and administrative culture came to Finland. Swedish was the language of administration and education.\n\nIn 1809, Finland came under Russian rule and gained the status of an autonomous grand duchy. Finland was allowed to keep its own laws, religion, and administration. This period strengthened Finnish national consciousness. In 1906, Finland became the first in Europe to grant universal and equal suffrage — including for women.\n\nThe Russian Revolution in 1917 opened the path to independence. The Finnish parliament approved the declaration of independence on December 6, 1917. After independence, a short but bloody civil war was fought in 1918. After that, Finland built a democratic society."
    },
    questions: [
      {
        question: { fi: "Kuinka kauan Suomi oli osa Ruotsia?", en: "How long was Finland part of Sweden?" },
        choices: [
          { fi: "Noin 200 vuotta", en: "About 200 years" },
          { fi: "Noin 500 vuotta", en: "About 500 years" },
          { fi: "Noin 700 vuotta", en: "About 700 years" },
          { fi: "Noin 1000 vuotta", en: "About 1000 years" }
        ],
        correct: 2
      },
      {
        question: { fi: "Milloin naiset saivat äänioikeuden Suomessa?", en: "When did women get the right to vote in Finland?" },
        choices: [
          { fi: "1809", en: "1809" },
          { fi: "1906", en: "1906" },
          { fi: "1917", en: "1917" },
          { fi: "1945", en: "1945" }
        ],
        correct: 1
      },
      {
        question: { fi: "Mikä mahdollisti Suomen itsenäistymisen 1917?", en: "What made Finland's independence possible in 1917?" },
        choices: [
          { fi: "Ruotsin sota", en: "Sweden's war" },
          { fi: "Venäjän vallankumous", en: "The Russian Revolution" },
          { fi: "EU:n perustaminen", en: "The founding of the EU" },
          { fi: "NATO-jäsenyys", en: "NATO membership" }
        ],
        correct: 1
      }
    ]
  }
];
