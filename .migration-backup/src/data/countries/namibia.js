export const namibia = {
  id: 'namibia',
  slug: 'namibia',
  name: 'Namibia',
  region: 'Africa',
  complexity: 'Low',
  languages: ['English', 'Afrikaans', 'German', 'Oshiwambo'],
  shortDescription: 'Vast, quiet, and well-ordered, with Africa\'s most accessible desert landscapes and a new digital nomad visa.',
  heroImage: 'https://images.unsplash.com/photo-1579885487896-abc1a9ebb77b',
  flagAlt: 'Flag of Namibia',
  atAGlance: "Namibia is one of Africa's quiet secrets: just under three million people across 825,000 square kilometres, making it the second-least densely populated country on earth after Mongolia. The result is a lifestyle of wide horizons, minimal traffic, and surprising solitude. Windhoek, the capital, is calm and well-ordered - a mid-sized city of roughly 430,000 built on seven hills, with a distinct German colonial architectural legacy visible in the Christuskirche and the Tintenpalast (parliament). English is the sole official language, but Afrikaans is widely spoken, German persists among a small but visible population, and indigenous languages - Oshiwambo, Otjiherero, Khoekhoe, Rukwangali, and others - structure life beyond the capital. The Namibian dollar (NAD) is pegged 1:1 to the South African rand, which circulates alongside NAD as legal tender, and the Common Monetary Area with South Africa, Lesotho, and Eswatini integrates banking and payments regionally. Namibia launched its Digital Nomad Visa in late 2022, making it one of the first African countries with a formal remote-worker programme, and the small expatriate professional community benefits from a functional public sector, strong internet backbones, and administration that leans efficient by regional standards. The country has navigated a steady political continuity since the death of President Hage Geingob in 2024. Beyond the capital, Namibia opens into the Namib Desert, Skeleton Coast, Etosha National Park, Fish River Canyon, the Caprivi (Zambezi) Strip, and some of the darkest night skies on the planet - a natural portfolio that defines both national identity and the leisure rhythms of life here.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 90 days (visa-free for many)',
    costOfLiving: 'Low-Medium',
    primaryLanguages: 'English (Official), Afrikaans, German, Oshiwambo',
  },
  visas: [
    {
      name: 'Digital Nomad Visa',
      targetAudience: 'Remote Workers, Freelancers',
      useCase: 'Launched in October 2022, this visa allows foreign nationals working remotely for employers or clients outside Namibia to live in the country for up to 6 months. Requires proof of a minimum monthly income (around USD 2,000 for the primary applicant plus additional amounts for dependents), valid health insurance, and a clean criminal record. Administered by the Ministry of Home Affairs, Immigration, Safety and Security.',
      duration: '6 months (not renewable on-country; requires re-application)',
      link: 'https://investnamibia.com.na/namibia-digital-nomad-visa/'
    },
    {
      name: 'Employment Permit',
      targetAudience: 'Employed Professionals',
      useCase: 'For foreign nationals with a confirmed job offer from a Namibian employer. The employer must demonstrate that the role could not be filled by a Namibian citizen or permanent resident, typically through advertising and Labour Commissioner engagement. Issued by the Ministry of Home Affairs, Immigration, Safety and Security.',
      duration: 'Up to 2 years, renewable',
      link: 'https://www.mhaiss.gov.na/'
    },
    {
      name: 'Investor Permit (Business / Self-Employment)',
      targetAudience: 'Investors, Entrepreneurs',
      useCase: 'For foreign nationals investing in or running a registered Namibian business. Typically requires a minimum investment (guideline around NAD 2 million, subject to change and sector), a business plan, and registration with BIPA (Business and Intellectual Property Authority). Investment Namibia and the Namibia Investment Promotion and Development Board support applicants.',
      duration: 'Up to 4 years, renewable',
      link: 'https://nipdb.com/'
    },
    {
      name: 'Visa-Free Entry & Visa-on-Arrival',
      targetAudience: 'Tourists, Short-term Visitors',
      useCase: 'Many nationalities (EU, UK, US, Commonwealth) enter visa-free for up to 90 days. SADC citizens (Southern African Development Community) move under regional free-movement protocols that simplify entry from neighbouring states. Since 2025, Namibia has also introduced visa-on-arrival for a broader list of nationalities at a fee. Covers business, family, and leisure visits; employment is not permitted.',
      duration: 'Up to 90 days',
      link: 'https://www.mhaiss.gov.na/'
    }
  ],
  requirements: [
    {
      title: 'Residence Permit',
      explanation: 'The physical residence document issued by the Ministry of Home Affairs, Immigration, Safety and Security once an employment, investor, or study permit is approved. Confirms long-term resident status.',
      importance: 'The residence permit is what you produce for banks, landlords, and government offices to prove you are more than a visitor. It is tied to your underlying employment, investment, or study basis, so changes there require re-engagement with the Ministry. Allow several weeks for initial issuance and start renewals well before expiry.',
      link: 'https://www.mhaiss.gov.na/'
    },
    {
      title: 'Tax Registration with NamRA',
      explanation: 'The Namibia Revenue Agency (NamRA) handles individual and corporate tax registration, PAYE, and filings. Employees receive a taxpayer number through their employer; self-employed and investor-category residents register directly.',
      importance: 'Correct NamRA registration lets employers withhold PAYE properly and lets the self-employed invoice, file, and remain compliant. Personal income tax is progressive, capped at 37% on the highest bands. NamRA has moved increasingly online via the Integrated Tax Administration System (ITAS).',
      link: 'https://www.namra.org.na/'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a bank account requires your passport, valid residence permit (or Digital Nomad Visa), proof of address, and employment or investor documentation. Major banks include Bank Windhoek, FNB Namibia, Standard Bank Namibia, and Nedbank Namibia.',
      importance: 'A Namibian bank account is essential for receiving salary, paying rent, and transacting within the Common Monetary Area (with South Africa, Lesotho, and Eswatini). Because NAD is pegged 1:1 to ZAR and the rand is accepted everywhere in Namibia, cross-border movement is unusually seamless. USD and EUR accounts are available for FX management.',
      link: 'https://www.bon.com.na/'
    },
    {
      title: 'SIM Registration',
      explanation: 'Since 2023, Namibia has required all SIM cards to be registered to an identified user. Providers include MTC (the dominant network), Telecom Namibia (TN Mobile), and Paratus for fixed/enterprise. Registration needs your passport and proof of residence or visa.',
      importance: 'Without a registered SIM, your service can be suspended, cutting off OTPs for banking, e-wallets, and government portals. Mobile data pricing is reasonable by regional standards, and MTC\'s 4G and expanding 5G footprint in Windhoek and Walvis Bay deliver solid speeds for remote work.',
      link: 'https://www.mtc.com.na/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Namibia's economy runs on mining (uranium, diamonds, gold, copper, and increasingly green hydrogen and oil), fisheries, agriculture, tourism, logistics via the Walvis Bay corridor, and financial services. Windhoek hosts major local corporates (Namibia Breweries, MTC, Bank Windhoek, FNB Namibia) and most ministries and embassies; Walvis Bay is the logistics and fisheries capital. Expatriate opportunities concentrate in mining and energy (Rossing, Husab, Orange Basin oil, green hydrogen projects), logistics, safari operators, development organisations, and senior specialist roles in banking and consulting.",
    whereToLook: [
      "LinkedIn (the main professional platform)",
      "The Namibian and Namibian Sun classifieds (local newspapers with active recruitment sections)",
      "Careers24 Namibia and Jobs Namibia (online job boards)",
      "Direct career pages of mining companies (Rossing, Husab, B2Gold Namibia), Namibia Breweries, MTC, and major banks",
      "Donor and development sector: UN Jobs, ReliefWeb, Devex, plus GIZ, USAID partners, and the Millennium Challenge Corporation follow-on programmes"
    ],
    realityChecks: [
      "Namibianisation is an active policy. Employment permits are granted where the skill is genuinely scarce, and roles open to foreigners tend to be senior, technical, or project-specific (particularly in new oil and green hydrogen investments).",
      "Salary packages for senior expatriates typically include housing allowance, school fees, medical aid, and home leave; these benefits can materially exceed the headline salary.",
      "Local professional salaries in Windhoek for mid-level roles typically range from NAD 25,000-80,000 per month, with senior mining and banking roles going considerably higher.",
      "Networking is small-town by design. The professional community is compact, referrals are common, and reputation travels fast. Behaviour matters more than it might in a bigger city."
    ]
  },
  salaryReality: {
    overview:
      "Namibia is more affordable than South Africa for housing and domestic services, while sharing the SACU/CMA trade and banking landscape. Salaries are lower in absolute terms than in Johannesburg or Cape Town, but so are the main costs. Anyone earning foreign-currency income - particularly via the Digital Nomad Visa - finds Windhoek exceptionally comfortable.",
    realityChecks: [
      "PAYE in Namibia is progressive, rising to 37% for the highest earners. NamRA handles filings through the ITAS online system.",
      "Social security contributions (SSC) are modest - a small employee and employer contribution against qualifying income, covering maternity, sick, and death benefits.",
      "Housing in Windhoek's preferred neighbourhoods (Klein Windhoek, Eros, Ludwigsdorf, Olympia, Suiderhof) ranges from NAD 10,000-30,000+ per month for 2-3 bedroom homes, with premium gated estates going higher.",
      "Medical aid is effectively expected for a good quality of life; Namibia Medical Care, PSEMAS (public sector), Bankmed, and Momentum Namibia are among the main schemes."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Medical aid premiums - NAD 1,500-6,000+ per month depending on plan and dependents",
      "School fees at international and semi-private schools (Windhoek International School, Windhoek Gymnasium, Deutsche Höhere Privatschule) - typically NAD 50,000-150,000+ per child per year for international tracks",
      "Vehicle and fuel costs given Namibia's vast distances - a reliable 4x4 is a practical necessity if you plan to travel, and fuel budgets grow quickly outside the city",
      "Security costs are lower than in South Africa but still meaningful: estate levies, alarm monitoring, and perimeter upgrades feature in most middle-class setups"
    ]
  },
  housingSystem: {
    overview:
      "Windhoek's housing market is straightforward compared with its southern neighbour. Popular neighbourhoods include Klein Windhoek (central, leafy, diplomatic), Eros (established, spacious), Ludwigsdorf (upscale, gated), Olympia (family-friendly), and Suiderhof. Coastal life centres on Swakopmund (calm, German-heritage) and Walvis Bay (port town, lagoons, flamingos). Leases are typically 12 months; deposits of 1-2 months' rent are standard.",
    expectations:
      "Use reputable agents (Pam Golding Namibia, Seeff Properties Namibia, RE/MAX Windhoek) and listing platforms (Property.com.na, MyProperty Namibia). Security features are lighter than in South Africa but still present - electric fences, alarms, and armed response contracts are common for standalone houses. Furnished rentals and serviced apartments are widely available for Digital Nomad Visa holders, particularly in Klein Windhoek and Swakopmund. Verify utilities are connected and bills up to date before moving in - account transfers take a few working days."
  },
  healthcareReality:
    "Namibia's healthcare system is two-tiered in the regional pattern: a public system anchored by Windhoek Central Hospital and Katutura State Hospital that covers the majority of the population, and a private system that most expatriates use. In Windhoek, the Mediclinic Windhoek, Lady Pohamba Private Hospital, and Roman Catholic Hospital are the main private facilities. In Swakopmund, Welwitschia Hospital and Cottage Mediclinic serve the coast. For complex or specialist care, patients are often referred to Cape Town or Johannesburg, and medical evacuation insurance is standard in expatriate packages. Medical aid schemes (Namibia Medical Care, Bankmed Namibia, Momentum Namibia, PSEMAS for public sector) provide the insurance layer; international schemes (Cigna, Bupa, AXA) are used by senior expatriates. Pharmacies (Dis-Chem, Clicks, local chains) are well-stocked across urban areas. Malaria risk is concentrated in the north and Caprivi region; Windhoek and the central highlands are generally malaria-free. Yellow fever certification is required only if arriving from a yellow fever country.",
  digitalLife: {
    overview:
      "Namibia is quietly one of the better digital environments on the continent for remote workers: fibre-to-the-home and LTE coverage in Windhoek and coastal towns are solid, Starlink is legally cleared and widely used, and the Digital Nomad Visa framework is paired with a functional ecosystem of co-working spaces (Regus, the Commons, smaller independents). Mobile money is less developed than in East Africa, but the banking system - integrated with South Africa through the Common Monetary Area - provides strong card, EFT, and app-based payments.",
    essentials: [
      "An MTC SIM card (the dominant network) or TN Mobile, with data bundles sized to your needs",
      "A Namibian or cross-border CMA bank account with a strong mobile app (FNB and Bank Windhoek are widely used)",
      "Ride-hailing via LEFA, the main local app; Bolt is not as widely used here as in other African capitals",
      "A reliable fibre provider (MTC Fibre, Paratus, Telecom Namibia) with a mobile or Starlink backup for remote work continuity"
    ],
    whatSurprisesNewcomers: [
      "South African rand circulates alongside Namibian dollars at a 1:1 value; you will regularly receive change in one and pay in the other. Plan FX transfers accordingly.",
      "Card acceptance is strong even at small establishments; tapping a card in a small Swakopmund cafe works as it would in Cape Town.",
      "Mobile networks are centred on MTC; coverage on long desert drives is patchier than most newcomers expect, so a satellite communicator is worth considering for serious remote travel.",
      "Public services, while not perfect, tend to be more predictable than in much larger regional economies - a meaningful quality-of-life factor."
    ]
  },
  culture: {
    text: "Namibian culture blends indigenous heritage (Ovambo, Herero, Damara, Nama, Himba, San, Kavango, and others) with an unmistakable German and Afrikaner influence that shapes architecture, surnames, food (Windhoek Lager, bratwurst, apfelstrudel alongside braai and biltong), and several professional institutions. Windhoek feels more relaxed than Johannesburg and more structured than many regional capitals, with a conspicuous emphasis on order, manners, and time-keeping in German-heritage businesses. Greetings matter - a handshake, direct eye contact, and a calm 'Good morning' or 'Goeiemore' work across communities. Namibians are reserved on first contact and warm once familiar; rushing social relationships tends to backfire. Sundays are quiet almost everywhere. The land and its wildlife are matters of real national pride; conservation achievements, including community-based wildlife conservancies, are central to how Namibians see themselves globally.",
    highlights: [
      "Sunday quiet: many shops and services are closed or on reduced hours. Plan grocery shopping and errands for Saturday, not Sunday afternoon.",
      "Afrikaans, German, and indigenous languages weave through daily life even though English is official. A 'Lekker' or 'Dankie' (Afrikaans for nice/thanks) is gracious and natural.",
      "Driving culture is calmer than in South Africa, but gravel roads are ubiquitous beyond the main arteries. Reduce tyre pressure slightly for long gravel stretches and always carry water.",
      "Braai (barbecue) culture is central here as in South Africa. Being invited to a braai signals genuine welcome; contributing meat and drinks is the norm.",
      "Respect for Himba, San, and other indigenous cultures when travelling in rural areas. Ask permission before photographing people and consider small tips or purchases from community crafts."
    ]
  },
  transportationMobility:
    "Namibia is a driving country. Windhoek's public transport is limited - shared taxis (often sedans running fixed routes) serve commuting locals, but most residents drive their own vehicles. Ride-hailing via LEFA and a growing set of local apps works within Windhoek, while Uber and Bolt have limited local presence. The national road network is excellent on the main B1, B2, and B6 corridors, with well-maintained tarmac between Windhoek, Swakopmund, Walvis Bay, Otjiwarongo, Keetmanshoop, and the Namibian-South African border. Beyond the paved network, gravel roads cover vast areas; a high-clearance 2WD is sufficient for main gravel, but a 4x4 is recommended for national park interiors. Intercity coaches (Intercape, TransNamib bus service) run between main cities, and the TransNamib passenger rail service operates a small network but is primarily used for freight. Domestic flights from Eros Airport (Windhoek) connect to Walvis Bay, Luderitz, and safari airstrips via FlyNamibia, Westair, and charter operators. Distances are large: Windhoek to Swakopmund is 350km (4 hours), to Etosha 430km (5 hours), to Fish River Canyon 700km (8 hours).",
  internationalConnectivity:
    "Hosea Kutako International Airport (WDH), 45km outside Windhoek, is Namibia's main international gateway, with direct flights to Johannesburg (South African Airways, Airlink - 2 hours, the most frequent connection), Cape Town (Airlink), Frankfurt (Eurowings Discover, seasonal), Addis Ababa (Ethiopian), Doha (Qatar Airways), and select regional destinations. FlyNamibia operates regional flights to Victoria Falls and other African cities. Walvis Bay Airport (WVB) handles coastal flights and selected regional routes. Connections to Europe and the wider world typically route via Johannesburg, Doha, Addis Ababa, or Frankfurt. Flight time to Johannesburg is 2 hours, to Cape Town 2 hours, to London roughly 11 hours via a Gulf or European hub.",
  travelExploration:
    "Namibia's travel portfolio is extraordinary. Sossusvlei and Deadvlei in the Namib-Naukluft - towering red dunes and ancient camel-thorn skeletons against white clay pans - are among Africa's most photographed landscapes. Etosha National Park offers big-game viewing around a massive salt pan, with waterholes concentrating wildlife in the dry season. Swakopmund combines German colonial architecture with adventure sports (sandboarding, quad biking, skydiving over the dunes). Walvis Bay's lagoon is world-class for flamingos and pelicans. Fish River Canyon, in the south, is the second-largest on earth and hosts the famous 85km trail in the cooler months. The Skeleton Coast rewards self-reliant travellers, and Damaraland and the Caprivi (Zambezi) Strip extend the portfolio. The Hoba meteorite near Grootfontein is the largest known, and the NamibRand International Dark Sky Reserve hosts some of the darkest skies anywhere.",
  considerations: [
    "Distances and self-reliance: Namibia is vast and empty. For any serious road trip, carry extra water, extra fuel, a well-maintained vehicle, and a basic recovery kit. Mobile coverage drops in large areas.",
    "Pegged currency: NAD is 1:1 with ZAR, which simplifies cross-border life with South Africa but means Namibian monetary policy tracks the South African Reserve Bank's.",
    "Medical evacuation: for serious conditions, referrals to Cape Town or Johannesburg are routine. Evacuation insurance is standard in expatriate cover and worth having for Digital Nomad Visa holders too.",
    "Pace of life: Windhoek and coastal towns are calmer than many expatriates expect. If you need big-city buzz, plan regular trips to Cape Town or Johannesburg.",
    "Land reform tensions: apartheid-era land distribution remains a live political issue. Most expatriate life is unaffected, but the topic is sensitive in conversation.",
    "Water scarcity: Namibia is arid and water restrictions periodically apply. Gardens, pools, and daily habits should adapt to local conservation norms."
  ],
  mistakes: [
    "Underestimating gravel roads. Driving paved-road speeds on gravel is how rental-car accidents happen. Slow down, reduce tyre pressure, and keep distance between vehicles.",
    "Assuming a South African banking setup covers everything. CMA helps, but most long-term arrangements still need a Namibian account for salary, utilities, and landlord transfers.",
    "Treating the Digital Nomad Visa as a one-year landing pad. It is currently 6 months and not renewable on-country; plan for an exit and re-application if you want continuity.",
    "Ignoring language texture. English is official, but Afrikaans, German, and indigenous languages are deeply present. Basic Afrikaans or Oshiwambo phrases go a long way.",
    "Over-scheduling weekends. Namibians protect rest time and Sundays are genuinely quiet. Leisure here is about space and distance, not dense urban programming."
  ],
  emergency: [
    {
      number: '10111',
      service: 'Namibian Police',
      description: 'Police emergency line, aligned with the broader Southern African numbering. Best-resourced in Windhoek, Swakopmund, Walvis Bay, and other main centres.'
    },
    {
      number: '211 111',
      service: 'Medical Emergency (Windhoek)',
      description: 'Windhoek medical emergency dispatch line. Response times vary significantly outside Windhoek and Walvis Bay; private ambulance through E-Med Rescue 24 and medical aid insurers is often used in parallel.'
    },
    {
      number: '11112',
      service: 'Fire Brigade (Windhoek)',
      description: 'City of Windhoek Fire and Emergency Services. Separate municipal lines apply in Walvis Bay, Swakopmund, and other centres - confirm the local number on arrival.'
    },
    {
      number: '112',
      service: 'Mobile Emergency Number',
      description: 'Accessible from any mobile phone. Routes through the network provider to nearest emergency dispatch, useful when outside a specific service\'s known range.'
    }
  ],
  sources: [
    {
      name: 'Ministry of Home Affairs, Immigration, Safety and Security',
      category: 'Immigration & Visas',
      description: 'The authority for Namibian visas, permits, and residence, including the Digital Nomad Visa, employment permits, and investor permits.',
      link: 'https://www.mhaiss.gov.na/'
    },
    {
      name: 'Namibia Revenue Agency (NamRA)',
      category: 'Tax',
      description: 'Manages individual and corporate taxation, PAYE, VAT, customs, and the Integrated Tax Administration System (ITAS) online portal.',
      link: 'https://www.namra.org.na/'
    },
    {
      name: 'Namibia Investment Promotion and Development Board (NIPDB)',
      category: 'Investment',
      description: 'Lead agency for investment facilitation, business environment reforms, and the country\'s Digital Nomad Visa framework alongside Home Affairs.',
      link: 'https://nipdb.com/'
    },
    {
      name: 'Bank of Namibia',
      category: 'Banking & FX',
      description: 'The central bank, responsible for banking regulation, payments, and the NAD-ZAR peg within the Common Monetary Area.',
      link: 'https://www.bon.com.na/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Namibia, consult the Namibian Ministry of International Relations and Cooperation or a Namibian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/namibia',
    mfaLink: 'https://mirco.gov.na/'
  },
  serviceDirectory: {
    title: "Service Directory - Namibia",
    description: "Examples of commonly used service providers people often interact with when relocating to Namibia.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Law firms handling employment permits, investor permits, Digital Nomad Visa applications, and corporate immigration matters.",
        providers: [
          { name: "ENSafrica Namibia", link: "https://www.ensafrica.com" },
          { name: "Koep & Partners", link: "https://koep.com.na" },
          { name: "Engling, Stritter & Partners", link: "https://www.esplaw.com.na" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies handling rentals and sales in Windhoek, Swakopmund, and Walvis Bay, including furnished expatriate housing.",
        providers: [
          { name: "Pam Golding Properties Namibia", link: "https://www.pamgolding.co.na" },
          { name: "Seeff Properties Namibia", link: "https://www.seeff.com" },
          { name: "RE/MAX Namibia", link: "https://www.remax.com.na" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Advisors familiar with NamRA compliance, PAYE, VAT, and cross-border structuring between Namibia and the CMA/SADC region.",
        providers: [
          { name: "PwC Namibia", link: "https://www.pwc.com/na" },
          { name: "Deloitte Namibia", link: "https://www2.deloitte.com/na" },
          { name: "Grant Thornton Namibia", link: "https://www.grantthornton.com.na" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation providers handling shipping via Walvis Bay and cross-border moves with South Africa.",
        providers: [
          { name: "Crown Relocations Namibia", link: "https://www.crownrelo.com" },
          { name: "Elliott International Namibia", link: "https://www.elliottmobility.com" },
          { name: "Allied Pickfords Namibia", link: "https://www.alliedpickfords.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Tutors and institutes offering Afrikaans, German, and indigenous language courses for newcomers integrating into Namibian life.",
        providers: [
          { name: "Goethe-Institut Namibia", link: "https://www.goethe.de/ins/na/en/index.html" },
          { name: "Alliance Francaise Windhoek", link: "https://www.afwindhoek.org" },
          { name: "Language Connection Namibia", link: "https://languageconnection.com.na" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private hospitals, medical aid schemes, and clinics commonly used by expatriates in Windhoek and at the coast.",
        providers: [
          { name: "Mediclinic Windhoek", link: "https://www.mediclinic.co.na" },
          { name: "Lady Pohamba Private Hospital", link: "https://www.ladypohamba.com.na" },
          { name: "Namibia Medical Care", link: "https://www.nmc.com.na" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and search firms placing international professionals with Namibian employers.",
        providers: [
          { name: "Careers24 Namibia", link: "https://www.careers24.com.na" },
          { name: "Jobs Namibia", link: "https://www.jobs.com.na" },
          { name: "PNet (regional)", link: "https://www.pnet.co.za" }
        ]
      }
    ]
  }
};
