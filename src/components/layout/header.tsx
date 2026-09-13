'use client';

import { Menu } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

import { Logo } from './logo';
import { LocaleSwitcher } from './locale-switcher';
import { ThemeToggle } from './theme-toggle';
import { MobileNav } from './mobile-nav';
import { navigation } from '@/content/company';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';
import { whatsappLink } from '@/lib/whatsapp';

/**
 * A floating pill rather than a full-width bar.
 *
 * The shell stays dark in both themes. It is the one element present on every
 * screen, so holding it constant while the page behind it changes gives the
 * site a fixed point — and it never has to transition on scroll.
 */
export function Header() {
  const t = useTranslations('nav');
  const tc = useTranslations('cta');
  const locale = useLocale() as Locale;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="page-gutter fixed inset-x-0 top-0 z-50 pt-5 lg:pt-8">
      <nav
        aria-label="Main"
        className="section-container flex h-[53px] items-center justify-between gap-4 rounded-[60px] border border-nav-border bg-nav-shell px-3 backdrop-blur-[5.5px] lg:h-[65px] lg:ps-[13px] lg:pe-[21px]"
      >
        <Link href="/" aria-label={t('home')} className="shrink-0">
          <Logo dark />
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-10 md:flex">
          {navigation.map((item) => {
            const style =
              'whitespace-nowrap text-base font-medium tracking-[0.2px] text-nav-ink transition-opacity hover:opacity-80';

            return (
              <li key={item.href}>
                {item.external ? (
                  <a
                    href={whatsappLink(tc('whatsappMessage'))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style}
                  >
                    {pick(item.label, locale)}
                  </a>
                ) : (
                  <Link href={item.href} className={style}>
                    {pick(item.label, locale)}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2 lg:gap-3">
          <LocaleSwitcher onNav />
          <ThemeToggle onNav />
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={t('openMenu')}
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-nav-ink transition-colors hover:bg-white/10 md:hidden lg:size-[43px]"
          >
            <Menu aria-hidden className="size-4" />
          </button>
        </div>
      </nav>

      <MobileNav open={menuOpen} onOpenChange={setMenuOpen} />
    </header>
  );
}
