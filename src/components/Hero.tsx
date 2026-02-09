import React from 'react';

// TypeScript Interface for props
interface IntroSectionProps {
  firstName?: string;
  ownerName?: string;
  ownerSurname?: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({ 
  firstName = "{{first_name}} ", 
  ownerName = "{{owner_first_name}}", 
  ownerSurname = "{{owner_surname}}!" 
}) => {
  return (
    <section 
      id="page-4862652" 
      className="w-full text-[#214270] overflow-x-hidden"
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
          CUSTOM CSS FOR SHADOW, ANIMATION & FONTS
      ======================================================= */}
      <style>{`
        /* IMPORT OPEN SANS FONT */
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

        /* Animation */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translate3d(0, 40px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .animate-reveal {
          animation: fadeInUp 1s ease-out forwards;
        }

        /* THE DROP SHADOW STYLE */
        .divider-shadow {
          filter: drop-shadow(0px 8px 6px rgba(0, 0, 0, 0.45));
        }
      `}</style>

      {/* =======================================================
          BLOCK 1: HERO SECTION
      ======================================================= */}
      <div 
        className="relative w-full pt-32 pb-24 px-6 bg-cover bg-center bg-no-repeat z-30 "
        style={{ 
          backgroundColor: '#214270',
          backgroundImage: "url('https://businessautomation.s3.eu-west-1.amazonaws.com/Template_BG_Images/ASP-Superhome_Remodeling-BAckgroundjpg_1737656315.jpg')" 
        }}
      >
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#214270] opacity-80 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white animate-reveal">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-wide drop-shadow-md">
            "Your Vision, Our Craftsmanship, Remodeling Done Right"
          </h1>
        </div>

        {/* --- DIVIDER 1: BLUE V-SHAPE WITH SHADOW --- */}
        <div className="absolute bottom-0 left-0 w-full overflow-visible leading-none z-40 translate-y-[95%]">
          <svg 
            className="block w-full h-[40px] md:h-[60px] divider-shadow" 
            viewBox="0 0 1200 60" 
            preserveAspectRatio="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,0 L600,60 L1200,0 V-10 H0 Z" fill="#214270" />
          </svg>
        </div>
      </div>

      {/* =======================================================
          BLOCK 2: THE LETTER (Intro)
      ======================================================= */}
      <div 
        className="relative w-full pt-24 pb-24 px-6 z-20"
        style={{ backgroundColor: '#f5f5f5', color: '#214270' }}
      >
        {/* Note: Kept 'font-bold' class here as it overrides the global weight 300. Remove 'font-bold' if you want this text to be thin too. */}
        <div className="max-w-4xl mx-auto font-bold animate-reveal" style={{animationDelay: '0.2s'}}>
          <p className="mb-6"><br /></p>
          {/* <p className="mb-6">Dear {firstName} ,</p> */}
          <p className="mb-6">
         Thank you for giving us the opportunity to earn your business and for considering ASP Remodeling Services for your home remodeling needs.
          </p>
          <p className="mb-6">
            This proposal outlines the options discussed for your home and will answer any questions you may have about the process.
          </p>
          <p>
            We can assure you our specialized team of experts will treat your home as if it was their own. Thanks again and we look forward to hearing from you after your done reviewing this detailed proposal.
          </p>
        </div>

        {/* --- DIVIDER 2: WHITE V-SHAPE WITH SHADOW --- */}
        <div className="absolute bottom-0 left-0 w-full overflow-visible leading-none z-40 translate-y-[95%]">
          <svg 
            className="block w-full h-[40px] md:h-[60px] divider-shadow" 
            viewBox="0 0 1200 60" 
            preserveAspectRatio="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,0 L600,60 L1200,0 V-10 H0 Z" fill="#f5f5f5" />
          </svg>
        </div>
      </div>

      {/* =======================================================
          BLOCK 3: ASP HISTORY
      ======================================================= */}
      <div 
        className="relative w-full pt-28 pb-16 px-6 z-10"
        style={{ backgroundColor: '#214270', color: '#ffffff' }}
      >
        <div className="max-w-4xl mx-auto animate-reveal" style={{animationDelay: '0.4s'}}>
          <h2 className="text-3xl md:text-4xl text-center mb-8 font-bold drop-shadow-md">
            ASP's History
          </h2>
          
          <p className="mb-6"><br /></p>

          <div className="space-y-6 text-left">
              <p className="mb-6">
            At ASP SuperHome, protecting families has been our core mission since 2006. Founded with a commitment to safeguard those you love, we specialize in hurricane protection, impact windows, and doors, roofing and now we offer a full array of remodeling services to complete your homes transformation, ensuring every detail reflects your style and needs. Our goal goes beyond just upgrading your home&apos;s appearance—we&apos;re here to provide true peace of mind.
          </p>
          
          <p className="mb-6">
            Choose ASP SuperHome and ASP Remodeling for unparalleled security and style. Protecting your home is our mission, safeguarding your family is our passion, and bringing your vision to life is our promise. Welcome to ASP SuperHome &amp; ASP Remodeling—where quality meets care.
          </p>
         
            <p>
              Schedule your visit today with your representative {ownerName} {ownerSurname}!
            </p>
          </div>
        </div>
      </div>

      {/* =======================================================
          BLOCK 4: IMAGE FOOTER
      ======================================================= */}
      <div className="w-full relative z-0">
        <img 
          src="https://businessautomation.s3.eu-west-1.amazonaws.com/Template_Full_Images/ASP-Superhome_The-Team-Long-Image-5png_1730856950.png" 
          alt="The ASP Team"
          className="w-full h-auto object-cover" 
        />
      </div>

    </section>
  );
};

export default IntroSection;