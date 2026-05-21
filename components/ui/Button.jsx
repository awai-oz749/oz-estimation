import Link from 'next/link';

export default function Button({ children, href, variant = 'primary', className = '', onClick, type = 'button', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300 cursor-pointer text-sm md:text-base';
  
  const variants = {
    primary: 'bg-gold text-black px-7 py-3.5 hover:bg-amber hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5',
    secondary: 'bg-navy text-white px-7 py-3.5 hover:bg-navy-dark hover:shadow-xl hover:shadow-navy/25 hover:-translate-y-0.5',
    ghost: 'text-amber hover:text-navy px-4 py-2 hover:underline underline-offset-4',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
