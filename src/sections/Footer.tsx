import { Heart, ExternalLink } from 'lucide-react';

const footerLinks = {
  produtos: [
    { label: 'API de Saúde', href: '#products' },
    { label: 'Curso de IA', href: '#products' },
    { label: 'Plataforma', href: '#pricing' },
  ],
  empresa: [
    { label: 'Sobre Nós', href: '#about' },
    { label: 'Como Funciona', href: '#how-it-works' },
    { label: 'Contato', href: '#contact' },
  ],
  recursos: [
    { label: 'Documentação API', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Cases', href: '#' },
  ],
  legal: [
    { label: 'Termos de Uso', href: '#' },
    { label: 'Privacidade', href: '#' },
    { label: 'LGPD', href: '#' },
  ],
};

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-kwar-deep to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kwar-electric/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo-oficial.png" 
                alt="Kwar-AI Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-display font-bold text-xl tracking-wider text-white">
                KWAR<span className="text-kwar-electric">-</span>AI
              </span>
            </a>
            <p className="text-kwar-gray text-sm leading-relaxed mb-6 max-w-sm">
              Inteligência epidemiológica de origem brasileira. Antecipamos surtos de doenças
              com até 21 dias de antecedência, combinando dados climáticos, comportamentais
              e de saúde.
            </p>
            <div className="flex items-center gap-2 text-sm text-kwar-gray">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-kwar-red fill-kwar-red" />
              <span>no Brasil</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-kwar-gray text-sm hover:text-kwar-electric transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-kwar-gray text-sm hover:text-kwar-electric transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-kwar-gray text-sm hover:text-kwar-electric transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-kwar-gray text-sm">
            © {new Date().getFullYear()} Kwar-AI. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-kwar-gray text-sm hover:text-kwar-electric transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Slogan */}
        <div className="mt-12 text-center">
          <p className="font-display text-2xl lg:text-3xl font-bold text-gradient">
            Ilumine o futuro.
          </p>
          <p className="text-kwar-gray text-sm mt-2">
            O amanhecer dos dados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
