import { getLocale, getTranslations } from 'next-intl/server';

import { Animate, type AnimName } from '@/components/primitives/animate';
import { SectionHeading } from '@/components/primitives/section-heading';
import { SystemMark } from '@/components/primitives/system-mark';
import { projects } from '@/content/projects';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { asset } from '@/lib/asset';
import { pick } from '@/lib/localized';

/**
 * Bento placement for the seven systems.
 *
 * Six fill two rows of three; the seventh sits alone in the middle of the
 * third. A short final row reads as a mistake — a centred one reads as the
 * end of a list.
 */
const layout = [
  'lg:col-start-1 lg:row-start-1',
  'lg:col-start-2 lg:row-start-1',
  'lg:col-start-3 lg:row-start-1',
  'lg:col-start-1 lg:row-start-2',
  'lg:col-start-2 lg:row-start-2',
  'lg:col-start-3 lg:row-start-2',
  'lg:col-start-2 lg:row-start-3',
];

/** One entrance per card, so the grid does not arrive as a single block. */
const entrances: AnimName[] = [
  'scaleIn',
  'fadeInUp',
  'slideInUp',
  'rotateIn',
  'zoomIn',
  'flipIn',
  'fadeInScale',
];

export async function ProductsSection() {
  const t = await getTranslations('products');
  const tw = await getTranslations('work');
  const locale = (await getLocale()) as Locale;

  return (
    <section id="products" className="section-pad relative overflow-hidden">
      <div className="page-gutter relative z-[1]">
        <div className="section-container">
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
          />

          <ul className="mx-auto mt-12 grid max-w-[1240px] grid-cols-1 items-stretch gap-[26px] lg:mt-16 lg:grid-cols-3 lg:grid-rows-3">
            {projects.map((project, index) => {
              // English only: these are product names, not translated words.
              const name = project.name.en;
              const cover = project.cover.image
                ? `url('${asset(project.cover.image)}')`
                : 'none';

              return (
                <Animate
                  as="li"
                  key={project.slug}
                  name={entrances[index] ?? 'fadeInUp'}
                  seq={index}
                  className={`h-full ${layout[index] ?? ''}`}
                >
                  {/* The whole card is one link: there is nothing on it a
                      visitor would want that is not the demonstration. */}
                  <a
                    href={project.demo?.href ?? '#work'}
                    target={project.demo ? '_blank' : undefined}
                    rel={project.demo ? 'noopener noreferrer' : undefined}
                    className="product-card hover-lift group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-card-border bg-card p-[23px] text-start backdrop-blur-[4px] hover:border-accent/40"
                    style={{
                      ['--card-bg-light' as string]: cover,
                      ['--card-bg-dark' as string]: cover,
                    }}
                  >
                    <SystemMark project={project} className="relative z-10 self-start" />

                    <div className="relative z-10 mt-auto grid gap-3">
                      <h3 className="text-xl text-ink" dir="ltr">{name}</h3>
                      <p className="text-sm leading-[1.4] text-ink-secondary">
                        {pick(project.tagline, locale)}
                      </p>
                      <div className="flex flex-wrap items-start gap-2">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="h-6 rounded-full bg-accent-light px-3 font-mono text-[10px] leading-6 text-accent"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.demo && (
                          <span className="h-6 rounded-full border border-accent/40 px-3 text-[10px] leading-6 text-accent">
                            {tw('demoBadge')}
                          </span>
                        )}
                      </div>
                    </div>
                  </a>
                </Animate>
              );
            })}
          </ul>

          <Animate name="fadeInUp" seq={0} className="mt-12 flex justify-center">
            <Link
              href="/work"
              className="text-sm font-medium text-accent underline-offset-8 hover:underline"
            >
              {t('readCases')}
            </Link>
          </Animate>
        </div>
      </div>
    </section>
  );
}
