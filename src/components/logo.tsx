import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg width="150" height="36" viewBox="0 0 150 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text
      className="font-headline"
      style={{ whiteSpace: 'pre' }}
      fontFamily="Poppins"
      fontSize="24"
      fontWeight="bold"
      letterSpacing="0em"
    >
      <tspan x="0" y="27.5" fill="hsl(var(--primary))">
        Code
      </tspan>
      <tspan x="68" y="27.5" fill="hsl(var(--accent))">
        oura
      </tspan>
    </text>
  </svg>
);

export default Logo;
