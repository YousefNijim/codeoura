import { cn } from '@/lib/utils';

/**
 * Seamless infinite ticker. The track is duplicated and translated by exactly
 * -50%, so the seam lands on an identical frame. Direction flips under RTL via
 * the `--marquee-dir` token set in globals.css.
 */
export function Marquee({
  children,
  duration = '40s',
  className,
}: {
  children: React.ReactNode;
  duration?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'group relative flex overflow-hidden',
        '[mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]',
        className,
      )}
    >
      {[0, 1].map((index) => (
        <div
          key={index}
          aria-hidden={index === 1}
          className="flex shrink-0 animate-marquee items-center gap-3 pe-3 group-hover:[animation-play-state:paused]"
          style={{ '--marquee-duration': duration } as React.CSSProperties}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
