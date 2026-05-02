export const brazil = {
  id: 'brazil',
  slug: 'brazil',
  name: 'Brazil',
  region: 'Americas',
  complexity: 'High',
  languages: ['Portuguese'],
  shortDescription: 'A continental nation of rhythm, biodiversity, and warm hospitality.',
  heroImage: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325',
  flagAlt: 'Flag of Brazil',
  atAGlance: "Brazil is a continent-sized country of 215 million people where the warmth of human connection is matched only by the complexity of daily bureaucracy. It is a place defined by 'jeitinho brasileiro' — the creative Brazilian way of navigating around obstacles, whether that means finding an unofficial shortcut through paperwork or a neighbor who knows someone at the Cartório (notary office). People are extraordinarily warm, physical, and expressive: conversations involve touching, personal space is minimal, and a stranger can become a friend over one beer. Life happens outdoors — on beaches, in street markets (feiras), at churrascarias (barbecue restaurants), and in the countless botecos (casual bars) that line every neighborhood. However, Brazil is also a country of stark contrasts: modern skyscrapers next to favelas, world-class hospitals next to underfunded public clinics, and gated communities next to neighborhoods where safety is a daily concern. The bureaucracy (burocracia) is legendary — simple transactions often require multiple trips to government offices, notarized documents (firma reconhecida), and an almost philosophical patience. English is not widely spoken outside of international business circles and tourist areas, making Portuguese not just helpful but genuinely essential for survival and meaningful connection. The cost of living is moderate but highly variable: São Paulo and Rio de Janeiro are expensive by Latin American standards, while smaller cities and the Northeast offer significantly lower costs. Import taxes make electronics and imported goods extremely expensive — often double the US price. Despite all the challenges, people who adapt to the Brazilian rhythm consistently describe it as one of the most vibrant, joyful, and socially rich places they have ever lived.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 90 days',
    costOfLiving: 'Medium',
    primaryLanguages: 'Portuguese (English rare)',
  },
  visas: [
    {
      name: 'Digital Nomad Visa (VITEM XIV)',
      targetAudience: 'Remote Workers',
      useCase: 'For remote workers employed by or contracting with companies outside Brazil, earning a minimum of USD 1,500 per month. One of the first digital nomad visas in South America. You cannot work for Brazilian employers on this visa. Requires proof of income, health insurance, and a clean criminal record.',
      duration: '1 year (Renewable for 1 additional year)',
      link: 'https://www.gov.br/mre/pt-br'
    },
    {
      name: 'VITEM V (Work Visa)',
      targetAudience: 'Employed Professionals',
      useCase: 'For foreigners with a job offer from a Brazilian company. The employer must apply through the Coordenação-Geral de Imigração (CGIg) at the Ministry of Justice. The process is complex, document-heavy, and can take 2-4 months. The visa is tied to the sponsoring employer.',
      duration: 'Up to 2 years (Renewable)',
      link: 'https://www.gov.br/mre/pt-br/assuntos/portal-consular'
    },
    {
      name: 'Investment Visa (VIPER)',
      targetAudience: 'Investors and Entrepreneurs',
      useCase: 'For foreigners investing a minimum of BRL 500,000 in a Brazilian company or productive activity (reduced to BRL 150,000 for technology or innovation-focused ventures). Grants permanent residency subject to conditions.',
      duration: 'Permanent (subject to review)',
      link: 'https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil'
    },
    {
      name: 'Tourist Visa (VIVIS)',
      targetAudience: 'Tourists and Short-term Visitors',
      useCase: 'For citizens of countries requiring a visa to visit Brazil. Many nationalities (including EU, UK, US, Canada, Australia, Japan) are visa-exempt for up to 90 days. The stay can be extended once for an additional 90 days (total 180 days per year) through the Federal Police.',
      duration: 'Up to 90 days (extendable to 180)',
      link: 'https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil'
    },
    {
      name: 'Retirement Visa (VIPER - Aposentado)',
      targetAudience: 'Retirees',
      useCase: 'For foreign retirees receiving a pension or retirement income of at least USD 2,000 per month (transferred monthly to a Brazilian bank account). Grants permanent residency and allows the holder to sponsor dependents.',
      duration: 'Permanent',
      link: 'https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil'
    }
  ],
  requirements: [
    {
      title: 'CPF (Cadastro de Pessoas Físicas)',
      explanation: 'The Brazilian taxpayer registry number, issued by the Receita Federal (Federal Revenue Service). It is an 11-digit number that serves as your fiscal identity. You can apply at a Brazilian consulate abroad before traveling, at a Receita Federal office in Brazil, or through Banco do Brasil or Caixa Econômica Federal branches.',
      importance: 'The CPF is required for virtually everything in Brazil: opening a bank account, buying a SIM card, signing a rental lease, making purchases above a certain value, online shopping, booking bus tickets, entering some buildings, and filing taxes. Get it before you arrive if possible — it is the single most important document for daily life and the first step in any administrative process.',
      link: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-cpf'
    },
    {
      title: 'RNM / CRNM (Carteira de Registro Nacional Migratório)',
      explanation: 'The National Migration Registry Card, formerly known as RNE. This is the official identity document for foreign residents in Brazil. You must register with the Federal Police (Polícia Federal) within 90 days of arrival if you hold a residence visa. The process includes biometrics, photos, and document submission.',
      importance: 'The CRNM is your primary ID in Brazil and is required for employment, opening bank accounts, accessing certain government services, and proving your legal residence status. Processing times can take 2-6 months after application, during which you use the receipt (protocolo) as proof of pending registration.',
      link: 'https://www.gov.br/pf/pt-br/assuntos/imigracao'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening a Brazilian bank account requires your CPF, passport, proof of address (comprovante de residência), and sometimes proof of income. Major banks include Banco do Brasil, Itaú Unibanco, Bradesco, Santander Brasil, and digital banks like Nubank and Inter. Nubank is particularly popular with newcomers as its app is available in English and the account opening process is simpler.',
      importance: 'A Brazilian bank account is essential for receiving salary, paying rent (usually via boleto bancário or PIX), setting up utility payments, and accessing the PIX instant payment system that has become ubiquitous in Brazilian daily life. PIX transfers are free, instant, and accepted everywhere — from street vendors to hospitals. Many services, landlords, and employers require a Brazilian bank account.',
      link: 'https://www.bcb.gov.br/en'
    },
    {
      title: 'Carteira de Trabalho (Digital Work Booklet)',
      explanation: 'The digital work booklet (Carteira de Trabalho e Previdência Social - CTPS) that records your employment history in Brazil. It is now fully digital and accessible through the gov.br app or website. Required for any formal (CLT) employment.',
      importance: 'The Carteira de Trabalho tracks your labor rights, including FGTS (severance fund), INSS (social security contributions), vacation entitlements, and 13th salary. Without it, formal employment is not possible. The digital version is linked to your CPF and can be activated online.',
      link: 'https://www.gov.br/pt-br/servicos/obter-a-carteira-de-trabalho'
    }
  ],
  jobsAndIncome: {
    overview: "Brazil has the largest economy in Latin America, but the job market is heavily segmented between the formal sector (CLT contracts with full labor protections) and the informal sector (estimated at 40%+ of the workforce). Bureaucracy around formal employment is substantial — the CLT (Consolidação das Leis do Trabalho) provides extensive worker protections but also makes hiring expensive for employers. For foreigners, opportunities are concentrated in multinational companies, tech startups (São Paulo has Latin America's largest startup ecosystem), education, and the energy sector. Portuguese is essential for most local roles.",
    whereToLook: [
      "LinkedIn — the primary platform for professional, corporate, and international roles",
      "Catho (catho.com.br) — one of Brazil's largest job portals",
      "Vagas.com.br — major local job board with wide industry coverage",
      "Glassdoor Brasil — salary information and company reviews",
      "Remote-first platforms (Upwork, Toptal, Turing) for USD/EUR-paid work"
    ],
    realityChecks: [
      "Portuguese proficiency is non-negotiable for most local positions — even many multinational companies conduct daily operations in Portuguese.",
      "Formal employment (CLT) involves complex payroll obligations: 13th salary, vacation bonuses, FGTS deposits, INSS contributions, and meal/transport vouchers.",
      "The informal economy is vast, and many foreigners initially work informally, but this carries legal risks and provides no labor protections.",
      "São Paulo dominates the formal job market, with significantly more opportunities than any other city. Remote work for foreign employers (earning in USD/EUR) provides the best financial outcome."
    ]
  },
  salaryReality: {
    overview: "Brazilian salaries vary enormously by region, industry, and formality of employment. The minimum wage is approximately BRL 1,500 per month, and average formal-sector salaries in São Paulo hover around BRL 3,500-5,000 per month. Senior professionals at multinationals or in tech can earn BRL 15,000-30,000+. Income tax ranges from 7.5% to 27.5% depending on bracket, plus mandatory INSS social security contributions. Foreign currency income stretches much further — USD 3,000/month provides a comfortable lifestyle in most Brazilian cities.",
    realityChecks: [
      "Income tax (IRPF) plus INSS contributions can take 25-35% of gross salary for mid-to-high earners.",
      "The 13th salary (décimo terceiro) is mandatory — employers pay an extra month's salary split between November and December, which is a significant benefit.",
      "Wages differ dramatically by region: a good salary in São Paulo might be BRL 8,000, while the same lifestyle in Salvador or Fortaleza requires BRL 4,000-5,000.",
      "Foreign currency income (USD/EUR) earned remotely provides 3-5x the purchasing power of a comparable local salary, making Brazil extremely attractive for remote workers."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "INSS (social security) and IRPF (income tax) deductions that reduce take-home pay by 20-35%",
      "Private health insurance costs — essential for quality care, typically BRL 300-800 per month per person",
      "Transportation costs and commute time in mega-cities like São Paulo, where 2-hour commutes are common",
      "The massive price premium on imported electronics and goods due to protectionist import taxes (often 60-100% above US/EU prices)"
    ]
  },
  housingSystem: {
    overview: "Brazil's rental market is relatively flexible and negotiable. In São Paulo, popular expat neighborhoods include Vila Madalena, Pinheiros, Itaim Bibi, Jardins, and Moema. In Rio de Janeiro, Leblon, Ipanema, Botafogo, and Flamengo are preferred. Furnished apartments (mobiliados) are widely available, especially in areas popular with foreigners. Monthly rent for a one-bedroom apartment ranges from BRL 2,000-4,000 in São Paulo's better neighborhoods and BRL 2,500-5,000 in Rio's Zona Sul.",
    expectations: "Rental contracts are typically 30 months under Brazilian tenancy law, though 12-month contracts are common in practice. Landlords usually require one of three guarantee options: a fiador (guarantor who owns property in the same city), a caução (deposit of 1-3 months' rent), or a seguro fiança (rental insurance policy). The fiador requirement is the biggest obstacle for newcomers — seguro fiança or larger deposits are the usual alternative. Negotiate directly; the rental market is less formalized than in Europe. Utility costs (água, luz, condomínio, internet) add BRL 500-1,000 monthly on top of rent."
  },
  healthcareReality: "Brazil has a dual healthcare system. The SUS (Sistema Único de Saúde) is the universal public system available free to all residents, including foreigners, funded by taxes. SUS quality varies enormously — public hospitals like Hospital das Clínicas in São Paulo and Hospital de Clínicas in Porto Alegre are excellent, while many smaller public facilities are overcrowded and underfunded with long wait times. The private system is world-class in major cities: Hospital Sírio-Libanês, Hospital Albert Einstein, and Hospital Oswaldo Cruz in São Paulo, and Copa D'Or and Samaritano in Rio are among the best hospitals in Latin America. Private health insurance (plano de saúde) costs BRL 300-800 per month per person and is considered essential by most expats and middle-class Brazilians. Many employers provide private health insurance as a standard benefit. Pharmacies (farmácias) are ubiquitous — Drogasil, Droga Raia, and Pague Menos are major chains — and many medications available only by prescription elsewhere can be purchased over the counter.",
  digitalLife: {
    overview: "Brazil is surprisingly digitally advanced in daily life. PIX (the Central Bank's instant payment system) has revolutionized transactions — it is free, instant, and used everywhere from street vendors to hospitals. WhatsApp is the dominant communication platform, used for everything from personal chat to business meetings to customer service. Digital banks like Nubank, Inter, and C6 Bank have simplified financial services enormously.",
    essentials: [
      "PIX — the instant payment system linked to your CPF, phone number, or email. Used universally for all transfers and payments.",
      "WhatsApp — essential for daily communication, business, customer service, and even government notifications",
      "gov.br app — central portal for federal government services, including digital work booklet and CPF management",
      "Nubank or Inter — digital bank accounts that are easier to open than traditional banks and provide free PIX transfers"
    ],
    whatSurprisesNewcomers: [
      "CPF is required for an astonishing range of daily activities: buying a SIM card, making online purchases, entering some office buildings, booking inter-city buses, and even some supermarket loyalty programs.",
      "PIX has made Brazil nearly cashless in urban areas — even street food vendors accept PIX payments via QR code.",
      "Government processes remain bureaucratic despite digital fronts — the gov.br portal handles some services online, but many still require in-person visits to Cartórios (notary offices) for document authentication.",
      "International credit cards are often declined or charged additional fees at Brazilian merchants. A local card or PIX is strongly preferred."
    ]
  },
  culture: {
    text: "Brazilian culture is defined by warmth, physicality, and a deep appreciation for relationships. People stand close, touch while talking, kiss on the cheek when meeting (one in São Paulo, two in Rio and most other cities), and the concept of personal space is much smaller than in Northern Europe or the US. Punctuality is flexible for social events — arriving 30-60 minutes late to a party is normal and expected (arriving on time might mean the host is still in the shower). Hygiene is paramount: Brazilians shower 1-2 times a day, brush teeth after every meal (including at work), and consider body odor a serious social offense. Food culture centers on rice and beans (arroz e feijão) eaten daily, massive family churrasco (barbecue) gatherings on weekends, and the ritual of late-afternoon cafezinho (small, strong, sweet coffee). Brazilian humor is self-deprecating and irreverent, and the ability to laugh at problems (rather than complain) is a cultural value.",
    highlights: [
      "Thumbs up (joia) is the universal Brazilian gesture for 'yes,' 'thanks,' 'okay,' 'hello,' and general approval. Use it constantly.",
      "Physical contact during conversation is normal and expected. Don't recoil if someone touches your arm, shoulder, or back while talking — it signals engagement, not invasion.",
      "Rice and beans (arroz e feijão) are eaten daily and are considered the foundation of a proper meal. Lunch is the biggest meal of the day, often lasting 1-2 hours.",
      "Do NOT flush toilet paper. Brazilian plumbing cannot handle it. Bins are provided in every bathroom for disposal.",
      "The 'OK' hand gesture (circle with thumb and index finger) is obscene in Brazil — equivalent to the middle finger. Use a thumbs up instead."
    ]
  },
  transportationMobility: "Public transport in Brazil varies dramatically by city. São Paulo has an extensive metro system (6 lines), CPTM commuter trains, and a massive bus network, but traffic congestion is legendary — 2-hour commutes are common. Rio de Janeiro has a smaller metro (3 lines), the BRT bus rapid transit system, and VLT light rail in the city center. Other major cities like Belo Horizonte, Recife, and Porto Alegre have smaller metro or light rail systems. Inter-city travel relies heavily on domestic flights (GOL, LATAM, Azul are the main carriers) due to the country's enormous size — São Paulo to Recife is a 3.5-hour flight. Long-distance buses (Viação Cometa, Expresso Brasileiro, Kaissara) are affordable and comfortable for medium distances. Ride-hailing via 99 (dominant locally) and Uber is widespread, affordable, and generally preferred over public buses for safety and convenience. Car ownership is common but involves high costs: fuel, insurance, IPVA (annual vehicle tax), and congestion.",
  internationalConnectivity: "São Paulo's Guarulhos Airport (GRU) is the primary international gateway, with direct flights to major cities across the Americas, Europe, Africa, and the Middle East via LATAM, GOL, TAP Portugal, Air France, Lufthansa, Emirates, and others. Rio de Janeiro's Galeão Airport (GIG) offers fewer international routes but serves as a secondary hub. Brasília and Recife handle some direct international flights. Flight times include 10 hours to Lisbon, 11 hours to Paris, 10 hours to New York, 12 hours to London, and 8 hours to Buenos Aires. Brazil's size means domestic flights are often necessary — São Paulo to Manaus (Amazon) is a 4-hour flight.",
  travelExploration: "Brazil is the fifth-largest country on Earth, and its geographic diversity is staggering. The Amazon rainforest covers the north, with Manaus as the gateway city. The Northeast (Nordeste) offers some of the best beaches in the world — Jericoacoara, Fernando de Noronha (UNESCO), Praia do Forte, and the Lençóis Maranhenses sand dunes. The Pantanal (world's largest tropical wetland) in Mato Grosso do Sul is South America's best wildlife destination. Iguaçu Falls on the Argentine border is one of the natural wonders of the world. The colonial towns of Minas Gerais (Ouro Preto, Tiradentes) offer Baroque architecture and renowned food culture. Chapada Diamantina and Chapada dos Veadeiros are stunning highland parks. Weekend trips from São Paulo to the beaches of Ubatuba, Ilhabela, or the wine country of Serra Gaúcha are popular escapes.",
  considerations: [
    "Safety: Personal security requires constant awareness in Brazilian cities. Never walk with your phone visible, avoid wearing expensive jewelry or watches, use ride-hailing apps (99, Uber) instead of walking alone at night, and be cautious in unfamiliar neighborhoods. 'Fique esperto' (stay alert) is the local mantra. That said, millions of people live safely by following common-sense precautions.",
    "Import Taxes: Brazil has some of the highest import duties in the world. Electronics, clothing, and consumer goods are often 60-100% more expensive than in the US or Europe. Bring your laptop, phone, and any expensive electronics with you. There is a USD 500 exemption for personal goods entering the country.",
    "Bureaucracy (Cartório Culture): Many simple transactions — rental contracts, power of attorney, affidavits, signature authentication (reconhecimento de firma) — require visits to a Cartório (notary office). Apostille and translation requirements for foreign documents add further complexity. Budget time and patience.",
    "Noise and Volume: Brazil is loud. Music plays everywhere — in taxis, shops, restaurants, and from neighbors. Conversations are animated and high-volume. Construction starts early. If you are noise-sensitive, choose your neighborhood carefully and invest in soundproofing.",
    "Health Insurance Quality: While SUS (public healthcare) exists, quality in most locations requires supplementary private insurance (plano de saúde). Expect BRL 300-800 per person per month for decent coverage. Some employers include this as a benefit."
  ],
  mistakes: [
    "Speaking Spanish instead of Portuguese. While the languages share similarities and Brazilians will generally understand you, defaulting to Spanish is perceived as lazy, disrespectful, or ignorant. Learn basic Portuguese before arriving — even imperfect attempts are deeply appreciated.",
    "Making the 'OK' hand gesture (circle with thumb and index finger). In Brazil, this is an obscene gesture equivalent to the middle finger. Use a thumbs up for approval or agreement.",
    "Wearing expensive jewelry, watches, or accessories in public. This makes you a target for theft, particularly in larger cities. Keep valuables hidden and use inexpensive watches and phone cases when out.",
    "Assuming Rio is the capital. Brasília has been the capital since 1960. This is a common error that marks you as uninformed. São Paulo is the financial capital, Rio is the cultural capital, and Brasília is the political capital.",
    "Trying to flush toilet paper. Brazilian plumbing systems in most buildings cannot handle paper. Disposal bins are always provided in bathrooms. This is universal, not just in older buildings."
  ],
  emergency: [
    {
      number: '190',
      service: 'Military Police (Polícia Militar)',
      description: 'For crimes in progress, immediate danger, and public safety emergencies. The primary emergency response force.'
    },
    {
      number: '192',
      service: 'SAMU (Emergency Medical Service)',
      description: 'Mobile emergency medical service (ambulance). Available 24/7 for medical emergencies across the country.'
    },
    {
      number: '193',
      service: 'Fire Department (Corpo de Bombeiros)',
      description: 'Fire, rescue, and civil emergency services. Also responds to flooding and structural collapse.'
    }
  ],
  sources: [
    {
      name: 'Gov.br (Federal Government Portal)',
      category: 'Government Services',
      description: 'Central portal for all Brazilian federal government services including CPF, immigration, work permits, and digital documents.',
      link: 'https://www.gov.br/pt-br'
    },
    {
      name: 'Federal Police (Polícia Federal)',
      category: 'Immigration',
      description: 'Authority responsible for foreigner registration, CRNM issuance, visa extensions, and border control.',
      link: 'https://www.gov.br/pf/pt-br/assuntos/imigracao'
    },
    {
      name: 'Receita Federal (Federal Revenue Service)',
      category: 'Tax & CPF',
      description: 'Authority responsible for CPF registration, income tax filing, customs declarations, and fiscal compliance.',
      link: 'https://www.gov.br/receitafederal/pt-br'
    },
    {
      name: 'Visit Brasil',
      category: 'Tourism & Travel',
      description: 'Official tourism portal with travel guides, destination information, and practical visitor guidance.',
      link: 'https://visitbrasil.com/en/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Brazil, consult the Brazilian Ministry of Foreign Affairs (Itamaraty) or a Brazilian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/brazil',
    mfaLink: 'https://www.gov.br/mre/en'
  },
  serviceDirectory: {
    title: "Service Directory - Brazil",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Brazil.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for visas, residency permits, CRNM registration, CPF setup, and immigration compliance in Brazil.",
        providers: [
          { name: "Fragomen Brazil", link: "https://www.fragomen.com" },
          { name: "Machado Meyer Advogados", link: "https://www.machadomeyer.com.br" },
          { name: "TozziniFreire Advogados", link: "https://www.tozzinifreire.com.br" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms assisting with long-term rentals, residential purchases, and relocation housing across Brazilian cities.",
        providers: [
          { name: "QuintoAndar", link: "https://www.quintoandar.com.br" },
          { name: "Lopes Imobiliária", link: "https://www.lopes.com.br" },
          { name: "ZAP Imóveis", link: "https://www.zapimoveis.com.br" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Brazilian tax residency, CPF/CNPJ obligations, payroll, and cross-border income reporting.",
        providers: [
          { name: "PwC Brazil", link: "https://www.pwc.com.br" },
          { name: "EY Brazil", link: "https://www.ey.com/pt_br" },
          { name: "KPMG Brazil", link: "https://kpmg.com/br" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including packing, shipping, customs clearance, and destination support.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Brazil", link: "https://www.agsmovers.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Portuguese language schools and courses for foreigners, from beginner conversation to business fluency.",
        providers: [
          { name: "IBEU (Instituto Brasil-Estados Unidos)", link: "https://www.ibeu.org.br" },
          { name: "PUC-SP Portuguese for Foreigners", link: "https://www.pucsp.br" },
          { name: "Caminhos Language Centre (Rio)", link: "https://www.cfrj.com.br" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private hospital networks and healthcare groups commonly used by residents and expatriates in major Brazilian cities.",
        providers: [
          { name: "Hospital Sírio-Libanês", link: "https://www.hospitalsiriolibanes.org.br" },
          { name: "Hospital Albert Einstein", link: "https://www.einstein.br" },
          { name: "Rede D'Or São Luiz", link: "https://www.rededorsaoluiz.com.br" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms and platforms connecting professionals with Brazilian employers and international companies.",
        providers: [
          { name: "Catho", link: "https://www.catho.com.br" },
          { name: "Vagas.com", link: "https://www.vagas.com.br" },
          { name: "Michael Page Brazil", link: "https://www.michaelpage.com.br" }
        ]
      }
    ]
  }
};
