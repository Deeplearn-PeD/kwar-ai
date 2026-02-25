import { useEffect, useRef, useState } from 'react';
import { Search, Brain, AlertTriangle, TrendingUp, Users, Building2, Stethoscope, Globe } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Coleta de Dados',
    description: 'Reunimos dados de múltiplas fontes: clima, buscas no Google, atendimentos de emergência, notificações de doenças e determinantes socioeconômicos.',
    color: 'kwar-electric',
  },
  {
    number: '02',
    icon: Brain,
    title: 'Processamento Neural',
    description: 'Nossos modelos de IA analisam padrões históricos e identificam correlações invisíveis ao olho humano.',
    color: 'kwar-purple',
  },
  {
    number: '03',
    icon: AlertTriangle,
    title: 'Geração de Alertas',
    description: 'Sistema classifica o cenário e gera alertas precoces com 14-21 dias de antecedência.',
    color: 'kwar-amber',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Ação Preventiva',
    description: 'Gestores recebem recomendações acionáveis para alocação de recursos e ações preventivas.',
    color: 'kwar-green',
  },
];

const targetAudience = [
  {
    icon: Building2,
    title: 'Gestores Públicos',
    description: 'Secretarias municipais e estaduais de saúde que precisam alocar recursos de forma eficiente.',
  },
  {
    icon: Stethoscope,
    title: 'Profissionais de Saúde',
    description: 'Médicos, enfermeiros e equipes de vigilância que atuam na linha de frente.',
  },
  {
    icon: Users,
    title: 'Plataformas de Saúde',
    description: 'Aplicativos e sistemas que precisam de dados inteligentes para seus usuários.',
  },
  {
    icon: Globe,
    title: 'Instituições de Pesquisa',
    description: 'Universidades e centros de pesquisa que estudam epidemiologia e saúde pública.',
  },
];

export function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  // Auto-advance steps
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-purple/10 border border-kwar-purple/30 mb-6">
            <Brain className="w-4 h-4 text-kwar-purple" />
            <span className="text-sm font-medium text-kwar-purple">Como Funciona</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            De dados brutos a{' '}
            <span className="text-gradient">decisões inteligentes</span>
          </h2>

          <p className="text-kwar-gray max-w-2xl mx-auto text-lg">
            Nosso processo transforma milhões de dados em insights acionáveis em quatro etapas.
          </p>
        </div>

        {/* Steps */}
        <div
          className={`mb-24 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Steps List */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`card-glass p-6 cursor-pointer transition-all duration-500 ${
                    activeStep === index
                      ? 'border-kwar-electric/50 bg-kwar-electric/5'
                      : 'border-transparent hover:border-white/10'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        activeStep === index ? `bg-${step.color}/20` : 'bg-white/5'
                      }`}
                    >
                      <step.icon
                        className={`w-6 h-6 text-${step.color}`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs font-mono text-${step.color}`}>
                          {step.number}
                        </span>
                        <h3 className="text-white font-semibold">{step.title}</h3>
                      </div>
                      <p
                        className={`text-sm leading-relaxed transition-all duration-300 ${
                          activeStep === index ? 'text-kwar-gray' : 'text-kwar-gray/60'
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="card-glass p-8 relative overflow-hidden min-h-[400px] flex items-center justify-center">
                {/* Background glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${steps[activeStep].color}/10 to-transparent transition-all duration-500`}
                />

                {/* Central Icon */}
                <div className="relative text-center">
                  <div
                    className={`w-32 h-32 rounded-full bg-${steps[activeStep].color}/10 flex items-center justify-center mx-auto mb-6 transition-all duration-500 animate-pulse-glow`}
                  >
                    {(() => {
                      const Icon = steps[activeStep].icon;
                      return <Icon className={`w-16 h-16 text-${steps[activeStep].color}`} />;
                    })()}
                  </div>

                  <div className="space-y-2">
                    <span
                      className={`text-sm font-mono text-${steps[activeStep].color}`}
                    >
                      ETAPA {steps[activeStep].number}
                    </span>
                    <h4 className="text-2xl font-bold text-white">{steps[activeStep].title}</h4>
                  </div>

                  {/* Progress indicators */}
                  <div className="flex justify-center gap-2 mt-8">
                    {steps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeStep === index
                            ? `w-8 bg-${steps[activeStep].color}`
                            : 'bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-kwar-electric/20 rounded-full" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border border-kwar-gold/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              Para Quem É
            </h3>
            <p className="text-kwar-gray max-w-2xl mx-auto">
              Nossas soluções são projetadas para diferentes perfis no ecossistema de saúde
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => (
              <div
                key={audience.title}
                className="card-glass-hover p-6 text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-kwar-electric/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <audience.icon className="w-7 h-7 text-kwar-electric" />
                </div>
                <h4 className="text-white font-semibold mb-2">{audience.title}</h4>
                <p className="text-sm text-kwar-gray">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
