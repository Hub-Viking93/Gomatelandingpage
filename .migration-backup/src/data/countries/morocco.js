export const morocco = {
  id: 'morocco',
  slug: 'morocco',
  name: 'Morocco',
  region: 'Africa',
  complexity: 'Medium',
  languages: ['Arabic', 'Berber', 'French'],
  shortDescription: 'A sensory journey of souks, deserts, and mountains just a ferry ride from Europe.',
  heroImage: 'https://images.unsplash.com/photo-1510952267577-fc96d5ca660a?',
  flagAlt: 'Flag of Morocco',
  atAGlance: "Morocco is North Africa's gateway, sitting just 14 kilometers across the Strait of Gibraltar from Spain — close enough to see Europe on a clear day from Tangier. It is a dazzling, sometimes overwhelming blend of Arab, Berber, and French colonial influences, where ancient medinas with labyrinthine alleyways coexist with modern shopping malls and high-speed trains. Life centers around family, faith, and food. The hospitality is legendary — you will drink endless glasses of mint tea poured from a height, be invited into homes by near-strangers, and find that conversations meander before getting to the point. The country has modernized rapidly: Casablanca is a true business metropolis, Rabat is a clean and orderly capital, and the Al Boraq high-speed rail connects Tangier to Casablanca in just over two hours. Yet tradition remains strong: the call to prayer punctuates the day, haggling in the souk is an art form, and Friday is sacred. For Western expats, the culture shock can be significant but richly rewarding. The cost of living is very low by European standards — a comfortable life is possible on a modest budget. However, bureaucracy is deeply entrenched (a legacy of French administration), official processes require patience and often a fixer, and French is far more useful than English in daily administrative life. Morocco does not offer a formal digital nomad visa, so most long-term foreign residents either register a company (SARL), secure employment with a local entity, or navigate the Carte de Sejour residence process, which can take months of paperwork and police station visits.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 90 days',
    costOfLiving: 'Low',
    primaryLanguages: 'Darija (Arabic), French (Business)',
  },
  visas: [
    {
      name: 'Tourist Visa Exemption',
      targetAudience: 'Tourists, Short-term visitors',
      useCase: 'Citizens of the US, EU, UK, Canada, and Australia receive 90 days visa-free on arrival. Extensions are technically possible at a local police station (Surete Nationale) but are notoriously difficult to obtain. Many long-term visitors do a "border run" to Spain or a neighboring country and re-enter for another 90 days, though this practice is increasingly scrutinized.',
      duration: '90 days',
      link: 'https://www.consulat.ma/en'
    },
    {
      name: 'Carte de Sejour (Residence Card)',
      targetAudience: 'Long-term residents, Workers',
      useCase: 'Required for any stay exceeding 90 days. Applicants must provide proof of income (employment contract, pension, or company registration), proof of accommodation (legalized rental contract), a medical certificate, criminal background check from home country (apostilled and translated), and passport photos. The process involves multiple visits to the local police prefecture and can take 2-6 months. First issued for one year, renewable.',
      duration: '1 year, renewable (10-year card after continuous residence)',
      link: 'https://www.service-public.ma/'
    },
    {
      name: 'Business/Investor Visa (via SARL Registration)',
      targetAudience: 'Entrepreneurs, Investors',
      useCase: 'The most common path to long-term residency for self-employed foreigners is registering a Moroccan company (SARL/LLC). The process involves the Regional Investment Center (CRI), the Commercial Court, and the tax authorities. Once your company is active and you are listed as a gerant (manager), you can apply for a Carte de Sejour based on your business activity.',
      duration: 'Residency linked to active business',
      link: 'https://www.cri.ma/'
    },
    {
      name: 'Student Visa',
      targetAudience: 'Students, Academic researchers',
      useCase: 'For foreign nationals enrolled in a Moroccan university or academic institution. Requires acceptance letter, proof of financial means, and accommodation. Processed through Moroccan consulates abroad. Morocco hosts several international universities and French-language programs.',
      duration: '1 year, renewable with enrollment',
      link: 'https://www.consulat.ma/en'
    },
    {
      name: 'Work Permit (Contrat de Travail Etranger)',
      targetAudience: 'Employed professionals',
      useCase: 'For foreign nationals employed by a Moroccan company. The employer must apply through ANAPEC (national employment agency) and demonstrate that the position cannot be filled by a Moroccan national. The work contract must be approved by the Ministry of Labour before a visa can be issued.',
      duration: '1 year, renewable with employment',
      link: 'https://www.anapec.org/'
    }
  ],
  requirements: [
    {
      title: 'Carte de Sejour (Residence Card)',
      explanation: 'The primary identification document for all foreign residents in Morocco. It is a credit-card-sized document with your photo, personal details, and residence authorization. Issued by the Surete Nationale (national police) at the local prefecture after a multi-step application process.',
      importance: 'The Carte de Sejour is your legal identity in Morocco. You need it to open a bank account, sign utility contracts, register a vehicle, enroll children in school, and interact with any official institution. Without it, you are technically a tourist and cannot conduct official business. Carry it at all times — police checkpoints are common, especially when traveling between cities.',
      link: 'https://www.service-public.ma/'
    },
    {
      title: 'Legalized Rental Contract',
      explanation: 'All rental agreements in Morocco must have signatures legalized (legalisees) at the local municipality (commune). This involves both parties appearing in person with their identification documents. The legalized contract is then registered with the tax authority (Direction Generale des Impots) and stamped.',
      importance: 'A legalized rental contract is a mandatory requirement for the Carte de Sejour application and for installing utilities (water, electricity, internet) in your name. Verbal agreements or unlegalized contracts leave you with no legal protection and no proof of address for administrative purposes.',
      link: 'https://www.service-public.ma/'
    },
    {
      title: 'Bank Account (Compte en Dirhams Convertibles)',
      explanation: 'As a foreign resident, you can open a convertible dirham account at any major Moroccan bank (Attijariwafa Bank, BMCE Bank of Africa, Banque Populaire). This account type allows you to receive foreign currency transfers and convert them to dirhams, and to repatriate funds abroad within certain limits.',
      importance: 'A local bank account is essential for paying rent, receiving salary or business income, and managing daily expenses. The convertible account structure is important because the Moroccan dirham is a partially closed currency — you cannot freely take dirhams out of the country. International transfers into the account are straightforward, but outbound transfers require documentation proving the funds originated from abroad.',
      link: 'https://www.bkam.ma/'
    },
    {
      title: 'Tax Registration (Identifiant Fiscal)',
      explanation: 'If you are working, running a business, or earning income in Morocco, you must register with the Direction Generale des Impots (DGI) and obtain a tax identification number (Identifiant Fiscal). This is processed at the local tax office.',
      importance: 'Tax compliance is taken seriously in Morocco, and your Identifiant Fiscal is required for issuing invoices, filing annual tax declarations, and conducting business with other registered entities. Morocco has tax treaties with many countries, but navigating double taxation requires careful planning with a local accountant.',
      link: 'https://www.tax.gov.ma/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Morocco's formal job market is concentrated in Casablanca (finance, industry, services), Rabat (government, NGOs, international organizations), and Tangier (manufacturing, logistics, free trade zones). French is the dominant language of business and administration. The outsourcing and offshoring sector is large, with call centers and shared service hubs employing thousands. Tourism provides seasonal employment across the country.",
    whereToLook: [
      "ReKrute.com (largest Moroccan job portal)",
      "LinkedIn",
      "Emploi.ma",
      "Bayt.com (for pan-Arab region roles)",
      "ANAPEC (national employment agency)"
    ],
    realityChecks: [
      "Local salaries are low by European standards. The minimum wage (SMIG) is approximately MAD 3,000/month (about EUR 280). Professional salaries in Casablanca for qualified roles range from MAD 8,000 to MAD 25,000/month.",
      "French is essential for virtually all local employment and administrative interactions. English-only speakers will find opportunities limited to international NGOs, tourism, and remote work.",
      "Many foreigners live in Morocco on remote income or international contracts rather than local employment, as the work permit process is bureaucratic and local salaries rarely match international expectations.",
      "Informal economy is significant. Many services, from domestic help to home repairs, operate on cash and personal referrals rather than formal contracts."
    ]
  },
  salaryReality: {
    overview:
      "Local wages are modest, but the low cost of living means that foreign income — even a moderate one by European standards — provides a very comfortable lifestyle. A couple can live well in Marrakech or Essaouira on EUR 1,500-2,000/month. In Casablanca, the same lifestyle costs EUR 2,000-3,000/month due to higher rents and more expensive dining.",
    realityChecks: [
      "Income from abroad transforms your lifestyle dramatically. Remote workers earning European or American salaries can afford large apartments, domestic help, regular dining out, and travel within Morocco.",
      "Private healthcare, international schooling, and imported goods are paid out of pocket and can add EUR 300-800/month depending on your needs and family size.",
      "The dirham has been relatively stable against the euro, but fluctuations can affect long-term financial planning for those earning in other currencies.",
      "Tipping culture is strong. Service workers (waiters, parking attendants, hotel staff, delivery drivers) expect tips, and these micro-payments add up over a month."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The significant quality-of-life premium from renting in expat-friendly neighborhoods (Gueliz in Marrakech, Bourgogne in Casablanca) versus local areas",
      "Private health insurance costs (MAD 3,000-8,000/year depending on coverage)",
      "The hidden cost of bureaucratic processes: apostilles, translations, legalization fees, and fixer costs add up during the residency process",
      "Currency conversion fees and limits on repatriating funds from Morocco"
    ]
  },
  housingSystem: {
    overview:
      "Morocco's rental market varies enormously by city and neighborhood. In Marrakech, the Gueliz (new city) and Hivernage districts offer modern apartments, while the Medina features traditional riads (courtyard houses) that many foreigners love. In Casablanca, popular expat areas include Bourgogne, Maarif, and Anfa. Tangier's expat scene centers around the Ville Nouvelle and the hills above the Kasbah. Rents are extremely affordable: a modern two-bedroom apartment in Gueliz costs MAD 4,000-7,000/month (EUR 370-650), while a riad in the medina can range from MAD 3,000 to MAD 15,000 depending on size and condition.",
    expectations:
      "Start your search through local agents (agences immobilieres), Avito.ma (Morocco's main classifieds site), Mubawab.ma, and word of mouth in expat communities. Always visit properties in person — photos can be misleading. Verify that the landlord is the actual owner through the Conservation Fonciere (land registry). Insist on a legalized written contract. Expect to pay one to two months' deposit plus the first month's rent upfront. Check water pressure, electricity stability, and internet availability before signing. In older medina properties, plumbing and electrical systems can be unreliable."
  },
  healthcareReality:
    "Morocco's public healthcare system (hospitals publics) is free for Moroccan citizens covered by RAMED but is often overcrowded, underfunded, and variable in quality outside major cities. Most expats rely entirely on private healthcare, which is affordable and of reasonable quality, particularly in Casablanca and Rabat. Clinique Ghandi and Clinique du Littoral in Casablanca, Cheikh Khalifa International University Hospital in Casablanca, and Clinique Internationale de Marrakech are commonly used by foreigners. A consultation with a specialist costs MAD 300-500 (EUR 28-47). Private health insurance through companies like SAHAM Assurance, AXA Morocco, or Atlanta costs MAD 3,000-8,000/year depending on coverage. Pharmacies (pharmacies de garde for after-hours) are plentiful, well-stocked, and many medications are available without prescription. For serious or complex conditions, medical evacuation to Europe (typically France or Spain) is sometimes arranged.",
  digitalLife: {
    overview:
      "Morocco's digital infrastructure has improved significantly, with 4G coverage widespread and fiber broadband expanding in major cities. However, many administrative processes remain stubbornly paper-based, requiring in-person visits, physical stamps, and legalized documents. The contrast between modern digital life and archaic bureaucracy is one of the defining features of living in Morocco.",
    essentials: [
      "WhatsApp (the primary communication tool for everything from business to deliveries)",
      "Glovo or Jumia Food (food and goods delivery)",
      "CIH Mobile or Attijariwafa Mobile (banking apps)",
      "Inwi, Maroc Telecom, or Orange (telecom providers for SIM and data)"
    ],
    whatSurprisesNewcomers: [
      "WhatsApp is not just for messaging — it is the primary way to communicate with landlords, service providers, shops, and even some businesses for invoicing and appointments.",
      "Cash remains king for most daily transactions. Card acceptance is improving in cities but is unreliable in medinas, souks, and smaller towns.",
      "VPN usage is common because some VoIP services face intermittent restrictions. Having a reliable VPN is practical.",
      "Internet speeds in cities (particularly Casablanca, Rabat, and Tangier) are good, but can be inconsistent in rural areas and older medina buildings with poor wiring."
    ]
  },
  culture: {
    text: 'Morocco is an Islamic country where tradition and modernity coexist in a sometimes-jarring but always fascinating balance. The five daily calls to prayer provide the rhythm of the day. "Inshallah" (if God wills) is the response to any question about the future, and time is relational rather than fixed — appointments may start 30 minutes late with no apology expected. Hospitality is a core value: when invited to a Moroccan home, you will be offered far more food than you can eat, and refusing is considered rude. Dress conservatively, especially in medinas and rural areas — shoulders and knees should be covered. Public displays of affection are taboo. The French colonial legacy is visible in the bureaucratic culture, the cafe terraces, and the widespread use of French in education and business. Moroccans are multilingual: most speak Darija (Moroccan Arabic), many speak French, and Amazigh (Berber) languages are spoken in the Rif, Atlas, and Souss regions.',
    highlights: [
      'Mint tea (atay) is the national drink and a symbol of hospitality. It is poured from a height to create a froth and served extremely sweet. Refusing a glass is considered rude — always accept at least one.',
      'Eat with your right hand, especially when sharing from a communal dish (which is common). The left hand is traditionally associated with hygiene and using it for food is offensive.',
      'Haggling is expected and enjoyed in souks and medinas. Never pay the first price — aim for 40-60% of the asking price. In modern shops with price tags, prices are fixed.',
      'During Ramadan, eating, drinking, or smoking in public during daylight hours is illegal even for non-Muslims. Most restaurants close during the day, though some in tourist areas offer screened dining areas.',
      'Ask permission before photographing people, especially in rural areas and medinas. Many Moroccans are uncomfortable being photographed by strangers, and vendors will sometimes demand payment if you photograph their stalls.'
    ]
  },
  transportationMobility:
    "Morocco has the only high-speed rail line in Africa: the Al Boraq connects Tangier to Casablanca in 2 hours 10 minutes via Kenitra and Rabat. The conventional rail network (ONCF) connects major cities reliably and affordably — Casablanca to Marrakech takes about 3 hours. CTM and Supratours operate comfortable intercity buses covering routes not served by trains. Within cities, petit taxis (color-coded by city: red in Casablanca, beige in Marrakech, blue in Rabat) are cheap and ubiquitous — insist on the meter or agree on a price before departing. Grands taxis (shared Mercedes sedans) run fixed routes between cities and are extremely affordable but crowded. Ride-hailing apps (InDrive, Careem) operate in major cities. Driving is possible with an international or Moroccan license, but traffic in cities is chaotic and road rules are loosely observed. Outside cities, roads are generally good but mountain passes require caution.",
  internationalConnectivity:
    "Mohammed V International Airport in Casablanca (CMN) is the main international hub, with Royal Air Maroc (the national carrier) and numerous European airlines offering direct flights to Paris, London, Madrid, Amsterdam, Frankfurt, and dozens of other European cities. Flight time to Paris is approximately 3 hours, to London 3.5 hours. Marrakech Menara Airport and Tangier Ibn Battouta Airport also handle significant international traffic, particularly from low-cost carriers like Ryanair, easyJet, and Transavia. Ferry connections from Tangier Med to Spain (Algeciras and Tarifa) take 1-2 hours and are a popular route for those traveling by car between Morocco and Europe.",
  travelExploration:
    "Morocco is extraordinarily diverse for its size. Marrakech offers the sensory overload of Jemaa el-Fna square, the Majorelle Garden, and the Atlas Mountains visible from rooftop terraces. Fes has the world's largest car-free urban area (the Fes el-Bali medina), a UNESCO site. Chefchaouen, the famous blue city in the Rif Mountains, is a photographer's dream. The Sahara Desert near Merzouga and Zagora provides unforgettable overnight camping experiences on sand dunes. The Atlas Mountains offer trekking, with Toubkal (4,167m) as North Africa's highest peak. Essaouira is a wind-swept Atlantic coastal town beloved by surfers and artists. Asilah combines art galleries with a whitewashed medina on the Atlantic coast. Weekend trips from Casablanca or Rabat to any of these destinations are feasible, making Morocco one of the most rewarding countries for domestic travel.",
  considerations: [
    'Bureaucracy: Every official process involves multiple steps, legalized documents, photocopies, stamps (timbres fiscaux), and patience. A local fixer or administrative assistant who knows the system is invaluable. Budget weeks or months for processes that would take days in Europe.',
    'Street Harassment: Women, particularly those walking alone, may experience verbal harassment (catcalling, persistent attention) in public spaces, especially in medinas and less touristic areas. It is a widespread cultural issue. Dressing conservatively helps but does not eliminate it.',
    'Faux Guides: In major medinas (especially Fes and Marrakech), unofficial guides will approach you offering to show you around or lead you to a specific shop. They expect payment. Politely decline with "La, shukran" (no, thank you) and keep walking. Official guides carry government-issued badges.',
    'Currency Controls: The Moroccan dirham is partially closed — you cannot take more than MAD 2,000 out of the country, and you must convert dirhams back to foreign currency before departure. This affects financial planning for those earning locally.',
    'Summer Heat: Interior cities (Marrakech, Fes, Meknes) can exceed 45C in July and August. The Atlantic coast (Casablanca, Essaouira, Tangier) remains much cooler. Plan your location choice with summer comfort in mind.'
  ],
  mistakes: [
    'Entering a mosque. Non-Muslims are not permitted inside active mosques in Morocco. The sole exception is the Hassan II Mosque in Casablanca, which offers guided tours. Attempting to enter any other mosque will result in being turned away or causing offense.',
    'Assuming French is English. French, not English, is the second language of Morocco. Administrative forms, business correspondence, and professional interactions default to French. English-only speakers will struggle with bureaucracy, banking, and healthcare outside of tourist hotels.',
    'Showing the soles of your shoes or feet when sitting. This is considered disrespectful across Moroccan culture, whether in someone\'s home, a restaurant, or a public space.',
    'Paying the first price quoted in a souk. Vendors expect negotiation and set initial prices 2-3x higher than what they will accept. Not haggling marks you as an inexperienced tourist and means you overpay for everything.',
    'Drinking tap water or eating unwashed raw produce. Tap water in Morocco is technically treated but causes digestive issues for most newcomers. Stick to bottled water and wash fruits and vegetables thoroughly or peel them.'
  ],
  emergency: [
    {
      number: '19',
      service: 'Police (Urban Areas)',
      description: 'Police Secours — the primary police emergency line for cities and towns.'
    },
    {
      number: '177',
      service: 'Gendarmerie Royale (Rural/Highway)',
      description: 'Royal Gendarmerie covering rural areas, highways, and areas outside urban police jurisdiction.'
    },
    {
      number: '15',
      service: 'Ambulance / Fire (Protection Civile)',
      description: 'Emergency medical services and fire brigade dispatch. Response times vary significantly by location.'
    }
  ],
  sources: [
    {
      name: 'Service-Public.ma',
      category: 'Government Services',
      description: 'Central portal for Moroccan public services including administrative procedures, document requirements, and contact information for government agencies.',
      link: 'https://www.service-public.ma/'
    },
    {
      name: 'Ministry of Foreign Affairs (Consulat.ma)',
      category: 'Immigration & Visas',
      description: 'Official source for visa requirements, consular services, and entry conditions for foreign nationals.',
      link: 'https://www.consulat.ma/en'
    },
    {
      name: 'Visit Morocco (ONMT)',
      category: 'Tourism & Travel',
      description: 'National Tourism Office providing guides to destinations, accommodations, and travel experiences across Morocco.',
      link: 'https://www.visitmorocco.com/'
    },
    {
      name: 'Bank Al-Maghrib',
      category: 'Finance & Banking',
      description: 'Morocco\'s central bank, providing information on currency regulations, banking services, and financial regulations for residents.',
      link: 'https://www.bkam.ma/'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa matters, and official guidance related to Morocco, consult the Moroccan Ministry of Foreign Affairs or a Moroccan embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/morocco',
    mfaLink: 'https://www.diplomatie.ma/en'
  },
  serviceDirectory: {
    title: "Service Directory - Morocco",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Morocco.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal assistance for residence permits, work authorizations, company formation, and Carte de Sejour applications.",
        providers: [
          { name: "Dentons Morocco", link: "https://www.dentons.com" },
          { name: "CMS Francis Lefebvre Maroc", link: "https://cms.law" },
          { name: "DLA Piper Africa (Morocco)", link: "https://www.dlapiperafrica.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Professionals handling property rentals and purchases in Casablanca, Marrakech, Rabat, and other expat areas.",
        providers: [
          { name: "Sarouty.ma", link: "https://www.sarouty.ma" },
          { name: "Mubawab.ma", link: "https://www.mubawab.ma" },
          { name: "Kensington Morocco", link: "https://kensington-international.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Moroccan tax law, cross-border income, company accounting, and fiscal compliance.",
        providers: [
          { name: "PwC Morocco", link: "https://www.pwc.com/ma" },
          { name: "EY Morocco", link: "https://www.ey.com/fr_ma" },
          { name: "KPMG Morocco", link: "https://kpmg.com/ma" }
        ]
      },
      {
        name: "Moving Companies",
        description: "Relocation services for international shipping, packing, customs clearance, and local moves.",
        providers: [
          { name: "AGS Worldwide Movers Morocco", link: "https://www.agsmovers.com" },
          { name: "Crown Relocations Morocco", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "French and Arabic language courses for newcomers, from conversational Darija to formal French for business.",
        providers: [
          { name: "Institut Francais du Maroc", link: "https://if-maroc.org" },
          { name: "Amideast Morocco", link: "https://www.amideast.org/morocco" },
          { name: "Berlitz Morocco", link: "https://www.berlitz.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major private hospitals and clinics commonly used by foreign residents.",
        providers: [
          { name: "Clinique Ghandi", link: "https://www.cliniqueghandi.ma" },
          { name: "Cheikh Khalifa International University Hospital", link: "https://www.hopitalcheikhkhalifa.ma" },
          { name: "Clinique Internationale de Marrakech", link: "https://www.clinique-internationale.ma" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms connecting international professionals with Moroccan employers and multinational companies.",
        providers: [
          { name: "Rekrute", link: "https://www.rekrute.com" },
          { name: "Michael Page Morocco", link: "https://www.michaelpageafrica.com" },
          { name: "Manpower Morocco", link: "https://www.manpowergroup.ma" }
        ]
      }
    ]
  }
};
