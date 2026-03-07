import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Brain, Target, Lightbulb, RefreshCw, Eye } from 'lucide-react';

export function About() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const pillars = [
    {
      icon: RefreshCw,
      title: t('about.pillars.renewal.title'),
      description: t('about.pillars.renewal.description'),
      color: 'kwar-electric',
    },
    {
      icon: Lightbulb,
      title: t('about.pillars.clarity.title'),
      description: t('about.pillars.clarity.description'),
      color: 'kwar-gold',
    },
    {
      icon: Target,
      title: t('about.pillars.cyclicity.title'),
      description: t('about.pillars.cyclicity.description'),
      color: 'kwar-purple',
    },
    {
      icon: Eye,
      title: t('about.pillars.anticipation.title'),
      description: t('about.pillars.anticipation.description'),
      color: 'kwar-green',
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-kwar-electric/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Origin Story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Left - Story */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-gold/10 border border-kwar-gold/30 mb-6">
              <Sun className="w-4 h-4 text-kwar-gold" />
              <span className="text-sm font-medium text-kwar-gold">{t('about.badge')}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {t('about.title')}
            </h2>

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
                {t('about.story.quote')}{" "}
                <span className="bg-gradient-to-r from-[#F7DC6F] to-[#F5C842] bg-clip-text text-transparent font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(245,200,66,0.4)]">{t('about.story.kwarAi3')}</span>
                {" "}{t('about.story.quoteSuffix')}
              </p>
            </div>
          </div>

          {/* Right - Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-kwar-electric/30 rounded-lg" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-kwar-gold/30 rounded-lg" />
              
              {/* Main content card */}
              <div className="card-glass p-8 relative">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <Sun className="w-20 h-20 text-kwar-gold animate-pulse-glow" />
                    <Brain className="w-10 h-10 text-kwar-electric absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white text-center mb-4">
                  {t('about.card.title')}
                </h3>
                
                <p className="text-kwar-gray text-center text-sm leading-relaxed mb-6">
                  {t('about.card.description')}{' '}
                  <span className="bg-gradient-to-r from-[#F7DC6F] to-[#F5C842] bg-clip-text text-transparent font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(245,200,66,0.4)]"> {t('about.story.kwarAi')}</span>
                 {" "}
                  {t('about.card.descriptionSuffix')}
                </p>

                <div className="flex justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10">
                    <div className="w-2 h-2 rounded-full bg-kwar-electric animate-pulse" />
                    <span className="text-xs text-kwar-electric">{t('about.card.badge')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Four Pillars */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              {t('about.pillars.title')}
            </h3>
            <p className="text-kwar-gray max-w-2xl mx-auto">
              {t('about.pillars.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="card-glass-hover p-6 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-${pillar.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <pillar.icon className={`w-6 h-6 text-${pillar.color}`} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-sm text-kwar-gray leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
