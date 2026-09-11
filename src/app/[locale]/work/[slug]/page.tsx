import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { Container } from '@/components/primitives/container';
import { ProjectCover } from '@/components/primitives/project-cover';
import { Section } from '@/components/primitives/section';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getProject, projects } from '@/content/projects';
import { getServiceById } from '@/content/services';
import { Link } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const typedLocale = locale as Locale;

  return {
    title: pick(project.name, typedLocale),
    description: pick(project.summary, typedLocale),
    alternates: {
      canonical: `/${locale}/work/${slug}`,
      languages: Object.fromEntries(
        routing.locales.map((item) => [item, `/${item}/work/${slug}`]),
      ),
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations('work');
  const typedLocale = locale as Locale;
  const name = pick(project.name, typedLocale);

  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];

  const sections = [
    { label: t('challenge'), body: pick(project.caseStudy.challenge, typedLocale) },
    { label: t('solution'), body: pick(project.caseStudy.solution, typedLocale) },
    { label: t('outcome'), body: pick(project.caseStudy.outcome, typedLocale) },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Work', url: `/${locale}/work` },
          { name, url: `/${locale}/work/${slug}` },
        ]}
      />

      <Section className="pb-0 pt-32 sm:pt-40">
        <Button asChild variant="ghost" size="sm" className="-ms-3 mb-8">
          <Link href="/work">
            <ArrowLeft aria-hidden className="rtl:-scale-x-100" />
            {t('backToWork')}
          </Link>
        </Button>

        <div className="flex max-w-3xl flex-col gap-5">
          <h1 className="text-[length:var(--text-display-sm)]">
            {name}
          </h1>
          <p className="text-lg font-medium text-primary">
            {pick(project.tagline, typedLocale)}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {pick(project.summary, typedLocale)}
          </p>
        </div>
      </Section>

      <Container className="mt-14">
        <ProjectCover
          project={project}
          label={name}
          className="rounded-none border border-border"
        />
      </Container>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <aside className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
            <MetaBlock label={t('yearLabel')}>
              <span className="font-mono text-sm">{project.year}</span>
            </MetaBlock>

            <MetaBlock label={t('platformsLabel')}>
              <div className="flex flex-wrap gap-1.5">
                {project.platforms.map((platform) => (
                  <Badge key={platform}>{t(`platform.${platform}`)}</Badge>
                ))}
              </div>
            </MetaBlock>

            <MetaBlock label={t('servicesLabel')}>
              <div className="flex flex-wrap gap-1.5">
                {project.services.map((id) => {
                  const service = getServiceById(id);
                  if (!service) return null;
                  return (
                    <Badge key={id} variant="accent">
                      {pick(service.title, typedLocale)}
                    </Badge>
                  );
                })}
              </div>
            </MetaBlock>

            <MetaBlock label={t('stackLabel')}>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </MetaBlock>

            {project.demo && (
              <MetaBlock label={t('demoLabel')}>
                <p className="text-sm text-muted-foreground">
                  {pick(project.demo.surface, typedLocale)}
                </p>
                <Button asChild variant="primary" size="sm" className="mt-1 w-fit">
                  <a href={project.demo.href} target="_blank" rel="noopener noreferrer">
                    {t('demoOpen')}
                    <ExternalLink aria-hidden />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground">{t('demoNote')}</p>
              </MetaBlock>
            )}

            {project.url && (
              <Button asChild variant="outline" size="sm" className="w-fit">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {t('visitSite')}
                  <ExternalLink aria-hidden />
                </a>
              </Button>
            )}
          </aside>

          <div className="flex flex-col gap-12">
            {sections.map((section) => (
              <div key={section.label} className="flex flex-col gap-3">
                <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                  {section.label}
                </h2>
                <p className="text-lg leading-relaxed text-foreground/85">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section surface className="py-16">
        <Link
          href={`/work/${next.slug}`}
          className="group flex items-center justify-between gap-6 rounded-none border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:p-8"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {t('nextProject')}
            </span>
            <span className="text-xl font-semibold tracking-tight">
              {pick(next.name, typedLocale)}
            </span>
          </div>
          <ArrowRight
            aria-hidden
            className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 rtl:-scale-x-100"
          />
        </Link>
      </Section>
    </>
  );
}

function MetaBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2.5 border-t border-border pt-5">
      <h2 className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </h2>
      {children}
    </div>
  );
}
