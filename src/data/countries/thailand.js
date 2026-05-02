export const thailand = {
  id: 'thailand',
  slug: 'thailand',
  name: 'Thailand',
  region: 'Asia',
  complexity: 'Medium',
  languages: ['Thai'],
  shortDescription: 'The Land of Smiles, offering tropical beaches, chaotic cities, and amazing street food.',
  heroImage: 'https://images.unsplash.com/photo-1601224335112-b74158e231ec?',
  flagAlt: 'Flag of Thailand',
  atAGlance: "Thailand is a sensory overload in the best possible way. Bangkok is a sprawling, humid metropolis where ornate Buddhist temples sit between gleaming shopping malls and streets thick with the smoke of charcoal grills serving pad kra pao and mango sticky rice at all hours. Beyond the capital, the country stretches from the misty mountains of Chiang Mai and Chiang Rai in the north to the limestone karsts and turquoise waters of Krabi, Phuket, and Koh Samui in the south. Life in Thailand is guided by the philosophy of 'Mai Pen Rai' (never mind / no worries), a genuine cultural emphasis on avoiding conflict, maintaining face, and keeping interactions pleasant and harmonious. Thai people are famously warm, polite, and hospitable. The cost of living is low by Western standards, which has attracted tens of thousands of digital nomads, retirees, and long-term expats. However, the visa system is notoriously complex, with multiple overlapping categories, frequent rule changes, and a bureaucratic culture that still relies heavily on paperwork and in-person visits to immigration offices. Bangkok traffic is legendary — gridlock that can turn a 5km journey into a 90-minute ordeal — but the city's BTS Skytrain and MRT subway systems provide fast relief along their routes. For newcomers, the adjustment involves learning to read social cues in a culture where directness is avoided, accepting that some administrative processes defy logic, and discovering that the street food vendor on the corner often serves better food than the expensive restaurant.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 60 days (Visa Exemption)',
    costOfLiving: 'Low',
    primaryLanguages: 'Thai (English in tourist areas)',
  },
  visas: [
    {
      name: 'Destination Thailand Visa (DTV)',
      targetAudience: 'Digital Nomads, Remote Workers',
      useCase: 'Introduced in 2024, this visa allows freelancers, remote workers, and those attending courses or events in Thailand to stay up to 180 days per entry, with a 5-year validity period allowing multiple entries. Applicants must demonstrate proof of remote employment or freelance contracts and savings of at least 500,000 THB (approximately USD 14,000). This has quickly become the most popular long-stay option for location-independent workers.',
      duration: '5 years (180 days per entry)',
      link: 'https://www.mfa.go.th/en'
    },
    {
      name: 'Long-Term Resident (LTR) Visa',
      targetAudience: 'Wealthy Individuals, Highly Skilled Professionals',
      useCase: 'A premium 10-year visa for four categories: wealthy global citizens (minimum USD 1M in assets), wealthy pensioners (50+ with pension/investment income), remote workers employed by established global companies (minimum USD 80,000 annual income), and highly skilled professionals in target industries. Offers benefits including a reduced personal income tax rate of 17% and exemption from the 4:1 Thai-to-foreign worker ratio requirement.',
      duration: '10 years',
      link: 'https://ltr.boi.go.th/'
    },
    {
      name: 'Thailand Elite Visa',
      targetAudience: 'Wealthy Individuals Seeking Hassle-Free Residency',
      useCase: 'A pay-to-stay membership program offering long-term residency without the bureaucratic hassle of regular visa extensions. Packages range from approximately 900,000 THB for 5 years to several million THB for 20 years. Includes airport fast-track, government concierge services, and annual health checkups. No work permit included.',
      duration: '5-20 years (depending on package)',
      link: 'https://www.thailandprivilege.co.th/'
    },
    {
      name: 'Non-Immigrant B Visa (Work)',
      targetAudience: 'Employed Professionals',
      useCase: 'The standard pathway for foreign nationals with a job offer from a Thai employer. You obtain the Non-B visa before arrival (typically at a Thai embassy/consulate), then convert it to a work permit after arriving in Thailand. Your employer handles the work permit application through the Department of Employment. The company must meet a minimum capitalization of 2 million THB per foreign worker and maintain a 4:1 ratio of Thai to foreign employees.',
      duration: '90 days initially (extended to 1 year with work permit)',
      link: 'https://www.mfa.go.th/en'
    },
    {
      name: 'Non-Immigrant O Visa (Retirement)',
      targetAudience: 'Retirees (50+)',
      useCase: 'For individuals aged 50 or older with proof of either 800,000 THB in a Thai bank account (maintained for at least 2 months before application and 3 months after) or monthly income of at least 65,000 THB, or a combination meeting the threshold. Must be renewed annually at Thai Immigration. Does not permit any form of work.',
      duration: '1 year (renewable annually)',
      link: 'https://www.mfa.go.th/en'
    }
  ],
  requirements: [
    {
      title: 'TM.30 (Notification of Residence)',
      explanation: 'A mandatory notification form that your landlord, hotel, or property owner must file with Thai Immigration within 24 hours of a foreign national checking in or taking up residence. It reports the foreigner\'s address to the immigration authorities.',
      importance: 'The TM.30 is the foundation document for almost all immigration interactions in Thailand. You will need proof of a current TM.30 filing for visa extensions, 90-day reporting, re-entry permits, and various other procedures at immigration offices. If your landlord fails to file it, you will face difficulties. Always confirm that it has been submitted and keep a copy of the receipt. The filing can now be done online by the property owner through the immigration website.',
      link: 'https://www.immigration.go.th/en/'
    },
    {
      title: '90-Day Reporting (TM.47)',
      explanation: 'If you remain in Thailand for more than 90 consecutive days, you must report your current address to Thai Immigration every 90 days. This is a reporting requirement, not a visa extension — it simply confirms your address. It can be done online, by mail, or in person at an immigration office.',
      importance: 'Missing your 90-day report results in a fine of 2,000 THB, and repeated failures can complicate future visa extensions or applications. The online system works but can be unreliable during peak periods, so many long-term residents submit their report a few days early. Mark the dates in your calendar — immigration does not send reminders.',
      link: 'https://www.immigration.go.th/en/'
    },
    {
      title: 'Work Permit',
      explanation: 'A separate document from your visa that authorizes you to perform specific work for a specific employer in Thailand. Issued by the Department of Employment under the Ministry of Labour. Your employer applies on your behalf.',
      importance: 'Working without a valid work permit is a criminal offense in Thailand, punishable by fines, imprisonment, and deportation. The work permit specifies your employer, job title, and workplace — you cannot perform work for any other entity. Even volunteer work technically requires authorization. The work permit must be carried at all times while working.',
      link: 'https://www.doe.go.th/prd/alien/service/param/site/152/cat/82/sub/0/pull/sub_category/view/list-label'
    },
    {
      title: 'Thai Bank Account',
      explanation: 'Opening a Thai bank account requires your passport, a valid visa (not visa-exempt entry), work permit or letter from your employer, and the TM.30 notification receipt. Major banks include Bangkok Bank, Kasikornbank (KBank), SCB (Siam Commercial Bank), and Krung Thai Bank. Requirements vary by branch and change frequently.',
      importance: 'A Thai bank account is essential for receiving salary, paying rent, and accessing mobile banking apps that are central to daily life. Without one, you are locked out of domestic payment systems, inter-bank transfers, and many government services. Some banks accept long-term visa holders without a work permit, but policies vary by branch — Bangkok Bank is generally considered the most foreigner-friendly for initial account opening.',
      link: 'https://www.bot.or.th/en/our-roles/financial-institutions.html'
    }
  ],
  jobsAndIncome: {
    overview:
      "The formal job market for foreigners in Thailand is limited and heavily regulated. Many professions are legally reserved for Thai nationals under the Foreign Business Act and the Alien Working Act. Opportunities for expats exist primarily in multinational corporations, international schools, universities, the tourism and hospitality industry, and increasingly in tech companies establishing regional offices in Bangkok. However, the majority of foreign long-term residents in Thailand earn their income remotely from employers or clients outside the country.",
    whereToLook: [
      "LinkedIn (strongest for multinational, management, and regional roles)",
      "JobsDB Thailand (th.jobsdb.com — largest local job platform)",
      "Ajarn.com (teaching positions at international schools and universities)",
      "Company career pages for regional offices (Google, Agoda, Grab, Line, Shopee)",
      "Bangkok Post Classifieds and JobThai.com (for roles requiring Thai language skills)"
    ],
    realityChecks: [
      "Work permits are employer-specific and role-specific — you cannot freelance or change employers without a new permit and visa.",
      "Many professions are legally restricted to Thai nationals, including manual labor, retail sales, hairdressing, and various skilled trades.",
      "Local Thai salaries for equivalent roles are typically 50-70% lower than in Western countries, though executive and specialist packages can be competitive.",
      "Teaching English is the most accessible formal employment pathway but often offers modest salaries (30,000-80,000 THB/month depending on the institution)."
    ]
  },
  salaryReality: {
    overview:
      "Thai salaries are low by Western standards, but the low cost of living — particularly for food, transport, and housing outside prime expat areas — means that quality of life can be very high. The minimum wage varies by province (approximately 330-370 THB/day in 2025). Professional salaries in Bangkok range from 50,000 THB/month for mid-level roles to 150,000+ THB/month for senior management and specialist positions. Foreign income earned remotely provides significantly more purchasing power.",
    realityChecks: [
      "Bangkok expat salaries in multinational companies often include housing allowance, school fees for children, and annual flights home — the total package matters more than base salary.",
      "Foreign remote income of USD 2,000-3,000/month provides a comfortable lifestyle in most parts of Thailand, including a quality apartment, dining out daily, and regular domestic travel.",
      "Benefits and bonus structures vary enormously between Thai companies, multinational offices, and international schools.",
      "Thai personal income tax is progressive (0-35%) and applies to income earned in Thailand. Tax implications for foreign-sourced income remitted to Thailand changed significantly in 2024 — consult a tax advisor."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The cost of quality private healthcare insurance (10,000-50,000 THB/month depending on coverage and age)",
      "Visa and work permit renewal costs, immigration fees, and the administrative burden of annual extensions",
      "Lifestyle inflation in expat-heavy areas like Sukhumvit, Thonglor, and Ekkamai in Bangkok, or tourist areas in Phuket and Koh Samui",
      "International school fees for children, which range from 300,000 to 1,000,000+ THB per year at top Bangkok schools"
    ]
  },
  housingSystem: {
    overview:
      "Housing in Thailand is predominantly private-market condominiums and apartments, with condos being the most common and accessible option for foreigners. In Bangkok, popular expat neighborhoods include Sukhumvit (especially Thonglor, Ekkamai, Phrom Phong, and Asok), Sathorn/Silom for the business district, and Ari for a more local-Thai lifestyle. In Chiang Mai, the Nimman area and Old City are popular. Most condos come fully furnished with air conditioning, and many buildings include pools, gyms, and security. Houses and villas are more common in Phuket, Koh Samui, and Chiang Mai.",
    expectations:
      "Standard deposits are two months' rent plus one month advance. Lease terms of 6-12 months are typical, though shorter arrangements exist at higher rates. Monthly rent in Bangkok ranges from 10,000 THB for a basic studio to 80,000+ THB for a luxury two-bedroom in a prime area. Always inspect the unit in person, test the air conditioning (this is critical in Thailand), and ensure the landlord will file the TM.30 notification. Utility costs for electricity can be high due to constant air conditioning use — expect 2,000-6,000 THB/month depending on unit size and usage. Platforms like DDproperty, Hipflat, and FazWaz list condos, while local agents and Facebook groups (e.g., 'Bangkok Expats' and 'Chiang Mai Expats') are widely used."
  },
  healthcareReality:
    "Thailand is a global medical tourism destination, and the quality of private healthcare is genuinely world-class. Hospitals like Bumrungrad International, Bangkok Hospital, Samitivej, and BNH in Bangkok offer care comparable to the best Western institutions, with English-speaking doctors (many trained in the US, UK, or Australia), modern equipment, and significantly lower costs. A specialist consultation at a private hospital costs approximately 1,000-2,000 THB (USD 30-60), and complex procedures cost a fraction of US or European prices. Public hospitals (e.g., Siriraj Hospital, Ramathibodi Hospital) provide competent care at very low cost but involve longer wait times, crowded facilities, and limited English-language support. Health insurance is essential — Thailand does not provide free healthcare to foreign residents. International health insurance policies or Thailand-specific plans from providers like Pacific Cross, AIA, and Cigna are standard. The government requires proof of health insurance for many visa categories. Pharmacies are abundant and many medications — including antibiotics — are available over the counter without a prescription.",
  digitalLife: {
    overview:
      "Thailand is a mobile-first society. Daily life revolves around smartphone apps for everything from payments and food delivery to transport and government notifications. The digital ecosystem is vibrant and efficient for consumer services, though government and immigration systems remain stubbornly paper-based.",
    essentials: [
      "Line (the dominant messaging app in Thailand — used for personal, professional, and business communication, far more than WhatsApp)",
      "Grab (ride-hailing, food delivery, and package delivery — the Southeast Asian equivalent of Uber)",
      "PromptPay (instant bank-to-bank payment system linked to your phone number or national ID — used everywhere from street vendors to shopping malls)",
      "Foodpanda and Robinhood (food delivery platforms competing with Grab for restaurant orders)"
    ],
    whatSurprisesNewcomers: [
      "Line is far more important than WhatsApp in Thailand — businesses, government agencies, and social groups all operate primarily through Line.",
      "Many services, apps, and registration processes require a Thai phone number and Thai bank account to function fully.",
      "Visa and immigration processes remain overwhelmingly paper-based despite the digital sophistication of the consumer economy.",
      "QR code payments are ubiquitous — even small street food vendors accept PromptPay, and carrying cash is increasingly optional in urban areas."
    ]
  },
  culture: {
    text: 'Thai culture is built on a deep respect for hierarchy, harmony, and the avoidance of public conflict. The concept of "face" (maintaining dignity and avoiding embarrassment) governs social interactions — public displays of anger, loud arguments, or harsh criticism are considered deeply inappropriate regardless of the situation. The Thai monarchy is revered and legally protected; lese-majeste laws carry severe penalties, and any perceived disrespect toward the King or royal family is a criminal offense. Buddhism permeates daily life: monks collect alms at dawn, spirit houses sit outside virtually every building, and temple visits are a regular part of life. Physical hierarchy matters — the head is considered sacred (never touch anyone\'s head) and the feet are the lowest and most impure part of the body (never point your feet at people or Buddha images). Despite these formal structures, daily Thai life is warm, relaxed, and filled with humor. Smiling is a default social response to almost any situation, and the Thai sense of fun (sanuk) means that even mundane tasks should ideally include an element of enjoyment.',
    highlights: [
      'The Wai: The traditional Thai greeting — pressing palms together near the chest with a slight bow. The higher the hands and deeper the bow, the more respect being shown. Return a wai when received from equals; simply smile and nod when receiving one from service staff.',
      'Feet and Shoes: Never point your feet at anyone or at a Buddha image. Remove shoes before entering homes, temples, and many businesses. Stepping on money (which bears the King\'s image) is deeply offensive.',
      'The Monarchy: Lese-majeste laws are strictly enforced. Never make critical or disrespectful remarks about the King or royal family, even in jest. This applies to all media, including social media posts.',
      'Temple Etiquette: Cover shoulders and knees when visiting temples. Women must never touch a monk or hand anything directly to one — place items on a cloth or surface for the monk to pick up.',
      'Losing Face: Public anger, shouting, or harsh criticism causes everyone involved to "lose face." Even legitimate complaints should be delivered calmly and privately. Smiling when frustrated is not dishonesty — it is cultural conflict management.'
    ]
  },
  transportationMobility:
    "Bangkok's BTS Skytrain and MRT subway systems are modern, air-conditioned, and efficient along their routes, covering the central business and commercial districts. The BTS runs through Sukhumvit, Silom, and out to the suburbs, while the MRT connects Chatuchak, Sukhumvit, and Hua Lamphong areas. Both systems accept the contactless Rabbit card (BTS) and MRT card respectively, and a unified transit card is in development. Buses are extensive but slow and confusing for newcomers. Motorcycle taxis (identifiable by orange vests) are the fastest way through traffic for short distances but carry obvious safety risks. The Chao Phraya River ferries and canal boats (khlong boats) provide unique and effective transit along waterways. Grab is the dominant ride-hailing platform, used far more than traditional metered taxis. Outside Bangkok, public transport is limited — Chiang Mai has only a red songthaew (shared truck-taxi) system, and most residents rely on personal vehicles, scooters, or Grab. Domestic flights are affordable through budget carriers like AirAsia, Nok Air, and Thai Smile, connecting Bangkok to all major cities and islands.",
  internationalConnectivity:
    "Suvarnabhumi Airport (BKK) is one of Asia's largest and busiest international hubs, with direct flights to virtually every major city in Asia, Europe, the Middle East, and Oceania. Thai Airways, Bangkok Airways, and dozens of international carriers operate from BKK. Don Mueang Airport (DMK) serves as the budget carrier hub, with extensive regional coverage through AirAsia, Nok Air, and Lion Air. Flight times from Bangkok: Singapore 2.5 hours, Tokyo 6 hours, Dubai 6 hours, London 11 hours, Sydney 9 hours. Chiang Mai and Phuket international airports offer direct regional flights and seasonal European connections. Thailand's central position in Southeast Asia makes it an ideal base for exploring the region — Kuala Lumpur, Ho Chi Minh City, Bali, and Phnom Penh are all short flights away.",
  travelExploration:
    "Thailand offers extraordinary internal travel diversity at budget-friendly prices. The north (Chiang Mai, Chiang Rai, Pai) delivers mountain temples, hill tribe cultures, and cooler weather. The Andaman coast (Krabi, Phuket, Koh Lanta, Koh Lipe) features dramatic limestone cliffs, crystal-clear waters, and world-class diving. The Gulf coast (Koh Samui, Koh Phangan, Koh Tao) offers island-hopping, full-moon parties, and relaxed beach life. Ayutthaya and Sukhothai provide UNESCO-listed ancient temple ruins within easy day-trip distance from Bangkok. Khao Sok National Park has stunning rainforest and limestone lake scenery. Isaan, the northeastern region bordering Laos, is the cultural heartland with authentic food, festivals, and Khmer ruins at Phimai and Phanom Rung. Domestic flights are cheap (often under THB 2,000 one-way), long-distance buses are comfortable and well-organized, and the State Railway of Thailand offers scenic overnight train journeys to Chiang Mai and the south.",
  considerations: [
    'Traffic: Bangkok traffic is genuinely among the worst in the world. Gridlock can turn a 5km journey into 90 minutes during rush hours (7-9 AM, 5-8 PM). Plan your life around BTS/MRT stations when possible. Motorcycle taxis cut through traffic but carry significant injury risk — always wear the provided helmet.',
    'Scams: Tourist-area scams are well-established. "The Grand Palace is closed today" (it is not), tuk-tuk drivers offering suspiciously cheap tours that route through gem shops, and jet-ski damage claims on islands are classics. Research common scams before arriving and politely decline unsolicited offers from strangers.',
    'Air Quality: The "burning season" in Northern Thailand (February-April), caused by agricultural burning, creates hazardous air quality in Chiang Mai and surrounding provinces. PM2.5 levels regularly exceed WHO safe limits by 5-10x. If you live in the north, invest in a quality air purifier and N95 masks during this period.',
    'Visa Complexity: Thailand\'s visa system is notoriously confusing, with overlapping categories, frequently changing requirements, and inconsistent enforcement between immigration offices. What works at one office may be rejected at another. Join expat forums (ThaiVisa, Thai Visa Advice) and consult a visa agent for complex situations.',
    'Alcohol Restrictions: Alcohol sales are prohibited from 2:00 PM to 5:00 PM daily (except in restaurants with food orders in some cases) and entirely on major Buddhist holidays (Makha Bucha, Visakha Bucha, Asanha Bucha). Election days also have alcohol sales bans. Convenience stores and supermarkets strictly enforce these rules.'
  ],
  mistakes: [
    'Disrespecting money or the Thai currency. Thai banknotes and coins bear the King\'s image. Stepping on a rolling coin to stop it, or treating money disrespectfully in any way, is deeply offensive and technically a lese-majeste violation.',
    'Raising your voice or showing public anger. In Thai culture, losing your temper means losing face — for both you and the other person. No matter how frustrated you are, a calm smile and patient persistence will always achieve better results than confrontation.',
    'Overstaying your visa, even by a single day. Thailand takes overstays seriously. Fines are 500 THB per day (capped at 20,000 THB), and overstays of more than 90 days result in multi-year re-entry bans. Set calendar reminders for all visa deadlines.',
    'Assuming that street food is inferior to restaurant food. Thailand\'s best dishes are often found at street stalls and small shophouse restaurants. Michelin-starred Jay Fai started as a street vendor. Follow the crowds of Thai locals for the best meals.',
    'Flushing toilet paper. In most Thai buildings (except modern hotels and luxury condos), plumbing cannot handle toilet paper. Use the bidet spray hose ("bum gun") that is standard in every Thai bathroom, and place used tissue in the bin provided.'
  ],
  emergency: [
    {
      number: '1155',
      service: 'Tourist Police',
      description: 'English-speaking police assistance specifically for tourists and foreign residents. Available 24/7 and the best first point of contact for non-Thai speakers.'
    },
    {
      number: '1669',
      service: 'Medical Emergency (Ambulance)',
      description: 'National emergency medical service. Response times vary significantly by location — in Bangkok, private hospital ambulances often arrive faster.'
    },
    {
      number: '191',
      service: 'General Police',
      description: 'Thai police emergency line. Operators primarily speak Thai; for English-language assistance, use 1155 (Tourist Police) instead.'
    }
  ],
  sources: [
    {
      name: 'Thai e-Visa Portal',
      category: 'Immigration & Visas',
      description: 'Official online visa application portal for all Thai visa categories, operated by the Ministry of Foreign Affairs.',
      link: 'https://www.mfa.go.th/en'
    },
    {
      name: 'Thai Immigration Bureau',
      category: 'Immigration',
      description: 'Official authority for visa extensions, 90-day reporting, TM.30 notifications, re-entry permits, and all in-country immigration matters.',
      link: 'https://www.immigration.go.th/en/'
    },
    {
      name: 'Board of Investment (BOI) — LTR Visa',
      category: 'Long-Term Residency',
      description: 'Official portal for the Long-Term Resident visa program, managed by the Thailand Board of Investment.',
      link: 'https://ltr.boi.go.th/'
    },
    {
      name: 'Tourism Authority of Thailand (TAT)',
      category: 'Tourism',
      description: 'Official tourism board with travel guides, destination information, and practical visitor resources.',
      link: 'https://www.tourismthailand.org/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Thailand, consult the Thai Ministry of Foreign Affairs or a Thai embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/thailand',
    mfaLink: 'https://www.mfa.go.th/en'
  },
  serviceDirectory: {
    title: "Service Directory - Thailand",
    description: "Examples of commonly used service providers people often interact with when relocating to Thailand.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with visas, work permits, residence extensions, and compliance with Thai immigration rules.",
        providers: [
          { name: "Siam Legal", link: "https://www.siam-legal.com" },
          { name: "Tilleke & Gibbins", link: "https://www.tilleke.com" },
          { name: "Sunbelt Asia Legal Advisors", link: "https://www.sunbeltlegaladvisors.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Platforms and agencies commonly used for condo rentals, house purchases, and long-term housing searches.",
        providers: [
          { name: "DDproperty", link: "https://www.ddproperty.com" },
          { name: "Hipflat Thailand", link: "https://www.hipflat.co.th" },
          { name: "FazWaz", link: "https://www.fazwaz.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax advisors and accounting firms experienced with Thai tax residency, foreign income rules, and business compliance.",
        providers: [
          { name: "PwC Thailand", link: "https://www.pwc.com/th" },
          { name: "Deloitte Thailand", link: "https://www2.deloitte.com/th" },
          { name: "Mazars Thailand", link: "https://www.mazars.co.th" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and local relocation services covering shipping, customs clearance, and destination support.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Asian Tigers Mobility (Thailand)", link: "https://www.asiantigersgroup.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Thai language schools and courses commonly used by expats and long-term residents.",
        providers: [
          { name: "AUA Language Center", link: "https://www.auathailand.org" },
          { name: "Duke Language School", link: "https://www.dukelanguage.com" },
          { name: "Pro Language School", link: "https://www.prolanguage.co.th" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private hospitals and healthcare networks commonly used by expats in Thailand.",
        providers: [
          { name: "Bumrungrad International Hospital", link: "https://www.bumrungrad.com" },
          { name: "Bangkok Hospital", link: "https://www.bangkokhospital.com" },
          { name: "Samitivej Hospital", link: "https://www.samitivejhospitals.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Job platforms and recruitment firms connecting professionals with employers in Thailand.",
        providers: [
          { name: "JobsDB Thailand", link: "https://th.jobsdb.com" },
          { name: "Robert Walters Thailand", link: "https://www.robertwalters.co.th" },
          { name: "Adecco Thailand", link: "https://www.adecco.co.th" }
        ]
      }
    ]
  }
};
