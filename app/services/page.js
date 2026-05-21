import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTABanner from '@/components/ui/CTABanner';
import { serviceCategories } from '@/data/services';
import { serviceImages, heroImages } from '@/data/images';
import { HiArrowRight } from 'react-icons/hi2';

export const metadata = {
  title: 'Services — 34+ Construction Estimation Services',
  description: 'Explore 34+ construction cost estimation services: MEP, structural, envelope, interior finishes, sitework & more. ASPE-certified. 24-48 hour delivery.',
  keywords: [
    'construction estimation services', 'MEP estimation', 'structural estimation', 'cost takeoff services',
    'building estimation', 'quantity takeoff', '3D rendering', 'plumbing estimation services',
    'electrical estimation services', 'HVAC estimation', 'concrete estimation services',
    'steel estimation', 'roofing estimation services', 'drywall estimation',
    'flooring estimation', 'painting estimation', 'demolition estimation',
    'earthwork estimation', 'landscaping estimation', 'framing estimation',
    'masonry estimation services', 'carpentry estimation', 'insulation estimation',
    'complete construction estimation', 'all trade estimation', 'CSI division estimation',
  ],
  alternates: { canonical: 'https://ozestimation.com/services/' },
  openGraph: {
    title: 'Estimation Services — All Trades | OZ Estimation',
    description: '8 categories, 34+ specialized services. MEP, structural, envelope, finishes & more. ASPE-certified.',
    url: 'https://ozestimation.com/services/',
    siteName: 'OZ Estimation',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Construction Estimation Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ozestimation',
    title: 'Estimation Services | OZ Estimation',
    description: '34+ specialized estimation services. All CSI divisions. ASPE-certified.',
    images: ['/og-image.png'],
  },
};

const servicesJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Construction Estimation Services',
    description: 'Complete range of 34+ construction cost estimation services organized by trade. All CSI divisions covered.',
    url: 'https://ozestimation.com/services',
    inLanguage: 'en-US',
    mainEntity: { '@id': 'https://ozestimation.com/#servicelist' },
    provider: { '@id': 'https://ozestimation.com/#organization' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozestimation.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ozestimation.com/services' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {servicesJsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[65vh] py-14 md:py-20 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImages.services} alt="Construction services" fill className="object-cover object-[center_35%]" sizes="100vw" quality={90} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <AnimatedSection className="mt-8 max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white mb-6 leading-[1.05] tracking-tight">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed">
              From residential takeoffs to complex commercial estimations, we cover every aspect of construction cost estimation with precision and reliability.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* All Categories */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Service Categories"
            subtitle="Browse our comprehensive range of estimation services organized by trade."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {serviceCategories.map((cat, i) => (
              <ServiceCard
                key={cat.slug}
                title={cat.title}
                description={cat.description}
                href={`/services/${cat.slug}`}
                image={serviceImages[cat.slug]}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed list */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="All Sub-Services"
            subtitle="A complete breakdown of every estimation service we offer."
          />
          <div className="space-y-8">
            {serviceCategories.map((cat, ci) => (
              <AnimatedSection key={cat.slug} delay={ci * 0.05}>
                <div className="bg-white border border-navy/10 shadow-sm rounded-md p-6 md:p-8">
                  <Link href={`/services/${cat.slug}`} className="text-gold font-bold text-xl hover:text-amber transition-colors mb-4 block">
                    {cat.title}
                  </Link>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {cat.services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${cat.slug}/${s.slug}`}
                        className="text-slate-custom text-sm hover:text-navy transition-colors flex items-center gap-2 py-1"
                      >
                        <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
