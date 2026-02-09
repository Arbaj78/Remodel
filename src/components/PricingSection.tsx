import React from 'react';

export default function AwardWinnersSection() {
  return (
    <section 
      id="page-4862662" 
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

      {/* --- BLOCK 1: Full Width Awards Image --- */}
      <div className="w-full">
        <img 
          src="https://businessautomation.s3.eu-west-1.amazonaws.com/Template_Full_Images/ASP-Superhome_The-Team-Long-Image-4png_1727323364.png" 
          alt="ASP Award Winners"
          className="w-full h-auto object-cover" 
        />
      </div>

    </section>
  );
}