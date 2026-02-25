import { useEffect, useRef, useState } from 'react';
import { Sun, Brain, Target, Lightbulb, RefreshCw, Eye } from 'lucide-react';

const pillars = [
  {
    icon: RefreshCw,
    title: 'Renovação',
    description: 'Cada dia é um ciclo. Nossos modelos aprendem continuamente e se adaptam às estações.',
    color: 'kwar-electric',
  },
  {
    icon: Lightbulb,
    title: 'Claridade',
    description: 'Dashboards intuitivos, insights acionáveis, sem jargon técnico desnecessário.',
    color: 'kwar-gold',
  },
  {
    icon: Target,
    title: 'Ciclicidade',
    description: 'Doenças têm sazonalidade. Nós mapeamos os ciclos com precisão.',
    color: 'kwar-purple',
  },
  {
    icon: Eye,
    title: 'Antecipação',
    description: 'Alertas com 14-21 dias de antecedência, não quando já é tarde.',
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
                Há mais de 500 anos, os povos Tupi observavam o céu. Para eles,{' '}
                <span className="text-kwar-gold font-medium">Kuaray</span> — o Sol — não era
                apenas luz. Era renovação, ciclo, a promessa de que cada escuridão termina.
              </p>
              <p>
                Os xamãs lia os sinais: o vento antes da chuva, o comportamento dos animais,
                as folhas que mudavam de cor. Eles não tinham algoritmos, mas tinham{' '}
                <span className="text-kwar-electric font-medium">padrões</span>. A sabedoria
                de que o futuro deixa rastros no presente.
              </p>
              <p>
                Em 2025, a <span className="text-white font-semibold">KWAR-AI</span> nasceu
                da mesma intuição. Agora, os sinais são dados: buscas no Google, atendimentos
                de emergência, variações de temperatura e umidade.
              </p>
              <p className="text-white font-medium italic border-l-2 border-kwar-electric pl-4">
                "O sol nasce para todos. Mas quem tem KWAR-AI vê a luz 21 dias antes."
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
                  O Xamã Moderno
                </h3>
                
                <p className="text-kwar-gray text-center text-sm leading-relaxed mb-6">
                  A KWAR-AI é o xamã moderno que usa estatística. Ela não lê folhas de coca.
                  Lê bases de dados. E diz: "O sol vai nascer mais quente na Zona Norte.
                  Prepare-se."
                </p>

                <div className="flex justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10">
                    <div className="w-2 h-2 rounded-full bg-kwar-electric animate-pulse" />
                    <span className="text-xs text-kwar-electric">Tecnologia + Sabedoria Ancestral</span>
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
              Nossa filosofia baseada nos ciclos da natureza e na precisão da tecnologia
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
