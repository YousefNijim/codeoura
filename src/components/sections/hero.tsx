import { ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import { Container } from '@/components/primitives/container';
import { Reveal } from '@/components/primitives/reveal';
import { Button } from '@/components/ui/button';
import { projects } from '@/content/projects';
import { Link } from '@/i18n/navigation';

export async function Hero() {
  const t = await getTranslations('hero');

  // Derived from the content layer, so the numbers can never drift from reality.
  const industries = new Set(projects.map((project) => project.category)).size;

  const stats = [
    { value: `${projects.length}`, label: t('stats.projects') },
    { value: `${industries}`, label: t('stats.domains') },
    { value: '100%', label: t('stats.typed') },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-noise">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid" />
      <div
        aria-hidden
        className="absolute inset-x-0 -top-40 -z-10 h-[36rem] opacity-70"
        style={{
          background:
            'radial-gradient(ellipse 60% 100% at 50% 0%, var(--glow), transparent 70%)',
        }}
      />

      <Container className="flex min-h-[88svh] flex-col justify-center py-28 sm:py-36">
        <div className="flex max-w-3xl flex-col items-start gap-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/[0.03] px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span
                aria-hidden
                className="size-1.5 animate-pulse-glow rounded-full bg-accent"
              />
              {t('badge')}
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="text-[length:var(--text-display-md)] font-semibold leading-[1.05] tracking-[-0.04em]">
              {t('titleLead')}{' '}
              <span className="text-primary">{t('titleAccent')}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t('subtitle')}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="primary" size="lg">
                <Link href="/#contact">
                  {t('primaryCta')}
                  <ArrowRight aria-hidden className="rtl:-scale-x-100" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/work">{t('secondaryCta')}</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24} className="w-full">
            <dl className="mt-6 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                // flex-col-reverse puts the value above the label visually
                // while keeping <dt> before <dd> in the accessibility tree.
                <div key={stat.label} className="flex flex-col-reverse gap-1">
                  <dt className="text-xs leading-snug text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
