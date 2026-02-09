import React from 'react';

interface ContactRepProps {
  ownerFirstName?: string;
  ownerSurname?: string;
  ownerEmail?: string;
}

export default function ContactYourRepresentativeSection({ 
  ownerFirstName = "Jonathan", 
  ownerSurname = "Rodriguez", 
  ownerEmail = "jonathan@aspsuperhome.com" 
}: ContactRepProps) {
  return (
    <section 
      id="page-4862664" 
      className="w-full"
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

      {/* --- BLOCK 1: Contact Details --- */}
      <div 
        className="w-full py-16 px-6"
        style={{ backgroundColor: '#214270', color: '#ffffff' }}
      >
        <div className="max-w-4xl mx-auto">
          
          {/* Centered Heading */}
          {/* Kept large/bold for hierarchy */}
          <h1 className="text-4xl md:text-5xl text-center mb-10 font-bold uppercase">
            QUESTIONS?
          </h1>

          {/* Left Aligned Content */}
          {/* REMOVED 'text-xl', 'text-2xl', 'font-normal' to inherit 1rem and weight 300 */}
          <div className="text-left space-y-6">
            <p>
              <strong>Contact me: </strong>
            </p>

            {/* Kept Name large and bold */}
            <h2 className="text-3xl md:text-4xl font-bold">
              {ownerFirstName} {ownerSurname}
            </h2>

            <p>
              {ownerEmail}
            </p>

            <p>
              <a 
                href="https://aspsuperhome.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                <strong>Website: AspSuperHome.com</strong>
              </a>
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}