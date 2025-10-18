import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

export default function HIPAAPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            HIPAA Compliance
          </h1>
          <p className="text-gray-600 mb-12">
            Health Insurance Portability and Accountability Act
          </p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              HealthTech4Africa is committed to building KUBO as a HIPAA-compliant platform for healthcare providers 
              processing protected health information (PHI).
            </p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Our Commitment</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Encryption:</strong> All PHI is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
              <li><strong>Access Controls:</strong> Role-based access control and audit logging for all data access</li>
              <li><strong>Business Associate Agreements:</strong> We provide BAAs to all covered entities</li>
              <li><strong>Data Minimization:</strong> We only collect and process data necessary for diagnostic support</li>
              <li><strong>Breach Notification:</strong> Protocols in place for timely notification in the event of any breach</li>
            </ul>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Pilot Phase</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              During our pilot phase, we work closely with hospital partners to ensure all compliance requirements are met 
              before processing any real patient data.
            </p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Questions?</h2>
            <p className="text-gray-700 leading-relaxed">
              For HIPAA-related questions or to request our Business Associate Agreement, contact{' '}
              <a href="mailto:compliance@kubo.health" className="text-black hover:text-gray-600">
                compliance@kubo.health
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
