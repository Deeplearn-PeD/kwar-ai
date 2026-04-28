import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, User } from 'lucide-react';

export function EquipeSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const members = [
    {
      name: t('equipe.members.flavio.name'),
      role: t('equipe.members.flavio.role'),
      bio: t('equipe.members.flavio.bio'),
      linkedin: 'https://linkedin.com/in/flaviocodeco',
    },
    {
      name: t('equipe.members.joyce.name'),
      role: t('equipe.members.joyce.role'),
      bio: t('equipe.members.joyce.bio'),
      linkedin: 'https://linkedin.com/in/joycefigueiro',
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
      id="equipe"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 mb-6">
            <span className="text-sm font-medium text-kwar-electric">{t('equipe.badge')}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('equipe.title')}
          </h2>

          <p className="text-kwar-gray max-w-2xl mx-auto text-lg">
            {t('equipe.subtitle')}
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {members.map((member, index) => (
            <div
              key={member.name}
              className="card-glass p-8 text-center group hover:border-kwar-electric/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-kwar-electric/20 to-kwar-gold/10 flex items-center justify-center mx-auto mb-6 border-2 border-kwar-electric/30">
                <User className="w-10 h-10 text-kwar-electric/60" />
              </div>

              <div className="text-center mb-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2"
                >
                  <h3 className="font-display text-xl text-white group-hover:text-kwar-electric transition-colors">
                    {member.name}
                  </h3>
                  <Linkedin className="w-4 h-4 text-white/40 group-hover:text-kwar-electric transition-colors" />
                </a>
              </div>

              <p className="text-kwar-gold text-sm text-center mb-4 font-medium">
                {member.role}
              </p>

              <p className="text-kwar-gray text-sm leading-relaxed text-center">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EquipeSection;
