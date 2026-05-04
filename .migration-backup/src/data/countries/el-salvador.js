export const elSalvador = {
  id: 'el-salvador',
  slug: 'el-salvador',
  name: 'El Salvador',
  region: 'Americas',
  complexity: 'Medium',
  languages: ['Spanish', 'English'],
  shortDescription: 'A small Central American nation remaking itself through Bitcoin, surf tourism, and a hard-security turn.',
  heroImage: 'https://images.unsplash.com/photo-1721297990863-d93adf19fa7d',
  flagAlt: 'Flag of El Salvador',
  atAGlance: "El Salvador is the smallest country in mainland Central America, a densely populated Pacific nation of roughly 6.3 million people squeezed between Guatemala and Honduras. For most of the past three decades, it was defined by the aftermath of a civil war (1980-1992), post-war gang violence, and mass migration to the United States. In the last few years, the country has repositioned itself aggressively under President Nayib Bukele: it became the first country in the world to adopt Bitcoin as legal tender (September 2021), rolled out the state-backed Chivo Wallet (whose technical launch was widely criticized for bugs and fraud), and imposed a 'regimen de excepcion' (state of exception) in March 2022 that has led to the incarceration of more than 80,000 alleged gang members. The result is a country that has moved from one of the highest homicide rates in the world to one of the lowest in the Western Hemisphere — a change locals experience as transformational, but one that human rights organizations contest on due-process grounds. For foreign residents, the practical effect is that neighborhoods and highways that were effectively off-limits five years ago are now walkable. San Salvador, the capital, is modernizing rapidly, with the Zona Rosa and Colonia Escalon districts offering restaurants, coworking, and expat-friendly infrastructure. The Pacific coast around El Tunco, El Zonte ('Bitcoin Beach'), and La Libertad has become a global surf and digital-nomad hub. The US dollar has been the official currency since 2001, so there is no exchange-rate risk. The cost of living is low, bureaucracy is improving but still paper-heavy, and the political environment is polarizing — supporters see a functional state finally emerging, critics see democratic backsliding.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: '90 days (CA-4 Agreement)',
    costOfLiving: 'Low',
    primaryLanguages: 'Spanish (Official), English (in business and tourist areas)',
  },
  visas: [
    {
      name: 'Tourist Entry (CA-4)',
      targetAudience: 'Tourists and short-term visitors',
      useCase: '90 days granted on arrival for most Western nationalities under the CA-4 agreement (shared with Guatemala, Honduras, and Nicaragua). A USD 12 tourist card is issued at the airport. Extensions of an additional 90 days are processed at the Direccion General de Migracion y Extranjeria in San Salvador. Travel within the CA-4 bloc does NOT reset the 90-day clock.',
      duration: '90 days, extendable to 180 days',
      link: 'https://www.migracion.gob.sv/'
    },
    {
      name: 'Temporary Residency (Investor / Family / Work)',
      targetAudience: 'Investors, foreign employees, and family of Salvadorans',
      useCase: 'For foreigners with a qualifying basis: investment in a local business under the recent Investment Law, employment with a Salvadoran company (sponsored alongside a Permiso de Trabajo through the Ministerio de Trabajo), marriage to a Salvadoran national, or family reunification. Application is processed through the Direccion General de Migracion y Extranjeria with apostilled birth/marriage certificates, police records, and financial documentation.',
      duration: '1-2 years, renewable and leading to permanent residency',
      link: 'https://www.migracion.gob.sv/'
    },
    {
      name: 'Bitcoin Investor / Freedom Visa',
      targetAudience: 'Crypto investors and high-net-worth tech founders',
      useCase: 'A residency program associated with El Salvador\'s Bitcoin agenda, offering a path to residency and eventual citizenship in exchange for a substantial Bitcoin or USDT donation/investment (reportedly around USD 1 million) to state-linked programs. Limited slots per year and intended to attract wealthy crypto holders, exchange founders, and Web3 builders. Terms and thresholds have evolved; current details should be confirmed with immigration counsel.',
      duration: 'Residency with a defined path to citizenship',
      link: 'https://www.migracion.gob.sv/'
    },
    {
      name: 'Salvadoran-Origin / Heritage Residency',
      targetAudience: 'Diaspora descendants and family of Salvadoran nationals',
      useCase: 'Simplified residency and naturalization pathway for individuals of Salvadoran descent (parents or grandparents born in El Salvador) and for spouses or children of Salvadoran nationals. Reflects the political weight of the roughly 2.5-million-strong diaspora (largely in the US and Mexico) and the role of remittances in the economy. Requires apostilled birth and family civil-registry documents to prove the lineage chain.',
      duration: 'Residency leading to naturalization',
      link: 'https://rree.gob.sv/'
    }
  ],
  requirements: [
    {
      title: 'NIT (Numero de Identificacion Tributaria)',
      explanation: 'The tax identification number issued by the Ministerio de Hacienda. Required for any foreigner earning income, owning property, or operating a business in El Salvador. The NIT is obtained in person at a Ministerio de Hacienda office with your passport and immigration document.',
      importance: 'Without a NIT, you cannot open a full-service bank account, sign a formal lease, register a vehicle, or run a registered business. It is one of the first administrative steps after entry for anyone intending to stay more than a short visit.',
      link: 'https://www.mh.gob.sv/'
    },
    {
      title: 'DUI (for residents) or Carne de Residente',
      explanation: 'Salvadoran nationals carry the Documento Unico de Identidad (DUI). Foreign residents receive a Carne de Residente issued by the Direccion General de Migracion y Extranjeria after their residency application is approved. This is the physical card that proves your legal status.',
      importance: 'The Carne de Residente is requested by banks, landlords, police during spot checks, and virtually every government agency. Carry it at all times. Renewal is due at set intervals (typically annually for temporary and every 5 years for permanent residency) and requires an in-person visit.',
      link: 'https://www.migracion.gob.sv/'
    },
    {
      title: 'Local Bank Account',
      explanation: 'Opening an account at a Salvadoran bank (Banco Agricola, Banco Cuscatlan, Banco Davivienda, Banco de America Central) requires passport, NIT, proof of address, and typically a reference letter or proof of income. The US dollar is the operating currency, simplifying transfers for US-based residents.',
      importance: 'A local account is needed to receive salary, pay rent by transfer, and avoid ATM withdrawal fees. Due diligence has tightened in recent years due to international AML standards, and foreign customers are often subject to additional documentation requirements. Expect 1-3 weeks of processing.',
      link: 'https://www.ssf.gob.sv/'
    },
    {
      title: 'Chivo Wallet / Bitcoin Account (Optional)',
      explanation: 'The government-backed Chivo Wallet was launched in 2021 to make Bitcoin usable alongside the US dollar. Residents and some foreigners can register, and merchants are legally required to accept Bitcoin (though enforcement varies). Private wallets (Strike, Muun, Wallet of Satoshi) are more widely used in expat circles, especially in El Zonte.',
      importance: 'Optional for daily life — the US dollar remains dominant in practice — but relevant for anyone interested in Bitcoin-denominated services, remittances, or tax treatment. Bitcoin-to-dollar conversions are tax-free under current Salvadoran law, a key draw for crypto-focused residents.',
      link: 'https://chivowallet.com/'
    }
  ],
  jobsAndIncome: {
    overview:
      "El Salvador's formal job market is modest and concentrated in San Salvador: banking, business process outsourcing (BPO) serving US clients, telecoms, textile maquila, and a growing tech sector supported by government initiatives. Tourism and surf hospitality dominate the Pacific coast around La Libertad. Many long-term foreign residents earn remotely in USD rather than through local employment, because local salaries are low by international standards even while the cost of living is attractive.",
    whereToLook: [
      "Tecoloco El Salvador (tecoloco.com.sv) — the main regional job board",
      "LinkedIn for multinational, BPO, and international NGO roles",
      "Computrabajo El Salvador (computrabajo.com.sv)",
      "Direct applications to BPO firms (Teleperformance, Concentrix, Sykes) operating near San Salvador",
      "Remote work platforms (Upwork, Toptal, Remote.co) for USD-paid positions"
    ],
    realityChecks: [
      "The minimum wage for most urban sectors is approximately USD 365/month. Professional salaries in local companies commonly fall between USD 800 and USD 2,500/month.",
      "Spanish fluency is required for virtually all on-the-ground roles. English is valued in BPO and multinational settings and can command a significant premium.",
      "The dollarized economy removes exchange-rate risk but does not eliminate local wage compression — local income in USD is still low in USD terms.",
      "Foreign-paid remote income of USD 2,000-3,500/month supports a very comfortable lifestyle in San Salvador, El Zonte, or Santa Tecla, including housing, domestic help, and frequent dining out."
    ]
  },
  salaryReality: {
    overview:
      "El Salvador is dollarized, which makes salary comparisons straightforward. Local salaries are low by North American and European standards but purchasing power is reasonable for basic needs. Foreign-paid remote work dramatically changes lifestyle options relative to local wages. Income tax is progressive, with rates of 10-30% applied to Salvadoran-source income; foreign-source income benefits from favorable treatment under recent reforms, and Bitcoin gains are currently exempt from capital gains tax.",
    realityChecks: [
      "Income tax (ISR) is progressive from 10% to 30%, with an exemption threshold. Foreign-source passive income has received preferential treatment under recent legislation, but individual circumstances should be confirmed with a Salvadoran tax advisor.",
      "The 'aguinaldo' (Christmas bonus) is mandatory for formally employed workers, typically paid in December and proportional to length of service.",
      "Social security (ISSS) and pension (AFP) contributions total roughly 10-11% on the employee side, deducted from gross pay. Employers contribute separately.",
      "Bitcoin capital gains are currently exempt from Salvadoran income tax, a deliberate policy choice to attract crypto investors. USD earnings and savings are not subject to any exchange-rate conversion tax."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Security-adjacent costs in older budgets: private security, gated housing, and private transportation historically added significant expense, though post-2022 these costs have decreased as general safety has improved",
      "Private healthcare and private international school costs, which are the largest non-housing expenses for expat families",
      "Import duties on electronics, vehicles, and specialty goods, which can add 30-60% to sticker prices",
      "The cost of frequent US trips, which many expats maintain for family, medical, or banking reasons"
    ]
  },
  housingSystem: {
    overview:
      "San Salvador housing is concentrated in a handful of expat-friendly zones: Colonia Escalon and Colonia San Benito (established, leafy, embassy-adjacent), Santa Elena (Antiguo Cuscatlan — modern, close to major malls and international schools), and Santa Tecla (a walkable, historic city west of the capital popular with younger professionals). On the Pacific coast, El Tunco, El Zonte, and La Libertad attract surf-focused and digital-nomad renters. Gated communities ('residenciales' and 'condominios') with 24-hour security are standard at the higher end. Colonial and mid-century homes are common in older neighborhoods; modern apartments dominate newer developments.",
    expectations:
      "Expect one to two months' rent as a security deposit and monthly rent in US dollars. Furnished apartments are increasingly available in expat areas but inventory is limited. A modern one-bedroom in Colonia Escalon or Santa Elena runs USD 500-1,000/month; a house in a gated community USD 900-2,000/month. Beach-area rentals vary widely: a basic apartment in El Tunco can be USD 400/month, while a beachfront villa in El Zonte can exceed USD 2,500/month. Always visit in person, confirm that AC works, test internet speed, and ask about water tank and backup water (municipal supply is generally reliable but intermittent in some suburbs)."
  },
  healthcareReality:
    "El Salvador has a public healthcare system (ISSS for formal workers, Ministerio de Salud for others) and a well-developed private sector. Public hospitals are overstretched, with long waits and uneven facility quality. Most foreign residents rely on private hospitals and clinics. In San Salvador, Hospital de Diagnostico (Colonia Escalon and Santa Elena campuses), Hospital Centro Ginecologico, and Hospital de la Mujer provide high-quality care with some English-speaking specialists. Private consultations cost USD 30-70, and even complex procedures are affordable by US standards — medical tourism from the US is a modest but growing industry. Outside the capital, healthcare quality drops significantly, and serious conditions typically require transfer to San Salvador. Pharmacies are abundant and many medications are available over the counter, though brand-specific prescriptions may need to be sourced from the US. Private health insurance from Asesuisa, SISA, or international providers (Bupa, Cigna) costs USD 80-300/month depending on age and coverage.",
  digitalLife: {
    overview:
      "El Salvador has surprisingly strong digital infrastructure for its size, especially in San Salvador and along the coastal tourism corridor. Fiber internet is widely available from Claro, Tigo, and Movistar, and 4G mobile coverage is robust in urban and most coastal areas. Government has pushed digital adoption aggressively, from the Chivo Wallet rollout to online portals for tax and immigration services, though many administrative processes still require in-person visits.",
    essentials: [
      "Local SIM card from Tigo, Claro, or Movistar — prepaid data plans are cheap and available at any corner store",
      "WhatsApp — the default communication channel for landlords, businesses, and government contacts",
      "Uber and InDrive — both operate in San Salvador and along the coast, Uber is the most common among expats",
      "Chivo Wallet or a private Bitcoin wallet (Strike, Muun) if engaging with the Bitcoin economy"
    ],
    whatSurprisesNewcomers: [
      "Bitcoin payments are legally required to be accepted but practical adoption varies — most daily transactions are still in US dollars, and cards and cash remain dominant.",
      "Government online services have expanded rapidly but portal quality varies; for critical processes, plan for an in-person backup visit.",
      "Cash (USD) is still important for taxis, small merchants, and rural areas. Keep small bills — change for USD 50 or USD 100 notes is often unavailable.",
      "Power outages are less common than in neighboring countries but do occur, especially during the rainy season. A UPS or power bank for your laptop is a practical investment."
    ]
  },
  culture: {
    text: "Salvadoran culture is warm, family-oriented, and shaped by a complicated recent history. The civil war, mass migration to the United States (the diaspora is roughly 2.5 million people, and remittances account for approximately 24% of GDP), and the gang-era trauma are all living memory. Salvadorans are resilient, hardworking, and often socially conservative, with strong Catholic and evangelical Christian traditions. Family gatherings, pupusas (the national dish — thick corn tortillas filled with beans, cheese, or chicharron), and community festivals anchor social life. The recent political shift under Bukele has polarized the population: many citizens credit the government with restoring public safety, while human rights advocates and opposition voices challenge the methods. For newcomers, the important thing is to engage with humility and avoid strong political takes in early conversations. English is spoken in business, tourist, and surf areas, but Spanish is essential for deeper integration.",
    highlights: [
      "Greetings involve a handshake between men and a kiss on one cheek between women and in mixed company. Formal 'usted' is standard with elders and in business until invited to switch.",
      "Pupusas are the national food and a social institution. Pupuserias are everywhere, and eating pupusas with curtido (pickled cabbage slaw) and salsa roja is a rite of passage.",
      "Semana Santa (Holy Week) is the biggest holiday period, with beach exodus and religious processions. Much of San Salvador closes down.",
      "Punctuality is flexible in social settings (30-60 minutes late is normal) but closer to on-time in formal business contexts.",
      "Politics is a sensitive topic. Strong opinions for or against the current government can create friction — listen more than you speak, especially in the first months."
    ]
  },
  transportationMobility:
    "Public transport in El Salvador is functional but rough. San Salvador's bus system is cheap (USD 0.25-0.35) but crowded and considered safe mainly on specific modern routes like SITRAMSS (the bus rapid transit system along key corridors). Most expats use Uber or InDrive, which are widely available, affordable, and safer than hailing taxis off the street. A short ride in the capital costs USD 2-5. Intercity buses run from Terminal de Occidente and Terminal de Oriente to every major town and the beaches. Tourist shuttle services connect San Salvador Airport to El Tunco, El Zonte, and La Libertad (USD 20-30). The country is small — nowhere is more than about 4 hours from San Salvador by road — and the Pan-American Highway and newer highways built or upgraded in recent years are generally in good condition. Driving is common and roads have improved significantly, though defensive driving is still necessary: lane discipline is loose and motorcycles weave aggressively.",
  internationalConnectivity:
    "San Salvador International Airport (SAL), also known as Monsenor Oscar Arnulfo Romero International Airport, is a significant Central American hub, anchored by Avianca's regional operations. Direct flights connect to major US cities (Los Angeles, Houston, Miami, New York, Washington DC, San Francisco, Atlanta), Mexico City, Panama City, Bogota, San Jose, Guatemala City, Managua, Tegucigalpa, and Madrid. Flight time to Los Angeles is approximately 4.5 hours, to Miami 3 hours, to Madrid around 11 hours. The airport is about 45 km from San Salvador (roughly 40 minutes by car via the airport highway) and is the main gateway for tourism to the Pacific coast, which is only 20-30 minutes from the airport itself. Land borders with Guatemala, Honduras, and Nicaragua are active and cross-border buses (TicaBus, Pullmantur) run daily.",
  travelExploration:
    "Despite its small size, El Salvador offers extraordinary geographic variety. The Pacific coast delivers world-class surf — El Tunco, El Zonte (now branded as 'Bitcoin Beach'), Punta Roca, and Las Flores are on the global surf circuit. The Ruta de las Flores in the western highlands is a scenic route through colonial coffee towns (Juayua, Ataco, Apaneca) with weekend food festivals and zipline canopy tours. Lake Coatepeque, a stunning volcanic crater lake, is an easy day trip from the capital. Santa Ana Volcano (Ilamatepec) offers a popular guided hike with a turquoise crater lake at the summit. The Mayan archaeological sites of Joya de Ceren (a UNESCO-listed 'Pompeii of the Americas' preserved by volcanic ash), Tazumal, and San Andres are less visited than Tikal or Copan but still significant. The northern department of Chalatenango and the Suchitoto colonial town offer cultural and birding experiences. Weekend trips across the borders to Antigua Guatemala, Copan Ruinas (Honduras), and the Gulf of Fonseca are straightforward.",
  considerations: [
    "Security Context: The 'regimen de excepcion' (state of exception) introduced in 2022 has dramatically reduced homicide and extortion rates — daily life in San Salvador and tourist areas is now demonstrably safer than it was a decade ago. However, the emergency powers suspend certain due-process protections, and human rights organizations have documented concerns about mass detentions. The practical impact for most foreign residents is positive, but the political and legal context is worth understanding.",
    "CA-4 Visa Clock: The 90-day visa-free period is shared with Guatemala, Honduras, and Nicaragua. Traveling between these countries does NOT reset your clock. To get a fresh 90 days, you must exit to Mexico, Costa Rica, Belize, or further.",
    "Bitcoin in Practice: Despite Bitcoin's legal tender status, the USD remains the dominant daily currency. Most merchants are technically required to accept Bitcoin but many prefer dollars or cards. Chivo Wallet had a troubled rollout (bugs, fraud reports, identity theft scandals), and many expats use private wallets (Strike, Muun) instead.",
    "Hurricane and Rainy Season: The rainy season runs May through October. El Salvador is less hurricane-prone than the Caribbean coast of Central America but experiences heavy tropical storms, flooding, and landslides, especially in mountainous and coastal areas. Volcanic and seismic activity are also a factor — the country sits on the Pacific Ring of Fire.",
    "Political Polarization: President Bukele enjoys high domestic approval but is a polarizing figure internationally. Debates about security vs. civil liberties are active and sensitive. Listen, observe, and avoid strong public political positioning in your early months."
  ],
  mistakes: [
    "Assuming the old stereotypes are current. El Salvador of 2015 was very different from El Salvador of 2026. Visitors who arrive expecting a war-zone atmosphere miss the reality of a country that has changed dramatically in a short period.",
    "Going all-in on Bitcoin for daily use. Bitcoin is legal tender, but USD is the practical daily currency. Keep a functioning US bank card and dollars for day-to-day expenses and treat Bitcoin as an additional option rather than a replacement.",
    "Skipping legal counsel for residency. The immigration system is navigable but involves apostilles, translations, multiple agencies, and timing rules. A Salvadoran immigration lawyer is inexpensive by international standards (USD 1,500-3,500 for a standard residency case) and saves months of frustration.",
    "Underestimating the rainy season. Roads in rural areas can wash out, beach tracks become impassable, and flights occasionally divert. Plan key administrative tasks and travel around the drier November-April window where possible.",
    "Ignoring health insurance. Private healthcare is high quality and affordable by US standards, but without insurance, serious conditions (cancer, cardiac events) can quickly run to US-level prices. Carry international coverage with medical evacuation if you plan to stay long-term."
  ],
  emergency: [
    {
      number: '911',
      service: 'General Emergency (Police, Fire, Ambulance)',
      description: 'Unified emergency number for police (Policia Nacional Civil), fire, and medical emergencies. Operators primarily speak Spanish; English-speaking operators are available in major cities.'
    },
    {
      number: '132',
      service: 'Cruz Roja Salvadorena (Salvadoran Red Cross)',
      description: 'Ambulance and emergency medical response operated by the Salvadoran Red Cross. Available in major cities and highway corridors.'
    },
    {
      number: '913',
      service: 'POLITUR Tourist Police',
      description: 'Tourist assistance and security unit of the National Civil Police. Provides support to foreign visitors, patrols tourist zones, and responds to incidents involving travelers.'
    }
  ],
  sources: [
    {
      name: 'Direccion General de Migracion y Extranjeria',
      category: 'Immigration & Residency',
      description: 'Official migration authority handling visa extensions, residency applications, and immigration regulations for foreigners in El Salvador.',
      link: 'https://www.migracion.gob.sv/'
    },
    {
      name: 'Ministerio de Hacienda',
      category: 'Tax & Finance',
      description: 'The Treasury Ministry, responsible for NIT registration, income tax, VAT, and customs regulations.',
      link: 'https://www.mh.gob.sv/'
    },
    {
      name: 'Ministerio de Relaciones Exteriores',
      category: 'Foreign Affairs & Consular Services',
      description: 'El Salvador\'s Ministry of Foreign Affairs handling international relations, consular services, and apostille requirements.',
      link: 'https://rree.gob.sv/'
    },
    {
      name: 'El Salvador Travel (MITUR)',
      category: 'Tourism & Travel',
      description: 'Official tourism authority with destination information, events, and the Surf City coastal promotion program.',
      link: 'https://elsalvador.travel/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to El Salvador, consult the Salvadoran Ministry of Foreign Affairs (RREE) or a Salvadoran embassy or consulate abroad. Most foreign embassies in San Salvador are in the Colonia Escalon and Colonia San Benito districts.',
    directoryLink: 'https://www.embassypages.com/elsalvador',
    mfaLink: 'https://rree.gob.sv/'
  },
  serviceDirectory: {
    title: "Service Directory - El Salvador",
    description: "Examples of commonly used service providers people often interact with when relocating to El Salvador.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with residence permits, work permits, NIT registration, and immigration compliance in El Salvador.",
        providers: [
          { name: "Arias El Salvador", link: "https://ariaslaw.com" },
          { name: "Consortium Legal El Salvador", link: "https://consortiumlegal.com" },
          { name: "Romero Pineda & Asociados", link: "https://romeropineda.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies handling residential rentals and property purchases in San Salvador, Santa Tecla, and the Pacific coast.",
        providers: [
          { name: "Century 21 El Salvador", link: "https://www.century21.com.sv" },
          { name: "RE/MAX El Salvador", link: "https://www.remax.com.sv" },
          { name: "Coldwell Banker El Salvador", link: "https://www.coldwellbanker.com.sv" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Professionals advising on Salvadoran tax residency, NIT obligations, Bitcoin tax treatment, and business setup.",
        providers: [
          { name: "Deloitte El Salvador", link: "https://www2.deloitte.com/sv" },
          { name: "PwC El Salvador", link: "https://www.pwc.com/interamericas" },
          { name: "KPMG El Salvador", link: "https://kpmg.com/sv" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and regional relocation services for household goods and personal effects to El Salvador.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "AGS Movers El Salvador", link: "https://www.agsmovers.com" },
          { name: "Mudanzas Internacionales Interpacific", link: "https://www.interpacific.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Spanish language schools popular with expats, digital nomads, and long-term visitors in San Salvador and El Zonte.",
        providers: [
          { name: "Academia Europea San Salvador", link: "https://www.academiaeuropea.edu.sv" },
          { name: "Mélida Anaya Montes Spanish School", link: "https://cis-elsalvador.org" },
          { name: "Escuela de Espanol El Zonte", link: "https://elzontespanish.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private hospitals and clinics commonly used by residents and expats for medical care in El Salvador.",
        providers: [
          { name: "Hospital de Diagnostico", link: "https://www.hospitaldediagnostico.com" },
          { name: "Hospital Centro Ginecologico", link: "https://www.centroginecologico.com.sv" },
          { name: "Hospital La Divina Providencia", link: "https://www.hladp.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Employment platforms and recruitment firms for local, BPO, and international roles in El Salvador.",
        providers: [
          { name: "Tecoloco El Salvador", link: "https://www.tecoloco.com.sv" },
          { name: "Computrabajo El Salvador", link: "https://www.computrabajo.com.sv" },
          { name: "Manpower El Salvador", link: "https://www.manpower.com.sv" }
        ]
      }
    ]
  }
};
