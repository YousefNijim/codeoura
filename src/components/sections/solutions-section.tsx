import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';

import { Animate } from '@/components/primitives/animate';
import { SectionHeading } from '@/components/primitives/section-heading';
import { solutions } from '@/content/solutions';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';
import { cn } from '@/lib/utils';

/**
 * The products Codeoura owns, kept apart from the client work below it.
 *
 * One solution spans the full width; from two on they share a row. The grid
 * follows the count so adding a product in the content layer is all it takes.
 */
export async function SolutionsSection() {
  const t = await getTranslations('solutions');
  const locale = (await getLocale()) as Locale;

  if (solutions.length === 0) return null;

  return (
    <section id="solutions" className="section-pad relative overflow-hidden">
      <div className="page-gutter relative z-[1]">
        <div className="section-container">
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
          />

          <ul
            className={cn(
              'mx-auto mt-12 grid max-w-[1240px] gap-[26px] lg:mt-16',
              solutions.length > 1 && 'lg:grid-cols-2',
            )}
          >
            {solutions.map((solution, index) => (
              <Animate
                as="li"
                key={solution.slug}
                name="fadeInUp"
                seq={index}
                className="h-full"
              >
                <article className="hover-lift flex h-full flex-col gap-8 rounded-2xl border border-card-border bg-card p-6 hover:border-accent/40 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
                  <div className="flex max-w-[640px] flex-col gap-4">
                    <p className="text-sm font-medium text-accent">
                      {pick(solution.audience, locale)}
                    </p>
                    <h3 className="text-3xl text-ink lg:text-[40px]">
                      <bdi>{solution.name}</bdi>
                    </h3>
                    <p className="text-base leading-[1.6] text-ink-secondary lg:text-lg">
                      {pick(solution.tagline, locale)}
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {solution.modules.map((module) => (
                        <li
                          key={module.title.en}
                          className="h-7 rounded-full bg-accent-light px-3.5 text-xs leading-7 text-accent"
                        >
                          {pick(module.title, locale)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-3">
                    <Link
                      href={`/solutions/${solution.slug}`}
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-accent/60 bg-accent-light px-5 text-sm font-medium text-accent transition-colors hover:border-accent"
                    >
                      {t('open')}
                      <ArrowRight aria-hidden className="size-4 rtl:-scale-x-100" />
                    </Link>
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
                </article>
              </Animate>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
