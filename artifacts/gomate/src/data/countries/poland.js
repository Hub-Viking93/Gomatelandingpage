export const poland = {
  id: 'poland',
  slug: 'poland',
  name: 'Poland',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Polish', 'English'],
  shortDescription: 'Rapidly modernizing nation with deep history and vibrant cities.',
  heroImage: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=2069&auto=format&fit=crop',
  flagAlt: 'Flag of Poland',
  atAGlance: "Poland has undergone one of the most remarkable economic transformations in modern European history. Since joining the EU in 2004, its cities have modernized dramatically while retaining deep cultural roots. Warsaw is a booming tech and business hub with gleaming skyscrapers rising alongside painstakingly reconstructed Old Town streets. Krakow is the cultural heart, with one of Europe's most beautiful medieval squares, a thriving restaurant scene, and a large international student and expat population. Wroclaw, Gdansk, Poznan, and Lodz each have distinct personalities and growing international communities. Poles are hospitable but direct—complaining ('narzekanie') is a national pastime and a bonding mechanism, not a sign of unhappiness. The concept of 'Gosc w dom, Bog w dom' (a guest in the house is God in the house) means visitors are treated generously, with food and drink pressed upon you relentlessly. The cost of living is significantly lower than Western Europe, though it has been rising, particularly in Warsaw. Life is efficient and increasingly digital: BLIK mobile payments, the Profil Zaufany digital identity system, and modern banking apps make daily transactions seamless. The Polish language is notoriously difficult (seven grammatical cases, complex pronunciation), but English proficiency among younger Poles is high, especially in cities. Winter is genuine—temperatures drop well below zero, daylight hours shrink to eight, and the smog in Krakow and southern cities from coal heating can be oppressive. For those willing to learn even basic Polish, the warmth and depth of Polish culture opens up remarkably.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'Low-Medium',
    primaryLanguages: 'Polish (English common in cities)',
  },
  visas: [
    {
      name: 'Type D National Visa',
      targetAudience: 'Non-EU citizens planning long-term stays',
      useCase: 'Required for stays exceeding 90 days for purposes including work, study, family reunification, or business activity. Applied for at a Polish consulate in your country of residence. Processing takes 15-60 days depending on the consulate. Requires supporting documents specific to the purpose of stay (work permit, university enrollment, etc.).',
      duration: 'Up to 1 year',
      link: 'https://www.gov.pl/web/diplomacy/visas'
    },
    {
      name: 'Poland Business Harbour',
      targetAudience: 'IT specialists, startup founders, and tech professionals',
      useCase: 'A fast-track visa and relocation program originally designed for IT professionals from Belarus, but expanded to include citizens of multiple countries. Provides streamlined visa processing, work permit facilitation, and access to Polish tech ecosystem support. Particularly popular with software developers, project managers, and tech entrepreneurs relocating from Eastern Europe and Central Asia.',
      duration: 'Fast-track work permit with renewable residence',
      link: 'https://www.gov.pl/web/poland-businessharbour-en'
    },
    {
      name: 'EU Blue Card',
      targetAudience: 'Highly qualified workers with job offers',
      useCase: 'For non-EU citizens with a university degree and a job offer with a gross annual salary above the Polish threshold (approximately 1.5x the average gross salary). Provides enhanced intra-EU mobility and a path to permanent residence. Application is submitted to the Voivode (provincial governor) through the local Urząd Wojewódzki (Voivodeship Office).',
      duration: 'Up to 3 years, renewable',
      link: 'https://udsc.gov.pl/en/'
    },
    {
      name: 'Temporary Residence and Work Permit (Zezwolenie na Pobyt Czasowy i Pracę)',
      targetAudience: 'Non-EU employees in Poland',
      useCase: 'The standard combined work and residence permit for non-EU citizens employed by Polish companies. The employer must first obtain a labor market test (informacja starosty) unless the role is exempt. Application is submitted to the Voivodeship Office and processing times vary from 1-6 months depending on the region.',
      duration: 'Up to 3 years, renewable',
      link: 'https://udsc.gov.pl/en/'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists and short-term visitors',
      useCase: 'For non-EU citizens visiting Poland for tourism, business meetings, conferences, or family visits. Valid across the Schengen area. Application is submitted at a Polish embassy or consulate, or through a visa application center (VFS Global).',
      duration: 'Up to 90 days within a 180-day period',
      link: 'https://www.gov.pl/web/diplomacy/visas'
    }
  ],
  requirements: [
    {
      title: 'PESEL Number',
      explanation: 'The Powszechny Elektroniczny System Ewidencji Ludności (Universal Electronic System for Registration of the Population) number is an 11-digit personal identification number assigned to every registered resident of Poland. It encodes your date of birth and gender.',
      importance: 'The PESEL is your key to virtually everything in Poland: opening a bank account, registering with the National Health Fund (NFZ), filing taxes, signing up for mobile phone contracts, and accessing healthcare. EU citizens can obtain it during residence registration (zameldowanie). Non-EU citizens receive it as part of their temporary residence permit process. Without a PESEL, administrative tasks become extremely difficult.',
      link: 'https://www.gov.pl/web/gov/uzyskaj-numer-pesel-dla-cudzoziemcow-en'
    },
    {
      title: 'Zameldowanie (Residence Registration)',
      explanation: 'The mandatory registration of your place of residence with the local municipal office (Urząd Gminy or Urząd Miasta). EU citizens must register within 3 months of arrival; non-EU citizens within 30 days. You need a signed statement from your landlord confirming your residence at the address.',
      importance: 'Zameldowanie is linked to issuing your PESEL number and is often the first bureaucratic step after arriving. Without it, you cannot complete most other registrations. The process requires your lease agreement, the landlord\'s written consent (sometimes requiring their personal appearance), and your passport or travel document. Some landlords are reluctant to sign the zameldowanie form due to misconceptions about tenant rights—clarify this before signing your lease.',
      link: 'https://www.gov.pl/web/gov/zamelduj-sie-na-pobyt-czasowy-dla-cudzoziemcow-en'
    },
    {
      title: 'Profil Zaufany (Trusted Profile)',
      explanation: 'A free digital identity verification system that functions as your electronic signature for interactions with Polish government services. It can be set up online through your bank\'s authentication system (most Polish banks support it) or in person at a government office.',
      importance: 'Profil Zaufany gives you access to the ePUAP platform (Electronic Platform of Public Administration Services), which allows you to handle tax declarations, residence applications, social insurance matters, and municipal registrations online. Without it, you must visit government offices in person for most procedures. Setting it up through your Polish bank account is the fastest method and takes about 10 minutes.',
      link: 'https://pz.gov.pl/pz/index'
    },
    {
      title: 'NFZ Registration (National Health Fund)',
      explanation: 'Registration with the Narodowy Fundusz Zdrowia (NFZ) provides access to Poland\'s public healthcare system. Employees are automatically registered through their employer\'s social security contributions. Self-employed individuals must register independently through ZUS (Social Insurance Institution).',
      importance: 'NFZ registration gives you access to free GP visits, specialist referrals, hospital care, and prescriptions at subsidized prices. Without it, you pay full private rates. The public system covers a wide range of services but is known for long waiting times for specialists and elective procedures, which is why many residents supplement with private healthcare through companies like Medicover, Lux Med, or Enel-Med.',
      link: 'https://www.nfz.gov.pl/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Poland's job market has grown rapidly, driven by IT, shared service centers (SSCs/BPOs), manufacturing, finance, and a booming startup ecosystem. Warsaw, Krakow, Wroclaw, and the Tri-City (Gdansk-Sopot-Gdynia) are the main employment hubs. International companies have established major operations in Poland, making it one of Europe's largest destinations for business services. English-speaking roles are plentiful in the tech and SSC sectors, though Polish language skills open up significantly more opportunities.",
    whereToLook: [
      "Pracuj.pl — Poland's largest job portal, with listings across all sectors",
      "NoFluffJobs — focused on IT and tech roles with transparent salary ranges",
      "LinkedIn — widely used for professional and international roles",
      "JustJoin.IT — another popular tech-focused job board",
      "Company career pages for international firms with Polish operations (Google, Amazon, JP Morgan, Goldman Sachs, etc.)"
    ],
    realityChecks: [
      "Polish language skills dramatically expand your options outside of international companies and tech. Customer-facing roles, public sector jobs, and most SMEs require functional Polish.",
      "Work permits for non-EU citizens require employer sponsorship and a labor market test in most cases. The process can take 1-6 months depending on the Voivodeship Office's backlog.",
      "Contract types matter: umowa o pracę (employment contract) provides full benefits and protections, while umowa zlecenie (civil contract) and B2B arrangements offer higher gross pay but fewer protections and require you to manage your own taxes and insurance.",
      "The IT sector in Poland is highly competitive and well-compensated, with senior developer salaries reaching PLN 25,000-35,000/month gross on B2B contracts."
    ]
  },
  salaryReality: {
    overview:
      "Polish salaries have been rising steadily and are competitive relative to the cost of living, though still below Western European levels in absolute terms. The average gross salary is approximately PLN 8,000-9,000/month nationally, but Warsaw and tech sector salaries are significantly higher. The gap between gross and net is substantial due to income tax (12-32%) and social security contributions, but purchasing power—especially for housing, food, and services—is strong compared to Germany, France, or the UK.",
    realityChecks: [
      "Contract type dramatically affects your net income. A B2B contract (samozatrudnienie) can net 20-30% more than an equivalent umowa o pracę, but you lose employment protections, paid leave, and employer-funded benefits.",
      "Income tax is progressive: 12% up to PLN 120,000/year, then 32% above that threshold. Social security contributions (ZUS) add approximately 13.7% (employee share) on top.",
      "Salary growth in tech and SSC sectors has been rapid, often 10-15% per year for in-demand skills, outpacing most other sectors.",
      "Regional cost-of-living differences are significant: Warsaw is 30-50% more expensive than cities like Lodz, Lublin, or Katowice for housing."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The critical difference between umowa o pracę (employment contract) and B2B (self-employment) compensation—headline numbers often mix these, making comparisons misleading",
      "Mandatory ZUS social security contributions, which can total PLN 1,500-2,000/month for self-employed individuals",
      "Employer-provided benefits common in corporate roles: private healthcare (Medicover, Lux Med), sport cards (MultiSport), and lunch subsidies",
      "The '13th salary' or annual bonus common in many Polish companies, which adds 5-15% to annual compensation"
    ]
  },
  housingSystem: {
    overview:
      "Poland's rental market is private and relatively flexible compared to Western Europe. Apartments are widely available in all major cities, with most leases signed directly between tenant and landlord, often with an agent (pośrednik) involved for a one-month fee. Popular expat neighborhoods include Mokotów, Śródmieście, and Wilanów in Warsaw; Kazimierz, Podgórze, and Krowodrza in Krakow; and Stare Miasto and Śródmieście in Wroclaw. New-build apartments in modern developments are increasingly popular and offer better insulation and energy efficiency than older communist-era blocks (bloki).",
    expectations:
      "Deposits of one to two months' rent are standard. Monthly rent for a one-bedroom apartment in central Warsaw ranges from PLN 3,000-5,000 (EUR 700-1,150); in Krakow, PLN 2,500-4,000; in Wroclaw or Gdansk, PLN 2,000-3,500. Most apartments come unfurnished or semi-furnished. Otodom.pl is the dominant rental platform, with OLX.pl as an alternative. Many landlords prefer Polish-speaking tenants, so having a Polish friend help with initial contact can be advantageous. Heating costs in winter can add PLN 200-500/month to your expenses, and older buildings may have poor insulation. Always check the building's energy certificate and heating system before committing."
  },
  healthcareReality:
    "Poland has a dual public-private healthcare system. The public system through NFZ (Narodowy Fundusz Zdrowia) provides comprehensive coverage including GP visits, specialist care, hospital stays, and subsidized prescriptions. However, waiting times for specialists and elective procedures can be extremely long—months or even years for some specialties like orthopedics or dermatology. This has created a thriving private healthcare sector. Companies like Medicover, Lux Med, and Enel-Med offer subscription-based private healthcare packages (commonly provided by employers) that include same-day GP appointments, fast specialist access, and diagnostic imaging with minimal wait. Private healthcare subscriptions cost PLN 100-300/month for individual plans. In emergencies, SOR (Szpitalny Oddział Ratunkowy) departments at hospitals like Szpital Bielański in Warsaw or Szpital Uniwersytecki in Krakow provide immediate care regardless of insurance status. Pharmacies (apteka) are well-stocked, and many medications available only by prescription in Western Europe can be obtained over the counter in Poland.",
  digitalLife: {
    overview:
      "Poland is one of Europe's most digitally advanced countries for everyday transactions. The combination of BLIK (a uniquely Polish mobile payment system), the Profil Zaufany digital identity, and sophisticated banking apps means most routine tasks can be handled from your phone. Internet infrastructure is strong, with fiber broadband widely available in cities.",
    essentials: [
      "BLIK — a mobile payment system integrated into every Polish bank app, allowing instant payments, ATM withdrawals, and person-to-person transfers using a 6-digit code",
      "Profil Zaufany — digital identity for all government services via the ePUAP platform",
      "mObywatel — the government's mobile app providing digital versions of your ID, driving license, and vehicle registration",
      "InPost Paczkomaty — Poland's ubiquitous parcel locker system, used for online shopping delivery and returns"
    ],
    whatSurprisesNewcomers: [
      "BLIK is used everywhere—from grocery stores and restaurants to splitting bills with friends and paying for parking. It is uniquely Polish and far more popular than Apple Pay or Google Pay.",
      "Private healthcare is so commonly used alongside the public system that many employers provide it as a standard benefit. Using only the public system is functional but requires patience.",
      "The InPost parcel locker network is extraordinarily dense (over 20,000 locations). Online shopping delivery to a Paczkomat is faster and cheaper than home delivery.",
      "Polish banking apps are among the most sophisticated in Europe, offering features like instant transfers, bill scanning, and investment products that many Western European banks still lack."
    ]
  },
  culture: {
    text: 'Polish culture is a blend of Slavic warmth, Catholic tradition, and a fierce independence forged through centuries of partition and occupation. Poles are direct, honest, and deeply hospitable—once you are invited into someone\'s home, expect to be fed and offered vodka until you physically cannot consume more. Complaining (narzekanie) is a national art form and a social bonding mechanism; if you say everything is great, people may think you are naive or not paying attention. Generosity with food and drink is legendary, and refusing a second helping may be interpreted as not enjoying the first. Catholicism shapes the social calendar (Christmas, Easter, All Saints\' Day) and public life (Sunday trading bans), though younger urban Poles are increasingly secular. The historical narrative—partitions, World War II, communist era, Solidarity movement—is central to Polish identity, and showing awareness of this history earns genuine respect.',
    highlights: [
      'Always remove shoes when entering a Polish home. Hosts typically offer guest slippers (kapcie), and arriving in socks is perfectly normal.',
      'Directness is valued. "Maybe" usually means "no," and hedging around an issue is seen as evasive rather than polite. Poles appreciate honest, straightforward communication.',
      'Name days (imieniny) are celebrated as much as—or more than—birthdays. Knowing someone\'s name day and acknowledging it is a meaningful gesture.',
      'Catholicism influences daily life more than in most EU countries: Sunday trading bans close most shops (except gas stations and small franchise shops like Zabka), and religious holidays are genuinely observed.',
      'Vodka is culturally significant. When toasting, maintain eye contact and say "Na zdrowie" (to health). Refusing a toast without a strong reason can be seen as unfriendly.'
    ]
  },
  transportationMobility:
    "Public transport in Polish cities is reliable, affordable, and well-integrated. Warsaw has a two-line metro system supplemented by an extensive tram and bus network. Krakow, Wroclaw, Poznan, and Gdansk rely on tram and bus networks that cover the urban area effectively. Tickets are purchased via mobile apps (jakdojade is the essential transit app) or at kiosks and must be validated immediately upon boarding—random inspections carry fines of PLN 280 for unvalidated tickets. PKP Intercity and Polregio operate the national rail network, with PKP Intercity's Pendolino (EIP) and Express InterCity (EIC) services connecting Warsaw to Krakow in about 2.5 hours and to Gdansk in about 3 hours. FlixBus and PolskiBus provide cheap intercity coach services. Cycling infrastructure is expanding, especially in Warsaw and Wroclaw, with city bike-sharing systems (Veturilo in Warsaw) widely used in warmer months. Driving is straightforward on highways (A1, A2, A4) but can be challenging in city centers where parking is scarce and expensive.",
  internationalConnectivity:
    "Warsaw Chopin Airport (WAW) is the main international hub with direct flights to major European cities, the US (LOT Polish Airlines flies to New York JFK, Newark, Chicago, Miami, and Los Angeles), and destinations in Asia and the Middle East. Warsaw Modlin Airport (WMI) handles budget carriers, primarily Ryanair. Krakow's John Paul II Airport (KRK), Gdansk Lech Walesa Airport (GDN), and Wroclaw Airport (WRO) offer extensive European connections. LOT Polish Airlines, the national carrier and Star Alliance member, provides strong connectivity from Warsaw. Poland's central European location means Berlin is 1.5 hours by air (or 5.5 hours by train), Prague is 1 hour by air, and most European capitals are within 2-3 hours' flight time.",
  travelExploration:
    "Poland offers remarkable domestic travel diversity. Krakow's Old Town and Wawel Castle are UNESCO sites, and the city serves as a base for visiting the Wieliczka Salt Mine and the sobering Auschwitz-Birkenau memorial. The Tatra Mountains near Zakopane provide serious hiking in summer and skiing in winter, with Morskie Oko (Sea Eye) lake being one of Poland's most iconic natural sites. The Baltic coast around Gdansk, Sopot, and the Slowinski National Park (with moving sand dunes) offers beaches and maritime culture. Wroclaw's Ostrów Tumski island and centennial hall are architectural gems. The Masurian Lake District in the northeast is a kayaking and sailing paradise. Bialowieza Forest on the Belarus border contains Europe's last primeval forest and a population of European bison. The combination of efficient trains, cheap FlixBus connections, and affordable domestic flights makes exploring the country easy and budget-friendly.",
  considerations: [
    'Winter Smog: In Krakow and southern Poland, air quality in winter months (November-March) can be among the worst in Europe due to residential coal heating. The Polish Smog Alert app monitors PM2.5 levels. On bad days, wearing an N95 mask outdoors is advisable, and running an air purifier at home is recommended.',
    'Polish Language: Polish is consistently ranked among the hardest languages for English speakers to learn (7 grammatical cases, consonant clusters, gendered nouns). However, learning even basic phrases—"Dzien dobry" (good day), "Dziekuje" (thank you), "Przepraszam" (excuse me)—is deeply appreciated by locals and opens doors socially.',
    'Sunday Trading Ban: Most shops (except gas stations, pharmacies, and small franchise shops like Zabka) are closed on Sundays, with limited exceptions on the last Sunday of the month and in December. Plan grocery shopping for Saturday or weekday evenings.',
    'BLIK and Digital Payments: The BLIK system is uniquely Polish and not available through international bank accounts. Setting up a Polish bank account and activating BLIK should be a priority, as it is used for everything from restaurant bills to parking meters.',
    'Contract Type Matters: When negotiating employment, understand the difference between umowa o prace (full employment contract with benefits) and B2B (self-employment contract with higher gross but no protections). This distinction fundamentally affects your taxes, healthcare, pension, and job security.'
  ],
  mistakes: [
    'Referring to Poland as "Eastern Europe." Poles consider themselves Central European, and the distinction is geopolitically and culturally significant. The country\'s EU membership, NATO alliance, and cultural orientation are firmly Western-facing.',
    'Drinking alcohol in public spaces. Consuming alcohol on streets, in parks, or on public transport is illegal in Poland and actively enforced. Fines start at PLN 100 and can be issued on the spot. Designated beer gardens and restaurant terraces are fine.',
    'Not validating your public transport ticket. Polish transit uses an honor system with random inspections by plainclothes controllers. Fines for unvalidated tickets are PLN 280 and non-negotiable. Validate immediately upon boarding by holding your ticket against the yellow validator.',
    'Shaking hands across a threshold. This is considered bad luck in Polish tradition. Always step inside the doorway before offering a handshake.',
    'Ignoring the zameldowanie requirement. Many expats skip residence registration, thinking it is optional. It is not—it is legally required and necessary for obtaining your PESEL number, which you need for virtually all administrative and financial processes.'
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency',
      description: 'European-standard emergency number connecting to all services. Operators speak Polish and English.'
    },
    {
      number: '997',
      service: 'Police (Policja)',
      description: 'Direct line to the Polish police for reporting crimes, traffic incidents, or requesting assistance.'
    },
    {
      number: '999',
      service: 'Ambulance (Pogotowie Ratunkowe)',
      description: 'Direct line for medical emergencies and ambulance dispatch. Available 24/7 nationwide.'
    }
  ],
  sources: [
    {
      name: 'Gov.pl — Portal for Foreigners',
      category: 'Government Services',
      description: 'Official Polish government portal with dedicated sections for foreigners, including PESEL registration, zameldowanie procedures, and Profil Zaufany setup.',
      link: 'https://www.gov.pl/web/diplomacy'
    },
    {
      name: 'Office for Foreigners (Urząd do Spraw Cudzoziemców)',
      category: 'Immigration & Residency',
      description: 'Central authority for foreigners\' affairs in Poland, providing information on residence permits, work authorization, refugee status, and immigration law.',
      link: 'https://udsc.gov.pl/en/'
    },
    {
      name: 'NFZ (Narodowy Fundusz Zdrowia)',
      category: 'Healthcare',
      description: 'National Health Fund managing public healthcare coverage, registration, provider directories, and patient rights information.',
      link: 'https://www.nfz.gov.pl/'
    },
    {
      name: 'ZUS (Zakład Ubezpieczeń Społecznych)',
      category: 'Social Insurance',
      description: 'Social Insurance Institution handling pension contributions, disability benefits, sickness benefits, and employer obligations for social security.',
      link: 'https://www.zus.pl/en'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa and residency matters, and official guidance related to Poland, consult the Polish Ministry of Foreign Affairs or a Polish embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/poland',
    mfaLink: 'https://www.gov.pl/web/diplomacy'
  },
  serviceDirectory: {
    title: "Service Directory - Poland",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Poland.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance with residence permits, work authorization, Blue Cards, and immigration compliance in Poland.",
        providers: [
          { name: "Fragomen Poland", link: "https://www.fragomen.com" },
          { name: "Wardynski & Partners", link: "https://www.wardynski.com.pl" },
          { name: "Deloitte Legal Poland", link: "https://www2.deloitte.com/pl" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Platforms and agencies assisting with apartment rentals and property purchases in Polish cities.",
        providers: [
          { name: "Otodom", link: "https://www.otodom.pl" },
          { name: "Engel & Volkers Poland", link: "https://www.engelvoelkers.com/pl" },
          { name: "Metrohouse", link: "https://metrohouse.pl" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Firms advising on Polish tax law, PIT/CIT declarations, ZUS obligations, and cross-border income planning.",
        providers: [
          { name: "PwC Poland", link: "https://www.pwc.pl" },
          { name: "EY Poland", link: "https://www.ey.com/pl_pl" },
          { name: "KPMG Poland", link: "https://kpmg.com/pl" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including shipping, customs handling, and destination support.",
        providers: [
          { name: "Crown Relocations Poland", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "AGS Worldwide Movers Poland", link: "https://www.agsmovers.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Polish language courses and integration programs for newcomers, from beginner survival Polish to advanced proficiency.",
        providers: [
          { name: "Polonicum (University of Warsaw)", link: "https://polonicum.uw.edu.pl" },
          { name: "Glossa Polish Language School", link: "https://glossa.pl" },
          { name: "Berlitz Poland", link: "https://www.berlitz.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private healthcare networks commonly used by expats for faster access and English-speaking medical services.",
        providers: [
          { name: "Medicover Poland", link: "https://www.medicover.pl" },
          { name: "Lux Med", link: "https://www.luxmed.pl" },
          { name: "Enel-Med", link: "https://www.enel.pl" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and agencies connecting international professionals with Polish employers.",
        providers: [
          { name: "Pracuj.pl", link: "https://www.pracuj.pl" },
          { name: "Michael Page Poland", link: "https://www.michaelpage.pl" },
          { name: "Hays Poland", link: "https://www.hays.pl" }
        ]
      }
    ]
  }
};