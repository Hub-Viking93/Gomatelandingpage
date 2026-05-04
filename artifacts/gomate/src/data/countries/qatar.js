export const qatar = {
  id: 'qatar',
  slug: 'qatar',
  name: 'Qatar',
  region: 'Middle East',
  complexity: 'Medium',
  languages: ['Arabic', 'English'],
  shortDescription: 'A peninsula of futuristic skylines and high disposable income, where life is lived indoors.',
  heroImage: 'https://images.unsplash.com/photo-1700901742651-6b353164caf3?',
  flagAlt: 'Flag of Qatar',
  atAGlance: "Qatar is one of the wealthiest nations on Earth per capita, a small peninsula jutting into the Persian Gulf that has transformed itself from a quiet fishing and pearling economy into a global player in energy, finance, sports, and diplomacy. The population is overwhelmingly expatriate — roughly 85% of residents are foreign nationals — creating a highly transient, multicultural society where social life often centers around employer-provided compounds, hotel restaurants, and private clubs. Doha, the capital, is a city of dramatic contrasts: futuristic skyscrapers in West Bay stand minutes from the ancient alleyways of Souq Waqif. Daily life is extremely comfortable and safe, but heavily structured by the kafala sponsorship system that ties your residency to your employer. The extreme summer heat, regularly exceeding 45C with punishing humidity, pushes most activity indoors from May through October. Salaries are tax-free and often include generous packages covering housing, education, and annual flights. However, the cost of maintaining a Western lifestyle — international schooling, dining out, weekend entertainment — can erode savings faster than expected. For newcomers, the adjustment is less about language (English is widely used) and more about understanding the unwritten social hierarchies, navigating bureaucratic processes that require patience, and accepting that Qatar is a place most people come to temporarily, often staying far longer than they originally planned.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: '30 days (Visa Waiver for many)',
    costOfLiving: 'High',
    primaryLanguages: 'English (Business), Arabic (Official)',
  },
  visas: [
    {
      name: 'Hayya Entry Visa',
      targetAudience: 'Tourists, Short-term visitors',
      useCase: 'Originally developed for the 2022 FIFA World Cup, the Hayya platform has evolved into the primary tourist entry system for Qatar. Citizens of many nationalities can apply online for short-term visits covering tourism, family visits, or business meetings. The process is straightforward and typically approved within 48 hours.',
      duration: '30 days',
      link: 'https://hayya.qatar2022.qa/'
    },
    {
      name: 'Work Residence Permit',
      targetAudience: 'Employed professionals',
      useCase: 'The standard work visa for foreign employees, sponsored and processed by the employer through the Ministry of Interior. Your employer handles the application, medical exam coordination, and QID issuance. You cannot work without this permit, and it is tied strictly to your sponsoring employer. Changing jobs requires a formal No Objection Certificate or meeting specific conditions under the 2020 labor reforms.',
      duration: '1-3 years, renewable',
      link: 'https://portal.moi.gov.qa/'
    },
    {
      name: 'Property Investment Visa',
      targetAudience: 'Investors, Property buyers',
      useCase: 'Purchasing property worth QAR 730,000 or more (approximately $200,000 USD) in designated freehold areas such as The Pearl, Lusail, or West Bay Lagoon grants eligibility for a self-sponsored residence permit. This visa provides independence from employer sponsorship and is popular with investors and those seeking long-term residency without traditional employment.',
      duration: 'Renewable with property ownership',
      link: 'https://portal.moi.gov.qa/'
    },
    {
      name: 'Family Residence Visa',
      targetAudience: 'Spouses, Dependants',
      useCase: 'For spouses and children of work visa holders. The primary sponsor must meet a minimum salary threshold (currently around QAR 10,000/month) to qualify for family sponsorship. The sponsor applies through the MOI portal, and dependants receive their own QID cards.',
      duration: 'Linked to sponsor permit',
      link: 'https://portal.moi.gov.qa/'
    },
    {
      name: 'Freelance Work Permit',
      targetAudience: 'Freelancers, Self-employed professionals',
      useCase: 'Introduced as part of Qatar\'s economic diversification, this permit allows qualified professionals to work independently without a traditional employer sponsor. Applicants must demonstrate relevant qualifications and meet financial requirements. Processed through the Ministry of Labour.',
      duration: '1 year, renewable',
      link: 'https://www.mol.gov.qa/'
    }
  ],
  requirements: [
    {
      title: 'QID (Qatar ID Card)',
      explanation: 'A biometric smart card issued to all residents of Qatar containing a unique 11-digit identification number. It serves as your national identity document within the country and contains your visa type, employer details, and personal information.',
      importance: 'The QID is the foundation of daily life in Qatar. Without it, you cannot open a bank account, sign a mobile phone contract, rent accommodation, register a vehicle, access healthcare, or use most government services. You must carry it at all times — police can request to see it. The card also functions as your health card when linked to Hamad Medical Corporation services.',
      link: 'https://portal.moi.gov.qa/'
    },
    {
      title: 'Medical Examination',
      explanation: 'All work visa applicants must pass a mandatory medical examination at a government-approved medical commission center. The exam includes blood tests (HIV, Hepatitis B/C, syphilis), chest X-ray (tuberculosis screening), and a general physical examination.',
      importance: 'Your residence permit will not be issued without passing this medical exam. The results are valid for a limited period, so timing matters if there are delays in your visa processing. The exam is conducted at designated Medical Commission centers in Doha and typically takes half a day.',
      link: 'https://portal.moi.gov.qa/'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a local bank account requires your QID, passport, employment letter, and salary certificate. Major banks include Qatar National Bank (QNB), Commercial Bank of Qatar, and Doha Bank. Some banks also require a minimum salary threshold.',
      importance: 'Most employers pay salaries exclusively via bank transfer, and landlords require post-dated cheques or direct debit arrangements. International transfers, credit card applications, and utility payments all depend on having a local account. QNB and Commercial Bank offer the most extensive ATM and branch networks.',
      link: 'https://www.qcb.gov.qa/'
    },
    {
      title: 'Metrash2 Registration',
      explanation: 'The official mobile application of the Ministry of Interior, providing digital access to over 300 government services including visa renewals, traffic fine payments, exit permit status, and QID-related services.',
      importance: 'Metrash2 has become essential for managing your residency status and interacting with government services. Many processes that previously required in-person visits can now be completed through the app. Registration requires your QID number and a local mobile number.',
      link: 'https://portal.moi.gov.qa/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Qatar's economy is dominated by oil and natural gas (the country holds the world's third-largest natural gas reserves), but significant diversification into finance, construction, aviation, healthcare, education, and sports has broadened the job market. Qatar Airways, Qatar Foundation, and Qatar Energy are among the largest employers. English is the primary working language in most professional environments.",
    whereToLook: [
      "LinkedIn",
      "Bayt.com",
      "GulfTalent",
      "Qatar Airways and Qatar Foundation career portals",
      "Naukrigulf"
    ],
    realityChecks: [
      "Employment is tied to employer sponsorship. Your visa, residency, and right to remain in the country depend on your employer. Losing your job means losing your legal status unless you find a new sponsor quickly.",
      "Many positions are filled through recruitment agencies and personal referrals before being publicly advertised. Networking through professional events and industry connections is critical.",
      "Qatarization policies require companies to prioritize Qatari nationals for certain roles, particularly in government-linked entities and the energy sector. This can affect hiring timelines and available positions for expats.",
      "Contract terms strictly govern your rights, notice periods, and end-of-service benefits. Read your employment contract thoroughly and negotiate before signing — changes after signing are difficult."
    ]
  },
  salaryReality: {
    overview:
      "Salaries in Qatar are tax-free, making gross pay effectively equal to net pay. Compensation packages for professional roles often include housing allowance (or company-provided accommodation), annual flights, education allowance for children, and health insurance. Qatar typically offers the highest salaries in the GCC for equivalent roles, particularly in oil and gas, aviation, and construction engineering.",
    realityChecks: [
      "No income tax means your gross salary is your take-home pay, but do not assume zero deductions — some employers withhold for company housing or other services.",
      "Housing is the single largest expense. A two-bedroom apartment in West Bay or The Pearl can cost QAR 8,000-15,000 per month. Employer-provided housing allowance varies significantly by company and seniority level.",
      "International school fees range from QAR 25,000 to QAR 80,000 per year per child, depending on the school and curriculum. This is often the deciding factor in whether families can save money.",
      "End-of-service gratuity is calculated at 21 days of basic salary per year for the first five years, and 30 days per year thereafter. This can represent a significant lump sum when leaving."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Housing allowance limits and whether the employer provides accommodation directly versus a cash allowance",
      "International school fees, which can exceed the housing allowance for families with multiple children",
      "The quality and coverage limits of employer-provided health insurance — some plans cover only basic care",
      "Annual flight home allowance (standard in many contracts but varies from economy class to business class)"
    ]
  },
  housingSystem: {
    overview:
      "Qatar has a modern and rapidly expanding housing market, with most expats renting apartments in compounds, standalone towers, or the mixed-use developments at The Pearl-Qatar and Lusail City. Popular expat areas include West Bay (close to business district), The Pearl (upscale island community), Al Sadd (mid-range and central), and Ain Khaled (family-friendly compounds). Rents are typically paid monthly or quarterly by post-dated cheques, with a security deposit of one to two months required upfront.",
    expectations:
      "Start your housing search on Property Finder Qatar, Q-Rent, and local Facebook expat groups. Always inspect the property in person and test the air conditioning before signing. Many buildings include gym, pool, and parking as part of the rent. Utility costs (Kahramaa — electricity and water) are additional and can spike dramatically in summer due to heavy AC usage. Landlords are required to register tenancy contracts with the municipality, which protects both parties."
  },
  healthcareReality:
    "Qatar's healthcare system is anchored by Hamad Medical Corporation (HMC), a government-funded network of hospitals including Hamad General Hospital, Al Wakra Hospital, Women's Hospital, and the specialized Sidra Medicine for women and children. HMC provides high-quality care at subsidized rates for QID holders. The private sector is led by Al Ahli Hospital, Doha Clinic Hospital, and Turkish Hospital, offering shorter wait times and more personalized service. Employer-provided health insurance is mandatory for all foreign workers under Qatar law. The quality of care is excellent for most conditions, with state-of-the-art facilities and internationally trained staff. Complex or rare conditions may still be referred to specialized centers abroad. Pharmacies are widespread, and many medications that require prescriptions in Western countries are available over the counter.",
  digitalLife: {
    overview:
      "Qatar has invested heavily in digital infrastructure. The Hukoomi e-government portal and the Metrash2 mobile app together provide access to hundreds of government services, from visa renewals to traffic fine payments. Internet speeds are fast and reliable, with Ooredoo and Vodafone Qatar as the main telecom providers.",
    essentials: [
      "Metrash2 (Ministry of Interior services app)",
      "Ehteraz (health app, required for certain facilities)",
      "QPay or Ooredoo Money (mobile payment)",
      "Talabat or Snoonu (food delivery)"
    ],
    whatSurprisesNewcomers: [
      "VoIP services including WhatsApp calls and FaceTime work in Qatar, unlike some neighboring Gulf states where they are blocked.",
      "Many government services are unavailable until your QID is fully activated and registered, which can take several weeks after arrival.",
      "Ooredoo and Vodafone both offer fast 5G coverage across Doha, making mobile internet a reliable backup for home connections.",
      "Alcohol can only be purchased through the Qatar Distribution Company (QDC) with a permit linked to your QID — the entire process is tracked digitally."
    ]
  },
  culture: {
    text: 'Qatar is an Islamic state where traditions and modesty are deeply respected. Qatari hospitality is legendary — guests are offered Arabic coffee (gahwa) and dates as a sign of welcome, and declining can be seen as rude. Doha is cosmopolitan with a diverse expat population, but local sensibilities regarding dress and public behavior should always be observed. The weekend is Friday-Saturday, with Friday morning being particularly quiet as it is the main prayer time. Souq Waqif is the social and cultural heart of Doha, especially in the cooler evening hours. Qatari society places high value on family, generosity, and reputation. Building personal relationships before conducting business is essential — meetings often begin with extensive small talk over tea or coffee.',
    highlights: [
      'Souq Waqif is the traditional market and social hub of Doha. Evenings here are vibrant with live falcons, spice stalls, and restaurants.',
      'During Ramadan, eating, drinking, and smoking in public during daylight hours is prohibited for everyone, including non-Muslims. Working hours are shortened and the pace of life changes dramatically.',
      'Dress modestly in public: shoulders and knees should be covered in malls, souqs, and government buildings. Swimwear is only appropriate at pools and private beaches.',
      'Photographing Qatari nationals, especially women, without explicit permission is considered deeply offensive and can lead to confrontation or legal issues.',
      'Majlis culture is central to Qatari life — these formal sitting rooms are where business, social, and family discussions happen. Men and women typically socialize separately in traditional settings.'
    ]
  },
  transportationMobility:
    "Qatar has invested massively in public transport infrastructure, headlined by the Doha Metro, which opened in 2019 with three lines (Red, Green, Gold) connecting major areas including the airport, West Bay, Education City, and Lusail. The metro is modern, clean, and affordable, with a dedicated Gold Class section. The Karwa bus network supplements the metro but is less commonly used by expats. In practice, most residents still drive or rely on ride-hailing apps — Uber and Careem are widely available and affordable. Traffic congestion in Doha, particularly along the Corniche and D-Ring Road during rush hours, can be severe. Obtaining a Qatari driving license is straightforward for holders of licenses from GCC countries or many Western nations through a direct conversion process at the Traffic Department.",
  internationalConnectivity:
    "Hamad International Airport (DOH) is one of the world's top-rated airports, serving as the hub for Qatar Airways, a member of the Oneworld alliance. Direct flights connect Doha to over 170 destinations across six continents, with particularly strong connections to Europe, South Asia, Southeast Asia, and Africa. Flight time to London is approximately seven hours, to Singapore about eight hours, and to New York approximately 14 hours. The airport itself features a massive indoor garden, swimming pool, and premium lounge facilities that make long layovers comfortable.",
  travelExploration:
    "Despite its small size (roughly 11,500 square km), Qatar offers several worthwhile experiences. The Museum of Islamic Art, designed by I.M. Pei, is world-class. The National Museum of Qatar, shaped like a desert rose, houses the country's cultural heritage. Beyond Doha, the Inland Sea (Khor Al Adaid), a UNESCO-recognized site where desert dunes meet the Persian Gulf, is a popular weekend destination accessible by 4x4. The Al Zubarah Fort in the north is a UNESCO World Heritage Site. During the cooler months (November through March), outdoor activities including desert camping, kayaking in the mangroves, and beach outings become practical. Weekend travel to Bahrain, Dubai, and Oman is popular and affordable via short flights.",
  considerations: [
    'Extreme Heat: From May through October, temperatures regularly exceed 45C with crushing humidity. Outdoor activity during midday is essentially impossible. Your entire lifestyle, from commuting to socializing, revolves around air-conditioned environments during these months.',
    'Sponsorship System: Despite 2020 labor reforms that eased some restrictions, your residency remains tied to your employer. Changing jobs now requires giving proper notice but no longer requires an exit permit for most workers. However, the practical reality of switching employers while maintaining residency continuity can still be complex.',
    'Alcohol Restrictions: Alcohol is only available in licensed hotels, restaurants, and through the Qatar Distribution Company (QDC) for residents with a government-issued permit. Public intoxication is a serious criminal offense that can result in fines, imprisonment, and deportation.',
    'Social Conservatism: Qatar is socially conservative. Public displays of affection are frowned upon and can lead to legal consequences. Cohabitation outside of marriage is technically illegal. LGBTQ+ relationships are criminalized under Qatari law.',
    'Cost Creep: While the tax-free salary sounds generous, costs add up quickly. International schooling, dining out, weekend entertainment, and maintaining a Western lifestyle can consume a large portion of even a high salary. Many expats find they save less than expected.'
  ],
  mistakes: [
    'Photographing local women or military/government installations without permission. This is taken extremely seriously and can result in police involvement, phone confiscation, or legal charges.',
    'Not negotiating the full employment package before signing your contract. Housing allowance, education allowance, annual flights, health insurance quality, and end-of-service gratuity are often more important than the base salary number.',
    'Assuming your employer will handle all administrative matters promptly. Follow up proactively on your QID issuance, health insurance activation, and bank account setup — delays are common and can leave you stranded without access to basic services.',
    'Crossing to Bahrain or other Gulf states without confirming your re-entry requirements. Some nationalities need specific visa arrangements, and problems at the border can result in being stranded outside Qatar.',
    'Underestimating Ramadan. The entire rhythm of life changes for a month. Restaurants close during daytime, business hours shift, and eating, drinking, or smoking in public during fasting hours is illegal regardless of your religion.'
  ],
  emergency: [
    {
      number: '999',
      service: 'Police, Fire, Ambulance',
      description: 'Unified emergency number for all services. Operators speak Arabic and English.'
    },
    {
      number: '4439 9999',
      service: 'Hamad Medical Corporation (Ambulance)',
      description: 'Direct ambulance dispatch for the main public hospital network. Available 24/7.'
    },
    {
      number: '4444 1017',
      service: 'Kahramaa Emergency',
      description: 'Dedicated line for electricity and water supply emergencies.'
    }
  ],
  sources: [
    {
      name: 'Hukoomi (e-Government Portal)',
      category: 'Government Services',
      description: 'Central portal for all Qatar government services including immigration, residency, driving licenses, and public utilities.',
      link: 'https://hukoomi.gov.qa/en'
    },
    {
      name: 'Ministry of Interior (MOI Portal)',
      category: 'Immigration & Residency',
      description: 'Authority managing residence permits, visa renewals, QID issuance, and entry/exit procedures for foreign nationals.',
      link: 'https://portal.moi.gov.qa/'
    },
    {
      name: 'Ministry of Labour',
      category: 'Employment',
      description: 'Manages labor law compliance, work permits, employment contracts, and worker welfare programs.',
      link: 'https://www.mol.gov.qa/'
    },
    {
      name: 'Visit Qatar',
      category: 'Tourism & Lifestyle',
      description: 'Official tourism board providing guides to attractions, events, dining, and cultural experiences.',
      link: 'https://www.visitqatar.qa/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Qatar, consult the Qatar Ministry of Foreign Affairs or a Qatari embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/qatar',
    mfaLink: 'https://www.mofa.gov.qa/en'
  },
  serviceDirectory: {
    title: "Service Directory - Qatar",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Qatar.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal assistance for visa applications, work permits, residence renewals, and employer transfers.",
        providers: [
          { name: "Fragomen Qatar", link: "https://www.fragomen.com" },
          { name: "Al Tamimi & Company Qatar", link: "https://www.tamimi.com" },
          { name: "Clyde & Co Qatar", link: "https://www.clydeco.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Professionals handling property rentals, purchases, and relocation housing across Doha and Lusail.",
        providers: [
          { name: "Property Finder Qatar", link: "https://www.propertyfinder.qa" },
          { name: "Just Real Estate Qatar", link: "https://www.justrealestateqatar.com" },
          { name: "CBRE Qatar", link: "https://www.cbre.qa" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Qatari commercial regulations, corporate tax compliance, and international tax planning for residents.",
        providers: [
          { name: "PwC Qatar", link: "https://www.pwc.com/qa" },
          { name: "EY Qatar", link: "https://www.ey.com/en_qa" },
          { name: "KPMG Qatar", link: "https://kpmg.com/qa" }
        ]
      },
      {
        name: "Moving Companies",
        description: "Relocation services for international shipping, packing, customs clearance, and local moves.",
        providers: [
          { name: "Crown Relocations Qatar", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "GAC Qatar", link: "https://www.gac.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Schools and courses offering Arabic language training, from conversational Gulf dialect to Modern Standard Arabic.",
        providers: [
          { name: "Berlitz Qatar", link: "https://www.berlitz.com" },
          { name: "British Council Qatar", link: "https://www.britishcouncil.qa" },
          { name: "Fanar - Qatar Islamic Cultural Center", link: "https://www.fanar.gov.qa" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major hospitals and healthcare groups for medical services and specialist care.",
        providers: [
          { name: "Sidra Medicine", link: "https://www.sidra.org" },
          { name: "Hamad Medical Corporation", link: "https://www.hamad.qa" },
          { name: "Al Ahli Hospital", link: "https://www.ahlihospital.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms connecting international talent with Qatar-based employers across industries.",
        providers: [
          { name: "Hays Qatar", link: "https://www.hays.com" },
          { name: "Michael Page Middle East", link: "https://www.michaelpage.ae" },
          { name: "Bayt.com", link: "https://www.bayt.com" }
        ]
      }
    ]
  }
};
