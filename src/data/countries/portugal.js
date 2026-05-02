export const portugal = {
  id: 'portugal',
  slug: 'portugal',
  name: 'Portugal',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Portuguese', 'English'],
  shortDescription: 'Sun-soaked coastlines, vibrant culture, and a relaxed pace of life in Western Europe.',
  heroImage: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2070&auto=format&fit=crop',
  flagAlt: 'Flag of Portugal',
  atAGlance: "Portugal has become one of Europe's most popular relocation destinations, drawing digital nomads, retirees, and entrepreneurs with its warm climate, affordable cost of living (relative to Western Europe), and a genuinely high quality of life. The Portuguese are famously hospitable and polite, though somewhat reserved at first — friendships build slowly but are genuine once formed. Life here runs at a slower pace: lunch can stretch to two hours, rushing is frowned upon, and the concept of 'desenrascanço' — finding a creative, improvised solution to any problem — is a national trait that reflects both resourcefulness and a relaxed attitude toward rigid planning. Lisbon has transformed into a thriving tech and startup hub, with Web Summit calling it home and companies like Farfetch and OutSystems headquartered there. Porto offers a grittier, more affordable alternative with its own booming creative and tech scenes. The Algarve coast remains a retirement paradise, while smaller cities like Braga, Coimbra, and Aveiro offer quieter, more traditional Portuguese life. However, newcomers consistently cite two major friction points: the legendary bureaucratic slowness of AIMA (the immigration agency, formerly SEF), where appointment backlogs can stretch to months, and the surprising cold of Portuguese houses in winter — most buildings lack central heating and insulation, meaning indoor temperatures can drop below 15 degrees Celsius from November through February. Dehumidifiers, space heaters, and thermal clothing become essential survival tools.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'Medium',
    primaryLanguages: 'Portuguese (English widely spoken in Lisbon, Porto, and tourist areas)',
  },
  visas: [
    {
      name: 'D7 Visa (Passive Income / Retirement)',
      targetAudience: 'Retirees, Investors with Passive Income',
      useCase: 'For individuals with stable, recurring passive income — pensions, dividends, rental income, or investment returns — who wish to reside in Portugal without working locally. Requires proof of sufficient income (approximately four times the Portuguese minimum wage, roughly EUR 3,040/month in 2024) and a Portuguese address. Grants access to the NHR (Non-Habitual Resident) tax regime, which can significantly reduce tax liability on foreign income for the first 10 years.',
      duration: 'Temporary Residence (2 years, renewable, leads to permanent residency after 5 years)',
      link: 'https://vistos.mne.gov.pt/en/national-visas/general-information/type-of-visa'
    },
    {
      name: 'D8 Visa (Digital Nomad)',
      targetAudience: 'Remote Workers, Freelancers',
      useCase: 'Introduced in 2022 for remote workers employed by or contracting with non-Portuguese companies. Requires proof of income at least four times the Portuguese minimum wage (approximately EUR 3,040/month). Available as a temporary stay visa (up to one year) or a residence visa leading to a residence permit. One of Europe\'s most popular digital nomad visas due to Portugal\'s lifestyle appeal.',
      duration: '1 year (Temporary Stay) or Residence Permit',
      link: 'https://vistos.mne.gov.pt/en/national-visas/general-information/type-of-visa'
    },
    {
      name: 'D1 Work Visa (Subordinate Employment)',
      targetAudience: 'Employees with a Job Offer',
      useCase: 'For non-EU nationals with a signed employment contract or binding job offer from a Portuguese employer. The employer must demonstrate that the role could not be filled by an EU/EEA citizen. Processed at the Portuguese consulate in your country of residence. Once in Portugal, you convert the visa to a residence permit at AIMA.',
      duration: '4 months (leads to Residence Permit, renewable for 2 years)',
      link: 'https://vistos.mne.gov.pt/en/national-visas/general-information/type-of-visa'
    },
    {
      name: 'Job Seeker Visa',
      targetAudience: 'Job Hunters',
      useCase: 'Allows non-EU citizens to enter Portugal for 120 days (extendable by 60 days) to search for employment. You cannot work during the search period. Requires proof of funds, accommodation, and qualifications. Once a job is found, you apply for a residence permit without leaving the country.',
      duration: '120 days (extendable by 60 days)',
      link: 'https://vistos.mne.gov.pt/en/national-visas/general-information/type-of-visa'
    },
    {
      name: 'Golden Visa (ARI — Autorização de Residência para Investimento)',
      targetAudience: 'Investors',
      useCase: 'Residence by investment. The real estate investment route was discontinued in October 2023. Remaining eligible investment options include capital transfers of EUR 500,000+ into qualifying Portuguese investment funds, creation of at least 10 jobs, or contributions to scientific research or cultural heritage. Grants Schengen-wide travel and a path to permanent residency and citizenship after five years with minimal physical presence requirements.',
      duration: '2 years (renewable, minimal stay requirement of 7 days per year)',
      link: 'https://aima.gov.pt/pt/golden-visa'
    }
  ],
  requirements: [
    {
      title: 'NIF (Número de Identificação Fiscal)',
      explanation: 'The Tax Identification Number is a nine-digit code assigned by the Autoridade Tributária (Tax Authority). It is required for virtually every financial and administrative transaction in Portugal: opening a bank account, signing a rental contract, setting up utilities, buying a phone, and even registering at a grocery store loyalty program.',
      importance: 'The NIF is the first administrative step for any newcomer. EU citizens can apply at any Finanças (tax office) with their passport. Non-EU citizens without a Portuguese address historically needed a fiscal representative (a Portuguese citizen or company that acts as your tax liaison), though this requirement has been relaxed for EU residents. Getting a NIF typically takes 30 minutes at the counter, but appointment availability varies. Some people use NIF application services (EUR 100-200) to avoid the queue.',
      link: 'https://eportugal.gov.pt/en/servicos/pedir-o-numero-de-identificacao-fiscal-para-pessoa-singular'
    },
    {
      title: 'Atestado de Residência (Proof of Address)',
      explanation: 'A certificate issued by your local Junta de Freguesia (parish council) confirming your residential address. Some parishes require a witness (a neighbor or Portuguese resident) to confirm your address.',
      importance: 'Used to register with the local Centro de Saúde (health center), confirm address for tax purposes, and support various administrative applications. The process varies by parish — some issue it on the spot, others schedule a home visit. This is one of those typically Portuguese administrative quirks that varies by location and the mood of the functionary on duty.',
      link: 'https://eportugal.gov.pt/en'
    },
    {
      title: 'Utente Number (Número de Utente do SNS)',
      explanation: 'Your registration number for the Serviço Nacional de Saúde (National Health Service). You obtain this by registering at your local Centro de Saúde (health center) with your NIF, proof of address, and residence documentation.',
      importance: 'Grants access to public healthcare services, including GP consultations (approximately EUR 4.50 per visit), prescribed medications at subsidized prices, emergency care, and specialist referrals. Without registration, you pay full private rates. The SNS covers a wide range of services but is known for long wait times — three to six months for specialist appointments is common, which is why many residents maintain supplemental private insurance.',
      link: 'https://www.sns24.gov.pt/'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a Portuguese bank account requires your passport, NIF, proof of address, and proof of income or employment. Major banks include Millennium BCP, Caixa Geral de Depósitos (CGD, the state bank), Novo Banco, and Santander Totta. Digital banks like ActivoBank (no fees) and Moey are popular with younger newcomers.',
      importance: 'A local bank account is essential for receiving salary, paying rent (most landlords require a Portuguese bank transfer), setting up utility direct debits, and managing daily expenses. MB WAY (a Portuguese mobile payment system linked to your bank account and phone number) is the dominant peer-to-peer payment method and is accepted at most shops, restaurants, and even market stalls. Many landlords and service providers do not accept international transfers.',
      link: 'https://www.bportugal.pt/en'
    }
  ],
  jobsAndIncome: {
    overview:
      "Portugal's job market is relatively small and salary levels are modest by Western European standards. The strongest opportunities for foreigners cluster in Lisbon's growing tech ecosystem (Web Summit corridor, startup scene), shared service centers for multinationals, tourism and hospitality, and Porto's creative and digital industries. The minimum wage rose to EUR 820/month in 2024, but many skilled roles pay only EUR 1,200-2,000 gross.",
    whereToLook: [
      "LinkedIn — the primary platform for professional and international roles in Portugal",
      "Net-Empregos, Sapo Emprego, and Indeed Portugal — Portuguese-language job boards with the broadest local listings",
      "Landing.jobs — a tech-focused portal popular with Lisbon's startup and scale-up ecosystem",
      "Multinational company career pages (Deloitte, Siemens, Bosch, Volkswagen Digital Solutions all have Portuguese offices)",
      "Local recruitment agencies such as Hays Portugal, Michael Page Portugal, and Randstad Portugal"
    ],
    realityChecks: [
      "Portuguese language skills significantly expand your opportunities beyond the international bubble. Even in English-speaking companies, internal communication and social integration default to Portuguese.",
      "Salaries are lower than in Northern Europe — a senior software developer in Lisbon earns EUR 35,000-55,000, roughly half of what the same role pays in Amsterdam or Berlin.",
      "The NHR (Non-Habitual Resident) tax regime can be very advantageous for remote workers earning foreign income, offering a flat 20% tax rate on Portuguese-sourced employment income from high-value activities.",
      "Many expats supplement local employment with remote freelance work for foreign clients, which Portugal's D8 visa and freelancer-friendly tax regime are designed to accommodate."
    ]
  },
  salaryReality: {
    overview:
      "Portuguese salaries are among the lowest in Western Europe, even for skilled roles. The median salary is approximately EUR 1,100/month net, and even experienced professionals rarely exceed EUR 2,500-3,000 net unless in tech, finance, or multinational management. Cost of living has risen sharply since 2020, particularly housing in Lisbon and Porto, creating a squeeze for workers on local salaries.",
    realityChecks: [
      "Net pay in Portugal can feel tight in Lisbon and Porto, where rent alone often exceeds 40% of a median salary. Many locals live with family or roommates well into their 30s.",
      "Income tax is progressive (14.5% to 48%) plus an additional solidarity surcharge above EUR 80,000. Social security contributions add 11% for employees (23.75% employer side).",
      "The 14-month salary system means you receive an extra month's pay in June (férias/holiday subsidy) and another in November/December (Natal/Christmas subsidy). This is not a bonus — it is legally mandated and should be factored into annual calculations.",
      "Benefits packages are generally modest compared to Northern Europe. Meal allowances (subsidio de alimentação, approximately EUR 6-8/day) are common and tax-advantaged."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Net salary after income tax and social security (11% employee contribution) — always ask for net, not gross",
      "Housing costs: average rent for a one-bedroom in Lisbon city center has risen to EUR 1,000-1,500/month; Porto is EUR 700-1,100",
      "Utility costs including electricity (Portugal has some of the highest energy prices in Europe) and gas — expect EUR 80-150/month",
      "The NHR regime: if you qualify, your effective tax rate on foreign income may be much lower than the standard progressive rates suggest"
    ]
  },
  housingSystem: {
    overview:
      "Portugal's rental market has become extremely competitive, particularly in Lisbon and Porto, where short-term holiday rentals (Alojamento Local) have absorbed a large share of housing stock, reducing availability and pushing up prices for long-term tenants. In Lisbon, popular areas for expats include Santos, Principe Real, and Campo de Ourique for upscale living; Arroios, Intendente, and Graça for more affordable but increasingly trendy options; and Cascais and Oeiras along the coast for families. In Porto, Cedofeita, Bonfim, and Foz do Douro are popular. The Algarve rental market is seasonal, with prices peaking in summer.",
    expectations:
      "Expect to pay two months' rent upfront (first month plus one month's security deposit) for long-term contracts. Landlords frequently request proof of income, employment contracts, and NIF. Furnished apartments are more common in Lisbon and tourist areas; unfurnished is standard in traditional Portuguese rentals. Check the Energia certificate (building energy rating) — anything below B-minus likely means poor insulation and cold winters. Test water pressure, look for mold and humidity stains (common in older buildings), and confirm whether the property has gas or electric water heating. Platforms like Idealista, Imovirtual, and OLX are the main listing sites; Facebook groups (e.g., 'Expats in Lisbon — Housing') are also active."
  },
  healthcareReality:
    "Portugal's SNS (Serviço Nacional de Saúde) provides universal public healthcare to all registered residents. GP consultations at the Centro de Saúde cost approximately EUR 4.50, emergency room visits are EUR 18 (waived for pregnant women, children, and low-income residents), and prescriptions are subsidized. Quality of care is generally good, especially in Lisbon's Hospital de Santa Maria, Hospital de São João in Porto, and the Centro Hospitalar Universitário do Algarve. However, the system is under severe strain: wait times for specialist appointments (dermatology, orthopedics, mental health) can exceed three to six months, and many public health centers lack assigned family doctors, leaving patients reliant on walk-in urgency care. As a result, approximately 30% of residents maintain supplemental private health insurance (seguros de saúde, EUR 30-100/month depending on age and coverage) for faster access to specialists. Major private hospital networks include CUF, Luz Saúde (Hospital da Luz), and Hospital dos Lusíadas. Pharmacies are plentiful, well-stocked, and pharmacists can provide advice and dispense some medications without a formal prescription.",
  digitalLife: {
    overview:
      "Portugal has made significant strides in digital government services through the ePortugal platform, and daily life is increasingly digital — MB WAY has largely replaced cash for peer-to-peer payments, and Multibanco ATMs serve as multipurpose payment terminals for utilities, taxes, and tickets. However, many administrative processes still involve appointments, paper forms, and in-person follow-ups.",
    essentials: [
      "NIF (Número de Identificação Fiscal) — your tax number, needed for virtually everything",
      "MB WAY — the Portuguese mobile payment app, linked to your bank account; essential for splitting bills, paying in shops, and online transactions",
      "SNS 24 app — for scheduling health appointments, accessing your digital health record, and calling the health line",
      "Portal das Finanças (Autoridade Tributária) — the tax authority's online platform for tax returns, e-invoicing (e-fatura), and NIF management"
    ],
    whatSurprisesNewcomers: [
      "The NIF bottleneck: almost nothing can happen without it, and obtaining one can involve queue-times at Finanças offices or paying a service to expedite the process.",
      "E-fatura system: Portugal requires businesses to issue electronic invoices linked to your NIF. You should provide your NIF at every purchase (restaurants, supermarkets, services) to build your e-fatura record, which feeds into your annual tax return and can result in deductions.",
      "AIMA (immigration agency) digital systems are notoriously unreliable. Online appointment scheduling crashes frequently, phone lines ring endlessly, and many applicants resort to showing up in person at dawn to queue.",
      "Multibanco machines (ATMs) do far more than dispense cash — you can pay utility bills, mobile top-ups, tax obligations, and even concert tickets at any ATM using reference numbers provided by billers."
    ]
  },
  culture: {
    text: "Portuguese culture is warm, family-centered, and socially conservative in a gentle way. Conversations are polite, and direct confrontation is generally avoided — the Portuguese prefer to find diplomatic workarounds rather than say 'no' directly. Coffee culture is central to daily life: an espresso (called 'bica' in Lisbon, 'cimbalino' in Porto) is consumed quickly, often standing at the counter, multiple times per day, and costs EUR 0.70-1.00. Mealtimes are sacred — lunch (almoço) is the main meal and often extends from 12:30 to 2:00 PM, while dinner (jantar) rarely starts before 8:00 PM. Fado music, with its themes of saudade (a deep, nostalgic longing), is the emotional soundtrack of the nation and a UNESCO Intangible Cultural Heritage. The Portuguese take immense pride in their maritime heritage, their cuisine (bacalhau/codfish has allegedly 365 recipes, one for each day of the year), and their football (Benfica, Porto, and Sporting are not just clubs but tribal identities).",
    highlights: [
      "Greetings: Two kisses on the cheeks (right cheek first) for women greeting women or men; a firm handshake for men greeting men. First names are used quickly once introduced.",
      "Dining etiquette: The 'couvert' (bread, butter, olives, and sometimes cheese or pâté) brought to your restaurant table is NOT free — it is charged if you touch it. Wave it away immediately if you do not want to pay EUR 2-5 for items you did not order.",
      "Coffee culture: Order a 'café' or 'bica' for espresso, 'meia de leite' for half coffee/half milk, or 'galão' for a milky coffee in a tall glass. Drinking takeaway coffee while walking is uncommon — Portuguese coffee culture is about the pause.",
      "Patience with service: Waiters in Portugal will not rush you or bring the bill unsolicited. When you are ready to pay, make eye contact and say 'a conta, por favor.' This is considered respectful, not neglectful.",
      "Speaking Spanish to a Portuguese person: Do not do this. Despite the linguistic similarity, speaking Spanish to locals is considered rude and dismissive. Use English if you do not speak Portuguese — it will be received far better."
    ]
  },
  transportationMobility:
    "Lisbon's public transport network includes the Metro (4 lines), extensive bus routes (Carris), the iconic Tram 28 (tourist trap but functional), suburban trains (CP Urbanos to Cascais, Sintra, and Setúbal), and ferries across the Tagus to Almada and Barreiro. Porto has a modern Metro system (6 lines), buses (STCP), and trains. The Viva Viagem card in Lisbon and Andante card in Porto are the rechargeable transit passes. The Navegante Metropolitano pass (EUR 40/month in Lisbon) offers unlimited travel across all operators in the metropolitan area — excellent value. Between cities, CP (Comboios de Portugal) operates intercity and Alfa Pendular high-speed trains: Lisbon to Porto takes about 2 hours 45 minutes. Rede Expressos runs the intercity bus network, often cheaper than trains. Driving in Portuguese cities requires nerves of steel: aggressive tailgating, creative parking, and roundabout etiquette (yield to traffic inside the roundabout) are the norm. Tolls on motorways (autoestradas) use electronic toll systems (Via Verde) that require registration — rental cars often have temporary toll devices, but check before you drive.",
  internationalConnectivity:
    "Lisbon Humberto Delgado Airport (LIS) is the primary international gateway, with direct flights to all major European capitals, North America (New York, Boston, Toronto, Montreal), South America (São Paulo, Rio de Janeiro), and Africa (Luanda, Maputo, Cape Verde). TAP Air Portugal is the flag carrier and a Star Alliance member, with a strong transatlantic network. Porto Francisco Sá Carneiro Airport (OPO) handles significant European traffic, especially budget carriers (Ryanair, easyJet). Faro Airport (FAO) serves the Algarve and is heavily seasonal. Flight times to London are approximately 2.5 hours; to New York, roughly 7.5 hours. Portugal's position on Europe's western edge makes it a natural bridge to the Americas and Africa, with strong historical and cultural ties to Brazil, Angola, Mozambique, and Cape Verde.",
  travelExploration:
    "Portugal offers extraordinary diversity within a compact area (roughly 580 km from north to south). Weekend trips from Lisbon include the fairy-tale palaces of Sintra (30 minutes by train), the surfing capital Ericeira (45 minutes by car), the medieval walled town of Óbidos, and the beaches of Comporta and Arrábida. From Porto, explore the Douro Valley's terraced vineyards (UNESCO World Heritage), the Minho region's vinho verde country, and the historic university city of Coimbra. The Algarve coast features dramatic cliffs, hidden coves (Praia da Marinha, Benagil Cave), and year-round mild weather. The Azores archipelago (2.5-hour flight from Lisbon) offers volcanic landscapes, whale watching, and some of Europe's most dramatic natural scenery. Madeira (1.5 hours from Lisbon) is a subtropical island paradise famous for levada walks, Funchal's old town, and its New Year's Eve fireworks.",
  considerations: [
    "Cold Houses (Casas Frias): Most Portuguese buildings, especially pre-2000 construction, lack central heating, double glazing, and adequate insulation. Indoor temperatures of 12-15 degrees Celsius are common from November through February. This is the number one complaint from Northern European expats. Budget for portable heaters (EUR 50-200), a dehumidifier (essential to prevent mold), thermal curtains, and warm indoor clothing.",
    "AIMA Bureaucracy: The immigration agency (AIMA, formerly SEF) is notoriously understaffed and backlogged. Residence permit appointments can take three to twelve months to schedule. Phone lines are perpetually busy. Online systems crash during high-demand periods. Hire an immigration lawyer or use a relocation service if you value your sanity. Carry your appointment confirmation and passport at all times as proof of legal status while waiting.",
    "Saudade and Social Pace: The Portuguese concept of saudade — a deep, melancholic longing for something absent — permeates culture, music (fado), and social attitudes. Combined with the relaxed pace of life, this can feel like apathy to task-oriented newcomers. Patience is not optional; it is a survival skill.",
    "Driving Culture: Portuguese drivers are among Europe's most aggressive. Tailgating at high speeds, late lane changes, creative interpretation of parking rules, and horn usage are standard. Roundabouts have specific yielding rules. If you plan to drive, purchase comprehensive insurance and park defensively.",
    "Rising Cost of Living: Portugal's cost of living has increased significantly since 2020, particularly in Lisbon and Porto. The influx of digital nomads, remote workers, and investors (especially post-Golden Visa real estate era) has pushed housing costs beyond what many local salaries can sustain, creating social tension between newcomers and residents. Be sensitive to this dynamic."
  ],
  mistakes: [
    "Speaking Spanish to locals. Portuguese and Spanish are related but distinct languages, and speaking Spanish to a Portuguese person implies you consider their language unimportant. This is genuinely offensive. Always default to English if you do not speak Portuguese — it will be received warmly.",
    "Eating the couvert thinking it is free. The bread, olives, butter, and sometimes cheese or pâté placed on your restaurant table before you order are charged items (EUR 2-5 per person). If you touch them, you pay. Say 'não, obrigado' immediately if you do not want them.",
    "Expecting quick service at restaurants. Portuguese dining is a social experience, not a transaction. Your waiter will not hover, will not rush you, and will not bring the bill until you explicitly request it. If you want to pay, make eye contact and say 'a conta, por favor.' Getting visibly impatient will not speed anything up.",
    "Ignoring the noise regulations (horário de silêncio). Noise is legally prohibited between 11:00 PM and 7:00 AM on weekdays and between 11:00 PM and 9:00 AM on weekends and holidays. In apartments, this is strictly enforced — neighbors will call the police (PSP) for persistent violations, and fines can exceed EUR 250.",
    "Underestimating the NIF dependency chain. Without a NIF, you cannot open a bank account, sign a rental contract, register for healthcare, or set up utilities. Without a bank account, you cannot pay rent or receive salary. Without a rental contract, you cannot register your address. This circular dependency is the first major bureaucratic challenge — get your NIF before or immediately upon arrival."
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency (INEM / Police / Fire)',
      description: 'Pan-European emergency number for police, ambulance, and fire services. Operators speak Portuguese and English. Free from any phone, including without a SIM card.'
    },
    {
      number: '808 24 24 24',
      service: 'SNS 24 (Health Line)',
      description: 'National health information and triage line. Call before going to the emergency room for non-life-threatening issues — they will assess your condition and direct you to the appropriate level of care, potentially saving hours of waiting.'
    },
    {
      number: '144',
      service: 'Social Emergency Line (LNES)',
      description: 'National Social Emergency Line for situations of domestic violence, child abuse, homelessness, and social crisis. Available 24/7, confidential.'
    }
  ],
  sources: [
    {
      name: 'AIMA (Agência para a Integração, Migrações e Asilo)',
      category: 'Immigration',
      description: 'The government agency responsible for immigration, residence permits, asylum, and integration. Formerly known as SEF. Handles all residence permit applications and renewals.',
      link: 'https://aima.gov.pt/pt'
    },
    {
      name: 'ePortugal',
      category: 'Government Services',
      description: 'Central digital portal for all Portuguese public services including NIF applications, business registration, social security, and civil documentation.',
      link: 'https://eportugal.gov.pt/en'
    },
    {
      name: 'Portal das Finanças (Autoridade Tributária)',
      category: 'Taxation',
      description: 'The tax authority\'s online portal for NIF management, tax returns (IRS), e-fatura invoicing, and tax payments.',
      link: 'https://www.portaldasfinancas.gov.pt/'
    },
    {
      name: 'Visit Portugal',
      category: 'Tourism & Culture',
      description: 'Official tourism website with comprehensive travel information, regional guides, and cultural event listings.',
      link: 'https://www.visitportugal.com/en'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to Portugal, consult the Portuguese Ministry of Foreign Affairs (Ministério dos Negócios Estrangeiros) or a Portuguese embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/portugal',
    mfaLink: 'https://portaldiplomatico.mne.gov.pt/en/'
  },
  serviceDirectory: {
    title: "Service Directory - Portugal",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Portugal.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance with residence permits, D7/D8 visa applications, Golden Visa processing, and AIMA bureaucracy navigation.",
        providers: [
          { name: "Abreu Advogados", link: "https://www.abreuadvogados.com" },
          { name: "PLMJ", link: "https://www.plmj.com" },
          { name: "Fragomen Portugal", link: "https://www.fragomen.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms assisting with long-term rentals and property purchases in Lisbon, Porto, and the Algarve.",
        providers: [
          { name: "Idealista Portugal", link: "https://www.idealista.pt" },
          { name: "RE/MAX Portugal", link: "https://www.remax.pt" },
          { name: "Engel & Voelkers Portugal", link: "https://www.engelvoelkers.com/pt" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Firms advising on Portuguese tax law, NHR regime optimization, cross-border income, and freelancer tax obligations.",
        providers: [
          { name: "PwC Portugal", link: "https://www.pwc.pt" },
          { name: "EY Portugal", link: "https://www.ey.com/pt_pt" },
          { name: "Deloitte Portugal", link: "https://www2.deloitte.com/pt" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including shipping, customs handling, and storage.",
        providers: [
          { name: "Crown Relocations Portugal", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "AGS Worldwide Movers Portugal", link: "https://www.agsmovers.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Portuguese language schools and programs, from beginner to advanced, including CIPLE exam preparation.",
        providers: [
          { name: "CIAL Centro de Línguas", link: "https://www.cial.pt" },
          { name: "Lusa Language School", link: "https://www.lusaschool.com" },
          { name: "Berlitz Portugal", link: "https://www.berlitz.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private hospital networks and health insurance providers commonly used by expats for faster access to specialists.",
        providers: [
          { name: "CUF Hospitals", link: "https://www.cuf.pt" },
          { name: "Hospital da Luz (Luz Saúde)", link: "https://www.hospitaldaluz.pt" },
          { name: "Hospital dos Lusíadas", link: "https://www.lusiadas.pt" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms and employment platforms connecting professionals with Portuguese and multinational employers.",
        providers: [
          { name: "Michael Page Portugal", link: "https://www.michaelpage.pt" },
          { name: "Hays Portugal", link: "https://www.hays.pt" },
          { name: "Landing.jobs (Tech)", link: "https://landing.jobs" }
        ]
      }
    ]
  }
};
