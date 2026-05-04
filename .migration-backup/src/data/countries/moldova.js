export const moldova = {
  id: 'moldova',
  slug: 'moldova',
  name: 'Moldova',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Romanian', 'Russian'],
  shortDescription: 'An underrated, wine-rich Eastern European republic on a fast EU accession track, with one of the continent\'s most favorable IT tax regimes.',
  heroImage: 'https://images.unsplash.com/photo-1629045951387-6d86eb2aad3d',
  flagAlt: 'Flag of Moldova',
  atAGlance: "Moldova is a small, landlocked country of about 2.4 million people wedged between Romania and Ukraine, long a quiet backwater of Europe known for wine, emigration, and the unresolved separatist enclave of Transnistria along the Dniester. Since February 2022, when the full-scale invasion of Ukraine transformed regional security, Moldova has moved to the centre of European policy: EU candidate status in June 2022, accession negotiations opened in June 2024, and major EU and IMF support. The capital, Chișinău, is a mid-sized city of about 700,000 with Soviet-era boulevards, green parks, a rapidly improving restaurant scene, and a modest but friendly expat community. Two strategic advantages most outsiders miss. First, a large share of Moldovan citizens (commonly estimated at roughly one-third and rising) also hold Romanian citizenship, giving them EU free movement; many commute to work in the EU or study at European universities while keeping their Moldovan lives active. Second, the Moldova IT Park — a virtual free zone established in 2018 — offers IT companies and their employees a single tax of 7% of revenue covering all corporate, personal income, and social contributions. Combined with visa-free entry for most Western nationals, fast cheap internet, and very low living costs, this has made Chișinău a quietly attractive base for IT freelancers and small software companies. Romanian is the official language (the same as in Romania, though sometimes called 'Moldovan' for political reasons); Russian remains widely spoken. Wine culture is globally underrated — the Cricova and Mileștii Mici underground cellars are among the world's largest.",
  overview: {
    euStatus: 'EU Candidate',
    stayLength: 'Up to 90 days within 180-day period (visa-free for most Western countries)',
    costOfLiving: 'Low',
    primaryLanguages: 'Romanian (Latin script, official), Russian (widely spoken)',
  },
  visas: [
    {
      name: 'Moldova IT Park Residency',
      targetAudience: 'IT professionals, founders, and engineers',
      useCase: 'The Moldova IT Park, established in 2018 under Law No. 77/2016, is a virtual free zone offering resident companies a single tax of 7% of revenue in lieu of corporate income tax, personal income tax for employees, and employer social contributions. Companies must meet eligibility criteria (primarily IT-related activities) and apply for residency. Foreign employees of IT Park resident companies benefit from streamlined work and residence procedures, making Moldova one of the most fiscally attractive bases in Europe for tech work.',
      duration: 'Tied to company residency and employee contract; renewable',
      link: 'https://moldovaitpark.md/en'
    },
    {
      name: 'Temporary Residence Permit',
      targetAudience: 'Employed foreigners, family members, students, investors, property owners',
      useCase: "Issued by the Bureau for Migration and Asylum (Biroul Migrație și Azil - BMA) on grounds including employment, family reunification, study, scientific activity, investment, or property ownership. Applications are filed at the BMA central office in Chișinău or regional subdivisions. Biometric residence cards are issued on approval.",
      duration: '1 year (5 years in some investor and family cases), renewable; path to permanent residence after continuous legal residence',
      link: 'https://bma.gov.md/en'
    },
    {
      name: 'Residence by Investment or Property',
      targetAudience: 'Investors and property owners',
      useCase: 'Significant investment in the Moldovan economy or ownership of registered real estate can support a temporary residence application. Investment thresholds are defined by regulation and have been progressively liberalized as part of EU accession reforms. Property ownership routes require a notarized purchase registered with the Land Registry.',
      duration: '1-5 years depending on investment category, renewable',
      link: 'https://bma.gov.md/en'
    },
    {
      name: 'Romanian Citizenship Pathway (for ethnic Moldovans / heritage applicants)',
      targetAudience: 'Moldovans and descendants of pre-1940 Romanian citizens',
      useCase: 'Separate from Moldovan residency: Romania offers a restoration-of-citizenship pathway (redobândirea cetățeniei) to descendants of citizens of interwar Greater Romania and, in practice, a large share of Moldovans have become dual Moldovan-Romanian citizens — unlocking full EU free movement. While not a Moldovan-issued status, it is an enormously common parallel track that shapes mobility in and out of Moldova.',
      duration: 'Permanent once granted; processing typically 1-3 years via ANC (Autoritatea Națională pentru Cetățenie) in Romania',
      link: 'https://cetatenie.just.ro'
    }
  ],
  requirements: [
    {
      title: 'IDNP (Identification Number of the Natural Person)',
      explanation: 'A 13-digit personal identification number assigned to every Moldovan citizen at birth and to every foreigner upon receipt of a residence permit. Issued through the Public Services Agency (Agenția Servicii Publice - ASP) in coordination with the BMA, it is the primary identifier across government systems.',
      importance: 'Required for opening a bank account, signing an employment contract, registering a business, health insurance, property purchase, and almost every substantive interaction with Moldovan institutions. Foreigners receive the IDNP with their residence card.',
      link: 'https://asp.gov.md/en'
    },
    {
      title: 'Residence Registration (Înregistrarea Reședinței)',
      explanation: "Every resident must register their address with ASP within days of establishing it. Registration requires a notarized lease or proof of property ownership plus the landlord's consent. It can increasingly be completed through the mgov.md e-government portal with electronic signature.",
      importance: 'A prerequisite for the residence card, banking, school enrollment, and vehicle registration. Some landlords resist formal registration for tax reasons; clarify willingness before signing and insist on a notarized written contract.',
      link: 'https://asp.gov.md/en'
    },
    {
      title: 'Tax Identification (State Tax Service - SFS)',
      explanation: 'The State Tax Service (Serviciul Fiscal de Stat - SFS) administers personal and corporate taxation. For most residents, the IDNP doubles as the tax ID. Self-employed individuals and businesses register separately with SFS; Moldova IT Park residents register through the IT Park administration.',
      importance: 'Required for formal income-earning, invoicing, and filings. Standard personal income tax is 12% flat, with alternative regimes for independent activity, farming, and IT Park residents (7% single tax). Choose your regime carefully based on income type and level.',
      link: 'https://sfs.md/en/'
    },
    {
      title: 'Health Insurance (CNAM)',
      explanation: 'The National Health Insurance Company (CNAM) administers mandatory health insurance. Residents enroll through employment, self-employment, or voluntary contributions. Foreigners typically enroll through employment or via an annual CNAM policy (a few hundred EUR/year).',
      importance: 'Proof of coverage is mandatory for residence permit applications and most substantive use of public healthcare beyond emergencies. Many expats supplement with private insurance (Donaris VIG, Moldasig, Grawe) for access to private clinics with shorter wait times.',
      link: 'https://cnam.md/en'
    }
  ],
  jobsAndIncome: {
    overview:
      "Moldova's economy is driven by agriculture (wine, fruits, dairy), light manufacturing (textiles, automotive components), IT and business services, and significant diaspora remittances. The IT sector has grown rapidly under the Moldova IT Park framework, with over 1,800 resident companies and 20,000+ employees. English is standard in IT and international organizations; domestic roles expect Romanian and often Russian.",
    whereToLook: [
      "Rabota.md and 999.md/munca — the largest general job portals in Moldova",
      "Moldova IT Park career page and member companies' direct hiring portals",
      "LinkedIn — strong for IT, international organizations (UNDP, EU Delegation, World Bank, USAID), and donor projects",
      "StarNet, Moldcell, Orange Moldova — major private employers with open recruitment portals",
      "EastAgri and Rural Investment Agency portals for agribusiness roles in rural Moldova"
    ],
    realityChecks: [
      "Average net monthly salary is approximately MDL 12,000-14,000 (EUR 630-735). IT Park salaries are significantly higher, with experienced developers earning MDL 40,000-100,000+ net (EUR 2,100-5,250+).",
      "The IT Park single tax (7% of revenue, covering corporate tax, employee income tax, and employer social contributions) makes Moldova unusually attractive for employers and employees alike. Confirm your prospective employer is an IT Park resident.",
      "Work permits for non-EU workers require employer sponsorship, with streamlined procedures for IT Park companies and donor-project roles. Processing typically takes 15-30 days.",
      "A substantial share of the Moldovan workforce works abroad (Romania, Italy, Russia, Israel, Germany) and sends remittances home. This labor dynamic affects domestic wage levels and hiring for skilled roles."
    ]
  },
  salaryReality: {
    overview:
      "Moldova offers strong purchasing power for foreign-currency earners. A comfortable single lifestyle in Chișinău costs EUR 700-1,100/month including rent; outside the capital EUR 500-800. Standard personal income tax is a flat 12%; the IT Park single tax is 7% of revenue (covering essentially all personal and employer obligations). The Moldovan leu (MDL) floats but has been relatively stable against the EUR (around 19-20 MDL = 1 EUR).",
    realityChecks: [
      "The IT Park 7% single tax replaces corporate income tax, personal income tax on employees, and employer social contributions. For an eligible company, the effective tax burden is dramatically lower than in any other European country.",
      "Outside the IT Park, standard personal income tax is 12% flat, plus social security (9% on employee and employer sides in 2024) and a health contribution (9% on employee side). Total employee-side deductions sit around 30% of gross.",
      "Self-employed and independent activity regimes offer simplified taxation at reduced rates (7% of revenue in some cases), but eligibility and caps apply. Consult a local accountant before structuring.",
      "Moldova is not in the EU or Eurozone. Cross-border transfers work through SEPA-adjacent channels, Wise, and local banks. Card acceptance in Chișinău is good; cash remains important in rural areas."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Winter heating: district heating (Termoelectrica) is reliable in Chișinău but tariffs have risen significantly since 2022 due to energy costs. Monthly winter bills of EUR 100-250 are common",
      "Utility volatility: electricity and gas tariffs have been adjusted multiple times since 2022 as Moldova shifted away from Russian gas dependency and invested in EU grid connections",
      "Car costs: fuel prices track EU levels closely, and vehicle insurance is required. The annual technical inspection (revizia tehnică) is mandatory",
      "Notary and translation fees: residence applications, property purchases, and business setup require certified Romanian translations of foreign documents — budget EUR 20-80 per document"
    ]
  },
  housingSystem: {
    overview:
      "Chișinău's rental market is small but active. Popular areas include Centru (central, walkable), Buiucani (residential, leafy, mid-range), Telecentru (hills above the center, quiet), Rîșcani (modern apartments and shopping), and Botanica (green, family-oriented). Outside Chișinău, Bălți and Orhei offer significantly lower prices for small-town or rural life.",
    expectations:
      "A modern one-bedroom in central Chișinău costs EUR 350-600/month; outside the capital EUR 200-400. Deposits are typically one month's rent; leases commonly 6-12 months. Key checks: heating type (district vs. autonomous), insulation (Soviet-era panel buildings can be cold), elevator reliability, and internet (StarNet, Orange Fiber, Moldtelecom offer 100-500 Mbps fiber for EUR 8-20/month). Listings are on 999.md, Lara.md, and via local agents. Notarized leases are required for residence registration with ASP."
  },
  healthcareReality:
    "Moldova operates a mandatory health insurance system through CNAM, funded by payroll contributions and government subsidies. Residents register with a family doctor as gatekeeper to specialists. Public hospitals in Chișinău (Republican Clinical Hospital, Mother and Child Institute, Emergency Medicine Institute) provide acute and specialist care. Quality at leading public facilities is competent but uneven, equipment is often dated, and wait times for elective procedures can be long. Most expats and middle-class Moldovans use a combination of public primary care and private specialist clinics: MedPark (the largest private hospital, comparable to European private standards), Terramed, Galaxia, and Excellence Clinic are the leading private providers. A private GP consultation costs EUR 20-45; specialist visits EUR 30-70. Private health insurance from Donaris VIG, Moldasig, Grawe Carat, or international providers costs EUR 30-100/month. Pharmacies (Farmacia Familiei, Farmacia Felicia, Orient) are widespread and well-stocked; most medications are available at prices below Western European levels. Dental care is affordable and of good quality.",
  digitalLife: {
    overview:
      "Digital infrastructure is surprisingly strong. Orange Moldova, Moldcell, and StarNet offer fiber at 100-1000 Mbps for EUR 8-20/month — some of the fastest-for-price in Europe. 4G coverage is nationwide; 5G has launched in Chișinău and major cities. E-government is well-developed under the mgov.md portal, with mobile electronic signature (semnătură mobilă) enabling remote filings for tax, business registration, and civil services.",
    essentials: [
      "999.md — the dominant classifieds platform for apartments, cars, furniture, and services",
      "Yandex Go and iTaxi — ride-hailing apps widely used in Chișinău; Bolt is also active",
      "Wolt and Glovo — food delivery apps covering Chișinău and some regional cities",
      "MAIB mobile banking app and paynet.md — leading digital banking and e-wallet platforms"
    ],
    whatSurprisesNewcomers: [
      "Cyrillic-Latin duality: Moldova uses the Latin script for Romanian (the official language), but older residents and ethnic minorities often write Russian in Cyrillic. Menus and signs are predominantly Latin; expect both in older contexts.",
      "Mobile electronic signature (semnătură mobilă) is remarkably well-developed. You can sign contracts, file taxes, and authenticate with government services from your phone — often more seamlessly than in many EU states.",
      "Ride-hailing is dominated by Yandex Go (a Russian app) and iTaxi; Uber does not operate. Yandex remains widely used and reliable despite geopolitics, though some users prefer local alternatives.",
      "The Transnistria region operates outside Moldovan mobile and banking networks in practice. If you travel to Tiraspol or Bender, your Moldovan SIM may have degraded service, and ATMs there are separate systems."
    ]
  },
  culture: {
    text: "Moldovan culture is warm, hospitable, and shaped by a layered history at the crossroads of Romanian, Slavic, Turkic, and Soviet influences. Romanian language and identity are dominant but coexist with significant Russian-speaking and ethnic minority populations (Gagauz, Bulgarians, Ukrainians). Moldovans are proud of their wine — the country has one of the highest per-capita vineyard areas in the world, and family wine production is common in villages. Food centers on mamaliga (polenta), sarmale (cabbage rolls), placinte (stuffed pastries), and abundant dairy, fruit, and grilled meats. Orthodox Christianity is dominant, with Easter and Christmas (both January 7 and December 25 observed) the most important holidays. Hospitality is central — guests are fed abundantly and pressed to try house wine. Family ties are strong and weekend trips to rural parents and grandparents are a social constant. Political sensitivities around the war in Ukraine, Transnistria, and Russia-vs-Romania ties run deep; listen rather than opine.",
    highlights: [
      "Wine is serious. Refusing a glass of house wine when offered by a host is understood but noted; try at least a sip. Asking about the producer or region usually opens a long, enthusiastic conversation.",
      "Dual Romanian citizenship: many Moldovans you meet will hold both passports and split their lives between Moldova and the EU. This is normal and an underrated feature of the country.",
      "Russian language use is common in casual urban contexts but politically sensitive given the war in Ukraine. Romanian and English are the safest defaults for newcomers. Avoid assumptions about language preference.",
      "Transnistria is a de facto separate entity — a Russian-aligned breakaway region with its own currency, flag, and border controls. Moldovan authorities consider it part of Moldova, but in practice it operates autonomously. Travel there is possible but requires extra documentation and care.",
      "Bring flowers in odd numbers (even numbers are for funerals) and remove shoes when entering a home. Both conventions are strictly observed."
    ]
  },
  transportationMobility:
    "Chișinău is walkable in the central districts and served by trolleybuses (long-running, cheap at MDL 6, around EUR 0.30) and minibuses (marshrutkas, MDL 6-8). Full modernization of the bus fleet has progressed in recent years. Taxis are affordable — most Chișinău rides cost EUR 3-6; use Yandex Go, iTaxi, or Bolt rather than street hails. For intercity travel, minibuses connect Chișinău to Bălți, Cahul, Orhei, and most regional centers; long-distance buses serve Bucharest (7 hours), Iași (3.5 hours), Odesa (4-5 hours depending on border), Kyiv (12-14 hours with Russia-route-avoidance), and major Western European capitals via weekly or biweekly services. Rail is limited and slow. Driving is common for rural exploration; roads between major cities are improving with EU funding, but secondary roads vary widely. An EU or international driving license is accepted for tourists; residents convert to a Moldovan license within one year.",
  internationalConnectivity:
    "Chișinău International Airport (KIV) is the primary hub, with direct flights on Wizz Air, FlyOne (the main low-cost carrier, based in Chișinău), Turkish Airlines, LOT, Ryanair, and seasonal operators. Direct connections reach Istanbul, Bucharest, Vienna, Frankfurt, Rome, Milan, Paris, London, Dublin, and Warsaw. Since 2022 and the closure of Ukrainian airspace, Chișinău has become a more significant node for Eastern European traffic. Iași Airport in Romania, roughly 2.5 hours by car, serves as an alternative for some routes. Cross-border trips to Iași (2.5 hours), Bucharest (7-8 hours), Odesa (4-5 hours with border), and Kyiv are feasible but border waits vary. Direct flight times: Istanbul 1.5 hours, Frankfurt 3 hours, London 3.5 hours.",
  travelExploration:
    "Despite its small size, Moldova offers rewarding exploration. Orheiul Vechi — an open-air monastery complex carved into limestone cliffs above the Răut River — is the country's signature heritage site and an easy day trip from Chișinău. The Cricova and Mileștii Mici wineries host cellar tours through kilometers of tunnels; Purcari and Chateau Vartely near Orhei are other standout producers. Soroca, on the Dniester, features a well-preserved 15th-century fortress and the famous 'Gypsy Hill' of extravagant Roma architecture. Tipova Monastery, partially cave-hewn, is dramatically situated on the Dniester cliffs. Gagauzia, an autonomous Turkic-speaking region in the south, offers a distinct cultural experience around Comrat. Transnistria (Tiraspol, Bender) is an unusual day trip into a Soviet-frozen-in-time environment — enter with all documents in order and modest expectations. Cross-border weekends to Iași, Odesa (security-dependent), and Bucharest are popular.",
  considerations: [
    "Transnistria Border: The region operates outside Moldovan central government control. Entry requires your passport and often a migration card issued at the border; exit can involve additional checks. Standard Moldovan insurance may not cover you inside Transnistria. Check current security advisories before travel.",
    "Regional Security Environment: The war in neighboring Ukraine has generated episodic concerns — Russian missile debris has landed in Moldovan territory and airspace closures occur occasionally. Moldova itself remains calm and functioning, but exit via Ukrainian airspace is unavailable. Plan with Romania, Poland, and Turkey as the practical hubs.",
    "Language Sensitivities: Romanian (Latin script) is official. Russian remains widely spoken but has become politically charged since 2022. Be neutral and let locals lead on language choice. Avoid framing Romanian as 'Moldovan' — most Moldovans view the two as the same language.",
    "Winter Energy Costs: Moldova has shifted away from Russian gas since 2022, using EU grid connections and LNG. Energy costs have risen notably. Budget higher winter utilities than in neighboring countries and prioritize apartments with efficient heating and good insulation.",
    "IT Park Eligibility: The 7% single-tax regime is extraordinarily generous but requires specific IT activity criteria and ongoing compliance. Confirm an employer's IT Park residency before relying on the tax benefits, and consult a local accountant if setting up your own entity."
  ],
  mistakes: [
    "Assuming Moldova and Romania have identical rules. Despite the shared language and many Moldovans holding Romanian citizenship, Moldova is a separate state with its own visa, residence, tax, and banking systems. Romanian residence does not carry weight in Moldova.",
    "Traveling to Transnistria unbriefed. The region has its own border controls, currency (Transnistrian ruble), and regulations. Entering without understanding the migration card, or with a mismatched Ukrainian or Russian visa, can create avoidable problems.",
    "Ignoring the IT Park as an employee. If moving for an IT role, confirm whether the employer is an IT Park resident. The gap between IT Park (7% single tax) and standard regime (12% income + ~9% employee social + ~9% health) is enormous over time.",
    "Underestimating winter cost of living. Heating, electricity, and gas in poorly insulated Soviet-era buildings can reach EUR 200-300/month in January-February. Confirm heating efficiency and previous-year bills before signing a lease.",
    "Using Russian assertively in all urban contexts. Russian is widely understood but politically charged since 2022. Default to Romanian or English with strangers and let partners indicate their preference."
  ],
  emergency: [
    {
      number: '112',
      service: 'Unified Emergency Services (Serviciul 112)',
      description: 'Since 2018, 112 has been the single national emergency number, consolidating the previous 901 (fire), 902 (police), and 903 (ambulance) lines into a unified dispatch service. Works from any phone, including SIM-less devices. Operators in Chișinău typically speak Romanian, Russian, and English; availability in smaller cities varies.'
    },
    {
      number: '112',
      service: 'Police (Poliția) - via 112',
      description: 'Police dispatch is reached through 112. The legacy 902 police line still routes to 112 in most networks. Dispatchers speak Romanian and Russian; English assistance less reliable outside Chișinău.'
    },
    {
      number: '112',
      service: 'Ambulance (Serviciul de Asistență Medicală Urgentă) - via 112',
      description: 'Emergency medical services are dispatched through 112 (the legacy 903 line also routes to 112). Response times in Chișinău are typically 10-20 minutes; rural response times are significantly longer. Private medical transport from MedPark or Terramed is an alternative.'
    }
  ],
  sources: [
    {
      name: 'Bureau for Migration and Asylum (BMA)',
      category: 'Immigration & Residency',
      description: 'The Moldovan authority responsible for residence permits, foreigner registration, and migration matters.',
      link: 'https://bma.gov.md/en'
    },
    {
      name: 'Moldova IT Park',
      category: 'IT Tax Regime',
      description: 'Administration of the virtual IT free zone offering a 7% single tax for eligible companies and their employees.',
      link: 'https://moldovaitpark.md/en'
    },
    {
      name: 'Public Services Agency (ASP)',
      category: 'Civil Documents',
      description: 'Handles IDNP issuance, residence registration, civil status documents, vehicle registration, and property titles.',
      link: 'https://asp.gov.md/en'
    },
    {
      name: 'Ministry of Foreign Affairs',
      category: 'Consular & Visas',
      description: 'Official source for visa requirements, consular services, and diplomatic representations abroad.',
      link: 'https://www.mfa.gov.md/en'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Moldova, consult the Moldovan Ministry of Foreign Affairs or a Moldovan embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/moldova',
    mfaLink: 'https://www.mfa.gov.md/en'
  },
  serviceDirectory: {
    title: "Service Directory - Moldova",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Moldova.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for residence permits, work authorization, IT Park registration, and business setup.",
        providers: [
          { name: "Turcan Cazac", link: "https://www.turcanlaw.md" },
          { name: "ACI Partners", link: "https://aci.md" },
          { name: "Vernon David (Moldova)", link: "https://vernondavid.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Platforms and agencies for apartment rentals and property purchases in Chișinău and regional centers.",
        providers: [
          { name: "999.md", link: "https://999.md" },
          { name: "Lara.md", link: "https://lara.md" },
          { name: "Imobil.md", link: "https://imobil.md" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Moldovan tax law, IT Park compliance, payroll, and cross-border planning.",
        providers: [
          { name: "PwC Moldova", link: "https://www.pwc.com/md" },
          { name: "EY Moldova", link: "https://www.ey.com/en_md" },
          { name: "Moore Moldova", link: "https://www.moore-global.com/locations/europe/moldova" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services covering customs clearance for moves to and from Moldova.",
        providers: [
          { name: "AGS Movers Chisinau", link: "https://www.agsmovers.com" },
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "International Moving Group", link: "https://www.imgworld.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Schools and platforms offering Romanian and Russian language instruction for foreigners.",
        providers: [
          { name: "Moldova State University Language Center", link: "https://usm.md" },
          { name: "Limba Noastra School", link: "https://limba.md" },
          { name: "iTalki Romanian Tutors", link: "https://www.italki.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major private healthcare networks and hospitals commonly used by expats and international staff.",
        providers: [
          { name: "MedPark International Hospital", link: "https://medpark.md" },
          { name: "Terramed Clinic", link: "https://www.terramed.md" },
          { name: "Excellence Clinic", link: "https://excellenceclinic.md" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and agencies connecting professionals with Moldovan employers, especially in IT.",
        providers: [
          { name: "Rabota.md", link: "https://www.rabota.md" },
          { name: "Moldova IT Park Careers", link: "https://moldovaitpark.md/en" },
          { name: "Talent Hub Moldova", link: "https://talenthub.md" }
        ]
      }
    ]
  }
};
