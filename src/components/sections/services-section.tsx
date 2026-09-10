import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  Globe,
  Layers,
  Server,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';

import { GlowCard } from '@/components/primitives/glow-card';
import { Reveal } from '@/components/primitives/reveal';
import { Section } from '@/components/primitives/section';
import { SectionHeading } from '@/components/primitives/section-heading';
import { services } from '@/content/services';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

const icons: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Server,
  Layers,
  BrainCircuit,
};

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
          const Icon = icons[service.icon] ?? Globe;
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
              <GlowCard className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="flex h-full flex-col gap-5 p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className="size-5 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 rtl:-scale-x-100"
                    />
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
                        <Check
                          aria-hidden
                          className="mt-0.5 size-4 shrink-0 text-primary"
                        />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </Link>
              </GlowCard>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
