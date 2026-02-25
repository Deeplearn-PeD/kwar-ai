import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Produtos', href: '#products' },
  { label: 'Como Funciona', href: '#how-it-works' },
  { label: 'Planos', href: '#pricing' },
  { label: 'Contato', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

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
          ? 'bg-kwar-deep/90 backdrop-blur-xl border-b border-kwar-electric/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <img 
                src="/images/logo-oficial.png" 
                alt="Kwar-AI Logo" 
                className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-kwar-electric/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-white">
              KWAR<span className="text-kwar-electric">-</span>AI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-4 py-2 text-sm font-medium text-kwar-gray hover:text-kwar-electric transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-kwar-electric transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary text-sm"
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-kwar-gray hover:text-kwar-electric transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-kwar-deep/95 backdrop-blur-xl border-t border-kwar-electric/20 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="block py-3 text-kwar-gray hover:text-kwar-electric transition-colors border-b border-white/5 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-primary w-full mt-4 text-sm"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
