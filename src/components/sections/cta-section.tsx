import { getTranslations } from 'next-intl/server';

import { Animate } from '@/components/primitives/animate';
import { BrandButton } from '@/components/primitives/brand-button';
import { company } from '@/content/company';
import { asset } from '@/lib/asset';

export async function CtaSection() {
  const t = await getTranslations('cta');

  return (
    <section
      id="cta"
      className="relative overflow-hidden py-[30px] lg:min-h-[534px] lg:py-0"
    >
      {/* One light source, behind everything, pointing at the button. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 52% 60% at 50% 50%, var(--accent-light), transparent 72%)',
          }}
        />
      </div>

      <div className="page-gutter relative z-10 flex items-center lg:min-h-[534px]">
        <div className="section-container flex w-full flex-col items-center justify-center gap-7 py-12 text-center">
          <Animate name="zoomIn" seq={0}>
            <span
              aria-hidden
              className="block size-[74px]"
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
          </Animate>

          <Animate name="fadeInUp" seq={1} as="h2">
            <span className="mx-auto block max-w-[506px] text-[26px] leading-[1.2] lg:text-[40px]">
              {t('title')}
            </span>
          </Animate>

          <Animate name="fadeInUp" seq={2} as="p">
            <span className="mx-auto block max-w-[606px] text-sm text-ink-muted lg:text-base">
              {t('subtitle')}
            </span>
          </Animate>

          <Animate name="fadeInUp" seq={3}>
            <BrandButton href={`mailto:${company.email}`}>
              {t('action')}
            </BrandButton>
          </Animate>
        </div>
      </div>
    </section>
  );
}
