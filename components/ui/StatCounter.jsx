'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

export default function StatCounter({ value, suffix = '', label, dark = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setCount(value);
      return;
    }

    let start = 0;
    const end = value;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / end), 16);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / stepTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, shouldReduceMotion]);

  return (
    <div ref={ref} className="text-center p-4 md:p-6">
      <div className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 text-gradient-gold drop-shadow-[0_0_20px_rgba(251,185,35,0.25)]">
        {count}{suffix}
      </div>
      <div className={`${dark ? 'text-white/80' : 'text-slate-custom'} text-xs md:text-sm font-semibold uppercase tracking-[0.15em]`}>{label}</div>
    </div>
  );
}
