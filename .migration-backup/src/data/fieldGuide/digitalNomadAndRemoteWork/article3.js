export const article = {
  id: 'nomad-stack-banking-insurance',
  categoryId: 'digital-nomad-remote-work',
  title: 'Building a Nomad Stack: Banking, Insurance, and Address',
  readingTime: '5 min read',
  author: 'GoMate Editorial',
  date: '2026-04-21',
  lastReviewed: '2026-04-21',
  excerpt: 'The practical infrastructure you need when your life no longer fits inside one country.',
  sections: [
    {
      heading: 'What a Nomad Stack Actually Is',
      content: 'A nomad stack is the set of services that keep your financial, administrative, and digital life functional when you do not have a fixed country of residence. Think of it as a parallel to your everyday bank, insurer, and mailing address — redesigned to tolerate a VPN in Bangkok on Monday and a SIM card in Medellin on Friday. Building the stack deliberately, before you leave, saves you from the specific failure mode every new nomad hits: your home bank freezes your card because of an unexpected login from Vietnam, and you are stranded at midnight on a national holiday trying to reach a call centre that closed three hours ago.'
    },
    {
      heading: 'Banking: Build Redundancy Before You Need It',
      content: 'Start with at least two multi-currency accounts. Wise is the default for EUR, GBP, and USD balances with real exchange rates and local account numbers in multiple countries. Revolut is stronger on in-app FX and European payments; N26 gives you a proper German IBAN that many services demand; Mercury is the go-to for US LLC owners running solo businesses. Do not close your home bank account — keep it funded and active as a fallback. US citizens should know that consistent foreign IP logins can trigger PATRIOT Act-driven account reviews; some US banks will unilaterally close accounts that look "offshore" to their compliance team, with limited appeal. Keep at least one card on a different network (Mastercard plus Visa) and at least one bank unaware of your travel to act as a last-resort lifeline.'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42',
      alt: 'Desk workspace with notebook and documents',
      caption: 'A deliberate nomad stack is the unsexy infrastructure that keeps everything else working.'
    },
    {
      type: 'warning',
      heading: 'Travel Insurance Is Not Health Insurance',
      content: 'Travel insurance is designed for a two-week holiday: short duration, sudden emergencies only, aggressive exclusions on pre-existing conditions, and strict geographical limits. If you treat it as your health cover for a year abroad, you will discover the limits the hard way. Genuine long-term options include SafetyWing Nomad Insurance and Nomad Health (subscription, designed for nomads), Genki (German-issued, EU-friendly), IMG Global and Cigna Global (proper expat health insurance with full underwriting). Expect expat health insurance to cost three to five times what travel insurance does — because it actually covers chronic conditions, maternity, dental, and repatriation. The EHIC card only helps inside the EU, Switzerland, Liechtenstein, Norway, and Iceland, and even there it is not a substitute for private cover.'
    },
    {
      heading: 'An Address of Record Is Non-Negotiable',
      content: 'Tax authorities, banks, insurers, and even your passport-renewal office all need a postal address. You cannot function long-term without one, and your mother\'s spare room stops being a credible answer once you are filing in three jurisdictions. Virtual mailbox services bridge this gap: in the US, CMRA-registered providers like Traveling Mailbox and Anytime Mailbox scan your post and forward parcels. The UK has forwarding services like UK Postbox. Germany requires more care because Postident-style identity verification often demands a registered Meldeadresse; services like Clevver or a registered coworking address can work. Pick a state and provider with favourable tax and privacy treatment — South Dakota, Florida, and Texas are common US choices because they have no state income tax.'
    },
    {
      type: 'list',
      heading: 'Connectivity: Plan for the Failure Mode',
      items: [
        'Primary eSIM through Airalo or Holafly for per-country data at reasonable rates — load two countries before you board',
        'Backup physical SIM from your home carrier with international roaming enabled for emergencies and two-factor authentication fallbacks',
        'A paid VPN with servers in your home country for banking logins, streaming access, and geo-locked government portals (Mullvad, ProtonVPN, IVPN)',
        'Hardware 2FA key (YubiKey or similar) instead of SMS-based codes — phone numbers lapse and SIMs get swapped',
        'Cloud-based password manager with offline export stored on an encrypted USB drive in case you lose all devices'
      ]
    },
    {
      type: 'tip',
      heading: 'Test the Stack Under Stress Before You Depart',
      content: 'Spend a weekend deliberately pretending you have lost your phone. Can you log into your bank from a new device using only your laptop and your hardware key? Can you receive a forwarded piece of post within three business days? Does your VPN actually connect from an airport network, or does it get throttled? The failures you find at home are cheap; the same failures in a foreign Airbnb at 2 a.m. are not. Schedule a stack review every six months — services change terms, cards expire, and a stack that worked last year can have a quiet hole in it by the time you need it.'
    },
    {
      type: 'callout',
      heading: 'Tell Your Banks You Are Moving',
      content: 'The most avoidable account freeze is the one caused by surprise. Before you leave, contact every bank and card issuer and set a formal travel notice or update your country of residence where permitted. Some banks require you to declare non-residency; others tolerate long trips without comment. Either way, a five-minute call now prevents a fraud-flagged card the day you land.'
    },
    {
      type: 'keyTakeaway',
      content: 'A working nomad stack is redundant banking, real expat-grade health insurance, a stable address of record, and tested connectivity. Build it before you need it, review it every six months, and always keep one lifeline account your travel-tracking bank does not know about.'
    }
  ]
};
