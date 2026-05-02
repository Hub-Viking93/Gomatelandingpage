export const belize = {
  id: 'belize',
  slug: 'belize',
  name: 'Belize',
  region: 'Americas',
  complexity: 'Low',
  languages: ['English', 'Spanish', 'Belizean Kriol', 'Mayan languages', 'Garifuna'],
  shortDescription: 'The only English-speaking country in Central America, with the world\'s second-largest barrier reef and an unusually friendly retiree residency program.',
  heroImage: 'https://images.unsplash.com/photo-1606257770147-9af6c8e7e081',
  flagAlt: 'Flag of Belize',
  atAGlance: "Belize is a small, Caribbean-facing country wedged between Mexico's Yucatan and Guatemala. With roughly 410,000 people, it is the least populous country in Central America — and the only one where English is the official language, a legacy of its British Honduras colonial past (independence came in 1981). That heritage also means common-law legal traditions, Westminster parliamentary government, CARICOM/CSME membership, and administrative practices closer to the Anglophone Caribbean than to its Spanish-speaking neighbors. The population is strikingly diverse: Mestizo, Creole (Belizean Kriol speakers), Maya (Kekchi, Mopan, Yucatec), Garifuna (Afro-indigenous coastal communities with UNESCO-recognized heritage), and Mennonite farming communities in Orange Walk and Cayo all coexist. The economy runs on tourism (reef diving, Mayan ruins, rainforest ecotourism), agriculture, offshore financial services, and a growing retiree and digital-nomad population. Belize is home to the Belize Barrier Reef (UNESCO, second largest in the world), the Great Blue Hole, and major Maya sites including Caracol, Xunantunich, and Lamanai. The Qualified Retired Persons Program (QRP) is among the most generous retiree residency programs anywhere, drawing North American retirees to Ambergris Caye, Caye Caulker, San Ignacio, and Placencia. The Belize Dollar (BZD) is pegged 2:1 to the USD, and US dollars are accepted almost universally. Infrastructure is modest — roads outside main highways are variable, internet reliability varies, and serious healthcare requires evacuation — but the English language, friendly residency programs, and Caribbean lifestyle make Belize one of the most accessible entry points into the region.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 30 days on arrival (extendable)',
    costOfLiving: 'Medium',
    primaryLanguages: 'English (Official), Spanish, Belizean Kriol, Mayan languages, Garifuna',
  },
  visas: [
    {
      name: 'Qualified Retired Persons Program (QRP)',
      targetAudience: 'Retirees aged 45+',
      useCase: 'The flagship Belize residency route and one of the most generous retiree programs in the world. Open to persons aged 45 and above who can demonstrate at least USD 2,000/month from a pension, social security, or verifiable investment income. Grants permanent residency, exemption from Belizean tax on foreign-source income, and duty-free import of household goods and one vehicle in the first year. Administered by the Belize Tourism Board, not the Immigration Department.',
      duration: 'Permanent residency (with annual income verification)',
      link: 'https://belizeretirement.org/'
    },
    {
      name: 'CARICOM Skilled National / CSME Free Movement',
      targetAudience: 'Caribbean Community nationals',
      useCase: 'As the only Central American CARICOM member, Belize participates in CSME free movement of skills. Qualifying CARICOM nationals (university graduates, artists, musicians, sportspersons, media workers, nurses, teachers, and other approved categories) can apply for a CARICOM Skills Certificate, granting the right to live and work in Belize without a standard work permit.',
      duration: 'Indefinite (with valid Skills Certificate)',
      link: 'https://www.immigration.gov.bz/'
    },
    {
      name: 'BELTRAIDE Investor Permit',
      targetAudience: 'Foreign investors and business owners',
      useCase: 'For foreigners establishing a qualifying business in Belize, often via the Belize Trade and Investment Development Service (BELTRAIDE). Requires a registered Belizean company, viable business plan, proof of capital, and demonstrated benefit to Belize (employment, exports, foreign exchange). Can be paired with sector-specific incentives (Designated Processing Areas, Fiscal Incentives Act).',
      duration: '1 year (renewable, path to permanent residency)',
      link: 'https://www.belizeinvest.org.bz/'
    },
    {
      name: 'Permanent Residency',
      targetAudience: 'Long-stay residents',
      useCase: 'Traditional permanent residency after one year of continuous legal residence in Belize. Applicants must demonstrate good character, means of support, and intent to reside. Submitted to the Director of Immigration with police records (each country lived in for 6+ months in the past 10 years), medical exam, and proof of continuous presence. Distinct from QRP and gives full work rights.',
      duration: 'Permanent (after one year of continuous residence)',
      link: 'https://www.immigration.gov.bz/'
    },
    {
      name: 'Work Permit',
      targetAudience: 'Employees of Belizean companies',
      useCase: 'Required for any non-citizen working in Belize. The employer initiates the application through the Department of Labour and Immigration Department, with proof that no qualified Belizean is available for the role, plus apostilled credentials and a police record. Highly restricted and not easily transferable between employers.',
      duration: '1 year (renewable)',
      link: 'https://www.immigration.gov.bz/'
    }
  ],
  requirements: [
    {
      title: 'TIN (Tax Identification Number)',
      explanation: 'Issued by the Belize Tax Service Department. Required for anyone earning Belizean-source income, operating a business, or engaging in significant financial transactions. QRP participants on foreign-source income may have limited TIN interaction but should still register.',
      importance: 'Needed to open a local bank account in many cases, register a business, employ staff, or interact formally with the tax system. Application is straightforward in-person at a Belize Tax Service office with your passport and immigration documents.',
      link: 'https://www.belizetaxservice.org/'
    },
    {
      title: 'Belizean Bank Account',
      explanation: 'Opening an account at Belize Bank, Atlantic Bank, Heritage Bank, or Caye International Bank requires passport, proof of address, reference letters from your home bank, and proof of income. KYC requirements have tightened significantly in recent years.',
      importance: 'Needed for ongoing residency (QRP participants must demonstrate monthly USD deposits from abroad), to pay local bills, and to avoid international ATM fees. Expect 2-4 weeks of processing. Some offshore banks (Caye International, Atlantic International) serve foreign clients more readily than domestic retail banks.',
      link: 'https://centralbank.org.bz/'
    },
    {
      title: 'Monthly Income Proof (QRP)',
      explanation: 'QRP participants must show at least USD 2,000/month deposited into a Belizean bank account from an approved foreign source (pension, investment income, or equivalent). Annual verification is required to maintain QRP status.',
      importance: 'Falling below the USD 2,000/month threshold jeopardizes your QRP status and associated tax and import benefits. Plan the deposit structure with your bank and maintain clean documentation of the foreign source.',
      link: 'https://belizeretirement.org/'
    },
    {
      title: 'Police Record and Medical Certificate',
      explanation: 'Residency and work-permit applications require a police record from each country where you have lived six months or more in the past ten years, plus a Belizean medical certificate confirming the absence of communicable diseases.',
      importance: 'Missing or expired police records are a common delay. Records generally have a 6-month validity window for Belizean purposes, so time procurement with your application. The medical exam is straightforward and can be done in Belize City or Belmopan.',
      link: 'https://www.immigration.gov.bz/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Belize has a small formal job market concentrated in tourism (resorts, dive operators, tour guides), agriculture, government, offshore financial services, and a modest BPO sector. With roughly 410,000 people, job volume is limited and specialized roles are rare. Most foreign residents live on external income — pensions, remote work, or investment returns — rather than local employment. Work permits require employer sponsorship and proof that the role cannot be filled by a Belizean.",
    whereToLook: [
      "BelizeJobs.bz — the main local job aggregator",
      "CaribbeanJobs.com — regional platform covering Belize alongside the wider Caribbean",
      "LinkedIn for NGO, financial services, and international roles",
      "Direct outreach to dive shops, resorts, and tour operators on Ambergris Caye, Placencia, and San Ignacio",
      "Remote work platforms (Upwork, Toptal, Remote.co) for USD-paid external income"
    ],
    realityChecks: [
      "The minimum wage is approximately BZD 5.00 per hour (roughly USD 2.50), among the higher minimum wages in Central America but still modest by international standards.",
      "Professional roles in local companies typically pay BZD 2,000-6,000/month (USD 1,000-3,000). Senior positions in offshore financial services can be higher.",
      "Work permits are strictly employer-sponsored and not easily transferable. Changing jobs requires a new permit application.",
      "Tourism hospitality and diving roles are the most common entry points for foreigners, but these often pay modestly and require work permits that not all employers are willing to sponsor."
    ]
  },
  salaryReality: {
    overview:
      "Salaries are modest by North American standards but comparable to the wider Caribbean. The BZD's 2:1 peg to the USD means foreign USD income translates at a stable rate. Foreign-source income is generally not subject to Belizean tax for QRP participants — a significant draw for retirees and passive-income residents.",
    realityChecks: [
      "QRP participants enjoy tax-free treatment on foreign-source income and can import household goods and one vehicle duty-free during the first year of residency. This is one of the program's largest financial benefits.",
      "Income tax for non-QRP residents on Belizean-source income is a flat 25% above the BZD 26,000 annual exemption, with specific exemptions and deductions.",
      "Social security contributions apply to formal employees (both employer and employee) and fund basic state benefits. QRP retirees are generally outside the social security system.",
      "The BZD/USD peg provides strong currency stability, simplifying planning for US-dollar pensioners and remote workers."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Import duties on electronics, vehicles, and specialty goods, which can add 20-60% to sticker prices for non-QRP residents",
      "Utilities and fuel: electricity rates are high by US standards due to reliance on imported fuel and hydroelectric capacity from Mexico",
      "Medical evacuation and international health insurance, essential given limited specialty care within Belize",
      "Freight and shipping costs for goods ordered from the US, which can add significant time and expense to online purchases"
    ]
  },
  housingSystem: {
    overview:
      "Housing clusters in a few specific areas. Ambergris Caye (anchored by San Pedro Town) is the largest expat hub, ranging from basic apartments to luxury beachfront condos. Caye Caulker is smaller, more laid-back, and less expensive. On the mainland, San Ignacio in the Cayo District offers inland living with mountain and river access, popular with retirees. Placencia, a narrow peninsula on the southern coast, has resort developments and an upscale expat community. Corozal in the north offers the most affordable expat-friendly living. Belmopan (capital) and Belize City have smaller expat populations.",
    expectations:
      "Expect one to two months' rent as a security deposit, with rent commonly quoted in USD or BZD. A one-bedroom in San Pedro runs USD 800-1,800/month; beachfront condos significantly higher. In San Ignacio or Corozal, a similar unit can be USD 400-800. Furnished options are common in expat areas. Always inspect in person, test water pressure, confirm AC, verify internet speed, and ask about backup water tanks and generators — outages do occur."
  },
  healthcareReality:
    "Belize has a public healthcare system through the Ministry of Health & Wellness, with Karl Heusner Memorial Hospital in Belize City as the largest public facility. Public care is low-cost and adequate for basic needs but limited for complex conditions. Private care includes Belize Healthcare Partners (Belize City) and Belize Medical Associates, which handle more serious cases and have some specialist coverage. San Pedro (Ambergris Caye) has the Dr. Otto Rodriguez San Pedro Polyclinic II and private clinics including the Hyperbaric Chamber (the Sub-Aquatics Safety Services chamber, essential for dive emergencies). For serious conditions (cardiac, oncology, major trauma), most expats evacuate to Mexico (Chetumal, Merida, Cancun — all within 3-5 hours of northern Belize by ambulance or small aircraft), Guatemala City, Houston, or Miami. Medical evacuation insurance is strongly recommended. Pharmacies are widely available and stock common medications, though specialty drugs may need to be imported or sourced from Mexico. Dental care is reasonable quality and significantly cheaper than in the US.",
  digitalLife: {
    overview:
      "Digital infrastructure has improved but remains uneven. Belize Telemedia (BTL) and Smart are the two main providers, offering DSL, fiber in some areas, and 4G mobile. Fiber is increasingly available in Belize City, Belmopan, San Pedro, and Placencia, but rural areas rely on slower connections. Power outages occur, particularly during storms, and many long-term residents maintain UPS and small solar/generator setups.",
    essentials: [
      "Local SIM card from Smart or Digi (BTL) — prepaid plans with data are affordable and available at any corner store",
      "WhatsApp — the default communication channel for everything from landlords to tour operators and government contacts",
      "Facebook groups — surprisingly important for local announcements, buy/sell, and community organizing in smaller towns",
      "International ATM card and a local account — cash (both BZD and USD) is still important for daily transactions"
    ],
    whatSurprisesNewcomers: [
      "Internet speed and reliability vary significantly even within the same town. Test the connection at any prospective rental before committing to a lease.",
      "Power outages occur, especially during hurricane season and heavy storms. A UPS and surge protection for electronics is a practical necessity for remote workers.",
      "Cash remains important. Many smaller businesses, taxis, and village vendors do not accept cards. Carry small-denomination BZD and USD — both are accepted almost everywhere.",
      "Island-specific logistics: on Ambergris Caye and Caye Caulker, daily life runs on golf carts rather than cars. Golf cart rental or purchase is a meaningful part of the cost structure for island life."
    ]
  },
  culture: {
    text: "Belizean culture is a genuine melting pot. The Mestizo majority (Spanish-speaking) dominates the north and west; the Creole population (English/Kriol-speaking) is prominent in Belize City and the central coast; Mayan communities (Kekchi, Mopan, Yucatec) are concentrated in the south and west; the Garifuna along the southern coast have a UNESCO-recognized cultural heritage with their own language, music (punta), and dance; and several thousand Mennonites maintain German-speaking farming communities in Orange Walk and Cayo. English is the official language, but Kriol is widely spoken informally and Spanish dominates in the north. The culture is relaxed, informal, and friendly. Food reflects the diversity: rice and beans, stewed chicken, fry jack, escabeche, hudut (Garifuna fish and plantain), and ceviche. Direct aggressive behavior is culturally unwelcome — polite persistence works far better than pressure.",
    highlights: [
      "Greetings matter. A friendly 'Good morning' or 'Good afternoon' is expected before asking for anything.",
      "Language code-switching is normal. Conversations in Belize frequently move between English, Kriol, and Spanish within the same sentence.",
      "Garifuna Settlement Day (November 19) commemorates the arrival of the Garifuna people in Belize and is a major cultural holiday, celebrated with drumming, dancing, and traditional foods.",
      "September Celebrations (September 10 — St. George's Caye Day, and September 21 — Independence Day) are the biggest national festivals with parades, jouvert celebrations, and community events.",
      "The pace is genuinely slow. 'Right now, right now' in Belizean English can mean 'soon' rather than 'immediately.' Patience is the most useful social skill."
    ]
  },
  transportationMobility:
    "On the mainland, the main highways (George Price, Hummingbird, Southern) connect the major towns: Belize City, Belmopan (capital), San Ignacio (west), Dangriga and Placencia (south), and Corozal/Orange Walk (north). Former US school buses — the iconic 'chicken buses' — provide cheap (BZD 2-12) inter-town service, slow and crowded. Express buses (James Bus Line and others) offer faster service on major routes, and taxis are plentiful within towns. To reach the cayes (Ambergris Caye, Caye Caulker), you take either a domestic flight (Tropic Air, Maya Island Air — 15-20 minutes from Belize City) or a water taxi (San Pedro Belize Express, Ocean Ferry — 75-90 minutes). On Ambergris Caye and Caye Caulker, the primary local transport is the golf cart, with walking and bicycles filling in the rest. A 4x4 is recommended for rural roads, especially during the rainy season.",
  internationalConnectivity:
    "Philip S.W. Goldson International Airport (BZE), about 16 km from Belize City, is the main international gateway. Direct flights connect to major US cities (Houston, Dallas, Miami, Atlanta, Los Angeles, Newark, Charlotte) on American, United, Delta, Southwest, and Avianca. Regional connections include San Salvador, Guatemala City, Cancun, and Roatan. Flight time to Miami or Houston is roughly 2.5 hours; to Los Angeles, 5 hours. There are no direct flights to Europe — connections route through the US, Mexico, or Panama. Internal flights from Belize City to San Pedro, Caye Caulker, Placencia, and Dangriga run frequently on small turboprops. Land borders with Mexico (near Corozal) and Guatemala (Benque Viejo/Melchor de Mencos near San Ignacio) are active, with regular international bus services.",
  travelExploration:
    "Belize packs extraordinary biodiversity into a small territory. The Belize Barrier Reef (UNESCO, second largest in the world) offers world-class diving at the Great Blue Hole, Turneffe Atoll, and Lighthouse Reef. The cayes — Ambergris Caye (San Pedro), Caye Caulker, and smaller private-island resorts — are the most visited destinations. Inland, the Cayo District offers Mayan ruins (Caracol, Xunantunich, Cahal Pech), cave tubing and the famous ATM cave, jungle lodges, and the Mountain Pine Ridge Forest Reserve. Southern Belize features the Maya Mountains, Garifuna coastal communities around Dangriga and Hopkins, and the Placencia peninsula. Lamanai, accessed by river boat, is one of the longest continuously inhabited Maya sites. The Cockscomb Basin Wildlife Sanctuary is the world's first jaguar reserve. Weekend trips to Tikal in Guatemala (about 2 hours from San Ignacio) and to Chetumal in Mexico are straightforward.",
  considerations: [
    "English-Language Advantage: Belize's official English and common-law legal system make administrative, legal, and medical processes significantly more accessible than in its Spanish-speaking neighbors — one of the country's biggest practical advantages.",
    "QRP Program Value: The QRP is one of the most favorable retiree programs in the world — tax-free foreign income, duty-free household import, and straightforward permanent residency. Confirm current thresholds (USD 2,000/month minimum) with the Belize Tourism Board directly.",
    "Hurricane Exposure: The coast and cayes are genuinely hurricane-prone. The Atlantic hurricane season runs June 1 to November 30. Historic storms (Hattie 1961, Keith 2000, Dean 2007, Earl 2016) caused major damage. Hurricane preparedness — evacuation planning, insurance, construction standards — is essential on the coast.",
    "Limited Specialty Healthcare: Adequate for routine care but limited for complex conditions. Most serious cases are evacuated to Mexico, Guatemala, Houston, or Miami. Medical evacuation insurance is strongly recommended for anyone over 50 or with pre-existing conditions.",
    "Infrastructure Variability: Roads outside main highways are variable, internet reliability varies, and power outages occur. Rural and coastal living requires a degree of self-sufficiency unusual for US and European retirees — UPS, water tanks, and surge protection are practical necessities."
  ],
  mistakes: [
    "Buying property on the cayes without understanding logistics. Life on Ambergris Caye or Caye Caulker sounds idyllic, but construction materials, furniture, medical care, and major shopping all require barge or ferry from the mainland. Rent first, understand the logistics, then consider purchase.",
    "Skipping the QRP application when eligible. If you are 45+ with USD 2,000+/month in pension or passive income, the QRP's tax and import benefits are significantly more valuable than the standard residency route. Many newcomers default to ordinary residency without realizing what QRP offers.",
    "Underestimating hurricane season. June-November brings real risk. Many expats lose property or face extended disruption because they did not invest in hurricane-rated construction, storm shutters, or proper insurance.",
    "Assuming US prices for imports. Belize's import-dependent economy means electronics, vehicles, and specialty foods cost significantly more. QRP's duty-free import allowance during the first year is worth using aggressively.",
    "Ignoring water and power infrastructure when choosing housing. Quality varies by neighborhood. A water tank with pump, UPS, and sometimes a small generator are standard for higher-end housing and should be verified during property inspection."
  ],
  emergency: [
    {
      number: '911',
      service: 'General Emergency (National)',
      description: 'Unified national emergency number for police, fire, and ambulance services. Operators speak English. Response times vary by location — rural and island responses can be slower than in Belize City or Belmopan.'
    },
    {
      number: '90',
      service: 'Police (Direct Line)',
      description: 'Direct line to the Belize Police Department, particularly useful in areas where 911 routing has been historically less reliable. Operators speak English.'
    },
    {
      number: '223-4488',
      service: 'Karl Heusner Memorial Hospital Emergency (Belize City)',
      description: 'Direct line to Belize\'s main public hospital emergency department. Useful for non-911 medical inquiries and when traveling to the hospital directly by private transport.'
    }
  ],
  sources: [
    {
      name: 'Belize Immigration Department',
      category: 'Immigration & Residency',
      description: 'Official immigration authority handling entry requirements, visa extensions, work permits, and permanent residency applications.',
      link: 'https://www.immigration.gov.bz/'
    },
    {
      name: 'Belize Tourism Board (BTB) - QRP Program',
      category: 'Retiree Residency',
      description: 'The Belize Tourism Board administers the Qualified Retired Persons Program, including application processing and annual compliance.',
      link: 'https://belizeretirement.org/'
    },
    {
      name: 'Belize Tax Service Department',
      category: 'Tax & Finance',
      description: 'Belize\'s tax authority responsible for TIN issuance, income tax, GST, and tax compliance for residents and businesses.',
      link: 'https://www.belizetaxservice.org/'
    },
    {
      name: 'Travel Belize (Belize Tourism Board)',
      category: 'Tourism & Travel',
      description: 'Official tourism portal with destination guides, practical travel information, and cultural and ecological resources.',
      link: 'https://www.travelbelize.org/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to Belize, consult the Belize Ministry of Foreign Affairs or a Belizean embassy or high commission abroad. Belize maintains diplomatic missions primarily in the Americas and selected Commonwealth capitals.',
    directoryLink: 'https://www.embassypages.com/belize',
    mfaLink: 'https://www.mfa.gov.bz/'
  },
  serviceDirectory: {
    title: "Service Directory - Belize",
    description: "Examples of commonly used service providers people often interact with when relocating to Belize.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with QRP applications, work permits, permanent residency, and immigration compliance in Belize.",
        providers: [
          { name: "Courtenay Coye LLP", link: "https://courtenaycoye.com" },
          { name: "Barrow & Williams LLP", link: "https://www.barrowandwilliams.com" },
          { name: "Arguelles & Company", link: "https://www.arguelles.com.bz" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies handling residential rentals and property purchases on Ambergris Caye, Placencia, San Ignacio, and Corozal.",
        providers: [
          { name: "RE/MAX Belize", link: "https://www.remax-belizerealestate.com" },
          { name: "Coldwell Banker Ambergris Caye", link: "https://www.cbambergriscaye.com" },
          { name: "Ceiba Realty", link: "https://www.ceibarealty.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Professionals advising on Belizean tax residency, QRP compliance, offshore structures, and cross-border planning.",
        providers: [
          { name: "BDO Belize", link: "https://www.bdo.bz" },
          { name: "PKF Belize", link: "https://www.pkf.com" },
          { name: "Baker Tilly Belize", link: "https://www.bakertilly.bz" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and regional relocation services for household goods and personal effects to Belize.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Sterling International Movers", link: "https://www.sterlingintl.com" },
          { name: "Belize Moving & Storage", link: "https://www.belizemoving.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Spanish language schools and cultural orientation programs. English is official, but Spanish is valuable for the north and west.",
        providers: [
          { name: "San Ignacio Language School", link: "https://www.sanignaciolanguageschool.com" },
          { name: "Playa Tutors (Ambergris Caye)", link: "https://www.playatutors.com" },
          { name: "Instituto Tecnico (Belize City)", link: "https://www.institutotecnico.bz" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private hospitals and clinics commonly used by residents and expats for medical care in Belize.",
        providers: [
          { name: "Belize Healthcare Partners", link: "https://belizehealthcare.com" },
          { name: "Belize Medical Associates", link: "https://www.belizemedical.com" },
          { name: "Karl Heusner Memorial Hospital", link: "https://www.khmh.bz" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Employment platforms and recruitment resources for local and remote work arrangements in Belize.",
        providers: [
          { name: "BelizeJobs.bz", link: "https://www.belizejobs.bz" },
          { name: "CaribbeanJobs.com", link: "https://www.caribbeanjobs.com" },
          { name: "LinkedIn (Belize)", link: "https://www.linkedin.com" }
        ]
      }
    ]
  }
};
