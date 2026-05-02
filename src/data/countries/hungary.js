export const hungary = {
  id: 'hungary',
  slug: 'hungary',
  name: 'Hungary',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Hungarian'],
  shortDescription: 'A land of thermal baths, spicy paprika, and grand architecture.',
  heroImage: 'https://images.unsplash.com/photo-1616432902940-b7a1acbc60b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  flagAlt: 'Flag of Hungary',
  atAGlance: "Hungary is a Central European nation whose capital, Budapest, consistently ranks among Europe's most beautiful and liveable cities. The Danube River splits Buda (hilly, residential, historic) from Pest (flat, commercial, vibrant), and the thermal bath culture that emerges from the city's geothermal springs is genuinely unique. The cost of living remains significantly below Western European capitals, though it has risen with inflation. Hungary uses the Forint (HUF), not the Euro, which creates both opportunity and currency risk for foreign earners. The Hungarian language is a Finno-Ugric isolate unrelated to any neighboring language, making it one of the hardest European languages for English speakers to learn. This language barrier is the single biggest practical challenge for newcomers: while English works well in international companies and central Budapest, government offices, healthcare, and daily life outside the capital require Hungarian. The country has a rich cultural heritage spanning Roman, Ottoman, and Habsburg periods, visible in its architecture, cuisine, and traditions. Hungarians are proud, direct, and intellectually sharp, with a distinctive blend of pessimism and dark humor. The political climate can be polarizing, but the country remains safe, the infrastructure is solid, and the gastronomy (built on paprika, lard, and passion) is extraordinary.",

  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'Low-Medium',
    primaryLanguages: 'Hungarian',
  },
  visas: [
    {
      name: 'White Card (Digital Nomad Permit)',
      targetAudience: 'Remote workers, digital nomads',
      useCase: 'For non-EU citizens working remotely for companies or clients outside Hungary. Requires proof of at least EUR 2,000 per month income and valid health insurance. One of the more accessible digital nomad permits in Europe.',
      duration: '1 year (renewable once for an additional year)',
      link: 'https://oif.gov.hu/factsheets/white-card-residency-for-digital-nomads'
    },
    {
      name: 'Residence Permit for Gainful Activity',
      targetAudience: 'Entrepreneurs, self-employed professionals',
      useCase: 'For those establishing a business (Kft - limited liability company) or working as a self-employed individual in Hungary. Requires a business plan, proof of financial resources, and registration with the Hungarian tax authority.',
      duration: '1-3 years (renewable)',
      link: 'https://oif.gov.hu/'
    },
    {
      name: 'EU Blue Card',
      targetAudience: 'Highly qualified professionals',
      useCase: 'For non-EU citizens with a higher education qualification and a job offer paying at least 1.5 times the average gross salary. Includes family reunification rights and a path to permanent residency.',
      duration: 'Up to 4 years',
      link: 'https://oif.gov.hu/'
    },
    {
      name: 'Residence Permit for Study',
      targetAudience: 'International students',
      useCase: 'For full-time students at recognized Hungarian universities. Allows limited part-time work (24 hours per week during term, full-time during holidays). Hungary offers the Stipendium Hungaricum scholarship programme for many nationalities.',
      duration: 'Duration of studies (renewed annually)',
      link: 'https://oif.gov.hu/factsheets/residence-of-the-student-pupil'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists, short-stay visitors',
      useCase: 'For short visits up to 90 days within a 180-day period for tourism, business meetings, or family visits. Does not permit employment or long-term stay.',
      duration: 'Up to 90 days',
      link: 'https://konzuliszolgalat.kormany.hu/en/schengen-visa'
    }
  ],
  requirements: [
    {
      title: 'Address Card (Lakcimkartya)',
      explanation: 'An official card proving your registered address in Hungary. Issued by the local government office (Kormanyhivatal) upon declaration of your place of residence. This is a physical card you must carry.',
      importance: 'The address card is required for almost every administrative action in Hungary: registering with the tax authority, enrolling in healthcare, opening a bank account, and even collecting registered mail. Your landlord must provide a signed declaration (befogado nyilatkozat) consenting to your registration at their property.',
      link: 'http://www.nyilvantarto.hu/en/'
    },
    {
      title: 'Tax Identification Number (Adoazonositojel)',
      explanation: 'A 10-digit personal tax number issued by the National Tax and Customs Administration (NAV). Required for employment, self-employment, and financial transactions.',
      importance: 'Without a tax ID, you cannot be legally employed, open a bank account, or sign a utility contract. Application is done at the local NAV office with your passport, address card, and residence permit. Processing typically takes a few days.',
      link: 'https://nav.gov.hu/en'
    },
    {
      title: 'TAJ Card (Social Insurance Card)',
      explanation: 'Hungary\'s health insurance identification card, issued by the National Health Insurance Fund (NEAK). Employees are automatically enrolled through their employer; self-employed individuals must register independently.',
      importance: 'The TAJ card grants access to Hungary\'s public healthcare system, including GP visits, specialist referrals, hospital treatment, and subsidized prescriptions. Without it, you will be charged full private rates. Verify that your employer has registered you within 15 days of starting work.',
      link: 'http://www.neak.gov.hu/'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a Hungarian bank account requires your passport, address card, tax ID, and residence permit. Major banks include OTP Bank (the largest), Erste Bank, K&H Bank, and Raiffeisen Bank.',
      importance: 'Employers pay salaries by bank transfer, landlords often require bank transfers or standing orders, and utility payments are typically direct debits. Some banks offer English-language service in Budapest branches. Online banking is well-developed, and apps like Revolut and Wise are widely used as supplements.',
      link: 'https://www.mnb.hu/en'
    }
  ],
  jobsAndIncome: {
    overview:
      "Hungary's job market is driven by multinational shared service centers (SSCs), manufacturing (especially automotive, with Audi, Mercedes, and BMW all having major plants), IT, and a growing startup ecosystem. Budapest concentrates the vast majority of English-speaking roles, hosting SSCs for companies like Morgan Stanley, BP, and Vodafone. The Hungarian government actively incentivizes foreign investment, keeping the pipeline of international roles steady.",
    whereToLook: [
      "LinkedIn",
      "Profession.hu (largest Hungarian job board)",
      "Hays Hungary",
      "NoFluffJobs (for IT roles)",
      "Multinational SSC career pages"
    ],
    realityChecks: [
      "English is sufficient for SSC and international roles, but Hungarian is essential for local companies, public administration, and career advancement.",
      "Salaries are lower than Western Europe but rising, especially in IT and finance. A senior developer in Budapest can earn HUF 800,000-1,500,000 gross per month.",
      "Employment contracts are critical for residency administration; changing jobs requires notifying immigration authorities.",
      "The 13th-month salary (szja kedvezmeny) is making a return and varies by employer and sector."
    ]
  },
  salaryReality: {
    overview:
      "Hungary's average gross salary is approximately HUF 580,000 per month (around EUR 1,500), but this masks enormous variation. Budapest salaries are 20-40% higher than the national average, and IT/finance roles significantly exceed that. The flat personal income tax rate of 15% is attractive, but social contributions add approximately 18.5% on the employee side.",
    realityChecks: [
      "Net pay after the 15% income tax and 18.5% social contributions is roughly 66% of gross salary.",
      "The Forint (HUF) has been volatile; if you earn in HUF but have obligations in EUR, currency risk is real.",
      "Inflation peaked sharply in 2022-2023, and while it has moderated, food and energy costs remain elevated.",
      "Family tax benefits (csaladi adokedvezmeny) can significantly improve net income for parents."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Employee social contributions (18.5% of gross: pension 10%, health insurance 7%, labor market 1.5%)",
      "Currency fluctuation risk for those with EUR or USD obligations",
      "Rapidly rising housing costs in Budapest's central districts (V, VI, VII, XIII)",
      "Supplementary healthcare costs if you use private clinics regularly"
    ]
  },
  housingSystem: {
    overview:
      "Budapest's rental market is active and competitive, particularly in the central districts. District V (Belvaros-Lipotvaros), District VI (Terezvaros), District VII (Erzsebetvaros, the Jewish Quarter), and District XIII (near the Danube) are popular with expatriates. Buda side neighborhoods like District II (Rozsadomb) and District XII offer quieter, greener living. Apartments are typically rented unfurnished or partly furnished. The main platforms are Ingatlan.com, Jofogas.hu, and Facebook rental groups.",
    expectations:
      "Expect to pay two to three months' rent as a deposit, with the first month's rent due upfront. Lease agreements should be in writing and ideally notarized. Your landlord must provide a befogado nyilatkozat (declaration of accommodation) for your address registration. Verify utility costs (kozmu koltsegek) separately: heating in winter can be significant, especially in older buildings without modern insulation. Inspect the property carefully, particularly checking heating systems, hot water supply, and window condition."
  },
  healthcareReality:
    "Hungary has a universal public healthcare system funded through mandatory social insurance contributions. Public hospitals and clinics provide a wide range of services, but waiting times for specialists can stretch to weeks or months, and facility quality varies. Major public hospitals include Semmelweis University clinics, Szent Janos Hospital, and Honvedkorhaz (Military Hospital). Many expatriates and higher-income Hungarians supplement public care with private clinics: FirstMed Centers (English-speaking, popular with expats), Medicover Hungary, and Duna Medical Center offer faster access, modern facilities, and English-speaking doctors. 'Gratitude payments' (halapenz) to public healthcare staff are an ingrained but declining cultural practice. Pharmacies (gyogyszertarak) are widespread, and many common medications are available with a prescription at subsidized prices.",
  digitalLife: {
    overview:
      "Hungary's digital infrastructure is solid, with good internet speeds (particularly in Budapest) and growing e-government services. However, many bureaucratic processes still require in-person visits and physical paperwork. The Ugyfelkapu (Client Gate) portal is the gateway to online government services.",
    essentials: [
      "Ugyfelkapu (Client Gate) digital identity portal for tax, healthcare, and government services",
      "NAV online tax system for annual declarations",
      "OTP Smart or K&H mobile banking app",
      "BKK Futar app for Budapest public transport"
    ],
    whatSurprisesNewcomers: [
      "Language barriers in government offices and the Ugyfelkapu portal are significant; much of the system is Hungarian-only.",
      "Appointments (idopontkeres) are required for most government office visits and are booked online, often weeks in advance.",
      "Cash is still widely used, especially in markets, small shops, and outside Budapest, though card acceptance is growing.",
      "Many administrative processes that are fully digital in Western Europe still require physical stamps and notarized documents in Hungary."
    ]
  },
  culture: {
    text: "Hungarian culture is a distinctive blend of Central European sophistication, Ottoman and Habsburg heritage, and a fierce national identity rooted in the uniqueness of the Hungarian language and history. Hungarians are known for their hospitality, intellectual depth, dark humor, and a pragmatic worldview sometimes described as 'Hungarian melancholy.' They are passionate about food, wine, and thermal bathing. The ruin bar (romkocsma) scene in Budapest's District VII has become legendary. Gastronomy revolves around paprika, pork, and hearty soups; a proper Hungarian meal is an event, not a quick refuel. Wine regions like Tokaj, Eger, and Villany produce world-class wines that are criminally underrated internationally. Social relationships are built slowly but are genuine and lasting once established.",
    highlights: [
      "Thermal baths are a social institution, not just a tourist attraction. Szechenyi, Gellert, and Rudas baths are where locals play chess in the water, gossip, and relax.",
      "Goulash (gulyas) is a soup in Hungary, not a stew. Ordering 'goulash stew' reveals you as a tourist. Porkolt is the stew.",
      "Never clink beer glasses. This tradition dates to 1849 when Austrian generals clinked beer mugs celebrating the execution of 13 Hungarian revolutionary leaders. Clinking wine or spirit glasses is fine.",
      "Hungarian name order is family name first, given name second (Nagy Janos, not Janos Nagy). This is reversed when speaking to foreigners, which causes confusion.",
      "Tipping is done by telling the server the total amount you want to pay when handing over cash (e.g., the bill is 3,800 HUF, you say '4,500' when handing over a 5,000 note). Do not leave coins on the table."
    ]
  },

  transportationMobility:
    "Budapest has one of the best public transport systems in Central Europe, operated by BKK (Centre for Budapest Transport). It includes four metro lines (M1, the yellow line, is a UNESCO World Heritage site as continental Europe's oldest underground railway), an extensive tram network (tram lines 4-6 along the Grand Boulevard are among the world's busiest), trolleybuses, buses, and suburban railway (HEV). Monthly passes cost approximately HUF 9,500. The BKK Futar app provides real-time vehicle tracking. Outside Budapest, MAV (Hungarian State Railways) connects all major cities, with Budapest-Debrecen taking about 2.5 hours and Budapest-Pecs about 3 hours. Volanbusz operates the intercity bus network. FlixBus offers budget European connections. Ride-hailing via Bolt is widespread in Budapest and cheaper than traditional taxis.",

  internationalConnectivity:
    "Budapest Ferenc Liszt International Airport (BUD) offers extensive European connections through Ryanair, Wizz Air, Lufthansa, and other carriers. Direct flights reach London, Paris, Amsterdam, and most European capitals in 2-3 hours. Long-haul options are more limited but include seasonal and connecting routes. Budapest's central location makes it an excellent base for road and rail travel across Central Europe: Vienna is 2.5 hours by train, Bratislava is 2 hours, Prague is 6.5 hours, and Zagreb is 6 hours.",

  travelExploration:
    "Hungary is compact and richly varied. Lake Balaton, Central Europe's largest lake, is the country's summer playground (1.5 hours from Budapest). The wine regions of Tokaj (UNESCO), Eger (home of Bull's Blood wine), and Villany produce exceptional wines at a fraction of French or Italian prices. The Hortobagy National Park (UNESCO) on the Great Plain offers horseback riding, traditional csarda restaurants, and dramatic flat landscapes. Pecs in the south has Ottoman-era mosques and a Mediterranean atmosphere. Esztergom and Visegrad on the Danube Bend make excellent day trips. The caves of Aggtelek (UNESCO) and the thermal lake at Heviz (the world's largest biologically active thermal lake) are unique attractions.",

  considerations: [
    "Currency Volatility: Hungary uses the Forint (HUF), not the Euro. The Forint has been volatile against the EUR and USD, with significant swings. If your income is in HUF but your savings goals or obligations are in EUR, this creates meaningful currency risk. Many expatriates maintain EUR accounts alongside HUF.",
    "Language Barrier: Hungarian is notoriously difficult for English speakers, with 18 grammatical cases, vowel harmony, and no cognates to lean on. English works in international companies and tourist areas, but government offices, healthcare facilities, and rural areas operate entirely in Hungarian. Bring a Hungarian-speaking friend to important appointments.",
    "Customer Service Culture: Service in shops, restaurants, and government offices can feel blunt or indifferent by Anglo-Saxon standards. This is directness, not hostility. Smiling unnecessarily is not a Hungarian cultural norm.",
    "Political Polarization: Hungarian politics are strongly polarized. Political discussions can become heated quickly. As a newcomer, observing rather than participating is wise until you understand the landscape.",
    "Winter Heating Costs: Budapest winters (December-February) are cold and grey, and heating older apartments with high ceilings can be expensive. Always ask about heating costs (futesi koltseg) before signing a lease."
  ],

  mistakes: [
    "Calling Hungary 'Eastern Europe.' Hungarians consider themselves Central European and take this distinction seriously. The difference is cultural, historical, and emotional.",
    "Clinking beer glasses. The tradition against it dates to 1849 and is still observed, especially by older Hungarians. Younger people are more relaxed, but asking 'Is it OK to clink?' shows cultural awareness.",
    "Expecting trains to run with Swiss precision. MAV trains can be delayed, especially on rural lines. Build buffer time into connections.",
    "Leaving a tip on the table at a restaurant. In Hungary, you tell the server the total amount you wish to pay when handing over your cash, or add the tip when paying by card. Leaving coins on the table is considered rude.",
    "Assuming Budapest represents all of Hungary. The countryside, smaller cities like Debrecen, Szeged, and Pecs, and the rural Great Plain have distinct cultures, paces of life, and challenges that are very different from the cosmopolitan capital."
  ],

  emergency: [
    {
      number: '112',
      service: 'General Emergency',
      description: 'Pan-European emergency number connecting to all services. Operators speak Hungarian and English.'
    },
    {
      number: '104',
      service: 'Ambulance (Mentok)',
      description: 'Direct ambulance dispatch for medical emergencies. Hungarian language primarily.'
    },
    {
      number: '107',
      service: 'Police (Rendorseg)',
      description: 'Direct police line for crimes, accidents, and non-emergency reports.'
    }
  ],
  sources: [
    {
      name: 'National Directorate-General for Aliens Policing (OIF)',
      category: 'Immigration',
      description: 'The authority handling residence permits, work visas, digital nomad permits, and immigration compliance for Hungary.',
      link: 'https://oif.gov.hu/'
    },
    {
      name: 'National Tax and Customs Administration (NAV)',
      category: 'Tax & Finance',
      description: 'Manages tax ID registration, income tax filing, VAT, and customs matters.',
      link: 'https://nav.gov.hu/en'
    },
    {
      name: 'About Hungary',
      category: 'Government Information',
      description: 'Official government portal with news, policy information, and practical guides for residents and visitors.',
      link: 'http://abouthungary.hu/'
    },
    {
      name: 'Visit Hungary',
      category: 'Tourism',
      description: 'National Tourism Agency providing information on attractions, events, and travel within Hungary.',
      link: 'https://visithungary.com/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa and residency matters, and official guidance related to Hungary, consult the Hungarian Ministry of Foreign Affairs and Trade or a Hungarian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/hungary',
    mfaLink: 'https://www.kormany.hu/en/ministry-of-foreign-affairs-and-trade'
  },
  serviceDirectory: {
    title: "Service Directory - Hungary",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Hungary.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with residence permits, work visas, EU registrations, digital nomad permits, and appeals.",
        providers: [
          { name: "Fragomen Hungary", link: "https://www.fragomen.com" },
          { name: "Schoenherr Hungary", link: "https://www.schoenherr.eu" },
          { name: "DLA Piper Hungary", link: "https://www.dlapiper.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies handling residential rentals and property purchases, particularly in Budapest's central and Buda-side districts.",
        providers: [
          { name: "Otthon Centrum", link: "https://www.oc.hu" },
          { name: "Duna House", link: "https://www.dh.hu" },
          { name: "Engel & Volkers Hungary", link: "https://www.engelvoelkers.com/hu-en" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax and accounting experts covering Hungarian income tax, social contributions, residency rules, and business compliance.",
        providers: [
          { name: "PwC Hungary", link: "https://www.pwc.com/hu" },
          { name: "Deloitte Hungary", link: "https://www2.deloitte.com/hu" },
          { name: "KPMG Hungary", link: "https://home.kpmg/hu/en/home.html" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and regional relocation services for household goods and personal belongings.",
        providers: [
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Hungary", link: "https://www.agsmovers.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Hungarian language schools and courses for expatriates, from beginner to advanced levels.",
        providers: [
          { name: "Hungarian Language School Budapest", link: "https://www.hungarianlanguageschool.com" },
          { name: "Debrecen Summer School", link: "https://www.summerschool.hu" },
          { name: "Balassi Institute", link: "https://balassiintezet.hu" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public healthcare institutions and private clinics commonly used by residents and expatriates.",
        providers: [
          { name: "FirstMed Centers", link: "https://firstmedcenters.com" },
          { name: "Medicover Hungary", link: "https://www.medicover.hu" },
          { name: "Duna Medical Center", link: "https://www.dunamedical.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms and employment platforms connecting international talent with Hungarian employers.",
        providers: [
          { name: "Profession.hu", link: "https://www.profession.hu" },
          { name: "Hays Hungary", link: "https://www.hays.hu" },
          { name: "Randstad Hungary", link: "https://www.randstad.hu" }
        ]
      }
    ]
  }
};