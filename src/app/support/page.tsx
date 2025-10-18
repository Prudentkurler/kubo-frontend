import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">
            Support
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            We're here to help you get the most out of KUBO.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12 mb-8">
            <h2 className="text-2xl font-light mb-4 text-white">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              Our team provides direct support to all pilot partners. For general inquiries, reach out via our contact page.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-black rounded-lg font-light hover:bg-gray-200 transition-colors"
            >
              Contact Support
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-light text-white mb-3">Email</h3>
              <p className="text-gray-300 text-sm mb-3">
                hello@kubo.health
              </p>
              <p className="text-gray-400 text-xs">
                Response within 24 hours
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-light text-white mb-3">Documentation</h3>
              <p className="text-gray-300 text-sm mb-3">
                Coming soon
              </p>
              <Link href="/docs" className="text-white hover:text-gray-300 text-xs">
                View Docs →
              </Link>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-light text-white mb-3">Training</h3>
              <p className="text-gray-300 text-sm mb-3">
                Onboarding support for pilot partners
              </p>
              <p className="text-gray-400 text-xs">
                Included with deployment
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
