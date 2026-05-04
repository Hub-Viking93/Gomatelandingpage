export const hongKong = {
  id: 'hong-kong',
  slug: 'hong-kong',
  name: 'Hong Kong',
  region: 'Asia',
  complexity: 'Medium',
  languages: ['Cantonese', 'English', 'Mandarin'],
  shortDescription: 'A vertical metropolis where East meets West in a frenzy of finance and food.',
  heroImage: 'https://images.unsplash.com/photo-1731960389121-bc833c0b4f24?',
  flagAlt: 'Flag of Hong Kong',
  atAGlance: "Hong Kong is a city of astonishing intensity packed into 1,104 square kilometers. It has the most skyscrapers in the world, yet 40% of its land is protected country park. The city operates at a pace that makes New York feel leisurely—walking speeds are fast, transactions are efficient, and the expectation is that you keep up. As a Special Administrative Region of China operating under the 'One Country, Two Systems' framework, it maintains its own legal system (based on English common law), its own currency (the Hong Kong Dollar, pegged to the USD), its own immigration policy, and its own tax regime—which is famously simple and low (salaries tax maxes out at 15%). The blend of Cantonese tradition and British colonial heritage creates a unique cultural identity: dim sum restaurants sit beneath glass towers, temples share streets with luxury boutiques, and the Star Ferry still crosses Victoria Harbour as it has since 1888. Dining is a national obsession that spans from Michelin-starred fine dining to the best roast goose of your life at a hole-in-the-wall dai pai dong. The housing market is the most expensive on Earth—a 400-square-foot apartment in a decent neighborhood is considered normal and costs a fortune. Political changes following the 2020 National Security Law have shifted the atmosphere and some aspects of civic life, though the city's commercial dynamism and international character remain strong. For newcomers, the adjustment is about embracing extreme density, recalibrating expectations about living space, and learning to thrive in a city where efficiency is the highest virtue and the energy never stops.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 90 days (Tourist)',
    costOfLiving: 'Very High',
    primaryLanguages: 'Cantonese, English',
  },
  visas: [
    {
      name: 'Top Talent Pass Scheme (TTPS)',
      targetAudience: 'High earners and graduates of top universities',
      useCase: 'A scheme introduced in 2022 targeting global talent. Category A is for individuals earning HK$2.5 million or more per year. Category B is for graduates of the top 100 global universities with at least 3 years of work experience. Category C is for graduates of top 100 universities with less than 3 years of experience (capped at 10,000 per year). No job offer is required at the time of application. Processed by the Immigration Department.',
      duration: '2 years initially, renewable based on employment status',
      link: 'https://www.immd.gov.hk/eng/services/visas/TTPS.html'
    },
    {
      name: 'Employment Visa',
      targetAudience: 'Professionals with a confirmed job offer',
      useCase: 'The standard work visa for foreign nationals employed by a Hong Kong company. The employer sponsors the application and must demonstrate that the role requires skills, knowledge, or experience not readily available in Hong Kong. Processing typically takes 4-6 weeks. The visa is tied to your employer—changing jobs requires a new application or formal notification to Immigration.',
      duration: '1-2 years initially, renewable',
      link: 'https://www.immd.gov.hk/eng/services/visas/employment.html'
    },
    {
      name: 'Investment as Entrepreneur Visa',
      targetAudience: 'Business owners and startup founders',
      useCase: 'For individuals establishing or joining a business in Hong Kong that contributes to the local economy. The Immigration Department scrutinizes the business plan, financial investment, job creation potential, and the applicant\'s business track record. A substantial financial contribution and a clear business case are expected. Processing takes 6-8 weeks.',
      duration: '1-2 years initially, renewable based on business performance',
      link: 'https://www.immd.gov.hk/eng/services/visas/investment.html'
    },
    {
      name: 'Visit Visa / Visa-Free Entry',
      targetAudience: 'Tourists and short-term business visitors',
      useCase: 'Most Western passport holders (US, UK, EU, Canada, Australia) receive visa-free entry for 90 days. Japanese nationals receive 90 days; many Southeast Asian nationalities receive 14-30 days. The visa does not permit any form of employment. Overstaying is a criminal offense.',
      duration: 'Up to 90 days (nationality dependent)',
      link: 'https://www.immd.gov.hk/eng/services/visas/visit-transit/visit-visa-entry-permit.html'
    },
    {
      name: 'Working Holiday Visa',
      targetAudience: 'Youth aged 18-30 from partner countries',
      useCase: 'Available to citizens of Australia, Canada, France, Germany, Japan, New Zealand, South Korea, and the UK among others. Allows holders to work and travel in Hong Kong for up to one year. Work engagement should not be the primary purpose. Each bilateral arrangement has its own quota and conditions.',
      duration: '1 year, non-renewable',
      link: 'https://www.immd.gov.hk/eng/services/visas/working_holiday.html'
    }
  ],
  requirements: [
    {
      title: 'Hong Kong Identity Card (HKID)',
      explanation: 'The mandatory identification card for all Hong Kong residents aged 11 and above. Foreign residents who enter with a visa allowing a stay of more than 180 days must apply for an HKID within 30 days of arrival at a Registration of Persons office.',
      importance: 'The HKID is your primary identification in Hong Kong. It is required for opening bank accounts, accessing public hospital services, passing through e-Channel immigration gates at the airport (significantly faster than manual queues), signing leases, and presenting to authorities on request. The smart card also stores your immigration status. Carry it at all times—it is a legal requirement for residents.',
      link: 'https://www.gov.hk/en/residents/immigration/idcard/'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a Hong Kong bank account requires your HKID (or passport if not yet issued), proof of address, and proof of employment or income. Major banks include HSBC, Standard Chartered, Bank of China (Hong Kong), Hang Seng Bank, and the digital-first options like ZA Bank and Mox.',
      importance: 'Hong Kong\'s banking system is robust and internationally connected, but opening an account as a newcomer can be notoriously difficult. Banks require extensive documentation, and some have minimum balance requirements or monthly fees. HSBC and Standard Chartered are generally considered the most expat-friendly. Having a Hong Kong bank account is essential for receiving salary, paying rent, and accessing local financial services. The Faster Payment System (FPS) enables instant free transfers between banks.',
      link: 'https://www.hkma.gov.hk/'
    },
    {
      title: 'MPF (Mandatory Provident Fund) Registration',
      explanation: 'Hong Kong\'s compulsory pension scheme. Both employer and employee contribute 5% of the employee\'s relevant income (capped at HK$1,500/month each). Employees aged 18-64 must be enrolled within 60 days of starting employment.',
      importance: 'MPF contributions are mandatory and deducted from your salary automatically. You choose an MPF scheme and investment allocation, which determines the growth of your retirement fund. When you leave Hong Kong permanently, you can withdraw your MPF funds (both employer and employee contributions) by providing proof of departure. Understanding your MPF scheme and investment options is important, as default allocations may not be optimal.',
      link: 'https://www.mpfa.org.hk/en/'
    },
    {
      title: 'Proof of Address',
      explanation: 'A utility bill, bank statement, or government correspondence showing your Hong Kong residential address. This is required for virtually all formal registrations in Hong Kong.',
      importance: 'Opening a bank account is the most challenging hurdle for newcomers, and proof of address is the document most frequently missing. If you have just arrived and have no local utility bill, some banks accept a proof of address from your home country, a hotel invoice, or a signed letter from your employer confirming your residential address. A signed lease agreement may also be accepted. Resolve this document requirement early, as it unlocks all other administrative steps.',
      link: 'https://www.gov.hk/en/residents/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Hong Kong is one of Asia's premier financial centers, with a job market centered on banking, finance, insurance, legal services, trading, and logistics. The city hosts the Asia-Pacific headquarters of hundreds of multinational corporations, and English is the standard language of business in international firms. Cantonese is essential for local-facing roles, while Mandarin proficiency is increasingly valuable given the city's integration with mainland China.",
    whereToLook: [
      "LinkedIn — the primary platform for professional and international roles",
      "JobsDB (hk.jobsdb.com) — Hong Kong's largest local job portal",
      "CTgoodjobs (ctgoodjobs.hk) — popular for both local and international positions",
      "Robert Walters, Michael Page, and Hays — major recruitment agencies with strong Hong Kong presence",
      "Company career pages for banks (HSBC, Goldman Sachs, JP Morgan), consulting firms, and law firms"
    ],
    realityChecks: [
      "Work visas are employer-sponsored and tied to your job. Changing employers requires Immigration Department approval, which typically takes 2-4 weeks. Do not resign before securing your new visa endorsement.",
      "Long working hours are deeply embedded in Hong Kong's work culture, particularly in finance, law, and consulting. A 50-60 hour work week is common in many professional roles.",
      "Networking and referrals carry enormous weight in Hong Kong's job market. Many senior positions are filled through headhunters and personal connections rather than public job postings.",
      "The TTPS scheme has significantly opened the market for graduates of top global universities, allowing them to arrive without a job offer and search on the ground—a major shift from the traditional employer-sponsored model."
    ]
  },
  salaryReality: {
    overview:
      "Hong Kong salaries in finance, law, and corporate roles are among the highest in Asia, and the salaries tax system is exceptionally simple: a progressive rate capped at 15% (or a standard rate of 15% on net chargeable income, whichever is lower). There is no VAT, no capital gains tax, and no tax on income earned outside Hong Kong. However, the astronomical cost of housing means that a salary that looks impressive on paper can feel stretched when 40-60% goes to rent.",
    realityChecks: [
      "Gross salary looks excellent, and the low tax rate (effective rate often 10-13%) means net income is genuinely high. But housing costs immediately absorb a huge portion.",
      "Year-end bonuses of 1-3 months are standard in most professional roles, with finance sector bonuses potentially much higher.",
      "MPF contributions (5% from employer and 5% from employee, capped at HK$1,500/month each) are modest and do not significantly impact take-home pay.",
      "Cost of living varies sharply by district: living on Hong Kong Island (Central, Mid-Levels, Wan Chai) is significantly more expensive than Kowloon (Tsim Sha Tsui, Mong Kok) or the New Territories."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Housing costs, which are the highest in the world: a 400-sq-ft apartment in Mid-Levels runs HK$20,000-30,000/month; a similar unit in Sai Ying Pun or Kennedy Town may be HK$15,000-22,000",
      "Mandatory MPF contributions (5% employee, 5% employer, capped), which are withdrawn when you permanently leave Hong Kong",
      "Private healthcare insurance, often provided by employers but varying significantly in coverage and quality",
      "The cost of international schooling for families: HK$100,000-250,000/year per child at established international schools"
    ]
  },
  housingSystem: {
    overview:
      "Hong Kong has the most expensive housing market in the world relative to income. Most residents rent privately, and apartments are compact by any international standard. A 400-500 square foot apartment is considered a normal one-bedroom. Popular expat areas on Hong Kong Island include Mid-Levels, Sai Ying Pun, Kennedy Town, Sheung Wan, Happy Valley, and Tai Hang. On the Kowloon side, Tsim Sha Tsui and Hung Hom are convenient. In the New Territories, Sha Tin, Tung Chung (near the airport), and Discovery Bay (on Lantau Island) offer more space at lower prices but longer commutes.",
    expectations:
      "Expect to pay a significant portion of your income on rent. Deposits are typically two months' rent, and agent commissions (half a month to one month's rent, split between tenant and landlord or paid by one party) are standard. Lease terms are commonly two years with a break clause after the first year (known as a 'diplomatic clause' for expats). Furnished and serviced apartments are widely available for newcomers and command a premium. Geoexpat.com, Spacious.hk, 28Hse.com, and estate agents like Centaline and Midland are the main channels. Inspect the apartment for dampness, air conditioning condition, and natural light—many Hong Kong apartments face building walls with minimal ventilation."
  },
  healthcareReality:
    "Hong Kong has a dual public-private healthcare system. Public hospitals and clinics, managed by the Hospital Authority (HA), provide heavily subsidized care to HKID holders: an A&E (emergency) visit costs HK$180, and inpatient care is HK$120/day for general ward beds. Quality of care is high but waiting times for non-urgent specialist appointments can extend to months or even years. Major public hospitals include Queen Mary Hospital (Pok Fu Lam), Prince of Wales Hospital (Sha Tin), and Queen Elizabeth Hospital (Yau Ma Tei). Private healthcare offers faster access and more comfortable facilities but at significant cost: a private GP visit runs HK$300-800, and a specialist consultation HK$1,000-3,000. Major private hospitals include the Hong Kong Sanatorium & Hospital, Matilda International Hospital, Gleneagles Hong Kong, and Hong Kong Adventist Hospital. Most employers provide group medical insurance that covers private healthcare to varying degrees. Pharmacies (Watsons, Mannings) are on every block and can provide basic medical advice.",
  digitalLife: {
    overview:
      "Hong Kong is one of the most digitally connected cities in the world, with ubiquitous free Wi-Fi, one of the highest smartphone penetration rates globally, and a cashless payment ecosystem dominated by the Octopus Card and mobile payment apps.",
    essentials: [
      "Octopus Card — the contactless smart card used on MTR, buses, ferries, minibuses, convenience stores, supermarkets, vending machines, and many restaurants. Essentially a second wallet.",
      "AlipayHK and WeChat Pay HK — widely accepted mobile payment platforms, particularly useful in local restaurants and markets",
      "GovHK / iAM Smart — the government's digital identity app for accessing online government services, booking appointments, and managing official matters",
      "OpenRice — the dominant restaurant review and booking platform, far more used than Google Maps for dining decisions"
    ],
    whatSurprisesNewcomers: [
      "The Octopus Card is accepted almost everywhere—from the MTR to 7-Eleven to parking meters—making it the single most useful item you will carry besides your HKID.",
      "Bank account opening can take 2-4 weeks and multiple visits, requiring extensive documentation. Some newcomers use virtual banks (ZA Bank, Mox) as a bridge until their main account is established.",
      "Physical documents and wet signatures are still required for many official and property transactions despite the otherwise high-tech environment.",
      "Air conditioning is set to arctic levels in offices, malls, and public transport year-round. Carrying a light jacket even in 35-degree heat is not optional—it is survival."
    ]
  },
  culture: {
    text: 'Hong Kong culture can be summarized as "work hard, eat hard." Efficiency is the highest cultural value—walking speeds are among the fastest in the world, the MTR doors close in seconds, and wasting someone\'s time is a genuine social transgression. Dining is central to social and business life: dim sum lunches, hot pot dinners, and late-night noodle runs are how relationships are built and maintained. The concept of "face" (min) matters deeply—public embarrassment or direct confrontation is avoided, and respect for hierarchy influences workplace dynamics. Despite the intensity, Hong Kongers have a dry, quick humor and a pragmatic warmth once you earn their trust. Cantonese opera, the horse racing at Happy Valley and Sha Tin, the annual Dragon Boat Festival, and the Lunar New Year celebrations are cultural touchstones.',
    highlights: [
      'Pressing the "Close Door" button in elevators is reflexive—waiting for doors to close naturally is considered a waste of time. This is not rudeness; it is efficiency.',
      'Table sharing (daap toi) is standard in casual restaurants (cha chaan teng, dai pai dong) during peak hours. You will sit with strangers, and minimal acknowledgment is normal—not rude.',
      'Business cards are exchanged with both hands and read carefully before being placed on the table (never in your back pocket). This remains an important ritual.',
      'Unlucky numbers matter: the number 4 (sei) sounds like "death" in Cantonese, so many buildings skip floor 4 (and 14, 24, etc.). The number 8 (baat) sounds like "prosperity" and is highly favored.',
      'Tipping is not a major cultural expectation. A 10% service charge is usually included in restaurant bills. Rounding up the bill or leaving small change is appreciated but not required.'
    ]
  },
  transportationMobility:
    "Hong Kong's public transport system is one of the best in the world. The MTR (Mass Transit Railway) is fast, clean, affordable, and covers most of the territory with 10+ lines. Trains run every 2-4 minutes during peak hours. The bus network (KMB, Citybus, New World First Bus) fills gaps not covered by the MTR, including scenic routes along the south side of Hong Kong Island. The Star Ferry crosses Victoria Harbour between Central/Wan Chai and Tsim Sha Tsui—a functional commute route and one of the world's great short boat rides. Trams (ding ding) run along the northern shore of Hong Kong Island and cost HK$3 per ride. Green minibuses connect residential areas to MTR stations. The Octopus Card works on all these modes seamlessly. Car ownership is rare and impractical—parking is scarce and expensive (HK$3,000-5,000/month), roads are congested, and the tunnel tolls add up. Taxis are plentiful and metered, with red taxis covering urban areas and green taxis serving the New Territories.",
  internationalConnectivity:
    "Hong Kong International Airport (HKG) at Chek Lap Kok is one of the world's busiest and best-connected airports, with direct flights to over 200 destinations. Cathay Pacific, Hong Kong's flagship carrier, operates an extensive long-haul network. Flight times to Tokyo are about 4 hours, to Singapore about 4 hours, to Sydney about 9 hours, to London about 12 hours, and to New York about 16 hours. The Airport Express train connects HKG to Central station in 24 minutes. Regional connectivity is exceptional: Shenzhen and Guangzhou in mainland China are accessible by high-speed rail from West Kowloon Station (14 minutes to Shenzhen, 48 minutes to Guangzhou), and ferry services connect to Macau (about 1 hour) and several Pearl River Delta cities.",
  travelExploration:
    "Despite its reputation as a concrete jungle, Hong Kong offers surprising natural beauty and diverse day-trip options. The Dragon's Back trail on Hong Kong Island is a world-class urban hike with ocean views. Lantau Island offers the Big Buddha at Ngong Ping and the fishing village of Tai O. The outlying islands—Lamma, Cheung Chau, Peng Chau—provide car-free village atmospheres just a ferry ride from Central. The New Territories contain Sai Kung, Hong Kong's backyard for hiking, beaches, and seafood restaurants accessible by public transport. Wetland Park and Mai Po Nature Reserve offer birdwatching. For regional travel, Macau (casinos, Portuguese colonial architecture, egg tarts) is an hour away by ferry, Shenzhen offers modern Chinese urban culture and shopping, and budget flights connect Hong Kong to destinations across Southeast Asia—Bangkok, Bali, Da Nang, and Manila are all 2-4 hour flights away.",
  considerations: [
    'Housing Costs: Apartments are extremely expensive and remarkably small by international standards. A 400-500 sq ft one-bedroom in a decent area costs HK$15,000-30,000/month. Be prepared to significantly downsize. "Nano-flats" (under 200 sq ft) exist and are marketed as legitimate living spaces.',
    'Summer Humidity: From May through September, humidity regularly exceeds 90% and temperatures reach 33-35C. The combination is oppressive, and the contrast with arctic-level air conditioning indoors means you are constantly cycling between extremes. Mold on clothing, shoes, and walls is a serious issue—running a dehumidifier is essential.',
    'Political Environment: The National Security Law enacted in 2020 has changed aspects of civic life, media, and public discourse. Exercise discretion in political discussions, particularly in professional and public settings. The legal and business environment for foreign workers remains functional and commercially oriented.',
    'Typhoon Season: Hong Kong has an organized typhoon warning system (T1 to T10). At signal T8 or above, offices close, public transport suspends, and everyone goes home (or stays home). Typhoon signals can be raised with only hours of notice. Keep a basic supply of food and water at home during typhoon season (June-November).',
    'Air Quality: Pollution from the Pearl River Delta region and local traffic can cause poor air quality, particularly from November to March. The AQHI (Air Quality Health Index) is published daily. On high-pollution days, outdoor exercise is inadvisable.'
  ],
  mistakes: [
    'Walking slowly or stopping suddenly in pedestrian flow. Hong Kong\'s sidewalks, MTR stations, and escalators operate like highways. Keep left on escalators, walk on the right, and do not block the flow. You will be physically bumped or vocally "tutted" at if you obstruct.',
    'Tipping 15-20% at restaurants as you might in the US. A 10% service charge is typically already included. Adding a large tip on top is unusual and unnecessary. Rounding up is sufficient.',
    'Referring to Hong Kong as "China" in casual conversation. Hong Kong is a Special Administrative Region with its own legal system, currency, borders, and identity. The distinction matters to locals, regardless of their political views.',
    'Wearing shoes inside homes. Removing shoes at the door is standard practice. Hosts will notice and it is considered basic respect.',
    'Underestimating the importance of the first bank account. Apply early and bring every document you have (passport, HKID, employment contract, proof of address, reference letter from your home bank). Being turned away for missing documentation is common and frustrating.'
  ],
  emergency: [
    {
      number: '999',
      service: 'Police, Fire, and Ambulance',
      description: 'Unified emergency number for all services. Operators speak Cantonese and English. Response times are fast by international standards.'
    },
    {
      number: '2527 7177',
      service: 'Police General Enquiries Hotline',
      description: 'Non-emergency police enquiries and crime reporting. Available 24/7 with English-speaking operators.'
    },
    {
      number: '1878 200',
      service: 'Hong Kong Observatory Weather Hotline',
      description: 'Automated weather information including typhoon signal status, rainfall warnings, and severe weather alerts. Essential during typhoon season.'
    }
  ],
  sources: [
    {
      name: 'Immigration Department (ImmD)',
      category: 'Immigration & Visas',
      description: 'Official authority for visa applications, HKID registration, right of abode, and all immigration matters in Hong Kong.',
      link: 'https://www.immd.gov.hk/eng/index.html'
    },
    {
      name: 'GovHK',
      category: 'Government Services',
      description: 'One-stop government portal providing information on all public services, regulations, and administrative procedures for residents.',
      link: 'https://www.gov.hk/en/residents/'
    },
    {
      name: 'Inland Revenue Department (IRD)',
      category: 'Tax & Finance',
      description: 'Authority handling salaries tax, profits tax, property tax, and all tax matters for individuals and businesses in Hong Kong.',
      link: 'https://www.ird.gov.hk/eng/welcome.htm'
    },
    {
      name: 'Discover Hong Kong',
      category: 'Tourism & Travel',
      description: 'Official Hong Kong Tourism Board portal with travel guides, event listings, and visitor information.',
      link: 'https://www.discoverhongkong.com/'
    }
  ],
  embassies: {
    description: 'As a Special Administrative Region of China, Hong Kong does not have independent embassies abroad. Foreign countries maintain consulates general in Hong Kong. For consular assistance, contact your country\'s consulate general in Hong Kong or the Office of the Commissioner of the Ministry of Foreign Affairs in the HKSAR.',
    directoryLink: 'https://www.embassypages.com/hongkong',
    mfaLink: 'https://www.fmcoprc.gov.hk/eng/'
  },
  serviceDirectory: {
    title: "Service Directory - Hong Kong",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Hong Kong.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with work visas, TTPS applications, dependent visas, investment visas, and residency matters in Hong Kong.",
        providers: [
          { name: "Fragomen Hong Kong", link: "https://www.fragomen.com" },
          { name: "Mayer Brown Hong Kong", link: "https://www.mayerbrown.com" },
          { name: "Deacons", link: "https://www.deacons.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies handling residential rentals and property transactions in Hong Kong's dense and expensive housing market.",
        providers: [
          { name: "Centaline Property", link: "https://www.centaline.com.hk" },
          { name: "Midland Realty", link: "https://www.midland.com.hk" },
          { name: "Spacious", link: "https://www.spacious.hk" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax and accounting specialists covering Hong Kong salaries tax, territorial taxation, MPF, and business compliance.",
        providers: [
          { name: "PwC Hong Kong", link: "https://www.pwc.com/hk" },
          { name: "Deloitte Hong Kong", link: "https://www2.deloitte.com/hk" },
          { name: "KPMG Hong Kong", link: "https://home.kpmg/cn/en/home/about/offices/hong-kong.html" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International relocation services for shipping household goods to and from Hong Kong.",
        providers: [
          { name: "Asian Tigers Group", link: "https://www.asiantigersgroup.com" },
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Language schools offering Cantonese, Mandarin, and English courses for newcomers to Hong Kong.",
        providers: [
          { name: "Hong Kong Language Learning Centre", link: "https://www.hkllc.com.hk" },
          { name: "Berlitz Hong Kong", link: "https://www.berlitz.com/en-hk" },
          { name: "Chinese University of Hong Kong - Yale-China Chinese Language Centre", link: "https://www.cuhk.edu.hk/clc/" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major public and private hospitals commonly used by residents and expats in Hong Kong.",
        providers: [
          { name: "Hospital Authority (Public Hospitals)", link: "https://www.ha.org.hk" },
          { name: "Hong Kong Sanatorium & Hospital", link: "https://www.hksh.com" },
          { name: "Gleneagles Hospital Hong Kong", link: "https://www.gleneagles.hk" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms and platforms connecting international talent with Hong Kong employers.",
        providers: [
          { name: "JobsDB Hong Kong", link: "https://hk.jobsdb.com" },
          { name: "Robert Walters Hong Kong", link: "https://www.robertwalters.com.hk" },
          { name: "Hays Hong Kong", link: "https://www.hays.com.hk" }
        ]
      }
    ]
  }
};