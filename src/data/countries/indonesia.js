export const indonesia = {
  id: 'indonesia',
  slug: 'indonesia',
  name: 'Indonesia',
  region: 'Asia',
  complexity: 'High',
  languages: ['Indonesian (Bahasa)'],
  shortDescription: 'An archipelago of 17,000 islands, offering everything from Bali\'s beaches to Jakarta\'s bustle.',
  heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
  flagAlt: 'Flag of Indonesia',
  atAGlance: "Indonesia is the world's largest archipelago — over 17,000 islands stretching across more than 5,000 kilometers of equatorial ocean, home to 280 million people speaking over 700 languages. For most foreigners, Indonesia means one of two things: Bali or Jakarta. Bali has become the global capital of digital nomad culture, offering an intoxicating combination of affordable living, surfing, yoga, rice terrace landscapes, Hindu temple ceremonies, and a massive international community centered around Canggu, Ubud, and Seminyak. Jakarta, by contrast, is a sprawling, chaotic megacity of 30+ million people where serious business gets done — the financial hub, government center, and home to multinational regional offices. Life in Indonesia moves on 'jam karet' (rubber time) — schedules are flexible, appointments are approximate, and patience is a daily requirement. The cost of living is remarkably low, allowing foreigners with moderate incomes to live extremely well. Locals are exceptionally warm, community-oriented, and hospitable. However, the bureaucracy is notoriously opaque and frequently changing — immigration rules shift without warning, enforcement varies by region and officer, and having a reliable local agent or fixer is practically essential. Infrastructure varies wildly between islands: Jakarta has modern highways and skyscrapers, Bali has legendary traffic jams on narrow roads, and many outer islands have limited electricity and internet. Indonesia rewards those who embrace uncertainty, build genuine local relationships, and approach daily life with humor and flexibility.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: '30 days (VOA) / 60 days (B211A)',
    costOfLiving: 'Low',
    primaryLanguages: 'Bahasa Indonesia',
  },
  visas: [
    {
      name: 'Visa on Arrival (VOA)',
      targetAudience: 'Tourists, Short-term visitors',
      useCase: 'Available at major airports and seaports for citizens of 90+ countries. Costs IDR 500,000 (approximately $32 USD). Grants 30 days and can be extended once for an additional 30 days at a local immigration office. The extension process takes 5-7 working days and requires a visit to the immigration office where you entered the country.',
      duration: '30 days, extendable once to 60 days',
      link: 'https://www.imigrasi.go.id/'
    },
    {
      name: 'B211A Visit Visa (Social/Tourist)',
      targetAudience: 'Digital nomads, Long-term visitors',
      useCase: 'A 60-day visit visa that can be extended twice for 60 days each, providing up to 180 days total. Applied for online through the Indonesian immigration portal or through a visa agent. Requires a sponsor (can be a travel agent or visa service company). This is the most common visa for digital nomads and long-term visitors. Cannot legally be used for employment with Indonesian companies.',
      duration: '60 days, extendable to 180 days',
      link: 'https://www.imigrasi.go.id/'
    },
    {
      name: 'KITAS (Limited Stay Permit — Working)',
      targetAudience: 'Employed professionals, Sponsored workers',
      useCase: 'The standard work permit for foreign employees of Indonesian-registered companies. The employer applies through the Ministry of Manpower for an IMTA (work permit) and then processes the KITAS through immigration. Requirements include a work plan (RPTKA), university degree, and relevant experience. The process is complex, expensive (costs are borne by the employer), and typically handled by immigration agents.',
      duration: '6-12 months, renewable up to 4 years',
      link: 'https://www.imigrasi.go.id/'
    },
    {
      name: 'Second Home Visa',
      targetAudience: 'Wealthy individuals, Retirees',
      useCase: 'For foreign nationals who can demonstrate financial means of approximately IDR 2 billion ($130,000 USD) in savings or property, or a combination thereof. Allows long-term residency without traditional employer sponsorship. Can be used for remote work and studying but not for employment with Indonesian companies.',
      duration: '5-10 years',
      link: 'https://www.imigrasi.go.id/'
    },
    {
      name: 'E33G Digital Nomad Visa (Bali)',
      targetAudience: 'Remote workers, Digital nomads',
      useCase: 'Indonesia introduced a dedicated digital nomad visa allowing remote workers to live and work remotely from Indonesia (primarily Bali). Applicants must earn at least $2,000/month from foreign sources and have comprehensive health insurance. Income earned in Indonesia is tax-exempt under this program. Applied for through designated agents or the immigration portal.',
      duration: 'Up to 5 years',
      link: 'https://www.imigrasi.go.id/'
    }
  ],
  requirements: [
    {
      title: 'SKTT/STM (Domicile Registration)',
      explanation: 'When staying outside of hotels for an extended period, foreign residents may need to register their presence with the local Banjar (community association) or RT/RW (neighborhood association). Requirements vary by area and enforcement is inconsistent, but in many parts of Bali and Java, landlords are expected to report foreign tenants.',
      importance: 'While enforcement varies, failing to register can create problems during visa extensions or if police conduct checks. Your landlord or villa manager should handle this process. In Bali, the local Banjar is a powerful community organization, and maintaining good relations with them (including small donations for ceremonies) is important for harmonious living.',
      link: 'https://www.imigrasi.go.id/'
    },
    {
      title: 'NPWP (Tax Identification Number)',
      explanation: 'Nomor Pokok Wajib Pajak — the Indonesian tax identification number issued by the Directorate General of Taxes. Required for anyone holding a KITAS or KITAP (permanent stay permit) and earning income in Indonesia. Can be obtained at the local tax office (Kantor Pajak) with your passport and KITAS.',
      importance: 'An NPWP is mandatory if you have a KITAS and earn income. Without it, withholding tax rates are higher (20% instead of the normal progressive rates). It is also required for opening full-service Indonesian bank accounts, purchasing property (through nominee arrangements for foreigners), and conducting significant financial transactions.',
      link: 'https://www.pajak.go.id/'
    },
    {
      title: 'IMEI Registration (Phone Registration)',
      explanation: 'Indonesia requires all mobile phones used with local SIM cards to have their IMEI (International Mobile Equipment Identity) registered with customs. Phones brought into the country by travelers are allowed a 90-day grace period, after which the IMEI must be registered or the device will be blocked from Indonesian mobile networks.',
      importance: 'If you are staying long-term and using a local SIM card, failure to register your phone\'s IMEI will result in it being disconnected from all Indonesian mobile networks. Registration can be done at the airport customs desk on arrival (recommended) or online through the Bea Cukai (customs) portal. The process is free for devices valued under IDR 7 million.',
      link: 'https://www.beacukai.go.id/register-imei.html'
    },
    {
      title: 'Bank Account',
      explanation: 'Foreign residents can open accounts at major Indonesian banks including Bank Central Asia (BCA), Bank Mandiri, BNI, and CIMB Niaga. A KITAS is required for full accounts with ATM cards and internet banking. Some banks offer limited accounts for tourist visa holders. BCA is the most widely accepted for domestic transfers.',
      importance: 'A local bank account simplifies rent payments, utility bills, and daily transactions. Indonesia is still largely a cash economy for small transactions, but digital payments through GoPay, OVO, and DANA are rapidly expanding. International transfer fees from Indonesian banks can be high — many expats use Wise or similar services for transfers to their home country.',
      link: 'https://www.bi.go.id/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Indonesia's economy is the largest in Southeast Asia, with opportunities for foreigners concentrated in Jakarta (finance, consulting, tech, oil and gas), Bali (tourism, hospitality, creative industries), and Surabaya (manufacturing, logistics). The tech startup scene has produced unicorns like GoTo, Tokopedia, and Traveloka. However, work permits are strictly regulated and expensive for employers, which limits formal employment opportunities for foreigners.",
    whereToLook: [
      "LinkedIn",
      "JobStreet Indonesia",
      "Kalibrr",
      "Glints (popular for tech and startup roles)",
      "Bali-specific job boards (BaliJobs.com, Bali Expat Facebook groups)"
    ],
    realityChecks: [
      "Work permits (IMTA + KITAS) are employer-sponsored, expensive (costing the employer $1,500-5,000+), and strictly regulated. Each foreign worker requires a work plan approved by the Ministry of Manpower, and the employer must demonstrate a training commitment for Indonesian counterparts.",
      "Bahasa Indonesia skills significantly improve both employability and daily quality of life. While English is used in multinational offices and Bali's tourism sector, Indonesian is the working language for most local businesses and government interactions.",
      "Salaries in Indonesia vary wildly by sector and city. A mid-level professional in Jakarta earns IDR 10-25 million/month ($640-1,600 USD), while a foreign expat package at a multinational can include housing, car, driver, and school fees worth multiples of the base salary.",
      "Many foreigners in Bali work remotely for foreign companies or as freelancers. This exists in a legal grey area — technically, any work performed in Indonesia requires a work permit, but enforcement for remote workers has been minimal. The new digital nomad visa provides a legal pathway."
    ]
  },
  salaryReality: {
    overview:
      "Indonesia's cost of living is remarkably low, which is the primary financial attraction. In Bali, a comfortable lifestyle with a modern villa, scooter, regular dining out, and coworking space costs $1,500-2,500/month. In Jakarta, the same quality of life costs $2,000-4,000/month due to higher rents, transportation costs (driver or ride-hailing), and the need for air conditioning in the tropical heat. Local salaries are low by international standards — the minimum wage in Jakarta is approximately IDR 5 million/month ($320 USD).",
    realityChecks: [
      "Take-home pay for locally employed foreigners depends heavily on the benefits package. Expat packages at multinationals often include housing, car and driver, school fees, annual flights, and health insurance, which can double or triple the effective compensation.",
      "Living costs spike sharply in expat-oriented areas of Bali (Canggu, Seminyak) and Jakarta (Menteng, Kemang, SCBD). Moving slightly outside these areas can cut costs by 30-50% without significant sacrifice in quality.",
      "Indonesia applies a progressive income tax from 5% to 35% on residents (those present for 183+ days per year). Non-residents are taxed at a flat 20% on Indonesian-sourced income. Tax compliance is handled through the annual SPT filing.",
      "The Indonesian rupiah is relatively stable but has depreciated against the US dollar over time. Keeping savings in a foreign currency account or transferring regularly is common practice among foreign residents."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Mandatory social security contributions (BPJS Ketenagakerjaan and BPJS Kesehatan) for KITAS holders, which are shared between employer and employee",
      "Housing and transportation allowances, which form a major part of compensation at multinationals but are absent from base salary figures",
      "The dramatic cost difference between local-style and expat-style living — eating at a warung costs IDR 20,000, while a restaurant meal in Seminyak costs IDR 200,000+",
      "Visa and agent costs for those on tourist or social visas, which can amount to $500-1,500 per year in extensions and processing fees"
    ]
  },
  housingSystem: {
    overview:
      "Housing options range from traditional Balinese villas and Javanese houses to modern high-rise apartments in Jakarta. In Bali, most expats rent villas (rumah) in Canggu, Ubud, Seminyak, or Uluwatu, typically paying $500-2,000/month for a furnished one or two-bedroom villa with a pool shared with other units. In Jakarta, expats concentrate in Menteng, Kemang, Pondok Indah, and the SCBD (Sudirman Central Business District), where modern apartments rent for IDR 8-25 million/month ($500-1,600 USD) for a one to two-bedroom unit.",
    expectations:
      "In Bali, search through Facebook groups (Canggu Community, Ubud Community), local agents, and walking or driving around target neighborhoods to spot 'For Rent' signs. Many of the best villas are not listed online. In Jakarta, use OLX Indonesia, Rumah.com, or agent networks. Always inspect the property during rainy season conditions if possible — flooding and water intrusion are common in low-lying areas. Check water quality, generator availability, and internet speed before committing. Leases are typically annual with significant discounts for prepaying the full year upfront. Security deposits are one to three months' rent. In Bali, villa staff (cleaner, gardener) are often included in the rent and expect a small tip during holidays."
  },
  healthcareReality:
    "Indonesia has a two-tier healthcare system. The public system (covered by BPJS Kesehatan, the national health insurance) provides basic care but is overwhelmed and under-resourced. Most expats use private hospitals exclusively. In Jakarta, Siloam Hospitals (multiple locations), RS Pondok Indah, and MRCCC Siloam are among the top private facilities, offering international-standard care. In Bali, BIMC Hospital (Kuta and Nusa Dua locations), Kasih Ibu Hospital, and Prima Medika Hospital serve the expat community. KITAS holders are required to enroll in BPJS Kesehatan (approximately IDR 150,000/month for the top tier), but virtually all expats supplement this with private insurance from providers like Pacific Cross, Cigna, or Allianz. A specialist consultation at a private hospital costs IDR 300,000-500,000 ($20-32 USD). Pharmacies (apotek) are widespread, and many medications are available over the counter. For complex conditions, Singapore is the nearest destination for world-class medical care — just 1.5 hours by flight from Jakarta or 2.5 hours from Bali.",
  digitalLife: {
    overview:
      "Indonesia is one of the most digitally active countries in the world, with over 200 million internet users. The app ecosystem is incredibly mature — ride-hailing, food delivery, grocery shopping, bill payment, and even government services are all app-based. The super-app model pioneered by Gojek (now GoTo) and Grab means a single app handles transportation, food, payments, and services.",
    essentials: [
      "Gojek or Grab (super-apps for ride-hailing, food delivery, payments, and dozens of other services)",
      "GoPay, OVO, or DANA (digital wallets — essential for daily transactions, including paying at warungs and street vendors)",
      "Tokopedia or Shopee (e-commerce platforms for everything from electronics to groceries)",
      "IndiHome or Biznet (home internet providers; Starlink is also now available)"
    ],
    whatSurprisesNewcomers: [
      "Gojek and Grab are not just ride-hailing apps — they are integrated platforms for food delivery, package courier, cleaning services, massage appointments, grocery shopping, and mobile payments. Life in Indonesia revolves around these apps.",
      "Digital wallets (GoPay, OVO, DANA) are accepted everywhere, including tiny warungs, market stalls, and parking attendants. Cash is declining rapidly, especially in urban areas and Bali.",
      "Internet infrastructure is improving fast. Fiber broadband from IndiHome (Telkomsel) and Biznet is available in most urban areas, with speeds of 20-100 Mbps. Starlink is becoming popular in areas with poor fixed infrastructure. However, outages during heavy rain are common.",
      "Some international websites and services are blocked by the Indonesian government (including some VPN protocols and adult content). Most expats use a VPN service as a standard part of their digital setup."
    ]
  },
  culture: {
    text: 'Indonesia is the world\'s most populous Muslim-majority country, but its cultural identity is far more complex than any single religion. The national philosophy "Bhinneka Tunggal Ika" (Unity in Diversity) reflects the extraordinary variety of ethnic groups, religions, and traditions across the archipelago. Bali is predominantly Hindu, with daily offerings (canang sari) placed on sidewalks, temple ceremonies, and a deeply spiritual relationship with nature. Java blends Islam with ancient Javanese traditions and mysticism. Social interactions across Indonesia are governed by a strong emphasis on harmony, politeness, and avoiding conflict. Indonesians rarely say "no" directly — "belum" (not yet) or "mungkin" (maybe) are common substitutes. Losing your temper in public causes both you and the other person to lose face, and the social consequences can be severe. Food is central to social life: eating together, sharing dishes, and trying local specialties are key bonding activities. Indonesian cuisine is extraordinarily diverse, with each island and ethnic group contributing distinctive dishes.',
    highlights: [
      'Never point with your index finger — use your thumb (with fingers curled) or an open palm gesture. Pointing with a finger is considered rude across Indonesia.',
      'Use your right hand for giving and receiving items, eating, and handshakes. The left hand is considered unclean. If you must use both hands, that is also acceptable.',
      'Getting visibly angry in public is one of the worst social mistakes you can make. Indonesians value "sabar" (patience) and "tenang" (calm). Losing your temper results in immediate loss of respect and cooperation.',
      'In Bali, step around (never on) the canang sari offerings placed on the ground outside homes and shops. These are daily religious offerings to the spirits, and stepping on them is deeply disrespectful.',
      'Dress modestly when visiting temples (sarong and sash required at Balinese temples) and mosques (long sleeves, head covering for women). In everyday life, Bali is relaxed about dress, while Java and other Muslim-majority areas expect more modest clothing.'
    ]
  },
  transportationMobility:
    "Transportation in Indonesia varies dramatically by island and city. In Jakarta, traffic congestion is severe — commutes of 2-3 hours are normal during peak times. The TransJakarta BRT system provides dedicated bus lanes across the city, and the MRT (opened 2019) serves a limited but growing corridor from Lebak Bulus to the Hotel Indonesia roundabout. Commuter trains (KRL) connect Jakarta to surrounding cities. Gojek and Grab car and motorcycle services are the most practical daily transport. In Bali, traffic is legendary for its gridlock, especially around Canggu, Seminyak, and Kuta during peak hours. Most expats rent a motorbike or scooter (IDR 700,000-1,500,000/month) — this is the practical way to navigate Bali's narrow roads. An International Driving Permit with a motorcycle endorsement is technically required; driving without one risks fines and insurance voidance. For island-to-island travel, domestic airlines (Garuda Indonesia, Lion Air, Batik Air, Citilink) connect major cities affordably, while ferries serve shorter routes. The ferry between Bali and Lombok and between Java and Bali are heavily used daily connections.",
  internationalConnectivity:
    "Soekarno-Hatta International Airport (CGK) in Jakarta is the main international gateway, served by Garuda Indonesia (the national carrier) and dozens of international airlines with direct flights to Singapore, Kuala Lumpur, Bangkok, Tokyo, Seoul, Sydney, Dubai, Istanbul, and Amsterdam. Ngurah Rai International Airport (DPS) in Bali handles massive international traffic, particularly from Australia, East Asia, and the Middle East, with direct flights to Perth (3.5 hours), Sydney (6 hours), Singapore (2.5 hours), Tokyo (7 hours), and many more. Bali's position makes it an excellent base for exploring Southeast Asia, with affordable flights to Thailand, Vietnam, Malaysia, and the Philippines. Domestic flights within Indonesia are frequent and cheap — Jakarta to Bali is about 2 hours and often under $50 USD one way.",
  travelExploration:
    "Indonesia's 17,000+ islands offer unmatched diversity for exploration. Bali itself ranges from rice terrace landscapes in Ubud to cliff-hanging temples at Uluwatu, volcanic lakes at Kintamani, and surf breaks at Padang Padang. The Gili Islands (Gili Trawangan, Gili Air, Gili Meno) off Lombok offer car-free island life and excellent snorkeling. Yogyakarta on Java is the cultural capital, home to Borobudur (the world's largest Buddhist temple) and Prambanan (a Hindu temple complex), both UNESCO World Heritage Sites. Komodo National Park in Flores is the only place on Earth to see Komodo dragons in the wild, alongside spectacular diving at sites like Manta Point. Raja Ampat in West Papua has the richest marine biodiversity on the planet. The Bromo-Tengger-Semeru volcanic landscape in East Java is otherworldly. Flores, Sumba, and the Toraja highlands of Sulawesi offer deep cultural immersion far from the tourist trail. Domestic flights connect virtually all of these destinations affordably.",
  considerations: [
    'Traffic and Safety: Bali traffic is chaotic and motorbike accidents involving foreigners are extremely common. Wear a helmet always, drive defensively, and ensure your travel insurance explicitly covers motorbike use. Indonesia has one of the highest road accident rates in Southeast Asia.',
    'Alcohol Risks: Imported alcohol is heavily taxed (a bottle of wine can cost $20-50 USD in shops). Local spirits, particularly arak (palm liquor), are cheap but carry real risks — methanol poisoning from unregulated batches kills several foreigners every year. Only drink arak from trusted, established sources.',
    'Immigration Enforcement: Visa rules change frequently and enforcement is inconsistent between regions and officers. Working on a tourist visa is technically illegal and, while rarely enforced against remote workers, can result in detention and deportation if caught. Keep copies of your visa, passport, and extension receipts at all times.',
    'Corruption and Informal Payments: You may encounter police asking for on-the-spot "fines" (especially for motorbike infractions). While illegal, this practice is common. Having copies of your documents (not originals) and a small amount of cash can help navigate these situations. Remain calm and polite.',
    'Natural Disasters: Indonesia sits on the Pacific Ring of Fire. Earthquakes, volcanic eruptions, and tsunamis are real risks. Familiarize yourself with evacuation routes, follow BMKG (weather and geophysics agency) warnings, and ensure your accommodation has structural integrity. Bali experienced significant earthquakes in 2018.'
  ],
  mistakes: [
    'Getting angry in public. This is perhaps the single most important cultural rule in Indonesia. Raising your voice, showing frustration, or confronting someone aggressively causes them to lose face, which is deeply humiliating. You will lose all cooperation and respect immediately. Stay calm, smile, and address issues privately and politely.',
    'Using the left hand to pay, shake hands, or pass items. The left hand is considered unclean across Indonesian culture. Always use your right hand for social interactions, or use both hands together for extra politeness.',
    'Driving a motorbike without a valid International Driving Permit with a motorcycle endorsement. Your home license is not valid in Indonesia. Without an IDP, you are driving illegally, your insurance is void, and police can fine you at checkpoints. If you have an accident without proper documentation, you may be held legally and financially responsible regardless of fault.',
    'Drinking tap water or brushing teeth with tap water. Tap water is not safe to drink anywhere in Indonesia. Use bottled or filtered water (gallon refill stations are everywhere and cost IDR 5,000-8,000). "Bali belly" from contaminated water or ice is extremely common among newcomers.',
    'Stepping on Balinese canang sari offerings or treating temple ceremonies as photo opportunities. The daily offerings placed on the ground are active religious practice, not decoration. Temples during ceremonies require a sarong and sash, and visitors should observe quietly rather than pushing through crowds for photographs.'
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency (Mobile)',
      description: 'Unified emergency number accessible from mobile phones, connecting to local emergency coordination.'
    },
    {
      number: '110',
      service: 'Police (POLRI)',
      description: 'Indonesian National Police emergency line for crime reporting and police emergencies.'
    },
    {
      number: '118',
      service: 'Ambulance / Medical Emergency',
      description: 'Medical emergency dispatch. Response times vary significantly by location — in Bali and Jakarta, private hospital ambulances are often faster.'
    }
  ],
  sources: [
    {
      name: 'Directorate General of Immigration',
      category: 'Immigration & Visas',
      description: 'Authority managing all visa types, stay permits, and immigration enforcement for foreign nationals in Indonesia.',
      link: 'https://www.imigrasi.go.id/'
    },
    {
      name: 'Bea Cukai (Customs)',
      category: 'Customs & IMEI Registration',
      description: 'Indonesia customs authority handling import regulations, IMEI phone registration, and duty-free allowances.',
      link: 'https://www.beacukai.go.id/'
    },
    {
      name: 'Directorate General of Taxes',
      category: 'Taxation',
      description: 'National tax authority managing NPWP registration, income tax filings, and tax compliance for residents.',
      link: 'https://www.pajak.go.id/'
    },
    {
      name: 'Wonderful Indonesia',
      category: 'Tourism & Travel',
      description: 'Official tourism portal with guides to destinations, cultural events, and travel information across the archipelago.',
      link: 'https://www.indonesia.travel/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Indonesia, consult the Indonesian Ministry of Foreign Affairs or an Indonesian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/indonesia',
    mfaLink: 'https://kemlu.go.id/'
  },
  serviceDirectory: {
    title: "Service Directory - Indonesia",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Indonesia.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal assistance for work permits (KITAS), residency permits, business visas, and immigration compliance.",
        providers: [
          { name: "Makarim & Taira S.", link: "https://www.makarim.com" },
          { name: "SSEK Legal Consultants", link: "https://www.ssek.com" },
          { name: "Fragomen Indonesia", link: "https://www.fragomen.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Professionals handling long-term rentals and property arrangements in Jakarta, Bali, and other expat areas.",
        providers: [
          { name: "Ray White Indonesia", link: "https://www.raywhite.co.id" },
          { name: "ERA Indonesia", link: "https://www.eraindonesia.com" },
          { name: "Rumah.com", link: "https://www.rumah.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Indonesian income tax, NPWP registration, expat tax residency, and corporate compliance.",
        providers: [
          { name: "PwC Indonesia", link: "https://www.pwc.com/id" },
          { name: "Deloitte Indonesia", link: "https://www2.deloitte.com/id" },
          { name: "KPMG Indonesia", link: "https://home.kpmg/id/en/home.html" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and regional relocation services for shipping household goods to and from Indonesia.",
        providers: [
          { name: "Crown Relocations Indonesia", link: "https://www.crownrelo.com" },
          { name: "Asian Tigers Group", link: "https://www.asiantigersgroup.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Bahasa Indonesia language schools and courses for expatriates and newcomers.",
        providers: [
          { name: "Cinta Bahasa (Bali)", link: "https://www.cintabahasa.com" },
          { name: "Alam Bahasa Indonesia (Yogyakarta)", link: "https://www.alambahasa.com" },
          { name: "Language Studies Indonesia (LSI)", link: "https://www.lsi.co.id" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major private hospitals and healthcare networks commonly used by foreign residents.",
        providers: [
          { name: "Siloam Hospitals", link: "https://www.siloamhospitals.com" },
          { name: "RS Pondok Indah Group", link: "https://www.rspondokindah.co.id" },
          { name: "BIMC Hospital Bali", link: "https://www.bimcbali.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms and platforms connecting talent with Indonesian and international employers.",
        providers: [
          { name: "JobStreet Indonesia", link: "https://www.jobstreet.co.id" },
          { name: "Michael Page Indonesia", link: "https://www.michaelpage.co.id" },
          { name: "Glints", link: "https://www.glints.com" }
        ]
      }
    ]
  }
};
