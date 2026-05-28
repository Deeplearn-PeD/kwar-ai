import { useTranslation } from 'react-i18next';
import { Users, Building2, HeartPulse, Microscope, Globe, GraduationCap } from 'lucide-react';

const audiences = [
  { icon: Microscope, key: 'researchers' },
  { icon: GraduationCap, key: 'universities' },
  { icon: HeartPulse, key: 'healthTeams' },
  { icon: Building2, key: 'hospitals' },
  { icon: Users, key: 'epidemiologists' },
  { icon: Globe, key: 'globalOrgs' },
];

const labels: Record<string, { title: string; subtitle: string; [key: string]: string | { title: string; desc: string } }> = {
  'pt-BR': {
    title: 'Para quem é o EpidBot',
    subtitle: 'Inteligência epidemiológica para todos os níveis de análise.',
    researchers: { title: 'Pesquisadores', desc: 'Acelere descobertas com análises automatizadas e dados integrados.' },
    universities: { title: 'Universidades', desc: 'Ferramentas de pesquisa para programas acadêmicos em epidemiologia.' },
    healthTeams: { title: 'Equipes de Saúde', desc: 'Suporte para vigilância e tomada de decisão baseada em evidências.' },
    hospitals: { title: 'Hospitais', desc: 'Inteligência epidemiológica para monitoramento e gestão hospitalar.' },
    epidemiologists: { title: 'Epidemiologistas', desc: 'Plataforma avançada para análise e modelagem epidemiológica.' },
    globalOrgs: { title: 'Organizações Globais', desc: 'Infraestrutura escalável para operações internacionais de saúde.' },
  },
  en: {
    title: 'Who EpidBot is for',
    subtitle: 'Epidemiological intelligence at every level of analysis.',
    researchers: { title: 'Researchers', desc: 'Accelerate discoveries with automated analysis and integrated data.' },
    universities: { title: 'Universities', desc: 'Research tools for academic programs in epidemiology.' },
    healthTeams: { title: 'Health Teams', desc: 'Support for evidence-based surveillance and decision-making.' },
    hospitals: { title: 'Hospitals', desc: 'Epidemiological intelligence for hospital monitoring and management.' },
    epidemiologists: { title: 'Epidemiologists', desc: 'Advanced platform for epidemiological analysis and modeling.' },
    globalOrgs: { title: 'Global Organizations', desc: 'Scalable infrastructure for international health operations.' },
  },
  es: {
    title: 'Para quién es EpidBot',
    subtitle: 'Inteligencia epidemiológica para todos los niveles de análisis.',
    researchers: { title: 'Investigadores', desc: 'Acelere descubrimientos con análisis automatizados y datos integrados.' },
    universities: { title: 'Universidades', desc: 'Herramientas de investigación para programas académicos en epidemiología.' },
    healthTeams: { title: 'Equipos de Salud', desc: 'Soporte para vigilancia y toma de decisiones basada en evidencia.' },
    hospitals: { title: 'Hospitales', desc: 'Inteligencia epidemiológica para monitoreo y gestión hospitalaria.' },
    epidemiologists: { title: 'Epidemiólogos', desc: 'Plataforma avanzada para análisis y modelado epidemiológico.' },
    globalOrgs: { title: 'Organizaciones Globales', desc: 'Infraestructura escalable para operaciones internacionales de salud.' },
  },
};

export function WhoIsItFor() {
  const { i18n } = useTranslation();
  const lng = i18n.language.startsWith('en') ? 'en' : i18n.language.startsWith('es') ? 'es' : 'pt-BR';
  const t = labels[lng];

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-kwar-deep via-kwar-deep/95 to-kwar-deep" />
      <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-kwar-electric/[0.03] blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            {t.title}
          </h2>
          <p className="text-kwar-gray text-sm sm:text-base max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {audiences.map((audience) => {
            const label = t[audience.key] as { title: string; desc: string };
            const Icon = audience.icon;
            return (
              <div
                key={audience.key}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 text-center transition-all duration-500 hover:border-kwar-electric/20 hover:bg-white/[0.025] hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-kwar-electric/10 bg-kwar-electric/[0.03] transition-all duration-500 group-hover:border-kwar-electric/25 group-hover:bg-kwar-electric/[0.06] group-hover:shadow-[0_0_24px_rgba(0,240,255,0.06)]">
                  <Icon className="h-5 w-5 text-kwar-electric/60 transition-colors group-hover:text-kwar-electric/80" />
                </div>
                <h3 className="text-white text-sm font-semibold mb-1">{label.title}</h3>
                <p className="text-kwar-gray/50 text-xs leading-relaxed hidden sm:block">{label.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
