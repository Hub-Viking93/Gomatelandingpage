export const nigeria = {
  id: 'nigeria',
  slug: 'nigeria',
  name: 'Nigeria',
  region: 'Africa',
  complexity: 'High',
  languages: ['English', 'Hausa', 'Yoruba', 'Igbo'],
  shortDescription: 'Africa\'s largest economy and most populous nation, where entrepreneurial energy meets real infrastructure challenges.',
  heroImage: 'https://images.unsplash.com/photo-1618828665011-0abd973f7bb8',
  flagAlt: 'Flag of Nigeria',
  atAGlance: "Nigeria is Africa's demographic and economic heavyweight, a country of more than 220 million people, over 250 ethnic groups, and an entrepreneurial energy that defines the continent's most ambitious business culture. Lagos, the commercial capital, is a city of superlatives: Africa's largest metropolitan area, the engine of Nollywood (the world's second-largest film industry by output), home to a burgeoning fintech ecosystem that has produced unicorns like Flutterwave, Paystack, and Andela. Abuja, the purpose-built federal capital, is calmer, greener, and more structured, housing embassies, the National Assembly, and the bulk of diplomatic and governmental activity. The energy of Lagos is unmatched in West Africa, but so is the friction: notorious traffic gridlock ('go-slow') can turn a 10-kilometer commute into a three-hour ordeal, grid electricity is unreliable to the point that diesel generators are a baseline requirement for any serious business or residence, and security considerations vary dramatically by region, with the southeast and southwest generally considered more manageable than parts of the northern and Middle Belt states. English is the official language and the lingua franca of business, education, and media, supplemented by Pidgin English on the street and Yoruba, Hausa, or Igbo depending on region. The naira (NGN) has seen significant volatility, with parallel market rates often diverging sharply from official central bank rates, making FX management a critical skill for any foreigner living here. Nigerian professional life is relationship-driven, loud, creative, and deeply resilient; Nigerians have a way of making things work despite systems that often do not. For those willing to adapt to its chaos and invest in understanding it, Nigeria offers genuinely outsized opportunities in tech, finance, energy, and creative industries.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Varies by visa type',
    costOfLiving: 'Medium (Lagos) / Low (elsewhere)',
    primaryLanguages: 'English (Official), Hausa, Yoruba, Igbo, Pidgin',
  },
  visas: [
    {
      name: 'Subject to Regularisation (STR) Visa',
      targetAudience: 'Expatriate Employees',
      useCase: 'The standard route for foreign nationals with a confirmed job offer in Nigeria. The employer (with an approved Expatriate Quota from the Ministry of Interior) applies for a pre-approval; you then apply for the STR visa at the Nigerian embassy in your home country. Upon arrival, the visa is regularised within 90 days into a CERPAC (Combined Expatriate Residence Permit and Aliens Card).',
      duration: 'Initial entry valid 90 days, regularised to CERPAC for 1-2 years',
      link: 'https://immigration.gov.ng/'
    },
    {
      name: 'CERPAC (Combined Expatriate Residence Permit and Aliens Card)',
      targetAudience: 'Long-term Foreign Residents',
      useCase: 'The primary residence card for all foreigners living and working in Nigeria beyond 90 days. Issued by the Nigerian Immigration Service (NIS) after your STR visa is regularised. Must be renewed annually. Serves as your official ID for government dealings, bank verification, and property transactions.',
      duration: '1-2 years (renewable annually)',
      link: 'https://immigration.gov.ng/cerpac/'
    },
    {
      name: 'Temporary Work Permit (TWP)',
      targetAudience: 'Short-term Specialised Workers',
      useCase: 'For foreign nationals invited by a Nigerian company to perform specific short-term tasks: installation, training, technical consulting, or emergency repairs. Approved by the Comptroller-General of Immigration. Cannot be extended beyond 90 days and does not convert into a residence permit.',
      duration: 'Up to 90 days, single-use',
      link: 'https://immigration.gov.ng/'
    }
  ],
  requirements: [
    {
      title: 'CERPAC Card',
      explanation: 'The Combined Expatriate Residence Permit and Aliens Card is the physical residence document issued by the Nigerian Immigration Service to all expatriates living in Nigeria long-term. It is a biometric card tied to your employer-sponsored Expatriate Quota slot.',
      importance: 'Without a valid CERPAC, you are not legally permitted to reside in Nigeria beyond 90 days, cannot sign formal long-term leases, cannot renew resident banking privileges, and risk detention at airport departure. Annual renewal is mandatory and should be initiated 30-60 days before expiry. Lost cards must be reported to the police and NIS immediately. The card, the STR visa process, and the Expatriate Quota are all linked to a specific employer, so a change of job requires a full regularisation of status with the new sponsor.',
      link: 'https://immigration.gov.ng/cerpac/'
    },
    {
      title: 'National Identification Number (NIN)',
      explanation: 'A unique 11-digit number issued by the National Identity Management Commission (NIMC). Enrollment requires biometric capture at an NIMC office with your passport and CERPAC. While originally designed for Nigerians, enrollment is now routine for long-term foreign residents.',
      importance: 'Since 2020, NIN is mandatory for all active SIM cards in Nigeria. Without a NIN linked to your SIM, your phone number will be suspended or deactivated by the Nigerian Communications Commission (NCC). A functioning local phone number is non-negotiable: banking OTPs, ride-hailing apps, fintech wallets, and government portals all depend on it. NIN is also increasingly required for bank account opening (in addition to BVN) and property transactions.',
      link: 'https://www.nimc.gov.ng/'
    },
    {
      title: 'Bank Verification Number (BVN)',
      explanation: 'An 11-digit biometric identifier issued by the Central Bank of Nigeria through your chosen bank. Linked to your fingerprints and face, and shared across all Nigerian banks so one BVN covers all your accounts.',
      importance: 'No Nigerian bank account can be operated without a BVN. It is required to receive your salary, pay rent, use POS machines and transfer apps, and invest in local instruments. Enrollment is done in-branch with your passport and CERPAC, and usually takes 10-30 minutes. Once issued, your BVN is used for every future bank onboarding; you do not need a new one per bank.',
      link: 'https://www.cbn.gov.ng/'
    },
    {
      title: 'Tax Identification Number (TIN)',
      explanation: 'Issued by the Federal Inland Revenue Service (FIRS) or relevant State Internal Revenue Service (in Lagos, the LIRS). Required for anyone earning income in Nigeria, whether as an employee or self-employed.',
      importance: 'Without a TIN, your employer cannot remit PAYE tax correctly, and you cannot legally invoice Nigerian clients as a consultant. It is also needed for property registration, company incorporation, and opening certain corporate bank accounts. In Lagos, most employed expatriates interact with the LIRS rather than FIRS for personal income tax, as Lagos State administers its own PIT regime.',
      link: 'https://www.firs.gov.ng/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Nigeria's economy is dominated by oil and gas, financial services, telecommunications, consumer goods, agriculture, and an increasingly globally relevant technology sector. Lagos is the financial and tech capital, hosting major banks (GTBank, Zenith, Access), fintechs (Flutterwave, Paystack, Kuda, Moniepoint), telecoms (MTN, Airtel, Glo), and the West African HQs of many multinationals. Abuja is dominated by government, diplomacy, and oil-services companies. The job market for expatriates is gated by the Expatriate Quota system: each company must secure quota slots from the Ministry of Interior to hire foreign nationals, and these slots are meant to be limited to roles where local skills are genuinely scarce.",
    whereToLook: [
      "LinkedIn (the dominant platform for senior and international roles)",
      "Jobberman Nigeria (the largest local job board)",
      "MyJobMag and Hotnigerianjobs.com (broad local listings)",
      "Direct career pages of banks, oil majors (Shell, Chevron, TotalEnergies, ExxonMobil, NNPC), telecoms, and fintechs",
      "Executive search firms: Phillips Consulting, Stresert, Michael Page Nigeria"
    ],
    realityChecks: [
      "The Expatriate Quota system is a hard constraint. Companies must justify each foreign hire, so roles open to expatriates are typically senior, technical, or specialised (oil and gas engineering, CFO/CEO roles, niche tech leadership). Junior roles are essentially closed to foreigners.",
      "Compensation for senior expatriate roles is often split between a Nigerian salary (taxed locally) and an offshore component (paid in USD or EUR to a home-country account). Understand both pieces before signing.",
      "Networking and introductions carry enormous weight. Cold applications are rarely successful at senior levels; warm introductions through mutual contacts are the norm.",
      "Nigerian professional culture is long-hours and high-pressure, particularly in banking, consulting, and tech. Expect Saturday calls, late-evening emails, and an informal always-on expectation alongside a strong in-office presence culture."
    ]
  },
  salaryReality: {
    overview:
      "Salaries in Nigeria span a huge range. A mid-level Nigerian professional in Lagos earns roughly NGN 400,000-1,500,000/month, while senior expatriate packages at oil majors, banks, or multinational corporates can reach USD 150,000-400,000+ per year all-in, often including housing, security, school fees, and home leave flights. Naira volatility means that locally paid salaries can lose significant purchasing power over a single year if not partially indexed to USD.",
    realityChecks: [
      "Personal income tax in Lagos follows a progressive scale from 7% to 24% on annual income, administered by the Lagos State Internal Revenue Service (LIRS). Other states apply similar scales under the Personal Income Tax Act.",
      "Housing in Lagos expat areas (Ikoyi, Victoria Island, Lekki Phase 1, Banana Island) is expensive, typically paid 1-2 years in advance as a lump sum. A 3-bedroom serviced apartment in Ikoyi ranges from USD 40,000-120,000 per year.",
      "Diesel, generators, and inverter/solar systems are not a lifestyle upgrade; they are baseline costs. Expect to budget several hundred to several thousand USD per month on power depending on your setup.",
      "Parallel market FX rates often diverge significantly from the official Central Bank of Nigeria rate. Contracts denominated in naira lose real value when the parallel rate moves, so expats often negotiate a USD component or inflation adjustment."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Power costs: diesel for a typical home generator can add USD 300-1,500+ per month on top of the utility bill from DisCos (distribution companies)",
      "Security: estate levies, gate guards, and private response services often add NGN 100,000-500,000+ per month for serviced compounds",
      "Transport: whether you run a car with a driver or rely on Bolt/inDrive/Uber, budget for fuel, tolls (Lekki-Epe), and the reality that traffic converts time into money",
      "Schooling: international schools in Lagos (British International, Greensprings, American International School, Lagoon) charge USD 10,000-35,000 per child per year"
    ]
  },
  housingSystem: {
    overview:
      "Nigerian rental culture is built around annual upfront payments. Landlords typically demand 1-2 years' rent paid in full at signing, plus agent fee (10%), legal fee (10%), and caution deposit (10%) calculated against the annual rent. This front-loaded model is the single biggest cash-flow shock for newcomers. In Lagos, expats cluster in Ikoyi (diplomatic, old-money), Victoria Island (corporate), Lekki Phase 1 and Oniru (modern, beach-adjacent), and Banana Island (ultra-premium). Abuja expats favour Asokoro, Maitama, Wuse II, and Jabi.",
    expectations:
      "Use reputable estate agents or listing platforms (PropertyPro.ng, Nigeria Property Centre, Lamudi). Always verify ownership documents (C of O - Certificate of Occupancy, or Governor's Consent) with a lawyer before paying anything. Never pay personally to a purported landlord without due diligence; fraud involving fake landlords renting properties they do not own is common. Serviced apartments are popular with corporate expats because they include generator power, security, water treatment, and sometimes meals, reducing the operational burden significantly. Tenancy agreements are typically for 2 years, with the second year often discounted. Always negotiate: first quotes assume you will push back."
  },
  healthcareReality:
    "Nigeria's healthcare system is deeply two-tiered. Public hospitals are overstretched and under-resourced; most expats and middle-class Nigerians rely on private facilities. In Lagos, Reddington Hospital, Lagoon Hospital, Evercare Hospital (Lekki), and First Cardiology Consultants offer strong general and specialist care. In Abuja, Nisa Premier, Cedarcrest, and Asokoro District Hospital are the main private options. For complex or critical care, medical evacuation to the UK, South Africa, India, or the UAE is routine; most expat medical schemes explicitly include evacuation cover. Private health insurance from HMOs like Avon, Axa Mansard, Hygeia, or Reliance HMO is standard for employed expatriates. International schemes from Bupa, Cigna, and AXA Global are common for senior packages. Pharmacies are widespread but the risk of counterfeit medication is real; stick to reputable chains like Medplus, HealthPlus, and Alpha Pharmacy. Malaria is endemic across Nigeria; most long-term residents stop prophylaxis and instead use mosquito nets, repellent, and early testing and treatment, but newcomers should speak to a travel doctor. Ensure yellow fever vaccination is current - a valid card is required at entry.",
  digitalLife: {
    overview:
      "Nigeria is one of the most fintech-advanced markets in Africa. Digital banking, instant interbank transfers (via NIBSS), USSD-based banking for feature phones, and a wave of fintech apps have transformed daily payments. Internet access is predominantly mobile, delivered over 4G and expanding 5G by MTN, Airtel, Globacom, and 9mobile. Fixed fibre (Spectranet, Starlink, ipNX, Tizeti) is available in major cities but often supplemented by mobile backups.",
    essentials: [
      "A local SIM (MTN, Airtel, Glo, 9mobile) linked to your NIN - required for banking OTPs and app verification",
      "A Tier 2 or Tier 3 bank account with a BVN (GTBank, Access, Zenith, UBA, Stanbic, or a fintech like Kuda/Opay for secondary use)",
      "Bolt, Uber, and inDrive for ride-hailing; LagRide is the newer regulated alternative in Lagos",
      "A reliable fibre provider plus a mobile hotspot as backup - dual connectivity is standard practice"
    ],
    whatSurprisesNewcomers: [
      "Grid electricity from the DisCos (EKEDC, IKEDC, AEDC, etc.) is unreliable. Most residences run on a combination of grid, inverter/battery, and diesel or petrol generator. 'NEPA took light' (a legacy reference to the old national utility) is daily vocabulary.",
      "USSD codes (e.g. *737# for GTBank) remain massively used - you can transfer money, buy airtime, and pay bills without ever opening an app. Learn your bank's code.",
      "Instant bank transfers clear in seconds, even between different banks, and are the default payment rail. Point-of-sale (POS) agents are on nearly every street corner as a cash-in/cash-out layer.",
      "FX access through official channels is tightly managed by the CBN. International card transactions have monthly limits (often USD 100-500 equivalent on naira cards), which pushes many people toward domiciliary (USD) accounts or fintechs like Grey and Chipper Cash."
    ]
  },
  culture: {
    text: "Nigerian culture is loud, expressive, deeply relational, and built on three massive ethnic pillars (Hausa-Fulani in the north, Yoruba in the southwest, Igbo in the southeast) plus hundreds of smaller groups, each with its own language, dress, music, and food. Religion is central: the south is predominantly Christian, the north predominantly Muslim, and religious identity influences naming, dress, and weekly rhythms. Hospitality is a core value; refusing food or drink in someone's home can be mildly offensive. Greetings matter enormously, particularly in Yoruba and Hausa culture, where prostrating or kneeling for elders, or a hand-to-chest greeting for senior Muslims, signals respect. Titles (Chief, Alhaji, Oga, Madam, Dr, Engr) are used frequently and should not be dropped casually once known. 'Naija no dey carry last' - Nigerians do not finish last - captures the ambitious, competitive streak that drives business and hustle culture. Owambe (weekend parties) with elaborate aso-ebi dress codes, live Afrobeats, and endless jollof rice are core social infrastructure, particularly in the southwest.",
    highlights: [
      "Greetings are non-negotiable. Walk into any room without greeting and you will be read as rude. 'Good morning sir/ma' is baseline even in relatively informal settings.",
      "Titles are load-bearing. Address people as Chief, Alhaji, Dr, Engr, Madam, or Oga/Boss as appropriate. Getting this wrong is worse than being too formal.",
      "Pidgin English is the continent's great equaliser. Picking up a few phrases ('How far?', 'No wahala', 'Abeg') earns enormous goodwill.",
      "Jollof rice is a matter of national pride, with friendly (and not-so-friendly) rivalry against Ghana, Senegal, and Cameroon. Have an opinion.",
      "Nollywood, Afrobeats (Burna Boy, Wizkid, Davido, Tems), and Nigerian literature (Adichie, Soyinka, Achebe) are global cultural exports. Familiarity with them signals that you respect Nigerian identity, not just its economy."
    ]
  },
  transportationMobility:
    "Lagos traffic is legendary. The bridges (Third Mainland, Eko, Carter) that connect the Mainland and the Islands are choke points, and 'go-slow' can turn a short hop into hours. Ride-hailing apps (Bolt, Uber, inDrive, LagRide) are the preferred option for most expats; fares are inexpensive by global standards but surge heavily in rain or rush hour. BRT (Bus Rapid Transit) and the newer Lagos Blue Line and Red Line metros have begun to offer mass-transit alternatives on key corridors. Okada (motorcycle taxis) and keke (tricycles) handle last-mile movement but are banned on many Lagos highways for safety reasons. In Abuja, the grid layout and lighter traffic make driving more practical; a dedicated Abuja metro line connects the city centre with the airport area. Intercity travel is dominated by domestic airlines (Air Peace, Ibom Air, United Nigeria, Green Africa) connecting Lagos, Abuja, Port Harcourt, Kano, Enugu, and Calabar, since long-distance road travel exposes travellers to armed robbery and kidnapping risk on some corridors. Security advisories from your embassy should be consulted for any overland journey.",
  internationalConnectivity:
    "Murtala Muhammed International Airport in Lagos (LOS) is West Africa's busiest, with direct flights to London (6.5 hours, BA and Virgin Atlantic), Frankfurt (Lufthansa), Amsterdam (KLM), Paris (Air France), Istanbul (Turkish), Addis Ababa (Ethiopian), Doha (Qatar), Dubai (Emirates), Johannesburg (South African Airways), and many African capitals. Nnamdi Azikiwe International Airport in Abuja (ABV) has more limited but growing long-haul service. Port Harcourt and Kano also host international routes. Domestic connectivity is strong between the main hubs, though reliability and on-time performance vary by carrier. Lagos to London is roughly 6.5 hours, Lagos to Dubai about 7 hours, Lagos to New York via a connection typically 13-16 hours total.",
  travelExploration:
    "Nigeria rewards travellers who plan and respect security advisories. Lagos itself offers Elegushi and Tarkwa Bay beaches, the art scene of Nike Art Gallery and Terra Kulture, and the food and nightlife of Victoria Island and Lekki. Calabar hosts Africa's largest street carnival each December. Obudu Mountain Resort in Cross River offers cool-climate hiking. Yankari Game Reserve in Bauchi has wildlife and warm springs. Olumo Rock in Abeokuta is a Yoruba cultural landmark. Osun-Osogbo Sacred Grove is UNESCO-listed. Sukur Cultural Landscape in Adamawa is another UNESCO site. The Gurara and Farin Ruwa waterfalls, Zuma Rock near Abuja, and the ancient Nok culture sites reward serious travellers. Always check current security guidance from your embassy before travelling in the northern, northeastern, or Middle Belt states, where banditry and insurgency risks vary by zone.",
  considerations: [
    "Security posture: Lagos, Abuja, Port Harcourt, and Calabar require standard urban caution - visible wealth, late-night walking, and unvetted vehicles are risks. Kidnap-for-ransom is a real risk on certain road corridors, particularly in the north and Middle Belt. Follow your employer's security briefings, use trusted drivers, and register with your embassy's traveller programme.",
    "Power and infrastructure: expect to plan your life around generators, inverters, water tanks, and backup internet. Treat uptime as something you engineer, not something you rent. Budget accordingly.",
    "FX and cash flow: naira volatility and parallel market dynamics mean anyone earning in local currency feels ongoing purchasing-power erosion. Negotiate a USD component if possible; open a domiciliary account for foreign-currency savings.",
    "Bureaucracy and patience: CERPAC renewals, NIN enrolment, LIRS tax matters, and vehicle registration all involve queues, photocopies, and occasionally informal facilitation. Use a reputable immigration consultant for time-sensitive filings.",
    "Traffic is a tax on your day: in Lagos, where you live relative to where you work is a lifestyle decision. Living on the Island and working on the Mainland (or vice versa) can cost you 3-5 hours in traffic daily."
  ],
  mistakes: [
    "Underestimating the Expatriate Quota process. Your CERPAC, work authorisation, and ability to remain in-country all flow from the sponsoring company's quota. A job change requires a full reset; do not assume portability.",
    "Paying for accommodation before legal due diligence. Rental fraud - individuals posing as landlords for properties they do not own - is common. Always pay through a vetted lawyer and verify title documents.",
    "Ignoring NIN-SIM linkage. An unlinked SIM gets suspended, breaking every OTP-dependent service you rely on. Enrol for your NIN in your first weeks and link it immediately.",
    "Carrying large amounts of cash. Nigeria is now heavily digital - bank transfers and POS are the norm. Carrying visible cash invites risk; use transfers and small-denomination cash backups only.",
    "Flying or driving without considering route security. Embassy advisories for specific corridors should guide overland trips. For long journeys, domestic flights are almost always the right call."
  ],
  emergency: [
    {
      number: '112',
      service: 'National Emergency Toll-Free',
      description: 'Unified emergency number for police, fire, and ambulance, accessible from any phone. Coverage and response times vary significantly by state.'
    },
    {
      number: '767',
      service: 'Lagos State Emergency (LASEMA/LRU)',
      description: 'Lagos-specific emergency response line operated by Lagos State Emergency Management Agency and the Rapid Response Squad. Generally faster than national lines within Lagos.'
    },
    {
      number: '199',
      service: 'Federal Fire Service',
      description: 'National fire service emergency line. In practice, private and state-level brigades often respond faster in Lagos and Abuja.'
    }
  ],
  sources: [
    {
      name: 'Nigeria Immigration Service (NIS)',
      category: 'Immigration & Visas',
      description: 'The federal authority responsible for visas, CERPAC, passports, and border management. Manages the e-visa portal and STR regularisation.',
      link: 'https://immigration.gov.ng/'
    },
    {
      name: 'Federal Inland Revenue Service (FIRS)',
      category: 'Tax',
      description: 'Federal tax authority for corporate income tax, VAT, and TIN issuance. Lagos-based employees typically interact with LIRS instead for personal income tax.',
      link: 'https://www.firs.gov.ng/'
    },
    {
      name: 'Central Bank of Nigeria (CBN)',
      category: 'Banking & FX',
      description: 'The monetary authority responsible for banking regulation, BVN framework, and foreign exchange policy.',
      link: 'https://www.cbn.gov.ng/'
    },
    {
      name: 'NIMC (National Identity Management Commission)',
      category: 'Identity',
      description: 'Issues the National Identification Number (NIN) and the national ID card, required for SIM registration and increasingly for banking and property transactions.',
      link: 'https://www.nimc.gov.ng/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Nigeria, consult the Nigerian Ministry of Foreign Affairs or a Nigerian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/nigeria',
    mfaLink: 'https://foreignaffairs.gov.ng/'
  },
  serviceDirectory: {
    title: "Service Directory - Nigeria",
    description: "Examples of commonly used service providers people often interact with when relocating to Nigeria.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal and consultancy firms handling CERPAC, Expatriate Quota, STR visas, and corporate immigration compliance.",
        providers: [
          { name: "Aluko & Oyebode", link: "https://www.aluko-oyebode.com" },
          { name: "Banwo & Ighodalo", link: "https://www.banwo-ighodalo.com" },
          { name: "Fragomen Nigeria", link: "https://www.fragomen.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms handling rentals and sales in Lagos, Abuja, and Port Harcourt, including serviced apartments.",
        providers: [
          { name: "Knight Frank Nigeria", link: "https://www.knightfrank.com.ng" },
          { name: "PropertyPro.ng", link: "https://www.propertypro.ng" },
          { name: "Nigeria Property Centre", link: "https://nigeriapropertycentre.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax advisors familiar with PAYE, LIRS/FIRS compliance, Expatriate Quota cost modelling, and cross-border income.",
        providers: [
          { name: "KPMG Nigeria", link: "https://home.kpmg/ng/en/home.html" },
          { name: "PwC Nigeria", link: "https://www.pwc.com/ng" },
          { name: "Andersen Nigeria", link: "https://ng.andersen.com" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation providers handling customs clearance at Apapa and Tin Can ports.",
        providers: [
          { name: "Crown Relocations Nigeria", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Nigeria", link: "https://www.agsmovers.com" },
          { name: "Allied Pickfords Nigeria", link: "https://www.alliedpickfords.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Tutors and institutes offering Yoruba, Hausa, Igbo, and Nigerian Pidgin courses for cultural integration.",
        providers: [
          { name: "French Cultural Centre Lagos", link: "https://www.if-nigeria.com" },
          { name: "Goethe-Institut Nigeria", link: "https://www.goethe.de/ins/ng/en/index.html" },
          { name: "Yoruba Lessons (Preply Nigeria)", link: "https://preply.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private hospitals and HMOs commonly used by expatriates in Lagos and Abuja.",
        providers: [
          { name: "Reddington Hospital", link: "https://www.reddingtonhospital.com" },
          { name: "Evercare Hospital Lekki", link: "https://www.evercarelekki.com" },
          { name: "Avon HMO", link: "https://www.avonhealthcare.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Executive search and recruitment platforms placing expatriates and senior professionals in Nigerian roles.",
        providers: [
          { name: "Jobberman", link: "https://www.jobberman.com" },
          { name: "Phillips Consulting", link: "https://www.phillipsconsulting.net" },
          { name: "Michael Page Nigeria", link: "https://www.michaelpageafrica.com" }
        ]
      }
    ]
  }
};
