export const unitedStates = {
  id: 'united-states',
  slug: 'united-states',
  name: 'United States',
  region: 'Americas',
  complexity: 'High',
  languages: ['English'],
  shortDescription: 'A vast land of opportunity, diversity, and extreme contrasts.',
  heroImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?',
  flagAlt: 'Flag of United States',
  atAGlance: "The United States is a continent-sized country of 330 million people where your experience varies so dramatically by state and city that generalizations are almost meaningless. Life in New York City, rural Montana, suburban Texas, and coastal California might as well be different countries. The culture is fundamentally individualistic — personal freedom, self-reliance, and entrepreneurial ambition are the founding values. Americans are generally friendly, optimistic, and open to strangers in a way that can feel disorienting to Europeans (yes, the cashier really does want to know how your day is going). Everything is built around the car: distances are vast, public transit is limited or nonexistent outside a handful of major metros, and 'a quick drive' can mean two hours. The economy is the world's largest, and the job market — while competitive — offers compensation levels that are often 2-3x what the same role pays in Europe, particularly in tech, finance, healthcare, and consulting. However, this comes with a critical trade-off: there is no universal healthcare, limited paid leave, and employment is typically 'at-will,' meaning you can be fired at any time without cause in most states. Your employer-sponsored health insurance is often the single most important benefit in your compensation package. The credit system underpins everything from renting an apartment to getting a mobile phone plan, and newcomers start with no credit history — not a low score, but literally no score — which creates immediate practical barriers. Sales tax is never included in displayed prices, tipping is mandatory (not optional), and the imperial measurement system (miles, Fahrenheit, pounds, gallons) requires genuine mental recalibration. For all its contradictions, the US offers unparalleled career opportunity, consumer choice, cultural diversity, and geographic variety — but it demands self-reliance and financial planning in a way that countries with stronger social safety nets do not.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: '90 days (ESTA) / 6 months (B1/B2)',
    costOfLiving: 'High (Location dependent)',
    primaryLanguages: 'English (Spanish widely spoken)',
  },
  visas: [
    {
      name: 'H-1B Visa (Specialty Occupations)',
      targetAudience: 'Skilled Professionals',
      useCase: 'For workers in specialized fields requiring at least a bachelor\'s degree (IT, engineering, finance, science, architecture). Requires employer sponsorship and is subject to an annual lottery cap of 65,000 (plus 20,000 for US master\'s degree holders). The lottery is conducted in March with an October 1 start date. Premium processing (15 days) available for an additional fee.',
      duration: '3 years (renewable to 6, extendable during green card processing)',
      link: 'https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations'
    },
    {
      name: 'O-1 Visa (Extraordinary Ability)',
      targetAudience: 'Individuals with Extraordinary Ability or Achievement',
      useCase: 'For individuals who can demonstrate extraordinary ability in sciences, arts, education, business, or athletics through sustained national or international acclaim. No annual cap, but a high evidentiary burden — requires documentation such as major awards, published work, high salary, or critical role at distinguished organizations. An employer or agent must petition on your behalf.',
      duration: 'Up to 3 years (renewable in 1-year increments)',
      link: 'https://www.uscis.gov/working-in-the-united-states/temporary-workers/o-1-visa-individuals-with-extraordinary-ability-or-achievement'
    },
    {
      name: 'ESTA (Electronic System for Travel Authorization)',
      targetAudience: 'Citizens of Visa Waiver Program Countries',
      useCase: 'Pre-authorization for citizens of 40 eligible countries to enter the US for tourism or business without a visa. Strictly limited to 90 days — overstaying even by one day triggers a ban on future ESTA travel and may require a full visa for subsequent visits. Cannot be extended or changed to another status while in the US.',
      duration: '90 days (strict, no extensions)',
      link: 'https://esta.cbp.dhs.gov/'
    },
    {
      name: 'F-1 Student Visa',
      targetAudience: 'International Students',
      useCase: 'For full-time students enrolled in accredited US academic institutions (universities, colleges, language programs). Allows limited on-campus work (20 hours/week during semester). After graduation, Optional Practical Training (OPT) allows 12 months of work in your field of study (36 months for STEM graduates), which is a common pathway to H-1B sponsorship.',
      duration: 'Duration of study + OPT period',
      link: 'https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment'
    },
    {
      name: 'EB-5 Immigrant Investor Visa',
      targetAudience: 'Investors',
      useCase: 'For foreign investors who invest a minimum of USD 800,000 in a US commercial enterprise in a Targeted Employment Area (or USD 1,050,000 otherwise) that creates at least 10 full-time jobs for US workers. Grants conditional permanent residency (green card) to the investor and immediate family members.',
      duration: 'Conditional Permanent Residency (2 years, then full green card)',
      link: 'https://www.uscis.gov/working-in-the-united-states/permanent-workers/eb-5-immigrant-investor-program'
    }
  ],
  requirements: [
    {
      title: 'Social Security Number (SSN)',
      explanation: 'A 9-digit number issued by the Social Security Administration (SSA) that serves as your primary tax identification and social security tracking number. You apply in person at a local SSA office with your passport, visa, I-94 arrival record, and work authorization documents. Processing takes approximately 2-4 weeks.',
      importance: 'The SSN is essential for legal employment, tax filing (IRS), building credit history, and accessing many services. Employers require it for payroll. Landlords, mobile phone providers, and financial institutions routinely request it. Without an SSN, you cannot build credit, which affects your ability to rent apartments, lease cars, and obtain loans. It is also linked to your eventual Social Security retirement benefits.',
      link: 'https://www.ssa.gov/ssnumber/'
    },
    {
      title: 'Credit History (Credit Score)',
      explanation: 'A financial track record maintained by three major credit bureaus (Equifax, Experian, TransUnion) and scored using the FICO model (300-850). Your credit score is built over time through responsible use of credit cards, loans, and on-time bill payments.',
      importance: 'Newcomers arrive with no credit history — not a low score, but literally no score at all. This is a significant practical barrier: landlords check credit for rental applications, car dealers require it for leasing, banks evaluate it for loans, and even some employers and mobile providers check credit. Building credit should start immediately through secured credit cards, credit-builder loans, or services like Deserve or Nova Credit that translate international credit history.',
      link: 'https://www.usa.gov/credit-reports'
    },
    {
      title: 'Health Insurance',
      explanation: 'Private health insurance coverage is essential in the US. Most employed professionals receive insurance through their employer (employer-sponsored plans), which covers the employee and often dependents. If your employer does not provide insurance, you can purchase plans through the Health Insurance Marketplace (healthcare.gov) during Open Enrollment (November-January) or after a qualifying life event.',
      importance: 'There is no universal public healthcare system. Without insurance, a single emergency room visit can cost USD 5,000-50,000+, a routine doctor\'s visit USD 200-500, and a hospital stay tens or hundreds of thousands of dollars. Understanding your plan\'s deductible, copay, coinsurance, out-of-pocket maximum, and network restrictions is critical. Always confirm a provider is "in-network" before scheduling appointments.',
      link: 'https://www.healthcare.gov/'
    },
    {
      title: 'US Bank Account',
      explanation: 'Opening a US bank account typically requires your passport, SSN (or ITIN), proof of address, and a minimum deposit. Major national banks include Chase, Bank of America, Wells Fargo, and Citibank. Online banks (Ally, Marcus, SoFi) and newcomer-friendly options (Wise, Mercury) may accept ITIN if SSN is not yet available.',
      importance: 'A US bank account is necessary for receiving salary via direct deposit (the standard payment method), paying rent, setting up automatic bill payments, and building your financial footprint. Many landlords and employers require a US bank account. Credit-building products often require one as a foundation.',
      link: 'https://www.fdic.gov/resources/consumers/'
    }
  ],
  jobsAndIncome: {
    overview: "The US job market is the world's largest, highly dynamic, and extremely decentralized. Hiring is fast-paced (often 2-6 weeks from application to offer), role-specific, and heavily driven by networks and online applications. Major hubs vary by industry: San Francisco/Bay Area and Seattle for tech, New York for finance and media, Houston for energy, Boston for biotech and education, Los Angeles for entertainment, and Washington DC for government and consulting. Visa sponsorship is a primary gatekeeper — many employers are unwilling to sponsor H-1B visas, especially smaller companies.",
    whereToLook: [
      "LinkedIn — the dominant professional networking and job platform in the US",
      "Indeed (indeed.com) — the largest general job search engine",
      "Glassdoor — job listings combined with salary data and company reviews",
      "Company career pages — many large employers (Google, Amazon, Meta, Goldman Sachs) hire primarily through direct applications",
      "Specialized platforms: Wellfound (formerly AngelList) for startups, Hired for tech, Dice for IT"
    ],
    realityChecks: [
      "Visa status is the primary gatekeeper for employment. Many employers will not sponsor H-1B visas, and the annual lottery means timing is critical. STEM OPT extension (3 years for F-1 graduates) provides a valuable bridge.",
      "Employment is 'at-will' in 49 states (Montana is the exception), meaning you can be terminated at any time without cause and without notice, unless your contract specifies otherwise.",
      "Benefits are a critical component of total compensation — health insurance, 401(k) match, stock options/RSUs, PTO, and parental leave vary enormously between employers and can represent 20-40% of total comp.",
      "Networking is as important as your resume. Many positions are filled through referrals before being publicly posted. Invest in LinkedIn, attend industry events, and build relationships early."
    ]
  },
  salaryReality: {
    overview: "US salaries are among the highest in the world, particularly in tech, finance, healthcare, and consulting. A software engineer in San Francisco might earn USD 150,000-250,000+, while the same role in Austin or Chicago pays USD 100,000-170,000. However, the lack of universal healthcare, limited paid leave, and state/local tax variations mean that headline compensation figures require careful analysis. Federal income tax is progressive (10-37%), but state income tax adds 0-13.3% depending on where you live (Texas, Florida, Nevada, and Washington have no state income tax).",
    realityChecks: [
      "Gross salary comparisons with other countries are misleading without factoring in healthcare costs, retirement savings obligations, and state/local taxes.",
      "Health insurance premiums (employer-sponsored plans average USD 100-600/month for employee-only coverage, more for family) plus deductibles (USD 1,500-7,000/year) significantly affect net financial position.",
      "The 401(k) employer match is essentially free money — if your employer matches 4-6% of salary, not contributing to that level is leaving compensation on the table.",
      "State and local taxes create dramatically different financial outcomes: a USD 150,000 salary in Texas (no state tax) vs. California (13.3% top marginal rate) vs. New York City (state + city tax) yields very different take-home pay."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Health insurance premiums, deductibles, copays, and out-of-pocket maximums — easily USD 3,000-10,000 per year even with employer coverage",
      "State and city income taxes that vary from 0% (Texas, Florida) to 13.3% (California top rate), fundamentally changing net income",
      "401(k)/retirement plan contributions and employer matching — critical for long-term financial security in a country without guaranteed pensions",
      "The cost of childcare (USD 1,000-3,000+ per month in major cities) which is rarely subsidized and represents a major expense for families"
    ]
  },
  housingSystem: {
    overview: "The US housing market is overwhelmingly rental-based for newcomers, with significant variation by city. In New York, apartments are small, expensive (one-bedroom in Manhattan: USD 3,000-5,000/month), and require extensive documentation including credit checks, proof of income (40x monthly rent annually), and sometimes a guarantor. In cities like Austin, Denver, Nashville, or Raleigh, the same money gets considerably more space. Popular expat-friendly areas vary by city: in NYC, Brooklyn and Queens offer relative value; in San Francisco, the Mission and Sunset districts; in Los Angeles, the Westside and Silver Lake; in Chicago, Lincoln Park and Wicker Park.",
    expectations: "Expect credit checks, security deposits (typically one month's rent), and income verification (usually 3x monthly rent as gross monthly income). Without US credit history, you may need to pay several months upfront, provide a co-signer/guarantor, or use services that help newcomers (e.g., Jetty, Rhino for deposit alternatives). Leases are typically 12 months. Utilities (electricity, gas, water, internet) are usually separate and add USD 150-400 per month. Always read the lease carefully — early termination penalties, renewal terms, and maintenance responsibilities vary."
  },
  healthcareReality: "The US healthcare system is predominantly private, employer-linked, and expensive. Quality at top institutions is world-class — hospitals like Mayo Clinic (Rochester, MN), Massachusetts General Hospital (Boston), Johns Hopkins (Baltimore), Cleveland Clinic, and UCSF Medical Center are globally ranked. However, access is entirely dependent on insurance coverage and network membership. An emergency room visit can cost USD 5,000-15,000, a routine MRI USD 1,000-3,000, and a single night of hospital stay USD 3,000-10,000+ without insurance. Employer-sponsored plans typically involve a monthly premium, an annual deductible (amount you pay before insurance kicks in), copays (fixed fee per visit), coinsurance (percentage you pay after deductible), and an out-of-pocket maximum. Understanding these terms before you need care is essential. Urgent care centers (walk-in clinics like CityMD, MinuteClinic, MedExpress) are a cost-effective alternative to emergency rooms for non-life-threatening issues. Telemedicine (Teladoc, MDLive, Amwell) is widely available for routine consultations.",
  digitalLife: {
    overview: "The US is highly digitized in consumer services but fragmented in government and administrative systems. There is no centralized digital identity system — your SSN, driver's license, and credit score collectively serve as your identity across different contexts. Each state has its own DMV, tax system, and government portals. Consumer technology is advanced, with mobile payments, online banking, and app-based services for virtually everything.",
    essentials: [
      "Social Security Number (SSN) — the foundational identifier for employment, taxes, credit, and many services",
      "US bank account with mobile banking app — Chase, Bank of America, or a digital bank like Ally or SoFi",
      "Credit monitoring service (Credit Karma, Experian free tier) — essential for tracking your credit-building progress",
      "Venmo or Zelle — peer-to-peer payment apps used universally for splitting bills, paying friends, and small transactions"
    ],
    whatSurprisesNewcomers: [
      "Credit score affects everything: apartment applications, car leases, mobile phone plans, insurance rates, and even some job applications check credit. Building credit is a deliberate, months-long process.",
      "Many services require in-person verification despite digital availability — SSA offices, DMV visits, and notarization are common requirements.",
      "Digital experiences vary wildly by state: California's DMV is fully online, while other states require office visits for basic tasks.",
      "Checks (cheques) are still used in the US for rent payments and some bills, which surprises newcomers from countries where bank transfers dominate."
    ]
  },
  culture: {
    text: "American culture is defined by individualism, optimism, and a directness that can be either refreshing or jarring depending on your background. Small talk is an art form — strangers will chat in elevators, grocery lines, and at bus stops, and the phrase 'How are you?' is a greeting, not a genuine inquiry (the expected answer is 'Good, thanks!'). Tipping is embedded in the service economy: servers, bartenders, hairdressers, taxi drivers, and delivery workers depend on tips as a significant portion of their income. The work ethic is intense — Americans work more hours, take fewer vacation days (typically 10-15 days/year vs. 25-30 in Europe), and blur the line between work and personal life more than most other developed countries. Sports (American football, basketball, baseball, ice hockey) are major social bonding activities and conversation topics. The society is politically polarized, and politics and religion are topics best avoided in casual conversation until you know people well.",
    highlights: [
      "Tipping is mandatory, not optional. 18-20% is standard at sit-down restaurants; 15% is the bare minimum and signals dissatisfaction. Bartenders expect USD 1-2 per drink. Not tipping is considered theft of service because base wages are low (often USD 2-5/hour for tipped workers).",
      "Personal space is valued. Americans maintain a larger bubble than many cultures — standing too close during conversation makes people uncomfortable.",
      "'How are you?' is a greeting, not a question. The expected response is positive ('Good, thanks!'), not an honest assessment of your emotional state.",
      "The imperial system is used everywhere: miles (not kilometers), Fahrenheit (not Celsius), pounds (not kilograms), gallons (not liters). Learn key conversions: 70°F = 21°C, 1 mile = 1.6 km.",
      "Shoes in the house: Many Americans wear shoes indoors. Do not assume you should remove yours unless the host indicates otherwise (a shoe rack by the door is the signal)."
    ]
  },
  transportationMobility: "The US is overwhelmingly car-dependent. Only a handful of cities have functional public transit systems: New York City (MTA subway and buses — the only US city where most residents do not own a car), Chicago (CTA 'L' trains and buses), San Francisco (BART, Muni), Washington DC (Metro), Boston (MBTA 'T'), and Philadelphia (SEPTA). In virtually every other city, car ownership is essential for daily life. Ride-hailing via Uber and Lyft is available nationwide and affordable for occasional use. For inter-city travel, domestic flights are the primary mode (Southwest, Delta, United, American, JetBlue), with Amtrak trains connecting the Northeast Corridor (Boston-NYC-Philadelphia-DC) effectively but serving most other routes poorly. Car rental is straightforward with a foreign or international driving license. Gas (gasoline) is significantly cheaper than in Europe — approximately USD 3-4 per gallon. Highway infrastructure is extensive but toll roads are common in the Northeast.",
  internationalConnectivity: "The US has the largest and most connected aviation network in the world. Major international gateways include JFK and Newark (New York), LAX (Los Angeles), ORD (Chicago O'Hare), MIA (Miami), SFO (San Francisco), IAD (Washington Dulles), ATL (Atlanta — the world's busiest airport), and DFW (Dallas/Fort Worth). Direct flights connect to virtually every major city worldwide. Flight times include 7-8 hours to London, 10-12 hours to Paris, 14-16 hours to Tokyo, 5-6 hours to São Paulo (from Miami), and 5 hours coast-to-coast (NYC to LA). Major US carriers (Delta, United, American, JetBlue, Southwest) and international airlines provide extensive coverage.",
  travelExploration: "The geographic diversity of the US is staggering. The National Park system includes 63 parks spanning every ecosystem: Grand Canyon (Arizona), Yellowstone (Wyoming/Montana), Yosemite (California), Zion (Utah), Acadia (Maine), Great Smoky Mountains (Tennessee/North Carolina), and Glacier (Montana) are among the most spectacular. The country spans six time zones and includes tropical beaches (Hawaii, Florida Keys), alpine skiing (Colorado, Utah, Vermont), deserts (Arizona, New Mexico, Nevada), vast prairies (Kansas, Nebraska), and temperate rainforests (Pacific Northwest). Road trips are a quintessential American experience — the Pacific Coast Highway, Route 66, and the Blue Ridge Parkway are iconic drives. Weekend getaways from major cities are a lifestyle norm: NYC to the Hamptons, SF to Napa Valley, LA to Joshua Tree, Chicago to Michigan lake country.",
  considerations: [
    "Healthcare Costs: The US has no universal healthcare. A single emergency room visit without insurance can cost USD 5,000-50,000. Always confirm your insurance coverage, understand your deductible and out-of-pocket maximum, and keep your insurance card accessible. Employer-sponsored health insurance is often the single most important benefit in your compensation package.",
    "Car Dependency: Outside NYC, Chicago, and a few other metro cores, you cannot function without a car. Public transit is limited or nonexistent in most of the country. Budget for a car payment (or lease), insurance (USD 100-300/month), gas, and parking. This is a non-optional expense in most American cities.",
    "Sales Tax: Prices displayed in stores and restaurants do NOT include tax. Sales tax is added at the register and varies by state and city (0% in Oregon and Montana, up to 10%+ in some cities in Tennessee, Louisiana, and Illinois). There is no national VAT.",
    "At-Will Employment: In 49 of 50 states, your employer can terminate you at any time, for any reason (or no reason), without notice. Conversely, you can quit at any time. Two weeks' notice is customary but not legally required. This fundamentally changes the employment relationship compared to European labor protections.",
    "Gun Culture: Firearms are legal and common in the US. Gun laws vary dramatically by state. This is one of the most politically charged topics in American society and is best avoided in casual conversation until you understand the room."
  ],
  mistakes: [
    "Not tipping or tipping too little. Servers, bartenders, and many service workers earn a base wage of USD 2-5/hour and depend on tips for their income. 18-20% at restaurants is expected. Not tipping is seen as a serious social offense, and servers may follow up to ask if something was wrong.",
    "Underestimating distances. 'A quick drive' in American terms can mean 2-4 hours. States are enormous — Texas alone is larger than France. Plan travel time realistically and use Google Maps for drive time estimates, not straight-line distance.",
    "Ignoring credit building. Without a US credit score, you will face barriers renting apartments, leasing cars, getting phone contracts, and qualifying for loans. Start building credit immediately with a secured credit card or a credit-builder product.",
    "Talking about politics, religion, or gun control in casual settings. American society is deeply polarized on these topics. What seems like a reasonable observation in your home country may trigger strong reactions. Keep conversations neutral until you understand the political landscape of your community.",
    "Assuming healthcare is covered or affordable. Even with insurance, out-of-pocket costs for medical care can be substantial. Always verify coverage, check that providers are in-network, and understand your financial exposure before receiving non-emergency care."
  ],
  emergency: [
    {
      number: '911',
      service: 'General Emergency (Police, Fire, Ambulance)',
      description: 'Unified emergency number for all life-threatening situations. Operators dispatch appropriate services. Do not call for non-emergencies.'
    },
    {
      number: '311',
      service: 'Non-Emergency City Services',
      description: 'Available in major cities for noise complaints, infrastructure issues, trash collection, and general city service inquiries.'
    },
    {
      number: '988',
      service: 'Suicide & Crisis Lifeline',
      description: 'Free, confidential mental health support available 24/7 by phone, text, or chat. Available in English and Spanish.'
    }
  ],
  sources: [
    {
      name: 'USCIS (US Citizenship and Immigration Services)',
      category: 'Immigration & Visa',
      description: 'Federal agency responsible for visa processing, work authorization, green cards, naturalization, and immigration policy.',
      link: 'https://www.uscis.gov/'
    },
    {
      name: 'USA.gov',
      category: 'Government Services',
      description: 'Official guide to US government information, services, benefits, and agency directories at federal, state, and local levels.',
      link: 'https://www.usa.gov/'
    },
    {
      name: 'IRS (Internal Revenue Service)',
      category: 'Tax & Finance',
      description: 'Federal tax authority responsible for income tax filing, ITIN issuance, and tax compliance for residents and non-residents.',
      link: 'https://www.irs.gov/'
    },
    {
      name: 'Healthcare.gov',
      category: 'Health Insurance',
      description: 'Federal Health Insurance Marketplace for purchasing ACA-compliant health insurance plans. Open enrollment November-January.',
      link: 'https://www.healthcare.gov/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to the United States, consult the US Department of State or a US embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/usa',
    mfaLink: 'https://www.state.gov/'
  },
  serviceDirectory: {
    title: "Service Directory - United States",
    description: "Examples of large, commonly used service providers people often interact with when relocating to the United States.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with visa applications, H-1B sponsorship, green card processing, work authorization, and employer compliance.",
        providers: [
          { name: "Fragomen", link: "https://www.fragomen.com" },
          { name: "Berry Appleman & Leiden (BAL)", link: "https://www.bal.com" },
          { name: "Ogletree Deakins", link: "https://ogletree.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Platforms and brokerages commonly used for rentals, home purchases, and lease agreements across US cities.",
        providers: [
          { name: "Zillow", link: "https://www.zillow.com" },
          { name: "Apartments.com", link: "https://www.apartments.com" },
          { name: "Redfin", link: "https://www.redfin.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax advisors and accounting firms experienced with US federal/state taxes, cross-border income, ITIN applications, and FBAR reporting.",
        providers: [
          { name: "PwC United States", link: "https://www.pwc.com/us" },
          { name: "Deloitte United States", link: "https://www2.deloitte.com/us" },
          { name: "H&R Block (Expat Tax Services)", link: "https://www.hrblock.com" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services covering shipping, customs clearance, storage, and destination support.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Allied Van Lines", link: "https://www.allied.com" },
          { name: "United Van Lines", link: "https://www.unitedvanlines.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "English language training, ESL programs, and cultural integration resources for newcomers.",
        providers: [
          { name: "Berlitz USA", link: "https://www.berlitz.com/en-us" },
          { name: "Kaplan International Languages", link: "https://www.kaplaninternational.com" },
          { name: "EF Education First", link: "https://www.ef.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major health insurance networks and healthcare systems commonly used by US residents.",
        providers: [
          { name: "UnitedHealthcare", link: "https://www.uhc.com" },
          { name: "Blue Cross Blue Shield", link: "https://www.bcbs.com" },
          { name: "Kaiser Permanente", link: "https://healthy.kaiserpermanente.org" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Widely used platforms and recruitment firms connecting professionals with US employers.",
        providers: [
          { name: "Indeed", link: "https://www.indeed.com" },
          { name: "LinkedIn Jobs", link: "https://www.linkedin.com/jobs" },
          { name: "Robert Half", link: "https://www.roberthalf.com" }
        ]
      }
    ]
  }
};
