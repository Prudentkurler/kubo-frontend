import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            Security
          </h1>
          <p className="text-gray-600 mb-12">
            How we protect your data
          </p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              Security is foundational to everything we build at KUBO. We understand that healthcare data is among 
              the most sensitive information, and we treat it accordingly.
            </p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Infrastructure Security</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Cloud Infrastructure:</strong> Hosted on HIPAA-compliant cloud providers with SOC 2 Type II certification</li>
              <li><strong>Encryption:</strong> TLS 1.3 for data in transit, AES-256 for data at rest</li>
              <li><strong>Network Security:</strong> Firewalls, intrusion detection, and DDoS protection</li>
              <li><strong>Data Isolation:</strong> Each hospital's data is logically isolated</li>
            </ul>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Application Security</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Authentication:</strong> Multi-factor authentication (MFA) for all users</li>
              <li><strong>Authorization:</strong> Role-based access control (RBAC) with principle of least privilege</li>
              <li><strong>Audit Logs:</strong> Comprehensive logging of all data access and system changes</li>
              <li><strong>Session Management:</strong> Automatic timeout and secure session handling</li>
            </ul>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Operational Security</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Regular Audits:</strong> Third-party security audits and penetration testing</li>
              <li><strong>Vulnerability Management:</strong> Continuous monitoring and rapid patching</li>
              <li><strong>Incident Response:</strong> 24/7 monitoring and documented response procedures</li>
              <li><strong>Team Training:</strong> Regular security training for all team members</li>
            </ul>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are building KUBO to meet:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>HIPAA Security Rule requirements</li>
              <li>GDPR technical and organizational measures</li>
              <li>ISO 27001 information security standards</li>
            </ul>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Report a Vulnerability</h2>
            <p className="text-gray-700 leading-relaxed">
              If you discover a security vulnerability, please report it responsibly to{' '}
              <a href="mailto:security@kubo.health" className="text-black hover:text-gray-600">
                security@kubo.health
              </a>
              . We appreciate the security community's help in keeping KUBO secure.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
