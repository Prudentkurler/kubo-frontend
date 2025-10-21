'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Feature } from '@/types';
import { cn } from '@/lib/utils';
import {
  BeakerIcon,
  ComputerDesktopIcon,
  ChatBubbleLeftRightIcon,
  LinkIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export interface FeatureBentoProps {
  features: Feature[];
}

export function FeatureBento({ features }: FeatureBentoProps) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black mb-6 tracking-tight leading-[1.1]">
            Built for Clinical Excellence
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            Comprehensive AI-powered radiology platform designed for real-world healthcare environments.
          </p>
        </motion.div>

        {/* Asymmetric Bento Grid - Apple/Linear Style */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-fr">
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
  // Professional asymmetric layout pattern (like Apple/Linear)
  const gridClasses = {
    0: 'md:col-span-6 lg:col-span-7 md:row-span-2', // Hero feature - large
    1: 'md:col-span-3 lg:col-span-5', // Medium
    2: 'md:col-span-3 lg:col-span-5', // Medium  
    3: 'md:col-span-3 lg:col-span-4', // Small
    4: 'md:col-span-3 lg:col-span-4', // Small
    5: 'md:col-span-6 lg:col-span-4', // Small wide
  };

  const aspectClasses = {
    0: 'aspect-[4/3] md:aspect-auto md:min-h-[600px]', // Hero
    1: 'aspect-[4/3] md:aspect-[3/2]',
    2: 'aspect-[4/3] md:aspect-[3/2]',
    3: 'aspect-square',
    4: 'aspect-square',
    5: 'aspect-[4/3] md:aspect-[16/9]',
  };

  const gridClass = gridClasses[index as keyof typeof gridClasses] || 'md:col-span-3 lg:col-span-4';
  const aspectClass = aspectClasses[index as keyof typeof aspectClasses] || 'aspect-[4/3]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.21, 0.45, 0.27, 0.9], // Apple's easing curve
      }}
      className={cn('group', gridClass)}
    >
      <div
        className={cn(
          'relative w-full h-full overflow-hidden rounded-3xl bg-black transition-transform duration-500 ease-out',
          'hover:scale-[1.02] cursor-pointer',
          aspectClass
        )}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={feature.image || '/images/placeholder.jpg'}
            alt={feature.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index === 0}
          />
          {/* Sophisticated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-10">
          {/* Top: Tag */}
          <div>
            {feature.tag && (
              <span className="inline-flex items-center px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full text-xs font-light text-white border border-white/20">
                {feature.tag}
              </span>
            )}
          </div>

          {/* Bottom: Content */}
          <div className="space-y-5">
            {/* Icon */}
            {feature.icon && (
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/15 group-hover:bg-white/15 transition-colors">
                {feature.icon === 'BeakerIcon' && <BeakerIcon className="w-7 h-7 text-white" />}
                {feature.icon === 'ComputerDesktopIcon' && <ComputerDesktopIcon className="w-7 h-7 text-white" />}
                {feature.icon === 'ChatBubbleLeftRightIcon' && <ChatBubbleLeftRightIcon className="w-7 h-7 text-white" />}
                {feature.icon === 'LinkIcon' && <LinkIcon className="w-7 h-7 text-white" />}
                {feature.icon === 'ChartBarIcon' && <ChartBarIcon className="w-7 h-7 text-white" />}
              </div>
            )}

            <div className="space-y-3">
              <h3 className={cn(
                'font-light text-white tracking-tight leading-tight',
                index === 0 ? 'text-3xl lg:text-5xl' : 'text-2xl lg:text-3xl'
              )}>
                {feature.title}
              </h3>
              
              <p className={cn(
                'text-white/90 leading-relaxed font-light',
                index === 0 ? 'text-base lg:text-lg max-w-xl' : 'text-sm lg:text-base'
              )}>
                {feature.description}
              </p>
            </div>

            {/* Minimal arrow indicator */}
            <div className="inline-flex items-center gap-2 text-white/80 font-light text-sm group-hover:gap-3 group-hover:text-white transition-all">
              <span>Explore</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
