import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Download,
  ExternalLink,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  SlidersHorizontal,
  ServerCog,
  Code2,
  LayoutDashboard,
  Share2,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { StatsBand } from '@/components/StatsBand';
import { Footer } from '@/sections/Footer';

const DEMO_URL = 'https://dash.kwar-ai.com.br';
const REGISTER_URL = 'https://epidbot.kwar-ai.com.br/register';

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

const steps = [
  { key: 's1', icon: MessageSquare },
  { key: 's2', icon: SlidersHorizontal },
  { key: 's3', icon: Share2 },
  { key: 's4', icon: LayoutDashboard },
];

const features = [
  { key: 'f1', icon: BarChart3 },
  { key: 'f2', icon: MessageSquare },
  { key: 'f3', icon: SlidersHorizontal },
  { key: 'f4', icon: Download },
  { key: 'f5', icon: Search },
  { key: 'f6', icon: ShieldCheck },
];

const cases = ['c1', 'c2', 'c3', 'c4'];
const faq = ['q1', 'q2', 'q3', 'q4', 'q5'];

export default function EpiDash() {
  const { t } = useTranslation();
  const heroReveal = useScrollReveal(0.2);
  const stepsReveal = useScrollReveal(0.1);
  const featuresReveal = useScrollReveal(0.1);

  return (
    <div className="min-h-screen bg-[#050a10] text-white relative">
      <SEO
        title={t('epidash.seo.title')}
        description={t('epidash.seo.description')}
        path="/epidash"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'EpiDash',
          applicationCategory: 'BusinessApplication',
          applicationSubCategory: 'Data visualisation',
          operatingSystem: 'Web',
          softwareVersion: '0.2.0',
          license: 'https://opensource.org/licenses/MIT',
          url: DEMO_URL,
          description: t('epidash.seo.description'),
          isAccessibleForFree: true,
          featureList: [
            'Line, bar, pie, table and KPI charts plus a Brazil-by-state choropleth map',
            'Visitor-submitted questions answered from the panel data only',
            'In-browser chart adjustment without a BI step',
            'Export to PNG, PDF and re-importable JSON',
            'Searchable public gallery with a permalink per panel',
            'Control key per panel and audit log of every change',
          ],
          publisher: {
            '@type': 'Organization',
            name: 'Kwar-AI',
            url: 'https://kwar-ai.com.br',
          },
        }}
      />

      {/* Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(0,240,255,0.07),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_30%,rgba(255,184,0,0.05),transparent_50%)]" />
      </div>

      {/* ─── HERO ─── */}
      <section
        ref={heroReveal.ref}
        className="relative pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden"
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div
            className={`mb-6 transition-all duration-1000 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kwar-electric/10 border border-kwar-electric/20 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-kwar-electric" />
              <span className="text-xs font-medium text-kwar-electric tracking-wider">
                {t('epidash.hero.badge')}
              </span>
            </div>
          </div>

          <h1
            className={`font-display text-3xl sm:text-4xl lg:text-[3.2rem] font-bold leading-[1.1] mb-5 transition-all duration-1000 delay-100 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="block text-white">{t('epidash.hero.titleLine1')}</span>
            <span className="bg-gradient-to-r from-kwar-electric via-cyan-200 to-kwar-gold bg-clip-text text-transparent">
              {t('epidash.hero.titleGradient')}
            </span>
          </h1>

          <p
            className={`text-sm sm:text-base text-white/55 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t('epidash.hero.subtitle')}
          </p>

          <div
            className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-1000 delay-300 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              {t('epidash.hero.ctaPrimary')}
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/15 text-sm font-medium text-white/80 hover:border-kwar-electric/40 hover:text-white transition-colors"
            >
              {t('epidash.hero.ctaSecondary')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-6 text-xs text-white/30 max-w-xl mx-auto leading-relaxed">
            {t('epidash.hero.note')}
          </p>
        </div>
      </section>

      {/* ─── NUMBERS ─── */}
      <section className="relative pb-4 lg:pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsBand
            items={[
              { value: t('epidash.stats.i1v'), label: t('epidash.stats.i1l') },
              { value: t('epidash.stats.i2v'), label: t('epidash.stats.i2l') },
              { value: t('epidash.stats.i3v'), label: t('epidash.stats.i3l') },
              { value: t('epidash.stats.i4v'), label: t('epidash.stats.i4l') },
            ]}
            footnote={t('epidash.stats.footnote')}
          />
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section ref={stepsReveal.ref} className="relative py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              {t('epidash.how.title')}
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed">
              {t('epidash.how.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.key}
                  className={`relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-700 hover:border-kwar-electric/25 ${
                    stepsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-kwar-electric/10 border border-kwar-electric/20">
                      <Icon className="w-4 h-4 text-kwar-electric" />
                    </span>
                    <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30">
                      {t('epidash.how.stepLabel', { number: index + 1 })}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-white mb-2">
                    {t(`epidash.how.${step.key}.title`)}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {t(`epidash.how.${step.key}.text`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section ref={featuresReveal.ref} className="relative py-16 lg:py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              {t('epidash.features.title')}
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed">
              {t('epidash.features.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.key}
                  className={`rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-700 hover:border-kwar-electric/25 ${
                    featuresReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <Icon className="w-5 h-5 text-kwar-electric mb-3" />
                  <h3 className="font-display text-base font-bold text-white mb-2">
                    {t(`epidash.features.${feature.key}.title`)}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {t(`epidash.features.${feature.key}.text`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="relative py-16 lg:py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              {t('epidash.cases.title')}
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed">
              {t('epidash.cases.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {cases.map((key) => (
              <div
                key={key}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-kwar-gold/25 transition-colors"
              >
                <h3 className="font-display text-base font-bold text-white mb-2">
                  {t(`epidash.cases.${key}.title`)}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {t(`epidash.cases.${key}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STRIP ─── */}
      <section className="relative py-10 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <Code2 className="w-5 h-5 text-kwar-electric mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white">{t('epidash.tech.t1.title')}</p>
              <p className="text-xs text-white/40 leading-relaxed mt-1">{t('epidash.tech.t1.text')}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ServerCog className="w-5 h-5 text-kwar-electric mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white">{t('epidash.tech.t2.title')}</p>
              <p className="text-xs text-white/40 leading-relaxed mt-1">{t('epidash.tech.t2.text')}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-kwar-electric mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white">{t('epidash.tech.t3.title')}</p>
              <p className="text-xs text-white/40 leading-relaxed mt-1">{t('epidash.tech.t3.text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
            {t('epidash.faq.title')}
          </h2>
          <div className="space-y-3">
            {faq.map((key) => (
              <details
                key={key}
                className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 open:border-kwar-electric/20"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {t(`epidash.faq.${key}.q`)}
                  </span>
                  <span className="text-kwar-electric text-lg leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-white/50 leading-relaxed">
                  {t(`epidash.faq.${key}.a`)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-16 lg:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            {t('epidash.cta.title')}
          </h2>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            {t('epidash.cta.text')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              {t('epidash.cta.primary')}
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/planos"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/15 text-sm font-medium text-white/80 hover:border-kwar-electric/40 hover:text-white transition-colors"
            >
              {t('epidash.cta.secondary')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
