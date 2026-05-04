export const laos = {
  id: 'laos',
  slug: 'laos',
  name: 'Laos',
  region: 'Asia',
  complexity: 'Medium',
  languages: ['Lao', 'English (limited)', 'French (older generations, some officials)'],
  shortDescription: 'A quiet, land-locked Southeast Asian nation where Theravada Buddhism, slow rhythms, and opaque bureaucracy shape daily life.',
  heroImage: 'https://images.unsplash.com/photo-1697142429046-60b8efc4b1d5',
  flagAlt: 'Flag of Laos',
  atAGlance: "Laos is the quietest country in mainland Southeast Asia, and that is its defining characteristic. Land-locked, sparsely populated (around 7.5 million people), mountainous, and governed as a one-party state under the Lao People's Revolutionary Party. Daily life moves at a pace newcomers find disorientingly slow — shops close in the early evening, Sunday is genuinely quiet, and the tempo of work and conversation is set by the climate and Theravada Buddhism, not by deadlines. Vientiane, the capital, is a small low-rise riverside city that feels more like a large town with ministries. Luang Prabang, the former royal capital in the north, is the cultural heart and a UNESCO World Heritage site, drawing the larger share of tourists, long-stay visitors, and small expat entrepreneurs. Most expats are diplomats, staff of development agencies (UN, ADB, World Bank, bilateral aid missions), NGO workers, teachers, and a small number of remote workers, restaurateurs, and retirees. Cost of living is low; US dollars and Thai baht circulate alongside the Lao kip (LAK), and cash is still king though local mobile payment apps are spreading fast. Bureaucracy is the main friction: rules are unwritten, discretionary, and often resolved through a local agent rather than a posted procedure. Infrastructure is uneven — the capital has fiber internet and modern cafes, but rural areas still grapple with intermittent electricity, dirt roads, and unexploded ordnance left from the Vietnam War. Healthcare is basic; anything serious is evacuated across the Mekong to Thailand. What surprises newcomers is how courteous and unhurried Lao people are, and how much of daily life is shaped by avoiding confrontation, saving face, and showing respect for monks, elders, and institutions.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: '30 days (eVisa / Visa on Arrival)',
    costOfLiving: 'Low',
    primaryLanguages: 'Lao (Official), limited English in cities, some French',
  },
  visas: [
    {
      name: 'Business Visa (NI-B2)',
      targetAudience: 'Employees of foreign companies, consultants, NGO staff',
      useCase: 'Required for anyone entering Laos to conduct business, attend meetings, provide services, or work for a local or international organization. Requires a sponsoring entity in Laos (company, NGO, or government body) to provide an invitation letter that supports the application at a Lao embassy abroad or, in some cases, through the Ministry of Foreign Affairs. Business visas are typically the precursor to a work permit and long-stay arrangement.',
      duration: '30 days initial, extendable; convertible to longer stays via work permit',
      link: 'https://www.mofa.gov.la/'
    }
  ],
  requirements: [
    {
      title: 'Stay Permit Registration (with General Department of Immigration)',
      explanation: 'Foreigners staying longer than a tourist visa allows must register with the General Department of Immigration through their sponsor (employer, investment entity, or diplomatic mission). In practice, most long-stay expats use a local agent who handles paperwork and carries the passport between offices. Hotels report guests automatically; private landlords are expected to notify the local police or village head when a foreigner moves in.',
      importance: 'Without a valid stay permit or registered address, you are formally a tourist, which limits work, banking, and vehicle registration. Overstay penalties apply per day and are enforced at the border on exit. Keep copies of your visa, entry stamp, and stay-permit documents separate from your passport.',
      link: 'https://immigration.gov.la/'
    },
    {
      title: 'Tax Identification Number (TIN)',
      explanation: 'Issued by the Ministry of Finance / Tax Department, required for anyone receiving employment income, owning a registered business, or paying formal taxes. The employer usually applies on behalf of foreign staff as part of the work-permit bundle. Freelancers and investors apply directly through the provincial tax office where their business is registered.',
      importance: 'Laos has a progressive personal income tax with rates rising into the mid-20s, and compliance is increasingly scrutinised for registered companies and larger employers. Without a TIN you cannot be on a payroll, register a car or property through a company, or be a legal signatory on most corporate accounts. Many smaller employers are informal — do not assume your tax situation is handled unless you have seen the paperwork.',
      link: 'https://www.mof.gov.la/'
    },
    {
      title: 'Foreigner Identification / Stay Book',
      explanation: 'Long-term foreign residents on a work permit or investor arrangement are issued a foreigner ID document and, in some cases, a "stay book" recording the registered address. Used as secondary identification for banking, mobile phone registration, and vehicle ownership. The exact name and format has changed over the years and varies by province.',
      importance: 'Less universally required than equivalent IDs elsewhere, but banks, telecoms, and notaries will often ask for it alongside your passport. Expect to show the original rather than a copy. Replacement is slow and bureaucratic.',
      link: 'https://immigration.gov.la/'
    },
    {
      title: 'Bank Account Opening',
      explanation: 'The main domestic bank is BCEL (Banque Pour Le Commerce Extérieur Lao). Other common options are Joint Development Bank, Lao Development Bank, and Thai/Vietnamese banks with Lao branches (Krungthai, Siam Commercial Bank, Sacombank, BIDV). Opening an account requires a passport, a valid long-stay visa or work permit, an employer letter or business registration, and often a stay permit. Tourists generally cannot open an account.',
      importance: 'A local account is essential for receiving a Lao salary, paying rent by transfer, and using BCEL One and LaoQR payments now standard in Vientiane. International transfers are slow and expensive; many long-stay foreigners keep a foreign account in parallel for savings and use the local account for daily spending.',
      link: 'https://www.bcel.com.la/'
    }
  ],
  jobsAndIncome: {
    overview:
      "The formal job market for foreigners is small and concentrated: development and humanitarian work, diplomatic missions, international schools, hydropower and mining, hospitality, and a handful of foreign-invested manufacturing, logistics, and agribusiness operations tied to Chinese, Thai, Korean, and Japanese capital. Outside these channels, kip salaries are very low, and most Western expats arrive with a posting, work remotely, or run a small business.",
    whereToLook: [
      "108job.la — the largest domestic job portal, mostly for local roles in Vientiane",
      "ReliefWeb and DevNetJobs — for UN, NGO, and bilateral development postings, which are the main formal route for foreigners",
      "LinkedIn — used mainly for international organizations, hydropower projects, and senior hospitality roles",
      "International school recruitment sites (Search Associates, TES, ISS) for teaching positions at Vientiane International School and similar",
      "Word of mouth through the expat community in Vientiane and Luang Prabang — a surprisingly large share of jobs and apartments circulates informally"
    ],
    realityChecks: [
      "English teaching pays less than Thailand and Vietnam. Many positions are at small language centers with informal contracts; reputable international schools are the exception and hire far in advance.",
      "The NGO and development sector is the single largest formal employer of foreigners, but positions require relevant experience and are competitive; many people come in as consultants on specific project cycles.",
      "Remote work for foreign clients is legal in practice but sits in a grey zone for tax and visa purposes. Most digital nomads stay on short visas rather than formalizing their status.",
      "Lao language skills are rare among expats and, where present, dramatically change how you are received — both socially and professionally."
    ]
  },
  salaryReality: {
    overview:
      "Laos is a low-wage economy. Local professional salaries typically run 3 to 10 million kip per month (roughly USD 150 to USD 500), with senior private-sector and international-organization roles paying considerably more. The kip has lost significant value against the dollar and baht, so many contracts, rents, and school fees are quoted in USD or THB. A foreign income of USD 1,500 to 2,500 per month supports a comfortable lifestyle in Vientiane or Luang Prabang.",
    realityChecks: [
      "Rent is the biggest monthly expense. A modern one-bedroom in central Vientiane runs USD 300 to USD 700; standalone villas with gardens go higher. Luang Prabang is slightly cheaper for long-term rentals but supply is narrower.",
      "Currency volatility matters. Kip-denominated salaries have lost purchasing power against imported goods, which is why many employers and landlords quote in USD or THB. Check which currency your contract is in.",
      "Formal credit infrastructure is limited. Most large purchases (cars, deposits, school fees) are cash or bank transfer, and mortgage financing for foreigners is essentially unavailable.",
      "Banking fees on international transfers are high, and USD cash withdrawals are often capped per day. Budget for this friction if you rely on foreign income."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Private health insurance with regional coverage (Bangkok, Udon Thani, Singapore) — essential, not optional, and rarely included in online cost-of-living calculators",
      "Medical evacuation coverage, which is a separate line item from standard health insurance",
      "Visa, work-permit, and agent fees, which accumulate to several hundred dollars per year for most long-stay arrangements",
      "School fees for families — international schools in Vientiane are a significant cost, often the largest single line item after housing"
    ]
  },
  housingSystem: {
    overview:
      "Housing in Laos is informal and negotiable. There is no centralized listing service; most long-term rentals are found through Facebook groups, word of mouth, and by walking neighborhoods and calling numbers posted on houses. In Vientiane, sought-after expat areas are around the city center and the Mekong riverfront (Chanthabouly district), the embassy quarter, and quieter pockets near Patuxay Monument and That Luang. In Luang Prabang, long-term rentals cluster on the old peninsula and surrounding villages across the Nam Khan, with teak houses and small compounds more common than apartments. Foreigners cannot own land directly; they can lease long-term and own structures, but the underlying title remains with a Lao national or the state.",
    expectations:
      "Expect one to two months' rent as deposit and a short, plain-language contract — sometimes Lao, sometimes English, sometimes both. Utilities are usually separate, paid in cash or by transfer to the landlord. Inspect properties in the wet season if possible: flooding, damp, and insect issues reveal themselves between June and October. Never pay a large deposit without seeing the property in person. For any purchase-like arrangement (long lease, construction, joint venture), use an independent Lao lawyer — nominee structures exist but carry real risk."
  },
  healthcareReality:
    "Healthcare in Laos is the most commonly cited reason long-stay foreigners reconsider the country. Public hospitals are under-resourced; private facilities in Vientiane (the French Clinic / Ambassade de France and a few private hospitals) handle routine care, vaccinations, and minor emergencies. Serious illness, surgery, cardiac events, obstetric complications, and trauma are almost always evacuated across the Mekong to Thailand — typically Aek Udon International Hospital in Udon Thani, roughly one hour from Vientiane via the Friendship Bridge, and onward to Bangkok (Bumrungrad, Samitivej, or Bangkok Hospital) for anything complex. Insurance that includes Thailand coverage and a genuine medical-evacuation clause is not optional — it is the single most important piece of paperwork most expats carry. Pharmacies in Vientiane and Luang Prabang stock common medications but quality is uneven; bring a reserve of any prescription you depend on. Dental care is available and affordable, but many expats cross to Thailand for anything beyond a cleaning.",
  digitalLife: {
    overview:
      "Digital life in Laos has advanced faster than newcomers expect, at least in the main cities. Mobile data is cheap, 4G coverage is good in Vientiane, Luang Prabang, and along main highways, and fiber broadband is available in most modern buildings. Cash is still default for small transactions, but BCEL One and LaoQR mobile payments are commonplace in Vientiane restaurants, cafes, and shops. Facebook is the de facto business directory — shops, restaurants, landlords, and even some government services are easier to reach through Facebook pages than websites.",
    essentials: [
      "BCEL One — the BCEL mobile banking and QR payment app, effectively the default digital wallet in Vientiane",
      "Unitel SIM card — the largest mobile operator, partly owned by Viettel (Vietnam); good nationwide coverage and data plans",
      "ETL or Lao Telecom SIM as an alternative — sometimes preferred for fixed-line and broadband bundles",
      "WhatsApp and Facebook Messenger — the main channels for business and social communication, often replacing email",
      "Loca or XanhSM — local ride-hailing apps in Vientiane, supplementing traditional tuk-tuks and songthaews"
    ],
    whatSurprisesNewcomers: [
      "Opening a local bank account is slower than in Cambodia or Thailand, and depends heavily on a sponsor or employer letter — tourists are generally refused.",
      "Power cuts still occur, particularly at the end of the dry season and during heavy storms; a surge protector and a small UPS for home internet are sensible.",
      "Some international sites are intermittently slow or blocked, and there is limited press freedom. VPN use is common among foreigners.",
      "Cash remains dominant outside Vientiane. In smaller towns, assume QR payments will not work and carry kip in small denominations."
    ]
  },
  culture: {
    text: "Lao culture is shaped by Theravada Buddhism, rural kinship networks, and a deeply embedded preference for calm over confrontation. Raising your voice or pushing for a fast decision backfires — the local response is polite, smiling withdrawal, and you simply stop getting what you want. Saving face applies to everyone in an interaction, not only the person being corrected, so criticism is usually indirect and delivered through a third party. Monks occupy the highest place in the social order; the early-morning alms round (tak bat) in Luang Prabang is a living religious ritual, not a tourist performance, and newcomers are expected to know how to watch it respectfully. Baci ceremonies — white-thread wrist-tying rituals — mark births, weddings, departures, and welcomes, and are a common point of contact between foreigners and Lao colleagues or neighbors. The national mood is unhurried; schedules slip, meetings start late, and pushing against this rhythm creates friction rather than speed.",
    highlights: [
      "Always remove shoes before entering a home or a temple (wat).",
      "Do not touch anyone on the head, and avoid pointing the soles of your feet at people, Buddha images, or shrines.",
      "When giving alms to monks or entering a temple, cover shoulders and knees; women should avoid any physical contact with monks and hand items to a male intermediary if needed.",
      "The traditional greeting is the nop — palms pressed together at chest level with a slight bow — similar to the Thai wai and Cambodian sampeah.",
      "Avoid raising your voice in disputes. Calm, smiling persistence gets far more done than frustration, which is read as a loss of self-control."
    ]
  },
  transportationMobility:
    "Urban transport in Laos is a mix of tuk-tuks, songthaews (shared pickup taxis), a small number of metered taxis in Vientiane, and rapidly growing ride-hailing apps (Loca, XanhSM). Motorbikes are the default private vehicle; helmets are legally required and loosely enforced, and road quality varies from well-paved main arteries to seasonal mud tracks off the highway network. The most significant recent change is the China-Laos Railway, which opened in December 2021 between Vientiane and Boten on the Chinese border and connects onward to Kunming; it has dramatically shortened travel to Vang Vieng, Luang Prabang, and Oudomxay and is now the preferred way to travel north. A separate line runs from Vientiane to the Thai border at Thanaleng, with onward connections to the Thai rail network. Long-distance buses still operate but are slower and less comfortable. Domestic flights by Lao Airlines link Vientiane, Luang Prabang, Pakse, and Savannakhet. Foreigners can drive on an International Driving Permit for short stays and can convert to a Lao license through the Ministry of Public Works and Transport for longer stays.",
  internationalConnectivity:
    "Laos has three main international airports: Wattay International Airport in Vientiane (VTE), Luang Prabang International Airport (LPQ), and Pakse International Airport (PKZ). Routes are limited compared with neighbors and concentrated on regional hubs — Bangkok, Chiang Mai, Hanoi, Ho Chi Minh City, Kuala Lumpur, Singapore, Seoul, and several Chinese cities. Lao Airlines is the flag carrier; Thai AirAsia, Thai Airways, Vietnam Airlines, and Bangkok Airways serve the main regional routes. Most intercontinental travel routes via Bangkok. The China-Laos Railway runs north from Vientiane through Luang Prabang to Boten, with through services to Kunming. The Thai-Lao Friendship Bridges across the Mekong (Vientiane-Nong Khai, Savannakhet-Mukdahan, Pakse-Chong Mek, and further north) make Thailand an easy road crossing and the default for medical care, shopping, and long weekends.",
  travelExploration:
    "Luang Prabang, the former royal capital, is the cultural centerpiece: a UNESCO World Heritage town of gilded temples, French-colonial shophouses, and the daily alms round at dawn. Vang Vieng, midway between Vientiane and Luang Prabang, sits in a dramatic karst landscape and has reinvented itself from a backpacker party town into an outdoors destination for kayaking, caves, ballooning, and cycling. The Plain of Jars in Xieng Khouang province, also a UNESCO site, is a haunting archaeological landscape of Iron Age stone jars alongside visible Vietnam War cratering; it is one of the areas most affected by unexploded ordnance, so stick to marked paths and licensed guides. The Bolaven Plateau in the south is cooler, greener, and known for coffee farms, waterfalls, and ethnic minority villages. Si Phan Don (the 4000 Islands) in the Mekong offers a slow river landscape, rare Irrawaddy dolphins, and the country's largest waterfall at Khone Phapheng. Cross-border travel to northern Thailand, Cambodia, and northern Vietnam is straightforward.",
  considerations: [
    "Unexploded ordnance (UXO): Laos is one of the most heavily bombed countries per capita in history. Large areas of rural Xieng Khouang, Houaphanh, Savannakhet, Saravane, and Sekong provinces still contain unexploded cluster munitions. Never leave marked paths in rural areas, never dig or burn fields without local advice, and use licensed guides for off-the-beaten-track travel.",
    "Opaque governance: Laos is a one-party state under the Lao People's Revolutionary Party. Rules, licensing, and enforcement can change without notice, and many procedures are negotiated informally. Avoid political commentary, protests, and online behavior that could be read as criticism of the state or party. Press freedom is limited.",
    "Healthcare limits: serious illness or injury requires evacuation to Thailand (Udon Thani for quick care, Bangkok for anything complex). International health insurance with regional coverage and an evacuation clause is essential.",
    "Wet season disruption: from roughly June to October, heavy rains flood low-lying parts of Vientiane, cut off rural roads, and disrupt domestic flights. Plan travel with slack, and check for landslide warnings on northern routes.",
    "Foreigners cannot own land: under Lao law, foreigners may lease long-term and own buildings, but title remains with a Lao national or the state. Nominee structures carry genuine risk; always use an independent lawyer rather than one recommended only by the seller.",
    "Slow, discretionary bureaucracy: work permits, business licenses, and visa extensions depend on the sponsor's relationships and on whichever official handles the file. Build in time, work through a local agent, and do not assume a written rule is the operative rule."
  ],
  mistakes: [
    "Assuming it works like Thailand. Laos looks like a quieter Thailand on the surface, but rules, infrastructure, and pace are meaningfully different. Many procedures routine in Bangkok or Chiang Mai require a sponsor, fixer, or local agent in Vientiane.",
    "Pushing hard on bureaucracy. Raised voices and ultimatums slow things down or stop them entirely. Calm persistence, polite repetition, and working through intermediaries is how things move.",
    "Skipping regional health insurance and evacuation coverage. Anything beyond routine illness is managed outside the country, and the costs of an uninsured airlift or Bangkok ICU stay are severe.",
    "Buying 'land' through a nominee structure without independent legal advice. Foreigners cannot hold freehold title; arrangements that look like ownership can collapse if the relationship sours. Long leases and building ownership, properly documented, are safer.",
    "Wandering off marked paths in rural areas. UXO contamination is a real, ongoing risk in several provinces. Use licensed guides, stay on paths, and ask locally before exploring fields, forests, or old trails.",
    "Entering on a tourist visa and trying to work. Remote work for foreign clients sits in a grey zone, but taking local paid work without a proper work permit is a clear violation and can result in fines, deportation, and re-entry bans."
  ],
  emergency: [
    {
      number: '191',
      service: 'Police',
      description: 'National police emergency number. English is rarely available; having a Lao speaker assist is often necessary. In Vientiane, embassies can also help with serious incidents.'
    },
    {
      number: '190',
      service: 'Fire Department',
      description: 'Fire emergency services. Response times and coverage vary significantly between the capital and rural provinces.'
    },
    {
      number: '195',
      service: 'Ambulance',
      description: 'Emergency medical services. Response times are limited; in practice, many expats arrange private transport directly to a known private clinic or to Thailand for serious cases, rather than waiting for an ambulance.'
    }
  ],
  sources: [
    {
      name: 'Lao eVisa Portal',
      category: 'Immigration',
      description: 'Official electronic visa application portal of the Lao PDR government.',
      link: 'https://laoevisa.gov.la/'
    },
    {
      name: 'Ministry of Foreign Affairs of the Lao PDR',
      category: 'Immigration & Consular',
      description: 'Official guidance on visas, diplomatic relations, and consular services.',
      link: 'https://www.mofa.gov.la/'
    },
    {
      name: 'General Department of Immigration',
      category: 'Immigration',
      description: 'Stay permits, visa extensions, and immigration regulations under the Ministry of Public Security.',
      link: 'https://immigration.gov.la/'
    },
    {
      name: 'Investment Promotion Department (Ministry of Planning and Investment)',
      category: 'Business & Investment',
      description: 'Business registration, investment incentives, and information for foreign investors in Laos.',
      link: 'https://www.investlaos.gov.la/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa inquiries, and official guidance related to Laos, consult the Lao Ministry of Foreign Affairs or a Lao embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/laos',
    mfaLink: 'https://www.mofa.gov.la/'
  },
  serviceDirectory: {
    title: "Service Directory - Laos",
    description: "Examples of commonly used service providers people interact with when relocating to Laos. The market in Laos is smaller than in neighboring countries, so choices are more limited.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Services",
        description: "Law firms and advisory services with experience in Lao visas, work permits, and business registration.",
        providers: [
          { name: "DFDL Laos", link: "https://www.dfdl.com" },
          { name: "Arion Legal Laos", link: "https://www.arionlegal.la" }
        ]
      },
      {
        name: "Real Estate",
        description: "Platforms and agencies used to find rental housing and commercial space in Vientiane and Luang Prabang.",
        providers: [
          { name: "RentsBuy Laos", link: "https://www.rentsbuy.com" },
          { name: "Plaosone Real Estate", link: "https://www.plaosone.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Firms handling tax compliance, audit, and advisory for foreign-invested companies and expatriates in Laos.",
        providers: [
          { name: "KPMG Laos", link: "https://kpmg.com/la" },
          { name: "PwC Laos", link: "https://www.pwc.com/la" },
          { name: "Ernst & Young Laos", link: "https://www.ey.com/en_la" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International relocation services that handle inbound and outbound shipments to and from Laos, usually routed via Thailand.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Asian Tigers Mobility", link: "https://www.asiantigers-mobility.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" }
        ]
      },
      {
        name: "Language Schools",
        description: "Options for learning Lao language, mostly through informal tutors and a small number of language centers in Vientiane.",
        providers: [
          { name: "Lao Language and Culture Learning Centre", link: "https://www.laolanguagecentre.com" },
          { name: "Vientiane College (language programmes)", link: "https://www.vientianecollege.edu.la" }
        ]
      },
      {
        name: "Healthcare",
        description: "Private clinics in Vientiane that serve the expatriate community, and the Thai hospitals commonly used for anything serious.",
        providers: [
          { name: "Alliance International Medical Centre (Vientiane)", link: "https://www.aimclao.com" },
          { name: "French Medical Centre (Centre Médical de l'Ambassade de France)", link: "https://www.ambafrance-laos.org" },
          { name: "Aek Udon International Hospital (Udon Thani, Thailand)", link: "https://www.aekudon.com" }
        ]
      }
    ]
  }
};
