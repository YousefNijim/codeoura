import { getLocale, getTranslations } from 'next-intl/server';

import { Animate } from '@/components/primitives/animate';
import { BrandButton } from '@/components/primitives/brand-button';
import { projects } from '@/content/projects';
import type { Locale } from '@/i18n/routing';
import { asset } from '@/lib/asset';
import { pick } from '@/lib/localized';

export async function Hero() {
  const t = await getTranslations('hero');
  const locale = (await getLocale()) as Locale;

  return (
    <section
      id="hero"
      className="relative flex min-h-[86svh] flex-col overflow-hidden pt-[120px] lg:min-h-[92svh] lg:pt-32"
    >
      {/* The brand mark, held behind the copy as texture. Masked rather than
          placed as an image, so it takes the brand colour in either theme. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -end-20 top-1/2 -z-10 h-[26rem] w-[20rem] -translate-y-1/2 opacity-[0.06] lg:end-[4%] lg:h-[40rem] lg:w-[31rem]"
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

          {/* Kept LTR so the ornament, button and ornament keep their order in
              both directions — the row is a composition, not a sentence. */}
          <Animate name="zoomIn" seq={3}>
            <div dir="ltr" className="flex items-center gap-3 lg:gap-5">
              <span aria-hidden className="hidden h-px w-16 bg-gradient-to-r from-transparent to-brand-from sm:block lg:w-24" />
              <BrandButton href="#cta">{t('primaryCta')}</BrandButton>
              <span aria-hidden className="hidden h-px w-16 bg-gradient-to-l from-transparent to-brand-to sm:block lg:w-24" />
            </div>
          </Animate>
        </div>
      </div>

      {/* Product wordmarks, looping. Every name here is a system that is live
          and has an open demonstration, so the strip is evidence, not decor. */}
      <div className="page-gutter pb-10 lg:pb-14">
        <div className="section-container marquee-viewport" style={{ ['--duration' as string]: '38s' }}>
          <div className="marquee-inner flex w-max items-center">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
                {projects.map((project) => (
                  <div key={`${copy}-${project.slug}`} className="flex items-center">
                    <span className="whitespace-nowrap px-5 text-sm text-ink-muted lg:px-7 lg:text-base">
                      {pick(project.name, locale)}
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
