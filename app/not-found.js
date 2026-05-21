import Link from 'next/link';
import Button from '@/components/ui/Button';
import { HiArrowLeft } from 'react-icons/hi2';

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist. Browse our construction estimation services or return to the homepage.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl md:text-9xl font-bold text-gold/20 mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">Page Not Found</h1>
        <p className="text-slate-custom mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find what you need.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary">
            <HiArrowLeft className="w-4 h-4" /> Back to Home
          </Button>
          <Button href="/services" variant="secondary">
            Browse Services
          </Button>
        </div>
      </div>
    </section>
  );
}
