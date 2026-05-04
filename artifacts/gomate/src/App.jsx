import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { AIChatProvider } from '@/context/AIChatContext';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';

// Lazy-loaded routes — splits country data + field guide data into separate chunks
// so homepage visits don't pay the cost of the full 3.5MB country bundle.
// Module references are exposed so Header/Footer/Link components can prefetch on hover.
const countryGuidesImport = () => import('@/pages/CountryGuidesPage');
const countryDetailImport = () => import('@/pages/CountryDetailPage');
const fieldGuideImport = () => import('@/pages/FieldGuidePage');
const fieldGuideDetailImport = () => import('@/pages/FieldGuideDetailPage');
const aboutImport = () => import('@/pages/AboutPage');
const faqImport = () => import('@/pages/FAQPage');
const searchImport = () => import('@/pages/SearchResultsPage');
const compareImport = () => import('@/pages/CompareCountriesPage');
const notFoundImport = () => import('@/pages/NotFoundPage');
const appPageImport = () => import('@/pages/GoMateAppPage');
const pricingImport = () => import('@/pages/PricingPage');

const CountryGuidesPage = lazy(countryGuidesImport);
const CountryDetailPage = lazy(countryDetailImport);
const FieldGuidePage = lazy(fieldGuideImport);
const FieldGuideDetailPage = lazy(fieldGuideDetailImport);
const AboutPage = lazy(aboutImport);
const FAQPage = lazy(faqImport);
const SearchResultsPage = lazy(searchImport);
const CompareCountriesPage = lazy(compareImport);
const NotFoundPage = lazy(notFoundImport);
const GoMateAppPage = lazy(appPageImport);
const PricingPage = lazy(pricingImport);

// Expose prefetch hooks so any Link component can trigger chunk download on hover
if (typeof window !== 'undefined') {
  window.__gomatePrefetch = {
    '/country-guides': countryGuidesImport,
    '/country-guides/': countryDetailImport,
    '/field-guide': fieldGuideImport,
    '/field-guide/': fieldGuideDetailImport,
    '/about': aboutImport,
    '/faq': faqImport,
    '/search': searchImport,
    '/compare': compareImport,
    '/app': appPageImport,
    '/pricing': pricingImport,
  };
}

import FloatingChatBubble from '@/components/FloatingChatBubble';
import ChatWindow from '@/components/ChatWindow';

// Invisible placeholder for route transitions. Avoids the "Loading..." flash on fast
// chunk loads (<300ms). Only layout height is preserved to prevent CLS.
const RouteFallback = () => (
  <div className="min-h-[60vh]" aria-hidden="true" />
);

function App() {
  return (
    <AIChatProvider>
      <Router>
        <div className="min-h-screen bg-stone-50 flex flex-col">
          <Header />

          <div className="flex-grow">
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/country-guides" element={<CountryGuidesPage />} />
                <Route path="/country-guides/:slug" element={<CountryDetailPage />} />
                <Route path="/field-guide" element={<FieldGuidePage />} />

                {/* Category Overview */}
                <Route path="/field-guide/:categoryId" element={<FieldGuideDetailPage />} />

                {/* Specific Article View */}
                <Route path="/field-guide/:categoryId/:articleId" element={<FieldGuideDetailPage />} />

                <Route path="/compare" element={<CompareCountriesPage />} />
                <Route path="/app" element={<GoMateAppPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/search" element={<SearchResultsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </div>

          <Footer />

          {/* AI Chat Components */}
          <FloatingChatBubble />
          <ChatWindow />

          <Toaster />
        </div>
      </Router>
    </AIChatProvider>
  );
}

export default App;
