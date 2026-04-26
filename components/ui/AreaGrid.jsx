'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { allAreas } from '@/data/areas';
import { HiOutlineMapPin, HiChevronDown, HiChevronUp } from 'react-icons/hi2';

const MOBILE_LIMIT = 14;

export default function AreaGrid() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-wide uppercase bg-gold/10 text-gold border border-gold/20">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            Nationwide Coverage
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">We Serve Across the USA</h2>
          <p className="text-slate-custom max-w-2xl mx-auto text-base md:text-lg">Our estimation services are available across all major states in the United States.</p>
          <div className="mt-6 flex items-center gap-1 justify-center">
            <div className="h-[2px] w-8 bg-gold/30 rounded-full" />
            <div className="h-[2px] w-16 bg-gradient-to-r from-gold to-amber rounded-full" />
            <div className="h-[2px] w-8 bg-gold/30 rounded-full" />
          </div>
        </AnimatedSection>

        {/* Desktop: show all, always */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-7 gap-3">
          {allAreas.map((area, i) => (
            <AnimatedSection key={area} delay={i * 0.015}>
              <div className="glass-card rounded-xl p-3.5 text-center transition-all duration-300 group hover:translate-y-[-2px]">
                <HiOutlineMapPin className="w-4 h-4 text-gold/50 mx-auto mb-1.5 group-hover:text-gold group-hover:scale-110 transition-all" />
                <span className="text-slate-custom text-sm group-hover:text-white transition-colors font-medium">{area}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile: show limited with toggle */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {(showAll ? allAreas : allAreas.slice(0, MOBILE_LIMIT)).map((area, i) => (
              <div key={area} className="glass-card rounded-xl p-3 text-center transition-all duration-300 group">
                <HiOutlineMapPin className="w-3.5 h-3.5 text-gold/50 mx-auto mb-1 group-hover:text-gold transition-all" />
                <span className="text-slate-custom text-xs group-hover:text-white transition-colors font-medium">{area}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-5 mx-auto flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gold bg-gold/10 border border-gold/20 hover:bg-gold/20 transition-all duration-300"
          >
            {showAll ? (
              <>Show Less <HiChevronUp className="w-4 h-4" /></>
            ) : (
              <>View All {allAreas.length} States <HiChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
