import { Github, Instagram, Linkedin } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';

import { Logo } from './logo';
import { company, navigation } from '@/content/company';
import { projects } from '@/content/projects';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { pick } from '@/lib/localized';

const socialLinks = [
  { key: 'github', href: company.social.github, Icon: Github, label: 'GitHub' },
  { key: 'linkedin', href: company.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
  { key: 'instagram', href: company.social.instagram, Icon: Instagram, label: 'Instagram' },
] as const;

/**
 * A rounded panel inset from the page edge, with the name set enormous behind
 * the content — a closing mark that costs one text node.
 */
export async function Footer() {
  const t = await getTranslations('footer');
  const locale = (await getLocale()) as Locale;

  return (
    <footer className="relative overflow-hidden border-t border-stroke bg-page py-[30px] lg:py-10">
      <div className="relative z-[1] mx-4 overflow-hidden rounded-[24px] border border-card-border bg-card lg:mx-6">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-[1]">
          <p className="select-none whitespace-nowrap text-center text-[22vw] font-bold leading-[0.75] text-ink opacity-[0.035]">
            {company.name}
          </p>
        </div>

        <div className="page-gutter relative z-10 py-12 lg:min-h-[22rem] lg:py-16">
          <div className="section-container flex flex-col gap-12 lg:grid lg:grid-cols-[auto_1fr] lg:gap-20">
            <div className="flex flex-col gap-5 lg:max-w-xs">
              <Link href="/" className="w-fit">
                <Logo size={36} />
              </Link>
              <p className="text-sm leading-[1.6] text-ink-muted">
                {t('description')}
              </p>
              <div className="flex items-center gap-2">
                {socialLinks
                  .filter((item) => item.href)
                  .map(({ key, href, Icon, label }) => (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="rounded-full border border-border-social p-2.5 text-ink-muted transition-colors hover:border-accent/50 hover:text-ink"
                    >
                      <Icon className="size-4" aria-hidden />
                    </a>
                  ))}
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-3">
              <FooterColumn title={t('systems')}>
                {projects.map((project) => (
                  <a
                    key={project.slug}
                    href={project.demo?.href ?? '#products'}
                    target={project.demo ? '_blank' : undefined}
                    rel={project.demo ? 'noopener noreferrer' : undefined}
                    className="text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    {pick(project.name, locale)}
                  </a>
                ))}
              </FooterColumn>

              <FooterColumn title={t('sitemap')}>
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    {pick(item.label, locale)}
                  </Link>
                ))}
                <Link
                  href="/work"
                  className="text-sm text-ink-muted transition-colors hover:text-accent"
                >
                  {t('caseStudies')}
                </Link>
              </FooterColumn>

              <FooterColumn title={t('connect')}>
                <a
                  href={`mailto:${company.email}`}
                  dir="ltr"
                  className="text-sm text-ink-muted transition-colors hover:text-accent"
                >
                  {company.email}
                </a>
                <p className="text-sm leading-[1.6] text-ink-muted">
                  {t('reply')}
                </p>
              </FooterColumn>
            </div>
          </div>

          <div className="section-container mt-12 border-t border-stroke pt-6 text-center text-xs text-ink-muted">
            {t('copyright', { year: new Date().getFullYear() })}
          </div>
        </div>
      </div>
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
      <h3 className="text-sm font-medium text-ink">{title}</h3>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}
