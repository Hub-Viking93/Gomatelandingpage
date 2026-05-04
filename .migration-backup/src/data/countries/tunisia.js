export const tunisia = {
  id: 'tunisia',
  slug: 'tunisia',
  name: 'Tunisia',
  region: 'Africa',
  complexity: 'Medium',
  languages: ['Arabic', 'French'],
  shortDescription: 'A blend of Arab and Mediterranean lifestyles with a low cost of living.',
  heroImage: 'https://images.unsplash.com/photo-1556901599-6cd86f3da8b1?',
  flagAlt: 'Flag of Tunisia',
  atAGlance: "Tunisia is the smallest country in North Africa, wedged between Algeria and Libya along the Mediterranean coast, yet it punches above its weight in cultural richness and livability. It is the most progressive and secular of the Arab states, with a constitution that guarantees gender equality, a legal system based on French civil law, and a social atmosphere where you can drink wine in a sidewalk cafe in Tunis while the call to prayer echoes from a nearby mosque. The country blends Arab, Berber, French colonial, and Mediterranean influences into a distinctive identity that feels neither fully African, nor fully Arab, nor fully European — but uniquely Tunisian. The cost of living is extremely low by European standards, making it attractive to remote workers, retirees, and those seeking an affordable Mediterranean lifestyle just a 2-hour flight from Paris. Daily life requires understanding the deeply bureaucratic administrative culture, a legacy of French colonial governance, where official processes involve stamps (timbres fiscaux), legalized signatures, and patience measured in hours and days rather than minutes. Social life revolves around family, neighborhood cafes, and the weekly rhythms of markets and mosques. French is the de facto second language used in business, education, and administration — far more useful than English for daily interactions. The Tunisian dinar is a closed currency (you cannot take it out of the country), which affects financial planning for foreign residents. For newcomers willing to navigate the bureaucracy and embrace the pace, Tunisia offers remarkable value: a Mediterranean climate, beautiful historic cities, Saharan desert landscapes, and a warm, educated, and hospitable population.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: '90 days (Visa Free for many)',
    costOfLiving: 'Very Low',
    primaryLanguages: 'Tunisian Arabic, French',
  },
  visas: [
    {
      name: 'Tourist Entry (Visa-Free)',
      targetAudience: 'Tourists, Short-term visitors',
      useCase: 'Citizens of most Western European countries, the US, Canada, Australia, and Japan receive 90 days visa-free on arrival. Your passport is stamped at the airport, and the 90-day clock starts immediately. Overstaying results in a fine (paid at the airport on departure) calculated per day. Exceeding 90 days without a Carte de Sejour is technically illegal, though enforcement is primarily financial (fines) rather than criminal for short overstays.',
      duration: '90 days',
      link: 'https://www.diplomatie.gov.tn/'
    },
    {
      name: 'Carte de Sejour (Residence Card)',
      targetAudience: 'Long-term residents, Workers, Retirees',
      useCase: 'Required for any stay exceeding 90 days. Application is made at the local police station (Surete Nationale) nearest to your registered address. Required documents include passport, completed application forms, passport photos, legalized rental contract, proof of income (employment contract, pension certificate, or bank statements), medical certificate, and criminal background check from your home country (apostilled and translated into French or Arabic). Processing can take 2-6 months.',
      duration: '1 year initially, renewable (2 years after first renewal)',
      link: 'https://www.interieur.gov.tn/'
    },
    {
      name: 'Work Permit (Carte de Travail)',
      targetAudience: 'Employed professionals',
      useCase: 'For foreign nationals employed by a Tunisian company or foreign company operating in Tunisia. The employer applies through the Ministry of Employment (Ministere de la Formation Professionnelle et de l\'Emploi). A labor market test is required to demonstrate that no qualified Tunisian candidate is available. Offshore companies (those generating 100% of revenue from exports) have a simplified process for hiring foreign staff.',
      duration: '1 year, renewable with employment',
      link: 'https://www.emploi.gov.tn/'
    },
    {
      name: 'Investment/Business Visa',
      targetAudience: 'Entrepreneurs, Investors',
      useCase: 'For those starting a company in Tunisia. The country offers incentives through the Agency for the Promotion of Industry and Innovation (APII) and the Tunisia Investment Authority (TIA), particularly for export-oriented services, technology, and manufacturing. Company formation is processed through the Centre de Facilitation et de Gestion des Avantages (CFGA). Residency follows from active business operation.',
      duration: 'Residency linked to active business',
      link: 'https://www.tia.gov.tn/'
    },
    {
      name: 'Student Visa',
      targetAudience: 'Students, Researchers',
      useCase: 'For foreign nationals enrolled in Tunisian universities or research institutions. Requires acceptance letter, proof of financial means, and accommodation. Tunisia has several public universities with French-language programs and partnerships with European institutions. Applied for at Tunisian consulates abroad.',
      duration: '1 year, renewable with enrollment',
      link: 'https://www.diplomatie.gov.tn/'
    }
  ],
  requirements: [
    {
      title: 'Legalized Rental Contract (Contrat de Location Legalise)',
      explanation: 'All rental contracts for foreign residents must be formally legalized. This involves both parties signing at the local municipality (Commune) or with a notary, followed by registration with the tax authority (Bureau de Controle des Impots). The contract must specify the rent amount, duration, and property details.',
      importance: 'A legalized rental contract is the foundation document for virtually everything in Tunisia. It is mandatory for the Carte de Sejour application, for installing internet and utilities in your name, for opening a bank account, and as proof of address for any official interaction. Without it, you are administratively invisible. Ensure your landlord is willing to go through the legalization process before committing to a property.',
      link: 'https://www.interieur.gov.tn/'
    },
    {
      title: 'Bank Account (Compte en Devises / Compte Convertible)',
      explanation: 'Foreigners can open two types of bank accounts in Tunisia: a compte en devises (foreign currency account in EUR or USD) and a compte convertible (convertible account that allows exchange between foreign currency and Tunisian dinars). Major banks include Banque Internationale Arabe de Tunisie (BIAT), Attijari Bank, Amen Bank, and Banque de Tunisie. Account opening requires passport, Carte de Sejour (or proof of application), and proof of address.',
      importance: 'The Tunisian dinar (TND) is a closed currency — you cannot take it out of the country, and exchange rates are regulated by the Central Bank of Tunisia (BCT). For foreign residents, a convertible account is essential because it allows you to transfer money in from abroad, convert to dinars for local expenses, and — crucially — repatriate funds when you leave. Keep receipts for all currency exchanges, as they may be required when transferring money out of Tunisia.',
      link: 'https://www.bct.gov.tn/'
    },
    {
      title: 'Tax Registration (Carte d\'Identification Fiscale)',
      explanation: 'If you are working, operating a business, or earning income in Tunisia, you must register with the tax authority (Direction Generale des Impots) and obtain a tax identification card. Registration is done at the local Bureau de Controle des Impots.',
      importance: 'Tax compliance is required for anyone generating income in Tunisia. The personal income tax is progressive from 0% to 35%. Tunisia has tax treaties with many European countries to avoid double taxation. Filing annual tax declarations is mandatory. For remote workers earning from foreign sources, the tax treatment can be complex — consulting a local accountant is recommended.',
      link: 'https://www.finances.gov.tn/'
    },
    {
      title: 'Fiscal Stamp (Timbre Fiscal)',
      explanation: 'Tunisia uses a system of fiscal stamps (timbres fiscaux) for various administrative processes. These are purchased at post offices or from authorized vendors and attached to official documents, applications, and sometimes required at the airport upon departure for overstaying visitors.',
      importance: 'Fiscal stamps are required for residence permit applications, document legalizations, and certain administrative processes. The amounts are small (typically TND 5-25 per stamp) but having them ready avoids delays. At the airport, overstaying visitors must purchase a fiscal stamp to clear their departure — failure to do so can result in complications at passport control.',
      link: 'https://www.finances.gov.tn/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Tunisia's job market faces high unemployment (particularly among university graduates), and opportunities for foreigners are limited. The formal market is concentrated in Tunis, Sousse, and Sfax. Foreign professionals work primarily in international NGOs and development organizations, offshore call centers and IT outsourcing companies, tourism management, international schools, and multinational companies with Tunisian operations. French is the dominant language of business and administration.",
    whereToLook: [
      "Keejob.com (largest Tunisian job portal)",
      "Tanitjobs.com",
      "LinkedIn",
      "UN Jobs, ReliefWeb, and development organization career pages",
      "Institut Francais and French Chamber of Commerce networks"
    ],
    realityChecks: [
      "Local salaries are very low. The minimum wage (SMIG) is approximately TND 450/month ($145 USD). Professional salaries range from TND 1,500-4,000/month ($480-1,280 USD) for qualified roles. Only senior positions at multinationals or international organizations offer internationally competitive compensation.",
      "French is essential for virtually all professional and administrative interactions. Arabic (Tunisian dialect) is the everyday spoken language. English-only speakers will find opportunities extremely limited.",
      "Many foreigners in Tunisia work remotely for European or American companies, taking advantage of the low cost of living and Mediterranean lifestyle. The legal framework for remote work taxation is evolving.",
      "The offshore sector (companies exporting 100% of their services) has simplified processes for hiring foreign workers and offers tax advantages, making it a common entry point for foreign professionals."
    ]
  },
  salaryReality: {
    overview:
      "Tunisia's primary financial attraction is its extremely low cost of living, not its salary levels. A couple can live very comfortably in Tunis on EUR 1,000-1,500/month, or in a coastal town like Hammamet or Sousse on EUR 800-1,200/month. This includes a good apartment, regular dining out, domestic travel, and household help. For those earning in euros or dollars, the lifestyle-to-cost ratio is exceptional.",
    realityChecks: [
      "Foreign income dramatically improves quality of life. Remote workers earning European salaries can afford large apartments in prime areas, domestic help, regular restaurant meals, and extensive travel within Tunisia and to Europe.",
      "Currency controls affect financial planning. The Tunisian dinar has depreciated steadily against the euro over the past decade, which benefits foreign earners but erodes local savings. Keep the majority of your savings in foreign currency accounts.",
      "Private services (healthcare, international schooling, high-quality housing) are affordable by European standards but represent a significant premium over local alternatives. Budget TND 300-600/month for private health insurance and TND 500-2,000/month for quality housing depending on location.",
      "Tipping is expected in restaurants (10-15%), for service providers, and for small services throughout daily life. These micro-payments are part of the social fabric and add up over a month."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The impact of dinar depreciation on purchasing power — prices in TND rise steadily as the currency weakens against the euro and dollar",
      "Private healthcare and insurance costs, which are modest by European standards but significant relative to local prices",
      "The bureaucratic costs of establishing residency: apostilles, translations (into French or Arabic), legalization fees, and administrative stamps add up to EUR 500-1,000+ during the initial process",
      "Import taxes on goods brought into the country — electronics, vehicles, and personal belongings may be subject to customs duties that surprise newcomers"
    ]
  },
  housingSystem: {
    overview:
      "Tunisia's rental market is largely informal and private, with most transactions arranged between individual landlords and tenants. In Tunis, popular areas for foreign residents include Les Berges du Lac (modern, close to embassies and international organizations), La Marsa (upscale Mediterranean suburb), Sidi Bou Said (picturesque hilltop village), Ennasr and El Manar (middle-class residential). Along the coast, Hammamet, Sousse, and Mahdia attract retirees and lifestyle expats. Rents are very affordable: a modern two-bedroom apartment in Les Berges du Lac costs TND 1,000-1,800/month (EUR 300-540), while a villa in La Marsa ranges from TND 2,000-4,000/month (EUR 600-1,200).",
    expectations:
      "Search through Tayara.tn (Tunisia's main classifieds), Mubawab.tn, Facebook groups (Expats in Tunisia, Location Tunisie), and local real estate agents. Always visit properties in person — photos are often misleading or outdated. Verify that the landlord is willing to legalize the rental contract (some prefer informal arrangements to avoid tax reporting). Check water pressure, electrical wiring, internet availability, and heating (winters in Tunis are cooler than many expect — January nights drop to 5-8C). Security deposits of one to two months are standard. Many properties, especially outside Tunis, are rented furnished."
  },
  healthcareReality:
    "Tunisia has a public healthcare system that provides free or low-cost care through regional hospitals, but quality and wait times vary significantly. The public system is strained by underfunding, particularly for specialized care. Most foreign residents use private healthcare, which is affordable and of reasonable quality in Tunis and other major cities. Clinique La Soukra, Clinique Pasteur, Clinique El Amen, and Clinique Internationale Hannibal in Tunis are commonly used by foreigners. A specialist consultation costs TND 80-150 ($25-48 USD). Private health insurance through companies like COMAR, STAR Assurances, or international providers costs TND 100-300/month depending on coverage and age. Pharmacies are well-stocked and widespread, with many medications available without prescription and at significantly lower prices than in Europe. Tunisia has also developed a medical tourism sector, particularly for dental care, ophthalmology, and cosmetic surgery, which attracts patients from Europe and the Middle East. For complex or specialized conditions, medical evacuation to France is the standard route — French is the medical language, and many Tunisian doctors trained in France.",
  digitalLife: {
    overview:
      "Tunisia's digital infrastructure has improved considerably, with 4G coverage widespread in urban areas and fiber broadband expanding. However, the contrast between digital daily life and paper-heavy bureaucracy is stark. Many administrative processes that are online in Europe remain stubbornly physical in Tunisia — stamps, signatures, legalized copies, and in-person queues at government offices.",
    essentials: [
      "Tunisie Telecom, Ooredoo, or Orange SIM card (the three telecom providers for mobile and data)",
      "WhatsApp (primary communication tool for personal and business use)",
      "Flouci or D17 (mobile payment apps, growing in adoption)",
      "Jumia or Glovo Tunisia (delivery and e-commerce)"
    ],
    whatSurprisesNewcomers: [
      "Cash remains king for most daily transactions. Card acceptance is limited to larger shops, hotels, and restaurants in Tunis. Markets, small shops, taxis, and most service providers deal exclusively in cash. ATMs are widely available.",
      "Internet speeds in Tunis and major cities are reasonable (10-50 Mbps on fiber), but connections can be unreliable during peak hours and in older buildings. Many remote workers keep a mobile hotspot as backup.",
      "VPN usage is common because some websites and services are occasionally restricted or slow. Having a VPN is practical for consistent access.",
      "French dominates all official and administrative digital platforms. Government websites, banking portals, and utility services default to French (and sometimes Arabic). English-language support is minimal."
    ]
  },
  culture: {
    text: 'Tunisia is the most socially liberal Arab country, with a unique cultural identity shaped by its Phoenician, Roman, Arab, Ottoman, and French colonial heritage. You can drink wine in a sidewalk cafe in Tunis, hear the call to prayer five times daily, visit ancient Roman ruins at Carthage, and browse a Berber market in the south — all within the same country. Tunisians are highly educated (literacy rate exceeds 80%) and take pride in their intellectual and cultural heritage. Family is central to social life, and personal relationships precede business transactions. French is the lingua franca of education, business, and upward mobility, spoken alongside Tunisian Arabic (Derja) in daily life. Bargaining is expected and enjoyed in medinas and markets but not in modern shops with price tags. Hammams (public bathhouses) are a weekly ritual for many Tunisians — the experience involves steam rooms, scrubbing with a kessa glove, and relaxation, and is one of the most authentic ways to experience local culture.',
    highlights: [
      'Harissa is Tunisia\'s signature condiment — a spicy chili paste made with roasted peppers, garlic, and spices, served alongside virtually every meal. It was inscribed on the UNESCO Intangible Cultural Heritage list in 2022.',
      'Jasmine is the national flower. In summer evenings, men carry sprigs of jasmine behind their ear — traditionally, left ear means married, right ear means single. Vendors sell jasmine bouquets on street corners.',
      'Hammams (public bathhouses) are a social institution. Many neighborhoods have their own hammam, and a weekly visit is a deeply ingrained habit. Foreign residents who try the experience often become regulars.',
      'Greetings are warm: handshakes between men, cheek kisses (one or two depending on the region) between friends and between men and women who know each other. Starting any interaction without a proper greeting is considered rude.',
      'During Ramadan, most cafes and restaurants close during daylight hours, and eating, drinking, or smoking in public is avoided (though enforcement is lighter than in Gulf countries). Evenings come alive with iftar gatherings and late-night socializing. Some tourist-area restaurants remain open behind screens.'
    ]
  },
  transportationMobility:
    "Tunisia's most efficient intercity transport is the louage (shared minivan) system — white-and-colored minivans depart from designated stations in every city when full, connecting all major towns quickly and cheaply (Tunis to Sousse costs about TND 10-15, roughly $3-5 USD). SNCFT (Societe Nationale des Chemins de Fer Tunisiens) operates trains connecting Tunis to Sousse, Sfax, and other cities, but trains are slow and schedules are irregular. Within Tunis, the Metro Leger (light rail) covers key routes, supplemented by city buses operated by the Societe des Transports de Tunis (TRANSTU). The TGM (Tunis-Goulette-Marsa) train connects central Tunis to the northern suburbs of La Goulette, Carthage, Sidi Bou Said, and La Marsa — a scenic commuter line used daily by thousands. Taxis are ubiquitous and cheap in cities — always ensure the meter is running or agree on a price before departing. Ride-hailing apps (Bolt) operate in Tunis. Driving is possible with an international license (valid for one year, after which a Tunisian license is required), but city traffic is aggressive and road rules are loosely observed.",
  internationalConnectivity:
    "Tunis-Carthage International Airport (TUN) is the main international gateway, served by Tunisair (the national carrier), Transavia, Air France, Turkish Airlines, and several other European and Middle Eastern airlines. Direct flights connect Tunis to Paris (2 hours), London (2.5 hours), Istanbul (3 hours), Rome (1.5 hours), and many other European cities. Enfidha-Hammamet International Airport serves the Sousse/Hammamet tourist zone with charter flights, mainly from Europe. Monastir Habib Bourguiba Airport handles additional tourist traffic. For broader African and Middle Eastern connections, flights via Istanbul (Turkish Airlines) or Casablanca (Royal Air Maroc) provide extensive networks. Ferry connections from La Goulette (port of Tunis) to Marseille, Genoa, and Palermo are operated by CTN and Corsica Linea, offering car-friendly crossings to Europe (18-24 hours).",
  travelExploration:
    "Tunisia is extraordinarily diverse for its size. Tunis' medina is a UNESCO World Heritage Site with centuries-old souks, mosques, and palaces. Sidi Bou Said, perched on a cliff overlooking the Bay of Tunis, is one of the most photographed villages in North Africa with its iconic blue-and-white architecture. Carthage, once Rome's great rival, offers dramatic ruins overlooking the sea. Dougga (Thugga), inland, is the best-preserved Roman city in North Africa — a UNESCO site with a remarkably complete theater, temples, and baths. The Saharan south offers the Ksour (fortified granaries) of Tataouine (which inspired Star Wars sets), oasis towns like Tozeur and Douz, and the salt flats of Chott el Jerid. El Jem houses one of the largest Roman amphitheaters in the world, rivaling the Colosseum. The island of Djerba offers beaches, the ancient El Ghriba Synagogue (one of the oldest in the world), and a relaxed Mediterranean vibe. Weekend trips from Tunis to any of these destinations are feasible, making Tunisia one of the most rewarding small countries for cultural exploration.",
  considerations: [
    'Closed Currency: The Tunisian dinar (TND) is a partially closed currency. You cannot take more than TND 10,000 out of the country, and you must reconvert dinars to foreign currency before departure. Exchange receipts should be kept, as they may be required. This affects financial planning — keep your savings in foreign currency accounts and convert to dinars only as needed for local expenses.',
    'Bureaucratic Culture: Every official process involves stamps (timbres fiscaux), legalized copies, notarized signatures, and patience. The administrative culture is deeply French-influenced — forms, procedures, and institutional logic follow French bureaucratic traditions. Budget hours, not minutes, for government office visits. A local fixer or French-speaking helper is invaluable.',
    'Ramadan Impact: During Ramadan, most restaurants and cafes close during daylight hours. Working hours shorten, business pace slows, and social life shifts to evening and night. Some tourist-oriented establishments remain open discreetly. If you are not fasting, eat at home or in your accommodation during the day to be respectful.',
    'Security Awareness: Tunisia has improved security significantly since the 2015 incidents, with a strong security presence at tourist sites, hotels, and public venues. Some border areas near Algeria and Libya have travel restrictions. Check your government\'s current travel advice and register with your embassy.',
    'Winter in the North: While Tunisia has a Mediterranean climate, winters in Tunis and the north are cooler than many expect. January temperatures range from 8-15C, with rain common. Many older buildings lack central heating — space heaters and warm clothing are necessary. The south remains warm year-round.'
  ],
  mistakes: [
    'Assuming everyone speaks English. French is Tunisia\'s functional second language, used in education, business, administration, and upwardly mobile social circles. English proficiency is growing among younger Tunisians but is far less useful than French for daily life, bureaucracy, and healthcare interactions.',
    'Not validating train or metro tickets before boarding. Inspectors check tickets regularly, and fines for traveling without a validated ticket are enforced. Validate your ticket at the machines on the platform before boarding.',
    'Wearing revealing beachwear in town or non-tourist areas. At beach resorts, swimwear is normal. In medinas, markets, residential neighborhoods, and smaller towns, dress modestly — cover shoulders and knees. The disconnect between resort culture and daily urban life catches many newcomers off guard.',
    'Taking photographs of police, military installations, or government buildings. This is strictly forbidden in Tunisia and can result in your camera/phone being confiscated and questioning by security forces. Exercise caution around any official-looking buildings or uniformed personnel.',
    'Failing to keep currency exchange receipts. When departing Tunisia, you may need to prove the origin of your dinars or show receipts for currency conversions. Without receipts, reconverting dinars to euros or dollars at the airport can be refused. Keep all exchange receipts organized throughout your stay.'
  ],
  emergency: [
    {
      number: '197',
      service: 'Police (Police Secours)',
      description: 'National police emergency line. Operators speak Arabic and French.'
    },
    {
      number: '190',
      service: 'SAMU (Emergency Medical Service)',
      description: 'Emergency ambulance dispatch service. Response times vary by location — faster in Tunis and major cities.'
    },
    {
      number: '198',
      service: 'Civil Protection (Fire/Rescue)',
      description: 'Fire brigade and civil protection services for fires, rescues, and natural disaster response.'
    }
  ],
  sources: [
    {
      name: 'Ministry of Foreign Affairs',
      category: 'Immigration & Visas',
      description: 'Official source for visa requirements, entry conditions, and consular services for foreign nationals.',
      link: 'https://www.diplomatie.gov.tn/'
    },
    {
      name: 'Ministry of Interior',
      category: 'Residency & Security',
      description: 'Authority managing Carte de Sejour applications, police registration, and internal security.',
      link: 'https://www.interieur.gov.tn/'
    },
    {
      name: 'Tunisia Investment Authority (TIA)',
      category: 'Business & Investment',
      description: 'Promotes foreign investment, supports business setup, and manages incentive programs for entrepreneurs.',
      link: 'https://www.tia.gov.tn/'
    },
    {
      name: 'Discover Tunisia',
      category: 'Tourism & Travel',
      description: 'National Tourist Office providing guides to destinations, cultural events, and travel information.',
      link: 'https://www.discovertunisia.com/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to Tunisia, consult the Tunisian Ministry of Foreign Affairs or a Tunisian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/tunisia',
    mfaLink: 'https://www.diplomatie.gov.tn/'
  },
  serviceDirectory: {
    title: "Service Directory - Tunisia",
    description: "Examples of commonly used service providers people often interact with when relocating to Tunisia.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal assistance for residence permits, work authorization, company formation, and administrative compliance.",
        providers: [
          { name: "Boussayene Knani & Associes", link: "https://www.bk-associes.com" },
          { name: "Dammak & Associes", link: "https://www.dammak.com.tn" },
          { name: "Gide Loyrette Nouel - Tunisia Desk", link: "https://www.gide.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Professionals handling apartment rentals, long-term housing, and property purchases in Tunis and coastal areas.",
        providers: [
          { name: "Tayara.tn (Classifieds)", link: "https://www.tayara.tn" },
          { name: "Mubawab Tunisia", link: "https://www.mubawab.tn" },
          { name: "RE/MAX Tunisia", link: "https://www.remax.tn" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Tunisian tax residency, foreign income treatment, and cross-border fiscal planning.",
        providers: [
          { name: "PwC Tunisia", link: "https://www.pwc.com/tn" },
          { name: "Deloitte Tunisia", link: "https://www2.deloitte.com/tn" },
          { name: "BDO Tunisia", link: "https://www.bdo.tn" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and regional relocation services covering shipping, customs clearance, and household moves.",
        providers: [
          { name: "AGS Movers Tunisia", link: "https://www.agsmovers.com" },
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Demeco International", link: "https://www.demeco.fr" }
        ]
      },
      {
        name: "Language Tutors",
        description: "French and Arabic language training and cultural integration support for newcomers.",
        providers: [
          { name: "Institut Francais de Tunisie", link: "https://www.institutfrancais-tunisie.com" },
          { name: "Amideast Tunisia", link: "https://www.amideast.org/tunisia" },
          { name: "Berlitz Tunisia", link: "https://www.berlitz.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major private clinics and hospitals commonly used by foreign residents.",
        providers: [
          { name: "Clinique La Soukra", link: "https://www.cliniquelasoukra.com" },
          { name: "Clinique Pasteur Tunis", link: "https://www.cliniquepasteur.tn" },
          { name: "Clinique El Amen", link: "https://www.groupeelamen.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and agencies connecting professionals with Tunisian employers.",
        providers: [
          { name: "Keejob", link: "https://www.keejob.com" },
          { name: "Tanitjobs", link: "https://www.tanitjobs.com" },
          { name: "Manpower Tunisia", link: "https://www.manpower.tn" }
        ]
      }
    ]
  }
};
