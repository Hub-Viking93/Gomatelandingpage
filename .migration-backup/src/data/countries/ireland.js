export const ireland = {
  id: 'ireland',
  slug: 'ireland',
  name: 'Ireland',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['English', 'Irish'],
  shortDescription: 'The Emerald Isle, known for tech giants, cozy pubs, and literary history.',
  heroImage: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e',
  flagAlt: 'Flag of Ireland',
  atAGlance: "Ireland is a small, English-speaking EU nation that has transformed itself from an agricultural economy into the European headquarters hub for the world's largest technology companies. Google, Meta, Apple, Microsoft, Salesforce, and dozens of other tech giants have their EMEA operations in Dublin and Cork, driven by a favorable corporate tax regime and access to the EU single market. The result is a dual reality: an internationally connected, high-salary tech sector existing alongside a chronic housing crisis, rising inequality, and a cost of living that has made Dublin one of the most expensive cities in Europe. Beyond the economics, Ireland offers a genuinely warm, community-oriented culture built on conversation, storytelling, and the pub. The concept of 'craic' (pronounced 'crack') — meaning fun, banter, good conversation, and a lively atmosphere — is the social currency. The Irish are famously witty, self-deprecating, and allergic to pretension; taking yourself too seriously is the fastest way to alienate people. The weather is persistently mild and wet (snow is rare, genuine heat is rarer), which produces the lush green landscapes that earn the country its 'Emerald Isle' nickname. For newcomers, the main challenges are practical: securing housing in Dublin's brutally competitive rental market, navigating the PPS number and bank account Catch-22, and building a social network in a culture where the pub is not just a place to drink but the primary venue for community, friendship, and belonging.",
  overview: {
    euStatus: 'EU Member',
    stayLength: '90 days (Tourist)',
    costOfLiving: 'Very High',
    primaryLanguages: 'English',
  },
  visas: [
    {
      name: 'Critical Skills Employment Permit',
      targetAudience: 'Tech, Medical, Engineering Professionals',
      useCase: 'Ireland\'s premium work permit for occupations on the Critical Skills Occupations List (IT, engineering, healthcare, finance, science). Requires a job offer with a minimum salary of EUR 32,000 for listed occupations or EUR 64,000 for non-listed roles. Fast-tracks to Stamp 4 (independent work rights without permit) after just 2 years. Spouses/partners receive immediate Stamp 1G (open work permission).',
      duration: '2 years (leads to Stamp 4)',
      link: 'https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/'
    },
    {
      name: 'Start-up Entrepreneur Programme (STEP)',
      targetAudience: 'Entrepreneurs, Founders',
      useCase: 'For non-EEA entrepreneurs launching an innovative, high-potential business in Ireland. Requires minimum funding of EUR 50,000 and a business plan evaluated by an expert panel. The business must be in the technology, innovation, or knowledge-intensive sectors. Does not require the creation of a specific number of jobs initially.',
      duration: 'Stamp 4 residency (2 years, renewable)',
      link: 'https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-options-for-working-in-ireland/coming-to-work-for-more-than-90-days/start-up-entrepreneur-programme-step/'
    },
    {
      name: 'Stamp 0 (Persons of Independent Means)',
      targetAudience: 'Retirees, Independently Wealthy Individuals',
      useCase: 'For individuals who can demonstrate an annual income of approximately EUR 50,000 per person (from pensions, investments, or other passive sources), plus access to a lump sum for emergencies (typically EUR 100,000+). You must not become a burden on the state and must have private health insurance. Does not permit employment.',
      duration: '1 year (renewable)',
      link: 'https://www.irishimmigration.ie/registering-your-immigration-permission/information-on-registering/immigration-permission-stamps/'
    },
    {
      name: 'Short Stay "C" Visit Visa',
      targetAudience: 'Tourists, Short-term Visitors',
      useCase: 'For nationals of visa-required countries visiting Ireland for tourism, family visits, or short business meetings. Note: Ireland is NOT in the Schengen Area — a Schengen visa does not grant entry to Ireland, and an Irish visa does not permit Schengen travel. Many nationalities can enter visa-free for up to 90 days.',
      duration: 'Up to 90 days',
      link: 'https://www.irishimmigration.ie/coming-to-visit-ireland/applying-for-a-short-stay-c-visit-visa/'
    },
    {
      name: 'Working Holiday Authorisation',
      targetAudience: 'Young Adults (18-30/35)',
      useCase: 'For citizens of Australia, New Zealand, Canada, Japan, South Korea, Argentina, Chile, and other bilateral agreement countries. Allows working and traveling in Ireland for up to 12 months with no employer sponsorship required. Annual quotas apply for most nationalities.',
      duration: 'Up to 1 year',
      link: 'https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-options-for-working-in-ireland/coming-to-work-for-more-than-90-days/working-holiday-authorisation/'
    }
  ],
  requirements: [
    {
      title: 'IRP (Irish Residence Permit)',
      explanation: 'A biometric residence permit card issued to non-EEA nationals staying in Ireland for more than 90 days. You register either with the Immigration Service Delivery (ISD) office in Dublin or at your local Garda National Immigration Bureau (GNIB) registration office outside Dublin. The card shows your immigration stamp type (Stamp 1, 2, 3, 4, etc.) and permission conditions.',
      importance: 'The IRP is your proof of legal residence and immigration permission in Ireland. You must carry it at all times and present it to employers, landlords, and government offices as evidence of your right to live and work in Ireland. Registration appointments in Dublin can be difficult to secure — book online as early as possible through the ISD portal. The registration fee is EUR 300 per registration or renewal.',
      link: 'https://www.irishimmigration.ie/registering-your-immigration-permission/'
    },
    {
      title: 'PPS Number (Personal Public Service Number)',
      explanation: 'A unique 7-digit number plus one or two letters assigned by the Department of Social Protection. It is Ireland\'s primary identifier for tax, social welfare, public services, and employment. You apply in person at your local Intreo Centre (Social Welfare Office) with proof of identity and a reason for needing the number (e.g., a job offer, employment contract, or registration for public services).',
      importance: 'The PPS number is essential for everything: paying tax through Revenue, receiving salary (employers require it for payroll), accessing public healthcare through the HSE, applying for social welfare, registering children for school, and interacting with most government services. Without it, your employer cannot process your salary correctly. The Catch-22 for newcomers is that you need a reason (typically a job offer) to apply, and some employers expect you to have one before starting.',
      link: 'https://www.gov.ie/en/service/12e6de-get-a-personal-public-service-pps-number/'
    },
    {
      title: 'Proof of Address',
      explanation: 'A verified document confirming your residential address in Ireland, typically a utility bill (electricity, gas, broadband), bank statement, or government correspondence dated within the last 6 months. Rental agreements (tenancy agreements) are also accepted by many institutions.',
      importance: 'Proof of address is required to open a bank account, apply for a PPS number, register with the Revenue Commissioners, and complete many other administrative processes. This creates a notorious Catch-22 for newcomers: you need a bank account for a job, a proof of address for a bank account, and an address to get a proof of address. Workarounds include using digital banks (Revolut, N26, or Bank of Ireland which accept employer letters), asking your landlord for a letter, or using an Intreo Centre appointment as an initial step.',
      link: 'https://www.citizensinformation.ie/'
    },
    {
      title: 'Revenue Registration (Tax)',
      explanation: 'After receiving your PPS number, you must register with the Revenue Commissioners (Ireland\'s tax authority) to ensure correct tax credits and rate bands are applied to your employment. This is done through Revenue\'s myAccount online portal or the ROS (Revenue Online Service) for self-employed individuals.',
      importance: 'If you do not register with Revenue and claim your tax credits, your employer will apply emergency tax, resulting in significantly higher deductions from your salary. Irish income tax operates on a PAYE (Pay As You Earn) basis with two rates: 20% (standard rate) and 40% (higher rate), plus USC (Universal Social Charge) and PRSI (Pay Related Social Insurance). Registering ensures the correct bands and credits are applied from your first paycheck.',
      link: 'https://www.revenue.ie/en/jobs-and-pensions/starting-your-first-job/index.aspx'
    }
  ],
  jobsAndIncome: {
    overview:
      "Ireland's job market is heavily concentrated in Dublin, with a powerful cluster of multinational tech companies (Google, Meta, Apple, Amazon, Salesforce, LinkedIn), financial services (including a large funds industry), pharmaceutical/medtech companies (Pfizer, MSD, Johnson & Johnson), and professional services firms. Cork is the second employment hub, with a growing tech and pharma presence. Galway, Limerick, and Waterford have smaller but developing professional sectors. English is the working language across all sectors, making Ireland one of the most accessible European markets for Anglophone professionals.",
    whereToLook: [
      "LinkedIn (dominant for tech, professional services, and multinational roles)",
      "IrishJobs.ie (largest dedicated Irish job portal)",
      "Indeed Ireland (indeed.ie — strong volume across all sectors)",
      "Jobs.ie (long-established Irish job board with good sector coverage)",
      "Glassdoor Ireland (salary transparency and company reviews for multinationals)"
    ],
    realityChecks: [
      "Dublin dominates high-paying roles, but the cost of living (especially housing) means that net quality of life may be better in Cork, Galway, or Limerick for equivalent or slightly lower salaries.",
      "Work permits (Employment Permits) are tied to specific employers and salary thresholds — non-EEA nationals should verify the employer's willingness and ability to sponsor before investing in the application process.",
      "Hiring processes in multinationals are typically structured (3-5 interview rounds) but can be slow. Smaller Irish companies tend to be faster and more relationship-driven.",
      "The Critical Skills Employment Permit is the strongest pathway for non-EEA professionals: it leads to Stamp 4 (full work rights without a permit) after just 2 years and grants immediate spousal work rights."
    ]
  },
  salaryReality: {
    overview:
      "Irish salaries are relatively high by European standards, particularly in tech, finance, and pharma, where packages can rival or exceed UK equivalents. However, Ireland's progressive income tax system, combined with extremely high housing and childcare costs, significantly reduces disposable income. The tax system operates on a PAYE basis with a standard rate of 20% on income up to approximately EUR 42,000 (single person), 40% on income above that, plus USC (0.5-8%) and PRSI (4%).",
    realityChecks: [
      "Effective tax rates on income above EUR 42,000 can exceed 50% when combining income tax, USC, and PRSI — net take-home is substantially less than gross.",
      "Housing costs in Dublin are the single largest drain on income: average monthly rent for a one-bedroom apartment in the city center is EUR 1,800-2,200, and sharing accommodation is common even among well-paid professionals.",
      "Childcare costs are among the highest in Europe — EUR 1,000-1,500/month per child for full-time creche — and this is a major consideration for families.",
      "Benefits packages in multinationals often include private health insurance (VHI, Laya Healthcare, Irish Life), pension contributions, and share schemes, significantly supplementing base salary."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Net salary after combined income tax (20%/40%), USC, and PRSI — use Revenue's online tax calculator for accurate figures",
      "Housing costs relative to salary — particularly in Dublin, where rent can consume 40-50% of a single professional's net income",
      "Private health insurance costs (EUR 100-200+/month) — while HSE public healthcare is available, private insurance is standard among professionals for faster access",
      "Childcare costs (EUR 1,000-1,500/month per child) which are often not factored into cost-of-living comparisons"
    ]
  },
  housingSystem: {
    overview:
      "Ireland, and Dublin in particular, faces a chronic and severe housing shortage that is the single biggest challenge for newcomers. Rental supply is far below demand, vacancy rates in Dublin hover around 1-2%, and competition for available properties is intense. Popular Dublin neighborhoods for professionals include the city center, Rathmines, Ranelagh, Portobello, Drumcondra, Smithfield, and the Docklands. Cork's city center, Douglas, and Ballintemple are popular alternatives. Galway's Salthill and city center are sought after.",
    expectations:
      "Expect to act immediately when a listing appears — properties receive dozens of inquiries within hours. Viewings are often open-house style with multiple applicants competing. Landlords require references (employer and previous landlord), proof of income, and often several months' rent upfront. Monthly rent in central Dublin averages EUR 1,800-2,200 for a one-bedroom apartment. The Residential Tenancies Board (RTB) regulates tenancies and provides dispute resolution. Rent Pressure Zones (RPZs) cap annual rent increases, but this applies to existing tenancies, not new lettings. Daft.ie and MyHome.ie are the primary listing platforms. Consider securing temporary accommodation (Airbnb, serviced apartment) before arriving and searching for longer-term housing in person."
  },
  healthcareReality:
    "Ireland has a two-tier healthcare system. The public Health Service Executive (HSE) provides care to all residents, but access depends on means testing and medical card eligibility. Medical card holders receive free GP visits, hospital care, and prescriptions. Those without a medical card pay for GP visits (typically EUR 50-65 per visit) and may face long waiting times for public hospital services — waiting lists for certain specialist appointments and procedures can exceed 12-18 months. As a result, approximately half of the population carries private health insurance (VHI Healthcare, Laya Healthcare, Irish Life Health) for faster access to private hospitals (Mater Private, Beacon Hospital, Blackrock Clinic, Bon Secours) and consultants. Private health insurance premiums range from EUR 100-300+ per month depending on coverage level and age. Emergency departments (A&E) treat everyone regardless of insurance status, but overcrowding is a persistent problem in major hospitals. GPs are independent practitioners — you register with a local practice and pay per visit unless you hold a medical card or GP visit card.",
  digitalLife: {
    overview:
      "Ireland's digital infrastructure is modern and improving, with government services increasingly available online through MyGovID. However, some administrative processes still require in-person verification, and the digital experience is less seamless than in Nordic or Baltic countries.",
    essentials: [
      "MyGovID (unified digital identity for accessing Revenue myAccount, social welfare services, driving licence applications, and other government services)",
      "Revenue myAccount (online portal for managing tax credits, claiming refunds, and viewing payslips — essential for PAYE employees)",
      "Revolut or N26 (digital banks widely used by newcomers for faster account opening — Revolut is particularly popular in Ireland)",
      "Leap Card (contactless transport card for Dublin Bus, Luas tram, DART rail, and Bus Eireann services in Dublin and other cities)"
    ],
    whatSurprisesNewcomers: [
      "The PPS number, bank account, and proof of address form a Catch-22 that requires creative sequencing — digital banks (Revolut, N26) can break the loop by accepting employer letters or accommodation provider letters as proof of address.",
      "Bank account setup at traditional Irish banks (AIB, Bank of Ireland, Permanent TSB) often requires an in-branch appointment and can take 1-2 weeks.",
      "Healthcare access often depends on whether you have a medical card or private insurance — the system is not fully universal in practice.",
      "Leap Card for public transport is essential in Dublin and can be topped up online, at machines, or via the Leap Card app."
    ]
  },
  culture: {
    text: 'Irish culture is built on storytelling, wit, warmth, and a deep aversion to pretension. "The craic" (fun, banter, good conversation, and a lively atmosphere) is the essential social currency — a night in the pub is not about the drinking but about the quality of conversation and connection. The Irish are famously friendly and genuinely interested in people, but they express affection through teasing ("slagging") rather than compliments. If an Irish person is making fun of you, it usually means they like you — the truly cold treatment is polite indifference. The pub is not just a drinking establishment but the living room of Irish social life: it is where friendships are maintained, business deals are informally discussed, and community events are organized. The "round" system is a sacred social contract: when in a group at a pub, each person takes a turn buying drinks for everyone. Skipping your round is a serious social offense that will be noticed and remembered. Irish people are conflict-averse in direct conversation but express opinions freely through humor, irony, and storytelling. Punctuality is flexible — "I\'ll be there in a minute" means "sometime within the next hour."',
    highlights: [
      'The Round: If someone buys you a drink in a pub, you must buy one back when your turn comes. Skipping your round is one of the most reliable ways to damage a social relationship in Ireland. When in doubt, offer to buy.',
      'Slagging: Irish people express affection through teasing and gentle mockery. Being "slagged" is a sign of acceptance. The appropriate response is to laugh and slag back — never take it personally or react defensively.',
      'Thank the Bus Driver: It is a universal Irish custom to thank the bus driver when exiting the bus. Failing to do so is noticed and silently judged by everyone on board.',
      'Weather as Social Ritual: The weather is the default conversation opener with everyone — colleagues, shop workers, taxi drivers, strangers. "Fierce mild, isn\'t it?" or "We\'re getting great weather" are standard openers. Engage sincerely.',
      'Understatement: "Not bad" means good. "Grand" means fine, adequate, or excellent depending on tone. "Sure look" means acceptance of an unchangeable situation. Irish communication is rich with understated phrases that carry more meaning than their words suggest.'
    ]
  },
  transportationMobility:
    "Dublin's public transport includes Dublin Bus (extensive but sometimes unreliable), the Luas tram system (two lines — Green and Red — connecting suburbs to the city center), and the DART commuter rail (coastal route from Malahide/Howth to Greystones, with spectacular sea views). All accept the Leap Card. Bus Eireann and Irish Rail connect regional cities, though services outside the Dublin commuter belt are less frequent. Cycling is growing in Dublin with expanding bike lanes and the Bleeper/Moby bike-sharing systems, though infrastructure is still developing compared to Dutch or Danish standards. Driving is on the left. Car ownership is common outside Dublin and essential in rural Ireland, where public transport coverage is minimal. The M50 motorway ring road around Dublin uses electronic tolling (eFlow). Traffic congestion in Dublin, particularly during school terms, is a persistent frustration. Cork, Galway, and Limerick have bus services but limited rail connections.",
  internationalConnectivity:
    "Dublin Airport (DUB) is Ireland's primary international gateway and a major transatlantic hub, with direct flights to North America (New York, Boston, Chicago, Toronto, San Francisco, and more), extensive European connections, and routes to the Middle East and beyond. Ryanair (headquartered in Dublin) and Aer Lingus (the national carrier, part of IAG) provide extensive European and transatlantic networks. Shannon Airport (SNN) in the west offers US preclearance facilities — US-bound passengers clear immigration and customs in Shannon, arriving in the US as domestic passengers. Cork Airport serves European routes. The combination of English language, EU membership, and strong transatlantic connections makes Ireland uniquely positioned as a bridge between Europe and North America.",
  travelExploration:
    "Ireland is compact (approximately 84,000 square km) and offers remarkable natural beauty within short distances. The Wild Atlantic Way — a 2,500 km coastal driving route along the western seaboard — passes through the Cliffs of Moher, the Burren, Connemara, the Ring of Kerry, and the Dingle Peninsula, offering some of Europe's most dramatic coastal scenery. The Aran Islands (Inishmore, Inishmaan, Inisheer) preserve traditional Irish language and culture. The Causeway Coastal Route in Northern Ireland features the Giant's Causeway (UNESCO), Carrick-a-Rede rope bridge, and the Dark Hedges. Killarney National Park, Glendalough in the Wicklow Mountains, and the Beara Peninsula are accessible weekend destinations. Dublin itself offers a rich cultural scene: the Book of Kells at Trinity College, the Guinness Storehouse, the Literary Quarter, and a world-class food and pub scene. Galway, with its bohemian arts culture and proximity to the Gaeltacht (Irish-speaking regions), is a favorite weekend destination.",
  considerations: [
    'Housing Crisis: The housing shortage in Dublin and other Irish cities is severe and ongoing. Rental vacancy rates are among the lowest in Europe, competition for properties is fierce, and rents have risen dramatically in recent years. Securing accommodation before arriving is strongly recommended — consider short-term accommodation (Airbnb, serviced apartments) for the first month while searching.',
    'Cost of Living: Ireland is one of the most expensive countries in Europe for everyday goods, alcohol, tobacco, insurance, and childcare. Dublin in particular rivals London and Paris for cost of living. Budget carefully and account for the high effective tax rate on income above EUR 42,000.',
    'Weather: Ireland\'s maritime climate means mild temperatures year-round (rarely below 0C or above 25C) but persistent cloud cover and frequent rain. "Four seasons in one day" is not an exaggeration. Waterproof layers, not umbrellas (the wind renders them useless), are the practical choice.',
    'Driving on the Left: Ireland drives on the left side of the road. Non-EU driving licences must be exchanged for an Irish licence after 12 months. Rural roads can be narrow and winding, and livestock on roads is not uncommon outside urban areas.',
    'Not in Schengen: Ireland is an EU member but NOT part of the Schengen Area. This means a Schengen visa does not grant entry to Ireland, and an Irish residence permit does not provide Schengen free travel. Separate visa requirements apply for travel to/from Schengen countries for non-EU nationals.'
  ],
  mistakes: [
    'Calling Ireland part of the United Kingdom. The Republic of Ireland is an independent sovereign state. Northern Ireland is part of the UK. This distinction is not academic — it is a deeply emotional and historically charged topic. Learn the difference before arriving and never assume.',
    'Ordering an "Irish Car Bomb" cocktail. This is deeply offensive — the name references the Troubles, a period of violent conflict in Northern Ireland that affected communities across the island. Simply do not order it.',
    'Taking yourself too seriously. The Irish value humility, humor, and the ability to laugh at yourself. Boasting about achievements, flaunting wealth, or being overly earnest in social settings will result in being "slagged" (teased) until you lighten up.',
    'Complaining about the rain. The Irish have heard every weather complaint. The rain is why the island is green, why the grass grows, and why the pubs are full. Embrace it, invest in good rain gear, and find the beauty in grey skies.',
    'Underestimating the housing market. Many newcomers arrive expecting to find accommodation within a few days, only to spend weeks or months searching. Dublin\'s rental market is genuinely brutal. Begin your search well before arrival, have documentation ready (employer letter, references, proof of funds), and be prepared to act within hours of a listing appearing.'
  ],
  emergency: [
    {
      number: '112 / 999',
      service: 'Police (Garda Siochana), Fire, Ambulance',
      description: 'Both numbers work for all emergency services in Ireland. Operators speak English and Irish.'
    },
    {
      number: '116 123',
      service: 'Samaritans',
      description: 'Free 24/7 emotional support and crisis helpline. Available to anyone experiencing distress, suicidal thoughts, or emotional difficulty.'
    },
    {
      number: '1800 250 025',
      service: 'Domestic Violence Helpline',
      description: 'Women\'s Aid national freephone helpline providing confidential support and information for women experiencing domestic violence. Available 24/7.'
    }
  ],
  sources: [
    {
      name: 'Immigration Service Delivery (ISD)',
      category: 'Immigration',
      description: 'The official immigration authority handling visa applications, residence permits (IRP), and immigration policy for Ireland.',
      link: 'https://www.irishimmigration.ie/'
    },
    {
      name: 'Citizens Information',
      category: 'Public Services Guide',
      description: 'Ireland\'s comprehensive public information service covering rights, entitlements, and access to government services. An invaluable resource for newcomers covering everything from employment rights to healthcare access.',
      link: 'https://www.citizensinformation.ie/'
    },
    {
      name: 'Revenue Commissioners',
      category: 'Tax Authority',
      description: 'Ireland\'s tax authority managing PAYE, self-assessment, tax credits, USC, PRSI, and all tax obligations for residents and businesses.',
      link: 'https://www.revenue.ie/'
    },
    {
      name: 'Tourism Ireland',
      category: 'Tourism',
      description: 'Official tourism body promoting the island of Ireland with travel guides, destination information, and practical visitor resources.',
      link: 'https://www.ireland.com/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to Ireland, consult the Irish Department of Foreign Affairs (DFA) or an Irish embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/ireland',
    mfaLink: 'https://www.dfa.ie/'
  },
  serviceDirectory: {
    title: "Service Directory - Ireland",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Ireland.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with employment permits, residence permissions, family reunification, and immigration appeals.",
        providers: [
          { name: "Fragomen Ireland", link: "https://www.fragomen.com" },
          { name: "Sinnott Solicitors", link: "https://www.sinnott.ie" },
          { name: "McCann FitzGerald", link: "https://www.mccannfitzgerald.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms handling residential rentals and property purchases across Ireland.",
        providers: [
          { name: "Daft.ie", link: "https://www.daft.ie" },
          { name: "Sherry FitzGerald", link: "https://www.sherryfitz.ie" },
          { name: "MyHome.ie", link: "https://www.myhome.ie" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax and accounting experts covering Irish income tax, PAYE, employment permits tax implications, and cross-border income.",
        providers: [
          { name: "Deloitte Ireland", link: "https://www2.deloitte.com/ie" },
          { name: "PwC Ireland", link: "https://www.pwc.ie" },
          { name: "Taxback.com", link: "https://www.taxback.com" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services for household goods and personal belongings.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "Pickfords Ireland", link: "https://www.pickfords.ie" }
        ]
      },
      {
        name: "Language Tutors",
        description: "English language schools, IELTS preparation, and Irish language courses for newcomers and long-term residents.",
        providers: [
          { name: "EC English Dublin", link: "https://www.ecenglish.com" },
          { name: "International House Dublin", link: "https://www.ihdublin.com" },
          { name: "Conradh na Gaeilge (Irish language)", link: "https://www.cnag.ie" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public healthcare system and private hospitals commonly used by residents and expats in Ireland.",
        providers: [
          { name: "Health Service Executive (HSE)", link: "https://www.hse.ie" },
          { name: "Mater Private Network", link: "https://www.materprivate.ie" },
          { name: "Beacon Hospital", link: "https://www.beaconhospital.ie" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and agencies connecting international talent with Irish employers.",
        providers: [
          { name: "IrishJobs.ie", link: "https://www.irishjobs.ie" },
          { name: "Morgan McKinley Ireland", link: "https://www.morganmckinley.com/ie" },
          { name: "Hays Ireland", link: "https://www.hays.ie" }
        ]
      }
    ]
  }
};
