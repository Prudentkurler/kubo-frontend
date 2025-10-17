'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface StatCardProps {
  end: number;
  duration?: number;
  label: string;
  sublabel: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

function AnimatedCounter({ end, duration = 2, decimals = 0, suffix = '', prefix = '' }: Omit<StatCardProps, 'label' | 'sublabel'>) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [motionValue, isInView, end]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Intl.NumberFormat('en-US', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }).format(latest)}${suffix}`;
      }
    });
    return () => unsubscribe();
  }, [springValue, decimals, suffix, prefix]);

  return <span ref={ref} />;
}

function StatCard({ end, label, sublabel, suffix, prefix, decimals, duration }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-light text-gray-900 mb-3">
        <AnimatedCounter end={end} duration={duration} suffix={suffix} prefix={prefix} decimals={decimals} />
      </div>
      <div className="text-lg font-normal text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-500 font-light">{sublabel}</div>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-transparent to-gray-50/50" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Trained on Real African Data
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Our AI models are built and validated with diverse datasets from African hospitals, ensuring accuracy across different demographics and imaging equipment.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <StatCard
            end={12450}
            label="Training Images"
            sublabel="Diverse chest X-rays from 5 hospitals"
            suffix=""
          />
          
          <StatCard
            end={94.2}
            label="Model Accuracy"
            sublabel="Validated against radiologist consensus"
            suffix="%"
            decimals={1}
          />
          
          <StatCard
            end={2847}
            label="Test Cases"
            sublabel="Real-world clinical evaluations"
            suffix=""
          />
        </div>

        {/* Additional context */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-gray-500 font-light max-w-3xl mx-auto">
            We continuously improve our models with feedback from partner radiologists, ensuring our AI stays aligned with clinical realities in African healthcare settings.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
