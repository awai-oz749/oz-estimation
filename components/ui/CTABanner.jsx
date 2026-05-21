import Button from './Button';
import AnimatedSection from './AnimatedSection';
import { HiArrowRight } from 'react-icons/hi2';

export default function CTABanner({ title = 'Ready to Get Started?', subtitle = 'Get a detailed, accurate estimate for your construction project today.', buttonText = 'Get Free Estimation', buttonHref = '/get-estimation' }) {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-light-bg border-y-4 border-y-navy">
      {/* Gold accent lines */}
      <div className="absolute top-[3px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-[3px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(rgba(44,63,101,0.6) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold tracking-wide uppercase bg-gold/15 text-amber border border-gold/30">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            Get Started Today
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-navy mb-5 tracking-tight leading-[1.05]">{title}</h2>
          <p className="text-navy/70 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">{subtitle}</p>
          <Button href={buttonHref} variant="primary">
            {buttonText} <HiArrowRight className="w-4 h-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
