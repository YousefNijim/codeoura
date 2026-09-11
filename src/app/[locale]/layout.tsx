import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Amiri, Fraunces, Geist, Geist_Mono, IBM_Plex_Sans_Arabic } from 'next/font/google';

import '../globals.css';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MotionProvider } from '@/components/motion-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { company } from '@/content/company';
import { localeDirection, routing, type Locale } from '@/i18n/routing';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

/**
 * خطا العرض.
 *
 * Fraunces سيريف متغيّر بحجم بصري، وAmiri نسخ كلاسيكي — يتجانسان في الطابع
 * القديم، فلا تبدو الصفحة علامتين مختلفتين بين لغة وأخرى. يُستخدمان في
 * العناوين فقط: تباينهما العالي يضرّ القراءة في حجم النص العادي.
 */
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-arabic',
  display: 'swap',
});

/** يطابق basePath في next.config.ts؛ فارغ عند النشر على جذر نطاق. */
const basePath = process.env.BASE_PATH ?? '';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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
      icon: `${basePath}/logo.png`,
      apple: `${basePath}/logo.png`,
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
      className={`${geist.variable} ${geistMono.variable} ${plexArabic.variable} ${fraunces.variable} ${amiri.variable}`}
    >
      <body className="min-h-dvh bg-background text-foreground">
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
                className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-accent-foreground"
              >
                {t('skipToContent')}
              </a>
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
