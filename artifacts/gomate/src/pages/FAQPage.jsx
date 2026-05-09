import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left group transition-colors hover:text-sage-700"
      >
        <span className={`font-serif text-lg font-medium ${isOpen ? 'text-sage-800' : 'text-stone-800'}`}>
          {question}
        </span>
        <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? (
            <Minus size={20} className="text-sage-600" />
          ) : (
            <Plus size={20} className="text-stone-400 group-hover:text-sage-600" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-stone-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = ({ title, questions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-12 last:mb-0">
      <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-3">
        <div className="w-8 h-1 bg-sage-500 rounded-full" />
        {title}
      </h3>
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm px-6 md:px-8">
        {questions.map((item, index) => (
          <FAQItem
            key={index}
            question={item.q}
            answer={item.a}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

const FAQPage = () => {
  const faqData = [
    {
      title: "Getting Started",
      questions: [
        {
          q: "What exactly is GoMate?",
          a: "GoMate is a relocation intelligence platform. We help you understand what moving to another country actually involves — visas, housing, healthcare, banking, admin, deadlines, and the things no one tells you until you're already there. We offer 125+ country guides, 60+ in-depth field guide articles, and an AI-powered planning app (coming soon)."
        },
        {
          q: "Is GoMate free to use?",
          a: "Yes! Exploring our extensive Country Guides and using the website resources is completely free. We believe essential information about moving abroad should be accessible to everyone."
        },
        {
          q: "Do I need an account to browse country guides?",
          a: "No account is needed to browse the website. You can explore all our country data, field guides, and resources immediately without signing up."
        }
      ]
    },
    {
      title: "Website vs GoMate App",
      questions: [
        {
          q: "What's the difference between the website and the app?",
          a: "Think of the website as your encyclopedia—it's where you explore options, compare countries, and learn the rules. The App is your personal project manager—it's where you actually plan your specific move, track your budget, and manage your to-do list."
        },
        {
          q: "Is the GoMate App available now?",
          a: "Not yet — it’s under active development. The website is fully available and free to use today."
        },
        {
          q: "Can I use the website without the app?",
          a: "Absolutely. The website functions as a standalone resource for anyone researching international relocation. The app is an optional upgrade for those who want active help managing the process."
        },
        {
          q: "Will my data sync between the two?",
          a: "No. The website and the GoMate App are intentionally separate products. The website is a fully open resource for researching countries and understanding relocation basics. The GoMate App is a private, account-based planning tool focused on your personal move. This separation keeps the website free, simple, and accessible to everyone."
        }
      ]
    },
    {
      title: "Using the Country Guides",
      questions: [
        {
          q: "How many countries do you cover?",
          a: "We currently have in-depth guides for 125+ countries across Europe, Asia, the Americas, the Middle East, Africa, and Oceania. Each guide covers visas, housing, healthcare, work, cost of living, culture, emergency services, and more."
        },
        {
          q: "How accurate is the information in the guides?",
          a: "We strive for high accuracy by aggregating data from official government sources, embassies, and reputable international organizations. However, immigration rules change frequently, so we always recommend verifying critical details with official authorities before making decisions."
        },
        {
          q: "What's the difference between Country Guides and the Field Guide?",
          a: "Country Guides are destination-specific — everything about moving to Germany, Japan, Brazil, etc. The Field Guide is topic-specific — universal articles about how bureaucracy works, common mistakes, housing pitfalls, banking, healthcare systems, and other challenges that apply regardless of where you move."
        },
        {
          q: "Can I request a guide for a specific country?",
          a: "Yes! If you don't see your destination listed, reach out to us. We prioritize new country guides based on user requests and demand."
        },
        {
          q: "Do you provide official legal advice?",
          a: "No. GoMate provides information and guidance, but we are not a law firm. Our content is for informational purposes. For complex legal situations, we recommend consulting a qualified immigration lawyer — each country guide includes a service directory with real law firms."
        },
        {
          q: "Is all the content in English?",
          a: "Yes. All country guides, field guide articles, and app interfaces are currently in English only. We may add additional languages in the future."
        }
      ]
    },
    {
      title: "Pricing & Services",
      questions: [
        {
          q: "What does GoMate cost?",
          a: "The website — including all 125+ country guides, the Field Guide, and the compare tool — is free, forever. The GoMate App has two tiers: Free ($0) for building a profile and previewing a plan, and Move Pass ($29, one-time) for the full plan, documents, blockers, and next steps for one active relocation. See the Pricing page for details."
        },
        {
          q: "What's the difference between Free and Move Pass?",
          a: "Free lets you build a profile, browse country guides, and preview a relocation plan. Move Pass unlocks the full plan for one active move: source-backed next steps, missing documents, blockers, readiness, and a pre-move workspace."
        },
        {
          q: "Are there any hidden fees?",
          a: "No. The website is free with no paywalls. Move Pass is a single $29 unlock for one move — there's no subscription and no recurring billing."
        },
        {
          q: "Do you offer paid 1-on-1 consultations?",
          a: "No. GoMate is a digital product. We do not offer one-on-one consulting or relocation agent services."
        },
        {
          q: "Is GoMate a visa agency?",
          a: "No. We are not a government agency or a visa processing firm. We help you understand the requirements and organize your application, but you submit your actual visa application directly to the relevant government authorities."
        }
      ]
    },
    {
      title: "Other Common Questions",
      questions: [
        {
          q: "How often is the content updated?",
          a: "We review and update country guides regularly as immigration rules, costs, and systems change. Major policy changes (new visa types, updated emergency numbers, regulatory shifts) are prioritized. If you notice something outdated, let us know."
        },
        {
          q: "How can I contact support?",
          a: "You can reach us via email at contact@gomaterelocate.com. We typically respond within 24-48 hours."
        },
        {
          q: "Where is GoMate based?",
          a: "GoMate has its roots in Sweden, built from a real cross-border relocation between Sweden and the Philippines. We work remotely across time zones — just like the people we serve."
        },
        {
          q: "Can I compare two countries side by side?",
          a: "Yes. Our Compare Countries tool lets you select two destinations and see them side by side — cost of living, visa complexity, key requirements, and more. You'll find it in the main navigation."
        },
        {
          q: "I found a mistake. How do I report it?",
          a: "Please email us at contact@gomaterelocate.com with the page link and details of the error. We take accuracy seriously and will investigate and update the content promptly."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ — GoMate Relocate</title>
        <meta name="description" content="Frequently asked questions about GoMate, our relocation guides, the GoMate App, and how we help people move abroad." />
        <meta property="og:title" content="FAQ — GoMate Relocate" />
        <meta property="og:description" content="Frequently asked questions about GoMate, our relocation guides, the GoMate App, and how we help people move abroad." />
        <meta property="og:image" content="https://raw.githubusercontent.com/Hub-Viking93/gomatelogo/626b0079bd23e19b026f898fdd9353dfe7aae4d9/GoMateLogo.png" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <main className="bg-stone-50 min-h-screen pb-20">
        {/* Header */}
        <section className="bg-white border-b border-stone-200 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed"
            >
              Everything you need to know about GoMate, our data, and how we can help you start your new life abroad.
            </motion.p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {faqData.map((section, index) => (
              <FAQSection key={index} title={section.title} questions={section.questions} />
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-sage-100 rounded-2xl p-8 md:p-12 text-center"
          >
            <HelpCircle size={48} className="text-sage-600 mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">
              Still missing an answer?
            </h3>
            <p className="text-stone-700 mb-8 max-w-md mx-auto">
              If something is unclear, incorrect, or missing, feel free to reach out.
              We usually respond within 24–36 hours.
            </p>
            <a href="mailto:contact@gomaterelocate.com">
              <Button className="bg-sage-600 hover:bg-sage-700 text-white gap-2">
                Contact GoMate <ArrowRight size={18} />
              </Button>
            </a>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default FAQPage;