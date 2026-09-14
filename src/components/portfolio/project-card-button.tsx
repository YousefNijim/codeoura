'use client';

import dynamic from 'next/dynamic';
import { useState, type ReactNode } from 'react';

import type { Project } from '@/content/types';

const ProjectDialog = dynamic(() =>
  import('./project-dialog').then((mod) => mod.ProjectDialog),
);

/**
 * A project card that opens the project's own detail dialog.
 *
 * The cards on the home page used to link straight to the demonstration, which
 * sent a visitor off the site before they had read what the system is. The
 * dialog carries the summary, the platforms, the year and the full stack, and
 * still offers both the demonstration and the case study — so the way out is
 * not lost, it is just no longer the only thing a click can do.
 *
 * Each card keeps its own state rather than the section keeping one for all of
 * them: the sections using this are server components, and this way the
 * translated markup stays on the server where it already was. The dialog is a
 * separate chunk that is not fetched until a card is actually opened.
 */
export function ProjectCardButton({
  project,
  className,
  children,
}: {
  project: Project;
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && (
        <ProjectDialog project={project} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
