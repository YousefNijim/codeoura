'use client';

import { useEffect } from 'react';

/**
 * A single IntersectionObserver for every `[data-anim]` element on the page.
 *
 * Elements start at opacity 0 in CSS and are animated in once. The delay comes
 * from `data-seq`, written to a custom property, so a group enters in sequence
 * without a timer per element. Each element is unobserved after its first
 * appearance: the animation is an entrance, not a state to maintain.
 */
export function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-anim]');
    if (!elements.length) return;

    // Honour the OS setting here as well as in CSS, so nothing is left hidden
    // if the animation is suppressed before it runs.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.style.setProperty('--seq', el.dataset.seq ?? '0');
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
