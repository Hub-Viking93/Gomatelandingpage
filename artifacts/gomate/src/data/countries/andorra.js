export const andorra = {
  id: 'andorra',
  slug: 'andorra',
  name: 'Andorra',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Catalan', 'Spanish', 'French', 'Portuguese'],
  shortDescription: 'A tiny Pyrenean co-principality with flat 10% income tax, world-class skiing, and a deeply Catalan identity.',
  heroImage: 'https://images.unsplash.com/photo-1671358492127-b5131df9aaae',
  flagAlt: 'Flag of Andorra',
  atAGlance: "The Principality of Andorra is a 468 km² landlocked microstate in the eastern Pyrenees, wedged between France and Spain, with a population of around 80,000. It is the world's only remaining co-principality: the heads of state are the President of France and the Bishop of Urgell (in Spain), a medieval arrangement made constitutional in 1993. Catalan is the only official language - Andorra is the only fully sovereign Catalan-speaking country on earth - while Spanish, French, and Portuguese are widely used in daily life due to proximity and migration. Andorra is not in the European Union and not in Schengen, but it operates under a customs union with the EU for industrial goods and has bilateral agreements that allow Andorran residents to travel easily through France and Spain. The Euro is used (and always has been, de facto) although Andorra is not a Eurozone member. For residents, the headline attractions are fiscal and lifestyle: a flat personal income tax (IRPF) at a maximum marginal rate of 10%, no wealth tax, no general inheritance tax (within specific rules), a VAT (IGI) rate of only 4.5% - the lowest in Europe - and world-class ski infrastructure (Grandvalira, Vallnord) plus summer hiking, cycling, and mountain leisure. Residency is controlled tightly through the Servei d'Immigració, with three main tracks (active employment/self-employment, passive residency for the financially independent, and a few special categories). Passive residency requires a meaningful investment (at least EUR 400,000 into qualifying Andorran assets, on top of a mandatory non-interest-bearing deposit of EUR 47,500 per main applicant and EUR 10,000 per dependent placed with the Andorran Financial Authority, AFA). The capital Andorra la Vella sits at around 1,000 meters altitude; Escaldes-Engordany, Encamp, La Massana, Ordino, and Canillo are the other principal parishes. Life is bilingual-trilingual, compact, outdoorsy, and organized around the seasons: ski tourism drives winter, hiking and cycling summer.",
  overview: {
    euStatus: 'Non-EU (Customs union for industrial goods; non-Schengen)',
    stayLength: 'Effectively via France/Spain Schengen rules for tourists',
    costOfLiving: 'High',
    primaryLanguages: 'Catalan (Official), Spanish, French, Portuguese',
  },
  visas: [
    {
      name: 'Active Residency (Residència Activa)',
      targetAudience: 'Employees and Self-Employed Professionals',
      useCase: "For those with an employment contract with an Andorran employer, or those setting up a registered business in Andorra as self-employed (compte propi). Employees must hold a valid work permit tied to the employer's quota; self-employed applicants typically hold at least 20% of a registered company and actively manage it. Active residency comes with work rights, full tax residency, and social security enrolment through CASS.",
      duration: '1 year initially, then 3 years, then 10 years',
      link: "https://www.immigracio.ad/"
    },
    {
      name: "Passive Residency (Residència Sense Activitat Lucrativa)",
      targetAudience: 'Financially Independent Individuals, Retirees',
      useCase: "For those who want to reside in Andorra without working locally. Requires investment of at least EUR 400,000 into Andorran qualifying assets (real estate in Andorra, equity in Andorran companies, Andorran government or bank debt instruments, or AFA-approved funds), plus a mandatory non-interest-bearing deposit of EUR 47,500 per main applicant and EUR 10,000 per dependent with the Andorran Financial Authority (AFA). Applicants must demonstrate private health insurance covering Andorra, live in Andorra at least 90 days per year, and have suitable accommodation.",
      duration: '2 years initially, then 2 years, then 3 years, then 10 years',
      link: "https://www.immigracio.ad/"
    },
    {
      name: "Professional with International Projection",
      targetAudience: 'Consultants, Specialists serving mainly foreign clients',
      useCase: "A variant of passive residency for professionals who structure their activity through an Andorran entity but earn the majority of their income from clients outside Andorra (at least 85% of billing abroad). Suits consultants, specialist advisors, and high-value service providers. Same AFA deposit and accommodation requirements as passive residency.",
      duration: '2 years initially, then renewable on the same cycle',
      link: "https://www.immigracio.ad/"
    },
    {
      name: 'Residency for Scientific, Cultural, or Sports Reasons',
      targetAudience: 'Athletes, Cultural Figures, Scientists',
      useCase: "A narrow route for internationally recognised athletes, artists, writers, and scientists whose activity brings prestige or value to Andorra. Subject to government discretion and supporting evidence of the applicant's profile and activity.",
      duration: 'Variable; tied to ongoing activity',
      link: "https://www.immigracio.ad/"
    },
    {
      name: 'Schengen Transit via France and Spain',
      targetAudience: 'Tourists, Short-term Visitors',
      useCase: "Andorra has no airport and is entered overland through France (RN22 from Toulouse) or Spain (N-145 from La Seu d'Urgell). Because it is not in Schengen, there is no Andorran tourist visa. Visitors effectively need a valid Schengen (or visa-exempt) status to pass through France or Spain. There are no passport stamps on entering Andorra itself; border posts are present but mostly for customs.",
      duration: 'Tied to Schengen 90/180 rules of France/Spain',
      link: 'https://www.govern.ad/'
    }
  ],
  requirements: [
    {
      title: 'AFA Deposit (Financial Deposit with the Andorran Financial Authority)',
      explanation: "Passive residency and its variants require a non-interest-bearing deposit with the Autoritat Financera Andorrana (AFA) - currently EUR 47,500 for the main applicant plus EUR 10,000 per dependent. The funds are returned when residency ends. This sits on top of the broader EUR 400,000 qualifying investment commitment required for passive residency.",
      importance: "The AFA deposit is a hard prerequisite for passive residency and cannot be waived. Combined with the qualifying investment in Andorran assets, the capital commitment is the principal barrier to entry for non-employment residency and must be planned carefully with an Andorran gestoria or law firm.",
      link: "https://www.afa.ad/"
    },
    {
      title: 'Proof of Accommodation in Andorra',
      explanation: "All residency applicants must prove they have suitable accommodation in Andorra - either ownership (contracte de compravenda) or a registered long-term lease (contracte d'arrendament) for at least one year. The lease must be in the applicant's name.",
      importance: "Without proof of suitable accommodation, the immigration authority will not progress the application. Given Andorra's constrained real estate market and rising prices, securing a compliant property ahead of the final filing is a common timeline bottleneck.",
      link: 'https://www.govern.ad/'
    },
    {
      title: 'Private Health Insurance and CASS',
      explanation: "Active residents enrol in CASS (Caixa Andorrana de Seguretat Social), the national social security and health insurance scheme funded by employer and employee contributions. Passive residents must maintain private health insurance valid in Andorra (and ideally France and Spain for cross-border specialist referrals).",
      importance: "Health coverage is mandatory for residency and must remain continuously valid. CASS provides reimbursement-based care with co-pays; many residents also carry complementary private insurance for quicker specialist access and cross-border coverage.",
      link: 'https://www.cass.ad/'
    },
    {
      title: "Minimum Physical Presence (90 Days/Year)",
      explanation: "Passive residents must spend at least 90 days per year in Andorra (active residents effectively more, because of tax residency expectations). The immigration authority cross-checks border logs, utility consumption, and other indicators to verify real presence.",
      importance: "Physical-presence requirements are enforced. Paper residency solely for tax-badge purposes without real life in Andorra will not be renewed and can result in revocation. Many passive residents structure their year to spend at least 183 days in Andorra to solidify tax residency under the 10% IRPF regime.",
      link: "https://www.immigracio.ad/"
    }
  ],
  jobsAndIncome: {
    overview:
      "Andorra's small economy is dominated by tourism (skiing above all, plus summer mountain tourism), retail (leveraging duty-free and low-VAT shopping), financial services (private banking and wealth management through firms like Andbank, MoraBanc, Creand, Vall Banc), construction, and a growing fintech and e-commerce sector tied to the country's fiscal positioning. The labor market is small and tightly controlled by quota; active residency is most often granted to workers holding specific offers within a quota or to founders with meaningful equity in Andorran companies.",
    whereToLook: [
      "LinkedIn and Infojobs (the main job boards used for Andorran postings)",
      "Servei d'Ocupació del Govern d'Andorra (public employment service)",
      "Career pages of Andbank, MoraBanc, Creand, Grandvalira, and the Govern d'Andorra",
      "Specialist recruiters serving Andorra and Barcelona/Toulouse cross-border roles",
      "Cambra de Comerç d'Andorra for business networks and SME opportunities"
    ],
    realityChecks: [
      "Most foreigners move to Andorra under passive residency rather than a local job - the draw is tax treatment and lifestyle, not the labor market.",
      "Active residency via self-employment requires genuine business substance - office, customers, and operations - not just a shell.",
      "Private banking and wealth management hire international talent selectively; Catalan, Spanish, and French are all useful, with English increasingly relevant for international client work.",
      "Tourism and hospitality dominate seasonal hiring, especially around Grandvalira, Vallnord, and Caldea (thermal spa)."
    ]
  },
  salaryReality: {
    overview:
      "Andorra's fiscal profile is the reason most financially independent residents move. The flat 10% personal income tax (IRPF), 4.5% IGI (VAT), absence of a wealth tax, and narrow inheritance rules translate to a very light overall tax burden for residents whose primary income is from savings, investments, or services billed abroad. Corporate income tax is 10%, with reduced effective rates for some activities. Social security contributions via CASS apply to employment income.",
    realityChecks: [
      "To qualify for the 10% IRPF regime you must be a genuine Andorran tax resident - most clearly demonstrated by spending more than 183 days in Andorra or by having your centre of economic interests there.",
      "Your home country may continue to tax you if you have not properly exited tax residence there. UK Statutory Residence Test, Spanish centre-of-interests test, French domicile rules, and US global taxation for citizens are the most common snags - plan with advisors in both jurisdictions before the move.",
      "Andorra's inheritance and gift regimes are narrow rather than absent - in direct line there is no inheritance tax, but legal advice on cross-border estates remains important.",
      "The cost of living in Andorra is not cheap. Real estate prices have risen significantly in recent years, imported consumer goods are taxed (IGI plus import) though remain competitive, and dining and services sit around northern-Spain/southern-France levels."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "CASS contributions for active residents (roughly 6.5% employee / 15.5% employer on employment income) which are real taxation even under the 10% IRPF headline",
      "IGI at 4.5% on most goods and services - it is low, but it is not zero",
      "Property transfer taxes (ITP around 4% on purchase) and notarial/agency fees at closing",
      "International school fees: Lycée Comte de Foix (French), Escola Espanyola, Escola Andorrana, plus British School of Andorra - quality options exist but capacity is finite"
    ]
  },
  housingSystem: {
    overview:
      "Andorra's housing stock is concentrated in the seven parishes along the country's central valleys: Andorra la Vella and Escaldes-Engordany (urban core, dense apartments, easy access to services), Encamp and Canillo (closer to Grandvalira), La Massana and Ordino (quieter, popular with families and skiers near Vallnord-Pal Arinsal), and Sant Julià de Lòria (southern entry from Spain). Supply is tight, prices have risen sharply post-pandemic, and agents operate through Cambra Immobiliària d'Andorra members.",
    expectations:
      "A modern two-bedroom apartment in Escaldes or Andorra la Vella typically rents for EUR 1,200-2,000/month; premium properties with views and parking run higher; ski-proximate chalets in Canillo or La Massana are priced on the winter season as well as annual. Long-term leases are typically one year with two months' deposit plus first month plus agent commission (usually one month). Purchase prices range from EUR 4,000/m² for older apartments to EUR 8,000-12,000+/m² for new premium builds. Rentals and purchases alike are usually facilitated by a gestoria (administrative intermediary) who handles registration, utilities (FEDA for electricity, FEDA and local services for water and waste), and Servei d'Immigració documentation."
  },
  healthcareReality:
    "Andorra's healthcare is centered on the Hospital Nostra Senyora de Meritxell in Escaldes-Engordany, a modern 200-bed facility with a broad specialty mix. CASS (Caixa Andorrana de Seguretat Social) operates a reimbursement-based scheme: patients typically pay upfront and claim back 75% for most services, with complementary private insurance often covering the remaining 25%. Complex or highly specialized procedures may be referred to partner hospitals in Toulouse (France) and Barcelona (Spain), both within 2-3 hours by road. Private clinics in Andorra la Vella and Escaldes provide same-day consultations for those with private coverage. Pharmacies are plentiful and well stocked, and many medications are cheaper than in neighboring France and Spain due to IGI at 4.5%. For passive residents, comprehensive private health insurance with Andorra, France, and Spain coverage is a practical standard.",
  digitalLife: {
    overview:
      "Andorra Telecom (STA) is the sole telecoms provider, delivering fiber internet to virtually the entire population at speeds up to 1 Gbps and modern 4G/5G mobile coverage. Despite the country's small size, connectivity is excellent. E-government has advanced through the Tràmits portal, though some procedures still require in-person visits at the parish comú (town hall) or the Govern d'Andorra.",
    essentials: [
      "Andorra Telecom (STA) SIM and fiber contract for mobile data and home internet",
      "Tràmits.ad portal for many government e-services and document filings",
      "CASS app for reimbursement claims and personal health data (for active residents)",
      "Local bank apps (Andbank, MoraBanc, Creand, Vall Banc) for domestic and international transfers"
    ],
    whatSurprisesNewcomers: [
      "Being the only Catalan-speaking sovereign state matters - Catalan is the language of government and the official language; Spanish and French are widely spoken but Catalan is prioritized in formal life.",
      "Not being in Schengen creates small but real frictions - border controls at France and Spain are selective and usually smooth, but formal visa planning for non-EU nationals must route via Schengen entry.",
      "Gestories (administrative intermediaries) handle much of the practical life of setting up - immigration, property, utilities, vehicle registration. Budget for their services; they are a real value-add.",
      "Banking standards have converged sharply with EU norms - AML and substance requirements are real; account opening requires documentation comparable to Switzerland or Luxembourg."
    ]
  },
  culture: {
    text: "Andorran culture is deeply Catalan, with strong Pyrenean mountain traditions and layers of Spanish, French, and Portuguese influence from the country's substantial immigrant population (Portuguese speakers alone are around a sixth of residents). National Day is 8 September, the feast of Our Lady of Meritxell. Sant Jordi (23 April) is celebrated as in Catalonia, with books and roses exchanged. Skiing is a national culture in itself - every schoolchild learns on public ski programs, and the calendar is structured around the snow season. Summer brings festes majors in each parish with music, traditional dancing (the contrapàs), and food. Social life is compact and village-like; people know each other across parishes, and reputation travels. Cuisine is rooted in Catalan mountain traditions - trinxat (cabbage and potato mash with pork), escudella, cargols (snails), and escalivada are staples, alongside Spanish and French influences. The pace is deliberately slower than in the big neighboring cities.",
    highlights: [
      "Catalan first - even if you use Spanish or French, a few Catalan words ('bon dia', 'si us plau', 'gràcies') signal respect and are appreciated.",
      "Skiing is national culture, not just a sport - taking lessons and skiing with colleagues is a common social rite for newcomers.",
      "Parish identity matters - Andorra la Vella, Escaldes, La Massana, Ordino, Encamp, Canillo, Sant Julià de Lòria each have distinct character and rivalries.",
      "Sant Jordi, Meritxell Day (8 September), and parish festes are the civic calendar anchors - participation builds integration quickly.",
      "Mountain etiquette - greeting on hiking paths, respecting livestock, and cleaning up after yourself - is a shared cultural baseline."
    ]
  },
  transportationMobility:
    "Andorra has no railway and no airport within its borders. The country is accessed by road from France (via the RN22 from Toulouse and the Envalira tunnel) and Spain (via the N-145 from La Seu d'Urgell). Daily bus services connect Andorra la Vella to Barcelona (about 3 hours), Toulouse (about 3 hours), Lleida, Madrid, and to the nearest rail stations (L'Hospitalet-près-l'Andorre on the French side, La Tor de Querol for onward TGV connections). Within the country, Cooperativa Interurbana Andorrana operates a reliable bus network connecting the seven parishes. Taxis are readily available; ride-hailing is not widely used. Car ownership is common and practical, particularly for mountain life. Winter driving with snow chains or winter tires is necessary from roughly November through April. Cycling infrastructure for road cycling and mountain biking is developed and part of summer tourism.",
  internationalConnectivity:
    "The closest international airports are Barcelona-El Prat (BCN), roughly 3 hours by road with direct bus service, and Toulouse-Blagnac (TLS), also about 3 hours. Both offer extensive European networks; BCN adds significant long-haul coverage (North America, Latin America, Middle East, Asia). Andorra-La Seu d'Urgell Airport (LEU), 20 minutes over the border in Spain, offers a small number of seasonal regional flights. The TGV from Paris connects to L'Hospitalet-près-l'Andorre for onward bus into Andorra; the AVE high-speed rail from Madrid reaches Lleida, where connecting bus or car access the country in under 3 hours.",
  travelExploration:
    "Andorra itself offers world-class skiing at Grandvalira (combining the Canillo-Soldeu-El Tarter-Pas de la Casa areas, the largest ski area in the Pyrenees) and Vallnord (Pal-Arinsal and Ordino-Arcalís). In summer, the Madriu-Perafita-Claror valley is a UNESCO World Heritage Site and a hiker's favorite; the GRP trail loops the country on multi-day treks. Caldea and Inúu in Escaldes-Engordany are among Europe's largest thermal spa complexes. Cultural stops include the Romanesque churches of Sant Joan de Caselles, Santa Coloma, and Meritxell, and the Casa de la Vall, the historic seat of parliament. Weekend trips by road take you to Barcelona, the Costa Brava, the Catalan coast, the Cerdanya plateau, Toulouse, Carcassonne, Perpignan, and the Ariège valleys - essentially, the entire eastern Pyrenees and northern Catalan/Occitan world is within easy reach.",
  considerations: [
    "Capital barrier to entry: passive residency requires a EUR 400,000 qualifying investment plus the AFA deposit (EUR 47,500 main applicant + EUR 10,000 per dependent). This is a meaningful financial decision that should be planned with Andorran and home-country advisors.",
    "Not EU, not Schengen: customs and border specifics matter, especially for non-EU nationals. Routing visas through France or Spain is the practical workaround for short-stay travel.",
    "Genuine presence is enforced: passive residency requires at least 90 days of annual presence in Andorra, and tax residency typically requires 183+ days. Paper-only residency does not work.",
    "Real estate costs have climbed sharply: buying or renting suitable compliant accommodation is a meaningful cost that should be budgeted at 2023-2024 price levels, not older reference points.",
    "The 10% IRPF regime is real and durable, but your home-country tax exit must be clean for it to deliver its intended benefit. Exit-tax and CFC rules in high-tax departures (France, Spain, UK, Germany, Italy) require careful planning."
  ],
  mistakes: [
    "Assuming Andorra is in Schengen or the EU - it is neither. Plan visa and travel logistics accordingly, especially for non-EU nationals.",
    "Underestimating the AFA deposit and qualifying-investment commitment for passive residency. The EUR 400,000 investment plus AFA deposit is a real entry prerequisite, not a soft target.",
    "Treating residency as a postbox for tax benefits. Effective-presence checks and tax residency rules catch this and can lead to revocation and retroactive tax exposure.",
    "Skipping proper tax-exit planning from the home country. Exit taxes, continuing domicile (UK), worldwide taxation (US citizens), and centre-of-interests tests (Spain, France) can neutralize the Andorran tax benefit if handled carelessly.",
    "Overlooking the language nuance - Catalan is official and matters for integration. Defaulting to Spanish or French everywhere is understood but is not the same as engaging with the country on its own terms."
  ],
  emergency: [
    {
      number: '112',
      service: 'Unified Emergency Services',
      description: 'European universal emergency number for police, ambulance, and fire. Operators speak Catalan, Spanish, and French, usually with some English.'
    },
    {
      number: '110',
      service: 'Police (Cos de Policia)',
      description: 'Direct line to the Andorran police. Response times are typically very fast given the country size.'
    },
    {
      number: '118',
      service: 'Fire and Rescue (Bombers)',
      description: 'Andorran fire and rescue services. Also coordinates mountain rescue with specialist units.'
    }
  ],
  sources: [
    {
      name: "Servei d'Immigració - Govern d'Andorra",
      category: 'Immigration & Residency',
      description: "The immigration service handling all residency categories, work permits, and renewals for foreign nationals.",
      link: "https://www.immigracio.ad/"
    },
    {
      name: "Govern d'Andorra",
      category: 'Government Portal',
      description: "Official government portal covering tax, residence, business, civic services, and the Tràmits e-government platform.",
      link: 'https://www.govern.ad/'
    },
    {
      name: 'Autoritat Financera Andorrana (AFA)',
      category: 'Finance & Banking',
      description: "The Andorran Financial Authority supervises banks and investment firms and manages the mandatory residency deposit for passive residents.",
      link: "https://www.afa.ad/"
    },
    {
      name: 'Caixa Andorrana de Seguretat Social (CASS)',
      category: 'Social Security & Healthcare',
      description: "Administers Andorran social security, the reimbursement-based health insurance scheme, pensions, and family benefits.",
      link: 'https://www.cass.ad/'
    }
  ],
  embassies: {
    description: "Andorra maintains a limited diplomatic network. For consular assistance, passport services, and official guidance, consult the Andorran Ministry of Foreign Affairs or an Andorran embassy in a capital city (Paris, Madrid, Brussels, Lisbon, Washington, New York UN Mission).",
    directoryLink: 'https://www.embassypages.com/andorra',
    mfaLink: 'https://www.exteriors.ad/'
  },
  serviceDirectory: {
    title: "Service Directory - Andorra",
    description: "Examples of commonly used service providers people often interact with when relocating to Andorra.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialist counsel for active and passive residency applications, corporate formation, and tax structuring.",
        providers: [
          { name: "Cases & Lacambra", link: "https://www.caseslacambra.com" },
          { name: "Augé Grup", link: "https://www.auge-grup.com" },
          { name: "Silver Tax Group Andorra", link: "https://www.silvertax.es" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies handling apartment and chalet rentals and purchases in the seven parishes.",
        providers: [
          { name: "Cisa Immobiliària", link: "https://www.cisa.ad" },
          { name: "Engel & Völkers Andorra", link: "https://www.engelvoelkers.com/andorra" },
          { name: "Cambra Immobiliària d'Andorra", link: "https://www.cai.ad" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Firms advising on Andorran IRPF, IGI, corporate tax, and cross-border planning for new residents.",
        providers: [
          { name: "KPMG Andorra", link: "https://kpmg.com/ad" },
          { name: "Deloitte Andorra", link: "https://www2.deloitte.com/ad" },
          { name: "Crowe Andorra", link: "https://www.crowe.com/ad" }
        ]
      },
      {
        name: "Moving Companies",
        description: "Relocation firms experienced with Andorran customs union specifics and mountain-road logistics.",
        providers: [
          { name: "AGS Movers Andorra", link: "https://www.agsmovers.com" },
          { name: "Mudances Pyrenees", link: "https://www.mudancespyrenees.com" },
          { name: "Crown Relocations", link: "https://www.crownrelo.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Catalan, Spanish, and French schools and tutors for newcomers adapting to Andorran life.",
        providers: [
          { name: "Universitat d'Andorra (Catalan courses)", link: "https://www.uda.ad" },
          { name: "Alliance Française d'Andorre", link: "https://www.afandorre.com" },
          { name: "Berlitz (Barcelona and Toulouse)", link: "https://www.berlitz.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Main hospital and insurers used by residents for everyday and specialist care.",
        providers: [
          { name: "Hospital Nostra Senyora de Meritxell", link: "https://www.hospitalandorra.ad" },
          { name: "CASS (Caixa Andorrana de Seguretat Social)", link: "https://www.cass.ad" },
          { name: "Cigna Global (International Health Insurance)", link: "https://www.cignaglobal.com" }
        ]
      },
      {
        name: "Banking & Wealth Management",
        description: "Principal Andorran banks commonly used by new residents for account opening and wealth management.",
        providers: [
          { name: "Andbank", link: "https://www.andbank.com" },
          { name: "MoraBanc", link: "https://www.morabanc.ad" },
          { name: "Creand (Crèdit Andorrà)", link: "https://www.creand.com" }
        ]
      }
    ]
  }
};
