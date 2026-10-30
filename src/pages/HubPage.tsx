import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { Footer } from '@/sections/Footer';
import { StatsBand } from '@/components/StatsBand';

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
  const { t } = useTranslation();

  const heroReveal = useScrollReveal(0.2);
  const cardsReveal = useScrollReveal(0.1);

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
            <span className="bg-gradient-to-r from-kwar-electric via-cyan-200 via-yellow-200 to-kwar-gold bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,240,255,0.25)]">
              {t('hub.hero.titleGradient')}
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
          {/* ─── PLATFORM NUMBERS ─── */}
          <div className="mb-10">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">
              {t('hub.stats.kicker')}
            </p>
            <StatsBand
              items={[
                { value: t('hub.stats.i1v'), label: t('hub.stats.i1l') },
                { value: t('hub.stats.i2v'), label: t('hub.stats.i2l') },
                { value: t('hub.stats.i3v'), label: t('hub.stats.i3l') },
                { value: t('hub.stats.i4v'), label: t('hub.stats.i4l') },
              ]}
              footnote={t('hub.stats.footnote')}
            />
          </div>

          {/* Featured row — Municipal + Kwar-AI */}
          <div
            className={`mb-6 transition-all duration-700 ${
              cardsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-5">
              {/* Municipal — 50% */}
              <div className="lg:w-1/2">
                <Link to="/epidbot-landing" target="_blank" rel="noopener noreferrer" className="block group h-full">
                  <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-kwar-electric/20 hover:shadow-[0_0_40px_rgba(0,240,255,0.06)] h-full">
                    <div className="absolute inset-0">
                      <img
                        src="/images/municipais.png"
                        alt=""
                        className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105"
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
                <Link to="/" target="_blank" rel="noopener noreferrer" className="block group h-full">
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
                      className="w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105"
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
                <Link key={card.key} to={card.href} target="_blank" rel="noopener noreferrer" className="block">
                  {CardContent}
                </Link>
              );
            })}
          </div>

          {/* ─── QGIS INTEGRATION ─── */}
          <div
            className={`mt-5 transition-all duration-700 delay-500 ${
              cardsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="https://plugins.qgis.org/plugins/epidbot/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-kwar-electric/20 hover:shadow-[0_0_40px_rgba(0,240,255,0.06)]">
                <div className="absolute inset-0">
                  <img
                    src="/images/qgis-plugin.svg"
                    alt=""
                    className="w-full h-full object-cover opacity-35 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050a10] via-[#050a10]/92 to-[#050a10]/35" />
                </div>
                <div className="relative z-10 p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                  <div className="flex-1">
                    <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-kwar-electric/80 mb-3 block">
                      {t('hub.cards.qgis.category')}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white mb-2">
                      {t('hub.cards.qgis.title')}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed max-w-2xl">
                      {t('hub.cards.qgis.description')}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {(t('hub.cards.qgis.chips', { returnObjects: true }) as string[]).map(
                        (chip: string) => (
                          <li
                            key={chip}
                            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/55"
                          >
                            {chip}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-kwar-electric group-hover:gap-3 transition-all shrink-0">
                    {t('hub.cards.qgis.cta')}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <Footer />
    </div>
  );
}

export default HubPage;
