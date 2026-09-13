import { setRequestLocale } from 'next-intl/server';

import { AboutSection } from '@/components/sections/about-section';
import { CtaSection } from '@/components/sections/cta-section';
import { EcosystemSection } from '@/components/sections/ecosystem-section';
import { Hero } from '@/components/sections/hero';
import { OutcomesSection } from '@/components/sections/outcomes-section';
import { PathSection } from '@/components/sections/path-section';
import { ProductsSection } from '@/components/sections/products-section';
import { OrganizationJsonLd } from '@/components/seo/json-ld';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <OrganizationJsonLd />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <PathSection />
      <EcosystemSection />
      <OutcomesSection />
      <CtaSection />
    </>
  );
}
