import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export function SolutionsSection() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      key: 'municipal',
      image: '/images/municipais.png',
      href: '/epidbot-landing',
      comingSoon: false,
    },
    {
      key: 'hospitals',
      image: '/images/hospitais.png',
      href: '#',
      comingSoon: true,
    },
    {
      key: 'research',
      image: '/images/pesquisa.png',
      href: '#',
      comingSoon: true,
    },
    {
      key: 'global',
      image: '/images/global.png',
      href: '#',
      comingSoon: true,
    },
  ];

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative py-28 lg:py-36 bg-[#050a10] overflow-hidden"
    >
      {/* Subtle ambient gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,120,255,0.03) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 backdrop-blur-sm mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Sparkles className="w-4 h-4 text-kwar-electric" />
            <span className="text-sm font-medium text-kwar-electric">
              {t('solutions.badge')}
            </span>
          </div>
          <h2
            className={`font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ letterSpacing: '-0.02em', lineHeight: '1.15' }}
          >
            {t('solutions.title')}
          </h2>
          <p
            className={`text-base sm:text-lg text-white/50 leading-relaxed max-w-2xl transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t('solutions.subtitle')}
          </p>
        </div>

        {/* Visual Transition — intelligence ramification flow */}
        <div
          className={`relative flex items-center justify-center mb-16 lg:mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />
          <div className="absolute left-0 right-0 h-[2px] blur-sm bg-gradient-to-r from-transparent via-kwar-electric/10 to-transparent" />
          <div className="relative flex items-center gap-16 lg:gap-24">
            <div className="w-1.5 h-1.5 rounded-full bg-kwar-electric/20 shadow-[0_0_6px_rgba(0,240,255,0.15)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-kwar-electric/20 shadow-[0_0_6px_rgba(0,240,255,0.15)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-kwar-electric/20 shadow-[0_0_6px_rgba(0,240,255,0.15)]" />
          </div>
        </div>

        {/* Cards Grid — 2x2 on desktop */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {cards.map((card, index) => {
            const title = t(`solutions.cards.${card.key}.title`);
            const description = t(`solutions.cards.${card.key}.description`);

            const CardInner = (
              <div
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,255,0.08)] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(5,10,16,0.95) 0%, rgba(5,10,16,0.70) 40%, rgba(5,10,16,0.35) 70%, rgba(5,10,16,0.20) 100%)',
                    }}
                  />
                  {/* Bottom-heavy vignette */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,10,16,0.4) 100%)',
                    }}
                  />
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-kwar-electric/20 transition-colors duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end min-h-[300px] sm:min-h-[320px] p-6 lg:p-8">
                  {/* Title */}
                  <h3 className="text-white font-semibold text-xl lg:text-2xl mb-2 leading-snug">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/55 text-sm leading-relaxed mb-5 max-w-sm">
                    {description}
                  </p>

                  {/* CTA */}
                  <div>
                    {card.comingSoon ? (
                      <span className="text-[11px] text-white/30 tracking-wider uppercase">
                        {t('solutions.comingSoon')}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-xs text-kwar-electric group-hover:gap-3 transition-all">
                        {t('common.learnMore')}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );

            if (card.comingSoon) {
              return (
                <div key={card.key} className="cursor-default">
                  {CardInner}
                </div>
              );
            }

            return (
              <Link key={card.key} to={card.href} className="block">
                {CardInner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;
