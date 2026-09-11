import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

// التصدير الساكن يُفعَّل ببيئة البناء وحدها، فلا يتغيّر سلوك التطوير ولا
// سلوك النشر على خادم حقيقي.
const isStaticExport = process.env.STATIC_EXPORT === '1';

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: 'export' as const,
        basePath: process.env.BASE_PATH || undefined,
        trailingSlash: true,
      }
    : {}),
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // لا يوجد مُحسِّن صور على استضافة ساكنة
    unoptimized: isStaticExport,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion'],
  },

};

export default withNextIntl(nextConfig);
