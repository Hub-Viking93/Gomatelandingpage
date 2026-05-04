import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  PanelLeftClose, 
  PanelLeftOpen,
  ChevronLeft
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Breadcrumb from '@/components/Breadcrumb';
import { getFieldGuideStructure } from '@/data/fieldGuide/discoverStructure';

const FieldGuideSidebar = ({ isCollapsed, toggleCollapse, breadcrumbItems }) => {
  const { categoryId, articleId } = useParams();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [structure, setStructure] = useState([]);
  
  // State for expanded categories (Accordion behavior)
  const [expandedCategories, setExpandedCategories] = useState({});

  // Load structure on mount
  useEffect(() => {
    const data = getFieldGuideStructure();
    setStructure(data);

    // Initial expansion logic
    const initialExpanded = {};
    if (categoryId) {
      initialExpanded[categoryId] = true;
    } else {
      // By default, expand all categories on desktop for better visibility
      data.forEach(cat => {
        initialExpanded[cat.id] = true;
      });
    }
    setExpandedCategories(prev => ({ ...initialExpanded, ...prev }));
  }, []); // Only run once to load structure

  // When navigating to a new category, ensure it is expanded
  useEffect(() => {
    if (categoryId) {
      setExpandedCategories(prev => ({
        ...prev,
        [categoryId]: true
      }));
    }
  }, [categoryId]);

  const toggleCategory = (catId) => {
    if (isCollapsed) {
      toggleCollapse();
      setExpandedCategories(prev => ({ ...prev, [catId]: true }));
    } else {
      setExpandedCategories(prev => ({
        ...prev,
        [catId]: !prev[catId]
      }));
    }
  };

  const SidebarContent = ({ collapsed }) => (
    <div className={cn("py-6 flex flex-col h-full", collapsed ? "px-2" : "px-4")}>
      {/* Header Area - Desktop Only Title */}
      <div className={cn("flex items-center mb-8", collapsed ? "justify-center" : "justify-between px-2")}>
        {!collapsed && (
          <div>
            <h2 className="text-xl font-serif font-bold text-stone-900 whitespace-nowrap">Field Guide</h2>
            <p className="text-xs text-stone-500 mt-1 whitespace-nowrap">Relocation Intelligence</p>
          </div>
        )}
        
        {/* Desktop Collapse Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleCollapse}
          className={cn("hidden lg:flex text-stone-400 hover:text-stone-900 hover:bg-stone-100", collapsed && "mx-auto")}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 flex-1 overflow-y-auto custom-scrollbar">
        {structure.map((category) => {
          const isActiveCategory = categoryId === category.id;
          const isExpanded = expandedCategories[category.id];
          
          return (
            <div key={category.id} className="relative group">
              {/* Category Header */}
              {collapsed ? (
                // Collapsed View: Icon Only with Tooltip-like behavior
                <NavLink
                  to={`/field-guide/${category.id}`}
                  className={({ isActive }) => cn(
                    "flex items-center justify-center w-10 h-10 mx-auto rounded-md transition-colors relative group/icon",
                    isActive || isActiveCategory
                      ? "bg-sage-100 text-sage-900" 
                      : "text-stone-500 hover:bg-stone-100 hover:text-stone-900"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  <category.icon size={20} />
                  
                  {/* Custom Tooltip */}
                  <div className="absolute left-full ml-2 px-2 py-1 bg-stone-800 text-white text-xs rounded opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all whitespace-nowrap z-50 pointer-events-none">
                    {category.title}
                  </div>
                </NavLink>
              ) : (
                // Expanded View: Full Accordion
                <>
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className={cn(
                      "flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors group select-none",
                      isActiveCategory 
                        ? "bg-stone-100 text-stone-900" 
                        : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon size={18} className={cn(
                        "transition-colors",
                        isActiveCategory ? "text-sage-600" : "text-stone-400 group-hover:text-stone-600"
                      )} />
                      <span className="truncate">{category.title}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronDown size={14} className="text-stone-400" />
                    ) : (
                      <ChevronRight size={14} className="text-stone-300 group-hover:text-stone-400" />
                    )}
                  </button>

                  {/* Articles List */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 ml-2 border-l border-stone-200 space-y-0.5 py-1 my-1">
                          {category.articles.map((article) => (
                            <NavLink
                              key={article.id}
                              to={`/field-guide/${category.id}/${article.id}`}
                              onClick={() => setMobileOpen(false)}
                              className={({ isActive }) => cn(
                                "block px-3 py-2 text-xs rounded-md transition-all truncate",
                                isActive
                                  ? "bg-sage-50 text-sage-800 font-medium translate-x-1"
                                  : "text-stone-500 hover:text-stone-900 hover:bg-stone-50 hover:translate-x-1"
                              )}
                              title={article.title}
                            >
                              {article.title}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>
          );
        })}
      </nav>
      
      {/* Footer Area */}
       {!collapsed && (
        <div className="pt-4 border-t border-stone-200 mt-2 px-2">
           <NavLink to="/" className="flex items-center gap-2 text-xs text-stone-500 hover:text-stone-900 transition-colors">
              <ChevronLeft size={12} /> Back to GoMate
           </NavLink>
        </div>
       )}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside 
        className={cn(
          "hidden lg:flex flex-col border-r border-stone-200 bg-stone-50/50 min-h-screen sticky top-[64px] h-[calc(100vh-64px)] transition-all duration-300 ease-in-out z-20",
          isCollapsed ? "w-20" : "w-72"
        )}
      >
        <SidebarContent collapsed={isCollapsed} />
      </aside>

      {/* Mobile Sidebar Toggle Header + Breadcrumb Area */}
      <div className="lg:hidden sticky top-[64px] z-30 bg-stone-50 border-b border-stone-200 shadow-sm flex flex-col">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2 overflow-hidden">
             <span className="text-sm font-serif font-bold text-stone-900 truncate">
               Field Guide
             </span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setMobileOpen(true)}
            className="text-stone-600 hover:text-stone-900 hover:bg-stone-100 ml-2"
          >
            <Menu size={20} />
          </Button>
        </div>
        {/* Mobile Breadcrumbs Display */}
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <div className="px-4 pb-2 pt-0 w-full overflow-hidden">
             <Breadcrumb items={breadcrumbItems} className="text-xs" />
          </div>
        )}
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-stone-50 shadow-2xl z-50 lg:hidden flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-stone-200 bg-white">
                <span className="font-serif font-bold text-xl text-stone-900">Field Guide</span>
                <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                  <X size={20} />
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <SidebarContent collapsed={false} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FieldGuideSidebar;