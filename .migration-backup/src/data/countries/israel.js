export const israel = {
  id: 'israel',
  slug: 'israel',
  name: 'Israel',
  region: 'Middle East',
  complexity: 'High',
  languages: ['Hebrew', 'Arabic', 'English (widely spoken)'],
  shortDescription: 'A high-tech startup nation where ancient history meets relentless innovation, set against a complex geopolitical backdrop.',
  heroImage: 'https://images.unsplash.com/photo-1500990702037-7620ccb6a60a',
  flagAlt: 'Flag of Israel',
  atAGlance: "Israel is a country of extreme contrasts compressed into a very small territory. It is simultaneously one of the world's most advanced tech economies and one of its most contested geopolitical spaces. Daily life moves fast, is direct to the point of bluntness, and operates on a rhythm shaped by religious observance (Shabbat shuts down most commerce from Friday sunset to Saturday sunset), mandatory military service (which creates a tight-knit social fabric outsiders struggle to penetrate), and a pervasive security awareness that is simply part of the cultural DNA. Bureaucracy can be frustrating and chaotic, but Israelis are resourceful improvisers who navigate it with a mixture of persistence and personal connections (protekzia). The cost of living, especially in Tel Aviv, is among the highest in the world. For those who adapt to the intensity, Israel offers extraordinary professional opportunities, a vibrant cultural scene, world-class food, and a sense of communal energy that is difficult to find elsewhere. Integration requires thick skin, a willingness to be direct, and patience with systems that often feel improvised rather than designed.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 90 days (visa-free for most nationalities)',
    costOfLiving: 'Very High',
    primaryLanguages: 'Hebrew (Official), Arabic (Official), English (Widely spoken)',
  },
  visas: [
    {
      name: 'Tourist Visa (B/2)',
      targetAudience: 'Tourists, Short-term visitors',
      useCase: 'Tourism, family visits, short business meetings. Citizens of most Western countries receive this on arrival.',
      duration: 'Up to 90 days',
      link: 'https://www.gov.il/en/departments/topics/visa-to-israel'
    },
    {
      name: 'Work Visa (B/1)',
      targetAudience: 'Employed professionals',
      useCase: 'For foreign nationals employed by an Israeli company. The employer must sponsor the visa and demonstrate that no suitable Israeli candidate is available.',
      duration: 'Up to 1 year (renewable)',
      link: 'https://www.gov.il/en/departments/topics/work-permits-for-foreign-workers'
    },
    {
      name: 'Student Visa (A/2)',
      targetAudience: 'Students',
      useCase: 'For enrollment at an Israeli academic institution. Requires proof of acceptance, financial means, and health insurance.',
      duration: 'Duration of studies',
      link: 'https://www.gov.il/en/departments/topics/visa-to-israel'
    },
    {
      name: 'Aliyah (Law of Return)',
      targetAudience: 'Jewish individuals and eligible family members',
      useCase: 'Immigration under the Law of Return for anyone with at least one Jewish grandparent, or who has converted to Judaism. Grants immediate citizenship, absorption benefits, and full rights.',
      duration: 'Permanent (citizenship)',
      link: 'https://www.nbn.org.il/'
    },
    {
      name: 'Expert Visa (B/1 Expert)',
      targetAudience: 'High-skilled professionals, tech workers',
      useCase: 'Expedited work visa for foreign experts in technology, science, and other specialized fields. Faster processing and fewer restrictions than standard B/1.',
      duration: 'Up to 1 year (renewable)',
      link: 'https://innovationisrael.org.il/en/'
    }
  ],
  requirements: [
    {
      title: 'Teudat Zehut (Identity Card)',
      explanation: 'The Israeli national identity card issued to all residents and citizens. It contains your unique 9-digit ID number (Mispar Zehut) which is used for virtually every official and commercial interaction in the country.',
      importance: 'Your Teudat Zehut number is your key to Israeli bureaucracy. You need it for employment, banking, healthcare enrollment, signing a lease, receiving mail, and interacting with any government office. Without it, you cannot function as a resident.',
      link: 'https://www.gov.il/en/departments/topics/identity-card'
    },
    {
      title: 'Bituach Leumi (National Insurance Institute)',
      explanation: 'Israel\'s social security system. All residents must register and pay monthly contributions, which fund healthcare, unemployment, disability, pensions, and maternity benefits.',
      importance: 'Registration with Bituach Leumi is mandatory and is what activates your eligibility for public healthcare through a Kupat Cholim (health fund). Without it, you have no state healthcare coverage and no access to social benefits.',
      link: 'https://www.btl.gov.il/English%20Homepage/Pages/default.aspx'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening an Israeli bank account requires your Teudat Zehut or passport, proof of address, and sometimes proof of income. Major banks include Hapoalim, Leumi, Discount, and Mizrahi-Tefahot.',
      importance: 'Employers pay salaries via bank transfer, landlords require post-dated checks (still common in Israel) or standing orders, and many services require a local account. Without one, receiving your salary and paying rent becomes extremely difficult.',
      link: 'https://www.bankhapoalim.co.il/en'
    },
    {
      title: 'Kupat Cholim (Health Fund)',
      explanation: 'Israel has four public health funds (Clalit, Maccabi, Meuhedet, Leumit) that provide universal healthcare coverage under the National Health Insurance Law. You must choose one upon registering with Bituach Leumi.',
      importance: 'Your Kupat Cholim membership card is your access to doctors, specialists, prescriptions, and hospitals. You can switch funds once a year. Each fund has different supplemental insurance tiers and clinic networks, so choosing wisely matters for your day-to-day healthcare experience.',
      link: 'https://www.health.gov.il/English/Topics/HealthInsurance/Pages/HealthFunds.aspx'
    }
  ],
  jobsAndIncome: {
    overview:
      "Israel's economy is driven by its world-renowned tech sector ('Startup Nation'), alongside strong defense, agriculture, and biotech industries. Hiring culture is informal and fast-paced, with networking and personal referrals (protekzia) playing a larger role than formal applications.",
    whereToLook: [
      "LinkedIn",
      "AllJobs.co.il",
      "Startup Nation Central, F2 (Founders and Funders)"
    ],
    realityChecks: [
      "Hebrew is essential for most non-tech roles and significantly helps even in English-speaking tech companies.",
      "Military service (or national service) creates deep professional networks that outsiders lack. Building your own network takes active effort.",
      "Work culture is direct and informal; hierarchy is flat, and employees are expected to challenge ideas openly."
    ]
  },
  salaryReality: {
    overview:
      "Tech salaries are competitive by global standards, but the very high cost of living, especially in Tel Aviv, erodes purchasing power significantly. The currency is the New Israeli Shekel (NIS).",
    realityChecks: [
      "Tel Aviv is consistently ranked among the most expensive cities in the world. Expect housing alone to consume 30-50% of your income.",
      "Income tax is progressive and can reach 50% at higher brackets, plus Bituach Leumi contributions.",
      "Tech salaries in Israel are high but still below US equivalents; the gap narrows when factoring in universal healthcare and other benefits."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Net pay after progressive income tax and Bituach Leumi deductions",
      "Pension fund and education fund (Keren Hishtalmut) employer contributions, which are a significant part of total compensation",
      "The real cost of housing in central Tel Aviv versus peripheral cities"
    ]
  },
  housingSystem: {
    overview:
      "The rental market is competitive, particularly in Tel Aviv and Jerusalem. Leases are typically for 12 months with an option to renew. Landlords commonly require post-dated checks (a uniquely Israeli practice) or bank guarantees. Prices are often quoted in US dollars but paid in shekels.",
    expectations:
      "Expect to pay 3,500-8,000 NIS/month for a small apartment in central Tel Aviv, less in other cities. Arrive with enough cash for first month, deposit (usually one month), and a stack of post-dated checks. Real estate agents (metavchim) charge one month's rent as commission. Beware of scams on Facebook groups; always visit in person before paying."
  },
  healthcareReality:
    "Israel has a universal healthcare system consistently ranked among the best in the world. All residents are covered through their chosen Kupat Cholim (health fund). Basic coverage is comprehensive and includes doctor visits, hospitalization, and prescriptions. Wait times for specialists can be long in the public system, which drives many Israelis to purchase supplemental insurance (Mashlem and Platinum tiers) for faster access and broader specialist choice. Emergency care at hospitals is immediate and excellent.",
  digitalLife: {
    overview:
      "Israel is highly connected with excellent mobile coverage and widespread free Wi-Fi. Government services are increasingly digital through the gov.il portal, though some bureaucratic processes still require in-person visits.",
    essentials: [
      "gov.il (central government services portal)",
      "Kupat Cholim app (Clalit, Maccabi, Meuhedet, or Leumit)",
      "Bit / Paybox (mobile payment apps, similar to Venmo)",
      "Waze (Israeli-born navigation, essential for driving)"
    ],
    whatSurprisesNewcomers: [
      "Post-dated paper checks are still widely used for rent and large payments, even as digital payments grow.",
      "Government websites often work better in Hebrew than English; use Google Translate or ask for help.",
      "WhatsApp is the default communication tool for everything from business to building management to parent groups."
    ]
  },
  culture: {
    text: 'Israeli culture is defined by "chutzpah" (audacity/nerve) and an intense directness that newcomers often mistake for rudeness. People will cut in line, argue loudly, and then invite you for Shabbat dinner. The concept of personal boundaries is looser than in Western Europe or North America; strangers will ask you how much you earn or why you are not married. Shabbat (Friday sunset to Saturday sunset) transforms the country weekly: public transport stops, most businesses close, and family gatherings take center stage. Food culture is extraordinary, blending Middle Eastern, Mediterranean, and global influences. Mandatory military service at 18 creates a shared national experience and tight social bonds.',
    highlights: [
      'Shabbat (Friday evening to Saturday evening) shuts down most public transport and commerce. Plan your week around it.',
      'Directness is a cultural value, not an insult. Israelis respect people who speak their mind.',
      'Food is central to social life: hummus, shakshuka, and Friday night dinner are cultural institutions.',
      'Security checks at malls, train stations, and public buildings are routine; always carry ID.'
    ]
  },
  transportationMobility:
    "Public transport is improving but still limited, especially on Shabbat when buses and trains mostly stop running (though shared taxis, sherut, operate on some routes). The Rav-Kav smart card works across buses and trains. Tel Aviv has a new light rail under expansion. Driving is common but aggressive; parking in cities is expensive and scarce. Domestic flights connect Eilat to the center. Israel is small enough that most places are within 2-3 hours by car.",
  internationalConnectivity:
    "Ben Gurion International Airport (TLV) near Tel Aviv is one of the most well-connected airports in the region, with frequent flights to Europe, North America, and Asia. Security screening is thorough and can add significant time to departure; arrive 3 hours before international flights. Ramon Airport near Eilat serves some budget carriers.",
  travelExploration:
    "Despite its small size, Israel offers remarkable geographic diversity: Mediterranean beaches, the Negev desert, the Dead Sea, the Sea of Galilee, and the mountains of the Golan Heights. Jerusalem, Haifa, and Akko offer deep historical exploration. Weekend trips to the Dead Sea, Ein Gedi, or the northern Galilee are popular. International travel options are limited to flights due to closed land borders with most neighbors, though Jordan and Egypt are accessible.",
  considerations: [
    'Security is a daily reality, not an abstraction. Sirens, shelters (mamad/miklat), and the Home Front Command app are things every resident should know. Most buildings have safe rooms.',
    'Shabbat logistics: No public buses or trains from Friday afternoon to Saturday evening in most of the country. Stock up on groceries, have cash on hand, and plan travel accordingly.',
    'The cost of living in Tel Aviv rivals London and New York. Groceries, restaurants, and housing are all significantly more expensive than newcomers expect. Budget carefully.',
    'Bureaucracy (especially at Misrad HaPnim / Population Authority) can be extremely slow and frustrating. Bring every document you might need, plus copies. Expect multiple visits.'
  ],
  mistakes: [
    'Assuming everything works on Shabbat. Many newcomers arrive unprepared for the weekly shutdown and find themselves without food, transport, or open shops.',
    'Not learning basic Hebrew early. While English is widely spoken in tech, daily life, bureaucracy, and social integration all require at least conversational Hebrew.',
    'Underestimating the cost of living. Tel Aviv rent alone can consume most of a mid-level salary. Research realistic budgets before committing to a neighborhood.',
    'Ignoring security protocols. Learn where your nearest shelter is, download the Home Front Command (Pikud HaOref) app, and take sirens seriously from day one.'
  ],
  emergency: [
    {
      number: '100',
      service: 'Police',
      description: 'Israel Police emergency line. Available 24/7.'
    },
    {
      number: '101',
      service: 'Magen David Adom (Ambulance)',
      description: 'Israel\'s national emergency medical service. Equivalent to ambulance/paramedics.'
    },
    {
      number: '102',
      service: 'Fire Department',
      description: 'Israel Fire and Rescue Services for fire emergencies.'
    }
  ],
  sources: [
    {
      name: 'Population and Immigration Authority',
      category: 'Immigration',
      description: 'The Israeli government body responsible for visas, residency permits, and citizenship.',
      link: 'https://www.gov.il/en/departments/immigration_and_population_authority'
    },
    {
      name: 'Nefesh B\'Nefesh',
      category: 'Aliyah Support',
      description: 'The primary organization facilitating Jewish immigration (Aliyah) to Israel, providing guidance, grants, and community support.',
      link: 'https://www.nbn.org.il/'
    },
    {
      name: 'Ministry of Health',
      category: 'Healthcare',
      description: 'Official information on the Israeli healthcare system, health funds, and public health.',
      link: 'https://www.health.gov.il/English/Pages/HomePage.aspx'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Israel, consult the Israeli Ministry of Foreign Affairs or an Israeli embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/israel',
    mfaLink: 'https://www.gov.il/en/departments/ministry_of_foreign_affairs'
  },
  serviceDirectory: {
    title: "Service Directory - Israel",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Israel.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal assistance for work visas, residency, and Aliyah-related legal matters.",
        providers: [
          { name: "Fragomen Israel", link: "https://www.fragomen.com" },
          { name: "Kan-Tor & Acco", link: "https://www.ktalegal.com" },
          { name: "Goldfarb Gross Seligman", link: "https://www.goldfarb.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Property agents specializing in rentals and purchases for newcomers and expats.",
        providers: [
          { name: "Anglo-Saxon Real Estate", link: "https://www.anglo-saxon.co.il" },
          { name: "RE/MAX Israel", link: "https://www.remax.co.il" },
          { name: "Keller Williams Israel", link: "https://www.kwisrael.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Israeli tax law, particularly for new immigrants (Olim) who receive special tax benefits for up to 10 years.",
        providers: [
          { name: "KPMG Israel", link: "https://kpmg.com/il" },
          { name: "Deloitte Israel", link: "https://www.deloitte.com/il" },
          { name: "BDO Israel", link: "https://www.bdo.co.il/en" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International shipping and relocation services for moving to Israel.",
        providers: [
          { name: "Sonigo International Shipping", link: "https://www.sonigo.com" },
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Israel", link: "https://www.agsmovers.com/en/our-agencies/israel" }
        ]
      },
      {
        name: "Language Schools",
        description: "Hebrew language instruction (Ulpan) for new immigrants and residents.",
        providers: [
          { name: "Ulpan Etzion (Jewish Agency)", link: "https://www.jewishagency.org" },
          { name: "Ulpan Gordon", link: "https://www.ulpangordon.co.il" },
          { name: "Citizen Cafe", link: "https://www.citizencafe.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "The four public health funds providing universal coverage, plus private options.",
        providers: [
          { name: "Clalit Health Services", link: "https://www.clalit.co.il/en" },
          { name: "Maccabi Healthcare Services", link: "https://www.maccabi4u.co.il/en" },
          { name: "Meuhedet Health Fund", link: "https://www.meuhedet.co.il/en" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms connecting international talent with Israeli employers, especially in the tech sector.",
        providers: [
          { name: "Startup Nation Central", link: "https://startupnationcentral.org" },
          { name: "Manpower Israel", link: "https://www.manpower.co.il/en" },
          { name: "AllJobs", link: "https://www.alljobs.co.il" }
        ]
      }
    ]
  }
};
