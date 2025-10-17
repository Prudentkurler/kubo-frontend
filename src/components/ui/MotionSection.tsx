'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface MotionSectionProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const MotionSection = React.forwardRef<HTMLElement, MotionSectionProps>(
  ({ children, delay = 0, direction = 'up', className, ...props }, ref) => {
    const directions = {
      up: { y: 40, x: 0 },
      down: { y: -40, x: 0 },
      left: { y: 0, x: 40 },
      right: { y: 0, x: -40 },
    };

    return (
      <motion.section
        ref={ref}
        initial={{
          opacity: 0,
          ...directions[direction],
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          x: 0,
        }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.4, 0, 0.2, 1],
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.section>
    );
  }
);

MotionSection.displayName = 'MotionSection';
