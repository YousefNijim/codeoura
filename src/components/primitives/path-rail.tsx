'use client';

import { useEffect, useRef } from 'react';

/**
 * The timeline beside a route's steps.
 *
 * A segment lights as its step comes into view, so the rail reports where the
 * reader is rather than animating on its own. The observer is scoped to the
 * enclosing `.path-track`, which is what lets two routes on one page each keep
 * their own progress.
 */
export function PathRail({ count }: { count: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = ref.current;
    const track = rail?.closest('.path-track');
    if (!rail || !track) return;

    const steps = [...track.querySelectorAll('.path-step-card')];
    const segments = [...rail.querySelectorAll('.path-rail-segment')];
    if (!steps.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = steps.indexOf(entry.target);
          if (index < 0) continue;
          // Only ever added: a rail that dims again as the reader scrolls
          // back up reads as a bug rather than as progress.
          if (entry.isIntersecting) segments[index]?.classList.add('is-active');
        }
      },
      { threshold: 0.4, rootMargin: '-20% 0px -20% 0px' },
    );

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden className="path-rail-col">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="path-rail-segment">
          <span className="path-rail-dot" />
          {index < count - 1 && <span className="path-rail-line" />}
        </div>
      ))}
    </div>
  );
}
