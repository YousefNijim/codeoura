import { setRequestLocale } from 'next-intl/server';

import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Hero } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services-section';
import { StackSection } from '@/components/sections/stack-section';
import { WorkSection } from '@/components/sections/work-section';
import { OrganizationJsonLd } from '@/components/seo/json-ld';

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
      <ServicesSection />
      <WorkSection />
      <StackSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
