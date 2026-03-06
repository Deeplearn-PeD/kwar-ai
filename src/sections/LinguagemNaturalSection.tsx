import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, BarChart3, Database, MapPin } from 'lucide-react';

export function LinguagemNaturalSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const badges = [
    { icon: MessageSquare, label: t('linguagemNatural.badges.pt') },
    { icon: Database, label: t('linguagemNatural.badges.datasus') },
    { icon: BarChart3, label: t('linguagemNatural.badges.statistics') },
    { icon: MapPin, label: t('linguagemNatural.badges.maps') },
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
      id="linguagem-natural"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-purple/10 border border-kwar-purple/30 mb-6">
              <span className="text-sm font-medium text-kwar-purple">{t('linguagemNatural.badge')}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('linguagemNatural.title')}
            </h2>

            <p className="text-kwar-gray text-lg leading-relaxed mb-8">
              {t('linguagemNatural.description')}
            </p>

            {/* Feature icons */}
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <badge.icon className="w-5 h-5 text-kwar-electric" />
                  <span className="text-white/70 text-sm">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Mockup */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="p-6">
                {/* Chat header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-kwar-electric/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-kwar-electric" />
                  </div>
                  <div>
                    <p className="text-white font-medium">EpidBot</p>
                    <p className="text-white/40 text-xs">AI Assistant</p>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-kwar-electric" />
                    <div className="w-3 h-3 rounded-full bg-kwar-gold" />
                  </div>
                </div>

                {/* Chat messages */}
                <div className="space-y-4">
                  {/* User message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-white/60">U</span>
                    </div>
                    <div className="bg-white/10 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                      <p className="text-white/80 text-sm">
                        {t('linguagemNatural.chatExample')}
                      </p>
                    </div>
                  </div>

                  {/* Bot response */}
                  <div className="flex gap-3 justify-end">
                    <div className="bg-kwar-electric/20 rounded-lg rounded-tr-none p-3 max-w-[80%]">
                      <p className="text-white text-sm">
                        {t('linguagemNatural.chatResponse')}
                      </p>
                      <div className="mt-3 p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white/60 text-xs">{t('linguagemNatural.totalCases')}</span>
                          <span className="text-kwar-electric font-mono">45,892</span>
                        </div>
                        <div className="h-16 flex items-end gap-1">
                          {[40, 65, 45, 80, 95, 70].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-gradient-to-t from-kwar-electric to-kwar-electric/50 rounded-t"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-kwar-electric/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-kwar-electric">E</span>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 p-3 rounded-full bg-white/5 border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-kwar-electric animate-pulse" />
                    <span className="text-white/40 text-sm">{t('linguagemNatural.placeholder')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LinguagemNaturalSection;
