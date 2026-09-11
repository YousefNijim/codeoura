import { getLocale, getTranslations } from 'next-intl/server';

import { Reveal } from '@/components/primitives/reveal';
import { Section } from '@/components/primitives/section';
import { SectionHeading } from '@/components/primitives/section-heading';
import { principles, processSteps } from '@/content/company';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

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

      {/* The principles read as a numbered argument, one after another, rather
          than as four interchangeable tiles. */}
      <ul className="mt-16">
        {principles.map((principle, index) => (
          <Reveal as="li" key={principle.title.en} delay={index * 0.04}>
            <div className="grid gap-4 border-t border-border py-8 sm:grid-cols-12 sm:gap-8">
              <span className="font-mono text-xs text-primary sm:col-span-1 sm:pt-1.5">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl leading-snug sm:col-span-4">
                {pick(principle.title, locale)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-7">
                {pick(principle.description, locale)}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
      <div className="border-t border-border" />

      <div className="mt-28">
        <SectionHeading
          title={t('processTitle')}
          subtitle={t('processSubtitle')}
        />

        {/* Four stages on one horizontal rule: the sequence is the point, so
            they are read across, not down a column of cards. */}
        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step.title.en}
              className="flex flex-col gap-3 border-t border-border pt-5"
            >
              <span className="font-mono text-xs text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg leading-snug">
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
