import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NeuralSun } from '@/components/NeuralSun';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-kwar-electric/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-kwar-gold/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      
      {/* Neural lines decoration */}
      <div className="absolute top-20 left-10 w-32 h-px bg-gradient-to-r from-kwar-electric/50 to-transparent" />
      <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-kwar-electric/50 to-transparent" />
      <div className="absolute bottom-20 right-10 w-32 h-px bg-gradient-to-l from-kwar-gold/50 to-transparent" />
      <div className="absolute bottom-20 right-10 w-px h-32 bg-gradient-to-t from-kwar-gold/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 mb-6">
              <Sparkles className="w-4 h-4 text-kwar-electric" />
              <span className="text-sm font-medium text-kwar-electric">
                {t('hero.badge')}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              <span className="text-yellow-300 relative">
                <span className="absolute inset-0 blur-lg opacity-70 text-yellow-400">
                     {t('hero.title')}
                </span>
                 <span className="relative">{t('hero.title')}</span> 
              </span>             
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-3xl text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-12">
               {t('hero.subtitle')}{' '}
              <span className="text-kwar-electric font-semibold">
               {t('hero.subtitleHighlight')}
              </span>.
            </p>

            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('#products')}
                className="btn-primary group flex items-center justify-center gap-2"
              >
                {t('hero.cta.products')}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('#about')}
                className="btn-secondary"
              >
                {t('hero.cta.learnMore')}
              </button>
            </div>
          </div>

          {/* Right Content - Neural Sun */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              {/* Glow effect behind sun */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-kwar-electric/20 rounded-full blur-3xl animate-pulse" />
              </div>
              
              {/* Neural Sun */}
              <div className="relative animate-float">
                <NeuralSun size={280} className="lg:w-[350px] lg:h-[350px]" />
              </div>

              {/* Floating cards */}
              <div
                className={`absolute -left-8 top-1/4 card-glass px-4 py-3 transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-kwar-green animate-pulse" />
                  <span className="text-xs text-kwar-gray">{t('hero.floatingCards.activeMonitoring')}</span>
                </div>
              </div>

              <div
                className={`absolute -right-4 bottom-1/3 card-glass px-4 py-3 transition-all duration-700 delay-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-kwar-electric animate-pulse" />
                  <span className="text-xs text-kwar-gray">{t('hero.floatingCards.neuralNetwork')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-kwar-gray">{t('hero.scrollIndicator')}</span>
            <div className="w-6 h-10 rounded-full border-2 border-kwar-electric/30 flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-kwar-electric rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
