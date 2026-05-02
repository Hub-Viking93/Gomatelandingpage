export const bahamas = {
  id: 'bahamas',
  slug: 'bahamas',
  name: 'Bahamas',
  region: 'Americas',
  complexity: 'Low',
  languages: ['English', 'Bahamian Creole'],
  shortDescription: 'An archipelago of 700 islands with no income tax, major financial services, and a sharp divide between Nassau and the Family Islands.',
  heroImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19',
  flagAlt: 'Flag of The Bahamas',
  atAGlance: "The Commonwealth of The Bahamas is an English-speaking island nation of about 400,000 people across roughly 700 islands and cays, of which only about 30 are inhabited. It sits just 80 km off Florida, shaping an identity closely tied to the US. Independent from the UK since 1973, it is a Commonwealth realm with a Westminster system and common-law traditions, and a CARICOM member with access to the Caribbean Court of Justice. The economy runs on tourism (Nassau/Paradise Island and Grand Bahama anchor mass tourism; Family Islands attract high-end niche travel), international financial services (a major offshore banking, trust, and insurance center now under tightened FATF/OECD compliance reforms), and the conch and grouper fisheries that underpin coastal communities. Nassau, on New Providence, concentrates administration and finance; the Family Islands (Abaco, Eleuthera, Exuma, Andros, Cat Island, Long Island, Bimini, and more) run slower with limited services and lower rents. The Bahamian Dollar (BSD) is pegged 1:1 to the US Dollar and circulates interchangeably with USD; the Sand Dollar CBDC, launched 2020, is one of the world's first central bank digital currencies. There is no personal income tax, no capital gains tax, no inheritance tax, and no wealth tax — a structural advantage driving the country's HNW appeal. Revenue comes instead from VAT (10%), substantial Customs Duty (administered alongside NIB social contributions), real property tax, and business licenses, so the absence of income tax is paid for at the till. Hurricane exposure is permanent — Hurricane Dorian (September 2019) devastated Abaco and Grand Bahama — and the casino/cruise economy keeps the country tightly coupled to US visitor flows.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 8 months (tourist)',
    costOfLiving: 'High',
    primaryLanguages: 'English (Official), Bahamian Creole',
  },
  visas: [
    {
      name: 'Annual Homeowner Card',
      targetAudience: 'Owners of Bahamian residential property',
      useCase: 'A multi-entry card issued to non-Bahamian residential property owners (and their immediate families), allowing facilitated entry and stays for the purpose of using the property. Distinct from full residency: it does not confer the right to work and is not a residence permit, but it eases travel and demonstrates a property-based connection to The Bahamas. Often used by part-time residents and second-home owners.',
      duration: '1 year (annually renewable)',
      link: 'https://www.immigration.gov.bs/'
    },
    {
      name: 'Annual Residence Permit (ARP)',
      targetAudience: 'Property owners seeking long stays; HNW individuals',
      useCase: 'Issued annually at the discretion of the Department of Immigration to property owners who wish to reside for extended periods. Owners of property valued at USD 750,000+ are clear candidates; investments of USD 1,000,000+ qualify for accelerated 21-day processing. Often used as a stepping-stone to Permanent Residence by Investment. Does not confer the right to work locally.',
      duration: '1 year (annually renewable)',
      link: 'https://www.immigration.gov.bs/'
    },
    {
      name: 'Permanent Residence by Investment',
      targetAudience: 'High-net-worth investors',
      useCase: 'For individuals making a substantial Bahamian investment, typically real estate. The standard threshold is approximately USD 750,000; investments of USD 1,500,000+ qualify for expedited processing. Grants permanent residency with the right to enter and exit freely, reside indefinitely, and includes the household. Does not provide Bahamian citizenship or passport rights directly.',
      duration: 'Permanent (with ongoing property ownership)',
      link: 'https://www.immigration.gov.bs/'
    },
    {
      name: 'Bahamas Extended Access Travel Stay (BEATS)',
      targetAudience: 'Long-term visitors, remote workers, digital nomads',
      useCase: 'Recently introduced extended-stay program designed for long-term visitors who wish to reside and work remotely from The Bahamas without taking local employment. Provides a clear long-stay status beyond the standard tourist entry, intended to capture the post-pandemic remote-work market. Applicants demonstrate foreign-source income, accommodation, and clean criminal record.',
      duration: 'Up to 1 year (renewable)',
      link: 'https://www.immigration.gov.bs/'
    },
    {
      name: 'CARICOM Skilled National / Free Movement',
      targetAudience: 'Caribbean Community (CARICOM) nationals',
      useCase: 'Under the CARICOM Single Market and Economy framework, qualifying nationals of CARICOM member states (university graduates, artists, musicians, sportspersons, media workers, and other approved categories) can apply for facilitated movement and the right to work in The Bahamas. The Bahamas participates selectively in CSME provisions; applicants secure a Skilled National Certificate from their home state.',
      duration: 'Indefinite (subject to category requirements)',
      link: 'https://caricom.org/'
    },
    {
      name: 'Work Permit',
      targetAudience: 'Employees of Bahamian companies',
      useCase: 'Required for any non-Bahamian employed in The Bahamas. The employer initiates the application, demonstrating that no qualified Bahamian is available for the role under Bahamianization policy. Fees are tiered by job category and substantial for senior roles (BSD 10,000+/year for executive positions). Tied to a specific employer; changing jobs requires a new permit.',
      duration: '1-5 years (case-dependent, renewable)',
      link: 'https://www.immigration.gov.bs/'
    }
  ],
  requirements: [
    {
      title: 'National Insurance Board (NIB) Registration',
      explanation: 'NIB administers social security, providing pensions, sickness benefits, and employment injury coverage. Anyone formally employed in The Bahamas — citizen or work-permit holder — must be registered with NIB by their employer.',
      importance: 'NIB registration is mandatory for formal employment. Employers typically handle enrollment, but verify contributions are being remitted. Retirees on Annual Residence Permits who do not work locally generally do not engage with NIB.',
      link: 'https://www.nib-bahamas.com/'
    },
    {
      title: 'Bahamian Bank Account',
      explanation: 'Opening a Bahamian bank account requires passport, proof of address, reference letters from your existing bank, and proof of income or wealth. Major banks include Royal Bank of Canada, Scotiabank Bahamas, CIBC FirstCaribbean, Fidelity Bank Bahamas, and Commonwealth Bank. KYC requirements are strict given the country\'s offshore financial services status and FATF/OECD compliance reforms.',
      importance: 'A local account is needed for paying local bills, receiving Bahamian-source income, and simplifying real estate transactions. Offshore private banking is a distinct service for qualifying HNW residents. Expect 3-6 weeks of processing for retail accounts, significantly longer for private banking.',
      link: 'https://www.centralbankbahamas.com/'
    },
    {
      title: 'Real Property Documentation',
      explanation: 'For homeowners and Economic Permanent Residence applicants, clear property title, a registered purchase, and up-to-date real property tax payments are essential. The Department of Inland Revenue manages real property tax; transactions involve a stamp tax scaled up to 10% on higher-value sales.',
      importance: 'Property-related residency categories depend entirely on clean documentation. Using a Bahamian attorney for real estate transactions is standard and strongly recommended; informal arrangements expose buyers to serious title risk.',
      link: 'https://www.bahamas.gov.bs/'
    },
    {
      title: 'Health Insurance',
      explanation: 'The Bahamas has a mix of public and private healthcare. Private health insurance is strongly recommended for all foreign residents, as out-of-pocket private medical costs are high. International coverage with medical evacuation is standard for Family Islands residents given limited local specialty care.',
      importance: 'Public healthcare (Princess Margaret Hospital in Nassau, Rand Memorial Hospital in Freeport) is available but stretched; private facilities (Doctors Hospital in Nassau) charge US-comparable rates. Without insurance, serious medical events can run into tens of thousands of USD. Medical evacuation to Miami or Fort Lauderdale is a real operational need from the Family Islands.',
      link: 'https://www.bahamas.gov.bs/'
    }
  ],
  jobsAndIncome: {
    overview:
      "The Bahamian job market is small and concentrated in tourism, financial services, and public administration. Nassau hosts the overwhelming majority of formal employment — luxury resorts (Atlantis, Baha Mar, One&Only Ocean Club), international banks and trust companies (RBC, Scotiabank, CIBC FirstCaribbean), insurance companies, and law firms. Freeport/Grand Bahama has a smaller cluster around the Grand Bahama Shipyard. Most long-stay foreign residents rely on external income — pensions, remote work, or investments — because work permits are restrictive and local salaries do not always support US or European living expectations.",
    whereToLook: [
      "CaribbeanJobs.com — the main regional platform covering Bahamas alongside the wider Caribbean",
      "Bahamas government job portal and specific agency career pages",
      "LinkedIn for financial services, legal, and hospitality executive roles",
      "Direct applications to major resorts (Atlantis, Baha Mar, One&Only, Rosewood, Four Seasons) for hospitality roles",
      "International financial services firms and law offices in Nassau"
    ],
    realityChecks: [
      "There is no statutory minimum wage in the traditional sense for Bahamians, but the effective minimum has been set at BSD 260/week (roughly USD 1,130/month). Professional salaries in finance and law range from BSD 50,000-150,000+/year.",
      "Work permits are employer-sponsored, tiered by job level with significant fees (BSD 10,000+/year for executive roles). Changing employers requires a new permit.",
      "Bahamianization policies prioritize Bahamian citizens for most roles; work permits are granted only where no qualified Bahamian is available.",
      "Foreign-paid remote income in USD dramatically improves lifestyle flexibility. The Bahamas does not tax personal income, so USD earnings go a long way against high-end imported costs."
    ]
  },
  salaryReality: {
    overview:
      "The Bahamas has no personal income tax, no capital gains tax, no inheritance tax, and no wealth tax. Revenue comes from VAT (currently 10%), Customs Duty (often 25-45% on many goods), real property tax, business license fees, and real-estate stamp taxes. The absence of direct personal taxation is the country's signature fiscal feature and a major draw for HNW individuals, but the import-heavy cost structure means consumer goods are significantly more expensive than mainland US.",
    realityChecks: [
      "No income tax means your gross salary equals your net salary, apart from NIB contributions (approximately 3.9% employee-side up to a capped amount).",
      "Import duties of 25-45% apply to most consumer goods. A car priced at USD 30,000 in the US can cost USD 45,000+ after Bahamian duty and VAT.",
      "VAT at 10% applies to most goods and services. Real estate transactions attract stamp tax at tiered rates up to 10%, split between buyer and seller by custom.",
      "Real property tax applies to owner-occupied and investment properties with various exemptions; rates are modest but ongoing, and payment records are required for Homeowner residency renewals."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Electricity costs: Bahamas Power and Light rates are high due to dependence on imported fuel. Monthly bills for air-conditioned homes can exceed BSD 500-1,200.",
      "Grocery reality: imported specialty items at John Bull, Solomon's Fresh Market, and similar stores cost 50-100% more than US supermarket prices.",
      "Vehicle costs: import duty, licensing, insurance, and high fuel prices combine to make driving expensive. Many residents rely on a single vehicle or, on cayes, on golf carts.",
      "Private school costs: Nassau has several well-regarded private schools (Lyford Cay International School, St. Andrew's School, Queen's College) with annual fees from BSD 15,000-35,000+, a significant factor for expat families."
    ]
  },
  housingSystem: {
    overview:
      "Bahamian expat housing concentrates in a few areas. On New Providence (Nassau), the premier residential areas are Lyford Cay (gated, ultra-high-end), Old Fort Bay, Albany (luxury development with marina and golf), Sandyport (canal-front gated community), Cable Beach (condos with beach access), and the more mixed downtown/eastern neighborhoods. On Paradise Island, residences cluster around the resorts. On Grand Bahama, Freeport's Fortune Bay and surrounding gated communities house most expats. On the Family Islands — Abaco (Hope Town, Marsh Harbour, Treasure Cay), Eleuthera (Harbour Island, Governor's Harbour), Exuma (Great Exuma) — housing ranges from modest village homes to private island compounds.",
    expectations:
      "Expect one to three months' rent as security deposit plus first month upfront. A two-bedroom in Sandyport or Cable Beach runs BSD 2,500-5,000/month; Lyford Cay and Albany significantly higher. Grand Bahama is more affordable. Family Islands markets are thinner and often seasonal — long-term rentals are harder to find but generally cheaper than Nassau. Furnished rentals are common. Always inspect in person, test water and electricity reliability, verify AC quality, confirm hurricane preparedness (shutters, generator, safe room), and check internet speed."
  },
  healthcareReality:
    "Bahamian healthcare has a public sector anchored by Princess Margaret Hospital (Nassau) and Rand Memorial Hospital (Freeport), plus clinics across the Family Islands. Public care is functional but stretched; most foreign residents and middle-class Bahamians rely on private care. Doctors Hospital in Nassau is the leading private facility, providing US-comparable quality for most conditions. Lyford Cay Hospital and a network of private clinics serve the western New Providence expat community. For serious or specialized conditions (complex cardiac surgery, oncology, major trauma), medical evacuation to Miami, Fort Lauderdale, or Baltimore (Johns Hopkins has historical relationships with Bahamian patients) is standard. Family Islands healthcare is limited — most islands have a small clinic, and serious cases require evacuation to Nassau or directly to Florida. Medical evacuation insurance is not optional for Family Islands residents. Pharmacies (including the Lowe's chain) are widely available in Nassau and Freeport and stock most common medications; Family Islands pharmacies are more limited. International health insurance is strongly recommended for all foreign residents.",
  digitalLife: {
    overview:
      "The Bahamas has improving digital infrastructure, particularly in Nassau and Freeport. BTC and Aliv are the two main providers, offering fiber broadband in many Nassau neighborhoods and 4G/LTE with growing 5G coverage. Family Islands connectivity varies — Eleuthera and Exuma have reasonable fiber in main settlements, others remain slower. Government digital services are expanding through the MyGateway portal, though many processes still require in-person visits.",
    essentials: [
      "Local SIM card from BTC or Aliv — prepaid plans with data are affordable and available at the airport and retail locations",
      "Mobile banking apps from RBC, Scotiabank, and CIBC FirstCaribbean for transfers and bill payments",
      "WhatsApp — the common communication channel for service providers, landlords, and informal business",
      "Sand Dollar (optional) — the Bahamian central bank digital currency (CBDC), usable at participating merchants, though USD and cards remain dominant"
    ],
    whatSurprisesNewcomers: [
      "Internet speed and reliability vary significantly between Nassau neighborhoods and across the Family Islands. Test the connection at any prospective rental before committing to a lease, especially on the Family Islands.",
      "Power outages occur, particularly during storms and hurricane season. A UPS for electronics and a generator for extended outages are standard for higher-end housing.",
      "Cash (both BSD and USD) is still important for some transactions, particularly in the Family Islands, where card acceptance varies. Both currencies circulate interchangeably.",
      "Many government services still require in-person visits, notarized documents, and appointment-based processing. Digital front-ends exist but often route to in-person appointments."
    ]
  },
  culture: {
    text: "Bahamian culture is warm, proud, and anchored in Afro-Bahamian and Caribbean traditions with a strong British institutional legacy. Christianity (Baptist, Anglican, Pentecostal) is central to social life, and Sunday observance is widely respected. Junkanoo — a vibrant street parade with elaborate costumes, cowbells, whistles, and goatskin drums — is the defining cultural expression, with major parades on Boxing Day and New Year's Day. Music is integral: rake-and-scrape, goombay, soca, and reggae soundtrack social life. Food centers on conch (fritters, salad, chowder), fresh grouper, peas and rice, and johnnycake. Bahamians value politeness and proper greetings — skipping greetings or speaking sharply is considered rude. The motto 'Forward, Upward, Onward, Together' captures a strong community identity, even amid significant divides between Nassau elite society, Family Islands communities, and the broader population. Bahamians are genuinely warm to newcomers who show respect for local customs and humility about the privileges of foreign residence.",
    highlights: [
      "Greetings matter. A friendly 'Good morning' or 'Good afternoon' is expected before any request or conversation. Skipping the greeting is considered rude.",
      "Junkanoo is the central cultural celebration. Boxing Day and New Year's Day parades in Nassau are a must-experience. Family Islands have their own versions.",
      "Sunday is observed by many Bahamians as a quieter, family-and-church-oriented day. Some businesses are closed.",
      "Dress code is surprisingly formal for banks, government offices, and some restaurants. Beach attire is not appropriate away from the beach itself.",
      "Address people respectfully. 'Mr.', 'Mrs.', 'Miss', or 'Pastor' followed by first or last name is standard with older adults or in formal settings until invited to switch."
    ]
  },
  transportationMobility:
    "On New Providence, public transport consists of privately-operated jitneys (small buses) that run set routes for a flat fare of BSD 1.25-2.00, with informal timing. Taxis are plentiful at the airport and major hotels but expensive (BSD 25-40 for a standard Nassau ride). Ride-hailing services have had limited, intermittent operations. Most expats drive, and a Bahamian driver's license is required after a period of residence (visitors can use a foreign license short-term). The Bahamas drives on the LEFT, a British colonial legacy, though most vehicles are US-imported left-hand-drive cars — a characteristic Bahamian quirk. Between islands, the primary connections are short domestic flights on Bahamasair, Western Air, and charter operators, or mail boats from Potter's Cay dock in Nassau (slow, cheap, with vehicle-transport capability). On Harbour Island (Eleuthera) and smaller cayes, golf carts are the primary local transport, with walking and bicycles for shorter distances. A boat or access to charters is often essential for Family Islands life.",
  internationalConnectivity:
    "Lynden Pindling International Airport (NAS) in Nassau is one of the busiest airports in the Caribbean and offers US Pre-Clearance — passengers clear US Customs and Immigration before boarding, arriving in the US as a domestic flight. Direct flights connect to dozens of US cities (Miami, Fort Lauderdale, Orlando, Atlanta, New York, Boston, Dallas, Houston), Toronto, London Heathrow, and regional Caribbean destinations. American, JetBlue, Delta, Southwest, United, Bahamasair, and British Airways all serve Nassau. Flight time to Miami is just 55 minutes, to New York 3 hours, to London 8 hours. Grand Bahama International (FPO) handles direct US flights. Family Islands airports on Abaco (MHH, reopened after Dorian), Eleuthera, and Exuma handle regional and some direct US service. Private jet traffic into Nassau and the Family Islands is among the busiest in the Caribbean.",
  travelExploration:
    "The Bahamas offers extraordinary island diversity. New Providence (Nassau) and Paradise Island anchor mainstream tourism, with Atlantis, Baha Mar, downtown Nassau's colonial architecture, and easy beach and watersport access. The Exumas — 365 cays across 120 miles of turquoise water — are a global icon, with swimming pigs at Big Major Cay, the Exuma Land and Sea Park, and exceptional boating. Eleuthera and Harbour Island offer pink sand beaches and pastel settlements. Abaco (still rebuilding from Dorian but vibrant again) has Hope Town's candy-striped lighthouse, Treasure Cay, and some of the Caribbean's best sailing. Andros, the largest island, fronts the Tongue of the Ocean and offers world-class bonefishing and diving on the Andros Barrier Reef. Bimini sits closest to Florida, a quick hop for fishing weekends. Cat Island, Long Island, San Salvador, and Inagua offer less-visited cultural and natural experiences. Weekend trips to Miami and Fort Lauderdale are extremely common given the short flight times.",
  considerations: [
    "Hurricane Exposure: The Atlantic hurricane season (June 1 - November 30) is a structural feature of Bahamian life. Hurricane Dorian (September 2019), a catastrophic Category 5, devastated Abaco and Grand Bahama — large areas are still rebuilding. Property, insurance, and preparedness plans must take hurricane risk seriously. Nassau is less exposed than the northern Family Islands but not immune.",
    "No Income Tax, But High Cost of Living: The absence of personal income tax is real and valuable, but the import-dependent cost structure makes groceries, vehicles, electronics, and utilities significantly more expensive than mainland US. The fiscal benefit is most significant for high earners and retirees with substantial foreign income, not those on local wages.",
    "Economic Permanent Residency Thresholds: The standard BSD 750,000 real estate threshold (accelerated at BSD 1,500,000+) is substantial but provides one of the most stable PR programs in the Caribbean. Property selection — hurricane-resistant construction, flood risk, insurability — matters as much as price.",
    "Family Islands vs. New Providence: The realities of Family Islands living (limited medical care, freight-dependent supply, small communities, intermittent internet) differ fundamentally from Nassau. Visit any prospective Family Island multiple times in different seasons before committing.",
    "Banking and Financial Services Scrutiny: The Bahamas has tightened AML and KYC practices significantly under FATF/OECD reviews. Expect thorough documentation and extended onboarding for local accounts, trust structures, and offshore banking. Using a Bahamian attorney experienced with the specific institution is standard."
  ],
  mistakes: [
    "Underestimating hurricane exposure in property decisions. Buying in low-elevation or storm-surge-exposed areas without verifying insurance coverage and premiums can lead to catastrophic losses. Review hurricane history for any specific island and neighborhood before purchase.",
    "Assuming Nassau-level services across all Family Islands. Exuma and Eleuthera have reasonable infrastructure; smaller cayes can feel frontier-like. Match expectations to the specific island.",
    "Skipping medical evacuation insurance. For Family Islands residents, a single serious health event can require air ambulance transport to Nassau or Florida at BSD 30,000-75,000 out of pocket without coverage.",
    "Not budgeting for import duties and high utilities. A BSD 10 grocery staple in the US can cost BSD 18-20 in Nassau, and electricity bills for AC homes routinely exceed BSD 500-1,000/month.",
    "Treating work-permit restrictions casually. Bahamianization policies are real, permits are employer-sponsored, and enforcement is active. Working without authorization risks deportation and entry bans. If your income is foreign (remote work, pension, investments), the Homeowner or Investor residency categories are the cleaner path."
  ],
  emergency: [
    {
      number: '911',
      service: 'General Emergency (National)',
      description: 'Unified national emergency number for police, fire, and ambulance services in most of The Bahamas. Operators speak English.'
    },
    {
      number: '919',
      service: 'Emergency Alternative',
      description: 'Alternative emergency number used in some areas and widely known in The Bahamas. Works interchangeably with 911 for police, fire, and medical emergencies.'
    },
    {
      number: '322-2221',
      service: 'Royal Bahamas Police Force (Non-Emergency)',
      description: 'Non-emergency police line for reporting past incidents, general inquiries, and administrative matters. Staffed during business hours; emergencies should use 911 or 919.'
    }
  ],
  sources: [
    {
      name: 'Department of Immigration',
      category: 'Immigration & Residency',
      description: 'Official immigration authority handling visa extensions, work permits, Annual Residence Permits, and Economic Permanent Residency applications.',
      link: 'https://www.immigration.gov.bs/'
    },
    {
      name: 'Bahamas Investment Authority (BIA)',
      category: 'Investment & Residency',
      description: 'Coordinates investment-based residency applications, business registration for foreign investors, and liaison with other government agencies for permanent residence pathways.',
      link: 'https://www.bahamas.gov.bs/'
    },
    {
      name: 'Department of Inland Revenue',
      category: 'Tax & Finance',
      description: 'Administers VAT, real property tax, stamp tax, business license fees, and other Bahamian tax obligations for individuals and businesses.',
      link: 'https://inlandrevenue.finance.gov.bs/'
    },
    {
      name: 'Bahamas Tourism (Ministry of Tourism)',
      category: 'Tourism & Travel',
      description: 'Official tourism portal with destination guides, event information, and practical travel resources across New Providence, Grand Bahama, and the Family Islands.',
      link: 'https://www.bahamas.com/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to The Bahamas, consult the Bahamian Ministry of Foreign Affairs or a Bahamian embassy or high commission abroad.',
    directoryLink: 'https://www.embassypages.com/bahamas',
    mfaLink: 'https://www.bahamas.gov.bs/'
  },
  serviceDirectory: {
    title: "Service Directory - The Bahamas",
    description: "Examples of commonly used service providers people often interact with when relocating to The Bahamas.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with Economic Permanent Residency, Homeowner permits, work permits, and immigration compliance in The Bahamas.",
        providers: [
          { name: "Higgs & Johnson", link: "https://www.higgsjohnson.com" },
          { name: "Lennox Paton", link: "https://lennoxpaton.com" },
          { name: "Graham Thompson", link: "https://www.grahamthompson.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies handling residential rentals and luxury property purchases across New Providence, Grand Bahama, and the Family Islands.",
        providers: [
          { name: "HG Christie", link: "https://www.hgchristie.com" },
          { name: "Damianos Sotheby's International Realty", link: "https://www.sirbahamas.com" },
          { name: "Bahamas Realty", link: "https://www.bahamasrealty.bs" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax and accounting experts familiar with Bahamian tax residency, VAT compliance, trust structures, and international planning.",
        providers: [
          { name: "PwC Bahamas", link: "https://www.pwc.com/bs" },
          { name: "Deloitte Bahamas", link: "https://www2.deloitte.com/bs" },
          { name: "KPMG Bahamas", link: "https://kpmg.com/bs" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International relocation services including sea freight, air freight, customs clearance, and Caribbean-specific logistics.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Island Movers Bahamas", link: "https://www.islandmovers.com" },
          { name: "Tropical Shipping", link: "https://www.tropical.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "The Bahamas is English-speaking; services focus on community integration and orientation for new residents.",
        providers: [
          { name: "InterNations Bahamas", link: "https://www.internations.org/nassau-expats" },
          { name: "Expat.com Bahamas", link: "https://www.expat.com/en/guide/caribbean/bahamas/" },
          { name: "Bahamas Welcome Centre", link: "https://www.bahamas.com/" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public and private healthcare facilities commonly used by residents and long-stay visitors.",
        providers: [
          { name: "Doctors Hospital", link: "https://www.doctorshospbahamas.com" },
          { name: "Princess Margaret Hospital", link: "https://www.publichospitalsauthority.org" },
          { name: "Lyford Cay Hospital", link: "https://www.lyfordcayhospital.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Employment platforms and recruitment resources for roles in hospitality, financial services, and related sectors.",
        providers: [
          { name: "CaribbeanJobs.com", link: "https://www.caribbeanjobs.com" },
          { name: "Caldwell Partners Bahamas", link: "https://www.caldwell.com" },
          { name: "LinkedIn (Bahamas)", link: "https://www.linkedin.com" }
        ]
      }
    ]
  }
};
