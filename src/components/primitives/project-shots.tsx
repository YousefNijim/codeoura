'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion, type PanInfo } from 'motion/react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';

import type { Project } from '@/content/types';
import { localeDirection, type Locale } from '@/i18n/routing';
import { asset } from '@/lib/asset';
import { easeOutExpo } from '@/lib/motion';
import { cn } from '@/lib/utils';

/**
 * The product's own screens, one at a time.
 *
 * They used to sit on the page as a row of three and a strip of leftovers,
 * which read as files dropped onto a layout rather than a product being shown.
 * Only one screen is on stage now, at a size worth looking at, and the rest are
 * a click, a key or a swipe away.
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
 * in from the left. Anyone with reduced motion set gets the
 * cross-fade instead — `MotionConfig reducedMotion="user"` wraps the app and
 * drops the transforms on its own.
 *
 * Every screen keeps its own aspect: the stage is a fixed height and the image
 * is contained inside it, so a set of mixed captures neither crops nor shifts
 * the page as it advances.
 */
const stageHeight = {
  portrait: 'h-[440px] sm:h-[560px] lg:h-[620px]',
  landscape: 'h-[220px] sm:h-[360px] lg:h-[480px]',
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

export function ProjectShots({
  project,
  label,
}: {
  project: Project;
  label: string;
}) {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;
  // Movement is mirrored under RTL so "next" travels the way the page reads.
  const reading = localeDirection[locale] === 'rtl' ? -1 : 1;

  const [[index, direction], setFrame] = useState<[number, number]>([0, 1]);

  const shots = project.shots;
  const screens = shots ? [...shots.featured, ...shots.gallery] : [];

  const go = useCallback(
    (step: number) =>
      setFrame(([current]) => [
        (current + step + screens.length) % screens.length,
        step,
      ]),
    [screens.length],
  );

  const onDragEnd = (_: unknown, info: PanInfo) => {
    // Distance or a flick: a slow short drag should settle back, a fast one
    // should carry, which is what a thumb expects from a photo it is pushing.
    const carried = Math.abs(info.offset.x) > 72 || Math.abs(info.velocity.x) > 320;
    if (carried) go(info.offset.x * reading < 0 ? 1 : -1);
  };

  if (!shots || screens.length === 0) return null;

  const { shape } = shots;
  const single = screens.length === 1;

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={single ? undefined : 0}
      onKeyDown={(event) => {
        if (single) return;
        // Arrows follow the page's reading direction, not the array's order.
        if (event.key === 'ArrowRight') go(reading);
        else if (event.key === 'ArrowLeft') go(-reading);
        else return;
        event.preventDefault();
      }}
      className="flex flex-col gap-6 outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-4 focus-visible:ring-offset-page"
    >
      <div className="flex items-center gap-4">
        {!single && (
          <Control label={t('screenPrev')} onClick={() => go(-1)}>
            <ChevronLeft aria-hidden className="size-5 rtl:-scale-x-100" />
          </Control>
        )}

        <div
          className={cn(
            'relative flex-1 overflow-hidden rounded-[18px] border border-border bg-surface',
            stageHeight[shape],
          )}
        >
          <AnimatePresence initial={false} custom={direction * reading} mode="popLayout">
            <motion.div
              key={screens[index]}
              custom={direction * reading}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.42, ease: easeOutExpo }}
              drag={single ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              onDragEnd={onDragEnd}
              className="absolute inset-0 flex items-center justify-center p-3 sm:p-5"
            >
              <Image
                src={asset(screens[index])}
                alt={label}
                width={1408}
                height={3044}
                sizes="(min-width: 1024px) 900px, 100vw"
                priority={index === 0}
                draggable={false}
                className="h-full w-auto max-w-full rounded-[10px] object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

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
  );
}

function Control({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="hidden size-11 shrink-0 items-center justify-center rounded-full border border-card-border bg-card text-ink-secondary transition-colors hover:border-accent/50 hover:text-ink sm:flex"
    >
      {children}
    </button>
  );
}
