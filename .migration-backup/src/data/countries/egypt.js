export const egypt = {
  id: 'egypt',
  slug: 'egypt',
  name: 'Egypt',
  region: 'Africa',
  complexity: 'High',
  languages: ['Arabic'],
  shortDescription: 'The cradle of civilization, offering chaos, history, and the Red Sea.',
  heroImage: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a',
  flagAlt: 'Flag of Egypt',
  atAGlance: "Egypt is a country of overwhelming contrasts. Cairo, with over 20 million people in its metropolitan area, is one of the world's most intense cities: a 24-hour metropolis of noise, traffic, dust, and relentless energy. The Red Sea coast (Hurghada, Sharm el-Sheikh, Dahab) offers an entirely different experience, with world-class diving, laid-back beach culture, and a growing digital nomad community. The cost of living is extremely low for those earning foreign currency, though the Egyptian Pound has devalued significantly in recent years. History is everywhere and inescapable: you will commute past pyramids, walk over Roman-era ruins, and shop in medieval-era souqs. Bureaucracy is labyrinthine, unpredictable, and paper-heavy. Social norms are shaped by Islam and deeply traditional family structures, though Cairo's cosmopolitan class is sophisticated and outward-looking. Navigating daily life requires patience, humor, thick skin against persistent touts and vendors, and the ability to accept that 'the system' often operates on personal connections (wasta) rather than formal procedures. For newcomers willing to embrace the chaos, Egypt rewards with extraordinary cultural richness, genuine warmth, an unbeatable food scene, and a cost of living that stretches foreign income further than almost anywhere else in the region.",

  overview: {
    euStatus: 'Non-EU',
    stayLength: '30 days (Visa on Arrival)',
    costOfLiving: 'Very Low',
    primaryLanguages: 'Arabic (Egyptian)',
  },
  visas: [
    {
      name: 'Tourist e-Visa / Visa on Arrival',
      targetAudience: 'Tourists, short-term visitors',
      useCase: 'Available for citizens of many countries. The e-visa can be obtained online before travel, avoiding queues at arrival. Visa on arrival is purchased at the airport for eligible nationalities. Single-entry and multiple-entry options available.',
      duration: '30 days (single entry) or 90 days (multiple entry)',
      link: 'https://www.visa2egypt.gov.eg/'
    },
    {
      name: 'Sinai Only Permit',
      targetAudience: 'Beach visitors, divers targeting South Sinai',
      useCase: 'A free 15-day entry stamp available on arrival at Sharm el-Sheikh airport for visitors staying exclusively in the South Sinai governorate (Sharm, Dahab, Nuweiba, Taba). Cannot be used to travel to Cairo, the Nile Valley, or other parts of Egypt.',
      duration: '15 days',
      link: 'https://www.visa2egypt.gov.eg/'
    },
    {
      name: 'Tourist Residence Permit',
      targetAudience: 'Long-stay visitors, digital nomads',
      useCase: 'For individuals wishing to stay beyond the initial visa period. Applied for at the Passports, Immigration and Nationality Administration (Mogamma in Cairo, or regional offices). Requires landlord documentation, bank statements, and considerable patience. Commonly used by nomads living in Dahab and Cairo.',
      duration: '6 months or 1 year (renewable)',
      link: 'https://egypt.gov.eg/'
    },
    {
      name: 'Work Permit and Residence',
      targetAudience: 'Employed professionals, company transferees',
      useCase: 'Required for formal employment in Egypt. The employer sponsors the application through the Ministry of Manpower. Security clearance is mandatory and can take weeks to months. The permit is tied to the sponsoring employer.',
      duration: '1 year (renewable)',
      link: 'https://en.moi.gov.eg/'
    },
    {
      name: 'Investor Residence',
      targetAudience: 'Business investors, property owners',
      useCase: 'For foreign nationals investing in Egyptian real estate or businesses above certain thresholds. Property ownership in designated areas (e.g., New Cairo, North Coast developments) can qualify for a 5-year residence permit.',
      duration: '1-5 years depending on investment level',
      link: 'https://www.gafi.gov.eg/'
    }
  ],
  requirements: [
    {
      title: 'Police Registration',
      explanation: 'All foreign visitors must register their presence with the local police within 7 days of arrival. Hotels and registered accommodation providers handle this automatically. If staying in private accommodation (Airbnb, friend\'s apartment), you must register yourself at the nearest police station.',
      importance: 'Failure to register can result in fines at exit, problems at the Mogamma when extending your stay, or difficulties with future visa applications. Keep the registration receipt; you may be asked for it at security checkpoints or when leaving the country.',
      link: 'https://en.moi.gov.eg/'
    },
    {
      title: 'Residence Permit (Iqama)',
      explanation: 'A residence permit issued by the Passports, Immigration and Nationality Administration. Required for anyone staying beyond the initial tourist visa period. Application involves photographs, copies of your passport, proof of address, bank statements, and often a security clearance.',
      importance: 'Without a valid iqama, you risk overstay fines (accumulating daily), detention, and deportation. The process is bureaucratic and often requires multiple visits to government offices. A reliable fixer or immigration lawyer significantly eases the process.',
      link: 'https://en.moi.gov.eg/'
    },
    {
      title: 'National ID Number (for long-term residents)',
      explanation: 'Long-term residents and those with work permits can obtain an Egyptian national ID number, which simplifies banking, mobile phone contracts, and property transactions.',
      importance: 'While not always mandatory for expatriates, having a national ID number streamlines many daily transactions and reduces reliance on your passport for identification. It is required for formal employment and tax registration.',
      link: 'https://egypt.gov.eg/'
    },
    {
      title: 'Cash and Currency Declarations',
      explanation: 'Egypt has strict regulations on the import and export of Egyptian Pounds (EGP). Foreign currency above USD 10,000 equivalent must be declared at customs. Taking more than EGP 5,000 out of the country is prohibited.',
      importance: 'Violating currency regulations can result in confiscation of funds and legal complications. Bring USD or EUR to exchange locally for the best rates. The parallel market exchange rate has historically diverged from official rates during devaluation periods.',
      link: 'https://www.customs.gov.eg/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Egypt has a massive labor market but local wages are very low relative to expatriate living standards. Cairo hosts the headquarters of many multinational corporations, NGOs, and international organizations (UN agencies, World Bank), which provide the bulk of expat-level employment. The tech startup scene in Cairo is growing rapidly, centered around the Smart Village and Greek Campus hubs. Most foreign residents in Dahab and Red Sea areas work remotely.",
    whereToLook: [
      "Wuzzuf.net (largest Egyptian job board)",
      "LinkedIn for multinational and corporate roles",
      "Bayt.com for regional positions",
      "UN and NGO career portals for development sector roles",
      "Remote platforms (Upwork, Toptal) for freelancers in Red Sea towns"
    ],
    realityChecks: [
      "Local salaries are generally insufficient for maintaining an expatriate lifestyle; a good Egyptian salary might be EGP 15,000-30,000/month (USD 300-600 at current rates).",
      "Work permits are mandatory for formal employment and can take weeks to months to process due to security clearance requirements.",
      "Arabic is essential for any local-facing role; English alone limits you to multinational offices and tourism.",
      "Connections (wasta) matter enormously in the Egyptian job market and can shortcut lengthy processes."
    ]
  },

  salaryReality: {
    overview:
      "Egyptian salary figures must be understood in the context of rapid currency devaluation. The Egyptian Pound has lost significant value against the USD since 2022, meaning local salaries denominated in EGP have declining purchasing power for imported goods. A senior professional in Cairo might earn EGP 30,000-80,000/month, while entry-level graduates start around EGP 5,000-10,000/month.",
    realityChecks: [
      "Currency devaluation has been dramatic: the EGP fell from roughly 15/USD in 2021 to over 48/USD by 2024. Savings in EGP lose value rapidly.",
      "Inflation has been severe, with food prices and imported goods rising sharply.",
      "Multinational companies often peg expatriate packages to USD, providing a significant buffer.",
      "The informal economy is enormous; many transactions happen in cash outside formal channels."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Impact of ongoing currency devaluation on real purchasing power",
      "Net salary after income tax (progressive rates from 0% to 27.5%) and social insurance",
      "Cost of private healthcare, international schools, and imported goods priced in USD equivalents",
      "Variable black-market premium on foreign currency during devaluation cycles"
    ]
  },

  housingSystem: {
    overview:
      "Cairo's rental market is vast, varied, and largely informal. Popular expatriate neighborhoods include Zamalek (an island in the Nile, leafy and upscale), Maadi (quiet, suburban, large expat community), New Cairo (modern compounds and malls), and Heliopolis (historic, vibrant, good metro access). Dahab on the Sinai coast offers beachfront apartments at very low rates. Furnished apartments are common, especially in expat-oriented areas.",
    expectations:
      "Rent is typically paid monthly or quarterly, often in cash or USD. Expect to negotiate; listed prices are starting points. In Cairo, a furnished apartment in Zamalek or Maadi might cost USD 400-800/month, while in Dahab a beachfront studio can be USD 150-300/month. Deposits are usually one to two months' rent. Verify the landlord's ownership, and ideally have a local contact review any contract. Air conditioning is essential in Cairo's summer (June-September) and will significantly affect your electricity bill."
  },

  healthcareReality:
    "Egypt has a dual public-private healthcare system. Public hospitals (Qasr Al-Aini in Cairo, Alexandria University Hospital) are heavily subsidized but overcrowded, underfunded, and often lack modern equipment. The vast majority of expatriates and middle-class Egyptians use private hospitals and clinics. As-Salam International Hospital, Dar Al Fouad Hospital, and Cleopatra Hospital in Cairo offer good to excellent care with English-speaking staff at costs far below Western levels. A private doctor consultation typically costs EGP 300-800 (USD 6-15). Specialist surgeries that would cost USD 50,000+ in the US might be USD 3,000-10,000 in a good Egyptian private hospital. Private health insurance from providers like AXA Egypt, Allianz Egypt, or MetLife Egypt is strongly recommended. Pharmacies are abundant and many medications are available over the counter at very low prices, though supply of specialized or imported drugs can be inconsistent.",

  digitalLife: {
    overview:
      "Egypt is digitally active with high smartphone penetration and widespread use of social media and messaging apps. However, digital government services are fragmented and unreliable, with most administrative processes still requiring in-person visits. Mobile internet (4G/LTE) is available from Vodafone Egypt, Orange Egypt, and Etisalat (now e&), though speeds can be inconsistent.",
    essentials: [
      "Local SIM card from Vodafone Egypt, Orange, or Etisalat (e&)",
      "InstaPay (interbank mobile payment app, increasingly essential)",
      "Uber and Careem (ride-hailing, safer and more reliable than street taxis)",
      "WhatsApp (primary communication tool for everything)"
    ],
    whatSurprisesNewcomers: [
      "VoIP services (Skype, FaceTime audio/video) have historically been throttled or blocked. WhatsApp messaging works, but call quality can be poor. VPN usage is common.",
      "Cash remains king for most daily transactions; many shops, restaurants, and services outside modern malls do not accept cards.",
      "Internet speeds can drop significantly during peak hours and in older neighborhoods with outdated infrastructure.",
      "Government digital services exist (egypt.gov.eg) but most processes still require physical presence with stamped documents."
    ]
  },

  culture: {
    text: "Egyptian culture is loud, warm, humorous, and intensely social. Hospitality is deeply ingrained: strangers will invite you for tea, shopkeepers will chat for an hour, and neighbors will bring food. Humor is a national coping mechanism for everything from traffic to politics. Religion, primarily Islam with a significant Coptic Christian minority, is central to daily rhythms: the call to prayer punctuates the day, Ramadan transforms the city's schedule, and religious greetings are universal. Communication is animated, physical, and often louder than newcomers expect. Time operates differently: 'Inshallah' (God willing), 'Bukra' (tomorrow), and 'Maalesh' (never mind) are not just phrases but a philosophy of flexibility. Tipping (baksheesh) is woven into every interaction, from the doorman to the parking attendant to the person who directs you to an empty table. Dress codes are conservative, particularly for women; covering shoulders and knees is expected in most areas outside international hotels and compounds.",
    highlights: [
      "Baksheesh (tipping) is expected for virtually every service, no matter how small. Carry small bills (EGP 5-20 notes) at all times for bathroom attendants, parking helpers, delivery drivers, and anyone who provides a service.",
      "During Ramadan, the entire country shifts to a nocturnal schedule. Restaurants close during daylight hours (some offer screened areas), working hours shorten, and the streets come alive after sunset with iftar gatherings and festive energy.",
      "Showing the soles of your feet to someone is considered highly disrespectful. When sitting, keep your feet flat on the floor or tucked under you.",
      "Always use your right hand for greetings, eating, and passing items. The left hand is considered unclean in Egyptian culture.",
      "Egyptians address elders and authority figures with titles: 'Basha' (sir/boss), 'Doktora' (for any educated woman), 'Ostaz' (teacher/Mr.). Using these shows respect and smooths interactions."
    ]
  },

  transportationMobility:
    "Cairo's traffic is legendary and genuinely intense. The Cairo Metro (3 lines, with expansions underway) is the fastest way across the city and costs just EGP 8-12 per ride. Buses and microbuses (minivans) are extremely cheap but crowded and confusing for newcomers. Ride-hailing apps (Uber and Careem) have transformed transport in Cairo and are strongly recommended over street taxis, which lack meters and require haggling. The Cairo Monorail is under construction and will eventually connect New Cairo and 6th of October City to the center. For intercity travel, GoEast Bus and Go Bus operate comfortable coaches between Cairo, Alexandria, Hurghada, and other cities. Egyptian National Railways connects Cairo to Luxor and Aswan via overnight sleeper trains. Domestic flights on EgyptAir, Air Cairo, and Nile Air connect Cairo to Sharm el-Sheikh, Hurghada, Luxor, and Aswan.",

  internationalConnectivity:
    "Cairo International Airport (CAI) is a major regional hub with direct flights to virtually every European capital, across the Middle East, to major African cities, and selected Asian and North American destinations. EgyptAir, the national carrier, operates an extensive network. Sharm el-Sheikh (SSH) and Hurghada (HRG) airports handle heavy charter and scheduled traffic from Europe, particularly in winter tourist season. Flight times are approximately 4.5 hours to London, 3 hours to Istanbul, 5 hours to Dubai, and 12 hours to New York.",

  travelExploration:
    "Egypt's travel offerings are staggering in both scope and history. The Pyramids of Giza and the Sphinx sit on the edge of Cairo, accessible by taxi in 30 minutes from downtown. The Egyptian Museum in Tahrir Square (and the new Grand Egyptian Museum in Giza) house some of humanity's greatest archaeological treasures. Luxor and Aswan in Upper Egypt offer the Valley of the Kings, Karnak Temple, and Nile felucca sailing. The Red Sea coast (Dahab, Sharm el-Sheikh, Marsa Alam) provides world-class diving and snorkeling on coral reefs. The Western Desert offers surreal white and black desert landscapes, accessible from Bahariya Oasis. Alexandria on the Mediterranean coast combines beaches, Ottoman-era architecture, and the modern Bibliotheca Alexandrina. Siwa Oasis near the Libyan border is a remote, Berber-speaking paradise of date palms and hot springs.",

  considerations: [
    "Street Harassment: Persistent touts at tourist sites (Pyramids, Khan el-Khalili) and street harassment of women are real issues. Be firm with a clear 'La, Shukran' (No, thank you) and keep walking. For women, conservative dress reduces attention but does not eliminate it. Uber is significantly safer than street taxis.",
    "Traffic Safety: Cairo traffic operates by its own rules. Crossing the road requires watching local pedestrians and following their lead. Traffic signals are suggestions. Walking at night on poorly lit roads is risky. Always use the metro or ride-hailing apps when possible.",
    "Internet Censorship and VoIP: VoIP calling services (Skype, FaceTime) are periodically throttled or blocked. A VPN is practically essential for reliable video calls. VPN usage itself exists in a legal grey area but is widespread.",
    "Photography Restrictions: Photographing government buildings, military installations, bridges, and police is strictly illegal and can lead to arrest and confiscation of equipment. Always err on the side of caution.",
    "Water Safety: Never drink tap water in Egypt. The pipes are old and water treatment is inconsistent. Use bottled water for drinking and brushing teeth. Ice in restaurants outside international hotels may be made from tap water."
  ],

  mistakes: [
    "Drinking tap water or accepting drinks with ice from street vendors. Waterborne illness is a genuine risk. Stick to sealed bottled water and be cautious with salads washed in tap water.",
    "Taking photographs of government buildings, military installations, or bridges. This is strictly illegal and you can be arrested, have equipment confiscated, and face interrogation. Do not test this rule.",
    "Paying the first price quoted in markets and souqs. Haggling is expected, and the first price is often 3-5 times the actual value. Start at 30% of the asking price and negotiate up. Walking away is a legitimate tactic.",
    "Displaying public affection. Kissing, hugging, and holding hands in public (particularly between unmarried couples) is taboo and can attract unwanted attention or police intervention in conservative areas.",
    "Underestimating bureaucracy. Any interaction with government offices (Mogamma, immigration, police registration) should be planned as a half-day commitment. Bring every document you can think of, in duplicate, with photocopies."
  ],

  emergency: [
    {
      number: '122',
      service: 'Police',
      description: 'Emergency police line. Arabic-speaking operators. For crimes in progress and urgent assistance.'
    },
    {
      number: '123',
      service: 'Ambulance',
      description: 'National ambulance service dispatch. Response times vary significantly by location; private ambulances are faster in Cairo.'
    },
    {
      number: '126',
      service: 'Tourist Police',
      description: 'Dedicated line for tourist-related incidents, available in tourist areas. Officers are more likely to speak English.'
    }
  ],
  sources: [
    {
      name: 'Egypt e-Visa Portal',
      category: 'Visa & Entry',
      description: 'Official government portal for electronic visa applications, eligibility checking, and visa status tracking.',
      link: 'https://www.visa2egypt.gov.eg/'
    },
    {
      name: 'Ministry of Interior - Passports, Immigration and Nationality Administration',
      category: 'Immigration & Residency',
      description: 'Handles residence permits, visa extensions, security clearances, and all immigration compliance matters.',
      link: 'https://en.moi.gov.eg/'
    },
    {
      name: 'General Authority for Investment and Free Zones (GAFI)',
      category: 'Business & Investment',
      description: 'Manages foreign investment, company registration, and investor residency programmes in Egypt.',
      link: 'https://www.gafi.gov.eg/'
    },
    {
      name: 'Experience Egypt (Ministry of Tourism)',
      category: 'Tourism',
      description: 'Official tourism portal with information on historical sites, travel planning, and cultural attractions.',
      link: 'https://egymonuments.gov.eg/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to Egypt, consult the Egyptian Ministry of Foreign Affairs or an Egyptian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/egypt',
    mfaLink: 'https://www.mfa.gov.eg/english/Pages/default.aspx'
  },
  serviceDirectory: {
    title: "Service Directory - Egypt",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Egypt.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for visas, residence permits, work authorizations, security clearances, and immigration compliance.",
        providers: [
          { name: "Matouk Bassiouny & Hennawy", link: "https://www.matoukbassiouny.com" },
          { name: "Zulficar & Partners", link: "https://www.zulficarpartners.com" },
          { name: "Shalakany Law Office", link: "https://www.shalakany.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies assisting with long-term rentals and residential property purchases in Cairo, Alexandria, and Red Sea areas.",
        providers: [
          { name: "Coldwell Banker Egypt", link: "https://www.coldwellbanker-egypt.com" },
          { name: "Property Finder Egypt", link: "https://www.propertyfinder.eg" },
          { name: "OLX Egypt (formerly OLX Arabia)", link: "https://www.olx.com.eg" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Egyptian tax residency, Egyptian Tax Authority (ETA) compliance, payroll, and cross-border income planning.",
        providers: [
          { name: "PwC Egypt", link: "https://www.pwc.com/eg" },
          { name: "EY Egypt", link: "https://www.ey.com/en_eg" },
          { name: "KPMG Egypt", link: "https://home.kpmg/eg" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including packing, shipping, customs clearance, and storage.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Egypt", link: "https://www.agsmovers.com" },
          { name: "Allied Pickfords Egypt", link: "https://www.alliedpickfords.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Arabic language schools and cultural immersion programmes, from Egyptian Colloquial Arabic to Modern Standard Arabic.",
        providers: [
          { name: "AUC Arabic Language Institute", link: "https://www.aucegypt.edu/academics/arabic-language-institute" },
          { name: "Kalimat Language & Cultural Centre", link: "https://www.kalimat.com.eg" },
          { name: "Arabeya Arabic Language Center", link: "https://www.arabeya.org" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major private hospitals and healthcare groups providing quality medical services to residents and expatriates.",
        providers: [
          { name: "As-Salam International Hospital", link: "https://www.assalamhospital.com" },
          { name: "Dar Al Fouad Hospital", link: "https://www.daralfouad.org" },
          { name: "Cleopatra Hospital Group", link: "https://www.cleopatrahospitals.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Employment platforms and recruitment firms connecting professionals with Egyptian and multinational employers.",
        providers: [
          { name: "Wuzzuf", link: "https://wuzzuf.net" },
          { name: "Bayt.com Egypt", link: "https://www.bayt.com/en/egypt/" },
          { name: "Michael Page Middle East", link: "https://www.michaelpage.ae" }
        ]
      }
    ]
  }
};