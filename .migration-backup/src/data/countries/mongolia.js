export const mongolia = {
  id: 'mongolia',
  slug: 'mongolia',
  name: 'Mongolia',
  region: 'Asia',
  complexity: 'Medium',
  languages: ['Mongolian', 'English', 'Russian'],
  shortDescription: 'A vast, sparsely populated steppe nation of nomadic heritage, harsh winters, and untouched wilderness.',
  heroImage: 'https://images.unsplash.com/photo-1547448161-c56e75b54317',
  flagAlt: 'Flag of Mongolia',
  atAGlance: "Mongolia is the 18th largest country by area but home to just 3.4 million people — the most sparsely populated sovereign state on earth. Landlocked between Russia and China at the heart of the Asian steppe, it retains a living nomadic culture: roughly one-third of the population still herds seasonally with horses, sheep, goats, yaks, and camels across open grasslands. The other half concentrates in Ulaanbaatar (UB), the capital of over 1.6 million, where Soviet-era blocks, glass towers, and sprawling ger districts (traditional felt-tent neighborhoods) coexist. Winters are brutal: January in UB routinely hits -30°C and occasionally -40°C, making it the coldest capital on earth. The Tögrög (MNT) is the currency. Mongolia is a stable parliamentary democracy pursuing a 'third neighbor' doctrine — drifting from Russian dependence toward balanced ties with the US, EU, Japan, South Korea, and Australia to counterweight Russia and China. The economy runs on mining (Oyu Tolgoi, one of the world's largest copper-gold mines, operated with Rio Tinto; plus coal and gold), cashmere (world's second-largest producer), livestock, and a growing tech services sector. Mongolian (in Cyrillic since 1940, with the traditional vertical script being reintroduced) is official; Russian persists among older generations and in technical fields; English is rising fast among young urban professionals. Cost of living is moderate — above Central Asian peers, well below Beijing or Seoul. For newcomers, the main adjustments are extreme winter, severe UB winter air pollution (among the world's worst during inversions), and the cultural reset of engaging a society still deeply tied to nomadic heritage.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 30 days visa-free (for many countries including US, EU, UK)',
    costOfLiving: 'Moderate',
    primaryLanguages: 'Mongolian (Official), English (Growing in UB), Russian (Older generation)',
  },
  visas: [
    {
      name: 'Expanded Visa-Free Entry ("Mongolia Welcomes You" 2024-2025)',
      targetAudience: 'Tourists and Short-Term Visitors from Western and Allied Countries',
      useCase: 'Under the 2024-2025 "Mongolia Welcomes You" expansion, Mongolia grants visa-free entry up to 30 days to nationals of the US, EU/EEA, UK, Canada, Australia, New Zealand, Japan, South Korea, Singapore, and a growing list (over 60 countries). Some nationalities enjoy 90-day access under bilateral agreements. A migration card is issued on arrival and must be retained until exit.',
      duration: 'Up to 30-90 days per entry depending on nationality',
      link: 'https://www.immigration.gov.mn/'
    },
    {
      name: 'HG-Class Work and Study Visas',
      targetAudience: 'Employed Professionals, Students, Mining and Tech Sector',
      useCase: 'Mongolia uses an alphabetical HG-class visa system: HG-1 for students enrolled at Mongolian universities, HG-2 for foreign workers under a Mongolian employer holding a work-permit quota, plus further sub-categories for technical experts and intra-corporate transfers. Employer applies through the General Authority for Immigration (GAI) and the Ministry of Labor; the visa is issued at a Mongolian mission abroad and converted to a residence permit after arrival. Heavy use by Oyu Tolgoi/Rio Tinto mining contractors, multinational management, and the UB tech sector.',
      duration: 'Up to 1 year, renewable; tied to permit class',
      link: 'https://www.immigration.gov.mn/'
    },
    {
      name: 'Investor Visa (T Visa)',
      targetAudience: 'Mining Investors, Business Owners',
      useCase: "Issued to foreign nationals establishing a qualifying business or investing in designated sectors under Mongolia's Investment Law. Minimum investment thresholds vary by sector — mining and infrastructure thresholds are highest. Self-sponsored: no employer needed. Popular for mining-services firms, trading companies serving the China-Russia border corridor, and tourism operations.",
      duration: 'Up to 3 years, renewable',
      link: 'https://www.investmongolia.gov.mn/'
    },
    {
      name: 'Heritage Residency for Ethnic Mongolians',
      targetAudience: 'Inner Mongolia, Buryat, Kalmyk Diaspora',
      useCase: 'Mongolia offers preferential residency pathways for ethnic Mongolians abroad — including the large Inner Mongolia (China) diaspora, Russian Buryats, and Kalmyks. Applicants demonstrate ethnic Mongolian heritage through documentation, lineage records, or community attestation. Routes lead to long-term residence and, in some cases, accelerated naturalization. A meaningful pathway given the scale of Mongol heritage populations beyond the country.',
      duration: 'Long-term residency; pathway to naturalization',
      link: 'https://www.immigration.gov.mn/'
    },
    {
      name: 'Border-Trader and Cross-Frontier Permits',
      targetAudience: 'Russia and China Border Traders, Cross-Border Workers',
      useCase: 'Special arrangements exist for Russian and Chinese nationals engaged in cross-border trade through formal frontier zones (Zamiin-Uud at the China border, Altanbulag at the Russia border). Permits enable repeated short-stay entries for trading, contract work, and family movement. Reflects Mongolia\'s position sandwiched between the two giants and the everyday economic flows that result.',
      duration: 'Variable by bilateral arrangement',
      link: 'https://www.immigration.gov.mn/'
    },
    {
      name: 'E-Visa System',
      targetAudience: 'Travelers from Countries Without Visa-Free Access',
      useCase: "Mongolia's recently launched e-Visa portal allows online application for tourist and business visas without visiting a Mongolian embassy. Available to nationals of countries that still require a visa to enter. Processing typically completes within 3-5 working days. The e-Visa is presented at entry alongside passport.",
      duration: 'Up to 30 days per entry',
      link: 'https://evisa.mn/'
    }
  ],
  requirements: [
    {
      title: 'Foreign Resident Registration',
      explanation: 'Foreign nationals staying more than 30 days must register with the General Authority for Immigration (GAI) within seven working days of arrival. Hotels register short-term guests automatically; long-term residents register through the landlord or sponsor.',
      importance: 'Missing the deadline triggers fines (MNT 100,000-300,000) and complicates exits and residence renewals. Registration is address-specific and must be updated when you move. Keep it with your passport and residence card.',
      link: 'https://www.immigration.gov.mn/'
    },
    {
      title: 'Registration Number (Регистрийн дугаар)',
      explanation: 'A unique 10-character alphanumeric identifier issued by the General Authority for State Registration to every resident, including foreign nationals on residence permits. It appears on the residence card and underpins tax, banking, and civil transactions.',
      importance: 'Without it, you cannot be formally employed, open a bank account, register a vehicle, or access most government services. Issuance is typically bundled with residence permit processing.',
      link: 'https://burtgel.gov.mn/'
    },
    {
      title: 'Digital Signature (e-Mongolia)',
      explanation: "The e-Mongolia platform (e-mongolia.mn) is the unified digital government portal. Authentication uses digital signatures issued to Registration Number holders, covering tax, residence, vehicle and business registration, and civil documents.",
      importance: 'Setting up your digital signature early saves significant time on renewals. Most processes can run online once authentication is in place, though some still require in-person visits.',
      link: 'https://e-mongolia.mn/'
    },
    {
      title: 'Bank Account',
      explanation: "Opening a Mongolian account requires passport, residence permit, Registration Number, and a local address. Major banks: Khan Bank (largest retail network), Trade and Development Bank (TDB), Golomt Bank, XacBank, State Bank. Multi-currency accounts (MNT, USD, EUR, RMB, RUB) are available to foreigners.",
      importance: 'Essential for salary, rent, and daily transactions. Capital controls are relatively liberal; outward transfers for residents are straightforward. UB branches offer English service. QR code payments via Khan Bank, TDB, or Golomt apps are widespread; cash remains common in markets and rural areas.',
      link: 'https://www.mongolbank.mn/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Mongolia's economy runs on mining (Oyu Tolgoi copper-gold with Rio Tinto, Tavan Tolgoi coal, Erdenet copper), cashmere and textiles, livestock, and a fast-growing tech services sector. Foreign professionals concentrate in mining (Rio Tinto, Anglo American, Centerra Gold, and contractors), international development (World Bank, ADB, GIZ, USAID), diplomatic missions, international NGOs, UB-based tech startups serving regional and global clients, and international schools and universities.",
    whereToLook: [
      "LinkedIn — the primary platform for multinational and international roles, particularly in mining and tech",
      "Careers.mn — a leading local job portal used by Mongolian employers",
      "Job.mn and Zangia.mn — mid-market and general-purpose job portals",
      "ReliefWeb and DevJobs — essential for development roles with UN agencies and NGOs",
      "Company career pages: Oyu Tolgoi, Rio Tinto Mongolia, Khan Bank, MobiCom, Unitel"
    ],
    realityChecks: [
      "Work permits are quota-based, allocated by sector and reviewed annually. Mining and technical sectors generally have accommodating quotas; some service sectors are more restricted. Intra-corporate transfers have smoother procedures.",
      "Mongolian is the working language in most local companies; Russian remains common in mining (historical legacy) and among older technical professionals; English dominates in international mining majors, international schools, and the tech startup scene.",
      "The expatriate community in UB is close-knit, particularly in mining, diplomacy, and development. Professional networks through AmCham Mongolia, the Business Council of Mongolia, and the European Chamber accelerate hiring significantly.",
      "Labor law provides reasonable protections, but informal practices and relational hiring persist. References and personal introductions matter."
    ]
  },
  salaryReality: {
    overview:
      "Mongolian salaries vary dramatically by sector. UB entry-level roles earn MNT 1.5-3 million/month (USD 440-880); mid-career multinational professionals MNT 5-12 million (USD 1,470-3,530); senior mining expatriates reach USD 150,000-300,000/year plus housing, schooling, and hardship allowances. Statutory minimum wage is MNT 660,000/month (~USD 194). UB cost of living is moderate: a comfortable single lifestyle runs USD 1,200-2,500/month, with winter energy and air-quality costs adding on top.",
    realityChecks: [
      "Mongolia has a flat personal income tax of 10% on salary income for most residents. Non-residents pay a flat 20%. Social insurance contributions (approximately 11.5% employee share, 12.5% employer share) fund pension, health, unemployment, and workplace injury insurance.",
      "Expatriate packages in mining majors include housing allowance (USD 2,000-4,000/month in UB), international school fees, home leave, and significant hardship allowance for remote Gobi Desert and Mongolian-Russian border postings.",
      "Corporate income tax is 10% on the first MNT 6 billion of annual profit and 25% above. Small business and IT company regimes offer preferential rates.",
      "The Tögrög floats freely and has historically been subject to significant depreciation pressure tied to commodity cycles and Chinese demand. Currency volatility is a factor for MNT-denominated earners."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "UB central-district rentals (Sukhbaatar, Chingeltei, around the Zaisan area, and the elite Sky Garden and Olympic Residence complexes) range from USD 700-2,500/month for 1-2 bedroom modern apartments. Premium expatriate developments go higher",
      "International school fees: International School of Ulaanbaatar (ISU), British School of Ulaanbaatar, Mongol Aspiration International School — USD 15,000-28,000/year per child",
      "Winter heating and energy costs: UB winters are brutal (-25 to -40°C January-February). Central district heating (Soviet-era centralized system) is included in rent in most apartments, but supplementary electric heating in December-February can add USD 100-250/month",
      "HEPA air purifiers and quality winter gear. UB winter air pollution (November-March) from coal heating and ger district fires regularly makes UB one of the world's most polluted cities; air purifiers and N95 masks are effectively mandatory. Parkas rated to -35°C are required"
    ]
  },
  housingSystem: {
    overview:
      "UB housing is predominantly apartment-based, concentrated in central Sukhbaatar and Chingeltei (near Sukhbaatar Square, government, embassies), the elite Zaisan area (mountain views at Zaisan Hill), and Khan-Uul district (including Olympic Residence and Sky Garden). The outer ger districts house roughly half the city in traditional felt tents and small houses but are not typical expat accommodation. Outside UB, Erdenet (copper mining) and Darkhan have small expatriate communities. Properties are found through brokers (50-100% of one month's rent), Unegui.mn (the dominant classifieds site), 1212.mn, and Facebook expat groups.",
    expectations:
      "Expect one to two months' rent as deposit plus one month in advance, on standard 12-month leases. Furnished apartments are the default in developments targeting foreigners. Verify heating (central district heating is near-universal in apartments and essential for UB winters), hot water (1-2 week summer maintenance shutdowns are standard), parking, and building condition. Newer developments (Olympic Residence, Sky Garden, Blue Sky Tower, Tuushin) offer premium insulation and amenities. Foreign nationals can own apartments (not land, which is state-held); registration is handled through the General Authority for State Registration, increasingly via e-Mongolia."
  },
  healthcareReality:
    "Mongolia operates a universal healthcare system funded through mandatory health insurance; foreign residents on work permits are typically enrolled through employers. Public hospital quality varies significantly, so most expatriates rely on private care. Leading UB providers include SOS Medica Mongolia (the primary expatriate clinic, English-speaking and international-standard), Intermed Hospital, UB Songdo Hospital, and Grand Med Hospital. For complex specialist procedures, expatriates typically evacuate to Seoul, Beijing, Bangkok, or Singapore — evacuation insurance is essential, especially in winter when weather can ground flights for days. Consultation fees run USD 80-150 at SOS Medica; MNT 50,000-200,000 (USD 15-60) at other private clinics. Pharmacies are abundant (Monos and UB Pharmacy are major chains). Emergency care is accessed through 103; response times in UB are reasonable but Gobi and mountain rural response is extremely limited. International health insurance with evacuation coverage (SOS International, Cigna Global, Allianz) is standard.",
  digitalLife: {
    overview:
      "Mongolia's digital infrastructure is surprisingly good for its scale. The e-Mongolia platform (e-mongolia.mn) centralizes most government services online. Mobile internet from Mobicom, Unitel, Gmobile, and Skytel covers urban areas with reliable 4G; 5G is rolling out in UB. Fixed fiber from Univision and Mobinet delivers 100-500 Mbps in cities. Rural and nomadic areas rely on cellular, which reaches deep into the steppe thanks to aggressive tower deployment.",
    essentials: [
      "e-Mongolia — unified eGovernment portal for tax, residence, civil documents, and most administrative services",
      "Khan Bank, Golomt Bank, or TDB apps — dominant mobile banking; QR payments via bank apps are widespread",
      "Ride Mongolia, Bolt, or UBCab — ride-hailing apps widely used in UB",
      "ToC Mongolia or Happy Point — food delivery across UB"
    ],
    whatSurprisesNewcomers: [
      "e-Mongolia is remarkably capable. Registering a car, checking health insurance, paying taxes, requesting civil documents, and dozens of other processes take minutes online with digital signature authentication.",
      "Facebook is dominant for community and business communication. Mongolian Facebook groups handle everything from apartment rentals to community announcements to political discussion.",
      "Mobile coverage extends deep into the steppe. Nomadic herders in remote Gobi provinces routinely have 4G signal. This is a deliberate policy driven by both telecom competition and national unity considerations.",
      "SIM registration is tied to passport for foreigners and Registration Number for residents. Biometric verification at operator stores is standard. Tourist SIMs are available at Chinggis Khaan International Airport."
    ]
  },
  culture: {
    text: "Mongolian culture is rooted in nomadic steppe heritage, shaped by Tibetan Buddhism (Gelug school, with Gandantegchinlen Monastery in UB as its spiritual center), and layered with Soviet-era modernization and post-1990 democratic engagement. Hospitality is foundational — any traveler arriving at a ger is welcomed with suutei tsai (salted milk tea), dairy, and often a meal, regardless of acquaintance. Turning away a traveler in the vast steppe is culturally unthinkable. The ger is both dwelling and social space with strict etiquette: enter on the left (man's side) or right (woman's side), do not step on the threshold, receive food with the right hand, and never pour anything on the sacred fire. Food is meat-centric: buuz (steamed dumplings), khuushuur (fried meat pies), tsuivan (mutton noodles), khorkhog (hot-stone mutton), aaruul (dried curd), and airag (fermented mare's milk). Naadam (mid-July) is the biggest holiday — three days of horse racing, wrestling, and archery honoring Chinggis Khaan's legacy. Tsagaan Sar (Lunar New Year) involves elaborate family visits and mountains of buuz. Chinggis Khaan (Genghis Khan) is a central national symbol — on currency, airports, monuments — and treating him lightly is deeply resented. UB has a growing contemporary scene: Mongol metal and throat-singing rock (The Hu), contemporary art, craft beer, and cafe culture alongside deep traditional arts.",
    highlights: [
      "Accept suutei tsai (salted milk tea) when offered in homes or gers; it is the universal hospitality gesture. Use your right hand (or both hands) to receive cups and bowls.",
      "Greet with 'Sain baina uu?' (how are you?, the standard greeting). 'Sain' (good) is the response. When meeting elders, the younger person often slightly bows and supports the forearm under the elbow.",
      "When visiting a ger, enter on the specified side, do not step on the threshold (bad luck), do not point your feet at the hearth, and do not whistle indoors (said to bring storms).",
      "Naadam is the great national celebration (July 11-13). UB fills with horse parades, wrestling tournaments at the Central Stadium, and archery competitions. The countryside empties as families travel to ancestral home areas.",
      "In business, Mongolian punctuality is valued in multinationals; informal flexibility is more common in traditional settings. Business cards typically have Mongolian/Russian on one side and English on the other."
    ]
  },
  transportationMobility:
    "Ulaanbaatar has extensive buses (standard and BRT-style) plus a vast shared-microbus system, but no metro. Peak-hour congestion is severe — the central district near-standstills from 5-8 PM. Ride-hailing via Ride Mongolia, Bolt, and UBCab dominates expatriate transport; cross-city trips run MNT 8,000-25,000 (USD 2.50-7). U-Money and U-Card cover buses. For intercity travel, options include the Trans-Mongolian Railway (Moscow-UB-Beijing; iconic but slow), long-distance buses, shared vans (mikro), and domestic flights from MIAT Mongolian Airlines, Hunnu Air, and Aero Mongolia connecting UB to Murun (Khuvsgul Lake), Dalanzadgad (Gobi), Khovd, and Ulaangom. Road conditions deteriorate quickly outside UB — paved main arteries give way to dirt tracks that become impassable in rain or winter. A 4x4 with a local driver is standard for serious countryside travel. Winter driving requires studded tires, heated engine block prep, and awareness of extreme cold risk.",
  internationalConnectivity:
    "Chinggis Khaan International Airport (UBN), opened in 2021 about 50 km south of UB, is the primary hub. Direct flights connect to Seoul, Tokyo, Beijing, Shanghai, Hong Kong, Istanbul, Frankfurt, Moscow, and Bangkok. MIAT Mongolian Airlines is the flag carrier; Hunnu Air and Aero Mongolia handle domestic and regional routes. International carriers include Korean Air, Turkish Airlines (major Istanbul hub), Air China, Aeroflot, and Japan Airlines (seasonal). Flight time UB-Seoul is about 3.5 hours; Beijing 2.5; Istanbul 8; Frankfurt 9.5. Europe routing typically goes via Istanbul, Moscow, or Frankfurt; North America via Seoul or Tokyo. Landlocked geography makes connectivity both more important and more fragile than in larger neighbors.",
  travelExploration:
    "Mongolia has some of the most dramatic untouched landscapes on earth. The Gobi Desert — Yolyn Am ice gorge, Flaming Cliffs (Bayanzag, where dinosaur eggs were first discovered), the Khongoryn Els singing dunes, and ger camps — is iconic. Khövsgöl Lake ('the Blue Pearl') in the north borders Russia amid pristine taiga. Terelj National Park, 70 km east of UB, offers accessible rock formations, ger camps, and horse riding. The Altai Mountains in the west are home to the Kazakh minority and eagle hunting — Bayan-Ölgii hosts the Golden Eagle Festival each October. Erdene Zuu Monastery in Kharkhorin (site of Chinggis Khaan's capital, Karakorum) is the oldest surviving Buddhist monastery; the Orkhon Valley is a UNESCO cultural landscape at the heart of Mongol history. UB itself offers Gandantegchinlen Monastery, the National Museum, Sukhbaatar Square, and the 40-meter Chinggis Khaan Equestrian Statue. Countryside travel demands planning — local guides transform the experience. Weekend escapes most often go to Seoul or Beijing.",
  considerations: [
    "Extreme Winter: UB is the coldest capital on earth, with January averages of -25°C and regular stretches below -35°C. Insulated parkas rated to -35°C, quality boots, layered gloves, and face coverage are essential. Arriving in November without proper gear is miserable and potentially dangerous.",
    "Winter Air Quality: UB winter pollution is among the world's worst — driven by ger-district coal heating and valley inversions. PM2.5 in November-February regularly exceeds WHO limits 10-20x, with rolling pollution-blackouts. HEPA purifiers and N95 masks are effectively mandatory.",
    "Vast Distances: Mongolia's scale is hard to grasp. Domestic flights are often most practical for Khövsgöl Lake (1,000 km) or the Gobi (700+ km). Road travel is slow and weather-dependent.",
    "Evacuation Preparedness: Complex healthcare cases require evacuation to Seoul, Beijing, Bangkok, or Singapore. Insurance with evacuation coverage is not optional — winter weather can ground flights for days.",
    "Cultural and Political Sensitivity: Chinggis Khaan is a national hero — dismissive or joking references are strongly resented. The 'third neighbor' policy delicately balances Russia and China against Western engagement; avoid strong political commentary professionally."
  ],
  mistakes: [
    "Underestimating winter. Mongolian winter is colder, longer, and harsher than most newcomers anticipate. Generic temperate-climate gear will not suffice; specialized -35°C equipment is required.",
    "Skipping GAI registration. Missing the seven-working-day deadline triggers fines and exit complications. Register promptly through landlord, employer, or directly at GAI.",
    "Ignoring air quality. Arriving in UB in November without an air purifier means weeks of inhaling hazardous smog. Ship one in advance or buy locally on arrival.",
    "Treating Chinggis Khaan references casually. The Mongol founder is a central national symbol; dismissive jokes or 'brutal conqueror' framings are genuinely offensive. Listen before commenting.",
    "Underestimating countryside logistics. Breakdowns, lost GPS, and sudden weather are common. Travel with experienced local drivers, satellite communication for remote areas, and buffer time."
  ],
  emergency: [
    {
      number: '101',
      service: 'Fire and Emergency Response',
      description: 'Fire department and general emergency response. Operators primarily speak Mongolian; Russian and English capability is limited.'
    },
    {
      number: '102',
      service: 'Police',
      description: 'Direct police emergency line. Operators speak Mongolian; English proficiency varies.'
    },
    {
      number: '103',
      service: 'Ambulance',
      description: 'National ambulance service. Response times in UB are reasonable; private ambulance services (SOS Medica) are available for those with private insurance.'
    },
    {
      number: '105',
      service: 'Disaster and Civil Defense',
      description: 'National Emergency Management Agency line for natural disasters, severe weather, and large-scale civil emergencies.'
    }
  ],
  sources: [
    {
      name: 'General Authority for Immigration',
      category: 'Immigration & Residency',
      description: "Mongolia's central authority for visas, work permits, residence permits, and foreign national registration. The definitive source for immigration procedures.",
      link: 'https://www.immigration.gov.mn/'
    },
    {
      name: 'e-Mongolia',
      category: 'Government Services',
      description: "Unified digital government portal for tax, residence, business registration, civil documents, and most online administrative services.",
      link: 'https://e-mongolia.mn/'
    },
    {
      name: 'Ministry of Foreign Affairs',
      category: 'Visas & Consular',
      description: 'Authority for consular services, embassy directory, and international agreements. Publishes entry requirements and travel advisories.',
      link: 'https://www.mfa.gov.mn/'
    },
    {
      name: 'Invest Mongolia Agency',
      category: 'Business & Investment',
      description: 'Promotes foreign investment, manages investor visa applications, and administers Investment Law incentives.',
      link: 'https://www.investmongolia.gov.mn/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Mongolia, consult the Ministry of Foreign Affairs of Mongolia or a Mongolian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/mongolia',
    mfaLink: 'https://www.mfa.gov.mn/'
  },
  serviceDirectory: {
    title: "Service Directory - Mongolia",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Mongolia.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for work permits, residence permits, investor visas, and corporate immigration.",
        providers: [
          { name: "Lehman Law Mongolia", link: "https://www.lehmanlaw.mn" },
          { name: "GRATA International Mongolia", link: "https://gratanet.com" },
          { name: "MDS Law", link: "https://mds-law.mn" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Platforms and agencies for rentals and purchases in Ulaanbaatar.",
        providers: [
          { name: "Unegui.mn", link: "https://www.unegui.mn" },
          { name: "1212.mn (Real Estate)", link: "https://www.1212.mn" },
          { name: "MPM Real Estate", link: "https://mpm.mn" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Mongolian personal and corporate tax, mining sector taxation, and cross-border planning.",
        providers: [
          { name: "PwC Mongolia", link: "https://www.pwc.com/mn" },
          { name: "EY Mongolia", link: "https://www.ey.com/en_mn" },
          { name: "Deloitte Mongolia", link: "https://www2.deloitte.com" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services with customs expertise.",
        providers: [
          { name: "Crown Relocations Mongolia", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation Mongolia", link: "https://www.santaferelo.com" },
          { name: "AGS Movers Mongolia", link: "https://www.agsmovers.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Mongolian and Russian language instruction for foreign professionals.",
        providers: [
          { name: "Bridge Mongolian Language Center", link: "https://bridge.mn" },
          { name: "National University of Mongolia Language Center", link: "https://num.edu.mn" },
          { name: "Santis Educational Services", link: "https://santis.mn" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major private clinics and international-standard medical providers.",
        providers: [
          { name: "SOS Medica Mongolia", link: "https://www.sosmedica.mn" },
          { name: "Intermed Hospital", link: "https://intermed.mn" },
          { name: "UB Songdo Hospital", link: "https://www.songdohospital.mn" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and firms connecting professionals with Mongolian employers.",
        providers: [
          { name: "Careers.mn", link: "https://careers.mn" },
          { name: "Zangia.mn", link: "https://zangia.mn" },
          { name: "Executive Search Mongolia", link: "https://www.executivesearch.mn" }
        ]
      }
    ]
  }
};
