import { asset } from '@/lib/asset';

/**
 * The animated mark, behind the opening copy.
 *
 * The source is the logo on a white card, so it cannot simply be laid over a
 * dark page. Each theme keys it out with a blend instead of a second file:
 *
 *   light  multiply — white multiplies away against the white page and only
 *          the green survives.
 *   dark   the frame is inverted first, which turns the white ground black
 *          and the mark light, then `screen` drops black to nothing. The hue
 *          is rebuilt with sepia and a rotation so what is left is the brand
 *          green rather than the inverse of it.
 *
 * It is decoration, so it never delays the page: metadata only until the
 * browser is idle, no audio track, and it is removed outright for anyone who
 * asks for reduced motion — the static mark takes over there.
 */
export function MarkLoop() {
  return (
    <div
      aria-hidden
      className="mark-loop pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[18rem] w-[30rem] max-w-[92vw] -translate-y-1/2 lg:h-[26rem] lg:w-[46rem]"
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
