export const kuwait = {
  id: 'kuwait',
  slug: 'kuwait',
  name: 'Kuwait',
  region: 'Middle East',
  complexity: 'High',
  languages: ['Arabic', 'English'],
  shortDescription: 'Tax-free, conservative, and highly expatriate — the Gulf state where the kafala system still shapes daily life.',
  heroImage: 'https://images.unsplash.com/photo-1511371496040-1fb40794e675',
  flagAlt: 'Flag of Kuwait',
  atAGlance: "Kuwait is one of the wealthiest countries in the world per capita, a small Gulf state sitting on roughly 6% of the world's proven oil reserves and governed as a constitutional emirate with the oldest elected parliament in the Gulf. Roughly 70% of the resident population is foreign — one of the highest expatriate ratios anywhere — which shapes almost every aspect of daily life, from labor markets to retail to the social fabric. The Kuwaiti dinar (KWD) is the highest-valued currency unit in the world, with 1 KWD equal to approximately USD 3.26, which produces the odd experience of headline salaries looking modest in local numbers and substantial when converted. Kuwait City, the capital and overwhelming economic center, stretches along a coastline dominated by the iconic Kuwait Towers, a skyline of increasing modernity, and a dense network of malls and gated residential developments. Life in Kuwait is comfortable materially but heavily structured by the kafala sponsorship system, which ties your residency and mobility to your employer more tightly than any other Gulf state. Unlike the UAE or Qatar, Kuwait has not undertaken extensive social liberalization — alcohol is entirely banned (production, import, and consumption), cinemas were only re-legalized recently in limited form, and public life is more conservative than in Dubai or Manama. Summers are brutal, with Kuwait holding some of the highest recorded temperatures in human history — 54C has been recorded, and 45-50C is normal from June through August. Expatriate life centers around workplace, family, compound communities, malls, and private diwaniya gatherings (traditional Kuwaiti social salons). The Civil ID is the single most important document in your daily life; without it, nothing functions.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Varies (eVisa for eligible nationalities)',
    costOfLiving: 'High',
    primaryLanguages: 'Arabic (Official), English (Business)',
  },
  visas: [
    {
      name: 'Work Residence Visa (Article 18)',
      targetAudience: 'Employed professionals in the private sector',
      useCase: "The standard private-sector work visa, sponsored by a Kuwaiti employer (the kafeel). The employer applies through the Public Authority for Manpower (PAM) and the General Directorate of Residency Affairs under the Ministry of Interior. A medical fitness exam, security clearance, and certified educational qualifications are required. The visa is strictly tied to the sponsoring employer — changing employers requires formal release and a new visa application.",
      duration: '1-3 years, renewable',
      link: 'https://www.pam.gov.kw/'
    },
    {
      name: 'Government Sector Visa (Article 17)',
      targetAudience: 'Public sector employees',
      useCase: "Issued to foreign nationals hired by Kuwaiti government ministries, public institutions, and state-linked organizations such as Kuwait Oil Company and Kuwait Petroleum Corporation. The sponsoring government entity handles the application. Terms, benefits, and stability tend to differ from private sector Article 18 visas.",
      duration: 'Linked to government contract',
      link: 'https://www.moi.gov.kw/'
    },
    {
      name: 'Dependent Visa (Article 22)',
      targetAudience: 'Spouses, Children',
      useCase: "Issued to spouses and unmarried children of residents holding valid work visas. The sponsoring resident must meet a minimum salary threshold (currently KWD 500/month for spouse sponsorship, with higher thresholds for certain nationalities). Housing arrangements must be deemed suitable. Adult sons typically age out of dependent status at 18 unless enrolled in education.",
      duration: 'Linked to sponsor permit',
      link: 'https://www.moi.gov.kw/'
    },
    {
      name: 'Tourist / Visit eVisa',
      targetAudience: 'Short-term visitors',
      useCase: "Citizens of approximately 50 eligible countries can apply for an eVisa through the Ministry of Interior portal for short-term tourism or family visits. Processing is typically 1-3 working days. Some nationalities require visa sponsorship by a Kuwaiti resident or hotel. Holders of valid GCC residence permits in certain professional categories may also obtain visit visas on arrival.",
      duration: '30-90 days',
      link: 'https://evisa.moi.gov.kw/'
    },
    {
      name: 'Domestic Worker Visa (Article 20)',
      targetAudience: 'Household staff',
      useCase: "A separate visa category for domestic workers (drivers, housekeepers, nannies, cooks) sponsored by a Kuwaiti or resident family. Governed by different regulations than Articles 17 and 18, including the 2015 Domestic Workers Law. The kafala ties for this category remain particularly tight and have drawn international attention regarding worker protections.",
      duration: '1-2 years, renewable',
      link: 'https://www.moi.gov.kw/'
    },
    {
      name: 'GCC National Free Movement',
      targetAudience: 'Citizens of Saudi Arabia, UAE, Bahrain, Oman, Qatar',
      useCase: "Citizens of Gulf Cooperation Council (GCC) member states enter Kuwait visa-free using a national ID card and may live, work, own property, and run businesses on broadly the same footing as Kuwaitis under GCC reciprocity arrangements. They are exempt from the kafala/Article framework that governs other foreign residents, and have access to public sector employment in many categories.",
      duration: 'Indefinite (subject to GCC reciprocity)',
      link: 'https://www.moi.gov.kw/'
    },
    {
      name: 'Property Investment Residency',
      targetAudience: 'Foreign property investors',
      useCase: "Recently expanded scheme allowing qualifying foreign investors who purchase property in designated investment zones (such as parts of the Sabah Al-Ahmad Sea City and select developments) to obtain longer-term residency without the standard employer-sponsored kafala route. Minimum investment thresholds and approved-developer requirements apply, and the framework continues to evolve as part of post-2023 economic diversification reforms.",
      duration: 'Linked to property ownership (multi-year, renewable)',
      link: 'https://www.moi.gov.kw/'
    }
  ],
  requirements: [
    {
      title: 'Civil ID Card (Bataqa Madaniya)',
      explanation: "A biometric smart card issued by the Public Authority for Civil Information (PACI) to all residents, containing a unique 12-digit civil number. The civil number is the core identifier used by nearly every government and private-sector system in Kuwait.",
      importance: "Daily life in Kuwait is effectively impossible without a valid Civil ID. You cannot open a bank account, sign a phone contract, rent an apartment, register utilities, access healthcare, obtain a driving license, or complete most transactions. Kuwaiti law requires residents to carry the Civil ID at all times, and police can request to see it at checkpoints. Apply through PACI immediately after your residence visa is stamped.",
      link: 'https://www.paci.gov.kw/'
    },
    {
      title: 'Medical Fitness Examination',
      explanation: "A mandatory medical screening required for all residence visa applicants, conducted at designated government clinics operated by the Ministry of Health. The examination includes blood tests for HIV, hepatitis B and C, syphilis, and a chest X-ray for tuberculosis. Fingerprinting and security clearance are taken at the same time.",
      importance: "Your residence visa cannot be finalized without a clean medical examination. Results are valid for a limited period, and delays can require retesting. The test must be completed inside Kuwait at an approved government facility — certificates from your home country are not accepted for visa purposes.",
      link: 'https://www.moh.gov.kw/'
    },
    {
      title: 'Bank Account',
      explanation: "Opening a local bank account requires your Civil ID, passport with valid residence stamp, salary certificate from your employer, and a local address confirmation. Major banks include National Bank of Kuwait (NBK), Kuwait Finance House (KFH, Islamic banking), Gulf Bank, Burgan Bank, and HSBC Kuwait. Minimum salary thresholds apply at some banks.",
      importance: "Salaries are paid by mandatory bank transfer under Kuwait's Wage Protection System, and rental contracts typically require post-dated cheques drawn from a local account. Without a bank account you cannot settle utility bills by direct debit, receive international transfers efficiently, or conduct normal financial life. NBK has the most extensive branch and ATM network for expatriates.",
      link: 'https://www.cbk.gov.kw/'
    },
    {
      title: 'Kuwait Mobile ID (Hawiyati)',
      explanation: "The national digital identity app, launched in recent years, which links to your Civil ID and provides access to government services through a secure smartphone interface. Activation requires an in-person visit to PACI to link the app to your biometric data.",
      importance: "Hawiyati is increasingly required for digital government services, including e-signatures, residence renewals, and traffic fine payments. The government is actively expanding its use, and setting it up early reduces the friction of administrative tasks that would otherwise require office visits.",
      link: 'https://www.paci.gov.kw/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Kuwait's economy is dominated by oil and gas, with Kuwait Petroleum Corporation and its subsidiaries (Kuwait Oil Company, KNPC, KUFPEC, KPI) employing large numbers of foreign professionals. Beyond hydrocarbons, key sectors include banking and finance, construction and engineering, healthcare, education, and retail. The public sector is dominated by Kuwaiti nationals, while the private sector is overwhelmingly expatriate.",
    whereToLook: [
      "LinkedIn — the primary platform for professional roles, especially in oil and gas, banking, and multinational corporations",
      "Bayt.com — regional Middle East job portal with strong Kuwait coverage",
      "GulfTalent — Gulf-specific recruitment portal, widely used by Kuwait-based recruiters",
      "Naukrigulf — popular with professionals from the Indian subcontinent, who form a majority of the expat workforce",
      "Company career pages: KPC subsidiaries, NBK, Zain, Agility, and major hospitality groups"
    ],
    realityChecks: [
      "Your residence visa is tightly tied to your employer. The kafala system in Kuwait is stricter in practice than in the UAE, Qatar, or Oman — changing jobs typically requires formal employer release and a mandatory waiting period outside Kuwait in some cases.",
      "Kuwaitization policies require private sector companies to meet Kuwaiti national hiring quotas, and certain public sector roles are closed to foreigners. Hiring timelines and available positions for expatriates reflect these constraints.",
      "Salary packages are typically quoted as monthly basic salary plus allowances (housing, transport, annual flight, education). The structure matters for end-of-service indemnity calculations, which are based on basic salary only.",
      "Networking and referrals are critical. Kuwaiti business culture is heavily relationship-based, and diwaniya (male social gathering) connections still open doors for many senior roles."
    ]
  },
  salaryReality: {
    overview:
      "Kuwait offers tax-free salaries at the personal level, and the strong Kuwaiti dinar means take-home pay converts favorably to most currencies. A mid-level professional salary of KWD 1,500/month equals approximately USD 4,900/month tax-free. Compensation packages typically include housing allowance (or company-provided accommodation), transport allowance, annual flight home for the employee and family, and health insurance. End-of-service indemnity is a significant component of total compensation for longer-tenured employees.",
    realityChecks: [
      "No personal income tax means gross equals net for expatriates, and there are no social security deductions for foreign workers. However, some employers deduct for housing or other services provided directly.",
      "Housing is the largest expense. A two-bedroom apartment in Salmiya, Sharq, or Bneid Al-Gar typically costs KWD 500-900/month; family villas in Mishref, Jabriya, or Salwa run KWD 1,000-2,500/month.",
      "International school fees range from KWD 2,000 to KWD 6,500 per child per year, depending on curriculum and reputation. British, American, French, and Indian curriculum schools are all well represented.",
      "End-of-service indemnity is calculated at 15 days of basic salary per year for the first five years and one month per year thereafter. This can accumulate to a meaningful lump sum, particularly for long-tenured employees."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The distinction between basic salary and allowances — end-of-service indemnity is calculated on basic salary only, which matters for long-term financial planning",
      "Housing allowance structure — some employers cap the amount regardless of actual rent, others provide direct accommodation",
      "The cost of owning and running a car, which is effectively required given Kuwait's limited public transport — fuel is cheap (KWD 0.105/liter), but insurance and maintenance add up",
      "Annual flight entitlements — varies by employer, with some capped to economy class and others including family members"
    ]
  },
  housingSystem: {
    overview:
      "Kuwait's housing market is overwhelmingly rental-based for expatriates, with foreigners generally barred from owning freehold property outside specific designated investment schemes. Popular expatriate neighborhoods include Salmiya (central, dense, commercial), Hawally (mid-range, large South Asian community), Jabriya (family-friendly, near Kuwait University), Mahboula (affordable, coastal south), Fintas (mid-range coastal), and the upscale areas of Mishref, Salwa, and Bayan for families seeking villas. Kuwait City's core commercial districts (Sharq, Dasman, Qibla) feature high-rise apartments favored by professionals working downtown.",
    expectations:
      "Rental contracts are typically annual, with rent paid monthly or quarterly by post-dated cheques. Security deposits of one to two months' rent are standard, plus agency fees of roughly one month's rent. Always inspect the AC system (central AC is common, but in older buildings window units dominate and bills can be shocking), check water pressure (buildings rely on rooftop tanks), and verify that the landlord has an approved municipality-registered contract. Utility costs (electricity via MEW, water, internet via Zain, Ooredoo, or stc) are moderate by Gulf standards but rise significantly in summer."
  },
  healthcareReality:
    "Kuwait's healthcare system offers high-quality care across a mixed public-private structure. The Ministry of Health operates government hospitals (Al-Amiri, Mubarak Al-Kabeer, Farwaniya, Adan, Jahra), where expatriates can access services for modest fees upon payment of an annual health insurance charge tied to the residence visa. The private sector is extensive and growing, with leading hospitals including Al-Seef Hospital, Dar Al-Shifa Hospital, Taiba Hospital, New Mowasat Hospital, and the American Hospital. Employer-provided private health insurance is common for professional roles and typically covers private sector care without the queuing and bureaucracy of public facilities. Specialist care quality is generally high, with many physicians trained in the US, UK, or Egypt. Complex or rare conditions are sometimes referred abroad — a government program exists for approved medical tourism when in-country treatment is not available. Pharmacies are widespread, and many medications that require prescriptions in Western countries are sold over the counter.",
  digitalLife: {
    overview:
      "Kuwait has made meaningful investments in digital government under its Vision 2035 strategy, but the transition is uneven — many processes still require in-person visits despite digital portal availability. Internet infrastructure is strong, with Zain, stc, and Ooredoo providing fast mobile and fiber-to-the-home services across most residential areas.",
    essentials: [
      "Sahel — unified government services app providing access to residence, traffic, and civil affairs services",
      "Kuwait Mobile ID (Hawiyati) — national digital identity linked to your Civil ID for e-government access",
      "Careem — the dominant ride-hailing app; Uber operates on a smaller scale",
      "Talabat and Deliveroo — the dominant food and grocery delivery platforms, with Carriage and Jahez also active"
    ],
    whatSurprisesNewcomers: [
      "VoIP services are subject to restrictions: WhatsApp voice and video calls are blocked, FaceTime can be unreliable, and Skype audio/video is restricted. Business conferencing tools (Zoom, Teams, Google Meet) typically function for work purposes.",
      "Certain websites and content are filtered for moral or security reasons — dating apps, some news outlets, and content deemed offensive to Islam or the ruling family may be blocked. VPN usage exists in a legal gray area.",
      "Many government services that exist digitally in other Gulf states still require physical visits in Kuwait, and queues at PACI, Ministry of Interior offices, and Traffic Department can be long — visit early and bring all documents in duplicate.",
      "Streaming services (Netflix, Amazon Prime, Disney+) are available, though some content is region-restricted and edited to comply with local standards."
    ]
  },
  culture: {
    text: "Kuwaiti culture is rooted in Bedouin, seafaring, and merchant traditions, with Islam as the state religion and a strong sense of tribal and family identity. Kuwait is more socially conservative than the UAE or Qatar — alcohol is entirely banned (production, import, and consumption are criminal offenses with severe penalties), cohabitation outside marriage is illegal, and LGBTQ+ relationships are criminalized. The diwaniya, a traditional men's gathering where friends, family, business associates, and political figures meet in the evening to drink tea, discuss current events, and build relationships, remains a defining cultural institution. Women's equivalent gatherings exist but operate more discreetly. Family is the core social unit, and obligations to extended family take precedence over most individual plans. Hospitality is expansive — if you are invited to a Kuwaiti home, expect abundant food, multiple rounds of Arabic coffee and tea, and the expectation that you will stay for hours. The workweek runs Sunday-Thursday with Friday and Saturday as the weekend. Friday is the main day of prayer, and even secular expats notice the shift in rhythm — restaurants close during midday prayer, business slows, and family gatherings dominate the day.",
    highlights: [
      "Alcohol is completely banned. Do not attempt to bring it in, buy it, or consume it. Penalties include fines, imprisonment, deportation, and lashing (though the latter is rarely applied to foreigners in practice). This is a firm red line.",
      "The diwaniya is central to Kuwaiti social and political life. If you are invited to one, attend — it is a meaningful compliment and a rare window into how Kuwait actually works.",
      "Dress modestly in public. Shoulders and knees should be covered in malls, restaurants, and government buildings. Swimwear is only appropriate at private pools, beaches of private compounds, or hotel pools — not public beaches.",
      "During Ramadan, eating, drinking, and smoking in public during daylight hours is strictly illegal for everyone, Muslim or not. Working hours are officially shortened to six hours for all employees. Respect for the fast is taken seriously.",
      "Photographing Kuwaiti women, government buildings, royal palaces, or military installations is forbidden and can lead to serious legal consequences. Ask permission before photographing any person."
    ]
  },
  transportationMobility:
    "Kuwait is almost entirely car-dependent. Public transport is limited to a bus network run by Kuwait Public Transport Company (KPTC) and Citybus, which is heavily used by lower-income workers but rarely by professionals. There is no metro or rail system in operation, though a Kuwait Metropolitan Rapid Transit project has been in planning for years. Most residents own or lease vehicles. Ride-hailing through Careem and local apps is widely available and affordable. Fuel is among the cheapest in the world at approximately KWD 0.105 per liter (USD 0.34), and vehicle ownership costs are low. Traffic congestion in Kuwait City and along the main arteries (Gulf Road, Fahaheel Expressway, 40 Road) during rush hour is severe. Obtaining a Kuwaiti driving license requires your Civil ID, original home-country license, translated copy, eye test, and minimum salary (currently KWD 600/month for most nationalities). Driving standards in Kuwait are among the more aggressive in the Gulf — high speeds, abrupt lane changes, and frequent use of the horn are normal. Kuwait's traffic fatality rate per vehicle is one of the higher ones regionally.",
  internationalConnectivity:
    "Kuwait International Airport (KWI) is the country's main aviation gateway, serving as the hub for Kuwait Airways (the national carrier) and Jazeera Airways (a well-regarded low-cost carrier). Direct flights connect Kuwait to destinations across the Middle East, Europe, South Asia, Southeast Asia, and selective North American cities. Flight times: London about 7 hours, Dubai 1.5 hours, Mumbai 3.5 hours, New York approximately 13 hours. A significant airport expansion (Terminal 2) is underway and expected to dramatically increase capacity. Kuwait's geographic position makes it a practical base for travel across the Gulf and to the Indian subcontinent, and low-cost carriers including Jazeera, Flydubai, and Air Arabia serve regional routes frequently.",
  travelExploration:
    "Kuwait's small geographic size (about 17,800 square km) limits in-country travel options, but there are still worthwhile sights. The Kuwait Towers are the national icon. The Grand Mosque, The Avenues mall (one of the largest in the Middle East), the Al Shaheed Park, and the modern Sheikh Jaber Al-Ahmad Cultural Centre are central landmarks. Failaka Island, a short ferry ride from Kuwait City, preserves archaeological remains and World War II history. Outside the capital, Jal Al-Zor escarpment and Mutla Ridge offer desert landscapes and camping opportunities during the cooler months. Spring desert blooms in March are a popular weekend escape. Regional travel is extensive: short flights to Dubai, Bahrain, Doha, Muscat, Cairo, and Istanbul are frequent and affordable, and many residents use weekends and long holidays to explore the broader region.",
  considerations: [
    "Alcohol Ban: Kuwait is one of the few Gulf states where alcohol is entirely prohibited — no licensed bars, no hotel exceptions, no personal import allowances. Violations can result in imprisonment and deportation. Clandestine home brewing exists but carries severe legal risks. If alcohol is a significant part of your social life, Kuwait may not be for you.",
    "Kafala System: Kuwait's sponsorship system remains among the stricter ones in the Gulf. Your residency, movement, and ability to change jobs are tied to your employer. Transfer between employers often requires formal release or mandatory exit and re-entry, and some reforms adopted elsewhere in the region have been slower to reach Kuwait.",
    "Extreme Summer Heat: From June through early September, temperatures routinely exceed 50C with high humidity near the coast. Kuwait has recorded some of the highest temperatures in modern history. Daily life moves entirely indoors, utility bills spike, and outdoor activity during midday is essentially impossible.",
    "Conservative Social Environment: Public displays of affection, cohabitation outside marriage, and LGBTQ+ relationships are criminalized. Dress codes are more conservative than in Dubai or Bahrain. Entertainment options are more limited than in neighboring Gulf states — no clubs, no bar scene, and fewer mixed-gender social venues.",
    "Bureaucratic Friction: Kuwait's administrative processes tend to involve more in-person visits, paperwork, and delay than in the UAE or Qatar. Patience is essential, and arranging matters via your employer's PRO (Public Relations Officer) or a specialized document-clearing service saves significant time."
  ],
  mistakes: [
    "Attempting to bring, buy, or consume alcohol. Customs inspections at Kuwait International Airport are thorough, and discovery results in confiscation, fines, and potentially imprisonment or deportation. This is not a rule that is casually enforced.",
    "Photographing government buildings, military installations, palaces, or Kuwaiti women without explicit consent. Violations trigger police response, phone confiscation, and in some cases criminal charges.",
    "Signing an employment contract without understanding the housing and allowance structure. Basic salary determines your end-of-service indemnity, while housing allowance and transport allowance may or may not be guaranteed year over year. Read the contract carefully before signing.",
    "Ignoring Ramadan rules. Eating, drinking, or smoking in public during daylight hours is illegal for everyone during the holy month. Tinted windows do not shield you, and enforcement is real — violations can lead to fines and detention.",
    "Assuming Kuwait is functionally equivalent to Dubai. Entertainment, dining, nightlife, and social norms are notably different. Expatriates who arrive expecting a Dubai-like lifestyle often struggle; those who arrive with realistic expectations often find Kuwait rewarding, quiet, and family-friendly."
  ],
  emergency: [
    {
      number: '112',
      service: 'Unified Emergency',
      description: 'National unified emergency number for police, ambulance, and fire services. Operators speak Arabic and English. Available 24/7.'
    },
    {
      number: '777',
      service: 'Ambulance',
      description: 'Direct line for Ministry of Health ambulance services and medical emergencies.'
    },
    {
      number: '422-5141',
      service: 'Kuwait Traffic Department (MOI)',
      description: 'Contact number for Ministry of Interior traffic matters, accident reports, and traffic fine inquiries.'
    }
  ],
  sources: [
    {
      name: 'Public Authority for Civil Information (PACI)',
      category: 'Civil Registration',
      description: 'The authority responsible for Civil ID issuance, biometric registration, and the national digital identity (Hawiyati).',
      link: 'https://www.paci.gov.kw/'
    },
    {
      name: 'Public Authority for Manpower (PAM)',
      category: 'Employment',
      description: 'Regulates work permits, labor contracts, the Wage Protection System, and Kuwaitization policies in the private sector.',
      link: 'https://www.pam.gov.kw/'
    },
    {
      name: 'Ministry of Interior - Residency Affairs',
      category: 'Immigration & Residency',
      description: 'Handles residence permits, visa renewals, entry and exit procedures, and foreigner registration.',
      link: 'https://www.moi.gov.kw/'
    },
    {
      name: 'Sahel - Government Services Platform',
      category: 'E-Government',
      description: 'Unified digital platform for a wide range of Kuwaiti government services including residency, civil affairs, and traffic-related transactions.',
      link: 'https://www.sahel.gov.kw/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Kuwait, consult the Kuwaiti Ministry of Foreign Affairs or a Kuwaiti embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/kuwait',
    mfaLink: 'https://www.mofa.gov.kw/'
  },
  serviceDirectory: {
    title: "Service Directory - Kuwait",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Kuwait.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for work permits, residence renewals, employer transfers, and labor law compliance under the kafala system.",
        providers: [
          { name: "Al Tamimi & Company Kuwait", link: "https://www.tamimi.com" },
          { name: "ASAR - Al Ruwayeh & Partners", link: "https://www.asarlegal.com" },
          { name: "Meysan Partners", link: "https://www.meysan.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and portals covering long-term rentals, compound housing, and relocation accommodation in Kuwait City and surrounding governorates.",
        providers: [
          { name: "Kuwait Property Finder", link: "https://www.propertyfinder.kw" },
          { name: "OpenSooq Kuwait", link: "https://kw.opensooq.com" },
          { name: "Luxhabitat Kuwait", link: "https://www.luxhabitat.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Firms handling corporate tax, Zakat compliance, cross-border income advice, and financial planning for residents and businesses.",
        providers: [
          { name: "PwC Kuwait", link: "https://www.pwc.com/kw" },
          { name: "KPMG Kuwait", link: "https://kpmg.com/kw" },
          { name: "EY Kuwait", link: "https://www.ey.com/en_kw" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services handling packing, shipping, customs clearance, and destination support.",
        providers: [
          { name: "Crown Relocations Kuwait", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "Allied Pickfords Kuwait", link: "https://www.allied.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Arabic language training programs, including classical Arabic, Gulf dialect, and cultural orientation for diplomats and professionals.",
        providers: [
          { name: "Berlitz Kuwait", link: "https://www.berlitz.com" },
          { name: "British Council Kuwait", link: "https://www.britishcouncil.com.kw" },
          { name: "Kuwait Institute for Arabic Language", link: "https://www.ilpkw.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major private hospitals providing general and specialist medical services to expatriate families.",
        providers: [
          { name: "Dar Al-Shifa Hospital", link: "https://www.daralshifa.com" },
          { name: "Al-Seef Hospital", link: "https://www.alseef-hospital.com" },
          { name: "New Mowasat Hospital", link: "https://www.newmowasat.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms and platforms connecting international talent with Kuwait-based employers across sectors.",
        providers: [
          { name: "GulfTalent", link: "https://www.gulftalent.com" },
          { name: "Bayt.com", link: "https://www.bayt.com" },
          { name: "Michael Page Middle East", link: "https://www.michaelpage.ae" }
        ]
      }
    ]
  }
};
