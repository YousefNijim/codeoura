import { getTranslations } from 'next-intl/server';

import { Container } from '@/components/primitives/container';
import { Reveal } from '@/components/primitives/reveal';
import { company } from '@/content/company';
import { projects } from '@/content/projects';
import { Link } from '@/i18n/navigation';
import { asset } from '@/lib/asset';

/**
 * The opening spread.
 *
 * Composed as a masthead rather than a landing page: a standing line above a
 * rule, the statement occupying the middle, and the facts set as a ruled table
 * along the foot. Nothing is centred and nothing is boxed.
 */
export async function Hero() {
  const t = await getTranslations('hero');

  // Derived from the content layer, so the numbers can never drift from reality.
  const industries = new Set(projects.map((project) => project.category)).size;

  const facts = [
    { value: `${projects.length}`, label: t('stats.projects') },
    { value: `${industries}`, label: t('stats.domains') },
    { value: `${company.founded}`, label: t('stats.since') },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* The brand mark behind the copy, on the side opposite the text.
          Rendered as a mask rather than an <img> so it takes the theme's own
          metal in either mode instead of importing the logo's blue into a
          palette that has none. Low opacity: texture, not a second thing to
          read. On phones it drops to the bottom corner, clear of the copy. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 opacity-[0.07] dark:opacity-[0.085]
                   -end-16 bottom-4 h-[17rem] w-[13rem]
                   sm:bottom-auto sm:top-1/2 sm:-end-10 sm:h-[34rem] sm:w-[27rem]
                   sm:-translate-y-1/2 sm:opacity-[0.05] sm:dark:opacity-[0.06]
                   lg:end-[7%] lg:h-[38rem] lg:w-[30rem]"
        style={{
          backgroundColor: 'var(--primary)',
          maskImage: `url(${asset('/brand/mark-mask.png')})`,
          WebkitMaskImage: `url(${asset('/brand/mark-mask.png')})`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
        }}
      />

      <Container className="flex min-h-[92svh] flex-col justify-between pb-14 pt-32 sm:pb-16 sm:pt-36">
        {/* Standing head: the studio line and where it works from, on one
            baseline above a full-measure rule. */}
        <Reveal>
          <div className="flex items-baseline justify-between gap-6 border-b border-border pb-4">
            <p className="eyebrow">{t('badge')}</p>
            <p className="eyebrow hidden sm:block">{t('origin')}</p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-12 py-16 sm:py-20">
          <Reveal delay={0.05}>
            {/* Set to a measure, not to the container, so the lines break where
                the sentence wants to break. */}
            <h1 className="max-w-[16ch] text-[length:var(--text-display-lg)]">
              {t('titleLead')}{' '}
              <span className="text-primary">{t('titleAccent')}</span>
            </h1>
          </Reveal>

          {/* The standfirst is indented into the far half of the measure, the
              way an opening paragraph sits under a headline in print. */}
          <Reveal delay={0.1}>
            <div className="grid gap-8 sm:grid-cols-12">
              <div className="sm:col-span-7 sm:col-start-6">
                <p className="text-[1.0625rem] leading-[1.75] text-muted-foreground sm:text-lg">
                  {t('subtitle')}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
                  <Link
                    href="/#contact"
                    className="border-b border-primary pb-1 text-sm font-medium text-primary transition-colors hover:border-foreground hover:text-foreground"
                  >
                    {t('primaryCta')}
                  </Link>
                  <Link
                    href="/work"
                    className="border-b border-transparent pb-1 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                  >
                    {t('secondaryCta')}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Foot: the facts as a ruled table. A figure beside its label, rather
            than three oversized numbers in a row. */}
        <Reveal delay={0.15}>
          <dl className="grid grid-cols-1 border-t border-border sm:grid-cols-3">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline gap-3 border-b border-border py-3.5 sm:border-b-0 sm:border-e sm:pe-6 sm:last:border-e-0"
              >
                <dt className="order-2 text-sm text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="order-1 font-mono text-sm text-primary">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
