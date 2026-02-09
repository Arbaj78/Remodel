import React, { useEffect, useRef } from 'react';

interface SidebarProps {
  activeSection: string;
  isMobileOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { id: 'page-4862652', label: "ASP's History" },
  { id: 'page-4862657', label: "Protecting What Matters" },
  { id: 'page-4862665', label: "Manufacturers" },
  { id: 'page-4862656', label: "Meet The Team" },
  // { id: 'page-4862658', label: "Manufacturers" },
  // { id: 'page-4862659', label: "The ASP Journey" },
  // { id: 'page-4862653', label: "Meet The Team" },
  { id: 'page-4862661', label: "Happy Customer's" },
  { id: 'page-4862662', label: "Award Winners !!!" },
  { id: 'page-4862660', label: "ASP Licenses" },
  { id: 'page-4862655', label: "The Investment" },
  { id: 'page-4862664', label: "Contact Your Representative" },
  { id: 'page-4862654', label: "Terms and Conditions" },
];

export default function Sidebar({ activeSection, isMobileOpen, onClose }: SidebarProps) {
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (activeSection) {
      const activeBtn = document.getElementById(`sidebar-btn-${activeSection}`);
      if (activeBtn && sidebarRef.current) {
        activeBtn.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Improved scrolling calculation
      const headerOffset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      onClose();
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(0,0,0,0.1);
          border-radius: 3px;
        }
      `}</style>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity ${
          isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar Container */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-[340px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 border-r border-gray-200 overflow-y-auto custom-scrollbar`}
        style={{ 
          backgroundColor: '#ffffff',
          fontFamily: '"Open Sans", sans-serif',
          fontWeight: 300,
          lineHeight: '1.5rem',
          fontStyle: 'normal',
          fontSize: '1rem'
        }}
      >
        <div className="flex flex-col min-h-full">
          
          {/* Logo Section */}
          <div className="p-8 flex justify-center items-center border-b border-gray-100">
            <img 
              /* FIX: Changed ./ to / to ensure path is always from root */
              src="/ASP-Superhome_ASPoriginalblue-swirlspdf_4557.png"
              alt="ASP Superhome" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-6">
            <div className="flex flex-col">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  id={`sidebar-btn-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-8 py-4 transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'font-bold' 
                      : 'text-[#333333]'
                  }`}
                  style={{
                    backgroundColor: activeSection === item.id ? '#e3e6ed' : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.backgroundColor = '#f7f8fa';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}