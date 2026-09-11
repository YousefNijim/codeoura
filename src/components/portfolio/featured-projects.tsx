'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

import { ProjectCard } from './project-card';
import { featuredProjects } from '@/content/projects';
import type { Project } from '@/content/types';

// Radix Dialog is fetched only once a visitor actually opens a project, which
// is why the component is rendered conditionally rather than with a null prop.
const ProjectDialog = dynamic(() =>
  import('./project-dialog').then((mod) => mod.ProjectDialog),
);

/** Homepage strip: featured projects only, quick-look dialog, no filters. */
export function FeaturedProjects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      {/* The lead project runs the full measure with its image beside the
          text; the rest pair off beneath it. An even grid of identical tiles
          says every project weighs the same, which is never true. */}
      <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <li key={project.slug} className={index === 0 ? 'sm:col-span-2' : undefined}>
            <ProjectCard
              project={project}
              onSelect={setSelected}
              lead={index === 0}
            />
          </li>
        ))}
      </ul>
      {selected && (
        <ProjectDialog project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
