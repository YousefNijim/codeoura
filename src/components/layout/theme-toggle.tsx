'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

export function ThemeToggle({ onNav = false }: { onNav?: boolean }) {
  const t = useTranslations('nav');
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The server cannot know the resolved theme, so icons render only after mount.
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label={t('toggleTheme')}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'inline-flex size-9 items-center justify-center rounded-full transition-colors lg:size-[43px]',
        onNav
          ? 'border border-white/15 text-nav-ink hover:bg-white/10'
          : 'border border-card-border text-ink hover:bg-ink/5',
      )}
    >
      {mounted && resolvedTheme === 'dark' ? (
        <Sun aria-hidden className="size-4" />
      ) : (
        <Moon aria-hidden className="size-4" />
      )}
    </button>
  );
}
