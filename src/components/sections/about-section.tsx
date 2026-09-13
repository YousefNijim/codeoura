import { getLocale, getTranslations } from 'next-intl/server';

import { Animate } from '@/components/primitives/animate';
import { ProjectCover } from '@/components/primitives/project-cover';
import { principles } from '@/content/company';
import { featuredProjects, projects } from '@/content/projects';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

export async function AboutSection() {
  const t = await getTranslations('about');
  const locale = (await getLocale()) as Locale;

  // Counted from the work itself rather than typed in: a figure a visitor can
  // check against the grid has to move when a project is added, and a hand-kept
  // number silently stops being true the first time one is.
  const sectors = new Set(projects.map((project) => project.category));

  const stats = [
    { value: `${projects.length}`, label: t('stats.systems') },
    { value: `${sectors.size}`, label: t('stats.sectors') },
    { value: '24/7', label: t('stats.support') },
    { value: '100%', label: t('stats.typed') },
  ];

  // The lead project stands in as the section's illustration: a real screen
  // from a real system, rather than an image bought to fill the column.
  const showcase = featuredProjects[0];

  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="page-gutter">
        <div className="section-container flex flex-col gap-[30px] lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <Animate name="fadeInLeft" seq={0} className="order-1">
            <div className="overflow-hidden rounded-2xl border border-card-border">
              <ProjectCover
                project={showcase}
                label={pick(showcase.name, locale)}
                priority
              />
            </div>
          </Animate>

          <div className="order-2 flex flex-col">
            <Animate name="fadeInUp" seq={0} as="p" className="mb-5">
              <span className="text-gradient-brand inline-flex items-center gap-2 text-base font-medium lg:text-xl">
                {t('eyebrow')}
                <span aria-hidden>↗</span>
              </span>
            </Animate>

            <Animate name="fadeInUp" seq={1} as="h2" className="mb-6">
              <span className="block text-[26px] leading-[1.2] lg:text-[30px]">
                {t('title')}
              </span>
            </Animate>

            <Animate name="fadeInUp" seq={2} as="p" className="mb-9">
              <span className="block text-sm leading-[1.6] text-ink-muted lg:text-base">
                {t('subtitle')}
              </span>
            </Animate>

            <div aria-hidden className="rule-brand mb-9" />

            <dl className="mb-9 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Animate key={stat.label} name="fadeInUp" seq={index}>
                  <div className="flex flex-col gap-1">
                    <dd className="text-gradient-brand text-3xl font-bold lg:text-4xl">
                      {stat.value}
                    </dd>
                    <dt className="text-xs text-ink-muted lg:text-sm">
                      {stat.label}
                    </dt>
                  </div>
                </Animate>
              ))}
            </dl>

            <Animate name="fadeInUp" seq={3}>
              <ul className="flex flex-col gap-3">
                {principles.map((principle) => (
                  <li
                    key={principle.title.en}
                    className="flex items-start gap-3 text-sm text-ink-secondary"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-px w-3 shrink-0 bg-gradient-brand"
                    />
                    {pick(principle.title, locale)}
                  </li>
                ))}
              </ul>
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
}
