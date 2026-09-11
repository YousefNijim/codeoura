import { getLocale, getTranslations } from 'next-intl/server';

import { Reveal } from '@/components/primitives/reveal';
import { Section } from '@/components/primitives/section';
import { SectionHeading } from '@/components/primitives/section-heading';
import { services } from '@/content/services';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

/**
 * The services, set as a ruled schedule rather than a wall of tiles.
 *
 * Each entry is a row on the same grid: number, name, then the description and
 * the scope in their own columns. A reader can run down the numbers and read
 * only the names, which a grid of equal boxes never allows.
 */
export async function ServicesSection() {
  const t = await getTranslations('services');
  const locale = (await getLocale()) as Locale;

  return (
    <Section id="services">
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <ul className="mt-16">
        {services.map((service, index) => (
          <Reveal as="li" key={service.id} delay={index * 0.04}>
            <Link
              href={`/services/${service.slug}`}
              className="group/row block border-t border-border py-8 transition-colors hover:border-primary/50 sm:py-10"
            >
              <div className="grid gap-5 sm:grid-cols-12 sm:gap-8">
                <div className="flex items-baseline gap-4 sm:col-span-3 sm:flex-col sm:gap-3">
                  <span className="font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl leading-snug transition-colors group-hover/row:text-primary sm:text-2xl">
                    {pick(service.title, locale)}
                  </h3>
                </div>

                <div className="flex flex-col gap-3 sm:col-span-5">
                  <p className="text-sm font-medium text-foreground">
                    {pick(service.tagline, locale)}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {pick(service.description, locale)}
                  </p>
                </div>

                <ul className="flex flex-col gap-2 sm:col-span-4">
                  {pick(service.capabilities, locale).map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-px w-2.5 shrink-0 bg-primary"
                      />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>
      <div className="border-t border-border" />
    </Section>
  );
}
