import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Comprehensive guides for integrating and using KUBO.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12 mb-8">
            <h2 className="text-2xl font-light mb-4 text-white">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're currently building detailed documentation for API integration, clinical workflows, 
              and best practices. Pilot partners receive direct onboarding support.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-black rounded-lg font-light hover:bg-gray-200 transition-colors"
            >
              Request Early Access
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left">
              <h3 className="text-xl font-light text-white mb-3">For Hospitals</h3>
              <p className="text-gray-300 text-sm">
                Learn how to integrate KUBO into your radiology workflow, train your team, and get the most value from AI-assisted diagnostics.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left">
              <h3 className="text-xl font-light text-white mb-3">For Developers</h3>
              <p className="text-gray-300 text-sm">
                API documentation, integration guides, and technical specifications for connecting KUBO to your PACS or EMR system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
