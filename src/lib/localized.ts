import type { Localized } from '@/content/types';
import type { Locale } from '@/i18n/routing';

/** Resolve a localized content value for the active locale. */
export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
