'use client';

import { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

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
  );
}
