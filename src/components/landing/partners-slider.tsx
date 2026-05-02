'use client';
import Image from 'next/image';

// ─────────────────────────────────────────────────────────────────────────────
// PARTNERS DATA
// To add a real logo later, set `logo` to the public path, e.g.:
//   logo: '/partners/stripe.png'
// The `icon` emoji is used as a fallback until you upload the image.
// ─────────────────────────────────────────────────────────────────────────────
const partners: { name: string; icon: string; logo?: string }[] = [
  { name: 'مطعم شاورما الشيخ', icon: '💳', logo: '/alshaikh.png' },
  { name: 'Shopify', icon: '🛒' },
  { name: 'HubSpot', icon: '📊' },
  { name: 'Salesforce', icon: '☁️' },
  { name: 'Slack', icon: '💬' },
  { name: 'Figma', icon: '🎨' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Notion', icon: '📝' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Firebase', icon: '🔥' },
];

// Duplicate for seamless infinite scroll
const track = [...partners, ...partners];

export default function PartnersSlider() {
  return (
    <div className="relative w-full overflow-hidden border-t border-border/40 bg-background/50 py-10">
      {/* Label */}
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
        Trusted by companies worldwide
      </p>

      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      {/* Scrolling track */}
      <div className="flex">
        <ul
          className="flex shrink-0 gap-8 animate-marquee"
          style={{ '--marquee-duration': '32s' } as React.CSSProperties}
        >
          {track.map((partner, i) => (
            <li
              key={i}
              className="flex items-center gap-3 rounded-xl border border-border/50 bg-card px-6 py-3 shadow-sm transition-colors hover:border-primary/60 hover:shadow-primary/10 whitespace-nowrap"
            >
              {/* Real logo image — shown when logo path is provided */}
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={80}
                  height={32}
                  className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              ) : (
                /* Fallback: emoji icon + name until logo is uploaded */
                <>
                  <span className="text-2xl" aria-hidden>{partner.icon}</span>
                  <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {partner.name}
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
