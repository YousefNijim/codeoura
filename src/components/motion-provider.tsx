'use client';

import { MotionConfig } from 'motion/react';

/**
 * `reducedMotion="user"` makes Framer skip transform and layout animations for
 * anyone with the OS preference set, while still cross-fading opacity — so
 * `Reveal` can never leave content stuck at zero opacity.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
