import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, MapPin, Briefcase, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { countries } from '@/data/countries';
import { APP_URL } from '@/lib/config';

// EU/EEA member state IDs — citizens have freedom of movement within the bloc
const EU_EEA_IDS = new Set([
  'sweden', 'norway', 'denmark', 'iceland', 'finland', 'germany', 'france',
  'spain', 'italy', 'netherlands', 'belgium', 'austria', 'portugal', 'greece',
  'poland', 'czech-republic', 'hungary', 'romania', 'bulgaria', 'croatia',
  'slovenia', 'slovakia', 'ireland', 'estonia', 'latvia', 'lithuania',
  'luxembourg', 'malta', 'cyprus', 'liechtenstein'
]);

const PURPOSE_OPTIONS = [
  { id: 'work', label: 'Work', keywords: ['work', 'employ', 'professional', 'skilled', 'staff', 'worker'] },
  { id: 'study', label: 'Study', keywords: ['student', 'stud'] },
  { id: 'retire', label: 'Retire', keywords: ['retire', 'passive income', 'pension'] },
  { id: 'nomad', label: 'Digital Nomad', keywords: ['nomad', 'remote', 'freelance', 'digital'] },
  { id: 'family', label: 'Family Reunion', keywords: ['family', 'spouse', 'reunion'] },
];

function isEuEeaDest(country) {
  const status = country.overview?.euStatus || '';
  return status.includes('EU Member') || status.includes('EEA');
}

function findRelevantVisas(country, purposeId) {
  if (!country.visas || country.visas.length === 0) return [];
  const purpose = PURPOSE_OPTIONS.find(p => p.id === purposeId);
  if (!purpose) return [];

  return country.visas.filter(visa => {
    const ta = (visa.targetAudience || '').toLowerCase();
    const uc = (visa.useCase || '').toLowerCase();
    const name = (visa.name || '').toLowerCase();
    const combined = `${ta} ${uc} ${name}`;
    return purpose.keywords.some(kw => combined.includes(kw));
  });
}

function getFeasibility(citizenshipType, country, purposeId) {
  const destIsEuEea = isEuEeaDest(country);
  const complexity = (country.complexity || 'Medium').toLowerCase();
  const col = country.overview?.costOfLiving || 'Medium';
  const purposeLabel = PURPOSE_OPTIONS.find(p => p.id === purposeId)?.label || purposeId;
  const allVisaNames = (country.visas || []).map(v => v.name);

  // EU/EEA citizen → EU/EEA country = freedom of movement
  if (citizenshipType === 'eu' && destIsEuEea) {
    return {
      level: 'Straightforward',
      color: 'emerald',
      summary: `As an EU/EEA citizen, you have freedom of movement to ${country.name}. No visa needed — just register as a resident after arrival.`,
      visaNote: 'No visa required — freedom of movement.',
      tips: [
        'Register your residency within the required period (usually 3 months)',
        'Get a local ID number for banking, healthcare, and services',
      ],
      costOfLiving: col,
    };
  }

  const relevantVisas = findRelevantVisas(country, purposeId);
  const hasVisaPath = relevantVisas.length > 0;

  // Complexity drives the base level — visa match refines it
  const levelMap = {
    'low': hasVisaPath ? 'Straightforward' : 'Moderate',
    'medium': 'Moderate',
    'medium-high': 'Moderate',
    'high': hasVisaPath ? 'Moderate' : 'Complex',
    'very high': 'Complex',
  };
  const level = levelMap[complexity] || 'Moderate';

  // Build a helpful summary
  let summary;
  if (hasVisaPath) {
    if (level === 'Straightforward') {
      summary = `${country.name} is relatively accessible. A visa pathway exists for ${purposeLabel.toLowerCase()} — the process is straightforward.`;
    } else if (level === 'Moderate') {
      summary = `Moving to ${country.name} for ${purposeLabel.toLowerCase()} is doable with planning. A relevant visa pathway exists — expect some bureaucracy.`;
    } else {
      summary = `${country.name} has strict immigration requirements, but a visa pathway for ${purposeLabel.toLowerCase()} exists. Start early and prepare thoroughly.`;
    }
  } else {
    // No exact match — but still show available options
    if (complexity === 'low' || complexity === 'medium') {
      summary = `${country.name} is generally accessible. No visa specifically labeled for ${purposeLabel.toLowerCase()} was found, but ${allVisaNames.length > 0 ? 'other pathways exist' : 'entry is often straightforward'}. Check the full guide for details.`;
    } else {
      summary = `${country.name} has a stricter immigration system. No specific visa for ${purposeLabel.toLowerCase()} was found in our data — read the full guide for all available pathways.`;
    }
  }

  const colorMap = { 'Straightforward': 'emerald', 'Moderate': 'amber', 'Complex': 'red' };

  // Build tips
  const tips = [];
  if (hasVisaPath) {
    tips.push(`Likely visa: ${relevantVisas[0].name}`);
    if (relevantVisas[0].duration) tips.push(`Duration: ${relevantVisas[0].duration}`);
  } else if (allVisaNames.length > 0) {
    tips.push(`Available visas: ${allVisaNames.slice(0, 3).join(', ')}${allVisaNames.length > 3 ? ` (+${allVisaNames.length - 3} more)` : ''}`);
  }
  if (country.requirements && country.requirements.length > 0) {
    tips.push(`Key requirement: ${country.requirements[0].title}`);
  }

  return {
    level,
    color: colorMap[level] || 'amber',
    summary,
    visaNote: hasVisaPath
      ? relevantVisas.map(v => v.name).join(', ')
      : allVisaNames.length > 0
        ? allVisaNames.join(', ')
        : 'See full guide for visa options',
    tips,
    costOfLiving: col,
  };
}

const SelectDropdown = ({ value, onChange, placeholder, icon: Icon, children }) => (
  <div className="relative">
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
      <Icon size={18} />
    </div>
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full appearance-none bg-white border border-stone-300 rounded-lg pl-10 pr-10 py-3.5 text-stone-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-colors cursor-pointer"
    >
      <option value="">{placeholder}</option>
      {children}
    </select>
    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
      <ChevronDown size={16} />
    </div>
  </div>
);

const CanIMoveWidget = () => {
  const [citizenship, setCitizenship] = useState('');
  const [destinationSlug, setDestinationSlug] = useState('');
  const [purpose, setPurpose] = useState('');

  const sortedCountries = useMemo(
    () => [...countries].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  const destination = useMemo(
    () => countries.find(c => c.slug === destinationSlug),
    [destinationSlug]
  );

  const allFilled = citizenship && destinationSlug && purpose;

  const result = useMemo(() => {
    if (!allFilled || !destination) return null;
    return getFeasibility(citizenship, destination, purpose);
  }, [citizenship, destination, purpose, allFilled]);

  const levelColors = {
    emerald: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      badge: 'bg-emerald-100 text-emerald-800',
      dot: 'bg-emerald-500',
    },
    amber: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      badge: 'bg-amber-100 text-amber-800',
      dot: 'bg-amber-500',
    },
    red: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      badge: 'bg-red-100 text-red-800',
      dot: 'bg-red-500',
    },
  };

  return (
    <section className="bg-white border-b border-stone-200 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-2">
              Can I Move There?
            </h2>
            <p className="text-stone-600">
              3 questions. Instant feasibility check based on real data.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            {/* Citizenship */}
            <SelectDropdown
              value={citizenship}
              onChange={setCitizenship}
              placeholder="Your citizenship"
              icon={Globe}
            >
              <option value="eu">EU / EEA Citizen</option>
              <option value="non-eu">Non-EU Citizen</option>
            </SelectDropdown>

            {/* Destination */}
            <SelectDropdown
              value={destinationSlug}
              onChange={setDestinationSlug}
              placeholder="Where do you want to move?"
              icon={MapPin}
            >
              {sortedCountries.map(c => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </SelectDropdown>

            {/* Purpose */}
            <SelectDropdown
              value={purpose}
              onChange={setPurpose}
              placeholder="Purpose of your move"
              icon={Briefcase}
            >
              {PURPOSE_OPTIONS.map(p => (
                <option key={p.id} value={p.id}>{p.label}</option>
              ))}
            </SelectDropdown>
          </div>

          {/* Result */}
          <AnimatePresence mode="wait">
            {result && (
              <motion.div
                key={`${citizenship}-${destinationSlug}-${purpose}`}
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className={`rounded-xl p-6 border ${levelColors[result.color].bg} ${levelColors[result.color].border}`}>
                  {/* Feasibility badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-2.5 h-2.5 rounded-full ${levelColors[result.color].dot}`} />
                    <span className={`text-sm font-bold px-2.5 py-0.5 rounded-full ${levelColors[result.color].badge}`}>
                      {result.level}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-stone-800 leading-relaxed mb-4">
                    {result.summary}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-5">
                    <div className="flex items-start gap-2 text-sm text-stone-700">
                      <span className="font-medium shrink-0 min-w-[90px]">Visa path:</span>
                      <span>{result.visaNote}</span>
                    </div>
                    {result.costOfLiving && (
                      <div className="flex items-start gap-2 text-sm text-stone-700">
                        <span className="font-medium shrink-0 min-w-[90px]">Cost of living:</span>
                        <span>{result.costOfLiving}</span>
                      </div>
                    )}
                    {result.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-stone-700">
                        <span className="font-medium shrink-0 min-w-[90px]">{i === 0 ? (result.level === 'Straightforward' ? 'Next step:' : 'Key info:') : ''}</span>
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to={`/country-guides/${destinationSlug}`} className="flex-1">
                      <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                        Read Full {destination.name} Guide <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </Link>
                    <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full border-stone-300 text-stone-700 hover:bg-stone-50">
                        Get a Personalized Plan
                      </Button>
                    </a>
                  </div>
                </div>

                <p className="text-xs text-stone-400 mt-3 text-center">
                  This is a quick assessment based on general data. Individual eligibility depends on specific circumstances.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default CanIMoveWidget;
