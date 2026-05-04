export const singapore = {
  id: 'singapore',
  slug: 'singapore',
  name: 'Singapore',
  region: 'Asia',
  complexity: 'High',
  languages: ['English', 'Malay', 'Mandarin', 'Tamil'],
  shortDescription: 'A futuristic garden city-state known for efficiency, cleanliness, and food.',
  heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd',
  flagAlt: 'Flag of Singapore',
  atAGlance: "Singapore is a city-state of 5.9 million people packed into just 733 square kilometers at the southern tip of the Malay Peninsula — one of the most densely populated, wealthiest, and most efficiently run places on Earth. It consistently ranks among the top countries for safety, cleanliness, healthcare quality, education, and ease of doing business. English is the language of government, business, and education, making it the most accessible Asian destination for English-speaking professionals. Daily life revolves around food (hawker centers serving world-class meals for S$4-8 are a UNESCO-recognized cultural heritage), air-conditioned spaces (to escape the perpetual 30-32C tropical heat), and a relentless work ethic that makes this one of the most professionally demanding environments in Asia. The country is a global financial hub, home to the Asia-Pacific headquarters of thousands of multinational companies, and a leading center for biotech, fintech, logistics, and regional trade. However, this comes at a price — Singapore is consistently ranked among the most expensive cities in the world. Housing dominates the cost equation: a modest two-bedroom apartment in a central area costs S$3,500-6,000/month. Owning a car is deliberately made prohibitively expensive (S$100,000+ for the Certificate of Entitlement alone) to manage traffic in the tiny territory. The social contract is distinctive: the government provides exceptional infrastructure, safety, and efficiency in exchange for strict rules governing behavior, speech, and public order. Singapore famously bans chewing gum (for sale), imposes heavy fines for littering, jaywalking, and eating on public transport, and applies the death penalty for drug trafficking. For those who embrace the structure, Singapore offers an unmatched quality of life in a truly multicultural environment where Chinese, Malay, Indian, and Western cultures coexist remarkably harmoniously.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 90 days (Tourist)',
    costOfLiving: 'Very High',
    primaryLanguages: 'English (Singlish colloquial)',
  },
  visas: [
    {
      name: 'Employment Pass (EP)',
      targetAudience: 'Professionals, Managers, Executives',
      useCase: 'The primary work visa for foreign professionals. Requires a minimum fixed monthly salary of S$5,000 (higher for older and more experienced candidates, and S$5,500+ for the financial sector). The employer applies through the Ministry of Manpower (MOM). Since 2023, applicants are also assessed under the COMPASS framework (Complementarity Assessment Framework), which scores candidates on salary, qualifications, diversity, and the employer\'s support for local employment.',
      duration: 'Up to 2 years (first issuance), renewable for up to 3 years',
      link: 'https://www.mom.gov.sg/passes-and-permits/employment-pass'
    },
    {
      name: 'S Pass',
      targetAudience: 'Mid-level skilled workers',
      useCase: 'For mid-level skilled workers with a minimum monthly salary of S$3,150 (higher for experienced candidates). Subject to a company-level quota (maximum percentage of S Pass holders relative to total workforce) and a monthly levy paid by the employer. Commonly used for technical roles, experienced tradespeople, and support staff.',
      duration: 'Up to 2 years, renewable',
      link: 'https://www.mom.gov.sg/passes-and-permits/s-pass'
    },
    {
      name: 'EntrePass',
      targetAudience: 'Entrepreneurs, Startup founders',
      useCase: 'For foreign entrepreneurs who want to start and operate a venture-backed startup, an innovative technology company, or a business with exceptional track record. Applicants must meet specific criteria: venture capital funding, incubator/accelerator backing, significant IP portfolio, or a track record of building successful businesses. Standard small business setups (restaurants, shops) do not qualify.',
      duration: '1 year (first issuance), renewable for up to 2 years',
      link: 'https://www.mom.gov.sg/passes-and-permits/entrepass'
    },
    {
      name: 'Overseas Networks & Expertise Pass (ONE Pass)',
      targetAudience: 'Top-tier talent, High earners',
      useCase: 'Singapore\'s premium work pass for individuals earning a fixed monthly salary of at least S$30,000 or who have outstanding achievements in business, arts, sports, academia, or research. Provides maximum flexibility: holders can work for multiple companies, start businesses, and switch employers without requiring a new pass. Designed to attract the world\'s top talent.',
      duration: '5 years, renewable',
      link: 'https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass'
    },
    {
      name: 'Global Investor Programme (GIP)',
      targetAudience: 'High-net-worth investors',
      useCase: 'Grants Singapore Permanent Residency to established business owners and investors. Requires a minimum investment of S$10 million in a new business entity, an existing Singapore business, a GIP-approved fund, or a family office. Applicants must have substantial business and entrepreneurial track records.',
      duration: 'Permanent Residency (re-entry permit renewed every 5 years)',
      link: 'https://www.edb.gov.sg/en/how-we-help/global-investor-programme.html'
    }
  ],
  requirements: [
    {
      title: 'SingPass (Singapore Personal Access)',
      explanation: 'Singapore\'s national digital identity platform, providing access to over 2,000 government and private services online. Foreign residents with a valid pass can register for SingPass using their FIN (Foreign Identification Number). Two-factor authentication is managed through the SingPass app.',
      importance: 'SingPass is your gateway to virtually everything in Singapore: filing taxes with IRAS, checking CPF contributions (if applicable), accessing healthcare records, managing your pass renewal, and even signing legal documents digitally via MyInfo. Many private services (banking, insurance, telecommunications) also use SingPass for identity verification. Setting it up should be one of your first actions after receiving your work pass.',
      link: 'https://www.singpass.gov.sg/'
    },
    {
      title: 'FIN (Foreign Identification Number)',
      explanation: 'A unique identification number issued to all foreign residents on their employment pass, S Pass, or other long-term pass card. The FIN format begins with a letter (F, G, or M) followed by 7 digits and a check letter. It is printed on your pass card and serves as your identification in all official and commercial contexts.',
      importance: 'Your FIN is the equivalent of a national ID number. It is required for opening bank accounts, signing tenancy agreements, registering for utilities, accessing healthcare, and any interaction with government agencies. Virtually every form you fill out in Singapore will ask for your FIN. Guard it carefully, as it is linked to your immigration record.',
      link: 'https://www.ica.gov.sg/'
    },
    {
      title: 'Stamp Duty on Tenancy Agreements',
      explanation: 'All tenancy agreements in Singapore must be stamped with the Inland Revenue Authority of Singapore (IRAS) within 14 days of signing. Stamp duty is calculated at 0.4% of the total rent for the entire lease period (e.g., for a lease of S$3,000/month for 2 years, stamp duty is approximately S$288). Usually paid by the tenant.',
      importance: 'An unstamped tenancy agreement is not legally enforceable. Stamping protects both tenant and landlord in case of disputes. The process can be done online through IRAS\' e-Stamping portal. Many agents handle this on your behalf, but verify it has been completed.',
      link: 'https://www.iras.gov.sg/'
    },
    {
      title: 'Bank Account',
      explanation: 'Major banks include DBS, OCBC, and UOB (the three local giants), along with international banks like HSBC, Citibank, and Standard Chartered. Account opening requires your passport, employment pass or valid work pass, proof of employment (employment letter), and proof of address. Some banks require a minimum initial deposit or monthly balance.',
      importance: 'A local bank account is essential for receiving salary, paying rent (typically via GIRO — automatic deduction), managing utilities, and daily transactions. PayNow (linked to your mobile number or FIN) enables instant transfers between any Singapore bank and is used ubiquitously for person-to-person payments, rent, and even hawker center purchases. DBS and OCBC offer the most comprehensive digital banking experiences.',
      link: 'https://www.mas.gov.sg/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Singapore is a global financial center and the Asia-Pacific headquarters for thousands of multinational companies. The job market for foreign professionals is concentrated in financial services (private banking, asset management, fintech), technology (software engineering, data science, cybersecurity), biomedical sciences, logistics and supply chain, and regional management roles. The government actively manages the balance between local and foreign hiring through the Fair Consideration Framework and COMPASS scoring system.",
    whereToLook: [
      "LinkedIn (the dominant professional platform in Singapore)",
      "MyCareersFuture.gov.sg (government job portal, mandatory listing for EP applications)",
      "JobsDB Singapore",
      "eFinancialCareers (for financial services roles)",
      "Glints and NodeFlair (for tech and startup roles)"
    ],
    realityChecks: [
      "Work pass regulations have tightened significantly since 2020. The COMPASS framework scores EP applications on salary, qualifications, company diversity, and local workforce development. Meeting the minimum salary alone no longer guarantees approval.",
      "Competition for professional roles is intense, particularly as the government encourages employers to prioritize local candidates. Job postings must be listed on MyCareersFuture for at least 14 days before an EP application can be submitted.",
      "Networking is critical. Singapore's business community is relationship-driven, and many senior roles are filled through personal connections and headhunters before being publicly advertised.",
      "The work culture is demanding. Long hours are common, particularly in finance, consulting, and law. The average Singaporean works approximately 44-45 hours per week, and overtime is often expected in professional roles."
    ]
  },
  salaryReality: {
    overview:
      "Salaries in Singapore are high by global standards, particularly in finance, technology, and senior management. There is no personal income tax until income exceeds S$20,000/year, and rates are progressive from 2% to 22% (top rate for income above S$320,000). The effective tax rate for most professionals is 5-15%, which is extremely favorable compared to most developed countries. However, the high cost of living — especially housing, which can consume 30-50% of income — means savings potential varies dramatically depending on lifestyle choices.",
    realityChecks: [
      "Housing is overwhelmingly the largest expense. Renting a private condominium (the typical choice for EP holders) costs S$2,500-4,000 for a one-bedroom in the center, and S$3,500-6,000+ for a two-bedroom. HDB flats (public housing) can be rented more affordably but have restrictions for foreigners.",
      "Employer benefits packages vary widely. Some provide housing allowances, education subsidies for children, and annual flights; others offer only the base salary. Negotiate thoroughly before accepting.",
      "International school fees are extraordinarily high — S$20,000-50,000+ per year per child. For families, schooling costs often exceed housing as the primary budget item. Popular schools include Singapore American School, United World College, and Tanglin Trust.",
      "There is no mandatory employer contribution to CPF (Central Provident Fund) for foreign workers. This means no government-mandated retirement savings — you must plan and fund your own retirement independently."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Housing costs, which are the single largest variable in your budget and can range from S$1,500/month (shared HDB flat) to S$8,000+/month (family-sized condo in a central district)",
      "International school fees for families, which can total S$40,000-100,000+ per year for multiple children",
      "The absence of CPF contributions for foreigners, meaning you have no employer-funded retirement savings unlike local employees",
      "Healthcare insurance costs — employer-provided coverage varies widely, and supplementary private insurance for comprehensive coverage (including regional hospitalization) adds S$200-500/month per person"
    ]
  },
  housingSystem: {
    overview:
      "Singapore's housing market is tightly regulated. About 80% of the resident population lives in HDB (Housing Development Board) public housing flats, but foreigners' access to HDB is restricted — EP holders can rent but not buy HDB flats. Most foreign professionals rent private condominiums, which offer pools, gyms, and security. Popular expat areas include Orchard/River Valley (central, convenient), Tanglin/Holland Village (family-friendly, close to international schools), East Coast/Katong (beach proximity, local character), and Tiong Bahru (hip, cafe culture). A one-bedroom condo in the central region costs S$2,500-4,000/month; a two-bedroom costs S$3,500-6,000+.",
    expectations:
      "Search on PropertyGuru, 99.co, and EdgeProp. Most transactions go through licensed property agents — the tenant does not pay agent commission (landlord does, typically one month's rent). Leases are typically two years with a one-year diplomatic clause (allowing early termination with two months' notice if you leave Singapore). Security deposits are one to two months' rent. Stamp duty must be paid within 14 days. Before signing, check the unit's facing (west-facing units are significantly hotter in the afternoon), proximity to MRT stations (critical for commuting), and the condo's facilities and maintenance quality."
  },
  healthcareReality:
    "Singapore's healthcare system is consistently ranked among the best in the world. It operates on a mixed public-private model. Public hospitals (Singapore General Hospital, National University Hospital, Tan Tock Seng Hospital) provide excellent care at subsidized rates for citizens and PRs, and at unsubsidized rates for foreigners. Private hospitals (Mount Elizabeth, Gleneagles, Raffles Hospital, Parkway East) offer premium service, shorter wait times, and higher comfort levels, but at significantly higher prices. A consultation with a GP at a polyclinic costs S$20-40, while a private specialist visit costs S$100-300+. Employer-provided health insurance is standard for EP holders but coverage varies — some plans cover only basic outpatient care, while comprehensive plans include hospitalization, specialist visits, and dental. Most expats carry supplementary private insurance from providers like AIA, AXA, or Cigna for comprehensive coverage. Singapore is also a leading destination for medical tourism, with world-class oncology, cardiology, and orthopedic care.",
  digitalLife: {
    overview:
      "Singapore is one of the most digitally integrated societies on Earth. The Smart Nation initiative has made government services, payments, healthcare, and transportation seamlessly digital. Cash is rarely needed — PayNow, GrabPay, and contactless payments work virtually everywhere, from hawker centers to taxis to luxury boutiques.",
    essentials: [
      "SingPass (digital identity for 2,000+ government and private services)",
      "PayNow (instant bank-to-bank transfers linked to mobile number or FIN)",
      "Grab (ride-hailing, food delivery, grocery delivery, payments — the super-app of Singapore)",
      "SimplyGo or EZ-Link (contactless payment for public transport using any bank card)"
    ],
    whatSurprisesNewcomers: [
      "Singapore is genuinely cashless. Hawker centers, taxis, convenience stores, and even market stalls accept PayNow, GrabPay, or contactless cards. Many expats go weeks without touching cash.",
      "SingPass integration is remarkably deep. You can file taxes, check your medical records, sign tenancy agreements, and verify your identity for banking — all through one platform. It genuinely works.",
      "Public WiFi (Wireless@SG) is available free throughout the country. Mobile data speeds are excellent — Singapore has among the fastest average mobile internet speeds globally.",
      "Many services assume you have a Singapore mobile number. Getting a local SIM (Singtel, StarHub, M1) should be done within days of arrival, as phone verification is required for most digital services."
    ]
  },
  culture: {
    text: 'Singapore is a genuinely multicultural society where Chinese (about 74%), Malay (about 13%), Indian (about 9%), and other ethnicities coexist with remarkable harmony, supported by deliberate government policies promoting racial integration (including in HDB flat allocation). Each community maintains its traditions, festivals, and cuisine, creating a rich cultural tapestry. Food is the universal connector — Singaporeans discuss, debate, and bond over food with a passion that borders on obsession. Hawker centers (government-regulated open-air food courts) are the social heart of the country, offering extraordinary variety at affordable prices. "Singlish" — a creole blend of English, Malay, Hokkien, Cantonese, and Tamil — is the informal language of daily life, distinct from the formal English used in business and government. The culture is pragmatic and achievement-oriented: education, career success, and property ownership are key markers of status. Social conventions emphasize respect for authority, harmony, and avoiding public confrontation.',
    highlights: [
      'Hawker centers are UNESCO-recognized cultural heritage. Start with chicken rice at Tian Tian (Maxwell), laksa at 328 Katong, or char kway teow at Hill Street. Asking Singaporeans for their food recommendations is the fastest way to build rapport.',
      'During Chinese New Year, Hari Raya Puasa, Deepavali, and Christmas, Singapore transforms with decorations, events, and cultural celebrations. Each festival is publicly celebrated regardless of your own background.',
      '"Kiasu" (fear of losing out) is a defining cultural trait. It manifests as queuing early for restaurant openings, grabbing the best deals, and an intense drive to succeed. Understanding kiasu helps you navigate Singaporean behavior.',
      'Tipping is not expected and not customary. A 10% service charge is included in restaurant bills, along with 9% GST. Leaving additional tips is unusual and not necessary.',
      '"Chope" culture: Singaporeans reserve tables at hawker centers by placing tissue packets on seats. Respect the tissue packet — it is a legitimate reservation system that everyone observes.'
    ]
  },
  transportationMobility:
    "Singapore has one of the world's best public transport systems. The MRT (Mass Rapid Transit) network covers the island with six lines (North-South, East-West, Circle, Downtown, Thomson-East Coast, and North East), running from approximately 5:30 AM to midnight. Trains are clean, air-conditioned, and punctual. Buses supplement the MRT with extensive coverage. Fare payment is via EZ-Link card, SimplyGo (any contactless bank card), or mobile payment. A typical MRT trip costs S$1-2.50. Car ownership is deliberately made expensive: the Certificate of Entitlement (COE) alone — required just for the right to register a vehicle — costs S$80,000-150,000+ on top of the vehicle price, plus road tax, insurance, and parking fees of S$200-500/month. Most residents do not own cars. Grab (ride-hailing) is ubiquitous, affordable, and the practical daily transport choice. Cycling infrastructure is expanding, with the Park Connector Network linking parks across the island, though Singapore's heat and humidity make cycling challenging for practical commuting.",
  internationalConnectivity:
    "Changi Airport (SIN) is consistently voted the world's best airport and is one of the busiest aviation hubs globally. Singapore Airlines, the national carrier, is perennially ranked among the top airlines worldwide. Direct flights connect Singapore to virtually every major city in Asia (typically 1-5 hours), plus London (13 hours non-stop), New York (18 hours non-stop on the world's longest flight), Sydney (8 hours), Dubai (7 hours), and extensive connections to Europe, Africa, and the Americas. Changi Airport itself is a destination — Jewel Changi features the world's tallest indoor waterfall, gardens, shopping, and dining. The airport is located 20 minutes by MRT from the city center. For regional travel, Singapore is the ideal base for exploring Southeast Asia, with flights to Kuala Lumpur (1 hour), Bangkok (2.5 hours), Bali (2.5 hours), and Ho Chi Minh City (2 hours).",
  travelExploration:
    "Despite its small size, Singapore offers more than its reputation suggests for domestic exploration. Gardens by the Bay (with its Supertree Grove and Cloud Forest) is genuinely spectacular. The Singapore Botanic Gardens is a UNESCO World Heritage Site with a world-class orchid garden. Sentosa Island provides beaches, Universal Studios, and resort facilities. The historic districts — Chinatown, Little India, Kampong Glam (Arab Quarter) — each offer distinct architectural, culinary, and cultural experiences. MacRitchie Reservoir has a treetop walk and hiking trails through primary rainforest. Pulau Ubin, an island off the northeast coast, preserves kampung (village) life and offers mountain biking and kayaking. For regional travel, Malaysia (Johor Bahru is just across the Causeway, Kuala Lumpur a short flight), Indonesia (Batam and Bintan islands are a 45-minute ferry), and the rest of Southeast Asia are all within easy reach for weekend trips.",
  considerations: [
    'Cost of Living: Singapore is one of the most expensive cities in the world. Housing, international schooling, dining out at non-hawker establishments, and entertainment costs are comparable to or exceed London and New York. A single professional needs S$4,000-6,000/month minimum for a comfortable life; a family needs S$10,000-15,000+.',
    'Strict Laws and Enforcement: Singapore enforces laws rigorously. Drug trafficking carries a mandatory death penalty. Vandalism results in caning. Chewing gum is banned for sale (you can chew it if brought from abroad but cannot sell it). Eating and drinking on the MRT is a S$500 fine. Littering carries fines of S$300-1,000. These laws are not theoretical — they are enforced.',
    'Humidity and Heat: Singapore is hot and humid 365 days a year (28-33C, 80-90% humidity). There are no seasons — only slightly wetter months (November-January) and slightly drier months. Outdoor activity requires acceptance of constant perspiration. Air conditioning is not a luxury but a necessity.',
    'Work Pass Tightening: The government has progressively tightened foreign hiring policies through the Fair Consideration Framework and COMPASS system. Salary thresholds have risen, and employers face greater scrutiny. The trend is toward favoring local talent, which affects hiring timelines and available positions for foreigners.',
    'Freedom of Expression: Singapore has strict laws governing speech, assembly, and media. Public protests require permits. Criticism of the government, judiciary, or racial/religious groups can result in legal consequences under various acts. Social media posts are also subject to these laws. Exercise discretion in public commentary.'
  ],
  mistakes: [
    'Eating or drinking anything on the MRT or buses. This includes water. The fine is S$500, and enforcement cameras and fellow passengers ensure compliance. Wait until you exit the station.',
    'Tipping at restaurants. Singapore does not have a tipping culture. A 10% service charge is automatically added to restaurant bills (along with 9% GST). Leaving extra money on the table is unnecessary and can cause confusion.',
    'Jaywalking, especially crossing within 50 meters of a designated crossing. Fines range from S$20 to S$1,000 for repeat offenders, and enforcement is real. Use the designated crossings, overhead bridges, and underpasses.',
    'Criticizing the government publicly or on social media without understanding the legal framework. Singapore has laws (including the Protection from Online Falsehoods and Manipulation Act — POFMA) that allow the government to require corrections or takedowns of content deemed false or harmful. Political speech is regulated differently than in many Western countries.',
    'Underestimating the cost of family relocation. Many professionals accept offers based on the headline salary without fully accounting for international school fees (S$20,000-50,000/year per child), family health insurance (S$5,000-15,000/year), and a family-sized apartment (S$4,000-8,000/month). Run the full numbers before committing.'
  ],
  emergency: [
    {
      number: '999',
      service: 'Police Emergency',
      description: 'Singapore Police Force emergency line. English-speaking operators available 24/7.'
    },
    {
      number: '995',
      service: 'Ambulance / Fire (SCDF)',
      description: 'Singapore Civil Defence Force for fire, rescue, and emergency medical services. Response times are among the fastest in the world.'
    },
    {
      number: '1777',
      service: 'Non-Emergency Ambulance',
      description: 'For non-emergency medical transport. Operated by private ambulance services for situations not requiring emergency response.'
    }
  ],
  sources: [
    {
      name: 'Ministry of Manpower (MOM)',
      category: 'Employment & Work Passes',
      description: 'Authority managing all work passes (EP, S Pass, EntrePass), labor regulations, and foreign workforce policies.',
      link: 'https://www.mom.gov.sg/'
    },
    {
      name: 'Immigration & Checkpoints Authority (ICA)',
      category: 'Immigration & Border Control',
      description: 'Manages entry/exit, long-term visit passes, permanent residency applications, and citizenship matters.',
      link: 'https://www.ica.gov.sg/'
    },
    {
      name: 'Inland Revenue Authority of Singapore (IRAS)',
      category: 'Taxation',
      description: 'National tax authority handling personal income tax, stamp duty, GST, and property tax for residents.',
      link: 'https://www.iras.gov.sg/'
    },
    {
      name: 'Visit Singapore',
      category: 'Tourism & Lifestyle',
      description: 'Official tourism board providing guides to attractions, events, dining, and cultural experiences.',
      link: 'https://www.visitsingapore.com/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Singapore, consult the Singapore Ministry of Foreign Affairs or a Singaporean embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/singapore',
    mfaLink: 'https://www.mfa.gov.sg/'
  },
  serviceDirectory: {
    title: "Service Directory - Singapore",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Singapore.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal assistance for Employment Passes, Dependant Passes, PR applications, and immigration compliance.",
        providers: [
          { name: "Fragomen Singapore", link: "https://www.fragomen.com" },
          { name: "Rajah & Tann Singapore", link: "https://www.rajahtann.com" },
          { name: "Drew & Napier", link: "https://www.drewnapier.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Licensed property agents handling rentals and purchases in expat-popular districts.",
        providers: [
          { name: "PropertyGuru", link: "https://www.propertyguru.com.sg" },
          { name: "Knight Frank Singapore", link: "https://www.knightfrank.com.sg" },
          { name: "PropNex", link: "https://www.propnex.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Singapore personal income tax, cross-border structuring, and corporate compliance.",
        providers: [
          { name: "PwC Singapore", link: "https://www.pwc.com/sg" },
          { name: "EY Singapore", link: "https://www.ey.com/en_sg" },
          { name: "KPMG Singapore", link: "https://kpmg.com/sg" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and regional relocation services including shipping, customs clearance, and storage.",
        providers: [
          { name: "Crown Relocations Singapore", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "Asian Tigers Singapore", link: "https://www.asiantigers-mobility.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Mandarin, Malay, and professional English communication courses for newcomers.",
        providers: [
          { name: "British Council Singapore", link: "https://www.britishcouncil.sg" },
          { name: "Berlitz Singapore", link: "https://www.berlitz.com" },
          { name: "Inlingua Singapore", link: "https://www.inlingua.com.sg" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major private hospitals and healthcare groups commonly used by foreign residents.",
        providers: [
          { name: "Mount Elizabeth Hospitals", link: "https://www.mountelizabeth.com.sg" },
          { name: "Raffles Medical Group", link: "https://www.rafflesmedicalgroup.com" },
          { name: "Gleneagles Hospital Singapore", link: "https://www.gleneagles.com.sg" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms connecting international professionals with Singapore-based employers.",
        providers: [
          { name: "Michael Page Singapore", link: "https://www.michaelpage.com.sg" },
          { name: "Robert Walters Singapore", link: "https://www.robertwalters.com.sg" },
          { name: "Hays Singapore", link: "https://www.hays.com.sg" }
        ]
      }
    ]
  }
};
