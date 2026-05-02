export const turkey = {
  id: 'turkey',
  slug: 'turkey',
  name: 'Turkey',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Turkish', 'English (limited)'],
  shortDescription: 'A transcontinental crossroads where ancient history, vibrant culture, and affordable living draw a growing wave of expats and digital nomads.',
  heroImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200',
  flagAlt: 'Flag of Turkey',
  atAGlance: "Turkey sits at the intersection of Europe and Asia, and that duality defines daily life. Istanbul is a global megacity with world-class infrastructure, while Antalya and the Aegean coast offer a slower, sun-drenched Mediterranean lifestyle at a fraction of European prices. The country runs on personal relationships, hospitality, and a deep cultural pride. Bureaucracy exists but is navigable with patience and the right paperwork. The Turkish lira's volatility means that foreign-currency earners live extremely well, while local salaries are modest. Tea is offered everywhere — in shops, offices, even at the mechanic — and refusing it is considered rude. Turkey is secular by constitution but culturally Muslim, and Ramadan shapes the rhythm of public life for a month each year. The cost of private healthcare rivals Western quality at a fraction of the price, making Turkey a medical tourism hub. For newcomers, the biggest adjustment is not the culture — Turks are among the most welcoming people on earth — but the pace of bureaucracy and the economic unpredictability that comes with a volatile currency.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 90 days in 180 days (e-Visa)',
    costOfLiving: 'Low-Medium',
    primaryLanguages: 'Turkish (Official), English (limited in daily life)',
  },
  visas: [
    {
      name: 'Tourist e-Visa',
      targetAudience: 'Tourists, Short-term visitors',
      useCase: 'Tourism, family visits, or short business meetings. Available online for most nationalities.',
      duration: 'Up to 90 days within 180 days',
      link: 'https://www.evisa.gov.tr/en/'
    },
    {
      name: 'Digital Nomad / Remote Worker Permit',
      targetAudience: 'Remote workers, Freelancers',
      useCase: 'For foreign nationals working remotely for companies or clients outside Turkey. Requires proof of minimum monthly income (currently ~$3,000/month).',
      duration: 'Up to 1 year (renewable)',
      link: 'https://www.goc.gov.tr/en'
    },
    {
      name: 'Retirement Residence Permit',
      targetAudience: 'Retirees',
      useCase: 'For foreign retirees who can demonstrate sufficient income or savings to support themselves without working in Turkey.',
      duration: 'Up to 2 years (renewable)',
      link: 'https://e-ikamet.goc.gov.tr/'
    },
    {
      name: 'Investment / Citizenship by Investment',
      targetAudience: 'Investors, Entrepreneurs',
      useCase: 'Real estate purchase of $400,000+ or bank deposit of $500,000+ qualifies for Turkish citizenship. Lower thresholds available for residence permits.',
      duration: 'Permanent (citizenship) or 2 years (residence)',
      link: 'https://www.invest.gov.tr/en/pages/default.aspx'
    }
  ],
  requirements: [
    {
      title: 'Residence Permit (Ikamet)',
      explanation: 'The ikamet is your legal right to stay in Turkey beyond the tourist visa period. Applications are made online through the e-ikamet system and followed by an in-person appointment at the local immigration office (Goc Idaresi).',
      importance: 'Without a valid ikamet, you cannot legally rent a property in your name, open a bank account, get a Turkish phone line, or access the public healthcare system (SGK). Overstaying without one results in fines and potential entry bans.',
      link: 'https://e-ikamet.goc.gov.tr/'
    },
    {
      title: 'Tax Number (Vergi Numarasi)',
      explanation: 'A tax identification number issued by the local tax office (Vergi Dairesi). Available to anyone, including tourists, and can often be obtained on the same day with just a passport.',
      importance: 'Required to open a bank account, sign a rental contract, set up utilities, buy property, and conduct virtually any financial transaction in Turkey. This is typically the first document you should obtain after arrival.',
      link: 'https://ivd.gib.gov.tr/'
    },
    {
      title: 'Turkish ID Number (Kimlik Numarasi)',
      explanation: 'An 11-digit identification number assigned to foreign residents when they receive their residence permit. It functions similarly to a national ID number for Turkish citizens.',
      importance: 'Your kimlik number is used for healthcare enrollment (SGK), banking, mobile phone contracts, e-Devlet (e-Government) access, and nearly every official interaction. Without it, you are limited to tourist-level services.',
      link: 'https://www.nvi.gov.tr/en'
    },
    {
      title: 'e-Devlet (e-Government) Access',
      explanation: 'Turkey\'s centralized digital government portal where residents can access tax records, residence permit status, healthcare enrollment, utility subscriptions, court records, and dozens of other services.',
      importance: 'e-Devlet is increasingly required for routine tasks. You can register via PTT (post office) with your kimlik number and passport. Without it, many administrative tasks require in-person visits to multiple offices.',
      link: 'https://www.turkiye.gov.tr/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Turkey's job market for foreigners is dominated by English teaching, remote work for international clients, and tourism-related roles. Local salaries are low by Western standards, but foreign-currency income stretches very far due to the weak lira. Istanbul has a growing startup ecosystem, while coastal cities attract freelancers and digital nomads.",
    whereToLook: [
      "LinkedIn",
      "Kariyer.net (Turkey's largest job board)",
      "Yabangee.com (expat community and job listings)",
      "ESL job boards for English teaching roles",
      "Remote OK, We Work Remotely for remote positions"
    ],
    realityChecks: [
      "Work permits are employer-sponsored and bureaucratic; most expats work remotely or teach English.",
      "Local salaries average 30,000-50,000 TRY/month (~$900-1,500), which is modest even by local standards.",
      "English teaching positions are abundant but pay varies wildly — $1,000-2,500/month depending on the school.",
      "Freelancing on foreign contracts while on a residence permit is common but exists in a legal gray area."
    ]
  },
  salaryReality: {
    overview:
      "Turkish minimum wage is adjusted twice yearly due to inflation. Local professional salaries are low by European standards but cover local costs. The real advantage is earning in USD, EUR, or GBP — foreign-currency earners can live a very comfortable lifestyle for $2,000-3,000/month in most cities.",
    realityChecks: [
      "Minimum wage is approximately 22,000 TRY/month (2024), roughly $700 — and many jobs pay close to it.",
      "Inflation and lira depreciation mean salary figures from even 6 months ago are outdated.",
      "Foreign-currency earners benefit enormously from exchange rates, but this can reverse if the lira strengthens.",
      "Istanbul salaries are 30-50% higher than other cities, but so is the cost of living."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The impact of 40-50% annual inflation on purchasing power",
      "Employer-side SGK contributions (social security) that reduce net pay",
      "How quickly rent and grocery prices change compared to salary adjustments"
    ]
  },
  housingSystem: {
    overview:
      "Renting is straightforward and affordable outside Istanbul. Agents (emlakci) are common and typically charge one month's rent as commission. Leases are usually 1 year with annual rent increases capped by government regulation (though enforcement varies). Istanbul is significantly more expensive — expect $500-1,200/month for a decent apartment in central areas — while Antalya, Izmir, and smaller cities offer similar quality for $250-600/month.",
    expectations:
      "Landlords often prefer cash payments or bank transfers. Furnished apartments are widely available, especially in expat-heavy areas. Always get a notarized lease (kira kontrati) and register it with the tax office. Avoid paying large deposits without a signed contract. Sahibinden.com is the dominant property listing platform."
  },
  healthcareReality:
    "Turkey has a dual healthcare system. The public system (SGK) provides universal coverage for residents who contribute via employment or voluntary enrollment — it covers everything from GP visits to surgery, though public hospitals can be crowded and waits long. Private healthcare is where Turkey truly shines: world-class hospitals (many JCI-accredited), English-speaking doctors, and prices 50-80% lower than Western Europe. A private health insurance policy costs $50-150/month and gives access to top-tier facilities like Acibadem, Memorial, and Medical Park hospital chains.",
  digitalLife: {
    overview:
      "Turkey is rapidly digitizing. The e-Devlet portal centralizes government services, mobile banking apps are excellent, and contactless payment is widespread in cities. However, outside major urban areas, cash is still king and in-person bureaucracy remains common.",
    essentials: [
      "e-Devlet (e-Government portal)",
      "Mobile banking apps (Ziraat, Garanti BBVA, Isbank)",
      "BiP or WhatsApp (primary messaging)",
      "Yemeksepeti (food delivery)",
      "Sahibinden (property, cars, classifieds)"
    ],
    whatSurprisesNewcomers: [
      "Turkey blocks certain websites and services periodically — a VPN is essential.",
      "Getting a Turkish phone number requires your passport and tax number at the store.",
      "Foreign phones must be registered with IMEI within 120 days or they stop working on Turkish networks.",
      "e-Devlet access requires a trip to PTT (post office) for initial password setup."
    ]
  },
  culture: {
    text: "Turkish culture is built on hospitality (misafirperverlik), family bonds, and social warmth that can feel overwhelming to newcomers from reserved cultures. Tea (cay) is the social glue — offered in every shop, office, and home, often accompanied by conversation that builds into genuine friendship. Turkey is constitutionally secular but culturally Muslim; alcohol is available everywhere, but Ramadan visibly shapes public life for a month. Respect for elders is deeply ingrained, and family opinions carry significant weight in personal decisions. Turks are direct in their warmth but indirect about conflict — saving face matters greatly.",
    highlights: [
      "Accepting tea when offered is a social expectation; refusing can feel dismissive.",
      "Ramadan affects restaurant hours, social rhythms, and public behavior for ~30 days each year.",
      "Remove shoes when entering any home — this is universal and non-negotiable.",
      "Turks celebrate both secular holidays (Republic Day, Oct 29) and religious ones (Bayram festivals).",
      "Bargaining is expected in bazaars and small shops, but not in supermarkets or malls.",
      "Personal questions about family, marriage, and children are considered friendly, not intrusive."
    ]
  },
  transportationMobility:
    "Istanbul has an extensive metro, tram, ferry, and bus network connected by the Istanbulkart (rechargeable transit card). Other cities have growing public transit systems but are more car-dependent. Dolmus (shared minibuses) fill gaps everywhere and are cheap. Domestic flights are remarkably affordable — Istanbul to Antalya for $20-40 is common via Pegasus or AnadoluJet. Intercity buses (operated by companies like Metro Turizm and Kamil Koc) are comfortable, cheap, and connect every city.",
  internationalConnectivity:
    "Istanbul Airport (IST) is one of the world's largest hubs, with Turkish Airlines offering direct flights to over 300 destinations — more than any other airline. Sabiha Gokcen (SAW) on the Asian side handles budget carriers. Antalya Airport (AYT) is a major seasonal hub for European flights. Turkey's geographic position makes it a natural gateway between Europe, the Middle East, Central Asia, and Africa.",
  travelExploration:
    "Turkey offers extraordinary domestic travel diversity: Cappadocia's fairy chimneys and hot air balloons, the turquoise Aegean and Mediterranean coasts, the lush Black Sea highlands, ancient ruins at Ephesus and Pamukkale, and the wild landscapes of Eastern Anatolia. Weekend trips from Istanbul to the Princes' Islands or Bursa are easy. The country has 19 UNESCO World Heritage Sites and a coastline stretching over 7,000 kilometers.",
  considerations: [
    "Lira Volatility: The Turkish lira has lost significant value over recent years. This benefits foreign-currency earners but means local prices change frequently. Rent, groceries, and services can increase 30-50% year over year.",
    "Bureaucracy: Government processes are improving with digitization but still require patience. Residence permit appointments can take weeks, and paperwork often needs notarized translations (noter tasdikli tercume).",
    "Earthquake Risk: Turkey sits on major fault lines. Istanbul, in particular, is considered overdue for a significant earthquake. Check building construction standards before renting, and keep an emergency kit.",
    "Political Climate: Turkey's political environment is dynamic. Freedom of expression online is restricted, and certain topics are sensitive. VPN usage is widespread among expats and locals alike.",
    "Internet Censorship: Wikipedia, certain VPN services, and various websites have been intermittently blocked. A reliable VPN subscription is considered essential by most expats."
  ],
  mistakes: [
    "Not registering a foreign phone's IMEI within 120 days — your phone will be blocked from Turkish mobile networks, and fixing it retroactively is expensive and complicated.",
    "Assuming English is widely spoken outside tourist areas. Learning basic Turkish (even 50 phrases) dramatically improves daily life and how locals treat you.",
    "Signing a rental contract without notarization or tax office registration — this leaves you with no legal protection if disputes arise.",
    "Converting all savings to Turkish lira. Experienced expats keep savings in USD/EUR and convert only what they need for monthly expenses.",
    "Ignoring earthquake preparedness. Keep a go-bag, know your building's evacuation plan, and download the AFAD (disaster authority) app."
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency',
      description: 'Ambulance, Fire, and general emergencies. Operators may have limited English.'
    },
    {
      number: '155',
      service: 'Police (Polis)',
      description: 'For crimes, theft, and security emergencies. Tourist police units in major cities speak English.'
    },
    {
      number: '156',
      service: 'Gendarmerie (Jandarma)',
      description: 'Law enforcement in rural areas and small towns outside city police jurisdiction.'
    },
    {
      number: '182',
      service: 'ALO 182 Tourism Hotline',
      description: 'Multilingual assistance for tourists and foreign residents with complaints, information, and emergencies.'
    }
  ],
  sources: [
    {
      name: 'Directorate General of Migration Management',
      category: 'Immigration',
      description: 'The official authority for residence permits, visa extensions, and immigration procedures.',
      link: 'https://www.goc.gov.tr/en'
    },
    {
      name: 'e-Ikamet (Online Residence Permit)',
      category: 'Immigration',
      description: 'The official online portal for residence permit applications and appointment booking.',
      link: 'https://e-ikamet.goc.gov.tr/'
    },
    {
      name: 'e-Devlet (e-Government Portal)',
      category: 'Government Services',
      description: 'Centralized digital portal for all government services, from tax records to healthcare enrollment.',
      link: 'https://www.turkiye.gov.tr/'
    },
    {
      name: 'Revenue Administration (GIB)',
      category: 'Tax',
      description: 'Turkish tax authority for tax numbers, declarations, and fiscal obligations.',
      link: 'https://www.gib.gov.tr/'
    },
    {
      name: 'Ministry of Health',
      category: 'Healthcare',
      description: 'Official health information, SGK enrollment, and public hospital directory.',
      link: 'https://www.saglik.gov.tr/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa inquiries, and official guidance related to Turkey, consult the Turkish Ministry of Foreign Affairs or locate your nearest Turkish embassy or consulate.',
    directoryLink: 'https://www.embassypages.com/turkey',
    mfaLink: 'https://www.mfa.gov.tr/default.en.mfa'
  },
  serviceDirectory: {
    title: "Service Directory - Turkey",
    description: "Examples of established service providers commonly used by expats relocating to Turkey.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal assistance for residence permits, work permits, citizenship applications, and deportation appeals.",
        providers: [
          { name: "Fragomen Turkey", link: "https://www.fragomen.com" },
          { name: "Deloitte Turkey", link: "https://www2.deloitte.com/tr/en.html" },
          { name: "Balcioglu Selcuk Ardiyok Keki (BASEAK)", link: "https://www.baseak.com/en" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Property sales, rentals, and relocation housing services across Turkey's major cities.",
        providers: [
          { name: "Sahibinden.com", link: "https://www.sahibinden.com" },
          { name: "Remax Turkey", link: "https://www.remax.com.tr" },
          { name: "Coldwell Banker Turkey", link: "https://www.coldwellbanker.com.tr" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax compliance, bookkeeping, and financial advisory for expats and businesses in Turkey.",
        providers: [
          { name: "PwC Turkey", link: "https://www.pwc.com.tr/en" },
          { name: "EY Turkey", link: "https://www.ey.com/tr_tr" },
          { name: "KPMG Turkey", link: "https://kpmg.com/tr/en/home.html" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation, shipping, packing, and customs clearance services.",
        providers: [
          { name: "AGS Movers Turkey", link: "https://www.agsmovers.com/en/our-agencies/turkey" },
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Hareket Global Logistics", link: "https://www.hareket.com/en" }
        ]
      },
      {
        name: "Language Schools",
        description: "Turkish language courses for foreigners, from beginner to advanced, in-person and online.",
        providers: [
          { name: "Tomer (Ankara University)", link: "https://tomer.ankara.edu.tr/" },
          { name: "Dilmer", link: "https://www.dilmer.com" },
          { name: "Turkish Language Centre (Istanbul)", link: "https://www.turkishlanguage.co.uk" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private hospital groups and clinics widely used by expats for quality English-speaking care.",
        providers: [
          { name: "Acibadem Healthcare Group", link: "https://www.acibadem.com.tr/en/" },
          { name: "Memorial Health Group", link: "https://www.memorial.com.tr/en/" },
          { name: "Medical Park Hospitals", link: "https://www.medicalpark.com.tr/en" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms and platforms connecting talent with opportunities in Turkey.",
        providers: [
          { name: "Kariyer.net", link: "https://www.kariyer.net" },
          { name: "Randstad Turkey", link: "https://www.randstad.com.tr" },
          { name: "Adecco Turkey", link: "https://www.adecco.com.tr" }
        ]
      }
    ]
  }
};
