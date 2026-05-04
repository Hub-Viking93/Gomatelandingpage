import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PrefetchLink from '@/components/PrefetchLink';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchInput from '@/components/SearchInput';
import { APP_URL } from '@/lib/config';

const Header = ({ showComingSoon }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const newLogoUrl = "https://raw.githubusercontent.com/Hub-Viking93/gomatelogo/a7f6068ce4dadd248025a0617ee743aedbe64481/GoMateLogo.png";

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/country-guides', label: 'Countries' },
    { path: '/field-guide', label: 'Field Guide' },
    { path: '/compare', label: 'Compare' },
    { path: '/pricing', label: 'Pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo and Brand */}
          <PrefetchLink
            to="/" 
            className="flex items-center group flex-shrink-0"
          >
            <img 
              src={newLogoUrl}
              alt="GoMate Logo" 
              className="h-20 object-contain transition-transform group-hover:scale-105"
              width={80}
              height={80}
            />
          </PrefetchLink>

          {/* Desktop Navigation & Search */}
          <div className="hidden md:flex items-center flex-1 justify-end gap-6">
            {/* Primary Nav */}
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <PrefetchLink
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative ${
                    isActive(link.path)
                      ? 'text-sage-700'
                      : 'text-stone-600 hover:text-sage-600'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-sage-600"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </PrefetchLink>
              ))}
            </div>

            {/* Separator */}
            <div className="h-6 w-px bg-stone-200" />

            {/* Search Input */}
            <div className="w-64 lg:w-72">
              <SearchInput />
            </div>

            {/* App Button — links to actual app subdomain */}
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-sage-600 hover:bg-sage-700 text-white whitespace-nowrap"
              >
                GoMate App
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-sage-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-stone-200"
          >
            <div className="flex flex-col gap-4">
              <div className="px-2">
                <SearchInput className="w-full max-w-full" />
              </div>
              
              {navLinks.map((link) => (
                <PrefetchLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors px-2 py-1 ${
                    isActive(link.path)
                      ? 'text-sage-700 bg-sage-50 rounded'
                      : 'text-stone-600 hover:text-sage-600'
                  }`}
                >
                  {link.label}
                </PrefetchLink>
              ))}
              
              {/* Keep About/FAQ accessible in mobile menu even if removed from desktop header for space */}
              <PrefetchLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-stone-600 hover:text-sage-600 px-2 py-1"
              >
                About
              </PrefetchLink>
              <PrefetchLink
                to="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-stone-600 hover:text-sage-600 px-2 py-1"
              >
                FAQ
              </PrefetchLink>

              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-2"
              >
                <Button className="bg-sage-600 hover:bg-sage-700 text-white w-full">
                  GoMate App
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;