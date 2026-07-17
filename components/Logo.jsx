import Link from 'next/link';
import Image from 'next/image';

export default function Logo({ size = 'default', className = '', dark = false }) {
  const sizes = {
    small: { w: 60, h: 34 },
    default: { w: 82, h: 46 },
    large: { w: 114, h: 64 },
    xl: { w: 163, h: 92 },
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
        className="object-contain group-hover:scale-105 transition-transform duration-500"
        style={{ height: s.h, width: 'auto' }}
      />
    </Link>
  );
}
