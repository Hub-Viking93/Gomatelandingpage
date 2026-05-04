export const finland = {
  id: 'finland',
  slug: 'finland',
  name: 'Finland',
  region: 'Europe',
  complexity: 'High',
  languages: ['Finnish', 'Swedish', 'English'],
  shortDescription: 'A functioning, egalitarian society powered by nature, technology, and sisu.',
  heroImage: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7',
  flagAlt: 'Flag of Finland',
  atAGlance: "Finland is repeatedly voted the happiest country in the world, but 'happiness' here means contentment, safety, trust in institutions, and a deeply functional society rather than constant cheerfulness or extroversion. It is a quiet, modest, and highly organized nation where the concept of 'sisu' — a uniquely Finnish form of grit, determination, and resilience in the face of adversity — underpins the national character. Daily life is efficient and digital: bureaucracy works reliably online, public services are well-funded, and trust in police, government, and fellow citizens is among the highest globally. Finland has two official languages — Finnish (spoken by 87%) and Swedish (spoken by 5%) — and English proficiency is excellent, particularly in the Helsinki metropolitan area and among younger generations. The education system is world-renowned (no tuition fees, even at university, including for most international students at public universities), and the social safety net is comprehensive: universal healthcare, generous parental leave (over 300 days shared between parents), and unemployment support. For newcomers, the biggest adjustment is often the social reserve: Finns give you immense personal space and privacy, do not engage in small talk, and consider silence a perfectly comfortable social state rather than an awkward gap to fill. However, once a connection is made — often through shared activities, the workplace, or the great equalizer of Finnish social life, the sauna — it is genuine and loyal. Nature is not an amenity but a fundamental part of identity: there are 188,000 lakes, 40 national parks, and 'jokamiehenoikeus' (everyman's right) grants universal access to roam, camp, and forage in the wilderness.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'High',
    primaryLanguages: 'Finnish, Swedish (Official), English (Widely spoken)',
  },
  visas: [
    {
      name: 'Specialist Residence Permit (Fast-Track)',
      targetAudience: 'IT Specialists, Experts, Senior Professionals',
      useCase: 'Finland\'s premium fast-track permit for specialists, senior managers, and experts in high-demand fields (particularly technology and research). Processing time target is two weeks when the employer is a certified partner of Business Finland or Migri. Requires a job offer meeting a minimum salary threshold (approximately EUR 3,473/month in 2024) and relevant qualifications.',
      duration: 'Up to 2 years (renewable, path to permanent residency after 4 years continuous residence)',
      link: 'https://migri.fi/en/specialist'
    },
    {
      name: 'Startup Permit',
      targetAudience: 'Entrepreneurs, Founders',
      useCase: 'For founders of innovative, scalable startups. Requires an eligibility statement from Business Finland confirming the business model has growth potential. Application includes a business plan, team description, and evidence of funding or revenue potential. Processing time is typically one to three months.',
      duration: '2 years (renewable with demonstrated progress)',
      link: 'https://migri.fi/en/start-up-entrepreneur'
    },
    {
      name: 'Residence Permit for an Employed Person',
      targetAudience: 'Non-EU Workers with a Job Offer',
      useCase: 'For non-EU/EEA citizens with a job offer from a Finnish employer. The employer initiates the process, and a partial labor market test may apply (the TE Office assesses whether the position could be filled locally). Processing times vary from one to four months depending on the type of work.',
      duration: 'Up to 2 years (renewable)',
      link: 'https://migri.fi/en/residence-permit-for-an-employed-person'
    },
    {
      name: 'Residence Permit for a Family Member',
      targetAudience: 'Spouses, Partners, Children of Residents',
      useCase: 'For immediate family members of someone holding a valid residence permit in Finland. Requires proof of relationship, sufficient income (the sponsor must meet income thresholds), and adequate housing. Children under 18 and spouses/registered partners are eligible.',
      duration: 'Same as sponsor\'s permit (renewable)',
      link: 'https://migri.fi/en/family-member-of-a-person-who-has-received-a-residence-permit'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists, Short-term Business Visitors',
      useCase: 'For non-EU citizens requiring a visa for tourism, family visits, or short business meetings within the Schengen area. Applied for at the Finnish embassy or VFS Global center.',
      duration: 'Up to 90 days within a 180-day period',
      link: 'https://um.fi/visa-to-visit-finland'
    }
  ],
  requirements: [
    {
      title: 'Personal Identity Code (Henkilötunnus)',
      explanation: 'A unique identifier in the format DDMMYY-XXXX, issued by the Digital and Population Data Services Agency (DVV — Digi- ja väestötietovirasto). You receive it when registering your right of residence and home municipality at the DVV office.',
      importance: 'The henkilötunnus is needed for everything: opening a bank account, getting a phone contract, obtaining a tax card, registering for healthcare, enrolling children in daycare or school, and accessing digital services. Without it, you are functionally invisible to Finnish systems. EU/EEA citizens can register at DVV upon arrival with proof of employment or sufficient funds; non-EU citizens receive it when their residence permit is granted and they register their address.',
      link: 'https://dvv.fi/en/personal-identity-code'
    },
    {
      title: 'Home Municipality Registration (DVV)',
      explanation: 'Registering your place of residence in the Population Information System at the DVV office. This establishes your kotikunta (home municipality), which determines your access to municipal services, healthcare, and the applicable municipal tax rate.',
      importance: 'Being registered in a Finnish municipality is the prerequisite for public healthcare access (through your local terveyskeskus/health center), children\'s daycare, public library card, and municipal services. It also determines your municipal income tax rate, which varies from 16.5% to 23.5% depending on the municipality. Helsinki is 18.12%, Espoo is 17.5%, and Tampere is 21.5%. Your registration address must be a real residential address — PO boxes and temporary accommodations may not qualify.',
      link: 'https://dvv.fi/en/moving'
    },
    {
      title: 'Strong Electronic Identification (Verkkopankkitunnukset)',
      explanation: 'Finland\'s digital identity system, typically activated through your bank\'s online credentials (verkkopankkitunnukset) or a separate mobile certificate. Used to log into Kela (social security), Vero (tax authority), Omakanta (health records), and virtually every digital public service.',
      importance: 'This is your digital passport in Finland. Without strong electronic identification, you cannot access My Kela (apply for social security benefits), OmaVero (manage your tax card and file returns), Omakanta (view health records and prescriptions), or most municipal e-services. The identification is issued by your bank after you open an account with your henkilötunnus and Finnish ID card. The process can take two to four weeks after account opening.',
      link: 'https://www.suomi.fi/instructions-and-support/identification'
    },
    {
      title: 'Tax Card (Verokortti)',
      explanation: 'An electronic card that tells your employer how much tax to withhold from your salary. You must order one from Vero (the Finnish Tax Administration) immediately upon receiving your henkilötunnus and before your first paycheck.',
      importance: 'Without a tax card, your employer must deduct a flat 60% emergency tax rate. While this is refunded in the next year\'s tax return, losing over half your salary when you are facing Finnish startup costs (rental deposit, furniture, winter clothing) is financially painful. Apply online through OmaVero (vero.fi) as soon as you have your henkilötunnus — processing takes one to three business days.',
      link: 'https://www.vero.fi/en/individuals/tax-cards-and-tax-returns/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Finland has a stable but relatively closed job market with particular strength in technology (Nokia, Rovio, Supercell, Wolt), gaming (Remedy, Housemarque, Rovio), forest and paper industries (UPM, Stora Enso), engineering (Kone, Wärtsilä, Metso), and a thriving startup ecosystem centered in Helsinki (with Slush being one of the world's leading startup conferences). The labor market is highly unionized (approximately 65% union membership), and collective agreements set wages and conditions in most sectors.",
    whereToLook: [
      "LinkedIn — essential for professional, tech, and international roles",
      "TE-palvelut (tyomarkkinatori.fi) — the public employment service's job portal, important for all sectors and public-sector positions",
      "Oikotie Työpaikat — a popular Finnish job portal with broad coverage",
      "Company career pages: Nokia, Supercell, Wolt, KONE, Neste, and other Finnish companies post directly on their sites",
      "Startup job boards and communities: Startup Jobs Finland, Finnish Business Angels Network, and the Maria 01 startup campus in Helsinki"
    ],
    realityChecks: [
      "Finnish language is often required outside of explicitly international roles, especially in healthcare, education, public administration, and customer-facing positions. Even in English-speaking tech companies, social integration and career advancement benefit significantly from Finnish proficiency.",
      "Hiring processes can be methodical and slow, with multiple interview rounds and thorough reference checks. Finnish employers value reliability, competence, and a no-drama work style over charisma.",
      "Networking plays a larger role than many newcomers expect. Finland's professional community, particularly in tech and startups, is relatively small and interconnected. Attending events like Slush, Arctic15, and local meetups is valuable.",
      "Remote work for international companies is increasingly common among expats, often providing higher income than equivalent Finnish roles. Finland's tax treaty network and the EU/EEA framework make this viable, but cross-border tax implications require careful structuring."
    ]
  },
  salaryReality: {
    overview:
      "Finnish salaries are predictable, transparent, and relatively compressed — the gap between the highest and lowest earners is narrower than in most countries. The median monthly salary is approximately EUR 3,400 before tax. There is no statutory minimum wage; minimums are set by sector-specific collective agreements (työehtosopimus). Income tax is progressive (municipal tax 16.5-23.5% plus state tax on income above approximately EUR 19,900), resulting in effective tax rates of 25-45% for most workers.",
    realityChecks: [
      "A gross salary of EUR 4,000/month yields approximately EUR 2,800-3,100 net depending on your municipality's tax rate and personal deductions. Use vero.fi's tax calculator to estimate your specific take-home.",
      "Employer social contributions (approximately 20-25% of salary) are paid on top of your gross salary and fund pension (TyEL), health insurance, unemployment insurance, and occupational accident insurance. These are not deducted from your pay.",
      "The holiday bonus (lomaraha) of 50% of holiday pay is standard under most collective agreements, effectively adding an extra month's pay annually. Not all employers are bound by this, so verify in your employment contract.",
      "Salary growth in Finland is steady but rarely rapid. Jumping between companies is often the most effective way to increase compensation, as internal raises tend to follow collective agreement increments."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Municipal tax rates vary significantly: Helsinki (18.12%), Espoo (17.5%), Tampere (21.5%), Oulu (21.0%). Choosing where to live directly affects your net pay.",
      "Employee pension and social insurance contributions: approximately 7-8.5% of gross salary deducted at source (TyEL pension 7.15% for under-53s, unemployment insurance 1.36%)",
      "High consumer prices: groceries are 15-25% more expensive than in Germany or France. Restaurant dining is premium-priced. A lunch in Helsinki costs EUR 12-18; a beer at a bar EUR 7-10.",
      "The 'tax card timing' risk: without a tax card, you lose 60% of your first paycheck to emergency taxation. This is refunded eventually but creates a painful cash-flow gap at arrival."
    ]
  },
  housingSystem: {
    overview:
      "Finland has a well-regulated and transparent rental market, but demand outstrips supply in the Helsinki metropolitan area (Helsinki, Espoo, Vantaa). Popular areas in Helsinki include Kallio (bohemian, central), Töölö (classic, quiet), Kruununhaka (historic), Kamppi and Punavuori (central, trendy), and Lauttasaari (waterfront, family-friendly). In Espoo, Otaniemi (Aalto University campus) and Tapiola are popular. Tampere offers significantly more affordable housing in neighborhoods like Tampella and Finlayson. Rents in Helsinki range from EUR 800-1,500/month for a one-bedroom.",
    expectations:
      "Expect one to two months' rent as deposit plus the first month's rent upfront. Unfurnished apartments are the standard for long-term leases — 'unfurnished' in Finland means empty, though kitchens always include a stove and refrigerator. Furnished apartments are available but at a premium and primarily through platforms like Forenom and corporate housing services. Main rental platforms include Oikotie Asunnot, Vuokraovi, and SATO/Lumo for regulated housing company apartments. Rental contracts are straightforward and tenant-protective under Finnish law. Always verify the condition of the apartment at move-in (tarkastuspöytäkirja) and photograph everything."
  },
  healthcareReality:
    "Finland provides universal public healthcare funded through taxes, administered at the municipal level through terveyskeskus (health centers). GP appointments at the health center cost approximately EUR 20.90 per visit, with an annual cap of three visits charged (subsequent visits are free). Hospital outpatient visits cost approximately EUR 41.80, and daily inpatient charges are EUR 49.60, all subject to an annual out-of-pocket cap of approximately EUR 692 (2024). Major hospitals include HUS Helsinki University Hospital (one of Northern Europe's largest academic medical centers), Tampere University Hospital (TAYS), Turku University Hospital (TYKS), and Oulu University Hospital (OYS). Wait times for non-urgent care can be long — two to six months for specialist appointments in the public system, which is why approximately 20% of the population uses private healthcare (supplemented by employer-provided health insurance). Major private providers include Mehiläinen, Terveystalo, and Pihlajalinna — these offer same-day or next-day appointments for EUR 80-150 per visit, often fully or partially covered by employer insurance. The Omakanta portal (kanta.fi) provides access to your digital health records, prescriptions, and vaccination history.",
  digitalLife: {
    overview:
      "Finland is highly digitized, with strong online government services and a population that is comfortable with technology. However, the digital landscape is fragmented across multiple portals rather than unified under a single system. The key gateway is strong electronic identification (verkkopankkitunnukset or mobile certificate), which unlocks access to virtually all public and private digital services.",
    essentials: [
      "Suomi.fi — the central government services portal, linking you to information on healthcare, taxation, housing, and social security. Also provides secure messaging with authorities.",
      "OmaVero (vero.fi) — the tax authority's personal portal for tax cards, annual tax returns, and tax payment tracking",
      "Omakanta (kanta.fi) — the national health record system showing your medical history, prescriptions, lab results, and vaccination records",
      "My Kela (kela.fi) — the social security portal for applying for housing allowance, unemployment benefits, child benefits, sickness allowance, and parental leave"
    ],
    whatSurprisesNewcomers: [
      "Many digital services require bank authentication (verkkopankkitunnukset) rather than a standalone digital ID. This ties your digital access directly to your bank account — without a Finnish bank account, you cannot access most online services.",
      "Multiple separate portals exist instead of a single national system: Vero for taxes, Kela for social security, DVV for population data, Omakanta for health, and municipal portals for local services. Each requires separate login, though all use the same strong identification.",
      "Paper letters are still used for some official communications, particularly from Migri (immigration) and the courts. Do not assume everything arrives digitally — check your physical mailbox regularly.",
      "The Finnish Post (Posti) operates a network of automated parcel lockers (SmartPOST) throughout the country. Most online orders are delivered to these lockers, not to your door. You open them with a code sent to your phone."
    ]
  },
  culture: {
    text: "Finnish culture is built on honesty, punctuality, modesty, and a deep respect for silence and personal space. Small talk is not a Finnish tradition — conversations are purposeful, words are chosen carefully, and comfortable silence between people is normal, not awkward. The national character of 'sisu' combines perseverance, inner strength, and stoic determination in the face of difficulty. The sauna is the great social equalizer and sacred weekly ritual: there are over 3.3 million saunas for 5.5 million people (more saunas than cars). It is a place to relax, think, bond with friends, and even conduct business, typically while nude. Finnish honesty is legendary — if you lose your wallet, there is a very high statistical chance it will be returned to you intact. Trust permeates society: unattended bags on park benches, unlocked bicycles in small towns, and self-service honesty boxes at roadside berry stands are all common.",
    highlights: [
      "Sauna etiquette: shower before entering. Nudity is standard and expected (swimsuits are unusual in private saunas). Do not be loud — the sauna is a place for quiet relaxation. If invited to someone's sauna, accept — it is an honor and a sign of trust.",
      "Shoes off: always remove shoes when entering a Finnish home. Indoor slippers (sisätossut) are the norm. Some workplaces and even some restaurants expect shoe removal.",
      "Coffee obsession: Finns consume more coffee per capita than any other nation (approximately 12 kg per person per year). Coffee breaks (kahvitauko) are workplace rights written into some collective agreements. If invited for coffee, accept — it is a social ritual.",
      "Trust and honesty: Finnish society operates on trust. Being late, making empty promises, or being dishonest — even about small things — damages relationships quickly and permanently.",
      "Nature as sanctuary: 'jokamiehenoikeus' (everyman's right) allows free access to forests, lakes, and wilderness for hiking, camping, foraging berries and mushrooms, and cross-country skiing. Finns view nature as an integral part of mental and physical health."
    ]
  },
  transportationMobility:
    "Helsinki's public transport (HSL — Helsingin Seudun Liikenne) includes the metro (2 lines), trams (13 routes), commuter trains, buses, and the Suomenlinna ferry. The HSL app provides zone-based ticketing across all modes; a monthly AB zone pass (covering Helsinki and parts of Espoo) costs approximately EUR 62. Tampere has a new tram system (opened 2021), and Turku, Oulu, and other cities rely on bus networks. Between cities, VR (Finnish national railway) operates intercity trains: Helsinki to Tampere takes 1.5 hours, Helsinki to Turku 2 hours, and Helsinki to Rovaniemi (Lapland) approximately 8-12 hours depending on the train. The Helsinki-Tallinn ferry crossing (Tallink, Viking Line, Eckerö Line) takes 2-2.5 hours and is a popular day trip for cheaper shopping. Driving is common, especially outside the Helsinki metro area and essential in rural Finland. Winter driving is serious: studded winter tires (nastarenkaat) are permitted from November 1 to March 31, and all-season or unstudded winter tires (kitkarenkaat) are mandatory. Finnish roads are well-maintained, but darkness, ice, and moose crossings demand caution.",
  internationalConnectivity:
    "Helsinki-Vantaa Airport (HEL) is Finland's primary international hub and a strategic gateway between Europe and Asia, with direct Finnair flights to Tokyo, Osaka, Seoul, Beijing, Shanghai, Bangkok, Delhi, and Singapore — often the fastest routing from Northern Europe to East Asia. Finnair is the flag carrier and Oneworld alliance member. European connections are extensive, with direct flights to all major capitals. Oulu (OUL), Tampere (TMP), and Turku (TKU) serve as domestic and regional European gateways. Ryanair and Norwegian operate budget European routes. Flight time to London is approximately 3 hours; to Tokyo, roughly 9.5 hours (one of the shortest Europe-Japan routings). The Helsinki-Tallinn ferry route and Helsinki-Stockholm overnight cruise ferries (Viking Line, Silja Line) provide scenic Baltic connections.",
  travelExploration:
    "Finland offers remarkable diversity from the archipelago of Turku (the world's largest by island count) and the lake district of Savonia to the Arctic wilderness of Lapland. Helsinki features the Suomenlinna sea fortress (UNESCO World Heritage), the Design District, the Amos Rex contemporary art museum, and the Oodi Central Library (an architectural landmark). Lapland draws visitors for the Northern Lights (visible from September through March), Santa Claus Village in Rovaniemi (on the Arctic Circle), husky and reindeer safaris, and ice hotels. The Lakelands region (Savonlinna, Jyväskylä, Kuopio) offers summer cottage culture at its purest — renting a mökki (lakeside cabin) with a sauna is the quintessential Finnish experience. Nuuksio National Park (45 minutes from Helsinki) provides accessible wilderness hiking. The Midnight Sun in summer (May-July in northern Finland) allows 24 hours of daylight for hiking, fishing, and exploring. Weekend trips to Tallinn (2-hour ferry from Helsinki), Stockholm (overnight cruise), and St. Petersburg (when open) are popular Baltic escapes.",
  considerations: [
    "The Finnish Language Barrier: Finnish is widely considered one of the hardest languages for English speakers to learn — it is a Finno-Ugric language unrelated to Germanic or Romance languages, with 15 grammatical cases and complex verb conjugation. While English is widely spoken in Helsinki and professional environments, not speaking Finnish limits job opportunities, deeper social integration, and access to services in smaller cities. Free Finnish language courses (kotoutumiskoulutus) are available through municipal integration programs.",
    "November ('Marraskuu' — literally 'Death Month'): November in Finland is gray, wet, dark, and relentlessly bleak. Daylight in Helsinki drops below 7 hours, and the sky is overcast most days. This month is psychologically harder for many newcomers than the colder, snowy months of December-February, which at least offer white landscapes and holiday lights. Invest in a daylight therapy lamp, Vitamin D supplements, and outdoor activities to maintain mental health.",
    "Alcohol Monopoly (Alko): Strong alcohol (above 5.5% ABV) is sold exclusively at Alko stores, which have limited hours: typically 9:00 AM-8:00 PM weekdays, 9:00 AM-6:00 PM Saturdays, closed Sundays and public holidays. Supermarkets sell beverages up to 5.5% ABV until 9:00 PM. Alcohol prices are among the highest in Europe — a bottle of wine starts at approximately EUR 8-10 at Alko, and spirits are two to three times EU average prices.",
    "Migri Processing Times: While the Specialist fast-track permit targets two-week processing, standard residence permits can take one to six months depending on the category and time of year. Delays are common, especially in autumn. Check Migri's published average processing times before planning your move timeline.",
    "Dark Winters vs. Bright Summers: Finland's latitude creates extreme light variation. In Helsinki, winter daylight is approximately 6 hours in December; in Utsjoki (northernmost Finland), the sun does not rise at all for 51 days. Conversely, summer brings the midnight sun — continuous daylight in June-July in Lapland and very short nights even in the south. Many Finns cope by maximizing outdoor time in summer and embracing hygge-like winter routines: sauna, candles, and cozy indoor life."
  ],
  mistakes: [
    "Expecting small talk. Asking 'How are you?' in Finland might get a genuinely detailed answer about their health, mood, or recent challenges — or comfortable silence. It is not a throwaway greeting. If you ask, be prepared to listen. If you want to say hello, 'Hei' (hi) or 'Moi' (informal hi) suffice without requiring a follow-up question.",
    "Being late. Punctuality in Finland is a moral value, not a suggestion. If a meeting is scheduled for 10:00, it starts at 10:00 — not 10:02. Being late without advance notice is disrespectful and will be remembered. Set your watch a few minutes early.",
    "Wearing shoes indoors. Entering a Finnish home with shoes on is considered dirty and disrespectful. Remove shoes at the door immediately. Many workplaces and some restaurants also expect shoe removal, especially in winter when shoes track in snow and salt.",
    "Declining a sauna invitation. Being invited to a Finn's sauna is a genuine honor and an important social bonding ritual. Declining (especially repeatedly) signals disinterest in the relationship. Nudity is standard but not forced — you can wrap in a towel if you are uncomfortable. The key is to participate.",
    "Underestimating the 60% emergency tax rate. If you do not have a tax card when your first paycheck is processed, you will lose 60% of your gross salary to emergency taxation. While this is refunded in the annual tax settlement (approximately 6-12 months later), the immediate financial impact on a newcomer facing rental deposits, furniture purchases, and winter clothing costs is severe. Apply for your verokortti the moment you receive your henkilötunnus."
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency (Hätäkeskus)',
      description: 'One number for police, fire, and ambulance. Available 24/7. Operators speak Finnish, Swedish, and English. Download the 112 Suomi app for automatic location sharing with the emergency center.'
    },
    {
      number: '116 117',
      service: 'Medical Helpline (Päivystysapu)',
      description: 'Non-emergency medical advice line. Call before visiting the emergency room (päivystys) for non-life-threatening conditions — nurses will assess your symptoms and direct you to the appropriate level of care.'
    },
    {
      number: '0295 419 800',
      service: 'Migri Service Line (Finnish Immigration Service)',
      description: 'For questions about residence permits, visa status, and immigration procedures. Available during business hours in Finnish and English.'
    }
  ],
  sources: [
    {
      name: 'Migri (Finnish Immigration Service)',
      category: 'Immigration',
      description: 'The authority responsible for all residence permits, work permits, asylum applications, and citizenship in Finland. The definitive source for visa types, requirements, and processing times.',
      link: 'https://migri.fi/en/home'
    },
    {
      name: 'Suomi.fi',
      category: 'Government Services',
      description: 'The central portal for Finnish public services and information, covering healthcare, taxation, employment, housing, and family matters. Available in Finnish, Swedish, and English.',
      link: 'https://www.suomi.fi/frontpage'
    },
    {
      name: 'InfoFinland',
      category: 'Newcomer Guide',
      description: 'A comprehensive multilingual guide to living in Finland, covering moving, working, Finnish language, healthcare, housing, and daily life. Published by the City of Helsinki.',
      link: 'https://www.infofinland.fi/en'
    },
    {
      name: 'Kela (Social Insurance Institution)',
      category: 'Social Security',
      description: 'Administers social security benefits including housing allowance, unemployment benefits, sickness allowance, child benefits, and student financial aid.',
      link: 'https://www.kela.fi/web/en'
    }
  ],
  embassies: {
    description: 'For consular assistance, residency matters, and official guidance related to Finland, consult the Finnish Ministry for Foreign Affairs or a Finnish embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/finland',
    mfaLink: 'https://um.fi/frontpage'
  },
  serviceDirectory: {
    title: "Service Directory - Finland",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Finland.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal support for residence permits, work permits, specialist fast-track applications, and immigration compliance.",
        providers: [
          { name: "Fragomen Finland", link: "https://www.fragomen.com" },
          { name: "Castrén & Snellman", link: "https://www.castren.fi/en/" },
          { name: "PwC Immigration Services Finland", link: "https://www.pwc.fi/en.html" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Major housing portals and brokerages for rentals and property purchases across Finland.",
        providers: [
          { name: "Oikotie Asunnot", link: "https://asunnot.oikotie.fi/" },
          { name: "Vuokraovi", link: "https://www.vuokraovi.com/" },
          { name: "SATO (Rental Apartments)", link: "https://www.sato.fi/en" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax and accounting experts for Finnish employment taxation, cross-border income, and self-employment.",
        providers: [
          { name: "KPMG Finland", link: "https://kpmg.com/fi/en.html" },
          { name: "EY Finland", link: "https://www.ey.com/fi_fi" },
          { name: "Grant Thornton Finland", link: "https://www.grantthornton.fi" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including packing, shipping, and customs clearance.",
        providers: [
          { name: "Niemi Services", link: "https://niemi.fi/en/" },
          { name: "Crown Relocations Finland", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Finnish and Swedish language courses, from government-funded integration programs to private intensive courses.",
        providers: [
          { name: "Finnishcourses.fi (Helsinki Region)", link: "https://finnishcourses.fi/" },
          { name: "Berlitz Finland", link: "https://www.berlitz.com/en-fi" },
          { name: "Municipal Adult Education Centres (Kansalaisopisto)", link: "https://www.infofinland.fi/en/education/finnish-and-swedish-language-courses" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public healthcare entry points and major private healthcare providers for clinics, specialists, and digital care.",
        providers: [
          { name: "Mehiläinen", link: "https://www.mehilainen.fi/en" },
          { name: "Terveystalo", link: "https://www.terveystalo.com/en" },
          { name: "Pihlajalinna", link: "https://www.pihlajalinna.fi/en" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Public employment services and major recruiters for job searching and staffing in Finland.",
        providers: [
          { name: "Job Market Finland (TE-palvelut)", link: "https://tyomarkkinatori.fi/en" },
          { name: "Barona", link: "https://www.barona.fi/en/" },
          { name: "Academic Work Finland", link: "https://www.academicwork.fi/en" }
        ]
      }
    ]
  }
};
