export const tanzania = {
  id: 'tanzania',
  slug: 'tanzania',
  name: 'Tanzania',
  region: 'Africa',
  complexity: 'Medium',
  languages: ['Swahili', 'English'],
  shortDescription: 'East Africa\'s largest economy by geography, home to Kilimanjaro, the Serengeti, and the Swahili coast.',
  heroImage: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6',
  flagAlt: 'Flag of Tanzania',
  atAGlance: "Tanzania is East Africa's largest country by area and its quiet heavyweight, combining the continent's most iconic safari landscapes, the world's tallest free-standing mountain, and a Swahili coastal civilisation that stretches from Tanga in the north through Dar es Salaam to the Zanzibar Archipelago. Dar es Salaam, a city of over seven million people on the Indian Ocean, is the commercial capital and the largest city, humming with port activity, financial services, telecoms, and a fast-growing mid-market consumer economy. Dodoma, inland and historically sleepier, became the de facto seat of government in 2019 when parliament formally relocated there; embassies and many multinationals still operate primarily from Dar es Salaam. Arusha, in the north, is the safari capital and hosts the East African Community headquarters. Zanzibar - the semi-autonomous archipelago - has its own government, its own immigration rules for residence and work, and its own digital nomad visa framework, so the exact rules depend on whether you are based on the mainland or in Zanzibar. Swahili (Kiswahili) is the national language and a genuine source of pride; it is the language of parliament, primary education, and daily life. English is widely used in tertiary education, business, and the tourism industry. The currency is the Tanzanian shilling (TZS), and while the macroeconomic story has been more stable than many regional peers, electricity reliability in Dar es Salaam still requires backup infrastructure for any serious business. The country's culture is warm, comparatively relaxed by East African standards, and deeply shaped by the Indian Ocean trading heritage - Swahili, Arab, Indian, and African influences are visible in food, architecture, and music.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: '90 days (visa or visa-free depending on nationality)',
    costOfLiving: 'Low-Medium',
    primaryLanguages: 'Swahili (Kiswahili), English',
  },
  visas: [
    {
      name: 'Class A Work Permit (Investor / Self-Employed)',
      targetAudience: 'Investors, Self-Employed Professionals',
      useCase: 'The Tanzanian work permit system is structured into lettered classes. Class A covers investors and self-employed foreigners, typically routed through the Tanzania Investment Centre (TIC) with minimum capital thresholds. Pairs with a Class C residence permit on the immigration side.',
      duration: '2 years, renewable',
      link: 'https://www.tic.go.tz/'
    },
    {
      name: 'Class B Work Permit + Residence Permit (Employment)',
      targetAudience: 'Employed Foreign Professionals',
      useCase: 'Class B is the standard track for foreign nationals employed by a Tanzanian company. Requires a work permit from the Labour Commissioner, then a residence permit from the Tanzania Immigration Services Department. Employer-sponsored and tied to a specific role; subject to localisation caps.',
      duration: '2 years, renewable',
      link: 'https://immigration.go.tz/'
    },
    {
      name: 'Class C Work Permit (Missionaries, Researchers, Students, Family)',
      targetAudience: 'Missionaries, Researchers, Students, Dependants',
      useCase: 'Class C covers missionaries, researchers, students, and accompanying family members of Class A or B holders. Sponsoring institution or principal permit holder is required. Often the route used by NGO and academic-sector arrivals not on a standard employment contract.',
      duration: '2 years, renewable',
      link: 'https://immigration.go.tz/'
    },
    {
      name: 'Zanzibar Digital Nomad (Electronic) Residence Permit',
      targetAudience: 'Remote Workers Based in Zanzibar',
      useCase: 'Zanzibar\'s dedicated digital nomad framework, administered by the Zanzibar Commission for Tourism and the Zanzibar Immigration Department. Targets remote workers with foreign employers or clients, requires proof of income and health insurance, and allows long-term residence in the archipelago. Distinct from mainland Tanzania permits, since Zanzibar runs its own immigration regime.',
      duration: 'Up to 2 years, renewable',
      link: 'https://zanzibartourism.go.tz/'
    },
    {
      name: 'Certificate of Temporary Assignment (CTA)',
      targetAudience: 'Short-Term Foreign Workers',
      useCase: 'A distinctive Tanzanian instrument for short-term foreign assignments (typically up to six months) that do not warrant a full Class B work permit. Used for project work, equipment commissioning, audits, and similar bounded engagements. Issued by the Labour Commissioner.',
      duration: 'Up to 6 months',
      link: 'https://www.kazi.go.tz/'
    },
    {
      name: 'East Africa Tourist Visa',
      targetAudience: 'Regional Tourists',
      useCase: 'A multi-entry visa for Kenya, Uganda, and Rwanda only. Tanzania is not currently part of this scheme, so travellers combining a Tanzania safari with the broader region typically need a separate Tanzania e-visa alongside the EATV.',
      duration: '90 days (Kenya/Uganda/Rwanda only)',
      link: 'https://visa.immigration.go.tz/'
    }
  ],
  requirements: [
    {
      title: 'Work Permit (Class A, B, or C)',
      explanation: 'Issued by the Ministry of Labour (Labour Commissioner) on the mainland, and by the Zanzibar Labour Commission for Zanzibar. Tied to a specific employer and role, and must be in place before the residence permit is issued.',
      importance: 'A Tanzanian residence permit is not a standalone document for employed expatriates; it rests on a valid work permit. Changes in employer require a new work permit application. Overstays and mismatches between work permits and actual employment are treated seriously. Allow 4-8 weeks for processing and budget for government and professional fees accordingly.',
      link: 'https://www.kazi.go.tz/'
    },
    {
      title: 'Residence Permit (TISD)',
      explanation: 'The Tanzania Immigration Services Department issues the physical residence permit. For Class B holders, this ties to the work permit; for Class C, to the investment or self-employment basis.',
      importance: 'The residence permit is what you present to banks, landlords, and government offices. It is also necessary for resident rates at national parks and at TANAPA/NCAA attractions - a meaningful saving over the tourist rates that can be several hundred dollars for top parks. Keep a copy on your phone and the original stored safely.',
      link: 'https://immigration.go.tz/'
    },
    {
      title: 'TIN (Tax Identification Number) with TRA',
      explanation: 'Issued by the Tanzania Revenue Authority (TRA). Required for employees (for PAYE), self-employed individuals (for filing), and for property, vehicle, and utility registration.',
      importance: 'A TIN is essential for any formal economic activity. Employed expatriates will see PAYE withheld by the employer; self-employed and investor-category foreigners file through TRA\'s online systems. TRA has continued to digitise its processes, but professional tax advice is wise for anyone with cross-border income or investment structures.',
      link: 'https://www.tra.go.tz/'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a bank account requires your passport, work and residence permits, TIN, proof of address, and often an introduction from an existing account holder. Major banks include CRDB Bank, NMB Bank, NBC, Stanbic Tanzania, Standard Chartered Tanzania, Absa Tanzania, and I&M Bank Tanzania.',
      importance: 'A local account is needed for salary payments, rent, and utility bills. Mobile money (M-Pesa Tanzania, Tigo Pesa, Airtel Money, HaloPesa) is heavily used alongside the banking system for everyday payments and is often faster for peer-to-peer transfers. USD (or other FX) accounts are widely available and practical given TZS volatility.',
      link: 'https://www.bot.go.tz/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Tanzania's economy runs on mining (gold is a major export), agriculture, tourism (safari, Kilimanjaro, Zanzibar), manufacturing, telecoms, financial services, and transport/logistics built around the Port of Dar es Salaam, which serves much of East and Central Africa. Expatriate roles are concentrated in mining (Barrick/Twiga Minerals, AngloGold Ashanti), oil and gas services, international NGOs and donor programmes, tourism and hospitality (major safari operators and island resorts), and senior positions at banks, telecoms (Vodacom, Airtel, Halotel, Tigo), and multinational corporates.",
    whereToLook: [
      "LinkedIn (the principal professional platform)",
      "BrighterMonday Tanzania and MyJobMag Tanzania (local job boards)",
      "Ajira Portal (government roles, mostly citizen-focused but worth monitoring)",
      "Direct career pages of CRDB, NMB, Vodacom, Airtel, TotalEnergies Tanzania, and major safari operators",
      "Development and NGO channels: ReliefWeb, Devex, UN Jobs, UK Aid/FCDO implementing partners"
    ],
    realityChecks: [
      "Tanzanian localisation policy strongly prioritises citizens. Work permits are granted where the skill is genuinely scarce, with caps and sector-specific rules. Junior and mid-level openings are rarely available to foreign nationals.",
      "Senior expatriate packages typically include housing, school fees, medical, security allowance, and home leave. These benefits often make up 40-60% of total compensation.",
      "Local professional salaries in Dar es Salaam range widely by sector; mining and telecoms sit at the higher end, public sector at the lower end.",
      "Swahili is an asset. English handles most business in Dar es Salaam and Arusha, but basic Swahili unlocks trust and rapport in ways few other things do."
    ]
  },
  salaryReality: {
    overview:
      "Salary structures in Tanzania should be read against a relatively stable shilling, moderate inflation, and significant differences between local and international packages. Senior expatriates at mining companies and multinationals can expect total compensation in the USD 80,000-250,000+ per year range, while local professional salaries are typically much lower in USD terms but go further in a lower-cost economy.",
    realityChecks: [
      "PAYE in Tanzania follows a progressive scale up to 30% on the highest income brackets, withheld by employers.",
      "NSSF or PSSSF social security contributions apply to both employee and employer - typically 10% each for NSSF-covered employees against qualifying income.",
      "Housing in Dar es Salaam's preferred expatriate neighbourhoods (Masaki, Oyster Bay, Mikocheni, Msasani Peninsula) ranges from USD 1,500-5,000+ per month for furnished 2-3 bedroom places; Arusha and inland cities are considerably cheaper.",
      "International school fees (International School of Tanganyika, Haven of Peace Academy, Aga Khan Mzizima) typically range from USD 10,000-25,000 per child per year."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Generator, inverter, and water tank infrastructure for Dar es Salaam homes, where TANESCO power is generally decent but not flawless",
      "Domestic staff: cooks, drivers, gardeners, and housekeepers are standard in the expatriate segment and bring employer obligations under Tanzanian labour law",
      "Imported goods at supermarkets (Shoppers, Village Supermarket, Pick n Pay, Game) costing 1.5-3x local products",
      "Regular travel between Dar es Salaam, Arusha, Dodoma, and Zanzibar for business and personal reasons - domestic flights are common"
    ]
  },
  housingSystem: {
    overview:
      "Dar es Salaam's expat housing market is concentrated on the Msasani Peninsula and the adjoining neighbourhoods of Masaki, Oyster Bay, Mikocheni, and Mbezi Beach - coastal, relatively green, with international schools, supermarkets, and restaurants close at hand. Apartments and compound villas dominate; many high-end compounds have shared pools and backup power. In Arusha, Njiro and Usa River are popular; in Zanzibar, Stone Town, Kiwengwa, and the Nungwi-Kendwa strip attract different profiles.",
    expectations:
      "Deposits of 2-3 months' rent are common, and landlords frequently ask for 6 months to a year upfront, particularly in the high-end Dar segment. Use reputable agents (Knight Frank Tanzania, Pam Golding Tanzania, Bushtrackers Properties) or well-known listing groups. Always verify title documents and, for longer-term arrangements, run the lease through a Tanzanian lawyer. Furnished serviced apartments (e.g. Protea Courtyard, Serena Residences) are common for initial landings. Rent is often invoiced in USD at the top end, though TZS payments are increasingly common in compliance with Bank of Tanzania guidance."
  },
  healthcareReality:
    "Tanzania's healthcare system is two-tiered. Public facilities, anchored by Muhimbili National Hospital in Dar es Salaam and Kilimanjaro Christian Medical Centre (KCMC) in Moshi, handle the bulk of care but are resource-constrained. Expatriates and middle-class Tanzanians typically use private facilities: Aga Khan Hospital Dar es Salaam, Premier Care, Regency Medical Centre, and the Apollo Medical Tanzania network are well regarded. For complex or critical care, medical evacuation to Nairobi, Johannesburg, or India is routine, and virtually all expatriate insurance packages include evacuation cover. Private insurance is available through AAR Tanzania, Strategis, Jubilee Insurance Tanzania, and international schemes (Bupa, AXA, Cigna). Malaria is endemic across most of Tanzania; prophylaxis for newcomers is standard, and long-term residents typically rely on early testing and treatment. Yellow fever vaccination is required for entry if arriving from a country with yellow fever risk. HIV rates remain significant; standard precautions apply.",
  digitalLife: {
    overview:
      "Tanzania's digital life centres on mobile money. M-Pesa (Vodacom), Tigo Pesa (Yas), Airtel Money, and HaloPesa dominate everyday payments, from roadside fruit sellers to formal businesses. The banking system is modernising rapidly, with strong mobile apps from CRDB and NMB. Internet access is predominantly mobile (4G, 5G rolling out in Dar es Salaam), with fixed fibre from Vodacom, Airtel, and Liquid Intelligent Technologies. Starlink is available and popular for those needing high bandwidth or rural coverage.",
    essentials: [
      "A local SIM (Vodacom, Airtel, Yas, or Halotel) with mobile money enabled",
      "A bank account with an active mobile app (CRDB and NMB are the most widely used)",
      "Ride-hailing via Bolt, Uber, and Little Ride; In Zanzibar, MrSafari and similar options serve specific routes",
      "E-commerce and delivery: Jumia Tanzania, Glovo, and local food delivery platforms cover Dar es Salaam and parts of Arusha"
    ],
    whatSurprisesNewcomers: [
      "Mobile money is ubiquitous and interoperable across networks - sending TZS from M-Pesa to Tigo Pesa happens in seconds and is the default payment rail for everyday transactions.",
      "Dar es Salaam traffic can be severe, particularly along Bagamoyo Road and Morogoro Road at peak hours. Live close to work or plan around congestion.",
      "Electricity is generally stable in Dar es Salaam but outages still occur, so inverters and generators are standard in expatriate housing.",
      "Zanzibar operates partly as its own jurisdiction for immigration and tourism-related rules. Confirm whether specific permits and taxes apply to the mainland, Zanzibar, or both."
    ]
  },
  culture: {
    text: "Tanzanian culture is warm, patient, and comparatively relaxed by East African standards. The national project of Ujamaa, forged by founding president Julius Nyerere, left a deep emphasis on unity, Swahili as a national language, and a more horizontal social tone than in some regional peers. Greetings are extended and important: 'Hujambo?' / 'Sijambo', 'Habari?' / 'Nzuri', 'Shikamoo' (used by younger people to elders) with the response 'Marahaba' - these are not ornamental, they are how relationships start. The Swahili coast, including Zanzibar, is overwhelmingly Muslim with visible Arab and Indian heritage; inland regions are predominantly Christian, with Moshi and the northern highlands especially so. The Maasai, visible in Arusha and along the northern safari circuit, are an iconic but specific minority with their own language and customs. Music is central: Bongo Flava from Dar, taarab from the coast and Zanzibar, and a strong live-music scene draw both locals and visitors. Tanzanians speak directly but politely and are generally forgiving of newcomers fumbling Swahili - the attempt matters more than the grammar.",
    highlights: [
      "'Shikamoo' is the respectful greeting from a younger person to an elder. The elder responds 'Marahaba'. Using this correctly earns immediate goodwill.",
      "Dress modestly, especially in Zanzibar and other predominantly Muslim areas. Shoulders and knees covered, beachwear on the beach, not in the village.",
      "'Pole pole' - slowly, slowly - is a national mood. Aggressive haste is seen as disrespectful and often ineffective. Adjust your cadence.",
      "Bargaining is expected at markets and for some services, but not at supermarkets or formal restaurants. A smile and relaxed manner work far better than hard-charging negotiation.",
      "Avoid photographing government buildings, military installations, and people without permission. Ask first - a small tip may be appropriate for posed photos."
    ]
  },
  transportationMobility:
    "Dar es Salaam's transport landscape is dominated by dala-dalas (minibuses), bajajis (three-wheelers), boda-bodas (motorcycle taxis), and ride-hailing. Bolt and Uber are the preferred option for most expatriates; bajajis are convenient for short trips in congested areas. The DART BRT (Dar Rapid Transit) runs along key corridors and offers a faster alternative to dala-dalas on those routes. Traffic in Dar es Salaam can be severe, particularly at the Ubungo interchange and along Bagamoyo and Morogoro roads; planning around congestion is essential. Intercity travel uses coaches (Shabiby, Dar Express, Kilimanjaro Express) on main corridors, the Standard Gauge Railway (SGR) is progressively coming online between Dar and Dodoma/Morogoro, and domestic airlines (Precision Air, Air Tanzania, Coastal Aviation, Auric Air) connect Dar es Salaam, Arusha, Kilimanjaro, Zanzibar, Mwanza, and safari airstrips. Ferries across the harbour to Kigamboni and to Zanzibar (Azam Marine, Zan Fast) are a routine part of Dar and coastal life.",
  internationalConnectivity:
    "Julius Nyerere International Airport in Dar es Salaam (DAR) is Tanzania's main international gateway, with direct flights to Doha (Qatar Airways), Dubai (Emirates, flydubai), Addis Ababa (Ethiopian), Nairobi (Kenya Airways, Precision Air), Johannesburg (South African Airways), Istanbul (Turkish Airlines), and Amsterdam (KLM). Kilimanjaro International Airport (JRO) serves the northern safari circuit with direct flights from Amsterdam, Doha, Dubai, and Addis Ababa - vital for travellers heading to the Serengeti, Ngorongoro, and Mount Kilimanjaro. Abeid Amani Karume International Airport in Zanzibar (ZNZ) has direct flights to several European cities during the high season, plus daily services from Dar es Salaam and Nairobi. Flight time to London is roughly 9-10 hours via the Gulf or Addis Ababa, and under 1 hour between Dar and Zanzibar.",
  travelExploration:
    "Tanzania offers some of the greatest natural experiences on earth. The Serengeti National Park hosts the world's largest terrestrial mammal migration, and the Ngorongoro Conservation Area's crater is one of the densest wildlife-viewing settings anywhere. Tarangire, Lake Manyara, and Ruaha round out the major parks, with Nyerere (formerly Selous) and Katavi offering remoter experiences. Mount Kilimanjaro (5,895m) is Africa's highest peak and one of the world's most popular trekking summits, with routes ranging from 5 to 9 days. Zanzibar's Stone Town is UNESCO-listed and full of Swahili, Omani, and Indian architectural heritage; its beaches at Nungwi, Kendwa, Paje, and Jambiani are globally renowned. Mafia and Pemba islands offer quieter diving and snorkelling. The Usambara Mountains, Lake Victoria's southern shore, and the Kilwa ruins each reward more adventurous itineraries.",
  considerations: [
    "Work permit process: expect 4-8 weeks of processing and active employer involvement. Localisation rules are enforced; roles open to expatriates tend to be senior, specialised, or investor-linked.",
    "Dar vs Zanzibar: the two jurisdictions have distinct immigration and tax regimes. If you plan to split time, get written clarity on which permits apply to your situation.",
    "Traffic and logistics: Dar es Salaam congestion is a real lifestyle factor. Choose housing and schooling with commute reality in mind, not just distance on a map.",
    "Health: malaria, yellow fever certification, and medical evacuation planning are baseline. Budget for private insurance with strong regional and international cover.",
    "Political and media sensitivity: public criticism of government officials, particularly in writing, can carry real consequences. Social media posts by residents have been the basis for investigations in the past; exercise judgment."
  ],
  mistakes: [
    "Assuming a mainland permit covers Zanzibar employment. Zanzibar's labour and immigration rules are distinct; working on Zanzibar generally requires Zanzibar-issued permits.",
    "Skipping the resident rate setup at TANAPA/NCAA parks. A valid residence permit cuts park fees dramatically, but it has to be on your paperwork at the gate.",
    "Under-prepping for malaria. Tanzania is high-risk in most regions; proper prophylaxis, nets, and repellent are not optional.",
    "Treating Dar es Salaam traffic casually. A 10km drive can easily take 90 minutes at peak times. Plan meetings and school runs around it or live within walking or short-commute distance.",
    "Bringing plastic bags into Tanzania. Single-use plastic carrier bags are banned; enforcement at customs is genuine, and shops use paper or reusable alternatives."
  ],
  emergency: [
    {
      number: '112',
      service: 'National Emergency Number',
      description: 'Unified emergency number for police, ambulance, and fire, accessible from any phone. Response times vary by region and are strongest in Dar es Salaam.'
    },
    {
      number: '114',
      service: 'Fire and Rescue',
      description: 'Tanzania Fire and Rescue Force. Response is centred in Dar es Salaam, Arusha, Mwanza, and other major cities.'
    },
    {
      number: '115',
      service: 'Ambulance / Medical Emergency',
      description: 'Tanzania\'s medical emergency dispatch line. Private ambulance services tied to Aga Khan, Premier Care, and Regency Medical Centre are also widely used, often with faster response in Dar es Salaam.'
    }
  ],
  sources: [
    {
      name: 'Tanzania Immigration Services Department',
      category: 'Immigration & Visas',
      description: 'The authority responsible for visas, residence permits, and border management on the mainland. Source for e-visa rules and residence permit classes.',
      link: 'https://immigration.go.tz/'
    },
    {
      name: 'Ministry of Labour (Tanzania)',
      category: 'Work Permits',
      description: 'Issues work permits through the Labour Commissioner. Work permits are a prerequisite for Class B residence permits for employed foreigners.',
      link: 'https://www.kazi.go.tz/'
    },
    {
      name: 'Tanzania Revenue Authority (TRA)',
      category: 'Tax',
      description: 'Manages TIN, PAYE, VAT, and online tax filing. Provides guidance for individual taxpayers, including non-residents with Tanzanian-source income.',
      link: 'https://www.tra.go.tz/'
    },
    {
      name: 'Tanzania Investment Centre (TIC)',
      category: 'Investment',
      description: 'Handles investor registration, incentives, and investor-class residence permit support under the Tanzania Investment Act.',
      link: 'https://www.tic.go.tz/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Tanzania, consult the Tanzanian Ministry of Foreign Affairs and East African Cooperation or a Tanzanian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/tanzania',
    mfaLink: 'https://www.foreign.go.tz/'
  },
  serviceDirectory: {
    title: "Service Directory - Tanzania",
    description: "Examples of commonly used service providers people often interact with when relocating to Tanzania.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Law firms handling work permits, investor permits, and corporate immigration compliance across mainland Tanzania and Zanzibar.",
        providers: [
          { name: "Bowmans Tanzania", link: "https://www.bowmanslaw.com" },
          { name: "Clyde & Co Tanzania", link: "https://www.clydeco.com" },
          { name: "Breakthrough Attorneys", link: "https://breakthroughattorneys.co.tz" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies handling rentals and sales in Dar es Salaam, Arusha, and Zanzibar, including furnished expatriate housing.",
        providers: [
          { name: "Knight Frank Tanzania", link: "https://www.knightfrank.co.tz" },
          { name: "Pam Golding Tanzania", link: "https://www.pamgolding.co.tz" },
          { name: "Bushtrackers Properties", link: "https://bushtrackersproperties.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax advisors experienced with TRA compliance, PAYE, VAT, and cross-border structures for expatriates and investors.",
        providers: [
          { name: "PwC Tanzania", link: "https://www.pwc.com/tz" },
          { name: "Deloitte Tanzania", link: "https://www2.deloitte.com/tz" },
          { name: "KPMG Tanzania", link: "https://home.kpmg/tz/en/home.html" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International relocation and shipping providers handling household goods through Dar es Salaam port and customs.",
        providers: [
          { name: "Crown Relocations Tanzania", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Tanzania", link: "https://www.agsmovers.com" },
          { name: "Allied Pickfords Tanzania", link: "https://www.alliedpickfords.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Schools and tutors offering Swahili language training and cultural orientation.",
        providers: [
          { name: "MS Training Centre for Development Cooperation (Usa River)", link: "https://www.mstcdc.or.tz" },
          { name: "Alliance Francaise Dar es Salaam", link: "https://www.afdar.com" },
          { name: "Baraka Swahili School (Arusha)", link: "https://www.barakaswahili.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private hospitals and insurers commonly used by expatriates in Dar es Salaam, Arusha, and Zanzibar.",
        providers: [
          { name: "Aga Khan Hospital Dar es Salaam", link: "https://www.agakhanhospitals.org" },
          { name: "Premier Care Clinic", link: "https://www.premiercare.co.tz" },
          { name: "AAR Tanzania", link: "https://www.aar-insurance.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and search firms placing international professionals with Tanzanian employers.",
        providers: [
          { name: "BrighterMonday Tanzania", link: "https://www.brightermonday.co.tz" },
          { name: "MyJobMag Tanzania", link: "https://www.myjobmag.co.tz" },
          { name: "Michael Page Africa", link: "https://www.michaelpageafrica.com" }
        ]
      }
    ]
  }
};
