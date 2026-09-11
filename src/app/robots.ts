import type { MetadataRoute } from 'next';

import { company } from '@/content/company';

// مطلوب للتصدير الساكن: بلا هذا يعامل Next المسار كديناميكي ويفشل البناء.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${company.url}/sitemap.xml`,
  };
}
