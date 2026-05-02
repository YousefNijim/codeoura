import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo = ({ className, width = 140, height = 140 }: LogoProps) => (
  <Image
    src="/logo.png"
    alt="Codeoura Logo"
    width={width}
    height={height}
    className={className}
    priority
  />
);

export default Logo;
