import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, Sparkles } from 'lucide-react';

export function EquipeSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const members = [
    {
      name: t('equipe.members.flavio.name'),
      role: t('equipe.members.flavio.role'),
      bio: t('equipe.members.flavio.bio'),
      linkedin: 'https://www.linkedin.com/in/fccoelho/',
      photo: '/images/flavio.png',
    },
    {
      name: t('equipe.members.joyce.name'),
      role: t('equipe.members.joyce.role'),
      bio: t('equipe.members.joyce.bio'),
      linkedin: 'https://www.linkedin.com/in/joycefbraga/',
      photo: '/images/joyce 1.png',
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
      className="relative py-24 lg:py-32 bg-[#050a10] overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-gold/10 border border-kwar-gold/30 mb-6">
            <Sparkles className="w-4 h-4 text-kwar-gold" />
            <span className="text-sm font-medium text-kwar-gold">{t('equipe.badge')}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span dangerouslySetInnerHTML={{ __html: t('equipe.title') }} />
          </h2>

          <p className="text-kwar-gray max-w-2xl mx-auto text-lg">
            <span dangerouslySetInnerHTML={{ __html: t('equipe.subtitle') }} />
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
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-2 border-kwar-electric/30">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
              </div>

              <div className="text-center mb-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2"
                >
                  <h3 className="font-display text-xl text-white group-hover:bg-gradient-to-r group-hover:from-kwar-electric group-hover:to-kwar-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                    {member.name}
                  </h3>
                  <Linkedin className="w-4 h-4 text-white/40 group-hover:text-kwar-gold transition-colors" />
                </a>
              </div>

              <p className="text-kwar-gold text-sm text-center mb-4 font-medium">
                {member.role}
              </p>

              <p className="text-kwar-gray text-sm leading-relaxed text-center whitespace-pre-line">
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
