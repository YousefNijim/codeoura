'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Globe, Calculator, Smartphone } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: t('services.web.title'),
      description: t('services.web.description'),
    },
    {
      icon: <Calculator className="h-10 w-10 text-primary" />,
      title: t('services.accounting.title'),
      description: t('services.accounting.description'),
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border/40 bg-card/50 transition-all duration-300 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="absolute -top-1 -right-1 h-16 w-16 bg-primary/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="flex flex-col items-center text-center gap-4 z-10">
                <div className="rounded-full bg-primary/10 p-4">
                    {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center z-10">
                <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
