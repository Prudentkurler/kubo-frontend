import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">
            Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            We're currently in pilot phase with select hospitals. Pricing will be announced soon.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12 mb-8">
            <h2 className="text-2xl font-light mb-4 text-white">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on flexible pricing plans tailored for hospitals of all sizes across Africa. 
              Interested in early access or pilot programs?
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-black rounded-lg font-light hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
