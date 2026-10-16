import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SkipToContent from '../components/SkipToContent';
import {
  Check,
  ChevronDown,
  Zap,
  Users,
  LayoutDashboard,
  Map,
  Building2,
  Headphones,
  Shield,
} from 'lucide-react';

// ============================================================
// 1. NAVBAR
// ============================================================
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0a0e1a]/80 backdrop-blur-xl border-b border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold text-lg text-white">
            Epid<span className="text-cyan-400">Bot</span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="hidden sm:inline-flex text-sm text-white/50 hover:text-white transition-colors"
          >
            Planos Institucionais
          </Link>
          <a
            href="https://epidbot.kwar-ai.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Users className="w-4 h-4" />
            Entrar
          </a>
          <a
            href="https://epidbot.kwar-ai.com.br/register"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-400 hover:bg-cyan-300 text-[#0a0e1a] text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            Começar gratuitamente
          </a>
        </div>
      </div>
    </nav>
  );
}

// ============================================================
// 2. HERO
// ============================================================
function Hero() {
  return (
    <section className="relative pt-12 pb-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-medium text-cyan-400 tracking-wide">
                INTELIGÊNCIA EPIDEMIOLÓGICA PARA DECISÕES REAIS
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Escolha o plano ideal
              <br />
              para{' '}
              <span className="text-cyan-400">seu uso</span>
            </h1>

            <p className="text-white/50 text-base mb-8 max-w-md">
              Comece grátis e evolua conforme o seu uso. Dados oficiais do DATASUS (SINAN, SIM,
              SINASC, SIH/SIA, CNES) e da OMS em todos os planos; fontes internacionais a partir do
              Pro.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Dados de fontes oficiais, sem intermediários',
                'Script Python reproduzível ao final da análise',
                'Referências validadas em PubMed, ORCID e Google Scholar',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/60">
                  <div className="w-5 h-5 rounded-full bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-cyan-400" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://epidbot.kwar-ai.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-400 hover:bg-cyan-300 text-[#0a0e1a] text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                Começar gratuitamente
              </a>
              <span className="text-sm text-white/40">
                Já tem conta?{' '}
                <a
                  href="https://epidbot.kwar-ai.com.br/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Entrar
                </a>
              </span>
            </div>
          </div>

          {/* Right - Product mockup */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl border border-white/[0.06] bg-[#111827]/60 backdrop-blur-sm overflow-hidden p-6 shadow-2xl">
              {/* Header bar */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <div className="ml-auto text-xs text-white/30">EpidBot Analytics</div>
              </div>

              {/* Chart area */}
              <div className="space-y-4">
                {/* Title */}
                <div>
                  <div className="text-xs text-white/40 mb-1">Casos de dengue no Brasil</div>
                  <div className="text-xs text-white/30">Últimos 5 anos</div>
                </div>

                {/* Line chart mock */}
                <div className="h-32 relative">
                  <svg viewBox="0 0 400 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,80 Q50,70 100,60 T200,40 T300,50 T400,20"
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="2"
                    />
                    <path
                      d="M0,80 Q50,70 100,60 T200,40 T300,50 T400,20 L400,100 L0,100 Z"
                      fill="url(#lineGrad)"
                    />
                    {/* Data points */}
                    <circle cx="100" cy="60" r="4" fill="#22d3ee" />
                    <circle cx="200" cy="40" r="4" fill="#22d3ee" />
                    <circle cx="300" cy="50" r="4" fill="#22d3ee" />
                    <circle cx="400" cy="20" r="4" fill="#22d3ee" />
                  </svg>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-white/[0.03] p-3">
                    <div className="text-[10px] text-white/30 mb-1">Total de casos</div>
                    <div className="text-lg font-bold text-white">1.248.351</div>
                    <div className="text-[10px] text-green-400">+18,6% vs ano anterior</div>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] p-3">
                    <div className="text-[10px] text-white/30 mb-1">Municípios afetados</div>
                    <div className="text-lg font-bold text-white">3.456</div>
                    <div className="text-[10px] text-green-400">+22,4% vs ano anterior</div>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] p-3">
                    <div className="text-[10px] text-white/30 mb-1">Distribuição por região</div>
                    <div className="flex items-center justify-center h-8">
                      <div className="w-8 h-8 rounded-full border-4 border-cyan-400/60 border-r-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 3. PRICING CARDS
// ============================================================
function PricingCards() {
  const plans = [
    {
      id: 'free',
      name: 'Free',
      badge: null,
      description: 'Para começar e para uso ocasional',
      price: '0',
      features: [
        'Cota diária de 50 mil tokens (~1 consulta)',
        'DATASUS (SINAN, SIM, SINASC, SIH/SIA, CNES) e OMS',
        'Análises completas com gráficos, mapas e script em Python',
        '3 relatórios por mês (com marca d’água)',
        'IDE no navegador e grafo de conhecimento',
        'Projetos e comunidade Blipper',
      ],
      cta: 'Começar grátis',
      href: 'https://epidbot.kwar-ai.com.br/register',
      highlighted: false,
      borderColor: 'border-white/[0.06]',
      btnClass: 'border border-white/10 text-white hover:bg-white/5',
    },
    {
      id: 'pro',
      name: 'Pro',
      badge: 'MAIS POPULAR',
      description: 'Para profissionais e pesquisadores',
      price: '97',
      features: [
        'Cota diária de 500 mil tokens (~10 consultas)',
        'Fontes internacionais: ECDC, PAHO, World Bank, Eurostat, ANVISA',
        'Relatórios ilimitados, sem marca d’água',
        '2 relatórios agendados',
        '10 datasets privados (até 5 GB)',
        'Ferramentas avançadas de análise, Zotero e integrações Git',
      ],
      cta: 'Assinar Pro',
      href: 'https://epidbot.kwar-ai.com.br/register',
      highlighted: true,
      borderColor: 'border-violet-500/30',
      btnClass: 'bg-violet-500 hover:bg-violet-400 text-white shadow-lg shadow-violet-500/25',
    },
    {
      id: 'proplus',
      name: 'Max',
      badge: 'USO INTENSIVO',
      description: 'Para uso intensivo e publicação científica',
      price: '197',
      features: [
        'Cota diária de 1,5 milhão de tokens (~30 consultas)',
        'Tudo do Pro, com limites ampliados',
        '10 relatórios agendados',
        '50 datasets privados (até 25 GB)',
        'Exportação LaTeX, Overleaf e DOI no Zenodo',
        'Agente de manuscrito científico, API e agentes externos',
      ],
      cta: 'Assinar Max',
      href: 'https://epidbot.kwar-ai.com.br/register',
      highlighted: false,
      borderColor: 'border-amber-500/20',
      btnClass: 'bg-amber-500 hover:bg-amber-400 text-[#0a0e1a] shadow-lg shadow-amber-500/20',
    },
    {
      id: 'team',
      name: 'Team',
      badge: 'EQUIPES',
      description: 'Para equipes e grupos de pesquisa',
      price: '1.425',
      features: [
        'Até 10 usuários incluídos',
        'Cota de uso ilimitada (relatórios, datasets e agendamentos)',
        'Tudo do Max: LaTeX/Overleaf, DOI no Zenodo, API e agentes externos',
        'Workspace compartilhado e projetos colaborativos',
        'Dashboards internos e relatórios compartilhados',
        'Revisão por pares e sala de incidentes (outbreak war-room)',
        'Suporte prioritário',
      ],
      cta: 'Falar com vendas',
      href: '#institucional',
      highlighted: false,
      borderColor: 'border-cyan-400/20',
      btnClass: 'border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10',
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
      {plans.map((plan) => {
        const isPro = plan.id === 'pro';
        const isProPlus = plan.id === 'proplus';
        const isFree = plan.id === 'free';
        const isTeam = plan.id === 'team';

        return (
          <div
            key={plan.id}
            className={`relative rounded-2xl border p-7 flex flex-col ${
              isPro
                ? 'bg-gradient-to-b from-violet-500/5 to-transparent border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,0.08)]'
                : isProPlus
                ? 'bg-gradient-to-b from-amber-500/5 to-transparent border-amber-500/20'
                : isTeam
                ? 'bg-gradient-to-b from-cyan-400/5 to-transparent border-cyan-400/20'
                : 'bg-white/[0.02] border-white/[0.06]'
            }`}
          >
            {/* Badge */}
            {plan.badge && (
              <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${
                  isPro
                    ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/30'
                    : isProPlus
                    ? 'bg-amber-500 text-[#0a0e1a] shadow-lg shadow-amber-500/20'
                    : 'bg-cyan-400 text-[#0a0e1a] shadow-lg shadow-cyan-400/20'
                }`}
              >
                {plan.badge}
              </div>
            )}

            {/* Header */}
            <div className="mb-5">
              <h3 className="font-display text-xl font-bold text-white mb-1">
                {plan.name}
              </h3>
              <p className="text-white/40 text-sm">{plan.description}</p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">R$ {plan.price}</span>
                {!isFree && <span className="text-white/40 text-sm">/mês</span>}
              </div>
              <div className="text-sm text-white/40 mt-1">
                {isFree ? 'Grátis para sempre' : 'Cobrança mensal · PIX ou cartão'}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.06] mb-5" />

            {/* Features */}
            <ul className="space-y-3 mb-7 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check
                    className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      isPro ? 'text-violet-400' : isProPlus ? 'text-amber-400' : 'text-cyan-400'
                    }`}
                  />
                  <span className="text-sm text-white/70">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={plan.href}
              target={plan.href.startsWith('#') ? undefined : '_blank'}
              rel={plan.href.startsWith('#') ? undefined : 'noopener noreferrer'}
              className={`block text-center w-full py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${plan.btnClass}`}
            >
              {plan.cta}
            </a>
          </div>
        );
      })}
    </div>
  );
}

// ============================================================
// 5. COMPARISON TABLE
// ============================================================
function ComparisonTable() {
  const rows = [
    {
      feature: 'Cota de IA por dia',
      free: '50 mil tokens (~1 consulta)',
      pro: '500 mil (~10 consultas)',
      proplus: '1,5 milhão (~30 consultas)',
      team: 'Ilimitada',
    },
    { feature: 'Usuários incluídos', free: '1', pro: '1', proplus: '1', team: 'Até 10' },
    { feature: 'DATASUS (SINAN, SIM, SINASC, SIH/SIA, CNES) + OMS', free: true, pro: true, proplus: true, team: true },
    { feature: 'Fontes internacionais (ECDC, PAHO, World Bank, Eurostat, ANVISA)', free: false, pro: true, proplus: true, team: true },
    { feature: 'Relatórios por mês', free: '3 (com marca d’água)', pro: 'Ilimitados', proplus: 'Ilimitados', team: 'Ilimitados' },
    { feature: 'Relatórios agendados', free: '—', pro: '2', proplus: '10', team: 'Ilimitados' },
    { feature: 'Datasets privados', free: '1 (100 MB)', pro: '10 (5 GB)', proplus: '50 (25 GB)', team: 'Ilimitados' },
    { feature: 'Ferramentas avançadas de análise', free: false, pro: true, proplus: true, team: true },
    { feature: 'Zotero e integrações Git', free: false, pro: true, proplus: true, team: true },
    { feature: 'Exportação LaTeX / Overleaf / DOI no Zenodo', free: false, pro: false, proplus: true, team: true },
    { feature: 'Agente de manuscrito científico, API e agentes externos', free: false, pro: false, proplus: true, team: true },
    { feature: 'Projetos, Blipper e grafo de conhecimento', free: true, pro: true, proplus: true, team: true },
    { feature: 'Colaboração (workspace, revisão por pares, sala de incidentes)', free: false, pro: false, proplus: false, team: true },
    { feature: 'Cotas diárias acumulam entre dias?', free: 'Não', pro: 'Não', proplus: 'Não', team: 'Não' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h3 className="font-display text-xl font-bold text-white mb-8">
          Compare os planos
        </h3>

        <div className="overflow-x-auto">
        <div className="rounded-xl border border-white/[0.06] overflow-hidden min-w-[940px]">
          {/* Header */}
          <div className="grid grid-cols-5 text-sm">
            <div className="p-4 text-white/40 font-medium bg-white/[0.02]">Recurso</div>
            <div className="p-4 text-center text-white/40 font-medium bg-white/[0.02]">Free</div>
            <div className="p-4 text-center text-violet-400 font-medium bg-violet-500/5">Pro</div>
            <div className="p-4 text-center text-amber-400 font-medium bg-amber-500/5">Max</div>
            <div className="p-4 text-center text-cyan-400 font-medium bg-cyan-400/5">Team</div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-5 text-sm ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}
            >
              <div className="p-4 text-white/60">{row.feature}</div>
              <div className="p-4 flex items-center justify-center">
                {typeof row.free === 'boolean' ? (
                  row.free ? (
                    <Check className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <span className="text-white/20">—</span>
                  )
                ) : (
                  <span className="text-white/50">{row.free}</span>
                )}
              </div>
              <div className="p-4 flex items-center justify-center bg-violet-500/[0.02]">
                {typeof row.pro === 'boolean' ? (
                  row.pro ? (
                    <Check className="w-4 h-4 text-violet-400" />
                  ) : (
                    <span className="text-white/20">—</span>
                  )
                ) : (
                  <span className="text-white/50">{row.pro}</span>
                )}
              </div>
              <div className="p-4 flex items-center justify-center bg-amber-500/[0.02]">
                {typeof row.proplus === 'boolean' ? (
                  row.proplus ? (
                    <Check className="w-4 h-4 text-amber-400" />
                  ) : (
                    <span className="text-white/20">—</span>
                  )
                ) : (
                  <span className="text-white/50">{row.proplus}</span>
                )}
              </div>
              <div className="p-4 flex items-center justify-center bg-cyan-400/[0.02]">
                {typeof row.team === 'boolean' ? (
                  row.team ? (
                    <Check className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <span className="text-white/20">—</span>
                  )
                ) : (
                  <span className="text-white/50">{row.team}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 6. INSTITUTIONAL CARD
// ============================================================
function InstitutionalCard() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const features = [
    { icon: Users, label: 'Multiusuário' },
    { icon: LayoutDashboard, label: 'Dashboards compartilhados' },
    { icon: Map, label: 'Mapas interativos' },
    { icon: Building2, label: 'Workspace institucional' },
    { icon: Headphones, label: 'Suporte dedicado' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    if (!form.checkValidity()) {
      form.reportValidity();
      const firstInvalid = form.querySelector(':invalid') as HTMLElement;
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    setFormStatus('success');
    form.reset();
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <section id="institucional" className="py-16 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h3 className="font-display text-xl font-bold text-white">
              {t('epidbotIndividual.institutional.title', { defaultValue: 'Para equipes e organizações' })}
            </h3>
            <div className="flex gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                TEAMS
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20">
                INSTITUCIONAL
              </span>
            </div>
          </div>

          <p className="text-white/40 text-sm mb-6 max-w-lg">
            {t('epidbotIndividual.institutional.description', { defaultValue: 'Recursos avançados para colaboração, dashboards institucionais e operações em escala.' })}
          </p>

          <p className="text-white/50 text-sm mb-6 max-w-lg">
            Equipes de até 10 pessoas podem assinar o plano <span className="text-cyan-400 font-medium">Team (R$ 1.425/mês)</span> direto nesta página. Acima disso, ou para secretarias e ministérios, o atendimento é sob consulta pelo formulário abaixo.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-white/40" />
                  </div>
                  <span className="text-xs text-white/40">{f.label}</span>
                </div>
              );
            })}
          </div>

          <p className="text-white/30 text-xs mb-4">
            {t('epidbotIndividual.institutional.formLead', { defaultValue: 'Preencha o formulário e nossa equipe entrará em contato.' })}
          </p>

          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="grid sm:grid-cols-2 gap-3 mb-3">
              <label htmlFor="indiv-name" className="sr-only">
                {t('epidbotIndividual.institutional.nameLabel', { defaultValue: 'Nome completo' })}
              </label>
              <input
                id="indiv-name"
                type="text"
                name="name"
                autoComplete="name"
                required
                placeholder={t('epidbotIndividual.institutional.namePlaceholder', { defaultValue: 'Nome completo' })}
                className="px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30"
              />
              <label htmlFor="indiv-org" className="sr-only">
                {t('epidbotIndividual.institutional.orgLabel', { defaultValue: 'Instituição' })}
              </label>
              <input
                id="indiv-org"
                type="text"
                name="organization"
                autoComplete="organization"
                required
                placeholder={t('epidbotIndividual.institutional.orgPlaceholder', { defaultValue: 'Instituição' })}
                className="px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30"
              />
              <label htmlFor="indiv-email" className="sr-only">
                {t('epidbotIndividual.institutional.emailLabel', { defaultValue: 'E-mail corporativo' })}
              </label>
              <input
                id="indiv-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder={t('epidbotIndividual.institutional.emailPlaceholder', { defaultValue: 'E-mail corporativo' })}
                className="px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30"
              />
              <label htmlFor="indiv-team" className="sr-only">
                {t('epidbotIndividual.institutional.teamLabel', { defaultValue: 'Tamanho da equipe' })}
              </label>
              <select
                id="indiv-team"
                name="teamSize"
                required
                className="px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm text-white/40 focus:outline-none focus:border-cyan-400/30"
              >
                <option value="">{t('epidbotIndividual.institutional.teamPlaceholder', { defaultValue: 'Tamanho da equipe' })}</option>
                <option value="1-5">1-5 pessoas</option>
                <option value="6-20">6-20 pessoas</option>
                <option value="21-50">21-50 pessoas</option>
                <option value="50+">50+ pessoas</option>
              </select>
            </div>

            <label htmlFor="indiv-message" className="sr-only">
              {t('epidbotIndividual.institutional.messageLabel', { defaultValue: 'Como podemos ajudar?' })}
            </label>
            <textarea
              id="indiv-message"
              name="message"
              placeholder={t('epidbotIndividual.institutional.messagePlaceholder', { defaultValue: 'Como podemos ajudar?' })}
              rows={3}
              className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 mb-3 resize-none"
            />

            {formStatus === 'success' && (
              <p className="text-emerald-400 text-sm mb-3 text-center" role="status" aria-live="polite">
                {t('epidbotIndividual.institutional.successMessage', { defaultValue: 'Recebemos sua mensagem! Entraremos em contato em breve.' })}
              </p>
            )}

            <button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-300 text-[#0a0e1a] text-sm font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              {t('epidbotIndividual.institutional.submitButton', { defaultValue: 'Tenho interesse' })}
            </button>

            <p className="text-center text-white/20 text-xs mt-3 flex items-center justify-center gap-1">
              <Shield className="w-3 h-3" />
              {t('epidbotIndividual.institutional.privacyNote', { defaultValue: 'Seus dados estão seguros. Não enviamos spam.' })}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 7. FAQ
// ============================================================
function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  const items = [
    {
      q: 'Uso R e Python no dia a dia. Isso serve para mim?',
      a: 'Serve. O EpidBot gera o script que você revisa, versiona e publica — ele acelera a parte repetitiva, não esconde a parte técnica. Se preferir, escreva seu próprio código no IDE integrado.',
    },
    {
      q: 'Preciso saber programar?',
      a: 'Não. Você pergunta em linguagem natural e recebe a análise pronta. Mas se souber programar, sai com o código Python documentado.',
    },
    {
      q: 'Quanto é 1 consulta?',
      a: 'Cerca de 50 mil tokens de processamento. Uma análise normal cabe em uma consulta; análises com várias etapas podem consumir mais. Se passar da cota do dia, os pacotes de consultas avulsas cobrem o restante.',
    },
    {
      q: 'O que muda do Free para o Pro?',
      a: 'O Pro amplia a cota diária de 50 mil para 500 mil tokens, abre as fontes internacionais (ECDC, PAHO, World Bank, Eurostat, ANVISA e outras), remove a marca d’água dos relatórios e libera agendamentos, mais datasets privados e ferramentas avançadas de análise.',
    },
    {
      q: 'O que o Max acrescenta?',
      a: 'Cota diária de 1,5 milhão de tokens, 10 relatórios agendados, 50 datasets privados, exportação LaTeX/Overleaf, DOI no Zenodo, agente de manuscrito científico e acesso por API e agentes externos.',
    },
    {
      q: 'Quais fontes de dados estão disponíveis?',
      a: 'DATASUS (SINAN, SIM, SINASC, SIH/SIA, CNES, PNI) e WHO GHO em todos os planos; ANVISA, ECDC, PAHO, World Bank, Eurostat, GBIF, Mosqlimate e outras a partir do Pro. Somente fontes abertas e não pagas.',
    },
    {
      q: 'Funciona fora do Brasil?',
      a: 'Sim, a partir do Pro: OMS, PAHO, ECDC, World Bank, Eurostat e outras fontes internacionais, com interface em português, inglês, espanhol, chinês e árabe.',
    },
    {
      q: 'Meus dados e perguntas ficam públicos?',
      a: 'Não. Os datasets que você envia ficam privados na sua conta e os projetos são isolados, com proveniência dos artefatos a partir do plano Pro.',
    },
    {
      q: 'O EpidBot substitui ferramentas estatísticas?',
      a: 'Não. Ele complementa o seu ferramental: o LLM que você já confia é o motor de raciocínio, e o EpidBot acrescenta dados oficiais, método e auditoria.',
    },
    {
      q: 'Minha secretaria quer comprar para a equipe.',
      a: 'O plano Team custa R$ 1.425/mês e cobre até 10 usuários, com cota de uso ilimitada, workspaces compartilhados, revisão por pares e sala de incidentes. Secretarias e ministérios são atendidos pelo plano institucional — fale com a equipe.',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h3 className="font-display text-2xl font-bold text-white text-center mb-10">
          Perguntas frequentes
        </h3>

        <div className="grid sm:grid-cols-2 gap-3">
          {items.map((item) => {
            const isOpen = open === item.q;
            return (
              <div
                key={item.q}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen ? 'border-cyan-400/20 bg-white/[0.03]' : 'border-white/[0.04] bg-white/[0.01]'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : item.q)}
                  className="w-full flex items-center justify-between gap-4 p-4 text-left"
                >
                  <span className="text-sm text-white/80">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-white/30 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-4 pb-4 text-sm text-white/40 leading-relaxed">
                    {item.a}
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

// ============================================================
// 9. FINAL CTA
// ============================================================
function FinalCTA() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-r from-cyan-400/5 to-violet-500/5 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-1">
                Comece gratuitamente.
              </h3>
              <p className="text-white/40 text-sm">
                Crie sua conta gratuita e faça a primeira pergunta — não é preciso convite.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="https://epidbot.kwar-ai.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 hover:bg-cyan-300 text-[#0a0e1a] text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              Criar conta gratuita
            </a>
            <span className="text-sm text-white/40">
              Já tem conta?{' '}
              <a
                href="https://epidbot.kwar-ai.com.br/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Entrar
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
            <Zap className="w-3 h-3 text-white" />
          </div>
          <span className="text-white/30 text-xs">EpidBot by Kwar-AI &copy; {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="/termos" className="text-white/30 hover:text-white/50 text-xs transition-colors">Termos</a>
          <a href="/privacy" className="text-white/30 hover:text-white/50 text-xs transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// PAGE
// ============================================================
export default function EpidbotIndividual() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white font-body">
      <Helmet>
        <html lang="pt-BR" />
        <title>Planos do EpidBot | Kwar-AI</title>
        <meta
          name="description"
          content="Planos do EpidBot: Free (R$ 0), Pro (R$ 97/mês), Max (R$ 197/mês) e Team (R$ 1.425/mês para até 10 usuários). Dados oficiais do DATASUS e da OMS em todos os planos; fontes internacionais a partir do Pro."
        />
        <link rel="canonical" href="https://kwar-ai.com.br/planos" />
        <meta property="og:title" content="Planos do EpidBot | Kwar-AI" />
        <meta
          property="og:description"
          content="Free, Pro, Max e Team: escolha o plano do EpidBot conforme o seu uso."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kwar-ai.com.br/planos" />
      </Helmet>
      <SkipToContent />
      <Navbar />
      <main id="main-content">
        <Hero />

      {/* Pricing Section */}
      <section id="pricing" className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <PricingCards />
          <p className="mt-8 max-w-3xl mx-auto text-center text-xs text-white/30 leading-relaxed">
            1 consulta ≈ 50 mil tokens de processamento. As cotas diárias são renovadas todo dia e
            não acumulam. Os pacotes de consultas avulsas (compra única, sem validade) cobrem o dia
            em que você passar da cota. O upgrade é imediato após a confirmação do pagamento. Plano
            expirado tem 7 dias de cortesia antes de voltar ao Free.
          </p>
        </div>
      </section>

      <ComparisonTable />
      <InstitutionalCard />
      <FAQ />
      <FinalCTA />
      <Footer />
      </main>
    </div>
  );
}
