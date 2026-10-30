import type { Locale } from './types';

export type DocItem = {
  title: string;
  text: string;
  href: string;
  external?: boolean;
};

export type DocGroup = {
  title: string;
  subtitle: string;
  items: DocItem[];
};

export type DocumentacaoContent = {
  seo: { title: string; description: string };
  hero: {
    badge: string;
    titleLine1: string;
    titleGradient: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryTo: string;
    note: string;
  };
  groups: DocGroup[];
  support: {
    title: string;
    text: string;
    cta: string;
    email: string;
  };
  cta: { title: string; text: string; primary: string; secondary: string };
};

const DOCS = 'https://deeplearn.ltd/epidbot-docs';
const MANUAL = 'https://deeplearn.ltd/epidbot-manual';
const APP_SETTINGS = 'https://epidbot.kwar-ai.com.br/settings#integrations';
const QGIS = 'https://plugins.qgis.org/plugins/epidbot/';
const EPIBENCH = 'https://doi.org/10.5281/zenodo.20694454';
const DEMAS = 'https://doi.org/10.5281/zenodo.22015850';
const YOUTUBE = 'https://youtu.be/_dih5HXtcPc';
const CONTACT_EMAIL = 'contato@kwar-ai.com.br';

export const documentacaoContent: Record<Locale, DocumentacaoContent> = {
  'pt-BR': {
    seo: {
      title: 'Documentação',
      description:
        'Documentação do EpidBot: primeiros passos, manual do usuário, referência de API, plugins QGIS e GeoLibre, implantação em Docker, benchmark EpiBench e tutoriais.',
    },
    hero: {
      badge: 'Documentação',
      titleLine1: 'Tudo o que é preciso',
      titleGradient: 'para usar com método.',
      subtitle:
        'Guias de primeiros passos, manual completo, referência de API, implantação e material de treinamento — em português, inglês e espanhol.',
      primaryCta: 'Abrir a documentação',
      secondaryCta: 'Ler o manual',
      secondaryTo: MANUAL,
      note: 'A documentação descreve a versão 2.8.0 da plataforma. Comportamentos e telas podem variar em ambientes institucionais configurados pelo parceiro.',
    },
    groups: [
      {
        title: 'Primeiros passos',
        subtitle: 'Para quem está começando hoje.',
        items: [
          {
            title: 'Guia de primeiros passos',
            text: 'Criar a conta, fazer a primeira pergunta, entender o que a plataforma entrega em cada resposta.',
            href: `${DOCS}/pt/getting-started/quickstart/`,
            external: true,
          },
          {
            title: 'Manual do usuário',
            text: 'Referência completa de telas, planos, limites, compartilhamento e solução de problemas.',
            href: MANUAL,
            external: true,
          },
          {
            title: 'Manual em português',
            text: 'A mesma referência, em português, para consulta rápida durante a rotina.',
            href: `${MANUAL}/manual-pt/`,
            external: true,
          },
        ],
      },
      {
        title: 'Dados e análise',
        subtitle: 'De onde vêm os números e como eles são calculados.',
        items: [
          {
            title: 'Catálogo de fontes',
            text: 'As 41 fontes abertas da biblioteca epidatasets, com cobertura e granularidade de cada uma.',
            href: `${DOCS}/api/catalog/`,
            external: true,
          },
          {
            title: 'Limites de uso',
            text: 'Como a capacidade de cada plano é calculada, o que consome mais recursos e o que acontece ao esgotar.',
            href: '/limites-de-uso',
          },
          {
            title: 'Planos e recursos',
            text: 'O que está incluído em cada plano, condições de desconto acadêmico e política de cancelamento.',
            href: '/planos',
          },
        ],
      },
      {
        title: 'API e integrações',
        subtitle: 'Para levar a análise para dentro dos seus sistemas.',
        items: [
          {
            title: 'API REST',
            text: 'Endpoints de conversa, upload e catálogo, com autenticação por chave e exemplos de requisição.',
            href: `${DOCS}/api/rest/`,
            external: true,
          },
          {
            title: 'Base de conhecimento',
            text: 'Como enviar documentos próprios e fazer a plataforma responder a partir deles.',
            href: `${DOCS}/api/knowledgebase/`,
            external: true,
          },
          {
            title: 'Plugin para QGIS',
            text: 'Uso direto no QGIS, disponível no repositório oficial de plugins a partir do plano Pro.',
            href: QGIS,
            external: true,
          },
          {
            title: 'Suas chaves de API',
            text: 'Criação e revogação de chaves em Configurações → Integrações, na própria plataforma.',
            href: APP_SETTINGS,
            external: true,
          },
        ],
      },
      {
        title: 'Implantação',
        subtitle: 'Para equipes de infraestrutura e ambientes institucionais.',
        items: [
          {
            title: 'Arquitetura',
            text: 'Componentes da plataforma, fluxo de dados e pontos de extensão.',
            href: `${DOCS}/dev/architecture/`,
            external: true,
          },
          {
            title: 'Docker',
            text: 'Imagem, variáveis de ambiente e execução em contêiner.',
            href: `${DOCS}/deploy/docker/`,
            external: true,
          },
          {
            title: 'Servidor MCP',
            text: 'Exposição das ferramentas da plataforma para agentes e assistentes externos.',
            href: `${DOCS}/admin/mcp-server/`,
            external: true,
          },
        ],
      },
      {
        title: 'Transparência e referência',
        subtitle: 'Como medimos e como você verifica o que dizemos.',
        items: [
          {
            title: 'EpiBench',
            text: 'O benchmark público de agentes em epidemiologia: 21 tarefas e o escore de cada versão.',
            href: EPIBENCH,
            external: true,
          },
          {
            title: 'Tutoriais em vídeo',
            text: 'Demonstrações curtas de análises reais feitas na plataforma.',
            href: YOUTUBE,
            external: true,
          },
          {
            title: 'Tutorial DEMAS',
            text: 'Guia passo a passo para acessar a API DEMAS pelo EpidBot.',
            href: DEMAS,
            external: true,
          },
          {
            title: 'Privacidade e LGPD',
            text: 'Política de privacidade, tratamento de dados e compromissos de conformidade.',
            href: '/lgpd',
          },
        ],
      },
    ],
    support: {
      title: 'Não encontrou o que precisava?',
      text: 'A equipe técnica responde dúvidas sobre uso, integração e implantação — inclusive para ambientes institucionais com requisitos próprios.',
      cta: 'Falar com a equipe',
      email: CONTACT_EMAIL,
    },
    cta: {
      title: 'Leia menos, teste mais',
      text: 'A forma mais rápida de entender a plataforma é fazer uma pergunta real. Crie a conta gratuita e volte à documentação quando precisar do detalhe.',
      primary: 'Começar grátis',
      secondary: 'Ver planos',
    },
  },

  en: {
    seo: {
      title: 'Documentation',
      description:
        'EpidBot documentation: getting started, user manual, API reference, QGIS and GeoLibre plugins, Docker deployment, the EpiBench benchmark and tutorials.',
    },
    hero: {
      badge: 'Documentation',
      titleLine1: 'Everything you need',
      titleGradient: 'to work with method.',
      subtitle:
        'Getting-started guides, the full manual, API reference, deployment notes and training material — in Portuguese, English and Spanish.',
      primaryCta: 'Open the documentation',
      secondaryCta: 'Read the manual',
      secondaryTo: MANUAL,
      note: 'The documentation describes platform version 2.8.0. Behaviour and screens may differ in institutional environments configured by the partner.',
    },
    groups: [
      {
        title: 'Getting started',
        subtitle: 'For anyone starting today.',
        items: [
          {
            title: 'Quickstart guide',
            text: 'Create the account, ask the first question and understand what each answer delivers.',
            href: `${DOCS}/getting-started/quickstart/`,
            external: true,
          },
          {
            title: 'User manual',
            text: 'Complete reference for screens, plans, limits, sharing and troubleshooting.',
            href: MANUAL,
            external: true,
          },
          {
            title: 'Manual in Portuguese',
            text: 'The same reference in Portuguese, for quick consultation during the routine.',
            href: `${MANUAL}/manual-pt/`,
            external: true,
          },
        ],
      },
      {
        title: 'Data and analysis',
        subtitle: 'Where the numbers come from and how they are computed.',
        items: [
          {
            title: 'Source catalogue',
            text: 'The 41 open sources in the epidatasets library, with coverage and granularity for each.',
            href: `${DOCS}/api/catalog/`,
            external: true,
          },
          {
            title: 'Usage limits',
            text: 'How each plan capacity is calculated, what consumes most resources and what happens when it runs out.',
            href: '/limites-de-uso',
          },
          {
            title: 'Plans and features',
            text: 'What each plan includes, academic discount conditions and the cancellation policy.',
            href: '/planos',
          },
        ],
      },
      {
        title: 'API and integrations',
        subtitle: 'To bring the analysis into your own systems.',
        items: [
          {
            title: 'REST API',
            text: 'Chat, upload and catalogue endpoints, with key authentication and request examples.',
            href: `${DOCS}/api/rest/`,
            external: true,
          },
          {
            title: 'Knowledge base',
            text: 'How to upload your own documents and have the platform answer from them.',
            href: `${DOCS}/api/knowledgebase/`,
            external: true,
          },
          {
            title: 'QGIS plugin',
            text: 'Use straight inside QGIS, published in the official plugin repository from the Pro plan up.',
            href: QGIS,
            external: true,
          },
          {
            title: 'Your API keys',
            text: 'Create and revoke keys in Settings → Integrations, inside the platform.',
            href: APP_SETTINGS,
            external: true,
          },
        ],
      },
      {
        title: 'Deployment',
        subtitle: 'For infrastructure teams and institutional environments.',
        items: [
          {
            title: 'Architecture',
            text: 'Platform components, data flow and extension points.',
            href: `${DOCS}/dev/architecture/`,
            external: true,
          },
          {
            title: 'Docker',
            text: 'Image, environment variables and running in a container.',
            href: `${DOCS}/deploy/docker/`,
            external: true,
          },
          {
            title: 'MCP server',
            text: 'Exposing the platform tools to external agents and assistants.',
            href: `${DOCS}/admin/mcp-server/`,
            external: true,
          },
        ],
      },
      {
        title: 'Transparency and reference',
        subtitle: 'How we measure, and how you check what we say.',
        items: [
          {
            title: 'EpiBench',
            text: 'The public benchmark for agents in epidemiology: 21 tasks and the score of each release.',
            href: EPIBENCH,
            external: true,
          },
          {
            title: 'Video tutorials',
            text: 'Short demonstrations of real analyses run on the platform.',
            href: YOUTUBE,
            external: true,
          },
          {
            title: 'DEMAS tutorial',
            text: 'A step-by-step guide to reach the DEMAS API through EpidBot.',
            href: DEMAS,
            external: true,
          },
          {
            title: 'Privacy and LGPD',
            text: 'Privacy policy, data handling and compliance commitments.',
            href: '/lgpd',
          },
        ],
      },
    ],
    support: {
      title: 'Did not find what you needed?',
      text: 'The technical team answers questions on usage, integration and deployment — including institutional environments with specific requirements.',
      cta: 'Talk to the team',
      email: CONTACT_EMAIL,
    },
    cta: {
      title: 'Read less, test more',
      text: 'The fastest way to understand the platform is to ask a real question. Create the free account and come back to the docs when you need the detail.',
      primary: 'Start for free',
      secondary: 'See plans',
    },
  },

  es: {
    seo: {
      title: 'Documentación',
      description:
        'Documentación de EpidBot: primeros pasos, manual del usuario, referencia de API, complementos QGIS y GeoLibre, despliegue en Docker, benchmark EpiBench y tutoriales.',
    },
    hero: {
      badge: 'Documentación',
      titleLine1: 'Todo lo necesario',
      titleGradient: 'para trabajar con método.',
      subtitle:
        'Guías de primeros pasos, manual completo, referencia de API, despliegue y material de capacitación — en portugués, inglés y español.',
      primaryCta: 'Abrir la documentación',
      secondaryCta: 'Leer el manual',
      secondaryTo: MANUAL,
      note: 'La documentación describe la versión 2.8.0 de la plataforma. Comportamientos y pantallas pueden variar en entornos institucionales configurados por el socio.',
    },
    groups: [
      {
        title: 'Primeros pasos',
        subtitle: 'Para quien empieza hoy.',
        items: [
          {
            title: 'Guía de primeros pasos',
            text: 'Crear la cuenta, hacer la primera pregunta y entender qué entrega cada respuesta.',
            href: `${DOCS}/es/getting-started/quickstart/`,
            external: true,
          },
          {
            title: 'Manual del usuario',
            text: 'Referencia completa de pantallas, planes, límites, compartición y solución de problemas.',
            href: MANUAL,
            external: true,
          },
          {
            title: 'Manual en portugués',
            text: 'La misma referencia en portugués, para consulta rápida durante la rutina.',
            href: `${MANUAL}/manual-pt/`,
            external: true,
          },
        ],
      },
      {
        title: 'Datos y análisis',
        subtitle: 'De dónde vienen los números y cómo se calculan.',
        items: [
          {
            title: 'Catálogo de fuentes',
            text: 'Las 41 fuentes abiertas de la biblioteca epidatasets, con cobertura y granularidad de cada una.',
            href: `${DOCS}/api/catalog/`,
            external: true,
          },
          {
            title: 'Límites de uso',
            text: 'Cómo se calcula la capacidad de cada plan, qué consume más recursos y qué ocurre al agotarse.',
            href: '/limites-de-uso',
          },
          {
            title: 'Planes y funciones',
            text: 'Qué incluye cada plan, condiciones del descuento académico y política de cancelación.',
            href: '/planos',
          },
        ],
      },
      {
        title: 'API e integraciones',
        subtitle: 'Para llevar el análisis a sus sistemas.',
        items: [
          {
            title: 'API REST',
            text: 'Endpoints de conversación, carga y catálogo, con autenticación por clave y ejemplos de solicitud.',
            href: `${DOCS}/api/rest/`,
            external: true,
          },
          {
            title: 'Base de conocimiento',
            text: 'Cómo subir documentos propios y hacer que la plataforma responda a partir de ellos.',
            href: `${DOCS}/api/knowledgebase/`,
            external: true,
          },
          {
            title: 'Complemento para QGIS',
            text: 'Uso directo en QGIS, publicado en el repositorio oficial de complementos desde el plan Pro.',
            href: QGIS,
            external: true,
          },
          {
            title: 'Sus claves de API',
            text: 'Creación y revocación de claves en Configuración → Integraciones, dentro de la plataforma.',
            href: APP_SETTINGS,
            external: true,
          },
        ],
      },
      {
        title: 'Despliegue',
        subtitle: 'Para equipos de infraestructura y entornos institucionales.',
        items: [
          {
            title: 'Arquitectura',
            text: 'Componentes de la plataforma, flujo de datos y puntos de extensión.',
            href: `${DOCS}/dev/architecture/`,
            external: true,
          },
          {
            title: 'Docker',
            text: 'Imagen, variables de entorno y ejecución en contenedor.',
            href: `${DOCS}/deploy/docker/`,
            external: true,
          },
          {
            title: 'Servidor MCP',
            text: 'Exposición de las herramientas de la plataforma a agentes y asistentes externos.',
            href: `${DOCS}/admin/mcp-server/`,
            external: true,
          },
        ],
      },
      {
        title: 'Transparencia y referencia',
        subtitle: 'Cómo medimos y cómo usted verifica lo que decimos.',
        items: [
          {
            title: 'EpiBench',
            text: 'El benchmark público de agentes en epidemiología: 21 tareas y la puntuación de cada versión.',
            href: EPIBENCH,
            external: true,
          },
          {
            title: 'Tutoriales en video',
            text: 'Demostraciones cortas de análisis reales hechos en la plataforma.',
            href: YOUTUBE,
            external: true,
          },
          {
            title: 'Tutorial DEMAS',
            text: 'Guía paso a paso para acceder a la API DEMAS a través de EpidBot.',
            href: DEMAS,
            external: true,
          },
          {
            title: 'Privacidad y LGPD',
            text: 'Política de privacidad, tratamiento de datos y compromisos de conformidad.',
            href: '/lgpd',
          },
        ],
      },
    ],
    support: {
      title: '¿No encontró lo que necesitaba?',
      text: 'El equipo técnico responde dudas sobre uso, integración y despliegue — incluso para entornos institucionales con requisitos propios.',
      cta: 'Hablar con el equipo',
      email: CONTACT_EMAIL,
    },
    cta: {
      title: 'Lea menos, pruebe más',
      text: 'La forma más rápida de entender la plataforma es hacer una pregunta real. Cree la cuenta gratuita y vuelva a la documentación cuando necesite el detalle.',
      primary: 'Comenzar gratis',
      secondary: 'Ver planes',
    },
  },
};
