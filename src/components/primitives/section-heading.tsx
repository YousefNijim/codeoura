import { cn } from '@/lib/utils';
import { Eyebrow } from './eyebrow';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'start',
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'start' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex max-w-[38rem] flex-col gap-5',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-[length:var(--text-display-sm)]">{title}</h2>
      {subtitle && (
        <p className="text-[1.0625rem] leading-[1.7] text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
