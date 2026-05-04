export const seychelles = {
  id: 'seychelles',
  slug: 'seychelles',
  name: 'Seychelles',
  region: 'Africa',
  complexity: 'Low',
  languages: ['English', 'French', 'Seychellois Creole'],
  shortDescription: 'A 115-island archipelago in the Indian Ocean with the highest GDP per capita in Africa and one of the most welcoming immigration regimes on the continent.',
  heroImage: 'https://images.unsplash.com/photo-1617362985992-d0b6814cacef',
  flagAlt: 'Flag of Seychelles',
  atAGlance: "Seychelles is a 115-island archipelago in the western Indian Ocean, about 1,500 km east of mainland Africa, with a population of just around 100,000 - roughly the size of a small European town, spread across dozens of granite and coral islands. Despite that small scale, the country has built the highest GDP per capita in Africa, driven by high-value tourism (Seychelles operates at the luxury end of the market), tuna and fisheries, and a significant financial services and offshore sector. English, French, and Seychellois Creole (Kreol Seselwa) are all official languages; English dominates in government and business, French is culturally present, and Creole is the language of daily life and identity. Mahe, the largest island, holds around 90% of the population and the capital, Victoria - one of the smallest capital cities in the world. Praslin and La Digue, both short ferry rides from Mahe, complete the Inner Islands around which most economic and tourist life is organised; the Outer Islands are remote coral atolls accessed primarily by charter. The immigration regime is famously newcomer-friendly by regional standards: visitor entry is visa-free for virtually everyone (Seychelles issues a Visitor's Permit on arrival rather than a traditional visa), and the Workcation Retreat Program introduced in 2020 offers a formal framework for remote workers. For those seeking to work locally, a Gainful Occupation Permit (GOP) is the standard route. For newcomers, Seychelles is one of the easiest soft-landings in the region: English-friendly, politically stable, tropically beautiful, with functional infrastructure - but it is also small, expensive, and socially intimate in a way that means nothing stays private for long.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 3 months (Visitor\'s Permit, extendable)',
    costOfLiving: 'High',
    primaryLanguages: 'English, French, Seychellois Creole (Kreol Seselwa)',
  },
  visas: [
    {
      name: 'Visitor\'s Permit',
      targetAudience: 'Tourists, Short-term Business Visitors',
      useCase: 'Seychelles does not issue traditional tourist visas. A Visitor\'s Permit is issued free on arrival to virtually all nationalities, subject to proof of accommodation, onward ticket, and sufficient funds. Initially granted for up to 3 months and extendable up to a total of 12 months in-country.',
      duration: 'Up to 3 months (extendable up to 12 months total)',
      link: 'https://www.ics.gov.sc/'
    },
    {
      name: 'Workcation Retreat Program',
      targetAudience: 'Remote Workers, Digital Nomads',
      useCase: 'Introduced in 2020, this program offers a formal framework for remote workers employed by companies outside Seychelles to live in the country while working for their foreign employer or clients. Applied through the Department of Tourism with proof of remote employment, health insurance, and accommodation.',
      duration: 'Up to 1 year (renewable)',
      link: 'https://tourism.gov.sc/'
    },
    {
      name: 'Gainful Occupation Permit (GOP)',
      targetAudience: 'Employed Foreign Professionals',
      useCase: 'The standard work permit for foreign nationals employed by a Seychellois employer. Issued by the Department of Immigration and Civil Status, tied to a specific employer and role. The employer must demonstrate the role cannot reasonably be filled by a Seychellois citizen.',
      duration: 'Typically 1-5 years, renewable',
      link: 'https://www.ics.gov.sc/'
    },
    {
      name: 'Investor / Business Permit',
      targetAudience: 'Investors, Entrepreneurs',
      useCase: 'For foreign nationals investing in or running a registered Seychelles business. Coordinated with the Seychelles Investment Board (SIB) and the Department of Immigration. Requires a registered company, business plan, and minimum investment relevant to the sector (often around USD 100k for qualifying activities).',
      duration: 'Up to 5 years, renewable',
      link: 'https://www.sib.gov.sc/'
    },
    {
      name: 'Pensioner / Retiree Residence Permit',
      targetAudience: 'Retirees with Independent Means',
      useCase: 'For retirees not seeking local employment, requiring proof of stable independent income, health insurance, and accommodation in Seychelles. Processed through the Department of Immigration and Civil Status.',
      duration: 'Up to 5 years, renewable',
      link: 'https://www.ics.gov.sc/'
    }
  ],
  requirements: [
    {
      title: 'Gainful Occupation Permit (GOP) Card',
      explanation: 'Foreign workers receive a GOP card from the Department of Immigration and Civil Status, tied to a specific employer and role; any change requires re-application.',
      importance: 'The GOP card is the primary local ID for foreign workers - what banks, landlords, and government offices expect alongside the passport. It also anchors tax registration, social security, and healthcare access.',
      link: 'https://www.ics.gov.sc/'
    },
    {
      title: 'TIN (Tax Identification Number) with SRC',
      explanation: 'Issued by the Seychelles Revenue Commission (SRC). Required for formal employment, business registration, and filing Seychelles-source income.',
      importance: 'Employees have income tax withheld by the employer under the Income and Non-Monetary Benefits Tax Act. Self-employed professionals and investors file through SRC\'s online systems. SRC has digitised most routine interactions.',
      link: 'https://www.src.gov.sc/'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a bank account requires your passport, GOP or residence permit, TIN, proof of address, and often an employer or referee letter. Major banks include MCB Seychelles, Absa Bank Seychelles, Seychelles Commercial Bank, Nouvobanq, and Bank of Ceylon Seychelles.',
      importance: 'A Seychellois Rupee (SCR) account is needed for salary and daily life. Foreign currency accounts (USD, EUR, GBP) are widely available and practical given the share of tourism revenue in foreign currency. The Central Bank of Seychelles supervises the banking system. KYC is thorough, reflecting Seychelles\' post-FIU compliance reforms in financial services.',
      link: 'https://www.cbs.sc/'
    },
    {
      title: 'Seychelles Pension Fund (SPF) and Social Security',
      explanation: 'Employed foreign workers are generally enrolled in the Seychelles Pension Fund and contribute to social security alongside their employer. Details depend on role and contract.',
      importance: 'Contributions establish certain benefit entitlements. Healthcare is primarily funded through the general tax system rather than a separate insurance contribution, but private health cover is commonly added by employers for expatriates. Confirm specifics in the employment contract.',
      link: 'https://www.spf.sc/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Seychelles' economy runs on high-end tourism (global luxury resort brands operate on Mahe, Praslin, La Digue, and private-island leases), tuna and fisheries (the Indian Ocean Tuna cannery is among the country's largest employers), financial services and offshore structures, and government services. Expatriate roles concentrate in hospitality (chefs, general managers, dive instructors, spa therapists), marine and fisheries, offshore corporate services, international schools, and medical professions. The labour market is narrow - senior commercial roles and highly specialised positions are what typically justify GOP issuance.",
    whereToLook: [
      "Hospitality group career pages (Four Seasons, Constance, Six Senses, Anantara, Banyan Tree, Hilton, Raffles, Kempinski, Club Med, North Island, Fregate Island)",
      "MyJob.sc and the Department of Employment job board",
      "LinkedIn (narrower local footprint than East African markets but growing)",
      "Seychelles Investment Board (SIB) for investor opportunities",
      "Financial services firms and offshore corporate service providers based in Eden Island and central Victoria"
    ],
    realityChecks: [
      "The Seychellois labour market strongly prioritises citizens. GOPs are granted where genuinely scarce skills can be demonstrated, and mid-level roles are rarely open to foreigners.",
      "Hospitality packages often include housing (staff quarters), meals, flights, and medical cover, which offsets modest base salaries.",
      "Costs of living on Seychelles are high - food, fuel, consumer goods, and rent all reflect the island economy. Local professional salaries can feel tight once you step outside employer-provided housing.",
      "English is sufficient for most professional and administrative life. French and especially Kreol Seselwa open social doors - Creole is the warmth of daily life."
    ]
  },
  salaryReality: {
    overview:
      "Salary structures reflect a small island economy with high costs and a modest tax burden. Senior expatriates in hospitality management, financial services, and specialised medical roles often earn USD 40,000-100,000+ in total compensation, frequently with accommodation included. Local professional salaries are modest in USD terms but bear significant costs from imported goods.",
    realityChecks: [
      "Personal income tax on employment income is 15% up to a defined threshold and 20% above, with withholding by the employer. Non-monetary benefits tax applies to certain fringe benefits.",
      "Seychelles Pension Fund contributions apply to employees and employers for covered roles.",
      "Housing outside employer-provided accommodation: rentals on Mahe in residential areas (Beau Vallon, Eden Island, Anse Royale, Glacis, Roche Caiman) range from USD 1,000-3,500+ per month for furnished 2-3 bedroom apartments or houses.",
      "International school fees (International School Seychelles) run approximately USD 6,000-12,000 per child per year - lower than Nairobi or Addis but still meaningful."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Imported goods premium: almost everything is shipped in, and supermarkets (STC, Pick n Pay, SMB) carry 1.5-3x mark-ups versus mainland equivalents",
      "Transport: owning a car on Mahe is useful but fuel costs and vehicle prices are high. Public buses are cheap but limited in the evenings.",
      "Travel between islands: ferries between Mahe, Praslin, and La Digue, plus domestic flights via Air Seychelles, add up for those wanting to explore",
      "Utilities: electricity is relatively expensive given fuel-import reliance; air conditioning bills are significant for expatriate-standard accommodation"
    ]
  },
  housingSystem: {
    overview:
      "Housing on Mahe is concentrated around Victoria (central, urban by island standards), Beau Vallon (popular beach area, tourist-heavy), Eden Island (purpose-built marina development with modern apartments and villas, widely used by foreigners), Anse Royale (south, quieter), Glacis (north, views), and Roche Caiman. Praslin and La Digue have more limited rental markets, largely tied to tourism. Eden Island is the most established expatriate-friendly mixed-use development.",
    expectations:
      "Deposits of 1-3 months are standard. Reputable agents (Eden Island Property Management, Seychelles Sotheby's International Realty, CW Properties) handle much of the formal market; word-of-mouth and Facebook groups cover less formal listings. Always view in person where possible. Leases are typically 1 year. Foreign nationals cannot freely buy residential property without specific approvals and, in some cases, investment thresholds - Eden Island has streamlined arrangements for foreign buyers but other areas require Government approval."
  },
  healthcareReality:
    "Seychelles' healthcare system is primarily public, funded through the general tax system and free at the point of use for citizens, GOP holders, and residents. Seychelles Hospital in Victoria is the main public hospital, with smaller district hospitals and health centres across Mahe, Praslin, and La Digue. Quality of public care is good for routine and moderate cases. Private facilities are limited - most notable is the private wing of Seychelles Hospital and a small set of private GP practices and specialists. For highly complex or specialised care - advanced cancer treatment, major cardiac surgery, specialist paediatrics - patients routinely fly to Mauritius, South Africa, India, or Europe; employer packages for senior expatriates typically include international health insurance with evacuation cover. Mauritius is a common medevac destination given proximity (1.5 hours by flight) and modern hospital infrastructure. International insurance through Bupa, Cigna, AXA, or similar is standard in senior expatriate packages. Mahe is malaria-free; dengue cases have occurred in the past, so repellent and standard mosquito precautions apply.",
  digitalLife: {
    overview:
      "Seychelles has strong connectivity by small-island standards. Cable & Wireless Seychelles and Intelvision are the main telecom and broadband providers. Fibre broadband is available across Mahe, Praslin, and La Digue in most populated areas. 4G mobile coverage is good on the Inner Islands and patchy on the Outer Islands. Mobile money is less dominant than in mainland African markets; card payments and bank transfers do most of the daily work.",
    essentials: [
      "A local SIM (Cable & Wireless or Intelvision mobile) for data and local calls",
      "A bank account with an active mobile app (MCB and Absa are commonly used)",
      "Ride-hailing: taxis are the main option; there is no dominant ride-hailing app at the scale of Uber/Bolt, though private taxi services are easy to book",
      "Inter-island logistics: Cat Cocos and Inter-Island Ferry apps, and Air Seychelles booking for flights between Mahe, Praslin, and Desroches"
    ],
    whatSurprisesNewcomers: [
      "The island is small enough that anonymity is minimal. You will see colleagues, landlords, and neighbours at the supermarket and beach constantly. Reputation travels fast.",
      "Card payments are the default in the formal economy. Mobile money is present but far from dominant.",
      "Internet is generally reliable enough for remote work, but cable or satellite outages can happen; Starlink is available as a backup option.",
      "Inter-island travel is a core part of life - Cat Cocos ferry between Mahe and Praslin, and smaller boats and flights for La Digue and other islands. Factor this into housing and job location decisions."
    ]
  },
  culture: {
    text: "Seychellois culture is a warm Creole blend shaped by African, French, British, Indian, and Chinese influences, reflecting the island's history as a French colony from 1770, then British from 1814, with populations descended from African slaves, Indian labourers, and European settlers. Kreol Seselwa is the everyday language and the most intimate expression of Seychellois identity; English is the language of government and much of business; French remains present in culture and media. The social rhythm is relaxed and community-oriented - the country functions at roughly the population size of a European market town, so personal networks matter intensely. Family ties are central, as are the church (Catholic majority, with significant Anglican and Seventh-day Adventist communities) and neighbourhood events. The cuisine reflects the cultural mix: grilled fish, octopus curry, ladob (bananas or cassava cooked in coconut milk), and rice with fish or meat and a vegetable stew. Music centres on sega and moutya, both with African roots adapted into Creole forms. Environmental awareness runs deep - the country has protected around 50% of its land area and is a global leader in marine conservation.",
    highlights: [
      "Try to pick up basic Kreol Seselwa. English and French will carry you professionally, but Creole phrases - 'Bonzour', 'Mersi', 'Korek?' - open social doors quickly.",
      "Respect the small-community dynamic. Gossip travels fast; public disputes, complaints about staff, or flashy displays are remembered.",
      "Environmental norms are real. Single-use plastics are banned, snorkelers and divers are expected to respect the reefs, and casual poaching of shells, coral, or coco de mer is a serious legal matter.",
      "Dress relatively modestly off the beach. Beachwear belongs on the beach; Victoria and residential areas expect normal clothing.",
      "Take the pace as it comes. 'Seychellois time' is softer than Western schedules, but it is also a small place where things do generally get done."
    ]
  },
  transportationMobility:
    "Mahe's transport mix includes SPTC public buses (affordable, extensive network, limited in the evenings), private taxis, and personal cars. Roads around Mahe are paved and reasonably well-maintained; the main coastal road and the cross-island road connect the major settlements. Traffic is modest compared to mainland capitals but can build around Victoria at peak hours. Driving is on the left (British legacy). Praslin has a smaller but functional bus network; La Digue is famously car-light, with bicycles and ox-carts historically serving as main local transport, now supplemented by small electric buggies. Inter-island movement is fundamental: Cat Cocos ferry connects Mahe and Praslin (about 1 hour), Inter-Island Ferry and others connect Praslin and La Digue (15 minutes), and Air Seychelles domestic flights link Mahe to Praslin and the Outer Islands. For anyone working across islands, or with family on different islands, these ferries and flights are a structural part of daily planning.",
  internationalConnectivity:
    "Seychelles International Airport (SEZ) on Mahe is the main international gateway, with direct flights to multiple hubs. Air Seychelles is the national carrier, connecting to Mauritius, Mumbai, Tel Aviv, and Johannesburg among other destinations. Emirates operates multiple daily flights to Dubai; Ethiopian Airlines via Addis Ababa; Qatar Airways via Doha; Etihad via Abu Dhabi; British Airways seasonal to London; Air France to Paris (seasonal); Turkish Airlines to Istanbul; Edelweiss to Zurich; Condor to Frankfurt. Flight time to Dubai is about 4 hours, to Mumbai 5 hours, to London roughly 10 hours (typically via the Gulf). Praslin Airport (PRI) handles domestic flights and some charter connections. Seychelles' global air connectivity is exceptional for a country of its size, reflecting the importance of tourism.",
  travelExploration:
    "Seychelles offers some of the most celebrated beaches and marine environments in the world. Mahe's Beau Vallon, Anse Intendance, and Anse Royale are widely photographed; Praslin's Anse Lazio and Anse Georgette consistently appear on 'best beaches in the world' lists; La Digue's Anse Source d'Argent, with its pink-granite boulders, is among the most iconic images in tropical travel. The Vallee de Mai on Praslin is a UNESCO World Heritage site and the only place on earth where the endemic coco de mer grows naturally. Aldabra Atoll, roughly 1,150 km from Mahe, is another UNESCO site and home to giant tortoises and one of the largest undisturbed lagoon ecosystems on earth. Diving and snorkelling around the Inner Islands, Silhouette, and the Amirantes are world-class; whale shark encounters off Mahe (September-November) and manta ray cleaning stations draw specialist divers. Fregate, North Island, Denis, and Desroches are private-island reserves. Island-hopping is the defining domestic travel experience.",
  considerations: [
    "Size and anonymity: Seychelles is very small. Everyone you work with, rent from, or argue with is someone you'll see repeatedly. Reputation is currency.",
    "Cost of living: food, fuel, vehicles, and imported goods all carry significant premiums. Budget with margin if not on an employer-provided housing package.",
    "Healthcare limits: routine care is good, but complex cases routinely evacuate. International insurance with evacuation cover is essential for senior expatriates and families.",
    "Inter-island logistics: housing, schooling, and work choices that require regular island-hopping carry real time and cost. Factor this in before moving.",
    "Environmental regulation: single-use plastic is banned, marine protected areas enforce real rules, and possession of protected species or coral is a serious matter."
  ],
  mistakes: [
    "Treating Seychelles as a 'tax haven' first and a country second. Post-FIU reforms have aligned the economy with international transparency standards; structures that worked informally a decade ago do not today.",
    "Underestimating costs. Ocean-view paradise is real, but so are USD 40 grocery staples and expensive fuel.",
    "Assuming anonymity. In a country of around 99,000 people on a handful of islands, nothing stays private.",
    "Skipping Creole. English handles work; Creole handles everything else socially and earns genuine warmth.",
    "Disregarding conservation rules. Fines for plastic, protected species, or reef damage are real and enforced."
  ],
  emergency: [
    {
      number: '999',
      service: 'National Emergency',
      description: 'Unified emergency number for police, ambulance, and fire services. Available 24/7.'
    },
    {
      number: '112',
      service: 'Mobile Emergency',
      description: 'Alternative emergency number accessible from mobile phones, including without a SIM card.'
    },
    {
      number: '151',
      service: 'Police (Non-Emergency)',
      description: 'Non-emergency police contact for reporting incidents, making general inquiries, and following up on existing matters with the Seychelles Police.'
    }
  ],
  sources: [
    {
      name: 'Department of Immigration and Civil Status',
      category: 'Immigration',
      description: 'The authority responsible for visitor permits, Gainful Occupation Permits (GOP), residence permits, and civil status matters.',
      link: 'https://www.ics.gov.sc/'
    },
    {
      name: 'Department of Tourism (Workcation Program)',
      category: 'Remote Work Visa',
      description: 'Administers the Workcation Retreat Program for remote workers.',
      link: 'https://tourism.gov.sc/'
    },
    {
      name: 'Seychelles Revenue Commission (SRC)',
      category: 'Tax',
      description: 'Handles TIN registration, income tax, VAT, and filing for individuals and businesses.',
      link: 'https://www.src.gov.sc/'
    },
    {
      name: 'Seychelles Investment Board (SIB)',
      category: 'Investment',
      description: 'Supports investors with registration, incentives, and investor-linked permit guidance.',
      link: 'https://www.sib.gov.sc/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Seychelles, consult the Seychelles Ministry of Foreign Affairs and Tourism or a Seychelles embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/seychelles',
    mfaLink: 'https://www.mfa.gov.sc/'
  },
  serviceDirectory: {
    title: "Service Directory - Seychelles",
    description: "Examples of commonly used service providers people often interact with when relocating to Seychelles.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Law firms handling GOPs, residence permits, investor permits, and corporate immigration compliance.",
        providers: [
          { name: "Pardiwalla Twomey Lablache", link: "https://www.ptlchambers.com" },
          { name: "Appleby Seychelles", link: "https://www.applebyglobal.com/seychelles" },
          { name: "Sterling Offshore Seychelles", link: "https://www.sterlingoffshore.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies handling rentals and sales on Mahe, Praslin, and La Digue.",
        providers: [
          { name: "Seychelles Sotheby's International Realty", link: "https://www.sothebysrealty.com/eng/associate/seychelles" },
          { name: "Eden Island Property Management", link: "https://www.edenisland.sc" },
          { name: "CW Properties Seychelles", link: "https://www.cwproperties.sc" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Advisors experienced with SRC compliance, offshore structures, and cross-border tax planning.",
        providers: [
          { name: "PwC Seychelles (via Mauritius)", link: "https://www.pwc.com/mu" },
          { name: "BDO Seychelles", link: "https://www.bdo.sc" },
          { name: "Grant Thornton Seychelles", link: "https://www.grantthornton.sc" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International relocation providers handling household goods to and from Mahe.",
        providers: [
          { name: "AGS Movers Seychelles", link: "https://www.agsmovers.com" },
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Allied International Seychelles", link: "https://www.allied.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Creole and French language courses and cultural orientation providers.",
        providers: [
          { name: "Alliance Francaise des Seychelles", link: "https://www.alliancefrancaise.sc" },
          { name: "Lenstiti Kreol (Creole Institute)", link: "https://www.kreol.sc" },
          { name: "University of Seychelles - Language Centre", link: "https://www.unisey.ac.sc" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Hospitals, clinics, and insurers commonly used by expatriates in Seychelles.",
        providers: [
          { name: "Seychelles Hospital (Victoria)", link: "https://www.health.gov.sc" },
          { name: "Beau Vallon Clinic", link: "https://www.beauvallonclinic.sc" },
          { name: "Seychelles Medical & Dental Centre", link: "https://www.smdc.sc" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Platforms and agencies connecting international professionals with Seychellois employers.",
        providers: [
          { name: "MyJob.sc", link: "https://www.myjob.sc" },
          { name: "Department of Employment Seychelles", link: "https://www.employment.gov.sc" },
          { name: "Hospitality Careers Seychelles", link: "https://www.hospitalitycareers.sc" }
        ]
      }
    ]
  }
};
