import {
  Compass,
  Gauge,
  Repeat,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';

import { Panel } from '@/components/primitives/panel';
import { Reveal } from '@/components/primitives/reveal';
import { Section } from '@/components/primitives/section';
import { SectionHeading } from '@/components/primitives/section-heading';
import { principles, processSteps } from '@/content/company';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

const icons: Record<string, LucideIcon> = {
  Compass,
  Gauge,
  ShieldCheck,
  Repeat,
};

export async function AboutSection() {
  const t = await getTranslations('about');
  const locale = (await getLocale()) as Locale;

  return (
    <Section id="about">
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2">
        {principles.map((principle, index) => {
          const Icon = icons[principle.icon] ?? Compass;

          return (
            <Reveal as="li" key={principle.icon} delay={index * 0.05}>
              <Panel className="h-full">
                <div className="flex h-full flex-col gap-4 p-6 sm:p-7">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-accent/10 text-accent">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {pick(principle.title, locale)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {pick(principle.description, locale)}
                  </p>
                </div>
              </Panel>
            </Reveal>
          );
        })}
      </ul>

      <div className="mt-24">
        <SectionHeading
          title={t('processTitle')}
          subtitle={t('processSubtitle')}
        />

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title.en} className="flex flex-col gap-3 bg-card p-6">
              <span className="font-mono text-xs text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-base font-semibold tracking-tight">
                {pick(step.title, locale)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pick(step.description, locale)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
