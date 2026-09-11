import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { ProjectCard } from '@/components/portfolio/project-card';
import { Section } from '@/components/primitives/section';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/content/projects';
import { getService, services } from '@/content/services';
import { Link } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((service) => ({ locale, slug: service.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const typedLocale = locale as Locale;

  return {
    title: pick(service.title, typedLocale),
    description: pick(service.description, typedLocale),
    alternates: {
      canonical: `/${locale}/services/${slug}`,
      languages: Object.fromEntries(
        routing.locales.map((item) => [item, `/${item}/services/${slug}`]),
      ),
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getService(slug);
  if (!service) notFound();

  const t = await getTranslations('services');
  const tw = await getTranslations('work');
  const tn = await getTranslations('nav');
  const typedLocale = locale as Locale;
  const title = pick(service.title, typedLocale);

  const related = projects.filter((project) =>
    project.services.includes(service.id),
  );

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Services', url: `/${locale}#services` },
          { name: title, url: `/${locale}/services/${slug}` },
        ]}
      />

      <Section className="pt-32 sm:pt-40">
        <Button asChild variant="ghost" size="sm" className="-ms-3 mb-8">
          <Link href="/#services">
            <ArrowLeft aria-hidden className="rtl:-scale-x-100" />
            {t('eyebrow')}
          </Link>
        </Button>

        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="flex flex-col gap-5">
            <h1 className="text-[length:var(--text-display-sm)]">
              {title}
            </h1>
            <p className="text-lg font-medium text-primary">
              {pick(service.tagline, typedLocale)}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              {pick(service.description, typedLocale)}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {service.stack.map((tech) => (
                <Badge key={tech} variant="primary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {t('capabilities')}
            </h2>
            <ul className="mt-5 flex flex-col gap-3.5">
              {pick(service.capabilities, typedLocale).map((capability) => (
                <li key={capability} className="flex items-start gap-3 text-sm">
                  <Check
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-primary"
                  />
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section surface>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {tw('eyebrow')}
          </h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((project) => (
              <li key={project.slug}>
                <Link href={`/work/${project.slug}`} className="block h-full">
                  <ProjectCard project={project} />
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section className="py-16">
        <Button asChild variant="primary" size="lg">
          <Link href="/#contact">
            {tn('startProject')}
            <ArrowRight aria-hidden className="rtl:-scale-x-100" />
          </Link>
        </Button>
      </Section>
    </>
  );
}
