import { getLocale, getTranslations } from 'next-intl/server';

import { Reveal } from '@/components/primitives/reveal';
import { Section } from '@/components/primitives/section';
import { SectionHeading } from '@/components/primitives/section-heading';
import { techCategories, techStack } from '@/content/tech-stack';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

/**
 * The stack, set as a ruled index: the category in one column, the names it
 * covers in the other. A list of technologies is reference material, so it is
 * typeset as reference material rather than as rows of pills.
 */
export async function StackSection() {
  const t = await getTranslations('stack');
  const locale = (await getLocale()) as Locale;

  return (
    <Section id="stack" surface>
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <dl className="mt-16">
        {techCategories.map((category, index) => {
          const items = techStack.filter((tech) => tech.category === category.id);

          return (
            <Reveal key={category.id} delay={index * 0.04}>
              <div className="grid gap-2 border-t border-border py-6 sm:grid-cols-12 sm:gap-8">
                <dt className="eyebrow sm:col-span-3 sm:pt-1">
                  {pick(category.label, locale)}
                </dt>
                <dd className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-foreground/85 sm:col-span-9">
                  {items.map((tech) => (
                    <span key={tech.name}>{tech.name}</span>
                  ))}
                </dd>
              </div>
            </Reveal>
          );
        })}
      </dl>
      <div className="border-t border-border" />
    </Section>
  );
}
