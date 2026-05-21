import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import AccordionItem from '@/components/ui/AccordionItem';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTABanner from '@/components/ui/CTABanner';
import { generalFaqs } from '@/data/faqs';
import { heroImages } from '@/data/images';

export const metadata = {
  title: 'FAQ — Pricing, Process & Turnaround Times',
  description: 'Answers to common questions about construction cost estimation: 24-48 hour turnaround, 98% accuracy, ZIP code-based pricing, and CSI division coverage.',
  keywords: [
    'construction estimation FAQ', 'estimation questions', 'cost estimation help',
    'how estimation works', 'estimation pricing', 'construction estimate turnaround time',
    'estimation accuracy', 'how to get construction estimate', 'construction bid help',
    'estimation process explained', 'construction takeoff FAQ', 'free estimate questions',
    'quantity takeoff process', 'material takeoff FAQ', 'cost estimation methodology',
  ],
  alternates: { canonical: 'https://ozestimation.com/faqs/' },
  openGraph: {
    title: 'Construction Estimation FAQ | OZ Estimation',
    description: 'Pricing, turnaround, accuracy, and process — everything you need to know about our estimation services.',
    url: 'https://ozestimation.com/faqs/',
    siteName: 'OZ Estimation',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Construction Estimation FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ozestimation',
    title: 'Estimation FAQ | OZ Estimation',
    description: '24-48 hour turnaround. 98% accuracy. All trades covered.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  url: 'https://ozestimation.com/faqs',
  name: 'Construction Estimation FAQ',
  description: 'Frequently asked questions about construction cost estimation services, pricing, process, and turnaround time.',
  mainEntity: generalFaqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozestimation.com' },
    { '@type': 'ListItem', position: 2, name: 'FAQs', item: 'https://ozestimation.com/faqs' },
  ],
};

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[55vh] md:min-h-[60vh] py-14 md:py-20 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImages.faqs} alt="FAQs" fill className="object-cover object-[center_35%]" sizes="100vw" quality={90} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          <AnimatedSection className="mt-8 max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white mb-6 leading-[1.05] tracking-tight">
              Frequently Asked <span className="text-gold">Questions</span>
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed">
              Everything you need to know about our estimation services, process, and how we can help your construction projects succeed.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="General Questions" subtitle="Common questions about our estimation services." />
          <div>
            {generalFaqs.map((faq, i) => (
              <AccordionItem key={i} question={faq.q} answer={faq.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Still Have Questions?"
        subtitle="Our team is happy to help. Reach out and we'll get back to you within 24 hours."
        buttonText="Contact Us"
        buttonHref="/get-estimation"
      />
    </>
  );
}
