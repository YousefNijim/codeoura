import { getLocale, getTranslations } from 'next-intl/server';

import { Animate } from '@/components/primitives/animate';
import { PathRail } from '@/components/primitives/path-rail';
import { SectionHeading } from '@/components/primitives/section-heading';
import { SystemMark } from '@/components/primitives/system-mark';
import { pathTracks } from '@/content/paths';
import { getProject } from '@/content/projects';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

/**
 * Choose your route.
 *
 * The catalogue shows what exists; this shows which of it is for you. Each
 * track holds one audience's sequence, and the introduction column stays in
 * place while the steps scroll past it, so the reader never loses which
 * question the answers belong to.
 */
export async function PathSection() {
  const t = await getTranslations('path');
  const tw = await getTranslations('work');
  const locale = (await getLocale()) as Locale;

  return (
    <section id="path" className="section-pad relative max-lg:overflow-x-hidden">
      <div className="page-gutter relative z-10">
        <div className="section-container">
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
          />

          <div className="mx-auto mt-14 flex max-w-[1320px] flex-col gap-16 lg:mt-20 lg:gap-24">
            {pathTracks.map((track, trackIndex) => {
              const steps = track.steps.map((step) => ({
                step,
                project: getProject(step.projectSlug),
              }));

              const intro = (
                <div className="flex flex-col gap-4">
                  <span className="inline-flex size-[52px] items-center justify-center rounded-full border border-card-border bg-accent-light font-mono text-sm text-accent">
                    {String(trackIndex + 1).padStart(2, '0')}
                  </span>
                  <p className="text-gradient-brand text-sm font-medium lg:text-base">
                    {pick(track.persona, locale)}
                  </p>
                  <h3 className="text-2xl font-bold leading-[1.2] lg:text-[40px]">
                    {pick(track.title, locale)}
                  </h3>
                  <p className="text-sm leading-[1.6] text-ink-muted">
                    {pick(track.intro, locale)}
                  </p>
                </div>
              );

              const stepCards = steps.map(({ step, project }, index) => (
                <div key={step.projectSlug + index} className="path-step-card">
                  <Animate name="fadeInUp" seq={index}>
                    <div className="flex flex-col gap-4 text-start">
                      <p className="text-gradient-brand text-sm font-medium">
                        {pick(step.eyebrow, locale)}
                      </p>
                      <div className="flex items-center gap-3">
                        {project && <SystemMark project={project} size={40} />}
                        <h4 className="text-xl text-ink" dir="ltr">
                          {project ? project.name.en : step.projectSlug}
                        </h4>
                      </div>
                      <p className="text-sm leading-[1.5] text-ink-muted">
                        {pick(step.description, locale)}
                      </p>
                      {project?.demo && (
                        <a
                          href={project.demo.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-fit text-sm font-medium text-accent underline-offset-8 hover:underline"
                        >
                          {tw('demoOpen')}
                        </a>
                      )}
                    </div>
                  </Animate>
                </div>
              ));

              return (
                <div key={track.id} className="path-track">
                  {/* Phones get the same content as one plain column: a rail
                      with nothing beside it is decoration, not navigation. */}
                  <div className="flex flex-col gap-8 lg:hidden">
                    {intro}
                    <div className="flex flex-col gap-8 border-s border-card-border ps-6">
                      {stepCards}
                    </div>
                  </div>

                  <div className="path-track-grid hidden lg:grid">
                    <div className="lg:sticky lg:top-[120px] lg:self-start">
                      {intro}
                    </div>

                    <PathRail count={steps.length} />

                    <div className="flex flex-col gap-[67px]">{stepCards}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
