import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, 
  AlertCircle,
  Users,
  Zap,
  TrendingUp,
  Check,
  MessageSquare,
  Menu,
  X,
  Play,
  BarChart3,
  Clock,
  Shield,
  Award,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NeuralBackground } from '@/components/NeuralBackground';

// ============================================================================
// NAVIGATION
// ============================================================================
function LandingNavbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const languages = [
    { code: 'pt-BR', label: 'PT', flag: '🇧🇷' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'es', label: 'ES', flag: '🇪🇸' },
  ];

  const navLinks = [
    { label: t('epidbotLanding.nav.howItWorks', { defaultValue: 'Como Funciona' }), href: '#steps' },
    { label: t('epidbotLanding.nav.demo'), href: '#demo' },
    { label: t('epidbotLanding.nav.pricing'), href: '#pricing' },
    { label: t('epidbotLanding.nav.contact', { defaultValue: 'Contato' }), href: '#final-cta' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-kwar-deep/95 backdrop-blur-xl border-b border-kwar-electric/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <img 
                src="/images/logo-oficial.png" 
                alt="Kwar-AI" 
                className="w-full h-full object-contain transition-transform group-hover:scale-110"
              />
            </div>
            <span className="font-display font-bold text-xl text-white">
              KWAR<span className="text-kwar-electric">-</span>AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-kwar-gray hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-kwar-electric transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
              {languages.map((lng) => (
                <button
                  key={lng.code}
                  onClick={() => changeLanguage(lng.code)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                    i18n.language === lng.code
                      ? 'bg-kwar-electric text-kwar-deep'
                      : 'text-kwar-gray hover:text-white'
                  }`}
                >
                  {lng.label}
                </button>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection('#final-cta')}
              className="bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep font-semibold"
            >
              {t('epidbotLanding.nav.cta')}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-kwar-deep/98 border-b border-kwar-electric/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-2 text-white font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {languages.map((lng) => (
                <button
                  key={lng.code}
                  onClick={() => changeLanguage(lng.code)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg flex-1 ${
                    i18n.language === lng.code
                      ? 'bg-kwar-electric text-kwar-deep'
                      : 'bg-white/5 text-kwar-gray'
                  }`}
                >
                  {lng.flag} {lng.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// ============================================================================
// HERO SECTION - MINIMALISTA E IMPACTANTE
// ============================================================================
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay gradiente escuro - esquerda mais escura para direita mais clara */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(10, 22, 40, 0.92) 0%, rgba(10, 22, 40, 0.75) 50%, rgba(10, 22, 40, 0.50) 100%)',
        }}
      />
      
      {/* Grid pattern sutil por cima */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="flex flex-col items-center text-center">
          {/* Main Title - Minimalista e Impactante */}
          <h1
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-16 max-w-[900px] transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            O surto não espera você analisar os dados.
          </h1>

          {/* CTA Minimalista - Centralizado */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button
              onClick={() => scrollToSection('#problem')}
              size="lg"
              className="bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep font-bold px-12 py-8 text-xl group shadow-lg shadow-kwar-electric/25"
            >
              E agora?
              <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-kwar-electric/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-kwar-electric rounded-full" />
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PROBLEM SECTION
// ============================================================================
function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('problem');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      icon: Users,
      title: 'Sua equipe já está no limite',
      description: 'Poucas pessoas tentando dar conta de tudo. Enquanto os dados se acumulam, o tempo para analisar só diminui.',
    },
    {
      icon: TrendingUp,
      title: 'O problema cresce — e você descobre tarde demais',
      description: 'Quando o relatório fica pronto, os casos já aumentaram. A decisão sempre chega depois do problema.',
    },
    {
      icon: AlertCircle,
      title: 'Na hora de prestar contas, faltam respostas',
      description: 'Você precisa explicar a situação, mas os dados não estão organizados. E o tempo para analisar já acabou.',
    },
  ];

  return (
    <section id="problem" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Texto + Imagem */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
              <AlertCircle className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium text-red-400">
                O problema
              </span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              <span className="block">Você está fazendo o possível.</span>
              <span className="block">Mas não está sendo suficiente.</span>
            </h2>
            
            <p className="text-lg text-kwar-gray mb-8">
              Gerir saúde pública com pouca equipe não é fácil. Você precisa tomar decisões sem tempo e sem todas as respostas.
            </p>

            {/* Imagem impactante */}
            <div className="relative w-full">
              <div className="absolute -inset-4 bg-red-500/10 rounded-3xl blur-2xl" />
              <div className="relative card-glass p-4 rounded-2xl border-red-500/20">
                <img
                  src="/images/problema.png"
                  alt="Profissional de saúde afundado em planilhas e relatórios"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Problem Cards */}
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                className={`card-glass p-8 hover:border-red-500/30 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-7 h-7 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-3">{problem.title}</h3>
                    <p className="text-kwar-gray text-base leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// O QUE E O EPIDBOT SECTION
// ============================================================================
function WhatIsEpidbotSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('what-is');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: MessageSquare,
      title: t('epidbotLanding.whatis.features.language.title', { defaultValue: 'Faça perguntas em linguagem simples' }),
    },
    {
      icon: BarChart3,
      title: t('epidbotLanding.whatis.features.analysis.title', { defaultValue: 'Receba análises baseadas em dados reais' }),
    },
    {
      icon: Shield,
      title: t('epidbotLanding.whatis.features.decision.title', { defaultValue: 'Tome decisões com mais rapidez e segurança' }),
    },
  ];

  return (
    <section id="what-is" className="relative py-24 lg:py-32 bg-gradient-to-b from-kwar-deep to-kwar-deep/95">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-gold/10 border border-kwar-gold/30 mb-6">
              <span className="text-sm font-medium text-kwar-gold">
                A solução
              </span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Um analista epidemiológico disponível quando você precisa
            </h2>
            
            <p className="text-lg text-kwar-gray mb-8">
              Análises de saúde pública em minutos, sem complicação técnica.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-center gap-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-kwar-electric/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-kwar-electric" />
                  </div>
                  <span className="text-white font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Imagem do Produto */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative max-w-md lg:max-w-lg mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-kwar-electric/20 rounded-3xl blur-3xl" />
              
              {/* Image container */}
              <div className="relative card-glass p-4 rounded-2xl border-kwar-electric/30">
                <img
                  src="/images/epidbot.png"
                  alt="EpidBot Interface"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-kwar-electric text-kwar-deep px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  IA Powered
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
// O QUE ELE FAZ NA PRATICA SECTION
// ============================================================================
function WhatItDoesSection() {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('what-it-does');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: 'Você tem respostas na hora',
      description: 'Pare de esperar dias por relatórios. Faça uma pergunta e receba a análise em minutos.',
    },
    {
      icon: BarChart3,
      title: 'Você sabe exatamente onde agir',
      description: 'Identifique bairros, regiões ou grupos de risco sem precisar montar planilhas ou cruzar dados manualmente.',
    },
    {
      icon: Shield,
      title: 'Você chega preparado e com dados claros',
      description: 'Tenha números confiáveis na hora de prestar contas. Mais segurança nas decisões, menos improviso.',
    },
  ];

  return (
    <section id="what-it-does" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 mb-6">
            <Zap className="w-4 h-4 text-kwar-electric" />
            <span className="text-sm font-medium text-kwar-electric">
              O que muda na sua rotina
            </span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Você deixa de correr atrás dos dados
          </h2>
          <p className="text-xl text-kwar-electric max-w-3xl mx-auto mb-6">
            e passa a tomar decisões assertivas.
          </p>
          
          <p className="text-xl text-kwar-gray max-w-3xl mx-auto">
            Sem planilhas, sem esperar dias por relatórios. Você tem respostas claras, na hora que precisa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`card-glass p-8 text-center hover:border-kwar-electric/30 transition-all duration-700 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-kwar-electric/10 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-kwar-electric" />
              </div>
              <h3 className="text-white font-bold text-xl mb-4 leading-snug">{benefit.title}</h3>
              <p className="text-kwar-gray text-base leading-relaxed max-w-xs mx-auto">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// DEMO VIDEO SECTION
// ============================================================================
function DemoVideoSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('demo');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="demo" className="relative py-24 lg:py-32 bg-gradient-to-b from-kwar-deep/95 to-kwar-deep">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 mb-6">
            <Play className="w-4 h-4 text-kwar-electric" />
            <span className="text-sm font-medium text-kwar-electric">
              {t('epidbotLanding.demo.badge', { defaultValue: 'Demonstração' })}
            </span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Veja como o EpidBot funciona na prática
          </h2>
          
          <p className="text-xl text-kwar-gray max-w-2xl mx-auto">
            {t('epidbotLanding.demo.subtitle', { defaultValue: 'Em poucos minutos, você entende como transformar dados em decisões.' })}
          </p>
        </div>

        {/* Video Embed */}
        <div
          className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="card-glass p-2 rounded-2xl border-kwar-electric/20">
            <div className="relative aspect-video bg-kwar-deep rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/uOiREDMb2B0"
                title="EpidBot Demo"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Glow */}
          <div className="absolute -inset-4 bg-kwar-electric/5 rounded-3xl blur-2xl -z-10" />
        </div>

        {/* Micro-copy */}
        <p
          className={`text-center text-kwar-gray mt-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {t('epidbotLanding.demo.note', { defaultValue: 'Sem instalação. Sem equipe técnica. Direto ao ponto.' })}
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// COMO FUNCIONA SECTION
// ============================================================================
function HowItWorksSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('steps');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: t('epidbotLanding.steps.step1.title', { defaultValue: 'Você faz uma pergunta' }),
      description: t('epidbotLanding.steps.step1.description', { defaultValue: 'Em linguagem natural, como faria a um analista experiente.' }),
    },
    {
      number: '02',
      title: t('epidbotLanding.steps.step2.title', { defaultValue: 'O EpidBot analisa os dados' }),
      description: t('epidbotLanding.steps.step2.description', { defaultValue: 'Processa informações de múltiplas fontes em segundos.' }),
    },
    {
      number: '03',
      title: t('epidbotLanding.steps.step3.title', { defaultValue: 'Você recebe uma resposta clara' }),
      description: t('epidbotLanding.steps.step3.description', { defaultValue: 'Com insights acionáveis em minutos, não dias.' }),
    },
  ];

  const demoSteps = [
    {
      label: 'Pergunta',
      image: '/images/prompt.png',
      alt: 'Exemplo de pergunta feita ao EpidBot',
    },
    {
      label: 'Análise',
      image: '/images/analise.png',
      alt: 'Análise dos dados pelo EpidBot',
      highlighted: true,
    },
    {
      label: 'Recomendação',
      image: '/images/recomendacao.png',
      alt: 'Recomendações e plano de ação gerado',
    },
  ];

  return (
    <section id="steps" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header com label */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 mb-6">
            <span className="text-sm font-medium text-kwar-electric">
              Exemplo prático
            </span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            De pergunta a decisão em minutos
          </h2>
          <p className="text-lg text-kwar-gray max-w-2xl mx-auto">
            Veja como o EpidBot transforma dados em plano de ação
          </p>
        </div>

        {/* 3 Cards de etapas */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative card-glass p-8 hover:border-kwar-electric/30 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <span className="text-5xl font-bold text-kwar-electric/20 absolute top-4 right-4">
                {step.number}
              </span>
              <h3 className="text-white font-semibold text-xl mb-3 relative z-10">{step.title}</h3>
              <p className="text-kwar-gray relative z-10">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Fluxo visual vertical */}
        <div className="max-w-3xl mx-auto mb-20 space-y-4">
          {demoSteps.map((step, index) => (
            <div key={step.label}>
              {/* Step Block */}
              <div
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 4) * 200}ms` }}
              >
                {/* Step Label */}
                <div className="text-center mb-4">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                    step.highlighted 
                      ? 'bg-kwar-electric text-kwar-deep' 
                      : 'bg-white/10 text-white border border-white/20'
                  }`}>
                    {step.label}
                  </span>
                </div>
                
                {/* Step Image */}
                <div className={`relative ${step.highlighted ? 'scale-[1.02]' : ''} transition-transform duration-500`}>
                  <div className={`absolute -inset-2 rounded-2xl blur-xl ${
                    step.highlighted ? 'bg-kwar-electric/20' : 'bg-kwar-electric/5'
                  }`} />
                  <div className={`relative card-glass p-4 rounded-xl overflow-hidden ${
                    step.highlighted ? 'border-kwar-electric/50' : 'border-white/10'
                  }`}>
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="w-full h-auto rounded-lg shadow-lg"
                      onError={(e) => {
                        e.currentTarget.src = '/images/epidbot.png';
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Arrow down - except for last item */}
              {index < demoSteps.length - 1 && (
                <div 
                  className={`flex justify-center py-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 200 + 100}ms` }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-8 bg-kwar-electric/30"></div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-kwar-electric">
                      <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conversion Block com PDF */}
        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <div className="card-glass p-10 lg:p-12 rounded-2xl border-kwar-electric/20 text-center max-w-3xl mx-auto">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
              Veja como é um relatório completo
            </h3>
            
            <p className="text-kwar-gray text-lg mb-8 max-w-xl mx-auto">
              Análise, dados e recomendações prontos para apresentar.
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep font-bold px-8 py-6 text-base group"
            >
              <a href="/files/relatorio-exemplo.pdf" target="_blank" rel="noopener noreferrer">
                Baixar exemplo de relatório (PDF)
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// BENEFITS SECTION
// ============================================================================
function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('benefits');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: 'Ganhe tempo',
      description: 'Análises que levavam dias agora levam minutos. Sua equipe foca no que realmente importa.',
    },
    {
      icon: Target,
      title: 'Aja no momento certo',
      description: 'Identifique riscos antes que se tornem problemas. Tome decisões com antecedência, não na correria.',
    },
    {
      icon: Award,
      title: 'Tenha confiança',
      description: 'Chegue às reuniões com dados claros e embasados. Mais credibilidade, menos improviso.',
    },
  ];

  return (
    <section id="benefits" className="relative py-24 lg:py-32 bg-gradient-to-b from-kwar-deep to-kwar-deep/95">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Trabalhe de forma diferente
          </h2>
          <p className="text-xl sm:text-2xl text-kwar-gray max-w-2xl mx-auto">
            Menos correria, mais resultado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`card-glass p-8 text-center hover:border-kwar-electric/30 transition-all duration-700 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-kwar-electric/10 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-kwar-electric" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-4">{benefit.title}</h3>
              <p className="text-kwar-gray text-base leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CREDIBILIDADE KWAR-AI SECTION - Simplificada e no final
// ============================================================================
function KwarAICredibilitySection() {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('credibility');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="credibility" className="relative py-16 lg:py-24 bg-gradient-to-b from-kwar-deep to-kwar-deep/95">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="card-glass p-8 lg:p-12 rounded-2xl border-kwar-electric/20">
            <img 
              src="/images/logo-oficial.png" 
              alt="Kwar-AI" 
              className="w-20 h-20 mx-auto mb-6 object-contain"
            />
            
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
              Desenvolvido pela <span className="text-kwar-electric">Kwar-AI</span>
            </h3>
            
            <p className="text-kwar-gray mb-6 max-w-xl mx-auto">
              Tecnologia baseada em anos de pesquisa e projetos reais em saúde pública no Brasil.
            </p>

            <a 
              href="https://kwar-ai.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-kwar-electric hover:text-kwar-electric/80 transition-colors font-medium"
            >
              Conheça a Kwar-AI
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PRICING SECTION
// ============================================================================
function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('pricing');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: 'Free',
      price: 'Grátis',
      period: '/mês',
      description: 'Experimente o EpidBot e veja como transformar dados em insights',
      originalPrice: null,
      features: [
        'Até 5 análises por mês',
        'Upload de dados pequenos',
        'Respostas básicas',
        'Sem exportação de relatórios',
      ],
      cta: 'Começar grátis',
      popular: false,
    },
    {
      name: 'Pro',
      price: 'R$ 297',
      originalPrice: 'R$ 397',
      period: '/mês',
      description: 'Ideal para uso frequente e análises contínuas',
      features: [
        'Até 100 análises por mês',
        'Upload de conjunto de dados',
        'Geração de relatórios básicos',
        'Histórico de análises',
      ],
      cta: 'Assinar plano Pro',
      popular: true,
    },
    {
      name: 'Pro+',
      price: 'R$ 697',
      originalPrice: 'R$ 897',
      period: '/mês',
      description: 'Para equipes e análises mais avançadas',
      features: [
        'Até 300 análises por mês',
        'Relatórios completos em PDF',
        'Melhor performance',
        'Prioridade no processamento',
      ],
      cta: 'Assinar plano Pro+',
      popular: false,
    },
    {
      name: 'Enterprise',
      price: 'R$ 997',
      originalPrice: 'R$ 1.497',
      period: '/mês',
      description: 'Solução estratégica para instituições e projetos maiores',
      features: [
        'Alto volume de análises (uso sob medida)',
        'Integração com bases de dados locais',
        'Customizações sob demanda',
        'Suporte prioritário',
      ],
      note: 'Customizações e projetos especiais podem ser contratados à parte',
      cta: 'Falar com especialista',
      popular: false,
      enterprise: true,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-gradient-to-b from-kwar-deep/95 to-kwar-deep">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Decisões mais inteligentes
          </h2>
          <p className="text-xl text-kwar-gray max-w-2xl mx-auto">
            Dados claros, análises rápidas, resultados concretos.
          </p>
        </div>

        {/* Promo Banner */}
        <div
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-kwar-gold/10 border border-kwar-gold/30 rounded-xl p-6 text-center max-w-4xl mx-auto">
            <p className="text-kwar-gold font-semibold text-lg">
              Condições especiais de lançamento: aproveite valores reduzidos nos primeiros 3 meses
            </p>
            <p className="text-kwar-gray mt-2">
              enquanto evoluímos o EpidBot junto com nossos primeiros usuários.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative card-glass p-6 hover:border-kwar-electric/30 transition-all duration-700 flex flex-col ${
                plan.popular ? 'border-kwar-electric/50 lg:scale-105' : ''
              } ${plan.enterprise ? 'border-kwar-gold/30' : ''} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-kwar-electric text-kwar-deep text-sm font-bold rounded-full">
                  Mais popular
                </div>
              )}
              
              {/* Plan Name */}
              <h3 className={`font-semibold text-xl mb-2 ${plan.enterprise ? 'text-kwar-gold' : 'text-white'}`}>
                {plan.name}
              </h3>
              
              {/* Price */}
              <div className="mb-2">
                {plan.originalPrice && (
                  <span className="text-kwar-gray line-through text-sm block mb-1">
                    {plan.originalPrice}
                  </span>
                )}
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-bold ${plan.enterprise ? 'text-kwar-gold' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className="text-kwar-gray">{plan.period}</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-kwar-gray text-sm mb-4 min-h-[40px]">{plan.description}</p>
              
              {/* Features */}
              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-kwar-gray text-sm">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.enterprise ? 'text-kwar-gold' : 'text-kwar-electric'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Note for Enterprise */}
              {plan.note && (
                <p className="text-kwar-gray text-xs mb-4 italic">{plan.note}</p>
              )}
              
              {/* CTA Button */}
              <Button
                onClick={() => scrollToSection('#final-cta')}
                className={`w-full mt-auto ${
                  plan.popular
                    ? 'bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep font-bold'
                    : plan.enterprise
                    ? 'bg-kwar-gold hover:bg-kwar-gold/90 text-kwar-deep font-bold'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FINAL CTA SECTION
// ============================================================================
function FinalCTASection() {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('final-cta');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="final-cta" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-kwar-electric/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-kwar-gold/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
<h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Transforme dados em decisões
          </h2>

          <p className="text-xl text-kwar-gray mb-10">
            Fale com nossa equipe e descubra como o EpidBot pode ajudar.
          </p>
          
          {/* Web3Forms Integration */}
          <form action="https://api.web3forms.com/submit" method="POST" className="max-w-md mx-auto">
            <input type="hidden" name="access_key" value="b065c0bd-51d6-44df-b315-48aaa195103e" />
            <input type="hidden" name="subject" value="Nova mensagem - EpidBot Landing Page" />
            <input type="hidden" name="from_name" value="EpidBot Website" />
            <div className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Seu nome"
                className="bg-white/5 border-white/10 text-white placeholder:text-kwar-gray h-12"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Seu email"
                className="bg-white/5 border-white/10 text-white placeholder:text-kwar-gray h-12"
                required
              />
              <Input
                type="text"
                name="organization"
                placeholder="Nome da secretaria ou município"
                className="bg-white/5 border-white/10 text-white placeholder:text-kwar-gray h-12"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep font-bold px-8 h-12"
              >
                Quero Conversar
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </form>

          <p className="text-kwar-gray text-sm mt-6">
            Respondemos em até 24 horas. Sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FOOTER
// ============================================================================
function LandingFooter() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { label: t('epidbotLanding.footer.links.product', { defaultValue: 'Produto' }), href: '#what-is' },
    { label: t('epidbotLanding.footer.links.pricing', { defaultValue: 'Preços' }), href: '#pricing' },
    { label: t('epidbotLanding.footer.links.contact', { defaultValue: 'Contato' }), href: '#final-cta' },
  ];

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo-oficial.png" alt="Kwar-AI" className="w-8 h-8" />
              <span className="font-display font-bold text-white">
                KWAR<span className="text-kwar-electric">-</span>AI
              </span>
            </Link>
            <span className="text-kwar-gray text-sm">
              © {currentYear} {t('epidbotLanding.footer.rights', { defaultValue: 'Todos os direitos reservados' })}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-kwar-gray hover:text-white transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/"
              className="text-kwar-electric hover:text-kwar-electric/80 transition-colors text-sm font-medium"
            >
              {t('epidbotLanding.footer.mainSite', { defaultValue: 'Voltar ao Site Principal' })}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function EpidbotLanding() {
  return (
    <div className="relative min-h-screen bg-kwar-deep">
      <NeuralBackground />
      <LandingNavbar />
      
      <main className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <WhatIsEpidbotSection />
        <WhatItDoesSection />
        <DemoVideoSection />
        <HowItWorksSection />
        <BenefitsSection />
        <PricingSection />
        <FinalCTASection />
        <KwarAICredibilitySection />
      </main>
      
      <LandingFooter />
    </div>
  );
}
