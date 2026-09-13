import { getLocale, getTranslations } from 'next-intl/server';

import { SectionHeading } from '@/components/primitives/section-heading';
import { outcomeRows, type Outcome } from '@/content/outcomes';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

/**
 * Two rows travelling in opposite directions.
 *
 * The content is outcomes drawn from the case studies and attributed to the
 * system that produced them, not testimonials: we hold no quotes we could
 * attribute to a named client, and inventing them would put fabricated
 * evidence on the page a buyer decides from.
 */
function OutcomeCard({ outcome, locale }: { outcome: Outcome; locale: Locale }) {
  return (
    <article className="hover-lift mx-[3px] w-[300px] shrink-0 rounded-2xl border border-card-border bg-card-glass p-5 backdrop-blur-[4px] sm:w-[380px]">
      <div className="flex flex-col items-start gap-4">
        <p className="text-sm leading-[1.6] text-ink-secondary">
          {pick(outcome.quote, locale)}
        </p>
        <span aria-hidden className="rule-brand max-w-[280px]" />
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium text-ink">
            {pick(outcome.source, locale)}
          </span>
          <span className="text-xs text-ink-muted">
            {pick(outcome.role, locale)}
          </span>
        </div>
      </div>
    </article>
  );
}

function Row({
  items,
  locale,
  reverse,
  duration,
}: {
  items: Outcome[];
  locale: Locale;
  reverse?: boolean;
  duration: string;
}) {
  return (
    <div
      className="marquee-viewport"
      style={{ ['--duration' as string]: duration }}
    >
      <div
        className={`marquee-inner flex w-max flex-nowrap items-stretch ${
          reverse ? 'marquee-inner--reverse' : ''
        }`}
      >
        {/* Exactly two copies: the loop translates by half its width, so any
            other number produces a visible jump at the seam. */}
        {[0, 1].map((copy) => (
          <div key={copy} className="flex flex-nowrap" aria-hidden={copy === 1}>
            {items.map((outcome) => (
              <OutcomeCard
                key={`${copy}-${outcome.id}`}
                outcome={outcome}
                locale={locale}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function OutcomesSection() {
  const t = await getTranslations('outcomes');
  const locale = (await getLocale()) as Locale;

  return (
    <section id="outcomes" className="section-pad relative overflow-hidden">
      <div className="page-gutter relative z-10 mb-8 lg:mb-[60px]">
        <div className="section-container">
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </div>
      </div>

      <div className="page-gutter relative z-10 flex flex-col gap-3">
        <div className="section-container">
          <Row items={outcomeRows.first} locale={locale} duration="64s" />
        </div>
        <div className="section-container lg:ps-[11%]">
          <Row
            items={outcomeRows.second}
            locale={locale}
            reverse
            duration="72s"
          />
        </div>
      </div>
    </section>
  );
}
