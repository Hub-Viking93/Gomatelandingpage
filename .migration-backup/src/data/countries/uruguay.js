export const uruguay = {
  id: 'uruguay',
  slug: 'uruguay',
  name: 'Uruguay',
  region: 'Americas',
  complexity: 'Low',
  languages: ['Spanish'],
  shortDescription: 'Stable, safe, and slow-paced living with European-level costs.',
  heroImage: 'https://images.unsplash.com/photo-1591323803333-ea760190d6d0?',
  flagAlt: 'Flag of Uruguay',
  atAGlance: "Uruguay is the quiet achiever of South America: a small, stable, democratic country of 3.5 million people that consistently ranks as the safest and most socially progressive nation on the continent. Montevideo, the capital, is home to half the population and feels more like a large European town than a Latin American metropolis. The pace of life is intentionally slow, captured by the national philosophy of 'tranquilo.' Ostentatious displays of wealth are socially frowned upon, and the culture values modesty, equality, and genuine human connection. The cost of living, however, is surprisingly high: groceries, electronics, gasoline, and imported goods often cost more than in Western Europe, driven by import duties and a small domestic market. Uruguay uses the Uruguayan Peso (UYU), but the US Dollar is widely accepted and understood, particularly in tourist areas and real estate transactions. The country's progressive stance on social issues (legal cannabis for residents, same-sex marriage, strong separation of church and state) reflects a society that is secular, tolerant, and quietly liberal. For relocators seeking safety, stability, and a genuine quality of life over excitement and nightlife, Uruguay delivers. The main trade-offs are the high cost of living, limited career opportunities in a small economy, and the isolation of being far from major global hubs.",

  overview: {
    euStatus: 'Non-EU',
    stayLength: '90 days (Extendable)',
    costOfLiving: 'High',
    primaryLanguages: 'Spanish (Rioplatense)',
  },
  visas: [
    {
      name: 'Digital Nomad Permit (Residencia Fiscal para Trabajadores Remotos)',
      targetAudience: 'Remote workers, freelancers',
      useCase: 'Designed for individuals working remotely for foreign employers or clients. Requires proof of sufficient monthly income (approximately USD 1,500+), health insurance, and clean criminal record. The application process is relatively simple and can be initiated online through the LiveInUruguay portal.',
      duration: '6 months (renewable once, total 12 months)',
      link: 'https://www.liveinuruguay.uy/'
    },
    {
      name: 'Permanent Residency (Residencia Permanente)',
      targetAudience: 'Long-term settlers, retirees',
      useCase: 'Uruguay actively encourages immigration and allows permanent residency applications while in the country on a tourist visa. The process requires an apostilled birth certificate, police background check, health card (Carne de Salud), and proof of income or financial means. A temporary Cedula is issued quickly, allowing you to function while the final residency is processed (which can take 1-2 years).',
      duration: 'Permanent',
      link: 'https://www.gub.uy/tramites/residencia-legal-permanente'
    },
    {
      name: 'Rentista Visa',
      targetAudience: 'Retirees, passive income earners',
      useCase: 'For individuals with provable passive foreign income (pensions, investments, rental income). Offers a path to permanent residency plus a generous tax holiday: foreign-sourced passive income is exempt from Uruguayan income tax for the first 11 fiscal years of residency.',
      duration: 'Permanent (with tax benefits for 11 years)',
      link: 'https://www.gub.uy/'
    },
    {
      name: 'Tourist Entry (Visa-Free)',
      targetAudience: 'Short-term visitors',
      useCase: 'Citizens of most countries receive visa-free entry for up to 90 days. Extensions are possible but must be applied for before the initial period expires. Overstaying results in fines calculated per day.',
      duration: 'Up to 90 days',
      link: 'https://www.gub.uy/ministerio-relaciones-exteriores/'
    },
    {
      name: 'Work Visa (Residencia Temporaria)',
      targetAudience: 'Employed professionals with local job offers',
      useCase: 'For individuals with a confirmed employment contract from a Uruguayan employer. The employer assists with documentation, and the process grants a temporary residence that converts to permanent residency over time.',
      duration: '1-2 years (convertible to permanent)',
      link: 'https://www.gub.uy/'
    }
  ],
  requirements: [
    {
      title: 'Cedula de Identidad',
      explanation: 'The Uruguayan national identity card, issued by the Direccion Nacional de Identificacion Civil. You can apply for a temporary "Cedula en Tramite" as soon as your residency process begins, which functions as a valid ID while the permanent card is processed.',
      importance: 'The cedula is your primary identification for everything in Uruguay: banking, healthcare enrollment, employment, signing contracts, and even supermarket loyalty programs. Apply for the temporary version immediately after starting residency proceedings. The permanent cedula can take months to arrive, but the temporary version is fully functional.',
      link: 'https://www.gub.uy/tramites/cedula-identidad'
    },
    {
      title: 'Health Card (Carne de Salud)',
      explanation: 'An official health certificate obtained after a basic medical examination at an authorized clinic. The exam includes blood tests, chest X-ray, vision test, and general checkup.',
      importance: 'The Carne de Salud is mandatory for both residency applications and formal employment. It certifies that you have completed required medical checks. Valid for one year and must be renewed. The examination can be completed at ASSE (public) or private clinics for approximately USD 30-50.',
      link: 'https://www.gub.uy/ministerio-salud-publica/'
    },
    {
      title: 'Apostilled Birth Certificate',
      explanation: 'Your official birth certificate from your country of origin, apostilled under the Hague Convention and translated into Spanish by a certified translator (traductor publico) registered in Uruguay.',
      importance: 'This is the foundational document for your residency application. Without it, the process cannot proceed. The apostille must come from the competent authority in your country of birth, and the Spanish translation must be done by a Uruguayan-registered translator, not one from another country.',
      link: 'https://www.gub.uy/'
    },
    {
      title: 'BPS Registration (Social Security)',
      explanation: 'The Banco de Prevision Social (BPS) is Uruguay\'s social security institution. All employees and self-employed individuals must register and make contributions covering retirement, healthcare, and other social benefits.',
      importance: 'BPS contributions fund your access to Uruguay\'s healthcare system through a mutualista (private health provider within the public framework) and build retirement credits. Your employer handles registration for employed workers; self-employed individuals register independently. Contributions are approximately 15% of income for employees.',
      link: 'https://www.bps.gub.uy/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Uruguay's economy is small, services-oriented, and relationship-driven. Key sectors include agriculture and agribusiness (beef, soy, dairy), technology (Uruguay has a growing tech scene centered in Montevideo's Zonamerica free trade zone), financial services, and tourism. The job market is tight, and hiring processes are conservative by international standards. Spanish is essential for virtually all local roles.",
    whereToLook: [
      "LinkedIn",
      "Buscojobs Uruguay",
      "Computrabajo Uruguay",
      "Zonamerica company career pages (tech and BPO)",
      "Personal networks and industry contacts (critical in Uruguay's small market)"
    ],
    realityChecks: [
      "Spanish (Rioplatense dialect) is non-negotiable for local employment. English-only roles are extremely rare outside multinational companies.",
      "Local experience and personal references are valued more than international credentials. Building a network takes time but is essential.",
      "Many positions are filled through word of mouth before being publicly advertised.",
      "The tech sector in Montevideo is growing and offers the best opportunities for international professionals, with companies like MercadoLibre, Globant, and dLocal headquartered here."
    ]
  },
  salaryReality: {
    overview:
      "Average salaries in Uruguay are modest by international standards, with the minimum wage around UYU 22,000/month (approximately USD 550). Professional salaries in Montevideo range from UYU 50,000-150,000/month depending on the sector. The 11-year tax exemption on foreign passive income makes Uruguay particularly attractive for retirees and passive income earners rather than local salary earners.",
    realityChecks: [
      "Net salaries are reduced by social security contributions (BPS) of approximately 15% for employees, plus income tax (IRPF) which is progressive from 0-36%.",
      "The cost of living is high relative to local wages; imported goods, electronics, and gasoline are particularly expensive.",
      "The Uruguayan Peso fluctuates against the USD, affecting purchasing power for those earning locally.",
      "Public services (healthcare, education) are well-established and reduce the need for private spending in some areas."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "BPS social security deductions and IRPF income tax reducing gross to net by 25-40%",
      "Very high cost of imported consumer goods due to import duties (electronics can cost 50-100% more than in the US)",
      "Seasonal cost variations (Punta del Este prices in summer are dramatically higher)",
      "Health insurance costs through mutualista system (partially covered by BPS contributions)"
    ]
  },
  housingSystem: {
    overview:
      "Montevideo's rental market is functional but requires patience. Popular neighborhoods include Pocitos and Punta Carretas (upscale, near the Rambla waterfront), Ciudad Vieja (historic center, revitalizing), Cordon and Parque Rodo (more affordable, bohemian), and Carrasco (quiet, suburban, near the airport). Punta del Este on the coast is a seasonal resort town where prices fluctuate dramatically between summer and winter. Rental contracts typically require a garantia (guarantee), which is the biggest hurdle for newcomers.",
    expectations:
      "The garantia system is Uruguay's rental guarantee requirement: landlords typically require either a bank guarantee (garantia bancaria), a property guarantee from someone who owns real estate in Uruguay, or insurance from companies like Porto Seguro or ANDA. This can be the single biggest practical obstacle for newcomers without local connections. Furnished apartments for shorter stays are available through platforms like Infocasas and MercadoLibre. Expect deposits of one to two months' rent. Utilities (agua, luz, gas) are billed separately and can be surprisingly expensive."
  },
  healthcareReality:
    "Uruguay has a well-structured healthcare system that blends public and private provision through the Sistema Nacional Integrado de Salud (SNIS). Most residents are enrolled in a mutualista (private health cooperative) funded through BPS social security contributions. Major mutualistas include Hospital Britanico, Medica Uruguaya, CASMU, and Asociacion Espanola. The system provides comprehensive coverage including GP visits, specialist referrals, hospital stays, and prescription drugs. ASSE (Administracion de los Servicios de Salud del Estado) runs the public hospital network for those without mutualista coverage. Quality is generally good, with Montevideo offering the best facilities. Hospital Britanico and Hospital Italiano are particularly well-regarded. Wait times for specialists can be weeks, and serious cases may occasionally be referred to Buenos Aires for specialized treatment. Pharmacies are widespread and prescription medications are affordable.",
  digitalLife: {
    overview:
      "Uruguay is one of the most digitally advanced countries in Latin America, thanks in part to the Plan Ceibal initiative that gave every schoolchild a laptop. Internet penetration is high, Antel (the state telecoms company) provides reliable fiber optic coverage in urban areas, and digital banking is growing. The government's Gub.uy portal centralizes many administrative services online.",
    essentials: [
      "Cedula de Identidad (required for virtually all digital registrations)",
      "Gub.uy portal (government services, appointments, and procedures)",
      "Antel or Movistar mobile data plan",
      "BROU, Itau, or Santander mobile banking app"
    ],
    whatSurprisesNewcomers: [
      "The garantia (rental guarantee) system requires navigating insurance or banking processes that have no equivalent in most countries.",
      "Despite good digital infrastructure, many bureaucratic processes still require physical presence at government offices with paper documents.",
      "Banking feels conservative compared to European or North American neobanks; account opening and wire transfers can be slow.",
      "WhatsApp is the default communication channel for everything from doctor appointments to landlord negotiations."
    ]
  },
  culture: {
    text: "Uruguayan culture is defined by modesty, egalitarianism, and the ritual of mate. Carrying a thermos of hot water and a gourd of mate throughout the day is not a habit but an identity; it accompanies every conversation, work break, and beach outing. The Rambla, Montevideo's 22-kilometer waterfront promenade, is the city's communal living room where people walk, run, drink mate, and watch sunsets. Asado (wood-fired barbecue) is a weekly ritual, typically on Sundays, where families and friends gather for hours around the grill. Uruguayans are warm but not effusive; they value sincerity over charm and substance over flash. The culture is secular (Uruguay was one of the first countries in the Americas to separate church and state), tolerant (legal cannabis for residents, same-sex marriage since 2013, strong women's rights), and quietly proud. The rivalry with Argentina is real but affectionate; do not confuse the two countries or assume they are the same.",
    highlights: [
      "Mate is sacred. Never touch the bombilla (metal straw) when it is passed to you in a circle; drink the entire serving and pass it back. Refusing mate is refusing connection.",
      "Asado on Sunday is a weekly institution. Beef is excellent and central to the culture. Learning basic asado etiquette (do not touch the grill unless you are the asador) shows respect.",
      "The gaucho tradition is alive in the Uruguayan interior, with estancias (ranches), horse riding, and the Fiesta de la Patria Gaucha in Tacuarembo celebrating rural culture every March.",
      "Greeting with a single kiss on the cheek is standard for both men and women, even in professional settings. A handshake alone can feel cold.",
      "Candombe drumming, an Afro-Uruguayan tradition born from the country's African heritage, fills the streets of Barrio Sur and Palermo every Sunday and during Carnival. It is a UNESCO Intangible Cultural Heritage."
    ]
  },

  transportationMobility:
    "Montevideo's public transport is bus-based, operated by several private companies under the CUTCSA umbrella. The system is affordable (approximately UYU 50 per ride) and covers the city extensively, though buses can be crowded and schedules are not always precise. The STM card (tarjeta STM) is the rechargeable transit card used for all urban buses. There is no metro or tram system. Taxis are metered and relatively affordable; Uber operates in Montevideo and is widely used. Intercity travel relies on bus companies like COT, Turil, and Nunez, connecting Montevideo to Punta del Este (2 hours), Colonia del Sacramento (2.5 hours), and other cities. Roads are generally well-maintained on major routes but deteriorate in rural areas. Car ownership is common but expensive due to high import duties on vehicles (a basic car costs 50-100% more than in the US or Europe).",

  internationalConnectivity:
    "Carrasco International Airport (MVD) in Montevideo handles the majority of international traffic, with direct flights to Buenos Aires (Buquebus ferry is also popular, taking 2-3 hours to Colonia and then a bus to Montevideo), Sao Paulo, Lima, Santiago, Panama City, and Madrid. LATAM, Aerolineas Argentinas, Copa Airlines, and Air Europa are the main carriers. For destinations beyond the Americas, connecting through Buenos Aires, Sao Paulo, or Panama is standard. The Buquebus catamaran ferry to Buenos Aires is a popular and scenic option for quick cross-river trips. Flight times are approximately 2.5 hours to Sao Paulo, 13 hours to Madrid, and connections to North America typically require a stop.",

  travelExploration:
    "Uruguay is compact and easy to explore. Punta del Este, the glamorous beach resort, transforms from sleepy off-season town to South American St. Tropez every December through February. Colonia del Sacramento (UNESCO World Heritage) is a beautifully preserved Portuguese colonial town on the Rio de la Plata, popular for day trips. Jose Ignacio, a small fishing village turned luxury destination, offers quieter beaches and excellent restaurants. The interior offers rolling green countryside, estancias for horseback riding and gaucho culture, and the Quebrada de los Cuervos nature reserve. Cabo Polonio, an off-grid beach village accessible only by 4x4, provides a unique back-to-nature experience. Wine country around Canelones and the Tannat grape variety (Uruguay's signature wine) is emerging as a destination.",

  considerations: [
    "High Cost of Living: Despite Uruguay's reputation as affordable South America, everyday costs are often comparable to or higher than Western Europe. Groceries, dining out, electronics, fuel, and imported goods are expensive due to import duties and the small domestic market. Budget carefully, especially if earning in Uruguayan Pesos.",
    "Winter Discomfort: Uruguayan winters (June-August) are damp and chilly (5-12 Celsius), and most homes lack central heating. Electric heaters and space heaters are the norm, and heating costs can be significant. Mold and dampness in older buildings are common.",
    "Bureaucratic Pace: Uruguayan bureaucracy is friendly, polite, and genuinely unhurried. Residency processing can take 12-24 months. Banking procedures are slow. Government offices close early. Adopt the 'tranquilo' mindset or you will be frustrated constantly.",
    "Cannabis Regulations: Cannabis is legal for registered Uruguayan residents only. Foreigners cannot legally purchase from pharmacies or cannabis clubs, even with residency in process. The rules are specific and still evolving; consumption by tourists remains technically illegal.",
    "Geographic Isolation: Uruguay is far from major global hubs. Flying to Europe takes 12+ hours with connections. Even Buenos Aires, the nearest major city, requires either a short flight or a ferry plus bus. This isolation provides peace but can feel constraining over time."
  ],

  mistakes: [
    "Comparing Uruguay to Argentina constantly. While they share a language dialect and river, Uruguayans have a distinct national identity and a friendly but real rivalry with their larger neighbor. Treating Uruguay as 'small Argentina' is dismissive.",
    "Expecting tropical beaches in Montevideo. The Rio de la Plata in Montevideo is brown river water, not ocean. For proper ocean beaches, head east to Punta del Este, La Paloma, or Rocha department.",
    "Being loud or flashy. Uruguayans are understated and soft-spoken. Ostentatious behavior, name-dropping, or showing off wealth is socially frowned upon and will distance you from locals.",
    "Rushing meals or social gatherings. Dining is a slow, extended affair, particularly the Sunday asado. Trying to speed through a meal signals disrespect for the social ritual.",
    "Assuming everything will be open on Sundays. Many shops close on Sundays, and those that open may have limited hours. Supermarkets in shopping malls are the most reliable option."
  ],

  emergency: [
    {
      number: '911',
      service: 'Integrated Emergency System (Police, Fire, Ambulance)',
      description: 'Uruguay\'s unified emergency number connecting to police, fire, and ambulance services. Operators speak Spanish.'
    },
    {
      number: '104',
      service: 'Fire Department (Bomberos)',
      description: 'Direct fire department dispatch for fires, rescues, and hazardous material incidents.'
    },
    {
      number: '105',
      service: 'Ambulance (ASSE/Public Health Emergency)',
      description: 'Public health emergency ambulance service. Private mutualistas also operate their own ambulance services for enrolled members.'
    }
  ],
  sources: [
    {
      name: 'Live In Uruguay',
      category: 'Immigration & Relocation',
      description: 'Official government portal specifically designed for prospective immigrants, covering residency, work permits, digital nomad visa, and practical settling-in information.',
      link: 'https://www.liveinuruguay.uy/'
    },
    {
      name: 'Gub.uy (Government Portal)',
      category: 'Government Services',
      description: 'Central government portal for all administrative procedures, including cedula applications, tax registration, and public service access.',
      link: 'https://www.gub.uy/'
    },
    {
      name: 'Direccion General de Asuntos Consulares',
      category: 'Visa & Consular',
      description: 'Ministry of Foreign Affairs division handling visa applications, consular services, and international agreements.',
      link: 'https://www.gub.uy/ministerio-relaciones-exteriores/'
    },
    {
      name: 'Uruguay Natural (Ministry of Tourism)',
      category: 'Tourism',
      description: 'Official tourism portal with information on destinations, events, and practical travel advice across Uruguay.',
      link: 'https://uruguaynatural.com/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Uruguay, consult the Ministry of Foreign Affairs or a Uruguayan embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/uruguay',
    mfaLink: 'https://www.gub.uy/ministerio-relaciones-exteriores/'
  },
  serviceDirectory: {
    title: "Service Directory - Uruguay",
    description: "Examples of commonly used service providers people often interact with when relocating to Uruguay.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal professionals assisting with residency applications, visas, cedula processing, and long-term stay compliance.",
        providers: [
          { name: "Ferrere Abogados", link: "https://www.ferrere.com" },
          { name: "Guyer & Regules", link: "https://www.guyer.com.uy" },
          { name: "Posadas, Posadas & Vecino", link: "https://www.ppv.com.uy" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms handling long-term rentals, property purchases, and garantia navigation.",
        providers: [
          { name: "Infocasas", link: "https://www.infocasas.com.uy" },
          { name: "MercadoLibre Inmuebles Uruguay", link: "https://inmuebles.mercadolibre.com.uy" },
          { name: "RE/MAX Uruguay", link: "https://www.remax.com.uy" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Tax advisors and accounting firms experienced with Uruguayan tax residency, foreign income exemptions, BPS contributions, and IRPF compliance.",
        providers: [
          { name: "PwC Uruguay", link: "https://www.pwc.com/uy" },
          { name: "Deloitte Uruguay", link: "https://www2.deloitte.com/uy" },
          { name: "KPMG Uruguay", link: "https://kpmg.com/uy" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and regional relocation services covering shipping, customs clearance, and destination support.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "Transmodal Uruguay", link: "https://www.transmodal.com.uy" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Spanish language schools and integration resources for newcomers learning Rioplatense Spanish.",
        providers: [
          { name: "Universidad de la Republica - Spanish Programs", link: "https://www.udelar.edu.uy" },
          { name: "Alianza Cultural Uruguay-USA", link: "https://www.alianza.edu.uy" },
          { name: "Instituto Cultural Anglo-Uruguayo", link: "https://www.anglo.edu.uy" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Mutualistas and hospitals commonly used by residents and expatriates within the SNIS healthcare framework.",
        providers: [
          { name: "Hospital Britanico de Montevideo", link: "https://www.hospitalbritanico.org.uy" },
          { name: "Medica Uruguaya", link: "https://www.medicauruguaya.com.uy" },
          { name: "CASMU", link: "https://www.casmu.com.uy" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Platforms connecting professionals with employers in Uruguay's local and international job market.",
        providers: [
          { name: "Buscojobs Uruguay", link: "https://www.buscojobs.com.uy" },
          { name: "Computrabajo Uruguay", link: "https://www.computrabajo.com.uy" },
          { name: "Manpower Uruguay", link: "https://www.manpower.com.uy" }
        ]
      }
    ]
  }
};