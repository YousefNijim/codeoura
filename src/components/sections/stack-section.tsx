import { getLocale, getTranslations } from 'next-intl/server';

import { Animate } from '@/components/primitives/animate';
import { SectionHeading } from '@/components/primitives/section-heading';
import { techIconPaths } from '@/content/tech-icons';
import { techCategories, techStack } from '@/content/tech-stack';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

/**
 * The stack, shown by mark rather than by name alone.
 *
 * The marks render in currentColor and take the brand green on hover, so the
 * grid reads as one set. Left in each vendor's own colour it would be
 * twenty-two competing palettes on a page built around a single one.
 */
export async function StackSection() {
  const t = await getTranslations('stack');
  const locale = (await getLocale()) as Locale;

  return (
    <section id="stack" className="section-pad relative overflow-hidden">
      <div className="page-gutter">
        <div className="section-container">
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
          />

          <div className="mx-auto mt-12 flex max-w-[1240px] flex-col gap-10 lg:mt-16">
            {techCategories.map((category, index) => {
              const items = techStack.filter(
                (tech) => tech.category === category.id,
              );

              return (
                <Animate key={category.id} name="fadeInUp" seq={index}>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-sm font-medium text-ink-muted">
                      {pick(category.label, locale)}
                    </h3>

                    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                      {items.map((tech) => {
                        const path = techIconPaths[tech.name];

                        return (
                          <li
                            key={tech.name}
                            className="hover-lift group flex items-center gap-3 rounded-2xl border border-card-border bg-card p-4 transition-colors hover:border-accent/40"
                          >
                            {path ? (
                              <svg
                                viewBox="0 0 24 24"
                                aria-hidden
                                className="size-6 shrink-0 fill-ink-muted transition-colors group-hover:fill-accent"
                              >
                                <path d={path} />
                              </svg>
                            ) : (
                              <span
                                aria-hidden
                                className="size-6 shrink-0 rounded-full bg-accent-light"
                              />
                            )}
                            <span
                              dir="ltr"
                              className="truncate text-sm text-ink"
                            >
                              {tech.name}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
