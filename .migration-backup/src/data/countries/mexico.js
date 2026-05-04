export const mexico = {
  id: 'mexico',
  slug: 'mexico',
  name: 'Mexico',
  region: 'Americas',
  complexity: 'Medium',
  languages: ['Spanish'],
  shortDescription: 'Rich culture, incredible food, and a warm, chaotic energy.',
  heroImage: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a',
  flagAlt: 'Flag of Mexico',
  atAGlance: "Mexico is a country of staggering scale, cultural depth, and paradox. It is the 13th largest economy in the world, home to 130 million people, and contains 35 UNESCO World Heritage Sites—more than almost any other country. The culture is intensely social, family-oriented, and expressive, with a relationship to food that borders on spiritual (Mexican cuisine is itself UNESCO-recognized). Life moves to its own rhythm: 'ahorita' (right now) can mean anything from 'immediately' to 'sometime next week,' and learning to read context rather than words is a fundamental survival skill. Mexico City (CDMX) has emerged as one of the world's great cities for expats, digital nomads, and creative professionals—the Roma Norte, Condesa, and Polanco neighborhoods offer walkable streets, world-class dining, vibrant arts scenes, and a cost of living that enables a lifestyle unthinkable in New York or London. Guadalajara, Mexico's second city, is the tech hub with a growing startup ecosystem. Monterrey is the industrial and business powerhouse of the north. The coastal options are equally varied: Puerto Vallarta and the Riviera Maya for beach lifestyle, San Miguel de Allende for colonial charm, Oaxaca for culinary and indigenous culture. Safety varies dramatically by region and by neighborhood—blanket assessments of Mexico as 'dangerous' or 'safe' are both wrong. Millions of expats and retirees live happily here, drawn by the warmth of the people, the richness of the culture, the food, and a cost of living that makes a high quality of life genuinely accessible. The bureaucracy is real (the SAT tax office, immigration appointments, and banking processes all require patience), but the rewards for those who invest time in learning Spanish, building relationships, and approaching the country with respect and curiosity are enormous.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 180 days (FMM)',
    costOfLiving: 'Low-Medium',
    primaryLanguages: 'Spanish (Indigenous languages also spoken)',
  },
  visas: [
    {
      name: 'FMM (Forma Migratoria Multiple)',
      targetAudience: 'Tourists and short-term visitors',
      useCase: 'The standard visitor permit issued on arrival at the airport or border crossing. Historically granted for 180 days, but since 2024 immigration officers have been increasingly granting shorter periods (7-30 days) based on their assessment of your travel plans. Always check the number of days stamped on your FMM and request more if your plans warrant it. Do not overstay—fines and future entry problems are real.',
      duration: 'Up to 180 days (at officer discretion)',
      link: 'https://www.inm.gob.mx/fmme/publico/en/solicitud.html'
    },
    {
      name: 'Temporary Resident Visa (Residente Temporal)',
      targetAudience: 'Long-term residents, remote workers, and professionals',
      useCase: 'For individuals planning to stay more than 180 days, with economic solvency (savings or monthly income meeting the threshold, which varies by consulate but is approximately USD 2,500-3,500/month in proven income or USD 43,000-50,000 in savings shown over 12 months of bank statements). Applied for at a Mexican consulate in your country of residence before traveling. Does not initially grant work permission for a Mexican employer, but allows you to work remotely for foreign clients. A separate work endorsement (permiso de trabajo) can be added.',
      duration: '1 year, renewable up to 4 years total',
      link: 'https://www.gob.mx/tramites/ficha/visa-de-residencia-temporal/SRE187'
    },
    {
      name: 'Permanent Resident Visa (Residente Permanente)',
      targetAudience: 'Retirees, high-net-worth individuals, and long-term residents',
      useCase: 'For individuals with higher economic solvency (approximately USD 4,200+/month in proven income or USD 175,000+ in savings), retirees with sufficient pension income, or those who have completed four years of temporary residency. No renewal required—the visa is indefinite. Applied for at a Mexican consulate abroad or through a status change from temporary residence within Mexico after four years.',
      duration: 'Indefinite',
      link: 'https://www.gob.mx/tramites/ficha/visa-de-residencia-permanente/SRE189'
    },
    {
      name: 'Family Unity Visa (Reunificación Familiar)',
      targetAudience: 'Spouses, children, and parents of Mexican citizens or residents',
      useCase: 'For family members of Mexican nationals or legal residents seeking to join them in Mexico. Requires proof of the family relationship (marriage certificate, birth certificate), proof of the sponsor\'s legal status, and supporting financial documentation. Processed at a Mexican consulate or through INM for in-country status changes.',
      duration: 'Matches sponsor status (temporary or permanent)',
      link: 'https://www.gob.mx/tramites/ficha/visa-de-residencia-temporal-por-unidad-familiar/INM807'
    },
    {
      name: 'Work Visa (Residente Temporal con Permiso de Trabajo)',
      targetAudience: 'Employees of Mexican companies',
      useCase: 'For foreign nationals offered employment by a Mexican company. The employer must register with INM as a sponsor and obtain a work authorization (oficio de autorización) before you can apply for the visa at a consulate. The process involves both INM and the consulate, and typically takes 3-6 weeks total. The visa is tied to the sponsoring employer.',
      duration: '1 year, renewable up to 4 years',
      link: 'https://www.gob.mx/inm'
    }
  ],
  requirements: [
    {
      title: 'CURP (Clave Única de Registro de Población)',
      explanation: 'Your Unique Population Registry Code—an 18-character alphanumeric code assigned to every person registered in Mexico. For foreigners, it is generated automatically when your temporary or permanent residence is processed by INM.',
      importance: 'The CURP is required for virtually everything: opening a bank account, signing a phone or internet contract, getting a driver\'s license, enrolling in healthcare, filing taxes, and registering children in school. It appears on your residence card and can be looked up online at gob.mx/curp. If your CURP has not been generated after your immigration paperwork is complete, visit an INM office to resolve it—some processes stall until it is active.',
      link: 'https://www.gob.mx/curp/'
    },
    {
      title: 'RFC (Registro Federal de Contribuyentes)',
      explanation: 'Your Federal Taxpayer Registry number, issued by the SAT (Servicio de Administración Tributaria). Required for any person conducting economic activity in Mexico, including receiving income, opening certain bank accounts, and issuing or receiving official invoices (facturas).',
      importance: 'Even if you are not employed locally, banks increasingly require an RFC for account opening, and you need it if you generate any Mexican-source income. The registration process involves visiting a SAT office with an appointment (cita), bringing your passport, CURP, proof of address, and biometric enrollment. The process can be bureaucratic—arrive early, bring all documents in original and copy, and expect the appointment to take 1-2 hours. Mexico\'s tax system is territorial for temporary residents (only Mexican-source income is taxed) but transitions to worldwide taxation after 5 years of residence.',
      link: 'https://www.sat.gob.mx/home'
    },
    {
      title: 'Proof of Address (Comprobante de Domicilio)',
      explanation: 'A recent utility bill (electricity from CFE, water, gas, or landline phone) in your name or a notarized lease agreement showing your Mexican address. Must be less than 3 months old.',
      importance: 'Proof of address is required for nearly every administrative process in Mexico: banking, RFC registration, driver\'s license, vehicle registration, and internet setup. The catch-22 for newcomers is that you need a proof of address to open a bank account, but you need a bank account to pay utilities that generate proof of address. Common workarounds include using your lease agreement (with the landlord\'s ID copy), a letter from a Mexican citizen confirming your address, or a bank statement from an initial account opened with temporary documents.',
      link: 'https://www.gob.mx/'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a Mexican bank account requires your passport, residence card (or FMM for basic accounts), CURP, RFC (for full accounts), and proof of address. Major banks include BBVA Mexico, Banorte, Citibanamex, Santander Mexico, and HSBC Mexico. Digital banks like Nu Mexico and Hey Banco offer simplified onboarding.',
      importance: 'A local bank account is essential for rent payments, utility bills, and daily transactions. Mexico is increasingly cashless in urban areas (contactless payments, SPEI transfers), but cash remains important for markets, street food, taxis, and small businesses. BBVA Mexico is generally considered the most foreigner-friendly of the major banks, with English-speaking staff at some branches. SPEI (the interbank transfer system) enables instant, free bank-to-bank transfers and is the backbone of digital payments in Mexico.',
      link: 'https://www.banxico.org.mx/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Mexico has Latin America's second-largest economy, with a diverse job market spanning manufacturing (automotive, aerospace), technology, finance, tourism, energy, and a growing nearshoring boom as companies move operations closer to the US market. Mexico City, Guadalajara, and Monterrey are the main employment hubs. For foreign professionals, opportunities are strongest in multinational companies, the tech sector, education, and international organizations. Most expats, however, work remotely for foreign employers or run location-independent businesses.",
    whereToLook: [
      "LinkedIn — the dominant platform for professional and international roles",
      "OCC Mundial (occ.com.mx) — Mexico's largest job board",
      "Indeed Mexico (mx.indeed.com) — strong for corporate and professional positions",
      "Computrabajo Mexico (computrabajo.com.mx) — popular for mid-level and operational roles",
      "Company career pages for multinationals with Mexican operations (BBVA, Cemex, Bimbo, Amazon, Google, Meta)"
    ],
    realityChecks: [
      "Local salaries are low by international standards. A professional role at a Mexican company might pay MXN 25,000-50,000/month (USD 1,400-2,800), while senior management at multinationals pays significantly more.",
      "Spanish is required for virtually all roles beyond entry-level positions at international companies. Even in English-speaking environments, daily operations, lunch conversations, and team dynamics default to Spanish.",
      "The 'nearshoring' trend is creating demand for bilingual professionals in manufacturing, logistics, and tech, particularly in Monterrey, Guadalajara, and the Bajío region (Querétaro, Aguascalientes, San Luis Potosí).",
      "Remote work for US companies while living in Mexico is the most common arrangement for expats. The Temporary Resident Visa permits this, and Mexico's territorial tax system means only Mexican-source income is taxed for the first several years."
    ]
  },
  salaryReality: {
    overview:
      "Mexico's salary landscape is deeply bifurcated. Local wages are modest, but the cost of living (particularly for food, housing outside premium neighborhoods, and services) is low enough that a foreign income of USD 3,000-5,000/month provides an excellent quality of life. The minimum wage has increased significantly in recent years but remains low by international standards (approximately MXN 375/day in 2025).",
    realityChecks: [
      "Income disparity between locally-paid and foreign-paid workers is enormous. A software developer earning USD 5,000/month remotely lives a fundamentally different life than one earning MXN 30,000/month locally.",
      "Private healthcare and international school fees (if applicable) are self-funded by most expats and can add USD 200-800/month depending on coverage and family size.",
      "The Mexican Peso has been relatively strong in recent years, which has reduced the purchasing power advantage for USD earners compared to a few years ago.",
      "Aguinaldo (Christmas bonus) is mandatory by law—equivalent to at least 15 days' salary, paid before December 20. This is a real benefit that salary figures often omit."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The cost of private healthcare insurance (seguro de gastos médicos mayores), which ranges from MXN 5,000-20,000/month depending on age and coverage",
      "Security-related costs in some cities: gated parking, monitored housing, and avoiding certain areas shape living expenses",
      "The mandatory Aguinaldo (Christmas bonus) and vacation premium (prima vacacional) that effectively add 1-2 months to annual compensation",
      "Currency volatility—the MXN/USD rate can fluctuate 10-15% in a year, affecting anyone converting between currencies regularly"
    ]
  },
  housingSystem: {
    overview:
      "Mexico has a large and varied rental market, with options ranging from colonial apartments in historic centers to modern high-rise towers in business districts. In Mexico City, Roma Norte, Condesa, Polanco, Juárez, and Coyoacán are the most popular expat neighborhoods, each with a distinct character. In Guadalajara, Providencia, Americana/Lafayette, and Chapalita attract foreigners. Coastal cities like Puerto Vallarta, Playa del Carmen, and Merida each have established expat rental markets. Lease terms are flexible, and furnished apartments are widely available in expat-heavy areas.",
    expectations:
      "Deposits of one to two months' rent are standard, and landlords often request an aval (guarantor) who owns property in the same city. For foreigners without a guarantor, offering additional deposit months or prepaying several months upfront is a common workaround. A comfortable one-bedroom in Roma Norte or Condesa runs MXN 15,000-25,000/month (USD 850-1,400); in Merida or Oaxaca, MXN 8,000-15,000/month. Inmuebles24.com, Segundamano.mx, Facebook groups, and local real estate agents are the main search channels. Always visit the apartment in person—photos can be misleading—and test water pressure, noise levels (Mexico is loud), and internet speed before committing."
  },
  healthcareReality:
    "Mexico has a dual healthcare system. The public system (IMSS for formal employees, INSABI/IMSS-Bienestar for uninsured residents) provides free or low-cost care but involves long wait times and crowded facilities. Most expats and middle-class Mexicans use private healthcare, which is high quality and remarkably affordable by US or European standards. Major private hospital groups include Hospital Angeles (with locations in most major cities), Medica Sur (Mexico City), Christus Muguerza (Monterrey), and Hospital San Javier (Guadalajara). A private GP consultation costs MXN 500-1,000 (USD 28-55), and specialist consultations MXN 800-2,000. Private health insurance (seguro de gastos medicos mayores) from providers like GNP, AXA, MetLife, and Mapfre covers hospitalization, surgery, and major medical events and costs MXN 5,000-20,000/month depending on age and coverage level. Dental care is excellent and affordable—many Americans cross the border specifically for dental treatment. Pharmacies (Farmacias del Ahorro, Farmacias Guadalajara, Farmacias Similares) are everywhere and carry a wide range of medications, many available without prescription.",
  digitalLife: {
    overview:
      "Mexico's digital infrastructure is rapidly improving, with widespread smartphone adoption, growing broadband coverage, and a fintech ecosystem that has transformed how people handle money. Urban areas have good connectivity, though speeds and reliability drop in rural and remote areas.",
    essentials: [
      "WhatsApp — the essential communication tool. Businesses, landlords, doctors, government offices, and delivery services all operate via WhatsApp. Not having WhatsApp is functionally equivalent to not having a phone.",
      "BBVA Mexico or Nu Mexico banking app — for SPEI transfers, bill payments, and contactless payments",
      "Uber, DiDi, and InDriver — ride-hailing apps widely used across Mexican cities, often cheaper and safer than street taxis",
      "Rappi — the dominant super-app for food delivery, grocery delivery, pharmacy delivery, and even cash withdrawal services"
    ],
    whatSurprisesNewcomers: [
      "WhatsApp is not just a messaging app—it is the primary business communication channel. Your landlord will text you on WhatsApp, your doctor will schedule appointments on WhatsApp, and restaurants take reservations on WhatsApp.",
      "Cash remains essential for daily life. Street food vendors, local markets, parking attendants, tipping, and small shops are cash-only. Always carry MXN 200-500 in small denominations.",
      "SPEI (the national interbank transfer system) enables instant, free transfers between any Mexican bank account. It is used for everything from splitting restaurant bills to paying rent.",
      "The SAT (tax authority) digital portal is functional but complex. Tax filing in Mexico can be surprisingly involved, even for individuals, due to the factura (invoice) system that documents virtually all transactions."
    ]
  },
  culture: {
    text: 'Mexican culture is warm, expressive, family-centered, and deeply layered. Courtesy and personal relationships take priority over efficiency in almost every interaction. Mexicans are extremely polite and avoid direct confrontation—saying "no" directly is considered rude, so learning to read diplomatic refusals is essential. Family gatherings on Sundays are sacrosanct. The comida (main meal) is eaten between 2:00-4:00 PM and is the centerpiece of the day, followed by sobremesa—the extended conversation after eating that can last hours and is where real relationships are built. Food is not just sustenance but cultural identity: each region has its own cuisine, and Mexicans are passionately knowledgeable about the differences between Oaxacan mole, Yucatecan cochinita pibil, Northern carne asada, and Mexico City street tacos. Death is approached with familiarity rather than fear—Día de los Muertos (November 1-2) is a celebration of deceased loved ones with altars, marigolds, and joyful remembrance.',
    highlights: [
      'Always greet with "Buenos días" (morning), "Buenas tardes" (afternoon), or "Buenas noches" (evening) when entering any space—a shop, an elevator, a waiting room. Not greeting is noticed and considered rude.',
      '"Mande?" is used instead of "What?" or "Pardon?" It is softer and more respectful. Using "Que?" can sound blunt.',
      'The concept of "No pica" (it\'s not spicy) is relative. What a Mexican considers mild may still be quite spicy for most foreigners. Approach chili peppers with respect and build your tolerance gradually.',
      'Día de los Muertos (Day of the Dead) on November 1-2 is not Mexican Halloween. It is a deeply meaningful cultural tradition honoring deceased family members with ofrendas (altars), marigold flowers, and their favorite foods.',
      'Tipping is important: 10-15% at restaurants (propina is rarely included in the bill), MXN 10-20 for car valets (viene-viene), MXN 5-10 for bag packers at supermarkets (usually elderly workers who depend on tips), and MXN 20-50 for gas station attendants.'
    ]
  },
  transportationMobility:
    "Mexico City has the largest metro system in Latin America (12 lines, 195 stations), which is efficient and extraordinarily cheap (MXN 5 per ride) but extremely crowded during rush hours. The Metrobus (bus rapid transit) complements the metro along major avenues. Outside CDMX, Guadalajara has a light rail system and expanding BRT, while Monterrey has a metro and Ecovía BRT. Ride-hailing apps (Uber, DiDi, InDriver) are widely used across all major cities and are generally safer and more comfortable than street taxis. For intercity travel, luxury bus companies (ETN, Primera Plus, ADO) provide comfortable, affordable service between cities—a first-class bus from Mexico City to Oaxaca costs MXN 600-900 and takes 6 hours. Domestic flights are frequent and affordable on Volaris, VivaAerobus, and Aeromexico, connecting the country's dispersed major cities. Driving in Mexico City is challenging (traffic is legendary), but car ownership is practical in other cities and essential for rural areas.",
  internationalConnectivity:
    "Mexico City's Benito Juarez International Airport (MEX) and the new Felipe Angeles International Airport (NLU) serve as the country's primary gateways. MEX has direct flights to virtually every major North American and European city, plus connections to South America, Asia (Tokyo, Seoul), and the Middle East. Aeromexico, the flag carrier and SkyTeam member, has its hub at MEX. Cancun International Airport (CUN) handles massive volumes of tourist and charter flights from the US, Canada, and Europe. Guadalajara (GDL) and Monterrey (MTY) airports offer extensive domestic and US connections. Flight times to Los Angeles are about 3.5 hours, to Miami about 2.5 hours, to New York about 5 hours, and to Madrid about 11 hours. Land border crossings with the US (Tijuana-San Diego, Ciudad Juarez-El Paso, Nuevo Laredo-Laredo) are among the busiest in the world.",
  travelExploration:
    "Mexico is one of the world's great travel destinations, offering archaeological sites, colonial cities, beaches, mountains, jungles, and culinary trails. Mexico City alone could occupy weeks: the National Museum of Anthropology, Frida Kahlo's Casa Azul, the floating gardens of Xochimilco, the pyramids of Teotihuacan (45 minutes away), and a restaurant scene that earned it a place among the world's best food cities. Oaxaca is the culinary capital, with mezcal distilleries, Zapotec ruins at Monte Alban, and the Hierve el Agua petrified waterfalls. The Yucatan Peninsula combines Mayan ruins (Chichen Itza, Uxmal, Tulum), cenotes (natural swimming holes), and Caribbean beaches. San Miguel de Allende is a beautifully preserved colonial town popular with artists and retirees. Copper Canyon (Barranca del Cobre) in Chihuahua is larger and deeper than the Grand Canyon, traversed by the Chepe railway. The Pacific coast from Puerto Vallarta to Huatulco offers surfing, whale watching, and beach towns for every budget. ADO and ETN buses, budget airlines, and a well-maintained highway system make domestic travel accessible and affordable.",
  considerations: [
    'Safety Varies by Region: Safety in Mexico is hyperlocal. Mexico City\'s Roma Norte is as safe as most European city neighborhoods, while certain states (Guerrero, Tamaulipas, Sinaloa, parts of Michoacan) have active travel warnings. Research your specific destination thoroughly. Use the US State Department travel advisories and local expat community knowledge, not blanket headlines.',
    'Water Safety: Do not drink tap water anywhere in Mexico. Use garrafones (20-liter jugs of purified water delivered to your home), bottled water, or install a filtration system. Ice in restaurants and established food stalls is generally made from purified water, but exercise judgment at very informal establishments.',
    'Noise: Mexico is loud. Car alarms, fireworks (at 5 AM for saints\' day celebrations), gas truck loudspeakers ("GAAAS de Zeta!"), street vendors, music from neighbors, and barking dogs form the constant soundscape of Mexican life. Noise-canceling headphones and apartments on upper floors or interior-facing rooms are practical investments.',
    'Stomach Adjustment: "Montezuma\'s Revenge" is a real phenomenon as your digestive system adjusts to new bacteria. Eat at busy street stalls (high food turnover means fresher preparation), wash hands frequently, and start with cooked foods before venturing into raw salsas and street salads. Most people adjust within 2-4 weeks.',
    'Immigration Enforcement: Mexico has tightened FMM enforcement. Immigration officers may grant fewer than 180 days, and overstaying results in fines and potential future entry problems. If you plan to stay long-term, apply for a Temporary Resident Visa at a Mexican consulate before traveling.'
  ],
  mistakes: [
    'Losing your temper or raising your voice in public, especially with officials or service workers. Direct confrontation is considered aggressive and rude in Mexican culture. You will achieve nothing with bureaucracy, police, or customer service by yelling. Patience, politeness, and persistence are the tools that work.',
    'Assuming everyone speaks English. While English is common in tourist areas and international business, the vast majority of Mexicans speak only Spanish. Learning at least conversational Spanish is not optional for a good experience—it is essential.',
    'Paying the first price asked in markets and informal settings. Bargaining (regateo) is expected and part of the cultural interaction in markets, with artisans, and for some services. In stores, supermarkets, and restaurants, prices are fixed.',
    'Putting toilet paper in the toilet in older buildings and outside major cities. Many plumbing systems, especially in colonial buildings, coastal towns, and older infrastructure, cannot handle paper. A waste bin next to the toilet is provided for this purpose.',
    'Treating Mexico as a monolith. Mexico City, Oaxaca, Monterrey, the Yucatan, and Baja California are as culturally different from each other as separate countries. Cuisine, accent, climate, attitude, and lifestyle vary dramatically by region. Explore widely before deciding where to settle.'
  ],
  emergency: [
    {
      number: '911',
      service: 'Police, Fire, and Ambulance',
      description: 'Unified emergency number operational nationwide since 2017. Operators speak Spanish; English-speaking operators may be available in tourist areas.'
    },
    {
      number: '078',
      service: 'Angeles Verdes (Green Angels)',
      description: 'Federal roadside assistance service patrolling major highways. They provide free mechanical help, first aid, and towing for stranded motorists. Available 24/7 on toll highways.'
    },
    {
      number: '089',
      service: 'Anonymous Crime Reporting',
      description: 'Denuncia Anónima—a hotline for reporting crimes, suspicious activity, or corruption anonymously. Operated by the federal government.'
    }
  ],
  sources: [
    {
      name: 'INM (Instituto Nacional de Migración)',
      category: 'Immigration & Residency',
      description: 'National Migration Institute handling visa applications, FMM permits, residence cards, and immigration enforcement throughout Mexico.',
      link: 'https://www.gob.mx/inm'
    },
    {
      name: 'SAT (Servicio de Administración Tributaria)',
      category: 'Tax & Finance',
      description: 'Mexico\'s tax administration authority responsible for RFC registration, tax filing, factura compliance, and customs regulations.',
      link: 'https://www.sat.gob.mx/home'
    },
    {
      name: 'SRE (Secretaría de Relaciones Exteriores)',
      category: 'Foreign Affairs & Consular',
      description: 'Ministry of Foreign Affairs handling visa policy, consular services, and international relations. Consulates abroad process residence visa applications.',
      link: 'https://www.gob.mx/sre/en'
    },
    {
      name: 'Visit Mexico',
      category: 'Tourism & Travel',
      description: 'Official tourism board providing destination guides, travel planning resources, and event information across Mexico.',
      link: 'https://www.visitmexico.com/en/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to Mexico, consult the Secretaria de Relaciones Exteriores (SRE) or a Mexican embassy or consulate abroad. Mexico has one of the largest consular networks in the world, particularly in the United States.',
    directoryLink: 'https://www.embassypages.com/mexico',
    mfaLink: 'https://www.gob.mx/sre/en'
  },
  serviceDirectory: {
    title: "Service Directory - Mexico",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Mexico.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance with temporary and permanent residency, work permits, FMM extensions, and immigration compliance in Mexico.",
        providers: [
          { name: "Fragomen Mexico", link: "https://www.fragomen.com" },
          { name: "Ritch Mueller", link: "https://www.ritchmueller.com" },
          { name: "Basham, Ringe y Correa", link: "https://www.basham.com.mx" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms assisting with rentals and property purchases in Mexico's major cities and expat destinations.",
        providers: [
          { name: "Inmuebles24", link: "https://www.inmuebles24.com" },
          { name: "Century 21 Mexico", link: "https://www.century21mexico.com" },
          { name: "Engel & Volkers Mexico", link: "https://www.engelvoelkers.com/en-mx" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Firms advising on Mexican tax obligations, RFC registration, factura compliance, and cross-border income treatment.",
        providers: [
          { name: "PwC Mexico", link: "https://www.pwc.com/mx" },
          { name: "EY Mexico", link: "https://www.ey.com/es_mx" },
          { name: "KPMG Mexico", link: "https://kpmg.com/mx" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including customs clearance, shipping, and household moves to Mexico.",
        providers: [
          { name: "Crown Relocations Mexico", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "AGS Worldwide Movers Mexico", link: "https://www.agsmovers.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Spanish language schools and cultural immersion programs for newcomers across Mexico.",
        providers: [
          { name: "UNAM Language Center (CEPE)", link: "https://www.cepe.unam.mx" },
          { name: "International House Mexico", link: "https://ihworld.com" },
          { name: "Berlitz Mexico", link: "https://www.berlitz.com/es-mx" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major private hospital groups and healthcare providers commonly used by expats and residents in Mexico.",
        providers: [
          { name: "Hospital Angeles", link: "https://hospitalesangeles.com" },
          { name: "Medica Sur", link: "https://www.medicasur.com.mx" },
          { name: "Christus Muguerza", link: "https://www.christusmuguerza.com.mx" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms and platforms supporting local and international professionals seeking employment in Mexico.",
        providers: [
          { name: "OCC Mundial", link: "https://www.occ.com.mx" },
          { name: "Michael Page Mexico", link: "https://www.michaelpage.com.mx" },
          { name: "Hays Mexico", link: "https://www.hays.com.mx" }
        ]
      }
    ]
  }
};