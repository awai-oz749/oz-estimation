'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBars3, HiXMark, HiChevronDown, HiEnvelope, HiChevronRight } from 'react-icons/hi2';
import { navigation } from '@/data/navigation';
import { CONTACT } from '@/lib/constants';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const pathname = usePathname();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setActiveCategory(null);
  }, [pathname]);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setActiveCategory(null);
    }, 200);
  };

  // Get the Services nav item
  const servicesNav = navigation.find(n => n.children);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-navy-dark via-navy-light to-navy-dark border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 text-xs text-slate-custom">
          <div className="flex items-center gap-6">
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <HiEnvelope className="w-3 h-3 text-gold/60" /> {CONTACT.email}
            </a>
          </div>
          <div className="shimmer-text font-semibold tracking-wide">Professional Construction Cost Estimation Services</div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-navy/80 backdrop-blur-2xl shadow-2xl shadow-black/30 border-b border-white/[0.06]' 
            : 'bg-navy/40 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children ? handleMouseEnter(item.label) : null}
                  onMouseLeave={item.children ? handleMouseLeave : undefined}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                        ? 'text-gold'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {item.children && <HiChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />}
                  </Link>
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/get-estimation"
                className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-gold to-amber text-navy font-bold text-sm px-6 py-2.5 rounded-xl hover:from-amber hover:to-gold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/25 shimmer-btn"
              >
                Get Free Quote
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-white hover:text-gold transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Dropdown — Two-panel layout: categories left, sub-services right */}
        <AnimatePresence>
          {servicesNav && openDropdown === servicesNav.label && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block absolute left-0 right-0 top-full z-50"
              onMouseEnter={() => handleMouseEnter(servicesNav.label)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
                <div className="bg-navy-light rounded-2xl shadow-2xl shadow-black/60 border border-white/[0.08] overflow-hidden">
                  <div className="flex">
                    {/* Left Panel — Category list */}
                    <div className="w-64 flex-shrink-0 bg-navy-dark/50 border-r border-white/[0.06] py-3">
                      {servicesNav.children.map((category) => (
                        <Link
                          key={category.label}
                          href={category.href}
                          className={`flex items-center justify-between px-5 py-2.5 text-sm font-medium transition-all ${
                            activeCategory === category.label
                              ? 'text-gold bg-gold/[0.08] border-r-2 border-gold'
                              : 'text-white/80 hover:text-gold hover:bg-white/[0.03]'
                          }`}
                          onMouseEnter={() => setActiveCategory(category.label)}
                        >
                          {category.label}
                          {category.children && <HiChevronRight className="w-3 h-3 opacity-40" />}
                        </Link>
                      ))}
                    </div>

                    {/* Right Panel — Sub-services for active category */}
                    <div className="flex-1 p-6 min-h-[280px] bg-navy-light">
                      {activeCategory ? (
                        (() => {
                          const cat = servicesNav.children.find(c => c.label === activeCategory);
                          if (!cat) return null;
                          return (
                            <div>
                              <Link href={cat.href} className="text-gold font-bold text-base hover:text-amber transition-colors mb-4 block">
                                {cat.label} →
                              </Link>
                              {cat.children ? (
                                <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                                  {cat.children.map((sub) => (
                                    <Link
                                      key={sub.href}
                                      href={sub.href}
                                      className="text-white/70 text-sm hover:text-gold py-1.5 transition-colors hover:translate-x-1 inline-block"
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              ) : (
                                <p className="text-slate-custom text-sm">View our {cat.label.toLowerCase()} services.</p>
                              )}
                            </div>
                          );
                        })()
                      ) : (
                        <div className="flex items-center justify-center h-full text-slate-custom/50 text-sm">
                          <p>Hover over a category to see services</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom bar */}
                  <div className="border-t border-white/[0.06] px-6 py-3 flex items-center justify-between bg-navy-dark/40">
                    <span className="text-slate-custom/60 text-xs">34+ specialized estimation services</span>
                    <Link href="/services" className="text-gold text-xs font-semibold hover:text-amber transition-colors">
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
