import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="180"
    height="40"
    viewBox="0 0 180 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        d="M20,38 C8.95,38 0,29.05 0,18 C0,6.95 8.95,-2 20,-2 C31.05,-2 40,6.95 40,18 C40,29.05 31.05,38 20,38 Z M20,32 C12.27,32 6,25.73 6,18 C6,10.27 12.27,4 20,4 C27.73,4 34,10.27 34,18 C34,25.73 27.73,32 20,32 Z"
        fill="hsl(var(--primary))"
      />
      <path
        d="M20,28 C14.48,28 10,23.52 10,18 C10,12.48 14.48,8 20,8 C25.52,8 30,12.48 30,18 L30,12 L34,12 L34,24 L30,24 L30,18 C30,12.48 25.52,8 20,8 C14.48,8 10,12.48 10,18 C10,23.52 14.48,28 20,28 Z"
        fill="hsl(var(--primary))"
        transform="rotate(15 20 18)"
      />
      <rect x="25" y="6" width="15" height="24" fill="hsl(var(--background))" />
      <circle cx="32" cy="11" r="4" fill="hsl(var(--accent))" />
    </g>
    <text
      x="50"
      y="29"
      className="font-headline"
      fontSize="24"
      fontWeight="bold"
      fill="hsl(var(--foreground))"
    >
      Codeoura
    </text>
  </svg>
);

export default Logo;
