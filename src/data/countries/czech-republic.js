export const czechRepublic = {
  id: 'czech-republic',
  slug: 'czech-republic',
  name: 'Czech Republic',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Czech'],
  shortDescription: 'The heart of Central Europe, offering stunning architecture, beer culture, and safety.',
  heroImage: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439',
  flagAlt: 'Flag of Czech Republic',
  atAGlance: "The Czech Republic (officially Czechia, though many residents still use the older name) is a safe, stable, and affordable country in the geographic heart of Europe. Prague, the capital, is one of the continent's most beautiful cities — its Gothic, Baroque, and Art Nouveau architecture survived both World Wars largely intact, creating a cityscape that feels like a living museum. Beyond Prague, Brno offers a more local, university-town atmosphere with a growing tech and startup scene. Czech culture is shaped by a blend of Slavic and Germanic influences, a dark and self-deprecating humor, deep skepticism of authority, and an unwavering love of beer — the country has the highest per-capita beer consumption in the world, and a half-liter of excellent Czech lager (pivo) at a local pub costs approximately CZK 50-70 (EUR 2-3). Czechs are famously reserved with strangers — initial interactions may feel cold or blunt compared to Southern European or American warmth — but once a relationship is established, Czech friendships are genuine, loyal, and enduring. The cost of living is significantly lower than Western Europe, though Prague has been rapidly catching up, with rents doubling in many neighborhoods over the past decade. The bureaucracy is rigid, often monolingual (Czech only), and requires patience — dealing with the Foreign Police (cizinecká policie) for residence permits is a particular test of endurance. English is widely spoken in Prague's center and among younger generations, but outside the capital and tourist areas, Czech is essential. The country's central location makes it an ideal base for European travel — Berlin, Vienna, Munich, Budapest, and Kraków are all within a few hours by train or car.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'Medium',
    primaryLanguages: 'Czech (English in Prague)',
  },
  visas: [
    {
      name: 'Employee Card (Zaměstnanecká karta)',
      targetAudience: 'Employed Workers',
      useCase: 'A combined work and residence permit for third-country nationals with a job offer from a Czech employer. The position must be listed in the Central Register of Vacancies. The employer must be registered with the Labour Office. Processing times are officially 60 days but frequently take 90-120 days in practice. The card is tied to the specific employer and position.',
      duration: 'Up to 2 years (renewable)',
      link: 'https://www.mvcr.cz/mvcren/article/employee-card-682810.aspx'
    },
    {
      name: 'Trade License Visa (Živnostenský list)',
      targetAudience: 'Freelancers, Self-employed',
      useCase: 'For self-employed individuals operating under a Czech trade license (živnostenský list). Popular with English teachers, IT contractors, translators, and digital creatives. You first obtain the trade license from the Trade Licensing Office (Živnostenský úřad), then apply for a long-term visa at the Czech embassy in your country of residence. Requires proof of accommodation, financial means, and a business plan.',
      duration: '1 year (renewable for 2-year periods)',
      link: 'https://www.mvcr.cz/mvcren/article/third-country-nationals-long-term-visa.aspx'
    },
    {
      name: 'EU Blue Card',
      targetAudience: 'Highly Skilled Workers',
      useCase: 'For university graduates in high-demand fields with a gross annual salary at least 1.5 times the Czech average (approximately CZK 600,000+/year or CZK 50,000+/month). Provides more flexibility than the Employee Card for intra-EU mobility after 18 months.',
      duration: 'Duration of employment contract + 3 months (max 2 years, renewable)',
      link: 'https://www.mvcr.cz/mvcren/article/eu-blue-card.aspx'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists / Short-stay visitors',
      useCase: 'For short visits up to 90 days within a 180-day period for tourism, business meetings, or family visits. The Czech Republic is part of the Schengen area.',
      duration: 'Up to 90 days',
      link: 'https://www.mzv.cz/jnp/en/information_for_aliens/short_stay_visa/index.html'
    },
    {
      name: 'Long-term Residence for Family Reunification',
      targetAudience: 'Family Members of Residents',
      useCase: 'For spouses, registered partners, minor children, and dependent parents of foreign nationals legally residing in the Czech Republic. The sponsor must demonstrate sufficient income, accommodation, and health insurance coverage for the family member.',
      duration: 'Up to 2 years (renewable)',
      link: 'https://www.mvcr.cz/mvcren/article/third-country-nationals-long-term-residence-permit.aspx'
    }
  ],
  requirements: [
    {
      title: 'Rodné číslo (Birth Number / Personal ID Number)',
      explanation: 'A unique 10-digit identification number assigned to all residents of the Czech Republic. For foreigners, a temporary rodné číslo is typically issued during the residence permit process, with a permanent number assigned later. It is printed on your residence permit card and used across all government, healthcare, and financial systems.',
      importance: 'The rodné číslo is required for virtually everything: opening a bank account, signing an employment contract, registering with a health insurance company, filing taxes, picking up packages at the post office, and accessing many online services. It is the Czech equivalent of a national ID number and is requested constantly in daily administrative life.',
      link: 'https://www.mvcr.cz/mvcren/'
    },
    {
      title: 'Foreign Police Registration (Cizinecká policie)',
      explanation: 'Non-EU citizens must register with the Foreign Police (Oddělení pobytových agend) within 3 working days of arrival if not staying at a hotel or registered accommodation (which handles registration automatically). You bring your passport, proof of accommodation, and registration form to the local Foreign Police office.',
      importance: 'Registration is a legal requirement, and failure to comply can result in fines starting at CZK 3,000. The Foreign Police office is also where you submit and collect residence permit applications. Queues are notorious — arriving 1-2 hours before opening is common advice. Some offices now accept appointments, but availability is limited.',
      link: 'https://www.policie.cz/clanek/foreign-police-agenda.aspx'
    },
    {
      title: 'Health Insurance (Zdravotní pojištění)',
      explanation: 'Health insurance is mandatory for all residents of the Czech Republic. Employees are automatically enrolled in the public system through their employer, with contributions split between employer (9%) and employee (4.5%). Self-employed individuals pay their own contributions. Non-working residents and some visa holders may need comprehensive commercial health insurance from approved providers.',
      importance: 'You must have valid health insurance to obtain and maintain a residence permit. For employees, registration with a Czech health insurance company (VZP, ČPZP, OZP, Vojenská zdravotní pojišťovna, etc.) is handled by the employer. For živnostníci (self-employed), you register directly with your chosen insurer. Without insurance, you cannot access the public healthcare system and your residence permit may be revoked.',
      link: 'https://www.vzp.cz/en'
    },
    {
      title: 'Datová schránka (Data Box)',
      explanation: 'An electronic mailbox for secure, legally binding communication with Czech government authorities. Mandatory for all legal entities and self-employed individuals (živnostníci). Messages delivered to your Data Box are considered officially received, even if unread, after 10 days.',
      importance: 'For self-employed individuals, the datová schránka is the primary channel through which the government sends official correspondence: tax notices, social security communications, health insurance demands, and legal notifications. Ignoring it is not an option — an unread message is still legally delivered. Check it regularly or set up email notifications. Activation is free through the Czech POINT offices or online.',
      link: 'https://www.mojedatovaschranka.cz/'
    }
  ],
  jobsAndIncome: {
    overview: "The Czech Republic has one of the lowest unemployment rates in the EU (around 3-4%), driven by a strong industrial base (automotive — Škoda Auto/Volkswagen, manufacturing, engineering), a growing technology sector (especially in Prague and Brno), and a significant number of shared service centers for multinational companies (DHL, IBM, Oracle, Microsoft, Amazon). Prague is the primary employment hub, followed by Brno (Moravia's capital, with a strong university and tech scene). For foreigners, the most accessible roles are in IT, international business services, and English-language education.",
    whereToLook: [
      "Jobs.cz — the largest and most established Czech job portal",
      "Prace.cz — another major local job board with wide coverage",
      "LinkedIn — essential for international, corporate, and tech roles",
      "Expats.cz job board — specifically targeting English-speaking positions in Prague",
      "StartupJobs.cz — for tech and startup positions, primarily in Prague and Brno"
    ],
    realityChecks: [
      "Local salaries are significantly lower than Western European levels — the average gross salary in Prague is approximately CZK 48,000/month (EUR 2,000), with lower figures in other cities.",
      "English is sufficient for many IT, shared services, and international business roles in Prague, but Czech language skills are expected for most other positions and for career advancement.",
      "Competition for English-speaking roles is intense, with candidates from across Central and Eastern Europe competing for the same positions.",
      "Remote or internationally paid work in EUR/USD provides substantially better purchasing power — EUR 3,000/month allows a very comfortable lifestyle in Prague."
    ]
  },
  salaryReality: {
    overview: "Czech salary figures have been rising steadily but still trail Western Europe significantly. The average gross monthly salary nationally is approximately CZK 43,000 (EUR 1,750), with Prague averaging CZK 48,000-55,000 (EUR 2,000-2,250). IT, finance, and management roles at multinationals can command CZK 60,000-120,000+ (EUR 2,450-4,900+). Income tax is a flat 15% (23% above CZK 1,935,552 annually), plus mandatory social security (6.5%) and health insurance (4.5%) contributions.",
    realityChecks: [
      "Income tax (15%) plus social security (6.5%) and health insurance (4.5%) reduce gross salary by approximately 26%, making net-to-gross conversion straightforward but significant.",
      "Prague housing costs have risen dramatically — a one-bedroom apartment in central Prague now costs CZK 20,000-30,000 (EUR 820-1,230) per month, consuming a large portion of average salaries.",
      "Foreign-paid remote income of EUR 3,000+/month provides a genuinely comfortable lifestyle, while the same amount locally would place you in the top 10-15% of earners.",
      "The 13th month salary (bonus) is common at larger companies but not legally mandated — negotiate it explicitly during the hiring process."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Net salary after flat income tax (15%), social security (6.5%), and health insurance (4.5%) — approximately 74% of gross for standard earners",
      "Rapidly rising rental costs in Prague that have doubled in many neighborhoods since 2015",
      "Utility and energy costs, which spiked significantly in 2022-2023 and remain elevated",
      "Private healthcare or dental supplements, which many expats purchase for faster access and English-speaking providers"
    ]
  },
  housingSystem: {
    overview: "The Czech rental market is well-established but highly competitive in Prague, where vacancy rates are low and demand from both locals and expatriates keeps prices elevated. Popular expat neighborhoods in Prague include Vinohrady (elegant, residential, excellent dining), Žižkov (bohemian, more affordable), Letná (trendy, young professional), Karlín (modern, post-industrial redevelopment), and Smíchov (good transport links). Brno offers significantly more affordable housing, with Veveří, Černá Pole, and Královo Pole as popular residential areas.",
    expectations: "Expect monthly rent of CZK 18,000-30,000 (EUR 740-1,230) for a one-bedroom apartment in desirable Prague neighborhoods, and CZK 10,000-18,000 (EUR 410-740) in Brno. Deposits of 1-2 months' rent are standard. Furnished apartments are widely available and common for newcomers. Utility costs (energie — electricity, gas, heating, water) add CZK 3,000-6,000 per month and can spike significantly in winter due to heating costs. Always sign a formal rental contract (nájemní smlouva), verify the landlord's ownership through the cadastral register (katastr nemovitostí), and register your address with the Foreign Police."
  },
  healthcareReality: "The Czech Republic has a high-quality universal healthcare system funded through mandatory insurance contributions. Once registered with a Czech health insurance company (VZP — the largest, ČPZP, OZP, or others), your European Health Insurance Card equivalent (průkaz pojištěnce) provides access to a comprehensive network of hospitals and clinics. Public hospitals like Fakultní nemocnice Motol (Prague's largest hospital and a major teaching facility), Všeobecná fakultní nemocnice (Prague General Hospital), and Fakultní nemocnice Brno provide excellent care. English-speaking doctors are more readily available in Prague — Canadian Medical, Unicare Medical Center, and Prague Medical Centre specifically cater to expatriates. Wait times for specialists in the public system can range from weeks to months for non-urgent referrals, leading many expats to use private facilities for faster access. Dental care is partially covered, with basic treatments included and cosmetic work requiring private payment. Pharmacies (lékárny) are well-stocked, and a rotating system ensures 24/7 access through emergency pharmacies (pohotovostní lékárna).",
  digitalLife: {
    overview: "The Czech Republic is digitally capable with steadily improving e-government services, though many administrative processes remain paper-dependent and require in-person visits. The government portal (portal.gov.cz) handles some services online, and the Identita občana (Citizen Identity) system is expanding digital access. Mobile data is affordable, and internet infrastructure in cities is excellent.",
    essentials: [
      "Czech POINT (Český Podací Ověřovací Informační Národní Terminál) — network of contact points for government services, available at post offices and municipal offices",
      "Datová schránka (Data Box) — mandatory electronic mailbox for self-employed; recommended for all residents for government communication",
      "Local SIM card (O2, T-Mobile CZ, Vodafone CZ) — competitive prices for mobile data, typically CZK 500-700/month for unlimited plans",
      "PID Lítačka app — Prague's integrated transport ticket app for metro, tram, and bus passes"
    ],
    whatSurprisesNewcomers: [
      "Many government offices — particularly the Foreign Police — operate with limited hours, long queues, and no English-language support. Bring a Czech-speaking friend or hire a translation service.",
      "The datová schránka treats messages as legally delivered after 10 days regardless of whether you read them — set up email notifications immediately after activation.",
      "Paper documents, official stamps (razítka), and notarized copies (ověřené kopie) are still commonly required for contracts, government applications, and legal processes.",
      "Contactless card payments are widely accepted in Prague and larger cities, but many pubs (hospody), market vendors, and smaller establishments outside Prague operate on cash only."
    ]
  },
  culture: {
    text: "Czech culture is characterized by dry, dark humor, deep skepticism of authority and institutions (centuries of occupation will do that), a fierce love of nature and the outdoors, and an unwavering devotion to beer. The 'chata' (cottage) or 'chalupa' (country house) culture is central to Czech life — on weekends, Prague empties as families head to the countryside for gardening, hiking, mushroom picking (houbaření, a near-sacred autumn activity), and quiet relaxation. Pubs (hospody) are the social heart of Czech life, and beer culture is taken seriously: Czech lager (pivo) is world-renowned, and the country has the highest per-capita beer consumption globally. Formality in Czech culture is moderate — initial interactions tend toward the reserved side, with 'you' forms (vy/ty distinction) mattering in professional and first-meeting contexts. Czechs value directness over pleasantries, which can feel blunt but is simply honest communication. Once you earn a Czech friend, the friendship is deep, loyal, and for life.",
    highlights: [
      "Beer etiquette: When you sit down at a hospoda (pub), place a beer coaster on the table to signal you want a beer. The waiter will bring one without asking. Never pour new beer into an old glass — it is considered an insult to the brewer.",
      "Shoes off: Always remove your shoes when entering a Czech home. Hosts typically offer přezůvky (house slippers). This rule is universal and strictly observed.",
      "Escalator etiquette: Stand on the right, walk on the left. This is strictly observed on Prague Metro escalators, and blocking the left side will earn you sharp comments from commuters.",
      "Customer service style: Czech service can be direct to the point of seeming rude ('Czech service'). Waiters may not smile or make small talk. This is cultural, not personal — do not interpret it as hostility.",
      "Mushroom picking: Houbaření (mushroom foraging) is a beloved national pastime in autumn. Czechs take their mushroom knowledge very seriously, and forests fill with families carrying baskets from September through November."
    ]
  },
  transportationMobility: "Prague has an excellent public transport system operated by DPP (Dopravní podnik hlavního města Prahy): 3 metro lines, an extensive tram network (the second largest in the world after Melbourne), and a comprehensive bus system. A monthly pass costs CZK 550 (EUR 22) — extraordinary value. The PID Lítačka app makes purchasing and displaying tickets seamless. Brno has a well-functioning tram and bus network. Between cities, Czech Railways (České dráhy) and RegioJet (a private competitor offering superior comfort) connect Prague to Brno in 2.5 hours, to Ostrava in 3.5 hours, and to České Budějovice in 2 hours. FlixBus and RegioJet buses offer additional inter-city connections. Cycling infrastructure is improving in Prague, with a growing network of bike lanes and the Rekola bike-sharing system. Car ownership is unnecessary in Prague and Brno but becomes practical for countryside access, cottage weekends, and smaller towns.",
  internationalConnectivity: "Prague Václav Havel Airport (PRG) is a major Central European hub with direct flights across Europe, the Middle East, and North America via Czech Airlines (now part of Smartwings), Ryanair, Wizz Air, Eurowings, and many international carriers. Direct flights connect to London (2 hours), Paris (2 hours), Amsterdam (1.5 hours), Istanbul (3 hours), and Dubai (6 hours). Transatlantic routes to New York (JFK) and several other US cities operate seasonally and year-round. The Czech Republic's central European position makes it a crossroads for rail travel: direct trains to Berlin (4.5 hours), Vienna (4 hours), Budapest (6.5 hours), Munich (5.5 hours), and Kraków (7 hours via overnight service). The RegioJet night train to the Adriatic coast (Croatia, Slovenia) operates in summer.",
  travelExploration: "The Czech Republic packs extraordinary historical and natural diversity into a compact territory. Prague itself is a UNESCO World Heritage Site — the Castle (Pražský hrad), Charles Bridge (Karlův most), Old Town Square, and the Jewish Quarter (Josefov) are globally iconic. Beyond Prague, Český Krumlov (UNESCO) offers a fairy-tale medieval town on the Vltava River. Kutná Hora features the famous Sedlec Ossuary (Bone Church) and medieval silver mining heritage. The Moravian wine country around Mikulov and Znojmo produces excellent wines and offers cycling through vineyard landscapes. Bohemian Switzerland National Park (České Švýcarsko) has dramatic sandstone formations and gorges. Karlovy Vary (Carlsbad) and Mariánské Lázně (Marienbad) are historic spa towns. The Šumava and Krkonoše (Giant Mountains) offer hiking and skiing. Weekend trips to Vienna, Berlin, Dresden, or Kraków are easy and affordable.",
  considerations: [
    "Language Barrier: Czech is a challenging Slavic language with complex grammar, seven grammatical cases, and sounds unfamiliar to most Western Europeans. While English works in Prague's center, tourist areas, and international companies, dealing with government offices, landlords, utility companies, and healthcare outside Prague requires Czech or a translator. Investing in Czech language courses pays significant practical dividends.",
    "Foreign Police Bureaucracy: The Oddělení pobytových agend (residence department of the Foreign Police) is the primary interface for all residence permit applications, renewals, and address changes. Experiences range from efficient to kafkaesque, with long queues (arrive 1-2 hours before opening), inconsistent interpretation of rules, and limited English support. Bring every possible document, bring a Czech speaker, and budget an entire day.",
    "Winter Air Quality: Air quality in parts of the Czech Republic deteriorates significantly in winter due to temperature inversions that trap pollution from coal heating, industry, and vehicle emissions. The Ostrava-Karviná industrial region and some Prague neighborhoods are particularly affected. Check air quality forecasts (chmu.cz) during winter months.",
    "Tick-borne Encephalitis (TBE): The Czech Republic is in a high-risk zone for tick-borne encephalitis, a serious viral infection transmitted by ticks common in forests and grasslands. Vaccination (three doses) is strongly recommended for anyone who hikes, camps, or spends time in nature. Health insurance covers the vaccination.",
    "Cash Culture in Pubs: While card payments are increasingly accepted in restaurants and shops, many traditional Czech pubs (hospody) — especially outside Prague — are cash-only. Always carry Czech crowns (CZK) when visiting local establishments."
  ],
  mistakes: [
    "Calling it 'Czechoslovakia.' The country peacefully split into the Czech Republic and Slovakia in 1993 (the Velvet Divorce). Using the outdated name is seen as ignorant at best, offensive at worst.",
    "Asking for tap water in restaurants. While Czech tap water is perfectly safe to drink at home, requesting it in a restaurant is unusual — restaurants expect you to order bottled water (minerálka). If you specifically want tap water, ask for 'kohoutkovou vodu' politely, but be prepared for a surprised reaction.",
    "Being loud on public transport. Trams, metro, and buses in the Czech Republic are generally quiet. Speaking loudly, playing music, or having animated phone conversations on public transport will draw disapproving looks from other passengers.",
    "Clinking glasses incorrectly. When toasting, look each person in the eyes, say 'Na zdraví' (to health), and do not cross arms with anyone else who is clinking at the same time. Crossing arms during a toast is considered bad luck.",
    "Assuming Prague represents all of Czechia. Prague is significantly more expensive, more international, and more tourist-oriented than the rest of the country. Brno, Olomouc, Plzeň, and smaller cities offer a more authentic Czech experience at substantially lower costs."
  ],
  emergency: [
    {
      number: '112',
      service: 'European Emergency Number',
      description: 'Unified emergency number connecting to all services. English-speaking operators are available.'
    },
    {
      number: '158',
      service: 'Police (Policie ČR)',
      description: 'Czech national police for criminal emergencies, accidents, and security threats.'
    },
    {
      number: '155',
      service: 'Ambulance (Záchranná služba)',
      description: 'Emergency medical services and ambulance dispatch. Available 24/7 nationwide.'
    }
  ],
  sources: [
    {
      name: 'Ministry of the Interior (MVČR)',
      category: 'Immigration & Residence',
      description: 'Official source for all visa types, residence permits, Employee Cards, and immigration procedures in the Czech Republic.',
      link: 'https://www.mvcr.cz/mvcren/'
    },
    {
      name: 'Foreign Police (Cizinecká policie)',
      category: 'Registration & Permits',
      description: 'The police authority responsible for foreigner registration, residence permit applications, and address changes.',
      link: 'https://www.policie.cz/clanek/foreign-police-agenda.aspx'
    },
    {
      name: 'Foreigners.cz',
      category: 'Expat Support',
      description: 'Commercial but reliable resource for practical relocation guidance, Czech bureaucracy navigation, and English-language support services.',
      link: 'https://www.foreigners.cz/'
    },
    {
      name: 'Prague.eu',
      category: 'City Information',
      description: 'Official portal of the City of Prague with tourism, cultural events, practical information, and newcomer resources.',
      link: 'https://www.prague.eu/en'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa and residency matters, and official guidance related to the Czech Republic, consult the Czech Ministry of Foreign Affairs or a Czech embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/czech',
    mfaLink: 'https://www.mzv.cz/jnp/en/index.html'
  },
  serviceDirectory: {
    title: "Service Directory - Czech Republic",
    description: "Examples of large, commonly used service providers people often interact with when relocating to the Czech Republic.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for Employee Cards, trade licenses, Blue Cards, long-term residence permits, and immigration compliance.",
        providers: [
          { name: "PRK Partners", link: "https://www.prkpartners.com" },
          { name: "Fragomen Czech Republic", link: "https://www.fragomen.com" },
          { name: "Havel & Partners", link: "https://www.havelpartners.cz" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms for long-term rentals and property searches in Prague, Brno, and other Czech cities.",
        providers: [
          { name: "Sreality.cz", link: "https://www.sreality.cz" },
          { name: "Bezrealitky.cz", link: "https://www.bezrealitky.cz" },
          { name: "RE/MAX Czech Republic", link: "https://www.remax-czech.cz" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Czech tax residency, payroll, trade license (živnostenský list) obligations, and cross-border income.",
        providers: [
          { name: "PwC Czech Republic", link: "https://www.pwc.com/cz" },
          { name: "EY Czech Republic", link: "https://www.ey.com/cs_cz" },
          { name: "KPMG Czech Republic", link: "https://kpmg.com/cz" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including packing, shipping, customs handling, and destination support.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "AGS Movers Czech Republic", link: "https://www.agsmovers.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Czech language courses and integration programs for foreigners at all levels, from survival phrases to business Czech.",
        providers: [
          { name: "UJOP (Charles University Institute for Language and Preparatory Studies)", link: "https://ujop.cuni.cz" },
          { name: "Akcent International House Prague", link: "https://www.akcent.cz" },
          { name: "Czech Language Training", link: "https://www.czechlanguagetraining.cz" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public health insurance companies and private healthcare providers commonly used by residents and expatriates.",
        providers: [
          { name: "VZP (General Health Insurance Company)", link: "https://www.vzp.cz" },
          { name: "Canadian Medical", link: "https://www.canadian.cz" },
          { name: "Unicare Medical Center", link: "https://www.unicare.cz" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Employment platforms and recruitment firms connecting professionals with Czech employers and international companies.",
        providers: [
          { name: "Jobs.cz", link: "https://www.jobs.cz" },
          { name: "Prace.cz", link: "https://www.prace.cz" },
          { name: "Hays Czech Republic", link: "https://www.hays.cz" }
        ]
      }
    ]
  }
};
