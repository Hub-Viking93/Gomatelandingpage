export const iceland = {
  id: 'iceland',
  slug: 'iceland',
  name: 'Iceland',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Icelandic', 'English'],
  shortDescription: 'Land of fire and ice, offering a close-knit community in a dramatic setting.',
  heroImage: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae',
  flagAlt: 'Flag of Iceland',
  atAGlance: "Iceland is a land of extremes in every dimension: geological (volcanoes, glaciers, geysers, and hot springs within a few hours' drive), social (a tiny, tight-knit island nation of 380,000 where everyone seems connected by two degrees of separation), and seasonal (4 hours of daylight in December, 24 hours in June). The national mentality is captured by 'Thetta reddast' - the unshakeable belief that it will all work out somehow. Daily life is shaped by weather that can change from sunshine to horizontal rain to snow within a single hour. Iceland is a high-trust, egalitarian society with remarkably flat hierarchies; even the President is addressed by first name, and the Prime Minister might be spotted at the local swimming pool. Reykjavik, the world's northernmost capital, is home to two-thirds of the population and is simultaneously a small town and a cosmopolitan hub with world-class restaurants, a vibrant music scene, and thriving creative industries. For newcomers, Iceland feels extraordinarily safe and cozy (the Icelandic concept of 'hygge' equivalent is 'notalegt'), but also insular. Social circles form in childhood and can be challenging to penetrate as an adult outsider. The cost of living is among the highest in the world, driven by the island's isolation and dependence on imports for most consumer goods. Living here means embracing nature's raw power, the community's warmth, and expenses that will make you wince at every grocery receipt.",

  overview: {
    euStatus: 'Non-EU (EEA Member)',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'Very High',
    primaryLanguages: 'Icelandic, English (Widely spoken)',
  },
  visas: [
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists, short-stay visitors',
      useCase: 'For non-EEA citizens visiting Iceland for up to 90 days within a 180-day period. Iceland is part of the Schengen area despite not being an EU member. Tourism, family visits, and business meetings are permitted; employment is not.',
      duration: 'Up to 90 days',
      link: 'https://island.is/en/get-a-visa'
    },
    {
      name: 'Long-Term Visa for Remote Workers',
      targetAudience: 'Digital nomads, high-earning remote workers',
      useCase: 'For remote workers earning above approximately ISK 1,000,000 per month (around USD 7,000) from a foreign employer. Does not grant access to the national healthcare system or a path to permanent residency. Designed as an extended stay visa, not an immigration pathway.',
      duration: 'Up to 180 days',
      link: 'https://island.is/en/get-long-term-visa-for-remote-workers'
    },
    {
      name: 'Work Permit and Residence Permit',
      targetAudience: 'Employed professionals (non-EEA)',
      useCase: 'For non-EEA citizens with a confirmed job offer from an Icelandic employer. The employer applies to the Directorate of Labour, demonstrating that the position could not be filled by an Icelandic or EEA citizen. The residence permit is tied to the specific employer and job.',
      duration: '1 year (renewable, tied to employment)',
      link: 'https://island.is/en/work-permit'
    },
    {
      name: 'EEA/EFTA Registration',
      targetAudience: 'EU/EEA/EFTA citizens',
      useCase: 'EEA and EFTA citizens have the right to live and work in Iceland but must register with the Directorate of Immigration within 3 months of arrival. Registration requires proof of employment, self-employment, or sufficient financial means.',
      duration: 'Indefinite (with registration)',
      link: 'https://island.is/en/register-new-domicile-in-iceland'
    },
    {
      name: 'Student Residence Permit',
      targetAudience: 'International students',
      useCase: 'For students enrolled at a recognized Icelandic educational institution (University of Iceland, Reykjavik University, University of Akureyri). Requires proof of enrollment, financial means, and health insurance. Part-time work is permitted.',
      duration: 'Duration of studies (renewed annually)',
      link: 'https://island.is/en/study-in-iceland'
    }
  ],
  requirements: [
    {
      title: 'Kennitala (National ID Number)',
      explanation: 'A 10-digit identification number issued to all registered residents of Iceland by Registers Iceland (Thjodskra). It encodes your date of birth and is the key to virtually every system in the country.',
      importance: 'Without a Kennitala, you cannot open a bank account, sign a phone contract, register at a gym, access the healthcare system, rent an apartment, or even get a library card. It is the most important number in your Icelandic life. You receive it upon registering your legal domicile. There are temporary "system kennitalas" for short-term workers, but a domicile-linked one is needed for full access to services.',
      link: 'https://www.skra.is/en/id-numbers/'
    },
    {
      title: 'IceKey (Islykill) and Electronic ID (Rafraen Skilriki)',
      explanation: 'IceKey is the basic digital login credential for government portals. Rafraen Skilriki (Electronic ID) is the upgraded version, installed on your SIM card or available through an app, providing full digital authentication for banking, government services, and document signing.',
      importance: 'Once you have a Kennitala, obtain your IceKey immediately and upgrade to Electronic ID at a bank branch (Landsbankinn, Islandsbanki, or Arion banki). Without Electronic ID, you cannot access online banking, file taxes, view health records, or complete most digital government interactions. It is the digital backbone of life in Iceland.',
      link: 'https://www.skra.is/en/people/electronic-id/'
    },
    {
      title: 'Legal Domicile Registration (Logheimili)',
      explanation: 'All residents must register their legal address (logheimili) with Registers Iceland. This determines your municipality, tax obligations, healthcare clinic assignment, and voting eligibility.',
      importance: 'Your domicile registration triggers enrollment in the national healthcare system (after a 6-month waiting period for full coverage), assigns your local tax municipality, and enables access to municipal services. Incorrect or missing registration limits your access to essential services. Your landlord must approve the registration.',
      link: 'https://www.skra.is/en/people/change-of-address/'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening an Icelandic bank account requires your Kennitala, passport, and proof of Icelandic address. The three main banks are Landsbankinn, Islandsbanki, and Arion Banki. Account opening is done in person at a branch.',
      importance: 'A local bank account is essential for salary payments, rent, and daily transactions. Iceland is largely cashless; card payments and mobile banking (through the bank apps) handle nearly all transactions. International transfers are possible but can be slow due to Iceland\'s position outside the EU banking system. The Icelandic Krona (ISK) is the only accepted currency.',
      link: 'https://www.landsbankinn.is/en'
    }
  ],
  jobsAndIncome: {
    overview:
      "Iceland's job market is tiny but faces chronic labor shortages in several sectors, including tourism, healthcare, construction, IT, and fishing/food processing. Reykjavik and the surrounding capital region concentrate nearly all professional roles. Unemployment is consistently among the lowest in Europe (typically 3-5%). English is widely spoken in most workplaces, though Icelandic is important for integration and career advancement. The country has strong union representation, and collective agreements (kjarasamningar) govern wages and working conditions across sectors.",
    whereToLook: [
      "Alfred.is (Icelandic job board)",
      "LinkedIn",
      "Vinnumalastofnun (Directorate of Labour job listings)",
      "Company career pages (Islandsbanki, Marel, CCP Games, Landspitali Hospital)",
      "Staffing agencies like Adecco Iceland and Capacent"
    ],
    realityChecks: [
      "The job market is very small; personal networks and word-of-mouth matter enormously. Attend industry events and join community groups.",
      "Many roles, particularly in tourism and construction, are seasonal with fluctuating hours and intensity between summer and winter.",
      "Collective agreements set minimum wages by sector, typically ISK 400,000-450,000/month for unskilled work, significantly higher for skilled roles.",
      "Icelandic language proficiency opens doors that remain closed to English-only speakers, especially in public sector and local companies."
    ]
  },
  salaryReality: {
    overview:
      "Icelandic salaries are high in absolute terms, with average monthly earnings around ISK 750,000 (approximately USD 5,300). However, the extreme cost of living, particularly for housing, groceries, and dining out, significantly reduces disposable income. Salaries are governed by collective agreements negotiated between unions and employer associations, providing strong worker protections but also meaning salary negotiation is more constrained than in some countries.",
    realityChecks: [
      "Groceries are extremely expensive: a weekly shop for two can easily exceed ISK 20,000-30,000 (USD 140-210). Fresh vegetables, alcohol, and imported goods carry premium prices.",
      "The Icelandic Krona (ISK) fluctuates against major currencies, affecting purchasing power for international purchases and savings.",
      "Union membership is nearly universal and mandatory pension contributions (15.5% combined employer and employee) are significant but build strong retirement savings.",
      "Housing costs in Reykjavik consume a large share of income: a one-bedroom apartment rents for ISK 200,000-300,000/month (USD 1,400-2,100)."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Mandatory pension fund contributions (4% employee + 11.5% employer, totaling 15.5%)",
      "Union membership fees (typically 0.7-1% of salary)",
      "Extremely high grocery and consumer goods prices due to import dependence",
      "Housing costs in the capital region that can consume 30-40% of net income"
    ]
  },
  housingSystem: {
    overview:
      "Iceland's housing market, particularly in Reykjavik, is tight and competitive. Demand consistently exceeds supply, driving rents to levels that surprise even newcomers from expensive cities. The rental market is primarily private, with most listings found on Leigulistinn.is, Facebook housing groups (e.g., Leiga/Leigu), and through word of mouth. Popular neighborhoods in Reykjavik include 101 Reykjavik (downtown, walkable, expensive), Vesturbaejar (residential, family-friendly), Seltjarnarnes (quiet, coastal), and Kopavogur/Hafnarfjordur (suburban, more affordable).",
    expectations:
      "Expect high rents, short-term leases (often 6-12 months), and strong competition for quality properties. Landlords typically require proof of employment or income and first month's rent plus deposit upfront. Temporary housing (Airbnb, guesthouses) for the first few weeks while searching is common. Heating costs are remarkably low thanks to geothermal energy (hot water is essentially free), but electricity for other uses is metered. Many apartments come partially furnished."
  },
  healthcareReality:
    "Iceland's public healthcare system, operated by Icelandic Health Insurance (Sjukratryggingar Islands), provides high-quality care to all legal residents. However, new residents face a 6-month waiting period before qualifying for full national health insurance coverage; private insurance is essential during this period. Landspitali (the National University Hospital) in Reykjavik is the country's main hospital, handling everything from routine care to complex surgeries. Primary care is delivered through health clinics (heilsugaeslustodvar) assigned based on your registered domicile. Patient co-payments apply but are capped annually (around ISK 50,000). Waiting times for non-urgent specialist appointments can stretch to weeks or months given the small number of specialists. For highly specialized procedures, patients are sometimes sent abroad (typically to Denmark or the UK) at the healthcare system's expense. Pharmacies (apotekid) are well-stocked, and prescriptions are managed through the Heilsuvera digital health portal.",
  digitalLife: {
    overview:
      "Iceland is one of the most digitally connected countries in the world, with near-universal internet penetration, excellent mobile coverage (even in remote areas), and a society that conducts most daily business digitally. Online banking, digital government services (island.is), and cashless payments are the norm. The digital infrastructure is supported by 100% renewable energy (geothermal and hydroelectric).",
    essentials: [
      "Kennitala (required for any digital service registration)",
      "Electronic ID (Rafraen Skilriki) for banking and government portals",
      "Heilsuvera (national health portal for appointments, prescriptions, and records)",
      "Siminn or Vodafone Iceland mobile plan"
    ],
    whatSurprisesNewcomers: [
      "The Kennitala is required for literally everything digital, creating a chicken-and-egg problem during your first days before registration is complete.",
      "Iceland is virtually cashless; even small amounts (ISK 200 for a parking meter) are paid by card. Some businesses no longer accept cash at all.",
      "The island.is government portal is genuinely comprehensive and well-designed, handling everything from tax returns to domicile changes.",
      "Internet speeds are among the fastest in the world, making remote work genuinely comfortable even during winter storms."
    ]
  },
  culture: {
    text: "Icelandic culture is shaped by isolation, extreme nature, and a small population that has turned creative self-reliance into an art form. Icelanders are fiercely independent, egalitarian, and refreshingly unpretentious. There is virtually no class system; plumbers and professors drink at the same bars, and wealth is not displayed. The 'Islendingabok' (Book of Icelanders) database means most Icelanders can trace their genealogy back to the settlement era (9th century), and the smallness of the community means reputation matters enormously. Swimming culture is central to social life: geothermally heated pools (sundlaugar) are in every town and serve as community living rooms where neighbors catch up, politics are discussed, and deals are made in the hot pot (heitur pottur). The literary tradition is profound (Iceland publishes more books per capita than any country), and the Sagas are a living cultural touchstone. Creativity is valued and supported: a significant percentage of the population writes, paints, or plays music.",
    highlights: [
      "Swimming pools (sundlaugar) are the social hubs of Iceland. Every town has at least one geothermally heated pool. Shower naked (thoroughly, with soap, without a swimsuit) before entering; this is strictly enforced and culturally non-negotiable.",
      "Icelanders address everyone by first name, including the President, Prime Minister, and their bosses. There are no surnames in the traditional sense; patronymics (father's name + son/dottir) are used.",
      "The 'Jolabokaflod' (Christmas Book Flood) is a national tradition where books are exchanged on Christmas Eve and the rest of the evening is spent reading and eating chocolate.",
      "Icelanders believe in (or at least respect the possibility of) Huldufolk (hidden people/elves). Road construction has been rerouted to avoid disturbing rocks believed to be elf dwellings. This is treated with humor but genuine cultural respect.",
      "Runtur (the weekend pub crawl circuit in downtown Reykjavik) is a social institution, particularly on Friday and Saturday nights. The evening starts late (11 PM+) and ends in the early morning hours."
    ]
  },

  transportationMobility:
    "Public transport in Reykjavik is operated by Strato (formerly Straseto), with buses covering the capital region. Service is reliable but infrequent by European standards, with limited evening and weekend coverage. The Klappid app handles route planning and digital tickets. Outside Reykjavik, there is essentially no public transport; car ownership is practically mandatory for rural living and Ring Road travel. Driving in Iceland requires extreme weather awareness: winter conditions include ice, snow, severe winds, and sudden visibility drops. The Ring Road (Route 1) circles the entire island (1,322 km). Highland interior roads (F-roads) require 4x4 vehicles and are only open in summer. Cycling is growing in Reykjavik but challenging in winter due to wind and ice. Domestic flights (Icelandair, Eagle Air) connect Reykjavik to Akureyri, Isafjordur, and Egilsstadir, essential for accessing the more remote regions.",

  internationalConnectivity:
    "Keflavik International Airport (KEF), located 50 km from Reykjavik, is Iceland's main international gateway and a major transatlantic stopover hub. Icelandair and PLAY airlines offer extensive connections to North America (New York, Boston, Toronto, Washington DC, Denver) and Europe (London, Copenhagen, Paris, Amsterdam, Frankfurt). The airport's position halfway between North America and Europe makes it a natural stopping point, and Icelandair's stopover program encourages multi-day visits. Flight times are approximately 3 hours to London, 5-6 hours to New York, and 3 hours to Copenhagen. There are no rail or road connections to other countries; all international travel is by air.",

  travelExploration:
    "Iceland's landscapes are staggering and accessible. The Golden Circle (Thingvellir National Park, Geysir geothermal area, Gullfoss waterfall) is the classic day trip from Reykjavik. The South Coast features black sand beaches at Vik, Skogafoss and Seljalandsfoss waterfalls, and the Jokulsarlon glacier lagoon. The Snaefellsnes peninsula is nicknamed 'Iceland in miniature' for its concentration of natural features. The Westfjords offer the most remote and dramatic fjord scenery. The northern town of Akureyri (Iceland's 'second city' with 19,000 people) provides access to whale watching in Husavik and the volcanic landscapes of Myvatn. The central highlands (only accessible June-September) offer otherworldly desert landscapes. The Northern Lights (September-March) and midnight sun (June-July) are defining natural phenomena that shape the rhythm of life and tourism.",

  considerations: [
    "Extreme Cost of Everything: Iceland is consistently ranked among the world's most expensive countries. Fresh vegetables, alcohol (purchased only at state-run Vinbudin stores), dining out, and consumer goods command premium prices. A restaurant meal for two easily exceeds ISK 15,000-25,000 (USD 105-175). Budget-conscious residents shop at Bonus (the cheapest supermarket) and buy alcohol at the duty-free shop upon airport arrival.",
    "Winter Darkness: In December, Reykjavik receives only about 4-5 hours of daylight (11 AM to 3 PM). The prolonged darkness affects mood, energy, and daily routines. Seasonal Affective Disorder (SAD) is common among newcomers. Vitamin D supplements, light therapy lamps, and active social life are essential coping strategies.",
    "Geographic Isolation: Iceland is an island in the North Atlantic with no land connections to anywhere. Travel to other countries is always by plane, often expensive, and subject to weather disruptions. This creates a sense of isolation that some find peaceful and others find constraining, especially during long winters.",
    "Healthcare Waiting Period: New residents must wait 6 months before qualifying for the national health insurance system (Sjukratryggingar). During this period, you must have private insurance and will pay full price for medical services. Plan your coverage carefully before arrival.",
    "Volcanic and Seismic Activity: Iceland sits on the Mid-Atlantic Ridge and is volcanically active. The 2010 Eyjafjallajokull eruption and 2023-2024 Reykjanes peninsula eruptions are reminders that volcanic activity is a genuine, ongoing reality. Earthquakes are frequent but usually minor. Monitor vedur.is (the Icelandic Met Office) for alerts."
  ],

  mistakes: [
    "Buying bottled water. Icelandic tap water comes straight from glacial and geothermal sources and is among the purest in the world. Buying bottled water is considered a waste of money and is viewed as a tourist tell.",
    "Underestimating the wind. Icelandic wind can be genuinely dangerous: strong enough to rip car doors off hinges, knock adults off their feet, and make driving hazardous. Always park facing into the wind, hold your car door tightly when opening, and check weather forecasts before outdoor activities.",
    "Expecting cheap alcohol. All alcohol above 2.25% ABV is sold exclusively at state-run Vinbudin (ATVR) stores, which have limited hours and high prices. The duty-free shop at Keflavik airport is a beloved Icelandic institution; most residents stock up on arrival.",
    "Tipping at restaurants or in taxis. Service is included in all prices, wages are high, and tipping is neither expected nor customary. Leaving a tip will not offend anyone, but it is not part of the culture.",
    "Skipping the pre-pool shower ritual. Icelanders shower naked and thoroughly with soap in the communal changing rooms before entering the pool. This is not optional; pool attendants will enforce it. Failure to follow this rule is one of the surest ways to draw disapproval."
  ],

  emergency: [
    {
      number: '112',
      service: 'General Emergency (Police, Fire, Ambulance, Search & Rescue)',
      description: 'The single emergency number for all services. Operators speak Icelandic and English. Iceland\'s search and rescue teams (ICE-SAR) are volunteer-based and highly skilled.'
    },
    {
      number: '1770',
      service: 'Medical Advice (Laeknavaktor)',
      description: 'Non-emergency medical advice helpline for health questions that do not require an ambulance. Available outside GP hours.'
    },
    {
      number: '112 App',
      service: '112 Iceland Safety App',
      description: 'Highly recommended smartphone app that sends your GPS location to rescue services in an emergency. Also allows you to check in your travel plans and trigger alerts if you do not return on time.'
    }
  ],
  sources: [
    {
      name: 'Island.is',
      category: 'Government Services',
      description: 'The central portal for all public services in Iceland, from visa applications to tax filing, domicile changes, and healthcare access.',
      link: 'https://island.is/en'
    },
    {
      name: 'Registers Iceland (Thjodskra)',
      category: 'Registration & ID',
      description: 'Responsible for Kennitala issuance, domicile registration, civil registry, and Electronic ID management.',
      link: 'https://www.skra.is/english/'
    },
    {
      name: 'Directorate of Immigration (Utlendingastofnun)',
      category: 'Immigration',
      description: 'Handles visa applications, residence permits, work permits, and citizenship applications for foreign nationals.',
      link: 'https://island.is/en/o/directorate-of-immigration'
    },
    {
      name: 'Directorate of Labour (Vinnumalastofnun)',
      category: 'Employment',
      description: 'Manages work permit applications, unemployment benefits, job listings, and labour market information.',
      link: 'https://vinnumalastofnun.is/en'
    }
  ],
  embassies: {
    description: 'For consular assistance, residency matters, and official guidance related to Iceland, consult the Icelandic Ministry for Foreign Affairs or an Icelandic embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/iceland',
    mfaLink: 'https://www.government.is/ministries/ministry-for-foreign-affairs/'
  },
  serviceDirectory: {
    title: "Service Directory - Iceland",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Iceland.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with residence permits, work visas, EEA registrations, and appeals in Iceland.",
        providers: [
          { name: "LOGOS Legal Services", link: "https://www.logos.is" },
          { name: "Landslog Law Offices", link: "https://www.landslog.is" },
          { name: "BBA // Fjeldco", link: "https://bba.is" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies handling residential sales and long-term rentals, primarily in the Reykjavik capital region.",
        providers: [
          { name: "Eignamidlun", link: "https://www.eignamid.is" },
          { name: "Fastar", link: "https://www.fastar.is" },
          { name: "RE/MAX Iceland", link: "https://www.remax.is" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax and accounting experts covering Icelandic income tax, social contributions, pension obligations, and business compliance.",
        providers: [
          { name: "Deloitte Iceland", link: "https://www2.deloitte.com/is" },
          { name: "PwC Iceland", link: "https://www.pwc.com/is" },
          { name: "KPMG Iceland", link: "https://home.kpmg/is/en/home.html" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International shipping and relocation services for household goods to and from Iceland.",
        providers: [
          { name: "Eimskip", link: "https://www.eimskip.com" },
          { name: "Samskip Logistics", link: "https://www.samskip.com" },
          { name: "Crown Relocations", link: "https://www.crownrelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Icelandic language courses and programmes for newcomers, from beginner to advanced conversational levels.",
        providers: [
          { name: "Mimir Simenntun", link: "https://www.mimir.is" },
          { name: "University of Iceland - Icelandic as a Second Language", link: "https://hi.is" },
          { name: "Tin Can Factory", link: "https://www.tincanfactory.is" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public healthcare system and private clinics available to registered residents and newcomers.",
        providers: [
          { name: "Landspitali (National University Hospital)", link: "https://www.landspitali.is" },
          { name: "Heilsugaeslan (Primary Care Clinics)", link: "https://www.heilsugaeslan.is" },
          { name: "Laeknastodin (Private Clinic)", link: "https://www.laeknastodin.is" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Employment services and recruitment firms connecting talent with Icelandic employers across key sectors.",
        providers: [
          { name: "Vinnumalastofnun (Directorate of Labour)", link: "https://vinnumalastofnun.is" },
          { name: "Alfred Jobs", link: "https://www.alfred.is" },
          { name: "Capacent", link: "https://www.capacent.is" }
        ]
      }
    ]
  }
};