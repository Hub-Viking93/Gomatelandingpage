export const austria = {
  id: 'austria',
  slug: 'austria',
  name: 'Austria',
  region: 'Europe',
  complexity: 'High',
  languages: ['German'],
  shortDescription: 'Imperial history, alpine landscapes, and a formal, high-quality way of life.',
  heroImage: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af',
  flagAlt: 'Flag of Austria',
  atAGlance: "Austria offers one of the highest qualities of life in the world, with Vienna consistently ranking as the most livable city globally. The country blends imperial grandeur — the Habsburg legacy is everywhere, from the Ringstrasse to the coffeehouses — with modern efficiency and a deeply embedded social welfare system. Life here is formal, structured, and governed by rules that Austrians take seriously. Titles matter: a 'Herr Doktor' or 'Frau Magister' expects to be addressed as such in professional and sometimes even casual settings. The concept of 'Gemütlichkeit' (a warm, cozy conviviality) defines the best of Austrian social life, found in Heurigen (wine taverns), Kaffeehäuser (coffeehouses), and Berghütten (mountain huts). However, social circles can be notoriously difficult to penetrate — Austrians form friendships slowly and value long-standing relationships over quick connections. The bureaucracy is old-school and paper-heavy: forms must be stamped, documents notarized, and appointments scheduled weeks in advance. Sundays are sacrosanct quiet days — shops are closed, noise is forbidden, and the country retreats to family, nature, or the Kaffeehaus. The cost of living is high but tempered by strong social benefits: excellent public healthcare, affordable public transport, generous parental leave, and a pension system that provides genuine security. The Austrian dialect (Österreichisches Deutsch) can be impenetrable even for fluent German speakers — 'Erdäpfel' instead of 'Kartoffel' (potato), 'Paradeiser' instead of 'Tomate' (tomato), and a musical cadence that sounds nothing like Hochdeutsch. For those who adapt to the formality and patience required, Austria rewards with safety, beauty, culture, and a daily rhythm that prioritizes quality over speed.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'High',
    primaryLanguages: 'German (Austrian dialect)',
  },
  visas: [
    {
      name: 'Red-White-Red Card (Rot-Weiß-Rot Karte)',
      targetAudience: 'Skilled Workers',
      useCase: 'A points-based combined work and residence permit for qualified third-country nationals. Points are awarded for education, work experience, language skills (German or English), and age. The card is tied to a specific employer for the first two years, after which it can be renewed as a Red-White-Red Card Plus (open work access).',
      duration: '2 years (renewable as RWR Card Plus)',
      link: 'https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/'
    },
    {
      name: 'Job Seeker Visa',
      targetAudience: 'Highly Qualified Professionals',
      useCase: 'A 6-month visa allowing very highly qualified third-country nationals to enter Austria and search for employment. Based on a points system evaluating education (PhD or master\'s weighted heavily), age, language skills, and prior work experience. No employment permitted during the search period.',
      duration: '6 months (non-renewable, must convert to RWR Card)',
      link: 'https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/very-highly-qualified-workers/'
    },
    {
      name: 'EU Blue Card',
      targetAudience: 'Highly Skilled Workers with Job Offer',
      useCase: 'For third-country nationals with a university degree and a binding job offer with a minimum gross annual salary (approximately EUR 45,000+). Provides more flexibility than the RWR Card for intra-EU mobility after 18 months.',
      duration: '2 years (renewable)',
      link: 'https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/eu-blue-card/'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists, Short-term visitors',
      useCase: 'For short visits up to 90 days within a 180-day period for tourism, business meetings, or family visits. Austria is part of the Schengen area.',
      duration: 'Up to 90 days',
      link: 'https://www.bmeia.gv.at/en/travel-stay/entry-and-residence-in-austria/entry-and-visa/schengen-visa/'
    },
    {
      name: 'Residence Permit - Student',
      targetAudience: 'International Students',
      useCase: 'For non-EU citizens enrolled at an Austrian university or accredited institution. Requires proof of sufficient financial means (approximately EUR 1,200/month), comprehensive health insurance, and confirmation of admission. Limited work rights (20 hours/week during semester).',
      duration: '1 year (renewable)',
      link: 'https://www.migration.gv.at/en/types-of-immigration/students/'
    }
  ],
  requirements: [
    {
      title: 'Meldezettel (Address Registration)',
      explanation: 'You must register your residential address at the Meldeamt (registration office) within three days of moving in. The form requires your landlord\'s signature (Unterkunftgeber-Bestätigung). You bring the completed form, your passport, and the signed landlord confirmation to the local Magistrat or Gemeindeamt.',
      importance: 'The Meldezettel is the foundational document for life in Austria. Without it, you cannot open a bank account, register for health insurance, apply for a residence permit, enroll children in school, or access most government services. It proves your legal residence address and is requested constantly in daily administrative processes.',
      link: 'https://www.oesterreich.gv.at/en/themen/dokumente_und_recht/an__abmeldung_des_wohnsitzes.html'
    },
    {
      title: 'Social Security Registration (Sozialversicherungsnummer)',
      explanation: 'Registration in the Austrian social security system, which covers health insurance, pension, accident insurance, and unemployment insurance. When you start employment, your employer registers you with the Austrian Health Insurance Fund (ÖGK). Self-employed individuals register through the Social Insurance Fund for Self-Employed (SVS).',
      importance: 'Social security registration is mandatory and automatic for employees. It provides comprehensive healthcare coverage, pension contributions, and workplace protections. Your social security number (Sozialversicherungsnummer) is used across all healthcare and government benefit systems. Contributions are approximately 18% of gross salary for employees (matched by employer at ~21%).',
      link: 'https://www.gesundheitskasse.at/cdscontent/?contentid=10007.870702&portal=oegkportal'
    },
    {
      title: 'E-Card (Health Insurance Card)',
      explanation: 'The electronic health insurance card issued automatically when you are registered in the Austrian social security system. It contains your name, social security number, and insurance data on a chip.',
      importance: 'You present the E-Card at every doctor visit, pharmacy, and hospital. It provides cashless access to the entire public healthcare system. The card is usually mailed to your registered address within 2-4 weeks of employment registration. Without it, you must pay upfront and claim reimbursement.',
      link: 'https://www.chipkarte.at/cdscontent/?contentid=10007.837568'
    },
    {
      title: 'ID Austria (Digital Identity)',
      explanation: 'The Austrian digital identity system that allows you to sign documents electronically, access FinanzOnline (tax portal), view your social security data, and interact with government services online. Activated at a registration authority (Registrierungsstelle) with your passport and proof of residence.',
      importance: 'ID Austria enables you to file taxes online through FinanzOnline, access your pension and insurance records, sign contracts digitally, and handle many administrative tasks without visiting offices in person. It is the successor to the Handysignatur (mobile signature) and is increasingly required for government services.',
      link: 'https://www.oesterreich.gv.at/en/id-austria.html'
    }
  ],
  jobsAndIncome: {
    overview: "Austria has a stable, highly regulated job market with strong worker protections. Key industries include tourism, manufacturing (automotive, machinery), financial services, technology, life sciences, and international organizations (Vienna hosts the UN, OSCE, OPEC, and IAEA). The economy is heavily influenced by the Sozialpartnerschaft (social partnership) between employer associations and trade unions, which sets collective bargaining agreements (Kollektivverträge) that define minimum salaries, working hours, and conditions for most industries.",
    whereToLook: [
      "AMS (Arbeitsmarktservice) — the public employment service, mandatory to register with if job-seeking",
      "Karriere.at — Austria's largest private job portal",
      "StepStone Austria — major recruitment platform for professional roles",
      "LinkedIn — increasingly important for international and corporate positions",
      "Company career pages, especially for major Austrian employers (OMV, Erste Group, Raiffeisen, Voestalpine)"
    ],
    realityChecks: [
      "German language skills are required for the vast majority of positions — even many international companies conduct daily operations in German.",
      "Hiring processes are formal and thorough, often requiring academic credentials, professional references, and proof of qualifications (including Nostrification for foreign degrees).",
      "Collective bargaining agreements (Kollektivverträge) define minimum salaries by industry and experience level, providing a transparent floor but limiting negotiation range.",
      "The Austrian job market values stability and loyalty — frequent job changes are viewed more skeptically than in Anglo-Saxon markets."
    ]
  },
  salaryReality: {
    overview: "Austrian salaries are competitive by European standards, with median gross salaries around EUR 3,200-3,500 per month (14 payments per year). The 13th and 14th salary payments (Weihnachtsgeld and Urlaubsgeld) are standard and taxed at a favorable flat rate, effectively boosting annual income by two extra months. Income tax is progressive (20-55%), and combined social security contributions are approximately 18% for employees.",
    realityChecks: [
      "Gross-to-net reduction is substantial: expect to take home approximately 55-65% of your gross salary after income tax and social contributions.",
      "The 13th and 14th salary payments are taxed at a flat 6% (plus social contributions), making them significantly more tax-efficient than regular monthly salary.",
      "Wage progression is steady and predictable, governed by collective agreements that provide automatic increases based on seniority (Vorrückungen).",
      "Vienna is the most expensive city, but the difference with other Austrian cities (Graz, Linz, Salzburg, Innsbruck) is less dramatic than in many countries due to regulated housing and good public services everywhere."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "Employee social security contributions (approximately 18% of gross salary) deducted before net pay",
      "The favorable tax treatment of 13th and 14th salary payments, which significantly boost effective annual income",
      "Cost of living differences between Vienna (highest) and other cities like Graz or Linz (15-25% lower)",
      "Kirchenbeitrag (church tax) — if you are registered as Catholic, Protestant, or certain other denominations, approximately 1.1% of income is automatically deducted"
    ]
  },
  housingSystem: {
    overview: "Austria has a well-regulated rental market with strong tenant protections, particularly in Vienna. The city is famous for its Gemeindebau (social housing) system — roughly 60% of Viennese residents live in subsidized or social housing. Private rentals are governed by the Mietrechtsgesetz (tenancy law), which regulates rent levels in older buildings (Altbau). Popular neighborhoods in Vienna include the 1st through 9th districts (Innere Stadt, Leopoldstadt, Landstraße, Wieden, Margareten, Mariahilf, Neubau, Josefstadt, Alsergrund), with Ottakring (16th) and Favoriten (10th) offering more affordable options.",
    expectations: "For private rentals, expect to pay 2-3 months' rent as a deposit (Kaution), plus an agent fee (Maklerprovision) if applicable — though new legislation has capped or eliminated buyer/tenant-side agent fees for most transactions. Monthly rent for a one-bedroom apartment ranges from EUR 600-900 in central Vienna and EUR 400-600 in other major cities. Utility costs (Betriebskosten including heating, water, building maintenance) are typically EUR 150-300 per month. Heating costs (Heizkosten) can be significant in winter, especially in older buildings. Furnished rentals are less common than unfurnished, particularly for long-term contracts."
  },
  healthcareReality: "Austria has an excellent universal healthcare system funded through mandatory social insurance contributions. Once registered through employment or self-employment, your E-Card provides access to the entire public healthcare network at minimal or no out-of-pocket cost. Public hospitals like AKH Wien (Allgemeines Krankenhaus — one of Europe's largest hospitals), Universitätsklinik Innsbruck, and LKH Graz are world-class. The Wahlärzte (private doctors) system allows you to see private practitioners and claim partial reimbursement from ÖGK. Wait times for specialists in the public system can be weeks to months, leading many residents to use Wahlarzt appointments for faster access (typically EUR 80-200 per visit, with 80% reimbursable). Dental care is partially covered — basic treatments are included, but cosmetic and prosthetic work requires supplementary private insurance. Pharmacies (Apotheken) are well-stocked and pharmacists are highly trained; a rotating Nachtapotheke (night pharmacy) system ensures 24/7 access in every area.",
  digitalLife: {
    overview: "Austria is digitally organized but conservative in its approach. Government services are available through oesterreich.gv.at and the associated USP (Unternehmensserviceportal for businesses), but many processes still require physical documents, in-person appointments, and official stamps. The transition to digital is accelerating through ID Austria, but paper culture remains firmly embedded.",
    essentials: [
      "ID Austria — digital identity for accessing FinanzOnline (taxes), social security data, and government services",
      "FinanzOnline — the tax portal for filing annual tax returns and managing tax affairs",
      "ÖBB app (Scotty) — essential for purchasing train tickets and planning public transport journeys across Austria",
      "George (Erste Bank) or similar banking app — Austrian banking is heavily app-based for daily transactions"
    ],
    whatSurprisesNewcomers: [
      "Austria is one of the most cash-heavy countries in Western Europe. Many restaurants, smaller shops, and even some larger establishments do not accept cards. Always carry cash.",
      "Many offices still require in-person appointments, and scheduling can require weeks of lead time — the MA35 (Vienna immigration office) is particularly notorious for long waits.",
      "Paper documents with official stamps (Amtliche Stempel) carry legal weight that digital documents often do not. Keep originals of everything.",
      "The postal system (Österreichische Post) is reliable and commonly used for official correspondence — check your physical mailbox regularly for government letters."
    ]
  },
  culture: {
    text: "Austrian culture is built on etiquette, tradition, and a distinctive blend of formality and warmth. The Kaffeehaus (coffeehouse) is a second living room where you can sit for hours with a single Melange (Vienna's version of a cappuccino) reading newspapers on wooden sticks — the tradition is UNESCO-recognized. 'Schmäh' is the uniquely Viennese dark, ironic humor that pervades daily life and can take months to decode. Titles are taken seriously in professional and even social settings: a person with a doctorate expects to be addressed as 'Herr Doktor' or 'Frau Doktor,' and using the wrong title or level of formality is a genuine social misstep. The arts — particularly classical music, opera, and theater — hold a status in Austrian culture that goes beyond entertainment into national identity. Vienna's Musikverein, Salzburg's Festival, and the Staatsoper are cultural temples. Austrian cuisine is hearty and specific: Wiener Schnitzel (must be veal, never pork, for the authentic version), Tafelspitz (boiled beef), Kaiserschmarrn (shredded pancake), and the legendary Sachertorte and Apfelstrudel.",
    highlights: [
      "Punctuality is expected and respected. Being even five minutes late without notice is considered rude in professional and social settings.",
      "Greetings: A firm handshake with direct eye contact is standard. 'Grüß Gott' is the universal formal greeting (literally 'God greet you'). 'Servus' is informal and used among friends.",
      "Cash is king. Austria is one of the most cash-reliant countries in Western Europe. Many restaurants, Heurigen (wine taverns), and smaller shops do not accept cards.",
      "Sundays and quiet hours (Ruhezeiten) are strictly observed. No loud activities, no mowing, no drilling. Between 10 PM and 6 AM, noise must be minimal. Apartment buildings often have specific house rules (Hausordnung) posted in the entrance.",
      "Toasting etiquette: Always make eye contact when clinking glasses and say 'Prost' (beer) or 'Zum Wohl' (wine). Failing to make eye contact is considered bad luck and bad manners."
    ]
  },
  transportationMobility: "Austria has excellent public transportation. Vienna's Wiener Linien network includes 5 U-Bahn (metro) lines, 29 tram lines, and over 100 bus routes, running from approximately 5 AM to midnight (24-hour service on weekends). The annual Klimaticket Österreich (EUR 1,095 in 2024) provides unlimited travel on all public transport across the entire country — trains, trams, buses, and metros — and is one of Europe's best-value transit passes. ÖBB (Austrian Federal Railways) operates a punctual and comprehensive rail network connecting all major cities: Vienna to Salzburg takes 2.5 hours, Vienna to Graz 2.5 hours, and Vienna to Innsbruck 4.5 hours. Car ownership is unnecessary in Vienna and manageable in other cities. Cycling infrastructure is excellent, particularly in Vienna (Citybike sharing), Graz, and Salzburg. In winter, road conditions in alpine areas require winter tires (mandatory from November 1 to April 15) and sometimes snow chains.",
  internationalConnectivity: "Vienna International Airport (VIE) is a major Central European hub with direct flights across Europe, the Middle East, Asia, and North America via Austrian Airlines (Star Alliance), Ryanair, Wizz Air, and numerous international carriers. Salzburg Airport (SZG) handles seasonal ski traffic and regional European flights. Innsbruck and Graz have smaller airports with limited scheduled services. Austria's central location makes it a crossroads of European rail travel: direct trains to Munich (4 hours), Budapest (2.5 hours), Prague (4 hours), Zurich (8 hours), Venice (7.5 hours via Nightjet), and Berlin (overnight Nightjet). The ÖBB Nightjet sleeper service is particularly popular for sustainable long-distance travel.",
  travelExploration: "Austria packs extraordinary diversity into a small country. The Alps dominate the western half, with world-renowned ski resorts (Kitzbühel, St. Anton, Lech-Zürs, Ischgl) and summer hiking destinations. The Wachau Valley along the Danube (UNESCO) offers wine, apricots, and baroque abbeys (Melk, Göttweig). Salzburg — Mozart's birthplace — combines baroque architecture with the Sound of Music legacy. The Salzkammergut lake district (Hallstatt, Wolfgangsee, Traunsee) is stunningly picturesque. Graz's old town is UNESCO-listed and boasts a vibrant culinary scene. The Neusiedler See region (Burgenland) offers flat cycling, birdwatching, and excellent Pannonian wines. Day trips from Vienna to Bratislava (1 hour by train), Budapest (2.5 hours), or the Semmering railway (UNESCO, the world's first mountain railway) are easy weekend escapes.",
  considerations: [
    "Smoking Culture: Smoking rates in Austria remain higher than in many Western European countries. While smoking is banned inside restaurants and bars (since 2019), outdoor terraces and public spaces can still be smoky. Enforcement varies.",
    "Customer Service Style: Viennese waiters are famously brusque — the 'Wiener Grant' (Viennese grumpiness) is considered a cultural institution, not a personal slight. Service in restaurants is purposefully unhurried. Flag your waiter down to pay; they will not bring the bill unsolicited.",
    "Grocery Store Hours: Most supermarkets close by 7:30-8:00 PM on weekdays, close early on Saturday, and are completely closed on Sundays and public holidays. There are 13 public holidays in Austria. Plan your grocery shopping accordingly.",
    "Kirchenbeitrag (Church Tax): If you are registered as Catholic, Protestant, or a member of certain other recognized religious communities, you are legally required to pay a church tax of approximately 1.1% of your income. This is automatically collected. To stop it, you must formally deregister from the church (Kirchenaustritt).",
    "Nostrification of Degrees: Foreign academic degrees may need to be formally recognized (nostrifiziert) for professional use in Austria. This process can take months and may require additional examinations. Plan ahead if your career depends on degree recognition."
  ],
  mistakes: [
    "Jaywalking. Crossing the street on a red light will draw sharp looks and sometimes verbal reprimands from other pedestrians, even if no cars are visible. Austrians follow pedestrian signals strictly.",
    "Toasting without eye contact. When clinking glasses, you must look the other person directly in the eyes and say 'Prost' or 'Zum Wohl.' Failing to do so is considered to bring seven years of bad luck (and bad manners).",
    "Dismissing Austrian tap water. Austrian tap water comes from alpine springs and is among the highest quality in the world. Ordering bottled water in restaurants is fine, but there is no reason to avoid the tap at home.",
    "Assuming standard German (Hochdeutsch) is sufficient. The Austrian dialect can be dramatically different — everyday words, pronunciation, and expressions differ from German German. 'Erdäpfel' (potato), 'Sackerl' (bag), 'Jause' (snack) are Austrian, not German. Learning some Austrian vocabulary shows respect and aids daily life.",
    "Neglecting the 3rd pillar pension. Austria's three-pillar pension system includes a voluntary private pillar that offers significant tax advantages. Many newcomers fail to set this up, missing years of tax-efficient retirement savings."
  ],
  emergency: [
    {
      number: '112',
      service: 'European Emergency Number',
      description: 'Unified European emergency number connecting to police, fire, and ambulance services. Available throughout Austria.'
    },
    {
      number: '133',
      service: 'Police (Polizei)',
      description: 'Direct line to Austrian police for crimes, accidents, and non-medical emergencies.'
    },
    {
      number: '144',
      service: 'Ambulance (Rettung)',
      description: 'Emergency medical services and ambulance dispatch. Available 24/7 nationwide.'
    }
  ],
  sources: [
    {
      name: 'Migration.gv.at',
      category: 'Immigration & Residence',
      description: 'Official Austrian government portal for immigration information, residence permits, Red-White-Red Card applications, and work authorization.',
      link: 'https://www.migration.gv.at/en/'
    },
    {
      name: 'Oesterreich.gv.at',
      category: 'Government Services',
      description: 'Comprehensive digital guide to Austrian authorities, administrative processes, registration, and citizen services.',
      link: 'https://www.oesterreich.gv.at/en/'
    },
    {
      name: 'City of Vienna (Wien.gv.at)',
      category: 'City Services',
      description: 'Information for residents of Vienna including registration, housing, education, and newcomer integration programs.',
      link: 'https://www.wien.gv.at/english/'
    },
    {
      name: 'AMS (Arbeitsmarktservice)',
      category: 'Employment',
      description: 'Austrian public employment service providing job listings, career guidance, and labor market information.',
      link: 'https://www.ams.at/'
    }
  ],
  embassies: {
    description: 'For consular assistance, residency matters, and official guidance related to Austria, consult the Austrian Federal Ministry for European and International Affairs (BMEIA) or an Austrian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/austria',
    mfaLink: 'https://www.bmeia.gv.at/en/'
  },
  serviceDirectory: {
    title: "Service Directory - Austria",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Austria.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for residence permits, Red-White-Red Card applications, EU Blue Card, work visas, and immigration compliance.",
        providers: [
          { name: "Fragomen Austria", link: "https://www.fragomen.com" },
          { name: "Deloitte Legal Austria", link: "https://www2.deloitte.com/at" },
          { name: "Wolf Theiss", link: "https://www.wolftheiss.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies assisting with long-term rentals, residential property purchases, and relocation housing across Austrian cities.",
        providers: [
          { name: "Engel & Völkers Austria", link: "https://www.engelvoelkers.com/at" },
          { name: "EHL Immobilien", link: "https://www.ehl.at" },
          { name: "BUWOG", link: "https://www.buwog.at" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Austrian tax residency, payroll, Kollektivvertrag implications, cross-border income, and 3rd pillar pension optimization.",
        providers: [
          { name: "PwC Austria", link: "https://www.pwc.at" },
          { name: "EY Austria", link: "https://www.ey.com/de_at" },
          { name: "KPMG Austria", link: "https://kpmg.com/at" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including packing, shipping, customs handling, and destination support.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Austria", link: "https://www.agsmovers.com" },
          { name: "Gebrüder Weiss", link: "https://www.gw-world.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "German language courses and integration programs for newcomers, from beginner to ÖIF certification preparation.",
        providers: [
          { name: "Volkshochschule (VHS Wien)", link: "https://www.vhs.at" },
          { name: "DeutschAkademie", link: "https://www.deutschakademie.de" },
          { name: "ActiLingua Academy", link: "https://www.actilingua.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Public health insurance fund and private healthcare providers commonly used by residents in Austria.",
        providers: [
          { name: "ÖGK (Austrian Health Insurance Fund)", link: "https://www.gesundheitskasse.at" },
          { name: "Wiener Privatklinik", link: "https://www.wiener-privatklinik.com" },
          { name: "Privatklinik Döbling", link: "https://www.privatklinik-doebling.at" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Public employment services and recruitment firms connecting talent with Austrian employers.",
        providers: [
          { name: "AMS (Public Employment Service)", link: "https://www.ams.at" },
          { name: "Hays Austria", link: "https://www.hays.at" },
          { name: "Michael Page Austria", link: "https://www.michaelpage.at" }
        ]
      }
    ]
  }
};
