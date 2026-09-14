'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import { ProjectCover } from '@/components/primitives/project-cover';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Project } from '@/content/types';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;

  const name = pick(project.name, locale);

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      {/* A column, not one long scroller: the artwork and the actions hold
          their place and only the reading matter between them moves. On a
          short phone the whole dialog used to scroll as one, which left the
          actions below the fold with nothing to say they were there. */}
      <DialogContent className="flex max-h-[90dvh] max-w-2xl flex-col gap-0 overflow-hidden p-0">
        {/* Capped on a small screen. The cover is a 16:10 crop, and of a
            portrait capture that is a sliver of a phone's status bar — not
            worth a third of a 568px screen. */}
        <ProjectCover
          project={project}
          label={name}
          className="max-h-[132px] shrink-0 rounded-t-lg sm:max-h-none"
        />

        <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-6 sm:p-8">
          <div className="flex flex-col gap-2">
            <DialogTitle className="text-2xl font-semibold tracking-tight">
              {name}
            </DialogTitle>
            <DialogDescription className="text-sm font-medium text-primary">
              {pick(project.tagline, locale)}
            </DialogDescription>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {pick(project.summary, locale)}
          </p>

          <dl className="grid gap-4 border-y border-border py-5 sm:grid-cols-3">
            <MetaItem label={t('yearLabel')} value={String(project.year)} />
            <MetaItem
              label={t('platformsLabel')}
              value={project.platforms
                .map((platform) => t(`platform.${platform}`))
                .join(' · ')}
            />
            <MetaItem
              label={t('stackLabel')}
              value={`${project.stack.length}`}
            />
          </dl>

          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="primary">
                {tech}
              </Badge>
            ))}
          </div>

        </div>

        <div className="shrink-0 border-t border-border p-5 sm:p-8 sm:pt-6">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              {project.demo && (
                <Button asChild variant="primary" className="w-full sm:w-fit">
                  <a href={project.demo.href} target="_blank" rel="noopener noreferrer">
                    {t('demoOpen')}
                    <ExternalLink aria-hidden />
                  </a>
                </Button>
              )}
              {/* A system with no demonstration but a live site of its own
                  still has somewhere to send the visitor. */}
              {project.url && (
                <Button
                  asChild
                  variant={project.demo ? 'outline' : 'primary'}
                  className="w-full sm:w-fit"
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {t('visitSite')}
                    <ExternalLink aria-hidden />
                  </a>
                </Button>
              )}
              <Button
                asChild
                variant={project.demo || project.url ? 'outline' : 'primary'}
                className="w-full sm:w-fit"
              >
                <Link href={`/work/${project.slug}`}>
                  {t('viewCase')}
                  <ArrowRight aria-hidden className="rtl:-scale-x-100" />
                </Link>
              </Button>
            </div>
            {project.demo && (
              <p className="text-xs text-muted-foreground">{t('demoNote')}</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </dt>
      <dd className="text-sm font-medium">{value}</dd>
    </div>
  );
}
