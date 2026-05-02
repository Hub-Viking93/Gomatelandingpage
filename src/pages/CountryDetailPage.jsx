import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  Globe,
  Clock,
  Wallet,
  ShieldCheck,
  Languages,
  ExternalLink,
  Info,
  Phone,
  Siren,
  Home,
  Briefcase,
  Scale,
  Stethoscope,
  Plane,
  Map as MapIcon,
  Sun,
  Coins,
  Train,
  Wifi,
  AlertTriangle,
  XCircle,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { APP_URL } from '@/lib/config';
import { countries } from '@/data/countries/index';
import { optimizeImageUrl } from '@/utils/optimizeImageUrl';
import { getRelocationRealities } from '@/data/countries/relocation_realities';
import { getRelatedCountries } from '@/data/countries/relatedCountries';
import CountryPageSidebar from '@/components/CountryPageSidebar';
import CountrySectionRenderer, { getSectionsForGroup } from '@/components/CountrySectionRenderer';
import Breadcrumb from '@/components/Breadcrumb';

const CountryDetailPage = () => {
  const { slug } = useParams();
  
  // Find country data
  const country = countries.find(c => c.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!country) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-serif font-bold text-stone-900 mb-4">Relocation Guide Not Found</h1>
        <Link to="/country-guides">
          <Button variant="outline">Return to Guides</Button>
        </Link>
      </div>
    );
  }

const getFlagUrl = () => {
  const map = {
    sweden: 'se',
    norway: 'no',
    denmark: 'dk',
    iceland: 'is',
    finland: 'fi',

    germany: 'de',
    poland: 'pl',
    switzerland: 'ch',
    greece: 'gr',
    spain: 'es',
    portugal: 'pt',
    netherlands: 'nl',
    austria: 'at',
    'czech-republic': 'cz',
    italy: 'it',
    belgium: 'be',
    croatia: 'hr',
    slovenia: 'si',
    liechtenstein: 'li',
    serbia: 'rs',
    'united-kingdom': 'gb',
    hungary: 'hu',
    romania: 'ro',
    bulgaria: 'bg',
    slovakia: 'sk',
    ireland: 'ie',
    france: 'fr',
    cyprus: 'cy',
    estonia: 'ee',
    latvia: 'lv',
    lithuania: 'lt',
    luxembourg: 'lu',
    malta: 'mt',

    'united-states': 'us',
    canada: 'ca',
    mexico: 'mx',
    brazil: 'br',
    chile: 'cl',
    argentina: 'ar',
    panama: 'pa',
    'costa-rica': 'cr',
    colombia: 'co',
    uruguay: 'uy',
    peru: 'pe',
    ecuador: 'ec',
    paraguay: 'py',
    nicaragua: 'ni',
    guatemala: 'gt',

    japan: 'jp',
    'south-korea': 'kr',
    singapore: 'sg',
    thailand: 'th',
    vietnam: 'vn',
    malaysia: 'my',
    'hong-kong': 'hk',
    taiwan: 'tw',
    indonesia: 'id',
    philippines: 'ph',
    india: 'in',
    'sri-lanka': 'lk',
    nepal: 'np',

    'united-arab-emirates': 'ae',
    qatar: 'qa',

    'south-africa': 'za',
    morocco: 'ma',
    egypt: 'eg',
    tunisia: 'tn',
    kenya: 'ke',

    australia: 'au',
    'new-zealand': 'nz',
    jamaica: 'jm',
    'trinidad-and-tobago': 'tt',
    barbados: 'bb',
    'dominican-republic': 'do',
    turkey: 'tr',
    georgia: 'ge',
    cambodia: 'kh',
    montenegro: 'me',
    china: 'cn',
    'saudi-arabia': 'sa',
    albania: 'al',
    israel: 'il',
    mauritius: 'mu',
    bahrain: 'bh',

    // Batch 1: South/Central Asia
    pakistan: 'pk',
    bangladesh: 'bd',
    kazakhstan: 'kz',
    uzbekistan: 'uz',
    armenia: 'am',

    // Batch 2: Europe/Balkans
    ukraine: 'ua',
    'bosnia-and-herzegovina': 'ba',
    'north-macedonia': 'mk',
    moldova: 'md',
    monaco: 'mc',

    // Batch 3: Africa
    nigeria: 'ng',
    ghana: 'gh',
    rwanda: 'rw',
    tanzania: 'tz',
    namibia: 'na',

    // Batch 4: Middle East + Islands
    oman: 'om',
    jordan: 'jo',
    kuwait: 'kw',
    maldives: 'mv',
    fiji: 'fj',

    // Batch 5: Caucasus/Central Asia/South Asia/Middle East
    azerbaijan: 'az',
    kyrgyzstan: 'kg',
    mongolia: 'mn',
    bhutan: 'bt',
    lebanon: 'lb',

    // Batch 6: East/Southern Africa
    ethiopia: 'et',
    uganda: 'ug',
    botswana: 'bw',
    madagascar: 'mg',
    seychelles: 'sc',

    // Batch 7: West Africa + European microstates
    'cote-divoire': 'ci',
    senegal: 'sn',
    'cape-verde': 'cv',
    andorra: 'ad',
    kosovo: 'xk',

    // Batch 8: Central America + Caribbean
    'el-salvador': 'sv',
    honduras: 'hn',
    belize: 'bz',
    bahamas: 'bs',
    'puerto-rico': 'pr',
    cuba: 'cu',

    // Batch 10: Regional gap-fills
    laos: 'la',
    bolivia: 'bo',
    zambia: 'zm',
    'san-marino': 'sm'
  };

  const code = map[country.id];
  return code ? `https://flagcdn.com/w160/${code}.png` : '';
};

  const RelocationRealitiesBlock = ({ countryData }) => {
    const realities = getRelocationRealities(countryData);
    if (!realities) return null;

    const sections = [
      { title: "Life & Economics", icon: Coins, text: realities.lifeEconomics },
      { title: "Housing Reality", icon: Home, text: realities.housingLivingReality },
      { title: "Work & Income", icon: Briefcase, text: realities.workIncomeReality },
      { title: "Taxes & Society", icon: Scale, text: realities.taxesSocialSystem },
      { title: "Healthcare System", icon: Stethoscope, text: realities.healthcareReality },
      { title: "Living Environment – Transportation", icon: Train, text: realities.transportationMobility },
      { title: "Living Environment – Connectivity", icon: Wifi, text: realities.internationalConnectivity },
      { title: "Climate & Seasons", icon: Sun, text: realities.climateSeasons },
      { title: "Travel & Leisure", icon: MapIcon, text: realities.travelExploration }
    ];

    return (
      <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-12">
        <div className="bg-stone-900 p-6">
          <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-3">
            <Info className="text-sage-400" /> Relocation Realities
          </h2>
          <p className="text-stone-300 text-sm mt-1">Unfiltered insights into daily life and structural realities.</p>
        </div>
        <div className="divide-y divide-stone-100">
          {sections.map((section, idx) => (
            <div key={idx} className="p-6 hover:bg-stone-50 transition-colors">
              <div className="flex gap-4">
                <div className="mt-1 text-sage-600 shrink-0">
                  <section.icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wide mb-2">
                    {section.title}
                  </h3>
                  <p className="text-stone-700 leading-relaxed text-base">
                    {section.text || "Information currently being updated for this region."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const breadcrumbItems = [
    { label: 'Relocation Guides', path: '/country-guides' },
    { label: country.name, path: null }
  ];

  return (
    <>
      <Helmet>
        <title>Moving to {country.name} — Visa, Housing &amp; Relocation Guide | GoMate</title>
        <meta name="description" content={`Everything you need to know about relocating to ${country.name}. Visas, housing, healthcare, work, cost of living, and practical admin requirements.`} />
        <link rel="canonical" href={`https://gomaterelocate.com/country-guides/${country.slug}`} />
        <meta property="og:title" content={`Moving to ${country.name} — Relocation Guide | GoMate`} />
        <meta property="og:description" content={`Everything you need to know about relocating to ${country.name}. Visas, housing, healthcare, work, and practical admin.`} />
        <meta property="og:url" content={`https://gomaterelocate.com/country-guides/${country.slug}`} />
        <meta property="og:image" content={optimizeImageUrl(country.heroImage, { width: 1200 })} />
        <meta property="og:locale" content="en_US" />
        {/* Preload hero image to improve LCP */}
        <link rel="preload" as="image" href={optimizeImageUrl(country.heroImage, { width: 1600 })} fetchpriority="high" />
      </Helmet>

      <main className="bg-stone-50 min-h-screen">
        {/* Navigation Breadcrumb - Replaced manual link with Breadcrumb component */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden">
           <div className="absolute inset-0 bg-stone-900/40 z-10"></div>
           <img
             src={optimizeImageUrl(country.heroImage, { width: 1600 })}
             alt={`${country.name} — relocation guide landscape`}
             className="absolute inset-0 w-full h-full object-cover"
             loading="eager"
             fetchpriority="high"
             width={1200}
             height={500}
           />
           <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
               >
                 <div className="flex items-center gap-4 mb-4">
                   <img
                     src={getFlagUrl()}
                     alt={country.flagAlt}
                     className="w-12 h-auto rounded shadow-sm"
                     width={48}
                     height={32}
                   />
                   <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider rounded-full border border-white/30">
                     {country.region}
                   </span>
                 </div>
                 <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-4 drop-shadow-md">
                   Moving to {country.name}
                 </h1>
                 <p className="text-xl text-stone-100 max-w-2xl font-light leading-relaxed drop-shadow-sm">
                   {country.shortDescription}
                 </p>
               </motion.div>
             </div>
           </div>
        </div>

        {/* Layout with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 -mt-8 relative z-30">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
            <aside>
              <CountryPageSidebar />
            </aside>

            <div className="space-y-12">
              {/* Quick Overview Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
              >
                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-100">
                  <div className="flex items-center gap-2 text-stone-400 mb-2">
                    <Globe size={18} />
                    <span className="text-xs font-semibold uppercase tracking-wider">EU Status</span>
                  </div>
                  <p className="font-medium text-stone-900">{country.overview.euStatus}</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-100">
                  <div className="flex items-center gap-2 text-stone-400 mb-2">
                    <Clock size={18} />
                    <span className="text-xs font-semibold uppercase tracking-wider">Stay Length</span>
                  </div>
                  <p className="font-medium text-stone-900">{country.overview.stayLength}</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-100">
                  <div className="flex items-center gap-2 text-stone-400 mb-2">
                    <ShieldCheck size={18} />
                    <span className="text-xs font-semibold uppercase tracking-wider">Complexity</span>
                  </div>
                  <p className="font-medium text-stone-900">{country.complexity}</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-100">
                  <div className="flex items-center gap-2 text-stone-400 mb-2">
                    <Languages size={18} />
                    <span className="text-xs font-semibold uppercase tracking-wider">Primary Language</span>
                  </div>
                  <p className="font-medium text-stone-900 text-sm">{country.overview.primaryLanguages}</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-100 lg:col-span-2">
                  <div className="flex items-center gap-2 text-stone-400 mb-2">
                    <Wallet size={18} />
                    <span className="text-xs font-semibold uppercase tracking-wider">Cost of Living</span>
                  </div>
                  <p className="font-medium text-stone-900">{country.overview.costOfLiving}</p>
                </div>
              </motion.div>

              {/* Intro Text */}
              <div className="bg-white rounded-xl p-8 border border-stone-100 shadow-sm">
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 border-b border-stone-200 pb-4">
                  Country at a Glance
                </h2>
                <p className="text-stone-700 leading-relaxed text-lg">
                  {country.atAGlance}
                </p>
              </div>

              {/* WHO THIS COUNTRY IS FOR */}
              {country.whoThisCountryIsFor && (
                <div id="who-is-it-for" className="scroll-mt-32">
                  <div className="bg-gradient-to-br from-sage-50 to-emerald-50 rounded-xl p-8 border border-sage-200 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 bg-sage-100 rounded-lg shrink-0">
                        <Target size={22} className="text-sage-700" />
                      </div>
                      <div>
                        <h2 className="text-xl font-serif font-bold text-stone-900 mb-3">Who This Country Is For</h2>
                        <p className="text-stone-700 leading-relaxed text-lg">{country.whoThisCountryIsFor}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* RELOCATION REALITIES BLOCK */}
              <div id="realities">
                <RelocationRealitiesBlock countryData={country} />
              </div>

              {/* SECTION: VISA & LEGAL */}
              <div id="visa" className="scroll-mt-32">
                <CountrySectionRenderer country={getSectionsForGroup(country, 'visa')} />
                
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-6">Specific Visa Types</h3>
                <div className="grid gap-6">
                  {country.visas.map((visa, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm hover:border-sage-300 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-stone-900">{visa.name}</h3>
                        <span className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded font-medium">
                          {visa.duration}
                        </span>
                      </div>
                      <p className="text-sm text-sage-700 font-medium mb-3">{visa.targetAudience}</p>
                      <p className="text-stone-600 mb-4 text-sm">{visa.useCase}</p>
                      <a 
                        href={visa.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-sage-600 hover:text-sage-700 hover:underline"
                      >
                        Official Info <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: WORK & INCOME */}
              <div id="work-income" className="scroll-mt-32">
                <CountrySectionRenderer country={getSectionsForGroup(country, 'work-income')} />
              </div>

              {/* SECTION: HOUSING */}
              <div id="housing" className="scroll-mt-32">
                <CountrySectionRenderer country={getSectionsForGroup(country, 'housing')} />
              </div>

              {/* SECTION: HEALTHCARE */}
              <div id="healthcare" className="scroll-mt-32">
                 <CountrySectionRenderer country={getSectionsForGroup(country, 'healthcare')} />
              </div>

              {/* SECTION: DAILY LIFE */}
              <div id="daily-life" className="scroll-mt-32">
                <CountrySectionRenderer country={getSectionsForGroup(country, 'daily-life')} />
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-stone-900 mb-6">Local Administrative Requirements</h3>
                  <div className="space-y-6">
                    {country.requirements.map((req, idx) => (
                      <div key={idx} className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-6 h-6 rounded-full bg-sage-200 text-sage-800 flex items-center justify-center text-xs font-bold">{idx+1}</div>
                          <h4 className="font-bold text-stone-900">{req.title}</h4>
                        </div>
                        <p className="text-sm text-stone-700 mb-3">{req.explanation}</p>
                        <div className="text-xs bg-amber-50 text-amber-900 p-2 rounded border border-amber-100">
                          <strong>Important:</strong> {req.importance}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION: TRAVEL & MOBILITY */}
              <div id="travel-mobility" className="scroll-mt-32">
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-2">
                  <Plane size={24} /> Travel & Mobility
                </h2>
                <CountrySectionRenderer country={getSectionsForGroup(country, 'travel-mobility')} />
              </div>
              
              {/* SECTION: IMPORTANT CONSIDERATIONS */}
              {country.considerations && country.considerations.length > 0 && (
                <div id="considerations" className="scroll-mt-32">
                  <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-2">
                    <AlertTriangle size={24} className="text-amber-500" /> Important Considerations
                  </h2>
                  <div className="grid gap-4">
                    {country.considerations.map((item, idx) => (
                      <div key={idx} className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-4">
                        <div className="mt-0.5 shrink-0">
                          <div className="w-7 h-7 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center text-xs font-bold">
                            {idx + 1}
                          </div>
                        </div>
                        <p className="text-stone-800 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION: COMMON MISTAKES */}
              {country.mistakes && country.mistakes.length > 0 && (
                <div id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-2">
                    <XCircle size={24} className="text-rose-500" /> Common Mistakes to Avoid
                  </h2>
                  <div className="bg-white rounded-xl border border-rose-200 shadow-sm overflow-hidden">
                    {country.mistakes.map((item, idx) => (
                      <div key={idx} className={cn(
                        "p-5 flex gap-4",
                        idx !== country.mistakes.length - 1 && "border-b border-rose-100"
                      )}>
                        <div className="mt-0.5 shrink-0">
                          <XCircle size={18} className="text-rose-400" />
                        </div>
                        <p className="text-stone-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION: SERVICE DIRECTORY */}
              {country.serviceDirectory && (
                <div id="service-directory" className="scroll-mt-32">
                  <CountrySectionRenderer country={getSectionsForGroup(country, 'service-directory')} />
                </div>
              )}

              {/* SECTION: EMERGENCY */}
              <div id="emergency-services" className="scroll-mt-32">
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-2">
                  <Siren className="text-rose-600" /> Emergency Services
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {country.emergency && country.emergency.map((item, idx) => (
                    <div key={idx} className="bg-rose-50 border border-rose-100 rounded-lg p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-rose-700">{item.number}</span>
                        <Phone size={18} className="text-rose-400" />
                      </div>
                      <h4 className="font-bold text-stone-900 mb-1">{item.service}</h4>
                      <p className="text-sm text-stone-600 leading-snug">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: OFFICIAL SOURCES */}
              <div id="official-sources" className="scroll-mt-32">
                <CountrySectionRenderer country={getSectionsForGroup(country, 'official-sources')} />
                
                {country.embassies && (
                  <div className="mt-8 bg-stone-50 rounded-xl p-8 border border-stone-200">
                    <h3 className="text-xl font-bold text-stone-900 mb-4">Consular Services</h3>
                    <p className="text-stone-700 leading-relaxed mb-6">
                      {country.embassies.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href={country.embassies.directoryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-stone-300 rounded-lg text-stone-700 font-medium hover:bg-stone-50 transition-all shadow-sm"
                      >
                        <Globe size={18} />
                        Embassy Directory
                      </a>
                      <a 
                        href={country.embassies.mfaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-sage-600 text-white rounded-lg font-medium hover:bg-sage-700 transition-all shadow-sm"
                      >
                        <ExternalLink size={18} />
                        Ministry of Foreign Affairs
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Related Countries */}
              {(() => {
                const related = getRelatedCountries(country.slug, countries);
                if (related.length === 0) return null;

                const flagMap = {
                  sweden:'se',norway:'no',denmark:'dk',iceland:'is',finland:'fi',germany:'de',poland:'pl',
                  switzerland:'ch',greece:'gr',spain:'es',portugal:'pt',netherlands:'nl',austria:'at',
                  'czech-republic':'cz',italy:'it',belgium:'be',croatia:'hr',slovenia:'si',liechtenstein:'li',
                  serbia:'rs','united-kingdom':'gb',hungary:'hu',romania:'ro',bulgaria:'bg',slovakia:'sk',
                  ireland:'ie',france:'fr',cyprus:'cy',estonia:'ee',latvia:'lv',lithuania:'lt',luxembourg:'lu',
                  malta:'mt','united-states':'us',canada:'ca',mexico:'mx',brazil:'br',chile:'cl',argentina:'ar',
                  panama:'pa','costa-rica':'cr',colombia:'co',uruguay:'uy',peru:'pe',ecuador:'ec',paraguay:'py',
                  nicaragua:'ni',guatemala:'gt',japan:'jp','south-korea':'kr',singapore:'sg',thailand:'th',
                  vietnam:'vn',malaysia:'my','hong-kong':'hk',taiwan:'tw',indonesia:'id',philippines:'ph',
                  india:'in','sri-lanka':'lk',nepal:'np','united-arab-emirates':'ae',qatar:'qa',
                  'south-africa':'za',morocco:'ma',egypt:'eg',tunisia:'tn',kenya:'ke',australia:'au',
                  'new-zealand':'nz',jamaica:'jm','trinidad-and-tobago':'tt',barbados:'bb',
                  'dominican-republic':'do',turkey:'tr',georgia:'ge',cambodia:'kh',montenegro:'me',
                  china:'cn','saudi-arabia':'sa',albania:'al',israel:'il',mauritius:'mu',bahrain:'bh',
                  // Batch 1: South/Central Asia
                  pakistan:'pk',bangladesh:'bd',kazakhstan:'kz',uzbekistan:'uz',armenia:'am',
                  // Batch 2: Europe/Balkans
                  ukraine:'ua','bosnia-and-herzegovina':'ba','north-macedonia':'mk',moldova:'md',monaco:'mc',
                  // Batch 3: Africa
                  nigeria:'ng',ghana:'gh',rwanda:'rw',tanzania:'tz',namibia:'na',
                  // Batch 4: Middle East + Islands
                  oman:'om',jordan:'jo',kuwait:'kw',maldives:'mv',fiji:'fj',
                  // Batch 5: Caucasus/Central Asia/South Asia/Middle East
                  azerbaijan:'az',kyrgyzstan:'kg',mongolia:'mn',bhutan:'bt',lebanon:'lb',
                  // Batch 6: East/Southern Africa
                  ethiopia:'et',uganda:'ug',botswana:'bw',madagascar:'mg',seychelles:'sc',
                  // Batch 7: West Africa + European microstates
                  'cote-divoire':'ci',senegal:'sn','cape-verde':'cv',andorra:'ad',kosovo:'xk',
                  // Batch 8: Central America + Caribbean
                  'el-salvador':'sv',honduras:'hn',belize:'bz',bahamas:'bs','puerto-rico':'pr',cuba:'cu'
                };

                return (
                  <div className="mt-12">
                    <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2 flex items-center gap-2">
                      <Globe size={24} /> Related Country Guides
                    </h2>
                    <p className="text-stone-500 mb-6">Similar destinations you might also consider.</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {related.map((rc) => (
                        <Link
                          key={rc.slug}
                          to={`/country-guides/${rc.slug}`}
                          className="group bg-white rounded-xl border border-stone-200 p-4 hover:border-sage-300 hover:shadow-md transition-all"
                        >
                          <div className="flex items-center gap-3">
                            {flagMap[rc.id] && (
                              <img
                                src={`https://flagcdn.com/w80/${flagMap[rc.id]}.png`}
                                alt={`${rc.name} flag`}
                                className="w-8 h-auto rounded shadow-sm"
                                width={32}
                                height={21}
                                loading="lazy"
                              />
                            )}
                            <div>
                              <h3 className="font-semibold text-stone-900 group-hover:text-sage-700 transition-colors">
                                {rc.name}
                              </h3>
                              <p className="text-xs text-stone-500">{rc.complexity} complexity</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <Link to="/country-guides" className="text-sm font-medium text-sage-600 hover:text-sage-700 hover:underline">
                        Browse all country guides &rarr;
                      </Link>
                    </div>
                  </div>
                );
              })()}

              {/* App Bridge */}
              <section className="bg-stone-900 rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden mt-12">
                <div className="relative z-10">
                  <h2 className="text-3xl font-serif font-bold mb-4">
                    Take this guide with you
                  </h2>
                  <p className="text-stone-300 max-w-lg mx-auto mb-8 text-lg">
                    Save {country.name} to your favorites, access offline maps, and get personalized recommendations based on your relocation goals on the GoMate app.
                  </p>
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                    <Button
                      className="bg-sage-600 hover:bg-sage-500 text-white px-8 py-6 text-lg rounded-full transition-all hover:shadow-lg hover:scale-105"
                    >
                      Open in App
                    </Button>
                  </a>
                </div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-sage-800/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </section>

            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CountryDetailPage;