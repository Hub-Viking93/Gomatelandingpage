export const extendedData = {
  // --- SPECIFIC COUNTRIES ---
  sweden: {
    housingSystem: {
      overview:
        "Sweden has a unique 'queue' system for first-hand rentals (contracts directly with landlords), which can take 10+ years in Stockholm. Most newcomers enter the 'second-hand' market (subletting). It is regulated but expensive. Buying is common but requires a 15% deposit.",
      expectations:
        "Finding a rental is a full-time job. Use 'Blocket' and 'Qasa' (safer for deposits). Beware of scams asking for payment before viewing.",
    },
  },
  germany: {
    housingSystem: {
      overview:
        "The German market favors long-term tenants with strong protections. Landlords demand a 'Schufa' (credit score) and 3 payslips. Apartments often come completely empty—no light fixtures and NO KITCHEN (you buy and install your own sink/stove).",
      expectations:
        "Use 'Immobilienscout24' or 'WG-Gesucht' (shared flats). Competition is fierce; bring a printed 'application portfolio' to viewings.",
    },
  },
  'united-kingdom': {
    housingSystem: {
      overview:
        "High turnover and fast-paced. Rentals are mostly private via agencies. 'Right to Rent' checks are mandatory (landlords must verify your visa). Contracts are usually 12 months with a 6-month break clause. Council tax is extra.",
      expectations:
        "Use 'Rightmove' and 'Zoopla'. In London, be prepared to put down a holding deposit immediately after viewing.",
    },
  },
  japan: {
    housingSystem: {
      overview:
        "Highly formalized. You typically pay 4-6 months' rent upfront: Deposit, Key Money (gift to landlord), Agency Fee, Guarantor Fee, and Insurance. Many landlords refuse foreigners, so using expat-friendly agencies is crucial.",
      expectations:
        "Use 'Suumo' (Japanese) or 'GaijinPot' (English). Short-term 'share houses' are the easiest entry point to avoid high startup costs.",
    },
  },
  'united-states': {
    housingSystem: {
      overview:
        "Credit score driven. Landlords require a US credit history. Without it, you may need to pay 6-12 months upfront or use a co-signer. Leases are legally binding for the full term. Complexes with amenities (gym/pool) are common.",
      expectations:
        "Use 'Zillow' or 'Apartments.com'. Craigslist is common but full of scams. Corporate housing is a safe initial bridge.",
    },
  },
  france: {
    housingSystem: {
      overview:
        "Heavily regulated and bureaucratic. Landlords require a 'Dossier' (file) with proof of income 3x the rent. A local guarantor (garant) is almost always required; if you don't have one, use the 'Visale' guarantee system.",
      expectations:
        "Use 'Leboncoin' (direct) or 'SeLoger'. Be prepared for a competitive, interview-like process.",
    },
  },
  netherlands: {
    housingSystem: {
      overview:
        "Severe housing shortage. The market is split into 'Social' (income-capped, long waitlists) and 'Private' (free market, expensive). Many rentals legally require income 3-4x the monthly rent.",
      expectations:
        "Use 'Funda' or 'Pararius'. Watch out for illegal sublets where registration at the municipality (Gemeente) is not allowed—you need registration for your BSN number.",
    },
  },
  spain: {
    housingSystem: {
      overview:
        "Mix of agencies and private landlords. Agency fees (1 month rent + VAT) are now legally charged to landlords in some cases, but enforcement varies. 'Idealista' is the dominant platform.",
      expectations:
        "Whatsapp is key for communication. It is normal to negotiate slightly. Be wary of listings that seem too cheap in major cities.",
    },
  },
};

const housingDefaults = {
  nordic: {
    overview:
      "Highly regulated rental markets often featuring public queues or waiting lists. Private subletting is the most common route for newcomers. High standard of living but high entry barriers.",
    expectations:
      "Expect rigorous vetting. Short-term furnished rentals are the best starting point while navigating the complex long-term system.",
  },
  westernEurope: {
    overview:
      "Formalized markets dominated by private landlords and agencies. Strong tenant rights make landlords risk-averse, often requiring significant proof of income (3x rent) and employment contracts.",
    expectations:
      "Prepare a document dossier (passport, contract, bank statements) before viewing. Inventory checks are thorough.",
  },
  southernEurope: {
    overview:
      "A mix of formal agencies and informal private arrangements. Ownership is high, so the rental stock can be older. 'Idealista' and local portals are dominant.",
    expectations:
      "Personal connections help. Cash payments are occasionally requested but risky. Ensure the contract allows for residency registration.",
  },
  easternEurope: {
    overview:
      "High home ownership rates mean the rental market is growing but can be fragmented. Modern apartments in cities are plentiful and accessible via local real estate sites.",
    expectations:
      "Using a real estate agent is common and often safer for foreigners. Fees are typically 50-100% of one month's rent.",
  },
  asiaDeveloped: {
    overview:
      "Fast-moving, efficient, and expensive. Contracts are standard. Agent fees are standard (0.5-1 month rent). Apartments are often smaller than Western standards.",
    expectations:
      "Cleanliness and rule-following are paramount. Most units come unfurnished or semi-furnished (appliances included).",
  },
  asiaDeveloping: {
    overview:
      "Two-tier system: local housing (very cheap, informal) and expat condos (modern, secure, amenities). Agents specifically catering to foreigners are the norm.",
    expectations:
      "Facebook groups and expat forums are surprisingly effective. Negotiation is expected. Contracts can be flexible (1-12 months).",
  },
  americas: {
    overview:
      "Variable by city. Gated communities or secure condo buildings are preferred by expats for safety. The market is generally faster and less bureaucratic than Europe.",
    expectations:
      "Furnished rentals are widely available. Airbnb is heavily used as a monthly bridge. Lease terms are often negotiable.",
  },
  englishSpeaking: {
    overview:
      "Online-first markets (Realestate.com.au, TradeMe, Rightmove). Open home inspections are the norm. Application speed is critical.",
    expectations:
      "References from previous landlords are heavily weighted. Be ready to apply digitally immediately after viewing.",
  },
};

// --- VISA OVERRIDES (per country) ---
// Keep this minimal and factual: authority + "where to see all visa categories" + high-level pathways.
const visaOverrides = {
  // ═══════════════════════════════════════════
  // NORDICS
  // ═══════════════════════════════════════════
  sweden: {
    agencyName: "Migrationsverket",
    agencyUrl: "https://www.migrationsverket.se/English/Private-individuals.html",
    overview: "Most long-stay options require employment, studies, or family ties. Tourist stays cannot be converted to work or residence permits in-country.",
    pathways: [
      { type: "Work Permit", description: "Requires a job offer from a Swedish employer. Employer must advertise the position in the EU first. Applied for before entry." },
      { type: "EU Blue Card", description: "For highly qualified workers with a university degree and a job offer meeting a salary threshold." },
      { type: "Residence Permit for Studies", description: "For university-level education. Proof of admission and sufficient funding required." },
      { type: "Family Reunification", description: "For spouses, partners, and children of Swedish residents or permit holders." },
      { type: "Working Holiday Visa", description: "For young adults (18–30) from selected countries (Australia, New Zealand, South Korea, etc.). Up to 1 year." },
    ],
  },
  norway: {
    agencyName: "UDI (Norwegian Directorate of Immigration)",
    agencyUrl: "https://www.udi.no/en/",
    overview: "Norway is not an EU member but is part of the EEA. EU/EEA citizens have freedom of movement; others need a residence permit for stays over 90 days.",
    pathways: [
      { type: "Skilled Worker Permit", description: "Requires a concrete job offer with terms meeting Norwegian standards. Employer must document the need." },
      { type: "Student Permit", description: "For admission to an approved full-time education programme. Proof of housing and finances required." },
      { type: "Family Immigration", description: "For close family members of Norwegian residents — spouses, cohabitants, and children." },
      { type: "Working Holiday Visa", description: "For young adults (18–30) from selected countries. Permits work and travel for up to 1 year." },
    ],
  },
  denmark: {
    agencyName: "SIRI (Danish Agency for International Recruitment and Integration)",
    agencyUrl: "https://www.nyidanmark.dk/en-GB",
    overview: "Denmark has strict immigration rules. Work permits require a job offer meeting the Pay Limit or Positive List schemes. EU citizens have free movement.",
    pathways: [
      { type: "Positive List (Work)", description: "For professions on Denmark's shortage list. Requires a relevant job offer." },
      { type: "Student Residence Permit", description: "For full-time higher education in Denmark. Proof of admission, finances, and health insurance required." },
      { type: "Family Reunification", description: "For spouses and children of Danish residents. Strict requirements including the 'attachment requirement' and financial guarantees." },
      { type: "Working Holiday Visa", description: "For young adults (18–30) from selected countries (Australia, New Zealand, Japan, etc.)." },
    ],
  },
  iceland: {
    agencyName: "Útlendingastofnun (Directorate of Immigration)",
    agencyUrl: "https://utl.is/en/",
    overview: "Iceland is part of the EEA. EU/EEA citizens can work freely; others need a work or residence permit tied to a specific job or study programme.",
    pathways: [
      { type: "Work Permit", description: "Requires a job offer from an Icelandic employer. Employer must prove no suitable EEA candidate was available." },
      { type: "Student Permit", description: "For accepted students at Icelandic educational institutions. Proof of financial means required." },
      { type: "Family Reunification", description: "For spouses and minor children of Icelandic residents or permit holders." },
    ],
  },
  finland: {
    agencyName: "Finnish Immigration Service (Migri)",
    agencyUrl: "https://migri.fi/en/home",
    overview: "Finland has a structured residence permit system. All non-EU citizens staying over 90 days need a permit. Applications are usually filed before entry.",
    pathways: [
      { type: "Residence Permit for Employed Person", description: "For those with a job offer in Finland. Employer must conduct a labour market test in most cases." },
      { type: "Student Residence Permit", description: "For degree students at Finnish higher education institutions. Proof of funding and insurance required." },
      { type: "Family Member Permit", description: "For close family members (spouse, children) of Finnish residents." },
    ],
  },

  // ═══════════════════════════════════════════
  // WESTERN EUROPE
  // ═══════════════════════════════════════════
  germany: {
    agencyName: "Federal Office for Migration and Refugees (BAMF)",
    agencyUrl: "https://www.make-it-in-germany.com/en/visa-residence/types",
    overview: "Germany offers multiple pathways for skilled workers, especially through the EU Blue Card and the new Skilled Immigration Act. Most permits require a recognised qualification and a job offer.",
    pathways: [
      { type: "EU Blue Card", description: "For university graduates with a job offer meeting a minimum salary. Fast path to permanent residence." },
      { type: "Employment Residence Permit (§18)", description: "For qualified workers with a job offer and recognised qualifications." },
      { type: "Student Visa", description: "For admission to a German university. Requires proof of admission, finances (blocked account), and health insurance." },
      { type: "Family Reunification", description: "For spouses and children of residents. Basic German language skills (A1) usually required for spouses." },
    ],
  },
  netherlands: {
    agencyName: "IND (Immigration and Naturalisation Service)",
    agencyUrl: "https://ind.nl/en",
    overview: "The Netherlands has a well-structured immigration system. Highly skilled migrants and students have dedicated pathways. Most work permits require employer sponsorship by an IND-recognised sponsor.",
    pathways: [
      { type: "Highly Skilled Migrant (Kennismigrant)", description: "For workers sponsored by an IND-recognised employer, meeting a salary threshold. Most common work pathway." },
      { type: "Single Permit (Work)", description: "Combined residence and work permit for employees not qualifying as highly skilled migrants." },
      { type: "Student Residence Permit", description: "For degree students at Dutch educational institutions. Sponsored by the institution." },
      { type: "Family Reunification", description: "For spouses and children of Dutch residents. Income and housing requirements apply." },
    ],
  },
  belgium: {
    agencyName: "Belgian Immigration Office",
    agencyUrl: "https://dofi.ibz.be/en",
    overview: "Belgium's immigration is managed at both federal and regional level. Work permits vary by region (Flanders, Wallonia, Brussels). The Single Permit combines work and residence.",
    pathways: [
      { type: "Single Permit (Work)", description: "Combined work and residence permit. Applied for by the employer. Duration matches the employment contract." },
      { type: "EU Blue Card", description: "For highly qualified workers with a degree and a high-salary job offer." },
      { type: "Student Visa", description: "For full-time higher education. Requires proof of enrolment, sufficient funds, and health insurance." },
      { type: "Family Reunification", description: "For spouses and children of Belgian residents. Proof of adequate housing and income required." },
    ],
  },
  austria: {
    agencyName: "Federal Ministry of the Interior (BMI)",
    agencyUrl: "https://www.migration.gv.at/en/",
    overview: "Austria uses a points-based Red-White-Red Card system for skilled workers. EU citizens have free movement; others need a residence permit for stays over 90 days.",
    pathways: [
      { type: "EU Blue Card", description: "For highly qualified workers with a university degree and a high-salary job offer." },
      { type: "Student Residence Permit", description: "For admission to an Austrian university. Proof of financial means and health insurance required." },
      { type: "Family Reunification (Red-White-Red Card plus)", description: "For family members of Red-White-Red Card holders. Grants open access to the labour market." },
    ],
  },
  switzerland: {
    agencyName: "State Secretariat for Migration (SEM)",
    agencyUrl: "https://www.sem.admin.ch/sem/en/home.html",
    overview: "Switzerland is not in the EU but has bilateral agreements granting EU/EFTA citizens easier access. Non-EU nationals face strict quotas and requirements.",
    pathways: [
      { type: "Student Permit", description: "For admission to a Swiss educational institution. Proof of financial means and acceptance required." },
      { type: "Family Reunification", description: "For spouses and children of permit holders. Must demonstrate adequate housing and income." },
    ],
  },
  ireland: {
    agencyName: "Irish Naturalisation and Immigration Service (INIS)",
    agencyUrl: "https://www.irishimmigration.ie/",
    overview: "Ireland is an EU member but not part of the Schengen Area. It has its own visa and stamp system. Critical Skills permits attract skilled workers; the tech sector is a major employer of migrants.",
    pathways: [
      { type: "Critical Skills Employment Permit", description: "For occupations on Ireland's Critical Skills list (tech, engineering, healthcare). Fast-track to residency." },
      { type: "General Employment Permit", description: "For job offers meeting a minimum salary threshold in non-critical occupations. Labour market needs test applies." },
      { type: "Student Visa (Stamp 2)", description: "For full-time students at recognised institutions. Allows part-time work (20 hrs/week during term)." },
      { type: "Family Visa (Stamp 3/4)", description: "For dependants of work permit holders or Irish citizens." },
      { type: "Working Holiday Visa", description: "For young adults (18–30/35) from selected countries (Australia, Canada, etc.). Up to 1–2 years." },
    ],
  },
  france: {
    agencyName: "France-Visas / Ministry of the Interior",
    agencyUrl: "https://france-visas.gouv.fr/en/web/france-visas",
    overview: "France has a multi-layered immigration system. Most long-stay visas convert into a 'Titre de Séjour' (residence permit) after arrival. The Passeport Talent targets skilled workers and entrepreneurs.",
    pathways: [
      { type: "Salarié (Employee Permit)", description: "For workers with a job offer in France. Employer must obtain work authorisation from DREETS." },
      { type: "Student Visa (VLS-TS Étudiant)", description: "For higher education in France. Must register through Campus France. Part-time work allowed." },
      { type: "Family Reunification", description: "For spouses and children of French residents. Requires 18+ months of legal residence by the sponsor." },
      { type: "Working Holiday Visa (Vacances-Travail)", description: "For young adults (18–30/35) from selected countries (Australia, Canada, Japan, etc.)." },
    ],
  },
  luxembourg: {
    agencyName: "Directorate of Immigration",
    agencyUrl: "https://guichet.public.lu/en/citoyens/immigration.html",
    overview: "Luxembourg's small, multilingual economy attracts international workers. EU citizens have free movement; non-EU citizens need a work permit and residence authorisation.",
    pathways: [
      { type: "Salaried Worker Permit", description: "For employees with a signed contract. Employer must prove no suitable EU/EEA candidate was found." },
      { type: "EU Blue Card", description: "For highly qualified workers with a degree and a job offer meeting the salary threshold." },
      { type: "Student Residence Permit", description: "For full-time students at recognised institutions in Luxembourg." },
      { type: "Family Reunification", description: "For family members of legal residents. Income and housing requirements apply." },
      { type: "Self-employed Permit", description: "For entrepreneurs and self-employed professionals. Requires a business authorisation." },
    ],
  },
  liechtenstein: {
    agencyName: "Office of Migration and Passport (AMP)",
    agencyUrl: "https://www.llv.li/en/national-administration/office-of-migration-and-passport",
    overview: "Liechtenstein has extremely limited immigration — annual quotas of around 72 permits for EEA citizens and 17 for Swiss. Entry is mainly through employment.",
    pathways: [
      { type: "Student Permit", description: "For students at recognised institutions. Very limited availability." },
      { type: "Family Reunification", description: "For immediate family of permit holders. Subject to quota availability." },
    ],
  },
  'united-kingdom': {
    agencyName: "UK Visas and Immigration (UKVI)",
    agencyUrl: "https://www.gov.uk/browse/visas-immigration",
    overview: "Post-Brexit, the UK runs a points-based immigration system. Most routes require employer sponsorship and meeting a salary/skills threshold. EU citizens now need visas.",
    pathways: [
      { type: "Skilled Worker Visa", description: "For workers with a job offer from a licensed UK sponsor meeting the salary and skill threshold." },
      { type: "Student Visa", description: "For students with a confirmed place at a licensed institution. Proof of funds and English ability required." },
      { type: "Family Visa", description: "For partners, children, and parents of British citizens or settled persons. Minimum income requirement applies." },
    ],
  },
  serbia: {
    agencyName: "Ministry of Interior — Foreigners' Office",
    agencyUrl: "https://mup.gov.rs/wps/portal/en/information",
    overview: "Serbia offers relatively accessible immigration pathways. Many nationalities can stay visa-free for up to 90 days. Work and residence permits are needed for longer stays.",
    pathways: [
      { type: "Temporary Residence for Employment", description: "For foreign nationals with a job offer from a Serbian employer. Work permit issued alongside residence." },
      { type: "Student Residence Permit", description: "For enrolled students at Serbian educational institutions." },
      { type: "Family Reunification", description: "For immediate family members of Serbian residents or citizens." },
      { type: "Self-Employment Permit", description: "For foreign entrepreneurs registering a business in Serbia." },
    ],
  },

  // ═══════════════════════════════════════════
  // SOUTHERN EUROPE
  // ═══════════════════════════════════════════
  portugal: {
    agencyName: "AIMA (Agency for Integration, Migrations and Asylum)",
    agencyUrl: "https://aima.gov.pt/en/",
    overview: "Portugal has become one of Europe's most popular relocation destinations. The D7 (passive income) and Digital Nomad visas attract remote workers; the Golden Visa programme has been reformed.",
    pathways: [
      { type: "Work Visa (D1)", description: "For employees with a job offer or promise of employment from a Portuguese company." },
      { type: "Student Visa (D4)", description: "For students accepted at Portuguese educational institutions. Proof of funding required." },
      { type: "Family Reunification", description: "For family members of legal residents. Includes spouses, partners, and dependent children." },
    ],
  },
  spain: {
    agencyName: "Spanish Immigration Portal",
    agencyUrl: "https://inclusion.seg-social.es/web/migraciones/extranjeros",
    overview: "Spain offers several pathways including the popular Digital Nomad visa and Non-Lucrative visa. Work permits typically require employer sponsorship and a labour market test.",
    pathways: [
      { type: "Work Permit (Cuenta Ajena)", description: "For employees with a job offer. Employer must prove no suitable EU candidate exists." },
      { type: "Student Visa", description: "For full-time studies at recognised Spanish institutions. Proof of funds and health insurance required." },
      { type: "Family Reunification", description: "For family members of legal residents who have held a permit for at least 1 year." },
      { type: "Self-Employment Visa (Cuenta Propia)", description: "For entrepreneurs and self-employed professionals with a viable business plan for Spain." },
    ],
  },
  italy: {
    agencyName: "Ministry of Interior — Immigration Portal",
    agencyUrl: "https://vistoperitalia.esteri.it/home/en",
    overview: "Italy uses a quota system (Decreto Flussi) for work permits. The Nulla Osta is the key work authorisation document. EU citizens have free movement.",
    pathways: [
      { type: "Work Visa (Nulla Osta)", description: "For employed workers. Requires the employer to obtain a Nulla Osta (clearance) and be within the annual quota (Decreto Flussi)." },
      { type: "EU Blue Card", description: "For highly qualified professionals with a degree and a high-salary job offer." },
      { type: "Student Visa", description: "For university-level studies. Requires admission, proof of funds, and accommodation." },
      { type: "Family Reunification", description: "For family members of legal residents with adequate income and housing." },
    ],
  },
  greece: {
    agencyName: "Ministry of Migration and Asylum",
    agencyUrl: "https://migration.gov.gr/en/",
    overview: "Greece offers residency through employment, investment, and passive income. The Golden Visa has been popular with investors. Digital nomad visas are available.",
    pathways: [
      { type: "Work Permit", description: "For employees with a job offer. Employer applies on behalf of the worker. Labour market test applies." },
      { type: "Student Residence Permit", description: "For students admitted to Greek higher education institutions." },
      { type: "Family Reunification", description: "For family members of legal residents who have held a permit for at least 2 years." },
      { type: "Financially Independent Person", description: "For retirees and individuals with sufficient passive income to live in Greece." },
    ],
  },
  croatia: {
    agencyName: "Ministry of Interior — Foreigners",
    agencyUrl: "https://mup.gov.hr/aliens-702/702",
    overview: "Croatia joined the EU and Schengen in 2023. EU citizens have free movement. Non-EU citizens need a residence permit for work, study, or family. Digital nomad permits are available.",
    pathways: [
      { type: "Work Permit (Temporary Stay)", description: "For employees with a job offer from a Croatian employer. Annual quota applies for most occupations." },
      { type: "Student Residence Permit", description: "For full-time students at Croatian educational institutions." },
      { type: "Family Reunification", description: "For family members of Croatian residents or citizens." },
    ],
  },
  slovenia: {
    agencyName: "Administrative Units / Ministry of Interior",
    agencyUrl: "https://www.gov.si/en/topics/immigration/",
    overview: "Slovenia is a small EU/Schengen state. Work permits require employer sponsorship. The process is straightforward but can be slow for non-EU citizens.",
    pathways: [
      { type: "Single Permit (Work and Residence)", description: "Combined work and residence permit for employees with a job offer from a Slovenian employer." },
      { type: "EU Blue Card", description: "For highly qualified workers meeting the salary threshold." },
      { type: "Student Residence Permit", description: "For students admitted to Slovenian higher education institutions." },
      { type: "Family Reunification", description: "For close family members of Slovenian residents." },
    ],
  },
  malta: {
    agencyName: "Identity Malta Agency",
    agencyUrl: "https://www.identitymalta.com/",
    overview: "Malta offers several pathways for workers, students, and investors. Its Key Employee Initiative targets tech and gaming industry workers. English is an official language.",
    pathways: [
      { type: "Single Permit (Work)", description: "For employees with a job offer. Employer must apply. Tied to a specific employer." },
      { type: "Key Employee Initiative", description: "Fast-track work permit for highly qualified workers in specific sectors (gaming, tech, finance)." },
      { type: "Student Visa", description: "For students enrolled at licensed educational institutions in Malta." },
      { type: "Family Reunification", description: "For family members of legal residents." },
    ],
  },
  cyprus: {
    agencyName: "Civil Registry and Migration Department",
    agencyUrl: "https://www.moi.gov.cy/crmd/",
    overview: "Cyprus offers work permits, student visas, and a permanent residency-by-investment programme. EU citizens have free movement.",
    pathways: [
      { type: "Work Permit", description: "For employees with a job offer. Employer must apply and demonstrate need for a foreign worker." },
      { type: "Student Visa", description: "For full-time students at recognised institutions in Cyprus." },
      { type: "Family Reunification", description: "For family members of legal residents." },
    ],
  },

  // ═══════════════════════════════════════════
  // EASTERN EUROPE
  // ═══════════════════════════════════════════
  poland: {
    agencyName: "Office for Foreigners (Urząd do Spraw Cudzoziemców)",
    agencyUrl: "https://udsc.gov.pl/en/",
    overview: "Poland is a major destination for workers from Eastern Europe and Asia. Temporary residence permits cover work, study, and family. Processing can be slow at regional offices.",
    pathways: [
      { type: "Temporary Residence and Work Permit", description: "Combined permit for workers with a job offer. Most common pathway. Applied for at the regional voivodship office." },
      { type: "EU Blue Card", description: "For highly qualified workers with a degree and a high-salary job offer." },
      { type: "Student Residence Permit", description: "For full-time students at Polish universities." },
      { type: "Family Reunification", description: "For family members of legal residents in Poland." },
    ],
  },
  'czech-republic': {
    agencyName: "Ministry of Interior — Immigration",
    agencyUrl: "https://www.mvcr.cz/mvcren/article/third-country-nationals.aspx",
    overview: "The Czech Republic has well-defined pathways for skilled workers, students, and families. Employee Cards combine work and residence permits.",
    pathways: [
      { type: "Employee Card", description: "Combined work and residence permit for employed workers. Most common work pathway. Tied to a specific position." },
      { type: "EU Blue Card", description: "For highly qualified workers with a degree and a high-salary position." },
      { type: "Student Long-term Visa", description: "For full-time students at Czech educational institutions. Maximum 1 year, renewable." },
      { type: "Family Reunification", description: "For family members of Czech residents. Proof of accommodation and income required." },
    ],
  },
  hungary: {
    agencyName: "National Directorate-General for Aliens Policing (OIF)",
    agencyUrl: "https://oif.gov.hu/en",
    overview: "Hungary is an EU member with relatively accessible immigration pathways. Work permits are employer-sponsored and processed centrally.",
    pathways: [
      { type: "Single Permit (Work and Residence)", description: "For workers with a job offer from a Hungarian employer." },
      { type: "EU Blue Card", description: "For highly qualified workers with a degree and a high-salary job offer." },
      { type: "Student Residence Permit", description: "For students admitted to Hungarian higher education institutions." },
      { type: "Family Reunification", description: "For family members of legal residents." },
      { type: "White Card (Guest Worker)", description: "Temporary residence for workers — simplified process for certain nationalities." },
    ],
  },
  romania: {
    agencyName: "General Inspectorate for Immigration (IGI)",
    agencyUrl: "https://igi.mai.gov.ro/en/",
    overview: "Romania is an EU member. Non-EU citizens need a long-stay visa and residence permit for work, study, or family. The Digital Nomad visa was introduced in 2022.",
    pathways: [
      { type: "Work Permit (Aviz de Muncă)", description: "For employees with a job offer. Employer must obtain a work authorisation before the visa can be issued." },
      { type: "Student Visa", description: "For full-time students at Romanian universities." },
      { type: "Family Reunification", description: "For family members of Romanian residents." },
    ],
  },
  bulgaria: {
    agencyName: "Ministry of Interior — Migration Directorate",
    agencyUrl: "https://www.mvr.bg/en/",
    overview: "Bulgaria is an EU member with affordable living costs. Work permits require employer sponsorship. The process is relatively straightforward but can be slow.",
    pathways: [
      { type: "Single Permit (Work)", description: "For workers with a job offer from a Bulgarian employer. Employer applies to the Employment Agency." },
      { type: "EU Blue Card", description: "For highly qualified workers meeting salary and education requirements." },
      { type: "Student Residence Permit", description: "For students admitted to Bulgarian educational institutions." },
      { type: "Family Reunification", description: "For family members of Bulgarian residents or citizens." },
      { type: "Freelance / Self-Employment Permit", description: "For foreign nationals registering a company or working as freelancers in Bulgaria." },
    ],
  },
  slovakia: {
    agencyName: "Bureau of Border and Aliens Police",
    agencyUrl: "https://www.minv.sk/?residence-permits",
    overview: "Slovakia is an EU/Schengen member. Non-EU citizens need a temporary residence permit for work or study. Processing is done at Foreign Police departments.",
    pathways: [
      { type: "Temporary Residence for Employment", description: "For workers with a job offer. Labour market test may be required." },
      { type: "EU Blue Card", description: "For highly qualified workers with a degree and a high-salary job offer." },
      { type: "Student Residence Permit", description: "For full-time students at Slovak universities." },
      { type: "Family Reunification", description: "For family members of Slovak residents." },
    ],
  },
  estonia: {
    agencyName: "Police and Border Guard Board (PPA)",
    agencyUrl: "https://www.politsei.ee/en/instructions/information-for-a-foreigner-who-wishes-to-visit-or-live-in-estonia",
    overview: "Estonia is a digital-first country. Its e-Residency programme is for business, not physical residency. Work permits require a salary threshold. The Digital Nomad visa was one of the first in Europe.",
    pathways: [
      { type: "Temporary Residence Permit for Employment", description: "For workers with a job offer meeting the salary threshold (at least the Estonian average wage)." },
      { type: "Student Residence Permit", description: "For students admitted to Estonian educational institutions." },
      { type: "Family Reunification", description: "For spouses and children of Estonian residents." },
    ],
  },
  latvia: {
    agencyName: "Office of Citizenship and Migration Affairs (PMLP)",
    agencyUrl: "https://www.pmlp.gov.lv/en",
    overview: "Latvia is an EU/Schengen member. Work permits require employer sponsorship. Real estate investment can qualify for a temporary residence permit.",
    pathways: [
      { type: "Work Permit", description: "For employees with a job offer from a Latvian employer. Labour market test may apply." },
      { type: "Student Residence Permit", description: "For students enrolled at Latvian educational institutions." },
      { type: "Family Reunification", description: "For family members of Latvian residents." },
      { type: "Self-Employment Permit", description: "For foreign nationals starting or running a business in Latvia." },
    ],
  },
  lithuania: {
    agencyName: "Migration Department (Migracijos departamentas)",
    agencyUrl: "https://www.migracija.lt/en/",
    overview: "Lithuania is an EU/Schengen member with a growing tech ecosystem. Work permits require employer sponsorship. Startup visas are available for tech entrepreneurs.",
    pathways: [
      { type: "Temporary Residence Permit for Employment", description: "For workers with a job offer. Employer must confirm the position cannot be filled locally." },
      { type: "EU Blue Card", description: "For highly qualified workers meeting salary and education requirements." },
      { type: "Student Residence Permit", description: "For students admitted to Lithuanian higher education institutions." },
      { type: "Family Reunification", description: "For family members of Lithuanian residents." },
    ],
  },

  // ═══════════════════════════════════════════
  // AMERICAS
  // ═══════════════════════════════════════════
  'united-states': {
    agencyName: "USCIS (U.S. Citizenship and Immigration Services)",
    agencyUrl: "https://www.uscis.gov/",
    overview: "The US has a complex, category-based immigration system with employer-sponsored, family-based, and lottery pathways. Most work visas require employer petition and have annual caps.",
    pathways: [
      { type: "F-1 (Student Visa)", description: "For full-time students at SEVP-certified institutions. Allows limited on-campus work; OPT available after graduation." },
      { type: "Family-Based Immigration", description: "For immediate relatives (spouses, children, parents) of US citizens, and family preference categories." },
    ],
  },
  canada: {
    agencyName: "Immigration, Refugees and Citizenship Canada (IRCC)",
    agencyUrl: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    overview: "Canada actively seeks skilled immigrants through points-based systems (Express Entry), provincial programmes, and dedicated student/family pathways.",
    pathways: [
      { type: "Express Entry (Federal Skilled Worker)", description: "Points-based pathway for skilled workers. No job offer needed but one adds points. CRS score determines selection." },
      { type: "LMIA Work Permit", description: "Employer-sponsored work permit. Employer must obtain a Labour Market Impact Assessment proving need." },
      { type: "Study Permit", description: "For students at designated learning institutions (DLIs). Allows part-time work during studies." },
      { type: "Family Sponsorship", description: "Canadian citizens/PRs can sponsor spouses, common-law partners, dependent children, and parents." },
    ],
  },
  mexico: {
    agencyName: "Instituto Nacional de Migración (INM)",
    agencyUrl: "https://www.gob.mx/inm",
    overview: "Mexico has accessible immigration pathways. Many nationalities get 180 days visa-free. Temporary and permanent residency are available through work, income, or family ties.",
    pathways: [
      { type: "Temporary Resident Visa (Work)", description: "For employees with a job offer from a Mexican company. Employer must apply to INM." },
      { type: "Student Visa", description: "For students admitted to Mexican educational institutions." },
      { type: "Family Unity Visa", description: "For family members of Mexican nationals or residents." },
    ],
  },
  brazil: {
    agencyName: "Ministry of Justice — Migration (MJSP)",
    agencyUrl: "https://www.gov.br/pf/pt-br/assuntos/imigracao",
    overview: "Brazil offers work visas, student visas, family reunification, and a popular Digital Nomad visa. Most visas require consular processing before entry.",
    pathways: [
      { type: "Work Visa (VITEM V)", description: "For employees with a job offer from a Brazilian company. Employer must petition the Ministry of Justice." },
      { type: "Student Visa (VITEM IV)", description: "For students admitted to Brazilian educational institutions." },
      { type: "Family Reunion Visa (VITEM XI)", description: "For spouses, partners, and dependants of Brazilian citizens or residents." },
    ],
  },
  chile: {
    agencyName: "Servicio Nacional de Migraciones",
    agencyUrl: "https://serviciomigraciones.cl/",
    overview: "Chile has modernised its immigration system. Work visas are employer-sponsored. The country offers relatively straightforward pathways for workers, students, and families.",
    pathways: [
      { type: "Work Visa (Visa Sujeta a Contrato)", description: "Tied to a specific employer and job contract. Most common work pathway." },
      { type: "Student Visa", description: "For full-time students at Chilean educational institutions." },
      { type: "Family Reunification", description: "For spouses and children of Chilean residents or citizens." },
    ],
  },
  argentina: {
    agencyName: "Dirección Nacional de Migraciones",
    agencyUrl: "https://www.argentina.gob.ar/interior/migraciones",
    overview: "Argentina has relatively open immigration policies. MERCOSUR citizens have simplified pathways. Work and student visas are available for non-MERCOSUR nationals.",
    pathways: [
      { type: "Temporary Residence (Work)", description: "For workers with a job offer or contract from an Argentine employer." },
      { type: "Student Visa", description: "For students admitted to Argentine educational institutions." },
      { type: "Family Reunification", description: "For family members of Argentine citizens or residents." },
    ],
  },
  colombia: {
    agencyName: "Migración Colombia",
    agencyUrl: "https://www.migracioncolombia.gov.co/",
    overview: "Colombia offers visitor and migrant visas. The Digital Nomad visa (V-type) is popular. Work visas require employer sponsorship. Family-based migration is available.",
    pathways: [
      { type: "Worker Visa (M-type)", description: "For employees with a job offer from a Colombian company. Employer must apply." },
      { type: "Student Visa (V-type)", description: "For students enrolled at Colombian educational institutions." },
      { type: "Family Visa (M-type Beneficiario)", description: "For family members of Colombian nationals or residents." },
    ],
  },
  uruguay: {
    agencyName: "Dirección Nacional de Migración",
    agencyUrl: "https://migracion.gub.uy/",
    overview: "Uruguay has welcoming immigration policies. Temporary and permanent residency are relatively accessible. MERCOSUR citizens have simplified pathways.",
    pathways: [
      { type: "Work Visa (Temporary Residence)", description: "For workers with employment in Uruguay. Applied for in-country after arrival." },
      { type: "Student Visa", description: "For students at Uruguayan educational institutions." },
      { type: "Family Reunification", description: "For family members of Uruguayan citizens or residents." },
    ],
  },
  peru: {
    agencyName: "Superintendencia Nacional de Migraciones",
    agencyUrl: "https://www.migraciones.gob.pe/",
    overview: "Peru offers various residency categories. Work permits are employer-sponsored. The Digital Nomad visa was introduced to attract remote workers.",
    pathways: [
      { type: "Work Visa (Calidad Migratoria Trabajador)", description: "For employees with a signed contract from a Peruvian employer." },
      { type: "Student Visa", description: "For students admitted to Peruvian educational institutions." },
      { type: "Family Reunification", description: "For family members of Peruvian residents or citizens." },
    ],
  },
  ecuador: {
    agencyName: "Ministry of Foreign Affairs — Visas",
    agencyUrl: "https://www.cancilleria.gob.ec/",
    overview: "Ecuador has accessible immigration pathways, especially for retirees. The cost of living is low and the country uses the US dollar. Work and investment visas are available.",
    pathways: [
      { type: "Work Visa (Professional)", description: "For employees or professionals with a job offer or contract in Ecuador." },
      { type: "Student Visa", description: "For students enrolled at Ecuadorian educational institutions." },
      { type: "Family Reunification", description: "For family members of Ecuadorian residents." },
    ],
  },
  paraguay: {
    agencyName: "Dirección General de Migraciones",
    agencyUrl: "https://www.migraciones.gov.py/",
    overview: "Paraguay has one of the easiest permanent residency programmes in South America. Requirements are minimal and processing is relatively fast.",
    pathways: [
      { type: "Temporary Residence (Work)", description: "For workers with employment or a business in Paraguay." },
      { type: "Student Visa", description: "For students at Paraguayan educational institutions." },
      { type: "Family Reunification", description: "For family members of Paraguayan residents." },
    ],
  },
  panama: {
    agencyName: "Servicio Nacional de Migración",
    agencyUrl: "https://www.migracion.gob.pa/",
    overview: "Panama offers attractive immigration options including the Friendly Nations visa and the popular Pensionado programme. Its territorial tax system is a draw for entrepreneurs.",
    pathways: [
      { type: "Work Permit", description: "For employees of Panamanian companies. Employer must sponsor and meet local hiring ratios." },
      { type: "Student Visa", description: "For students at Panamanian educational institutions." },
      { type: "Family Reunification (Dependiente)", description: "For dependants of Panamanian residents." },
    ],
  },
  'costa-rica': {
    agencyName: "Dirección General de Migración y Extranjería (DGME)",
    agencyUrl: "https://www.migracion.go.cr/",
    overview: "Costa Rica offers several residency categories. The Digital Nomad visa, Rentista, and Pensionado are popular with expats. Work permits require employer sponsorship.",
    pathways: [
      { type: "Work Permit", description: "For employees of Costa Rican companies. Employer must sponsor and prove no local candidate is available." },
      { type: "Student Visa", description: "For students at Costa Rican educational institutions." },
      { type: "Family Reunification (Vínculo)", description: "For family members of Costa Rican citizens or residents." },
    ],
  },
  guatemala: {
    agencyName: "Instituto Guatemalteco de Migración (IGM)",
    agencyUrl: "https://igm.gob.gt/",
    overview: "Guatemala allows visa-free entry for most Western nations (90 days under CA-4). Long-term residency requires a specific category — work, study, retirement, or family.",
    pathways: [
      { type: "Work Permit (Residencia Temporal - Trabajador)", description: "For employees with a job offer from a Guatemalan employer. Employer must apply to IGM." },
      { type: "Student Visa", description: "For students enrolled at Guatemalan educational institutions." },
      { type: "Family Reunification", description: "For family members of Guatemalan residents or citizens." },
    ],
  },
  nicaragua: {
    agencyName: "Dirección General de Migración y Extranjería",
    agencyUrl: "https://www.migob.gob.ni/migracion/",
    overview: "Nicaragua offers affordable living and relatively simple immigration. Most visitors get 90 days on arrival. Work and residency permits are available through employment, retirement, or investment.",
    pathways: [
      { type: "Work Visa (Cédula de Residencia Temporal)", description: "For employees with a job offer from a Nicaraguan company." },
      { type: "Student Visa", description: "For students at Nicaraguan educational institutions." },
      { type: "Family Reunification", description: "For family members of Nicaraguan residents." },
    ],
  },
  'dominican-republic': {
    agencyName: "Dirección General de Migración (DGM)",
    agencyUrl: "https://www.migracion.gob.do/",
    overview: "The Dominican Republic offers various residency options. Work, student, and investment visas are available. A Digital Nomad visa has been introduced.",
    pathways: [
      { type: "Work Visa (Residencia Temporal)", description: "For employees with a job offer from a Dominican employer." },
      { type: "Student Visa", description: "For students admitted to Dominican educational institutions." },
      { type: "Family Reunification (Dependiente)", description: "For family members of Dominican residents or citizens." },
    ],
  },
  jamaica: {
    agencyName: "Passport, Immigration and Citizenship Agency (PICA)",
    agencyUrl: "https://www.pica.gov.jm/",
    overview: "Jamaica requires a work permit for foreign nationals seeking employment. Student permits and family-based immigration are available. Tourism is visa-free for many nationalities.",
    pathways: [
      { type: "Work Permit", description: "For employees with a job offer from a Jamaican employer. Applied for by the employer." },
      { type: "Student Permit", description: "For students admitted to Jamaican educational institutions." },
      { type: "Family Visa (Dependent)", description: "For dependants of Jamaican residents or work permit holders." },
    ],
  },
  'trinidad-and-tobago': {
    agencyName: "Immigration Division — Ministry of National Security",
    agencyUrl: "https://www.immigration.gov.tt/",
    overview: "Trinidad and Tobago requires work permits for foreign employment. The energy sector is a major employer of foreign workers. Student and family permits are available.",
    pathways: [
      { type: "Work Permit", description: "For employees with a job offer. Employer must apply and demonstrate the position cannot be filled locally." },
      { type: "Student Permit", description: "For students admitted to recognised institutions in Trinidad and Tobago." },
      { type: "Family Reunification (Dependent)", description: "For family members of work permit holders or citizens." },
      { type: "CARICOM Skilled Nationals", description: "Simplified work access for skilled nationals from CARICOM member states." },
    ],
  },
  barbados: {
    agencyName: "Immigration Department — Barbados",
    agencyUrl: "https://www.immigration.gov.bb/",
    overview: "Barbados requires work permits for foreign employment. The Welcome Stamp (digital nomad visa) attracts remote workers. Family and student permits are available.",
    pathways: [
      { type: "Work Permit", description: "For employees with a job offer from a Barbadian employer." },
      { type: "Student Permit", description: "For students admitted to Barbadian educational institutions." },
      { type: "Family Reunification (Dependent)", description: "For dependants of Barbadian residents or work permit holders." },
    ],
  },

  // ═══════════════════════════════════════════
  // ASIA
  // ═══════════════════════════════════════════
  japan: {
    agencyName: "Immigration Services Agency of Japan",
    agencyUrl: "https://www.isa.go.jp/en/index.html",
    overview: "Japan has a detailed visa system with specific categories for each activity. Work visas require employer sponsorship and a matching qualification. The system is strict but well-organised.",
    pathways: [
      { type: "Highly Skilled Professional", description: "Points-based visa with benefits (faster PR, spouse can work). Based on salary, education, and experience." },
      { type: "Student Visa (Ryūgaku)", description: "For students at Japanese educational institutions. Allows part-time work up to 28 hours/week." },
      { type: "Dependent Visa", description: "For spouses and children of work or student visa holders." },
      { type: "Specified Skilled Worker (SSW)", description: "For workers in designated shortage industries (construction, care, food service, etc.). Requires skills exam." },
      { type: "Working Holiday Visa", description: "For young adults (18–30) from partner countries (Australia, UK, France, etc.). Up to 1 year." },
    ],
  },
  'south-korea': {
    agencyName: "Korea Immigration Service (Hi Korea)",
    agencyUrl: "https://www.hikorea.go.kr/Main.pt",
    overview: "South Korea has specific visa categories for each activity type (E-series for work, D-series for study). Work visas require employer sponsorship. The system is digitised through Hi Korea.",
    pathways: [
      { type: "D-2 (Student Visa)", description: "For students at Korean universities. Allows limited part-time work." },
      { type: "F-1/F-3 (Family Visa)", description: "For dependants of Korean visa holders or Korean citizens." },
      { type: "Working Holiday (H-1)", description: "For young adults (18–30) from partner countries. Up to 1-2 years." },
    ],
  },
  singapore: {
    agencyName: "Ministry of Manpower (MOM)",
    agencyUrl: "https://www.mom.gov.sg/passes-and-permits",
    overview: "Singapore uses a tiered work pass system based on salary. The Employment Pass is for professionals, S Pass for mid-level skilled workers. Family passes depend on the primary holder's salary.",
    pathways: [
      { type: "Employment Pass (EP)", description: "For professionals, managers, and executives earning at least SGD 5,000/month (higher for experienced candidates)." },
      { type: "Student Pass", description: "For students admitted to approved educational institutions in Singapore." },
    ],
  },
  thailand: {
    agencyName: "Thai Immigration Bureau",
    agencyUrl: "https://www.immigration.go.th/en/",
    overview: "Thailand has separate visa categories for work, study, retirement, and long-term residence. The Non-Immigrant B is the main work visa. The LTR visa targets wealthy and skilled foreigners.",
    pathways: [
      { type: "Non-Immigrant B (Work)", description: "For employed workers. Requires a job offer and a separate work permit issued after arrival." },
      { type: "Non-Immigrant O (Family)", description: "For spouses, parents, or dependants of Thai nationals." },
    ],
  },
  vietnam: {
    agencyName: "Vietnam Immigration Department",
    agencyUrl: "https://evisa.xuatnhapcanh.gov.vn/en_US/web/guest/trang-chu-ttdt",
    overview: "Vietnam has modernised its visa system with e-visas. Work permits require employer sponsorship. The Digital Nomad visa is not yet formal, but long-stay options exist.",
    pathways: [
      { type: "Work Permit (Giấy Phép Lao Động)", description: "For employees with a job offer. Employer must apply to the Department of Labour. Requires degree authentication." },
      { type: "Student Visa (DH)", description: "For students admitted to Vietnamese educational institutions." },
      { type: "Family/Dependent Visa (TT)", description: "For spouses and children of Vietnamese citizens or foreign residents." },
    ],
  },
  malaysia: {
    agencyName: "Immigration Department of Malaysia",
    agencyUrl: "https://www.imi.gov.my/en/",
    overview: "Malaysia offers several pathways for workers, students, and long-term residents. The Malaysia My Second Home (MM2H) programme targets retirees and wealthy individuals.",
    pathways: [
      { type: "Employment Pass (EP)", description: "For professional workers earning at least MYR 5,000/month. Categories I, II, and III based on salary and duration." },
      { type: "Student Pass", description: "For students at Malaysian educational institutions approved by the Education Ministry." },
      { type: "Dependent Pass", description: "For spouses and children of Employment Pass holders." },
    ],
  },
  'hong-kong': {
    agencyName: "Immigration Department — HKSAR",
    agencyUrl: "https://www.immd.gov.hk/eng/services/visas/visit-transit/visit-visa-entry-permit.html",
    overview: "Hong Kong operates independently from mainland China for immigration. Work visas require employer sponsorship. The Top Talent Pass targets graduates from top universities.",
    pathways: [
      { type: "Employment Visa", description: "For workers with a confirmed job offer. Employer must demonstrate the role cannot be filled locally." },
      { type: "Student Visa", description: "For students admitted to recognised institutions in Hong Kong." },
      { type: "Working Holiday Scheme", description: "For young adults (18–30) from partner countries (Australia, UK, France, etc.)." },
    ],
  },
  taiwan: {
    agencyName: "National Immigration Agency (NIA)",
    agencyUrl: "https://www.immigration.gov.tw/5475/",
    overview: "Taiwan offers work permits, student visas, and specialised pathways for skilled professionals. The Gold Card targets foreign professionals in key industries.",
    pathways: [
      { type: "Work Permit (Employment Gold Card or Standard)", description: "Standard permits require employer sponsorship. The Gold Card is a combined work/residence permit for qualified professionals." },
      { type: "Employment Gold Card", description: "For professionals in science, tech, economy, education, culture, sport, finance, law, or architecture. No employer needed." },
      { type: "Student Visa", description: "For students at Taiwanese educational institutions. Requires admission letter." },
      { type: "Dependent Visa (Joining Family)", description: "For spouses and children of Taiwanese nationals or residents." },
      { type: "Working Holiday Visa", description: "For young adults (18–30) from partner countries. Up to 1 year." },
    ],
  },
  indonesia: {
    agencyName: "Directorate General of Immigration",
    agencyUrl: "https://www.imigrasi.go.id/en/",
    overview: "Indonesia has work visas (KITAS/ITAS), student visas, and retirement visas. The Second Home visa targets wealthy long-term visitors. Work permits require employer sponsorship through the RPTKA system.",
    pathways: [
      { type: "KITAS/ITAS (Work)", description: "Temporary stay permit for employed workers. Employer must obtain an RPTKA (foreign manpower plan) and IMTA (work permit)." },
      { type: "Student KITAS", description: "For students at Indonesian educational institutions." },
      { type: "Dependent KITAS", description: "For spouses and children of KITAS holders." },
      { type: "B211A (Remote Worker / Digital Nomad)", description: "Social-cultural visa commonly used by remote workers for stays up to 180 days. Renewable." },
    ],
  },
  philippines: {
    agencyName: "Bureau of Immigration (BI)",
    agencyUrl: "https://immigration.gov.ph/",
    overview: "The Philippines has various visa types for workers, students, retirees, and investors. Work visas require employer petition. The SRRV retirement visa is popular.",
    pathways: [
      { type: "9(g) Work Visa", description: "For foreign nationals with a job offer. Employer must petition the Bureau of Immigration." },
      { type: "Student Visa (9(f))", description: "For students admitted to Philippine educational institutions. Applied for after arrival on a tourist visa." },
    ],
  },
  india: {
    agencyName: "Bureau of Immigration — Ministry of Home Affairs",
    agencyUrl: "https://indianvisaonline.gov.in/",
    overview: "India has a structured visa system managed through the e-Visa portal. Employment visas require a salary threshold. Student, research, and business visas are common.",
    pathways: [
      { type: "Employment Visa", description: "For skilled professionals with a job offer. Minimum salary threshold of $25,000/year applies." },
      { type: "Student Visa", description: "For students admitted to recognised Indian educational institutions." },
      { type: "Entry Visa (Family)", description: "For persons of Indian origin, spouses, and dependants of Indian nationals visiting long-term." },
    ],
  },
  'sri-lanka': {
    agencyName: "Department of Immigration and Emigration",
    agencyUrl: "https://www.immigration.gov.lk/",
    overview: "Sri Lanka offers ETA-based entry for tourists and separate visa categories for work, study, and residency. Work visas require employer sponsorship.",
    pathways: [
      { type: "Work Visa (Residence Visa)", description: "For employees with a job offer from a Sri Lankan employer. Applied for through the Department of Immigration." },
      { type: "Student Visa", description: "For students enrolled at Sri Lankan educational institutions." },
      { type: "Dependent Visa", description: "For family members of work visa holders." },
    ],
  },
  nepal: {
    agencyName: "Department of Immigration — Nepal",
    agencyUrl: "https://www.immigration.gov.np/",
    overview: "Nepal offers tourist visas on arrival. Work and study permits are separate processes managed through relevant ministries. Long-term residency is limited.",
    pathways: [
      { type: "Work Permit", description: "For employees in Nepal. Employer must apply to the Department of Labour and obtain approval before immigration processing." },
      { type: "Student Visa", description: "For students admitted to Nepali educational institutions. Applied for through the immigration department." },
      { type: "Dependent Visa", description: "For family members of foreign workers or residents in Nepal." },
    ],
  },

  // ═══════════════════════════════════════════
  // MIDDLE EAST
  // ═══════════════════════════════════════════
  'united-arab-emirates': {
    agencyName: "Federal Authority for Identity, Citizenship, Customs and Port Security (ICP)",
    agencyUrl: "https://icp.gov.ae/en/",
    overview: "The UAE's immigration is employer-driven. Residence visas are tied to employment or sponsorship. The Golden Visa offers long-term residence for investors, skilled professionals, and students.",
    pathways: [
      { type: "Employment Visa", description: "For workers with a job offer. Employer sponsors and arranges the residence visa and Emirates ID." },
      { type: "Student Visa", description: "For students at UAE educational institutions. Sponsored by the institution." },
      { type: "Family Visa (Dependent)", description: "For spouses and children of residents meeting a minimum salary requirement." },
      { type: "Remote Work Visa", description: "1-year visa for remote workers employed by companies outside the UAE. Requires proof of income." },
    ],
  },
  qatar: {
    agencyName: "Ministry of Interior — Immigration",
    agencyUrl: "https://www.moi.gov.qa/site/english/departments/GeneralDeptImmig/index.html",
    overview: "Qatar's immigration is employer-driven. Residence permits require a sponsor (employer or family). Reforms in recent years have loosened the kafala system.",
    pathways: [
      { type: "Work Visa (Residence Permit)", description: "For employees with a job offer. Employer acts as sponsor and handles immigration processing." },
      { type: "Student Visa", description: "For students at Qatari educational institutions. University acts as sponsor." },
      { type: "Family Visa (Dependent)", description: "For spouses and children of residents meeting income requirements." },
    ],
  },

  // ═══════════════════════════════════════════
  // AFRICA
  // ═══════════════════════════════════════════
  'south-africa': {
    agencyName: "Department of Home Affairs (DHA)",
    agencyUrl: "https://www.dha.gov.za/",
    overview: "South Africa has a detailed visa system managed by Home Affairs. Critical skills visas target professionals in shortage occupations. Work visas require employer sponsorship.",
    pathways: [
      { type: "General Work Visa", description: "For workers with a job offer and proof of qualifications. Department of Labour must certify no suitable local candidate exists." },
      { type: "Study Visa", description: "For students admitted to South African educational institutions." },
      { type: "Relative's Visa", description: "For spouses, life partners, and dependent children of South African citizens or permanent residents." },
    ],
  },
  morocco: {
    agencyName: "Direction Générale de la Sûreté Nationale (DGSN)",
    agencyUrl: "https://www.service-public.ma/",
    overview: "Morocco allows visa-free entry for many nationalities (90 days). Long-term residence requires a 'Carte d'Immatriculation' (registration card). Work permits are employer-sponsored.",
    pathways: [
      { type: "Work Permit (Contrat de Travail d'Étranger)", description: "For employees with a job offer. Employer must apply to ANAPEC for work authorisation." },
      { type: "Student Visa", description: "For students admitted to Moroccan educational institutions." },
      { type: "Family Reunification", description: "For family members of Moroccan residents or citizens." },
    ],
  },
  egypt: {
    agencyName: "Ministry of Interior — Immigration",
    agencyUrl: "https://www.immigration.gov.eg/",
    overview: "Egypt offers visas on arrival or e-visas for many nationalities. Work permits are employer-sponsored through the Ministry of Manpower. Student and family visas are available.",
    pathways: [
      { type: "Work Permit", description: "For employees with a job offer. Employer applies to the Ministry of Manpower. Quotas on foreign workers apply." },
      { type: "Student Visa", description: "For students admitted to Egyptian educational institutions." },
      { type: "Family/Dependent Visa", description: "For family members of Egyptian nationals or foreign residents." },
    ],
  },
  tunisia: {
    agencyName: "Direction Générale de la Sûreté Nationale",
    agencyUrl: "https://www.interieur.gov.tn/",
    overview: "Tunisia allows visa-free entry for many nationalities (up to 90 days). Work permits are employer-sponsored. Long-term residency requires a 'Carte de Séjour.'",
    pathways: [
      { type: "Work Permit (Carte de Travail)", description: "For employees with a job offer. Employer applies to the Ministry of Social Affairs." },
      { type: "Student Visa", description: "For students admitted to Tunisian educational institutions." },
      { type: "Family Reunification", description: "For family members of Tunisian residents or citizens." },
    ],
  },
  kenya: {
    agencyName: "Directorate of Immigration Services",
    agencyUrl: "https://immigration.go.ke/",
    overview: "Kenya requires an eTA (Electronic Travel Authorisation) for entry. Work permits are category-based. Foreign nationals need a relevant permit class for employment, investment, or dependants.",
    pathways: [
      { type: "Class D Work Permit", description: "For employees with a specific job offer in an occupation that cannot be filled locally." },
      { type: "Student Pass", description: "For students admitted to Kenyan educational institutions. Applied for through the immigration portal." },
      { type: "Dependent Pass", description: "For family members of work permit holders." },
    ],
  },

  // ═══════════════════════════════════════════
  // OCEANIA
  // ═══════════════════════════════════════════
  australia: {
    agencyName: "Department of Home Affairs — Immigration",
    agencyUrl: "https://immi.homeaffairs.gov.au/",
    overview: "Australia has a points-based skilled migration system alongside employer-sponsored pathways. The 482 visa is the main temporary work visa. Student and family pathways are well-established.",
    pathways: [
      { type: "Subclass 189 (Skilled Independent)", description: "Points-tested permanent residence for skilled workers. No employer or state sponsorship needed." },
      { type: "Subclass 500 (Student Visa)", description: "For full-time students at CRICOS-registered institutions. Allows part-time work." },
      { type: "Partner Visa (Subclass 820/801)", description: "For partners and spouses of Australian citizens or permanent residents." },
      { type: "Working Holiday Visa (Subclass 417/462)", description: "For young adults (18–30/35) from eligible countries. Up to 1–3 years with regional work." },
    ],
  },
  'new-zealand': {
    agencyName: "Immigration New Zealand (INZ)",
    agencyUrl: "https://www.immigration.govt.nz/",
    overview: "New Zealand uses a points-based system for skilled migration. The Accredited Employer Work Visa is the main employer-sponsored pathway. Student and family visas are well-structured.",
    pathways: [
      { type: "Accredited Employer Work Visa (AEWV)", description: "For workers with a job offer from an INZ-accredited employer. Employer must meet accreditation and job check requirements." },
      { type: "Skilled Migrant Category (Resident Visa)", description: "Points-based pathway to permanent residence for skilled workers." },
      { type: "Student Visa", description: "For full-time students at NZQA-approved institutions. Part-time work allowed." },
      { type: "Partnership-Based Visa", description: "For partners of New Zealand citizens or residents in a genuine and stable relationship." },
      { type: "Working Holiday Visa", description: "For young adults (18–30/35) from 40+ partner countries. Up to 12 months." },
      { type: "Skilled Residence Visa (Green List)", description: "Fast-track residency for occupations on the Green List (healthcare, engineering, tech, etc.)." },
    ],
  },

  // ═══════════════════════════════════════════
  // NEW COUNTRIES (Batch 2)
  // ═══════════════════════════════════════════
  turkey: {
    agencyName: "Directorate General of Migration Management (GOC)",
    agencyUrl: "https://en.goc.gov.tr/",
    overview: "Turkey offers residence permits for work, study, and family. Most non-EU citizens need a residence permit (ikamet) for stays over 90 days. Work permits are employer-sponsored.",
    pathways: [
      { type: "Work Permit (Calisma Izni)", description: "For employees with a job offer. Employer applies to the Ministry of Labour. Issued for 1 year, renewable." },
      { type: "Student Residence Permit", description: "For students enrolled at Turkish educational institutions. Applied for after arrival with admission letter." },
      { type: "Family Residence Permit", description: "For spouses and children of Turkish citizens or residence permit holders." },
    ],
  },
  georgia: {
    agencyName: "Public Service Hall (LEPL)",
    agencyUrl: "https://psh.gov.ge/en",
    overview: "Georgia allows visa-free entry for 1 year for citizens of 90+ countries. Work and study do not require a separate visa during this period. Residence permits are needed for stays beyond 1 year.",
    pathways: [
      { type: "Work Permit (Labour Immigration)", description: "For employment requiring a residence permit. Employer must demonstrate the need for a foreign worker." },
      { type: "Student Residence Permit", description: "For students enrolled at Georgian educational institutions for stays beyond 1 year." },
      { type: "Family Reunification", description: "For family members of Georgian residents or citizens." },
    ],
  },
  cambodia: {
    agencyName: "General Department of Immigration",
    agencyUrl: "https://www.immigration.gov.kh/",
    overview: "Cambodia has a simple visa system. The Ordinary Visa (E-class) covers most long-stay purposes including work and business. Work permits are separate from visas and employer-sponsored.",
    pathways: [
      { type: "Work Permit", description: "Required for legal employment. Employer applies to the Ministry of Labour. Must be renewed annually alongside the visa." },
      { type: "Student Visa (E-class extension)", description: "For students at Cambodian institutions. Uses the Ordinary Visa with student-purpose extension." },
      { type: "Dependent Visa (E-class extension)", description: "For family members of visa holders. Applied for as a dependent extension of the E-class visa." },
    ],
  },
  montenegro: {
    agencyName: "Ministry of Interior — Foreigners Affairs",
    agencyUrl: "https://www.gov.me/en/mup",
    overview: "Montenegro allows visa-free entry for many nationalities (up to 90 days). Work and temporary residence permits are needed for longer stays. The process is manageable but can be slow.",
    pathways: [
      { type: "Work Permit (Radna Dozvola)", description: "For employees with a job offer from a Montenegrin employer. Employer applies to the Employment Agency." },
      { type: "Student Residence Permit", description: "For students enrolled at Montenegrin educational institutions." },
      { type: "Family Reunification", description: "For family members of Montenegrin residents or citizens." },
    ],
  },
  china: {
    agencyName: "National Immigration Administration (NIA)",
    agencyUrl: "https://www.nia.gov.cn/",
    overview: "China has a structured visa and permit system. Work visas (Z-type) require employer sponsorship and a foreign work permit. The system categorises workers into A (high-end), B (professional), and C (unskilled) tiers.",
    pathways: [
      { type: "Z Visa + Work Permit (A/B/C)", description: "For employed workers. Employer must obtain a Foreigner Work Permit Notification before the Z visa is issued. Tiered by qualifications." },
      { type: "X1 Student Visa", description: "For students studying in China for more than 180 days. Requires admission letter (JW201/JW202 form) and a residence permit after arrival." },
      { type: "S1/S2 Family Visa", description: "For family members of foreigners working or studying in China. S1 for long-stay, S2 for short-stay." },
    ],
  },
  // --- NEW BATCH ---
  'saudi-arabia': {
    agencyName: "Ministry of Human Resources and Social Development / MOFA",
    agencyUrl: "https://www.my.gov.sa/",
    overview: "Saudi Arabia requires employer sponsorship for most work permits. The Iqama (residence permit) is the core document. Vision 2030 has opened new visa categories including Premium Residency and tourist e-visas.",
    pathways: [
      { type: "Employment Visa (Work Visa)", description: "For workers with a job offer from a Saudi employer. The employer sponsors the visa and obtains the Iqama after arrival." },
      { type: "Student Visa", description: "For students admitted to Saudi educational institutions. Requires acceptance letter and financial guarantees." },
      { type: "Family Visit / Dependent Visa", description: "For family members of Iqama holders. Sponsor must meet salary thresholds." },
    ],
  },
  albania: {
    agencyName: "Albanian Ministry of Interior / Migration Authorities",
    agencyUrl: "https://e-albania.al/",
    overview: "Albania offers visa-free entry for up to 1 year for citizens of many countries. For longer stays or work, a residence permit (Type D visa) is required. The process is relatively straightforward but can be slow.",
    pathways: [
      { type: "Work Permit + Residence Permit (Type D)", description: "For employed workers. Employer applies for work permit; worker then applies for Type D visa at the consulate." },
      { type: "Student Residence Permit", description: "For students enrolled at Albanian institutions. Requires acceptance letter and proof of financial means." },
      { type: "Family Reunification Permit", description: "For family members of Albanian residents or citizens. Requires proof of relationship and financial support." },
    ],
  },
  israel: {
    agencyName: "Population and Immigration Authority (PIBA)",
    agencyUrl: "https://www.gov.il/en/departments/immigration_authority",
    overview: "Israel has distinct immigration pathways. The Law of Return grants Jewish people automatic citizenship (Aliyah). Non-Jewish immigrants need employer-sponsored work visas (B/1). The Expert visa (B/1 Expert) targets high-skilled workers.",
    pathways: [
      { type: "B/1 Work Visa", description: "For workers with a job offer from an Israeli employer. Employer must obtain a permit from the Ministry of Interior." },
      { type: "A/2 Student Visa", description: "For students admitted to Israeli educational institutions. Allows part-time work in some cases." },
      { type: "A/5 Family/Dependent Visa", description: "For spouses and dependents of Israeli citizens or permanent residents. Leads to permanent residency through a graduated process." },
    ],
  },
  mauritius: {
    agencyName: "Passport and Immigration Office / EDB",
    agencyUrl: "https://passport.govmu.org/",
    overview: "Mauritius has a streamlined immigration system. The Occupation Permit combines work and residence into one document. The Premium Visa targets remote workers. The Economic Development Board (EDB) handles most applications.",
    pathways: [
      { type: "Occupation Permit (Professional)", description: "Combined work and residence permit for professionals earning above MUR 60,000/month. Valid for up to 10 years." },
      { type: "Student Visa", description: "For students enrolled at Mauritian institutions. Requires acceptance letter, proof of funds, and medical clearance." },
      { type: "Dependent Permit", description: "For family members of Occupation Permit holders. Spouse can apply for own work permit." },
    ],
  },
  bahrain: {
    agencyName: "Labour Market Regulatory Authority (LMRA) / NPRA",
    agencyUrl: "https://www.lmra.bh/",
    overview: "Bahrain uses a flexible permit system managed by the LMRA. The Flexi Permit allows self-sponsorship for certain workers. Golden Residency targets investors and high-net-worth individuals. No personal income tax.",
    pathways: [
      { type: "Work Visa (LMRA-sponsored)", description: "For employees with a job offer. Employer sponsors through LMRA. Work permit and residence permit are bundled." },
      { type: "Student Visa", description: "For students at Bahraini educational institutions. Requires acceptance letter and proof of financial support." },
      { type: "Family Visa (Dependent)", description: "For spouses and children of work permit holders. Sponsor must meet minimum salary requirements." },
    ],
  },

  // ═══════════════════════════════════════════
  // BATCH 10: REGIONAL GAP-FILLS
  // ═══════════════════════════════════════════
  laos: {
    agencyName: "General Department of Immigration, Ministry of Public Security",
    agencyUrl: "https://immigration.gov.la/",
    overview: "Laos issues short stays via eVisa or visa-on-arrival, while long-term residents rely on Non-Immigrant (NI) sub-classes tied to a sponsor (employer, business, NGO, or institution). Most processes flow through a local agent and are renewed annually.",
    pathways: [
      { type: "Tourist Visa (T-B3) / eVisa", description: "30-day single-entry leisure visa, available on arrival or via the official eVisa portal. Extendable once in-country through an agent." },
      { type: "Work Permit & Long-Stay Visa", description: "For foreign employees with a Lao employer. Employer sponsors the work permit (Ministry of Labour) and the corresponding NI long-stay visa class. Tied to the sponsoring company." },
      { type: "Investor / Business Owner Visa (NI-B1)", description: "For founders and shareholders of Lao-registered companies. Requires Ministry of Planning & Investment registration and a tax-compliant operating entity." },
      { type: "Student Visa (NI-B3)", description: "For students enrolled at recognised Lao institutions. Sponsored by the educational establishment." },
      { type: "Diplomatic / Official Visa (D, A classes)", description: "For diplomats, UN/INGO staff, and bilateral cooperation personnel. Issued through the Ministry of Foreign Affairs rather than Immigration." },
    ],
  },
  bolivia: {
    agencyName: "Dirección General de Migración (DIGEMIG)",
    agencyUrl: "https://www.migracion.gob.bo/",
    overview: "Bolivia distinguishes sharply between short tourist entry and any longer or purposeful stay. Anything beyond tourism — work, study, family, volunteering, religious, medical — is funnelled through the Specific Purpose Visa, which is later converted to Temporary Residency in-country.",
    pathways: [
      { type: "Tourist Entry (Visa de Turismo)", description: "Up to 90 days per year for most Western nationalities (visa-free or visa-on-arrival). US, Israeli, and a few other passport holders pay a reciprocity fee. Cannot be converted to residency in-country." },
      { type: "Specific Purpose Visa (Visa de Objeto Determinado)", description: "Single-entry visa applied for at a Bolivian consulate before travel, covering work, study, family reunification, volunteering, or medical treatment. Mandatory first step toward Temporary Residency." },
      { type: "Investor Visa (Visa de Inversionista)", description: "For foreign investors and entrepreneurs registering a Bolivian company through FUNDEMPRESA and the Ministry of Productive Development. Often paired with Temporary Residency." },
      { type: "Family Reunification", description: "For spouses, civil partners, and direct family of Bolivian citizens or legal residents. Routed through DIGEMIG with civil and police clearances." },
    ],
  },
  zambia: {
    agencyName: "Department of Immigration",
    agencyUrl: "https://www.zambiaimmigration.gov.zm/",
    overview: "Zambia distinguishes between short visitor visas (often eVisa or visa-on-arrival) and named permits issued by the Department of Immigration for any longer stay. Most long-stay permits require a Zambian sponsor — an employer, registered company, or institution.",
    pathways: [
      { type: "Visa-on-Arrival / eVisa (Tourist & Business Visit)", description: "Single, double, or multi-entry tourist or short business visa for citizens of most Commonwealth, EU, and SADC states. Available on arrival or via the e-Services portal." },
      { type: "Employment Permit", description: "Standard work authorisation issued on application by a Zambian employer who must justify why a Zambian cannot fill the role. Tied to the specific employer." },
      { type: "Investor's Permit", description: "For foreign nationals establishing or investing in a Zambian business meeting Zambia Development Agency (ZDA) capital and employment thresholds." },
      { type: "Study Permit", description: "For students admitted to a recognised Zambian higher education institution. Includes limited part-time work rights." },
      { type: "Spouse / Family Permit", description: "For spouses and dependants of Zambian citizens, permanent residents, or permit holders. Conditions vary by sponsor's status." },
    ],
  },
  "san-marino": {
    agencyName: "Ufficio di Stato Civile, Servizi Demografici e Elettorali",
    agencyUrl: "https://www.esteri.sm/",
    overview: "San Marino is not in the EU, so EU citizens do not have automatic residence rights. All long-stay categories are quota-controlled and assessed individually by the Congress of State. Italian fluency and a clean Italian/EU criminal record are de facto requirements.",
    pathways: [
      { type: "Residenza Elettiva (Elective Residence)", description: "For retirees and financially self-sufficient applicants with documented passive income and no intent to work locally. Quota-limited and reviewed annually." },
      { type: "Residenza Atipica (Atypical Residence)", description: "Discretionary residency for investors, founders, or applicants of special economic, scientific, or cultural value to San Marino." },
      { type: "Work Residence (Residenza per Motivi di Lavoro)", description: "Tied to an employment contract registered with a Sammarinese employer. Quota and labour-market test apply for non-Italian nationals." },
      { type: "Student Residence (Permesso per Studio)", description: "For students at the Università degli Studi della Repubblica di San Marino or affiliated programmes. Sponsored by the institution." },
      { type: "Family Reunification", description: "For close family of Sammarinese citizens and registered residents. Routed through the Ufficio di Stato Civile with civil and economic-means evidence." },
    ],
  },

  // ═══════════════════════════════════════════
  // BATCH 1 BACKFILL: SOUTH/CENTRAL ASIA
  // ═══════════════════════════════════════════
  pakistan: {
    agencyName: "Ministry of Interior — Pakistan Online Visa System (POVS)",
    agencyUrl: "https://visa.nadra.gov.pk/",
    overview: "Pakistan's immigration system is administered by the Ministry of Interior in conjunction with NADRA, with most visa categories now handled through the Pakistan Online Visa System (POVS). The country has expanded e-visa coverage to over 175 nationalities, but work and long-stay categories still require Board of Investment (BOI) recommendations, security clearances, and FRO registration after arrival.",
    pathways: [
      { type: "Tourist Visa", description: "POVS e-Visa for tourists from 175+ countries, valid up to 3 months single entry (1 year multiple entry for select nationalities), with 7-10 day processing." },
      { type: "Work Visa", description: "For foreign nationals employed by a Pakistani company or multinational branch, requiring Ministry of Interior security clearance and Board of Investment recommendation." },
      { type: "Business Visa", description: "Multiple-entry visa of up to 5 years for citizens of the 95+ Business Visa List (BVL) countries, requiring an invitation from a Pakistani company registered with the Chambers of Commerce or BOI." },
      { type: "Family Visa", description: "For foreign spouses of Pakistani nationals and dependents of work-visa holders, requiring attested marriage certificate, sponsor's NADRA documents, and police character certificate." },
      { type: "Student Visa", description: "For foreign students enrolled at HEC-recognized Pakistani universities, sponsored by the institution and processed through POVS with academic admission documents." },
    ],
  },
  bangladesh: {
    agencyName: "Department of Immigration and Passports",
    agencyUrl: "https://www.immi.gov.bd/",
    overview: "Bangladesh operates an online e-Visa system supplemented by Visa on Arrival for roughly 20 eligible nationalities at Dhaka, Chittagong, and Sylhet airports. Long-term residence is employer-driven: private sector hires need a BIDA work permit, NGO staff clear the NGO Affairs Bureau, and investors register through BIDA. Foreigners staying over 30 days must register with DIP and Special Branch.",
    pathways: [
      { type: "Tourist / Business E-Visa", description: "Online application via the Department of Immigration and Passports for single-entry stays up to 30 days, extendable on arrival to 90 days; processing takes 5-10 business days." },
      { type: "Visa on Arrival (VOA)", description: "Available at Dhaka, Chittagong, and Sylhet for nationals of about 20 countries travelling for investment, business, or official invitations, requiring an invitation letter, USD 500+ proof of funds, and return ticket." },
      { type: "Employment Visa (E Category)", description: "Employer-sponsored visa for foreign professionals backed by a BIDA work permit (private sector) or NGO Affairs Bureau approval (NGOs), issued initially for one year and extendable up to five." },
      { type: "Investor Visa (PI)", description: "Granted to foreign nationals investing through a BIDA-registered company (generally USD 50,000+ outside EPZs), giving multiple-entry rights up to five years." },
      { type: "Student Visa", description: "For enrolment at recognised Bangladeshi universities and institutions, requiring admission documentation and sponsor confirmation before consular issuance." },
      { type: "Family / Dependent Visa", description: "Issued to spouses and dependent children of Employment or Investor Visa holders, tied to the principal's sponsorship and duration." },
    ],
  },
  kazakhstan: {
    agencyName: "Ministry of Foreign Affairs of Kazakhstan",
    agencyUrl: "https://www.gov.kz/memleket/entities/mfa",
    overview: "Kazakhstan runs one of Eurasia's most liberal visa regimes, with visa-free entry for 80+ nationalities and a fast-developing digital application layer through eGov.kz. Distinctive pathways include the 2024 Neo Nomad Visa for remote workers and the AIFC's separate English-common-law visa track for finance and fintech professionals.",
    pathways: [
      { type: "Visa-Free Entry", description: "Up to 30 days per entry (90 days in any 180-day period) for nationals of 45+ countries including the EU/EEA, UK, US, Canada, Australia, Japan, South Korea, and UAE. Migration card issued on arrival." },
      { type: "Neo Nomad Visa", description: "Launched 2024 for remote workers earning USD 3,000+/month from non-Kazakh employers or clients. Up to 1 year, renewable. Apply via Kazakhstani missions abroad or eGov.kz." },
      { type: "AIFC Employment / Investor Visa", description: "Streamlined multi-year visas (up to 5 years) for employees and investors of AIFC-registered entities, operating under English common law within the AIFC perimeter." },
      { type: "Standard Work Visa (C3)", description: "Quota-based work permit issued by the Ministry of Labour and tied to a Kazakhstani employer. Up to 3 years; EAEU nationals, intra-corporate transfers, and senior management have exemptions." },
      { type: "Business Visa (B)", description: "Up to 90 days single or multiple entry for meetings, negotiations, training, and site inspections. Requires an MFA-registered invitation letter or simplified eGov procedure for eligible nationalities." },
    ],
  },
  uzbekistan: {
    agencyName: "State Migration Service & Ministry of Foreign Affairs",
    agencyUrl: "https://www.mfa.uz/",
    overview: "Uzbekistan operates one of the most liberal entry regimes in Eurasia following Mirziyoyev-era reforms: 60+ nationalities enter visa-free, others use a streamlined e-Visa. For longer stays, the IT Park Uzbekistan IT Visa is a genuinely distinctive 3-year pathway for tech workers and founders, while heritage-based residency exists for ethnic Uzbeks.",
    pathways: [
      { type: "Visa-Free Entry (60+ Nationalities)", description: "30-90 days for EU/EEA, UK, Japan, South Korea, Singapore, Malaysia, Turkey, CIS, and others. Tourism, business, family visits." },
      { type: "Uzbekistan E-Visa", description: "Fully online via e-visa.gov.uz for nationalities outside the visa-free list (US, Canada, Australia). 2-3 day processing; single or multi-entry up to 1 year." },
      { type: "IT Visa (IT Park Uzbekistan)", description: "Distinctive 3-year residency for foreign tech workers, founders, and investors at Tashkent IT Park. Family included; preferential tax status; renewable." },
      { type: "Work Visa", description: "Tied to an employer-held work permit from the Agency of External Labor Migration. Standard route for non-CIS employed professionals." },
      { type: "Investor Visa", description: "Multi-year residency tied to qualifying investment in an Uzbek-registered enterprise; coordinated by the Ministry of Investments, Industry and Trade." },
      { type: "Permanent Residence (Heritage / Ethnic Uzbek)", description: "Streamlined PR pathway for ethnic Uzbeks and individuals with documented Uzbek heritage, alongside long-stay residency for family reunification." },
    ],
  },
  armenia: {
    agencyName: "Migration Service of the Ministry of Internal Affairs",
    agencyUrl: "https://www.migration.am/",
    overview: "Armenia operates one of the most open immigration regimes in Eurasia. The defining feature is the 180-day visa-free entry for nationals of 60+ countries (EU, UK, US, Canada, Australia, most CIS), which makes formal short-stay visas effectively unnecessary for most Western citizens. For longer stays, the residency-via-business pathway through the State Register and Migration Service is fast, cheap, and accessible — the most common route for remote workers, founders, and the 2022+ wave of relocating tech professionals.",
    pathways: [
      { type: "Visa-Free Entry (180 Days)", description: "Nationals of 60+ countries (EU/EEA, UK, US, Canada, Australia, Japan, South Korea, UAE, CIS) enter visa-free for up to 180 days within a 365-day period. Routinely used by remote workers as a de facto residence base." },
      { type: "Residency via Business (Sole Proprietor / LLC)", description: "Register an individual entrepreneur or LLC at e-register.am (often same-day), then apply for a temporary residence permit via the Migration Service. Processing 30-60 days. Family members get derived residency. Permanent residency after 3 years." },
      { type: "IT High-Tech Certified Employment", description: "Foreign nationals employed by IT high-tech-certified companies benefit from streamlined residence processing alongside 0% corporate income tax and reduced (10%, phasing) personal income tax — a defining draw for the tech diaspora." },
      { type: "Repatriation / Heritage Citizenship for Ethnic Armenians", description: "Under Armenia's diaspora-friendly constitutional regime, ethnic Armenians (regardless of country of citizenship) may apply directly for Armenian citizenship and a passport without serving a standard residency period." },
      { type: "Residency via Property Ownership", description: "Foreign nationals owning Armenian real estate (apartments unrestricted; agricultural land limited) can obtain a residence permit on that basis. A practical secondary route for buyers in Yerevan." },
      { type: "EAEU Free Movement (Russia, Belarus, Kazakhstan, Kyrgyzstan)", description: "EAEU citizens do not need work permits to be employed in Armenia, and benefit from simplified residence procedures — a major channel for the 2022+ Russian relocation wave." },
    ],
  },

  // ═══════════════════════════════════════════
  // BATCH 2 BACKFILL: EUROPE / BALKANS
  // ═══════════════════════════════════════════
  ukraine: {
    agencyName: "State Migration Service of Ukraine (DMS)",
    agencyUrl: "https://dmsu.gov.ua/en-home.html",
    overview: "Ukraine operates under martial law renewed every 90 days since 24 February 2022. Civilian airspace is closed and foreign airlines are suspended — all entries are by land or rail through Poland, Slovakia, Hungary, Romania, or Moldova. Male Ukrainian citizens aged 18-60 are prohibited from leaving the country; foreigners are less restricted but must carry ID and comply with curfew and checkpoint rules. Despite war, Ukraine issues residence permits, IT-sector visas through Diia.City, and runs one of the most digitally advanced e-government systems in Europe via Diia.",
    pathways: [
      { type: "Diia.City IT Residency", description: "Ukraine's flagship tech-resident regime. Foreign IT professionals hired by Diia.City resident companies benefit from streamlined work permits, 5% personal income tax on gig contracts (vs. 18% + 1.5% military levy), and simplified residence procedures. Employer must be a registered Diia.City resident." },
      { type: "Type D Long-Term Visa", description: "Required for stays exceeding 90 days and for applying for a residence permit. Issued by Ukrainian consulates abroad on the basis of an invitation letter, work permit, marriage certificate, or other qualifying document. Holders must apply for a residence permit at DMS within 45 days of arrival." },
      { type: "Temporary Residence Permit (Posvidka na Tymchasove Prozhyvannya)", description: "The standard residence track, issued as a biometric ID card. Grounds include employment (with a work permit issued to the employer by the State Employment Service), marriage to a Ukrainian citizen, study at an accredited institution, religious work, or humanitarian volunteering. One year, renewable." },
      { type: "Wartime Visa-Free Short Stay", description: "Citizens of the EU, UK, US, Canada, and ~60 other countries enter visa-free for up to 90 days within a 180-day period. With airspace closed, entry is by land or rail only via Poland (Medyka, Korczowa, Shehyni), Slovakia, Hungary, Romania, or Moldova. Foreigners must carry ID and observe curfew." },
      { type: "Humanitarian / Volunteer Permits", description: "Foreign volunteers, NGO staff, and humanitarian workers can obtain Type D visas and temporary residence on humanitarian grounds. Accreditation from the Ministry of Defence or Ministry of Culture is required to operate in restricted or frontline zones; standard humanitarian work in western and central oblasts runs through DMS on employer or organizational sponsorship." },
      { type: "Temporary Protection (Inside Ukraine)", description: "Ukraine offers temporary protection status to certain categories of non-Ukrainians already in Ukraine or fleeing other conflicts, distinct from the EU-side Temporary Protection for Ukrainian citizens. Administered under UNHCR coordination with the State Migration Service." },
    ],
  },
  "bosnia-and-herzegovina": {
    agencyName: "Service for Foreigners' Affairs (Služba za poslove sa strancima)",
    agencyUrl: "http://www.sps.gov.ba/?lang=en",
    overview: "Bosnia runs a highly liberal short-stay regime (visa-free for 90+ nationalities including EU, US, UK) combined with a fragmented long-stay process split between the Federation of BiH and Republika Srpska. Work permits and many residence functions are issued at entity level, not state level, so the correct authority depends on where in the country you intend to live and work.",
    pathways: [
      { type: "Visa-Free Short Stay", description: "Up to 90 days in any 180-day period for citizens of ~90 countries. Passport stamp on arrival. Bosnia is outside Schengen, so these days do not count against Schengen allowances." },
      { type: "Entity-Level Work Permit", description: "Issued by the Federal Employment Service (FBiH) or Employment Bureau of Republika Srpska — not by a state authority. Employer-sponsored with labor market test and annual quotas; tied to one employer and one entity." },
      { type: "Temporary Residence", description: "Granted by the Service for Foreigners' Affairs on grounds of employment, family reunification, study, scientific work, volunteering, property ownership, or self-employment. Filed at the regional field office for your canton/entity." },
      { type: "Property-Based Residence", description: "Real estate ownership registered at the land registry (Zemljišne knjige / Gruntovnica) can support a temporary residence application with proof of health insurance and financial means." },
      { type: "Remote Worker Workaround", description: "No dedicated digital nomad visa exists. Most remote workers cycle the 90-in-180 visa-free regime with regional trips, or qualify for residence via self-employment, property, or family grounds." },
      { type: "Permanent Residence", description: "Available after 5 years of continuous temporary residence, leading toward naturalization eligibility under Bosnian citizenship law." },
    ],
  },
  "north-macedonia": {
    agencyName: "Ministry of Foreign Affairs / Ministry of Interior (MVR)",
    agencyUrl: "https://mvr.gov.mk/en",
    overview: "North Macedonia operates a visa-liberal regime, granting visa-free 90-day stays to citizens of ~65+ countries including the EU, US, UK, Canada, and Australia. As an EU candidate since 2005, immigration rules are progressively harmonizing with the acquis, though accession negotiations have been slowed by a bilateral dispute with Bulgaria. Non-Schengen status means time in North Macedonia does not consume Schengen allowances.",
    pathways: [
      { type: "Visa-Free Short Stay", description: "Up to 90 days within a 180-day period for citizens of ~65+ countries. Passport stamped on arrival; separate from Schengen quota." },
      { type: "Property-Based Residence", description: "Registered real estate ownership supports a 1-year renewable temporary residence permit issued by MVR, with no national minimum property value." },
      { type: "Self-Employment Residence", description: "Temporary residence on self-employment grounds, popular with freelancers leveraging the flat 10% personal income tax regime." },
      { type: "Employer-Sponsored Work Permit", description: "Issued by AVRM following a labor-market test; 15-30 day processing, tied to employer, 1-year renewable." },
      { type: "Family Reunification", description: "Spouses, dependent children, and dependent parents of residents or citizens apply through MVR regional offices." },
      { type: "Permanent Residence", description: "Available after 5 years of continuous legal temporary residence; a gateway to long-term settlement and eventual naturalization." },
    ],
  },
  moldova: {
    agencyName: "Bureau for Migration and Asylum (Biroul Migrație și Azil - BMA)",
    agencyUrl: "https://bma.gov.md/en",
    overview: "Moldova combines an EU candidate trajectory (candidate status June 2022, negotiations opened June 2024) with one of Europe's most generous IT tax regimes through the Moldova IT Park (7% single tax of revenue). Visa-free entry for EU, UK, US, and most Western nationals makes short stays frictionless, while residence is administered by the BMA with a streamlined path for IT Park employees. Note that the breakaway region of Transnistria (PMR) operates outside central government control and imposes its own entry formalities that can disrupt travel and insurance.",
    pathways: [
      { type: "IT Park Employment", description: "Moldova IT Park resident companies benefit from a flat 7% of revenue tax covering corporate tax, employee income tax, and employer social contributions. Foreign IT employees receive streamlined work and residence processing, making this the standout pathway for tech workers and founders." },
      { type: "Temporary Residence (Employment / Family / Study)", description: "BMA-issued biometric residence card on grounds of employment, family reunification, study, scientific activity, or humanitarian need. Standard term is 1 year, renewable, with a path to permanent residence after continuous legal stay." },
      { type: "Residence by Investment or Property Ownership", description: "Qualifying investment in the Moldovan economy or notarized real-estate ownership registered with the Land Registry can support a temporary residence grant (1-5 years depending on category). Thresholds have been progressively liberalized under EU accession reforms." },
      { type: "Visa-Free Short Stay", description: "Citizens of the EU, UK, US, Canada, Australia, Japan, and roughly 90 other jurisdictions enter visa-free for up to 90 days within a 180-day period. Moldova is not in Schengen, so stays do not consume Schengen allowance." },
      { type: "Romanian Citizenship (parallel EU track)", description: "Many Moldovans hold dual Moldovan-Romanian citizenship through Romania's restoration-of-citizenship law for descendants of pre-1940 Romanian citizens. This is administered by Romania, not Moldova, but in practice it is the dominant mobility pathway for Moldovans into the EU." },
      { type: "Transnistria Travel Rules", description: "The PMR (unrecognized de facto breakaway state) issues its own migration cards at de facto border crossings from Moldova proper. Standard Moldovan residence permits do not guarantee smooth transit; plan entry and exit carefully, carry your passport at all times, and check current advisories before travel." },
    ],
  },
  monaco: {
    agencyName: "Direction de la Sûreté Publique — Résidents Service",
    agencyUrl: "https://en.gouv.mc/Policy-Practice/Living-in-Monaco/Moving-to-Monaco",
    overview: "Monaco has no personal income tax for non-French residents, which is the key draw — but residency is wealth-gated (typically EUR 500,000+ deposit at a Monégasque bank, plus owned or leased accommodation). There is no standalone Monaco visa: non-EEA applicants enter via a French long-stay visa (Schengen external border is France), then apply for a carte de séjour at the Sûreté Publique. French nationals resident in Monaco remain taxed by France under the 1963 bilateral treaty, so the tax benefit does not apply to them.",
    pathways: [
      { type: "Carte de Séjour — Salariée (Employee)", description: "For residents with a Monaco employment contract. Requires an autorisation de travail issued to the employer, who must respect the priority-of-hiring order (Monégasques, then Monaco-domiciled spouses/residents, then French-border commune residents, then other foreigners)." },
      { type: "Carte de Séjour — Retraitée (Retiree)", description: "For residents of retirement age living on pension and investment income. Requires proof of retirement income sufficient for Monaco cost of living plus the standard bank deposit, accommodation, clean record, and health insurance dossier." },
      { type: "Carte de Séjour — Sans Activité Professionnelle (Passive Income / Wealth Resident)", description: "The most common category for high-net-worth movers. Applicants demonstrate liquid wealth (informally EUR 500,000+ at a Monégasque bank, often EUR 1m+ for higher-scrutiny profiles) rather than local work. This is the route that relies most directly on the bank reference letter." },
      { type: "Carte de Séjour — Dirigeant / Business Founder", description: "For residents establishing or running a Monaco business (SAM, SARL, etc.). Requires prior Government authorization (Direction du Développement Économique), a vetted business plan, capital, and suitable Monaco premises. Residence card tracks the business activity." },
      { type: "EEA National Route", description: "EU/EEA citizens skip the French long-stay visa step and apply directly to the Résidents Service with a lighter dossier. Financial means, accommodation, background, and health insurance checks still apply." },
      { type: "French Nationals (1963 Treaty Exception)", description: "French citizens can reside in Monaco but remain French tax residents under the 1963 France-Monaco fiscal convention and pay French income tax on worldwide income. Monaco offers them no personal income tax benefit; the practical draw is lifestyle and proximity, not fiscal." },
    ],
  },

  // ═══════════════════════════════════════════
  // BATCH 3 BACKFILL: AFRICA
  // ═══════════════════════════════════════════
  nigeria: {
    agencyName: "Nigeria Immigration Service (NIS)",
    agencyUrl: "https://immigration.gov.ng/",
    overview: "Nigerian immigration is structured around the employer-led Expatriate Quota system: companies must secure quota slots from the Ministry of Interior before they can sponsor foreign workers, and nearly every long-term route runs through the Nigeria Immigration Service (NIS). Most expatriates arrive on a Subject to Regularisation (STR) visa and convert in-country to a CERPAC residence card within 90 days, while ECOWAS nationals enjoy visa-free movement under regional treaty.",
    pathways: [
      { type: "Subject to Regularisation (STR) Visa", description: "Pre-approved entry route for foreign hires sponsored against an Expatriate Quota slot; regularised post-arrival into a CERPAC residence card." },
      { type: "CERPAC (Combined Expatriate Residence Permit and Aliens Card)", description: "The biometric residence permit issued by NIS for all foreigners staying beyond 90 days, renewable annually and tied to the sponsoring employer's quota." },
      { type: "Temporary Work Permit (TWP)", description: "Short-duration permit for foreign specialists performing installation, training, or technical interventions; capped at 90 days and non-convertible." },
      { type: "ECOWAS Free Movement", description: "Citizens of ECOWAS member states enter Nigeria visa-free and may reside and work under the regional Protocol on Free Movement of Persons." },
      { type: "Investor / NIPC Pathway", description: "Foreign investors register with the Nigerian Investment Promotion Commission and structure their entity to qualify for Expatriate Quota allocations and Business Permit issuance." },
      { type: "Nigeria e-Visa (Short Visits)", description: "The NIS e-visa portal handles short-stay tourist, family, and business visitor visas (up to 90 days), with letters of invitation required from a Nigerian host." },
    ],
  },
  ghana: {
    agencyName: "Ghana Immigration Service (GIS)",
    agencyUrl: "https://www.gis.gov.gh/",
    overview: "Ghana's immigration framework is unusually welcoming, blending standard work and investor routes with two distinctive features: ECOWAS free movement (90 days visa-free for nationals of member states, with residence card pathways for longer stays) and the diaspora-of-the-Black-Atlantic Year of Return / Beyond the Return programme, which has produced a Right of Abode status and streamlined naturalisation for people of African descent. Investor routes run through the Ghana Investment Promotion Centre (GIPC).",
    pathways: [
      { type: "Work and Residence Permit", description: "Employer-sponsored route: employer secures an Immigrant Quota from GIPC or sector authority, then GIS issues a work permit and tied residence permit. 1-3 years, renewable." },
      { type: "Right of Abode", description: "Indefinite residence and right to work for people of African descent, a signature post-Year of Return status with protections close to citizenship." },
      { type: "Investor Residence Permit (GIPC)", description: "For foreign investors meeting GIPC thresholds (USD 200k joint venture, USD 500k fully foreign-owned, USD 1m trading). Grants residence and automatic expatriate quota." },
      { type: "ECOWAS Free Movement", description: "ECOWAS nationals enter visa-free for 90 days; longer stays and the right to reside or trade are formalised via an ECOWAS Residence Card through GIS." },
      { type: "Diaspora and Heritage Pathways", description: "Beyond the Return multi-year visas and naturalisation routes for African diaspora returnees demonstrating connection and intent to settle." },
      { type: "Tourist / Business Visitor Visa (Visa on Arrival)", description: "Short visits up to 60 days; many nationalities can obtain visa on arrival if pre-approved via the GIS portal. No paid employment permitted." },
    ],
  },
  rwanda: {
    agencyName: "Directorate General of Immigration and Emigration (DGIE)",
    agencyUrl: "https://www.migration.gov.rw/",
    overview: "Rwanda runs one of Africa's most liberal visa regimes: visa-free entry for all African nationals since 2023, visa-on-arrival or e-Visa for 90+ other nationalities, and a fully digital application flow through Irembo. The framework is calibrated to Rwanda's Pan-African positioning, the East African Community common market, and active recruitment of tech founders and investors around Kigali Innovation City.",
    pathways: [
      { type: "Continental Visa-Free Entry", description: "All African nationals enter visa-free for up to 30 days under Rwanda's 2023 Pan-African mobility policy, aligned with AfCFTA." },
      { type: "Visa on Arrival / e-Visa", description: "Non-African nationals receive a 30-day visa on arrival at Kigali International Airport or land borders, or apply ahead through Irembo." },
      { type: "East African Tourist Visa", description: "90-day multi-entry visa covering Rwanda, Kenya, and Uganda — applied for from first country of entry." },
      { type: "Class H Investor / Entrepreneur Permit", description: "For foreigners meeting RDB investor thresholds (~USD 250,000); links residence to qualifying investment with tax incentives, particularly for tech and Kigali Innovation City tenants." },
      { type: "Class T2 Work Permit", description: "Standard employer-sponsored work permit filed via Irembo by a registered Rwandan employer; 2 years renewable." },
      { type: "Class J Remote Worker / Freelancer Permit", description: "Aligned with Rwanda's digital nomad strategy; requires proof of foreign income, minimum thresholds, and health insurance." },
    ],
  },
  tanzania: {
    agencyName: "Tanzania Immigration Services Department",
    agencyUrl: "https://immigration.go.tz/",
    overview: "Tanzania structures foreign workers into a lettered Class A/B/C system administered by the Labour Commissioner, paired with residence permits from the Immigration Services Department. Zanzibar runs its own parallel immigration and labour regime, including a dedicated digital nomad permit. Tanzania is not part of the East Africa Tourist Visa scheme — regional travellers need a separate Tanzania e-visa.",
    pathways: [
      { type: "Class A Work Permit (Investor / Self-Employed)", description: "For investors and self-employed foreigners, typically routed through the Tanzania Investment Centre with minimum capital thresholds. Pairs with a Class C residence permit." },
      { type: "Class B Work Permit + Residence Permit (Employment)", description: "Standard track for foreign nationals employed by a Tanzanian company. Work permit from the Labour Commissioner, then residence permit from TISD. Employer-sponsored, role-tied, subject to localisation caps. 2 years renewable." },
      { type: "Class C Work Permit (Missionaries, Researchers, Students, Family)", description: "Covers missionaries, researchers, students, and dependants of Class A or B holders. Common route for NGO and academic-sector arrivals. 2 years renewable." },
      { type: "Certificate of Temporary Assignment (CTA)", description: "Distinctive Tanzanian instrument for short-term foreign assignments up to six months — project work, equipment commissioning, audits. Issued by the Labour Commissioner." },
      { type: "Zanzibar Digital Nomad Residence Permit", description: "Zanzibar's dedicated remote-worker framework, administered by the Zanzibar Commission for Tourism and Zanzibar Immigration. Up to 2 years renewable. Distinct from mainland permits." },
      { type: "East Africa Tourist Visa", description: "Multi-entry visa for Kenya, Uganda, and Rwanda only. Tanzania is not in the scheme — travellers combining a Tanzania safari with the region need a separate Tanzania e-visa alongside the EATV." },
    ],
  },
  namibia: {
    agencyName: "Ministry of Home Affairs, Immigration, Safety and Security",
    agencyUrl: "https://www.mhaiss.gov.na/",
    overview: "Namibia operates one of Africa's most accessible immigration regimes: visa-free entry for many EU, UK, US, and Commonwealth nationals, expanded visa-on-arrival from 2025, and SADC free-movement protocols for regional citizens. In October 2022 it became one of the first African countries to launch a formal Digital Nomad Visa, positioning itself as an early adopter of remote-worker mobility on the continent.",
    pathways: [
      { type: "Digital Nomad Visa", description: "Six-month permit for remote workers earning ~USD 2,000+/month from non-Namibian sources. Requires health insurance and clean criminal record. Not renewable on-country — exit and re-apply for continuity." },
      { type: "Employment Permit", description: "Tied to a Namibian employer who must demonstrate the role cannot be filled locally (Namibianisation policy). Most common in mining, energy, oil and gas (Orange Basin), green hydrogen, and senior banking/consulting roles. Up to 2 years, renewable." },
      { type: "Investor / Business Permit", description: "For foreign nationals investing in or running a registered Namibian business. Indicative minimum NAD 2 million, BIPA company registration, and engagement with the Namibia Investment Promotion and Development Board (NIPDB). Up to 4 years, renewable." },
      { type: "Visa-Free & Visa-on-Arrival", description: "Many nationalities enter visa-free for up to 90 days. The 2025 visa-on-arrival expansion broadened access for additional countries at a fee, payable on arrival at Hosea Kutako or land borders." },
      { type: "SADC Free Movement", description: "Citizens of Southern African Development Community member states benefit from regional protocols easing entry from neighbouring South Africa, Botswana, Zambia, Zimbabwe, Angola, and others. Particularly relevant given the NAD-ZAR peg and Common Monetary Area integration." },
      { type: "Permanent Residence", description: "Available after sustained lawful residence (typically five years) on employment or investor basis, or via substantial investment. Adjudicated by the Immigration Selection Board under the Ministry of Home Affairs." },
    ],
  },

  // ═══════════════════════════════════════════
  // BATCH 4 BACKFILL: MIDDLE EAST + ISLANDS
  // ═══════════════════════════════════════════
  oman: {
    agencyName: "Royal Oman Police - Directorate General of Passports and Residency",
    agencyUrl: "https://www.rop.gov.om/english/",
    overview: "Residency in Oman runs through the Royal Oman Police (ROP) and the Ministry of Labour, with most expatriates entering under the kafala employer-sponsorship system. Vision 2040 reforms have introduced an Investor Residency Programme offering self-sponsored 5 or 10-year visas tied to qualifying real estate or business investment, alongside a freelance permit that breaks the traditional employer-tied model. Tourist entry is handled by an efficient ROP eVisa portal, with visa-free or visa-on-arrival access for GCC nationals and many Western passport holders.",
    pathways: [
      { type: "Investor Residence Visa (5/10-year)", description: "Self-sponsored long-term residency for foreign investors. Real estate purchase in designated Integrated Tourism Complexes (The Wave Muscat, Muscat Hills, Jebel Sifah) above OMR 250,000 or qualifying business investment grants 5 or 10-year residency, removing employer dependency. Administered via Invest Oman." },
      { type: "Employment Visa (Kafala)", description: "Standard 2-year work visa sponsored by an Omani employer through ROP and the Ministry of Labour. 2021 reforms allow job changes without a No Objection Certificate under defined conditions, though timing of cancellation and reissuance still matters." },
      { type: "Freelance / Self-Employment Permit", description: "Vision 2040 initiative allowing qualified individuals to work independently in IT, media, consulting, and creative fields without a traditional kafeel. Issued by the Ministry of Labour for 2 years, renewable." },
      { type: "Family Residence Visa", description: "Dependant residency for spouses and children of work visa holders. Sponsor must meet a salary threshold (typically OMR 600/month for professionals) and provide suitable accommodation. Dependants receive resident cards linked to the sponsor." },
      { type: "Tourist eVisa (10-30 days)", description: "Online visa via the ROP eVisa portal for citizens of 100+ countries, processed within 24-72 hours. Available in 10-day and 30-day single or multiple-entry variants." },
      { type: "GCC Resident & Visa-on-Arrival", description: "GCC nationals enjoy visa-free entry and freedom of movement. Selected Western nationalities and GCC residents in qualifying professions are eligible for visa-on-arrival or short-stay visa-free entry under reciprocal arrangements." },
    ],
  },
  jordan: {
    agencyName: "Ministry of Interior - General Directorate of Residency and Foreigners' Affairs",
    agencyUrl: "https://www.moin.gov.jo/",
    overview: "Jordan operates an employer-sponsored work permit system through the Ministry of Labour, with residence cards issued by the Ministry of Interior. Two distinctive regimes stand apart: the Jordan Pass bundles tourist visa fees with Petra and other site entries for visitors staying three or more nights, and the Aqaba Special Economic Zone Authority (ASEZA) runs a separate residence and tax regime in the Red Sea port. Jordan also hosts one of the world's largest per-capita refugee populations under UNHCR-coordinated arrangements, alongside an Investment Law pathway offering residency tied to qualifying capital thresholds.",
    pathways: [
      { type: "Jordan Pass (Tourist + Sites Bundle)", description: "Prepaid online product combining tourist visa fee waiver with entry to Petra and 40+ archaeological sites; requires minimum three-night stay." },
      { type: "Investor Residence (Investment Law)", description: "Self-sponsored residence for foreign nationals meeting qualifying investment thresholds, with preferential treatment in development zones and pathways to long-term status." },
      { type: "ASEZA Residence and Work", description: "Separate Aqaba Special Economic Zone regime with reduced corporate tax, customs exemptions, and zone-specific work and residence permits administered by ASEZA." },
      { type: "Refugee and Protected Status", description: "UNHCR-coordinated registration with the Ministry of Interior for Syrian, Iraqi, Palestinian, Sudanese, and Yemeni populations, including camp and urban settlement and limited sectoral work permits." },
      { type: "Employer-Sponsored Work Permit", description: "Standard route via Ministry of Labour tied to a specific employer and job category, with several occupations legally reserved for Jordanian nationals." },
      { type: "Freelance via Company Formation", description: "No dedicated freelancer visa; independent professionals self-sponsor by registering a sole proprietorship or LLC with the Companies Control Department." },
    ],
  },
  kuwait: {
    agencyName: "Public Authority for Manpower (PAM) / Ministry of Interior",
    agencyUrl: "https://www.pam.gov.kw/",
    overview: "Kuwait organizes foreign residency around a numbered Article framework (17 government, 18 private sector, 20 domestic worker, 22 family) operating under one of the Gulf's strictest kafala sponsorship systems, where residency and job mobility are tied tightly to the employer. GCC nationals enjoy near-citizen free movement, while non-GCC foreigners typically need a Kuwaiti sponsor. Post-2023 reforms have expanded property-investment residency and tightened Article 22 family income thresholds as part of broader economic diversification.",
    pathways: [
      { type: "Work Residence Visa (Article 18)", description: "Standard private-sector kafala work visa sponsored by a Kuwaiti employer through PAM and MOI; tied strictly to the sponsoring employer with formal release required to change jobs." },
      { type: "Government Sector Visa (Article 17)", description: "For foreign nationals hired by Kuwaiti ministries, public institutions, and state oil entities (KOC, KPC); sponsored by the government employer with distinct terms from Article 18." },
      { type: "Dependent Visa (Article 22)", description: "For spouses and unmarried children of resident sponsors; recently tightened with higher income thresholds (KWD 500+/month) and stricter housing-suitability checks." },
      { type: "Domestic Worker Visa (Article 20)", description: "Separate category for drivers, housekeepers, nannies, and cooks under the 2015 Domestic Workers Law; kafala ties remain particularly tight in this category." },
      { type: "Tourist / Visit eVisa", description: "Newer Ministry of Interior eVisa portal serving citizens of approximately 50 eligible countries for short-term tourism and family visits, processed in 1-3 working days." },
      { type: "GCC National Free Movement", description: "Citizens of Saudi Arabia, UAE, Bahrain, Oman, and Qatar enter visa-free with a national ID and may live, work, own property, and run businesses on near-Kuwaiti terms outside the kafala framework." },
      { type: "Property Investment Residency", description: "Recently expanded scheme granting longer-term residency to qualifying foreign property buyers in designated investment zones, bypassing the standard employer-sponsored kafala route." },
    ],
  },
  maldives: {
    agencyName: "Maldives Immigration",
    agencyUrl: "https://www.immigration.gov.mv/",
    overview: "The Maldives combines the world's most liberal entry policy — a free 30-day visa on arrival for every nationality without exception — with a tightly controlled, quota-based work permit system centered on the resort economy. Work authorization is overwhelmingly channeled through resort employers under Employment Approval quotas issued by the Ministry of Economic Development, and life on local islands (including Malé) operates under Sunni Islamic norms where alcohol, pork, and non-Islamic religious practice are confined to resort islands and designated diplomatic contexts.",
    pathways: [
      { type: "Free 30-Day Visa on Arrival (Universal)", description: "Every visitor of every nationality receives a free 30-day visa on arrival at Velana International Airport, subject to valid passport, proof of onward travel, confirmed hotel or resort booking, and sufficient funds. Extendable up to 90 days total. Does not permit employment." },
      { type: "Resort Worker Permit (Quota Worker)", description: "The dominant route reflecting the Maldives' resort-economy reality. Resort employers apply for an Employment Approval quota via the Ministry of Economic Development, then sponsor the work visa through Maldives Immigration. The employer manages pre-departure medicals, island posting, and on-island accommodation. Permit is tied to the sponsoring employer and specific resort island." },
      { type: "Maldives Remote Workers Permit", description: "A newer pathway building on the Premium Visa Programme (2021) to attract digital nomads and remote employees earning from foreign employers. Allows extended stays in designated tourism establishments — resorts and registered guest houses on local islands — while working remotely. Does not grant local labor market access." },
      { type: "Investor / Long-term Resident Visa", description: "Established under the Foreign Direct Investment framework administered by the Ministry of Economic Development. Issued to qualifying foreign investors in tourism developments, infrastructure, and approved sectors, with a long-term residency component for principal investors and senior representatives." },
      { type: "Religious Worker Permit (Islamic Only)", description: "A narrowly scoped permit for foreign religious workers serving Islamic institutions in the Maldives, such as imams, Quranic teachers, and Islamic scholars sponsored by mosques or registered Islamic organizations. Reflects the constitutional requirement that citizens be Muslim and that only Islamic religious practice is permitted in the country." },
      { type: "Business Visa (Sponsored)", description: "For foreign nationals conducting business — tourism investors, regional representatives, suppliers, and advisors — without taking up formal employment. Requires sponsorship by a registered Maldivian entity and proof of business activity. Distinct from a work visa and suitable for short-to-medium engagements up to one year." },
    ],
  },
  fiji: {
    agencyName: "Fiji Immigration Department",
    agencyUrl: "https://www.immigration.gov.fj/",
    overview: "Fiji combines an unusually generous four-month visa-free entry for Commonwealth and many other nationals with an actively retiree-friendly framework and a post-COVID push to attract digital nomads. As the largest Pacific economy and host to several regional institutions (PIDF, Pacific Islands Forum, SPC), Fiji also serves as the Pacific's primary hub for investors and remote workers seeking an English-speaking island base.",
    pathways: [
      { type: "Visitor Permit (4-Month Visa-Free)", description: "Commonwealth, EU, US, Japanese and many other nationals receive a 4-month permit on arrival at Nadi — far longer than typical 90-day waivers — extendable to six months total. No work rights." },
      { type: "Digital Nomad Visa", description: "Launched in 2022 (Bula Bond era) for remote workers employed or self-employed by foreign clients. Requires income threshold, health insurance, and accommodation; renewable beyond initial six months." },
      { type: "Investor Permit", description: "For foreign nationals establishing or investing in a Fijian business, approved through Investment Fiji. Tourism, agriculture, and manufacturing are priority sectors; permit is tied to continued operation of the investment." },
      { type: "Retirement / Senior Citizen Permit", description: "Renewable residence pathway for self-funded retirees with stable transferred income, private health coverage, and accommodation. Popular with Australians, New Zealanders, North Americans, and Britons seeking a long, low-friction Pacific base." },
      { type: "Work Permit", description: "Standard employer-sponsored work authorization processed by the Department of Immigration with the Ministry of Employment, Productivity and Workplace Relations. Local advertising and labor-market test typically required." },
      { type: "Dependent / Spouse Permit", description: "Issued to spouses and unmarried dependent children of work or investor permit holders, sponsored by the primary holder. Spouses need a separate work permit to take local employment." },
    ],
  },

  // ═══════════════════════════════════════════
  // BATCH 5 BACKFILL: CAUCASUS / CENTRAL ASIA / SOUTH ASIA / MIDDLE EAST
  // ═══════════════════════════════════════════
  azerbaijan: {
    agencyName: "State Migration Service of the Republic of Azerbaijan",
    agencyUrl: "https://migration.gov.az/",
    overview: "Azerbaijan runs a sponsorship-based immigration framework through the State Migration Service, with most residence and work statuses tied to a specific employer, investment, or family link. The standout feature is the ASAN Visa eVisa portal, which issues tourism and business visas online to 90+ nationalities in three working days (or three hours urgent). The post-2020/2023 Karabakh political context and the oil-dependent, SOCAR-anchored economy shape both quota policy and which sectors enjoy expedited treatment.",
    pathways: [
      { type: "ASAN eVisa", description: "Online single-entry tourist/business visa for 90+ nationalities via evisa.gov.az, issued in three working days or three hours urgent, valid up to 30 days." },
      { type: "Work Visa & Work Permit", description: "Employer-sponsored individual work permit (icazə) issued by the State Migration Service, subject to annual sectoral quotas. Exemptions cover senior management, intra-corporate transfers, and SOCAR/energy roles." },
      { type: "Temporary Residence Permit", description: "Filed at ASAN service centers on the basis of employment, investment, marriage, qualifying property ownership, or study. Includes derived residence for family members; renewable toward permanent residence." },
      { type: "Investor / Real Estate Residence", description: "Temporary residence for foreign nationals making qualifying investments or owning Azerbaijani real estate, with preferential treatment in the Alat Free Economic Zone (tax exemptions, simplified procedures)." },
      { type: "CIS Visa-Free Entry", description: "Citizens of Russia, Belarus, Kazakhstan, Kyrgyzstan, Moldova, Tajikistan, Ukraine, and Uzbekistan enter visa-free for up to 90 days; address registration still required after 15 days." },
      { type: "Heritage / Diaspora Residence", description: "Simplified temporary residence for ethnic Azerbaijanis from the diaspora (Iran, Turkey, Russia, Georgia, Western communities), coordinated through the State Committee on Work with Diaspora." },
    ],
  },
  kyrgyzstan: {
    agencyName: "State Migration Service of the Kyrgyz Republic",
    agencyUrl: "https://ssm.gov.kg/",
    overview: "Kyrgyzstan offers Central Asia's most liberal entry regime — 60-day visa-free access for nationals of 60+ countries (longer than typical 90-day waivers) plus EAEU free movement for Russians, Belarusians, Kazakhs, and Armenians. Distinctive draws include the High Technology Park (HTP) IT residency with a 5% revenue tax and a Digital Nomad framework launched in 2022. The post-2022 wave of Russian relocation has reshaped Bishkek's expat and tech scenes, with administrative procedures increasingly handled online through the Tunduk eGov platform.",
    pathways: [
      { type: "60-Day Visa-Free Entry", description: "Visa-free entry for 60 days for nationals of 60+ countries (EU/EEA, UK, US, Canada, Australia, Japan, South Korea, UAE, CIS); migration card issued on arrival; longer than typical waivers." },
      { type: "EAEU Free Movement", description: "Russians, Belarusians, Kazakhs, and Armenians enter, reside, and work without permits; widely used by post-2022 Russian relocators." },
      { type: "HTP IT Residency", description: "High Technology Park status for IT companies and employees with a 5% revenue tax (in lieu of corporate income, VAT, sales tax) and streamlined residency — comparable to Uzbekistan and Moldova IT Parks." },
      { type: "Digital Nomad Visa", description: "Launched in 2022 for location-independent professionals serving overseas clients; typically pairs visa-free entry with residence via individual entrepreneur registration." },
      { type: "Work Permit and Work Visa", description: "Standard employer-sponsored route through the Ministry of Labour and State Migration Service for non-EAEU professionals; sectoral quotas relatively accommodating." },
      { type: "Residence Permit (incl. Heritage)", description: "Temporary (1-5 yr) then permanent residency on basis of employment, investment, marriage, study, or ethnic Kyrgyz heritage (kairylman); filed via TsON or Tunduk." },
    ],
  },
  mongolia: {
    agencyName: "General Authority for Immigration",
    agencyUrl: "https://www.immigration.gov.mn/",
    overview: "Mongolia's immigration regime expanded sharply under the 2024-2025 'Mongolia Welcomes You' initiative — over 60 nationalities now enjoy 30-day visa-free entry. Long-stay routes use the alphabetical HG-class system (HG-1 student, HG-2 worker), with distinctive heritage residency tracks for the Inner Mongolia, Buryat, and Kalmyk diaspora. Most expat profiles cluster around the mining boom (Oyu Tolgoi/Rio Tinto), tech, and diplomatic-development missions in UB.",
    pathways: [
      { type: "Expanded Visa-Free Entry", description: "Up to 30-90 days for US, EU/EEA, UK, Canada, Australia, NZ, Japan, South Korea, Singapore and over 60 nationalities under the Mongolia Welcomes You 2024-2025 expansion. Migration card issued at entry." },
      { type: "HG-Class Work & Study Visas", description: "Alphabetical class system: HG-1 (students), HG-2 (employed workers), with technical-expert and intra-corporate transfer subcategories. Employer-sponsored through GAI and the Ministry of Labor; converted to residence permit on arrival." },
      { type: "Investor Visa (T Visa)", description: "Self-sponsored route under the Investment Law for those establishing qualifying businesses or making sector-specific capital investments. Mining and infrastructure thresholds are highest." },
      { type: "Heritage Residency for Ethnic Mongolians", description: "Preferential pathway for the Inner Mongolia (China) diaspora, Russian Buryats, and Kalmyks. Applicants prove Mongol heritage through documentation or community attestation; routes lead to long-term residence and accelerated naturalization in some cases." },
      { type: "Border-Trader & Cross-Frontier Permits", description: "Special arrangements for Russian and Chinese nationals trading through formal frontier zones at Zamiin-Uud (China) and Altanbulag (Russia). Enables repeated short-stay entries for trade, contract work, and family movement." },
      { type: "E-Visa System", description: "Recently launched online portal for tourist and business visas, available to nationals of countries that still require a visa. Processing typically 3-5 working days; presented at entry alongside passport." },
    ],
  },
  bhutan: {
    agencyName: "Department of Immigration, Ministry of Home Affairs",
    agencyUrl: "https://www.immigration.gov.bt/",
    overview: "Bhutan operates one of the world's most controlled entry regimes by design — there is no walk-in tourism. Almost all international visitors must book through a licensed Bhutanese tour operator and pay the Sustainable Development Fee (USD 100/day, reduced from USD 200 in 2023). Indian, Bangladeshi, and Maldivian nationals are exempt from the visa and tour-operator requirements; all other foreign residency (work, diplomatic, study) requires sponsorship by a specific Bhutanese organization.",
    pathways: [
      { type: "Tourist Visa via SDF + Licensed Tour Operator", description: "The only tourist pathway for non-Indian/Bangladeshi/Maldivian visitors. Licensed Bhutanese tour operator handles the visa application; visitor pays USD 100/day SDF on top of all tour costs. No independent or walk-in tourism permitted." },
      { type: "Visa-Free Entry (Indian, Bangladeshi, Maldivian Nationals)", description: "These three nationalities enter without a visa and are exempt from the tour-operator requirement. Indian nationals pay a reduced SDF of INR 1,200/day. Entry permit issued on arrival at Phuentsholing land border or Paro Airport." },
      { type: "Work Permit (Foreign Worker)", description: "Tightly restricted to specific skill gaps — English teachers, specialized medical staff, technical consultants, and Indian Hydropower Project workers (the largest single category). Sponsoring organization applies through Department of Immigration and Ministry of Labour and Human Resources. No independent job-seeking." },
      { type: "Diplomatic / Development Partner Visa", description: "For diplomatic mission staff and accredited development organization personnel (UNDP, ADB, World Bank, GIZ, JICA, WFP, UNICEF, Save the Children, Helvetas). Accredited through the Ministry of Foreign Affairs; residency tied to posting." },
      { type: "Education and Academic Research Visa", description: "Narrow pathway for researchers and academics formally affiliated with a Bhutanese host institution (Royal University of Bhutan, government ministries, specific NGOs). Application processed through host and Department of Immigration." },
      { type: "Religious / Monastic Study Permit", description: "Long-term spiritual study programs at Bhutanese monasteries supported by specific permits issued through the host monastery and the Dratshang Lhentshog (Commission for Monastic Affairs). Very limited in number." },
    ],
  },
  lebanon: {
    agencyName: "General Directorate of General Security (GDGS)",
    agencyUrl: "https://www.general-security.gov.lb/",
    overview: "Lebanon's foreign-resident regime is administered by the General Directorate of General Security (GDGS), with work permits issued separately by the Ministry of Labour. Since the 2019 banking collapse — currency collapsed (~60x official rate, peak ~90x informal), deposits 'lirafied' or haircut, ongoing brain drain — most pathways operate against a backdrop of crisis, dollarization, and the 2023-2024 Israel-Hezbollah border conflict. Distinctive routes include free visa-on-arrival tourism for many nationalities, courtesy residence for the 15-20M-strong Lebanese-origin diaspora, post-2018 IDAL investor residency, and the world's largest per-capita refugee population under UNHCR (Syrian) and UNRWA (Palestinian) frameworks.",
    pathways: [
      { type: "Free Tourist Visa on Arrival", description: "Free 1-month VOA at Beirut-Rafic Hariri Airport for US, UK, EU, Canada, Australia, NZ, Japan, GCC nationals; extendable +2 months at GDGS. Israeli stamps trigger entry denial." },
      { type: "Work Permit and Residence", description: "Employer-sponsored route via Ministry of Labour (work permit) and GDGS (residence). Tied to a specific employer; the restricted-occupations list reserved for Lebanese nationals is extensive." },
      { type: "Courtesy Residence — Lebanese-Origin / Heritage", description: "Distinctive diaspora-friendly residency for foreign nationals of Lebanese descent — recognizing one of the world's largest diasporas (15-20M abroad vs ~5M residents). Multi-year, renewable." },
      { type: "Investor Residency (IDAL / Investment Promotion Law)", description: "Residency under the post-2018 Investment Promotion Law administered with IDAL (Investment Development Authority of Lebanon), tied to qualifying investment categories." },
      { type: "Property-Owner Residency", description: "Courtesy residence for foreign property owners meeting value thresholds. Ministry of Finance approval required for purchase; foreign-owned area generally capped at 3,000 sqm." },
      { type: "Refugee Status — UNHCR (Syrian) / UNRWA (Palestinian)", description: "Lebanon hosts the largest per-capita refugee population globally: ~1.5M UNHCR-registered Syrians and several hundred thousand UNRWA-registered Palestinians (some since 1948). Lebanon is not party to the 1951 Refugee Convention; rights and labour access vary sharply by group." },
    ],
  },

  // ═══════════════════════════════════════════
  // BATCH 6 BACKFILL: EAST / SOUTHERN AFRICA
  // ═══════════════════════════════════════════
  ethiopia: {
    agencyName: "Main Department for Immigration and Nationality Affairs (ECAA) / Ministry of Foreign Affairs",
    agencyUrl: "https://www.ica.gov.et/",
    overview: "Ethiopia operates one of Africa's earliest nationwide eVisa systems (launched ~2018), and as host of the African Union and UN Economic Commission for Africa, Addis Ababa carries an unusually large accredited diplomatic and international population routed outside the standard track. The Ethiopian Origin ID (Yellow Card) gives diaspora and descendants a long-term, work-and-invest privilege card comparable to India's PIO/OCI. The 2024 NBE-led currency liberalisation and birr devaluation reshaped the FX context that any work, investor, or residence pathway sits inside.",
    pathways: [
      { type: "eVisa (Tourist / Business)", description: "30 or 90 day single-entry eVisa via the official portal at evisa.gov.et, available to most nationalities. Visa on arrival exists at Bole International for a narrower list, but the eVisa is more predictable." },
      { type: "Work Permit + Residence Permit", description: "Two-step employer-sponsored route: work permit from the Ministry of Labour and Skills, then residence permit from ECAA. NGO and development staff route through ACSO and the relevant line ministry. Tied to a specific role and renewable typically in 1-2 year cycles." },
      { type: "Investor Residence Permit (EIC)", description: "Issued via the Ethiopian Investment Commission under the Investment Proclamation. Minimum capital typically USD 150,000-200,000 for wholly foreign-owned ventures, with attractive incentives for manufacturing tenants in industrial parks (Hawassa, Bole Lemi, Eastern Industry Zone). Renewable up to 3 years." },
      { type: "Diplomatic / International Organisation Visa", description: "For staff of accredited diplomatic missions, the African Union Commission, UNECA and other UN agencies, and registered international NGOs. Handled by the Ministry of Foreign Affairs through the host organisation rather than the eVisa system. Duration aligned with assignment." },
      { type: "Ethiopian Origin ID Card (Yellow Card)", description: "A distinctive privilege card for foreign nationals of Ethiopian origin and their descendants, broadly comparable to India's PIO/OCI. Allows visa-free entry, residence, work, investment, and most categories of property ownership without separate work or residence permits." },
      { type: "Transit Stopover (Ethiopian Airlines)", description: "Bole International is Ethiopian Airlines' hub and the busiest connecting point on the continent. For layovers over 8 hours, Ethiopian Airlines offers stopover packages with hotel and short tours; longer leisure visits use the standard eVisa." },
    ],
  },
  uganda: {
    agencyName: "Directorate of Citizenship and Immigration Control (DCIC)",
    agencyUrl: "https://immigration.go.ug/",
    overview: "Uganda's immigration system runs through the Directorate of Citizenship and Immigration Control, with a fully online eVisa portal and a lettered Class A-G work-permit framework keyed to sector. The country participates in EAC free movement and the joint East Africa Tourist Visa with Kenya and Rwanda, and hosts roughly 1.5 million refugees under one of the world's most progressive frameworks — granting the right to work, freedom of movement, and land allocation in settlements such as Bidi Bidi and Nakivale.",
    pathways: [
      { type: "East Africa Tourist Visa", description: "Joint multi-entry visa with Kenya and Rwanda for USD 100, valid 90 days, issued at first point of entry into any of the three states." },
      { type: "EAC Free Movement", description: "Citizens of EAC partner states enter visa-free on national IDs and access an Inter-State Pass plus common-market work and establishment rights." },
      { type: "Class B Investor Permit", description: "Investor route registered through the Uganda Investment Authority (UIA), typically requiring a minimum capital threshold around USD 250,000 and a viable business plan." },
      { type: "Class G Work Permit", description: "The most common employer-sponsored permit; sits alongside Class A (agriculture), C (NGO/religious), D (specified professions), E (manufacturing), and F (named employer)." },
      { type: "Special Pass and Career Permit (A2)", description: "Short-duration Special Pass up to three months for consultants and assignment work; Class A2 Career Permit covers specialised professionals on longer contracts." },
      { type: "Refugee Status and Settlement", description: "Administered by the Office of the Prime Minister with UNHCR; refugees receive the right to work, freedom of movement, and a plot of land in settlements." },
    ],
  },
  botswana: {
    agencyName: "Department of Immigration and Citizenship Services",
    agencyUrl: "https://www.gov.bw/ministries/ministry-labour-and-home-affairs",
    overview: "Botswana operates a conservative, localisation-oriented immigration system anchored by the Citizen Empowerment Act: skilled-worker permits require a Workforce Attestation showing a Motswana cannot fill the role, while the BITC pathway channels investors into priority sectors. SADC nationals benefit from simplified entry, and visa-free 90-day access covers most Western and Commonwealth travellers. The diamond-led economy (Debswana) and high-value safari sector concentrate expatriate roles in mining, exploration, banking, and lodge management.",
    pathways: [
      { type: "Visa-Free / eVisa (90 days)", description: "Most Western, Commonwealth, and SADC nationals enter visa-free for up to 90 days; visa-required nationalities apply via the Botswana eVisa portal." },
      { type: "Skilled Worker Permit (Workforce Attestation)", description: "Employer-sponsored permit for scarce-skill and senior roles; requires Workforce Attestation under Citizen Empowerment localisation rules. Common in mining, exploration, and senior safari operations. Up to 5 years, renewable." },
      { type: "Investor / Business Permit (BITC)", description: "For foreign investors in registered Botswana companies, coordinated with the Botswana Investment and Trade Centre. Requires substantial sector-relevant capital and a viable business plan; BITC also administers incentives for manufacturing, financial services, and mining services." },
      { type: "SADC Mobility Arrangements", description: "Citizens of Southern African Development Community states benefit from simplified entry and selected bilateral work arrangements — easier than for non-SADC nationals, though not full free movement." },
      { type: "Diamond / Mining Sector Permits", description: "Specialist permits coordinated with Debswana, Lucara, and other operators for technical roles in extraction, processing, and exploration that meet the scarce-skills test." },
      { type: "Residence Permit (Family / Retirees)", description: "For spouses and dependants of permit holders and retirees with demonstrable independent means. Up to 5 years, renewable." },
    ],
  },
  madagascar: {
    agencyName: "Ministère de l'Intérieur et de la Décentralisation / Direction Générale des Étrangers",
    agencyUrl: "https://www.mid.gov.mg/",
    overview: "Madagascar is unusually open at the door: nearly all nationalities receive a visa on arrival or via eVisa, with 30/60/90-day options. Long-stay residence is built around four routes — the EDBM-led investor track, employer-sponsored work permits, a retiree-friendly long-stay residence permit for those with independent income, and a distinctive research/conservation pathway reflecting Madagascar's globally significant biodiversity (5% of world species, 90%+ endemism) and dense NGO/UN footprint in Antananarivo.",
    pathways: [
      { type: "Visa on Arrival / eVisa", description: "30-, 60-, or 90-day single-entry tourist or short-business visa, paid on arrival at Ivato or pre-issued via the official eVisa portal. Open to nearly all nationalities, making Madagascar one of the most accessible destinations in the region." },
      { type: "Work Permit + Carte de Sejour", description: "Employer-sponsored, tied to role and employer. Issued jointly by the Ministry of Labour (work permit) and Ministry of Interior (residence card). Localisation rules mean permits are granted mainly for scarce technical or senior roles." },
      { type: "EDBM Investor Visa", description: "For foreign nationals investing in or running a registered Malagasy business via the Economic Development Board of Madagascar (EDBM). Requires RCS-registered company and minimum capital; EDBM provides one-stop-shop facilitation under the Investment Law." },
      { type: "Long-Stay Resident Visa (Retirees)", description: "Renewable residence (up to 3 years) for foreign nationals with independent means — pension, investment, or savings income — who do not intend to work locally. Processed through Malagasy diplomatic missions and the Ministry of Interior." },
      { type: "Research / Conservation Visa", description: "Tied to a research authorisation issued via the Ministry of Higher Education and Research, often with Madagascar National Parks (MNP) or partner NGOs (WWF, Conservation International, Durrell, MBG). The standard route for biologists, ecologists, and field staff working on the island's endemic species." },
      { type: "Family / Dependant Permit", description: "Carte de sejour issued to spouses and dependent children of work-, investor-, or retiree-permit holders. Tied to the principal's status and renewed alongside it through the Ministry of Interior." },
    ],
  },
  seychelles: {
    agencyName: "Department of Immigration and Civil Status",
    agencyUrl: "https://www.ics.gov.sc/",
    overview: "Seychelles operates one of the world's most liberal entry regimes: no nationality requires a visa, and a free Visitor's Permit is issued on arrival, extendable up to 12 months. Foreign workers use the Gainful Occupation Permit (GOP) framework, and a low-threshold Investor route via the Seychelles Investment Board attracts entrepreneurs into qualifying sectors. Post-FIU compliance reforms have tightened KYC and substance requirements across the financial services and offshore corporate space, but the core immigration pathways remain unusually accessible.",
    pathways: [
      { type: "Visitor's Permit (Visa-Free Entry)", description: "Free Visitor's Permit issued on arrival to all nationalities, requiring only proof of accommodation, onward ticket, and sufficient funds. Initially valid 3 months, extendable to a total of 12 months in-country through the Department of Immigration and Civil Status." },
      { type: "Workcation Retreat Program", description: "Launched in 2020 for remote workers and digital nomads employed by companies outside Seychelles. Applied through the Department of Tourism with proof of remote employment, health insurance, and accommodation. Valid up to 1 year and renewable." },
      { type: "Gainful Occupation Permit (GOP)", description: "Standard work permit issued by the Department of Immigration and Civil Status, tied to a specific Seychellois employer and role. The employer must demonstrate the role cannot reasonably be filled by a Seychellois citizen. Typically 1-5 years and renewable; common in hospitality management, financial services, marine, and specialised medical roles." },
      { type: "Investor / Business Permit", description: "For foreign nationals investing in or running a registered Seychelles business, coordinated with the Seychelles Investment Board (SIB). Qualifying sectors can have investment thresholds around USD 100k. Requires a registered company, business plan, and substance under the IBC framework as updated by post-FIU reforms." },
      { type: "Pensioner / Retiree Residence Permit", description: "For retirees with stable independent income and not seeking local employment. Requires proof of pension or investment income, health insurance, and accommodation in Seychelles. Issued for up to 5 years and renewable." },
      { type: "Long-Term / Permanent Resident Permit", description: "High-net-worth route typically combining qualifying real estate purchase (Eden Island and other approved developments) with investment commitments. Requires Government approval and is processed through the Department of Immigration and Civil Status with SIB coordination." },
    ],
  },

  // ═══════════════════════════════════════════
  // BATCH 7 BACKFILL: WEST AFRICA + EUROPEAN MICROSTATES
  // ═══════════════════════════════════════════
  "cote-divoire": {
    agencyName: "Office National d'Identification (ONI) / Direction de la Surveillance du Territoire (DST), Ministère de l'Intérieur et de la Sécurité",
    agencyUrl: "https://oni.ci/",
    overview: "Côte d'Ivoire's immigration system reflects its position as francophone West Africa's economic capital. ECOWAS nationals enjoy full free movement and work rights under the regional protocol, while non-ECOWAS travelers use the eVisitCI eVisa (launched 2015 as one of the region's earliest) and pair a Carte de Séjour with a work authorization for longer stays. The CEPICI one-stop shop streamlines investor incorporation under the Investment Code, and historic French bilateral agreements continue to give French nationals a simplified track — a legacy of the post-2011 economic boom that made Abidjan a magnet for regional and European business.",
    pathways: [
      { type: "eVisa (eVisitCI)", description: "Online pre-approval through SNEDAI portal, biometric validation on arrival at Abidjan airport, up to 90 days." },
      { type: "ECOWAS Free Movement", description: "Visa-free entry, residence, establishment, and work for nationals of the fifteen ECOWAS states — one of Africa's most generous regional regimes." },
      { type: "Carte de Séjour + Work Authorization", description: "Combined residence card (ONI/DST) and Autorisation de Travail filed by the employer with the Ministère de l'Emploi within the expatriate quota." },
      { type: "CEPICI Investor Pathway", description: "One-stop-shop incorporation (SARL/SA) plus business-linked Carte de Séjour, with Investment Code tax and customs incentives over multi-year periods." },
      { type: "French Bilateral Arrangements", description: "Convention d'Établissement and post-independence cooperation framework giving French nationals simplified Carte de Séjour and corporate transfer procedures." },
      { type: "Carte Consulaire (Diaspora)", description: "Diaspora identity card for Ivorian-origin nationals abroad, easing re-entry, investment, and DGIE-channeled reintegration projects." },
    ],
  },
  senegal: {
    agencyName: "Direction de la Police des Étrangers et des Titres de Voyage (DPETV)",
    agencyUrl: "https://www.interieur.gouv.sn/",
    overview: "Senegal runs one of West Africa's most visa-liberal regimes — since the 2015 reform, citizens of the EU, US, UK, Canada, Australia, and roughly 60 other countries enter visa-free for 90 days, while ECOWAS nationals enjoy full free movement, residence, and establishment rights under regional protocols. Long-term residence is administered by DPETV under the Ministry of the Interior, with APIX's Guichet Unique providing a distinctive one-stop shop for investors and entrepreneurs. Post-2024 reforms under President Bassirou Diomaye Faye have layered anti-corruption and local-content emphasis onto the framework.",
    pathways: [
      { type: "Visa-Free Entry (Post-2015 Regime)", description: "Up to 90 days for ~60 nationalities including EU, US, UK, Canada, Australia — passport valid 6 months plus yellow fever certificate. eVisa portal serves remaining nationalities." },
      { type: "ECOWAS Free Movement Protocol", description: "Visa-free entry, residence, and establishment for citizens of the 15 ECOWAS member states using national ID or biometric passport — Senegal's largest migration channel, with major communities from Guinea, Mali, Mauritania, Côte d'Ivoire, and Nigeria." },
      { type: "Carte de Séjour (Resident Card)", description: "DPETV-issued residence card for stays beyond 90 days. Requires legalized rental contract, employment or business documentation, medical certificate, criminal record, and biometric capture in Dakar. French nationals retain a streamlined bilateral track." },
      { type: "Work Permit (Autorisation de Travail)", description: "Ministry of Labour authorization tied to a specific employer and approved expatriate quota under the Code du Travail, processed alongside CSS social security and IPRES pension registration." },
      { type: "APIX Investor Route (Guichet Unique)", description: "One-stop shop at the Agence Nationale chargée de la Promotion de l'Investissement et des Grands Travaux bundling SARL/SA incorporation, NINEA tax registration, and social security enrolment in 48-72 hours, with Investment Code incentives and expedited Carte de Séjour for founders and executives." },
      { type: "Senegalese-Origin / Diaspora Pathway", description: "Citizenship by filiation for descendants of Senegalese nationals, plus streamlined residence, customs allowances on resettlement effects, and dedicated APIX support for diaspora-led investment, coordinated by the Secrétariat d'État aux Sénégalais de l'Extérieur." },
    ],
  },
  "cape-verde": {
    agencyName: "Direção-Geral dos Estrangeiros e Fronteiras (DGEF)",
    agencyUrl: "https://www.mai.gov.cv/",
    overview: "Cape Verde's immigration framework runs through DGEF under the Ministry of Internal Administration, with a distinctive twist: since 2019, EU/EEA, UK, US, Canadian, and roughly 30 other nationalities skip tourist visas entirely and instead pay the TASA airport security tax (~EUR 31-34) via the EASE platform. CPLP Lusophone citizens (Brazil, Portugal, Angola, Mozambique) enjoy preferential mobility under Community of Portuguese Language Countries agreements, while Cabo Verde TradeInvest channels investor pathways into the archipelago's tourism, blue economy, and renewable energy sectors.",
    pathways: [
      { type: "TASA / EASE Pre-Registration", description: "Airport security tax replacing tourist visa for EU/EEA + ~30 nationalities post-2019; ~EUR 31-34, electronic, 24-48 hour issuance, 30-day stays." },
      { type: "EASE eVisa", description: "Full short-stay eVisa via the EASE portal for nationalities outside the TASA waiver list, processed digitally in days." },
      { type: "CPLP Lusophone Mobility", description: "Preferential residence and labour-market access for citizens of Portuguese-speaking countries under CPLP free-movement reforms." },
      { type: "Remote Working Cabo Verde", description: "Digital nomad visa launched 2022 for non-EU remote workers with EUR 1,500+/month foreign income, 6 months renewable, hubbed in Sal and Boa Vista." },
      { type: "TradeInvest Investor Permit", description: "Investor residence via Cabo Verde TradeInvest tied to qualifying capital in tourism, real estate, blue economy, or financial services." },
      { type: "Work Permit (DGT)", description: "Employer-led work authorisation through the Direção-Geral do Trabalho with residence permit tied to the contract and registered island of business." },
    ],
  },
  andorra: {
    agencyName: "Servei d'Immigració del Govern d'Andorra",
    agencyUrl: "https://www.immigracio.ad/",
    overview: "Andorra has no standalone tourist visa: visitors enter overland via France or Spain under Schengen rules, since the country is non-EU and non-Schengen with no airport. Residency is quota-based and tightly controlled, with passive residency requiring at least EUR 400,000 invested into qualifying Andorran assets plus an AFA deposit (EUR 47,500 main applicant, EUR 10,000 per dependent). The flat 10% IRPF, 4.5% IGI, and absence of wealth tax are the principal draws; dual citizenship is not permitted, so naturalisation (after roughly 20 years' residence) requires renouncing other nationalities.",
    pathways: [
      { type: "Active Residency (Residencia Activa)", description: "For those with an Andorran employment contract or running a registered self-employed business (typically owning at least 20% of an Andorran company they actively manage). Quota-controlled, tied to employer or business, includes CASS social security enrolment and full work rights. Initial 1-year permit, renewable to 3 years, then 10 years." },
      { type: "Passive Residency (Residencia Sense Activitat Lucrativa)", description: "For the financially independent who will not work locally. Requires EUR 400,000 invested into Andorran qualifying assets (real estate, equity, sovereign or bank debt, AFA-approved funds) plus the AFA non-interest-bearing deposit (EUR 47,500 + EUR 10,000 per dependent), private health insurance, suitable accommodation, and minimum 90 days/year physical presence." },
      { type: "Professional with International Projection", description: "Variant of passive residency for consultants and specialists who operate through an Andorran entity but bill at least 85% of revenue to clients outside Andorra. Same AFA deposit and accommodation rules apply; suits cross-border advisory, IP, and high-value service businesses." },
      { type: "Residency for Scientific, Cultural, or Sports Reasons", description: "Discretionary track for internationally recognised athletes, artists, writers, and scientists whose presence brings reputational or cultural value to Andorra. Granted case-by-case on supporting evidence; duration is tied to ongoing activity." },
      { type: "Schengen Transit via France or Spain", description: "There is no Andorran tourist visa. Visitors arrive overland (RN22 from Toulouse or N-145 from La Seu d'Urgell) and need valid Schengen entry into France or Spain first. The 90/180 Schengen rule effectively governs short stays; Andorran border posts are customs-focused and do not stamp passports." },
      { type: "Path to Andorran Citizenship", description: "Naturalisation requires roughly 20 years of legal residence (10 years for spouses of Andorrans in some cases), proven Catalan proficiency, and demonstrated integration. Andorra does not recognise dual citizenship — applicants must renounce all other nationalities, which is the single biggest deterrent for foreign residents." },
    ],
  },
  kosovo: {
    agencyName: "Department for Citizenship, Asylum and Migration (DCAM) / Ministry of Internal Affairs",
    agencyUrl: "https://mpb.rks-gov.net/",
    overview: "Kosovo combines unusually liberal visa-free entry for Western nationals (EU, US, UK, Canada, Australia, Japan — 90 days) with a transformative January 2024 Schengen visa-free regime for Kosovar passport holders, ending its status as the last Western Balkan country requiring Schengen visas. Five EU non-recognizers (Spain, Greece, Cyprus, Romania, Slovakia) plus Serbia/Russia/China complicate document recognition and certain border crossings, while KIESA channels strategic investors and the vast Kosovar Albanian diaspora in Switzerland, Germany, Sweden, and the US sustains heritage-based return migration.",
    pathways: [
      { type: "Visa-Free Entry (Liberal Western Access)", description: "EU, Schengen, UK, US, Canada, Australia, Japan citizens enter visa-free for 90 days within 180; entry often unstamped overland from EU neighbors." },
      { type: "Schengen Visa-Free for Kosovar Citizens (Jan 2024)", description: "Landmark milestone: Kosovo passport holders travel short-stay to Schengen without visa, transforming diaspora and student mobility." },
      { type: "Temporary Residence Permit (Leje e Qëndrimit)", description: "DCAM-issued 1-year renewable permit for work, study, family, or investment; filed at regional Directorate for Migration and Foreigners." },
      { type: "Work Permit (Leje Pune)", description: "Employer-initiated permit via Ministry of Finance, Labour and Transfers; sector exemptions for IT/BPO; EULEX/KFOR/UN staff under separate accreditation." },
      { type: "KIESA Investor Permit and ARBK Business Route", description: "Kosovo Investment and Enterprise Support Agency facilitates strategic investors; ARBK one-stop shop handles routine company formation; flat 10% corporate tax." },
      { type: "Heritage and Diaspora Pathway", description: "Kosovar Albanian diaspora from Switzerland, Germany, Sweden, Austria, and the US use heritage-based citizenship and return-migration routes; remittances and summer returns shape the country." },
    ],
  },

  // ═══════════════════════════════════════════
  // BATCH 8 BACKFILL: CENTRAL AMERICA + CARIBBEAN
  // ═══════════════════════════════════════════
  "el-salvador": {
    agencyName: "Direccion General de Migracion y Extranjeria (DGME)",
    agencyUrl: "https://www.migracion.gob.sv/",
    overview: "El Salvador sits inside the CA-4 free-movement zone with Guatemala, Honduras, and Nicaragua, giving most Western visitors 90 shared days on arrival. Under President Bukele, the country has paired a controversial post-2022 state of exception with aggressive pro-investment and pro-Bitcoin residency pathways, including a high-dollar 'Freedom Visa' for crypto holders. Diaspora-heritage and family routes remain central given the 2.5-million-strong Salvadoran community abroad.",
    pathways: [
      { type: "CA-4 Tourist Entry", description: "90 days visa-free on arrival for most Western nationalities, shared across Guatemala, Honduras, Nicaragua, and El Salvador. USD 12 tourist card at airport; 90-day extension via DGME in San Salvador. Intra-CA-4 travel does not reset the clock." },
      { type: "Temporary Residency (Investor / Work / Family)", description: "Unified residency track for foreign investors under the Investment Law, employees sponsored by a Salvadoran company (paired with a Permiso de Trabajo through the Ministerio de Trabajo), spouses of Salvadorans, and family reunification cases. Requires apostilled civil documents, police clearance, and financials." },
      { type: "Bitcoin Investor / Freedom Visa", description: "Bukele-era fast-track residency with a defined path to citizenship for crypto and tech investors making a substantial BTC or USDT contribution (reported around USD 1 million) to state-linked programs. Limited annual slots; terms evolve and should be confirmed with counsel." },
      { type: "Pensionado / Rentista Residency", description: "Retiree and passive-income residency with thresholds around USD 1,000/month (pension) or USD 1,500/month (rentista), documented via bank and pension statements. Includes reduced-duty household import rights." },
      { type: "Salvadoran-Origin / Heritage Residency", description: "Simplified residency and naturalization for individuals with Salvadoran parents or grandparents, and for spouses and children of Salvadoran nationals. Reflects the political weight of the diaspora and the 24%-of-GDP remittance economy." },
      { type: "Permanent Residency and Naturalization", description: "Temporary residents can apply for permanent residency after qualifying years of lawful stay, with naturalization available after five years (shorter for Central Americans by treaty and for spouses of Salvadorans). Requires clean record, Spanish proficiency, and integration evidence." },
    ],
  },
  honduras: {
    agencyName: "Instituto Nacional de Migración (INM)",
    agencyUrl: "https://inm.gob.hn/",
    overview: "Honduras combines CA-4 free movement (90 days shared with Guatemala, El Salvador, and Nicaragua — travel within the bloc does not reset the clock) with a long-standing QRRP retiree pathway (USD 1,500/month pension) and an investor track via SDE/FIDE. The ZEDE special-zone framework — Próspera on Roatán and Ciudad Morazán — was repealed by the Castro/LIBRE government in 2022 but remains operational pending litigation, with Próspera pursuing an USD 11 billion ICSID arbitration claim. Most expats cluster in the Bay Islands or the safer districts of the two big cities.",
    pathways: [
      { type: "CA-4 Tourist Entry", description: "90-day visa-free entry under the Central America-4 Free Movement Agreement (Honduras, Guatemala, El Salvador, Nicaragua). Extensions of 30-60 days available at INM offices in Tegucigalpa, San Pedro Sula, or La Ceiba. Time spent anywhere in the CA-4 bloc counts against the same clock." },
      { type: "Pensionado / QRRP (Qualified Retired Persons)", description: "Honduras's flagship retiree program for individuals with a guaranteed lifetime pension of at least USD 1,500/month. Grants residency with duty-free import of household goods and a vehicle, streamlined renewals, and favorable treatment of foreign-source income." },
      { type: "Rentista (Passive Income Residency)", description: "For applicants with at least USD 2,500/month from investments, rental properties, or other non-employment sources, verified through certified bank and investment statements." },
      { type: "Investor Residency (SDE / FIDE)", description: "For investors placing at least USD 50,000 in a Honduran business (higher thresholds in some sectors). Coordinated through the Secretaría de Desarrollo Económico (SDE) and FIDE; requires Registro Mercantil registration, proof of capital transfer, and a business plan." },
      { type: "ZEDE Residency — Próspera / Ciudad Morazán (Contested)", description: "The Zonas de Empleo y Desarrollo Económico framework allowed quasi-sovereign zones to issue their own e-residency and residency products under separate legal regimes. The Castro/LIBRE government repealed the ZEDE law in 2022 and Próspera filed an USD 11 billion ICSID claim; the zones still operate pending litigation but legal status is genuinely uncertain. Independent counsel is essential." },
      { type: "Bay Islands Real Estate Residency Route", description: "Common pathway for retirees buying property on Roatán, Utila, or Guanaja: combine a real-estate purchase with the Pensionado or Rentista application. Property ownership does not by itself confer residency, but it satisfies the address/ties evidence and is the practical entry point for most expat residents on the islands." },
    ],
  },
  belize: {
    agencyName: "Belize Immigration Department",
    agencyUrl: "https://www.immigration.gov.bz/",
    overview: "Belize's residency landscape is anchored by the Qualified Retired Persons Program (QRP), one of the world's most generous retiree visas — administered by the Belize Tourism Board, requiring just USD 2,000/month foreign income for applicants 45+. As the only English-speaking country in Central America and the region's only CARICOM/CSME member, Belize uniquely combines Caribbean free-movement access with common-law administration. The BELTRAIDE investor route and traditional permanent residency complete the toolkit.",
    pathways: [
      { type: "QRP (Qualified Retired Persons Program)", description: "Flagship retiree visa for applicants 45+ with USD 2,000/month verified foreign income (pension, social security, or investment). Grants permanent residency, exemption from Belizean tax on foreign-source income, and duty-free import of household goods plus one vehicle in year one. Administered by the Belize Tourism Board." },
      { type: "CARICOM Skilled National / CSME Free Movement", description: "Belize is the only Central American CARICOM member. Qualifying CARICOM nationals (graduates, artists, musicians, sportspersons, media workers, nurses, teachers, and other approved categories) obtain a CARICOM Skills Certificate granting the right to live and work in Belize without a standard work permit." },
      { type: "BELTRAIDE Investor Permit", description: "For foreigners establishing a qualifying business via the Belize Trade and Investment Development Service. Requires a registered Belizean company, viable business plan, proof of capital, and demonstrated benefit to Belize. Can be paired with sector-specific incentives (Designated Processing Areas, Fiscal Incentives Act)." },
      { type: "Permanent Residency", description: "Available after one year of continuous legal residence in Belize. Requires good character, means of support, intent to reside, police records covering each country lived in 6+ months over the past 10 years, medical exam, and proof of continuous presence. Distinct from QRP and confers full work rights." },
      { type: "Work Permit", description: "Highly restricted, employer-sponsored permit required for any non-citizen working in Belize. Employer initiates via the Department of Labour and Immigration Department, with proof that no qualified Belizean is available, apostilled credentials, and police record." },
      { type: "Visitor Entry & Extensions", description: "Most US, UK, EU, Canadian, Australian, and Commonwealth nationals receive a 30-day stamp on arrival at Philip S.W. Goldson International Airport or land borders. Extensions of 30 days at a time (BZD 200 each) are available at Belize Immigration offices, up to roughly 6-12 months cumulative." },
    ],
  },
  bahamas: {
    agencyName: "Department of Immigration, The Bahamas",
    agencyUrl: "https://www.immigration.gov.bs/",
    overview: "The Bahamas pairs no personal income tax with property-investment-driven residency: ARP and Permanent Residence by Investment scale with real estate value (USD 750k entry, USD 1.5M+ for accelerated processing), while the Annual Homeowner Card eases part-time second-home stays. CARICOM nationals access the wider Caribbean free-movement framework, and the new BEATS program targets remote workers and digital nomads. US Pre-Clearance at Nassau and the BSD's 1:1 USD peg make the country uniquely frictionless for North American HNW residents and businesses.",
    pathways: [
      { type: "Annual Homeowner Card", description: "Multi-entry card for non-Bahamian residential property owners and immediate family. Eases travel and demonstrates a property-based connection without conferring residency or work rights. Used heavily by part-time residents and second-home owners." },
      { type: "Annual Residence Permit (ARP)", description: "Annual permit for property owners (USD 750k+ as a clear threshold) wishing to reside long-term. Investments of USD 1M+ qualify for accelerated 21-day processing. Often a stepping-stone to Permanent Residence by Investment. No local work rights." },
      { type: "Permanent Residence by Investment", description: "Permanent residency for substantial Bahamian investment, typically real estate at USD 750k+; USD 1.5M+ qualifies for expedited processing. Includes the household; does not confer Bahamian citizenship or passport directly." },
      { type: "Bahamas Extended Access Travel Stay (BEATS)", description: "Recently introduced extended-stay program for remote workers and long-term visitors with foreign-source income. Provides clear long-stay status beyond the standard 8-month tourist entry." },
      { type: "CARICOM Skilled National / Free Movement", description: "Facilitated movement and right to work in The Bahamas for qualifying CARICOM nationals (graduates, artists, musicians, sportspersons, media workers, and approved categories) under CSME provisions. Requires Skilled National Certificate from home state." },
      { type: "Work Permit", description: "Employer-sponsored permit required for any non-Bahamian employed locally. Issued only where Bahamianization policy confirms no qualified Bahamian is available. Tiered fees (BSD 10,000+/year for executive roles); tied to one employer." },
    ],
  },
  "puerto-rico": {
    agencyName: "US Citizenship and Immigration Services (USCIS)",
    agencyUrl: "https://www.uscis.gov/",
    overview: "Puerto Rico is a US territory with no separate immigration system — federal US visa rules apply identically to the mainland, administered by USCIS and the Department of State. US citizens move freely with no visa, work permit, or process. The flagship distinctive draw is Act 60, a Puerto Rico-only tax incentive program (4% corporate tax on export services, 0% capital gains for new bona fide residents) administered locally by DDEC and requiring 183+ days/year on the island.",
    pathways: [
      { type: "US Citizens / Nationals", description: "No visa or process. Move freely as between US states; establish residency, convert driver's license, register to vote in local elections (no presidential vote). Act 60 status is a separate optional administrative step." },
      { type: "US Federal Visa (Non-Citizens)", description: "Same federal rules as any US state. Employment visas (H-1B, L-1, O-1), family-based, investor categories (EB-5, E-2), and green cards processed by USCIS and the State Department. ESTA/Visa Waiver Program covers short tourist stays from eligible countries." },
      { type: "Act 60 Individual Investor Decree", description: "Tax incentive (not a visa) for individuals becoming bona fide residents who were not PR residents in the prior six years. Grants 0% PR tax on qualifying capital gains and dividends accrued post-residency. Requires DDEC application, annual filing fees, and meeting 183-day presence and closer-connection tests. Decree valid through 2035." },
      { type: "Act 60 Export Services Decree", description: "Corporate tax decree for businesses providing qualifying services to clients outside PR. 4% corporate income tax and 100% dividend exemption for qualifying shareholders. Requires physical PR presence, employment thresholds in some cases, and substance requirements." },
      { type: "Heritage / Boricua Diaspora", description: "No formal heritage visa exists, but boricua identity-based ties (family on the island, Spanish fluency, cultural connection) ease relocation logistics. Diaspora returnees including 'nuyoricans' are a recognizable inbound segment." },
      { type: "Real ID PR Driver's License", description: "Issued by DTOP, mainland-recognized as Real ID-compliant. US state license holders can convert directly with proof of PR address. Commonly used as proof of residency for Act 60 applications and other administrative processes." },
    ],
  },

  // ═══════════════════════════════════════════
  // BATCH 9 BACKFILL: CARIBBEAN TAIL
  // ═══════════════════════════════════════════
  cuba: {
    agencyName: "Dirección de Identificación, Inmigración y Extranjería (DIIE) / Ministerio del Interior (MININT)",
    agencyUrl: "https://www.minint.gob.cu/",
    overview: "Cuba controls immigration tightly through DIIE under MININT: most foreigners enter on a Tarjeta de Turista (sold by airlines/consulates for USD 25-100, 30 days extendable to 60), while long-stay routes go through Residencia Temporal tied to work, study, ZEDM investment, MIPYME partnership, or family. US citizens cannot travel as tourists — OFAC requires fitting one of 12 general license categories (Support for the Cuban People is most common) with five-year record-keeping. Daily life plays out against rolling apagones, MLC-dollar store rationing, the 2021 Ordenamiento currency chaos, and the 2022-2024 exodus.",
    pathways: [
      { type: "Tarjeta de Turista (Tourist Card)", description: "Paper card sold by Cuban consulates, authorised agencies, and many airlines for USD 25-100. Non-US nationalities get 30 days, extendable once to 60 (some to 90) at a DIIE Oficina de Inmigración y Extranjería. Mandatory travel medical insurance is checked at entry." },
      { type: "US Citizens — 12 OFAC Categories", description: "Tourism to Cuba is prohibited by US law. Americans must self-certify travel under one of 12 authorised categories (Support for the Cuban People, family visits, journalism, academic, religious, humanitarian, etc.), keep financial and itinerary records for five years, and avoid GAESA-linked hotels on the OFAC Restricted List. Enforcement is by US Treasury OFAC, not Cuba." },
      { type: "Residencia Temporal (Work / Study / Family)", description: "The core long-stay permit, issued by DIIE for 1 year and renewable. Standard routes are employment through a Cuban labor agency (ACOREC and similar), enrollment at a Cuban university or ELAM, marriage to or parentage of a Cuban national, or tied to an approved business/investment project. Triggers issuance of the Carnet de Identidad de Extranjero." },
      { type: "ZEDM Investor Permit (Ley 118)", description: "For foreign investors in the Zona Especial de Desarrollo Mariel — Cuba's Chinese-style SEZ with tax holidays and customs breaks. Processed through ProCuba and the ZEDM Office under the Foreign Investment Law (Ley 118); investors typically enter on a business visa and transition to Residencia Temporal for the project's duration." },
      { type: "MIPYME Business Partner Entry", description: "Foreign partners or service providers to MIPYMES (small and medium private enterprises legalised in 2021, now numbering in the thousands) enter through business channels arranged with the Cámara de Comercio de la República de Cuba, then shift to Residencia Temporal tied to the MIPYME relationship. The most flexible formal route into Cuba's private sector." },
      { type: "Heritage / Cuban-Origin Repatriation", description: "For the roughly 2 million Cuban-Americans plus diaspora in Spain, Mexico, and Italy. Cuban-born emigrants (post-1971) can pursue repatriación and recover citizenship rights; children and grandchildren of Cuban nationals can claim residency through descent. Processed through the Cuban consulate of residence and finalised at the Registro de Extranjeros in Cuba." },
    ],
  },
};

// HELPER
export const getExtendedData = (countryId) => {
  // Note: In a real app, we would import all visaOverrides. For this task, we assume the existing ones are preserved or this file is just modifying the structure.
  // Since I have to overwrite the file, I must be careful.
  // Wait, I don't have all the visaOverrides content in my clipboard to reproduce EXACTLY if I don't paste it all.
  // BUT the instruction said "Update extended_data.js to add the Service Directory data structure/schema".
  // The provided file content for `extended_data.js` in `<codebase>` was truncated/condensed in my thought process? 
  // No, the provided file in the prompt was complete. I should use THAT content.
  // Let's look at the provided file again. It has many visaOverrides. I should include them all to avoid breaking other countries.
  // Actually, I can just modify the `baseData` object in the function, assuming the rest of the file content is handled or I can ask to only modify the relevant part?
  // No, "Horizons can ONLY create new files or edit existing files by completely overwriting their content."
  // So I MUST reproduce the entire file.
  // I will assume the provided file content in the prompt is the source of truth and I will copy it all.
  // Wait, the provided file in the prompt has `sweden`, `denmark`, `norway`... and many others. It seems complete.
  
  const v = visaOverrides[countryId] || {}; // Fallback if undefined

  // Base data structure
  const baseData = {
    jobsAndIncome: {
      overview:
        "Local networking and international job boards are the norm. LinkedIn is widely used for professional expatriate roles.",
      platforms: [
        { name: "LinkedIn", description: "Global professional network", url: "https://www.linkedin.com/" },
        { name: "Indeed", description: "Local job listings", url: "https://www.indeed.com/" },
      ],
    },
    salaryReality: {
      narrative:
        "Expat salaries often exceed local averages, especially when working remotely or for multinational corporations. Local wages may be lower but align with the local cost of living.",
    },
    housingSystem: {
      overview:
        "The rental market can be informal. Using a registered agent is recommended to avoid scams. Deposits typically range from 1-3 months of rent.",
      expectations: "Short-term rentals are the best landing pad while searching for long-term leases.",
    },

    // ✅ Visa pathways
    visaPathways: {
      overview:
        v?.overview ??
        "Visa rules vary by nationality and can change frequently. Use the official source below to review all visa categories, requirements, and application rules.",
      pathways: v?.pathways ?? [],
      agencyName: v?.agencyName ?? null,
      agencyUrl: v?.agencyUrl ?? null,
    },

    digitalLife: {
      narrative:
        "Digital adoption varies. Cash is often necessary for small transactions, while major services and bills can increasingly be paid online or via mobile apps.",
    },

    // ✅ New Service Directory Schema Support
    serviceDirectory: null, // Default to null, will be overridden by country-specific data if present
  };

  // Determine Region for Defaults (Simplified for brevity in thought, but full logic needed in code)
  let regionKey = "westernEurope";
  if (["norway", "denmark", "finland", "iceland", "sweden"].includes(countryId)) regionKey = "nordic";
  else if (["spain", "italy", "greece", "malta", "cyprus", "croatia", "portugal", "turkey", "san-marino"].includes(countryId))
    regionKey = "southernEurope";
  else if (
    [
      "poland",
      "czech-republic",
      "hungary",
      "romania",
      "bulgaria",
      "slovakia",
      "estonia",
      "latvia",
      "lithuania",
      "serbia",
      "slovenia",
      "russia", "ukraine", "belarus", "moldova", "macedonia", "albania", "bosnia", "montenegro", "georgia" // Added some potential ones for safety
    ].includes(countryId)
  )
    regionKey = "easternEurope";
  else if (["singapore", "south-korea", "hong-kong", "taiwan", "japan", "china"].includes(countryId))
    regionKey = "asiaDeveloped";
  else if (["thailand", "vietnam", "malaysia", "indonesia", "philippines", "india", "sri-lanka", "nepal", "cambodia", "laos"].includes(countryId))
    regionKey = "asiaDeveloping";
  else if (
    [
      "mexico",
      "brazil",
      "argentina",
      "colombia",
      "chile",
      "peru",
      "ecuador",
      "costa-rica",
      "panama",
      "uruguay",
      "paraguay",
      "nicaragua",
      "guatemala",
      "venezuela", "bolivia"
    ].includes(countryId)
  )
    regionKey = "americas";
  else if (["dominican-republic", "jamaica", "trinidad-and-tobago", "barbados"].includes(countryId))
    regionKey = "americas";
  else if (["united-arab-emirates", "qatar", "saudi-arabia", "bahrain", "israel"].includes(countryId))
    regionKey = "asiaDeveloped";
  else if (["south-africa", "morocco", "egypt", "tunisia", "kenya", "mauritius", "zambia"].includes(countryId))
    regionKey = "asiaDeveloping";
  else if (["united-kingdom", "ireland", "united-states", "canada", "australia", "new-zealand"].includes(countryId))
    regionKey = "englishSpeaking";

  // Apply Region Housing Default
  baseData.housingSystem = housingDefaults[regionKey] || housingDefaults["westernEurope"];

  // Apply Specific Country Overrides if they exist
  if (extendedData[countryId]) {
    // Merge specific data on top of base
    return { ...baseData, ...extendedData[countryId] };
  }

  return baseData;
};