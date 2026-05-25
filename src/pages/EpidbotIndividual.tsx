import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  ChevronDown,
  ArrowRight,
  X,
  Zap,
  Users,
  LayoutDashboard,
  Map,
  Building2,
  Headphones,
  BarChart3,
  LineChart,
  PieChart,
  Activity,
  Globe,
  Database,
  Shield,
  Mail,
  MessageSquare,
  Code2,
  Clock,
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
          <button className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            Entrar
          </button>
          <button className="bg-cyan-400 hover:bg-cyan-300 text-[#0a0e1a] text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            Começar gratuitamente
          </button>
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
              Todos os planos possuem acesso completo às capacidades analíticas do EpidBot.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Dados públicos integrados',
                'IA especializada em epidemiologia',
                'Análises temporais, espaciais e demográficas',
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
              <button className="bg-cyan-400 hover:bg-cyan-300 text-[#0a0e1a] text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                Começar gratuitamente
              </button>
              <span className="text-sm text-white/40">
                Já tem conta?{' '}
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                  Entrar
                </button>
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
// 3. PRICING TOGGLE
// ============================================================
function PricingToggle({ isAnnual, onChange }: { isAnnual: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex items-center bg-white/[0.03] rounded-full p-1 border border-white/[0.06]">
        <button
          onClick={() => onChange(false)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            !isAnnual
              ? 'bg-white/10 text-white'
              : 'text-white/40 hover:text-white/60'
          }`}
        >
          Mensal
        </button>
        <button
          onClick={() => onChange(true)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
            isAnnual
              ? 'bg-cyan-400 text-[#0a0e1a]'
              : 'text-white/40 hover:text-white/60'
          }`}
        >
          Anual
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
            isAnnual ? 'bg-[#0a0e1a]/20 text-[#0a0e1a]' : 'bg-green-500/20 text-green-400'
          }`}>
            -17%
          </span>
        </button>
      </div>
    </div>
  );
}

// ============================================================
// 4. PRICING CARDS
// ============================================================
function PricingCards({ isAnnual }: { isAnnual: boolean }) {
  const plans = [
    {
      id: 'free',
      name: 'Free',
      badge: null,
      description: 'Para estudantes e primeiro contato',
      monthlyPrice: '0',
      annualPrice: '0',
      features: [
        '10 consultas/dia',
        'Todos os bancos públicos',
        'Mosqlimate',
        'Análises completas',
        'Mapas estáticos',
        'Sessão temporária',
      ],
      cta: 'Começar grátis',
      highlighted: false,
      borderColor: 'border-white/[0.06]',
      btnClass: 'border border-white/10 text-white hover:bg-white/5',
    },
    {
      id: 'pro',
      name: 'Pro',
      badge: 'MAIS POPULAR',
      description: 'Para profissionais e pesquisadores',
      monthlyNormal: '97',
      monthlyPromo: '49',
      annualPrice: '970',
      annualEquiv: '80',
      features: [
        '20 consultas/dia',
        'Histórico persistente',
        'Upload de dados privados',
        'Exportação PDF + CSV',
        'Projetos pessoais',
        'Suporte por e-mail',
      ],
      cta: 'Assinar Pro',
      highlighted: true,
      borderColor: 'border-violet-500/30',
      btnClass: 'bg-violet-500 hover:bg-violet-400 text-white shadow-lg shadow-violet-500/25',
    },
    {
      id: 'proplus',
      name: 'Pro Plus',
      badge: 'USO INTENSIVO',
      description: 'Para pesquisadores avançados',
      monthlyNormal: '197',
      monthlyPromo: '99',
      annualPrice: '1.970',
      annualEquiv: '164',
      features: [
        '50 consultas/dia',
        'Dados internacionais',
        'Sandbox Python',
        'Upload até 3 GB',
        'Exportações avançadas',
        'Processamento prioritário',
        'E-mail + chat',
      ],
      cta: 'Assinar Pro Plus',
      highlighted: false,
      borderColor: 'border-amber-500/20',
      btnClass: 'bg-amber-500 hover:bg-amber-400 text-[#0a0e1a] shadow-lg shadow-amber-500/20',
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
      {plans.map((plan) => {
        const isPro = plan.id === 'pro';
        const isProPlus = plan.id === 'proplus';
        const isFree = plan.id === 'free';

        return (
          <div
            key={plan.id}
            className={`relative rounded-2xl border p-7 flex flex-col ${
              isPro
                ? 'bg-gradient-to-b from-violet-500/5 to-transparent border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,0.08)]'
                : isProPlus
                ? 'bg-gradient-to-b from-amber-500/5 to-transparent border-amber-500/20'
                : 'bg-white/[0.02] border-white/[0.06]'
            }`}
          >
            {/* Badge */}
            {plan.badge && (
              <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${
                  isPro
                    ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/30'
                    : 'bg-amber-500 text-[#0a0e1a] shadow-lg shadow-amber-500/20'
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
              {isFree ? (
                <div>
                  <div className="text-4xl font-bold text-white">R$ 0</div>
                  <div className="text-sm text-white/40 mt-1">Grátis para sempre</div>
                </div>
              ) : isAnnual ? (
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      R$ {plan.annualPrice}
                    </span>
                    <span className="text-white/40 text-sm">/ano</span>
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="text-sm text-cyan-400 font-medium">
                      Equivalente a R$ {plan.annualEquiv}/mês
                    </div>
                    <div className="text-xs text-white/30">
                      {isPro ? 'Melhor custo-benefício' : 'Maior economia'}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      R$ {plan.monthlyNormal}
                    </span>
                    <span className="text-white/40 text-sm">/mês</span>
                  </div>
                  <div className="mt-2">
                    <div className="text-sm text-cyan-400 font-medium">
                      R$ {plan.monthlyPromo}/mês nos 3 primeiros meses
                    </div>
                    <div className="text-xs text-white/30 mt-1">
                      Após o período promocional, retorna para R$ {plan.monthlyNormal}/mês
                    </div>
                  </div>
                </div>
              )}
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
            <button
              className={`w-full py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${plan.btnClass}`}
            >
              {plan.cta}
            </button>
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
    { feature: 'Consultas por dia', free: '10', pro: '20', proplus: '50' },
    { feature: 'Todos os bancos públicos', free: true, pro: true, proplus: true },
    { feature: 'Dados internacionais', free: false, pro: false, proplus: true },
    { feature: 'Upload de dados privados', free: false, pro: true, proplus: true },
    { feature: 'Sandbox Python', free: false, pro: false, proplus: true },
    { feature: 'Exportação PDF', free: true, pro: true, proplus: true },
    { feature: 'Exportação CSV', free: false, pro: true, proplus: true },
    { feature: 'Suporte', free: 'FAQ', pro: 'E-mail', proplus: 'E-mail + Chat' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h3 className="font-display text-xl font-bold text-white mb-8">
          Compare os planos
        </h3>

        <div className="rounded-xl border border-white/[0.06] overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 text-sm">
            <div className="p-4 text-white/40 font-medium bg-white/[0.02]">Recurso</div>
            <div className="p-4 text-center text-white/40 font-medium bg-white/[0.02]">Free</div>
            <div className="p-4 text-center text-violet-400 font-medium bg-violet-500/5">Pro</div>
            <div className="p-4 text-center text-amber-400 font-medium bg-amber-500/5">Pro Plus</div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 text-sm ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 6. INSTITUTIONAL CARD
// ============================================================
function InstitutionalCard() {
  const features = [
    { icon: Users, label: 'Multiusuário' },
    { icon: LayoutDashboard, label: 'Dashboards compartilhados' },
    { icon: Map, label: 'Mapas interativos' },
    { icon: Building2, label: 'Workspace institucional' },
    { icon: Headphones, label: 'Suporte dedicado' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h3 className="font-display text-xl font-bold text-white">
              Para equipes e organizações
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
            Recursos avançados para colaboração, dashboards institucionais e operações em escala.
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
            Preencha o formulário e nossa equipe entrará em contato.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              placeholder="Nome completo"
              className="px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30"
            />
            <input
              type="text"
              placeholder="Instituição"
              className="px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30"
            />
            <input
              type="email"
              placeholder="E-mail corporativo"
              className="px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30"
            />
            <select className="px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm text-white/40 focus:outline-none focus:border-cyan-400/30">
              <option>Tamanho da equipe</option>
              <option>1-5 pessoas</option>
              <option>6-20 pessoas</option>
              <option>21-50 pessoas</option>
              <option>50+ pessoas</option>
            </select>
          </div>

          <textarea
            placeholder="Como podemos ajudar?"
            rows={3}
            className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 mb-3 resize-none"
          />

          <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-[#0a0e1a] text-sm font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            Tenho interesse
          </button>

          <p className="text-center text-white/20 text-xs mt-3 flex items-center justify-center gap-1">
            <Shield className="w-3 h-3" />
            Seus dados estão seguros. Não enviamos spam.
          </p>
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
      q: 'Todos os planos possuem as mesmas capacidades analíticas?',
      a: 'Sim. A diferença entre os planos está no volume de uso, persistência de dados, dados avançados e recursos operacionais.',
    },
    {
      q: 'Qual a diferença entre Pro e Pro Plus?',
      a: 'O Pro Plus inclui dados internacionais, Sandbox Python, maior capacidade de upload e recursos avançados para uso intensivo.',
    },
    {
      q: 'Posso cancelar quando quiser?',
      a: 'Sim. Os planos mensais podem ser cancelados a qualquer momento.',
    },
    {
      q: 'O que acontece após os 3 primeiros meses promocionais?',
      a: 'O plano retorna automaticamente ao valor mensal padrão.',
    },
    {
      q: 'Posso usar meus próprios dados?',
      a: 'Sim. Os planos Pro e Pro Plus permitem upload de dados privados.',
    },
    {
      q: 'O EpidBot substitui softwares estatísticos?',
      a: 'O EpidBot complementa ferramentas tradicionais oferecendo IA especializada, consultas naturais e workflows epidemiológicos integrados.',
    },
    {
      q: 'Existe plano para equipes ou instituições?',
      a: 'Sim. O EpidBot possui planos institucionais voltados para colaboração, multiusuário e operações em escala.',
    },
    {
      q: 'Meus dados privados ficam seguros?',
      a: 'Sim. Os dados enviados permanecem privados e são utilizados apenas dentro do seu ambiente de análise.',
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
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
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
// 8. DISCOUNTS
// ============================================================
function Discounts() {
  const discounts = [
    {
      audience: 'Estudante',
      discount: '50%',
      scope: 'no Pro/Pro Plus',
      condition: 'Com comprovante de matrícula',
    },
    {
      audience: 'Servidor público SUS',
      discount: '30%',
      scope: 'no Pro/Pro Plus',
      condition: 'Com comprovante',
    },
    {
      audience: 'ONGs de saúde',
      discount: '40%',
      scope: 'no Pro/Pro Plus',
      condition: 'Com comprovante',
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h3 className="font-display text-lg font-bold text-white text-center mb-6">
          Descontos especiais
        </h3>

        <div className="rounded-xl border border-white/[0.06] overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 text-xs font-medium">
            <div className="p-3 sm:p-4 text-white/40 bg-white/[0.02]">Público</div>
            <div className="p-3 sm:p-4 text-white/40 bg-white/[0.02]">Desconto</div>
            <div className="p-3 sm:p-4 text-white/40 bg-white/[0.02]">Condição</div>
          </div>

          {/* Rows */}
          {discounts.map((row, i) => (
            <div
              key={row.audience}
              className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}
            >
              <div className="p-3 sm:p-4 text-white/70">{row.audience}</div>
              <div className="p-3 sm:p-4">
                <span className="text-cyan-400 font-bold">{row.discount}</span>
                <span className="text-white/50 text-xs ml-1">{row.scope}</span>
              </div>
              <div className="p-3 sm:p-4 text-white/40 text-xs sm:text-sm">{row.condition}</div>
            </div>
          ))}
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
                Crie sua conta e explore o poder dos dados em saúde com IA especializada.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <button className="bg-cyan-400 hover:bg-cyan-300 text-[#0a0e1a] text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Criar conta gratuita
            </button>
            <span className="text-sm text-white/40">
              Já tem conta?{' '}
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                Entrar
              </button>
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
          <a href="#" className="text-white/30 hover:text-white/50 text-xs transition-colors">Termos</a>
          <a href="#" className="text-white/30 hover:text-white/50 text-xs transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// PAGE
// ============================================================
export default function EpidbotIndividual() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white font-body">
      <Navbar />
      <Hero />

      {/* Pricing Section */}
      <section id="pricing" className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <PricingToggle isAnnual={isAnnual} onChange={setIsAnnual} />
          <PricingCards isAnnual={isAnnual} />
        </div>
      </section>

      <ComparisonTable />
      <InstitutionalCard />
      <FAQ />
      <Discounts />
      <FinalCTA />
      <Footer />
    </div>
  );
}
