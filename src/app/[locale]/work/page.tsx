import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { ProjectGrid } from '@/components/portfolio/project-grid';
import { Section } from '@/components/primitives/section';
import { SectionHeading } from '@/components/primitives/section-heading';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.work' });
  return { title: t('title'), description: t('description') };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('work');

  return (
    <Section className="pt-32 sm:pt-40" glow>
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        className="mb-12"
      />
      <ProjectGrid />
    </Section>
  );
}
