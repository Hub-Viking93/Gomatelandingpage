import React, { useState, useEffect } from 'react';
import {
  CreditCard,
  Briefcase,
  Home,
  Heart,
  Coffee,
  Info,
  Plane,
  AlertTriangle,
  Building2,
  BookOpen,
  Target,
  XCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'who-is-it-for', label: 'Who Is It For', icon: Target },
  { id: 'realities', label: 'Relocation Realities', icon: Info },
  { id: 'visa', label: 'Visa & Legal', icon: CreditCard },
  { id: 'work-income', label: 'Work & Income', icon: Briefcase },
  { id: 'housing', label: 'Housing', icon: Home },
  { id: 'healthcare', label: 'Healthcare', icon: Heart },
  { id: 'daily-life', label: 'Daily Life', icon: Coffee },
  { id: 'travel-mobility', label: 'Travel & Mobility', icon: Plane },
  { id: 'considerations', label: 'Considerations', icon: AlertTriangle },
  { id: 'common-mistakes', label: 'Common Mistakes', icon: XCircle },
  { id: 'service-directory', label: 'Service Directory', icon: BookOpen },
  { id: 'emergency-services', label: 'Emergency', icon: AlertTriangle },
  { id: 'official-sources', label: 'Official Sources', icon: Building2 },
];

const CountryPageSidebar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px', // Trigger when section is near top
        threshold: 0
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="hidden md:block sticky top-24 h-fit w-64 space-y-1">
      <div className="bg-white/80 backdrop-blur-md border border-stone-200 rounded-xl p-4 shadow-sm">
        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-4 px-2">
          On This Page
        </h3>
        <ul className="space-y-1">
          {sections.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 group",
                  activeSection === id 
                    ? "bg-sage-100 text-sage-800 shadow-sm" 
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                )}
              >
                <Icon size={16} className={cn(
                  "transition-colors",
                  activeSection === id ? "text-sage-600" : "text-stone-400 group-hover:text-stone-600"
                )} />
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CountryPageSidebar;