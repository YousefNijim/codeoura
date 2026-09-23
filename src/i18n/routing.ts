import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // English leads: it is the language the work is presented in abroad, and the
  // one a visitor with no match falls back to.
  locales: ['en', 'ar', 'tr'],
  defaultLocale: 'en',
});

export type Locale = (typeof routing.locales)[number];

export const localeDirection: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  ar: 'rtl',
  tr: 'ltr',
};

/** Each language named in itself — never in the language being switched from. */
export const localeLabels: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
  tr: 'Türkçe',
};

/** Short form for the compact switcher in the navigation shell. */
export const localeShortLabels: Record<Locale, string> = {
  en: 'EN',
  ar: 'ع',
  tr: 'TR',
};
