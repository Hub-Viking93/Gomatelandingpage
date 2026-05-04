export const switzerland = {
  id: 'switzerland',
  slug: 'switzerland',
  name: 'Switzerland',
  region: 'Europe',
  complexity: 'High',
  languages: ['German', 'French', 'Italian', 'Romansh'],
  shortDescription: 'Alpine perfection with high wages and higher costs.',
  heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99',
  flagAlt: 'Flag of Switzerland',
  atAGlance: "Switzerland is a confederation of 26 cantons that operates with a precision most countries can only aspire to. Trains depart on the second, streets are spotless, and the bureaucracy — while heavy — actually functions. Salaries are among the highest in the world, with median incomes around CHF 6,500 per month, but the cost of living matches or exceeds them: a simple lunch in Zurich costs CHF 25-35, and health insurance alone runs CHF 300-500 per month per adult. The country is not in the EU but participates in Schengen and has bilateral agreements that give EU/EFTA citizens preferential access to the labor market. Non-EU nationals face strict quotas and employer sponsorship requirements. Swiss society is built on rules, consensus, and discretion. Neighbors will report you for recycling on the wrong day, doing laundry on Sunday, or letting your children make noise during quiet hours. Social integration is notoriously difficult — the Swiss value long-standing friendships and personal privacy, and small talk is not a gateway to deeper connection the way it is in Anglo-Saxon cultures. The country is divided into distinct linguistic regions: German-speaking (about 63%), French-speaking (23%), Italian-speaking (8%), and Romansh (less than 1%), and each region has its own cultural flavor. Despite the high costs and social reserve, the quality of life is exceptional — the natural beauty of the Alps, the safety, the public infrastructure, and the stability of the economy create an environment where daily life simply works at a level few places can match.",
  overview: {
    euStatus: 'Non-EU (Schengen)',
    stayLength: 'Up to 90 days',
    costOfLiving: 'Very High',
    primaryLanguages: 'German, French, Italian (Region dependent)',
  },
  visas: [
    {
      name: 'Permit L (Short-term Residence)',
      targetAudience: 'Temporary Workers',
      useCase: 'For employment contracts of up to one year or for specific short-term assignments. The permit is tied to a specific employer and job. It is issued by the cantonal migration office after the employer demonstrates the need for the hire. For non-EU/EFTA nationals, the position must be advertised locally first and quotas apply.',
      duration: 'Up to 1 year',
      link: 'https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta.html'
    },
    {
      name: 'Permit B (Residence)',
      targetAudience: 'Employed Residents',
      useCase: 'For workers with employment contracts exceeding one year or indefinite contracts. EU/EFTA citizens receive it relatively easily; non-EU/EFTA nationals face annual quotas set by the Federal Council. The permit is renewed every five years for EU/EFTA citizens and annually for others.',
      duration: '1 year (non-EU) or 5 years (EU/EFTA)',
      link: 'https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta.html'
    },
    {
      name: 'Permit C (Settlement)',
      targetAudience: 'Long-term Residents',
      useCase: 'Permanent residence permit available after 5 years (EU/EFTA nationals from certain countries) or 10 years of continuous residence. Grants freedom to change jobs and cantons without additional permits. Requires demonstrated integration including language skills.',
      duration: 'Indefinite (renewed every 5 years as formality)',
      link: 'https://www.ch.ch/en/foreign-nationals-in-switzerland/residence-permit/'
    },
    {
      name: 'Permit G (Cross-border Commuter)',
      targetAudience: 'Border Workers',
      useCase: 'For individuals living in a neighboring country (France, Germany, Italy, Austria, Liechtenstein) and working in Switzerland. Must return to country of residence at least once a week. Common in Geneva, Basel, and Ticino regions.',
      duration: '5 years (EU/EFTA)',
      link: 'https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta.html'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists, Short-term visitors',
      useCase: 'Tourism, family visits, or short business trips. Switzerland is part of the Schengen area despite not being in the EU. Available for nationals of countries requiring a visa for entry.',
      duration: 'Up to 90 days',
      link: 'https://www.sem.admin.ch/sem/en/home/themen/einreise/visum.html'
    }
  ],
  requirements: [
    {
      title: 'Municipal Registration (Einwohnerkontrolle / Contrôle des habitants)',
      explanation: 'You must register at your local municipal residents\' office within 14 days of arrival (the exact deadline varies by canton). You need your passport, rental contract, employment contract, and passport-size photos. Some communes also require a criminal record extract.',
      importance: 'This is the absolute first administrative step. Without municipal registration, you cannot activate your residence permit, open a bank account, arrange health insurance, or enroll children in school. You receive a registration confirmation (Anmeldebestätigung) that is required for nearly every subsequent process.',
      link: 'https://www.ch.ch/en/registration-with-residents-register/'
    },
    {
      title: 'Health Insurance (LAMal/KVG - Obligatory Basic Insurance)',
      explanation: 'Every person residing in Switzerland must have basic health insurance from a Swiss-licensed insurer. It is private but heavily regulated — all insurers must accept you regardless of health status for the basic plan. You choose your insurer, deductible level (CHF 300-2,500), and model (standard, HMO, Telmed).',
      importance: 'You must purchase health insurance within three months of arrival, and coverage is retroactive to your registration date. Monthly premiums range from CHF 250-500 per adult depending on canton, age, and chosen deductible. Premiums are paid by the individual, not deducted from salary. Failure to arrange insurance results in the canton assigning you to an insurer at a higher premium.',
      link: 'https://www.bag.admin.ch/bag/en/home/versicherungen/krankenversicherung.html'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a Swiss bank account requires your residence permit or registration confirmation, passport, and proof of employment. Major banks include UBS, Credit Suisse (now part of UBS), Zürcher Kantonalbank, PostFinance, and digital alternatives like Neon or Yuh.',
      importance: 'A Swiss bank account is essential for receiving your salary, paying rent, setting up direct debits for insurance and utilities, and daily transactions. Most landlords and employers require a Swiss IBAN. PostFinance is often the easiest option for new arrivals as it has fewer restrictions.',
      link: 'https://www.ch.ch/en/opening-bank-account/'
    },
    {
      title: 'AHV/AVS Number (Social Security)',
      explanation: 'The Swiss social security number (AHV-Nummer / numéro AVS) is a 13-digit identifier assigned to all residents. It is linked to your pension contributions (1st pillar), health insurance, and tax records.',
      importance: 'Your employer handles the initial registration. The AHV number appears on your health insurance card and is used across government and financial systems. Mandatory contributions (AHV/IV/EO) are deducted from your salary — approximately 5.3% employee share, matched by the employer.',
      link: 'https://www.ahv-iv.ch/en/'
    }
  ],
  jobsAndIncome: {
    overview: "Switzerland has one of the lowest unemployment rates in Europe and a highly skilled labor market. Key industries include financial services (Zurich, Geneva), pharmaceuticals (Basel — home to Novartis and Roche), engineering and manufacturing, IT, and international organizations (Geneva hosts the UN, WHO, WTO, ICRC, and many NGOs). Competition is fierce, and employers expect high qualifications and relevant experience.",
    whereToLook: [
      "Jobs.ch — the largest Swiss job portal",
      "LinkedIn — essential for professional and international roles",
      "Indeed Switzerland (ch.indeed.com)",
      "Company career pages, particularly for pharma (Novartis, Roche), banking (UBS), and tech (Google Zurich)",
      "Specialized recruitment agencies like Michael Page, Robert Half, and Hays"
    ],
    realityChecks: [
      "Local language skills (German, French, or Italian depending on region) are expected for most positions and are a significant competitive advantage.",
      "Hiring processes are thorough and can take 4-8 weeks, with multiple interview rounds and reference checks being standard.",
      "Non-EU/EFTA nationals face strict annual quotas — employers must prove no suitable local or EU candidate is available before sponsoring a permit.",
      "Networking matters enormously; Swiss hiring culture values personal recommendations and professional reputation over cold applications."
    ]
  },
  salaryReality: {
    overview: "Swiss salaries are among the highest globally, with median annual salaries around CHF 78,000-85,000 and significantly more in finance, pharma, and tech. However, the high cost of living means purchasing power is more comparable to a strong Western European salary than the headline numbers suggest. Tax rates are moderate (federal + cantonal + municipal typically 15-30% depending on income and canton).",
    realityChecks: [
      "Net income remains strong even after taxes, but mandatory health insurance premiums (CHF 300-500/month) are paid separately from salary.",
      "Mandatory pension contributions (AHV 1st pillar + BVG 2nd pillar) are substantial — typically 10-15% of gross salary combined employee/employer.",
      "Cost of living varies significantly by canton: Zurich and Geneva are most expensive, while Ticino and some rural cantons are more affordable.",
      "The 13th month salary is standard in many industries — your annual salary is paid in 13 installments, not 12."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Health insurance premiums — CHF 3,600-6,000 per adult per year, paid out of pocket, not deducted from salary",
      "Pension fund contributions (BVG/LPP 2nd pillar) — significant monthly deduction that varies by age and plan",
      "Childcare costs — among the highest in the world, often CHF 2,000-3,000+ per month for full-time nursery care",
      "Cross-border shopping savings — many residents near borders shop in France, Germany, or Italy to reduce grocery costs by 30-50%"
    ]
  },
  housingSystem: {
    overview: "The Swiss rental market is notoriously competitive, with vacancy rates below 2% in major cities. Most residents rent rather than own (homeownership is around 36%, among the lowest in Europe). Apartments are typically rented unfurnished, including without kitchen appliances in some cases. Popular areas include Zurich's Districts 1-7, Geneva's Eaux-Vives and Carouge, Basel's Kleinbasel, and Bern's Kirchenfeld. Rents range from CHF 1,500-2,500 for a two-bedroom apartment in Zurich to CHF 1,200-1,800 in smaller cities.",
    expectations: "Finding an apartment requires patience and persistence. You will compete with many applicants and need a complete dossier: employment contract, salary statements, debt enforcement register extract (Betreibungsauszug), references, and sometimes a personal letter explaining why you want the apartment. Deposits of up to three months' rent are placed in a blocked bank account (Mietkautionskonto). Lease terminations typically require three months' notice on specific dates. The state has strong tenant protections, and rent increases must be justified."
  },
  healthcareReality: "Switzerland has one of the best healthcare systems in the world, but it is entirely privately funded through mandatory insurance. The basic insurance (Grundversicherung/assurance de base) covers a comprehensive list of treatments, medications, and hospital stays. You choose a deductible (Franchise) of CHF 300-2,500 per year — higher deductible means lower monthly premiums. After the deductible, you pay 10% of costs up to an annual cap of CHF 700 (adults). Major hospital groups include Hirslanden (private), Inselspital Bern (university), UniversitätsSpital Zürich (USZ), and Hôpitaux Universitaires de Genève (HUG). Wait times for specialists are generally short. Dental care is NOT covered by basic insurance and is expensive — routine cleaning costs CHF 200-350. Many expats take supplementary insurance for dental, alternative medicine, or private hospital rooms.",
  digitalLife: {
    overview: "Switzerland is highly digitized in daily transactions — contactless payments, mobile banking, and online shopping work seamlessly. However, government services are canton-dependent, and some administrative processes remain surprisingly paper-based. Each canton has its own e-government portal, and there is no single unified digital identity system (though SwissID is gaining adoption).",
    essentials: [
      "SwissID — emerging digital identity for government and private services",
      "SBB Mobile app — essential for train tickets and public transport across the country",
      "Twint — the dominant Swiss mobile payment app, accepted almost everywhere",
      "Comparis.ch — essential comparison platform for insurance, housing, and telecom"
    ],
    whatSurprisesNewcomers: [
      "Switzerland is NOT in the EU, so EU mobile roaming does not apply — Swiss SIM cards or specific plans are needed to avoid massive roaming charges.",
      "Administrative processes vary by canton, meaning what works in Zurich may be completely different in Geneva.",
      "Despite being a tech hub, many official processes still require physical letters, in-person appointments, and paper signatures.",
      "Cash is declining but still commonly used, especially in smaller towns and at markets — CHF 1,000 banknotes exist and are accepted."
    ]
  },
  culture: {
    text: "Swiss culture varies significantly by linguistic region, but shared values include punctuality, discretion, modesty, and respect for rules. In the German-speaking part, life is orderly and direct; in the French-speaking Romandie, there is more Mediterranean flair and social warmth; in Italian-speaking Ticino, the pace is slower and the food is better. The 'Röstigraben' (literally 'hash brown divide') is the playful term for the cultural line between German and French Switzerland. Displays of wealth are frowned upon despite widespread affluence — driving a flashy car or talking about your salary is considered vulgar. Swiss social life revolves around clubs and associations (Vereine): joining a sports club, choir, or hiking group is one of the most effective ways to build a social network. Sundays are sacred quiet days, and many residential buildings have specific rules about noise, laundry, and recycling that are enforced by neighbors as much as by law.",
    highlights: [
      "Punctuality is non-negotiable. Arriving even five minutes late to a meeting or dinner is considered disrespectful. Swiss trains depart on the second.",
      "Greetings vary by region: three kisses on the cheek in French Switzerland (left-right-left), a firm handshake in German Switzerland. Always greet and say goodbye to everyone individually.",
      "Sundays are strictly quiet. No mowing, no drilling, no running the washing machine in shared basement laundry rooms. Some apartment buildings even restrict showering after 10 PM.",
      "Hiking is the national pastime. Saying 'Grüezi' (hello) to everyone you pass on a trail is expected. Switzerland has over 65,000 km of marked hiking paths.",
      "Recycling is taken extremely seriously. Garbage must be placed in official taxed bags (e.g., Züri-Sack in Zurich), and improper disposal can lead to fines. 'Trash detectives' investigate violations."
    ]
  },
  transportationMobility: "Switzerland has arguably the best public transport system in the world. The Swiss Federal Railways (SBB/CFF/FFS) operates an extraordinarily punctual and comprehensive rail network connecting every corner of the country. The Half-Fare Card (Halbtax) at CHF 185/year is one of the best investments for new residents, halving the cost of all train, bus, and boat tickets. The GA Travelcard (General Abonnement) at around CHF 3,860/year provides unlimited travel on the entire network. Cities have excellent tram and bus networks — Zurich's VBZ, Geneva's TPG, and Basel's BVB are all modern and reliable. The Gotthard Base Tunnel (57 km, the world's longest rail tunnel) connects the German and Italian speaking regions in 20 minutes. Car ownership is common but not essential in cities, and parking is expensive (CHF 200-300/month in Zurich). Speed limits are strictly enforced with fixed and mobile cameras, and fines escalate steeply with income for serious violations.",
  internationalConnectivity: "Zurich Airport (ZRH) is the primary international hub, with Swiss International Air Lines (SWISS) operating a comprehensive network to Europe, North America, Asia, and Africa. Geneva Airport (GVA) is the second major gateway, particularly for connections to France and international organizations. EuroAirport Basel-Mulhouse-Freiburg serves three countries. Switzerland's central European location makes it a crossroads — Paris is 4 hours by TGV, Milan is 3.5 hours by train through the Gotthard tunnel, Munich is about 4 hours by rail, and Vienna is reachable by overnight train. The country's compact size means you can drive from Zurich to Geneva in under 3 hours or to the Italian border in 2 hours.",
  travelExploration: "Despite being one of Europe's smaller countries, Switzerland offers staggering geographic diversity. The Alps dominate the south with iconic peaks like the Matterhorn, Jungfrau, and Eiger, while the Jura Mountains line the northwest and the Mittelland plateau hosts the major cities. The Swiss National Park in Graubünden is the oldest in the Alps. Lake Geneva, Lake Zurich, Lake Lucerne, and Lake Maggiore offer waterfront beauty and boat excursions. Scenic rail journeys like the Glacier Express (Zermatt to St. Moritz), Bernina Express (Chur to Tirano, Italy), and GoldenPass Line (Lucerne to Montreux) are world-famous. Weekend trips to neighboring countries are effortless — ski in Chamonix, shop in Milan, explore the Black Forest, or visit Liechtenstein (the entire country is a day trip from Zurich).",
  considerations: [
    "Cost of Living: Switzerland is one of the most expensive countries in the world. A basic lunch costs CHF 20-35, a cappuccino CHF 5-7, and a haircut CHF 50-80. Monthly health insurance premiums of CHF 300-500 per adult are paid out of pocket. Budget carefully before committing to a move.",
    "Garbage Tax: You must use official, taxed garbage bags (Züri-Sack in Zurich, Bebbi-Sagg in Basel, etc.). Putting trash in normal bags leads to fines, and 'Abfalldetektive' (garbage detectives) actually investigate illegally disposed waste to identify the owner.",
    "Housing Shortage: Vacancy rates in cities are extremely low (often under 1% in Zurich). Finding an apartment can take months, and you will compete with dozens of applicants. Start searching well before your arrival and prepare a complete application dossier.",
    "Social Integration: Making Swiss friends takes time and patience. The Swiss are reserved with strangers and social circles are established early in life. Joining local clubs (Vereine), sports teams, or volunteering organizations is the most effective path to genuine connections.",
    "3rd Pillar Pension: Switzerland's three-pillar pension system includes a voluntary private pillar (3a) that offers significant tax deductions — up to CHF 7,056 per year for employees (2024). Setting this up early is strongly recommended for long-term financial planning."
  ],
  mistakes: [
    "Making noise after 10 PM or on Sundays. This includes music, moving furniture, running washing machines in shared basements, and even flushing toilets loudly in older buildings. Neighbors will complain, and landlords take noise violations seriously.",
    "Assuming EU mobile roaming applies. Switzerland is not in the EU, and your European SIM card will charge international roaming rates unless you have a specific Switzerland-included plan. Get a Swiss SIM (Swisscom, Sunrise, Salt) immediately.",
    "Not carrying cash for smaller transactions. While card and Twint payments are widespread, some mountain huts, farmers' markets, and small shops remain cash-only. ATMs are widely available but charge fees for foreign cards.",
    "Hiking without preparation. The Alps are genuinely dangerous. Weather changes rapidly, trails can be icy or exposed, and rescue operations are expensive (a REGA helicopter rescue costs CHF 3,500+ without membership). REGA membership at CHF 40/year is highly recommended.",
    "Underestimating cantonal differences. Tax rates, school systems, bureaucratic procedures, and even cultural norms vary significantly between cantons. Research your specific canton, not just 'Switzerland' in general."
  ],
  emergency: [
    {
      number: '117',
      service: 'Police',
      description: 'Emergency police line. Available 24/7 across all cantons.'
    },
    {
      number: '144',
      service: 'Ambulance',
      description: 'Medical emergency and ambulance services. Operators available in German, French, Italian, and English.'
    },
    {
      number: '1414',
      service: 'REGA (Swiss Air-Rescue)',
      description: 'Helicopter rescue service, vital for mountain and remote area accidents. REGA membership (CHF 40/year) covers rescue costs for patrons.'
    }
  ],
  sources: [
    {
      name: 'ch.ch — Swiss Authorities Online',
      category: 'Government Services',
      description: 'The official portal of the Swiss Confederation, providing comprehensive guidance on registration, permits, insurance, taxes, and daily life.',
      link: 'https://www.ch.ch/en/'
    },
    {
      name: 'SEM (State Secretariat for Migration)',
      category: 'Immigration & Permits',
      description: 'Federal authority responsible for immigration policy, residence permits, work authorization, and naturalization.',
      link: 'https://www.sem.admin.ch/sem/en/home.html'
    },
    {
      name: 'Comparis',
      category: 'Comparison & Consumer',
      description: 'Essential Swiss comparison platform for health insurance, housing, telecom, and financial products. Widely used by residents.',
      link: 'https://en.comparis.ch/'
    },
    {
      name: 'BAG/OFSP (Federal Office of Public Health)',
      category: 'Healthcare',
      description: 'Official source for mandatory health insurance regulations, approved insurer lists, and premium comparisons.',
      link: 'https://www.bag.admin.ch/bag/en/home.html'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa and residency matters, and official guidance related to Switzerland, consult the Swiss Federal Department of Foreign Affairs (FDFA/EDA) or a Swiss embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/switzerland',
    mfaLink: 'https://www.eda.admin.ch/eda/en/home.html'
  },
  serviceDirectory: {
    title: "Service Directory - Switzerland",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Switzerland.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with residence permits, work authorization, employer compliance, and naturalization across Swiss cantons.",
        providers: [
          { name: "Fragomen Switzerland", link: "https://www.fragomen.com" },
          { name: "Lenz & Staehelin", link: "https://www.lenzstaehelin.com" },
          { name: "Vischer AG", link: "https://www.vischer.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms for long-term rentals and property searches across Swiss cantons and linguistic regions.",
        providers: [
          { name: "Homegate", link: "https://www.homegate.ch" },
          { name: "ImmoScout24 Switzerland", link: "https://www.immoscout24.ch" },
          { name: "Wüest Partner", link: "https://www.wuestpartner.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax advisors and accounting firms experienced with Swiss tax residency, cantonal taxation, cross-border income, and pillar 3a optimization.",
        providers: [
          { name: "PwC Switzerland", link: "https://www.pwc.ch" },
          { name: "KPMG Switzerland", link: "https://kpmg.com/ch" },
          { name: "EY Switzerland", link: "https://www.ey.com/en_ch" }
        ]
      },
      {
        name: "Moving Companies",
        description: "Relocation services covering international moves, customs clearance, and local Swiss relocations.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "Welti-Furrer Moving Services", link: "https://www.welti-furrer.ch" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Language schools offering German, French, Italian, and English courses for professional and integration purposes.",
        providers: [
          { name: "Migros Klubschule", link: "https://www.klubschule.ch" },
          { name: "Berlitz Switzerland", link: "https://www.berlitz.com/en-ch" },
          { name: "Inlingua Switzerland", link: "https://www.inlingua.ch" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Mandatory health insurance providers and private healthcare networks commonly used by Swiss residents.",
        providers: [
          { name: "Helsana", link: "https://www.helsana.ch" },
          { name: "CSS Insurance", link: "https://www.css.ch" },
          { name: "Hirslanden Group", link: "https://www.hirslanden.ch" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Widely used job portals and recruitment firms connecting professionals with Swiss employers.",
        providers: [
          { name: "Jobs.ch", link: "https://www.jobs.ch" },
          { name: "Michael Page Switzerland", link: "https://www.michaelpage.ch" },
          { name: "Robert Half Switzerland", link: "https://www.roberthalf.ch" }
        ]
      }
    ]
  }
};
