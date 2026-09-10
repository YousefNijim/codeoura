import type { Transition, Variants } from 'motion/react';

/**
 * Shared motion language.
 *
 * Rules this file enforces:
 * - Only `opacity`, `transform` and `filter` are animated, so every transition
 *   stays on the compositor.
 * - Horizontal movement is expressed in `--motion-dir` units, which flips to -1
 *   under `[dir="rtl"]`, so slide-ins always travel inward.
 */

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const transition: Transition = {
  duration: 0.6,
  ease: easeOutExpo,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition },
};

/** Parent that releases children one after another. */
export function stagger(delayChildren = 0, staggerChildren = 0.08): Variants {
  return {
    hidden: {},
    visible: { transition: { delayChildren, staggerChildren } },
  };
}

/** Viewport config used by every scroll-triggered section. */
export const viewportOnce = { once: true, amount: 0.25 } as const;
