export const cyprus = {
  id: 'cyprus',
  slug: 'cyprus',
  name: 'Cyprus',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Greek', 'Turkish'],
  shortDescription: 'A relaxed Mediterranean island with attractive tax schemes and a divided geography.',
  heroImage: 'https://images.unsplash.com/photo-1662199543290-25a78f85200f?',
  flagAlt: 'Flag of Cyprus',
  atAGlance: "Cyprus is a sun-drenched Mediterranean island where the pace of life is governed by 'siga-siga' (slowly, slowly) and the culture revolves around long meals, strong coffee, and deep personal relationships. It has become a major destination for international business, particularly in the technology, iGaming, forex, and shipping sectors, largely due to its favorable tax regime—including the Non-Domiciled (Non-Dom) status that exempts qualifying residents from tax on dividends and interest for 17 years. Limassol has transformed into a genuine international hub, with a waterfront skyline of new towers, Russian, British, Israeli, and Eastern European communities, and a density of tech companies that has earned it the nickname 'Limassolicon.' Nicosia, the world's last divided capital, is the administrative center and a more traditionally Cypriot city. Paphos and Larnaca offer quieter, more affordable alternatives. The island is physically divided: the Republic of Cyprus (internationally recognized, EU member) controls the southern two-thirds, while the Turkish Republic of Northern Cyprus occupies the northern third, separated by a UN buffer zone (the Green Line). This division affects everything from property law to travel logistics. Daily life is car-dependent, as public transport is limited to infrequent bus services. The bureaucracy still loves paper, stamps, and physical visits, which can frustrate newcomers used to digital-first government services. The heat in July and August is fierce (40C+), pushing all activity indoors or to late evening. But for those seeking a Mediterranean lifestyle with genuine tax advantages, 340 days of sunshine per year, English widely spoken (legacy of British colonial rule until 1960), and a safe, family-friendly environment, Cyprus delivers consistently.",
  overview: {
    euStatus: 'EU Member (Non-Schengen)',
    stayLength: 'Up to 90 days',
    costOfLiving: 'Medium',
    primaryLanguages: 'Greek (English widely spoken)',
  },
  visas: [
    {
      name: 'Digital Nomad Visa',
      targetAudience: 'Remote workers with foreign employers or clients',
      useCase: 'For non-EU citizens employed by or freelancing for companies registered outside Cyprus, earning at least EUR 3,500/month net. The scheme was capped at 500 permits initially but has been expanding. Applicants must provide proof of employment or freelance contracts, health insurance covering Cyprus, and a clean criminal record. Processed by the Civil Registry and Migration Department (CRMD).',
      duration: '1 year, renewable for up to 3 years',
      link: 'https://www.mip.gov.cy/'
    },
    {
      name: 'Category F Permit (Pink Slip)',
      targetAudience: 'Retirees and individuals with stable overseas income',
      useCase: 'For non-EU citizens with stable passive income from abroad (pensions, investments, rental income) who do not intend to work in Cyprus. Requires proof of sufficient financial resources (typically EUR 1,000-2,000/month minimum depending on family size), private health insurance, and a clean criminal record. One of the most popular pathways for retirees and financially independent individuals.',
      duration: '1-2 years, renewable',
      link: 'https://www.mip.gov.cy/'
    },
    {
      name: 'Permanent Residence by Investment (Fast-Track)',
      targetAudience: 'Property investors',
      useCase: 'A fast-track permanent residence permit available to non-EU citizens who purchase new property worth at least EUR 300,000 (plus VAT) and demonstrate an annual income of at least EUR 50,000 from abroad. The application is processed in approximately 2 months. The property must be retained for the duration of the permit. Dependents (spouse, children under 25) are included.',
      duration: 'Permanent (subject to maintaining investment)',
      link: 'https://www.mip.gov.cy/'
    },
    {
      name: 'Employment Permit',
      targetAudience: 'Non-EU workers with a job offer in Cyprus',
      useCase: 'For non-EU citizens with a confirmed job offer from a Cypriot employer. The employer must demonstrate that no suitable EU/EEA citizen is available for the position. The application involves the Department of Labour and the Civil Registry and Migration Department. Processing takes 4-8 weeks. The permit is tied to the specific employer.',
      duration: '1-2 years, renewable',
      link: 'https://www.mlsi.gov.cy/'
    },
    {
      name: 'Short-Stay Visa (National Visa)',
      targetAudience: 'Tourists and short-term business visitors',
      useCase: 'For non-EU citizens visiting Cyprus for tourism, business meetings, or family visits. Cyprus is an EU member but NOT yet in the Schengen area, so Schengen visas are not automatically valid for Cyprus (though Cyprus accepts some Schengen visas for entry). Check the MFA website for your nationality\'s specific requirements.',
      duration: 'Up to 90 days',
      link: 'https://mfa.gov.cy/visa-information.html'
    }
  ],
  requirements: [
    {
      title: 'Alien Registration Certificate (ARC)',
      explanation: 'The mandatory registration for all foreign nationals residing in Cyprus. EU citizens receive a Yellow Slip (Registration Certificate); non-EU citizens receive a Pink Slip (Temporary Residence Permit) after their visa or permit is approved. Both are issued by the Civil Registry and Migration Department (CRMD).',
      importance: 'The ARC (Yellow or Pink Slip) is your primary identification and proof of legal residence in Cyprus. It is required for opening bank accounts, signing rental contracts, enrolling in GESY (the national health system), registering a vehicle, and interacting with all government services. Processing times at CRMD can be long (weeks to months), so apply as early as possible and follow up persistently.',
      link: 'https://www.mip.gov.cy/'
    },
    {
      title: 'TIC (Tax Identification Code)',
      explanation: 'Your tax identification number issued by the Tax Department of the Republic of Cyprus. Required for all residents who will be earning income, owning property, or conducting financial transactions in Cyprus.',
      importance: 'The TIC is needed for employment contracts, opening bank accounts with full functionality, filing annual tax returns, and property transactions. Registration is done at the local Tax Department office with your passport, residence permit, and proof of address. For those qualifying for Non-Dom status, the TIC registration process is also when you formally declare your tax residency and Non-Dom election.',
      link: 'https://www.mof.gov.cy/tax/'
    },
    {
      title: 'GESY Enrollment (General Healthcare System)',
      explanation: 'Cyprus launched GESY (Geniko Systima Ygeias) in 2019 as a universal healthcare system covering all legal residents. Enrollment is mandatory and contributions are deducted from salary (2.65% employee, 2.90% employer) or paid as a percentage of other income.',
      importance: 'GESY provides comprehensive healthcare coverage including GP visits, specialist referrals, hospital care, prescriptions, dental care, and mental health services. All legal residents are entitled to enroll. The system operates through both public and private providers who have opted into GESY, giving patients a choice of doctor. Co-payments are minimal (EUR 1 for GP visits, EUR 6 for specialists). Enrollment is through the GESY portal (gesy.org.cy) using your ARC and social insurance number.',
      link: 'https://www.gesy.org.cy/'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a Cypriot bank account requires your passport, ARC (Yellow or Pink Slip), proof of address, proof of income or employment, and in some cases a reference letter from your existing bank. Major banks include Bank of Cyprus, Hellenic Bank, and RCB Bank (now Eurobank Cyprus).',
      importance: 'A local bank account is essential for receiving salary, paying rent and utilities, GESY contributions, and daily transactions. Cyprus\'s banking sector has undergone significant restructuring since the 2013 financial crisis, and banks are now stringent with due diligence and anti-money-laundering compliance. Account opening can be documentation-heavy and take multiple visits. Bank of Cyprus and Hellenic Bank are the two main retail banks. The banking sector operates in Euros, which is convenient for transactions with other Eurozone countries.',
      link: 'https://www.centralbank.cy/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Cyprus has a small but increasingly internationalized job market, driven by services, shipping, technology, iGaming, forex/fintech, tourism, and professional services. Limassol is the business hub, hosting the headquarters of numerous international tech companies, forex brokers, and shipping firms. Nicosia has the government and financial services sector. The iGaming and fintech industries have attracted a significant international workforce, creating English-speaking work environments in companies like eToro (formerly), Playtech, and numerous others.",
    whereToLook: [
      "LinkedIn — the primary platform for international and professional roles",
      "Ergodotisi (ergodotisi.com) — the main Cypriot job portal",
      "Kariera Cyprus (kariera.com.cy) — another popular local job board",
      "GRS Recruitment (grsrecruitment.com) — the largest recruitment agency in Cyprus",
      "Company career pages for tech, iGaming, and forex companies based in Limassol"
    ],
    realityChecks: [
      "Local salaries are modest by EU standards. A mid-level professional role typically pays EUR 1,500-2,500/month gross, while senior tech and finance roles at international companies can reach EUR 3,000-6,000+.",
      "Most high-paying roles are concentrated in Limassol's international tech and fintech sector. Outside this ecosystem, salary levels drop significantly.",
      "Greek language skills are expected for government, legal, and most local-facing roles. The international business sector operates primarily in English and Russian.",
      "The Non-Dom tax status makes Cyprus particularly attractive for individuals with dividend, interest, or passive income, as these are exempt from personal tax for 17 years."
    ]
  },
  salaryReality: {
    overview:
      "Cypriot salary figures can be misleading without context. Local economy wages are modest, but the international business sector (particularly tech, iGaming, and fintech in Limassol) pays significantly above local rates. The tax environment—particularly the Non-Dom regime exempting dividends and interest—makes the effective tax burden lower than headline rates suggest for many international workers.",
    realityChecks: [
      "Income tax is progressive: 0% up to EUR 19,500, then 20-35% on higher brackets. Social insurance contributions add approximately 8.3% (employee) plus 8.3% (employer).",
      "GESY healthcare contributions (2.65% employee) are deducted on top of social insurance, but provide comprehensive universal healthcare in return.",
      "Salaries in the international sector have been rising due to competition for talent, but housing costs (particularly in Limassol) have risen faster, eroding real purchasing power.",
      "Non-Dom status exempts qualifying residents from Special Defence Contribution (SDC) on dividends, interest, and rental income for 17 years—a significant benefit for investors and business owners."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The impact of Non-Dom status, which can save thousands of euros annually for individuals with investment income",
      "Rapidly rising housing costs in Limassol that have outpaced salary growth in recent years",
      "Social insurance and GESY contributions that add approximately 11% to the employee's effective deduction rate",
      "The 13th salary (Christmas bonus) that is standard in many Cypriot employment contracts, adding approximately 8% to annual compensation"
    ]
  },
  housingSystem: {
    overview:
      "Renting in Cyprus is relatively straightforward, with a large supply of apartments and houses available, particularly in Limassol, Nicosia, and Paphos. Limassol's waterfront and central areas have seen extensive new construction, including modern towers and developments marketed to international residents. Popular expat neighborhoods in Limassol include the Molos/seafront area, Germasogeia, Agios Tychonas, and the historic center. In Nicosia, the old town, Engomi, and Strovolos are popular. Paphos offers a more relaxed, affordable alternative with a strong British expat community.",
    expectations:
      "Monthly rent payments with a deposit of one to two months are standard. A one-bedroom apartment in central Limassol runs EUR 800-1,500/month; in Nicosia, EUR 600-1,000; in Paphos, EUR 500-800. Furnished apartments are common, particularly in Limassol's international market. Bazaraki.com is the dominant classifieds platform for housing, supplemented by Facebook groups and local estate agents. Air conditioning is essential from May through October and is a significant electricity cost (EUR 100-300/month in peak summer). Many apartments have solar water heaters (standard in Cyprus), which reduce hot water costs. Check the Energy Performance Certificate and air conditioning efficiency before signing—electricity costs can be substantial."
  },
  healthcareReality:
    "Cyprus's General Healthcare System (GESY), launched in 2019, provides universal coverage to all legal residents through a combination of public and private providers. Patients choose their own GP (personal doctor) who acts as a gatekeeper for specialist referrals. Co-payments are minimal: EUR 1 for GP visits, EUR 6 for specialists, and small co-pays for prescriptions. GESY covers hospitalization, surgery, diagnostics, dental care (for children and partially for adults), and mental health services. Major hospitals include Nicosia General Hospital, Limassol General Hospital, and Paphos General Hospital in the public sector, while Apollonion Private Hospital (Nicosia), Mediterranean Hospital (Limassol), and Iasis Hospital (Paphos) are prominent private options. Before GESY, most middle-class residents relied exclusively on private healthcare, and the transition is ongoing—some private specialists have not joined the GESY network, requiring out-of-pocket payment. Emergency care is available at all hospitals regardless of insurance status. Pharmacies are well-distributed and pharmacists can advise on minor ailments and provide many medications without prescription.",
  digitalLife: {
    overview:
      "Cyprus is digitally improving but remains administratively traditional compared to Northern European countries. Internet infrastructure is decent in urban areas (Cyta, Epic, Primetel provide broadband and fiber), and mobile coverage is strong across the island. However, many government and banking processes still require physical presence, paper documents, and stamps.",
    essentials: [
      "JCC Smart app — for paying utilities, government fees, and traffic fines online",
      "GESY Portal (gesy.org.cy) — for healthcare enrollment, GP selection, and appointment management",
      "Bank of Cyprus or Hellenic Bank mobile app — for transfers, bill payments, and account management",
      "Bolt — the primary ride-hailing app in Cyprus (Uber is not available)"
    ],
    whatSurprisesNewcomers: [
      "Many government and banking processes that would be fully digital in Northern Europe still require in-person visits with physical documents in Cyprus. Budget time for administrative errands.",
      "Banking onboarding can be surprisingly slow and documentation-heavy, reflecting Cyprus's post-2013 focus on compliance and anti-money-laundering due diligence.",
      "Driving is on the left (British legacy), which surprises many continental European newcomers. Roundabouts follow British convention.",
      "Internet speeds have improved significantly with fiber rollout, but can still be inconsistent in rural areas and older buildings not yet connected to fiber."
    ]
  },
  culture: {
    text: 'Cypriot culture is Mediterranean to its core: family-centered, food-obsessed, and unhurried. "Siga-siga" (slowly, slowly) is not laziness but a philosophical commitment to enjoying life rather than rushing through it. Social life revolves around long meals, the kafeneio (traditional coffee house, typically male-dominated in villages), and family gatherings that can span entire weekends. The meze tradition—a meal of 20-30 small dishes served over several hours—is the defining culinary experience, turning dinner into a social marathon. Cypriot hospitality is genuine and intense: "Kopiaste!" (come, join us!) is an invitation you will hear constantly, and refusing food from a Cypriot host requires diplomatic skill. Religion (Greek Orthodox Christianity) plays a significant role in cultural life, with name days celebrated as much as birthdays, and Easter being the most important holiday of the year—marked by midnight church services, fireworks, and massive family feasts of souvla (spit-roasted lamb).',
    highlights: [
      'Meze is not a meal—it is an event. Dozens of small dishes (halloumi, sheftalia, koupepia, taramosalata, kolokasi, kleftiko) arrive over 2-3 hours. Never order a main course after committing to a meze—you will not survive.',
      'Cypriot coffee is strong, thick, and served in small cups. Do not drink the grounds at the bottom. Order it "sketo" (no sugar), "metrio" (medium sugar), or "gliky" (sweet).',
      'Driving is on the left side of the road, a legacy of British colonial rule. This catches many newcomers off guard, especially those renting a car immediately after arriving.',
      '"Kopiaste" (come, join us) is the quintessential Cypriot invitation, extended genuinely and frequently. Accepting—even briefly—builds social bonds faster than anything else.',
      'Easter is the most important holiday in Cyprus, far surpassing Christmas. Holy Saturday midnight involves church services, fireworks, and the greeting "Christos Anesti" (Christ is Risen), answered with "Alithos Anesti" (Truly, He is Risen). Sunday is for the lamb souvla feast.'
    ]
  },
  transportationMobility:
    "Cyprus is car-dependent. Public transport consists of intercity and local bus services operated by companies like EMEL (Limassol) and OSEL (Nicosia), but frequencies are low (every 20-60 minutes), routes are limited, and buses stop running in the early evening. There is no rail system on the island. Car ownership is the norm for daily life, and most families have at least one vehicle. Rental cars are widely available and affordable for newcomers who have not yet purchased a vehicle. Driving is on the left (British legacy), and international driving permits are accepted for the first 6 months, after which you must obtain a Cypriot license (which requires passing a test if your home country does not have a reciprocal agreement). The motorway network connecting Nicosia, Limassol, Larnaca, and Paphos is modern and well-maintained. Bolt is available as a ride-hailing alternative in major cities. Cycling infrastructure is limited but improving, particularly along the Limassol seafront.",
  internationalConnectivity:
    "Larnaca International Airport (LCA) is the main international gateway, with frequent flights to major European cities, the UK (British Airways, Ryanair, easyJet), Greece (Aegean Airlines, Cyprus Airways), and the Middle East (Emirates, Qatar Airways, Gulf Air). Paphos International Airport (PFO) handles a smaller volume, primarily serving British charter and budget flights. There are no direct long-haul flights to the Americas or East Asia—connections route through Dubai, Doha, Athens, or London. Flight times to London are about 4.5 hours, to Athens about 2 hours, to Dubai about 4 hours. Cyprus's geographic position at the eastern edge of the Mediterranean makes it a natural bridge between Europe and the Middle East. Ferry services to Greece and other Mediterranean destinations have been intermittent in recent years.",
  travelExploration:
    "Cyprus is compact (about 9,250 sq km) and can be explored thoroughly by car. The island offers a remarkable concentration of historical and natural attractions. The Troodos Mountains in the center contain Byzantine-era painted churches (UNESCO World Heritage), hiking trails, and Olympus peak (1,952m) which gets snow in winter. Paphos (the entire city is a UNESCO site) contains Roman mosaics at the House of Dionysus, the Tombs of the Kings, and Aphrodite's legendary birthplace at Petra tou Romiou. The Akamas Peninsula is a protected wilderness area with hiking trails leading to the Blue Lagoon and Avakas Gorge. Ayia Napa and Protaras on the eastern coast offer crystal-clear beaches and a party atmosphere. Nicosia's divided old town—crossing the Green Line on foot to visit the Turkish Cypriot side—is a unique experience unavailable anywhere else in the EU. For regional travel, quick flights to Athens, Beirut, Tel Aviv, Cairo, and Istanbul open up the broader Eastern Mediterranean.",
  considerations: [
    'Non-Schengen Status: Cyprus is an EU member but NOT yet in the Schengen zone. This means Schengen visas may not automatically grant entry to Cyprus, and a Cyprus residence permit does not provide Schengen area free movement. Check the specific visa requirements for your nationality before traveling between Cyprus and Schengen countries.',
    'The Division (Green Line): The island remains divided between the Republic of Cyprus (south, EU member) and the Turkish Republic of Northern Cyprus (north, recognized only by Turkey). Crossing the Green Line is possible at several checkpoints with a valid passport, but rental car insurance from the south is typically not valid in the north. Property law in the north is complex and disputed.',
    'Summer Heat: July and August temperatures regularly exceed 40C, and outdoor activity during midday (12:00-4:00 PM) is essentially impossible. Business hours, social events, and daily routines shift to accommodate the heat. Air conditioning is not a luxury—it is a survival necessity, and electricity bills in summer can be EUR 200-400/month.',
    'Water Scarcity: Cyprus is the most water-stressed EU member state. Tap water is safe in most areas but often desalinated and may taste mineral-heavy. Many residents drink bottled water. Water conservation is taken seriously, and shortages can affect supply during dry summers.',
    'Car Dependency: Public transport is insufficient for daily life. Budget for a car (purchase or long-term rental) from the beginning. Driving is on the left (British convention), and while roads are generally well-maintained, Cypriot driving style can be aggressive and unpredictable by Northern European standards.'
  ],
  mistakes: [
    'Flying into Ercan Airport in the north. Entering the Republic of Cyprus via the Turkish-occupied north is considered an illegal port of entry by the Republic of Cyprus government. Always fly into Larnaca (LCA) or Paphos (PFO) airports. Crossing the Green Line overland after entering through the south is permitted.',
    'Refusing food or drink when offered by a Cypriot host. Hospitality is deeply embedded in the culture, and declining a meal or coffee offer—especially when visiting someone\'s home—is considered rude. Accept graciously, even if you take only a small portion.',
    'Expecting Northern European punctuality and efficiency from government services. Administrative processes move at their own pace, offices may close earlier than posted, and bureaucratic steps can involve multiple visits. Patience and persistence are the only effective strategies.',
    'Underestimating summer electricity costs. Air conditioning in a typical apartment can add EUR 200-400/month to your electricity bill from June through September. Factor this into your housing budget beyond the rent itself.',
    'Assuming all real estate in Cyprus is straightforward. Property ownership, particularly for new developments and anything near the Green Line or in areas with disputed Turkish Cypriot ownership claims, requires careful legal due diligence. Always use an independent lawyer for property transactions.'
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency (Police, Fire, Ambulance)',
      description: 'European-standard emergency number connecting to all services. Operators speak Greek and English.'
    },
    {
      number: '1460',
      service: 'Citizen Contact Line (Police Non-Emergency)',
      description: 'Police non-emergency line for reporting incidents, requesting information, and filing complaints. Available during business hours.'
    },
    {
      number: '1401',
      service: 'Cyprus Fire Service',
      description: 'Direct line to the fire department for reporting fires, including forest fires which are a significant risk during the dry summer months.'
    }
  ],
  sources: [
    {
      name: 'Civil Registry and Migration Department (CRMD)',
      category: 'Immigration & Residency',
      description: 'Official department handling residence permits, visa applications, ARC registration, and immigration regulations for the Republic of Cyprus.',
      link: 'https://www.mip.gov.cy/'
    },
    {
      name: 'GESY (General Healthcare System)',
      category: 'Healthcare',
      description: 'Cyprus\'s universal healthcare system providing information on enrollment, coverage, GP registration, and patient services.',
      link: 'https://www.gesy.org.cy/'
    },
    {
      name: 'Ministry of Foreign Affairs',
      category: 'Visa & Consular Services',
      description: 'Official source for visa requirements, consular services, and international relations of the Republic of Cyprus.',
      link: 'https://mfa.gov.cy/'
    },
    {
      name: 'Deputy Ministry of Tourism',
      category: 'Tourism & Travel',
      description: 'Official tourism authority providing destination guides, travel information, and visitor services for Cyprus.',
      link: 'https://www.visitcyprus.com/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to Cyprus, consult the Ministry of Foreign Affairs of the Republic of Cyprus or a Cypriot embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/cyprus',
    mfaLink: 'https://mfa.gov.cy/'
  },
  serviceDirectory: {
    title: "Service Directory - Cyprus",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Cyprus.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for residence permits, work visas, Yellow/Pink Slip registration, Non-Dom status, and immigration compliance in Cyprus.",
        providers: [
          { name: "Elias Neocleous & Co LLC", link: "https://www.eandn.com" },
          { name: "Fragomen Cyprus", link: "https://www.fragomen.com" },
          { name: "Chrysostomides & Co LLC", link: "https://www.chrysostomides.com.cy" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms assisting with long-term rentals and property purchases across Cyprus.",
        providers: [
          { name: "Bazaraki (Classifieds)", link: "https://www.bazaraki.com" },
          { name: "Fox Smart Estate Agency", link: "https://www.foxrealty.com.cy" },
          { name: "RE/MAX Cyprus", link: "https://www.remax.com.cy" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Cypriot tax residency, Non-Dom status, corporate structuring, payroll, and cross-border income planning.",
        providers: [
          { name: "PwC Cyprus", link: "https://www.pwc.com.cy" },
          { name: "EY Cyprus", link: "https://www.ey.com/en_cy" },
          { name: "Deloitte Cyprus", link: "https://www2.deloitte.com/cy" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including shipping, customs handling, and household moves to Cyprus.",
        providers: [
          { name: "Crown Relocations Cyprus", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Cyprus", link: "https://www.agsmovers.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Greek language courses and cultural integration programs for newcomers to Cyprus.",
        providers: [
          { name: "University of Cyprus - Modern Greek Program", link: "https://www.ucy.ac.cy" },
          { name: "EPAL Language Centre", link: "https://www.epal.com.cy" },
          { name: "Berlitz Cyprus", link: "https://www.berlitz.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public healthcare system (GESY) and private hospitals commonly used by residents and expats in Cyprus.",
        providers: [
          { name: "GESY Portal", link: "https://www.gesy.org.cy" },
          { name: "Apollonion Private Hospital", link: "https://www.apollonion.com.cy" },
          { name: "Mediterranean Hospital of Cyprus", link: "https://www.mediterraneanhospital.com.cy" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Employment platforms and recruitment firms connecting professionals with Cypriot employers, particularly in the tech and international business sectors.",
        providers: [
          { name: "GRS Recruitment", link: "https://www.grsrecruitment.com" },
          { name: "Kariera Cyprus", link: "https://www.kariera.com.cy" },
          { name: "StaffMatters Cyprus", link: "https://www.staffmatters.com" }
        ]
      }
    ]
  }
};