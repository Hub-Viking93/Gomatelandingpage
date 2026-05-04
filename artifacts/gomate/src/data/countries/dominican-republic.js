export const dominicanRepublic = {
  id: 'dominican-republic',
  slug: 'dominican-republic',
  name: 'Dominican Republic',
  region: 'Americas',
  complexity: 'Low',
  languages: ['Spanish'],
  shortDescription: 'A warm, social Caribbean country where daily life runs on relationships, flexibility, and coastal energy.',
  heroImage: 'https://images.unsplash.com/photo-1645408728506-b94d088f10f0?',
  flagAlt: 'Flag of the Dominican Republic',

  atAGlance:
    "The Dominican Republic is the most visited country in the Caribbean, occupying the eastern two-thirds of the island of Hispaniola (shared with Haiti). It is a relationship-driven society where daily life is shaped more by personal connections and social warmth than by formal systems or institutional efficiency. The culture is outwardly expressive, social, and adaptive — Dominicans greet strangers, chat readily, and treat personal trust as the real operating system of business and daily transactions. Time is treated flexibly ('hora dominicana' means being 15-30 minutes late is socially acceptable in most contexts), while respect, friendliness, and family bonds carry enormous weight. The economy is the largest in the Caribbean, driven by tourism, free trade zones (zonas francas), agriculture, mining, and a growing service sector including call centers and BPO operations. Santo Domingo, the capital, is a modern, sprawling metropolis of over 3 million people with a UNESCO-listed Colonial Zone (Zona Colonial), growing restaurant and nightlife scene, and improving infrastructure. Punta Cana on the eastern coast is the tourism epicenter. Santiago de los Caballeros in the Cibao valley is the second city and agricultural heartland. For newcomers, the country offers high social accessibility, tropical climate, affordable living (relative to North America or Europe), and genuine human warmth, but at the cost of lower institutional predictability: government processes require patience and follow-up, infrastructure quality varies dramatically by area, and personal safety requires awareness. The Digital Nomad Residence visa, offering tax exemption on foreign income for remote workers, has attracted a growing wave of international relocators, particularly to Cabarete, Las Terrenas, and Santo Domingo's upscale neighborhoods.",

  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Tourist entry for most nationalities (30 days, extendable); longer stays require visa/residency process',
    costOfLiving: 'Low-Medium (varies heavily by area and lifestyle)',
    primaryLanguages: 'Spanish (Official)',
  },

  visas: [
    {
      name: 'Tourist Entry (E-Ticket + Tourist Card)',
      targetAudience: 'Tourists, Short-term Visitors',
      useCase: 'Most travelers from the US, Canada, EU, UK, and many other countries enter the Dominican Republic visa-free for tourism. You complete the required E-Ticket (digital entry/exit form) before arrival and receive a tourist card (tarjeta de turista, included in your airline ticket price since 2018) upon entry. Initial stay is typically 30 days, extendable at the Dirección General de Migración.',
      duration: '30 days (extendable for a fee at DGM offices)',
      link: 'https://www.godominicanrepublic.com/en/travel/entry-requirements'
    },
    {
      name: 'Digital Nomad Residence (Residencia de Nómada Digital)',
      targetAudience: 'Remote Workers, Freelancers',
      useCase: 'Introduced in 2022 for remote workers earning at least USD 2,000/month from foreign sources. Grants temporary residence without requiring a Dominican employer. Foreign-sourced income is exempt from Dominican income tax for the duration. Application through the Dirección General de Migración.',
      duration: '12 months (renewable for an additional 12 months)',
      link: 'https://migracion.gob.do/en/servicios/residence/'
    },
    {
      name: 'Business Visa',
      targetAudience: 'Business Travelers',
      useCase: 'For commercial visits, meetings, contract negotiations, and professional trips where a formal visa is required based on nationality and trip purpose. Applied for at the Dominican consulate or through the MIREX online portal.',
      duration: 'Up to 60 days (single or multiple entry)',
      link: 'https://servicios360.mirex.gob.do/visas/'
    },
    {
      name: 'Residence Visa (Visa de Residencia) → Temporary Residence',
      targetAudience: 'Long-term Residents, Retirees, Investors',
      useCase: 'The standard long-stay pathway for anyone planning to live in the DR beyond tourist status. Multiple categories exist: Rentista (passive income/retirement, requiring proof of at least USD 1,500/month), Inversionista (investor), Dependiente (dependent/family member), and Trabajador (employee). You obtain the visa at a Dominican consulate, then apply in-country for temporary residence at the DGM.',
      duration: 'Temporary residence for 1 year (renewable, path to permanent residency after 5 years)',
      link: 'https://migracion.gob.do/en/servicios/residence/'
    },
    {
      name: 'Permanent Residency (Residencia Permanente)',
      targetAudience: 'Long-term Residents after 5 Years',
      useCase: 'After holding temporary residence for 5 years, you can apply for permanent residency. Requires good standing with immigration, clean criminal record, proof of continued financial solvency, and integration documentation.',
      duration: 'Indefinite (with periodic renewal of physical card)',
      link: 'https://migracion.gob.do/en/servicios/residence/'
    }
  ],

  requirements: [
    {
      title: 'E-Ticket (Electronic Entry/Exit Form)',
      explanation: 'A mandatory digital form completed before arriving in or departing from the Dominican Republic. It collects passport details, flight information, customs declarations, and health information. Generates a QR code that is scanned at check-in and immigration.',
      importance: 'Airlines may prevent boarding if you do not have the completed E-Ticket. Complete it within 72 hours of departure, save the QR code on your phone (and print a backup), and ensure all details match your passport exactly. You also need to complete a departure E-Ticket when leaving the country.',
      link: 'https://eticket.migracion.gob.do/'
    },
    {
      title: 'Passport Validity (Minimum 6 Months)',
      explanation: 'Most travel advisories and Dominican immigration officials expect your passport to have at least 6 months of remaining validity from your date of entry. Airlines enforce this at check-in.',
      importance: 'Do not gamble on this. Airlines can deny boarding even before you reach Dominican immigration. If you are planning longer stays or residency, renew your passport well in advance. For residency applications, you will need an authenticated passport with an apostille.',
      link: 'https://migracion.gob.do/'
    },
    {
      title: 'Cédula de Identidad (Residency Card)',
      explanation: 'Once you receive temporary or permanent residency, you are issued a Cédula de Identidad y Electoral for foreigners — the Dominican identity card. This is your primary identification document for banking, contracts, driving, and dealings with authorities.',
      importance: 'The Cédula is your key to formal life in the Dominican Republic: opening bank accounts, signing rental contracts, registering a vehicle, getting a driver\'s license, and interacting with government agencies. Without it, you operate in visitor mode with limited access to formal services. The application process involves fingerprinting, photographs, and document submission at the Junta Central Electoral (JCE).',
      link: 'https://jce.gob.do/'
    },
    {
      title: 'Document Legalization (Apostille + Translation)',
      explanation: 'Foreign documents used for residency applications (birth certificate, marriage certificate, criminal background check, academic degrees) must be apostilled in their country of origin and then translated into Spanish by a certified translator (traductor público) in the Dominican Republic.',
      importance: 'This is a common source of delays. Apostille requirements vary by country, and the Dominican authorities are strict about proper legalization. Start the apostille process weeks or months before you plan to apply for residency. Certified translations typically cost DOP 3,000-8,000 per document.',
      link: 'https://migracion.gob.do/en/servicios/residence/'
    }
  ],

  jobsAndIncome: {
    overview:
      "The Dominican Republic has the largest economy in the Caribbean, driven by tourism and hospitality, free trade zone manufacturing (textiles, electronics, tobacco, medical devices), agriculture (sugar, cocoa, coffee, bananas), mining (gold, ferronickel), and a growing service sector including call centers, BPO operations, and shared services. Local wages are low by international standards — the minimum wage ranges from DOP 12,900-21,000/month (USD 220-360) depending on the sector and company size. Many expats and digital nomads rely on foreign income rather than the local job market.",
    whereToLook: [
      "LinkedIn for multinational, BPO, and management roles",
      "Computrabajo Dominican Republic and Empleos.net — the main Spanish-language job portals",
      "Call center and BPO operators (Conduent, Alorica, TELUS International have Dominican operations)",
      "Remote work platforms (Upwork, Toptal, RemoteOK) for maintaining USD/EUR income while based in the DR",
      "Direct approaches to free trade zone companies and tourism operators"
    ],
    realityChecks: [
      "Local salaries are low: a mid-level office worker earns DOP 30,000-60,000/month (USD 510-1,020). Even skilled professionals (engineers, IT, finance) rarely exceed USD 2,000-3,000/month in the local market.",
      "Tourism and hospitality work is seasonal, with peak demand from December through April and a significant slowdown in September-October.",
      "Work permits are required for formal local employment and must be obtained before starting work. Your employer typically handles the application through the Ministry of Labor.",
      "Remote income in USD or EUR provides a dramatic lifestyle advantage. The Digital Nomad visa was designed specifically for this scenario, offering tax exemption on foreign-sourced income."
    ]
  },

  salaryReality: {
    overview:
      "Salary figures in the Dominican Republic can be misleading because the gap between local and foreign-paid income is enormous. A local professional earning DOP 50,000/month (approximately USD 850) is considered solidly middle class. Meanwhile, a remote worker earning USD 4,000/month lives very comfortably in upscale areas. The Dominican Peso (DOP) has depreciated gradually against the USD (approximately DOP 58-60 per USD 1 in 2024), which benefits foreign-income earners but erodes local purchasing power.",
    realityChecks: [
      "There is a massive gap between local and foreign-paid income. A senior developer at a Dominican company earns DOP 80,000-150,000/month (USD 1,360-2,560); the same role remotely for a US company can pay USD 5,000-10,000.",
      "Wage growth is limited and does not always keep pace with inflation, which has averaged 4-6% in recent years.",
      "Imported goods are expensive relative to local wages: electronics, brand-name clothing, and imported foods carry significant premiums due to customs duties (up to 20-35% plus ITBIS/VAT at 18%).",
      "Tourist areas (Punta Cana, Cabarete, Las Terrenas, Casa de Campo) inflate everyday prices significantly above what similar quality costs in Santo Domingo or Santiago."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Net income after taxes and social security contributions (AFP pension ~2.87% employee, SFS health ~3.04% employee, SRL occupational risk — rates for employees on formal local payroll)",
      "Higher living costs in expat-heavy neighborhoods: Piantini and Naco in Santo Domingo, Bavaro/Punta Cana, Cabarete, and Las Terrenas have prices 30-50% above Dominican averages",
      "Healthcare costs: public healthcare is limited in quality, so most expats budget DOP 3,000-15,000/month (USD 50-255) for private health insurance or pay-per-visit at private clinics",
      "Generator costs: power outages (apagones) are a fact of life outside the most central urban areas. If your building does not have a shared generator, budget for one or an inverter system (DOP 30,000-100,000 upfront plus ongoing fuel or battery costs)"
    ]
  },

  housingSystem: {
    overview:
      "Renting in the Dominican Republic is relatively flexible and expat-friendly, with many furnished apartments available in popular areas. The market ranges from modern high-rise apartments in Santo Domingo's Piantini, Naco, and Ensanche Paraíso neighborhoods (DOP 30,000-80,000/month for a 1-2 bedroom) to beachfront condos in Cabarete, Las Terrenas, and Punta Cana (USD 800-2,500/month for furnished units). Santiago de los Caballeros offers excellent value. Standards vary enormously: luxury gated communities with generators, pools, and security coexist with basic local apartments within a few blocks of each other.",
    expectations:
      "Expect monthly rent payments, typically with a one-month deposit and one month advance rent upfront. Furnished rentals are the norm in expat areas. Before signing a long lease, live in the area for at least two to four weeks to evaluate noise levels (Dominican neighborhoods can be loud), power reliability (apagones affect different areas differently), water pressure, humidity and mold issues, and proximity to services. Platforms include Corotos.com.do (the Dominican classifieds), Airbnb (for initial housing), local Facebook groups ('Expats in Dominican Republic', 'Cabarete Rentals'), and real estate agents in specific areas. Always negotiate — listed prices are often starting points, not final prices."
  },

  healthcareReality:
    "The Dominican Republic has a mixed public-private healthcare system. Public hospitals and clinics (hospitales públicos) exist but are chronically underfunded, overcrowded, and limited in equipment and specialist availability. Most expats and middle-class Dominicans use private hospitals and clinics, which offer significantly better care at prices that are affordable by international standards. In Santo Domingo, top private hospitals include Hospital General Plaza de la Salud, Cedimat (cardiovascular specialty), Centro Médico UCE, and Clínica Abreu. In Santiago, Hospital Metropolitano de Santiago (HOMS) is the leading private facility. In Punta Cana, Hospiten Bávaro and IMG (International Medical Group) serve the tourist and expat population. GP visits at private clinics cost DOP 1,000-3,000 (USD 17-50), and specialist visits DOP 2,000-5,000 (USD 34-85). Private health insurance (seguros médicos) is available from Dominican insurers (Humano, ARS Palic, Senasa Contributivo) at DOP 3,000-15,000/month depending on coverage level. International health insurance with medical evacuation to Miami (1.5-hour flight) is strongly recommended for serious conditions requiring advanced specialized care.",

  digitalLife: {
    overview:
      "Digital life in the Dominican Republic is functional but inconsistent. Urban areas have improving internet infrastructure (Claro, Altice, and Wind Telecom offer fiber and 4G/5G), while rural and semi-rural areas may have limited connectivity. Daily coordination often happens through WhatsApp (the de facto communication platform for everything from business to personal to government correspondence) rather than email or formal digital portals.",
    essentials: [
      "Local SIM card: Claro (largest coverage) or Altice (competitive pricing). Available at the airport and throughout cities. Data plans cost DOP 500-1,500/month for generous data. 5G is available in parts of Santo Domingo and Punta Cana.",
      "WhatsApp: the essential communication tool. Businesses, landlords, doctors, delivery services, and even some government offices communicate primarily via WhatsApp. Have it installed and active from day one.",
      "Cash and cards in parallel: credit and debit cards are accepted at major stores, restaurants, and gas stations, but small businesses, colmados (corner stores), street vendors, and many service providers operate cash-only. Always carry DOP 2,000-5,000 in cash.",
      "E-Ticket app/portal (eticket.migracion.gob.do): required for every entry and exit. Save the QR code and keep it accessible."
    ],
    whatSurprisesNewcomers: [
      "Lack of unified digital government services. While the government portal (gob.do) exists, many administrative processes still require physical presence, printed documents, and in-person follow-up at specific offices.",
      "Internet reliability varies significantly by location. Check speeds at any prospective rental before committing. In Cabarete, Las Terrenas, and parts of the Colonial Zone, fiber is available and reliable; in some residential neighborhoods, it is not.",
      "Power outages (apagones) are a regular feature of life outside the most central urban areas. Many residential buildings have shared generators (plantas), but verify this before renting. Personal inverters (inversores) with battery backup are common in homes without central generators.",
      "Delivery culture is well-developed: apps like PedidosYa, Hugo, and local delivery services bring food, groceries, and pharmacy items to your door in major cities. Motoconcho (motorcycle taxi) delivery is the backbone of urban logistics."
    ]
  },

  culture: {
    text: "Dominican culture is outwardly warm, social, expressive, and deeply relationship-oriented. People greet each other readily, strike up conversations with strangers, and treat personal connection as the foundation of all interaction — whether buying groceries, negotiating rent, or dealing with a government office. Time is more fluid than in Northern Europe or North America: being 15-30 minutes 'late' is culturally normal in social and even some business contexts (though formal corporate settings increasingly expect punctuality). Family networks are central to social organization, and personal trust (confianza) is the currency that makes things happen — having a 'contacto' (connection) at an office or institution can dramatically accelerate processes that otherwise move slowly. Music permeates daily life: merengue, bachata, and dembow are not just genres but cultural identities, playing from colmados, cars, and homes at all hours. Baseball (béisbol) is the national sport, with the Dominican Republic producing more Major League Baseball players per capita than any other country. The best adaptation strategy for newcomers is not imposing rigid structure but learning the local rhythm: be warm, confirm details twice, build a small circle of trusted people, and let relationships open doors that processes cannot.",
    highlights: [
      "Warm social culture: greeting people ('Buenos días/tardes/noches') and engaging in brief small talk before getting to the point is expected and appreciated. Jumping straight to business is considered abrupt.",
      "Time is flexible: 'la hora dominicana' means appointments and social gatherings start 15-30 minutes after the stated time. Confirmations ('Are we still on for tonight?') are more reliable than original scheduling.",
      "Family first: family bonds are strong and extended family networks are actively maintained. It is common for multiple generations to live together or nearby, and family obligations take priority over professional commitments.",
      "Direct confrontation is avoided: people often soften 'no' into 'maybe' or 'later' (después, mañana). Learning to read indirect communication is an essential social skill.",
      "Music and celebration: merengue, bachata, and dembow are the soundtrack of daily life. Even mundane errands happen to music. Carnival (Carnaval, February-March) is a major cultural celebration with parades, costumes, and community events."
    ]
  },

  transportationMobility:
    "Public transportation in the Dominican Republic is informal and fragmented but functional. In Santo Domingo, the Metro (2 lines, expanding) is modern, air-conditioned, and affordable (DOP 35 per ride). OMSA buses cover major routes. Guaguas (public minibuses) and carros públicos (shared route taxis) are the backbone of local transport, running on fixed routes for DOP 25-50. Motoconchos (motorcycle taxis) provide flexible point-to-point transport for DOP 50-150 in cities. Ride-hailing apps (Uber operates in Santo Domingo; InDriver and local apps are available elsewhere) provide metered alternatives. Outside Santo Domingo, long-distance transport is handled by Caribe Tours and Metro Buses (inter-city coaches), guaguas, and shared taxis between cities. Car ownership is common for expats and essential outside major urban areas. Dominican roads vary from modern highways (autopistas) to pothole-riddled secondary roads. Driving is aggressive, road rules are loosely enforced, and motorbikes weave unpredictably through traffic. A valid international driving permit or Dominican license is required.",

  internationalConnectivity:
    "The Dominican Republic is well connected internationally through multiple airports. Punta Cana International Airport (PUJ) is the Caribbean's busiest airport by passenger volume, with direct flights to the US (New York, Miami, Boston, Atlanta, Charlotte, Fort Lauderdale), Canada (Toronto, Montreal), and Europe (Madrid, Paris, Amsterdam, Frankfurt, London). Las Américas International Airport (SDQ) in Santo Domingo serves the capital with flights to the US, Caribbean, and Latin America. Cibao International Airport (STI) near Santiago connects to the US East Coast. Puerto Plata's Gregorio Luperón Airport (POP) serves the North Coast. American Airlines, JetBlue, Delta, United, Air Canada, Iberia, Air France, and Condor operate regular service. Flight times: Miami approximately 2.5 hours, New York approximately 3.5 hours, Madrid approximately 8 hours, Toronto approximately 4.5 hours. Inter-Caribbean flights connect to Puerto Rico, Jamaica, Cuba, and other islands through Caribbean Airlines and local carriers.",

  travelExploration:
    "The Dominican Republic offers remarkable diversity across a relatively compact territory. The Colonial Zone (Zona Colonial) in Santo Domingo is the oldest European settlement in the Americas, featuring the Alcázar de Colón, Catedral Primada de América, and cobblestone streets with 16th-century architecture — a UNESCO World Heritage site. Punta Cana and Bávaro offer white-sand beaches and all-inclusive resort culture. The Samaná Peninsula features the Salto El Limón waterfall, Los Haitises National Park (dramatic karst landscapes and mangrove forests), and whale watching (humpback whales migrate to Samaná Bay January-March). Cabarete on the North Coast is a world-class kitesurfing and windsurfing destination. Jarabacoa and Constanza in the Central Highlands offer mountain trekking, river rafting, and the ascent of Pico Duarte (3,098m, the Caribbean's highest peak). The Lago Enriquillo in the southwest is a saltwater lake home to American crocodiles and flamingos. Bayahibe and Isla Saona provide postcard-perfect island day trips. Santo Domingo's Malecón waterfront promenade and the Mercado Modelo (artisan market) are essential urban experiences.",

  considerations: [
    "Residency vs. Tourist Status: You can technically live in the Dominican Republic on rolling tourist entries (extending or paying the overstay fee at departure), but this creates constant friction — limited access to banking, inability to sign formal contracts, and periodic re-entry requirements. If you are serious about long-term living, invest in the residency process early. It takes time and paperwork but unlocks formal integration.",
    "The 'Paper Reality': Expect forms to ask for a local address, physical copies of documents, passport photos, and in-person steps — even when a website exists. Build a small admin kit before arrival: passport copies, legalized birth certificate with apostille, criminal background check (apostilled), passport-size photos (white background, Dominican spec), and patience. The fastest way to get stuck is assuming everything is 'click, submit, done.'",
    "Neighborhood Matters More Than City Name: Two areas 10 minutes apart can feel like different countries in terms of safety, noise, infrastructure, and services. In Santo Domingo, Piantini and Naco are upscale and secure; other areas a short drive away have different profiles. In Cabarete, the beachfront tourist strip and the residential inland areas have distinct characters. Visit before committing.",
    "Power Reliability (Apagones): Scheduled and unscheduled power outages are a fact of life, especially outside premium areas of Santo Domingo. Many buildings have shared generators (plantas), but not all. If you work remotely, verify the power situation (generator backup, inverter capacity) at any rental before signing a lease.",
    "Safety Awareness: The Dominican Republic is generally safe for residents who exercise normal urban awareness. Petty theft (phone snatching, bag theft on motorbikes) occurs in cities. Avoid displaying expensive items in public, use secure ATMs (inside banks or malls), and be cautious at night in unfamiliar areas. Tourist Police (POLITUR) operate in major tourist zones and are generally helpful."
  ],

  mistakes: [
    "Treating timelines like Northern Europe. Submitting one document or one application does not mean the process is complete. Always plan for follow-ups, in-person visits, missing document requests, and 'come back next week' loops. Building a relationship with a facilitator (gestor) or immigration lawyer who knows the system saves enormous time and frustration.",
    "Signing a long lease before living in the area for at least two to four weeks. Noise levels (Dominican neighborhoods can be extremely loud with music, dogs, roosters, and traffic), power outage frequency, water pressure reliability, humidity and mold issues, and proximity to daily services vary dramatically block by block. Short-term rental first, long-term commitment second.",
    "Underestimating the importance of Spanish. You can survive without Spanish in tourist areas, but your life becomes significantly smaller and more expensive. Prices for services, housing, and everyday goods are consistently lower when negotiated in Spanish. Social integration beyond the expat bubble requires at least conversational Spanish. Invest in lessons early.",
    "Assuming 911 response is identical everywhere. The 911 system exists and works in major cities, but response times vary significantly by location. Outside Santo Domingo and major tourist hubs, know the nearest clinic or hospital, have a reliable taxi driver's number saved, and keep basic first-aid supplies at home. POLITUR (Tourist Police) contacts are useful in tourist zones.",
    "Not carrying cash. While card acceptance is growing in cities and tourist areas, the Dominican economy remains substantially cash-based. Colmados (corner stores), small restaurants (comedores), public transport, street vendors, and many service providers require cash. ATMs are widely available but dispense Dominican Pesos; some dispense USD. Carry DOP 2,000-5,000 at all times."
  ],

  emergency: [
    {
      number: '911',
      service: 'National Emergency System (Sistema 911)',
      description: 'Police, ambulance, fire, and emergency coordination. Coverage is strongest in Santo Domingo, Santiago, and major tourist areas. Response times can vary outside urban centers.'
    },
    {
      number: '(809) 200-3500',
      service: 'POLITUR (Tourist Police)',
      description: 'Tourist police operating in major tourist zones (Punta Cana, Puerto Plata, Samaná, Colonial Zone). Bilingual officers available. Useful for tourist-specific incidents including theft, scams, and orientation assistance.'
    },
    {
      number: '(809) 682-2151',
      service: 'Policía Nacional (National Police)',
      description: 'General police contact for non-emergency reports, inquiries, and communication with local police stations (destacamentos). Available as a backup contact when 911 is not responsive in your area.'
    }
  ],

  sources: [
    {
      name: 'Dirección General de Migración (DGM)',
      category: 'Immigration',
      description: 'The official Dominican authority for entry/exit control, residence permits, E-Ticket processing, and the Digital Nomad visa. The authoritative source for all immigration matters.',
      link: 'https://migracion.gob.do/en/'
    },
    {
      name: 'MIREX (Ministerio de Relaciones Exteriores)',
      category: 'Visas & Consular',
      description: 'The Ministry of Foreign Affairs, responsible for visa issuance at Dominican consulates abroad, diplomatic relations, and apostille/legalization services.',
      link: 'https://mirex.gob.do/'
    },
    {
      name: 'Portal Único de Servicios del Estado (GOB.DO)',
      category: 'Government Services',
      description: 'Central portal for Dominican government services and transactions, including business registration, tax payments, and administrative procedures.',
      link: 'https://www.gob.do/'
    },
    {
      name: 'Dirección General de Impuestos Internos (DGII)',
      category: 'Taxation',
      description: 'The Dominican tax authority, administering income tax, ITBIS (VAT at 18%), property tax, and vehicle registration. Essential for understanding tax obligations for residents.',
      link: 'https://www.dgii.gov.do/'
    }
  ],

  embassies: {
    description: 'For consular assistance, visa guidance, and official diplomatic contacts, consult the Dominican Republic Ministry of Foreign Affairs (MIREX) or a Dominican embassy or consulate abroad.',
    directoryLink: 'https://mirex.gob.do/',
    mfaLink: 'https://mirex.gob.do/'
  },
  serviceDirectory: {
    title: "Service Directory - Dominican Republic",
    description: "Examples of large, commonly used service providers people often interact with when relocating to the Dominican Republic.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for residency applications, cédula processing, Digital Nomad visa, and immigration compliance.",
        providers: [
          { name: "Pellerano & Herrera", link: "https://www.phlaw.com" },
          { name: "Headrick Rizik Alvarez & Fernández", link: "https://www.hraflaw.com" },
          { name: "Fragomen Dominican Republic", link: "https://www.fragomen.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies assisting with rentals, property purchases, and relocation housing in Santo Domingo, Punta Cana, and the North Coast.",
        providers: [
          { name: "RE/MAX Dominican Republic", link: "https://www.remax.com.do" },
          { name: "Century 21 Dominican Republic", link: "https://www.century21.com.do" },
          { name: "Keller Williams Dominican Republic", link: "https://www.kw.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Dominican tax residency, DGII compliance, cross-border income structuring, and Digital Nomad tax exemptions.",
        providers: [
          { name: "PwC Dominican Republic", link: "https://www.pwc.com/do" },
          { name: "EY Dominican Republic", link: "https://www.ey.com/es_do" },
          { name: "KPMG Dominican Republic", link: "https://home.kpmg/do" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International relocation services including shipping, customs clearance, and Caribbean logistics.",
        providers: [
          { name: "Crown Relocations Caribbean", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Dominican Republic", link: "https://www.agsmovers.com" },
          { name: "Caribbean Freight Services", link: "https://www.caribbeanfreight.com" }
        ]
      },
      {
        name: "Language Schools",
        description: "Spanish language courses and immersion programs for foreigners, from beginner to conversational fluency.",
        providers: [
          { name: "Instituto Cultural Dominico-Americano (ICDA)", link: "https://www.icda.edu.do" },
          { name: "Entrena Spanish School (Cabarete)", link: "https://www.entrenaspanish.com" },
          { name: "Santo Domingo Spanish School", link: "https://www.santodomingospanishschool.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major private hospitals, clinics, and health insurance providers commonly used by residents and expats.",
        providers: [
          { name: "Hospital General Plaza de la Salud", link: "https://www.hgps.org.do" },
          { name: "Cedimat (Centro de Diagnóstico y Medicina Avanzada)", link: "https://www.cedimat.net" },
          { name: "Hospiten Bávaro (Punta Cana)", link: "https://www.hospiten.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Employment platforms and recruitment firms connecting professionals with Dominican employers.",
        providers: [
          { name: "Computrabajo Dominican Republic", link: "https://www.computrabajo.com.do" },
          { name: "Empleos.net", link: "https://www.empleos.net" },
          { name: "LinkedIn (Dominican Republic)", link: "https://www.linkedin.com" }
        ]
      }
    ]
  }
};
