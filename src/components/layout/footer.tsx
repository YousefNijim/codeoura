import { Github, Instagram, Linkedin } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';

import { Logo } from './logo';
import { Container } from '@/components/primitives/container';
import { company, navigation } from '@/content/company';
import { services } from '@/content/services';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

const socialLinks = [
  { key: 'github', href: company.social.github, Icon: Github, label: 'GitHub' },
  { key: 'linkedin', href: company.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
  { key: 'instagram', href: company.social.instagram, Icon: Instagram, label: 'Instagram' },
] as const;

export async function Footer() {
  const t = await getTranslations('footer');
  const locale = (await getLocale()) as Locale;

  return (
    <footer className="relative border-t border-border bg-surface">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="w-fit">
              <Logo size={36} />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t('description')}
            </p>
          </div>

          <FooterColumn title={t('sitemap')}>
            {navigation.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {pick(item.label, locale)}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={t('services')}>
            {services.map((service) => (
              <FooterLink key={service.id} href={`/services/${service.slug}`}>
                {pick(service.title, locale)}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={t('connect')}>
            <a
              href={`mailto:${company.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {company.email}
            </a>
            <div className="mt-2 flex items-center gap-2">
              {socialLinks
                .filter((item) => item.href)
                .map(({ key, href, Icon, label }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <Icon className="size-4" aria-hidden />
                  </a>
                ))}
            </div>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
          <p>{t('builtWith')}</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-foreground/70">
        {title}
      </h3>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}
