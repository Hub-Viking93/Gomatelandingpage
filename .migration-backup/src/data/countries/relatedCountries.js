/**
 * Related countries map — hand-curated geographic/cultural connections.
 *
 * Each country maps to 4-6 neighbors that form natural chains:
 * Sweden → Norway → Denmark → Germany → Austria → Switzerland → ...
 * Albania → Montenegro → Serbia → Croatia → Slovenia → ...
 * Thailand → Vietnam → Cambodia → Malaysia → Singapore → ...
 *
 * This creates a web of relevant internal links for SEO and user experience.
 */

export const relatedCountries = {
  // ── Nordic ─────────────────────────────────────────
  'sweden':       ['norway', 'denmark', 'finland', 'iceland', 'germany'],
  'norway':       ['sweden', 'denmark', 'finland', 'iceland', 'united-kingdom'],
  'denmark':      ['sweden', 'norway', 'germany', 'netherlands', 'iceland'],
  'finland':      ['sweden', 'norway', 'estonia', 'iceland', 'denmark'],
  'iceland':      ['norway', 'sweden', 'denmark', 'finland', 'ireland'],

  // ── Baltic ─────────────────────────────────────────
  'estonia':      ['finland', 'latvia', 'lithuania', 'sweden', 'poland'],
  'latvia':       ['estonia', 'lithuania', 'poland', 'finland', 'sweden'],
  'lithuania':    ['latvia', 'estonia', 'poland', 'germany', 'finland'],

  // ── DACH ───────────────────────────────────────────
  'germany':      ['austria', 'switzerland', 'netherlands', 'denmark', 'poland'],
  'austria':      ['germany', 'switzerland', 'czech-republic', 'hungary', 'italy'],
  'switzerland':  ['germany', 'austria', 'france', 'italy', 'liechtenstein'],
  'liechtenstein': ['switzerland', 'austria', 'germany', 'luxembourg', 'slovenia'],

  // ── Benelux ────────────────────────────────────────
  'netherlands':  ['belgium', 'germany', 'luxembourg', 'denmark', 'france'],
  'belgium':      ['netherlands', 'luxembourg', 'france', 'germany', 'united-kingdom'],
  'luxembourg':   ['belgium', 'netherlands', 'france', 'germany', 'switzerland'],

  // ── British Isles ──────────────────────────────────
  'united-kingdom': ['ireland', 'france', 'netherlands', 'belgium', 'norway'],
  'ireland':        ['united-kingdom', 'france', 'iceland', 'netherlands', 'canada'],

  // ── Iberian ────────────────────────────────────────
  'spain':     ['portugal', 'france', 'andorra', 'italy', 'morocco'],
  'portugal':  ['spain', 'cape-verde', 'brazil', 'france', 'italy'],
  'andorra':   ['spain', 'france', 'monaco', 'portugal', 'switzerland'],

  // ── France & Microstates ───────────────────────────
  'france':    ['belgium', 'switzerland', 'spain', 'italy', 'monaco', 'andorra'],
  'monaco':    ['france', 'andorra', 'italy', 'switzerland', 'liechtenstein'],

  // ── Mediterranean / Southern Europe ────────────────
  'italy':     ['france', 'switzerland', 'austria', 'spain', 'greece', 'croatia'],
  'greece':    ['cyprus', 'italy', 'turkey', 'albania', 'bulgaria'],
  'malta':     ['italy', 'cyprus', 'spain', 'greece', 'portugal'],
  'cyprus':    ['greece', 'malta', 'turkey', 'israel', 'italy'],

  // ── Balkans ────────────────────────────────────────
  'albania':                  ['kosovo', 'montenegro', 'north-macedonia', 'serbia', 'greece'],
  'montenegro':               ['bosnia-and-herzegovina', 'serbia', 'albania', 'kosovo', 'croatia'],
  'serbia':                   ['bosnia-and-herzegovina', 'montenegro', 'kosovo', 'croatia', 'north-macedonia'],
  'croatia':                  ['slovenia', 'bosnia-and-herzegovina', 'serbia', 'montenegro', 'hungary'],
  'slovenia':                 ['croatia', 'austria', 'italy', 'hungary', 'montenegro'],
  'bosnia-and-herzegovina':   ['serbia', 'croatia', 'montenegro', 'kosovo', 'north-macedonia'],
  'north-macedonia':          ['kosovo', 'albania', 'bulgaria', 'serbia', 'greece'],
  'kosovo':                   ['albania', 'north-macedonia', 'montenegro', 'serbia', 'bosnia-and-herzegovina'],
  'bulgaria':                 ['romania', 'greece', 'north-macedonia', 'turkey', 'serbia'],
  'romania':                  ['bulgaria', 'hungary', 'moldova', 'serbia', 'ukraine'],
  'moldova':                  ['romania', 'ukraine', 'bulgaria', 'hungary', 'georgia'],

  // ── Central Europe ─────────────────────────────────
  'poland':         ['germany', 'czech-republic', 'slovakia', 'ukraine', 'lithuania'],
  'czech-republic': ['germany', 'austria', 'poland', 'slovakia', 'hungary'],
  'slovakia':       ['czech-republic', 'poland', 'hungary', 'austria', 'ukraine'],
  'hungary':        ['austria', 'slovakia', 'romania', 'ukraine', 'croatia'],
  'ukraine':        ['poland', 'moldova', 'romania', 'hungary', 'slovakia'],

  // ── Caucasus / Crossroads ──────────────────────────
  'turkey':     ['greece', 'cyprus', 'georgia', 'bulgaria', 'united-arab-emirates'],
  'georgia':    ['armenia', 'azerbaijan', 'turkey', 'romania', 'bulgaria'],
  'armenia':    ['georgia', 'azerbaijan', 'turkey', 'kazakhstan', 'uzbekistan'],
  'azerbaijan': ['armenia', 'georgia', 'turkey', 'kazakhstan', 'uzbekistan'],

  // ── Central Asia ───────────────────────────────────
  'kazakhstan': ['uzbekistan', 'kyrgyzstan', 'azerbaijan', 'armenia', 'mongolia'],
  'uzbekistan': ['kazakhstan', 'kyrgyzstan', 'azerbaijan', 'armenia', 'turkey'],
  'kyrgyzstan': ['kazakhstan', 'uzbekistan', 'mongolia', 'azerbaijan', 'armenia'],
  'mongolia':   ['china', 'kazakhstan', 'kyrgyzstan', 'japan', 'south-korea'],

  // ── Middle East / Gulf ─────────────────────────────
  'united-arab-emirates': ['qatar', 'bahrain', 'saudi-arabia', 'oman', 'india'],
  'qatar':                ['united-arab-emirates', 'bahrain', 'saudi-arabia', 'kuwait', 'oman'],
  'bahrain':              ['qatar', 'united-arab-emirates', 'saudi-arabia', 'kuwait', 'oman'],
  'saudi-arabia':         ['united-arab-emirates', 'qatar', 'bahrain', 'egypt', 'jordan'],
  'kuwait':               ['saudi-arabia', 'united-arab-emirates', 'qatar', 'bahrain', 'oman'],
  'oman':                 ['united-arab-emirates', 'qatar', 'bahrain', 'saudi-arabia', 'jordan'],
  'jordan':               ['lebanon', 'saudi-arabia', 'egypt', 'israel', 'united-arab-emirates'],
  'lebanon':              ['jordan', 'cyprus', 'israel', 'egypt', 'turkey'],
  'israel':               ['lebanon', 'cyprus', 'jordan', 'egypt', 'turkey'],

  // ── North Africa ───────────────────────────────────
  'morocco':  ['spain', 'portugal', 'tunisia', 'senegal', 'france'],
  'tunisia':  ['morocco', 'egypt', 'france', 'italy', 'turkey'],
  'egypt':    ['morocco', 'tunisia', 'jordan', 'ethiopia', 'saudi-arabia'],

  // ── Sub-Saharan Africa ─────────────────────────────
  'south-africa': ['namibia', 'botswana', 'kenya', 'mauritius', 'tanzania'],
  'kenya':        ['tanzania', 'uganda', 'rwanda', 'ethiopia', 'south-africa'],
  'mauritius':    ['seychelles', 'madagascar', 'south-africa', 'kenya', 'india'],
  'nigeria':      ['ghana', 'cote-divoire', 'senegal', 'kenya', 'south-africa'],
  'ghana':        ['nigeria', 'cote-divoire', 'senegal', 'kenya', 'morocco'],
  'rwanda':       ['uganda', 'kenya', 'tanzania', 'south-africa', 'ghana'],
  'tanzania':     ['kenya', 'uganda', 'rwanda', 'mauritius', 'south-africa'],
  'namibia':      ['south-africa', 'botswana', 'tanzania', 'kenya', 'mauritius'],
  'ethiopia':     ['kenya', 'uganda', 'tanzania', 'egypt', 'south-africa'],
  'uganda':       ['kenya', 'rwanda', 'tanzania', 'ethiopia', 'south-africa'],
  'botswana':     ['namibia', 'south-africa', 'tanzania', 'mauritius', 'kenya'],
  'madagascar':   ['mauritius', 'seychelles', 'tanzania', 'south-africa', 'kenya'],
  'seychelles':   ['mauritius', 'madagascar', 'tanzania', 'kenya', 'maldives'],
  'cote-divoire': ['senegal', 'ghana', 'nigeria', 'cape-verde', 'morocco'],
  'senegal':      ['cote-divoire', 'cape-verde', 'ghana', 'morocco', 'nigeria'],
  'cape-verde':   ['senegal', 'portugal', 'cote-divoire', 'morocco', 'brazil'],

  // ── East Asia ──────────────────────────────────────
  'japan':       ['south-korea', 'taiwan', 'china', 'hong-kong', 'singapore'],
  'south-korea': ['japan', 'taiwan', 'china', 'hong-kong', 'vietnam'],
  'china':       ['hong-kong', 'taiwan', 'japan', 'south-korea', 'singapore'],
  'taiwan':      ['japan', 'south-korea', 'hong-kong', 'singapore', 'china'],
  'hong-kong':   ['china', 'taiwan', 'singapore', 'japan', 'south-korea'],

  // ── Southeast Asia ─────────────────────────────────
  'thailand':    ['vietnam', 'cambodia', 'malaysia', 'indonesia', 'singapore'],
  'vietnam':     ['thailand', 'cambodia', 'south-korea', 'japan', 'malaysia'],
  'cambodia':    ['thailand', 'vietnam', 'malaysia', 'indonesia', 'philippines'],
  'laos':        ['thailand', 'vietnam', 'cambodia', 'malaysia', 'china'],
  'malaysia':    ['singapore', 'thailand', 'indonesia', 'vietnam', 'philippines'],
  'singapore':   ['malaysia', 'hong-kong', 'japan', 'thailand', 'indonesia'],
  'indonesia':   ['malaysia', 'singapore', 'thailand', 'philippines', 'australia'],
  'philippines':  ['malaysia', 'indonesia', 'thailand', 'japan', 'south-korea'],

  // ── South Asia ─────────────────────────────────────
  'india':      ['pakistan', 'bangladesh', 'sri-lanka', 'nepal', 'bhutan'],
  'pakistan':   ['india', 'bangladesh', 'united-arab-emirates', 'saudi-arabia', 'nepal'],
  'bangladesh': ['india', 'pakistan', 'nepal', 'bhutan', 'sri-lanka'],
  'sri-lanka':  ['india', 'bangladesh', 'nepal', 'maldives', 'malaysia'],
  'nepal':      ['india', 'bhutan', 'bangladesh', 'pakistan', 'sri-lanka'],
  'bhutan':     ['nepal', 'india', 'bangladesh', 'sri-lanka', 'thailand'],
  'maldives':   ['sri-lanka', 'india', 'mauritius', 'seychelles', 'thailand'],

  // ── Oceania ────────────────────────────────────────
  'australia':    ['new-zealand', 'fiji', 'singapore', 'indonesia', 'japan'],
  'new-zealand':  ['australia', 'fiji', 'singapore', 'japan', 'united-kingdom'],
  'fiji':         ['australia', 'new-zealand', 'singapore', 'philippines', 'indonesia'],

  // ── North America ──────────────────────────────────
  'united-states': ['canada', 'mexico', 'united-kingdom', 'australia', 'germany'],
  'canada':        ['united-states', 'united-kingdom', 'australia', 'ireland', 'france'],

  // ── Central America & Caribbean ────────────────────
  'mexico':              ['united-states', 'guatemala', 'belize', 'costa-rica', 'colombia'],
  'guatemala':           ['mexico', 'el-salvador', 'honduras', 'belize', 'nicaragua'],
  'el-salvador':         ['guatemala', 'honduras', 'nicaragua', 'costa-rica', 'mexico'],
  'honduras':            ['el-salvador', 'guatemala', 'nicaragua', 'belize', 'costa-rica'],
  'belize':              ['guatemala', 'mexico', 'honduras', 'jamaica', 'costa-rica'],
  'nicaragua':           ['honduras', 'costa-rica', 'el-salvador', 'guatemala', 'panama'],
  'costa-rica':          ['panama', 'nicaragua', 'colombia', 'el-salvador', 'guatemala'],
  'panama':              ['costa-rica', 'colombia', 'mexico', 'nicaragua', 'ecuador'],
  'jamaica':             ['bahamas', 'dominican-republic', 'trinidad-and-tobago', 'barbados', 'puerto-rico'],
  'trinidad-and-tobago': ['barbados', 'jamaica', 'dominican-republic', 'colombia', 'panama'],
  'barbados':            ['trinidad-and-tobago', 'jamaica', 'dominican-republic', 'bahamas', 'puerto-rico'],
  'dominican-republic':  ['puerto-rico', 'bahamas', 'jamaica', 'barbados', 'trinidad-and-tobago'],
  'bahamas':             ['cuba', 'jamaica', 'dominican-republic', 'puerto-rico', 'united-states'],
  'puerto-rico':         ['dominican-republic', 'cuba', 'bahamas', 'jamaica', 'barbados'],
  'cuba':                ['dominican-republic', 'jamaica', 'bahamas', 'puerto-rico', 'mexico'],

  // ── South America ──────────────────────────────────
  'brazil':    ['argentina', 'uruguay', 'colombia', 'chile', 'portugal'],
  'argentina': ['uruguay', 'chile', 'brazil', 'paraguay', 'colombia'],
  'uruguay':   ['argentina', 'brazil', 'chile', 'paraguay', 'colombia'],
  'chile':     ['argentina', 'peru', 'uruguay', 'colombia', 'brazil'],
  'colombia':  ['ecuador', 'peru', 'panama', 'mexico', 'brazil'],
  'peru':      ['colombia', 'ecuador', 'chile', 'brazil', 'argentina'],
  'ecuador':   ['colombia', 'peru', 'chile', 'panama', 'costa-rica'],
  'paraguay':  ['argentina', 'uruguay', 'brazil', 'chile', 'peru'],
  'bolivia':   ['peru', 'chile', 'argentina', 'paraguay', 'ecuador'],

  // ── Southern Africa (continued) ────────────────────
  'zambia':     ['botswana', 'namibia', 'south-africa', 'tanzania', 'uganda'],

  // ── European Microstates (continued) ───────────────
  'san-marino': ['italy', 'monaco', 'andorra', 'liechtenstein', 'switzerland'],
};

/**
 * Get related countries for a given country slug.
 * Filters out any slugs that don't exist in the countries array.
 */
export function getRelatedCountries(slug, countriesList) {
  const slugs = relatedCountries[slug] || [];
  return slugs
    .map(s => countriesList.find(c => c.slug === s))
    .filter(Boolean);
}
