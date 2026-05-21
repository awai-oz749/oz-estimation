'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';

export default function ServiceCard({ title, description, href, image, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  const card = (
    <div className="group relative edge-card overflow-hidden h-full flex flex-col hover:translate-y-[-3px]">
      {image && (
        <div className="relative w-full h-52 sm:h-56 md:h-60 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          {/* Gold accent bar at bottom of image */}
          <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gold group-hover:w-full transition-all duration-500 ease-out" />
        </div>
      )}
      <div className="relative p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-navy mb-2 group-hover:text-amber transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-custom text-xs sm:text-sm leading-relaxed flex-grow mb-4">
          {description}
        </p>
        <div className="flex items-center gap-2 text-amber text-xs sm:text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
          Learn More <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );

  const wrappedCard = shouldReduceMotion ? (
    card
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.03 }}
      className="h-full"
    >
      {card}
    </motion.div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{wrappedCard}</Link>;
  }

  return wrappedCard;
}
