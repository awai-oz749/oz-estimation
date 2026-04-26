import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTABanner from '@/components/ui/CTABanner';
import WhyChooseUs from '@/components/ui/WhyChooseUs';
import WorkProcess from '@/components/ui/WorkProcess';
import AreaGrid from '@/components/ui/AreaGrid';
import Button from '@/components/ui/Button';
import { getServiceBySlug, getCategoryBySlug, getAllServiceParams } from '@/data/services';
import { subServiceImages } from '@/data/images';
import { HiOutlineCheckCircle, HiArrowRight } from 'react-icons/hi2';

export async function generateStaticParams() {
  return getAllServiceParams();
}

export async function generateMetadata({ params }) {
  const { category, service } = await params;
  const s = getServiceBySlug(category, service);
  const cat = getCategoryBySlug(category);
  if (!s) return {};
  const catName = cat ? cat.title : '';
  return {
    title: `${s.title} — Accurate Cost Estimates`,
    description: `${s.description.slice(0, 80)} ASPE-certified ${s.title.toLowerCase()} with detailed takeoffs & cost breakdowns. Free quotes in 24-48 hours.`,
    keywords: [
      s.title.toLowerCase(),
      `${s.title.toLowerCase()} services`,
      `${s.title.toLowerCase()} cost`,
      `${s.title.toLowerCase()} company`,
      `${s.title.toLowerCase()} near me`,
      `professional ${s.title.toLowerCase()}`,
      `${s.title.toLowerCase()} contractor`,
      `${s.title.toLowerCase()} takeoff`,
      catName.toLowerCase(),
      `${catName.toLowerCase()} services`,
      'construction estimation',
      'quantity takeoff',
      'material takeoff',
      'cost breakdown',
      'bid support',
    ],
    alternates: { canonical: `https://ozestimations.com/services/${category}/${service}/` },
    openGraph: {
      title: `${s.title} | OZ Estimation`,
      description: `Professional ${s.title.toLowerCase()}. ASPE-certified. Free quotes in 24-48 hours.`,
      url: `https://ozestimations.com/services/${category}/${service}/`,
      siteName: 'OZ Estimation',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${s.title} Services` }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ozestimation',
      title: `${s.title} | OZ Estimation`,
      description: `Professional ${s.title.toLowerCase()}. 98% accuracy. Free quotes.`,
      images: ['/og-image.png'],
    },
  };
}

export default async function ServicePage({ params }) {
  const { category, service } = await params;
  const s = getServiceBySlug(category, service);
  const cat = getCategoryBySlug(category);
  if (!s || !cat) notFound();

  const otherServices = cat.services.filter(svc => svc.slug !== service).slice(0, 4);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    description: s.description,
    url: `https://ozestimations.com/services/${category}/${service}`,
    image: 'https://ozestimations.com/og-image.png',
    category: cat.title,
    serviceType: s.title,
    provider: {
      '@type': 'Organization',
      name: 'OZ Estimation',
      url: 'https://ozestimations.com',
    },
    areaServed: { '@type': 'Country', name: 'United States' },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free initial estimation quote',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozestimations.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ozestimations.com/services' },
      { '@type': 'ListItem', position: 3, name: cat.title, item: `https://ozestimations.com/services/${category}` },
      { '@type': 'ListItem', position: 4, name: s.title, item: `https://ozestimations.com/services/${category}/${service}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[65vh] py-14 md:py-20 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={subServiceImages[service] || subServiceImages['subcontractor-estimation']} alt={s.title} fill className="object-cover object-[center_35%]" sizes="100vw" quality={90} />
          <div className="absolute inset-0 bg-navy/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/30 to-navy/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <AnimatedSection className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-gold text-sm font-medium mb-4">
              <Link href={`/services/${category}`} className="hover:text-amber transition-colors">{cat.title}</Link>
              <span>/</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {s.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-gold">{s.title.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-slate-custom text-base md:text-lg leading-relaxed">{s.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Service Overview</h2>
                <p className="text-slate-custom leading-relaxed mb-6">{s.longDescription}</p>
                <p className="text-slate-custom leading-relaxed mb-6">
                  At OZ Estimation, our team of experienced professionals uses the latest software tools and industry best practices to deliver comprehensive {s.title.toLowerCase()} that meet the highest standards of accuracy and detail. Whether you need a quick preliminary estimate or a full detailed takeoff, we have the expertise to help.
                </p>
                <p className="text-slate-custom leading-relaxed">
                  Our estimates include detailed material quantities, labor costs, equipment requirements, and all associated expenses to ensure your bids are competitive and your projects stay on budget.
                </p>
              </AnimatedSection>

              {/* Features */}
              <AnimatedSection className="mt-12">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">What&apos;s Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {s.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3 bg-navy-light border border-white/5 rounded-xl p-4">
                      <HiOutlineCheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-slate-custom text-sm md:text-base">{f}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Benefits */}
              <AnimatedSection className="mt-12">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Win more bids with accurate pricing',
                    'Reduce cost overruns and change orders',
                    'Save time on manual takeoffs',
                    'Professional reports for stakeholders',
                    'Quick turnaround in 24-48 hours',
                    'Dedicated estimator for your project',
                  ].map((b, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-custom text-sm md:text-base">
                      <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div>
              <AnimatedSection delay={0.2}>
                <div className="bg-navy-light border border-white/5 rounded-2xl p-6 sticky top-24">
                  <h3 className="text-white font-bold text-lg mb-4">Get a Free Quote</h3>
                  <p className="text-slate-custom text-sm mb-6">
                    Upload your plans and receive a detailed {s.title.toLowerCase()} within 24-48 hours.
                  </p>
                  <Button href="/get-estimation" variant="primary" className="w-full mb-6">
                    Request Estimation <HiArrowRight className="w-4 h-4" />
                  </Button>
                  <div className="border-t border-white/5 pt-6">
                    <h4 className="text-white font-semibold text-sm mb-3">Related Services</h4>
                    <ul className="space-y-2">
                      {otherServices.map((os) => (
                        <li key={os.slug}>
                          <Link
                            href={`/services/${category}/${os.slug}`}
                            className="text-slate-custom text-sm hover:text-gold transition-colors flex items-center gap-2"
                          >
                            <span className="w-1 h-1 bg-gold rounded-full" /> {os.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <WorkProcess />
      <WhyChooseUs />
      <AreaGrid />
      <CTABanner />
    </>
  );
}
