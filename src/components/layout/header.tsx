'use client';

import { Menu } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { Logo } from './logo';
import { LocaleSwitcher } from './locale-switcher';
import { ThemeToggle } from './theme-toggle';
import { MobileNav } from './mobile-nav';
import { Button } from '@/components/ui/button';
import { navigation } from '@/content/company';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';
import { cn } from '@/lib/utils';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    // Passive: this listener never calls preventDefault
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled
          ? 'glass border-b border-border'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-5 sm:px-8">
        <Link href="/" aria-label={t('home')} className="shrink-0">
          <Logo />
        </Link>

        <nav
          aria-label="Main"
          className="hidden flex-1 items-center justify-center gap-1 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {pick(item.label, locale)}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-1 md:ms-0">
          <LocaleSwitcher />
          <ThemeToggle />
          <Button asChild variant="primary" size="sm" className="hidden sm:inline-flex">
            <Link href="/#contact">{t('startProject')}</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={t('openMenu')}
            onClick={() => setMenuOpen(true)}
          >
            <Menu aria-hidden />
          </Button>
        </div>
      </div>

      <MobileNav open={menuOpen} onOpenChange={setMenuOpen} />
    </header>
  );
}
