import { Mail } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import { ContactForm } from './contact-form';
import { Reveal } from '@/components/primitives/reveal';
import { Section } from '@/components/primitives/section';
import { SectionHeading } from '@/components/primitives/section-heading';
import { company } from '@/content/company';

export async function ContactSection() {
  const t = await getTranslations('contact');

  return (
    <Section id="contact" surface>
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
          />

          <div className="flex flex-col gap-2 border-t border-border pt-6">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {t('direct')}
            </p>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex w-fit items-center gap-2 text-base font-medium transition-colors hover:text-primary"
            >
              <Mail aria-hidden className="size-4 text-primary" />
              {company.email}
            </a>
          </div>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
