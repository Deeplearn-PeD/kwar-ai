import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Activity, BarChart3, Database, Monitor, Shield, Handshake } from 'lucide-react';

export function EquipeRedeSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const areasRaw = t('equipeRede.areas', { returnObjects: true }) as unknown;
  const areas = Array.isArray(areasRaw) ? (areasRaw as { title: string; desc: string }[]) : [];

  const ICON_MAP = [Activity, BarChart3, Database, Monitor, Shield, Handshake];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="equipe-rede"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-purple/30 to-transparent" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-kwar-purple/5 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-purple/10 border border-kwar-purple/30 mb-6">
            <span className="text-sm font-medium text-kwar-purple">{t('equipeRede.badge')}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('equipeRede.title')}
          </h2>

          <p className="text-kwar-electric text-lg mb-6">
            {t('equipeRede.subtitle')}
          </p>

          <p className="text-kwar-gray max-w-3xl mx-auto leading-relaxed">
            {t('equipeRede.description')}
          </p>
        </div>

        {/* Areas cards grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {Array.isArray(areas) && areas.map((area, index) => {
            const IconComponent = ICON_MAP[index] || Activity;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-kwar-purple/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-kwar-purple/10 flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5 text-kwar-purple" />
                </div>
                <h3 className="font-display text-sm text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed">
                  {area.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Credibility line */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-mono text-xs text-white/40">
            {t('equipeRede.credibilidade')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default EquipeRedeSection;
