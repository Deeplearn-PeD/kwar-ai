import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ExternalLink, LayoutDashboard, MessageSquare } from 'lucide-react';

const DEMO_URL = 'https://dash.kwar-ai.com.br';

export function EpiDashSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const bullets = ['b1', 'b2', 'b3'];
  const bars = [38, 52, 46, 64, 58, 72, 66, 81, 74, 88, 79, 92];

  return (
    <section
      id="epidash"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[#050a10] overflow-hidden border-t border-white/5"
    >
      <div
        className="absolute top-1/3 right-0 w-[600px] h-[420px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,240,255,0.05) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-gold/10 border border-kwar-gold/30 backdrop-blur-sm mb-6">
              <LayoutDashboard className="w-4 h-4 text-kwar-gold" />
              <span className="text-sm font-medium text-kwar-gold">{t('epidash.home.badge')}</span>
            </div>

            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5 leading-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              {t('epidash.home.title')}
            </h2>

            <p className="text-base text-white/50 leading-relaxed mb-7 max-w-xl">
              {t('epidash.home.text')}
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-kwar-electric mt-1 shrink-0" />
                  <span className="text-sm text-white/60 leading-relaxed">
                    {t(`epidash.home.${key}`)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/epidash" className="btn-primary inline-flex items-center justify-center gap-2">
                {t('epidash.home.cta')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/15 text-sm font-medium text-white/75 hover:border-kwar-electric/40 hover:text-white transition-colors"
              >
                {t('epidash.home.demo')}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Mock dashboard */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden shadow-[0_0_60px_rgba(0,240,255,0.06)]">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
                <span className="w-2 h-2 rounded-full bg-white/15" />
                <span className="w-2 h-2 rounded-full bg-white/15" />
                <span className="w-2 h-2 rounded-full bg-white/15" />
                <span className="ml-3 text-[11px] text-white/30 font-mono truncate">
                  {t('epidash.home.mock.url')}
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-white/30 mb-4">
                  {t('epidash.home.mock.title')}
                </p>

                {/* KPIs */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                    <p className="text-[10px] text-white/35 mb-1">{t('epidash.home.mock.kpi1')}</p>
                    <p className="text-lg font-semibold text-white">12.480</p>
                  </div>
                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                    <p className="text-[10px] text-white/35 mb-1">{t('epidash.home.mock.kpi2')}</p>
                    <p className="text-lg font-semibold text-kwar-electric">+18,4%</p>
                  </div>
                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                    <p className="text-[10px] text-white/35 mb-1">{t('epidash.home.mock.kpi3')}</p>
                    <p className="text-lg font-semibold text-white">92</p>
                  </div>
                </div>

                {/* Chart */}
                <div className="flex items-end gap-1.5 h-32 rounded-lg border border-white/[0.06] bg-white/[0.015] p-3">
                  {bars.map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t bg-gradient-to-t from-kwar-electric/20 to-kwar-electric/70"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                {/* Ask box */}
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2.5">
                  <MessageSquare className="w-4 h-4 text-kwar-electric shrink-0" />
                  <span className="text-xs text-white/35">{t('epidash.home.mock.ask')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EpiDashSection;
