

export default function HappyCustomersSection() {
  return (
    <section 
      id="page-4862661" 
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

      {/* --- BLOCK 1: Full Width Image --- */}
      <div className="w-full">
        <img 
          src="https://businessautomation.s3.eu-west-1.amazonaws.com/Template_Full_Images/ASP-Superhome_The-Team-Long-Image-1png_1727053269.png" 
          alt="ASP Team Banner"
          className="w-full h-auto object-cover" 
        />
      </div>

      {/* --- BLOCK 2: Happy Customer's Text & Links --- */}
      <div 
        className="w-full py-16 px-6"
        style={{ backgroundColor: '#214270', color: '#ffffff' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Heading */}
          {/* Kept Bold & Large for hierarchy */}
          <h1 className="text-4xl md:text-5xl mb-8 font-bold">
            Happy Customer's
          </h1>

          {/* Body Text */}
          {/* REMOVED 'text-xl', 'text-2xl' and 'strong' tags so it uses the 300 weight/1rem size */}
          <div className="leading-relaxed space-y-6">
            <p>
              Our clients are everything to us here at ASP. The moment that you believed in us and provided us with the opportunity to serve you, you became a part of our family. Like all families should, we will be here for you not only during the process, but we will be here long after. Letting our family protect yours is not just a motto that we use to earn your business, this is truly a way of life and part of our culture here at ASP. Like family we have your back before, during and after the storm.
            </p>

            <p>
              Please take a moment to visit the links that we have provided below that will take you directly to several platforms that ASP has been reviewed on and the thousands of home owners that went through the experience with us.
            </p>
          </div>

          {/* Sub Heading */}
          <h3 className="text-2xl md:text-3xl mt-10 mb-6 font-bold">
            CLICK ON THE LINK BELOW
          </h3>

          {/* Links List */}
          {/* REMOVED 'text-xl' to match new style, kept bold for clickability */}
          <div className="space-y-4 font-bold">
            <div>
              <a 
                href="https://d5hvgw04.na1.hs-sales-engage.com/Ctc/Y+23284/d5hvgw04/JlF2-6qcW8wLKSR6lZ3l_VNg9Db6_y04qW82n8pf77xk-xW2LSRHg1zTX5ZN3z7Hnx7bTP6W4G7kP11lrkVlW6vTl9h5NVsK0N3Z9l6lCrq-6W5cccXg8-89QKW4HcZ3q6hB9shW85LT9350t7zjW9bpXd_6LWbBgW6C5d3v1Ns1zGN3zbxPQrZY_vVTbkxX1mFrVDW7_SxQR21PFXTW8L3bn43LBb6dW81QpkQ1M5blDW8D1YvH4R9sr7W2Y90Cj5sw9hrW6WkSlb2d9HVJW6-hGPc2zLV_hW5wQ76s1QHZv5W10hlvF1M3Y92W4kKfcR7Vq3HKW8KwxqG4nCn9ZW6h4DHt7nppGhW4Gy76w8Gx3W6F6LlL-dl_Zpf4Y-xB604" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                American Storm Protection - Better Business Bureau
              </a>
            </div>
            
            <div>
              <a 
                href="https://d5hvgw04.na1.hs-sales-engage.com/Ctc/Y+23284/d5hvgw04/JlF2-6qcW8wLKSR6lZ3ngW7Y8Q0q1Xs2LsW8mm_1l826sWXW5tlnMJ4LdHM2W6HnR1T7lcSdGW8K4p7Q7SsX_JW4VdL644qVDhrW8XgD684-Td49W5nyZBW92B3yCW2wWsCF4BT_pGW3FcrP18tjRgrW2t2x8Q3Wr3f3N3QnNx2HkmsrW6PrJ053Ghz95W197Vkw1cJ59zW6XJ1Ty2yJm8jW2S48P26StdG5V1Zhrq6F2fZxV78NGl65hFvTW4bPkcQ50Y2_DW1-S7kh6LMFlsW97hvGf4F22TsW6RSHpX5j61kKW8L8qJR7wfh83W4pLRNS6w9VW8W5F-fkf913LJ_W13ld5z3BTRNhW35XTkp7WyxQHW2cRzcm1Z8vyyf1fr7V204" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                ASP SuperHome - Angie's List (Rated 4.8 Stars - 397 Reviews)
              </a>
            </div>

            <div>
              <a 
                href="https://d5hvgw04.na1.hs-sales-engage.com/Ctc/Y+23284/d5hvgw04/Jl28VMXNW7lDv8P6lZ3lTVv8JFD7m8qmTV9kh1w8yrQ79W1nP8cg6rgmtKW1DyxsW8HYMXmW7cB1838dvrXfW88dTrZ70P0BrW34gkVD3tzjy1N1ySmB3WhsXnN3FxV9FY5f9cVF4BY34KghrrW93SKN045vw5qW2QYFmL9cKZLmVplv3F86QfjcW8NGkct4QjxG3W3jhPFN72bK6xN1Jd-XYx-wF1W2hWNrx81MXQsW6p_xTx8rXgs1Mh8bQ8lcYrRW4Q_jzY4Jck6NW1Pd1Yr30fs5CW7gq8qJ83Hf8zV1QjV71D-wWfW3-j8CP3SxZ5XW6Fz0ZJ4VcxNYW8g9Fx-8NcPXVW540nTr4qf-tvW2Yjm3d59-9yyW1vjwX030vmpDW7RwVrt6hBwJlW3z6SH277sJmDVD42_L1qN1GFW2gbWf26z9TMwW7qlb527gmf5QN3pZcKkhnCS6W29-5pm3jvD38W4Q04vW4St7LlW2YFDCn3pKq2bW27b6hk55pYLjW9ksLpC1dksPxW2pMwl06hZCZ0W62lfJD4bhcmsW4TcGgy8Tjg8QW6HkwNT5Ky7cLW72V3sH4VT1RvW5gzCXC1Q1rwBN7RJsX-Tj0CzW5gYGky38RzbJW78WB6X7tTYd_W3m_kq68T5zLKW6K2s5s4443CM3W70GBYT4CXffMN6JLcFxnPyXvW1dlzKc7cjY9zW2Q17DG6N7ympVVzjs53FsFMzW69jkdK3KBBSWW8_CMM56BZhNJN14_G6750fh7W6W5b057GN8r1W52Kf5R5lWN_YW2kZW1h5x137mV6dTq643Cl12W1sHnfq5NVCNyW6RXXYM8RtGR3W6k4QLR2P8wFFV20N7f37W0YhW1jw7rN2-0GzLW1c1-5p5yv-zDN6rDtCBdgc_2W3r1CgN79HhcqW8Nkkt04JDM7Df2KYqdj04" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                ASP SuperHome (Rated 4.7 Stars - 159 Reviews)
              </a>
            </div>

            <div>
              <a 
                href="https://www.google.com/search?q=american+storm+protection" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                ASP Windows and Doors (Rated 4.8 Stars - 803 Reviews)
              </a>
            </div>

            <div>
              <a 
                href="https://www.yelp.com/biz/asp-windows-and-doors-doral" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                ASP SuperHome - Yelp Reviews
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- BLOCK 3: Cost of Bad Decision (Grey Section) --- */}
      {/* <div 
        className="w-full py-16 px-6"
        style={{ backgroundColor: '#e3e6ed', color: '#2d2d2d' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          
        
          <h3 className="text-3xl md:text-4xl mb-6 font-bold">
            The Cost of a Bad Decision
            <br />
         
            <span className="mt-4 block leading-relaxed" style={{ fontSize: '1rem', fontWeight: 300 }}>
              A poor choice in contractors can lead to costly mistakes, headaches, and regret. See firsthand how one homeowner’s nightmare turned into a hard lesson—and how ASP stepped in to make things right.
            </span>
          </h3>

          <div className="w-full aspect-video bg-black rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="https://www.youtube.com/embed/oEwz8bOyzVI" 
              title="The Cost of a Bad Decision"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div> */}

      {/* --- BLOCK 4: Customers Left in Dark (Blue Section) --- */}
      <div 
        className="w-full py-16 px-6"
        style={{ backgroundColor: '#214270', color: '#ffffff' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Header */}
          {/* <h2 className="text-3xl md:text-4xl mb-4 font-bold">
            Customers Left In The Dark After Company Faces Several Lawsuits
          </h2> */}
          
          {/* Description Text */}
          {/* Removed large text classes and applied normal paragraph styling */}
          {/* <p className="mb-8 leading-relaxed">
            A once highly rated window and door company, known for its lifetime warranty, went out of business after facing multiple lawsuits over defective products and broken warranty promises. Despite a strong online presence, legal issues and consumer complaints led to a loss of trust and financial collapse.
          </p> */}
{/* 
          <div className="w-full aspect-video bg-black rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="https://www.youtube.com/embed/V1CxtsPYCiA" 
              title="Customers Left In The Dark"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
        </div>
      </div>

    </section>
  );
}