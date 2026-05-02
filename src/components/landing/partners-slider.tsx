'use client';
import Image from 'next/image';

// ─────────────────────────────────────────────────────────────────────────────
// PARTNERS DATA
// - `url`  : the partner's website (opens in new tab on click)
// - `logo` : path inside /public/partners/ — drop the file there to activate
// - `icon` : emoji shown as fallback until you upload the logo image
// ─────────────────────────────────────────────────────────────────────────────
const partners: { name: string; icon: string; url: string; logo?: string }[] = [
  {
    name: 'مطعم شاورما الشيخ',
    icon: '🍖',
    url: '#',                               // ← replace with actual URL
    logo: '/partners/alshaikh.jpg',         // ← place file in public/partners/
  },
  {
    name: 'Arjwan Istanbul',
    icon: '🌹',
    url: 'https://www.arjwan.store/',
    logo: '/partners/arjwan_logo_transparent.png', // ← place file in public/partners/
  },
];

// Minimum 8 visible slots — pad by repeating so the marquee always fills the screen
const MIN_SLOTS = 2;
const repeated = partners.length < MIN_SLOTS
  ? Array.from({ length: Math.ceil(MIN_SLOTS / partners.length) }, () => partners).flat()
  : partners;

// Duplicate for seamless infinite scroll
const track = [...repeated, ...repeated];

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
          style={{ '--marquee-duration': '28s' } as React.CSSProperties}
        >
          {track.map((partner, i) => (
            <li key={i}>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${partner.name}`}
                className="flex items-center gap-3 rounded-xl border border-border/50 bg-card px-6 py-3 shadow-sm
                           transition-all duration-200 hover:border-primary/60 hover:shadow-md hover:shadow-primary/10
                           hover:-translate-y-0.5 whitespace-nowrap cursor-pointer group"
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={90}
                    height={36}
                    className="h-9 w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <>
                    <span className="text-2xl" aria-hidden>{partner.icon}</span>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {partner.name}
                    </span>
                  </>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
