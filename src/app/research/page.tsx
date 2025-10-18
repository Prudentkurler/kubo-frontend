import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import Link from 'next/link';

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">
            Research
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Clinical validation and research partnerships.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12 mb-8">
            <h2 className="text-2xl font-light mb-4 text-white">Building in Partnership</h2>
            <p className="text-gray-300 mb-6">
              Our AI models are trained and validated with data from African hospitals, including University of Ghana Medical Centre (UGMC) 
              and Korle Bu Teaching Hospital. We're committed to transparent, clinically-validated AI.
            </p>
          </div>

          <div className="text-left max-w-2xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-light text-white mb-4">Current Partnerships</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span><strong className="text-white">University of Ghana Medical Centre</strong> - Clinical validation and pilot deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span><strong className="text-white">Korle Bu Teaching Hospital</strong> - AI model feedback and workflow optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span><strong className="text-white">93 Registered Radiologists</strong> - 2023 survey on AI needs and preferences</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-light text-white mb-4">Publications</h3>
              <p className="text-gray-300 mb-4">Research papers and validation studies coming soon.</p>
              <Link
                href="/news"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Read our journey on the blog →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
