import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, FileText, TrendingUp, Layers, Zap, BarChart3, FlaskConical, Clock } from 'lucide-react';

export function EpidBotBeneficios() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    {
      icon: MessageSquare,
      title: t('epidBotBeneficios.items.conversational.title'),
      description: t('epidBotBeneficios.items.conversational.description'),
      color: 'kwar-electric',
    },
    {
      icon: FileText,
      title: t('epidBotBeneficios.items.synthesis.title'),
      description: t('epidBotBeneficios.items.synthesis.description'),
      color: 'kwar-purple',
    },
    {
      icon: TrendingUp,
      title: t('epidBotBeneficios.items.patterns.title'),
      description: t('epidBotBeneficios.items.patterns.description'),
      color: 'kwar-gold',
    },
    {
      icon: Layers,
      title: t('epidBotBeneficios.items.integration.title'),
      description: t('epidBotBeneficios.items.integration.description'),
      color: 'kwar-green',
    },
    {
      icon: Zap,
      title: t('epidBotBeneficios.items.decision.title'),
      description: t('epidBotBeneficios.items.decision.description'),
      color: 'kwar-electric',
    },
    {
      icon: BarChart3,
      title: t('epidBotBeneficios.items.visualization.title'),
      description: t('epidBotBeneficios.items.visualization.description'),
      color: 'kwar-purple',
    },
    {
      icon: FlaskConical,
      title: t('epidBotBeneficios.items.hypotheses.title'),
      description: t('epidBotBeneficios.items.hypotheses.description'),
      color: 'kwar-gold',
    },
    {
      icon: Clock,
      title: t('epidBotBeneficios.items.time.title'),
      description: t('epidBotBeneficios.items.time.description'),
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
      id="epidbot-beneficios"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-gold/10 border border-kwar-gold/30 mb-6">
            <span className="text-sm font-medium text-kwar-gold">{t('epidBotBeneficios.badge')}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('epidBotBeneficios.title')}
          </h2>

          <p className="text-kwar-gray max-w-2xl mx-auto text-lg">
            {t('epidBotBeneficios.subtitle')}
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="card-glass p-6 group hover:border-kwar-electric/30 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-${benefit.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className={`w-6 h-6 text-${benefit.color}`} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-kwar-gray">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-primary"
          >
            {t('epidBotBeneficios.cta')}
          </button>
        </div>
      </div>
    </section>
  );
}

export default EpidBotBeneficios;
