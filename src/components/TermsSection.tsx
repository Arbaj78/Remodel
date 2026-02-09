export default function InvestmentSection() {
  const services = [
    {
      name: "Painting Services",
      description: `
        <p><strong>Work to Be Performed:</strong></p>
        <ol>
          <li><strong>Surface Preparation & Cleaning</strong>
            <ul>
              <li>Pressure clean all exterior surfaces to remove dirt, mildew, loose paint, and contaminants.</li>
              <li>Allow surfaces to dry completely before applying primer or paint.</li>
            </ul>
          </li>
          <li><strong>Crack & Surface Repair</strong>
            <ul>
              <li>Inspect all walls for minor hairline cracks.</li>
              <li>Repair small cracks using appropriate patching compound or elastomeric caulk to ensure a smooth, sealed surface.</li>
            </ul>
          </li>
          <li><strong>Priming</strong>
            <ul>
              <li>Apply one coat of primer to all repaired areas and any bare or exposed surfaces to ensure proper adhesion and uniform coverage.</li>
            </ul>
          </li>
          <li><strong>Painting</strong>
            <ul>
              <li>Apply two coats of Sherwin-Williams SuperPaint to all designated exterior surfaces, including stucco walls, fascia, soffits, and trim as specified.</li>
              <li>Ensure full and even coverage with appropriate drying time between coats.</li>
            </ul>
          </li>
          <li><strong>Final Inspection & Cleanup</strong>
            <ul>
              <li>Conduct a final walkthrough to ensure even finish and quality control.</li>
              <li>Remove all debris, masking materials, and job-related waste from the premises.</li>
            </ul>
          </li>
        </ol>
        <p><strong>Exclusions:</strong></p>
        <ul>
          <li>Major stucco or structural repairs.</li>
          <li>Painting of surfaces not specified in this scope (e.g., roofs, gutters, or unrelated structures).</li>
        </ul>
        <p><strong>Color: TBD</strong></p>
      `
    },
    {
      name: "Flooring Services",
      description: `
        <p><strong>Work to be Performed:</strong></p>
        <ol>
          <li><strong>Demolition & Removal</strong>
            <ul>
              <li>Remove existing flooring on both levels.</li>
              <li>Remove existing baseboards throughout.</li>
              <li>Dispose of debris off-site.</li>
            </ul>
          </li>
          <li><strong>Surface Preparation</strong>
            <ul>
              <li>Inspect subfloors for levelness and stability.</li>
              <li>Repair or replace damaged subfloor sections as needed.</li>
              <li>Clean and prep surfaces for new flooring installation.</li>
            </ul>
          </li>
          <li><strong>Flooring Installation</strong>
            <ul>
              <li>Install new flooring material per manufacturer specifications.</li>
              <li>Ensure proper alignment, spacing, and secure fastening.</li>
              <li>Acclimate flooring materials prior to installation as required.</li>
            </ul>
          </li>
          <li><strong>Baseboard Replacement</strong>
            <ul>
              <li>Install new baseboards throughout all areas where flooring is replaced.</li>
              <li>Paint, Caulk and fill nail holes for a smooth finish.</li>
              <li>Prepare baseboards for painting (painting excluded unless otherwise noted).</li>
            </ul>
          </li>
          <li><strong>Final Steps</strong>
            <ul>
              <li>Perform thorough clean-up of all work areas.</li>
              <li>Conduct final walkthrough with client for approval.</li>
            </ul>
          </li>
        </ol>
      `
    },
    {
      name: "Bathroom Remodel",
      description: `
        <p><strong>Scope of Work – Guest Bathroom Remodeling</strong></p>
        <p><strong>Demolition & Prep</strong><br/>
        • Remove existing vanity, toilet, mirrors, baseboards, and wall tile.<br/>
        • Demolish shower area completely, including tub, shower pan and draining.<br/>
        • Dispose of all demolition debris.<br/>
        • Prep and repair walls and subfloor as required for new finishes.</p>
        
        <p><strong>Flooring & Baseboards</strong><br/>
        • Remove existing baseboards and dispose.<br/>
        • Install new tile baseboards for a durable and uniform finish.</p>
        
        <p><strong>Shower Area</strong><br/>
        • Install waterproofing system for long-term protection.<br/>
        • Install new shower floor tile and shower wall tile (tile provided by client).<br/>
        • Construct recessed niche in shower wall (size and placement per client direction).<br/>
        • Relocate plumbing lines as needed to accommodate new layout.<br/>
        • Install new shower fixtures (provided by client).<br/>
        • Install new tub (provided by client).</p>
        
        <p><strong>Plumbing & Fixtures</strong><br/>
        • Install new vanity (provided by client).<br/>
        • Install new toilet (provided by ASP Remodeling).<br/>
        • Install new mirror (provided by ASP Remodeling).<br/>
        • Install new light fixture (provided by ASP Remodeling).<br/>
        • All plumbing connections included for toilet, vanity, tub, and fixture replacements.</p>
        
        <p><strong>Electrical & Ventilation</strong><br/>
        • Install new recessed lighting (provided by ASP Remodeling).<br/>
        • Install new exhaust fan (provided by ASP Remodeling)<br/>
        • Ensure all electrical connections are tested and operating properly.</p>
      `
    },
    {
      name: "Kitchen Remodel",
      description: `
        <p><strong>Project Description:</strong><br/>
        Comprehensive kitchen renovation including demolition, cabinet and countertop installation, appliance setup, electrical modifications, hood exhaust installation, tile repair, sink installation, and localized roof repair. No painting or roof weatherproofing is included.</p>
        
        <p><strong>Scope Details:</strong></p>
        <ol>
          <li><strong>Demolition & Removal</strong>
            <ul>
              <li>Remove all existing upper and lower kitchen cabinets.</li>
              <li>Remove two interior walls as specified by the client (confirmation required to verify non-load-bearing status).</li>
              <li>Remove and cap all electrical wiring, outlets, and switches on the walls to be demolished.</li>
            </ul>
          </li>
          <li><strong>Cabinet Installation</strong>
            <ul>
              <li>Install new upper and lower cabinets per client-provided drawings.</li>
              <li>Ensure proper alignment, anchoring, and installation of client-supplied hardware.</li>
            </ul>
          </li>
          <li><strong>Quartz Countertop Installation</strong>
            <ul>
              <li>Fabricate and install quartz countertops, including cutouts for cooktop, sink, and accessories.</li>
              <li>Final measurements to be taken after cabinet installation.</li>
            </ul>
          </li>
          <li><strong>Tile Repair</strong>
            <ul>
              <li>Repair any wall or floor tiles that break during demolition or utility relocation.</li>
              <li>Client to provide matching tiles.</li>
            </ul>
          </li>
          <li><strong>Plumbing Adjustments & Sink Installation</strong>
            <ul>
              <li>Relocate water lines as needed to accommodate the new kitchen layout.</li>
              <li>Install sink and complete plumbing connections after client provides the sink.</li>
              <li>Includes installation of faucet and drain assembly (provided by client).</li>
            </ul>
          </li>
          <li><strong>Electrical Work</strong>
            <ul>
              <li>Remove all electrical wiring from demolished walls.</li>
              <li>Install new outlets and switches on the kitchen island in compliance with local code.</li>
            </ul>
          </li>
          <li><strong>Appliance Installation</strong>
            <ul>
              <li>Install all client-supplied appliances, including refrigerator, oven, range, microwave, and dishwasher.</li>
              <li>Includes connection to existing plumbing and electrical systems.</li>
            </ul>
          </li>
          <li><strong>Exhaust Hood Installation</strong>
            <ul>
              <li>Install exhaust hood venting through the roof.</li>
              <li>Perform localized roof repair around the vent penetration.</li>
              <li>Note: Weatherproofing of the roof repair is excluded.</li>
            </ul>
          </li>
        </ol>
      `
    }
  ];

  return (
    <section id="page-4862655" className="bg-white py-0">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Pricing Table Header */}
        <div className="bg-[#214270] text-white text-center py-4 px-6 rounded-t-lg">
          <h2 className="text-2xl md:text-3xl font-bold">The Investment</h2>
        </div>

        {/* Pricing Table Body */}
        <div className="border border-gray-200 rounded-b-lg overflow-hidden">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`p-6 ${index !== services.length - 1 ? 'border-b border-gray-200' : ''} ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="grid md:grid-cols-[1fr_auto] gap-4">
                <div>
                  <h3 className="text-xl font-bold text-[#214270] mb-4">{service.name}</h3>
                  <div 
                    className="prose prose-sm max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </div>
                <div className="text-right md:min-w-[120px]">
                  <span className="text-gray-500 text-sm">Price upon request</span>
                </div>
              </div>
            </div>
          ))}

          {/* Payment Terms Section */}
          <div className="p-6 bg-[#f8f9fa] border-t border-gray-200">
            <h3 className="text-xl font-bold text-[#214270] mb-6">Payment Terms without Financing</h3>
            
            <div className="space-y-3 mb-8">
              <p className="font-semibold text-gray-800">50% | Deposit - Contract Signing |</p>
              <p className="font-semibold text-gray-800">40% | Upon Material Delivery & Commencement |</p>
              <p className="font-semibold text-gray-800">10% + City Permit Fees | Upon Passing Final Inspection |</p>
            </div>

            <div className="mb-8">
              <h4 className="font-bold text-gray-800 mb-3">Forms of Payment Accepted:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Checks payable to &quot;ASP Remodeling Services&quot;</li>
                <li>Zelle to &quot;Margarita@AspsuperHome.com&quot;</li>
                <li>Credit or Debit Card: 3% Convenience fee</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">Financing Options:</h4>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h5 className="font-bold text-[#214270] mb-2">Upgrade Financial Plans:</h5>
                  <p className="font-semibold text-gray-800">8.99% APR for 15 Years @ 1.01% PF</p>
                  <p className="text-gray-600">Financed Price: $_____</p>
                  <p className="text-gray-600">Payment amount: $_____</p>
                  <p className="text-sm text-gray-500 mt-2 italic">
                    **This loan option has no pre-payment penalty & is subject to credit approval and worthiness - Minimum Fico score 660**
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-800">0% APR for 12 Months</p>
                  <p className="text-gray-600">Financed Price: $_____</p>
                  <p className="text-gray-600">Payment amount: $_____</p>
                  <p className="text-sm text-gray-500 mt-2 italic">
                    **This loan option has no pre-payment penalty & is subject to credit approval and worthiness - Minimum Fico score 660**
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


//page-4862654