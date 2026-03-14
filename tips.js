// ============================================================
// Suomi Oppi — Theory Tips for each lesson
// Shown before exercises begin. Key knowledge for citizenship test.
// ============================================================

const LESSON_TIPS = {
  // ── Kotoutuminen ──
  "koto-1": {
    title: { fi: "Mitä kotoutuminen tarkoittaa?", en: "What does integration mean?" },
    sections: [
      {
        heading: { fi: "Kotoutuminen on kaksisuuntainen prosessi", en: "Integration is a two-way process" },
        content: {
          fi: "Kotoutuminen tarkoittaa sitä, että ihminen tottuu uuteen kotimaahansa. Hän oppii kieltä, löytää työtä tai opiskelupaikan ja oman paikkansa yhteiskunnassa. Kotoutuminen on kaksisuuntainen prosessi — sekä maahanmuuttaja että vastaanottava yhteiskunta osallistuvat siihen.",
          en: "Integration means getting used to a new homeland. A person learns the language, finds work or a study place, and their own place in society. Integration is a two-way process — both the immigrant and the receiving society participate."
        }
      },
      {
        heading: { fi: "Kotoutumissuunnitelma", en: "Integration plan" },
        content: {
          fi: "Kotoutumissuunnitelma tehdään yhdessä TE-toimiston tai kunnan kanssa. Se sisältää kielikoulutusta, työllistymistä tukevia toimenpiteitä ja muuta tukea. Kotoutumisaika on yleensä 3 vuotta, mutta se voidaan pidentää 5 vuoteen.",
          en: "The integration plan is made together with the TE office or municipality. It includes language training, employment support measures, and other support. The integration period is usually 3 years but can be extended to 5 years."
        }
      },
      {
        heading: { fi: "Tärkeät käsitteet", en: "Key concepts" },
        content: {
          fi: "• Kotoutuminen = prosessi, jossa sopeutuu uuteen maahan\n• Kotoutumissuunnitelma = henkilökohtainen suunnitelma TE-toimistolta\n• Kaksisuuntaisuus = molemmat osapuolet osallistuvat\n• Kotoutumisaika = yleensä 3 vuotta",
          en: "• Kotoutuminen = process of adapting to a new country\n• Kotoutumissuunnitelma = personal plan from the TE office\n• Kaksisuuntaisuus = both parties participate\n• Kotoutumisaika = usually 3 years"
        }
      }
    ]
  },

  "koto-2": {
    title: { fi: "Suomen sijainti ja alueet", en: "Finland's location and regions" },
    sections: [
      {
        heading: { fi: "Suomen maantiede", en: "Finland's geography" },
        content: {
          fi: "Suomi sijaitsee Pohjois-Euroopassa ja kuuluu Pohjoismaihin (Ruotsi, Norja, Tanska, Islanti). Naapurimaat ovat Ruotsi, Norja, Venäjä ja Viro. Suomen pinta-alasta 44 % on metsää, 10 % vesistöjä. Suomessa on noin 5,5 miljoonaa asukasta.",
          en: "Finland is in Northern Europe and belongs to the Nordic countries (Sweden, Norway, Denmark, Iceland). Neighbors are Sweden, Norway, Russia, and Estonia. 44% of Finland is forest, 10% is water. Finland has about 5.5 million inhabitants."
        }
      },
      {
        heading: { fi: "Alueet", en: "Regions" },
        content: {
          fi: "• Etelä-Suomi: tiheimmin asuttu, Helsinki, Espoo, Vantaa, Turku\n• Järvi-Suomi: Tampere, Jyväskylä, Kuopio — paljon järviä\n• Pohjanmaa: Oulu, Vaasa — maataloutta ja teknologiaa\n• Lappi: Rovaniemi — matkailua, saamelaisten kotiseutualue\n• Ahvenanmaa: itsehallinto, ruotsinkielinen",
          en: "• Southern Finland: most densely populated, Helsinki, Espoo, Vantaa, Turku\n• Lake Finland: Tampere, Jyväskylä, Kuopio — many lakes\n• Ostrobothnia: Oulu, Vaasa — agriculture and technology\n• Lapland: Rovaniemi — tourism, Sámi homeland\n• Åland: autonomous, Swedish-speaking"
        }
      },
      {
        heading: { fi: "Kielet", en: "Languages" },
        content: {
          fi: "Suomen viralliset kielet ovat suomi ja ruotsi. Noin 5 % puhuu äidinkielenään ruotsia. Saamelaisilla on omat kielensä Lapissa. Suomi ei ole sukua ruotsille — se kuuluu suomalais-ugrilaiseen kieliperheeseen.",
          en: "Finland's official languages are Finnish and Swedish. About 5% speak Swedish as their mother tongue. The Sámi have their own languages in Lapland. Finnish is not related to Swedish — it belongs to the Finno-Ugric language family."
        }
      }
    ]
  },

  "koto-3": {
    title: { fi: "Sää ja vuodenajat", en: "Weather and seasons" },
    sections: [
      {
        heading: { fi: "Neljä vuodenaikaa", en: "Four seasons" },
        content: {
          fi: "• Kevät (maalis–toukokuu): lumi sulaa, päivät pitenevät\n• Kesä (kesä–elokuu): lämmin, yötön yö pohjoisessa\n• Syksy (syys–marraskuu): lehdet putoavat, pimeää\n• Talvi (joulu–helmikuu): kylmä, lunta, kaamos pohjoisessa",
          en: "• Spring (March–May): snow melts, days get longer\n• Summer (June–August): warm, midnight sun in the north\n• Autumn (September–November): leaves fall, dark\n• Winter (December–February): cold, snow, polar night in the north"
        }
      },
      {
        heading: { fi: "Tärkeää tietää", en: "Important to know" },
        content: {
          fi: "Lämpötila voi vaihdella +30 °C (kesällä) ja -30 °C (talvella) välillä. Talvella pukeudu kerroksittain! Kaamos = aika, jolloin aurinko ei nouse (Lapissa useita viikkoja). Yötön yö = kesällä aurinko ei laske pohjoisessa.",
          en: "Temperature can vary between +30°C (summer) and -30°C (winter). Dress in layers in winter! Kaamos = period when the sun doesn't rise (several weeks in Lapland). Midnight sun = sun doesn't set in the north in summer."
        }
      }
    ]
  },

  // ── Ihmiset ja kulttuuri ──
  "ihku-1": {
    title: { fi: "Väestö ja uskonnot", en: "Population and religions" },
    sections: [
      {
        heading: { fi: "Suomen väestö", en: "Finland's population" },
        content: {
          fi: "Suomessa on noin 5,5 miljoonaa asukasta. Väestö keskittyy Etelä-Suomeen. Suomi on monikulttuurinen maa: ulkomaalaistaustasia on noin 8 % väestöstä. Saamelaiset ovat EU:n ainoa alkuperäiskansa (noin 10 000 henkeä Lapissa).",
          en: "Finland has about 5.5 million inhabitants, concentrated in Southern Finland. Finland is multicultural: about 8% have a foreign background. The Sámi are the EU's only indigenous people (about 10,000 in Lapland)."
        }
      },
      {
        heading: { fi: "Uskonnot", en: "Religions" },
        content: {
          fi: "• Evankelis-luterilainen kirkko: noin 66 % väestöstä\n• Ortodoksinen kirkko: noin 1 %\n• Ei uskonnollista yhteisöä: noin 30 %\n• Muut uskonnot: islam, katolilaisuus ym.\n\nUskonnonvapaus on perusoikeus. Jokainen saa harjoittaa uskontoaan tai olla harjoittamatta.",
          en: "• Evangelical Lutheran Church: about 66%\n• Orthodox Church: about 1%\n• No religious community: about 30%\n• Other religions: Islam, Catholicism, etc.\n\nFreedom of religion is a fundamental right. Everyone may practice or not practice a religion."
        }
      }
    ]
  },

  "ihku-2": {
    title: { fi: "Arvot ja tapakulttuuri", en: "Values and customs" },
    sections: [
      {
        heading: { fi: "Suomalaiset arvot", en: "Finnish values" },
        content: {
          fi: "Suomen perustuslain arvot: vapaus, ihmisoikeudet, tasa-arvo ja yhdenvertaisuus. Suomalaiset arvostavat myös:\n• Täsmällisyyttä ja rehellisyyttä\n• Työtä ja ahkeruutta\n• Koulutusta ja sivistystä\n• Luontoa ja ympäristöä\n• Maanpuolustustahtoa\n\nSuomessa on korruptiota toiseksi vähiten maailmassa.",
          en: "Constitutional values: freedom, human rights, equality and non-discrimination. Finns also value:\n• Punctuality and honesty\n• Work and diligence\n• Education and culture\n• Nature and environment\n• National defense will\n\nFinland has the second-lowest corruption in the world."
        }
      },
      {
        heading: { fi: "Tapakulttuuri", en: "Customs" },
        content: {
          fi: "• Kengät riisutaan kotiin tultaessa\n• Sinuttelu on yleistä (mutta teitittely kohteliasta vanhempia kohtaan)\n• Sauna on tärkeä osa kulttuuria\n• Henkilökohtaista tilaa kunnioitetaan\n• Jokamiehen oikeudet: saa liikkua luonnossa, poimia marjoja ja sieniä",
          en: "• Shoes are removed when entering a home\n• Informal 'you' (sinä) is common (but formal 'te' is polite to elders)\n• Sauna is an important part of culture\n• Personal space is respected\n• Everyman's rights: right to roam, pick berries and mushrooms"
        }
      }
    ]
  },

  "ihku-3": {
    title: { fi: "Juhlat ja perinteet", en: "Celebrations and traditions" },
    sections: [
      {
        heading: { fi: "Suomen tärkeimmät juhlapäivät", en: "Finland's most important holidays" },
        content: {
          fi: "• Uudenvuodenpäivä: 1.1.\n• Loppiainen: 6.1.\n• Pääsiäinen: keväällä (muuttuva)\n• Vappu: 1.5. — opiskelijoiden ja työväen juhla\n• Helatorstai: 40 päivää pääsiäisen jälkeen\n• Juhannus: kesäkuun loppu — mökkeilyä ja kokkoja\n• Pyhäinpäivä: marraskuun alku\n• Itsenäisyyspäivä: 6.12. — Suomen itsenäistyminen 1917\n• Joulu: 24.–26.12.",
          en: "• New Year's Day: Jan 1\n• Epiphany: Jan 6\n• Easter: spring (variable)\n• May Day: May 1 — students' and workers' celebration\n• Ascension Day: 40 days after Easter\n• Midsummer: end of June — cottages and bonfires\n• All Saints' Day: early November\n• Independence Day: Dec 6 — independence from 1917\n• Christmas: Dec 24–26"
        }
      }
    ]
  },

  // ── Arki ──
  "arki-1": {
    title: { fi: "Asuminen Suomessa", en: "Housing in Finland" },
    sections: [
      {
        heading: { fi: "Asumismuodot", en: "Housing types" },
        content: {
          fi: "• Omistusasunto: noin 65 % suomalaisista\n• Vuokra-asunto: yleinen kaupungeissa\n• Asumisoikeusasunto: välimuoto\n\nVuokrasopimus kannattaa aina tehdä kirjallisesti. Vuokravakuus on yleensä 1–3 kuukauden vuokra.",
          en: "• Owner-occupied: about 65% of Finns\n• Rental: common in cities\n• Right-of-occupancy: hybrid form\n\nRental agreements should always be in writing. Deposit is usually 1–3 months' rent."
        }
      },
      {
        heading: { fi: "Taloyhtiö ja säännöt", en: "Housing company and rules" },
        content: {
          fi: "Taloyhtiö vastaa rakennuksen ylläpidosta. Asukkaat maksavat yhtiövastiketta. Järjestyssäännöt:\n• Hiljaisuusaika: yleensä klo 22–07\n• Jätteiden lajittelu on pakollista\n• Yhteisten tilojen siisteys\n• Tupakointi usein kielletty sisätiloissa",
          en: "Housing company handles building maintenance. Residents pay a maintenance charge. House rules:\n• Quiet hours: usually 10 PM–7 AM\n• Waste sorting is mandatory\n• Cleanliness of shared spaces\n• Smoking often prohibited indoors"
        }
      }
    ]
  },

  "arki-2": {
    title: { fi: "Viranomaisasiointi ja talous", en: "Authorities and finances" },
    sections: [
      {
        heading: { fi: "Tärkeimmät viranomaiset", en: "Key authorities" },
        content: {
          fi: "• DVV (Digi- ja väestötietovirasto): väestörekisteri, henkilötunnus, muuttoilmoitus\n• Kela: sosiaaliturvaetuudet (asumistuki, lapsilisä, työttömyyskorvaus)\n• Verohallinto: verotus, verokortti\n• TE-toimisto: työnhaku, kotoutuminen\n• Poliisi: turvallisuus, henkilöllisyystodistus, passi\n• Maahanmuuttovirasto (Migri): oleskeluluvat, kansalaisuus",
          en: "• DVV: population register, personal ID code, change of address\n• Kela: social benefits (housing allowance, child benefit, unemployment)\n• Tax Administration: taxation, tax card\n• TE office: job search, integration\n• Police: safety, ID card, passport\n• Immigration Service (Migri): residence permits, citizenship"
        }
      },
      {
        heading: { fi: "Talous ja verotus", en: "Finances and taxation" },
        content: {
          fi: "• Henkilötunnus tarvitaan kaikkeen viranomaisasiointiin\n• Pankkitili avataan henkilötunnuksella\n• Verokortti näyttää veroprosenttisi\n• Veroja maksetaan palkasta automaattisesti (ennakonpidätys)\n• Veroilmoitus tehdään kerran vuodessa keväällä",
          en: "• Personal ID code needed for all dealings with authorities\n• Bank account opened with personal ID code\n• Tax card shows your tax percentage\n• Taxes are automatically deducted from salary\n• Tax return filed once a year in spring"
        }
      }
    ]
  },

  // ── Työ ──
  "tyo-1": {
    title: { fi: "Työnhaku Suomessa", en: "Job search in Finland" },
    sections: [
      {
        heading: { fi: "Miten hakea töitä?", en: "How to search for jobs?" },
        content: {
          fi: "• Verkossa: mol.fi (TE-palvelut), duunitori.fi, oikotie.fi, linkedin.com\n• Suoraan yrityksiltä: avoimet hakemukset\n• Verkostoituminen: tuttavat, tapahtumat\n• Rekrytointifirmat\n\nTärkeää: CV (ansioluettelo) + työhakemus (saatekirje). Suomessa arvostetaan lyhyttä, selkeää CV:tä.",
          en: "• Online: mol.fi (TE services), duunitori.fi, oikotie.fi, linkedin.com\n• Direct from companies: open applications\n• Networking: acquaintances, events\n• Recruitment firms\n\nImportant: CV + cover letter. In Finland, a short, clear CV is valued."
        }
      },
      {
        heading: { fi: "Koulutuksen tunnustaminen", en: "Recognition of qualifications" },
        content: {
          fi: "Ulkomailla suoritettu tutkinto voidaan tunnustaa Suomessa. Opetushallitus päättää akateemisesta tunnustamisesta. Joillakin aloilla (lääkäri, opettaja, lakimies) vaaditaan lisäopintoja tai pätevyyskoe.",
          en: "Qualifications from abroad can be recognized in Finland. The National Agency for Education decides on academic recognition. Some fields (doctor, teacher, lawyer) require additional studies or qualification exams."
        }
      }
    ]
  },

  "tyo-2": {
    title: { fi: "Työkulttuuri ja oikeudet", en: "Work culture and rights" },
    sections: [
      {
        heading: { fi: "Suomalainen työkulttuuri", en: "Finnish work culture" },
        content: {
          fi: "• Matala hierarkia: esimiestä voi puhutella etunimellä\n• Täsmällisyys: kokouksiin tullaan ajoissa\n• Tasa-arvo: kaikkien mielipiteitä kuunnellaan\n• Luottamus: sovituista asioista pidetään kiinni\n• Työviikko: 37,5–40 tuntia\n• Vuosiloma: 2–5 viikkoa",
          en: "• Flat hierarchy: address boss by first name\n• Punctuality: arrive on time for meetings\n• Equality: everyone's opinions are heard\n• Trust: agreements are kept\n• Work week: 37.5–40 hours\n• Annual leave: 2–5 weeks"
        }
      },
      {
        heading: { fi: "Oikeudet ja TES", en: "Rights and collective agreements" },
        content: {
          fi: "• Ei lakisääteistä minimipalkkaa — palkat TES:n mukaan\n• Koeaika: enintään 6 kuukautta\n• Tasa-arvolaki kieltää palkkasyrjinnän\n• Ammattiliitto puolustaa oikeuksia (noin 60 % kuuluu)\n• Työnantaja pidättää verot automaattisesti",
          en: "• No statutory minimum wage — wages set by collective agreement\n• Trial period: max 6 months\n• Equality Act prohibits pay discrimination\n• Trade union defends rights (about 60% belong)\n• Employer withholds taxes automatically"
        }
      }
    ]
  },

  // ── Koulutus ──
  "kou-1": {
    title: { fi: "Suomen koulutusjärjestelmä", en: "Finnish education system" },
    sections: [
      {
        heading: { fi: "Koulutusasteet", en: "Education levels" },
        content: {
          fi: "1. Esiopetus: 6-vuotiaille, 1 vuosi (pakollinen)\n2. Peruskoulu: 7–16-vuotiaille, 9 vuotta (maksuton)\n3. Toinen aste: lukio TAI ammattikoulu\n4. Korkeakoulu: yliopisto TAI ammattikorkeakoulu\n\nOppivelvollisuus 18 ikävuoteen asti (vuodesta 2021). Toisen asteen koulutus on maksuton.",
          en: "1. Pre-primary: age 6, 1 year (mandatory)\n2. Basic education: ages 7–16, 9 years (free)\n3. Upper secondary: general (lukio) OR vocational\n4. Higher education: university OR polytechnic\n\nCompulsory education until age 18 (since 2021). Upper secondary is free."
        }
      },
      {
        heading: { fi: "Aikuiskoulutus", en: "Adult education" },
        content: {
          fi: "• Kansalaisopistot: edullisia kursseja (kielet, käsityöt, liikunta)\n• Avoin yliopisto: yliopistokursseja ilman tutkinto-oikeutta\n• Ammatillinen aikuiskoulutus: uuden ammatin opiskelu\n• Kotoutumiskoulutus: suomen kieltä ja yhteiskuntatietoa maahanmuuttajille",
          en: "• Adult education centers: affordable courses (languages, crafts, sports)\n• Open university: university courses without degree status\n• Vocational adult education: studying a new profession\n• Integration training: Finnish language and society knowledge for immigrants"
        }
      }
    ]
  },

  // ── Perheet ──
  "per-1": {
    title: { fi: "Perhe-elämä Suomessa", en: "Family life in Finland" },
    sections: [
      {
        heading: { fi: "Perhemuodot", en: "Family types" },
        content: {
          fi: "• Avioliitto: juridinen liitto, myös samaa sukupuolta oleville (2017)\n• Avoliitto: asutaan yhdessä ilman avioliittoa\n• Yksinhuoltajaperhe: yleinen\n• Uusperhe: uuden kumppanin lapset\n\nSuomessa kumpikin puoliso on tasa-arvoinen. Molemmat voivat työskennellä ja hoitaa lapsia.",
          en: "• Marriage: legal union, also for same-sex couples (2017)\n• Cohabitation: living together without marriage\n• Single-parent family: common\n• Blended family: partner's children\n\nIn Finland, both spouses are equal. Both can work and care for children."
        }
      },
      {
        heading: { fi: "Perheen tuet", en: "Family benefits" },
        content: {
          fi: "• Lapsilisä: kaikille perheille, alle 17-vuotiaista lapsista\n• Vanhempainvapaa: molemmille vanhemmille\n• Neuvola: ilmainen raskauden ja lasten seuranta\n• Päivähoito: kunnallinen ja edullinen\n• Lastensuojelu: suojelee lapsen hyvinvointia",
          en: "• Child benefit: for all families, children under 17\n• Parental leave: for both parents\n• Maternity clinic: free pregnancy and child monitoring\n• Daycare: municipal and affordable\n• Child protection: protects child welfare"
        }
      }
    ]
  },

  // ── Terveys ──
  "ter-1": {
    title: { fi: "Terveyspalvelut Suomessa", en: "Health services in Finland" },
    sections: [
      {
        heading: { fi: "Terveydenhuollon rakenne", en: "Healthcare structure" },
        content: {
          fi: "• Terveyskeskus: perusterveydenhuolto (ensimmäinen kontakti)\n• Sairaala: erikoissairaanhoito (lähete tarvitaan)\n• Neuvola: raskauden ja lasten seuranta (ilmainen)\n• Hammashoitola: hammashoito\n• Apteekki: lääkkeet (resepti sähköinen)\n\nHätänumero: 112 (poliisi, palo, ambulanssi) — toimii koko EU:ssa",
          en: "• Health center: primary care (first contact)\n• Hospital: specialized care (referral needed)\n• Maternity clinic: pregnancy and child monitoring (free)\n• Dental clinic: dental care\n• Pharmacy: medicines (electronic prescription)\n\nEmergency: 112 (police, fire, ambulance) — works across EU"
        }
      },
      {
        heading: { fi: "Maksut ja oikeudet", en: "Costs and rights" },
        content: {
          fi: "Julkinen terveydenhuolto on edullista mutta ei ilmaista. Potilasmaksuille on vuosittainen maksukatto. Hyvinvointialueet järjestävät sosiaali- ja terveyspalvelut (vuodesta 2023). Kaikilla Suomessa asuvilla on oikeus välttämättömään hoitoon.",
          en: "Public healthcare is affordable but not free. There's an annual ceiling for patient fees. Wellbeing services counties organize health services (since 2023). Everyone living in Finland has the right to necessary care."
        }
      }
    ]
  },

  // ── Yhteiskunta ──
  "yht-1": {
    title: { fi: "Demokratia ja hallinto", en: "Democracy and governance" },
    sections: [
      {
        heading: { fi: "Suomen valtiorakenne", en: "Finland's state structure" },
        content: {
          fi: "• Tasavalta — valtionpäämies on presidentti (6 v., max 2 kautta)\n• Eduskunta: 200 kansanedustajaa, valitaan 4 vuodeksi\n• Hallitus: pääministeri + ministerit\n• Kunnat: paikallishallinto, kunnanvaltuusto\n• Hyvinvointialueet: sosiaali- ja terveyspalvelut",
          en: "• Republic — head of state is president (6 yrs, max 2 terms)\n• Parliament: 200 MPs, elected for 4 years\n• Government: prime minister + ministers\n• Municipalities: local government, municipal council\n• Wellbeing counties: social and health services"
        }
      },
      {
        heading: { fi: "Vaalit", en: "Elections" },
        content: {
          fi: "• Eduskuntavaalit: valitaan kansanedustajat (4 v.) — vain Suomen kansalaiset\n• Presidentinvaali: valitaan presidentti (6 v.) — vain kansalaiset\n• Kuntavaalit: valitaan kunnanvaltuusto — myös ulkomaalaiset voivat äänestää\n• Europarlamenttivaalit: valitaan mepit — EU-kansalaiset\n• Aluevaalit: valitaan hyvinvointialueen valtuusto",
          en: "• Parliamentary: elect MPs (4 yrs) — Finnish citizens only\n• Presidential: elect president (6 yrs) — citizens only\n• Municipal: elect council — foreigners can also vote\n• EU elections: elect MEPs — EU citizens\n• Regional: elect wellbeing county council"
        }
      }
    ]
  },

  // ── Lait ──
  "lai-1": {
    title: { fi: "Oikeudet ja velvollisuudet", en: "Rights and obligations" },
    sections: [
      {
        heading: { fi: "Perusoikeudet", en: "Fundamental rights" },
        content: {
          fi: "Perustuslaki takaa kaikille:\n• Yhdenvertaisuus lain edessä\n• Oikeus elämään ja henkilökohtaiseen vapauteen\n• Sananvapaus ja uskonnonvapaus\n• Kokoontumis- ja yhdistymisvapaus\n• Oikeus koulutukseen\n• Oikeus sosiaaliturvaan\n• Oikeus omaan kieleen ja kulttuuriin",
          en: "Constitution guarantees everyone:\n• Equality before the law\n• Right to life and personal liberty\n• Freedom of speech and religion\n• Freedom of assembly and association\n• Right to education\n• Right to social security\n• Right to own language and culture"
        }
      },
      {
        heading: { fi: "Velvollisuudet ja kansalaisuus", en: "Obligations and citizenship" },
        content: {
          fi: "Velvollisuudet:\n• Noudattaa Suomen lakeja\n• Maksaa veroja\n• Oppivelvollisuus (18 v. asti)\n\nKansalaisuuden edellytykset:\n• Asumisaika: yleensä 5 vuotta\n• Kielitaito: suomi tai ruotsi (B1-taso)\n• Nuhteettomuus\n• Selvitetty henkilöllisyys\n• Turvattu toimeentulo",
          en: "Obligations:\n• Obey Finnish laws\n• Pay taxes\n• Compulsory education (until 18)\n\nCitizenship requirements:\n• Residence: usually 5 years\n• Language: Finnish or Swedish (B1 level)\n• Good conduct\n• Verified identity\n• Secured livelihood"
        }
      }
    ]
  },

  // ── Historia ──
  "his-1": {
    title: { fi: "Suomen historian pääpiirteet", en: "Key features of Finnish history" },
    sections: [
      {
        heading: { fi: "Aikajana", en: "Timeline" },
        content: {
          fi: "• n. 1150–1809: Suomi osa Ruotsin valtakuntaa (noin 700 vuotta)\n• 1809–1917: Venäjän autonominen suuriruhtinaskunta\n• 1906: Yleinen äänioikeus — myös naisille (ensimmäinen Euroopassa)\n• 6.12.1917: Itsenäisyysjulistus\n• 1918: Sisällissota\n• 1939–1940: Talvisota (Neuvostoliitto)\n• 1941–1944: Jatkosota\n• 1995: EU-jäsenyys\n• 2002: Euro käyttöön\n• 2023: NATO-jäsenyys",
          en: "• c. 1150–1809: Finland part of Sweden (about 700 years)\n• 1809–1917: Autonomous Grand Duchy of Russia\n• 1906: Universal suffrage — including women (first in Europe)\n• Dec 6, 1917: Declaration of independence\n• 1918: Civil war\n• 1939–1940: Winter War (Soviet Union)\n• 1941–1944: Continuation War\n• 1995: EU membership\n• 2002: Euro adopted\n• 2023: NATO membership"
        }
      },
      {
        heading: { fi: "Tärkeää muistaa", en: "Important to remember" },
        content: {
          fi: "• Suomi on ollut itsenäinen vain noin 100 vuotta\n• Ruotsalainen hallintokulttuuri ja oikeusjärjestelmä ovat perintöä Ruotsin ajalta\n• Venäjän aikana Suomi sai laajan itsehallinnon\n• Talvisodassa pieni Suomi puolustautui suurta Neuvostoliittoa vastaan\n• Sodanjälkeinen aika: nopea teollistuminen ja hyvinvointivaltion rakentaminen",
          en: "• Finland has been independent for only about 100 years\n• Swedish administrative culture and legal system are legacy from Swedish era\n• During Russian rule, Finland gained broad autonomy\n• In the Winter War, small Finland defended against the large Soviet Union\n• Post-war era: rapid industrialization and building of the welfare state"
        }
      }
    ]
  }
};
