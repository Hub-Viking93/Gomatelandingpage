export const jordan = {
  id: 'jordan',
  slug: 'jordan',
  name: 'Jordan',
  region: 'Middle East',
  complexity: 'Medium',
  languages: ['Arabic', 'English'],
  shortDescription: 'A stable, historic kingdom balancing ancient heritage with the realities of a volatile region.',
  heroImage: 'https://images.unsplash.com/photo-1548786811-dd6e453ccca7',
  flagAlt: 'Flag of Jordan',
  atAGlance: "Jordan is often described as an island of stability in a turbulent region — a constitutional monarchy ruled by the Hashemite dynasty that has maintained relative peace and diplomatic flexibility despite sharing borders with Syria, Iraq, Israel, the West Bank, and Saudi Arabia. The country has absorbed successive waves of refugees — Palestinian, Iraqi, and more recently Syrian — making it one of the world's largest per-capita hosts of displaced populations, and this reality shapes economics, infrastructure, and daily life in meaningful ways. Amman, the capital, is built across a series of hills and combines ancient Roman ruins with glass-fronted shopping malls, cafes in converted stone villas, and the dense, vibrant downtown area of Wast al-Balad. Jordan's economy is smaller and more constrained than its Gulf neighbors — there is no oil wealth, and tourism (Petra, Wadi Rum, the Dead Sea, Jerash) along with remittances, foreign aid, and light industry drive the country. Salaries are modest by regional standards, but so is the cost of living, and the quality of life for expatriates in diplomatic, development, NGO, technology, or regional-HQ roles can be exceptional. The Jordanian dinar is pegged to the US dollar at a strong rate (1 JOD is approximately USD 1.41), which makes financial planning predictable. Arabic is the official language but English is widely spoken in professional, educational, and tourist contexts. Amman's social scene is cosmopolitan and layered — Christian and Muslim communities coexist openly, secular and religious lifestyles mix, and the West Amman cafe and restaurant culture rivals anywhere in the region. Work permits require a Jordanian sponsor, and foreign nationals face restrictions in certain professions reserved for Jordanians.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: '30 days (Visa on Arrival for many)',
    costOfLiving: 'Medium',
    primaryLanguages: 'Arabic (Official), English (Widely spoken in business and education)',
  },
  visas: [
    {
      name: 'Jordan Pass (Tourist Visa + Sites Bundle)',
      targetAudience: 'Visitors staying 3+ nights',
      useCase: "A distinctive integrated tourism product that bundles the standard tourist visa fee waiver with prepaid entry to Petra and over 40 other archaeological and cultural sites. Must be purchased online before arrival in Jordan, and the holder must stay a minimum of three consecutive nights for the visa fee waiver to apply. Three tiers vary by number of days at Petra (one, two, or three).",
      duration: '30 days entry, extendable on arrival',
      link: 'https://www.jordanpass.jo/'
    },
    {
      name: 'Investor Residence (Investment Law)',
      targetAudience: 'Investors, Business owners',
      useCase: "Issued under Jordan's Investment Environment Law to foreign nationals who establish a qualifying business or invest in designated sectors. Minimum thresholds apply and vary by sector and location, with investments in development zones receiving preferential treatment. Investor residence is self-sponsored, does not depend on a separate employer, and qualifying investment levels can lead to longer-term or permanent residency status.",
      duration: '3-5 years, renewable; permanent residency available at higher thresholds',
      link: 'https://www.moin.gov.jo/'
    },
    {
      name: 'ASEZA Residence and Work (Aqaba Special Economic Zone)',
      targetAudience: 'Workers and investors in Aqaba',
      useCase: "The Aqaba Special Economic Zone Authority operates as a separate residence and work regime in the Red Sea port city of Aqaba, with its own tax incentives (reduced corporate income tax, customs exemptions on imports, and no sales tax on most goods and services within the zone). Foreign nationals working for ASEZA-registered employers or investing in zone businesses apply through ASEZA rather than the standard Ministry of Labour route.",
      duration: 'Tied to ASEZA employer or investment registration',
      link: 'https://www.aseza.jo/'
    },
    {
      name: 'Refugee and Protected Status (UNHCR-coordinated)',
      targetAudience: 'Syrian, Iraqi, Palestinian, Sudanese, Yemeni nationals',
      useCase: "Jordan hosts one of the world's largest per-capita refugee populations, with formal arrangements coordinated through UNHCR Jordan in conjunction with the Ministry of Interior. Registered refugees may receive Ministry of Interior service cards, access to designated camps (Zaatari, Azraq) or urban settlement, and in some categories work permit access in approved sectors. Long-resident Palestinian populations have specific status governed by separate historical arrangements.",
      duration: 'Variable; tied to protection status and registration',
      link: 'https://www.unhcr.org/jo/'
    },
    {
      name: 'Freelance / Self-Sponsorship via Company Formation',
      targetAudience: 'Freelancers, Independent professionals',
      useCase: "Independent work options in Jordan are narrower than in the Gulf states, with no dedicated freelancer visa. Freelancers typically establish a sole proprietorship or a limited liability company through the Companies Control Department to sponsor themselves, which requires capital registration and ongoing tax and social security compliance. Certain sectors (IT, consulting, media) are more practical than others, and the route demands real operational presence rather than a paper structure.",
      duration: 'Renewable with active business registration',
      link: 'https://www.ccd.gov.jo/'
    }
  ],
  requirements: [
    {
      title: 'Residence Permit Card (Iqama)',
      explanation: "A physical residence card issued by the General Directorate of Residency and Foreigners' Affairs after your work or investor permit is approved. It contains your personal details, residence category, and sponsor information. It is the primary proof of your legal status as a foreign resident.",
      importance: "Without a valid residence card, you cannot work legally, open a bank account, obtain a Jordanian driving license, or sign a rental contract at some agencies. Renewal is annual for most categories, and an expired card triggers overstay fines that accumulate daily. Your employer typically coordinates the process, but follow up proactively.",
      link: 'https://www.moin.gov.jo/'
    },
    {
      title: 'Ministry of Labour Work Permit',
      explanation: "A formal work authorization issued by the Ministry of Labour, separate from the residence card. It ties you to a specific employer and job title, and it must be renewed annually. Certain occupations (driver, cashier, receptionist, waiter, and several others) are legally reserved for Jordanian nationals.",
      importance: "Working without a valid work permit carries fines for both employee and employer, and it can lead to deportation. Changing jobs requires your current employer to formally release you, and the new employer must apply for a fresh permit — a gap in status is risky and should be avoided.",
      link: 'https://mol.gov.jo/'
    },
    {
      title: 'Bank Account',
      explanation: "Opening a Jordanian bank account requires your residence card, passport, work permit, salary certificate from your employer, and a local address confirmation. Major banks include Arab Bank, Housing Bank for Trade and Finance, Bank of Jordan, and Cairo Amman Bank. Minimum balance requirements vary.",
      importance: "Salaries for formal employment are typically paid by bank transfer, and rent is often paid by a combination of post-dated cheques and cash. International transfers, credit card applications, and utility direct debits all depend on having a local account. Arab Bank and Housing Bank have the most extensive ATM and branch networks.",
      link: 'https://www.cbj.gov.jo/'
    },
    {
      title: 'Sanad Digital Services',
      explanation: "Jordan's national digital services platform (Sanad app and portal), which provides access to a growing list of government services including residence renewals, driving license matters, and civil status documents. Registration requires your national or residence ID and a local mobile number.",
      importance: "Using Sanad can significantly reduce time spent in government offices, particularly for renewals and document requests. Many services still require in-person visits for foreigners, but the digital footprint is expanding, and having the app set up saves friction.",
      link: 'https://www.sanad.gov.jo/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Jordan's formal labor market is smaller than its Gulf neighbors but more diverse than the oil-dominated economies. Key sectors for foreign professionals include international development and humanitarian organizations (Amman hosts regional offices for the UN, major NGOs, and aid agencies working in Syria, Iraq, and Yemen), diplomatic missions, technology startups (Amman is a recognized regional tech hub), regional headquarters of multinational companies, tourism and hospitality, and specialized healthcare.",
    whereToLook: [
      "LinkedIn — the primary platform for professional roles, particularly in tech, development, and regional management",
      "Akhtaboot — the leading Jordan-specific job portal with strong local employer coverage",
      "Bayt.com and GulfTalent — regional Middle East portals with active Jordan listings",
      "ReliefWeb — essential for humanitarian and development roles with UN agencies, NGOs, and international organizations based in Amman",
      "Company career pages: Aramex, Hikma Pharmaceuticals, Orange Jordan, Zain Jordan, and the major banks"
    ],
    realityChecks: [
      "Certain professions are legally reserved for Jordanian nationals. Check the Ministry of Labour's restricted occupations list before assuming your role is open to foreign workers.",
      "Your residency is tied to your employer sponsor. Changing jobs requires a formal release from your current employer and a fresh work permit application from the new one — timing matters to avoid gaps.",
      "International organizations (UN, NGOs, embassies) pay significantly higher salaries than local employers and typically offer benefits in hard currency. Local private sector salaries can be modest by regional standards.",
      "Networking and referrals dominate hiring for professional roles. Many positions are filled through personal contacts before being publicly advertised. Active participation in professional communities in Amman matters."
    ]
  },
  salaryReality: {
    overview:
      "Salaries in Jordan vary dramatically by sector and employer type. International organizations, regional HQs, and diplomatic missions pay in hard currency at rates comparable to or higher than Gulf equivalents. Local private sector salaries are substantially lower, and the Jordanian labor market has faced sustained pressure from regional instability and refugee inflows. Personal income tax applies at progressive rates from roughly 5% to 30%, and Social Security contributions (roughly 7.5% employee, 14.25% employer) are deducted at source.",
    realityChecks: [
      "Personal income tax applies on a progressive scale, unlike the Gulf states where tax-free salaries are the norm. Factor in both income tax and social security when evaluating local offers.",
      "Cost of living is moderate overall but housing in West Amman (Abdoun, Sweifieh, Deir Ghbar) can be expensive relative to local salaries. Expatriate-targeted apartments are priced in a different market segment than local-market units.",
      "Utility costs (electricity, water, internet) are modest by global standards, but electricity is subsidized in tiers — heavy use pushes you into higher-cost brackets quickly, particularly with AC in summer and heating in winter.",
      "End-of-service indemnity is calculated according to Jordanian labor law, at one month's wage per year of service, which can provide meaningful lump sums for longer-tenured employees."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Personal income tax — often omitted from headline figures for expatriates moving from Gulf states",
      "Social security contributions — mandatory at roughly 7.5% of salary for employees",
      "Private school fees if your children attend American, British, or French curriculum schools — these range from JOD 5,000 to JOD 15,000 per child per year",
      "Private health insurance supplements — employer plans cover basics but comprehensive coverage often requires additional premium contributions"
    ]
  },
  housingSystem: {
    overview:
      "Housing in Amman is predominantly rental-based for expatriates, with purchases possible for foreigners but subject to Ministry of Interior approval and some neighborhood restrictions. West Amman neighborhoods dominate the expat market: Abdoun (upscale villas and apartments, embassy district), Sweifieh (central and commercial), Deir Ghbar (modern and high-end), Dabouq (spacious family villas), and Shmeisani (mid-range, close to business district). East Amman is generally more densely populated and more affordable, with a different character. Outside Amman, Aqaba (Red Sea port city) and Irbid (northern industrial hub) have smaller but established expat communities.",
    expectations:
      "Rental contracts are typically one year and paid in monthly, quarterly, or biannual installments. Security deposits of one to two months' rent are standard. Agency fees are typically one month's rent for a one-year lease, paid by the tenant. Unfurnished apartments are common; furnished options are more expensive but available. Key platforms include OpenSooq, Property Finder Jordan, and local Facebook groups for expatriates. Inspecting heating systems (most Amman buildings use diesel central heating or electric heaters) and checking water storage (rooftop tanks are standard due to intermittent mains supply) is essential before signing."
  },
  healthcareReality:
    "Jordan has historically been a regional medical tourism destination, with well-regarded private hospitals that attract patients from across the Middle East. The public healthcare system, run by the Ministry of Health and the Royal Medical Services, provides subsidized care to Jordanian nationals; expatriates typically rely on private insurance and private hospitals. Leading private facilities include King Hussein Cancer Center (internationally accredited oncology care), Jordan Hospital, Istiklal Hospital, Arab Medical Center, and the Italian Hospital. Quality of care is high for most conditions, and many physicians have trained in the US, UK, or Europe. Out-of-pocket costs for private care are substantially lower than in Western countries, but without insurance they can still be significant for major procedures. Health insurance is commonly provided by employers, though coverage limits and exclusions vary — reviewing your policy in detail before you need it is wise. Pharmacies are widespread, and many medications that require prescriptions elsewhere are available over the counter, though controlled substances are strictly regulated.",
  digitalLife: {
    overview:
      "Jordan has a growing digital government footprint through the Sanad platform, and the country positions itself as a regional ICT hub with a young, educated, tech-capable workforce. Internet connectivity is generally reliable in Amman and major cities, with Orange, Zain, and Umniah as the main providers. Fiber-to-the-home is available in urban neighborhoods; speeds elsewhere vary.",
    essentials: [
      "Sanad — national e-government services app for document requests, residence matters, and administrative tasks",
      "eFAWATEERcom — ubiquitous bill payment platform used for utilities, taxes, and many other payments",
      "Careem and Uber — ride-hailing apps, both widely available in Amman",
      "Talabat and Hungerstation — food and grocery delivery platforms"
    ],
    whatSurprisesNewcomers: [
      "VoIP services including WhatsApp calls, FaceTime, Zoom, and Google Meet work without restrictions in Jordan, which is a welcome contrast to some Gulf neighbors.",
      "Cash is still widely used in Jordan. Many smaller businesses, taxis, and local markets prefer or require cash. ATMs are widespread, and your debit card will see more action than in fully cashless countries.",
      "Power outages and water supply interruptions occur periodically, particularly in summer peak demand. Most buildings have rooftop water tanks and some have backup generators — factor this into your apartment choice.",
      "Winters in Amman are colder than many expect, with temperatures dropping close to freezing and occasional snow. Central heating is common in modern buildings but relies on diesel — budget for winter fuel costs."
    ]
  },
  culture: {
    text: "Jordanian culture is warm, hospitable, and highly relational. The Bedouin heritage of generosity and welcome is deeply embedded in both rural and urban society — guests are offered cardamom-scented coffee, sweet tea, and food in quantities that can overwhelm Western sensibilities. Religious diversity is a defining feature: Sunni Muslims are the majority, but Christians (primarily Greek Orthodox, Greek Catholic, and Latin Catholic) form a significant and historically prominent minority, and the two communities coexist openly, sharing neighborhoods, schools, and workplaces. Amman has a pronounced East-West divide: East Amman is older, denser, and more traditionally Arab; West Amman is newer, leafier, and more international, with cafes, art galleries, and cocktail bars alongside mosques and churches. Family is the core social unit, and social obligations to extended family take precedence over almost everything else. Hospitality to guests, particularly foreigners, is genuine — expect to be invited to people's homes for meals, holidays, and celebrations, and understand that accepting these invitations (and reciprocating) is how relationships are built.",
    highlights: [
      "Hospitality is not transactional. Accepting coffee, tea, or food when offered is a social obligation; declining repeatedly can be read as a rejection of friendship.",
      "The weekend runs Friday-Saturday. Friday is the main day of prayer, and many government offices and businesses are closed; Sunday is a normal working day.",
      "Dress is more liberal than in the Gulf. In West Amman, Western dress is common; in more conservative neighborhoods and small towns, modesty (covered shoulders and knees) is expected for both men and women.",
      "During Ramadan, eating, drinking, or smoking in public during daylight hours is illegal for everyone. Many restaurants close during the day but come alive after iftar; the atmosphere in the evenings is festive.",
      "Tipping is expected in restaurants (10%) and for taxi drivers, porters, and service staff. Rounding up is common; smaller bills for tips are helpful to carry."
    ]
  },
  transportationMobility:
    "Amman is a hilly, sprawling city with limited public transport by international standards. The Amman Bus Rapid Transit (BRT) network operates on dedicated lanes linking the city center with outer neighborhoods and has improved congestion on its routes. Regular city buses and shared taxis (serveece) connect most neighborhoods but can be confusing for newcomers without Arabic. Most expatriates rely on a combination of ride-hailing apps (Careem, Uber) and private cars. Taxis are affordable and plentiful but meters are often ignored — negotiate the fare before starting the ride, or use an app. Obtaining a Jordanian driving license is straightforward for holders of licenses from most Western countries through a conversion process at the Drivers and Vehicles Licensing Department. Fuel prices are moderate (JOD 0.90-1.10 per liter). Intercity travel to Aqaba, Petra, and Irbid is served by JETT buses (comfortable, reliable) and service taxis. Driving standards in Jordan are aggressive by Northern European standards — expect assertive merging, frequent horn use, and limited lane discipline.",
  internationalConnectivity:
    "Queen Alia International Airport (AMM), about 35 kilometers south of Amman, is Jordan's main international gateway and the hub for Royal Jordanian (a Oneworld alliance member). Direct flights connect Amman to major destinations across the Middle East, Europe, North America, and Asia. Flight times: London about 5 hours, Paris 5 hours, Dubai 3 hours, New York approximately 11 hours (nonstop seasonal). King Hussein International Airport (AQJ) in Aqaba handles regional traffic and seasonal European charter flights. Jordan's land border with Israel at the King Hussein Bridge and Wadi Araba crossings, and with Saudi Arabia, Syria, and Iraq, adds regional travel options — though some borders are subject to political conditions and may close unexpectedly.",
  travelExploration:
    "Jordan punches far above its weight as a travel destination. Petra, the Nabatean rock-carved city (UNESCO site and one of the New Seven Wonders), is the country's icon and can absorb days of exploration. Wadi Rum, the Mars-like desert valley where T.E. Lawrence operated, offers Bedouin camps, camel treks, and 4x4 adventures. The Dead Sea (the lowest point on earth) offers unique floating experiences and dramatic Jordan Valley landscapes. Jerash, north of Amman, preserves one of the best Roman provincial cities in the world. Aqaba on the Red Sea has coral reefs, diving, and relaxed resort culture. The Jordan Trail is a 675-km hiking route from Umm Qais in the north to Aqaba in the south, traversing the entire country. Weekend travel to Lebanon, Cyprus, Egypt, and the Gulf states is easy by short flights.",
  considerations: [
    "Regional Volatility: Jordan borders Syria, Iraq, Israel, and the West Bank. The country itself is stable and safe, but regional events can create short-term concerns (border closures, refugee inflows, currency pressures). Monitor diplomatic advisories and have contingency plans, but do not overestimate the direct impact on daily life in Amman.",
    "Water Scarcity: Jordan is one of the most water-poor countries in the world. Supply is often rationed — in many neighborhoods, municipal water is delivered to rooftop tanks only one or two days per week. Conserving water is a civic habit, and long showers mark you as an unthinking newcomer.",
    "Winter Cold and Heating Costs: Amman is at 900+ meters elevation, and winters can be genuinely cold, with occasional snow and temperatures near freezing. Most buildings rely on diesel central heating, and winter fuel bills can be significant. Check heating arrangements before signing a lease.",
    "Kafala and Restricted Occupations: Your work permit ties you to a specific employer, and certain job categories are closed to foreigners. Changing employers requires formal release and fresh paperwork. Plan transitions carefully to avoid status gaps.",
    "Customs and Cash Declarations: Travelers entering Jordan with more than USD 15,000 equivalent in cash must declare it at customs. Importing alcohol, restricted medications, or drone equipment can trigger delays or confiscation — check current rules before traveling."
  ],
  mistakes: [
    "Assuming all of Jordan looks like Amman's Abdoun. The country is far more diverse — economically, socially, and religiously — than the West Amman expat bubble suggests. Getting out of Amman early and often changes your understanding of where you live.",
    "Skipping the Jordan Pass. If you plan to visit Petra and other major sites, the Jordan Pass bundles the tourist visa fee with site entries at a significant discount — but you must purchase before arrival for the visa waiver to apply.",
    "Negotiating contracts verbally. Jordan's business culture is relational, but formal written contracts are still essential. Get employment terms, rental arrangements, and service agreements in writing — verbal understandings can dissolve under pressure.",
    "Ignoring customs norms around gender. Jordan is socially mixed but more conservative than Western cities. Public displays of affection draw attention, and in more traditional areas, shaking hands with a member of the opposite gender may not be appropriate unless they initiate.",
    "Carrying strong opinions on regional politics into casual conversation. Jordanians, Palestinians, and resident Syrians and Iraqis often hold deeply personal views. Listening is usually more appropriate than asserting in early conversations."
  ],
  emergency: [
    {
      number: '911',
      service: 'Unified Emergency',
      description: 'National unified emergency line for police, ambulance, fire, and civil defense. Operators speak Arabic and English. Available 24/7.'
    },
    {
      number: '191',
      service: 'Public Security Directorate (Police)',
      description: 'Direct line to the Public Security Directorate for non-emergency police matters, reports, and inquiries.'
    },
    {
      number: '199',
      service: 'Civil Defense (Fire & Rescue)',
      description: 'Direct line to civil defense for fire emergencies, rescue operations, and hazardous incidents.'
    }
  ],
  sources: [
    {
      name: 'Ministry of Interior - Jordan',
      category: 'Immigration & Residency',
      description: "Oversees the General Directorate of Residency and Foreigners' Affairs, which handles residence permits, entry procedures, and foreigner registration.",
      link: 'https://www.moin.gov.jo/'
    },
    {
      name: 'Ministry of Labour - Jordan',
      category: 'Employment',
      description: 'Regulates work permits, restricted occupations, labor contracts, and occupational safety for foreign and Jordanian workers.',
      link: 'https://mol.gov.jo/'
    },
    {
      name: 'Jordan Investment Commission (Ministry of Investment)',
      category: 'Business & Investment',
      description: 'Promotes foreign investment, manages investor residence applications, and administers development zone incentives.',
      link: 'https://www.moin.gov.jo/'
    },
    {
      name: 'Visit Jordan',
      category: 'Tourism & Lifestyle',
      description: 'Official tourism board with guides to attractions, the Jordan Pass, and practical information for visitors.',
      link: 'https://www.visitjordan.com/'
    }
  ],
  embassies: {
    description: "For consular assistance, passport services, and official guidance related to Jordan, consult the Jordanian Ministry of Foreign Affairs and Expatriates or a Jordanian embassy or consulate abroad.",
    directoryLink: 'https://www.embassypages.com/jordan',
    mfaLink: 'https://www.mfa.gov.jo/'
  },
  serviceDirectory: {
    title: "Service Directory - Jordan",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Jordan.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for work permits, residence renewals, investor visas, and labor law compliance.",
        providers: [
          { name: "Ali Sharif Zu'bi Advocates & Legal Consultants", link: "https://www.zubilaw.com" },
          { name: "Hadidi & Co. Advocates", link: "https://www.hadidi-law.com" },
          { name: "Khalifeh & Partners", link: "https://www.khalifehlaw.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and portals covering long-term rentals, property purchases, and relocation housing in Amman and Aqaba.",
        providers: [
          { name: "Property Finder Jordan", link: "https://www.propertyfinder.jo" },
          { name: "OpenSooq Jordan", link: "https://jo.opensooq.com" },
          { name: "RE/MAX Jordan", link: "https://www.remax.jo" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Firms handling income tax, social security, VAT, and cross-border income matters for residents and businesses.",
        providers: [
          { name: "PwC Jordan", link: "https://www.pwc.com/jo" },
          { name: "Deloitte Jordan", link: "https://www2.deloitte.com/jo" },
          { name: "KPMG Jordan", link: "https://kpmg.com/jo" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services providing packing, shipping, customs clearance, and storage.",
        providers: [
          { name: "Crown Relocations Jordan", link: "https://www.crownrelo.com" },
          { name: "Aramex Moving", link: "https://www.aramex.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Arabic language institutes offering Modern Standard Arabic, Levantine dialect, and intensive programs for diplomats and researchers.",
        providers: [
          { name: "Qasid Arabic Institute", link: "https://www.qasid.com" },
          { name: "Ali Baba International Center", link: "https://www.abinternationalcenter.com" },
          { name: "British Council Jordan", link: "https://www.britishcouncil.jo" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major private hospitals and healthcare groups offering specialist and general medical services.",
        providers: [
          { name: "King Hussein Cancer Center", link: "https://www.khcc.jo" },
          { name: "Jordan Hospital", link: "https://www.jordan-hospital.com" },
          { name: "Istiklal Hospital", link: "https://www.istiklalhospital.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms and portals connecting international talent with Jordanian and regional employers.",
        providers: [
          { name: "Akhtaboot", link: "https://www.akhtaboot.com" },
          { name: "Bayt.com", link: "https://www.bayt.com" },
          { name: "Michael Page Middle East", link: "https://www.michaelpage.ae" }
        ]
      }
    ]
  }
};
