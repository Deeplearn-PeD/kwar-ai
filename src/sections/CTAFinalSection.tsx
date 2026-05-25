import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Award, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTAFinalSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta-final"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#050a10] overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-kwar-electric/5 rounded-full blur-[100px]" />

      <div
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Impact Startup Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-gold/10 border border-kwar-gold/30 backdrop-blur-sm">
            <Award className="w-4 h-4 text-kwar-gold" />
            <span className="text-sm font-medium text-kwar-gold tracking-wider">
              {t('ctaFinal.impactBadge')} — {t('ctaFinal.impactLabel')}
            </span>
          </div>
        </div>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-kwar-electric to-kwar-gold bg-clip-text text-transparent">
          {t('ctaFinal.title')}
        </h2>

        <p className="text-lg text-kwar-gray mb-6">
          <span dangerouslySetInnerHTML={{ __html: t('ctaFinal.subtitle') }} />
        </p>

        <p className="text-base text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('ctaFinal.impactDescription')}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://rio.websummit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group inline-flex items-center gap-2"
          >
            {t('ctaFinal.webSummitButton')}
            <ExternalLink className="w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            to="/epidbot-websummit"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-white/50 text-sm font-medium border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300 hover:text-white/80 hover:border-white/20 hover:bg-white/5"
          >
            {t('ctaFinal.button')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTAFinalSection;
