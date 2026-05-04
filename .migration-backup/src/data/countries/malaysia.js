export const malaysia = {
  id: 'malaysia',
  slug: 'malaysia',
  name: 'Malaysia',
  region: 'Asia',
  complexity: 'Medium',
  languages: ['Malay', 'English'],
  shortDescription: 'A multicultural fusion of Malay, Chinese, and Indian cultures with modern infrastructure.',
  heroImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07',
  flagAlt: 'Flag of Malaysia',
  atAGlance: "Malaysia delivers a rare combination: modern infrastructure, multicultural society, widespread English proficiency, and a cost of living that stretches Western incomes remarkably far. Kuala Lumpur is a gleaming, air-conditioned metropolis where the Petronas Twin Towers anchor a skyline of glass-and-steel towers, connected by an extensive rail and monorail network. Penang offers a UNESCO-listed George Town with world-class street food and a growing digital nomad community. The country is a genuine melting pot of Malay, Chinese, Indian, and indigenous cultures, each contributing distinct cuisines, festivals, and traditions that coexist in everyday life. English is widely spoken in business and urban areas, making it one of the easiest Southeast Asian countries for English-speaking newcomers. Food is the national obsession, available 24 hours a day from hawker stalls, kopitiams (coffee shops), and night markets at astonishingly low prices. The climate is tropical year-round with temperatures between 25-35C and occasional dramatic thunderstorms. The bureaucracy is more organized than many neighbors but can still be slow and form-heavy. Malaysia is officially a Muslim-majority country, and Islamic law (Syariah) applies to Muslims in personal matters, while secular law governs non-Muslims. This dual legal system occasionally creates confusion for newcomers. For those seeking a base in Southeast Asia with reliable infrastructure, excellent food, and genuine cultural diversity, Malaysia is consistently one of the top choices.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 90 days',
    costOfLiving: 'Low',
    primaryLanguages: 'Malay (Bahasa), English',
  },
  visas: [
    {
      name: 'DE Rantau Nomad Pass',
      targetAudience: 'Digital nomads, Remote workers',
      useCase: 'Malaysia\'s official digital nomad visa, managed by MDEC (Malaysia Digital Economy Corporation). Requires proof of remote employment or freelance income of at least $24,000/year, a valid employment contract or proof of freelance clients, and health insurance. Allows you to live and work remotely from Malaysia without paying Malaysian income tax on foreign-sourced income.',
      duration: '3-12 months, renewable for up to 12 months',
      link: 'https://mdec.my/derantau'
    },
    {
      name: 'MM2H (Malaysia My Second Home)',
      targetAudience: 'Retirees, High-net-worth individuals',
      useCase: 'Long-term residency program for financially qualified applicants. Requirements were significantly tightened in 2021: minimum fixed deposit of RM 1 million ($215,000+), minimum offshore income of RM 40,000/month, and proof of liquid assets of RM 1.5 million. Grants a social visit pass with multiple-entry privileges but does not permit employment.',
      duration: '5 years, renewable',
      link: 'https://www.imi.gov.my/index.php/en/main-services/malaysia-my-second-home-mmh2-en/'
    },
    {
      name: 'Employment Pass (Category I, II, III)',
      targetAudience: 'Employed professionals',
      useCase: 'Standard work visa for foreign nationals employed by a Malaysian company. Tiered by salary: Category I (RM 10,000+/month, up to 5 years), Category II (RM 5,000-9,999/month, up to 2 years), Category III (RM 3,000-4,999/month, up to 12 months). The employer applies through the Expatriate Services Division (ESD) portal. Processing takes 2-8 weeks.',
      duration: '1-5 years depending on category',
      link: 'https://esd.imi.gov.my/portal/'
    },
    {
      name: 'Tourist Visa / Visa-Free Entry',
      targetAudience: 'Tourists, Short-stay visitors',
      useCase: 'Citizens of most countries receive visa-free entry for 90 days (some nationalities 30 days or require a visa). Stamped at the point of entry. Cannot be extended; you must leave and re-enter. Working on a tourist visa is illegal and enforcement has increased.',
      duration: 'Up to 90 days',
      link: 'https://www.imi.gov.my/index.php/en/main-services/visa/'
    },
    {
      name: 'Professional Visit Pass',
      targetAudience: 'Short-term business visitors, Consultants',
      useCase: 'For foreign nationals providing professional services to a Malaysian company on a temporary basis (training, auditing, technical installation). The Malaysian host company must sponsor the application. Does not permit permanent employment.',
      duration: 'Up to 12 months',
      link: 'https://esd.imi.gov.my/portal/'
    }
  ],
  requirements: [
    {
      title: 'LHDN Tax Registration (Inland Revenue Board)',
      explanation: 'Registration with the Lembaga Hasil Dalam Negeri (LHDN) for a tax file number. Required for anyone working in Malaysia or earning Malaysian-sourced income.',
      importance: 'Malaysia operates a progressive income tax system (0-30%). You become a tax resident after spending 182 or more days in a calendar year, which qualifies you for resident tax rates (significantly lower than non-resident rates of flat 30%). Your employer will handle monthly PCB (Potongan Cukai Bulanan) tax deductions, but you are responsible for filing an annual return via the e-Filing portal by April 30.',
      link: 'https://www.hasil.gov.my/'
    },
    {
      title: 'National Registration (Foreign Worker Card / i-Kad)',
      explanation: 'Foreign workers and long-term residents are issued identification tied to their visa status. Employment Pass holders carry their pass as ID. MM2H holders receive a social visit pass sticker in their passport.',
      importance: 'Your immigration status document is required for identity verification throughout daily life: opening bank accounts, signing tenancy agreements, registering for utilities, and accessing government services. Always carry a copy of your passport and valid pass.',
      link: 'https://www.imi.gov.my/'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a local bank account typically requires your passport, valid work pass or MM2H approval letter, employment letter, and proof of Malaysian address. Major banks include Maybank, CIMB, Public Bank, and HSBC Malaysia.',
      importance: 'A local account is essential for salary payments, utility bills, and daily transactions. Malaysia has embraced cashless payments extensively; DuitNow (inter-bank instant transfer) is widely used. Credit and debit card acceptance is high in urban areas. International transfers are straightforward through major banks.',
      link: 'https://www.bnm.gov.my/'
    },
    {
      title: 'Driving License Conversion',
      explanation: 'Foreign driving licenses can be converted to a Malaysian license at the Road Transport Department (JPJ) if you hold a valid employment pass and your home country has a reciprocal agreement. Otherwise, you must take a Malaysian driving test.',
      importance: 'While Kuala Lumpur has decent public transport, most of Malaysia is car-dependent. Driving without a valid Malaysian license or recognized International Driving Permit can void your insurance and result in fines. Malaysian traffic drives on the LEFT side of the road.',
      link: 'https://www.jpj.gov.my/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Malaysia's economy is diversified across manufacturing, oil and gas, electronics, shared services, Islamic finance, and a rapidly growing tech sector. Kuala Lumpur hosts regional headquarters for many multinationals, while Penang is a major electronics and semiconductor hub. The Iskandar Malaysia economic zone near Singapore attracts companies seeking lower costs with proximity to Singapore's infrastructure. English is the standard working language in most multinational and shared services environments.",
    whereToLook: [
      "LinkedIn",
      "JobStreet (the dominant local job portal)",
      "Indeed Malaysia",
      "Glassdoor",
      "WOBB (startup and SME-focused job platform)"
    ],
    realityChecks: [
      "Malaysia has a dual-track compensation system: 'expat packages' (with housing, schooling, flights) for senior hires and 'local packages' for others. The gap is significant and shrinking as companies localize more roles.",
      "Hiring for foreign nationals requires the employer to demonstrate the role cannot be filled locally, and the Immigration Department actively reviews this for non-senior positions.",
      "Salary negotiations should account for the full package: housing allowance, medical insurance, annual flights, and school fees can add 30-50% to the effective compensation.",
      "The gig economy and freelance market is growing but operates in a legal gray area for foreigners without specific work authorization."
    ]
  },
  salaryReality: {
    overview:
      "Salaries in Malaysia are lower than in Singapore, Hong Kong, or Australia, but purchasing power is strong due to low living costs. A mid-level professional in KL earns RM 5,000-12,000/month ($1,100-2,600), while senior roles at multinationals range from RM 15,000-40,000+/month. No Malaysian income is tax-free; however, foreign-sourced income remitted to Malaysia by tax residents is exempt from tax (as of recent policy changes, check current status).",
    realityChecks: [
      "The minimum wage is RM 1,500/month ($325) nationwide. Many service and blue-collar workers earn near this level.",
      "EPF (Employees Provident Fund) contributions are mandatory: employees contribute 11% and employers 12-13% of salary. Foreigners on Employment Passes can opt out but lose the employer matching.",
      "Healthcare is often employer-provided through group insurance; the quality of coverage varies significantly. Always check the panel hospitals and coverage limits.",
      "International school fees for expat children range from RM 20,000-80,000+ per year per child ($4,300-17,300), making education a major cost consideration."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Whether the quoted salary is gross or net, and whether EPF/SOCSO deductions are included",
      "Housing costs, which vary dramatically: RM 1,500-3,500/month for a condo in KL vs. RM 800-1,500 in Penang or Johor Bahru",
      "The cost of alcohol, which is heavily taxed (a bottle of wine costs RM 60-150, a pint of beer RM 15-25 at a bar)",
      "Car ownership costs, including high excise duties that make imported vehicles 50-100% more expensive than in their home markets"
    ]
  },
  housingSystem: {
    overview:
      "Malaysia has an abundant rental market, particularly in Kuala Lumpur, Penang, and Johor Bahru. Condominiums with facilities (pool, gym, security) are the standard expat choice. In KL, popular areas include Mont Kiara, Bangsar, KLCC, Damansara Heights, and Sri Hartamas. In Penang, Tanjung Bungah, Gurney Drive, and George Town are preferred. Rents are paid monthly, typically with a security deposit of 2 months' rent plus a 0.5 month utility deposit.",
    expectations:
      "Start your search on iProperty.com.my, PropertyGuru Malaysia, or Mudah.my. Agents typically charge the landlord, not the tenant. Inspect the property in person, test air conditioning units (your lifeline in the tropics), check water pressure, and verify that the tenancy agreement is stamped with LHDN (a legal requirement that protects both parties). Expect furnished or semi-furnished units as standard. A spacious 2-bedroom condo with pool and gym in a good KL area rents for RM 2,000-4,500/month ($430-970)."
  },
  healthcareReality:
    "Malaysia is a medical tourism destination for good reason: private healthcare is high quality, English-speaking, and affordable by Western standards. Major private hospital groups include KPJ Healthcare, Pantai Hospital (part of IHH Healthcare), Gleneagles, Sunway Medical Centre, and Prince Court Medical Centre. A specialist consultation costs RM 100-300 ($22-65), and even complex procedures are a fraction of US or European prices. Public hospitals (government hospitals) offer heavily subsidized care for residents: RM 1 ($0.22) for an outpatient visit and RM 5 for a specialist referral. Wait times are longer and facilities more basic, but clinical quality is generally competent. Employer-provided health insurance is standard for Employment Pass holders and typically covers the policyholder and dependents at panel hospitals. Pharmacies (Guardian, Watsons, independent pharmacies) are plentiful, and many medications are available over the counter at reasonable prices.",
  digitalLife: {
    overview:
      "Malaysia is one of the most digitally advanced countries in Southeast Asia. High-speed broadband (fiber up to 1 Gbps from providers like Unifi by TM, Maxis, and Time Internet) covers most urban areas. The government's MyDigital initiative continues to expand 5G coverage. Cashless transactions are routine in cities, with QR codes and e-wallets accepted at hawker stalls, wet markets, and roadside vendors alongside malls and restaurants.",
    essentials: [
      "Touch 'n Go eWallet (dominant e-wallet for transit, tolls, parking, and retail payments)",
      "Grab (ride-hailing, food delivery, and GrabPay wallet all-in-one)",
      "MySejahtera (government health and services app, still used for some official functions)",
      "Shopee and Lazada (dominant e-commerce platforms for online shopping)"
    ],
    whatSurprisesNewcomers: [
      "E-wallets (Touch 'n Go, GrabPay, Boost) are more commonly used than physical credit cards for daily transactions, even at small roadside stalls.",
      "Internet speeds are genuinely fast and reliable in urban areas; Malaysia consistently ranks in the top 30 globally for fixed broadband speed.",
      "Government services are increasingly available online through the MyGovernment portal, though some processes still require physical visits.",
      "Food delivery apps are so embedded in daily life that even traditional hawker stalls have GrabFood or ShopeeFood listings."
    ]
  },
  culture: {
    text: "Malaysia's cultural landscape is shaped by three major ethnic communities: Malay (approximately 70%, Muslim), Chinese (approximately 23%, Buddhist/Taoist/Christian), and Indian (approximately 7%, Hindu/Muslim/Sikh), plus indigenous groups in Sabah and Sarawak. This creates a society where mosques, temples, churches, and gurdwaras stand on the same street, and where Hari Raya, Chinese New Year, Deepavali, and Christmas are all public holidays. Food is the great unifier and national conversation topic; asking 'Have you eaten?' (Sudah makan?) is a standard greeting. While the communities live harmoniously, social circles often form along ethnic lines, and government policies (Bumiputera affirmative action for Malays and indigenous peoples) are a sensitive and ever-present topic. Malaysian communication style is indirect and face-saving; people avoid direct confrontation, and 'yes' does not always mean agreement. The hierarchy of respect follows age and status closely.",
    highlights: [
      "Remove your shoes before entering any Malaysian home and many businesses. This is universal across all ethnic groups.",
      "During Ramadan (dates shift annually), avoid eating, drinking, or smoking in public during daylight hours in Malay-majority areas. Many Malay restaurants close during the day but night markets and bazaars are vibrant.",
      "Use your right hand for eating, passing objects, and greeting. The left hand is considered unclean.",
      "Avoid sensitive topics: religion, race, the royal families (Sultans), and Bumiputera policies. Malaysia has strict sedition and lese-majeste laws.",
      "The concept of 'face' (maruah) is paramount. Public criticism, direct refusal, or aggressive negotiation will damage relationships. Approach disagreements indirectly and privately."
    ]
  },
  transportationMobility:
    "Kuala Lumpur has the best public transport network in Malaysia: the LRT (Kelana Jaya and Ampang lines), MRT (Kajang and Putrajaya lines), KTM Komuter, Monorail, and the KLIA Ekspres to the airport. The Touch 'n Go card works across all rail systems and buses. Outside the KL city center, however, public transport drops off sharply and car ownership becomes near-essential. Grab is the dominant ride-hailing app and is affordable, reliable, and available nationwide. Penang has a limited bus network (Rapid Penang) supplemented by Grab. Johor Bahru is almost entirely car-dependent. Malaysian tolled highways (PLUS, KESAS) are well-maintained and connect major cities efficiently. Driving is on the LEFT side of the road. Traffic congestion in KL is notorious during peak hours, particularly on the Federal Route 2 (KLIA highway) and Jalan Kuching corridor.",
  internationalConnectivity:
    "Kuala Lumpur International Airport (KLIA and KLIA2) is one of Southeast Asia's major aviation hubs, serving over 60 airlines with direct flights to destinations across Asia, the Middle East, Europe, and Oceania. AirAsia, based at KLIA2, is the region's largest low-cost carrier and offers cheap flights throughout ASEAN. Malaysia Airlines operates full-service routes to London, Tokyo, Sydney, and dozens of regional destinations. Flight times: Singapore 1 hour, Bangkok 2 hours, Dubai 7 hours, London 13 hours. Penang International Airport offers growing international connections, particularly to regional cities. Kota Kinabalu (Sabah) and Kuching (Sarawak) on Borneo have their own international airports with connections to East Asian cities.",
  travelExploration:
    "Malaysia offers extraordinary diversity for domestic travel. The Cameron Highlands provide a cool escape with tea plantations and strawberry farms. Langkawi is a duty-free island with beaches and mangroves. The Perhentian Islands and Tioman Island offer some of the best diving and snorkeling in Southeast Asia. Malaysian Borneo (Sabah and Sarawak) features Mount Kinabalu (4,095m, Southeast Asia's highest peak), the Sepilok Orangutan Rehabilitation Centre, and the Mulu Caves (UNESCO World Heritage Site). Melaka and George Town are both UNESCO heritage cities with rich colonial and multicultural history. Weekend trips to Singapore (bus from JB takes 1-2 hours), Thailand (short flights to Hat Yai or Bangkok), and Indonesia (ferries to Sumatra) are easy and popular.",
  considerations: [
    "Alcohol Taxation: Alcohol is legal but heavily taxed in this Muslim-majority country. A bottle of wine at a supermarket costs RM 60-150 ($13-33), a pint of craft beer at a bar RM 25-40 ($5-9). Langkawi is duty-free and significantly cheaper. Budget accordingly if alcohol is part of your lifestyle.",
    "Conservative Areas: While Kuala Lumpur and Penang are cosmopolitan, rural and east coast states (Kelantan, Terengganu) are more conservative. Dress modestly when visiting government offices, mosques, and rural areas. Cover shoulders and knees as a baseline.",
    "Haze Season: Periodically between June and October, transboundary haze from agricultural burning in Indonesia pushes air quality to unhealthy levels. The Air Pollutant Index (API) can exceed 200 (very unhealthy). Keep N95 masks handy and consider an air purifier.",
    "Dual Legal System: Syariah (Islamic) law applies to Muslims in Malaysia for personal matters (marriage, inheritance, morality offenses). Non-Muslims are governed by civil law. This dual system occasionally creates situations that confuse newcomers, particularly around interreligious relationships.",
    "Strata Title and Maintenance Fees: If renting a condo, understand that maintenance fees (paid by the owner but often passed to tenants in the rental price) vary enormously. A well-managed building with good facilities might charge RM 300-800/month. Poorly managed buildings with high fees and deteriorating facilities are a common complaint."
  ],
  mistakes: [
    "Touching someone's head, including children's. The head is considered the most sacred part of the body across all Malaysian cultures.",
    "Using the left hand to eat, pass objects, or gesture. The left hand is associated with personal hygiene and is considered unclean.",
    "Displaying public affection beyond hand-holding. PDA is frowned upon, and in some states, it can lead to unwanted attention from religious enforcement officers (for Muslims) or general social disapproval.",
    "Criticizing Islam, the Malaysian royalty (Sultans), or government racial policies publicly. Malaysia has active sedition laws and social media monitoring. These topics are for private, trusted conversations only.",
    "Ignoring the diversity of Malaysian food by sticking to familiar chains. The hawker stalls, kopitiams, and mamak restaurants serve some of the best food in the world at prices under RM 10 ($2.15). Ask locals for their favorites; food recommendations are the fastest way to build rapport."
  ],
  emergency: [
    {
      number: '999',
      service: 'Police, Fire, Ambulance',
      description: 'Unified emergency number for all services. Operators speak Malay and English.'
    },
    {
      number: '112',
      service: 'Mobile Emergency',
      description: 'Alternative emergency number that works from mobile phones, including without a SIM card.'
    },
    {
      number: '15999',
      service: 'Malaysian Civil Defence (JPAM)',
      description: 'Civil defence and disaster response hotline for floods, landslides, and natural disasters.'
    }
  ],
  sources: [
    {
      name: 'Immigration Department of Malaysia',
      category: 'Immigration & Visas',
      description: 'Official portal for visa applications, work permits, pass renewals, and immigration regulations.',
      link: 'https://www.imi.gov.my/'
    },
    {
      name: 'MDEC (Malaysia Digital Economy Corporation)',
      category: 'Digital Nomad Program',
      description: 'Manages the DE Rantau Nomad Pass program and digital economy initiatives.',
      link: 'https://mdec.my/derantau'
    },
    {
      name: 'LHDN (Inland Revenue Board)',
      category: 'Taxation',
      description: 'Tax authority handling tax registration, filing, and compliance for residents and businesses.',
      link: 'https://www.hasil.gov.my/'
    },
    {
      name: 'Tourism Malaysia',
      category: 'Tourism & Travel',
      description: 'Official tourism body with destination guides, events, and visitor information.',
      link: 'https://www.malaysia.travel/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Malaysia, consult the Malaysian Ministry of Foreign Affairs or a Malaysian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/malaysia',
    mfaLink: 'https://www.kln.gov.my/'
  },
  serviceDirectory: {
    title: "Service Directory - Malaysia",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Malaysia.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal assistance for visa applications, work permits, and residency matters in Malaysia.",
        providers: [
          { name: "Fragomen Malaysia", link: "https://www.fragomen.com" },
          { name: "Azmi & Associates", link: "https://www.azmilaw.com" },
          { name: "Lee Hishammuddin Allen & Gledhill", link: "https://www.lh-ag.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Professionals handling property sales, rentals, and relocation housing in Malaysia.",
        providers: [
          { name: "Knight Frank Malaysia", link: "https://www.knightfrank.com.my" },
          { name: "CBRE Malaysia", link: "https://www.cbre.com.my" },
          { name: "IQI Global", link: "https://iqiglobal.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Malaysian tax rules, payroll, EPF compliance, and cross-border income planning.",
        providers: [
          { name: "PwC Malaysia", link: "https://www.pwc.com/my" },
          { name: "EY Malaysia", link: "https://www.ey.com/en_my" },
          { name: "KPMG Malaysia", link: "https://kpmg.com/my" }
        ]
      },
      {
        name: "Moving Companies",
        description: "Relocation services for international shipping, packing, and local moves.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Asian Tigers Mobility", link: "https://www.asiantigers-mobility.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Schools and courses for Bahasa Malaysia and Mandarin language learning.",
        providers: [
          { name: "British Council Malaysia", link: "https://www.britishcouncil.my" },
          { name: "ELC Malaysia", link: "https://elc.edu.my" },
          { name: "Language House Malaysia", link: "https://www.languagehouse.com.my" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major hospitals and healthcare groups for medical services in Malaysia.",
        providers: [
          { name: "KPJ Healthcare", link: "https://kpjhealth.com.my" },
          { name: "Pantai Hospital", link: "https://www.pantai.com.my" },
          { name: "Gleneagles Hospital Kuala Lumpur", link: "https://www.gleneagles.com.my" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms connecting international talent with Malaysian employers.",
        providers: [
          { name: "Michael Page Malaysia", link: "https://www.michaelpage.com.my" },
          { name: "Hays Malaysia", link: "https://www.hays.com.my" },
          { name: "Robert Walters Malaysia", link: "https://www.robertwalters.com.my" }
        ]
      }
    ]
  }
};
