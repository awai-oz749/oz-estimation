'use client';

import { useState } from 'react';
<<<<<<< HEAD
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
=======
import Button from './Button';
import AnimatedSection from './AnimatedSection';
import { HiOutlinePaperAirplane, HiOutlineCheckCircle, HiOutlineExclamationCircle } from 'react-icons/hi2';

const EMPTY_FORM = { name: '', email: '', phone: '', subject: '', message: '' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d\s\-().]{7,20}$/;

function validateField(name, value) {
  const v = value.trim();
  switch (name) {
    case 'name':
      if (!v) return 'Name is required';
      if (v.length < 2) return 'Name must be at least 2 characters';
      return '';
    case 'email':
      if (!v) return 'Email is required';
      if (!EMAIL_RE.test(v)) return 'Enter a valid email address';
      return '';
    case 'phone':
      if (!v) return 'Phone number is required';
      if (!PHONE_RE.test(v)) return 'Enter a valid phone number';
      return '';
    default:
      return '';
  }
}

function validateAll(formData) {
  const errors = {};
  for (const field of ['name', 'email', 'phone']) {
    const err = validateField(field, formData[field]);
    if (err) errors[field] = err;
  }
  return errors;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverError, setServerError] = useState('');
>>>>>>> c229d964ece9cd1915c267b5f03fbecb9869e79c

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

<<<<<<< HEAD
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
=======
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0] || null;
    if (selected && selected.size > 10 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, plans: 'File must be under 10MB' }));
      setFile(null);
      e.target.value = '';
      return;
    }
    setErrors((prev) => ({ ...prev, plans: '' }));
    setFile(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, phone: true };
    setTouched(allTouched);

    const validationErrors = validateAll(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    setServerError('');

    try {
      const body = new FormData();
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));
      if (file) body.append('plans', file);

      const res = await fetch('/api/contact', { method: 'POST', body });
      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
          setStatus('idle');
          return;
        }
        throw new Error(data.message || 'Submission failed');
      }

      setStatus('success');
      setFormData(EMPTY_FORM);
      setFile(null);
      setTouched({});
      setErrors({});
    } catch (err) {
      setStatus('error');
      setServerError(err.message || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
          <HiOutlineCheckCircle className="w-16 h-16 text-gold" />
          <h3 className="text-2xl font-bold text-navy">Message Sent!</h3>
          <p className="text-slate-custom max-w-sm">Thank you for reaching out. Our team will get back to you within 24–48 hours.</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-2 text-sm font-semibold text-gold underline underline-offset-4 hover:text-amber transition-colors"
          >
            Send another message
          </button>
        </div>
      </AnimatedSection>
    );
  }

  const fieldClass = (name) =>
    `w-full bg-navy/[0.03] border rounded-xl px-4 py-3.5 text-navy placeholder-slate-custom/40 outline-none transition-all text-sm md:text-base backdrop-blur-sm focus:ring-1 ${
      errors[name]
        ? 'border-red-400 focus:border-red-400 focus:ring-red-200'
        : 'border-navy/15 focus:border-gold/50 focus:ring-gold/30 focus:bg-navy/[0.05]'
    }`;

  return (
    <AnimatedSection>
      <form onSubmit={handleSubmit} noValidate className="space-y-6">

        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-custom mb-2.5">Your Name *</label>
            <input
              id="name" name="name" type="text" value={formData.name}
              onChange={handleChange} onBlur={handleBlur}
              className={fieldClass('name')} placeholder="John Doe"
            />
            {errors.name && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><HiOutlineExclamationCircle className="w-3.5 h-3.5 flex-shrink-0" />{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-custom mb-2.5">Your Email *</label>
            <input
              id="email" name="email" type="email" value={formData.email}
              onChange={handleChange} onBlur={handleBlur}
              className={fieldClass('email')} placeholder="john@company.com"
            />
            {errors.email && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><HiOutlineExclamationCircle className="w-3.5 h-3.5 flex-shrink-0" />{errors.email}</p>}
          </div>
        </div>

        {/* Phone + Subject */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-custom mb-2.5">Phone Number *</label>
            <input
              id="phone" name="phone" type="tel" value={formData.phone}
              onChange={handleChange} onBlur={handleBlur}
              className={fieldClass('phone')} placeholder="+1 (555) 000-0000"
            />
            {errors.phone && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><HiOutlineExclamationCircle className="w-3.5 h-3.5 flex-shrink-0" />{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-custom mb-2.5">Subject</label>
            <input
              id="subject" name="subject" type="text" value={formData.subject}
              onChange={handleChange}
              className={fieldClass('subject')} placeholder="Project Type"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-custom mb-2.5">Message</label>
          <textarea
            id="message" name="message" rows={4} value={formData.message}
            onChange={handleChange}
            className={fieldClass('message')} placeholder="Tell us about your project..."
            style={{ resize: 'none' }}
          />
        </div>

        {/* File Upload (optional) */}
        <div>
          <label htmlFor="plans" className="block text-sm font-medium text-slate-custom mb-2">
            Upload Plans <span className="text-slate-custom/50 font-normal">(optional — PDF, DWG, JPG, PNG, max 10MB)</span>
          </label>
          <input
            id="plans" name="plans" type="file" accept=".pdf,.dwg,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="w-full text-slate-custom text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gold/10 file:text-gold hover:file:bg-gold/20 file:cursor-pointer cursor-pointer"
          />
          {file && <p className="mt-1.5 text-xs text-green-600">Selected: {file.name}</p>}
          {errors.plans && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><HiOutlineExclamationCircle className="w-3.5 h-3.5 flex-shrink-0" />{errors.plans}</p>}
        </div>

        {/* Server error */}
        {status === 'error' && serverError && (
          <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <HiOutlineExclamationCircle className="w-4 h-4 flex-shrink-0" />
            {serverError}
          </div>
        )}

        <Button type="submit" variant="primary" className="w-full md:w-auto" disabled={status === 'loading'}>
          {status === 'loading'
            ? 'Sending…'
            : <><HiOutlinePaperAirplane className="w-4 h-4" /> Send Message</>}
        </Button>
      </form>
    </AnimatedSection>
>>>>>>> c229d964ece9cd1915c267b5f03fbecb9869e79c
  );
}
