// ============================================================
// Suomi Oppi — Theory Tips for each lesson
// Shown before exercises begin. Key knowledge for citizenship test.
// ============================================================

const LESSON_TIPS = {
  // ── Kotoutuminen ──
  "koto-1": {
    title: { fi: "Mitä kotoutuminen tarkoittaa?", en: "What does integration mean?", ru: "Что означает интеграция?" },
    sections: [
      {
        heading: { fi: "Kotoutuminen on kaksisuuntainen prosessi", en: "Integration is a two-way process", ru: "Интеграция — это двусторонний процесс" },
        content: {
          fi: "Kotoutuminen tarkoittaa sitä, että ihminen tottuu uuteen kotimaahansa. Hän oppii kieltä, löytää työtä tai opiskelupaikan ja oman paikkansa yhteiskunnassa. Kotoutuminen on kaksisuuntainen prosessi — sekä maahanmuuttaja että vastaanottava yhteiskunta osallistuvat siihen.",
          en: "Integration means getting used to a new homeland. A person learns the language, finds work or a study place, and their own place in society. Integration is a two-way process — both the immigrant and the receiving society participate.",
          ru: "Интеграция означает привыкание к новой родине. Человек изучает язык, находит работу или место учёбы и своё место в обществе. Интеграция — это двусторонний процесс: в нём участвуют как иммигрант, так и принимающее общество."
        }
      },
      {
        heading: { fi: "Kotoutumissuunnitelma", en: "Integration plan", ru: "План интеграции" },
        content: {
          fi: "Kotoutumissuunnitelma tehdään yhdessä TE-toimiston tai kunnan kanssa. Se sisältää kielikoulutusta, työllistymistä tukevia toimenpiteitä ja muuta tukea. Kotoutumisaika on yleensä 3 vuotta, mutta se voidaan pidentää 5 vuoteen.",
          en: "The integration plan is made together with the TE office or municipality. It includes language training, employment support measures, and other support. The integration period is usually 3 years but can be extended to 5 years.",
          ru: "План интеграции составляется совместно с бюро трудоустройства (TE-toimisto) или муниципалитетом. Он включает языковое обучение, меры по содействию трудоустройству и другую поддержку. Период интеграции обычно составляет 3 года, но может быть продлён до 5 лет."
        }
      },
      {
        heading: { fi: "Tärkeät käsitteet", en: "Key concepts", ru: "Важные понятия" },
        content: {
          fi: "• Kotoutuminen = prosessi, jossa sopeutuu uuteen maahan\n• Kotoutumissuunnitelma = henkilökohtainen suunnitelma TE-toimistolta\n• Kaksisuuntaisuus = molemmat osapuolet osallistuvat\n• Kotoutumisaika = yleensä 3 vuotta",
          en: "• Kotoutuminen = process of adapting to a new country\n• Kotoutumissuunnitelma = personal plan from the TE office\n• Kaksisuuntaisuus = both parties participate\n• Kotoutumisaika = usually 3 years",
          ru: "• Kotoutuminen = процесс адаптации к новой стране\n• Kotoutumissuunnitelma = личный план от бюро трудоустройства\n• Kaksisuuntaisuus = обе стороны участвуют\n• Kotoutumisaika = обычно 3 года"
        }
      }
    ]
  },

  "koto-2": {
    title: { fi: "Suomen sijainti ja alueet", en: "Finland's location and regions", ru: "Расположение и регионы Финляндии" },
    sections: [
      {
        heading: { fi: "Suomen maantiede", en: "Finland's geography", ru: "География Финляндии" },
        content: {
          fi: "Suomi sijaitsee Pohjois-Euroopassa ja kuuluu Pohjoismaihin (Ruotsi, Norja, Tanska, Islanti). Naapurimaat ovat Ruotsi, Norja, Venäjä ja Viro. Suomen pinta-alasta 44 % on metsää, 10 % vesistöjä. Suomessa on noin 5,5 miljoonaa asukasta.",
          en: "Finland is in Northern Europe and belongs to the Nordic countries (Sweden, Norway, Denmark, Iceland). Neighbors are Sweden, Norway, Russia, and Estonia. 44% of Finland is forest, 10% is water. Finland has about 5.5 million inhabitants.",
          ru: "Финляндия расположена в Северной Европе и входит в число Северных стран (Швеция, Норвегия, Дания, Исландия). Соседние страны — Швеция, Норвегия, Россия и Эстония. 44 % территории Финляндии занимают леса, 10 % — водоёмы. Население Финляндии — около 5,5 миллиона человек."
        }
      },
      {
        heading: { fi: "Alueet", en: "Regions", ru: "Регионы" },
        content: {
          fi: "• Etelä-Suomi: tiheimmin asuttu, Helsinki, Espoo, Vantaa, Turku\n• Järvi-Suomi: Tampere, Jyväskylä, Kuopio — paljon järviä\n• Pohjanmaa: Oulu, Vaasa — maataloutta ja teknologiaa\n• Lappi: Rovaniemi — matkailua, saamelaisten kotiseutualue\n• Ahvenanmaa: itsehallinto, ruotsinkielinen",
          en: "• Southern Finland: most densely populated, Helsinki, Espoo, Vantaa, Turku\n• Lake Finland: Tampere, Jyväskylä, Kuopio — many lakes\n• Ostrobothnia: Oulu, Vaasa — agriculture and technology\n• Lapland: Rovaniemi — tourism, Sámi homeland\n• Åland: autonomous, Swedish-speaking",
          ru: "• Южная Финляндия: самый густонаселённый регион — Хельсинки, Эспоо, Вантаа, Турку\n• Озёрная Финляндия: Тампере, Ювяскюля, Куопио — множество озёр\n• Похьянмаа: Оулу, Вааса — сельское хозяйство и технологии\n• Лапландия: Рованиеми — туризм, родина саамов\n• Аландские острова: автономия, шведскоязычный регион"
        }
      },
      {
        heading: { fi: "Kielet", en: "Languages", ru: "Языки" },
        content: {
          fi: "Suomen viralliset kielet ovat suomi ja ruotsi. Noin 5 % puhuu äidinkielenään ruotsia. Saamelaisilla on omat kielensä Lapissa. Suomi ei ole sukua ruotsille — se kuuluu suomalais-ugrilaiseen kieliperheeseen.",
          en: "Finland's official languages are Finnish and Swedish. About 5% speak Swedish as their mother tongue. The Sámi have their own languages in Lapland. Finnish is not related to Swedish — it belongs to the Finno-Ugric language family.",
          ru: "Официальные языки Финляндии — финский и шведский. Около 5 % населения говорят на шведском как на родном языке. У саамов есть свои языки в Лапландии. Финский язык не родственен шведскому — он относится к финно-угорской языковой семье."
        }
      }
    ]
  },

  "koto-3": {
    title: { fi: "Sää ja vuodenajat", en: "Weather and seasons", ru: "Погода и времена года" },
    sections: [
      {
        heading: { fi: "Neljä vuodenaikaa", en: "Four seasons", ru: "Четыре времени года" },
        content: {
          fi: "• Kevät (maalis–toukokuu): lumi sulaa, päivät pitenevät\n• Kesä (kesä–elokuu): lämmin, yötön yö pohjoisessa\n• Syksy (syys–marraskuu): lehdet putoavat, pimeää\n• Talvi (joulu–helmikuu): kylmä, lunta, kaamos pohjoisessa",
          en: "• Spring (March–May): snow melts, days get longer\n• Summer (June–August): warm, midnight sun in the north\n• Autumn (September–November): leaves fall, dark\n• Winter (December–February): cold, snow, polar night in the north",
          ru: "• Весна (март–май): снег тает, дни удлиняются\n• Лето (июнь–август): тепло, белые ночи на севере\n• Осень (сентябрь–ноябрь): листья опадают, темно\n• Зима (декабрь–февраль): холодно, снег, полярная ночь на севере"
        }
      },
      {
        heading: { fi: "Tärkeää tietää", en: "Important to know", ru: "Важно знать" },
        content: {
          fi: "Lämpötila voi vaihdella +30 °C (kesällä) ja -30 °C (talvella) välillä. Talvella pukeudu kerroksittain! Kaamos = aika, jolloin aurinko ei nouse (Lapissa useita viikkoja). Yötön yö = kesällä aurinko ei laske pohjoisessa.",
          en: "Temperature can vary between +30°C (summer) and -30°C (winter). Dress in layers in winter! Kaamos = period when the sun doesn't rise (several weeks in Lapland). Midnight sun = sun doesn't set in the north in summer.",
          ru: "Температура может колебаться от +30 °C (летом) до -30 °C (зимой). Зимой одевайтесь слоями! Kaamos = период, когда солнце не восходит (в Лапландии несколько недель). Белые ночи = летом на севере солнце не заходит."
        }
      }
    ]
  },

  // ── Ihmiset ja kulttuuri ──
  "ihku-1": {
    title: { fi: "Väestö ja uskonnot", en: "Population and religions", ru: "Население и религии" },
    sections: [
      {
        heading: { fi: "Suomen väestö", en: "Finland's population", ru: "Население Финляндии" },
        content: {
          fi: "Suomessa on noin 5,5 miljoonaa asukasta. Väestö keskittyy Etelä-Suomeen. Suomi on monikulttuurinen maa: ulkomaalaistaustasia on noin 8 % väestöstä. Saamelaiset ovat EU:n ainoa alkuperäiskansa (noin 10 000 henkeä Lapissa).",
          en: "Finland has about 5.5 million inhabitants, concentrated in Southern Finland. Finland is multicultural: about 8% have a foreign background. The Sámi are the EU's only indigenous people (about 10,000 in Lapland).",
          ru: "В Финляндии около 5,5 миллиона жителей. Население сосредоточено в Южной Финляндии. Финляндия — мультикультурная страна: около 8 % населения имеют иностранное происхождение. Саамы — единственный коренной народ ЕС (около 10 000 человек в Лапландии)."
        }
      },
      {
        heading: { fi: "Uskonnot", en: "Religions", ru: "Религии" },
        content: {
          fi: "• Evankelis-luterilainen kirkko: noin 66 % väestöstä\n• Ortodoksinen kirkko: noin 1 %\n• Ei uskonnollista yhteisöä: noin 30 %\n• Muut uskonnot: islam, katolilaisuus ym.\n\nUskonnonvapaus on perusoikeus. Jokainen saa harjoittaa uskontoaan tai olla harjoittamatta.",
          en: "• Evangelical Lutheran Church: about 66%\n• Orthodox Church: about 1%\n• No religious community: about 30%\n• Other religions: Islam, Catholicism, etc.\n\nFreedom of religion is a fundamental right. Everyone may practice or not practice a religion.",
          ru: "• Евангелическо-лютеранская церковь: около 66 % населения\n• Православная церковь: около 1 %\n• Без религиозной принадлежности: около 30 %\n• Другие религии: ислам, католицизм и др.\n\nСвобода вероисповедания — основное право. Каждый может исповедовать свою религию или не исповедовать никакой."
        }
      }
    ]
  },

  "ihku-2": {
    title: { fi: "Arvot ja tapakulttuuri", en: "Values and customs", ru: "Ценности и культура поведения" },
    sections: [
      {
        heading: { fi: "Suomalaiset arvot", en: "Finnish values", ru: "Финские ценности" },
        content: {
          fi: "Suomen perustuslain arvot: vapaus, ihmisoikeudet, tasa-arvo ja yhdenvertaisuus. Suomalaiset arvostavat myös:\n• Täsmällisyyttä ja rehellisyyttä\n• Työtä ja ahkeruutta\n• Koulutusta ja sivistystä\n• Luontoa ja ympäristöä\n• Maanpuolustustahtoa\n\nSuomessa on korruptiota toiseksi vähiten maailmassa.",
          en: "Constitutional values: freedom, human rights, equality and non-discrimination. Finns also value:\n• Punctuality and honesty\n• Work and diligence\n• Education and culture\n• Nature and environment\n• National defense will\n\nFinland has the second-lowest corruption in the world.",
          ru: "Ценности Конституции Финляндии: свобода, права человека, равенство и равноправие. Финны также ценят:\n• Пунктуальность и честность\n• Труд и трудолюбие\n• Образование и культуру\n• Природу и окружающую среду\n• Готовность к обороне страны\n\nВ Финляндии второй самый низкий уровень коррупции в мире."
        }
      },
      {
        heading: { fi: "Tapakulttuuri", en: "Customs", ru: "Культура поведения" },
        content: {
          fi: "• Kengät riisutaan kotiin tultaessa\n• Sinuttelu on yleistä (mutta teitittely kohteliasta vanhempia kohtaan)\n• Sauna on tärkeä osa kulttuuria\n• Henkilökohtaista tilaa kunnioitetaan\n• Jokamiehen oikeudet: saa liikkua luonnossa, poimia marjoja ja sieniä",
          en: "• Shoes are removed when entering a home\n• Informal 'you' (sinä) is common (but formal 'te' is polite to elders)\n• Sauna is an important part of culture\n• Personal space is respected\n• Everyman's rights: right to roam, pick berries and mushrooms",
          ru: "• При входе в дом обувь снимают\n• Обращение на «ты» (sinä) распространено (но обращение на «вы» (te) вежливо по отношению к старшим)\n• Сауна — важная часть культуры\n• Личное пространство уважается\n• Право каждого (Jokamiehen oikeudet): можно свободно гулять на природе, собирать ягоды и грибы"
        }
      }
    ]
  },

  "ihku-3": {
    title: { fi: "Juhlat ja perinteet", en: "Celebrations and traditions", ru: "Праздники и традиции" },
    sections: [
      {
        heading: { fi: "Suomen tärkeimmät juhlapäivät", en: "Finland's most important holidays", ru: "Самые важные праздники Финляндии" },
        content: {
          fi: "• Uudenvuodenpäivä: 1.1.\n• Loppiainen: 6.1.\n• Pääsiäinen: keväällä (muuttuva)\n• Vappu: 1.5. — opiskelijoiden ja työväen juhla\n• Helatorstai: 40 päivää pääsiäisen jälkeen\n• Juhannus: kesäkuun loppu — mökkeilyä ja kokkoja\n• Pyhäinpäivä: marraskuun alku\n• Itsenäisyyspäivä: 6.12. — Suomen itsenäistyminen 1917\n• Joulu: 24.–26.12.",
          en: "• New Year's Day: Jan 1\n• Epiphany: Jan 6\n• Easter: spring (variable)\n• May Day: May 1 — students' and workers' celebration\n• Ascension Day: 40 days after Easter\n• Midsummer: end of June — cottages and bonfires\n• All Saints' Day: early November\n• Independence Day: Dec 6 — independence from 1917\n• Christmas: Dec 24–26",
          ru: "• Новый год: 1 января\n• Крещение: 6 января\n• Пасха: весной (дата меняется)\n• Первое мая (Vappu): 1 мая — праздник студентов и трудящихся\n• Вознесение: 40 дней после Пасхи\n• Иванов день (Juhannus): конец июня — отдых на дачах и костры\n• День всех святых: начало ноября\n• День независимости: 6 декабря — независимость Финляндии с 1917 года\n• Рождество: 24–26 декабря"
        }
      }
    ]
  },

  // ── Arki ──
  "arki-1": {
    title: { fi: "Asuminen Suomessa", en: "Housing in Finland", ru: "Проживание в Финляндии" },
    sections: [
      {
        heading: { fi: "Asumismuodot", en: "Housing types", ru: "Виды жилья" },
        content: {
          fi: "• Omistusasunto: noin 65 % suomalaisista\n• Vuokra-asunto: yleinen kaupungeissa\n• Asumisoikeusasunto: välimuoto\n\nVuokrasopimus kannattaa aina tehdä kirjallisesti. Vuokravakuus on yleensä 1–3 kuukauden vuokra.",
          en: "• Owner-occupied: about 65% of Finns\n• Rental: common in cities\n• Right-of-occupancy: hybrid form\n\nRental agreements should always be in writing. Deposit is usually 1–3 months' rent.",
          ru: "• Собственное жильё: около 65 % финнов\n• Арендное жильё: распространено в городах\n• Жильё по праву проживания: промежуточная форма\n\nДоговор аренды всегда следует заключать в письменной форме. Залог обычно составляет 1–3 месячных арендных платы."
        }
      },
      {
        heading: { fi: "Taloyhtiö ja säännöt", en: "Housing company and rules", ru: "Жилищное товарищество и правила" },
        content: {
          fi: "Taloyhtiö vastaa rakennuksen ylläpidosta. Asukkaat maksavat yhtiövastiketta. Järjestyssäännöt:\n• Hiljaisuusaika: yleensä klo 22–07\n• Jätteiden lajittelu on pakollista\n• Yhteisten tilojen siisteys\n• Tupakointi usein kielletty sisätiloissa",
          en: "Housing company handles building maintenance. Residents pay a maintenance charge. House rules:\n• Quiet hours: usually 10 PM–7 AM\n• Waste sorting is mandatory\n• Cleanliness of shared spaces\n• Smoking often prohibited indoors",
          ru: "Жилищное товарищество отвечает за содержание здания. Жильцы платят эксплуатационные взносы. Правила проживания:\n• Тихие часы: обычно с 22:00 до 07:00\n• Сортировка мусора обязательна\n• Чистота в общих помещениях\n• Курение часто запрещено в помещениях"
        }
      }
    ]
  },

  "arki-2": {
    title: { fi: "Viranomaisasiointi ja talous", en: "Authorities and finances", ru: "Взаимодействие с властями и финансы" },
    sections: [
      {
        heading: { fi: "Tärkeimmät viranomaiset", en: "Key authorities", ru: "Основные государственные органы" },
        content: {
          fi: "• DVV (Digi- ja väestötietovirasto): väestörekisteri, henkilötunnus, muuttoilmoitus\n• Kela: sosiaaliturvaetuudet (asumistuki, lapsilisä, työttömyyskorvaus)\n• Verohallinto: verotus, verokortti\n• TE-toimisto: työnhaku, kotoutuminen\n• Poliisi: turvallisuus, henkilöllisyystodistus, passi\n• Maahanmuuttovirasto (Migri): oleskeluluvat, kansalaisuus",
          en: "• DVV: population register, personal ID code, change of address\n• Kela: social benefits (housing allowance, child benefit, unemployment)\n• Tax Administration: taxation, tax card\n• TE office: job search, integration\n• Police: safety, ID card, passport\n• Immigration Service (Migri): residence permits, citizenship",
          ru: "• DVV (Агентство цифровых технологий и данных о населении): реестр населения, личный идентификационный номер, уведомление о переезде\n• Kela: пособия по социальному обеспечению (жилищное пособие, детское пособие, пособие по безработице)\n• Налоговое управление: налогообложение, налоговая карточка\n• Бюро трудоустройства (TE-toimisto): поиск работы, интеграция\n• Полиция: безопасность, удостоверение личности, паспорт\n• Миграционная служба (Migri): разрешения на проживание, гражданство"
        }
      },
      {
        heading: { fi: "Talous ja verotus", en: "Finances and taxation", ru: "Финансы и налогообложение" },
        content: {
          fi: "• Henkilötunnus tarvitaan kaikkeen viranomaisasiointiin\n• Pankkitili avataan henkilötunnuksella\n• Verokortti näyttää veroprosenttisi\n• Veroja maksetaan palkasta automaattisesti (ennakonpidätys)\n• Veroilmoitus tehdään kerran vuodessa keväällä",
          en: "• Personal ID code needed for all dealings with authorities\n• Bank account opened with personal ID code\n• Tax card shows your tax percentage\n• Taxes are automatically deducted from salary\n• Tax return filed once a year in spring",
          ru: "• Личный идентификационный номер необходим для всех обращений в государственные органы\n• Банковский счёт открывается по личному идентификационному номеру\n• Налоговая карточка показывает вашу налоговую ставку\n• Налоги автоматически удерживаются из зарплаты (предварительное удержание)\n• Налоговая декларация подаётся раз в год весной"
        }
      }
    ]
  },

  // ── Työ ──
  "tyo-1": {
    title: { fi: "Työnhaku Suomessa", en: "Job search in Finland", ru: "Поиск работы в Финляндии" },
    sections: [
      {
        heading: { fi: "Miten hakea töitä?", en: "How to search for jobs?", ru: "Как искать работу?" },
        content: {
          fi: "• Verkossa: mol.fi (TE-palvelut), duunitori.fi, oikotie.fi, linkedin.com\n• Suoraan yrityksiltä: avoimet hakemukset\n• Verkostoituminen: tuttavat, tapahtumat\n• Rekrytointifirmat\n\nTärkeää: CV (ansioluettelo) + työhakemus (saatekirje). Suomessa arvostetaan lyhyttä, selkeää CV:tä.",
          en: "• Online: mol.fi (TE services), duunitori.fi, oikotie.fi, linkedin.com\n• Direct from companies: open applications\n• Networking: acquaintances, events\n• Recruitment firms\n\nImportant: CV + cover letter. In Finland, a short, clear CV is valued.",
          ru: "• В интернете: mol.fi (служба занятости), duunitori.fi, oikotie.fi, linkedin.com\n• Напрямую в компании: открытые заявки\n• Налаживание связей: знакомые, мероприятия\n• Кадровые агентства\n\nВажно: резюме (CV) + сопроводительное письмо. В Финляндии ценится краткое и чёткое резюме."
        }
      },
      {
        heading: { fi: "Koulutuksen tunnustaminen", en: "Recognition of qualifications", ru: "Признание квалификации" },
        content: {
          fi: "Ulkomailla suoritettu tutkinto voidaan tunnustaa Suomessa. Opetushallitus päättää akateemisesta tunnustamisesta. Joillakin aloilla (lääkäri, opettaja, lakimies) vaaditaan lisäopintoja tai pätevyyskoe.",
          en: "Qualifications from abroad can be recognized in Finland. The National Agency for Education decides on academic recognition. Some fields (doctor, teacher, lawyer) require additional studies or qualification exams.",
          ru: "Диплом, полученный за рубежом, может быть признан в Финляндии. Национальное управление образования (Opetushallitus) принимает решения об академическом признании. В некоторых областях (врач, учитель, юрист) требуется дополнительное обучение или квалификационный экзамен."
        }
      }
    ]
  },

  "tyo-2": {
    title: { fi: "Työkulttuuri ja oikeudet", en: "Work culture and rights", ru: "Рабочая культура и права" },
    sections: [
      {
        heading: { fi: "Suomalainen työkulttuuri", en: "Finnish work culture", ru: "Финская рабочая культура" },
        content: {
          fi: "• Matala hierarkia: esimiestä voi puhutella etunimellä\n• Täsmällisyys: kokouksiin tullaan ajoissa\n• Tasa-arvo: kaikkien mielipiteitä kuunnellaan\n• Luottamus: sovituista asioista pidetään kiinni\n• Työviikko: 37,5–40 tuntia\n• Vuosiloma: 2–5 viikkoa",
          en: "• Flat hierarchy: address boss by first name\n• Punctuality: arrive on time for meetings\n• Equality: everyone's opinions are heard\n• Trust: agreements are kept\n• Work week: 37.5–40 hours\n• Annual leave: 2–5 weeks",
          ru: "• Плоская иерархия: к начальнику можно обращаться по имени\n• Пунктуальность: на совещания приходят вовремя\n• Равенство: мнения всех выслушиваются\n• Доверие: договорённости соблюдаются\n• Рабочая неделя: 37,5–40 часов\n• Ежегодный отпуск: 2–5 недель"
        }
      },
      {
        heading: { fi: "Oikeudet ja TES", en: "Rights and collective agreements", ru: "Права и коллективные договоры" },
        content: {
          fi: "• Ei lakisääteistä minimipalkkaa — palkat TES:n mukaan\n• Koeaika: enintään 6 kuukautta\n• Tasa-arvolaki kieltää palkkasyrjinnän\n• Ammattiliitto puolustaa oikeuksia (noin 60 % kuuluu)\n• Työnantaja pidättää verot automaattisesti",
          en: "• No statutory minimum wage — wages set by collective agreement\n• Trial period: max 6 months\n• Equality Act prohibits pay discrimination\n• Trade union defends rights (about 60% belong)\n• Employer withholds taxes automatically",
          ru: "• Законодательно установленной минимальной зарплаты нет — зарплаты определяются коллективным договором (TES)\n• Испытательный срок: не более 6 месяцев\n• Закон о равенстве запрещает дискриминацию в оплате труда\n• Профсоюз защищает права работников (около 60 % состоят в профсоюзах)\n• Работодатель автоматически удерживает налоги"
        }
      }
    ]
  },

  // ── Koulutus ──
  "kou-1": {
    title: { fi: "Suomen koulutusjärjestelmä", en: "Finnish education system", ru: "Система образования Финляндии" },
    sections: [
      {
        heading: { fi: "Koulutusasteet", en: "Education levels", ru: "Уровни образования" },
        content: {
          fi: "1. Esiopetus: 6-vuotiaille, 1 vuosi (pakollinen)\n2. Peruskoulu: 7–16-vuotiaille, 9 vuotta (maksuton)\n3. Toinen aste: lukio TAI ammattikoulu\n4. Korkeakoulu: yliopisto TAI ammattikorkeakoulu\n\nOppivelvollisuus 18 ikävuoteen asti (vuodesta 2021). Toisen asteen koulutus on maksuton.",
          en: "1. Pre-primary: age 6, 1 year (mandatory)\n2. Basic education: ages 7–16, 9 years (free)\n3. Upper secondary: general (lukio) OR vocational\n4. Higher education: university OR polytechnic\n\nCompulsory education until age 18 (since 2021). Upper secondary is free.",
          ru: "1. Дошкольное обучение: для детей 6 лет, 1 год (обязательное)\n2. Основная школа: для детей 7–16 лет, 9 лет (бесплатная)\n3. Среднее образование второй ступени: гимназия (lukio) ИЛИ профессиональное училище\n4. Высшее образование: университет ИЛИ университет прикладных наук\n\nОбязательное образование до 18 лет (с 2021 года). Образование второй ступени — бесплатное."
        }
      },
      {
        heading: { fi: "Aikuiskoulutus", en: "Adult education", ru: "Образование для взрослых" },
        content: {
          fi: "• Kansalaisopistot: edullisia kursseja (kielet, käsityöt, liikunta)\n• Avoin yliopisto: yliopistokursseja ilman tutkinto-oikeutta\n• Ammatillinen aikuiskoulutus: uuden ammatin opiskelu\n• Kotoutumiskoulutus: suomen kieltä ja yhteiskuntatietoa maahanmuuttajille",
          en: "• Adult education centers: affordable courses (languages, crafts, sports)\n• Open university: university courses without degree status\n• Vocational adult education: studying a new profession\n• Integration training: Finnish language and society knowledge for immigrants",
          ru: "• Народные училища (Kansalaisopistot): доступные курсы (языки, ремёсла, спорт)\n• Открытый университет: университетские курсы без получения степени\n• Профессиональное образование для взрослых: обучение новой профессии\n• Интеграционное обучение: финский язык и знание общества для иммигрантов"
        }
      }
    ]
  },

  // ── Perheet ──
  "per-1": {
    title: { fi: "Perhe-elämä Suomessa", en: "Family life in Finland", ru: "Семейная жизнь в Финляндии" },
    sections: [
      {
        heading: { fi: "Perhemuodot", en: "Family types", ru: "Формы семьи" },
        content: {
          fi: "• Avioliitto: juridinen liitto, myös samaa sukupuolta oleville (2017)\n• Avoliitto: asutaan yhdessä ilman avioliittoa\n• Yksinhuoltajaperhe: yleinen\n• Uusperhe: uuden kumppanin lapset\n\nSuomessa kumpikin puoliso on tasa-arvoinen. Molemmat voivat työskennellä ja hoitaa lapsia.",
          en: "• Marriage: legal union, also for same-sex couples (2017)\n• Cohabitation: living together without marriage\n• Single-parent family: common\n• Blended family: partner's children\n\nIn Finland, both spouses are equal. Both can work and care for children.",
          ru: "• Брак: юридический союз, в том числе для однополых пар (с 2017 года)\n• Гражданский брак (avoliitto): совместное проживание без заключения брака\n• Семья с одним родителем: распространена\n• Смешанная семья: дети нового партнёра\n\nВ Финляндии оба супруга равноправны. Оба могут работать и ухаживать за детьми."
        }
      },
      {
        heading: { fi: "Perheen tuet", en: "Family benefits", ru: "Пособия для семей" },
        content: {
          fi: "• Lapsilisä: kaikille perheille, alle 17-vuotiaista lapsista\n• Vanhempainvapaa: molemmille vanhemmille\n• Neuvola: ilmainen raskauden ja lasten seuranta\n• Päivähoito: kunnallinen ja edullinen\n• Lastensuojelu: suojelee lapsen hyvinvointia",
          en: "• Child benefit: for all families, children under 17\n• Parental leave: for both parents\n• Maternity clinic: free pregnancy and child monitoring\n• Daycare: municipal and affordable\n• Child protection: protects child welfare",
          ru: "• Детское пособие (Lapsilisä): для всех семей, на детей до 17 лет\n• Родительский отпуск: для обоих родителей\n• Консультация (Neuvola): бесплатное наблюдение за беременностью и детьми\n• Детский сад: муниципальный и доступный по цене\n• Защита детей: охраняет благополучие ребёнка"
        }
      }
    ]
  },

  // ── Terveys ──
  "ter-1": {
    title: { fi: "Terveyspalvelut Suomessa", en: "Health services in Finland", ru: "Медицинские услуги в Финляндии" },
    sections: [
      {
        heading: { fi: "Terveydenhuollon rakenne", en: "Healthcare structure", ru: "Структура здравоохранения" },
        content: {
          fi: "• Terveyskeskus: perusterveydenhuolto (ensimmäinen kontakti)\n• Sairaala: erikoissairaanhoito (lähete tarvitaan)\n• Neuvola: raskauden ja lasten seuranta (ilmainen)\n• Hammashoitola: hammashoito\n• Apteekki: lääkkeet (resepti sähköinen)\n\nHätänumero: 112 (poliisi, palo, ambulanssi) — toimii koko EU:ssa",
          en: "• Health center: primary care (first contact)\n• Hospital: specialized care (referral needed)\n• Maternity clinic: pregnancy and child monitoring (free)\n• Dental clinic: dental care\n• Pharmacy: medicines (electronic prescription)\n\nEmergency: 112 (police, fire, ambulance) — works across EU",
          ru: "• Поликлиника (Terveyskeskus): первичная медицинская помощь (первый контакт)\n• Больница: специализированная медицинская помощь (нужно направление)\n• Консультация (Neuvola): наблюдение за беременностью и детьми (бесплатно)\n• Стоматологическая клиника: стоматологическая помощь\n• Аптека: лекарства (рецепт электронный)\n\nНомер экстренной помощи: 112 (полиция, пожарная, скорая) — работает по всему ЕС"
        }
      },
      {
        heading: { fi: "Maksut ja oikeudet", en: "Costs and rights", ru: "Оплата и права" },
        content: {
          fi: "Julkinen terveydenhuolto on edullista mutta ei ilmaista. Potilasmaksuille on vuosittainen maksukatto. Hyvinvointialueet järjestävät sosiaali- ja terveyspalvelut (vuodesta 2023). Kaikilla Suomessa asuvilla on oikeus välttämättömään hoitoon.",
          en: "Public healthcare is affordable but not free. There's an annual ceiling for patient fees. Wellbeing services counties organize health services (since 2023). Everyone living in Finland has the right to necessary care.",
          ru: "Государственное здравоохранение доступно по цене, но не бесплатно. Для пациентских выплат установлен годовой потолок. Области благополучия организуют социальные и медицинские услуги (с 2023 года). Все проживающие в Финляндии имеют право на необходимую медицинскую помощь."
        }
      }
    ]
  },

  // ── Yhteiskunta ──
  "yht-1": {
    title: { fi: "Demokratia ja hallinto", en: "Democracy and governance", ru: "Демократия и государственное управление" },
    sections: [
      {
        heading: { fi: "Suomen valtiorakenne", en: "Finland's state structure", ru: "Государственное устройство Финляндии" },
        content: {
          fi: "• Tasavalta — valtionpäämies on presidentti (6 v., max 2 kautta)\n• Eduskunta: 200 kansanedustajaa, valitaan 4 vuodeksi\n• Hallitus: pääministeri + ministerit\n• Kunnat: paikallishallinto, kunnanvaltuusto\n• Hyvinvointialueet: sosiaali- ja terveyspalvelut",
          en: "• Republic — head of state is president (6 yrs, max 2 terms)\n• Parliament: 200 MPs, elected for 4 years\n• Government: prime minister + ministers\n• Municipalities: local government, municipal council\n• Wellbeing counties: social and health services",
          ru: "• Республика — глава государства — президент (6 лет, максимум 2 срока)\n• Парламент (Eduskunta): 200 депутатов, избираются на 4 года\n• Правительство: премьер-министр + министры\n• Муниципалитеты: местное самоуправление, муниципальный совет\n• Области благополучия: социальные и медицинские услуги"
        }
      },
      {
        heading: { fi: "Vaalit", en: "Elections", ru: "Выборы" },
        content: {
          fi: "• Eduskuntavaalit: valitaan kansanedustajat (4 v.) — vain Suomen kansalaiset\n• Presidentinvaali: valitaan presidentti (6 v.) — vain kansalaiset\n• Kuntavaalit: valitaan kunnanvaltuusto — myös ulkomaalaiset voivat äänestää\n• Europarlamenttivaalit: valitaan mepit — EU-kansalaiset\n• Aluevaalit: valitaan hyvinvointialueen valtuusto",
          en: "• Parliamentary: elect MPs (4 yrs) — Finnish citizens only\n• Presidential: elect president (6 yrs) — citizens only\n• Municipal: elect council — foreigners can also vote\n• EU elections: elect MEPs — EU citizens\n• Regional: elect wellbeing county council",
          ru: "• Парламентские выборы: избираются депутаты (4 года) — только граждане Финляндии\n• Президентские выборы: избирается президент (6 лет) — только граждане\n• Муниципальные выборы: избирается муниципальный совет — иностранцы тоже могут голосовать\n• Выборы в Европарламент: избираются евродепутаты — граждане ЕС\n• Региональные выборы: избирается совет области благополучия"
        }
      }
    ]
  },

  // ── Lait ──
  "lai-1": {
    title: { fi: "Oikeudet ja velvollisuudet", en: "Rights and obligations", ru: "Права и обязанности" },
    sections: [
      {
        heading: { fi: "Perusoikeudet", en: "Fundamental rights", ru: "Основные права" },
        content: {
          fi: "Perustuslaki takaa kaikille:\n• Yhdenvertaisuus lain edessä\n• Oikeus elämään ja henkilökohtaiseen vapauteen\n• Sananvapaus ja uskonnonvapaus\n• Kokoontumis- ja yhdistymisvapaus\n• Oikeus koulutukseen\n• Oikeus sosiaaliturvaan\n• Oikeus omaan kieleen ja kulttuuriin",
          en: "Constitution guarantees everyone:\n• Equality before the law\n• Right to life and personal liberty\n• Freedom of speech and religion\n• Freedom of assembly and association\n• Right to education\n• Right to social security\n• Right to own language and culture",
          ru: "Конституция гарантирует каждому:\n• Равенство перед законом\n• Право на жизнь и личную свободу\n• Свободу слова и вероисповедания\n• Свободу собраний и объединений\n• Право на образование\n• Право на социальное обеспечение\n• Право на свой язык и культуру"
        }
      },
      {
        heading: { fi: "Velvollisuudet ja kansalaisuus", en: "Obligations and citizenship", ru: "Обязанности и гражданство" },
        content: {
          fi: "Velvollisuudet:\n• Noudattaa Suomen lakeja\n• Maksaa veroja\n• Oppivelvollisuus (18 v. asti)\n\nKansalaisuuden edellytykset:\n• Asumisaika: yleensä 5 vuotta\n• Kielitaito: suomi tai ruotsi (B1-taso)\n• Nuhteettomuus\n• Selvitetty henkilöllisyys\n• Turvattu toimeentulo",
          en: "Obligations:\n• Obey Finnish laws\n• Pay taxes\n• Compulsory education (until 18)\n\nCitizenship requirements:\n• Residence: usually 5 years\n• Language: Finnish or Swedish (B1 level)\n• Good conduct\n• Verified identity\n• Secured livelihood",
          ru: "Обязанности:\n• Соблюдать законы Финляндии\n• Платить налоги\n• Обязательное образование (до 18 лет)\n\nТребования для получения гражданства:\n• Срок проживания: обычно 5 лет\n• Знание языка: финский или шведский (уровень B1)\n• Безупречная репутация\n• Установленная личность\n• Обеспеченный доход"
        }
      }
    ]
  },

  // ── Historia ──
  "his-1": {
    title: { fi: "Suomen historian pääpiirteet", en: "Key features of Finnish history", ru: "Основные черты истории Финляндии" },
    sections: [
      {
        heading: { fi: "Aikajana", en: "Timeline", ru: "Хронология" },
        content: {
          fi: "• n. 1150–1809: Suomi osa Ruotsin valtakuntaa (noin 700 vuotta)\n• 1809–1917: Venäjän autonominen suuriruhtinaskunta\n• 1906: Yleinen äänioikeus — myös naisille (ensimmäinen Euroopassa)\n• 6.12.1917: Itsenäisyysjulistus\n• 1918: Sisällissota\n• 1939–1940: Talvisota (Neuvostoliitto)\n• 1941–1944: Jatkosota\n• 1995: EU-jäsenyys\n• 2002: Euro käyttöön\n• 2023: NATO-jäsenyys",
          en: "• c. 1150–1809: Finland part of Sweden (about 700 years)\n• 1809–1917: Autonomous Grand Duchy of Russia\n• 1906: Universal suffrage — including women (first in Europe)\n• Dec 6, 1917: Declaration of independence\n• 1918: Civil war\n• 1939–1940: Winter War (Soviet Union)\n• 1941–1944: Continuation War\n• 1995: EU membership\n• 2002: Euro adopted\n• 2023: NATO membership",
          ru: "• ок. 1150–1809: Финляндия в составе Шведского королевства (около 700 лет)\n• 1809–1917: автономное Великое княжество в составе России\n• 1906: всеобщее избирательное право — в том числе для женщин (впервые в Европе)\n• 6 декабря 1917: провозглашение независимости\n• 1918: гражданская война\n• 1939–1940: Зимняя война (Советский Союз)\n• 1941–1944: Война-продолжение\n• 1995: вступление в ЕС\n• 2002: введение евро\n• 2023: вступление в НАТО"
        }
      },
      {
        heading: { fi: "Tärkeää muistaa", en: "Important to remember", ru: "Важно помнить" },
        content: {
          fi: "• Suomi on ollut itsenäinen vain noin 100 vuotta\n• Ruotsalainen hallintokulttuuri ja oikeusjärjestelmä ovat perintöä Ruotsin ajalta\n• Venäjän aikana Suomi sai laajan itsehallinnon\n• Talvisodassa pieni Suomi puolustautui suurta Neuvostoliittoa vastaan\n• Sodanjälkeinen aika: nopea teollistuminen ja hyvinvointivaltion rakentaminen",
          en: "• Finland has been independent for only about 100 years\n• Swedish administrative culture and legal system are legacy from Swedish era\n• During Russian rule, Finland gained broad autonomy\n• In the Winter War, small Finland defended against the large Soviet Union\n• Post-war era: rapid industrialization and building of the welfare state",
          ru: "• Финляндия является независимой всего около 100 лет\n• Шведская административная культура и правовая система — наследие шведского периода\n• В период российского правления Финляндия получила широкую автономию\n• В Зимней войне маленькая Финляндия оборонялась против большого Советского Союза\n• Послевоенное время: быстрая индустриализация и строительство государства всеобщего благосостояния"
        }
      }
    ]
  }
};
