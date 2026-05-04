import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MapPin, ExternalLink, Sparkles } from 'lucide-react';

const ResourcesSection = ({ resources }) => {
  if (!resources || resources.length === 0) return null;

  return (
    <div className="mt-4 pt-3 border-t border-stone-100 animate-in fade-in slide-in-from-bottom-2 duration-700">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={14} className="text-sage-500" />
        <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
          Helpful Resources
        </h4>
      </div>
      
      <div className="grid gap-2">
        {resources.map((resource, idx) => (
          <Link 
            key={idx} 
            to={resource.path}
            className="group block"
          >
            <div className="flex items-center gap-3 p-2.5 rounded-lg bg-stone-50 border border-stone-200 hover:border-sage-300 hover:bg-white hover:shadow-sm transition-all duration-200">
              <div className={`
                p-2 rounded-md shrink-0 transition-colors
                ${resource.type === 'country' 
                  ? 'bg-orange-50 text-orange-600 group-hover:bg-orange-100' 
                  : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'}
              `}>
                {resource.type === 'country' ? <MapPin size={16} /> : <BookOpen size={16} />}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-stone-800 truncate group-hover:text-sage-700 transition-colors">
                  {resource.title}
                </p>
                <p className="text-[10px] text-stone-500 truncate">
                  {resource.type === 'country' ? 'Comprehensive Country Guide' : 'Field Guide Article'}
                </p>
              </div>
              
              <ExternalLink size={14} className="text-stone-300 group-hover:text-sage-400 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSection;