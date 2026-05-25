import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, Globe, Bug, Award, ExternalLink } from 'lucide-react';

export function CredibilitySection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const cards = [
    {
      number: '01',
      title: t('credibility.cards.epidemiology.title'),
      description: t('credibility.cards.epidemiology.description'),
      icon: Bug,
    },
    {
      number: '02',
      title: t('credibility.cards.modeling.title'),
      description: t('credibility.cards.modeling.description'),
      icon: null, // Sigma — rendered as text
    },
    {
      number: '03',
      title: t('credibility.cards.ai.title'),
      description: t('credibility.cards.ai.description'),
      icon: Brain,
    },
    {
      number: '04',
      title: t('credibility.cards.globalHealth.title'),
      description: t('credibility.cards.globalHealth.description'),
      icon: Globe,
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="credibility"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#050a10]" />
      <div className="absolute inset-0 grid-bg opacity-[0.015]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top: text + image ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
          {/* LEFT — text */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-kwar-electric/40 bg-kwar-electric/5 backdrop-blur-sm mb-10">
              <ShieldBadge />
              <span className="text-sm font-semibold text-kwar-electric tracking-wide">
                {t('credibility.badge')}
              </span>
            </div>

            {/* Headline */}
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-8 leading-tight"
              style={{ letterSpacing: '-0.02em', lineHeight: '1.15' }}
            >
              {t('credibility.title')}
            </h2>

            {/* Cyan separator line */}
            <div className="w-10 h-px bg-kwar-electric mb-6" />

            {/* Subheadline */}
            <p
              className="text-white/50 max-w-lg leading-relaxed mb-16"
              style={{ fontSize: '1.05rem', lineHeight: '1.7' }}
              dangerouslySetInnerHTML={{ __html: t('credibility.subtitle') }}
            />
          </div>

          {/* RIGHT — image only */}
          <div
            className={`flex items-center justify-center lg:justify-end overflow-visible transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <img
              src="/images/credibilidade.png"
              alt=""
              className="w-full h-auto object-contain scale-110 lg:scale-125 xl:scale-150"
              style={{ maxWidth: 'none' }}
            />
          </div>
        </div>

        {/* ── Cards row ── */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="group relative p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-white/[0.10] hover:bg-white/[0.03]"
              >
                {/* Top: number + title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-kwar-electric/10 border border-kwar-electric/25 flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.06)]">
                    <span className="text-sm font-bold text-kwar-electric">{card.number}</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Cyan separator */}
                <div className="w-8 h-px bg-kwar-electric/30 mb-3" />

                {/* Icon + description */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 text-kwar-electric/60">
                    {Icon ? (
                      <Icon className="w-5 h-5" />
                    ) : (
                      <span className="text-lg font-bold text-kwar-electric/60">Σ</span>
                    )}
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed pt-0.5">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Web Summit bar ── */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-4">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-kwar-electric flex-shrink-0" />
              <p className="text-white/50 text-sm">
                <span dangerouslySetInnerHTML={{ __html: t('credibility.webSummitPrefix') }} />{' '}
                <span className="text-kwar-electric font-medium">{t('credibility.webSummitHighlight')}</span>
              </p>
            </div>
            <a
              href="https://rio.websummit.com/pt-br/startups/impact-startups/search/KWAR-AI/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/10 text-white/40 text-sm transition-all duration-300 hover:text-white/70 hover:border-white/20 hover:bg-white/[0.03] flex-shrink-0"
            >
              {t('credibility.learnMore')}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />
    </section>
  );
}

/* Small shield icon for the badge */
function ShieldBadge() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-kwar-electric">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default CredibilitySection;
