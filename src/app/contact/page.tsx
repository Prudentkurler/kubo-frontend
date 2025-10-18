'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    type: 'hospital',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        type: 'hospital',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you're a hospital seeking AI-powered diagnostics or an investor interested in African HealthTech, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-light mb-2 text-white">Send Us a Message</h2>
              <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="Dr. John Mensah"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-light text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="john.mensah@hospital.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-light text-gray-300 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="University Hospital"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-light text-gray-300 mb-2">
                    I'm interested as a *
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40 transition-colors"
                  >
                    <option value="hospital">Hospital / Healthcare Provider</option>
                    <option value="investor">Investor</option>
                    <option value="partner">Strategic Partner</option>
                    <option value="researcher">Researcher / Academic</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors resize-none"
                    placeholder="Tell us about your needs or interests..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm"
                  >
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm"
                  >
                    Something went wrong. Please try again or email us directly.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-white text-black rounded-lg font-light hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Direct Contact */}
              <div>
                <h2 className="text-3xl font-light mb-6 text-white">Get In Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-light mb-1">Email</h3>
                      <a href="mailto:hello@kubo.health" className="text-gray-300 hover:text-white transition-colors">
                        hello@kubo.health
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-light mb-1">Location</h3>
                      <p className="text-gray-300">Accra, Ghana</p>
                      <p className="text-gray-400 text-sm mt-1">Serving hospitals across West Africa</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-light mb-1">Phone</h3>
                      <p className="text-gray-300">+233 XX XXX XXXX</p>
                      <p className="text-gray-400 text-sm mt-1">Mon-Fri, 9am-5pm GMT</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Hospitals */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-light mb-3 text-white">For Hospitals</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Partner with us to bring AI-powered chest X-ray diagnostics to your radiology department. We offer:
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Free pilot programs for qualifying hospitals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Training and onboarding support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Integration with existing PACS systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Ongoing clinical collaboration</span>
                  </li>
                </ul>
              </div>

              {/* For Investors */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-light mb-3 text-white">For Investors</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Join us in transforming African healthcare. We're building:
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Clinically validated AI with real hospital partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Scalable SaaS model across Africa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Team with deep clinical and technical expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Addressing a $2.3B diagnostic gap in Africa</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              Ready to Transform Radiology?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're ready to start a pilot or just want to learn more, we're here to answer your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-white text-black rounded-lg font-light hover:bg-gray-200 transition-colors"
              >
                Send a Message
              </a>
              <a
                href="/demo"
                className="px-8 py-3 bg-white/5 border border-white/20 text-white rounded-lg font-light hover:bg-white/10 transition-colors"
              >
                Request a Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
