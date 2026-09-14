/**
 * Marks drawn for the systems that shipped without one.
 *
 * Each is a glyph on a tinted tile, built from circles, straight lines and a
 * single stroke weight, so the seven read as one set beside the three that do
 * have real artwork. Each carries its own hue rather than the site green: a
 * strip where every logo is the same colour looks like a template, not like a
 * group of products.
 *
 * Drawn on a 48×48 grid with a 4-unit margin, so every glyph shares an optical
 * size regardless of whether it is wide or tall.
 */
type MarkProps = { className?: string };

function Tile({
  from,
  to,
  children,
  className,
}: {
  from: string;
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  const id = `${from}-${to}`.replace(/[^a-z0-9]/gi, '');

  return (
    <svg
      viewBox="0 0 48 48"
      role="presentation"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill={`url(#${id})`} />
      {children}
    </svg>
  );
}

/** Aber: a parcel crossing a border — a chevron passing through a gap. */
function AberMark({ className }: MarkProps) {
  return (
    <Tile from="#0f9b6c" to="#17b877" className={className}>
      <path
        d="M14 24h13"
        stroke="#fff"
        strokeWidth="3.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 15l9 9-9 9"
        stroke="#fff"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="15" cy="16" r="2" fill="#fff" opacity=".55" />
      <circle cx="15" cy="32" r="2" fill="#fff" opacity=".55" />
    </Tile>
  );
}

/** Babunec: a route between two points, drawn as a plane's path. */
function BabunecMark({ className }: MarkProps) {
  return (
    <Tile from="#1d6fe0" to="#2f9bf2" className={className}>
      <path d="M13 25.5l22-9.5-8.5 20-3.2-7.4L13 25.5z" fill="#fff" />
      <path
        d="M23.3 28.6L35 16"
        stroke="#1d6fe0"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity=".55"
      />
    </Tile>
  );
}

/** Cleveland Medicals: a cross, with one arm squared off into a record card. */
function ClevelandMark({ className }: MarkProps) {
  return (
    <Tile from="#0e7c86" to="#14a5ae" className={className}>
      <path
        d="M21 13h6v8h8v6h-8v8h-6v-8h-8v-6h8v-8z"
        fill="#fff"
      />
    </Tile>
  );
}

/** Cafe Albaraa: a cup seen from the side, with the steam as one stroke. */
function CafeMark({ className }: MarkProps) {
  return (
    <Tile from="#8a5a2b" to="#b9813f" className={className}>
      <path
        d="M14 21h16v6a8 8 0 0 1-8 8 8 8 0 0 1-8-8v-6z"
        fill="#fff"
      />
      <path
        d="M30 23h2.5a3.5 3.5 0 0 1 0 7H30"
        stroke="#fff"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M20 17c0-2 2-2 2-4M25 17c0-2 2-2 2-4"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        opacity=".75"
      />
    </Tile>
  );
}

/** Sho Abalak: one parcel, seen by four apps — a box with a single seam. */
function ShoAbalakMark({ className }: MarkProps) {
  return (
    <Tile from="#b4561a" to="#d9782c" className={className}>
      <path
        d="M24 12l11 6v12l-11 6-11-6V18l11-6z"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M13 18l11 6 11-6M24 24v12" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinejoin="round" />
    </Tile>
  );
}

/** FocusOura: a target — concentric rings closing on one point. */
function FocusOuraMark({ className }: MarkProps) {
  return (
    <Tile from="#5b3fd6" to="#7d5cf0" className={className}>
      <circle cx="24" cy="24" r="11" fill="none" stroke="#fff" strokeWidth="2.6" opacity=".55" />
      <circle cx="24" cy="24" r="6" fill="none" stroke="#fff" strokeWidth="2.8" />
      <circle cx="24" cy="24" r="2.2" fill="#fff" />
    </Tile>
  );
}

/** Arjwan Istanbul: a flacon — shoulders, neck and stopper in one outline. */
function ArjwanMark({ className }: MarkProps) {
  return (
    <Tile from="#9c2d4a" to="#c4405f" className={className}>
      <rect x="21" y="11" width="6" height="5" rx="1.4" fill="#fff" />
      <path d="M22 16h4v3h-4z" fill="#fff" opacity=".75" />
      <path
        d="M20 19h8a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6v-6a6 6 0 0 1 6-6z"
        fill="#fff"
      />
      <path d="M19 26h10" stroke="#9c2d4a" strokeWidth="2" strokeLinecap="round" />
    </Tile>
  );
}

/** Keyed by project slug; a system with real artwork is simply absent here. */
export const systemLogos: Record<
  string,
  (props: MarkProps) => React.ReactElement
> = {
  aber: AberMark,
  babunec: BabunecMark,
  'cleveland-medicals': ClevelandMark,
  'cafe-albaraa': CafeMark,
  'sho-abalak': ShoAbalakMark,
  focusoura: FocusOuraMark,
  'arjwan-istanbul': ArjwanMark,
};
