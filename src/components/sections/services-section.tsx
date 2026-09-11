import { getLocale, getTranslations } from 'next-intl/server';

import { Panel } from '@/components/primitives/panel';
import { Reveal } from '@/components/primitives/reveal';
import { Section } from '@/components/primitives/section';
import { SectionHeading } from '@/components/primitives/section-heading';
import { services } from '@/content/services';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

export async function ServicesSection() {
  const t = await getTranslations('services');
  const locale = (await getLocale()) as Locale;

  return (
    <Section id="services" surface>
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          // The first card spans two columns on large screens, so the grid
          // reads as a composition rather than a uniform tile wall.
          const isLead = index === 0;

          return (
            <Reveal
              as="li"
              key={service.id}
              delay={index * 0.05}
              className={isLead ? 'lg:col-span-2' : undefined}
            >
              <Panel className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="flex h-full flex-col gap-5 p-6 sm:p-7"
                >
                  {/* A numeral and a rule, set in the mono face: the service
                      is identified by its place in the list, not by a
                      pictogram standing in for an idea it cannot carry. */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span aria-hidden className="h-px flex-1 bg-border" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {pick(service.title, locale)}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {pick(service.tagline, locale)}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {pick(service.description, locale)}
                    </p>
                  </div>

                  <ul
                    className={
                      isLead
                        ? 'mt-auto grid gap-2 pt-2 sm:grid-cols-2'
                        : 'mt-auto grid gap-2 pt-2'
                    }
                  >
                    {pick(service.capabilities, locale).map((capability) => (
                      <li
                        key={capability}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          aria-hidden
                          className="mt-2.5 h-px w-2.5 shrink-0 bg-primary"
                        />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Panel>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
