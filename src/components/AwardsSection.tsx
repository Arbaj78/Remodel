import React from 'react';

export default function MeetTheTeamSection() {
  return (
    <section 
      id="page-4862653" 
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
      
      {/* --- BLOCK 1: Full Width Team Image --- */}
      <div className="w-full">
        <img 
          src="https://businessautomation.s3.eu-west-1.amazonaws.com/Template_Full_Images/ASP-Superhome_The-Team-Long-Imagepng_1727051359.png" 
          alt="ASP Team"
          className="w-full h-auto object-cover" 
        />
      </div>

      {/* --- BLOCK 2: Text Content --- */}
      <div 
        className="w-full py-16 px-6"
        style={{ backgroundColor: '#ffffff', color: '#2d2d2d' }}
      >
        <div className="max-w-4xl mx-auto">
          
          {/* Heading */}
          {/* Kept standard header size and bold for hierarchy */}
          <h2 className="text-3xl md:text-4xl text-center mb-8 font-bold">
            <em>
              Our team is here to facilitate every phase of your project with speed and efficiency. ASP consists of the following departments:
            </em>
          </h2>

          {/* Department List */}
          {/* REMOVED 'text-xl', 'text-2xl', 'font-normal' so it inherits 1rem and weight 300 */}
          <ul className="leading-relaxed space-y-6 list-disc list-outside ml-5">
            
            <li>
              <strong>Intake Sales Office Team: </strong> 
              This group is responsible for scheduling your initial sales appointment with one of our specialist and will be the ones staying in direct communication with you up until you decide to move forward with our company.
            </li>

            <li>
              <strong>Outbound Sales Team: </strong> 
              This dedicated and talented team will work closely with you to ensure a seamless experience, exceeding your expectations every step of the way. They’ll be your primary point of contact, guiding you smoothly through the entire process and ensuring your project’s success.
            </li>

            <li>
              <strong>Project Assessment Team: </strong> 
              This critical phase of your project is handled by our expert technicians at ASP, who bring over a decade of experience to ensure precise measurements and a perfect, seamless fit during installation.
            </li>

            <li>
              <strong>Order Processing Team: </strong> 
              Our team works in pairs, providing two sets of eyes and ears on every order to ensure accuracy and minimize errors, delivering a smooth and reliable ordering process.
            </li>

            <li>
              <strong>Customer Service and Coordination Team: </strong> 
              These two departments have been combined to ensure alignment with this phase of the process, providing clear and direct communication while ensuring that your questions and concerns during the installation are addressed in real time.
            </li>

            <li>
              <strong>Warehouse Management Team: </strong> 
              This group manages the shipping and receiving of your materials, ensuring quality control and verifying that your products arrive from the manufacturer in good condition and are delivered to your home protected and free from damage.
            </li>

            <li>
              <strong>Installation Team: </strong> 
              At ASP, we don't hire just any installation crew. Our teams undergo rigorous training protocols and probationary periods before earning a permanent position with our company. They are required to attend bi-monthly training sessions and meetings to stay current with the latest code requirements and uphold ASP's high standards.
            </li>

            <li>
              <strong>Installation Supervisors: </strong> 
              This dedicated team is responsible for overseeing the installation process to ensure that all safety and quality protocols are adhered to. They regularly visit the site to monitor progress, address any concerns, and ensure that all work is performed to the highest standards. Additionally, our supervisors take special care to protect your personal belongings, ensuring they are covered and safeguarded during the installation process. Their expertise and commitment help create a seamless experience for you.
            </li>

          </ul>
        </div>
      </div>

    </section>
  );
}