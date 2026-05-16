import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Menu,
  X,
  Database,
  MessageSquare,
  BarChart3,
  Shield,
  Globe,
  CloudSun,
  Clock,
  Zap,
  Brain,
  Activity,
  Users,
  Play,
  Bug,
  Eye,
  Sparkles,
  Landmark
} from 'lucide-react';

// ============================================================================
// ANIMATION HOOK
// ============================================================================
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

// ============================================================================
// NAVBAR
// ============================================================================
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

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Product', href: '#product' },
    { label: 'Vision', href: '#vision' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-kwar-deep/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/images/logo-oficial.png"
              alt="Kwar-AI"
              className="w-8 h-8 object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-display font-bold text-lg text-white tracking-tight">
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
            <Button
              onClick={() => scrollToSection('#contact')}
              size="sm"
              className="hidden sm:inline-flex bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep font-semibold text-sm h-9"
            >
              Schedule a Meeting
            </Button>
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
        <div className="lg:hidden bg-kwar-deep/98 border-b border-white/5">
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
            <Button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep font-semibold mt-2"
            >
              Schedule a Meeting
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ============================================================================
// HERO SECTION — CINEMATIC GLOBAL (UNCHANGED)
// ============================================================================
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.12}px) scale(1.03)`,
          willChange: 'transform',
        }}
      >
        <img
          src="/images/hero_websummit.png"
          alt=""
          className="w-full h-full object-cover object-[center_25%]"
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(5,10,20,0.88) 0%, rgba(5,10,20,0.72) 40%, rgba(5,10,20,0.35) 65%, rgba(5,10,20,0.15) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(5,10,20,0.65) 0%, transparent 35%)',
        }}
      />

      <div
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full blur-[140px] animate-pulse-glow pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.06) 50%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,240,255,0.08) 0%, transparent 60%)',
          animation: 'pulse-glow 5s ease-in-out infinite reverse',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-2xl">
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="https://rio.websummit.com/pt-br/startups/impact-startups/search/KWAR-AI/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-kwar-electric/10 border border-kwar-electric/20 backdrop-blur-sm hover:bg-kwar-electric/20 hover:border-kwar-electric/40 transition-all duration-300 group"
            >
              <img src="/images/RIO26_Impact badge.png" alt="Web Summit Impact Startup" className="h-5 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-kwar-electric tracking-wide uppercase">Web Summit Rio 2026</span>
                <span className="text-[11px] text-kwar-electric/80">Impact Startup</span>
              </div>
              <svg className="w-3 h-3 text-kwar-electric opacity-0 group-hover:opacity-100 transition-opacity ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <h1
            className={`font-body text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.75rem] font-normal text-white mb-7 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ letterSpacing: '-0.03em', lineHeight: '1.4' }}
          >
            Intelligence for faster public health decisions.
          </h1>

          <p
            className={`text-base sm:text-[1.05rem] text-white/65 max-w-xl mb-10 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="text-kwar-electric font-bold">EpidBot</span>, KWAR-AI's conversational intelligence platform, transforms epidemiological, climate and mobility data into real-time strategic insights for outbreak detection and public health response.
          </p>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Button
              onClick={() => scrollToSection('#product')}
              size="lg"
              className="bg-kwar-electric hover:bg-kwar-electric/85 text-kwar-deep font-bold px-8 h-12 text-sm group shadow-[0_0_32px_rgba(0,240,255,0.25)] hover:shadow-[0_0_40px_rgba(0,240,255,0.35)] transition-all"
            >
              See EpidBot in Action
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 1. THE PROBLEM
// ============================================================================
function ProblemSection() {
  const { ref, isVisible } = useScrollReveal();

  const cards = [
    {
      icon: Database,
      title: 'Fragmented systems',
      description: 'Critical health data remains disconnected across multiple sources, platforms and formats.',
    },
    {
      icon: Clock,
      title: 'Delayed response',
      description: 'Slow analysis and manual processes compromise outbreak response and public health decisions.',
    },
    {
      icon: CloudSun,
      title: 'Climate acceleration',
      description: 'Changing climate conditions are expanding the spread and unpredictability of vector-borne diseases.',
    },
    {
      icon: Zap,
      title: 'Data overload',
      description: 'More data does not mean better decisions. Teams struggle to turn vast data streams into actionable intelligence.',
    },
  ];

  return (
    <section ref={ref} id="problem" className="relative py-16 lg:py-20 bg-[#050a10] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top area: Text left + Image right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-start mb-4">
          {/* Left — Text */}
          <div className="max-w-xl">
            <p
              className={`text-[11px] text-kwar-electric font-medium tracking-[0.2em] uppercase mb-5 transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              The Problem
            </p>

            <h2
              className={`font-body text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[3.25rem] font-normal text-white mb-5 transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ letterSpacing: '-0.02em', lineHeight: '1.4' }}
            >
              Public health systems weren't built for{' '}
              <span className="text-kwar-electric">modern epidemic risk.</span>
            </h2>

            <p
              className={`text-sm text-white/50 leading-relaxed mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Climate change, fragmented systems and growing epidemiological complexity are overwhelming public health decision-making worldwide.
            </p>

            <div
              className={`flex items-center gap-4 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-12 h-12 rounded-full border border-kwar-electric/30 flex items-center justify-center">
                <Users className="w-5 h-5 text-kwar-electric" />
              </div>
              <p className="text-sm text-white/60">
                <span className="text-kwar-electric font-bold">Millions</span> remain exposed to increasingly unpredictable vector-borne disease risks.
              </p>
            </div>
          </div>

          {/* Right — Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <img
              src="/images/the problem.png"
              alt="Global epidemic risk visualization"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>

        {/* Bottom 4 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`group p-5 rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent transition-all duration-700 hover:border-kwar-electric/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 120}ms` }}
            >
              <div className="w-10 h-10 rounded-full border border-kwar-electric/30 flex items-center justify-center mb-4">
                <card.icon className="w-5 h-5 text-kwar-electric" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{card.title}</h3>
              <div className="w-6 h-px bg-kwar-electric/50 mb-2" />
              <p className="text-kwar-gray text-xs leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 2. THE SOLUTION
// ============================================================================
function SolutionSection() {
  const { ref, isVisible } = useScrollReveal();

  const stepCards = [
    {
      num: '01',
      label: 'DATA',
      icon: Database,
      description: 'Epidemiological and climate information from multiple sources.',
      tags: ['Case reports', 'Climate data', 'Demographics'],
      tagColor: 'text-cyan-300/80 border-cyan-500/20 bg-cyan-500/5',
    },
    {
      num: '02',
      label: 'AI REASONING',
      icon: Brain,
      description: 'Scientific methodologies combined with contextual AI-assisted analysis.',
      tags: ['Trend analysis', 'Climate correlation', 'Risk modeling'],
      tagColor: 'text-purple-300/80 border-purple-500/20 bg-purple-500/5',
    },
    {
      num: '03',
      label: 'STRATEGIC INSIGHTS',
      icon: BarChart3,
      description: 'Conversational analysis to support public health decision-making.',
      tags: ['Risk evaluation', 'Recommendations', 'Resource allocation'],
      tagColor: 'text-emerald-300/80 border-emerald-500/20 bg-emerald-500/5',
    },
  ];

  const trustItems = [
    { icon: Shield, label: 'Grounded in science. Built for impact.' },
    { icon: Activity, label: 'Epidemiological methodologies' },
    { icon: CloudSun, label: 'Climate correlation' },
    { icon: BarChart3, label: 'Statistical modeling' },
    { icon: MessageSquare, label: 'AI-assisted interpretation' },
  ];

  return (
    <section ref={ref} id="solution" className="relative py-20 lg:py-28 bg-[#050a10] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Ambient glows */}
      <div
        className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,120,255,0.06) 0%, rgba(80,40,200,0.04) 40%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP: Text left + Visual right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start mb-16 lg:mb-20">
          {/* Left — Text */}
          <div className="max-w-lg pt-4">
            <p
              className={`text-[11px] text-kwar-electric font-medium tracking-[0.2em] uppercase mb-5 transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              The Solution
            </p>

            <h2
              className={`font-body text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-normal text-white mb-4 transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ letterSpacing: '-0.02em', lineHeight: '1.4' }}
            >
              From epidemiological data to{' '}
              <span className="text-kwar-electric">strategic insights.</span>
            </h2>

            <p
              className={`text-base text-white/50 leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              EpidBot combines epidemiological methodologies, climate analysis and AI-assisted reasoning to support public health decision-making.
            </p>
          </div>

          {/* Right — Moodboard collage */}
          <div
            className={`relative h-[380px] sm:h-[440px] lg:h-[480px] transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Glow behind moodboard */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(0,160,255,0.08) 0%, rgba(100,60,255,0.04) 30%, transparent 60%)',
              }}
            />

            <div className="relative w-full h-full">
              {/* Base image — Cancer de Mama Joinville (center, largest) */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] sm:w-[68%] z-10 transition-transform duration-500 hover:scale-[1.02]"
              >
                <img
                  src="/images/cancer de mama joiville.jpeg"
                  alt="EpidBot-generated analysis — Breast cancer mortality trends and projections by district in Joinville"
                  className="w-full h-auto rounded-xl border border-white/[0.08]"
                  style={{
                    boxShadow: '0 25px 60px -12px rgba(0,0,0,0.5), 0 0 40px rgba(0,140,255,0.06)',
                  }}
                />
              </div>

              {/* Overlay top-left — Colera analysis */}
              <div
                className="absolute top-2 left-0 sm:-left-2 w-[52%] sm:w-[48%] z-20 transition-transform duration-500 hover:scale-[1.03] hover:z-30"
                style={{ transform: 'rotate(-3deg)' }}
              >
                <img
                  src="/images/colera.png"
                  alt="EpidBot-generated analysis — Seasonal and climate drivers of cholera"
                  className="w-full h-auto rounded-xl border border-white/[0.08]"
                  style={{
                    boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6), 0 0 30px rgba(0,140,255,0.05)',
                  }}
                />
              </div>

              {/* Overlay bottom-right — Insights Colera */}
              <div
                className="absolute bottom-4 right-0 sm:-right-2 w-[50%] sm:w-[46%] z-20 transition-transform duration-500 hover:scale-[1.03] hover:z-30"
                style={{ transform: 'rotate(2.5deg)' }}
              >
                <img
                  src="/images/insights colera.png"
                  alt="EpidBot-generated strategic insights — Resource allocation priorities"
                  className="w-full h-auto rounded-xl border border-white/[0.08]"
                  style={{
                    boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6), 0 0 30px rgba(0,140,255,0.05)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE: 3 numbered step cards */}
        <div className="relative mb-12">
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
            {stepCards.map((card, index) => (
              <div
                key={card.label}
                className={`group relative p-5 lg:p-6 rounded-2xl border border-white/[0.05] bg-white/[0.015] backdrop-blur-sm transition-all duration-500 hover:border-white/[0.10] hover:bg-white/[0.025] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150 + 500}ms` }}
              >
                <div className="relative">
                  {/* Top row: icon + num + label */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-11 h-11 rounded-full border border-kwar-electric/20 bg-kwar-electric/5 flex items-center justify-center shrink-0">
                      <card.icon className="w-5 h-5 text-kwar-electric" strokeWidth={1.5} />
                    </div>
                    <div className="pt-0.5">
                      <span className="text-[10px] text-kwar-electric/60 font-medium tracking-wider">{card.num}</span>
                      <h3 className="text-white font-semibold text-sm tracking-wide">{card.label}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/40 text-sm leading-relaxed mb-5">
                    {card.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-md text-[10px] font-medium border ${card.tagColor}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connector arrow (desktop, between cards) */}
                {index < stepCards.length - 1 && (
                  <div className="hidden sm:flex absolute top-1/2 -right-3 z-10 items-center justify-center w-6 h-6">
                    <ArrowRight className="w-3.5 h-3.5 text-kwar-electric/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM: Trust / science bar */}
        <div
          className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4 px-6 rounded-xl border border-white/[0.04] bg-white/[0.015] backdrop-blur-sm transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {trustItems.map((item, index) => (
            <div key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden sm:inline-block w-px h-4 bg-white/10 mr-2" />
              )}
              <item.icon className="w-3.5 h-3.5 text-kwar-electric/60" strokeWidth={1.5} />
              <span className="text-[11px] text-white/50 whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 3. TRACTION
// ============================================================================
function TractionSection() {
  const { ref, isVisible } = useScrollReveal();

  const domainTags = [
    { label: 'Epidemiology', icon: Bug },
    { label: 'Arboviruses', icon: CloudSun },
    { label: 'Surveillance', icon: Eye },
    { label: 'Hospital Intelligence', icon: Landmark },
    { label: 'Climate & Health', icon: CloudSun },
    { label: 'SUS Data', icon: BarChart3 },
    { label: 'AI for Health', icon: Sparkles },
  ];

  return (
    <section ref={ref} id="traction" className="relative py-24 lg:py-32 bg-[#050a10] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Atmospheric globe — top-left */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] pointer-events-none opacity-40">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
          <circle cx="200" cy="200" r="150" stroke="rgba(0,240,255,0.08)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="120" stroke="rgba(0,240,255,0.06)" strokeWidth="0.5" />
          <ellipse cx="200" cy="200" rx="150" ry="60" stroke="rgba(0,240,255,0.06)" strokeWidth="0.5" />
          <ellipse cx="200" cy="200" rx="60" ry="150" stroke="rgba(0,240,255,0.06)" strokeWidth="0.5" />
          <path d="M80 140 Q150 100 200 140 Q250 180 320 140" stroke="rgba(0,240,255,0.05)" strokeWidth="0.5" fill="none" />
          <path d="M60 220 Q130 260 200 220 Q270 180 340 220" stroke="rgba(0,240,255,0.05)" strokeWidth="0.5" fill="none" />
          {[ [90,130],[120,110],[160,100],[210,105],[260,115],[300,135],[320,170],[310,210],[280,245],[230,265],[180,270],[130,260],[95,230],[85,190],[88,155],[140,140],[190,135],[240,145],[280,165],[295,195],[270,225],[220,240],[170,245],[125,235],[105,200],[115,165],[155,155],[200,150],[250,160],[285,180] ].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="1.5" fill="rgba(0,240,255,0.25)" />
          ))}
        </svg>
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,140,255,0.04) 0%, rgba(60,40,160,0.03) 50%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <p
            className={`text-[11px] text-kwar-electric font-medium tracking-[0.25em] uppercase mb-5 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Traction
          </p>
          <h2
            className={`font-body text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.75rem] font-normal text-white transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ letterSpacing: '-0.02em', lineHeight: '1.2' }}
          >
            Early validation from the public health ecosystem.
          </h2>
        </div>

        {/* Sublabel with decorative bullets */}
        <div
          className={`flex items-center justify-center gap-3 mb-10 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="w-1 h-1 rounded-full bg-kwar-electric/40" />
          <span className="text-[10px] text-white/30 tracking-[0.2em] uppercase">Early visibility and pilot ecosystem</span>
          <span className="w-1 h-1 rounded-full bg-kwar-electric/40" />
        </div>

        {/* Institutional credibility cards */}
        <div
          className={`grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* WHO EMRO */}
          <div className="group relative flex items-center gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-kwar-electric/15 transition-all duration-500">
            <div className="w-14 h-14 shrink-0 flex items-center justify-center">
              <img
                src="/images/who-emro.png"
                alt="WHO EMRO"
                className="w-full h-full object-contain opacity-70 group-hover:opacity-90 transition-opacity"
              />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">WHO EMRO Ecosystem</h3>
              <p className="text-kwar-electric text-xs mt-0.5">Pilot initiative</p>
            </div>
          </div>

          {/* Web Summit */}
          <div className="group relative flex items-center gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-kwar-electric/15 transition-all duration-500">
            <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/images/RIO26_Impact badge.png"
                alt="Web Summit Impact Startup"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Web Summit Impact Startup</h3>
              <p className="text-white/40 text-xs mt-1 leading-relaxed">Selected as an impact-driven startup within the ecosystem.</p>
            </div>
          </div>
        </div>

        {/* Traction cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {/* Card 1 — WHO EMRO Hero */}
          <div
            className={`group relative p-7 rounded-2xl border border-kwar-electric/15 bg-kwar-electric/[0.03] backdrop-blur-sm transition-all duration-700 hover:border-kwar-electric/25 hover:bg-kwar-electric/[0.04] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-kwar-electric/60 animate-pulse" />
            <div className="w-12 h-12 rounded-xl border border-kwar-electric/20 bg-kwar-electric/5 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-kwar-electric" strokeWidth={1.5} />
            </div>
            <h3 className="font-body text-xl text-white mb-0.5">WHO EMRO</h3>
            <p className="text-white/70 text-sm mb-4">Pilot Ecosystem</p>
            <div className="w-8 h-px bg-kwar-electric/30 mb-4" />
            <p className="text-sm text-white/40 leading-relaxed">
              Early pilot initiative connected to the WHO EMRO innovation and public health ecosystem.
            </p>
            <div className="mt-6">
              <span className="inline-block px-3 py-1.5 rounded-full border border-kwar-electric/20 text-[10px] text-kwar-electric/80 tracking-wider uppercase">
                Public Health Innovation
              </span>
            </div>
          </div>

          {/* Card 2 — 20+ */}
          <div
            className={`group relative p-7 rounded-2xl border border-white/[0.05] bg-white/[0.015] backdrop-blur-sm transition-all duration-700 hover:border-white/[0.10] hover:bg-white/[0.025] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="w-10 h-10 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center mb-6">
              <Users className="w-5 h-5 text-white/40" strokeWidth={1.5} />
            </div>
            <p className="font-body text-4xl text-white mb-2">20+</p>
            <p className="text-kwar-electric text-[10px] tracking-wider uppercase leading-relaxed mb-4">
              Qualified pilot users<br />in 1 month
            </p>
            <div className="w-8 h-px bg-white/10 mb-4" />
            <p className="text-sm text-white/40 leading-relaxed">
              Epidemiologists, surveillance professionals, hospital intelligence teams and public health researchers across Brazil.
            </p>
          </div>

          {/* Card 3 — 22M+ */}
          <div
            className={`group relative p-7 rounded-2xl border border-white/[0.05] bg-white/[0.015] backdrop-blur-sm transition-all duration-700 hover:border-white/[0.10] hover:bg-white/[0.025] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="w-10 h-10 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center mb-6">
              <Database className="w-5 h-5 text-white/40" strokeWidth={1.5} />
            </div>
            <p className="font-body text-4xl text-white mb-2">22M+</p>
            <p className="text-kwar-electric text-[10px] tracking-wider uppercase leading-relaxed mb-4">
              Epidemiological records<br />processed
            </p>
            <div className="w-8 h-px bg-white/10 mb-4" />
            <p className="text-sm text-white/40 leading-relaxed">
              Real epidemiological and surveillance datasets processed through the EpidBot platform.
            </p>
          </div>

          {/* Card 4 — Impact Startup */}
          <div
            className={`group relative p-7 rounded-2xl border border-white/[0.05] bg-white/[0.015] backdrop-blur-sm transition-all duration-700 hover:border-white/[0.10] hover:bg-white/[0.025] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden mb-6">
              <img
                src="/images/RIO26_Impact badge.png"
                alt="Web Summit Impact"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <h3 className="font-body text-xl text-white mb-4">Impact Startup</h3>
            <div className="w-8 h-px bg-white/10 mb-4" />
            <p className="text-sm text-white/40 leading-relaxed">
              Selected as an impact-driven startup within the Web Summit ecosystem.
            </p>
            <div className="mt-6">
              <span className="inline-block px-3 py-1.5 rounded-full border border-white/[0.08] text-[10px] text-white/50 tracking-wider uppercase">
                Web Summit 2026
              </span>
            </div>
          </div>
        </div>

        {/* Domain tags with icons */}
        <div
          className={`flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {domainTags.map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/[0.05] bg-white/[0.015] text-white/35 text-xs hover:border-white/[0.10] hover:text-white/55 transition-colors"
            >
              <tag.icon className="w-3.5 h-3.5" strokeWidth={1.5} />
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 4. MARKET OPPORTUNITY
// ============================================================================
function MarketSection() {
  const { ref, isVisible } = useScrollReveal();

  const tiers = [
    { label: 'TAM', desc: 'Global public health intelligence & disease surveillance', size: '$XXB' },
    { label: 'SAM', desc: 'AI-assisted epidemiological analysis platforms', size: '$XB' },
    { label: 'SOM', desc: 'Pilot expansion across Brazilian & LATAM health systems', size: '$XXM' },
  ];

  return (
    <section ref={ref} id="market" className="relative py-20 lg:py-28 bg-[#050a10] border-y border-white/[0.04] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p
              className={`text-[11px] text-kwar-electric font-medium tracking-[0.2em] uppercase mb-5 transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Market Opportunity
            </p>
            <h2
              className={`font-body text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-white mb-5 transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ letterSpacing: '-0.02em', lineHeight: '1.4' }}
            >
              A growing market demanding smarter intelligence.
            </h2>
            <p
              className={`text-base text-white/50 leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Public health agencies, municipalities and global organizations are investing heavily in AI-driven surveillance and outbreak analytics. The need for contextual, conversational epidemiological intelligence has never been greater.
            </p>
          </div>

          <div className="space-y-4">
            {tiers.map((tier, index) => (
              <div
                key={tier.label}
                className={`group relative p-6 rounded-2xl border border-white/[0.05] bg-white/[0.015] backdrop-blur-sm transition-all duration-700 hover:border-white/[0.10] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150 + 200}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-kwar-electric/70 font-medium tracking-[0.15em] uppercase">{tier.label}</span>
                  <span className="text-xl font-body text-white">{tier.size}</span>
                </div>
                <p className="text-sm text-white/40">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 5. TEAM
// ============================================================================
function TeamSection() {
  const { ref, isVisible } = useScrollReveal();

  const founders = [
    {
      name: 'Founder Name',
      role: 'CEO & Epidemiologist',
      bio: 'Deep expertise in epidemiological modeling, public health surveillance and outbreak analytics.',
    },
    {
      name: 'Founder Name',
      role: 'CTO & AI Research',
      bio: 'Background in conversational AI, machine learning and health data infrastructure.',
    },
  ];

  const advisors = [
    'Epidemiological modeling',
    'Climate & health research',
    'Global health policy',
    'AI/ML systems',
  ];

  return (
    <section ref={ref} id="team" className="relative py-20 lg:py-28 bg-[#050a10] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,160,255,0.03) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p
            className={`text-[11px] text-kwar-electric font-medium tracking-[0.2em] uppercase mb-5 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Team
          </p>
          <h2
            className={`font-body text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-white transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ letterSpacing: '-0.02em', lineHeight: '1.4' }}
          >
            Built by scientists, engineers and public health researchers.
          </h2>
        </div>

        {/* Founders */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-12">
          {founders.map((f, index) => (
            <div
              key={f.name + index}
              className={`group p-6 rounded-2xl border border-white/[0.05] bg-white/[0.015] backdrop-blur-sm transition-all duration-700 hover:border-white/[0.10] hover:bg-white/[0.025] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-white/20" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold text-base mb-0.5">{f.name}</h3>
              <p className="text-kwar-electric/70 text-xs tracking-wide uppercase mb-3">{f.role}</p>
              <p className="text-white/40 text-sm leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>

        {/* Advisor tags */}
        <div
          className={`flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {advisors.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-white/[0.05] bg-white/[0.015] text-white/40 text-xs hover:border-kwar-electric/15 hover:text-white/60 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 6. COMPETITIVE EDGE
// ============================================================================
function CompetitiveEdgeSection() {
  const { ref, isVisible } = useScrollReveal();

  const edges = [
    {
      icon: MessageSquare,
      title: 'Conversational by design',
      description: 'Unlike static dashboards, EpidBot understands natural epidemiological questions and reasons through complex scenarios.',
    },
    {
      icon: Shield,
      title: 'Scientifically grounded',
      description: 'Every insight is built on established epidemiological methodologies — not black-box predictions.',
    },
    {
      icon: CloudSun,
      title: 'Climate-epidemiology fusion',
      description: 'Native integration of climate and environmental data into disease risk models, not an afterthought.',
    },
    {
      icon: Database,
      title: 'SINAN-native architecture',
      description: 'Deep integration with Brazilian health surveillance systems and proven data pipelines from InfoDengue.',
    },
  ];

  return (
    <section ref={ref} id="edge" className="relative py-20 lg:py-28 bg-[#050a10] border-y border-white/[0.04] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p
            className={`text-[11px] text-kwar-electric font-medium tracking-[0.2em] uppercase mb-5 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Competitive Edge
          </p>
          <h2
            className={`font-body text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-white transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ letterSpacing: '-0.02em', lineHeight: '1.4' }}
          >
            Why EpidBot wins.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {edges.map((item, index) => (
            <div
              key={item.title}
              className={`group p-6 lg:p-8 rounded-2xl border border-white/[0.05] bg-white/[0.015] backdrop-blur-sm transition-all duration-700 hover:border-white/[0.10] hover:bg-white/[0.025] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 120}ms` }}
            >
              <div className="w-10 h-10 rounded-lg border border-kwar-electric/20 bg-kwar-electric/5 flex items-center justify-center mb-5">
                <item.icon className="w-5 h-5 text-kwar-electric" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 7. ROADMAP
// ============================================================================
function RoadmapSection() {
  const { ref, isVisible } = useScrollReveal();

  const milestones = [
    {
      phase: 'Now',
      title: 'Pilot validation',
      items: ['Active pilots with Brazilian municipalities', 'InfoDengue & SINAN integration', 'Core conversational analysis skills'],
      active: true,
    },
    {
      phase: 'Q3 2026',
      title: 'Platform expansion',
      items: ['Multi-disease support', 'Advanced climate-epidemiology models', 'API access for health systems'],
      active: false,
    },
    {
      phase: '2027',
      title: 'Regional scale',
      items: ['LATAM health system partnerships', 'Real-time surveillance modules', 'Institutional research collaborations'],
      active: false,
    },
  ];

  return (
    <section ref={ref} id="roadmap" className="relative py-20 lg:py-28 bg-[#050a10] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,160,255,0.03) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p
            className={`text-[11px] text-kwar-electric font-medium tracking-[0.2em] uppercase mb-5 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Roadmap
          </p>
          <h2
            className={`font-body text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-white transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ letterSpacing: '-0.02em', lineHeight: '1.4' }}
          >
            From pilots to global scale.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {milestones.map((m, index) => (
            <div
              key={m.phase}
              className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-700 ${
                m.active
                  ? 'border-kwar-electric/20 bg-kwar-electric/[0.03]'
                  : 'border-white/[0.05] bg-white/[0.015] hover:border-white/[0.10]'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {m.active && (
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-kwar-electric/10 border border-kwar-electric/20">
                  <span className="text-[10px] text-kwar-electric font-medium tracking-wider uppercase">Active</span>
                </div>
              )}
              <div className="mb-4">
                <span className="text-[10px] text-white/30 tracking-wider uppercase">{m.phase}</span>
                <h3 className="text-white font-semibold text-lg mt-1">{m.title}</h3>
              </div>
              <ul className="space-y-2">
                {m.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/40 leading-relaxed">
                    <div className={`w-1 h-1 rounded-full mt-2 shrink-0 ${m.active ? 'bg-kwar-electric' : 'bg-white/20'}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 8. PRODUCT DEMO
// ============================================================================
function ProductSection() {
  const { ref, isVisible } = useScrollReveal();

  const highlights = [
    {
      icon: MessageSquare,
      title: 'Conversational analysis',
      description: 'Ask complex epidemiological questions naturally.',
    },
    {
      icon: Brain,
      title: 'Scientific reasoning',
      description: 'AI-assisted interpretation grounded in epidemiological methodologies.',
    },
    {
      icon: BarChart3,
      title: 'Strategic insights',
      description: 'Generate contextual intelligence for public health decision-making.',
    },
  ];

  return (
    <section ref={ref} id="product" className="relative py-24 lg:py-32 bg-[#050a10] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div
        className="absolute top-1/2 left-1/4 w-[600px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,120,255,0.04) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Demo placeholder */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-kwar-electric/5 rounded-3xl blur-3xl -z-10" />

            <div className="relative aspect-[4/3] rounded-2xl border border-white/[0.06] bg-[#070d14] overflow-hidden shadow-2xl shadow-black/50">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.04] bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <span className="text-[10px] text-white/30 ml-2 tracking-wide">EpidBot Intelligence Platform</span>
              </div>

              {/* Screen content */}
              <div className="relative h-full min-h-[280px] flex items-center justify-center">
                <div className="absolute inset-0 grid-bg opacity-5" />

                {/* Subtle data lines */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kwar-electric/20 to-transparent" />
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kwar-electric/10 to-transparent" />
                  <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kwar-electric/20 to-transparent" />
                </div>

                {/* Central pulse */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-kwar-electric/5 animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-0 rounded-full bg-kwar-electric/10 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.6s' }} />
                  <div className="relative w-16 h-16 rounded-full border border-kwar-electric/20 bg-kwar-electric/5 flex items-center justify-center cursor-pointer hover:bg-kwar-electric/10 transition-colors">
                    <Play className="w-6 h-6 text-kwar-electric ml-0.5" fill="currentColor" />
                  </div>
                </div>

                {/* Corner brackets */}
                <div className="absolute top-4 left-4 w-6 h-px bg-kwar-electric/20" />
                <div className="absolute top-4 left-4 w-px h-6 bg-kwar-electric/20" />
                <div className="absolute bottom-4 right-4 w-6 h-px bg-kwar-electric/20" />
                <div className="absolute bottom-4 right-4 w-px h-6 bg-kwar-electric/20" />

                {/* Status indicators */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-kwar-electric/60 animate-pulse" />
                  <span className="text-[9px] text-white/30 tracking-wider uppercase">Live Analysis</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="order-1 lg:order-2">
            <p
              className={`text-[11px] text-kwar-electric font-medium tracking-[0.2em] uppercase mb-5 transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Product Demo
            </p>

            <h2
              className={`font-body text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-white mb-5 transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ letterSpacing: '-0.02em', lineHeight: '1.4' }}
            >
              Built for real-world outbreak intelligence.
            </h2>

            <p
              className={`text-base text-white/50 leading-relaxed mb-10 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              EpidBot helps public health teams analyze epidemiological patterns, climate conditions and outbreak risks through conversational intelligence.
            </p>

            {/* Highlights */}
            <div className="space-y-5">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 120 + 300}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg border border-kwar-electric/20 bg-kwar-electric/5 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-kwar-electric" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    <p className="text-white/40 text-sm mt-0.5 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 4. WHY NOW
// ============================================================================
function WhyNowSection() {
  const { ref, isVisible } = useScrollReveal();

  const reasons = [
    {
      icon: CloudSun,
      title: 'Climate change',
      description: 'Disease dynamics are becoming more unpredictable worldwide.',
    },
    {
      icon: Database,
      title: 'Data complexity',
      description: 'Public health systems struggle with fragmented information and growing analytical complexity.',
    },
    {
      icon: Brain,
      title: 'AI maturity',
      description: 'Conversational intelligence is transforming analytical workflows and decision-making.',
    },
  ];

  return (
    <section ref={ref} id="why-now" className="relative py-24 lg:py-32 bg-[#050a10] border-y border-white/[0.04] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,160,255,0.03) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p
            className={`text-[11px] text-kwar-electric font-medium tracking-[0.2em] uppercase mb-5 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Why Now
          </p>
          <h2
            className={`font-body text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-white transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ letterSpacing: '-0.02em', lineHeight: '1.4' }}
          >
            Why epidemic intelligence needs AI now.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reasons.map((item, index) => (
            <div
              key={item.title}
              className={`group relative p-8 rounded-2xl border border-white/[0.05] bg-white/[0.015] backdrop-blur-sm transition-all duration-700 hover:border-white/[0.10] hover:bg-white/[0.025] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-xl border border-kwar-electric/20 bg-kwar-electric/5 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-kwar-electric" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 5. CREDIBILITY
// ============================================================================
function CredibilitySection() {
  const { ref, isVisible } = useScrollReveal();

  const expertise = [
    'Epidemiological expertise',
    'Mathematical modeling',
    'Climate intelligence',
    'Public health research',
    'Global collaboration',
    'AI-assisted analysis',
    'Surveillance systems',
    'Statistical forecasting',
  ];

  return (
    <section ref={ref} id="credibility" className="relative py-24 lg:py-32 bg-[#050a10] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p
            className={`text-[11px] text-kwar-electric font-medium tracking-[0.2em] uppercase mb-5 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Credibility
          </p>
          <h2
            className={`font-body text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-white transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ letterSpacing: '-0.02em', lineHeight: '1.4' }}
          >
            Built on science, modeling and public health research.
          </h2>
        </div>

        {/* Logo / affiliation placeholders */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {[
            'Research partner',
            'Institution',
            'Collaboration',
            'Publication',
            'Data partner',
            'Health authority',
          ].map((label, i) => (
            <div
              key={label + i}
              className="group aspect-[3/2] rounded-xl border border-white/[0.05] bg-white/[0.015] flex flex-col items-center justify-center gap-2 hover:border-white/[0.10] hover:bg-white/[0.025] transition-all"
            >
              <Globe className="w-6 h-6 text-white/10 group-hover:text-kwar-electric/20 transition-colors" strokeWidth={1} />
              <span className="text-[9px] text-white/20 tracking-wider uppercase">{label}</span>
            </div>
          ))}
        </div>

        {/* Expertise tags */}
        <div
          className={`flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {expertise.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-white/[0.05] bg-white/[0.015] text-white/40 text-xs hover:border-kwar-electric/15 hover:text-white/60 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 6. VISION
// ============================================================================
function VisionSection() {
  const { ref, isVisible } = useScrollReveal();

  const floatingCards = [
    { label: 'Predictive intelligence', position: 'top-6 left-6' },
    { label: 'Contextual analysis', position: 'top-6 right-6' },
    { label: 'Global surveillance support', position: 'bottom-6 left-6' },
    { label: 'Strategic decision support', position: 'bottom-6 right-6' },
  ];

  return (
    <section ref={ref} id="vision" className="relative py-24 lg:py-32 bg-[#050a10] border-y border-white/[0.04] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,100,255,0.04) 0%, rgba(60,40,180,0.03) 40%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p
            className={`text-[11px] text-kwar-electric font-medium tracking-[0.2em] uppercase mb-5 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Vision
          </p>
          <h2
            className={`font-body text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-white mb-5 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ letterSpacing: '-0.02em', lineHeight: '1.4' }}
          >
            The future of public health intelligence is AI-native.
          </h2>
          <p
            className={`text-base text-white/50 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            A world where epidemiological intelligence becomes more contextual, connected and accessible through AI-assisted analysis.
          </p>
        </div>

        {/* Cinematic map placeholder */}
        <div
          className={`relative mb-8 lg:mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative aspect-[21/9] lg:aspect-[2.5/1] rounded-2xl border border-white/[0.05] bg-[#060b12] overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-10" />

            {/* Atmospheric gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 30% 50%, rgba(0,160,255,0.04) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(100,60,255,0.03) 0%, transparent 50%)',
              }}
            />

            {/* Global node dots */}
            <div className="absolute inset-0">
              {[
                [12,25],[28,35],[35,30],[42,45],[48,55],[55,40],[62,50],[68,35],[75,45],[82,30],
                [88,55],[15,60],[22,65],[38,70],[52,75],[58,65],[72,60],[78,75],[85,65],[45,60],
                [32,40],[60,55],[25,50],[70,40]
              ].map(([x, y], i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-kwar-electric/25"
                  style={{ left: `${x}%`, top: `${y}%` }}
                />
              ))}
            </div>

            {/* Network lines */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <line x1="20%" y1="30%" x2="48%" y2="45%" stroke="rgba(0,240,255,0.05)" strokeWidth="0.5" />
              <line x1="48%" y1="45%" x2="75%" y2="35%" stroke="rgba(0,240,255,0.05)" strokeWidth="0.5" />
              <line x1="35%" y1="65%" x2="55%" y2="55%" stroke="rgba(0,240,255,0.05)" strokeWidth="0.5" />
              <line x1="55%" y1="55%" x2="78%" y2="60%" stroke="rgba(0,240,255,0.05)" strokeWidth="0.5" />
              <line x1="28%" y1="50%" x2="42%" y2="40%" stroke="rgba(0,240,255,0.04)" strokeWidth="0.5" />
              <line x1="62%" y1="40%" x2="72%" y2="48%" stroke="rgba(0,240,255,0.04)" strokeWidth="0.5" />
              <line x1="15%" y1="60%" x2="35%" y2="65%" stroke="rgba(0,240,255,0.03)" strokeWidth="0.5" />
            </svg>

            {/* Floating cards — desktop only */}
            <div className="hidden lg:block">
              {floatingCards.map((card) => (
                <div
                  key={card.label}
                  className={`absolute ${card.position} px-4 py-2.5 rounded-lg border border-white/[0.06] bg-[#0a1120]/80 backdrop-blur-md`}
                >
                  <span className="text-[11px] text-white/70 whitespace-nowrap">{card.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile floating cards */}
        <div className="lg:hidden grid grid-cols-2 gap-3">
          {floatingCards.map((card) => (
            <div
              key={card.label}
              className="px-4 py-3 rounded-lg border border-white/[0.06] bg-white/[0.015] text-center"
            >
              <span className="text-xs text-white/60">{card.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 12. FINAL CTA
// ============================================================================
function FinalCTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="final-cta" className="relative py-24 lg:py-32 bg-[#050a10] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,140,255,0.05) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <img
            src="/images/RIO26_Impact badge.png"
            alt="Web Summit Rio 2026 Impact Startup"
            className="h-12 w-auto mx-auto mb-8 object-contain opacity-70"
          />

          <h2
            className={`font-body text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-5 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ letterSpacing: '-0.02em', lineHeight: '1.4' }}
          >
            Transform epidemiological data into strategic action.
          </h2>

          <p
            className={`text-base text-white/50 max-w-xl mx-auto mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Raising $XXXK seed to expand pilot programs, grow the team and scale EpidBot across LATAM health systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => {
                const el = document.querySelector('#product');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              className="bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep font-bold px-8 h-12 text-sm group"
            >
              See EpidBot in Action
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              variant="outline"
              className="border-white/10 text-white hover:bg-white/[0.04] px-8 h-12 text-sm"
            >
              Request Demo
            </Button>
          </div>

          <p className="text-white/30 text-xs mt-10">
            Meet us at the Alpha & Impact Startup area — Web Summit Rio 2026
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CONTACT
// ============================================================================
function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setSubmitted(true);
          form.reset();
        }
      })
      .catch(() => {
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <section ref={ref} id="contact" className="relative py-24 lg:py-32 bg-[#050a10] border-y border-white/[0.04] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,140,255,0.04) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p
            className={`text-[11px] text-kwar-electric font-medium tracking-[0.2em] uppercase mb-5 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Contact
          </p>
          <h2
            className={`font-body text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-white mb-4 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ letterSpacing: '-0.02em', lineHeight: '1.4' }}
          >
            Let's talk.
          </h2>
          <p
            className={`text-base text-white/50 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Schedule a conversation with our team to explore how EpidBot can support your public health intelligence needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="p-6 lg:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 rounded-full border border-kwar-electric/20 bg-kwar-electric/5 flex items-center justify-center mx-auto mb-5">
                    <MessageSquare className="w-5 h-5 text-kwar-electric" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Message sent</h3>
                  <p className="text-white/40 text-sm">Thank you. Our team will reach out to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="access_key" value="8c153a06-10ae-420a-9312-54f3d66cea08" />
                  <input type="checkbox" name="botcheck" className="hidden" />
                  <input type="hidden" name="from_name" value="KWAR-AI Website" />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] text-white/40 tracking-wider uppercase mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-kwar-electric/30 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-white/40 tracking-wider uppercase mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-kwar-electric/30 transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] text-white/40 tracking-wider uppercase mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-kwar-electric/30 transition-colors"
                        placeholder="+55 ..."
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-white/40 tracking-wider uppercase mb-2">Company / Institution</label>
                      <input
                        type="text"
                        name="company"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-kwar-electric/30 transition-colors"
                        placeholder="Organization"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-white/40 tracking-wider uppercase mb-2">Availability</label>
                    <textarea
                      name="availability"
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-kwar-electric/30 transition-colors resize-none"
                      placeholder="When are you available for a call?"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-white/40 tracking-wider uppercase mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-kwar-electric/30 transition-colors resize-none"
                      placeholder="Tell us more about your needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep font-bold h-12 text-sm group"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact info */}
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <h3 className="text-white font-semibold text-sm mb-5">Get in touch</h3>
              <div className="space-y-5">
                <a
                  href="https://www.linkedin.com/company/kwar-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:border-kwar-electric/20 transition-colors">
                    <Globe className="w-4 h-4 text-white/40 group-hover:text-kwar-electric transition-colors" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs tracking-wider uppercase mb-0.5">LinkedIn</p>
                    <p className="text-white text-sm group-hover:text-kwar-electric transition-colors">linkedin.com/company/kwar-ai</p>
                  </div>
                </a>

                <a href="mailto:contato@kwar-ai.com.br" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:border-kwar-electric/20 transition-colors">
                    <MessageSquare className="w-4 h-4 text-white/40 group-hover:text-kwar-electric transition-colors" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs tracking-wider uppercase mb-0.5">Email</p>
                    <p className="text-white text-sm group-hover:text-kwar-electric transition-colors">contato@kwar-ai.com.br</p>
                  </div>
                </a>

                <a href="https://wa.me/5531994981122" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:border-kwar-electric/20 transition-colors">
                    <Users className="w-4 h-4 text-white/40 group-hover:text-kwar-electric transition-colors" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs tracking-wider uppercase mb-0.5">Phone</p>
                    <p className="text-white text-sm group-hover:text-kwar-electric transition-colors">+55 31 99498-1122</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-white/[0.05] bg-white/[0.015]">
              <p className="text-white/40 text-sm leading-relaxed">
                Prefer a direct conversation? Reach out via email or LinkedIn and we'll respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FOOTER
// ============================================================================
function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-10 border-t border-white/[0.04] bg-kwar-deep">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/images/logo-oficial.png" alt="Kwar-AI" className="w-6 h-6 object-contain opacity-50" />
            <span className="font-display font-bold text-sm text-white/60">
              KWAR<span className="text-kwar-electric/60">-</span>AI
            </span>
            <span className="text-kwar-gray/50 text-xs">© {currentYear}</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://kwar-ai.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kwar-gray/60 hover:text-kwar-electric transition-colors text-xs"
            >
              kwar-ai.com.br
            </a>
            <a
              href="https://www.linkedin.com/company/kwar-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kwar-gray/60 hover:text-kwar-electric transition-colors text-xs"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function EpidbotWebSummit() {
  return (
    <div className="relative min-h-screen bg-kwar-deep">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TractionSection />
        <MarketSection />
        <TeamSection />
        <CompetitiveEdgeSection />
        <ProductSection />
        <WhyNowSection />
        <RoadmapSection />
        <CredibilitySection />
        <VisionSection />
        <FinalCTASection />
        <ContactSection />
      </main>
      <LandingFooter />
    </div>
  );
}
