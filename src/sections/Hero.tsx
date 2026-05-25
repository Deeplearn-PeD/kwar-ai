import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/imagem para hero main.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(5,10,20,0.90) 0%, rgba(5,10,20,0.75) 45%, rgba(5,10,20,0.40) 70%, rgba(5,10,20,0.20) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(5,10,20,0.70) 0%, transparent 40%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-kwar-electric" />
              <span className="text-sm font-medium text-kwar-electric">
                {t('hero.badge')}
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1
            className={`font-display text-4xl sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-white leading-[1.1] mb-8 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="block">{t('hero.titleLine1')}</span>
            <span className="block">
              {t('hero.titleLine2Part1')}{' '}
              <span className="text-kwar-electric drop-shadow-[0_0_12px_rgba(0,240,255,0.25)]">
                {t('hero.titleHighlight')}
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <div
            className={`text-base sm:text-lg text-white/70 max-w-lg leading-[1.7] mb-10 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('hero.subtitleLine1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('hero.subtitleLine2') }} />
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <button
              onClick={() => scrollToSection('#our-story')}
              className="btn-primary group inline-flex items-center justify-center gap-2"
            >
              {t('hero.cta.learnMore')}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <Link
              to="/epidbot-websummit"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-white/50 text-sm font-medium border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300 hover:text-white/80 hover:border-white/20 hover:bg-white/5"
            >
              <span dangerouslySetInnerHTML={{ __html: t('hero.cta.webSummit') }} />
            </Link>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/40">{t('hero.scrollIndicator')}</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-kwar-electric rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
