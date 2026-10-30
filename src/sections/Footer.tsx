import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function Footer() {
  const { t } = useTranslation();

  // Anchors live on the home page, so they are expressed as a scroll query
  // parameter — that keeps them working from every route.
  const scrollToSection = (id: string) => `/?scroll=${id}`;

  const footerLinks = {
    produtos: [
      { label: t('footer.links.products.epidbot'), href: scrollToSection('epidbot-visual') },
      { label: t('footer.links.products.epidash'), href: '/epidash' },
      { label: t('footer.links.products.solutions'), href: scrollToSection('solutions') },
      { label: t('footer.links.products.docs'), href: '/documentacao' },
      { label: t('footer.links.products.webSummit'), href: '/epidbot-websummit' },
    ],
    empresa: [
      { label: t('footer.links.company.home'), href: scrollToSection('hero') },
      { label: t('footer.links.company.about'), href: scrollToSection('our-story') },
      { label: t('footer.links.company.team'), href: scrollToSection('equipe') },
      { label: t('footer.links.company.contact'), href: scrollToSection('contact') },
      { label: t('footer.links.company.press'), href: '/jornalistas' },
    ],
    legal: [
      { label: t('footer.links.legal.terms'), href: '/termos' },
      { label: t('footer.links.legal.privacy'), href: '/privacy' },
      { label: t('footer.links.legal.lgpd'), href: '/lgpd' },
      { label: t('footer.links.legal.limits'), href: '/limites-de-uso' },
    ],
  };

  return (
    <footer className="relative py-16 bg-[#050a10] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-kwar-deep to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kwar-electric/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo-oficial.png" 
                alt="Kwar-AI Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-display font-bold text-xl tracking-wider text-white">
                KWAR<span className="text-kwar-electric">-</span>AI
              </span>
            </Link>
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
                  <Link
                    to={link.href}
                    className="text-kwar-gray text-sm hover:text-kwar-electric transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.links.company.title')}</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-kwar-gray text-sm hover:text-kwar-electric transition-colors"
                  >
                    {link.label}
                  </Link>
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
              <Link
                key={link.label}
                to={link.href}
                className="text-kwar-gray text-sm hover:text-kwar-electric transition-colors"
              >
                {link.label}
              </Link>
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
