'use client';

import { Languages } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';

import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from '@/i18n/navigation';
import { localeLabels, routing, type Locale } from '@/i18n/routing';

export function LocaleSwitcher() {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const router = useRouter();
  // Locale-agnostic pathname, so /ar/work/glamora comes back as /work/glamora
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const next = routing.locales.find((item) => item !== locale) ?? locale;

  return (
    <Button
      variant="ghost"
      size="sm"
      disabled={isPending}
      aria-label={`${t('switchLanguage')}: ${localeLabels[next]}`}
      onClick={() =>
        startTransition(() => {
          router.replace(pathname, { locale: next });
        })
      }
      className="gap-1.5"
    >
      <Languages aria-hidden />
      <span className="text-xs font-medium">{localeLabels[next]}</span>
    </Button>
  );
}
