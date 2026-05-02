import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MapPin, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found — GoMate Relocate</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <main className="min-h-[70vh] bg-stone-50 flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-6xl font-serif font-bold text-stone-300 mb-4">404</h1>
          <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-stone-600 mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Try exploring our country guides or field guide instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/country-guides">
              <Button className="bg-sage-600 hover:bg-sage-700 text-white gap-2 w-full sm:w-auto">
                <MapPin size={16} /> Country Guides
              </Button>
            </Link>
            <Link to="/field-guide">
              <Button variant="outline" className="gap-2 w-full sm:w-auto">
                <BookOpen size={16} /> Field Guide
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
