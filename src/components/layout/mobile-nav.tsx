'use client';

import { ArrowUpRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import { Logo } from './logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { navigation } from '@/content/company';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

export function MobileNav({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="end" className="w-full max-w-sm border-border p-0">
        <SheetTitle className="sr-only">{t('openMenu')}</SheetTitle>

        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b border-border px-5">
            <Logo />
          </div>

          <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => onOpenChange(false)}
                className="flex items-center justify-between rounded-sm px-4 py-3.5 text-base font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                {pick(item.label, locale)}
                <ArrowUpRight aria-hidden className="size-4 opacity-40 rtl:-scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-border p-4">
            <Button asChild variant="primary" size="lg" className="w-full">
              <Link href="/#contact" onClick={() => onOpenChange(false)}>
                {t('startProject')}
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
