import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-12">
            Last updated: October 18, 2025
          </p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              This Privacy Policy is currently being finalized. HealthTech4Africa is committed to protecting the privacy 
              and security of all personal and medical data processed through our platform.
            </p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Data Protection Principles</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are designing our platform to comply with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>HIPAA (Health Insurance Portability and Accountability Act)</li>
              <li>GDPR (General Data Protection Regulation)</li>
              <li>Ghana Data Protection Act, 2012 (Act 843)</li>
              <li>ISO 27001 Information Security Standards</li>
            </ul>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Medical Data</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All medical images and patient data are encrypted in transit and at rest. We process data solely for 
              diagnostic support purposes and do not use patient data for any purpose beyond providing our clinical services.
            </p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For privacy-related questions, please contact us at{' '}
              <a href="mailto:privacy@kubo.health" className="text-black hover:text-gray-600">
                privacy@kubo.health
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
