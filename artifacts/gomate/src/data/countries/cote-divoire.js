export const coteDivoire = {
  id: 'cote-divoire',
  slug: 'cote-divoire',
  name: "Côte d'Ivoire",
  region: 'Africa',
  complexity: 'Medium',
  languages: ['French', 'Dioula', 'Baoulé'],
  shortDescription: "West Africa's fastest-growing economy and francophone business hub, blending lagoon skyline with deep-rooted cultural traditions.",
  heroImage: 'https://images.unsplash.com/photo-1601221656510-e23d747fec7c',
  flagAlt: "Flag of Côte d'Ivoire",
  atAGlance: "Côte d'Ivoire is the largest economy in francophone West Africa and the headquarters country of the African Development Bank. Since the end of the post-electoral crisis in 2011, the country has sustained one of the highest growth rates on the continent, rebuilt its infrastructure, and re-established Abidjan as the regional business capital. The political capital is Yamoussoukro - famous for the Basilica of Our Lady of Peace, one of the largest churches in the world - but virtually all commercial, diplomatic, and expatriate life is concentrated in Abidjan, the economic capital on the southern lagoon coast. Abidjan itself is a city of districts with very different personalities: Plateau is the downtown financial and government core; Cocody (and its sub-neighborhoods Deux Plateaux, Riviera, Angre) is where most diplomats, senior executives, and international families live; Marcory-Zone 4 is a mixed residential-commercial area popular with younger expatriates; Treichville is historic and dense; Yopougon is the sprawling, lively working-class heart of the city. French is the language of everything official and commercial, and Dioula is the lingua franca of the markets. English is useful at the African Development Bank, multinational HQs, and in the tech sector, but French is essential for daily life and bureaucracy. The CFA franc (XOF), pegged to the euro at 655.957, provides monetary stability shared across the eight UEMOA countries. Mobile money - Orange Money, MTN MoMo, and Wave in particular - has transformed daily payments, often replacing cash and cards outright. Bureaucracy retains a strong French colonial imprint: stamped documents, legalized copies, and in-person appointments are still the norm, and a good local fixer or lawyer is almost essential during setup.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 90 days (eVisa for most)',
    costOfLiving: 'Medium',
    primaryLanguages: 'French (Official), Dioula, Baoulé',
  },
  visas: [
    {
      name: 'eVisa (eVisitCI)',
      targetAudience: 'Tourists, Short-term Business Visitors',
      useCase: "Launched in 2015 as one of West Africa's earliest e-Visa systems, the SNEDAI-operated eVisitCI portal lets most non-ECOWAS travelers apply online before travel. The eVisa is pre-approved online and validated biometrically on arrival at Abidjan Félix-Houphouët-Boigny International Airport. Requires a passport valid for at least six months, proof of accommodation, return ticket, and yellow fever vaccination certificate.",
      duration: 'Up to 90 days (single or multiple entry)',
      link: 'https://www.snedai.com/evisa'
    },
    {
      name: 'ECOWAS Free Movement',
      targetAudience: 'Citizens of ECOWAS Member States',
      useCase: "Citizens of the fifteen ECOWAS countries (Nigeria, Ghana, Senegal, Mali, Burkina Faso, and others) enjoy visa-free entry, residence, and establishment rights in Côte d'Ivoire under the ECOWAS Protocol on Free Movement of Persons. Long stays require a simple registration at the local prefecture, and ECOWAS nationals can work for Ivorian employers without a separate work permit, making this one of the most generous regional regimes on the continent.",
      duration: 'Indefinite (subject to local registration)',
      link: 'https://www.ecowas.int/'
    },
    {
      name: 'Carte de Séjour + Work Authorization',
      targetAudience: 'Employed Professionals (Non-ECOWAS)',
      useCase: "Salaried foreign employees combine a Carte de Séjour issued by the Office National d'Identification (ONI) and Direction de la Surveillance du Territoire (DST) with an Autorisation de Travail filed by the Ivorian employer with the Ministère de l'Emploi. The employer must show the role fits within its approved expatriate quota, and approval is coordinated with CNPS social security registration. Dossier requires legalized rental contract, employment contract, medical certificate, criminal record, and yellow fever proof.",
      duration: '1 to 5 years tied to contract, renewable',
      link: 'https://oni.ci/'
    },
    {
      name: 'CEPICI Investor Pathway',
      targetAudience: 'Entrepreneurs, Foreign Investors',
      useCase: "The Centre de Promotion des Investissements en Côte d'Ivoire (CEPICI) operates a one-stop shop that lets foreign founders incorporate a SARL or SA, register for tax, and enrol with social security in a single bundled procedure - often within days. Investors qualifying under the Investment Code (Code des Investissements) benefit from customs and tax incentives during a multi-year exemption period. Once the company is active and the founder is listed as gerant, a business-linked Carte de Séjour follows.",
      duration: 'Residency tied to active business; tax incentives 5-15 years',
      link: 'https://www.cepici.gouv.ci/'
    },
    {
      name: 'French Bilateral Arrangements',
      targetAudience: 'French Nationals, Long-term French Residents',
      useCase: "French nationals benefit from longstanding bilateral agreements between France and Côte d'Ivoire dating to the post-independence cooperation framework. They are exempt from short-stay visa requirements, enjoy simplified Carte de Séjour procedures, and historically have favoured access to certain professional sectors. The Convention d'Établissement also facilitates corporate transfers and cross-recognition of certain professional qualifications - a key reason French companies and citizens remain heavily represented in Abidjan.",
      duration: 'Variable by category; typically 1-10 years',
      link: 'https://ci.ambafrance.org/'
    },
    {
      name: 'Carte Consulaire (Diaspora Card)',
      targetAudience: 'Ivorian-Origin Diaspora, Dual Nationals',
      useCase: "The Carte Consulaire is issued to Ivorians abroad and to descendants of Ivorian origin through Ivorian consulates. It documents diaspora status, eases re-entry and reintegration, and is increasingly used to support investment and property transactions by the diaspora. Holders engaging with the homeland often pair it with the Direction des Ivoiriens de l'Extérieur (DGIE) channels for diaspora-led projects and remittance-linked initiatives.",
      duration: 'Typically 5 years, renewable',
      link: 'https://diplomatie.gouv.ci/'
    }
  ],
  requirements: [
    {
      title: 'Carte de Séjour (Resident Card)',
      explanation: "The physical residence card issued by the Office National d'Identification (ONI) and the Direction de la Surveillance du Territoire. Issued after submission of a full dossier and biometric capture. Card categories vary by activity (employee, investor, family member, student).",
      importance: "The Carte de Séjour is the key identification document for all foreign residents. You need it to open a local bank account, register a vehicle, sign long-term leases, enrol children in school, and clear customs on household goods. Carry it at all times - identity checks are routine at police checkpoints, especially on intercity roads.",
      link: 'https://oni.ci/'
    },
    {
      title: 'Legalized Rental Contract (Contrat de Bail)',
      explanation: "Rental agreements for residence permit purposes must be signed, stamped, and registered with the Direction Générale des Impôts (DGI) to be recognized by the administration. The landlord typically handles the registration, but the tenant should verify it has happened and keep the stamped copy.",
      importance: "A registered rental contract is mandatory for the Carte de Séjour dossier and for installing utilities (CIE for electricity, SODECI for water) and internet in your own name. Unregistered informal agreements leave you without proof of address and without legal protection in a dispute.",
      link: 'https://www.dgi.gouv.ci/'
    },
    {
      title: 'Bank Account and Mobile Money',
      explanation: "Opening a bank account in Côte d'Ivoire requires your passport, Carte de Séjour (or receipt), legalized rental contract, and employment or business documentation. Major banks include Société Générale Côte d'Ivoire, Ecobank, NSIA Banque, BICICI (BNP Paribas), and Orange Bank Africa. In parallel, almost everyone uses Orange Money, MTN MoMo, or Wave for peer-to-peer payments, bill splits, and small merchant transactions.",
      importance: "Bank accounts denominated in CFA francs come with stable EUR-peg protection through the UEMOA monetary union, which reduces FX risk for European income. Mobile money, however, is the dominant day-to-day rail - most small businesses, taxi drivers, and service providers prefer Wave or Orange Money over cash or card. Setting up both in parallel saves significant friction.",
      link: 'https://www.bceao.int/'
    },
    {
      title: 'Tax Registration (Numéro de Compte Contribuable)',
      explanation: "Employed, self-employed, and investing foreign residents must obtain a Numéro de Compte Contribuable (NCC) from the Direction Générale des Impôts (DGI). Employees are typically registered through their employer; company founders register during the CEPICI one-stop-shop incorporation process.",
      importance: "The NCC is required for invoicing Ivorian clients, filing tax returns, registering a vehicle, and importing goods. Côte d'Ivoire's tax authority has digitized significantly in recent years via e-Impôts, but several procedures still require DGI visits and stamped declarations.",
      link: 'https://www.dgi.gouv.ci/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Côte d'Ivoire's formal economy is concentrated in Abidjan and spans banking and finance (regional HQs for several pan-African banks), telecoms (Orange, MTN, Moov Africa), agri-business (cocoa, coffee, rubber, cashew, palm oil), oil and gas, logistics, construction, and a rapidly growing tech scene. The African Development Bank headquarters in Plateau anchors a significant community of development professionals and multilaterals. French is the working language of almost every local and regional role; English is common at the AfDB, multinational HQs, and selected tech companies.",
    whereToLook: [
      "LinkedIn (primary channel for international and senior roles)",
      "Emploi.ci and Novojob (largest Ivorian job portals)",
      "Career pages of Orange CI, MTN CI, Société Générale, Ecobank, Olam, and CFAO",
      "African Development Bank (AfDB) careers portal and UNDP Jobs for development roles",
      "CEPICI (for investor and company-formation guidance and opportunities)"
    ],
    realityChecks: [
      "Local professional salaries are significantly below European levels - mid-level private sector roles typically pay XOF 500,000-1,500,000/month (EUR 760-2,290), with senior banking and oil and gas roles above that.",
      "Expatriate packages at multinationals often include housing, school fees, security, and medical cover on top of base salary; these allowances materially change the take-home picture.",
      "French is non-negotiable for most local roles. English-only candidates tend to land at the AfDB, select tech companies, diplomatic missions, or in remote roles for international employers.",
      "The expatriate employment quota applies to most sectors - employers must justify hiring foreign nationals relative to local talent availability, and work authorizations are tied to specific employers."
    ]
  },
  salaryReality: {
    overview:
      "Côte d'Ivoire pairs a stable EUR-pegged currency with relatively low wage levels, which makes remote income from Europe or North America go far locally while limiting purchasing power for those paid on pure local scales. The cost of living is noticeably higher than in other UEMOA countries because Abidjan is a regional hub and imports much of its consumer goods, packaged foods, and vehicles.",
    realityChecks: [
      "Personal income tax (ITS) is progressive and combined with several payroll deductions (CNPS social security, CMU health coverage); employers withhold at source, but annual reconciliation may apply for higher earners.",
      "Abidjan rent for a modern two- or three-bedroom apartment in Cocody Deux Plateaux or Riviera typically runs XOF 600,000-1,800,000/month (EUR 915-2,745), with furnished serviced apartments and secure compounds at the upper end.",
      "Imported goods - electronics, vehicles, European groceries at Carrefour and Prosuma - carry a premium reflecting port duties and logistics; local produce at markets remains affordable.",
      "Most formal employers provide partial health insurance through private schemes (SUNU, NSIA, AXA) topping up public CMU coverage; this is effectively expected for any expatriate role."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Security and generator costs in compound housing (guardiennage, backup power) which add materially to monthly expenses in family-sized accommodation",
      "International school fees: International Community School of Abidjan, Lycée Français Blaise Pascal, and American International School of Abidjan run USD 10,000-25,000+/year per child",
      "Yellow fever vaccination and ongoing malaria prophylaxis/treatment costs, which are a standard health line item rather than a one-off",
      "Fixer, translator, and legal fees during Carte de Séjour setup, company formation, and vehicle registration - budget realistically for professional help"
    ]
  },
  housingSystem: {
    overview:
      "Abidjan's rental market is split between furnished serviced apartments (popular with short-term and corporate expatriates), modern unfurnished apartments in Cocody and Marcory-Zone 4, and family-sized villas in secured compounds in Riviera Golf, Riviera Palmeraie, and parts of Bingerville. Plateau is primarily commercial - few residential rentals. The Lagunes view from Deux Plateaux and Riviera is a notable premium driver.",
    expectations:
      "Rental contracts are typically 1-2 years with 2-3 months' deposit plus first month's rent and agent commission (usually one month). Landlords commonly request proof of income, employment contract, and Carte de Séjour (or receipt). Always insist on the contract being stamped and registered with the DGI. Platforms include Expat-Dakar and Afribaba (regional), plus local agencies (Amoa Immobilier, Atlantique Immobilier) and expat Facebook groups. Electricity (CIE) and water (SODECI) contracts can be slow to transfer - expect several visits and plan for a backup generator or inverter in districts with occasional outages."
  },
  healthcareReality:
    "Côte d'Ivoire runs a public health network (centres de santé and public hospitals including CHU de Cocody, CHU de Treichville, and Institut de Cardiologie) alongside a private system that most expatriates rely on for routine and specialist care. The Polyclinique Internationale Sainte Anne-Marie (PISAM), Polyclinique des Deux Plateaux, Hopital Mère-Enfant Dominique Ouattara, and Polyclinique Farah in Cocody and Marcory are commonly used by foreign residents. The national health coverage scheme CMU (Couverture Maladie Universelle) is being rolled out but is not a substitute for private insurance for expatriate profiles. Private international schemes (Cigna Global, Allianz Care, AXA Africa, SUNU) plus medical evacuation cover (SOS International, Europ Assistance) are standard. Malaria is endemic year-round - newcomers should consult a travel medicine specialist on prophylaxis and keep rapid diagnostic tests and treatment (Coartem) on hand. A yellow fever vaccination certificate is mandatory for entry and is checked at the airport.",
  digitalLife: {
    overview:
      "Mobile-first digital life is the defining feature of daily routines in Abidjan. Orange CI, MTN CI, and Moov Africa compete on 4G and increasingly 5G coverage, and mobile money through Orange Money, MTN MoMo, and Wave is the default payment rail for peer-to-peer transfers, bills, merchant payments, and even government fees in some cases. Fixed fibre from Orange, YAS (ex-MTN), and VIPNET is available in central Abidjan districts but remains uneven - many residents rely on mobile or fixed wireless as backup.",
    essentials: [
      "Orange CI, MTN CI, or Moov Africa SIM - essential for mobile money and OTP authentication",
      "Wave (ivorian-founded, low fees) plus Orange Money or MTN MoMo for peer-to-peer and merchant payments",
      "Yango, Uber, and Heetch for ride-hailing in Abidjan (Yango typically cheapest)",
      "Jumia CI and Glovo Abidjan for e-commerce and food delivery"
    ],
    whatSurprisesNewcomers: [
      "Wave has materially changed how people pay - zero or low fees make it the default peer-to-peer method, and it is accepted by many small merchants that do not take cards.",
      "Cash is still common in markets and with informal traders, but card and mobile money dominate in modern supermarkets, restaurants, and most service businesses.",
      "Power cuts (coupures) in some districts are still a feature, though far less than a decade ago. Most compound housing includes a generator or inverter backup.",
      "Bureaucratic processes for vehicles, customs, and certain permits remain paper-intensive despite good consumer-facing connectivity - a local fixer pays for itself in saved time."
    ]
  },
  culture: {
    text: "Ivorian culture centers on hospitality, extended family, and a strong sense of pride in the country's recovery and regional leadership. 'Akwaba' - welcome, in several local languages - is heard constantly and is meant. Social life revolves around shared meals (attiéké with grilled fish, kedjenou, alloco), long evenings at maquis (open-air neighborhood restaurants), and music that Côte d'Ivoire has exported across the continent through zouglou, coupé-décalé, and contemporary afro-pop stars. Religion is plural: Christianity and Islam are the main faiths, with significant communities of both, and traditional practices woven through life cycle events. Greetings matter - entering a room without greeting people individually, especially elders, reads as rude. French social conventions (handshake, cheek kisses for close acquaintances, formal titles like Monsieur/Madame in first encounters) coexist with African extended-family networks that often define who helps you, who advises you, and who attends your important moments.",
    highlights: [
      "Always greet before getting to business - 'Bonjour, comment allez-vous?' with a handshake is the standard opener, and skipping it is noticed.",
      "Attiéké (fermented cassava couscous) with grilled fish or poulet braisé is the national dish and a point of real pride - try it at a local maquis.",
      "Music and nightlife are central to social life. Abidjan is a regional capital of afro-pop and coupé-décalé; nights out start late and run long.",
      "Fridays in many workplaces see mixed attire - tailored African prints (pagne) are worn proudly by men and women alike.",
      "Respect for elders is fundamental - offering a seat, letting them speak first, and using formal 'vous' remain standard across most settings."
    ]
  },
  transportationMobility:
    "Abidjan is spread across the lagoon and its banks, and getting around is a defining part of daily life. Ride-hailing through Yango, Uber, and Heetch is the default mode for most expatriates - fares are affordable and accountability is built-in. SOTRA operates the public bus network and the lagoon bateaux-bus ferries that connect Plateau, Treichville, and Yopougon across the Ebrié Lagoon. Woro-woro (shared taxis on fixed routes) and gbaka minibuses are cheap and ubiquitous but require local familiarity. Traffic (bouchons) in Abidjan is significant, particularly on the bridges (Pont Houphouët-Boigny, Pont Général de Gaulle, Pont Henri Konan Bédié) during rush hours - plan meetings and school runs around these windows. The Abidjan metro line 1 is under construction and expected to transform commuting when operational. Intercity travel relies on UTB and other bus operators running to Yamoussoukro (3 hours), Bouaké, San Pédro, and Korhogo. Driving yourself is possible but demands patience and defensive habits; most senior expatriates opt for a driver (chauffeur) whose monthly cost is modest relative to the time saved.",
  internationalConnectivity:
    "Abidjan Félix-Houphouët-Boigny International Airport (ABJ) is the primary gateway, with direct flights operated by Air Côte d'Ivoire (flag carrier), Air France, Brussels Airlines, Turkish Airlines, Ethiopian Airlines, Royal Air Maroc, Emirates, and Kenya Airways to Paris, Brussels, Istanbul, Addis Ababa, Casablanca, Dubai, Nairobi, Lagos, Dakar, Accra, Cotonou, and other African capitals. Paris is roughly 6 hours; New York JFK reachable via Ethiopian through Lomé or via European hubs. The airport is modest in size but reasonably efficient by regional standards. Abidjan's position on the Gulf of Guinea makes it a practical hub for travel across West and Central Africa.",
  travelExploration:
    "Côte d'Ivoire offers extraordinary variety for a country its size. Grand-Bassam, 40 km east of Abidjan, is a UNESCO World Heritage colonial beach town and a weekend standard. Assinie further east, with its lagoon and Atlantic beaches, is the archetypal beach getaway. The Basilica of Our Lady of Peace in Yamoussoukro is architecturally extraordinary. Man and the Dan region in the west offer mountains, waterfalls, and traditional mask culture. Comoé and Taï National Parks protect significant chimpanzee populations and rainforest ecosystems. San Pédro, the western port, is a gateway to surfing and less-developed coastal areas. Korhogo in the north, the Senoufo cultural heartland, is known for pottery, textiles, and mask traditions. Regional travel is easy through Air Côte d'Ivoire to Dakar, Accra, Lomé, Cotonou, Libreville, and other West African capitals - many expats treat the region as a weekend map.",
  considerations: [
    "Bureaucracy is francophone and paper-heavy. Carte de Séjour, vehicle registration, and company-related procedures involve legalized documents, stamps, and multiple visits. A trusted fixer or lawyer dramatically shortens timelines.",
    "Security has improved markedly since 2011 but sensible urban habits apply - avoid certain neighborhoods after dark, minimize visible valuables, and pay attention to official travel advice for northern border areas near the Sahel.",
    "Climate: Abidjan is hot and humid year-round, with a major rainy season (May-July) and a shorter one (October-November). Air conditioning is standard in residential and office buildings.",
    "Yellow fever vaccination is mandatory and checked at entry. Malaria is endemic - a proper prophylaxis plan is essential, especially for families with children.",
    "The CFA franc's peg to the euro provides stability, but cash withdrawal fees outside UEMOA can be high. Keeping a mix of local and international cards, plus mobile money wallets, is the practical setup."
  ],
  mistakes: [
    "Skipping the legalization step on the rental contract. An unregistered contract derails Carte de Séjour applications and leaves you without legal recourse in a dispute.",
    "Relying only on cash or only on cards. Wave and Orange Money are unavoidable for daily payments - set them up in the first week alongside your bank account.",
    "Assuming English will carry you. Outside the AfDB and a handful of multinationals, everything - banking, healthcare, bureaucracy, media - runs in French.",
    "Underestimating traffic and planning across-bridge meetings in peak hours. Add buffer time or schedule on the same side of the lagoon when possible.",
    "Ignoring yellow fever requirements. Arriving without a valid certificate leads to on-the-spot vaccination at the airport or refusal of entry - a trivially avoidable surprise."
  ],
  emergency: [
    {
      number: '111',
      service: 'Police Secours (Urban)',
      description: "Primary police emergency number for cities and towns, operated by the National Police under the Ministry of the Interior."
    },
    {
      number: '170',
      service: 'Gendarmerie Nationale',
      description: 'National Gendarmerie covering intercity roads, rural areas, and jurisdictions outside urban police coverage.'
    },
    {
      number: '180',
      service: 'Sapeurs-Pompiers (Fire)',
      description: 'Fire and rescue services. Also handles many first-response medical emergencies in coordination with SAMU.'
    },
    {
      number: '185',
      service: 'SAMU (Medical Emergency)',
      description: "Service d'Aide Médicale Urgente - public medical emergency dispatch. Private options (SOS Médecins Abidjan) are often used in parallel by expatriates for faster response."
    }
  ],
  sources: [
    {
      name: "Office National d'Identification (ONI)",
      category: 'Identity & Residency',
      description: "Handles Carte de Séjour issuance for foreign residents, biometric capture, and identity records for Côte d'Ivoire.",
      link: 'https://oni.ci/'
    },
    {
      name: 'CEPICI',
      category: 'Business & Investment',
      description: "Centre de Promotion des Investissements en Côte d'Ivoire - one-stop shop for company formation, investor guidance, and sector information.",
      link: 'https://www.cepici.gouv.ci/'
    },
    {
      name: 'Direction Générale des Impôts (DGI)',
      category: 'Tax',
      description: "Tax authority responsible for NCC registration, VAT, personal income tax, and the e-Impôts online portal.",
      link: 'https://www.dgi.gouv.ci/'
    },
    {
      name: 'SNEDAI / eVisitCI',
      category: 'Visas',
      description: "Official concessionaire for the eVisa (eVisitCI) and several identity-related services; the online entry point for visa pre-approval.",
      link: 'https://www.snedai.com/evisa'
    }
  ],
  embassies: {
    description: "For consular assistance, passport services, and official guidance related to Côte d'Ivoire, consult the Ivorian Ministry of Foreign Affairs or an Ivorian embassy or consulate abroad.",
    directoryLink: 'https://www.embassypages.com/cote-divoire',
    mfaLink: 'https://diplomatie.gouv.ci/'
  },
  serviceDirectory: {
    title: "Service Directory - Côte d'Ivoire",
    description: "Examples of commonly used service providers people often interact with when relocating to Côte d'Ivoire.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Law firms and consultancies handling residence permits, work authorizations, and company-linked immigration for expatriates.",
        providers: [
          { name: "Bilé-Aka, Brizoua-Bi & Associés", link: "https://www.bilebrizouabi.com" },
          { name: "DLA Piper Africa (SCPA Houda)", link: "https://www.dlapiperafrica.com" },
          { name: "John W Ffooks & Co (IAO Abidjan)", link: "https://www.jwflegal.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies and platforms handling rentals and sales in Cocody, Marcory, and Plateau.",
        providers: [
          { name: "Amoa Immobilier", link: "https://www.amoa-immobilier.com" },
          { name: "Atlantique Immobilier", link: "https://www.atlantique-immobilier.ci" },
          { name: "Afribaba Côte d'Ivoire", link: "https://www.afribaba.ci" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Advisors familiar with DGI compliance, UEMOA frameworks, and cross-border structuring for expatriates.",
        providers: [
          { name: "PwC Côte d'Ivoire", link: "https://www.pwc.com/ci" },
          { name: "Deloitte Côte d'Ivoire", link: "https://www2.deloitte.com/ci" },
          { name: "KPMG Côte d'Ivoire", link: "https://kpmg.com/ci" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation providers clearing goods through Abidjan Port and handling local moves.",
        providers: [
          { name: "AGS Movers Côte d'Ivoire", link: "https://www.agsmovers.com" },
          { name: "Crown Relocations Côte d'Ivoire", link: "https://www.crownrelo.com" },
          { name: "Bolloré Mobility Côte d'Ivoire", link: "https://www.bollore-logistics.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "French language schools and tutors for newcomers adapting to daily life and professional contexts.",
        providers: [
          { name: "Institut Français de Côte d'Ivoire", link: "https://www.institutfrancais-ci.com" },
          { name: "Alliance Française de Grand-Bassam", link: "https://www.afbassam.ci" },
          { name: "Berlitz Abidjan", link: "https://www.berlitz.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Private hospitals, clinics, and insurers commonly used by expatriates and senior professionals.",
        providers: [
          { name: "PISAM (Polyclinique Internationale Sainte Anne-Marie)", link: "https://www.pisam.ci" },
          { name: "Polyclinique des Deux Plateaux", link: "https://www.polyclinique2p.com" },
          { name: "SUNU Assurances Vie & Santé", link: "https://www.sunu-group.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and firms connecting international professionals with Ivorian and regional employers.",
        providers: [
          { name: "Emploi.ci", link: "https://www.emploi.ci" },
          { name: "Novojob", link: "https://www.novojob.com" },
          { name: "Michael Page Africa", link: "https://www.michaelpageafrica.com" }
        ]
      }
    ]
  }
};
