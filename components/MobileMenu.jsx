'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi2';
import { navigation } from '@/data/navigation';

export default function MobileMenu({ isOpen, onClose }) {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] lg:hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white backdrop-blur-2xl border-l border-navy/10 overflow-y-auto shadow-2xl shadow-navy/20"
          >
            <div className="p-6 pt-20">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="mb-2"
                >
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpenCategory(openCategory === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between py-3 text-navy font-semibold text-base hover:text-amber transition-colors"
                      >
                        {item.label}
                        <motion.span
                          animate={{ rotate: openCategory === item.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <HiChevronDown className="w-4 h-4" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {openCategory === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-3 space-y-1">
                              {item.children.map((cat) => (
                                <div key={cat.href} className="mb-3">
                                  <Link
                                    href={cat.href}
                                    onClick={onClose}
                                    className="text-amber text-sm font-semibold block py-1"
                                  >
                                    {cat.label}
                                  </Link>
                                  {cat.children && (
                                    <div className="pl-3 space-y-0.5">
                                      {cat.children.map((sub) => (
                                        <Link
                                          key={sub.href}
                                          href={sub.href}
                                          onClick={onClose}
                                          className="text-navy/70 text-xs block py-1 hover:text-amber transition-colors"
                                        >
                                          {sub.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block py-3 text-navy font-semibold text-base hover:text-amber transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <div className="mt-8 pt-6 border-t border-navy/10">
                <Link
                  href="/get-estimation"
                  onClick={onClose}
                  className="block w-full text-center bg-gold text-black font-bold uppercase tracking-wide py-3.5 rounded-md hover:bg-amber transition-all shadow-md shadow-gold/20"
                >
                  Get An Estimate
                </Link>
              </div>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
