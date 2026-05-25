import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, Eye, Brain, TrendingUp, Layers } from 'lucide-react';

export function OurStory() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const pillars = [
    {
      icon: Eye,
      title: t('ourStory.pillars.observation.title'),
      description: t('ourStory.pillars.observation.description'),
    },
    {
      icon: Brain,
      title: t('ourStory.pillars.intelligence.title'),
      description: t('ourStory.pillars.intelligence.description'),
    },
    {
      icon: TrendingUp,
      title: t('ourStory.pillars.anticipation.title'),
      description: t('ourStory.pillars.anticipation.description'),
    },
    {
      icon: Layers,
      title: t('ourStory.pillars.integration.title'),
      description: t('ourStory.pillars.integration.description'),
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

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Background image — sunrise */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/amanhecer.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Sophisticated dark overlays for legibility + sun visibility */}
      {/* Left-heavy dark overlay for text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(5,10,20,0.92) 0%, rgba(5,10,20,0.80) 40%, rgba(5,10,20,0.45) 65%, rgba(5,10,20,0.25) 100%)',
        }}
      />
      {/* Bottom gradient for card legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(5,10,20,0.70) 0%, rgba(5,10,20,0.20) 35%, transparent 60%)',
        }}
      />

      {/* Subtle sun detail — abstract horizon ring */}
      <div className="absolute bottom-[18%] right-[12%] pointer-events-none opacity-40">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32">
          {/* Outer thin ring */}
          <div
            className="absolute inset-0 rounded-full border border-kwar-gold/20"
            style={{ boxShadow: '0 0 40px rgba(245,200,66,0.08), inset 0 0 40px rgba(245,200,66,0.04)' }}
          />
          {/* Inner arc */}
          <div
            className="absolute inset-[15%] rounded-full border-t border-kwar-gold/30"
            style={{ transform: 'rotate(-15deg)' }}
          />
          {/* Tiny core glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-kwar-gold/40"
            style={{ boxShadow: '0 0 20px rgba(245,200,66,0.3)' }}
          />
        </div>
      </div>

      {/* Top border line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end min-h-[600px]">

          {/* LEFT — Story & Narrative */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-kwar-electric" />
              <span className="text-sm font-medium text-kwar-electric">
                {t('ourStory.badge')}
              </span>
            </div>

            {/* Headline */}
            <h2
              className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white mb-8 leading-tight"
              style={{ letterSpacing: '-0.02em', lineHeight: '1.15' }}
            >
              {t('ourStory.headline.part1')}{' '}
              <span className="text-kwar-electric">
                {t('ourStory.headline.highlight')}
              </span>
            </h2>

            {/* Story text — original About visual hierarchy */}
            <div className="space-y-4 text-kwar-gray leading-relaxed">
              <p>
                {t('about.story.paragraph1')}{' '}
                <span className="text-kwar-gold font-medium">{t('about.story.kuaray')}</span>{t('about.story.kuaraySuffix')}
              </p>

              <p>
                {t('about.story.paragraph2')}
              </p>

              <p className="text-white/80 leading-relaxed">
                {t('about.story.paragraph3')}{' '}
                <span className="bg-gradient-to-r from-[#F7DC6F] to-[#F5C842] bg-clip-text text-transparent font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(245,200,66,0.4)]">{t('about.story.kwarAi')}</span>{t('about.story.kwarAiSuffix')}
              </p>

              <p>
                {t('about.story.paragraph4')}
              </p>

              <p>
                {t('about.story.paragraph5')}{' '}
                <span className="bg-gradient-to-r from-[#F7DC6F] to-[#F5C842] bg-clip-text text-transparent font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(245,200,66,0.4)]">{t('about.story.kwarAi2')}</span>{t('about.story.paragraph5Suffix')}
              </p>

              <p className="text-white font-medium border-l-2 border-kwar-electric pl-4">
                {t('about.story.quote')}{' '}
                <span className="bg-gradient-to-r from-[#F7DC6F] to-[#F5C842] bg-clip-text text-transparent font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(245,200,66,0.4)]">{t('about.story.kwarAi3')}</span>
                {' '}{t('about.story.quoteSuffix')}
              </p>
            </div>
          </div>

          {/* RIGHT — Pillar Cards (pushed to bottom) */}
          <div
            className={`flex flex-col justify-end transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="grid grid-cols-2 gap-3">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-5 rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-kwar-electric/20 hover:bg-white/[0.05]"
                  >
                    {/* Subtle top accent line */}
                    <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-kwar-electric/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-md bg-kwar-electric/10 border border-kwar-electric/20">
                        <Icon className="w-4 h-4 text-kwar-electric" />
                      </div>
                      <h3 className="text-white font-semibold text-sm">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-white/50 text-xs leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/20 to-transparent" />
    </section>
  );
}

export default OurStory;
