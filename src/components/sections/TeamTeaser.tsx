'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function TeamTeaser() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Built by Clinicians, For Clinicians
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            We've walked hospital corridors, sat in radiology reading rooms, and felt the weight of diagnostic decisions. 
            Our team brings clinical experience and technical expertise to build tools that work in real African healthcare settings.
          </p>

          {/* CTA */}
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-normal hover:bg-gray-100 transition-colors duration-300"
          >
            Meet the team
            <svg 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
