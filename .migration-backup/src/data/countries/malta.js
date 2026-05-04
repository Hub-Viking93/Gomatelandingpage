export const malta = {
  id: 'malta',
  slug: 'malta',
  name: 'Malta',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Maltese', 'English'],
  shortDescription: 'A historic island fortress with 300 days of sun and English as an official language.',
  heroImage: 'https://images.unsplash.com/photo-1527155431803-74e5f93c7111?',
  flagAlt: 'Flag of Malta',
  atAGlance: "Malta is a Mediterranean micro-state that punches far above its weight in global finance, gaming, and blockchain. This tiny archipelago (just 316 square kilometers, smaller than most cities) sits between Sicily and North Africa, offering 300 days of sunshine, honey-colored limestone architecture dating back 7,000 years, and English as an official language, making it one of the easiest EU countries for English speakers to integrate into. The economy has been transformed over the past two decades by iGaming (online gambling), financial services, aviation leasing, and a growing tech sector, creating a cosmopolitan workforce where over 25% of residents are foreign nationals. Daily life is intensely social and Mediterranean: villages celebrate their patron saint with elaborate festas (festivals) involving fireworks, brass bands, and street decorations throughout summer. The flip side of Malta's appeal is its challenges: the islands are extremely crowded (the most densely populated country in the EU), traffic is gridlocked, construction is constant and noisy, housing costs have risen sharply, and the summer humidity makes the 35C heat feel considerably worse. The desalinated tap water is safe but unpleasant tasting, and the flat, sun-baked landscape offers little natural shade. Maltese bureaucracy, while improving with EU compliance, can be slow and relationship-dependent. For those who can embrace the small-island lifestyle with its quirks, Malta offers a unique combination of EU membership, English-speaking environment, favorable tax structures, Mediterranean climate, and genuine historical depth that is difficult to replicate elsewhere.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'Medium',
    primaryLanguages: 'Maltese, English',
  },
  visas: [
    {
      name: 'Nomad Residence Permit',
      targetAudience: 'Digital nomads, Remote workers',
      useCase: 'For non-EU citizens working remotely for employers or clients outside Malta. Requires proof of remote employment, minimum gross monthly income of EUR 2,700 (or EUR 32,400 annually), adequate health insurance covering Malta, a rental agreement or proof of accommodation, and a clean criminal record. Remote income is not taxed in Malta under this permit.',
      duration: '1 year, renewable for up to 3 years',
      link: 'https://nomad.residencymalta.gov.mt/'
    },
    {
      name: 'Key Employee Initiative (KEI)',
      targetAudience: 'Senior professionals, Tech workers',
      useCase: 'A fast-track work permit (processed in 5 business days) for highly qualified professionals earning a minimum of EUR 30,000 annually. Designed for key employees in licensed sectors (iGaming, financial services, tech, aviation). The employer applies through Identity Malta. One of the fastest work permit processes in the EU.',
      duration: '1 year, renewable',
      link: 'https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/highly-qualified-individuals/key-employee-initiative/'
    },
    {
      name: 'Single Permit (Work and Residence)',
      targetAudience: 'Employed professionals',
      useCase: 'The standard combined work and residence permit for non-EU nationals employed by a Maltese company. The employer applies through Identity Malta, and the process includes a labor market test for non-KEI roles. Processing takes 4-8 weeks.',
      duration: '1 year, renewable',
      link: 'https://identita.gov.mt/'
    },
    {
      name: 'Global Residence Programme (GRP)',
      targetAudience: 'High-net-worth individuals, Retirees',
      useCase: 'A special tax status program for non-EU/EEA nationals. Requires the purchase or rental of qualifying property (minimum EUR 275,000 purchase or EUR 9,600/year rent in Malta, or EUR 220,000/EUR 8,750 in Gozo), payment of a minimum annual tax of EUR 15,000, and proof that you do not stay in any other single country for more than 183 days. Income remitted to Malta is taxed at a flat 15%.',
      duration: 'Indefinite, subject to annual compliance',
      link: 'https://mtca.gov.mt/personal-tax/individual/special-schemes/global-residence-programme-rules'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists, Short-stay visitors',
      useCase: 'For non-EU/EEA nationals requiring a visa for short visits up to 90 days within a 180-day period. Malta is a full Schengen member, so a Maltese Schengen visa allows travel across the entire Schengen area.',
      duration: 'Up to 90 days within 180-day period',
      link: 'https://foreignandeu.gov.mt/en/visa-and-consular/visa-to-malta/'
    }
  ],
  requirements: [
    {
      title: 'e-Residence Card',
      explanation: 'The primary identification document for non-Maltese residents, issued by Identity Malta. It contains biometric data and serves as your official ID within Malta. Applied for as part of the residence permit process.',
      importance: 'The e-Residence card is required for all official interactions: employment, banking, tax registration, healthcare access, renting, and utility registration. It replaces your passport as your daily ID. Always carry it or a copy. Renewal must be initiated before expiry to avoid gaps in legal status.',
      link: 'https://identita.gov.mt/'
    },
    {
      title: 'Tax Number (TIN)',
      explanation: 'A tax identification number issued by the Commissioner for Revenue (CFR). Required for all residents with income in Malta. The employer typically initiates registration for employees; self-employed individuals register directly.',
      importance: 'Malta operates a progressive income tax system (0% on the first EUR 9,100 for single residents, scaling up to 35% on income above EUR 60,000). The tax year runs January to December, with annual returns due by June 30. Malta\'s full imputation tax system and various tax programs (Global Residence Programme, Malta Retirement Programme, Highly Qualified Persons rules) make it attractive for international structuring. Understanding your specific tax position is essential.',
      link: 'https://cfr.gov.mt/'
    },
    {
      title: 'Rental Registration (Housing Authority)',
      explanation: 'All rental agreements in Malta must be registered with the Housing Authority by the landlord within 10 days of signing. The tenant receives a registration confirmation.',
      importance: 'An unregistered rental agreement cannot be used for residence permit applications, and the landlord faces penalties. Always insist that your landlord registers the contract. The registration confirmation is required as proof of address for residence applications, bank account openings, and utility registrations. This is a common friction point; some landlords attempt to avoid registration for tax reasons.',
      link: 'https://housingauthority.gov.mt/'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a Maltese bank account has become more complex due to enhanced anti-money-laundering (AML) regulations. Requirements include your e-Residence card (or passport with valid permit), proof of address, proof of income/employment, and sometimes a reference letter from your current bank. Major banks include Bank of Valletta (BOV), HSBC Malta, APS Bank, and BNF Bank.',
      importance: 'A local bank account is necessary for salary deposits, rent payments, and utility bills. Due diligence processes at Maltese banks have become lengthier (2-6 weeks for account opening), so start the process early. Malta uses the Euro (EUR). Card and contactless payments are widely accepted. Online banking apps are functional. Many expats also maintain Revolut or Wise accounts for international transfers and day-to-day spending while awaiting local bank account activation.',
      link: 'https://www.centralbankmalta.org/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Malta's economy is dominated by iGaming (online gambling, with over 300 licensed operators), financial services, tourism, aviation (Lufthansa Technik, SR Technics), film production (Malta Film Studios has hosted major Hollywood productions), and a growing tech and blockchain sector. The iGaming industry alone employs over 12,000 people, many of them foreign nationals. English is the working language in virtually all international companies. The small size of the economy means that professional networks overlap significantly, and reputation matters.",
    whereToLook: [
      "LinkedIn",
      "JobsinMalta.com (the leading local job portal)",
      "Keepmeposted.com.mt",
      "iGaming company career pages (Betsson, Tipico, LeoVegas, Evolution)",
      "MaltaPark.com (classifieds section with job listings)"
    ],
    realityChecks: [
      "The iGaming sector dominates hiring for international professionals. If you are not in gaming, financial services, or tech, the job market is significantly smaller.",
      "Many roles offer relocation packages (flights, temporary accommodation, settling-in allowance) rather than high base salaries, reflecting the difficulty of attracting talent to a small island.",
      "Malta's small size means professional circles are tight. Your reputation precedes you; word travels fast about both excellent and poor professionals.",
      "Employment contracts in Malta include mandatory social security contributions (10% employee, 10% employer up to a cap), which fund healthcare, pensions, and unemployment benefits."
    ]
  },
  salaryReality: {
    overview:
      "Salaries in Malta are moderate by Northern European standards but have risen significantly due to labor demand in iGaming, financial services, and tech. The national minimum wage is approximately EUR 213/week (EUR 925/month). Mid-level professionals in iGaming or fintech earn EUR 2,500-4,500/month gross. Senior roles and management positions range from EUR 5,000-10,000+ gross. The challenge is that housing costs have risen sharply, absorbing a larger share of income than newcomers expect.",
    realityChecks: [
      "Income tax is progressive: 0% on the first EUR 9,100 (single), then 15%, 25%, and up to 35% on income above EUR 60,000. Effective rates are lower for married couples filing jointly.",
      "Social security (NI) contributions are mandatory at 10% for employees (capped at approximately EUR 55/week), matched by the employer.",
      "The Highly Qualified Persons (HQP) tax scheme offers a flat 15% tax rate for eligible professionals in gaming, financial services, and aviation earning above EUR 86,938/year.",
      "Housing costs are the primary financial pressure: central/coastal area apartments have risen 50-80% in rent over the past 5 years, while salaries have not kept pace."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Housing costs: a 1-bedroom apartment in Sliema, St. Julian's, or Valletta costs EUR 900-1,400/month; moving inland (Birkirkara, Mosta, Naxxar) reduces this to EUR 600-900",
      "The cost of running a car (fuel, insurance, parking) versus the frustration of relying on public transport, which is free but slow and unreliable",
      "Summer electricity bills, which spike dramatically (EUR 100-250/month) due to air conditioning in a country where AC is essential from June through September",
      "Eating out costs: restaurant prices have risen significantly and are closer to Western European levels than Mediterranean neighbors"
    ]
  },
  housingSystem: {
    overview:
      "Malta's housing market is tight, expensive relative to salaries, and fast-moving. Popular expat areas include Sliema (central, seafront, walkable, busy), St. Julian's (nightlife hub, iGaming offices nearby), Gzira (slightly cheaper alternative to Sliema), Valletta (UNESCO capital, beautiful but limited stock), and Msida (near the university). Gozo, Malta's smaller sister island, offers significantly cheaper housing and a quieter lifestyle but requires a ferry commute. Most rentals are apartments; houses are rare and expensive.",
    expectations:
      "Expect to pay 1-2 months' deposit plus the first month's rent upfront. The market moves quickly; good apartments are taken within days. Search on MaltaPark.com, Facebook groups (Rent in Malta, Housing in Malta), and through agents. Always insist that the landlord registers the rental with the Housing Authority (mandatory but not always done). Inspect air conditioning (essential, not optional), water heater (check capacity), mold risk (common in older Maltese buildings due to humidity), and noise levels (construction and festa fireworks are significant noise sources). Furnished apartments are the norm."
  },
  healthcareReality:
    "Malta has a public healthcare system that is free at point of use for residents with valid social security contributions. Mater Dei Hospital in Msida is the main public hospital, modern and generally competent for most conditions. Wait times for specialist appointments and elective procedures can be long (months). EU citizens can access public healthcare with an EHIC/GHIC card. Most expats supplement with private healthcare for faster access. St. James Hospital Group, Da Vinci Health, and various private clinics offer consultations, diagnostics, and procedures with shorter wait times. A private GP consultation costs EUR 25-50. Private health insurance from local providers (GasanMamo, Atlas, Citadel) or international insurers (Bupa, Cigna) costs EUR 50-150/month. Pharmacies are well-distributed across both islands and many medications are available. For highly specialized procedures, some patients travel to the UK, Italy, or Germany.",
  digitalLife: {
    overview:
      "Malta has good digital infrastructure for a small island. Fiber internet from GO (Malta's main telco), Melita, and Epic delivers 100-500+ Mbps at EUR 25-45/month. 5G coverage from GO and Epic is expanding in populated areas. Mobile data plans are affordable (EUR 10-25/month for generous data). The government has invested in digital services through servizz.gov.mt, the central government services portal.",
    essentials: [
      "Tallinja (the public transport app; buses are free for residents with a Tallinja card, making it the cheapest transport option)",
      "Bolt (ride-hailing app, the primary alternative to taxis; Uber does not operate in Malta)",
      "Revolut (widely used for day-to-day spending, particularly while waiting for a local bank account to open)",
      "Wolt or Bolt Food (food delivery platforms covering most of Malta)"
    ],
    whatSurprisesNewcomers: [
      "Maltese banks have rigorous KYC/AML procedures that can make opening a bank account a multi-week process. Many newcomers rely on Revolut or Wise during this period.",
      "Public buses are free for residents with a personalized Tallinja card. The network covers most of Malta and Gozo but schedules can be unreliable, especially outside peak hours.",
      "Many government and utility processes still require physical visits or phone calls. The digital transformation is ongoing but incomplete.",
      "Malta's tiny size means that mobile coverage is excellent island-wide, and you are never more than 30 minutes from any point on the main island."
    ]
  },
  culture: {
    text: "Maltese culture is a unique Mediterranean blend shaped by 7,000 years of occupation by Phoenicians, Romans, Arabs, Normans, Knights of St. John, French, and British. The result is a society that is deeply Catholic (98% identify as Catholic), family-oriented, and socially conservative in many respects, while simultaneously cosmopolitan due to its history as a crossroads of civilizations. The festa (village festival) is the cultural highlight of the year: each of Malta's 68 parishes celebrates its patron saint with elaborate street decorations, brass band marches, religious processions, and spectacular fireworks displays, particularly from June through September. Fireworks are not gentle sparklers; Maltese festa fireworks include daytime petards that shake buildings and nighttime displays rivaling professional shows. Food culture centers on rabbit (fenkata, the national dish), pastizzi (flaky pastry filled with ricotta or mushy peas, sold for EUR 0.50 at every corner), ftira (Maltese bread with tomatoes and capers), and fresh seafood. Social life is communal: family gatherings, village events, and outdoor dining are the norm. The Maltese language is fascinating: a Semitic language (related to Arabic) written in Latin script with heavy Italian and English influence.",
    highlights: [
      "Festas are serious. Do not complain about the fireworks (including loud daytime petards). Maltese people are deeply proud of their festa traditions. Embrace them or at least tolerate them with good humor.",
      "Pastizzi are the unofficial national food. Sold at pastizzerie (tiny shops) across the islands for EUR 0.30-0.50 each. Crystal Palace in Rabat is legendary. Try both ricotta and pea (irkotta and piżelli) varieties.",
      "English is genuinely official and universal. Every Maltese person speaks English fluently (it is the language of education, courts, and business). Maltese is spoken among locals and learning even a few phrases (Bongu for good morning, Grazzi for thank you) earns warm appreciation.",
      "Driving is on the LEFT side of the road (a legacy of British rule). This catches out many European newcomers. Traffic is aggressive and road manners are poor by Northern European standards.",
      "Church dress codes are strictly enforced: cover shoulders and knees when entering any church. This applies to both men and women, including St. John's Co-Cathedral in Valletta."
    ]
  },
  transportationMobility:
    "Malta presents a transport paradox: the islands are tiny (27 km long, 14 km wide for the main island) but getting around is disproportionately time-consuming due to chronic traffic congestion, limited road infrastructure, and the absence of a rail system. Public buses operated by Malta Public Transport are free for residents (apply for a personalized Tallinja card), cover the entire island, and are the most economical option, but service frequency outside central routes is poor and buses are often late or crowded. Bolt is the primary ride-hailing app and is affordable (EUR 5-15 for most trips). Taxis (white, metered) are available but more expensive. Car ownership is common (Malta has one of the highest car-per-capita ratios in Europe) despite traffic and parking being nightmares, especially in Sliema, St. Julian's, and Valletta. Electric scooters (Bolt, Bird) and car-sharing services are emerging. The Gozo Channel ferry connects Malta to Gozo every 45 minutes (EUR 4.65 return, free for Gozo residents) and is essential for commuters living on Gozo.",
  internationalConnectivity:
    "Malta International Airport (MLA) in Luqa serves over 100 destinations with direct flights across Europe, North Africa, and the Middle East. Ryanair, Wizz Air, Air Malta (or its successor), easyJet, and Turkish Airlines are the primary carriers. Flight times: London 3 hours, Rome 1.5 hours, Paris 2.5 hours, Istanbul 3 hours, Dubai 6 hours. There are no direct long-haul flights; connections through London, Frankfurt, Istanbul, or Dubai serve intercontinental destinations. The airport is compact and efficient, with most of Malta reachable within 30 minutes. Ferry services to Sicily (Pozzallo and Catania) offer an alternative connection to mainland Europe, with crossing times of 1.5-4 hours.",
  travelExploration:
    "Despite its tiny size, Malta packs extraordinary historical and cultural density. Valletta, the capital, is a UNESCO World Heritage city with the magnificent St. John's Co-Cathedral (featuring Caravaggio's masterpiece), the Grand Master's Palace, and Baroque architecture at every turn. The Hypogeum of Hal Saflieni is a 5,000-year-old underground temple complex (book months in advance; only 80 visitors per day). The Megalithic Temples of Hagar Qim and Mnajdra predate the pyramids. The walled medieval city of Mdina ('The Silent City') offers stunning views and atmosphere. Gozo provides a quieter island experience with the Ggantija Temples, Ramla Bay (Malta's best beach), and the Azure Window site. For diving, Malta is one of the Mediterranean's top destinations with wrecks, caves, and exceptional visibility. The Three Cities (Birgu, Senglea, Bormla) across the Grand Harbour from Valletta offer authentic Maltese life away from the tourist trail. Weekend escapes to Sicily (1.5 hours by fast ferry) are popular.",
  considerations: [
    "Noise: Malta is loud. Construction is constant and starts early (sometimes before 7 AM). Festas involve daytime petards and evening fireworks that shake buildings. Traffic noise is persistent. If noise sensitivity is an issue, factor this heavily into housing choices (avoid ground floors, festa routes, and construction-adjacent buildings).",
    "Traffic: Malta has some of the worst traffic congestion in Europe relative to its size. Rush hour on the main arterial roads (Marsa junction, Regional Road, coast road) can turn a 10 km trip into a 45-60 minute ordeal. Remote work significantly improves quality of life by avoiding daily commutes.",
    "Humidity: Summer humidity (June-September) makes the 30-35C temperatures feel considerably worse. Buildings without AC are genuinely uncomfortable. Winter humidity (November-March) makes 10-15C feel colder than expected due to poor insulation in many older buildings. AC and dehumidifiers are investments, not luxuries.",
    "Island Fever: Malta is very small. After several months, the lack of geographic variety can feel confining. Regular trips to Sicily, mainland Europe, or North Africa (all a short flight away) help. Gozo provides a change of pace. Plan for periodic escapes.",
    "Housing Costs: Rental prices in central/coastal areas have risen dramatically. A budget of EUR 1,000-1,400/month for a decent 1-2 bedroom apartment in Sliema or St. Julian's is realistic in 2025-2026. Moving inland (Birkirkara, Mosta, Attard) reduces costs by 30-40% but increases commute dependency."
  ],
  mistakes: [
    "Complaining about festa fireworks. This is the fastest way to alienate Maltese neighbors and colleagues. Festas are sacred cultural events with centuries of tradition. Even if the 6 AM petards shake your apartment, express appreciation or at minimum, gracious tolerance.",
    "Wearing beachwear in churches, historical sites, or villages away from the coast. Malta is a Catholic country with conservative dress expectations in religious and cultural settings. Cover shoulders and knees, or carry a wrap.",
    "Expecting Northern European efficiency from public services and utilities. 'Mela' (a multipurpose Maltese expression roughly meaning 'well then' or 'it is what it is') captures the attitude toward bureaucratic delays. Build extra time into any administrative process.",
    "Drinking tap water and expecting it to taste good. Maltese tap water is mostly desalinated seawater and is technically safe but tastes poor due to the desalination process and aging pipe infrastructure. Most residents drink bottled or filtered water.",
    "Underestimating the summer heat and UV intensity. Malta's lack of natural shade, reflective limestone surfaces, and intense Mediterranean sun make sunburn and heat exhaustion real risks. Always carry water, wear sunscreen, and seek shade during midday hours from June through September."
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency (Police, Ambulance, Fire)',
      description: 'European unified emergency number. Operators speak Maltese and English.'
    },
    {
      number: '2545 6000',
      service: 'Mater Dei Hospital (Emergency)',
      description: 'Main public hospital emergency department in Msida, open 24/7.'
    },
    {
      number: '2156 2040',
      service: 'Gozo General Hospital (Emergency)',
      description: 'Emergency department for Gozo island, open 24/7.'
    }
  ],
  sources: [
    {
      name: 'Identity Malta',
      category: 'Immigration & Residency',
      description: 'Official agency for passports, visas, residence permits, and work permits in Malta.',
      link: 'https://identita.gov.mt/'
    },
    {
      name: 'Residency Malta Agency',
      category: 'Nomad & Special Residence Programmes',
      description: 'Manages the Nomad Residence Permit and other special residency programmes.',
      link: 'https://residencymalta.gov.mt/'
    },
    {
      name: 'Commissioner for Revenue (CFR)',
      category: 'Taxation',
      description: 'Tax authority handling tax registration, income tax filing, and compliance for residents and businesses.',
      link: 'https://cfr.gov.mt/'
    },
    {
      name: 'Visit Malta (Malta Tourism Authority)',
      category: 'Tourism & Travel',
      description: 'Official tourism body with destination guides, events, and visitor resources.',
      link: 'https://www.visitmalta.com/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa and residency matters, and official guidance related to Malta, consult the Maltese Ministry for Foreign and European Affairs or a Maltese embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/malta',
    mfaLink: 'https://foreignandeu.gov.mt/en/'
  },
  serviceDirectory: {
    title: "Service Directory - Malta",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Malta.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal and advisory services for residency permits, work authorization, and Malta's special programmes.",
        providers: [
          { name: "CSB Group", link: "https://www.csbgroup.com" },
          { name: "Fragomen Malta", link: "https://www.fragomen.com" },
          { name: "GVZH Advocates", link: "https://www.gvzh.com.mt" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Professionals handling property rentals and sales for expats and international residents.",
        providers: [
          { name: "Frank Salt Real Estate", link: "https://www.franksalt.com.mt" },
          { name: "QuickLets", link: "https://www.quicklets.com.mt" },
          { name: "Remax Malta", link: "https://www.remax-malta.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Maltese taxation, international structuring, and expat tax regimes.",
        providers: [
          { name: "Deloitte Malta", link: "https://www2.deloitte.com/mt" },
          { name: "KPMG Malta", link: "https://kpmg.com/mt" },
          { name: "Grant Thornton Malta", link: "https://www.grantthornton.com.mt" }
        ]
      },
      {
        name: "Moving Companies",
        description: "Relocation services for international shipping, customs clearance, and settling-in support.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "AGS Worldwide Movers", link: "https://www.agsmovers.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "English and Maltese language courses for newcomers and long-term residents.",
        providers: [
          { name: "EC Malta", link: "https://www.ecenglish.com" },
          { name: "EF Malta", link: "https://www.ef.com.mt" },
          { name: "IELS Malta", link: "https://www.iels.school" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major hospitals and private clinics commonly used by expats in Malta.",
        providers: [
          { name: "Mater Dei Hospital", link: "https://deputyprimeminister.gov.mt" },
          { name: "St James Hospital Group", link: "https://stjameshospital.com" },
          { name: "Da Vinci Health", link: "https://davincihealth.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms connecting international professionals with Maltese employers.",
        providers: [
          { name: "Konnekt", link: "https://www.konnekt.com" },
          { name: "Castille Resources", link: "https://www.castilleresources.com" },
          { name: "MISCO (Malta International Staffing)", link: "https://www.miscomalta.com" }
        ]
      }
    ]
  }
};
