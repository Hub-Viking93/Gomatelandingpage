export const newZealand = {
  id: 'new-zealand',
  slug: 'new-zealand',
  name: 'New Zealand',
  region: 'Oceania',
  complexity: 'Medium',
  languages: ['English', 'Māori'],
  shortDescription: 'Middle-earth landscapes, progressive values, and a quiet, safe life.',
  heroImage: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?',
  flagAlt: 'Flag of New Zealand',
  atAGlance: "New Zealand (Aotearoa in te reo Maori) is famous for its breathtaking landscapes, progressive values, and a lifestyle that genuinely prioritizes work-life balance. With a population of just over 5 million spread across two main islands, it offers a quiet, safe, and family-friendly environment that feels remarkably removed from the world's problems. Kiwis (as New Zealanders call themselves) are humble, innovative, and friendly, with a cultural emphasis on fairness, the outdoors, and 'giving it a go.' Auckland, the largest city (1.7 million), is multicultural and economically dominant but struggles with traffic and housing costs. Wellington, the compact capital, offers a vibrant cultural scene and government-sector employment. Christchurch has been rebuilt after the 2011 earthquake into a modern, innovative city. The cost of living is high relative to local wages, and housing quality is a genuine problem: many homes are poorly insulated, damp, and cold in winter, though the Healthy Homes Standards are gradually improving this. New Zealand is very far from everywhere else, which creates both a sense of security and isolation. For relocators seeking safety, natural beauty, clean air, and a progressive society, New Zealand delivers. The trade-offs are high housing costs, modest salaries by global standards, geographic remoteness, and a small economy with limited career variety.",

  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 9 months (NZeTA)',
    costOfLiving: 'High',
    primaryLanguages: 'English',
  },
  visas: [
    {
      name: 'Working Holiday Visa',
      targetAudience: 'Young adults (18-30 or 18-35 depending on country)',
      useCase: 'Available to citizens of over 45 partner countries. Allows working and traveling in New Zealand for 12-23 months depending on nationality. Very popular as a first step; many people convert to other visa types after their working holiday. Seasonal work in horticulture and viticulture can extend the visa.',
      duration: '12-23 months',
      link: 'https://www.immigration.govt.nz/new-zealand-visas/options/work/explore-work-visa-options'
    },
    {
      name: 'Skilled Migrant Category Resident Visa',
      targetAudience: 'Skilled workers seeking permanent residency',
      useCase: 'A points-based residence visa requiring 6 points based on a combination of skilled employment, income threshold (currently NZD 29.66/hour median wage), qualifications, or professional registration. This is the primary pathway to permanent residency for skilled workers.',
      duration: 'Permanent Residency',
      link: 'https://www.immigration.govt.nz/new-zealand-visas/options/live-permanently/all-resident-visas/skilled-migrant-category-resident-visa'
    },
    {
      name: 'Green List Straight to Residence',
      targetAudience: 'Workers in high-demand occupations',
      useCase: 'Fast-track residence for specific high-demand roles including doctors, nurses, engineers, IT professionals, construction managers, and other specified occupations. Requires a job offer or current employment in a Green List role paying at or above the median wage.',
      duration: 'Permanent Residency (direct or after 2 years work-to-residence)',
      link: 'https://www.immigration.govt.nz/new-zealand-visas/options/work/explore-work-visa-options/green-list-work-to-residence'
    },
    {
      name: 'Accredited Employer Work Visa (AEWV)',
      targetAudience: 'Workers with job offers from accredited employers',
      useCase: 'The main temporary work visa for foreign nationals with a confirmed job offer from an employer accredited by Immigration New Zealand. The employer must be accredited, the role must be advertised to New Zealanders first (with some exceptions), and the worker must meet health, character, and qualification requirements.',
      duration: 'Up to 3 years (renewable)',
      link: 'https://www.immigration.govt.nz/new-zealand-visas/visas/visa/accredited-employer-work-visa'
    },
    {
      name: 'Partnership-Based Visa',
      targetAudience: 'Partners of NZ citizens or residents',
      useCase: 'For partners (married, civil union, or de facto for 12+ months) of New Zealand citizens or residents. Can lead to a work visa and then residence. Requires substantial evidence of a genuine and stable relationship.',
      duration: '1-2 years (work visa), then eligible for residence',
      link: 'https://www.immigration.govt.nz/new-zealand-visas/visas/visa/partnership-based-temporary-visa'
    }
  ],
  requirements: [
    {
      title: 'IRD Number (Inland Revenue Department)',
      explanation: 'New Zealand\'s tax identification number, required for all employment and financial activities. Application is done online through the Inland Revenue website with your passport, visa, and New Zealand address.',
      importance: 'Without an IRD number, your employer must deduct tax at the highest rate (39%). You also need it to open a bank account that earns interest, contribute to KiwiSaver (pension), and file tax returns. Apply immediately upon arrival; processing takes a few days to a couple of weeks.',
      link: 'https://www.ird.govt.nz/'
    },
    {
      title: 'RealMe Digital Identity',
      explanation: 'New Zealand\'s government-backed digital identity and login system. RealMe provides a single login for accessing multiple government services including Immigration New Zealand, Companies Office, NZTA (transport), and Inland Revenue online portals.',
      importance: 'RealMe is your gateway to digital government services. A basic RealMe login can be created online, but a verified RealMe identity (equivalent to showing ID in person) requires visiting a participating PostShop with your passport. The verified level is needed for some banking and government services.',
      link: 'https://www.realme.govt.nz/'
    },
    {
      title: 'NHI Number (National Health Index)',
      explanation: 'A unique identifier used throughout New Zealand\'s healthcare system. You receive an NHI number when you first access any healthcare service (GP, hospital, pharmacy).',
      importance: 'Your NHI number links all your medical records, prescriptions, and interactions with the healthcare system. It is used at every healthcare touchpoint. You do not need to apply; it is assigned automatically upon your first healthcare visit, but knowing your number is useful for subsequent appointments.',
      link: 'https://www.health.govt.nz/'
    },
    {
      title: 'Bank Account and KiwiSaver',
      explanation: 'Opening a New Zealand bank account requires your passport, proof of NZ address, and IRD number. Major banks include ANZ, ASB, BNZ, Kiwibank, and Westpac. KiwiSaver is New Zealand\'s voluntary (opt-out) workplace pension scheme with employer contributions.',
      importance: 'A local bank account is essential for salary payments, rent, and daily transactions. New Zealand is largely cashless; contactless card payments are used for everything from coffee to parking. KiwiSaver enrollment is automatic for employees; you can opt out within 8 weeks but will lose the employer contribution (minimum 3% of salary). Choosing the right KiwiSaver fund matters for long-term savings.',
      link: 'https://www.sorted.org.nz/'
    }
  ],
  jobsAndIncome: {
    overview:
      "New Zealand's job market is skills-driven and faces persistent shortages in healthcare, construction, engineering, IT, teaching, and agriculture. Auckland dominates economically, with Wellington strong in government and creative sectors, and Christchurch growing in construction and tech. The market values practical skills, adaptability, and a 'can-do' attitude. Overseas experience is respected, but local experience, references, and understanding of New Zealand workplace culture are important for career progression.",
    whereToLook: [
      "Seek.co.nz (largest NZ job board)",
      "Trade Me Jobs",
      "LinkedIn",
      "Government jobs at careers.govt.nz and jobs.govt.nz",
      "Recruitment agencies: Hays, Robert Walters, Madison Recruitment"
    ],
    realityChecks: [
      "The market is relationship-driven; networking through industry events, LinkedIn, and community groups is essential for breaking in.",
      "Many employers prioritize candidates with NZ experience, local references, and an understanding of Kiwi workplace culture (flat hierarchies, team-oriented, informal communication).",
      "Work visas are often tied to specific employers, limiting job mobility. Changing employers may require a new visa application.",
      "Salary negotiation is less aggressive than in the US or UK; excessive salary demands can be off-putting in the egalitarian Kiwi culture."
    ]
  },
  salaryReality: {
    overview:
      "New Zealand salaries are moderate by OECD standards. The minimum wage is NZD 23.15/hour (as of 2024), and the median income is approximately NZD 60,000/year. Professional salaries in IT, engineering, and healthcare range from NZD 80,000-150,000+. Compared to Australia (New Zealand's primary comparison point), salaries are typically 20-30% lower, which drives significant emigration across the Tasman.",
    realityChecks: [
      "Net income feels tight relative to housing costs: Auckland rents for a three-bedroom house can exceed NZD 600-800/week.",
      "KiwiSaver contributions (3% minimum employee, 3% minimum employer) reduce take-home pay but build long-term savings.",
      "Income tax is progressive (10.5%-39%) with no tax-free threshold, meaning you pay tax from dollar one.",
      "The NZD fluctuates significantly against major currencies, affecting purchasing power for international commitments and savings transfers."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Housing costs that can consume 30-50% of household income in Auckland and Wellington",
      "Mandatory ACC (Accident Compensation Corporation) levies embedded in employment costs",
      "KiwiSaver contributions reducing take-home pay by 3-8% depending on chosen contribution rate",
      "High cost of everyday goods: groceries, petrol, and utilities are more expensive than many newcomers expect"
    ]
  },
  housingSystem: {
    overview:
      "Housing is New Zealand's most contentious issue. Supply has not kept pace with demand, particularly in Auckland and Wellington, driving prices to levels that are extreme relative to local incomes. Rentals are typically unfurnished and advertised on Trade Me Property, Realestate.co.nz, and through property management companies. Popular areas in Auckland include Ponsonby and Grey Lynn (trendy, central), Mt Eden (family-friendly), and the North Shore (suburban, beaches). In Wellington, popular areas include Te Aro (central), Thorndon, and Kelburn.",
    expectations:
      "Expect strong competition for quality rentals, strict income verification (typically 3-4 weeks' rent as bond/deposit, plus 1-2 weeks' rent in advance), and a formal application process through property managers. Insulation and heating quality vary enormously between properties: the Healthy Homes Standards require rental properties to meet minimum insulation, heating, ventilation, moisture, and drainage standards, but compliance is still catching up. Always inspect a property in person, check for dampness, mold, and heating provision, and ask about the Healthy Homes compliance statement. Heating costs in winter can be significant, as many homes rely on electric heaters rather than central heating."
  },
  healthcareReality:
    "New Zealand's public healthcare system provides subsidized care to residents and most visa holders. GP visits are partially subsidized (typically NZD 50-75 per adult visit after subsidy), and public hospital care is free for eligible residents. However, waiting times for non-urgent specialist appointments and elective surgeries can stretch to months. Many people use private health insurance (Southern Cross is the dominant provider) for faster access to specialists, surgery, and diagnostic imaging. ACC (Accident Compensation Corporation) is a no-fault accident insurance scheme that covers all injury-related medical costs for everyone in New Zealand, including visitors, regardless of how the injury occurred. In exchange, you cannot sue for personal injury. Prescriptions are subsidized (NZD 5 per item for most medications). Mental health services are available but access can be limited, particularly outside major cities. Emergency departments at public hospitals (Auckland City Hospital, Wellington Hospital, Christchurch Hospital) provide 24/7 care.",
  digitalLife: {
    overview:
      "New Zealand is well-digitized for daily life, with strong online banking, government services, and a population comfortable with digital tools. Fibre broadband (UFB - Ultra-Fast Broadband) is available in most urban areas, with rural connectivity improving through satellite and wireless solutions. The government's digital-first approach means many interactions can be handled online.",
    essentials: [
      "RealMe digital identity (gateway to government services)",
      "ANZ, ASB, or BNZ mobile banking app (contactless payments are universal)",
      "IRD myIR portal for tax management",
      "Healthpoint.co.nz for finding healthcare providers"
    ],
    whatSurprisesNewcomers: [
      "Unfurnished rentals are the absolute norm; you need to buy or rent everything from beds to curtains to whiteware (washing machines, fridges).",
      "Geographic distance affects online shopping: international delivery times are long (2-4 weeks) and shipping costs are high.",
      "Waiting times for non-urgent healthcare can be surprisingly long despite the otherwise efficient system.",
      "Mobile coverage is generally good in urban areas but drops off quickly in remote areas, mountains, and some rural zones."
    ]
  },
  culture: {
    text: "New Zealand culture is shaped by its Maori and European (Pakeha) heritage, its geographic isolation, and a national character defined by humility, ingenuity, and a deep love of the outdoors. The concept of 'tall poppy syndrome' means that bragging, showing off, or being arrogant is socially punished; modesty and understating achievements are valued. Maori culture is increasingly woven into national identity: te reo Maori (the Maori language) is one of three official languages, the haka is performed at state occasions and sports events, and concepts like manaakitanga (hospitality), whanaungatanga (kinship/belonging), and kaitiakitanga (guardianship of the environment) influence mainstream values. Weekends revolve around the outdoors: tramping (hiking), beach days, barbecues (not called 'BBQs' but 'barbies'), and watching rugby. The All Blacks are a source of deep national pride. Work-life balance is genuinely respected; leaving the office at 5 PM is normal, not a sign of laziness.",
    highlights: [
      "Learning a few te reo Maori greetings (kia ora - hello, ka kite - see you later, whanau - family) shows respect and is increasingly expected in professional settings.",
      "Rugby is the national obsession. Understanding the basics, knowing who the All Blacks are, and watching a live Super Rugby match are fast tracks to social integration.",
      "Never sit on tables or kitchen counters. In Maori culture, surfaces where food is prepared or eaten are tapu (sacred) and sitting on them is disrespectful.",
      "Tipping is not expected or customary. Service charges are not added to bills, wages are designed to be livable, and adding a tip can cause mild confusion.",
      "The 'Number 8 wire mentality' refers to the Kiwi tradition of improvising solutions from whatever is available (historically, fencing wire). Innovation, self-reliance, and practical problem-solving are deeply valued cultural traits."
    ]
  },

  transportationMobility:
    "Public transport varies significantly by city. Auckland has a growing network of trains (operated by Auckland Transport), buses, and ferries, plus the City Rail Link (CRL) under construction to expand the rail network. Wellington has a reliable commuter train and bus network plus an iconic cable car. Christchurch relies primarily on buses. Outside major cities, public transport is minimal to nonexistent; car ownership is practically essential. New Zealand drives on the left. The road network is well-maintained on main routes but narrows to single lanes in rural areas. Domestic flights on Air New Zealand, Jetstar, and regional carriers connect Auckland, Wellington, Christchurch, Queenstown, and other centers. InterCity and Manabus provide intercity coach services. Cycling infrastructure is growing, particularly in Christchurch and Wellington.",

  internationalConnectivity:
    "Auckland International Airport (AKL) is the main gateway, with direct flights to Australia (2-3 hours), Pacific Islands, Asia (Singapore 10 hours, Tokyo 11 hours), the US West Coast (Los Angeles 12 hours), and selected long-haul routes. Air New Zealand, Qantas, Singapore Airlines, Emirates, and Cathay Pacific are major carriers. Wellington and Christchurch handle some trans-Tasman routes. New Zealand's remoteness means international travel always involves long flights and significant costs. There are no rail or ferry connections to other countries.",

  travelExploration:
    "New Zealand's compact size belies its extraordinary diversity. The North Island offers Auckland's urban coastline, Rotorua's geothermal wonderland, the Tongariro Alpine Crossing (one of the world's best day walks), the Coromandel Peninsula's beaches, and Bay of Islands for sailing and dolphin swimming. The South Island delivers Queenstown's adventure sports capital, Milford Sound's dramatic fjords, the Franz Josef and Fox glaciers, Abel Tasman National Park's golden beaches and kayaking, and the Aoraki/Mount Cook region. The Great Walks (Milford Track, Routeburn Track, Abel Tasman Coast Track) are world-class multi-day treks. Wine regions in Marlborough (Sauvignon Blanc), Hawke's Bay (Bordeaux-style reds), and Central Otago (Pinot Noir) offer excellent tasting. Stewart Island at the southern tip provides kiwi bird spotting in the wild.",

  considerations: [
    "Housing Quality: Many New Zealand homes, particularly older ones, are poorly insulated, poorly heated, and prone to dampness and mold. The Healthy Homes Standards are improving rental stock, but progress is gradual. Always inspect heating, insulation, and ventilation before signing a lease. Heating costs in winter can be significant.",
    "Cost of Living: Groceries are expensive (limited domestic production of some items, high import costs), petrol is costly, and consumer goods carry a premium due to shipping distances. The supermarket duopoly (Countdown/Woolworths and New World/Pak'nSave) means limited price competition.",
    "UV Radiation: New Zealand sits under a thin ozone layer, and UV radiation is significantly stronger than at equivalent latitudes in the Northern Hemisphere. Sunburn can occur in as little as 10 minutes in summer. Wearing high SPF sunscreen, a hat, and sunglasses daily is essential, not optional.",
    "Biosecurity: New Zealand has among the strictest biosecurity regulations in the world. Importing food, plant material, seeds, or animal products without declaration can result in instant fines of NZD 400 or prosecution. Declare everything at customs.",
    "Earthquake Risk: New Zealand sits on the Pacific Ring of Fire. Earthquakes are frequent (the 2011 Christchurch earthquake killed 185 people). Know your drop-cover-hold procedure, have an emergency kit, and check the EQC (Earthquake Commission) website for preparedness information."
  ],

  mistakes: [
    "Confusing New Zealand with Australia. They are close friends but fierce rivals. Saying 'it is basically the same' or asking if New Zealand is part of Australia will genuinely offend. They have distinct cultures, accents, politics, and identities.",
    "Tipping at restaurants or cafes. Tipping is not customary in New Zealand. Service is included in the price, wages are set at livable levels, and leaving a tip can create mild confusion.",
    "Sitting on tables, counters, or pillows that are placed on the floor for sitting. In Maori culture, food-related surfaces are tapu (sacred) and sitting on them is disrespectful. This applies in workplaces and homes alike.",
    "Trying to import food, seeds, or plant material without declaring them at customs. New Zealand's biosecurity is taken extremely seriously. Even a forgotten apple in your bag can result in a NZD 400 instant fine.",
    "Underestimating driving distances and road conditions. While the country looks small on a map, many roads are narrow, winding, and through mountain passes. Auckland to Wellington is a 7-8 hour drive, not the 3 hours it might look like."
  ],

  emergency: [
    {
      number: '111',
      service: 'Police, Fire, Ambulance',
      description: 'New Zealand\'s primary emergency number for all life-threatening situations. Operators speak English and can arrange interpreters.'
    },
    {
      number: '105',
      service: 'Police Non-Emergency',
      description: 'For reporting crimes that have already occurred, lost property, and non-urgent police matters. Available online and by phone.'
    },
    {
      number: '0800 611 116',
      service: 'Healthline',
      description: 'Free 24/7 health advice line staffed by registered nurses. For health concerns that are not immediately life-threatening. Available in multiple languages.'
    }
  ],
  sources: [
    {
      name: 'Immigration New Zealand',
      category: 'Immigration & Visa',
      description: 'Official authority for all visa types, residence applications, work permits, and immigration policy.',
      link: 'https://www.immigration.govt.nz/'
    },
    {
      name: 'New Zealand Now',
      category: 'Settlement & Integration',
      description: 'Government guide for new migrants covering work, housing, healthcare, education, and settling in to New Zealand life.',
      link: 'https://www.newzealandnow.govt.nz/'
    },
    {
      name: 'Inland Revenue (IRD)',
      category: 'Tax & Finance',
      description: 'Manages tax registration, income tax, KiwiSaver, Working for Families credits, and all tax-related services.',
      link: 'https://www.ird.govt.nz/'
    },
    {
      name: '100% Pure New Zealand',
      category: 'Tourism',
      description: 'Official tourism portal with comprehensive information on destinations, activities, and practical travel planning.',
      link: 'https://www.newzealand.com/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to New Zealand, consult the Ministry of Foreign Affairs and Trade or a New Zealand embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/newzealand',
    mfaLink: 'https://www.mfat.govt.nz/'
  },
  serviceDirectory: {
    title: "Service Directory - New Zealand",
    description: "Examples of large, commonly used service providers people often interact with when relocating to New Zealand.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers & Licensed Advisers",
        description: "Professional assistance with visas, residence applications, work authorization, and immigration appeals in New Zealand.",
        providers: [
          { name: "Fragomen New Zealand", link: "https://www.fragomen.com" },
          { name: "Lane Neave Immigration", link: "https://www.laneneave.co.nz" },
          { name: "Malcolm Pacific Immigration", link: "https://www.malcolmpacific.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies assisting with rentals and property purchases across major cities and regions.",
        providers: [
          { name: "Barfoot & Thompson", link: "https://www.barfoot.co.nz" },
          { name: "Harcourts", link: "https://www.harcourts.co.nz" },
          { name: "Ray White New Zealand", link: "https://www.raywhite.co.nz" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Firms advising on New Zealand tax obligations, IRD compliance, KiwiSaver, and overseas income.",
        providers: [
          { name: "PwC New Zealand", link: "https://www.pwc.co.nz" },
          { name: "Deloitte New Zealand", link: "https://www2.deloitte.com/nz" },
          { name: "KPMG New Zealand", link: "https://kpmg.com/nz" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including shipping, customs clearance, and storage.",
        providers: [
          { name: "Crown Relocations New Zealand", link: "https://www.crownrelo.com" },
          { name: "Allied Pickfords New Zealand", link: "https://www.alliedpickfords.co.nz" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "English language training and te reo Maori courses for newcomers and long-term residents.",
        providers: [
          { name: "English New Zealand", link: "https://www.englishnewzealand.co.nz" },
          { name: "Te Wananga o Aotearoa (te reo Maori)", link: "https://www.twoa.ac.nz" },
          { name: "Kaplan International Languages NZ", link: "https://www.kaplaninternational.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public and private healthcare providers commonly accessed by residents and newcomers in New Zealand.",
        providers: [
          { name: "Southern Cross Healthcare", link: "https://www.southerncross.co.nz" },
          { name: "Te Whatu Ora (Health New Zealand)", link: "https://www.tewhatuora.govt.nz" },
          { name: "Ascot Hospital (Auckland)", link: "https://www.ascot.co.nz" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms supporting local and international professionals in the New Zealand job market.",
        providers: [
          { name: "Seek New Zealand", link: "https://www.seek.co.nz" },
          { name: "Robert Walters New Zealand", link: "https://www.robertwalters.co.nz" },
          { name: "Hays New Zealand", link: "https://www.hays.net.nz" }
        ]
      }
    ]
  }
};