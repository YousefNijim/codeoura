import { asset } from '@/lib/asset';
import { cn } from '@/lib/utils';

/**
 * The animated mark.
 *
 * The source is the logo on a white card, so it cannot simply be laid over a
 * dark page. Each theme keys the ground out with a blend rather than a second
 * file:
 *
 *   light  multiply — white multiplies away against the white page and only
 *          the green survives.
 *   dark   the frame is inverted first, which turns the white ground black
 *          and the mark light, then `screen` drops black to nothing. The hue
 *          is rebuilt with sepia and a rotation so what is left is the brand
 *          green rather than the inverse of it.
 *
 * Two strengths: `background` sits behind copy and must never compete with
 * it; `solid` is the mark itself, shown at full strength.
 *
 * It is decoration, so it never delays the page: metadata only, no audio
 * track, and it is replaced by the still mark for anyone who asks for reduced
 * motion.
 */
export function MarkLoop({
  className,
  variant = 'background',
}: {
  className?: string;
  variant?: 'background' | 'solid';
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'mark-loop pointer-events-none',
        variant === 'solid' && 'mark-loop--solid',
        className,
      )}
    >
      <video
        className="size-full object-contain"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disableRemotePlayback
      >
        <source src={asset('/brand/mark-loop.mp4')} type="video/mp4" />
      </video>

      {/* Shown only when motion is reduced; the stylesheet swaps the two. */}
      <span
        className="mark-loop-still"
        style={{
          backgroundColor: 'var(--accent)',
          maskImage: `url(${asset('/brand/mark-mask.png')})`,
          WebkitMaskImage: `url(${asset('/brand/mark-mask.png')})`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
        }}
      />
    </div>
  );
}
