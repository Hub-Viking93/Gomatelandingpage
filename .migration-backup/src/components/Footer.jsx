import React from 'react';
import PrefetchLink from '@/components/PrefetchLink';
import { Mail, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const newLogoUrl =
    "https://raw.githubusercontent.com/Hub-Viking93/gomatelogo/a7f6068ce4dadd248025a0617ee743aedbe64481/GoMateLogo.png";

  return (
    <footer id="contact" className="bg-stone-100 border-t border-stone-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src={newLogoUrl}
              alt="GoMate Logo"
              className="h-24 object-contain"
              loading="lazy"
              width={96}
              height={96}
            />
            {/* Footer Navigation - Keeping FAQ and About here as requested */}
            <nav className="flex items-center gap-6 text-sm font-medium text-stone-600">
              <PrefetchLink to="/about" className="hover:text-sage-700 transition-colors">About</PrefetchLink>
              <PrefetchLink to="/faq" className="hover:text-sage-700 transition-colors">FAQ</PrefetchLink>
              <PrefetchLink to="/country-guides" className="hover:text-sage-700 transition-colors">Countries</PrefetchLink>
              <PrefetchLink to="/compare" className="hover:text-sage-700 transition-colors">Compare</PrefetchLink>
              <PrefetchLink to="/field-guide" className="hover:text-sage-700 transition-colors">Field Guide</PrefetchLink>
              <PrefetchLink to="/pricing" className="hover:text-sage-700 transition-colors">Pricing</PrefetchLink>
            </nav>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center md:items-end gap-4">
            
            {/* Social icons */}
            <div className="flex items-center gap-4 text-stone-600">
              <a
                href="https://x.com/GoMateRelocate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sage-700 transition-colors"
                aria-label="GoMate on X"
              >
                <Twitter size={18} />
              </a>

              <a
                href="https://www.instagram.com/gomaterelocate/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sage-700 transition-colors"
                aria-label="GoMate on Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://se.pinterest.com/gomaterelocate/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sage-700 transition-colors"
                aria-label="GoMate on Pinterest"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M12 2a10 10 0 00-3.5 19.4c-.1-.8-.2-2 0-2.9l1.3-5.4s-.3-.6-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.6 0 1-.6 2.4-.9 3.7-.3 1.1.6 2 1.7 2 2 0 3.6-2.1 3.6-5.1 0-2.7-1.9-4.6-4.7-4.6-3.2 0-5.1 2.4-5.1 4.9 0 1 .4 2 .9 2.6a.4.4 0 01.1.4l-.3 1.2c-.1.2-.2.3-.4.2-1.4-.6-2.3-2.4-2.3-3.9 0-3.2 2.3-6.1 6.6-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.2 6.3-1 0-2-.5-2.3-1.1l-.6 2.3c-.2.9-.8 2-1.2 2.7A10 10 0 1012 2z" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@gomaterelocate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sage-700 transition-colors"
                aria-label="GoMate on TikTok"
              >
                {/* TikTok SVG */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 8.1c-1.7 0-3.3-.6-4.5-1.7v8.3a6.3 6.3 0 11-5.4-6.2v3.3a3 3 0 103 3V3h2.6c.2 1.4.9 2.6 2 3.5 1.1.9 2.5 1.4 4 1.4V8.1z" />
                </svg>
              </a>
            </div>

            <a
              href="mailto:contact@gomaterelocate.com"
              className="flex items-center gap-2 text-stone-600 hover:text-sage-700 transition-colors text-sm font-medium"
            >
              <Mail size={16} />
              contact@gomaterelocate.com
            </a>

            <p className="text-sm text-stone-500">
              © 2026 GoMate. Relocation intelligence for 125+ countries.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;