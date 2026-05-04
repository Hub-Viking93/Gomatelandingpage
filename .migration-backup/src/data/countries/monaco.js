export const monaco = {
  id: 'monaco',
  slug: 'monaco',
  name: 'Monaco',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['French', 'English', 'Italian'],
  shortDescription: 'Sovereign Mediterranean micro-state offering zero personal income tax and unmatched exclusivity to residents who can meet its wealth threshold.',
  heroImage: 'https://images.unsplash.com/photo-1566806925366-46c8926ec71c',
  flagAlt: 'Flag of Monaco',
  atAGlance: "The Principality of Monaco is a 2.08 km² sovereign state on the French Riviera, the second-smallest country after the Vatican and the most densely populated — about 38,000 residents (only ~9,000 are Monégasque citizens; the bulk are foreign residents). A constitutional monarchy ruled by the Grimaldi family since 1297, with Prince Albert II on the throne, Monaco has its own government, flag, and diplomatic corps while using the Euro, sharing French customs territory, and integrating with France for defense and many public services. The draw for relocators is a combination of three things: no personal income tax (the key draw, unchanged since 1869 — but French nationals remain taxable in France under the 1963 bilateral treaty), a genuinely glamorous everyday environment (Casino de Monte-Carlo, F1 Grand Prix, AS Monaco, Société des Bains de Mer, Port Hercule), and reputation-driven residency controls that keep the resident base small and heavily vetted. Residency is not a conventional visa — it is a vetting process run by the Direction de la Sûreté Publique involving a personal interview, source-of-funds review, clean criminal record, proof of accommodation in Monaco (owned or leased), and substantial liquid funds at an approved Monégasque bank (informally EUR 500,000+). Monaco sits inside the Schengen external border via France, so residents travel visa-free across Schengen on a Monégasque carte de séjour. Real-estate density is extreme (EUR 50k+/m² for sale), and residents routinely cross the French border for cheap groceries and specialist care. The principality is French-speaking and lived like a luxury village: neighbours recognize each other, reputations matter, discretion is valued — and citizenship is near-impossible (10 years plus Princely discretion).",
  overview: {
    euStatus: 'Non-EU (Special Status - Customs union with France, Schengen-adjacent)',
    stayLength: 'Schengen rules apply for tourists (up to 90 days in 180)',
    costOfLiving: 'Very High',
    primaryLanguages: 'French (Official), English, Italian, Monegasque',
  },
  visas: [
    {
      name: 'Carte de Séjour - Résident Temporaire',
      targetAudience: 'Non-EEA foreigners establishing residence in Monaco',
      useCase: "The entry-level Monaco residence card for most foreign applicants. Non-EEA nationals must first obtain a French long-stay visa (Type D) at a French consulate with a Monaco establishment clause, then apply for the carte de séjour at the Résidents Service of the Monegasque Sûreté Publique. The process requires a personal interview, documentary dossier (passport, birth certificate, proof of accommodation, bank reference, clean criminal record, health insurance), and financial proof.",
      duration: '1 year, renewable',
      link: 'https://en.gouv.mc/Policy-Practice/Living-in-Monaco/Moving-to-Monaco'
    },
    {
      name: 'Carte de Séjour - Résident Ordinaire',
      targetAudience: 'Residents renewing after 3 years',
      useCase: "Issued after three consecutive years as résident temporaire and subject to continued compliance. The card is typically valid for three years at a time. It confirms ongoing integration with Monaco (a real residential presence, not a paper one) and is the status most long-term expats hold.",
      duration: '3 years, renewable',
      link: 'https://en.gouv.mc/Policy-Practice/Living-in-Monaco/Moving-to-Monaco'
    },
    {
      name: 'Carte de Séjour - Résident Privilégié',
      targetAudience: 'Long-term residents (after 10 years)',
      useCase: 'Granted after 10 years of continuous residency, this is the long-term residence card for highly integrated foreign residents. It signals long-term commitment to the principality and is valid for ten years. Eligibility requires a clear record and demonstrable real presence in Monaco throughout the qualifying period.',
      duration: '10 years, renewable',
      link: 'https://en.gouv.mc/Policy-Practice/Living-in-Monaco/Moving-to-Monaco'
    },
    {
      name: 'EEA National Residence',
      targetAudience: 'EU/EEA citizens',
      useCase: 'EU/EEA nationals do not require a prior French visa. They apply directly to the Résidents Service with a simpler documentary dossier, though the financial means, accommodation, and background checks still apply. Processing is faster and the dossier requirements lighter than for non-EEA applicants.',
      duration: '1 year initially, renewable (tracks the same carte de séjour progression)',
      link: 'https://en.gouv.mc/Policy-Practice/Living-in-Monaco/Moving-to-Monaco'
    },
    {
      name: 'Monaco Business Creation (Societe and Employment Route)',
      targetAudience: 'Entrepreneurs and executives of Monaco-based businesses',
      useCase: 'Foreign nationals establishing or managing a business in Monaco can apply for residence linked to that business activity. Business creation in Monaco requires prior authorization from the Government (Direction du Développement Économique), a vetted business plan, adequate capital, and suitable premises. Linked residence permits follow the standard carte de séjour process.',
      duration: 'Tied to business activity and residence card cycle',
      link: 'https://monacoeconomie.gouv.mc'
    }
  ],
  requirements: [
    {
      title: 'Monaco Bank Deposit',
      explanation: "Applicants must open an account with a Monaco-licensed bank and demonstrate substantial liquid funds. There is no single official figure, but in practice Monégasque banks require EUR 500,000-1,000,000+ deposited or under management before they issue the bank reference letter (attestation de dépôt) needed for the residence application. Private banking relationships (CFM Indosuez, J. Safra Sarasin, Barclays Monaco, BNP Paribas Monaco, Société Générale Monaco, CMB) are effectively the gatekeepers.",
      importance: 'The bank reference letter is the single most consequential document in a Monaco residence dossier. Without it, the Sûreté Publique will not process the application. Banks conduct their own AML/KYC and source-of-funds review, often more stringent than the police check. Expect a multi-month onboarding with extensive documentation (tax returns, asset listings, business records, references).',
      link: 'https://www.gouv.mc/Governmental-Action/The-Economy/Financial-Activities'
    },
    {
      title: 'Accommodation in Monaco (Owned or Leased)',
      explanation: 'Applicants must prove suitable accommodation in Monaco — either ownership (acte de propriété) or a registered lease (contrat de bail) of at least one year, in your name (joint tenancies accepted for couples/families). Given Monaco property prices (averages above EUR 50,000/m² for sale and EUR 60-100+/m²/month for premium rentals), this is a significant financial commitment in itself.',
      importance: 'The residence card is explicitly linked to the accommodation — giving up the property terminates the residence. Authorities conduct occasional "effective residence" checks (water and electricity consumption, neighbour confirmations, local activities). Paper residence is not tolerated.',
      link: 'https://en.gouv.mc/Policy-Practice/Living-in-Monaco/Moving-to-Monaco'
    },
    {
      title: 'Police Vetting and Personal Interview',
      explanation: "All applicants undergo a background check by the Direction de la Sûreté Publique: criminal record certificates from countries of previous residence (usually covering the last five years), a financial background review, and a personal interview at the Résidents Service covering your life history, source of wealth, reasons for moving to Monaco, and intended presence.",
      importance: 'The Sûreté Publique has broad discretion to accept or reject applications. Honesty and consistency across documents are essential — any discrepancy, missing record, or unexplained gap can delay or derail the dossier. Applicants typically prepare with a specialist Monaco law firm or relocation consultant.',
      link: 'https://en.gouv.mc/Policy-Practice/Living-in-Monaco/Moving-to-Monaco'
    },
    {
      title: 'Health Insurance',
      explanation: "Monaco has its own public healthcare system (Caisses Sociales de Monaco — CSM, including the CCSS for salaried employees). Employees and certain self-employed residents contribute to CSM and receive coverage. Non-working residents must demonstrate comprehensive private health insurance valid in Monaco and France, typically from international providers (Cigna Global, Allianz, AXA) or Monaco-based brokers.",
      importance: "Proof of health insurance is a mandatory residence document. Ensure your policy covers both Monaco and French hospitals, given the cross-border nature of many referrals — the Centre Hospitalier Princesse Grace is high quality, but many specialist procedures are done in France.",
      link: 'https://www.caisses-sociales.mc'
    }
  ],
  jobsAndIncome: {
    overview:
      "Monaco's economy is driven by finance (private banking, family offices, wealth management), tourism and hospitality, real estate, yachting and luxury retail, and sports and media (F1, AS Monaco, Société des Bains de Mer properties). The resident workforce is complemented by around 50,000 daily cross-border commuters from France and Italy. Employment typically requires a work authorization (autorisation de travail) issued by the Government alongside the employer's hiring process. French is the working language domestically; English dominates in private banking, international law firms, and global luxury brands.",
    whereToLook: [
      "MonacoJobs.mc and EmploiMonaco.com — dedicated Monaco job boards",
      "LinkedIn — heavy presence of private banks, luxury groups, and international firms",
      "Direct recruiting at Monegasque banks (CFM Indosuez, SG Monaco, CMB, Barclays), luxury retailers, and major hotels (Hotel de Paris, Hermitage, Fairmont)",
      "Service des Titres de Séjour and Direction de l'Emploi for official guidance on hiring processes",
      "Monaco International Chamber of Commerce (JCI Monaco) for networking into opportunities"
    ],
    realityChecks: [
      "Employment in Monaco follows a priority-of-hiring order: Monegasque citizens first, then spouses of Monegasques and people domiciled in Monaco, then residents of nearby French communes, and only then other foreign workers. Employers must apply for an autorisation de travail for any non-Monaco-resident hire.",
      "Salaries in Monaco are high by regional standards but not extravagant — the appeal is the zero personal income tax rather than the gross pay. A private banker on EUR 150,000 gross keeps significantly more in Monaco than the same role in Paris or Geneva.",
      "French social contributions apply to salaried employment in Monaco (approximately 15-20% employee side, more for employers), funding the CSM. Zero income tax is the headline — social contributions are real and substantial.",
      "Most expats in Monaco are not working as salaried employees; they are residents-by-means living off investment income, family offices, or their own businesses abroad. The labor market is relatively small."
    ]
  },
  salaryReality: {
    overview:
      "Monaco is the only European state with no personal income tax for its non-French residents (the 1963 France-Monaco fiscal treaty keeps French nationals taxable in France). There is also no wealth tax on individuals, no capital gains tax on private investment (narrow exceptions), and no inheritance tax in the direct line between parents and children or between spouses. The cost of entry — bank deposit and property costs — effectively functions as a wealth prerequisite, and everyday cost of living (housing, dining, services) is among the highest in the world.",
    realityChecks: [
      "Zero personal income tax is real and durable for non-French residents. However, your home country may still tax you if you remain a tax resident there. Exiting prior tax residence (UK's Statutory Residence Test, US global taxation for citizens, French domicile rules, etc.) is the critical planning step.",
      "French nationals resident in Monaco remain French tax residents under the 1963 treaty — zero-tax Monaco does not apply to them. Around 20% of Monaco's resident population is French and pays French income tax despite living in Monaco.",
      "Rent for a modest one-bedroom apartment in Monaco starts around EUR 3,500-5,000/month; two-bedrooms EUR 6,000-12,000; family-sized premium apartments EUR 15,000-40,000/month. Purchase prices exceed EUR 50,000/m² on average.",
      "The cost of daily life — groceries, dining, services, parking — is roughly 30-50% above Paris, Geneva, or London. The tax benefit dwarfs this only for high earners and asset-rich residents."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Property purchase costs beyond the sticker price: registration fees, notary fees, and agent fees add approximately 6-9% on top of the purchase price",
      "Monaco healthcare contributions (for CSM enrollment) and private insurance top-ups for comprehensive cross-border coverage (Monaco, France, UK, Switzerland)",
      "School fees for private and international schools (International School of Monaco, IBM; French private schools; boarding at nearby schools in France or Switzerland) — EUR 15,000-60,000+/year per child",
      "Club and social membership fees (Monte-Carlo Country Club, Yacht Club de Monaco, Monaco Beach Club) which are often functionally necessary for integration and run into five figures annually"
    ]
  },
  housingSystem: {
    overview:
      "Monaco's real estate is among the most expensive in the world, reflecting fixed 2 km² area, sustained demand, and tight supply. The principality is divided into districts: Monte-Carlo (the iconic casino quarter, highest prestige and prices), La Condamine (port-side, lively central district), Monaco-Ville (the old town on the rock), Fontvieille (reclaimed land on the southwest, modern apartments and the heliport), Larvotto (beach district, newly developed seaside), and the hillside areas of Moneghetti and Les Révoires.",
    expectations:
      "A modest one-bedroom rents for EUR 3,500-5,000/month; two-bedroom EUR 6,000-12,000; premium family apartments with views and parking EUR 15,000-40,000+/month. Purchase prices average above EUR 50,000/m² and can exceed EUR 100,000/m² for top-tier properties. Security deposits are typically three months' rent plus a bank guarantee, and rental dossiers are heavily vetted (bank references, tax returns, guarantors, residence status). Agents (Savills, Knight Frank, Dotta, La Costa Properties) dominate the market — there is effectively no DIY rental scene, and desirable properties often rent privately or through waiting lists."
  },
  healthcareReality:
    "Monaco's healthcare is of high quality, centered on the Centre Hospitalier Princesse Grace (CHPG), a 550-bed public hospital with strong cardiology, oncology, and maternity departments, and the Institut Monégasque de Médecine du Sport. The Caisses Sociales de Monaco (CSM) administers health insurance for salaried employees, self-employed residents, and specific other categories. Residents not covered by CSM must demonstrate comprehensive private health insurance — typically from international insurers (Cigna, Allianz, AXA, Bupa). Private clinics in Monaco and nearby Nice (Nice Hospital, American Hospital of Paris network) provide specialist care. A private GP consultation costs EUR 50-120; specialist visits EUR 100-300. Cross-border medical care in France is common for specialist procedures. Pharmacies in Monaco are small in number but well-stocked; prescriptions from French and Italian doctors are accepted. Many residents maintain concurrent coverage in their home countries or in Switzerland for global medical access.",
  digitalLife: {
    overview:
      "Monaco's digital infrastructure is excellent. Monaco Telecom (the monopoly provider) offers fiber internet (FTTH) at speeds up to 10 Gbps — Monaco was among the first countries to achieve 100% fiber coverage — and comprehensive 5G. Many residents keep a Monaco Telecom SIM plus a French SIM (Orange, SFR, Bouygues) for travel convenience. E-government is developing steadily via MonGuichet.mc, though many administrative tasks still involve in-person visits at government offices.",
    essentials: [
      "Monaco Telecom mobile and fiber services — the default for residents; bundles with TV and landline are common",
      "MonGuichet.mc — the government e-services portal for civic and administrative tasks",
      "Monaco Pass and CAM (Compagnie des Autobus de Monaco) app — for public transport and parking payments across the principality",
      "MONACOPAY and bank-specific apps (CFM Indosuez, CMB, SocGen Monaco) for banking; Apple Pay and Google Pay are widely accepted"
    ],
    whatSurprisesNewcomers: [
      "Despite the wealth, Monaco runs as a tight village. Neighbours and shopkeepers recognize you; reputations build quickly. Discretion and politeness are the norm; ostentation is less respected than elsewhere on the Riviera.",
      "French administrative culture applies to much of daily life. Paperwork, official letters, and processes for residents can feel slow and formal despite the country's wealth and connectivity.",
      "Cross-border routine: most residents shop for larger items, visit specialist doctors, or go to the nearest large supermarkets in France (Carrefour at Cap 3000, Nice), just 20-30 minutes away. Life in Monaco is inseparable from life on the Côte d'Azur.",
      "Electric vehicles and scooters are heavily promoted — Monaco has dense charging infrastructure, reduced parking fees for EVs, and a robust public-bike scheme (MonaBike). Petrol cars are tolerated but increasingly expensive to park and operate."
    ]
  },
  culture: {
    text: "Monaco's culture blends French elegance, Italian warmth, and Monégasque tradition, layered over a cosmopolitan international community. The Grimaldi family (Prince Albert II currently on the throne, with the late Princess Grace Kelly still woven into national memory) is a continuous presence in civic life. National Day (Fête Nationale, November 19) is the principal annual celebration, with a thanksgiving mass at the Cathedral, a military parade in the Palace Square, and a gala at the Opera House. The F1 Grand Prix in May, the Monte-Carlo Rally in January, the Monaco Yacht Show in September, and the Rose Ball and Red Cross Ball punctuate the social calendar. French is the official language; Monégasque (a Ligurian dialect) is taught in schools and honored on street signs but no longer widely spoken. Italian, English, Russian, and Arabic are commonly heard. Formality matters — smart attire is normal even for daytime errands, and dress codes at the Hotel de Paris, Salle Garnier, and the Casino are enforced. Discretion is prized; loud ostentation about wealth is looked down on, even in an environment saturated with it.",
    highlights: [
      "Dress standards matter. Smart casual is the daytime baseline; elegant evening attire is expected at the casino, top restaurants, and most social events. Shorts and flip-flops are not acceptable in the central tourist areas beyond the immediate seaside.",
      "Monaco is not France — but depends on France for many practicalities. Respect both identities. 'Nice is great, but I live in Monaco' is a statement you will hear often from residents.",
      "Discretion is a core value. Do not photograph residents, their homes, or their cars without permission. Do not gossip — word travels fast in a village of 39,000.",
      "Religion: Roman Catholicism is the state religion. Respect is expected at the Cathedral and during official religious events, even by secular residents.",
      "Effective presence matters. The Sûreté Publique and Residents Service periodically verify that residents actually live in Monaco. Paper residency for tax-benefit purposes alone is not tolerated and can lead to revocation."
    ]
  },
  transportationMobility:
    "Monaco is genuinely walkable and heavily invested in vertical mobility. The principality has over 80 public lifts, escalators, and travelators linking the hillside districts to the seafront — a defining feature of daily life. Public bus service (CAM - Compagnie des Autobus de Monaco) covers all districts with six main lines at EUR 2 per single journey; monthly passes are modest. Taxis are plentiful but pricey. MonaBike (electric bike share, integrated with the nearby Velo Bleu system in Nice) and electric scooters from operators like Lime and Bird are popular. Public parking is extensive but expensive; street parking is largely metered and residents use dedicated parking permits. Monaco has no airport — Nice Côte d'Azur Airport (NCE), 25 km west, is the principal gateway, reachable by train (roughly 30 minutes from Monaco-Monte Carlo station), helicopter (7-minute transfer via Heli Air Monaco or Monacair), or car (30-50 minutes depending on traffic). The regional SNCF train (TER) connects Monaco to Nice, Cannes, Menton, and the Italian Riviera efficiently and inexpensively — many residents use it daily.",
  internationalConnectivity:
    "Nice Côte d'Azur Airport (NCE), 25 km from Monaco, is one of France's busiest airports and offers direct flights to almost every major European city plus long-haul routes to New York, Dubai, Doha, and seasonal destinations. The helicopter link from Monaco to NCE (operated by Heli Air Monaco and Monacair) takes 7 minutes and is routinely used by residents. Flight times from Nice: London 2 hours, Paris 1.5 hours, Zurich 1.5 hours, Frankfurt 1.75 hours, Dubai 6.5 hours, New York 9 hours. The TGV high-speed train connects Nice (and Monaco via regional links) to Paris in approximately 5.5 hours. Overland trips to nearby Riviera destinations — Saint-Tropez, Cannes, Antibes, Menton, Sanremo, Ventimiglia, Genoa — are easy by train or car. Italy is five minutes by car across the border.",
  travelExploration:
    "Despite its size, Monaco offers rich cultural attractions. The Prince's Palace, the Oceanographic Museum (founded by Prince Albert I, Cousteau was director for 30 years), the Exotic Garden, the Casino de Monte-Carlo, the Opéra de Monte-Carlo (Salle Garnier), and the Monaco Cathedral (where Princess Grace is buried) are the principal sites. The surrounding Côte d'Azur opens up Nice (Promenade des Anglais, Matisse Museum), Cannes (film festival in May, La Croisette), Antibes (Picasso Museum, Cap d'Antibes), the medieval perched village of Èze, and Menton (lemon festival, gardens). The Italian Riviera — Ventimiglia, Sanremo, Genoa — is immediately across the border. The Maritime Alps provide excellent hiking, and skiing at Isola 2000 and Auron is 1.5 hours by car in winter. The F1 Grand Prix weekend (late May) and the Monaco Yacht Show (September) transform the principality and are coveted social experiences.",
  considerations: [
    "Wealth Barrier to Entry: Monaco residency is not a traditional visa application — it is vetted admission into a small, wealthy community. Bank deposit expectations typically start at EUR 500,000 and can run to EUR 1 million+ depending on bank and profile. Without meaningful liquid wealth, residency is not practically accessible.",
    "French Tax Treaty: French nationals resident in Monaco remain French tax residents under the 1963 France-Monaco treaty and pay French income tax on worldwide income. Zero-tax Monaco only applies to non-French nationalities — French citizens get no income tax benefit from moving.",
    "Effective Presence Requirement: The Sûreté Publique periodically audits residents' effective presence via utility consumption, local activity, and cross-checks. 'Paper' residency without real presence is actively policed and can lead to revocation.",
    "Housing Costs as a Permanent Floor: Rent or mortgage for suitable Monaco accommodation is the single largest ongoing cost of life here. Budget EUR 4,000-10,000+/month for a one- to two-bedroom rental, plus utilities, parking, and services. Buying is a meaningful wealth commitment at EUR 2-10m+ for a family-size property.",
    "Schooling and Family Life: Public schools teach in French; international options are limited to the International School of Monaco and a few French-system private schools. Many families commute children to schools in Nice, Mougins, or boarding schools abroad. Factor school capacity and fees into family relocation plans."
  ],
  mistakes: [
    "Assuming Monaco residency ends home-country tax obligations. Many countries (UK, Italy, Germany, Spain, US for citizens) have specific rules for high-net-worth departures — statutory residence tests, exit taxes, CFC rules. Proper planning with advisers in both jurisdictions is essential before the move.",
    "Underestimating bank onboarding timelines. Monégasque private banks conduct extensive AML/KYC reviews, which can take 2-6 months for complex international profiles. Plan residency applications around confirmed bank acceptance, not hopeful approval.",
    "Treating Monaco residency as a 'postbox' for tax purposes. Effective presence checks are real and revocation is real. If you don't plan to genuinely live in Monaco most of the time, choose a different residency solution.",
    "Confusing Monaco with Schengen for visa purposes. Monaco is not a Schengen member but shares the external border via France. Non-EEA residency requires a French long-stay visa first, then the Monaco carte de séjour — skipping the French visa step is a common and costly error.",
    "Dressing or behaving casually at formal venues. The Casino, Hotel de Paris, Opera, and top restaurants have dress codes and turn away inappropriate attire. Monaco's evening social code is more formal than neighbouring Nice or Cannes."
  ],
  emergency: [
    {
      number: '112',
      service: 'Unified Emergency Services',
      description: 'European universal emergency number connecting to police, ambulance, and fire. Works from any phone. Operators speak French and English; availability of other languages depends on staffing.'
    },
    {
      number: '17',
      service: 'Police (Sûreté Publique)',
      description: 'Direct line to the Monegasque police. Monaco has one of the highest police-to-resident ratios in the world and response is typically within a few minutes.'
    },
    {
      number: '18',
      service: 'Fire and Emergency Services (Sapeurs-Pompiers)',
      description: 'Fire and emergency response. Also handles ambulance dispatch in many cases via the coordination of CHPG SAMU.'
    }
  ],
  sources: [
    {
      name: 'Gouvernement Princier de Monaco',
      category: 'Government Portal',
      description: 'Official government portal with residence, business, tax, and civic guidance. The primary authoritative source for all official procedures.',
      link: 'https://en.gouv.mc'
    },
    {
      name: 'Sûreté Publique - Résidents Service',
      category: 'Residency & Immigration',
      description: 'The Monegasque police department handling residence cards, background checks, and resident registration.',
      link: 'https://en.gouv.mc/Policy-Practice/Living-in-Monaco/Moving-to-Monaco'
    },
    {
      name: 'Monaco Economic Development',
      category: 'Business & Investment',
      description: 'Direction du Développement Économique - authorization and support for business creation and investment in Monaco.',
      link: 'https://monacoeconomie.gouv.mc'
    },
    {
      name: 'Caisses Sociales de Monaco',
      category: 'Social Security & Healthcare',
      description: 'Administration of Monaco social security including health insurance (CCSS), pensions, and family benefits.',
      link: 'https://www.caisses-sociales.mc'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to Monaco, consult the Monegasque Ministry of Foreign Affairs and Cooperation or a Monegasque embassy or consulate abroad. Monaco maintains a focused diplomatic presence in key partner states.',
    directoryLink: 'https://www.embassypages.com/monaco',
    mfaLink: 'https://www.gouv.mc/Government-Institutions/The-Government/Department-of-Foreign-Affairs'
  },
  serviceDirectory: {
    title: "Service Directory - Monaco",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Monaco.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialist legal counsel for Monaco residency applications, business creation, and fiscal structuring.",
        providers: [
          { name: "CMS Pasquier Ciulla Marquet Pastor & Svara", link: "https://cms.law/en/mco/" },
          { name: "Gordon S. Blair Law Offices", link: "https://www.gordonblair.com" },
          { name: "Zabaldano Avocats", link: "https://www.zabaldano.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Leading agencies handling premium rentals and purchases in Monaco's tightly held property market.",
        providers: [
          { name: "Savills Monaco", link: "https://www.savills.mc" },
          { name: "Knight Frank Monaco", link: "https://www.knightfrank.com/monaco" },
          { name: "Dotta Immobilier", link: "https://www.dotta.mc" }
        ]
      },
      {
        name: "Private Banks & Tax Advisors",
        description: "Major private banks and wealth advisors commonly used by Monaco-resident applicants.",
        providers: [
          { name: "CFM Indosuez Wealth", link: "https://www.cfm-indosuez.com" },
          { name: "SG Monaco (Société Générale Private Banking)", link: "https://www.privatebanking.societegenerale.com" },
          { name: "CMB Monaco (Compagnie Monégasque de Banque)", link: "https://www.cmb.mc" }
        ]
      },
      {
        name: "Relocation & Moving Companies",
        description: "International relocation firms experienced with Monaco customs, vertical logistics, and building regulations.",
        providers: [
          { name: "Crown Relocations Monaco", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Monaco", link: "https://www.agsmovers.com" },
          { name: "Monaco Concierge Services", link: "https://en.gouv.mc" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Schools and private tutors for French and Monegasque language instruction.",
        providers: [
          { name: "Lycée Albert 1er Adult Education", link: "https://www.lycee-albert1er.mc" },
          { name: "Alliance Française de Monaco (Nice)", link: "https://alliancefr.com" },
          { name: "Berlitz Monaco / Nice", link: "https://www.berlitz.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Principal hospital, specialist clinics, and insurance partners used by residents and international staff.",
        providers: [
          { name: "Centre Hospitalier Princesse Grace", link: "https://www.chpg.mc" },
          { name: "Institut Monégasque de Médecine du Sport (IM2S)", link: "https://www.im2s.mc" },
          { name: "Cigna Global (International Health Insurance)", link: "https://www.cignaglobal.com" }
        ]
      },
      {
        name: "Concierge & Lifestyle Services",
        description: "Relocation-adjacent concierge, family office support, and daily lifestyle management providers.",
        providers: [
          { name: "Quintessentially Monaco", link: "https://www.quintessentially.com" },
          { name: "John Taylor Monaco", link: "https://www.john-taylor.com" },
          { name: "Heli Air Monaco (Nice Airport Transfer)", link: "https://www.heliairmonaco.com" }
        ]
      }
    ]
  }
};
