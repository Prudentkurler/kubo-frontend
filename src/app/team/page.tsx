'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/sections/Navbar';
import { useEffect, useState, useRef } from 'react';

// Animated counter hook
const useCountUp = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};

// Stat component with counter
const StatCounter = ({ value, label, suffix = '', delay = 0 }: { value: number; label: string; suffix?: string; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const count = useCountUp(value, 2000, isVisible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onViewportEnter={() => setIsVisible(true)}
    >
      <div className="text-4xl font-light text-black mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-light">{label}</div>
    </motion.div>
  );
};

// Organizational structure with team members
const organizationalStructure = {
  leadership: [
    {
      name: "Kofi Mensah",
      role: "CEO & Co-founder",
      bio: "Former healthcare consultant with expertise in digital health transformation across Africa. Stanford MBA.",
      image: "/images/team/kofi.jpg",
      linkedin: "https://linkedin.com/in/kofimensah"
    },
    {
      name: "Dr. Ama Owusu",
      role: "Chief Medical Officer",
      bio: "Radiologist with 12 years of clinical practice and AI collaboration experience. Leading our clinical validation and regulatory strategy.",
      image: "/images/team/ama.jpg",
      linkedin: "https://linkedin.com/in/amaowusu"
    },
    {
      name: "James Kamau",
      role: "Chief Technology Officer",
      bio: "15+ years building scalable healthcare systems. Previously led engineering at major telehealth platform.",
      image: "/images/team/james.jpg",
      linkedin: "https://linkedin.com/in/jameskamau"
    }
  ],
  clinical: [
    {
      name: "Dr. Chioma Okafor",
      role: "Head of AI Research",
      bio: "PhD in Computer Vision from MIT. Published researcher in medical imaging and deep learning applications.",
      image: "/images/team/chioma.jpg",
      linkedin: "https://linkedin.com/in/chiomaokafor"
    },
    {
      name: "Dr. Kwame Asante",
      role: "Clinical Advisor",
      bio: "Consultant Radiologist at Korle Bu Teaching Hospital. 15+ years interpreting chest X-rays in resource-limited settings.",
      image: "/images/team/kwame.jpg",
      linkedin: "https://linkedin.com/in/kwameasante"
    },
    {
      name: "Dr. Fatima Ibrahim",
      role: "Medical Affairs Lead",
      bio: "Physician with public health expertise. Focused on clinical workflows and regulatory compliance for African healthcare markets.",
      image: "/images/team/fatima.jpg",
      linkedin: "https://linkedin.com/in/fatimaibrahim"
    }
  ],
  engineering: [
    {
      name: "Amara Nwosu",
      role: "Lead AI Engineer",
      bio: "Machine learning specialist with focus on medical imaging. Previously at Google Health working on diagnostic AI.",
      image: "/images/team/amara.jpg",
      linkedin: "https://linkedin.com/in/amaranwosu"
    },
    {
      name: "David Osei",
      role: "Senior Full-Stack Developer",
      bio: "Full-stack engineer specializing in healthcare systems. Built DICOM integrations for multiple African hospitals.",
      image: "/images/team/david.jpg",
      linkedin: "https://linkedin.com/in/davidosei"
    },
    {
      name: "Sarah Mwangi",
      role: "Frontend Engineer",
      bio: "UI/UX engineer passionate about accessible healthcare technology. Expert in building intuitive clinical interfaces.",
      image: "/images/team/sarah.jpg",
      linkedin: "https://linkedin.com/in/sarahmwangi"
    },
    {
      name: "Emmanuel Adu",
      role: "DevOps Engineer",
      bio: "Cloud infrastructure specialist. Ensures HIPAA-compliant, secure, and scalable deployment across African data centers.",
      image: "/images/team/emmanuel.jpg",
      linkedin: "https://linkedin.com/in/emmanueladu"
    }
  ],
  operations: [
    {
      name: "Grace Boateng",
      role: "Head of Partnerships",
      bio: "Building relationships with hospitals, ministries of health, and NGOs across West Africa. Former WHO consultant.",
      image: "/images/team/grace.jpg",
      linkedin: "https://linkedin.com/in/graceboateng"
    },
    {
      name: "Michael Adebayo",
      role: "Product Manager",
      bio: "Product strategist with deep healthcare domain knowledge. Translates clinical needs into product features.",
      image: "/images/team/michael.jpg",
      linkedin: "https://linkedin.com/in/michaeladebayo"
    },
    {
      name: "Zainab Osman",
      role: "Regulatory Affairs Manager",
      bio: "Navigating healthcare regulations across African markets. Experience with FDA, CE mark, and local regulatory bodies.",
      image: "/images/team/zainab.jpg",
      linkedin: "https://linkedin.com/in/zainabosman"
    }
  ]
};

export default function TeamPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">
              Building the Future of African Healthcare
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              A multidisciplinary team of clinicians, engineers, and healthcare strategists 
              united by one mission: making quality radiology accessible across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <StatCounter value={40} label="Years Combined Clinical Experience" suffix="+" delay={0} />
            <StatCounter value={6} label="African Countries Represented" delay={0.1} />
            <StatCounter value={3} label="Hospital Partnerships" delay={0.2} />
            <StatCounter value={12450} label="X-rays Analyzed" suffix="+" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
              Leadership
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Experienced leaders guiding our mission to transform African healthcare
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizationalStructure.leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square rounded-xl bg-gray-200 mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <span className="text-4xl text-gray-500">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-black mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-500 font-normal mb-4">{member.role}</p>
                  <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-black hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Team */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
              Clinical & Research
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Medical professionals ensuring our AI meets real-world clinical standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizationalStructure.clinical.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square rounded-xl bg-gray-200 mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <span className="text-4xl text-gray-500">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-black mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-500 font-normal mb-4">{member.role}</p>
                  <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-black hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Team */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
              Engineering & Development
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Building secure, scalable AI systems for African healthcare infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizationalStructure.engineering.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square rounded-xl bg-gray-200 mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <span className="text-3xl text-gray-500">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-light text-black mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-500 font-normal mb-3">{member.role}</p>
                  <p className="text-gray-600 font-light text-xs leading-relaxed mb-4">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-black hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations & Business Team */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
              Operations & Partnerships
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Connecting our technology with hospitals, governments, and healthcare systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizationalStructure.operations.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square rounded-xl bg-gray-200 mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <span className="text-4xl text-gray-500">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-black mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-500 font-normal mb-4">{member.role}</p>
                  <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-black hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              The principles that guide our team every day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-light text-white mb-3">Clinical First</h3>
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                Every feature starts with real clinical needs, not technology hype
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-light text-white mb-3">Africa Expertise</h3>
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                Built for African healthcare realities, not Silicon Valley assumptions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-light text-white mb-3">Transparent AI</h3>
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                Explainable models, validated accuracy, honest about limitations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-light text-white mb-3">Partnership Mindset</h3>
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                We succeed when our hospital partners succeed
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 font-light mb-12 max-w-2xl mx-auto">
              We're looking for talented individuals who share our passion for improving 
              healthcare across Africa. Clinicians, engineers, and operators welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-black text-white rounded-full font-light text-lg hover:bg-gray-800 transition-all hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link
                href="/"
                className="px-8 py-4 bg-gray-100 text-black rounded-full font-light text-lg hover:bg-gray-200 transition-all"
              >
                Learn More About KUBO
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
