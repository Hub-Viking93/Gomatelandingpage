export const vietnam = {
  id: 'vietnam',
  slug: 'vietnam',
  name: 'Vietnam',
  region: 'Asia',
  complexity: 'Medium',
  languages: ['Vietnamese'],
  shortDescription: 'Bustling energy, incredible landscapes, and a rapidly growing economy.',
  heroImage: 'https://images.unsplash.com/photo-1609412058473-c199497c3c5d?',
  flagAlt: 'Flag of Vietnam',
  atAGlance: "Vietnam is one of Southeast Asia's most dynamic and rapidly transforming countries, a place where ancient temples stand in the shadow of new skyscrapers and where street food vendors operate alongside gleaming shopping malls. The country stretches over 1,600 kilometers from north to south, creating dramatic climatic and cultural variation: Hanoi in the north is cooler, more formal, and steeped in thousand-year-old history; Ho Chi Minh City (still called Saigon by locals) in the south is tropical, entrepreneurial, and fast-paced. Da Nang in the center has emerged as a livable coastal city with modern infrastructure. The energy on the streets is infectious: millions of motorbikes flow through cities in a seemingly chaotic but remarkably functional river of traffic. Street food is a way of life, not just a meal, and Vietnam consistently ranks among the world's greatest food destinations. The cost of living is very low by Western standards, making it a magnet for digital nomads, English teachers, and entrepreneurs. Vietnamese bureaucracy is complex and changing rapidly, with visa rules that shift frequently and a regulatory environment that can be opaque to outsiders. The language barrier is real: Vietnamese is tonal and difficult for most foreigners, and English proficiency outside business and tourism circles is limited. For those willing to embrace the intensity, Vietnam offers an unmatched combination of energy, affordability, culinary brilliance, and natural beauty.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 90 days (E-Visa)',
    costOfLiving: 'Very Low',
    primaryLanguages: 'Vietnamese',
  },
  visas: [
    {
      name: 'E-Visa',
      targetAudience: 'Tourists, Business visitors, Digital nomads',
      useCase: 'Applied online through the official Immigration Department portal. Available to citizens of all countries. Single or multiple entry options. The 90-day e-visa replaced the previous 30-day version in 2023. Processing takes approximately 3 working days. No invitation letter or sponsor required. Can be used at all international airports and major land borders.',
      duration: 'Up to 90 days (single or multiple entry)',
      link: 'https://evisa.xuatnhapcanh.gov.vn/'
    },
    {
      name: 'Work Permit',
      targetAudience: 'Employed professionals',
      useCase: 'Required for all foreigners working for a Vietnamese employer. The employer applies to the Department of Labour, Invalids and Social Affairs (DOLISA) in their province. Requirements include a criminal background check, health certificate from a Vietnamese hospital, degree attestation, and at least 2 years of relevant work experience or a relevant degree. Processing takes 2-4 weeks.',
      duration: 'Up to 2 years, renewable',
      link: 'http://molisa.gov.vn/'
    },
    {
      name: 'Temporary Residence Card (TRC)',
      targetAudience: 'Work permit holders, Investors, Family members',
      useCase: 'Issued to foreigners who hold a valid work permit, investment certificate, or are married to a Vietnamese citizen. Replaces the need for a visa during its validity. Applied for through the Immigration Department after obtaining your work permit or qualifying status. Grants multiple entry and exit without needing a separate visa.',
      duration: '2-5 years depending on category',
      link: 'https://xuatnhapcanh.gov.vn/'
    },
    {
      name: 'Investor Visa / Investment Certificate',
      targetAudience: 'Business investors, Entrepreneurs',
      useCase: 'For foreign nationals investing in or establishing a business in Vietnam. Requires an Investment Registration Certificate (IRC) from the Department of Planning and Investment (DPI) and an Enterprise Registration Certificate (ERC). Minimum capital requirements vary by industry. The investor visa leads to a Temporary Residence Card.',
      duration: 'Tied to investment duration, typically 2-5 years',
      link: 'https://dautunuocngoai.gov.vn/'
    },
    {
      name: 'Visa on Arrival (Sponsored)',
      targetAudience: 'Business travelers, Tour groups',
      useCase: 'An alternative to the e-visa that requires a pre-approved invitation letter from a Vietnamese sponsor (employer, travel agency, or business partner). The letter is submitted to the Immigration Department, and a visa approval is issued. The actual visa is stamped at the airport upon arrival. Less commonly used since the e-visa expansion in 2023.',
      duration: '1-3 months depending on type',
      link: 'https://xuatnhapcanh.gov.vn/'
    }
  ],
  requirements: [
    {
      title: 'Temporary Residence Registration (Dang Ky Tam Tru)',
      explanation: 'All foreigners must be registered at their place of stay with the local ward police within 24 hours of arrival or moving to a new address. Hotels do this automatically. For private rentals, the landlord is legally responsible for registering you.',
      importance: 'This is not optional. Police conduct random checks, and failure to have valid temporary residence registration can result in fines for both you and your landlord. The registration certificate is required for visa extensions, Temporary Residence Card applications, opening certain bank accounts, and various administrative procedures. Ensure your landlord completes this; if they are unwilling, it is a red flag.',
      link: 'https://xuatnhapcanh.gov.vn/'
    },
    {
      title: 'Work Permit or Work Permit Exemption Certificate',
      explanation: 'All foreigners working in Vietnam need either a work permit or an official exemption certificate. Even categories that are exempt from work permits (investors, internal company transfers, short-term consultants under 30 days) must obtain a formal exemption document.',
      importance: 'Working without a valid work permit is illegal and increasingly enforced. Penalties include fines up to VND 150 million ($6,000+), deportation, and a re-entry ban. The exemption certificate is equally important: without it, you cannot apply for a Temporary Residence Card, and immigration officials may question your stay. Your employer handles the application, but verify that it is completed.',
      link: 'http://molisa.gov.vn/'
    },
    {
      title: 'Tax Code (Ma So Thue)',
      explanation: 'A personal tax code issued by the General Department of Taxation. Your employer typically registers this on your behalf when processing your work permit and employment contract.',
      importance: 'Vietnam has a progressive personal income tax system (5-35% for residents, flat 20% for non-residents). Tax residency begins after 183 days in a 12-month period. Your employer deducts monthly tax (TNCN) from your salary. Annual tax finalization is required by the end of March. Even if your employer handles deductions, understanding your tax obligations prevents surprises, especially regarding worldwide income reporting for tax residents.',
      link: 'https://www.gdt.gov.vn/'
    },
    {
      title: 'Driving License (IDP or Vietnamese Conversion)',
      explanation: 'Most foreign driving licenses are not valid in Vietnam. To drive legally, you need either an International Driving Permit (IDP) under the 1968 Vienna Convention (accepted for cars and motorcycles up to 50cc) or a converted Vietnamese driving license from the Department of Transport.',
      importance: 'Police checkpoints targeting foreigners on motorbikes are common, especially in tourist areas and during holiday periods. Driving without a valid license voids your insurance, meaning you are personally liable for all costs in an accident. Motorbike accidents are the leading cause of injury and death among foreigners in Vietnam. If you plan to ride, get properly licensed.',
      link: 'https://mt.gov.vn/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Vietnam's economy is one of the fastest growing in Southeast Asia, driven by manufacturing (Samsung, Intel, and hundreds of factories in industrial zones), technology (a booming startup scene in HCMC and Hanoi), English education (massive demand for foreign teachers), tourism, and increasingly, professional services. Ho Chi Minh City and Hanoi dominate the professional job market, with Da Nang growing as a secondary hub. English is the working language in most international companies and all foreign-facing education roles.",
    whereToLook: [
      "LinkedIn",
      "VietnamWorks (the dominant local job portal)",
      "TopCV Vietnam",
      "ITviec (tech-focused job board)",
      "Dave's ESL Cafe and TEFL job boards (for English teaching positions)"
    ],
    realityChecks: [
      "English teaching is the most accessible job for foreigners without Vietnamese language skills, paying $1,500-2,500/month at established language centers and international schools.",
      "Tech roles at Vietnamese startups and international companies pay $1,000-5,000/month depending on seniority and company type, with significant growth potential.",
      "Work permits require a bachelor's degree and 2+ years of relevant experience (or a master's degree). Without these, obtaining legal work authorization is very difficult.",
      "Contract terms, working hours, and benefits vary widely. Always get the full employment package in writing before accepting, and verify that work permit processing is included."
    ]
  },
  salaryReality: {
    overview:
      "Salaries in Vietnam are low by Western standards but provide strong purchasing power locally. A comfortable single lifestyle in HCMC or Hanoi costs $1,000-1,800/month including rent. Foreign professionals on local contracts earn $1,500-5,000/month; those on expat packages at multinationals can earn $5,000-15,000+ with housing and benefits. The gap between local and expat compensation creates visible lifestyle differences.",
    realityChecks: [
      "Vietnam's personal income tax is progressive from 5% to 35% for residents (183+ days in a 12-month period). Non-residents pay a flat 20%. Social insurance contributions add approximately 10.5% for employees.",
      "Rent is the largest variable expense: a modern 1-bedroom apartment in District 1 (HCMC) or Tay Ho (Hanoi) costs $500-1,200/month; move to the outskirts and prices drop to $300-600.",
      "Street food and local restaurants are extraordinarily cheap ($1-3 per meal), but Western-style dining, imported goods, and alcohol cost significantly more.",
      "Healthcare costs are modest by global standards: a private hospital visit is $30-80, but international-standard hospitals (FV Hospital, Vinmec) charge premium rates."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Mandatory social insurance contributions (approximately 10.5% employee, 21.5% employer on the capped salary amount)",
      "The cost of international-standard housing versus local housing (the difference can be 3-5x)",
      "Motorbike ownership costs (purchase $1,500-3,000 for a reliable Honda, plus maintenance, fuel, and the inevitable minor accident repairs)",
      "Air quality mitigation costs (air purifier for home, quality masks) particularly in Hanoi during winter months"
    ]
  },
  housingSystem: {
    overview:
      "Vietnam's rental market is active and flexible. In HCMC, popular expat areas include District 1 (Saigon center), District 2 (Thao Dien, the main expat suburb), District 7 (Phu My Hung, a planned township popular with Korean and Japanese communities), and Binh Thanh. In Hanoi, Tay Ho (West Lake), Ba Dinh, and Hoan Kiem are preferred. Da Nang expats concentrate along My Khe Beach and in the Son Tra area. Serviced apartments, regular apartments, and alley houses are all common rental types.",
    expectations:
      "Leases typically require 1-2 months' deposit and 1 month advance rent. Many landlords prefer 3-6 month minimum terms. Properties are found through Facebook groups (Saigon/Hanoi expat housing groups are very active), Batdongsan.com.vn, Chotot.com, or local agents. Always inspect in person, test water pressure and hot water, check for mold (common in humid climates), and confirm that the landlord will handle temporary residence registration. Negotiate firmly but respectfully; initial asking prices often have 10-20% flexibility."
  },
  healthcareReality:
    "Vietnam's healthcare system has improved dramatically in recent years. In HCMC and Hanoi, international-standard hospitals provide excellent care: FV Hospital and Vinmec International Hospital are the top choices, with English-speaking staff, modern equipment, and JCI accreditation. Family Medical Practice (FMP) operates well-regarded international clinics in HCMC, Hanoi, and Da Nang. Public hospitals (Cho Ray in HCMC, Bach Mai in Hanoi) offer competent care at very low cost but are extremely crowded, with limited English, and involve lengthy waits. Most expats use a combination of private hospitals for routine and acute care and international insurance for major procedures. Health insurance is mandatory for work permit holders (employer-provided), but the coverage level varies; supplementary international insurance from providers like Cigna, Bupa, or Pacific Cross is common for those wanting broader coverage. Pharmacies are abundant and many medications (including antibiotics) are available without prescription, though quality control can be inconsistent. Dental care is affordable and improving rapidly.",
  digitalLife: {
    overview:
      "Vietnam is one of the most digitally connected countries in Southeast Asia. Mobile internet penetration exceeds 70%, and 4G/5G coverage from Viettel, Mobifone, and Vinaphone blankets urban areas. Home fiber internet (VNPT, FPT, Viettel) delivers 50-150 Mbps in cities at very low cost ($8-15/month). Cashless payments have exploded since 2020, with QR codes accepted everywhere from street food vendors to luxury hotels.",
    essentials: [
      "Grab (ride-hailing, food delivery, and payments; the indispensable super-app for daily life in Vietnam)",
      "MoMo or ZaloPay (dominant e-wallets for transfers, bill payments, and retail)",
      "Zalo (Vietnamese messaging app widely used for business communication, often preferred over WhatsApp locally)",
      "Shopee or Lazada (e-commerce platforms for online shopping with fast delivery)"
    ],
    whatSurprisesNewcomers: [
      "QR code payments are accepted at roadside pho stalls, xe om (motorbike taxi) drivers, and wet market vendors. Cash is increasingly optional in cities.",
      "Vietnamese businesses and landlords often communicate primarily through Zalo rather than email or WhatsApp.",
      "Internet speeds in Vietnamese cities are genuinely fast and reliable; Vietnam ranks above many European countries for mobile internet speed.",
      "VPN usage is common and largely tolerated. Some international websites (including occasional social media restrictions) may require a VPN."
    ]
  },
  culture: {
    text: "Vietnamese culture is shaped by Confucian values of respect for elders, family loyalty, education, and social harmony, overlaid with a distinctly Vietnamese resilience and entrepreneurial spirit forged through centuries of conflict and rebuilding. Family (gia dinh) is the fundamental unit of society; multi-generational households are common, and major decisions involve family consensus. The concept of 'face' (the mat) governs social interactions: public criticism, displays of anger, or causing embarrassment are serious social transgressions. Vietnamese communication is often indirect, and 'yes' may mean 'I hear you' rather than 'I agree.' Food is central to social life and identity; meals are communal, shared from common dishes, and the question 'An com chua?' (Have you eaten rice yet?) is a standard greeting equivalent to 'How are you?' The Vietnamese are pragmatic, industrious, and possess a dry, self-deprecating humor. Haggling is expected in markets but not in shops with fixed prices. Tipping is appreciated but not obligatory. The lunar calendar governs the most important holiday, Tet (Lunar New Year), which effectively shuts the country down for 1-2 weeks.",
    highlights: [
      "Tet (Lunar New Year, usually late January to mid-February) is the most important holiday. The entire country pauses for 1-2 weeks. Flights, trains, and buses sell out months in advance. Many businesses close, and workers return to their hometowns.",
      "Always remove your shoes before entering Vietnamese homes and some businesses. Look for a pile of shoes at the entrance as your cue.",
      "When handing or receiving anything important (business cards, gifts, money), use both hands. This shows respect.",
      "Avoid pointing with your finger or the soles of your feet at people or sacred objects. Use an open hand to gesture instead.",
      "Vietnamese names are written with family name first (e.g., Nguyen Van An). Address people by their given name (the last word) with an appropriate title (Anh for older brother, Chi for older sister, Em for younger person)."
    ]
  },
  transportationMobility:
    "The motorbike is king in Vietnam, with over 45 million registered in a country of 100 million people. Traffic in HCMC and Hanoi is dense, loud, and intimidating to newcomers but operates on an unspoken flow that becomes navigable with experience. Grab (motorbike and car) is the go-to transport app and is remarkably affordable ($1-3 for most urban trips). HCMC opened its first metro line (Ben Thanh-Suoi Tien) in 2024, with more lines planned. Hanoi's urban railway (Cat Linh-Ha Dong line) has been operating since 2021. City buses exist but are slow and confusing for non-Vietnamese speakers. For intercity travel, the Reunification Express train runs the full length from Hanoi to HCMC (30+ hours) with stops at Hue and Da Nang. VietJet Air, Bamboo Airways, and Vietnam Airlines offer cheap domestic flights. Sleeper buses connect cities overnight. Renting a motorbike for rural exploration is popular but requires a valid license and genuine riding experience.",
  internationalConnectivity:
    "Vietnam has three major international airports: Tan Son Nhat (SGN) in HCMC, Noi Bai (HAN) in Hanoi, and Da Nang (DAD). HCMC and Hanoi are well-connected hubs with direct flights to most Asian capitals, Australia, Europe (London, Paris, Frankfurt via Vietnam Airlines), and select US cities (San Francisco via Vietnam Airlines). Low-cost carriers VietJet and AirAsia connect to dozens of regional destinations at remarkably low fares. Flight time to Bangkok is 1.5 hours, to Singapore 2 hours, to Tokyo 5.5 hours, to London 12 hours. Long Son International Airport, under construction near HCMC, is planned to become a major hub upon completion. Vietnam also has land borders with China, Laos, and Cambodia, with regular bus services to Phnom Penh (6 hours from HCMC) and Vientiane (24 hours from Hanoi).",
  travelExploration:
    "Vietnam's geography delivers extraordinary variety. Ha Long Bay (UNESCO) in the northeast offers dramatic limestone karsts and overnight junk boat cruises. Sapa in the northwest provides terraced rice paddies and trekking among ethnic minority villages. Hue, the former imperial capital, has the Citadel and royal tombs along the Perfume River. Hoi An is a perfectly preserved trading port with lantern-lit streets, tailor shops, and cooking classes. The Phong Nha-Ke Bang caves are among the world's most spectacular (including Son Doong, the world's largest cave). The Mekong Delta offers a floating market culture accessible from HCMC. Phu Quoc Island has resort beaches and a growing food scene. Dalat in the Central Highlands provides cool-weather escapes with coffee plantations and French colonial architecture. Ninh Binh (the 'Ha Long Bay on land') offers karst landscapes accessible by boat and bicycle.",
  considerations: [
    "Traffic Safety: Motorbike accidents are the single biggest risk for foreigners in Vietnam. If you are not an experienced rider, do not rent a motorbike. Use Grab for transport. If you do ride, always wear a helmet, drive defensively, and never drink and ride.",
    "Visa Rule Changes: Vietnamese visa regulations change frequently and sometimes without advance notice. The 2023 e-visa expansion was a major positive change, but rules on extensions, work permits, and stay durations can shift. Always verify current requirements shortly before travel.",
    "Air Pollution: Hanoi regularly ranks among the most polluted cities in Southeast Asia, particularly from November through March. HCMC is better but still has poor air quality days. An air purifier for your apartment and a quality mask for outdoor use are worthwhile investments.",
    "Cash and Currency: While cashless payments are expanding rapidly, cash (Vietnamese Dong, VND) is still needed for many street vendors, markets, and smaller establishments. ATM withdrawal limits are typically VND 2-5 million per transaction ($80-200), and fees apply.",
    "Scams and Tourist Pricing: In tourist-heavy areas, expect inflated prices for taxis, street food, and services. Use Grab instead of street taxis. Check prices before ordering at restaurants. Bargain at markets (aim for 50-70% of the initial asking price). In shops with marked prices, do not haggle."
  ],
  mistakes: [
    "Calling Ho Chi Minh City 'Saigon' on official forms and documents. While locals universally use 'Saigon' in casual conversation, the official name is Ho Chi Minh City (Thanh Pho Ho Chi Minh). Use the official name on paperwork.",
    "Buying items at tourist markets (Ben Thanh, Dong Xuan) without bargaining. Initial prices at these markets are typically 3-5x the intended sale price. Haggle respectfully but firmly. Walk away and see if they call you back.",
    "Drinking tap water. Vietnamese tap water is not potable. Never drink it directly. Ice in restaurants is generally safe (it is manufactured industrially in cylindrical tubes), but ice from unknown sources should be avoided.",
    "Underestimating the wet season. Vietnam's rainy season varies by region (south: May-November, central: September-December, north: May-September), and heavy rains can cause urban flooding, particularly in HCMC, turning streets into rivers within minutes.",
    "Assuming everything operates like neighboring Thailand. Vietnam is more bureaucratic, less tourist-polished, and more linguistically challenging than Thailand. The reward is a more authentic, less commercialized experience, but it requires more effort and adaptability."
  ],
  emergency: [
    {
      number: '113',
      service: 'Police (Cong An)',
      description: 'General police emergency. Operators speak Vietnamese; English assistance is limited.'
    },
    {
      number: '115',
      service: 'Ambulance (Cap Cuu)',
      description: 'Public ambulance service. Response times can be slow in traffic. Many expats use Grab to reach a hospital faster for non-critical emergencies.'
    },
    {
      number: '114',
      service: 'Fire Department (Cuu Hoa)',
      description: 'Fire emergency hotline.'
    }
  ],
  sources: [
    {
      name: 'Immigration Department of Vietnam',
      category: 'Immigration & Visas',
      description: 'Official portal for e-visa applications, visa regulations, temporary residence registration, and TRC procedures.',
      link: 'https://xuatnhapcanh.gov.vn/'
    },
    {
      name: 'MOLISA (Ministry of Labour, Invalids and Social Affairs)',
      category: 'Employment & Work Permits',
      description: 'Government ministry overseeing work permits, labor regulations, and social insurance.',
      link: 'http://molisa.gov.vn/'
    },
    {
      name: 'General Department of Taxation',
      category: 'Taxation',
      description: 'Tax authority responsible for personal income tax, tax codes, and compliance for residents and businesses.',
      link: 'https://www.gdt.gov.vn/'
    },
    {
      name: 'Vietnam National Administration of Tourism',
      category: 'Tourism & Travel',
      description: 'Official tourism body with destination guides and visitor information.',
      link: 'https://vietnam.travel/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Vietnam, consult the Vietnamese Ministry of Foreign Affairs or a Vietnamese embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/vietnam',
    mfaLink: 'https://www.mofa.gov.vn/en/'
  },
  serviceDirectory: {
    title: "Service Directory - Vietnam",
    description: "Examples of commonly used service providers people often interact with when relocating to Vietnam.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal assistance for work permits, visa extensions, TRC applications, and compliance.",
        providers: [
          { name: "Tilleke & Gibbins Vietnam", link: "https://www.tilleke.com" },
          { name: "VILAF", link: "https://www.vilaf.com.vn" },
          { name: "Russin & Vecchi", link: "https://www.russinvecchi.com.vn" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Professionals handling apartment rentals and property arrangements in major cities.",
        providers: [
          { name: "Savills Vietnam", link: "https://www.savills.com.vn" },
          { name: "CBRE Vietnam", link: "https://www.cbre.com.vn" },
          { name: "Batdongsan.com.vn", link: "https://batdongsan.com.vn" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Vietnamese tax residency, personal income tax, and cross-border income planning.",
        providers: [
          { name: "PwC Vietnam", link: "https://www.pwc.com/vn" },
          { name: "Deloitte Vietnam", link: "https://www2.deloitte.com/vn" },
          { name: "KPMG Vietnam", link: "https://kpmg.com/vn" }
        ]
      },
      {
        name: "Moving Companies",
        description: "Relocation services for international shipping, customs clearance, and destination support.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Asian Tigers Vietnam", link: "https://www.asiantigersgroup.com" },
          { name: "AGS Movers Vietnam", link: "https://www.agsmovers.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Vietnamese language schools and cultural integration resources for newcomers.",
        providers: [
          { name: "Vietnamese Language Studies (VLS)", link: "https://vls-vietnam.com" },
          { name: "Vietnam National University Language Programs", link: "https://www.vnu.edu.vn" },
          { name: "ILA Vietnam", link: "https://ila.edu.vn" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major hospitals and clinics commonly used by expats in Vietnam.",
        providers: [
          { name: "FV Hospital (HCMC)", link: "https://www.fvhospital.com" },
          { name: "Vinmec International Hospital", link: "https://www.vinmec.com" },
          { name: "Family Medical Practice", link: "https://www.vietnammedicalpractice.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms connecting professionals with Vietnamese and regional employers.",
        providers: [
          { name: "VietnamWorks", link: "https://www.vietnamworks.com" },
          { name: "Navigos Group", link: "https://www.navigosgroup.com" },
          { name: "Robert Walters Vietnam", link: "https://www.robertwalters.com.vn" }
        ]
      }
    ]
  }
};
