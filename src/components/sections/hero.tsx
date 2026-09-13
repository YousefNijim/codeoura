import { getTranslations } from 'next-intl/server';

import { Animate } from '@/components/primitives/animate';
import { BrandButton } from '@/components/primitives/brand-button';
import { SystemMark } from '@/components/primitives/system-mark';
import { projects } from '@/content/projects';
import { asset } from '@/lib/asset';

export async function Hero() {
  const t = await getTranslations('hero');

  return (
    <section
      id="hero"
      className="relative flex min-h-[86svh] flex-col overflow-hidden pt-[120px] lg:min-h-[92svh] lg:pt-32"
    >
      {/* ── Ground ───────────────────────────────────────────────────────
          A wash of brand light rising from the foot of the section, two
          vertical guides the copy sits between, and the arc that closes it.
          All of it is behind the text and none of it animates. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 50% 105%, var(--accent-light), transparent 70%)',
          }}
        />

        <span className="absolute inset-y-0 start-[14%] w-px bg-gradient-to-b from-transparent via-accent/25 to-transparent lg:start-[18%]" />
        <span className="absolute inset-y-0 end-[14%] w-px bg-gradient-to-b from-transparent via-accent/25 to-transparent lg:end-[18%]" />

        {/* The arc is an oversized circle with only its top edge in view, so
            the curve stays shallow at every width — a fixed radius would
            steepen into a dome on a phone. */}
        <div className="absolute inset-x-[-30%] bottom-[-102%] h-[130%] rounded-[100%] border-t-2 border-accent/35" />
        <div className="absolute inset-x-[-48%] bottom-[-110%] h-[130%] rounded-[100%] border-t border-accent/15" />

        <div
          className="absolute inset-x-0 top-1/2 mx-auto h-[18rem] w-[30rem] max-w-[92vw] -translate-y-1/2 opacity-[0.05] lg:h-[26rem] lg:w-[46rem]"
          style={{
            backgroundColor: 'var(--accent)',
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
      </div>

      <div className="page-gutter flex flex-1 flex-col justify-center">
        <div className="section-container flex flex-col items-center gap-6 py-16 text-center lg:gap-8">
          <Animate name="fadeInDown" seq={0}>
            <span className="inline-flex h-[22px] items-center rounded-[32px] border-b border-brand-from bg-accent-light px-3 text-[10px] backdrop-blur-[5.5px] lg:h-8 lg:px-4 lg:text-sm">
              <span className="text-gradient-brand font-medium">
                {t('badge')}
              </span>
            </span>
          </Animate>

          <Animate name="fadeInUp" seq={1} as="h1">
            <span className="block max-w-[20ch] text-[32px] leading-[1.15] lg:text-[64px] lg:leading-[1.1]">
              {t('titleLead')}{' '}
              <span className="text-gradient-brand">{t('titleAccent')}</span>
            </span>
          </Animate>

          <Animate name="fadeInUp" seq={2} as="p">
            <span className="mx-auto block max-w-[606px] text-sm leading-[1.6] text-ink-muted lg:text-base">
              {t('subtitle')}
            </span>
          </Animate>

          {/* Kept LTR so the rule, button and rule hold their order in both
              directions — the row is a composition, not a sentence. */}
          <Animate name="zoomIn" seq={3}>
            <div dir="ltr" className="flex items-center gap-3 lg:gap-4">
              <span aria-hidden className="hidden items-center sm:flex">
                <span className="h-px w-14 bg-gradient-to-r from-transparent to-accent/50 lg:w-24" />
                <span className="size-2 rounded-full bg-accent/50" />
              </span>

              <BrandButton href="#products">{t('primaryCta')}</BrandButton>

              <span aria-hidden className="hidden items-center sm:flex">
                <span className="size-2 rounded-full bg-accent/50" />
                <span className="h-px w-14 bg-gradient-to-l from-transparent to-accent/50 lg:w-24" />
              </span>
            </div>
          </Animate>
        </div>
      </div>

      {/* Every mark here belongs to a system that is live and open to try, so
          the strip is evidence rather than decoration. */}
      <div className="page-gutter pb-10 lg:pb-14">
        <div
          className="section-container marquee-viewport"
          style={{ ['--duration' as string]: '44s' }}
        >
          <div className="marquee-inner flex w-max items-center">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex items-center"
                aria-hidden={copy === 1}
              >
                {projects.map((project) => (
                  <div
                    key={`${copy}-${project.slug}`}
                    className="flex items-center"
                  >
                    <span className="flex items-center gap-2.5 px-5 lg:px-7">
                      <SystemMark project={project} size={28} />
                      <span
                        dir="ltr"
                        className="whitespace-nowrap text-sm font-medium text-ink-muted lg:text-base"
                      >
                        {project.name.en}
                      </span>
                    </span>
                    <span aria-hidden className="h-6 w-px bg-stroke" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
