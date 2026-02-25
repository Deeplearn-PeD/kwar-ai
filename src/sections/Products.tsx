import { useEffect, useRef, useState } from 'react';
import {
  Code2,
  GraduationCap,
  Database,
  LineChart,
  Zap,
  Shield,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
  Server,
  Brain,
  FileText,
  Settings,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const apiFeatures = [
  {
    icon: Database,
    title: 'Dados Estruturados',
    description: 'Séries históricas de indicadores de saúde por local e período.',
  },
  {
    icon: LineChart,
    title: 'Indicadores Sintéticos',
    description: 'Índices de risco, previsões de tendência e scores de prioridade.',
  },
  {
    icon: Zap,
    title: 'Integração Simples',
    description: 'Endpoints RESTful com respostas em JSON/CSV prontas para uso.',
  },
  {
    icon: Shield,
    title: 'Estabilidade',
    description: 'Ambiente dedicado com monitoramento e suporte técnico.',
  },
];

const apiCapabilities = [
  'Séries históricas de indicadores de saúde',
  'Dados contextuais (clima, demografia, socioeconômicos)',
  'Índices de risco e alerta',
  'Previsões de tendência',
  'Scores de prioridade para ações',
  'Integração de dados próprios do parceiro',
];

const courseModules = [
  {
    number: '01',
    title: 'Fundamentos de IA e LLMs',
    description: 'Conceitos essenciais sem matemática pesada, com foco em riscos, ética e LGPD.',
    duration: '4h',
  },
  {
    number: '02',
    title: 'LLMs no Dia a Dia',
    description: 'Uso de chatbots para boletins, relatórios, notas técnicas e comunicação.',
    duration: '4h',
  },
  {
    number: '03',
    title: 'IA + Dados Epidemiológicos',
    description: 'Exploração de dados de dengue, clima e demografia na plataforma Kwar-ai.',
    duration: '4h',
  },
  {
    number: '04',
    title: 'Planejamento e Governança',
    description: 'Ética, LGPD e roadmap de implementação de IA na secretaria.',
    duration: '4h',
  },
];

const courseBenefits = [
  'Equipe preparada para dialogar com fornecedores e universidades',
  'Casos de uso concretos saindo do curso',
  'Possibilidade de contratar consultorias sob medida',
  'Certificado de conclusão',
  'Acesso à plataforma durante o curso',
];

export function Products() {
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

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-kwar-electric/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-kwar-gold/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 mb-6">
            <Zap className="w-4 h-4 text-kwar-electric" />
            <span className="text-sm font-medium text-kwar-electric">Nossos Produtos</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Soluções que{' '}
            <span className="text-gradient">transformam</span>
          </h2>

          <p className="text-kwar-gray max-w-2xl mx-auto text-lg">
            Da infraestrutura técnica à capacitação de equipes, oferecemos tudo que você
            precisa para implementar inteligência epidemiológica.
          </p>
        </div>

        {/* Products Tabs */}
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
                <Code2 className="w-4 h-4 mr-2" />
                API de Saúde
              </TabsTrigger>
              <TabsTrigger
                value="course"
                className="data-[state=active]:bg-kwar-gold data-[state=active]:text-kwar-deep"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Curso de IA
              </TabsTrigger>
            </TabsList>

            {/* API Product */}
            <TabsContent value="api" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left - Info */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-kwar-electric/10 flex items-center justify-center">
                      <Server className="w-6 h-6 text-kwar-electric" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Kwar-ai API</h3>
                      <p className="text-kwar-gray text-sm">Infraestrutura de Inteligência em Saúde</p>
                    </div>
                  </div>

                  <p className="text-kwar-gray mb-8 leading-relaxed">
                    Uma infraestrutura de API escalável que conecta seu sistema a bases de dados
                    estruturadas e modelos analíticos da Kwar-ai. Entregamos dados organizados e
                    indicadores prontos para serem usados em mapas, dashboards, relatórios e alertas.
                  </p>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {apiFeatures.map((feature) => (
                      <div key={feature.title} className="card-glass p-4">
                        <feature.icon className="w-5 h-5 text-kwar-electric mb-2" />
                        <h4 className="text-white font-semibold text-sm mb-1">{feature.title}</h4>
                        <p className="text-kwar-gray text-xs">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Capabilities List */}
                  <div className="card-glass p-6">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-kwar-electric" />
                      O que a API entrega
                    </h4>
                    <ul className="space-y-2">
                      {apiCapabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2 text-sm text-kwar-gray">
                          <ArrowRight className="w-4 h-4 text-kwar-electric mt-0.5 flex-shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right - Code Preview */}
                <div className="relative">
                  <div className="card-glass overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-kwar-red" />
                        <div className="w-3 h-3 rounded-full bg-kwar-amber" />
                        <div className="w-3 h-3 rounded-full bg-kwar-green" />
                      </div>
                      <span className="text-xs text-kwar-gray ml-2">api-example.js</span>
                    </div>
                    <div className="p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-kwar-gray">
                        <span className="text-kwar-purple">const</span>{' '}
                        <span className="text-kwar-electric">response</span> ={' '}
                        <span className="text-kwar-purple">await</span>{' '}
                        <span className="text-kwar-electric">fetch</span>
                        {`(`}
                        <span className="text-kwar-gold">
                          'https://api.kwar-ai.com/v1/health-indicators'
                        </span>
                        ,{'\n'}
                        {`  `}
                        {`{`}
                        {'\n'}
                        {`    `}method: <span className="text-kwar-gold">'POST'</span>,{'\n'}
                        {`    `}headers: {`{`}
                        {'\n'}
                        {`      `}
                        <span className="text-kwar-gold">'Authorization'</span>:{' '}
                        <span className="text-kwar-gold">'Bearer YOUR_API_KEY'</span>,{'\n'}
                        {`      `}
                        <span className="text-kwar-gold">'Content-Type'</span>:{' '}
                        <span className="text-kwar-gold">'application/json'</span>,{'\n'}
                        {`    `}
                        {`}`},{'\n'}
                        {`    `}body:{' '}
                        <span className="text-kwar-electric">JSON</span>.stringify({`{`}
                        {'\n'}
                        {`      `}municipalities: [<span className="text-kwar-gold">'3550308'</span>],{'\n'}
                        {`      `}indicators: [<span className="text-kwar-gold">'dengue_risk'</span>],{'\n'}
                        {`      `}period: {`{`} from: <span className="text-kwar-gold">'2025-01'</span>, to:{' '}
                        <span className="text-kwar-gold">'2025-12'</span> {'}'},{'\n'}
                        {`    `}
                        {`}`}),{'\n'}
                        {`  `}
                        {`}`}
                        {`)`};{'\n\n'}
                        <span className="text-kwar-purple">const</span>{' '}
                        <span className="text-kwar-electric">data</span> ={' '}
                        <span className="text-kwar-purple">await</span>{' '}
                        <span className="text-kwar-electric">response</span>.json();{'\n'}
                        <span className="text-kwar-gray">// Retorna: riscos, previsões, scores</span>
                      </pre>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="card-glass p-4 text-center">
                      <p className="text-2xl font-bold text-kwar-electric">50K+</p>
                      <p className="text-xs text-kwar-gray">Chamadas/mês</p>
                    </div>
                    <div className="card-glass p-4 text-center">
                      <p className="text-2xl font-bold text-kwar-gold">99.9%</p>
                      <p className="text-xs text-kwar-gray">Uptime</p>
                    </div>
                    <div className="card-glass p-4 text-center">
                      <p className="text-2xl font-bold text-kwar-green">&lt;100ms</p>
                      <p className="text-xs text-kwar-gray">Latência</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Course Product */}
            <TabsContent value="course" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left - Info */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-kwar-gold/10 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-kwar-gold" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">IA em Saúde Pública</h3>
                      <p className="text-kwar-gray text-sm">Curso com Plataforma Kwar-ai</p>
                    </div>
                  </div>

                  <p className="text-kwar-gray mb-6 leading-relaxed">
                    Um curso de 16 horas, online ao vivo, em que gestores e técnicos aprendem a
                    usar IA na prática. Responde diretamente à lacuna de capacitação do Plano
                    Brasileiro de Inteligência Artificial 2024-2028.
                  </p>

                  {/* Course Info */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 card-glass px-4 py-2">
                      <Clock className="w-4 h-4 text-kwar-gold" />
                      <span className="text-sm text-white">16 horas</span>
                    </div>
                    <div className="flex items-center gap-2 card-glass px-4 py-2">
                      <Users className="w-4 h-4 text-kwar-gold" />
                      <span className="text-sm text-white">Até 30 participantes</span>
                    </div>
                    <div className="flex items-center gap-2 card-glass px-4 py-2">
                      <Brain className="w-4 h-4 text-kwar-gold" />
                      <span className="text-sm text-white">4 módulos</span>
                    </div>
                  </div>

                  {/* Modules */}
                  <div className="space-y-3 mb-8">
                    {courseModules.map((module) => (
                      <div key={module.number} className="card-glass p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-kwar-gold/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-kwar-gold font-bold text-sm">{module.number}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-sm">{module.title}</h4>
                          <p className="text-kwar-gray text-xs">{module.description}</p>
                        </div>
                        <span className="text-kwar-gold text-xs font-mono">{module.duration}</span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="card-glass p-6">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-kwar-gold" />
                      Benefícios para a Secretaria
                    </h4>
                    <ul className="space-y-2">
                      {courseBenefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-kwar-gray">
                          <ArrowRight className="w-4 h-4 text-kwar-gold mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right - Visual */}
                <div className="relative">
                  {/* Main Card */}
                  <div className="card-glass p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-kwar-gold/10 rounded-full blur-2xl" />
                    
                    <div className="relative">
                      <div className="flex items-center justify-center mb-6">
                        <div className="relative">
                          <div className="w-24 h-24 rounded-full bg-kwar-gold/10 flex items-center justify-center">
                            <GraduationCap className="w-12 h-12 text-kwar-gold" />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-kwar-electric flex items-center justify-center">
                            <Brain className="w-4 h-4 text-kwar-deep" />
                          </div>
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-white text-center mb-2">
                        Por que agora?
                      </h4>
                      
                      <p className="text-kwar-gray text-sm text-center mb-6">
                        O Plano Brasileiro de IA 2024-2028 prevê investimentos bilionários para
                        modernizar serviços públicos, mas o maior gargalo é a{' '}
                        <span className="text-kwar-gold">falta de capacitação</span> em IA nas
                        equipes de saúde pública.
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                          <FileText className="w-5 h-5 text-kwar-electric" />
                          <span className="text-sm text-white">Material didático incluso</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                          <Settings className="w-5 h-5 text-kwar-electric" />
                          <span className="text-sm text-white">Acesso à plataforma</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                          <CheckCircle2 className="w-5 h-5 text-kwar-electric" />
                          <span className="text-sm text-white">Certificado de conclusão</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-6 card-glass p-6 border-l-4 border-kwar-gold">
                    <p className="text-white italic text-sm leading-relaxed">
                      "Nosso curso responde diretamente a essa lacuna: forma pessoas, cria casos
                      de uso reais e prepara o caminho para projetos de análise e previsão com IA
                      no SUS."
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default Products;
