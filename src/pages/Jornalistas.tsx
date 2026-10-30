import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, Newspaper, Sparkles } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Footer } from '@/sections/Footer';
import { useLocale } from './solucoes/SolutionPage';
import { jornalistasContent } from './solucoes/jornalistas.content';

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

const REGISTER_URL = 'https://epidbot.kwar-ai.com.br/register';

const secondaryClass =
  'inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/15 text-sm font-medium text-white/80 hover:border-kwar-electric/40 hover:text-white transition-colors';

export default function Jornalistas() {
  const locale = useLocale();
  const c = jornalistasContent[locale];
  const heroReveal = useScrollReveal(0.2);

  return (
    <div className="min-h-screen bg-[#050a10] text-white relative">
      <SEO
        title={c.seo.title}
        description={c.seo.description}
        path="/jornalistas"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: c.seo.title,
          description: c.seo.description,
          url: 'https://kwar-ai.com.br/jornalistas',
          about: {
            '@type': 'Organization',
            name: 'Kwar-AI',
            url: 'https://kwar-ai.com.br',
            email: c.contact.email,
          },
        }}
      />

      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_0%,rgba(0,240,255,0.07),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(255,184,0,0.05),transparent_50%)]" />
      </div>

      {/* ─── HERO ─── */}
      <section ref={heroReveal.ref} className="relative pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div
            className={`mb-6 transition-all duration-1000 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kwar-electric/10 border border-kwar-electric/20 backdrop-blur-sm">
              <Newspaper className="w-3.5 h-3.5 text-kwar-electric" />
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
            <a href={`mailto:${c.contact.email}?subject=Imprensa`} className="btn-primary inline-flex items-center gap-2">
              {c.hero.primaryCta}
              <Mail className="w-4 h-4" />
            </a>
            <Link to={c.hero.secondaryTo} className={secondaryClass}>
              {c.hero.secondaryCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="mt-6 text-xs text-white/30 max-w-xl mx-auto leading-relaxed">
            {c.hero.note}
          </p>
        </div>
      </section>

      {/* ─── FACTS ─── */}
      <section className="relative py-12 lg:py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              {c.facts.title}
            </h2>
            <p className="text-white/45 text-sm leading-relaxed">{c.facts.subtitle}</p>
          </div>
          <dl className="grid sm:grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06]">
            {c.facts.items.map((item) => (
              <div key={item.label} className="bg-[#080c14] px-5 py-5">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/30">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm text-white/70 leading-relaxed">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── HELP ─── */}
      <section className="relative py-12 lg:py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              {c.help.title}
            </h2>
            <p className="text-white/45 text-sm leading-relaxed">{c.help.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.help.items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-kwar-electric/25 transition-colors"
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

      {/* ─── ASSETS ─── */}
      <section className="relative py-12 lg:py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              {c.assets.title}
            </h2>
            <p className="text-white/45 text-sm leading-relaxed">{c.assets.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {c.assets.items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-kwar-electric/30 transition-colors flex items-start justify-between gap-4"
              >
                <div>
                  <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-kwar-electric transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">{item.text}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-kwar-electric whitespace-nowrap mt-1">
                  <Download className="w-3.5 h-3.5" />
                  {item.label}
                </span>
              </a>
            ))}
          </div>
          <p className="mt-4 text-[11px] leading-relaxed text-white/30 max-w-3xl">{c.assets.rights}</p>
        </div>
      </section>

      {/* ─── EXPERTS ─── */}
      <section className="relative py-12 lg:py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              {c.experts.title}
            </h2>
            <p className="text-white/45 text-sm leading-relaxed">{c.experts.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {c.experts.items.map((expert) => (
              <div
                key={expert.name}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
              >
                <h3 className="font-display text-base font-bold text-white">{expert.name}</h3>
                <p className="mt-1 text-xs text-kwar-electric/80">{expert.role}</p>
                <p className="mt-3 text-white/45 text-sm leading-relaxed">{expert.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRINCIPLES ─── */}
      <section className="relative py-12 lg:py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              {c.principles.title}
            </h2>
            <p className="text-white/45 text-sm leading-relaxed">{c.principles.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.principles.items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
              >
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section className="relative py-12 lg:py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-kwar-electric/15 bg-kwar-electric/[0.04] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                {c.contact.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">{c.contact.text}</p>
            </div>
            <div className="flex flex-col sm:items-end gap-2 shrink-0">
              <a
                href={`mailto:${c.contact.email}?subject=Imprensa`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 text-sm font-medium text-white/80 hover:border-kwar-electric/40 hover:text-white transition-colors"
              >
                {c.contact.cta}
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${c.contact.email}`}
                className="text-xs text-white/40 hover:text-kwar-electric transition-colors"
              >
                {c.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-16 lg:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-kwar-electric" />
          </div>
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
