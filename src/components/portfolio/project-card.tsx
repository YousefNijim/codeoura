'use client';

import { useLocale, useTranslations } from 'next-intl';

import { ProjectCover } from '@/components/primitives/project-cover';
import type { Project } from '@/content/types';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';
import { cn } from '@/lib/utils';

/**
 * A project entry.
 *
 * Not a card: the screenshot is framed by a hairline, and everything under it
 * is plain text on the page. Boxing the text as well would turn the section
 * into a tile wall, which is the look we are deliberately avoiding.
 */
export function ProjectCard({
  project,
  onSelect,
  className,
  lead = false,
}: {
  project: Project;
  /** When provided the entry opens the quick-look dialog instead of navigating. */
  onSelect?: (project: Project) => void;
  className?: string;
  /** The lead entry sets its image beside the text rather than above it. */
  lead?: boolean;
}) {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;
  const name = pick(project.name, locale);

  // Without a handler the entry is presentational, so the caller can wrap it in
  // a link. Nesting a button inside an anchor would be invalid HTML.
  const Inner = onSelect ? 'button' : 'div';
  const interactiveProps = onSelect
    ? ({ type: 'button', onClick: () => onSelect(project), 'aria-label': name } as const)
    : {};

  return (
    <Inner
      className={cn(
        'group/row flex w-full flex-col text-start',
        lead && 'sm:grid sm:grid-cols-12 sm:items-start sm:gap-10',
        className,
      )}
      {...interactiveProps}
    >
      <div
        className={cn(
          'relative overflow-hidden border border-border',
          lead && 'sm:col-span-7',
        )}
      >
        <ProjectCover project={project} label={name} priority={lead} />
        {project.demo && (
          <span className="absolute end-0 top-0 inline-flex items-center gap-1.5 bg-background/90 px-2.5 py-1 font-mono text-[11px] text-foreground">
            <span aria-hidden className="size-1 rounded-full bg-primary" />
            {t('demoBadge')}
          </span>
        )}
      </div>

      <div
        className={cn(
          'flex flex-col gap-2.5 pt-4',
          lead && 'sm:col-span-5 sm:pt-0',
        )}
      >
        <div className="flex items-baseline justify-between gap-4 border-b border-border pb-2">
          <h3
            className={cn(
              'leading-snug transition-colors group-hover/row:text-primary',
              lead ? 'text-2xl sm:text-3xl' : 'text-xl',
            )}
          >
            {name}
          </h3>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">
            {project.year}
          </span>
        </div>

        <p className="text-sm font-medium text-foreground">
          {pick(project.tagline, locale)}
        </p>

        <p
          className={cn(
            'text-sm leading-relaxed text-muted-foreground',
            lead ? 'line-clamp-none' : 'line-clamp-3',
          )}
        >
          {pick(project.summary, locale)}
        </p>

        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {project.stack.slice(0, 4).join(' · ')}
          {project.stack.length > 4 && ` · +${project.stack.length - 4}`}
        </p>
      </div>
    </Inner>
  );
}
