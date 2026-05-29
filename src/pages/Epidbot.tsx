import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

const copy = {
  'pt-BR': {
    menu: {
      kwarai: 'Conheça a Kwar-AI',
      kwaraiItems: ['Nossa História', 'Quem lidera a Kwar-AI', 'Fale com a gente', 'Kwar-AI Home'],
      epidbot: 'EpidBot',
      epidbotItems: ['Visão geral', 'Documentação', 'Termos de uso', 'LGPD', 'Preços'],
      solucoes: 'Soluções',
      solucoesItems: ['Pra quem é o EpidBot?', 'Profissionais de vigilância epidemiológica', 'Pesquisadores e universidades', 'Hospitais e laboratórios', 'Organizações globais de saúde', 'Jornalistas e mídia'],
      precos: 'Preços',
      precosItems: ['Pro', 'Max', 'Team', 'Enterprise'],
    },
    nav: {
      platform: 'Plataforma',
      solutions: 'Soluções',
      pricing: 'Planos',
      research: 'Pesquisa',
      pilots: 'Pilotos',
      login: 'Login',
      requestDemo: 'Solicitar demo',
      try: 'Testar EpidBot',
    },
    hero: {
      headline: 'Inteligência epidemiológica para pesquisadores, hospitais e organizações globais de saúde.',
      subtitle: 'Antecipe surtos, automatize análises e transforme dados complexos em decisões estratégicas.',
    },
    trust: 'Confiança de quem usa e apoia',
    features: {
      title: 'Feito para o trabalho epidemiológico real',
      items: [
        ['Dados públicos integrados', 'Acesse e interprete informações epidemiológicas sem fluxos complexos de extração. DATASUS, SINAN, SIM, SIH e outras bases.'],
        ['Inteligência contextual', 'O EpidBot entende indicadores, sazonalidade, regiões e o contexto epidemiológico brasileiro para gerar respostas mais precisas.'],
        ['Análises mais rápidas', 'Consultas em linguagem natural, visualizações automáticas e análises exploratórias em minutos, não em horas.'],
        ['Menos dependência técnica', 'Reduz a necessidade de scripts extensos, manipulação manual de planilhas e conhecimento avançado em programação.'],
        ['Apoio à gestão e comunicação', 'Gere gráficos, tabelas e resumos prontos para compartilhar com equipes, gestores e outros públicos de forma clara.'],
        ['Ambiente em evolução contínua', 'Novas bases, indicadores e funcionalidades sendo adicionadas constantemente com foco nas necessidades da área.'],
      ],
    },
    roi: {
      title: 'Algumas horas economizadas por semana já fazem diferença.',
      description: 'O EpidBot foi pensado para reduzir o tempo gasto em tarefas técnicas e repetitivas que não precisam ser um gargalo para o seu trabalho.',
      note: 'Se a ferramenta economizar apenas algumas horas por semana, ela já se paga rapidamente.',
    },
    differentiation: {
      title: 'Não é uma IA genérica. É especializada.',
      description: 'Enquanto ferramentas genéricas exigem prompts extensos e adaptação técnica, o EpidBot já nasceu voltado para a realidade da saúde pública brasileira.',
    },
    pricing: {
      badge: 'Promoção de lançamento -30%',
      title: 'Escolha o plano ideal para você',
      subtitle: 'Condição especial para os primeiros usuários durante o lançamento do EpidBot.',
      monthly: 'Mensal',
      annual: 'Anual',
      free: 'Para começar',
      pro: 'Para profissionais',
      team: 'Para equipes e instituições',
      promo: 'Preço promocional de lançamento',
      subscribe: 'Assinar Pro',
      start: 'Começar gratuitamente',
      contact: 'Falar com o time',
      earlyTitle: 'Acesso early adopter',
      earlyText: 'Os primeiros usuários terão condições especiais durante a fase inicial da plataforma.',
      learnMore: 'Saiba mais',
    },
    final: {
      title: 'Antecipar é proteger.',
      text: 'Dados melhores. Decisões mais rápidas. Impacto real na saúde da população.',
      cta: 'Experimentar EpidBot',
    },
    footer: {
      text: 'IA aplicada à saúde pública brasileira para impulsionar análises, vigilância e decisões baseadas em evidências.',
      rights: 'Todos os direitos reservados.',
    },
    contact: {
      title: 'Entre em contato',
      subtitle: 'Fale com a equipe da Kwar-AI para dúvidas, parcerias, demonstrações ou soluções institucionais.',
      infoLabel: 'Informações de Contato',
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Localização',
      socialLabel: 'Redes Sociais',
      nameLabel: 'Nome',
      emailLabel: 'E-mail',
      institutionLabel: 'Instituição',
      subjectLabel: 'Assunto',
      messageLabel: 'Mensagem',
      sendButton: 'Enviar mensagem',
      sending: 'Enviando...',
      successTitle: 'Mensagem enviada com sucesso!',
      successText: 'Recebemos sua mensagem e responderemos em até 24 horas úteis.',
      sendAgain: 'Enviar outra mensagem',
      error: 'Erro ao enviar. Tente novamente.',
      privacy: 'Ao enviar, você concorda com nossa política de privacidade e LGPD.',
      namePlaceholder: 'Seu nome',
      emailPlaceholder: 'seu@email.com',
      institutionPlaceholder: 'Nome da sua instituição',
      subjectPlaceholder: 'Assunto da mensagem',
      messagePlaceholder: 'Como podemos ajudar?',
    },
    compare: {
      title: 'Compare os planos',
      subtitle: 'Escolha o nível ideal de inteligência epidemiológica para sua pesquisa ou equipe.',
      feature: 'Funcionalidade',
    },
    bottomCta: {
      title: 'Pronto para transformar dados em inteligência epidemiológica?',
      try: 'Experimentar grátis',
      contact: 'Falar com vendas',
    },
    enterprise: {
      title: 'Infraestrutura institucional para operações epidemiológicas em larga escala.',
      description: 'Solução completa para secretarias de saúde, hospitais, instituições públicas e organizações internacionais que precisam de ambiente personalizado, governança e suporte dedicado.',
      features: ['Relatórios personalizados', 'Branding institucional', 'Dashboards organizacionais', 'Templates institucionais', 'Mapas interativos avançados', 'Onboarding e treinamento', 'Suporte dedicado'],
      cta: 'Agendar demonstração',
    },
  },
  en: {
    menu: {
      kwarai: 'About Kwar-AI',
      kwaraiItems: ['Our History', 'Who leads Kwar-AI', 'Contact us', 'Kwar-AI Home'],
      epidbot: 'EpidBot',
      epidbotItems: ['Overview', 'Documentation', 'Terms of Use', 'LGPD', 'Pricing'],
      solucoes: 'Solutions',
      solucoesItems: ['Who is EpidBot for?', 'Epidemiological surveillance professionals', 'Researchers & universities', 'Hospitals & laboratories', 'Global health organizations', 'Journalists & media'],
      precos: 'Pricing',
      precosItems: ['Pro', 'Max', 'Team', 'Enterprise'],
    },
    nav: {
      platform: 'Platform',
      solutions: 'Solutions',
      pricing: 'Pricing',
      research: 'Research',
      pilots: 'Pilots',
      login: 'Login',
      requestDemo: 'Request demo',
      try: 'Try EpidBot',
    },
    hero: {
      headline: 'Epidemiological intelligence for researchers, hospitals and global health organizations.',
      subtitle: 'Anticipate outbreaks, automate analyses and transform complex data into strategic decisions.',
    },
    trust: 'Trusted by users and supporters',
    features: {
      title: 'Built for real epidemiological work',
      items: [
        ['Integrated public data', 'Access and interpret epidemiological information without complex extraction workflows. DATASUS, SINAN, SIM, SIH and other sources.'],
        ['Contextual intelligence', 'EpidBot understands indicators, seasonality, regions and the Brazilian epidemiological context to generate more accurate answers.'],
        ['Faster analyses', 'Natural-language queries, automatic visualizations and exploratory analyses in minutes, not hours.'],
        ['Less technical dependency', 'Reduces reliance on extensive scripts, manual spreadsheet work and advanced programming knowledge.'],
        ['Support for management and communication', 'Generate charts, tables and summaries ready to share with teams, managers and stakeholders.'],
        ['Continuously evolving environment', 'New data sources, indicators and features are constantly added around public health needs.'],
      ],
    },
    roi: {
      title: 'Saving a few hours per week already makes a difference.',
      description: 'EpidBot reduces time spent on technical and repetitive tasks that should not become a bottleneck for your work.',
      note: 'If the tool saves only a few hours per week, it quickly pays for itself.',
    },
    differentiation: {
      title: 'Not generic AI. Specialized AI.',
      description: 'While generic tools require long prompts and technical adaptation, EpidBot was designed for the reality of public health work.',
    },
    pricing: {
      badge: 'Launch promotion -30%',
      title: 'Choose the right plan for you',
      subtitle: 'Special conditions for early users during the EpidBot launch.',
      monthly: 'Monthly',
      annual: 'Annual',
      free: 'To get started',
      pro: 'For professionals',
      team: 'For teams and institutions',
      promo: 'Launch promotional price',
      subscribe: 'Subscribe Pro',
      start: 'Start for free',
      contact: 'Talk to the team',
      earlyTitle: 'Early adopter access',
      earlyText: 'Early users will have special conditions during the initial platform phase.',
      learnMore: 'Learn more',
    },
    final: {
      title: 'Anticipation protects.',
      text: 'Better data. Faster decisions. Real impact on public health.',
      cta: 'Try EpidBot',
    },
    footer: {
      text: 'AI applied to public health to accelerate analysis, surveillance and evidence-based decisions.',
      rights: 'All rights reserved.',
    },
    contact: {
      title: 'Contact us',
      subtitle: 'Contact the Kwar-AI team for questions, partnerships, demos or institutional solutions.',
      infoLabel: 'Contact Information',
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Location',
      socialLabel: 'Social Media',
      nameLabel: 'Name',
      emailLabel: 'Email',
      institutionLabel: 'Institution',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      sendButton: 'Send message',
      sending: 'Sending...',
      successTitle: 'Message sent successfully!',
      successText: 'We received your message and will respond within 24 business hours.',
      sendAgain: 'Send another message',
      error: 'Error sending. Please try again.',
      privacy: 'By sending, you agree to our privacy policy and LGPD.',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      institutionPlaceholder: 'Your institution name',
      subjectPlaceholder: 'Message subject',
      messagePlaceholder: 'How can we help?',
    },
    compare: {
      title: 'Compare plans',
      subtitle: 'Choose the ideal level of epidemiological intelligence for your research or team.',
      feature: 'Feature',
    },
    bottomCta: {
      title: 'Ready to turn data into epidemiological intelligence?',
      try: 'Try for free',
      contact: 'Talk to sales',
    },
    enterprise: {
      title: 'Institutional infrastructure for large-scale epidemiological operations.',
      description: 'Complete solution for health departments, hospitals, public institutions and international organizations that need a customized environment, governance and dedicated support.',
      features: ['Custom reports', 'Institutional branding', 'Organizational dashboards', 'Institutional templates', 'Advanced interactive maps', 'Onboarding & training', 'Dedicated support'],
      cta: 'Schedule a demo',
    },
  },
  es: {
    menu: {
      kwarai: 'Conozca Kwar-AI',
      kwaraiItems: ['Nuestra Historia', 'Quién lidera Kwar-AI', 'Hable con nosotros', 'Kwar-AI Home'],
      epidbot: 'EpidBot',
      epidbotItems: ['Visión general', 'Documentación', 'Términos de uso', 'LGPD', 'Precios'],
      solucoes: 'Soluciones',
      solucoesItems: ['¿Para quién es EpidBot?', 'Profesionales de vigilancia epidemiológica', 'Investigadores y universidades', 'Hospitales y laboratorios', 'Organizaciones globales de salud', 'Periodistas y medios'],
      precos: 'Precios',
      precosItems: ['Pro', 'Max', 'Team', 'Enterprise'],
    },
    nav: {
      platform: 'Plataforma',
      solutions: 'Soluciones',
      pricing: 'Planes',
      research: 'Investigación',
      pilots: 'Pilotos',
      login: 'Login',
      requestDemo: 'Solicitar demo',
      try: 'Probar EpidBot',
    },
    hero: {
      headline: 'Inteligencia epidemiológica para investigadores, hospitales y organizaciones globales de salud.',
      subtitle: 'Anticipe brotes, automatice análisis y transforme datos complejos en decisiones estratégicas.',
    },
    trust: 'Confianza de usuarios y aliados',
    features: {
      title: 'Diseñado para el trabajo epidemiológico real',
      items: [
        ['Datos públicos integrados', 'Acceda e interprete información epidemiológica sin flujos complejos de extracción. DATASUS, SINAN, SIM, SIH y otras fuentes.'],
        ['Inteligencia contextual', 'EpidBot entiende indicadores, estacionalidad, regiones y el contexto epidemiológico brasileño para generar respuestas más precisas.'],
        ['Análisis más rápidos', 'Consultas en lenguaje natural, visualizaciones automáticas y análisis exploratorios en minutos, no en horas.'],
        ['Menor dependencia técnica', 'Reduce la necesidad de scripts extensos, manipulación manual de hojas de cálculo y conocimiento avanzado de programación.'],
        ['Apoyo a la gestión y comunicación', 'Genere gráficos, tablas y resúmenes listos para compartir con equipos, gestores y otros públicos.'],
        ['Ambiente en evolución continua', 'Nuevas bases, indicadores y funcionalidades se agregan continuamente con foco en salud pública.'],
      ],
    },
    roi: {
      title: 'Ahorrar algunas horas por semana ya marca la diferencia.',
      description: 'EpidBot fue pensado para reducir el tiempo dedicado a tareas técnicas y repetitivas que no deberían ser un obstáculo.',
      note: 'Si la herramienta ahorra solo algunas horas por semana, se paga rápidamente.',
    },
    differentiation: {
      title: 'No es una IA genérica. Es especializada.',
      description: 'Mientras las herramientas genéricas exigen prompts extensos y adaptación técnica, EpidBot nació para la realidad de la salud pública.',
    },
    pricing: {
      badge: 'Promoción de lanzamiento -30%',
      title: 'Elija el plan ideal para usted',
      subtitle: 'Condición especial para los primeros usuarios durante el lanzamiento de EpidBot.',
      monthly: 'Mensual',
      annual: 'Anual',
      free: 'Para empezar',
      pro: 'Para profesionales',
      team: 'Para equipos e instituciones',
      promo: 'Precio promocional de lanzamiento',
      subscribe: 'Suscribirse Pro',
      start: 'Empezar gratis',
      contact: 'Hablar con el equipo',
      earlyTitle: 'Acceso early adopter',
      earlyText: 'Los primeros usuarios tendrán condiciones especiales durante la fase inicial de la plataforma.',
      learnMore: 'Más información',
    },
    final: {
      title: 'Anticipar es proteger.',
      text: 'Mejores datos. Decisiones más rápidas. Impacto real en la salud pública.',
      cta: 'Probar EpidBot',
    },
    footer: {
      text: 'IA aplicada a la salud pública para impulsar análisis, vigilancia y decisiones basadas en evidencia.',
      rights: 'Todos los derechos reservados.',
    },
    contact: {
      title: 'Contáctenos',
      subtitle: 'Hable con el equipo de Kwar-AI para dudas, alianzas, demostraciones o soluciones institucionales.',
      infoLabel: 'Información de Contacto',
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Ubicación',
      socialLabel: 'Redes Sociales',
      nameLabel: 'Nombre',
      emailLabel: 'Email',
      institutionLabel: 'Institución',
      subjectLabel: 'Asunto',
      messageLabel: 'Mensaje',
      sendButton: 'Enviar mensaje',
      sending: 'Enviando...',
      successTitle: '¡Mensaje enviado con éxito!',
      successText: 'Recibimos su mensaje y responderemos en un plazo de 24 horas hábiles.',
      sendAgain: 'Enviar otro mensaje',
      error: 'Error al enviar. Intente nuevamente.',
      privacy: 'Al enviar, acepta nuestra política de privacidad y LGPD.',
      namePlaceholder: 'Su nombre',
      emailPlaceholder: 'su@email.com',
      institutionPlaceholder: 'Nombre de su institución',
      subjectPlaceholder: 'Asunto del mensaje',
      messagePlaceholder: '¿Cómo podemos ayudar?',
    },
    compare: {
      title: 'Compare los planes',
      subtitle: 'Elija el nivel ideal de inteligencia epidemiológica para su investigación o equipo.',
      feature: 'Funcionalidad',
    },
    bottomCta: {
      title: '¿Listo para transformar datos en inteligencia epidemiológica?',
      try: 'Probar gratis',
      contact: 'Hablar con ventas',
    },
    enterprise: {
      title: 'Infraestructura institucional para operaciones epidemiológicas a gran escala.',
      description: 'Solución completa para secretarías de salud, hospitales, instituciones públicas y organizaciones internacionales que necesitan un entorno personalizado, gobernanza y soporte dedicado.',
      features: ['Informes personalizados', 'Branding institucional', 'Dashboards organizacionales', 'Plantillas institucionales', 'Mapas interactivos avanzados', 'Onboarding y capacitación', 'Soporte dedicado'],
      cta: 'Agendar demostración',
    },
  },
};

type LocaleKey = keyof typeof copy;

function useEpidbotCopy() {
  const { i18n } = useTranslation();
  const lang = i18n?.language || 'pt-BR';
  const lng = (typeof lang === 'string' && lang.startsWith('en')) ? 'en' : (typeof lang === 'string' && lang.startsWith('es')) ? 'es' : 'pt-BR';
  return { t: copy[lng as LocaleKey], i18n, lng: lng as LocaleKey };
}

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
  const { t, i18n, lng } = useEpidbotCopy();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuGroups = [
    {
      label: t.menu.kwarai,
      href: 'https://kwar-ai.com.br/',
      action: () => window.open('https://kwar-ai.com.br/', '_blank', 'noopener,noreferrer'),
    },
    {
      label: t.menu.epidbot,
      href: '#',
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    },
    {
      items: [
        { label: t.menu.solucoesItems[0], href: '/#/epidbot-landing' },
        { label: t.menu.solucoesItems[1], href: '/#/vigilancia-epidemiologica' },
        { label: t.menu.solucoesItems[2], href: '/#/pesquisa' },
        { label: t.menu.solucoesItems[3], href: '/#/hospitais' },
        { label: t.menu.solucoesItems[4], href: '/#/saude-global' },
        { label: t.menu.solucoesItems[5], href: '/#/jornalistas' },
      ],
    },
    {
      label: t.menu.precos,
      href: '#pricing',
      action: () => {
        const el = document.querySelector('#pricing');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-kwar-deep/75 backdrop-blur-2xl border-b border-white/[0.08]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/images/logo-oficial.png" alt="Kwar-AI" className="w-8 h-8 object-contain opacity-95" />
          <div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-kwar-white">
            <span>Kwar-AI</span>
            <span className="h-4 w-px bg-white/15" />
            <span className="text-kwar-gray group-hover:text-white transition-colors">EpidBot</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {menuGroups.map((group, idx) => {
            if ('action' in group && group.action) {
              return (
                <button
                  key={idx}
                  onClick={group.action}
                  className="text-[13px] text-kwar-gray hover:text-kwar-white transition-colors"
                >
                  {group.label}
                </button>
              );
            }
            return (
              <div key={idx} className="relative group">
                <button className="text-[13px] text-kwar-gray group-hover:text-kwar-white transition-colors flex items-center gap-1">
                  {group.items[0].label}
                  <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute left-0 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-20">
                  <div className="w-56 rounded-2xl border border-white/[0.08] bg-kwar-deep/95 backdrop-blur-2xl py-3 shadow-2xl shadow-black/40">
                    {group.items.map((item) => {
                      if (item.href.startsWith('#')) {
                        return (
                          <button
                            key={item.label}
                            onClick={() => {
                              const el = document.querySelector(item.href);
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="block w-full text-left px-5 py-2.5 text-[13px] text-kwar-gray hover:text-kwar-white hover:bg-white/[0.04] transition-all"
                          >
                            {item.label}
                          </button>
                        );
                      }
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-5 py-2.5 text-[13px] text-kwar-gray hover:text-kwar-white hover:bg-white/[0.04] transition-all"
                        >
                          {item.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-[11px]">
            {(['pt-BR', 'en', 'es'] as LocaleKey[]).map((locale, i) => (
              <span key={locale} className="flex items-center">
                {i > 0 && <span className="text-white/10 mx-1">/</span>}
                <button
                  onClick={() => i18n.changeLanguage(locale)}
                  className={`transition-all ${lng === locale ? 'text-kwar-electric font-medium' : 'text-white/30 hover:text-white/60'}`}
                >
                  {locale === 'pt-BR' ? 'PT' : locale.toUpperCase()}
                </button>
              </span>
            ))}
          </div>
          <a
            href="https://epidbot.kwar-ai.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-[13px] text-kwar-gray hover:text-kwar-white transition-colors"
          >
            Login
          </a>
          <a
            href="https://epidbot.kwar-ai.com.br/register"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-kwar-electric px-4 py-2 text-[13px] font-semibold text-kwar-deep transition-all duration-300 hover:bg-kwar-electric/90 hover:shadow-glow"
          >
            Fazer cadastro
          </a>
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
  const { t, lng } = useEpidbotCopy();

  const imgSrc = `/images/epidbot ${lng === 'en' ? 'en' : lng === 'es' ? 'es' : 'pt'}.png`;

  return (
    <section ref={ref} className="relative min-h-screen bg-[#030712] overflow-hidden pt-20">
      {/* Right — image as background (2/3 of page) */}
      <div className="absolute top-0 right-0 w-2/3 h-full hidden lg:flex items-center justify-end pr-8">
        <img
          src={imgSrc}
          alt="EpidBot"
          className="w-auto h-[75%] max-w-[90%] object-contain opacity-80"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 h-full">
        <div className="grid min-h-[calc(100vh-5rem)] items-center lg:grid-cols-[1fr_2fr]">
          {/* Left — Branding + Login (1/3) */}
          <div className={`max-w-sm py-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.04em] text-white leading-[0.96]">
              <span className="bg-gradient-to-r from-kwar-electric via-cyan-200 via-yellow-200 to-kwar-gold bg-clip-text text-transparent">EpidBot</span>
            </h1>
            <p className="mt-3 text-sm text-white/40 leading-relaxed">
              {t.hero.headline}
            </p>

            {/* Login card */}
            <div className="mt-8 relative overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.015] p-6 backdrop-blur-2xl">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-kwar-electric/[0.04] blur-[50px]" />
              <div className="relative">
                <h2 className="text-base font-semibold text-white mb-1">Faça seu login</h2>
                <p className="text-xs text-white/30 mb-5 leading-relaxed">
                  {t.hero.subtitle}
                </p>

                <div className="space-y-3.5">
                  <div>
                    <input className="h-10 w-full rounded-xl border border-white/[0.06] bg-kwar-deep/40 px-4 text-sm text-white outline-none transition-all placeholder:text-white/15 focus:border-kwar-electric/30" placeholder="Usuário" />
                  </div>
                  <div>
                    <input type="password" className="h-10 w-full rounded-xl border border-white/[0.06] bg-kwar-deep/40 px-4 text-sm text-white outline-none transition-all placeholder:text-white/15 focus:border-kwar-electric/30" placeholder="Senha" />
                  </div>
                  <div className="flex items-center justify-between">
                    <a href="https://epidbot.kwar-ai.com.br/forgot-password" target="_blank" rel="noopener noreferrer" className="text-[11px] text-kwar-electric/60 hover:text-kwar-electric transition-colors">
                      Esqueceu a senha?
                    </a>
                  </div>

                  <a
                    href="https://epidbot.kwar-ai.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-full items-center justify-center rounded-xl bg-kwar-electric text-sm font-semibold text-kwar-deep transition-all hover:bg-kwar-electric/90 hover:shadow-glow"
                  >
                    Entrar
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-white/[0.05]" />
                    <span className="text-[10px] text-white/15 uppercase">ou</span>
                    <div className="flex-1 h-px bg-white/[0.05]" />
                  </div>

                  <a
                    href="https://epidbot.kwar-ai.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-white/[0.05] bg-white/[0.01] text-xs font-medium text-white/55 transition-all hover:bg-white/[0.03] hover:text-white/75"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    Entrar com Google
                  </a>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.03]">
                  <p className="text-center text-[10px] text-white/12">Powered by Kwar-AI</p>
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
// ============================================================================
// PRICING
// ============================================================================
function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.1);
  const { t } = useEpidbotCopy();

  const FreeIcon = () => (
    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="10" />
      <path d="M26 26l8 8" strokeWidth="1.8" />
      <rect x="32" y="10" width="8" height="2" rx="1" />
      <rect x="32" y="16" width="8" height="2" rx="1" />
      <rect x="32" y="22" width="8" height="2" rx="1" />
    </svg>
  );

  const ProIcon = () => (
    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="36" height="36" rx="3" />
      <path d="M4 14h36" />
      <rect x="8" y="20" width="4" height="14" rx="1.5" />
      <rect x="16" y="24" width="4" height="10" rx="1.5" />
      <rect x="24" y="18" width="4" height="16" rx="1.5" />
      <path d="M38 28v4a2 2 0 01-2 2h0a2 2 0 01-2-2v-4" />
      <rect x="8" y="6" width="6" height="2" rx="1" />
    </svg>
  );

  const MaxIcon = () => (
    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="20" r="12" />
      <ellipse cx="24" cy="20" rx="6" ry="12" />
      <path d="M24 8v4M24 28v4" />
      <path d="M12 20h4M32 20h4" />
      <circle cx="24" cy="20" r="18" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.5" />
      <circle cx="24" cy="20" r="3" fill="currentColor" strokeWidth="0" opacity="0.8" />
      <circle cx="38" cy="10" r="2" fill="currentColor" strokeWidth="0" opacity="0.6" />
    </svg>
  );

  const TeamIcon = () => (
    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6l13 7.5v15L24 36l-13-7.5v-15L24 6z" />
      <path d="M24 6v30" />
      <path d="M11 13.5L24 21l13-7.5" />
    </svg>
  );

  const EnterpriseIcon = () => (
    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="20" r="16" />
      <path d="M24 4v6M24 34v6" />
      <path d="M8 20h6M34 20h6" />
      <circle cx="24" cy="20" r="10" strokeWidth="0.6" opacity="0.5" />
      <path d="M8 8l6 6M40 40l-6-6" opacity="0.3" />
      <path d="M40 8l-6 6M8 40l6-6" opacity="0.3" />
      <rect x="20" y="16" width="8" height="8" rx="1.5" fill="currentColor" strokeWidth="0" opacity="0.6" />
    </svg>
  );

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'free': return <FreeIcon key={name} />;
      case 'pro': return <ProIcon key={name} />;
      case 'max': return <MaxIcon key={name} />;
      case 'research team': return <TeamIcon key={name} />;
      default: return null;
    }
  };

  const plans = [
    {
      name: 'Free',
      subtitle: 'Explore a plataforma',
      monthlyPrice: 0,
      cta: 'Experimentar grátis',
      accent: 'neutral',
      features: [
        'Uso incluído*',
        'Dados públicos de saúde',
        'Consultas em linguagem natural',
        'Análises epidemiológicas',
        'Gráficos e mapas estáticos',
        'Dados DATASUS e Mosqlimate',
      ],
    },
    {
      name: 'Pro',
      subtitle: 'Pesquisa epidemiológica profissional',
      badge: 'Mais popular',
      monthlyPrice: 97,
      annualPrice: 804,
      launchPrice: 67,
      cta: 'Assinar Pro',
      accent: 'cyan',
      highlight: true,
      features: [
        'Tudo do Free',
        'Mais capacidade de uso que o Free*',
        'Projetos salvos',
        'Upload de datasets',
        'Exportação PDF e CSV',
        'Histórico persistente',
        'Mais acesso ao EpidBot',
      ],
    },
    {
      name: 'Max',
      subtitle: 'Inteligência epidemiológica avançada',
      badge: 'Recomendado pela Kwar-AI',
      monthlyPrice: 197,
      annualPrice: 1644,
      launchPrice: 137,
      cta: 'Assinar Max',
      accent: 'gold',
      features: [
        'Tudo do Pro',
        '5x mais capacidade de uso que o Pro*',
        'Dados internacionais',
        'Sandbox Python',
        'Processamento prioritário',
        'Exportações avançadas',
        'Uso intensivo para pesquisa',
      ],
    },
    {
      name: 'Research Team',
      subtitle: 'Colaboração organizacional',
      monthlyPrice: 1425,
      annualPrice: 11964,
      launchPrice: 997,
      priceNote: 'Até 10 usuários incluídos',
      cta: 'Falar com vendas',
      accent: 'teal',
      features: [
        'Tudo do Max',
        '10x mais capacidade de uso que o Max*',
        'Workspace compartilhado',
        'Projetos colaborativos',
        'Dashboards internos',
        'Relatórios compartilhados',
        'Suporte prioritário',
      ],
    },
  ];

  const accentStyles: Record<string, { card: string; badge: string; btn: string; glow: string }> = {
    neutral: {
      card: 'border-white/[0.06] bg-white/[0.015] hover:border-white/[0.1]',
      badge: 'bg-white/10 text-white/60',
      btn: 'border border-white/10 text-white hover:bg-white/5',
      glow: '',
    },
    cyan: {
      card: 'border-kwar-electric/25 bg-gradient-to-b from-kwar-electric/[0.04] to-transparent shadow-[0_0_60px_rgba(0,240,255,0.08)] lg:scale-[1.02]',
      badge: 'bg-kwar-electric text-kwar-deep',
      btn: 'bg-kwar-electric hover:bg-kwar-electric/90 text-kwar-deep hover:shadow-glow',
      glow: 'shadow-[0_0_60px_rgba(0,240,255,0.08)]',
    },
    gold: {
      card: 'border-amber-500/15 bg-gradient-to-b from-kwar-electric/[0.04] to-amber-500/[0.03] shadow-[0_0_60px_rgba(255,184,0,0.05)]',
      badge: 'bg-kwar-gold text-kwar-deep',
      btn: 'bg-gradient-to-r from-kwar-electric to-amber-500 hover:from-kwar-electric/90 hover:to-amber-400 text-kwar-deep font-semibold shadow-[0_0_30px_rgba(255,184,0,0.15)]',
      glow: 'shadow-[0_0_60px_rgba(255,184,0,0.05)]',
    },
    teal: {
      card: 'border-amber-500/15 bg-gradient-to-b from-amber-500/[0.03] to-transparent',
      badge: 'bg-amber-500 text-kwar-deep',
      btn: 'border border-amber-500/20 text-amber-300 hover:bg-amber-500/[0.05]',
      glow: '',
    },
  };

  const comparisonRows = [
    { feature: 'Dados públicos', free: true, pro: true, max: true },
    { feature: 'Dados Mosqlimate', free: true, pro: true, max: true },
    { feature: 'Projetos salvos', free: false, pro: true, max: true },
    { feature: 'Histórico persistente', free: false, pro: true, max: true },
    { feature: 'Upload CSV/Excel', free: false, pro: true, max: true },
    { feature: 'Exportação PDF', free: false, pro: true, max: true },
    { feature: 'Exportação CSV', free: false, pro: true, max: true },
    { feature: 'Dados internacionais', free: false, pro: false, max: true },
    { feature: 'Sandbox Python', free: false, pro: false, max: true },
    { feature: 'Processamento prioritário', free: false, pro: false, max: true },
    { feature: 'Suporte prioritário', free: false, pro: true, max: true },
  ];

  return (
    <section id="pricing" ref={ref} className="relative py-16 lg:py-20 overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,240,255,0.06),transparent_50%),radial-gradient(circle_at_80%_40%,rgba(255,184,0,0.04),transparent_50%),linear-gradient(180deg,#050a10_0%,#07111d_50%,#050a10_100%)]" />
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-kwar-electric/[0.04] rounded-full blur-[120px]" />
      <div className="absolute right-0 bottom-1/4 w-[300px] h-[300px] bg-amber-500/[0.03] rounded-full blur-[100px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 mb-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-kwar-gold" />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">Early access</span>
          </div>

          <h2 className={`font-display text-3xl sm:text-4xl font-bold text-white transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Escolha o plano ideal
          </h2>

          <p className={`text-white/40 text-sm mt-2 transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Do primeiro contato à colaboração institucional.
          </p>

          <p className={`text-xs text-white/30 mt-3 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Preços especiais de lançamento para os primeiros 100 usuários • Use o cupom <span className="font-semibold tracking-wider text-white/60">EARLY100</span>
          </p>
        </div>

        {/* Billing toggle */}
        <div className={`flex justify-center mb-8 transition-all duration-1000 delay-250 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.015] p-0.5">
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ${
                !isAnnual ? 'bg-white/10 text-white' : 'text-white/30 hover:text-white/60'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
                isAnnual ? 'bg-white/10 text-white' : 'text-white/30 hover:text-white/60'
              }`}
            >
              Anual
              <span className="text-[9px] font-semibold text-kwar-electric">-30%</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-5 lg:grid-cols-4">
          {plans.map((plan, idx) => {
            const acct = accentStyles[plan.accent];
            return (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-700 lg:hover:-translate-y-1 ${acct.card} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-6 px-3 py-1 ${acct.badge} text-[9px] font-semibold tracking-wider uppercase rounded-full`}>
                  {plan.badge}
                </div>
              )}

              <div className={`mb-4 ${
                plan.accent === 'cyan' ? 'text-kwar-electric/80 shadow-[0_0_30px_rgba(0,240,255,0.12)]' :
                plan.accent === 'gold' ? 'text-amber-400/80 shadow-[0_0_30px_rgba(255,184,0,0.12)]' :
                plan.accent === 'teal' ? 'text-amber-400/80 shadow-[0_0_30px_rgba(255,184,0,0.12)]' :
                plan.accent === 'neutral' ? 'text-white/30' :
                'text-white/50'
              }`}>
                {getIcon(plan.name)}
              </div>

              <h3 className="text-white font-semibold text-2xl mb-1.5">{plan.name}</h3>
              <p className="text-white/35 text-sm leading-relaxed mb-6">{plan.subtitle}</p>

              {/* Price */}
              <div className="mb-6 min-h-[96px]">
                {'monthlyPrice' in plan ? (
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className={`font-bold text-white ${plan.monthlyPrice === 0 ? 'text-2xl' : 'text-3xl'}`}>
                        {plan.monthlyPrice === 0 ? 'Grátis' : `R$ ${isAnnual && plan.launchPrice ? plan.launchPrice : plan.monthlyPrice}`}
                      </span>
                      {plan.monthlyPrice > 0 && (
                        <span className="text-white/30 text-sm">/mês</span>
                      )}
                    </div>
                    {!isAnnual && plan.launchPrice && (
                      <div className="text-xs text-white/40">
                        Primeiro mês por R$ {plan.launchPrice} • <span className={`font-medium ${plan.accent === 'cyan' ? 'text-kwar-electric/70' : plan.accent === 'gold' ? 'text-amber-400/70' : plan.accent === 'teal' ? 'text-amber-400/70' : 'text-white/60'}`}>EARLY100</span>
                      </div>
                    )}
                    {isAnnual && plan.launchPrice && (
                      <>
                        <div className="text-xs text-white/40">
                          Cobrado anualmente em R$ {plan.annualPrice}
                        </div>
                        <div className="text-[11px] text-white/25 line-through">
                          R$ {plan.monthlyPrice}/mês
                        </div>
                      </>
                    )}
                    {plan.priceNote && (
                      <div className="text-xs text-amber-400/60 mt-1.5 font-medium">{plan.priceNote}</div>
                    )}
                  </div>
                ) : null}
              </div>

              {/* CTA */}
              {plan.cta.includes('vendas') || plan.cta.includes('demonstração') || plan.cta.includes('sales') || plan.cta.includes('demo') ? (
                <a href="#contact" className={`w-full py-3 rounded-xl text-sm font-semibold transition-all mb-8 text-center block ${acct.btn}`}>
                  {plan.cta}
                </a>
              ) : plan.name === 'Free' ? (
                <a href="https://epidbot.kwar-ai.com.br/register" target="_blank" rel="noopener noreferrer" className={`w-full py-3 rounded-xl text-sm font-semibold transition-all mb-8 text-center block ${acct.btn}`}>
                  {plan.cta}
                </a>
              ) : (
                <a href="https://epidbot.kwar-ai.com.br/register" target="_blank" rel="noopener noreferrer" className={`w-full py-3 rounded-xl text-sm font-semibold transition-all mb-8 text-center block ${acct.btn}`}>
                  {plan.cta}
                </a>
              )}

              {/* Features */}
              <div className="space-y-3.5">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-sm text-white/55">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                      plan.accent === 'cyan' ? 'text-kwar-electric/60' :
                      plan.accent === 'gold' ? 'text-amber-400/60' :
                      plan.accent === 'teal' ? 'text-amber-400/60' :
                      'text-white/40'
                    }`} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className={`text-center text-[11px] text-white/15 leading-relaxed max-w-2xl mx-auto mt-10 tracking-wide transition-all duration-1000 delay-350 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          * <a href="/#/limites-de-uso" target="_blank" rel="noopener noreferrer" className="text-kwar-gold/70 hover:text-kwar-gold transition-colors">Como funcionam os limites de uso</a>. Valores e disponibilidade podem variar conforme país, moeda e taxas aplicáveis. Preços e planos podem ser alterados pela Kwar-AI sem aviso prévio.
        </p>

        {/* Enterprise — Premium Section */}
        <div className={`relative mt-16 rounded-2xl overflow-hidden transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-kwar-electric/[0.03] rounded-full blur-[100px] pointer-events-none" />

          {/* Background image — spans full section */}
          <div className="absolute inset-0">
            <img
              src="/images/enterprise preços.png"
              alt="Enterprise epidemiological intelligence platform"
              className="w-full h-full object-cover opacity-30 saturate-[0.8]"
            />
            {/* Fade mask: invisible left (behind text) → visible right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050a10] via-[#050a10]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a10] via-transparent to-[#050a10]/80" />
          </div>

          {/* Content */}
          <div className="relative grid lg:grid-cols-[1fr_1fr] gap-10 items-center p-10 lg:p-14">
            <div className="relative z-10">
              <EnterpriseIcon />
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.015] backdrop-blur-sm px-3 py-1 mb-5 mt-4">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/40">Enterprise</span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                Infraestrutura institucional para operações epidemiológicas em larga escala.
              </h3>
              <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-lg">
                Solução completa para secretarias de saúde, hospitais, instituições públicas e organizações internacionais que precisam de ambiente personalizado, governança e suporte dedicado.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {[
                  'Relatórios personalizados',
                  'Branding institucional',
                  'Dashboards organizacionais',
                  'Templates institucionais',
                  'Mapas interativos avançados',
                  'Onboarding e treinamento',
                  'Suporte dedicado',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-sm text-white/55">
                    <Check className="w-4 h-4 text-amber-400/60 flex-shrink-0 mt-0.5" />
                    {f}
                  </div>
                ))}
              </div>
              <a href="#contact" className="rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] px-6 py-2.5 text-sm font-medium text-white/70 hover:text-white transition-all backdrop-blur-sm inline-block">
                Agendar demonstração
              </a>
            </div>
            {/* Right side — empty, image visible behind */}
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* Comparison Table */}
        <div className={`relative mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
              {t.compare.title}
            </h3>
            <p className="text-white/35 text-sm">
              {t.compare.subtitle}
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto overflow-hidden rounded-2xl border border-white/[0.04] bg-gradient-to-b from-white/[0.015] to-white/[0.005] backdrop-blur-sm">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-white/30 uppercase tracking-[0.12em] bg-white/[0.01]">Funcionalidade</th>
                  <th className="text-center px-5 py-4 text-xs font-semibold text-white/25 uppercase tracking-[0.12em]">Free</th>
                  <th className="text-center px-5 py-4 text-xs font-semibold text-kwar-electric uppercase tracking-[0.12em] bg-kwar-electric/[0.025]">Pro</th>
                  <th className="relative text-center px-5 py-4 text-xs font-semibold text-amber-400 uppercase tracking-[0.12em] bg-amber-500/[0.02]">
                    Max
                    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`group transition-colors ${
                      i < comparisonRows.length - 1 ? 'border-b border-white/[0.02]' : ''
                    } hover:bg-white/[0.02]`}
                  >
                    <td className="px-6 py-3.5 text-sm text-white/50 group-hover:text-white/65 transition-colors">
                      {row.feature}
                    </td>
                    <td className="text-center px-5 py-3.5">
                      {row.free ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-kwar-electric/[0.04]">
                          <Check className="w-3.5 h-3.5 text-kwar-electric/50" strokeWidth={2.5} />
                        </span>
                      ) : (
                        <span className="text-white/15 text-sm">—</span>
                      )}
                    </td>
                    <td className="text-center px-5 py-3.5 bg-kwar-electric/[0.015] group-hover:bg-kwar-electric/[0.025]">
                      {row.pro ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-kwar-electric/[0.08] shadow-[0_0_12px_rgba(0,240,255,0.06)]">
                          <Check className="w-3.5 h-3.5 text-kwar-electric" strokeWidth={2.5} />
                        </span>
                      ) : (
                        <span className="text-white/15 text-sm">—</span>
                      )}
                    </td>
                    <td className="text-center px-5 py-3.5 bg-amber-500/[0.015] group-hover:bg-amber-500/[0.025]">
                      {row.max ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-amber-500/[0.08] shadow-[0_0_12px_rgba(255,184,0,0.06)]">
                          <Check className="w-3.5 h-3.5 text-amber-400" strokeWidth={2.5} />
                        </span>
                      ) : (
                        <span className="text-white/15 text-sm">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="font-display text-2xl font-semibold text-white mb-3">
            Pronto para transformar dados em inteligência epidemiológica?
          </h3>
          <div className="flex items-center justify-center gap-4">
            <a href="https://epidbot.kwar-ai.com.br/register" target="_blank" rel="noopener noreferrer" className="rounded-full bg-kwar-electric px-6 py-2.5 text-sm font-semibold text-kwar-deep transition-all hover:bg-kwar-electric/90 hover:shadow-glow">
              Experimentar grátis
            </a>
            <a href="#contact" className="rounded-full border border-white/[0.08] bg-white/[0.02] px-6 py-2.5 text-sm font-medium text-white/60 hover:text-white transition-all">
              Falar com vendas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FINAL CTA
// ============================================================================
// ============================================================================
// FOOTER
// ============================================================================
function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden border-t border-white/[0.04]">
      <div className="absolute inset-0 bg-gradient-to-t from-kwar-deep to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <img src="/images/logo-oficial.png" alt="Kwar-AI" className="w-10 h-10 object-contain" />
              <span className="font-display font-bold text-xl tracking-wider text-white">
                KWAR<span className="text-kwar-electric">-</span>AI
              </span>
            </a>
            <p className="text-kwar-gray text-sm leading-relaxed mb-4 max-w-sm">
              IA aplicada à saúde pública brasileira para impulsionar análises, vigilância e decisões baseadas em evidências.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Produto</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Visão geral', href: 'https://kwar-ai.com.br/#/epidbot' },
                { label: 'Preços', href: '#pricing' },
                { label: 'Documentação', href: '/files/EpiDBot_User_Manual.pdf' },
                { label: 'Web Summit', href: 'https://kwar-ai.com.br/#/epidbot-websummit' },
              ].map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('#') ? (
                    <button onClick={() => { const el = document.querySelector(link.href); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="text-kwar-gray text-sm hover:text-kwar-electric transition-colors">{link.label}</button>
                  ) : (
                    <a href={link.href} target={link.href.startsWith('/files') ? '_blank' : link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-kwar-gray text-sm hover:text-kwar-electric transition-colors">{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Empresa</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://kwar-ai.com.br/" target="_blank" rel="noopener noreferrer" className="text-kwar-gray text-sm hover:text-kwar-electric transition-colors">Conheça a Kwar-AI</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Termos de uso', href: '/#/termos' },
                { label: 'Privacidade', href: '/#/privacy' },
                { label: 'LGPD', href: '/#/lgpd' },
                { label: 'Limites de uso', href: '/#/limites-de-uso' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-kwar-gray text-sm hover:text-kwar-electric transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-kwar-gray text-sm">
            © {new Date().getFullYear()} Kwar-AI. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/company/kwar-ai" target="_blank" rel="noopener noreferrer" className="text-kwar-gray hover:text-kwar-electric transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const faqEn = [
  { q: 'What is EpidBot?', a: 'EpidBot is an AI-powered epidemiological intelligence platform developed to help researchers, healthcare professionals, universities, surveillance teams and institutions explore, analyze and visualize public health data more quickly and intuitively. The platform combines conversational AI, epidemiological analysis, data visualization, maps and spatial analytics, integration with public health databases, and insight and report generation — all in a modern, accessible interface.' },
  { q: 'Who is EpidBot for?', a: 'EpidBot was developed for researchers, epidemiologists, public health students, universities, laboratories, health departments, hospitals, international organizations, epidemiological surveillance teams and professionals who work with health data analysis.' },
  { q: 'Do I need programming skills to use it?', a: 'No. EpidBot was designed to let you analyze data through natural language. You can ask questions like "Compare dengue incidence between Brazil and Colombia from 2018 to 2024" or "Analyze mortality trends by age group" without writing code. Advanced users can also use the Python Sandbox on higher plans.' },
  { q: 'Does EpidBot replace statistical software?', a: 'EpidBot is not meant to fully replace specialized tools like R, Python, Stata or SPSS. The goal is to speed up epidemiological workflows, facilitate data exploration, generate initial insights and reduce technical barriers. In many cases, EpidBot complements traditional research tools.' },
  { q: 'What types of analysis can EpidBot perform?', a: 'EpidBot can help with: temporal analysis, spatial analysis, cross-region comparison, epidemiological trends, data visualization, chart generation, epidemiological maps, public dataset exploration, indicator comparison, epidemiological reporting, demographic analysis, pattern identification and climate/vector data exploration. Available features may vary by plan.' },
  { q: 'Which databases are available?', a: 'Depending on your plan, EpidBot can integrate data from DATASUS, Mosqlimate, WHO, PAHO/OPAS, ECDC, World Bank and other public health databases. New integrations are continuously added.' },
  { q: 'Can I upload my own data?', a: 'Yes. On paid plans, you can upload your own datasets for analysis. Supported formats include CSV, Excel and Parquet.' },
  { q: 'Does EpidBot generate maps?', a: 'Yes. The platform offers spatial visualization and epidemiological mapping. Depending on your plan, static maps, interactive maps, geographic analyses, regional visualizations and heatmaps may be available.' },
  { q: 'Does EpidBot generate reports?', a: 'Yes. Paid plans allow you to export analyses and reports. Depending on your plan, PDF export, CSV export, organizational reports and custom reports may be available.' },
  { q: 'Is team support available?', a: 'Yes. The Research Team plan was created for organizational collaboration. It includes up to 10 users, shared workspace, collaborative projects, internal dashboards, shared reports and priority support.' },
  { q: 'Is there an Enterprise plan?', a: 'Yes. The Enterprise plan is designed for public institutions, universities, hospitals, international organizations and large-scale epidemiological operations. It may include institutional dashboards, custom branding, custom reports, onboarding, training, dedicated support and custom deployment.' },
  { q: 'Does EpidBot use Artificial Intelligence?', a: 'Yes. EpidBot uses AI to assist with exploring, interpreting and analyzing epidemiological data. AI helps users ask questions in natural language, explore patterns, generate visualizations, accelerate analyses and organize insights.' },
  { q: 'Should AI results be validated?', a: 'Yes. While EpidBot is a powerful analytical support tool, results should always be critically interpreted and validated by qualified researchers or professionals. EpidBot does not replace scientific review, methodological validation or professional judgment.' },
  { q: 'Can EpidBot be used in academic research?', a: 'Yes. EpidBot was developed with scientific and epidemiological workflows in mind. The platform can assist with initial data exploration, hypothesis generation, trend visualization, report preparation and analytical organization.' },
  { q: 'Is there a free plan?', a: 'Yes. The Free plan provides initial access to EpidBot, public data exploration, basic epidemiological analyses and initial visualizations, with applicable usage limits.' },
  { q: 'What does the Max plan offer?', a: 'The Max plan is designed for advanced research and intensive use. It can include significantly more usage capacity, international data, Python Sandbox, priority processing, advanced exports and advanced analysis features.' },
  { q: 'What is the Python Sandbox?', a: 'The Python Sandbox is an advanced environment for programmatic analysis execution. This feature is aimed at users who want more advanced analyses, custom workflows and programmatic data manipulation. Availability may vary by plan.' },
  { q: 'Does EpidBot work in the browser?', a: 'Yes. EpidBot is accessible directly through your browser, no installation needed. The platform works online and can be used on desktop, tablets and mobile devices.' },
  { q: 'Is my data private?', a: 'Kwar-AI continuously works to protect data and improve platform security. Depending on your plan and deployment, additional governance and institutional control features may be available.' },
  { q: 'How can I request a demo?', a: 'You can contact the Kwar-AI team through the contact section below or via the "Schedule a demo" button in the Enterprise section.' },
  { q: 'How do I join the early adopter list?', a: 'During the promotional launch period, eligible users can use the EARLY100 coupon. Subject to availability.' },
  { q: 'Who developed EpidBot?', a: 'EpidBot is developed by Kwar-AI. The platform was created to transform epidemiological data into actionable intelligence through AI, data analysis and advanced visualization. EpidBot is constantly evolving, with new features, integrations and improvements continuously added.' },
  { q: 'Where are EpidBot servers located?', a: 'The platform infrastructure is currently hosted through Hetzner Cloud, with servers located in Finland. Kwar-AI adopts technical and organizational measures designed to protect platform availability, integrity and security.' },
  { q: 'I still have questions. How can I get in touch?', a: "You can request a demo, contact the team through the form below, use Kwar-AI\'s official channels or follow platform updates." },
];

const faqEs = [
  { q: '¿Qué es EpidBot?', a: 'EpidBot es una plataforma de inteligencia epidemiológica basada en IA desarrollada para ayudar a investigadores, profesionales de la salud, universidades, equipos de vigilancia e instituciones a explorar, analizar y visualizar datos de salud pública de forma más rápida e intuitiva. La plataforma combina IA conversacional, análisis epidemiológico, visualización de datos, mapas y análisis espaciales, integración con bases de datos públicas de salud y generación de insights e informes — todo en una interfaz moderna y accesible.' },
  { q: '¿Para quién fue creado EpidBot?', a: 'EpidBot fue desarrollado para investigadores, epidemiólogos, estudiantes de salud pública, universidades, laboratorios, secretarías de salud, hospitales, organizaciones internacionales, equipos de vigilancia epidemiológica y profesionales que trabajan con análisis de datos en salud.' },
  { q: '¿Necesito saber programación para usarlo?', a: 'No. EpidBot fue creado para permitir análisis mediante lenguaje natural. Puede hacer preguntas como "Compare la incidencia de dengue entre Brasil y Colombia entre 2018 y 2024" o "Analice tendencias de mortalidad por grupo de edad" sin necesidad de escribir código. Usuarios avanzados también pueden utilizar recursos como Sandbox Python en los planes superiores.' },
  { q: '¿EpidBot reemplaza el software estadístico?', a: 'EpidBot no pretende reemplazar completamente herramientas especializadas como R, Python, Stata o SPSS. El objetivo es acelerar flujos epidemiológicos, facilitar la exploración de datos, generar insights iniciales y reducir barreras técnicas para el análisis. En muchos casos, EpidBot puede complementar herramientas tradicionales de investigación.' },
  { q: '¿Qué tipos de análisis puede realizar EpidBot?', a: 'EpidBot puede ayudar con: análisis temporal, análisis espacial, comparación entre regiones, tendencias epidemiológicas, visualización de datos, generación de gráficos, mapas epidemiológicos, exploración de datasets públicos, comparación de indicadores, informes epidemiológicos, análisis demográfico, identificación de patrones y exploración de datos climáticos y vectoriales. Las funcionalidades disponibles pueden variar según el plan.' },
  { q: '¿Qué bases de datos están disponibles?', a: 'Dependiendo del plan, EpidBot puede integrar datos de DATASUS, Mosqlimate, WHO/OMS, PAHO/OPS, ECDC, World Bank y otras bases públicas de salud. Nuevas integraciones se agregan continuamente.' },
  { q: '¿Puedo subir mis propios datos?', a: 'Sí. En los planes pagos, es posible cargar datasets propios para análisis. Los formatos compatibles incluyen CSV, Excel y Parquet.' },
  { q: '¿EpidBot genera mapas?', a: 'Sí. La plataforma ofrece recursos de visualización espacial y mapas epidemiológicos. Según el plan, pueden estar disponibles mapas estáticos, mapas interactivos, análisis geográficos, visualizaciones regionales y mapas de calor.' },
  { q: '¿EpidBot genera informes?', a: 'Sí. Los planes pagos permiten exportación de análisis e informes. Según el plan, pueden estar disponibles exportación PDF, exportación CSV, informes organizacionales e informes personalizados.' },
  { q: '¿Hay soporte para equipos?', a: 'Sí. El plan Research Team fue creado para colaboración organizacional. Incluye hasta 10 usuarios, espacio de trabajo compartido, proyectos colaborativos, dashboards internos, informes compartidos y soporte prioritario.' },
  { q: '¿Existe un plan Enterprise?', a: 'Sí. El plan Enterprise está dirigido a instituciones públicas, universidades, hospitales, organizaciones internacionales y operaciones epidemiológicas a gran escala. Puede incluir dashboards institucionales, branding personalizado, informes personalizados, onboarding, capacitación, soporte dedicado e implementación personalizada.' },
  { q: '¿EpidBot utiliza Inteligencia Artificial?', a: 'Sí. EpidBot utiliza IA para ayudar en la exploración, interpretación y análisis de datos epidemiológicos. La IA ayuda a los usuarios a hacer preguntas en lenguaje natural, explorar patrones, generar visualizaciones, acelerar análisis y organizar insights.' },
  { q: '¿Los resultados de la IA deben ser validados?', a: 'Sí. Aunque EpidBot es una herramienta poderosa de apoyo analítico, los resultados siempre deben interpretarse críticamente y ser validados por investigadores o profesionales calificados. EpidBot no reemplaza la revisión científica, la validación metodológica ni el juicio profesional.' },
  { q: '¿EpidBot puede usarse en investigación académica?', a: 'Sí. EpidBot fue desarrollado pensando en flujos de trabajo científicos y epidemiológicos. La plataforma puede ayudar en la exploración inicial de datos, generación de hipótesis, visualización de tendencias, preparación de informes y organización analítica.' },
  { q: '¿Hay un plan gratuito?', a: 'Sí. El plan Free permite acceso inicial a EpidBot, exploración de datos públicos, análisis epidemiológicos básicos y visualizaciones iniciales, con límites de uso aplicables.' },
  { q: '¿Qué ofrece el plan Max?', a: 'El plan Max está orientado a investigación avanzada y uso intensivo. Puede incluir mucha más capacidad de uso, datos internacionales, Sandbox Python, procesamiento prioritario, exportaciones avanzadas y recursos avanzados de análisis.' },
  { q: '¿Qué es el Sandbox Python?', a: 'El Sandbox Python es un entorno avanzado para ejecución de análisis programáticos. Este recurso está dirigido a usuarios que desean análisis más avanzados, flujos personalizados y manipulación programática de datos. La disponibilidad puede variar según el plan.' },
  { q: '¿EpidBot funciona en el navegador?', a: 'Sí. EpidBot es accesible directamente desde el navegador, sin necesidad de instalación. La plataforma funciona en línea y puede usarse en computadoras, tablets y dispositivos móviles.' },
  { q: '¿Mis datos son privados?', a: 'Kwar-AI trabaja continuamente para proteger los datos y mejorar la seguridad de la plataforma. Según el plan y la implementación, pueden estar disponibles recursos adicionales de gobernanza y control institucional.' },
  { q: '¿Cómo puedo solicitar una demostración?', a: 'Puede comunicarse con el equipo de Kwar-AI a través de la sección de contacto a continuación o mediante el botón "Agendar demostración" en la sección Enterprise.' },
  { q: '¿Cómo entro en la lista de early adopters?', a: 'Durante el período promocional de lanzamiento, los usuarios elegibles pueden usar el cupón EARLY100. Sujeto a disponibilidad.' },
  { q: '¿Quién desarrolló EpidBot?', a: 'EpidBot es desarrollado por Kwar-AI. La plataforma fue creada para transformar datos epidemiológicos en inteligencia accionable a través de IA, análisis de datos y visualización avanzada. EpidBot está en constante evolución, con nuevas funcionalidades, integraciones y mejoras agregadas continuamente.' },
  { q: '¿Dónde están ubicados los servidores de EpidBot?', a: 'La infraestructura de la plataforma se encuentra actualmente alojada en Hetzner Cloud, con servidores ubicados en Finlandia. Kwar-AI adopta medidas técnicas y organizativas para proteger la disponibilidad, integridad y seguridad de la plataforma.' },
  { q: '¿Aún tengo dudas. ¿Cómo me comunico?', a: 'Puede solicitar una demostración, contactar al equipo a través del formulario a continuación, utilizar los canales oficiales de Kwar-AI o seguir las actualizaciones de la plataforma.' },
];

// ============================================================================
// FAQ
// ============================================================================
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal(0.1);
  const { lng } = useEpidbotCopy();

  const faqPt = [
    { q: 'O que é o EpidBot?', a: 'O EpidBot é uma plataforma de inteligência epidemiológica baseada em IA desenvolvida para ajudar pesquisadores, profissionais de saúde, universidades, equipes de vigilância e instituições a explorar, analisar e visualizar dados de saúde pública de forma mais rápida e intuitiva. A plataforma combina IA conversacional, análise epidemiológica, visualização de dados, mapas e análises espaciais, integração com bases públicas de saúde e geração de insights e relatórios — tudo em uma interface moderna e acessível.' },
    { q: 'Para quem o EpidBot foi criado?', a: 'O EpidBot foi desenvolvido para pesquisadores, epidemiologistas, estudantes de saúde pública, universidades, laboratórios, secretarias de saúde, hospitais, organizações internacionais, equipes de vigilância epidemiológica e profissionais que trabalham com análise de dados em saúde.' },
    { q: 'Preciso saber programação para usar?', a: 'Não. O EpidBot foi criado para permitir análises através de linguagem natural. Você pode fazer perguntas como "Compare a incidência de dengue entre Brasil e Colômbia entre 2018 e 2024" ou "Analise tendências de mortalidade por faixa etária" sem necessidade de escrever código. Usuários avançados também podem utilizar recursos como Sandbox Python nos planos superiores.' },
    { q: 'O EpidBot substitui softwares estatísticos?', a: 'O EpidBot não pretende substituir completamente ferramentas especializadas como R, Python, Stata ou SPSS. O objetivo é acelerar workflows epidemiológicos, facilitar exploração de dados, gerar insights iniciais e reduzir barreiras técnicas para análise. Em muitos casos, o EpidBot pode complementar ferramentas tradicionais de pesquisa.' },
    { q: 'Quais tipos de análise o EpidBot pode realizar?', a: 'O EpidBot pode auxiliar em: análise temporal, análise espacial, comparação entre regiões, tendências epidemiológicas, visualização de dados, geração de gráficos, mapas epidemiológicos, exploração de datasets públicos, comparação de indicadores, relatórios epidemiológicos, análise demográfica, identificação de padrões e exploração de dados climáticos e vetoriais. As funcionalidades disponíveis podem variar conforme o plano.' },
    { q: 'Quais bases de dados estão disponíveis?', a: 'Dependendo do plano, o EpidBot pode integrar dados provenientes de DATASUS, Mosqlimate, WHO/OMS, PAHO/OPAS, ECDC, World Bank e outras bases públicas de saúde. Novas integrações podem ser adicionadas continuamente.' },
    { q: 'Posso enviar meus próprios dados?', a: 'Sim. Nos planos pagos, é possível realizar upload de datasets próprios para análise. Formatos suportados incluem CSV, Excel e Parquet.' },
    { q: 'O EpidBot gera mapas?', a: 'Sim. A plataforma oferece recursos de visualização espacial e mapas epidemiológicos. Dependendo do plano, podem estar disponíveis mapas estáticos, mapas interativos, análises geográficas, visualizações regionais e heatmaps.' },
    { q: 'O EpidBot gera relatórios?', a: 'Sim. Os planos pagos permitem exportação de análises e relatórios. Dependendo do plano, podem estar disponíveis exportação PDF, exportação CSV, relatórios organizacionais e relatórios personalizados.' },
    { q: 'Existe suporte para equipes?', a: 'Sim. O plano Research Team foi criado para colaboração organizacional. Ele inclui até 10 usuários, workspace compartilhado, projetos colaborativos, dashboards internos, relatórios compartilhados e suporte prioritário.' },
    { q: 'Existe um plano Enterprise?', a: 'Sim. O plano Enterprise é voltado para instituições públicas, universidades, hospitais, organizações internacionais e operações epidemiológicas em larga escala. Pode incluir dashboards institucionais, branding personalizado, relatórios personalizados, onboarding, treinamento, suporte dedicado e implantação personalizada.' },
    { q: 'O EpidBot utiliza Inteligência Artificial?', a: 'Sim. O EpidBot utiliza IA para auxiliar na exploração, interpretação e análise de dados epidemiológicos. A IA ajuda usuários a fazer perguntas em linguagem natural, explorar padrões, gerar visualizações, acelerar análises e organizar insights.' },
    { q: 'Os resultados da IA devem ser validados?', a: 'Sim. Embora o EpidBot seja uma ferramenta poderosa de apoio analítico, resultados devem sempre ser interpretados criticamente e validados por pesquisadores ou profissionais qualificados. O EpidBot não substitui revisão científica, validação metodológica ou julgamento profissional.' },
    { q: 'O EpidBot pode ser usado em pesquisa acadêmica?', a: 'Sim. O EpidBot foi desenvolvido pensando em workflows científicos e epidemiológicos. A plataforma pode auxiliar em exploração inicial de dados, geração de hipóteses, visualização de tendências, preparação de relatórios e organização analítica.' },
    { q: 'Existe plano gratuito?', a: 'Sim. O plano Free permite acesso inicial ao EpidBot, exploração de dados públicos, análises epidemiológicas básicas e visualizações iniciais, com limites de uso aplicáveis.' },
    { q: 'O plano Max oferece o quê?', a: 'O plano Max é voltado para pesquisa avançada e uso intensivo. Ele pode incluir muito mais capacidade de uso, dados internacionais, Sandbox Python, processamento prioritário, exportações avançadas e recursos avançados de análise.' },
    { q: 'O que é o Sandbox Python?', a: 'O Sandbox Python é um ambiente avançado para execução de análises programáticas. Esse recurso é voltado para usuários que desejam análises mais avançadas, workflows personalizados e manipulação programática de dados. Disponibilidade pode variar conforme o plano.' },
    { q: 'O EpidBot funciona no navegador?', a: 'Sim. O EpidBot é acessível diretamente pelo navegador, sem necessidade de instalação. A plataforma funciona online e pode ser utilizada em desktop, tablets e dispositivos móveis.' },
    { q: 'Meus dados ficam privados?', a: 'A Kwar-AI trabalha continuamente para proteger dados e melhorar segurança da plataforma. Dependendo do plano e da implementação, recursos adicionais de governança e controle institucional podem estar disponíveis.' },
    { q: 'Como posso solicitar uma demonstração?', a: 'Você pode entrar em contato com a equipe da Kwar-AI através da seção de contato abaixo ou pelo botão "Agendar demonstração" na seção Enterprise.' },
    { q: 'Como entro na lista de early adopters?', a: 'Durante o período promocional de lançamento, usuários elegíveis podem utilizar o cupom EARLY100. Sujeito à disponibilidade.' },
    { q: 'Quem desenvolveu o EpidBot?', a: 'O EpidBot é desenvolvido pela Kwar-AI. A plataforma foi criada para transformar dados epidemiológicos em inteligência acionável através de IA, análise de dados e visualização avançada. O EpidBot está em constante evolução, com novas funcionalidades, integrações e melhorias sendo adicionadas continuamente.' },
    { q: 'Onde estão localizados os servidores do EpidBot?', a: 'Atualmente, a infraestrutura da plataforma é hospedada por meio da Hetzner Cloud, com servidores localizados na Finlândia. A Kwar-AI adota medidas técnicas e organizacionais para proteger a disponibilidade, integridade e segurança da plataforma.' },
    { q: 'Ainda tenho dúvidas. Como entro em contato?', a: 'Você pode solicitar uma demonstração, entrar em contato com a equipe através do formulário abaixo, utilizar os canais oficiais da Kwar-AI ou acompanhar atualizações da plataforma.' },
  ];

  const faqs = lng === 'en' ? faqEn : lng === 'es' ? faqEs : faqPt;

  return (
    <section ref={ref} className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,240,255,0.03),transparent_50%)]" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
            {lng === 'en' ? 'Frequently Asked Questions' : lng === 'es' ? 'Preguntas frecuentes' : 'Perguntas frequentes'}
          </h2>
          <p className="text-white/35 text-sm">
            {lng === 'en' ? 'Questions about features, plans, academic use and epidemiological intelligence.' : lng === 'es' ? 'Resuelva dudas sobre funcionalidades, planes, uso académico e inteligencia epidemiológica.' : 'Tire dúvidas sobre funcionalidades, planos, uso acadêmico e inteligência epidemiológica.'}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-500 ${
                openIndex === idx
                  ? 'border-kwar-electric/20 bg-white/[0.025] shadow-[0_0_30px_rgba(0,240,255,0.04)]'
                  : 'border-white/[0.04] bg-white/[0.01] hover:border-white/[0.07]'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 30}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className={`text-sm font-medium pr-4 transition-colors ${openIndex === idx ? 'text-kwar-electric' : 'text-white/70 hover:text-white'}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  openIndex === idx
                    ? 'border-kwar-electric/30 bg-kwar-electric/[0.06] text-kwar-electric rotate-45'
                    : 'border-white/[0.08] text-white/30'
                }`}>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16M4 12h16" /></svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 text-sm text-white/45 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CONTACT
// ============================================================================
function ContactSection() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const { t } = useEpidbotCopy();
  const [form, setForm] = useState({ name: '', email: '', institution: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'e76630d4-7e19-414a-97cb-9fd870607db0',
          name: form.name,
          email: form.email,
          institution: form.institution,
          subject: form.subject,
          message: form.message,
          from_name: 'EpidBot Website',
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', institution: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section ref={ref} id="contact" className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,184,0,0.04),transparent_50%),radial-gradient(circle_at_30%_70%,rgba(0,240,255,0.03),transparent_50%)]" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">{t.contact.title}</h2>
          <p className="text-white/35 text-sm max-w-lg mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className={`grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left — contact info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">{t.contact.infoLabel}</h3>
            <div className="space-y-4">
              <a href="mailto:contato@kwar-ai.com.br" className="group flex items-start gap-4 rounded-xl border border-white/[0.04] bg-white/[0.015] p-4 transition-all hover:border-white/[0.08] hover:bg-white/[0.025]">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-kwar-electric/[0.15] bg-kwar-electric/[0.04] text-kwar-electric/70 group-hover:text-kwar-electric group-hover:border-kwar-electric/30 transition-all flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">{t.contact.email}</p>
                  <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">contato@kwar-ai.com.br</p>
                </div>
              </a>

              <a href="https://wa.me/5531994981122" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-xl border border-white/[0.04] bg-white/[0.015] p-4 transition-all hover:border-white/[0.08] hover:bg-white/[0.025]">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-kwar-electric/[0.15] bg-kwar-electric/[0.04] text-kwar-electric/70 group-hover:text-kwar-electric group-hover:border-kwar-electric/30 transition-all flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </span>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">{t.contact.whatsapp}</p>
                  <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">(31) 99498-1122</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-white/[0.04] bg-white/[0.015] p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-kwar-electric/[0.15] bg-kwar-electric/[0.04] text-kwar-electric/70 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">{t.contact.location}</p>
                  <p className="text-sm text-white/60">Rio de Janeiro, RJ — Brasil</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs text-white/25 uppercase tracking-wider mb-4">{t.contact.socialLabel}</p>
              <div className="flex gap-3">
                <a href="https://linkedin.com/company/kwar-ai" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.05] bg-white/[0.015] text-white/30 hover:text-kwar-electric hover:border-kwar-electric/30 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://wa.me/5531994981122" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.05] bg-white/[0.015] text-white/30 hover:text-kwar-electric hover:border-kwar-electric/30 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === 'success' ? (
              <div className="rounded-2xl border border-kwar-electric/20 bg-kwar-electric/[0.03] p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-kwar-electric/10 border border-kwar-electric/20">
                  <Check className="h-6 w-6 text-kwar-electric" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{t.contact.successTitle}</h3>
                <p className="text-white/40 text-sm">{t.contact.successText}</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-kwar-electric hover:text-kwar-electric/80 transition-colors">
                  {t.contact.sendAgain}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="mb-2 block text-xs font-medium text-white/40">{t.contact.nameLabel} *</span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full h-11 rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 text-sm text-white outline-none transition-all placeholder:text-white/15 focus:border-kwar-electric/30 focus:shadow-[0_0_0_3px_rgba(0,240,255,0.04)]"
                      placeholder={t.contact.namePlaceholder}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-medium text-white/40">{t.contact.emailLabel} *</span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full h-11 rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 text-sm text-white outline-none transition-all placeholder:text-white/15 focus:border-kwar-electric/30 focus:shadow-[0_0_0_3px_rgba(0,240,255,0.04)]"
                      placeholder={t.contact.emailPlaceholder}
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-white/40">{t.contact.institutionLabel}</span>
                  <input
                    value={form.institution}
                    onChange={(e) => setForm({ ...form, institution: e.target.value })}
                    className="w-full h-11 rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 text-sm text-white outline-none transition-all placeholder:text-white/15 focus:border-kwar-electric/30 focus:shadow-[0_0_0_3px_rgba(0,240,255,0.04)]"
                    placeholder={t.contact.institutionPlaceholder}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-white/40">{t.contact.subjectLabel}</span>
                  <input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full h-11 rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 text-sm text-white outline-none transition-all placeholder:text-white/15 focus:border-kwar-electric/30 focus:shadow-[0_0_0_3px_rgba(0,240,255,0.04)]"
                    placeholder={t.contact.subjectPlaceholder}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-white/40">{t.contact.messageLabel} *</span>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/15 focus:border-kwar-electric/30 focus:shadow-[0_0_0_3px_rgba(0,240,255,0.04)] resize-none"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </label>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full h-11 rounded-xl bg-kwar-electric text-sm font-semibold text-kwar-deep transition-all hover:bg-kwar-electric/90 hover:shadow-glow disabled:opacity-50"
                >
                  {status === 'loading' ? t.contact.sending : t.contact.sendButton}
                </button>
                {status === 'error' && (
                  <p className="text-red-400/70 text-xs text-center">{t.contact.error}</p>
                )}
                <p className="text-white/15 text-[11px] text-center mt-4">
                  <a href="/#/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white/30 transition-colors">
                    {t.contact.privacy}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
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
      <Pricing />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
}
