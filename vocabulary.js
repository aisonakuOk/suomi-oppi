// ============================================================
// Suomi Oppi — Vocabulary Database
// Key terms for Finnish citizenship test (B1-B2)
// ============================================================

const VOCABULARY = [
  // ── Kotoutuminen ──
  { id: "v-koto-1", module: "kotoutuminen", fi: "kotoutuminen", en: "integration", ru: "интеграция", definition_fi: "Prosessi, jossa maahanmuuttaja tulee osaksi suomalaista yhteiskuntaa", definition_en: "Process where an immigrant becomes part of Finnish society", definition_ru: "Процесс, в ходе которого иммигрант становится частью финского общества", example_fi: "Kotoutuminen on kaksisuuntainen prosessi.", example_ru: "Интеграция — это двусторонний процесс." },
  { id: "v-koto-2", module: "kotoutuminen", fi: "kotoutumissuunnitelma", en: "integration plan", ru: "план интеграции", definition_fi: "Henkilökohtainen suunnitelma kotoutumisen tueksi, tehdään TE-toimistossa", definition_en: "Personal plan to support integration, made at the TE office", definition_ru: "Личный план поддержки интеграции, составляется в бюро по трудоустройству (TE-toimisto)", example_fi: "Kotoutumissuunnitelma tehdään yhdessä TE-toimiston kanssa.", example_ru: "План интеграции составляется совместно с бюро по трудоустройству." },
  { id: "v-koto-3", module: "kotoutuminen", fi: "oleskelulupa", en: "residence permit", ru: "вид на жительство", definition_fi: "Lupa asua Suomessa", definition_en: "Permission to live in Finland", definition_ru: "Разрешение на проживание в Финляндии", example_fi: "Oleskelulupa voi olla määräaikainen tai pysyvä.", example_ru: "Вид на жительство может быть временным или постоянным." },
  { id: "v-koto-4", module: "kotoutuminen", fi: "hyvinvointivaltio", en: "welfare state", ru: "государство всеобщего благосостояния", definition_fi: "Valtio, joka takaa kaikille asukkailleen välttämättömän toimeentulon", definition_en: "State that guarantees all residents basic livelihood", definition_ru: "Государство, которое гарантирует всем жителям базовый уровень жизни", example_fi: "Suomi on pohjoismainen hyvinvointivaltio.", example_ru: "Финляндия — это скандинавское государство всеобщего благосостояния." },
  { id: "v-koto-5", module: "kotoutuminen", fi: "kansalliskieli", en: "national language", ru: "государственный язык", definition_fi: "Maan virallinen kieli", definition_en: "Official language of a country", definition_ru: "Официальный язык страны", example_fi: "Suomen kansalliskielet ovat suomi ja ruotsi.", example_ru: "Государственные языки Финляндии — финский и шведский." },
  { id: "v-koto-6", module: "kotoutuminen", fi: "kaupungistuminen", en: "urbanization", ru: "урбанизация", definition_fi: "Kehitys, jossa ihmiset muuttavat maaseudulta kaupunkeihin", definition_en: "Development where people move from countryside to cities", definition_ru: "Процесс переселения людей из сельской местности в города", example_fi: "Suomessa kaupungistuminen alkoi 1950-luvulla.", example_ru: "В Финляндии урбанизация началась в 1950-х годах." },
  { id: "v-koto-7", module: "kotoutuminen", fi: "pääkaupunkiseutu", en: "capital region", ru: "столичный регион", definition_fi: "Helsinki, Espoo, Vantaa ja Kauniainen", definition_en: "Helsinki, Espoo, Vantaa and Kauniainen", definition_ru: "Хельсинки, Эспоо, Вантаа и Кауниайнен", example_fi: "Pääkaupunkiseudulla asuu yli miljoona ihmistä.", example_ru: "В столичном регионе проживает более миллиона человек." },

  // ── Ihmiset ja kulttuuri ──
  { id: "v-ihku-1", module: "ihmiset-kulttuuri", fi: "tasa-arvo", en: "equality", ru: "равноправие", definition_fi: "Kaikkien ihmisten yhtäläinen arvo yksilöinä, erityisesti sukupuolten tasa-arvo", definition_en: "Equal value of all people, especially gender equality", definition_ru: "Равная ценность всех людей, особенно гендерное равенство", example_fi: "Tasa-arvo on Suomen perustuslain keskeinen periaate.", example_ru: "Равноправие — ключевой принцип Конституции Финляндии." },
  { id: "v-ihku-2", module: "ihmiset-kulttuuri", fi: "yhdenvertaisuus", en: "non-discrimination / equality", ru: "равенство / недискриминация", definition_fi: "Kaikki ihmiset ovat samanarvoisia, ketään ei saa syrjiä", definition_en: "All people are equal, no one may be discriminated against", definition_ru: "Все люди равны, никого нельзя дискриминировать", example_fi: "Yhdenvertaisuuslaki suojaa syrjinnältä.", example_ru: "Закон о равенстве защищает от дискриминации." },
  { id: "v-ihku-3", module: "ihmiset-kulttuuri", fi: "uskonnonvapaus", en: "freedom of religion", ru: "свобода вероисповедания", definition_fi: "Oikeus harjoittaa uskontoaan tai olla harjoittamatta", definition_en: "Right to practice or not practice a religion", definition_ru: "Право исповедовать религию или не исповедовать её", example_fi: "Uskonnonvapaus on perusoikeus Suomessa.", example_ru: "Свобода вероисповедания — основное право в Финляндии." },
  { id: "v-ihku-4", module: "ihmiset-kulttuuri", fi: "sananvapaus", en: "freedom of speech", ru: "свобода слова", definition_fi: "Oikeus ilmaista mielipiteensä vapaasti", definition_en: "Right to freely express one's opinions", definition_ru: "Право свободно выражать своё мнение", example_fi: "Sananvapaus on turvattu perustuslaissa.", example_ru: "Свобода слова гарантирована Конституцией." },
  { id: "v-ihku-5", module: "ihmiset-kulttuuri", fi: "jokamiehen oikeudet", en: "everyman's rights", ru: "право каждого (на доступ к природе)", definition_fi: "Oikeus liikkua luonnossa, poimia marjoja ja sieniä vapaasti", definition_en: "Right to roam in nature, pick berries and mushrooms freely", definition_ru: "Право свободно передвигаться на природе, собирать ягоды и грибы", example_fi: "Jokamiehen oikeudet sallivat marjastuksen ja sienestyksen.", example_ru: "Право каждого позволяет собирать ягоды и грибы." },
  { id: "v-ihku-6", module: "ihmiset-kulttuuri", fi: "sisu", en: "sisu (inner strength)", ru: "сису (внутренняя сила)", definition_fi: "Sisäinen lujuus, sinnikkyys ja päättäväisyys", definition_en: "Inner strength, perseverance and determination", definition_ru: "Внутренняя сила, упорство и решительность", example_fi: "Sisu on tyypillinen suomalainen arvo.", example_ru: "Сису — типичная финская ценность." },
  { id: "v-ihku-7", module: "ihmiset-kulttuuri", fi: "evankelis-luterilainen kirkko", en: "Evangelical Lutheran Church", ru: "Евангелическо-лютеранская церковь", definition_fi: "Suomen suurin uskonnollinen yhteisö, noin 66 % väestöstä", definition_en: "Finland's largest religious community, about 66% of population", definition_ru: "Крупнейшая религиозная община Финляндии, около 66 % населения", example_fi: "Suomessa on kaksi kansankirkkoa.", example_ru: "В Финляндии две народные церкви." },
  { id: "v-ihku-8", module: "ihmiset-kulttuuri", fi: "alkuperäiskansa", en: "indigenous people", ru: "коренной народ", definition_fi: "Alkuperäinen kansa, joka on asunut alueella ennen valtion syntyä", definition_en: "Original people who lived in the area before the state existed", definition_ru: "Народ, который проживал на территории до образования государства", example_fi: "Saamelaiset ovat Suomen ainoa alkuperäiskansa.", example_ru: "Саамы — единственный коренной народ Финляндии." },
  { id: "v-ihku-9", module: "ihmiset-kulttuuri", fi: "itsenäisyyspäivä", en: "Independence Day", ru: "День независимости", definition_fi: "6. joulukuuta, juhla Suomen itsenäistymisen kunniaksi", definition_en: "December 6, celebration of Finland's independence", definition_ru: "6 декабря, праздник в честь независимости Финляндии", example_fi: "Itsenäisyyspäivänä järjestetään presidentin linnanjuhlat.", example_ru: "В День независимости проводится приём президента в замке." },
  { id: "v-ihku-10", module: "ihmiset-kulttuuri", fi: "asevelvollisuus", en: "military conscription", ru: "воинская обязанность", definition_fi: "Velvollisuus suorittaa varusmiespalvelus, koskee 18–60-vuotiaita miehiä", definition_en: "Obligation to perform military service, applies to men aged 18–60", definition_ru: "Обязанность пройти военную службу, распространяется на мужчин 18–60 лет", example_fi: "Suomessa on yleinen asevelvollisuus.", example_ru: "В Финляндии действует всеобщая воинская обязанность." },

  // ── Arki ──
  { id: "v-arki-1", module: "arki", fi: "henkilötunnus", en: "personal identity code", ru: "личный идентификационный код", definition_fi: "Jokaiselle Suomessa asuvalle annettava yksilöllinen tunniste", definition_en: "Unique identifier given to everyone living in Finland", definition_ru: "Уникальный идентификатор, присваиваемый каждому проживающему в Финляндии", example_fi: "Henkilötunnus tarvitaan viranomaisasioinnissa.", example_ru: "Личный идентификационный код необходим для обращения в государственные органы." },
  { id: "v-arki-2", module: "arki", fi: "taloyhtiö", en: "housing company", ru: "жилищное товарищество", definition_fi: "Yritys, joka omistaa ja hallinnoi asuinrakennusta", definition_en: "Company that owns and manages a residential building", definition_ru: "Компания, которая владеет жилым зданием и управляет им", example_fi: "Taloyhtiö vastaa rakennuksen ylläpidosta.", example_ru: "Жилищное товарищество отвечает за содержание здания." },
  { id: "v-arki-3", module: "arki", fi: "vuokrasopimus", en: "rental agreement", ru: "договор аренды", definition_fi: "Kirjallinen sopimus vuokra-asunnosta vuokralaisen ja vuokranantajan välillä", definition_en: "Written agreement between tenant and landlord", definition_ru: "Письменный договор между арендатором и арендодателем", example_fi: "Vuokrasopimus kannattaa aina tehdä kirjallisesti.", example_ru: "Договор аренды всегда лучше заключать в письменной форме." },
  { id: "v-arki-4", module: "arki", fi: "Kela", en: "Kela (Social Insurance Institution)", ru: "Кела (Ведомство социального страхования)", definition_fi: "Viranomainen, joka hoitaa sosiaaliturvaetuuksia", definition_en: "Authority that handles social security benefits", definition_ru: "Ведомство, которое занимается выплатой социальных пособий", example_fi: "Kela maksaa asumistukea ja lapsilisää.", example_ru: "Кела выплачивает жилищное пособие и пособие на ребёнка." },
  { id: "v-arki-5", module: "arki", fi: "verokortti", en: "tax card", ru: "налоговая карточка", definition_fi: "Asiakirja, joka kertoo työnantajalle veroprosenttisi", definition_en: "Document telling employer your tax rate", definition_ru: "Документ, сообщающий работодателю вашу налоговую ставку", example_fi: "Verokortin saa verotoimistosta tai verkosta.", example_ru: "Налоговую карточку можно получить в налоговой службе или через интернет." },
  { id: "v-arki-6", module: "arki", fi: "muuttoilmoitus", en: "change of address notification", ru: "уведомление о смене адреса", definition_fi: "Ilmoitus DVV:lle osoitteenmuutoksesta", definition_en: "Notification to DVV about address change", definition_ru: "Уведомление в Агентство цифровой информации и учёта населения (DVV) о смене адреса", example_fi: "Muuttoilmoitus on tehtävä viikon kuluessa.", example_ru: "Уведомление о смене адреса необходимо подать в течение недели." },
  { id: "v-arki-7", module: "arki", fi: "järjestyssäännöt", en: "house rules", ru: "правила внутреннего распорядка", definition_fi: "Taloyhtiön säännöt, joita asukkaiden on noudatettava", definition_en: "Housing company rules that residents must follow", definition_ru: "Правила жилищного товарищества, которые жильцы обязаны соблюдать", example_fi: "Järjestyssäännöt koskevat mm. hiljaisuusaikoja.", example_ru: "Правила внутреннего распорядка касаются, в частности, часов тишины." },

  // ── Työ ──
  { id: "v-tyo-1", module: "tyo", fi: "työsopimus", en: "employment contract", ru: "трудовой договор", definition_fi: "Sopimus työnantajan ja työntekijän välillä", definition_en: "Agreement between employer and employee", definition_ru: "Договор между работодателем и работником", example_fi: "Työsopimus voi olla määräaikainen tai toistaiseksi voimassa oleva.", example_ru: "Трудовой договор может быть срочным или бессрочным." },
  { id: "v-tyo-2", module: "tyo", fi: "työehtosopimus (TES)", en: "collective agreement", ru: "коллективный договор (TES)", definition_fi: "Sopimus, joka määrää alan minimipalkan ja työehdot", definition_en: "Agreement that sets industry minimum wage and working conditions", definition_ru: "Договор, определяющий минимальную заработную плату и условия труда в отрасли", example_fi: "Suomessa ei ole lakisääteistä minimipalkkaa vaan palkat määräytyvät TES:n mukaan.", example_ru: "В Финляндии нет установленного законом минимального размера оплаты труда — зарплаты определяются коллективным договором." },
  { id: "v-tyo-3", module: "tyo", fi: "ammattiliitto", en: "trade union", ru: "профсоюз", definition_fi: "Järjestö, joka puolustaa työntekijöiden etuja", definition_en: "Organization that defends workers' interests", definition_ru: "Организация, защищающая интересы работников", example_fi: "Noin 60 % suomalaisista työntekijöistä kuuluu ammattiliittoon.", example_ru: "Около 60 % финских работников состоят в профсоюзе." },
  { id: "v-tyo-4", module: "tyo", fi: "koeaika", en: "trial period", ru: "испытательный срок", definition_fi: "Työsuhteen alun jakso, enintään 6 kuukautta", definition_en: "Initial period of employment, max 6 months", definition_ru: "Начальный период трудовых отношений, максимум 6 месяцев", example_fi: "Koeaikana molemmat osapuolet voivat purkaa sopimuksen.", example_ru: "Во время испытательного срока обе стороны могут расторгнуть договор." },
  { id: "v-tyo-5", module: "tyo", fi: "ennakonpidätys", en: "tax withholding", ru: "авансовый налог (удержание налога)", definition_fi: "Työnantaja vähentää verot palkasta ennen maksamista", definition_en: "Employer deducts taxes from salary before payment", definition_ru: "Работодатель удерживает налоги из зарплаты до её выплаты", example_fi: "Ennakonpidätysprosentti näkyy verokortissa.", example_ru: "Процент удержания налога указан в налоговой карточке." },
  { id: "v-tyo-6", module: "tyo", fi: "vuosiloma", en: "annual leave", ru: "ежегодный отпуск", definition_fi: "Palkallinen loma, yleensä 2–5 viikkoa vuodessa", definition_en: "Paid vacation, usually 2–5 weeks per year", definition_ru: "Оплачиваемый отпуск, обычно 2–5 недель в год", example_fi: "Vuosiloma kertyy työsuhteen keston mukaan.", example_ru: "Ежегодный отпуск накапливается в зависимости от стажа работы." },
  { id: "v-tyo-7", module: "tyo", fi: "TE-toimisto", en: "TE office (Employment office)", ru: "бюро по трудоустройству (TE-toimisto)", definition_fi: "Työ- ja elinkeinotoimisto, auttaa työnhaussa ja koulutuksessa", definition_en: "Employment and Economic Development Office", definition_ru: "Бюро труда и экономического развития, помогает в поиске работы и обучении", example_fi: "TE-toimisto tarjoaa työnvälityspalveluja.", example_ru: "Бюро по трудоустройству предоставляет услуги по поиску работы." },

  // ── Koulutus ──
  { id: "v-kou-1", module: "koulutus", fi: "oppivelvollisuus", en: "compulsory education", ru: "обязательное образование", definition_fi: "Velvollisuus käydä koulua, Suomessa 18 ikävuoteen asti", definition_en: "Obligation to attend school, in Finland until age 18", definition_ru: "Обязанность посещать школу, в Финляндии — до 18 лет", example_fi: "Oppivelvollisuus laajennettiin 18 ikävuoteen vuonna 2021.", example_ru: "Обязательное образование было продлено до 18 лет в 2021 году." },
  { id: "v-kou-2", module: "koulutus", fi: "peruskoulu", en: "basic education / comprehensive school", ru: "общеобразовательная школа", definition_fi: "9-vuotinen yleissivistävä koulutus kaikille lapsille", definition_en: "9-year general education for all children", definition_ru: "9-летнее общее образование для всех детей", example_fi: "Peruskoulu on Suomessa täysin maksuton.", example_ru: "Общеобразовательная школа в Финляндии полностью бесплатна." },
  { id: "v-kou-3", module: "koulutus", fi: "lukio", en: "general upper secondary school", ru: "гимназия (старшая ступень среднего образования)", definition_fi: "Yleissivistävä toisen asteen koulu, valmentaa yliopistoon", definition_en: "General upper secondary, prepares for university", definition_ru: "Общеобразовательная старшая школа, готовит к поступлению в университет", example_fi: "Lukion jälkeen voi hakea yliopistoon tai ammattikorkeakouluun.", example_ru: "После гимназии можно поступать в университет или в университет прикладных наук." },
  { id: "v-kou-4", module: "koulutus", fi: "ammattikoulu", en: "vocational school", ru: "профессиональное училище", definition_fi: "Ammattiin valmentava toisen asteen koulu", definition_en: "Vocational upper secondary school", definition_ru: "Среднее профессиональное учебное заведение", example_fi: "Ammattikoulussa voi opiskella esim. kokin tai sähköasentajan ammatin.", example_ru: "В профессиональном училище можно получить, например, профессию повара или электрика." },
  { id: "v-kou-5", module: "koulutus", fi: "kansalaisopisto", en: "adult education center", ru: "народное училище (центр образования для взрослых)", definition_fi: "Edullisia kursseja aikuisille kielistä käsitöihin", definition_en: "Affordable courses for adults from languages to handicrafts", definition_ru: "Недорогие курсы для взрослых — от языков до рукоделия", example_fi: "Kansalaisopistoissa voi opiskella esim. suomen kieltä.", example_ru: "В народных училищах можно изучать, например, финский язык." },

  // ── Perheet ──
  { id: "v-per-1", module: "perheet", fi: "avoliitto", en: "cohabitation", ru: "сожительство (гражданский брак)", definition_fi: "Kaksi ihmistä asuu yhdessä ilman avioliittoa", definition_en: "Two people living together without marriage", definition_ru: "Два человека живут вместе без регистрации брака", example_fi: "Avoliitto on yleinen perhemuoto Suomessa.", example_ru: "Сожительство — распространённая форма семьи в Финляндии." },
  { id: "v-per-2", module: "perheet", fi: "vanhempainvapaa", en: "parental leave", ru: "отпуск по уходу за ребёнком", definition_fi: "Palkallinen vapaa lapsen syntymän jälkeen molemmille vanhemmille", definition_en: "Paid leave after childbirth for both parents", definition_ru: "Оплачиваемый отпуск после рождения ребёнка для обоих родителей", example_fi: "Vanhempainvapaat jaetaan tasa-arvoisesti.", example_ru: "Отпуск по уходу за ребёнком распределяется на равных основаниях." },
  { id: "v-per-3", module: "perheet", fi: "lapsilisä", en: "child benefit", ru: "пособие на ребёнка", definition_fi: "Kelan maksama tuki alle 17-vuotiaista lapsista", definition_en: "Kela benefit for children under 17", definition_ru: "Пособие от Кела на детей до 17 лет", example_fi: "Lapsilisä maksetaan kuukausittain.", example_ru: "Пособие на ребёнка выплачивается ежемесячно." },
  { id: "v-per-4", module: "perheet", fi: "neuvola", en: "maternity/child health clinic", ru: "детская и женская консультация (нейвола)", definition_fi: "Ilmainen palvelu raskauden ja lasten kasvun seurantaan", definition_en: "Free service for pregnancy and child growth monitoring", definition_ru: "Бесплатная служба наблюдения за беременностью и развитием ребёнка", example_fi: "Neuvolassa seurataan lapsen kasvua ja kehitystä.", example_ru: "В нейволе следят за ростом и развитием ребёнка." },
  { id: "v-per-5", module: "perheet", fi: "lastensuojelu", en: "child protection", ru: "защита детей", definition_fi: "Viranomaisten toiminta lapsen hyvinvoinnin turvaamiseksi", definition_en: "Authorities' work to ensure child welfare", definition_ru: "Деятельность властей по обеспечению благополучия ребёнка", example_fi: "Lastensuojelun tarkoitus on suojella lasta.", example_ru: "Цель защиты детей — оберегать ребёнка." },

  // ── Terveys ──
  { id: "v-ter-1", module: "terveys", fi: "terveyskeskus", en: "health center", ru: "поликлиника (центр здоровья)", definition_fi: "Julkisen perusterveydenhuollon paikka", definition_en: "Public primary healthcare facility", definition_ru: "Учреждение первичной медицинской помощи", example_fi: "Terveyskeskukseen voi varata ajan lääkärille.", example_ru: "В поликлинику можно записаться на приём к врачу." },
  { id: "v-ter-2", module: "terveys", fi: "hätänumero", en: "emergency number", ru: "номер экстренной помощи", definition_fi: "112 — yhdistää poliisiin, palokuntaan ja ambulanssiin", definition_en: "112 — connects to police, fire department and ambulance", definition_ru: "112 — соединяет с полицией, пожарной службой и скорой помощью", example_fi: "Hätänumero 112 toimii koko EU:ssa.", example_ru: "Номер экстренной помощи 112 действует на всей территории ЕС." },
  { id: "v-ter-3", module: "terveys", fi: "hyvinvointialue", en: "wellbeing services county", ru: "область благополучия (регион социальных и медицинских услуг)", definition_fi: "Alue, joka järjestää sosiaali- ja terveyspalvelut", definition_en: "Region that organizes social and health services", definition_ru: "Регион, который организует социальные и медицинские услуги", example_fi: "Hyvinvointialueet aloittivat toimintansa 2023.", example_ru: "Области благополучия начали свою деятельность в 2023 году." },

  // ── Yhteiskunta ──
  { id: "v-yht-1", module: "yhteiskunta", fi: "eduskunta", en: "parliament", ru: "парламент (Эдускунта)", definition_fi: "Suomen ylin lainsäädäntöelin, 200 kansanedustajaa", definition_en: "Finland's supreme legislative body, 200 MPs", definition_ru: "Высший законодательный орган Финляндии, 200 депутатов", example_fi: "Eduskunta säätää lait ja hyväksyy budjetin.", example_ru: "Парламент принимает законы и утверждает бюджет." },
  { id: "v-yht-2", module: "yhteiskunta", fi: "perustuslaki", en: "constitution", ru: "конституция", definition_fi: "Suomen tärkein laki, joka määrittää perusoikeudet", definition_en: "Finland's most important law, defines fundamental rights", definition_ru: "Важнейший закон Финляндии, определяющий основные права", example_fi: "Perustuslaki takaa kaikille perusoikeudet.", example_ru: "Конституция гарантирует основные права каждому." },
  { id: "v-yht-3", module: "yhteiskunta", fi: "kansanedustaja", en: "member of parliament", ru: "депутат парламента", definition_fi: "Vaaleilla valittu eduskunnan jäsen", definition_en: "Elected member of parliament", definition_ru: "Избранный член парламента", example_fi: "Kansanedustajat valitaan neljäksi vuodeksi.", example_ru: "Депутаты парламента избираются на четыре года." },
  { id: "v-yht-4", module: "yhteiskunta", fi: "äänioikeus", en: "right to vote", ru: "избирательное право", definition_fi: "Oikeus äänestää vaaleissa", definition_en: "Right to vote in elections", definition_ru: "Право голосовать на выборах", example_fi: "Äänioikeus eduskuntavaaleissa on Suomen kansalaisilla.", example_ru: "Право голоса на парламентских выборах имеют граждане Финляндии." },
  { id: "v-yht-5", module: "yhteiskunta", fi: "kunta", en: "municipality", ru: "муниципалитет (община)", definition_fi: "Paikallinen hallintoalue, vastaa lähipalveluista", definition_en: "Local administrative area, responsible for local services", definition_ru: "Местная административная единица, отвечающая за местные услуги", example_fi: "Suomessa on noin 300 kuntaa.", example_ru: "В Финляндии около 300 муниципалитетов." },
  { id: "v-yht-6", module: "yhteiskunta", fi: "demokratia", en: "democracy", ru: "демократия", definition_fi: "Hallintomuoto, jossa valta on kansalla", definition_en: "Form of government where power belongs to the people", definition_ru: "Форма правления, при которой власть принадлежит народу", example_fi: "Suomi on liberaali demokratia.", example_ru: "Финляндия — либеральная демократия." },
  { id: "v-yht-7", module: "yhteiskunta", fi: "hallitus", en: "government", ru: "правительство", definition_fi: "Pääministerin johtama ministereiden ryhmä", definition_en: "Group of ministers led by the prime minister", definition_ru: "Группа министров, возглавляемая премьер-министром", example_fi: "Hallitus valmistelee lakiesityksiä eduskunnalle.", example_ru: "Правительство готовит законопроекты для парламента." },

  // ── Lait ──
  { id: "v-lai-1", module: "lait", fi: "kansalaisuus", en: "citizenship", ru: "гражданство", definition_fi: "Henkilön juridinen side valtioon", definition_en: "Person's legal bond with a state", definition_ru: "Правовая связь человека с государством", example_fi: "Suomen kansalaisuutta voi hakea 5 vuoden asumisen jälkeen.", example_ru: "Гражданство Финляндии можно запросить после 5 лет проживания." },
  { id: "v-lai-2", module: "lait", fi: "tasa-arvolaki", en: "Equality Act", ru: "Закон о равноправии", definition_fi: "Laki, joka kieltää sukupuoleen perustuvan syrjinnän", definition_en: "Law prohibiting gender-based discrimination", definition_ru: "Закон, запрещающий дискриминацию по признаку пола", example_fi: "Tasa-arvolaki koskee työelämää ja koulutusta.", example_ru: "Закон о равноправии распространяется на трудовую деятельность и образование." },
  { id: "v-lai-3", module: "lait", fi: "yhdenvertaisuuslaki", en: "Non-Discrimination Act", ru: "Закон о недискриминации", definition_fi: "Laki, joka kieltää syrjinnän muilla perusteilla", definition_en: "Law prohibiting discrimination on other grounds", definition_ru: "Закон, запрещающий дискриминацию по другим основаниям", example_fi: "Yhdenvertaisuuslaki suojaa esim. etnistä syrjintää vastaan.", example_ru: "Закон о недискриминации защищает, например, от этнической дискриминации." },
  { id: "v-lai-4", module: "lait", fi: "oikeusapu", en: "legal aid", ru: "правовая помощь", definition_fi: "Valtion tarjoama ilmainen tai edullinen oikeudellinen apu", definition_en: "Free or affordable legal help provided by the state", definition_ru: "Бесплатная или недорогая юридическая помощь, предоставляемая государством", example_fi: "Oikeusapua saa oikeusaputoimistosta.", example_ru: "Правовую помощь можно получить в бюро правовой помощи." },
  { id: "v-lai-5", module: "lait", fi: "rikosrekisteri", en: "criminal record", ru: "судимость (реестр судимостей)", definition_fi: "Rekisteri henkilön tuomioista", definition_en: "Register of a person's convictions", definition_ru: "Реестр судимостей человека", example_fi: "Rikosrekisterimerkintä voi vaikuttaa kansalaisuushakemukseen.", example_ru: "Запись в реестре судимостей может повлиять на заявление о гражданстве." },

  // ── Historia ──
  { id: "v-his-1", module: "historia", fi: "suuriruhtinaskunta", en: "grand duchy", ru: "великое княжество", definition_fi: "Suomen asema osana Venäjää 1809–1917", definition_en: "Finland's status as part of Russia 1809–1917", definition_ru: "Статус Финляндии как части России в 1809–1917 годах", example_fi: "Suomi oli autonominen suuriruhtinaskunta.", example_ru: "Финляндия была автономным великим княжеством." },
  { id: "v-his-2", module: "historia", fi: "sisällissota", en: "civil war", ru: "гражданская война", definition_fi: "Vuoden 1918 sota punaisten ja valkoisten välillä", definition_en: "The 1918 war between reds and whites", definition_ru: "Война 1918 года между красными и белыми", example_fi: "Sisällissota käytiin keväällä 1918.", example_ru: "Гражданская война велась весной 1918 года." },
  { id: "v-his-3", module: "historia", fi: "talvisota", en: "Winter War", ru: "Зимняя война", definition_fi: "Sota Neuvostoliittoa vastaan 1939–1940", definition_en: "War against the Soviet Union 1939–1940", definition_ru: "Война против Советского Союза в 1939–1940 годах", example_fi: "Talvisota alkoi 30.11.1939.", example_ru: "Зимняя война началась 30 ноября 1939 года." },
  { id: "v-his-4", module: "historia", fi: "jatkosota", en: "Continuation War", ru: "Война-продолжение", definition_fi: "Sota Neuvostoliittoa vastaan 1941–1944", definition_en: "War against the Soviet Union 1941–1944", definition_ru: "Война против Советского Союза в 1941–1944 годах", example_fi: "Jatkosota päättyi välirauhaan syyskuussa 1944.", example_ru: "Война-продолжение завершилась перемирием в сентябре 1944 года." },
  { id: "v-his-5", module: "historia", fi: "EU-jäsenyys", en: "EU membership", ru: "членство в ЕС", definition_fi: "Suomi liittyi Euroopan unioniin 1995", definition_en: "Finland joined the European Union in 1995", definition_ru: "Финляндия вступила в Европейский союз в 1995 году", example_fi: "Suomesta tuli EU:n jäsen vuonna 1995.", example_ru: "Финляндия стала членом ЕС в 1995 году." },
];

// ============================================================
// Reading Comprehension Passages
// ============================================================

const READING_PASSAGES = [
  {
    id: "read-koto-1",
    module: "kotoutuminen",
    title: { fi: "Kotoutuminen Suomessa", en: "Integration in Finland", ru: "Интеграция в Финляндии" },
    text: {
      fi: "Kotoutuminen tarkoittaa sitä, että ihminen tottuu uuteen kotimaahansa. Hän oppii kieltä, löytää työtä tai opiskelupaikan ja oman paikkansa yhteiskunnassa. Kotoutuminen on kaksisuuntainen prosessi: sekä maahanmuuttaja että vastaanottava yhteiskunta osallistuvat siihen.\n\nSuomessa kotoutumisaika on yleensä kolme vuotta, ja se voidaan erityisistä syistä pidentää viiteen vuoteen. Tänä aikana maahanmuuttaja saa tukea esimerkiksi kielikoulutuksen ja työllistymisen muodossa. Kotoutumissuunnitelma tehdään yhdessä TE-toimiston kanssa.\n\nKotoutumiseen vaikuttavat monet asiat: muuton syy, kielitaito, terveys, perhetilanne ja tulevaisuuden suunnitelmat. Tärkeää on myös yhteiskunnan vastaanottavuus — miten hyvin uudet tulijat otetaan vastaan.",
      en: "Integration means a person gets used to their new homeland. They learn the language, find work or a study place, and their own place in society. Integration is a two-way process: both the immigrant and the receiving society participate.\n\nIn Finland, the integration period is usually three years, and can be extended to five years for special reasons. During this time, the immigrant receives support such as language training and employment services. The integration plan is made together with the TE office.\n\nMany things affect integration: the reason for moving, language skills, health, family situation, and future plans. The receptiveness of society is also important — how well newcomers are received.",
      ru: "Интеграция означает, что человек привыкает к своей новой родине. Он изучает язык, находит работу или место учёбы и своё место в обществе. Интеграция — это двусторонний процесс: в нём участвуют и иммигрант, и принимающее общество.\n\nВ Финляндии период интеграции обычно составляет три года и по особым причинам может быть продлён до пяти лет. В течение этого времени иммигрант получает поддержку, например, в виде языковых курсов и помощи в трудоустройстве. План интеграции составляется совместно с бюро по трудоустройству (TE-toimisto).\n\nНа интеграцию влияют многие факторы: причина переезда, знание языка, состояние здоровья, семейная ситуация и планы на будущее. Важна также открытость общества — насколько хорошо принимают новых жителей."
    },
    questions: [
      {
        question: { fi: "Kuinka kauan kotoutumisaika yleensä kestää Suomessa?", en: "How long does the integration period usually last in Finland?", ru: "Сколько обычно длится период интеграции в Финляндии?" },
        choices: [
          { fi: "1 vuosi", en: "1 year", ru: "1 год" },
          { fi: "3 vuotta", en: "3 years", ru: "3 года" },
          { fi: "5 vuotta", en: "5 years", ru: "5 лет" },
          { fi: "10 vuotta", en: "10 years", ru: "10 лет" }
        ],
        correct: 1
      },
      {
        question: { fi: "Kenen kanssa kotoutumissuunnitelma tehdään?", en: "With whom is the integration plan made?", ru: "С кем составляется план интеграции?" },
        choices: [
          { fi: "Poliisin kanssa", en: "With the police", ru: "С полицией" },
          { fi: "Kelan kanssa", en: "With Kela", ru: "С Кела" },
          { fi: "TE-toimiston kanssa", en: "With the TE office", ru: "С бюро по трудоустройству" },
          { fi: "Naapureiden kanssa", en: "With neighbors", ru: "С соседями" }
        ],
        correct: 2
      },
      {
        question: { fi: "Mitä kotoutumisen kaksisuuntaisuus tarkoittaa?", en: "What does the two-way nature of integration mean?", ru: "Что означает двусторонний характер интеграции?" },
        choices: [
          { fi: "Maahanmuuttaja muuttaa edestakaisin", en: "The immigrant moves back and forth", ru: "Иммигрант переезжает туда и обратно" },
          { fi: "Sekä maahanmuuttaja että yhteiskunta osallistuvat kotoutumiseen", en: "Both the immigrant and society participate in integration", ru: "И иммигрант, и общество участвуют в интеграции" },
          { fi: "Kaksi kieltä on opittava", en: "Two languages must be learned", ru: "Нужно выучить два языка" },
          { fi: "Kaksi suunnitelmaa tehdään", en: "Two plans are made", ru: "Составляются два плана" }
        ],
        correct: 1
      }
    ]
  },
  {
    id: "read-yhteiskunta-1",
    module: "yhteiskunta",
    title: { fi: "Suomen hallintojärjestelmä", en: "Finland's system of government", ru: "Система государственного управления Финляндии" },
    text: {
      fi: "Suomi on tasavalta, jonka valtionpäämies on presidentti. Presidentti valitaan suoralla kansanvaalilla kuudeksi vuodeksi kerrallaan, ja sama henkilö voi toimia presidenttinä enintään kaksi kautta peräkkäin. Presidentti johtaa ulkopolitiikkaa yhdessä hallituksen kanssa.\n\nEduskunta on Suomen ylin lainsäädäntöelin. Siihen kuuluu 200 kansanedustajaa, jotka valitaan vaaleilla neljäksi vuodeksi. Eduskunta säätää lait, hyväksyy valtion talousarvion ja valvoo hallituksen toimintaa.\n\nHallitus käyttää toimeenpanovaltaa. Pääministeri johtaa hallitusta, ja ministerit vastaavat kukin omasta hallinnonalastaan. Hallitus valmistelee lakiesityksiä ja toteuttaa eduskunnan päätöksiä.\n\nPaikallishallinto perustuu kuntiin. Jokaisessa kunnassa on kunnanvaltuusto, jonka asukkaat valitsevat kuntavaaleissa. Kunnat vastaavat monista lähipalveluista, kuten kouluista ja kirjastoista.",
      en: "Finland is a republic whose head of state is the president. The president is elected by direct popular vote for six years at a time, and the same person can serve as president for a maximum of two consecutive terms. The president leads foreign policy together with the government.\n\nParliament is Finland's supreme legislative body. It consists of 200 members of parliament elected for four years. Parliament enacts laws, approves the state budget, and oversees the government.\n\nThe government exercises executive power. The prime minister leads the government, and ministers are each responsible for their own administrative area. The government prepares legislative proposals and implements parliament's decisions.\n\nLocal administration is based on municipalities. Each municipality has a municipal council elected by residents in municipal elections. Municipalities are responsible for many local services, such as schools and libraries.",
      ru: "Финляндия — республика, главой государства которой является президент. Президент избирается прямым всенародным голосованием сроком на шесть лет, и один и тот же человек может занимать пост президента не более двух сроков подряд. Президент руководит внешней политикой совместно с правительством.\n\nПарламент (Эдускунта) — высший законодательный орган Финляндии. В него входят 200 депутатов, избираемых на четыре года. Парламент принимает законы, утверждает государственный бюджет и контролирует деятельность правительства.\n\nПравительство осуществляет исполнительную власть. Премьер-министр возглавляет правительство, и каждый министр отвечает за свою область управления. Правительство готовит законопроекты и выполняет решения парламента.\n\nМестное управление основано на муниципалитетах. В каждом муниципалитете есть муниципальный совет, избираемый жителями на муниципальных выборах. Муниципалитеты отвечают за многие местные услуги, такие как школы и библиотеки."
    },
    questions: [
      {
        question: { fi: "Kuinka moneksi vuodeksi presidentti valitaan?", en: "For how many years is the president elected?", ru: "На сколько лет избирается президент?" },
        choices: [
          { fi: "4 vuodeksi", en: "4 years", ru: "На 4 года" },
          { fi: "5 vuodeksi", en: "5 years", ru: "На 5 лет" },
          { fi: "6 vuodeksi", en: "6 years", ru: "На 6 лет" },
          { fi: "8 vuodeksi", en: "8 years", ru: "На 8 лет" }
        ],
        correct: 2
      },
      {
        question: { fi: "Montako kansanedustajaa eduskunnassa on?", en: "How many MPs are in parliament?", ru: "Сколько депутатов в парламенте?" },
        choices: [
          { fi: "100", en: "100", ru: "100" },
          { fi: "150", en: "150", ru: "150" },
          { fi: "200", en: "200", ru: "200" },
          { fi: "300", en: "300", ru: "300" }
        ],
        correct: 2
      },
      {
        question: { fi: "Kuka johtaa hallitusta?", en: "Who leads the government?", ru: "Кто возглавляет правительство?" },
        choices: [
          { fi: "Presidentti", en: "The president", ru: "Президент" },
          { fi: "Pääministeri", en: "The prime minister", ru: "Премьер-министр" },
          { fi: "Eduskunnan puhemies", en: "The Speaker of Parliament", ru: "Председатель парламента" },
          { fi: "Oikeuskansleri", en: "The Chancellor of Justice", ru: "Канцлер юстиции" }
        ],
        correct: 1
      }
    ]
  },
  {
    id: "read-lait-1",
    module: "lait",
    title: { fi: "Oikeudet ja velvollisuudet Suomessa", en: "Rights and obligations in Finland", ru: "Права и обязанности в Финляндии" },
    text: {
      fi: "Suomen perustuslaki takaa kaikille perusoikeudet riippumatta kansalaisuudesta tai taustasta. Näihin kuuluvat yhdenvertaisuus lain edessä, oikeus elämään, sananvapaus, uskonnonvapaus ja oikeus sosiaaliturvaan. Ketään ei saa syrjiä iän, alkuperän, kielen, uskonnon, sukupuolen tai muun syyn perusteella.\n\nOikeuksien rinnalla kulkevat velvollisuudet. Jokaisen Suomessa asuvan on noudatettava Suomen lakeja. Veronmaksuvelvollisuus koskee kaikkia, jotka saavat tuloja Suomessa. Lapsilla on oppivelvollisuus 18 ikävuoteen asti.\n\nSuomen kansalaisuutta voi hakea, kun on asunut Suomessa vähintään viisi vuotta ja täyttää muut edellytykset: riittävä suomen tai ruotsin kielen taito, nuhteettomuus ja selvitetty henkilöllisyys. Kansalaisuus antaa oikeuden äänestää eduskuntavaaleissa ja Suomen passin.",
      en: "The Finnish constitution guarantees fundamental rights to everyone regardless of citizenship or background. These include equality before the law, right to life, freedom of speech, freedom of religion, and right to social security. No one may be discriminated against based on age, origin, language, religion, gender, or other reasons.\n\nAlongside rights come obligations. Everyone living in Finland must obey Finnish laws. The obligation to pay taxes applies to everyone who earns income in Finland. Children have compulsory education until age 18.\n\nFinnish citizenship can be applied for after living in Finland for at least five years and meeting other requirements: sufficient Finnish or Swedish language skills, good conduct, and verified identity. Citizenship gives the right to vote in parliamentary elections and a Finnish passport.",
      ru: "Конституция Финляндии гарантирует основные права каждому, независимо от гражданства или происхождения. К ним относятся равенство перед законом, право на жизнь, свобода слова, свобода вероисповедания и право на социальное обеспечение. Никого нельзя дискриминировать по возрасту, происхождению, языку, религии, полу или другим признакам.\n\nНаряду с правами существуют обязанности. Каждый, кто проживает в Финляндии, обязан соблюдать финские законы. Обязанность платить налоги распространяется на всех, кто получает доход в Финляндии. Дети обязаны учиться до 18 лет.\n\nГражданство Финляндии можно запросить после проживания в стране не менее пяти лет при выполнении других условий: достаточное владение финским или шведским языком, безупречная репутация и подтверждённая личность. Гражданство даёт право голосовать на парламентских выборах и получить финский паспорт."
    },
    questions: [
      {
        question: { fi: "Mitä perusoikeuksia perustuslaki takaa?", en: "What fundamental rights does the constitution guarantee?", ru: "Какие основные права гарантирует Конституция?" },
        choices: [
          { fi: "Vain Suomen kansalaisille oikeuksia", en: "Rights only for Finnish citizens", ru: "Права только для граждан Финляндии" },
          { fi: "Yhdenvertaisuus, sananvapaus, uskonnonvapaus ja oikeus sosiaaliturvaan kaikille", en: "Equality, freedom of speech, freedom of religion and social security for all", ru: "Равенство, свобода слова, свобода вероисповедания и право на социальное обеспечение для всех" },
          { fi: "Vain oikeus työhön", en: "Only the right to work", ru: "Только право на труд" },
          { fi: "Oikeuksia vain yli 18-vuotiaille", en: "Rights only for those over 18", ru: "Права только для лиц старше 18 лет" }
        ],
        correct: 1
      },
      {
        question: { fi: "Montako vuotta pitää asua Suomessa ennen kansalaisuushakemusta?", en: "How many years must one live in Finland before applying for citizenship?", ru: "Сколько лет нужно прожить в Финляндии до подачи заявления на гражданство?" },
        choices: [
          { fi: "2 vuotta", en: "2 years", ru: "2 года" },
          { fi: "3 vuotta", en: "3 years", ru: "3 года" },
          { fi: "5 vuotta", en: "5 years", ru: "5 лет" },
          { fi: "10 vuotta", en: "10 years", ru: "10 лет" }
        ],
        correct: 2
      },
      {
        question: { fi: "Mikä oikeus tulee kansalaisuuden mukana?", en: "What right comes with citizenship?", ru: "Какое право даёт гражданство?" },
        choices: [
          { fi: "Oikeus ilmaiseen asuntoon", en: "Right to free housing", ru: "Право на бесплатное жильё" },
          { fi: "Oikeus äänestää eduskuntavaaleissa", en: "Right to vote in parliamentary elections", ru: "Право голосовать на парламентских выборах" },
          { fi: "Oikeus olla maksamatta veroja", en: "Right not to pay taxes", ru: "Право не платить налоги" },
          { fi: "Oikeus ilmaiseen autoon", en: "Right to a free car", ru: "Право на бесплатный автомобиль" }
        ],
        correct: 1
      }
    ]
  },
  {
    id: "read-tyo-1",
    module: "tyo",
    title: { fi: "Työelämä Suomessa", en: "Working life in Finland", ru: "Трудовая жизнь в Финляндии" },
    text: {
      fi: "Suomalainen työkulttuuri perustuu luottamukseen, täsmällisyyteen ja tasavertaisuuteen. Työpaikoilla hierarkia on usein matala: esimiestä voi puhutella etunimellä, ja kaikkien mielipiteitä kuunnellaan. Kokouksiin tullaan ajoissa, ja sovituista asioista pidetään kiinni.\n\nSuomessa ei ole lakisääteistä minimipalkkaa. Palkat määräytyvät työehtosopimuksen (TES) mukaan, joka sovitaan ammattiliittojen ja työnantajajärjestöjen välillä. Normaali työviikko on 37,5–40 tuntia, ja vuosilomaa kertyy 2–5 viikkoa vuodessa.\n\nTyöturvallisuus on tärkeä osa suomalaista työelämää. Työnantajan on huolehdittava turvallisista työoloista. Työntekijällä on oikeus kieltäytyä vaarallisesta työstä. Jos ongelmia ilmenee, voi ottaa yhteyttä työsuojeluviranomaisiin tai ammattiliittoon.",
      en: "Finnish work culture is based on trust, punctuality, and equality. Workplace hierarchy is often flat: you can address your boss by first name, and everyone's opinions are listened to. People arrive on time for meetings, and agreements are kept.\n\nFinland has no statutory minimum wage. Wages are determined by collective agreements negotiated between trade unions and employer organizations. A normal work week is 37.5–40 hours, and annual leave accumulates 2–5 weeks per year.\n\nOccupational safety is an important part of Finnish working life. The employer must ensure safe working conditions. An employee has the right to refuse dangerous work. If problems arise, you can contact occupational safety authorities or your trade union.",
      ru: "Финская рабочая культура основана на доверии, пунктуальности и равноправии. На рабочих местах иерархия часто плоская: к начальнику можно обращаться по имени, и мнение каждого выслушивается. На совещания приходят вовремя, а договорённости соблюдаются.\n\nВ Финляндии нет установленного законом минимального размера оплаты труда. Зарплаты определяются коллективными договорами, которые заключаются между профсоюзами и организациями работодателей. Нормальная рабочая неделя составляет 37,5–40 часов, а ежегодный отпуск накапливается от 2 до 5 недель в год.\n\nОхрана труда — важная часть финской трудовой жизни. Работодатель обязан обеспечивать безопасные условия труда. Работник имеет право отказаться от опасной работы. При возникновении проблем можно обратиться в органы охраны труда или в профсоюз."
    },
    questions: [
      {
        question: { fi: "Miten palkat määräytyvät Suomessa?", en: "How are wages determined in Finland?", ru: "Как определяются зарплаты в Финляндии?" },
        choices: [
          { fi: "Laki määrää minimipalkan", en: "The law sets the minimum wage", ru: "Закон устанавливает минимальную зарплату" },
          { fi: "Työnantaja päättää yksin", en: "The employer decides alone", ru: "Работодатель решает единолично" },
          { fi: "Työehtosopimuksen mukaan", en: "According to collective agreements", ru: "В соответствии с коллективным договором" },
          { fi: "Työntekijä valitsee palkkansa", en: "The employee chooses their salary", ru: "Работник сам выбирает зарплату" }
        ],
        correct: 2
      },
      {
        question: { fi: "Kuinka pitkä on normaali työviikko?", en: "How long is a normal work week?", ru: "Какова продолжительность нормальной рабочей недели?" },
        choices: [
          { fi: "30 tuntia", en: "30 hours", ru: "30 часов" },
          { fi: "37,5–40 tuntia", en: "37.5–40 hours", ru: "37,5–40 часов" },
          { fi: "45 tuntia", en: "45 hours", ru: "45 часов" },
          { fi: "50 tuntia", en: "50 hours", ru: "50 часов" }
        ],
        correct: 1
      },
      {
        question: { fi: "Mitä työntekijä voi tehdä, jos työ on vaarallista?", en: "What can an employee do if work is dangerous?", ru: "Что может сделать работник, если работа опасна?" },
        choices: [
          { fi: "Ei mitään", en: "Nothing", ru: "Ничего" },
          { fi: "Kieltäytyä vaarallisesta työstä", en: "Refuse dangerous work", ru: "Отказаться от опасной работы" },
          { fi: "Soittaa poliisille", en: "Call the police", ru: "Позвонить в полицию" },
          { fi: "Lopettaa töissä heti", en: "Quit immediately", ru: "Немедленно уволиться" }
        ],
        correct: 1
      }
    ]
  },
  {
    id: "read-historia-1",
    module: "historia",
    title: { fi: "Suomen tie itsenäisyyteen", en: "Finland's path to independence", ru: "Путь Финляндии к независимости" },
    text: {
      fi: "Suomi oli osa Ruotsin valtakuntaa noin 700 vuotta, vuodesta 1150 vuoteen 1809. Tänä aikana Suomeen tuli kristinusko, ruotsalainen oikeusjärjestelmä ja hallintokulttuuri. Ruotsin kieli oli hallinnon ja sivistyksen kieli.\n\nVuonna 1809 Suomi siirtyi Venäjän alaisuuteen ja sai autonomisen suuriruhtinaskunnan aseman. Suomi sai pitää omat lakinsa, uskonnon ja hallinnon. Tämä ajanjakso vahvisti suomalaista kansallistunnetta. Vuonna 1906 Suomi sai ensimmäisenä Euroopassa yleisen ja yhtäläisen äänioikeuden — myös naisille.\n\nVenäjän vallankumous vuonna 1917 avasi tien itsenäisyydelle. Suomen eduskunta hyväksyi itsenäisyysjulistuksen 6. joulukuuta 1917. Itsenäistymisen jälkeen vuonna 1918 käytiin lyhyt mutta verinen sisällissota. Sen jälkeen Suomi rakensi demokraattista yhteiskuntaa.",
      en: "Finland was part of the Kingdom of Sweden for about 700 years, from 1150 to 1809. During this time, Christianity, the Swedish legal system, and administrative culture came to Finland. Swedish was the language of administration and education.\n\nIn 1809, Finland came under Russian rule and gained the status of an autonomous grand duchy. Finland was allowed to keep its own laws, religion, and administration. This period strengthened Finnish national consciousness. In 1906, Finland became the first in Europe to grant universal and equal suffrage — including for women.\n\nThe Russian Revolution in 1917 opened the path to independence. The Finnish parliament approved the declaration of independence on December 6, 1917. After independence, a short but bloody civil war was fought in 1918. After that, Finland built a democratic society.",
      ru: "Финляндия входила в состав Шведского королевства около 700 лет — с 1150 по 1809 год. За это время в Финляндию пришли христианство, шведская правовая система и административная культура. Шведский язык был языком управления и образования.\n\nВ 1809 году Финляндия перешла под власть России и получила статус автономного великого княжества. Финляндия сохранила собственные законы, религию и систему управления. Этот период укрепил финское национальное самосознание. В 1906 году Финляндия первой в Европе ввела всеобщее и равное избирательное право — в том числе для женщин.\n\nРусская революция 1917 года открыла путь к независимости. Финский парламент утвердил декларацию независимости 6 декабря 1917 года. После обретения независимости в 1918 году произошла короткая, но кровопролитная гражданская война. После неё Финляндия строила демократическое общество."
    },
    questions: [
      {
        question: { fi: "Kuinka kauan Suomi oli osa Ruotsia?", en: "How long was Finland part of Sweden?", ru: "Как долго Финляндия была частью Швеции?" },
        choices: [
          { fi: "Noin 200 vuotta", en: "About 200 years", ru: "Около 200 лет" },
          { fi: "Noin 500 vuotta", en: "About 500 years", ru: "Около 500 лет" },
          { fi: "Noin 700 vuotta", en: "About 700 years", ru: "Около 700 лет" },
          { fi: "Noin 1000 vuotta", en: "About 1000 years", ru: "Около 1000 лет" }
        ],
        correct: 2
      },
      {
        question: { fi: "Milloin naiset saivat äänioikeuden Suomessa?", en: "When did women get the right to vote in Finland?", ru: "Когда женщины получили право голоса в Финляндии?" },
        choices: [
          { fi: "1809", en: "1809", ru: "1809" },
          { fi: "1906", en: "1906", ru: "1906" },
          { fi: "1917", en: "1917", ru: "1917" },
          { fi: "1945", en: "1945", ru: "1945" }
        ],
        correct: 1
      },
      {
        question: { fi: "Mikä mahdollisti Suomen itsenäistymisen 1917?", en: "What made Finland's independence possible in 1917?", ru: "Что сделало возможной независимость Финляндии в 1917 году?" },
        choices: [
          { fi: "Ruotsin sota", en: "Sweden's war", ru: "Война Швеции" },
          { fi: "Venäjän vallankumous", en: "The Russian Revolution", ru: "Русская революция" },
          { fi: "EU:n perustaminen", en: "The founding of the EU", ru: "Основание ЕС" },
          { fi: "NATO-jäsenyys", en: "NATO membership", ru: "Членство в НАТО" }
        ],
        correct: 1
      }
    ]
  }
];
