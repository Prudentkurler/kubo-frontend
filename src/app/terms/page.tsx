import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-12">
            Last updated: October 18, 2025
          </p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              These Terms of Service are currently being finalized. By using KUBO, healthcare providers agree to use 
              our AI-powered diagnostic tools as a clinical decision support system, not as a replacement for professional 
              medical judgment.
            </p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Clinical Use</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              KUBO is designed to assist radiologists and clinicians with chest X-ray interpretation. All AI-generated 
              findings must be reviewed and verified by qualified medical professionals before being used for clinical decisions.
            </p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Pilot Phase</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are currently in pilot phase with select hospital partners. Detailed terms and service level agreements 
              are provided directly to pilot participants.
            </p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these terms, please contact us at{' '}
              <a href="mailto:legal@kubo.health" className="text-black hover:text-gray-600">
                legal@kubo.health
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
