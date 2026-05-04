export const australia = {
  id: 'australia',
  slug: 'australia',
  name: 'Australia',
  region: 'Oceania',
  complexity: 'High',
  languages: ['English'],
  shortDescription: 'A continent of stunning beaches, unique wildlife, and a relaxed outdoor lifestyle.',
  heroImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be',
  flagAlt: 'Flag of Australia',
  atAGlance: "Australia is a continent-sized island nation that offers an enviable quality of life built on sunshine, outdoor culture, and a genuinely egalitarian social ethos. The major cities — Sydney, Melbourne, Brisbane, Perth, and Adelaide — are clean, safe, and multicultural, with over 30% of the population born overseas. The lifestyle is outdoor-focused year-round: beaches, barbecues, hiking, and sport define social life in a way that is hard to overstate. Work-life balance is generally excellent, with most people leaving the office by 5:00-5:30 PM and Friday afternoons often winding down early. However, the cost of living, particularly housing in Sydney and Melbourne, is among the highest in the world — median house prices exceed AUD 1 million in both cities, and rents consume a large share of even professional salaries. The visa system is complex, points-based, and strict: Australia does not grant residency easily, and immigration compliance is enforced with detention and deportation. Geographic isolation is the other defining reality — Australia is far from everywhere except Southeast Asia and New Zealand. Flights to Europe take 20-24 hours, and even crossing the country (Perth to Sydney) takes 5.5 hours by air. For newcomers, the adjustment is usually pleasant: Australians are friendly, informal, and welcoming, but forming deep friendships takes time, and the initial phase of navigating TFN applications, Medicare enrollment, superannuation setup, and rental inspections can feel overwhelming despite the laid-back national character.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 90 days (ETA/eVisitor)',
    costOfLiving: 'High',
    primaryLanguages: 'English',
  },
  visas: [
    {
      name: 'Working Holiday Visa (Subclass 417 / 462)',
      targetAudience: 'Young Adults (18-30, or 18-35 for some countries)',
      useCase: 'One of the world\'s most popular working holiday programs. Allows young people from over 40 eligible countries to work and travel for up to one year. Can be extended to two or three years by completing specified work (88 days of farm work, plant and animal cultivation, mining, construction, or bushfire recovery in regional areas). Subclass 417 covers most Western countries; 462 covers additional partner nations including the US, Argentina, and Thailand.',
      duration: '1 year (extendable to 2 or 3 years with qualifying regional work)',
      link: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417'
    },
    {
      name: 'Skilled Independent Visa (Subclass 189)',
      targetAudience: 'Skilled Workers (No Sponsor Required)',
      useCase: 'Points-based permanent residency visa for workers whose occupation is on the Skilled Occupation List (SOL). Points are awarded for age, English proficiency (IELTS/PTE), education, work experience, and state nomination. You must submit an Expression of Interest (EOI) through SkillSelect and be invited to apply. Processing times are six to twelve months. No employer or state sponsorship required.',
      duration: 'Permanent Residency',
      link: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189'
    },
    {
      name: 'Employer Nomination Scheme (Subclass 186)',
      targetAudience: 'Skilled Workers Sponsored by an Employer',
      useCase: 'For skilled workers nominated by an approved Australian employer. Three streams: Temporary Residence Transition (for 482 visa holders), Direct Entry (for skilled workers not yet in Australia or not on a 482), and Labour Agreement. Requires skills assessment, English proficiency, and the occupation to be on a relevant list.',
      duration: 'Permanent Residency',
      link: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186'
    },
    {
      name: 'Temporary Skill Shortage Visa (Subclass 482)',
      targetAudience: 'Sponsored Workers',
      useCase: 'The main temporary work visa, replacing the former 457 visa. An Australian employer sponsors you for a specific role on the occupation list. Short-term stream (up to 2 years, no PR pathway) or Medium-term stream (up to 4 years, pathway to PR via 186). Requires skills assessment and English proficiency.',
      duration: '2-4 years depending on stream',
      link: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-skill-shortage-482'
    },
    {
      name: 'eVisitor (Subclass 651) / ETA (Subclass 601)',
      targetAudience: 'Short-term Visitors',
      useCase: 'eVisitor is free and available to EU passport holders for tourism or short business visits. ETA (AUD 20) covers citizens of the US, Canada, Japan, South Korea, and other select countries. Both are electronically linked to your passport — no visa label is stamped. Business activity is limited to attending meetings, conferences, and negotiations; no employment permitted.',
      duration: 'Up to 3 months per visit (multiple entries within 12 months)',
      link: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651'
    }
  ],
  requirements: [
    {
      title: 'TFN (Tax File Number)',
      explanation: 'A unique nine-digit identifier issued by the Australian Taxation Office (ATO) for tax and superannuation purposes. Apply online through the ATO website once you have a valid visa and are in Australia.',
      importance: 'Without a TFN, your employer is legally required to withhold tax at the highest marginal rate (45% plus Medicare levy), which will dramatically reduce your first paychecks. The refund comes when you file your tax return, but the interim cash flow hit is significant. Apply within your first week and provide the TFN to your employer immediately. Processing typically takes 10-28 days for online applications.',
      link: 'https://www.ato.gov.au/Individuals/Tax-file-number/'
    },
    {
      title: 'Medicare Enrollment',
      explanation: 'Australia\'s universal public healthcare system, funded through the Medicare levy (2% of taxable income). Permanent residents, Australian citizens, and holders of certain interim visas are eligible. Citizens of countries with Reciprocal Health Care Agreements (UK, New Zealand, Ireland, Sweden, the Netherlands, and others) can access Medicare on temporary visas.',
      importance: 'Medicare covers GP visits (bulk-billed appointments are free; others require a gap payment of AUD 30-80), public hospital treatment, and subsidized prescription medications through the Pharmaceutical Benefits Scheme (PBS). If you are not eligible for Medicare (most temporary visa holders except RHCA nationals), you must hold approved private health insurance — Overseas Visitor Health Cover (OVHC) or Overseas Student Health Cover (OSHC) — as a condition of your visa.',
      link: 'https://www.servicesaustralia.gov.au/medicare'
    },
    {
      title: 'Superannuation (Super)',
      explanation: 'Australia\'s mandatory retirement savings system. Your employer must contribute 11.5% of your ordinary time earnings (2024-25 rate, rising to 12% in 2025-26) into a compliant superannuation fund. This is paid on top of your salary, not deducted from it.',
      importance: 'Choose a super fund carefully — default funds chosen by employers often have higher fees. Compare funds using the ATO\'s YourSuper comparison tool. If you leave Australia permanently on a temporary visa, you can claim your super back (minus tax of 35-65%). Temporary residents should consolidate multiple super accounts to avoid paying fees on dormant accounts.',
      link: 'https://www.ato.gov.au/Individuals/Super/'
    },
    {
      title: 'Bank Account',
      explanation: 'Open an Australian bank account with one of the Big Four (Commonwealth Bank, Westpac, NAB, ANZ) or digital alternatives like UP Bank or ING Australia. You can often open an account online from overseas before arrival with just your passport details.',
      importance: 'You need a local account to receive salary, pay rent (usually via bank transfer or BPAY), and set up direct debits for utilities. BSB and account numbers are the Australian banking identifiers (equivalent to IBAN). BPAY is the bill payment system used by utilities, insurers, and government agencies. Tap-to-pay (contactless) is universal — Australia was one of the earliest and most complete adopters of contactless payments.',
      link: 'https://www.servicesaustralia.gov.au/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Australia has a strong, regulated labor market with high wages by global standards. The national minimum wage is AUD 23.23/hour (2024), among the highest in the world. Key sectors include mining and resources, healthcare, technology, construction, education, financial services, and agriculture. Visa status is the gatekeeper to employment — most formal roles require either permanent residency or an employer-sponsored visa.",
    whereToLook: [
      "Seek.com.au — Australia's dominant job board, covering all industries and levels",
      "LinkedIn — essential for professional, corporate, and tech roles",
      "Indeed Australia — broad coverage, particularly for services and trades",
      "Company career pages directly — major employers like BHP, Commonwealth Bank, Telstra, and Atlassian post exclusively on their sites",
      "Recruitment agencies: Hays, Michael Page, Robert Half, and Randstad are heavily used in Australia for both permanent and contract placements"
    ],
    realityChecks: [
      "Visa status determines what jobs you can legally take. Working beyond your visa conditions (e.g., exceeding hours on a student visa) triggers cancellation and potential deportation. Immigration compliance is enforced seriously.",
      "Local experience is highly valued, sometimes irrationally so. Employers may discount international experience and prefer candidates with 'Australian experience,' which creates a frustrating catch-22 for newcomers.",
      "Casual employment is a large and legal part of the market. Casual workers receive a 25% loading on top of the base rate in lieu of benefits (no paid leave, no notice period). Many newcomers start on casual contracts before converting to permanent.",
      "Recruitment agencies play a much larger role in Australian hiring than in many other countries. Registering with three to five agencies in your field significantly increases your visibility."
    ]
  },
  salaryReality: {
    overview:
      "Australian salaries are high in absolute terms, with median full-time earnings at approximately AUD 73,000/year. However, progressive income tax (19-45% plus 2% Medicare levy), high housing costs, and the general expense of Australian life significantly reduce real purchasing power. Salary packages are quoted as 'base salary plus super' — always clarify whether quoted figures include or exclude superannuation.",
    realityChecks: [
      "A salary of AUD 100,000 yields approximately AUD 75,000 after tax and Medicare levy. Of that, AUD 25,000-36,000 may go to rent in Sydney or Melbourne, leaving surprisingly little for a 'six-figure' salary.",
      "Superannuation (11.5%) is paid by the employer on top of salary. If a job ad says 'AUD 90,000 + super,' your total package is actually AUD 100,350. Always check whether quoted figures include or exclude super.",
      "Casual roles pay more per hour (25% casual loading) but provide no paid leave, no sick leave, and no notice period. Permanent roles pay less hourly but include 4 weeks annual leave, 10 days personal leave, and superannuation guarantees.",
      "Salary sacrifice arrangements (packaging part of your salary as pre-tax benefits like additional super contributions, laptop, or car) can significantly reduce your tax bill. Many employers offer this but do not proactively explain it."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Superannuation: often excluded from quoted salaries. Always ask 'Is that base or package including super?'",
      "Rent in Sydney and Melbourne: a one-bedroom apartment in inner Sydney averages AUD 600-700/week (AUD 2,600-3,000/month); Melbourne is AUD 450-550/week",
      "Medicare levy (2% of taxable income) and Medicare levy surcharge (1-1.5% if you earn above AUD 93,000 and don't hold private hospital cover)",
      "HECS-HELP debt repayment: if you have an Australian student loan, repayments are automatically deducted from salary once income exceeds AUD 51,550 (2024 threshold)"
    ]
  },
  housingSystem: {
    overview:
      "Australia's rental market is fiercely competitive, especially in Sydney, Melbourne, and Brisbane. Vacancy rates in Sydney and Melbourne hover below 1.5%, and rental inspections (open homes) can draw 20-50 applicants for a single property. In Sydney, popular areas for newcomers include Surry Hills, Newtown, and Bondi for young professionals; Chatswood and Parramatta for families; and Pyrmont and Ultimo for inner-city living. In Melbourne, Fitzroy, Brunswick, and Richmond are popular for lifestyle; South Yarra and Prahran for proximity; and Footscray and Thornbury for affordability. Brisbane's Fortitude Valley, West End, and New Farm are the inner-city favorites.",
    expectations:
      "Rent is quoted weekly (not monthly) — multiply by 4.33 to get the monthly figure. You will attend in-person inspections (open homes), submit a detailed application through platforms like 1Form or 2Apply, and compete with many other applicants. Applications require 100 points of ID, proof of income (payslips or employment letter), rental history references, and sometimes a personal statement. The bond (security deposit) is typically four weeks' rent, held by the state's bond authority (not the landlord). Expect to pay two weeks' rent in advance plus the four-week bond upfront. Real estate agents manage most rentals — dealing directly with landlords is less common than in Europe."
  },
  healthcareReality:
    "Australia's healthcare system is a hybrid of public Medicare and private health insurance. Medicare covers GP visits (fully bulk-billed at many clinics), public hospital treatment (including surgery, emergency care, and maternity), and subsidized prescriptions through the PBS (Pharmaceutical Benefits Scheme, where most medications cost AUD 31.60 or less per script, reduced to AUD 7.70 for concession card holders). Major public hospitals include Royal Prince Alfred (RPA) and Westmead in Sydney, The Royal Melbourne Hospital, Royal Brisbane and Women's Hospital, and Royal Perth Hospital. Quality of public care is excellent, but wait times for elective surgery can extend to months or years. Approximately 45% of Australians hold private health insurance, which provides access to private hospitals (shorter wait times, choice of doctor), extras cover (dental, optical, physiotherapy), and avoidance of the Medicare Levy Surcharge for higher earners. Private insurance costs AUD 100-300/month depending on age, cover level, and excess. The Lifetime Health Cover loading adds 2% to premiums for each year you are over 30 without private hospital cover — an incentive to sign up early. Temporary visa holders who are not eligible for Medicare must hold OVHC (Overseas Visitor Health Cover) as a visa condition; providers include Bupa, Medibank, and Allianz Care.",
  digitalLife: {
    overview:
      "Australia is digitally functional and increasingly app-based, though less centralized than Scandinavian countries. Government services are primarily accessed through myGov, a central portal linking the ATO (tax), Medicare, Centrelink (welfare), and other agencies. Banking is almost entirely digital, and contactless payments are ubiquitous.",
    essentials: [
      "myGov account — the central portal linking ATO (tax), Medicare, Centrelink, and other government services. Create this early and link your TFN and Medicare.",
      "Bank app with PayID — PayID allows instant transfers using a phone number or email instead of BSB/account numbers. All major banks support it.",
      "Medicare app — for claiming rebates, accessing your immunization history, and managing your Medicare card digitally",
      "State-based transit apps: Opal (Sydney), Myki (Melbourne), Go Card (Brisbane), Metrocard (Adelaide), SmartRider (Perth) — all are contactless transit cards or apps"
    ],
    whatSurprisesNewcomers: [
      "Australia has no national digital ID. Instead, you accumulate points of identification (driver's license, Medicare card, passport) that together form your identity proof. The '100-point ID check' system assigns point values to each document.",
      "NBN (National Broadband Network) internet can be unreliable and slower than expected for a developed nation. Speeds depend heavily on the connection technology at your address (FTTP is fastest; FTTN is slower). Check nbnco.com.au before signing a lease.",
      "Mobile plans are expensive but improving. Expect AUD 30-50/month for a reasonable plan with 20-40GB data. Telstra has the best coverage (essential for rural areas); Optus and Vodafone are cheaper with good urban coverage.",
      "Contactless payments are so widespread that many small businesses, markets, and cafes are cashless. You can live entirely without physical cash in most Australian cities."
    ]
  },
  culture: {
    text: "Australian culture is informal, egalitarian, and strongly anti-pretentious. 'Tall poppy syndrome' — the tendency to cut down anyone who stands out, brags, or signals superiority — is a deeply ingrained social force. People value mateship (loyalty and fairness), a 'give it a go' attitude, and not taking yourself too seriously. Humor is dry, sarcastic, and self-deprecating; if an Australian is teasing you, it usually means they like you. Social interactions are relaxed, first names are universal (even with senior executives and doctors), and dress codes lean casual in all but the most corporate settings. Work and personal life are clearly separated: asking someone to stay late or sending weekend emails is frowned upon. Socializing often revolves around outdoor activities, barbecues, and the pub, particularly Friday after-work drinks. Despite the laid-back surface, Australians take rules seriously — especially visa compliance, workplace safety, and road rules.",
    highlights: [
      "Mateship and Egalitarianism: Titles and status carry almost no social weight. Calling someone 'mate' is standard regardless of relationship depth. Senior leaders are addressed by first name. Pulling rank or name-dropping provokes eye rolls.",
      "Tall Poppy Syndrome: Boasting about achievements, wealth, or status is socially punished. Success should be understated. 'Yeah, it went alright' is the Australian way of saying 'I crushed it.'",
      "Sarcasm and Banter: Australians express affection through teasing. If someone calls you a 'legend' or gives you a hard time, they are being friendly. Taking offense at banter signals you do not understand the culture.",
      "Beach and Surf Safety: Always swim between the red and yellow flags at patrolled beaches. Rip currents are the leading cause of drowning for visitors. If caught in a rip, swim parallel to shore, not against the current.",
      "Tipping: Not expected or required. Australians are paid a living wage (AUD 23.23/hour minimum). Rounding up or leaving small change for exceptional service is appreciated but never obligatory. Do not tip 20%."
    ]
  },
  transportationMobility:
    "Public transport varies significantly by city. Sydney has an extensive train network (Sydney Trains), light rail, buses, and ferries across the harbor, all using the Opal card. Melbourne is famous for its tram network (the world's largest), supplemented by trains and buses using the Myki card. Brisbane has buses, trains, and CityCat ferries using the Go Card. Perth has a train and bus network (Transperth) with a free transit zone in the CBD. Adelaide has a smaller network with buses, trams, and the O-Bahn busway. Outside city centers, car ownership is common — Australian cities are sprawling and suburban, with distances that make driving the practical default. Domestic flights are essential for intercity travel: Sydney to Melbourne is a one-hour flight (the world's third-busiest air route), Sydney to Perth is five hours, and Melbourne to Brisbane is two hours. Qantas, Virgin Australia, and budget carriers Jetstar and Rex (Regional Express) operate domestic routes. Fuel is expensive (AUD 1.80-2.20/liter), and toll roads in Sydney add AUD 5-15 per trip on major motorways.",
  internationalConnectivity:
    "Sydney Kingsford Smith Airport (SYD) is Australia's primary international hub, with direct flights across Asia-Pacific, the Middle East, and to the US West Coast (Los Angeles, San Francisco, Dallas) and London (via Singapore or Perth). Melbourne Tullamarine Airport (MEL) handles significant international traffic, particularly to New Zealand, Asia, and the Middle East. Perth Airport (PER) is the gateway to Europe via direct flights to London Heathrow (Qantas, 17 hours nonstop — the longest direct route from Australia). Brisbane (BNE) serves as a secondary hub with growing Asian and Pacific connections. Qantas is the flag carrier and Oneworld member. The geographic reality is stark: Australia is 14-24 hours flying time from Europe and 13-15 hours from the US West Coast. New Zealand (3 hours from Sydney) and Southeast Asia (6-9 hours from multiple cities) are the most accessible international destinations.",
  travelExploration:
    "Australia's internal diversity is staggering: the Great Barrier Reef (UNESCO) off Queensland's coast, the red desert landscape of Uluru/Ayers Rock in the Northern Territory, the Twelve Apostles along Victoria's Great Ocean Road, the ancient Daintree Rainforest in Far North Queensland, the white sand beaches of Whitehaven Beach and the Whitsundays, the wine regions of the Barossa Valley (South Australia) and Hunter Valley (New South Wales), and the rugged wilderness of Tasmania's Cradle Mountain and Freycinet National Park. Sydney offers the Harbour Bridge climb, the Opera House, and Bondi to Coogee coastal walk. Melbourne is Australia's food and cultural capital, with laneways, galleries, and a coffee scene that rivals any in the world. The Great Ocean Road (243 km from Torquay to Allansford) is one of the world's most scenic coastal drives. Weekend trips from Sydney include the Blue Mountains (90 minutes) and the South Coast wine regions; from Melbourne, the Mornington Peninsula and Phillip Island (penguin parade) are popular.",
  considerations: [
    "Geographic Isolation: Australia is far from everything except Southeast Asia and New Zealand. A return flight to London costs AUD 1,500-3,000 and takes 20-24 hours. Visiting family in Europe means burning two to three days just on travel. This distance becomes emotionally significant over time, especially for those with aging parents or young nieces and nephews overseas.",
    "Housing Competition: The rental market is brutal in Sydney, Melbourne, and increasingly Brisbane. Attending in-person inspections (open homes) and submitting multiple applications before being accepted is standard. Some applicants offer above asking rent or six months upfront to win a property. Rent is quoted per week — a listing at 'AUD 600/week' is AUD 2,598/month.",
    "Internet Quality: The NBN (National Broadband Network) is a nationwide infrastructure project that delivered inconsistent results. Speeds depend on the technology at your address (FTTP fiber to the premises is best; FTTN fiber to the node is worst). Check speeds at the property address before signing a lease if you work remotely. Plans cost AUD 60-90/month for usable speeds (50-100 Mbps).",
    "Sun Exposure: Australia has one of the highest rates of skin cancer in the world due to UV intensity. 'Slip, Slop, Slap' (slip on a shirt, slop on sunscreen SPF 50+, slap on a hat) is not a marketing slogan — it is genuine health advice. Reapply sunscreen every two hours and avoid midday sun in summer.",
    "Wildlife Reality: Yes, Australia has venomous snakes, spiders, jellyfish, and crocodiles. In practice, encounters in urban areas are rare. Check shoes left outdoors, do not swim in northern rivers or estuaries (saltwater crocodiles), and heed beach closures for jellyfish (box jellyfish season November-May in northern waters). The real danger is complacency around water: rip currents at beaches kill more people than sharks or snakes combined."
  ],
  mistakes: [
    "Not swimming between the flags. Australian surf beaches have powerful rip currents that can pull even strong swimmers out to sea. Volunteer surf lifesavers patrol beaches and place red-and-yellow flags to mark the safest swimming zone. Swimming outside the flags, especially at unfamiliar beaches, is genuinely dangerous.",
    "Tipping 20% like in the United States. Australia has a high minimum wage and no tipping culture. Leaving 10-15% at a restaurant is generous; leaving 20% will surprise and occasionally embarrass the staff. At cafes, bars, and taxis, tipping is not expected at all.",
    "Underestimating distances. Australia is roughly the size of the contiguous United States. Sydney to Melbourne is a nine-hour drive; Sydney to Brisbane is ten hours. Google Maps road trip plans that look reasonable on screen take far longer in reality due to the scale, speed limits, and limited fuel stops in outback areas.",
    "Calling flip-flops 'flip-flops.' They are 'thongs' in Australia. 'Flip-flops' sounds strange to Australian ears. Similarly: barbecue is 'barbie,' afternoon is 'arvo,' breakfast is 'brekkie,' and sunglasses are 'sunnies.' Adapting to the vocabulary signals cultural awareness.",
    "Ignoring superannuation. Many temporary visa holders treat super as lost money because they do not plan to retire in Australia. However, if you leave permanently on a temporary visa, you can claim your super back through the Departing Australia Superannuation Payment (DASP) scheme — minus 35-65% tax. Consolidate accounts, choose a low-fee fund, and lodge the claim after departure."
  ],
  emergency: [
    {
      number: '000',
      service: 'Triple Zero — Police, Fire, Ambulance',
      description: 'The national emergency number for all services. Operators speak English. Available from any phone, including locked phones without a SIM. For text-based emergencies (deaf or hearing-impaired), use 106 (TTY).'
    },
    {
      number: '131 444',
      service: 'Police Assistance Line',
      description: 'Non-emergency police line for reporting crimes that are not in progress, noise complaints, lost property, and general inquiries. Available 24/7 in most states.'
    },
    {
      number: '13 11 14',
      service: 'Lifeline (Crisis Support)',
      description: '24/7 crisis support and suicide prevention line. Free, confidential, and staffed by trained counselors. Also available via text (0477 13 11 14) and online chat at lifeline.org.au.'
    }
  ],
  sources: [
    {
      name: 'Department of Home Affairs',
      category: 'Immigration',
      description: 'The federal authority for all visa applications, citizenship, border control, and immigration compliance. The authoritative source for visa requirements and processing times.',
      link: 'https://immi.homeaffairs.gov.au/'
    },
    {
      name: 'Services Australia (Medicare & Centrelink)',
      category: 'Government Services',
      description: 'The delivery agency for Medicare enrollment, Centrelink payments (family, unemployment, disability), and other government benefits.',
      link: 'https://www.servicesaustralia.gov.au/'
    },
    {
      name: 'Australian Taxation Office (ATO)',
      category: 'Taxation',
      description: 'Administers the tax system, issues TFNs, manages superannuation policy, and processes tax returns. The MyGov-linked portal is the primary interface for individuals.',
      link: 'https://www.ato.gov.au/'
    },
    {
      name: 'Fair Work Ombudsman',
      category: 'Employment Rights',
      description: 'The independent regulator for workplace laws, minimum wages, and employment conditions. Essential resource for understanding your rights as a worker in Australia.',
      link: 'https://www.fairwork.gov.au/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Australia, consult the Department of Foreign Affairs and Trade (DFAT) or an Australian embassy or high commission abroad.',
    directoryLink: 'https://www.embassypages.com/australia',
    mfaLink: 'https://www.dfat.gov.au/'
  },
  serviceDirectory: {
    title: "Service Directory - Australia",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Australia.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Registered migration agents (MARAs) and lawyers assisting with skilled visas, employer sponsorship, and permanent residency applications.",
        providers: [
          { name: "Fragomen Australia", link: "https://www.fragomen.com" },
          { name: "VisaEnvoy", link: "https://visaenvoy.com" },
          { name: "Newland Chase Australia", link: "https://www.newlandchase.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Major agencies and platforms for rental properties and property purchases across Australian cities.",
        providers: [
          { name: "Domain", link: "https://www.domain.com.au" },
          { name: "realestate.com.au", link: "https://www.realestate.com.au" },
          { name: "Ray White", link: "https://www.raywhite.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts in Australian tax residency, ATO compliance, superannuation optimization, and cross-border income.",
        providers: [
          { name: "PwC Australia", link: "https://www.pwc.com.au" },
          { name: "EY Australia", link: "https://www.ey.com/en_au" },
          { name: "KPMG Australia", link: "https://kpmg.com/au" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International relocation services including sea freight, air freight, customs clearance, and Australian quarantine compliance.",
        providers: [
          { name: "Crown Relocations Australia", link: "https://www.crownrelo.com" },
          { name: "Allied Pickfords Australia", link: "https://www.alliedpickfords.com.au" },
          { name: "Grace Removals", link: "https://www.grace.com.au" }
        ]
      },
      {
        name: "Language Tutors",
        description: "English language programs and settlement support for new arrivals to Australia.",
        providers: [
          { name: "AMEP (Adult Migrant English Program)", link: "https://immi.homeaffairs.gov.au/settling-in-australia/amep" },
          { name: "TAFE Australia", link: "https://www.tafensw.edu.au" },
          { name: "Navitas English", link: "https://www.navitasenglish.edu.au" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private health insurance providers and major hospital networks commonly used by residents and newcomers.",
        providers: [
          { name: "Bupa Australia", link: "https://www.bupa.com.au" },
          { name: "Medibank", link: "https://www.medibank.com.au" },
          { name: "HCF (Hospitals Contribution Fund)", link: "https://www.hcf.com.au" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms and platforms connecting professionals with Australian employers across all sectors.",
        providers: [
          { name: "Seek", link: "https://www.seek.com.au" },
          { name: "Hays Australia", link: "https://www.hays.com.au" },
          { name: "Michael Page Australia", link: "https://www.michaelpage.com.au" }
        ]
      }
    ]
  }
};
