import Image from 'next/image';

import { asset } from '@/lib/asset';
import { cn } from '@/lib/utils';
import type { Project } from '@/content/types';

/**
 * Cover art for a project.
 *
 * Prefers a real screenshot of the running product. The plain named surface is
 * a fallback for a project with nothing to photograph yet, not the default.
 */
export function ProjectCover({
  project,
  label,
  className,
  priority = false,
}: {
  project: Project;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  const { image } = project.cover;

  return (
    <div
      className={cn(
        'relative aspect-16/10 w-full overflow-hidden bg-background',
        className,
      )}
    >
      {image ? (
        <Image
          src={asset(image)}
          alt={label}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105"
        />
      ) : (
        // No screenshot yet: a plain surface carrying the name, rather than a
        // decorated placeholder pretending to be a product.
        <div className="absolute inset-0 flex items-center justify-center bg-surface">
          {/* The surrounding heading already names the project. */}
          <span
            aria-hidden
            className="px-6 text-center text-2xl text-muted-foreground sm:text-3xl"
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
