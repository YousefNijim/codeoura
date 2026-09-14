'use client';

import { ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { BrandButton } from './brand-button';
import { cn } from '@/lib/utils';

/**
 * The way into the product, and a copy of it that docks to the corner.
 *
 * The button in the opening block is the one a visitor meets on entry. A case
 * study runs long — screens, then challenge, solution and outcome — so by the
 * time someone has read enough to want the product, the button is far above
 * them. Once it scrolls away the same action docks to the corner and stays
 * within reach.
 *
 * Only ever one of the two is on screen, so the rule BrandButton sets for
 * itself — the single filled button — still holds. The docked one is the
 * smaller size: it is a reminder, not the thing being offered.
 */
export function ProjectCta({
  href,
  label,
  surface,
}: {
  href: string;
  label: string;
  /** What the visitor actually opens, where the system says so. */
  surface?: string;
}) {
  const anchor = useRef<HTMLDivElement>(null);
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    const el = anchor.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setDocked(!entry.isIntersecting),
      // The header is fixed over the top of the page; without this the dock
      // would appear while the real button is still visible underneath it.
      { rootMargin: '-96px 0px 0px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const action = (
    <>
      {label}
      <ExternalLink aria-hidden className="size-[18px]" />
    </>
  );

  return (
    <>
      <div ref={anchor} className="mt-2 flex flex-wrap items-center gap-4">
        <BrandButton href={href} target="_blank" rel="noopener noreferrer">
          {action}
        </BrandButton>

        {surface && (
          <span className="text-sm text-muted-foreground">{surface}</span>
        )}
      </div>

      <div
        className={cn(
          'cta-dock page-gutter pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-end',
          docked ? 'cta-dock--in' : 'cta-dock--out',
        )}
        aria-hidden={!docked}
      >
        <BrandButton
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          className="pointer-events-auto"
          tabIndex={docked ? undefined : -1}
        >
          {action}
        </BrandButton>
      </div>
    </>
  );
}
