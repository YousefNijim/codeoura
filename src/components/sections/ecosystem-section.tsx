import { getLocale, getTranslations } from 'next-intl/server';

import { Animate } from '@/components/primitives/animate';
import { SectionHeading } from '@/components/primitives/section-heading';
import { projects } from '@/content/projects';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

/** Every system in one row, as a directory of ways in. */
export async function EcosystemSection() {
  const t = await getTranslations('ecosystem');
  const locale = (await getLocale()) as Locale;

  return (
    <section id="ecosystem" className="section-pad relative overflow-hidden">
      <div className="page-gutter relative z-10">
        <div className="section-container mx-auto max-w-[1240px]">
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
          />

          <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-16 lg:flex lg:items-stretch lg:justify-between">
            {projects.map((project, index) => (
              <Animate
                as="li"
                key={project.slug}
                name="fadeInUp"
                seq={index}
                className="lg:flex-1"
              >
                <a
                  href={project.demo?.href ?? '#products'}
                  target={project.demo ? '_blank' : undefined}
                  rel={project.demo ? 'noopener noreferrer' : undefined}
                  className="hover-lift hover-glow flex h-full min-h-[124px] flex-col items-center justify-center gap-2 rounded-2xl border border-card-border bg-card p-4 text-center transition-colors hover:border-accent/40"
                >
                  <span className="font-mono text-xs text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-ink">
                    {pick(project.name, locale)}
                  </span>
                  <span className="text-[11px] text-ink-muted">
                    {t(`category.${project.category}`)}
                  </span>
                </a>
              </Animate>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
