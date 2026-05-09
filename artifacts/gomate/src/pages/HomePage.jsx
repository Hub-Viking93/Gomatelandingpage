import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, BookOpen, ArrowRight, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImageCarousel from '@/components/ImageCarousel';
import { APP_URL } from '@/lib/config';

// Lazy-load CanIMoveWidget — it pulls the full country data bundle and is below-the-fold
const CanIMoveWidget = lazy(() => import('@/components/CanIMoveWidget'));

const HomePage = () => {
  const whatIsGoMateFeatures = [{
    icon: MapPin,
    title: '125+ Country Guides',
    description: 'Visa options, housing markets, healthcare systems, banking, cost of living — written for the reality of actually living there, not just visiting.'
  }, {
    icon: BookOpen,
    title: 'Relocation Field Guide',
    description: '60+ in-depth articles on the mechanics of moving abroad — from document validity and admin systems to the mistakes that cost people months.'
  }, {
    icon: Smartphone,
    title: 'GoMate App (Coming Soon)',
    description: <><strong className="font-semibold text-stone-900">For your specific move.</strong> A personal plan for one relocation — what to do next, what documents you still need, and what could go wrong.</>
  }];
  return (
    <>
      <Helmet>
        <title>GoMate Relocate — Practical Guides for Moving Abroad</title>
        <meta name="description" content="Relocation intelligence for 125+ countries. Visas, housing, healthcare, banking, admin, and the real systems behind moving abroad — before you move." />
        <link rel="canonical" href="https://gomaterelocate.com/" />
        <meta property="og:title" content="GoMate Relocate — Practical Guides for Moving Abroad" />
        <meta property="og:description" content="Relocation intelligence for 125+ countries. Visas, housing, healthcare, banking, admin, and the real systems behind moving abroad." />
        <meta property="og:url" content="https://gomaterelocate.com/" />
        <meta property="og:image" content="https://raw.githubusercontent.com/Hub-Viking93/gomatelogo/626b0079bd23e19b026f898fdd9353dfe7aae4d9/GoMateLogo.png" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <main>
        {/* Beta Banner */}
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-sage-700 hover:bg-sage-600 text-white transition-colors"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-1 text-center text-sm md:text-base">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block px-2 py-0.5 rounded-full bg-white/15 text-xs font-semibold tracking-wide uppercase">
                Beta
              </span>
              <span className="font-medium">
                The GoMate app is live — try it out for free during beta.
              </span>
            </span>
            <span className="inline-flex items-center gap-1 font-semibold underline-offset-4 group-hover:underline">
              Open the app
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </a>

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20">
          {/* Full Screen Image Carousel Background */}
          <ImageCarousel />

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 flex flex-col items-center">
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1.0,
            ease: 'easeOut'
          }} className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-10 leading-tight drop-shadow-2xl">
                GoMate
              </h1>

              <p className="text-2xl md:text-3xl lg:text-4xl text-white font-serif font-light leading-snug max-w-3xl mx-auto drop-shadow-lg">
                Move abroad with the full picture.
              </p>

              <p className="mt-6 mb-12 text-lg md:text-xl italic text-white/70 font-serif tracking-wide drop-shadow">
                Just Go Mate.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/country-guides">
                  <Button className="bg-sage-600 hover:bg-sage-500 text-white px-10 py-8 text-xl rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(110,138,113,0.6)] hover:-translate-y-1 group border border-sage-400">
                    Browse Country Guides
                    <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
                  </Button>
                </Link>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white px-10 py-8 text-xl rounded-full transition-all duration-300 bg-transparent backdrop-blur-sm shadow-lg">
                    Open GoMate App
                  </Button>
                </a>
              </div>

              <p className="mt-8 text-sm text-white/60 tracking-wide">
                125+ country guides&nbsp;&nbsp;·&nbsp;&nbsp;Based on official sources&nbsp;&nbsp;·&nbsp;&nbsp;Free to explore
              </p>
            </motion.div>

            {/* Scroll Indicator - Anchored below content */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.5,
            duration: 1
          }} className="mt-20 md:mt-24 text-white/70 flex flex-col items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-medium text-white/90 drop-shadow-md">Start Exploring</span>
              <motion.div animate={{
              y: [0, 8, 0]
            }} transition={{
              repeat: Infinity,
              duration: 2
            }} className="w-0.5 h-12 bg-gradient-to-b from-white/0 via-white/80 to-white/0 drop-shadow-sm" />
            </motion.div>
          </div>
        </section>

        {/* Can I Move? Widget — lazy-loaded to defer 3.5MB country data bundle */}
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <CanIMoveWidget />
        </Suspense>

        {/* Section 1 - What is GoMate? */}
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">
                What is GoMate?
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Moving abroad is two jobs: figuring out <strong className="font-semibold text-stone-900">where</strong>, and figuring out <strong className="font-semibold text-stone-900">how</strong>. GoMate helps with both.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {whatIsGoMateFeatures.map((feature, index) => (
                <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} className="bg-stone-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="text-sage-700" size={24} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-stone-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Country Guides */}
        <section className="bg-stone-50 py-20 border-t border-stone-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">
                Popular Country Guides
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Explore some of the most-read relocation guides — covering visas, housing, healthcare, work, and the systems behind daily life.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'Spain', slug: 'spain', flag: 'es', region: 'Europe' },
                { name: 'Portugal', slug: 'portugal', flag: 'pt', region: 'Europe' },
                { name: 'Sweden', slug: 'sweden', flag: 'se', region: 'Europe' },
                { name: 'Germany', slug: 'germany', flag: 'de', region: 'Europe' },
                { name: 'Thailand', slug: 'thailand', flag: 'th', region: 'Asia' },
                { name: 'Japan', slug: 'japan', flag: 'jp', region: 'Asia' },
                { name: 'Australia', slug: 'australia', flag: 'au', region: 'Oceania' },
                { name: 'Canada', slug: 'canada', flag: 'ca', region: 'Americas' },
                { name: 'United States', slug: 'united-states', flag: 'us', region: 'Americas' },
                { name: 'Netherlands', slug: 'netherlands', flag: 'nl', region: 'Europe' },
                { name: 'Italy', slug: 'italy', flag: 'it', region: 'Europe' },
                { name: 'United Kingdom', slug: 'united-kingdom', flag: 'gb', region: 'Europe' },
              ].map((c, index) => (
                <motion.div key={c.slug} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}>
                  <Link
                    to={`/country-guides/${c.slug}`}
                    className="group flex items-center gap-3 bg-white rounded-xl border border-stone-200 p-4 hover:border-sage-300 hover:shadow-md transition-all"
                  >
                    <img
                      src={`https://flagcdn.com/w80/${c.flag}.png`}
                      alt={`${c.name} flag`}
                      className="w-8 h-auto rounded shadow-sm"
                      width={32}
                      height={21}
                      loading="lazy"
                    />
                    <div>
                      <span className="font-semibold text-stone-900 group-hover:text-sage-700 transition-colors">{c.name}</span>
                      <span className="block text-xs text-stone-400">{c.region}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link to="/country-guides">
                <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-5 rounded-full transition-all duration-200 hover:shadow-md">
                  View All 125+ Country Guides
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2 - Website Component */}
        <section className="bg-gradient-to-br from-sage-50 to-stone-50 py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }}>
                <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                  Explore & Learn on the Website
                </h2>
                <h3 className="text-xl font-medium text-sage-700 mb-6">
                  Understand countries, requirements, and what to expect.
                </h3>
                <ul className="list-disc list-inside space-y-3 text-lg text-stone-700 leading-relaxed mb-8">
                  <li>Browse detailed country guides to compare your options.</li>
                  <li>Learn about visa requirements, costs, healthcare, housing, and work opportunities.</li>
                  <li>Understand local realities and what daily life truly entails.</li>
                  <li>Get general knowledge and insights about the relocation process.</li>
                </ul>
                <Link to="/country-guides">
                  <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 rounded-lg transition-all duration-200 hover:shadow-md">
                    Browse Country Guides
                  </Button>
                </Link>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }} className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
                  <img alt="Laptop displaying GoMate country guide content with maps and relocation information" className="w-full h-[500px] object-cover" src="https://horizons-cdn.hostinger.com/c3f71188-98e9-4304-81e8-d1898a97b3b9/irvan-maulana-1rbcvkmbxuw-unsplash-3knBG.jpg" loading="lazy" width={600} height={500} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3 - App Component */}
        <section id="app-section" className="bg-white py-24 scroll-mt-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start flex-row-reverse"> {/* Reverse order for app section */}
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }}>
                <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                  Plan Deeper with the GoMate App
                </h2>
                <h3 className="text-xl font-medium text-sage-700 mb-6">
                  Your full plan for one move — what to do, what to gather, and what to watch out for.
                </h3>
                <ul className="list-disc list-inside space-y-3 text-lg text-stone-700 leading-relaxed mb-8">
                  <li>A full plan for your move, from now to landing in your new country</li>
                  <li>Step-by-step next actions, with sources you can check yourself</li>
                  <li>A list of every document you still need to get</li>
                  <li>Warnings when something could delay or block your move</li>
                  <li>One place to track your plan, documents, and timeline</li>
                </ul>

                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 rounded-lg transition-all duration-200 hover:shadow-md">
                    Open the GoMate App
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </a>

              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }} className="relative lg:sticky lg:top-24">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500 bg-stone-100 p-4 border border-stone-200">
                  <img alt="GoMate app interface showing personalized relocation checklist and task management" className="w-full max-w-[420px] h-auto object-contain mx-auto rounded-xl shadow-inner" src="https://horizons-cdn.hostinger.com/c3f71188-98e9-4304-81e8-d1898a97b3b9/chatgpt-image-7-feb.-2026-22_59_34-ZYGYU.png" loading="lazy" width={420} height={600} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 5 - Call to Action */}
        <section className="bg-stone-900 text-white py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
              <h2 className="text-4xl font-serif font-bold mb-6">
                Ready to Plan Your Relocation?
              </h2>
              <p className="text-xl text-stone-300 mb-10 leading-relaxed">
                Browse country guides for free, or open the app to plan your specific move.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/country-guides">
                  <Button className="bg-sage-600 hover:bg-sage-700 text-white px-10 py-7 text-lg rounded-full transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                    Explore Country Guides
                  </Button>
                </Link>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white px-10 py-7 text-lg rounded-full transition-all duration-200 bg-transparent backdrop-blur-sm shadow-lg">
                    Open the GoMate App
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;