import { Menu, X } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileNav({ isOpen, onToggle }: MobileNavProps) {
  return (
    <div 
      className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-30 "
      // =======================================================
      //  ADDED YOUR REQUESTED CSS HERE
      // =======================================================
      style={{
        fontFamily: '"Open Sans", sans-serif',
        fontWeight: 300,
        lineHeight: '1.5rem',
        fontStyle: 'normal',
        fontSize: '1rem'
      }}
    >
      {/* =======================================================
          IMPORT FONTS (Ensures Open Sans loads)
      ======================================================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
      `}</style>

      <div className="flex items-center justify-between px-6 py-4">
        {/* Brand Name: Kept 'font-bold' so it stands out, but it will use Open Sans now */}
        <span className="text-lg  text-gray-900">ASP 2025 W&D Template (50% DEPOSIT)</span>
        
        <button
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-900" />
          ) : (
            <Menu className="w-6 h-6 text-gray-900" />
          )}
        </button>
      </div>
    </div>
  );
}