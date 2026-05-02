export const unitedArabEmirates = {
  id: 'united-arab-emirates',
  slug: 'united-arab-emirates',
  name: 'United Arab Emirates',
  region: 'Middle East',
  complexity: 'Medium',
  languages: ['Arabic', 'English'],
  shortDescription: 'A tax-free, high-convenience lifestyle built on transient expat communities.',
  heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?',
  flagAlt: 'Flag of UAE',
  atAGlance: "The UAE is a federation of seven emirates — Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah — each with its own ruler, regulations, and personality. Dubai and Abu Dhabi dominate international attention and attract the vast majority of expatriates, who make up roughly 88% of the total population. Life in the UAE is defined by extraordinary convenience: everything can be delivered to your door, government services are increasingly app-based, and the infrastructure is modern and meticulously maintained. The tax-free salary is the primary draw, with no personal income tax, no capital gains tax, and only a 5% VAT on goods and services. However, the cost of living — particularly housing, schooling, and lifestyle — can quickly erode the tax advantage. Housing in Dubai is typically paid annually through post-dated cheques, and international school fees can reach AED 50,000-100,000 per child per year. The UAE is an Islamic country with laws that govern public conduct, though Dubai and Abu Dhabi have progressively liberalized in recent years. The summer heat is brutal, regularly exceeding 45°C with suffocating humidity from June through September, pushing daily life almost entirely indoors. Socially, the expat community is enormous and diverse — over 200 nationalities — making initial connections easy. But the transient nature of the population means friendships dissolve as people rotate out, creating a social dynamic that can feel superficial over time. Your residency is tied to your employer (or your freelance/investor visa), and understanding the sponsorship system is essential to navigating life here. The Emirates ID and UAE Pass are your keys to everything from banking to healthcare to government services.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: '30-90 days (Tourist)',
    costOfLiving: 'High',
    primaryLanguages: 'English (Business), Arabic (Official)',
  },
  visas: [
    {
      name: 'Remote Work Visa (Dubai)',
      targetAudience: 'Digital Nomads, Remote Workers',
      useCase: 'A one-year virtual working program for remote employees or freelancers earning a minimum of USD 3,500 per month. Includes access to an Emirates ID, which unlocks banking, telecom, and most government services. You must show proof of current employment or business ownership, one month of bank statements, and health insurance coverage valid in the UAE.',
      duration: '1 year (Renewable)',
      link: 'https://www.visitdubai.com/en/invest-in-dubai/live-and-work/visas-and-entry/work-remotely-from-dubai'
    },
    {
      name: 'Golden Visa',
      targetAudience: 'Investors, Entrepreneurs, Specialized Talent',
      useCase: 'Long-term residency for investors (property valued at AED 2 million+), entrepreneurs, scientists, exceptional students, and specialists in fields like medicine, engineering, and technology. The Golden Visa is self-sponsored, meaning it is not tied to an employer. It allows holders to sponsor family members and stay outside the UAE for extended periods without losing residency.',
      duration: '5 or 10 years (Renewable)',
      link: 'https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa'
    },
    {
      name: 'Freelance Visa',
      targetAudience: 'Freelancers, Self-employed Professionals',
      useCase: 'Issued through free zones such as TECOM, twofour54, DMCC, or Dubai Internet City. Allows you to sponsor yourself without an employer. Covers a wide range of professions including media, technology, consulting, and education. Annual costs range from AED 7,500-20,000 depending on the free zone and package.',
      duration: '1-3 years (Renewable)',
      link: 'https://gofreelance.ae/'
    },
    {
      name: 'Employment Visa',
      targetAudience: 'Employed Professionals',
      useCase: 'Standard work visa sponsored by a UAE employer. The employer handles the application through MOHRE (Ministry of Human Resources and Emiratisation) or the relevant free zone authority. Includes a medical fitness test and Emirates ID issuance. The visa is tied to the sponsoring employer.',
      duration: '2-3 years (Renewable)',
      link: 'https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/work-residence-visa'
    },
    {
      name: 'Tourist Visa / Visa on Arrival',
      targetAudience: 'Visitors',
      useCase: 'Many nationalities receive 30 or 90 day visa-free entry. Others can apply for a tourist visa through airlines (Emirates, Etihad), hotels, or online. The visa does not permit employment.',
      duration: '30-90 days',
      link: 'https://u.ae/en/information-and-services/visa-and-emirates-id/do-you-need-an-entry-permit-or-a-visa-to-enter-the-uae'
    }
  ],
  requirements: [
    {
      title: 'Emirates ID',
      explanation: 'The national identity card issued by ICP (Federal Authority for Identity, Citizenship, Customs, and Port Security) to all UAE residents. It contains your biometric data, photo, and a unique 15-digit ID number. Issued after completing your residency medical test and biometrics appointment.',
      importance: 'The Emirates ID is the single most important document in UAE daily life. Without it, you cannot open a bank account, sign a mobile phone contract, rent an apartment, register a vehicle, access government services, or use many private-sector services. It has replaced the visa page stamp as the primary proof of residency. Apply for it immediately upon visa issuance.',
      link: 'https://icp.gov.ae/en/'
    },
    {
      title: 'Tenancy Contract Registration (Ejari / Tawtheeq)',
      explanation: 'Government registration of your residential rental contract. In Dubai, the system is called Ejari (administered by the Real Estate Regulatory Agency). In Abu Dhabi, it is called Tawtheeq (administered by the Abu Dhabi Municipality). Registration costs approximately AED 200-220.',
      importance: 'Registering your lease is mandatory to activate utilities (DEWA in Dubai, ADDC in Abu Dhabi), set up internet (du or Etisalat), establish your address for government records, and sponsor family members. Landlords are legally required to register the contract, but in practice you may need to follow up proactively.',
      link: 'https://dubailand.gov.ae/en/eservices/ejari/'
    },
    {
      title: 'Medical Fitness Test',
      explanation: 'A mandatory medical screening required for all residency visa applicants, conducted at authorized health centers. It includes blood tests (including HIV and hepatitis) and a chest X-ray (for tuberculosis). Results are typically available within 2-5 working days.',
      importance: 'You cannot obtain your Emirates ID or finalize your residency without completing the medical fitness test. Failing certain tests (particularly infectious diseases) can result in visa denial and deportation. The test must be completed at a DHA-approved center (Dubai) or SEHA facility (Abu Dhabi).',
      link: 'https://www.dha.gov.ae/'
    },
    {
      title: 'UAE Pass (Digital Identity)',
      explanation: 'A national digital identity platform that provides single sign-on access to government services across all seven emirates. It can be set up on your smartphone using your Emirates ID and facial recognition.',
      importance: 'UAE Pass is increasingly required to access government services online, including visa renewals, health records, utility connections, and traffic fines. It replaces multiple logins and is the UAE government\'s push toward a fully digital public service layer. Setting it up early saves significant time.',
      link: 'https://www.digitaldubai.ae/apps-services/details/uae-pass'
    }
  ],
  jobsAndIncome: {
    overview: "The UAE job market is highly international, fast-moving, and network-driven. Dubai is the commercial and services hub, while Abu Dhabi dominates in oil and gas, government, and finance. Key sectors include financial services, real estate, technology, healthcare, hospitality, and logistics. Most roles for expatriates are concentrated in Dubai and Abu Dhabi, with hiring often tied to specific projects, government initiatives, or market cycles rather than long-term workforce planning.",
    whereToLook: [
      "LinkedIn — the primary platform for professional and international roles",
      "GulfTalent — the largest Gulf-specific recruitment portal",
      "Bayt.com — major Middle East job board with strong UAE coverage",
      "Naukrigulf — popular with South Asian professionals and mid-level roles",
      "Company career pages, especially for major employers like Emirates, ADNOC, Emaar, and Majid Al Futtaim"
    ],
    realityChecks: [
      "Employment is tied to your residence visa — losing your job typically means you have 30 days to find a new sponsor or leave the country.",
      "Networking is the dominant hiring channel; many positions are filled through referrals before being publicly posted.",
      "Salary packages should be negotiated holistically: base salary, housing allowance, annual flights, schooling contribution, and health insurance quality vary enormously.",
      "Emiratization policies require private sector companies to hire a minimum percentage of UAE nationals, which can affect hiring timelines and available positions for expatriates."
    ]
  },
  salaryReality: {
    overview: "The headline benefit of UAE employment is zero personal income tax, meaning your gross salary equals your net salary. However, the total cost of living — particularly housing, schooling, and lifestyle — can quickly absorb the tax advantage. Salary packages in the UAE are typically more comprehensive than in other markets, often including housing allowance, annual flights, health insurance, and sometimes schooling contributions, but these vary widely by employer and seniority.",
    realityChecks: [
      "No income tax means gross equals net, but there is no state pension, unemployment insurance, or social safety net — you must self-fund retirement savings.",
      "Housing is the largest expense: a one-bedroom apartment in Dubai Marina or Downtown costs AED 70,000-120,000 per year, typically paid in 1-4 cheques.",
      "International school fees range from AED 20,000-100,000+ per child per year depending on curriculum and school reputation.",
      "End-of-service gratuity (equivalent to severance) is calculated at 21 days of basic salary per year for the first five years, then 30 days per year thereafter."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Housing costs — often the single largest expense, ranging from AED 50,000-200,000+ annually depending on location and family size",
      "School fees for children — a major financial commitment that can exceed AED 50,000 per child per year",
      "Health insurance quality and coverage limits — employer-provided plans vary from basic to comprehensive; understand your out-of-pocket exposure",
      "Annual flight allowance — standard in many contracts but not universal; negotiate this explicitly, especially for families"
    ]
  },
  housingSystem: {
    overview: "The UAE housing market is overwhelmingly rental-based for expatriates. In Dubai, apartments in areas like Dubai Marina, JBR, Downtown, Business Bay, and JLT are popular with young professionals, while families often prefer villa communities in Arabian Ranches, Springs, or Jumeirah. In Abu Dhabi, Saadiyat Island, Al Reem Island, and Khalifa City are popular expat neighborhoods. Rent is typically paid annually through post-dated cheques (1, 2, 4, or 12 cheques), with fewer cheques sometimes securing a lower total rent.",
    expectations: "Expect to pay a 5% agency fee, a security deposit (typically 5% for unfurnished, 10% for furnished), and register the contract through Ejari (Dubai) or Tawtheeq (Abu Dhabi). Always inspect the property in person — photos can be misleading. Check the building's maintenance record, the AC system (your largest utility bill), and proximity to the Metro or major roads. Rent disputes are handled by the Rental Disputes Settlement Centre (RDC) in Dubai. Be aware that landlords can request eviction with 12 months' notice for personal use or sale, even mid-contract."
  },
  healthcareReality: "Healthcare in the UAE is predominantly private and of high quality, with modern hospitals and a wide range of specialists. Health insurance is mandatory in both Dubai (regulated by DHA) and Abu Dhabi (regulated by DOHAD). Employers are required to provide health insurance for employees, and in Abu Dhabi, coverage must also extend to dependents. Major hospital groups include Cleveland Clinic Abu Dhabi, Mediclinic (multiple locations), NMC Healthcare, Aster DM Healthcare, and King's College Hospital Dubai. Emergency care is available 24/7 at all major hospitals. The quality of your employer-provided insurance plan matters enormously — basic plans have low annual limits and exclude many treatments, while comprehensive plans cover dental, optical, maternity, and specialist consultations. Out-of-pocket costs for procedures not covered by insurance can be substantial. Pharmacies are plentiful, and many medications are available without prescription.",
  digitalLife: {
    overview: "The UAE is one of the most digitally advanced countries in the world for daily life. Government services, banking, deliveries, and transport are all app-driven. The UAE Pass provides single sign-on access to federal and local government services. However, most digital services require an Emirates ID and local phone number to activate, creating a chicken-and-egg problem for new arrivals during their first weeks.",
    essentials: [
      "UAE Pass — single sign-on for all government services across seven emirates",
      "TAMM (Abu Dhabi) / DubaiNow (Dubai) — emirate-specific government service apps",
      "Careem or Uber — ride-hailing apps used daily by most residents",
      "Talabat or Deliveroo — food and grocery delivery platforms"
    ],
    whatSurprisesNewcomers: [
      "VoIP calls (WhatsApp calls, FaceTime Audio/Video) are restricted by telecom regulations. Zoom, Microsoft Teams, and Google Meet generally work for business use, but personal VoIP is blocked or degraded.",
      "Many services are completely inaccessible without an Emirates ID, including banking, mobile contracts, and certain government services — expect a bureaucratic gap during your first 2-4 weeks.",
      "The digital ecosystem is emirate-specific: Dubai has different apps and portals than Abu Dhabi, Sharjah, etc.",
      "Internet is fast and reliable, but content filtering blocks certain websites. VPN usage is in a legal grey area — using it for lawful purposes is generally tolerated, but using it for illegal activity carries penalties."
    ]
  },
  culture: {
    text: "The UAE is a genuine melting pot where you interact with people from over 200 nationalities daily, but Emirati culture — while representing a small percentage of the population — sets the foundational values and legal framework. Emirati culture is rooted in hospitality, respect for elders, and Islamic traditions. Public conduct laws have relaxed significantly in recent years: cohabitation for unmarried couples was decriminalized in 2021, alcohol licensing has been simplified, and dress codes in Dubai are liberal by Gulf standards (though modesty is still appreciated in malls, government buildings, and traditional areas). The pace of life varies between emirates — Dubai is fast, ambitious, and internationally oriented, while Abu Dhabi is more measured, family-focused, and culturally traditional. Sharjah is the most conservative, with strict alcohol prohibitions and more modest dress expectations. Social life for expats revolves around brunches, beach clubs, mall culture, and community groups organized around nationality, hobby, or profession.",
    highlights: [
      "Friday brunch is a major social institution in Dubai and Abu Dhabi — often all-inclusive affairs at hotels that serve as the primary weekly social gathering.",
      "During Ramadan, eating, drinking, and smoking in public during daylight hours should be avoided out of respect. Many restaurants offer screened areas or takeaway. Working hours are reduced by two hours daily.",
      "Safety is exceptional — the UAE consistently ranks among the safest countries in the world. Violent crime is extremely rare.",
      "Air conditioning is set to arctic levels indoors. Always carry a light jacket or sweater when entering malls, offices, and restaurants.",
      "The work week runs Monday to Friday (changed from Sunday-Thursday in 2022). Friday prayers remain significant, with many businesses closing or operating reduced hours on Friday mornings."
    ]
  },
  transportationMobility: "The UAE is a car-centric society, and most residents own or lease a vehicle. Dubai has the most developed public transport network, including the Dubai Metro (Red and Green lines), Dubai Tram, water taxis, and an extensive bus network, all managed by the RTA and accessed via the Nol Card. Abu Dhabi has a growing bus network operated by ITC, and the Etihad Rail project connecting Abu Dhabi to Dubai is under construction. Ride-hailing via Careem and Uber is affordable and widely used. Fuel is inexpensive by global standards (approximately AED 3.0-3.5 per liter). Traffic congestion in Dubai, particularly on Sheikh Zayed Road during rush hours, is notorious. Parking in Dubai is managed by RTA with paid zones in commercial areas. Obtaining a UAE driving license is straightforward for holders of licenses from many countries (direct conversion), while others must complete driving school at institutions like Emirates Driving Institute or Belhasa Driving Center.",
  internationalConnectivity: "The UAE has arguably the best international air connectivity in the world. Dubai International Airport (DXB) is one of the busiest airports globally, serving as the hub for Emirates airline with direct flights to over 150 destinations across six continents. Abu Dhabi International Airport (AUH) serves as the hub for Etihad Airways. Dubai's Al Maktoum International Airport (DWC) handles increasing cargo and charter traffic. Flight times are favorable: 7 hours to London, 5 hours to Mumbai, 4 hours to Nairobi, and 16 hours to New York. The UAE's geographic position between Europe, Asia, and Africa makes it a natural transit hub, and residents benefit from frequent, competitive flight options in every direction.",
  travelExploration: "Within the UAE, weekend activities include desert safaris (dune bashing, camel rides, overnight camping), the beaches and water parks of Dubai and Ras Al Khaimah, the mountainous terrain of Hatta and Jebel Jais (the UAE's highest peak), and the cultural attractions of Sharjah (museums and heritage areas) and Al Ain (oasis city, UNESCO site). The Louvre Abu Dhabi on Saadiyat Island is a world-class museum. Regionally, Oman (Musandam peninsula, Muscat) is a popular weekend getaway — just a 2-hour drive from Dubai. Bahrain is a short flight away. The Maldives, Sri Lanka, Georgia, and Jordan are all within 3-5 hours by air and are favorite short-break destinations for UAE residents.",
  considerations: [
    "Summer Heat: From June through September, temperatures regularly exceed 45°C with extreme humidity (70-90%). Outdoor activity during midday is effectively impossible. Daily life moves entirely indoors during these months, and car AC systems run constantly. Utility bills spike due to air conditioning.",
    "Sponsorship System: Your residency is tied to your employer (sponsor) or your own visa (Golden Visa, freelance, investor). Losing your job on an employer-sponsored visa gives you 30 days to find a new sponsor or leave the country. The Golden Visa and freelance visa remove this dependency.",
    "VoIP Restrictions: WhatsApp calls, FaceTime, and similar VoIP services are restricted by UAE telecom regulations. Business conferencing tools (Zoom, Teams) generally work, but personal VoIP quality is inconsistent. This is a significant lifestyle adjustment for many newcomers.",
    "Alcohol Regulations: Alcohol is legal and widely available in licensed hotels, restaurants, and clubs in Dubai and Abu Dhabi. Personal consumption at home requires a liquor license (now free and easy to obtain in Dubai). Public drunkenness and drink-driving are serious criminal offenses that can result in fines, imprisonment, and deportation.",
    "Financial Planning: With no state pension, no unemployment insurance, and no public safety net, you must actively manage your own retirement savings, emergency fund, and insurance coverage. Many expats fall into the trap of lifestyle inflation and leave the UAE with less savings than expected."
  ],
  mistakes: [
    "Not negotiating the full employment package. Base salary is only one component — housing allowance, annual flights, schooling contribution, health insurance tier, and end-of-service gratuity should all be negotiated before signing.",
    "Swearing in public or online. Offensive language, rude gestures (including the middle finger), and disparaging remarks on social media can result in fines, imprisonment, or deportation if reported. Defamation laws are strictly enforced.",
    "Taking photos of people without their consent, especially women and children. Privacy laws are strict, and violations can lead to legal action.",
    "Underestimating housing costs and paying patterns. Annual rent paid in 1-4 cheques requires significant upfront capital. Budget for agent fees (typically 5%), security deposit, DEWA connection, and Ejari registration on top of rent.",
    "Assuming Dubai represents the entire UAE. Each emirate has different rules, licensing requirements, and cultural norms. What is acceptable in Dubai may not be in Sharjah, and Abu Dhabi has its own distinct character and regulations."
  ],
  emergency: [
    {
      number: '999',
      service: 'Police',
      description: 'Emergency police line. Available across all emirates. Operators speak Arabic and English.'
    },
    {
      number: '998',
      service: 'Ambulance',
      description: 'Medical emergency and ambulance services. National ambulance service available 24/7.'
    },
    {
      number: '997',
      service: 'Civil Defence (Fire)',
      description: 'Fire department and civil defence emergencies. Available across all emirates.'
    }
  ],
  sources: [
    {
      name: 'The Official Portal of the UAE Government (u.ae)',
      category: 'Government Services',
      description: 'Comprehensive portal for all UAE government services, visa information, residency guides, and emirate-specific resources.',
      link: 'https://u.ae/en'
    },
    {
      name: 'ICP (Federal Authority for Identity, Citizenship, Customs and Port Security)',
      category: 'Immigration & Identity',
      description: 'Authority responsible for Emirates ID issuance, visa processing, entry permits, and residency management.',
      link: 'https://icp.gov.ae/en/'
    },
    {
      name: 'MOHRE (Ministry of Human Resources and Emiratisation)',
      category: 'Employment & Labour',
      description: 'Regulates employment contracts, labour disputes, work permits, and Emiratization policies for the private sector.',
      link: 'https://www.mohre.gov.ae/en/home.aspx'
    },
    {
      name: 'Dubai Land Department / RERA',
      category: 'Housing & Real Estate',
      description: 'Regulates the real estate market in Dubai, including Ejari tenancy registration and the Rental Disputes Settlement Centre.',
      link: 'https://dubailand.gov.ae/en/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to the UAE, consult the UAE Ministry of Foreign Affairs or a UAE embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/uae',
    mfaLink: 'https://www.mofa.gov.ae/en'
  },
  serviceDirectory: {
    title: "Service Directory - United Arab Emirates",
    description: "Examples of large, commonly used service providers people often interact with when relocating to the United Arab Emirates.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Firms assisting with residence visas, employment visas, Golden Visa applications, free zone setups, and regulatory compliance.",
        providers: [
          { name: "Fragomen UAE", link: "https://www.fragomen.com" },
          { name: "Al Tamimi & Company", link: "https://www.tamimi.com" },
          { name: "PRO Partner Group", link: "https://www.propartnergroup.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms for long-term rentals, property purchases, and Ejari/Tawtheeq registration assistance.",
        providers: [
          { name: "Bayut", link: "https://www.bayut.com" },
          { name: "Property Finder", link: "https://www.propertyfinder.ae" },
          { name: "Betterhomes", link: "https://www.bhomes.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Accounting and advisory firms supporting corporate setup, VAT compliance, free zone structuring, and cross-border income.",
        providers: [
          { name: "Deloitte UAE", link: "https://www2.deloitte.com/ae" },
          { name: "KPMG Lower Gulf", link: "https://kpmg.com/ae" },
          { name: "EY Middle East", link: "https://www.ey.com/en_ae" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International relocation providers covering shipping, customs clearance, storage, and destination services.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "Writer Relocations", link: "https://www.writerrelocations.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Language training and cultural orientation services for expatriates, including Arabic courses from conversational Gulf dialect to Modern Standard Arabic.",
        providers: [
          { name: "Berlitz UAE", link: "https://www.berlitz.com/en-ae" },
          { name: "Eton Institute", link: "https://etoninstitute.com" },
          { name: "British Council UAE", link: "https://www.britishcouncil.ae" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major hospital networks and healthcare groups providing medical services across the UAE.",
        providers: [
          { name: "Cleveland Clinic Abu Dhabi", link: "https://www.clevelandclinicabudhabi.ae" },
          { name: "Mediclinic Middle East", link: "https://www.mediclinic.ae" },
          { name: "Aster DM Healthcare", link: "https://www.asterdmhealthcare.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms and platforms connecting international talent with UAE-based employers.",
        providers: [
          { name: "GulfTalent", link: "https://www.gulftalent.com" },
          { name: "Michael Page Middle East", link: "https://www.michaelpage.ae" },
          { name: "Robert Half UAE", link: "https://www.roberthalf.ae" }
        ]
      }
    ]
  }
};
