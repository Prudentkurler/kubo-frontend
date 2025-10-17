import React from 'react';
import Link from 'next/link';

const footerLinks = {
  product: [
    { label: 'Technology', href: '/technology' },
    { label: 'Features', href: '/#features' },
    { label: 'Integrations', href: '/technology#integrations' },
    { label: 'Pricing', href: '/pricing' },
  ],
  company: [
    { label: 'About', href: '/team' },
    { label: 'Team', href: '/team' },
    { label: 'News', href: '/news' },
    { label: 'Careers', href: '/careers' },
  ],
  resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Research', href: '/research' },
    { label: 'Blog', href: '/news' },
    { label: 'Support', href: '/support' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'HIPAA Compliance', href: '/hipaa' },
    { label: 'Security', href: '/security' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="text-2xl font-light text-gray-900">
                <span className="font-normal">Health</span>Tech4Africa
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mb-6 font-light">
              AI Radiology for the Real World. Precision-driven chest X-ray insights designed for clinicians.
            </p>

            {/* Compliance Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-normal text-gray-600">
                HIPAA-ready
              </span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-normal text-gray-600">
                GDPR
              </span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-normal text-gray-600">
                ISO 27001
              </span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-normal text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-normal text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-normal text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-normal text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light">
            © {new Date().getFullYear()} HealthTech4Africa. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/healthtech4africa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/healthtech4africa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/Health-Tech-4-Africa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
