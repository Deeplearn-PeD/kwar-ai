import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, Microscope, Newspaper, HeartPulse } from 'lucide-react';

export function ParaQuem() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const cards = [
    {
      icon: Building2,
      title: t('paraQuem.cards.healthDepartments.title'),
      description: t('paraQuem.cards.healthDepartments.description'),
      color: 'kwar-electric',
    },
    {
      icon: Microscope,
      title: t('paraQuem.cards.researchers.title'),
      description: t('paraQuem.cards.researchers.description'),
      color: 'kwar-purple',
    },
    {
      icon: Newspaper,
      title: t('paraQuem.cards.journalists.title'),
      description: t('paraQuem.cards.journalists.description'),
      color: 'kwar-gold',
    },
    {
      icon: HeartPulse,
      title: t('paraQuem.cards.hospitals.title'),
      description: t('paraQuem.cards.hospitals.description'),
      color: 'kwar-green',
    },
  ];

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
      id="para-quem"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 mb-6">
            <span className="text-sm font-medium text-kwar-electric">{t('paraQuem.badge')}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('paraQuem.title')}
          </h2>
        </div>

        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="card-glass-hover p-6 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-${card.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon className={`w-7 h-7 text-${card.color}`} />
              </div>
              <h3 className="text-white font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-kwar-gray">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ParaQuem;
