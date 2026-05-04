export const netherlands = {
  id: 'netherlands',
  slug: 'netherlands',
  name: 'Netherlands',
  region: 'Europe',
  complexity: 'Low',
  languages: ['Dutch', 'English'],
  shortDescription: 'Progressive, flat, and famously efficient with a biking culture like no other.',
  heroImage: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4',
  flagAlt: 'Flag of Netherlands',
  atAGlance: "The Netherlands is a densely populated, meticulously organized country built on centuries of consensus, commerce, and pragmatic tolerance. The Dutch are famous for their directness — here, honesty is valued far above diplomacy, and being told bluntly that your idea will not work is considered helpful rather than rude. It is a society that runs on appointments and agendas: dropping by someone's home unannounced is considered intrusive, and social gatherings are often scheduled weeks in advance in shared calendars. The cycling infrastructure is genuinely world-class — over 35,000 km of dedicated bike paths carry everyone from toddlers in cargo bikes to executives in suits, and the bicycle is the primary mode of transport in every city. While the quality of life is exceptionally high (excellent healthcare, strong social safety net, high wages, and a genuine work-life balance culture), the housing market is in a severe crisis. Finding rental accommodation in Amsterdam, Rotterdam, Utrecht, The Hague, or Eindhoven is intensely competitive, with overbidding on rent becoming common and scams targeting expats proliferating online. The concept of 'Gezelligheid' — a uniquely Dutch word capturing coziness, togetherness, and convivial warmth — defines the social ideal. For newcomers, the paradox of the Netherlands is that while systems work brilliantly and English is spoken almost universally, genuine social integration requires learning Dutch, understanding the unwritten social codes, and accepting that the famous openness has firm, if invisible, boundaries.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'High',
    primaryLanguages: 'Dutch (English widely spoken)',
  },
  visas: [
    {
      name: 'Highly Skilled Migrant Permit (Kennismigrant)',
      targetAudience: 'Skilled Professionals',
      useCase: 'The most common route for international professionals moving to the Netherlands. Requires a job offer from an employer registered as a recognized sponsor (erkend referent) with the IND. Salary thresholds apply (approximately EUR 5,008/month for applicants 30+, EUR 3,672/month for under 30, as of 2025 — adjusted annually). Processing is fast (typically 2 weeks) through the employer. After 5 years, you can apply for permanent residence or Dutch citizenship.',
      duration: 'Duration of employment contract (max 5 years, renewable)',
      link: 'https://ind.nl/en/residence-permits/work/highly-skilled-migrant'
    },
    {
      name: 'DAFT Visa (Dutch-American Friendship Treaty)',
      targetAudience: 'US and Japanese Entrepreneurs',
      useCase: 'A unique bilateral treaty allowing US citizens (and Japanese citizens under a similar treaty) to start a business or freelance in the Netherlands with a remarkably low capital requirement of just EUR 4,500. No minimum turnover or employee count is required. The permit is renewable and provides a pathway to permanent residence. This is one of the most accessible entrepreneur visas in Europe.',
      duration: '2 years (renewable)',
      link: 'https://ind.nl/en/residence-permits/work/residence-permit-self-employed-person'
    },
    {
      name: 'Orientation Year (Zoekjaar)',
      targetAudience: 'Recent Graduates of Top Universities',
      useCase: 'For graduates of universities in the global top 200 (Times Higher Education, QS, or Shanghai ranking) who graduated within the last 3 years. No job offer required. Allows one year to search for work, start a business, or freelance in the Netherlands. Can be converted to a Highly Skilled Migrant permit or self-employed permit upon finding work.',
      duration: '1 year',
      link: 'https://ind.nl/en/residence-permits/work/residence-permit-for-orientation-year'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists, Short-term Visitors',
      useCase: 'For short visits up to 90 days within a 180-day period for tourism, family visits, or business meetings. Many nationalities can enter visa-free under Schengen rules.',
      duration: 'Up to 90 days',
      link: 'https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa'
    },
    {
      name: 'Single Permit (GVVA - Combined Work and Residence)',
      targetAudience: 'Employed Workers (Non-Highly Skilled)',
      useCase: 'For non-EU nationals with a confirmed job offer that does not meet the Highly Skilled Migrant salary threshold. The employer applies through the IND on behalf of the employee. Requires a labor market test (TWV) proving no suitable Dutch or EU candidate was available. Processing takes longer than the Highly Skilled Migrant route.',
      duration: 'Duration of contract (max 3 years)',
      link: 'https://ind.nl/en/residence-permits/work/single-permit-for-employment'
    }
  ],
  requirements: [
    {
      title: 'BSN (Burgerservicenummer — Citizen Service Number)',
      explanation: 'A unique 9-digit personal identification number assigned to every registered resident of the Netherlands. You receive it automatically when you register with your local municipality (gemeente) at the town hall (gemeentehuis). Registration must happen within 5 days of arriving if you plan to stay longer than 4 months.',
      importance: 'The BSN is the master key to the entire Dutch system. Without it, you cannot work legally, open a bank account, take out health insurance, register with a GP, file taxes, or access virtually any government service. It is the first administrative task you must complete upon arrival. Bring your passport, birth certificate (apostilled), rental contract, and visa/residence permit to your gemeente appointment.',
      link: 'https://www.government.nl/topics/personal-data/citizen-service-number-bsn'
    },
    {
      title: 'DigiD (Digital Identity)',
      explanation: 'A username and password system (with optional two-factor authentication via the DigiD app) that provides secure access to Dutch government online services. You apply after receiving your BSN and must activate it using a verification code sent to your registered address.',
      importance: 'DigiD connects your BSN to the entire Dutch digital government ecosystem. You need it to file taxes with the Belastingdienst, manage health insurance, check pension contributions, access municipal services, and interact with the UWV (employee insurance agency). Without DigiD, you are locked out of most online government interactions and must handle everything in person — which is both slow and counterculture in the Netherlands.',
      link: 'https://www.digid.nl/en'
    },
    {
      title: 'Health Insurance (Zorgverzekering)',
      explanation: 'The Netherlands has a mandatory private health insurance system. Every resident must take out a basic health insurance policy (basisverzekering) from a private insurer within 4 months of registration. The basic package is standardized by law and covers GP visits, hospital care, mental health, prescriptions, and maternity. You can add supplementary coverage (aanvullende verzekering) for dental, physiotherapy, and alternative medicine.',
      importance: 'Health insurance is not optional — if you fail to obtain it within 4 months, the CAK (Central Administration Office) will assign you a policy and you will be fined and retroactively billed. Basic insurance premiums are approximately EUR 120-150/month. A voluntary own-risk excess (eigen risico) of EUR 385 per year applies to most care (except GP visits, maternity, and children under 18). Low-income residents can apply for zorgtoeslag (healthcare allowance) to offset premium costs.',
      link: 'https://www.government.nl/topics/health-insurance'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a Dutch bank account requires your BSN, a valid ID (passport or residence permit), and proof of address. Major banks include ING, ABN AMRO, Rabobank, and SNS. Digital banks like bunq (Dutch-founded) and N26 offer faster onboarding for newcomers. Many banks allow you to start the application online.',
      importance: 'A Dutch bank account is essential for receiving salary (Dutch employers require an NL IBAN), paying rent, setting up health insurance direct debits, and accessing iDEAL — the dominant online payment system in the Netherlands that is required for nearly all Dutch e-commerce and government payment transactions. Most Dutch people rarely carry cash; the entire economy runs on debit cards and iDEAL.',
      link: 'https://www.government.nl/topics/financial-sector/contents/financial-markets'
    }
  ],
  jobsAndIncome: {
    overview:
      "The Dutch job market is international, well-structured, and highly competitive, particularly in the Randstad region (Amsterdam, Rotterdam, The Hague, Utrecht). Strong demand exists in technology, logistics, agrifood, financial services, life sciences, and professional services. English is widely used in the workplace — particularly in multinational companies, startups, and the tech sector — making the Netherlands one of the most accessible European markets for English-speaking professionals. However, for senior roles, client-facing positions, and public-sector jobs, Dutch language skills become increasingly important.",
    whereToLook: [
      "LinkedIn (the dominant platform for professional job search in the Netherlands)",
      "Indeed Netherlands (indeed.nl — largest generalist job board by volume)",
      "Glassdoor Netherlands (salary transparency and company reviews)",
      "Undutchables (recruitment agency specializing in international candidates)",
      "Together Abroad (job board specifically for English-speaking professionals in the Netherlands)"
    ],
    realityChecks: [
      "Competition is intense, particularly in the Randstad — hundreds of applications per posting is normal for attractive international roles.",
      "Dutch language proficiency becomes critical for career advancement, social integration, and roles outside the international bubble. Invest in Dutch classes early.",
      "The 30% ruling tax advantage (see below) makes the Netherlands financially attractive for skilled migrants, but recent restrictions have reduced its scope and duration.",
      "Employment contracts matter enormously — a permanent contract (vast contract) unlocks mortgage eligibility and social protections that temporary contracts do not."
    ]
  },
  salaryReality: {
    overview:
      "Dutch salaries are solid but not spectacular by Western European standards. The median gross annual salary is approximately EUR 40,000-42,000, with significant variation by sector and experience. Tech, finance, and professional services offer the highest compensation. The 30% ruling — a tax advantage that allows eligible skilled migrants to receive 30% of their salary tax-free — significantly improves net income for those who qualify, though it was recently capped at the Balkenende norm (approximately EUR 233,000) and reduced from 5 to 5 years with a phase-out.",
    realityChecks: [
      "Net take-home pay after income tax (up to 49.5% on income above EUR 75,518) and social contributions is substantially less than gross — always negotiate based on net calculations.",
      "Housing costs in the Randstad are the elephant in the room — rent for a one-bedroom apartment in Amsterdam frequently exceeds EUR 1,500-2,000/month, consuming a large share of take-home pay.",
      "The 30% ruling dramatically improves net income for qualified skilled migrants, but eligibility requirements have tightened and the benefit phases out over 5 years.",
      "Holiday allowance (vakantiegeld) of 8% of annual gross salary is paid as a lump sum in May — this is a standard benefit and should be factored into total compensation."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Net salary after progressive income tax (starting at 36.97% and rising to 49.5% on higher income brackets)",
      "Mandatory health insurance premiums (EUR 120-150/month) plus the EUR 385 annual eigen risico excess",
      "Housing costs in the Randstad — the single largest expense that online salary calculators rarely contextualize adequately",
      "Commuting costs (often partially reimbursed by employers, but not always — public transport passes and fuel are expensive)"
    ]
  },
  housingSystem: {
    overview:
      "The Netherlands is experiencing a severe housing crisis, particularly in the Randstad. Social housing (sociale huur) has waiting lists of 10-15 years in Amsterdam. The private rental market (vrije sector) is fiercely competitive, with properties receiving dozens of inquiries within hours of listing. Popular expat neighborhoods in Amsterdam include De Pijp, Jordaan, Oud-West, and Amsterdam-Zuid. Rotterdam's Kralingen, Delfshaven, and Noord are increasingly popular. The Hague, Utrecht, Eindhoven, and Groningen offer more accessibility.",
    expectations:
      "Expect high rents, intense competition, and the need to act extremely quickly. Proof of income (typically 3-4x monthly rent in gross salary), an employment contract, and a copy of your ID are standard requirements. Viewings can feel like auctions, with multiple applicants bidding above asking rent. Scams targeting expats are rampant — never pay before viewing a property in person and never send money to a landlord you have not met. Use Funda.nl (the dominant housing platform), Pararius (specifically for international tenants), and Kamernet for shared housing. Deposits are typically 1-2 months' rent, and must be returned within 14 days of lease end."
  },
  healthcareReality:
    "The Dutch healthcare system is consistently ranked among the best in Europe. It is based on mandatory private insurance with regulated basic coverage (basisverzekering). Your GP (huisarts) is the gatekeeper to the entire system — you must register with a local practice (which can have waiting lists in popular areas), and all specialist care, hospital referrals, and mental health treatment require a GP referral. Direct walk-in to a hospital for non-emergencies is not possible. GPs tend to take a conservative, wait-and-see approach that can frustrate newcomers accustomed to more interventionist medical cultures. For after-hours urgent care, the Huisartsenpost (GP cooperative) operates on evenings and weekends — call before visiting. Hospital care is excellent: major institutions include Amsterdam UMC, Erasmus MC (Rotterdam), UMC Utrecht, and Leiden University Medical Centre. Dental care is only partially covered (basic dental for children; adults need supplementary insurance or pay out of pocket). Mental health care (GGZ) is covered under basic insurance but waiting times can be 6-12 weeks for initial intake. Pharmacies (apotheken) are well-stocked but many medications require a prescription.",
  digitalLife: {
    overview:
      "The Netherlands is one of the most digitally advanced societies in Europe. Government services are predominantly online, cashless payment is the norm, and digital infrastructure is excellent. The combination of DigiD (digital identity), iDEAL (online payment), and high-speed internet makes daily administrative life efficient once you are set up.",
    essentials: [
      "DigiD (digital identity — required for tax filing, health insurance, pension management, and all government interactions)",
      "iDEAL (the Dutch online payment system — required for virtually all e-commerce, government payments, and many subscription services)",
      "Mijn Overheid (my.overheid.nl — personal government portal showing all official correspondence, tax documents, and municipal messages)",
      "Buienradar (weather app — the Dutch obsession with weather forecasts is practical given the frequent rain; Buienradar's rain radar is universally used)"
    ],
    whatSurprisesNewcomers: [
      "iDEAL is required for so many online payments that not having a Dutch bank account (with an NL IBAN) effectively locks you out of Dutch e-commerce and many government payment flows.",
      "DigiD activation requires a verification code sent to your physical registered address — you cannot access government services digitally until this is complete, creating a bootstrapping delay.",
      "Cash is genuinely becoming obsolete — many shops, restaurants, and even market stalls no longer accept cash. A Dutch debit card is essential for daily life.",
      "The Belastingdienst (tax authority) pre-fills your annual tax declaration with employer, bank, and insurance data — filing typically takes 15-30 minutes and refunds are common for first-year residents."
    ]
  },
  culture: {
    text: 'Dutch culture is built on egalitarianism, consensus, and radical directness. The national motto might as well be "Doe normaal" (act normal) — standing out, showing off, or flaunting success is socially frowned upon. Hierarchies are flat in workplaces, and the "Polder Model" of decision-making emphasizes discussion and consensus over top-down directives. Agendas are sacred: social appointments are booked weeks in advance, and showing up unannounced — even at a close friend\'s home — is considered intrusive. The infamous "Tikkie" culture (sending digital payment requests through the Tikkie app for small shared expenses, even among friends) is not stinginess but a reflection of the Dutch value of fairness and individual responsibility. Birthday celebrations follow a unique ritual: guests sit in a circle (kring) and congratulate not just the birthday person but every family member present ("Gefeliciteerd met je moeder/vader/vrouw/man"). The Dutch are not unfriendly — they are simply direct, structured, and clear about boundaries.',
    highlights: [
      'Directness: The Dutch will tell you straightforwardly if your idea is bad, if you have something in your teeth, or if they disagree with you. This is not rudeness — it is considered respectful honesty. Vagueness and diplomatic evasion are what the Dutch find rude.',
      'Lunch: The Dutch lunch is famously simple — a broodje (sandwich) with cheese or ham, often with a glass of karnemelk (buttermilk). Hot meals are reserved for dinner. Do not expect elaborate lunch cultures.',
      'Birthdays (Kring): At a Dutch birthday party, guests sit in a circle (kring) and congratulate every family member of the birthday person. You bring a small gift, and cake with coffee/tea is served. It is structured and ritualistic.',
      'Three Kisses: The standard greeting for friends and family is three kisses on alternating cheeks (right-left-right). Handshakes are for professional settings and first meetings.',
      'Splitting Bills (Tikkie): Going Dutch is not a joke — it is standard practice. Sending a Tikkie for EUR 3.50 to split a shared taxi or coffee order is completely normal and not considered cheap.'
    ]
  },
  transportationMobility:
    "The Netherlands has some of the best transport infrastructure in Europe. The cycling network is legendary — over 35,000 km of dedicated bike paths, traffic signals for cyclists, multi-story bicycle parking garages, and a cultural norm that treats the bicycle as the primary mode of urban transport. Dutch Railways (NS) operates frequent intercity trains connecting all major cities: Amsterdam to Rotterdam (40 min), Amsterdam to Utrecht (25 min), Amsterdam to The Hague (50 min), Amsterdam to Eindhoven (75 min). The OV-chipkaart (public transport chip card) or OVpay (contactless debit card) works across all trains, trams, buses, and metros nationwide. Amsterdam has an efficient tram and metro system (GVB); Rotterdam's metro and tram (RET) are modern; The Hague has an extensive tram network. Ride-hailing (Uber, Bolt) operates in all major cities. Car ownership is expensive (high fuel costs, road tax, and insurance) and often unnecessary in urban areas, but practical for rural regions.",
  internationalConnectivity:
    "Amsterdam Airport Schiphol (AMS) is one of Europe's largest and best-connected hubs, with direct flights to over 300 destinations worldwide. KLM (part of Air France-KLM) is the national carrier and operates extensive European, intercontinental, and code-share networks. Budget carriers (Transavia, easyJet, Ryanair) supplement European routes from Schiphol and Rotterdam The Hague Airport (RTM) and Eindhoven Airport (EIN). High-speed Thalys/Eurostar trains connect Amsterdam to Brussels (1h50), Paris (3h20), and London (3h50). German ICE trains run to Cologne, Frankfurt, and Berlin. The Netherlands' central position in Europe makes it an ideal base for exploring the continent — Brussels, Antwerp, Dusseldorf, and Cologne are all within 2-3 hours by train.",
  travelExploration:
    "Despite its small size (roughly 41,500 square km), the Netherlands offers surprising variety. Amsterdam's canal ring (UNESCO), museums (Rijksmuseum, Van Gogh Museum, Anne Frank House), and vibrant neighborhoods are world-famous. Rotterdam showcases bold modern architecture (Markthal, Cube Houses, Erasmus Bridge) and Europe's largest port. The Hague has royal palaces, the Peace Palace, and the beach resort of Scheveningen. Utrecht's canals and medieval center rival Amsterdam's with fewer tourists. Beyond the cities: Kinderdijk's windmills (UNESCO), the Keukenhof tulip gardens (spring only), the Frisian Islands (Wadden Sea, UNESCO), and the hilly landscapes of Limburg in the south provide distinctly different experiences. The country's compact size means everywhere is reachable within 3 hours, and international weekends in Belgium, Germany, or northern France are effortless.",
  considerations: [
    'Housing Crisis: Finding rental accommodation in the Randstad (Amsterdam, Rotterdam, Utrecht, The Hague) is genuinely one of the hardest challenges of relocating to the Netherlands. Expect intense competition, overbidding on rent, and a market where properties disappear within hours. Scams targeting expats are sophisticated and common — never transfer money without viewing the property in person and meeting the landlord.',
    'GP System (Huisarts): The Dutch healthcare system requires a GP referral for virtually all specialist care. You cannot walk into a hospital for non-emergencies. GPs tend toward a "wait and see" approach — this can feel dismissive if you are accustomed to more interventionist medical cultures. If you are not satisfied, you can request a second opinion or switch GPs.',
    'Weather: The Netherlands has a maritime climate with frequent rain, strong winds, and overcast skies. It rarely gets very cold or very hot, but the persistent grey drizzle from October through April can affect mood. The Dutch philosophy is pragmatic: "Je bent niet van suiker" (you are not made of sugar) — meaning you bike through it.',
    '30% Ruling Changes: The 30% ruling (tax advantage for skilled migrants where 30% of salary is tax-free) has been recently restricted. It now phases down: 30% for the first 20 months, 20% for the next 20 months, and 10% for the final 20 months. The maximum qualifying salary has been capped. Verify current terms with the Belastingdienst or a tax advisor before relying on it in financial planning.',
    'Social Integration: While virtually everyone speaks excellent English, Dutch social life operates in Dutch. Expats often report finding it easy to function professionally but difficult to build deep friendships with Dutch people. Learning Dutch, joining local clubs (sportvereniging, buurtvereniging), and making an effort to participate in Dutch cultural rhythms is the most effective integration strategy.'
  ],
  mistakes: [
    'Walking in the bike path (fietspad). This is not just annoying — it is genuinely dangerous. Dutch cyclists move fast (25-30 km/h is normal), expect clear paths, and will not swerve for pedestrians. The red-colored paths are for bikes; stay on the sidewalk.',
    'Assuming "coffee shop" means a place that sells coffee. In the Netherlands, a "coffee shop" is a licensed cannabis establishment. A "cafe" or "koffie" serves coffee. Mixing these up leads to memorable but unintended experiences.',
    'Thinking English is enough for long-term integration. While daily survival is entirely possible in English, genuine social integration, career advancement beyond the international bubble, and access to Dutch cultural life require at least conversational Dutch. Start lessons early.',
    'Not buying a bike immediately. The bicycle is not a lifestyle choice in the Netherlands — it is essential infrastructure. Buy a reliable second-hand bike with a good lock (spend more on the lock than the bike, as theft is rampant) and start cycling from day one.',
    'Ignoring the wind. The Netherlands is flat and coastal, meaning wind is a constant factor. Cycling into a headwind can double your commute time and drain your energy. Check wind direction before planning routes, and invest in proper wind- and rain-resistant clothing.'
  ],
  emergency: [
    {
      number: '112',
      service: 'Police, Fire, Ambulance',
      description: 'The unified European emergency number for all services. Operators speak Dutch and English.'
    },
    {
      number: '0900-8844',
      service: 'Police (Non-Emergency)',
      description: 'For reporting non-urgent crimes, filing complaints, or providing information to the police. Available 24/7.'
    },
    {
      number: '0800-0513',
      service: 'Huisartsenpost (After-Hours GP)',
      description: 'National number for after-hours GP care (evenings, weekends, holidays). Call before visiting — they triage by phone and direct you to the nearest location. For your local Huisartsenpost, check your GP practice information.'
    }
  ],
  sources: [
    {
      name: 'IND (Immigration and Naturalisation Service)',
      category: 'Immigration',
      description: 'The central authority for all residence permits, visa applications, naturalization, and sponsor registration in the Netherlands.',
      link: 'https://ind.nl/en'
    },
    {
      name: 'Government.nl',
      category: 'Government Services',
      description: 'Central government information portal in English covering all aspects of living, working, and doing business in the Netherlands.',
      link: 'https://www.government.nl/'
    },
    {
      name: 'Belastingdienst (Tax Authority)',
      category: 'Tax',
      description: 'Dutch tax authority managing income tax, 30% ruling applications, VAT, and all tax obligations for residents and businesses.',
      link: 'https://www.belastingdienst.nl/wps/wcm/connect/en/home/home'
    },
    {
      name: 'I amsterdam',
      category: 'City Guide & Integration',
      description: 'Official Amsterdam portal for visitors, new residents, and expats with practical guides on housing, work, culture, and city services.',
      link: 'https://www.iamsterdam.com/en'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa and residency matters, and official guidance related to the Netherlands, consult the Dutch Ministry of Foreign Affairs or a Dutch embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/netherlands',
    mfaLink: 'https://www.government.nl/ministries/ministry-of-foreign-affairs'
  },
  serviceDirectory: {
    title: "Service Directory - Netherlands",
    description: "Examples of large, commonly used service providers people often interact with when relocating to the Netherlands.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal and advisory services for residence permits, work visas, 30% ruling applications, and expat relocation programs.",
        providers: [
          { name: "Fragomen Netherlands", link: "https://www.fragomen.com" },
          { name: "Everaert Immigration Lawyers", link: "https://www.everaert.nl" },
          { name: "Loyens & Loeff", link: "https://www.loyensloeff.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms assisting with long-term rentals and property purchases, particularly in expat-heavy cities.",
        providers: [
          { name: "Funda", link: "https://www.funda.nl" },
          { name: "Pararius", link: "https://www.pararius.com" },
          { name: "Holland2Stay", link: "https://www.holland2stay.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Dutch taxation, the 30% ruling, cross-border income, and self-employment tax structures.",
        providers: [
          { name: "PwC Netherlands", link: "https://www.pwc.nl" },
          { name: "Deloitte Netherlands", link: "https://www2.deloitte.com/nl" },
          { name: "Blue Umbrella (expat tax specialists)", link: "https://www.blue-umbrella.nl" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including shipping, storage, and customs handling.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "Voerman International", link: "https://www.voerman.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Dutch language courses and integration programs for newcomers and long-term residents.",
        providers: [
          { name: "Volksuniversiteit", link: "https://www.volksuniversiteit.nl" },
          { name: "UvA Talen (University of Amsterdam)", link: "https://www.uvatalen.nl" },
          { name: "Direct Dutch Institute", link: "https://www.directdutch.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Health insurers and healthcare providers commonly used by residents and expats in the Netherlands.",
        providers: [
          { name: "Zilveren Kruis", link: "https://www.zilverenkruis.nl" },
          { name: "CZ Zorgverzekering", link: "https://www.cz.nl" },
          { name: "OLVG Hospital", link: "https://www.olvg.nl" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms connecting international professionals with Dutch employers across sectors.",
        providers: [
          { name: "Undutchables", link: "https://www.undutchables.nl" },
          { name: "Randstad Netherlands", link: "https://www.randstad.nl" },
          { name: "Hays Netherlands", link: "https://www.hays.nl" }
        ]
      }
    ]
  }
};
