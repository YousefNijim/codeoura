import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';

import { Animate, type AnimName } from '@/components/primitives/animate';
import { ProjectCardButton } from '@/components/portfolio/project-card-button';
import { SectionHeading } from '@/components/primitives/section-heading';
import { SystemMark } from '@/components/primitives/system-mark';
import { projects } from '@/content/projects';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { asset } from '@/lib/asset';
import { pick } from '@/lib/localized';

/**
 * Placement for the grid.
 *
 * Six columns with every card spanning two gives three to a row, and lets a
 * trailing row be centred — which three equal columns cannot do. A short last
 * row reads as a mistake; a centred one reads as the end of a list.
 *
 * Derived from the count rather than written out, so adding a system to the
 * content layer never leaves one unplaced.
 */
function trailingOffset(index: number, total: number): string {
  const remainder = total % 3;
  if (remainder === 0) return '';

  const firstOfLastRow = total - remainder;
  if (index < firstOfLastRow) return '';

  // One left over sits in the middle; two sit either side of it.
  if (remainder === 1) return index === firstOfLastRow ? 'lg:col-start-3' : '';
  return index === firstOfLastRow ? 'lg:col-start-2' : '';
}

/** One entrance per card, cycled, so the grid never arrives as one block. */
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
            title={t('title', { count: projects.length })}
            subtitle={t('subtitle')}
          />

          <ul className="mx-auto mt-12 grid max-w-[1240px] grid-cols-1 items-stretch gap-[26px] lg:mt-16 lg:grid-cols-6">
            {projects.map((project, index) => {
              // English only: these are product names, not translated words.
              const name = project.name.en;

              return (
                <Animate
                  as="li"
                  key={project.slug}
                  name={entrances[index % entrances.length]}
                  seq={index}
                  className={`h-full lg:col-span-2 ${trailingOffset(index, projects.length)}`}
                >
                  {/* The whole card opens the system's detail. It used to be a
                      link to the demonstration, which sent a visitor off the
                      site before they had read what the system is; the dialog
                      still offers the demonstration and the case study. */}
                  <ProjectCardButton
                    project={project}
                    className="product-card hover-lift group relative flex h-full w-full flex-col gap-3 overflow-hidden rounded-2xl border border-card-border bg-card p-[23px] text-start backdrop-blur-[4px] hover:border-accent/40"
                  >
                    {/* The artwork is an image element rather than a CSS
                        background: a background is fetched at its full size
                        whatever the card measures, so one phone screenshot at
                        its capture resolution would cost the page more than
                        everything else on it put together. */}
                    {project.cover.image && (
                      <Image
                        src={asset(project.cover.image)}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="product-card-art absolute inset-0 z-0 object-cover object-top"
                      />
                    )}

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
                        {project.url && (
                          <span className="h-6 rounded-full border border-accent/40 px-3 text-[10px] leading-6 text-accent">
                            {tw('visitSite')}
                          </span>
                        )}
                      </div>
                    </div>
                  </ProjectCardButton>
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
