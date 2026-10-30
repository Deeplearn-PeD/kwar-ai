import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

type NavItem = {
  label: string;
  to: string;
  external?: boolean;
};

/**
 * Main site navigation — rendered once in App.tsx so every route
 * (home, product pages, /hub, /planos, legal pages) carries the same bar.
 * Anchors are gone: every entry is a real route.
 */
export function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement | null>(null);

  const isHome = location.pathname === '/';

  const primaryItems: NavItem[] = [
    { label: t('navbar.home', 'Início'), to: '/' },
    { label: t('navbar.epidbot', 'EpidBot'), to: '/epidbot' },
    { label: t('navbar.hub', 'Hub'), to: '/hub' },
    { label: t('navbar.epidash', 'EpiDash'), to: '/epidash' },
  ];

  const solutionItems: NavItem[] = [
    { label: t('navbar.solutionsMenu.hospitals', 'Hospitais'), to: '/hospitais' },
    { label: t('navbar.solutionsMenu.research', 'Pesquisa'), to: '/pesquisa' },
    { label: t('navbar.solutionsMenu.globalHealth', 'Saúde Global'), to: '/saude-global' },
    {
      label: t('navbar.solutionsMenu.surveillance', 'Vigilância Epidemiológica'),
      to: '/vigilancia-epidemiologica',
    },
    { label: t('navbar.solutionsMenu.docs', 'Documentação'), to: '/documentacao' },
    { label: t('navbar.webSummit', 'Web Summit Rio 2026'), to: '/epidbot-websummit' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSolutionsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  const solid = isScrolled || !isHome || isMobileMenuOpen;

  const linkClass = (to: string) =>
    `px-3 py-2 text-sm font-medium transition-colors duration-300 relative group ${
      isActive(to) ? 'text-kwar-electric' : 'text-kwar-gray hover:text-kwar-electric'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-kwar-deep/95 backdrop-blur-xl border-b border-kwar-electric/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Kwar-AI">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <img
                src="/images/logo-oficial.png"
                alt="Kwar-AI Logo"
                className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-white">
              KWAR<span className="text-kwar-electric">-</span>AI
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {primaryItems.map((item) => (
              <Link key={item.to} to={item.to} className={linkClass(item.to)}>
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-kwar-electric transition-all duration-300 ${
                    isActive(item.to) ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                  }`}
                />
              </Link>
            ))}

            {/* Solutions dropdown */}
            <div className="relative" ref={solutionsRef}>
              <button
                onClick={() => setIsSolutionsOpen((open) => !open)}
                aria-expanded={isSolutionsOpen}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 inline-flex items-center gap-1 ${
                  solutionItems.some((item) => isActive(item.to))
                    ? 'text-kwar-electric'
                    : 'text-kwar-gray hover:text-kwar-electric'
                }`}
              >
                {t('navbar.solutions', 'Soluções')}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isSolutionsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isSolutionsOpen && (
                <div className="absolute left-0 top-full mt-2 w-60 rounded-xl border border-white/10 bg-kwar-deep/95 backdrop-blur-xl shadow-2xl py-2">
                  {solutionItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsSolutionsOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActive(item.to)
                          ? 'text-kwar-electric bg-white/[0.03]'
                          : 'text-kwar-gray hover:text-white hover:bg-white/[0.03]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/planos"
              className={linkClass('/planos')}
            >
              {t('navbar.plans', 'Planos')}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-kwar-electric transition-all duration-300 ${
                  isActive('/planos') ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                }`}
              />
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="https://epidbot.kwar-ai.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-medium text-kwar-gray hover:text-kwar-electric transition-colors duration-300"
            >
              {t('navbar.login', 'Entrar')}
            </a>
            <a
              href="https://epidbot.kwar-ai.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              {t('navbar.startFree', 'Começar grátis')}
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="lg:hidden p-2 text-kwar-gray hover:text-kwar-electric transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[85vh] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-kwar-deep/95 backdrop-blur-xl border-t border-kwar-electric/20 px-4 py-4">
          {primaryItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-3 border-b border-white/5 transition-colors ${
                isActive(item.to) ? 'text-kwar-electric' : 'text-kwar-gray hover:text-kwar-electric'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="py-3 border-b border-white/5">
            <div className="text-xs uppercase tracking-wider text-white/30 mb-2">
              {t('navbar.solutions', 'Soluções')}
            </div>
            <div className="space-y-1">
              {solutionItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-1.5 text-sm transition-colors ${
                    isActive(item.to)
                      ? 'text-kwar-electric'
                      : 'text-kwar-gray hover:text-kwar-electric'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/planos"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-3 border-b border-white/5 transition-colors ${
              isActive('/planos') ? 'text-kwar-electric' : 'text-kwar-gray hover:text-kwar-electric'
            }`}
          >
            {t('navbar.plans', 'Planos')}
          </Link>

          <a
            href="https://epidbot.kwar-ai.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 border-b border-white/5 text-kwar-gray hover:text-kwar-electric transition-colors"
          >
            {t('navbar.login', 'Entrar')}
          </a>

          <div className="pt-3 pb-2 border-b border-white/5">
            <LanguageSwitcher />
          </div>

          <a
            href="https://epidbot.kwar-ai.com.br/register"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary w-full mt-4 text-sm text-center block"
          >
            {t('navbar.startFree', 'Começar grátis')}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
