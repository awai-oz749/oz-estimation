import HomeContent from '@/components/HomeContent';

export const metadata = {
  title: 'OZ Estimation | Construction Cost Estimation USA',
  description: 'Accurate construction cost estimation for residential, commercial & industrial projects. Trusted by 1,000+ contractors. ASPE-certified. Free quotes in 24-48 hours.',
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
    canonical: 'https://ozestimations.com/',
  },
  openGraph: {
    title: 'OZ Estimation | Construction Cost Estimation Services',
    description: 'Accurate construction cost estimation for all project types. 5,000+ projects, 98% accuracy, ASPE-certified.',
    url: 'https://ozestimations.com/',
    siteName: 'OZ Estimation',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OZ Estimation - Construction Cost Estimation Services in USA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ozestimation',
    creator: '@ozestimation',
    title: 'OZ Estimation | Construction Cost Estimation',
    description: '5,000+ projects. 98% accuracy. ASPE-certified. Free estimates in 24-48 hours.',
    images: ['/og-image.png'],
  },
};

export default function HomePage() {
  return <HomeContent />;
}
