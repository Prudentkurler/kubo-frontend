'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Feature } from '@/types';
import { cn } from '@/lib/utils';

export interface FeatureBentoProps {
  features: Feature[];
}

export function FeatureBento({ features }: FeatureBentoProps) {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Built for Clinical Excellence
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Comprehensive AI-powered radiology platform designed for real-world healthcare environments.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureTile key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureTileProps {
  feature: Feature;
  index: number;
}

function FeatureTile({ feature, index }: FeatureTileProps) {
  const isLarge = feature.size === 'large';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(
        'group',
        isLarge && 'md:col-span-2 lg:row-span-2'
      )}
    >
      <Card
        variant="elevated"
        padding="none"
        className={cn(
          'relative h-full overflow-hidden rounded-3xl hover:scale-[1.02] transition-transform duration-300',
          isLarge ? 'min-h-[400px]' : 'min-h-[320px]'
        )}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={feature.image || '/images/placeholder.jpg'}
            alt={`${feature.title} - ${feature.description.slice(0, 50)}...`}
            fill
            className={cn(
              "group-hover:scale-105 transition-transform duration-500",
              isLarge ? "object-fill" : "object-cover object-center"
            )}
            sizes={isLarge ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
            priority={isLarge}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        {/* Content Overlay */}
        <div className={cn(
          'relative z-10 h-full flex flex-col justify-between p-6',
          isLarge && 'lg:p-8'
        )}>
          {/* Top: Tag */}
          <div>
            {feature.tag && (
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/30">
                {feature.tag}
              </span>
            )}
          </div>

          {/* Bottom: Content */}
          <div className="space-y-4">
            {/* Icon */}
            {feature.icon && (
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                <span className="text-2xl">{feature.icon}</span>
              </div>
            )}

            <h3 className={cn(
              'font-semibold text-white',
              isLarge ? 'text-2xl lg:text-3xl' : 'text-xl'
            )}>
              {feature.title}
            </h3>
            
            <p className={cn(
              'text-white/80 leading-relaxed font-light',
              isLarge ? 'text-base lg:text-lg' : 'text-sm'
            )}>
              {feature.description}
            </p>

            {/* Arrow indicator */}
            <button className="inline-flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all">
              <span>Learn more</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
