import { getTranslations } from 'next-intl/server';

import { Animate } from '@/components/primitives/animate';
import { BrandButton } from '@/components/primitives/brand-button';
import { MarkLoop } from '@/components/primitives/mark-loop';
import { company } from '@/content/company';
import { whatsappLink } from '@/lib/whatsapp';

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
            <MarkLoop
              variant="solid"
              className="h-[86px] w-[160px] lg:h-[104px] lg:w-[190px]"
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
            <div className="flex flex-col items-center gap-4">
              {/* Opens the chat with the message already written, so the
                  visitor only has to press send. */}
              <BrandButton
                href={whatsappLink(t('whatsappMessage'))}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('action')}
              </BrandButton>

              <a
                href={`mailto:${company.email}`}
                dir="ltr"
                className="text-sm text-ink-muted underline-offset-8 transition-colors hover:text-accent hover:underline"
              >
                {company.email}
              </a>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
