'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiChevronRight, HiHomeModern } from 'react-icons/hi2';

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = segment
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    return { href, label };
  });

  return (
    <>
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/85 flex-wrap">
        <Link href="/" className="hover:text-gold transition-colors flex items-center gap-1.5 font-medium">
          <HiHomeModern className="w-4 h-4 text-gold" /> Home
        </Link>
        {crumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-2">
            <HiChevronRight className="w-3 h-3" />
            {i === crumbs.length - 1 ? (
              <span className="text-gold font-medium">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-gold transition-colors">{crumb.label}</Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
