import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { StatsBand } from '@/components/StatsBand';
import { Footer } from '@/sections/Footer';
import type { Locale, SolutionContentByLocale } from './types';

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

export function useLocale(): Locale {
  const { i18n } = useTranslation();
  const language = i18n.language || 'pt-BR';
  if (language.startsWith('en')) return 'en';
  if (language.startsWith('es')) return 'es';
  return 'pt-BR';
}

/** Keeps an in-site route in the router, sends everything else to the browser. */
function CtaLink({
  to,
  className,
  children,
}: {
  to: string;
  className: string;
  children: React.ReactNode;
}) {
  if (to.startsWith('http')) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

const secondaryClass =
  'inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/15 text-sm font-medium text-white/80 hover:border-kwar-electric/40 hover:text-white transition-colors';

/**
 * Shared layout for the persona solution pages (/hospitais, /pesquisa,
 * /saude-global, /vigilancia-epidemiologica). Content is per locale.
 */
export function SolutionPage({
  path,
  content,
  serviceName,
}: {
  path: string;
  content: SolutionContentByLocale;
  serviceName: string;
}) {
  const locale = useLocale();
  const c = content[locale];
  const heroReveal = useScrollReveal(0.2);
  const challengesReveal = useScrollReveal(0.1);
  const capabilitiesReveal = useScrollReveal(0.1);
  const workflowReveal = useScrollReveal(0.1);

  return (
    <div className="min-h-screen bg-[#050a10] text-white relative">
      <SEO
        title={c.seo.title}
        description={c.seo.description}
        path={path}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: serviceName,
          serviceType: c.seo.title,
          description: c.seo.description,
          url: `https://kwar-ai.com.br${path}`,
          areaServed: 'Worldwide',
          provider: {
            '@type': 'Organization',
            name: 'Kwar-AI',
            url: 'https://kwar-ai.com.br',
          },
        }}
      />

      {/* Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(0,240,255,0.07),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_25%,rgba(255,184,0,0.05),transparent_50%)]" />
      </div>

      {/* ─── HERO ─── */}
      <section ref={heroReveal.ref} className="relative pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div
            className={`mb-6 transition-all duration-1000 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kwar-electric/10 border border-kwar-electric/20 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-kwar-electric" />
              <span className="text-xs font-medium text-kwar-electric tracking-wider">
                {c.hero.badge}
              </span>
            </div>
          </div>

          <h1
            className={`font-display text-3xl sm:text-4xl lg:text-[3.1rem] font-bold leading-[1.12] mb-5 transition-all duration-1000 delay-100 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="block text-white">{c.hero.titleLine1}</span>
            <span className="bg-gradient-to-r from-kwar-electric via-cyan-200 to-kwar-gold bg-clip-text text-transparent">
              {c.hero.titleGradient}
            </span>
          </h1>

          <p
            className={`text-sm sm:text-base text-white/55 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {c.hero.subtitle}
          </p>

          <div
            className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-1000 delay-300 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              {c.hero.primaryCta}
              <ArrowRight className="w-4 h-4" />
            </a>
            <CtaLink to={c.hero.secondaryTo} className={secondaryClass}>
              {c.hero.secondaryCta}
            </CtaLink>
          </div>

          <p className="mt-6 text-xs text-white/30 max-w-xl mx-auto leading-relaxed">
            {c.hero.note}
          </p>
        </div>
      </section>

      {/* ─── NUMBERS ─── */}
      <section className="relative pb-4 lg:pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsBand items={c.stats} footnote={c.statsFootnote} />
        </div>
      </section>

      {/* ─── CHALLENGES ─── */}
      <section ref={challengesReveal.ref} className="relative py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              {c.challenges.title}
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed">
              {c.challenges.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.challenges.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-700 hover:border-kwar-electric/25 ${
                    challengesReveal.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] mb-4">
                    <Icon className="w-4 h-4 text-white/60" />
                  </span>
                  <h3 className="font-display text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES ─── */}
      <section
        ref={capabilitiesReveal.ref}
        className="relative py-16 lg:py-24 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              {c.capabilities.title}
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed">
              {c.capabilities.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.capabilities.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-700 hover:border-kwar-electric/25 ${
                    capabilitiesReveal.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-kwar-electric/10 border border-kwar-electric/20 mb-4">
                    <Icon className="w-4 h-4 text-kwar-electric" />
                  </span>
                  <h3 className="font-display text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WORKFLOW ─── */}
      <section ref={workflowReveal.ref} className="relative py-16 lg:py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              {c.workflow.title}
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed">
              {c.workflow.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.workflow.steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-700 ${
                  workflowReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30">
                  {c.workflow.stepLabel} {index + 1}
                </span>
                <h3 className="font-display text-base font-bold text-white mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUTCOMES ─── */}
      <section className="relative py-16 lg:py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              {c.outcomes.title}
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed">
              {c.outcomes.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {c.outcomes.items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-kwar-gold/25 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-kwar-gold mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-display text-base font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="relative py-16 lg:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
            {c.faq.title}
          </h2>
          <div className="space-y-3">
            {c.faq.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 open:border-kwar-electric/20"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <span className="text-sm sm:text-base font-semibold text-white">{item.q}</span>
                  <span className="text-kwar-electric text-lg leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-white/50 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RELATED ─── */}
      <section className="relative py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/30 mb-5">
            {c.related.title}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {c.related.items.map((item) => (
              <CtaLink
                key={item.label}
                to={item.to}
                className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 hover:border-kwar-electric/30 transition-colors block"
              >
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-kwar-electric transition-colors">
                  {item.label}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <p className="mt-2 text-xs text-white/40 leading-relaxed">{item.text}</p>
              </CtaLink>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-16 lg:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            {c.cta.title}
          </h2>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            {c.cta.text}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              {c.cta.primary}
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/planos" className={secondaryClass}>
              {c.cta.secondary}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SolutionPage;
