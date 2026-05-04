export const france = {
  id: 'france',
  slug: 'france',
  name: 'France',
  region: 'Europe',
  complexity: 'High',
  languages: ['French'],
  shortDescription: 'World-renowned cuisine, art, and lifestyle in the heart of Western Europe.',
  heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
  flagAlt: 'Flag of France',
  atAGlance: "France is the world's most visited country for a reason: it offers an unmatched quality of life built on 'l'art de vivre' — the art of living well. From the intellectual energy of Paris to the lavender fields of Provence, the vineyards of Bordeaux, and the beaches of the Côte d'Azur, life revolves around food, wine, conversation, and aesthetics. The work-life balance is legally protected through the 35-hour workweek (though many professionals work longer), five weeks of mandatory paid vacation, and the 'droit à la déconnexion' (the legal right to disconnect from work emails outside business hours). However, France is a country of profound paradoxes: modern yet deeply traditional, welcoming yet formally structured, efficient in some domains yet drowning in paperwork in others. Bureaucracy ('la paperasse') is legendary — every interaction with the state requires notarized documents, translated certificates, endless photocopies, and patience measured in months. Speaking French is not optional: outside major tourist zones in Paris and the Riviera, daily life runs entirely in French, and attempting to conduct business, deal with authorities, or integrate socially in English will create friction and limit your options. The healthcare system, administered through the Sécurité Sociale, is world-class — ranked among the best globally by the WHO — but obtaining your Carte Vitale (the green health card) can take six to twelve months. For newcomers, France rewards those who embrace its rhythms: say 'Bonjour' always, eat slowly, argue passionately about ideas, and accept that certain things simply take the time they take.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'High',
    primaryLanguages: 'French',
  },
  visas: [
    {
      name: 'Passeport Talent (Multi-year Residence Permit)',
      targetAudience: 'Highly Skilled Workers, Investors, Artists, Researchers',
      useCase: 'A premium four-year residence permit for qualified employees earning at least twice the minimum wage (approximately EUR 3,500/month gross), investors, company founders, artists with international recognition, and researchers. The permit covers the entire family (spouse receives a matching permit). One of the most attractive skilled worker visas in Europe due to its duration and family provisions.',
      duration: '4 years (renewable)',
      link: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F16922?lang=en'
    },
    {
      name: 'VLS-TS Visiteur (Long Stay Visitor)',
      targetAudience: 'Retirees, Non-Workers with Passive Income',
      useCase: 'For individuals wishing to live in France without working. Requires proof of sufficient income or savings (typically EUR 1,600+/month) and comprehensive health insurance. The visa must be validated online within three months of arrival through the ANEF platform (Administration Numérique pour les Étrangers en France).',
      duration: '1 year (renewable)',
      link: 'https://france-visas.gouv.fr/en'
    },
    {
      name: 'Titre de Séjour — Salarié (Employee Residence Permit)',
      targetAudience: 'Non-EU Employees with a French Job Offer',
      useCase: 'For non-EU citizens with a confirmed employment contract from a French employer. The employer must apply for a work authorization from DREETS (Direction régionale de l\'économie, de l\'emploi, du travail et des solidarités). The labor market test may apply, requiring proof that no EU candidate was available. Processing times are typically two to four months.',
      duration: '1 year (renewable annually, path to multi-year permit after first renewal)',
      link: 'https://www.service-public.fr/particuliers/vosdroits/F2728?lang=en'
    },
    {
      name: 'Micro-Entrepreneur (Auto-Entrepreneur)',
      targetAudience: 'Freelancers, Self-Employed',
      useCase: 'A simplified business registration regime for solo entrepreneurs with revenues below annual thresholds (EUR 77,700 for services, EUR 188,700 for commercial activities in 2024). Social contributions and taxes are calculated as a percentage of revenue (approximately 22-24%). Non-EU nationals typically need a "profession libérale" or entrepreneur visa first, then register as micro-entrepreneur upon arrival.',
      duration: '1 year (residence permit renewable)',
      link: 'https://www.autoentrepreneur.urssaf.fr/portail/accueil.html'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists, Short-term Business Visitors',
      useCase: 'For non-EU citizens requiring a visa for tourism, family visits, conferences, or short business trips within the Schengen area. Applied for at the French consulate or VFS Global center in your country of residence.',
      duration: 'Up to 90 days within a 180-day period',
      link: 'https://france-visas.gouv.fr/en/short-stay-visa'
    }
  ],
  requirements: [
    {
      title: 'OFII Visa Validation / ANEF Registration',
      explanation: 'Upon arrival in France with a VLS-TS (Visa de Long Séjour valant Titre de Séjour), you must validate your visa online through the ANEF platform (Administration Numérique pour les Étrangers en France, formerly the OFII process) within three months of entry. This involves paying a stamp duty (taxe de séjour, typically EUR 200-250) and completing an online form.',
      importance: 'If you fail to validate your visa within the three-month window, your visa becomes void and you are legally considered an irregular resident. This validation is the prerequisite for applying for your residence permit renewal, accessing certain social services, and establishing your legal timeline toward permanent residency. Do not delay this step.',
      link: 'https://administration-etrangers-en-france.interieur.gouv.fr/'
    },
    {
      title: 'Carte Vitale (Health Insurance Card)',
      explanation: 'The green smartcard that provides access to France\'s world-class healthcare system (Protection Universelle Maladie, PUMA — formerly CMU). You apply through the CPAM (Caisse Primaire d\'Assurance Maladie) office in your area of residence after obtaining a French social security number (numéro de sécurité sociale).',
      importance: 'The Carte Vitale entitles you to reimbursement of 70% of GP visits, 80% of hospital costs, and subsidized prescription medications. The remaining gap is covered by a mutuelle (supplementary health insurance, typically EUR 30-80/month). Getting the Carte Vitale can take six to twelve months due to administrative delays, so arrange interim private health insurance (assurance maladie privée) to cover the gap. Many pharmacies and doctors will still treat you with a temporary attestation (attestation de droits).',
      link: 'https://www.ameli.fr/assure/english-pages'
    },
    {
      title: 'Justificatif de Domicile (Proof of Address)',
      explanation: 'A recent document (less than three months old) proving your residential address: typically a utility bill (electricity from EDF/Engie, internet from Orange/Free/SFR), a rent receipt, or a property tax notice (taxe foncière). If you are staying with someone, they must provide an attestation d\'hébergement (hosting certificate) with their own proof of address and a copy of their ID.',
      importance: 'The justificatif de domicile is the most-requested document in French administrative life. Without it, you cannot open a bank account, register for health insurance, get a mobile phone contract, apply for your residence permit, or register your children in school. The circular dependency (you need an address to open a bank account, but some landlords want a bank account before signing a lease) is one of the classic French bureaucratic catch-22s.',
      link: 'https://www.service-public.fr/'
    },
    {
      title: 'Bank Account (Compte Bancaire)',
      explanation: 'Open a French bank account with a major bank (BNP Paribas, Société Générale, Crédit Agricole, LCL, La Banque Postale) or a digital alternative (Boursorama, Fortuneo, N26 France). You will need your passport, justificatif de domicile, and visa or residence permit.',
      importance: 'A French bank account with an IBAN starting with FR is essential for receiving salary, paying rent (usually by virement/bank transfer or prélèvement/direct debit), setting up utility contracts, and managing daily expenses. French landlords and employers expect French bank details. RIB (Relevé d\'Identité Bancaire) is the document containing your bank details — you will hand out dozens of copies during your first months. Mobile payment via Apple Pay and contactless cards is widely accepted, but cheques (chèques) are still used for some transactions (rental deposits, school payments).',
      link: 'https://www.banque-france.fr/en'
    }
  ],
  jobsAndIncome: {
    overview:
      "France has Europe's second-largest economy (after Germany) with strength across luxury goods (LVMH, Hermès, L'Oréal), aerospace (Airbus, Safran, Dassault), automotive (Stellantis, Renault), energy (TotalEnergies, EDF), pharmaceuticals (Sanofi), technology, and a large public sector. The labor market is formal, regulated, and credential-conscious. The 35-hour workweek is the legal standard (though many cadres/managers work longer), and employment protections are among the strongest in Europe.",
    whereToLook: [
      "LinkedIn — increasingly dominant for professional and international roles in France",
      "France Travail (formerly Pôle Emploi) — the public employment service, essential for regulated and public-sector roles",
      "APEC (Association Pour l'Emploi des Cadres) — the dedicated portal for executive and managerial positions",
      "Welcome to the Jungle — a popular platform for startup, tech, and creative roles, particularly in Paris",
      "Company career pages: LVMH, L'Oréal, TotalEnergies, BNP Paribas, and other CAC 40 companies post directly"
    ],
    realityChecks: [
      "French language is essential for the vast majority of roles. Even international companies operating in France conduct meetings, internal communication, and HR processes in French. English-only roles exist primarily in Paris-based tech startups and multinational headquarters.",
      "Hiring processes can be slow and require extensive documentation (diplomas, references, proof of qualifications). The French education system and its Grandes Écoles carry enormous weight in hiring decisions.",
      "Employment contracts come in two main forms: CDI (Contrat à Durée Indéterminée, permanent) and CDD (Contrat à Durée Déterminée, fixed-term). A CDI is the gold standard — it unlocks easier apartment hunting, bank loans, and social status. A CDD is viewed as precarious.",
      "The convention collective (collective bargaining agreement) applicable to your industry sets minimum salaries, overtime rules, and working conditions. Understand which convention applies to your role before negotiating."
    ]
  },
  salaryReality: {
    overview:
      "French salaries are stable and structured, but the gap between gross (brut) and net (net) salary is one of the largest in Europe. Social contributions (charges sociales) — covering health insurance, retirement, unemployment, and family benefits — consume approximately 22-25% of the employee's gross salary, plus an additional 25-42% paid by the employer on top. The SMIC (minimum wage) is EUR 1,766.92 gross/month (2024). Average full-time salary is approximately EUR 2,500 net/month.",
    realityChecks: [
      "A gross salary of EUR 45,000/year yields approximately EUR 35,000 net after employee social contributions (before income tax). Income tax is calculated annually on the household (quotient familial system) and deducted at source since 2019.",
      "The 13th month salary (treizième mois) is common but not legally required. Many collective agreements and employers include it, adding approximately 8% to your annual compensation. Always clarify whether a quoted salary includes the 13th month.",
      "Meal vouchers (tickets restaurant, typically EUR 8-12/day, shared 50-60% by the employer) are a standard benefit and represent a genuine, tax-advantaged addition to compensation. They can be used at restaurants, supermarkets, and bakeries.",
      "Overtime above 35 hours/week is compensated at 125% for the first eight hours and 150% thereafter, or converted to Réduction du Temps de Travail (RTT) days off — many French workers accumulate 8-12 additional days off per year through RTT."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Employee social contributions: approximately 22-25% of gross salary. Always compare 'salaire net avant impôt' (net before income tax), not gross.",
      "The quotient familial tax system: households with children pay significantly less income tax. A single person earning EUR 40,000 pays more tax than a married couple with two children earning the same total.",
      "Housing costs in Paris: average rent for a one-bedroom apartment in central Paris (arrondissements 1-11) is EUR 1,200-1,800/month. Outside Paris (banlieue), prices drop to EUR 700-1,100.",
      "Employer-paid charges (charges patronales): not visible on your payslip but adding 25-42% to your gross salary cost. If you are negotiating as a freelancer or contractor, factor this in when comparing to employee offers."
    ]
  },
  housingSystem: {
    overview:
      "France has a highly regulated rental market with strong tenant protections (the Loi ALUR and Loi ELAN govern most aspects). Finding an apartment in Paris is notoriously competitive and document-intensive. Popular areas for expats in Paris include Le Marais (3rd/4th arrondissements) for its historic charm, Bastille/Oberkampf (11th) for nightlife and young professionals, Batignolles (17th) for families, and République/Canal Saint-Martin (10th) for a trendy, village-like atmosphere. Outside Paris, Lyon's Presqu'île and Croix-Rousse, Bordeaux's Chartrons, Toulouse's Capitole quarter, and Nice's Vieux Nice are popular with newcomers.",
    expectations:
      "Landlords require an extensive dossier (dossier de location): passport, visa/titre de séjour, three most recent payslips, employment contract, latest tax notice (avis d'imposition), and proof of address. You need a garant (guarantor) earning at least three times the monthly rent — either a French resident or a service like Visale (state-backed, free for young workers and students) or Garantme (private, paid). Deposits are capped at one month's rent for unfurnished apartments and two months for furnished. Unfurnished leases (bail nu) are three years minimum; furnished (bail meublé) are one year. The state-mandated rent encadrement (rent control) applies in Paris and some other cities, capping how much landlords can charge."
  },
  healthcareReality:
    "France's healthcare system is consistently ranked among the world's best by the WHO. The Sécurité Sociale reimburses approximately 70% of GP visits (consultation at EUR 26.50 for a généraliste), 80% of hospital costs, and varying percentages for medications (15-100% depending on the drug's classification). Most residents carry a mutuelle (complementary private insurance, EUR 30-100/month) to cover the remaining gap (ticket modérateur), dental, optical, and hearing aids. Major hospitals include Hôpital de la Pitié-Salpêtrière and Hôpital Necker-Enfants Malades in Paris, Hospices Civils de Lyon, CHU de Bordeaux, and Hôpital de la Timone in Marseille. The SOS Médecins service provides home visits 24/7 (call 3624 or your local number) for urgent but non-emergency situations. Pharmacies (recognized by the green cross sign) are plentiful, and pharmacists in France provide medical advice, administer vaccines, and can dispense certain medications. An emergency pharmacy (pharmacie de garde) is always open at night and on weekends — check your local listing or call the police for the nearest one.",
  digitalLife: {
    overview:
      "France's digital infrastructure is functional and improving rapidly, though the transition from paper-based bureaucracy is incomplete. Government portals (service-public.fr, impots.gouv.fr, ameli.fr) handle many administrative tasks online, but follow-up by physical mail or in-person visits is still frequently required. FranceConnect is the emerging single-sign-on identity system for government services.",
    essentials: [
      "FranceConnect — the government's single-sign-on system, linking your identity across ameli.fr, impots.gouv.fr, and other public services. Set it up through your existing accounts.",
      "Ameli.fr — the health insurance portal for managing your Carte Vitale, tracking reimbursements, finding doctors, and ordering attestations",
      "Impots.gouv.fr — the tax authority's platform for filing your annual income declaration, setting up monthly tax deductions, and accessing your avis d'imposition",
      "French bank app with Paylib — Paylib is France's interbank mobile payment system, allowing contactless payments and peer-to-peer transfers"
    ],
    whatSurprisesNewcomers: [
      "Physical mail (courrier recommandé) remains the official channel for legally binding communications. Lease terminations, insurance claims, and administrative disputes must often be sent by registered letter (lettre recommandée avec accusé de réception).",
      "French bank accounts often come with a chéquier (chequebook). Some landlords request post-dated cheques for rent, and school payments, charitable donations, and certain services still expect cheques. Do not decline the chequebook.",
      "Processes can be circular: to get service A, you need document B, but to get document B, you need service A. This is especially common in the Carte Vitale / social security number / proof of address chain. Patience and escalation (writing formal letters) are the standard tools.",
      "The French digital ecosystem (Doctolib for medical appointments, Leboncoin for classifieds, Vinted for secondhand clothing, BlaBlaCar for ridesharing) is highly developed and widely used. Doctolib in particular has transformed healthcare access — booking a GP or specialist appointment online is now standard."
    ]
  },
  culture: {
    text: "French culture is high-context, formal in structure, and deeply invested in intellectual and aesthetic pursuits. Politeness is not optional — it is a rigid social architecture. Saying 'Bonjour, Madame/Monsieur' when entering a shop, a bus, or a doctor's office is a non-negotiable social key; failing to do so is perceived as aggressive or contemptuous, and service quality will reflect that perception. Dinner is late (8:00-9:00 PM), meals are multi-course experiences rather than fuel, and wine is a food group, not an indulgence. Intellectual debate is a national sport — disagreeing with someone's ideas over dinner is not only acceptable but expected and enjoyed, as long as it remains impersonal. The French distinguish sharply between professional life (vie professionnelle) and private life (vie privée): asking colleagues about salary, religion, or personal problems is intrusive. The 'apéro' (pre-dinner drink, typically around 7:00 PM) is the quintessential French social ritual — declining an invitation to apéro is declining an invitation to belong.",
    highlights: [
      "Bonjour is not 'hello' — it is a social handshake. Use it when entering any establishment: shop, bakery, bus, elevator, waiting room. Follow with 'Madame' or 'Monsieur.' Failure to say Bonjour is the number one reason tourists receive poor service.",
      "Lunch is sacred. Many businesses and offices close or slow between 12:00 and 2:00 PM. A proper lunch (entrée, plat, fromage/dessert, café) is culturally expected. Eating a sandwich at your desk is increasingly common in Paris but still viewed with mild pity.",
      "The Apéro: the pre-dinner drink ritual (olives, chips, charcuterie, wine or pastis) around 7:00 PM is how friendships are maintained and social bonds formed. Being invited to someone's apéro is a sign of genuine warmth.",
      "La Bise: cheek-kissing as a greeting varies by region (one to four kisses) and relationship. In professional settings, a handshake is standard. Do not hug — hugging is reserved for very close family or emotional moments.",
      "Strikes and protests: grèves (strikes) and manifestations (demonstrations) are constitutionally protected and culturally normalized expressions of democratic participation. Transport strikes, in particular, are frequent. Check RATP and SNCF strike alerts before planning travel."
    ]
  },
  transportationMobility:
    "Paris has one of the world's best public transport systems: the Métro (16 lines, 300+ stations), RER suburban trains (5 lines connecting suburbs to central Paris), buses, and trams. The Navigo pass (EUR 86.40/month for all zones in Île-de-France) provides unlimited travel across all modes — exceptional value for a city this size. The TGV (Train à Grande Vitesse) high-speed rail network is France's crown jewel: Paris to Lyon in 2 hours, Paris to Marseille in 3 hours, Paris to Bordeaux in 2 hours, and Paris to Strasbourg in 1 hour 45 minutes. SNCF operates the national rail system. Lyon has a metro (4 lines), trams, and buses. Bordeaux, Strasbourg, Nice, and Toulouse have modern tram networks. Outside major cities, car ownership becomes important — rural France is car-dependent. The Vélib' bike-sharing system in Paris (and similar systems in other cities) provides affordable urban cycling, and dedicated bike lanes have expanded dramatically since 2020. BlaBlaCar (French-founded ridesharing app) is widely used for intercity travel and significantly cheaper than trains if booked in advance.",
  internationalConnectivity:
    "Paris Charles de Gaulle Airport (CDG) is Europe's second-busiest airport and Air France's hub, with direct flights to over 300 destinations worldwide including all major cities in Africa (Air France's historical network), the Middle East, Asia, and the Americas. Paris Orly (ORY) handles domestic, European, and some North African traffic. Lyon-Saint Exupéry (LYS), Nice Côte d'Azur (NCE), Toulouse-Blagnac (TLS), and Marseille Provence (MRS) serve as regional gateways. Air France is the flag carrier and SkyTeam founding member. France's central European location and TGV network make it a continental crossroads: Eurostar to London in 2 hours 15 minutes, Thalys/TGV to Brussels in 1 hour 20 minutes, direct TGV to Amsterdam, Frankfurt, Stuttgart, Geneva, Barcelona, and Milan. Budget carriers (easyJet, Transavia, Vueling, Ryanair) operate extensively from French airports.",
  travelExploration:
    "France offers extraordinary cultural and natural diversity within its borders: the châteaux of the Loire Valley, the wine regions of Bordeaux, Burgundy, and Champagne, the lavender fields and Roman ruins of Provence, the dramatic coastline of Brittany, the alpine landscapes of Chamonix and the Mont Blanc massif, the beaches of the Côte d'Azur (Nice, Cannes, Saint-Tropez), and the volcanic landscapes of the Auvergne. Paris alone warrants months of exploration: the Louvre, Musée d'Orsay, Centre Pompidou, Notre-Dame (under restoration), Sacré-Cœur, and the Marais neighborhood. Weekend trips from Paris include Giverny (Monet's gardens, 1.5 hours), Reims (Champagne houses, 45 minutes by TGV), Étretat (dramatic chalk cliffs, 2.5 hours by car), and Mont Saint-Michel (3.5 hours by TGV + shuttle). France also has overseas territories that offer Caribbean (Guadeloupe, Martinique), South American (French Guiana), Indian Ocean (Réunion, Mayotte), and Pacific (New Caledonia, French Polynesia) travel — all reachable on French domestic fares.",
  considerations: [
    "Bureaucratic Complexity ('La Paperasse'): French administration is legendary for its paper requirements. You will need your birth certificate (translated by a sworn translator — traducteur assermenté), your marriage certificate (if applicable), multiple passport-size photos (format identité), and endless photocopies. Every interaction with the préfecture, CPAM, or CAF requires a dossier. Expect to be asked for documents you have already submitted. Keep a master folder (physical and digital) of every document from day one.",
    "Strikes and Protests: Transport strikes (grèves) on the SNCF and RATP, public sector strikes, and street demonstrations (manifestations) are regular features of French civic life. Major reforms (pension, labor law) can trigger weeks of disrupted service. This is not dysfunction — it is democracy, French-style. Check strike calendars, have backup plans, and treat it as part of the experience.",
    "Sunday Closures: Most shops, supermarkets, and services are closed on Sundays. Some bakeries (boulangeries) and a few supermarkets in tourist areas open Sunday morning. Plan your grocery shopping for Saturday. In Paris, the Marais district is an exception — many shops open on Sundays.",
    "Noise Sensitivity: French apartments, particularly in Paris's Haussmann-era buildings, have thin walls and floors. Noise complaints (tapage nocturne after 10:00 PM, or tapage diurne during the day if excessive) are taken seriously by police and can result in fines. Walking in shoes on parquet floors, playing music, or hosting gatherings after midnight will generate neighbor complaints.",
    "Income Tax Declaration: All tax residents must file an annual income tax declaration (déclaration de revenus) on impots.gouv.fr, even if tax is already deducted at source (prélèvement à la source). Failure to file, even if you owe nothing, can create administrative problems and penalties. The deadline is typically in May-June for the previous year's income."
  ],
  mistakes: [
    "Not saying Bonjour. This is the single most common mistake foreigners make in France, and it is the single most impactful. Entering a shop, bakery, bus, or waiting room without greeting everyone with 'Bonjour' is perceived as rude and dismissive. Service staff will respond to your rudeness with matching coolness. Always greet first.",
    "Eating while walking. French people sit down to eat. Walking down the street with a sandwich, eating on the Métro, or snacking in public is considered rushed, uncouth, and vaguely sad. Take a seat, even if it is just a park bench.",
    "Speaking loudly in public. Volume control is a social skill in France. Speaking loudly in restaurants, on the Métro, or on the phone in public spaces is considered inconsiderate. Americans and Australians in particular are often asked to lower their voices.",
    "Attempting to hug French people. Greeting in France is either a handshake (professional, first meeting) or la bise (cheek kisses, social settings). Hugging is reserved for very close family members or deeply emotional moments. Attempting to hug an acquaintance or colleague will create visible discomfort.",
    "Assuming everything works in English. Outside of major tourist zones in central Paris, the Riviera, and some international business contexts, daily life operates entirely in French. Government offices, medical appointments, landlords, utility companies, and most shops require French. Even basic French (A2 level) dramatically improves your experience and the reception you receive."
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency (European Standard)',
      description: 'Pan-European emergency number, works from any phone. Redirects to the appropriate French emergency service. Operators speak French; English is usually available but not guaranteed outside major cities.'
    },
    {
      number: '15',
      service: 'SAMU (Service d\'Aide Médicale Urgente)',
      description: 'Medical emergencies. SAMU dispatches either an ambulance or a SMUR (mobile intensive care unit) depending on severity. Call 15 for life-threatening medical situations; call SOS Médecins (3624) for urgent but non-emergency home visits.'
    },
    {
      number: '17',
      service: 'Police Secours',
      description: 'For crimes in progress, threats to safety, and situations requiring immediate police intervention. For non-emergency reports, visit your local commissariat (police station) in person.'
    }
  ],
  sources: [
    {
      name: 'France-Visas',
      category: 'Visas & Immigration',
      description: 'The official French government portal for visa applications, eligibility checks, and documentation requirements. Covers all visa types from short-stay Schengen to long-stay residence visas.',
      link: 'https://france-visas.gouv.fr/en'
    },
    {
      name: 'Service-Public.fr',
      category: 'Government Administration',
      description: 'The central portal for all French public services: residence permits, family law, employment rights, taxation, and municipal services. Available in French with partial English translation.',
      link: 'https://www.service-public.fr/'
    },
    {
      name: 'Ameli.fr (Assurance Maladie)',
      category: 'Healthcare',
      description: 'The national health insurance portal for Carte Vitale management, reimbursement tracking, doctor search, and health coverage attestations.',
      link: 'https://www.ameli.fr/'
    },
    {
      name: 'Impots.gouv.fr',
      category: 'Taxation',
      description: 'The tax authority\'s portal for income declarations, tax notices (avis d\'imposition), property tax management, and withholding tax (prélèvement à la source) adjustments.',
      link: 'https://www.impots.gouv.fr/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to France, consult the French Ministry for Europe and Foreign Affairs (Ministère de l\'Europe et des Affaires étrangères) or a French embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/france',
    mfaLink: 'https://www.diplomatie.gouv.fr/en/'
  },
  serviceDirectory: {
    title: "Service Directory - France",
    description: "Examples of large, commonly used service providers people often interact with when relocating to France.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for visa applications, residence permits, work authorization, and immigration compliance in France.",
        providers: [
          { name: "Fragomen France", link: "https://www.fragomen.com" },
          { name: "Gide Loyrette Nouel", link: "https://www.gide.com" },
          { name: "CMS Francis Lefebvre Avocats", link: "https://cms.law/en/fra" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Platforms and agencies for apartment rentals, property purchases, and relocation housing in French cities.",
        providers: [
          { name: "SeLoger", link: "https://www.seloger.com" },
          { name: "Leboncoin (Immobilier)", link: "https://www.leboncoin.fr/immobilier/" },
          { name: "Century 21 France", link: "https://www.century21.fr" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on French tax residency, social charges, cross-border income, and micro-entrepreneur obligations.",
        providers: [
          { name: "PwC France", link: "https://www.pwc.fr" },
          { name: "EY France", link: "https://www.ey.com/fr_fr" },
          { name: "KPMG France", link: "https://kpmg.com/fr" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including packing, shipping, customs handling, and storage.",
        providers: [
          { name: "Crown Relocations France", link: "https://www.crownrelo.com" },
          { name: "AGS Movers France", link: "https://www.agsmovers.com" },
          { name: "Demeco Group", link: "https://www.demeco.fr" }
        ]
      },
      {
        name: "Language Tutors",
        description: "French language schools and programs, from beginner to advanced, including DELF/DALF exam preparation.",
        providers: [
          { name: "Alliance Francaise", link: "https://www.alliancefr.org" },
          { name: "Institut de Langue Francaise (ILF Paris)", link: "https://www.ilf-paris.fr" },
          { name: "Berlitz France", link: "https://www.berlitz.com/fr-fr" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public health insurance portals, private hospital networks, and supplementary insurance (mutuelle) providers.",
        providers: [
          { name: "Assurance Maladie (Ameli)", link: "https://www.ameli.fr" },
          { name: "Hôpital Américain de Paris", link: "https://www.american-hospital.org" },
          { name: "Ramsay Santé", link: "https://www.ramsaysante.fr" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Public employment services and recruitment firms connecting professionals with French employers.",
        providers: [
          { name: "France Travail (formerly Pôle Emploi)", link: "https://www.francetravail.fr/" },
          { name: "APEC (Cadres/Managers)", link: "https://www.apec.fr" },
          { name: "Michael Page France", link: "https://www.michaelpage.fr" }
        ]
      }
    ]
  }
};
