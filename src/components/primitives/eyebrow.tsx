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
      className={cn('eyebrow inline-flex items-center gap-3', className)}
    >
      <span aria-hidden className="h-px w-8 bg-linear-to-r from-primary to-transparent" />
      {children}
    </p>
  );
}
