import { getTranslations } from 'next-intl/server';

import { Section } from '@/components/primitives/section';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export default async function NotFound() {
  const t = await getTranslations('notFound');

  return (
    <Section className="flex min-h-[70svh] items-center pt-32">
      <div className="flex max-w-md flex-col items-start gap-5">
        <span className="font-mono text-sm text-primary">404</span>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t('title')}
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          {t('description')}
        </p>
        <Button asChild variant="primary">
          <Link href="/">{t('cta')}</Link>
        </Button>
      </div>
    </Section>
  );
}
