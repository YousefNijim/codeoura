'use client';

import { motion, type Variants } from 'motion/react';
import { fadeUp, viewportOnce } from '@/lib/motion';

/**
 * Scroll-triggered entrance. Animates opacity and transform only, and the
 * global `prefers-reduced-motion` rule collapses it to an instant state.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  as?: 'div' | 'li' | 'section' | 'article';
}) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
