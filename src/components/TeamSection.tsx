import React from 'react';

export default function ManufacturersSection() {
  return (
    <section 
      id="page-4862658" 
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

      {/* --- BLOCK 1: Title Header --- */}
      <div 
        className="w-full py-16 px-6"
        style={{ backgroundColor: '#214270', color: '#ffffff' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Kept large/bold for hierarchy */}
          <h1 className="text-4xl md:text-5xl font-bold">
            Manufacturers
          </h1>
        </div>
      </div>

      {/* --- BLOCK 2: Full Width Image --- */}
      <div className="w-full">
        <img 
          src="https://businessautomation.s3.eu-west-1.amazonaws.com/Template_Full_Images/ASP-Superhome_12png_1730871580.png" 
          alt="Manufacturers Logos"
          className="w-full h-auto object-cover" 
        />
      </div>

    </section>
  );
}