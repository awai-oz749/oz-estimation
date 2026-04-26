import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Breadcrumb from '@/components/ui/Breadcrumb';
import QuoteForm from '@/components/ui/QuoteForm';
import ContactCard from '@/components/ui/ContactCard';
import CTABanner from '@/components/ui/CTABanner';
import { CONTACT } from '@/lib/constants';
import { heroImages } from '@/data/images';
import { HiOutlineEnvelope, HiOutlineMapPin, HiOutlineClock } from 'react-icons/hi2';

export const metadata = {
  title: 'Get Free Estimation — Upload Plans, Quote in 24-48h',
  description: 'Upload your blueprints and get a free construction cost estimation in 24-48 hours. Detailed takeoffs, labor analysis & cost breakdowns. 98% accuracy. No obligation.',
  keywords: [
    'free construction estimate', 'get cost estimation', 'construction quote',
    'free bid estimate', 'upload plans for estimate', 'request construction quote',
    'free takeoff services', 'construction estimate online', 'get blueprint estimate',
    'free project estimate', 'construction cost quote free', 'submit plans for estimate',
    'online construction estimator', 'request bid estimate', 'free quantity takeoff',
    'construction plan review', 'free material takeoff', 'estimate my project',
  ],
  alternates: { canonical: 'https://ozestimations.com/get-estimation/' },
  openGraph: {
    title: 'Get Free Construction Estimation | OZ Estimation',
    description: 'Upload plans, get a free detailed cost estimation in 24-48 hours. No obligation. 98% accuracy.',
    url: 'https://ozestimations.com/get-estimation/',
    siteName: 'OZ Estimation',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Get Free Construction Estimation' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ozestimation',
    title: 'Free Estimation | OZ Estimation',
    description: 'Upload plans. Detailed cost estimate in 24-48 hours. Free. 98% accuracy.',
    images: ['/og-image.png'],
  },
};

const estimationJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Get Free Construction Cost Estimation',
    description: 'Upload your construction plans and get a free, detailed cost estimation within 24-48 hours.',
    url: 'https://ozestimations.com/get-estimation',
    mainEntity: {
      '@type': 'Service',
      name: 'Free Construction Cost Estimation',
      description: 'Professional construction cost estimation with detailed material takeoffs, labor analysis, and comprehensive cost breakdowns.',
      provider: { '@id': 'https://ozestimations.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United States' },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free initial construction cost estimation',
        availability: 'https://schema.org/InStock',
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozestimations.com' },
      { '@type': 'ListItem', position: 2, name: 'Get Free Estimation', item: 'https://ozestimations.com/get-estimation' },
    ],
  },
];

export default function GetEstimationPage() {
  return (
    <>
      {estimationJsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      {/* Hero */}
      <section className="relative min-h-[55vh] md:min-h-[60vh] py-14 md:py-20 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImages.contact} alt="Get estimation" fill className="object-cover object-[center_35%]" sizes="100vw" quality={90} />
          <div className="absolute inset-0 bg-navy/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/30 to-navy/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <AnimatedSection className="mt-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get Your <span className="text-gold">Free Estimation</span>
            </h1>
            <p className="text-slate-custom text-base md:text-lg leading-relaxed">
              Upload your construction plans and receive a detailed, accurate cost estimation within 24-48 hours. No obligation, completely free.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Contact */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Request a Quote</h2>
                <p className="text-slate-custom mb-8">Fill out the form below and our team will get back to you promptly.</p>
              </AnimatedSection>
              <QuoteForm />
            </div>

            {/* Contact Sidebar */}
            <div className="space-y-4">
              <ContactCard icon={<HiOutlineEnvelope />} label="Email Us">
                <a href={`mailto:${CONTACT.email}`} className="hover:text-gold transition-colors">{CONTACT.email}</a>
              </ContactCard>
              <ContactCard icon={<HiOutlineMapPin />} label="Visit Us">
                <p>{CONTACT.address.full}</p>
              </ContactCard>
              <ContactCard icon={<HiOutlineClock />} label="Working Hours">
                <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
                <p>Sat: 9:00 AM – 2:00 PM</p>
                <p>Sun: Closed</p>
              </ContactCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
