export const canada = {
  id: 'canada',
  slug: 'canada',
  name: 'Canada',
  region: 'Americas',
  complexity: 'Medium',
  languages: ['English', 'French'],
  shortDescription: 'Vast wilderness, multicultural cities, and extreme politeness.',
  heroImage: 'https://images.unsplash.com/photo-1517935706615-2717063c2225',
  flagAlt: 'Flag of Canada',
  atAGlance: "Canada is a vast, bilingual federation that stretches across six time zones and actively defines itself through immigration — roughly one in five residents was born abroad, and the country admits over 400,000 new permanent residents annually. The three major metros — Toronto, Vancouver, and Montreal — are genuinely multicultural, with established ethnic communities, multilingual services, and food scenes that rival any global city. Life outside these centers is quieter, more affordable, and more dependent on a vehicle. The bureaucracy is generally transparent and rule-based, though provincial differences can be surprising: healthcare coverage, driver's licenses, landlord-tenant law, and even sales tax rates vary significantly depending on whether you settle in Ontario, British Columbia, Quebec, or Alberta. The cost of housing in Toronto and Vancouver has reached crisis levels, with average rents consuming a large share of even professional salaries. Canada's universal healthcare system (Medicare) is a point of national pride, but it is under severe strain — walk-in clinics are overcrowded, millions lack a family doctor, and emergency room wait times regularly exceed six hours. Winters are long and genuinely brutal in most of the country, with temperatures dropping below minus thirty Celsius in the Prairie provinces, though coastal BC is milder. For newcomers, the adjustment is less about culture shock and more about navigating the provincial patchwork, building credit history from zero, and accepting that Canadian politeness is real but social circles can be slow to open.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 6 months (Visitor)',
    costOfLiving: 'High',
    primaryLanguages: 'English, French (Quebec)',
  },
  visas: [
    {
      name: 'Express Entry (Federal Skilled Worker / CEC / FST)',
      targetAudience: 'Skilled Workers',
      useCase: 'The flagship points-based system for permanent residency. Candidates create a profile scored on age, education, language ability (IELTS/TEF), and work experience. The highest-scoring candidates receive Invitations to Apply (ITAs) in regular draws. Provincial Nominee Programs (PNPs) can add 600 points, effectively guaranteeing an ITA.',
      duration: 'Permanent Residency',
      link: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html'
    },
    {
      name: 'IEC — International Experience Canada (Working Holiday)',
      targetAudience: 'Youth (18-35)',
      useCase: 'Allows young adults from over 30 partner countries to work and travel in Canada. Three streams exist: Working Holiday (open work permit), Young Professionals (employer-specific), and International Co-op (internship). Highly competitive; pools open annually and spots fill quickly for popular nationalities.',
      duration: '1-2 years depending on country agreement',
      link: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html'
    },
    {
      name: 'Start-up Visa',
      targetAudience: 'Entrepreneurs',
      useCase: 'For entrepreneurs with a qualifying business idea endorsed by a designated Canadian venture capital fund, angel investor group, or business incubator. The applicant must meet language and settlement fund requirements. Grants permanent residency upon approval.',
      duration: 'Permanent Residency',
      link: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/start-visa.html'
    },
    {
      name: 'Visitor Visa (Temporary Resident Visa) / eTA',
      targetAudience: 'Tourists and Business Visitors',
      useCase: 'For travelers from countries that require a visa to enter Canada for tourism, business, or transit. Citizens of visa-exempt countries (most EU, UK, Australia) use an Electronic Travel Authorization (eTA) instead, which costs CAD 7 and is linked to your passport electronically.',
      duration: 'Up to 6 months',
      link: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/apply-visitor-visa.html'
    },
    {
      name: 'Employer-Specific Work Permit (LMIA-based)',
      targetAudience: 'Foreign Workers with a Job Offer',
      useCase: 'For workers with a Canadian job offer backed by a positive Labour Market Impact Assessment (LMIA), proving no Canadian was available for the role. The permit is tied to a specific employer, location, and occupation. Some LMIA-exempt pathways exist under international trade agreements (CUSMA/CETA) and intra-company transfers.',
      duration: 'Varies by contract (typically 1-3 years)',
      link: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit/temporary/eligibility.html'
    }
  ],
  requirements: [
    {
      title: 'SIN (Social Insurance Number)',
      explanation: 'A nine-digit number issued by Service Canada, required to work legally, file taxes, and access government benefit programs such as Employment Insurance (EI) and the Canada Pension Plan (CPP).',
      importance: 'You cannot legally work without a SIN. Apply in person at a Service Canada Centre or by mail immediately upon arrival. Protect this number carefully — identity theft and SIN fraud are significant risks in Canada. Never carry the card in your wallet; memorize the number instead.',
      link: 'https://www.canada.ca/en/employment-social-development/services/sin.html'
    },
    {
      title: 'Provincial Health Card (OHIP, MSP, RAMQ, etc.)',
      explanation: 'Each province and territory administers its own health insurance plan. Ontario issues OHIP, British Columbia issues MSP, Quebec issues RAMQ, and Alberta issues AHCIP. You must register in the province where you reside.',
      importance: 'This card provides access to medically necessary doctor visits, hospital stays, and diagnostic tests at no direct cost. Several provinces impose a waiting period of up to three months for new residents (notably BC and Ontario), during which you must carry private interim health insurance. Dental, vision, prescription drugs, and mental health services are generally not covered unless you have employer benefits or qualify for provincial supplementary programs.',
      link: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/health-care.html'
    },
    {
      title: 'Credit History',
      explanation: 'Canada operates on a credit score system tracked by Equifax Canada and TransUnion Canada. Your score (300-900) determines your ability to rent apartments, obtain credit cards, finance a car, or get a mortgage. Foreign credit history does not transfer.',
      importance: 'You start at zero. Many landlords require a credit check, and without history you may be rejected or asked for extra months of rent upfront. Open a "newcomer" bank account at one of the Big Five banks (RBC, TD, Scotiabank, BMO, CIBC) — most offer newcomer packages with a secured credit card that reports to the bureaus. Building a score to 700+ typically takes 12-18 months of consistent on-time payments.',
      link: 'https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/credit-report-score-basics.html'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a Canadian bank account is straightforward with two pieces of government-issued ID (passport plus work/study permit). The Big Five banks and digital banks like Simplii and Tangerine offer newcomer packages with no monthly fees for the first year.',
      importance: 'You need a Canadian bank account to receive salary payments, set up bill payments, and build your credit history. Interac e-Transfer is the dominant peer-to-peer payment method (equivalent to Venmo or Swish). International wire fees are high; many newcomers use Wise or similar services for transfers home.',
      link: 'https://www.canada.ca/en/financial-consumer-agency/services/banking/opening-bank-account.html'
    }
  ],
  jobsAndIncome: {
    overview:
      "Canada has a stable and diverse job market with strong demand in technology, healthcare, skilled trades, and natural resources. The country actively recruits immigrants to fill labor shortages, but landing your first Canadian role often requires navigating credential recognition, building local references, and sometimes accepting an initial step down in seniority.",
    whereToLook: [
      "Job Bank (jobbank.gc.ca) — the federal government's official job portal with LMIA-linked postings",
      "LinkedIn and Indeed Canada for professional and corporate roles",
      "Company career pages, especially for banks, telecoms, and tech companies",
      "Recruitment agencies such as Hays, Robert Half, and Randstad Canada",
      "Provincial immigrant employment programs (e.g., TRIEC in Ontario, IEC-BC in British Columbia)"
    ],
    realityChecks: [
      "The phrase 'Canadian experience required' is a real barrier. Volunteer work, bridge programs, and informational interviews help overcome it.",
      "Credential recognition for regulated professions (engineering, medicine, law, accounting) can take months to years and may require additional Canadian exams.",
      "Networking is how 60-80% of jobs are filled in Canada. Attending industry meetups and joining professional associations is not optional.",
      "Remote work for US-based companies is increasingly common in tech and pays significantly more than equivalent Canadian salaries, but creates complex cross-border tax obligations."
    ]
  },
  salaryReality: {
    overview:
      "Canadian salaries are solid but often appear higher than they feel. Progressive federal and provincial income taxes, mandatory CPP and EI contributions, and the high cost of housing in major cities significantly reduce real disposable income. A CAD 100,000 salary in Toronto yields roughly CAD 73,000 after tax, of which CAD 24,000-30,000 may go to rent alone.",
    realityChecks: [
      "Combined federal and provincial marginal tax rates range from 20% to over 53% depending on income level and province. Alberta has the lowest provincial tax; Quebec has the highest.",
      "Benefits (dental, prescription drugs, extended health) vary enormously by employer. Many contract and gig workers have no coverage at all.",
      "Salaries differ dramatically by province: a software developer in Toronto earns 20-40% more than the same role in Halifax or Winnipeg, but housing costs more than offset the gap.",
      "Parental leave is generous (up to 18 months shared between parents) but paid at only 55% of insurable earnings, capped at roughly CAD 668/week."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Provincial tax differences (Alberta vs. Quebec can mean a 10%+ swing in net pay)",
      "Housing costs: average rent for a one-bedroom in downtown Toronto exceeds CAD 2,500/month; Vancouver is similar",
      "Childcare costs: regulated childcare in Ontario can exceed CAD 1,500/month per child (Quebec's subsidized system is roughly CAD 200/month)",
      "Mandatory payroll deductions: CPP (5.95% of pensionable earnings), EI (1.63%), and provincial health premiums where applicable"
    ]
  },
  housingSystem: {
    overview:
      "Canada's rental market is extremely competitive in major cities, with vacancy rates below 2% in Toronto, Vancouver, and Montreal. Popular neighborhoods for newcomers include Liberty Village, North York, and Scarborough in Toronto; Kitsilano, Mount Pleasant, and Burnaby in Metro Vancouver; and the Plateau-Mont-Royal, Verdun, and Côte-des-Neiges in Montreal. Rents are typically quoted monthly, and most leases are one year with month-to-month continuation afterward.",
    expectations:
      "Expect to submit a rental application that includes proof of employment or income, a credit check (which will be blank if you are new), references from previous landlords, and sometimes a letter from your employer. Landlords in Ontario can legally ask for first and last month's rent upfront but cannot demand a security deposit. In BC, the maximum deposit is half a month's rent. Furnished apartments are rare outside short-term platforms like Airbnb. Most long-term rentals in Canada are unfurnished, and kitchens always include a stove and refrigerator. Budget CAD 50-150/month for utilities (heat, water, electricity) on top of rent, though some buildings include heat and water."
  },
  healthcareReality:
    "Canada's universal healthcare system covers medically necessary doctor visits, hospital stays, surgery, and diagnostic imaging at no direct cost to patients. However, the system is under significant strain: roughly 6.5 million Canadians do not have a family doctor, walk-in clinic wait times can exceed two hours, and emergency rooms in major hospitals (such as Toronto General, St. Paul's in Vancouver, and the Montreal General Hospital) often have four-to-eight-hour waits for non-critical cases. Dental care, prescription drugs, physiotherapy, mental health counseling, and vision care are not covered by provincial plans and require employer-sponsored benefits or private insurance. Pharmacare coverage varies by province: Ontario covers those under 25 and over 65, while BC has a means-tested program. Many newcomers are surprised to learn that ambulance rides are not fully covered in most provinces and can cost CAD 50-500 depending on jurisdiction. For the three-month waiting period in some provinces, purchase private interim health insurance (typically CAD 100-200/month) to avoid catastrophic out-of-pocket costs.",
  digitalLife: {
    overview:
      "Canada is digitally functional but decentralized, with systems split across federal and provincial levels. There is no single national digital ID; instead, you accumulate a set of cards and numbers (SIN, health card, driver's license) that collectively prove your identity. Most banking, tax filing, and government interactions can be done online, but paper mail remains common for official notices.",
    essentials: [
      "My CRA Account (Canada Revenue Agency) — for tax filing, benefit claims, and GST/HST credit",
      "Provincial health portal (e.g., MyChart Ontario, MyHealthBC, Carnet Santé Quebec)",
      "Interac e-Transfer via your bank app — the universal peer-to-peer payment method",
      "A Canadian mobile number — required for two-factor authentication on nearly every service"
    ],
    whatSurprisesNewcomers: [
      "There is no unified digital identity system. Every province and federal department has its own login, and none of them talk to each other.",
      "Paper cheques are still used for rent payments in many provinces, and some landlords require post-dated cheques for the entire lease term.",
      "Mobile phone plans are among the most expensive in the developed world. Expect to pay CAD 50-80/month for a reasonable data plan (Rogers, Bell, Telus) or slightly less with discount carriers (Fido, Koodo, Virgin Plus).",
      "Two-factor authentication via SMS is standard for banking and government portals, so activating a Canadian SIM card is one of your first tasks."
    ]
  },
  culture: {
    text: "Canadians are famous for politeness, and it is genuine — 'sorry' is used reflexively and can mean 'excuse me,' 'I disagree,' or 'I acknowledge your existence.' The country is officially bilingual (English and French), but outside Quebec, New Brunswick, and parts of Eastern Ontario, daily life is overwhelmingly English. Hockey is the closest thing to a national religion, and Tim Hortons coffee is a cultural institution even though most Canadians will admit the quality has declined. Tipping culture mirrors the United States: 15-20% is standard at restaurants, for haircuts, taxis, and food delivery. Social life can be slow to develop; Canadians are friendly in passing but forming close friendships often requires joining a sports league, volunteer group, or community organization. Multiculturalism is a legal framework (enshrined in the Canadian Multiculturalism Act) and a lived reality in major cities, where you can hear dozens of languages on a single subway ride.",
    highlights: [
      "Shoes off: Always remove shoes inside homes. This is non-negotiable in Canada due to snow, mud, and slush for much of the year. Hosts will often have a shoe rack by the door.",
      "Tipping: 15-20% is standard at restaurants, and tip prompts at coffee shops and takeout counters now commonly start at 18%. Not tipping at a sit-down restaurant is considered very rude.",
      "Queuing: Canadians line up for everything and take queue order seriously. Cutting in line is one of the few things that will provoke visible displeasure.",
      "Weather small talk: Discussing the temperature, snowfall, or humidity is the default social lubricant in all seasons and all settings. Participate willingly.",
      "Multiculturalism: Commenting that someone 'doesn't look Canadian' is offensive. There is no single Canadian appearance; the diversity is the identity."
    ]
  },
  transportationMobility:
    "Public transit works well in the cores of Toronto (TTC subway, streetcars, and buses), Montreal (STM metro and bus), and Vancouver (SkyTrain, SeaBus, and TransLink buses), but degrades quickly in suburban areas. Ottawa has a troubled LRT system supplemented by buses. Calgary and Edmonton have small C-Train and LRT networks. Outside the major metros, a car is essentially mandatory. Canada's intercity distances are enormous — Toronto to Montreal is a 5.5-hour drive, and Toronto to Vancouver is a 41-hour drive or a 4.5-hour flight. VIA Rail connects the Quebec City-Windsor corridor reasonably well but is slow and infrequent elsewhere. Domestic flights are expensive by European standards; budget carriers like Flair Airlines and Lynx (now defunct) have struggled to survive against Air Canada and WestJet's dominance. Winter driving requires snow tires (legally mandated in Quebec and BC, strongly recommended everywhere else) and an emergency kit in your trunk.",
  internationalConnectivity:
    "Toronto Pearson International Airport (YYZ) is Canada's busiest hub with direct flights to over 180 destinations worldwide. Vancouver International Airport (YVR) is the primary gateway to Asia-Pacific, with direct flights to Tokyo, Hong Kong, Beijing, Sydney, and multiple cities in India. Montreal-Trudeau (YUL) serves as a secondary transatlantic hub. Calgary (YYC) connects to select European and Asian destinations. Air Canada is the flag carrier and Star Alliance member. Direct flights to London are roughly seven hours from Toronto; to Asia, roughly 10-12 hours from Vancouver. The Canada-US land border is the world's longest, and cross-border road trips to cities like Buffalo, Seattle, Detroit, and Burlington (Vermont) are common weekend activities.",
  travelExploration:
    "Canada offers staggering natural diversity: the Rocky Mountains and Banff/Jasper National Parks in Alberta, the coastal temperate rainforests of British Columbia, Niagara Falls on the Ontario-New York border, the Cabot Trail in Nova Scotia, the Northern Lights in the Yukon and Northwest Territories, and the whale watching in Tadoussac, Quebec. Urban exploration includes the CN Tower and Distillery District in Toronto, Old Montreal's cobblestone streets and Basilica of Notre-Dame, Granville Island and Stanley Park in Vancouver, and Parliament Hill in Ottawa. The country has 48 national parks and hundreds of provincial parks, all accessible under the 'right to roam' ethic (though technically not a legal right as in Scandinavia). Via Rail's cross-country route from Toronto to Vancouver is a bucket-list journey. Weekend trips to nearby US cities (New York from Toronto, Seattle from Vancouver) are popular escapes.",
  considerations: [
    "Winter Severity: Canadian winters are not an exaggeration. In Winnipeg, temperatures routinely hit minus 35 Celsius with wind chill. Even in Toronto, expect three to four months of snow, ice, and darkness. You need a serious winter parka (Canada Goose is popular but not mandatory), insulated waterproof boots, thermal base layers, and proper gloves. Seasonal Affective Disorder affects many newcomers; invest in a light therapy lamp and Vitamin D supplements.",
    "Housing Affordability Crisis: Average home prices in Toronto and Vancouver exceed CAD 1 million. Even renting a one-bedroom apartment in downtown Toronto costs CAD 2,400-2,800/month. Many newcomers live in the suburbs (Mississauga, Brampton, Surrey, Burnaby) and commute 60-90 minutes each way. The situation is slightly better in Montreal, Calgary, and Ottawa, but affordability is a nationwide concern.",
    "Mobile Phone Costs: Canada has among the highest mobile data prices in the OECD due to an oligopoly of three major carriers (Rogers, Bell, Telus). A plan with 20GB of data typically costs CAD 55-75/month. Budget sub-brands (Fido, Koodo, Virgin Plus) offer slightly lower prices but use the same networks.",
    "Provincial Sales Tax: Prices displayed in stores do not include tax. At the register, you will pay an additional 5% federal GST plus provincial tax (0% in Alberta to 10% in some Atlantic provinces), totaling 5-15% added on top of the listed price. Only Quebec includes some taxes in displayed prices.",
    "Credential Recognition: If you are a doctor, engineer, lawyer, accountant, or nurse, your foreign credentials may not be recognized without additional Canadian examinations and supervised practice. This process can take one to three years and cost thousands of dollars. Research your profession's regulatory body before committing to the move."
  ],
  mistakes: [
    "Comparing Canada to the United States. Canadians are acutely aware of the differences — universal healthcare, stricter gun laws, the metric system, parliamentary democracy — and being lumped in with the US is a reliable way to alienate people. Never assume something works the same way as south of the border.",
    "Underestimating the cold. Frostbite can occur in under 10 minutes at wind chills below minus 27 Celsius. Exposed skin on your face, ears, and fingers is at risk. If you have never experienced a Canadian winter, invest in proper gear before arrival, not after.",
    "Assuming French is spoken everywhere. Outside Quebec, New Brunswick, and parts of Eastern Ontario, most Canadians speak only English. Conversely, in rural Quebec, English proficiency can be limited. Montreal is the most bilingual city.",
    "Not shoveling your sidewalk. In most municipalities, homeowners and tenants are legally required to clear snow and ice from the sidewalk in front of their property within 12-24 hours of a snowfall. Failure to do so can result in fines of CAD 100-500 and liability if someone slips and is injured.",
    "Ignoring the three-month health insurance gap. Several provinces do not activate your health card immediately upon arrival. If you fall ill or have an accident during this period without private insurance, a single emergency room visit can cost CAD 1,000-5,000 or more out of pocket."
  ],
  emergency: [
    {
      number: '911',
      service: 'Police, Fire, Ambulance',
      description: 'Unified emergency number for all services across Canada. Operators speak English and French; interpretation services available for other languages.'
    },
    {
      number: '811',
      service: 'HealthLink / Telehealth',
      description: 'Non-emergency health advice line staffed by registered nurses. Available in most provinces (Ontario: Telehealth Ontario; BC: HealthLink BC; Alberta: Health Link). Free and available 24/7.'
    },
    {
      number: '311',
      service: 'Municipal Services',
      description: 'Non-emergency city services line for road maintenance, noise complaints, bylaw inquiries, and general municipal information. Available in most major cities.'
    }
  ],
  sources: [
    {
      name: 'Immigration, Refugees and Citizenship Canada (IRCC)',
      category: 'Immigration',
      description: 'The federal authority for all immigration programs including Express Entry, work permits, study permits, and citizenship applications.',
      link: 'https://www.canada.ca/en/immigration-refugees-citizenship.html'
    },
    {
      name: 'Service Canada',
      category: 'Government Services',
      description: 'The federal government delivery network for SIN applications, Employment Insurance, CPP, and Old Age Security. In-person centres across the country.',
      link: 'https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html'
    },
    {
      name: 'Canada Revenue Agency (CRA)',
      category: 'Taxation',
      description: 'Administers tax laws, collects taxes, and delivers benefit payments including the GST/HST credit and Canada Child Benefit.',
      link: 'https://www.canada.ca/en/revenue-agency.html'
    },
    {
      name: 'Settlement.Org (Ontario) / WelcomeBC / Immigrant Quebec',
      category: 'Settlement Services',
      description: 'Provincial newcomer portals providing practical guidance on housing, healthcare registration, employment, and integration programs.',
      link: 'https://settlement.org/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Canada, consult Global Affairs Canada or a Canadian embassy, high commission, or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/canada',
    mfaLink: 'https://www.international.gc.ca/'
  },
  serviceDirectory: {
    title: "Service Directory - Canada",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Canada.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Licensed immigration consultants (RCICs) and lawyers assisting with Express Entry, work permits, LMIA applications, and permanent residency pathways.",
        providers: [
          { name: "Fragomen Canada", link: "https://www.fragomen.com" },
          { name: "Green and Spiegel LLP", link: "https://www.gands.com" },
          { name: "Campbell Cohen (CanadaVisa)", link: "https://www.canadavisa.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms assisting with long-term rentals and residential property purchases across Canada.",
        providers: [
          { name: "Realtor.ca (CREA)", link: "https://www.realtor.ca" },
          { name: "RE/MAX Canada", link: "https://www.remax.ca" },
          { name: "Royal LePage", link: "https://www.royallepage.ca" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Canadian tax residency, CRA compliance, cross-border income, and newcomer tax obligations.",
        providers: [
          { name: "PwC Canada", link: "https://www.pwc.com/ca" },
          { name: "EY Canada", link: "https://www.ey.com/en_ca" },
          { name: "KPMG Canada", link: "https://kpmg.com/ca" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including packing, shipping, customs clearance, and storage.",
        providers: [
          { name: "Allied Van Lines Canada", link: "https://www.alliedvanlines.ca" },
          { name: "Atlas Van Lines Canada", link: "https://www.atlasvanlines.ca" },
          { name: "Crown Relocations Canada", link: "https://www.crownrelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "English and French language programs, including free government-funded settlement language training for permanent residents.",
        providers: [
          { name: "LINC (Language Instruction for Newcomers to Canada)", link: "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/improve-english-french/classes.html" },
          { name: "Alliance Francaise Canada", link: "https://www.alliance-francaise.ca" },
          { name: "YMCA Newcomer Language Programs", link: "https://www.ymca.ca" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Provincial health registration guidance and private insurance providers for newcomers during the waiting period.",
        providers: [
          { name: "Sun Life Canada", link: "https://www.sunlife.ca" },
          { name: "Manulife Canada", link: "https://www.manulife.ca" },
          { name: "Blue Cross Canada", link: "https://www.bluecross.ca" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms and platforms connecting newcomers and professionals with Canadian employers.",
        providers: [
          { name: "Job Bank Canada (Federal)", link: "https://www.jobbank.gc.ca" },
          { name: "Hays Canada", link: "https://www.hays.ca" },
          { name: "Robert Half Canada", link: "https://www.roberthalf.ca" }
        ]
      }
    ]
  }
};
