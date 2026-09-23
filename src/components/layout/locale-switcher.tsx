'use client';

import { Check } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useRef, useState, useTransition } from 'react';

import { usePathname, useRouter } from '@/i18n/navigation';
import {
  localeLabels,
  localeShortLabels,
  routing,
  type Locale,
} from '@/i18n/routing';
import { cn } from '@/lib/utils';

/**
 * Language chooser.
 *
 * A menu rather than a toggle: with three languages a button that swaps to
 * "the other one" cannot say where it is going, and cycling makes a visitor
 * pass through a language they do not read to reach the one they do.
 *
 * Each language is named in itself, so someone who cannot read the current
 * language can still find their own.
 */
export function LocaleSwitcher({ onNav = false }: { onNav?: boolean }) {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const router = useRouter();
  // Locale-agnostic pathname, so /ar/work/glamora comes back as /work/glamora
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const choose = (next: Locale) => {
    setOpen(false);
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        disabled={isPending}
        aria-label={t('switchLanguage')}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          'inline-flex h-9 items-center rounded-full px-3 text-sm font-medium transition-colors lg:h-[43px] lg:px-4',
          onNav ? 'text-nav-ink hover:bg-white/10' : 'text-ink hover:bg-ink/5',
        )}
      >
        {localeShortLabels[locale]}
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute end-0 top-full z-50 mt-2 min-w-[9rem] overflow-hidden rounded-2xl border border-card-border bg-card p-1 shadow-lg"
        >
          {routing.locales.map((item) => (
            <li key={item}>
              <button
                type="button"
                role="menuitemradio"
                aria-checked={item === locale}
                onClick={() => choose(item)}
                className={cn(
                  'flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm transition-colors',
                  item === locale
                    ? 'text-accent'
                    : 'text-ink hover:bg-ink/5',
                )}
              >
                {localeLabels[item]}
                {item === locale && <Check aria-hidden className="size-3.5" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
