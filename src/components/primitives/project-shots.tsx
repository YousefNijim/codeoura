import Image from 'next/image';

import { asset } from '@/lib/asset';
import type { Project } from '@/content/types';

/**
 * Screens from the product, at the resolution they were captured at.
 *
 * Each is its own image element rather than one flattened strip: the browser
 * gets the real file and `next/image` sizes it per viewport, so a phone screen
 * captured at 1408 wide still reads at 1408 on a display that can show it.
 * A composite would have fixed that decision at build time, at whatever size
 * happened to suit one layout.
 *
 * Two shapes, because a phone capture and a desktop capture cannot share a
 * frame: three tall screens sit in a row where two wide ones need the full
 * measure one under the other.
 */
const layout = {
  portrait: {
    featured: 'grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-3 sm:items-start',
    featuredItem: 'w-full max-w-[320px]',
    featuredSize: 320,
    gallery: 'grid grid-cols-2 justify-items-center gap-5 sm:grid-cols-4 lg:grid-cols-7',
    galleryItem: 'w-full max-w-[150px]',
    gallerySize: 150,
    // The tallest capture in the set; `h-auto` lets the others keep their own.
    ratio: { width: 1408, height: 3044 },
  },
  landscape: {
    featured: 'grid grid-cols-1 gap-8',
    featuredItem: 'w-full',
    featuredSize: 1200,
    gallery: 'grid grid-cols-1 gap-6 sm:grid-cols-2',
    galleryItem: 'w-full',
    gallerySize: 600,
    ratio: { width: 1908, height: 919 },
  },
} as const;

export function ProjectShots({
  project,
  label,
}: {
  project: Project;
  label: string;
}) {
  const shots = project.shots;
  if (!shots) return null;

  const l = layout[shots.shape];

  return (
    <div className="flex flex-col gap-8">
      <ul className={l.featured}>
        {shots.featured.map((src) => (
          <li key={src} className={l.featuredItem}>
            <Shot src={src} label={label} width={l.featuredSize} ratio={l.ratio} priority />
          </li>
        ))}
      </ul>

      {shots.gallery.length > 0 && (
        <ul className={l.gallery}>
          {shots.gallery.map((src) => (
            <li key={src} className={l.galleryItem}>
              <Shot src={src} label={label} width={l.gallerySize} ratio={l.ratio} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Shot({
  src,
  label,
  width,
  ratio,
  priority = false,
}: {
  src: string;
  label: string;
  width: number;
  ratio: { width: number; height: number };
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-border bg-surface">
      <Image
        src={asset(src)}
        alt={label}
        width={ratio.width}
        height={ratio.height}
        sizes={`(min-width: 1024px) ${width}px, 100vw`}
        priority={priority}
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
