/**
 * Marks drawn for the systems that shipped without one.
 *
 * Each is a glyph on a tinted tile, built from circles, straight lines and a
 * single stroke weight, so the four read as one set beside the six that do
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

/** Keyed by project slug; a system with real artwork is simply absent here. */
export const systemLogos: Record<
  string,
  (props: MarkProps) => React.ReactElement
> = {
  aber: AberMark,
  babunec: BabunecMark,
  'cleveland-medicals': ClevelandMark,
  'cafe-albaraa': CafeMark,
};
