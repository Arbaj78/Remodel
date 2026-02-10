import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

// TypeScript Interface for Props
interface LicensesSectionProps {
  isDynamicView?: boolean;
}

interface License {
  title: string;
  image: string | null;
}

export default function LicensesSection({ isDynamicView = false }: LicensesSectionProps) {
  const [galleryImages, setGalleryImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { id } = useParams<{ id: string }>();

  const licenses: License[] = [
    {
      title: "",
      image: "https://businessautomation.s3.eu-west-1.amazonaws.com/Template_Editor_Images/ASP-Superhome_mceu321397951727120855361jpg_1727120856.jpg"
    },
    {
      title: "General Contractor's License Number: CGC1513274",
      image: "https://businessautomation.s3.eu-west-1.amazonaws.com/Template_Editor_Images/ASP-Superhome_mceu34067026741727120819650jpg_1727120820.jpg"
    },
    {
      title: "Roofing Contractor License Number: CCC1333787",
      image: "https://businessautomation.s3.eu-west-1.amazonaws.com/Template_Editor_Images/ASP-Superhome_mceu16081756561727120886753jpg_1727120887.jpg"
    },
    {
      title: "Solar Contractor License Number: CVC57119",
      image: "https://businessautomation.s3.eu-west-1.amazonaws.com/Template_Editor_Images/ASP-Superhome_mceu76563766071727120919674jpg_1727120920.jpg"
    },
    {
      title: "Home Inspector License Number: HI3863",
      image: "https://businessautomation.s3.eu-west-1.amazonaws.com/Template_Editor_Images/ASP-Superhome_mceu36661559281727121165360jpg_1727121166.jpg"
    },
    {
      title: "Mold Remediator: MRSR1709",
      image: null 
    }
  ];

  useEffect(() => {
    const fetchImagesFromDB = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://pdf-converter-api-1eeh.onrender.com/api/result/${id}?service=remodel`);
        if (!response.ok) throw new Error('Data not found');
        const data = await response.json();
        if (data.success && data.image_urls) {
          setGalleryImages(data.image_urls);
        } else {
          setError("No images found for this specific link.");
        }
      } catch (err) {
        setError("Failed to load images.");
      } finally {
        setLoading(false);
      }
    };
    fetchImagesFromDB();
  }, [id]);

  return (
    <section id="page-4862660" className="w-full" style={{ fontFamily: '"Open Sans", sans-serif' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');`}</style>

      {/* --- BLOCK 1: Static Licenses (Updated to 1 per row) --- */}
      <div className="w-full py-16 px-6" style={{ backgroundColor: '#214270', color: '#ffffff' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ASP State of Florida Licenses</h1>
          <h3 className="italic mb-16 leading-relaxed opacity-90">
            Qualifier, Contractor & Owner of ASP SuperHome Jonathan Rodriguez, operates solely under his own license.
          </h3>

          {/* Centered column layout: one image per row */}
          <div className="flex flex-col items-center space-y-20">
            {licenses.map((license, index) => (
              <div key={index} className="w-full flex flex-col items-center">
                {license.title && (
                  <p className="font-semibold mb-6 text-lg tracking-wide max-w-lg">
                    {license.title}
                  </p>
                )}
                {license.image && (
                  <div className="bg-white p-3 rounded-lg shadow-2xl transition-transform hover:scale-[1.02] inline-block">
                    <img 
                      src={license.image} 
                      alt={license.title}
                      className="w-full max-w-[500px] h-auto object-contain rounded"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- BLOCK 2: Dynamic Gallery --- */}
      <div className="w-full bg-[#4a4b4d] py-20 px-6 flex flex-col items-center min-h-[400px]">
        {loading && (
          <div className="flex flex-col items-center text-white space-y-4">
            <Loader2 className="w-12 h-12 animate-spin text-blue-400" />
            <p className="text-xl font-light">Retrieving documents...</p>
          </div>
        )}

        {error && !loading && (
          <div className="text-red-400 bg-red-950/20 p-8 rounded-xl border border-red-500/30">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && galleryImages.length > 0 && (
          <div className="w-full max-w-4xl flex flex-col items-center space-y-16">
            <div className="flex items-center space-x-2 mb-4 text-green-400 bg-green-950/20 px-6 py-2 rounded-full border border-green-500/30">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-widest">Verified</span>
            </div>
            
            {galleryImages.map((imageItem, index) => {
              const imageUrl = typeof imageItem === 'object' ? imageItem.public_url : imageItem;
              return (
                <div key={index} className="w-full relative">
                  <div className="absolute -left-4 -top-4 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded shadow-lg z-10">
                    PAGE {index + 1}
                  </div>
                  <img 
                    src={imageUrl} 
                    alt={`Page ${index + 1}`}
                    className="w-full h-auto rounded-md shadow-2xl border border-gray-600"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}