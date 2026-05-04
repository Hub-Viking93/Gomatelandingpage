export const mauritius = {
  id: 'mauritius',
  slug: 'mauritius',
  name: 'Mauritius',
  region: 'Africa',
  complexity: 'Low-Medium',
  languages: ['English (official)', 'French (widely spoken)', 'Creole (daily life)'],
  shortDescription: 'A tropical island nation blending multicultural heritage, strong institutions, and a growing digital economy in the Indian Ocean.',
  heroImage: 'https://images.unsplash.com/photo-1582574643306-d00ea3f7d49b',
  flagAlt: 'Flag of Mauritius',
  atAGlance: "Mauritius is a small island nation in the Indian Ocean, roughly 2,000 km off the southeast coast of Africa, that punches far above its weight in governance, economic stability, and quality of life. Its population of around 1.3 million reflects a rich tapestry of Indian, Creole, Chinese, and European heritage, producing a society where Hindu temples sit next to mosques and Catholic churches, and where Diwali, Eid, and Chinese New Year are all public holidays. The official language is English, but daily life runs on Creole and French, with Hindi and other languages spoken at home. The country inherited strong legal and administrative systems from both France and Britain, and it has leveraged these into one of Africa's most stable democracies, a respected offshore financial center, and a tourism-driven economy. For newcomers, the pace is slower than a major metropolis, bureaucracy can be relaxed but occasionally opaque, and the warmth of the people is genuine. Life here revolves around food, family, the sea, and a deep pride in the island's multicultural identity.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 60-90 days visa-free (many nationalities)',
    costOfLiving: 'Medium',
    primaryLanguages: 'English (Official), French (Widely spoken), Creole (Daily life)',
  },
  visas: [
    {
      name: 'Tourist Visa / Visa-Free Entry',
      targetAudience: 'Tourists, Short-term visitors',
      useCase: 'Tourism, family visits, or short business trips. Citizens of many countries receive visa-free entry for 60 or 90 days.',
      duration: 'Up to 60-90 days (nationality dependent)',
      link: 'https://passport.govmu.org/passport/?page_id=605'
    },
    {
      name: 'Premium Visa (Remote Worker)',
      targetAudience: 'Remote workers, Digital nomads, Freelancers',
      useCase: 'Allows foreign nationals who work remotely for employers or clients outside Mauritius to live on the island for up to one year, renewable.',
      duration: 'Up to 1 year (renewable)',
      link: 'https://www.edbmauritius.org/premium-visa'
    },
    {
      name: 'Occupation Permit (OP)',
      targetAudience: 'Professionals, Investors, Self-employed',
      useCase: 'Combined work and residence permit for professionals earning above the salary threshold, investors meeting the minimum investment, and self-employed individuals.',
      duration: 'Up to 3 years (renewable)',
      link: 'https://www.edbmauritius.org/occupation-permit'
    },
    {
      name: 'Residence Permit',
      targetAudience: 'Retirees, Dependents, Long-term residents',
      useCase: 'For individuals who qualify through property investment (minimum USD 375,000 under specific schemes), retirement, or as dependents of permit holders.',
      duration: 'Up to 10 years (scheme dependent)',
      link: 'https://www.edbmauritius.org/residence-permit'
    },
    {
      name: 'Retired Non-Citizen Permit',
      targetAudience: 'Retirees (50+)',
      useCase: 'For non-citizens aged 50 and above who wish to retire in Mauritius and can demonstrate sufficient financial means (monthly transfer of at least USD 1,500 to a local bank account).',
      duration: 'Up to 10 years (renewable)',
      link: 'https://www.edbmauritius.org/residence-permit'
    }
  ],
  requirements: [
    {
      title: 'National Identity Card (NIC) / Foreigner ID',
      explanation: 'All residents in Mauritius, including foreign nationals with valid permits, are issued an identification number by the Civil Status Division. For foreigners with long-term permits, a foreigner registration card is issued.',
      importance: 'Required for opening bank accounts, signing rental contracts, registering a vehicle, and interacting with most government services. Without it, you are limited to tourist-level access.',
      link: 'https://civil-status.govmu.org/'
    },
    {
      title: 'Bank Account Opening',
      explanation: 'Major banks include MCB (Mauritius Commercial Bank), SBM (State Bank of Mauritius), and AfrAsia Bank. You will need your passport, proof of address in Mauritius, and your permit or visa documentation.',
      importance: 'Essential for receiving salary, paying rent, setting up utilities, and accessing local financial services. International transfers to/from Mauritius are straightforward but KYC requirements can be thorough.',
      link: 'https://www.mcb.mu/'
    },
    {
      title: 'Tax Registration (MRA)',
      explanation: 'If you earn income in Mauritius or become a tax resident (183 days or more per year), you must register with the Mauritius Revenue Authority (MRA). The flat income tax rate is 15%.',
      importance: 'Non-compliance results in penalties. Mauritius has a favorable tax regime with no capital gains tax, no inheritance tax, and a flat 15% income tax rate, which is a significant draw for professionals and investors.',
      link: 'https://www.mra.mu/'
    },
    {
      title: 'Driving License Conversion',
      explanation: 'Foreign driving licenses can be used for up to a year. After that, you must convert to a Mauritian license by applying through the National Transport Authority (NTA). Some nationalities can convert directly; others require a driving test.',
      importance: 'Driving is the most practical way to get around outside of the main urban areas. Public transport exists but is limited in coverage and frequency, especially in the evenings and weekends.',
      link: 'https://nta.govmu.org/'
    }
  ],
  jobsAndIncome: {
    overview:
      "The Mauritian economy is driven by financial services, tourism, ICT/BPO, textiles, and real estate. The Economic Development Board (EDB) actively promotes the island as a hub for fintech, outsourcing, and remote work. English and French are both used in business, though French often dominates in day-to-day professional communication.",
    whereToLook: [
      "MyJob.mu (largest local job board)",
      "LinkedIn",
      "Economic Development Board (EDB) for permits and investment opportunities",
      "Recruitment agencies: Adecco Mauritius, Alentaris, Myjob.mu"
    ],
    realityChecks: [
      "Salaries are significantly lower than in Europe or North America, but so is the cost of living.",
      "French language skills are a strong advantage in many workplaces.",
      "Networking and personal connections matter heavily in the local job market.",
      "The Premium Visa does not permit local employment; you must work for clients or employers outside Mauritius."
    ]
  },
  salaryReality: {
    overview:
      "Local salaries range widely. Entry-level roles may start around MUR 15,000-25,000/month, while experienced professionals in finance or IT can earn MUR 60,000-150,000+. Remote workers on Premium Visas typically earn international salaries, giving them a very comfortable lifestyle.",
    realityChecks: [
      "The flat 15% income tax rate is attractive, but social contributions (CSG) apply on top.",
      "No capital gains tax and no inheritance tax make Mauritius appealing for wealth structuring.",
      "Cost of imported goods (electronics, cars, certain foods) is high due to shipping and duties."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "CSG (Contribution Sociale Generalisee) deductions",
      "Cost of imported goods and vehicle duties",
      "Rent in expat-popular areas (Grand Baie, Tamarin, Flic-en-Flac) is significantly higher than local averages"
    ]
  },
  housingSystem: {
    overview:
      "The rental market is relatively accessible compared to many countries. Furnished apartments and villas are widely available, especially in coastal towns popular with expats such as Grand Baie, Tamarin, Flic-en-Flac, and Pereybere. Rental contracts are typically negotiated directly with landlords or through local agents. A one-bedroom apartment can range from MUR 15,000-30,000/month locally to MUR 40,000-80,000+ in expat-popular coastal areas.",
    expectations:
      "Always view properties in person before committing. Verify the landlord's ownership documents. Security deposits of 1-3 months are standard. Many landlords prefer dealing in person and may not list online. Word of mouth and local Facebook groups are surprisingly effective for finding rentals."
  },
  healthcareReality:
    "Mauritius has a public healthcare system that provides free treatment at government hospitals and clinics, though quality and waiting times vary. Most expats and higher-income residents use private clinics such as C-Care (Darne Clinic), City Clinic, and Wellkin Hospital, which offer good standards of care at reasonable prices. Comprehensive health insurance is strongly recommended. Serious or complex cases may require medical evacuation to South Africa, India, or Europe.",
  digitalLife: {
    overview:
      "Internet connectivity is good in urban and coastal areas, with fiber broadband widely available. Mobile coverage is reliable across the island. The government has been pushing digital services, and many administrative tasks can be initiated online.",
    essentials: [
      "Emtel, my.t (Mauritius Telecom), or MTML for mobile SIM cards",
      "my.t or Emtel fiber for home broadband",
      "Juice (mobile payment app by MCB)",
      "Government e-services portal (govmu.org)"
    ],
    whatSurprisesNewcomers: [
      "Fiber internet speeds are competitive (up to 100 Mbps+), making remote work very viable.",
      "Mobile data is affordable with prepaid plans readily available at the airport.",
      "Some government processes still require in-person visits despite online portals existing.",
      "Power outages are rare but can happen; a UPS is a worthwhile investment for remote workers."
    ]
  },
  culture: {
    text: 'Mauritius is one of the most culturally diverse small nations on Earth. Hindu, Muslim, Christian, and Chinese communities have coexisted for generations, creating a unique fusion visible in the food, festivals, and daily interactions. The culture is warm, family-oriented, and social. Sharing food is a core expression of hospitality. The concept of "morisien" (being Mauritian) transcends ethnic lines, and most people are multilingual, switching fluidly between Creole, French, English, and other languages within a single conversation.',
    highlights: [
      'Food is central to social life. Refusing offered food can be seen as impolite.',
      'Religious and cultural festivals are celebrated by everyone, regardless of background.',
      'Creole is the language of warmth and humor; learning a few phrases earns genuine appreciation.',
      'Respect for elders is deeply ingrained and extends to professional settings.',
      'The pace of life is slower than in major global cities. Patience is both necessary and rewarded.'
    ]
  },
  transportationMobility:
    "Driving is on the left (British legacy). The road network covers the island well, but traffic congestion is a growing problem, especially around Port Louis during rush hours. The Metro Express light rail connects Curepipe to Port Louis and is expanding. Buses cover most of the island but can be slow and infrequent outside peak hours. Taxis are widely available but meters are not always used; agree on a fare before departing. Car rental is the most practical option for newcomers exploring the island.",
  internationalConnectivity:
    "Sir Seewoosagur Ramgoolam International Airport (MRU) serves as the main gateway, with direct flights to major hubs including Paris, London, Dubai, Johannesburg, Mumbai, and several African cities. Air Mauritius is the national carrier. The island's position in the Indian Ocean makes it a natural bridge between Africa, Asia, and Europe, though flight times to most destinations are substantial (4-6 hours to South Africa, 10-12 hours to Europe).",
  travelExploration:
    "The island is compact (roughly 65 km by 45 km) and can be driven around in a day, but each region has a distinct character. The north (Grand Baie) is lively and tourist-oriented, the west coast (Flic-en-Flac, Tamarin) is popular with surfers and expats, the south is rugged and less developed, and the east coast has some of the best beaches. The central plateau (Curepipe, Quatre Bornes) is cooler and more residential. Day trips to Rodrigues Island (by plane or ship) and nearby Reunion Island (French territory) are popular weekend escapes.",
  considerations: [
    'Cyclone Season (November-April): Tropical cyclones can disrupt daily life for several days. The country has an effective early warning system with numbered alerts (Class 1-4). Stock up on essentials and follow official advisories when a cyclone approaches.',
    'Humidity and Heat: The tropical climate means high humidity year-round. Coastal areas benefit from sea breezes, but the central plateau is cooler. Mold prevention in homes requires attention, especially during the wet season.',
    'Bureaucratic Pace: While Mauritius is efficient by regional standards, government processes can still move slowly. Permit approvals, license conversions, and official registrations may take longer than expected. Build buffer time into your plans.',
    'Import Duties on Vehicles and Goods: Cars are heavily taxed (excise duty can double the price). Electronics and imported specialty foods also carry significant markups. Budget accordingly.',
    'Water Supply: Some areas experience periodic water rationing, especially during the dry season. Having storage tanks is common practice for houses and recommended.'
  ],
  mistakes: [
    'Assuming everything runs on "island time." While the pace is relaxed, government offices and banks have strict hours and showing up late means being turned away.',
    'Not learning basic Creole. English is official but Creole is the social glue. Even simple phrases like "Ki manyer?" (How are you?) open doors.',
    'Renting a property without seeing it in person. Photos can be misleading, and verifying the landlord and property condition before signing is essential.',
    'Underestimating UV exposure. The tropical sun is intense year-round, and sunburn happens fast, even on overcast days. High SPF sunscreen is a daily necessity.',
    'Ignoring cyclone preparation. When a Class 3 or 4 alert is issued, everything shuts down. Having water, batteries, candles, and non-perishable food stored is not optional.'
  ],
  emergency: [
    {
      number: '999',
      service: 'Police',
      description: 'National police emergency line. Available 24/7.'
    },
    {
      number: '114',
      service: 'SAMU (Ambulance)',
      description: 'Emergency medical services and ambulance dispatch. Available 24/7.'
    },
    {
      number: '115',
      service: 'Fire Services',
      description: 'Fire and rescue emergency services. Available 24/7.'
    }
  ],
  sources: [
    {
      name: 'Economic Development Board (EDB)',
      category: 'Immigration & Investment',
      description: 'The central agency for permits, visas, and investment facilitation in Mauritius.',
      link: 'https://www.edbmauritius.org/'
    },
    {
      name: 'Passport and Immigration Office',
      category: 'Immigration',
      description: 'Official government portal for visa requirements, entry conditions, and immigration procedures.',
      link: 'https://passport.govmu.org/'
    },
    {
      name: 'Mauritius Revenue Authority (MRA)',
      category: 'Tax',
      description: 'Official tax authority for income tax, VAT, and customs information.',
      link: 'https://www.mra.mu/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Mauritius, consult the Mauritius Ministry of Foreign Affairs or a Mauritian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/mauritius',
    mfaLink: 'https://foreign.govmu.org/'
  },
  serviceDirectory: {
    title: "Service Directory - Mauritius",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Mauritius.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal assistance for visa applications, work permits, and residency matters.",
        providers: [
          { name: "Axis Corporate Solutions", link: "https://www.axis.mu" },
          { name: "Appleby Mauritius", link: "https://www.applebyglobal.com/mauritius" },
          { name: "BLC Robert & Associates", link: "https://www.blc.mu" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Property agents handling sales, rentals, and relocation housing for expats.",
        providers: [
          { name: "Lexpress Property", link: "https://www.lexpressproperty.com" },
          { name: "Mauritius Sotheby's International Realty", link: "https://www.sothebysrealty.mu" },
          { name: "Real Estate Mauritius (realestate.mu)", link: "https://www.realestate.mu" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Mauritian tax laws, corporate structuring, and compliance.",
        providers: [
          { name: "KPMG Mauritius", link: "https://kpmg.com/mu" },
          { name: "EY Mauritius", link: "https://www.ey.com/en_mu" },
          { name: "Deloitte Mauritius", link: "https://www.deloitte.com/mu" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International shipping, packing, customs clearance, and local relocation services.",
        providers: [
          { name: "AGS Movers Mauritius", link: "https://www.agsmovers.com/en/our-agencies/mauritius" },
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "White & Co Mauritius", link: "https://www.whiteandcompany.co.uk" }
        ]
      },
      {
        name: "Language Tutors",
        description: "French and Creole language courses to help you integrate into daily life.",
        providers: [
          { name: "Alliance Francaise Maurice", link: "https://www.afmaurice.com" },
          { name: "Berlitz Mauritius", link: "https://www.berlitz.com" },
          { name: "Mauritius Institute of Education", link: "https://www.mie.ac.mu" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private clinics and hospitals offering quality medical care for expats and residents.",
        providers: [
          { name: "C-Care (Darne Clinic / Wellkin Hospital)", link: "https://www.c-care.com" },
          { name: "City Clinic", link: "https://www.cityclinic.mu" },
          { name: "Fortis Clinique Darne", link: "https://www.fortishealthcare.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms connecting international and local talent with Mauritian employers.",
        providers: [
          { name: "Adecco Mauritius", link: "https://www.adecco.mu" },
          { name: "Alentaris", link: "https://www.alentaris.com" },
          { name: "MyJob.mu", link: "https://www.myjob.mu" }
        ]
      }
    ]
  }
};
