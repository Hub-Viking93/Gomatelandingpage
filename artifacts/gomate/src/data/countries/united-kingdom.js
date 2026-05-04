export const unitedKingdom = {
  id: 'united-kingdom',
  slug: 'united-kingdom',
  name: 'United Kingdom',
  region: 'Europe',
  complexity: 'High',
  languages: ['English'],
  shortDescription: 'A global cultural powerhouse mixing ancient tradition with modern multiculturalism.',
  heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad',
  flagAlt: 'Flag of United Kingdom',
  atAGlance: "The United Kingdom is a union of four nations — England, Scotland, Wales, and Northern Ireland — each with fiercely distinct identities, accents, traditions, and in some cases, separate legal systems. It is a densely populated, deeply historic, and highly developed island nation that punches far above its size in global influence across finance, culture, education, and technology. London is a world unto itself: fast-paced, extraordinarily expensive, and one of the most culturally diverse cities on earth, with over 300 languages spoken. Outside the capital, life takes on entirely different rhythms — from the tech hubs of Manchester and Bristol to the medieval charm of Edinburgh, the post-industrial reinvention of Birmingham, and the green rolling countryside of the Cotswolds and Lake District. The British are known for their commitment to politeness, orderly queuing, dry humor, and a deeply ingrained sense of understatement. The weather is genuinely unpredictable (though rarely extreme), and the pub remains the cornerstone of social life across all classes and ages. Post-Brexit, the immigration system has been completely overhauled with a points-based system that makes visa sponsorship more complex and more expensive for employers. For newcomers, the adjustment involves understanding that British politeness can mask real feelings, that the class system still subtly permeates society, and that life outside London is often more affordable, more community-oriented, and — many would argue — more authentically British.",
  overview: {
    euStatus: 'Non-EU (Brexit)',
    stayLength: 'Up to 6 months (Visitor)',
    costOfLiving: 'High',
    primaryLanguages: 'English',
  },
  visas: [
    {
      name: 'Skilled Worker Visa',
      targetAudience: 'Employed Professionals',
      useCase: 'The primary work visa for the UK, replacing the former Tier 2 visa. Requires a job offer from a licensed sponsor employer, meeting minimum salary thresholds (generally GBP 38,700 per year or the going rate for the occupation, whichever is higher — with lower thresholds for shortage occupations and new entrants). The employer must hold a valid sponsor licence and issue a Certificate of Sponsorship (CoS). After 5 years, you can apply for Indefinite Leave to Remain (ILR/settlement).',
      duration: 'Up to 5 years (renewable, pathway to settlement)',
      link: 'https://www.gov.uk/skilled-worker-visa'
    },
    {
      name: 'Global Talent Visa',
      targetAudience: 'Leaders and Exceptional Talent',
      useCase: 'For recognized leaders or emerging talent in academia/research (endorsed by UKRI), arts/culture (endorsed by Arts Council England), or digital technology (endorsed by Tech Nation). No job offer required and no salary threshold. Provides maximum flexibility including self-employment and switching employers freely. The endorsement process evaluates your portfolio of achievements, publications, or commercial success.',
      duration: 'Up to 5 years (fast-track to settlement in 3 years for exceptional talent)',
      link: 'https://www.gov.uk/global-talent'
    },
    {
      name: 'High Potential Individual (HPI) Visa',
      targetAudience: 'Recent Graduates of Top Global Universities',
      useCase: 'For graduates who have been awarded a qualification from an eligible top global university (not a UK institution) within the last 5 years. No job offer or sponsorship required. Allows you to work, look for work, or set up a business. The eligible university list is published annually and includes approximately 50 institutions worldwide.',
      duration: '2 years (3 years for PhD holders)',
      link: 'https://www.gov.uk/high-potential-individual-visa'
    },
    {
      name: 'Standard Visitor Visa',
      targetAudience: 'Tourists, Business Visitors',
      useCase: 'For tourism, visiting family, attending business meetings, conferences, or short courses. Citizens of many countries can enter visa-free for up to 6 months. You cannot work, access public funds, or marry/register a civil partnership on this visa without switching.',
      duration: 'Up to 6 months',
      link: 'https://www.gov.uk/standard-visitor'
    },
    {
      name: 'Youth Mobility Scheme Visa',
      targetAudience: 'Young Adults (18-30/35)',
      useCase: 'For citizens of Australia, New Zealand, Canada, Japan, South Korea, India, and other partner countries aged 18-30 (or 35 for some nationalities) to live and work in the UK with no sponsorship required. Allocated through a ballot system for some nationalities. No restrictions on the type of work you can do.',
      duration: 'Up to 2 years',
      link: 'https://www.gov.uk/youth-mobility'
    }
  ],
  requirements: [
    {
      title: 'National Insurance Number (NINo)',
      explanation: 'A unique personal identifier used throughout the UK tax and social security system. Format: two letters, six digits, one letter (e.g., QQ 12 34 56 C). You apply online or by phone after arriving in the UK with a valid work visa.',
      importance: 'The NINo is essential for working legally, paying the correct amount of income tax and National Insurance contributions, and accessing benefits and state pension. Without it, your employer may apply emergency tax codes, resulting in significantly higher deductions from your salary until it is resolved. The application process is straightforward but can take several weeks.',
      link: 'https://www.gov.uk/apply-national-insurance-number'
    },
    {
      title: 'Immigration Status (eVisa / Share Code)',
      explanation: 'The UK has transitioned to a fully digital immigration system. Your immigration status (right to work, right to rent, right to access services) is held digitally and linked to your passport. You prove your status to employers and landlords by generating a "share code" through the GOV.UK portal. Biometric Residence Permits (BRPs) are being phased out.',
      importance: 'Your digital immigration status is your proof of legal residence. Employers are legally required to verify your right to work before hiring you, and landlords must check your right to rent. Always keep your passport details updated in the system, especially if you renew your passport. Without a valid share code, you may face delays in employment, housing, and accessing NHS services.',
      link: 'https://www.gov.uk/view-prove-immigration-status'
    },
    {
      title: 'NHS Registration (GP Registration)',
      explanation: 'Access to the National Health Service starts with registering at a local GP (General Practitioner) surgery near your home or workplace. Most visa holders pay the Immigration Health Surcharge (IHS) — currently GBP 1,035 per year — as part of their visa application, which entitles them to NHS services on the same basis as UK residents.',
      importance: 'Without GP registration, you cannot access routine healthcare, get prescriptions, obtain referrals to specialists, or receive an NHS number. Registration is free and available to all UK residents regardless of immigration status. Choose a GP close to your home, as catchment areas apply. Some popular surgeries in London have waiting lists for new registrations. A&E (Accident & Emergency) departments will treat you regardless of registration in genuine emergencies.',
      link: 'https://www.nhs.uk/nhs-services/gps/how-to-register-with-a-gp-surgery/'
    },
    {
      title: 'UK Bank Account',
      explanation: 'Opening a UK bank account requires proof of identity (passport) and proof of UK address (utility bill, council tax bill, or tenancy agreement). Major high street banks include HSBC, Barclays, Lloyds, NatWest, and Santander. Digital banks like Monzo, Starling, and Revolut offer faster onboarding with fewer documentation requirements.',
      importance: 'A UK bank account is essential for receiving salary, paying rent, setting up direct debits for utilities, and building a UK credit history. Many landlords and utility providers require a UK bank account. The traditional Catch-22 — needing an address to open an account and needing an account to get an address — can be bypassed by using digital banks (Monzo and Starling accept visa documents as proof of address) and then transitioning to a high street bank once settled.',
      link: 'https://www.gov.uk/government/publications/how-to-open-a-basic-bank-account'
    }
  ],
  jobsAndIncome: {
    overview:
      "The UK job market is one of the largest and most diverse in Europe, with London as the dominant hub for finance, technology, professional services, creative industries, and media. Manchester, Birmingham, Edinburgh, Bristol, Leeds, and Cambridge have growing tech and professional sectors. The post-Brexit points-based immigration system means that visa sponsorship is a significant factor in hiring decisions — not all employers hold sponsor licences, and many smaller companies are reluctant to navigate the sponsorship process.",
    whereToLook: [
      "LinkedIn (dominant for professional, tech, and management roles across all sectors)",
      "Indeed UK (indeed.co.uk — largest general job board by volume)",
      "Reed (reed.co.uk — strong for mid-level and professional roles)",
      "Totaljobs (generalist board with good sector filtering)",
      "Specialist recruitment agencies: Hays, Robert Half, Michael Page, Robert Walters (sector-specific recruiters are heavily used in the UK market)"
    ],
    realityChecks: [
      "Visa sponsorship significantly affects hiring — many job listings explicitly state 'no sponsorship available,' and you should filter for sponsor licence holders using the GOV.UK register.",
      "Hiring processes are typically structured but slow, often involving 3-4 interview rounds over several weeks for professional roles.",
      "London salaries are substantially higher than regional equivalents, but the cost of living difference (especially housing and transport) often erases the advantage.",
      "The UK recruitment industry is large and well-established — working with specialist recruiters in your field is standard practice and often more effective than direct applications."
    ]
  },
  salaryReality: {
    overview:
      "UK salaries vary enormously by region, sector, and seniority. London commands the highest salaries but also the highest costs. The median full-time salary in the UK is approximately GBP 35,000, but this ranges from under GBP 25,000 for entry-level roles to GBP 100,000+ in finance, tech, and senior management. Income tax is progressive (20% basic rate, 40% higher rate, 45% additional rate), and National Insurance contributions add a further layer of deduction.",
    realityChecks: [
      "Net take-home pay is significantly lower than gross — a GBP 50,000 salary yields approximately GBP 37,500 after income tax and National Insurance.",
      "London weighting (higher salaries for London-based roles) typically adds 10-20% but rarely covers the full cost-of-living premium, especially for housing.",
      "Employer benefits vary enormously — some offer generous pension matching, private health insurance, and share schemes; others provide only the statutory minimum.",
      "Student loan repayments, council tax, and commuting costs further reduce disposable income in ways that are not visible in headline salary figures."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "National Insurance contributions (employee pays 8% on earnings between GBP 12,570 and GBP 50,270, plus 2% above that)",
      "Council tax (GBP 1,200-3,000+ per year depending on property band and local authority — not included in rent)",
      "Commuting costs (a Zone 1-4 annual Travelcard in London costs over GBP 2,000; regional train season tickets can exceed GBP 5,000)",
      "Pension auto-enrolment (minimum 5% employee contribution from salary, often matched by employer at 3-5%)"
    ]
  },
  housingSystem: {
    overview:
      "The UK rental market is predominantly private, highly competitive in major cities, and dominated by letting agents. In London, popular expat areas include South Kensington, Canary Wharf, Shoreditch, Clapham, Islington, and Hampstead, each with distinct characters and price points. Manchester, Bristol, Edinburgh, and Birmingham offer significantly lower rents with growing cultural and professional scenes. Tenancies are typically Assured Shorthold Tenancies (ASTs) for 6 or 12 months, with deposits protected in government-approved schemes (DPS, MyDeposits, TDS).",
    expectations:
      "Expect to provide references (employer and previous landlord), undergo credit checks (via agencies like OpenRent, Rightmove, or Zoopla), and pay a deposit equivalent to five weeks' rent (capped by the Tenant Fees Act 2019). Viewings in London often feel like open houses with multiple applicants competing for the same property — moving quickly and having documentation ready is essential. Average monthly rent in London ranges from GBP 1,500 for a small studio to GBP 2,500+ for a one-bedroom in a central area. Outside London, rents are typically 40-60% lower. Furnished and unfurnished options exist, with unfurnished being more common for longer tenancies."
  },
  healthcareReality:
    "The National Health Service (NHS) provides universal healthcare to all UK residents, funded through taxation and the Immigration Health Surcharge for visa holders. The system is comprehensive — covering everything from GP visits and hospital treatment to mental health services, maternity care, and prescriptions (which cost a flat GBP 9.90 per item in England; free in Scotland, Wales, and Northern Ireland). However, the NHS is under significant strain: GP appointment waiting times of 2-3 weeks are common, A&E departments are frequently overcrowded, and elective surgery waiting lists have reached months or even years for some procedures. Many expats and higher earners supplement NHS access with private health insurance (Bupa, AXA Health, Vitality, Aviva) for faster specialist access and private hospital treatment. Private GP services (e.g., Babylon GP at Hand) offer same-day video consultations. Dental care is partially NHS-funded but difficult to access — waiting lists for NHS dentists are long, and many people use private dental practices. Mental health services through the NHS exist but have significant waiting times; private therapy is widely used.",
  digitalLife: {
    overview:
      "The UK has a well-developed digital infrastructure with strong online services for banking, government, and daily life. The GOV.UK portal centralizes most government interactions, and open banking has made financial services increasingly digital and competitive.",
    essentials: [
      "GOV.UK (central government portal for tax, immigration status, driving licence, and all public services)",
      "NHS App (GP appointments, prescriptions, vaccination records, and organ donation registration)",
      "Monzo or Starling (digital banks widely used by newcomers for fast account opening without proof of address)",
      "Citymapper or Google Maps (essential for navigating London's complex transport network — TfL Journey Planner is also reliable)"
    ],
    whatSurprisesNewcomers: [
      "Proof of address is required for a surprisingly large number of services — bank accounts, GP registration, council tax, electoral roll — creating a frustrating Catch-22 for new arrivals.",
      "Banking setup at traditional high street banks can take weeks and require in-branch appointments, while digital banks (Monzo, Starling, Revolut) can be opened in minutes with just a passport.",
      "Contactless payment is ubiquitous — many shops, transport systems, and even market stalls no longer accept cash. London buses are entirely cashless.",
      "The NHS App is increasingly essential for managing healthcare, but the transition to digital systems is still uneven across different NHS trusts and GP surgeries."
    ]
  },
  culture: {
    text: 'British culture is built on an elaborate system of unwritten social rules that foreigners often find bewildering. "Sorry" is used constantly and in situations where no apology is warranted — bumping into someone, being bumped into, passing someone in a narrow corridor, or simply wanting to ask a question. Privacy and personal space are deeply valued. Humor is the social currency: self-deprecating, sarcastic, ironic, and often delivered with a completely straight face. Americans frequently mistake British understatement for lack of confidence and British sarcasm for rudeness, while many Europeans are baffled by the indirectness. Class remains a subtle but real undercurrent in British society, expressed through accent, vocabulary, education, newspaper choice, and even which supermarket you shop at. The pub is not just a place to drink — it is the living room of British social life, where friendships are maintained, deals are made, and community exists.',
    highlights: [
      'Queuing: The queue is sacred in British culture. Cutting in line is considered a profound moral failure that will earn immediate, though typically passive-aggressive, disapproval from everyone around you.',
      'Tea: Offered automatically in any social visit, any crisis, and any pause in activity. "Shall I put the kettle on?" is both an offer of comfort and a social ritual. Learn how your colleagues take their tea — it matters.',
      'The Round System: In a pub, you buy drinks for your entire group when it is your turn. Paying only for yourself when others are buying rounds is a serious social transgression. The unwritten rule is to always buy your round, even if you are ready to leave.',
      'Understatement: "Not bad" means good. "Quite good" means mediocre. "Interesting" often means terrible. "With respect" means the speaker is about to disagree completely. Learning to read between the lines is essential.',
      'Weather: The default conversation starter with strangers, colleagues, shop workers, and anyone you encounter briefly. It is not small talk — it is the social lubrication that makes British interaction function.'
    ]
  },
  transportationMobility:
    "London's transport network is one of the most extensive in the world. The Tube (Underground) has 11 lines covering 272 stations, complemented by the Overground, Elizabeth Line (Crossrail), DLR, and an extensive bus network — all payable via Oyster card or contactless bank card. Transport for London (TfL) manages the entire system, and the daily cap on contactless payments prevents overspending. Outside London, the National Rail network connects all major cities, though services are operated by multiple private companies (Avanti West Coast, GWR, LNER, etc.) with varying reliability and pricing. Advance tickets booked via Trainline or National Rail can be 70% cheaper than walk-up fares. Manchester, Birmingham, Edinburgh, and other major cities have their own local transport systems. Cycling is growing in cities, with bike-sharing schemes (Santander Cycles in London, various local schemes elsewhere). Driving is on the left, and the road network includes extensive motorways, though fuel and insurance costs are high.",
  internationalConnectivity:
    "The UK has outstanding international air connectivity. London alone is served by six airports: Heathrow (LHR, the main long-haul hub), Gatwick (LGW), Stansted (STN, budget carriers), Luton (LTN, budget carriers), London City (LCY, business travel), and Southend (SEN). Heathrow is one of the world's busiest airports with direct flights to virtually every major global destination. Regional airports including Manchester, Edinburgh, Birmingham, Glasgow, and Bristol offer extensive European and some long-haul connections. Budget carriers like Ryanair and easyJet provide cheap flights across Europe from multiple UK airports. The Eurostar high-speed train connects London St Pancras to Paris (2h15), Brussels (2h), and Amsterdam (3h45), making continental Europe easily accessible for weekends.",
  travelExploration:
    "The UK offers remarkable variety within a compact area. The Cotswolds, Lake District, Yorkshire Dales, and Scottish Highlands provide stunning countryside within a few hours of major cities. Historic cities like Bath, Oxford, Cambridge, York, and Edinburgh are easy day trips or weekends. Cornwall and the Devon coast offer dramatic scenery and surfing. Wales has Snowdonia and the Pembrokeshire coast. Northern Ireland features the Giant's Causeway and the Causeway Coastal Route. Scotland's islands (Skye, Orkney, Shetland, Outer Hebrides) provide remote, wild landscapes. The UK's position also makes it an ideal base for European exploration — Paris, Amsterdam, Dublin, and Barcelona are all under 2 hours by air, and Eurostar connections make continental weekends seamless.",
  considerations: [
    'Cost of Living in London: London is one of the most expensive cities in the world. Average monthly rent for a one-bedroom apartment in Zone 1-2 exceeds GBP 2,000, a pint of beer costs GBP 6-7, and a monthly Zone 1-4 transport pass exceeds GBP 180. Northern cities (Manchester, Leeds, Birmingham, Edinburgh) offer 40-60% lower costs with growing job markets.',
    'NHS Pressure: The NHS is free at point of use but currently under severe strain. GP waiting times of 2-3 weeks, A&E waits of 6+ hours, and elective surgery waiting lists of months are common. Many professionals supplement with private health insurance (Bupa, AXA, Vitality) for faster access to specialists.',
    'Rental Market Competition: The rental market in London and popular cities is intensely competitive. Properties receive dozens of applications within hours of listing, and bidding wars above asking price are increasingly common. Having documents, references, and funds ready before viewing is essential.',
    'Post-Brexit Immigration Complexity: The points-based immigration system means that visa sponsorship costs employers significant fees (sponsor licence, Certificate of Sponsorship, Immigration Skills Charge). Not all employers are willing or able to sponsor, which narrows the job market for non-settled workers.',
    'Train Travel Costs: Walk-up (anytime) train fares are extraordinarily expensive — a same-day London to Manchester single can exceed GBP 200. Advance tickets booked weeks ahead via Trainline.com can reduce this to GBP 25-40. Always book in advance for long-distance rail travel.'
  ],
  mistakes: [
    'Standing on the left side of escalators on the Tube. The rule is universal and enforced by Londoners with withering looks: stand on the right, walk on the left. Blocking the left side during rush hour will provoke audible displeasure.',
    'Confusing England with the United Kingdom, or calling a Scottish, Welsh, or Northern Irish person "English." The four nations have distinct identities, histories, and in some cases separate legal, education, and healthcare systems. Learn the difference before arriving.',
    'Tipping in pubs. At the bar, you generally do not tip per drink (occasionally you might say "and one for yourself" to the bartender). Table-service restaurants typically expect 10-12.5%, often added automatically as a service charge. Check the bill before adding more.',
    'Taking the Tube for short distances in central London. The Underground map is topologically distorted — stations that appear far apart are often a 5-10 minute walk on the surface. Walking is frequently faster (and free) for journeys of 1-2 stops, especially on the same line.',
    'Underestimating British indirectness. When a British colleague says "that\'s an interesting approach," they likely mean they disagree. "I\'ll bear it in mind" usually means they will not. "Perhaps we could consider..." is often a firm recommendation disguised as a suggestion. Listen for what is not being said directly.'
  ],
  emergency: [
    {
      number: '999',
      service: 'Police, Fire, Ambulance, Coastguard',
      description: 'The primary emergency number for all services across the UK. Operators speak English and can arrange translation services.'
    },
    {
      number: '111',
      service: 'NHS Non-Emergency Medical Advice',
      description: 'For urgent medical situations that are not life-threatening. Trained advisors assess your symptoms and direct you to the appropriate service — GP, pharmacy, urgent care center, or A&E.'
    },
    {
      number: '101',
      service: 'Police Non-Emergency',
      description: 'For reporting non-urgent crimes, providing information to the police, or making general inquiries. Available 24/7 across England, Wales, Scotland, and Northern Ireland.'
    }
  ],
  sources: [
    {
      name: 'GOV.UK',
      category: 'Government Services',
      description: 'The single official portal for all UK government services, including immigration, tax, driving, benefits, and business registration. The definitive source for all official processes.',
      link: 'https://www.gov.uk/'
    },
    {
      name: 'UK Visas and Immigration (UKVI)',
      category: 'Immigration',
      description: 'The Home Office division responsible for all visa applications, immigration rules, sponsor licences, and settlement/citizenship applications.',
      link: 'https://www.gov.uk/government/organisations/uk-visas-and-immigration'
    },
    {
      name: 'HMRC (HM Revenue & Customs)',
      category: 'Tax',
      description: 'The UK tax authority managing income tax, National Insurance, self-assessment, and customs. Essential for understanding your tax obligations and claiming any applicable reliefs.',
      link: 'https://www.gov.uk/government/organisations/hm-revenue-customs'
    },
    {
      name: 'VisitBritain',
      category: 'Tourism',
      description: 'Official tourism board with comprehensive travel guides, destination information, and practical visitor resources across England, Scotland, Wales, and Northern Ireland.',
      link: 'https://www.visitbritain.com/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa and residency matters, and official guidance related to the United Kingdom, consult the UK Foreign, Commonwealth & Development Office (FCDO) or a British embassy, high commission, or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/uk',
    mfaLink: 'https://www.gov.uk/government/organisations/foreign-commonwealth-development-office'
  },
  serviceDirectory: {
    title: "Service Directory - United Kingdom",
    description: "Examples of commonly used service providers people often interact with when relocating to the United Kingdom.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with visas, sponsor licence applications, settlement, and compliance with UK immigration rules.",
        providers: [
          { name: "Fragomen UK", link: "https://www.fragomen.com" },
          { name: "DavidsonMorris", link: "https://www.davidsonmorris.com" },
          { name: "Kingsley Napley", link: "https://www.kingsleynapley.co.uk" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms used for long-term rentals, property purchases, and tenancy agreements across the UK.",
        providers: [
          { name: "Rightmove", link: "https://www.rightmove.co.uk" },
          { name: "Zoopla", link: "https://www.zoopla.co.uk" },
          { name: "OpenRent", link: "https://www.openrent.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax advisors and accountants experienced with UK tax residency, PAYE, self-assessment, National Insurance, and cross-border income.",
        providers: [
          { name: "PwC UK", link: "https://www.pwc.co.uk" },
          { name: "Deloitte UK", link: "https://www2.deloitte.com/uk" },
          { name: "Grant Thornton UK", link: "https://www.grantthornton.co.uk" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services covering shipping, customs clearance, and household moves.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Pickfords", link: "https://www.pickfords.co.uk" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "English language training, IELTS preparation, and integration support for newcomers to the UK.",
        providers: [
          { name: "British Council", link: "https://www.britishcouncil.org" },
          { name: "International House London", link: "https://www.ihlondon.com" },
          { name: "Kaplan International Languages", link: "https://www.kaplaninternational.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public healthcare access and private healthcare providers commonly used by residents and expats in the UK.",
        providers: [
          { name: "NHS (National Health Service)", link: "https://www.nhs.uk" },
          { name: "Bupa UK", link: "https://www.bupa.co.uk" },
          { name: "Spire Healthcare", link: "https://www.spirehealthcare.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Widely used job portals and specialist recruitment firms across the UK job market.",
        providers: [
          { name: "Indeed UK", link: "https://www.indeed.co.uk" },
          { name: "Reed", link: "https://www.reed.co.uk" },
          { name: "Michael Page UK", link: "https://www.michaelpage.co.uk" }
        ]
      }
    ]
  }
};
