import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, Mail } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { brandButtonClass, brandButtonShadow } from '@/components/primitives/brand-button';
import { Section } from '@/components/primitives/section';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { getSolution, solutions } from '@/content/solutions';
import { Link } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    solutions.map((solution) => ({ locale, slug: solution.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};

  const typedLocale = locale as Locale;

  return {
    title: `${solution.name} — ${pick(solution.audience, typedLocale)}`,
    description: pick(solution.summary, typedLocale),
    alternates: {
      canonical: `/${locale}/solutions/${slug}`,
      languages: Object.fromEntries(
        routing.locales.map((item) => [item, `/${item}/solutions/${slug}`]),
      ),
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const solution = getSolution(slug);
  if (!solution) notFound();

  const t = await getTranslations('solutions');
  const tw = await getTranslations('work');
  const typedLocale = locale as Locale;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Solutions', url: `/${locale}#solutions` },
          { name: solution.name, url: `/${locale}/solutions/${slug}` },
        ]}
      />

      <Section className="pt-32 sm:pt-40">
        <Button asChild variant="ghost" size="sm" className="-ms-3 mb-8">
          <Link href="/#solutions">
            <ArrowLeft aria-hidden className="rtl:-scale-x-100" />
            {t('back')}
          </Link>
        </Button>

        <div className="flex max-w-[820px] flex-col gap-5">
          <p className="text-gradient-brand w-fit text-base font-medium lg:text-xl">
            {pick(solution.audience, typedLocale)}
          </p>
          <h1 className="text-5xl leading-none text-ink lg:text-7xl">
            <bdi>{solution.name}</bdi>
          </h1>
          <p className="text-xl font-medium leading-snug text-ink lg:text-2xl">
            {pick(solution.tagline, typedLocale)}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {pick(solution.summary, typedLocale)}
          </p>

          <dl className="mt-1 flex flex-wrap items-center gap-2 text-sm">
            <dt className="text-muted-foreground">{t('platforms')}:</dt>
            {solution.platforms.map((platform) => (
              <dd
                key={platform}
                className="h-7 rounded-full bg-accent-light px-3.5 text-xs leading-7 text-accent"
              >
                {tw(`platform.${platform}`)}
              </dd>
            ))}
          </dl>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`mailto:${solution.email}?subject=${encodeURIComponent(`${solution.name} — ${t('ask')}`)}`}
              className={brandButtonClass('md')}
              style={brandButtonShadow}
            >
              <Mail aria-hidden className="size-4" />
              {t('ask')}
            </a>
            <a
              href={solution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-card-border px-5 text-sm font-medium text-ink transition-colors hover:border-accent/40"
            >
              {t('visit')}
              <ArrowUpRight aria-hidden className="size-4 rtl:-scale-x-100" />
            </a>
          </div>
        </div>
      </Section>

      <Section surface>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {t('modules')}
        </h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {solution.modules.map((module) => (
            <li
              key={module.title.en}
              className="rounded-2xl border border-card-border bg-card p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-ink">
                {pick(module.title, typedLocale)}
              </h3>
              <ul className="mt-5 flex flex-col gap-3.5">
                {pick(module.items, typedLocale).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span aria-hidden className="mt-2.5 h-px w-2.5 shrink-0 bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {t('flow', { name: solution.name })}
        </h2>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solution.flow.map((step, index) => (
            <li key={step.title.en} className="flex flex-col gap-3 border-t border-card-border pt-6">
              <span className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold text-ink">
                {pick(step.title, typedLocale)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pick(step.description, typedLocale)}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section surface>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {t('highlights', { name: solution.name })}
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {solution.highlights.map((item) => (
            <li
              key={item.title.en}
              className="rounded-2xl border border-card-border bg-card p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-ink">
                {pick(item.title, typedLocale)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pick(item.description, typedLocale)}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
