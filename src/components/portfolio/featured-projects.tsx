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
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} onSelect={setSelected} />
          </li>
        ))}
      </ul>
      {selected && (
        <ProjectDialog project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
