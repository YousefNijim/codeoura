import { cn } from '@/lib/utils';

/**
 * Surface used for every card on the site.
 *
 * The hover treatment is pure CSS — a brightening hairline and a soft top
 * highlight — so it stays on the compositor and costs nothing per frame.
 */
export function GlowCard({
  className,
  children,
  interactive = true,
}: {
  className?: string;
  children: React.ReactNode;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        'group/card relative overflow-hidden rounded-2xl border border-border bg-card',
        interactive &&
          'transition-colors duration-300 hover:border-primary/40 focus-within:border-primary/40',
        className,
      )}
    >
      {interactive && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 h-40 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100 group-focus-within/card:opacity-100"
          style={{
            background:
              'radial-gradient(ellipse 60% 100% at 50% 100%, var(--glow), transparent 70%)',
          }}
        />
      )}
      {children}
    </div>
  );
}
