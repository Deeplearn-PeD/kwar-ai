import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BookOpen, Mail, Sparkles } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Footer } from '@/sections/Footer';
import { useLocale } from './solucoes/SolutionPage';
import { documentacaoContent } from './solucoes/documentacao.content';

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

export default function Documentacao() {
  const locale = useLocale();
  const c = documentacaoContent[locale];
  const heroReveal = useScrollReveal(0.2);

  return (
    <div className="min-h-screen bg-[#050a10] text-white relative">
      <SEO
        title={c.seo.title}
        description={c.seo.description}
        path="/documentacao"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: c.seo.title,
          description: c.seo.description,
          url: 'https://kwar-ai.com.br/documentacao',
          isPartOf: {
            '@type': 'WebSite',
            name: 'Kwar-AI',
            url: 'https://kwar-ai.com.br',
          },
        }}
      />

      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(0,240,255,0.07),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_30%,rgba(255,184,0,0.05),transparent_50%)]" />
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
              <BookOpen className="w-3.5 h-3.5 text-kwar-electric" />
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
              href="https://deeplearn.ltd/epidbot-docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              {c.hero.primaryCta}
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={c.hero.secondaryTo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/15 text-sm font-medium text-white/80 hover:border-kwar-electric/40 hover:text-white transition-colors"
            >
              {c.hero.secondaryCta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-6 text-xs text-white/30 max-w-xl mx-auto leading-relaxed">
            {c.hero.note}
          </p>
        </div>
      </section>

      {/* ─── GROUPS ─── */}
      {c.groups.map((group) => (
        <section key={group.title} className="relative py-10 lg:py-14 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-8">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                {group.title}
              </h2>
              <p className="text-white/45 text-sm leading-relaxed">{group.subtitle}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.items.map((item) => {
                const inner = (
                  <>
                    <span className="inline-flex items-start justify-between gap-2 text-sm font-semibold text-white group-hover:text-kwar-electric transition-colors">
                      {item.title}
                      <ArrowUpRight className="w-3.5 h-3.5 mt-0.5 text-white/25 group-hover:text-kwar-electric transition-colors shrink-0" />
                    </span>
                    <p className="mt-2 text-xs text-white/40 leading-relaxed">{item.text}</p>
                  </>
                );
                const className =
                  'group rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 hover:border-kwar-electric/30 transition-colors block';

                return item.external ? (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link key={item.title} to={item.href} className={className}>
                    {inner}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* ─── SUPPORT ─── */}
      <section className="relative py-12 lg:py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-kwar-electric/15 bg-kwar-electric/[0.04] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                {c.support.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">{c.support.text}</p>
            </div>
            <div className="flex flex-col sm:items-end gap-2 shrink-0">
              <Link
                to="/?scroll=contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 text-sm font-medium text-white/80 hover:border-kwar-electric/40 hover:text-white transition-colors"
              >
                {c.support.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`mailto:${c.support.email}`}
                className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-kwar-electric transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                {c.support.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-16 lg:py-24 border-t border-white/5">
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
            <Link
              to="/planos"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/15 text-sm font-medium text-white/80 hover:border-kwar-electric/40 hover:text-white transition-colors"
            >
              {c.cta.secondary}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
