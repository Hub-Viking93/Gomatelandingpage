export const belgium = {
  id: 'belgium',
  slug: 'belgium',
  name: 'Belgium',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['French', 'Dutch', 'German'],
  shortDescription: 'High taxes funding high-quality services, in a complex but comfortable multicultural hub.',
  heroImage: 'https://images.unsplash.com/photo-1515784638688-3f7e90ebb446?',
  flagAlt: 'Flag of Belgium',
  atAGlance: "Relocating to Belgium means entering one of Europe's most complex yet comfortable societies. The country is split into three linguistic regions—Dutch-speaking Flanders in the north, French-speaking Wallonia in the south, and bilingual Brussels in the middle—each with its own government, media landscape, and cultural identity. This complexity extends to daily life: your commune (municipality) determines much of your administrative experience, and neighboring communes may have completely different procedures for the same task. Personal income tax is among the highest in the world (up to 50%), but in return, residents receive excellent healthcare, generous parental leave, extensive public transport, and strong worker protections. Daily life is private and structured. Belgians do not typically invite you over quickly, but once you are in their circle, the relationships are deep and lasting. The food culture is world-class but understated: Belgian fries, chocolate, waffles, and especially beer are taken seriously as cultural heritage, not tourist novelties. The country is tiny (about 30,500 sq km) but densely populated, with excellent rail connections meaning you can reach any city within two hours. The weather is reliably grey and wet, which pushes social life indoors—cozy cafes, home entertaining, and cultural events are central to how Belgians spend their time. Brussels, as the de facto capital of the European Union, is exceptionally international, with over 180 nationalities represented and English widely used in professional settings. Outside Brussels, language matters enormously and determines which public services, schools, and cultural institutions you access.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'High',
    primaryLanguages: 'French, Dutch (Region dependent)',
  },
  visas: [
    {
      name: 'Professional Card (Carte Professionnelle)',
      targetAudience: 'Self-employed workers and freelancers',
      useCase: 'Required for non-EU citizens who want to work as self-employed professionals in Belgium. You must demonstrate that your business activity adds economic value (innovation, employment, investment). The application is submitted to the relevant regional authority: Brussels Economy and Employment, Vlaio (Flanders), or SPW Economie (Wallonia). Processing takes 4-6 months on average.',
      duration: 'Up to 5 years, renewable',
      link: 'https://economy-employment.brussels/professional-card'
    },
    {
      name: 'Single Permit (Permis Unique / Gecombineerde Vergunning)',
      targetAudience: 'Employed professionals from non-EU countries',
      useCase: 'A combined work and residence permit that replaced the old work permit system. Your employer initiates the application through the regional employment office. The permit is tied to your employer—changing jobs requires a new application. Processing involves both regional and federal authorities and typically takes 2-4 months.',
      duration: '1 year, renewable up to 3 years',
      link: 'https://dofi.ibz.be/en/themes/third-country-nationals/work'
    },
    {
      name: 'European Blue Card',
      targetAudience: 'Highly qualified non-EU workers',
      useCase: 'For non-EU citizens with a higher education degree and a binding job offer with a gross annual salary above the threshold (approximately EUR 58,000 as of 2025). Provides more mobility within the EU than a standard single permit and can lead to long-term residence. Processed through the Immigration Office (Office des Étrangers).',
      duration: 'Up to 3 years, renewable',
      link: 'https://dofi.ibz.be/en'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists and short-term business visitors',
      useCase: 'For non-EU citizens visiting Belgium for tourism, business meetings, conferences, or family visits. Valid across the Schengen area. Application is submitted at the Belgian embassy or consulate in your country of residence, with biometric data collection.',
      duration: 'Up to 90 days within a 180-day period',
      link: 'https://dofi.ibz.be/en/themes/third-country-nationals/short-stay'
    },
    {
      name: 'Family Reunification Visa',
      targetAudience: 'Spouses, partners, and dependents of Belgian residents',
      useCase: 'For family members joining a Belgian citizen, EU national, or legally residing third-country national. The sponsor must demonstrate sufficient income and adequate housing. Processing involves the Immigration Office and can take 6-9 months. Cohabiting partners (cohabitation légale) are recognized alongside married spouses.',
      duration: 'Initially 1 year, renewable toward permanent residence',
      link: 'https://dofi.ibz.be/en/themes/third-country-nationals/family-reunification'
    }
  ],
  requirements: [
    {
      title: 'Commune Registration (Inscription à la Commune)',
      explanation: 'Within 8 working days of arriving in Belgium, you must register at the town hall (Commune/Gemeente) of the municipality where you will live. This triggers a visit from the local police officer (Agent de Quartier) who will verify that you actually reside at the declared address.',
      importance: 'Registration is the gateway to everything: your National Number, your eID card, healthcare enrollment, and tax registration all flow from commune registration. If the police officer visits and your name is not on the doorbell, or no one answers, your registration can be refused. Make sure your name is clearly visible at your address and that you are reachable during the verification period, which can take up to two weeks.',
      link: 'https://www.belgium.be/en/housing/moving_and_formalities'
    },
    {
      title: 'National Number (Rijksregisternummer / Numéro National)',
      explanation: 'An 11-digit identification number issued to all registered residents of Belgium. It is linked to the National Register and printed on your eID card. The number encodes your date of birth and serves as your unique identifier across all government systems.',
      importance: 'Required for accessing healthcare (mutualité/mutualiteit), filing taxes (Tax-on-web), signing employment contracts, opening bank accounts, and interacting with virtually all public and private services in Belgium. Without it, you are effectively invisible to the system.',
      link: 'https://www.socialsecurity.be/foreigner/en/landing'
    },
    {
      title: 'itsme Digital Identity App',
      explanation: 'The standard digital identity application used across Belgium for secure authentication. It replaces physical card readers and passwords for accessing government portals, banking services, tax filing, and health insurance platforms.',
      importance: 'Setting up itsme should be one of your first actions after receiving your eID card. Without it, accessing Tax-on-web (annual tax filing), MyMinfin (tax documents), MaSanté/MijnGezondheid (health records), and online banking becomes significantly more cumbersome, requiring physical card readers that few people still use.',
      link: 'https://www.itsme-id.com/'
    },
    {
      title: 'Mutualité / Mutualiteit (Health Insurance Fund)',
      explanation: 'Belgium operates a mandatory health insurance system through licensed health insurance funds (mutualités in French, mutualiteiten in Dutch). Major funds include CM/MC, Solidaris/Partena, and Helan. You must choose and enroll in a fund within three months of registration.',
      importance: 'Healthcare in Belgium works on a reimbursement model: you pay the doctor or hospital upfront and then claim back 75-85% from your mutualité. Without enrollment, you pay full price and receive no reimbursement. Your mutualité also handles disability benefits, maternity leave, and certain supplementary insurance options. Choosing the right fund can affect the supplementary benefits you receive.',
      link: 'https://www.inami.fgov.be/en'
    }
  ],
  jobsAndIncome: {
    overview:
      "Belgium has a highly regulated, well-protected labor market with strong unions, mandatory indexation of salaries to inflation, and extensive worker benefits. The job market is concentrated in Brussels (EU institutions, international organizations, multinationals), Antwerp (port, logistics, diamonds), and the Flemish cities (tech, manufacturing). EU institutions and NATO are major employers of international staff. Language determines access: Dutch in Flanders, French in Wallonia, and both (plus English) in Brussels.",
    whereToLook: [
      "LinkedIn and company career pages",
      "Actiris (Brussels public employment service)",
      "VDAB (Flanders public employment service)",
      "Forem (Wallonia public employment service)",
      "EU institutions job portal (EPSO) and international organization career pages"
    ],
    realityChecks: [
      "Language requirements are strict and region-dependent. A French speaker applying for jobs in Flanders will face significant barriers, and vice versa. Brussels is more flexible but still expects at least bilingual proficiency for many roles.",
      "Hiring processes are formal and often slow, particularly in larger companies and the public sector. Expect multiple interview rounds and lengthy notice periods (up to 3-6 months for senior roles).",
      "Employment costs for employers are among the highest in Europe, which makes companies cautious about hiring and may slow down the process for non-EU candidates requiring sponsorship.",
      "The 'package' matters more than gross salary—meal vouchers, company car (a Belgian institution), group insurance, hospitalization insurance, and eco-cheques can add 20-40% to your total compensation."
    ]
  },
  salaryReality: {
    overview:
      "Belgian gross salaries look moderate by Western European standards, but the gap between gross and net is one of the largest in the OECD due to high income tax (progressive rates up to 50%) and mandatory social security contributions (13.07% employee share). In return, the social safety net is extensive: healthcare reimbursement, generous unemployment benefits, pension accrual, and automatic salary indexation that adjusts your pay for inflation.",
    realityChecks: [
      "A gross salary of EUR 4,000/month translates to roughly EUR 2,400-2,500 net after taxes and social contributions. The difference is dramatic but funds real services.",
      "Salary indexation means your pay automatically adjusts for inflation, which is unusual in most countries and provides genuine protection against cost-of-living increases.",
      "Benefits (meal vouchers at EUR 8/day, company car, group insurance, hospitalization insurance) are not taxed the same way as salary and significantly increase real purchasing power.",
      "Regional tax differences exist: municipal surcharges (opcentiemen/centimes additionnels) vary from commune to commune and can affect net pay by EUR 50-100/month."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The value of employer-provided benefits: company car (worth EUR 300-600/month in avoided costs), meal vouchers (EUR 160/month), group insurance, and hospitalization insurance",
      "The impact of Belgium's progressive tax brackets—each additional euro earned above EUR 46,440 (2025 threshold) is taxed at 50%",
      "Holiday pay: Belgian employees receive double holiday pay (a 13th-month equivalent) paid in May/June, which significantly boosts annual compensation",
      "Mandatory social security deductions that fund pension, healthcare, unemployment insurance, and disability benefits"
    ]
  },
  housingSystem: {
    overview:
      "Belgium's rental market is stable and less frenzied than in cities like Amsterdam or Paris, but finding the right place still requires effort. The market is split by region: Brussels has the most international-friendly options, Flanders tends toward newer construction, and Wallonia offers more space for less money. Popular expat neighborhoods in Brussels include Ixelles, Etterbeek, Woluwe-Saint-Lambert, and the European Quarter (Schuman/Luxembourg). In Antwerp, Zuid and Zurenborg are popular; in Ghent, the city center and Gentbrugge attract international residents.",
    expectations:
      "Standard leases in Belgium are either 1-year (short-term, limited to 3 years total) or 9-year contracts (the default long-term lease). Breaking a 9-year lease early triggers penalties: 3 months' rent in the first year, 2 months' in the second, 1 month's in the third, and none after that. Deposits are capped at 2-3 months' rent and must be placed in a blocked bank account (garantie locative). Furnished apartments are less common outside Brussels. Rental prices in Brussels average EUR 1,000-1,500 for a one-bedroom apartment; less in Wallonia, similar or slightly more in prime Flemish cities."
  },
  healthcareReality:
    "Belgium's healthcare system is consistently rated among the best in the world for quality and access. It operates on a mandatory insurance model through mutualités/mutualiteiten (health insurance funds). Patients have free choice of doctor and specialist, with no gatekeeping required—you can see a cardiologist without a GP referral. The reimbursement system means you pay upfront (a GP visit costs around EUR 30, a specialist EUR 50-60) and claim back 75-85% from your health insurance fund. Major hospitals like UZ Brussel, Cliniques Universitaires Saint-Luc, UZ Leuven, and CHU de Liège provide excellent specialist and emergency care. Pharmacies are well-stocked and pharmacists can advise on minor ailments. Dental care is partially covered but can be expensive for complex work. Mental health services are increasingly accessible, with partial reimbursement for psychologist sessions. The main adjustment for newcomers is the reimbursement workflow: keeping receipts, submitting claims, and managing cash flow while waiting for repayment.",
  digitalLife: {
    overview:
      "Belgium has functional but regionally fragmented digital systems. The federal government provides some unified platforms, but many services are split along linguistic and regional lines. Internet infrastructure is solid, with broadband widely available from providers like Proximus, VOO/Telenet, and Orange.",
    essentials: [
      "itsme app — the universal digital ID for banking, government services, and tax filing",
      "Tax-on-web (MyMinfin) — the online platform for annual tax declaration, accessible via itsme or eID card reader",
      "Payconiq by Bancontact — the dominant mobile payment app in Belgium, accepted at most shops and restaurants",
      "NMBS/SNCB app — Belgian National Railways app for train tickets, schedules, and delay notifications"
    ],
    whatSurprisesNewcomers: [
      "The healthcare reimbursement system means you regularly submit paper or digital claims and wait for partial repayment, which is unusual for people coming from systems where insurance pays providers directly.",
      "Official government communication still arrives by physical letter (registered mail) for important matters like tax assessments, commune decisions, and legal notifications.",
      "Different regions use different digital platforms for the same service—for example, Brussels, Flanders, and Wallonia each have separate employment service portals.",
      "Bancontact/Payconiq is far more widely accepted than Visa or Mastercard contactless in smaller shops, bakeries, and markets."
    ]
  },
  culture: {
    text: 'Belgian culture is built on compromise, modesty, and a dry, self-deprecating humor. Belgians do not boast, and they are suspicious of those who do. There is a strong sense of \"village\" even in cities—your local bakery, butcher, and cafe form a social network. The country has produced Tintin, the Smurfs, Magritte, and Stromae, blending surrealism into its national identity. Food is serious business: fries are served in paper cones with an array of sauces (not just ketchup), chocolate shops outnumber clothing stores in some neighborhoods, and the beer culture—with over 1,500 varieties, many brewed by Trappist monks—is UNESCO-recognized. Social life is organized around dinner parties at home rather than going out, and being invited to a Belgian\'s home is a genuine mark of friendship.',
    highlights: [
      'Beer is served in the specific glass designed for that brand. Ordering a Duvel and receiving it in the wrong glass is an offense to the bartender\'s professional pride.',
      'Greeting customs vary by region: one cheek kiss (air kiss) is standard in Brussels and Wallonia; a firm handshake is more common in Flanders. Three kisses are reserved for special occasions.',
      'Language sensitivity is real. Speaking French in a deeply Flemish area (or Dutch in Wallonia) can be met with coldness. In Brussels, starting in French or English is generally safe.',
      'Sundays are quiet. Most shops are closed, and the culture respects rest. Plan your grocery shopping for Saturday.',
      'Garbage sorting is strict and enforced: blue bags for PMD (plastic, metal, drink cartons), yellow for paper/cardboard, white for general waste, and green for food waste in some communes. Incorrect sorting can result in refused collection or fines.'
    ]
  },
  transportationMobility:
    "Belgium has one of Europe's densest rail networks, operated by SNCB/NMBS. Trains connect all major cities within 1-2 hours, and commuting between cities is common—living in Ghent and working in Brussels is entirely normal. Brussels has an extensive metro, tram, and bus network operated by STIB/MIVB, while Flemish cities use De Lijn and Wallonia uses TEC. Company cars are a deeply embedded part of Belgian compensation culture—roughly one in five Belgian employees has one—which contributes to notorious traffic congestion, especially on the Brussels Ring (R0) and the E40/E19 motorways during rush hours. Cycling infrastructure is excellent in Flanders (flat terrain) and improving in Brussels. For commuters, the combination of train + folding bike or e-scooter is increasingly popular. Parking in Brussels is expensive and limited.",
  internationalConnectivity:
    "Brussels Airport (BRU) in Zaventem is the main international hub, with Brussels Airlines, Lufthansa, and numerous carriers offering direct flights across Europe, Africa, and North America. Brussels South Charleroi Airport (CRL) is the budget carrier hub, used extensively by Ryanair and Wizz Air for European destinations. Belgium's position at the heart of Europe makes it exceptionally well-connected by rail: Thalys/Eurostar reaches Paris in 1 hour 22 minutes, Amsterdam in under 2 hours, Cologne in under 2 hours, and London in about 2 hours via the Channel Tunnel. This makes Belgium one of the best-connected countries in Europe for both air and rail travel.",
  travelExploration:
    "Despite its small size, Belgium offers rich domestic travel. Bruges (Brugge) is a medieval gem with canals and chocolate shops, though heavily touristed. Ghent balances medieval architecture with a vibrant student and food scene. Antwerp is the fashion and diamond capital with excellent museums (MAS, Royal Museum of Fine Arts). The Ardennes in southern Belgium offer hiking, kayaking, and the historic Battle of the Bulge sites. The Belgian coast (De Panne to Knokke) is accessible via the Kusttram, the world's longest tram line. Dinant, birthplace of Adolphe Sax (inventor of the saxophone), sits dramatically beneath towering cliffs. Belgium's central location means day trips to Paris, Amsterdam, Luxembourg, and the German Rhineland are effortless by train.",
  considerations: [
    'Tax Burden: Personal income tax reaches 50% on income above approximately EUR 46,440 (2025), plus mandatory social security contributions of 13.07%. Your net salary will be significantly lower than gross. However, the benefits funded by these contributions—healthcare, pension, unemployment insurance, child benefits—are genuinely excellent.',
    'Rental Contract Length: The default residential lease is 9 years. Breaking it early incurs penalties (3 months rent in year 1, 2 months in year 2, 1 month in year 3). Short-term leases (1-3 years) exist but must be explicitly stated in the contract.',
    'Garbage Sorting: Municipal waste sorting rules are strict and vary by commune. Using the wrong colored bag or putting the wrong item in a bag results in refused collection. Bags must be purchased (they are not free) from supermarkets or commune offices. Failure to comply can result in fines.',
    'Transport Strikes: Belgium has a strong union culture, and public transport strikes occur several times per year, sometimes with limited notice. Having a backup commute plan (car, bike, or work-from-home arrangement) is practical.',
    'The Commune System: Your local commune (there are 589 in Belgium) functions as your primary interface with the government. Different communes have different efficiency levels, opening hours, and even attitudes toward non-native speakers. Researching your commune before choosing where to live is worthwhile.'
  ],
  mistakes: [
    'Calling Belgian fries "French fries." They are Belgian. This is a point of genuine national pride, and debating the origin of fries is a common conversation topic. Belgium claims to have invented them in the late 1600s in the Meuse valley.',
    'Underestimating the Agent de Quartier visit. After commune registration, a local police officer will visit your address to verify you live there. If your name is not on the doorbell or mailbox, or nobody answers, your registration can be delayed or denied.',
    'Not setting up itsme immediately after receiving your eID card. Without it, accessing tax portals, banking services, and government platforms becomes needlessly complicated. The setup process requires your eID and a Belgian bank account.',
    'Expecting shops to be open on Sundays or late evenings. Most retail is closed on Sundays (except in tourist areas like Brussels city center), and weekday shopping hours often end at 6-7 PM. Saturday is the main shopping day.',
    'Ignoring the language divide in social and professional settings. Addressing a Flemish person in French (or vice versa) without first asking their preference can create an awkward or even hostile reaction. When in doubt, especially in Brussels, starting in English is a safe neutral option.'
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency (Ambulance / Fire)',
      description: 'European-standard emergency number for medical and fire emergencies. Operators speak French, Dutch, German, and English.'
    },
    {
      number: '101',
      service: 'Police Emergency',
      description: 'Direct line for police assistance across Belgium. Available 24/7.'
    },
    {
      number: '1813',
      service: 'Suicide Prevention / Mental Health Crisis',
      description: 'National suicide prevention and mental health crisis line, available 24/7 with operators in Dutch and French.'
    }
  ],
  sources: [
    {
      name: 'Belgium.be',
      category: 'Government Services',
      description: 'Official federal government portal providing information on all administrative procedures, rights, and services for residents and newcomers.',
      link: 'https://www.belgium.be/en'
    },
    {
      name: 'Immigration Office (Office des Étrangers / Dienst Vreemdelingenzaken)',
      category: 'Immigration & Residency',
      description: 'Federal authority managing visa applications, residence permits, single permits, and immigration regulations for non-EU nationals.',
      link: 'https://dofi.ibz.be/en'
    },
    {
      name: 'INAMI/RIZIV',
      category: 'Healthcare',
      description: 'National Institute for Health and Disability Insurance, providing information on healthcare coverage, reimbursement rates, and mutualité enrollment.',
      link: 'https://www.inami.fgov.be/en'
    },
    {
      name: 'FPS Finance (SPF Finances)',
      category: 'Tax & Finance',
      description: 'Federal Public Service Finance handling tax registration, Tax-on-web declarations, and information on Belgian tax obligations for residents and non-residents.',
      link: 'https://finance.belgium.be/en'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to Belgium, consult the Belgian Federal Public Service Foreign Affairs or a Belgian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/belgium',
    mfaLink: 'https://diplomatie.belgium.be/en'
  },
  serviceDirectory: {
    title: "Service Directory - Belgium",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Belgium.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for residence permits, single permits, Blue Cards, and Belgian immigration compliance.",
        providers: [
          { name: "Fragomen Belgium", link: "https://www.fragomen.com" },
          { name: "Deloitte Legal Belgium", link: "https://www2.deloitte.com/be" },
          { name: "Liedekerke Wolters Waelbroeck Kirkpatrick", link: "https://www.liedekerke.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Platforms and agencies assisting with long-term rentals and residential property purchases across Belgium.",
        providers: [
          { name: "Immoweb", link: "https://www.immoweb.be" },
          { name: "ERA Real Estate Belgium", link: "https://www.era.be" },
          { name: "Century 21 Belgium", link: "https://www.century21.be" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Belgian tax residency, payroll, cross-border income, and the complex Belgian tax code.",
        providers: [
          { name: "PwC Belgium", link: "https://www.pwc.be" },
          { name: "EY Belgium", link: "https://www.ey.com/nl_be" },
          { name: "KPMG Belgium", link: "https://home.kpmg/be" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including packing, shipping, customs, and destination support.",
        providers: [
          { name: "Crown Relocations Belgium", link: "https://www.crownrelo.com" },
          { name: "Allied Belgium", link: "https://www.allied.com" },
          { name: "AGS Movers Belgium", link: "https://www.agsmovers.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Language courses and integration programs in Dutch, French, and German, required for integration in most regions.",
        providers: [
          { name: "VDAB (Flanders)", link: "https://www.vdab.be" },
          { name: "Actiris / Bruxelles Formation (Brussels)", link: "https://www.actiris.brussels" },
          { name: "Forem (Wallonia)", link: "https://www.leforem.be" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major hospitals and the public health insurance system used by all residents in Belgium.",
        providers: [
          { name: "UZ Brussel", link: "https://www.uzbrussel.be" },
          { name: "Cliniques Universitaires Saint-Luc", link: "https://www.saintluc.be" },
          { name: "UZ Leuven", link: "https://www.uzleuven.be" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and agencies connecting international talent with Belgian employers.",
        providers: [
          { name: "StepStone Belgium", link: "https://www.stepstone.be" },
          { name: "Hays Belgium", link: "https://www.hays.be" },
          { name: "Michael Page Belgium", link: "https://www.michaelpage.be" }
        ]
      }
    ]
  }
};