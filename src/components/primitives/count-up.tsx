'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * A figure that counts up to itself the first time it is seen.
 *
 * Only the leading number moves; anything around it (a "%", a "/7") stays put,
 * so "24/7" and "100%" animate as numbers rather than as strings. The server
 * renders the final value, which is what a visitor without JavaScript, a
 * crawler, or anyone asking for reduced motion reads — the count is an
 * entrance, never the only way to get the figure.
 */
export function CountUp({
  value,
  className,
  duration = 1400,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : '';

  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || target === null || target === 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          // Ease out: fast through the small numbers, slow into the last
          // few, so the eye catches the figure it lands on.
          const eased = 1 - Math.pow(1 - t, 4);
          setShown(Math.round(eased * target));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        setShown(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {/* Tabular figures, so the width does not jitter as digits change. */}
      <span className="tabular-nums">{shown ?? target ?? value}</span>
      {target !== null && suffix}
    </span>
  );
}
