export const chile = {
  id: 'chile',
  slug: 'chile',
  name: 'Chile',
  region: 'Americas',
  complexity: 'Medium',
  languages: ['Spanish'],
  shortDescription: 'Modern, stable, and efficient living with a formal social structure.',
  heroImage: 'https://images.unsplash.com/photo-1517956918805-bbacc31d5f81?q=80&w=2070&auto=format&fit=crop',
  flagAlt: 'Flag of Chile',
  atAGlance: "Chile is the most stable, efficient, and institutionally developed country in Latin America, and it knows it. Relocating here means entering a society that functions more like Southern Europe than the stereotypical image of South America: infrastructure works, contracts are enforced, corruption is relatively low, and the economy is deeply integrated into global markets. Santiago, the capital, is a modern metropolis of 7 million people nestled in a valley between the Andes and the coastal range, with a functioning metro system, world-class restaurants in neighborhoods like Providencia, Las Condes, and Vitacura, and a skyline that grows taller every year. But Chile is also expensive by regional standards—groceries, electronics, and housing in desirable neighborhoods rival Southern European prices. The social structure is rigid and class-conscious: surnames, university attended, and commune of residence signal social position in ways that are immediately legible to Chileans. Daily life revolves around the RUT (Rol Unico Tributario), your national tax ID number, which is required for everything from supermarket loyalty cards to phone contracts to building entry logs. Chilean Spanish is notoriously difficult—fast, slang-heavy, and full of uniquely Chilean expressions that are incomprehensible to Spanish speakers from elsewhere. The natural environment is extraordinary: the Atacama Desert in the north (the driest place on Earth), wine country in the central valley, temperate rainforests in the south, and Patagonian glaciers at the extreme south, all within a country that stretches 4,300 km from top to bottom but is never more than 177 km wide. Earthquakes are a regular occurrence, but building codes are among the strictest in the world and Chileans are remarkably calm about them. For newcomers, Chile rewards those who come with realistic expectations about cost, language, and social dynamics.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 90 days',
    costOfLiving: 'Medium',
    primaryLanguages: 'Spanish (Chilean dialect)',
  },
  visas: [
    {
      name: 'Temporary Residence Visa (Visa de Residencia Temporal)',
      targetAudience: 'Workers, professionals, and those with family ties',
      useCase: 'The main long-term visa for foreigners in Chile, with sub-categories for employment, investment, retirement, and family reunification. Under the 2022 migration law, this must be applied for from outside Chile at a Chilean consulate in your country of residence. Processing involves the Servicio Nacional de Migraciones and can take 2-6 months. You must enter Chile within 90 days of approval.',
      duration: 'Up to 2 years, renewable once before applying for permanent residence',
      link: 'https://serviciomigraciones.cl/en/temporary-residence/'
    },
    {
      name: 'Work Visa (Subcategoría Laboral)',
      targetAudience: 'Employees with a confirmed job offer in Chile',
      useCase: 'A subcategory of the temporary residence visa for individuals with a signed employment contract with a Chilean company. The employer must be registered with the Servicio de Impuestos Internos (SII) and the contract must comply with Chilean labor law. The visa is tied to the employer initially but can be changed after obtaining the Cedula de Identidad.',
      duration: 'Up to 2 years, renewable',
      link: 'https://serviciomigraciones.cl/en/temporary-residence/'
    },
    {
      name: 'Tourist Entry / Visa-Free',
      targetAudience: 'Tourists and short-term visitors',
      useCase: 'Many nationalities receive 90 days visa-free on arrival. A Tarjeta de Turismo (tourist card) is issued electronically at the airport—do not lose the digital confirmation as you need it on departure. Some nationalities (notably Australians) must pay a reciprocity fee upon first entry at Santiago Airport, though this has been waived for many nationalities in recent years.',
      duration: 'Up to 90 days, extendable once for 90 more days at Extranjeria',
      link: 'https://serviciomigraciones.cl/en/home/'
    },
    {
      name: 'Digital Nomad / Remote Worker Visa',
      targetAudience: 'Remote workers with foreign income',
      useCase: 'Chile introduced a specific visa pathway for remote workers earning foreign income. Applicants must demonstrate a minimum monthly income (approximately USD 1,500) and proof of remote employment or self-employment outside Chile. The visa allows you to live in Chile while working for foreign clients or employers without requiring a local work contract.',
      duration: '1 year, renewable',
      link: 'https://serviciomigraciones.cl/en/home/'
    },
    {
      name: 'Investor Visa (Subcategoría Inversionista)',
      targetAudience: 'Entrepreneurs and investors',
      useCase: 'For individuals making a qualifying investment in Chile, either by establishing a new business or investing in an existing one. Requires a business plan, proof of capital, and registration with the SII. Processed through Chilean consulates abroad under the 2022 migration law framework.',
      duration: 'Up to 2 years, renewable',
      link: 'https://serviciomigraciones.cl/en/temporary-residence/'
    }
  ],
  requirements: [
    {
      title: 'RUT / RUN (Rol Unico Tributario / Nacional)',
      explanation: 'The Chilean national identification and tax number, assigned to all residents (Chilean and foreign). It appears on your Cedula de Identidad and is used across all government, financial, and commercial systems.',
      importance: 'The RUT is Chile\'s equivalent of a social security number and you will be asked for it constantly. Supermarkets ask for it (loyalty discounts), pharmacies ask for it (prescription tracking), building security desks ask for it (visitor logs), and you cannot open a bank account, sign a phone contract, set up internet, or conduct any official business without it. You receive your RUT when your residency visa is processed and your Cedula de Identidad is issued.',
      link: 'https://www.chileatiende.gob.cl/'
    },
    {
      title: 'Cedula de Identidad (Chilean ID Card)',
      explanation: 'The official Chilean identity card issued to all residents by the Registro Civil e Identificacion. For foreigners, it is issued after your visa is approved and you have registered with the Registro Civil.',
      importance: 'This is your primary legal identification in Chile. You must carry it at all times (or a photocopy). It is required for banking, signing contracts, accessing healthcare, renting housing, and virtually all formal interactions. The card contains your RUT number, photograph, and biometric data. Renewal is required when your visa is renewed.',
      link: 'https://www.registrocivil.cl/'
    },
    {
      title: 'ClaveUnica (Digital Identity)',
      explanation: 'Chile\'s unified digital identity system, allowing secure access to all state services online. Activated at a Registro Civil office by presenting your Cedula de Identidad and setting a password.',
      importance: 'ClaveUnica gives you access to the SII (tax authority) portal for filing taxes, the health insurance system (Fonasa or Isapre), the pension system (AFP), municipal services, and dozens of other government platforms. Without it, you must visit government offices in person for most procedures, which involves significant queuing. Activate it as soon as you receive your Cedula.',
      link: 'https://claveunica.gob.cl/'
    },
    {
      title: 'Health Insurance (Fonasa or Isapre)',
      explanation: 'Chile has a mandatory dual healthcare system. 7% of your gross salary is deducted for health insurance. You choose whether this goes to Fonasa (the public system) or an Isapre (private insurance provider). Major Isapres include Colmena, Cruz Blanca, Banmedica, and Consalud.',
      importance: 'Your choice between Fonasa and Isapre significantly affects your healthcare experience. Fonasa provides universal coverage at public hospitals and clinics, with co-payments based on income category. Isapres offer private hospital access, shorter wait times, and choice of specialist, but premiums vary by age, gender, and pre-existing conditions, and can become very expensive for older residents or families. Switching between Fonasa and Isapre is possible but involves administrative steps and timing restrictions.',
      link: 'https://www.fonasa.cl/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Chile has one of Latin America's most formalized and stable labor markets, with strong institutions, enforced contracts, and a professional business culture. The economy is driven by mining (Chile produces 27% of the world's copper), finance, agriculture (wine, fruit exports), technology, and services. Santiago concentrates the majority of professional opportunities, though Valparaiso, Concepcion, and Antofagasta have significant local economies. Most expats work for international companies, in mining and engineering, or run their own businesses.",
    whereToLook: [
      "LinkedIn — the primary platform for professional and international roles",
      "Trabajando.cl — one of Chile's largest local job portals",
      "Laborum.cl — another major Chilean job board",
      "Company career pages for mining companies (BHP, Anglo American, Codelco) and multinationals",
      "Startup Chile alumni network and local tech ecosystem for entrepreneurial roles"
    ],
    realityChecks: [
      "Spanish is essential for virtually all roles, even in international companies. Chilean Spanish is particularly challenging—fast, heavily slang-laden, and full of uniquely local expressions.",
      "Professional jobs in Chile are highly credential-focused. The university you attended matters significantly, and foreign degrees may need to be validated through the Ministry of Education.",
      "The labor market is formal and contract-driven. Chilean labor law provides strong protections for employees, including mandatory severance (indemnizacion por anos de servicio) of one month per year of service.",
      "Remote work paid in foreign currency (USD, EUR) provides a significant lifestyle advantage due to the favorable exchange rate and lower local costs."
    ]
  },
  salaryReality: {
    overview:
      "Chilean salaries are the highest in Latin America on average but modest by OECD standards (Chile joined the OECD in 2010). Santiago salaries are significantly higher than the rest of the country. The progressive income tax system (0-40%) is predictable, and the mandatory pension and health deductions are transparent, but the gap between gross and net can surprise newcomers.",
    realityChecks: [
      "Income tax is progressive with rates from 0% to 40%, but the effective rate for most professionals falls between 10-25%. Monthly tax withholding (impuesto unico de segunda categoria) is handled by your employer.",
      "Mandatory deductions include 7% for health insurance (Fonasa/Isapre), approximately 10% for pension (AFP), and smaller amounts for unemployment and disability insurance—totaling roughly 20% before income tax.",
      "Salary growth has been moderate, and inflation in recent years has eroded purchasing power. Negotiating annual adjustments tied to IPC (consumer price index) is common.",
      "Santiago is significantly more expensive than the rest of Chile: housing in desirable communes (Providencia, Las Condes, Nunoa) accounts for the largest share of monthly expenses."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Mandatory AFP pension contributions (approximately 10% of gross salary) plus health insurance (7%), which significantly reduce take-home pay",
      "Private healthcare (Isapre) costs that can far exceed the 7% minimum, especially for families or older workers",
      "High rent in desirable Santiago communes: a one-bedroom in Providencia runs CLP 500,000-800,000/month (USD 550-880)",
      "Grocery and imported goods costs that rival Southern European prices—Chile imports many consumer goods and electronics at premium markups"
    ]
  },
  housingSystem: {
    overview:
      "Chile has a formalized and legally structured rental market, especially in Santiago. Lease contracts (contrato de arriendo) are legally binding and typically notarized. Popular expat neighborhoods in Santiago include Providencia (walkable, central, excellent metro access), Las Condes (more upscale, modern towers, financial district), Nunoa (bohemian, arts-oriented, more affordable), and Vitacura (luxury, quieter, near Parque Bicentenario). In Valparaiso, Cerro Alegre and Cerro Concepcion are the colorful, creative hillside neighborhoods popular with foreigners.",
    expectations:
      "Deposits of one to two months' rent are standard. Proof of income (liquidaciones de sueldo or bank statements) and a Chilean guarantor (aval) may be required, though some landlords accept a larger deposit in lieu of a guarantor for foreigners. Most apartments come unfurnished—furnished rentals exist but command a premium. Portalinmobiliario.com is the dominant listing platform, supplemented by Yapo.cl and Facebook groups. Heating is a significant cost in winter (June-August) in central Chile, as many apartments lack central heating and rely on gas or electric heaters. Always check the water heater type (califont gas heaters are common) and test water pressure before signing."
  },
  healthcareReality:
    "Chile's healthcare system is a well-functioning dual public-private model. Fonasa (the public system) provides universal coverage through a network of public hospitals (hospitales publicos) and consultorios (primary care centers), with co-payments based on income category. The public system is adequate for many services but involves longer wait times for specialists and elective procedures. The private system through Isapres provides access to excellent hospitals—Clinica Alemana (consistently ranked among the best in Latin America), Clinica Las Condes, Red Salud UC Christus, and Clinica Santa Maria—with shorter wait times and more comfortable facilities. Private consultations cost CLP 30,000-60,000 (USD 33-66). Emergency rooms at both public and private hospitals are required by law to stabilize any patient regardless of insurance status. Pharmacies (Cruz Verde, Salcobrand, Ahumada) are on every major street and carry a wide range of medications, many available without prescription that would require one elsewhere.",
  digitalLife: {
    overview:
      "Chile is the most digitally advanced country in Latin America, with widespread broadband, reliable mobile networks (Entel, Movistar, WOM, Claro), and a government that has invested heavily in digital service delivery. The ClaveUnica system provides single sign-on access to most government services online.",
    essentials: [
      "ClaveUnica — unified digital identity for all government services, tax filing, and pension management",
      "BancoEstado or local bank app — for transfers, bill payments, and the CuentaRUT (a basic bank account tied to your RUT available to all residents)",
      "Uber, Cabify, and DiDi — widely used ride-hailing apps in Santiago and other major cities",
      "Rappi and PedidosYa — dominant food and grocery delivery platforms"
    ],
    whatSurprisesNewcomers: [
      "Your RUT number is asked for everywhere—supermarket checkout, pharmacy, building entrance, gym membership. It functions as a universal identifier in daily life beyond its tax purpose.",
      "Cashless payments (debit cards and mobile wallets) are widely accepted, even at small shops and markets in Santiago. Cash is less necessary than in most of Latin America.",
      "Chilean banks can be bureaucratic when onboarding foreigners. Opening an account may require multiple visits and extensive documentation. BancoEstado's CuentaRUT is the fastest option for basic banking.",
      "Internet and mobile data are reliable and affordable by regional standards. Fiber broadband is available in most urban areas, and competition among mobile providers keeps data plans reasonable."
    ]
  },
  culture: {
    text: 'Chilean culture is warm but initially reserved—Chileans are more formal and less immediately effusive than Colombians or Brazilians. Social bonds form slowly but are deep and lasting. "Once" (literally "eleven," from the British "elevenses") is a uniquely Chilean institution: a late afternoon tea and snack around 5-7 PM that often replaces dinner entirely, featuring bread, avocado (palta), cheese, cold cuts, and tea or coffee. Bread is sacred—Chileans consume more bread per capita than any country outside of Germany. Chilean Spanish is its own dialect, spoken fast and peppered with slang: "Cachai?" (you get it?), "Weon/a" (dude, but context-dependent—it can be affectionate or aggressive), "Po" (an emphatic particle added to everything: "Si po," "No po," "Ya po"). Class consciousness is real and visible: the commune you live in, the university you attended (Universidad de Chile, PUC, and a few others carry prestige), and your surname all signal social position.',
    highlights: [
      'Chilean Spanish is genuinely challenging for Spanish speakers from other countries. Chileans drop the "s" at the end of words, speak rapidly, and use slang that is unique to Chile. "Cachai?" (get it?) ends most sentences.',
      'One kiss on the right cheek is the standard greeting between women and in mixed company. Men shake hands. Using "usted" (formal you) is expected in professional and first-meeting contexts.',
      'Palta (avocado) is on everything: hot dogs (completos), burgers, sandwiches, toast, and as a side dish. It is a national obsession.',
      'Earthquakes are a normal part of life. Small tremors happen frequently and most Chileans do not even pause conversation. Only react if locals react—Chilean building codes are among the strictest in the world.',
      'The asado (barbecue) is a central social gathering, particularly on weekends and holidays. Bringing wine (Chilean wine, naturally) is the standard guest contribution.'
    ]
  },
  transportationMobility:
    "Santiago has the best public transport system in Latin America. The Metro de Santiago is modern, clean, efficient, and covers most of the city with 7 lines and over 130 stations. Surface buses (RED, formerly Transantiago) complement the metro with an integrated fare system using the Bip! card (a contactless transit card). Rush hour is genuinely crowded—the metro between 7:30-9:00 AM and 6:00-8:00 PM is packed. Outside Santiago, intercity buses are the primary long-distance transport, with companies like Pullman Bus, Tur Bus, and Cruz del Sur offering comfortable semi-cama and salon-cama services between cities. Driving in Santiago is manageable but involves heavy traffic and a tag-based toll system (TAG) on urban highways. Car ownership is more practical outside Santiago, particularly for accessing rural areas, vineyards, and the coast. Cycling infrastructure is improving, with bike lanes expanding in Providencia, Las Condes, and Nunoa.",
  internationalConnectivity:
    "Santiago's Arturo Merino Benitez International Airport (SCL) is the primary international gateway, with direct flights to most South American capitals, major US cities (Miami, New York, Dallas, Houston, Atlanta), Madrid, Barcelona, Paris, London, Auckland, and Sydney. LATAM Airlines (Chile's dominant carrier and the largest in Latin America) has its hub at SCL and offers extensive domestic and international routes. Sky Airline and JetSMART provide budget domestic and regional flights. Flight times to Buenos Aires are about 2 hours, to Lima about 3.5 hours, to Miami about 8.5 hours, and to Madrid about 12.5 hours. Chile's geographic isolation (Andes to the east, Pacific to the west, Atacama to the north, Patagonia to the south) means air travel is essential for international connectivity.",
  travelExploration:
    "Chile's extraordinary geography makes it one of the most diverse travel destinations in the world. The Atacama Desert in the north offers lunar landscapes, salt flats, geysers, and the world's clearest skies for stargazing (observatories near La Serena and San Pedro de Atacama). The central wine valleys of Colchagua, Maipo, and Casablanca produce world-class Carmenere and Cabernet Sauvignon. Valparaiso, a UNESCO World Heritage city, climbs the hillsides above its port with colorful houses, street art, funiculars, and bohemian energy. The Lake District (Pucon, Villarrica, Puerto Varas) offers volcanoes, hot springs, and temperate rainforests. Further south, the Carretera Austral is one of the world's great road trips through Patagonian wilderness. Torres del Paine National Park in Magallanes is a world-class trekking destination. And Easter Island (Rapa Nui), 3,700 km offshore in the Pacific, holds the mysterious moai statues. Domestic flights are affordable, and the well-maintained Pan-American Highway makes north-south road trips feasible.",
  considerations: [
    'Santiago Smog: In winter (June-August), temperature inversions trap pollution in the Santiago valley, creating serious smog episodes. The government declares environmental pre-emergencies and emergencies that restrict vehicle use and industrial activity. Air quality can rival badly polluted Asian cities on the worst days. Check the air quality index (ICA) daily during winter.',
    'Cost of Living: Chile is one of the most expensive countries in Latin America, particularly for groceries, electronics, and housing in desirable Santiago communes. Imported goods carry high markups. Budget accordingly—the cost of a weekly grocery shop can surprise newcomers accustomed to cheaper neighboring countries.',
    'Earthquake Readiness: Chile sits on the Pacific Ring of Fire and experiences significant seismic activity regularly. A magnitude 5+ earthquake occurs several times per year. Buildings are built to exceptional seismic standards, but having an emergency kit, knowing evacuation routes, and understanding tsunami protocols (for coastal areas) is prudent. The SHOA (Servicio Hidrografico y Oceanografico de la Armada) issues tsunami alerts.',
    'Social Stratification: Chilean society is class-conscious in ways that can be subtle but pervasive. Your commune of residence, university background, and social circles are read as markers of social position. This is not something to confront directly but rather to understand as context for social interactions.',
    'Chilean Spanish: Even fluent Spanish speakers from other countries struggle with Chilean Spanish initially. The accent drops consonants, the slang is unique, and conversational speed is fast. Investing in Chile-specific Spanish lessons or conversation practice is highly recommended.'
  ],
  mistakes: [
    'Mocking or constantly commenting on the Chilean accent. Chileans are aware that their Spanish is distinctive, and they take pride in their linguistic identity. Pointing out that you cannot understand them gets old quickly.',
    'Expecting spicy food. Unlike Mexico or Peru, Chilean cuisine is generally mild. Pebre (a salsa of tomatoes, onions, cilantro, and chili) is available as a condiment, but the food itself is not prepared with much heat. Merken (smoked chili from the Mapuche tradition) is the local spice to try.',
    'Not paying the propina (tip). A 10% service charge is typically added to restaurant bills. You are expected to pay it—while technically voluntary, not paying it is considered rude. For exceptional service, you can add more.',
    'Referring to the United States as "America." You are in South America. Chileans (and Latin Americans generally) consider the entire Western Hemisphere to be "America." Say "Estados Unidos" or "Norteamerica" to refer to the US.',
    'Underestimating bureaucratic timelines. The new 2022 migration law requires visa applications from outside Chile, and processing times can be months. Plan well ahead and do not assume you can sort out your legal status after arrival on a tourist entry.'
  ],
  emergency: [
    {
      number: '133',
      service: 'Carabineros de Chile (Police)',
      description: 'National police force with a strong reputation for professionalism. Available 24/7. Do NOT attempt to bribe Carabineros—this is taken extremely seriously and will result in your arrest.'
    },
    {
      number: '131',
      service: 'SAMU (Ambulance)',
      description: 'Servicio de Atencion Medica de Urgencia. Public emergency medical service providing ambulance dispatch and pre-hospital care.'
    },
    {
      number: '132',
      service: 'Bomberos de Chile (Fire Department)',
      description: 'Chile\'s fire department is 100% volunteer and deeply respected by Chilean society. They respond to fires, natural disasters, and vehicle accidents.'
    }
  ],
  sources: [
    {
      name: 'Servicio Nacional de Migraciones',
      category: 'Immigration & Residency',
      description: 'Official Chilean migration authority handling visa applications, temporary and permanent residence, and immigration regulations.',
      link: 'https://serviciomigraciones.cl/en/home/'
    },
    {
      name: 'ChileAtiende',
      category: 'Government Services',
      description: 'Multi-channel government service platform providing information and access to public services, benefits, and administrative procedures.',
      link: 'https://www.chileatiende.gob.cl/'
    },
    {
      name: 'SII (Servicio de Impuestos Internos)',
      category: 'Tax & Finance',
      description: 'Chile\'s internal revenue service handling tax registration, filing, RUT issuance, and compliance for individuals and businesses.',
      link: 'https://www.sii.cl/'
    },
    {
      name: 'Chile Travel',
      category: 'Tourism & Travel',
      description: 'Official tourism board providing destination guides, travel planning resources, and information on Chile\'s natural and cultural attractions.',
      link: 'https://www.chile.travel/en/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to Chile, consult the Chilean Ministry of Foreign Affairs (Ministerio de Relaciones Exteriores) or a Chilean embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/chile',
    mfaLink: 'https://minrel.gob.cl/'
  },
  serviceDirectory: {
    title: "Service Directory - Chile",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Chile.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for visa applications, temporary and permanent residency, RUT registration, and compliance with Chilean migration law.",
        providers: [
          { name: "Fragomen Chile", link: "https://www.fragomen.com" },
          { name: "Carey y Cia", link: "https://www.carey.cl" },
          { name: "Prieto Abogados", link: "https://www.prieto.cl" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Platforms and agencies assisting with long-term rentals, residential purchases, and relocation housing in Santiago and other cities.",
        providers: [
          { name: "Portalinmobiliario", link: "https://www.portalinmobiliario.com" },
          { name: "RE/MAX Chile", link: "https://www.remax.cl" },
          { name: "Sotheby's International Realty Chile", link: "https://www.sothebysrealty.com/eng/sales/chl" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Chilean tax residency, SII compliance, AFP pension planning, and cross-border income for foreign residents.",
        providers: [
          { name: "PwC Chile", link: "https://www.pwc.cl" },
          { name: "EY Chile", link: "https://www.ey.com/es_cl" },
          { name: "KPMG Chile", link: "https://home.kpmg/cl" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including shipping, customs clearance, and household moves to Chile.",
        providers: [
          { name: "Crown Relocations Chile", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Chile", link: "https://www.agsmovers.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Spanish language schools and courses for foreigners, with focus on Chilean Spanish and cultural integration.",
        providers: [
          { name: "Universidad de Chile - Spanish Programs", link: "https://www.uchile.cl" },
          { name: "Escuela Bellavista", link: "https://www.bellavistaescuela.cl" },
          { name: "Berlitz Chile", link: "https://www.berlitz.com/es-cl" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major hospitals and healthcare providers commonly used by residents and expats in Chile.",
        providers: [
          { name: "Clinica Alemana", link: "https://www.clinicaalemana.cl" },
          { name: "Clinica Las Condes", link: "https://www.clinicalascondes.cl" },
          { name: "Red Salud UC Christus", link: "https://www.redsaluduc.cl" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and firms connecting international professionals with Chilean employers.",
        providers: [
          { name: "Laborum Chile", link: "https://www.laborum.cl" },
          { name: "Michael Page Chile", link: "https://www.michaelpage.cl" },
          { name: "Robert Half Chile", link: "https://www.roberthalf.cl" }
        ]
      }
    ]
  }
};