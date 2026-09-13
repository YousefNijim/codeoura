import Image from 'next/image';

import { systemLogos } from './system-logos';
import type { Project } from '@/content/types';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/utils';

/**
 * The mark shown beside a system's name.
 *
 * Three of the seven ship real artwork, recovered from their own running
 * builds. The other four were drawn for them: see `system-logos`. Both arrive
 * here at the same optical size, so a row of them reads as one set.
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
  const Drawn = systemLogos[project.slug];

  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[28%] border border-card-border bg-page/70 backdrop-blur-[5px]',
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
      ) : Drawn ? (
        <Drawn className="size-full" />
      ) : (
        <span
          aria-hidden
          className="text-gradient-brand font-bold"
          style={{ fontSize: Math.round(size * 0.32) }}
        >
          {project.name.en.slice(0, 2).toUpperCase()}
        </span>
      )}
    </span>
  );
}
