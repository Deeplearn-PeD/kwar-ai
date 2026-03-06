import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, Microscope, Newspaper, HeartPulse, GraduationCap, Users } from 'lucide-react';

export function QuemUtiliza() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const items = [
    {
      icon: Building2,
      title: t('quemUtiliza.items.healthDepartments.title'),
      benefit: t('quemUtiliza.items.healthDepartments.benefit'),
      color: 'kwar-electric',
    },
    {
      icon: Microscope,
      title: t('quemUtiliza.items.researchers.title'),
      benefit: t('quemUtiliza.items.researchers.benefit'),
      color: 'kwar-purple',
    },
    {
      icon: Newspaper,
      title: t('quemUtiliza.items.journalists.title'),
      benefit: t('quemUtiliza.items.journalists.benefit'),
      color: 'kwar-gold',
    },
    {
      icon: HeartPulse,
      title: t('quemUtiliza.items.hospitals.title'),
      benefit: t('quemUtiliza.items.hospitals.benefit'),
      color: 'kwar-green',
    },
    {
      icon: GraduationCap,
      title: t('quemUtiliza.items.teachers.title'),
      benefit: t('quemUtiliza.items.teachers.benefit'),
      color: 'kwar-electric',
    },
    {
      icon: Users,
      title: t('quemUtiliza.items.students.title'),
      benefit: t('quemUtiliza.items.students.benefit'),
      color: 'kwar-purple',
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
      id="quem-utiliza"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-gold/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-gold/10 border border-kwar-gold/30 mb-6">
            <span className="text-sm font-medium text-kwar-gold">{t('quemUtiliza.badge')}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('quemUtiliza.title')}
          </h2>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {items.map((item, index) => (
            <div
              key={item.title}
              className="card-glass p-4 text-center group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={`w-12 h-12 rounded-lg bg-${item.color}/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className={`w-6 h-6 text-${item.color}`} />
              </div>
              <p className="font-mono text-xs text-kwar-gold uppercase tracking-wider mb-2">
                {item.benefit}
              </p>
              <h3 className="text-white text-sm font-medium">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuemUtiliza;
