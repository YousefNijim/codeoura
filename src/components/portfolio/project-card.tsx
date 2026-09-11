'use client';

import { ArrowUpRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import { GlowCard } from '@/components/primitives/glow-card';
import { ProjectCover } from '@/components/primitives/project-cover';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/content/types';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';
import { cn } from '@/lib/utils';

export function ProjectCard({
  project,
  onSelect,
  className,
}: {
  project: Project;
  /** When provided the card opens the quick-look dialog instead of navigating. */
  onSelect?: (project: Project) => void;
  className?: string;
}) {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;
  const name = pick(project.name, locale);

  // Without a handler the card is presentational, so the caller can wrap it in
  // a link. Nesting a button inside an anchor would be invalid HTML.
  const Inner = onSelect ? 'button' : 'div';
  const interactiveProps = onSelect
    ? ({ type: 'button', onClick: () => onSelect(project), 'aria-label': name } as const)
    : {};

  return (
    <GlowCard className={cn('h-full', className)}>
      <Inner
        className="flex h-full w-full flex-col text-start"
        {...interactiveProps}
      >
        <div className="relative">
          <ProjectCover project={project} label={name} />
          {project.demo && (
            <span className="absolute end-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
              <span aria-hidden className="size-1.5 animate-pulse-glow rounded-full bg-accent" />
              {t('demoBadge')}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
            <span className="shrink-0 font-mono text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>

          <p className="text-sm font-medium text-primary">
            {pick(project.tagline, locale)}
          </p>

          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {pick(project.summary, locale)}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-3">
            {project.stack.slice(0, 4).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
            {project.stack.length > 4 && (
              <Badge>+{project.stack.length - 4}</Badge>
            )}
            <ArrowUpRight
              aria-hidden
              className="ms-auto size-4 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 rtl:-scale-x-100"
            />
          </div>
        </div>
      </Inner>
    </GlowCard>
  );
}
