export const italy = {
  id: 'italy',
  slug: 'italy',
  name: 'Italy',
  region: 'Europe',
  complexity: 'High',
  languages: ['Italian'],
  shortDescription: 'The land of La Dolce Vita, offering unmatched food, history, and chaotic charm.',
  heroImage: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  flagAlt: 'Flag of Italy',
  atAGlance: "Italy is a country of extraordinary beauty, passionate people, and legendary bureaucratic complexity. It offers a lifestyle centered on food, family, aesthetics, and the pursuit of 'La Bella Figura' — the art of making a good impression in everything from dress to behavior. Life happens in the piazza: the morning espresso at the bar, the evening passeggiata (stroll) through the town center, and the long Sunday lunch with extended family are not quaint traditions but living daily rhythms. However, Italy's administrative systems are notoriously slow, fragmented, and inconsistent — rules often vary between regions, municipalities, and even individual clerks at the same office. The divide between the industrialized, affluent North (Milan, Turin, Bologna) and the warmer, slower, less economically developed South (Naples, Calabria, Sicily) is not just geographic but cultural, economic, and administrative. Regional identity (Campanilismo — loyalty to your local bell tower) often supersedes national identity. For newcomers, living in Italy means accepting a perpetual negotiation between incredible daily pleasures — the food, the beauty, the warmth of human connection — and the maddening reality that getting a simple document stamped can require three office visits, two photocopies of everything, and a prayer to the patron saint of bureaucracy.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'Medium-High',
    primaryLanguages: 'Italian (English limited outside tourism)',
  },
  visas: [
    {
      name: 'Elective Residence Visa (Residenza Elettiva)',
      targetAudience: 'Retirees, Individuals of Independent Means',
      useCase: 'For non-EU nationals with substantial passive income (pensions, rental income, investments, savings) who wish to live in Italy without working. There is no fixed income threshold, but consulates generally expect demonstrable financial self-sufficiency — typically EUR 31,000+ per year for a single applicant, more for families. Health insurance coverage is required. This visa does NOT permit any form of employment.',
      duration: '1 year (renewable)',
      link: 'https://vistoperitalia.esteri.it/home/en'
    },
    {
      name: 'Digital Nomad Visa (Visto per Nomadi Digitali)',
      targetAudience: 'Remote Workers, Highly Skilled Freelancers',
      useCase: 'Introduced in 2024, this visa allows non-EU remote workers employed by or contracting for companies outside Italy to live in Italy while working remotely. Applicants must demonstrate an annual income of at least EUR 28,000, hold valid health insurance, and have an accommodation address in Italy. Requirements and processing may still be evolving as the program matures.',
      duration: '1 year (renewable)',
      link: 'https://vistoperitalia.esteri.it/home/en'
    },
    {
      name: 'Investor Visa (Visto Investitori)',
      targetAudience: 'Investors, Entrepreneurs',
      useCase: 'Residence by investment through one of four pathways: Italian government bonds (EUR 2M minimum), company shares (EUR 500K), innovative startups (EUR 250K), or philanthropic donations (EUR 1M). Applications are processed through the dedicated Italia Investor Visa portal managed by the Ministry of Enterprise. Provides a 2-year residence permit renewable for 3-year periods.',
      duration: '2 years (renewable for 3 years)',
      link: 'https://investorvisa.mise.gov.it/'
    },
    {
      name: 'Self-Employment Visa (Lavoro Autonomo)',
      targetAudience: 'Freelancers, Self-Employed Professionals',
      useCase: 'Extremely difficult to obtain for non-EU nationals due to strict annual quotas set by the Decreto Flussi (flows decree). Requires proof of financial resources, a viable business plan, relevant professional qualifications, and sometimes a nulla osta (authorization) from the local Questura. EU citizens can register as self-employed freely.',
      duration: 'Varies (tied to residence permit)',
      link: 'https://vistoperitalia.esteri.it/home/en'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists, Short-stay Visitors',
      useCase: 'For short visits up to 90 days within a 180-day period for tourism, business meetings, or family visits. Many nationalities can enter visa-free under Schengen rules.',
      duration: 'Up to 90 days',
      link: 'https://vistoperitalia.esteri.it/home/en'
    }
  ],
  requirements: [
    {
      title: 'Codice Fiscale (Tax Identification Code)',
      explanation: 'A 16-character alphanumeric code (derived from your name, date of birth, gender, and place of birth) that serves as Italy\'s universal tax and identification number. You can apply at the Agenzia delle Entrate (Italian Revenue Agency) in Italy, or at an Italian consulate before arriving.',
      importance: 'The Codice Fiscale is the single most important document in Italian bureaucracy. You need it for absolutely everything: signing a rental contract, opening a bank account, purchasing a SIM card, registering with the health service (SSN), signing an employment contract, buying property, or even purchasing certain goods. Apply for it before arriving if possible — it is free and quick at a consulate, but can involve queues and delays at the Agenzia delle Entrate in Italy.',
      link: 'https://www.agenziaentrate.gov.it/portale/web/english/nse/individuals/tax-identification-number-for-foreign-citizens'
    },
    {
      title: 'Permesso di Soggiorno (Residence Permit)',
      explanation: 'The formal residence permit for non-EU nationals. You must apply within 8 working days of arriving in Italy by submitting a kit (application package) at a designated Post Office (Poste Italiane), which forwards it to the Questura (police headquarters). You receive a ricevuta (receipt) that serves as temporary proof of legal residence while your application is processed.',
      importance: 'The Permesso di Soggiorno is your legal right to reside in Italy. The ricevuta (receipt) is critically important — keep it safe, as it serves as your temporary permit while the actual card is being processed (which can take 2-6 months). Without either the ricevuta or the final permit, you cannot work, access healthcare, or prove your legal status. Renewal must be initiated at least 60 days before expiration.',
      link: 'https://www.poliziadistato.it/articolo/1076-Foreign_nationals'
    },
    {
      title: 'Residenza (Municipal Registration)',
      explanation: 'Registration of your legal residence with the Anagrafe (civil registry) at your local Comune (municipality/city hall). This involves declaring your address and being entered into the municipal population register. After application, the Vigili Urbani (municipal police) may visit your address to verify you actually live there.',
      importance: 'Residenza is required to obtain a Carta d\'Identità (Italian ID card), register with the Servizio Sanitario Nazionale (SSN) for healthcare, access subsidized utility rates, register a vehicle, vote in local elections (for EU citizens), and perform many other administrative functions. The address verification visit can take weeks or months depending on the municipality. Without residenza, you exist in a bureaucratic limbo where many services are inaccessible.',
      link: 'https://www.anagrafenazionale.interno.it/'
    },
    {
      title: 'SSN Registration (Servizio Sanitario Nazionale)',
      explanation: 'Italy\'s national health service provides universal coverage to all legal residents. You register at your local ASL (Azienda Sanitaria Locale — local health authority) by presenting your Codice Fiscale, Permesso di Soggiorno or EU registration, and proof of residenza. You choose a medico di base (family doctor) from a list of available physicians in your area.',
      importance: 'SSN registration gives you a health card (Tessera Sanitaria) and access to Italy\'s public healthcare system, including GP visits, hospital care, specialist referrals, and prescriptions at subsidized rates. Your medico di base is your gatekeeper to the system — all specialist referrals must come through them. Emergency care (Pronto Soccorso) is available to everyone regardless of registration status.',
      link: 'https://www.salute.gov.it/portale/lea/dettaglioContenutiLea.jsp?area=Lea&id=4659&lingua=english&menu=leaEss662'
    }
  ],
  jobsAndIncome: {
    overview:
      "Italy's job market is relationship-driven, often opaque, and shaped by strong regional differences. The economically dynamic North (Milan, Turin, Bologna, Verona) offers the majority of professional opportunities, particularly in fashion, design, finance, manufacturing, and tech. Rome has a large public sector and international organizations. The South has fewer formal employment opportunities but lower costs of living. Hiring processes are often slow, and personal recommendations (raccomandazioni) carry significant weight across all sectors.",
    whereToLook: [
      "LinkedIn (dominant for international, management, and professional roles)",
      "Indeed Italy (it.indeed.com — largest generalist job board)",
      "InfoJobs (popular Italian job portal, especially for mid-level roles)",
      "Company career pages (especially for fashion houses, automotive, and design firms)",
      "Personal networks and referrals (critical in Italian professional culture — 'conoscenze' open doors)"
    ],
    realityChecks: [
      "Italian language skills are essential for the vast majority of roles — English-only positions exist mainly in multinational companies, international organizations, and some tech startups.",
      "Hiring timelines are often extremely long and unpredictable; a 3-6 month process from first interview to contract is not unusual.",
      "Personal recommendations and connections matter more than CVs in many sectors — invest in networking, especially through industry associations and local professional events.",
      "The contratto a tempo indeterminato (permanent contract) is the gold standard in Italian employment, offering strong protections under labor law. Employers are cautious about offering them, which means many initial contracts are fixed-term."
    ]
  },
  salaryReality: {
    overview:
      "Italian gross salaries are generally lower than in Northern Europe, and the gap between gross and net is significant due to high social security contributions and progressive income tax (IRPEF). Regional differences are substantial — Milan salaries can be 30-50% higher than equivalent roles in the South, but living costs are proportionally higher. Italy is one of the few major European economies where real wages have stagnated or declined over the past two decades.",
    realityChecks: [
      "Net take-home pay is significantly less than gross — a EUR 35,000 gross salary yields approximately EUR 24,000-25,000 net after IRPEF and social contributions.",
      "The 13th salary (tredicesima) and sometimes 14th salary (quattordicesima) are standard in many contracts — these are additional monthly payments, usually in December and June, that are taxed and should be factored into total annual compensation.",
      "Permanent contracts (tempo indeterminato) are highly valued because they offer strong job protections, including severance pay (TFR) and limited grounds for dismissal.",
      "Benefits beyond salary are often limited compared to Northern Europe — private health insurance, company cars, and meal vouchers (buoni pasto) are the most common perks."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The dramatic regional cost-of-living differences — Milan and Rome are expensive; smaller cities and the South offer significantly lower costs",
      "The tredicesima (13th month salary) is often quoted as part of annual gross but arrives as a lump sum in December, distorting monthly cash flow expectations",
      "Mandatory social security contributions (approximately 9-10% employee share, 30%+ employer share) that significantly reduce net pay",
      "Meal vouchers (buoni pasto, typically EUR 5-8/day) that are tax-free and a meaningful supplement to take-home pay"
    ]
  },
  housingSystem: {
    overview:
      "The Italian rental market is largely private, relationship-driven, and fragmented by region. In Milan, popular expat areas include Navigli, Brera, Porta Venezia, Isola, and Città Studi. In Rome, Trastevere, Prati, Monti, Testaccio, and EUR are common choices. Florence, Bologna, and Turin each have their own neighborhood dynamics. Contracts are typically 4+4 years (canone libero, free-market rent) or 3+2 years (canone concordato, regulated rent with tax benefits), though short-term and furnished rentals exist at premium prices.",
    expectations:
      "Expect to provide multiple months' deposit (typically 2-3 months), a Codice Fiscale, proof of income, and sometimes a bank guarantee. Use Idealista.it, Immobiliare.it, and Casa.it for listings. NEVER pay any money before signing a formal contract and seeing the property in person — rental scams targeting foreigners are common, especially in high-demand cities like Milan. Utility transfers (voltura) for electricity, gas, water, and internet must be arranged separately and can take weeks. Condominium fees (spese condominiali) may be included or separate from rent. Central heating in northern Italy is communal and centrally regulated (turned on/off by the building) from October 15 to April 15."
  },
  healthcareReality:
    "Italy's Servizio Sanitario Nazionale (SSN) provides universal healthcare to all legal residents, funded through taxation. The system offers comprehensive coverage including GP visits, hospital care, specialist consultations, prescriptions, and maternity care, with small co-payments (ticket) for some services. Quality varies significantly by region — Lombardy, Emilia-Romagna, Veneto, and Tuscany are generally rated highest, while some southern regions face resource constraints and longer waiting times. Your medico di base (family doctor) is the gatekeeper: all specialist referrals, tests, and hospital admissions flow through them. Major hospitals like Policlinico di Milano, Ospedale San Raffaele, Policlinico Gemelli (Rome), and Ospedale di Careggi (Florence) provide excellent care. Private healthcare (sanità privata) is widely used to bypass SSN waiting times — providers like Humanitas, GSD (Gruppo San Donato), and Multimedica offer faster access to diagnostics and specialists. Private consultations typically cost EUR 100-200. Pharmacies (farmacie) are ubiquitous, regulated, and serve as first-line health advisors for minor issues. Emergency rooms (Pronto Soccorso) treat everyone regardless of insurance status but can involve long waits for non-critical cases — a system of color-coded triage (codice bianco/verde/giallo/rosso) prioritizes severity.",
  digitalLife: {
    overview:
      "Italy's digital landscape is a study in contrasts. Consumer digital services are well-developed (online banking, food delivery, e-commerce), but government and administrative digitization is fragmented, inconsistent between regions, and often requires in-person steps to complete processes that begin online. The SPID digital identity system is gradually unifying access to public services, but adoption and reliability vary.",
    essentials: [
      "SPID (Sistema Pubblico di Identità Digitale — unified digital identity for accessing all Italian public administration services, tax filing, health records, and pension information)",
      "Tessera Sanitaria (health card — serves as both health insurance card and Codice Fiscale card, accepted for identification at pharmacies and health services)",
      "PagoPA (unified digital payment platform for paying government fees, taxes, fines, and public service charges)",
      "Satispay (popular Italian mobile payment app widely accepted in shops, restaurants, and for person-to-person transfers)"
    ],
    whatSurprisesNewcomers: [
      "Digital government systems are fragmented between national, regional, and municipal levels — what works seamlessly in one comune may require an in-person visit in another.",
      "In-person visits to government offices (Comune, Questura, ASL, Agenzia delle Entrate) are often unavoidable, even for processes that theoretically begin online.",
      "SPID activation requires identity verification that can be done online (via video call) or in person, and the process varies by SPID provider (Poste Italiane, Aruba, InfoCert, etc.).",
      "Cash remains deeply embedded in Italian daily life — while card acceptance has improved significantly (mandatory POS terminals since 2022), many small shops, markets, and tradespeople still prefer cash."
    ]
  },
  culture: {
    text: 'Italian culture revolves around food, family, and Campanilismo — fierce pride in and loyalty to your local town, neighborhood, or region. Appearance matters enormously: dressing well (La Bella Figura) is a sign of self-respect and respect for others. Conversation is animated, physical, and often simultaneous — multiple people talking at once is normal, not rude. Food rules are deeply embedded and seriously enforced by cultural consensus: no cappuccino after 11 AM (only espresso), no parmesan on seafood pasta, no pineapple on pizza (ever), and pasta is a first course (primo), not a side dish. Meals are structured and sacred — pranzo (lunch) and cena (dinner) are events, not just fuel stops. The aperitivo ritual (pre-dinner drinks with snacks, typically at 7-8 PM) is one of the great pleasures of Italian daily life, especially in cities like Milan, Turin, and Bologna where it often evolves into a full buffet meal.',
    highlights: [
      'Coffee: Espresso is drunk standing at the bar counter (al banco) — it costs EUR 1-1.50 and takes 30 seconds. Sitting at a table (al tavolo) can double or triple the price, especially in tourist areas. Cappuccino is exclusively a morning drink.',
      'Aperitivo: The pre-dinner drink ritual, typically from 7:00-9:00 PM. Order a spritz, negroni, or Campari soda, and most bars provide complimentary snacks or a full buffet. In Milan, the "apericena" (aperitivo-dinner) is a lifestyle.',
      'Greetings: Two kisses on the cheeks (left cheek first in most regions). Between men, a firm handshake is standard in professional settings, though close male friends may also kiss.',
      'Mealtime Structure: Pranzo (lunch) is traditionally the main meal (1:00-2:30 PM), though this is changing in northern cities. Cena (dinner) starts at 8:00-9:00 PM. Eating a full meal at 6:00 PM marks you as unmistakably foreign.',
      'Gestures: Italians communicate extensively through hand gestures. The pinched-fingers gesture (mano a carciofo) means "What do you want?" or "What are you talking about?" — not an insult. Learning a few key gestures will earn you instant affection.'
    ]
  },
  transportationMobility:
    "Italy has an excellent high-speed rail network. Trenitalia's Frecciarossa and Italo (NTV) trains connect Milan, Turin, Bologna, Florence, Rome, and Naples at speeds up to 300 km/h, making intercity travel fast and comfortable. Rome to Milan takes approximately 3 hours, Florence to Rome about 1.5 hours. Regional trains (Regionale and Regionale Veloce) connect smaller cities and towns but are slower and less reliable. Urban transit varies enormously: Milan has an efficient metro (4 lines), tram, and bus system (ATM); Rome's metro is limited (3 lines) and buses are chronically unreliable; Florence and Bologna rely primarily on buses. Cycling is growing in cities like Bologna, Ferrara, and Milan, with expanding bike-sharing systems (BikeMi in Milan). Driving in Italian cities is challenging — ZTL zones (Zone a Traffico Limitato) in historic centers have cameras that automatically issue fines to unauthorized vehicles, and Italian driving style is aggressive by Northern European standards. Highway tolls (Telepass or cash at caselli) apply on the autostrada network.",
  internationalConnectivity:
    "Italy is superbly connected internationally through multiple major airports. Rome Fiumicino (FCO) and Milan Malpensa (MXP) are the primary long-haul hubs, with direct flights to North America, South America, the Middle East, Asia, and Africa. Milan Linate (LIN) handles European and domestic routes. Venice Marco Polo, Naples Capodichino, Bologna Marconi, and Catania Fontanarossa serve extensive European networks. Budget carriers (Ryanair, easyJet, Wizz Air) operate from secondary airports across the country, making European travel very affordable. High-speed rail connections extend beyond Italy: TGV services link Turin to Paris, and the Frecciarossa connects to Zurich. Ferry services connect the mainland to Sardinia, Sicily, and smaller islands, as well as to Greece, Croatia, and Tunisia.",
  travelExploration:
    "Italy contains more UNESCO World Heritage Sites than any other country in the world, and the diversity of experiences within a compact area is staggering. Rome offers 3,000 years of history from the Colosseum and Vatican to Trastevere's cobblestone lanes. Florence is the cradle of the Renaissance with the Uffizi, Duomo, and Ponte Vecchio. Venice is a floating labyrinth of canals and Gothic palaces. The Amalfi Coast, Cinque Terre, and Sardinia's Costa Smeralda provide stunning coastline. Tuscany and Umbria offer rolling hills, vineyards, and medieval hilltop towns. The Italian Alps (Dolomites, South Tyrol) rival Switzerland for mountain scenery. Sicily and Puglia combine ancient Greek temples, baroque architecture, and some of Italy's best food. Even lesser-known regions — Marche, Basilicata, Friuli Venezia Giulia — reward exploration with authentic culture and few tourists. High-speed trains make weekend trips between major cities seamless.",
  considerations: [
    'August Shutdown (Ferragosto): The entire country effectively goes on vacation around August 15 (Ferragosto). Many businesses, shops, restaurants, and offices close for 1-3 weeks. Government offices become skeletal. Do not plan any administrative tasks in August — nothing will happen.',
    'Cash Dependency: While POS terminals are now mandatory in all businesses, many small shops, markets, tradespeople, and restaurants still prefer cash or claim their card machine is broken (guasto) to avoid transaction costs. Always carry some cash, particularly in southern Italy and rural areas.',
    'Post Office (Poste Italiane): You will inevitably spend time at the Post Office paying bollettini (payment slips) for utilities, taxes, and administrative fees. The queues are legendary. Take a number, bring something to read, and cultivate patience. Early morning visits on weekdays are least crowded.',
    'ZTL Driving Zones: Nearly every Italian city has Zone a Traffico Limitato (ZTL) in the historic center. Cameras automatically photograph plates, and fines of EUR 80-300 per violation arrive months later — sometimes multiple fines from the same day. If renting a car, verify ZTL boundaries before driving into any city center.',
    'Regional Bureaucratic Variation: Italy\'s administrative systems are deeply decentralized. The process for registering residenza, accessing healthcare, or obtaining permits can vary significantly between regions and even between neighboring comuni. What one office accepts, another may reject. Always verify requirements with your specific local office.'
  ],
  mistakes: [
    'Ordering a "latte" and expecting coffee. In Italian, latte means milk — you will receive a glass of warm milk. Ask for "caffè latte" or "caffellatte" if you want coffee with milk, or simply "un caffè" for an espresso.',
    'Expecting punctuality in social settings. In Italian social culture, 10-15 minutes late is essentially on time. 30 minutes late is "slightly late." Only in formal business settings in northern Italy is strict punctuality expected.',
    'Touching produce at the market. At Italian fruit and vegetable markets, you do not handle the merchandise yourself. Tell the vendor what you want, and they will select and bag it for you. Touching the produce is considered poor form.',
    'Cutting spaghetti with a knife or eating it with a spoon. Twirl pasta against the side of the bowl or plate using only a fork. No knife, no spoon (the spoon method is for children in some regions). Breaking spaghetti before boiling it is also a minor cultural offense.',
    'Assuming Italy is culturally homogeneous. A Milanese, a Roman, a Neapolitan, and a Sicilian may share a passport but have very different dialects, cuisines, temperaments, and cultural references. Treating "Italian culture" as monolithic will be gently corrected by anyone you meet.'
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency (Carabinieri, Police, Medical, Fire)',
      description: 'The unified European emergency number. Connects to the Carabinieri or a central dispatch that routes to the appropriate service. Operators speak Italian and English.'
    },
    {
      number: '118',
      service: 'Medical Emergency (Ambulance)',
      description: 'Direct ambulance and emergency medical service line. Response times vary significantly by region and urban/rural location.'
    },
    {
      number: '115',
      service: 'Fire Brigade (Vigili del Fuoco)',
      description: 'Direct line to the fire brigade. Also handles technical emergencies, building collapses, and rescue operations.'
    }
  ],
  sources: [
    {
      name: 'Farnesina - Visa Information Portal',
      category: 'Immigration & Visas',
      description: 'Official Ministry of Foreign Affairs portal for all visa categories, application procedures, and consular information.',
      link: 'https://vistoperitalia.esteri.it/home/en'
    },
    {
      name: 'Agenzia delle Entrate',
      category: 'Tax Authority',
      description: 'Italian Revenue Agency managing Codice Fiscale, income tax (IRPEF), property tax, and all tax obligations for residents and businesses.',
      link: 'https://www.agenziaentrate.gov.it/portale/web/english'
    },
    {
      name: 'Polizia di Stato - Immigration',
      category: 'Immigration',
      description: 'National Police immigration division handling Permesso di Soggiorno applications, renewals, and all residence permit matters.',
      link: 'https://www.poliziadistato.it/articolo/1076-Foreign_nationals'
    },
    {
      name: 'Italia.it',
      category: 'Tourism',
      description: 'Official tourism board with comprehensive travel guides, cultural information, and practical visitor resources across all Italian regions.',
      link: 'https://www.italia.it/en'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to Italy, consult the Italian Ministry of Foreign Affairs (Farnesina) or an Italian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/italy',
    mfaLink: 'https://www.esteri.it/en/'
  },
  serviceDirectory: {
    title: "Service Directory - Italy",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Italy.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with residence permits, work visas, family reunification, and appeals in Italy.",
        providers: [
          { name: "Fragomen Italy", link: "https://www.fragomen.com" },
          { name: "BonelliErede", link: "https://www.belex.com" },
          { name: "DLA Piper Italy", link: "https://www.dlapiper.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies handling residential sales and long-term rentals across major Italian cities.",
        providers: [
          { name: "Idealista", link: "https://www.idealista.it" },
          { name: "Immobiliare.it", link: "https://www.immobiliare.it" },
          { name: "Tecnocasa", link: "https://www.tecnocasa.it" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax and accounting experts covering Italian residency, IRPEF, business compliance, and flat-tax regimes for new residents.",
        providers: [
          { name: "Deloitte Italy", link: "https://www2.deloitte.com/it" },
          { name: "PwC Italy", link: "https://www.pwc.com/it" },
          { name: "KPMG Italy", link: "https://home.kpmg/it/en/home.html" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services for household goods and personal belongings.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "Bliss Moving & Logistics", link: "https://www.blissmoving.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Italian language schools and institutes for foreigners, from intensive courses to private tutoring.",
        providers: [
          { name: "Scuola Leonardo da Vinci", link: "https://www.scuolaleonardo.com" },
          { name: "Dante Alighieri Society", link: "https://www.dante.global" },
          { name: "Dilit International House (Rome)", link: "https://www.dilit.it" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public healthcare system and private hospitals commonly used by residents and expats in Italy.",
        providers: [
          { name: "Servizio Sanitario Nazionale (SSN)", link: "https://www.salute.gov.it" },
          { name: "Humanitas", link: "https://www.humanitas.it" },
          { name: "San Raffaele Hospital", link: "https://www.hsr.it" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and agencies connecting talent with Italian employers across sectors.",
        providers: [
          { name: "Indeed Italy", link: "https://it.indeed.com" },
          { name: "Adecco Italy", link: "https://www.adecco.it" },
          { name: "Michael Page Italy", link: "https://www.michaelpage.it" }
        ]
      }
    ]
  }
};
