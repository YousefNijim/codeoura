import Image from 'next/image';

import type { Project } from '@/content/types';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/utils';

/**
 * The mark shown beside a system's name.
 *
 * Three of the seven ship a real logo, recovered from their own running
 * builds. The rest have none, so they get a monogram in the brand gradient
 * rather than an empty tile — the row stays even, and the day a real file
 * arrives it is one `logo` field away from replacing this.
 */
export function SystemMark({
  project,
  size = 52,
  className,
}: {
  project: Project;
  size?: number;
  className?: string;
}) {
  const name = project.name.en;

  // Initials, not a single letter: three of the seven names begin with the
  // same character, and one letter would make them indistinguishable.
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
  const monogram = initials.length > 1 ? initials : name.slice(0, 2).toUpperCase();

  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-card-border bg-page/70 backdrop-blur-[5px]',
        className,
      )}
      style={{ width: size, height: size }}
    >
      {project.logo ? (
        <Image
          src={asset(project.logo)}
          alt=""
          width={size}
          height={size}
          className="size-full object-cover"
          sizes={`${size}px`}
        />
      ) : (
        <span
          aria-hidden
          className="text-gradient-brand font-bold"
          style={{ fontSize: Math.round(size * 0.32) }}
        >
          {monogram}
        </span>
      )}
    </span>
  );
}
