import { ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import { FeaturedProjects } from '@/components/portfolio/featured-projects';
import { Reveal } from '@/components/primitives/reveal';
import { Section } from '@/components/primitives/section';
import { SectionHeading } from '@/components/primitives/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export async function WorkSection() {
  const t = await getTranslations('work');

  return (
    <Section id="work" glow>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />
        <Button asChild variant="outline" className="w-fit shrink-0">
          <Link href="/work">
            {t('viewAll')}
            <ArrowRight aria-hidden className="rtl:-scale-x-100" />
          </Link>
        </Button>
      </div>

      <Reveal className="mt-14">
        <FeaturedProjects />
      </Reveal>
    </Section>
  );
}
