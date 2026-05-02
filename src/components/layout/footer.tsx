'use client';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Logo from '@/components/logo';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo width={48} height={48} />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {t('footer.copyright').replace('{year}', year.toString())}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="#" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
