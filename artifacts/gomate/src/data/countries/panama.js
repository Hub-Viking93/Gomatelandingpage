export const panama = {
  id: 'panama',
  slug: 'panama',
  name: 'Panama',
  region: 'Americas',
  complexity: 'Medium',
  languages: ['Spanish'],
  shortDescription: 'A global business hub with tropical weather and tax-friendly residency options.',
  heroImage: 'https://images.unsplash.com/photo-1540610410855-b4c8877b761c?q=80&w=2548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  flagAlt: 'Flag of Panama',
  atAGlance: "Panama is a country of dramatic contrasts. Panama City is a hypermodern metropolis of gleaming skyscrapers, international banking towers, and luxury malls that could be mistaken for Miami or Singapore — the city has the most skyscrapers in Latin America outside of Sao Paulo and Mexico City. Drive an hour in any direction, and you are in lush tropical rainforest, indigenous Embera communities, or laid-back Caribbean beach towns where life moves at a completely different pace. The country's unique position as the narrowest point between the Atlantic and Pacific oceans has shaped its identity as a global crossroads: the Panama Canal remains one of the world's most important trade routes, and the country functions as a banking, logistics, and corporate hub for all of Latin America. For foreign residents, Panama is one of the easiest and most welcoming countries in the Americas. The Friendly Nations Visa provides a straightforward path to permanent residency for citizens of about 50 countries. The Pensionado (retiree) visa offers some of the most generous retiree benefits in the world. The US dollar is the de facto currency (alongside the symbolic balboa), providing economic stability that is rare in Latin America. There is no personal income tax on foreign-earned income under Panama's territorial tax system, making it a popular base for remote workers, entrepreneurs, and retirees. However, the tropical humidity is constant and intense, bureaucracy moves at a glacial pace requiring legal assistance for virtually everything, and the cost of living — particularly in Panama City — is higher than most newcomers expect for Central America.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: '90-180 days (Tourist)',
    costOfLiving: 'Medium',
    primaryLanguages: 'Spanish, English (in business)',
  },
  visas: [
    {
      name: 'Friendly Nations Visa (Visa de Paises Amigos)',
      targetAudience: 'Citizens of ~50 approved countries',
      useCase: 'One of the most popular residency programs in the Americas. Available to citizens of approximately 50 countries that Panama designates as "friendly nations" (including the US, UK, Canada, most of the EU, Australia, and others). Requires either a confirmed job offer from a Panamanian company, registration of a Panamanian corporation, or purchase of real estate worth at least $200,000 USD. Also requires a bank deposit of $5,000 in a Panamanian bank, a clean criminal record, and a health certificate. Leads directly to permanent residency.',
      duration: 'Permanent residency (cedula valid for 10 years)',
      link: 'https://www.migracion.gob.pa/'
    },
    {
      name: 'Pensionado Visa (Jubilado/Pensionado)',
      targetAudience: 'Retirees with verified pension income',
      useCase: 'Arguably the most famous retiree visa program in the world. Requires a lifetime pension of at least $1,000 USD/month from a government or private pension fund. Grants permanent residency plus an extraordinary package of discounts: 25% off domestic airline tickets, 25% off utility bills, 50% off entertainment and hotel stays, 15% off hospital bills, and more. No minimum age requirement — you only need to prove the pension income.',
      duration: 'Lifetime (with annual renewal of cedula)',
      link: 'https://www.migracion.gob.pa/'
    },
    {
      name: 'Short Stay Visa for Remote Workers',
      targetAudience: 'Digital nomads, Remote workers',
      useCase: 'Introduced in 2021, this visa allows remote workers earning at least $3,000 USD/month from a foreign employer or clients to live in Panama. Requires proof of employment or contracts with foreign entities, health insurance, and a clean criminal record. Renewable once for an additional 9 months.',
      duration: '9 months, renewable once (total 18 months)',
      link: 'https://www.migracion.gob.pa/'
    },
    {
      name: 'Self-Economic Solvency Visa (Solvencia Economica)',
      targetAudience: 'Investors, Property buyers',
      useCase: 'For individuals making a qualifying investment in Panama: purchase of real estate worth at least $300,000 USD, or a fixed-term bank deposit of at least $300,000 USD in a Panamanian bank. Leads to permanent residency without requiring employment or business operation.',
      duration: 'Permanent residency',
      link: 'https://www.migracion.gob.pa/'
    },
    {
      name: 'Qualified Investor Visa',
      targetAudience: 'High-net-worth investors',
      useCase: 'Fast-track permanent residency for individuals investing at least $300,000 USD in Panama real estate (with title), or $500,000 in a Panamanian bank fixed deposit, or $500,000 in Panama Stock Exchange securities. Processing is expedited compared to other visa categories.',
      duration: 'Permanent residency (fast-track processing)',
      link: 'https://www.migracion.gob.pa/'
    }
  ],
  requirements: [
    {
      title: 'E-Cedula (Foreign Resident ID)',
      explanation: 'The national identification card issued to foreign residents of Panama. The "E" prefix distinguishes foreign resident cedulas from Panamanian citizen cedulas. It is a plastic card with your photo, cedula number, and residence status. Issued by the Tribunal Electoral after your immigration status is approved.',
      importance: 'The E-Cedula is your primary identification in Panama. You need it for opening bank accounts, signing contracts, purchasing vehicles, enrolling children in school, accessing government services, and virtually every official interaction. It replaces your passport as your day-to-day ID. Carry it at all times. The initial issuance process can take several months after residency approval.',
      link: 'https://www.tribunal-electoral.gob.pa/'
    },
    {
      title: 'Panamanian Bank Account',
      explanation: 'Opening a bank account in Panama is a critical step but has become increasingly difficult due to international anti-money laundering regulations. Major banks include Banco General, Banistmo (owned by Bancolombia), Global Bank, and BAC Credomatic. Requirements include passport, secondary ID, reference letters from your home bank, proof of income, and proof of address.',
      importance: 'A local bank account is essential for receiving funds, paying rent, managing utilities, and daily transactions. Due diligence requirements mean banks can be selective about foreign clients — having your immigration lawyer introduce you to the bank and preparing comprehensive documentation in advance significantly speeds up the process. Expect the account opening process to take 2-4 weeks.',
      link: 'https://www.superbancos.gob.pa/'
    },
    {
      title: 'Immigration Lawyer',
      explanation: 'While not a legal requirement, using a licensed Panamanian immigration lawyer (abogado de inmigracion) is practically essential for any residency application. Lawyers handle document preparation, government submissions, follow-ups, and the complex coordination between immigration (Servicio Nacional de Migracion), the Tribunal Electoral, and other agencies.',
      importance: 'The Panamanian immigration process involves multiple government agencies, specific document formats (apostilled, translated, authenticated), and timing requirements that are nearly impossible to navigate without professional help. A good lawyer costs $2,000-5,000 USD for a standard Friendly Nations Visa application, including government fees. This is not optional — it is the cost of doing business in Panama.',
      link: 'https://www.migracion.gob.pa/'
    },
    {
      title: 'Health Insurance',
      explanation: 'While not always mandatory for all visa categories, health insurance is required for the Digital Nomad Visa and recommended for all residents. Panama has both public healthcare (CSS — Caja de Seguro Social) and private healthcare. Private insurance from international providers (Cigna, AXA, Pacific Cross) or local providers is standard for foreign residents.',
      importance: 'The public CSS system is available to those contributing through formal employment, but wait times are long and facilities variable. Most foreign residents use private healthcare exclusively. Having insurance is increasingly required for visa applications and renewals, and out-of-pocket costs at private hospitals can be significant for serious conditions.',
      link: 'https://www.css.gob.pa/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Panama's economy is driven by the Canal, banking and financial services, logistics (the Colon Free Zone is the second-largest free trade zone in the world after Hong Kong), real estate, and tourism. The job market for foreigners is concentrated in multinational companies with regional Latin American operations, banking, law, logistics, and hospitality. Spanish is the working language for virtually all local employment; English is used in international corporate environments and banking.",
    whereToLook: [
      "LinkedIn",
      "Konzerta Panama (largest local job portal)",
      "CompuTrabajo Panama",
      "Multinational company career pages (Copa Airlines, Caterpillar, Procter & Gamble)",
      "Panama Chamber of Commerce job listings"
    ],
    realityChecks: [
      "Many positions are legally restricted to Panamanian citizens. For every foreign employee, a company must typically employ a minimum number of Panamanian nationals (the ratio varies by industry but is generally 9:1 or 10:1).",
      "Work permits are employer-specific and require the company to justify why a foreign worker is needed. Processing can take months. Many companies prefer candidates who already have residency status.",
      "Spanish is essential for local employment outside of international corporate roles. English-only speakers are limited to multinational offices, banking, and tourism.",
      "Personal connections and networking are far more important than formal job applications. Panama's business community is relatively small, and relationships drive hiring decisions."
    ]
  },
  salaryReality: {
    overview:
      "Local salaries in Panama are lower than in North America or Europe but higher than in most other Central American countries. The minimum wage is approximately $700-900 USD/month (varies by industry and region). Professional salaries range from $1,500-4,000 USD/month for mid-level roles, with banking and multinational management positions reaching $5,000-10,000+. Panama's territorial tax system means foreign-sourced income is not taxed, making it financially attractive for remote workers and entrepreneurs operating internationally.",
    realityChecks: [
      "Panama's territorial tax system is a major draw: only income earned from Panamanian sources is taxed. Income earned from foreign clients, foreign employers, or foreign investments is tax-free. This applies to all residents, not just special visa holders.",
      "Local salaries for Panamanian employees rarely support what most foreigners consider a comfortable lifestyle, particularly in Panama City where costs are higher than expected for Central America.",
      "The 13th month pay (decimo tercer mes) is mandatory — employees receive an additional month's salary split into three payments throughout the year (April, August, December).",
      "Benefits vary widely by employer. Multinational companies often provide health insurance, education allowances, and relocation packages, while local companies typically offer the legal minimum."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The real cost of living in Panama City, which is closer to a mid-tier US city than to the 'cheap Central America' image many newcomers expect — supermarket prices for imported goods are near US levels",
      "Private healthcare and international school costs, which are the two largest non-housing expenses for expat families",
      "The cost and time of the residency process itself — lawyer fees, government fees, apostilles, translations, and bank deposits can total $5,000-10,000+ before you even start earning locally",
      "Air conditioning costs, which are substantial in the tropical heat and can add $100-300/month to electricity bills"
    ]
  },
  housingSystem: {
    overview:
      "Panama City has a large supply of modern high-rise apartments, making it a renter-friendly market. Popular expat neighborhoods include Punta Pacifica (modern towers, close to hospitals), Costa del Este (family-friendly, newer development), El Cangrejo (central, mid-range), Casco Viejo (historic district, renovated colonial buildings), and Clayton (former US military base, spacious, green). Outside Panama City, Boquete (highland mountain town) and Coronado (Pacific beach community) are popular with retirees. Rents in Panama City for a modern one-bedroom apartment range from $800-1,500/month in popular areas, with two-bedrooms at $1,200-2,500.",
    expectations:
      "Search on Encuentra24.com (Panama's main classifieds), Compreoalquile.com, and Facebook groups (Expats in Panama, Panama Real Estate). Many apartments are rented furnished. Leases are typically one year, with a security deposit of one to two months' rent. Verify that the building's maintenance fees (cuota de mantenimiento) and what they cover (gym, pool, security) are clearly explained. Air conditioning efficiency matters enormously — check the AC units, ask about typical electricity bills, and verify that the unit has cross-ventilation or proper insulation. Some newer buildings have centralized gas for hot water and stove, which is cheaper than electric."
  },
  healthcareReality:
    "Panama has two parallel healthcare systems. The public CSS (Caja de Seguro Social) system is available to formally employed workers and provides free or low-cost care, but wait times are long and facilities vary in quality. Most foreign residents use private healthcare exclusively. Hospital Punta Pacifica (affiliated with Johns Hopkins Medicine International) is the flagship private hospital in Panama City, offering US-comparable quality for major procedures. Hospital Nacional and Clinica Hospital San Fernando also serve the expat community. A specialist consultation costs $50-100 USD privately. Outside Panama City, healthcare quality drops significantly — Boquete, Coronado, and other popular expat towns have clinics but limited capability. For serious conditions, travel to Panama City is often necessary. Dental care is excellent and significantly cheaper than in the US, attracting dental tourists from North America. Private health insurance from international providers (Cigna, AXA, BlueCross) or local companies (ASSA, Mapfre) costs $100-400/month depending on age and coverage level.",
  digitalLife: {
    overview:
      "Panama's digital infrastructure is improving but remains uneven. Internet in Panama City is generally reliable with fiber broadband from providers like Cable Onda (now Tigo), Cable & Wireless (CWP), and Claro. Mobile coverage (4G) is good in urban areas but patchy in rural and mountainous regions. Government services are increasingly online but many processes still require in-person visits.",
    essentials: [
      "WhatsApp (the primary communication tool for everything — landlords, businesses, government contacts, social life)",
      "Yappy or Nequi (mobile payment apps from Banco General and Banistmo, increasingly used for daily transactions)",
      "Uber or InDriver (ride-hailing in Panama City — Uber is the most reliable)",
      "PedidosYa or Appetito24 (food delivery services)"
    ],
    whatSurprisesNewcomers: [
      "WhatsApp is not just messaging — it is the primary business communication tool. Lawyers, banks, doctors, and government contacts all communicate via WhatsApp. Having the app is non-negotiable.",
      "Cash (US dollars) is still important despite growing digital payments. Many smaller businesses, taxis, and street vendors deal in cash only. Keep small bills available — many places struggle with change for $50 and $100 notes.",
      "Internet reliability drops sharply outside Panama City. If you plan to work remotely from Boquete, Coronado, or other non-urban locations, verify internet speed and provider options before committing to a lease.",
      "Government digital services exist (Panamadigital.gob.pa) but are often poorly maintained and may not work as expected. For critical processes, plan for an in-person visit as backup."
    ]
  },
  culture: {
    text: 'Panama is an international crossroads with a unique cultural identity shaped by its canal, its indigenous peoples, its Afro-Caribbean communities, its Spanish colonial heritage, and nearly a century of US presence in the Canal Zone. The result is a society that is more cosmopolitan and ethnically diverse than most Latin American countries. "Manana" culture is real — things happen on their own timeline, urgency is rare, and patience is the most important virtue you can develop. Family is central to social life, and personal relationships precede business transactions. Dress code in Panama City is surprisingly formal for the tropics: men wear long pants and closed shoes (never shorts) to banks, government offices, and many business meetings, even in 32C heat with high humidity. Carnival (four days before Ash Wednesday) is the biggest cultural event, when the entire country shuts down for music, dancing, and water fights.',
    highlights: [
      'Greetings involve a kiss on the cheek (one cheek) between men and women, and between women. Handshakes are standard between men in business settings. Physical warmth in greetings is expected.',
      'Do not wear shorts, tank tops, or sandals to banks, government offices, or formal business meetings. You may be denied entry. This dress code surprises many newcomers who expect a relaxed tropical atmosphere.',
      'Carnival (Carnavales) is a 4-day national celebration before Ash Wednesday. The country essentially shuts down for parades, music, water fights (culecos), and parties. Las Tablas and Panama City have the biggest celebrations.',
      'Punctuality is flexible in social settings — arriving 15-30 minutes late is normal. Business meetings at multinational companies tend to be more punctual, but government appointments rarely start on time.',
      '"Juega vivo" is a cultural concept meaning "playing smart" or being street-savvy. It reflects a cultural admiration for cleverness and resourcefulness. Understanding this mindset helps navigate negotiations and daily interactions.'
    ]
  },
  transportationMobility:
    "Panama City has a modern metro system (Metro de Panama) with two lines connecting major areas of the city, running from approximately 5 AM to 11 PM. Line 1 runs north-south from Albrook to San Isidro, while Line 2 runs east to Nuevo Tocumen near the airport. The metro is clean, air-conditioned, and affordable (B/ 0.35 per ride). The MetroBus system supplements the metro with extensive bus coverage. Despite the metro, most residents drive or use ride-hailing — Panama City traffic is notoriously bad, particularly on the main corridors (Via Espana, Corredor Sur/Norte, Avenida Balboa) during rush hours. Uber operates citywide and is the most practical daily transport option. Outside the capital, intercity buses connect major towns, and colectivos (shared minibuses) serve rural routes. The Pan-American Highway connects Panama City to David (the second-largest city, gateway to Boquete) in about 6 hours. Internal flights from Albrook Airport connect to Bocas del Toro, the San Blas Islands, and other destinations not easily reached by road.",
  internationalConnectivity:
    "Tocumen International Airport (PTY) is the largest and most important aviation hub in Central America, serving as the home base for Copa Airlines, one of Latin America's most extensive airlines. Copa connects Panama directly to over 80 destinations across the Americas, including virtually every major city in North, Central, and South America, plus direct flights to several European cities. Flight time to Miami is approximately 3 hours, to New York 5 hours, to Bogota 1.5 hours, to Mexico City 5 hours, and to Madrid approximately 10 hours. The airport is located 24 km from the city center (about 30-45 minutes by taxi or Uber). Panama's position as a geographic and commercial hub makes it one of the best-connected cities in Latin America for international travel.",
  travelExploration:
    "Panama packs extraordinary biodiversity and natural beauty into a country smaller than South Carolina. The San Blas Islands (Guna Yala), an autonomous indigenous territory of 365 islands, offer pristine Caribbean waters and a unique cultural experience. Bocas del Toro on the Caribbean coast is a backpacker and surfer favorite with overwater bungalows and reggae vibes. Boquete, a highland town at 1,200 meters in the Chiriqui province, offers world-class coffee (some of the most expensive in the world), the Quetzal Trail through cloud forest, and cool mountain temperatures. The Panama Canal itself is a must-see — the Miraflores Locks visitor center provides dramatic close-up views of ships transiting. Casco Viejo (the old quarter of Panama City) is a UNESCO World Heritage Site with restored colonial architecture, rooftop bars, and art galleries. Coiba National Park, a former prison island, is now a UNESCO-listed marine reserve with exceptional diving. Weekend trips from Panama City to beaches (Santa Catalina, Pedasi, Coronado), mountains (Boquete, El Valle de Anton), and islands (San Blas, Bocas) are all feasible.",
  considerations: [
    'Humidity and Heat: Panama City has tropical heat with high humidity year-round (28-33C). The rainy season (May through December) brings intense afternoon downpours — short but drenching. Air conditioning is a necessity, not a comfort, and electricity costs reflect this. The highland towns (Boquete, El Valle) are significantly cooler.',
    'Cost Surprise: Panama is not as cheap as many Central American countries. Panama City supermarket prices for imported goods are near US levels. Dining out, housing, and international schooling costs surprise many newcomers who expected the prices of Guatemala or Nicaragua. Budget accordingly.',
    'Bureaucratic Speed: Every official process — immigration, banking, vehicle registration, business licensing — moves slowly and requires extensive documentation. Apostilled and translated documents from your home country are standard requirements. A good lawyer is not optional; it is essential infrastructure for living in Panama.',
    'Traffic: Panama City traffic congestion is severe, particularly during rush hours (7-9 AM, 5-7 PM). The city was not designed for the volume of cars it now handles. Living near the metro line or near your workplace significantly improves quality of life.',
    'Rainy Season: From May through December, heavy afternoon rainstorms are nearly daily occurrences. They are typically short (30-90 minutes) but intense, causing flash flooding in low-lying areas. Keep an umbrella or rain jacket at all times, and be aware that some roads flood during heavy rain.'
  ],
  mistakes: [
    'Thinking English is sufficient everywhere. In Panama City\'s international banking district and expat areas, English works. Everywhere else — government offices, local businesses, neighborhoods, medical clinics — Spanish is essential. Without Spanish, you will need a translator for most administrative processes.',
    'Wearing beach or casual clothing in formal settings. Panama City has a surprisingly strict dress code for banks, government offices, and many restaurants. Shorts, flip-flops, and tank tops will get you turned away. Long pants, closed shoes, and a collared shirt are the minimum for men.',
    'Getting frustrated with bureaucratic pace. Immigration processes, bank account openings, and government interactions take far longer than newcomers expect. Fighting the system creates enemies; patience and politeness get results. Invest in a good lawyer and let them navigate the system.',
    'Comparing Panama to other Central American countries. Panama has its own distinct identity, heavily influenced by the Canal, the US military presence (until 1999), its banking sector, and its position as a global crossroads. It is wealthier, more cosmopolitan, and more expensive than its neighbors, and Panamanians are proud of these distinctions.',
    'Underestimating the residency process timeline. Even the relatively straightforward Friendly Nations Visa takes 3-6 months to complete. During this period, you may need a multiple-entry visa to travel while your status is pending. Plan your travel and document needs accordingly.'
  ],
  emergency: [
    {
      number: '911',
      service: 'General Emergency (Police, Fire, Ambulance)',
      description: 'Unified emergency number for all services. Operators primarily speak Spanish; English-speaking operators may be available.'
    },
    {
      number: '104',
      service: 'National Police (Policia Nacional)',
      description: 'Direct line to the Panamanian National Police for crime reporting and security emergencies.'
    },
    {
      number: '103',
      service: 'Fire Department (Bomberos)',
      description: 'Fire brigade emergency line. The Bomberos also respond to rescue and some medical emergencies.'
    }
  ],
  sources: [
    {
      name: 'Servicio Nacional de Migracion',
      category: 'Immigration & Residency',
      description: 'National Immigration Service managing all visa categories, residency applications, and immigration enforcement.',
      link: 'https://www.migracion.gob.pa/'
    },
    {
      name: 'Tribunal Electoral',
      category: 'Civil Registry & ID',
      description: 'Authority issuing cedulas (national ID cards), managing civil registration, and electoral services.',
      link: 'https://www.tribunal-electoral.gob.pa/'
    },
    {
      name: 'Superintendencia de Bancos',
      category: 'Banking & Finance',
      description: 'Banking regulator overseeing all financial institutions in Panama and providing consumer information.',
      link: 'https://www.superbancos.gob.pa/'
    },
    {
      name: 'Visit Panama (ATP)',
      category: 'Tourism & Travel',
      description: 'Official tourism authority providing guides to destinations, events, and travel information.',
      link: 'https://www.visitpanama.com/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to Panama, consult the Panamanian Ministry of Foreign Affairs or a Panamanian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/panama',
    mfaLink: 'https://mire.gob.pa/'
  },
  serviceDirectory: {
    title: "Service Directory - Panama",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Panama.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal assistance for Friendly Nations Visa, Pensionado, investor visas, and residency processing.",
        providers: [
          { name: "Morgan & Morgan Panama", link: "https://morimor.com" },
          { name: "Arias Panama", link: "https://ariaslaw.com" },
          { name: "Fragomen Panama", link: "https://www.fragomen.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Professionals handling property rentals and purchases in Panama City, Boquete, and beach communities.",
        providers: [
          { name: "Encuentra24 (Classifieds)", link: "https://www.encuentra24.com" },
          { name: "Century 21 Panama", link: "https://www.century21panama.com" },
          { name: "Engel & Volkers Panama", link: "https://www.engelvoelkers.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Panama's territorial tax system, corporate structures, and international tax planning.",
        providers: [
          { name: "PwC Panama", link: "https://www.pwc.com/pa" },
          { name: "Deloitte Panama", link: "https://www2.deloitte.com/pa" },
          { name: "KPMG Panama", link: "https://kpmg.com/pa" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and local relocation services including shipping, customs clearance, and storage.",
        providers: [
          { name: "Crown Relocations Panama", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "AGS Worldwide Movers Panama", link: "https://www.agsmovers.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Spanish language schools and immersion programs for newcomers.",
        providers: [
          { name: "EPA! Espanol en Panama", link: "https://epapanama.com" },
          { name: "Spanish Panama", link: "https://spanishpanama.com" },
          { name: "Berlitz Panama", link: "https://www.berlitz.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major private hospitals and medical networks commonly used by foreign residents.",
        providers: [
          { name: "Hospital Punta Pacifica (Johns Hopkins affiliated)", link: "https://www.hospitalpuntapacifica.com" },
          { name: "Hospital Nacional", link: "https://hospitalnacional.com" },
          { name: "Clinica Hospital San Fernando", link: "https://www.hospitalsanfernando.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms and platforms supporting local and international professionals in Panama.",
        providers: [
          { name: "Michael Page Panama", link: "https://www.michaelpage.com.pa" },
          { name: "Manpower Panama", link: "https://www.manpowergroup.com.pa" },
          { name: "Konzerta Panama", link: "https://www.konzerta.com" }
        ]
      }
    ]
  }
};
