import { useEffect, useRef, useState } from 'react';
import { Check, Zap, Building2, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const apiPlans = [
  {
    name: 'Partner',
    description: 'Para plataformas em operação nacional ou regional',
    price: '7.500',
    priceDetail: 'a R$ 10.000/mês',
    icon: Zap,
    color: 'kwar-electric',
    features: [
      'Até 50.000 chamadas de API por mês',
      'Dados de contexto (clima, demografia)',
      'Indicadores e modelos definidos em contrato',
      'Suporte de integração',
      'Monitoramento básico',
      'Excedente: R$ 0,15 por chamada adicional',
    ],
    cta: 'Solicitar Proposta',
    highlighted: false,
  },
  {
    name: 'Enterprise',
    description: 'Para ministérios, secretarias e grandes redes',
    price: 'Sob',
    priceDetail: 'consulta',
    icon: Building2,
    color: 'kwar-gold',
    features: [
      'A partir de 200.000 chamadas/mês',
      'Modelos customizados',
      'SLAs reforçados',
      'Suporte dedicado 24/7',
      'Relatórios de uso avançados',
      'Consultoria especializada',
    ],
    cta: 'Falar com Especialista',
    highlighted: true,
  },
];

const coursePlans = [
  {
    name: 'Turma Fechada',
    description: 'Para secretarias (até 30 participantes)',
    price: '35.000',
    priceDetail: 'por turma',
    icon: Users,
    color: 'kwar-gold',
    features: [
      'Curso completo de 16 horas',
      'Material didático incluso',
      'Acesso à plataforma durante o curso',
      'Certificado de conclusão',
      'Casos de uso personalizados',
      'Suporte pós-curso (30 dias)',
    ],
    cta: 'Agendar Turma',
    highlighted: true,
  },
  {
    name: 'Turma Aberta',
    description: 'Inscrição individual (mín. 20 alunos)',
    price: '1.500',
    priceDetail: 'por participante',
    icon: Sparkles,
    color: 'kwar-electric',
    features: [
      'Curso completo de 16 horas',
      'Material didático incluso',
      'Acesso à plataforma durante o curso',
      'Certificado de conclusão',
      'Networking com outros gestores',
      'Abertura a partir de 20 inscritos',
    ],
    cta: 'Registrar Interesse',
    highlighted: false,
  },
];

const platformSubscription = {
  title: 'Acesso Continuado à Plataforma',
  description: 'Assinatura semestral para secretarias',
  price: '9.000',
  period: 'por semestre',
  features: [
    'Painel de dados de arboviroses',
    'Espaço de experimentação com LLM',
    'Até 10 usuários',
    'Suporte básico',
    'Atualizações automáticas',
  ],
};

export function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-green/10 border border-kwar-green/30 mb-6">
            <Zap className="w-4 h-4 text-kwar-green" />
            <span className="text-sm font-medium text-kwar-green">Planos e Preços</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Investimento{' '}
            <span className="text-gradient">transparente</span>
          </h2>

          <p className="text-kwar-gray max-w-2xl mx-auto text-lg">
            Escolha a solução que melhor se adapta às necessidades da sua instituição.
            Todos os planos incluem suporte e atualizações.
          </p>
        </div>

        {/* Pricing Tabs */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Tabs defaultValue="api" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-kwar-deep border border-kwar-electric/20">
              <TabsTrigger
                value="api"
                className="data-[state=active]:bg-kwar-electric data-[state=active]:text-kwar-deep"
              >
                <Zap className="w-4 h-4 mr-2" />
                API de Saúde
              </TabsTrigger>
              <TabsTrigger
                value="course"
                className="data-[state=active]:bg-kwar-gold data-[state=active]:text-kwar-deep"
              >
                <Users className="w-4 h-4 mr-2" />
                Curso de IA
              </TabsTrigger>
            </TabsList>

            {/* API Pricing */}
            <TabsContent value="api" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8">
                {apiPlans.map((plan, index) => (
                  <div
                    key={plan.name}
                    className={`relative card-glass p-8 transition-all duration-500 hover:scale-[1.02] ${
                      plan.highlighted
                        ? 'border-kwar-gold/50 shadow-glow-gold'
                        : 'border-white/10'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1 bg-kwar-gold text-kwar-deep text-xs font-bold rounded-full">
                          MAIS POPULAR
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-${plan.color}/10 flex items-center justify-center`}>
                        <plan.icon className={`w-6 h-6 text-${plan.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                        <p className="text-kwar-gray text-sm">{plan.description}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        {plan.price !== 'Sob' && <span className="text-kwar-gray text-lg">R$</span>}
                        <span className={`text-4xl font-bold text-${plan.color}`}>
                          {plan.price}
                        </span>
                      </div>
                      <p className="text-kwar-gray text-sm">{plan.priceDetail}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 text-${plan.color} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-kwar-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={scrollToContact}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group ${
                        plan.highlighted
                          ? 'bg-kwar-gold text-kwar-deep hover:bg-kwar-gold/90'
                          : 'bg-kwar-electric text-kwar-deep hover:bg-kwar-electric/90'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="mt-8 text-center">
                <p className="text-kwar-gray text-sm">
                  Projetos de integração e configuração inicial são contratados à parte,
                  em formato de projeto fechado.
                </p>
              </div>
            </TabsContent>

            {/* Course Pricing */}
            <TabsContent value="course" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8">
                {coursePlans.map((plan, index) => (
                  <div
                    key={plan.name}
                    className={`relative card-glass p-8 transition-all duration-500 hover:scale-[1.02] ${
                      plan.highlighted
                        ? 'border-kwar-gold/50 shadow-glow-gold'
                        : 'border-white/10'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1 bg-kwar-gold text-kwar-deep text-xs font-bold rounded-full">
                          RECOMENDADO
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-${plan.color}/10 flex items-center justify-center`}>
                        <plan.icon className={`w-6 h-6 text-${plan.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                        <p className="text-kwar-gray text-sm">{plan.description}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-kwar-gray text-lg">R$</span>
                        <span className={`text-4xl font-bold text-${plan.color}`}>
                          {plan.price}
                        </span>
                      </div>
                      <p className="text-kwar-gray text-sm">{plan.priceDetail}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 text-${plan.color} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-kwar-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={scrollToContact}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group ${
                        plan.highlighted
                          ? 'bg-kwar-gold text-kwar-deep hover:bg-kwar-gold/90'
                          : 'bg-kwar-electric text-kwar-deep hover:bg-kwar-electric/90'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Platform Subscription */}
              <div
                className={`mt-8 card-glass p-8 border border-kwar-purple/30 transition-all duration-1000 delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-kwar-purple/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-kwar-purple" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{platformSubscription.title}</h4>
                        <p className="text-kwar-gray text-sm">{platformSubscription.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8">
                    <div className="flex flex-wrap gap-2">
                      {platformSubscription.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 rounded-full bg-kwar-purple/10 text-kwar-purple text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-baseline gap-1">
                          <span className="text-kwar-gray">R$</span>
                          <span className="text-2xl font-bold text-kwar-purple">
                            {platformSubscription.price}
                          </span>
                        </div>
                        <p className="text-kwar-gray text-xs">{platformSubscription.period}</p>
                      </div>

                      <button
                        onClick={scrollToContact}
                        className="px-6 py-2 bg-kwar-purple text-white rounded-lg font-semibold hover:bg-kwar-purple/90 transition-colors"
                      >
                        Assinar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Trust indicators */}
        <div
          className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { value: '100%', label: 'Foco no SUS' },
            { value: '24/7', label: 'Suporte Técnico' },
            { value: 'LGPD', label: 'Compliance' },
            { value: 'Cloud', label: 'Infraestrutura' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-2xl font-bold text-kwar-electric">{item.value}</p>
              <p className="text-sm text-kwar-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
