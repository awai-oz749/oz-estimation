import Link from 'next/link';

export default function Logo({ size = 'default', showText = true, className = '', dark = false }) {
  const sizes = {
    small: { icon: 'w-8 h-8', text: 'text-base', sub: 'text-[8px]' },
    default: { icon: 'w-10 h-10', text: 'text-lg', sub: 'text-[10px]' },
    large: { icon: 'w-14 h-14', text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 'w-20 h-20', text: 'text-4xl', sub: 'text-sm' },
  };

  const s = sizes[size] || sizes.default;

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`} aria-label="OZ Estimation - Home">
      {/* Icon Mark */}
      <div className={`${s.icon} relative flex-shrink-0 group-hover:drop-shadow-[0_0_12px_rgba(251,185,35,0.4)] transition-all duration-500`}>
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full group-hover:scale-110 transition-transform duration-500">
          {/* Background shape */}
          <rect x="2" y="2" width="56" height="56" rx="14" fill="#FBB923" />
          <rect x="2" y="2" width="56" height="56" rx="14" fill="url(#gold-gradient)" />
          
          {/* Building/blueprint lines */}
          <path d="M15 44V22L22 18V44" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
          <path d="M22 44V16L30 12V44" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
          <path d="M30 44V16L38 18V44" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
          <path d="M38 44V22L45 26V44" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />

          {/* OZ Text */}
          <text x="30" y="37" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-1">
            OZ
          </text>

          {/* Decorative top triangle/roof */}
          <path d="M30 6L38 14H22L30 6Z" fill="#FFFFFF" opacity="0.15" />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="gold-gradient" x1="2" y1="2" x2="58" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E0A010" />
              <stop offset="50%" stopColor="#FBB923" />
              <stop offset="100%" stopColor="#FDD05E" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <div className="hidden sm:block">
          <div className={`${s.text} ${dark ? 'text-white' : 'text-navy'} font-bold leading-tight tracking-tight group-hover:text-amber transition-all duration-500`}>
            OZ Estimation
          </div>
          <div className={`${s.sub} text-amber font-semibold tracking-[0.25em] uppercase`}>
            Cost Estimation Experts
          </div>
        </div>
      )}
    </Link>
  );
}
