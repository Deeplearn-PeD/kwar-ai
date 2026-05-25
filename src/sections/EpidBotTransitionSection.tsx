import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';

export function EpidBotTransitionSection() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="epidbot-transition"
      ref={sectionRef}
      className="relative overflow-hidden min-h-[280px] sm:min-h-[420px] max-h-[420px] sm:max-h-[520px]"
    >
      {/* Background Image — full width, no container */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/transição.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Ultra subtle overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(5,10,20,0.40) 0%, rgba(5,10,20,0.20) 50%, transparent 80%)',
        }}
      />

      {/* Bottom fade to blend with next section */}
      <div
        className="absolute bottom-0 left-0 w-full h-24"
        style={{
          background: 'linear-gradient(to top, rgba(5,10,20,0.60) 0%, transparent 100%)',
        }}
      />

      {/* Content centered */}
      <div className="relative z-10 flex items-center justify-center h-full min-h-[280px] sm:min-h-[420px] max-h-[420px] sm:max-h-[520px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 backdrop-blur-sm mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Sparkles className="w-4 h-4 text-kwar-electric" />
            <span className="text-sm font-medium text-kwar-electric">
              {t('epidbotTransition.badge')}
            </span>
          </div>

          {/* Headline */}
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ letterSpacing: '-0.02em', lineHeight: '1.15' }}
          >
            {t('epidbotTransition.titlePart1')}{' '}
            <span className="text-kwar-electric drop-shadow-[0_0_15px_rgba(0,240,255,0.30)]">
              {t('epidbotTransition.titleHighlight')}
            </span>
            {' '}{t('epidbotTransition.titlePart2')}
          </h2>

          {/* Subheadline */}
          <p
            className={`text-white/60 text-lg leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t('epidbotTransition.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default EpidBotTransitionSection;