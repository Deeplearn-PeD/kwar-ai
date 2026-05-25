import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-kwar-electric/5 rounded-full blur-[100px]" />

      <div
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {t('ctaFinal.title')}
        </h2>

          <p className="text-lg text-kwar-gray mb-10">
            <span dangerouslySetInnerHTML={{ __html: t('ctaFinal.subtitle') }} />
          </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/epidbot-websummit"
            className="btn-primary group inline-flex items-center gap-2"
          >
            {t('ctaFinal.button')}
            <ExternalLink className="w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTAFinalSection;
