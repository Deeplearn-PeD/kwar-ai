import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  ChevronDown,
  ArrowRight,
  Zap,
  Shield,
  Database,
  Brain,
  Clock,
  Users,
  BarChart3,
  MessageSquare,
  Globe,
  Lock,
  Play,
  Sparkles,
  TrendingUp,
  Search,
  FileText,
  PieChart,
  Activity,
  Download,
} from 'lucide-react';

// Animation hook
function useScrollReveal(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// ============================================================================
// NAVBAR
// ============================================================================
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#080c14]/80 backdrop-blur-xl border-b border-white/[0.04]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-1.5 h-1.5 rounded-[1px] bg-white/80" />
              <div className="w-1.5 h-1.5 rounded-[1px] bg-white/80" />
              <div className="w-1.5 h-1.5 rounded-[1px] bg-white/80" />
              <div className="w-1.5 h-1.5 rounded-[1px] bg-white/40" />
            </div>
          </div>
          <span className="font-display font-bold text-lg text-white tracking-tight">
            Epid<span className="text-cyan-400">Bot</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Recursos', href: '#features' },
            { label: 'Como funciona', href: '#roi' },
            { label: 'Planos', href: '#pricing' },
            { label: 'Equipe', href: '#differentiation' },
            { label: 'FAQ', href: '#faq' },
          ].map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm text-white/50 hover:text-white transition-colors hidden sm:block">
            Entrar
          </button>
          <button
            onClick={() => scrollTo('#pricing')}
            className="bg-cyan-400 hover:bg-cyan-300 text-[#080c14] text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            Experimentar EpidBot
          </button>
        </div>
      </div>
    </nav>
  );
}

// ============================================================================
// HERO
// ============================================================================
function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-400/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6">
              <Zap className="w-3 h-3 text-cyan-400" />
              <span className="text-[11px] font-semibold text-cyan-400 tracking-wider uppercase">IA Especializada</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-5">
              IA especializada para{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                saúde pública e epidemiologia
              </span>
            </h1>

            <p className="text-white/50 text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              Transforme dados públicos em análises rápidas, contextualizadas e utilizáveis para vigilância, pesquisa e tomada de decisão.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <button className="bg-cyan-400 hover:bg-cyan-300 text-[#080c14] text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] flex items-center gap-2">
                Experimentar EpidBot
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 rounded-lg border border-white/10 text-white/70 text-sm font-medium hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
                <Play className="w-4 h-4" />
                Ver demonstração
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/30">
              <Shield className="w-4 h-4 text-cyan-400/60" />
              <span>Desenvolvido para o contexto epidemiológico brasileiro.</span>
            </div>
          </div>

          {/* Right - Product Mockup */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#0d1117]/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-cyan-400/5">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.04]">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/40" />
                <span className="ml-auto text-[10px] text-white/30 font-medium">EpidBot</span>
              </div>

              <div className="flex">
                {/* Sidebar */}
                <div className="hidden sm:flex w-48 flex-col border-r border-white/[0.04] p-3 gap-1">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] text-white/80 text-xs">
                    <MessageSquare className="w-3.5 h-3.5" />
                    Nova conversa
                  </div>
                  {['Conversas', 'Indicadores', 'Bases de dados', 'Análises salvas', 'Relatórios', 'Configurações'].map((item) => (
                    <div key={item} className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/30 text-xs hover:bg-white/[0.02] transition-colors">
                      <div className="w-3.5 h-3.5 rounded-[2px] border border-white/20" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Chat area */}
                <div className="flex-1 p-4 space-y-4">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                      <p className="text-xs text-white/70">
                        Quais foram os casos de dengue por semana epidemiológica em 2024 no estado de Minas Gerais?
                      </p>
                    </div>
                  </div>

                  {/* Bot response */}
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 flex-shrink-0 flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <p className="text-xs text-white/60 leading-relaxed">
                        Aqui está o número de casos prováveis de dengue por semana epidemiológica em Minas Gerais, em 2024.
                      </p>
                      {/* Chart mock */}
                      <div className="bg-[#0a0e14] rounded-xl p-4 border border-white/[0.04]">
                        <div className="text-[10px] text-white/40 mb-3">Casos prováveis de dengue — MG, 2024</div>
                        <svg viewBox="0 0 300 80" className="w-full h-20">
                          <defs>
                            <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,70 Q30,65 60,55 T120,40 T180,35 T240,20 T300,15"
                            fill="none"
                            stroke="#22d3ee"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M0,70 Q30,65 60,55 T120,40 T180,35 T240,20 T300,15 L300,80 L0,80 Z"
                            fill="url(#chartGrad)"
                          />
                          <circle cx="60" cy="55" r="3" fill="#22d3ee" />
                          <circle cx="120" cy="40" r="3" fill="#22d3ee" />
                          <circle cx="180" cy="35" r="3" fill="#22d3ee" />
                          <circle cx="240" cy="20" r="3" fill="#22d3ee" />
                          <circle cx="300" cy="15" r="3" fill="#22d3ee" />
                        </svg>
                        <div className="flex justify-between text-[9px] text-white/20 mt-1 px-2">
                          <span>1</span><span>11</span><span>21</span><span>31</span><span>41</span><span>51</span>
                        </div>
                        <div className="text-center text-[9px] text-white/20 mt-1">Semana epidemiológica</div>
                      </div>
                    </div>
                  </div>

                  {/* Input */}
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] mt-4">
                    <input
                      type="text"
                      placeholder="Pergunte ao EpidBot..."
                      className="flex-1 bg-transparent text-xs text-white/50 placeholder:text-white/20 outline-none"
                      readOnly
                    />
                    <div className="w-6 h-6 rounded-md bg-cyan-400/20 flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-cyan-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// TRUST
// ============================================================================
function Trust() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const logos = [
    { name: 'InfoDengue', icon: Activity },
    { name: 'PySUS', icon: Database },
    { name: 'Web Summit', icon: Globe },
    { name: 'UFMG', icon: Shield },
    { name: 'SUS', icon: Users },
    { name: 'Fiocruz', icon: Sparkles },
  ];

  return (
    <section ref={ref} className="py-12 border-y border-white/[0.04] bg-white/[0.01]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p
          className={`text-center text-[11px] font-medium text-white/30 tracking-widest uppercase mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Confiança de quem usa e apoia
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {logos.map((logo, i) => {
            const Icon = logo.icon;
            return (
              <div
                key={logo.name}
                className={`flex items-center gap-2 text-white/30 hover:text-white/50 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{logo.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FEATURES
// ============================================================================
function Features() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const features = [
    {
      icon: Database,
      title: 'Dados públicos integrados',
      desc: 'Acesse e interprete informações epidemiológicas sem fluxos complexos de extração. DATASUS, SINAN, SIM, SIH e outras bases.',
    },
    {
      icon: Brain,
      title: 'Inteligência contextual',
      desc: 'O EpidBot entende indicadores, sazonalidade, regiões e o contexto epidemiológico brasileiro para gerar respostas mais precisas.',
    },
    {
      icon: TrendingUp,
      title: 'Análises mais rápidas',
      desc: 'Consultas em linguagem natural, visualizações automáticas e análises exploratórias em minutos, não em horas.',
    },
    {
      icon: FileText,
      title: 'Menos dependência técnica',
      desc: 'Reduz a necessidade de scripts extensos, manipulação manual de planilhas e conhecimento avançado em programação.',
    },
    {
      icon: Users,
      title: 'Apoio à gestão e comunicação',
      desc: 'Gere gráficos, tabelas e resumos prontos para compartilhar com equipes, gestores e outros públicos de forma clara.',
    },
    {
      icon: Sparkles,
      title: 'Ambiente em evolução contínua',
      desc: 'Novas bases, indicadores e funcionalidades sendo adicionadas constantemente com foco nas necessidades da área.',
    },
  ];

  return (
    <section id="features" ref={ref} className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className={`font-display text-3xl sm:text-4xl font-bold text-center text-white mb-14 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Feito para o trabalho{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            epidemiológico real
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-cyan-400/20 hover:bg-white/[0.03] transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-cyan-400/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// ROI SECTION
// ============================================================================
function ROI() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const tasks = [
    { icon: Search, label: 'Busca de dados' },
    { icon: Check, label: 'Limpeza e estruturação' },
    { icon: BarChart3, label: 'Geração de gráficos' },
    { icon: FileText, label: 'Relatórios e tabelas' },
    { icon: PieChart, label: 'Análises exploratórias' },
  ];

  return (
    <section id="roi" ref={ref} className="py-20 lg:py-28 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              Algumas horas economizadas{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                por semana já fazem diferença.
              </span>
            </h2>

            <p className="text-white/40 text-base mb-8 leading-relaxed">
              O EpidBot foi pensado para reduzir o tempo gasto em tarefas técnicas e repetitivas que não precisam ser um gargalo para o seu trabalho.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {tasks.map((task) => {
                const Icon = task.icon;
                return (
                  <div key={task.label} className="flex items-center gap-3 text-sm text-white/50">
                    <Icon className="w-4 h-4 text-cyan-400/60" />
                    <span>{task.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="inline-flex items-start gap-3 p-4 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.03]">
              <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-cyan-400/80">
                Se a ferramenta economizar apenas algumas horas por semana, ela já se paga rapidamente.
              </p>
            </div>
          </div>

          {/* Right - Table mockup */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#0d1117]/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-cyan-400/5">
              {/* Chat header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.04]">
                <div className="px-2 py-1 rounded-md bg-cyan-400/10 text-[10px] text-cyan-400 font-medium">Pergunta</div>
              </div>

              {/* Question bubble */}
              <div className="px-4 py-3">
                <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl rounded-tl-sm px-4 py-3 max-w-[90%] ml-auto">
                  <p className="text-xs text-white/70">
                    Quais os 10 municípios com maior incidência de chikungunya em 2024 no Nordeste?
                  </p>
                </div>
              </div>

              {/* Response */}
              <div className="px-4 pb-4">
                <div className="bg-[#0a0e14] rounded-xl border border-white/[0.04] overflow-hidden">
                  <div className="px-4 py-3 border-b border-white/[0.04] flex items-center justify-between">
                    <span className="text-xs text-white/50">Top 10 municípios por incidência de chikungunya — 2024</span>
                    <button className="text-[10px] text-cyan-400 flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      Baixar tabela
                    </button>
                  </div>
                  <div className="px-4 py-2">
                    <div className="grid grid-cols-4 gap-2 text-[10px] text-white/30 mb-2">
                      <span>#</span><span>Município</span><span>UF</span><span>Incidência</span>
                    </div>
                    {[
                      ['1', 'Ipueiras', 'PE', '1.482,7'],
                      ['2', 'Fortaleza', 'CE', '1.179,3'],
                      ['3', 'Camaçari', 'BA', '1.026,8'],
                      ['4', 'São Luís', 'MA', '987,1'],
                      ['5', 'Lauro de Freitas', 'BA', '876,2'],
                    ].map((row) => (
                      <div key={row[0]} className="grid grid-cols-4 gap-2 text-[10px] py-1.5 border-t border-white/[0.02]">
                        <span className="text-white/40">{row[0]}</span>
                        <span className="text-white/60">{row[1]}</span>
                        <span className="text-white/40">{row[2]}</span>
                        <span className="text-white/60">{row[3]}</span>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-white/[0.04] text-[9px] text-white/20">
                    Fonte: SINAN — Dados atualizados em 20/05/2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// DIFFERENTIATION
// ============================================================================
function Differentiation() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const cards = [
    {
      icon: Shield,
      title: 'Epidemiologia aplicada',
      desc: 'Entende indicadores, definições e métodos utilizados na prática profissional.',
    },
    {
      icon: Database,
      title: 'Bases brasileiras nativas',
      desc: 'Integração com as principais bases públicas utilizadas no Brasil.',
    },
    {
      icon: Check,
      title: 'Respostas confiáveis',
      desc: 'Transparência nas fontes e rastreabilidade das informações utilizadas.',
    },
    {
      icon: Lock,
      title: 'Privacidade e segurança',
      desc: 'Seus dados e análises são protegidos com padrões de segurança corporativos.',
    },
  ];

  return (
    <section id="differentiation" ref={ref} className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              Não é uma IA genérica.{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                É especializada.
              </span>
            </h2>

            <p className="text-white/40 text-base leading-relaxed">
              Enquanto ferramentas genéricas exigem prompts extensos e adaptação técnica, o EpidBot já nasceu voltado para a realidade da saúde pública brasileira.
            </p>
          </div>

          {/* Right - Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-medium text-sm mb-1.5">{card.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PRICING
// ============================================================================
function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="pricing" ref={ref} className="py-20 lg:py-28 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className={`font-display text-3xl sm:text-4xl font-bold text-center text-white mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Escolha o plano ideal{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            para você
          </span>
        </h2>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center bg-white/[0.03] rounded-full p-1 border border-white/[0.06]">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isAnnual ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/60'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                isAnnual ? 'bg-cyan-400 text-[#080c14]' : 'text-white/40 hover:text-white/60'
              }`}
            >
              Anual
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                isAnnual ? 'bg-[#080c14]/20 text-[#080c14]' : 'bg-cyan-400/20 text-cyan-400'
              }`}>
                -17%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-4 gap-5">
          {/* Free */}
          <div
            className={`rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 flex flex-col transition-all duration-700 hover:border-white/[0.1] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="text-white font-semibold text-lg mb-1">Free</h3>
            <p className="text-white/40 text-sm mb-5">Para começar</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">R$ 0</span>
              <span className="text-white/30 text-sm">/mês</span>
            </div>
            <ul className="space-y-3 mb-7 flex-1">
              {[
                'Consultas limitadas por dia',
                'Acesso a indicadores básicos',
                'Análises e gráficos padrão',
                'Suporte por comunidade',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/50">
                  <Check className="w-4 h-4 text-cyan-400/60 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-2.5 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-all">
              Começar gratuitamente
            </button>
          </div>

          {/* Pro - highlighted */}
          <div
            className={`relative rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-cyan-400/[0.05] to-transparent p-7 flex flex-col transition-all duration-700 shadow-[0_0_40px_rgba(34,211,238,0.06)] lg:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-400 text-[#080c14] text-[10px] font-bold tracking-wider uppercase rounded-full">
              Mais escolhido
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">Pro</h3>
            <p className="text-white/40 text-sm mb-5">Para profissionais</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">R$ 97</span>
              <span className="text-white/30 text-sm">/mês</span>
            </div>
            <ul className="space-y-3 mb-7 flex-1">
              {[
                'Mais consultas por dia',
                'Acesso a todas as bases',
                'Análises avançadas e personalizadas',
                'Exportação de relatórios',
                'Suporte prioritário',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-[#080c14] text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Assinar Pro
            </button>
          </div>

          {/* Team */}
          <div
            className={`rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 flex flex-col transition-all duration-700 hover:border-white/[0.1] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-white font-semibold text-lg mb-1">Team</h3>
            <p className="text-white/40 text-sm mb-5">Para equipes e instituições</p>
            <div className="mb-6">
              <span className="text-2xl font-bold text-white">Sob consulta</span>
            </div>
            <ul className="space-y-3 mb-7 flex-1">
              {[
                'Usuários ilimitados',
                'Recursos avançados de colaboração',
                'Relatórios automatizados',
                'Suporte dedicado',
                'Integrações e API',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/50">
                  <Check className="w-4 h-4 text-cyan-400/60 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-2.5 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-all">
              Falar com o time
            </button>
          </div>

          {/* Early Adopter */}
          <div
            className={`rounded-2xl border border-amber-500/20 bg-gradient-to-b from-amber-500/[0.05] to-transparent p-7 flex flex-col transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-white font-semibold text-base mb-2">Early adopter access</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-6 flex-1">
              Os primeiros usuários terão condições especiais durante a fase inicial da plataforma.
            </p>
            <button className="text-amber-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Saiba mais
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FINAL CTA
// ============================================================================
function FinalCTA() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div
          className={`relative rounded-2xl border border-white/[0.06] bg-gradient-to-r from-cyan-400/[0.05] to-blue-500/[0.05] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Antecipar é proteger.</h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-md">
                Dados melhores. Decisões mais rápidas. Impacto real na saúde do população.
              </p>
            </div>
          </div>

          <button className="bg-cyan-400 hover:bg-cyan-300 text-[#080c14] text-sm font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] flex-shrink-0">
            Experimentar EpidBot
          </button>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FOOTER
// ============================================================================
function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-12 bg-[#080c14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-[1px] bg-white/80" />
                  <div className="w-1.5 h-1.5 rounded-[1px] bg-white/80" />
                  <div className="w-1.5 h-1.5 rounded-[1px] bg-white/80" />
                  <div className="w-1.5 h-1.5 rounded-[1px] bg-white/40" />
                </div>
              </div>
              <span className="font-display font-bold text-lg text-white">
                Epid<span className="text-cyan-400">Bot</span>
              </span>
            </div>
            <p className="text-white/30 text-xs leading-relaxed max-w-xs">
              IA aplicada à saúde pública brasileira para impulsionar análises, vigilância e decisões baseadas em evidências.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: 'Produto',
              links: ['Recursos', 'Como funciona', 'Planos', 'Atualizações'],
            },
            {
              title: 'Empresa',
              links: ['Sobre nós', 'Equipe', 'Parceiros', 'Carreiras'],
            },
            {
              title: 'Suporte',
              links: ['FAQ', 'Documentação', 'Contato'],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-white/[0.04] mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-white/20 text-xs">
            © {new Date().getFullYear()} Kwar-AI. Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/20 hover:text-white/40 transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="text-white/20 hover:text-white/40 transition-colors">
              <Users className="w-4 h-4" />
            </a>
            <a href="#" className="text-white/20 hover:text-white/40 transition-colors">
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// PAGE
// ============================================================================
export default function EpidbotPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white font-body antialiased">
      <Navbar />
      <Hero />
      <Trust />
      <Features />
      <ROI />
      <Differentiation />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}
