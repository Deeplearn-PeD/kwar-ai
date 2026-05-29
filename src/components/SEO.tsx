import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://kwar-ai.com.br';
const DEFAULT_OG_IMAGE = '/images/logo-oficial.png';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogType?: string;
}

const defaultDescription = 'Inteligência epidemiológica com IA para pesquisadores, hospitais e organizações globais de saúde.';

export function SEO({ title, description, path = '', ogImage, ogType = 'website' }: SEOProps) {
  const fullPath = `${SITE_URL}/#${path}`;
  const fullTitle = `${title} | Kwar-AI`;
  const image = ogImage || DEFAULT_OG_IMAGE;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={fullPath} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={fullPath} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Kwar-AI" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={fullImage} />

      {/* Hreflang */}
      <link rel="alternate" href={`${SITE_URL}/#${path}`} hrefLang="pt-BR" />
      <link rel="alternate" href={`${SITE_URL}/en/#${path}`} hrefLang="en" />
      <link rel="alternate" href={`${SITE_URL}/es/#${path}`} hrefLang="es" />
      <link rel="alternate" href={`${SITE_URL}/#${path}`} hrefLang="x-default" />
    </Helmet>
  );
}
