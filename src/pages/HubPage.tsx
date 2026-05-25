import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X, ExternalLink, Sparkles } from 'lucide-react';
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

const platformCards = [
  { key: 'municipal', image: '/images/municipais.png', href: '/epidbot-landing', category: 'hub.cards.municipal', featured: true },
  { key: 'hospitals', image: '/images/hospitais.png', href: '#', category: 'hub.cards.hospitals', comingSoon: true },
  { key: 'research', image: '/images/pesquisa.png', href: '#', category: 'hub.cards.research', comingSoon: true },
  { key: 'global', image: '/images/global.png', href: '#', category: 'hub.cards.global', comingSoon: true },
  { key: 'webSummit', image: '/images/hero_websummit.png', href: '/epidbot-websummit', category: 'hub.cards.webSummit', isEvent: true },
];

export function HubPage() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const heroReveal = useScrollReveal(0.2);
  const cardsReveal = useScrollReveal(0.1);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'pt-BR', label: 'PT' },
    { code: 'es', label: 'ES' },
  ];

  return (
    <div className="min-h-screen bg-[#050a10] text-white relative">
      {/* Full-page background — global network image, very subtle */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <img
          src="/images/imagem para hero main.png"
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.11]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050a10]/50 to-[#050a10]" />
      </div>

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
                className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-display font-bold text-xl tracking-wider text-white">
                KWAR<span className="text-kwar-electric">-</span>AI
              </span>
            </Link>

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
              <Link to="/" className="btn-primary text-sm">
                {t('common.faleConosco')}
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
              {t('common.faleConosco')}
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section
        id="hub-hero"
        ref={heroReveal.ref}
        className="relative pt-24 pb-12 lg:pt-28 lg:pb-14 overflow-hidden"
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          {/* Badge */}
          <div
            className={`mb-5 transition-all duration-1000 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kwar-electric/10 border border-kwar-electric/20 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-kwar-electric" />
              <span className="text-xs font-medium text-kwar-electric tracking-wider">
                {t('hub.hero.badge')}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1
            className={`font-display text-3xl sm:text-4xl lg:text-[3rem] font-bold text-white leading-[1.1] mb-5 transition-all duration-1000 delay-100 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="block">{t('hub.hero.titleLine1')}</span>
            <span className="text-kwar-electric drop-shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              {t('hub.hero.titleHighlight')}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-sm sm:text-base text-white/50 max-w-2xl leading-relaxed transition-all duration-1000 delay-200 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t('hub.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* ─── PLATFORMS ─── */}
      <section
        id="hub-platforms"
        ref={cardsReveal.ref}
        className="pb-20 lg:pb-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured row — Municipal + Kwar-AI */}
          <div
            className={`mb-6 transition-all duration-700 ${
              cardsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-5">
              {/* Municipal — 50% */}
              <div className="lg:w-1/2">
                <Link to="/epidbot-landing" className="block group h-full">
                  <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-kwar-electric/20 hover:shadow-[0_0_40px_rgba(0,240,255,0.06)] h-full">
                    <div className="absolute inset-0">
                      <img
                        src="/images/municipais.png"
                        alt=""
                        className="w-full h-full object-cover opacity-35 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050a10] via-[#050a10]/85 to-[#050a10]/50" />
                    </div>
                    <div className="relative z-10 p-6 flex flex-col h-full min-h-[260px]">
                      <div className="flex-1">
                        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-kwar-electric/80 mb-3 block">
                          {t('hub.cards.municipal.category')}
                        </span>
                        <h3 className="font-display text-lg font-bold text-white mb-2">
                          {t('hub.cards.municipal.title')}
                        </h3>
                        <p className="text-white/45 text-sm leading-relaxed">
                          {t('hub.cards.municipal.description')}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-xs font-medium text-kwar-electric group-hover:gap-3 transition-all mt-4 pt-4 border-t border-white/[0.06]">
                        {t('hub.cards.municipal.cta')}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Kwar-AI — 50% */}
              <div className="lg:w-1/2">
                <Link to="/" className="block group h-full">
                  <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-kwar-gold/20 hover:shadow-[0_0_40px_rgba(250,204,21,0.04)] h-full">
                    <div className="absolute inset-0 pointer-events-none">
                      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 500 500" preserveAspectRatio="none">
                        <line x1="0" y1="150" x2="500" y2="350" stroke="#FCD34D" strokeWidth="0.4" />
                        <line x1="0" y1="300" x2="500" y2="100" stroke="#FCD34D" strokeWidth="0.3" />
                        <line x1="150" y1="0" x2="350" y2="500" stroke="#FCD34D" strokeWidth="0.35" />
                        <line x1="0" y1="400" x2="500" y2="200" stroke="#FCD34D" strokeWidth="0.2" />
                        <circle cx="120" cy="180" r="2" fill="#FCD34D" opacity="0.25" />
                        <circle cx="380" cy="120" r="1.5" fill="#FCD34D" opacity="0.2" />
                        <circle cx="250" cy="350" r="2" fill="#FCD34D" opacity="0.15" />
                        <circle cx="400" cy="280" r="1.5" fill="#FCD34D" opacity="0.2" />
                        <circle cx="80" cy="320" r="1" fill="#FCD34D" opacity="0.25" />
                      </svg>
                      <div className="absolute -top-24 -right-24 w-80 h-80 bg-kwar-gold/[0.03] rounded-full blur-3xl" />
                      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-500/[0.02] rounded-full blur-3xl" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_40%,rgba(252,211,77,0.02),transparent_70%)]" />
                      <img
                        src="/images/kwar-ai.png"
                        alt=""
                        className="absolute bottom-2 right-2 w-28 h-28 object-contain opacity-[0.07]"
                      />
                    </div>
                    <div className="relative z-10 p-6 flex flex-col h-full min-h-[260px]">
                      <div className="flex-1">
                        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-kwar-gold/80 mb-3 block">
                          {t('hub.companyCard.label')}
                        </span>
                        <h3 className="font-display text-lg font-bold text-white mb-2">
                          {t('hub.topCompany.title')}
                        </h3>
                        <p className="text-white/45 text-sm leading-relaxed">
                          {t('hub.topCompany.description')}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-xs font-medium text-kwar-electric group-hover:gap-3 transition-all mt-4 pt-4 border-t border-white/[0.06]">
                        {t('hub.topCompany.cta')}
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Standard cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {platformCards.slice(1).map((card, index) => {
              const isComingSoon = card.comingSoon;
              const isEvent = card.isEvent;

              const CardContent = (
                <div
                  className={`group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-kwar-electric/20 h-full ${
                    cardsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="absolute inset-0">
                    <img
                      src={card.image}
                      alt=""
                      className="w-full h-full object-cover opacity-30 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050a10] via-[#050a10]/85 to-[#050a10]/50" />
                  </div>
                  <div className="relative z-10 p-6 flex flex-col h-full min-h-[260px]">
                    <div className="flex-1">
                      <span className={`text-[10px] font-semibold tracking-[0.12em] uppercase mb-3 block ${isEvent ? 'text-kwar-gold/80' : 'text-kwar-electric/80'}`}>
                        {t(`${card.category}.category`)}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white mb-2">
                        {t(`${card.category}.title`)}
                      </h3>
                      <p className="text-white/45 text-sm leading-relaxed">
                        {t(`${card.category}.description`)}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/[0.06]">
                      {isComingSoon ? (
                        <span className="text-[10px] text-white/30 tracking-wider uppercase">
                          {t('solutions.comingSoon')}
                        </span>
                      ) : (
                        <span className={`inline-flex items-center gap-2 text-xs font-medium group-hover:gap-3 transition-all ${isEvent ? 'text-kwar-gold' : 'text-kwar-electric'}`}>
                          {t(`${card.category}.cta`)}
                          {isEvent ? <ExternalLink className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );

              if (isComingSoon) {
                return <div key={card.key}>{CardContent}</div>;
              }

              return (
                <Link key={card.key} to={card.href} className="block">
                  {CardContent}
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
