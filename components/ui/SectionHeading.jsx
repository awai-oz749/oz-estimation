'use client';

import AnimatedSection from './AnimatedSection';

export default function SectionHeading({ title, subtitle, centered = true, light = false, badge }) {
  return (
    <AnimatedSection className={`mb-8 md:mb-10 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-wide uppercase ${
          light ? 'bg-gold/10 text-gold border border-gold/20' : 'bg-gold/10 text-gold border border-gold/20'
        }`}>
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase mb-4 leading-[1.05] tracking-tight ${light ? 'text-navy' : 'text-navy'}`}>
        {title}
      </h2>
      <div className={`mb-5 flex ${centered ? 'justify-center' : ''}`}>
        <span className="heading-bar" />
      </div>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-3xl leading-relaxed text-slate-custom ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
