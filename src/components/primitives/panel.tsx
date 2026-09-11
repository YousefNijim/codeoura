import { cn } from '@/lib/utils';

/**
 * The surface used for every card on the site.
 *
 * A border, a background, and nothing else. The only hover treatment is the
 * hairline picking up the metal, which is a colour transition on the
 * compositor and costs nothing per frame.
 */
export function Panel({
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
        'group/card relative overflow-hidden rounded-lg border border-border bg-card',
        interactive &&
          'transition-colors duration-200 hover:border-primary/40 focus-within:border-primary/40',
        className,
      )}
    >
      {children}
    </div>
  );
}
