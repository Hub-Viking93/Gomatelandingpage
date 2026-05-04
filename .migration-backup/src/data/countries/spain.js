export const spain = {
  id: 'spain',
  slug: 'spain',
  name: 'Spain',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Spanish', 'Catalan', 'Basque', 'Galician'],
  shortDescription: 'Vibrant culture, sun-drenched landscapes, and a relaxed Mediterranean lifestyle.',
  heroImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325',
  flagAlt: 'Flag of Spain',
  atAGlance: "Spain seduces with its combination of climate, culture, cost of living, and sheer quality of daily life. Life follows a rhythm unlike anywhere else in Europe: lunch at 2-3 PM, dinner at 9-10 PM, social gatherings that last until the early hours, and a cultural attitude that prioritizes human connection over rigid schedules. The famous 'mañana' stereotype is less about laziness and more about a fundamentally different relationship with time — relationships come before transactions, and rushing is considered slightly vulgar. The country is a constitutional monarchy with 17 autonomous communities, each with its own character, and in some cases its own language (Catalan in Catalonia, Basque in the Basque Country, Galician in Galicia). The healthcare system is excellent and publicly funded, consistently ranked among the best in Europe. The cost of living remains attractively lower than Northern Europe, especially outside Madrid and Barcelona, making Spain a magnet for digital nomads, retirees, and anyone seeking sun and affordability. However, the bureaucracy is notoriously slow and paper-heavy — the word 'burocracia' could have been invented here. Getting a 'cita previa' (appointment) at government offices is a challenge that has spawned an entire ecosystem of bots and frustration. Unemployment remains high by European standards (around 12%), particularly among young people, and local salaries are modest compared to Germany, France, or the UK. For those who can earn remotely or secure a good position with a multinational, Spain offers an extraordinary quality of life. For those dependent on the local job market, financial planning requires more care. The cultural experience — tapas, flamenco, fiestas, the midday sun on a terrace — is genuinely transformative for those who embrace the local rhythm rather than fighting it.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'Medium',
    primaryLanguages: 'Spanish (Castilian)',
  },
  visas: [
    {
      name: 'Digital Nomad Visa (Visado para Teletrabajo Internacional)',
      targetAudience: 'Remote Workers',
      useCase: 'For non-EU/EEA nationals working remotely for companies or clients outside Spain. Requires proof of minimum monthly income of approximately EUR 2,600 (200% of the Spanish minimum wage). You must demonstrate at least one year of employment or client relationship with the non-Spanish company. Includes access to the Spanish tax system under the Beckham Law (flat 24% tax rate for qualifying individuals).',
      duration: '1 year (visa) convertible to 3-year residence authorization',
      link: 'https://www.exteriores.gob.es/'
    },
    {
      name: 'Non-Lucrative Visa (Visado de Residencia No Lucrativa)',
      targetAudience: 'Retirees, Financially Independent Individuals',
      useCase: 'For those with sufficient passive income or savings to live in Spain without working. You cannot work locally on this visa. Requires proof of approximately EUR 2,400/month in income or equivalent savings, comprehensive health insurance, and a clean criminal record.',
      duration: '1 year (renewable for 2-year periods)',
      link: 'https://www.exteriores.gob.es/'
    },
    {
      name: 'Work and Residence Visa (Autorización de Residencia y Trabajo)',
      targetAudience: 'Employed Professionals',
      useCase: 'For non-EU nationals with a confirmed job offer from a Spanish employer. The employer must obtain an initial work authorization through the Oficina de Extranjería, demonstrating that no suitable EU candidate was available. The process is employer-driven and can take 2-4 months.',
      duration: '1 year (renewable for 2-year periods)',
      link: 'https://www.inclusion.gob.es/web/inmigration/residence/work'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists / Short-stay visitors',
      useCase: 'For short visits up to 90 days within a 180-day period for tourism, business meetings, or family visits. Spain is part of the Schengen area.',
      duration: 'Up to 90 days',
      link: 'https://www.exteriores.gob.es/en/ServiciosAlCiudadano/Paginas/Servicios-consulares/Visados-Schengen.aspx'
    },
    {
      name: 'Golden Visa (Visado de Residencia para Inversores)',
      targetAudience: 'Investors',
      useCase: 'Residence by investment through real estate purchase (minimum EUR 500,000), bank deposits (EUR 1 million+), shares in Spanish companies (EUR 1 million+), or government bonds (EUR 2 million+). Grants residency without the requirement to live in Spain full-time. Note: legislative changes to this program have been proposed and may affect eligibility.',
      duration: '2 years (renewable for 5-year periods)',
      link: 'https://www.exteriores.gob.es/'
    }
  ],
  requirements: [
    {
      title: 'NIE (Número de Identidad de Extranjero)',
      explanation: 'The Foreigner Identity Number — a unique tax and identification number assigned to all foreigners conducting economic, professional, or social activities in Spain. EU citizens receive a green paper certificate; non-EU citizens receive the TIE (Tarjeta de Identidad de Extranjero) physical card with their NIE printed on it.',
      importance: 'The NIE is the single most important number in your Spanish life. Without it, you cannot rent an apartment, sign a utility contract, buy a car or property, open a bank account, get a mobile phone contract, pay taxes, or access social security. It is your fiscal identity for the Agencia Tributaria (tax agency). Applying for it requires a cita previa appointment at a police station (Comisaría) or Oficina de Extranjería, which can be extremely difficult to secure.',
      link: 'https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/'
    },
    {
      title: 'Empadronamiento (Municipal Registration)',
      explanation: 'Registration with the local town hall (Ayuntamiento) to prove where you live. You bring your passport (or NIE), rental contract or proof of accommodation, and the completed form to the Oficina de Atención al Ciudadano in your municipality.',
      importance: 'The empadronamiento is required to access public healthcare (tarjeta sanitaria), enroll children in school, apply for residence permit renewals (TIE), and establish legal residence in a specific municipality. It is the official proof of your address. Some municipalities also require it for things like library cards and access to municipal sports facilities.',
      link: 'https://administracion.gob.es/'
    },
    {
      title: 'Social Security Number (Número de Seguridad Social)',
      explanation: 'A unique number that identifies you in the Spanish social security system (Seguridad Social). Issued through your employer when starting work, or applied for independently at the Tesorería General de la Seguridad Social office.',
      importance: 'Required to access public healthcare (through the tarjeta sanitaria), receive salary, accumulate pension credits, and access unemployment benefits. Employer-sponsored healthcare coverage is activated through this number. Self-employed individuals (autónomos) register and pay contributions directly.',
      link: 'https://www.seg-social.es/'
    },
    {
      title: 'Cl@ve / Digital Certificate',
      explanation: 'Cl@ve is a digital identity system that provides access to online government services. The Digital Certificate (Certificado Digital) issued by the FNMT (Fábrica Nacional de Moneda y Timbre) provides an even higher level of access, allowing you to file taxes, check social security records, and handle most government affairs online.',
      importance: 'Spain\'s bureaucracy is gradually moving online, and a Digital Certificate dramatically reduces the number of in-person visits required. With it, you can file taxes through the Agencia Tributaria, check your social security status, renew certain permits, and submit official documents — all without a cita previa.',
      link: 'https://clave.gob.es/clave_Home/en/clave.html'
    }
  ],
  jobsAndIncome: {
    overview: "Spain's job market is competitive, with unemployment persistently higher than the EU average (around 12% nationally, over 25% for under-25s in some regions). Key sectors for expatriates include technology (Madrid and Barcelona have growing tech hubs), tourism and hospitality, education (English teaching), renewable energy, and international business. Madrid and Barcelona dominate the professional job market, though Valencia, Málaga, and Bilbao are emerging alternatives with lower costs.",
    whereToLook: [
      "InfoJobs (infojobs.net) — Spain's largest job portal with the widest local coverage",
      "LinkedIn — essential for professional, international, and tech roles",
      "Indeed Spain (es.indeed.com) — broad job listings across sectors",
      "Glassdoor España — salary information and company reviews",
      "Trabajar por el Mundo and RemoteOK for remote and international positions"
    ],
    realityChecks: [
      "Spanish language proficiency is essential for the vast majority of local positions — even many international companies conduct daily operations in Spanish.",
      "Temporary contracts (contratos temporales) are extremely common, even for qualified positions, and conversion to permanent contracts (indefinidos) can take years.",
      "Hiring processes can be slow and relationship-driven; personal connections (enchufe) still play a significant role in Spanish business culture.",
      "The autónomo (self-employment) system requires a monthly flat-rate social security contribution of approximately EUR 300+ per month regardless of income, which can be burdensome for low-earning freelancers."
    ]
  },
  salaryReality: {
    overview: "Spanish salaries are lower than Northern Europe but are offset by a significantly lower cost of living, particularly outside Madrid and Barcelona. The national average gross salary is approximately EUR 27,000-30,000 per year. Income tax is progressive (19-47%) and varies slightly by autonomous community. The minimum wage (Salario Mínimo Interprofesional) is approximately EUR 1,134 per month (14 payments), and many service-sector jobs pay close to this level.",
    realityChecks: [
      "Net salaries in Madrid and Barcelona can feel tight given rising housing costs — a one-bedroom apartment in central Barcelona now costs EUR 1,000-1,400 per month.",
      "Salary growth is typically slow and incremental, with many workers receiving only inflation-linked adjustments.",
      "The 14-payment system (pagas extra) means annual salary is divided into 14 installments — two extra payments in June and December — which is a cultural norm but can confuse budget planning.",
      "Remote workers earning in EUR/GBP/USD from foreign employers can live very comfortably — EUR 3,000+ per month provides an excellent lifestyle in most Spanish cities outside Madrid and Barcelona."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Regional tax differences between autonomous communities (e.g., Madrid has lower income tax than Catalonia)",
      "Mandatory social security contributions for autónomos (self-employed) starting at approximately EUR 300/month",
      "The impact of 14 monthly payments vs. 12 on actual monthly cash flow",
      "Rising housing costs in major cities that have outpaced wage growth significantly since 2020"
    ]
  },
  housingSystem: {
    overview: "Spain's rental market is mostly private and increasingly competitive in major cities. Popular expat areas in Madrid include Malasaña, Chueca, Salamanca, Lavapiés, and La Latina. In Barcelona, Eixample, Gràcia, El Born, and Poblenou are favorites. Valencia's Ruzafa and El Carmen neighborhoods are popular with digital nomads. Furnished apartments are common for short-to-medium-term rentals, while long-term contracts (typically 5 years under current law) are usually unfurnished.",
    expectations: "Landlords typically require 1-2 months' deposit (fianza, legally capped at 2 months for residential leases), proof of income (nóminas or bank statements), and sometimes a bank guarantee or upfront rent payment. Monthly rent for a one-bedroom apartment ranges from EUR 800-1,400 in central Madrid, EUR 900-1,500 in central Barcelona, and EUR 500-800 in Valencia. Utility costs (electricity, water, gas, internet) add EUR 100-200 per month. Short-term and tourist rentals have distorted the market in many cities, driving up long-term rental prices. Always sign a formal rental contract (contrato de arrendamiento) and insist on it being registered properly."
  },
  healthcareReality: "Spain has one of the best public healthcare systems in Europe, managed through the Seguridad Social system. Once registered with your local Centro de Salud (health center), you receive a tarjeta sanitaria (health card) that provides free access to general practitioners, specialists, hospital care, and most prescriptions (with small copays for employed adults). Major public hospitals like Hospital La Paz (Madrid), Hospital Clínic (Barcelona), Hospital La Fe (Valencia), and Hospital Virgen del Rocío (Seville) are excellent. Wait times for specialist referrals in the public system can range from weeks to months, leading many residents to supplement with private insurance. Private health insurance is affordable by European standards — Sanitas, Mapfre Salud, Adeslas, and Cigna offer comprehensive plans from EUR 50-150 per month. Pharmacies (farmacias) are abundant, identified by their green cross signs, and pharmacists are knowledgeable and can recommend over-the-counter treatments for minor conditions.",
  digitalLife: {
    overview: "Spain is gradually digitizing its government services, but the process is uneven and the gap between digital ambition and bureaucratic reality remains wide. The Sede Electrónica portals of various ministries handle some processes online, but many still require in-person appointments (cita previa) that are infamously difficult to secure. Cash and cards are both widely accepted, though contactless payment has grown rapidly.",
    essentials: [
      "NIE and Social Security number — the prerequisites for accessing almost all services",
      "Digital Certificate (FNMT) or Cl@ve — essential for online government interactions, tax filing, and social security checks",
      "Cita Previa appointment system — the gateway to every government office visit, accessible at sede.administracionespublicas.gob.es",
      "Bizum — peer-to-peer payment app integrated with Spanish bank accounts, widely used for splitting bills and small transfers"
    ],
    whatSurprisesNewcomers: [
      "Getting a cita previa (government appointment) can be nearly impossible — popular services book out instantly, and third-party bots (some commercial) compete for slots. Early morning refreshing is a real strategy.",
      "Paper documents and physical stamps still carry significant weight. Original apostilled and sworn-translated documents are frequently required for legal and administrative processes.",
      "Regional differences affect digital services — Catalonia, the Basque Country, and other autonomous communities have their own portals and processes that overlap with national systems.",
      "Many smaller businesses, market stalls, and rural establishments still prefer cash, though major cities are increasingly card-friendly."
    ]
  },
  culture: {
    text: "Spanish culture is gregarious, open, tactile, and nocturnal. The street is an extension of the living room — terraces overflow at all hours, children play outdoors until 10 PM, and the volume of conversation in any restaurant would be considered shouting in Northern Europe. 'Sobremesa' — the lingering conversation after a meal — can last longer than the meal itself and is considered one of life's essential pleasures. Physical contact is normal: two kisses (beso-beso, right cheek first) are standard when meeting friends or acquaintances, personal space is smaller than in Anglo-Saxon cultures, and touching during conversation signals engagement, not intrusion. The concept of 'horario español' structures daily life: most businesses open 9-2 PM, close for a long midday break, and reopen 5-8 PM. Dinner rarely starts before 9 PM, and weekend nights out often extend until 3-6 AM. Spanish directness can seem blunt — using the imperative form ('ponme un café' — give me a coffee) is normal and not considered rude.",
    highlights: [
      "Meal times define the day: lunch at 2-3 PM is the main meal, dinner at 9-10 PM is lighter. Eating dinner at 6 PM marks you as a tourist immediately.",
      "Directness is cultural, not rudeness. Imperatives are normal in daily speech. 'Dame una cerveza' (give me a beer) is perfectly polite in a bar.",
      "Noise is life. Restaurants, bars, and streets are loud because atmosphere ('ambiente') is created through energy and conversation, not silence.",
      "August shutdown: Much of Spain goes on vacation in August. Many small businesses, professional services, and even some restaurants close for 2-4 weeks. Plan important errands for other months.",
      "Regional identity is strong. A Catalan, Basque, or Galician may identify with their region before identifying as Spanish. Respect these distinctions and learn basic phrases in the local language if you are living in an autonomous community with its own language."
    ]
  },
  transportationMobility: "Spain has an excellent high-speed rail network (AVE), with Madrid-Barcelona taking 2.5 hours, Madrid-Seville 2.5 hours, and Madrid-Valencia 1.5 hours. City public transport is strong in Madrid (extensive Metro with 13 lines), Barcelona (Metro, FGC commuter rail, tram, and bus), Valencia (Metro and tram), and Bilbao (Metro). The Cercanías commuter train networks serve metropolitan areas effectively. Between cities, RENFE operates trains while ALSA and FlixBus handle long-distance bus routes. Budget airlines (Vueling, Ryanair, Iberia Express) offer cheap domestic flights, particularly to the Canary and Balearic Islands. Within cities, ride-hailing via Cabify (more established in Spain than Uber in many cities) and electric scooter sharing (Lime, Dott, Tier) are widespread. Car ownership is unnecessary in major cities but becomes practical in rural Spain and smaller towns.",
  internationalConnectivity: "Madrid-Barajas Airport (MAD) is Spain's primary international hub and one of Europe's busiest airports, with Iberia and Air Europa as major carriers alongside all European and many intercontinental airlines. Barcelona-El Prat (BCN) is the second major gateway, particularly strong for European and Mediterranean connections. Malaga (AGP), Palma de Mallorca (PMI), and Alicante (ALC) handle significant international traffic, especially from the UK, Germany, and Scandinavia. Flight times include 2.5 hours to London, 2 hours to Paris, 8 hours to New York, and 2 hours to Marrakech. Spain's position as a bridge between Europe, Africa, and the Americas makes it a natural transit hub, with competitive flight options in every direction.",
  travelExploration: "Spain is one of Europe's most geographically diverse countries. The Balearic Islands (Mallorca, Ibiza, Menorca, Formentera) and Canary Islands (Tenerife, Gran Canaria, Lanzarote, Fuerteventura) offer beach escapes and year-round warmth. Andalusia (Granada's Alhambra, Córdoba's Mezquita, Seville's Alcázar) is a living museum of Moorish-Christian heritage. The Camino de Santiago pilgrimage route draws hundreds of thousands of walkers annually. The Basque Country combines stunning coastline with world-renowned gastronomy (San Sebastián has more Michelin stars per capita than almost anywhere). Catalonia offers Barcelona's Gaudí architecture alongside the medieval villages of the Costa Brava. Weekend trips to Lisbon (1 hour flight), Marrakech (2 hours), or the French Riviera (1.5 hours) are easy and affordable.",
  considerations: [
    "Cita Previa Challenge: Getting an appointment at the Oficina de Extranjería, Policía Nacional, or Seguridad Social is often the single most frustrating experience for newcomers. Appointments release at set times and are snapped up within seconds by bots and rapid clickers. Third-party services that book appointments for a fee exist but operate in a grey area. Budget significant time and patience for this process.",
    "Noise: Spain is one of the noisiest countries in Europe according to WHO data. Street noise, construction (often starting at 8 AM), neighbors, bars, and celebrations are constant. If you are noise-sensitive, choose your apartment carefully — interior-facing apartments (patio interior) are quieter but darker. Invest in good earplugs.",
    "Summer Heat: Inland Spain (Madrid, Seville, Córdoba, Zaragoza) experiences extreme heat in July and August, with temperatures regularly exceeding 40°C. Air conditioning is not universal in residential buildings, especially older ones. Check AC availability before signing a lease.",
    "Bureaucratic Culture: Administrative processes in Spain are paper-heavy, slow, and require physical presence. Sworn translations (traducción jurada), apostilled documents, and multiple copies are standard requirements. Having a gestoría (administrative agency) handle paperwork on your behalf is a common and worthwhile expense (typically EUR 100-300 per procedure).",
    "Autónomo Costs: If you work as a freelancer or self-employed professional, the autónomo social security contribution starts at approximately EUR 230/month (with a reduced tarifa plana for new registrants) and scales up. This is payable regardless of income and includes healthcare and pension contributions."
  ],
  mistakes: [
    "Expecting shops to be open between 2-5 PM. Many small businesses, local shops, and non-chain restaurants close during the midday break. Supermarkets and large chains stay open, but the traditional 'horario partido' (split schedule) persists in many areas.",
    "Eating dinner at 6-7 PM. At that hour, kitchens in most restaurants are closed or serving only drinks and snacks (tapas). Dinner service typically begins at 8:30-9 PM. Eating early marks you as a tourist and limits you to tourist-oriented restaurants.",
    "Tipping 15-20% as in the US. Tipping in Spain is modest — leaving small change, rounding up the bill, or adding 5-10% for exceptional service is appropriate. Over-tipping makes staff uncomfortable.",
    "Wearing beachwear in the city. Spaniards dress well for daily life, even in hot weather. Walking through a city in flip-flops, tank tops, or swimwear is considered inappropriate outside beach areas.",
    "Underestimating regional languages. In Catalonia, the Basque Country, and Galicia, the local language is not a dialect — it is a distinct language with its own grammar, literature, and official status. Making an effort to learn basic phrases in Catalan, Basque, or Galician shows respect and is appreciated."
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency',
      description: 'Unified emergency number for police, fire, and ambulance. Multilingual operators available in Spanish, English, French, and German.'
    },
    {
      number: '091',
      service: 'National Police (Policía Nacional)',
      description: 'For crimes, theft reports, and urban emergencies. Present in all cities and larger towns.'
    },
    {
      number: '062',
      service: 'Civil Guard (Guardia Civil)',
      description: 'Police force responsible for rural areas, highways, borders, and coastal waters. Call for incidents outside urban areas.'
    }
  ],
  sources: [
    {
      name: 'Ministry of Foreign Affairs (Exteriores)',
      category: 'Visa & Consular',
      description: 'Official source for visa applications, consular services, and entry requirements for foreign nationals.',
      link: 'https://www.exteriores.gob.es/en/Paginas/index.aspx'
    },
    {
      name: 'Agencia Tributaria (Spanish Tax Agency)',
      category: 'Tax & Finance',
      description: 'Portal for tax filing, NIE-related fiscal obligations, income tax (IRPF), and VAT (IVA) compliance.',
      link: 'https://sede.agenciatributaria.gob.es/'
    },
    {
      name: 'Seguridad Social',
      category: 'Social Security & Healthcare',
      description: 'Official portal for social security registration, healthcare access, pension contributions, and autónomo registration.',
      link: 'https://www.seg-social.es/'
    },
    {
      name: 'Spain.info (Turespaña)',
      category: 'Tourism & Travel',
      description: 'Official tourism portal with destination guides, cultural event calendars, and practical travel information.',
      link: 'https://www.spain.info/en/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Spain, consult the Spanish Ministry of Foreign Affairs or a Spanish embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/spain',
    mfaLink: 'https://www.exteriores.gob.es/en/Paginas/index.aspx'
  },
  serviceDirectory: {
    title: "Service Directory - Spain",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Spain.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with NIE applications, residence permits, digital nomad visa, work authorization, and long-term stay applications.",
        providers: [
          { name: "Balcells Group", link: "https://balcellsgroup.com" },
          { name: "Garrigues", link: "https://www.garrigues.com" },
          { name: "Fragomen Spain", link: "https://www.fragomen.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms helping with long-term rentals, property purchases, and lease contracts across Spanish cities.",
        providers: [
          { name: "Idealista", link: "https://www.idealista.com" },
          { name: "Fotocasa", link: "https://www.fotocasa.es" },
          { name: "Spotahome", link: "https://www.spotahome.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax advisors experienced with Spanish tax residency, Beckham Law applications, autónomo registration, and cross-border income.",
        providers: [
          { name: "Deloitte Spain", link: "https://www2.deloitte.com/es" },
          { name: "PwC Spain", link: "https://www.pwc.es" },
          { name: "KPMG Spain", link: "https://kpmg.com/es" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including shipping, customs clearance, and household moves.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Spain", link: "https://www.agsmovers.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Spanish language schools and institutes for newcomers, from conversational to DELE certification preparation.",
        providers: [
          { name: "Instituto Cervantes", link: "https://www.cervantes.es" },
          { name: "Don Quijote", link: "https://www.donquijote.org" },
          { name: "Enforex", link: "https://www.enforex.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public healthcare access points and private healthcare providers commonly used by residents and expats in Spain.",
        providers: [
          { name: "Sanitas", link: "https://www.sanitas.es" },
          { name: "Adeslas (SegurCaixa)", link: "https://www.segurcaixaadeslas.es" },
          { name: "Quirónsalud", link: "https://www.quironsalud.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Popular platforms and recruitment firms connecting job seekers with employers across Spain.",
        providers: [
          { name: "InfoJobs", link: "https://www.infojobs.net" },
          { name: "Michael Page Spain", link: "https://www.michaelpage.es" },
          { name: "Randstad Spain", link: "https://www.randstad.es" }
        ]
      }
    ]
  }
};
