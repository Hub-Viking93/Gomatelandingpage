import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { countries } from '@/data/countries/index';

const COMPARE_FIELDS = [
  { key: 'costOfLiving', label: 'Cost of Living', path: 'overview.costOfLiving' },
  { key: 'euStatus', label: 'EU Status', path: 'overview.euStatus' },
  { key: 'primaryLanguages', label: 'Primary Languages', path: 'overview.primaryLanguages' },
  { key: 'stayLength', label: 'Default Stay Length', path: 'overview.stayLength' },
  { key: 'complexity', label: 'Relocation Complexity', path: 'complexity' },
  { key: 'visaCount', label: 'Visa Options Listed', computed: (c) => c.visas ? `${c.visas.length} types` : 'N/A' },
  { key: 'requirementCount', label: 'Key Requirements', computed: (c) => c.requirements ? `${c.requirements.length} items` : 'N/A' },
];

function getNestedValue(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : 'N/A'), obj);
}

const CompareCountriesPage = () => {
  const [countryA, setCountryA] = useState('');
  const [countryB, setCountryB] = useState('');

  const dataA = useMemo(() => countries.find(c => c.slug === countryA), [countryA]);
  const dataB = useMemo(() => countries.find(c => c.slug === countryB), [countryB]);

  const sortedCountries = useMemo(() =>
    [...countries].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  return (
    <>
      <Helmet>
        <title>Compare Countries — GoMate Relocate</title>
        <meta name="description" content="Compare two countries side by side — cost of living, visa options, complexity, languages, and key requirements. Find the best destination for your move." />
        <meta property="og:title" content="Compare Countries — GoMate Relocate" />
        <meta property="og:description" content="Compare two countries side by side — cost of living, visa options, complexity, languages, and key requirements." />
        <meta property="og:image" content="https://raw.githubusercontent.com/Hub-Viking93/gomatelogo/626b0079bd23e19b026f898fdd9353dfe7aae4d9/GoMateLogo.png" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <main className="min-h-screen bg-stone-50 pb-20">
        {/* Header */}
        <section className="bg-gradient-to-br from-sage-50 to-stone-100 border-b border-stone-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-4">
                Compare Countries
              </h1>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Compare two destinations side by side — cost of living, visa complexity, languages, and what it actually takes to relocate.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Selectors */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Country A</label>
              <Select value={countryA} onValueChange={setCountryA}>
                <SelectTrigger className="w-full bg-white border-stone-300 focus:ring-sage-500">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  {sortedCountries.map(c => (
                    <SelectItem key={c.slug} value={c.slug} disabled={c.slug === countryB}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Country B</label>
              <Select value={countryB} onValueChange={setCountryB}>
                <SelectTrigger className="w-full bg-white border-stone-300 focus:ring-sage-500">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  {sortedCountries.map(c => (
                    <SelectItem key={c.slug} value={c.slug} disabled={c.slug === countryA}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Comparison Table */}
          {dataA && dataB ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
                {/* Header Row */}
                <div className="grid grid-cols-3 bg-stone-900 text-white">
                  <div className="p-4 font-medium text-sm flex items-center gap-2">
                    <Scale size={16} /> Category
                  </div>
                  <div className="p-4 font-bold text-center border-l border-stone-700">{dataA.name}</div>
                  <div className="p-4 font-bold text-center border-l border-stone-700">{dataB.name}</div>
                </div>

                {/* Short Description */}
                <div className="grid grid-cols-3 border-b border-stone-100">
                  <div className="p-4 font-medium text-stone-700 text-sm bg-stone-50">Overview</div>
                  <div className="p-4 text-stone-600 text-sm border-l border-stone-100">{dataA.shortDescription}</div>
                  <div className="p-4 text-stone-600 text-sm border-l border-stone-100">{dataB.shortDescription}</div>
                </div>

                {/* Comparison Fields */}
                {COMPARE_FIELDS.map((field, idx) => (
                  <div key={field.key} className={`grid grid-cols-3 ${idx < COMPARE_FIELDS.length - 1 ? 'border-b border-stone-100' : ''}`}>
                    <div className="p-4 font-medium text-stone-700 text-sm bg-stone-50">{field.label}</div>
                    <div className="p-4 text-stone-800 text-sm border-l border-stone-100">
                      {field.computed ? field.computed(dataA) : getNestedValue(dataA, field.path)}
                    </div>
                    <div className="p-4 text-stone-800 text-sm border-l border-stone-100">
                      {field.computed ? field.computed(dataB) : getNestedValue(dataB, field.path)}
                    </div>
                  </div>
                ))}

                {/* Who Is This Country For */}
                {(dataA.whoThisCountryIsFor || dataB.whoThisCountryIsFor) && (
                  <div className="grid grid-cols-3 border-t border-stone-200">
                    <div className="p-4 font-medium text-stone-700 text-sm bg-stone-50">Best Suited For</div>
                    <div className="p-4 text-stone-600 text-sm border-l border-stone-100 italic">
                      {dataA.whoThisCountryIsFor || 'N/A'}
                    </div>
                    <div className="p-4 text-stone-600 text-sm border-l border-stone-100 italic">
                      {dataB.whoThisCountryIsFor || 'N/A'}
                    </div>
                  </div>
                )}
              </div>

              {/* Links to full guides */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <Link to={`/country-guides/${dataA.slug}`}>
                  <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white gap-2">
                    Full {dataA.name} Guide <ArrowRight size={16} />
                  </Button>
                </Link>
                <Link to={`/country-guides/${dataB.slug}`}>
                  <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white gap-2">
                    Full {dataB.name} Guide <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <Scale size={48} className="text-stone-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-stone-700">Select two countries to compare</h3>
              <p className="text-stone-500 mt-2">Choose from 125+ destinations to see them side by side.</p>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default CompareCountriesPage;
