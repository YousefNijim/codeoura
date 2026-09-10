import { cn } from '@/lib/utils';
import type { Project } from '@/content/types';

/**
 * Generated cover art.
 *
 * Each project carries two OKLCH stops, so every card gets a distinct, stable
 * identity without waiting on screenshots. Replace with a real <Image> once
 * production captures exist — the surrounding layout does not change.
 */
export function ProjectCover({
  project,
  label,
  className,
}: {
  project: Project;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative aspect-16/10 w-full overflow-hidden bg-background',
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 90% at 15% 10%, ${project.cover.from}, transparent 60%),
            radial-gradient(ellipse 70% 90% at 85% 90%, ${project.cover.to}, transparent 60%),
            linear-gradient(140deg, ${project.cover.from}, ${project.cover.to})
          `,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, oklch(1 0 0 / 40%) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(1 0 0 / 40%) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, #000, transparent 75%)',
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-background/25" />
      {/* Decorative: the surrounding heading already names the project, so
          announcing the label here would repeat it. */}
      <div aria-hidden className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-4xl">
          {label}
        </span>
      </div>
    </div>
  );
}
