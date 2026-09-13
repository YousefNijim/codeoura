import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Geist_Mono, Noto_Kufi_Arabic } from 'next/font/google';

import '../globals.css';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MotionProvider } from '@/components/motion-provider';
import { RevealObserver } from '@/components/primitives/reveal-observer';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { company } from '@/content/company';
import { localeDirection, routing, type Locale } from '@/i18n/routing';

/**
 * One family across both languages.
 *
 * Noto Kufi Arabic carries a full Latin set of matching proportion, so an
 * Arabic page and an English page read as the same brand rather than as two
 * typographic systems bolted together.
 */
const kufi = Noto_Kufi_Arabic({
  subsets: ['arabic', 'latin'],
  variable: '--font-kufi',
  display: 'swap',
});

/** يطابق basePath في next.config.ts؛ فارغ عند النشر على جذر نطاق. */
const basePath = process.env.BASE_PATH ?? '';

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0c' },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.home' });

  return {
    metadataBase: new URL(company.url),
    title: {
      default: t('title'),
      template: `%s — ${company.name}`,
    },
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((item) => [item, `/${item}`]),
      ),
    },
    openGraph: {
      type: 'website',
      siteName: company.name,
      title: t('title'),
      description: t('description'),
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    // مسارات الميتاداتا لا يضيف إليها Next قيمة basePath تلقائياً — بخلاف
    // next/image. بدون هذا تُطلب الأيقونة من جذر النطاق وتعود 404 عند أي
    // نشر تحت مسار فرعي.
    icons: {
      icon: `${basePath}/brand/icon.png`,
      apple: `${basePath}/brand/icon.png`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations('nav');

  return (
    <html
      lang={locale}
      dir={localeDirection[locale as Locale]}
      suppressHydrationWarning
      className={`${kufi.variable} ${geistMono.variable}`}
    >
      <body className="min-h-dvh bg-page text-ink">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <MotionProvider>
              <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
              >
                {t('skipToContent')}
              </a>
              <RevealObserver />
              <Header />
              <main id="main">{children}</main>
              <Footer />
              <Toaster />
            </MotionProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
