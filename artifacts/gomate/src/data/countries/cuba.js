export const cuba = {
  id: 'cuba',
  slug: 'cuba',
  name: 'Cuba',
  region: 'Americas',
  complexity: 'High',
  languages: ['Spanish', 'English (tourist zones only)'],
  shortDescription: 'A Caribbean island where revolutionary history, cultural richness, and daily improvisation define life under scarcity.',
  heroImage: 'https://images.unsplash.com/photo-1500622944204-b135684e99fd',
  flagAlt: 'Flag of Cuba',
  atAGlance: "Cuba is a Caribbean island of roughly 11 million people whose culture punches far above its size — son cubano, rumba, and salsa were born here, alongside a literary tradition from José Martí through Alejo Carpentier to Leonardo Padura. Havana is a crumbling but magnetic city of colonial plazas, Art Deco apartments, and 1950s American cars still serving as daily transport. The state, through the Dirección de Identificación, Inmigración y Extranjería (DIIE, under MININT), controls immigration tightly: permanent residency is largely restricted to spouses and parents of Cuban citizens, and most long-staying foreigners rotate Residencia Temporal permits tied to work, study, family, or investment. Since the 2021 Tarea Ordenamiento, the Cuban Peso (CUP) is the only legal tender, but a parallel MLC (Moneda Libremente Convertible) card system functions as electronic hard-currency store credit, and an informal USD cash market runs alongside — official and street rates diverge dramatically. Since 2020, COVID, tightened US sanctions, and the Ordenamiento have produced severe shortages: rolling 4-12 hour blackouts (apagones) are routine, libreta de abastecimiento rationing continues, more than half a million Cubans emigrated in 2022-2024, and the July 2021 protests and Patria y Vida movement marked a visible break in the social contract. Healthcare is universal and free for residents — roughly 8.4 doctors per 1,000 — but medicines and supplies are chronically short. For US citizens, tourism is prohibited under OFAC; travel requires fitting one of 12 general license categories (Support for the Cuban People is most common) with five-year record-keeping. For everyone else, Cuba is cheap in CUP, expensive in USD, slow in its bureaucracy, and structured around the verb 'resolver'.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Tourist Card 30 days (extendable to 90); Residence permits by category',
    costOfLiving: 'Low in CUP / Medium-High in USD/MLC',
    primaryLanguages: 'Spanish (Official), Limited English in tourist zones',
  },
  visas: [
    {
      name: 'Tourist Card (Tarjeta de Turista)',
      targetAudience: 'Tourists, short-term visitors (non-US)',
      useCase: 'The standard entry document for most nationalities, purchased through Cuban consulates, authorised travel agencies, or certain airlines. Allows tourism, family visits, and limited personal travel. US citizens cannot use the Tourist Card for tourism and must travel under one of 12 OFAC general license categories (most commonly Support for the Cuban People), with five-year record-keeping obligations.',
      duration: '30 days, extendable once to 60 or 90 days total through DIIE offices',
      link: 'https://www.minrex.gob.cu/en'
    },
    {
      name: 'Temporary Residence (Residencia Temporal)',
      targetAudience: 'Foreign workers, students, investors, family members, and long-stay foreign nationals',
      useCase: 'The standard long-stay permit for foreigners tied to a specific purpose: employment with a Cuban entity or joint venture, university enrollment, investment in the Mariel Special Development Zone, or close family links. Issued by the Dirección de Identificación, Inmigración y Extranjería (DIIE) under the Ministerio del Interior (MININT). Requires sponsoring entity, medical clearance, and police records from country of origin. Holders receive a Carnet de Identidad de Extranjero (foreigner ID card).',
      duration: '1 year, renewable as long as the underlying purpose continues',
      link: 'https://www.gacetaoficial.gob.cu/'
    },
    {
      name: 'Cuban-Origin / Heritage Repatriation (Residencia por Vínculo Cubano)',
      targetAudience: 'Cuban-born emigrants and direct descendants in the diaspora',
      useCase: 'Cuba recognises a distinct pathway for the diaspora — over 2 million Cuban-Americans plus large communities in Spain, Mexico, and Italy. Cuban-born emigrants who left after 1971 can apply for repatriation (repatriación) and recover Cuban citizenship rights, while children and grandchildren of Cuban nationals may pursue residency through descent. Processed through the Cuban consulate of residence and finalised at the Registro de Extranjeros / Registro del Estado Civil in Cuba. Marriage to a Cuban citizen and being the parent of a Cuban national are parallel routes to Residencia Permanente.',
      duration: 'Indefinite once granted; subject to absence limits and ongoing registration',
      link: 'https://www.minrex.gob.cu/en'
    },
    {
      name: 'Student Visa (Visa de Estudiante)',
      targetAudience: 'International students at Cuban universities and medical schools',
      useCase: 'For foreigners enrolled at institutions such as the Universidad de La Habana, the Escuela Latinoamericana de Medicina (ELAM), Instituto Superior de Arte (ISA), or the Universidad de Oriente in Santiago de Cuba. ELAM is particularly prominent, training doctors from Latin America, Africa, and the United States on full scholarships as part of Cuban medical diplomacy. Requires acceptance letter, proof of funding or scholarship, and medical clearance. Converts to a Residencia Temporal for the duration of studies once in Cuba.',
      duration: 'Duration of study programme',
      link: 'https://www.mes.gob.cu/'
    },
    {
      name: 'ZEDM Investor & MIPYME Business Permit',
      targetAudience: 'Foreign investors in the Mariel Zone, MIPYME partners, journalists, and business travelers',
      useCase: 'Investors pursuing projects in the Zona Especial de Desarrollo Mariel (ZEDM) — Cuba\'s Chinese-style special economic zone west of Havana — apply under Ley 118 (Foreign Investment Law) through ProCuba and the ZEDM Office, then convert to a Residencia Temporal. Foreign partners in MIPYMES (the small and medium private enterprises legalised in 2021, now numbering in the thousands across food, IT, and import sectors) use a similar business-entry route. The D-6 journalist visa, mandatory for any foreign journalist working in Cuba, is accredited separately through the Centro de Prensa Internacional (CPI) and is granted selectively.',
      duration: 'Investor permits 1 year (renewable); business and journalist visas typically 30-90 days per entry',
      link: 'https://www.zedmariel.com/'
    }
  ],
  requirements: [
    {
      title: 'DIIE Registration and Carnet de Identidad de Extranjero',
      explanation: 'Every foreigner on a Residencia Temporal or Permanente must register with the Dirección de Identificación, Inmigración y Extranjería (DIIE) at a local Oficina de Inmigración y Extranjería, typically within 30 days of arrival. Once registered, you are issued a Carnet de Identidad de Extranjero — the physical foreigner ID card that serves as your primary identification.',
      importance: 'The Carnet is required for nearly every formal transaction: opening a CUP bank account, signing a housing contract, enrolling in university, contracting ETECSA services, and obtaining domestic airline or Viazul tickets at resident rates. Without it you remain on a tourist footing, paying foreigner prices in USD/MLC and locked out of local systems. Address changes and renewals must be reported; lapses can jeopardise residency status.',
      link: 'https://www.minint.gob.cu/'
    },
    {
      title: 'Cuban Peso (CUP) Bank Account',
      explanation: 'Opening an account with Banco Metropolitano (the main foreigner-facing bank in Havana), Banco Popular de Ahorro (BPA), or BANDEC requires your passport, Carnet, proof of address, and usually a letter from your sponsoring entity or employer. Accounts are denominated in Cuban Pesos (CUP) since the 2021 Tarea Ordenamiento abolished the dual CUC/CUP system.',
      importance: 'A local CUP account is needed to receive a Cuban salary, pay utilities through Transfermóvil or EnZona, and handle domestic transactions. International wire transfers are constrained by US sanctions; many foreign banks will not send funds directly, so expect workarounds through third-country banks or cash-in-hand. Cuban-issued cards do not work internationally, and US-issued Visa, Mastercard, and Amex do not work inside Cuba.',
      link: 'https://www.bc.gob.cu/'
    },
    {
      title: 'ETECSA Cellular Line and Nauta Email',
      explanation: 'ETECSA is the state telecommunications monopoly — the only provider of mobile, fixed-line, and internet services. Foreigners with residency obtain a Cubacel SIM at an ETECSA office with passport and Carnet; the same office issues a Nauta email account (@nauta.cu). Mobile data launched in late 2018, but speeds are modest and prices are high relative to wages.',
      importance: 'Without an ETECSA line and a Nauta account you cannot register for Transfermóvil (mobile banking), EnZona (payments), or many government services. Wi-Fi hotspots historically required tarjetas Nauta; public Wi-Fi remains common in parks and hotel lobbies. Expect VPNs to be throttled or blocked, and US streaming platforms (Netflix, Hulu) unavailable due to the embargo.',
      link: 'https://www.etecsa.cu/'
    },
    {
      title: 'MLC Card for Imported Goods',
      explanation: 'The Moneda Libremente Convertible (MLC), introduced in 2020, is not physical currency but an electronic USD-equivalent balance held on a bank card, funded by inbound foreign currency transfers or cash deposits at authorised banks. MLC cards (issued by Banco Metropolitano, BPA, or BANDEC) are used at dedicated MLC stores stocked with imported food, toiletries, and electronics typically unavailable in regular CUP stores.',
      importance: 'Since the 2020-21 crisis, many essentials — cooking oil, chicken, detergent, replacement parts — sell primarily in MLC shops. Without an MLC card and a way to load it with foreign currency, access requires either the informal USD cash market or family remittances. Plan your funding channel (incoming transfers, cash imports declared on arrival) before you need the card.',
      link: 'https://www.bc.gob.cu/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Cuba's formal labor market is state-dominated across health, education, government, and state enterprises. Foreign-invested joint ventures in tourism, biotech, and the Zona Especial de Desarrollo Mariel hire a small number of foreigners through Cuban labor agencies (ACOREC and similar) that act as legal employer. Since 2021 reforms expanded the private sector (cuentapropistas and MIPYMES — small and medium private enterprises), more foreigners work informally with these businesses, though formal employment remains tightly controlled.",
    whereToLook: [
      "Cámara de Comercio de la República de Cuba (Chamber of Commerce) — for joint venture and foreign investor connections",
      "Zona Especial de Desarrollo Mariel (ZEDM) portal — for investor and specialist roles in the special economic zone",
      "LinkedIn — limited reach inside Cuba but useful for remote roles serving the Cuban market from abroad",
      "MIPYME directories and sector-specific WhatsApp groups — the practical channel for connecting with private businesses",
      "Direct outreach to international organisations (UN agencies, EU delegation, WFP, PAHO) based in Havana"
    ],
    realityChecks: [
      "Spanish is essential. Workplace Spanish, bureaucratic Spanish, and the ability to navigate informal networks matter far more than English fluency outside a handful of tourism-facing roles.",
      "Foreigners cannot typically be hired directly by Cuban state entities. An employment contract usually flows through a Cuban labor agency that collects your salary in hard currency and pays you a CUP stipend — a structure that newcomers find opaque.",
      "The private sector (MIPYMES, cuentapropistas, and artists in CUBARTE) offers the most realistic path to income for residents, but most arrangements are informal and depend on trust, referrals, and personal networks.",
      "Remote income from abroad is the most common practical model, paired with a Residencia Temporal tied to family or study rather than to employment."
    ]
  },
  salaryReality: {
    overview:
      "Official Cuban salaries are extremely low in USD terms. State-sector monthly wages typically fall in the 3,000-6,000 CUP range (roughly 15-25 USD at the informal street rate in 2024-2025, though far higher at the official rate). Doctors, engineers, and senior professionals earn modestly more. The gap between official figures and street-level purchasing power is enormous, and virtually every household supplements state income with private activity, remittances, or informal work.",
    realityChecks: [
      "The informal USD-to-CUP rate is what matters day-to-day. Check independent trackers such as elToque before converting money; the official rate is largely symbolic for foreigners.",
      "State salaries alone cannot cover a typical household's food and utility costs. Virtually everyone supplements through private side-work, family remittances, or access to MLC/USD channels.",
      "Foreigners paid in USD or EUR by employers abroad live comfortably by local standards, but imported goods in MLC shops are priced close to North American retail levels.",
      "Tipping culture (propinas) in tourism is significant: waiters, musicians, guides, and casa particular hosts rely on foreign-currency tips that often exceed monthly state salaries."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The gap between official and informal exchange rates — official figures convert CUP at rates that do not reflect real purchasing power",
      "The dependency on remittances: Western Union was cut for Cuba in 2020; most remittances now flow through informal mulas, crypto, or third-country transfers",
      "The cost of MLC-priced imported staples: cooking oil, chicken, and detergent in MLC stores can cost a full week of state salary",
      "Blackout-related costs: candles, rechargeable fans, power banks, and diesel for small generators add up during the 4-12 hour daily cuts"
    ]
  },
  housingSystem: {
    overview:
      "The Cuban housing market opened to private transactions in 2011, allowing citizens to buy and sell homes for the first time since the 1960s. Casas particulares — licensed private homestays and room rentals — are the most common housing option for short-to-medium-stay foreigners, available across Havana (particularly Vedado, Habana Vieja, and Miramar), Trinidad, Santiago de Cuba, Cienfuegos, Camagüey, and Viñales. Long-term private rentals exist but require local contacts, since online listings are limited and most arrangements happen through word of mouth or intermediaries.",
    expectations:
      "Foreigners generally cannot own residential property — narrow exceptions exist for certain permanent residents and for units in designated tourism/investment complexes. Expect cash-based transactions, rent typically paid monthly in USD or EUR, and deposits of one to three months. Verify the owner holds the título de propiedad and that the house is registered with the local housing authority. Utilities are often included in casa particular rents but negotiated separately on longer leases. Rolling blackouts, water interruptions (pipas supplement the grid), and deferred maintenance are realities of most buildings; inspect tanks, cisterns, and the electrical board before signing."
  },
  healthcareReality:
    "Cuba's healthcare system, administered by the Ministerio de Salud Pública (MINSAP), is universal and free at the point of use for residents, with roughly 8.4 doctors per 1,000 people — one of the world's highest ratios. Family doctors (médicos de familia) and polyclinics (policlínicos) cover primary care in every neighborhood, and the country is internationally recognised for cardiology, ophthalmology, oncology, and vaccine development (the domestically produced COVID-19 vaccines Abdala and Soberana). However, the post-2020 crisis has produced sustained shortages of medicines, reagents, and equipment; patients are frequently asked to bring their own supplies. Foreigners and most expatriates use the parallel medical-tourism system: Hospital Internacional Cira García in Havana's Miramar, the Clínica Central Cira García, and Servimed facilities in Varadero and Santiago serve foreigners at USD rates and accept international insurance (except US-issued policies, blocked by the embargo). Mandatory travel medical insurance is required at entry for most nationalities. Pharmacies (farmacias) are widespread but frequently out of stock; bringing personal supplies of prescription drugs, contraceptives, and OTC essentials from abroad is standard practice.",
  digitalLife: {
    overview:
      "ETECSA is the sole telecommunications provider, controlling mobile, fixed-line, and internet services nationally. Mobile data reached most of the country by the early 2020s, but speeds are slow, prices are high relative to wages, and service is prone to throttling and outages during politically sensitive moments. Cash remains dominant in daily commerce, though Transfermóvil and EnZona are the domestic mobile payment apps used for utilities, taxes, and peer-to-peer transfers in CUP.",
    essentials: [
      "Cubacel SIM and ETECSA mobile data plan — the only option for local connectivity",
      "Nauta email account (@nauta.cu) — required to register for domestic apps and government services",
      "Transfermóvil — the state mobile banking and payments app, used for electricity, ETECSA top-ups, and taxes",
      "EnZona — an alternative state-backed payment app covering many of the same functions"
    ],
    whatSurprisesNewcomers: [
      "US streaming services (Netflix, Hulu, Disney+), most cloud providers, and many commercial websites are blocked by the US embargo rather than by Cuba, and commonly require a VPN even though VPNs themselves are frequently throttled.",
      "Public Wi-Fi hotspots in parks, plazas, and hotel lobbies were the primary way to get online for years; mobile data has reduced their importance but they remain heavily used, especially during mobile network congestion.",
      "Cash is the default for nearly all private transactions. Cards are accepted at major hotels, state stores, and MLC shops, but not in casas particulares, paladares (private restaurants), or street-level commerce.",
      "Rolling blackouts disrupt connectivity as well as work. Anyone relying on remote income should budget for a UPS, a power bank, and a portable mobile hotspot as baseline infrastructure."
    ]
  },
  culture: {
    text: "Cuban culture is extraordinarily dense for a country of its size: son cubano, rumba, danzón, bolero, and the evolution into salsa and timba all originated here, and music is a constant presence in streets, buses, and homes. Literature runs from José Martí's independence-era essays through Alejo Carpentier's lo real maravilloso, José Lezama Lima's baroque prose, and Leonardo Padura's contemporary noir. Religion blends Roman Catholicism with Santería and other Afro-Cuban traditions; orishas like Yemayá and Changó are part of everyday vocabulary. Cigars (Cohiba, Montecristo, Partagás) and rum (Havana Club, Santiago) are industries and cultural identities at once. Baseball — pelota — is the national obsession, with Industriales of Havana and Santiago de Cuba at the centre of fierce rivalries. The social fabric is shaped by resolver (improvising a way through any obstacle) and invento (ingenuity born of scarcity); these are genuine survival strategies, not jokes. Family is the primary social unit, hospitality is immediate and intense, and strangers are folded into conversations with surprising speed.",
    highlights: [
      "Music is the ambient layer of daily life. Live son and timba play in casas de la música, paladares, and street corners; a baseline familiarity with Cuban musical history opens doors everywhere.",
      "Resolver is the operating philosophy. The ability to improvise solutions — from finding scarce ingredients to arranging transport during blackouts — is admired and expected. Rigidity is a cultural misfit.",
      "Greetings are physical and warm. Men shake hands; women exchange a single cheek kiss with men and women alike. Treating Cuban greetings with North-European reserve is read as coldness.",
      "Baseball conversations are cultural currency. Knowing the Industriales-Santiago rivalry, or mentioning Cuban legends in MLB, earns instant goodwill with most Cuban men.",
      "Jineterismo — tourist-directed hustling in Havana's centro and Varadero — is a real and sometimes uncomfortable dynamic. Read it for what it is (a product of economic scarcity), stay polite, and rely on trusted referrals for long-term relationships."
    ]
  },
  transportationMobility:
    "Havana has no metro. The iconic 1950s American cars (almendrones, colloquially the yank tanks) still operate as shared-route taxis, alongside more modern fixed-route máquinas, Lada-based colectivos, and the yellow three-wheeled coco-taxis. State buses (guaguas) run intra-city routes but are slow, crowded, and schedule-averse. Between cities, Viazul is the main bus line used by foreigners, with daily services connecting Havana to Varadero, Viñales, Trinidad, Cienfuegos, Camagüey, Holguín, and Santiago de Cuba; tickets are bookable online and paid in CUP or USD. Cubataxi and state-run radio taxis serve longer intercity trips. Domestic flights through Cubana de Aviación and Aerogaviota connect Havana to Santiago, Holguín, and the keys (Cayo Coco, Cayo Largo) but the fleet is aging and cancellations are common. Cycling is the default in smaller cities and the countryside, and horse-drawn carriages (coches) remain working transport in Camagüey, Bayamo, and Cárdenas. Car rental through Cubacar, Havanautos, or Rex is possible but expensive, subject to shortages, and complicated by fuel rationing during crisis periods.",
  internationalConnectivity:
    "José Martí International Airport (HAV) in Havana is the primary international gateway, with direct routes from Madrid, Paris, Frankfurt, Moscow, Toronto, Montreal, Cancún, Panama City, and several Caribbean hubs. Varadero (VRA), Santiago de Cuba (SCU), Holguín (HOG), and Cayo Coco (CCC) handle seasonal charters and some scheduled routes. Major carriers include Cubana de Aviación (limited fleet), Iberia, Air France, Air Europa, Condor, Air Canada, Aeroméxico, and Copa. US-Cuba direct flights resumed after 2016 and continue under OFAC rules from Miami, Fort Lauderdale, Tampa, and Houston, but US citizens may only board under one of the 12 authorised categories. Flight times run roughly 1 hour to Miami, 3.5 to Mexico City, 4.5 to Toronto, and 9-10 to Madrid. Expect long queues, mandatory insurance checks at entry, and customs declarations for cash above 5,000 USD equivalent.",
  travelExploration:
    "Cuba rewards slow travel. Old Havana (Habana Vieja), a UNESCO World Heritage Site, combines Spanish colonial architecture with Art Deco and revolutionary-era monuments; the Malecón seawall links it to Vedado and Miramar. Viñales in Pinar del Río is tobacco country, with dramatic mogote karst formations and daily horseback tours. Trinidad, another UNESCO site, preserves one of the Americas' most complete Spanish colonial cores. Santiago de Cuba, the country's second city, is the heartland of son and Afro-Cuban culture and the gateway to the Sierra Maestra trails where the 1959 revolution was launched. The northern keys (Cayo Coco, Cayo Guillermo, Cayo Santa María) offer classic Caribbean beaches; Varadero remains the package-tourism capital. Hemingway pilgrims visit Finca Vigía and La Terraza in Cojímar. The Ballet Nacional de Cuba and the Festival Internacional del Nuevo Cine Latinoamericano (December) are world-class draws. Regional flights or Viazul buses cover distances beyond 4 hours' drive.",
  considerations: [
    "US Embargo and OFAC Rules: US citizens cannot travel to Cuba as tourists. Travel must fit one of 12 general license categories (Support for the Cuban People is the most common), US-bank financial transactions are prohibited, US-issued cards do not work in Cuba, and travellers must keep records for five years. Plan hotels, guides, and payment methods before departure.",
    "Rolling Blackouts (Apagones): Power cuts of 4-12 hours per day have been routine since 2021, with worse stretches (20+ hours) during fuel crises. They disrupt cooking, refrigeration, water pumping, internet, and remote work. A UPS, power bank, rechargeable fan, and LED lantern are baseline; longer-term residents invest in inverter batteries or small solar setups.",
    "Currency Chaos: Since the 2021 Tarea Ordenamiento, the CUP is the only legal tender, but MLC cards and informal USD cash circulate simultaneously. The official rate diverges sharply from the street rate (tracked by elToque). Bring small-denomination USD or EUR bills, avoid US intermediaries, and remember Cuban-issued cards do not work abroad.",
    "Shortages and the Libreta: Medicines, basic foods, spare parts, and hygiene products are chronically short. The libreta de abastecimiento still provides subsidised staples for Cubans, but foreigners shop in CUP stores, MLC shops, and farmers' markets (agros) with highly variable stock. Bring prescription medicines, contact lens solution, and personal essentials in quantity.",
    "Property Ownership Restrictions: Foreigners generally cannot own residential real estate. Narrow exceptions exist for permanent residents and for units in specific tourism-investment complexes (certain Gaviota developments). Beware of informal arrangements where a Cuban citizen holds title on your behalf; these lack legal protection and have led to disputes."
  ],
  mistakes: [
    "Relying on US-issued cards. Visa, Mastercard, and American Express cards issued by US banks do not work anywhere in Cuba. Bring sufficient USD or EUR cash, declare amounts over 5,000 USD at customs, and budget conservatively for the entire stay.",
    "Using the official exchange rate for planning. The gap between the official CUP rate and the informal street rate is wide and shifting. Check elToque, change money through your casa particular host or trusted contacts rather than banks or airport booths, and never accept street-corner exchanges from strangers.",
    "Treating Cuban bureaucracy as optional. DIIE registration, Carnet de Identidad, ETECSA setup, and MLC card creation each require in-person visits, multiple documents, and patience. Missing a registration window or overstaying a Tourist Card can trigger fines, exit-ban complications, or denial of future renewals.",
    "Discussing politics publicly or with strangers. Conversations about the government, the Castro legacy, the embargo, or the 11 July 2021 protests demand care. Friends and trusted acquaintances may speak openly; strangers, official settings, and digital platforms are different terrain. Discretion is a professional necessity.",
    "Assuming Cuban hospitality means things get done fast. The warmth is real, and friendships form quickly, but administrative, logistical, and commercial processes operate on their own clock. 'Mañana' can mean tomorrow, next week, or whenever-the-shortage-ends. Budget extra time for every formal task."
  ],
  emergency: [
    {
      number: '106',
      service: 'Police (Policía Nacional Revolucionaria)',
      description: 'National police emergency line, reachable from any phone including locked mobiles. Operators speak Spanish; English is not reliably available. For theft, assault, road accidents, and crimes in progress.'
    },
    {
      number: '105',
      service: 'Fire Brigade (Bomberos)',
      description: 'Cuerpo de Bomberos national emergency number for fires, rescue operations, and hazardous material incidents. Response times vary significantly outside major cities.'
    },
    {
      number: '104',
      service: 'Ambulance (Ambulancia / SIUM)',
      description: 'Sistema Integrado de Urgencias Médicas — the national emergency medical service. For foreigners, going directly to Hospital Internacional Cira García in Havana or the nearest Servimed-affiliated clinic is often faster than waiting for a public ambulance.'
    },
    {
      number: '116',
      service: 'Cubacel / ETECSA Customer Service',
      description: 'ETECSA customer support for mobile line issues, data plan activation, and Nauta email problems. Not an emergency line but essential for connectivity troubleshooting during your first weeks.'
    }
  ],
  sources: [
    {
      name: 'Dirección de Identificación, Inmigración y Extranjería (DIIE)',
      category: 'Immigration',
      description: 'The authority under the Ministerio del Interior (MININT) responsible for foreigner registration, residence permits, Tourist Card extensions, and the Carnet de Identidad de Extranjero.',
      link: 'https://www.minint.gob.cu/'
    },
    {
      name: 'Banco Central de Cuba (BCC)',
      category: 'Banking & Currency',
      description: 'The central bank, responsible for monetary policy, the official CUP exchange rate, and oversight of Banco Metropolitano, BPA, BANDEC, and the MLC card system.',
      link: 'https://www.bc.gob.cu/'
    },
    {
      name: 'ETECSA',
      category: 'Telecommunications',
      description: 'State telecommunications monopoly covering mobile (Cubacel), fixed line, internet, Nauta email, and public Wi-Fi hotspots. The only legal provider of domestic connectivity.',
      link: 'https://www.etecsa.cu/'
    },
    {
      name: 'Ministerio de Salud Pública (MINSAP)',
      category: 'Health',
      description: 'Runs the public healthcare system, the polyclinic network, and family doctor programmes. Oversees Servimed and the foreigner-facing Hospital Internacional Cira García.',
      link: 'https://salud.msp.gob.cu/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Cuba, consult the Ministerio de Relaciones Exteriores (MINREX) or a Cuban embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/cuba',
    mfaLink: 'https://www.minrex.gob.cu/en'
  },
  serviceDirectory: {
    title: "Service Directory - Cuba",
    description: "Examples of commonly used service providers people often interact with when relocating to Cuba. Because of the US embargo and Cuba's unique regulatory environment, many services operate through state entities or specialised international firms.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance with Residencia Temporal, Residencia Permanente, investor visas under Ley 118, and DIIE procedures.",
        providers: [
          { name: "Consultoría Jurídica Internacional (CJI)", link: "https://www.cji.co.cu/" },
          { name: "Bufete Internacional de La Habana", link: "https://www.bufeteinternacional.cu/" },
          { name: "Lex Cuba (specialist foreign-investment counsel)", link: "https://www.lexcuba.com/" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Casa particular networks, private rentals, and foreign-investment property advisors for long-stay housing across Havana and other cities.",
        providers: [
          { name: "Revolico (Cuba's main classifieds site)", link: "https://www.revolico.com/" },
          { name: "CubaCasas (casa particular directory)", link: "https://www.cubacasas.net/" },
          { name: "Casa Particular Cuba", link: "https://www.casaparticularcuba.org/" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Specialists in Cuban tax (ONAT), MIPYME compliance, joint venture structures, and cross-border reporting for foreigners.",
        providers: [
          { name: "Oficina Nacional de Administración Tributaria (ONAT)", link: "https://www.onat.gob.cu/" },
          { name: "Consultoría DISAIC", link: "https://www.disaic.cu/" },
          { name: "CECONSI (Centro de Consultoría e Ingeniería)", link: "https://www.ceconsi.cu/" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International relocation and shipping services handling the complex customs procedures for inbound shipments to Cuba.",
        providers: [
          { name: "Palco Relocation (TRD Caribe / Palco Group)", link: "https://www.palco.cu/" },
          { name: "AGS Movers Cuba", link: "https://www.agsmovers.com/" },
          { name: "Crown Relocations", link: "https://www.crownrelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Spanish language schools and cultural orientation programmes for foreigners adapting to Cuban life and Cuban Spanish.",
        providers: [
          { name: "Universidad de La Habana - Facultad de Español para No Hispanohablantes", link: "http://www.uh.cu/" },
          { name: "Instituto Superior de Arte (ISA) language exchanges", link: "http://www.isa.cult.cu/" },
          { name: "Don Quijote Havana", link: "https://www.donquijote.org/spanish-schools/cuba/havana/" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Foreigner-facing hospitals and clinics providing medical care in USD, along with the public MINSAP network for residents.",
        providers: [
          { name: "Hospital Internacional Cira García", link: "https://www.ciragarcia.cu/" },
          { name: "Servimed Cuba", link: "https://www.servimedcuba.com/" },
          { name: "Clínica Central Cira García", link: "https://www.ciragarcia.cu/" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "State labor agencies and foreign-investment intermediaries that manage formal employment relationships between foreign entities and Cuban workers.",
        providers: [
          { name: "ACOREC (Agencia de Contratación a Representaciones Comerciales)", link: "https://www.acorec.cu/" },
          { name: "Cámara de Comercio de la República de Cuba", link: "https://www.camaracuba.cu/" },
          { name: "Zona Especial de Desarrollo Mariel (ZEDM)", link: "https://www.zedmariel.com/" }
        ]
      }
    ]
  }
};
