import { Inter, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopLoader from '@/components/TopLoader';
import PageTransition from '@/components/PageTransition';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata = {
  metadataBase: new URL('https://brixestimation.com'),
  title: {
    default: 'Brix Estimation | Construction Cost Estimation USA',
    template: '%s | Brix Estimation',
  },
  description: 'Accurate construction cost estimation for residential, commercial & industrial projects across all 50 US states. ASPE-certified. Free quotes in 24-48 hours.',
  keywords: [
    'construction estimation', 'cost estimation', 'takeoff services', 'construction bidding',
    'MEP estimation', 'residential estimation', 'commercial estimation', 'industrial estimation',
    'quantity takeoff', 'material takeoff', 'construction cost estimator', 'bid estimation',
    'structural estimation', 'roofing estimation', 'electrical estimation', 'plumbing estimation',
    'construction estimating company', 'estimation services USA',
    'building cost calculator', 'contractor estimation services', 'subcontractor estimation',
    'construction cost breakdown', 'free construction estimate', 'accurate construction costs',
    'construction bid support', 'project cost analysis', 'material cost estimation',
    'construction takeoff services', 'blueprint takeoff', 'plan takeoff services',
    'construction cost consultant', 'estimating outsourcing', 'freelance estimator',
    'construction quantity surveyor', 'cost estimating firm', 'digital takeoff services',
    'construction budget estimate', 'preliminary cost estimate', 'detailed cost estimate',
    'value engineering', 'construction cost management', 'bid preparation services',
    'general contractor estimation', 'subcontractor bid support', 'construction cost analysis',
    'ASPE certified estimator', 'RSMeans pricing', 'ZIP code based pricing',
  ],
  authors: [{ name: 'Brix Estimation', url: 'https://brixestimation.com' }],
  creator: 'Brix Estimation',
  publisher: 'Brix Estimation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://brixestimation.com/',
  },
  openGraph: {
    title: 'Brix Estimation | Construction Cost Estimation Services',
    description: 'Accurate construction cost estimation for all project types. 5,000+ projects. 98% accuracy. ASPE-certified. Free quotes in 24-48 hours.',
    url: 'https://brixestimation.com/',
    siteName: 'Brix Estimation',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Brix Estimation - Construction Cost Estimation Services in USA',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@brixestimation',
    creator: '@brixestimation',
    title: 'Brix Estimation | Construction Cost Estimation USA',
    description: '5,000+ projects. 98% accuracy. ASPE-certified estimators. Free quotes in 24-48 hours across all 50 states.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'LXq2geL3QM2wL1q7OtzvzJsH8WSSS4KuFgc80IV_RK8',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'construction',
  other: {
    'geo.region': 'US',
    'geo.placename': 'Los Angeles',
    'geo.position': '34.0407;-118.2622',
    'ICBM': '34.0407, -118.2622',
    'rating': 'General',
    'distribution': 'Global',
    'og:locality': 'Los Angeles',
    'og:region': 'CA',
    'og:country-name': 'USA',
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#1A2540' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': 'https://brixestimation.com/#organization',
    name: 'Brix Estimation',
    legalName: 'Brix Estimation LLC',
    url: 'https://brixestimation.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://brixestimation.com/logo.png',
      width: 60,
      height: 60,
    },
    image: 'https://brixestimation.com/og-image.png',
    description: 'Brix Estimation is America\'s leading construction cost estimation company delivering accurate material takeoffs, quantity surveys, and detailed cost breakdowns for residential, commercial, and industrial projects across all 50 US states.',
    foundingDate: '2015',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'AdministrativeArea', name: 'California' },
      { '@type': 'AdministrativeArea', name: 'Texas' },
      { '@type': 'AdministrativeArea', name: 'Florida' },
      { '@type': 'AdministrativeArea', name: 'New York' },
    ],
    serviceType: [
      'Construction Cost Estimation',
      'Quantity Takeoff Services',
      'Material Takeoff',
      'MEP Estimation',
      'Structural Estimation',
      'Residential Estimation',
      'Commercial Estimation',
      'Industrial Estimation',
      'Blueprint Takeoff',
      '3D Rendering Services',
      'Bid Preparation Services',
    ],
    knowsAbout: [
      'Construction Cost Estimation',
      'Quantity Surveying',
      'Material Takeoff',
      'Blueprint Reading',
      'Construction Bidding',
      'Value Engineering',
      'RSMeans Data',
      'CSI MasterFormat',
      'ASPE Standards',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'info@brixestimation.com',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '425 W 11th St, 2nd Floor',
      addressLocality: 'Los Angeles',
      addressRegion: 'CA',
      postalCode: '90015',
      addressCountry: 'US',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction Estimation Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'General Estimation',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Subcontractor Estimation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'General Contractor Estimation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Estimation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Estimation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Industrial Estimation' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'MEP Estimation',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plumbing Estimation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mechanical/HVAC Estimation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electrical Estimation' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Structural Estimation',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Concrete Estimation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structural Steel Estimation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Masonry Estimation' } },
          ],
        },
      ],
    },
    sameAs: [],
    slogan: 'Accurate. Professional. Reliable.',
    paymentAccepted: 'Visa, MasterCard, American Express, PayPal',
    currenciesAccepted: 'USD',
    priceRange: '$$',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://brixestimation.com/#localbusiness',
    name: 'Brix Estimation',
    image: 'https://brixestimation.com/og-image.png',
    url: 'https://brixestimation.com',
    email: 'info@brixestimation.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '425 W 11th St, 2nd Floor',
      addressLocality: 'Los Angeles',
      addressRegion: 'CA',
      postalCode: '90015',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.0407,
      longitude: -118.2622,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '14:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '247',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Robert Johnson' },
        reviewBody: 'Brix Estimation helped us win 40% more bids with their accurate and detailed cost breakdowns. Highly recommended!',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Sarah Williams' },
        reviewBody: 'Their MEP estimation services are second to none. The turnaround time and accuracy have been consistently exceptional.',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Michael Chen' },
        reviewBody: 'We\'ve been using Brix Estimation for 3 years. Their structural trade estimates are always spot-on and delivered on time.',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://brixestimation.com/#website',
    url: 'https://brixestimation.com',
    name: 'Brix Estimation',
    description: 'Professional construction cost estimation services for residential, commercial, and industrial projects across the USA.',
    publisher: { '@id': 'https://brixestimation.com/#organization' },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://brixestimation.com/services/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://brixestimation.com/#webpage',
    url: 'https://brixestimation.com',
    name: 'Brix Estimation | #1 Construction Cost Estimation Services in USA',
    isPartOf: { '@id': 'https://brixestimation.com/#website' },
    about: { '@id': 'https://brixestimation.com/#organization' },
    description: 'Get accurate, detailed construction cost estimations for residential, commercial & industrial projects. Trusted by 1,000+ contractors with 98% accuracy.',
    inLanguage: 'en-US',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': 'https://brixestimation.com/#servicelist',
    name: 'Construction Estimation Services',
    description: 'Complete list of professional construction cost estimation services offered by Brix Estimation.',
    numberOfItems: 8,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'General Estimation', url: 'https://brixestimation.com/services/general-estimation' },
      { '@type': 'ListItem', position: 2, name: 'Sitework & Demolition', url: 'https://brixestimation.com/services/sitework-demolition' },
      { '@type': 'ListItem', position: 3, name: 'MEP Systems', url: 'https://brixestimation.com/services/mep' },
      { '@type': 'ListItem', position: 4, name: 'Structural Trades', url: 'https://brixestimation.com/services/structural-trade' },
      { '@type': 'ListItem', position: 5, name: 'Building Envelope', url: 'https://brixestimation.com/services/building-envelope' },
      { '@type': 'ListItem', position: 6, name: 'Interior Finishes', url: 'https://brixestimation.com/services/interior-finishes' },
      { '@type': 'ListItem', position: 7, name: 'Specialty & Landscaping', url: 'https://brixestimation.com/services/specialty-landscaping' },
      { '@type': 'ListItem', position: 8, name: '3D Rendering', url: 'https://brixestimation.com/services/3d-rendering' },
    ],
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <head>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FBB923" />
        <meta name="msapplication-TileColor" content="#2C3F65" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Brix Estimation" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
      </head>
      <body className="antialiased bg-white text-navy font-sans min-h-screen flex flex-col">
        <TopLoader />
        <Header />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
