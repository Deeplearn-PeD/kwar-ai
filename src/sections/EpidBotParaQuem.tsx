import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, Activity, Microscope, HeartPulse, Newspaper, GraduationCap, Globe, FlaskConical } from 'lucide-react';

export function EpidBotParaQuem() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const items = [
    {
      icon: Building2,
      title: t('epidBotParaQuem.items.healthDepartments.title'),
      description: t('epidBotParaQuem.items.healthDepartments.description'),
      color: 'kwar-electric',
    },
    {
      icon: Activity,
      title: t('epidBotParaQuem.items.surveillance.title'),
      description: t('epidBotParaQuem.items.surveillance.description'),
      color: 'kwar-purple',
    },
    {
      icon: Microscope,
      title: t('epidBotParaQuem.items.researchers.title'),
      description: t('epidBotParaQuem.items.researchers.description'),
      color: 'kwar-gold',
    },
    {
      icon: HeartPulse,
      title: t('epidBotParaQuem.items.hospitals.title'),
      description: t('epidBotParaQuem.items.hospitals.description'),
      color: 'kwar-green',
    },
    {
      icon: Newspaper,
      title: t('epidBotParaQuem.items.journalists.title'),
      description: t('epidBotParaQuem.items.journalists.description'),
      color: 'kwar-electric',
    },
    {
      icon: GraduationCap,
      title: t('epidBotParaQuem.items.students.title'),
      description: t('epidBotParaQuem.items.students.description'),
      color: 'kwar-purple',
    },
    {
      icon: Globe,
      title: t('epidBotParaQuem.items.international.title'),
      description: t('epidBotParaQuem.items.international.description'),
      color: 'kwar-gold',
    },
    {
      icon: FlaskConical,
      title: t('epidBotParaQuem.items.labs.title'),
      description: t('epidBotParaQuem.items.labs.description'),
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
      id="epidbot-para-quem"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-purple/10 border border-kwar-purple/30 mb-6">
            <span className="text-sm font-medium text-kwar-purple">{t('epidBotParaQuem.badge')}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('epidBotParaQuem.title')}
          </h2>

          <p className="text-kwar-gray max-w-2xl mx-auto text-lg">
            {t('epidBotParaQuem.subtitle')}
          </p>
        </div>

        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {items.map((item, index) => (
            <div
              key={item.title}
              className="card-glass-hover p-6 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-${item.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className={`w-7 h-7 text-${item.color}`} />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-kwar-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EpidBotParaQuem;
