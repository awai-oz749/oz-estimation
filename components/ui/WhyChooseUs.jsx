'use client';

import AnimatedSection from './AnimatedSection';
import { WHY_CHOOSE } from '@/lib/constants';
import { HiOutlineShieldCheck, HiOutlineClock, HiOutlineCurrencyDollar, HiOutlineUserGroup, HiOutlineDocumentCheck, HiOutlineTrophy } from 'react-icons/hi2';

const iconMap = {
  0: HiOutlineShieldCheck,
  1: HiOutlineClock,
  2: HiOutlineCurrencyDollar,
  3: HiOutlineUserGroup,
  4: HiOutlineDocumentCheck,
  5: HiOutlineTrophy,
};

export default function WhyChooseUs({ light = false }) {
  return (
    <section className={`relative py-16 md:py-24 overflow-hidden ${light ? 'bg-light' : ''}`}>
      {/* Ambient orb */}
      {!light && <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-wide uppercase bg-gold/10 text-gold border border-gold/20">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            Our Advantages
          </div>
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-4 tracking-tight leading-[1.05] text-navy`}>
            Why Choose Brix Estimation?
          </h2>
          <div className="mb-5 flex justify-center">
            <span className="heading-bar" />
          </div>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-custom">
            Brix Estimation delivers precise, reliable cost estimations that help you win more bids and complete projects on budget.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = iconMap[i] || HiOutlineShieldCheck;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-navy/10 border-l-[3px] border-l-navy rounded-md p-7 md:p-9 h-full transition-all duration-500 hover:translate-y-[-4px] hover:border-l-gold hover:border-navy/20 hover:shadow-xl hover:shadow-navy/5">
                  <div className="w-14 h-14 bg-navy rounded-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight mb-3 text-navy">{item.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed text-slate-custom">{item.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
