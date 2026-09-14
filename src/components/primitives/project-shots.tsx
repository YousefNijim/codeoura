'use client';

import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { AnimatePresence, motion, type PanInfo } from 'motion/react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useCallback, useEffect, useRef, useState } from 'react';

import type { Project } from '@/content/types';
import { localeDirection, type Locale } from '@/i18n/routing';
import { asset } from '@/lib/asset';
import { easeOutExpo } from '@/lib/motion';
import { cn } from '@/lib/utils';

/**
 * The product's own screens, one at a time, and full-screen on demand.
 *
 * They used to sit on the page as a row of three and a strip of leftovers,
 * which read as files dropped onto a layout rather than a product being shown.
 * Only one screen is on stage now, at a size worth looking at, and the rest are
 * a click, a key or a swipe away. Opening one fills the viewport, which is the
 * only way a screenshot of an interface is actually readable — the text in it
 * was set for a phone in the hand, not for a third of a page.
 *
 * Movement carries the direction of travel: a screen arriving from the side you
 * came from tells you which way you are going through the set, which a
 * cross-fade cannot.
 *
 * Under RTL the set runs right to left, and the three ways of moving through it
 * do not all mirror. The buttons sit in a flex row, so the layout already swaps
 * which side each is on — inverting their step as well would mirror them twice
 * and send them backwards. A key and a drag have no side of their own, so those
 * are mirrored here: the right arrow goes back, and the screen ahead is pulled
 * in from the left.
 */
const stageHeight = {
  portrait: 'h-[440px] sm:h-[560px] lg:h-[620px]',
  landscape: 'h-[220px] sm:h-[360px] lg:h-[480px]',
} as const;

/**
 * What the browser should actually fetch.
 *
 * Deliberately the same for the stage and the full-screen view: a different
 * value for each asks for a second variant of the same file, and the full-screen
 * stage sits blank until that download lands. These are the widths the image
 * really occupies — a portrait capture is tall and narrow even when it fills the
 * height of a screen, so asking for `100vw` fetched a 1920-wide file for a slot
 * about 340 wide.
 */
const fetchSize = {
  portrait: '(min-width: 640px) 420px, 100vw',
  landscape: '(min-width: 1024px) 1280px, 100vw',
} as const;

const thumbSize = {
  portrait: 'h-[72px] w-[36px] sm:h-[88px] sm:w-[44px]',
  landscape: 'h-[44px] w-[76px] sm:h-[52px] sm:w-[92px]',
} as const;

const slide = {
  enter: (dir: number) => ({ x: dir * 56, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir * -56, opacity: 0, scale: 0.97 }),
};

const swap = { duration: 0.42, ease: easeOutExpo };

export function ProjectShots({
  project,
  label,
}: {
  project: Project;
  label: string;
}) {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;
  // Movement is mirrored under RTL so a key and a drag travel the way the page
  // reads. The buttons are deliberately left out of this — see the note above.
  const reading = localeDirection[locale] === 'rtl' ? -1 : 1;

  const [[index, direction], setFrame] = useState<[number, number]>([0, 1]);
  const [open, setOpen] = useState(false);
  // A drag ends with a click on the element it started on, which would open the
  // full-screen view every time someone swiped. This remembers that one moved.
  const dragged = useRef(false);
  const opener = useRef<HTMLButtonElement>(null);

  const shots = project.shots;
  const screens = shots ? [...shots.featured, ...shots.gallery] : [];
  const count = screens.length;

  const go = useCallback(
    (step: number) =>
      setFrame(([current]) => [(current + step + count) % count, step]),
    [count],
  );

  const onKey = useCallback(
    (key: string) => {
      if (key === 'ArrowRight') go(reading);
      else if (key === 'ArrowLeft') go(-reading);
      else return false;
      return true;
    },
    [go, reading],
  );

  // Escape closes, and the page behind must not scroll while it is covered.
  useEffect(() => {
    if (!open) return;

    const onWindowKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
      else if (onKey(event.key)) event.preventDefault();
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onWindowKey);

    // Held now rather than read in the cleanup: by the time this unwinds the
    // ref may already point somewhere else, and focus would go to whatever
    // took its place.
    const toRestore = opener.current;

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onWindowKey);
      // Focus goes back where it came from, so a keyboard is not dropped at
      // the top of the document on close.
      toRestore?.focus();
    };
  }, [open, onKey]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    // Distance or a flick: a slow short drag should settle back, a fast one
    // should carry, which is what a thumb expects from a photo it is pushing.
    const carried =
      Math.abs(info.offset.x) > 72 || Math.abs(info.velocity.x) > 320;
    if (carried) go(info.offset.x * reading < 0 ? 1 : -1);
  };

  if (!shots || count === 0) return null;

  const { shape } = shots;
  const single = count === 1;

  const frame = (full: boolean) => (
    <AnimatePresence initial={false} custom={direction * reading} mode="popLayout">
      <motion.div
        key={screens[index]}
        custom={direction * reading}
        variants={slide}
        initial="enter"
        animate="center"
        exit="exit"
        transition={swap}
        drag={single ? false : 'x'}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.16}
        onDragStart={() => {
          dragged.current = true;
        }}
        onDragEnd={onDragEnd}
        className={cn(
          'absolute inset-0 flex items-center justify-center',
          full ? 'p-4 sm:p-10' : 'p-3 sm:p-5',
        )}
      >
        <Image
          src={asset(screens[index])}
          alt={label}
          width={1408}
          height={3044}
          sizes={fetchSize[shape]}
          priority={!full && index === 0}
          draggable={false}
          className="h-full w-auto max-w-full rounded-[10px] object-contain"
        />
      </motion.div>
    </AnimatePresence>
  );

  return (
    <>
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={single ? undefined : 0}
        onKeyDown={(event) => {
          if (!single && onKey(event.key)) event.preventDefault();
        }}
        className="flex flex-col gap-6 outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-4 focus-visible:ring-offset-page"
      >
        <div className="flex items-center gap-4">
          {!single && (
            <Control label={t('screenPrev')} onClick={() => go(-1)}>
              <ChevronLeft aria-hidden className="size-5 rtl:-scale-x-100" />
            </Control>
          )}

          <button
            ref={opener}
            type="button"
            aria-label={t('screenZoom')}
            onClick={() => {
              if (dragged.current) {
                dragged.current = false;
                return;
              }
              setOpen(true);
            }}
            className={cn(
              'group relative flex-1 cursor-zoom-in overflow-hidden rounded-[18px] border border-border bg-surface',
              stageHeight[shape],
            )}
          >
            {frame(false)}

            <span
              aria-hidden
              className="pointer-events-none absolute end-4 top-4 z-10 flex size-9 items-center justify-center rounded-full border border-card-border bg-card/80 text-ink-secondary opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              <Expand className="size-4" />
            </span>
          </button>

          {!single && (
            <Control label={t('screenNext')} onClick={() => go(1)}>
              <ChevronRight aria-hidden className="size-5 rtl:-scale-x-100" />
            </Control>
          )}
        </div>

        {!single && (
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {screens.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setFrame([i, i > index ? 1 : -1])}
                aria-label={`${i + 1}`}
                aria-current={i === index}
                className={cn(
                  'relative overflow-hidden rounded-[8px] border transition-opacity',
                  thumbSize[shape],
                  i === index
                    ? 'border-accent opacity-100'
                    : 'border-card-border opacity-50 hover:opacity-90',
                )}
              >
                <Image
                  src={asset(src)}
                  alt=""
                  fill
                  sizes="92px"
                  className="object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: easeOutExpo }}
            // Above the header, which is fixed at z-50.
            className="fixed inset-0 z-[60] bg-page/95 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={swap}
              // The stage owns its own clicks: only the ground behind it closes.
              onClick={(event) => event.stopPropagation()}
              className="absolute inset-0 flex flex-col"
            >
              <div className="flex items-center justify-between gap-4 p-4 sm:p-6">
                <span className="font-mono text-xs text-ink-muted">
                  {index + 1} / {count}
                </span>
                <button
                  type="button"
                  autoFocus
                  aria-label={t('screenClose')}
                  onClick={() => setOpen(false)}
                  className="flex size-10 items-center justify-center rounded-full border border-card-border bg-card text-ink-secondary transition-colors hover:border-accent/50 hover:text-ink"
                >
                  <X aria-hidden className="size-5" />
                </button>
              </div>

              <div className="relative flex-1">{frame(true)}</div>

              {!single && (
                <div className="flex items-center justify-center gap-4 p-4 sm:p-6">
                  <Control label={t('screenPrev')} onClick={() => go(-1)} always>
                    <ChevronLeft aria-hidden className="size-5 rtl:-scale-x-100" />
                  </Control>
                  <Control label={t('screenNext')} onClick={() => go(1)} always>
                    <ChevronRight aria-hidden className="size-5 rtl:-scale-x-100" />
                  </Control>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Control({
  label,
  onClick,
  always = false,
  children,
}: {
  label: string;
  onClick: () => void;
  /** The stage controls are hidden on a phone, where the swipe is the gesture;
      the full-screen ones are not, since there is room for them. */
  always?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        'size-11 shrink-0 items-center justify-center rounded-full border border-card-border bg-card text-ink-secondary transition-colors hover:border-accent/50 hover:text-ink',
        always ? 'flex' : 'hidden sm:flex',
      )}
    >
      {children}
    </button>
  );
}
