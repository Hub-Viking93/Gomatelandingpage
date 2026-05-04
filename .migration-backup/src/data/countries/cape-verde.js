export const capeVerde = {
  id: 'cape-verde',
  slug: 'cape-verde',
  name: 'Cape Verde',
  region: 'Africa',
  complexity: 'Low',
  languages: ['Portuguese', 'Cape Verdean Creole (Kriolu)'],
  shortDescription: 'An Atlantic archipelago of ten islands blending Lusophone heritage, Creole culture, and a relaxed, morabeza way of life.',
  heroImage: 'https://images.unsplash.com/photo-1714829732365-0bafe95eaaeb',
  flagAlt: 'Flag of Cape Verde',
  atAGlance: "Cape Verde (Cabo Verde) is an archipelago of ten volcanic islands roughly 570 km off the West African coast, politically one of the most stable democracies on the continent and culturally a bridge between Africa, Portugal, and the Atlantic diaspora. The population of about 600,000 is matched by an even larger global diaspora - there are more Cape Verdeans in the Boston area, Rotterdam, Lisbon, and parts of France than on the islands themselves - and remittances from abroad remain a structural pillar of the economy. Praia, on the island of Santiago, is the capital and largest city; Mindelo on São Vicente is the cultural heart, home to the music that Cesária Évora carried to the world; Sal and Boa Vista in the Barlavento group are where most tourism and the emerging digital nomad community concentrate, with flat desert landscapes, long beaches, and year-round flight connections. Santo Antão is the country's hiking jewel, with green mountain valleys accessed by ferry from São Vicente. The country is Portuguese-speaking in formal settings (education, government, business), but daily life runs in Cape Verdean Creole (Kriolu), which varies by island and is the true language of the home, the street, and music. The Cape Verdean Escudo (CVE) is pegged to the euro at 110.265, which anchors prices and reduces FX risk compared to most African peers. Payment life mixes card networks (including the local Vinti4 network) and mobile banking. The country launched 'Remote Working Cabo Verde' - a digital nomad visa - in 2022, adding a formal pathway to a long-standing informal expatriate scene. The vibe is captured in the word 'morabeza' - a Creole concept of sweet, easy hospitality that is the island equivalent of Teranga or Ubuntu.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 30 days (with EASE pre-registration for most)',
    costOfLiving: 'Medium',
    primaryLanguages: 'Portuguese (Official), Cape Verdean Creole (Kriolu)',
  },
  visas: [
    {
      name: 'TASA / EASE Pre-Registration (Airport Security Tax)',
      targetAudience: 'Visa-Exempt Tourists (EU + 30 nationalities)',
      useCase: "Since 2019, citizens of the EU/EEA, UK, US, Canada, Switzerland, and around 30 other nationalities no longer need a tourist visa for stays up to 30 days. Instead they pre-register via the EASE platform and pay the TASA (Taxa de Segurança Aeroportuária / airport security tax) of approximately EUR 31-34, issued electronically within 24-48 hours. This effectively replaces short-stay tourist visas for the eligible list.",
      duration: 'Up to 30 days per entry',
      link: 'https://www.ease.gov.cv/'
    },
    {
      name: 'EASE eVisa (Non-Eligible Nationalities)',
      targetAudience: 'Tourists from Non-TASA Countries',
      useCase: "Travellers from nationalities outside the TASA visa-waiver list apply for a full short-stay eVisa via the same EASE portal. Requires passport scan, travel itinerary, accommodation proof, and the eVisa fee. Processing is digital and typically completed within several business days, avoiding the need for embassy appointments in countries with no Cape Verdean consular presence.",
      duration: 'Up to 30 days (single or multiple entry)',
      link: 'https://www.ease.gov.cv/'
    },
    {
      name: 'CPLP Lusophone Mobility Pathway',
      targetAudience: 'Citizens of CPLP Countries (Brazil, Portugal, Angola, Mozambique, etc.)',
      useCase: "Members of the Community of Portuguese Language Countries (CPLP) benefit from preferential entry, residence, and labour-market access under bilateral and CPLP-wide mobility agreements. Brazilians, Portuguese, Angolans, Mozambicans, Bissau-Guineans, São Toméans, and Timorese can typically access fast-tracked residence and work authorisation, with ongoing reforms expanding free movement across CPLP states.",
      duration: 'Tied to chosen residence category; long-term renewable',
      link: 'https://www.cplp.org/'
    },
    {
      name: 'Remote Working Cabo Verde (Digital Nomad Visa)',
      targetAudience: 'Remote Workers, Freelancers',
      useCase: "Launched in 2022 for non-EU remote workers earning income from outside Cape Verde. Requires proof of income (typically EUR 1,500+/month for individuals, higher for families), valid health insurance, and a clean criminal record. Applications are processed via Cabo Verde TradeInvest and the remote working program portal, with Sal and Boa Vista being the primary nomad hubs.",
      duration: '6 months, renewable for another 6 months',
      link: 'https://remoteworkingcv.com/'
    },
    {
      name: 'TradeInvest Investor Permit',
      targetAudience: 'Investors, Business Founders',
      useCase: "Cabo Verde TradeInvest is the national investment promotion agency channeling foreign investors into qualifying capital commitments, tourism developments, real estate, and business formation. Successful investors receive residence rights tied to the investment, with priority sectors including tourism, blue economy, renewable energy, and the international financial centre. The EUR-pegged escudo and political stability are core selling points.",
      duration: '1 year initially, renewable; permanent residency after 5 years',
      link: 'https://cvtradeinvest.com/'
    },
    {
      name: 'Work Permit (Direção-Geral do Trabalho)',
      targetAudience: 'Employed Professionals',
      useCase: "Foreign employees of Cape Verdean companies require a work authorization issued through the Direção-Geral do Trabalho, with residence permit tied to the employer. The employer typically leads the paperwork on the island where the business is registered, with Praia (Santiago), Mindelo (São Vicente), and Sal being the dominant employment locations.",
      duration: 'Tied to employment contract',
      link: 'https://www.mai.gov.cv/'
    }
  ],
  requirements: [
    {
      title: 'Residence Permit (Autorização de Residência)',
      explanation: "The physical residence card issued by DGEF for long-term foreign residents. Categories cover employees, investors, family members, retirees, and remote workers under the RWCV program. Issued after biometric capture and dossier review.",
      importance: "The residence permit is required for opening a full-function bank account, registering a vehicle, enrolling children in school, and for extended stays beyond the EASE/visa-free window. Renewals are filed locally on the island where you are resident.",
      link: 'https://www.mai.gov.cv/'
    },
    {
      title: 'NIF (Número de Identificação Fiscal)',
      explanation: "The Tax Identification Number is issued by the Direção Nacional de Receitas do Estado (DNRE) and is required for most formal transactions - opening a bank account, signing a lease, registering utilities, buying property, or invoicing as a freelancer.",
      importance: "As in Portugal, NIF is a gatekeeper to everyday administrative life. Foreign residents obtain NIF early - often as one of the first steps after arrival - and use it across banking, housing, and tax filings.",
      link: 'https://portaldasfinancas.gov.cv/'
    },
    {
      title: 'Local Bank Account and Vinti4 Card',
      explanation: "Opening a Cape Verdean bank account requires your passport, NIF, residence permit or valid visa, and proof of address. Major banks include Banco Comercial do Atlântico (BCA), Caixa Económica de Cabo Verde, Banco Interatlântico, and Banco Angolano de Investimentos (BAI). Most debit cards issued locally are on the Vinti4 network, the national card system.",
      importance: "Vinti4 is the domestic card and ATM network - it works seamlessly at Cape Verdean merchants and ATMs, and many rental, utility, and government payments assume a Vinti4 card. International cards (Visa, Mastercard) work at most tourist-facing points but are less universal inland; having a local Vinti4 card removes friction. The escudo's EUR peg makes cross-border budgeting predictable.",
      link: 'https://www.bcv.cv/'
    },
    {
      title: 'Proof of Address and Utility Setup',
      explanation: "Utility providers include Electra (electricity and water on most islands) and telecom providers CVTelecom, Unitel T+, and Cabo Verde Telecom subsidiaries. Setting up utilities requires your residence documentation, NIF, and a signed rental contract.",
      importance: "Utility bills in your name serve as practical proof of address for banking, permit renewals, and child enrolment at school. Given the country's island geography, water supply can be intermittent on some islands - rooftop tanks (cisternas) are common and should be checked before signing a lease.",
      link: 'https://www.electra.cv/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Cape Verde's economy is small and island-constrained, dominated by tourism (especially Sal and Boa Vista), fisheries, light manufacturing, logistics, and public administration. The diaspora remittance economy remains structurally significant. Most expatriate professionals either arrive under the Remote Working Cabo Verde program with foreign-source income, retire here, or work in tourism, international development (UN, EU, Luso-African development finance), and hospitality management. Portuguese is the language of work and formal communication.",
    whereToLook: [
      "LinkedIn (limited but growing presence of Cabo Verdean employers)",
      "Remote Working Cabo Verde portal and associated partner networks",
      "Career pages of CV Telecom, TACV/Cabo Verde Airlines, Electra, and major hotel groups (Melia, Riu, Iberostar)",
      "Cabo Verde TradeInvest for investor and business-creation guidance",
      "UN Jobs and ReliefWeb for development roles based in Praia"
    ],
    realityChecks: [
      "The local salary scale is modest - mid-level professional roles in Praia typically pay CVE 80,000-250,000/month (EUR 725-2,265), with hotel management and senior technical roles higher.",
      "Remote workers earning European or North American income enjoy materially better purchasing power, which is why Remote Working Cabo Verde has grown rapidly.",
      "Tourism employment concentrates in Sal, Boa Vista, and São Vicente; corporate and public-sector roles concentrate in Praia.",
      "Networks - particularly through the diaspora - are the main on-ramp into informal and semi-formal employment for Portuguese-speaking incomers."
    ]
  },
  salaryReality: {
    overview:
      "Remote income from abroad combined with the EUR-pegged escudo gives foreign residents strong predictability. Local costs are higher than on the West African mainland because most consumer goods are imported by sea or air. Imported European groceries, fuel, and vehicles carry premiums; local fish, fruit, and grogue (local cane spirit) are affordable.",
    realityChecks: [
      "Personal income tax (IRPS) is progressive; INPS (social security) deductions apply to employment income.",
      "Rent for a modern two-bedroom apartment in Praia's Achada Santo António or Palmarejo typically runs CVE 80,000-180,000/month (EUR 725-1,630); Sal beachfront areas (Santa Maria) and Mindelo are similar to higher.",
      "Imported goods are noticeably more expensive than in Portugal; electronics, cars, and construction materials are the most affected.",
      "Many expatriates maintain private international health insurance for off-island medical access (typically Lisbon), even when resident."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Ferry or inter-island flight costs for life across multiple islands (e.g., Santiago-São Vicente-Sal), which are a structural line item",
      "Water cistern top-ups and generator/solar backup costs on islands with intermittent supply",
      "International school fees (International School of Cape Verde, Escola Portuguesa) in the low-to-mid five figures EUR per year",
      "Evacuation or specialist-care travel to Lisbon for advanced medical needs, which most international insurance plans cover"
    ]
  },
  housingSystem: {
    overview:
      "Rental stock varies dramatically across the islands. Praia has the broadest range of long-term apartments and villas across neighborhoods like Achada Santo António, Palmarejo, Prainha, and Cidadela. Mindelo (São Vicente) offers characterful colonial-era housing in the center plus modern apartments in Monte Sossego. Santa Maria and Espargos on Sal are oriented to tourism and short/medium-term rentals, with a growing stock for digital nomads. Boa Vista's Sal Rei is similar. Santo Antão, Fogo, Brava, and Maio are smaller local markets.",
    expectations:
      "Long-term leases are typically 6-12 months with 1-2 months' deposit plus first month's rent. Short-term furnished rentals through Airbnb, Booking, and local agencies are common on Sal, Boa Vista, and São Vicente for remote workers. Always verify the water situation (cistern capacity and delivery frequency) and electricity reliability before signing. Platforms include Imoveis Cabo Verde, Aldeia.cv, and local Facebook groups; WhatsApp-based agents are common on smaller islands. Utility transfer through Electra can take several visits - allow a few weeks."
  },
  healthcareReality:
    "Cape Verde's health system includes two central hospitals - Hospital Dr. Agostinho Neto in Praia and Hospital Dr. Baptista de Sousa in Mindelo - plus regional hospitals and health centers on the other islands. Care quality is reasonable for primary and secondary needs, but complex or specialist care often involves transfer to Portugal, typically under bilateral health cooperation arrangements. Most expatriates maintain private international health insurance (Cigna Global, Allianz Care, Bupa, or European national schemes with international coverage) to access faster local private clinics (Clinica Sagrada Esperança, Clinica Medis Praia, Clinic Dr. Arcangelo Barros) and evacuation to Lisbon if needed. Pharmacies (farmácias) are present on all main islands but stock can vary - bringing essential medications from abroad is prudent for long-term residents. Mosquito-borne illness risk is low compared to the mainland, but dengue outbreaks have occurred; standard precautions apply.",
  digitalLife: {
    overview:
      "Internet connectivity has improved sharply with submarine cables connecting the archipelago to Europe. Fibre is available in Praia, Mindelo, and parts of Sal and Boa Vista; 4G mobile is widespread and 5G is rolling out selectively. For digital nomads, co-working spaces in Santa Maria (Sal) and Mindelo offer reliable workspace. Starlink is permitted and used by some remote workers for redundancy.",
    essentials: [
      "CV Move (CVTelecom) or Unitel T+ SIM - essential for mobile data and OTP authentication",
      "Vinti4 debit card for domestic payments; most local merchants, bills, and ATMs default to this",
      "MobMoney and mobile banking apps from BCA, Caixa Económica, or BAI",
      "Co-working memberships in Santa Maria (Sal), Mindelo, and Praia for reliable workspace"
    ],
    whatSurprisesNewcomers: [
      "The diaspora shapes daily life - phone calls, remittances, and extended family communication with Boston, Lisbon, and Rotterdam are woven into every neighborhood.",
      "Vinti4 is the dominant card - many merchants accept Vinti4 but not international cards, so having a local debit card is practical rather than optional.",
      "Inter-island travel is a line item of life - ferries (CV Interilhas) and flights (TICV / Cabo Verde Airlines) schedule around weather and season, so build flexibility into plans.",
      "Water can be intermittent on some islands - cisterna management, reuse habits, and occasional tanker deliveries are part of normal housekeeping."
    ]
  },
  culture: {
    text: "Cape Verdean culture is Creole in the truest sense - a blend of West African, Portuguese, and Atlantic-diaspora elements that produced its own language (Kriolu), its own cuisine (cachupa, the national one-pot stew, plus fresh fish across every island), and one of the world's most distinctive musical traditions (morna made global by Cesária Évora, plus coladera, funaná, and batuque). 'Morabeza' - roughly, sweet hospitality - is the Cape Verdean self-description and is lived: strangers are welcomed, shared meals are generous, and pace is deliberately unhurried ('ta da nu tempo', giving it time). Religion is predominantly Roman Catholic with syncretic elements from African traditions, and patron-saint festivals on each island (Santa Cruz on Santiago, São João Baptista on Santo Antão) are major social events. Extended family across the islands and the diaspora forms the primary social unit. Music is inseparable from daily life - Kriolu radio, Friday night morna in Mindelo, and live performances on plazas everywhere. Bilingualism is the norm: Portuguese in school, government, and formal contexts; Kriolu at home, in markets, and when feelings get real.",
    highlights: [
      "Learn a few Kriolu greetings - 'bon dia', 'tudu dretu?' ('all good?') - even while using Portuguese formally. Locals appreciate the effort.",
      "Cachupa - a slow-cooked stew of corn, beans, and whatever meat or fish is available - is the national dish and eaten across classes and islands. Try it in both its rica (rich, with meat) and pobre (simple) versions.",
      "Morna is a UNESCO-listed intangible cultural heritage and an essential emotional key to the country. A night at a Mindelo bar with live morna is a cultural rite.",
      "Island identity matters - Santiago, São Vicente, Sal, Santo Antão, Fogo each have distinct characters, accents, and rivalries. Respect the differences.",
      "'Morabeza' is real - lean into slow, relationship-based interactions and you will find the country far easier to navigate than fast-paced approaches suggest."
    ]
  },
  transportationMobility:
    "Getting around Cape Verde is shaped by its ten-island geography. Inter-island travel uses a mix of domestic flights (TICV / Cabo Verde Airlines, Bestfly) connecting Praia, Sal, São Vicente, Boa Vista, and São Filipe (Fogo), plus the CV Interilhas ferry network for Santiago-Fogo-Brava and São Vicente-Santo Antão routes. Within islands, Santiago and São Vicente have the most developed transport; aluguers (shared minibuses) and hiaces serve local routes cheaply; taxis and ride-hailing (Uber is available in Praia) work for private transport. Sal and Boa Vista are compact and often explored by rental car or quad bike. Santo Antão is best experienced by a local driver due to mountain roads. Driving is on the right; roads on main corridors are generally reasonable but mountain and dirt roads require attention. Bicycles and walking work well in Mindelo and Santa Maria.",
  internationalConnectivity:
    "Cape Verde has multiple international gateways: Amílcar Cabral International Airport in Sal (SID), Nelson Mandela International Airport in Praia (RAI), Aristides Pereira International Airport in Boa Vista (BVC), and Cesária Évora Airport in São Vicente (VXE). Together they carry direct flights from Lisbon, Porto, Madrid, Paris, Amsterdam, Frankfurt, Brussels, London, Milan, Rome, Luxembourg, Boston (seasonally), and various African hubs. TAP Portugal, Cabo Verde Airlines, Iberia, Air France, KLM, TUI, and charter operators cover the European market. Flight time to Lisbon is roughly 4 hours; Boston roughly 6.5 hours. The country's mid-Atlantic position makes it a practical stepping stone between Europe, West Africa, Brazil, and North America.",
  travelExploration:
    "The ten-island geography is Cape Verde's superpower for exploration. Santiago offers Praia's historic center, Cidade Velha (a UNESCO World Heritage Site and the first European settlement in the tropics), and the Serra Malagueta hiking area. São Vicente and Mindelo offer cultural nightlife, jazz, and the gateway to Santo Antão. Santo Antão itself is a hiker's paradise - the Paúl valley, Cova crater, and Ponta do Sol are among West Africa's most spectacular landscapes. Fogo is dominated by the active Pico do Fogo volcano, climbed in a demanding day hike, with coffee and wine produced on its slopes. Sal and Boa Vista offer beach tourism, kite surfing, and dune landscapes. Maio and Brava are quieter, less-visited escapes. Inter-island travel is the norm for expatriates who stay long enough, and many settle into a primary island while keeping a secondary favorite.",
  considerations: [
    "Island geography matters in every life decision - choice of primary island shapes work, cost, community, healthcare access, and flight connections. Visit more than one before committing.",
    "Water on some islands is intermittent and supplied via rooftop cisterns; budget conservation habits and occasional tanker deliveries into monthly expenses.",
    "Healthcare for specialist and complex conditions often involves travel to Lisbon. International insurance with medical evacuation is strongly recommended.",
    "The EUR peg on the escudo provides strong budgeting stability but does not eliminate cross-border card fees; keep a mix of Vinti4 and international cards.",
    "The digital nomad (RWCV) program has specific income and documentation requirements; timelines are reasonable but carry enough buffer for document legalization from your home country."
  ],
  mistakes: [
    "Skipping the EASE pre-registration. Entry without it leads to avoidable airport friction and potential denial of boarding.",
    "Arriving without a Vinti4 card in plan. Not every merchant accepts international cards; setting up local banking early removes daily friction.",
    "Treating all islands as interchangeable. Sal and Santiago feel nothing like Santo Antão or Brava. Match island to lifestyle, work needs, and weather preferences.",
    "Underestimating inter-island logistics. Ferries and domestic flights are sometimes cancelled for weather - build flexibility into travel plans.",
    "Expecting Portugal-level public services. Cape Verde is stable and improving but is a small archipelago with real constraints; patience and relationship-building go far."
  ],
  emergency: [
    {
      number: '132',
      service: 'National Police (Polícia Nacional)',
      description: 'Primary police emergency number. Response times vary by island; fastest in Praia and Mindelo.'
    },
    {
      number: '131',
      service: 'Fire and Rescue (Bombeiros)',
      description: 'Fire and rescue services. Coverage is strongest on Santiago, São Vicente, Sal, and Boa Vista.'
    },
    {
      number: '130',
      service: 'Ambulance / Medical Emergency',
      description: 'Public ambulance dispatch. Private medical services on tourist islands often provide faster response for routine urgent care.'
    }
  ],
  sources: [
    {
      name: 'Ministério da Administração Interna (MAI)',
      category: 'Immigration & Residency',
      description: "Oversees immigration, border control, residence permits, and civil registration in Cape Verde.",
      link: 'https://www.mai.gov.cv/'
    },
    {
      name: 'Cabo Verde TradeInvest',
      category: 'Investment & Business',
      description: "National investment promotion agency for company formation, investor guidance, and sector information.",
      link: 'https://cvtradeinvest.com/'
    },
    {
      name: 'Remote Working Cabo Verde',
      category: 'Digital Nomad Program',
      description: "Official portal for the Remote Working Cabo Verde digital nomad visa program launched in 2022.",
      link: 'https://remoteworkingcv.com/'
    },
    {
      name: 'Banco de Cabo Verde (BCV)',
      category: 'Finance & Banking',
      description: "The central bank, authoritative source on the escudo, FX rules, and banking regulation.",
      link: 'https://www.bcv.cv/'
    }
  ],
  embassies: {
    description: "For consular assistance, passport services, and official guidance related to Cape Verde, consult the Cape Verdean Ministry of Foreign Affairs or a Cape Verdean embassy or consulate abroad.",
    directoryLink: 'https://www.embassypages.com/capeverde',
    mfaLink: 'https://www.mnec.gov.cv/'
  },
  serviceDirectory: {
    title: "Service Directory - Cape Verde",
    description: "Examples of commonly used service providers people often interact with when relocating to Cape Verde.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for residence permits, Remote Working Cabo Verde applications, and business-linked immigration.",
        providers: [
          { name: "RCB Advogados", link: "https://www.rcbadvogados.com" },
          { name: "AS Advogados Cabo Verde", link: "https://asadvogados.cv" },
          { name: "Carlos de Pina & Associados", link: "https://www.cpadvogados.cv" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms handling long-term rentals and sales across Praia, Mindelo, Sal, and Boa Vista.",
        providers: [
          { name: "Imoveis Cabo Verde", link: "https://www.imoveiscaboverde.com" },
          { name: "Aldeia.cv", link: "https://www.aldeia.cv" },
          { name: "RE/MAX Cabo Verde", link: "https://www.remax.cv" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Advisors familiar with Cape Verdean tax rules, RWCV compliance, and cross-border income for expatriates.",
        providers: [
          { name: "PwC Cabo Verde", link: "https://www.pwc.com/cv" },
          { name: "Deloitte Cabo Verde", link: "https://www2.deloitte.com/cv" },
          { name: "Moore Cabo Verde", link: "https://www.moore-global.com" }
        ]
      },
      {
        name: "Moving Companies",
        description: "Relocation providers shipping to Cape Verde's port network (Porto da Praia, Porto Grande in Mindelo) and handling island transfers.",
        providers: [
          { name: "AGS Movers Cabo Verde", link: "https://www.agsmovers.com" },
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "Transinsular Cabo Verde", link: "https://www.transinsular.cv" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Portuguese and Kriolu language schools and tutors for newcomers integrating into Cape Verdean life.",
        providers: [
          { name: "Instituto Camões Cabo Verde", link: "https://www.instituto-camoes.pt" },
          { name: "Alliance Française de Mindelo", link: "https://www.afmindelo.com" },
          { name: "Italki (Portuguese and Kriolu tutors)", link: "https://www.italki.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private clinics and hospitals commonly used by expatriates alongside international insurance schemes.",
        providers: [
          { name: "Clinica Sagrada Esperança", link: "https://www.sagradaesperanca.com" },
          { name: "Hospital Dr. Agostinho Neto", link: "https://www.hospitalagostinhoneto.cv" },
          { name: "Cigna Global (International Health)", link: "https://www.cignaglobal.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Platforms and networks connecting professionals with Cape Verdean employers and international organizations.",
        providers: [
          { name: "Empregos Cabo Verde", link: "https://www.empregoscv.com" },
          { name: "LinkedIn Cape Verde", link: "https://www.linkedin.com" },
          { name: "UN Jobs Cape Verde", link: "https://unjobs.org/duty_stations/cape-verde" }
        ]
      }
    ]
  }
};
