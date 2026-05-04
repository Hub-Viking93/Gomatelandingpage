import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { countries } from '@/data/countries/index';
import { optimizeImageUrl } from '@/utils/optimizeImageUrl';

const CountryGuidesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  const filteredCountries = countries
    .filter((country) => {
      const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion =
        selectedRegion === 'all' || country.region.toLowerCase() === selectedRegion;
      const matchesLanguage =
        selectedLanguage === 'all' ||
        country.languages.some((lang) => lang.toLowerCase() === selectedLanguage);

      return matchesSearch && matchesRegion && matchesLanguage;
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));

  const getFlagUrl = (slug) => {
    switch (slug) {
      case 'sweden': return 'https://flagcdn.com/w160/se.png';
      case 'norway': return 'https://flagcdn.com/w160/no.png';
      case 'denmark': return 'https://flagcdn.com/w160/dk.png';
      case 'iceland': return 'https://flagcdn.com/w160/is.png';
      case 'finland': return 'https://flagcdn.com/w160/fi.png';
      case 'japan': return 'https://flagcdn.com/w160/jp.png';
      case 'portugal': return 'https://flagcdn.com/w160/pt.png';
      case 'germany': return 'https://flagcdn.com/w160/de.png';
      case 'poland': return 'https://flagcdn.com/w160/pl.png';
      case 'switzerland': return 'https://flagcdn.com/w160/ch.png';
      case 'greece': return 'https://flagcdn.com/w160/gr.png';
      case 'spain': return 'https://flagcdn.com/w160/es.png';
      case 'netherlands': return 'https://flagcdn.com/w160/nl.png';
      case 'austria': return 'https://flagcdn.com/w160/at.png';
      case 'czech-republic': return 'https://flagcdn.com/w160/cz.png';
      case 'italy': return 'https://flagcdn.com/w160/it.png';
      case 'belgium': return 'https://flagcdn.com/w160/be.png';
      case 'croatia': return 'https://flagcdn.com/w160/hr.png';
      case 'slovenia': return 'https://flagcdn.com/w160/si.png';
      case 'liechtenstein': return 'https://flagcdn.com/w160/li.png';
      case 'united-states': return 'https://flagcdn.com/w160/us.png';
      case 'canada': return 'https://flagcdn.com/w160/ca.png';
      case 'mexico': return 'https://flagcdn.com/w160/mx.png';
      case 'brazil': return 'https://flagcdn.com/w160/br.png';
      case 'chile': return 'https://flagcdn.com/w160/cl.png';
      case 'argentina': return 'https://flagcdn.com/w160/ar.png';
      case 'serbia': return 'https://flagcdn.com/w160/rs.png';
      case 'united-kingdom': return 'https://flagcdn.com/w160/gb.png';
      case 'south-korea': return 'https://flagcdn.com/w160/kr.png';
      case 'singapore': return 'https://flagcdn.com/w160/sg.png';
      case 'thailand': return 'https://flagcdn.com/w160/th.png';
      case 'vietnam': return 'https://flagcdn.com/w160/vn.png';
      case 'malaysia': return 'https://flagcdn.com/w160/my.png';
      case 'south-africa': return 'https://flagcdn.com/w160/za.png';
      case 'morocco': return 'https://flagcdn.com/w160/ma.png';
      case 'hong-kong': return 'https://flagcdn.com/w160/hk.png';
      case 'taiwan': return 'https://flagcdn.com/w160/tw.png';
      case 'indonesia': return 'https://flagcdn.com/w160/id.png';
      case 'philippines': return 'https://flagcdn.com/w160/ph.png';
      case 'india': return 'https://flagcdn.com/w160/in.png';
      case 'sri-lanka': return 'https://flagcdn.com/w160/lk.png';
      case 'nepal': return 'https://flagcdn.com/w160/np.png';
      case 'united-arab-emirates': return 'https://flagcdn.com/w160/ae.png';
      case 'panama': return 'https://flagcdn.com/w160/pa.png';
      case 'costa-rica': return 'https://flagcdn.com/w160/cr.png';
      case 'colombia': return 'https://flagcdn.com/w160/co.png';
      case 'uruguay': return 'https://flagcdn.com/w160/uy.png';
      case 'peru': return 'https://flagcdn.com/w160/pe.png';
      case 'ecuador': return 'https://flagcdn.com/w160/ec.png';
      case 'paraguay': return 'https://flagcdn.com/w160/py.png';
      case 'egypt': return 'https://flagcdn.com/w160/eg.png';
      case 'tunisia': return 'https://flagcdn.com/w160/tn.png';
      case 'kenya': return 'https://flagcdn.com/w160/ke.png';
      case 'hungary': return 'https://flagcdn.com/w160/hu.png';
      case 'romania': return 'https://flagcdn.com/w160/ro.png';
      case 'bulgaria': return 'https://flagcdn.com/w160/bg.png';
      case 'slovakia': return 'https://flagcdn.com/w160/sk.png';
      case 'ireland': return 'https://flagcdn.com/w160/ie.png';
      case 'france': return 'https://flagcdn.com/w160/fr.png';
      case 'cyprus': return 'https://flagcdn.com/w160/cy.png';
      case 'estonia': return 'https://flagcdn.com/w160/ee.png';
      case 'latvia': return 'https://flagcdn.com/w160/lv.png';
      case 'lithuania': return 'https://flagcdn.com/w160/lt.png';
      case 'luxembourg': return 'https://flagcdn.com/w160/lu.png';
      case 'malta': return 'https://flagcdn.com/w160/mt.png';
      case 'qatar': return 'https://flagcdn.com/w160/qa.png';
      case 'nicaragua': return 'https://flagcdn.com/w160/ni.png';
      case 'guatemala': return 'https://flagcdn.com/w160/gt.png';
      case 'australia': return 'https://flagcdn.com/w160/au.png';
      case 'new-zealand': return 'https://flagcdn.com/w160/nz.png';
      case 'jamaica': return 'https://flagcdn.com/w160/jm.png';
      case 'trinidad-and-tobago': return 'https://flagcdn.com/w160/tt.png';
      case 'barbados': return 'https://flagcdn.com/w160/bb.png';
      case 'dominican-republic': return 'https://flagcdn.com/w160/do.png';
      case 'turkey': return 'https://flagcdn.com/w160/tr.png';
      case 'georgia': return 'https://flagcdn.com/w160/ge.png';
      case 'cambodia': return 'https://flagcdn.com/w160/kh.png';
      case 'montenegro': return 'https://flagcdn.com/w160/me.png';
      case 'china': return 'https://flagcdn.com/w160/cn.png';
      case 'saudi-arabia': return 'https://flagcdn.com/w160/sa.png';
      case 'albania': return 'https://flagcdn.com/w160/al.png';
      case 'israel': return 'https://flagcdn.com/w160/il.png';
      case 'mauritius': return 'https://flagcdn.com/w160/mu.png';
      case 'bahrain': return 'https://flagcdn.com/w160/bh.png';
      // Batch 1: South/Central Asia
      case 'pakistan': return 'https://flagcdn.com/w160/pk.png';
      case 'bangladesh': return 'https://flagcdn.com/w160/bd.png';
      case 'kazakhstan': return 'https://flagcdn.com/w160/kz.png';
      case 'uzbekistan': return 'https://flagcdn.com/w160/uz.png';
      case 'armenia': return 'https://flagcdn.com/w160/am.png';
      // Batch 2: Europe/Balkans
      case 'ukraine': return 'https://flagcdn.com/w160/ua.png';
      case 'bosnia-and-herzegovina': return 'https://flagcdn.com/w160/ba.png';
      case 'north-macedonia': return 'https://flagcdn.com/w160/mk.png';
      case 'moldova': return 'https://flagcdn.com/w160/md.png';
      case 'monaco': return 'https://flagcdn.com/w160/mc.png';
      // Batch 3: Africa
      case 'nigeria': return 'https://flagcdn.com/w160/ng.png';
      case 'ghana': return 'https://flagcdn.com/w160/gh.png';
      case 'rwanda': return 'https://flagcdn.com/w160/rw.png';
      case 'tanzania': return 'https://flagcdn.com/w160/tz.png';
      case 'namibia': return 'https://flagcdn.com/w160/na.png';
      // Batch 4: Middle East + Islands
      case 'oman': return 'https://flagcdn.com/w160/om.png';
      case 'jordan': return 'https://flagcdn.com/w160/jo.png';
      case 'kuwait': return 'https://flagcdn.com/w160/kw.png';
      case 'maldives': return 'https://flagcdn.com/w160/mv.png';
      case 'fiji': return 'https://flagcdn.com/w160/fj.png';
      // Batch 5: Caucasus/Central Asia/South Asia/Middle East
      case 'azerbaijan': return 'https://flagcdn.com/w160/az.png';
      case 'kyrgyzstan': return 'https://flagcdn.com/w160/kg.png';
      case 'mongolia': return 'https://flagcdn.com/w160/mn.png';
      case 'bhutan': return 'https://flagcdn.com/w160/bt.png';
      case 'lebanon': return 'https://flagcdn.com/w160/lb.png';
      // Batch 6: East/Southern Africa
      case 'ethiopia': return 'https://flagcdn.com/w160/et.png';
      case 'uganda': return 'https://flagcdn.com/w160/ug.png';
      case 'botswana': return 'https://flagcdn.com/w160/bw.png';
      case 'madagascar': return 'https://flagcdn.com/w160/mg.png';
      case 'seychelles': return 'https://flagcdn.com/w160/sc.png';
      // Batch 7: West Africa + European microstates
      case 'cote-divoire': return 'https://flagcdn.com/w160/ci.png';
      case 'senegal': return 'https://flagcdn.com/w160/sn.png';
      case 'cape-verde': return 'https://flagcdn.com/w160/cv.png';
      case 'andorra': return 'https://flagcdn.com/w160/ad.png';
      case 'kosovo': return 'https://flagcdn.com/w160/xk.png';
      // Batch 8: Central America + Caribbean
      case 'el-salvador': return 'https://flagcdn.com/w160/sv.png';
      case 'honduras': return 'https://flagcdn.com/w160/hn.png';
      case 'belize': return 'https://flagcdn.com/w160/bz.png';
      case 'bahamas': return 'https://flagcdn.com/w160/bs.png';
      case 'puerto-rico': return 'https://flagcdn.com/w160/pr.png';
      case 'cuba': return 'https://flagcdn.com/w160/cu.png';
      default: return '';
    }
  };

  return (
    <>
           <Helmet>
        <title>Country Guides — GoMate Relocate</title>
        <meta name="description" content="Explore 125+ country guides covering visas, housing, healthcare, work, cost of living, and local admin. Real information for real relocations." />
        <link rel="canonical" href="https://gomaterelocate.com/country-guides" />
        <meta property="og:title" content="Country Guides — GoMate Relocate" />
        <meta property="og:description" content="Explore 125+ country guides covering visas, housing, healthcare, work, cost of living, and local admin." />
        <meta property="og:url" content="https://gomaterelocate.com/country-guides" />
        <meta property="og:image" content="https://raw.githubusercontent.com/Hub-Viking93/gomatelogo/626b0079bd23e19b026f898fdd9353dfe7aae4d9/GoMateLogo.png" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <main className="min-h-screen bg-stone-50 pb-20">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-sage-50 to-stone-100 border-b border-stone-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-4">
                Country Guides
              </h1>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                A curated collection of short country guides focused on everyday life, culture, admin realities, and
                practical considerations. These provide general context for your move—not legal advice.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="bg-white border-b border-stone-200 sticky top-16 z-40 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Search Input */}
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search for a country..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all text-stone-900 placeholder:text-stone-400"
                />
              </div>

              {/* Filter Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Region</label>
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger className="w-full bg-stone-50 border-stone-300 focus:ring-sage-500">
                      <SelectValue placeholder="All Regions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="asia">Asia</SelectItem>
                      <SelectItem value="africa">Africa</SelectItem>
                      <SelectItem value="americas">Americas</SelectItem>
                      <SelectItem value="oceania">Oceania</SelectItem>
                      <SelectItem value="middle east">Middle East</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Primary Language</label>
                  <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger className="w-full bg-stone-50 border-stone-300 focus:ring-sage-500">
                      <SelectValue placeholder="All Languages" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Languages</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                      <SelectItem value="portuguese">Portuguese</SelectItem>
                      <SelectItem value="arabic">Arabic</SelectItem>
                      <SelectItem value="chinese">Chinese</SelectItem>
                      <SelectItem value="japanese">Japanese</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Active Filters Summary */}
              {(searchQuery || selectedRegion !== 'all' || selectedLanguage !== 'all') && (
                <div className="flex items-center gap-2 text-sm text-stone-600 flex-wrap">
                  <span className="font-medium">Active filters:</span>
                  {searchQuery && (
                    <span className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full">Search: {searchQuery}</span>
                  )}
                  {selectedRegion !== 'all' && (
                    <span className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full capitalize">
                      {selectedRegion}
                    </span>
                  )}
                  {selectedLanguage !== 'all' && (
                    <span className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full capitalize">
                      {selectedLanguage}
                    </span>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedRegion('all');
                      setSelectedLanguage('all');
                    }}
                    className="text-sage-700 hover:text-sage-800 hover:bg-sage-50"
                  >
                    Clear all
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Country Cards Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredCountries.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCountries.map((country, index) => (
                  <motion.div
                    key={country.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Link to={`/country-guides/${country.slug}`} className="block group h-full">
                      <div className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                        {/* Image Header */}
                        <div className="relative h-48 overflow-hidden bg-stone-200">
                          <img
                            src={optimizeImageUrl(country.heroImage, { width: 800 })}
                            alt={`${country.name} — relocation guide landscape`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                            width={400}
                            height={192}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <div className="flex items-center gap-2">
                              <img
                                src={getFlagUrl(country.slug)}
                                alt={country.flagAlt}
                                className="w-6 h-auto rounded-sm shadow-sm"
                                loading="lazy"
                                width={24}
                                height={16}
                              />
                              <span className="text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/20">
                                {country.region}
                              </span>
                            </div>
                          </div>
                          {/* NOTE: Complexity badge removed */}
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2 group-hover:text-sage-700 transition-colors">
                            {country.name}
                          </h3>

                          <p className="text-stone-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                            {country.shortDescription}
                          </p>

                          <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                            <span className="text-xs text-stone-400 font-medium flex items-center gap-1">
                              <MapPin size={12} /> {country.region}
                            </span>
                            <div className="flex items-center text-sage-600 text-sm font-bold group-hover:translate-x-1 transition-transform">
                              View Guide <ArrowRight size={16} className="ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-stone-400" size={24} />
                </div>
                <h3 className="text-lg font-medium text-stone-900">No guides found</h3>
                <p className="text-stone-500">Try adjusting your search or filters</p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default CountryGuidesPage;