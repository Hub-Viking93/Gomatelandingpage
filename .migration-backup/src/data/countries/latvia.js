export const latvia = {
  id: 'latvia',
  slug: 'latvia',
  name: 'Latvia',
  region: 'Europe',
  complexity: 'Medium',
  languages: ['Latvian', 'Russian', 'English'],
  shortDescription: 'A green land of forests, Art Nouveau architecture, and quiet beaches.',
  heroImage: 'https://images.unsplash.com/photo-1522054541898-adc6abd570e5?',
  flagAlt: 'Flag of Latvia',
  atAGlance: "Latvia is the middle Baltic state, wedged between Estonia and Lithuania, with a coastline on the chilly Baltic Sea and an interior that is more than half covered in forest. Riga, the capital, is the largest city in the entire Baltic region, famous for its extraordinary collection of over 800 Art Nouveau buildings, a medieval Old Town that is a UNESCO World Heritage Site, and a nightlife scene that punches well above its weight. Outside Riga, the country transforms into a landscape of birch forests, peat bogs, quiet rivers, and wide sandy beaches along the Gulf of Riga. Life here is seasonal and nature-driven: summers are luminous with nearly 18 hours of daylight and everyone flocks to the countryside, while winters are dark, cold, and introspective. The cost of living is significantly lower than in Scandinavia or Western Europe, attracting remote workers, startup founders, and those seeking an affordable European base. Latvians are famously reserved in public — do not expect small talk with strangers — but form deep, loyal friendships once trust is established. The bureaucracy for non-EU nationals is rigid and requires patience, but the country's EU and Schengen membership provides valuable freedom of movement. Internet infrastructure is world-class, with Latvia consistently ranking among the top countries globally for fiber broadband penetration and speed. For newcomers, the biggest adjustments are the harsh winters, the quiet social culture, and navigating a system where Latvian language skills are increasingly expected for long-term integration.",
  overview: {
    euStatus: 'EU Member',
    stayLength: 'Up to 90 days (Schengen)',
    costOfLiving: 'Low-Medium',
    primaryLanguages: 'Latvian, Russian, English',
  },
  visas: [
    {
      name: 'Long Stay Visa (Type D)',
      targetAudience: 'Remote workers, Digital nomads',
      useCase: 'Allows stays of up to one year for remote workers, students, or those with a specific purpose in Latvia. For digital nomads, proof of remote employment and a minimum monthly income of approximately EUR 3,000 is required. The visa is processed through Latvian embassies abroad and can be converted to a temporary residence permit.',
      duration: 'Up to 1 year',
      link: 'https://www.pmlp.gov.lv/en/visa'
    },
    {
      name: 'Temporary Residence Permit (Employment)',
      targetAudience: 'Employed professionals',
      useCase: 'For non-EU nationals with a confirmed job offer from a Latvian employer. The employer must demonstrate that the position could not be filled by an EU citizen. The permit is tied to the specific employer and role. Processing typically takes 30 working days through the Office of Citizenship and Migration Affairs (PMLP).',
      duration: 'Up to 5 years, renewable',
      link: 'https://www.pmlp.gov.lv/en/temporary-residence-permits'
    },
    {
      name: 'EU Blue Card',
      targetAudience: 'Highly qualified professionals',
      useCase: 'For non-EU professionals with a university degree and a job offer with a salary at least 1.5 times the average gross annual salary in Latvia. Provides faster processing, family reunification rights, and the ability to move to other EU countries after 18 months.',
      duration: 'Up to 4 years',
      link: 'https://www.pmlp.gov.lv/en/eu-blue-card'
    },
    {
      name: 'Investment Residence Permit',
      targetAudience: 'Investors, Property buyers',
      useCase: 'Residency through real estate investment (minimum EUR 250,000 in Riga or EUR 50,000 outside Riga) or share capital investment (minimum EUR 50,000 plus annual tax payments of at least EUR 40,000). This program has been significantly tightened since its introduction and conditions change periodically.',
      duration: 'Up to 5 years, renewable',
      link: 'https://www.pmlp.gov.lv/en/share-capital-investor-0'
    },
    {
      name: 'Startup Visa',
      targetAudience: 'Founders, Entrepreneurs',
      useCase: 'For teams of up to five founders with an innovative business idea. The startup must be approved by a designated expert committee. The visa provides a temporary residence permit and the right to establish a company in Latvia. Latvia\'s startup ecosystem is small but growing, with Riga as the hub.',
      duration: 'Up to 3 years',
      link: 'https://www.pmlp.gov.lv/en/start-founders'
    }
  ],
  requirements: [
    {
      title: 'Personal Code (Personas Kods)',
      explanation: 'An 11-digit unique identification number assigned to every registered resident of Latvia. The format includes your date of birth followed by a sequence number. It is printed on your residence permit card and all official documents.',
      importance: 'The Personal Code is the key to accessing nearly every service in Latvia. You need it to register with the State Revenue Service for taxes, open a bank account, sign a mobile phone contract, register with a family doctor, and access all government e-services. It is requested constantly in daily administrative life and is the first thing any institution will ask for.',
      link: 'https://www.pmlp.gov.lv/en'
    },
    {
      title: 'eID Card and eParaksts (Digital Signature)',
      explanation: 'Latvia issues an electronic identity card to residents that contains a qualified digital signature (eParaksts). This allows you to sign documents, authenticate with government portals, submit tax declarations, and access e-services remotely with full legal validity.',
      importance: 'The eParaksts digital signature is essential for interacting with Latvian government services online. Tax declarations, company registration, and many banking operations require it. Without it, you will need to visit offices in person for tasks that could otherwise be done from your computer. Getting the eID activated involves a visit to a PMLP service center.',
      link: 'https://www.eparaksts.lv/en/'
    },
    {
      title: 'Health Insurance Registration',
      explanation: 'Temporary residents usually need private health insurance covering at least EUR 42,000 in medical costs. Permanent residents and those paying social contributions through employment are eligible for the state-funded healthcare system managed by the National Health Service (NVD).',
      importance: 'Health insurance is a mandatory requirement for residence permit applications and renewals. If you are employed and paying social contributions, you gain access to the state system, but coverage can be limited with long waiting times for specialists. Many residents maintain supplementary private insurance through companies like BALTA or Compensa for faster access to care.',
      link: 'https://www.vmnvd.gov.lv/en'
    },
    {
      title: 'Address Registration (Deklaretaja Dzivesvieta)',
      explanation: 'All residents must declare their place of residence with the local municipality or through the Latvija.lv portal. Changing your address requires re-registration within 30 days.',
      importance: 'Your declared address determines which municipality provides your public services, where you vote, and where official correspondence is sent. It is also required for residence permit renewals, school enrollment, and accessing local healthcare. Failure to declare your address can result in fines and complications with your residence status.',
      link: 'https://www.latvija.lv/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Latvia's job market is concentrated in Riga, where international companies, shared service centers (Accenture, Tele2, Luminor Bank), and a growing tech sector provide the most accessible opportunities for foreigners. IT, fintech, logistics, and business services are the strongest sectors. Outside Riga, opportunities drop sharply, and Latvian language skills become essential.",
    whereToLook: [
      "CV.lv (largest Latvian job portal)",
      "CV-Online Latvia",
      "LinkedIn",
      "MeetFrank (popular in Baltics for tech roles)",
      "Prakse.lv (internships and entry-level)"
    ],
    realityChecks: [
      "English is sufficient in many international and tech roles in Riga, but Latvian is increasingly expected for long-term integration and non-international positions.",
      "Salaries are significantly lower than in Scandinavia or Western Europe, though the gap has been narrowing steadily. Average gross monthly salary in Riga is approximately EUR 1,800-2,200.",
      "The social tax burden is high: employers pay 23.59% on top of your gross salary, and employees contribute 10.5%. This means take-home pay can be noticeably lower than gross figures suggest.",
      "Professional opportunities diminish rapidly outside Riga and the larger cities of Daugavpils, Liepaja, and Jelgava. Remote work is the most practical solution for those wanting to live outside the capital."
    ]
  },
  salaryReality: {
    overview:
      "Salaries in Latvia are moderate by EU standards but offer reasonable purchasing power given the lower cost of living. The average gross monthly salary is around EUR 1,700 nationally, rising to EUR 2,000+ in Riga. IT and finance professionals can earn significantly above average. Latvia uses a progressive income tax system with rates of 20%, 23%, and 31% depending on income level.",
    realityChecks: [
      "Net salary is substantially lower than gross due to combined employer and employee social contributions plus progressive income tax. Always calculate your net take-home pay before accepting an offer.",
      "Many employers offer limited benefits beyond the statutory minimum. Supplementary health insurance, gym memberships, and flexible working are becoming more common in international companies but are not universal.",
      "Heating costs during winter (October through April) can be substantial, especially in older buildings without modern insulation. Budget EUR 100-200 per month for heating a standard apartment.",
      "Food and dining costs have risen significantly but remain well below Western European levels. A meal at a mid-range restaurant in Riga costs EUR 15-25 per person."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The gap between gross and net salary after progressive income tax and social contributions (combined employee burden around 30%+)",
      "Heating and utility costs, which can double during the winter months",
      "The need for supplementary private health insurance for faster specialist access",
      "Transportation costs if living outside central Riga (car ownership, fuel, or public transport season passes)"
    ]
  },
  housingSystem: {
    overview:
      "Riga has a well-supplied rental market with options ranging from renovated apartments in the Art Nouveau district of the Quiet Center (Klusais centrs) to modern developments in Skanste and Agenskalns across the Daugava river. Popular expat neighborhoods include the Old Town (Vecriga) for its charm, the Quiet Center for its elegance, Teika for its residential calm, and Mezaparks for its proximity to the forest and lake. Rents in Riga are affordable by European standards: a modern one-bedroom apartment in the center costs EUR 500-800 per month.",
    expectations:
      "Start your search on SS.com (Latvia's main classifieds site, in Latvian but navigable), City24.lv, and local Facebook groups for expat housing. Most landlords expect a one-month deposit and one month's rent in advance. Leases are typically for one year. Always verify that utilities (heating, water, electricity, internet) are clearly specified in the contract — some are included in rent, others billed separately. Older Soviet-era buildings may have central heating controlled by the building management, meaning you cannot adjust your own temperature. Newer buildings offer individual controls and are significantly more energy-efficient."
  },
  healthcareReality:
    "Latvia has a public healthcare system funded through social contributions, managed by the National Health Service (NVD). Residents paying social taxes are entitled to state-funded care, but the system is underfunded relative to demand, resulting in long waiting times for specialists — sometimes weeks or months. Family doctors (gimenes arsts) serve as gatekeepers for specialist referrals. Major public hospitals include Pauls Stradins Clinical University Hospital and Riga East Clinical University Hospital. Most expats and higher-income residents supplement the public system with private healthcare from providers like ARS Medical, Veselibas centrs 4 (VC4), or Premium Medical, where consultations cost EUR 40-80 and wait times are typically days rather than weeks. Emergency care at public hospitals is available to all residents regardless of insurance status. Pharmacies (aptiekas) are widespread, with Meness Aptieka and BENU being the largest chains.",
  digitalLife: {
    overview:
      "Latvia is one of the most digitally advanced countries in Europe, consistently ranking in the top tier for internet speeds and fiber broadband coverage. The Latvija.lv government portal provides access to most public services online, and the eParaksts digital signature system gives documents signed electronically full legal validity. Cashless payments are accepted virtually everywhere, including market stalls.",
    essentials: [
      "eParaksts (digital signature for government services and legal documents)",
      "Latvija.lv (e-government portal for tax, address, and document services)",
      "Mobilly (parking and public transport payment app)",
      "Wolt or Bolt Food (food delivery in Riga)"
    ],
    whatSurprisesNewcomers: [
      "Internet speeds are genuinely excellent — Latvia has one of the highest fiber-to-the-home penetration rates in the world, and 1 Gbps connections are common and affordable.",
      "The eParaksts digital signature system works well and is widely accepted, but setting it up requires an in-person visit to a PMLP office with your eID card.",
      "Contactless payment is accepted almost everywhere, even at small market stands and kiosks. Carrying cash is largely unnecessary in Riga.",
      "Many official documents and communications from government agencies arrive only in Latvian, so having a translation tool or Latvian-speaking contact is practical."
    ]
  },
  culture: {
    text: 'Latvians are often described as Northern European in temperament: reserved, private, and understated in public, but deeply warm and generous once a personal connection is established. The national character is shaped by centuries of foreign occupation (German, Swedish, Russian) and hard-won independence, which makes sovereignty and national identity deeply felt topics. Nature is sacred — Latvians have an almost spiritual relationship with their forests, and mushroom picking and berry foraging in autumn are genuine national pastimes, not tourism gimmicks. The Song and Dance Festival, held every five years, is a massive gathering of choirs and folk dancers that is listed as a UNESCO Masterpiece of Oral and Intangible Heritage. Social life revolves around close friend groups, seasonal celebrations, and the countryside. Latvians drink good coffee (specialty cafes are everywhere in Riga), appreciate good bread (especially dark rye sourdough), and take their sauna (pirts) traditions seriously.',
    highlights: [
      'Midsummer (Jani) on June 23-24 is the most important holiday — celebrated with bonfires, oak leaf wreaths, special Jani cheese with caraway seeds, beer, and staying up all night. Missing it is nearly unforgivable.',
      'Always give an odd number of flowers as gifts. Even numbers are strictly reserved for funerals and will cause genuine discomfort if given on a happy occasion.',
      'Remove your shoes when entering someone\'s home. Hosts typically provide guest slippers (viesu capas). Walking around in outdoor shoes indoors is considered very rude.',
      'Latvian names are distinctive: men\'s names almost always end in "s" or "is" (Janis, Andris, Martins), and women\'s names end in "a" or "e" (Anna, Ilze, Maija).',
      'Do not confuse Latvia with Lithuania or, worse, refer to the country as part of Russia. Latvians are proud of their independence and distinct identity. The Soviet period is a sensitive topic best approached with respect and awareness.'
    ]
  },
  transportationMobility:
    "Riga has a well-functioning public transport network of trams, buses, and trolleybuses operated by Rigas Satiksme. The system covers the city thoroughly and runs from approximately 5:30 AM to midnight. An electronic ticket (e-talons) is mandatory — paper tickets are more expensive and purchased from the driver. A monthly pass costs around EUR 30. The Riga-Jurmala train is popular for weekend beach trips during summer. Intercity travel is served by Pasazieru vilciens (state railway) connecting Riga to Sigulda, Cesis, Daugavpils, Liepaja, and Jelgava, though trains are slower than buses for many routes. Lux Express and FlixBus operate modern intercity coaches. Cycling infrastructure in Riga has improved significantly, with dedicated bike lanes expanding across the city. Bolt (ride-hailing) is ubiquitous and affordable. For those who drive, winter tires are mandatory from December 1 through March 1, and pedestrians must wear reflective strips after dark — this is enforced by police.",
  internationalConnectivity:
    "Riga International Airport (RIX) is the largest airport in the Baltic states, serving as the hub for airBaltic, which offers direct flights to over 70 European destinations plus select routes to the Middle East and Central Asia. Low-cost carriers including Ryanair and Wizz Air also operate from Riga. Flight times to London are approximately 2.5 hours, to Berlin 1.5 hours, and to Stockholm 1 hour. The airport is located about 10 km from the city center, reachable by bus (line 22) in about 30 minutes. Ferry connections from Riga to Stockholm are operated by Tallink, offering an overnight crossing that is popular for weekend trips. Riga also serves as a transit point between Western Europe and the Baltics/Nordics.",
  travelExploration:
    "Latvia is compact enough that any point in the country is reachable within four hours by car from Riga. The Gauja National Park near Sigulda offers hiking, bobsled runs, and the Turaida Castle. Jurmala, just 25 km west of Riga, is a Baltic Sea resort town with wooden Art Nouveau architecture and wide sandy beaches. The Kurzeme coast (western Latvia) features dramatic cliffs at Jorkalni and remote, wind-swept beaches. Cape Kolka at the tip of the Kurzeme peninsula marks where the Baltic Sea meets the Gulf of Riga — a wild, beautiful spot. Cesis is a charming medieval town with a castle ruin and excellent craft beer scene. Kuldiga features a 250-meter-wide natural waterfall (Ventas Rumba) and is often called Latvia's most beautiful small town. For cross-border trips, Tallinn (Estonia) is four hours north, Vilnius (Lithuania) is four hours south, and both make excellent weekend destinations.",
  considerations: [
    'Winter Darkness: From late November through February, daylight lasts only 6-8 hours. Grey, overcast skies are common for weeks. Seasonal affective disorder is real — many locals take vitamin D supplements and use daylight lamps. If you struggle with dark winters, this will be your biggest challenge.',
    'Language Barrier: Latvian is the sole official language, and government services, legal documents, and many daily interactions default to Latvian. Russian is widely spoken (about 30% of the population) but is politically sensitive. English is common among younger people in Riga but rare in rural areas and older demographics.',
    'Alcohol Regulations: Off-license alcohol sales are prohibited between 10 PM and 8 AM. This is strictly enforced at supermarkets and convenience stores. Bars and restaurants serve alcohol during their normal operating hours.',
    'Reflective Safety Strips: Pedestrians are legally required to wear reflective strips (atstarotaji) when walking near roads after dark outside of lit areas. Police issue fines for non-compliance, and given how dark winters get, this is a genuine safety measure.',
    'Russian-Latvian Social Dynamics: Latvia has a significant Russian-speaking minority (about 25% of the population). The relationship between the two communities is complex and historically charged. Avoid making assumptions or taking sides in conversations about language politics, minority rights, or the Soviet period.'
  ],
  mistakes: [
    'Smiling at strangers on the street or in public transport. Latvians interpret unsolicited smiling from strangers as suspicious or insincere. It does not make you friendly — it makes you seem odd. Save warmth for people you know.',
    'Calling Latvia part of Russia or referring to the Baltic states as interchangeable. Latvia regained independence in 1991 after 50 years of Soviet occupation, and national sovereignty is a deeply emotional subject. Mixing up Latvia, Lithuania, and Estonia is a surefire way to offend.',
    'Wearing shoes indoors in someone\'s home. Always remove your shoes at the door. Hosts will typically offer you guest slippers. Walking around in outdoor shoes is considered genuinely rude.',
    'Buying an even number of flowers for a celebration, birthday, or date. Even numbers are exclusively for funerals. This is not a minor cultural preference — it is a deeply ingrained rule that will cause real awkwardness if violated.',
    'Underestimating winter preparation. If you are driving, winter tires are legally mandatory and essential. If you are walking, invest in proper insulated waterproof boots and warm layers. Riga sidewalks can be icy and treacherous from November through March.'
  ],
  emergency: [
    {
      number: '112',
      service: 'General Emergency (EU Standard)',
      description: 'Unified emergency number connecting to fire, rescue, and coordinating all emergency services. Operators speak Latvian and English.'
    },
    {
      number: '110',
      service: 'State Police',
      description: 'Direct line to the Latvian State Police for crime reporting and non-fire emergencies.'
    },
    {
      number: '113',
      service: 'Emergency Medical Service (Ambulance)',
      description: 'Direct ambulance dispatch. For life-threatening medical emergencies.'
    }
  ],
  sources: [
    {
      name: 'PMLP (Office of Citizenship and Migration Affairs)',
      category: 'Immigration & Residency',
      description: 'Authority managing residence permits, visa applications, citizenship, and personal identity documents for foreign nationals.',
      link: 'https://www.pmlp.gov.lv/en'
    },
    {
      name: 'Latvija.lv (e-Government Portal)',
      category: 'Government Services',
      description: 'Central portal for all Latvian e-services including tax declarations, address registration, and document submissions.',
      link: 'https://www.latvija.lv/'
    },
    {
      name: 'LIAA (Investment and Development Agency of Latvia)',
      category: 'Business & Investment',
      description: 'Promotes foreign investment, supports business setup, and manages the startup visa program.',
      link: 'https://www.liaa.gov.lv/en'
    },
    {
      name: 'Latvia.travel',
      category: 'Tourism & Culture',
      description: 'Official tourism portal with guides to attractions, events, nature, and cultural experiences across Latvia.',
      link: 'https://www.latvia.travel/en'
    }
  ],
  embassies: {
    description: 'For consular assistance, visa and residency matters, and official guidance related to Latvia, consult the Latvian Ministry of Foreign Affairs or a Latvian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/latvia',
    mfaLink: 'https://www.mfa.gov.lv/en'
  },
  serviceDirectory: {
    title: "Service Directory - Latvia",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Latvia.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal assistance for residence permits, work visas, EU Blue Card applications, and immigration appeals.",
        providers: [
          { name: "Sorainen Latvia", link: "https://www.sorainen.com" },
          { name: "COBALT Latvia", link: "https://www.cobalt.legal" },
          { name: "Ellex Klavins", link: "https://ellex.legal" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Professionals handling residential rentals and property purchases in Riga and surrounding areas.",
        providers: [
          { name: "Latio", link: "https://www.latio.lv" },
          { name: "Arco Real Estate", link: "https://www.arcorealestate.lv" },
          { name: "Ober-Haus Latvia", link: "https://www.ober-haus.lv" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Latvian income tax, social contributions, residency rules, and business compliance.",
        providers: [
          { name: "PwC Latvia", link: "https://www.pwc.com/lv" },
          { name: "Deloitte Latvia", link: "https://www2.deloitte.com/lv" },
          { name: "KPMG Latvia", link: "https://home.kpmg/lv/en/home.html" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and regional relocation services for household goods and personal belongings.",
        providers: [
          { name: "Crown Relocations Baltic", link: "https://www.crownrelo.com" },
          { name: "Gosselin Group Baltics", link: "https://www.gosselingroup.eu" },
          { name: "DB Schenker Latvia", link: "https://www.dbschenker.com/lv-en" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Latvian language courses and cultural integration programs for newcomers.",
        providers: [
          { name: "Latvian Language Agency (Latviesu valodas agentura)", link: "https://www.valoda.lv" },
          { name: "Baltic Media Language Centre", link: "https://www.balticmedia.com" },
          { name: "University of Latvia - Latvian Language Courses", link: "https://www.lu.lv" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major hospitals, clinics, and healthcare groups serving residents and expats.",
        providers: [
          { name: "ARS Medical Company", link: "https://arsmed.lv" },
          { name: "Veselibas centrs 4 (VC4)", link: "https://vc4.lv" },
          { name: "Premium Medical", link: "https://www.premiummedical.lv" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment platforms and agencies connecting local and international talent with Latvian employers.",
        providers: [
          { name: "CV.lv", link: "https://www.cv.lv" },
          { name: "CV-Online Latvia", link: "https://www.cvonline.lv" },
          { name: "WorkingDay Latvia", link: "https://www.workingday.lv" }
        ]
      }
    ]
  }
};
