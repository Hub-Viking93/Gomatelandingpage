export const argentina = {
  id: 'argentina',
  slug: 'argentina',
  name: 'Argentina',
  region: 'Americas',
  complexity: 'Medium',
  languages: ['Spanish'],
  shortDescription: 'Passion, steak, tango, and diverse landscapes.',
  heroImage: 'https://images.unsplash.com/photo-1617548437735-92d875423353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  flagAlt: 'Flag of Argentina',
  atAGlance: "Argentina is a country of intense passion and European flair planted firmly in South America. Buenos Aires, the capital, feels like a mashup of Paris and Madrid — grand belle epoque architecture, wide boulevards, cafe culture on every corner, and a nightlife that does not even start until midnight. The culture revolves around deep friendships, late-night dining, football fanaticism, and an almost philosophical approach to conversation. However, the economy is famously volatile, with chronic high inflation, currency controls, and a parallel exchange rate system (the 'blue dollar') that creates a dual reality: life can be astonishingly cheap for those earning in foreign currency, yet crushingly difficult for locals paid in pesos. Asado (Argentine BBQ) is a near-religious weekend ritual involving hours of slow-grilled beef, malbec wine, and extended family gatherings. The lifestyle is distinctly nocturnal — dinner rarely starts before 9:30 PM, clubs open at 2 AM, and Sunday lunch stretches into the late afternoon. For newcomers, the adjustment involves embracing a flexible relationship with time and punctuality, learning to navigate informal economic workarounds that everyone uses, and understanding that personal connections matter far more than formal processes in virtually every aspect of daily life.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 90 days',
    costOfLiving: 'Low (with foreign currency)',
    primaryLanguages: 'Spanish (Rioplatense dialect)',
  },
  visas: [
    {
      name: 'Digital Nomad Visa (Nómada Digital)',
      targetAudience: 'Remote Workers',
      useCase: 'Designed for foreign nationals working remotely for employers or clients outside Argentina. Valid for 180 days with one renewal, giving up to a full year. Applicants must demonstrate remote employment or freelance contracts with foreign entities. No minimum income threshold is formally required, but proof of sustainable income is expected.',
      duration: '6 months (renewable once for 6 more)',
      link: 'https://www.argentina.gob.ar/interior/migraciones/digital-nomads'
    },
    {
      name: 'Rentista Visa (Passive Income)',
      targetAudience: 'Passive Income Holders, Retirees',
      useCase: 'For individuals who can demonstrate a guaranteed monthly income from investments, rental properties, pensions, or other passive sources — approximately USD 2,000 per month or equivalent. Income must be verifiable through bank statements or notarized contracts. This visa leads to temporary residency and can be a pathway to permanent residency after three years.',
      duration: '1 year (renewable)',
      link: 'https://www.argentina.gob.ar/interior/migraciones'
    },
    {
      name: 'Tourist Visa / Visa Exemption',
      targetAudience: 'Tourists, Short-term Visitors',
      useCase: 'Citizens of many countries receive 90 days on arrival with no visa required. This can be extended once at Migraciones for an additional 90 days, or informally renewed by crossing to Uruguay (Colonia or Montevideo) and returning. Note that this does not grant work authorization.',
      duration: '90 days (extendable to 180)',
      link: 'https://www.argentina.gob.ar/interior/migraciones'
    },
    {
      name: 'Temporary Residency (Work)',
      targetAudience: 'Employed Professionals',
      useCase: 'For individuals with a formal employment contract from an Argentine company. The employer typically assists with the application process through the Dirección Nacional de Migraciones. Requires a CUIT tax number and registration with AFIP. Converts to permanent residency after three years of continuous legal residence.',
      duration: '1-3 years (renewable, pathway to permanent residency)',
      link: 'https://www.argentina.gob.ar/interior/migraciones'
    },
    {
      name: 'MERCOSUR Residency',
      targetAudience: 'Citizens of MERCOSUR/Associated States',
      useCase: 'Streamlined residency for nationals of Brazil, Uruguay, Paraguay, Bolivia, Chile, Colombia, Ecuador, Peru, and other associated states. Requires only a passport and clean criminal record. Grants immediate temporary residency with work rights.',
      duration: '2 years (convertible to permanent)',
      link: 'https://www.argentina.gob.ar/interior/migraciones'
    }
  ],
  requirements: [
    {
      title: 'DNI (Documento Nacional de Identidad)',
      explanation: 'The Argentine national identity card, issued to both citizens and residents. You receive it when granted temporary or permanent residency, and it is produced by the Registro Nacional de las Personas (RENAPER).',
      importance: 'The DNI is your master key to Argentine life. Without it, you cannot open a local bank account, sign a formal rental contract, access subsidized utility rates, obtain a CUIT/CUIL tax number, register for healthcare, or get local pricing on flights and services. Many everyday transactions — from buying a SIM card to picking up a package — require presenting your DNI number.',
      link: 'https://www.argentina.gob.ar/interior/dni'
    },
    {
      title: 'CUIL / CUIT (Tax Identification Numbers)',
      explanation: 'CUIL (Codigo Unico de Identificación Laboral) is assigned to employees for payroll and social security purposes. CUIT (Codigo Unico de Identificación Tributaria) is the tax ID for self-employed individuals, freelancers, and businesses. Both are issued by AFIP (Administración Federal de Ingresos Públicos) and are tied to your DNI.',
      importance: 'A CUIL is mandatory for any formal employment and is required to receive salary payments and contribute to the social security system. A CUIT is necessary if you plan to invoice, work as a freelancer (monotributista), open a business, or engage in any commercial activity. Without one of these numbers, you cannot participate in the formal economy.',
      link: 'https://www.argentina.gob.ar/obtener-cuil'
    },
    {
      title: 'SUBE Card (Transport Card)',
      explanation: 'A rechargeable contactless card used for all public transportation in Buenos Aires and many other Argentine cities, including buses (colectivos), the Buenos Aires subway (Subte), and commuter trains.',
      importance: 'You cannot pay cash on buses in Buenos Aires — the SUBE card is the only accepted payment method. It is also used on the Subte and Metrobus lines. Cards can be purchased at kioscos (corner shops) and recharged at subway stations, Rapipago, or PagoFácil locations. Without a SUBE, you are effectively locked out of the public transport network.',
      link: 'https://www.argentina.gob.ar/sube'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a local bank account requires a DNI, proof of address, and often proof of income. Major banks include Banco Nación, Banco Galicia, Santander Argentina, and BBVA Argentina. Digital banks like Ualá and Mercado Pago offer easier onboarding.',
      importance: 'A local bank account is essential for receiving salary, paying rent via transfer, and accessing the formal financial system. Many landlords require bank transfers for rent payments. Digital wallets like Mercado Pago are widely used for everyday purchases, but a traditional bank account remains necessary for larger transactions, wire transfers, and proof of financial activity for residency renewals.',
      link: 'https://www.bcra.gob.ar/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Argentina has a well-educated population and a historically strong professional class, but the formal job market is constrained by economic instability, high employer taxes, and restrictive labor laws. Many locals and expats rely on remote work paid in foreign currency, freelance arrangements through the monotributo system, or informal employment. The tech sector, particularly in Buenos Aires, is a bright spot with growing international demand for Argentine developers and designers.",
    whereToLook: [
      "LinkedIn (dominant for professional and multinational roles)",
      "Computrabajo and Zonajobs (largest local job boards)",
      "Upwork, Toptal, and RemoteOK (for USD/EUR-paid remote work)",
      "Bumeran (local generalist job board)",
      "Personal networks and referrals (critical in Argentina — many roles are filled before being posted)"
    ],
    realityChecks: [
      "Salaries paid in Argentine pesos (ARS) lose purchasing power rapidly due to inflation, often requiring quarterly renegotiation.",
      "Informal or partially undeclared employment is widespread — this is a structural feature of the economy, not an exception.",
      "Foreign income earned remotely and converted at parallel exchange rates can provide 2-3x the purchasing power of equivalent local salaries.",
      "Knowing Rioplatense Spanish is essential for local roles; English-only positions exist mainly in multinational companies and tech startups."
    ]
  },
  salaryReality: {
    overview:
      "Headline salary figures in Argentina are deeply misleading because inflation, currency controls, and parallel exchange rates distort real purchasing power. A salary that looks competitive on paper can lose 30-50% of its value within a single year if denominated in pesos. The gap between official and parallel exchange rates means that foreign-currency income provides dramatically more purchasing power than equivalent peso-denominated salaries.",
    realityChecks: [
      "Annual inflation regularly exceeds 100%, meaning raises that look generous may barely keep pace with price increases.",
      "Many professionals negotiate salary adjustments quarterly or even monthly to track inflation.",
      "USD- or EUR-denominated remote income, converted at the parallel rate, can provide a lifestyle in Buenos Aires comparable to earning 3-4x the amount in Western Europe.",
      "Cash savings in pesos are widely considered to be losing assets — most Argentines who can do so convert savings to USD immediately."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The massive impact of inflation erosion on peso-denominated salaries over 6-12 months",
      "The difference between official exchange rate conversions and real purchasing power at the blue dollar rate",
      "Employer social contributions (cargas sociales) that add roughly 25-30% on top of gross salary for the employer",
      "The real cost of imported goods and electronics, which can be 2-3x international prices due to import duties and currency controls"
    ]
  },
  housingSystem: {
    overview:
      "Renting in Argentina has been shaped by years of economic instability and changing rental laws. For expats, the most common arrangement is furnished apartments in Buenos Aires neighborhoods like Palermo, Recoleta, Belgrano, and San Telmo. Short-term and medium-term rentals are widely available through platforms and local agencies. Long-term contracts (traditionally three years under the now-modified rental law) can require a local guarantor (garantía) or a guarantee insurance policy (seguro de caución), which adds complexity for newcomers without local ties.",
    expectations:
      "Expect to pay rent monthly. Expat-oriented rentals are frequently priced in USD and paid via bank transfer or cash. Local peso-denominated contracts include annual inflation adjustment clauses. Deposits are typically one to two months' rent. Utility costs are low by international standards due to subsidies, though these are being reduced. Neighborhoods vary enormously in character: Palermo is trendy and walkable, Recoleta is upscale and European-feeling, San Telmo is bohemian with cobblestone streets, and Belgrano is quiet and residential. Always visit properties in person before signing, and verify the landlord's ownership through the property deed (escritura)."
  },
  healthcareReality:
    "Argentina has a three-tiered healthcare system: public (hospitales públicos), union-based (obras sociales), and private (prepagas). Public hospitals such as Hospital Italiano, Hospital de Clínicas, and Hospital Fernández provide free care to everyone — including foreigners without residency — and quality at major Buenos Aires public hospitals is genuinely good, though wait times can be long and facilities vary. The obras sociales system provides coverage to formal employees through their industry union, funded by payroll contributions. Private healthcare plans (prepagas) like Swiss Medical, OSDE, Galeno, and Medicus offer shorter wait times, English-speaking doctors, and access to modern private clinics. Private plans are affordable by international standards — a comprehensive plan might cost USD 80-200 per month depending on coverage level. Pharmacies are abundant and many medications that require prescriptions elsewhere are available over the counter. For serious or complex medical situations, Buenos Aires has world-class specialists, particularly in cardiology, oncology, and cosmetic surgery.",
  digitalLife: {
    overview:
      "Argentina is digitally capable with high smartphone penetration and widespread internet access, but the digital ecosystem is fragmented and many bureaucratic processes still require physical presence. WhatsApp is the dominant communication tool for virtually everything — from scheduling medical appointments to negotiating with landlords.",
    essentials: [
      "Mercado Pago (dominant digital wallet and payment platform — used everywhere from corner stores to online shopping)",
      "SUBE card for public transport (rechargeable via app or at physical locations)",
      "Mi Argentina app (government digital ID, vaccination records, and document access)",
      "WhatsApp (essential for all communication — businesses, doctors, landlords, and friends all operate through it)"
    ],
    whatSurprisesNewcomers: [
      "There is no single national digital ID system comparable to European equivalents; many processes require physical documents and in-person appointments.",
      "Foreign credit and debit cards are often charged at the unfavorable official exchange rate, making local payment methods much more economical.",
      "Cash remains important — particularly for the parallel exchange rate advantage and for many small businesses that prefer cash transactions.",
      "Internet and mobile data are very affordable, but service quality can be inconsistent outside major cities."
    ]
  },
  culture: {
    text: 'Argentines are warm, tactile, and deeply expressive. Conversation is an art form, often ranging across politics, psychology, philosophy, and football in a single evening. Personal relationships are the foundation of social and professional life — trust is built through shared meals, extended conversations, and genuine emotional connection rather than transactional networking. Time is famously flexible: arriving 30 minutes late to a social gathering is completely normal, and dinner invitations for 9 PM really mean food will appear around 10:30 PM. Physical affection is constant — friends greet each other with a kiss on the cheek (right-to-right) regardless of gender, and personal space is much smaller than in Northern Europe or North America. Mate, the bitter herbal tea shared from a single gourd with a metal straw (bombilla), is the national ritual of connection; being invited to share mate is a genuine sign of acceptance. Football (futbol) is not a sport but a core identity — the rivalry between Boca Juniors and River Plate divides families and friendships with passionate loyalty.',
    highlights: [
      'Greeting: A single kiss on the cheek (right cheek to right cheek) for everyone — men, women, and even first introductions. Handshakes are only for very formal business settings.',
      'Mate: The herbal tea ritual is sacred. If offered, accept. Never stir the bombilla (metal straw), never ask for it to be hotter or sweeter after the cebador (preparer) has set it up, and always say "gracias" only when you are done drinking.',
      'Dinner: Eating before 9:00 PM marks you as a tourist. Weekend dinners start at 10:00 PM or later, and socializing continues well past midnight.',
      'Nicknames: Argentines openly use physical-description nicknames (Gordo/a for someone heavy, Flaco/a for someone thin, Negro/a as a term of endearment). These are affectionate, not offensive, in local context.',
      'Therapy: Argentina has more psychologists per capita than almost any country in the world. Going to therapy is completely normalized and frequently discussed openly.'
    ]
  },
  transportationMobility:
    "Buenos Aires has the most extensive public transport network in South America. The Subte (subway) has six lines covering central Buenos Aires and is fast and affordable, though crowded during rush hours. The colectivo (bus) network is enormous — over 100 routes crisscross the city 24 hours a day, and the SUBE card is mandatory for payment. Commuter trains connect the capital to the greater Buenos Aires suburbs (Belgrano Norte, Sarmiento, Roca, San Martín, Mitre, and Urquiza lines). For intercity travel, Argentina's long-distance bus system is world-class: companies like Andesmar, Vía Bariloche, and Plataforma 10 operate comfortable semi-cama and cama suites on routes spanning the entire country. Ride-hailing apps (Uber, Cabify, and DiDi) operate in Buenos Aires despite ongoing legal disputes with traditional taxi unions. Domestic flights connect Buenos Aires to major cities like Mendoza, Córdoba, Bariloche, Salta, and Ushuaia, primarily through Aerolíneas Argentinas and Flybondi. Cycling infrastructure is growing, with dedicated bike lanes (ciclovías) expanding across Buenos Aires and a public bike-sharing system (Ecobici) available for free to residents.",
  internationalConnectivity:
    "Buenos Aires is the primary international gateway, served by Ministro Pistarini International Airport (Ezeiza, EZE) for long-haul flights and Aeroparque Jorge Newbery (AEP) for domestic and regional routes. Aerolíneas Argentinas, the national carrier, connects Buenos Aires to major cities across the Americas and Europe, with direct flights to Madrid, Rome, Miami, New York, São Paulo, and Santiago. European carriers including Iberia, Air France, KLM, and Lufthansa operate direct routes. Regional travel to Uruguay is extremely convenient — the Buquebus ferry crosses the Río de la Plata to Colonia del Sacramento in one hour and to Montevideo in three hours, making Uruguay a popular weekend destination and visa-renewal option.",
  travelExploration:
    "Argentina is the eighth-largest country in the world, offering staggering geographic diversity. Patagonia in the south delivers glaciers (Perito Moreno), dramatic mountain scenery, and the end-of-the-world town of Ushuaia. Mendoza is the heart of Argentine wine country, with world-class malbec vineyards set against the Andes. The northwestern provinces of Salta and Jujuy offer colorful desert landscapes, indigenous culture, and the spectacular Quebrada de Humahuaca (UNESCO). Iguazú Falls on the border with Brazil is one of the world's most impressive natural wonders. The Atlantic coast (Mar del Plata, Pinamar) provides beach getaways, while the Lake District around Bariloche and Villa La Angostura offers alpine scenery with a distinctly Argentine flavor. Internal flights and long-distance buses make most destinations accessible, though distances are vast — Buenos Aires to Ushuaia is over 3,000 km.",
  considerations: [
    'Inflation and Exchange Rates: The "blue dollar" (parallel market rate) is often significantly higher than the official bank rate. Bringing crisp USD 100 bills and exchanging them at reputable exchange houses (cuevas) or using Western Union transfers maximizes purchasing power. Using foreign credit cards at the official rate means paying effectively double for everything.',
    'Personal Safety: Buenos Aires is generally safe in tourist and residential neighborhoods, but phone snatching (motochorros on motorcycles) is common. Keep your phone away from the street edge, avoid displaying expensive electronics in public, and be aware of your surroundings in crowded areas like Retiro and Once.',
    'Political Instability: Argentines are intensely political and protests (piquetes) regularly block major streets and highways. These are a normal part of civic life, not signs of danger, but they can disrupt commutes and plans without warning.',
    'Electronics and Imports: Due to heavy import duties and currency controls, electronics, clothing brands, and imported goods cost 2-3x their international price. Bring laptops, phones, and any specialized equipment with you.',
    'Bureaucratic Patience: Government offices (Migraciones, AFIP, ANSES) operate with long wait times, frequently changing requirements, and a strong preference for in-person processing. Budget entire mornings or afternoons for any bureaucratic errand, and bring all original documents plus multiple photocopies.'
  ],
  mistakes: [
    'Saying "soccer" instead of "futbol." Football is a core identity in Argentina, and using the American term signals cultural distance. Be very careful discussing Boca Juniors versus River Plate — these loyalties are deeply personal and passionately held.',
    'Comparing Argentina to the rest of Latin America or assuming a homogeneous "Latin" culture. Argentines strongly identify with their European heritage (primarily Italian and Spanish immigration) and consider their culture distinct from neighboring countries.',
    'Touching or stirring the mate bombilla when someone has prepared mate for the group. The cebador (person preparing mate) controls the preparation. Stirring the straw, asking for changes, or refusing to drink from a shared bombilla is a serious social faux pas.',
    'Expecting to eat dinner at 7 PM. Most restaurants do not even open for dinner service until 8:00 or 8:30 PM, and showing up before 9:00 PM marks you as a confused tourist.',
    'Relying solely on the official exchange rate for financial planning. If you do not understand the parallel exchange rate system, you will dramatically overpay for your cost of living. Research the blue dollar rate before arriving and plan your currency conversion strategy accordingly.'
  ],
  emergency: [
    {
      number: '911',
      service: 'Police, Fire, Ambulance',
      description: 'Unified emergency number in major cities. Operators speak Spanish; English support is limited.'
    },
    {
      number: '107',
      service: 'SAME (Medical Emergency)',
      description: 'Buenos Aires city ambulance service (Sistema de Atención Médica de Emergencia). Free public emergency medical response.'
    },
    {
      number: '101',
      service: 'Police',
      description: 'Direct police line. Can also report crimes at any comisaría (police station) in person.'
    }
  ],
  sources: [
    {
      name: 'Dirección Nacional de Migraciones',
      category: 'Immigration',
      description: 'Official immigration authority handling visas, residency permits, and border control. All visa applications and renewals go through this office.',
      link: 'https://www.argentina.gob.ar/interior/migraciones'
    },
    {
      name: 'Argentina.gob.ar',
      category: 'Government Services',
      description: 'Central government portal providing access to all federal services, including DNI, CUIL/CUIT, SUBE, and the Mi Argentina digital identity app.',
      link: 'https://www.argentina.gob.ar/'
    },
    {
      name: 'AFIP (Administración Federal de Ingresos Públicos)',
      category: 'Tax Authority',
      description: 'Federal tax authority managing CUIT registration, monotributo (simplified tax regime for freelancers), and all tax obligations for residents and businesses.',
      link: 'https://www.afip.gob.ar/'
    },
    {
      name: 'Visit Argentina',
      category: 'Tourism',
      description: 'Official tourism board with comprehensive travel information, destination guides, and practical visitor resources.',
      link: 'https://www.argentina.travel/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Argentina, consult the Argentine Ministry of Foreign Affairs (Cancillería) or an Argentine embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/argentina',
    mfaLink: 'https://www.cancilleria.gob.ar/en'
  },
  serviceDirectory: {
    title: "Service Directory - Argentina",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Argentina.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for residency permits, visa applications, DNI processing, and immigration compliance in Argentina.",
        providers: [
          { name: "Fragomen Argentina", link: "https://www.fragomen.com" },
          { name: "Perez Alati, Grondona, Benites & Arntsen (PAGBAM)", link: "https://pagbam.com" },
          { name: "Nicholson y Cano Abogados", link: "https://www.nicholsonycano.com.ar" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies assisting with apartment rentals, long-term leases, and property purchases across Buenos Aires and other cities.",
        providers: [
          { name: "RE/MAX Argentina", link: "https://www.remax.com.ar" },
          { name: "Toribio Achával", link: "https://www.toribioachaval.com" },
          { name: "ZonaProp", link: "https://www.zonaprop.com.ar" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax and accounting experts familiar with AFIP regulations, monotributo, residency tax rules, and cross-border income.",
        providers: [
          { name: "PwC Argentina", link: "https://www.pwc.com/ar" },
          { name: "EY Argentina", link: "https://www.ey.com/es_ar" },
          { name: "KPMG Argentina", link: "https://home.kpmg/ar" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including shipping, customs handling, and storage.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "AGS Movers Argentina", link: "https://www.agsmovers.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Spanish language schools and courses for foreigners, from intensive programs to private Rioplatense Spanish tutoring.",
        providers: [
          { name: "Expanish", link: "https://expanish.com" },
          { name: "Academia Buenos Aires", link: "https://www.academiabuenosaires.com" },
          { name: "Universidad de Buenos Aires - Spanish Programs", link: "https://www.uba.ar" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public hospitals and private healthcare networks commonly used by residents and expats in Argentina.",
        providers: [
          { name: "Hospital Italiano de Buenos Aires", link: "https://www.hospitalitaliano.org.ar" },
          { name: "Swiss Medical", link: "https://www.swissmedical.com.ar" },
          { name: "OSDE", link: "https://www.osde.com.ar" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms and platforms connecting professionals with Argentine and international employers.",
        providers: [
          { name: "Michael Page Argentina", link: "https://www.michaelpage.com.ar" },
          { name: "Randstad Argentina", link: "https://www.randstad.com.ar" },
          { name: "Bumeran", link: "https://www.bumeran.com.ar" }
        ]
      }
    ]
  }
};
