export const luxembourg = {
  id: 'luxembourg',
  slug: 'luxembourg',
  name: 'Luxembourg',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Luxembourgish', 'French', 'German'],
  shortDescription: 'A wealthy, efficient Grand Duchy where high salaries meet high housing costs.',
  heroImage: 'https://images.unsplash.com/photo-1651005805859-b0ebe6da93e6?',
  flagAlt: 'Flag of Luxembourg',
  atAGlance: "Luxembourg is a paradox in miniature: a tiny Grand Duchy of just 660,000 people that hosts some of the world's highest salaries, most powerful financial institutions, and key EU bodies. Nearly half the population is foreign-born, and over 200,000 cross-border workers (frontaliers) commute daily from France, Belgium, and Germany, creating a genuinely multilingual and multicultural environment. The three official languages (Luxembourgish, French, German) plus widespread English mean you might hear four languages in a single conversation. Salaries are among the highest in Europe, with the minimum wage exceeding EUR 2,500 per month, but this is offset by eye-watering housing costs that are the country's single biggest challenge. Luxembourg City is clean, safe, and beautifully positioned on dramatic gorges, but nightlife and cultural variety are limited compared to bigger capitals. The pace of life is calm, ordered, and family-oriented. Public transport is completely free nationwide, a world first that works remarkably well. The bureaucracy is efficient by European standards, particularly through the Guichet.lu portal. For professionals in finance, technology, EU institutions, or legal services, Luxembourg offers extraordinary earning potential and a high quality of life. For those seeking vibrant city energy or affordable housing, it requires adjustment and often a cross-border living arrangement.",

  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'Very High',
    primaryLanguages: 'French (Admin), Luxembourgish (Daily), German',
  },
  visas: [
    {
      name: 'European Blue Card',
      targetAudience: 'Highly qualified professionals',
      useCase: 'For non-EU citizens with a higher education degree and a job offer paying at least 1.5 times the average gross annual salary (approximately EUR 80,000+). Grants the right to work and reside, with family reunification. After 5 years, eligible for long-term EU residence.',
      duration: 'Up to 4 years (tied to employment contract)',
      link: 'https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/hautement-qualifie/salarie-hautement-qualifie.html'
    },
    {
      name: 'Salaried Worker Residence Permit',
      targetAudience: 'Employed professionals (non-EU)',
      useCase: 'For non-EU citizens with a job offer from a Luxembourg employer. The employer must demonstrate that the position could not be filled by an EU/EEA citizen. Application is through the Ministry of Foreign and European Affairs (MAEE).',
      duration: '1-3 years (renewable)',
      link: 'https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/travailleur-salarie/salarie.html'
    },
    {
      name: 'Self-Employed / Independent Worker Permit',
      targetAudience: 'Freelancers, entrepreneurs',
      useCase: 'For those establishing a business or working as a self-employed professional. Requires proof of qualifications, a business plan, and sufficient financial resources. The application process includes evaluation by the Ministry of the Economy.',
      duration: 'Up to 3 years (renewable)',
      link: 'https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/travailleur-independant/independant.html'
    },
    {
      name: 'Intra-Corporate Transferee (ICT) Permit',
      targetAudience: 'Company transferees',
      useCase: 'For managers, specialists, or trainees transferred from a non-EU branch of a multinational to a Luxembourg entity. Streamlined process for large companies with established Luxembourg operations.',
      duration: 'Up to 3 years (managers/specialists) or 1 year (trainees)',
      link: 'https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/transfert-intragroupe.html'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists, short-term visitors',
      useCase: 'For short visits up to 90 days within a 180-day period for tourism, family visits, or business meetings. Does not permit employment.',
      duration: 'Up to 90 days',
      link: 'https://guichet.public.lu/en/citoyens/immigration/moins-3-mois/visa-court-sejour.html'
    }
  ],
  requirements: [
    {
      title: 'Declaration of Arrival (Commune Registration)',
      explanation: 'Within 8 days of arriving in Luxembourg, you must register at your local commune (municipality). This requires your rental contract, passport, and for non-EU citizens, your visa or residence permit. The commune issues a certificate of residence.',
      importance: 'Commune registration activates your access to all public services, including healthcare, schooling, voting (for EU citizens in local elections), and utility contracts. Without it, you cannot proceed with any other administrative step. Luxembourg has 102 communes, each with its own office.',
      link: 'https://guichet.public.lu/'
    },
    {
      title: 'Matricule Number (Social Security Number)',
      explanation: 'A 13-digit personal identification number issued by the Centre Commun de la Securite Sociale (CCSS). It is automatically generated when you register with your commune and begin employment.',
      importance: 'The matricule is your key identifier for tax, healthcare, pension, banking, and all interactions with government agencies. It appears on your social security card and is requested by every institution you deal with. Ensure your employer registers you with CCSS within the first days of employment.',
      link: 'https://ccss.public.lu/'
    },
    {
      title: 'CNS Enrollment (National Health Fund)',
      explanation: 'Luxembourg has mandatory public health insurance through the Caisse Nationale de Sante (CNS). Enrollment is automatic for employees through employer payroll contributions. Self-employed individuals must register independently.',
      importance: 'CNS covers the majority of medical, dental, and hospital costs, but operates on a reimbursement basis: you pay the provider upfront and submit claims for reimbursement (typically 80-100% depending on the service). Understanding the reimbursement process and timelines is essential to avoid cash flow surprises.',
      link: 'https://cns.public.lu/'
    },
    {
      title: 'Medical Examination (for non-EU nationals)',
      explanation: 'Non-EU nationals applying for a residence permit must undergo a medical examination including a TB screening, conducted by a licensed physician in Luxembourg within 3 months of arrival.',
      importance: 'This examination is a mandatory condition for finalizing your residence permit. Schedule it promptly after arrival; delays can complicate your permit processing. The Direction de la Sante provides a list of approved physicians.',
      link: 'https://sante.public.lu/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Luxembourg's job market is small but exceptionally international, dominated by financial services (banking, fund management, insurance), EU institutions (European Court of Justice, European Investment Bank, Eurostat), Big Four accounting firms, and a growing tech sector. Nearly 70% of the private-sector workforce are cross-border commuters or foreign residents. English is widely used in professional settings, but French is the dominant language for client-facing roles, administrative tasks, and career advancement.",
    whereToLook: [
      "Jobs.lu (largest local job board)",
      "Moovijob.com",
      "LinkedIn",
      "EU Careers (EPSO) for EU institutional positions",
      "Monster Luxembourg and company career pages"
    ],
    realityChecks: [
      "Competition is fierce because the talent pool includes commuters from three neighboring countries willing to accept lower housing costs in exchange for Luxembourg salaries.",
      "Multilingualism is a genuine requirement, not a 'nice to have.' Many job listings require French plus English at minimum, with German or Luxembourgish as additional advantages.",
      "Employment contracts are critical for residency, banking, and housing applications; losing your job triggers immediate administrative consequences for non-EU residents.",
      "The financial sector dominates, but roles in compliance, risk, and regulatory affairs are particularly in demand due to Luxembourg's status as an EU financial center."
    ]
  },
  salaryReality: {
    overview:
      "Luxembourg offers some of the highest salaries in Europe. The statutory minimum wage (salaire social minimum) for qualified workers is approximately EUR 3,000 gross per month. Average salaries in financial services range from EUR 60,000-120,000 annually, with senior roles and EU institutional positions significantly higher. Income tax is progressive (0-42%), but the effective rate is moderated by deductions and tax class benefits for married couples.",
    realityChecks: [
      "Gross salaries look extraordinary but housing absorbs a disproportionate share: expect EUR 1,500-2,500/month for a decent apartment in Luxembourg City.",
      "The statutory minimum wage is the highest in the EU but barely covers living costs in the capital.",
      "Tax class matters enormously: married couples with one earner (Class 2) benefit from significantly lower effective tax rates than single earners (Class 1).",
      "Year-end bonuses (13th month salary) are standard in many sectors and should be factored into total compensation calculations."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Actual net pay after progressive income tax and social contributions (approximately 12.45% employee share for social security)",
      "Housing costs that can consume 40-50% of net income for those living in Luxembourg City",
      "Cross-border living savings: renting in Trier (Germany), Metz (France), or Arlon (Belgium) can save EUR 500-1,000/month",
      "Mandatory CNS health insurance contributions and the reimbursement-based payment model"
    ]
  },
  housingSystem: {
    overview:
      "Housing is Luxembourg's most acute challenge. Demand far exceeds supply, prices are among the highest in Europe, and competition for quality rentals is intense. Popular areas in Luxembourg City include Kirchberg (near EU institutions), Belair, Limpertsberg, and Bonnevoie. Esch-sur-Alzette, the second city, offers more affordable options. Many residents choose to live across the border in France (Metz, Thionville), Belgium (Arlon), or Germany (Trier) and commute, saving substantially on rent while retaining Luxembourg salaries.",
    expectations:
      "Expect to pay EUR 1,500-2,500/month for a two-bedroom apartment in Luxembourg City, with deposits of two to three months' rent. Landlords often require proof of income (typically 3x the monthly rent), employment contracts, and references. Viewings are competitive; be prepared to decide quickly. Platforms like AtHome.lu and Immotop.lu are the main listing sites. Cross-border commuting is a genuine lifestyle choice, not a compromise: the free public transport system extends to border areas, and many employers accept that their staff live in neighboring countries."
  },
  healthcareReality:
    "Luxembourg's healthcare system is excellent, well-funded, and accessible. The mandatory CNS (Caisse Nationale de Sante) insurance covers the vast majority of medical costs, but the system operates on reimbursement: you pay the full amount at the time of service and submit claims for reimbursement (typically 80-88% for consultations, nearly 100% for hospital stays). This surprises newcomers accustomed to co-pay systems. The Centre Hospitalier de Luxembourg (CHL) and Hopitaux Robert Schuman are the main hospital groups, both offering high-quality care with multilingual staff. Waiting times for specialists are moderate, and for serious conditions, the proximity of major medical centers in Belgium, France, and Germany provides additional options. Dental care is partially covered by CNS, but many people take supplementary private insurance (mutuelle) for better dental and optical coverage.",
  digitalLife: {
    overview:
      "Luxembourg is well-digitized for a small country. The MyGuichet.lu platform is the central gateway to online government services, from tax filing to residence permit applications. LuxTrust digital identity is required for secure authentication on government and banking portals. Internet infrastructure is fast and reliable, with several providers including POST Luxembourg and Tango.",
    essentials: [
      "MyGuichet.lu (central government services portal)",
      "LuxTrust digital identity (electronic authentication for banking and admin)",
      "CNS online portal (health insurance claims and reimbursement tracking)",
      "POST or Tango mobile/internet plan"
    ],
    whatSurprisesNewcomers: [
      "The reimbursement-based healthcare payment system means you need cash or credit upfront for medical visits before being reimbursed weeks later.",
      "LuxTrust setup requires an in-person step at POST Luxembourg or a bank, which can delay your digital access by days.",
      "Many administrative processes work online through MyGuichet.lu, but some (e.g., commune registration) still require physical presence.",
      "Free public WiFi is available throughout Luxembourg City and on public transport."
    ]
  },
  culture: {
    text: "Luxembourg is a trilingual, multicultural society that functions with quiet efficiency. Social life is reserved and family-oriented, with a clear separation between work and personal time that is deeply respected. The local Luxembourgish identity is subtle but proud; 'Moien' (hello) is the universal greeting that signals belonging. The country has a rich tradition of fine dining, with one of the highest concentrations of Michelin-starred restaurants per capita in the world. Wine culture, particularly from the Moselle Valley, is taken seriously. Sundays are genuinely quiet: shops close, families gather, and the pace drops to zero. Community life revolves around the commune, local sports clubs, and seasonal events. Despite its international workforce, Luxembourg can feel socially insular for newcomers, as many social networks form around school communities, sports clubs, and long-standing local ties.",
    highlights: [
      "Public transport (buses, trams, trains) is 100% free for everyone, including tourists. This was introduced in 2020 and is a genuine quality-of-life feature.",
      "Language switching is constant and natural: French for restaurants and shops, Luxembourgish for local social life, German for media and some administration, English for banking and tech. Starting with 'Moien' or 'Bonjour' and switching to English is perfectly acceptable.",
      "Schueberfouer, a massive funfair held annually since 1340, runs for three weeks in late August/September on the Glacis field. It is a national institution.",
      "The Moselle Valley along the German border produces excellent white wines (Riesling, Pinot Gris, Cremant de Luxembourg) and is a lovely weekend drive.",
      "Luxembourg National Day on June 23 features a spectacular fireworks display over the Pont Adolphe and the Petrusse Valley, followed by a full day of celebrations on the 24th."
    ]
  },

  transportationMobility:
    "Luxembourg made all public transport free in March 2020, a world first. This covers all buses, trams (the Luxtram network in Luxembourg City is modern and expanding), and second-class trains operated by CFL (Societe Nationale des Chemins de fer Luxembourgeois). The system is clean, punctual, and genuinely useful for daily commuting. The main limitation is capacity during peak hours, particularly on cross-border train lines from Metz, Trier, and Arlon. First-class train travel still requires a paid upgrade. Cycling infrastructure is growing, with Vel'OH! bike-sharing available in Luxembourg City. Car ownership is common, particularly for cross-border commuters and those living outside the capital, but parking in Luxembourg City is expensive and increasingly restricted. The country is small enough (82 km north to south) that driving from one end to the other takes about an hour.",

  internationalConnectivity:
    "Luxembourg Airport (LUX, also known as Findel) is compact but well-connected, with direct flights to most major European cities operated by Luxair (the national carrier), Ryanair, easyJet, and others. For long-haul travel, connecting through Frankfurt (3 hours by car), Amsterdam, or Paris CDG (3.5 hours by TGV) is standard. Luxembourg's central European location makes cross-border travel effortless: Paris is 2 hours by TGV from nearby Metz, Brussels is 3 hours by train, and Frankfurt is a 3-hour drive. The excellent motorway network connects to all neighboring countries.",

  travelExploration:
    "Despite its tiny size, Luxembourg offers surprising variety. The casemates (underground fortifications) of Luxembourg City are a UNESCO World Heritage site. The Mullerthal region (Little Luxembourg Switzerland) features dramatic sandstone rock formations and well-marked hiking trails. The Ardennes in the north (around Clervaux and Vianden) offer castle visits, nature parks, and the acclaimed Edward Steichen photography exhibition at Clervaux Castle. The Moselle Valley provides vineyard walks, wine tastings, and charming riverside villages. For weekend escapes, the proximity to Belgium (Bruges, Brussels), Germany (the Rhineland, Eifel region), and France (Alsace, Lorraine, Paris) makes Luxembourg an ideal base for European exploration.",

  considerations: [
    "Housing Crisis: Luxembourg has a severe housing shortage that has driven prices to extraordinary levels. Average purchase prices exceed EUR 10,000 per square meter in the capital. Many newcomers are forced into cross-border commuting arrangements or accept longer-than-expected search periods. Start looking well before your arrival date.",
    "Sunday Closures: Luxembourg takes Sunday rest seriously. Nearly all shops, supermarkets, and services close on Sundays. Petrol station shops and some restaurants in tourist areas are exceptions. Plan your grocery shopping for Saturday at the latest.",
    "Quiet Nightlife: Luxembourg City is not Berlin or Paris. Nightlife is limited, concentrated in the Grund valley and Clausen areas, and winds down early by major-city standards. Social life revolves more around dining, wine, and home entertaining.",
    "Cross-Border Complexity: Living in one country while working in another creates tax complications. Frontaliers must navigate bilateral tax treaties, and exceeding certain work-from-home thresholds can shift your tax residency. Professional tax advice is essential for cross-border workers.",
    "Language Expectations: While you can survive in English, particularly in finance and tech, not speaking French significantly limits social integration, career advancement in local companies, and interactions with public services outside the capital."
  ],

  mistakes: [
    "Assuming Luxembourg is a suburb of Germany or France. It is a proudly independent sovereign nation, a founding EU member, and a Grand Duchy with its own language, culture, and identity.",
    "Not carrying identification. You are legally required to carry a valid ID (passport or residence card) at all times. Random checks are rare but do occur.",
    "Trying to pay for the bus or tram. Public transport is free. Attempting to pay will draw puzzled looks from the driver, who will wave you on.",
    "Speaking the wrong language as your opener. Start with 'Moien' (Luxembourgish) or 'Bonjour' (French) rather than English or German. In shops and restaurants, French is the default service language.",
    "Underestimating the housing search timeline. Start looking at least 2-3 months before your move. Properties in good locations are snapped up within days of listing, and competition at viewings is fierce."
  ],

  emergency: [
    {
      number: '112',
      service: 'General Emergency (Ambulance, Fire)',
      description: 'Pan-European emergency number for medical emergencies, fire, and rescue. Operators speak French, German, Luxembourgish, and English.'
    },
    {
      number: '113',
      service: 'Police',
      description: 'Grand-Ducal Police emergency line for crimes, accidents, and urgent police assistance.'
    },
    {
      number: '8002 8080',
      service: 'SOS Detresse (Crisis Helpline)',
      description: 'Emotional support and crisis helpline available in French, German, and Luxembourgish.'
    }
  ],
  sources: [
    {
      name: 'Guichet.lu',
      category: 'Government Services',
      description: 'The comprehensive one-stop portal for all administrative procedures in Luxembourg, from residence permits to tax filing.',
      link: 'https://guichet.public.lu/en.html'
    },
    {
      name: 'Ministry of Foreign and European Affairs (MAEE)',
      category: 'Immigration',
      description: 'Handles visa applications, residence permits for non-EU nationals, and diplomatic affairs.',
      link: 'https://maee.gouvernement.lu/en.html'
    },
    {
      name: 'Just Arrived',
      category: 'Integration',
      description: 'Comprehensive guide for newcomers covering housing, banking, healthcare, education, and daily life in Luxembourg.',
      link: 'https://www.justarrived.lu/'
    },
    {
      name: 'Visit Luxembourg',
      category: 'Tourism & Culture',
      description: 'National tourist board with information on attractions, events, accommodation, and cultural activities.',
      link: 'https://www.visitluxembourg.com/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to Luxembourg, consult the Ministry of Foreign and European Affairs or a Luxembourg embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/luxembourg',
    mfaLink: 'https://maee.gouvernement.lu/en.html'
  },
  serviceDirectory: {
    title: "Service Directory - Luxembourg",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Luxembourg.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with residence permits, work authorizations, EU registrations, and cross-border employment matters.",
        providers: [
          { name: "Arendt & Medernach", link: "https://www.arendt.com" },
          { name: "Elvinger Hoss Prussen", link: "https://www.elvingerhoss.lu" },
          { name: "Bonn & Schmitt", link: "https://www.bonn-schmitt.lu" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies handling residential rentals and property purchases in Luxembourg's extremely competitive housing market.",
        providers: [
          { name: "AtHome.lu", link: "https://www.athome.lu" },
          { name: "Immobiliere Biewer & Spautz", link: "https://www.biewer-spautz.lu" },
          { name: "Engel & Volkers Luxembourg", link: "https://www.engelvoelkers.com/lu-en" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax and accounting experts covering Luxembourg income tax, social security, cross-border tax treaties, and corporate compliance.",
        providers: [
          { name: "PwC Luxembourg", link: "https://www.pwc.lu" },
          { name: "Deloitte Luxembourg", link: "https://www2.deloitte.com/lu" },
          { name: "KPMG Luxembourg", link: "https://home.kpmg/lu/en/home.html" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and regional relocation services for household goods, personal belongings, and corporate moves.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Luxembourg", link: "https://www.agsmovers.com" },
          { name: "Gosselin Group", link: "https://www.gosselingroup.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Language schools offering Luxembourgish, French, German, and English courses for newcomers and professionals.",
        providers: [
          { name: "INL - Institut National des Langues", link: "https://www.inll.lu" },
          { name: "Prolingua Language Centre", link: "https://www.prolingua.lu" },
          { name: "Berlitz Luxembourg", link: "https://www.berlitz.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major hospital groups and healthcare institutions providing medical services to residents and registered newcomers.",
        providers: [
          { name: "Centre Hospitalier de Luxembourg (CHL)", link: "https://www.chl.lu" },
          { name: "Hopitaux Robert Schuman", link: "https://www.hopitauxschuman.lu" },
          { name: "Centre Hospitalier Emile Mayrisch (CHEM)", link: "https://www.chem.lu" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and agencies connecting international talent with Luxembourg employers and EU institutions.",
        providers: [
          { name: "Jobs.lu", link: "https://www.jobs.lu" },
          { name: "Hays Luxembourg", link: "https://www.hays.lu" },
          { name: "Michael Page Luxembourg", link: "https://www.michaelpage.lu" }
        ]
      }
    ]
  }
};