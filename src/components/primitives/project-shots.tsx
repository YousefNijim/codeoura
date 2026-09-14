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
 * Portrait is assumed — these are phone screens — so the frame is sized by
 * width and lets height follow, and `object-contain` keeps a shot that is not
 * quite the same ratio whole rather than cropping it.
 */
export function ProjectShots({
  project,
  label,
}: {
  project: Project;
  label: string;
}) {
  const shots = project.shots;
  if (!shots) return null;

  return (
    <div className="flex flex-col gap-8">
      <ul className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-3 sm:items-start">
        {shots.featured.map((src) => (
          <li key={src} className="w-full max-w-[320px]">
            <Shot src={src} label={label} width={320} priority />
          </li>
        ))}
      </ul>

      {shots.gallery.length > 0 && (
        <ul className="grid grid-cols-2 justify-items-center gap-5 sm:grid-cols-4 lg:grid-cols-7">
          {shots.gallery.map((src) => (
            <li key={src} className="w-full max-w-[150px]">
              <Shot src={src} label={label} width={150} />
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
  priority = false,
}: {
  src: string;
  label: string;
  width: number;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-border bg-surface">
      <Image
        src={asset(src)}
        alt={label}
        // The intrinsic ratio of these captures; `h-auto` lets a shot that
        // differs keep its own, since the box is sized by width alone.
        width={1408}
        height={3044}
        sizes={`${width}px`}
        priority={priority}
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
