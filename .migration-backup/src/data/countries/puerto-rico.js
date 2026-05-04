export const puertoRico = {
  id: 'puerto-rico',
  slug: 'puerto-rico',
  name: 'Puerto Rico',
  region: 'Americas',
  complexity: 'Low',
  languages: ['Spanish', 'English'],
  shortDescription: 'A US territory with Act 60 tax incentives, tropical Caribbean living, and deep Spanish-Caribbean cultural roots.',
  heroImage: 'https://images.unsplash.com/photo-1579687196544-08ae57ab5c11',
  flagAlt: 'Flag of Puerto Rico',
  atAGlance: "Puerto Rico is a Caribbean island of about 3.2 million people with a unique status: an unincorporated US territory (Estado Libre Asociado), not a state and not independent. Puerto Ricans are US citizens by birth (since 1917) and move freely to the mainland, but cannot vote in presidential elections and have no voting representation in Congress. The US dollar is the currency, USPS delivers mail, and federal agencies operate on the island, while PR keeps its own government, tax system, and culture. Spanish dominates daily life; English is co-official but a second language for most. US citizens move here as easily as between states; non-US citizens face the same federal rules as for any state. San Juan anchors a sprawling metro built around UNESCO-listed Viejo San Juan, Condado, Isla Verde, Hato Rey's financial district, and the gated suburbs of Guaynabo and Dorado. Beyond it, the east coast (Fajardo, Humacao), surf town Rincón, the central cordillera, and the small islands of Vieques and Culebra each offer distinct lifestyles. The economy runs on pharmaceutical and medical-device manufacturing, finance, tourism, and government. Act 60 — consolidating Acts 20 and 22 — is the flagship draw: 4% corporate tax on qualifying export services and 0% capital gains for new bona fide residents spending 183+ days a year on the island. It is controversial, blamed locally for gentrification. Hurricane Maria (September 2017) was the defining recent event, killing thousands and destroying the grid, triggering mass mainland migration alongside Act 60 inbound relocations. The 2016 PROMESA Oversight Board took over fiscal restructuring after bankruptcy; austerity and brain drain have accelerated population decline. Outages remain a daily feature; generators or solar-plus-battery are standard at the higher end.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'No limit for US citizens; US immigration rules for others',
    costOfLiving: 'Medium-High',
    primaryLanguages: 'Spanish (Official), English (Official)',
  },
  visas: [
    {
      name: 'US Citizens / Nationals',
      targetAudience: 'US citizens and nationals moving from mainland or territories',
      useCase: 'No visa, work permit, or immigration process. US citizens move to Puerto Rico exactly as between US states — simply arrive and establish residency. Act 60 status, driver\'s license conversion, and voter registration are separate administrative steps handled by PR agencies.',
      duration: 'Unlimited',
      link: 'https://www.pr.gov/'
    },
    {
      name: 'US Federal Visa Rules (Non-Citizens)',
      targetAudience: 'Non-US citizens relocating to Puerto Rico',
      useCase: 'Puerto Rico is a US territory with no separate visa system. Non-US citizens face the same federal rules as for any US state: employment-based (H-1B, L-1, O-1), family-based, investor (EB-5, E-2), and green-card categories — all administered by USCIS and the Department of State. ESTA/Visa Waiver Program applies for short tourist stays from eligible countries.',
      duration: 'Varies by visa category',
      link: 'https://www.uscis.gov/'
    },
    {
      name: 'Act 60 Individual Investor Decree',
      targetAudience: 'Investors with capital gains / passive income',
      useCase: 'Not an immigration visa but the flagship PR tax incentive. Available to individuals who become bona fide residents and have not been PR residents in the prior six years. Grants 0% PR tax on qualifying capital gains and dividends accrued after establishing residency. Requires applying to DDEC, paying application and annual fees, and satisfying the 183-day presence and closer-connection tests.',
      duration: 'Decree valid through 2035 with extensions possible',
      link: 'https://www.ddec.pr.gov/'
    },
    {
      name: 'Act 60 Export Services Decree',
      targetAudience: 'Service businesses exporting from Puerto Rico',
      useCase: 'Corporate-level tax incentive. Businesses providing qualifying services to clients outside PR can obtain a decree offering 4% corporate income tax and 100% exemption on dividends to qualifying shareholders. Requires physical presence in PR, employment thresholds in some cases, and substance requirements. Administered by DDEC.',
      duration: 'Decree valid through 2035 with extensions possible',
      link: 'https://www.ddec.pr.gov/'
    },
    {
      name: 'Heritage / Boricua Diaspora Pathways',
      targetAudience: 'Diaspora Puerto Ricans and descendants',
      useCase: 'No formal heritage visa exists, but boricua identity-based ties (family on the island, Spanish fluency, cultural connection) significantly ease relocation logistics: housing through family networks, faster cultural integration, and access to diaspora-led professional and community organizations. Diaspora returnees ("nuyoricans" and others) are a recognizable and welcomed segment of inbound moves.',
      duration: 'Indefinite (US citizens by birth)',
      link: 'https://www.pr.gov/'
    }
  ],
  requirements: [
    {
      title: 'Puerto Rico Driver\'s License',
      explanation: 'Issued by the Departamento de Transportación y Obras Públicas (DTOP). Valid US state license holders can convert to a Real ID-compliant PR license by presenting the existing license, proof of PR address, and required documentation. Non-US license holders follow standard US-territory licensing procedures.',
      importance: 'Required for driving after establishing residency, and a commonly accepted proof of residency for Act 60 applications, utility connections, and other administrative processes. DTOP offices can be busy — plan for a 1-3 hour visit.',
      link: 'https://www.dtop.gov.pr/'
    },
    {
      title: 'Bona Fide Residency Documentation (Act 60)',
      explanation: 'Act 60 benefits require bona fide residency for the entire tax year: the 183-day physical presence test, the tax home test (principal place of business in PR), and the closer connection test (personal, social, and economic ties stronger to PR than anywhere else).',
      importance: 'These tests are actively monitored by the IRS and Hacienda. Beneficiaries must document days present (flight records, credit card statements, utility bills), maintain a PR home, and demonstrate a real shift in economic center. Failure invalidates the benefits retroactively and can trigger significant federal tax liability.',
      link: 'https://hacienda.pr.gov/'
    },
    {
      title: 'Electrical Service Account (LUMA)',
      explanation: 'LUMA Energy operates Puerto Rico\'s transmission and distribution. Opening a residential account requires proof of address (lease or deed), SSN or ITIN, and a deposit. Backup power (generator, inverter/battery, or solar-plus-storage) is a practical necessity given grid reliability post-Maria.',
      importance: 'Grid reliability remains a structural concern. Most higher-end housing includes a generator; solar-plus-battery has proliferated since Maria. Budget USD 150-500/month depending on AC usage, and factor backup power into housing decisions. LUMA has faced significant public criticism for outage frequency and response.',
      link: 'https://lumapr.com/'
    },
    {
      title: 'Puerto Rico Tax Registration (Hacienda)',
      explanation: 'Puerto Rico maintains its own income tax system for bona fide residents, who pay PR income tax instead of US federal tax on PR-source income (US citizens remain subject to federal tax on non-PR worldwide income). Hacienda administers local income tax, sales-and-use tax (IVU, currently 11.5%), and other local taxes.',
      importance: 'The interaction between US federal tax, PR tax, and Act 60 decrees is complex. A tax professional experienced in both systems is essential. Mistakes in residency timing, asset titling, and income characterization can create significant liabilities on either or both sides.',
      link: 'https://hacienda.pr.gov/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Puerto Rico's economy is anchored by pharmaceutical and medical device manufacturing (a legacy of Section 936 federal tax incentives that brought Pfizer, Merck, Abbott, Lilly, Johnson & Johnson, and others), finance and professional services, tourism, healthcare, government, and a growing remote-work and Act 60-driven sector. San Juan dominates formal employment, with smaller clusters in Caguas, Ponce, Mayagüez, and the tourism zones of Fajardo and Rincón. Remote work for mainland US employers is common for PR-based professionals, often combined with Act 60 structures.",
    whereToLook: [
      "LinkedIn — the primary platform for professional, pharma, finance, and remote roles",
      "Indeed Puerto Rico and the Departamento del Trabajo (Labor Department) job portal",
      "Bumeran.com — regional job board with significant PR presence",
      "Direct applications to major employers: pharmaceutical companies (Pfizer, Abbott, Amgen, Lilly), banks (Banco Popular, FirstBank, Oriental), professional services firms",
      "Remote work platforms (Upwork, Toptal, Remote.co) for mainland-US-paid roles while PR-resident"
    ],
    realityChecks: [
      "Local Puerto Rico wages are significantly lower than mainland US averages for equivalent roles. Professional salaries of USD 40,000-80,000 are common even in specialized fields, compared to USD 80,000-150,000+ on the mainland.",
      "Remote work for mainland US employers dramatically changes the math. Mainland salaries paid to a PR bona fide resident combined with Act 60 structures can produce substantial net-income advantages.",
      "Spanish is the working language for most on-the-island roles. Pharma, finance, and professional services in San Juan operate in a mix of English and Spanish; tourism and hospitality are more bilingual.",
      "Puerto Rico has a higher cost of living than many newcomers expect for a Caribbean destination — especially for groceries, imported goods, and electricity — which compresses the real wage advantage of local employment."
    ]
  },
  salaryReality: {
    overview:
      "PR taxation is unusually structured. Bona fide residents do not pay US federal income tax on Puerto Rico-source income but do pay PR income tax, progressive with a 33% top rate (above USD 61,500). Act 60 decrees modify this substantially: 0% PR tax on qualifying capital gains and dividends for Individual Investor Decree holders, 4% corporate tax for Export Services Decree holders. Federal Social Security and Medicare still apply to earned income regardless of Act 60 status.",
    realityChecks: [
      "Act 60 benefits are real and can be substantial for high-earners with significant capital gains or service-export business income, but they require genuine residency: at least 183 days in PR, tax home in PR, and closer connection to PR than anywhere else. Casual or part-time PR residence does not qualify.",
      "Puerto Rico sales-and-use tax (IVU) is 11.5% (10.5% state plus 1% municipal), higher than most US state sales taxes, and applies broadly to goods and many services.",
      "Federal Social Security and Medicare still apply. W-2 employees of PR-based employers and self-employed individuals on PR source income pay FICA or SECA at standard federal rates.",
      "Residents of PR are generally not eligible to vote in US presidential elections and do not have voting representation in Congress. This is a citizenship-level quirk worth understanding for anyone moving from a mainland US state."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Electricity costs: LUMA Energy rates and unreliability mean electricity bills of USD 200-500/month for typical air-conditioned homes, higher for larger homes with pools",
      "Backup power costs: whole-house generators cost USD 10,000-20,000 installed; solar-plus-battery systems range from USD 20,000-60,000+. These are near-essentials for higher-end housing",
      "Grocery costs: imported food and goods cost 15-35% more than mainland US for equivalent items. Local markets and agricultural products are more affordable",
      "Hurricane insurance: property insurance (especially wind and flood) is expensive and has tightened since Maria. Budget thousands of USD per year for adequate coverage"
    ]
  },
  housingSystem: {
    overview:
      "San Juan metro housing ranges from the colonial apartments of Viejo San Juan (limited, tourism-adjacent), the beachfront condos of Condado, family-oriented Miramar, the gated suburbs of Guaynabo, the towers of Hato Rey, the beachfront developments of Isla Verde, and the equestrian and golf communities of Dorado. The east coast (Carolina, Fajardo, Palmas del Mar in Humacao) offers resort-style living. The west coast centers on Rincón (a surf and expat hub) and Aguadilla. The central cordillera (Utuado, Adjuntas, Jayuya) offers a cooler, rural lifestyle. Vieques and Culebra have strong expat and retiree communities but limited services.",
    expectations:
      "Expect one to two months' rent as deposit, with rent quoted in USD. Two-bedroom in Condado or Miramar: USD 1,500-3,500/month; beachfront condos in Isla Verde or Dorado USD 2,000-5,000+; gated homes in Guaynabo or Dorado USD 2,500-6,000+. Rincón, Vieques, and Culebra vary widely — basic apartments from USD 800 to beachfront in the thousands. Furnished and Airbnb inventory is substantial given tourism. Always inspect in person, verify AC and generator/backup power, check water pressure and tank capacity, confirm hurricane preparedness, and test internet speed. Gated 'urbanizaciones' are standard at the higher end."
  },
  healthcareReality:
    "Puerto Rico's healthcare system combines private networks, public hospitals, and Medicare/Medicaid coverage modified for the territory. The Puerto Rico Medical Center (Centro Medico) in Rio Piedras is the largest public facility. Major private networks include HIMA-San Pablo, Metropolitano, Menonita, and Ashford Presbyterian in Condado. Quality at major private hospitals in the San Juan metro is comparable to mainland US, and many specialists trained at top US schools. Private-care costs are typically lower than mainland US, but coverage structures differ — Medicare Advantage plans in Puerto Rico historically received lower federal reimbursement than mainland plans, affecting provider networks and benefits. Since Hurricane Maria, the island has seen a significant outflow of physicians to the mainland, creating specialty-care shortages in some regions. Pharmacies (Walgreens, CVS, and local chains) are widely available and operate as on the mainland. For residents of outer municipalities and the smaller islands (Vieques, Culebra), serious conditions often require transport to San Juan.",
  digitalLife: {
    overview:
      "Puerto Rico has largely US-standard digital infrastructure. Claro, Liberty Puerto Rico (formerly AT&T), and T-Mobile offer mobile service, and fiber broadband is widely available in metro San Juan and increasingly in secondary cities. Post-Maria infrastructure resilience has been a major investment theme. The island uses North American voltage (120V/60Hz), standard US plugs, US zip codes, and USPS delivery — a meaningful practical continuity for mainland-origin residents.",
    essentials: [
      "US mobile phone plan works seamlessly — Verizon, T-Mobile, AT&T all have native coverage. No roaming charges apply from mainland US plans.",
      "Uber operates in San Juan, Bayamon, Caguas, and most of the metro area. Outside metro San Juan, taxis and private drivers are more common.",
      "WhatsApp is heavily used for informal communication alongside SMS and US-standard apps.",
      "USPS delivery uses US zip codes (009xx range). Amazon, FedEx, UPS, and DHL all operate, with shipping times from mainland US typically 3-7 days."
    ],
    whatSurprisesNewcomers: [
      "Power outages are a recurring feature of daily life, not occasional exceptions. Brief outages of minutes or hours occur regularly; extended outages during storms can last days. Generators, UPS units, and solar-plus-battery setups are standard for most serious home offices.",
      "Shipping from mainland US Amazon and retailers is generally straightforward but can take 3-7 days (sometimes longer for large items). Same-day/next-day mainland options are not always available.",
      "Banking has a unique structure. Mainland US banks (Chase, Wells Fargo, Bank of America) do not have full retail operations in Puerto Rico. Local banks (Banco Popular, FirstBank, Oriental) are the primary providers. Many PR residents maintain both a mainland and a PR bank account.",
      "Internet reliability is generally good where fiber is available, but can drop sharply in older copper areas or during storms. Test connection speeds at any prospective rental before committing."
    ]
  },
  culture: {
    text: "Puerto Rican culture is a rich blend of Taino, Spanish colonial, African, and US mainland influences, anchored by a strong boricua identity that predates and persists alongside US political status. Spanish dominates daily life; English is co-official and widely understood in San Juan and professional settings. Puerto Ricans are generally warm, expressive, and family-oriented. Music is central: salsa (developed largely in Puerto Rico and the NY diaspora), bomba and plena (Afro-Puerto Rican traditions), the cuatro in jíbaro music from the mountains, and reggaeton (which emerged from PR and went global through Bad Bunny, Daddy Yankee, and Ozuna). Food revolves around mofongo, arroz con gandules, lechón asado, alcapurrias, and tostones. Parrandas and the extended Christmas season (late November through Three Kings Day on January 6 and beyond) are cultural high points. Identity debates — statehood, commonwealth, or independence — are active and passionate. For newcomers, respecting that complexity, learning Spanish, and engaging authentically rather than treating the island as 'cheap US' is essential.",
    highlights: [
      "Greetings are warm. A kiss on one cheek between women and mixed company, handshake with a follow-up second greeting ('y tu familia?' - and your family?) is typical.",
      "Spanish matters. Even in San Juan's bilingual environments, speaking Spanish opens doors and signals respect. Trying to operate entirely in English signals a lack of investment in the culture.",
      "Christmas is a major, extended cultural season. Parrandas (trullas), Three Kings Day (January 6), and the Octavitas (the eight days after Three Kings Day) all have distinct traditions.",
      "Puerto Rican identity debates are real and passionate. Tread carefully on questions of statehood, independence, and commonwealth status in early conversations; listen much more than you argue.",
      "The island is small enough that relationships propagate quickly. Be polite, professional, and consistent — reputations spread fast."
    ]
  },
  transportationMobility:
    "Puerto Rico is car-dominant, especially outside the San Juan metro core. The Tren Urbano, a light metro line operating in the San Juan metropolitan area since 2004, connects Bayamon to Santurce and is useful for limited corridors but has not replaced car culture. The AMA (Autoridad Metropolitana de Autobuses) runs bus routes in the San Juan metro area. Highways (including the Luis A. Ferre Expressway, PR-22, PR-52) are extensive and generally good quality, connecting San Juan to Ponce, Mayaguez, and Fajardo within 1-2 hours. Driving in San Juan involves aggressive lane-changing, frequent congestion on PR-22 and PR-18, and creative use of shoulders during peak hours. Uber is available throughout the metro area. To reach Vieques and Culebra, you take either a short flight (Vieques Air Link, Cape Air, from Ceiba airport or Isla Grande) or the government ferry from Ceiba (cheap but less reliable — schedules have historically been disrupted). Road conditions deteriorate in the central mountains and after major storms, requiring 4WD in some areas. Fuel is a US-standard commodity at US prices, though a bit higher than mainland averages due to shipping.",
  internationalConnectivity:
    "Luis Munoz Marin International Airport (SJU) in Carolina is Puerto Rico's main gateway and one of the busiest in the Caribbean. JetBlue, American, Delta, United, Southwest, and Frontier connect direct to dozens of US mainland cities. Flight times: Miami and Orlando 2.5 hours, Atlanta 3 hours, New York (JFK/Newark) 4 hours. International routes include Madrid (Iberia), Panama City (Copa), Toronto (Air Canada), seasonal Amsterdam (KLM), and regional Caribbean. Puerto Rico is a domestic US destination for TSA — US citizens need no passport between PR and the mainland, only Real ID-compliant government ID. Rafael Hernandez Airport (BQN) in Aguadilla adds mainland US routes from the west, and Isla Grande (SIG) in San Juan handles inter-island flights.",
  travelExploration:
    "Puerto Rico offers extraordinary variety for a compact island (about 180 km by 60 km). Viejo San Juan is a UNESCO colonial city with forts (El Morro, Castillo San Cristobal), cobblestone streets, and colorful Spanish architecture. El Yunque National Forest is the only tropical rainforest in the US National Forest System, with waterfalls and dramatic hiking. The bioluminescent bays — Mosquito Bay on Vieques (one of the brightest in the world) and Laguna Grande in Fajardo — are unforgettable. Rincón on the west coast is a global surf destination, and Ponce, the 'Pearl of the South,' offers colonial architecture and strong cultural institutions. The central cordillera (Jayuya, Utuado, Adjuntas) has coffee plantations, Taino heritage sites, and hiking. Vieques and Culebra have pristine beaches — Flamenco on Culebra is regularly ranked among the world's best. The northern karst (Rio Camuy Cave Park, Cueva Ventana) makes easy day trips from San Juan. Weekend flights to the US Virgin Islands, Dominican Republic, and other Caribbean destinations are straightforward.",
  considerations: [
    "Grid Reliability: Puerto Rico's electrical grid was catastrophically damaged by Hurricane Maria (2017) and has been rebuilt slowly. LUMA Energy has faced significant public criticism. Outages of varying duration are a recurring feature of daily life — generators, UPS units, and solar-plus-battery are standard at the higher end. Factor this into budget and housing decisions.",
    "Hurricane Season: The Atlantic season (June 1 - November 30) is structural to PR life. Maria was the worst natural disaster in the island's modern history; Fiona (September 2022) caused additional damage. Property purchases, insurance, and preparedness plans must take hurricane risk seriously.",
    "Act 60 Requirements: Benefits are real and valuable for qualifying individuals but the requirements are substantive and actively monitored. The 183-day presence, tax home, and closer connection tests must all be met. Beneficiaries also owe an annual charitable contribution to qualifying PR charities. Work with specialist PR-and-US tax counsel before moving.",
    "Cost of Living Reality: PR has a US-influenced cost structure with Caribbean logistics. Groceries run 15-35% above mainland averages, electricity is expensive and unreliable, and housing in desirable areas rivals mid-tier mainland US cities. Act 60's fiscal advantage matters most for high-earners and those with significant capital gains — not for generic 'lower cost of living' moves.",
    "Language and Integration: Despite US territorial status and English being co-official, Spanish dominates daily life. Moving without intending to learn Spanish limits integration and isolates you into English-speaking expat bubbles. Commit to Spanish as part of the move."
  ],
  mistakes: [
    "Underestimating the 183-day presence requirement. Beneficiaries must actually be on the island at least 183 days per year. The IRS and Hacienda document presence via flight records, credit card transactions, and other data — retroactive disqualification can produce significant federal tax liability.",
    "Skipping generator and backup power planning. Outages are structural. A home without generator or solar-plus-battery is one where refrigeration, AC, and work-from-home will intermittently fail. Budget USD 10,000-60,000 for adequate backup depending on home size.",
    "Treating PR as 'just a tax move.' Act 60 benefits are real, but the 183-day, tax home, and closer connection tests require actual commitment to PR. Those who treat the move as an accounting exercise often struggle with island life, grid issues, and cultural disconnection.",
    "Assuming Spanish is optional. San Juan's professional and tourist districts run largely bilingual, but daily life, government interactions, and most of the island run in Spanish. Without it, practical life is harder and cultural integration nearly impossible.",
    "Relying on mainland US banks. Chase, Wells Fargo, and Bank of America do not operate retail branches on the island. Most residents work with Banco Popular, FirstBank, or Oriental Bank for local banking while keeping a mainland account. Plan the transition before arrival."
  ],
  emergency: [
    {
      number: '911',
      service: 'General Emergency (Police, Fire, Ambulance)',
      description: 'Unified US emergency number operating in Puerto Rico identically to the mainland US. Dispatches Policia de Puerto Rico, Bomberos (fire service), and ambulance services. Operators speak Spanish and English.'
    },
    {
      number: '787-343-2020',
      service: 'Police (Non-Emergency)',
      description: 'Non-emergency line for Policia de Puerto Rico headquarters. For non-urgent crime reporting, general inquiries, and administrative matters.'
    },
    {
      number: '787-343-2330',
      service: 'Puerto Rico Emergency Management Bureau (NMEAD)',
      description: 'The Negociado para el Manejo de Emergencias y Administracion de Desastres coordinates hurricane, earthquake, and other disaster response. Critical reference during hurricane season and for emergency preparedness information.'
    }
  ],
  sources: [
    {
      name: 'Department of Economic Development and Commerce (DDEC)',
      category: 'Act 60 & Business Incentives',
      description: 'Administers Act 60 decrees (Individual Investor and Export Services), other incentive programs, and business development support.',
      link: 'https://www.ddec.pr.gov/'
    },
    {
      name: 'Departamento de Hacienda',
      category: 'Tax & Finance',
      description: 'Puerto Rico\'s Treasury Department, administering local income tax, sales-and-use tax (IVU), and other Puerto Rico tax obligations for residents and businesses.',
      link: 'https://hacienda.pr.gov/'
    },
    {
      name: 'Departamento de Transportacion y Obras Publicas (DTOP)',
      category: 'Driving & ID',
      description: 'Administers driver\'s licenses, vehicle registration, and transportation infrastructure. Handles license conversions from US states and other jurisdictions.',
      link: 'https://www.dtop.gov.pr/'
    },
    {
      name: 'Discover Puerto Rico',
      category: 'Tourism & Travel',
      description: 'Official tourism organization providing destination guides, events, and practical information for visitors and new residents.',
      link: 'https://www.discoverpuertorico.com/'
    }
  ],
  embassies: {
    description: 'Puerto Rico is a US territory and does not maintain its own diplomatic missions. For consular assistance, non-US citizens should contact their home country\'s embassy or consulate in Washington, DC, or a consulate with jurisdiction over Puerto Rico (many maintain honorary or full consulates in San Juan). US citizens should contact the US State Department for federal consular matters.',
    directoryLink: 'https://www.embassypages.com/usa',
    mfaLink: 'https://www.state.gov/'
  },
  serviceDirectory: {
    title: "Service Directory - Puerto Rico",
    description: "Examples of commonly used service providers people often interact with when relocating to Puerto Rico.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "US immigration counsel for non-US citizens and Act 60 tax-residency counsel for qualifying individuals.",
        providers: [
          { name: "McConnell Valdes LLC", link: "https://www.mcvpr.com" },
          { name: "Pietrantoni Mendez & Alvarez LLC", link: "https://www.pmalaw.com" },
          { name: "Reichard & Escalera", link: "https://www.reichardescalera.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies handling residential rentals and property purchases across San Juan metro, Dorado, Rincon, Vieques, and Culebra.",
        providers: [
          { name: "Christie's International Real Estate PR", link: "https://www.christiesrealestatepr.com" },
          { name: "Puerto Rico Sotheby's International Realty", link: "https://www.puertoricosothebysrealty.com" },
          { name: "Home Run Real Estate", link: "https://www.homerunpr.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax and accounting professionals familiar with Act 60, PR-US tax interaction, and bona fide residency compliance.",
        providers: [
          { name: "PwC Puerto Rico", link: "https://www.pwc.com/pr" },
          { name: "Deloitte Puerto Rico", link: "https://www2.deloitte.com/pr" },
          { name: "KPMG Puerto Rico", link: "https://kpmg.com/pr" }
        ]
      },
      {
        name: "Moving Companies",
        description: "US-domestic moving services (since Puerto Rico is a US territory, moves from mainland US are domestic relocations).",
        providers: [
          { name: "Crowley Logistics", link: "https://www.crowley.com" },
          { name: "United Van Lines", link: "https://www.unitedvanlines.com" },
          { name: "Suddath Relocation Systems", link: "https://www.suddath.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Spanish language schools and cultural orientation programs for English-speaking newcomers.",
        providers: [
          { name: "Instituto de Cultura Puertorriquena Spanish Programs", link: "https://icp.pr.gov/" },
          { name: "Berlitz Puerto Rico", link: "https://www.berlitz.com" },
          { name: "Universidad del Sagrado Corazon - Spanish Institute", link: "https://www.sagrado.edu" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major hospitals and healthcare networks commonly used by residents and newcomers.",
        providers: [
          { name: "Ashford Presbyterian Community Hospital", link: "https://www.ashfordpresbyterian.com" },
          { name: "HIMA-San Pablo", link: "https://www.himasanpablo.com" },
          { name: "Hospital Auxilio Mutuo", link: "https://www.auxiliomutuo.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Employment platforms and recruitment firms connecting talent with Puerto Rico employers.",
        providers: [
          { name: "Kelly Services Puerto Rico", link: "https://www.kellyservices.com" },
          { name: "Manpower Puerto Rico", link: "https://www.manpower.com.pr" },
          { name: "LinkedIn (Puerto Rico)", link: "https://www.linkedin.com" }
        ]
      }
    ]
  }
};
