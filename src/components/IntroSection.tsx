import React from 'react';

export default function IntroSection() {
  return (
    <section id="page-4862657" className="bg-[#214270] py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          <strong>Protecting What Matters</strong>
        </h2>
        
        <div className="prose prose-lg max-w-none text-white">
          <p className="mb-4">
            Our installation teams are trained to establish workstations outside of your home to safeguard your exterior floors and other elements of your property.
          </p>
          
          <p>
            A vital component of our preparation protocol involves that your interior belongings receive proper coverage and protection through our installation barriers.
          </p>
        </div>
      </div>

      {/* Full Width Image */}
      <div className="mt-12">
        <img 
          src="https://businessautomation.s3.eu-west-1.amazonaws.com/Template_Full_Images/ASP-Superhome_ASP-Remodeling-Prepworkpng_1737660117.png"
          alt="ASP Remodeling Prep Work"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}