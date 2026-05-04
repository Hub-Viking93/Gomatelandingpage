export const article = {
  id: 'reporting-foreign-accounts-fatca-crs',
  categoryId: 'taxes-compliance',
  title: 'Reporting Foreign Accounts: FATCA, CRS, and the End of Banking Privacy',
  readingTime: '6 min read',
  author: 'GoMate Editorial',
  date: '2026-04-21',
  lastReviewed: '2026-04-21',
  excerpt: 'Why the financial privacy your parents had is gone, and what happens if you miss the reporting deadlines.',
  sections: [
    {
      heading: 'The Privacy That No Longer Exists',
      content: 'Until roughly 2015, a quiet foreign bank account was a tolerated corner of personal finance for most people who moved abroad. That era is over. The US FATCA law forced foreign banks to identify American customers and report them. The OECD then built the Common Reporting Standard, under which more than 100 countries now share bank balance and income data with each other automatically, every year. If you hold an account abroad, your home tax authority almost certainly already knows the balance. The question is whether you have reported it.'
    },
    {
      heading: 'FATCA: The American Problem',
      content: 'If you are a US citizen or green card holder, your tax reporting obligations follow you everywhere, even if you have not set foot in the US for a decade. Two filings matter most. FinCEN Form 114, commonly called the FBAR, is required if your aggregate foreign account balances ever exceed 10,000 USD at any point in the year, even for a single day. Form 8938 attaches to your tax return for higher thresholds. Penalties for failure to file are severe: up to 50 percent of the account balance per year for willful non-filing under the FBAR, and 10,000 USD per form plus additional penalties under Form 8938. A forgotten savings account can cost more than it contained.'
    },
    {
      type: 'warning',
      heading: 'Willfulness Is Easy to Establish',
      content: 'US taxpayers often assume that as long as they did not mean to hide an account, they cannot be hit with willful penalties. The IRS and courts have consistently ruled otherwise. Signing a tax return that asks whether you have foreign accounts, ticking "no," and being wrong is often treated as willful. So is ignoring the question. The safe answer, every year, is to reconcile every non-US account before filing and report even small ones that fall under the reporting thresholds in aggregate.'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
      alt: 'Audit and financial reporting concept',
      caption: 'Banks now report automatically. Your tax authority sees the balance before you file.'
    },
    {
      heading: 'CRS: The Rest of the World',
      content: 'The Common Reporting Standard is the global answer to FATCA. Since 2017, banks in over 100 participating jurisdictions automatically send account details, including name, address, account number, balance, interest, and dividends, to their domestic tax authority, which forwards it to the tax authority of your country of residence. There is no filing for you to do under CRS directly; the reporting is automated. But the data now exists on your home tax authority\'s desk, and it is their expectation that any income in those accounts has been declared on your domestic return.'
    },
    {
      heading: 'National Variants You Need to Know',
      content: 'Most countries layer their own foreign-account rules on top of CRS. Sweden requires residents to report foreign investment accounts on form K4 every year, with details of every buy and sell. The UK requires foreign income and gains to be reported on the Self Assessment foreign pages, with specific elections for the remittance basis. Germany applies the Aussensteuergesetz (AStG) with extensive rules on controlled foreign corporations and exit taxation. The Netherlands taxes deemed returns on foreign assets under Box 3, regardless of actual income. If you move between countries, each year of residency comes with its own reporting regime.'
    },
    {
      type: 'callout',
      heading: 'Crypto Is No Longer Private Either',
      content: 'Until recently, crypto exchanges sat outside these reporting frameworks. That is ending quickly. The EU\'s DAC8 directive extends CRS-style reporting to crypto-asset service providers from 2026, meaning exchanges will report user balances and transactions to EU tax authorities the same way banks do. The US IRS is rolling out Form 1099-DA for digital asset brokers starting with the 2025 tax year. The practical effect: every major centralized exchange will soon report to someone. If you are holding crypto abroad, treat it exactly like a foreign bank account for reporting purposes.'
    },
    {
      type: 'warning',
      heading: 'Residency Mismatches Freeze Accounts',
      content: 'Banks are increasingly running their own compliance checks on top of CRS. If the address you gave them does not match the country their due diligence thinks you are resident in, they may freeze the account, close it, or require you to provide tax residency certificates within days. This is why expats who forget to update their bank with a new address sometimes find themselves locked out of their own savings. Always tell your home bank when you move, and always give your new country of residence when opening a new account abroad.'
    },
    {
      type: 'tip',
      heading: 'Hire a Cross-Border Tax Advisor for Year One',
      content: 'If there is one year where DIY tax filing is a bad idea, it is your first full year as a resident abroad. The interaction between your home rules, your new country\'s rules, and the treaty between them is dense and changes often. A one-time consultation with an advisor who practices in both jurisdictions typically costs less than the penalties for a single missed form, and establishes the structure you will reuse for the rest of your time abroad. Pay once to build the system; maintain it yourself afterward.'
    },
    {
      type: 'list',
      heading: 'Your Foreign-Account Reporting Checklist',
      items: [
        'List every non-home-country account you hold, including brokerage, crypto, and joint accounts',
        'For US persons: file FBAR annually if aggregate balances ever exceed 10,000 USD, and Form 8938 where thresholds apply',
        'Check whether your home country has its own form (K4 in Sweden, foreign pages in the UK, Box 3 in the Netherlands)',
        'Update your bank address and tax residency declaration every time you move',
        'Treat centralized crypto exchanges as foreign financial accounts for reporting purposes from 2025/2026 onward',
        'Engage a dual-jurisdiction tax advisor for your first full year as a resident abroad'
      ]
    },
    {
      type: 'keyTakeaway',
      content: 'Your tax authority already knows about your foreign accounts. The only variable is whether you reported them first. File proactively, keep your bank addresses current, treat crypto as a reportable foreign asset, and pay for a cross-border advisor in year one. Silence is no longer a viable strategy.'
    }
  ]
};
