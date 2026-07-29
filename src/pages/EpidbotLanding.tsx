import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import SkipToContent from '@/components/SkipToContent';
import { 
  ArrowRight, 
  Users,
  Check,
  Menu,
  X,
  Play,
  BarChart3,
  Clock,
  Award,
  Target,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// ============================================================================
// NAVIGATION
// ============================================================================
function LandingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

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

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => scrollToSection('#final-cta')}
              className="bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep font-semibold"
            >
              Agendar Demonstração
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
            <Button
              onClick={() => { scrollToSection('#final-cta'); }}
              className="w-full bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep font-semibold"
            >
              Agendar Demonstração
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ============================================================================
// HERO SECTION
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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay gradiente - ajustado */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(10, 22, 40, 0.94) 0%, rgba(10, 22, 40, 0.78) 50%, rgba(10, 22, 40, 0.35) 100%)',
        }}
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-32">
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-[42%]">
          {/* Main Title */}
          <h1
            className={`font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold text-white leading-[1.1] mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="block">Os dados chegam.</span>
            <span className="block text-kwar-electric">A decisão não.</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-base sm:text-lg text-white/65 leading-relaxed max-w-lg mb-6 transition-all duration-1000 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Todos os dias, gestores precisam consultar diferentes sistemas, consolidar planilhas, interpretar indicadores e produzir relatórios antes de tomar decisões importantes.
          </p>

          {/* Highlight line */}
          <p
            className={`text-base sm:text-lg text-white/80 font-medium leading-relaxed max-w-lg mb-12 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Enquanto isso, o tempo continua passando.
          </p>

          {/* Two CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button
              onClick={() => scrollToSection('#final-cta')}
              size="lg"
              className="bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep font-bold px-8 h-12 text-sm shadow-lg shadow-kwar-electric/25 group"
            >
              Descubra uma nova forma de trabalhar
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => scrollToSection('#demo')}
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/[0.06] hover:border-white/30 px-8 h-12 text-sm"
            >
              Veja como funciona
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
// ABOUT EPIDBOT SECTION
// ============================================================================
function AboutEpidbotSection() {
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

    const element = document.getElementById('about-epidbot');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    { emoji: '\u{1F4CA}', text: 'Análises inteligentes' },
    { emoji: '\u{1F5C2}\uFE0F', text: 'Bases oficiais integradas' },
    { emoji: '\u{1F4AC}', text: 'Perguntas em linguagem natural' },
  ];

  return (
    <section id="about-epidbot" className="relative py-24 lg:py-32 bg-gradient-to-b from-kwar-deep to-kwar-deep/95">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[44%_56%] gap-16 items-center">
          {/* Left - Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 mb-6">
              <span className="text-sm font-medium text-kwar-electric">CONHEÇA O EPIDBOT</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Inteligência para transformar dados em decisões.
            </h2>
            
            <p className="text-lg text-kwar-gray mb-8">
              O EpidBot é uma plataforma de inteligência para saúde pública que reúne informações de diferentes bases oficiais e as transforma em análises, relatórios, visualizações e evidências para apoiar decisões de gestores, hospitais, fundações estatais e secretarias de saúde.
            </p>

            <div className="flex flex-wrap gap-3">
              {benefits.map((benefit) => (
                <span key={benefit.text} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium">
                  <span>{benefit.emoji}</span>
                  <span>{benefit.text}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-kwar-electric/20 rounded-3xl blur-3xl" />
              <div className="relative card-glass p-4 rounded-2xl border-kwar-electric/30">
                <img
                  src="/images/tela_epidbot1.png"
                  alt="EpidBot Interface"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <p className="text-center text-kwar-gray text-sm mt-4">
                Faça perguntas em linguagem natural e receba análises completas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// HOW EPIDBOT HELPS SECTION
// ============================================================================
function HowEpidbotHelpsSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    { emoji: '\u{1F4C1}', title: 'Dados espalhados', desc: 'Informações distribuídas entre diferentes sistemas, planilhas e bases oficiais.' },
    { emoji: '\u{1F9E0}', title: 'O EpidBot analisa', desc: 'Integra diferentes fontes, identifica padrões e realiza análises automaticamente.' },
    { emoji: '\u{1F4CA}', title: 'Decisão apoiada por evidências', desc: 'Relatórios, gráficos, mapas e recomendações para apoiar decisões mais rápidas e bem fundamentadas.' },
  ];

  return (
    <section ref={sectionRef} id="how-epidbot-helps" className="relative overflow-hidden bg-[#050a10] py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-14 max-w-2xl text-left transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-kwar-electric/25 bg-kwar-electric/8 px-4 py-1.5">
            <span className="text-[11px] font-medium tracking-wide text-kwar-electric uppercase">COMO O EPIDBOT AJUDA</span>
          </div>
          <h2 className="mb-6 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Menos tempo procurando dados.
            <br />
            <span className="text-kwar-electric">Mais tempo tomando decisões.</span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/55">
            Depois de reunir informações de diferentes bases oficiais, o EpidBot identifica padrões, organiza evidências e transforma dados complexos em respostas claras para apoiar decisões.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-0">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-1 flex-col items-center lg:flex-row">
              <div
                className={`group w-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-700 hover:border-kwar-electric/15 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-2xl">
                  {step.emoji}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{step.desc}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="flex items-center justify-center py-2 lg:px-4 lg:py-0">
                  <ArrowRight className="h-5 w-5 rotate-90 text-white/20 lg:rotate-0" strokeWidth={1.5} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// REAL EXAMPLE SECTION
// ============================================================================
// REAL EXAMPLE SECTION
// ============================================================================
function RealExampleSection() {
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      num: '01', title: 'A pergunta',
      desc: 'O gestor faz uma pergunta em linguagem natural sobre um problema de saúde pública.',
      img: '/images/pergunta.png', alt: 'Pergunta enviada ao EpidBot',
    },
    {
      num: '02', title: 'Bases consultadas',
      desc: 'O EpidBot identifica automaticamente quais bases oficiais precisam ser consultadas para responder à pergunta.',
      img: '/images/base de dados.png', alt: 'Bases de dados consultadas pelo EpidBot',
    },
    {
      num: '03', title: 'Análise integrada',
      desc: 'Os dados são cruzados e analisados automaticamente para identificar padrões e inconsistências.',
      img: '/images/resultados.png', alt: 'Resultado da análise do EpidBot',
    },
    {
      num: '04', title: 'Impacto identificado',
      desc: 'O EpidBot explica por que o resultado importa para a gestão e quais riscos ou oportunidades foram encontrados.',
      img: '/images/beneficios 1.png', alt: 'Impacto identificado pelo EpidBot',
    },
    {
      num: '05', title: 'Decisão apoiada por evidências',
      desc: 'A plataforma entrega um relatório claro para apoiar a tomada de decisão do gestor.',
    },
  ];

  return (
    <section ref={sectionRef} id="real-example" className="relative overflow-hidden bg-[#050a10] py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          className={`mx-auto mb-20 max-w-3xl text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-kwar-electric/25 bg-kwar-electric/8 px-4 py-1.5">
            <span className="text-[11px] font-medium tracking-wide text-kwar-electric uppercase">EXEMPLO REAL</span>
          </div>
          <h2 className="mb-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Da pergunta<span className="text-kwar-electric">...</span><br />
            <span className="text-kwar-electric">à decisão.</span>
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/55">
            Veja como o EpidBot transforma uma pergunta em uma análise completa utilizando dados oficiais da saúde pública.
          </p>
        </div>

        {/* STEPS — zig-zag */}
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          const hasImage = !!step.img;
          return (
            <div
              key={step.num}
              className={`mb-24 last:mb-0 ${
                hasImage
                  ? `grid items-center gap-8 lg:gap-16 ${isLeft ? 'lg:grid-cols-[1fr_1.1fr]' : 'lg:grid-cols-[1.1fr_1fr]'}`
                  : 'mx-auto max-w-2xl text-center'
              }`}
            >
              {hasImage && (
                <div
                  className={`order-1 transition-all duration-1000 delay-150 ${
                    isLeft ? 'lg:order-2' : 'lg:order-1'
                  } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                  <div className="overflow-hidden rounded-2xl border border-white/[0.06] shadow-2xl shadow-black/60">
                    <img src={step.img} alt={step.alt} className="w-full h-auto" />
                  </div>
                </div>
              )}

              <div
                className={`transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '250ms' }}
              >
                <span className="mb-4 block text-6xl font-bold leading-none text-white/10 sm:text-7xl">
                  {step.num}
                </span>
                <h3 className="mb-3 text-2xl font-semibold text-white sm:text-3xl">{step.title}</h3>
                <p className={`text-base leading-relaxed text-white/50 ${hasImage ? 'max-w-md' : 'mx-auto max-w-lg'}`}>{step.desc}</p>
              </div>
            </div>
          );
        })}

        {/* CLOSING BLOCK */}
        <div
          className={`mx-auto mt-24 max-w-3xl rounded-2xl border border-kwar-electric/10 bg-gradient-to-r from-kwar-electric/[0.03] to-transparent p-8 text-center transition-all duration-1000 delay-300 sm:p-10 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h3 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
            Quer ver a análise completa?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/55">
            Baixe o relatório completo gerado pelo EpidBot e acompanhe toda a investigação apresentada neste exemplo, desde a pergunta inicial até as conclusões e recomendações.
          </p>

          <Button
            size="lg"
            className="bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep font-bold px-8 h-12 text-sm shadow-lg shadow-kwar-electric/25"
            onClick={() => {
              const a = document.createElement('a');
              a.href = '/files/secao_subnotificacao.pdf';
              a.download = 'EpidBot - Análise de Subnotificação.pdf';
              a.click();
            }}
          >
            {'\uD83D\uDCC4'} Baixar relatório completo
          </Button>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// MORE USE CASES SECTION
// ============================================================================
// MORE USE CASES SECTION
// ============================================================================
function MoreUseCasesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

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

    const element = document.getElementById('more-use-cases');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const chips = [
    'Prestação de contas', 'Dengue', 'Sala de situação',
    'planejamento', 'Avaliação', 'Comparação', 'Respostas',
  ];

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <section id="more-use-cases" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-16 items-start">
          {/* Left - Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Descubra outras formas de usar o EpidBot.
            </h2>
            
            <p className="text-lg text-kwar-gray mb-4">
              O EpidBot pode ser aplicado em diferentes contextos da gestão em saúde pública.
            </p>

            <p className="text-base text-kwar-gray mb-8">
              Preparamos um relatório com 10 casos reais de uso, incluindo aplicações em vigilância epidemiológica, planejamento, prestação de contas, alocação de recursos, avaliação de políticas públicas e muito mais. O relatório apresenta apenas alguns exemplos. O EpidBot pode apoiar centenas de outras análises utilizando diferentes bases oficiais da saúde.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {chips.map((chip) => (
                <span key={chip} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-kwar-electric/10 hover:border-kwar-electric/30 transition-colors cursor-default">
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep font-bold px-8 py-6 text-base group"
              >
                Explorar relatório completo
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-kwar-electric/30 text-kwar-electric hover:bg-kwar-electric/10 px-8 py-6 text-base"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/files/epidbot para gestores.pdf';
                  link.download = 'epidbot-para-gestores.pdf';
                  link.click();
                }}
              >
                Baixar PDF
              </Button>
            </div>
          </div>

          {/* Right - PDF Viewer */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="card-glass p-4 rounded-2xl border-kwar-electric/20">
              <div className="bg-white/5 rounded-xl overflow-hidden">
                <Document
                  file="/files/epidbot para gestores.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={<div className="flex items-center justify-center h-96 text-kwar-gray">Carregando PDF...</div>}
                  error={<div className="flex items-center justify-center h-96 text-kwar-gray">Erro ao carregar PDF</div>}
                >
                  <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} className="mx-auto" width={Math.min(520, typeof window !== 'undefined' ? window.innerWidth - 48 : 500)} />
                </Document>
              </div>
              {numPages && (
                <div className="flex items-center justify-center gap-4 mt-4">
                  <button
                    onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                    disabled={pageNumber <= 1}
                    className="p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-kwar-gray text-sm">
                    {pageNumber} / {numPages}
                  </span>
                  <button
                    onClick={() => setPageNumber(Math.min(numPages ?? 1, pageNumber + 1))}
                    disabled={pageNumber >= (numPages ?? 1)}
                    className="p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const problems = [
    { icon: Users, title: 'Equipes enxutas', desc: 'Poucas pessoas para muitas análises.' },
    { icon: BarChart3, title: 'Dados desconectados', desc: 'Cada sistema mostra apenas parte da realidade.' },
    { icon: Clock, title: 'O tempo não espera', desc: 'Quando a resposta chega, a situação já mudou.' },
  ];

  return (
    <section ref={sectionRef} id="problem" className="relative overflow-hidden bg-[#050a10] py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[9fr_11fr] lg:gap-20">
          {/* LEFT — Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-kwar-electric/25 bg-kwar-electric/8 px-4 py-1.5">
              <span className="text-[11px] font-medium tracking-wide text-kwar-electric uppercase">
                OS DESAFIOS DA GESTÃO EM SAÚDE
              </span>
            </div>
            <h2 className="mb-6 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.5rem]">
              Por que tomar decisões ainda é{' '}
              <span className="text-kwar-electric">tão difícil?</span>
            </h2>
            <p className="mb-10 text-base leading-relaxed text-white/55">
              Os dados existem, mas estão distribuídos entre diferentes sistemas. Transformar essas informações em decisões ainda exige muito tempo e trabalho manual.
            </p>

            <p className="text-lg font-semibold leading-snug text-white/80">
              Nenhum sistema sozinho mostra a história completa.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.06] shadow-2xl shadow-black/50">
              <img
                src="/images/problema.png"
                alt="Gestor de saúde sobrecarregado com dados e planilhas"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* RIGHT — Cards */}
          <div className="space-y-5">
            {problems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`group rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-kwar-electric/15 hover:bg-white/[0.025] hover:shadow-[0_4px_24px_rgba(0,0,0,0.25)] sm:p-7 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-kwar-electric/20 bg-kwar-electric/[0.06] text-kwar-electric transition-colors group-hover:border-kwar-electric/30 group-hover:bg-kwar-electric/[0.10]">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="mb-1 text-sm font-semibold text-white">{item.title}</h3>
                      <p className="text-xs leading-relaxed text-white/45">{item.desc}</p>
                    </div>
                  </div>
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
              {t('epidbotLanding.demo.badge', { defaultValue: 'Demonstra├º├úo' })}
            </span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Veja como o EpidBot funciona na prática
          </h2>
          
          <p className="text-xl text-kwar-gray max-w-2xl mx-auto">
            {t('epidbotLanding.demo.subtitle', { defaultValue: 'Em poucos minutos, voc├¬ entende como transformar dados em decis├Áes.' })}
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
          {t('epidbotLanding.demo.note', { defaultValue: 'Sem instala├º├úo. Sem equipe t├®cnica. Direto ao ponto.' })}
        </p>

        {/* Access App Button */}
        <div
          className={`text-center mt-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Button
            asChild
            size="lg"
            className="bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep font-bold px-10 py-6 text-lg group shadow-lg shadow-kwar-electric/25"
          >
            <a href="https://epidbot.kwar-ai.com.br" target="_blank" rel="noopener noreferrer">
              {t('epidbotLanding.demo.accessApp', { defaultValue: 'Agendar demonstração' })}
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}


// ============================================================================
// BENEFITS SECTION
// ============================================================================
function BenefitsSection() {
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

    const element = document.getElementById('benefits');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: t('epidbotLanding.benefits.items.time.title', { defaultValue: 'Ganhe tempo' }),
      description: t('epidbotLanding.benefits.items.time.description', { defaultValue: 'An├ílises que levavam dias agora levam minutos. Sua equipe foca no que realmente importa.' }),
    },
    {
      icon: Target,
      title: t('epidbotLanding.benefits.items.control.title', { defaultValue: 'Aja no momento certo' }),
      description: t('epidbotLanding.benefits.items.control.description', { defaultValue: 'Identifique riscos antes que se tornem problemas. Tome decis├Áes com anteced├¬ncia, n├úo na correria.' }),
    },
    {
      icon: Award,
      title: t('epidbotLanding.benefits.items.peace.title', { defaultValue: 'Tenha confian├ºa' }),
      description: t('epidbotLanding.benefits.items.peace.description', { defaultValue: 'Chegue ├ás reuni├Áes com dados claros e embasados. Mais credibilidade, menos improviso.' }),
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
            {t('epidbotLanding.benefits.title', { defaultValue: 'Trabalhe de forma diferente' })}
          </h2>
          <p className="text-xl sm:text-2xl text-kwar-gray max-w-2xl mx-auto">
            {t('epidbotLanding.benefits.subtitle', { defaultValue: 'Menos correria, mais resultado.' })}
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
              {t('epidbotLanding.credibility.title', { defaultValue: 'Desenvolvido pela' })} <span className="bg-gradient-to-r from-[#FCD34D] via-[#FBBF24] to-[#F59E0B] bg-clip-text text-transparent font-bold drop-shadow-[0_0_16px_rgba(250,204,21,0.3)]">Kwar-AI</span>
            </h3>
            
            <p className="text-kwar-gray mb-6 max-w-xl mx-auto">
              {t('epidbotLanding.credibility.description', { defaultValue: 'Tecnologia baseada em anos de pesquisa e projetos reais em sa├║de p├║blica no Brasil.' })}
            </p>

            <a 
              href="https://kwar-ai.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-kwar-electric hover:text-kwar-electric/80 transition-colors font-medium"
            >
              <span dangerouslySetInnerHTML={{
                __html: t('epidbotLanding.credibility.cta', {
                  defaultValue: 'Conhe├ºa a <strong className=\"bg-gradient-to-r from-[#FCD34D] via-[#FBBF24] to-[#F59E0B] bg-clip-text text-transparent font-bold drop-shadow-[0_0_16px_rgba(250,204,21,0.3)]\">Kwar-AI</strong>'
                })
              }} />
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
      name: t('epidbotLanding.pricing.free.name', { defaultValue: 'Free' }),
      description: t('epidbotLanding.pricing.free.description', { defaultValue: 'Experimente o EpidBot e veja como transformar dados em insights' }),
      features: [
        t('epidbotLanding.pricing.features.free.0', { defaultValue: 'Até 5 análises por mês' }),
        t('epidbotLanding.pricing.features.free.1', { defaultValue: 'Upload de dados pequenos' }),
        t('epidbotLanding.pricing.features.free.2', { defaultValue: 'Respostas básicas' }),
        t('epidbotLanding.pricing.features.free.3', { defaultValue: 'Sem exportação de relatórios' }),
      ],
      cta: t('epidbotLanding.pricing.free.cta', { defaultValue: 'Começar grátis' }),
      popular: false,
    },
    {
      name: t('epidbotLanding.pricing.pro.name', { defaultValue: 'Pro' }),
      description: t('epidbotLanding.pricing.pro.description', { defaultValue: 'Ideal para uso frequente e análises contínuas' }),
      features: [
        t('epidbotLanding.pricing.features.pro.0', { defaultValue: 'Até 100 análises por mês' }),
        t('epidbotLanding.pricing.features.pro.1', { defaultValue: 'Upload de conjunto de dados' }),
        t('epidbotLanding.pricing.features.pro.2', { defaultValue: 'Geração de relatórios básicos' }),
        t('epidbotLanding.pricing.features.pro.3', { defaultValue: 'Histórico de análises' }),
      ],
      cta: t('epidbotLanding.pricing.pro.cta', { defaultValue: 'Tenho interesse' }),
      popular: true,
    },
    {
      name: t('epidbotLanding.pricing.proPlus.name', { defaultValue: 'Pro+' }),
      description: t('epidbotLanding.pricing.proPlus.description', { defaultValue: 'Para equipes e análises mais avançadas' }),
      features: [
        t('epidbotLanding.pricing.features.proPlus.0', { defaultValue: 'Até 300 análises por mês' }),
        t('epidbotLanding.pricing.features.proPlus.1', { defaultValue: 'Relatórios completos em PDF' }),
        t('epidbotLanding.pricing.features.proPlus.2', { defaultValue: 'Melhor performance' }),
        t('epidbotLanding.pricing.features.proPlus.3', { defaultValue: 'Prioridade no processamento' }),
      ],
      cta: t('epidbotLanding.pricing.proPlus.cta', { defaultValue: 'Tenho interesse' }),
      popular: false,
    },
    {
      name: t('epidbotLanding.pricing.enterprise.name', { defaultValue: 'Enterprise' }),
      description: t('epidbotLanding.pricing.enterprise.description', { defaultValue: 'Solução estratégica para instituições e projetos maiores' }),
      features: [
        t('epidbotLanding.pricing.features.enterprise.0', { defaultValue: 'Alto volume de análises (uso sob medida)' }),
        t('epidbotLanding.pricing.features.enterprise.1', { defaultValue: 'Integração com bases de dados locais' }),
        t('epidbotLanding.pricing.features.enterprise.2', { defaultValue: 'Customizações sob demanda' }),
        t('epidbotLanding.pricing.features.enterprise.3', { defaultValue: 'Suporte prioritário' }),
      ],
      note: t('epidbotLanding.pricing.enterprise.note', { defaultValue: 'Customizações e projetos especiais podem ser contratados à parte' }),
      cta: t('epidbotLanding.pricing.enterprise.cta', { defaultValue: 'Falar com especialista' }),
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
            {t('epidbotLanding.pricing.title', { defaultValue: 'O que est├í incluso' })}
          </h2>
          <p className="text-xl text-kwar-gray max-w-2xl mx-auto">
            {t('epidbotLanding.pricing.subtitle', { defaultValue: 'Escolha o plano que melhor atende suas necessidades.' })}
          </p>
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
                  {t('epidbotLanding.pricing.popular', { defaultValue: 'Mais popular' })}
                </div>
              )}
              
              {/* Plan Name */}
              <h3 className={`font-semibold text-xl mb-2 ${plan.enterprise ? 'text-kwar-gold' : 'text-white'}`}>
                {plan.name}
              </h3>
              
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
            {t('epidbotLanding.final.title', { defaultValue: 'Transforme dados em decis├Áes' })}
          </h2>

          <p className="text-xl text-kwar-gray mb-10">
            {t('epidbotLanding.final.subtitle', { defaultValue: 'Fale com nossa equipe e descubra como o EpidBot pode ajudar.' })}
          </p>
          
          {/* Web3Forms Integration */}
          <form action="https://api.web3forms.com/submit" method="POST" className="max-w-md mx-auto">
            <input type="hidden" name="access_key" value="b065c0bd-51d6-44df-b315-48aaa195103e" />
            <input type="hidden" name="subject" value="Nova mensagem - EpidBot Landing Page" />
            <input type="hidden" name="from_name" value="EpidBot Website" />
            <div className="space-y-4">
              <label htmlFor="contact-name" className="sr-only">
                {t('epidbotLanding.final.form.nameLabel', { defaultValue: 'Nome completo' })}
              </label>
              <Input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder={t('epidbotLanding.final.form.namePlaceholder', { defaultValue: 'Seu nome' })}
                className="bg-white/5 border-white/10 text-white placeholder:text-kwar-gray h-12"
                required
              />
              <label htmlFor="contact-email" className="sr-only">
                {t('epidbotLanding.final.form.emailLabel', { defaultValue: 'E-mail' })}
              </label>
              <Input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder={t('epidbotLanding.final.form.emailPlaceholder', { defaultValue: 'Seu email' })}
                className="bg-white/5 border-white/10 text-white placeholder:text-kwar-gray h-12"
                required
              />
              <label htmlFor="contact-org" className="sr-only">
                {t('epidbotLanding.final.form.organizationLabel', { defaultValue: 'Organização' })}
              </label>
              <Input
                id="contact-org"
                type="text"
                name="organization"
                autoComplete="organization"
                placeholder={t('epidbotLanding.final.form.organizationPlaceholder', { defaultValue: 'Nome da secretaria ou munic├¡pio' })}
                className="bg-white/5 border-white/10 text-white placeholder:text-kwar-gray h-12"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep font-bold px-8 h-12"
              >
                {t('epidbotLanding.final.form.submitButton', { defaultValue: 'Quero Conversar' })}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </form>

          <p className="text-kwar-gray text-sm mt-6">
            {t('epidbotLanding.final.note', { defaultValue: 'Respondemos em at├® 24 horas. Sem compromisso.' })}
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// VALIDATION SECTION
// ============================================================================
function ValidationSection() {
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

    const element = document.getElementById('validation');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const row1 = [
    {
      title: 'Rio Saúde',
      subtitle: 'Secretaria Municipal de Saúde do Rio de Janeiro',
      description: 'Análise de dados epidemiológicos para tomada de decisão.',
      image: '/images/rio saude.png',
    },
    {
      title: 'Joinville',
      subtitle: 'Prefeitura de Joinville',
      description: 'Monitoramento e análise de indicadores de saúde.',
      image: '/images/joinville.png',
    },
    {
      title: 'InfoDengue',
      subtitle: 'Fiocruz',
      description: 'Parceria técnica para análises de arboviroses.',
      image: '/images/infodengue.jpeg',
    },
    {
      title: 'Fiocruz',
      subtitle: 'Fundação Oswaldo Cruz',
      description: 'Projeto de vigilância epidemiológica.',
      image: '/images/fiocruz.jpg',
    },
  ];

  const row2 = [
    {
      title: 'OMS EMRO',
      subtitle: 'Organização Mundial da Saúde',
      description: 'Iniciativa piloto desenvolvida junto ao ecossistema de inovação da OMS EMRO.',
      image: '/images/who-emro.png',
    },
    {
      title: 'Web Summit Rio 2026',
      subtitle: 'Impact Startup',
      description: 'Selecionada como Startup de Impacto no Web Summit Rio 2026.',
      image: '/images/RIO26_Impact badge.png',
      link: 'https://rio.websummit.com/pt-br/startups/impact-startups/search/KWAR-AI/',
    },
    {
      title: '80+',
      subtitle: 'Usuários qualificados',
      description: 'Médicos, epidemiologistas, pesquisadores e profissionais da saúde já utilizaram ou avaliaram o EpidBot.',
      icon: Users,
    },
  ];

  return (
    <section id="validation" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 mb-6">
            <span className="text-sm font-medium text-kwar-electric">Credibilidade</span>
          </div>
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Já está sendo utilizado e avaliado por profissionais da saúde.
          </h2>
        </div>

        {/* Row 1 - 4 cols */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {row1.map((card, index) => (
            <div
              key={card.title}
              className={`group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-sm transition-all duration-700 hover:border-white/[0.12] hover:bg-white/[0.025] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="mb-5">
                <img src={card.image} alt={card.title} className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-0.5">{card.title}</h3>
              <p className="text-kwar-electric text-xs tracking-wide uppercase mb-3">{card.subtitle}</p>
              <p className="text-white/40 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Row 2 - 3 cols */}
        <div className="grid sm:grid-cols-3 gap-5">
          {row2.map((card, index) => (
            <div
              key={card.title}
              className={`group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-sm transition-all duration-700 hover:border-white/[0.12] hover:bg-white/[0.025] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 5) * 150}ms` }}
            >
              {card.image ? (
                <div className="mb-5">
                  {card.link ? (
                    <a href={card.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src={card.image} alt={card.title} className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <img src={card.image} alt={card.title} className="h-10 w-auto object-contain opacity-70" />
                  )}
                </div>
              ) : card.icon ? (
                <div className="w-11 h-11 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center mb-5">
                  <card.icon className="w-5 h-5 text-white/40" strokeWidth={1.5} />
                </div>
              ) : null}
              <h3 className="text-white font-semibold text-lg mb-0.5">{card.title}</h3>
              <p className="text-kwar-electric text-xs tracking-wide uppercase mb-3">{card.subtitle}</p>
              <p className="text-white/40 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
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
    { label: t('epidbotLanding.footer.links.product', { defaultValue: 'Produto' }), href: '#about-epidbot' },
    { label: t('epidbotLanding.footer.links.pricing', { defaultValue: 'Pre├ºos' }), href: '#pricing' },
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
              ┬® {currentYear} {t('epidbotLanding.footer.rights', { defaultValue: 'Todos os direitos reservados' })}
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
      <SkipToContent />
      <LandingNavbar />
      
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <AboutEpidbotSection />
        <HowEpidbotHelpsSection />
        <RealExampleSection />
        <MoreUseCasesSection />
        <DemoVideoSection />
        <ValidationSection />
        <BenefitsSection />
        <PricingSection />
        <FinalCTASection />
        <KwarAICredibilitySection />
      </main>
      
      <LandingFooter />
    </div>
  );
}
