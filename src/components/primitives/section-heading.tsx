import { Animate } from './animate';
import { cn } from '@/lib/utils';

/**
 * Section opening: eyebrow, heading, description.
 *
 * Centred by default, with the heading held to a narrower measure than the
 * block itself so the two never share a ragged edge.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'start';
  className?: string;
  children?: React.ReactNode;
}) {
  const centred = align === 'center';

  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        centred && 'mx-auto max-w-[866px] items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <Animate name="fadeInUp" seq={0} as="p">
          <span className="text-gradient-brand text-base font-medium lg:text-xl">
            {eyebrow}
          </span>
        </Animate>
      )}

      <Animate name="fadeInUp" seq={1} as="h2">
        <span className="block text-[26px] leading-[1.2] lg:text-[40px]">
          {title}
        </span>
      </Animate>

      {subtitle && (
        <Animate name="fadeInUp" seq={2} as="p">
          <span
            className={cn(
              'block text-sm leading-[1.6] text-ink-muted lg:text-base',
              centred && 'mx-auto max-w-[606px]',
            )}
          >
            {subtitle}
          </span>
        </Animate>
      )}

      {children}
    </div>
  );
}
