import { cn } from '@/lib/utils';

/**
 * A section opening, set on the twelve-column grid.
 *
 * The label sits in its own narrow column beside the heading rather than
 * stacked above it and centred, which is what gives the page a spine: every
 * section begins on the same two vertical lines.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  aside,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  /** Optional trailing element, aligned to the foot of the heading. */
  aside?: React.ReactNode;
}) {
  return (
    <div className={cn('border-t border-border pt-8', className)}>
      <div className="grid gap-6 sm:grid-cols-12 sm:gap-8">
        {eyebrow && (
          <p className="eyebrow sm:col-span-3 sm:pt-2">{eyebrow}</p>
        )}
        <div className={cn('flex flex-col gap-5', eyebrow ? 'sm:col-span-9' : 'sm:col-span-12')}>
          <h2 className="max-w-[20ch] text-[length:var(--text-display-sm)]">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-[46ch] text-[1.0625rem] leading-[1.75] text-muted-foreground">
              {subtitle}
            </p>
          )}
          {aside}
        </div>
      </div>
    </div>
  );
}
