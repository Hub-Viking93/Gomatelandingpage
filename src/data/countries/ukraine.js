export const ukraine = {
  id: 'ukraine',
  slug: 'ukraine',
  name: 'Ukraine',
  region: 'Europe',
  complexity: 'High',
  languages: ['Ukrainian', 'English'],
  shortDescription: 'Resilient Eastern European nation balancing wartime reality with ambitious digital transformation and EU integration.',
  heroImage: 'https://images.unsplash.com/photo-1561542320-9a18cd340469',
  flagAlt: 'Flag of Ukraine',
  atAGlance: "Ukraine is defined today by two parallel realities: the ongoing full-scale war with Russia that began on 24 February 2022, and a wartime acceleration of digital government, EU integration, and civic resilience. Martial law, renewed in rolling 90-day extensions, structures daily life — a nationwide curfew (typically 00:00-05:00, stricter in frontline regions), male citizens aged 18-60 restricted from leaving the country, daily air raid alerts on the Povitryana Tryvoha app, and mandatory shelter protocols every resident learns within days of arriving. Yet the country continues to function with astonishing normalcy in its western cities: cafes are open, the Kyiv Metro runs (doubling as a shelter during alerts), Ukrainian Railways (Ukrzaliznytsia) operates reliable overnight trains, and the Diia app lets residents file taxes, register businesses, and access documents entirely from their phone. Lviv has become the primary hub for internally displaced Ukrainians and for most foreign NGO, media, and humanitarian staff who relocated from Kyiv during the invasion's early months. Kyiv itself has largely recovered its rhythm, though residents live with regular drone and missile attacks. The IT sector — Ukraine's economic crown jewel — continues through distributed teams, with companies like GitLab, Grammarly, and Reface employing over 300,000 developers. Ukraine achieved EU candidate status in June 2022 and opened accession negotiations in June 2024. For foreigners, entering during wartime requires genuine purpose, realistic risk tolerance, appropriate insurance, and clear understanding of which regions are safe (western oblasts), cautious (Kyiv, central Ukraine), or off-limits (frontline and occupied territories).",
  overview: {
    euStatus: 'EU Candidate',
    stayLength: 'Up to 90 days within 180-day period (visa-free for most Western countries)',
    costOfLiving: 'Low',
    primaryLanguages: 'Ukrainian (Official), English (common in IT and urban centers)',
  },
  visas: [
    {
      name: 'IT Visa (for Diia.City Residents)',
      targetAudience: 'IT professionals employed by Diia.City resident companies',
      useCase: "Ukraine's special legal and tax regime, Diia.City, anchors its IT sector. Foreign IT professionals hired by Diia.City resident companies benefit from streamlined work permit procedures, 5% personal income tax on gig contracts (instead of 18% plus 1.5% military levy), and simplified residence. Employer must be a registered Diia.City resident to sponsor under this track.",
      duration: '1-3 years depending on contract, renewable',
      link: 'https://city.diia.gov.ua/en'
    },
    {
      name: 'Wartime Visa-Free Entry (Land/Rail Only)',
      targetAudience: 'Citizens of EU, US, UK, Canada, and ~60 other countries',
      useCase: 'Ukraine permits visa-free entry for up to 90 days within a 180-day period for citizens of most Western countries. Under martial law, all civilian airports are closed — entry is by land or rail only (primarily from Poland, Slovakia, Hungary, Romania, Moldova). Border waits range from two to eight hours. Foreigners must carry ID at all times and comply with curfew and checkpoint rules.',
      duration: 'Up to 90 days within 180-day period',
      link: 'https://mfa.gov.ua/en/consular-affairs/entering-ukraine'
    }
  ],
  requirements: [
    {
      title: 'Tax Identification Number (RNOKPP / Individual Taxpayer Number)',
      explanation: 'A ten-digit individual taxpayer number issued by the State Tax Service. Obtained by submitting a passport and residence documentation to a local tax office or, increasingly, through Diia. No fee.',
      importance: 'Required for virtually every interaction with Ukrainian institutions: opening a bank account, signing an employment contract, registering a FOP, buying real estate, or obtaining a residence permit. Most foreigners obtain it within their first days. Without it, you cannot be paid legally or access most services.',
      link: 'https://tax.gov.ua/en/'
    },
    {
      title: 'Diia App and Diia.Signature',
      explanation: "Diia ('Action', also an acronym for 'the state and me') is Ukraine's award-winning e-government app. It hosts digital versions of your passport, driver's license, tax ID, vehicle registration, business registration, and dozens of services. Diia.Signature is the qualified electronic signature for signing documents digitally.",
      importance: 'Diia is the default interface for most government services, especially under wartime conditions when physical offices are overstretched. Foreigners with a residence permit and RNOKPP can activate Diia and access most services. Expect to use it constantly.',
      link: 'https://diia.gov.ua/en'
    },
    {
      title: 'Residence Registration (Propyska / Mistse Prozhyvannya)',
      explanation: "Every resident must register their place of residence at a municipal Center for Administrative Services (CNAP / TsNAP) or through Diia. Requires a rental agreement or proof of ownership plus the landlord's consent.",
      importance: 'Linked to your residence permit and required for updating driving licenses, certain medical services, enrolling children in local schools, and voting (for citizens). Landlords are sometimes reluctant to register tenants because it creates tax and legal obligations — clarify before signing any lease.',
      link: 'https://diia.gov.ua/en/services'
    },
    {
      title: 'Mandatory Health Insurance',
      explanation: 'Ukraine has a universal public healthcare system funded through general taxation and administered by the National Health Service of Ukraine (NHSU). Residents sign a declaration with a family doctor for primary care. Most expats supplement with private insurance from ARX, Oranta, or PZU Ukraine, or international policies for access to private clinics like Dobrobut or ISIDA.',
      importance: 'Visa and residence applications require proof of Ukraine-valid health insurance. Public coverage is free at point of use for registered residents, but wait times and facility quality vary, so private insurance is the practical norm. Confirm your policy covers war-related risks — most standard international policies exclude them.',
      link: 'https://nszu.gov.ua/en/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Ukraine's economy is wartime-constrained but structurally oriented around IT services, agriculture, heavy industry (Dnipro, Zaporizhzhia), and a growing defense-tech sector. The IT sector is the most relevant for foreigners: over 300,000 developers, major R&D centres for global firms, and the Diia.City legal regime with a 5% preferential income tax for specialists. English is standard in IT and at international NGOs.",
    whereToLook: [
      "Djinni.co — the dominant IT-focused job platform in Ukraine, transparent salary ranges",
      "Dou.ua — Ukrainian developer community with job listings, salary surveys, and company reviews",
      "Work.ua and Rabota.ua — broader general job boards covering all sectors",
      "LinkedIn — strong presence of international companies and NGOs operating in Ukraine",
      "ReliefWeb and UN Talent — for humanitarian, NGO, and development sector roles"
    ],
    realityChecks: [
      "Most IT work is remote or hybrid. Companies are distributed across western cities (Lviv, Ivano-Frankivsk), Kyiv, and abroad, with many teams continuing to work across time zones with frequent displacement.",
      "For non-IT roles, Ukrainian language proficiency is generally required. English-only roles outside IT, NGOs, and embassies are rare.",
      "Work permits for foreign employees are issued by the State Employment Service to the employer, not the employee. Processing typically takes 7-15 business days. The base annual fee is tied to the minimum wage.",
      "Salaries in IT are internationally competitive (EUR 2,000-6,000+ net/month for mid-senior roles); outside IT, the average net monthly salary is approximately UAH 20,000-25,000 (EUR 450-580)."
    ]
  },
  salaryReality: {
    overview:
      "Ukraine has among Europe's lowest living costs, especially outside Kyiv. A comfortable single lifestyle in Lviv or Kyiv runs EUR 900-1,500/month including rent; smaller cities EUR 600-900. Personal income tax is a flat 18% plus a 1.5% military levy (raised to 5% for certain categories during wartime). FOP sole proprietors on the simplified regime (Group 3) pay 5% of revenue, making Ukraine attractive for freelancers with foreign clients. Diia.City gig contractors pay just 5% PIT.",
    realityChecks: [
      "The FOP (Fizychna Osoba Pidpryyemets) structure is the most common legal form for freelancers and remote workers. Group 3 charges 5% of revenue (single tax) plus a fixed social contribution (ESV, roughly EUR 45/month). Annual revenue caps apply and are periodically revised.",
      "The Diia.City regime for IT professionals reduces personal income tax to 5% (vs. standard 18% + 1.5% military levy) for gig contracts. Employers benefit from stable tax terms. Check whether your prospective employer is a registered Diia.City resident.",
      "Wartime economic volatility: the hryvnia (UAH) has been broadly stable against the dollar since early 2023 thanks to central bank interventions, but inflation and exchange rate risk remain elevated.",
      "Payments from abroad arrive fastest via international banks and Wise. PayPal operates in limited form. Cryptocurrency is legal and widely used in the IT sector; the government passed a Virtual Assets Law to regulate the market."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Utility costs and winter heating: electricity blackouts during winter require investment in power stations (EcoFlow, Jackery) or generators — expect EUR 300-1,500 one-time costs for reliable backup power",
      "War risk insurance add-ons for property, vehicles, and health — standard policies often exclude war-related damage or require specific riders",
      "The unofficial but real cost of moving between cities during alerts (changed train schedules, occasional route disruptions, longer journey times)",
      "Cross-border run costs: residents and businesses sometimes travel to Poland, Slovakia, or Moldova for specific goods, banking, or medical appointments"
    ]
  },
  housingSystem: {
    overview:
      "Ukrainian housing markets have been profoundly reshaped by the war. Lviv rents rose 40-70% after February 2022 as internally displaced people and foreigners relocated from Kyiv and eastern regions. Kyiv rents dropped initially but have largely recovered, with discounts on the eastern bank of the Dnipro. Popular Kyiv districts: Pechersk (central, embassies, expensive), Podil (old riverside, cafes, creatives), Obolon (family-oriented), Lukianivka (mid-range). In Lviv, the UNESCO-protected Old Town is most desirable; suburbs like Sykhiv are more affordable.",
    expectations:
      "A modern one-bedroom in central Kyiv costs EUR 600-1,200/month; Lviv EUR 500-900; smaller cities EUR 250-500. Deposits are typically one month's rent plus the final month upfront. Most leases are month-to-month or six-month. Critical wartime checks: bomb shelter availability and quality (parking garages, metro stations, and purpose-built shelters), autonomous heating (central heating is vulnerable to infrastructure attacks), backup power, and proximity to known strike-risk targets (energy infrastructure, military facilities). Platforms include OLX, LUN, DIM.RIA, and Dobrovit; Facebook groups for foreigners in Kyiv and Lviv are active."
  },
  healthcareReality:
    "Ukraine's healthcare system was reformed before the war through the Patient-Centered Reform, introducing the National Health Service of Ukraine (NHSU) and a family-doctor gatekeeper model. Residents sign a declaration with a primary care physician and access the Program of Medical Guarantees — a defined package of services free at point of use. Public hospitals in major cities provide competent emergency and specialist care, though wait times vary. Wartime pressures, including attacks on medical infrastructure and displacement of staff, have strained capacity. Most foreigners and middle-class Ukrainians supplement with private care: Dobrobut, ISIDA, Oberig, and Adonis lead in Kyiv; Medicover and Euromed operate in Lviv. A private GP consultation costs EUR 25-50; specialist visits EUR 40-80. Private health insurance from ARX, Oranta, PZU Ukraine, or UNIQA costs EUR 40-150/month. Pharmacies (Apteka, ANC, Podorozhnyk) are well-stocked; most EU medications are available locally, often without prescription, at significantly lower prices. Medical evacuation insurance is strongly advised — verify coverage of war-related incidents explicitly.",
  digitalLife: {
    overview:
      "Ukraine is among the most digitally advanced countries in Europe, a position reinforced by the war. Diia, Diia.Signature, the State in a Smartphone initiative, and pervasive digital payments make daily administrative life frictionless. Mobile internet via Kyivstar, Vodafone Ukraine, and lifecell is fast and affordable (unlimited 4G from EUR 4-8/month). Fiber from Kyivstar, Volia, and Ukrtelecom delivers 100-1000 Mbps at EUR 6-12/month. Starlink is widely deployed as backup during blackouts.",
    essentials: [
      "Diia — digital ID, documents, tax filing, business registration, permits, and dozens of other government services",
      "Povitryana Tryvoha (Air Raid Alarm) — mandatory app for real-time regional air raid notifications",
      "Privat24 or Monobank — leading digital banking apps with instant transfers, virtual cards, and comprehensive services (Monobank is the standout modern challenger)",
      "Nova Poshta (app and tracking) — the dominant domestic parcel and logistics network, used constantly for deliveries and cross-city shipping"
    ],
    whatSurprisesNewcomers: [
      "The air raid alert system is integrated into daily life. When the alert sounds, move to a shelter — underground metro stations, basements, or 'two walls away' from windows. Most residents continue working with laptops in corridors during alerts.",
      "Monobank has become a banking phenomenon. The black-card, neobank-style interface is arguably more sophisticated than most Western retail banks, and card issuance is often done entirely in-app.",
      "Cashless payments dominate: Apple Pay, Google Pay, and contactless card tap are accepted almost everywhere, including market stalls, minibuses (marshrutky), and taxi drivers.",
      "Power outages and the adaptations around them (generators running outside cafes, power banks, EcoFlow stations, restaurants with their own solar or generator setups) are a distinctive feature of daily life during winter attacks on energy infrastructure."
    ]
  },
  culture: {
    text: "Ukrainian culture is warm, direct, and rooted in language, land, and an acute historical consciousness that has intensified since 2022. The war has accelerated a shift toward Ukrainian in public life; speaking Russian publicly, especially in Kyiv, Lviv, and the west, is increasingly uncommon and can be socially awkward, though private bilingualism remains widespread. Ukrainians value sincerity, courage, self-sufficiency, and a sharp humor that has sharpened under pressure. Hospitality is central — guests are fed generously and toasts are sincere. Food culture centres on borscht (inscribed on UNESCO's Intangible Cultural Heritage list as Ukrainian in 2022), varenyky, salo, deruny, and a rich bread tradition. Coffee culture is strong in Lviv (Austro-Hungarian Galician heritage) and Kyiv. Orthodox Christianity — now predominantly aligned with the Orthodox Church of Ukraine rather than the Moscow Patriarchate — shapes holidays. Since 2023, Ukraine celebrates Christmas on December 25, a symbolic break from the Russian calendar.",
    highlights: [
      "Learn and use at least basic Ukrainian greetings. 'Slava Ukraini!' (Glory to Ukraine) is answered with 'Heroyam Slava!' (Glory to the Heroes). This is now the standard national greeting, used casually among friends and formally at events.",
      "When air raid alerts sound, take them seriously. Ukrainians do not panic but they do seek shelter. Follow local cues — if people around you move to a basement or corridor, move with them.",
      "Respect the language choice of those around you. Many Ukrainians have consciously switched from Russian to Ukrainian since 2022. Asking 'Why do you speak Russian?' is tactless; use Ukrainian or English in public.",
      "Flowers are gifted in odd numbers only (3, 5, 7...). Even-numbered bouquets are reserved for funerals. This rule is strictly observed.",
      "Accept hospitality graciously. Ukrainian hosts will feed you far more than you can eat and pour far more than you can drink. Pace yourself, but do not refuse the initial offerings — refusal can seem rude."
    ]
  },
  transportationMobility:
    "Ukrzaliznytsia (Ukrainian Railways) is the backbone of wartime domestic travel, operating a reliable overnight sleeper network even through strikes on infrastructure. Intercity+ daytime and overnight trains connect Kyiv, Lviv, Kharkiv, Dnipro, and Odesa; tickets via the Ukrzaliznytsia app. The Kyiv Metro is among the world's deepest (Arsenalna is 105m below ground) and doubles as a primary shelter during air raid alerts. Surface transport includes trams, trolleybuses, buses, and shared marshrutky (minibuses). Uber and Bolt operate in major cities, with Uklon as the Ukrainian alternative. Domestic flights are suspended under martial law — all civilian airports are closed. Driving is possible but requires awareness of checkpoints (blockposts) operated by police and territorial defense, curfew hours, and occasional road closures. Fuel is generally available in the west and centre; the east faces more volatility. International buses from Kyiv and Lviv run to Warsaw, Krakow, Prague, Berlin, Budapest, Bucharest, and Chisinau via FlixBus, Regabus, and Ukrainian carriers.",
  internationalConnectivity:
    "All Ukrainian civilian airports have been closed since the full-scale invasion; international travel is by land or rail. Two primary routes: (1) overnight train from Kyiv or Lviv to Chelm or Przemysl in Poland with onward connections to Warsaw, Krakow, and Berlin (Przemysl is roughly 10 hours from Kyiv), and (2) land borders with Poland (Medyka, Korczowa, Shehyni), Slovakia (Uzhhorod-Vysne Nemecke), Hungary (Chop-Zahony), Romania (Siret, Porubne), and Moldova (Palanca). Border waits range from two to eight hours. Most foreigners fly into Krakow, Rzeszow, Warsaw, or Budapest and continue by rail or bus. Ukrzaliznytsia operates direct sleepers from Kyiv to Warsaw, Vienna, Budapest, Chisinau, and Przemysl. Foreign men cross freely; Ukrainian male citizens 18-60 face martial-law exit restrictions.",
  travelExploration:
    "Wartime travel inside Ukraine is possible across the western and central regions. Lviv is the cultural capital: UNESCO-listed Old Town, Armenian Cathedral, Lychakiv Cemetery, and a dense cafe and chocolate culture. The Carpathians (Bukovel ski resort, Yaremche, Hutsul villages, Hoverla peak) remain open to tourism. Chernivtsi in Bukovina retains an Austro-Hungarian atmosphere around the UNESCO-listed Chernivtsi University. Kyiv remains open to visitors — Kyiv Pechersk Lavra (UNESCO), St. Sophia's Cathedral (UNESCO), the Maidan, and the Babyn Yar memorial. Odesa is visitable but faces higher drone and missile risk, with beaches restricted. Eastern and southern frontline regions (Donetsk, Luhansk, Zaporizhzhia, Kherson) and occupied Crimea are off-limits. Cross-border weekend trips to Krakow, Warsaw, Budapest, Vienna, and Bucharest are popular. Always monitor Ukraine MFA and home-country advisories before any trip.",
  considerations: [
    "Martial Law Reality: Ukraine has been under martial law since 24 February 2022, renewed every 90 days. This affects curfews (usually 00:00-05:00, stricter in frontline regions), alcohol sales in some regions, public gatherings, and ID checks at checkpoints. Male Ukrainian citizens 18-60 are generally prohibited from leaving the country. Foreigners are less restricted but must carry ID at all times.",
    "War Risk and Insurance: Standard travel and health policies typically exclude war-related incidents. Specialist providers (battleface, High Risk Voyager, Clements Worldwide, IMG Europe) offer war risk coverage with medical evacuation, EUR 150-500/month. Never travel to Ukraine without explicit war risk coverage.",
    "Energy Infrastructure: Russian attacks have caused rolling blackouts, particularly in winter (October-March). DTEK schedules typically show 4-8 hour outages per day in affected regions. Most residents invest in power stations (EcoFlow, Jackery), UPS units for routers, and gas or camping stoves. Cafes with generators have become informal community hubs.",
    "Regional Risk Stratification: Safety varies dramatically by region. Western oblasts (Lviv, Ivano-Frankivsk, Ternopil, Zakarpattia, Chernivtsi) are safest. Kyiv and central Ukraine face regular missile and drone attacks but function largely normally. Odesa and Mykolaiv face higher attack frequency. Eastern and frontline oblasts (Kharkiv, Zaporizhzhia, Dnipropetrovsk, Donetsk, Kherson) range from elevated risk to active war zone.",
    "Banking and Currency Controls: The NBU imposed currency controls at the start of the invasion. Cross-border UAH transfers are limited, large foreign currency purchases are capped, and some international banking services are constrained. Bring foreign currency for the initial period and use Wise and Monobank/Privat24 for ongoing transfers."
  ],
  mistakes: [
    "Ignoring air raid alerts. Newcomers often dismiss alerts as background noise after seeing locals continue activities. This is risky — locals often know what a given alert signifies (drone swarm vs. ballistic threat). When in doubt, shelter.",
    "Attempting to travel to frontline or occupied regions without accreditation. Illegal, extraordinarily dangerous, and will get you detained or worse. Journalists and aid workers require specific accreditation from the Ministry of Defence and Ministry of Culture to operate in restricted zones.",
    "Assuming Russian is an acceptable lingua franca. Using Russian with strangers, especially in Lviv, Kyiv, and western regions, is socially awkward and occasionally hostile. Use English or learn basic Ukrainian. Many who spoke Russian by default before 2022 have switched and find unsolicited Russian jarring.",
    "Renting without verifying bomb shelter access and power backup. In winter, an apartment without a reliable shelter within 2-3 minutes walking distance and without generator or UPS access becomes uncomfortable fast. Check both before signing.",
    "Relying on standard travel insurance. Almost all major insurers exclude Ukraine or war-related incidents. Without explicit war risk coverage you are functionally uninsured — the most common and most serious mistake foreigners make."
  ],
  emergency: [
    {
      number: '112',
      service: 'Unified Emergency Services',
      description: 'Universal emergency number connecting to police, ambulance, and fire services. English assistance available in Kyiv and major cities but not guaranteed elsewhere. Works from any mobile phone, including without a SIM.'
    },
    {
      number: '102',
      service: 'Police (Politsiya)',
      description: 'Direct national police line for emergencies, crimes in progress, and urgent reports. Dispatchers typically speak Ukrainian; Russian widely understood.'
    },
    {
      number: '103',
      service: 'Ambulance (Shvydka Dopomoha)',
      description: 'Emergency medical services. In Kyiv and Lviv, response times are typically 15-25 minutes. In smaller cities longer. Many foreigners additionally keep a private ambulance number (Dobrobut, ISIDA) as backup.'
    },
    {
      number: '101',
      service: 'Fire and Rescue (Pozhezhna Okhorona)',
      description: 'Direct line to the State Emergency Service for fires, structural collapses, chemical or gas leaks, and rescue operations. Dispatchers speak Ukrainian; English availability varies by region.'
    }
  ],
  sources: [
    {
      name: 'State Migration Service of Ukraine (DMS)',
      category: 'Immigration & Residency',
      description: 'The authority responsible for residence permits, temporary protection, citizenship, and migration matters.',
      link: 'https://dmsu.gov.ua/en-home.html'
    },
    {
      name: 'Diia (Digital Government Portal)',
      category: 'E-Government',
      description: "Ukraine's flagship e-government platform hosting digital documents, services, and business registration.",
      link: 'https://diia.gov.ua/en'
    },
    {
      name: 'Ministry of Foreign Affairs of Ukraine',
      category: 'Consular & Visas',
      description: 'Official source for visa requirements, consular services, and entry/exit rules including martial law provisions.',
      link: 'https://mfa.gov.ua/en'
    },
    {
      name: 'State Border Guard Service',
      category: 'Border Crossings',
      description: 'Real-time information on border crossing wait times, open checkpoints, and crossing rules.',
      link: 'https://dpsu.gov.ua/en/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Ukraine, consult the Ukrainian Ministry of Foreign Affairs or a Ukrainian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/ukraine',
    mfaLink: 'https://mfa.gov.ua/en'
  },
  serviceDirectory: {
    title: "Service Directory - Ukraine",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Ukraine.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for residence permits, work authorization, business registration, and compliance under martial law.",
        providers: [
          { name: "Sayenko Kharenko", link: "https://sk.ua/en/" },
          { name: "Asters", link: "https://www.asterslaw.com" },
          { name: "Baker McKenzie Kyiv", link: "https://www.bakermckenzie.com/en/locations/emea/ukraine" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Platforms and agencies for renting and purchasing apartments in Kyiv, Lviv, and other cities.",
        providers: [
          { name: "LUN", link: "https://lun.ua" },
          { name: "DIM.RIA", link: "https://dim.ria.com" },
          { name: "OLX Ukraine", link: "https://www.olx.ua" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Ukrainian tax law, FOP registration, Diia.City regime, and cross-border compliance.",
        providers: [
          { name: "EY Ukraine", link: "https://www.ey.com/en_ua" },
          { name: "KPMG Ukraine", link: "https://kpmg.com/ua/en/home.html" },
          { name: "Deloitte Ukraine", link: "https://www2.deloitte.com/ua/en.html" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including customs clearance and cross-border moves.",
        providers: [
          { name: "AGS Ukraine", link: "https://www.agsmovers.com" },
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Nova Poshta (domestic logistics)", link: "https://novaposhta.ua/en" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Ukrainian language schools and online platforms supporting foreigners and displaced persons.",
        providers: [
          { name: "Yakaboo School", link: "https://school.yakaboo.ua" },
          { name: "Ukrainian Lessons Podcast", link: "https://www.ukrainianlessons.com" },
          { name: "iTalki Ukrainian Tutors", link: "https://www.italki.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major private healthcare networks commonly used by expats and international staff in Ukraine.",
        providers: [
          { name: "Dobrobut", link: "https://dobrobut.com/en" },
          { name: "ISIDA Clinic", link: "https://isida.ua/en/" },
          { name: "Oberig Clinic", link: "https://oberig.ua/en/" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and agencies connecting foreign professionals with Ukrainian employers, especially in IT.",
        providers: [
          { name: "Djinni.co", link: "https://djinni.co" },
          { name: "Dou.ua", link: "https://jobs.dou.ua" },
          { name: "Work.ua", link: "https://www.work.ua/en/" }
        ]
      }
    ]
  }
};
