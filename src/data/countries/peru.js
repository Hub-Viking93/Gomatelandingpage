export const peru = {
  id: 'peru',
  slug: 'peru',
  name: 'Peru',
  region: 'Americas',
  complexity: 'Medium',
  languages: ['Spanish', 'Quechua', 'Aymara'],
  shortDescription: 'The culinary capital of South America, home to the Andes and the Amazon.',
  heroImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377',
  flagAlt: 'Flag of Peru',
  atAGlance: "Peru is a country of staggering geographic and cultural extremes: a narrow desert coast hosting the sprawling capital of Lima, the towering Andes mountains with their ancient Inca heritage, and the vast Amazon rainforest covering over half the national territory. Lima, home to roughly a third of Peru's 34 million people, is a chaotic, traffic-congested metropolis that has reinvented itself as the gastronomic capital of the Americas, with restaurants like Central and Maido consistently ranked among the world's best. The city hugs the Pacific coast under a persistent grey mist (La Garua) from May through November, which surprises newcomers expecting tropical sunshine. Cusco, the former Inca capital at 3,400 meters altitude, is the gateway to Machu Picchu and the Sacred Valley. The cost of living is very affordable by Western standards, particularly outside Lima's upscale districts. Peruvian culture is warm, hierarchical, and deeply influenced by its Indigenous and Spanish roots. Political instability is a recurring feature (Peru has had multiple presidents in recent years), and protests that block roads and airports can disrupt travel without warning. Despite this, daily life for foreign residents in Lima's safe districts (Miraflores, Barranco, San Isidro) continues largely undisturbed. The food alone is worth the move: ceviche, lomo saltado, causa, anticuchos, and pisco sours form just the beginning of one of the world's great culinary traditions. For those seeking an affordable Latin American base with extraordinary food, natural beauty, and genuine cultural depth, Peru delivers.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 90 or 183 days (Tourist)',
    costOfLiving: 'Low',
    primaryLanguages: 'Spanish',
  },
  visas: [
    {
      name: 'Tourist Entry (No Visa Required for Most Nationalities)',
      targetAudience: 'Tourists, Short-term visitors',
      useCase: 'Citizens of most Western countries receive up to 183 days on arrival at the discretion of the immigration officer (some receive 90 days; ask politely for 183 if that is your plan). Cannot be extended in-country. No formal visa application required. Overstaying results in fines upon departure.',
      duration: '90-183 days (at officer discretion)',
      link: 'https://www.gob.pe/migraciones'
    },
    {
      name: 'Rentista Visa (Passive Income)',
      targetAudience: 'Retirees, Individuals with passive income',
      useCase: 'For foreign nationals with a verifiable permanent passive income of at least $1,000 USD/month (approximately; verify current threshold). Sources can include pensions, rental income, dividends, or interest. Grants residency without the right to work for a Peruvian employer. Foreign income under this visa is exempt from Peruvian income tax.',
      duration: '1 year, renewable indefinitely',
      link: 'https://www.migraciones.gob.pe/'
    },
    {
      name: 'Digital Nomad Visa (Visa para Trabajadores Remotos)',
      targetAudience: 'Remote workers, Freelancers',
      useCase: 'Introduced for foreign nationals working remotely for companies or clients outside Peru. Requires proof of remote employment or freelance contracts, minimum monthly income (verify current amount), health insurance, and a clean criminal record. Foreign-sourced income is not taxed in Peru under this visa.',
      duration: '1 year, renewable for 1 additional year',
      link: 'https://www.migraciones.gob.pe/'
    },
    {
      name: 'Work Visa (Visa de Trabajador)',
      targetAudience: 'Employed professionals',
      useCase: 'For foreign nationals with a job offer from a Peruvian employer. The employer applies to Migraciones and must demonstrate the role requires a foreign hire. Requires an employment contract approved by the Ministry of Labor, criminal background check, and degree attestation. Peruvian law limits foreign employees to 20% of a company\'s workforce.',
      duration: '1 year, renewable',
      link: 'https://www.migraciones.gob.pe/'
    },
    {
      name: 'Investor Visa (Visa de Inversionista)',
      targetAudience: 'Business investors, Entrepreneurs',
      useCase: 'For foreign nationals investing in or establishing a business in Peru. Requires a minimum investment (verify current threshold, historically around $30,000-50,000 USD), a registered business entity (SAC or SRL), and proof of capital injection. Grants the right to reside and manage the investment.',
      duration: '1 year, renewable',
      link: 'https://www.migraciones.gob.pe/'
    }
  ],
  requirements: [
    {
      title: 'Carne de Extranjeria (Foreign Resident ID)',
      explanation: 'A national identity card issued to foreign residents by Migraciones (Superintendencia Nacional de Migraciones). Applied for after your resident visa is approved. Requires biometric enrollment at a Migraciones office.',
      importance: 'The Carne de Extranjeria (CE) is your primary ID in Peru. It is required for opening bank accounts, signing rental contracts, buying property, obtaining a tax ID (RUC), accessing government services, and in some cases getting resident pricing for domestic flights and tourist attractions. Your CE number replaces your passport number for most domestic purposes.',
      link: 'https://www.gob.pe/carnet-de-extranjeria'
    },
    {
      title: 'RUC (Registro Unico de Contribuyentes)',
      explanation: 'Peru\'s tax identification number, issued by SUNAT (Superintendencia Nacional de Aduanas y de Administracion Tributaria). Required for any formal economic activity: employment, freelancing, business ownership, or issuing invoices (boletas or facturas).',
      importance: 'Even if you are on a Rentista visa with foreign income, you may need a RUC for certain transactions (property purchases, vehicle registration). If you work locally or run a business, the RUC is essential for tax compliance. Peru uses a progressive income tax system (8-30% on earned income for residents). SUNAT is increasingly digital, with most filings done through the Sol Online portal.',
      link: 'https://www.sunat.gob.pe/'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a Peruvian bank account requires your Carne de Extranjeria (or passport with valid visa), proof of address, and in some cases proof of income. Major banks include BCP (Banco de Credito del Peru), Interbank, BBVA Peru, and Scotiabank Peru.',
      importance: 'A local bank account is essential for rent payments, utility bills, and salary deposits. Peru operates in Soles (PEN) and US Dollars; most banks offer dual-currency accounts. Online banking and mobile apps (Yape by BCP, Plin by various banks) are widely used for person-to-person transfers and bill payments. International transfers work through banks and services like Wise.',
      link: 'https://www.sbs.gob.pe/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Peru's economy is driven by mining (copper, gold, zinc), agriculture, fishing, manufacturing, and a growing services sector. Lima dominates the professional job market, hosting the headquarters of major Peruvian corporations and the regional offices of multinationals. Mining companies based in Lima employ significant numbers of international professionals. The NGO and development sector has a notable presence. Spanish is essential for virtually all professional roles; Quechua is spoken in highland regions but not in the business world.",
    whereToLook: [
      "LinkedIn",
      "Computrabajo Peru (dominant local job portal)",
      "Bumeran Peru",
      "Direct applications to mining companies (Southern Peru, Antamina, Cerro Verde)",
      "NGO and international organization career pages"
    ],
    realityChecks: [
      "The minimum wage (Remuneracion Minima Vital, RMV) is PEN 1,025/month (approximately $275 USD). Many service and retail workers earn near this level.",
      "Foreign worker quotas (20% maximum of a company's workforce) and the requirement to demonstrate the need for a foreign hire make obtaining a work visa challenging for non-specialist roles.",
      "Professional networking in Lima is relationship-driven. Introductions, shared meals, and personal rapport matter significantly more than cold applications.",
      "Peru's informal economy employs an estimated 70%+ of the workforce. Many arrangements, even for professionals, operate with informal agreements alongside or instead of formal contracts."
    ]
  },
  salaryReality: {
    overview:
      "Salaries in Peru are modest by Western standards but provide a comfortable lifestyle given the low cost of living. A mid-level professional in Lima earns PEN 3,000-8,000/month ($800-2,150). Senior roles at multinationals or mining companies can reach PEN 15,000-40,000+/month. A couple can live comfortably in a good Lima district on $1,500-2,500/month including rent. The Peruvian tax system is progressive (8-30% on employment income for residents), with mandatory pension contributions (either ONP public system at 13% or AFP private system at approximately 12-13%).",
    realityChecks: [
      "Two mandatory bonus months (gratificaciones) are paid in July and December, effectively adding two months of salary to your annual compensation.",
      "CTS (Compensacion por Tiempo de Servicios) is a mandatory severance savings equivalent to roughly one month's salary per year, deposited semi-annually into a designated bank account.",
      "Healthcare coverage through EsSalud (public) is mandatory for employees (employer pays 9% of salary). The quality is basic; most professionals also carry private insurance.",
      "Lima's upscale districts (Miraflores, San Isidro, Barranco) are 2-3x more expensive than other Lima districts, creating a significant cost gap depending on where you live."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Mandatory pension contributions (12-13% AFP or 13% ONP), which significantly reduce take-home pay",
      "The cost difference between living in safe expat districts (Miraflores, Barranco) versus cheaper but less secure areas",
      "Private healthcare insurance premiums ($50-200/month depending on coverage), since EsSalud alone is insufficient for most expats",
      "Commuting costs and time; Lima traffic is severe, and living far from work can mean 1-2 hours each way"
    ]
  },
  housingSystem: {
    overview:
      "Lima's rental market is concentrated in districts. Miraflores is the premier expat neighborhood: walkable, safe, close to parks and the malecon (coastal cliffs), with abundant restaurants and services. Barranco is artsy and bohemian with a growing restaurant scene. San Isidro is the financial district with upscale apartments. Surco and La Molina offer larger, family-friendly housing at lower prices. Outside Lima, Cusco has a small expat rental market centered around San Blas and the historic center. Arequipa is gaining popularity for its pleasant climate and lower costs.",
    expectations:
      "Rents are quoted in US Dollars or Soles. A modern 2-bedroom apartment in Miraflores runs $600-1,200/month; in Barranco $500-900; in Surco $400-700. Deposits are typically 1-2 months. Many landlords require a Peruvian guarantor (fiador) or additional months of advance rent in lieu. Properties are found through platforms like Adondevivir.com, Urbania.pe, OLX Peru, and local Facebook groups. Furnished apartments are common in expat areas. Always inspect water pressure (a common issue in older buildings) and verify the building's earthquake construction standards."
  },
  healthcareReality:
    "Peru has a multi-tiered healthcare system. EsSalud is the public system for employed residents, funded by employer contributions. It covers basic and moderate care at hospitals like Hospital Rebagliati and Hospital Almenara in Lima, but wait times are long and facilities are stretched. Private healthcare is where most expats and middle-class Peruvians seek treatment. Clinica Anglo Americana, Clinica Ricardo Palma, Clinica Internacional, and Clinica San Pablo in Lima offer high-quality care with English-speaking doctors for most specialties. A private consultation costs $30-80. Comprehensive private health insurance through local providers (Rimac, Pacifico Seguros, Mapfre) costs $50-200/month depending on age and coverage. Pharmacies (InkaFarma, MiFarma) are abundant, and many medications are available without prescription at low prices. Dental care is affordable and of good quality. For highly specialized procedures, some patients travel to Santiago, Buenos Aires, or Miami.",
  digitalLife: {
    overview:
      "Peru's digital infrastructure is functional and improving, though unevenly distributed. Fiber internet from providers like Movistar, Claro, and Entel reaches most of Lima and major cities with speeds up to 200+ Mbps. 4G coverage is good in urban areas but drops in the highlands and Amazon. Mobile payments and digital banking have grown rapidly, particularly since the pandemic.",
    essentials: [
      "Yape (BCP's mobile payment app, the most widely used P2P payment tool in Peru)",
      "Plin (competing mobile payment platform supported by multiple banks)",
      "Rappi or PedidosYa (food delivery and grocery delivery apps)",
      "Google Maps and Moovit (for navigating Lima's complex bus and Metropolitano BRT system)"
    ],
    whatSurprisesNewcomers: [
      "Yape has become so ubiquitous that even street vendors, taxi drivers, and market stalls accept it. It is often easier than cash.",
      "Government services through gob.pe are increasingly digital, but many processes still require a physical visit to a government office with paper documents.",
      "Peru uses a different electrical standard (220V, 60Hz) with flat two-prong plugs (Type A/B). Bring adapters if coming from countries with different standards.",
      "WhatsApp is the default business communication tool; many shops, landlords, and service providers operate primarily through WhatsApp rather than email or phone."
    ]
  },
  culture: {
    text: "Peruvian culture is a rich fusion of Indigenous Andean traditions and Spanish colonial heritage, with additional influences from African, Chinese (Chifa cuisine), and Japanese (Nikkei cuisine) immigrant communities. Food is the greatest source of national pride, transcending class and regional boundaries; Peruvians discuss restaurants and recipes with the passion others reserve for sports. Society is warm but hierarchical, with formality in initial meetings that relaxes once trust is established. 'Hora Peruana' (Peruvian time) means social events start 30-60 minutes late as a matter of course; business meetings are more punctual but still flexible. Catholic traditions shape holidays and festivals, which are frequent, colorful, and loud. Family bonds are exceptionally strong; Sunday lunches are sacred, and family obligations take priority over professional commitments. One kiss on the cheek is the standard greeting between women, and between men and women; men greet each other with a handshake. The concept of 'criollismo' (a blend of resourcefulness, humor, and street smarts) is celebrated as a core Peruvian trait.",
    highlights: [
      "Food is the fastest way to connect with Peruvians. Express genuine interest in the cuisine, try everything offered, and learn to distinguish ceviche preparations (Limeno vs. Nikkei vs. Northern style). Complimenting the food is always welcome.",
      "Greet with one kiss on the right cheek (women and mixed-gender greetings) or a firm handshake (between men). Hugs are for closer relationships.",
      "Coca tea (mate de coca) is a legitimate, legal, and culturally significant remedy for altitude sickness in the highlands. It is NOT cocaine. Drink it freely in Cusco and Puno.",
      "Bargaining is expected at markets and with taxi drivers (use Uber/Cabify/inDrive for fixed pricing). Do not bargain at restaurants, shops with price tags, or supermarkets.",
      "Peruvians celebrate festivals with extraordinary enthusiasm. Inti Raymi (June 24, Cusco), Senor de los Milagros (October, Lima), and Fiestas Patrias (July 28-29, nationwide) are among the most important."
    ]
  },
  transportationMobility:
    "Lima's traffic is legendary for its intensity. The Metropolitano BRT (Bus Rapid Transit) system runs a useful north-south corridor through the city center. The Lima Metro Line 1 serves a limited east-south route, with Line 2 under construction. Beyond these, public transport consists of a confusing network of microbuses and combis (minivans) with no unified map or payment system. Uber, Cabify, inDrive, and Beat are widely used and affordable (most trips within Lima cost $2-6). Taxis are plentiful but use apps rather than hailing on the street for safety and fair pricing. For intercity travel, Cruz del Sur and Oltursa operate comfortable long-distance buses with reclining seats (choose cama or semi-cama class). Domestic flights connect Lima to Cusco (1.5 hours), Arequipa (1.5 hours), Iquitos (2 hours), and other cities via LATAM Peru and Sky Airline. The PeruRail and Inca Rail services connect Cusco to Machu Picchu.",
  internationalConnectivity:
    "Jorge Chavez International Airport (LIM) in Callao, adjacent to Lima, is Peru's main international gateway and one of South America's busiest airports. A major terminal expansion was completed in recent years. Direct flights connect to Miami (5.5 hours), Houston, New York, Los Angeles, Madrid (11 hours), Amsterdam, Bogota, Santiago, Buenos Aires, Sao Paulo, and Mexico City. LATAM Airlines Peru is the dominant carrier, with JetSMART, Sky Airline, Avianca, Copa Airlines, and Iberia also operating. There are no direct flights to Asia or most of Africa; connections through the US or Europe are standard. Cusco's Alejandro Velasco Astete Airport handles some international flights (La Paz, Bogota) but most international traffic routes through Lima.",
  travelExploration:
    "Peru offers some of the most diverse travel experiences in South America. Machu Picchu (reached via Cusco, then train or the 4-day Inca Trail hike) is the iconic bucket-list destination. The Sacred Valley (Ollantaytambo, Pisac, Moray) provides Inca ruins amidst stunning Andean scenery. The Colca Canyon near Arequipa is twice as deep as the Grand Canyon with Andean condor viewing. Lake Titicaca (Puno) straddles the Peru-Bolivia border at 3,812m with its floating Uros islands. The Amazon basin is accessible from Iquitos (fly-in only) or Puerto Maldonado, offering jungle lodges and wildlife encounters. The Nazca Lines, mysterious geoglyphs visible only from the air, are along the southern coast. Huacachina oasis near Ica offers sand dune buggying and sandboarding. The northern coast (Mancora, Huanchaco) provides surfing and beach culture far from the tourist trail. Peru's culinary scene alone merits weeks of exploration, from Lima's world-class restaurants to street food markets in every city.",
  considerations: [
    "Political Instability: Peru experiences periodic political crises, protests, and road blockades (bloqueos), particularly in the southern highlands (Cusco, Puno, Arequipa). These can disrupt travel plans without warning. Monitor news before intercity travel and have flexible booking arrangements.",
    "Safety in Lima: Lima has safe districts (Miraflores, Barranco, San Isidro) and genuinely dangerous ones. Do not hail random taxis from the street at night; use Uber, Cabify, or inDrive. Keep valuables out of sight. Phone snatching from motorbikes (mototaxis) occurs in some areas. Stay aware of your surroundings.",
    "Altitude Sickness: Cusco sits at 3,400m, Lake Titicaca at 3,812m, and many Andean passes exceed 4,000m. Altitude sickness (soroche) is real and can be severe. Spend at least 1-2 days acclimatizing before physical activity. Coca tea, staying hydrated, and ascending gradually help significantly.",
    "Water Quality: Tap water in Peru is not reliably potable, even in Lima. Drink bottled or filtered water. Restaurants in tourist areas use purified water and safe ice. Be cautious with uncooked vegetables and salads from street vendors.",
    "Noise Pollution: Peruvian cities are loud. Car horns are used constantly and with enthusiasm. Street vendors, music, and general urban noise are the baseline. If noise sensitivity is an issue, factor this into housing choices (higher floors, interior-facing apartments, quiet streets)."
  ],
  mistakes: [
    "Mispronouncing Machu Picchu. It is 'Mah-choo Peek-choo' (not 'Pee-choo'). The mispronunciation has an unfortunate meaning in Quechua that Peruvians find hilarious.",
    "Assuming Lima is always hot. Lima sits on the coast but is covered by a grey marine fog (La Garua) from roughly May through November, with temperatures dropping to 14-17C. Pack layers, not just shorts.",
    "Taking photographs of indigenous women in traditional dress without asking permission. This is considered rude and exploitative. Many will expect a small tip (PEN 1-2) if they agree to a photo.",
    "Flushing toilet paper. Most Peruvian plumbing cannot handle paper. Use the wastebasket provided. This applies in homes, restaurants, and all but the most modern hotels.",
    "Underestimating Lima as 'just the airport city.' Lima has world-class museums (MALI, Museo Larco), extraordinary restaurants, vibrant neighborhoods (Barranco, Miraflores), and a surfing scene. Many travelers regret rushing through on their way to Cusco."
  ],
  emergency: [
    {
      number: '105',
      service: 'Police (Policia Nacional del Peru)',
      description: 'General police emergency line. Operators speak Spanish; English assistance is limited.'
    },
    {
      number: '116',
      service: 'Fire Department (Bomberos Voluntarios del Peru)',
      description: 'Volunteer fire brigade that also provides basic emergency medical transport.'
    },
    {
      number: '106',
      service: 'SAMU (Sistema de Atencion Movil de Urgencia)',
      description: 'National emergency medical service providing ambulance dispatch. More reliable than calling 116 for medical emergencies.'
    }
  ],
  sources: [
    {
      name: 'Migraciones (Superintendencia Nacional de Migraciones)',
      category: 'Immigration & Residency',
      description: 'Official immigration authority for visa applications, Carne de Extranjeria, and entry requirements.',
      link: 'https://www.gob.pe/migraciones'
    },
    {
      name: 'SUNAT (National Tax Authority)',
      category: 'Taxation',
      description: 'Handles RUC registration, tax filing, customs, and business compliance.',
      link: 'https://www.sunat.gob.pe/'
    },
    {
      name: 'Peru Travel (PROMperu)',
      category: 'Tourism & Travel',
      description: 'Official tourism promotion body with destination guides and visitor resources.',
      link: 'https://www.peru.travel/'
    },
    {
      name: 'Gob.pe (Digital Government Platform)',
      category: 'Government Services',
      description: 'Centralized portal for all Peruvian government services, procedures, and information.',
      link: 'https://www.gob.pe/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Peru, consult the Peruvian Ministry of Foreign Affairs or a Peruvian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/peru',
    mfaLink: 'https://www.gob.pe/rree'
  },
  serviceDirectory: {
    title: "Service Directory - Peru",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Peru.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal assistance for visa applications, residency permits, and immigration compliance in Peru.",
        providers: [
          { name: "Estudio Echecopar (Baker McKenzie Peru)", link: "https://www.bakermckenzie.com" },
          { name: "CMS Grau", link: "https://cms.law" },
          { name: "Miranda & Amado", link: "https://www.miranda.com.pe" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Professionals handling property rentals and sales in Lima and other major cities.",
        providers: [
          { name: "RE/MAX Peru", link: "https://www.remax.com.pe" },
          { name: "Century 21 Peru", link: "https://www.century21peru.com" },
          { name: "Urbania.pe", link: "https://www.urbania.pe" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Peruvian tax law, RUC compliance, and cross-border income planning.",
        providers: [
          { name: "PwC Peru", link: "https://www.pwc.com/pe" },
          { name: "EY Peru", link: "https://www.ey.com/es_pe" },
          { name: "KPMG Peru", link: "https://kpmg.com/pe" }
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
        description: "Spanish language schools and immersion programs for newcomers in Peru.",
        providers: [
          { name: "PUCP Language Center", link: "https://www.pucp.edu.pe" },
          { name: "ICPNA (Instituto Cultural Peruano Norteamericano)", link: "https://www.icpna.edu.pe" },
          { name: "Berlitz Peru", link: "https://www.berlitz.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major hospitals and clinics commonly used by expats in Peru.",
        providers: [
          { name: "Clinica Anglo Americana", link: "https://www.angloamericana.com.pe" },
          { name: "Clinica Ricardo Palma", link: "https://www.crp.com.pe" },
          { name: "Clinica Internacional", link: "https://www.clinicainternacional.com.pe" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms connecting international talent with Peruvian employers.",
        providers: [
          { name: "Michael Page Peru", link: "https://www.michaelpage.com.pe" },
          { name: "Computrabajo Peru", link: "https://www.computrabajo.com.pe" },
          { name: "Manpower Peru", link: "https://www.manpower.com.pe" }
        ]
      }
    ]
  }
};
