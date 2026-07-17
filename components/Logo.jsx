import Link from 'next/link';
import Image from 'next/image';

export default function Logo({ size = 'default', className = '', dark = false }) {
  const sizes = {
    small: { w: 130, h: 44 },
    default: { w: 160, h: 54 },
    large: { w: 210, h: 70 },
    xl: { w: 280, h: 94 },
  };

  const s = sizes[size] || sizes.default;

  return (
    <Link href="/" className={`flex items-center group ${className}`} aria-label="Brix Estimation - Home">
      <Image
        src="/logo.png"
        alt="Brix Estimation"
        width={s.w}
        height={s.h}
        priority
        className="w-auto object-contain group-hover:scale-105 transition-transform duration-500"
        style={{ height: s.h, width: 'auto' }}
      />
    </Link>
  );
}
