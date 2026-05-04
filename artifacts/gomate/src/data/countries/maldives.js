export const maldives = {
  id: 'maldives',
  slug: 'maldives',
  name: 'Maldives',
  region: 'Asia',
  complexity: 'Medium',
  languages: ['Dhivehi', 'English'],
  shortDescription: 'A tourism-driven archipelago nation where life revolves around the sea, the resort economy, and strict Islamic law.',
  heroImage: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd',
  flagAlt: 'Flag of the Maldives',
  atAGlance: "The Maldives is a chain of roughly 1,200 low-lying coral islands grouped into 26 atolls, stretching 871 kilometers across the Indian Ocean southwest of Sri Lanka. It is the world's lowest-lying country, averaging 1.5 meters above sea level, making it the most climate-vulnerable nation on earth. A population of roughly 540,000 is spread across about 200 inhabited islands, with a third of all Maldivians in the capital, Malé — one of the world's most densely populated cities, packed onto a single square-mile island. Remaining islands divide between local communities and over 170 private resort islands anchoring tourism. The Maldives is a constitutional republic and a strict Sunni Muslim state: the constitution requires all citizens to be Muslim, Sharia principles inform the legal framework, and non-Islamic religious practice is not permitted for citizens. Alcohol, pork, and non-Islamic religious artifacts are allowed only on resort islands and designated diplomatic contexts — prohibited on local islands including Malé. Daily life for foreign workers varies enormously by posting. Resort staff live in dedicated quarters with separate crew villages and different social rules from guest-facing areas, while Malé-based workers inhabit a dense urban environment far from the turquoise-lagoon imagery. The Maldivian rufiyaa (MVR, pegged at roughly 15.42 to the USD) is the local currency, but US dollars circulate widely in tourism. Personal income tax (MIRA) was introduced recently on a progressive scale above a generous threshold. Most foreign workers are in the resort and tourism sector, with strong South Asian and Southeast Asian representation, alongside smaller communities in finance, diving, marine biology, and diplomatic roles.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: '30 days (Visa on Arrival)',
    costOfLiving: 'Medium-High',
    primaryLanguages: 'Dhivehi (Official), English (Widely used in tourism and business)',
  },
  visas: [
    {
      name: 'Free Visa on Arrival (All Nationalities)',
      targetAudience: 'All visitors',
      useCase: "The Maldives operates one of the world's most liberal entry policies: every visitor of every nationality receives a free 30-day visa on arrival at Velana International Airport (VIA), subject to a valid passport, proof of onward travel, confirmed accommodation (hotel or resort booking), and sufficient funds. There are no nationality exceptions. This visa does not permit any form of employment.",
      duration: '30 days, extendable up to 90 days total',
      link: 'https://www.immigration.gov.mv/'
    },
    {
      name: 'Resort Worker Permit (Quota Worker)',
      targetAudience: 'Resort and hospitality staff',
      useCase: "The dominant work authorization route, reflecting the resort-economy reality. Resort employers apply for an Employment Approval quota through the Ministry of Economic Development (MOFA-coordinated), then sponsor the work visa through Maldives Immigration. The employer manages the entire process including pre-departure medicals, island posting logistics, and accommodation on the resort island. The visa is tied to the sponsoring employer and the specific resort island.",
      duration: '1 year, renewable',
      link: 'https://www.immigration.gov.mv/'
    },
    {
      name: 'Maldives Remote Workers Permit',
      targetAudience: 'Digital nomads, remote employees',
      useCase: "A newer permit pathway introduced to attract remote workers earning income from foreign employers, building on the Premium Visa Programme launched in 2021. Allows extended stays in designated tourism establishments (resorts, registered guest houses on local islands) while working remotely. Does not grant access to the local labor market and requires proof of foreign income and accommodation.",
      duration: 'Up to 1 year in tourism establishments',
      link: 'https://visitmaldives.com/'
    },
    {
      name: 'Investor / Long-term Resident Visa',
      targetAudience: 'Foreign direct investors',
      useCase: "Established under the Foreign Direct Investment framework administered by the Ministry of Economic Development. Issued to qualifying foreign investors in tourism developments, infrastructure, and approved sectors, with a long-term residency component for principal investors and senior representatives. Requires a registered Maldivian entity, evidence of investment thresholds, and government approval of the project.",
      duration: 'Multi-year, tied to investment',
      link: 'https://www.trade.gov.mv/'
    }
  ],
  requirements: [
    {
      title: 'Work Permit Card',
      explanation: "A physical card issued by Maldives Immigration to foreign workers with valid employment approval. It contains your personal details, employer information, and permit validity, and serves as legal proof of your right to work.",
      importance: "Without a valid work permit you cannot legally work, open a bank account in your own name, obtain a local SIM contract, or access most non-emergency services. Renewals must be completed before expiry — expired permits trigger overstay penalties and can complicate re-entry. Employers coordinate the process; follow up proactively.",
      link: 'https://www.immigration.gov.mv/'
    },
    {
      title: 'Medical Examination',
      explanation: "A mandatory health screening for all work visa applicants, conducted at approved medical centers in the Maldives or accredited facilities in source countries. It typically includes blood tests (HIV, hepatitis), chest X-ray for tuberculosis, and a general physical.",
      importance: "Your work visa cannot be finalized without passing the medical. Testing requirements and timing depend on your nationality and employer. Resort employers often coordinate a pre-departure medical in the home country, followed by confirmation testing in the Maldives.",
      link: 'https://www.health.gov.mv/'
    },
    {
      title: 'Bank Account',
      explanation: "Opening a Maldivian bank account requires your passport, work permit, employer letter, and proof of local address. Major banks include Bank of Maldives (BML, the largest, state-linked), Maldives Islamic Bank, and HSBC Maldives. Both MVR and USD accounts are commonly offered.",
      importance: "Formal salaries are typically paid by bank transfer. The dual-currency context (MVR for local spending, USD for tourism-sector transactions) means many workers maintain both account types. International transfers and remittances are heavily used by the predominantly South Asian expatriate workforce.",
      link: 'https://www.mma.gov.mv/'
    },
    {
      title: 'Dhiraagu or Ooredoo Mobile SIM',
      explanation: "A local SIM from one of the two national telecom providers, Dhiraagu or Ooredoo Maldives. Purchasing a SIM in your own name requires your work permit and passport; prepaid tourist SIMs at the airport do not transition cleanly to resident use.",
      importance: "A local mobile number is required for government services, banking verification, payment apps, and day-to-day work communication. Coverage varies by atoll — Malé and the major tourist atolls have strong 4G, while remote atolls may have limited service. Home-SIM roaming is expensive and impractical for long-term stays.",
      link: 'https://www.dhiraagu.com.mv/'
    }
  ],
  jobsAndIncome: {
    overview:
      "The Maldives is effectively a one-industry economy, with tourism accounting for roughly a third of GDP and the vast majority of foreign exchange earnings. Foreign workers cluster in resort and hotel operations (hospitality, chefs, dive instructors, spa therapists, marine biologists, watersports specialists), construction, fisheries processing, and specialized roles in finance, telecoms, and healthcare. Malé hosts the small professional services market; the atolls host the tourism workforce.",
    whereToLook: [
      "LinkedIn — the primary platform for professional and management-level resort roles",
      "Caterer Global and Hosco — hospitality-specific job boards with strong Maldives coverage",
      "Resort group career pages: Soneva, Six Senses, Four Seasons, Anantara, Jumeirah, LUX*, and Kuoni-linked operators",
      "Job Maldives (jobmaldives.com) — local job portal covering professional and hospitality roles",
      "Specialized boards for diving, marine biology, and watersports: PADI ProsSpace, Dive Industry Jobs"
    ],
    realityChecks: [
      "Geographic constraints are unlike any other country. A resort job means living on an island with perhaps 100-500 colleagues, limited off-island access, and strict separation between guest and staff areas. This is a dramatic lifestyle adjustment that suits some people and frustrates others.",
      "Work permits are tied to your employer. Changing jobs requires cancellation of the current permit and re-sponsorship by the new employer. For resort workers, this process often involves leaving and re-entering the country.",
      "Contracts often include rotation patterns — common structures are 3 months on, 1 month off, or 6 months on, 1 month off for expatriate staff. These rotations replace traditional weekends and annual leave, and the predictability matters for family life.",
      "Salaries, particularly in hospitality, are often quoted as base pay plus service charge (a percentage of resort revenue distributed to staff). Service charge can significantly boost total earnings during high season but is variable and not guaranteed."
    ]
  },
  salaryReality: {
    overview:
      "Salaries vary widely by sector. Senior resort management, specialized dive and marine roles, and professional roles in Malé (finance, legal, development) can be competitive with regional peers. Entry-level hospitality is modest by international standards but often includes accommodation, meals, and flights, making the total package more competitive than headline numbers suggest. Personal income tax (administered by MIRA) was introduced in 2020 on a progressive scale above a generous threshold (currently MVR 60,000/month basic exemption), so most lower and mid-level earners pay none.",
    realityChecks: [
      "Resort staff typically receive full accommodation, all meals, uniforms, and sometimes flights and transport between island and hub airport. When all of these are factored in, take-home income is substantially higher than headline salary.",
      "Service charge (often 10% of resort revenue, distributed to staff) can be a significant component of total compensation, especially in high-end resorts during peak season (November-April). Off-season earnings are lower.",
      "Cost of living on resort islands is effectively zero for essential expenses — accommodation, food, and utilities are provided. Spending happens primarily on personal purchases, connectivity, and off-island excursions during leave.",
      "For those based in Malé, housing is expensive and cramped by regional standards. A modest two-bedroom apartment in the Malé area runs MVR 20,000-35,000 per month, and supply is tight."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The value of accommodation, meals, and transport provided by resort employers — often worth several thousand dollars per month when priced at market",
      "Service charge, which can add 20-40% to a hospitality salary in high season but is unreliable in shoulder and low seasons",
      "Annual flight home — included in many contracts for international staff but varies by employer",
      "The cost of being 'on-island' with limited ways to spend: this produces higher savings rates than most expatriate destinations, offsetting modest headline salaries"
    ]
  },
  housingSystem: {
    overview:
      "Housing in the Maldives is bifurcated. Resort-based workers live in staff accommodation on the resort island — shared rooms for entry-level staff, studios or one-bedroom quarters for supervisors and managers, and more generous accommodation (sometimes off-island) for senior leadership. Quality varies by employer: leading groups (Soneva, Six Senses, Four Seasons) invest heavily in staff welfare; smaller local resorts can be more basic. Malé-based workers rent in the capital, where housing is expensive, densely packed, and often lacks natural light or outdoor space. Popular expatriate areas in Malé include Maafannu and Henveiru. Hulhumalé, the reclaimed island connected by bridge, is the main site of modern residential expansion and offers newer, larger apartments at more reasonable prices.",
    expectations:
      "For resort staff, there is no housing market — accommodation is part of the package. Inspect staff quarters during interviews where possible, and ask about shared versus private rooms, meals, and off-island access. For Malé rentals, start with local agents and Facebook groups; formal online portals are less developed than in regional capitals. Contracts are typically 6-12 months with one to three months' deposit, and agency fees are common. Utilities are metered separately and can be significant given constant AC use."
  },
  healthcareReality:
    "Healthcare in the Maldives is centered in Malé, with Indira Gandhi Memorial Hospital (IGMH) as the main public facility and ADK Hospital and Tree Top Hospital as leading private options. Regional hospitals on larger islands provide basic secondary care, and health centers on inhabited islands offer primary care. Quality of care for routine conditions is generally adequate, but complex cases are regularly evacuated to India (Kochi, Thiruvananthapuram), Sri Lanka, or Singapore. Resort islands typically have an on-island doctor or nurse and a medical clinic capable of handling common issues, stabilization, and diving-related incidents; serious cases are transferred by seaplane or speedboat to Malé or evacuated internationally. Employer-provided health insurance is standard for expatriate roles and should include international medical evacuation coverage — this is a critical benefit given the geography. Pharmacies are widely available in Malé but more limited on outer islands, so travelers with ongoing prescriptions should bring reserves and original prescriptions. Malaria is not a concern in the Maldives, but dengue fever occurs periodically.",
  digitalLife: {
    overview:
      "The Maldives has surprisingly strong digital infrastructure for a small archipelago, driven by tourism demand. The government pursues e-government initiatives under its Digital Maldives strategy, and most banks and service providers offer capable online platforms. Internet speeds are excellent in Malé and at major resort islands, though remote atolls can see variable service.",
    essentials: [
      "eFaas — the Maldivian national digital identity system, used for authenticating access to government services",
      "Dhiraagu or Ooredoo mobile apps for service management, billing, and top-ups",
      "Bank of Maldives MIB or Ooredoo M-Faisaa / FavaraPay for digital payments and transfers",
      "Dhiraagu Pay and other local mobile wallets for small payments in Malé and local communities"
    ],
    whatSurprisesNewcomers: [
      "VoIP services including WhatsApp, FaceTime, and Zoom work without meaningful restrictions, which is important for isolated resort-based workers maintaining contact with family and colleagues abroad.",
      "Connectivity on remote resort islands is generally excellent — resort operators invest heavily in guest-facing Wi-Fi, and staff often have equivalent access. Your weakest link is usually weather-related outages during storms.",
      "Dollar-based transactions are common in the tourism sector, but most day-to-day purchases in Malé are in MVR. Dual-currency life requires some planning, and most residents carry cards that handle both.",
      "Content restrictions exist but are limited in practice — the state censors certain religiously sensitive content and gambling sites, but VPN use is common and not aggressively policed for personal purposes."
    ]
  },
  culture: {
    text: "Maldivian culture reflects centuries of South Asian, East African, and Arabian maritime influence layered over a distinct Dhivehi identity and a strict Sunni Muslim foundation. The constitution requires all citizens to be Muslim, and conversion from Islam is a serious legal matter. Sharia principles inform parts of the legal system, though criminal law also draws on common-law traditions. For foreign residents, local islands (including Malé) maintain Islamic norms: alcohol, pork, and visible non-Islamic practice are prohibited, dress codes favor modesty, and the call to prayer structures the day. Resort islands operate as legally distinct spaces where these rules are relaxed for guests and, to a lesser extent, staff — a uniquely Maldivian accommodation between strict religious law and a tourism-driven economy. Maldivians are warm, generous, and proud of their heritage, though socially reserved with foreigners at first. Family ties are strong, and Malé's dense neighborhoods function as extended kin networks. For expatriate workers, social life depends on location: resort communities are tight-knit staff societies, while Malé-based expats cluster around diplomatic missions, international schools, and specific cafés and restaurants.",
    highlights: [
      "Alcohol and pork are prohibited on local islands including Malé. They are available only on resort islands, in duty-free for transit, and in designated diplomatic contexts. Respect this distinction carefully when moving between resort and local environments.",
      "Dress modestly on local islands. On designated 'bikini beaches' in certain local islands, swimwear is permitted for tourists; outside these beaches, shoulders and knees should be covered, and women should wear clothing that covers the torso and thighs.",
      "Friday is the main day of prayer and the traditional day of rest. The workweek is Sunday to Thursday. Many shops close during Friday midday prayers.",
      "Ramadan is strictly observed on local islands. Eating, drinking, or smoking in public during daylight hours is not permitted for anyone, regardless of religion. Resort islands operate largely normally for guests during Ramadan.",
      "Physical contact between men and women who are not related is minimized in traditional contexts. Handshakes may be declined by religiously observant Maldivians, particularly women; a slight nod or hand over the heart is an appropriate greeting."
    ]
  },
  transportationMobility:
    "Transport in the Maldives is fundamentally different from a continental country. There are no roads connecting atolls, no rail system, and effectively no inter-island highways. Domestic travel depends on a combination of speedboat transfers, domestic flights (operated by Maldivian, Manta Air, and Flyme), and seaplanes (Trans Maldivian Airways and Manta Air operate fleets of DHC-6 Twin Otters, making the Maldives one of the world's largest seaplane operators). Malé itself is a compact one-square-mile island where walking is the primary mode, supplemented by motorcycles, small cars, and taxis. The nearby reclaimed island of Hulhumalé is connected to Malé by the Sinamalé Bridge, opened in 2018, and further connections are under construction. For resort-based workers, your mobility is typically tied to employer-provided transfers — scheduled speedboats or seaplanes to reach Malé on leave days. Obtaining a Maldivian driving license is straightforward for holders of licenses from most countries, but unless you live in Malé or Hulhumalé, its usefulness is limited given the lack of roads elsewhere.",
  internationalConnectivity:
    "Velana International Airport (VIA), located on Hulhulé Island adjacent to Malé, is the country's main international gateway and the hub for Maldivian (the national carrier). Direct flights connect to Dubai, Doha, Abu Dhabi, Istanbul, Colombo, Bangkok, Singapore, Kuala Lumpur, Beijing, and multiple European cities (with strong seasonal connections to Milan, Paris, and Frankfurt). Flight time to Dubai is about 4.5 hours, Singapore 4.5 hours, and London approximately 10.5 hours. Gan International Airport (GAN) in the south and Maafaru International Airport (NMF) handle a smaller number of regional and charter flights. The country's position on Indian Ocean trans-equatorial routes gives it good connectivity despite its small size.",
  travelExploration:
    "Travel within the Maldives is dominated by beach, reef, and lagoon experiences. The country offers some of the best diving in the world — manta rays, whale sharks, healthy reef systems, and drift dives. Snorkeling from most resort islands is exceptional. Surfing in the Maldives is a growing draw, with established breaks in North and South Malé atolls and the Outer Atolls. Culture and heritage tourism are smaller but meaningful, with the Old Friday Mosque (Hukuru Miskiy) in Malé, the Utheemu Palace in the north, and Buddhist-era archaeological remains on some islands. For expatriate workers on leave, popular regional getaways include Sri Lanka (a 1.5-hour flight), India, Dubai, Bangkok, and Singapore. Many long-stay workers use their rotation breaks for extended travel across the broader Indian Ocean and Southeast Asia region.",
  considerations: [
    "Geographic Isolation: Resort island life is unlike any other expatriate experience. You live on a small island with the same 100-500 colleagues, limited ability to leave, and a work environment that is simultaneously your home and your social world. It suits some people wonderfully and exhausts others — honest self-assessment before accepting a resort role matters.",
    "Religious and Social Restrictions: Local islands (including Malé) prohibit alcohol, pork, and open practice of non-Islamic religion. Public displays of affection, cohabitation outside marriage, and LGBTQ+ relationships face legal risk. These rules relax on resort islands but return on Malé or other local islands.",
    "Climate Vulnerability and Weather: The Maldives is the lowest-lying country on earth, with long-term sea-level rise shaping national policy. Day-to-day, weather is warm and humid year-round (28-31C), with a dry season (November-April) and wet season (May-October). Cyclones are rare but monsoon storms disrupt transfers.",
    "Kafala-Style Employment Ties: Work permits are tied to employers, and changing jobs typically involves cancellation, return home, and fresh sponsorship — usually coordinated around rotation cycles. Understand exit and re-entry implications before changing roles.",
    "Medical Evacuation Dependency: Complex medical situations routinely require evacuation to India, Sri Lanka, or Singapore. Ensure your employer's health insurance explicitly includes international medical evacuation, and understand the logistics (seaplane to Malé, commercial flight onward) before you need it."
  ],
  mistakes: [
    "Attempting to bring alcohol or pork onto local islands. Customs at Velana International Airport are thorough, and discovery results in confiscation and potential penalties. Items for resort consumption are handled through resort supply chains directly.",
    "Underestimating the isolation of resort-island posting. Extended periods on a single small island, without the ability to leave between rotations, can be psychologically challenging. Visit the specific resort in advance or talk to current staff before committing to a multi-year contract.",
    "Dressing inappropriately on local islands. Beachwear is only acceptable on designated bikini beaches. In Malé, Hulhumalé, and most local islands, modest dress (covered shoulders and knees) is expected.",
    "Failing to factor in the dollar-rufiyaa dual economy. Salaries quoted in USD may be paid partly in MVR at a bank rate that differs from the market rate. Understand your salary structure before signing, including how service charge is calculated and distributed.",
    "Assuming inter-atoll logistics will be easy. Seaplane and speedboat transfers run on fixed schedules and are weather-dependent. Same-day turnaround between two atolls for a personal errand is usually impossible — plan weeks ahead."
  ],
  emergency: [
    {
      number: '102',
      service: 'Ambulance (Malé)',
      description: 'Emergency ambulance service for Malé and the greater Malé area, operated in coordination with IGMH and private hospitals.'
    },
    {
      number: '119',
      service: 'Police',
      description: 'Maldives Police Service emergency line for crime reports, incidents, and security emergencies. Operators speak Dhivehi and English.'
    },
    {
      number: '118',
      service: 'Fire and Rescue',
      description: 'Maldives National Defence Force Fire and Rescue Service, handling fire emergencies and some rescue operations across the country.'
    }
  ],
  sources: [
    {
      name: 'Maldives Immigration',
      category: 'Immigration & Residency',
      description: 'The primary authority for work permits, tourist visas, residence permits, and border control in the Maldives.',
      link: 'https://www.immigration.gov.mv/'
    },
    {
      name: 'Ministry of Economic Development',
      category: 'Employment & Business',
      description: 'Regulates Employment Approval for foreign workers, business registration, and investment incentives across sectors.',
      link: 'https://www.trade.gov.mv/'
    },
    {
      name: 'Maldives Inland Revenue Authority (MIRA)',
      category: 'Taxation',
      description: 'Administers income tax, GST, and other tax matters applicable to residents and businesses in the Maldives.',
      link: 'https://www.mira.gov.mv/'
    },
    {
      name: 'Visit Maldives',
      category: 'Tourism & Lifestyle',
      description: 'The official tourism promotion board providing information on resorts, local islands, visas, and practical travel guidance.',
      link: 'https://visitmaldives.com/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to the Maldives, consult the Maldivian Ministry of Foreign Affairs or a Maldivian embassy, consulate, or high commission abroad.',
    directoryLink: 'https://www.embassypages.com/maldives',
    mfaLink: 'https://foreign.gov.mv/'
  },
  serviceDirectory: {
    title: "Service Directory - Maldives",
    description: "Examples of large, commonly used service providers people often interact with when relocating to the Maldives.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for work permits, business visas, investor approvals, and regulatory compliance for tourism and other sectors.",
        providers: [
          { name: "CTL Strategies", link: "https://www.ctlstrategies.com" },
          { name: "Shah, Hussain & Co.", link: "https://www.shc.mv" },
          { name: "Suood, Anwar & Co.", link: "https://www.suood.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and portals for Malé and Hulhumalé apartment rentals and residential purchases for eligible buyers.",
        providers: [
          { name: "Living Maldives", link: "https://www.livingmaldives.com" },
          { name: "Maldives Real Estate", link: "https://www.maldivesrealestate.com" },
          { name: "Sakku Property", link: "https://www.sakkuproperty.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Firms supporting corporate tax, GST compliance, payroll, and cross-border income advice. Big Four networks typically serve the Maldives through regional South Asia offices.",
        providers: [
          { name: "KPMG (South Asia network)", link: "https://kpmg.com/xx/en/home.html" },
          { name: "Ernst & Young (Global)", link: "https://www.ey.com/en_gl" },
          { name: "PwC (Global)", link: "https://www.pwc.com/gx/en.html" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International relocation services handling shipping, customs clearance, and logistics to island destinations.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "Allied Pickfords", link: "https://www.allied.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Dhivehi language courses and English training programs for resort staff and diplomatic personnel.",
        providers: [
          { name: "Dhi Institute", link: "https://www.dhiinstitute.com" },
          { name: "Mandhu College", link: "https://www.mandhu.edu.mv" },
          { name: "British Council Resources", link: "https://www.britishcouncil.org" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major hospitals and clinics serving Malé and providing medical evacuation coordination to regional hubs.",
        providers: [
          { name: "ADK Hospital", link: "https://www.adkhospital.mv" },
          { name: "Tree Top Hospital", link: "https://www.treetophospital.com" },
          { name: "Indira Gandhi Memorial Hospital (IGMH)", link: "https://www.igmh.gov.mv" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment portals and agencies specializing in hospitality, diving, and professional roles across the resort sector.",
        providers: [
          { name: "Hosco (Hospitality)", link: "https://www.hosco.com" },
          { name: "Caterer Global", link: "https://www.catererglobal.com" },
          { name: "Job Maldives", link: "https://www.jobmaldives.com" }
        ]
      }
    ]
  }
};
