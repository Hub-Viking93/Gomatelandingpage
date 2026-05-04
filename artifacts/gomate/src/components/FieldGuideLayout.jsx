import React, { useState, useEffect } from 'react';
import FieldGuideSidebar from './FieldGuideSidebar';
import Breadcrumb from './Breadcrumb';
import { cn } from '@/lib/utils';

const FieldGuideLayout = ({ children, breadcrumbItems }) => {
  // Initialize state from localStorage if available
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sidebarCollapsed');
      return saved === 'true';
    }
    return false;
  });

  const toggleSidebar = () => {
    const newState = !isSidebarCollapsed;
    setIsSidebarCollapsed(newState);
    localStorage.setItem('sidebarCollapsed', String(newState));
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-stone-50 relative">
      <FieldGuideSidebar 
        isCollapsed={isSidebarCollapsed} 
        toggleCollapse={toggleSidebar}
        breadcrumbItems={breadcrumbItems} 
      />
      <main 
        className={cn(
          "flex-1 w-full min-w-0 transition-all duration-300 ease-in-out flex flex-col",
          // On desktop, the sidebar is sticky/fixed conceptually in the flex flow, 
          // but we don't need margin-left if it's a flex item.
          // The flex layout handles the space.
        )}
      >
        {/* Desktop Breadcrumb Header */}
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <div className="hidden lg:flex items-center px-8 py-3 bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-[64px] z-10">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}
        
        {/* Main Content Area */}
        <div className="flex-1">
          {children}
        </div>
      </main>
    </div>
  );
};

export default FieldGuideLayout;