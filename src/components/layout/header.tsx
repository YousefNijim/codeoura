'use client';

import { Menu } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { Logo } from './logo';
import { WhatsAppIcon } from '@/components/primitives/brand-icons';
import { LocaleSwitcher } from './locale-switcher';
import { ThemeToggle } from './theme-toggle';
import { MobileNav } from './mobile-nav';
import { navigation } from '@/content/company';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';
import { cn } from '@/lib/utils';
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
  const [settled, setSettled] = useState(false);

  // Once the page moves, the pill tightens and takes a shadow: it reads as
  // lifting off the content it now sits over. A boolean, not a scroll value,
  // so it re-renders twice per visit rather than on every frame.
  useEffect(() => {
    const onScroll = () => setSettled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'page-gutter fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        settled ? 'pt-3 lg:pt-4' : 'pt-5 lg:pt-8',
      )}
    >
      <div aria-hidden className="scroll-progress" />
      <nav
        aria-label="Main"
        className={cn(
          'section-container flex items-center justify-between gap-4 rounded-[60px] border border-nav-border bg-nav-shell px-3 backdrop-blur-[5.5px] transition-[height,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:ps-[13px] lg:pe-[21px]',
          settled
            ? 'h-[50px] shadow-[0_14px_40px_-18px_rgb(0_0_0/0.55)] lg:h-[58px]'
            : 'h-[53px] lg:h-[65px]',
        )}
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
                    className={cn(style, 'inline-flex items-center gap-2')}
                  >
                    <WhatsAppIcon className="size-[18px]" />
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
