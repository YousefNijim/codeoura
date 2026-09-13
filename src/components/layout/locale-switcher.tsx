'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';

import { usePathname, useRouter } from '@/i18n/navigation';
import { localeLabels, routing, type Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export function LocaleSwitcher({ onNav = false }: { onNav?: boolean }) {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const router = useRouter();
  // Locale-agnostic pathname, so /ar/work/glamora comes back as /work/glamora
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const next = routing.locales.find((item) => item !== locale) ?? locale;

  return (
    <button
      type="button"
      disabled={isPending}
      aria-label={`${t('switchLanguage')}: ${localeLabels[next]}`}
      onClick={() =>
        startTransition(() => {
          router.replace(pathname, { locale: next });
        })
      }
      className={cn(
        'inline-flex h-9 items-center rounded-full px-3 text-sm font-medium transition-colors lg:h-[43px] lg:px-4',
        onNav
          ? 'text-nav-ink hover:bg-white/10'
          : 'text-ink hover:bg-ink/5',
      )}
    >
      {localeLabels[next]}
    </button>
  );
}
