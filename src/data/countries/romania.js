export const romania = {
  id: 'romania',
  slug: 'romania',
  name: 'Romania',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Romanian'],
  shortDescription: 'Offers incredible value and internet speeds for digital workers, amidst a mix of modern and rural life.',
  heroImage: 'https://images.unsplash.com/photo-1695045088081-1f37125905a2?',
  flagAlt: 'Flag of Romania',
  atAGlance: "Romania is one of Europe's best-kept secrets for digital workers and location-independent professionals: it offers some of the fastest internet speeds in the world, EU membership, a very low cost of living by European standards, and a surprisingly vibrant urban culture in cities like Bucharest and Cluj-Napoca. The country sits at the crossroads of Central and Southeastern Europe, with the Carpathian Mountains arcing through its center, the Danube forming its southern border, and the Black Sea coast providing a summer escape. Bucharest, the capital, is a sprawling city of contrasts where communist-era apartment blocks stand alongside Belle Epoque mansions and gleaming modern office towers. Cluj-Napoca, in Transylvania, has emerged as Romania's tech capital with a youthful energy driven by its large student population and growing startup scene. Timisoara, which sparked the 1989 revolution, offers Habsburg architecture and a cosmopolitan western-facing identity. Daily life for newcomers is comfortable and increasingly digital, though bureaucracy remains paper-heavy and can be frustratingly slow. Romania joined the Schengen area for air and sea travel in 2024, simplifying travel across Europe. The people are warm, hospitable, and proud of their Latin heritage in a sea of Slavic neighbors. Romanian cuisine is hearty and meat-heavy, with sarmale (cabbage rolls), mici (grilled minced meat rolls), and mamaliga (polenta) as staples. For anyone seeking an affordable European base with genuine culture, natural beauty, and world-class connectivity, Romania delivers remarkable value.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'Low',
    primaryLanguages: 'Romanian',
  },
  visas: [
    {
      name: 'Digital Nomad Visa (Viza pentru Nomad Digital)',
      targetAudience: 'Remote workers, Freelancers',
      useCase: 'For non-EU citizens working remotely for employers or clients outside Romania. Requires proof of remote employment or freelance contracts, minimum gross monthly income of approximately EUR 3,700 (3x the Romanian average gross salary, verify current amount), health insurance, clean criminal record, and a rental contract in Romania. Foreign-sourced income under this visa is not taxed in Romania during the first year.',
      duration: '6 months to 1 year, renewable for 1 additional year',
      link: 'https://www.mae.ro/en/node/2054?page=5'
    },
    {
      name: 'Company Formation (SRL - Societate cu Raspundere Limitata)',
      targetAudience: 'Entrepreneurs, Freelancers',
      useCase: 'Setting up a Romanian limited liability company (SRL) is popular due to favorable tax rates. Micro-enterprise tax is 1% of revenue (up to EUR 500,000 annual turnover and max 3 employees). The SRL can sponsor your residence permit. Minimum share capital is RON 1 (symbolic). Registration is through ONRC (National Trade Register Office). The process takes approximately 3-5 business days.',
      duration: 'Residence permit valid 1 year, renewable',
      link: 'https://www.onrc.ro/index.php/en/'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists, Short-stay visitors',
      useCase: 'For non-EU/EEA nationals requiring a visa for short visits. Romania joined the Schengen area for air and sea travel in 2024 (land border controls may still apply temporarily). Allows stay of up to 90 days within a 180-day period for tourism, business, or family visits.',
      duration: 'Up to 90 days within 180-day period',
      link: 'https://www.mae.ro/en/node/2040'
    },
    {
      name: 'Long-Stay Visa (Type D) for Employment',
      targetAudience: 'Employed professionals',
      useCase: 'Required for non-EU citizens with a job offer from a Romanian employer. The employer obtains a work authorization from the General Inspectorate for Immigration (IGI), then the employee applies for a Type D visa at a Romanian consulate. Processing takes 30-60 days. Upon arrival, you apply for a temporary residence permit.',
      duration: '90 days (visa), then residence permit for 1 year, renewable',
      link: 'https://igi.mai.gov.ro/en/'
    },
    {
      name: 'EU/EEA Citizen Registration',
      targetAudience: 'EU/EEA nationals',
      useCase: 'EU/EEA citizens have the right to live and work in Romania without a visa. After 3 months, you must register with the local immigration office for a registration certificate. Requirements include proof of employment, self-employment, sufficient resources, or enrollment in education, plus health insurance.',
      duration: 'Indefinite (registration certificate valid 5 years)',
      link: 'https://igi.mai.gov.ro/en/'
    }
  ],
  requirements: [
    {
      title: 'CNP (Cod Numeric Personal)',
      explanation: 'A 13-digit Personal Numeric Code that serves as your unique identifier in the Romanian system. Assigned upon registration with the General Inspectorate for Immigration (for non-EU citizens) or upon birth/residence registration (for EU citizens).',
      importance: 'The CNP is required for virtually everything in Romania: employment contracts, tax registration, healthcare enrollment, banking, utilities, and government services. It appears on your residence permit and is used as your tax identification number. Without a CNP, you cannot function in the formal economy.',
      link: 'https://igi.mai.gov.ro/en/'
    },
    {
      title: 'ANAF Registration (Tax Agency)',
      explanation: 'Registration with the Agentia Nationala de Administrare Fiscala (National Agency for Fiscal Administration) for tax purposes. Required for anyone with Romanian income, whether employed, self-employed, or operating a business.',
      importance: 'Romania has a flat 10% income tax rate and mandatory social contributions (approximately 25% CASS health insurance + 25% CAS pension from gross salary for employees, with different structures for self-employed and micro-enterprises). ANAF handles all tax filings, which are increasingly done online through the SPV (Spatiul Privat Virtual) portal. Annual tax declarations are due by May 25.',
      link: 'https://www.anaf.ro/'
    },
    {
      title: 'Proof of Accommodation (Rental Contract)',
      explanation: 'A registered rental contract is required for residence permit applications and address registration. The contract must be registered with ANAF (tax implications for the landlord), and the landlord must declare the rental income.',
      importance: 'Many Romanian landlords prefer informal arrangements to avoid declaring rental income and paying tax on it. However, an unregistered contract cannot be used for official purposes. Insist on a registered contract if you need it for immigration or administrative purposes. This is a common friction point for newcomers.',
      link: 'https://www.anaf.ro/'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a Romanian bank account requires your passport, residence permit (or CNP), proof of address, and in some cases proof of income. Major banks include Banca Transilvania, BRD (Groupe Societe Generale), ING Bank Romania, and Raiffeisen Bank Romania.',
      importance: 'A local bank account is essential for salary payments, rent, and daily transactions. Romania uses the Romanian Leu (RON). Card acceptance is high in cities; contactless payments are standard. Online banking and mobile apps are well-developed. Revolut is extremely popular in Romania and widely accepted, sometimes more so than traditional bank cards.',
      link: 'https://www.bnr.ro/Home.aspx'
    }
  ],
  jobsAndIncome: {
    overview:
      "Romania's economy has grown rapidly, driven by IT and software development, automotive manufacturing (Dacia/Renault, Ford), shared services centers (many multinationals have offices in Bucharest and Cluj), agriculture, and a growing startup ecosystem. The IT sector is particularly strong, with Romania producing more software developers per capita than most European countries. Cluj-Napoca, Bucharest, Timisoara, and Iasi are the main tech hubs. English is the standard working language in most multinational and tech environments.",
    whereToLook: [
      "LinkedIn",
      "eJobs.ro (Romania's largest job portal)",
      "BestJobs.eu",
      "Hipo.ro (tech and startup focused)",
      "Remote job boards (Romania is popular with remote-first companies)"
    ],
    realityChecks: [
      "Romania's IT sector offers tax-exempt salaries for qualified IT professionals (income tax exemption under specific conditions), making it particularly attractive for software developers and engineers.",
      "English is sufficient for most tech and multinational roles, but Romanian is needed for interacting with government offices, landlords, and daily life outside international circles.",
      "Work permits for non-EU citizens require employer sponsorship and a labor market test demonstrating the role cannot be filled locally. Processing takes 30-60 days.",
      "The gap between Bucharest/Cluj salaries and those in smaller cities is significant. A senior developer in Bucharest may earn EUR 3,000-5,000 net/month, while the same role in a smaller city pays 30-40% less."
    ]
  },
  salaryReality: {
    overview:
      "Salaries in Romania are lower than in Western Europe but have grown rapidly, particularly in IT and professional services. The minimum gross wage is approximately RON 3,700/month (roughly EUR 745). Average gross salary is approximately RON 7,500 (EUR 1,500). IT professionals, financial services workers, and those in multinational shared services earn well above average. The flat 10% income tax combined with the IT tax exemption makes Romania's effective tax burden competitive for skilled workers.",
    realityChecks: [
      "Social contributions are significant: employees pay 25% CAS (pension) and 10% CASS (health insurance) from gross salary, plus 10% income tax (unless IT-exempt). Net salary is roughly 55-58% of gross for non-IT workers.",
      "IT professionals meeting specific criteria (degree in technical field, employer in software sector) are exempt from income tax, effectively increasing take-home pay by 10 percentage points.",
      "The micro-enterprise tax regime (1% of revenue for companies under EUR 500,000 turnover) makes Romania exceptionally attractive for freelancers and small business owners.",
      "Cost of living in Bucharest and Cluj has risen sharply in recent years, particularly rent. A comfortable lifestyle in these cities now requires EUR 1,500-2,500/month for a single person including rent."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The substantial gap between gross and net salary due to social contributions (approximately 42-45% total deductions for non-IT employees)",
      "Heating costs in winter, which can add EUR 50-150/month to utility bills depending on the building's heating system and insulation",
      "The cost difference between old (communist-era) apartment blocks and new buildings, both in rent and utility efficiency",
      "Car-related costs: Romania has relatively high fuel prices, mandatory road tax (Rovinieta), and winter tyre requirements"
    ]
  },
  housingSystem: {
    overview:
      "Romania's rental market is largely private and informal, with most apartments rented directly from individual owners rather than through agencies. In Bucharest, popular areas for expats include the northern neighborhoods (Herastrau/Aviatiei area near the park), Floreasca, Dorobanti, and the Old Town area for younger renters. In Cluj-Napoca, the city center, Gheorgheni, and Manastur are common choices. Timisoara's Fabric and Iosefin districts have charm, while the city center offers modern options. Most rentals are apartments; houses are more common in suburban areas.",
    expectations:
      "Rents have increased significantly in recent years. A modern 2-bedroom apartment in a good Bucharest neighborhood costs EUR 600-1,000/month; in Cluj EUR 500-850; in Timisoara or Iasi EUR 350-600. Deposits are typically 1 month's rent. Finding apartments through Imobiliare.ro, OLX.ro, and Facebook groups is standard. Many owners prefer informal (unregistered) contracts to avoid tax; insist on a registered contract if you need it for administrative purposes. Check the heating system (centralized district heating is common in older buildings and can be unreliable; individual central heating is preferable), insulation (older buildings can be cold in winter), and whether the price includes utilities (often it does not)."
  },
  healthcareReality:
    "Romania has a public healthcare system funded through mandatory CASS (health insurance) contributions. Public hospitals are accessible and care for emergencies is free, but the system suffers from underfunding, long wait times, and inconsistent quality. The practice of 'spaga' (informal payments to medical staff for better attention) persists in public hospitals, though it is technically illegal and declining. Most expats and urban Romanians use private healthcare. Major private networks include Regina Maria (the largest private healthcare network), MedLife, Sanador (Bucharest), and Medpark (Cluj). A private consultation costs EUR 30-80. Private health insurance through local providers (Signal Iduna, Allianz-Tiriac, Generali) or international insurers costs EUR 50-200/month. Dental care in Romania is notably affordable and of high quality, attracting dental tourism from Western Europe. Pharmacies (Catena, HelpNet, Dona) are abundant and well-stocked.",
  digitalLife: {
    overview:
      "Romania is a digital paradise for remote workers. The country consistently ranks in the global top 5-10 for fixed broadband speed, with fiber connections from providers like Digi (RCS & RDS), Orange, and Vodafone delivering 500 Mbps to 1 Gbps at prices of EUR 8-12/month. Mobile 4G/5G coverage from Digi, Orange, and Vodafone is extensive in urban areas. The tech-savvy population has driven rapid adoption of digital services.",
    essentials: [
      "Revolut (extremely popular in Romania, often more accepted than local bank cards; used for daily payments, transfers, and currency exchange)",
      "Bolt or Uber (ride-hailing apps available in major cities; Bolt dominates in most Romanian cities)",
      "Tazz by eMAG or Glovo (food delivery platforms with wide restaurant coverage)",
      "eMAG (Romania's dominant e-commerce platform, the 'Amazon of Romania')"
    ],
    whatSurprisesNewcomers: [
      "Internet speeds are genuinely world-class and absurdly cheap. A 1 Gbps fiber connection costs less than EUR 10/month from Digi.",
      "Revolut penetration in Romania is among the highest in Europe; many businesses and individuals prefer it over traditional banking for daily transactions.",
      "Despite excellent digital infrastructure, government bureaucracy remains stubbornly paper-based. Expect to print, sign, and stamp documents for many official processes.",
      "Cash usage has declined significantly, especially in cities. Contactless card payments are accepted at most businesses, but keep some cash for markets, parking, and small rural shops."
    ]
  },
  culture: {
    text: "Romania is a Latin island in a Slavic sea, and Romanians are proud of their Roman heritage and the fact that their language is a Romance language closely related to Italian. Culture is warm, emotional, and deeply hospitable. Guests are treated with extraordinary generosity; expect to be fed far more than you can eat and offered homemade tuica (plum brandy) or palinca (fruit brandy) as a welcome. Religion (Romanian Orthodox Christianity) plays a significant role in cultural life, with churches at the center of community and holidays structured around the Orthodox calendar. Easter (not Christmas) is the most important religious holiday. Romanian humor is sharp, self-deprecating, and often darkly witty. Social life revolves around long meals, coffee culture, and spontaneous gatherings. The contrast between cosmopolitan Bucharest and traditional rural villages (where horse-drawn carts are still used for transport) is striking and part of the country's charm. Romanians are well-educated, multilingual (many speak English, French, or both), and culturally curious.",
    highlights: [
      "Hospitality is taken very seriously. If invited to a Romanian home, bring a gift (flowers, wine, or sweets). Refusing food or drink is difficult and somewhat insulting; taste everything even if you cannot finish.",
      "Refusing homemade tuica or palinca (fruit brandy) when offered by a host is considered impolite. At least taste it and express appreciation. It is often very strong (40-60% alcohol).",
      "Dracula is a tourist construct. Romanians care far more about their Dacian ancestry, Roman heritage, and medieval princes (Vlad Tepes is considered a national hero for defending against the Ottomans, not a vampire).",
      "Bucharest and Budapest are not the same city. Confusing them is a reliable way to irritate a Romanian. They are in different countries, speak different languages, and have distinct identities.",
      "Tipping is appreciated: 10% in restaurants is standard. Leave cash tips even when paying by card, as tips on card payments may not always reach staff."
    ]
  },
  transportationMobility:
    "Bucharest has the most developed public transport system in Romania: a metro (Metrorex, 4 lines covering the main corridors), an extensive tram, bus, and trolleybus network (STB), and growing cycling infrastructure. A single metro ride costs RON 3 (EUR 0.60), and monthly passes are available. Bolt and Uber are widely used and very affordable. Cluj-Napoca, Timisoara, and Iasi have bus and tram networks supplemented by ride-hailing. Intercity travel options include CFR (Romanian Railways), which offers scenic but often slow train journeys (Bucharest to Cluj takes 8-10 hours by train), FlixBus and other coach operators for faster intercity connections, and domestic flights from TAROM and low-cost carriers. Romania's highway network is limited but expanding; the main A1 (Bucharest-Pitesti) and A3 (Bucharest-Ploiesti) highways are supplemented by national roads that can be slow due to traffic through towns. Driving requires a Rovinieta (electronic road tax sticker) and winter tyres from November through March.",
  internationalConnectivity:
    "Henri Coanda International Airport (OTP) in Bucharest is Romania's main international hub, served by over 30 airlines with direct flights across Europe, the Middle East, and select intercontinental routes. Wizz Air (based in Hungary but with massive Romanian operations), TAROM (national carrier), Blue Air, and Ryanair provide extensive European coverage at competitive prices. Cluj-Napoca, Timisoara, Iasi, and Sibiu airports also handle international flights, primarily European routes. Flight time to London is about 3.5 hours, to Paris 3 hours, to Istanbul 1.5 hours. There are limited direct long-haul options; connections through Istanbul, Munich, or Frankfurt are standard for destinations outside Europe.",
  travelExploration:
    "Romania offers extraordinary domestic travel variety. Transylvania delivers medieval towns (Sibiu, Brasov, Sighisoara), fortified churches (UNESCO World Heritage), and dramatic Carpathian mountain scenery. Bran Castle (marketed as 'Dracula's Castle') is a tourist draw, but the Peles Castle in Sinaia is far more impressive architecturally. The Transfagarasan and Transalpina highways are among Europe's most spectacular mountain drives. The Danube Delta (UNESCO World Heritage) is Europe's largest wetland, home to over 300 bird species and best explored by boat. The Black Sea coast around Constanta, Mamaia, and Vama Veche offers beach culture in summer. Maramures in the northwest preserves a rural way of life with wooden churches (UNESCO), traditional customs, and landscapes that feel unchanged in centuries. The painted monasteries of Bucovina in the northeast are jewels of medieval art. Weekend trips from Bucharest to Brasov (2.5 hours), Sibiu (4.5 hours), or the Danube Delta (4 hours) are popular.",
  considerations: [
    "Schengen Status: Romania joined the Schengen area for air and sea travel in March 2024. This simplifies flying within Europe (no passport control for Schengen flights). However, land border checks with Hungary and Bulgaria may still apply temporarily. Verify the current status before planning road trips.",
    "Currency: Romania uses the Romanian Leu (RON), not the Euro, despite being an EU member. Card acceptance is high in cities and most businesses, but cash is still needed at village markets, some rural restaurants, and parking meters. Currency exchange offices (casa de schimb) are common; avoid exchanging at airports or tourist traps.",
    "Winter Conditions: Romanian winters are cold, particularly in Transylvania and the Carpathians (-10 to -20C is common). Heating costs spike significantly. Central heating in older apartment blocks can be unreliable. Verify your apartment's heating system before signing a lease. Winter tyres are mandatory from November 1 to March 31.",
    "Stray Dogs: The stray dog situation has improved enormously in Bucharest and major cities over the past decade, but encounters still occur, particularly in suburban areas and smaller towns. Avoid approaching or feeding stray dogs.",
    "Bureaucracy: Romanian administrative processes are notoriously slow and paper-dependent. Expect multiple visits to government offices, apostilled documents, notarized translations, and queues. A local Romanian-speaking friend, colleague, or hired translator can save hours of frustration."
  ],
  mistakes: [
    "Confusing Bucharest with Budapest. This is the single most irritating mistake you can make with a Romanian. They are different cities in different countries (Romania vs. Hungary). Learn the difference before you arrive.",
    "Refusing homemade tuica (plum brandy) or palinca when offered by a Romanian host. Even if you do not drink spirits, take a small sip and express appreciation. It is a gesture of welcome and pride.",
    "Assuming Romania is unsafe. Romania has one of the lowest violent crime rates in Europe. Petty crime exists in tourist areas (pickpocketing, taxi scams), but violent crime against foreigners is extremely rare.",
    "Ignoring the bears. Romania has the largest brown bear population in Europe (approximately 6,000). They are spotted on mountain roads, particularly the Transfagarasan, and near garbage bins in mountain towns. Do not approach, feed, or attempt to photograph bears at close range.",
    "Expecting Western European efficiency from public services. Government offices, utility companies, and some service providers operate at a pace that can be maddening for newcomers. Build patience into your schedule and always confirm deadlines and requirements in advance."
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency (Police, Ambulance, Fire)',
      description: 'European unified emergency number. Operators speak Romanian and English.'
    },
    {
      number: '113',
      service: 'SMS Emergency (for hearing impaired)',
      description: 'Text-based emergency contact for individuals who cannot make voice calls.'
    },
    {
      number: '0-SALVAMONT',
      service: 'Mountain Rescue (Salvamont)',
      description: 'Specialized mountain rescue service for hikers, skiers, and climbers. Reachable at 0-SALVAMONT (0-725826668) or through 112.'
    }
  ],
  sources: [
    {
      name: 'General Inspectorate for Immigration (IGI)',
      category: 'Immigration & Residency',
      description: 'Official authority for residence permits, visa information, and immigration procedures for Romania.',
      link: 'https://igi.mai.gov.ro/en/'
    },
    {
      name: 'Ministry of Foreign Affairs (MAE)',
      category: 'Visas & Consular Services',
      description: 'Handles visa applications, consular services, and international representation.',
      link: 'https://www.mae.ro/en'
    },
    {
      name: 'ANAF (National Agency for Fiscal Administration)',
      category: 'Taxation',
      description: 'Tax authority responsible for tax registration, filing, and business compliance in Romania.',
      link: 'https://www.anaf.ro/'
    },
    {
      name: 'Romania Tourism',
      category: 'Tourism & Travel',
      description: 'Official tourism body with destination guides, events, and visitor information.',
      link: 'http://romaniatourism.com/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Romania, consult the Romanian Ministry of Foreign Affairs or a Romanian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/romania',
    mfaLink: 'https://www.mae.ro/en'
  },
  serviceDirectory: {
    title: "Service Directory - Romania",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Romania.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal assistance for residence permits, work authorization, and immigration compliance in Romania.",
        providers: [
          { name: "Fragomen Romania", link: "https://www.fragomen.com" },
          { name: "NNDKP", link: "https://www.nndkp.ro" },
          { name: "Popovici Nitu Stoica & Asociatii", link: "https://pnsa.ro" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Professionals handling property rentals and sales in Bucharest, Cluj, and other cities.",
        providers: [
          { name: "Imobiliare.ro", link: "https://www.imobiliare.ro" },
          { name: "Coldwell Banker Romania", link: "https://www.coldwellbanker.ro" },
          { name: "Engel & Volkers Romania", link: "https://www.engelvoelkers.com/ro" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Romanian tax law, micro-enterprise regime, payroll, and cross-border planning.",
        providers: [
          { name: "PwC Romania", link: "https://www.pwc.ro" },
          { name: "EY Romania", link: "https://www.ey.com/ro_ro" },
          { name: "KPMG Romania", link: "https://kpmg.com/ro" }
        ]
      },
      {
        name: "Moving Companies",
        description: "Relocation services for international shipping, customs clearance, and local moves.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "AGS Worldwide Movers", link: "https://www.agsmovers.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Romanian language courses and cultural integration programs for newcomers.",
        providers: [
          { name: "Romanian Language Institute (ILR)", link: "https://www.ilr.ro" },
          { name: "Quest Romanian Language Center", link: "https://questromania.ro" },
          { name: "Berlitz Romania", link: "https://www.berlitz.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major private healthcare networks and hospitals commonly used by expats in Romania.",
        providers: [
          { name: "Regina Maria Healthcare Network", link: "https://www.reginamaria.ro" },
          { name: "MedLife", link: "https://www.medlife.ro" },
          { name: "Sanador", link: "https://www.sanador.ro" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms connecting international talent with Romanian employers.",
        providers: [
          { name: "eJobs Romania", link: "https://www.ejobs.ro" },
          { name: "Hays Romania", link: "https://www.hays.ro" },
          { name: "Michael Page Romania", link: "https://www.michaelpage.ro" }
        ]
      }
    ]
  }
};
