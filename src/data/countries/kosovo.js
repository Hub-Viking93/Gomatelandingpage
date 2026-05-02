export const kosovo = {
  id: 'kosovo',
  slug: 'kosovo',
  name: 'Kosovo',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Albanian', 'Serbian'],
  shortDescription: "Europe's youngest country, with the continent's youngest population, a visa-free path to the EU, and a fast-modernizing Prishtina tech and cafe scene.",
  heroImage: 'https://images.unsplash.com/photo-1654026145824-ce024e319175',
  flagAlt: 'Flag of Kosovo',
  atAGlance: "Kosovo declared independence in 2008 and is Europe's youngest country in two senses - both its statehood and its demographics. The median age is about 30, the lowest in Europe, and the capital Prishtina pulses with cafe life, startups, and a palpable sense that the country is being built in real time. Kosovo is recognized as a sovereign state by more than 100 UN members, including the US and most EU countries, but not by Serbia, Russia, China, and five EU members (Spain, Slovakia, Greece, Romania, Cyprus). It unilaterally adopted the Euro as its currency in 2002 (before independence, under UNMIK administration), so the EUR is the currency of daily life despite Kosovo not being in the Eurozone. As of January 2024, Kosovo passport holders enjoy visa-free short-stay travel to the Schengen area, a milestone that transformed mobility for the diaspora and for young people. The country has a strong diaspora - particularly in Switzerland, Germany, Austria, and the Nordic countries - whose remittances and summer returns shape the economy, urban development, and family life. Albanian is the principal official language; Serbian is co-official and used in several municipalities and in northern Kosovo (Mitrovica North), where Serbia-oriented communities live. English is widely spoken by younger Kosovars thanks to a strong NGO, diplomatic, and international-project presence since the late 1990s. Prishtina is the political and economic center; Peja (Peć), Prizren, Mitrovica, Ferizaj, and Gjakova have distinctive local character. The Central Bank of Kosovo in Prishtina supervises a banking sector dominated by foreign groups (ProCredit, Raiffeisen, NLB, TEB, BKT Kosova). Bureaucracy still features paper stamps, notarized documents, and in-person visits, but the digital government portal (eKosova) is expanding steadily.",
  overview: {
    euStatus: 'Non-EU (Visa-free short-stay to Schengen since January 2024)',
    stayLength: 'Up to 90 days visa-free for most',
    costOfLiving: 'Low',
    primaryLanguages: 'Albanian (Official), Serbian (Official in specified areas), English (widely spoken)',
  },
  visas: [
    {
      name: 'Visa-Free Entry (Liberal Western Access)',
      targetAudience: 'Citizens of EU, US, UK, Canada, Australia, Japan, and most Western nations',
      useCase: "Despite Kosovo's contested international status, it maintains an unusually liberal entry regime - EU, Schengen, UK, US, Canada, Australia, and Japan citizens enter visa-free for 90 days within 180. Kosovo often does not stamp entry for EU travelers arriving overland. Citizens of the five non-recognizing EU states (Spain, Greece, Cyprus, Romania, Slovakia) enter freely too, though their own governments may not validate Kosovo-issued documents.",
      duration: 'Up to 90 days within 180-day period',
      link: 'https://mfa-ks.net/'
    },
    {
      name: 'Schengen Visa-Free for Kosovar Citizens (since January 2024)',
      targetAudience: 'Kosovo passport holders',
      useCase: "A landmark change effective 1 January 2024: Kosovo passport holders can travel short-stay to the Schengen area without a visa, ending Kosovo's status as the last Western Balkan country requiring Schengen visas. Transformative for the diaspora, students, and family travel - though five EU non-recognizers (Spain, Greece, Cyprus, Romania, Slovakia) can still complicate entry in practice. Naturalized residents who later obtain Kosovo citizenship benefit from the same regime.",
      duration: '90 days within 180-day period across Schengen',
      link: 'https://mfa-ks.net/'
    },
    {
      name: 'Temporary Residence Permit (Leje e Qëndrimit të Përkohshëm)',
      targetAudience: 'Workers, Students, Family Members, Investors',
      useCase: "Issued by the Department for Citizenship, Asylum and Migration (DCAM) under the Ministry of Internal Affairs for stays beyond 90 days. Filed at the regional Directorate for Migration and Foreigners with passport, accommodation proof, purpose evidence (employment contract, business registration, family documents, university enrolment), health insurance, and criminal record. Diaspora-origin Kosovar Albanians from Switzerland, Germany, Sweden, and the US frequently use this route for return migration alongside heritage-based citizenship pathways.",
      duration: '1 year, renewable',
      link: 'https://mpb.rks-gov.net/'
    },
    {
      name: 'Work Permit (Leje Pune)',
      targetAudience: 'Employed Professionals',
      useCase: "Foreign employees of Kosovo-registered companies require a work permit issued by the Ministry of Finance, Labour and Transfers / Employment Agency, tied to the employer. The employer initiates the process and demonstrates the role cannot be filled locally, subject to sector exemptions for IT, BPO, and international organization staff (EULEX, KFOR, UN agencies operate under separate accreditation).",
      duration: 'Tied to employment contract, typically 1 year renewable',
      link: 'https://mfpt.rks-gov.net/'
    },
    {
      name: 'KIESA Investor Permit and ARBK Business Route',
      targetAudience: 'Entrepreneurs, Strategic Investors',
      useCase: "The Kosovo Investment and Enterprise Support Agency (KIESA) facilitates strategic investors with project support and residency facilitation, while routine company formation runs through the Kosovo Business Registration Agency (ARBK) one-stop shop. Founders of registered Kosovo companies obtain residence tied to active business; the flat 10% corporate tax and one of Europe's lowest cost bases attract regional SMEs and diaspora-financed ventures.",
      duration: 'Residency tied to active business',
      link: 'https://kiesa.rks-gov.net/'
    }
  ],
  requirements: [
    {
      title: 'Temporary Residence Permit (Leje Qëndrimi)',
      explanation: "The physical residence card issued by DCAM after dossier review and biometric capture. Categories cover employment, study, family reunification, investment, and other grounds. Initial permits are 1 year and renewable.",
      importance: "The residence permit is required for a local bank account, vehicle registration, long-term lease formalities, and formal employment. It also secures your legal stay beyond the 90-day visa-free window. Renew at least one month before expiry to avoid gaps.",
      link: 'https://mpb.rks-gov.net/'
    },
    {
      title: 'Fiscal Number (Numri Fiskal)',
      explanation: "Tax identification number issued by the Tax Administration of Kosovo (ATK - Administrata Tatimore e Kosovës) for individuals and companies. Employees are typically registered through their employer; business founders obtain it during ARBK incorporation.",
      importance: "Required for invoicing, tax filings, customs clearance on household goods, and vehicle registration. ATK has digitized significant parts of filing through its EDI/EFI platforms, but in-person visits are still common for registrations and certificates.",
      link: 'https://www.atk-ks.org/'
    },
    {
      title: 'Registered Lease and Address Registration',
      explanation: "Rental contracts should be notarized and registered with the tax authority (ATK) for tax-compliance purposes, and the residence address must be registered with the municipal civil registry (KRCR / AKP), which keeps civil records. Landlords usually handle the ATK side, but tenants should verify.",
      importance: "A registered lease is needed for the residence permit dossier, for utility setup (KEDS for electricity, local water utilities), and for school enrolment for children. Informal arrangements leave you without recognized proof of address and expose you to disputes.",
      link: 'https://akp.rks-gov.net/'
    },
    {
      title: 'Bank Account',
      explanation: "Opening a Kosovo bank account requires your passport, residence permit (or valid visa), fiscal number, and proof of address. Major banks include ProCredit Bank, Raiffeisen Bank Kosovo, NLB Banka, BKT Kosova (part of Banka Kombetare Tregtare), and TEB Bank. Accounts are denominated in EUR.",
      importance: "Kosovo uses the Euro as its currency, which removes FX friction for European income. Mobile and online banking are well developed, and card acceptance is widespread in cities, though cash is still common in smaller towns. Setting up direct debit for utilities and insurance streamlines daily life.",
      link: 'https://bqk-kos.org/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Kosovo's economy is driven by remittances, trade, construction, services, and a young but rapidly growing IT sector that has become a regional outsourcing destination. Prishtina hosts tech companies (Gjirafa, Lyrebird Studio, Sentry team, and a large outsourcing footprint for Western European clients), banks, telecoms (IPKO - part of Telekom Slovenije, Vala - owned by Post and Telecom of Kosovo, and Kosovo-specific MVNOs), and international organizations (EULEX, KFOR, UN agencies, UNDP, US and EU missions). Albanian is the primary working language; English is dominant in tech, NGOs, and international projects; Serbian is used in Serb-majority areas.",
    whereToLook: [
      "KosovaJob (the main Kosovo job portal, Albanian and English)",
      "LinkedIn (strong presence in IT, banking, and NGOs)",
      "NgoJobs.info and ReliefWeb for development and international organization roles",
      "Career pages of Raiffeisen Kosovo, ProCredit, TEB, IPKO, PTK, Gjirafa, and Solaborate",
      "Kosovo Chamber of Commerce and American Chamber of Commerce in Kosovo for networking"
    ],
    realityChecks: [
      "Local salaries are modest - the average gross monthly salary is roughly EUR 600-700, with mid-level IT and banking roles at EUR 1,200-2,500 and senior multinational or specialist roles higher.",
      "The IT and BPO sector pays markedly above local averages and often uses EUR-denominated contracts that are attractive relative to the cost of living.",
      "Diaspora networks are a major employment channel, particularly for returnees from Switzerland and Germany - personal introductions move faster than cold CVs.",
      "English-only professionals find opportunities in development organizations, NGOs, international tech teams, and diplomatic missions; Albanian accelerates everything else."
    ]
  },
  salaryReality: {
    overview:
      "The combination of Euro-denominated salaries and low local prices makes remote workers and expatriates very comfortable. Local earners face a tighter picture - housing in central Prishtina and imported goods have risen in price while wages climb more slowly. Personal income tax is progressive with a top rate of 10%, one of the lowest in Europe; social and health contributions add modest further deductions.",
    realityChecks: [
      "Personal income tax brackets are flat at 0%, 4%, 8%, and 10% depending on monthly income. Pension contributions (KPST) apply to employment income.",
      "Rent for a modern two-bedroom apartment in central Prishtina typically runs EUR 400-700/month; newer buildings with parking and elevator higher; outside Prishtina prices are materially lower.",
      "Utilities are affordable but electricity and heating costs rise sharply in winter - budget realistically for cold-season bills in older buildings.",
      "Private health insurance through international or local providers (Sigma, Sigal Uniqa, Eurosig) is used by many expatriates alongside the public health system."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Heating costs during the long cold winters (December-March) in older apartments without district heating",
      "International school fees: Prishtina International School, Mehmet Akif College, and the American School of Kosova run EUR 5,000-15,000/year",
      "Diaspora-driven real estate pricing in central Prishtina and in the summer return season, which pushes rents above headline figures",
      "Fuel and import-related price premiums on vehicles, electronics, and specific consumer goods"
    ]
  },
  housingSystem: {
    overview:
      "Prishtina's rental market is dominated by 1990s-2010s apartment blocks and a growing stock of modern buildings in neighborhoods like Qendra (center), Ulpiana, Dragodan (Arbëria), Lakrishte, and Bregu i Diellit. Dragodan is particularly popular with diplomats and international staff due to proximity to embassies and quieter streets. Peja, Prizren, and Mitrovica each have their own smaller markets, with Prizren's old town offering distinctive stone-and-wood character. Ownership of property is dominated by diaspora investors, which creates an active but sometimes opaque market.",
    expectations:
      "Long-term leases are typically 1 year with 1-2 months' deposit plus first month's rent. Furnished apartments are very common - many diaspora-owned properties are let furnished. Always visit in person, verify that the lister is the owner or has documented authority, and insist on a written contract in Albanian (a bilingual or English translation is common for expat tenants). Platforms include KosovaJob (housing section), Merrjep Kosovo, and Facebook groups (search 'Prishtina apartments'). Utility transfer through KEDS (electricity) and the local water provider takes a few visits; internet via Kujtesa, IPKO, or Artmotion is fast to install in central neighborhoods."
  },
  healthcareReality:
    "Kosovo operates a public health system anchored by the University Clinical Centre of Kosovo (QKUK) in Prishtina, with regional hospitals in Peja, Mitrovica, Gjakova, Ferizaj, and Gjilan. Public care is mostly free at point of service for residents, but the system is under-resourced and many Kosovars and expatriates use private clinics (American Hospital Prishtina, Spitali Amerikan, Aloka, Euromed, Rezonanca, Lito) for faster specialist access and quality assurance. A specialist consultation in a private clinic typically costs EUR 20-50. Private health insurance through Sigma, Sigal Uniqa, Eurosig, or international schemes (Cigna, Allianz) is common for expatriate families. Pharmacies are widespread and well stocked, and many medications are affordable and available over the counter. For serious conditions, medical travel to Turkey, Germany, or Switzerland is common and often arranged through private insurance or family-funded care.",
  digitalLife: {
    overview:
      "Kosovo's digital infrastructure is solid in urban areas. Mobile 4G is ubiquitous from IPKO and Vala, with 5G rolling out selectively. Fixed fibre from Kujtesa, IPKO, and Artmotion reaches most of Prishtina and the major cities at competitive prices. The eKosova portal has expanded rapidly, covering dozens of municipal and central-government services online, from civil registry extracts to business permits. Card and mobile banking are widely used, though cash still features in markets and smaller businesses.",
    essentials: [
      "IPKO or Vala SIM - essential for mobile data and OTP authentication",
      "eKosova.gov portal for government services, civil documents, and permit tracking",
      "Local mobile banking apps (ProCredit, Raiffeisen, NLB, TEB, BKT) in EUR",
      "WhatsApp and Viber for messaging - the default for both personal and business"
    ],
    whatSurprisesNewcomers: [
      "How young Prishtina feels - cafes are packed midday and midweek, and the city has a density of youth culture that contrasts with its regional neighbors.",
      "Euro everywhere - despite not being in the Eurozone, Kosovo has used the Euro since 2002 and there is no local currency to learn or exchange.",
      "Visa-free access to Schengen since January 2024 has transformed cross-border life for Kosovars; it does not change the short-stay rules for non-Kosovo passport holders entering Kosovo, but it shapes the social fabric.",
      "The diaspora dimension is ever-present - in summer Prishtina's traffic and real-estate rhythms shift with return visits from Switzerland, Germany, Austria, and the Nordics."
    ]
  },
  culture: {
    text: "Kosovo's culture is predominantly ethnic Albanian, with significant Serbian, Bosniak, Turkish, Roma, and Ashkali communities, plus the history of UNMIK international administration (1999-2008) and the continued presence of KFOR, EULEX, and international missions. Hospitality is a core value - 'besa', the Albanian concept of oath and guest-honor, runs deep, and invitations to coffee, homes, and family events are genuine. Coffee culture is serious: a macchiato in Prishtina is an hour-long social occasion, not a caffeine pit stop. Family is the primary unit, with extended networks shaping everything from job referrals to housing to weddings (which can run to 500 guests). The young median age shapes public life - nightlife, entrepreneurship, and contemporary music (rap, pop, traditional Albanian fusion) dominate. The country is majority Muslim but overwhelmingly secular in practice; mosques, Catholic churches, and Orthodox churches coexist in the same cities, and religious observance is personal rather than public. The relationship with Albania is close but Kosovo retains its own distinct identity shaped by the 1990s war, the international intervention, and its young independence.",
    highlights: [
      "Coffee culture is central - accept invitations for coffee and allow time for real conversation. A quick visit is an oxymoron here.",
      "Say 'Mirëdita' ('good day') and 'Faleminderit' ('thank you') in Albanian. The effort is noticed and appreciated, particularly outside Prishtina.",
      "Respect both Albanian and Serbian identities where relevant - in northern Kosovo and Serb-majority enclaves, bilingual signage and customs reflect the co-official status of Serbian.",
      "Weddings are major cultural events - if invited, accept. They can take an evening but build relationships that last for years.",
      "Cevapi, flija, pite, tavë kosi, and a strong local wine and rakija culture make food a point of pride. Try widely."
    ]
  },
  transportationMobility:
    "Prishtina is a compact, walkable center surrounded by a wider metropolitan area. Local buses operate but are inconsistent; most residents rely on ride-hailing (LOOP, Kreen) or taxis (always agree on a fare or insist on the meter). The intercity bus network from Prishtina's main bus station connects to Peja, Prizren, Mitrovica, Gjilan, Ferizaj, Gjakova, and regional destinations (Skopje, Tirana, Belgrade via Merdare, Durrës). Driving is the most flexible option - the country is small and roads are generally good on main corridors (the motorway to Albania, the Prishtina-Skopje road). Highway 6 to Albania and the Ibrahim Rugova motorway toward Peja are recent infrastructure upgrades. Kosovo Railways (Trainkos) operates limited passenger service; the train is not yet a primary travel mode for expatriates. Many families and businesses include a car as a standard life item, and fuel is affordable.",
  internationalConnectivity:
    "Prishtina International Airport (PRN) is the sole international airport, with direct flights operated by Kosovo's charter and leisure carriers alongside Austrian Airlines, Swiss, Lufthansa (seasonal), Turkish Airlines, Pegasus, Wizz Air, Ryanair, easyJet, and regional operators to Vienna, Zurich, Geneva, Basel, Istanbul, Munich, Frankfurt, London (Stansted / Luton), Stuttgart, Düsseldorf, Hamburg, Budapest, Milan, Rome, Ljubljana, and various Nordic cities. The strong diaspora in Switzerland, Germany, and Scandinavia drives an unusually dense route network for a country of 1.7 million. Flight time to Zurich is roughly 2.5 hours; Istanbul 1.5 hours; London 3 hours. Overland connections to Albania, North Macedonia, Montenegro, and Serbia (with specific rules) are used for regional travel.",
  travelExploration:
    "Kosovo is small and varied. Prishtina itself has the Newborn monument, the Kosovo Museum, the Imperial Mosque, and a growing arts scene around Bulevardi Nënë Tereza. Prizren, roughly 80 km south, is a gem of Ottoman and Orthodox architecture, hosting the Dokufest documentary festival every August. Peja (Peć) is the gateway to the Rugova Canyon, the Accursed Alps (Bjeshkët e Nemuna / Prokletije), and the Patriarchate of Peć (UNESCO). Gjakova's old bazaar, Mitrovica's bridge and divided-city history, and Gračanica Monastery near Prishtina (UNESCO) are cultural mainstays. The Sharr Mountains in the south offer hiking and skiing (Brezovica, though infrastructure has been underdeveloped). Weekend trips to Albania (Tirana and the coast at Durrës and Ksamil), North Macedonia (Skopje, Ohrid), and Montenegro are easy and popular.",
  considerations: [
    "Recognition: Kosovo is not universally recognized. Some countries (Serbia, Russia, China, Spain, Slovakia, Greece, Romania, Cyprus) do not treat it as a sovereign state, which can affect documentation, apostilles, and travel via Serbia. Practical route planning for regional travel should take this into account.",
    "Currency: the Euro is used, but Kosovo is not in the Eurozone. Banking regulation is led by the Central Bank of Kosovo, and ATM and card behavior generally matches the Euro area from a daily user perspective.",
    "Visa-free to Schengen: since January 2024, Kosovo passport holders can travel short-stay to Schengen without a visa. This has transformed mobility for the diaspora but does not change entry rules into Kosovo for non-Kosovo passport holders.",
    "Diaspora dynamics: summer returns, remittances, and diaspora-owned real estate shape the housing market and public mood. This is an asset socially and economically but can distort rents during peak months.",
    "Winter: Prishtina winters are cold with significant snow and air quality issues in the coldest months due to coal-heating emissions. Heating costs and air filtration are practical considerations."
  ],
  mistakes: [
    "Entering Kosovo via Serbia and then trying to exit to Serbia on a non-recognized stamp. Serbia may refuse entry stamped only from Kosovo border crossings. Plan the route carefully if you intend to cross both borders.",
    "Assuming the Euro means Eurozone. Banking rules, interchange fees from non-EU cards, and SEPA behavior can differ from Eurozone norms - check with your bank before relying on them.",
    "Underestimating winter heating bills and air quality. Older buildings without district heating require real budgeting for November-March.",
    "Defaulting to Serbian in Albanian-majority areas or vice versa in Serb-majority areas. Language choice carries social signal; when in doubt, English is neutral.",
    "Not leveraging the diaspora. The fastest path into jobs, housing, and local knowledge runs through diaspora networks - connect early through the American Chamber of Commerce in Kosovo or diaspora-focused events."
  ],
  emergency: [
    {
      number: '112',
      service: 'Unified Emergency Number',
      description: 'European universal emergency number for police, ambulance, and fire. Operators speak Albanian, some English, and in some regions Serbian.'
    },
    {
      number: '192',
      service: 'Police (Policia e Kosovës)',
      description: 'Direct line to the Kosovo Police for crime in progress, road accidents, and urgent safety incidents.'
    },
    {
      number: '193',
      service: 'Fire and Rescue (Zjarrfiksat)',
      description: 'Fire and rescue services. Best-resourced in Prishtina and regional capitals.'
    },
    {
      number: '194',
      service: 'Ambulance / Medical Emergency',
      description: 'Public ambulance dispatch. Private clinics in Prishtina often offer faster response for routine urgent needs.'
    }
  ],
  sources: [
    {
      name: 'Ministry of Internal Affairs - Department for Citizenship, Asylum and Migration',
      category: 'Immigration & Residency',
      description: "Handles residence permits, citizenship, asylum, and migration policy. Primary authority for all foreign-resident status decisions.",
      link: 'https://mpb.rks-gov.net/'
    },
    {
      name: 'eKosova',
      category: 'Government Services',
      description: "The national e-government portal aggregating municipal and central government services, civil registry extracts, business procedures, and more.",
      link: 'https://ekosova.rks-gov.net/'
    },
    {
      name: 'Tax Administration of Kosovo (ATK)',
      category: 'Tax',
      description: "The tax authority responsible for fiscal numbers, VAT, personal and corporate income tax, and the EDI/EFI digital filing systems.",
      link: 'https://www.atk-ks.org/'
    },
    {
      name: 'Kosovo Business Registration Agency (ARBK)',
      category: 'Business Registration',
      description: "The one-stop shop for business incorporation, commercial registration, and statistical registration for Kosovo companies.",
      link: 'https://arbk.rks-gov.net/'
    }
  ],
  embassies: {
    description: "For consular assistance, passport services, and official guidance related to Kosovo, consult the Kosovo Ministry of Foreign Affairs and Diaspora or a Kosovo embassy or consulate abroad. Kosovo's diplomatic presence is strongest in EU member states that recognize its independence, the US, and Switzerland.",
    directoryLink: 'https://www.embassypages.com/kosovo',
    mfaLink: 'https://mfa-ks.net/'
  },
  serviceDirectory: {
    title: "Service Directory - Kosovo",
    description: "Examples of commonly used service providers people often interact with when relocating to Kosovo.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Law firms and consultancies handling residence permits, work authorizations, and company-linked immigration.",
        providers: [
          { name: "Kalo & Associates Kosovo", link: "https://www.kfrlaw.com" },
          { name: "Boga & Associates Kosovo", link: "https://www.bogalaw.com" },
          { name: "Deloitte Legal Kosovo", link: "https://www2.deloitte.com/xk" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms managing rentals and sales in Prishtina, Prizren, and Peja.",
        providers: [
          { name: "RE/MAX Kosovo", link: "https://www.remax-kosovo.com" },
          { name: "Merrjep Kosovo", link: "https://www.merrjep.com" },
          { name: "KosovaJob Housing", link: "https://kosovajob.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Advisors familiar with ATK compliance, EU-accession-adjacent standards, and cross-border structuring.",
        providers: [
          { name: "PwC Kosovo", link: "https://www.pwc.com/ks" },
          { name: "Deloitte Kosovo", link: "https://www2.deloitte.com/xk" },
          { name: "BDO Kosovo", link: "https://www.bdo.ks" }
        ]
      },
      {
        name: "Moving Companies",
        description: "Relocation providers handling international shipping via regional ports (Durrës, Thessaloniki) and overland.",
        providers: [
          { name: "AGS Movers Kosovo", link: "https://www.agsmovers.com" },
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "European Moving Company", link: "https://www.europeanmoving.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Albanian and Serbian language schools and tutors for newcomers integrating into Kosovo life.",
        providers: [
          { name: "Prishtina Institute for Albanian Language", link: "https://www.prishtina-university.org" },
          { name: "Goethe-Zentrum Prishtina", link: "https://goethe-zentrum-prishtina.com" },
          { name: "Italki (Albanian tutors)", link: "https://www.italki.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private hospitals, clinics, and insurers commonly used by expatriates and senior professionals.",
        providers: [
          { name: "American Hospital Kosovo", link: "https://www.spitaliamerikan.com" },
          { name: "Spitali Rezonanca", link: "https://www.rezonanca-rks.com" },
          { name: "Sigal Uniqa Kosovo", link: "https://www.sigal-uniqa-ks.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Platforms and networks connecting international professionals with Kosovo employers and international organizations.",
        providers: [
          { name: "KosovaJob", link: "https://kosovajob.com" },
          { name: "LinkedIn Kosovo", link: "https://www.linkedin.com" },
          { name: "NgoJobs Kosovo", link: "https://www.ngojobs.info" }
        ]
      }
    ]
  }
};
