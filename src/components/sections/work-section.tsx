import { getTranslations } from 'next-intl/server';

import { FeaturedProjects } from '@/components/portfolio/featured-projects';
import { Reveal } from '@/components/primitives/reveal';
import { Section } from '@/components/primitives/section';
import { SectionHeading } from '@/components/primitives/section-heading';
import { Link } from '@/i18n/navigation';

export async function WorkSection() {
  const t = await getTranslations('work');

  return (
    <Section id="work">
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        aside={
          <Link
            href="/work"
            className="w-fit border-b border-primary pb-1 text-sm font-medium text-primary transition-colors hover:border-foreground hover:text-foreground"
          >
            {t('viewAll')}
          </Link>
        }
      />

      <Reveal className="mt-16">
        <FeaturedProjects />
      </Reveal>
    </Section>
  );
}
