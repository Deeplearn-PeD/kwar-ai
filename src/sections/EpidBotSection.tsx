import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Brain, Database, Sparkles } from 'lucide-react';

export function EpidBotSection() {
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="epidbot"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 mb-6">
              <Brain className="w-4 h-4 text-kwar-electric" />
              <span className="text-sm font-medium text-kwar-electric">{t('epidBot.badge')}</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t('epidBot.title')}
            </h2>

            <p className="text-xl text-kwar-gold font-medium mb-6">
              {t('epidBot.subtitle')}
            </p>

            <div className="space-y-4 text-kwar-gray text-lg leading-relaxed mb-8">
              {t('epidBot.description').split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <Link
              to="/epidbot-landing"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              {t('epidBot.cta')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right - Image with floating animation */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-kwar-electric/20 blur-3xl rounded-full scale-90 animate-pulse" />
              
              {/* Floating container */}
              <div className="relative floating-element">
                {/* Main image with glow border */}
                <div className="relative rounded-2xl overflow-hidden">
                  {/* Gradient border/glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-kwar-electric via-kwar-purple to-kwar-gold opacity-50" />
                  <div className="absolute inset-[2px] bg-kwar-deep rounded-2xl" />
                  
                  {/* Image */}
                  <img
                    src="/images/epidbot.png"
                    alt="EpidBot - Assistente de IA"
                    className="relative w-full h-auto rounded-2xl shadow-2xl"
                  />
                  
                  {/* Floating badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-kwar-deep/80 backdrop-blur-sm border border-kwar-electric/30">
                    <Sparkles className="w-4 h-4 text-kwar-electric" />
                    <span className="text-xs text-white">{t('epidBot.aiBadge')}</span>
                  </div>

                  <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-kwar-deep/80 backdrop-blur-sm border border-kwar-purple/30">
                    <MessageCircle className="w-4 h-4 text-kwar-purple" />
                    <span className="text-xs text-white">{t('epidBot.naturalLanguage')}</span>
                  </div>
                </div>
              </div>

              {/* Feature highlights - floating cards */}
              <div className="absolute -bottom-8 -left-8 hidden lg:block">
                <div className="card-glass px-4 py-3 flex items-center gap-3 floating-card-1">
                  <div className="w-10 h-10 rounded-lg bg-kwar-electric/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-kwar-electric" />
                  </div>
                  <div>
                    <p className="text-xs text-kwar-gray">{t('epidBot.integratesWith')}</p>
                    <p className="text-sm text-white font-medium">{t('epidBot.datasus')}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 hidden lg:block">
                <div className="card-glass px-4 py-3 flex items-center gap-3 floating-card-2">
                  <div className="w-10 h-10 rounded-lg bg-kwar-purple/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-kwar-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-kwar-gray">{t('epidBot.basedOn')}</p>
                    <p className="text-sm text-white font-medium">{t('epidBot.statistical')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation keyframes injected via style */}
      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .floating-element {
          animation: floating 6s ease-in-out infinite;
        }
        @keyframes floating-card-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        .floating-card-1 {
          animation: floating-card-1 5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        @keyframes floating-card-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-8px) translateX(-5px); }
        }
        .floating-card-2 {
          animation: floating-card-2 4.5s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}

export default EpidBotSection;
