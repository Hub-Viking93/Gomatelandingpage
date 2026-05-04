export const germany = {
  id: 'germany',
  slug: 'germany',
  name: 'Germany',
  region: 'Europe',
  complexity: 'High',
  languages: ['German'],
  shortDescription: 'Economic powerhouse with a rich history and strict bureaucracy.',
  heroImage: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc',
  flagAlt: 'Flag of Germany',
  atAGlance: "Germany is a decentralized federal republic of 16 states (Bundeslaender) where rules, processes, and paperwork form the backbone of daily life. It offers one of Europe's highest standards of living, excellent public infrastructure, and world-class worker protections — but at the cost of bureaucratic complexity that can overwhelm newcomers. Every aspect of life requires registration, documentation, and patience: from the mandatory Anmeldung (address registration) within 14 days of arrival to the cascading dependency chain where each document unlocks the next (address registration enables tax ID, which enables bank account, which enables salary payment). The culture values privacy, directness (often perceived as bluntness by outsiders), and punctuality. Sundays are sacred rest days — nearly all shops are closed, and making noise (drilling, mowing, vacuuming) is prohibited by law and actively enforced by neighbors. Berlin is multicultural, chaotic, and affordable by German standards; Munich is affluent, traditional, and expensive; Hamburg and Frankfurt serve as major commercial hubs. The rental market in major cities is brutally competitive, with apartment viewings drawing 50-100 applicants for a single flat. To thrive in Germany, you must embrace the system rather than fight it: plan meticulously, carry paper copies of everything, and learn at least basic German, because outside of Berlin's international bubble, daily life runs in German.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'High',
    primaryLanguages: 'German (English varies by region)',
  },
  visas: [
    {
      name: 'Job Seeker Visa (Aufenthaltserlaubnis zur Arbeitsplatzsuche)',
      targetAudience: 'Qualified Professionals',
      useCase: 'Allows non-EU nationals to enter Germany for six months to search for a qualified job matching their degree or vocational training. Requires proof of a recognized qualification, sufficient funds for the stay (approximately EUR 1,027/month in a blocked account), and health insurance coverage. You cannot work during the search period.',
      duration: '6 months (non-renewable)',
      link: 'https://www.make-it-in-germany.com/en/visa-residence/types/jobseekers'
    },
    {
      name: 'EU Blue Card (Blaue Karte EU)',
      targetAudience: 'University Graduates with Job Offer',
      useCase: 'The primary route for non-EU skilled workers. Requires a recognized university degree and a job offer meeting a minimum annual gross salary threshold (EUR 45,300 for shortage occupations like IT, engineering, and medicine; EUR 56,400 for others as of 2024). Grants a path to permanent settlement after 21 months with B1 German or 33 months without.',
      duration: 'Up to 4 years (or duration of employment contract + 3 months)',
      link: 'https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card'
    },
    {
      name: 'Freelance Visa (Freiberufler / Selbstaendige Taetigkeit)',
      targetAudience: 'Self-employed Professionals',
      useCase: 'For liberal professions (Freiberufler: artists, writers, translators, consultants, IT freelancers, teachers, doctors) and self-employed business owners. Requires demonstrating economic interest to Germany (clients, contracts, business plan) and sufficient income. Application is made at the local Auslaenderbehörde. Berlin is notably more liberal in granting these than other cities.',
      duration: 'Up to 3 years (renewable)',
      link: 'https://service.berlin.de/dienstleistung/328332/en/'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists, Short-term Business Visitors',
      useCase: 'For tourism, family visits, conferences, or short business trips within the Schengen area. Does not permit employment. Applied for at the German embassy or consulate in your country of residence.',
      duration: 'Up to 90 days within a 180-day period',
      link: 'https://www.auswaertiges-amt.de/en/visa-service'
    },
    {
      name: 'Opportunity Card (Chancenkarte)',
      targetAudience: 'Skilled Workers without a Job Offer',
      useCase: 'Introduced in June 2024 under the reformed Skilled Immigration Act. A points-based system awarding credit for qualifications, German language skills, work experience, age, and connection to Germany. Allows entry to seek employment, attend interviews, or take trial employment for up to 12 months. Requires proof of funds and basic German (A1) or English (B2).',
      duration: 'Up to 12 months',
      link: 'https://www.make-it-in-germany.com/en/visa-residence/types/chance-card'
    }
  ],
  requirements: [
    {
      title: 'Anmeldung (Address Registration)',
      explanation: 'You must register your address at the local Buergeramt (Citizens Office) within 14 days of moving into your apartment. You will receive a Meldebescheinigung (registration confirmation), a single-page document that becomes the most important piece of paper in your German life.',
      importance: 'Without the Anmeldung, you cannot open a bank account, receive your Steuer-ID (tax identification number), sign a mobile phone contract, register for health insurance, or apply for a residence permit. The biggest challenge is that the Buergeramt requires a Wohnungsgeberbestaetigung (landlord confirmation form), which means you need a landlord willing to provide one — and many temporary housing arrangements (sublets, hotels, Airbnbs) will not. This single dependency creates a bottleneck that can delay your entire setup by weeks.',
      link: 'https://service.berlin.de/dienstleistung/120686/'
    },
    {
      title: 'Residence Permit (Aufenthaltstitel)',
      explanation: 'Non-EU citizens must apply for a residence permit at the local Auslaenderbehörde (Foreigners Authority). The type depends on your visa category: Blue Card, employment permit, freelance permit, or family reunification.',
      importance: 'This is your legal right to live and work in Germany long-term. Processing times at the Auslaenderbehörde vary wildly by city — Berlin is notoriously backlogged with wait times of three to six months for appointments. During this period, you may receive a Fiktionsbescheinigung (fictional certificate) that temporarily extends your right to stay. Carry this document at all times alongside your passport.',
      link: 'https://www.make-it-in-germany.com/en/visa-residence'
    },
    {
      title: 'Health Insurance (Krankenversicherung)',
      explanation: 'Health insurance is mandatory for every person residing in Germany. The system is split between Gesetzliche Krankenversicherung (GKV, statutory/public) and Private Krankenversicherung (PKV, private). Employees earning below EUR 69,300/year (2024 threshold) must use public insurance. Above this threshold, you can opt for private.',
      importance: 'You cannot receive your residence permit without proof of health insurance. Public insurance costs approximately 14.6% of gross salary (split with employer) plus a supplementary contribution of 1-2%. Private insurance can be cheaper when young and healthy but becomes very expensive with age, and switching back to public after age 55 is nearly impossible. This decision has lifelong consequences — choose carefully and get independent advice.',
      link: 'https://www.bundesgesundheitsministerium.de/en/health-insurance.html'
    },
    {
      title: 'SCHUFA (Credit Report)',
      explanation: 'SCHUFA Holding AG is Germany\'s dominant private credit bureau. Your SCHUFA score tracks debt, payment history, and financial reliability. A "SCHUFA-Auskunft" (SCHUFA report) is requested by landlords, banks, mobile providers, and sometimes employers.',
      importance: 'As a newcomer, you have no SCHUFA record, which landlords interpret as risky — they would rather rent to someone with a proven clean record than someone with no record at all. You are legally entitled to one free SCHUFA report per year (Datenkopie nach Art. 15 DS-GVO). To build your score, open a German bank account, pay all bills on time, and avoid opening too many accounts simultaneously. Some newcomers use services like bonify or SCHUFA\'s own paid products to monitor their score.',
      link: 'https://www.schufa.de/en/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Germany has Europe's largest economy with particular strength in automotive (BMW, Volkswagen, Mercedes-Benz), industrial manufacturing, chemicals (BASF), engineering, IT, and the Mittelstand (mid-sized companies that form the economic backbone). The labor market is formal and credential-driven: degrees, certificates, and formal qualifications carry significant weight, sometimes more than practical experience.",
    whereToLook: [
      "LinkedIn for international and corporate roles, especially in tech and consulting",
      "StepStone and Indeed Germany for the broadest range of German-market positions",
      "XING — Germany's professional network, particularly important outside Berlin's international bubble",
      "Bundesagentur fuer Arbeit (Federal Employment Agency) job portal for regulated and public-sector roles",
      "Company career pages directly, especially for DAX-listed corporations and Mittelstand companies"
    ],
    realityChecks: [
      "German language is required for the vast majority of roles outside of international tech companies and startups. Even in English-speaking teams, company-wide communication, HR processes, and social interactions default to German.",
      "Formal qualifications (degrees, Ausbildung certificates) carry immense weight. A 'self-taught developer with 10 years of experience' may be valued less than a recent graduate with a formal CS degree from a German university.",
      "Hiring processes are slow and structured, often involving multiple rounds over four to eight weeks. Spontaneous 'Can you start Monday?' offers are rare outside startups.",
      "The Probezeit (probation period) is standard for the first six months. During this time, either party can terminate with two weeks' notice. After probation, German labor law makes termination very difficult for employers."
    ]
  },
  salaryReality: {
    overview:
      "German salaries are stable and predictable, with strong employment protections and generous benefits. However, the gap between gross and net salary is one of the largest in Europe due to high income tax (progressive, up to 45%) and mandatory social contributions (health insurance, pension, unemployment insurance, long-term care insurance) that together consume roughly 40% of gross salary for a median earner.",
    realityChecks: [
      "A gross salary of EUR 60,000 yields approximately EUR 36,000-38,000 net depending on tax class (Steuerklasse) and state. Use brutto-netto-rechner.info to calculate your exact take-home before accepting an offer.",
      "Tax class (Steuerklasse) dramatically affects monthly net pay. Single people are Class I; married couples can optimize by choosing III/V or IV/IV combinations. Changing classes after marriage can increase one partner's monthly net by EUR 300-500.",
      "Collective bargaining agreements (Tarifvertraege) set salary bands in many sectors (metalworking, public service, chemicals). Employers bound by these agreements cannot easily deviate from the agreed pay scales.",
      "The 13th salary (Weihnachtsgeld / Christmas bonus) is common but not legally guaranteed. Many collective agreements and large employers include it, effectively adding 4-8% to your annual compensation."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Employee social contributions: approximately 20% of gross salary goes to pension (9.3%), health insurance (7.3% + supplement), unemployment (1.3%), and long-term care insurance (1.7-2.3%)",
      "Church tax (Kirchensteuer): 8-9% of your income tax if you are registered as Catholic or Protestant. Deregister at the Standesamt if you do not wish to pay, but be aware this formally exits you from the church.",
      "Housing costs in major cities: average rent for a new lease in Munich exceeds EUR 20/sqm; Berlin has risen to EUR 15-18/sqm for new contracts. Existing tenants with old contracts (Bestandsmiete) pay far less, creating a two-tier market.",
      "Rundfunkbeitrag (broadcasting fee): EUR 18.36/month per household, mandatory regardless of whether you own a TV, radio, or consume any public media content"
    ]
  },
  housingSystem: {
    overview:
      "Germany is a nation of renters — over 50% of the population rents, and long-term renting carries no social stigma. However, the rental market in major cities is severely undersupplied. In Berlin, Munich, Hamburg, and Frankfurt, apartment viewings attract 30-100 applicants per listing. Popular newcomer neighborhoods include Kreuzberg, Neukoelln, and Prenzlauer Berg in Berlin; Schwabing and Maxvorstadt in Munich; Eimsbuettel and Ottensen in Hamburg; and Nordend and Bornheim in Frankfurt. Rents are quoted as 'Kaltmiete' (cold rent, excluding utilities) and 'Warmmiete' (warm rent, including heating and building costs but usually not electricity or internet).",
    expectations:
      "Expect to provide a SCHUFA report, proof of income (last three payslips), a copy of your ID/passport, a Mietschuldenfreiheitsbestaetigung (previous landlord's confirmation of no rent debt), and sometimes a personal cover letter. Deposits are capped at three months' Kaltmiete by law and must be held in a separate escrow account. Most German apartments are rented unfurnished — and 'unfurnished' truly means empty: no kitchen (no cabinets, no sink, no appliances), no light fixtures, and bare walls. You are expected to install your own kitchen, which can cost EUR 3,000-8,000 and is taken with you when you move. Platforms like ImmobilienScout24, WG-Gesucht (for shared flats), and Immowelt are the main listing sites."
  },
  healthcareReality:
    "Germany's healthcare system is among the best in the world, with short distances to care and a high density of specialists. Public insurance (GKV) covers doctor visits, hospital stays, prescription medications (with small co-pays of EUR 5-10), dental basics, mental health treatment, and preventive screenings. You choose a Hausarzt (general practitioner/family doctor) as your first point of contact, who provides referrals to specialists (Fachärzte). Wait times for specialist appointments can be long — three to six months for a dermatologist or therapist is common, though the Terminservicestelle (appointment service, reachable at 116 117) can help. Major hospitals include Charité Universitaetsmedizin Berlin (one of Europe's largest), Universitaetsklinikum Heidelberg, Klinikum Rechts der Isar in Munich, and Universitaetsklinikum Hamburg-Eppendorf. Private insurance holders generally get faster appointments and access to chief physicians. Pharmacies (Apotheken) are the only legal point of sale for most medications, including many that would be over-the-counter in other countries. There is always a Notdienst-Apotheke (emergency pharmacy) open overnight and on weekends — check aponet.de for the nearest one.",
  digitalLife: {
    overview:
      "Germany's digital infrastructure is a paradox: it is Europe's largest economy yet famously lags behind in digitalization. Many administrative processes still require paper forms, physical signatures, and in-person appointments. Fax machines remain in active use in medical practices and government offices. Internet speeds, while improving with fiber rollout, are inconsistent, and mobile data coverage has notable gaps in rural areas.",
    essentials: [
      "Steuer-ID (Tax Identification Number) — automatically mailed to your registered address within two to four weeks of Anmeldung. Keep this number for life; it is needed for employment, banking, and tax filing.",
      "German bank account with an IBAN — required for salary, rent, utilities, and the Rundfunkbeitrag. N26, DKB, and ING are popular digital-first options; traditional banks like Sparkasse or Commerzbank offer broader ATM networks.",
      "ELSTER (Elektronische Steuererklaerung) — the tax authority's online portal for filing your annual tax return (Steuererklaerung). Filing is mandatory if you have multiple income sources or are self-employed.",
      "Corona-Warn-App successor / ePA (elektronische Patientenakte) — Germany is slowly rolling out a digital patient file, but adoption remains low. Most health records are still paper-based."
    ],
    whatSurprisesNewcomers: [
      "Physical mail (Briefpost) is the official communication channel for government, insurance companies, landlords, and courts. Do not ignore any letter, even if it looks like junk — German authorities send legally binding notices by post.",
      "Buergeramt and Auslaenderbehörde appointments must often be booked weeks or months in advance. In Berlin, availability is so scarce that people use bots and browser refresh scripts to snag open slots.",
      "Many restaurants, bakeries, and small shops are cash-only. While card acceptance has improved post-COVID, always carry EUR 50-100 in cash. EC-Karte (debit card with Girocard function) is accepted far more widely than credit cards.",
      "PIN-based EC-Karte payments are the German standard. American-style credit card tap-to-pay works at chains and supermarkets but fails frequently at independent shops and doctors' offices."
    ]
  },
  culture: {
    text: "German culture is low-context and direct. People say what they mean, and 'How are you?' is a genuine question — answering with a detailed status update is perfectly normal. Privacy is guarded fiercely: photographing strangers, asking about salary, or inquiring about someone's religion or voting preference are social transgressions. The concept of 'Ordnung muss sein' (there must be order) is a lived philosophy: rules exist to keep society functioning, and following them is a civic duty, not optional. Sundays are for rest (Sonntagsruhe) — not just shops, but also construction, lawn mowing, and even running a washing machine in some apartment buildings. 'Feierabend' (end of workday) is sacred: after hours, work emails are ignored and personal time is zealously protected. Social life often revolves around Vereine (clubs) — sports clubs, choirs, gardening associations — which serve as the primary entry point to German social circles.",
    highlights: [
      "Directness: Honest, unvarnished feedback is considered helpful, not rude. If a German colleague says your presentation needs improvement, they are trying to help you, not insult you.",
      "Privacy: Many Germans blur their homes on Google Street View. Photographing someone without permission can lead to legal complaints. Asking 'What do you do for a living?' too early is considered invasive.",
      "Lueften: Opening all windows for five to ten minutes to let fresh air circulate (Stosslüften) is a national obsession, practiced even in winter. Leaving windows permanently tilted (Kippstellung) is considered wrong and wasteful.",
      "Titles and Formality: Use 'Herr' or 'Frau' plus last name until explicitly invited to use first names (the 'Du' offer). In professional settings, this can take months. Academic titles (Doktor, Professor) are used in everyday address.",
      "Recycling: Germany has one of the world's most complex waste separation systems. Paper, organic waste, packaging (yellow bin/bag), glass (separated by color), residual waste, and electronics each have their own stream. Getting it wrong will earn neighbor complaints and potentially a fine from the Hausverwaltung."
    ]
  },
  transportationMobility:
    "Germany's public transport is extensive and generally reliable. Deutsche Bahn (DB) operates the national rail network including ICE high-speed trains (up to 300 km/h) connecting major cities — Berlin to Munich in about four hours, Frankfurt to Cologne in one hour. Regional trains (RE/RB) and S-Bahn suburban rail serve commuter corridors. Major cities have integrated networks of U-Bahn (metro), S-Bahn, trams, and buses. The Deutschlandticket (EUR 49/month as of 2024) provides unlimited travel on all local and regional public transport nationwide — one of the best value transit passes in Europe. Driving is common, especially in rural areas and southern Germany. The Autobahn famously has sections without speed limits, though these are increasingly restricted. Obtaining a German driving license requires converting your foreign license (straightforward for EU/EEA citizens; complex for others, requiring a driving school course costing EUR 2,000-3,000) or passing both a theory and practical exam in German.",
  internationalConnectivity:
    "Frankfurt Airport (FRA) is Europe's fourth-busiest hub and Lufthansa's primary base, with direct flights to over 300 destinations worldwide. Munich Airport (MUC) is a major secondary hub, particularly strong on European and Asian routes. Berlin Brandenburg Airport (BER), which opened in 2020 after years of delays, handles the capital's traffic with growing intercontinental service. Dusseldorf (DUS), Hamburg (HAM), and Cologne/Bonn (CGN) serve as regional gateways. Germany's central location in Europe makes it a rail crossroads: direct trains run to Amsterdam (6 hours from Frankfurt), Paris (4 hours via TGV from Stuttgart), Vienna (4 hours from Munich), and Zurich (4 hours from Stuttgart). Budget carriers like Eurowings, Ryanair, and easyJet operate extensive European networks from German airports.",
  travelExploration:
    "Germany offers extraordinary internal diversity: the medieval old towns of Heidelberg, Rothenburg ob der Tauber, and Bamberg; the Bavarian Alps and Zugspitze (Germany's highest peak); the Rhine Valley wine region with its castle-lined riverbanks; the Baltic Sea coast and ruegen's white chalk cliffs; the Black Forest with its hiking trails and cuckoo clock workshops; and Berlin's world-class museums (Museum Island, Pergamon Museum) and Cold War history sites (East Side Gallery, Checkpoint Charlie). The Romantic Road, a 350-kilometer scenic route from Wuerzburg to Fuessen, passes through medieval towns and ends at Neuschwanstein Castle. Germany's central European location makes weekend trips to Prague (4.5 hours from Berlin), Amsterdam (4 hours from Cologne), Copenhagen (overnight train from Hamburg), and the Austrian Alps (2 hours from Munich) effortless.",
  considerations: [
    "Cash Dependence (Bargeld lacht): Despite being a technological powerhouse, Germany remains significantly more cash-reliant than its European neighbors. Many restaurants, bakeries, doctors' offices, and kiosks do not accept cards. ATM withdrawals from your Girokonto (current account) are free at your bank's network but can cost EUR 3-5 at other ATMs. Always carry at least EUR 50 in cash.",
    "Pfand System (Bottle Deposit): Plastic bottles, cans, and some glass bottles carry a mandatory deposit (EUR 0.08-0.25). Return them to reverse vending machines (Pfandautomat) in supermarkets for a receipt. Do not throw them in the trash — leaving bottles next to public trash cans is also a common practice, as bottle collectors (Pfandsammler) will pick them up.",
    "Sonntagsruhe (Sunday Quiet): Shops are closed on Sundays and public holidays. Drilling, mowing, vacuuming, or making any significant noise on Sundays is prohibited by the Bundeslaender-specific Laermschutzgesetze (noise protection laws). Neighbors will issue formal complaints to the Hausverwaltung or call the Ordnungsamt (public order office). Plan your grocery shopping for Saturday.",
    "Rundfunkbeitrag (Broadcasting Fee): Every household must pay EUR 18.36/month for public broadcasting (ARD, ZDF, Deutschlandfunk), regardless of whether you own a TV, radio, or ever consume the content. This is not optional. Non-payment results in escalating reminder fees, court orders, and eventually enforcement by the Gerichtsvollzieher (bailiff). Register proactively at rundfunkbeitrag.de.",
    "GEZ Letters and Buerokratie Overload: Within weeks of your Anmeldung, expect a flood of official-looking mail: Rundfunkbeitrag registration, SCHUFA offers, insurance solicitations, tax ID notification, and municipal waste fee invoices. Open everything. Ignoring German official mail is the single fastest way to accumulate fees, penalties, and administrative problems."
  ],
  mistakes: [
    "Jaywalking at a red traffic light (Rotgaenger). Crossing on red — even at an empty intersection at 3 AM — is socially unacceptable and can result in a EUR 5-10 fine. Parents will verbally confront you for setting a bad example for children. Pedestrian signals are obeyed religiously.",
    "Not separating trash correctly. Germany's recycling system is complex: paper (blue bin), organic waste (brown bin), packaging with the Gruener Punkt (yellow bin/bag), glass sorted by color at public containers, residual waste (black/gray bin), and electronics at designated collection points. Doing it wrong earns complaints, fines from the Hausverwaltung, and genuine social disapproval.",
    "Being late. Punctuality is not a preference; it is a moral value. Arriving five minutes late to a business meeting requires an apology. Arriving 15 minutes late without advance notice is a serious affront. Set your watch five minutes early.",
    "Making Nazi references or jokes. Displaying Nazi symbols, performing the Hitler salute, or making Holocaust jokes is a criminal offense under Section 86a of the German Criminal Code, punishable by up to three years in prison. This applies to foreigners as well. Germany takes its historical responsibility with absolute seriousness.",
    "Assuming Berlin represents all of Germany. Berlin is an anomaly: cheaper, more international, more chaotic, and more tolerant of rule-bending than any other German city. Munich, Hamburg, Frankfurt, Stuttgart, and the rest of the country are more conservative, more German-speaking, and more adherent to traditional social expectations. What works in Neukoelln will not work in Schwabing."
  ],
  emergency: [
    {
      number: '112',
      service: 'Fire & Ambulance (Feuerwehr & Rettungsdienst)',
      description: 'Pan-European emergency number for medical emergencies, fires, and rescue. Works without a SIM card and from any phone. Operators speak German; English is usually available but not guaranteed outside major cities.'
    },
    {
      number: '110',
      service: 'Police (Polizei)',
      description: 'For criminal acts in progress, traffic accidents with injuries, and immediate threats to safety. Non-emergency police matters should be reported at your local Polizeidienststelle (police station).'
    },
    {
      number: '116 117',
      service: 'Medical On-Call Service (Aerztlicher Bereitschaftsdienst)',
      description: 'For urgent but non-life-threatening medical issues outside of regular office hours (evenings, weekends, holidays). They can dispatch a doctor to your home or direct you to the nearest Bereitschaftspraxis (on-call practice). Call before going to an emergency room for non-critical issues.'
    }
  ],
  sources: [
    {
      name: 'Make it in Germany',
      category: 'Official Immigration Portal',
      description: 'The German federal government\'s comprehensive portal for skilled workers, covering visa types, job search, recognition of qualifications, and practical life guidance.',
      link: 'https://www.make-it-in-germany.com/en/'
    },
    {
      name: 'BAMF (Bundesamt fuer Migration und Fluechtlinge)',
      category: 'Migration & Integration',
      description: 'Federal Office for Migration and Refugees. Administers integration courses, asylum procedures, and the recognition of foreign qualifications.',
      link: 'https://www.bamf.de/EN/Startseite/startseite_node.html'
    },
    {
      name: 'Auswaertiges Amt (Federal Foreign Office)',
      category: 'Visas & Consular',
      description: 'Official visa regulations, embassy directory, and travel advisories. The authoritative source for visa requirements by nationality.',
      link: 'https://www.auswaertiges-amt.de/en/visa-service'
    },
    {
      name: 'Bundesagentur fuer Arbeit',
      category: 'Employment',
      description: 'Federal Employment Agency providing job listings, career counseling, unemployment benefits administration, and labor market data.',
      link: 'https://www.arbeitsagentur.de/en'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa and residency matters, and official guidance related to Germany, consult the German Federal Foreign Office (Auswaertiges Amt) or a German embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/germany',
    mfaLink: 'https://www.auswaertiges-amt.de/en'
  },
  serviceDirectory: {
    title: "Service Directory - Germany",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Germany.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for visa applications, Blue Card processing, residence permits, freelance visa support, and employer immigration compliance.",
        providers: [
          { name: "Fragomen Germany", link: "https://www.fragomen.com" },
          { name: "Schlun & Elseven Rechtsanwaelte", link: "https://se-legal.de/en/" },
          { name: "CMS Germany", link: "https://cms.law/en/deu" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Platforms and agencies for apartment rentals, shared flats (WGs), and property purchases in German cities.",
        providers: [
          { name: "ImmobilienScout24", link: "https://www.immobilienscout24.de" },
          { name: "WG-Gesucht (Shared Flats)", link: "https://www.wg-gesucht.de" },
          { name: "Engel & Voelkers Germany", link: "https://www.engelvoelkers.com/de" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Steuerberater (tax advisors) and firms helping with German tax returns, cross-border income, freelancer tax obligations, and employment tax optimization.",
        providers: [
          { name: "PwC Germany", link: "https://www.pwc.de" },
          { name: "EY Germany", link: "https://www.ey.com/de_de" },
          { name: "KPMG Germany", link: "https://home.kpmg/de" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including packing, shipping, customs handling, and furniture storage.",
        providers: [
          { name: "Crown Relocations Germany", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Germany", link: "https://www.agsmovers.com" },
          { name: "Movinga", link: "https://www.movinga.de" }
        ]
      },
      {
        name: "Language Tutors",
        description: "German language courses from beginner (A1) to advanced (C1), including integration courses (Integrationskurse) mandated for some visa holders.",
        providers: [
          { name: "Goethe-Institut", link: "https://www.goethe.de" },
          { name: "Volkshochschule (VHS)", link: "https://www.vhs.de" },
          { name: "Berlitz Germany", link: "https://www.berlitz.com/de-de" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public health insurance funds (Krankenkassen), major hospital networks, and private healthcare groups.",
        providers: [
          { name: "Techniker Krankenkasse (TK)", link: "https://www.tk.de/en" },
          { name: "Charité Universitaetsmedizin Berlin", link: "https://www.charite.de/en/" },
          { name: "Helios Kliniken", link: "https://www.helios-gesundheit.de" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Public employment services, job boards, and recruitment firms connecting professionals with German employers.",
        providers: [
          { name: "Bundesagentur fuer Arbeit", link: "https://www.arbeitsagentur.de" },
          { name: "StepStone Germany", link: "https://www.stepstone.de" },
          { name: "Hays Germany", link: "https://www.hays.de" }
        ]
      }
    ]
  }
};
