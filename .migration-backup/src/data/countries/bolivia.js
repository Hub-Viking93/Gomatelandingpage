export const bolivia = {
  id: 'bolivia',
  slug: 'bolivia',
  name: 'Bolivia',
  region: 'Americas',
  complexity: 'Medium',
  languages: ['Spanish', 'Quechua', 'Aymara', 'Guarani'],
  shortDescription: 'High-altitude, indigenous-majority Andean nation with two capitals, surreal landscapes, and very low living costs.',
  heroImage: 'https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d',
  flagAlt: 'Flag of Bolivia',
  atAGlance: "Bolivia is a landlocked Andean nation of roughly 12 million where indigenous identity is the demographic and political majority. It has two capitals by constitutional design: La Paz is the seat of government and de facto center of political and economic life, while Sucre remains the constitutional and judicial capital. La Paz sprawls into a canyon at around 3,650 meters, spilling upward into El Alto on the altiplano at roughly 4,150 meters. Altitude is a daily physical reality: 'soroche' (altitude sickness) can incapacitate unacclimatized arrivals for days, and even long-term residents avoid heavy exertion and alcohol for the first weeks. Indigenous heritage is overtly visible — Aymara and Quechua are official languages alongside Spanish, 'cholitas' in bowler hats and pollera skirts are normal street life, and coca leaf (chewed or as mate de coca) is legal, culturally central, and entirely distinct from cocaine. Recent politics have been defined by Evo Morales and the MAS party, which held the presidency from 2006 to 2019 and returned under Luis Arce in 2020; the country remains polarized, and internal MAS divisions drive protests and road blockades (bloqueos) that can paralyze cities for days. Cost of living is among the lowest in the Americas, but since late 2023 a severe US dollar shortage has gripped the country: the central bank struggles to supply dollars, ATM USD withdrawals are often unavailable, parallel exchange rates have emerged above the official BOB 6.96 peg, and fuel shortages are intermittent. Bureaucracy is heavy and migration paperwork requires repeat visits to SEGIP and Migracion. The reward for patience is surreal beauty, affordable living, and rare cultural depth.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 90 days (Tourist, most nationalities)',
    costOfLiving: 'Very Low',
    primaryLanguages: 'Spanish, Quechua, Aymara',
  },
  visas: [
    {
      name: 'Temporary Residency (Permanencia Temporal)',
      targetAudience: 'Long-term residents, workers, retirees, family members',
      useCase: 'Granted for one, two, or three years after entering on a Specific Purpose Visa and completing the conversion process at Migracion. Requires the DIMEX foreign resident card, INTERPOL certificate issued in Bolivia, apostilled home-country criminal record, proof of income or employment, and registration of address. After three years of continuous temporary residency, holders may apply for permanent residency.',
      duration: '1-3 years, renewable',
      link: 'https://www.migracion.gob.bo/'
    },
    {
      name: 'MERCOSUR Residency',
      targetAudience: 'Citizens of MERCOSUR and associate states',
      useCase: 'Under the MERCOSUR Residency Agreement, citizens of Argentina, Brazil, Uruguay, Paraguay, Chile, Colombia, Ecuador, and Peru can apply for a simplified two-year residency with reduced documentation (passport, clean criminal record, proof of address). Converts to permanent residency after the initial period. This is the easiest path to Bolivian residency for regional nationals.',
      duration: '2 years, then permanent',
      link: 'https://www.migracion.gob.bo/'
    }
  ],
  requirements: [
    {
      title: 'DIMEX (Documento de Identidad para Migrantes Extranjeros)',
      explanation: 'The foreign resident identity card issued by SEGIP to anyone with temporary or permanent residency. Issued only after Migracion approves the underlying residency application. Biometric enrollment (fingerprints, photo, signature) is done in person at a SEGIP office.',
      importance: 'The DIMEX is the single most important document for any foreign resident. Required to open a bank account, obtain a NIT tax ID, sign a long-term lease, register a vehicle, and access resident pricing on flights and parks. Until you have it, you are restricted to cash and short-term arrangements. Expect multiple SEGIP visits and rejections for small formatting issues; a local gestor saves weeks.',
      link: 'https://www.segip.gob.bo/'
    },
    {
      title: 'Migracion Registration and Residency Conversion',
      explanation: 'After entering on a Specific Purpose Visa, you must convert it into Permanencia Temporal at Direccion General de Migracion within the validity window (typically 30 days of arrival). Requires an INTERPOL certificate issued locally in La Paz, a notarized lease, apostilled home-country criminal background check, birth certificate, and sponsorship documents.',
      importance: 'Missing the conversion window means falling out of status, with fines and the need to exit and restart. La Paz, Santa Cruz, and Cochabamba handle the bulk of foreigner casework. Communications are in Spanish, queues are long, and document acceptance varies by officer. Budget two to four months from landing to having the Permanencia Temporal stamp and DIMEX in hand.',
      link: 'https://www.migracion.gob.bo/'
    },
    {
      title: 'NIT (Numero de Identificacion Tributaria)',
      explanation: 'The Bolivian tax identification number, issued by Servicio de Impuestos Nacionales. Required for any formal income-generating activity, including issuing facturas (invoices), running a registered business, or renting out property. Expats who freelance, invoice Bolivian clients, or own a business must obtain one.',
      importance: 'Bolivian-source income is taxed under the RC-IVA regime for individuals; businesses fall under Regimen General or simplified regimes. Standard VAT is 13%, and the system is invoice-driven: without facturas tied to your NIT, clients cannot deduct your services. Registration is done at Impuestos Nacionales offices with your DIMEX, proof of address, and a business activity description.',
      link: 'https://www.impuestos.gob.bo/'
    },
    {
      title: 'Bank Account (Cuenta Bancaria)',
      explanation: 'Opening a personal account requires a DIMEX (tourists generally cannot open full accounts), proof of address, sometimes a reference from another account holder, and an initial deposit. Major banks include Banco Mercantil Santa Cruz (BMSC), Banco Nacional de Bolivia (BNB), and Banco BISA.',
      importance: 'Bolivia operates in Bolivianos (BOB) pegged at roughly 6.96 to the USD, and most banks offer both BOB and USD accounts. The dollar shortage since late 2023 has made USD withdrawals unreliable: cash-out in dollars is often capped or denied, and international card transactions increasingly fail. Tigo Money and bank apps handle domestic BOB payments well. Wise works for receiving funds but converting to cash dollars in-country is no longer guaranteed.',
      link: 'https://www.asfi.gob.bo/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Bolivia's formal job market is narrow. The economy is dominated by mining (silver, zinc, tin, increasingly lithium), natural gas, agriculture, and a large informal services sector. Formal foreign hiring concentrates in NGOs, UN agencies, development cooperation, mining multinationals, international schools, and a small remote-work community. Spanish is essential for almost every formal role. Most expats earn in foreign currency from abroad rather than competing locally.",
    whereToLook: [
      "LinkedIn (smaller local presence than Peru or Chile, but used by multinationals and NGOs)",
      "Trabajando.com Bolivia and Computrabajo Bolivia (dominant local job boards)",
      "ReliefWeb and UNJobs (for NGO and UN roles based in La Paz, Santa Cruz, and field sites)",
      "Bolsa de Trabajo of international schools (American Cooperative School, Saint Andrew's, Calvert, German School) for teaching roles",
      "Direct applications to mining and energy companies headquartered in La Paz and Santa Cruz"
    ],
    realityChecks: [
      "Bolivia's national minimum wage (Salario Minimo Nacional) is set annually by decree; as of 2024 it sits at BOB 2,500/month (roughly USD 360 at the official rate), and most retail and junior administrative roles cluster near this level.",
      "Foreign workers require a work visa tied to a registered employer, and Bolivian labor law (Ley General del Trabajo) gives strong protections that make employers cautious about foreign hires.",
      "The informal economy employs an estimated 70-80% of the workforce. Many professional arrangements run on verbal agreements, monthly invoicing, or foreign bank transfers rather than formal payroll.",
      "Networking is relationship- and family-driven. Introductions and personal recommendations move far faster than cold applications, particularly in Santa Cruz business circles and La Paz NGO networks."
    ]
  },
  salaryReality: {
    overview:
      "Salaries are low in absolute terms but stretch given the cost structure. A mid-level professional in La Paz or Santa Cruz earns roughly BOB 6,000-15,000/month (USD 860-2,150 at the official rate); senior roles at multinationals or international organizations can exceed BOB 25,000-50,000/month. A single person can live comfortably on USD 900-1,500/month including rent; a couple on USD 1,500-2,500. Expat NGO and international school salaries are typically denominated in USD and paid into foreign accounts.",
    realityChecks: [
      "Bolivian employees receive an annual aguinaldo (13th-month bonus) paid by December 20, and in years where GDP growth exceeds 4.5% a second aguinaldo is mandated, effectively adding one to two months of salary.",
      "Mandatory benefits include health insurance via the Caja Nacional de Salud (employer pays 10% of salary) and pension contributions split between employee and employer, totaling around 12.71% on the employee side including AFP commissions.",
      "Severance (indemnizacion) is one month's salary per year of service, and the bar to dismiss for cause is high. This shapes how employers structure foreign contracts.",
      "The USD shortage since late 2023 has created a parallel exchange rate (often BOB 9-12 per USD informally vs. the official 6.96). USD-paid expats benefit; those paid in BOB have seen import purchasing power erode."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The gap between official and parallel exchange rates, which makes most online BOB-to-USD conversions misleading since late 2023.",
      "Pension and health contributions totaling roughly 22-23% between employer and employee, which reduce formal take-home pay compared to informal arrangements.",
      "The frequent failure of international card transactions and ATM dollar withdrawals; budget extra for transfer fees, cash buffers, and backup cards from home banks.",
      "Altitude-related costs in La Paz: coca leaves, altitude medication (Sorojchi Pills, Acetazolamide), portable oxygen, and occasional private doctor consultations during the first months."
    ]
  },
  housingSystem: {
    overview:
      "Housing is affordable by regional standards and arranged through local portals, neighborhood signs (se alquila), and referrals. In La Paz, Sopocachi is the bohemian-intellectual core; Calacoto and San Miguel (Zona Sur) are the upscale lower-altitude districts preferred by diplomats and international school families. Santa Cruz is lower, hotter, and car-dependent, with Equipetrol the main expat area. Cochabamba ('City of Eternal Spring') attracts language students and retirees, with Cala Cala the popular neighborhood. Sucre is smaller and quieter, popular with Spanish learners.",
    expectations:
      "Rents are quoted in USD in upscale areas and BOB elsewhere. A furnished one- to two-bedroom in a good La Paz or Cochabamba neighborhood runs USD 250-600/month; Santa Cruz Equipetrol USD 400-900; budget options drop to USD 150-250. Deposits are typically one to two months. Formal leases require your DIMEX and a Bolivian guarantor or prepayment; shorter-term arrangements are common on Airbnb, Ultracasas.com.bo, and Facebook groups. Verify water pressure (a serious issue in higher La Paz neighborhoods), gas, internet, and the specific altitude of the apartment within La Paz — 300 meters of elevation difference materially affects sleep and breathing."
  },
  healthcareReality:
    "Bolivia's healthcare system is three-tiered and heavily weighted toward private provision for anyone who can afford it. The public system (Caja Nacional de Salud and SUS) provides basic care but is chronically under-resourced and overwhelmed. Virtually all expats and middle-class Bolivians use private clinics. In La Paz, Clinica del Sur and CEMES are the most commonly cited expat-grade facilities, with English-speaking specialists for most fields. Santa Cruz has stronger overall private infrastructure, with Clinica Foianini and Clinica Incor (cardiology) widely used. A private GP consultation costs BOB 150-350 (USD 20-50), specialists BOB 300-600 (USD 45-90), and routine labs are similarly affordable. For complex surgery, cancer treatment, or advanced cardiac care, many residents travel to Santiago, Buenos Aires, Lima, or Sao Paulo. La Paz has genuine expertise in altitude medicine (Instituto Boliviano de Biologia de Altura), with doctors who specialize in soroche and polycythemia that foreign physicians may under-diagnose. Comprehensive private insurance through La Vitalicia, Alianza Seguros, or BUPA runs roughly USD 70-250/month.",
  digitalLife: {
    overview:
      "Digital infrastructure is functional in urban areas and patchy elsewhere. Fiber in La Paz, Santa Cruz, and Cochabamba reaches 100-300 Mbps through Tigo, Entel, and Cotas; rural areas drop to 4G or satellite. Mobile coverage is solid in cities but unreliable on long highway stretches. Digital banking has improved but government services remain heavily paper-based, with most procedures still requiring physical office visits and notarized documents.",
    essentials: [
      "Tigo Money (the dominant mobile wallet for everyday BOB payments, used by small businesses, drivers, and individuals for QR-code transfers)",
      "Banco Mercantil Santa Cruz (BMSC) and Banco Nacional de Bolivia (BNB) mobile apps (the main retail banks with the most developed digital interfaces)",
      "Tigo, Entel, or Viva prepaid or postpaid mobile plans (local SIM is straightforward with a passport; long-term plans require a DIMEX)",
      "PedidosYa and, in some cities, Yango or InDrive for food delivery and ride-hailing",
      "WhatsApp for essentially all personal, commercial, and landlord communication"
    ],
    whatSurprisesNewcomers: [
      "The USD shortage since late 2023 has made international card purchases and ATM USD withdrawals unreliable; Visa and Mastercard from local accounts can fail without notice, and many expats keep foreign cards and accounts as a lifeline.",
      "Government services still require extensive paperwork, notarized copies, and in-person visits despite official portals. Carry your passport and DIMEX everywhere and expect to photocopy them constantly.",
      "Bolivia uses 220V at 50Hz with Type A and Type C plugs (sometimes both in the same apartment). Surge protection is worth buying for electronics given voltage fluctuations.",
      "Cash is still king outside upscale areas. Carry small BOB denominations because taxis, markets, and small shops rarely break a 200 BOB note. Counterfeit 100s and 200s circulate; learn the watermark."
    ]
  },
  culture: {
    text: "Bolivian culture is indigenous-led in a way unique to the region. More than 40% of the population self-identifies as indigenous, primarily Aymara in the altiplano and Quechua in the valleys. Traditional 'cholita' dress — bowler hat, embroidered shawl, pollera skirt — is everyday attire for many women in La Paz and El Alto rather than a costume. Pachamama (Mother Earth) is the object of genuine devotion, with regular offerings (challas) of coca leaves, alcohol, and sweets, particularly on the first Friday of each month and on August 1. Coca leaf is legal, cheap, and central in the highlands: chewed with a catalyst (lejia), brewed as mate de coca, or carried as a social offering. It is not cocaine. Society is warm but more reserved than Argentine or Brazilian neighbors; greetings are handshakes between men, a single cheek kiss otherwise, and small talk precedes business. Regional identity is strong: 'kollas' (highland, indigenous-leaning) and 'cambas' (lowland, Santa Cruz-identified) view each other with affection and rivalry. Football is close to a religion — Bolivar and The Strongest in La Paz, Oriente Petrolero and Blooming in Santa Cruz.",
    highlights: [
      "Accept coca tea or leaves without hesitation when offered in the highlands; refusing is mildly rude, and coca is legal, non-narcotic in this form, and helps with altitude.",
      "Dress conservatively in La Paz, El Alto, and rural areas. Shorts and exposed shoulders are unusual outside the Zona Sur and tourist districts.",
      "Respect Pachamama rituals. At construction sites, new homes, and business openings, you may see a challa — alcohol poured on the ground, burned offerings, coca leaves. Do not step on or joke about these.",
      "Understand the kolla/camba distinction before making regional generalizations. Lumping a Santa Cruz native into altiplano culture can bristle.",
      "Expect political conversation to be frequent and divided. Opinions on Evo Morales, the MAS, and 2019 remain deeply held. Listen more than you argue."
    ]
  },
  transportationMobility:
    "La Paz operates the world's longest urban aerial cable car network, Mi Teleferico, with around ten color-coded lines connecting central La Paz, the Zona Sur, and El Alto. It is fast, clean, inexpensive (BOB 3-5 per ride), and the most reliable daily transport, particularly between elevations. Alongside it, micros (small buses), minibuses, and trufis (shared line taxis) cover routes with no unified map. Radio taxis and app-based rides (Yango, InDrive) are recommended for foreigners, especially at night. Santa Cruz is car-dependent and flat, structured by ring roads (anillos); public transport is limited to micros. Cochabamba and Sucre are walkable in their central cores. Inter-city travel is dominated by long-distance buses (Trans Copacabana, El Dorado, Flota Copacabana) running overnight cama services between La Paz, Santa Cruz, Cochabamba, Oruro, Sucre, and Potosi. Passenger rail is limited; the Oruro-Uyuni-Villazon line is nostalgic more than practical. Road conditions vary dramatically by season, and mudslides or protests frequently close highways without notice.",
  internationalConnectivity:
    "Bolivia's two main international airports are El Alto International (LPB) serving La Paz, at 4,061 meters the world's highest international commercial airport, and Viru Viru (VVI) in Santa Cruz, which handles the largest share of international traffic thanks to better long-haul aircraft performance at lower altitude. Boliviana de Aviacion (BoA) is the state carrier with regional routes plus Miami and Madrid. LATAM, Avianca, Gol, and Copa also operate into Santa Cruz. There are no direct flights to Asia, Africa, or North America beyond Miami; connections through Lima, Bogota, Panama City, or Sao Paulo are standard. Flight times: Santa Cruz to Miami roughly 6 hours, La Paz to Lima about 2 hours, Santa Cruz to Madrid around 11 hours. Thin air at El Alto limits aircraft weight, which is why long-haul service concentrates in Santa Cruz.",
  travelExploration:
    "Bolivia contains some of South America's most extraordinary landscapes. Salar de Uyuni, the world's largest salt flat (over 10,000 square kilometers), is the headline destination, typically toured as a three-day 4x4 trip continuing into the colored lagoons and the Eduardo Avaroa reserve near the Chilean border. Lake Titicaca, shared with Peru, hosts Isla del Sol and Isla de la Luna, mythological origins of the Inca, accessed from Copacabana. Tiwanaku, an hour from La Paz, holds pre-Inca ruins predating Machu Picchu by centuries. Potosi, a UNESCO city once the richest on Earth from Cerro Rico silver, offers colonial architecture and harrowing cooperative mine tours. Sucre's white colonial core is the most picturesque city in Bolivia and the main destination for Spanish immersion. Madidi National Park, one of the world's most biodiverse protected areas, is accessed from Rurrenabaque for Amazon lodge experiences. The Yungas Road ('Death Road') from La Paz to Coroico is now a mountain biking attraction, descending from 4,650m to 1,200m in a day.",
  considerations: [
    "Altitude: La Paz at 3,650m and El Alto at 4,150m are among the highest major urban areas on Earth. Soroche affects almost all newcomers. Arrive rested, hydrate aggressively, avoid alcohol and heavy meals for 48-72 hours, and consider Acetazolamide or Sorojchi Pills on medical advice. People with heart conditions, severe anemia, or pulmonary issues should consult a doctor before committing to La Paz; Santa Cruz or Cochabamba are much easier.",
    "Political Instability and Bloqueos: Bolivia experiences frequent strikes, marches, and road blockades that can paralyze highways, airports, and entire cities for days. Drivers range from union disputes to internal MAS rivalries. Monitor news and local WhatsApp groups before intercity travel, and keep a week of food and cash reserves during tense periods.",
    "US Dollar Shortage (since late 2023): The Central Bank has struggled to meet demand for dollars, leading to a parallel rate materially above the official BOB 6.96 peg, intermittent USD withdrawal limits, failed international card transactions, rising import prices, and occasional fuel shortages. Maintain foreign accounts and cards, bring physical USD in small denominations, and do not rely on local accounts for large international transactions.",
    "US-Bolivia Diplomatic Relations: The US and Bolivia have not exchanged ambassadors since 2008, when Morales expelled the US ambassador. US consular services in La Paz operate through a Charge d'Affaires; citizens have full consular access but should expect certain channels to be less responsive than in neighboring countries.",
    "Limited Consumer Goods and Imports: Bolivia is land-locked, and imports are expensive and unreliable due to customs and the dollar shortage. Specialty foods, electronics, cosmetics, and replacement parts are limited or absent. Many expats bring electronics, prescription medication, and outdoor gear from abroad, or order through Aymara network traders running informal routes from Chile and Peru.",
    "Safety: Bolivia is generally safer than Brazil, Peru, or Colombia for violent crime, but petty theft, pickpocketing, 'fake police' scams, and express kidnappings from unlicensed taxis occur. Use radio or app taxis, avoid walking alone at night in unfamiliar areas of La Paz and Santa Cruz, and never hand your passport or wallet to someone claiming to be a plainclothes officer."
  ],
  mistakes: [
    "Flying into La Paz and immediately sightseeing, drinking, or exercising. Give yourself 48-72 hours of near-complete rest before doing anything strenuous; people routinely end up in hospital for ignoring this.",
    "Confusing coca leaf with cocaine. Coca is legal, sold openly, chewed daily by millions, and has no narcotic effect in leaf form. Disapproval when offered coca tea reads as ignorant at best.",
    "Assuming the official BOB 6.96 rate reflects reality since late 2023. Always ask about parallel rates, plan for failed cards, and never exchange large sums at the official rate without checking the informal market.",
    "Scheduling intercity travel tightly. A bloqueo, mudslide, or fuel shortage can strand you for days. Build slack into itineraries and keep a plan B.",
    "Underestimating the paperwork burden. DIMEX, NIT, residency conversion, and even a rental contract each involve notarized copies, apostilled documents, and multiple visits. A local gestor or immigration lawyer (USD 300-800 for a full residency package) usually saves weeks.",
    "Expecting Santa Cruz and La Paz to feel like the same country. Climate, culture, politics, food, and accent are markedly different. Visit both before committing long-term."
  ],
  emergency: [
    {
      number: '110',
      service: 'Police (Policia Boliviana)',
      description: 'National police emergency line. Operators speak Spanish; English assistance is minimal. For tourist-specific issues in La Paz, the Policia Turistica operates a dedicated unit near Plaza del Estudiante.'
    },
    {
      number: '119',
      service: 'Fire Department (Bomberos)',
      description: 'National fire service emergency line. Also responds to some rescue situations and hazmat incidents.'
    },
    {
      number: '118',
      service: 'Medical Emergency / Ambulance (SAR-FAB / Cruz Roja)',
      description: 'National ambulance and medical emergency dispatch. Response times vary widely by city and neighborhood; in serious cases, going directly to a private clinic such as Clinica del Sur (La Paz) or Clinica Foianini (Santa Cruz) is often faster than waiting for public ambulance dispatch.'
    }
  ],
  sources: [
    {
      name: 'Direccion General de Migracion (Migracion Bolivia)',
      category: 'Immigration & Residency',
      description: 'Official immigration authority for visa applications, residency conversion, and foreigner registration.',
      link: 'https://www.migracion.gob.bo/'
    },
    {
      name: 'SEGIP (Servicio General de Identificacion Personal)',
      category: 'Identity Documents',
      description: 'Issues the DIMEX foreign resident card and handles biometric enrollment for all residents.',
      link: 'https://www.segip.gob.bo/'
    },
    {
      name: 'Servicio de Impuestos Nacionales (Impuestos Nacionales)',
      category: 'Taxation',
      description: 'National tax authority; handles NIT registration, VAT (IVA), and income tax compliance for individuals and businesses.',
      link: 'https://www.impuestos.gob.bo/'
    },
    {
      name: 'Ministerio de Relaciones Exteriores (Cancilleria)',
      category: 'Foreign Affairs',
      description: 'Handles consular services, apostille and legalization of foreign documents, and diplomatic matters.',
      link: 'https://www.cancilleria.gob.bo/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Bolivia, consult the Bolivian Ministry of Foreign Affairs (Cancilleria) or a Bolivian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/bolivia',
    mfaLink: 'https://www.cancilleria.gob.bo/'
  },
  serviceDirectory: {
    title: "Service Directory - Bolivia",
    description: "Examples of commonly used service providers people interact with when relocating to Bolivia.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance and gestores for visa applications, residency conversion, DIMEX, and foreigner compliance.",
        providers: [
          { name: "Pro-Abogados", link: "https://www.proabogados.com.bo" },
          { name: "Ferrere Abogados Bolivia", link: "https://www.ferrere.com" },
          { name: "Guevara & Gutierrez Servicios Legales", link: "https://www.gg-lex.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Property rental and sales platforms and agencies in La Paz, Santa Cruz, and Cochabamba.",
        providers: [
          { name: "Ultracasas", link: "https://www.ultracasas.com" },
          { name: "InfoCasas Bolivia", link: "https://www.infocasas.com.bo" },
          { name: "RE/MAX Bolivia", link: "https://www.remax.com.bo" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Bolivian tax law, NIT compliance, invoicing, and cross-border income planning.",
        providers: [
          { name: "EY Bolivia", link: "https://www.ey.com/es_bo" },
          { name: "PwC Bolivia", link: "https://www.pwc.com/bo" },
          { name: "KPMG Bolivia", link: "https://kpmg.com/bo" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and local moving, shipping, and customs clearance for relocations to Bolivia.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "AGS Movers Bolivia", link: "https://www.agsmovers.com" }
        ]
      },
      {
        name: "Language Schools",
        description: "Spanish and Quechua language programs, with Sucre a regional hub for Spanish immersion.",
        providers: [
          { name: "Instituto Cultural Boliviano Aleman (Goethe-ICBA)", link: "https://www.icba.com.bo" },
          { name: "Me Gusta Spanish School (Sucre)", link: "https://www.megustasucre.com" },
          { name: "Centro Boliviano Americano (CBA)", link: "https://www.cba.com.bo" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private hospitals and clinics commonly used by the expat community in La Paz, Santa Cruz, and Cochabamba.",
        providers: [
          { name: "Clinica del Sur (La Paz)", link: "https://www.clinicadelsur.com.bo" },
          { name: "Clinica Foianini (Santa Cruz)", link: "https://www.foianini.com" },
          { name: "Clinica Los Olivos (Cochabamba)", link: "https://www.clinicalosolivos.com.bo" }
        ]
      }
    ]
  }
};
