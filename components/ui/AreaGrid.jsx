'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { areas, allAreas } from '@/data/areas';
import { HiOutlineMapPin, HiChevronDown, HiChevronUp } from 'react-icons/hi2';

const MOBILE_LIMIT = 14;

export default function AreaGrid() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-gold tracking-tight leading-[1.05]">
            Area We Served
          </h2>
          <div className="mt-4 flex justify-center">
            <span className="heading-bar" />
          </div>
        </AnimatedSection>

        {/* Desktop: 7 columns matching reference */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-7 gap-x-8 gap-y-1">
          {areas.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-3">
              {column.map((state, i) => (
                <AnimatedSection key={state} delay={(colIndex * column.length + i) * 0.015}>
                  <div className="flex items-center gap-2.5 group cursor-default">
                    <HiOutlineMapPin className="w-5 h-5 text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-navy text-base font-bold group-hover:text-amber transition-colors">
                      {state}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile: 2 column compact list */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {(showAll ? allAreas : allAreas.slice(0, MOBILE_LIMIT)).map((state) => (
              <div key={state} className="flex items-center gap-2">
                <HiOutlineMapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-navy text-sm font-bold">{state}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-bold uppercase tracking-wide text-black bg-gold hover:bg-amber transition-all duration-300"
            >
              {showAll ? (
                <>Show Less <HiChevronUp className="w-4 h-4" /></>
              ) : (
                <>View All {allAreas.length} States <HiChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
