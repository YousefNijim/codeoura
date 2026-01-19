import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/landing/hero';
import ServicesSection from '@/components/landing/services';
import WhyCodeouraSection from '@/components/landing/why-codeoura';
import AiToolSection from '@/components/landing/ai-tool';
import PortfolioSection from '@/components/landing/portfolio';
import ContactSection from '@/components/landing/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <WhyCodeouraSection />
        <AiToolSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
