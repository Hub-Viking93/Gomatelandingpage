import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
const AboutPage = () => {
  const newLogoUrl = "https://horizons-cdn.hostinger.com/c3f71188-98e9-4304-81e8-d1898a97b3b9/ddfd5392c1e183c3a3ce7c3f4cfdd365.png";
  return <>
      <Helmet>
        <title>About GoMate — GoMate Relocate</title>
        <meta name="description" content="GoMate is a relocation intelligence platform covering 125+ countries. Learn what we provide, our philosophy, and why we built GoMate." />
        <meta property="og:title" content="About GoMate — GoMate Relocate" />
        <meta property="og:description" content="GoMate is a relocation intelligence platform covering 125+ countries. Learn what we provide, our philosophy, and why we built GoMate." />
        <meta property="og:image" content="https://raw.githubusercontent.com/Hub-Viking93/gomatelogo/626b0079bd23e19b026f898fdd9353dfe7aae4d9/GoMateLogo.png" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <main className="min-h-screen bg-stone-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-stone-100 border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="text-center">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-4">
                About GoMate
              </h1>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Your thoughtful companion for the journey of relocation—designed with care, clarity, and respect for the complexity of starting over.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-stone prose-lg max-w-none">
              
              {/* What is GoMate */}
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
            }} className="mb-16">
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">
                  What is GoMate?
                </h2>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                  <p>Almost everyone has imagined it. Living somewhere else. A different city, a different rhythm, a different life. Maybe it’s Tokyo, Lisbon, Toronto, or a quiet beach town. The idea shows up late at night, between workdays and responsibilities — and then slowly fades, because you don’t know where to start.</p>
                  <p>You try anyway. You google. You open Reddit. You join a Facebook group. You read ten conflicting answers about visas, housing, and jobs. The dream starts to feel complicated, risky, and overwhelming. Not because it’s impossible — but because no one explains what it actually takes.</p>
                  <p>GoMate exists for that moment — when the dream feels real, but the path feels impossible. We turn confusion into clarity, and scattered information into something you can actually follow. Not hype. Not shortcuts. Just the truth about what life in another country really looks like.</p>
                  <p>GoMate started from a real relocation between Sweden and the Philippines. We spent weeks jumping between government websites, Reddit threads, and conflicting forum posts — and still couldn’t find a single resource that covered the full process. So we built one.</p>
                </div>
              </motion.div>

              {/* What We Provide */}
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
            }} className="mb-16 bg-white rounded-xl p-8 shadow-sm border border-stone-200">
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">
                  What We Provide
                </h2>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 mt-1">•</span>
                    <span><strong className="font-semibold">125+ Country Guides, Not Generic Lists:</strong> Every guide covers visa options, housing, healthcare, banking, cost of living, and local admin — written for the reality of actually living there, not just visiting.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 mt-1">•</span>
                    <span><strong className="font-semibold">The Systems Behind the Move:</strong> Registration deadlines, tax obligations, insurance requirements, document dependencies — the things that actually determine whether your move goes smoothly or falls apart.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 mt-1">•</span>
                    <span><strong className="font-semibold">Relocation Realities:</strong> What housing markets actually look like for foreigners. What healthcare access depends on. What banking requires before you can open an account. The parts no one tells you until you're already there.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 mt-1">•</span>
                    <span><strong className="font-semibold">In-Depth Field Guide:</strong> 60+ articles on the mechanics of moving abroad — from document validity and administrative systems to digital infrastructure and the mistakes that cost people months.</span>
                  </li>
                </ul>
              </motion.div>

              {/* What We Don't Provide */}
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
            }} className="mb-16">
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">
                  What We Don't Provide
                </h2>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                  <p>
                    To maintain clarity and integrity, GoMate intentionally does not offer:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="text-stone-400 mt-1">×</span>
                      <span><strong className="font-semibold">Legal Representation:</strong> We are not lawyers or immigration agents. We provide information, not legal counsel.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-stone-400 mt-1">×</span>
                      <span><strong className="font-semibold">Job Placement:</strong> We help you understand the market, but we are not a recruitment agency.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-stone-400 mt-1">×</span>
                      <span><strong className="font-semibold">Real Estate Listings:</strong> We offer context on neighborhoods and housing markets, but we do not sell or rent property.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-stone-400 mt-1">×</span>
                      <span><strong className="font-semibold">Guaranteed Entry:</strong> Immigration decisions are solely at the discretion of government authorities.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Our Approach */}
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
            }} className="mb-16 bg-sage-50 rounded-xl p-8 border border-sage-200">
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">
                  Our Philosophy
                </h2>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                  <p>
                    Moving abroad is one of the most significant life changes a person can make. We approach this topic with <strong className="font-semibold">seriousness and optimism</strong>.
                  </p>
                  <p>
                    We prioritize <strong className="font-semibold">clarity over volume</strong>. You don't need to know everything about a country; you need to know the specific things that affect your ability to live there peacefully and legally.
                  </p>
                  <p>
                    We respect <strong className="font-semibold">local systems</strong>. Our guidance encourages expats to understand and respect the laws, customs, and administrative processes of their host countries, rather than seeking loopholes.
                  </p>
                </div>
              </motion.div>

              {/* Disclaimer */}
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
            }} className="bg-amber-50 rounded-xl p-8 border-2 border-amber-200">
                <div className="flex items-start gap-4">
                  <AlertCircle className="text-amber-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                      Important Disclaimer
                    </h2>
                    <div className="space-y-3 text-stone-700 leading-relaxed text-base">
                      <p>
                        <strong className="font-semibold">Immigration laws change frequently.</strong> While we strive to keep our guides accurate, visa requirements, income thresholds, and administrative rules can shift without notice. Always verify current information with official government sources and embassies before making life-changing decisions.
                      </p>
                      <p>
                        <strong className="font-semibold">We are an informational resource only.</strong> GoMate provides high-level guidance and context. We are not a substitute for professional legal advice or official government instructions.
                      </p>
                      <p>
                        <strong className="font-semibold">Your move is your responsibility.</strong> By using GoMate, you acknowledge that relocation carries inherent risks and complexities, and you are responsible for your own preparations, legal compliance, and safety.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="bg-gradient-to-br from-stone-100 to-sage-50 py-16 border-t border-stone-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          }}>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">
                Start With a Country
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                Explore what it actually takes to relocate — visas, housing, healthcare, admin, and the things no one warns you about.
              </p>
              <a href="/country-guides" className="inline-block bg-stone-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-stone-800 transition-colors mb-6">
                Browse Country Guides
              </a>
              <div className="flex items-center justify-center mt-6">
                <img src={newLogoUrl} alt="GoMate Logo" className="h-8 object-contain" loading="lazy" width={120} height={32} />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>;
};
export default AboutPage;