export const sweden = {
  id: 'sweden',
  slug: 'sweden',
  name: 'Sweden',
  region: 'Europe',
  complexity: 'Low',
  languages: ['Swedish', 'English'],
  shortDescription: 'Innovation meets nature in this organized, progressive Nordic nation.',
  heroImage: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11',
  flagAlt: 'Flag of Sweden',
  atAGlance: "Sweden is a society built on the twin pillars of individual autonomy and collective responsibility. It is highly modernized and digital — cash is nearly extinct, and almost all interaction with the state happens online through BankID-authenticated portals — yet it remains deeply connected to the natural world through the concept of 'allemansrätten' (the right of public access), which allows anyone to walk, camp, and forage on any land, even privately owned, as long as they cause no damage. Daily life is structured, punctual, and efficient. The famous 'Swedish Model' extends beyond economics to social trust: citizens trust the state to provide cradle-to-grave welfare (parental leave of 480 days per child, universal healthcare, free university education), and the state trusts citizens to contribute through high taxes without excessive enforcement. The culture of 'lagom' — just the right amount, not too much, not too little — permeates everything from portion sizes to salary expectations to social behavior. For newcomers, the country feels incredibly safe, clean, and functional, but often socially reserved. Swedes are polite, speak excellent English, and are helpful when asked, but they rarely initiate contact with strangers. Building genuine friendships requires patience, shared activities, and the understanding that Swedish social life is planned weeks in advance — spontaneous 'drop by' visits are unwelcome. The housing crisis in Stockholm is severe, with first-hand rental queues exceeding 10-15 years, and the Personnummer (personal identity number) acts as a gatekeeper to virtually every service in the country.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'High',
    primaryLanguages: 'Swedish (Official), English (Widely spoken)',
  },
  visas: [
    {
      name: 'Work Permit (Arbetstillstånd)',
      targetAudience: 'Non-EU Workers with a Job Offer',
      useCase: 'For non-EU/EEA citizens with a confirmed job offer from a Swedish employer. The employer must advertise the position in Sweden and the EU for at least 10 days. The role must meet minimum salary requirements (currently at least SEK 27,360/month before tax) and provide conditions equivalent to Swedish collective agreements. Processing times at Migrationsverket average two to six months.',
      duration: 'Up to 2 years (renewable, path to permanent residency after 4 years)',
      link: 'https://www.migrationsverket.se/English/Private-individuals/Working-in-Sweden/Employed/How-to-apply.html'
    },
    {
      name: 'EU/EEA Registration',
      targetAudience: 'EU/EEA Citizens',
      useCase: 'EU/EEA citizens have the right to live and work in Sweden without a permit. However, to access public services, you must register with Skatteverket (Tax Agency) for population registration (folkbokföring) and obtain a Personnummer. This requires proof of employment, self-employment, or sufficient funds and health insurance.',
      duration: 'Indefinite (as long as conditions are met)',
      link: 'https://www.skatteverket.se/servicelankar/otherlanguages/inenglish/individualsandemployees/movingtosweden.4.5c1163881590be297b5c4066.html'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists, Short-term Business Visitors',
      useCase: 'For non-EU citizens requiring a visa to enter the Schengen area for tourism, family visits, or short business meetings. Applied for at the Swedish embassy or VFS Global center.',
      duration: 'Up to 90 days within a 180-day period',
      link: 'https://www.migrationsverket.se/English/Private-individuals/Visiting-Sweden.html'
    },
    {
      name: 'Working Holiday Visa',
      targetAudience: 'Young Adults (18-30)',
      useCase: 'Available to citizens of Australia, New Zealand, South Korea, Japan, Canada, Chile, Argentina, and Hong Kong. Allows work and travel in Sweden for up to one year. Requires proof of sufficient funds and return transportation.',
      duration: 'Up to 1 year (non-renewable)',
      link: 'https://www.migrationsverket.se/English/Private-individuals/Working-in-Sweden/Employed/Special-rules-for-certain-occupations-and-citizens-of-certain-countries/Working-holiday-visa.html'
    },
    {
      name: 'Self-Employment Permit',
      targetAudience: 'Entrepreneurs, Freelancers',
      useCase: 'For non-EU/EEA nationals who want to run their own business in Sweden. Requires a viable business plan, sufficient funding (at least SEK 200,000), relevant experience, and proof that the business can support you financially. Processing is thorough and can take several months.',
      duration: 'Up to 2 years (renewable)',
      link: 'https://www.migrationsverket.se/English/Private-individuals/Working-in-Sweden/Self-employment.html'
    }
  ],
  requirements: [
    {
      title: 'Personal Identity Number (Personnummer)',
      explanation: 'The ten- or twelve-digit number (YYMMDD-XXXX) is the absolute core of Swedish society. It is assigned by Skatteverket upon population registration (folkbokföring) and tracks everything from healthcare records to tax payments, gym memberships, and library cards.',
      importance: 'Without a Personnummer, you exist in a functional limbo. You cannot get full mobile phone contracts (only prepaid), sign up for most internet providers, join loyalty programs, access non-emergency healthcare easily, or open a fully functional bank account. Even ordering a package for home delivery can be complicated. It is the key that unlocks BankID, which in turn unlocks every digital service. Getting a Personnummer requires proving you intend to stay in Sweden for at least one year — typically via an employment contract and a registered address.',
      link: 'https://www.skatteverket.se/servicelankar/otherlanguages/inenglish/individualsandemployees/movingtosweden.4.5c1163881590be297b5c4066.html'
    },
    {
      title: 'Population Registration (Folkbokföring)',
      explanation: 'Registering as a resident in Sweden with Skatteverket (the Swedish Tax Agency). This is the step that establishes you as living in Sweden (not just visiting) and is what triggers access to a Personnummer. You must visit a Skatteverket office in person with your passport, work permit or EU right of residence documentation, employment contract, and proof of your Swedish address.',
      importance: 'Without being folkbokförd, you may be legally allowed to stay but remain functionally blocked from Swedish daily life: no Personnummer means no BankID, which means no full banking, no digital government access, and severely limited services. Processing typically takes two to eight weeks, though longer delays occur during high-volume periods (autumn, when many international students and workers arrive).',
      link: 'https://www.skatteverket.se/servicelankar/otherlanguages/inenglish/individualsandemployees/movingtosweden.4.5c1163881590be297b5c4066.html'
    },
    {
      title: 'Swedish ID Card (Identitetskort)',
      explanation: 'Once you have a Personnummer, you must book an appointment at Skatteverket to apply for a physical ID card. Bring your passport and proof of Personnummer. The card takes two to three weeks to produce and must be picked up in person.',
      importance: 'You need this physical card to prove your identity when opening a bank account (your passport alone is often not accepted by Swedish banks for this purpose), picking up packages at postal agents (Ombud), signing contracts in person, and as backup identification. It is the bridge between your Personnummer and BankID.',
      link: 'https://www.skatteverket.se/servicelankar/otherlanguages/inenglish/individualsandemployees/livinginsweden/idcard.4.2b54391314216bae9777555.html'
    },
    {
      title: 'BankID',
      explanation: 'A digital identification app installed on your smartphone, issued through a Swedish bank once you have a Swedish ID card and bank account. Used to log into your bank, Skatteverket (tax), Försäkringskassan (social insurance), 1177 Vårdguiden (healthcare), digital mailboxes (Kivra), and to sign contracts, verify purchases, and vote in referendums.',
      importance: 'BankID is your digital citizenship. Living in Sweden without BankID means doing everything via paper forms, phone calls, and physical visits to offices — which is increasingly difficult as services assume everyone has it. The dependency chain is: Personnummer → Swedish ID Card → Bank Account → BankID. This sequence can take three to six months from arrival to completion. Start the process immediately.',
      link: 'https://www.bankid.com/en/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Sweden has a stable, innovation-driven economy with global leaders in tech (Spotify, Klarna, Ericsson, King), automotive (Volvo, Scania), pharmaceuticals (AstraZeneca), and retail (IKEA, H&M). The labor market is highly unionized (approximately 70% union membership), and collective agreements (kollektivavtal) set wages and working conditions in most sectors. Hiring is structured, reference-driven, and often slow.",
    whereToLook: [
      "LinkedIn — the primary platform for professional and international roles, particularly in tech and consulting",
      "Arbetsförmedlingen (Swedish Public Employment Service) — the government job portal, important for public sector and regulated roles",
      "Platsbanken — the Public Employment Service's job listings database, integrated with Arbetsförmedlingen",
      "Academic Work, Randstad, and Adecco — major staffing agencies widely used for temporary, contract, and permanent placements",
      "Company career pages: Spotify, Klarna, Ericsson, Volvo, AstraZeneca, and other Swedish multinationals post directly"
    ],
    realityChecks: [
      "Swedish language significantly increases your opportunities, even at international companies. Internal meetings, Slack channels, and social interactions often default to Swedish, and many mid-level and senior roles explicitly require it.",
      "References are taken seriously and checked thoroughly. Swedish employers will call your listed references — and sometimes ask for additional ones. Poor or unavailable references are a red flag.",
      "Your employment contract is the key that unlocks the entire administrative chain: Personnummer, BankID, housing, and healthcare. A weak contract (short-term, part-time, or through a staffing agency) makes everything harder.",
      "The 'last in, first out' (sist in, först ut) principle governs layoffs under Swedish employment law (LAS — Lagen om anställningsskydd). As a recent hire, you are among the first to be let go during restructuring, regardless of performance."
    ]
  },
  salaryReality: {
    overview:
      "Swedish salaries are transparent and relatively compressed — the gap between high and low earners is narrower than in most countries. The median monthly salary is approximately SEK 36,000 (EUR 3,200) before tax. There is no statutory minimum wage; minimums are set by collective agreements. High marginal tax rates (municipal tax of 29-35% plus state tax of 20% on income above SEK 613,900) mean that net pay is significantly lower than gross figures suggest.",
    realityChecks: [
      "A gross salary of SEK 45,000/month yields approximately SEK 33,000-35,000 net after municipal tax (no state tax at this level). Use ekonomifakta.se or skatteverket.se salary calculator to estimate your take-home.",
      "Employer social contributions (arbetsgivaravgifter) add approximately 31.42% on top of your gross salary — paid by the employer, not deducted from your pay. This funds pension, health insurance, unemployment insurance, and parental leave.",
      "Occupational pension (tjänstepension) is a significant part of total compensation. Under collective agreements, employers contribute 4.5-30% of salary depending on the scheme and your earnings level. Always factor this in when comparing offers.",
      "The salary gap between Stockholm and smaller cities (Malmö, Gothenburg, Linköping, Umeå) is smaller than in many countries, but Stockholm's housing costs dramatically reduce the purchasing power advantage."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Municipal tax (kommunalskatt) varies by municipality: Stockholm city is 30.24%, Malmö is 32.67%, Gothenburg is 32.28%. This directly affects net pay.",
      "Housing costs: Stockholm rents are SEK 8,000-15,000/month for a one-bedroom on the second-hand market; first-hand contracts (hyresrätt) are far cheaper but require 10-15 years on the queue",
      "The pension system: beyond the statutory pension, occupational pension (tjänstepension) and private savings (IPS/ISK accounts) are expected. Relying only on the state pension provides a modest retirement.",
      "Union membership fees (approximately SEK 200-400/month) and A-kassa (unemployment insurance fund, approximately SEK 100-150/month) are practically mandatory for full labor market protection"
    ]
  },
  housingSystem: {
    overview:
      "Sweden's housing market is one of its most challenging aspects for newcomers. First-hand rental contracts (förstahandskontrakt/hyresrätt) in Stockholm, Gothenburg, and Malmö are allocated through municipal housing queues — Bostadsförmedlingen in Stockholm has over 700,000 registered applicants, and average wait times for a central Stockholm apartment exceed 10-15 years. Most newcomers rely on regulated second-hand sublets (andrahandsuthyrning), purchasing a bostadsrätt (co-operative apartment, requiring a 15% down payment), or renting privately through platforms. Popular areas in Stockholm include Södermalm for its bohemian character, Vasastan for families, Kungsholmen for professionals, and Solna and Sundbyberg for more affordable options. In Gothenburg, Linné and Haga are popular central neighborhoods; in Malmö, Möllevångstorget and Västra Hamnen.",
    expectations:
      "Expect intense competition and the need for patience. Second-hand sublets typically require one to three months' rent as deposit. Scam prevention is critical: never pay rent before viewing the property and verifying the subletter's identity and right to sublet (they need written permission from their landlord or bostadsrättsförening). Platforms include Blocket Bostad, Qasa, and Bostadsdirekt. Furnished sublets are common but more expensive. Purchasing a bostadsrätt requires mortgage pre-approval, a 15% down payment, and approval by the housing cooperative (bostadsrättsförening)."
  },
  healthcareReality:
    "Sweden's public healthcare system provides high-quality care funded through taxes. You access the system through your local vårdcentral (health center), where you register as a patient once you have a Personnummer. GP visits cost SEK 200-350, specialist visits SEK 350-400, and hospital stays SEK 120/day. There is an annual co-payment cap (högkostnadsskydd) of SEK 1,300, after which all care is free for the rest of the 12-month period. Prescription medications have a separate annual cap of SEK 2,800. Emergency care is available 24/7 at hospitals including Karolinska Universitetssjukhuset in Stockholm (one of Europe's premier research hospitals), Sahlgrenska Universitetssjukhuset in Gothenburg, and Skånes Universitetssjukhus in Malmö/Lund. The 1177 Vårdguiden helpline and website provide 24/7 medical advice in Swedish (English-speaking nurses available in some regions). Wait times for non-urgent specialist care (dermatology, orthopedics, mental health) can be long — three to six months is not uncommon, which is why many employers offer private healthcare supplementary insurance (privatsjukvårdsförsäkring) as a benefit.",
  digitalLife: {
    overview:
      "Sweden is one of the world's most cashless and digitally integrated societies. Virtually all public and private services are accessible online, authenticated through BankID. Physical cash is accepted at fewer and fewer places — many shops, restaurants, and even street vendors display 'Vi tar inte kontanter' (we do not accept cash) signs. The country's digital infrastructure is excellent, but it assumes you already have a Personnummer and BankID.",
    essentials: [
      "BankID — the universal digital identity used for banking, government services (Skatteverket, Försäkringskassan), healthcare (1177), and even signing rental contracts",
      "Swish — Sweden's ubiquitous mobile payment app, linked to BankID and your bank account. Used for splitting bills, paying at farmers' markets, and even some shops. Requires a Swedish bank account and phone number.",
      "1177 Vårdguiden — the national healthcare portal and phone line. Book appointments, view test results, renew prescriptions, and get medical advice.",
      "Kivra — Sweden's leading digital mailbox. Government agencies, insurance companies, and employers send official correspondence here instead of physical mail. Check it regularly."
    ],
    whatSurprisesNewcomers: [
      "Many services assume you already have BankID from day one. Without it, you are locked out of online banking, government portals, healthcare booking, and digital mailboxes — forced to use paper forms and phone calls that add days or weeks to every process.",
      "Cash is effectively dead in Swedish daily life. Many cafes, shops, and public transport systems do not accept cash at all. Carry a Visa or Mastercard debit/credit card from day one, and set up Apple Pay or Google Pay if possible.",
      "Opening a Swedish bank account can be the slowest and most frustrating early step. Banks (SEB, Handelsbanken, Nordea, Swedbank) have strict AML (anti-money laundering) checks and may require multiple visits, extensive documentation, and weeks of processing.",
      "The tax return is pre-filled: Skatteverket automatically compiles your income, deductions, and tax liability. Most Swedes approve their return with a single BankID signature, often without changing anything. If your financial situation is simple, filing takes 30 seconds."
    ]
  },
  culture: {
    text: "Swedish culture is defined by 'lagom' (just the right amount — not too much, not too little) and a pervasive respect for personal space, consensus, and work-life balance. Hierarchies are almost invisible: bosses are addressed by first name, meetings seek consensus rather than top-down decisions, and individual status displays are met with quiet disapproval rather than admiration. Fika — the daily coffee break, typically with a pastry (kanelbulle/cinnamon bun is the classic) — is not optional; it is a social ritual that lubricates workplace relationships and friendships alike. Declining a fika invitation can be perceived as antisocial. Swedes speak excellent English but socialize primarily in Swedish, and breaking into established social circles can take years. The most reliable entry points are organized activities: sports clubs (föreningar), language exchange meetups, and volunteer organizations.",
    highlights: [
      "Fika is sacred: the daily coffee ritual (usually mid-morning and mid-afternoon) is a core social institution. In workplaces, skipping fika signals that you do not value the team. Always join.",
      "Lagom governs everything: moderation is the ideal. Taking too much food at a shared meal, talking too loudly, or bragging about achievements all violate the lagom principle. Understatement is preferred.",
      "Punctuality is absolute: arriving at 10:03 for a 10:00 meeting is noticed and silently judged. Swedes plan schedules precisely and expect others to do the same.",
      "Remove shoes when entering any home. This is universal and non-negotiable in Sweden. Hosts may provide guest slippers (tofflor).",
      "Allemansrätten (Right of Public Access): you can walk, camp, and pick berries or mushrooms on any land — including private property — as long as you do not damage crops, gardens, or approach within sight of a home. This right is treasured and taken seriously."
    ]
  },
  transportationMobility:
    "Stockholm's public transport (SL — Storstockholms Lokaltrafik) includes the Tunnelbana metro (three lines, 100 stations, many with famous art installations), commuter trains (Pendeltåg), buses, trams, and ferries. The SL Access card or SL app provides zone-based ticketing. Gothenburg has an extensive tram network (Västtrafik), and Malmö relies on buses and the Citytunnel regional rail connection to Copenhagen. Between cities, SJ (Statens Järnvägar) operates high-speed X2000 trains: Stockholm to Gothenburg takes approximately three hours, Stockholm to Malmö about 4.5 hours. Budget alternatives include FlixBus and Vy (formerly Nettbuss). Cycling is a primary mode of transport in all Swedish cities — dedicated bike lanes are well-maintained, and bike rental systems (Stockholm City Bikes) are widely used. Driving is common outside urban areas; Swedish roads are well-maintained but winter driving requires studded or studless winter tires from December 1 to March 31 (or when winter conditions exist). The Öresund Bridge connects Malmö to Copenhagen, making cross-border commuting common.",
  internationalConnectivity:
    "Stockholm Arlanda Airport (ARN) is Sweden's primary international hub, with direct flights across Europe, to North America (New York, Chicago, Los Angeles, Miami via SAS), Asia (Bangkok, Tokyo, Beijing), and the Middle East. Gothenburg Landvetter Airport (GOT) handles European traffic and select long-haul routes. Malmö Sturup Airport (MMX) serves regional routes, while many Malmö residents use Copenhagen Kastrup Airport (CPH), just 20 minutes by train across the Öresund Bridge. SAS (Scandinavian Airlines) is the flag carrier and Star Alliance member. Norwegian Air Shuttle and budget carriers like Ryanair, Wizz Air, and Eurowings serve European routes from multiple Swedish airports. Flight time to London is approximately 2.5 hours; to New York, roughly 8.5 hours.",
  travelExploration:
    "Sweden offers extraordinary natural diversity: the Stockholm Archipelago (30,000 islands accessible by ferry), the ice hotel in Jokkmokk and Kiruna in Swedish Lapland, the Northern Lights (visible from October through March above the Arctic Circle), the medieval walled city of Visby on Gotland (UNESCO World Heritage), the hiking trails of Kungsleden (the King's Trail, 440 km through Arctic wilderness), and the forests and lakes of Dalarna (traditional Swedish heartland with midsummer celebrations). Stockholm's Gamla Stan (Old Town), Vasa Museum (a preserved 17th-century warship), and Skansen open-air museum are world-class cultural attractions. The Icehotel in Jukkasjärvi, rebuilt entirely from ice each winter, is a unique experience. Weekend trips to Copenhagen (35 minutes by train from Malmö), Oslo (6 hours by train from Stockholm), and Helsinki (overnight ferry from Stockholm) are popular Nordic escapes.",
  considerations: [
    "The 'Banking Catch-22': You need a bank account to get BankID. You need a Swedish ID card to open a bank account. You need a Personnummer to get the ID card. You need a registered address and employment to get a Personnummer. This dependency chain can take three to six months to complete. Plan for this period with a functional international debit card, a prepaid Swedish SIM, and patience.",
    "Housing Crisis: First-hand rental contracts in Stockholm require 10-15 years in the municipal queue (Bostadsförmedlingen). Gothenburg and Malmö queues are shorter but still multi-year. Most newcomers rely on expensive second-hand sublets (andrahandsuthyrning) at SEK 10,000-18,000/month for a one-bedroom in Stockholm, or they purchase a bostadsrätt (cooperative apartment) with a 15% down payment.",
    "Winter Darkness: In Stockholm, the sun rises at approximately 8:40 AM and sets at 2:50 PM at the winter solstice. In Kiruna (northern Sweden), the polar night means no sunlight at all for several weeks in December-January. Seasonal Affective Disorder is widely acknowledged — most Swedes take Vitamin D supplements, use daylight therapy lamps, and actively seek outdoor light during the limited daylight hours.",
    "Cashless Society: Sweden is further along the cashless transition than almost any other country. Many shops, cafes, public toilets, and laundromats do not accept cash. Even church collections and flea markets use Swish. If you do not have a Swedish bank account with Swish and BankID, carry an international Visa or Mastercard at all times.",
    "Systembolaget (Alcohol Monopoly): Beverages above 3.5% ABV are sold exclusively at Systembolaget, the state-run liquor monopoly. Stores close at 7:00 PM on weekdays, 3:00 PM on Saturdays, and are closed on Sundays and public holidays. Prices are high by international standards. Plan your purchases ahead, as there are no alternatives."
  ],
  mistakes: [
    "Assuming you can find an apartment after arrival. You must secure temporary housing (an Airbnb, a friends' couch, or a short-term sublet) for at least one to two months before arriving. Searching for housing remotely using Blocket, Qasa, and Facebook groups should start weeks before your move date.",
    "Underestimating Skatteverket processing times. Getting a Personnummer can take four weeks to four months depending on caseload, documentation completeness, and the time of year. Autumn (August-October) is the busiest period due to international students and new employees arriving simultaneously.",
    "Trying to socialize spontaneously. Swedes plan social activities weeks in advance. 'Want to grab coffee sometime?' means you should propose a specific date. Showing up at someone's home unannounced is a serious social violation. Make friends through organized activities: sports clubs (föreningar), language cafés, and meetup groups.",
    "Walking in the bike lane. Swedish cities have clearly marked bike lanes (cykelbanor) separated from pedestrian paths. Stepping into the bike lane will trigger aggressive bell-ringing, shouted warnings, and occasionally near-collisions. Cyclists move fast and expect the lane to be clear.",
    "Ignoring the queue culture. Swedes are meticulous about queuing. Many shops, pharmacies (Apotek), and service centers use a ticket number system (nummerlapp). Taking a number and waiting your turn is absolute. Skipping or even appearing to skip the queue provokes visible displeasure."
  ],
  emergency: [
    {
      number: '112',
      service: 'National Emergency (SOS Alarm)',
      description: 'Police, ambulance, fire, and rescue. Operated by SOS Alarm. Available 24/7. Operators speak Swedish and English. Works from any phone, including locked devices without a SIM card.'
    },
    {
      number: '114 14',
      service: 'Police (Non-Emergency)',
      description: 'For reporting crimes that are not in progress, providing tips, or making general inquiries to the Swedish Police (Polisen). Available 24/7.'
    },
    {
      number: '1177',
      service: 'Healthcare Advice (Vårdguiden)',
      description: '24/7 medical advice line staffed by registered nurses. They assess your symptoms and direct you to the appropriate level of care: self-care, vårdcentral (GP), or emergency room. Also available as a comprehensive healthcare website and app.'
    }
  ],
  sources: [
    {
      name: 'Migrationsverket (Swedish Migration Agency)',
      category: 'Immigration',
      description: 'The authority responsible for all work permits, residence permits, asylum applications, and citizenship in Sweden. The definitive source for visa requirements and processing times.',
      link: 'https://www.migrationsverket.se/English/Startpage.html'
    },
    {
      name: 'Skatteverket (Swedish Tax Agency)',
      category: 'Tax & Population Registration',
      description: 'Handles population registration (folkbokföring), Personnummer issuance, Swedish ID cards, tax returns, and tax deduction tables.',
      link: 'https://www.skatteverket.se/servicelankar/otherlanguages/inenglish.4.12815e4f14a62bc048f4edc.html'
    },
    {
      name: 'Försäkringskassan (Swedish Social Insurance Agency)',
      category: 'Social Insurance',
      description: 'Administers parental leave (föräldrapenning), sick pay, child benefits (barnbidrag), housing allowance, and other social insurance benefits.',
      link: 'https://www.forsakringskassan.se/english'
    },
    {
      name: 'Krisinformation.se',
      category: 'Crisis Information',
      description: 'Emergency information portal from Swedish authorities. Provides real-time updates during crises, severe weather, and public safety threats.',
      link: 'https://www.krisinformation.se/en'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Sweden, consult the Swedish Ministry for Foreign Affairs or a Swedish embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/sweden',
    mfaLink: 'https://www.government.se/government-of-sweden/ministry-for-foreign-affairs/'
  },
  serviceDirectory: {
    title: "Service Directory - Sweden",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Sweden.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for work permits, residence permits, EU registration, and immigration appeals.",
        providers: [
          { name: "Fragomen Sweden", link: "https://www.fragomen.com" },
          { name: "Magnusson Advokatbyrå", link: "https://www.magnussonlaw.com" },
          { name: "PwC Immigration Services Sweden", link: "https://www.pwc.se" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Platforms and agencies for purchasing bostadsrätter (cooperative apartments) and finding rental sublets.",
        providers: [
          { name: "Hemnet", link: "https://www.hemnet.se" },
          { name: "Blocket Bostad", link: "https://bostad.blocket.se" },
          { name: "Qasa (Sublets)", link: "https://www.qasa.se" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Swedish tax rules, employer social contributions, and cross-border income.",
        providers: [
          { name: "KPMG Sweden", link: "https://kpmg.com/se" },
          { name: "EY Sweden", link: "https://www.ey.com/se_se" },
          { name: "Grant Thornton Sweden", link: "https://www.grantthornton.se" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including packing, shipping, and storage.",
        providers: [
          { name: "Crown Relocations Sweden", link: "https://www.crownrelo.com" },
          { name: "Allied Van Lines", link: "https://www.allied.com" },
          { name: "Alfa Moving", link: "https://www.alfamoving.se" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Swedish language courses, from government-funded SFI for immigrants to private intensive programs.",
        providers: [
          { name: "SFI (Svenska för Invandrare)", link: "https://www.informationsverige.se/en/jag-har-fatt-uppehallstillstand/samhallsorientering/att-lara-sig-svenska/" },
          { name: "Folkuniversitetet", link: "https://www.folkuniversitetet.se" },
          { name: "Berlitz Sweden", link: "https://www.berlitz.com/sv-se" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public healthcare portals and private healthcare providers for clinics, specialists, and diagnostics.",
        providers: [
          { name: "1177 Vårdguiden", link: "https://www.1177.se" },
          { name: "Capio", link: "https://capio.se" },
          { name: "Aleris Sweden", link: "https://www.aleris.se" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Public employment services and recruitment firms connecting professionals with Swedish employers.",
        providers: [
          { name: "Arbetsförmedlingen", link: "https://arbetsformedlingen.se/other-languages/english-engelska" },
          { name: "Academic Work", link: "https://www.academicwork.se" },
          { name: "Manpower Sweden", link: "https://www.manpower.se" }
        ]
      }
    ]
  }
};
