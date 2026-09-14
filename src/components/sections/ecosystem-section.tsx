import { getTranslations } from 'next-intl/server';

import { Animate } from '@/components/primitives/animate';
import { ProjectCardButton } from '@/components/portfolio/project-card-button';
import { SectionHeading } from '@/components/primitives/section-heading';
import { SystemMark } from '@/components/primitives/system-mark';
import { projects } from '@/content/projects';

/** Every system in one row, as a directory of ways in. */
export async function EcosystemSection() {
  const t = await getTranslations('ecosystem');

  return (
    <section id="ecosystem" className="section-pad relative overflow-hidden">
      <div className="page-gutter relative z-10">
        <div className="section-container mx-auto max-w-[1240px]">
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
          />

          <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-16 lg:grid-cols-5">
            {projects.map((project, index) => (
              <Animate
                as="li"
                key={project.slug}
                name="fadeInUp"
                seq={index}
              >
                <ProjectCardButton
                  project={project}
                  className="hover-lift hover-glow flex h-full min-h-[124px] w-full flex-col items-center justify-center gap-2 rounded-2xl border border-card-border bg-card p-4 text-center transition-colors hover:border-accent/40"
                >
                  <SystemMark project={project} size={44} />
                  <span className="text-sm text-ink" dir="ltr">
                    {project.name.en}
                  </span>
                  <span className="text-[11px] text-ink-muted">
                    {t(`category.${project.category}`)}
                  </span>
                </ProjectCardButton>
              </Animate>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
