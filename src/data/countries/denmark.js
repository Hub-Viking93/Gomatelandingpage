export const denmark = {
  id: 'denmark',
  slug: 'denmark',
  name: 'Denmark',
  region: 'Europe',
  complexity: 'Low',
  languages: ['Danish', 'English'],
  shortDescription: 'Design, bicycling, and coziness in a compact, efficient society.',
  heroImage: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc',
  flagAlt: 'Flag of Denmark',
  atAGlance: "Denmark is a compact, meticulously organized society that consistently ranks among the happiest and least corrupt countries in the world. It blends Nordic efficiency with a slightly more continental, relaxed atmosphere than its Scandinavian neighbors. Daily life is defined by 'hygge' — a deliberate cultivation of coziness, warmth, and well-being that permeates everything from home design (candles everywhere) to workplace culture (Friday cake tradition) to social gatherings (intimate dinners over wine). The country is masterfully designed: world-class bicycle infrastructure (over 380 km of dedicated cycle lanes in Copenhagen alone), clean public spaces, and functional architecture that prioritizes human comfort. Workplaces are flat and non-hierarchical, with the Danish concept of 'medbestemmelse' (co-determination) meaning employees expect to have a genuine voice in decisions. Danes are informal, direct, and possess a dry, self-deprecating humor — first names are universal, dress codes lean casual, and pretentiousness is socially punished through the Scandinavian 'Janteloven' ethic. However, the tightly-knit nature of Danish social circles makes it genuinely difficult to move from 'acquaintance' to 'friend.' Most Danes maintain childhood friendships that they consider complete — they are friendly to newcomers but rarely actively seeking new close friends. Joining a forening (club or association), taking Danish language classes, and participating in workplace social events are the proven pathways. The cost of living is high, the weather is relentlessly gray and windy, and the tax rate is among the highest in the world — but most residents consider this a fair exchange for universal healthcare, free education, generous parental leave, and a society where trust is the default.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'High',
    primaryLanguages: 'Danish, English (widely spoken)',
  },
  visas: [
    {
      name: 'Pay Limit Scheme (Beløbsordningen)',
      targetAudience: 'High-earning Professionals',
      useCase: 'For non-EU workers with a job offer from a Danish employer meeting a minimum annual salary threshold (DKK 465,000 in 2024, approximately EUR 62,500). No requirement that the position match specific qualifications — the salary itself qualifies you. One of the simplest and fastest work permit routes in the Nordic region.',
      duration: 'Up to 4 years (renewable, path to permanent residency after 4 years)',
      link: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Pay-limit-scheme'
    },
    {
      name: 'Positive List Scheme (Positivlisten)',
      targetAudience: 'Workers in Shortage Occupations',
      useCase: 'For non-EU workers with a job offer in a profession on Denmark\'s official shortage list (updated biannually). Includes roles in IT, engineering, healthcare, and scientific research. No minimum salary requirement beyond the industry standard. Requires relevant qualifications matching the listed occupation.',
      duration: 'Up to 4 years (renewable)',
      link: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Positivlisten'
    },
    {
      name: 'Start-up Denmark',
      targetAudience: 'Entrepreneurs',
      useCase: 'For foreign entrepreneurs who want to start an innovative, scalable business in Denmark. Requires a business plan approved by an independent expert panel. The business must be deemed viable and contribute to the Danish economy. Application is competitive and processing takes two to four months.',
      duration: '2 years (renewable with demonstrated progress)',
      link: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark'
    },
    {
      name: 'Residence and Work Permit (Standard)',
      targetAudience: 'Non-EU Employees',
      useCase: 'For non-EU citizens with a confirmed job offer that does not qualify under the Pay Limit or Positive List schemes. The employer must demonstrate that the position could not be filled by a Danish or EU citizen. A labor market test applies. Processing is slower than the fast-track schemes.',
      duration: 'Up to 4 years',
      link: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work'
    },
    {
      name: 'Working Holiday Visa',
      targetAudience: 'Young Adults (18-30)',
      useCase: 'Available to citizens of Australia, New Zealand, Japan, South Korea, Chile, Argentina, and Canada. Allows part-time or full-time work alongside travel in Denmark for up to one year.',
      duration: 'Up to 1 year (non-renewable)',
      link: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Working-Holiday'
    }
  ],
  requirements: [
    {
      title: 'CPR Number (Civil Registration Number)',
      explanation: 'The ten-digit number (DDMMYY-XXXX) is your identity in Denmark. You apply for it at the International Citizen Service (ICS) in Copenhagen, Aarhus, Odense, or Aalborg, or at your local municipality (kommune). You need a Danish address and valid residence documentation to receive it.',
      importance: 'The CPR number is the chicken-and-egg problem of Denmark: you cannot get a CPR number without a registered address, but many landlords require a CPR number to sign a lease. Without a CPR, you cannot open a bank account, get paid through the Danish salary system, visit a GP under the public healthcare system, receive a NemKonto, or access most digital services. You must find a landlord willing to rent to someone without a CPR initially — sublets, co-living spaces, and furnished temporary housing are the typical workaround.',
      link: 'https://lifeindenmark.borger.dk/coming-to-denmark/cpr-registration'
    },
    {
      title: 'MitID (National Digital Identity)',
      explanation: 'The Danish national digital identification system, replacing the older NemID. Used for banking, tax filing (SKAT), healthcare (sundhed.dk), digital post (e-Boks and Digital Post from authorities), and secure online purchases. You activate MitID through your bank or a service center once you have a CPR number.',
      importance: 'MitID is mandatory for modern life in Denmark. Without it, you cannot access online banking, read government correspondence (which is sent digitally by default — not by postal mail), file taxes, or manage your healthcare. The digital infrastructure assumes universal MitID adoption, and opting out requires applying for an exemption at your kommune, which is rarely granted to able-bodied working-age adults.',
      link: 'https://www.mitid.dk/en-gb/'
    },
    {
      title: 'NemKonto (Easy Account)',
      explanation: 'You must designate one Danish bank account as your NemKonto through the tax authority. This is the account where the Danish state deposits all payments: tax refunds, child benefits (børnetilskud), study grants (SU), pension, and any other government payments.',
      importance: 'The Danish state does not send cheques, issue cash payments, or use alternative payment methods. If you do not assign a NemKonto, money owed to you by the government simply will not arrive. Set this up immediately after opening a bank account. Registration is done through your bank or nemkonto.dk.',
      link: 'https://www.nemkonto.dk/EN'
    },
    {
      title: 'Danish Bank Account',
      explanation: 'Open an account at a Danish bank (Danske Bank, Nordea, Jyske Bank, or digital options like Lunar) with your passport, CPR number, and proof of address. Some banks allow account opening before CPR if you have a work permit and employment contract.',
      importance: 'A Danish bank account is essential for salary payments, rent, utilities, NemKonto registration, and setting up MitID. Danske Bank and Nordea are the largest and most commonly used. Mobile payment via MobilePay (Denmark\'s ubiquitous payment app, owned by Danske Bank) requires a Danish bank account and phone number. MobilePay is used for everything from splitting restaurant bills to paying your dog groomer.',
      link: 'https://www.finansdanmark.dk/en/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Denmark has a strong, stable labor market built on the 'flexicurity' model: easy hiring and firing (flexibility for employers) combined with generous unemployment benefits and active retraining programs (security for workers). Key sectors include life sciences and pharmaceuticals (Novo Nordisk, Lundbeck, Leo Pharma), shipping and logistics (Maersk), energy and wind power (Ørsted, Vestas), technology, design, and food/agriculture. Copenhagen is the commercial and startup hub.",
    whereToLook: [
      "Jobindex.dk — Denmark's largest job portal, covering all sectors and levels",
      "LinkedIn — essential for professional and international roles, especially in Copenhagen",
      "Workindenmark.dk — the government-run international recruitment portal, specifically designed for foreign professionals",
      "Company career pages: Novo Nordisk, Maersk, Ørsted, Vestas, LEGO, and other major Danish employers post directly",
      "Academic Work, Randstad, and Hays Denmark for temporary, contract, and permanent placements"
    ],
    realityChecks: [
      "English is widely accepted in professional roles, especially in Copenhagen-based international companies. This makes Denmark more accessible to non-Danish speakers than Sweden or Norway for initial employment.",
      "The 'flexicurity' model means you can be dismissed with relatively short notice (1-6 months depending on tenure), but unemployment benefits (dagpenge) replace up to 90% of salary for up to 2 years if you are a member of an A-kasse (unemployment insurance fund).",
      "Work-life balance is a cultural expectation, not just a perk. Leaving the office at 4:00-5:00 PM is normal and expected. Staying late is viewed as a sign of poor time management, not dedication.",
      "Danish language significantly increases your long-term career prospects. While entry-level international roles work in English, promotions to management and senior positions increasingly require Danish fluency."
    ]
  },
  salaryReality: {
    overview:
      "Danish salaries are among the highest in Europe, with a median monthly salary of approximately DKK 45,000 (EUR 6,000) before tax. There is no statutory minimum wage; minimums are set by collective agreements (overenskomster) and typically range from DKK 130-160/hour. However, income tax is high: the combined municipal tax, labor market contribution (AM-bidrag, 8%), and state tax result in effective tax rates of 35-52% depending on income level.",
    realityChecks: [
      "A gross salary of DKK 45,000/month yields approximately DKK 27,000-30,000 net after all taxes and contributions. Use skat.dk's tax calculator to estimate your specific take-home.",
      "The tax cap (skatteloft) limits the maximum marginal tax rate to approximately 52.07%. The 'top tax' (topskat) of 15% applies to income above DKK 588,900 (2024). The Researcher Tax Scheme (Forskerskatteordningen) offers a flat 27% tax rate for certain highly paid foreign researchers and key employees for up to 7 years.",
      "Pension contributions are a significant part of total compensation. Employer pension contributions of 8-17% of salary are standard under most collective agreements, with the employee contributing an additional 4-8%. Always factor pension into your total package calculation.",
      "Holiday allowance (feriepenge) at 12.5% of annual salary is accrued and paid when you take your five weeks of annual leave. In your first year, you may not have accrued enough for full holiday pay, creating a cash-flow gap."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Effective tax rates: with AM-bidrag (8%), municipal tax (~25%), and potentially topskat, the total tax burden ranges from 35-52% of gross salary",
      "Housing costs: rent for a one-bedroom apartment in central Copenhagen averages DKK 8,000-14,000/month (EUR 1,070-1,880); Aarhus is 15-25% cheaper",
      "A-kasse membership (approximately DKK 400-600/month for unemployment insurance) and union fees (approximately DKK 200-500/month) are practically mandatory for full labor market protection",
      "The deposit shock: upfront rental costs can reach 7 months' rent (3 months deposit + 3 months prepaid rent + first month), requiring DKK 50,000-100,000 (EUR 6,700-13,400) cash on hand"
    ]
  },
  housingSystem: {
    overview:
      "Denmark's housing market presents a significant challenge for newcomers, particularly in Copenhagen. The rental market is divided into 'private' and 'social/public' housing (almene boliger). Social housing has long waiting lists (years to decades), while private rentals are competitive and expensive. In Copenhagen, popular areas for newcomers include Nørrebro (diverse, vibrant), Vesterbro (trendy, cafes), Frederiksberg (family-friendly, green), Østerbro (upscale, quiet), and Amager/Islands Brygge (waterfront, modern). In Aarhus, the Latin Quarter, Frederiksbjerg, and Trøjborg are popular. Odense and Aalborg offer significantly more affordable options.",
    expectations:
      "Landlords in Denmark can legally ask for up to 3 months' deposit (depositum) plus 3 months' prepaid rent (forudbetalt leje) plus the first month's rent. This means the upfront cost to move into an apartment can be 7 months' rent — DKK 56,000-98,000 (EUR 7,500-13,200) for a typical Copenhagen one-bedroom. This is a major financial barrier. Platforms include Boligportal.dk, Lejebolig.dk, and Findroommate.dk for shared housing. Always insist on a written rental contract (lejekontrakt) and document the apartment's condition at move-in (indflytningsrapport) — Danish law strongly protects tenants but requires proper documentation. Be cautious of rental scams; never transfer money without viewing the property and meeting the landlord."
  },
  healthcareReality:
    "Denmark's universal healthcare system provides free access to GPs, hospitals, specialists (with referral), mental health treatment, maternity care, and most medical procedures for all CPR-registered residents. You are assigned to a GP (praktiserende læge) through sundhed.dk based on your registered address — choosing and changing your GP is done online. GP visits are free with no co-payment. Prescription medications are partially subsidized through a tiered system (tilskudsgrænser), with annual out-of-pocket costs capped at approximately DKK 4,270. Emergency care is provided at hospitals including Rigshospitalet (Copenhagen, Denmark's premier hospital and trauma center), Aarhus Universitetshospital, Odense Universitetshospital, and Aalborg Universitetshospital. In the Capital Region (Greater Copenhagen), you must call 1813 before visiting the ER for non-life-threatening conditions — showing up without calling first results in being sent away. Other regions have their own Lægevagt (doctor on-call) numbers. Dental care for adults is not covered by the public system; routine checkups cost DKK 600-1,000. Many employers offer a health insurance supplement (sundhedsforsikring) covering physiotherapy, psychology, dental, and private specialist access.",
  digitalLife: {
    overview:
      "Denmark is one of the most digitally advanced countries globally. Nearly all public and private services are accessible online, and physical mail from the government has been replaced by digital post (e-Boks / Digital Post) for all residents. The system assumes universal digital competency and MitID access — if you cannot navigate the digital infrastructure, daily life becomes significantly harder.",
    essentials: [
      "MitID — the national digital identity. Required for banking, tax filing, healthcare, and receiving government correspondence.",
      "MobilePay — Denmark's ubiquitous mobile payment app (over 4 million active users in a country of 5.9 million). Used for splitting bills, paying in shops, and person-to-person transfers. Requires a Danish bank account.",
      "e-Boks / Digital Post — your digital mailbox for government correspondence. Tax notices, healthcare communications, municipality letters, and official notifications arrive here, not in your physical mailbox. Check it weekly.",
      "Sundhed.dk — the national healthcare portal for choosing your GP, viewing prescriptions, booking appointments, and accessing your health records."
    ],
    whatSurprisesNewcomers: [
      "The government communicates with you digitally by default. Tax assessments, healthcare reminders, municipal notices, and legal correspondence arrive in your e-Boks/Digital Post — not by postal mail. Missing a notice because you did not check your digital mailbox has real consequences.",
      "MobilePay has replaced cash for most peer-to-peer transactions. Friends splitting a dinner bill, paying a babysitter, or buying something at a flea market all use MobilePay. Not having it is a social inconvenience.",
      "All digital services are gated behind your CPR number and MitID. Until you have both, you are locked out of the system entirely — forced to use phone calls and physical visits for everything.",
      "Denmark expects digital self-service. Calling a government office or showing up in person for something available online is viewed as unnecessary and may be met with gentle redirection to the website."
    ]
  },
  culture: {
    text: "Danish culture revolves around 'hygge' (cozy contentment, pronounced roughly 'HOO-guh'), egalitarianism, and a dry, ironic sense of humor. Danes are informal, direct, and refreshingly unpretentious — first names are used universally, even with bosses and doctors; dress codes favor understated functionality over display; and bragging is socially lethal. The bicycle is the defining mode of transport regardless of weather, income, or social status — the Danish Queen herself was known to cycle. Communal eating, workplace social events, and the concept of 'fællesskab' (community togetherness) are cultural cornerstones. However, breaking into Danish social circles as an outsider takes genuine effort: Danes typically maintain tight-knit childhood friend groups that they consider socially complete. The path in is through organized activities — sports clubs (fodboldklub, roklub), language classes, community associations (foreninger), and workplace social events.",
    highlights: [
      "Hygge is practiced year-round but peaks in winter: candles (Danes burn more candles per capita than any other nation), warm blankets, hot cocoa, dimmed lighting, and intimate gatherings of close friends define the experience.",
      "Bicycle culture: Copenhagen has more bicycles than people. Cycle lanes have their own traffic lights, rules, and etiquette. Hand signals are mandatory, stopping in the bike lane is prohibited, and tourists walking in the bike lane is the most common source of Danish anger.",
      "Humor is dry, ironic, and self-deprecating. Danes appreciate understatement and wit. Emotional displays, overenthusiasm, and motivational-speaker energy are met with suspicion.",
      "Communal eating and 'fredagsbar' (Friday bar): many workplaces hold weekly social gatherings with beer and snacks. Attending signals that you value the team; consistently declining signals distance.",
      "Janteloven (Law of Jante): the unwritten social code that no one should think they are better than anyone else. Talking about your salary, your car, or your achievements is socially punished with quiet exclusion."
    ]
  },
  transportationMobility:
    "Copenhagen's public transport (DOT — Din Offentlige Transport) includes the Metro (4 lines, automated, running 24/7 on weekends), S-tog (suburban trains), buses, and harbor buses (havnebusserne). The Rejsekort (travel card) or DOT app provides zone-based ticketing across all modes. A monthly Copenhagen zone pass costs approximately DKK 430-600 depending on zones. Cycling is the dominant mode of transport in Copenhagen — 49% of all commutes to work or school are made by bicycle. The city's infrastructure includes dedicated cycle superhighways (supercykelstier), bike traffic lights, and elevated crossings. DSB (Danske Statsbaner) operates intercity trains: Copenhagen to Aarhus takes approximately 3 hours, Copenhagen to Odense 1 hour 30 minutes. The Storebælt bridge and the Øresund Bridge connect the Danish islands and link to Sweden. FlixBus provides budget intercity alternatives. Copenhagen to Malmö by train takes just 35 minutes across the Øresund Bridge, making cross-border commuting and socializing common.",
  internationalConnectivity:
    "Copenhagen Airport Kastrup (CPH) is Scandinavia's busiest airport and SAS's primary hub, with direct flights across Europe, to North America (New York, Chicago, Washington, Los Angeles, Toronto), Asia (Tokyo, Bangkok, Beijing), and the Middle East. Billund Airport (BLL), near LEGO's headquarters, handles significant European traffic and charter flights. SAS (Scandinavian Airlines, Star Alliance) and Norwegian Air Shuttle are the dominant carriers, supplemented by Ryanair, easyJet, and Wizz Air for budget European routes. Flight time to London is approximately 2 hours; to New York, roughly 8.5 hours. Denmark's compact size and excellent rail connections mean that most of the country is within 3-4 hours of Copenhagen by train, and the Øresund Bridge provides seamless access to southern Sweden.",
  travelExploration:
    "Denmark's compact size makes it easy to explore over weekends. Copenhagen offers Tivoli Gardens (one of the world's oldest amusement parks), the Little Mermaid statue, Nyhavn's colorful waterfront, the Christiansborg Palace, the Louisiana Museum of Modern Art (45 minutes north by train, overlooking the Øresund), and the Freetown Christiania alternative community. Beyond Copenhagen: Kronborg Castle in Helsingør (Shakespeare's Elsinore), the Viking Ship Museum in Roskilde, the Wadden Sea National Park (UNESCO) in Jutland, the white cliffs of Møns Klint, the sand-buried church of Skagen at Denmark's northern tip, and the charming island of Bornholm in the Baltic Sea (known as 'Sunshine Island' for its microclimate). Aarhus, Denmark's second city, offers ARoS Aarhus Art Museum (with its famous rainbow panorama rooftop), Den Gamle By (The Old Town open-air museum), and a vibrant food scene. Cross-border trips to Malmö (35 minutes) and Stockholm (5 hours by train) are popular Nordic escapes.",
  considerations: [
    "Upfront Rental Costs: Danish landlords can legally ask for 3 months' deposit plus 3 months' prepaid rent plus the first month's rent. Moving into a Copenhagen one-bedroom can require DKK 56,000-98,000 (EUR 7,500-13,200) in cash upfront. This is one of the highest rental entry barriers in Europe. Budget for this before arrival.",
    "CPR Registration Dependencies: You cannot get a CPR number without an address that permits registration. Many Airbnbs, hotels, and short-term rentals do NOT allow CPR registration. Ensure your temporary housing explicitly permits 'folkeregistrering' (population registration). Without CPR, you cannot access banking, healthcare, or digital services.",
    "Wind and Weather: Denmark is rarely extremely cold (winter temperatures hover around 0-5 degrees Celsius), but it is almost always windy, damp, and overcast. Umbrellas are frequently destroyed by wind; invest in a quality raincoat (regnfrakke) and windbreaker instead. Sunshine hours in winter average 1-2 per day. Many newcomers from sunnier climates find this the hardest adjustment.",
    "Social Integration Difficulty: Danes are friendly, polite, and excellent English speakers, but forming close friendships is genuinely challenging. Most Danes maintain childhood or university friend groups they consider socially complete. The proven pathways: join a forening (sports club, choir, board game group), take Danish language classes (sprogskole), and participate actively in workplace social events. Expect the process to take 6-12 months.",
    "Tax Regime for Researchers and Key Employees: If you qualify for the Forskerskatteordningen (Researcher Tax Scheme), you pay a flat 27% tax rate (plus 8% AM-bidrag) for up to 7 years instead of the standard progressive rates. This can represent savings of DKK 10,000-25,000/month compared to normal taxation. Check eligibility before arrival — the minimum salary threshold is approximately DKK 75,000/month (2024)."
  ],
  mistakes: [
    "Walking in the bike lane. This is the unforgivable sin in Denmark. Copenhagen's bike lanes carry thousands of commuters traveling at 20-30 km/h, and stepping into the lane triggers aggressive bell-ringing, shouted warnings, and genuine anger. Tourists do this constantly. Bike lanes are clearly marked — stay on the pedestrian side.",
    "Not registering your address change within 5 days. Danish law requires you to report any address change to your municipality (kommune) within 5 days of moving. Failure to do so is a legal offense and can result in a fine. This applies to moves within Denmark as well as initial registration.",
    "Assuming healthcare is free for visitors. Universal healthcare is free for CPR-registered residents, not for tourists or visitors. If you do not have a CPR number, you need travel insurance. Emergency treatment is always provided, but follow-up care and GP visits require registration.",
    "Trying to speak Danish prematurely without practice. Danish pronunciation is notoriously difficult — the language has many silent letters, glottal stops (stød), and vowel sounds that do not exist in most other languages. Many Danes will switch immediately to English if they detect a foreign accent. This is not rude; it is Danish efficiency. Do not be discouraged — keep practicing, and eventually the switch will happen less frequently.",
    "Expecting spontaneous social warmth. Danish friendliness operates differently from Southern European or American warmth. Danes are helpful when asked, honest in conversation, and loyal once connected — but they do not initiate social contact with strangers, rarely extend open-ended invitations, and consider small talk a waste of time rather than a social lubricant. Adjust your expectations."
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency (Police, Fire, Ambulance)',
      description: 'For life-threatening situations, fires, and acute medical emergencies. Operators speak Danish and English. Works from any phone without a SIM card.'
    },
    {
      number: '114',
      service: 'Police (Non-Emergency)',
      description: 'For reporting crimes, lost property, noise complaints, and general police inquiries. Available 24/7.'
    },
    {
      number: '1813',
      service: 'Medical Helpline (Capital Region)',
      description: 'In Greater Copenhagen and the Capital Region, you MUST call 1813 before visiting the ER for non-life-threatening conditions. Nurses assess your symptoms and direct you to the appropriate level of care. Other regions have local Lægevagt (doctor on-call) numbers — check sundhed.dk for your area.'
    }
  ],
  sources: [
    {
      name: 'Ny i Danmark (New in Denmark)',
      category: 'Immigration',
      description: 'The official Danish Immigration Service portal for work permits, residence permits, family reunification, and citizenship applications.',
      link: 'https://www.nyidanmark.dk/en-GB'
    },
    {
      name: 'Borger.dk (Life in Denmark)',
      category: 'Government Services',
      description: 'The central citizen portal for all Danish public services, including housing, healthcare, taxation, and family matters.',
      link: 'https://lifeindenmark.borger.dk/'
    },
    {
      name: 'International House Copenhagen',
      category: 'Newcomer Support',
      description: 'One-stop service center for international newcomers in Copenhagen, offering CPR registration, tax card assistance, and integration guidance under one roof.',
      link: 'https://ihcph.kk.dk/'
    },
    {
      name: 'SKAT (Danish Tax Agency)',
      category: 'Taxation',
      description: 'The national tax authority handling tax cards, annual tax returns, the Researcher Tax Scheme, and employer registration.',
      link: 'https://skat.dk/data.aspx?oid=2244282'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to Denmark, consult the Danish Ministry of Foreign Affairs or a Danish embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/denmark',
    mfaLink: 'https://um.dk/en'
  },
  serviceDirectory: {
    title: "Service Directory - Denmark",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Denmark.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with residence permits, work visas, Pay Limit Scheme applications, and immigration compliance.",
        providers: [
          { name: "Fragomen Denmark", link: "https://www.fragomen.com" },
          { name: "Kromann Reumert", link: "https://www.kromannreumert.com/en" },
          { name: "PwC Immigration Services Denmark", link: "https://www.pwc.dk" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Real estate platforms and agencies for rentals and property purchases across Denmark.",
        providers: [
          { name: "Boligportal.dk", link: "https://www.boligportal.dk" },
          { name: "EDC", link: "https://www.edc.dk" },
          { name: "Nybolig", link: "https://www.nybolig.dk" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Advisory firms with expertise in Danish taxation, Researcher Tax Scheme, cross-border employment, and corporate structuring.",
        providers: [
          { name: "KPMG Denmark", link: "https://kpmg.dk" },
          { name: "EY Denmark", link: "https://www.ey.com/da_dk" },
          { name: "Grant Thornton Denmark", link: "https://www.grantthornton.dk" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including packing, shipping, and customs handling.",
        providers: [
          { name: "Crown Relocations Denmark", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "MTL Moving", link: "https://www.mtlmoving.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Danish language courses for newcomers, from government-funded integration programs to private intensive courses.",
        providers: [
          { name: "Studieskolen", link: "https://www.studieskolen.dk" },
          { name: "Speak (Copenhagen Language School)", link: "https://www.speakspeak.dk" },
          { name: "Berlitz Denmark", link: "https://www.berlitz.com/da-dk" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public healthcare access portals and private healthcare providers operating within the Danish system.",
        providers: [
          { name: "Sundhed.dk (National Health Portal)", link: "https://www.sundhed.dk" },
          { name: "Aleris-Hamlet Hospitaler", link: "https://www.aleris.dk" },
          { name: "Privathospitalet Danmark", link: "https://www.privathospitaletdanmark.dk" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Public employment services and recruitment firms supporting job searches in Denmark.",
        providers: [
          { name: "Workindenmark", link: "https://www.workindenmark.dk" },
          { name: "Jobindex", link: "https://www.jobindex.dk" },
          { name: "Academic Work Denmark", link: "https://www.academicwork.dk" }
        ]
      }
    ]
  }
};
