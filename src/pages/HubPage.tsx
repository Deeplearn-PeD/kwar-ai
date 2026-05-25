import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X, Sparkles, ExternalLink } from 'lucide-react';
import { Footer } from '@/sections/Footer';

function useScrollReveal(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return { ref: setRef, isVisible };
}

const solutionCards = [
  { key: 'municipal', image: '/images/municipais.png', href: '/epidbot-landing', comingSoon: false },
  { key: 'hospitals', image: '/images/hospitais.png', href: '#', comingSoon: true },
  { key: 'research', image: '/images/pesquisa.png', href: '#', comingSoon: true },
  { key: 'global', image: '/images/global.png', href: '#', comingSoon: true },
];

export function HubPage() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const heroReveal = useScrollReveal(0.2);
  const cardsReveal = useScrollReveal(0.15);
  const solutionsReveal = useScrollReveal(0.15);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'pt-BR', label: 'PT' },
    { code: 'es', label: 'ES' },
  ];

  return (
    <div className="min-h-screen bg-[#050a10] text-white">
      {/* ─── NAVBAR ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-kwar-deep/90 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2.5 group">
              <img
                src="/images/kwar-ai.png"
                alt="Kwar-AI"
                className="w-9 h-9 object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-display font-bold text-xl tracking-wider text-white">
                KWAR<span className="text-kwar-electric">-</span>AI
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('#hub-hero')}
                className="text-sm text-kwar-gray hover:text-white transition-colors"
              >
                {t('hub.nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('#hub-solutions')}
                className="text-sm text-kwar-gray hover:text-white transition-colors"
              >
                {t('hub.nav.solutions')}
              </button>
              <Link
                to="/"
                className="text-sm text-kwar-gray hover:text-white transition-colors"
              >
                {t('hub.nav.mainSite')}
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                {languages.map((lng) => (
                  <button
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)}
                    className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
                      i18n.language?.startsWith(lng.code.split('-')[0])
                        ? 'text-kwar-electric bg-kwar-electric/10'
                        : 'text-kwar-gray hover:text-white'
                    }`}
                  >
                    {lng.label}
                  </button>
                ))}
              </div>
              <Link
                to="/"
                className="btn-primary text-sm"
              >
                {t('common.requestDemo')}
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-kwar-gray hover:text-kwar-electric transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-kwar-deep/95 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('#hub-hero')}
              className="block w-full text-left py-2 text-kwar-gray hover:text-white transition-colors"
            >
              {t('hub.nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('#hub-solutions')}
              className="block w-full text-left py-2 text-kwar-gray hover:text-white transition-colors"
            >
              {t('hub.nav.solutions')}
            </button>
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-kwar-gray hover:text-white transition-colors"
            >
              {t('hub.nav.mainSite')}
            </Link>
            <div className="flex items-center gap-1.5 pt-2 pb-1">
              {languages.map((lng) => (
                <button
                  key={lng.code}
                  onClick={() => changeLanguage(lng.code)}
                  className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
                    i18n.language?.startsWith(lng.code.split('-')[0])
                      ? 'text-kwar-electric bg-kwar-electric/10'
                      : 'text-kwar-gray hover:text-white'
                  }`}
                >
                  {lng.label}
                </button>
              ))}
            </div>
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary text-sm w-full text-center block mt-2"
            >
              {t('common.requestDemo')}
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section
        id="hub-hero"
        ref={heroReveal.ref}
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(0,120,255,0.03) 0%, transparent 60%)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 backdrop-blur-sm mb-8 transition-all duration-1000 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Sparkles className="w-4 h-4 text-kwar-electric" />
            <span className="text-sm font-medium text-kwar-electric">{t('hub.hero.badge')}</span>
          </div>

          <h1
            className={`font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-100 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ letterSpacing: '-0.02em', lineHeight: '1.1' }}
          >
            {t('hub.hero.title')}
          </h1>

          <p
            className={`text-lg text-white/50 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t('hub.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* ─── MAIN CARDS ─── */}
      <section
        ref={cardsReveal.ref}
        className="pb-20 lg:pb-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 — Conheça a Kwar-AI */}
            <div
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-700 hover:border-kwar-electric/20 hover:shadow-[0_0_40px_rgba(0,240,255,0.06)] ${
                cardsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-[#050a10]">
                <img
                  src="/images/kwar-ai.png"
                  alt=""
                  className="w-3/4 h-3/4 object-contain opacity-15 transition-all duration-700 group-hover:scale-110 group-hover:opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a10] via-[#050a10]/60 to-[#050a10]/30" />
              </div>
              <div className="relative z-10 p-8 lg:p-10 min-h-[320px] flex flex-col justify-end">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
                  {t('hub.cards.about.title')}
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
                  {t('hub.cards.about.text')}
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-kwar-electric group-hover:gap-3 transition-all"
                >
                  {t('hub.cards.about.cta')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2 — Web Summit Rio 2026 */}
            <div
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-700 hover:border-kwar-electric/20 hover:shadow-[0_0_40px_rgba(0,240,255,0.06)] ${
                cardsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="absolute inset-0">
                <img
                  src="/images/hero_websummit.png"
                  alt=""
                  className="w-full h-full object-cover opacity-25 transition-all duration-700 group-hover:scale-105 group-hover:opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a10] via-[#050a10]/80 to-transparent" />
              </div>
              <div className="relative z-10 p-8 lg:p-10 min-h-[320px] flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/images/RIO26_Impact badge.png"
                    alt="Web Summit Impact Startup"
                    className="h-7 w-auto object-contain opacity-80"
                  />
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
                  {t('hub.cards.webSummit.title')}
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
                  {t('hub.cards.webSummit.text')}
                </p>
                <Link
                  to="/epidbot-websummit"
                  className="inline-flex items-center gap-2 text-sm font-medium text-kwar-electric group-hover:gap-3 transition-all"
                >
                  {t('hub.cards.webSummit.cta')}
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS ─── */}
      <section
        id="hub-solutions"
        ref={solutionsReveal.ref}
        className="pb-24 lg:pb-32"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 backdrop-blur-sm mb-6 transition-all duration-700 ${
                solutionsReveal.isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Sparkles className="w-4 h-4 text-kwar-electric" />
              <span className="text-sm font-medium text-kwar-electric">
                {t('hub.solutions.badge')}
              </span>
            </div>
            <h2
              className={`font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight transition-all duration-1000 delay-100 ${
                solutionsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ letterSpacing: '-0.02em', lineHeight: '1.15' }}
            >
              {t('hub.solutions.title')}
            </h2>
            <p
              className={`text-base text-white/50 leading-relaxed transition-all duration-1000 delay-200 ${
                solutionsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {t('hub.solutions.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
            {solutionCards.map((card, index) => {
              const title = t(`solutions.cards.${card.key}.title`);
              const description = t(`solutions.cards.${card.key}.description`);

              const CardInner = (
                <div
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,255,0.08)] ${
                    solutionsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="absolute inset-0">
                    <img
                      src={card.image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(5,10,16,0.95) 0%, rgba(5,10,16,0.70) 40%, rgba(5,10,16,0.35) 70%, rgba(5,10,16,0.20) 100%)',
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,10,16,0.4) 100%)',
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-kwar-electric/20 transition-colors duration-500 pointer-events-none" />
                  <div className="relative z-10 flex flex-col justify-end min-h-[300px] sm:min-h-[320px] p-6 lg:p-8">
                    <h3 className="text-white font-semibold text-xl lg:text-2xl mb-2 leading-snug">
                      {title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-5 max-w-sm">
                      {description}
                    </p>
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

      {/* ─── FOOTER ─── */}
      <Footer />
    </div>
  );
}

export default HubPage;
