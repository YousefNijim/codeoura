import { company } from '@/content/company';
import { services } from '@/content/services';

/** Structured data for the organisation and the services it offers. */
export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: company.url,
    email: company.email,
    telephone: company.phone,
    foundingDate: String(company.founded),
    logo: `${company.url}/brand/icon.png`,
    sameAs: Object.values(company.social).filter(Boolean),
    makesOffer: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title.en,
        description: service.description.en,
      },
    })),
  };

  return <JsonLd data={data} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${company.url}${item.url}`,
    })),
  };

  return <JsonLd data={data} />;
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Data originates in our own content layer, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
