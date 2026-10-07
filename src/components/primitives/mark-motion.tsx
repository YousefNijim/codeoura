import { useId } from 'react';

import { cn } from '@/lib/utils';

/**
 * The brand mark, animated in code rather than played from a video.
 *
 * It tells the same story the video did — a line that twists into a loop, the
 * brackets arriving in the right-hand ring — but it does not end. The video
 * cut back to its first frame every ten seconds, and the white ground it was
 * shot on had to be blended away, which left it looking laid on top of the
 * page. Here the intro plays once, then a light travels around the loop
 * indefinitely and the whole mark breathes; there is no seam to cut on, and the
 * stroke is the theme colour itself, so there is nothing to key out.
 *
 * Geometry: two rings of radius 36 joined by a crossing, drawn on a 200×100
 * box. `pathLength` normalises the path to 1000 units, so the draw-on and the
 * travelling light are written in fractions of the loop rather than in pixels.
 * The two cuts in the left ring are what turn the loop into the C of the logo.
 *
 * Everything is CSS on the compositor (`stroke-dashoffset`, `transform`,
 * `opacity`); reduced motion shows the finished mark and nothing moves.
 */
const LOOP =
  'M100 50C118 18 176 14 178 50S118 82 100 50 22 14 22 50s64 32 78 0Z';

export function MarkMotion({
  className,
  variant = 'background',
}: {
  className?: string;
  variant?: 'background' | 'solid';
}) {
  // Two marks on one page (hero and closing call) must not share a mask id.
  const maskId = 'mm-cuts-' + useId().replace(/:/g, '');

  return (
    <div
      aria-hidden
      className={cn(
        'mark-motion pointer-events-none',
        variant === 'solid' && 'mark-motion--solid',
        className,
      )}
    >
      <svg viewBox="0 0 200 100" className="size-full overflow-visible">
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse">
            <rect x="-20" y="-20" width="240" height="140" fill="#fff" />
            <rect x="57" y="0" width="6" height="26" fill="#000" />
            <rect x="57" y="74" width="6" height="26" fill="#000" />
          </mask>
        </defs>

        <g className="mark-motion__body" mask={`url(#${maskId})`}>
          <path className="mark-motion__loop" d={LOOP} pathLength={1000} />
          <path className="mark-motion__light" d={LOOP} pathLength={1000} />
        </g>

        <g className="mark-motion__brackets">
          <path className="mark-motion__bracket mark-motion__bracket--open" d="M142 41l-9 9 9 9" />
          <path className="mark-motion__bracket mark-motion__bracket--close" d="M152 41l9 9-9 9" />
        </g>
      </svg>
    </div>
  );
}
