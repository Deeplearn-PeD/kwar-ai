import { Heart, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function Footer() {
  const { t } = useTranslation();
  
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const footerLinks = {
    produtos: [
      { label: t('footer.links.products.epidbot'), href: '/epidbot-landing', isLanding: true },
      { label: t('footer.links.products.courses'), href: '#cursos' },
    ],
    empresa: [
      { label: t('footer.links.company.about'), href: '#about' },
      { label: t('footer.links.company.team'), href: '#equipe' },
      { label: t('footer.links.company.contact'), href: '#contact' },
    ],
    recursos: [
      { label: t('footer.links.resources.infoDengue'), href: 'https://info.dengue.mat.br', external: true },
      { label: t('footer.links.resources.mosqlimate'), href: 'https://mosqlimate.org', external: true },
      { label: t('footer.links.resources.pysus'), href: 'https://pysus.readthedocs.io/', external: true },
    ],
    legal: [
      { label: t('footer.links.legal.terms'), href: '#' },
      { label: t('footer.links.legal.privacy'), href: '#' },
      { label: t('footer.links.legal.lgpd'), href: '#' },
    ],
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
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-2 text-sm text-kwar-gray">
              <span>{t('footer.madeWith')}</span>
              <Heart className="w-4 h-4 text-kwar-red fill-kwar-red" />
              <span>{t('footer.inBrazil')}</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.links.products.title')}</h4>
            <ul className="space-y-2">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  {link.isLanding ? (
                    <Link
                      to={link.href}
                      className="text-kwar-gray text-sm hover:text-kwar-electric transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
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
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.links.company.title')}</h4>
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
            <h4 className="text-white font-semibold mb-4">{t('footer.links.resources.title')}</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-kwar-gray text-sm hover:text-kwar-electric transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-kwar-gray text-sm">
            {t('footer.copyright', { year: new Date().getFullYear() })}
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
            {t('footer.slogan.line1')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
