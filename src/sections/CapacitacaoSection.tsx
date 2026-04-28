import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Users, BarChart3, Building2, Clock, ArrowRight } from 'lucide-react';

export function CapacitacaoSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const audiences = [
    {
      icon: Users,
      title: t('capacitacao.audiences.surveillance.title'),
      description: t('capacitacao.audiences.surveillance.description'),
      color: 'kwar-electric',
    },
    {
      icon: BarChart3,
      title: t('capacitacao.audiences.analysts.title'),
      description: t('capacitacao.audiences.analysts.description'),
      color: 'kwar-purple',
    },
    {
      icon: GraduationCap,
      title: t('capacitacao.audiences.researchers.title'),
      description: t('capacitacao.audiences.researchers.description'),
      color: 'kwar-gold',
    },
    {
      icon: Building2,
      title: t('capacitacao.audiences.managers.title'),
      description: t('capacitacao.audiences.managers.description'),
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cursos"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-purple/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-purple/10 border border-kwar-purple/30 mb-6">
            <GraduationCap className="w-4 h-4 text-kwar-purple" />
            <span className="text-sm font-medium text-kwar-purple">{t('capacitacao.badge')}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('capacitacao.title')}
          </h2>

          <p className="text-kwar-gray max-w-3xl mx-auto text-lg leading-relaxed">
            {t('capacitacao.description')}
          </p>

          {/* Coming soon badge */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/5 border border-kwar-electric/20">
            <Clock className="w-4 h-4 text-kwar-electric" />
            <span className="text-sm text-kwar-electric">{t('capacitacao.comingSoon')}</span>
          </div>
        </div>

        {/* Audience Cards */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="card-glass-hover p-6 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-${audience.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <audience.icon className={`w-7 h-7 text-${audience.color}`} />
              </div>
              <h3 className="text-white font-semibold mb-2">{audience.title}</h3>
              <p className="text-sm text-kwar-gray">{audience.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-kwar-gray mb-6">
            {t('capacitacao.onDemand')}
          </p>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-primary inline-flex items-center gap-2 group"
          >
            {t('capacitacao.cta')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CapacitacaoSection;
