export const norway = {
  id: 'norway',
  slug: 'norway',
  name: 'Norway',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Norwegian', 'English'],
  shortDescription: 'Spectacular landscapes and high living standards in a rugged, wealthy nation.',
  heroImage: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43',
  flagAlt: 'Flag of Norway',
  atAGlance: "Norway is one of the world's wealthiest nations per capita, built on oil revenues managed through the Government Pension Fund Global (the world's largest sovereign wealth fund, exceeding USD 1.5 trillion). Yet the society aggressively suppresses displays of wealth through Janteloven — an unwritten social code that insists no one is better than anyone else. This creates a uniquely egalitarian environment where the CEO takes the bus and showing off a luxury car is more likely to provoke disdain than admiration. Daily life revolves around 'friluftsliv' (outdoor living): hiking, skiing, fishing, and camping are not hobbies but defining cultural practices, pursued in all weather with the mantra 'there is no bad weather, only bad clothes.' The work-life balance is fiercely protected — the standard workday ends at 3:30-4:00 PM, parental leave totals 49 weeks at full pay (or 59 weeks at 80%), and taking three consecutive weeks of summer holiday is a legal right. The bureaucracy is transparent, digital, and generally efficient, but the cost of living is among the highest in the world: a restaurant meal can easily cost NOK 300-500 (EUR 25-45), a pint of beer NOK 100-120 (EUR 9-11), and groceries are roughly 50% more expensive than in Germany. The social sphere can feel impenetrable: Norwegians are honest and direct but reserve emotional openness for established relationships. Making friends requires joining organized activities — sports clubs, hiking groups, or community volunteer events (dugnad) — because spontaneous socializing with strangers simply does not happen.",
  overview: {
    euStatus: 'Non-EU (EEA Member)',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'Very High',
    primaryLanguages: 'Norwegian (Bokmål and Nynorsk), English (fluently spoken by most)',
  },
  visas: [
    {
      name: 'Skilled Worker Residence Permit',
      targetAudience: 'Professionals with Job Offer',
      useCase: 'For non-EEA citizens with higher education or vocational training and a confirmed, full-time job offer from a Norwegian employer meeting minimum salary requirements. The employer must document that the position requires the applicant\'s qualifications. Processing time is typically one to three months. EEA citizens register online through the UDI portal and do not need a permit.',
      duration: 'Up to 3 years (renewable, leads to permanent residency after 3 years)',
      link: 'https://www.udi.no/en/want-to-apply/work-immigration/skilled-workers/'
    },
    {
      name: 'Working Holiday Visa',
      targetAudience: 'Young Adults (18-30)',
      useCase: 'Available to citizens of Australia, New Zealand, South Korea, Japan, Canada, Chile, Argentina, and a few other partner countries. Allows part-time or full-time work alongside travel. You must have sufficient funds (approximately NOK 30,000) and return transportation arranged.',
      duration: 'Up to 1 year (non-renewable)',
      link: 'https://www.udi.no/en/want-to-apply/work-immigration/working-holiday/'
    },
    {
      name: 'Family Immigration Permit',
      targetAudience: 'Spouses, Partners, Children of Residents',
      useCase: 'For immediate family members of someone living in Norway with a valid residence permit or Norwegian citizenship. Requires proof of relationship, income requirements (the sponsor must demonstrate a minimum annual income, currently approximately NOK 300,000), and adequate housing.',
      duration: 'Up to 3 years (renewable, path to permanent residency)',
      link: 'https://www.udi.no/en/want-to-apply/family-immigration/'
    },
    {
      name: 'Visitor Visa (Schengen Type C)',
      targetAudience: 'Tourists, Short-term Business Visitors',
      useCase: 'For non-EEA citizens requiring a visa to enter the Schengen area. Applied for at the Norwegian embassy or VFS Global center. Many nationalities (US, UK, Canada, Australia, Japan) are visa-exempt for short stays and need no prior application.',
      duration: 'Up to 90 days within a 180-day period',
      link: 'https://www.udi.no/en/want-to-apply/visit-and-holiday/'
    },
    {
      name: 'Self-Employed / Business Residence Permit',
      targetAudience: 'Entrepreneurs, Self-Employed Professionals',
      useCase: 'For non-EEA nationals who want to establish and run a business in Norway. Requires a viable business plan, sufficient funding, and proof that the business will be operational. The bar is high and processing is thorough.',
      duration: 'Up to 1 year initially (renewable)',
      link: 'https://www.udi.no/en/want-to-apply/work-immigration/self-employed/'
    }
  ],
  requirements: [
    {
      title: 'Norwegian ID Number vs. D-Number',
      explanation: 'If you are staying in Norway for six months or more and are registered in the National Population Register (Folkeregisteret), you receive a full Personal Identity Number (fødselsnummer). If staying less than six months, you receive a D-number — a temporary identification number for tax and limited administrative purposes.',
      importance: 'The distinction between a D-number and a fødselsnummer is the single most important administrative detail in Norway. A D-number is a "lite" identity: it lets you pay tax and open a basic bank account, but it blocks you from getting BankID (the digital key to Norwegian life), a permanent GP (fastlege), and many service contracts. You exist in a limbo state. Upgrading to a full fødselsnummer requires proving intent to stay long-term (typically via a 6+ month employment contract and registered address). Until you have the full number, every administrative process is slower and harder.',
      link: 'https://www.skatteetaten.no/en/person/foreign/norwegian-identification-number/'
    },
    {
      title: 'Tax Deduction Card (Skattekort)',
      explanation: 'An electronic card that tells your employer how much tax to withhold from your salary. You must order this from Skatteetaten (the Norwegian Tax Administration) immediately upon receiving your ID number.',
      importance: 'If your employer does not have your skattekort when payroll runs, they are legally required to deduct 50% of your salary as a precaution. You will eventually recover the overdeducted amount in the next year\'s tax settlement, but losing half your first paycheck when you are facing high Norwegian startup costs (rental deposit, furniture, winter clothing) can be financially devastating. Apply online at skatteetaten.no the day you receive your D-number or fødselsnummer.',
      link: 'https://www.skatteetaten.no/en/person/taxes/tax-deduction-card-and-advance-tax/'
    },
    {
      title: 'BankID',
      explanation: 'Norway\'s universal digital identification system, issued through your bank and linked to your personal identity number. Used to log into NAV (welfare), Altinn (taxes), HelseNorge (health records), Lånekassen (student loans), and to sign contracts, apply for jobs, and access virtually every digital service in Norway.',
      importance: 'Getting BankID as a foreigner is notoriously difficult and slow, often taking two to four months. Banks (DNB, Nordea, SpareBank 1, Handelsbanken) have strict anti-money laundering (AML) verification procedures and may require multiple in-person visits. Without BankID, you must use paper forms and physical mail for every interaction with government agencies, adding weeks to each process. You are effectively a second-class digital citizen. Start the bank account and BankID process immediately upon arrival — it is the critical path item.',
      link: 'https://www.bankid.no/en/private/'
    },
    {
      title: 'Registration with the National Population Register',
      explanation: 'All persons intending to stay in Norway for six months or more must register with the Tax Administration (Skatteetaten) at a local tax office. This registration enters you into the Folkeregisteret (National Population Register), which is the basis for your fødselsnummer.',
      importance: 'This registration is the prerequisite for nearly everything: your identity number, tax card, healthcare access, and eventually BankID. Bring your passport, residence permit, employment contract, and proof of Norwegian address. The appointment must be booked in advance and can take one to three weeks to schedule depending on location and season.',
      link: 'https://www.skatteetaten.no/en/person/foreign/you-must-notify-us-when/moving-to-norway/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Norway's economy is dominated by oil and gas (Equinor, formerly Statoil, is one of the world's largest energy companies), maritime/shipping, seafood (salmon farming is a major export industry), renewable energy, and an increasingly significant tech sector centered in Oslo and Bergen. The labor market is stable, skills-focused, and highly unionized — approximately 50% of workers belong to a trade union, and collective agreements set wage floors in many sectors.",
    whereToLook: [
      "Finn.no — Norway's dominant classifieds platform, hosting the majority of job listings across all sectors",
      "LinkedIn — essential for professional, tech, and international roles",
      "NAV.no (Arbeidsplassen) — the public employment service's job portal, particularly useful for regulated and public-sector positions",
      "Company career pages — Equinor, DNB, Telenor, Yara, Kongsberg, and other major employers post directly",
      "Academic recruitment for research positions via JobbNorge and University portals"
    ],
    realityChecks: [
      "Norwegian language is required for most roles outside of explicitly international teams. Even in English-speaking tech companies, internal meetings, social interactions, and company-wide communications default to Norwegian.",
      "Hiring processes are thorough, reference-driven, and can take four to eight weeks. Norwegian employers call references provided — and sometimes additional references not on your list.",
      "Your employment contract directly affects your ability to get a fødselsnummer, BankID, and housing. A short-term or freelance contract creates significantly more administrative friction than a permanent full-time position.",
      "Salary negotiations exist but are culturally restrained. Dramatic back-and-forth haggling is unusual. Many salaries are set by collective agreements with limited individual negotiation room."
    ]
  },
  salaryReality: {
    overview:
      "Norwegian salaries are among the highest in Europe, with a median annual salary of approximately NOK 590,000 (EUR 50,000). However, the very high cost of living — especially housing, dining, and services — significantly reduces real purchasing power. There is no statutory minimum wage, but collective agreements effectively set wage floors in many sectors (e.g., NOK 220/hour for construction workers).",
    realityChecks: [
      "Income tax in Norway is moderate by Nordic standards (approximately 27-34% effective rate for most workers), but the combination of tax and extremely high prices means disposable income feels tighter than the gross number suggests.",
      "Employer pension contributions (OTP, Obligatorisk Tjenestepensjon) of at least 2% of salary are mandatory, with many employers contributing 5-7%. This is on top of salary, not deducted from it.",
      "Holiday pay (feriepenger) is 10.2% of the previous year's earnings (12% for workers over 60), paid out in June. In your first year, you will have no accrued holiday pay, creating a cash-flow gap during the summer holiday period.",
      "The gap between public and private sector pay is smaller than in most countries. Public sector workers earn less in gross salary but receive better pension schemes, more predictable hours, and stronger job security."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Housing costs: rent for a one-bedroom in central Oslo averages NOK 12,000-16,000/month (EUR 1,050-1,400); Bergen and Trondheim are 15-25% cheaper",
      "Grocery costs: a weekly shop for two people easily exceeds NOK 1,500 (EUR 130). Eating out is dramatically more expensive than cooking.",
      "The 'first year gap': no holiday pay is accrued in your first year of employment. When the obligatory three-week summer holiday comes, you effectively take it unpaid unless your employer offers an advance.",
      "Childcare: heavily subsidized (maximum NOK 3,315/month per child for barnehage/kindergarten), but waiting lists in popular areas can delay enrollment by months"
    ]
  },
  housingSystem: {
    overview:
      "Norway has a high home ownership rate (approximately 80%), but newcomers typically start by renting. The rental market is competitive in Oslo, Bergen, Trondheim, and Stavanger. Popular areas in Oslo include Grünerløkka, St. Hanshaugen, and Torshov for young professionals; Frogner and Majorstuen for families; and Sagene and Gamle Oslo for more affordable options. In Bergen, Nordnes, Sandviken, and Nygårdshøyden are popular central neighborhoods. Rents in Oslo range from NOK 10,000-18,000/month for a one- to two-bedroom apartment.",
    expectations:
      "Deposits are typically three months' rent, held in a separate deposit account (depositumskonto) at a bank in your name — the landlord cannot legally hold your deposit in their personal account. Combined with the first month's rent, the upfront cost to move in can be NOK 40,000-72,000 (EUR 3,500-6,300). Finn.no is the primary platform for rental listings. Hybel.no is popular for rooms and shared apartments. Most apartments are furnished to a basic level (kitchen with appliances, bathroom), but fully furnished rentals are less common than in Southern Europe. Always get a written rental contract (leiekontrakt) — verbal agreements are legally valid but nearly impossible to enforce."
  },
  healthcareReality:
    "Norway's public healthcare system provides high-quality care to all registered residents. You are assigned a fastlege (regular GP) through HelseNorge.no once you have a fødselsnummer — this is your primary point of contact for all non-emergency health needs. GP visits cost NOK 160-300, specialist visits NOK 350-400, and there is an annual co-payment cap (frikort) of NOK 3,165 (2024), after which all public healthcare is free for the rest of the year. Hospitals including Oslo University Hospital (Rikshospitalet and Ullevål), Haukeland University Hospital in Bergen, and St. Olav's Hospital in Trondheim provide excellent specialized care. Emergency care (legevakt) is available 24/7 in all major cities — you must call 116 117 before showing up unless it is life-threatening (then call 113). Wait times for non-urgent specialist referrals can be four to twelve weeks. Dental care for adults is not covered by the public system and is expensive: a routine checkup costs NOK 800-1,200, and a filling can exceed NOK 2,000. Many Norwegians travel to neighboring countries (Sweden, Poland, Hungary) for dental work.",
  digitalLife: {
    overview:
      "Norway is one of the world's most digitally advanced societies. Cash is used so rarely that many shops, buses, and even street vendors are entirely cashless. Government services are almost exclusively online, accessed through secure login with BankID. The challenge for newcomers is that this digital infrastructure assumes you already have a fødselsnummer and BankID — without them, you are locked out of the system.",
    essentials: [
      "BankID — the universal digital identity for banking, taxes (Altinn), healthcare (HelseNorge), and government services",
      "Vipps — Norway's dominant mobile payment app (equivalent to Swish or MB WAY). Used for splitting bills, paying in shops, and even transactions at flea markets. Requires a Norwegian bank account and BankID.",
      "HelseNorge.no — the national health portal for GP registration, prescriptions, vaccine records, and specialist referrals",
      "Altinn.no — the government's portal for tax returns (selvangivelse), business registration, and official correspondence"
    ],
    whatSurprisesNewcomers: [
      "Many services — from booking a doctor to buying a bus pass to signing a rental contract — require BankID. Without it, you must call, visit in person, or send physical mail, which adds days or weeks to every process.",
      "Cash is effectively extinct in daily life. Many shops, cafes, and public transport systems do not accept cash at all. Carry a card (Visa or Mastercard) from day one.",
      "The tax return (selvangivelse) is pre-filled by Skatteetaten with your income, deductions, and assets. Most Norwegians simply review and approve it online without changes — the system is remarkably transparent.",
      "Digital post (Digipost or e-Boks) replaces physical mail for government correspondence. You must actively check your digital mailbox, as important notices (tax assessments, municipal invoices) arrive there without warning."
    ]
  },
  culture: {
    text: "Norwegian culture is built on egalitarianism (Janteloven), nature worship (friluftsliv), and a reserved social style that prizes honesty and understatement. Hierarchies are extremely flat — in workplaces, the boss is addressed by first name, meetings are consensus-driven, and everyone's opinion carries equal weight regardless of seniority. Norwegians are direct but not confrontational: they will tell you honestly what they think, but without the bluntness that Germans are known for. Social life can feel impenetrable to outsiders because Norwegians typically maintain tight-knit friend groups formed in childhood, school, or university, and expanding those circles is rare. The solution, universally recommended, is to join an organized activity: a sports club, a hiking group, a choir (kor), or a community work event (dugnad). Silence is comfortable in Norway; filling conversational pauses is not expected and can even feel intrusive.",
    highlights: [
      "Friluftsliv: outdoor life is not a hobby but a core identity. Hiking (tur) every weekend, skiing in winter, and spending time at a hytte (cabin) are near-universal. Saying you 'don't like nature' is a social death sentence.",
      "Janteloven: do not brag, show off, or claim superiority. Success should be acknowledged quietly. Driving a flashy car or name-dropping your salary will provoke social distancing, not admiration.",
      "Flat hierarchies: calling your CEO by first name is standard. Decisions are made by consensus. If your manager makes a unilateral decision without consulting the team, that is considered poor leadership.",
      "Buying rounds is unusual: at bars, each person typically buys their own drinks. This is not stinginess — it reflects the egalitarian ethic and the fact that a round of beers costs NOK 500-700 (EUR 45-65).",
      "The 'Kos' factor: similar to Danish hygge, 'kos' describes a feeling of coziness and warmth — candles, a warm drink, thick socks, and being with close friends. It is actively practiced, especially during the dark winter months."
    ]
  },
  transportationMobility:
    "Oslo's public transport (Ruter) includes the T-bane metro (6 lines), trams, buses, and ferries, all accessible via the Ruter app with zone-based ticketing. Bergen has the Bybanen light rail system and buses. Trondheim has a bus-based network (AtB) and the world's only bicycle lift (Trampe). Between cities, NSB/Vy operates intercity trains, including the scenic Bergen Railway (Oslo to Bergen, 7 hours through mountain plateaus) and the Nordland Railway to Bodø. Domestic flights are common due to Norway's extreme geography — flying from Oslo to Tromsø (1,800 km) takes 2 hours versus 19 hours by car. Widerøe operates short-haul flights to small airports along the coast. Hurtigruten coastal express ships run daily from Bergen to Kirkenes, serving as both transport and one of the world's great scenic voyages. Driving is common but expensive: fuel, tolls (bompenger, charged automatically via AutoPASS), and the high cost of vehicle ownership make it a significant expense. Winter tires (piggdekk or piggfrie vinterdekk) are mandatory from November 1 to the first Monday after Easter.",
  internationalConnectivity:
    "Oslo Gardermoen Airport (OSL) is Norway's primary international hub, with direct flights across Europe, to the Middle East, Asia (Bangkok, Delhi), and North America (New York, Miami, Los Angeles via Norwegian or SAS). Bergen Flesland Airport (BGO) handles significant European traffic. Tromsø Airport (TOS) and Stavanger Airport (SVG) serve as regional gateways. SAS (Scandinavian Airlines) and Norwegian Air Shuttle are the dominant carriers. Flight time to London is approximately 2.5 hours; to New York, roughly 8.5 hours. Norway's non-EU/EEA status means customs checks apply when traveling to EU countries with goods above allowances — particularly relevant for the many Norwegians who shop across the Swedish border (harryhandel) to save on groceries, alcohol, and tobacco.",
  travelExploration:
    "Norway's landscapes are among the most dramatic on Earth: the western fjords (Geirangerfjord, Sognefjorden, Nærøyfjord — all UNESCO-listed), the Lofoten Islands with their fishing villages and Northern Lights, the midnight sun of Nordkapp (North Cape, mainland Europe's northernmost point), and the vast Hardangervidda mountain plateau. Iconic hikes include Trolltunga (the 'troll's tongue' rock formation), Preikestolen (Pulpit Rock) overlooking Lysefjorden, and Besseggen Ridge in Jotunheimen. In winter, the Northern Lights are visible from Tromsø and northern Norway from September through March. Cross-country skiing trails are groomed throughout the country, and downhill skiing at resorts like Trysil, Hemsedal, and Myrkdalen is popular. Oslo offers world-class museums (Munch Museum, Viking Ship Museum, National Museum) and a vibrant food scene centered around Mathallen food hall and Aker Brygge. Svalbard, the Arctic archipelago at 78 degrees north, offers polar bear safaris, glacier hikes, and the Global Seed Vault.",
  considerations: [
    "Rental Deposit Costs: The standard deposit is three months' rent, plus the first month's rent upfront. For a typical one-bedroom in Oslo (NOK 13,000/month), this means NOK 52,000 (EUR 4,500) before you have even bought a pillow. This is a significant cash outlay for newcomers who have also paid for flights, moving costs, and winter gear.",
    "Strict Alcohol Regulations: Beverages above 4.7% ABV are sold exclusively at Vinmonopolet (state-run liquor stores), which close at 6:00 PM on weekdays, 3:00 PM on Saturdays, and are closed entirely on Sundays. Supermarkets stop selling beer at 8:00 PM weekdays and 6:00 PM Saturdays. Prices are extreme: a bottle of wine starts at NOK 120 (EUR 10.50), and spirits are roughly three times European average prices. These are not suggestions — the rules are absolute.",
    "Customs and Import Duties: Norway is in the EEA but not the EU. Ordering goods online from Amazon, Zalando, or other EU-based shops triggers Norwegian VAT (25%) and customs duties on items exceeding NOK 350. Delivery times are longer, and the added costs can increase the price by 30-50%. Always check customs implications before ordering.",
    "Winter Darkness: In northern Norway (above the Arctic Circle), the polar night (mørketid) means zero sunlight for weeks in December-January. Even in Oslo, the sun rises at 9:15 AM and sets at 3:00 PM in mid-December. Seasonal Affective Disorder is real and widely acknowledged — many Norwegians use daylight lamps, take Vitamin D supplements (tran/cod liver oil is a national tradition), and plan winter sun holidays to cope.",
    "Sunday Closings: Almost all shops, including grocery stores, are closed on Sundays. Only small convenience stores (Narvesen, Deli de Luca, Joker Nærbutikk) remain open with limited hours and higher prices. Plan your shopping for Saturday — there are no exceptions."
  ],
  mistakes: [
    "Assuming Norway is in the EU. Norway is in the EEA (European Economic Area), which grants EU-like freedom of movement for EEA citizens but means separate customs rules, no euro currency (Norway uses the krone, NOK), and different import regulations. This distinction affects shopping, importing goods, and even some work permit processes.",
    "Underestimating the cost of eating out. A basic restaurant burger with a beer will cost NOK 350-450 (EUR 30-40). A mid-range dinner for two with wine exceeds NOK 1,500 (EUR 130). Most Norwegians cook at home during the week and treat eating out as an occasional splurge. Budget accordingly.",
    "Wearing inadequate clothing. 'Det finnes ikke dårlig vær, bare dårlige klær' (there is no bad weather, only bad clothes) is not a cute saying — it is a lifestyle mandate. If you complain about the rain or cold without wearing proper layers, waterproof shells, and sturdy footwear, Norwegians will judge your preparation, not the weather.",
    "Expecting social initiation from Norwegians. Unlike Southern European or Latin American cultures, Norwegians do not approach strangers for conversation. If you want to build a social life, you must actively join something: a sports club, a hiking group (DNT — Den Norske Turistforening), a language course, a kor (choir), or organize a dugnad (community work event) in your building.",
    "Not having cash alternatives ready on day one. Norway is essentially cashless. If you arrive without a card that works internationally (Visa or Mastercard debit), you cannot buy a coffee, take a bus, or shop for groceries. Apple Pay and Google Pay work at most terminals. Ensure your foreign bank card has no foreign transaction fees or bring a prepaid travel card."
  ],
  emergency: [
    {
      number: '112',
      service: 'Police (Politi)',
      description: 'For life-threatening situations, crimes in progress, and immediate threats to safety. Operators speak Norwegian and English.'
    },
    {
      number: '110',
      service: 'Fire Department (Brannvesen)',
      description: 'For fires, traffic accidents with trapped persons, chemical spills, and environmental emergencies.'
    },
    {
      number: '113',
      service: 'Ambulance (AMK)',
      description: 'For acute medical emergencies requiring immediate response. Do not call for general illness — use 116 117 instead.'
    }
  ],
  sources: [
    {
      name: 'UDI (Utlendingsdirektoratet)',
      category: 'Immigration',
      description: 'The Norwegian Directorate of Immigration. Processes all residence and work permit applications, asylum cases, and citizenship. The authoritative source for visa requirements.',
      link: 'https://www.udi.no/en/'
    },
    {
      name: 'Skatteetaten (Norwegian Tax Administration)',
      category: 'Tax & Population Registration',
      description: 'Handles population registration (folkeregistrering), tax deduction cards, identity numbers (fødselsnummer/D-number), and annual tax returns.',
      link: 'https://www.skatteetaten.no/en/person/'
    },
    {
      name: 'NAV (Arbeids- og velferdsetaten)',
      category: 'Employment & Welfare',
      description: 'Norwegian Labour and Welfare Administration. Manages unemployment benefits, sick leave, parental leave, child benefits, and the public employment service.',
      link: 'https://www.nav.no/en'
    },
    {
      name: 'HelseNorge',
      category: 'Healthcare',
      description: 'The national health portal for GP registration, prescriptions, vaccine records, and digital health services. The first place to go for healthcare setup after registration.',
      link: 'https://www.helsenorge.no/en/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa and residency matters, and official guidance related to Norway, consult the Norwegian Ministry of Foreign Affairs or a Norwegian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/norway',
    mfaLink: 'https://www.regjeringen.no/en/dep/ud/id833/'
  },
  serviceDirectory: {
    title: "Service Directory - Norway",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Norway.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance with residence permits, work permits, family immigration, and employer immigration processes in Norway.",
        providers: [
          { name: "Fragomen Norway", link: "https://www.fragomen.com" },
          { name: "Advokatfirmaet Selmer", link: "https://www.selmer.no/en" },
          { name: "PwC Immigration Services Norway", link: "https://www.pwc.no/en.html" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Major brokerage chains for property purchases and rental platforms for finding housing across Norway.",
        providers: [
          { name: "Finn.no (Rentals & Sales)", link: "https://www.finn.no/realestate/" },
          { name: "DNB Eiendom", link: "https://dnbeiendom.no/" },
          { name: "EiendomsMegler 1", link: "https://www.eiendomsmegler1.no/" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Advisory firms for Norwegian tax rules, cross-border employment, and self-employment tax questions.",
        providers: [
          { name: "KPMG Norway", link: "https://kpmg.com/no/en/home.html" },
          { name: "EY Norway", link: "https://www.ey.com/no_no" },
          { name: "Grant Thornton Norway", link: "https://www.grantthornton.no" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including packing, shipping, customs clearance, and storage.",
        providers: [
          { name: "Crown Relocations Norway", link: "https://www.crownrelo.com" },
          { name: "Allied Van Lines", link: "https://www.allied.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Norwegian language courses for newcomers, from beginner to advanced, including government-subsidized integration programs.",
        providers: [
          { name: "Folkeuniversitetet", link: "https://www.folkeuniversitetet.no/en/courses-in-english/norwegian-courses" },
          { name: "Berlitz Norway", link: "https://www.berlitz.com/en-no" },
          { name: "Lingu (Online Norwegian)", link: "https://lingu.no/en/" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public health portal and major private healthcare providers for clinics, specialists, and diagnostics.",
        providers: [
          { name: "HelseNorge (Official Portal)", link: "https://www.helsenorge.no/en/" },
          { name: "Volvat Medisinske Senter", link: "https://www.volvat.no/" },
          { name: "Aleris Norway", link: "https://www.aleris.no/" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Public employment services and major recruiters for job searching and staffing in Norway.",
        providers: [
          { name: "NAV Arbeidsplassen", link: "https://arbeidsplassen.nav.no/" },
          { name: "Finn.no Jobs", link: "https://www.finn.no/job/browse.html" },
          { name: "Manpower Norway", link: "https://www.manpower.no/en" }
        ]
      }
    ]
  }
};
