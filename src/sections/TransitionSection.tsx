import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

export function TransitionSection() {
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
      id="transition"
      ref={sectionRef}
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Almost empty dark base */}
      <div className="absolute inset-0 bg-[#050a10]" />

      {/* Subtle converging light from top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,240,255,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Very subtle bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(0,120,255,0.03) 0%, transparent 70%)',
        }}
      />

      {/* Top border line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-kwar-electric/30 bg-kwar-electric/5 backdrop-blur-sm mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-sm font-semibold text-kwar-electric tracking-widest uppercase">
            {t('transition.badge')}
          </span>
        </div>

        {/* Headline */}
        <h2
          className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ letterSpacing: '-0.02em', lineHeight: '1.15' }}
        >
          {t('transition.title')}
        </h2>

        {/* Subheadline */}
        <p
          className={`text-white/40 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ fontSize: '1.1rem', lineHeight: '1.7' }}
        >
          {t('transition.subtitle')}
        </p>

        {/* Down arrow */}
        <div
          className={`mt-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-8 h-8 rounded-full border border-kwar-electric/20 flex items-center justify-center mx-auto animate-bounce">
            <ChevronDown className="w-4 h-4 text-kwar-electric/50" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TransitionSection;
