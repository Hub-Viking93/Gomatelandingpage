export const greece = {
  id: 'greece',
  slug: 'greece',
  name: 'Greece',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Greek', 'English'],
  shortDescription: 'Ancient history and island life meet chaotic charm.',
  heroImage: 'https://images.unsplash.com/photo-1580502304784-8985b7eb7260?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  flagAlt: 'Flag of Greece',
  atAGlance: "Greece is the cradle of Western civilization, offering a lifestyle that prioritizes outdoor living, social connection, food, and family above all else. Life happens in the plateia (town square): the morning coffee that stretches for two hours, the afternoon siesta when the country effectively shuts down, the evening volta (stroll) along the waterfront, and the late-night taverna dinner that never seems to end. The concept of 'Philoxenia' (love of strangers) is deeply embedded in Greek culture — genuine hospitality toward visitors and newcomers is a point of national pride. However, Greece also means confronting legendary bureaucracy: administrative processes are slow, inconsistent between offices, and frequently require multiple visits with ever-changing document requirements. The divide between Athens (a sprawling, chaotic, vibrant metropolis of 3.7 million) and the islands (where life follows the rhythm of ferries, seasons, and tourism) is profound. 'Siga Siga' (slowly, slowly) is not just an expression — it is the operating philosophy of daily life, government offices, and social interaction. Strikes affecting transport, government services, and utilities occur periodically. For digital nomads and expats, Greece offers a stunning, increasingly affordable backdrop with improving infrastructure, provided you can embrace the beautiful chaos and accept that things happen on Greek time, not yours.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'Medium',
    primaryLanguages: 'Greek (English widely spoken in tourism)',
  },
  visas: [
    {
      name: 'Golden Visa (Residence by Investment)',
      targetAudience: 'Property Investors',
      useCase: 'Greece\'s popular residence-by-investment program grants a 5-year renewable residence permit through real estate purchase. The investment threshold has been recently increased: EUR 800,000 in high-demand areas (Athens center, Thessaloniki, Mykonos, Santorini) and EUR 400,000 in other regions (though thresholds are subject to change). The permit covers the investor and family members. No minimum stay requirement, and it provides Schengen-wide travel. It does NOT grant work rights or access to the Greek public healthcare system without separate registration.',
      duration: '5 years (renewable as long as investment is maintained)',
      link: 'https://migration.gov.gr/en/golden-visa/'
    },
    {
      name: 'Digital Nomad Visa (National Visa Type D)',
      targetAudience: 'Remote Workers',
      useCase: 'For non-EU citizens working remotely for employers or clients outside Greece. Applicants must demonstrate a monthly income of at least EUR 3,500 (with an additional 20% for a spouse and 15% per child). Requires proof of remote employment or freelance contracts, health insurance, and a clean criminal record. The initial visa is for 1 year, convertible to a 2-year residence permit upon arrival.',
      duration: '1 year visa (convertible to 2-year residence permit)',
      link: 'https://workfromgreece.gr/'
    },
    {
      name: 'Financially Independent Person (FIP) Visa',
      targetAudience: 'Retirees, Independently Wealthy Individuals',
      useCase: 'For non-EU citizens who can demonstrate stable and sufficient income from pensions, investments, or other passive sources — generally approximately EUR 2,000/month for a single applicant with increases for dependents. Requires proof of income, health insurance, and accommodation. Does not permit employment in Greece.',
      duration: '2 years (renewable)',
      link: 'https://www.mfa.gr/en/visas/'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists, Short-stay Visitors',
      useCase: 'For short visits up to 90 days within a 180-day period for tourism, business meetings, or family visits. Many nationalities can enter visa-free under Schengen rules.',
      duration: 'Up to 90 days',
      link: 'https://www.mfa.gr/en/visas/'
    },
    {
      name: 'National Visa Type D (Employment)',
      targetAudience: 'Employed Professionals',
      useCase: 'For non-EU nationals with a binding employment contract from a Greek employer. The employer must demonstrate that no suitable EU candidate is available. Processing goes through the Greek consulate in your country of residence, and the permit is issued after arrival. Greece has been gradually opening specific sectors (tech, tourism management, specialized healthcare) to international talent.',
      duration: '1 year (renewable)',
      link: 'https://www.mfa.gr/en/visas/'
    }
  ],
  requirements: [
    {
      title: 'AFM (Arithmos Forologikou Mitroou — Tax Identification Number)',
      explanation: 'A 9-digit tax identification number issued by the local tax office (DOY — Dimosia Oikonomiki Ypiresia). For non-residents, you will need to appoint a Greek tax representative (forologikos antiprosopos) to obtain an AFM. EU citizens can apply directly with their passport at their local DOY.',
      importance: 'The AFM is the absolute prerequisite for virtually every interaction in Greece. Without it, you cannot rent a house, buy property, open a bank account, get a phone line, sign an employment contract, register for healthcare, or even purchase certain goods. Apply for it as your very first administrative step. The process at the DOY can take anywhere from 30 minutes to a full day depending on the office and time of year.',
      link: 'https://www.aade.gr/en'
    },
    {
      title: 'AMKA (Arithmos Mitroou Koinonikis Asfalisis — Social Security Number)',
      explanation: 'An 11-digit social insurance number required for employment, social security contributions, and access to the public healthcare system (ESY). Issued at EFKA (United Social Insurance Fund) offices or KEP (Citizen Service Centres). You need your passport, AFM, residence permit (for non-EU citizens), and proof of address.',
      importance: 'AMKA is mandatory for anyone working in Greece (both employed and self-employed) and provides access to the public healthcare system. It is increasingly linked to the AFM in government databases. Without AMKA, you cannot receive salary through the Greek payroll system, make social security contributions, or access public hospital care (except emergencies). The PAAYPA (Provisional Insurance and Healthcare Number) serves as a temporary equivalent for asylum seekers and certain other categories.',
      link: 'https://www.amka.gr/'
    },
    {
      title: 'Residence Permit (Adeia Diamonis)',
      explanation: 'Non-EU nationals staying beyond 90 days must obtain a residence permit through the Decentralized Administration (Apokentromeni Dioikisi) or the relevant immigration office in their area. The application requires a valid visa, passport, proof of health insurance, proof of sufficient funds, criminal record certificate, and accommodation documentation.',
      importance: 'The residence permit is your legal right to live in Greece. Applications are submitted in person, and processing times can be lengthy (2-6 months is common). You receive a receipt (vevaiosi katathesis) that serves as temporary proof of legal residence while your application is processed. Keep this receipt safe — it is your interim documentation for all official interactions.',
      link: 'https://migration.gov.gr/en/'
    },
    {
      title: 'TaxisNet Credentials (e-Tax Platform)',
      explanation: 'Online login credentials for accessing the Greek tax system (through the AADE — Independent Authority for Public Revenue). You obtain these by applying online or at your local DOY after receiving your AFM. The platform handles tax declarations, property tax (ENFIA), vehicle tax, and income tax filing.',
      importance: 'Nearly all tax declarations in Greece are now filed online through TaxisNet. Annual income tax returns (filed by June 30 for the previous year), property tax (ENFIA) management, and electronic invoicing for self-employed individuals all require TaxisNet access. Without these credentials, you must rely on an accountant (logistis) for all tax interactions — which most Greeks do anyway, as the tax system is complex and frequently changing.',
      link: 'https://www.aade.gr/en'
    }
  ],
  jobsAndIncome: {
    overview:
      "Greece has a relatively small and challenging job market, shaped by high unemployment (particularly among youth), strong seasonality, and limited high-paying local roles. The economy is anchored by tourism, shipping, agriculture, energy, and a small but growing tech and startup ecosystem centered in Athens (with hubs in Thessaloniki). Many well-educated young Greeks have emigrated for better opportunities, creating a brain drain that the government is actively trying to reverse through tax incentives and visa programs. For expats, the most realistic options are remote work for foreign employers, positions in multinational companies, tourism management, or specialized roles in shipping and energy.",
    whereToLook: [
      "LinkedIn (growing rapidly for international, tech, and management roles)",
      "Kariera.gr (the largest Greek job portal, primarily Greek-language listings)",
      "Skywalker.gr (strong for tech, media, and creative roles)",
      "Work from Greece portal (government initiative connecting remote workers with the Greek ecosystem)",
      "Startup and tech community events (Athens Startup Weekend, Found.ation, Orange Grove)"
    ],
    realityChecks: [
      "Local salaries are low compared to Western European averages — the minimum wage is approximately EUR 830/month gross, and many professionals earn EUR 1,000-1,500 net.",
      "Greek language proficiency is required for the vast majority of local roles — English-only positions exist mainly in tech, international organizations, and tourism management.",
      "Seasonal employment (tourism, agriculture, hospitality) dominates outside Athens and Thessaloniki, with many contracts running May-October only.",
      "Remote income from foreign employers provides dramatically better purchasing power — a EUR 3,000/month foreign income supports a comfortable lifestyle in most of Greece."
    ]
  },
  salaryReality: {
    overview:
      "Greek salaries are among the lowest in the EU-27, reflecting a decade of economic crisis, austerity measures, and slow recovery. The national minimum wage is approximately EUR 830/month gross (14 payments per year including the 13th and 14th month Christmas and Easter bonuses). Average gross salaries range from EUR 1,200-1,800/month for mid-level roles. Tech, shipping, finance, and senior management positions offer higher compensation but remain below Northern European levels.",
    realityChecks: [
      "Net salaries feel tight even with lower costs of living — Athens has become increasingly expensive while wages have not kept pace.",
      "Youth unemployment remains high (approximately 20-25%), and underemployment is common even among university graduates.",
      "The 13th month salary (Christmas bonus) and 14th month salary (Easter and summer bonuses) are standard in employment contracts and should be factored into annual calculations — they are not 'extras' but part of expected annual compensation.",
      "Foreign-sourced income benefits from a special flat tax regime: new tax residents transferring their tax residency to Greece can pay a flat 7% on all foreign-source income for 15 years (for retirees) or benefit from a 50% income tax exemption for 7 years (for employed professionals relocating to Greece)."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The impact of high social security contributions on net pay (approximately 14-16% employee share on top of income tax)",
      "Significant cost-of-living differences between Athens, Thessaloniki, the islands, and the mainland — monthly expenses can vary by 30-50%",
      "Seasonal income instability for anyone in tourism-related work, where 6 months of intense activity must fund 12 months of expenses",
      "Limited employer-provided benefits outside of statutory requirements — private health insurance, company cars, and equity are uncommon except in multinational companies"
    ]
  },
  housingSystem: {
    overview:
      "The Greek rental market is relatively flexible but has been significantly disrupted by the explosion of short-term tourist rentals (Airbnb), which has reduced available long-term housing stock and pushed up prices in popular areas. In Athens, popular neighborhoods for expats include Kolonaki (upscale, central), Pangrati (residential, increasingly trendy), Koukaki (near the Acropolis, popular with digital nomads), Exarchia (bohemian, alternative), Kifisia and Glyfada (suburban, family-oriented). In Thessaloniki, Ano Poli and Ladadika are popular. Island housing availability and pricing are heavily seasonal.",
    expectations:
      "Expect one to two months' deposit and monthly rent paid in cash or bank transfer. Furnished apartments are common in tourist-oriented areas but less so in local residential neighborhoods. Rent in central Athens ranges from EUR 400-600 for a small studio to EUR 800-1,200 for a one-bedroom in a desirable area — still significantly cheaper than most Western European capitals. Spitogatos.gr, XE.gr, and Facebook groups (e.g., 'Expats in Athens,' 'Athens Flat Hunting') are the primary search platforms. Always sign a written rental contract and register it with the AADE (tax authority), as this protects both parties and is legally required. Heating costs in winter (Athens uses mostly natural gas or diesel radiators) can add EUR 100-200/month. Air conditioning electricity costs in summer (essential — Athens regularly exceeds 35-40C) can be significant."
  },
  healthcareReality:
    "Greece has a public healthcare system (ESY — Ethniko Systima Ygeias) that provides coverage to all residents with AMKA registration. Public hospitals — including Evangelismos, Laiko, and Attikon in Athens, and AHEPA and Papageorgiou in Thessaloniki — provide emergency and planned care. Public healthcare is affordable (most services are free or low co-pay for insured residents) but faces challenges: overcrowding, understaffing, long waiting times for non-urgent appointments, and inconsistent quality between regions. Many residents — both Greek and expat — use private healthcare for faster access and more personalized care. Private hospitals and clinics (Hygeia, Metropolitan Hospital, Athens Medical Group, Euromedica) offer excellent care with English-speaking staff, typically at moderate costs by European standards (a private specialist consultation costs EUR 50-100). Private health insurance from Greek providers (Ethniki, Interamerican, Eurolife) or international insurers is commonly used. Pharmacies (farmakeia) are ubiquitous and pharmacists are highly trained — they often serve as first-line health advisors for minor issues and can dispense many medications that would require a prescription elsewhere.",
  digitalLife: {
    overview:
      "Greece's digital services have improved dramatically in recent years, driven by the gov.gr portal and the digital transformation push following the 2020 pandemic. Many government services that previously required in-person visits can now be initiated online, though completion still sometimes requires physical presence or notarized documents.",
    essentials: [
      "gov.gr (central government portal — digital document issuance, tax services, appointment booking for public services, and electronic prescriptions)",
      "TaxisNet (online tax platform for income tax filing, property tax, and invoicing — essential for anyone with income in Greece)",
      "myAADE (AADE mobile app for tax documents, receipts tracking, and VAT management)",
      "Cosmote or Vodafone mobile plan (the two largest telecoms providers with broad 4G/5G coverage across the mainland and islands)"
    ],
    whatSurprisesNewcomers: [
      "Digital government services through gov.gr have improved enormously but are primarily in Greek — English-language support is limited, and many processes require a Greek-language browser or assistance.",
      "Outcomes from government offices can depend heavily on which specific office and which clerk you deal with — what one KEP (Citizen Service Centre) accepts, another may reject.",
      "Cash remains very common in daily life, particularly at kiosks (periptera), small tavernas, markets, and on islands — though POS terminals are legally mandatory for all businesses.",
      "Documentation requirements for administrative processes can change without notice, and different offices may request different supporting documents for the same procedure."
    ]
  },
  culture: {
    text: 'Greek culture is loud, passionate, communal, and deeply rooted in family, food, and connection. "Kefi" describes the Greek spirit of joy, spontaneity, and zest for life — it erupts at dinner tables, in tavernas, and at celebrations. Personal space is smaller than in Northern Europe; conversations are animated with gestures, interruptions are signs of engagement (not rudeness), and meals are always shared. Family is the central organizing unit of Greek society — Sunday lunch with the extended family is a weekly institution, and parents maintain close involvement in their children\'s lives well into adulthood. Fighting over the bill at a restaurant is a genuine social ritual (you should always try to pay, even if you expect to lose). Greek hospitality (philoxenia) is real and deeply felt — refusing offered food, drink, or help can cause genuine offense. Time operates on a different logic: social events start late, meetings overrun, and the concept of "Greek time" is a lived reality that frustrates punctual newcomers until they learn to embrace it.',
    highlights: [
      'Greek Time: "Siga siga" (slowly, slowly) is the operating philosophy. Social events start 30-60 minutes late, meetings overrun, and the afternoon siesta (mesimeri) from approximately 2:30 PM to 5:30 PM is still observed in many areas — shops close, voices drop, and calling someone during siesta hours is considered inconsiderate.',
      'Coffee Culture: Greek coffee culture is a social institution, not a caffeine delivery system. A single frappe or freddo espresso is sipped over 1-2 hours of conversation at a kafeneio (traditional coffee house) or modern cafe. Rushing your coffee signals that you do not understand Greek social life.',
      'Yes and No Gestures: A slight upward nod of the head means "No" (ochi), often accompanied by a "tsk" sound. A downward nod or tilt means "Yes" (nai). This is the opposite of most Western gesture conventions and causes frequent confusion.',
      'Name Days: In Greece, your "name day" (celebrating the saint your name derives from) is often celebrated as much as or more than your birthday. On your name day, you are expected to treat friends and family, not the other way around.',
      'The Evil Eye (Mati): Belief in the evil eye is widespread, even among educated Greeks. The blue eye amulet (mati) is worn as protection, and if you feel unexplainably unwell after receiving a compliment or attention, Greeks may suggest someone "matiasmenos" (gave you the evil eye). It is a cultural practice, not mere superstition.'
    ]
  },
  transportationMobility:
    "Athens has a modern metro system (3 lines), an extensive bus and trolleybus network (OASA), a tram line connecting the city center to the coast, and a suburban railway (Proastiakos) connecting to the airport and Corinth. The metro is clean, efficient, and affordable — a single ticket costs EUR 1.20 and the integrated ticket system covers all Athens transit. The Ath.ena card (rechargeable transit card) works across all modes. Thessaloniki has an extensive bus network and a metro system under construction. Outside major cities, public transport is limited. Intercity buses (KTEL) connect towns and cities across the mainland and are reliable and affordable. Ferries are essential for island travel — dozens of ferry companies (Blue Star Ferries, Hellenic Seaways, SeaJets, ANEK Lines) connect Piraeus (Athens' port) and Rafina to the Cyclades, Dodecanese, Northeast Aegean, Saronic, and Ionian islands. Schedules vary dramatically by season — winter services are reduced significantly. Driving in Greece requires patience: Athens traffic is congested, parking is chaotic, and Greek driving style is assertive. Rental cars or scooters are the standard mode of transport on islands.",
  internationalConnectivity:
    "Athens International Airport (Eleftherios Venizelos, ATH) is the primary international hub, with direct flights to most major European cities, North America (New York, Philadelphia, Chicago, Montreal, Toronto), the Middle East, and increasingly Asia. Aegean Airlines (Star Alliance member) is the national carrier, and Olympic Air handles domestic routes. Budget carriers (Ryanair, Wizz Air, easyJet, Transavia) operate extensive European networks from Athens, Thessaloniki, and seasonal island airports. During summer, direct charter flights from across Europe serve island airports (Mykonos, Santorini, Corfu, Rhodes, Crete/Heraklion, Zakynthos) — connectivity increases dramatically from May to October. Thessaloniki Airport (SKG) offers growing European connections. Greece's position in the eastern Mediterranean makes it a natural gateway to Turkey, Cyprus, Egypt, and the broader Middle East.",
  travelExploration:
    "Greece is a treasure trove of travel experiences. The Acropolis and ancient Agora in Athens are the obvious starting points, but the archaeological sites extend across the country: Delphi, Olympia, Epidaurus, Mycenae, Knossos (Crete), and Delos. The Greek islands number over 6,000 (approximately 200 inhabited) and offer staggering variety: Santorini's dramatic caldera, Mykonos' nightlife, Crete's gorges and Minoan ruins, Rhodes' medieval old town, Naxos' Venetian architecture, Milos' volcanic beaches, and the unspoiled beauty of Ikaria, Folegandros, and Amorgos. The Peloponnese offers coastal towns, mountain villages, and some of the best food in the country. Northern Greece (Thessaloniki, Halkidiki, Meteora's monasteries perched on rock pillars, Zagori's stone bridges and gorges) is increasingly popular and less touristy. Domestic flights are affordable (EUR 30-80 one-way on Aegean/Olympic), ferries provide scenic island connections, and the road network on the mainland supports comfortable driving trips.",
  considerations: [
    'Toilet Paper Protocol: In many Greek buildings — particularly older construction, islands, and non-luxury accommodation — plumbing cannot handle toilet paper. A bin is provided next to the toilet for used paper. This applies even in some modern buildings in Athens. Newer luxury hotels and recently constructed apartments have upgraded plumbing, but always check before assuming.',
    'Island Life in Winter: Living on a Greek island during summer is paradise. In winter, it is a very different experience — quiet, windy, isolated, and with limited services. Ferry schedules are dramatically reduced (sometimes cancelled for days due to storms), many restaurants and shops close entirely, and the social landscape shrinks. If you plan year-round island living, choose a larger island (Crete, Rhodes, Corfu) with better infrastructure.',
    'Cash and POS: While POS terminals are legally mandatory in all businesses, many tavernas, kiosks (periptera), and small shops prefer cash or claim their machine is broken (chalasmenon) to avoid transaction fees. Always carry cash, particularly on islands and in rural areas.',
    'August Shutdown: Like Italy, Greece experiences a significant slowdown around August 15 (Dekapentavgoustos — Assumption of the Virgin Mary). Government offices operate with skeleton staff, many businesses close, and administrative processes halt. Do not plan any bureaucratic tasks for August.',
    'Strikes and Protests: Greek workers and unions exercise their right to strike regularly. Transport strikes (metro, buses, ferries, air traffic control) can disrupt travel plans without much advance notice. Check news and union announcements before making critical travel plans, especially for ferry or flight connections.'
  ],
  mistakes: [
    'Showing the open palm (Moutza). Extending your hand with all five fingers spread toward someone\'s face is one of the most severe gestures of insult in Greek culture — equivalent to an aggressive obscenity. Even the "talk to the hand" gesture can be misinterpreted. Keep your palm closed when gesturing toward people.',
    'Expecting things to work normally in August. The week around August 15 is effectively a national shutdown. Offices close, construction stops, ferries are packed with returning Greeks heading to ancestral villages, and island accommodation is at peak prices and minimum availability. Plan around it.',
    'Rushing the waiter. In Greek taverna culture, the waiter is not ignoring you — they are giving you space to enjoy your meal and conversation without pressure. Flagging down a waiter aggressively or complaining about service speed is considered rude. When you are ready, make eye contact and gently signal. The bill (logariasmo) is never brought until you ask for it.',
    'Declining offered food or drink. When a Greek host offers you something — coffee, fruit, sweets, a meal — they mean it sincerely. Declining repeatedly can cause genuine offense. Accept at least a small amount, compliment it, and participate in the offering.',
    'Underestimating Greek bureaucracy. Even simple administrative tasks (obtaining an AFM, registering a lease, applying for a residence permit) can require multiple office visits, changing document requirements, and significant patience. Budget full days for bureaucratic errands, bring extra copies of every document, and cultivate a philosophical attitude toward the process.'
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency (European Number)',
      description: 'The unified European emergency number connecting to all services. Operators speak Greek and English.'
    },
    {
      number: '100',
      service: 'Police (Astynomia)',
      description: 'Direct police line for reporting crimes, emergencies, and requesting police assistance.'
    },
    {
      number: '166',
      service: 'Ambulance (EKAB)',
      description: 'National Centre for Emergency Care ambulance service. Response times vary significantly between urban areas (generally adequate) and rural/island locations (potentially much longer).'
    }
  ],
  sources: [
    {
      name: 'Ministry of Migration and Asylum',
      category: 'Immigration',
      description: 'Official authority for residence permits, Golden Visa, immigration policy, and all matters related to legal migration to Greece.',
      link: 'https://migration.gov.gr/en/'
    },
    {
      name: 'AADE (Independent Authority for Public Revenue)',
      category: 'Tax Authority',
      description: 'Greek tax authority managing AFM registration, income tax, property tax (ENFIA), and the TaxisNet online platform.',
      link: 'https://www.aade.gr/en'
    },
    {
      name: 'Work from Greece',
      category: 'Digital Nomad Program',
      description: 'Official government initiative promoting Greece as a destination for remote workers, with information on the digital nomad visa, coworking spaces, and lifestyle resources.',
      link: 'https://workfromgreece.gr/'
    },
    {
      name: 'Ministry of Foreign Affairs',
      category: 'Consular & Visa Information',
      description: 'Official ministry providing visa information, consular services, and bilateral agreements for all nationalities.',
      link: 'https://www.mfa.gr/en/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to Greece, consult the Greek Ministry of Foreign Affairs or a Greek embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/greece',
    mfaLink: 'https://www.mfa.gr/en/'
  },
  serviceDirectory: {
    title: "Service Directory - Greece",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Greece.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with residence permits, Golden Visa applications, work visas, and appeals in Greece.",
        providers: [
          { name: "Zepos & Yannopoulos", link: "https://www.zeya.com" },
          { name: "Bernitsas Law Firm", link: "https://www.bernitsaslaw.com" },
          { name: "KG Law Firm", link: "https://kglawfirm.gr" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies handling residential sales, long-term rentals, and Golden Visa property investments.",
        providers: [
          { name: "Spitogatos", link: "https://www.spitogatos.gr" },
          { name: "XE.gr Property", link: "https://www.xe.gr" },
          { name: "Engel & Volkers Greece", link: "https://www.engelvoelkers.com/gr-en" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax specialists covering Greek residency rules, income tax, non-dom flat tax regimes, and freelancer obligations.",
        providers: [
          { name: "PwC Greece", link: "https://www.pwc.com/gr" },
          { name: "Deloitte Greece", link: "https://www.deloitte.com/gr" },
          { name: "EY Greece", link: "https://www.ey.com/el_gr" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and local relocation services for household goods, personal belongings, and vehicle import.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Greece", link: "https://www.agsmovers.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Courses and tutors for learning Modern Greek, from beginner to advanced levels, including preparation for Greek language certification.",
        providers: [
          { name: "Hellenic American Union", link: "https://www.hau.gr" },
          { name: "Athens Centre", link: "https://www.athenscentre.gr" },
          { name: "Omilo Greek Language School", link: "https://www.omilo.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public healthcare access and private hospitals commonly used by residents and expats in Greece.",
        providers: [
          { name: "Hygeia Hospital Group", link: "https://www.hygeia.gr" },
          { name: "Metropolitan Hospital", link: "https://www.metropolitan-hospital.gr" },
          { name: "Athens Medical Group", link: "https://www.iatriko.gr" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and agencies connecting local and international talent with Greek employers.",
        providers: [
          { name: "Kariera.gr", link: "https://www.kariera.gr" },
          { name: "Adecco Greece", link: "https://www.adecco.gr" },
          { name: "ManpowerGroup Greece", link: "https://www.manpowergroup.gr" }
        ]
      }
    ]
  }
};
