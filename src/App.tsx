import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components Imports
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import ServiceSection from './components/ServiceSection';
import ProcessSection from './components/ProcessSection';
import TeamSection from './components/TeamSection';
import ReviewsSection from './components/ReviewsSection';
import AwardsSection from './components/AwardsSection';
import LicensesSection from './components/LicensesSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import TermsSection from './components/TermsSection';
import MobileNav from './components/MobileNav';
import Question from './components/Question';
import Terms from './components/T&condition';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Improved Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'hero';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Agar section ka top screen ke upper part mein hai
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.getAttribute('id') || 'hero';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <MobileNav
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        <Sidebar
          activeSection={activeSection}
          isMobileOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        <div className="lg:ml-[340px]">
          <Routes>
            <Route path="/" element={
              <main>
                <Hero /> {/* id="hero" */}
                <IntroSection /> {/* id="page-4862652" */}
                <ServiceSection /> {/* id="page-4862657" etc. */}
                <ProcessSection />
                {/* <TeamSection /> */}
                {/* <ReviewsSection /> */}
                {/* <AwardsSection /> */}
                <LicensesSection /> 
                <PricingSection />
                <ContactSection />
                <TermsSection />
                <Question />
                <Terms />
              </main>
            } />
            
            <Route path="/page/:id" element={
              <main>
                <Hero />
                <IntroSection />
                <ServiceSection />
                <ProcessSection />
                {/* <TeamSection /> */}
                {/* <ReviewsSection /> */}
                {/* <AwardsSection /> */}
                <LicensesSection /> 
                <PricingSection />
                <ContactSection />
                <TermsSection />
                <Question />
                <Terms />
              </main>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;