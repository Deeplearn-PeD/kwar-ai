import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Menu,
  X,
  ExternalLink,
  Sparkles,
  Zap,
  Shield,
  Globe,
  Users,
  GraduationCap,
  Building2,
  Microscope,
  HeartPulse,
  Search,
  ChevronDown,
  Clock,
  Database,
  BarChart3,
  Lock,
  Layers,
  Bell,
  Code2,
  Headphones,
  MessageSquare,
  Map,
  Award,
} from 'lucide-react';

function useScrollReveal(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return { ref: setRef, isVisible };
}

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050a10]/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/images/kwar-ai.png"
              alt="Kwar-AI"
              className="w-9 h-9 object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-display font-bold text-lg tracking-wider text-white">
              KWAR<span className="text-kwar-electric">-</span>AI
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-kwar-gray hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('#planos')}
              className="btn-primary text-sm px-5 py-2.5 hidden sm:inline-flex items-center gap-2"
            >
              Começar grátis
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#050a10]/98 border-b border-white/5">
          <div className="px-4 py-5 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-2 text-white text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#planos')}
              className="w-full btn-primary text-sm text-center"
            >
              Começar grátis
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[90dvh] flex items-center overflow-hidden"
    >
      {/* Background — grid + subtle glow */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,184,0,0.04) 0%, transparent 70%)' }}
      />

      {/* Parallax map texture */}
      <div
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'url("/images/imagem para hero main.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.06}px)`,
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-kwar-electric" />
              <span className="text-sm font-medium text-kwar-electric">
                EpidBot Individual
              </span>
            </div>
          </div>

          {/* Title */}
          <h1
            className={`font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.1] mb-6 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Inteligência epidemiológica acessível{' '}
            <span className="bg-gradient-to-r from-kwar-electric to-kwar-gold bg-clip-text text-transparent">
              para pesquisadores e profissionais de saúde.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Analise dados públicos e privados com IA especializada em saúde pública, epidemiologia e vigilância.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <button
              onClick={() => document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary group inline-flex items-center justify-center gap-2"
            >
              Começar gratuitamente
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white/50 text-sm font-medium border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300 hover:text-white/80 hover:border-white/20 hover:bg-white/5"
            >
              Comparar planos
            </button>
          </div>

          {/* Observation */}
          <p
            className={`text-xs sm:text-sm text-white/40 mt-6 max-w-xl transition-all duration-1000 delay-[400ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Todos os planos possuem acesso completo às funcionalidades analíticas do EpidBot.
          </p>
        </div>
      </div>
    </section>
  );
}

function DiferenciaisSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const cards = [
    {
      icon: BarChart3,
      title: 'Capacidade Analítica Completa',
      text: 'Todos os planos possuem acesso às análises temporais, espaciais, demográficas e geração de gráficos.',
      color: 'kwar-electric',
    },
    {
      icon: Database,
      title: 'Dados Públicos Integrados',
      text: 'Acesse bases como SINAN, SIM, SINASC, SIH, SIA, CNES, PNI e Mosqlimate.',
      color: 'kwar-electric',
    },
    {
      icon: MessageSquare,
      title: 'IA Especializada',
      text: 'Consultas em linguagem natural com suporte a SQL avançado, análise espacial e workflows epidemiológicos.',
      color: 'kwar-electric',
    },
  ];

  return (
    <section
      id="diferenciais"
      ref={ref}
      className="relative py-24 lg:py-28 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 mb-6">
            <Sparkles className="w-4 h-4 text-kwar-electric" />
            <span className="text-sm font-medium text-kwar-electric">Diferenciais</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Tudo que você precisa em{' '}
            <span className="bg-gradient-to-r from-kwar-electric to-kwar-gold bg-clip-text text-transparent">
              um só lugar
            </span>
          </h2>
          <p className="text-kwar-gray max-w-2xl mx-auto text-lg">
            Do acesso a dados públicos à análise avançada com IA — o EpidBot reúne as ferramentas essenciais para vigilância epidemiológica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`card-glass p-8 transition-all duration-700 hover:border-kwar-electric/30 hover:shadow-[0_0_40px_rgba(0,240,255,0.04)] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-kwar-electric/10 border border-kwar-electric/20 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-kwar-electric" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-kwar-gray text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    description: 'Para estudantes e primeiro contato com o EpidBot.',
    monthlyPrice: '0',
    annualPrice: '0',
    features: [
      '10 consultas/dia',
      'Todos os bancos públicos',
      'Mosqlimate (clima e vetores)',
      'Mapas estáticos',
      'Relatórios PDF com marca d\'água',
      'Sessão temporária',
      'FAQ e comunidade',
    ],
    cta: 'Começar grátis',
    badge: null,
    highlighted: false,
    popular: false,
    color: 'kwar-gray',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Para profissionais e pesquisadores.',
    monthlyPrice: '49',
    originalMonthlyPrice: '97',
    annualPrice: '970',
    annualEquivMonthly: '80',
    features: [
      '50 consultas/dia',
      'Todos os bancos públicos',
      'Mosqlimate completo',
      'Upload de dados privados (500 MB)',
      'Histórico persistente',
      'Exportação CSV',
      'Projetos pessoais',
      'Suporte por e-mail',
    ],
    cta: 'Assinar Pro',
    badge: 'Mais popular',
    highlighted: true,
    popular: true,
    color: 'kwar-electric',
  },
  {
    id: 'proPlus',
    name: 'Pro Plus',
    description: 'Para pesquisadores avançados e heavy users.',
    monthlyPrice: '99',
    originalMonthlyPrice: '197',
    annualPrice: '1.970',
    annualEquivMonthly: '164',
    features: [
      '150 consultas/dia',
      'Dados internacionais (WHO, PAHO, ECDC, World Bank)',
      'Upload de dados privados (3 GB)',
      'Sandbox Python',
      'Exportação avançada',
      'Processamento prioritário',
      'Suporte e-mail + chat',
    ],
    cta: 'Assinar Pro Plus',
    badge: 'Para uso intensivo',
    highlighted: false,
    popular: false,
    color: 'kwar-gold',
  },
];

function ToggleSwitch({ isAnnual, onChange }: { isAnnual: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="inline-flex items-center bg-white/[0.03] rounded-full p-1 border border-white/10">
      <button
        onClick={() => onChange(false)}
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          !isAnnual
            ? 'bg-kwar-electric text-kwar-deep shadow-lg shadow-kwar-electric/20'
            : 'text-white/50 hover:text-white/70'
        }`}
      >
        Mensal
      </button>
      <button
        onClick={() => onChange(true)}
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
          isAnnual
            ? 'bg-kwar-electric text-kwar-deep shadow-lg shadow-kwar-electric/20'
            : 'text-white/50 hover:text-white/70'
        }`}
      >
        Anual
        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
          isAnnual ? 'bg-kwar-deep/30 text-kwar-deep' : 'bg-kwar-green/20 text-kwar-green'
        }`}>
          Economize 20%
        </span>
      </button>
    </div>
  );
}

function PricingSection() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section
      id="planos"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 mb-6">
            <Zap className="w-4 h-4 text-kwar-electric" />
            <span className="text-sm font-medium text-kwar-electric">Planos e Preços</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Escolha o plano ideal para{' '}
            <span className="bg-gradient-to-r from-kwar-electric to-kwar-gold bg-clip-text text-transparent">
              seu trabalho
            </span>
          </h2>
          <p className="text-kwar-gray max-w-2xl mx-auto text-lg mb-8">
            Todos os planos incluem acesso completo às funcionalidades analíticas. Escolha o que melhor atende sua necessidade.
          </p>

          {/* Toggle */}
          <div className="flex justify-center mb-4">
            <ToggleSwitch isAnnual={isAnnual} onChange={setIsAnnual} />
          </div>
          <p className="text-xs text-kwar-green/70 font-medium">
            {isAnnual ? 'Plano anual — melhor custo-benefício' : 'Pagamento mensal — sem fidelidade'}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const isPro = plan.id === 'pro';
            const isProPlus = plan.id === 'proPlus';

            return (
              <div
                key={plan.id}
                className={`relative card-glass p-8 transition-all duration-500 hover:scale-[1.02] flex flex-col ${
                  isPro
                    ? 'border-kwar-electric/40 shadow-[0_0_40px_rgba(0,240,255,0.06)] scale-[1.02] lg:scale-105'
                    : isProPlus
                    ? 'border-kwar-gold/20'
                    : 'border-white/10'
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Badges */}
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wider whitespace-nowrap ${
                      isPro
                        ? 'bg-kwar-electric text-kwar-deep shadow-lg shadow-kwar-electric/30'
                        : 'bg-kwar-gold text-kwar-deep shadow-lg shadow-kwar-gold/20'
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Annual badge */}
                {isAnnual && plan.annualPrice !== '0' && (
                  <div className="absolute -top-3.5 right-4 px-3 py-1 rounded-full bg-kwar-green/15 border border-kwar-green/30 text-kwar-green text-[10px] font-bold tracking-wider">
                    {isPro ? 'Melhor custo-benefício' : 'Maior economia'}
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className={`font-display text-xl font-bold text-white mb-2`}>
                    {plan.name}
                  </h3>
                  <p className="text-kwar-gray text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  {plan.id === 'free' ? (
                    <div className="text-4xl font-bold text-white">
                      Grátis
                    </div>
                  ) : isAnnual ? (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-white">
                          R$ {plan.annualPrice}
                        </span>
                        <span className="text-kwar-gray text-sm">/ano</span>
                      </div>
                      <div className="mt-2 flex items-center gap-3">
                        <span className="text-sm text-kwar-green font-medium">
                          Equivalente a R$ {plan.annualEquivMonthly}/mês
                        </span>
                        <span className="text-[10px] bg-kwar-green/10 border border-kwar-green/20 text-kwar-green px-2 py-0.5 rounded-full font-medium">
                          2 meses grátis
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-white">
                          R$ {plan.monthlyPrice}
                        </span>
                        <span className="text-kwar-gray text-sm">/mês</span>
                      </div>
                      <div className="mt-2">
                        <span className="text-sm text-white/40 line-through">
                          R$ {plan.originalMonthlyPrice}/mês
                        </span>
                        <span className="text-xs text-kwar-green/70 ml-3 font-medium">
                          Promoção 3 primeiros meses
                        </span>
                      </div>
                      <p className="text-xs text-white/30 mt-2">
                        Após 3 meses, retorna ao valor normal
                      </p>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isPro ? 'bg-kwar-electric/10 text-kwar-electric' : isProPlus ? 'bg-kwar-gold/10 text-kwar-gold' : 'bg-white/5 text-white/40'
                      }`}>
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    isPro
                      ? 'bg-kwar-electric text-kwar-deep hover:bg-kwar-electric/90 hover:shadow-glow hover:scale-[1.02]'
                      : isProPlus
                      ? 'bg-kwar-gold text-kwar-deep hover:bg-kwar-gold/90 hover:shadow-[0_0_20px_rgba(255,184,0,0.3)] hover:scale-[1.02]'
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Social proof + cancel note */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-sm text-white/50 mb-3">
            Mais de 70% dos usuários profissionais escolhem o plano anual.
          </p>
          <p className="text-xs text-white/30">
            Cancele a renovação automática quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
}

const institutionalFeatures = [
  { icon: Users, title: 'Multiusuário' },
  { icon: Layers, title: 'Dashboards compartilhados' },
  { icon: Map, title: 'Mapas coropléticos interativos' },
  { icon: Bell, title: 'Alertas automáticos' },
  { icon: Database, title: 'Templates institucionais' },
  { icon: Code2, title: 'APIs e integrações' },
  { icon: Clock, title: 'Monitoramento contínuo' },
  { icon: Headphones, title: 'Suporte dedicado' },
];

function InstitutionalSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="institucional"
      ref={ref}
      className="relative py-24 lg:py-28 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />

      <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,184,0,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-gold/10 border border-kwar-gold/30 mb-6">
            <Shield className="w-4 h-4 text-kwar-gold" />
            <span className="text-sm font-medium text-kwar-gold">Institucional</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Recursos exclusivos para{' '}
            <span className="bg-gradient-to-r from-kwar-gold to-amber-400 bg-clip-text text-transparent">
              equipes e instituições
            </span>
          </h2>
          <p className="text-kwar-gray max-w-2xl mx-auto text-lg mb-4">
            Os planos individuais são voltados para uso pessoal e profissional individual.
          </p>
          <p className="text-white/50 max-w-xl mx-auto text-sm">
            Para organizações que precisam de colaboração, escala e governança, oferecemos recursos institucionais exclusivos.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {institutionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`card-glass p-5 text-center transition-all duration-500 hover:border-kwar-gold/20 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-kwar-gold/10 border border-kwar-gold/20 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-kwar-gold/70" />
                </div>
                <p className="text-white text-xs font-medium">{feature.title}</p>
              </div>
            );
          })}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link
            to="/"
            className="btn-gold group inline-flex items-center gap-2"
          >
            Conheça os planos institucionais
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const profiles = [
  { icon: Microscope, title: 'Pesquisadores' },
  { icon: HeartPulse, title: 'Epidemiologistas' },
  { icon: Users, title: 'Profissionais de saúde' },
  { icon: Search, title: 'Vigilância epidemiológica' },
  { icon: GraduationCap, title: 'Universidades' },
  { icon: Building2, title: 'Consultores' },
  { icon: Award, title: 'Pós-graduação' },
  { icon: Globe, title: 'Laboratórios' },
];

function ParaQuemSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="para-quem"
      ref={ref}
      className="relative py-24 lg:py-28 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />

      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 mb-6">
            <Users className="w-4 h-4 text-kwar-electric" />
            <span className="text-sm font-medium text-kwar-electric">Público</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Para quem é o{' '}
            <span className="bg-gradient-to-r from-kwar-electric to-kwar-gold bg-clip-text text-transparent">
              EpidBot Individual
            </span>
          </h2>
          <p className="text-kwar-gray max-w-2xl mx-auto text-lg">
            Do pesquisador ao profissional de vigilância — o EpidBot se adapta ao seu fluxo de trabalho.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <div
                key={profile.title}
                className={`card-glass p-6 text-center transition-all duration-500 hover:border-kwar-electric/20 hover:shadow-[0_0_30px_rgba(0,240,255,0.03)] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-kwar-electric/10 border border-kwar-electric/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-kwar-electric" />
                </div>
                <p className="text-white text-sm font-medium">{profile.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  {
    question: 'Todos os planos possuem as mesmas análises?',
    answer:
      'Sim, todos os planos — inclusive o Free — possuem acesso completo às funcionalidades analíticas do EpidBot: análises temporais, espaciais, demográficas e geração de gráficos. A diferença entre os planos está no volume de consultas, armazenamento, exportação e recursos avançados como sandbox Python e dados internacionais.',
  },
  {
    question: 'Qual a diferença entre Pro e Pro Plus?',
    answer:
      'O plano Pro é ideal para profissionais que precisam de consultas regulares com dados públicos e privados. O Pro Plus é para pesquisadores avançados e heavy users que necessitam de maior volume de consultas, dados internacionais (WHO, PAHO, ECDC, World Bank), sandbox Python e processamento prioritário.',
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer:
      'Sim. Não há fidelidade em nenhum dos planos. Você pode cancelar a renovação automática a qualquer momento pela sua conta, e o acesso continua até o final do período já pago.',
  },
  {
    question: 'Os dados são públicos?',
    answer:
      'O EpidBot integra dados públicos oficiais como SINAN, SIM, SINASC, SIH, SIA, CNES, PNI e Mosqlimate. Nos planos Pro e Pro Plus, você também pode fazer upload dos seus próprios dados privados para análise, com total segurança e isolamento.',
  },
  {
    question: 'Posso subir meus próprios dados?',
    answer:
      'Sim. Os planos Pro e Pro Plus permitem upload de dados privados — 500 MB no Pro e 3 GB no Pro Plus. Seus dados são armazenados com segurança e utilizados exclusivamente nas suas análises.',
  },
  {
    question: 'Existe plano institucional?',
    answer:
      'Sim. Para organizações que precisam de multiusuário, dashboards compartilhados, APIs, alertas automáticos e suporte dedicado, oferecemos planos institucionais personalizados. Entre em contato para conhecer as soluções para sua instituição.',
  },
  {
    question: 'O EpidBot substitui softwares estatísticos?',
    answer:
      'O EpidBot complementa ferramentas estatísticas tradicionais. Enquanto softwares como R, Python e Stata oferecem flexibilidade total para modelagem, o EpidBot automatiza análises epidemiológicas recorrentes, integra dados públicos e privados, e permite consultas em linguagem natural — acelerando significativamente o trabalho do pesquisador.',
  },
  {
    question: 'O que é o sandbox Python?',
    answer:
      'O sandbox Python é um ambiente seguro e isolado disponível no plano Pro Plus, onde você pode executar scripts Python personalizados para análises avançadas, integrando seus dados com as bases do EpidBot.',
  },
];

function FAQSection() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-24 lg:py-28 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />

      <div
        className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 mb-6">
            <MessageSquare className="w-4 h-4 text-kwar-electric" />
            <span className="text-sm font-medium text-kwar-electric">FAQ</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-kwar-electric to-kwar-gold bg-clip-text text-transparent">
              frequentes
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqItems.map((item) => {
            const isOpen = openItem === item.question;
            return (
              <div
                key={item.question}
                className={`card-glass transition-all duration-300 ${
                  isOpen ? 'border-kwar-electric/20' : 'border-white/5'
                }`}
              >
                <button
                  onClick={() => setOpenItem(isOpen ? null : item.question)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm sm:text-base font-medium text-white pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-white/40 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-sm text-kwar-gray leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section
      id="contato"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.05) 0%, transparent 70%)' }}
      />

      <div
        className={`relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Comece a explorar{' '}
          <span className="bg-gradient-to-r from-kwar-electric to-kwar-gold bg-clip-text text-transparent">
            inteligência epidemiológica com IA.
          </span>
        </h2>

        <p className="text-lg text-kwar-gray mb-10 max-w-2xl mx-auto">
          Teste gratuitamente e descubra como o EpidBot pode acelerar análises, vigilância e tomada de decisão.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary group inline-flex items-center gap-2"
          >
            Começar gratuitamente
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-white/50 text-sm font-medium border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300 hover:text-white/80 hover:border-white/20 hover:bg-white/5"
          >
            Conhecer planos institucionais
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-10 border-t border-white/[0.04] bg-[#050a10]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/kwar-ai.png"
              alt="Kwar-AI"
              className="w-6 h-6 object-contain opacity-50"
            />
            <span className="font-display font-bold text-sm text-white/60">
              KWAR<span className="text-kwar-electric/60">-</span>AI
            </span>
            <span className="text-white/30 text-xs">&copy; {currentYear}</span>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/" className="text-white/40 hover:text-kwar-electric transition-colors text-xs">
              Site institucional
            </Link>
            <Link to="/hub" className="text-white/40 hover:text-kwar-electric transition-colors text-xs">
              Hub de plataformas
            </Link>
            <a
              href="https://www.linkedin.com/company/kwar-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-kwar-electric transition-colors text-xs"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function EpidbotIndividual() {
  return (
    <div className="relative min-h-screen bg-[#050a10] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <DiferenciaisSection />
        <PricingSection />
        <InstitutionalSection />
        <ParaQuemSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <LandingFooter />
    </div>
  );
}
