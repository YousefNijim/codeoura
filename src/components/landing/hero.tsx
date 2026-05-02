'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Logo from '@/components/logo';
import { useLanguage } from '@/context/language-context';

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-center bg-background"
    >
      <div className="container absolute inset-0 z-0 bg-grid-pattern bg-center [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      <div className="container z-10 flex flex-col items-center justify-center gap-8 text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <Logo width={256} height={256} className="h-auto w-64" />
        </div>
        <h1
          className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          {t('hero.title')}
        </h1>
        <p
          className="max-w-[700px] text-lg text-muted-foreground md:text-xl animate-fade-in-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
        >
          {t('hero.subtitle')}
        </p>
        <div
          className="flex gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
        >
          <Button asChild size="lg">
            <Link href="#contact">{t('hero.getStarted')}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#portfolio">{t('hero.viewWork')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
