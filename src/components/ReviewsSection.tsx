import React from 'react';

export default function JourneySection() {
  return (
    <section 
      id="page-4862659" 
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

      {/* --- BLOCK 1: The ASP Journey Text Content --- */}
      <div 
        className="w-full py-16 px-6"
        style={{ backgroundColor: '#ffffff', color: '#000000' }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          {/* Kept Large & Bold for hierarchy */}
          <h2 className="text-4xl md:text-5xl text-center mb-4 font-bold">
            The ASP Journey
          </h2>

          {/* Subheading */}
          {/* REMOVED 'text-xl', 'text-2xl' so it matches 1rem base size. Kept bold for emphasis. */}
          <p className="text-center mb-10 font-bold">
            Here is a step by step breakdown of the process and your journey with our company
          </p>

          {/* Ordered List Steps */}
          {/* REMOVED 'text-xl', 'text-2xl', 'font-normal' to inherit 1rem and weight 300 */}
          <ol className="list-decimal list-outside ml-5 space-y-6 leading-relaxed">
            
            <li>
              <strong>Sign the agreement:</strong> Our specialists will work closely with you to find the best fit and highest value solution for your project. They will be with you before, during and after the project is finished.
            </li>

            <li>
              <strong>Project Assessment: </strong>Our project assessment team will be scheduled immediately after phase 1 has been completed. The final measurements will take place during this appointment to ensure a seamless fit along with finalizing the details of the project with you. The appointment will usually take place within 1-2 weeks from the agreement signing.
            </li>

            <li>
              <strong>Permitting:</strong> Once phase 2 has been completed, the permitting process will begin with the building department representing the municipality that your home is located in. Our permit team has worked in every municipality over the last 17 years acquiring the necessary experience and knowledge to get permits processed and approved quickly and efficiently.
            </li>

            <li>
              <strong>Order Submission:</strong> At this stage of the process we have received your approved project assessment and we are ready to submit your order into production.
            </li>

            <li>
              <strong>Order Received by the Warehouse: </strong>During this phase our warehouse team will conduct a quality control check on all of the materials to ensure everything arrived in good condition.
            </li>

            <li>
              <strong>Installation: The home stretch!!</strong> This is such an exciting part of the Journey because you start to see everything come together. Your team will begin to prepare the job site and protect all of your belongings prior to begining the installation.
            </li>

            <li>
              <strong>Final Walkthrough: We made it!! </strong>Emotions run high during this phase and there are no shortages on the amount of hugs that you will be sharing with your specialist and your installation team. Once the celebration starts to simmer down we will sit with you to collect a review, your feedback on the experience and your journey with ASP Superhome.
            </li>

          </ol>
        </div>
      </div>

    </section>
  );
}