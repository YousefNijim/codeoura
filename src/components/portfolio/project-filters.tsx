'use client';

import { useLocale, useTranslations } from 'next-intl';

import { projectCategories } from '@/content/projects';
import type { ProjectCategory } from '@/content/types';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';
import { cn } from '@/lib/utils';

export type FilterValue = ProjectCategory | 'all';

export function ProjectFilters({
  active,
  onChange,
  counts,
}: {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
  counts: Record<string, number>;
}) {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;

  return (
    <div
      role="tablist"
      aria-label={t('filterLabel')}
      className="flex flex-wrap gap-2"
    >
      {projectCategories.map((category) => {
        const count = counts[category.id] ?? 0;
        if (count === 0) return null;

        const isActive = active === category.id;

        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category.id)}
            className={cn(
              'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors',
              isActive
                ? 'border-primary/50 bg-primary/10 text-foreground'
                : 'border-border text-muted-foreground hover:border-foreground/25 hover:text-foreground',
            )}
          >
            {pick(category.label, locale)}
            <span className="font-mono text-xs opacity-60">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
