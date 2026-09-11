import type { MetadataRoute } from 'next';

import { company } from '@/content/company';
import { projects } from '@/content/projects';
import { services } from '@/content/services';
import { routing } from '@/i18n/routing';

// مطلوب للتصدير الساكن: بلا هذا يعامل Next المسار كديناميكي ويفشل البناء.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    '/work',
    ...projects.map((project) => `/work/${project.slug}`),
    ...services.map((service) => `/services/${service.slug}`),
  ];

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${company.url}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((item) => [item, `${company.url}/${item}${path}`]),
        ),
      },
    })),
  );
}
