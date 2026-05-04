export const sanMarino = {
  id: 'san-marino',
  slug: 'san-marino',
  name: 'San Marino',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Italian'],
  shortDescription: "The world's oldest surviving republic — an Italian-speaking microstate on Monte Titano, rich in tradition and heavily bureaucratic for newcomers.",
  heroImage: 'https://images.unsplash.com/photo-1510513260777-51d462dbaec9',
  flagAlt: 'Flag of San Marino',
  atAGlance: "The Repubblica di San Marino is a 61 km² sovereign enclave entirely surrounded by Italy, perched on the limestone ridge of Monte Titano between Emilia-Romagna and Marche. It claims to be the world's oldest surviving republic — tradition dates its founding to 301 AD, when the stonemason Saint Marinus established a Christian community on the mountain. The historic centre and Monte Titano are a UNESCO World Heritage Site, and the three fortified towers (Guaita, Cesta, Montale) are the national symbol. The republic is led by two Captains Regent (Capitani Reggenti) who serve jointly for six months, rotating on 1 April and 1 October. San Marino is NOT an EU member but has an EU customs union agreement and uses the euro under a monetary convention; it is not in Schengen, though there is no formal border with Italy. Population is roughly 33,000, of whom over 80% hold Sammarinese citizenship — one of the most closed citizenship regimes in Europe, with a 30-year continuous residence path for non-Sammarinese. The formal labour market is small, perhaps 20,000 jobs concentrated in tourism, banking, ceramics, and light manufacturing, with many roles filled by cross-border commuters from Rimini and surrounding Italian towns. Most foreign residents bring their own income and live astride the border: working or shopping in Italy, banking and registering vehicles in San Marino. Old bank-secrecy practices ended under OECD and EU pressure since 2009, bringing CRS and FATCA compliance. What remains is a quiet, extremely safe, traditional Catholic society where Italian fluency is essential, bureaucracy is paper-heavy, and reputations travel fast.",
  overview: {
    euStatus: 'Non-EU, Customs Union',
    stayLength: 'Schengen-free entry via Italy, no formal immigration control at the border',
    costOfLiving: 'High',
    primaryLanguages: 'Italian',
  },
  visas: [
    {
      name: 'Residenza Elettiva (Elective Residence)',
      targetAudience: 'Retirees and financially self-sufficient applicants',
      useCase: 'For foreigners with stable passive income (pensions, investments, rental income) who can support themselves without working in San Marino. Applicants must demonstrate sufficient means, comprehensive private health insurance, suitable accommodation in the Republic (owned or leased), a clean criminal record, and no intention to take up local employment. Applications are filed with the Ufficio di Stato Civile e Servizi Demografici and reviewed by the Dipartimento Affari Esteri and Polizia Civile. Approval is discretionary and subject to a limited annual quota.',
      duration: 'Issued initially for a fixed term (typically renewed annually or biennially), with path to longer permits over time',
      link: 'https://www.esteri.sm'
    },
    {
      name: 'Residenza Atipica (Atypical Residence)',
      targetAudience: 'Investors and applicants with special economic, scientific, or cultural value',
      useCase: 'A discretionary residence category for individuals who can contribute economically or culturally to San Marino — significant investors, business founders establishing a Sammarinese company, recognized scientists, artists, or senior professionals. Typically requires a substantial investment in a Sammarinese entity, real estate purchase, or a government-issued public bond, along with the standard financial, health insurance, accommodation, and criminal-record requirements. Each file is reviewed on its merits by the Congresso di Stato.',
      duration: 'Fixed-term permit tied to ongoing investment or activity; renewable on continued compliance',
      link: 'https://www.esteri.sm'
    },
  ],
  requirements: [
    {
      title: 'Permesso di Soggiorno Sammarinese (Residence Permit)',
      explanation: 'Issued by the Ufficio di Stato Civile e Servizi Demografici following approval of your residence category and registration with the Polizia Civile. Apply in person with a full dossier (passport, criminal record certificates, proof of accommodation, financial means, health insurance) and complete an interview. Residence is tied to effective presence in the Republic; extended absences can lead to revocation.',
      importance: 'The foundational document for everything else: opening a resident bank account, registering with ISS for healthcare, obtaining a Codice Tributario, registering a vehicle with Sammarinese plates, and qualifying time toward the 30-year residence requirement for citizenship. Without it, you remain a visitor regardless of how long you stay.',
      link: 'https://www.esteri.sm'
    },
    {
      title: 'Iscrizione ISS (Istituto per la Sicurezza Sociale)',
      explanation: "Registration with the Istituto per la Sicurezza Sociale, San Marino's combined social security and public healthcare body. Employees and self-employed residents pay contributions through ISS, which funds pensions, sickness benefits, maternity cover, and universal healthcare at the Ospedale di Stato and local district clinics. Non-working residents must arrange access via statutory options or hold qualifying private health insurance recognized by ISS.",
      importance: 'ISS enrolment assigns your healthcare number and grants access to the public system — GP registration, specialist referrals, prescriptions, and hospital care. Contributions and entitlements are separate from the Italian INPS/SSN system, so prior Italian coverage does not transfer.',
      link: 'https://www.iss.sm'
    },
    {
      title: 'Codice Tributario (Tax Code)',
      explanation: 'A Sammarinese tax code (analogous to the Italian codice fiscale but issued by the Ufficio Tributario) is required for most administrative acts: opening bank accounts, signing utility contracts, registering property or vehicles, filing tax returns, and receiving any local income. Residents are assigned one automatically upon registration.',
      importance: "Without a codice tributario you cannot be paid locally, invoice a Sammarinese client, or complete real-estate or significant financial transactions inside the Republic. It is the fiscal thread that stitches your residence permit to San Marino's tax and banking systems.",
      link: 'https://www.tax.sm'
    },
    {
      title: 'Sammarinese Bank Account',
      explanation: 'Residents are expected to hold a primary account at a Sammarinese bank — typically Banca di San Marino or Banca Agricola Commerciale (BAC). Opening requires the residence permit, codice tributario, passport, proof of address, and (since post-2009 OECD reforms) full AML/KYC documentation including source-of-funds evidence and CRS tax residency declaration. Onboarding can take several weeks to a few months for complex international profiles.',
      importance: 'A domestic account is necessary for salary deposits, ISS and tax payments, utility direct debits, and rent transfers. Card acceptance is broad but cash is still widely used for small transactions. Many residents also retain an Italian account at a nearby Rimini branch for cross-border shopping and family transfers.',
      link: 'https://www.bcsm.sm'
    }
  ],
  jobsAndIncome: {
    overview:
      "San Marino's formal labour market is small — roughly 20,000 jobs — and structurally dependent on cross-border workers (frontalieri) from Italy, who fill a significant share of manufacturing, retail, and hospitality roles. Main sectors are tourism, banking and finance, ceramics, light manufacturing (machinery, food, cosmetics, pharmaceuticals), construction, and public administration. Italian is the working language in almost every domestic context; English is useful in tourism and banking but rarely sufficient on its own.",
    whereToLook: [
      'Ufficio del Lavoro (Labour Office) — the government employment service, handles registered vacancies and work authorizations (www.lavoro.sm)',
      'San Marino Chamber of Commerce (Camera di Commercio della Repubblica di San Marino) — business directory and networking into local employers',
      'LinkedIn — limited but growing presence of Sammarinese banks, professional services, and manufacturers, often cross-listed with Rimini/Bologna roles',
      'Regional Italian job boards (Subito.it, InfoJobs, Indeed Italia) — many Sammarinese employers also post here given the cross-border labour pool',
      'Direct applications to major employers: Banca di San Marino, BAC, BSI, Titano ceramics, major hotels, and the Ospedale di Stato'
    ],
    realityChecks: [
      "Priority-of-hiring rules favor Sammarinese citizens first, then residents, then Italian frontalieri, and only then other foreigners. Employers must typically demonstrate that no local candidate is available before sponsoring a non-resident foreigner.",
      'Italian fluency — verbal and written — is effectively mandatory. CVs, interviews, contracts, and day-to-day work all happen in Italian. English-only professionals are typically limited to tourism, specialized international banking roles, or remote work for employers outside the Republic.',
      "Salary levels track Northern Italian norms rather than Swiss or Monegasque rates. The net-pay advantage versus Italy comes from lower personal income tax and social contributions, not from higher gross offers.",
      'Most foreign residents in San Marino do not work for Sammarinese employers. They bring their own income — remote work, foreign pensions, investment income, or businesses based abroad — and use the country as a high-quality residential base.'
    ]
  },
  salaryReality: {
    overview:
      "San Marino levies a progressive personal income tax (Imposta Generale sui Redditi, IGR) with a top marginal rate around 35%, lower than Italy's top rate of 43% plus regional surcharges. ISS social contributions are substantial but lower than Italian INPS totals, and tax treaties avoid double taxation with Italy and many other jurisdictions. There is no wealth tax. Gross salaries mirror Emilia-Romagna and Marche levels; the net-pay uplift for residents at middle and upper income bands is the main fiscal draw.",
    realityChecks: [
      "A gross salary of EUR 35,000-45,000 per year (a typical mid-career level) yields a net that is several thousand euros higher than the equivalent role in Italy, primarily due to IGR's lower top bracket and reduced social contributions — useful, but not transformational.",
      'Cross-border tax complexity is real. Italian citizens resident in San Marino who retain Italian-source income (rentals, Italian pension, Italian employment) are still taxable in Italy on that income under the Italy-San Marino double tax treaty; only your genuine change of tax residence shifts the worldwide base.',
      'Employer social contributions (ISS side) add meaningfully to payroll cost — the commonly cited range is 25-30% of gross on the employer plus a smaller employee slice, funding pensions, healthcare, and family benefits.',
      "Housing costs are notably lower than Monaco or Zurich but roughly in line with Rimini and Bologna. Rental yields on a two-bedroom apartment typically run EUR 700-1,200/month; sale prices for apartments inside the Republic range EUR 2,000-4,000 per square metre, with historic-centre properties commanding premiums."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      'ISS healthcare and pension contributions as a share of gross — often not visible in salary offers but material to the total employment cost and to your future pension entitlement',
      'Cross-border commuting costs and time if you take work in Rimini, Riccione, or further afield in Italy — fuel, tolls, and parking can add EUR 200-400/month',
      'Italian Irpef exposure on any retained Italian-source income (rental flats in Bologna, a consulting contract with a Milanese firm), which survives your move and requires Italian tax filings',
      'Private health insurance top-ups for specialist care in Italy or abroad, and for dental and optical work not fully covered by ISS'
    ]
  },
  housingSystem: {
    overview:
      "San Marino's housing market is very small and tight. The nine castelli have distinct characters: Città di San Marino (the historic capital on the summit of Monte Titano, with limited modern housing stock and heritage constraints), Borgo Maggiore (the market town below the capital, connected by the Funivia cable car), Serravalle (the largest, flat, commercial, closest to the Italian border), Dogana (the border gateway suburb of Serravalle), and the smaller Domagnano, Fiorentino, Acquaviva, Chiesanuova, Faetano, and Montegiardino. Buying property is restricted for non-citizens: foreigners generally need government authorization (and often Sammarinese residence) to purchase, with limits on the number and type of properties held.",
    expectations:
      "Expect a thin rental market — listings rarely number in the hundreds, and new stock appears slowly. Typical rents run EUR 600-900/month for a one-bedroom, EUR 800-1,300/month for a two-bedroom, and EUR 1,500+/month for a detached house with parking. Security deposits are usually 2-3 months' rent. Many residents prefer to rent or buy in border Italian towns (Rimini, Coriano, Cattolica) where supply is broader and prices competitive, then commute up the mountain. Local agencies (Titano Immobiliare, Immobiliare Sammarinese) dominate listings. Winter driving on Monte Titano's switchbacks demands a suitable car and winter tyres."
  },
  healthcareReality:
    "San Marino operates a universal, ISS-administered public healthcare system funded through social contributions and general taxation. Residents register with a GP (medico di base) and access free or nominally-priced care at the Ospedale di Stato in Cailungo, district clinics across the castelli, and ISS-authorized specialists. The Ospedale di Stato handles general medicine, surgery, obstetrics, paediatrics, and emergency care, but highly specialized procedures — advanced oncology, neurosurgery, transplant surgery, rare-disease care — are routinely referred to Italian partner hospitals under a formal bilateral convention. Ospedale Infermi di Rimini and the Policlinico Sant'Orsola-Malpighi in Bologna are the most common referral centres, with ISS covering agreed costs for residents. Private consultations typically run EUR 80-200. Pharmacies follow the Italian model and accept both Sammarinese and Italian prescriptions. Dental and orthodontic care is largely private; many residents cross the border to Rimini for more competitive pricing. Many long-term foreign residents keep supplementary international insurance for procedures in third countries or for faster access than the public queue allows.",
  digitalLife: {
    overview:
      "San Marino's digital infrastructure is solid: fibre broadband and 4G/5G coverage are widespread through TIM San Marino (the dominant operator) and the smaller Prima San Marino. E-government has advanced — residents can handle tax filings, ISS interactions, and basic civic requests through the national portal pa.sm — but many procedures still require in-person visits to ministries in the historic centre. Cash remains common for small daily transactions even though POS card acceptance is near-universal in hotels, supermarkets, and petrol stations. The euro is the only currency in daily use.",
    essentials: [
      'TIM San Marino — the main mobile and fibre operator; contracts require a codice tributario and residence permit for the full domestic tariffs',
      'Banca di San Marino, BAC (Banca Agricola Commerciale), or BSI (Banca Sammarinese di Investimento) — principal domestic banks for resident accounts, mortgages, and investment services',
      'pa.sm — the Sammarinese public administration portal for tax, civil status, and other e-government interactions',
      'ISS online services — for healthcare appointments, medical records, and contribution statements through iss.sm',
      'SmaC Card — the national multi-purpose card (transport, parking, loyalty, and some civic services) issued to residents on request'
    ],
    whatSurprisesNewcomers: [
      "Cash is still expected in many traditional shops, cafes, and local markets. Card-only living is feasible but occasionally awkward — keep a EUR 20-50 float in your wallet.",
      'Sammarinese vehicle plates (white on black, with the coat of arms) are distinctive across Europe and attract attention and sometimes extra scrutiny at distant customs checks. Registering a car in San Marino is attractive for tax and insurance reasons but creates friction when spending long periods in Italy.',
      'Internet and mobile contracts from TIM San Marino are separate from TIM Italia. Your Sammarinese SIM works in Italy, but roaming arrangements and bundles differ; some Italian streaming services geo-locate you as outside Italy and may restrict access.',
      "The euro is the everyday currency, but the Republic is not an EU member. This creates odd edges — customs on goods imported from outside the EU, VAT differences (San Marino uses a domestic 'Imposta Monofase' rather than EU VAT), and occasional paperwork when shipping items between San Marino and non-EU countries."
    ]
  },
  culture: {
    text: "Sammarinese culture is fiercely independent and deeply Italianate, but distinct. Residents speak Italian, eat the same Romagnolo-inflected cuisine as neighbouring Emilia-Romagna (piadina, tagliatelle al ragù, Sangiovese wines), and follow Italian football with intensity — yet they are unmistakably not Italians, and the distinction matters. The mythic foundation by Saint Marinus in 301 AD, resistance to absorption during Italian unification, and the unique institution of the two Captains Regent are sources of genuine pride. Civic life is organized around medieval pageantry: the investiture of the Capitani Reggenti on 1 April and 1 October, the Palio delle Balestre (historic crossbow competitions) in late July, and Saint Marinus' Day on 3 September (the national holiday). Catholicism remains the cultural bedrock — the Basilica di San Marino and parish networks structure much of the social year. Daily life is quiet and neighbourly; reputations travel fast across a population of 33,000, and discretion about wealth and personal affairs is highly valued. Newcomers who learn Italian, attend the civic ceremonies, and join castello-level life integrate far more successfully than those who treat San Marino as a fiscal backdrop.",
    highlights: [
      'Civic ceremonies matter. The investiture of the Captains Regent on 1 April and 1 October is the national civic moment; attending, or at least understanding, these events is part of genuine integration.',
      "San Marino is not Italy — but is profoundly Italianate. Do not confuse Sammarinese and Italian institutions in conversation; the distinction is a matter of pride and history.",
      'Crossbow traditions are alive. The Balestrieri Sammarinesi are a serious federation, not a tourist act; the Palio delle Balestre and related competitions are attended and respected.',
      'Catholic observance remains a cultural baseline. Saint Marinus (3 September), Sant\'Agata (5 February), and the main Catholic feast days shape the civic calendar and many workplaces mark them.',
      "Discretion about finances is a deep cultural norm. The old bank-secrecy era has passed, but the social expectation of reserve about money, assets, and personal affairs has not."
    ]
  },
  transportationMobility:
    "San Marino has no railway. Day-to-day mobility relies on roads and a single cable car. The Bonelli Bus service operates regular coaches between Rimini railway station and Città di San Marino, journey time 45-55 minutes, with stops at several castelli. Within the Republic, the Azienda Autonoma di Stato per i Servizi Pubblici runs local bus lines, but service frequency is modest and coverage patchy outside the main corridor. A car is effectively essential for residents outside Serravalle or Dogana: roads twist steeply up Monte Titano and winter snow can close minor routes. The Funivia di San Marino is a short cable car linking Borgo Maggiore to the historic centre on the summit, running every 15 minutes — a practical commuter link. Vehicles can be registered with Sammarinese plates (an RSM sticker travels with them across Europe); fuel prices are slightly below Italian levels and motor-vehicle taxes are lower. Italian driving licences are fully recognized; third-country licences require an International Driving Permit or, after residence, conversion through the Sammarinese authorities.",
  internationalConnectivity:
    "San Marino has no airport. The closest gateway is Federico Fellini International Airport (RMI) in Rimini, 20-25 minutes by car, with a modest mix of charter and seasonal European flights. Bologna Guglielmo Marconi Airport (BLQ), roughly 90 minutes to two hours away by car or via train from Rimini, is the serious long-haul and network option — full European coverage and direct routes to the US Northeast, Middle East, and select Asian hubs through Ryanair, Lufthansa, Emirates, Qatar Airways, and ITA. Ancona Falconara Airport (AOI) to the south is the third option. The Italian rail network from Rimini connects quickly to Bologna (1 hour), Milan (2.5-3.5 hours), Florence (1.5-2 hours), and Rome (3-4 hours on Frecciarossa). Cross-border motoring is trivial — there is no passport check — and this combined with Rimini's port and rail connections makes life in San Marino practically well-connected despite the absence of a local airport.",
  travelExploration:
    "Inside the Republic, the UNESCO-listed historic centre on Monte Titano is the core attraction: the Three Towers (Guaita, Cesta, Montale) strung along the ridgeline offer dramatic views across Romagna to the Adriatic. The Palazzo Pubblico in Piazza della Libertà hosts civic life and the changing of the Guardia di Rocca; the Basilica di San Marino houses the relics of the founding saint. Beyond the Republic, the Italian Adriatic coast is 20-30 minutes away: Rimini (Roman arch, Tiberius' bridge, Fellini's cinema city), Riccione, and Cattolica for beaches; Ravenna (UNESCO mosaics) further north. Inland, Urbino's Renaissance palace, San Leo's fortress, and the hill towns of Montefeltro are within an hour. Bologna's historic centre and cuisine are 90 minutes; Florence, Venice, and Rome are all feasible weekend trips. The 'San Marino Grand Prix' on the Formula 1 calendar from 1981 to 2006 was actually hosted at the Autodromo Enzo e Dino Ferrari in Imola — a quirk of sporting naming worth knowing.",
  considerations: [
    "Not in the EU. San Marino is a non-EU microstate with a customs union and a monetary agreement, not a member. EU citizens do not receive automatic freedom-of-movement residence rights here; Sammarinese residence is a separate application subject to quotas and discretionary approval.",
    'Citizenship is extraordinarily hard. The standard naturalization path requires 30 years of continuous legal residence (shorter routes exist for spouses of citizens and people of Sammarinese descent, each with long statutory periods). Among the longest residence-to-citizenship paths in the world.',
    "Italian fluency is non-negotiable for daily life. Bureaucracy, healthcare, schooling, and contracts all happen in Italian. English-only living is possible only in narrow remote-work bubbles and leaves you dependent on bilingual intermediaries.",
    "The domestic job market is small and protected. Priority-of-hiring rules favor Sammarinese citizens, then residents, then Italian frontalieri. Arriving with an expectation of finding local employment quickly is unrealistic; arriving with your own income source is the normal path.",
    'Specialist healthcare requires Italy. The Ospedale di Stato handles general needs, but advanced oncology, complex cardiac, major neurosurgery, and rare-disease care are referred cross-border to Rimini, Bologna, or Ancona. Factor travel and supplementary insurance into any relocation involving complex medical needs.',
    'Tourism seasonality is real. In July and August the historic centre and Three Towers see heavy day-tripper traffic from Adriatic resorts; winter is extremely quiet, with limited restaurant options. If you intend to live in the capital, test both seasons before committing.',
    'Cross-border tax complexity is a permanent overhead for anyone retaining Italian ties. Rental property in Italy, freelance work for Italian clients, and Italian pensions all create Italian filing obligations alongside the Sammarinese ones. Engage a cross-border tax adviser before the move.'
  ],
  mistakes: [
    'Assuming San Marino sits inside the EU because it uses the euro and has no physical border with Italy. Customs, VAT, postal and e-commerce rules, and free-movement rights all differ, and misreading this leads to confusion on car imports and online shopping.',
    "Buying property before you have residence. Non-residents face significant restrictions — government authorization, limits on number of properties, and bank onboarding delays. The standard sequence is residence first, purchase second, with specialist legal advice throughout.",
    "Treating the 30-year citizenship path as a short-term plan. The current statutory framework is long, and the clock runs on continuous legal residence. Absences or changes in status can reset or interrupt qualifying periods.",
    "Relying on English at Sammarinese government offices. Most civil-servant interactions are Italian-only, and submissions must be in Italian or accompanied by sworn translations. Budget for language lessons from day one.",
    "Underestimating the mountain. Monte Titano's grades, weather, and winter conditions make certain apartments — especially in the historic centre — impractical for older residents, families with pushchairs, or low-clearance vehicles. Visit in February and August before committing.",
    "Using San Marino as a purely fiscal address. Effective-presence expectations apply; banks and social institutions assume genuine residence. Paper residence creates exposure to revocation, Italian tax claims, and loss of healthcare access."
  ],
  emergency: [
    {
      number: '113',
      service: 'Police (Gendarmeria and Polizia Civile)',
      description: "San Marino's principal emergency police line, coordinated between the Gendarmeria (public security and judicial police) and the Polizia Civile (civil policing and traffic). Operators speak Italian; basic English is usually available."
    },
    {
      number: '115',
      service: 'Fire and Rescue (Corpo dei Vigili del Fuoco)',
      description: "Fire service, mountain rescue, and technical rescue across the Republic. Also coordinates with Italian fire services for cross-border incidents."
    },
    {
      number: '118',
      service: 'Medical Emergencies',
      description: "Emergency medical dispatch, shared operationally with the Italian 118 system through regional coordination. Verify current operational details with ISS on arrival; 112 (the European universal emergency number) also routes correctly to local services."
    }
  ],
  sources: [
    {
      name: 'Dipartimento Affari Esteri della Repubblica di San Marino',
      category: 'Foreign Affairs & Residence',
      description: "The Ministry of Foreign Affairs, principal source for residence categories, bilateral agreements, and consular matters.",
      link: 'https://www.esteri.sm'
    },
    {
      name: 'Ufficio Tributario - Tax Office',
      category: 'Tax & Fiscal',
      description: 'The Sammarinese tax authority; guidance on the Imposta Generale sui Redditi (IGR), monophase tax, codice tributario issuance, and cross-border treaty matters.',
      link: 'https://www.tax.sm'
    },
    {
      name: 'Polizia Civile della Repubblica di San Marino',
      category: 'Policing & Residence Checks',
      description: 'Civil police, handling day-to-day policing, residence verification, vehicle registration, and many administrative controls relevant to residents.',
      link: 'https://www.polizia.sm'
    },
    {
      name: 'Istituto per la Sicurezza Sociale (ISS)',
      category: 'Social Security & Healthcare',
      description: 'Administers social insurance, pensions, family benefits, and the public healthcare system including the Ospedale di Stato.',
      link: 'https://www.iss.sm'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to San Marino, consult the Sammarinese Department of Foreign Affairs or a Sammarinese embassy or consulate abroad. The Republic maintains a small diplomatic network, with its larger missions in Rome, Brussels, Washington, and the UN offices in New York and Geneva.',
    directoryLink: 'https://www.embassypages.com/san-marino',
    mfaLink: 'https://www.esteri.sm'
  },
  serviceDirectory: {
    title: "Service Directory - San Marino",
    description: "Examples of service providers commonly used when relocating to San Marino. Because the Republic is small, many residents combine local Sammarinese firms with cross-border Italian providers in Rimini, Bologna, and Milan.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialist counsel on Sammarinese residence categories, business establishment, and cross-border fiscal structuring.",
        providers: [
          { name: "Studio Legale Gasperoni (San Marino)", link: "https://www.studiogasperoni.sm" },
          { name: "PwC TLS Italy (Bologna - cross-border advisory)", link: "https://www.pwc.com/it" },
          { name: "EY Italy (Bologna/Milan)", link: "https://www.ey.com/it_it" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Local Sammarinese agencies for Republic-side rentals and purchases, plus major Italian-side agencies for cross-border commuter housing.",
        providers: [
          { name: "Titano Immobiliare", link: "https://www.titanoimmobiliare.sm" },
          { name: "Immobiliare Sammarinese", link: "https://www.immobiliaresanmarino.com" },
          { name: "Gabetti (Rimini, cross-border rentals)", link: "https://www.gabetti.it" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Cross-border tax specialists handling IGR, Italian Irpef, and international treaty issues common for San Marino residents.",
        providers: [
          { name: "Deloitte Italy (Bologna)", link: "https://www2.deloitte.com/it" },
          { name: "KPMG Italy (Bologna)", link: "https://kpmg.com/it" },
          { name: "PwC TLS (Bologna)", link: "https://www.pwc.com/it" }
        ]
      },
      {
        name: "Banks & Wealth Managers",
        description: "Principal Sammarinese banks for resident accounts, mortgages, and investment services, plus cross-border private-banking options.",
        providers: [
          { name: "Banca di San Marino", link: "https://www.bsm.sm" },
          { name: "Banca Agricola Commerciale (BAC)", link: "https://www.bac.sm" },
          { name: "Banca Sammarinese di Investimento (BSI)", link: "https://www.bsi.sm" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and regional relocation firms experienced with Sammarinese customs and Monte Titano's mountainous access.",
        providers: [
          { name: "Crown Relocations (Italy network)", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Italy", link: "https://www.agsmovers.com" },
          { name: "Bolliger International Movers (Italy)", link: "https://www.bolliger.ch" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Principal public and private healthcare providers, including Italian referral hospitals used through the bilateral convention.",
        providers: [
          { name: "Ospedale di Stato (ISS)", link: "https://www.iss.sm" },
          { name: "Ospedale Infermi di Rimini (AUSL Romagna)", link: "https://www.auslromagna.it" },
          { name: "Policlinico Sant'Orsola-Malpighi (Bologna)", link: "https://www.aosp.bo.it" }
        ]
      }
    ]
  }
};
