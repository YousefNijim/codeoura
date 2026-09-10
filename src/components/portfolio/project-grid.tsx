'use client';

import { motion } from 'motion/react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';

import { ProjectCard } from './project-card';
import { ProjectFilters, type FilterValue } from './project-filters';
import { projects } from '@/content/projects';
import type { Project } from '@/content/types';
import { easeOutExpo } from '@/lib/motion';

const ProjectDialog = dynamic(() =>
  import('./project-dialog').then((mod) => mod.ProjectDialog),
);

export function ProjectGrid() {
  const t = useTranslations('work');
  const [filter, setFilter] = useState<FilterValue>('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const counts = useMemo(() => {
    const result: Record<string, number> = { all: projects.length };
    for (const project of projects) {
      result[project.category] = (result[project.category] ?? 0) + 1;
    }
    return result;
  }, []);

  const visible = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <>
      <ProjectFilters active={filter} onChange={setFilter} counts={counts} />

      {visible.length === 0 ? (
        <p className="mt-12 text-sm text-muted-foreground">{t('empty')}</p>
      ) : (
        // Keying on the filter remounts the list so each card replays its
        // entrance. Deliberately no exit animation: the visible set must never
        // depend on an animation completing, or a throttled tab can strand
        // cards at zero opacity.
        <ul
          key={filter}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((project, index) => (
            <motion.li
              key={project.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                ease: easeOutExpo,
                delay: Math.min(index * 0.04, 0.24),
              }}
            >
              <ProjectCard project={project} onSelect={setSelected} />
            </motion.li>
          ))}
        </ul>
      )}

      {selected && (
        <ProjectDialog project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
