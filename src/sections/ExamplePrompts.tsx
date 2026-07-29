import { useTranslation } from 'react-i18next';
import { MessageSquare, ArrowRight } from 'lucide-react';

const labels: Record<string, { title: string; subtitle: string; cta: string; prompts: string[] }> = {
  'pt-BR': {
    title: 'Explore dados de saúde pública com IA',
    subtitle: 'Pergunte o que quiser e receba análises epidemiológicas em minutos.',
    cta: 'Testar o EpidBot',
    prompts: [
      'Compare a incidência de dengue na América Latina entre 2018 e 2024',
      'Analise tendências de mortalidade por faixa etária no Brasil',
      'Gere um relatório epidemiológico para São Paulo',
      'Compare a cobertura vacinal entre municípios da região Nordeste',
      'Identifique aglomerados espaciais de malária na região Amazônica',
      'Explore padrões de sazonalidade de doenças respiratórias',
    ],
  },
  en: {
    title: 'Explore public health data with AI',
    subtitle: 'Ask anything and get epidemiological analyses in minutes.',
    cta: 'Try EpidBot',
    prompts: [
      'Compare dengue incidence across Latin America between 2018 and 2024',
      'Analyze mortality trends by age group in Brazil',
      'Generate an epidemiological summary report for São Paulo',
      'Compare vaccination coverage across municipalities in the Northeast',
      'Identify spatial clustering of malaria cases in the Amazon region',
      'Explore respiratory disease seasonality patterns',
    ],
  },
  es: {
    title: 'Explore datos de salud pública con IA',
    subtitle: 'Pregunte lo que quiera y reciba análisis epidemiológicos en minutos.',
    cta: 'Probar EpidBot',
    prompts: [
      'Compare la incidencia de dengue en América Latina entre 2018 y 2024',
      'Analice tendencias de mortalidad por grupo de edad en Brasil',
      'Genere un informe epidemiológico para São Paulo',
      'Compare la cobertura de vacunación entre municipios del Nordeste',
      'Identifique agrupaciones espaciales de malaria en la región amazónica',
      'Explore patrones de estacionalidad de enfermedades respiratorias',
    ],
  },
};

export function ExamplePrompts() {
  const { i18n } = useTranslation();
  const lng = i18n.language.startsWith('en') ? 'en' : i18n.language.startsWith('es') ? 'es' : 'pt-BR';
  const t = labels[lng];

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-kwar-deep/95 via-kwar-deep to-kwar-deep/95" />
      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-kwar-electric/[0.03] blur-[130px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            {t.title}
          </h2>
          <p className="text-kwar-gray text-sm sm:text-base max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Floating prompt cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
          {t.prompts.map((prompt, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 transition-all duration-500 hover:border-kwar-electric/20 hover:bg-white/[0.025] hover:-translate-y-1 cursor-default"
            >
              <MessageSquare className="h-3.5 w-3.5 text-kwar-electric/30 mb-2 transition-colors group-hover:text-kwar-electric/50" />
              <p className="text-kwar-gray text-sm leading-relaxed">{prompt}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/#/epidbot"
            className="group inline-flex items-center gap-2 rounded-full bg-kwar-electric px-5 py-2.5 text-sm font-semibold text-kwar-deep transition-all hover:bg-kwar-electric/90 hover:shadow-glow"
          >
            {t.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
