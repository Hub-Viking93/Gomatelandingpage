export const india = {
  id: 'india',
  slug: 'india',
  name: 'India',
  region: 'Asia',
  complexity: 'High',
  languages: ['Hindi', 'English', '+20 others'],
  shortDescription: 'A subcontinent of incredible diversity, spirituality, and chaos.',
  heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
  flagAlt: 'Flag of India',
  atAGlance: "India is not a country in the conventional sense; it is a subcontinent of 1.4 billion people, 22 officially recognized languages, and a cultural diversity that spans from the snow-capped Himalayas to tropical Kerala backwaters, from the Thar Desert to the mangrove swamps of the Sundarbans. The sensory experience is overwhelming: colors, sounds, smells, tastes, and textures assault you from every direction, simultaneously beautiful and chaotic. English is the associate official language and the lingua franca of business, technology, higher education, and government, making it one of the easier countries in Asia for English speakers to navigate professionally. The cost of living is extraordinarily low, with a comfortable lifestyle available for a fraction of Western prices. India's tech sector, centered in Bengaluru, Hyderabad, Pune, and Gurgaon, is globally significant and drives a modern, cosmopolitan urban culture that coexists with ancient traditions. Bureaucracy is legendary in its complexity; the phrase 'jugaad' (a creative workaround or improvised solution) captures the national approach to navigating systems that do not work as designed. Pollution, particularly in Delhi and northern cities, is a serious health concern from November through February. Traffic in major cities operates on rules that exist in theory but are treated as suggestions in practice. Cows have right of way, auto-rickshaws weave through gaps that seem impossible, and crossing the street in Mumbai rush hour is a skill acquired through practice and nerve. For those who can embrace the intensity, India offers professional opportunities, spiritual depth, culinary brilliance, and human connections that are simply unavailable anywhere else on earth. It will change you, one way or another.",
  overview: {
    euStatus: 'Non-EU',
    stayLength: 'Up to 180 days (E-Visa)',
    costOfLiving: 'Very Low',
    primaryLanguages: 'Hindi, English',
  },
  visas: [
    {
      name: 'E-Visa (Tourist / Business / Conference)',
      targetAudience: 'Tourists, Business visitors',
      useCase: 'Applied online through the Indian e-Visa portal. Available to citizens of most countries. Tourist e-visa allows up to 180 days of continuous stay (for 1-year and 5-year variants). Business e-visa covers meetings, trade fairs, and conferences. Multiple entry is standard. Processing takes 72 hours to 5 business days. Cannot be extended or converted in-country.',
      duration: '30 days, 1 year, or 5 years (varies by nationality)',
      link: 'https://indianvisaonline.gov.in/'
    },
    {
      name: 'Employment Visa',
      targetAudience: 'Employed professionals',
      useCase: 'For foreign nationals employed by an Indian company or the Indian branch of a multinational. Requires a minimum annual salary of $25,000 USD (exceptions for specific sectors like education and ethnic cooks). The employer provides a sponsorship letter. Applied for at the Indian consulate in your country of residence. Cannot be applied for from within India.',
      duration: '1-5 years depending on contract, renewable',
      link: 'https://indianvisaonline.gov.in/'
    },
    {
      name: 'OCI (Overseas Citizen of India)',
      targetAudience: 'Foreign nationals of Indian origin',
      useCase: 'A lifelong, multi-purpose visa for foreign nationals who were formerly Indian citizens, or whose parents or grandparents were Indian citizens. Grants visa-free travel, the right to live and work in India indefinitely, and parity with Indian citizens in most matters (except voting, government employment, and purchasing agricultural land). The most powerful immigration status available to the diaspora.',
      duration: 'Lifelong',
      link: 'https://ociservices.gov.in/'
    },
    {
      name: 'Research Visa',
      targetAudience: 'Academics, Researchers',
      useCase: 'For foreign nationals conducting research in India. Requires institutional affiliation with a recognized Indian university or research body, a detailed research proposal, and government clearance (which can take months). Mandatory for any formal academic research activity.',
      duration: 'Up to 5 years, tied to research period',
      link: 'https://indianvisaonline.gov.in/'
    },
    {
      name: 'Business Visa (Regular)',
      targetAudience: 'Business visitors, Investors',
      useCase: 'For those conducting business activities that do not constitute employment (setting up business, attending meetings, purchasing goods, exploring investment opportunities). Requires proof of business credentials and an invitation from an Indian business entity. More flexible than the e-Business visa for frequent travelers.',
      duration: '1-10 years depending on nationality, multiple entry',
      link: 'https://indianvisaonline.gov.in/'
    }
  ],
  requirements: [
    {
      title: 'FRRO Registration (Foreigners Regional Registration Office)',
      explanation: 'Foreigners holding long-term visas (employment, student, research, missionary, or any visa exceeding 180 days) must register with the FRRO/FRO within 14 days of arrival. Registration is now done online through the e-FRRO portal.',
      importance: 'Failure to register can result in fines, visa complications, and difficulties with exit clearance when leaving India. The e-FRRO system handles registration, visa extensions, exit permits, and address changes. In practice, the system works but can be slow; allow extra processing time before any planned travel. Your employer or institution should assist with the initial registration.',
      link: 'https://indianfrro.gov.in/'
    },
    {
      title: 'PAN Card (Permanent Account Number)',
      explanation: 'A 10-digit alphanumeric tax identification number issued by the Income Tax Department. Required for any financial transaction above specified thresholds, including employment income.',
      importance: 'The PAN card is essential for working, opening bank accounts, renting property (landlords often require it), buying a vehicle, making investments, and filing tax returns. Without a PAN, tax is deducted at higher rates from your income. Application is done online through NSDL or UTIITSL portals and takes 2-3 weeks to process. Foreign nationals can apply with their passport as identity proof.',
      link: 'https://www.onlineservices.nsdl.com/'
    },
    {
      title: 'Aadhaar Card (Biometric ID)',
      explanation: 'A 12-digit unique identification number linked to biometric data (fingerprints and iris scan), issued by UIDAI (Unique Identification Authority of India). Available to residents who have stayed in India for 182 or more days in the preceding 12 months.',
      importance: 'Aadhaar is the de facto digital identity layer of India. It is linked to bank accounts, mobile numbers, and government services through the India Stack (the digital infrastructure powering UPI payments, DigiLocker, and e-KYC). While not technically mandatory for all services, lacking Aadhaar increasingly creates friction in daily life, from SIM card activation to receiving subsidies to digital verification.',
      link: 'https://uidai.gov.in/'
    },
    {
      title: 'Bank Account',
      explanation: 'Opening an Indian bank account requires your passport, valid visa, FRRO registration certificate, PAN card (or Form 60 declaration), and proof of Indian address. Major banks include State Bank of India (SBI), HDFC Bank, ICICI Bank, and Axis Bank.',
      importance: 'A local bank account is essential for salary deposits, UPI payments, and daily transactions. India\'s UPI (Unified Payments Interface) has revolutionized payments: apps like Google Pay, PhonePe, and Paytm allow instant free transfers between any bank accounts using just a phone number. Cash is still used widely, but UPI has become dominant in urban areas. International transfers work through banks and services like Wise, though India\'s foreign exchange regulations (FEMA) add compliance requirements.',
      link: 'https://www.rbi.org.in/'
    }
  ],
  jobsAndIncome: {
    overview:
      "India's economy is the world's fifth largest and one of the fastest growing. The IT and business process outsourcing sector (Bengaluru, Hyderabad, Pune, Chennai, Gurgaon) is globally dominant. Financial services, pharmaceutical manufacturing, automotive, and startups (India has the world's third-largest startup ecosystem) offer diverse professional opportunities. English is the working language in virtually all multinational, tech, and professional service environments. Bengaluru (Bangalore) is the tech capital, Mumbai is the financial capital, and Delhi-NCR (including Gurgaon and Noida) hosts government, media, and corporate headquarters.",
    whereToLook: [
      "LinkedIn (heavily used in India's professional market)",
      "Naukri.com (India's largest job portal with 80+ million registered users)",
      "Indeed India",
      "iimjobs.com (for mid-to-senior management roles)",
      "AngelList/Wellfound (for startup roles)"
    ],
    realityChecks: [
      "The minimum salary threshold for employment visas ($25,000/year) effectively limits foreign hires to mid-to-senior roles. Exceptions exist for certain sectors.",
      "India's professional culture values hierarchy and seniority. Decision-making flows top-down, and challenging a superior directly in public is culturally inappropriate.",
      "Personal referrals and internal recommendations significantly accelerate hiring processes. Networking at industry events and through alumni connections is highly effective.",
      "Contract structures vary: CTC (Cost to Company) is the standard salary metric and includes base salary, HRA (house rent allowance), medical insurance, PF (provident fund), and variable bonuses. Understand the full breakup before accepting."
    ]
  },
  salaryReality: {
    overview:
      "Salaries in India span an enormous range reflecting the country's economic diversity. Entry-level IT professionals earn INR 3-6 lakh/year ($3,600-7,200), mid-career professionals at multinationals earn INR 15-40 lakh/year ($18,000-48,000), and senior leadership at top companies earn INR 50 lakh to several crore. The cost of living varies dramatically by city: Mumbai and Delhi are significantly more expensive than Bengaluru, Hyderabad, or Pune. A comfortable single lifestyle in Bengaluru or Pune costs $800-1,500/month; in Mumbai, expect $1,500-3,000.",
    realityChecks: [
      "CTC (Cost to Company) is NOT your take-home salary. It includes employer PF contribution, gratuity, insurance, and sometimes variable bonuses. Your actual monthly in-hand salary can be 60-75% of the CTC divided by 12.",
      "India's income tax is progressive: 5% on income INR 3-6 lakh, scaling up to 30% above INR 15 lakh, plus surcharges. The new tax regime (simplified, fewer deductions) competes with the old regime (more deductions but complex).",
      "Employer-provided health insurance for the employee and family is standard at most formal-sector companies. Coverage ranges from INR 3-10 lakh; supplementary policies are advisable for better hospital access.",
      "The gap between 'expat packages' (with housing, schooling, home leave) at multinationals and 'local hire' packages is enormous and shrinking as companies localize compensation."
    ],
    whatsUsuallyMissingFromOnlineNumbers: [
      "The difference between CTC and actual monthly in-hand salary (often 25-40% less than the headline CTC figure)",
      "City-specific housing costs: a 2BHK (2 bedroom, hall, kitchen) in a good Mumbai neighborhood costs INR 40,000-80,000/month ($480-960), while the same in Bengaluru costs INR 20,000-40,000",
      "International school fees (INR 5-20 lakh per year per child at schools like American Embassy School Delhi, Bangalore International School)",
      "The cost of domestic help (cook, cleaner, driver), which is very affordable (INR 5,000-15,000/month each) and culturally normalized"
    ]
  },
  housingSystem: {
    overview:
      "Housing in Indian cities is primarily apartment-based, found through real estate brokers, online platforms, and personal networks. In Bengaluru, popular expat areas include Indiranagar, Koramangala, Whitefield, and HSR Layout. In Mumbai, Bandra, Powai, Lower Parel, and Andheri are common choices. In Delhi-NCR, Gurgaon (DLF phases, Golf Course Road) and South Delhi (Vasant Vihar, Defence Colony) are preferred. Gated societies (apartment complexes with amenities, security, and maintenance) are the standard choice for expats and upper-middle-class Indians.",
    expectations:
      "Expect to pay a security deposit of 2-10 months' rent (varies by city; Bengaluru typically asks for 10 months, Mumbai 3-6 months, Delhi 2-3 months). Properties are found through brokers (who charge 1-2 months' rent as commission), platforms like NoBroker (no-broker-fee listings), MagicBricks, 99acres, and Housing.com. Registered rental agreements are mandatory in many states. Verify water supply schedule, power backup (inverter/generator), parking, and proximity to your workplace (traffic will add significant commute time). Furnished apartments are less common than in Southeast Asia; many are semi-furnished (basic fittings, no furniture)."
  },
  healthcareReality:
    "India has a paradoxical healthcare system: world-class private hospitals coexist with severely under-resourced public facilities. The private sector is where most expats and middle-class Indians seek treatment. Apollo Hospitals, Fortis Healthcare, Max Healthcare, Manipal Hospitals, and Narayana Health are major private chains with English-speaking doctors, modern equipment, and JCI-accredited facilities. India is a leading medical tourism destination, with costs for major procedures (cardiac surgery, orthopedics, oncology) at 10-20% of US prices. Government hospitals (AIIMS in Delhi is the most renowned) provide subsidized or free care but are overcrowded, with long wait times and limited English proficiency among staff. Employer-provided health insurance is standard for formal-sector workers; verify coverage limits and panel hospitals. Supplementary insurance from providers like HDFC Ergo, ICICI Lombard, or international insurers is advisable. Pharmacies (Apollo Pharmacy, MedPlus, Netmeds) are abundant, and many medications are available at very low cost, often without prescription. India is the world's largest generic drug manufacturer.",
  digitalLife: {
    overview:
      "India has undergone a digital revolution. The India Stack (Aadhaar, UPI, DigiLocker) has created a national digital infrastructure that is arguably the most advanced in the world for payments and identity verification. UPI (Unified Payments Interface) processes over 10 billion transactions monthly, and QR code payments are accepted from high-end restaurants to roadside chai stalls. Mobile internet from Jio (which disrupted the market with free/cheap 4G), Airtel, and Vi covers most of the country. Broadband fiber (Jio Fiber, Airtel Xstream) delivers 100-1000 Mbps in cities.",
    essentials: [
      "Google Pay or PhonePe (UPI payment apps, absolutely essential for daily transactions; accepted everywhere from auto-rickshaws to high-end restaurants)",
      "Ola or Uber (ride-hailing for autos, cabs, and bikes; Ola is the local competitor with deeper penetration in smaller cities)",
      "Swiggy or Zomato (food delivery and dining apps with restaurant reviews; food delivery is extremely affordable and fast)",
      "Amazon India or Flipkart (e-commerce platforms with same-day or next-day delivery in major cities)"
    ],
    whatSurprisesNewcomers: [
      "UPI payments have made India virtually cashless in urban areas. Chai wallahs, auto-rickshaw drivers, and vegetable vendors all have QR codes. You can go weeks without using physical cash.",
      "India's Aadhaar-linked digital identity system enables instant verification for bank accounts, SIM cards, and government services that would take weeks of paperwork elsewhere.",
      "Mobile data is absurdly cheap: unlimited data plans cost INR 200-500/month ($2.40-6) thanks to the Jio revolution. India has some of the cheapest mobile data in the world.",
      "WhatsApp is the universal communication platform. Business proposals, job offers, apartment listings, and customer service all happen on WhatsApp. Check it as you would email."
    ]
  },
  culture: {
    text: "Indian culture is collective, hierarchical, and deeply spiritual, shaped by thousands of years of Hindu, Buddhist, Islamic, Sikh, and other traditions. The concept of 'Atithi Devo Bhava' (the guest is God) shapes social interactions; Indians are extraordinarily hospitable and generous to visitors. Personal questions that would be considered intrusive in Western cultures (your salary, marital status, age, plans for children) are normal conversation starters and are meant as expressions of interest, not rudeness. The head wobble, a distinctive side-to-side head movement, can mean 'yes,' 'no,' 'maybe,' 'I understand,' or 'go on' depending on context, speed, and accompanying expression. It takes time to read but becomes natural. Family is paramount; career decisions, living arrangements, and social life all revolve around family obligations and expectations. India celebrates festivals from every major religion with extraordinary enthusiasm: Diwali (Festival of Lights), Holi (Festival of Colors), Eid, Christmas, Pongal, Onam, Baisakhi, and dozens more create a calendar of celebrations that is unmatched anywhere in the world.",
    highlights: [
      "Always use your right hand for eating, passing objects, and greeting. The left hand is associated with personal hygiene and is considered unclean.",
      "Remove your shoes before entering homes, temples, mosques, and gurdwaras. Look for shoes at the entrance as your cue.",
      "Do not point your feet at people or religious objects, and apologize immediately if you accidentally touch someone with your foot. Feet are considered the lowest and most impure part of the body.",
      "Address elders and superiors with respect. 'Uncle' and 'Aunty' are standard terms for older acquaintances (not just relatives). Using first names with elders is considered disrespectful unless they specifically invite it.",
      "IST (Indian Standard Time) is jokingly called 'Indian Stretchable Time.' Punctuality is valued in multinational business settings but is flexible in social and domestic contexts. When someone says '10 minutes,' prepare for 30-60."
    ]
  },
  transportationMobility:
    "Indian cities offer diverse but chaotic transport options. The Delhi Metro is one of the world's largest metro systems (over 250 stations, 12 lines) and genuinely world-class in cleanliness and efficiency. Bengaluru, Mumbai, Chennai, Kolkata, and Hyderabad also have metro systems at various stages of completion. Mumbai's local train network carries over 7 million passengers daily and is the city's lifeline. Auto-rickshaws are ubiquitous in most cities (metered or app-based via Ola/Uber). Ride-hailing through Ola and Uber is the default transport for most expats. Traffic in Bengaluru, Mumbai, and Delhi is legendary; commute times of 1-2 hours for 15-20 km are normal during peak hours. Intercity travel options include an extensive rail network (Indian Railways, book through IRCTC), domestic flights (IndiGo, SpiceJet, Air India, Vistara), and luxury bus services. Trains range from basic unreserved coaches to air-conditioned sleepers; book well in advance for popular routes.",
  internationalConnectivity:
    "India has multiple international airports, with Delhi Indira Gandhi International (DEL), Mumbai Chhatrapati Shivaji Maharaj (BOM), and Bengaluru Kempegowda (BLR) being the busiest. Hyderabad (HYD), Chennai (MAA), Kochi (COC), and Kolkata (CCU) also handle significant international traffic. Direct flights connect to virtually every major global city: London (9 hours), New York (15 hours), Dubai (3.5 hours), Singapore (5.5 hours), Tokyo (8 hours). Air India (recently acquired by Tata Group and improving), IndiGo (growing international network), Vistara, and dozens of international carriers operate. India has some of the world's cheapest domestic flights; IndiGo, SpiceJet, and Air India Express connect hundreds of cities at remarkably low fares.",
  travelExploration:
    "India's domestic travel potential is essentially limitless. Rajasthan (Jaipur, Jodhpur, Udaipur, Jaisalmer) delivers desert palaces, forts, and vibrant color. Kerala's backwaters offer houseboat cruises through tropical canals. Goa provides beaches, Portuguese heritage, and a laid-back vibe. The Himalayas span from Ladakh (stark, high-altitude desert) to Darjeeling (tea plantations and colonial charm) to Rishikesh (yoga capital). Varanasi on the Ganges is one of the world's oldest continuously inhabited cities and a spiritual epicenter. The Taj Mahal in Agra needs no introduction. Hampi's boulder-strewn landscape with Vijayanagara empire ruins is otherworldly. The Andaman Islands offer world-class diving. Meghalaya's living root bridges and Arunachal Pradesh's tribal cultures are off-the-beaten-path treasures. India's railway journeys (the Konkan Railway along the coast, the toy train to Shimla) are experiences in themselves.",
  considerations: [
    "Air Pollution: Air quality in Delhi and northern Indian cities is hazardous from November through February, with PM2.5 levels regularly exceeding 300-500 (the WHO safe limit is 15). Invest in a quality air purifier (Blueair, Coway, Xiaomi) for your home, carry N95 masks, and monitor AQI daily. Consider this a serious health factor in choosing which city to live in.",
    "Stomach Adjustment: 'Delhi Belly' is a rite of passage. Gastrointestinal issues are extremely common for newcomers. Start slowly with cooked food, drink only bottled or filtered water, wash fruit with purified water, avoid raw salads from unknown sources, and carry oral rehydration salts. Most people adapt within 2-4 weeks.",
    "Traffic and Road Safety: Indian traffic operates on informal rules. Cows have right of way, lane markings are decorative, and horn usage is constant. Do not attempt to drive yourself in Indian cities until you are experienced with local driving culture. Use Ola, Uber, or hire a driver.",
    "Scams and Tourist Targeting: In tourist areas, common scams include 'the tourist office has burned down,' 'your hotel is closed,' and taxi/auto-rickshaw overcharging. Use prepaid taxi counters at airports, book through apps, and ignore touts. Once you are established as a resident rather than a tourist, this pressure largely disappears.",
    "Bureaucratic Complexity: Indian bureaucracy is multi-layered, often requiring visits to multiple offices with stacks of documents. The phrase 'come back tomorrow' is a genuine possibility at every counter. Hiring a local fixer or agent for complex processes (vehicle registration, property transactions, visa formalities) saves enormous time and frustration."
  ],
  mistakes: [
    "Wearing revealing clothing, especially for women. Modesty is valued across most of India. Cover shoulders and knees as a baseline in public, particularly in temples, rural areas, and conservative neighborhoods.",
    "Displaying public affection. Kissing and overt physical intimacy in public are frowned upon and can attract unwanted attention or even police intervention in conservative areas. Hand-holding is generally acceptable in cosmopolitan neighborhoods.",
    "Addressing elders or superiors by their first name without invitation. Use 'Sir,' 'Ma'am,' 'Uncle,' 'Aunty,' or professional titles until explicitly told otherwise.",
    "Giving money directly to beggars, especially children. It perpetuates exploitative begging networks. Donate to established charities like Goonj, CRY, or Akshaya Patra that work on systemic solutions.",
    "Underestimating distances and travel times. A destination '15 km away' in Bengaluru or Mumbai can take 60-90 minutes in traffic. Always add a generous buffer, especially for airport runs and meetings."
  ],
  emergency: [
    {
      number: '112',
      service: 'Unified Emergency Number',
      description: 'All-in-one emergency number for police, fire, and ambulance. Increasingly functional nationwide; operators speak Hindi and English.'
    },
    {
      number: '100',
      service: 'Police',
      description: 'Direct police emergency line. Operators speak Hindi and local languages; English proficiency varies.'
    },
    {
      number: '102',
      service: 'Ambulance (National)',
      description: 'National ambulance service. Response times vary significantly by city and location. In emergencies, calling the nearest hospital or using an app like MFine or Practo may be faster.'
    }
  ],
  sources: [
    {
      name: 'Indian Visa Online',
      category: 'Visas & Immigration',
      description: 'Official portal for e-Visa applications, visa information, and entry requirements.',
      link: 'https://indianvisaonline.gov.in/'
    },
    {
      name: 'e-FRRO (Foreigners Registration)',
      category: 'Registration & Compliance',
      description: 'Online portal for FRRO registration, visa extensions, exit permits, and address changes for foreign nationals.',
      link: 'https://indianfrro.gov.in/'
    },
    {
      name: 'Income Tax Department',
      category: 'Taxation',
      description: 'Handles PAN card issuance, income tax filing, and tax compliance for residents and foreign nationals.',
      link: 'https://www.incometax.gov.in/'
    },
    {
      name: 'Incredible India (Ministry of Tourism)',
      category: 'Tourism & Travel',
      description: 'Official tourism body with destination guides, travel advisories, and visitor resources.',
      link: 'https://www.incredibleindia.org/'
    }
  ],
  embassies: {
    description: 'For consular assistance, passport services, and official guidance related to India, consult the Ministry of External Affairs of India or an Indian embassy or consulate abroad.',
    directoryLink: 'https://www.embassypages.com/india',
    mfaLink: 'https://mea.gov.in/'
  },
  serviceDirectory: {
    title: "Service Directory - India",
    description: "Examples of large, commonly used service providers people often interact with when relocating to India.",
    disclaimer: "GoMate does not provide or endorse these services directly. This directory is a curated list of reputable providers to help you navigate your move.",
    categories: [
      {
        name: "Immigration Lawyers",
        description: "Specialized legal assistance for employment visas, business visas, OCI cards, and FRRO compliance.",
        providers: [
          { name: "Fragomen India", link: "https://www.fragomen.com" },
          { name: "Khaitan & Co", link: "https://www.khaitanco.com" },
          { name: "AZB & Partners", link: "https://www.azbpartners.com" }
        ]
      },
      {
        name: "Real Estate Agents",
        description: "Professionals handling property rentals and sales in major Indian cities.",
        providers: [
          { name: "NoBroker", link: "https://www.nobroker.in" },
          { name: "JLL India", link: "https://www.jll.co.in" },
          { name: "Knight Frank India", link: "https://www.knightfrank.co.in" }
        ]
      },
      {
        name: "Accountants & Tax Advisors",
        description: "Experts on Indian income tax, FEMA compliance, and cross-border tax planning.",
        providers: [
          { name: "Deloitte India", link: "https://www2.deloitte.com/in" },
          { name: "PwC India", link: "https://www.pwc.in" },
          { name: "KPMG India", link: "https://home.kpmg/in/en/home.html" }
        ]
      },
      {
        name: "Moving Companies",
        description: "Relocation services for international shipping, customs clearance, and local moves.",
        providers: [
          { name: "Crown Relocations India", link: "https://www.crownrelo.com" },
          { name: "Santa Fe Relocation", link: "https://www.santaferelo.com" },
          { name: "Agarwal Packers & Movers", link: "https://www.agarwalpackers.com" }
        ]
      },
      {
        name: "Language Tutors",
        description: "Hindi, regional language, and cultural orientation courses for newcomers.",
        providers: [
          { name: "Zabaan Language Institute (Delhi)", link: "https://www.zabaan.com" },
          { name: "British Council India", link: "https://www.britishcouncil.in" },
          { name: "Language Pantheon", link: "https://www.languagepantheon.com" }
        ]
      },
      {
        name: "Healthcare Providers",
        description: "Major private hospital networks and healthcare providers commonly used by expats.",
        providers: [
          { name: "Apollo Hospitals", link: "https://www.apollohospitals.com" },
          { name: "Fortis Healthcare", link: "https://www.fortishealthcare.com" },
          { name: "Max Healthcare", link: "https://www.maxhealthcare.in" }
        ]
      },
      {
        name: "Job Placement Agencies",
        description: "Recruitment firms connecting international talent with Indian employers.",
        providers: [
          { name: "Naukri.com", link: "https://www.naukri.com" },
          { name: "Michael Page India", link: "https://www.michaelpage.co.in" },
          { name: "Hays India", link: "https://www.hays.co.in" }
        ]
      }
    ]
  }
};
