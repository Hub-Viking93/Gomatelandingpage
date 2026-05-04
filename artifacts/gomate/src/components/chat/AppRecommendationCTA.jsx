import React from 'react';
import { ArrowRight, CheckCircle2, Layout, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_SIGNUP_URL } from '@/lib/config';

const AppRecommendationCTA = () => {
  return (
    <div className="mt-4 mb-2 overflow-hidden rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white shadow-sm">
      <div className="p-4">
        <div className="flex items-start gap-3 mb-3">
          <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 mt-0.5">
            <Layout size={18} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-indigo-900 leading-tight mb-1">
              Need a personalized relocation plan?
            </h4>
            <p className="text-xs text-indigo-700/80 leading-relaxed">
              The GoMate App offers tailored guidance specifically for your destination and timeline.
            </p>
          </div>
        </div>
        
        <div className="space-y-2 mb-4 pl-1">
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <CheckCircle2 size={12} className="text-teal-500" />
            <span>Step-by-step visa roadmaps</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <CheckCircle2 size={12} className="text-teal-500" />
            <span>Personalized timeline & budget</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <CheckCircle2 size={12} className="text-teal-500" />
            <span>Documents checklist & housing tools</span>
          </div>
        </div>

        <a
          href={APP_SIGNUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-200 h-9 text-xs font-semibold group"
          >
            <Sparkles size={14} className="mr-2 text-indigo-200" />
            Start Your GoMate Plan
            <ArrowRight size={14} className="ml-2 opacity-70 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default AppRecommendationCTA;