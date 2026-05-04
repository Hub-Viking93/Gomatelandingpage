import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Search, 
  Wallet, 
  Globe, 
  Smartphone, 
  Landmark, 
  MapPin, 
  FileText,
  Key,
  Home,
  Heart,
  Plane,
  Train,
  Compass,
  Users,
  BookOpen
} from 'lucide-react';
import { getExtendedData } from '@/data/countries/extended_data';
import { getRelocationRealities } from '@/data/countries/relocation_realities';

const SectionWrapper = ({ title, icon: Icon, children, className }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`bg-white rounded-xl p-8 border border-stone-200 shadow-sm mb-8 ${className}`}
  >
    <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
      {Icon && <div className="p-2 bg-sage-50 rounded-lg text-sage-600"><Icon size={24} /></div>}
      <h3 className="text-2xl font-serif font-bold text-stone-900">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const hasValue = (val) => {
  if (val === null || val === undefined) return false;
  if (typeof val === 'string') return val.trim().length > 0;
  if (Array.isArray(val)) return val.length > 0;
  if (typeof val === 'object') {
    // Check if at least one value in the object is not empty
    return Object.values(val).some(v => hasValue(v));
  }
  return true;
};

const CountrySectionRenderer = ({ country }) => {
  // Pass country.id to ensure fallback logic in extended_data works (e.g., getting the correct region)
  const extended = getExtendedData(country.id);
  const realities = getRelocationRealities(country);

  // Helper to resolve data with priority: Country -> Extended/Region -> Realities
  const resolve = (fieldName, type = 'complex', realityKey = null) => {
    // 0. Filter: If field is NOT in the passed 'country' prop object, we assume this section 
    // shouldn't be rendered in this specific context (e.g., rendering only housing section).
    // This prevents "rendering everything everywhere" when we only want specific groups.
    if (!Object.prototype.hasOwnProperty.call(country, fieldName)) {
      return null;
    }

    // 1. Country specific (HIGHEST PRIORITY)
    // Always use data from the specific country file if it exists and is populated.
    if (hasValue(country[fieldName])) {
      return country[fieldName];
    }

    // 2. Extended data (Region/Global Defaults & Overrides)
    // This includes any country-specific overrides defined inside extended_data.js
    if (hasValue(extended[fieldName])) {
      return extended[fieldName];
    }

    // 3. Relocation Realities (Last Resort Fallbacks)
    if (realityKey && hasValue(realities[realityKey])) {
      // If type is complex but reality is string, we might need to adapt
      if (type === 'complex' && typeof realities[realityKey] === 'string') {
        if (fieldName === 'salaryReality') return { narrative: realities[realityKey] };
        // Simple adaptation for housing if needed
        if (fieldName === 'housingSystem') return { overview: realities[realityKey] };
      }
      return realities[realityKey];
    }
    
    return null;
  };

  const jobsAndIncome = resolve('jobsAndIncome', 'complex');
  const salaryReality = resolve('salaryReality', 'complex', 'lifeEconomics'); 
  const housingSystem = resolve('housingSystem', 'complex', 'housingLivingReality'); 
  
  const healthcareReality = resolve('healthcareReality', 'simple', 'healthcareReality');
  const transportationMobility = resolve('transportationMobility', 'simple', 'transportationMobility');
  const internationalConnectivity = resolve('internationalConnectivity', 'simple', 'internationalConnectivity');
  const travelExploration = resolve('travelExploration', 'simple', 'travelExploration');
  const culture = resolve('culture', 'complex'); 
  const digitalLife = resolve('digitalLife', 'complex');
  const visaPathways = resolve('visaPathways', 'complex');
  const sources = resolve('sources', 'array');
  const serviceDirectory = resolve('serviceDirectory', 'complex');

  return (
    <>
      {/* 1. Jobs & Income */}
      {jobsAndIncome && (
        <SectionWrapper title="Where People Find Jobs & Income" icon={Search}>
          <p className="text-stone-700 mb-6 leading-relaxed">{jobsAndIncome.overview}</p>
          {jobsAndIncome.platforms && (
            <div className="grid sm:grid-cols-2 gap-4">
              {jobsAndIncome.platforms.map((platform, idx) => (
                <a 
                  key={idx} 
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 border border-stone-200 rounded-lg hover:border-sage-400 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-stone-900 group-hover:text-sage-700">{platform.name}</h4>
                    <Globe size={14} className="text-stone-300 group-hover:text-sage-500" />
                  </div>
                  <p className="text-xs text-stone-500">{platform.description}</p>
                </a>
              ))}
            </div>
          )}
          {/* Support legacy/alternative structure e.g. whereToLook string array */}
          {jobsAndIncome.whereToLook && !jobsAndIncome.platforms && (
             <div className="flex flex-wrap gap-2">
                {jobsAndIncome.whereToLook.map((site, idx) => (
                  <span key={idx} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm font-medium border border-stone-200">
                    {site}
                  </span>
                ))}
             </div>
          )}
        </SectionWrapper>
      )}

      {/* 2. Salary Reality */}
      {salaryReality && (
        <SectionWrapper title="Salary & Income Reality" icon={Wallet}>
          <div className="prose prose-stone max-w-none">
            <p className="text-stone-700 leading-relaxed text-lg italic border-l-4 border-sage-200 pl-4 bg-stone-50 py-2">
              "{salaryReality.narrative || salaryReality.overview || (typeof salaryReality === 'string' ? salaryReality : '')}"
            </p>
             {/* Handle realityChecks array if present */}
             {salaryReality.realityChecks && salaryReality.realityChecks.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {salaryReality.realityChecks.map((check, idx) => (
                    <li key={idx} className="flex gap-2 text-stone-700">
                      <span className="text-sage-500 font-bold">•</span> {check}
                    </li>
                  ))}
                </ul>
             )}
          </div>
        </SectionWrapper>
      )}

      {/* 3. Housing System */}
      {housingSystem && (
        <SectionWrapper title="Where People Actually Find Housing" icon={Home}>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                <MapPin size={18} className="text-amber-500" /> How it works
              </h4>
              <p className="text-stone-700 leading-relaxed">{housingSystem.overview}</p>
            </div>
            {housingSystem.expectations && (
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2 text-sm uppercase tracking-wide">Expectations</h4>
                <p className="text-blue-800/80 text-sm leading-relaxed">{housingSystem.expectations}</p>
              </div>
            )}
          </div>
        </SectionWrapper>
      )}
      
      {/* 4. Healthcare Reality */}
      {healthcareReality && (
        <SectionWrapper title="Healthcare Reality" icon={Heart}>
          <p className="text-stone-700 leading-relaxed">{typeof healthcareReality === 'string' ? healthcareReality : healthcareReality.text}</p>
        </SectionWrapper>
      )}

      {/* 5. Visa Pathways */}
      {visaPathways && (
        <SectionWrapper title="Visa & Legal Pathways Overview" icon={FileText}>
          <p className="text-stone-700 mb-4">{visaPathways.overview}</p>

          {visaPathways.agencyName && visaPathways.agencyUrl && (
            <a
              href={visaPathways.agencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-sage-600 hover:text-sage-700 hover:underline mb-6"
            >
              Official source: {visaPathways.agencyName}
            </a>
          )}

          {(visaPathways.pathways ?? []).length > 0 ? (
            <div className="space-y-4">
              {(visaPathways.pathways ?? []).map((path, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 bg-stone-50 rounded-lg border border-stone-100"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">{path.type}</h4>
                    <p className="text-sm text-stone-600 leading-relaxed">{path.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-stone-50 p-4 rounded-lg border border-stone-100 text-sm text-stone-600">
              No high-level pathways listed yet for this country. Use the official source above to review all visa categories.
            </div>
          )}
        </SectionWrapper>
      )}

      {/* 6. Digital Life */}
      {digitalLife && (
        <SectionWrapper title="How Daily Life Is Managed Digitally" icon={Smartphone}>
          <p className="text-stone-700 leading-relaxed">{digitalLife.narrative || digitalLife.overview}</p>
          {digitalLife.essentials && digitalLife.essentials.length > 0 && (
             <div className="mt-4">
               <h4 className="font-bold text-stone-900 mb-2 text-sm">Essentials:</h4>
               <div className="flex flex-wrap gap-2">
                 {digitalLife.essentials.map((item, i) => (
                   <span key={i} className="px-3 py-1 bg-stone-100 rounded-full text-sm text-stone-700">{item}</span>
                 ))}
               </div>
             </div>
          )}
        </SectionWrapper>
      )}
      
      {/* 7. Culture */}
      {culture && (
        <SectionWrapper title="Cultural Nuances" icon={Users}>
           <p className="text-stone-700 leading-relaxed mb-4">{culture.text}</p>
           {culture.highlights && (
             <ul className="grid sm:grid-cols-2 gap-3">
               {culture.highlights.map((item, i) => (
                 <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                    <span className="text-sage-500 mt-1">•</span>
                    <span>{item}</span>
                 </li>
               ))}
             </ul>
           )}
        </SectionWrapper>
      )}
      
      {/* 8. Mobility & Travel */}
      {(transportationMobility || internationalConnectivity || travelExploration) && (
        <SectionWrapper title="Mobility & Exploration" icon={Compass}>
           <div className="space-y-6 divide-y divide-stone-100">
              {transportationMobility && (
                <div className="pt-4 first:pt-0">
                   <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                     <Train size={18} className="text-stone-400" /> Getting Around
                   </h4>
                   <p className="text-stone-700 leading-relaxed">{transportationMobility}</p>
                </div>
              )}
              {internationalConnectivity && (
                <div className="pt-4">
                   <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                     <Plane size={18} className="text-stone-400" /> Connections
                   </h4>
                   <p className="text-stone-700 leading-relaxed">{internationalConnectivity}</p>
                </div>
              )}
              {travelExploration && (
                <div className="pt-4">
                   <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                     <Compass size={18} className="text-stone-400" /> Exploration
                   </h4>
                   <p className="text-stone-700 leading-relaxed">{travelExploration}</p>
                </div>
              )}
           </div>
        </SectionWrapper>
      )}

      {/* 9. Service Directory */}
      {serviceDirectory && (
        <SectionWrapper title={serviceDirectory.title} icon={BookOpen}>
          {serviceDirectory.disclaimer && (
            <div className="bg-amber-50 border border-amber-100 text-amber-900 text-sm p-4 rounded-lg mb-6">
              <strong>Note:</strong> {serviceDirectory.disclaimer}
            </div>
          )}
          
          <div className="grid gap-6">
            {serviceDirectory.categories.map((category, idx) => (
              <div key={idx} className="border-b border-stone-100 pb-6 last:border-0 last:pb-0">
                <h4 className="font-bold text-stone-900 text-lg mb-1">{category.name}</h4>
                {category.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
                    {category.description}
                  </p>
                )}
                {category.rentalNote && (
                  <p className="text-sm text-stone-500 italic mb-3">{category.rentalNote}</p>
                )}
                
                <ul className="space-y-2 mt-2">
                  {category.providers.map((provider, pIdx) => (
                    <li key={pIdx}>
                      <a 
                        href={provider.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sage-600 hover:text-sage-800 hover:underline font-medium transition-colors"
                      >
                        {provider.name} <ExternalLinkIcon size={12} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* 10. Official Sources */}
      {sources && (
        <SectionWrapper title="Official Sources & Further Reading" icon={Globe}>
          <div className="grid gap-4">
            {sources.map((src, idx) => (
              <a
                key={idx}
                href={src.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-stone-200 rounded-lg hover:border-sage-400 hover:shadow-md transition-all group bg-stone-50 hover:bg-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-stone-900 group-hover:text-sage-700">
                      {src.name}
                    </h4>
                    <p className="text-xs text-stone-500 mt-1">{src.description}</p>
                  </div>

                  {src.category && (
                    <span className="text-xs bg-white text-stone-600 px-2 py-1 rounded font-medium border border-stone-200 whitespace-nowrap">
                      {src.category}
                    </span>
                  )}
                </div>

                <div className="mt-3 inline-flex items-center text-xs font-bold text-sage-600 hover:text-sage-800">
                  Official Site <Globe size={12} className="ml-2" />
                </div>
              </a>
            ))}
          </div>
        </SectionWrapper>
      )}
    </>
  );
};

// Simple Icon component for local use if needed, though Lucide icons are used.
const ExternalLinkIcon = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export const getSectionsForGroup = (country, groupId) => {
  // CRITICAL: We pass the country metadata for lookups, but ONLY the specific fields for the requested group.
  // The renderer uses Object.hasOwnProperty checks to avoid rendering sections that aren't in the passed object.
  const meta = { 
    id: country.id, 
    slug: country.slug, 
    name: country.name, 
    region: country.region 
  };

  switch (groupId) {
    case 'work-income':
      return { 
        ...meta, 
        jobsAndIncome: country.jobsAndIncome, 
        salaryReality: country.salaryReality 
      };
    case 'housing':
      return { 
        ...meta, 
        housingSystem: country.housingSystem 
      };
    case 'visa':
      return { 
        ...meta, 
        visaPathways: country.visaPathways 
      };
    case 'daily-life':
      return { 
        ...meta, 
        digitalLife: country.digitalLife,
        // Removed healthcareReality from here to avoid duplication as it has its own section
        culture: country.culture 
      };
    case 'healthcare':
      return { 
        ...meta, 
        healthcareReality: country.healthcareReality
      };
    case 'travel-mobility':
      return { 
        ...meta, 
        transportationMobility: country.transportationMobility,
        internationalConnectivity: country.internationalConnectivity,
        travelExploration: country.travelExploration
      };
    case 'service-directory':
      return {
        ...meta,
        serviceDirectory: country.serviceDirectory
      };
    case 'official-sources':
      return { 
        ...meta, 
        sources: country.sources 
      };
    default:
      return meta;
  }
};

export default CountrySectionRenderer;