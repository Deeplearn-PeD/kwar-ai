import { useEffect, useRef, useState } from 'react';
import { Sun, Brain, Target, Lightbulb, RefreshCw, Eye } from 'lucide-react';

const pillars = [
  {
    icon: RefreshCw,
    title: 'Renovação',
    description: 'Modelos que aprendem continuamente com novos dados, ajustando-se a mudanças ambientais, comportamentais e epidemiológicas.',
    color: 'kwar-electric',
  },
  {
    icon: Lightbulb,
    title: 'Clareza',
    description: 'Análises complexas traduzidas em inteligência acionável — para que decisões estratégicas sejam tomadas com segurança.',
    color: 'kwar-gold',
  },
  {
    icon: Target,
    title: 'Ciclicidade',
    description: 'Doenças seguem padrões sazonais e dinâmicas previsíveis. Mapeamos esses ciclos com rigor estatístico.',
    color: 'kwar-purple',
  },
  {
    icon: Eye,
    title: 'Antecipação',
    description: 'Identificamos sinais precoces de risco e emitimos alertas com antecedência — quando ainda há tempo para agir.',
    color: 'kwar-green',
  },
];

export function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-kwar-electric/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Origin Story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Left - Story */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-gold/10 border border-kwar-gold/30 mb-6">
              <Sun className="w-4 h-4 text-kwar-gold" />
              <span className="text-sm font-medium text-kwar-gold">Nossa Origem</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              A Profecia do
              <span className="text-gradient block">Amanhecer</span>
            </h2>

            <div className="space-y-4 text-kwar-gray leading-relaxed">
              <p>
                Muito antes de existirem algoritmos, os povos Tupi já entendiam algo essencial:
                 o futuro deixa sinais no presente. Para eles,{' '}
                <span className="text-kwar-gold font-medium">Kuaray</span> — o sol — não era apenas luz, mas ciclo. O amanhecer
                 não era surpresa; era consequência de padrões observados com atenção.
              </p>
              
              <p>
                Os xamãs não adivinhavam. Eles reconheciam indícios. 
                Antes da chuva, o vento mudava. Antes da escassez, os movimentos se alteravam. Antes da doença se espalhar, o ambiente já indicava desequilíbrio. Havia sinais — e havia quem soubesse lê-los.
              </p>
              
              <p className="text-white/80 leading-relaxed">
                A <span className="bg-gradient-to-r from-[#F7DC6F] to-[#F5C842] bg-clip-text text-transparent font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(245,200,66,0.4)]"> Kwar-AI </span> 
                nasce dessa mesma lógica. 
                É uma luz estratégica para decisões em saúde pública.
              </p>

              <p>
                Epidemias não começam quando viram notícia. 
                Elas se formam silenciosamente, deixando rastros em dados 
                ambientais, epidemiológicos e comportamentais. O que parece 
                ruído isolado pode revelar tendência quando analisado em 
                conjunto. Nosso trabalho é identificar essas convergências 
                antes que se tornem crises.
               </p>
              <p>
                Dessa mesma lógica nasce a <span className="bg-gradient-to-r from-[#F7DC6F] to-[#F5C842] bg-clip-text text-transparent font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(245,200,66,0.4)]"> Kwar-AI</span>,
                com uma convicção simples: surtos anunciam sua própria chegada. 
                Inteligência epidemiológica é a capacidade de reconhecer esse 
                anúncio a tempo de agir.
              </p>
             <p className="text-white font-medium border-l-2 border-kwar-electric pl-4">
                O sol nasce para todos. Mas a{" "}
                <span className="bg-gradient-to-r from-[#F7DC6F] to-[#F5C842] bg-clip-text text-transparent font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(245,200,66,0.4)]"> Kwar-AI</span>
                 {" "}
                reconhece os sinais antes do amanhecer.
              </p>
            </div>
          </div>

          {/* Right - Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-kwar-electric/30 rounded-lg" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-kwar-gold/30 rounded-lg" />
              
              {/* Main content card */}
              <div className="card-glass p-8 relative">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <Sun className="w-20 h-20 text-kwar-gold animate-pulse-glow" />
                    <Brain className="w-10 h-10 text-kwar-electric absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white text-center mb-4">
                  Sabedoria Ancestral. Inteligência Científica.
                </h3>
                
                <p className="text-kwar-gray text-center text-sm leading-relaxed mb-6">
                  A <span className="bg-gradient-to-r from-[#F7DC6F] to-[#F5C842] bg-clip-text text-transparent font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(245,200,66,0.4)]"> Kwar-AI</span>
                 {" "}
                  une a lógica ancestral de observar sinais ao rigor da modelagem estatística e da ciência de dados.
                  Não interpreta presságios — analisa dados ambientais, epidemiológicos e comportamentais para transformar indícios em decisões antecipadas e responsáveis.
                </p>

                <div className="flex justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10">
                    <div className="w-2 h-2 rounded-full bg-kwar-electric animate-pulse" />
                    <span className="text-xs text-kwar-electric">Inteligência Epidemiológica</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Four Pillars */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              Os Quatro Pilares
            </h3>
            <p className="text-kwar-gray max-w-2xl mx-auto">
              Nossa filosofia une ciclos da natureza à precisão da modelagem científica.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="card-glass-hover p-6 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-${pillar.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <pillar.icon className={`w-6 h-6 text-${pillar.color}`} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-sm text-kwar-gray leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div
          className={`mt-24 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="card-glass p-8 lg:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-kwar-electric via-kwar-gold to-kwar-electric" />
            
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-6">
              Nossa Promessa
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <p className="text-kwar-electric font-semibold mb-2">Para Gestores</p>
                <p className="text-sm text-kwar-gray">
                  "Você não precisa adivinhar. Você precisa de dados que antecipam."
                </p>
              </div>
              <div>
                <p className="text-kwar-gold font-semibold mb-2">Para Médicos</p>
                <p className="text-sm text-kwar-gray">
                  "Saiba onde a próxima onda vai bater antes dela chegar."
                </p>
              </div>
              <div>
                <p className="text-kwar-green font-semibold mb-2">Para a Sociedade</p>
                <p className="text-sm text-kwar-gray">
                  "Prevenção é luz. Reação é escuridão."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
