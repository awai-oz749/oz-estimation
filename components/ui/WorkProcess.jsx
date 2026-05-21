'use client';

import AnimatedSection from './AnimatedSection';
import { WORK_PROCESS } from '@/lib/constants';

export default function WorkProcess({ light = false }) {
  return (
    <section className={`relative py-16 md:py-24 overflow-hidden ${light ? 'bg-light' : ''}`}>
      {!light && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-light-bg via-white to-light-bg" />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />
        </>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-wide uppercase bg-gold/10 text-gold border border-gold/20">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            Our Process
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight ${light ? 'text-navy' : 'text-navy'}`}>
            How It Works
          </h2>
          <p className={`max-w-2xl mx-auto text-base md:text-lg ${light ? 'text-navy/70' : 'text-slate-custom'}`}>
            Our streamlined process ensures accurate estimations delivered on time, every time.
          </p>
          <div className="mt-6 flex items-center gap-1 justify-center">
            <div className="h-[2px] w-8 bg-gold/30 rounded-full" />
            <div className="h-[2px] w-16 bg-gradient-to-r from-gold to-amber rounded-full" />
            <div className="h-[2px] w-8 bg-gold/30 rounded-full" />
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {WORK_PROCESS.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className={`relative rounded-md p-7 md:p-9 h-full text-center transition-all duration-500 hover:translate-y-[-4px] ${
                light ? 'bg-white border border-navy/10 hover:shadow-xl' : 'glass-card hover:glow-gold'
              }`}>
                {/* Step number */}
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-amber/10 rounded-md flex items-center justify-center mx-auto mb-6">
                  <span className="text-gradient-gold text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className={`text-lg font-bold mb-3 ${light ? 'text-navy' : 'text-navy'}`}>{step.title}</h3>
                <p className={`text-sm md:text-base leading-relaxed ${light ? 'text-navy/70' : 'text-slate-custom'}`}>{step.desc}</p>
                {/* Connector arrow */}
                {i < WORK_PROCESS.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 text-gold/30 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
