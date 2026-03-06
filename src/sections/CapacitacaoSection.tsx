import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Users, BarChart3, Building2, Clock, ArrowRight, FileText, Database, Bot, ListChecks, ClipboardList } from 'lucide-react';

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
      id="capacitacao"
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
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-primary inline-flex items-center gap-2 group"
          >
            {t('capacitacao.cta')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Formação em IA - Novo Bloco */}
        <div
          className={`mt-20 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="card-glass p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-kwar-purple via-kwar-electric to-kwar-purple" />
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 mb-6">
                  <Bot className="w-4 h-4 text-kwar-electric" />
                  <span className="text-sm font-medium text-kwar-electric">{t('capacitacao.formacao.badge')}</span>
                </div>

                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
                  {t('capacitacao.formacao.title')}
                </h3>

                <p className="text-kwar-gray mb-6">
                  {t('capacitacao.formacao.subtitle')}
                </p>

                <div className="space-y-4 mb-8">
                  <p className="text-white/80">
                    {t('capacitacao.formacao.description')}
                  </p>
                  <p className="text-white/80">
                    {t('capacitacao.formacao.description2')}
                  </p>
                </div>

                <h4 className="text-white font-semibold mb-4">{t('capacitacao.formacao.topicsTitle')}</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-kwar-electric mt-0.5 flex-shrink-0" />
                    <span className="text-kwar-gray text-sm">{t('capacitacao.formacao.topics.topic1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-kwar-electric mt-0.5 flex-shrink-0" />
                    <span className="text-kwar-gray text-sm">{t('capacitacao.formacao.topics.topic2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ClipboardList className="w-5 h-5 text-kwar-electric mt-0.5 flex-shrink-0" />
                    <span className="text-kwar-gray text-sm">{t('capacitacao.formacao.topics.topic3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ListChecks className="w-5 h-5 text-kwar-electric mt-0.5 flex-shrink-0" />
                    <span className="text-kwar-gray text-sm">{t('capacitacao.formacao.topics.topic4')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Bot className="w-5 h-5 text-kwar-electric mt-0.5 flex-shrink-0" />
                    <span className="text-kwar-gray text-sm">{t('capacitacao.formacao.topics.topic5')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-kwar-electric mt-0.5 flex-shrink-0" />
                    <span className="text-kwar-gray text-sm">{t('capacitacao.formacao.topics.topic6')}</span>
                  </li>
                </ul>
              </div>

              {/* Right - CTA Card */}
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-br from-kwar-electric/10 to-kwar-purple/10 border border-kwar-electric/20 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-kwar-electric/20 flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-kwar-electric" />
                  </div>

                  <h4 className="font-display text-xl font-bold text-white mb-3">
                    {t('capacitacao.formacao.cta.title')}
                  </h4>

                  <p className="text-kwar-gray mb-6">
                    {t('capacitacao.formacao.cta.description')}
                  </p>

                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="btn-primary w-full justify-center"
                  >
                    {t('capacitacao.formacao.cta.button')}
                  </button>
                </div>

                {/* Público-alvo */}
                <div className="mt-6">
                  <h5 className="text-white font-semibold mb-3 text-sm">{t('capacitacao.formacao.target.title')}</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      t('capacitacao.formacao.target.item1'),
                      t('capacitacao.formacao.target.item2'),
                      t('capacitacao.formacao.target.item3'),
                      t('capacitacao.formacao.target.item4'),
                      t('capacitacao.formacao.target.item5'),
                    ].map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-kwar-gray text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CapacitacaoSection;
