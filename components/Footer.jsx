import Link from 'next/link';
import { CONTACT, SITE, SOCIAL_LINKS } from '@/lib/constants';
import { serviceCategories } from '@/data/services';
import { HiEnvelope, HiMapPin, HiClock, HiArrowRight, HiOutlineShieldCheck, HiOutlineBolt, HiOutlineTrophy } from 'react-icons/hi2';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from 'react-icons/fa';
import Logo from './Logo';

const socials = [
  { href: SOCIAL_LINKS.facebook, label: 'Facebook', Icon: FaFacebookF },
  { href: SOCIAL_LINKS.twitter, label: 'Twitter', Icon: FaTwitter },
  { href: SOCIAL_LINKS.instagram, label: 'Instagram', Icon: FaInstagram },
  { href: SOCIAL_LINKS.youtube, label: 'YouTube', Icon: FaYoutube },
  { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', Icon: FaLinkedinIn },
];

const trustBadges = [
  { Icon: HiOutlineShieldCheck, label: 'ASPE Certified Estimators' },
  { Icon: HiOutlineBolt, label: '24 \u2013 48 Hour Turnaround' },
  { Icon: HiOutlineTrophy, label: '5,000+ Projects Delivered' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#1A2540' }}>
      {/* Top gold accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(251,185,35,0.7) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* CTA Strip */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white leading-[1.05]">
              Ready to win your next bid?
            </h3>
            <p className="text-white/70 text-sm md:text-base mt-2">Get a precise, ASPE-grade estimate delivered in 24 &ndash; 48 hours.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Email us"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 text-gold hover:bg-gold hover:text-black hover:border-gold transition-all duration-300"
            >
              <HiEnvelope className="w-5 h-5" />
            </a>
            <Link
              href="/get-estimation"
              className="inline-flex items-center gap-2 bg-gold text-black font-bold text-sm uppercase tracking-wide px-6 py-3.5 rounded-md hover:bg-amber transition-all duration-300 shadow-md shadow-gold/30"
            >
              Get An Estimate <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Badges Row */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {trustBadges.map(({ Icon, label }) => (
            <div key={label} className="flex items-center justify-center sm:justify-start gap-3 text-white/85 text-sm">
              <span className="w-9 h-9 rounded-md bg-gold/15 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                <Icon className="w-4 h-4" />
              </span>
              <span className="font-semibold tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <Logo dark />
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-6 max-w-sm">
              {SITE.description}
            </p>
            <div className="flex items-center gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-gold hover:text-black hover:border-gold transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-2">Our Services</h3>
            <span className="block h-[2px] w-10 bg-gold mb-5" />
            <ul className="space-y-2.5">
              {serviceCategories.slice(0, 8).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/services/${cat.slug}`}
                    className="text-white/65 text-sm hover:text-gold transition-all hover:translate-x-1 inline-block"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-2">Company</h3>
            <span className="block h-[2px] w-10 bg-gold mb-5" />
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-white/65 hover:text-gold transition-all hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link href="/about" className="text-white/65 hover:text-gold transition-all hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link href="/services" className="text-white/65 hover:text-gold transition-all hover:translate-x-1 inline-block">All Services</Link></li>
              <li><Link href="/get-estimation" className="text-white/65 hover:text-gold transition-all hover:translate-x-1 inline-block">Get Estimation</Link></li>
              <li><Link href="/faqs" className="text-white/65 hover:text-gold transition-all hover:translate-x-1 inline-block">FAQs</Link></li>
              <li><Link href="/privacy-policy" className="text-white/65 hover:text-gold transition-all hover:translate-x-1 inline-block">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-2">Get In Touch</h3>
            <span className="block h-[2px] w-10 bg-gold mb-5" />
            <ul className="space-y-4 text-sm">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-3 text-white/75 hover:text-gold transition-colors group">
                  <span className="w-8 h-8 rounded-md bg-gold/15 border border-gold/25 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold group-hover:text-black transition-all">
                    <HiEnvelope className="w-4 h-4" />
                  </span>
                  <span className="pt-1.5">{CONTACT.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <span className="w-8 h-8 rounded-md bg-gold/15 border border-gold/25 flex items-center justify-center text-gold flex-shrink-0">
                  <HiMapPin className="w-4 h-4" />
                </span>
                <span className="pt-1">{CONTACT.address.full}</span>
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <span className="w-8 h-8 rounded-md bg-gold/15 border border-gold/25 flex items-center justify-center text-gold flex-shrink-0">
                  <HiClock className="w-4 h-4" />
                </span>
                <span className="pt-1">{CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Strip */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-gold text-[11px] font-bold uppercase tracking-[0.2em]">Accepted Payments</span>
          <div className="flex items-center gap-2">
            <div className="bg-white rounded px-2.5 py-1.5 flex items-center justify-center h-9"><FaCcVisa className="w-7 h-7 text-[#1A1F71]" /></div>
            <div className="bg-white rounded px-2.5 py-1.5 flex items-center justify-center h-9"><FaCcMastercard className="w-7 h-7 text-[#EB001B]" /></div>
            <div className="bg-white rounded px-2.5 py-1.5 flex items-center justify-center h-9"><FaCcAmex className="w-7 h-7 text-[#006FCF]" /></div>
            <div className="bg-white rounded px-2.5 py-1.5 flex items-center justify-center h-9"><FaCcPaypal className="w-7 h-7 text-[#003087]" /></div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <span className="text-white/15">|</span>
            <Link href="/faqs" className="hover:text-gold transition-colors">FAQs</Link>
            <span className="text-white/15">|</span>
            <span className="text-gold/70 font-semibold uppercase tracking-wider text-[10px]">Built with Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
