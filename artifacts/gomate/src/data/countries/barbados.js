export const barbados = {
  id: 'barbados',
  slug: 'barbados',
  name: 'Barbados',
  region: 'Americas',
  complexity: 'Low',
  languages: ['English'],
  shortDescription:
    'A polished Caribbean island with strong institutions, high import costs, and a lifestyle built around beaches, service, and "island time".',
  heroImage:
    'https://images.unsplash.com/photo-1626023523650-f9fe5e85cacc?',
  flagAlt: 'Flag of Barbados',
  atAGlance:
    "Barbados is a small, English-speaking Caribbean island nation (just 430 square kilometers, roughly 34 km long and 23 km wide) with a stable democracy, strong institutions, and a visible British administrative legacy that sets it apart from many Caribbean neighbors. The island became a republic in November 2021, replacing Queen Elizabeth II with a ceremonial president, but the Westminster parliamentary system, common law legal framework, and institutional formality remain intact. Daily life centers on coastal living, tight-knit communities, and a service-driven economy where tourism, international financial services, and the offshore business sector are the primary employers. Bajans (the local demonym) are proud, polite, and socially warm — greeting people properly (even strangers in passing) is expected and appreciated. The pace of life is genuinely slower: 'island time' is not a stereotype but an operating principle, and rushing or displaying impatience tends to backfire socially. Modern infrastructure coexists with imported-goods pricing that surprises many newcomers — because Barbados imports the vast majority of its consumer goods, groceries, electronics, and building materials are significantly more expensive than in mainland countries. Electricity costs are high due to fuel-based generation, and water supply, while generally reliable, requires conservation awareness. The Welcome Stamp visa, launched in 2020, positioned Barbados as a pioneer in the digital nomad visa space and attracted a wave of remote workers, particularly from the US and UK. For long-term residents, the island offers genuine quality of life — beautiful beaches, a strong sense of community, low crime by regional standards, and a cultural calendar anchored by the world-famous Crop Over festival — but financial planning around import costs, utilities, and healthcare is essential.",

  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 6 months (most nationalities)',
    costOfLiving: 'High (import-dependent island economy)',
    primaryLanguages: 'English (Official), Bajan Creole (widely spoken)',
  },

  visas: [
    {
      name: '12-Month Barbados Welcome Stamp',
      targetAudience: 'Remote Workers, Digital Nomads',
      useCase: 'A dedicated one-year visa designed for individuals working remotely for employers or clients outside of Barbados. You apply online, pay a fixed fee (USD 2,000 for individuals, USD 3,000 for families), and receive permission to live and work remotely from the island. No Barbadian income tax applies to foreign-sourced income during the stamp period. Renewable for an additional year.',
      duration: '12 months (renewable)',
      link: 'https://barbadoswelcomestamp.bb/applynow/'
    },
    {
      name: 'Visitor Entry (Immigration Permission)',
      targetAudience: 'Tourists, Short-term Visitors',
      useCase: 'Most visitors from the US, UK, EU, Canada, and many other countries do not need a visa for short stays. Immigration officers at Grantley Adams International Airport grant entry permission (typically up to 6 months) based on your nationality, proof of accommodation, return ticket, and sufficient funds. Duration is stamped in your passport at the officer\'s discretion.',
      duration: 'Up to 6 months (case-by-case at entry)',
      link: 'https://www.visitbarbados.org/plan-your-trip/visa-and-entry-requirements'
    },
    {
      name: 'Extension of Stay',
      targetAudience: 'Visitors Seeking to Remain Longer',
      useCase: 'If you wish to stay beyond your initial immigration permission, you can apply for an extension at the Immigration Department in Bridgetown. Bring your passport, proof of onward travel, passport-size photos, and supporting documents. Extensions are discretionary and require a fee.',
      duration: 'Varies (discretionary)',
      link: 'https://immigration.gov.bb/pages/Extension.aspx'
    },
    {
      name: 'Special Entry Permit',
      targetAudience: 'High-Net-Worth Individuals, Retirees, Long-stay Residents',
      useCase: 'A residency-style pathway for individuals seeking to live in Barbados long-term outside of the Welcome Stamp or work permit categories. Application-based, requiring background checks, financial documentation, and sometimes an in-person interview. Suitable for retirees, investors, and those with independent means.',
      duration: 'Varies (application-based)',
      link: 'https://immigration.gov.bb/pages/SpecialEntryPermit.aspx'
    },
    {
      name: 'Work Permit',
      targetAudience: 'Locally Employed Workers',
      useCase: 'Required for anyone employed by a Barbadian employer. The employer typically initiates the application through the Immigration Department. Requires proof that the position could not be filled by a Barbadian national. Processing times vary.',
      duration: 'Up to 3 years (renewable)',
      link: 'https://immigration.gov.bb/pages/WorkPermit.aspx'
    }
  ],

  requirements: [
    {
      title: 'Online Immigration & Customs Form (ED Card)',
      explanation: 'A digital entry/departure form that must be completed before arriving in or departing from Barbados. The form collects passport details, flight information, accommodation address, and customs declarations. Submission generates a QR code receipt.',
      importance: 'This is checked at airline check-in and by immigration officers on arrival. Not having a completed form can delay your entry processing. Complete it 72 hours before departure, save the QR code on your phone (and print a backup), and ensure all details match your passport exactly.',
      link: 'https://www.travelform.gov.bb/'
    },
    {
      title: 'Return or Onward Ticket + Accommodation Proof',
      explanation: 'Immigration officers at Grantley Adams International Airport may request proof of a return or onward flight and a confirmed accommodation address (hotel booking, rental agreement, or host\'s address and contact details).',
      importance: 'Arriving without these can lead to extended questioning, reduced entry duration, or in rare cases denial of entry. Even if you are on a long-stay Welcome Stamp, have your accommodation details and flight itinerary accessible on your phone or in printed form.',
      link: 'https://immigration.gov.bb/pages/visitor.aspx'
    },
    {
      title: 'Work Permission (if employed locally)',
      explanation: 'Working for a Barbadian employer without the proper work permit is a serious immigration violation. The Welcome Stamp covers remote work for foreign employers, but local employment requires a separate work permit applied for by the employer.',
      importance: 'Barbados is culturally relaxed, but immigration compliance is not something to take casually. If your income source is local, ensure the proper permit is in place before starting work. Penalties include fines, deportation, and future entry bans.',
      link: 'https://immigration.gov.bb/pages/WorkPermit.aspx'
    },
    {
      title: 'National Insurance (NIS) Number (if employed locally)',
      explanation: 'The National Insurance Scheme (NIS) is Barbados\'s social insurance system, covering employment injury, sickness, maternity, and pension benefits. If you are employed locally, both you and your employer contribute to NIS.',
      importance: 'Your employer typically handles NIS registration, but verify that contributions are being made on your behalf. NIS registration is relevant for pension accrual, workplace injury coverage, and certain government benefits. Remote workers on the Welcome Stamp generally do not interact with NIS unless they take local employment.',
      link: 'https://www.nis.gov.bb/registration/'
    }
  ],

  jobsAndIncome: {
    overview:
      "Barbados has a small, service-heavy economy where opportunities cluster in tourism and hospitality (hotels, restaurants, luxury villa management), international financial services (offshore banking, insurance, trusts), and business process outsourcing (call centers, back-office operations). The local job market is limited in volume, and salaries for local roles rarely match the island's high cost of living. Many long-stay expats and Welcome Stamp holders keep their income external — remote work paid in USD, GBP, or EUR — because the purchasing power advantage is significant.",
    whereToLook: [
      "LinkedIn and company career pages for international and financial services roles",
      "CaribbeanJobs.com — the largest regional job board covering Barbados and the wider Caribbean",
      "Local networking and referrals — in a small island economy, personal introductions matter more than applications",
      "Hospitality industry direct approaches (Sandy Lane, Crane Resort, Fairmont Royal Pavilion hire seasonally)",
      "Remote work platforms (Upwork, Toptal, RemoteOK) for maintaining foreign income while based in Barbados"
    ],
    realityChecks: [
      "The local market is small — total employment is approximately 130,000. Job volume, particularly for specialized or senior roles, is limited.",
      "Local salaries are modest: average earnings are approximately BBD 3,000-5,000/month (USD 1,500-2,500), while renting a decent apartment in a good area costs BBD 3,000-6,000/month.",
      "Hiring is relationship-driven. Warm introductions through existing contacts carry far more weight than cold applications. Invest in building local connections early.",
      "If you can keep foreign income (USD/GBP/EUR), your lifestyle options expand dramatically. The Welcome Stamp was designed precisely for this scenario."
    ]
  },

  salaryReality: {
    overview:
      "Local salaries in Barbados can sustain a modest lifestyle, but the island's import-dependent economy means prices for many goods and services are higher than newcomers expect. The Barbados Dollar (BBD) is pegged to the US Dollar at 2:1 (BBD 2 = USD 1), providing currency stability but also meaning that imported goods priced in USD are effectively doubled in local currency terms.",
    realityChecks: [
      "Rent and utilities are the dominant cost factors. A one-bedroom apartment in a desirable area (Christ Church, St. James, St. Peter) ranges from BBD 3,000-6,000/month. Electricity alone can add BBD 300-800/month depending on AC usage.",
      "Imported goods — electronics, clothing, household items, specialty foods — carry significant markups (30-100% above US prices) due to shipping costs and import duties.",
      "Living well on foreign income is achievable. On local salary alone, most people optimize carefully — shopping at local markets, minimizing AC usage, and choosing housing inland rather than on the coast.",
      "The BBD/USD peg means your US dollar income directly translates at 2:1. GBP and EUR holders benefit from generally favorable exchange rates."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Electricity costs: Barbados Light & Power rates are high due to fuel-based generation. Monthly bills of BBD 400-1,000+ are common for apartments using air conditioning regularly.",
      "Deposit requirements: landlords typically request one to three months' rent as security deposit, plus the first and last month's rent upfront. Total move-in cash can exceed BBD 10,000-15,000.",
      "Vehicle costs: if you choose to drive, factor in insurance (BBD 2,000-4,000/year), fuel, maintenance, and the 45% import duty on vehicles. Many residents buy locally available used cars.",
      "Grocery reality: basic staples are available at local supermarkets (Massy Stores, Super Centre), but imported specialty items are expensive. Local produce at Saturday markets (Cheapside Market in Bridgetown) is fresher and cheaper."
    ]
  },

  housingSystem: {
    overview:
      "The Barbados rental market ranges from basic local apartments to luxury beachfront villas. Expat-focused housing is concentrated along the West Coast (St. James, St. Peter — known as the 'Platinum Coast'), the South Coast (Christ Church, Dover, Worthing), and increasingly inland areas that offer better value. Inventory is limited, and properties described as 'nice, well-located, and reasonably priced' disappear quickly.",
    expectations:
      "Expect deposits of one to three months' rent plus first and last month upfront. Furnished rentals are common in expat areas, which is convenient but means quality varies significantly — inspect personally for water pressure, mold and humidity damage (common in tropical climates), AC functionality, internet speed, and whether the property has a generator or inverter for power outages. Platforms include Terra Caribbean, Altman Real Estate, and local Facebook groups ('Barbados Rentals', 'Expats in Barbados'). Always get a written lease agreement, and confirm what is included in rent (some include gardening and pool maintenance; utilities are almost never included)."
  },

  healthcareReality:
    "Barbados has a dual public-private healthcare system. The Queen Elizabeth Hospital (QEH) in Bridgetown is the main public hospital, providing emergency care, surgery, and inpatient services to all residents. Public healthcare is subsidized for Barbadian nationals and NIS contributors; others pay out of pocket or use insurance. Private clinics offer faster appointments and more specialized care: FMH Emergency Medical Clinic (St. Michael) provides 24/7 emergency and GP services, Bayview Hospital (Christ Church) offers private inpatient and outpatient care, and Sandy Crest Medical Centre (St. James) serves the West Coast. For routine care, many expats register with a private GP (approximately BBD 150-300 per visit). Serious or specialized conditions — complex surgery, oncology, advanced diagnostics — may require medical evacuation to Trinidad, Miami, or another regional center with more advanced facilities. International health insurance with medical evacuation coverage is strongly recommended for all long-stay residents. Pharmacies (including Collins Pharmacy and Knights Pharmacy chains) stock common medications, but specialty prescriptions may need to be imported.",

  digitalLife: {
    overview:
      "Digital life in Barbados is straightforward — English-first services, modern banking options (with onboarding friction for newcomers), and generally reliable mobile connectivity via Digicel and Flow (the two main providers). The 'hard part' is not the technology but the proof-of-address and identity verification requirements for banking, utilities, and government services.",
    essentials: [
      "Local SIM card: Digicel or Flow — available at the airport and in Bridgetown. Data plans are affordable (BBD 50-100/month for generous data). eSIM options are increasingly available.",
      "Proof of address: needed for banking, utility connections, and many administrative steps. A lease agreement or utility bill in your name is the standard proof.",
      "Surge protection and UPS (Uninterruptible Power Supply): power fluctuations and occasional outages occur. Protect your electronics with surge protectors, and consider a small UPS for your router/computer if you work remotely.",
      "Digital arrival form (travelform.gov.bb): keep the QR code receipt saved on your phone for departure. You will need to complete a departure form as well."
    ],
    whatSurprisesNewcomers: [
      "Banking setup can take longer than expected. First Citizens Bank, Republic Bank, and CIBC FirstCaribbean require extensive documentation (passport, proof of address, reference letter from your home bank, proof of income) and may take one to three weeks to process.",
      "Some services feel modern (mobile banking, tap-to-pay at major stores) while others feel 'small island practical' (hand-delivered utility bills, in-person government office visits for simple changes).",
      "Internet speeds have improved significantly (Flow and Digicel offer fiber in many areas), but reliability can vary by location. Test the connection at any prospective rental before committing.",
      "A lot of daily convenience is relationship-based. Having a reliable taxi driver, a good hardware store contact, and a trusted handyman makes island life significantly smoother. Ask locals for recommendations."
    ]
  },

  culture: {
    text: "Bajan culture is warm, proud, polite, and quietly formal in everyday interactions. Despite the relaxed island atmosphere, there is an underlying structure to social exchange: greeting people properly ('Good morning/afternoon/evening') before launching into any request or conversation is expected and appreciated. 'Island time' is real — urgency rarely trumps courtesy, and pushing aggressively for speed tends to backfire socially. Cricket is a national obsession (Barbados has produced Sir Garfield Sobers, Sir Frank Worrell, and other cricket legends), rum culture runs deep (Mount Gay is the world's oldest commercial rum distillery, founded in 1703), and Crop Over is the island's biggest cultural event — a weeks-long festival culminating in Kadooment Day (a carnival-style parade in August). Music, food, and community gatherings define social life. Bajans are proud of their island's reputation for political stability, high literacy rates (99%), and cultural distinctiveness within the Caribbean.",
    highlights: [
      "Identity: locals are 'Bajan' (BAY-jun). Using this term respectfully and correctly signals cultural awareness and earns goodwill.",
      "Greeting protocol: always say 'Good morning/afternoon/evening' before asking a question, making a request, or entering a conversation. Skipping the greeting is considered rude.",
      "Pace: things operate on 'island time.' Pushy or impatient behavior usually backfires — polite persistence works far better than urgency.",
      "Driving: left-hand traffic (British legacy). Roads are narrow, roundabouts are common, and local driving style is assertive. A Barbadian driver's license or international driving permit is required.",
      "Crop Over: the annual summer festival (June-August, culminating in Kadooment Day on the first Monday in August) is the cultural highlight of the year. Calypso, soca music, costumes, and community celebrations."
    ]
  },

  transportationMobility:
    "Barbados is compact (21 km at its widest), so most trips are short by mainland standards. Public transport consists of government-operated Transport Board buses (blue with a yellow stripe, BBD 3.50 per ride), privately owned minibuses (yellow with a blue stripe, same fare), and route taxis (white with a 'ZR' license plate, same fare). Routes cover most of the island, and the main terminal is in Bridgetown. Service is frequent on major routes but timing is unpredictable — buses leave when full rather than on a fixed schedule. Many long-term residents prefer a car for flexibility, especially for the West Coast and rural parishes where bus routes are less frequent. Car rental is widely available (BBD 150-300/day), and purchasing a used car locally costs BBD 15,000-40,000 plus 45% import duty if new. Ride-hailing apps are not dominant; instead, local taxi drivers (identifiable by 'Z' plates) operate on negotiated fares. Agree on the fare before starting the journey.",

  internationalConnectivity:
    "Grantley Adams International Airport (BGI) in Christ Church is the island's sole commercial airport, serving as a significant Caribbean hub. Direct flights connect to Miami, New York (JFK), London Gatwick, Toronto, and multiple Caribbean islands. American Airlines, JetBlue, British Airways, Caribbean Airlines, Virgin Atlantic, and several charter operators serve the airport. Seasonal routes expand significantly from November through April (peak tourist season). Flight times: Miami approximately 3.5 hours, New York approximately 4.5 hours, London approximately 8.5 hours, Toronto approximately 5.5 hours. Inter-island travel to neighboring St. Vincent, St. Lucia, Trinidad, and other Eastern Caribbean destinations is possible via LIAT, Caribbean Airlines, and charter services, though schedules are limited and can change with little notice.",

  travelExploration:
    "Exploration on Barbados is varied despite the island's small size. The West Coast offers calm, crystal-clear waters and luxury beach experiences (Paynes Bay, Mullins Beach, Sandy Lane Beach). The South Coast has livelier beaches with surf and water sports (Accra Beach, Miami Beach, Oistins for Friday night fish fry). The East Coast (Bathsheba, Cattlewash) features dramatic Atlantic surf, rugged rock formations, and the famous 'Soup Bowl' surf break. Inland, Harrison's Cave (a crystallized limestone cavern) and Welchman Hall Gully (a tropical forest) offer natural attractions. The Barbados Wildlife Reserve in St. Peter houses green monkeys and other fauna. Historic sites include St. Nicholas Abbey (a Jacobean plantation house with a rum distillery), George Washington House in Bridgetown, and the UNESCO World Heritage-listed Historic Bridgetown and its Garrison. Rum distillery tours (Mount Gay, Foursquare, St. Nicholas Abbey) are essential cultural experiences. Day trips to neighboring islands (St. Lucia, Dominica, Grenada) are possible but require planning around limited flight schedules.",

  considerations: [
    "Import-Driven Cost Structure: Barbados imports the vast majority of its consumer goods. Groceries, electronics, appliances, clothing, and building materials carry markups of 30-100% above US or UK prices. A box of cereal can cost BBD 20-25 (USD 10-12.50). Budget for this reality before arrival, and lean into local produce (breadfruit, flying fish, sweet potatoes) to manage food costs.",
    "Electricity Costs: Barbados Light & Power (BL&P) rates are among the highest in the Caribbean, driven by fuel-based generation. Air conditioning is the primary cost driver — running AC in a two-bedroom apartment can push monthly bills above BBD 600-1,000 (USD 300-500). Many residents use fans, cross-ventilation, and ceiling fans to manage costs, reserving AC for bedrooms at night.",
    "Tropical Climate Management: Heat and humidity are constant (average 27-30 degrees Celsius year-round). Mold prevention in housing is a real concern — dehumidifiers, proper ventilation, and regular cleaning of AC filters and drains are essential. The rainy season (June-November) overlaps with hurricane season; while direct hits are rare, tropical storms and heavy rain are not.",
    "Hurricane Season: The Atlantic hurricane season runs from June 1 to November 30. Barbados is in the southern Caribbean, making direct hurricane hits less frequent than for islands further north, but tropical storms, heavy rain, flooding, and disruptions to flights and shipping do occur. Have an emergency kit (water, flashlight, battery radio, non-perishable food) and understand your rental property's hurricane preparedness.",
    "Small-Market Reality: As a small island of approximately 290,000 people, the range of goods, services, and entertainment options is inherently limited compared to mainland cities. Specialist medical care, specific product brands, niche services, and cultural events (concerts, theater, exhibitions) are less available. Adapt expectations to island scale."
  ],

  mistakes: [
    "Assuming 'Caribbean equals cheap.' Barbados is one of the more expensive Caribbean islands due to import dependence, high utility costs, and a tourism-oriented economy. Many newcomers are shocked by grocery prices, restaurant bills, and electricity costs. Research actual living costs before committing.",
    "Not verifying what is included in rent. Some rentals include gardening, pool maintenance, and basic internet; others include nothing beyond the bare walls. Utilities (electricity, water, internet) can add BBD 500-1,200/month to your costs. Always confirm inclusions in writing before signing.",
    "Ignoring humidity and mold risk when choosing housing. Tropical humidity accelerates mold growth on walls, clothing, leather goods, and electronics. Inspect any prospective rental for signs of mold (dark spots on ceilings, musty smell in closets) and confirm that the property has adequate ventilation, dehumidifiers, and functioning AC drainage.",
    "Being overly aggressive with timelines. The Bajan approach to time and process is more fluid than in Northern Europe or North America. Administrative processes, deliveries, repairs, and even restaurant service operate at their own pace. Polite persistence ('Could you help me understand the timeline?') works far better than demands or visible frustration.",
    "Arriving without key documents. Bring multiple copies of your passport, visa/Welcome Stamp approval, proof of accommodation, return ticket, proof of income/employment, bank statements, and passport-size photos. Administrative processes on the island frequently require physical copies, and sourcing documents after arrival is slower than having them ready."
  ],

  emergency: [
    {
      number: '211',
      service: 'Police (Royal Barbados Police Force)',
      description: 'Emergency police assistance. The main station is in Bridgetown. District stations are located across the island.'
    },
    {
      number: '511',
      service: 'Ambulance',
      description: 'Emergency medical response and ambulance dispatch. Response times vary by location — in remote areas, having your own transport to the QEH emergency department may be faster.'
    },
    {
      number: '311',
      service: 'Fire and Rescue (Barbados Fire Service)',
      description: 'Fire department and rescue services, including road traffic accident response.'
    }
  ],

  sources: [
    {
      name: 'Barbados Immigration Department',
      category: 'Immigration',
      description: 'The official authority for entry requirements, visa extensions, work permits, Special Entry Permits, and immigration compliance.',
      link: 'https://immigration.gov.bb/'
    },
    {
      name: 'Barbados Welcome Stamp (Official)',
      category: 'Remote Work Visa',
      description: 'The official application portal and information site for the 12-Month Barbados Welcome Stamp digital nomad visa.',
      link: 'https://barbadoswelcomestamp.bb/'
    },
    {
      name: 'Visit Barbados (Barbados Tourism Marketing Inc.)',
      category: 'Tourism & Travel',
      description: 'Official tourism website with entry requirements, activity guides, accommodation listings, and cultural event information.',
      link: 'https://www.visitbarbados.org/'
    },
    {
      name: 'Government of Barbados (GOV.BB)',
      category: 'Government Services',
      description: 'Central portal for Barbados government services, including NIS registration, business registration, and public notices.',
      link: 'https://www.gov.bb/'
    }
  ],

  embassies: {
    description: 'For consular assistance, visa guidance, and official diplomatic contacts related to Barbados, consult the Barbados Ministry of Foreign Affairs and Foreign Trade or a Barbadian embassy or high commission abroad.',
    directoryLink: 'https://www.embassypages.com/barbados',
    mfaLink: 'https://www.foreign.gov.bb/'
  },
  serviceDirectory: {
    title: "Service Directory - Barbados",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Barbados.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for Welcome Stamp applications, work permits, Special Entry Permits, and immigration compliance.",
        providers: [
          { name: "Clarke Gittens Farmer Attorneys-at-Law", link: "https://cgflegal.com" },
          { name: "Chancery Chambers", link: "https://chancerybarbados.com" },
          { name: "Lex Caribbean (Barbados)", link: "https://www.lexcaribbean.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies assisting with long-term rentals, property purchases, and relocation housing across the island.",
        providers: [
          { name: "Terra Caribbean", link: "https://terracaribbean.com" },
          { name: "Altman Real Estate", link: "https://www.altmanrealestate.com" },
          { name: "Barbados Sotheby's International Realty", link: "https://www.barbadossothebysrealty.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax and accounting experts familiar with Barbadian tax residency, international income structuring, and corporate compliance.",
        providers: [
          { name: "PwC Barbados", link: "https://www.pwc.com/bb" },
          { name: "EY Caribbean (Barbados)", link: "https://www.ey.com/en_gl/locations/caribbean" },
          { name: "KPMG Barbados", link: "https://kpmg.com/bb" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International relocation services including sea freight, air freight, customs clearance, and Caribbean-specific logistics.",
        providers: [
          { name: "Crown Relocations Caribbean", link: "https://www.crownrelo.com" },
          { name: "Caribbean Freight Services", link: "https://www.caribbeanfreight.com" },
          { name: "AMJ Campbell International", link: "https://www.amjcampbell.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Barbados is English-speaking, so language integration services focus on community and cultural orientation.",
        providers: [
          { name: "Barbados Welcome Stamp Community", link: "https://barbadoswelcomestamp.bb/" },
          { name: "InterNations Barbados", link: "https://www.internations.org/barbados-expats" },
          { name: "Expat.com Barbados", link: "https://www.expat.com/en/guide/caribbean/barbados/" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public and private healthcare facilities commonly used by residents and long-stay visitors.",
        providers: [
          { name: "Queen Elizabeth Hospital (QEH)", link: "https://www.qehconnect.com" },
          { name: "FMH Emergency Medical Clinic", link: "https://fmhbarbados.com" },
          { name: "Bayview Hospital", link: "https://bayviewhospital.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Employment platforms and programs for local and remote work arrangements in Barbados.",
        providers: [
          { name: "CaribbeanJobs.com", link: "https://www.caribbeanjobs.com" },
          { name: "Barbados Employment & Career Counselling Service", link: "https://labour.gov.bb" },
          { name: "LinkedIn (Barbados)", link: "https://www.linkedin.com" }
        ]
      }
    ]
  }
};
