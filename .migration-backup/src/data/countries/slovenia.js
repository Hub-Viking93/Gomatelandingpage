export const slovenia = {
  id: 'slovenia',
  slug: 'slovenia',
  name: 'Slovenia',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Slovenian'],
  shortDescription: 'A green jewel nestled between the Alps and the Adriatic.',
  heroImage: 'https://images.unsplash.com/photo-1587632478929-c7b203655b25?',
  flagAlt: 'Flag of Slovenia',
  atAGlance: "Slovenia describes itself as the 'green heart of Europe', and it genuinely lives up to the claim. This compact country of just two million people is one of the most forested nations on the continent, wedged between the Julian Alps to the north, the Adriatic coast to the southwest, the Pannonian plain to the east, and the Karst region's underground caves and vineyards to the south. The lifestyle is active and outdoorsy — hiking, skiing, cycling, and trail running are not hobbies but core elements of the national identity. Ljubljana, the capital, is a charming, pedestrian-friendly city that feels more like a large town: the center is car-free, the Ljubljanica river is lined with cafes, and you can bike from one end to the other in twenty minutes. Slovenia sits at the crossroads of Slavic, Germanic, and Romance cultures, absorbing the efficiency of Austria, the food traditions of Italy, and the relaxed warmth of the Balkans. English proficiency is very high among younger generations, making initial adaptation straightforward, though learning Slovenian is deeply appreciated and opens doors to genuine social integration. The bureaucracy is orderly but not fast, and the small size of the country means that personal connections matter enormously in both professional and social contexts.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'Medium',
    primaryLanguages: 'Slovenian (English widely spoken)',
  },
  visas: [
    {
      name: 'Single Permit (Enotno dovoljenje)',
      targetAudience: 'Employed Professionals',
      useCase: 'A combined work and residence permit that is the standard pathway for non-EU nationals with a job offer in Slovenia. Your employer typically initiates the application at the local Administrative Unit (Upravna enota), and the permit is processed jointly by the Employment Service of Slovenia (ZRSZ) and the administrative authority. Requires a valid employment contract and proof of accommodation.',
      duration: '1 year (renewable)',
      link: 'https://www.ess.gov.si/en/jobseekers/employment-of-non-eu-migrant-workers/work-in-slovenia/single-permit'
    },
    {
      name: 'EU Blue Card',
      targetAudience: 'Highly Qualified Workers',
      useCase: 'For non-EU nationals with a university degree (or equivalent five years of professional experience) and a binding job offer meeting the salary threshold (at least 1.5x the average gross annual salary in Slovenia). Provides enhanced mobility rights within the EU after 18 months.',
      duration: '2 years (renewable)',
      link: 'https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/eu-blue-card/eu-blue-card-slovenia_en'
    },
    {
      name: 'Self-Employment Residence Permit',
      targetAudience: 'Freelancers, Entrepreneurs',
      useCase: 'For individuals registering as a sole trader (s.p. — samostojni podjetnik) or establishing a company in Slovenia. EU citizens can register freely; non-EU citizens typically need to have held a valid residence permit for at least one year before applying, though exceptions exist for certain nationalities and investment thresholds.',
      duration: 'Tied to residence permit duration',
      link: 'https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/self-employed-worker-slovenia_en'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists, Short-stay Visitors',
      useCase: 'For short visits up to 90 days within a 180-day period for tourism, business meetings, or family visits. Citizens of many countries can enter visa-free under Schengen rules.',
      duration: 'Up to 90 days',
      link: 'https://www.gov.si/en/topics/entry-and-residence/short-stay/'
    },
    {
      name: 'Digital Nomad Permit',
      targetAudience: 'Remote Workers',
      useCase: 'Slovenia introduced provisions for remote workers employed by foreign entities. Applicants must demonstrate sufficient income, health insurance, and accommodation. This is a relatively new pathway and requirements may evolve.',
      duration: '1 year (renewable)',
      link: 'https://www.gov.si/en/topics/entry-and-residence/'
    }
  ],
  requirements: [
    {
      title: 'EMSO (Enotna Matična Številka Občana)',
      explanation: 'A unique 13-digit personal identification number assigned to all residents of Slovenia, equivalent to a social security number. You receive it automatically when you register your residence or obtain a tax number.',
      importance: 'The EMSO is your key identifier in all Slovenian systems — healthcare registration with ZZZS (Health Insurance Institute), tax filings with FURS (Financial Administration), banking, employment contracts, and access to government e-services. Without it, you cannot function within the formal system.',
      link: 'https://www.gov.si/en/'
    },
    {
      title: 'Davčna Številka (Tax Number)',
      explanation: 'A tax identification number issued by the Financial Administration of the Republic of Slovenia (FURS). You must apply for it shortly after arrival by submitting form DR-02 at your local FURS office, along with your passport and proof of address.',
      importance: 'Mandatory for opening a bank account, receiving salary, paying taxes, and registering for social insurance. Without a tax number, you cannot sign an employment contract or engage in any economic activity in Slovenia. The process is straightforward and typically completed within a few days.',
      link: 'https://www.fu.gov.si/en/'
    },
    {
      title: 'Registration of Residence (Prijava Prebivališča)',
      explanation: 'All residents must register their address at the local Administrative Unit (Upravna enota). Temporary residents must register within 3 days of arrival, and those with permanent residence within 8 days. You need a valid ID/passport and proof of accommodation (rental contract or landlord declaration).',
      importance: 'Registration of residence is the legal foundation of your stay in Slovenia. It triggers the issuance of your EMSO and tax number, enables healthcare registration, and is a prerequisite for virtually all other administrative processes. Failure to register can result in fines and complications with residence permit renewals.',
      link: 'https://e-uprava.gov.si/en'
    },
    {
      title: 'Health Insurance (ZZZS Registration)',
      explanation: 'Slovenia has mandatory health insurance through the Health Insurance Institute of Slovenia (ZZZS). Employed residents are automatically enrolled through their employer. Self-employed individuals and others must register and pay contributions independently. Complementary insurance (dopolnilno zavarovanje) is strongly recommended to cover co-payments.',
      importance: 'Health insurance is both a legal requirement and a practical necessity. Without valid ZZZS registration, you cannot access the public healthcare system, and your residence permit application may be rejected. Most residents also carry complementary insurance from providers like Vzajemna, Triglav, or Adriatic Slovenica to cover the 10-30% co-payments on many services.',
      link: 'https://www.zzzs.si/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Slovenia's job market is small, relationship-driven, and concentrated in a few key sectors. International-facing roles exist primarily in technology, automotive manufacturing (Revoz/Renault, Hella), logistics, and shared service centers for multinational companies. Ljubljana has a growing startup ecosystem, and the Slovenian tech scene punches above its weight with companies like Bitstamp and Outfit7 having emerged from the local talent pool. Most local roles require Slovenian language skills.",
    whereToLook: [
      "LinkedIn (strongest for international, tech, and management roles)",
      "MojeDelo.com (largest Slovenian job portal)",
      "Zavod RS za Zaposlovanje / ZRSZ (public employment service with job listings)",
      "Company career pages (especially for regional EU firms like Lek/Novartis, Krka, Gorenje)",
      "Recruitment agencies specializing in IT and engineering (Adecco Slovenia, Manpower)"
    ],
    realityChecks: [
      "Slovenian language proficiency is a major advantage — and often a requirement — for any role outside international tech teams or shared service centers.",
      "Hiring processes tend to be slower and less formal than in Northern or Western Europe, with personal recommendations carrying significant weight.",
      "Career progression and salary growth are typically gradual; Slovenia rewards stability and loyalty over aggressive job-hopping.",
      "The job market is small enough that your professional reputation precedes you — networking within industry circles matters enormously."
    ]
  },
  salaryReality: {
    overview:
      "Slovenian salaries are modest compared to Western Europe but are complemented by a lower cost of living and a comprehensive social safety net. The average gross monthly salary in Slovenia is approximately EUR 2,200-2,400, with significant variation by sector and location. Tech, pharma, and finance offer the highest salaries, while public sector and service roles pay less. Social security contributions are substantial, reducing gross-to-net conversion noticeably.",
    realityChecks: [
      "Net salary in Ljubljana can feel tight despite lower rent than major EU capitals — groceries, dining, and car ownership costs add up.",
      "Bonuses, equity compensation, and performance-based pay are uncommon outside tech and executive roles.",
      "Public benefits (healthcare, education, parental leave, pension) reduce the need for private insurance or supplementary services significantly.",
      "The gap between Ljubljana salaries and those in smaller cities like Maribor, Celje, or Koper can be 15-25%, but living costs are proportionally lower."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "High employee social security contributions (approximately 22% of gross salary) that significantly reduce take-home pay",
      "Limited upside in salary negotiation — pay bands are relatively narrow and transparent",
      "The substantially lower cost of living outside Ljubljana, which can make a modest salary very comfortable",
      "Meal vouchers (malica) provided by most employers, covering roughly EUR 6-7 per workday, which are a meaningful tax-free benefit"
    ]
  },
  housingSystem: {
    overview:
      "Most rentals in Slovenia are private, unfurnished, and found through personal networks or online listings. Supply is limited in Ljubljana, where demand consistently outstrips availability. Popular neighborhoods for expats in Ljubljana include Center, Trnovo, Bežigrad, and Šiška. Contracts are typically for one year with one to two months' deposit. Outside the capital, housing is significantly more affordable — Maribor, Celje, and coastal Koper offer good quality at lower prices.",
    expectations:
      "Start your search on Nepremicnine.net (the dominant listing platform), Bolha.com (classified ads), and local Facebook groups. Informal arrangements through personal contacts are still common and sometimes the fastest route to securing a property. Always insist on a written rental contract and verify that the landlord registers the contract with the tax authority (FURS), as this is legally required. Utility costs are reasonable — heating in winter (typically district heating or gas) is the largest variable expense and can add EUR 80-150 per month. Air conditioning is uncommon in older buildings."
  },
  healthcareReality:
    "Slovenia has a universal public healthcare system funded through mandatory social security contributions and managed by ZZZS (Zavod za Zdravstveno Zavarovanje Slovenije). The system provides good coverage for primary care, hospital treatment, and specialist services. The main public hospitals — UKC Ljubljana (University Medical Centre Ljubljana), UKC Maribor, and General Hospital Celje — offer solid medical care, though waiting times for non-urgent specialist appointments and elective procedures can be several weeks to months. Most residents carry complementary health insurance (dopolnilno zavarovanje) from providers like Vzajemna, Triglav Zdravje, or Adriatic Slovenica, which covers the co-payment portion (10-30%) of many services and costs approximately EUR 35-45 per month. Private clinics — such as Diagnostični Center Bled, MC Medicor, and Medicofit — are widely used for faster access to diagnostics, physiotherapy, and dental care. Pharmacies (lekarne) are well-stocked and operate under a regulated system with reasonable prices.",
  digitalLife: {
    overview:
      "Slovenia's public services are moderately digitized through the eUprava portal, but the experience is less seamless than in Nordic or Baltic countries. Banking, tax filing, and some government services work well online once you have the proper credentials, but initial setup processes often require in-person visits to administrative offices.",
    essentials: [
      "eUprava portal (online access to government services, residence registration, and document requests)",
      "ZZZS health insurance card (kartica zdravstvenega zavarovanja — required for any medical visit)",
      "Slovenian bank account with online banking (major banks: NLB, Nova KBM, SKB, Intesa Sanpaolo)",
      "Mobile ID or qualified digital certificate for electronic signatures and tax filing"
    ],
    whatSurprisesNewcomers: [
      "Digital processes are functional but less intuitive than in countries like Estonia or Denmark — expect some friction during setup.",
      "Paper documents and physical stamps are still frequently requested by landlords, employers, and administrative offices.",
      "Some government forms and online services are only available in Slovenian, requiring assistance or translation.",
      "Cash is still used commonly in smaller towns, markets, and some restaurants, though card acceptance is growing rapidly in Ljubljana."
    ]
  },
  culture: {
    text: 'Slovenians are reserved at first but genuinely warm once a relationship is established. The national character combines Central European orderliness with a Mediterranean appreciation for good food and outdoor living. Weekends are sacred — Saturday mornings are for the open market (Ljubljana Central Market is a social institution), and Sundays are for hiking in the mountains or visiting family in the countryside. Shoes are always removed at the door, and guests are immediately offered slippers (copati). Beekeeping is a national passion — Slovenia is the birthplace of the Carniolan honey bee and has more beekeepers per capita than almost any country in the world. Food culture is rich and regional: potica (a rolled nut pastry) appears at every celebration, štruklji (rolled dumplings) are a comfort staple, and local wines from Goriška Brda, Vipava Valley, and Štajerska rival Italian and Austrian neighbors in quality.',
    highlights: [
      'Slippers (copati): Wearing outdoor shoes inside a Slovenian home is a major social faux pas. Hosts always provide guest slippers — accept them without hesitation.',
      'Punctuality: Slovenians value timeliness. Arriving late to a social or professional engagement without notice is considered disrespectful.',
      'Potica: A traditional rolled pastry (usually walnut-filled) that appears at every holiday, celebration, and family gathering. You will be offered it frequently — always try some.',
      'Outdoor culture: Nearly everyone owns serious hiking or skiing equipment. Weekend conversations revolve around which mountain was climbed, which trail was discovered, or which ski resort has the best snow.',
      'Toast etiquette: When clinking glasses, make direct eye contact with each person. Failing to do so is considered bad luck (and poor manners).'
    ]
  },
  transportationMobility:
    "Ljubljana has a compact and walkable center with a public bus network (LPP — Ljubljanski Potniški Promet) that covers the city and surrounding suburbs using the Urbana contactless card. The city also has an extensive cycling network and the BicikeLJ bike-sharing system. Outside the capital, public transport is more limited — buses connect towns and cities, but schedules can be infrequent in rural areas. Slovenian Railways (Slovenske Železnice) operates train services between Ljubljana, Maribor, Koper, Jesenice, and other towns, though journeys can be slow on non-electrified routes. Car ownership is very common and practically essential for anyone living outside Ljubljana or wanting to explore the countryside — the highway network (avtocesta) is modern and connects the entire country within two hours. A digital highway vignette (e-vinjeta) is mandatory for motorway use, and enforcement cameras automatically detect violations with steep fines. Parking in Ljubljana city center is restricted and expensive.",
  internationalConnectivity:
    "Ljubljana Jože Pučnik Airport (LJU) is the country's main international gateway, offering direct flights to major European hubs including Frankfurt, Munich, London, Paris, Amsterdam, Istanbul, and Brussels, primarily through Lufthansa, Turkish Airlines, easyJet, and national carrier Aero4M. However, the route network is limited compared to larger European airports, so many travelers rely on nearby alternatives: Venice Marco Polo Airport (2 hours by car), Graz Airport (2 hours), Klagenfurt Airport (1.5 hours), and Zagreb Airport (2 hours). Slovenia's central location makes it a natural crossroads — Vienna is 4 hours by car, Milan 5 hours, and Budapest 4.5 hours, making road trips and cross-border rail travel practical weekend options.",
  travelExploration:
    "Slovenia is extraordinarily compact — the entire country spans just 20,273 square kilometers — yet offers remarkable geographic diversity within short distances. Lake Bled and Lake Bohinj in the Julian Alps are iconic destinations, equally beautiful in summer and winter. The Soča Valley offers world-class kayaking and fly fishing in emerald-green waters. The Škocjan Caves (UNESCO) and Postojna Cave showcase stunning underground karst formations. The short Adriatic coastline around Piran, Izola, and Koper delivers Venetian architecture and Mediterranean charm. Wine regions like Goriška Brda (Slovenian Tuscany) and the Vipava Valley produce excellent wines with growing international recognition. Triglav National Park, centered on Slovenia's highest peak (Mount Triglav, 2,864m), is a hiking paradise. Weekends also frequently involve crossing into Italy for seafood, Austria for skiing, or Croatia for coastal getaways — all within 1-2 hours of Ljubljana.",
  considerations: [
    'Highway Vignette: You MUST purchase a digital e-vinjeta (electronic toll pass) to drive on Slovenian motorways. Police cameras automatically scan license plates, and fines for violations start at EUR 300. Weekly, monthly, and annual options are available online at evinjeta.dars.si.',
    'Language: Slovenian is a South Slavic language with a unique dual grammatical number (singular, dual, plural) that makes it one of the harder European languages to learn. English works well in Ljubljana and with younger generations, but learning basic Slovenian dramatically improves social integration and is required for permanent residency.',
    'Sunday Closures: Most grocery stores, shops, and retail outlets are closed on Sundays and public holidays. Plan your shopping accordingly — only small convenience shops, gas station stores, and some tourist-area businesses remain open.',
    'Tick-Borne Diseases: Tick-borne encephalitis (TBE) and Lyme disease are genuine risks in Slovenian forests and meadows. Vaccination against TBE is strongly recommended for anyone who hikes, and checking for ticks after outdoor activities is essential.',
    'Small Country Dynamics: With a population of only 2 million, Slovenia operates on personal networks. Professional reputations travel fast, word of mouth is the primary referral mechanism, and social circles overlap significantly. This is an advantage once you are established, but it means building trust and connections early is critical.'
  ],
  mistakes: [
    'Confusing Slovenia with Slovakia. This happens constantly — the two countries even have an informal agreement to exchange mis-delivered mail. Slovenians are proud of their distinct identity and will correct you immediately.',
    'Refusing food or drink when offered. Slovenian hospitality is genuine and persistent — declining refreshments multiple times can be perceived as rude. Try at least a little of everything, especially when visiting someone\'s home.',
    'Walking in the bike lane in Ljubljana. Cyclists are fast, assertive, and numerous. The bike lanes are clearly marked, and stepping into them without looking will result in close calls and angry bell-ringing.',
    'Ignoring the recycling rules. Waste separation in Slovenia is strict and well-organized — paper, plastic/packaging, glass, organic waste, and residual waste each have designated bins. Mixing waste incorrectly can result in warnings from your building manager or neighbors.',
    'Underestimating winter. Slovenian winters are cold (especially in the interior and mountains), and heating costs can be significant. Snow and ice are common from November through March. Proper winter clothing and snow tires (mandatory from November 15 to March 15) are not optional.'
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency (Fire, Ambulance, Rescue)',
      description: 'The primary emergency number for all services. Operators speak Slovenian and English. Also activates mountain rescue (Gorska Reševalna Služba) for hiking emergencies.'
    },
    {
      number: '113',
      service: 'Police',
      description: 'Direct police line for reporting crimes, traffic incidents, and non-life-threatening emergencies.'
    },
    {
      number: '080 1900',
      service: 'Tourist Police Helpline',
      description: 'Police helpline specifically for tourists needing assistance with lost documents, theft reports, or general safety inquiries. Available in multiple languages.'
    }
  ],
  sources: [
    {
      name: 'Gov.si (Republic of Slovenia Government Portal)',
      category: 'Government Services',
      description: 'Central government portal providing information on entry and residence, permits, public services, and legal requirements for foreigners in English.',
      link: 'https://www.gov.si/en/'
    },
    {
      name: 'InfoTujci (Information for Foreigners)',
      category: 'Integration & Immigration',
      description: 'Dedicated resource for foreign nationals in Slovenia covering residence permits, employment, healthcare, education, and integration support.',
      link: 'https://www.infotujci.si/en/'
    },
    {
      name: 'ZRSZ (Employment Service of Slovenia)',
      category: 'Employment',
      description: 'Public employment service handling work permits, job listings, and labor market information for both Slovenian and foreign workers.',
      link: 'https://www.ess.gov.si/en/'
    },
    {
      name: 'Slovenia.info',
      category: 'Tourism',
      description: 'Official tourism board with comprehensive travel guides, activity information, and practical visitor resources.',
      link: 'https://www.slovenia.info/en'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa and residency matters, and official guidance related to Slovenia, consult the Slovenian Ministry of Foreign and European Affairs or a Slovenian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/slovenia',
    mfaLink: 'https://www.gov.si/en/state-authorities/ministries/ministry-of-foreign-and-european-affairs/'
  },
  serviceDirectory: {
    title: "Service Directory - Slovenia",
    description: "Examples of commonly used service providers people often interact with when relocating to Slovenia.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with residence permits, work authorization, and long-term stay applications in Slovenia.",
        providers: [
          { name: "Law Firm Senica & Partners", link: "https://www.senica.si" },
          { name: "Odvetni\u0161ka dru\u017eba \u010ceferin", link: "https://www.ceferin.si" },
          { name: "CMS Slovenia", link: "https://cms.law/en/svn" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies helping with apartment rentals, property purchases, and local housing contracts across Slovenia.",
        providers: [
          { name: "Nepremi\u010dnine.net", link: "https://www.nepremicnine.net" },
          { name: "Century 21 Slovenia", link: "https://www.c21.si" },
          { name: "RE/MAX Slovenia", link: "https://www.remax.si" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax advisors and accounting firms familiar with Slovenian tax residency, FURS regulations, and cross-border income.",
        providers: [
          { name: "Deloitte Slovenia", link: "https://www2.deloitte.com/si" },
          { name: "PwC Slovenia", link: "https://www.pwc.com/si" },
          { name: "BDO Slovenia", link: "https://www.bdo.si" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and regional relocation services covering customs, transport, and household moves.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Slovenia", link: "https://www.agsmovers.com" },
          { name: "Intereuropa", link: "https://www.intereuropa.si" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Institutions and courses offering Slovenian language instruction for foreigners and integration purposes.",
        providers: [
          { name: "Centre for Slovene as a Second Language (University of Ljubljana)", link: "https://centerslo.si" },
          { name: "Lingula Language School", link: "https://www.lingula.si" },
          { name: "Slovene Learning Online (SLOnline)", link: "https://www.slonline.si" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public and private healthcare providers commonly used by residents and expats in Slovenia.",
        providers: [
          { name: "UKC Ljubljana (University Medical Centre)", link: "https://www.kclj.si" },
          { name: "ZZZS (Health Insurance Institute of Slovenia)", link: "https://www.zzzs.si" },
          { name: "Diagnosti\u010dni Center Bled", link: "https://www.dc-bled.si" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Platforms and agencies connecting job seekers with Slovenian employers across sectors.",
        providers: [
          { name: "Zavod RS za Zaposlovanje (ZRSZ)", link: "https://www.ess.gov.si" },
          { name: "MojeDelo", link: "https://www.mojedelo.com" },
          { name: "Adecco Slovenia", link: "https://www.adecco.si" }
        ]
      }
    ]
  }
};
