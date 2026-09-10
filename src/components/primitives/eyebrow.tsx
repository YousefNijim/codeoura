import { cn } from '@/lib/utils';

/** Small labelled marker that sits above a section heading. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground',
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-linear-to-r from-primary to-transparent" />
      {children}
    </p>
  );
}
