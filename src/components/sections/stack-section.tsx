import { getLocale, getTranslations } from 'next-intl/server';

import { Marquee } from '@/components/primitives/marquee';
import { Reveal } from '@/components/primitives/reveal';
import { Section } from '@/components/primitives/section';
import { SectionHeading } from '@/components/primitives/section-heading';
import { techCategories, techStack } from '@/content/tech-stack';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

export async function StackSection() {
  const t = await getTranslations('stack');
  const locale = (await getLocale()) as Locale;

  return (
    <Section id="stack" surface className="overflow-hidden">
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        align="center"
      />

      <Reveal className="mt-14 flex flex-col gap-10">
        {techCategories.map((category) => {
          const items = techStack.filter((tech) => tech.category === category.id);

          return (
            <div key={category.id} className="flex flex-col gap-3">
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {pick(category.label, locale)}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((tech) => (
                  <li
                    key={tech.name}
                    className="rounded-xl border border-border bg-card px-4 py-2.5 font-mono text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </Reveal>

      <div className="relative mt-16 -mx-5 sm:-mx-8">
        <Marquee duration="45s">
          {techStack.map((tech) => (
            <span
              key={`ticker-${tech.name}`}
              className="whitespace-nowrap rounded-full border border-border bg-background/60 px-5 py-2 font-mono text-sm text-muted-foreground"
            >
              {tech.name}
            </span>
          ))}
        </Marquee>
      </div>
    </Section>
  );
}
