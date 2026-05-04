export const bulgaria = {
  id: 'bulgaria',
  slug: 'bulgaria',
  name: 'Bulgaria',
  region: 'Europe',
  complexity: 'Low',
  languages: ['Bulgarian'],
  shortDescription: 'The cheapest country in the EU with great ski resorts and sunny beaches.',
  heroImage: 'https://images.unsplash.com/photo-1565099824688-e93eb20fe622',
  flagAlt: 'Flag of Bulgaria',
  atAGlance: "Bulgaria is the EU's most affordable member state, attracting a growing community of digital nomads, freelancers, retirees, and small business owners drawn by the flat 10% income tax rate, low cost of living, and EU membership benefits. Sofia, the capital, is a laid-back city of 1.3 million where Roman ruins emerge in metro stations, the Vitosha mountain looms over the skyline, and a cappuccino costs under EUR 2. Bansko, a ski resort town in the Pirin Mountains, has become one of Europe's largest digital nomad hubs, with coworking spaces, fast internet, and a tight-knit international community. The Black Sea coast (Varna, Burgas) offers affordable summer beach living. Bulgaria joined the Schengen area for air and sea borders in 2024, though land border checks remain. The country uses the Bulgarian Lev (BGN), which is pegged to the Euro at a fixed rate of 1.95583 BGN per EUR, effectively eliminating currency risk for Euro earners. Daily life is straightforward and affordable, but the social culture can be blunt by Western standards, government bureaucracy is slow and often requires in-person visits, and the language barrier is real: Bulgarian uses the Cyrillic alphabet (which Bulgaria actually invented) and has limited English penetration outside Sofia's tech and business communities. For those seeking a low-cost, low-tax EU base with genuine mountain and beach access, Bulgaria offers exceptional value.",

  overview: {
    euStatus: 'EU Member',
    stayLength: '90 days (Schengen rules apply)',
    costOfLiving: 'Very Low',
    primaryLanguages: 'Bulgarian',
  },
  visas: [
    {
      name: 'Freelancer Visa (Type D Long-Stay)',
      targetAudience: 'Remote workers, freelancers',
      useCase: 'For non-EU citizens wishing to reside and work remotely in Bulgaria. Requires a detailed plan of activities, proof of income or savings, health insurance, and approval from the Ministry of Labour. Can lead to a temporary residence permit upon arrival.',
      duration: 'Up to 1 year (leads to residence permit)',
      link: 'https://www.mfa.bg/en/services-travel/consular-services/visa-regime-and-bulgarian-visas'
    },
    {
      name: 'Trade Representative Office (TRO)',
      targetAudience: 'Business owners, entrepreneurs',
      useCase: 'A popular route for non-EU nationals. You register as the representative of a foreign company in Bulgaria through the Bulgarian Chamber of Commerce. No requirement to employ local staff. Grants a one-year residence permit renewable annually. Many digital nomads and freelancers use this structure.',
      duration: '1 year (renewable indefinitely)',
      link: 'https://www.bcci.bg/'
    },
    {
      name: 'Pensioner Visa',
      targetAudience: 'Retirees with pension income',
      useCase: 'For retirees with proof of stable pension income and a Bulgarian bank account showing sufficient funds. The requirements are relatively simple compared to other EU countries, making Bulgaria attractive for budget-conscious retirees.',
      duration: '1 year (renewable)',
      link: 'https://www.mfa.bg/en/services-travel/consular-services/visa-regime-and-bulgarian-visas'
    },
    {
      name: 'Schengen Visa (Type C)',
      targetAudience: 'Tourists, short-stay visitors',
      useCase: 'For short visits up to 90 days within a 180-day period. Bulgaria joined the Schengen area for air and sea borders in March 2024; land border checks may still apply during the transition period.',
      duration: 'Up to 90 days',
      link: 'https://www.mfa.bg/en/services-travel/consular-services/visa-regime-and-bulgarian-visas'
    },
    {
      name: 'EU Blue Card (Bulgaria)',
      targetAudience: 'Highly qualified professionals',
      useCase: 'For non-EU citizens with a higher education degree and a job offer paying at least 1.5 times the average gross salary. Includes family reunification rights and a path to permanent residency after 5 years of continuous residence.',
      duration: 'Up to 4 years',
      link: 'https://www.mfa.bg/en/services-travel/consular-services/visa-regime-and-bulgarian-visas'
    }
  ],
  requirements: [
    {
      title: 'EGN (Edinen Grazhdanski Nomer) / Personal Number',
      explanation: 'A 10-digit unique personal identification number issued to all Bulgarian residents and citizens. For foreign residents, a similar number (LNCh - Lichen Nomer na Chuzhdenets) is issued upon registration with the migration authorities.',
      importance: 'The EGN or LNCh is required for tax registration, opening a bank account, signing employment contracts, healthcare enrollment, and virtually all administrative interactions. It is the equivalent of a national ID number and is requested constantly.',
      link: 'https://www.mvr.bg/en'
    },
    {
      title: 'Residence Card (Lichna Karta)',
      explanation: 'A physical ID card issued by the Migration Directorate (part of the Ministry of Interior) upon approval of your residence permit. Contains your photo, personal number, and residence status.',
      importance: 'You must carry your residence card (or passport) at all times in Bulgaria. It is your primary identification document and is required for all official transactions, travel within the EU (in combination with your passport), and interactions with authorities.',
      link: 'https://www.mvr.bg/en'
    },
    {
      title: 'Address Registration (Police Registration)',
      explanation: 'All foreign nationals must register their address with the local police station within 5 business days of arrival if staying in private accommodation. Hotels and registered guesthouses handle this automatically.',
      importance: 'Failure to register within the deadline can result in fines and complications with your residence permit application. Your landlord must accompany you to the police station or provide a notarized declaration of accommodation. Keep the registration receipt.',
      link: 'https://www.mvr.bg/en'
    },
    {
      title: 'Health Insurance',
      explanation: 'Proof of valid health insurance is mandatory for all residence permit applications. Options include enrollment in the Bulgarian National Health Insurance Fund (NHIF/NZOK) through employment or self-employment, or private health insurance from a Bulgarian-registered provider.',
      importance: 'Without valid health insurance, your residence permit application will be rejected. If you are employed, your employer enrolls you in NHIF automatically. Self-employed individuals and freelancers must arrange their own coverage. Private insurance from companies like DZI, Bulstrad, or Allianz Bulgaria is widely used.',
      link: 'https://www.nhif.bg/'
    }
  ],
  jobsAndIncome: {
    overview:
      "Bulgaria has a growing economy with particular strength in IT, outsourcing (BPO/SSC), manufacturing, and tourism. Sofia's tech scene has expanded significantly, with companies like Telerik (Progress), Chaos Group, and numerous startups establishing the city as a genuine regional tech hub. The IT sector offers competitive salaries by local standards. Outside tech, the job market is smaller, and local salaries are the lowest in the EU.",
    whereToLook: [
      "Jobs.bg (dominant Bulgarian job board)",
      "Zaplata.bg (salary-focused job portal)",
      "LinkedIn (increasingly used for international and tech roles)",
      "Dev.bg (dedicated to IT jobs in Bulgaria)",
      "Remote platforms (Upwork, Toptal) for freelancers leveraging Bulgaria's low tax rate"
    ],
    realityChecks: [
      "IT salaries in Sofia are competitive (EUR 2,000-5,000+ net for experienced developers), but non-tech salaries are very low by EU standards.",
      "English is sufficient in tech and international companies; Bulgarian is required for virtually everything else.",
      "Many experienced professionals combine local employment or freelancing with the 10% flat tax rate, effectively keeping more of their income than in Western Europe.",
      "The informal economy still exists, though it is declining. Ensure any employment arrangement is properly documented for tax and residency purposes."
    ]
  },

  salaryReality: {
    overview:
      "Bulgarian salaries are the lowest in the EU in absolute terms, with an average gross salary of approximately BGN 2,100/month (EUR 1,075). However, the flat 10% income tax rate and low social contributions make the gap between gross and net smaller than in most EU countries. Combined with extremely low living costs, the effective purchasing power for locally employed professionals, especially in tech, is reasonable.",
    realityChecks: [
      "The flat 10% income tax rate is one of the lowest in Europe, making Bulgaria particularly attractive for freelancers and entrepreneurs.",
      "Social security contributions total approximately 32.7% of gross salary (split between employer at 18.92% and employee at 13.78%).",
      "The salary gap between Sofia and the rest of the country is enormous; provincial salaries can be 30-50% lower.",
      "Remote workers earning in EUR or USD while paying Bulgarian taxes and living costs have an extremely favorable financial position."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The favorable 10% flat tax rate that makes net-to-gross ratios better than in most EU countries",
      "Very low housing costs (a central Sofia apartment rents for EUR 400-700/month)",
      "Low cost of services: haircuts, restaurants, gym memberships, and domestic help are a fraction of Western European prices",
      "Limited unemployment benefits and weaker social safety net compared to Western EU member states"
    ]
  },

  housingSystem: {
    overview:
      "Bulgaria has a flexible, affordable, and largely informal rental market. In Sofia, popular areas include Lozenets (upscale, near the center), Mladost (modern, near Business Park Sofia), Oborishte (central, embassy area), and Studentski Grad (affordable, near universities). Bansko offers furnished apartments aimed at the digital nomad community from EUR 200-400/month. Varna and Burgas on the Black Sea coast provide affordable coastal living.",
    expectations:
      "Expect one-year rental contracts with one month's deposit. Furnished apartments are common, especially in Sofia and Bansko. Rental negotiations are often informal; prices on Imot.bg and OLX.bg are starting points. Always sign a written contract (even if the landlord resists) and confirm utility arrangements. Heating costs in winter can be significant in Sofia (district heating or electricity). Verify building condition carefully, as some older panel-block (panelka) apartments have been well-renovated while others have not."
  },

  healthcareReality:
    "Bulgaria has a mandatory public healthcare system funded through the National Health Insurance Fund (NZOK/NHIF). Public hospitals and clinics provide basic services, but quality and trust in the system vary widely; waiting times can be long, and facility standards in provincial hospitals lag behind Western Europe. Many residents and virtually all expatriates supplement with private healthcare. Acibadem City Clinic (Turkish-owned, modern facilities), Tokuda Hospital Sofia (Japanese-invested), and Pirogov Emergency Hospital (the main public trauma center) are the major hospital groups in Sofia. Private clinics offer English-speaking doctors, modern equipment, and short waiting times at costs that are still very affordable by EU standards (a specialist consultation typically costs BGN 60-100, approximately EUR 30-50). Pharmacies (apteki) are abundant, and many medications available only by prescription elsewhere can be purchased over the counter in Bulgaria.",

  digitalLife: {
    overview:
      "Bulgaria has solid internet infrastructure, with fiber optic coverage expanding in cities and mobile 4G/5G available nationwide. Sofia's tech scene means coworking spaces, fast WiFi cafes, and digital-first businesses are common. However, government digital services lag significantly behind Northern European standards.",
    essentials: [
      "A1, Yettel, or Vivacom mobile data plan (all offer good nationwide coverage)",
      "Qualified Electronic Signature (QES/KEP) for some online government and banking services",
      "DSK Bank, UniCredit Bulbank, or Revolut (widely used) for banking",
      "Epay.bg or EasyPay for bill payments and administrative services"
    ],
    whatSurprisesNewcomers: [
      "English is limited in public administration; government offices, post offices, and utility companies operate primarily in Bulgarian.",
      "Many bureaucratic processes still require physical presence with notarized documents, even when online systems theoretically exist.",
      "Cash is still commonly used in smaller shops, markets, and rural areas, though card acceptance is growing rapidly in Sofia.",
      "The Cyrillic alphabet applies to all signs, documents, and forms; learning to read it (it is phonetic and logical) dramatically improves daily navigation."
    ]
  },
  culture: {
    text: "Bulgarian culture is shaped by centuries of complex history (Thracian, Greek, Roman, Byzantine, Ottoman, and Soviet influences), a fierce national pride, and a pragmatic, sometimes fatalistic outlook on life. Bulgarians are resilient, resourceful, and deeply attached to family, tradition, and the land. The famous head-shake confusion is real: shaking the head sideways often means 'Da' (Yes), and nodding up and down can mean 'Ne' (No), though younger urban Bulgarians have largely adopted the Western convention. Hospitality is generous; guests in a Bulgarian home will be fed abundantly and offered rakia (fruit brandy) regardless of the time of day. Yogurt (kiselo mlyako) is a point of genuine national pride, attributed to the unique Lactobacillus bulgaricus bacteria. Rose oil production (Bulgaria supplies 85% of the world's rose oil) and the Rose Festival in Kazanlak every June are celebrated cultural touchstones.",
    highlights: [
      "The head-shake reversal is real but fading: sideways motion traditionally means 'Yes' (Da), vertical nodding means 'No' (Ne). When in doubt, listen for the words rather than the gesture.",
      "Rakia (fruit brandy, typically grape or plum, 40-50% alcohol) is the national drink, served with shopska salad (tomatoes, cucumbers, onions, and sirene cheese) as a starter. Drink slowly; it is stronger than it seems.",
      "Baba Marta (Grandmother March) on March 1 is celebrated by exchanging red and white woven bracelets (martenitsi) for health and good fortune. Wear yours until you see a stork or a blossoming tree, then tie it to a branch.",
      "Bulgaria produces 85% of the world's rose oil. The Rose Valley near Kazanlak hosts the annual Rose Festival in June with rose-picking ceremonies, parades, and the crowning of a Rose Queen.",
      "Bulgarian yogurt (kiselo mlyako) is genuinely different from yogurt elsewhere, containing the unique Lactobacillus bulgaricus strain. It is served with almost every meal and is considered a health food."
    ]
  },

  transportationMobility:
    "Sofia has an expanding metro system (4 lines as of 2024), plus buses, trams, and trolleybuses operated by the Sofia Urban Mobility Center. The metro is modern, clean, and the fastest way across the city. A monthly transport pass costs approximately BGN 50 (EUR 25). Taxis are cheap (starting fare BGN 0.79) but use only reputable companies like Yellow Taxi or OK Supertrans, or ride-hailing through Spark or TaxiMe apps. Intercity travel relies on buses (operated by companies like Union Ivkoni, Biomet, and Etap) and Bulgarian State Railways (BDZ), which are slow but scenic. FlixBus connects Sofia to European cities. Car ownership is common outside Sofia, but road quality is mixed: major highways (the Trakiya and Struma motorways) are good, while secondary roads can be potholed and poorly maintained.",

  internationalConnectivity:
    "Sofia Airport (SOF) is the main international gateway, with direct flights to most European capitals operated by Bulgaria Air (national carrier), Ryanair, Wizz Air, and Lufthansa. Varna and Burgas airports handle seasonal charter traffic, particularly from the UK, Germany, and Scandinavia, for Black Sea tourism. Low-cost carriers make Sofia one of the best-connected budget travel hubs in Southeast Europe. Direct flights to London, Berlin, Paris, Vienna, and Amsterdam run daily. For long-haul travel, connecting through Istanbul, Frankfurt, or Vienna is standard.",

  travelExploration:
    "Bulgaria packs remarkable geographic variety into a compact territory. The Black Sea coast (Varna, Sozopol, Nessebar with its UNESCO old town) offers affordable beach holidays from June through September. The Pirin and Rila mountain ranges provide excellent skiing in winter (Bansko, Borovets, Pamporovo) and stunning hiking in summer, including the Seven Rila Lakes and Rila Monastery (UNESCO). Plovdiv, the European Capital of Culture 2019, has a 6,000-year-old town center with Roman ruins, Ottoman mosques, and a vibrant arts scene. Veliko Tarnovo, the medieval capital, perches dramatically on cliffs above the Yantra River. The Thracian tombs in the Valley of the Kings near Kazanlak are world-class archaeological sites. Wine regions in the Thracian Valley produce excellent reds (Mavrud, Melnik) at very affordable prices.",

  considerations: [
    "Language and Alphabet: Bulgarian uses the Cyrillic alphabet, which Bulgaria invented and exported to the Slavic world. Learning to read Cyrillic (it is phonetic and can be learned in a few hours) is practically essential for reading street signs, menus, and documents. English is common in Sofia's tech sector but rare in government offices and outside the capital.",
    "Winter Air Quality: Sofia sits in a valley, and winter temperature inversions trap pollution from heating (wood and coal burning) and traffic, creating poor air quality from November through February. Check PM2.5 readings regularly and consider an air purifier for your apartment.",
    "Service Culture: Customer service in shops, restaurants, and government offices can feel blunt or indifferent by Western standards. This is cultural directness, not personal hostility. Do not expect smiles or pleasantries in bureaucratic interactions.",
    "Road Conditions: While major highways are good and improving, secondary and rural roads can be badly potholed, poorly lit, and hazardous in winter. Winter tires are mandatory from November 15 to March 1. Stray dogs remain present in some areas.",
    "Euro Adoption Timeline: Bulgaria is working toward Euro adoption but the timeline has been repeatedly delayed. The BGN is fixed to the EUR at 1.95583, so there is no currency risk for Euro earners, but the currency conversion still adds friction to daily transactions."
  ],

  mistakes: [
    "Nodding to mean 'Yes.' The traditional Bulgarian head gestures are reversed (shake = yes, nod = no). This is fading among younger urban Bulgarians but still causes confusion. Listen for 'Da' (yes) and 'Ne' (no) rather than relying on gestures.",
    "Assuming Bulgaria is culturally Russian. While historically allied and sharing Cyrillic script and Orthodox Christianity, Bulgarians have a distinct national identity and many feel strongly about the difference. The comparison can be unwelcome.",
    "Finishing everything on your plate at a Bulgarian home. If you clean your plate completely, your host may assume you are still hungry and serve more. Leave a small amount to signal you are satisfied.",
    "Underestimating rakia's potency. It is typically 40-50% alcohol, served in small glasses that encourage repeated refills. Pace yourself carefully, especially at social gatherings where refusal can be difficult.",
    "Skipping address registration with the police. This is a legal requirement within 5 business days of arrival, and failure to register can result in fines and problems with residence permit processing."
  ],

  emergency: [
    {
      number: '112',
      service: 'General Emergency',
      description: 'Pan-European emergency number connecting to police, fire, and ambulance services. Operators speak Bulgarian and English.'
    },
    {
      number: '150',
      service: 'Ambulance (Speshna Pomosht)',
      description: 'Direct ambulance dispatch for medical emergencies. Bulgarian language primarily.'
    },
    {
      number: '166',
      service: 'Police (Politsia)',
      description: 'Direct police line for crimes, accidents, and non-emergency reports.'
    }
  ],
  sources: [
    {
      name: 'Ministry of Foreign Affairs',
      category: 'Visa & Consular Services',
      description: 'Official information on visa types, entry requirements, and Bulgarian embassies worldwide.',
      link: 'https://www.mfa.bg/en/'
    },
    {
      name: 'Migration Directorate (Ministry of Interior)',
      category: 'Immigration & Residency',
      description: 'Handles residence permits, address registration, and all immigration compliance matters for foreign nationals.',
      link: 'https://www.mvr.bg/en'
    },
    {
      name: 'National Revenue Agency (NAP)',
      category: 'Tax & Finance',
      description: 'Manages tax registration, income tax filing, social security contributions, and business tax compliance.',
      link: 'https://nap.bg/en'
    },
    {
      name: 'Bulgaria Travel',
      category: 'Tourism',
      description: 'Official tourism portal with information on destinations, cultural events, and practical travel advice.',
      link: 'https://bulgariatravel.org/'
    }
  ],
  embassies: {
    description: 'For consular assistance, residency matters, and official guidance related to Bulgaria, consult the Bulgarian Ministry of Foreign Affairs or a Bulgarian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/bulgaria',
    mfaLink: 'https://www.mfa.bg/en'
  },
  serviceDirectory: {
    title: "Service Directory - Bulgaria",
    description: "Examples of large, commonly used service providers people often interact with when relocating to Bulgaria.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Legal assistance for visas, residence permits, TRO setup, work authorization, and immigration compliance.",
        providers: [
          { name: "Djingov, Gouginski, Kyutchukov & Velichkov", link: "https://www.dgkv.com" },
          { name: "CMS Sofia", link: "https://cms.law/en/bgr" },
          { name: "Schoenherr Bulgaria", link: "https://www.schoenherr.eu" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Agencies assisting with long-term rentals and residential property purchases across Sofia, Bansko, and the coast.",
        providers: [
          { name: "Address Real Estate", link: "https://address.bg" },
          { name: "Bulgarian Properties", link: "https://www.bulgarianproperties.com" },
          { name: "Yavlena", link: "https://www.yavlena.com" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Bulgarian flat tax, TRO accounting, social contributions, and cross-border income planning.",
        providers: [
          { name: "PwC Bulgaria", link: "https://www.pwc.bg" },
          { name: "EY Bulgaria", link: "https://www.ey.com/bg_bg" },
          { name: "KPMG Bulgaria", link: "https://home.kpmg/bg" }
        ]
      },
      {
        name: "Moving Companies",
        description: "International and domestic relocation services including packing, shipping, customs handling, and storage.",
        providers: [
          { name: "Crown Relocations", link: "https://www.crownrelo.com" },
          { name: "AGS Movers Bulgaria", link: "https://www.agsmovers.com" },
          { name: "Transpress", link: "https://www.transpress.bg" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Bulgarian language courses and Cyrillic literacy programmes for newcomers.",
        providers: [
          { name: "Sofia University - Bulgarian Language Center", link: "https://www.uni-sofia.bg" },
          { name: "Bulgarian Language School Sofia", link: "https://www.bulgarianlanguage.com" },
          { name: "Berlitz Bulgaria", link: "https://www.berlitz.bg" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major hospital groups and private clinics providing quality medical services at affordable prices.",
        providers: [
          { name: "Acibadem City Clinic", link: "https://acibademcityclinic.bg" },
          { name: "Tokuda Hospital Sofia", link: "https://tokudabg.com" },
          { name: "Alexandrovska University Hospital", link: "https://www.alexandrovska.com" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Employment platforms and recruitment firms connecting professionals with Bulgarian and international employers.",
        providers: [
          { name: "Jobs.bg", link: "https://www.jobs.bg" },
          { name: "Dev.bg (IT jobs)", link: "https://dev.bg" },
          { name: "Hays Bulgaria", link: "https://www.hays.bg" }
        ]
      }
    ]
  }
};