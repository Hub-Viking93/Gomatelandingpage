export const slovakia = {
  id: 'slovakia',
  slug: 'slovakia',
  name: 'Slovakia',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Slovak'],
  shortDescription: 'Affordable Central European living with access to mountains and nature.',
  heroImage: 'https://images.unsplash.com/photo-1620283110809-3ff3adfe057b?',
  flagAlt: 'Flag of Slovakia',
  atAGlance: "Slovakia is Central Europe's quiet achiever — a country that offers genuine affordability, stunning natural landscapes, and a strategic location in the heart of Europe without the tourist crowds and hype of neighboring Prague or Budapest. Bratislava, the capital, sits on the Danube and is just 60 kilometers from Vienna, making it the only national capital that borders two other countries (Austria and Hungary). For residents, life revolves around the outdoors — weekends are for hiking in the High Tatras or the Low Tatras, skiing in Jasna or Donovaly, or visiting family in the countryside where life has changed little in decades. The economy has transformed dramatically since EU accession in 2004, with the automotive industry (Volkswagen, Kia, Peugeot/Stellantis, Jaguar Land Rover all have plants here) making Slovakia the world's largest car producer per capita. IT, shared services, and fintech are growing sectors, particularly around Bratislava and Kosice. The cost of living is significantly lower than in Western Europe: rent in Bratislava for a modern one-bedroom apartment costs EUR 500-800/month, and a good meal out costs EUR 8-15. However, the bureaucracy for non-EU nationals is rigid, slow, and almost entirely in Slovak, requiring patience and usually a local helper. English is spoken well by younger Slovaks in Bratislava but drops off sharply in smaller towns, in government offices, and among older generations. The country is safe, with low crime rates, and offers a slower, more traditional pace of life that rewards those who invest in learning the language and culture.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'Medium',
    primaryLanguages: 'Slovak',
  },
  visas: [
    {
      name: 'Temporary Residence (Business/Self-Employment)',
      targetAudience: 'Entrepreneurs, Self-employed professionals',
      useCase: 'For non-EU nationals acting as a statutory body of a Slovak company (s.r.o. / LLC) or registered as self-employed (Zivnost / trade license). Requires a business plan, proof of accommodation, health insurance, and a clean criminal record. The Zivnost route is popular with freelancers and digital nomads as a path to long-term European residency. Processing takes 30-90 days at the Foreign Police (Cudzinecka policia).',
      duration: 'Up to 3 years, renewable',
      link: 'https://www.minv.sk/?residencies'
    },
    {
      name: 'EU Blue Card',
      targetAudience: 'Highly qualified professionals',
      useCase: 'For non-EU nationals with a university degree and a job offer with a salary at least 1.5 times the average gross annual salary in Slovakia. Provides simplified processing, family reunification rights, and the ability to transfer to other EU member states after 12-18 months. Applied for through the Foreign Police department.',
      duration: 'Up to 4 years',
      link: 'https://www.mic.iom.sk/en/residence/temporary-residence/236-modra-karta-eu-2.html'
    },
    {
      name: 'Temporary Residence (Employment)',
      targetAudience: 'Employed professionals',
      useCase: 'For non-EU nationals with a confirmed job offer from a Slovak employer. The employer must register the vacancy with the Central Office of Labour (UPSVaR) and demonstrate that no suitable EU candidate was found within a specified period. The employee applies for the residence permit at the Foreign Police office.',
      duration: 'Up to 5 years, renewable',
      link: 'https://www.minv.sk/?residencies'
    },
    {
      name: 'National Visa (Type D)',
      targetAudience: 'Long-stay visitors, Pre-residence applicants',
      useCase: 'A national visa for stays exceeding 90 days, often used as a bridge while a temporary residence permit is processed. Also issued for specific purposes such as medical treatment, cultural exchange, or seasonal work. Applied for at a Slovak embassy or consulate abroad.',
      duration: 'Up to 1 year',
      link: 'https://www.mzv.sk/en/web/en/visa-and-services/national-visa'
    },
    {
      name: 'Permanent Residence',
      targetAudience: 'Long-term residents, Family members of EU citizens',
      useCase: 'After five years of continuous legal residence in Slovakia, non-EU nationals can apply for permanent residence. Family members (spouses, dependent children) of EU citizens can apply for permanent residence after meeting specific conditions. Permanent residence grants most rights equivalent to EU citizens except voting.',
      duration: 'Indefinite (ID card renewed every 5 years)',
      link: 'https://www.minv.sk/?residencies'
    }
  ],
  requirements: [
    {
      title: 'Foreign Police Registration (Cudzinecka policia)',
      explanation: 'Non-EU nationals must register their stay with the Foreign Police (Cudzinecka policia) within 3 working days of entry into Slovakia, unless staying in a hotel (which registers you automatically). This office also processes residence permit applications, renewals, and address changes.',
      importance: 'The Foreign Police is the central institution for all immigration matters in Slovakia. Registration deadlines are strictly enforced, and failure to register can result in fines and complications with future residence applications. Be prepared for long wait times at Foreign Police offices in Bratislava — arriving early in the morning and bringing all required documents in multiple copies is essential.',
      link: 'https://www.minv.sk/?residence-of-an-foreigner'
    },
    {
      title: 'Medical Certificate (Public Health Certificate)',
      explanation: 'After receiving temporary residence, you must submit a medical certificate within 30 days confirming you are free of diseases endangering public health (specifically tuberculosis and syphilis). The examination must be performed by an approved Slovak physician.',
      importance: 'Failure to submit the medical certificate within the deadline can result in revocation of your residence permit. The examination is straightforward (chest X-ray and blood tests) and costs EUR 50-100 at approved clinics. Keep your certificate — you may need it for renewals.',
      link: 'https://www.mic.iom.sk/en/'
    },
    {
      title: 'Accommodation Proof (Cestne prehlasenie)',
      explanation: 'A notarized statutory declaration from your landlord or property owner confirming that you are authorized to reside at the specified address. If you own the property, a land registry extract is required instead. All signatures must be notarized (overene podpisy) by a notary or at the Matrika office.',
      importance: 'Proof of accommodation is a mandatory requirement for every residence permit application and renewal. The notarized declaration must include the specific apartment/house address, the owner\'s consent, and be no more than 90 days old. Getting your landlord to provide this document can sometimes require negotiation, as some landlords are reluctant to engage with the bureaucratic process.',
      link: 'https://www.minv.sk/'
    },
    {
      title: 'Health Insurance',
      explanation: 'All residents of Slovakia must have health insurance. EU citizens can use their European Health Insurance Card initially, then register with a Slovak health insurer (VsZP, Dovera, or Union). Non-EU nationals must arrange private health insurance covering at least EUR 30,000 in medical costs for the residence permit application, then transition to public insurance once employed.',
      importance: 'Health insurance is verified during every residence permit application and renewal. The Slovak public health insurance system provides comprehensive coverage once you are contributing through employment. Private insurance for non-employed residents costs approximately EUR 30-80/month depending on age and coverage level.',
      link: 'https://www.vszp.sk/en/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Slovakia's economy is heavily driven by the automotive industry, which directly and indirectly employs a significant share of the workforce. Volkswagen (Bratislava), Kia (Zilina), Stellantis/Peugeot (Trnava), and Jaguar Land Rover (Nitra) all have major manufacturing plants. Beyond automotive, IT, shared services centers (Dell, IBM, Lenovo, Accenture, Swiss Re all operate in Bratislava), fintech, and business process outsourcing provide the most accessible opportunities for foreigners. Kosice is emerging as a secondary tech hub.",
    whereToLook: [
      "Profesia.sk (Slovakia's largest job portal)",
      "LinkedIn",
      "Karieria.sk",
      "StartupJobs.sk (for tech and startup roles)",
      "Company career pages (Volkswagen, Kia, Dell, Accenture, Swiss Re)"
    ],
    realityChecks: [
      "English is sufficient for many international company roles in Bratislava, particularly in IT, shared services, and consulting. However, Slovak is increasingly expected for daily work interactions, client-facing roles, and anything outside international firms.",
      "Work permits are required for non-EU citizens, and the process involves the employer demonstrating no suitable EU candidate was available. Processing at the Foreign Police can take 30-90 days.",
      "Hiring processes are formal and contract-focused. Employment contracts (pracovna zmluva) are detailed legal documents specifying salary, working hours, notice periods, and probationary terms. Review carefully before signing.",
      "Regional salary differences are significant. Bratislava salaries are roughly 30-50% higher than in eastern Slovakia (Kosice, Presov, Banska Bystrica) for equivalent roles."
    ]
  },
  salaryReality: {
    overview:
      "Salaries in Slovakia are lower than in Western Europe but offer reasonable purchasing power given the lower cost of living, particularly outside Bratislava. The average gross monthly salary is approximately EUR 1,400 nationally, rising to EUR 1,800-2,200 in Bratislava. IT professionals, financial analysts, and automotive engineers can earn EUR 2,000-4,000/month gross. Slovakia uses the euro, eliminating currency risk for those coming from the eurozone.",
    realityChecks: [
      "Net salary is substantially lower than gross due to high social and health insurance contributions. Combined employee contributions total approximately 13.4% of gross salary, plus progressive income tax (19% on the first EUR 41,000, then 25%). Effective take-home is roughly 70-75% of gross salary.",
      "Income differences between Bratislava and other regions are stark. The same role may pay 30-50% less in Kosice or Zilina than in the capital, though living costs are also significantly lower.",
      "Salary growth has been strong in recent years, particularly in IT and shared services, as companies compete for talent in a tightening labor market. Annual salary reviews of 5-10% are common in competitive sectors.",
      "Meal vouchers (stravne listky) are a standard employee benefit — employers are legally required to contribute to employee meals. These vouchers (paper or electronic via Edenred, Up, Sodexo) are accepted at most restaurants and supermarkets and represent a genuine addition to compensation."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The significant gap between gross and net salary after social insurance, health insurance, and income tax deductions (approximately 25-30% of gross)",
      "Mandatory social insurance contributions paid by the employer (35.2% on top of gross salary), which affect the total cost of employment and are sometimes confused with employee costs",
      "Heating costs during winter (October through April), which can add EUR 80-200/month depending on apartment size and insulation quality — older panel buildings (paneláky) vary widely",
      "The practical value of meal vouchers and other non-salary benefits (transportation subsidies, supplementary pension contributions) which are common but rarely mentioned in salary figures"
    ]
  },
  housingSystem: {
    overview:
      "Slovakia's rental market is predominantly private, with most transactions between individual landlords and tenants rather than through institutional property companies. In Bratislava, popular areas for expats and professionals include the Old Town (Stare Mesto), Ruzinov, Petrzalka (the most populous borough, with extensive Soviet-era panel housing now largely renovated), and Nove Mesto. In Kosice, the Old Town and Juzne Mesto (South Town) are common. Rents in Bratislava for a modern one-bedroom apartment range from EUR 500-800/month in the center, dropping to EUR 350-550 in outer boroughs.",
    expectations:
      "Search on Nehnutelnosti.sk, Reality.sk, and Bezrealitky.sk (direct from landlord, no agent fees). Facebook marketplace and expat groups are also active. Agents charge a commission of one month's rent, which is standard if used. Expect to pay a one to two-month security deposit plus the first month's rent upfront. Lease terms are typically one year. Utility costs (heating, water, electricity, gas) are usually paid separately — in older panel buildings, central heating is controlled building-wide and included in a monthly advance payment that is reconciled annually. Verify the heating system, insulation quality, and annual utility cost history before signing. New-build apartments offer individual thermostats and better energy efficiency."
  },
  healthcareReality:
    "Slovakia has a universal public healthcare system funded through mandatory health insurance contributions. Every employed person and their employer contribute, providing access to a wide range of medical services. The three insurance providers are VsZP (state-owned, largest), Dovera, and Union. Public healthcare covers general practitioners, specialists, hospital stays, and most medications with small co-payments. However, waiting times for specialist appointments and elective procedures can be long — weeks for dermatology, months for non-urgent orthopedic surgery. Many residents supplement with private healthcare for faster access. ProCare (private hospital network including Bratislava's Borny hospital), AGEL SK, and Medirex provide private services. A private specialist consultation costs EUR 30-80. The quality of care in Bratislava is good, with many doctors speaking English. In smaller towns, medical care is adequate but facilities may be older, and English-speaking doctors are rare. Dental care is covered by public insurance for basic procedures, while cosmetic dentistry is private but affordable by European standards.",
  digitalLife: {
    overview:
      "Slovakia has been investing in digital government services, with the Slovensko.sk portal providing access to electronic mailboxes, tax filings, and interactions with government agencies. However, the transition to digital is incomplete — many processes still require physical visits, paper documents, and stamps. Cashless payments are widely accepted in Bratislava but less consistently in smaller towns.",
    essentials: [
      "Slovensko.sk (e-government portal with electronic mailbox for official communications)",
      "eID card with electronic chip (for accessing digital government services)",
      "Tatra Banka, SLSP, or VUB banking apps (major banks with good mobile platforms)",
      "Bolt or Uber (ride-hailing in Bratislava and Kosice)"
    ],
    whatSurprisesNewcomers: [
      "The Slovensko.sk electronic mailbox becomes mandatory for many official communications once you have a residence permit and eID. Check it regularly — official notices delivered through it have legal force even if you do not read them.",
      "Card payments are standard in Bratislava shops, restaurants, and services. However, smaller businesses in rural areas and markets may still prefer cash (euros).",
      "Internet speeds are good in urban areas — fiber broadband from Slovak Telekom, Orange, and O2 offers 100-500 Mbps. Coverage in rural areas is less consistent, with 4G as the primary alternative.",
      "The Slovak Post (Slovenska posta) handles many administrative tasks that are digital in other countries. Registered letters, official document submission, and certificate collection often still require a visit to the post office."
    ]
  },
  culture: {
    text: 'Slovaks are humble, initially reserved, and deeply connected to nature and their countryside traditions. Family is the bedrock of social life, and extended family gatherings — particularly around holidays and name days (meniny, celebrated alongside birthdays) — are important social events. The outdoor lifestyle defines weekends: hiking in the Tatras is not a hobby but a way of life, and Slovaks can debate the best trails with the passion others reserve for football. Lunch is traditionally the main meal of the day, often a multi-course affair. Food culture centers around hearty, filling dishes suited to the continental climate: bryndzove halusky (potato dumplings with sheep cheese and bacon) is the undisputed national dish. Hospitality is warm once you are inside someone\'s home — guests are fed generously and offered homemade slivovica (plum brandy) or borovicka (juniper spirit). Alcohol is deeply embedded in social culture; toasting is frequent, and declining a drink can require diplomatic skill.',
    highlights: [
      'Bryndzove halusky (potato dumplings with bryndza sheep cheese and bacon bits) is the national dish and a source of genuine pride. Try it at a traditional koliba (wooden chalet restaurant) in the mountains.',
      'Name days (meniny) are celebrated alongside birthdays. Every day of the year is assigned a name, and when your name day arrives, colleagues, friends, and family congratulate you. Check the calendar and acknowledge others\' name days to build goodwill.',
      'Remove your shoes when entering someone\'s home. The host will provide guest slippers (papuce). Walking in outdoor shoes is considered rude. This is not a suggestion — it is a firm social rule.',
      'Borovicka (juniper brandy) and slivovica (plum brandy) are the national spirits, often homemade. When offered a glass, accepting with "Na zdravie!" (To health!) is the polite response. Refusing requires a good excuse.',
      'Slovakia has over 600 castles, chateaux, and ruins — one of the highest densities in the world. Spis Castle is among the largest castle complexes in Central Europe and a UNESCO World Heritage Site.'
    ]
  },
  transportationMobility:
    "Bratislava has a reliable public transport network of trams, buses, and trolleybuses operated by Dopravny podnik Bratislava (DPB). The system covers the city well, running from approximately 5 AM to 11 PM, with night buses on select routes. E-tickets can be purchased via the IDS BK app or at ticketing machines. A monthly pass costs approximately EUR 30. Intercity rail connects Bratislava to Kosice (about 5 hours on express trains), Zilina, Banska Bystrica, and Poprad (gateway to the High Tatras). Trains are operated by ZSSK and are affordable but can be slow on non-express routes. RegioJet operates competing intercity bus and train routes with modern vehicles and good service. FlixBus provides international connections. Bratislava to Vienna is just 60 km — the Twin City Liner catamaran crosses the Danube in 75 minutes, or you can take a bus/train in about 1 hour. Car ownership is common, especially for accessing the mountains and countryside. Winter tires are mandatory from November 15 to March 31 when roads are covered in snow or ice.",
  internationalConnectivity:
    "Bratislava Airport (BTS) handles a growing number of European flights, primarily through Ryanair and Wizz Air. However, many residents use Vienna International Airport (VIE), which is only 60 km away (45 minutes by car or 1 hour by bus/train) and offers extensive global connections. Flight time from Vienna to London is approximately 2 hours, to New York about 9 hours. Kosice Airport serves eastern Slovakia with connections to London, Vienna, and select European cities. The Bratislava-Vienna corridor is one of the most convenient dual-airport setups in Europe, giving residents access to a major international hub at a fraction of Vienna's living costs.",
  travelExploration:
    "Slovakia is a paradise for outdoor enthusiasts. The High Tatras (Vysoke Tatry) are the smallest high mountain range in the world, rising to 2,655 meters at Gerlachovsky stit, and offering world-class hiking, skiing, and mountaineering within 3-4 hours of Bratislava. The Low Tatras, Mala Fatra, and Slovak Paradise National Park (with its system of ladders, chains, and gorge walks) provide additional mountain experiences. Banska Stiavnica, a UNESCO World Heritage mining town, is one of the most picturesque small towns in Europe. Spis Castle is a massive medieval ruin overlooking the eastern countryside. The Dobsina Ice Cave and Demanovska Cave of Liberty are among the finest cave systems in Central Europe. For wine lovers, the Small Carpathian Wine Route near Bratislava produces excellent whites. Weekend trips to Vienna (1 hour), Budapest (2.5 hours), Prague (3.5 hours), and Krakow (4 hours) are all easily accessible by train or car.",
  considerations: [
    'Language Barrier: Slovak is the sole official language, and government offices, the Foreign Police, healthcare reception, and most daily interactions outside international workplaces operate exclusively in Slovak. Having a Slovak-speaking helper for bureaucratic processes is practically essential for non-EU nationals. Learning basic Slovak accelerates integration significantly.',
    'Bureaucratic Pace: Administrative processes, particularly at the Foreign Police (Cudzinecka policia), are slow and paper-heavy. Expect multiple visits, long queues, and requirements for notarized documents, official translations, and apostilled certificates from your home country. Start early and bring every document in multiple copies.',
    'Winter Conditions: Slovakia has genuine continental winters. Temperatures can drop to -15C or below in the mountains and -5 to -10C in Bratislava. Snow tires are legally mandatory when conditions warrant, and heating costs during winter months are a significant household expense.',
    'Sunday and Holiday Closures: Most shops (except small exceptions) are closed on public holidays, and Sunday opening hours are limited. Some supermarkets remain open, but smaller shops and businesses close. Plan your shopping and errands accordingly.',
    'Service Style: Service in restaurants, shops, and government offices can feel brusque or unsmiling compared to American or Southern European norms. This is not personal hostility — it is simply the Central European service culture. Do not interpret directness or lack of small talk as rudeness.'
  ],
  mistakes: [
    'Calling it "Czechoslovakia." Czechoslovakia peacefully dissolved on January 1, 1993 (the "Velvet Divorce"). Slovakia is an independent country with its own language, culture, and identity. Using the old name suggests ignorance of the last three decades of history.',
    'Confusing Slovakia with Slovenia. Different country, different location, different language, different flag. Slovakia is in Central Europe (borders Austria, Hungary, Czech Republic, Poland, Ukraine). Slovenia borders Italy, Austria, Hungary, and Croatia. Slovaks hear this confusion constantly and find it tiresome.',
    'Expecting late-night shopping. Slovakia is not a 24/7 culture. Most shops close by 7-8 PM on weekdays, earlier on Saturdays, and many are closed on Sundays and public holidays. Plan accordingly.',
    'Hiking in the High Tatras without proper equipment. The Tatras are real mountains with real dangers: weather changes rapidly, trails include exposed sections and chains, and rescue operations are expensive and sometimes dangerous. Proper hiking boots, layered clothing, and mountain maps are essential — flip-flops will not do.',
    'Ignoring name days. In Slovak culture, name days (meniny) are nearly as important as birthdays. Forgetting to congratulate a colleague or friend on their name day when everyone else does signals that you are not paying attention to local customs.'
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency (EU Standard)',
      description: 'Unified European emergency number connecting to the Integrated Rescue System (police, fire, ambulance). Operators speak Slovak and English.'
    },
    {
      number: '158',
      service: 'State Police (Policia SR)',
      description: 'Direct line to the Slovak State Police for crime reporting and security emergencies.'
    },
    {
      number: '155',
      service: 'Emergency Medical Service (Ambulance)',
      description: 'Medical emergency dispatch for ambulance services throughout Slovakia.'
    }
  ],
  sources: [
    {
      name: 'Migration Information Centre (MIC/IOM)',
      category: 'Immigration & Integration',
      description: 'Comprehensive resource for foreign nationals on residence permits, employment, healthcare, and integration in Slovakia. Operated by the International Organization for Migration.',
      link: 'https://www.mic.iom.sk/en/'
    },
    {
      name: 'Ministry of Interior (Ministerstvo vnutra SR)',
      category: 'Immigration & Residency',
      description: 'Authority managing the Foreign Police, residence permits, and all immigration-related matters for foreign nationals.',
      link: 'https://www.minv.sk/'
    },
    {
      name: 'Ministry of Foreign Affairs',
      category: 'Visas & Consular Services',
      description: 'Manages visa applications through Slovak embassies and consulates worldwide, providing entry requirement information.',
      link: 'https://www.mzv.sk/en/web/en'
    },
    {
      name: 'Slovakia Travel',
      category: 'Tourism & Culture',
      description: 'Official tourism portal with guides to attractions, hiking trails, cultural events, and travel information.',
      link: 'https://slovakia.travel/en'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to Slovakia, consult the Slovak Ministry of Foreign Affairs or a Slovak embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/slovakia',
    mfaLink: 'https://mzv.sk/en/web/en'
  },
  serviceDirectory: {
    title: "Service Directory - Slovakia",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Slovakia.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal assistance for residence permits, work authorization, trade license registration, and Foreign Police procedures.",
        providers: [
          { name: "Dentons Slovakia", link: "https://www.dentons.com" },
          { name: "Wolf Theiss Slovakia", link: "https://www.wolftheiss.com" },
          { name: "Taylor Wessing Slovakia", link: "https://www.taylorwessing.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Professionals handling property rentals and purchases in Bratislava, Kosice, and other Slovak cities.",
        providers: [
          { name: "Reality.sk", link: "https://www.reality.sk" },
          { name: "Nehnutelnosti.sk", link: "https://www.nehnutelnosti.sk" },
          { name: "RE/MAX Slovakia", link: "https://www.remax.sk" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Slovak tax law, trade license compliance, social insurance, and cross-border income considerations.",
        providers: [
          { name: "PwC Slovakia", link: "https://www.pwc.com/sk" },
          { name: "EY Slovakia", link: "https://www.ey.com/sk_sk" },
          { name: "KPMG Slovakia", link: "https://kpmg.com/sk" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including shipping, customs handling, and local moves.",
        providers: [
          { name: "Crown Relocations Slovakia", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "AGS Worldwide Movers Slovakia", link: "https://www.agsmovers.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Slovak language courses and integration programs for newcomers and long-term residents.",
        providers: [
          { name: "Studia Academica Slovaca (Comenius University)", link: "https://fphil.uniba.sk/en/sas/" },
          { name: "Slovak Academic Information Agency (SAIA)", link: "https://www.saia.sk" },
          { name: "Berlitz Slovakia", link: "https://www.berlitz.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private healthcare networks and hospitals commonly used by expats in Slovakia.",
        providers: [
          { name: "ProCare (Borny Hospital Bratislava)", link: "https://www.procare.sk" },
          { name: "AGEL SK", link: "https://www.agel.sk" },
          { name: "Medirex", link: "https://www.medirex.sk" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms and platforms connecting professionals with Slovak employers.",
        providers: [
          { name: "Profesia.sk", link: "https://www.profesia.sk" },
          { name: "Hays Slovakia", link: "https://www.hays.sk" },
          { name: "Manpower Slovakia", link: "https://www.manpower.sk" }
        ]
      }
    ]
  }
};
