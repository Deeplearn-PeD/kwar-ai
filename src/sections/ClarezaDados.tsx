import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Puzzle, Code, Users, Clock } from 'lucide-react';

export function ClarezaDados() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const problems = [
    {
      icon: Puzzle,
      title: t('clarezaDados.problems.fragmentation.title'),
      description: t('clarezaDados.problems.fragmentation.description'),
      color: 'kwar-electric',
    },
    {
      icon: Code,
      title: t('clarezaDados.problems.technical.title'),
      description: t('clarezaDados.problems.technical.description'),
      color: 'kwar-purple',
    },
    {
      icon: Users,
      title: t('clarezaDados.problems.team.title'),
      description: t('clarezaDados.problems.team.description'),
      color: 'kwar-gold',
    },
    {
      icon: Clock,
      title: t('clarezaDados.problems.time.title'),
      description: t('clarezaDados.problems.time.description'),
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
      id="clareza-dados"
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
            <span className="text-sm font-medium text-kwar-electric">{t('clarezaDados.badge')}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('clarezaDados.title')}{' '}
            <span className="text-gradient">{t('clarezaDados.titleHighlight')}</span>
          </h2>

          <p className="text-kwar-gray max-w-2xl mx-auto text-lg">
            {t('clarezaDados.subtitle')}
          </p>
        </div>

        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="card-glass-hover p-6 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-${problem.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <problem.icon className={`w-7 h-7 text-${problem.color}`} />
              </div>
              <h3 className="text-white font-semibold mb-2">{problem.title}</h3>
              <p className="text-sm text-kwar-gray">{problem.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-mono text-sm text-kwar-gold uppercase tracking-wider">
            {t('clarezaDados.quote')}
          </p>
          <p className="text-kwar-gray/60 text-sm mt-2">
            {t('clarezaDados.quoteSub')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ClarezaDados;
