import { cn } from '@/lib/utils';
import { Container } from './container';

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Adds a single static light source at the top of the section. */
  glow?: boolean;
  /** Fills the section with the raised surface colour. */
  surface?: boolean;
  children: React.ReactNode;
}

export function Section({
  id,
  className,
  containerClassName,
  glow = false,
  surface = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative isolate scroll-mt-24 py-20 sm:py-28 lg:py-36',
        surface && 'bg-surface',
        glow && 'glow-top',
        className,
      )}
    >
      {surface && (
        <>
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
          />
        </>
      )}
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
