'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { HiOutlinePaperAirplane, HiCheckCircle, HiExclamationTriangle } from 'react-icons/hi2';

const inputClasses = 'w-full bg-navy/[0.03] border border-navy/15 rounded-xl px-4 py-3.5 text-navy placeholder-slate-custom/40 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 focus:bg-navy/[0.05] outline-none transition-all text-sm md:text-base backdrop-blur-sm';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const field = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function QuoteForm() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const fieldProps = shouldReduceMotion ? {} : { variants: field };
  const focusLift = shouldReduceMotion ? {} : { whileFocus: { scale: 1.01 } };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      variants={shouldReduceMotion ? undefined : container}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div {...fieldProps}>
          <label htmlFor="name" className="block text-sm font-medium text-slate-custom mb-2.5">Your Name *</label>
          <motion.input
            {...focusLift}
            id="name" name="name" type="text" required value={formData.name} onChange={handleChange}
            className={inputClasses}
            placeholder="John Doe"
          />
        </motion.div>
        <motion.div {...fieldProps}>
          <label htmlFor="email" className="block text-sm font-medium text-slate-custom mb-2.5">Your Email *</label>
          <motion.input
            {...focusLift}
            id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
            className={inputClasses}
            placeholder="john@company.com"
          />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div {...fieldProps}>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-custom mb-2.5">Phone Number *</label>
          <motion.input
            {...focusLift}
            id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange}
            className={inputClasses}
            placeholder="+1 (555) 000-0000"
          />
        </motion.div>
        <motion.div {...fieldProps}>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-custom mb-2.5">Subject</label>
          <motion.input
            {...focusLift}
            id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange}
            className={inputClasses}
            placeholder="Project Type"
          />
        </motion.div>
      </div>
      <motion.div {...fieldProps}>
        <label htmlFor="message" className="block text-sm font-medium text-slate-custom mb-2.5">Message</label>
        <motion.textarea
          {...focusLift}
          id="message" name="message" rows={4} value={formData.message} onChange={handleChange}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your project..."
        />
      </motion.div>
      <motion.div {...fieldProps}>
        <label htmlFor="plans" className="block text-sm font-medium text-slate-custom mb-2">Upload Plans (PDF)</label>
        <input
          id="plans" name="plans" type="file" accept=".pdf,.dwg,.jpg,.png"
          className="w-full text-slate-custom text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gold/10 file:text-gold hover:file:bg-gold/20 file:cursor-pointer cursor-pointer"
        />
      </motion.div>
      <motion.div {...fieldProps} className="space-y-4">
        <motion.button
          type="submit"
          disabled={status === 'sending'}
          whileHover={shouldReduceMotion || status === 'sending' ? undefined : { scale: 1.03, y: -2 }}
          whileTap={shouldReduceMotion || status === 'sending' ? undefined : { scale: 0.97 }}
          className="relative overflow-hidden inline-flex items-center justify-center gap-2 font-bold rounded-xl cursor-pointer text-sm md:text-base bg-gold text-black px-7 py-3.5 hover:bg-amber hover:shadow-xl hover:shadow-gold/30 transition-colors duration-300 w-full md:w-auto min-w-[190px] disabled:opacity-80 disabled:cursor-wait"
        >
          <AnimatePresence mode="wait" initial={false}>
            {status === 'sending' ? (
              <motion.span
                key="sending"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2"
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                  className="w-4 h-4 rounded-full border-2 border-black/30 border-t-black"
                />
                Sending...
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2"
              >
                <HiOutlinePaperAirplane className="w-4 h-4" /> Send Message
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        <AnimatePresence>
          {status === 'sent' && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl px-4 py-3.5 text-sm font-medium"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.15 }}
              >
                <HiCheckCircle className="w-5 h-5 text-emerald-600" />
              </motion.span>
              Message sent successfully. We will get back to you within 24 hours.
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, x: shouldReduceMotion ? 0 : [0, -6, 6, -4, 4, 0] }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-800 rounded-xl px-4 py-3.5 text-sm font-medium"
            >
              <HiExclamationTriangle className="w-5 h-5 text-red-600" />
              Something went wrong. Please try again or email us directly.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.form>
  );
}
