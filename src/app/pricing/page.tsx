'use client';

import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function PricingPage() {
  const [showComparison, setShowComparison] = useState(false);

  const payAsYouGoFeatures = [
    "Multimodal AI analysis (text, images, CT, MRI)",
    "Chest X-ray CTR measurement tools",
    "Basic AI-powered diagnostic reports",
    "24/7 AI chatbot support",
    "Weekly health tips via WhatsApp/SMS",
    "Standard report templates",
    "Email support (24-hour response)",
    "Pay only for what you use"
  ];

  const corporateFeatures = [
    "Everything in Pay-As-You-Use, plus:",
    "Unlimited scans and analyses",
    "Custom report templates & branding",
    "PACS system integration",
    "Priority AI processing",
    "Dedicated account manager",
    "Daily personalized health content",
    "Advanced analytics dashboard",
    "Custom health programs for staff",
    "On-site training & onboarding",
    "99.9% uptime SLA",
    "Phone & email support (4-hour response)",
    "Volume discounts available"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-8 text-white leading-[1.1] tracking-tight">
              Pricing Built for African Healthcare
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto mb-8">
              From individual practitioners to large hospital networks—flexible options for every healthcare provider
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                HIPAA-ready
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                GDPR Compliant
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                ISO 27001
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Two-Tier Pricing Cards */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Tier 1: Pay-As-You-Use */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-white/5 border border-white/20 rounded-2xl p-8 hover:border-white/40 transition-all"
            >
              <div className="absolute -top-4 left-8">
                <span className="px-4 py-1 bg-blue-500 text-white text-sm font-light rounded-full">
                  Most Flexible
                </span>
              </div>
              
              <h2 className="text-3xl font-light mb-2 text-white mt-4">
                Pay-As-You-Use
              </h2>
              <p className="text-gray-400 mb-6">
                Perfect for individual practitioners and small clinics
              </p>
              
              <div className="mb-6">
                <div className="text-4xl font-light text-white mb-2">
                  $X.XX <span className="text-lg text-gray-400">per scan</span>
                </div>
                <p className="text-sm text-gray-400">Pilot pricing available for early adopters</p>
              </div>

              <ul className="space-y-3 mb-8">
                {payAsYouGoFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-white text-black rounded-lg font-light hover:bg-gray-200 transition-colors"
              >
                Start Free Trial
              </Link>
              <p className="text-xs text-gray-500 text-center mt-3">
                No commitment • Cancel anytime
              </p>
            </motion.div>

            {/* Tier 2: Corporate Package */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/50 rounded-2xl p-8 hover:border-blue-500/70 transition-all"
            >
              <div className="absolute -top-4 left-8">
                <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-light rounded-full">
                  Most Popular
                </span>
              </div>
              
              <h2 className="text-3xl font-light mb-2 text-white mt-4">
                Corporate Package
              </h2>
              <p className="text-gray-300 mb-6">
                Tailored for hospitals, clinics, and healthcare organizations
              </p>
              
              <div className="mb-6">
                <div className="text-4xl font-light text-white mb-2">
                  Custom Pricing
                </div>
                <p className="text-sm text-gray-300">Based on volume and specific needs</p>
              </div>

              <ul className="space-y-3 mb-8">
                {corporateFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className={`text-sm ${index === 0 ? 'text-white font-normal' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-white text-black rounded-lg font-light hover:bg-gray-200 transition-colors"
              >
                Contact Sales
              </Link>
              <p className="text-xs text-gray-400 text-center mt-3">
                Dedicated support • Custom integrations
              </p>
            </motion.div>

          </div>

          {/* Toggle Comparison Button */}
          <div className="text-center mb-8">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="text-gray-300 hover:text-white transition-colors text-sm underline"
            >
              {showComparison ? 'Hide' : 'Show'} detailed feature comparison
            </button>
          </div>

          {/* Detailed Comparison Table */}
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 overflow-x-auto">
                <h3 className="text-2xl font-light mb-6 text-white">Feature Comparison</h3>
                
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="pb-4 text-gray-400 font-light">Feature</th>
                      <th className="pb-4 text-gray-400 font-light text-center">Pay-As-You-Use</th>
                      <th className="pb-4 text-gray-400 font-light text-center">Corporate</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      ['AI Analysis', 'Multimodal AI', 'Multimodal AI + Priority'],
                      ['Scans per month', 'Pay per scan', 'Unlimited'],
                      ['Report templates', 'Standard', 'Custom branded'],
                      ['PACS integration', '—', '✓'],
                      ['Support response time', '24 hours', '4 hours'],
                      ['Health content delivery', 'Weekly', 'Daily + Custom'],
                      ['Analytics dashboard', 'Basic', 'Advanced'],
                      ['Training & onboarding', 'Self-service', 'On-site'],
                      ['Account manager', '—', 'Dedicated'],
                      ['SLA guarantee', '—', '99.9% uptime'],
                    ].map(([feature, tier1, tier2], index) => (
                      <tr key={index} className="border-b border-white/5">
                        <td className="py-4 text-gray-300">{feature}</td>
                        <td className="py-4 text-gray-400 text-center">{tier1}</td>
                        <td className="py-4 text-gray-300 text-center">{tier2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-white text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "How does pay-as-you-use work?",
                a: "You're charged only for the scans you process. No monthly fees, no commitments. Perfect for practitioners with variable patient volumes or those wanting to test KUBO before committing to a larger plan."
              },
              {
                q: "What's included in the Corporate Package?",
                a: "The Corporate Package includes everything in Pay-As-You-Use plus unlimited scans, PACS integration, custom branding, priority processing, dedicated support, and custom health programs. Pricing is tailored to your organization's size and needs."
              },
              {
                q: "Can I switch between plans?",
                a: "Yes! You can start with Pay-As-You-Use and upgrade to Corporate at any time. We'll work with you to ensure a smooth transition with no data loss."
              },
              {
                q: "Do you offer discounts for high volume?",
                a: "Absolutely. Corporate packages include volume-based pricing, and we offer special rates for hospital networks and regional healthcare organizations. Contact our sales team for a custom quote."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept credit cards, bank transfers, and mobile money (M-Pesa, MTN Mobile Money). Corporate customers can also request invoicing with NET 30 terms."
              },
              {
                q: "Is there a free trial?",
                a: "Yes! New users get a 14-day free trial with up to 50 scans to test KUBO's capabilities. No credit card required to start."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-light text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              Not sure which plan is right for you?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can help you choose the best option for your practice or organization. Let's discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-black rounded-lg font-light hover:bg-gray-200 transition-colors"
              >
                Talk to Sales
              </Link>
              <Link
                href="/demo"
                className="px-8 py-3 bg-white/5 border border-white/20 text-white rounded-lg font-light hover:bg-white/10 transition-colors"
              >
                Request a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
