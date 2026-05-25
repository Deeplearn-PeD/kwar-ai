import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';

export function DesafioSection() {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const painPoints = [
    {
      number: '01',
      text: t('desafio.painPoints.0'),
    },
    {
      number: '02',
      text: t('desafio.painPoints.1'),
    },
    {
      number: '03',
      text: t('desafio.painPoints.2'),
    },
    {
      number: '04',
      text: t('desafio.painPoints.3'),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Select image based on current language
  const getImageSrc = () => {
    const lang = i18n.language;
    if (lang === 'pt-BR' || lang === 'pt') {
      return '/images/desafio pt.png';
    }
    if (lang === 'es') {
      return '/images/desafio pt.png'; // fallback to pt since no es image exists
    }
    return '/images/desafio en.png';
  };

  return (
    <section
      id="desafio"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Dark base matching image edge tone */}
      <div className="absolute inset-0 bg-[#050a10]" />

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(0,120,255,0.03) 0%, transparent 60%)',
        }}
      />

      {/* Very subtle grid texture */}
      <div className="absolute inset-0 grid-bg opacity-[0.015]" />

      {/* Top border line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* LEFT — Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 backdrop-blur-sm mb-10">
              <Sparkles className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium text-red-400">
                {t('desafio.badge')}
              </span>
            </div>

            {/* Headline */}
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-8 leading-tight"
              style={{ letterSpacing: '-0.02em', lineHeight: '1.15' }}
            >
              {t('desafio.title')}
            </h2>

            {/* Subheadline */}
            <p
              className="text-white/50 max-w-lg leading-relaxed mb-14"
              style={{ fontSize: '1.05rem', lineHeight: '1.7' }}
            >
              {t('desafio.subtitle')}
            </p>

            {/* Pain Points */}
            <div className="space-y-4">
              {painPoints.map((point) => (
                <div
                  key={point.number}
                  className="group flex items-start gap-4 py-3 border-b border-white/[0.04]"
                >
                  {/* Number */}
                  <span
                    className="text-[11px] font-medium text-white/25 flex-shrink-0 pt-0.5 w-5"
                    style={{ letterSpacing: '0.05em', fontVariantNumeric: 'tabular-nums' }}
                  >
                    {point.number}
                  </span>

                  {/* Text */}
                  <p className="text-white/40 text-sm leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Image */}
          <div
            className={`flex items-center justify-center lg:justify-end transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <img
              src={getImageSrc()}
              alt=""
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />
    </section>
  );
}

export default DesafioSection;
