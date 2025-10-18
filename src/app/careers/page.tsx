import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">
            Careers
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join us in transforming radiology across Africa.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12 mb-8">
            <h2 className="text-2xl font-light mb-4 text-white">No Open Positions Yet</h2>
            <p className="text-gray-300 mb-6">
              We're a small, focused team currently in pilot phase. As we scale, we'll be hiring for engineering, 
              clinical, and operations roles. Interested in joining our mission?
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-black rounded-lg font-light hover:bg-gray-200 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          <div className="text-left max-w-2xl mx-auto mt-12 space-y-6">
            <h3 className="text-2xl font-light text-white mb-4">What We Look For</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>Passion for healthcare impact in Africa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>Experience with AI/ML, healthcare, or medical imaging</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>Willingness to work closely with clinicians and iterate based on real feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>Strong problem-solving skills and adaptability</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
