'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { WorkflowStep } from '@/types';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export interface HowItWorksCarouselProps {
  steps: WorkflowStep[];
}

export function HowItWorksCarousel({ steps }: HowItWorksCarouselProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
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
            How It Works
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Four simple steps from image upload to actionable insights
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <Card variant="elevated" padding="lg" className="relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden order-2 lg:order-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={steps[currentStep].image || '/images/placeholder.jpg'}
                      alt={`Step ${currentStep + 1}: ${steps[currentStep].title} - ${steps[currentStep].description}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={currentStep === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent-100 text-accent-500 font-bold text-xl">
                    {currentStep + 1}
                  </div>
                  <span className="text-sm text-text-tertiary font-medium">
                    Step {currentStep + 1} of {steps.length}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-2xl lg:text-3xl font-bold text-text-primary">
                      {steps[currentStep].title}
                    </h3>
                    <p className="text-lg text-text-secondary leading-relaxed">
                      {steps[currentStep].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevStep}
                    aria-label="Previous step"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M15 19l-7-7 7-7" />
                    </svg>
                  </Button>

                  <div className="flex gap-2">
                    {steps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToStep(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentStep
                            ? 'w-8 bg-accent-500'
                            : 'w-2 bg-surface-border hover:bg-surface-divider'
                        }`}
                        aria-label={`Go to step ${index + 1}`}
                        aria-current={index === currentStep}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextStep}
                    aria-label="Next step"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Auto-advance indicator */}
          <p className="text-center text-sm text-text-tertiary mt-8">
            Use arrow keys or click to navigate • {steps.length} steps total
          </p>
        </div>
      </div>
    </section>
  );
}
