export const azerbaijan = {
  id: 'azerbaijan',
  slug: 'azerbaijan',
  name: 'Azerbaijan',
  region: 'Asia',
  complexity: 'Medium',
  languages: ['Azerbaijani', 'Russian', 'English'],
  shortDescription: 'A Caspian energy power at the crossroads of Europe and Asia, combining ancient Silk Road heritage with modern oil wealth.',
  heroImage: 'https://images.unsplash.com/photo-1596306499398-8d88944a5ec4',
  flagAlt: 'Flag of Azerbaijan',
  atAGlance: "Azerbaijan is a secular Muslim-majority country of roughly 10 million people on the western shore of the Caspian Sea, at the strategic intersection of Europe, Russia, Iran, and Turkey. It is a Turkic nation with deep Persian influences and a Soviet administrative legacy, ruled since 2003 by the Aliyev family. The economy is overwhelmingly driven by hydrocarbons — SOCAR (the State Oil Company) is the dominant commercial and political force, and the Sangachal Terminal south of Baku is one of the world's largest oil and gas processing facilities. Baku itself is a city of striking contrasts: the UNESCO-listed walled Old City (Icherisheher) sits beside the Flame Towers and the Zaha Hadid-designed Heydar Aliyev Center. The Azerbaijani Manat (AZN) is pegged to the US dollar at approximately 1.70 AZN per USD, making financial planning predictable. Azerbaijani (Turkic, in Latin script since 1991) is the state language; Russian remains widely used in business and older professional circles; English is rising fast among younger urban professionals, particularly in oil and gas. The government has pursued aggressive digitalization through the ASAN Service network — single-window centers that have transformed a notoriously bureaucratic state — complemented by e-gov.az and the DOST agency for social services. Work and residence permits are sponsorship-based through the State Migration Service. Cost of living is moderate in Baku and low outside the capital. The main adjustments for newcomers are the dual Azerbaijani/Russian linguistic landscape, the sponsorship-based immigration system, and the regional geopolitical context following the 2020 and 2023 Karabakh conflicts and ongoing normalization with Armenia.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 30 days (ASAN Visa eVisa for most)',
    costOfLiving: 'Moderate',
    primaryLanguages: 'Azerbaijani (Official), Russian (Widely used), English (Growing)',
  },
  visas: [
    {
      name: 'ASAN Visa (eVisa)',
      targetAudience: 'Tourists, Short-term Business Visitors',
      useCase: 'Azerbaijan operates one of the most streamlined eVisa systems in the region through the ASAN Visa portal (evisa.gov.az). Nationals of over 90 countries can apply online, receive approval within three business days (or within three hours with urgent processing), and enter for tourism, business meetings, or family visits. No embassy visit required.',
      duration: 'Up to 30 days single entry',
      link: 'https://evisa.gov.az/'
    },
    {
      name: 'Work Visa and Work Permit',
      targetAudience: 'Employed Professionals',
      useCase: 'For foreign nationals with a confirmed job offer from an Azerbaijani employer. The employer applies to the State Migration Service for an individual work permit (icazə), after which the worker applies for the work visa at an Azerbaijani diplomatic mission or through the eVisa system. Strict quota rules apply by sector; exemptions exist for senior management, intra-corporate transfers, and specific SOCAR and energy sector roles.',
      duration: 'Up to 1 year, renewable',
      link: 'https://migration.gov.az/'
    },
    {
      name: 'Temporary Residence Permit',
      targetAudience: 'Long-term Residents, Family Members, Investors',
      useCase: 'Issued by the State Migration Service to foreign nationals on the basis of employment, investment, marriage to an Azerbaijani citizen, property ownership (with thresholds), or study. Applications are filed at ASAN service centers. Family members of permit holders can apply for derived residence. The permit is the basis for longer-term settlement and access to social services.',
      duration: '1-2 years, renewable; path to permanent residence after several renewal cycles',
      link: 'https://migration.gov.az/'
    },
    {
      name: 'Investor Residence',
      targetAudience: 'Investors, Business Owners',
      useCase: 'Foreign nationals establishing a qualifying business or making specified investments in Azerbaijan can obtain a temporary residence permit on that basis. The Agency for Development of Economic Zones and the State Migration Service coordinate approvals. Investment in designated economic zones (Alat Free Economic Zone) benefits from preferential treatment, including tax exemptions and simplified residence procedures.',
      duration: '1-3 years, renewable',
      link: 'https://migration.gov.az/'
    },
    {
      name: 'CIS Visa-Free Entry',
      targetAudience: 'Citizens of CIS Member States',
      useCase: 'Citizens of Russia, Belarus, Kazakhstan, Kyrgyzstan, Moldova, Tajikistan, Ukraine, and Uzbekistan can enter Azerbaijan without a visa for up to 90 days. Entry is by internal passport (where bilateral arrangements allow) or international passport. Stays beyond 15 days still require address registration with the State Migration Service.',
      duration: 'Up to 90 days, visa-free',
      link: 'https://migration.gov.az/'
    },
    {
      name: 'Heritage / Diaspora Residence',
      targetAudience: 'Ethnic Azerbaijanis from the Diaspora',
      useCase: 'Ethnic Azerbaijanis abroad — including communities in Iran, Turkey, Russia, Georgia, and Western diasporas — can apply for simplified temporary residence on the basis of Azerbaijani descent. Applications are coordinated through the State Committee on Work with Diaspora and the State Migration Service, typically requiring proof of ancestry and supporting documentation.',
      duration: '1-3 years, renewable; pathway toward citizenship',
      link: 'https://diaspora.gov.az/'
    }
  ],
  requirements: [
    {
      title: 'Registration at Place of Stay',
      explanation: 'Foreign nationals staying in Azerbaijan more than 15 days must register their address with the State Migration Service. Processed at ASAN service centers or online via e-gov.az. Hotels register guests automatically; long-term residents register through the landlord.',
      importance: 'Failing to register within 15 days triggers fines (typically 300-400 AZN) and complicates exit and residence permit renewals. Registration is tied to your specific address and must be updated if you move. Keep the slip with your passport and residence card.',
      link: 'https://migration.gov.az/'
    },
    {
      title: 'FIN (Personal Identification Number)',
      explanation: 'A seven-character alphanumeric Personal Identification Number issued to every resident — citizens and foreign nationals with residence permits. The FIN appears on the residence card (Şəxsiyyət vəsiqəsi) and is used for tax, banking, and all formal civil transactions.',
      importance: 'Without a FIN you cannot be formally employed, open a full-service bank account, register a vehicle, or sign a notarized contract. It is issued automatically with the temporary residence permit, is permanent, and links all government records.',
      link: 'https://migration.gov.az/'
    },
    {
      title: 'ASAN Imza (Mobile Digital Signature)',
      explanation: "Azerbaijan's mobile-based electronic signature, issued through authorized operators (Azercell, Bakcell, Nar) to FIN holders. It enables authentication into e-gov.az, tax filing, digital signing, and most online government services.",
      importance: "ASAN Imza is Azerbaijan's equivalent of BankID — the digital key to the e-government ecosystem. Without it, most processes require in-person ASAN visits. Activation requires a mobile operator store visit with residence card and passport. Install it as soon as your residence card is issued.",
      link: 'https://asanimza.az/'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening an Azerbaijani bank account requires passport, residence card or work permit, FIN, and a tax ID (VÖEN) if self-employed. Major banks include PASHA Bank, Kapital Bank (largest retail network), International Bank of Azerbaijan (IBA), AccessBank, and Unibank.',
      importance: 'A local account is essential for salary, utilities, and the domestic payment ecosystem. Kapital Bank operates Birbank and BirKart, the dominant digital wallet. The Central Bank of Azerbaijan (CBAR) holds the Manat peg at approximately 1.70 AZN/USD — a central feature of financial planning. Multi-currency accounts (AZN, USD, EUR, RUB) are standard.',
      link: 'https://www.cbar.az/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Azerbaijan's economy is dominated by oil and gas (SOCAR, BP Azerbaijan, Equinor, TotalEnergies at the Shah Deniz and Azeri-Chirag-Gunashli fields), with growing sectors in construction, banking, telecommunications, and technology. Foreign professionals concentrate in the oil and gas majors, international banks (PASHA Bank, EBRD, IFC), Big Four consulting, diplomatic missions, and a growing tech sector anchored by the Baku Innoland Technopark. The Alat Free Economic Zone south of Baku hosts logistics, manufacturing, and services with preferential tax and customs regimes.",
    whereToLook: [
      "LinkedIn — the primary platform for multinational and international roles, particularly in oil and gas and banking",
      "Boss.az — the largest local job portal used by Azerbaijani employers across sectors",
      "Jobsearch.az — mid-market roles with active SME employer coverage",
      "HH.az — regional portal with Azerbaijani and Russian-language listings",
      "Company career pages: SOCAR, BP Azerbaijan, Azercell, PASHA Bank, Kapital Bank, Azersun"
    ],
    realityChecks: [
      "Work permits are sponsorship-based and subject to sectoral quotas set annually by the State Migration Service. Employers in saturated sectors may be unable to hire foreigners until the next quota cycle. Oil and gas majors and intra-corporate transfers often fall under exemption categories.",
      "Azerbaijani is the state language and increasingly important for customer-facing roles; Russian remains the common language in older corporate settings and business-to-business contexts; English dominates in oil and gas majors, Big Four consulting, and international banks.",
      "The expatriate community in Baku is close-knit, particularly within oil and gas. Professional networks through AmCham Azerbaijan, the British Business Group, and the French-Azerbaijani Chamber of Commerce accelerate hiring significantly.",
      "Labor law provides reasonable protections, but cultural norms around hierarchy and respect for management are more pronounced than in Western European workplaces. Formal titles and protocol matter."
    ]
  },
  salaryReality: {
    overview:
      "Azerbaijani salaries vary sharply by sector, driven by the oil and gas premium. Entry-level roles in Baku earn AZN 500-1,000/month (USD 290-590); mid-career multinational professionals earn AZN 2,000-5,000/month (USD 1,200-2,950); senior expatriate positions in oil and gas majors routinely reach USD 150,000-300,000/year plus housing, schooling, and hardship allowances. Statutory minimum wage is AZN 345/month (~USD 203). Cost of living in Baku is moderate — a comfortable single lifestyle runs USD 1,200-2,500/month; outside Baku, costs drop sharply.",
    realityChecks: [
      "Azerbaijan has a progressive personal income tax with a significant exemption for most employees: salaries up to AZN 8,000/month in the non-oil private sector are effectively taxed at 0% under ongoing exemption rules; oil and gas sector and public sector employees pay 14% on income up to AZN 2,500/month and 25% on the excess. Verify current rules as the exemption program evolves.",
      "Mandatory social contributions include 3% employee pension contribution and substantial employer contributions (22% to state social protection, plus unemployment and medical insurance).",
      "Expatriate packages in oil and gas majors include housing allowance (USD 2,500-5,000/month in central Baku), international school fees, home leave, and in some cases hardship allowance for offshore rotations and remote field assignments.",
      "The Manat's peg to the US dollar removes short-term currency risk for USD-denominated earnings but creates inflation management pressure — the Central Bank of Azerbaijan prioritizes the peg, which has held since 2017 after two devaluations in 2015."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Baku central-district rentals (Sahil, Nasimi, Yasamal) range from USD 800-2,500/month for 1-2 bedroom modern apartments; Port Baku Residences and premium Flame Towers-area units go significantly higher",
      "International school fees: The International School of Azerbaijan (TISA), Baku International Academy, and Dunya School — USD 15,000-30,000/year per child",
      "Utility costs: heating is generally included in rent for modern buildings; electricity for air conditioning in the hot, humid Baku summer (June-August) can add USD 50-100/month",
      "Private healthcare insurance and winter-versus-summer clothing. Baku has a Caspian microclimate — windy year-round, hot summers, cool and humid winters"
    ]
  },
  housingSystem: {
    overview:
      "Housing in Baku is predominantly apartment-based, concentrated in central districts (Sahil, Nasimi, Yasamal, Narimanov), the seaside Bulvar area, and the increasingly popular White City (Ağ Şəhər) development. Premium expatriate developments include Port Baku Residences, Winter Park Residence, and the Flame Towers complex. Badamdar (hillside, family-oriented) and Yeni Yasamal are popular outside the center. Properties are found through brokers (typically 50-100% of one month's rent), Bina.az (the dominant real estate portal), Tap.az classifieds, and direct landlord contact via WhatsApp and Telegram groups.",
    expectations:
      "Expect one to two months' rent as deposit plus one month in advance, with standard 12-month leases. Furnished apartments are the default in expatriate-targeted developments. Verify heating (central gas or electric), air conditioning (essential for summer), parking, and building condition. Older Soviet-era buildings have poor thermal performance; modern complexes in White City and along the Bulvar command premium rents. Short-term furnished rentals in Port Baku target oil and gas rotational staff. Foreign nationals can own apartments and non-agricultural land; registration runs through ASAN service centers and e-gov.az."
  },
  healthcareReality:
    "Azerbaijan operates a mandatory health insurance system (İcbari Tibbi Sığorta) administered through the State Agency for Mandatory Health Insurance (TSN). Foreign nationals with residence permits are eligible to enroll. Public healthcare quality varies significantly; most expatriates and senior professionals use private clinics and hospitals. Leading private providers in Baku include the Central Clinical Hospital, Bona Dea International Hospital (joint-venture facility with international standards), MediClub, Liv Bona Dea Hospital, and the German Medical Center. For complex specialist procedures, some residents travel to Turkey (Istanbul, Ankara), Germany, or Israel. Consultation fees at private clinics range from AZN 30-100 (USD 18-60); a day in a private hospital room costs AZN 150-500. Pharmacies are abundant across Baku — Aptek Plus, Melissa, and Zeytun are major chains. Emergency care is accessed through 103 (ambulance), with reliable response times in Baku and major cities.",
  digitalLife: {
    overview:
      "Azerbaijan is among the most digitally integrated post-Soviet states, driven by the ASAN Service program (one-stop government centers established in 2012) and the e-gov.az portal. Most services — tax, residence registration, vehicle registration, business registration, utility payments — are online with ASAN Imza authentication. Mobile internet from Azercell, Bakcell, and Nar covers the country with 4G and growing 5G in Baku. Fixed broadband from Delta Telecom, Aztelekom, and Baktelecom delivers 100-500 Mbps in Baku and regional cities.",
    essentials: [
      "ASAN Imza — mobile digital signature for authenticating into e-gov.az, tax filing, and all major online government services",
      "e-gov.az portal — unified government services hub for tax, residence, vehicle, and civil documents",
      "BirKart (Kapital Bank) or m10 — dominant digital payment and money transfer platforms; m10 is the leading super-app for P2P and QR payments",
      "Bolt or Uber — ride-hailing in Baku; Bolt has the larger market share"
    ],
    whatSurprisesNewcomers: [
      "The ASAN Service centers are a genuine bureaucratic innovation. Most residence, tax, and civil registration procedures that used to take weeks now take hours at a single desk, with predictable fees and queue numbers displayed digitally.",
      "WhatsApp and Telegram dominate personal and business messaging. Business groups, apartment building groups, and even government service updates often flow through Telegram channels.",
      "Internet filtering exists but is relatively light compared to some regional peers. Certain opposition-linked news sites have been intermittently restricted; major international platforms generally operate without disruption. VPN use is legal and common.",
      "SIM registration is tied to residence card or passport. Biometric verification at operator stores is standard. Tourist SIMs are available at Baku airport on arrival."
    ]
  },
  culture: {
    text: "Azerbaijani culture blends Turkic heritage, Persian influence, and Soviet administrative legacy with a modern national identity. It is a secular Muslim-majority country — most Azerbaijanis are Shia Muslim, but public life is firmly secular, with open cafes, concerts, and nightlife. Hospitality (qonaqpərvərlik) is central — guests are welcomed with tea (çay, served in pear-shaped armudu glasses), sweets, and often a spontaneous meal. Declining repeated offers can be read as coldness. Food culture is rich: plov (saffron-rice pilaf), dolma (stuffed grape leaves), kebab, qutab (stuffed flatbreads), and fresh-baked tandir bread are staples. Novruz (March 20-21, the spring equinox) is the most important holiday, celebrated with public concerts, bonfires, and traditional sweets (shekerbura, pakhlava). Tea culture is ubiquitous at virtually every social and business gathering. Baku has a sophisticated cafe and restaurant culture, a thriving visual arts scene anchored by the YARAT Contemporary Art Centre, and a strong mugham (UNESCO-listed traditional modal music) tradition.",
    highlights: [
      "Accept tea (çay) when offered; it is the universal hospitality gesture. Refusing repeatedly is considered cold. Sugar cubes are placed between the teeth rather than stirred in (traditional style).",
      "Greet with 'Salam' (casual) or 'Salam aleykum' (respectful). 'Necəsiniz?' (how are you?) follows. Russian (Zdravstvuyte) is widely understood and accepted in older professional circles.",
      "When visiting homes, remove shoes at the entrance. Hosts often provide slippers. Bring a small gift: sweets, chocolate, or flowers (odd numbers for celebrations; even numbers for funerals only).",
      "Novruz celebrations fill public squares with samani (wheatgrass), painted eggs, and traditional games. Workplaces wind down for a full week; plan travel and deadlines around it.",
      "In business, Azerbaijani and Russian are used interchangeably; English dominates in oil and gas majors. Punctuality is valued in multinationals; flexibility is expected in local settings. Business cards frequently have Azerbaijani/Russian on one side and English on the other."
    ]
  },
  transportationMobility:
    "Baku has a growing metro (three lines, 26 stations, expanding), extensive bus and BakuBus networks, and a widespread marshrutka minibus system. The BakıKart unified transport card covers metro, bus, and BakuBus. Ride-hailing via Bolt and Uber is widely used — a cross-city ride typically costs AZN 5-12 (USD 3-7). Taxis are plentiful; official Baku Taxi (purple cabs) operate on meters, while traditional taxis require fare negotiation. Within Baku, the central Bulvar and Icherisheher areas are walkable. Outside Baku, intercity travel options include Azerbaijan Railways (with modern trains to Ganja, Sumgayit, and the Tbilisi cross-border service) and long-distance buses from the Baku International Bus Station. Domestic flights connect Baku to Ganja, Nakhchivan (the exclave separated from mainland Azerbaijan by Armenian territory), and Lankaran. The Baku-Tbilisi-Kars railway links Azerbaijan to Georgia and Turkey. Driving is common; Azerbaijani roads are generally well-maintained on main routes, though winter mountain driving in regions like Gabala and Quba requires caution.",
  internationalConnectivity:
    "Heydar Aliyev International Airport (GYD) in Baku is Azerbaijan's primary hub, with direct flights across Europe (London, Paris, Frankfurt, Vienna, Milan, Berlin), the Middle East (Dubai, Doha, Istanbul), Russia and CIS (Moscow, Tbilisi, Almaty, Astana), and Asia (Beijing, Urumqi, Tashkent, Tehran). Azerbaijan Airlines (AZAL) is the flag carrier. International carriers with direct service include Turkish Airlines (major Istanbul hub), Lufthansa, Air France, Emirates, Qatar Airways, flydubai, Pegasus, and Wizz Air. Flight time from Baku to Istanbul is about 2.5 hours; Dubai, 3 hours; Moscow, 3 hours; London, 5.5 hours. Ganja International Airport (KVD) and Nakhchivan Airport (NAJ) handle regional and limited international routes.",
  travelExploration:
    "Azerbaijan offers extraordinary cultural and natural diversity for its size. Baku itself — the UNESCO-listed Old City (Icherisheher), Maiden Tower, Palace of the Shirvanshahs, Flame Towers, and the Heydar Aliyev Center — rewards unhurried exploration. Qobustan National Park, 60 kilometers south of Baku, preserves UNESCO-listed Neolithic petroglyphs and mud volcanoes. The Absheron Peninsula features the Ateshgah fire temple and the eternally burning gas flames of Yanar Dag. Northern Azerbaijan offers the Caucasus mountain towns of Gabala (ski resort, cable cars), Quba (apple orchards and traditional villages), and Khinalug (one of the highest continuously inhabited villages in Europe at 2,350 meters). Sheki in the northwest preserves a Silk Road caravanserai and the Palace of the Shaki Khans with stunning stained glass. Lankaran and Talysh in the south offer subtropical tea plantations and Hirkan National Park's rare Caspian forests. Weekend trips to Tbilisi (4 hours by train or 1 hour by flight) are popular; Istanbul is 2.5 hours by air.",
  considerations: [
    "Caspian Climate Extremes: Baku sits on a windy peninsula with hot, humid summers (35-40°C July-August) and cool, damp winters. The 'Khazri' north wind is legendary — strong enough to ground aircraft at Heydar Aliyev Airport. Pack for both seasons and expect strong winds year-round on the Bulvar.",
    "Sponsorship-Based Immigration: Work and most residence permits tie you to a specific employer or sponsor. Changing jobs requires formal release and a fresh work permit application — plan transitions carefully to avoid status gaps.",
    "Regional Geopolitics: Following the 2020 and 2023 Karabakh conflicts, normalization with Armenia is underway but incomplete, and relations with Russia, Iran, and Turkey shape foreign policy. Avoid casual commentary on Karabakh, Armenia, or Iran-Israel dynamics in professional settings.",
    "Sponsorship-Required Banking: Opening a bank account requires a work contract or residence card, not just a passport. Plan for a two-to-four week gap between arrival and full banking functionality.",
    "Photography Restrictions: Photographing military installations, border areas, government buildings, and some infrastructure is restricted. The Presidential Administration area and some oil and gas facilities are particularly sensitive. When in doubt, ask."
  ],
  mistakes: [
    "Confusing Azerbaijani with Russian or Turkish identity. Azerbaijan is a distinct Turkic nation with its own language (closely related to Turkish but not identical), history, and national identity.",
    "Skipping ASAN registration. Forgetting to register your address within 15 days triggers fines. Long-term residents must register proactively at ASAN centers or online.",
    "Underestimating the wind. The Khazri north wind and Gilavar south wind make Baku one of the windiest capitals on earth. Umbrellas are useless; a proper windbreaker is essential year-round.",
    "Assuming oil and gas is the only industry. Azerbaijan has a growing tech sector, a substantial agricultural economy (pomegranates, tea, hazelnuts), and a rising tourism industry.",
    "Discussing Karabakh casually. The 2020 Second Karabakh War and the 2023 Azerbaijani operation reshaped the region. For Azerbaijanis, this is recent, personal, and emotionally charged. Listen more than you speak."
  ],
  emergency: [
    {
      number: '112',
      service: 'Unified Emergency Number',
      description: 'All-in-one emergency number for police, fire, and ambulance. Operational nationwide; operators speak Azerbaijani and Russian, with growing English capability in Baku and major cities.'
    },
    {
      number: '101',
      service: 'Fire and Rescue',
      description: 'Direct fire department emergency line operated by the Ministry of Emergency Situations. Operators primarily speak Azerbaijani and Russian.'
    },
    {
      number: '102',
      service: 'Police',
      description: 'Direct police emergency line. Operators speak Azerbaijani and Russian; English proficiency varies.'
    },
    {
      number: '103',
      service: 'Ambulance',
      description: 'National ambulance service. Response times in Baku are generally reliable; regional response varies. Private ambulance services (Bona Dea, MediClub) are available for those with private insurance.'
    }
  ],
  sources: [
    {
      name: 'State Migration Service',
      category: 'Immigration & Residency',
      description: "Azerbaijan's central authority for visas, work permits, temporary and permanent residence permits, and foreign national registration. The definitive source for immigration procedures.",
      link: 'https://migration.gov.az/'
    },
    {
      name: 'ASAN Visa (eVisa Portal)',
      category: 'Visas',
      description: 'Official electronic visa portal for tourist and business visas. Three-day standard and three-hour urgent processing for eligible nationalities.',
      link: 'https://evisa.gov.az/'
    },
    {
      name: 'e-gov.az (Government Services Portal)',
      category: 'Government Services',
      description: 'Unified digital government portal for tax filing, vehicle registration, business registration, residence matters, and most online administrative services.',
      link: 'https://www.e-gov.az/'
    },
    {
      name: 'Ministry of Foreign Affairs',
      category: 'Visas & Consular',
      description: 'Authority for consular services, embassy directory, and international agreements. Publishes entry requirements and travel advisories.',
      link: 'https://www.mfa.gov.az/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Azerbaijan, consult the Ministry of Foreign Affairs of Azerbaijan or an Azerbaijani embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/azerbaijan',
    mfaLink: 'https://www.mfa.gov.az/'
  },
  serviceDirectory: {
    title: "Service Directory - Azerbaijan",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Azerbaijan.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for work permits, residence permits, investor visas, and corporate immigration.",
        providers: [
          { name: "Baker McKenzie Baku", link: "https://www.bakermckenzie.com" },
          { name: "Dentons Azerbaijan", link: "https://www.dentons.com" },
          { name: "MGB Law Offices", link: "https://mgblaw.az" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Platforms and agencies for rentals and purchases in Baku and regional cities.",
        providers: [
          { name: "Bina.az", link: "https://bina.az" },
          { name: "Colliers Azerbaijan", link: "https://www.colliers.com" },
          { name: "Tap.az (Classifieds)", link: "https://tap.az" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Azerbaijani personal and corporate tax, oil and gas sector taxation, and cross-border planning.",
        providers: [
          { name: "PwC Azerbaijan", link: "https://www.pwc.com/az" },
          { name: "EY Azerbaijan", link: "https://www.ey.com/en_az" },
          { name: "Deloitte Azerbaijan", link: "https://www2.deloitte.com/az" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services with customs expertise.",
        providers: [
          { name: "Crown Relocations Azerbaijan", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "AGS Movers Baku", link: "https://www.agsmovers.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Azerbaijani and Russian language instruction for foreign professionals.",
        providers: [
          { name: "Dilmac Language Center", link: "https://dilmac.az" },
          { name: "ADA University Language Center", link: "https://www.ada.edu.az" },
          { name: "Berlitz Azerbaijan", link: "https://www.berlitz.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major private clinics and international-standard medical providers.",
        providers: [
          { name: "Bona Dea International Hospital", link: "https://bonadea.az" },
          { name: "MediClub", link: "https://mediclub.az" },
          { name: "Central Clinical Hospital", link: "https://www.mkx.az" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and firms connecting professionals with Azerbaijani employers.",
        providers: [
          { name: "Boss.az", link: "https://boss.az" },
          { name: "Jobsearch.az", link: "https://jobsearch.az" },
          { name: "PwC People & Organisation Azerbaijan", link: "https://www.pwc.com/az" }
        ]
      }
    ]
  }
};
