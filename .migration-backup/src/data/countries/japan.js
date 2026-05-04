export const japan = {
  id: 'japan',
  slug: 'japan',
  name: 'Japan',
  region: 'Asia',
  complexity: 'High',
  languages: ['Japanese'],
  shortDescription: 'A fascinating blend of ancient tradition and futuristic convenience.',
  heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
  flagAlt: 'Flag of Japan',
  atAGlance: "Japan is a society built on harmony (Wa), respect, and intricate social codes that take years to fully understand. It is one of the safest, cleanest, and most logistically convenient countries in the world: trains run to the second, convenience stores (konbini) provide restaurant-quality food 24 hours a day, and customer service (Omotenashi) is flawless to a degree that feels almost theatrical. However, this extraordinary order comes with expectations of conformity. Group cohesion is valued over individual expression, and 'reading the air' (Kuuki wo yomu) - understanding the unspoken rules of any social situation - is essential. For newcomers, daily life is comfortable but can feel isolating. There is often a 'guest' bubble where foreigners are treated with polite kindness but kept at a social distance from deeper Japanese life. Integration requires not just language skills (and Japanese is genuinely difficult) but the ability to navigate indirect communication, seasonal gift-giving, workplace hierarchy, and neighborhood associations. The cost of living in Tokyo is high for housing but surprisingly moderate for food, transport, and healthcare. Outside Tokyo, cities like Osaka, Fukuoka, and Kyoto offer more affordable living with distinct regional cultures. Japan rewards patience, humility, and a genuine effort to participate in its social fabric.",

  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 90 days (Visa-free for many)',
    costOfLiving: 'Medium-High',
    primaryLanguages: 'Japanese (English proficiency varies)',
  },
  visas: [
    {
      name: 'Tourist Visa / Visa-Free Entry',
      targetAudience: 'Visitors, tourists',
      useCase: 'Citizens of 68 countries receive visa-free entry for 15-90 days (most get 90 days) for tourism and business meetings. Employment of any kind is strictly prohibited. Extensions are difficult to obtain.',
      duration: '15-90 days depending on nationality',
      link: 'https://www.mofa.go.jp/j_info/visit/visa/index.html'
    },
    {
      name: 'Digital Nomad Visa (Specified Activity - Remote Worker)',
      targetAudience: 'High-earning remote workers',
      useCase: 'Introduced in 2024 for remote workers earning over 10 million JPY annually (approximately USD 70,000). Does not grant a residence card (Zairyu Card), does not provide a path to permanent residency, and prohibits local employment. Essentially an extended stay visa for well-paid remote workers.',
      duration: '6 months (non-renewable)',
      link: 'https://www.mofa.go.jp/j_info/visit/visa/index.html'
    },
    {
      name: 'Working Holiday Visa',
      targetAudience: 'Young adults (18-30) from partner countries',
      useCase: 'Available to citizens of over 30 partner countries (Australia, Canada, UK, France, Germany, etc.). Allows work and travel throughout Japan. Popular for English teaching, hospitality, and seasonal agricultural work. Age limit varies by country (18-30 or 18-25).',
      duration: '1 year (non-renewable)',
      link: 'https://www.mofa.go.jp/j_info/visit/w_holiday/index.html'
    },
    {
      name: 'Engineer/Specialist in Humanities/International Services Visa',
      targetAudience: 'Professionals, knowledge workers',
      useCase: 'The most common work visa for foreign professionals in Japan, covering IT engineers, translators, marketing specialists, financial analysts, and similar roles. Requires a relevant university degree or 10 years of professional experience, plus employer sponsorship.',
      duration: '1, 3, or 5 years (renewable)',
      link: 'https://www.isa.go.jp/en/applications/procedures/16-1.html'
    },
    {
      name: 'Highly Skilled Professional (HSP) Visa',
      targetAudience: 'Top-tier professionals, researchers, executives',
      useCase: 'A points-based visa for individuals scoring 70+ points on Japan\'s assessment system (based on academic background, work experience, salary, age, and Japanese language ability). Grants preferential processing, longer stays, permission for multiple activities, and a fast track to permanent residency (as little as 1-3 years).',
      duration: '5 years (fast-track to permanent residency)',
      link: 'https://www.isa.go.jp/en/publications/materials/newimmiact_3_index.html'
    }
  ],
  requirements: [
    {
      title: 'Residence Card (Zairyu Card)',
      explanation: 'A credit card-sized ID issued at the airport upon arrival for anyone with a visa valid for more than 3 months. Contains your photo, name, nationality, residence status, and expiration date. You must carry it at all times.',
      importance: 'The Zairyu Card is your primary form of identification in Japan. It is required for opening bank accounts, signing apartment leases, purchasing mobile phone contracts, registering at your ward office, and proving your legal status. Police can request to see it at any time, and failure to carry it is a misdemeanor offense.',
      link: 'https://www.isa.go.jp/en/applications/procedures/whatis_residence_card.html'
    },
    {
      title: 'My Number Card (Maina Kado)',
      explanation: 'A plastic ID card with an IC chip linked to your 12-digit individual number (My Number), used for tax, social security, and an increasing range of government services. Application is made at your local ward office after registering your address.',
      importance: 'The My Number Card is becoming increasingly essential. It can serve as your health insurance card, allows you to print official documents (juminhyo, tax certificates) at convenience store kiosks, enables online tax filing (e-Tax), and is required for some banking and investment services. Processing takes 1-2 months after application.',
      link: 'https://www.kojinbango-card.go.jp/en/'
    },
    {
      title: 'Ward Office Registration (Shiyakusho/Kuyakusho)',
      explanation: 'Within 14 days of moving to your address (or entering Japan on a long-term visa), you must register your residence at the local ward or city office. This triggers enrollment in health insurance, pension, and other municipal services.',
      importance: 'Registration at the ward office is the administrative starting point for your life in Japan. It enrolls you in National Health Insurance (if not covered by employer insurance), establishes your tax municipality, and generates your My Number. Bring your passport, Zairyu Card, and proof of address.',
      link: 'https://www.soumu.go.jp/english/'
    },
    {
      title: 'Hanko / Inkan (Personal Seal)',
      explanation: 'A carved stamp bearing your name (typically in katakana for foreigners), used in place of a signature for official documents, contracts, and banking. Three types exist: Mitome-in (everyday stamp), Ginko-in (bank-registered stamp), and Jitsuin (government-registered stamp for legal documents).',
      importance: 'While digital signatures are growing in acceptance, many banks, landlords, and government offices still require a physical Hanko for contracts and transactions. Get a basic Mitome-in for deliveries and everyday use, and register a Jitsuin at your ward office for property and legal matters. Hanko shops are found in most shopping areas and can make a custom seal in 30 minutes to a few days.',
      link: 'https://www.japan-guide.com/e/e2224.html'
    }
  ],
  jobsAndIncome: {
    overview:
      "Japan's job market is structured, hierarchical, and credential-focused, but facing severe labor shortages due to its aging population. This creates genuine opportunities for foreign professionals, particularly in IT, engineering, finance, English education, and specialized manufacturing. Tokyo concentrates the most international roles, but Osaka, Nagoya, and Fukuoka have growing international business communities. The traditional Japanese hiring system (lifetime employment, seniority-based promotion) is evolving, but corporate culture remains distinctly Japanese even in international companies.",
    whereToLook: [
      "GaijinPot Jobs (largest English-language job board for Japan)",
      "Daijob.com (bilingual job listings)",
      "LinkedIn (growing in Japan, especially for senior roles)",
      "Robert Walters Japan and Michael Page Japan (recruitment agencies)",
      "JET Programme (government-sponsored English teaching, excellent gateway)"
    ],
    realityChecks: [
      "Japanese language ability (JLPT N2 or above) dramatically expands your job options beyond English-teaching and international-facing roles.",
      "Hiring processes are formal and multi-stage: expect multiple interviews, aptitude tests, and sometimes group discussions. Speed of decision-making is slow by Western standards.",
      "Your visa status directly determines what work you can do. Violating visa work restrictions is taken extremely seriously and can result in deportation and entry bans.",
      "Overtime (zangyo) culture is real, though improving. Ask directly about overtime expectations during interviews; vague answers often mean long hours."
    ]
  },
  salaryReality: {
    overview:
      "Japanese salaries are moderate compared to the US or Western Europe, but the comprehensive benefits system, universal healthcare, and relatively controlled cost of living (outside central Tokyo housing) provide a comfortable standard of living. Starting salaries for new graduates are standardized across industries at approximately JPY 220,000-250,000/month. Senior professionals in finance and tech can earn JPY 8-15 million annually.",
    realityChecks: [
      "Bonuses (typically twice a year, totaling 2-6 months' salary) are a major component of total compensation and should be factored into any salary comparison.",
      "Mandatory deductions include income tax (progressive, 5-45%), residence tax (approximately 10%), health insurance, pension, and employment insurance, reducing gross by 20-30%.",
      "Salary progression in traditional Japanese companies is tied more to tenure and age than to performance alone. Job-hopping for salary increases is becoming more accepted but is still viewed cautiously.",
      "Housing allowance (jutaku teate) and commuting allowance (tsukin teate) are standard benefits that significantly supplement base salary."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Semi-annual bonuses (can represent 15-30% of total annual compensation)",
      "Residence tax (approximately 10% of previous year's income, billed in the second year, catching many newcomers off guard)",
      "Mandatory pension contributions (approximately 9% employee share for Kosei Nenkin)",
      "Hidden benefits like commuting allowance, housing subsidy, and company health insurance that improve total compensation"
    ]
  },
  housingSystem: {
    overview:
      "Renting in Japan involves significant upfront costs that shock most newcomers. Beyond the security deposit (shikikin, typically 1-2 months' rent), many landlords charge key money (reikin, a non-refundable 'gift' of 1-2 months' rent), agent fees (chukai tesuryo, 1 month's rent), and guarantor company fees. Total move-in costs of 4-6 months' rent upfront are common. Popular expat neighborhoods in Tokyo include Minato-ku (Roppongi, Azabu), Shibuya-ku, Meguro-ku, and Setagaya-ku. In Osaka, Umeda, Namba, and Tennoji areas are popular.",
    expectations:
      "Apartments are typically much smaller than Western equivalents; a 25-square-meter studio (1K) is standard for singles in Tokyo. Foreigners often face discrimination (some listings say 'Japanese only'), so using a guarantor company (hoshonin kaisha) like GTN or JHF instead of a personal guarantor is standard practice. Listings on Suumo, Homes.co.jp, and GaijinPot Apartments are the main search platforms. Inspect the property for earthquake damage history, building age (1981 building code update is an important threshold for seismic safety), and proximity to train stations. Japanese apartments are typically spotless but come without furniture."
  },
  healthcareReality:
    "Japan's healthcare system is universal, high-quality, and remarkably affordable. All residents must enroll in either National Health Insurance (Kokumin Kenko Hoken, for self-employed and non-covered workers) or Employees' Health Insurance (Kenko Hoken, through employers). Patients pay 30% of medical costs out of pocket, with the rest covered by insurance. A doctor visit typically costs JPY 2,000-5,000 out of pocket; a week-long hospital stay might be JPY 50,000-100,000 after insurance. Hospitals range from small clinics (shinryojo) to major university hospitals (Tokyo University Hospital, Keio University Hospital, St. Luke's International Hospital in Tokyo). St. Luke's is particularly popular with foreigners for its English-speaking staff. Prescriptions are filled at separate pharmacies (yakkyoku) near hospitals. The system can feel rigid: you generally need a referral from a smaller clinic to see a specialist at a large hospital, and waiting times at popular hospitals can be hours. Mental health services are less developed and more stigmatized than in Western countries.",
  digitalLife: {
    overview:
      "Japan presents a paradox: cutting-edge technology exists alongside paper-based bureaucracy and fax machines. Convenience stores serve as de facto service centers where you can pay bills, print documents, send packages, and withdraw cash. Mobile payments (PayPay, Suica/Pasmo IC cards) are ubiquitous, but cash is still important for many small businesses and restaurants.",
    essentials: [
      "Suica or Pasmo IC card (transit card that also works for contactless payments at convenience stores and vending machines)",
      "PayPay or LINE Pay (mobile payment apps widely accepted everywhere)",
      "Japan Post Bank or major bank account (Mitsubishi UFJ, Sumitomo Mitsui, Mizuho)",
      "LINE messaging app (Japan's dominant messaging platform, used for both personal and business communication)"
    ],
    whatSurprisesNewcomers: [
      "Fax machines are still used in many offices, hospitals, and government agencies. Sending a fax from a convenience store is a routine task.",
      "Cash remains important: many small restaurants, shrines, and local shops are cash-only. Always carry JPY 10,000-20,000.",
      "Municipal services vary significantly by ward/city: what is available online in Shibuya-ku may require an in-person visit in a smaller city.",
      "Amazon Japan, Rakuten, and convenience store services form the backbone of daily logistics in ways that replace many services that would require separate apps elsewhere."
    ]
  },
  culture: {
    text: "Japanese culture is layered, nuanced, and rewards those who approach it with patience and humility. The concepts of honne (true feelings) and tatemae (public facade) permeate all interactions: directness is rare, refusals are expressed through hesitation and hedging, and harmony is maintained by avoiding open conflict. Seasonal awareness is deeply embedded in daily life, from cherry blossom viewing (hanami) in spring to autumn leaf viewing (momijigari), seasonal foods, and gift-giving seasons (ochugen in summer, oseibo in winter). Cleanliness is paramount: shoes are removed before entering homes, many restaurants, and some offices. Bathing culture (onsen, sento) follows strict etiquette: wash thoroughly before entering the communal bath. Respect for others' space and time is fundamental: being quiet on trains, not eating while walking, queueing patiently, and arriving on time (or early) are non-negotiable social norms.",
    highlights: [
      "Never tip in Japan. Tipping is not just unnecessary but can cause genuine confusion and embarrassment. Staff may chase you down thinking you forgot your change.",
      "Eating while walking is considered impolite. Stop, eat, dispose of your packaging (carry it if no bin is available), and then continue walking.",
      "Never stick chopsticks vertically into a bowl of rice. This mimics a funeral incense ritual and is one of the strongest taboos at the table.",
      "Being loud on public transport is deeply disrespectful. Phones are set to silent (manner mode), and conversations are kept to a whisper. Phone calls on trains are avoided entirely.",
      "Business card exchange (meishi koukan) is a ritual: receive the card with both hands, read it carefully, and place it respectfully on the table during the meeting. Never write on it or shove it in your pocket."
    ]
  },

  transportationMobility:
    "Japan's public transportation is the gold standard globally. Tokyo's rail network (JR East, Tokyo Metro, Toei subway, and private railways) carries over 40 million passengers daily with near-perfect punctuality. The Shinkansen (bullet train) connects major cities at speeds up to 320 km/h: Tokyo to Osaka in 2.5 hours, Tokyo to Kyoto in 2 hours 15 minutes. IC cards (Suica, Pasmo) work seamlessly across trains, buses, and even convenience stores nationwide. Buses supplement rail in areas without train coverage. Cycling is a major mode of transport, with dedicated parking at most stations. Taxis are available but expensive (starting at JPY 420-500); ride-hailing apps like GO Taxi are growing but Uber operates only in limited areas. Driving is possible with an international driving permit (or Japanese license conversion) but unnecessary in major cities and complicated by expensive tolls, parking fees, and left-hand traffic.",

  internationalConnectivity:
    "Japan is excellently connected internationally through Tokyo Narita (NRT) and Haneda (HND) airports, plus Kansai International Airport (KIX) in Osaka. Haneda has expanded dramatically and now handles many international flights with the advantage of being only 30 minutes from central Tokyo. Direct flights connect to virtually every major city in Asia, North America, Europe, and Oceania. ANA and JAL are the main Japanese carriers, both consistently rated among the world's best. Flight times are approximately 12 hours to London, 13 hours to New York, 3 hours to Seoul, and 4 hours to Shanghai.",

  travelExploration:
    "Domestic travel in Japan is seamless and endlessly rewarding. The Japan Rail Pass (for tourists) or regional passes provide exceptional value for long-distance travel. Kyoto's 2,000 temples and shrines, Osaka's legendary street food scene (Dotonbori), Hiroshima's Peace Memorial, and Nara's friendly deer are within easy Shinkansen reach from Tokyo. Mount Fuji, hot spring resorts (Hakone, Beppu), the Japanese Alps (Kamikochi, Takayama), and the tropical beaches of Okinawa offer natural diversity. Seasonal travel is deeply ingrained: cherry blossom season (late March-April), autumn foliage (November), and winter ski resorts (Niseko, Hakuba) drive distinct travel patterns. Regional festivals (matsuri) throughout the year provide spectacular cultural experiences.",

  considerations: [
    "Cash Dependence: Despite technological advancement, many restaurants, small shops, medical clinics, and rural businesses accept only cash. Always carry JPY 10,000-20,000. ATMs at convenience stores (7-Eleven, Family Mart) accept international cards; many bank ATMs do not.",
    "Earthquake Preparedness: Japan experiences thousands of earthquakes annually, with significant ones occurring regularly. Learn earthquake safety procedures, keep a 'Go Bag' (emergency supplies for 3 days) ready at home, register for earthquake alerts on your phone, and know your evacuation route. Buildings constructed after 1981 meet stringent seismic codes.",
    "Housing Costs Upfront: Key money (reikin, 1-2 months' rent, non-refundable), security deposit (shikikin, 1-2 months), agent fee (1 month), and guarantor company fee combine to make initial move-in costs equal to 4-6 months' rent. Budget accordingly.",
    "The Guarantor System: Renting typically requires a Japanese guarantor (hoshonin) or a guarantor company. Without one, you cannot rent most apartments. Guarantor companies like GTN, JHF, and Casa charge 50-100% of one month's rent.",
    "Social Isolation Risk: The combination of language barriers, indirect communication styles, and the honne/tatemae distinction can make building genuine friendships challenging. Proactively join community activities, language exchanges, sports clubs, and neighborhood events."
  ],

  mistakes: [
    "Walking and eating simultaneously. This is considered sloppy and disrespectful. Stop at the vendor, eat there, and then continue. The exception is some festival (matsuri) settings where street food is part of the event.",
    "Tipping anyone. Do not leave tips at restaurants, hair salons, taxis, or hotels. Staff will be confused, possibly offended, and may run after you to return the money, believing you made an error.",
    "Being loud on public transport. Phone calls, loud conversations, and music without headphones on trains and buses are deeply frowned upon. Set your phone to 'manner mode' and keep your voice low.",
    "Sticking chopsticks vertically into rice. This mimics the incense sticks at a funeral ceremony (tsuya) and is one of the most offensive table manners violations. Lay chopsticks on the hashioki (rest) or across the bowl's rim.",
    "Ignoring the shoe protocol. Homes, many traditional restaurants, temples, and some offices require removing shoes at the entrance. Look for a genkan (entryway) and slippers. Bathroom slippers are separate from hallway slippers and must never be mixed."
  ],

  emergency: [
    {
      number: '110',
      service: 'Police (Keisatsu)',
      description: 'For crimes, accidents, and public safety emergencies. Operators primarily speak Japanese; request English support if needed.'
    },
    {
      number: '119',
      service: 'Fire & Ambulance (Shobo)',
      description: 'For fires and medical emergencies. State "Kyukyusha onegaishimasu" (ambulance please) or "Kaji desu" (fire). English support may require patience.'
    },
    {
      number: '050-3816-2787',
      service: 'Japan Visitor Hotline (JNTO)',
      description: 'Multilingual 24/7 support line for tourists and residents in emergencies. Available in English, Chinese, Korean, and Japanese.'
    }
  ],
  sources: [
    {
      name: 'Ministry of Foreign Affairs (MOFA)',
      category: 'Visa & Entry',
      description: 'Official visa information, entry requirements, and embassy directory for all nationalities.',
      link: 'https://www.mofa.go.jp/j_info/visit/visa/index.html'
    },
    {
      name: 'Immigration Services Agency of Japan (ISA)',
      category: 'Immigration & Residency',
      description: 'Handles residence permits, status changes, re-entry permits, and permanent residency applications.',
      link: 'https://www.isa.go.jp/en/index.html'
    },
    {
      name: 'Japan Pension Service',
      category: 'Social Security',
      description: 'Manages national pension enrollment, contributions, and lump-sum withdrawal payments for departing residents.',
      link: 'https://www.nenkin.go.jp/international/index.html'
    },
    {
      name: 'Japan Guide',
      category: 'Practical Living & Travel',
      description: 'The most comprehensive English-language resource for practical information on living in and traveling around Japan.',
      link: 'https://www.japan-guide.com/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Japan, consult the Ministry of Foreign Affairs of Japan or a Japanese embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/japan',
    mfaLink: 'https://www.mofa.go.jp/'
  },
  serviceDirectory: {
    title: "Service Directory - Japan",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Japan.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals (gyoseishoshi) and law firms assisting with work visas, residence status changes, renewals, and permanent residency applications.",
        providers: [
          { name: "Fragomen Japan", link: "https://www.fragomen.com" },
          { name: "Mori Hamada & Matsumoto", link: "https://www.mhmjapan.com" },
          { name: "Nishimura & Asahi", link: "https://www.nishimura.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies handling residential rentals, often with English-speaking staff and foreigner-friendly landlord networks.",
        providers: [
          { name: "GaijinPot Apartments", link: "https://apartments.gaijinpot.com" },
          { name: "Ken Corporation", link: "https://www.kencorp.com" },
          { name: "Able Inc.", link: "https://www.able.co.jp" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax and accounting experts covering Japanese income tax, residence tax, year-end adjustment, and cross-border tax obligations.",
        providers: [
          { name: "Deloitte Japan (Tohmatsu)", link: "https://www2.deloitte.com/jp" },
          { name: "PwC Japan", link: "https://www.pwc.com/jp" },
          { name: "KPMG Japan", link: "https://home.kpmg/jp/en/home.html" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services, from full container shipping to door-to-door delivery within Japan.",
        providers: [
          { name: "Yamato Transport (Kuroneko Yamato)", link: "https://www.kuronekoyamato.co.jp" },
          { name: "Nippon Express", link: "https://www.nipponexpress.com" },
          { name: "Crown Relocations Japan", link: "https://www.crownrelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Japanese language schools offering courses from beginner to business-level, including JLPT preparation.",
        providers: [
          { name: "Genki Japanese and Culture School", link: "https://genkijacs.com" },
          { name: "ISI Language School", link: "https://www.isi-education.com" },
          { name: "KAI Japanese Language School", link: "https://www.kaij.jp" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Hospitals and clinics with English-speaking staff, popular with foreign residents in major cities.",
        providers: [
          { name: "St. Luke's International Hospital (Tokyo)", link: "https://hospital.luke.ac.jp" },
          { name: "Tokyo Medical and Surgical Clinic", link: "https://www.tmsc.jp" },
          { name: "Keio University Hospital", link: "https://www.hosp.keio.ac.jp" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and agencies connecting international talent with Japanese employers, particularly for bilingual roles.",
        providers: [
          { name: "GaijinPot Jobs", link: "https://jobs.gaijinpot.com" },
          { name: "Robert Walters Japan", link: "https://www.robertwalters.co.jp" },
          { name: "Hays Japan", link: "https://www.hays.co.jp" }
        ]
      }
    ]
  }
};