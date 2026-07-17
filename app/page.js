import HomeContent from '@/components/HomeContent';

export const metadata = {
  title: 'Brix Estimation | Construction Cost Estimation USA',
  description: 'Accurate construction cost estimation for residential, commercial & industrial projects. Trusted by 1,000+ contractors. ASPE-certified. 24-48 hour quotes.',
  keywords: [
    'construction cost estimation', 'cost estimator', 'quantity takeoff', 'material takeoff',
    'construction bidding', 'contractor estimation', 'residential estimation', 'commercial estimation',
    'bid estimation services', 'free construction estimate', 'construction cost calculator',
    'construction takeoff company', 'outsource estimation', 'construction estimating firm',
    'cost estimation near me', 'construction bid support', 'project cost estimation',
    'building cost estimator', 'blueprint takeoff services', 'plan takeoff',
    'MEP estimation services', 'structural estimation services', 'roofing estimation',
    'drywall estimation', 'concrete estimation', 'electrical estimation cost',
  ],
  alternates: {
    canonical: 'https://brixestimation.com/',
  },
  openGraph: {
    title: 'Brix Estimation | Construction Cost Estimation Services',
    description: 'Accurate construction cost estimation for all project types. 5,000+ projects, 98% accuracy, ASPE-certified.',
    url: 'https://brixestimation.com/',
    siteName: 'Brix Estimation',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Brix Estimation - Construction Cost Estimation Services in USA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@brixestimation',
    creator: '@brixestimation',
    title: 'Brix Estimation | Construction Cost Estimation',
    description: '5,000+ projects. 98% accuracy. ASPE-certified. Free estimates in 24-48 hours.',
    images: ['/og-image.png'],
  },
};

const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://brixestimation.com/#homepage',
    url: 'https://brixestimation.com/',
    name: 'Brix Estimation | Construction Cost Estimation USA',
    description: 'Accurate construction cost estimation for residential, commercial & industrial projects across the USA.',
    isPartOf: { '@id': 'https://brixestimation.com/#website' },
    about: { '@id': 'https://brixestimation.com/#organization' },
    primaryImageOfPage: { '@type': 'ImageObject', url: 'https://brixestimation.com/og-image.png' },
    inLanguage: 'en-US',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.hero-subtitle'],
    },
    breadcrumb: { '@id': 'https://brixestimation.com/#breadcrumb' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': 'https://brixestimation.com/#breadcrumb',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brixestimation.com/' },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {homeJsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <HomeContent />
    </>
  );
}
