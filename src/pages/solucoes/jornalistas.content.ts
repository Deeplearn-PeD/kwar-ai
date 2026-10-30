import { FileSpreadsheet, LineChart, MessageSquare, Search } from 'lucide-react';
import type { Locale } from './types';

export type JornalistasContent = {
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
  facts: {
    title: string;
    subtitle: string;
    items: Array<{ label: string; value: string }>;
  };
  help: {
    title: string;
    subtitle: string;
    items: Array<{ icon: typeof LineChart; title: string; text: string }>;
  };
  assets: {
    title: string;
    subtitle: string;
    rights: string;
    items: Array<{ title: string; text: string; href: string; label: string }>;
  };
  experts: {
    title: string;
    subtitle: string;
    items: Array<{ name: string; role: string; text: string }>;
  };
  principles: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; text: string }>;
  };
  contact: {
    title: string;
    text: string;
    cta: string;
    email: string;
  };
  cta: { title: string; text: string; primary: string; secondary: string };
};

const SITE = 'https://kwar-ai.com.br/images';
const EMAIL = 'contato@kwar-ai.com.br';

export const jornalistasContent: Record<Locale, JornalistasContent> = {
  'pt-BR': {
    seo: {
      title: 'Jornalistas e Mídia',
      description:
        'Materiais de imprensa da Kwar-AI: números verificados sobre o EpidBot, identidade visual para download, especialistas para entrevista e contato direto com a equipe técnica.',
    },
    hero: {
      badge: 'Jornalistas e Mídia',
      titleLine1: 'Dados de saúde pública',
      titleGradient: 'com fonte e método declarados.',
      subtitle:
        'Se você escreve sobre epidemiologia, IA na saúde ou dados abertos, aqui estão os números que podemos sustentar, os materiais visuais e o contato direto com quem desenvolve a plataforma.',
      primaryCta: 'Falar com a equipe',
      secondaryCta: 'Conhecer o EpidBot',
      secondaryTo: '/epidbot',
      note: 'Prazo usual de resposta: um dia útil. Para dados de série temporal, informe agravo, território e período desejados.',
    },
    facts: {
      title: 'Números que podemos sustentar',
      subtitle:
        'Todos verificáveis no código do produto, nos dados públicos citados ou em registro público. Se um número mudar, esta página é atualizada.',
      items: [
        { label: 'Empresa', value: 'Kwar-AI — Deeplearn Pesquisa e Desenvolvimento Ltda., Rio de Janeiro (RJ)' },
        { label: 'Produto', value: 'EpidBot, versão 2.8.0 — assistente de análise para saúde pública' },
        { label: 'Fontes de dados', value: '41 fontes abertas, incluindo DATASUS, OMS, OPAS, CDC, ECDC e Africa CDC' },
        { label: 'Ferramentas de análise', value: '321 ferramentas disponíveis para o agente' },
        { label: 'Validação internacional', value: 'Piloto com o Escritório Regional do Mediterrâneo Oriental da OMS (EMRO), em 22 países' },
        { label: 'Benchmark público', value: 'EpiBench: 418 de 550 pontos (76%) na avaliação de junho de 2026' },
        { label: 'Código aberto', value: 'epidatasets, epimodels e epigrass publicados em repositórios abertos' },
        { label: 'Idiomas', value: 'Interface e documentação em português, inglês e espanhol' },
      ],
    },
    help: {
      title: 'Como podemos ajudar a pauta',
      subtitle: 'Sem intermediários: as respostas técnicas vêm de quem constrói a plataforma.',
      items: [
        {
          icon: LineChart,
          title: 'Dados e gráficos',
          text: 'Séries de agravos, internações e mortalidade a partir de fontes oficiais, com a fonte e o método declarados em cada gráfico.',
        },
        {
          icon: MessageSquare,
          title: 'Comentário técnico',
          text: 'Contexto sobre surtos, tendências e uso de IA em saúde pública, com os limites do que o dado permite afirmar.',
        },
        {
          icon: Search,
          title: 'Verificação de números',
          text: 'Checagem de indicadores que circulam na imprensa contra a base oficial, incluindo atraso de notificação e retificação.',
        },
        {
          icon: FileSpreadsheet,
          title: 'Dados para matéria',
          text: 'Extração de recortes específicos por agravo, território e período, com a série e a descrição do tratamento aplicado.',
        },
      ],
    },
    assets: {
      title: 'Identidade visual',
      subtitle: 'Arquivos para uso editorial.',
      rights:
        'Uso livre em material jornalístico e editorial. Não altere cores, proporções ou tipografia e não use a marca de forma que sugira endosso de conteúdo.',
      items: [
        {
          title: 'Logotipo (PNG)',
          text: 'Fundo transparente, uso geral em tela.',
          href: `${SITE}/logo-oficial.png`,
          label: 'Baixar PNG',
        },
        {
          title: 'Logotipo (WEBP)',
          text: 'Versão leve para páginas e aplicativos.',
          href: `${SITE}/logo-oficial.webp`,
          label: 'Baixar WEBP',
        },
        {
          title: 'Tela de análise',
          text: 'Exemplo de resposta do EpidBot com gráfico de dengue no Rio de Janeiro e em São Paulo.',
          href: `${SITE}/conversation_dengue_rj_sp.png`,
          label: 'Baixar imagem',
        },
        {
          title: 'Resumo de série',
          text: 'Gráfico comparando as séries de dengue nos dois estados.',
          href: `${SITE}/dengue_rj_sp_summary.png`,
          label: 'Baixar imagem',
        },
      ],
    },
    experts: {
      title: 'Quem falar',
      subtitle: 'Pesquisa, produto e operação — sem camada de marketing no meio.',
      items: [
        {
          name: 'Flávio Codeço Coelho',
          role: 'Professor e pesquisador (FGV EMAp) · coordenador técnico da Kwar-AI',
          text: 'Epidemiologia computacional, modelagem e previsão de arboviroses. Criador da plataforma InfoDengue e autor de modelos de previsão incorporados à agenda nacional de saúde.',
        },
        {
          name: 'Joyce Figueiró Braga',
          role: 'Cofundadora · estratégia e mercado',
          text: 'Adoção institucional, modelo de negócio e relação com secretarias, hospitais e organismos internacionais.',
        },
      ],
    },
    principles: {
      title: 'Como tratamos números',
      subtitle: 'Regras que valem para o que publicamos aqui e para o que respondemos à imprensa.',
      items: [
        {
          title: 'Toda cifra tem fonte',
          text: 'Nenhum número é divulgado sem a base que o sustenta, a data de extração e o recorte aplicado.',
        },
        {
          title: 'Projeção exige método',
          text: 'Quando há previsão, o modelo, o horizonte e a incerteza aparecem junto — nunca um número solto.',
        },
        {
          title: 'Limite declarado',
          text: 'Atraso de notificação, retificação e cobertura incompleta são parte da série e vão na mesma resposta.',
        },
        {
          title: 'Correção registrada',
          text: 'Se um número publicado por nós estiver errado, corrigimos e informamos quem o recebeu.',
        },
      ],
    },
    contact: {
      title: 'Contato de imprensa',
      text: 'Escreva com o assunto "Imprensa", o veículo e o prazo. Se a pauta envolver série de dados, já inclua o recorte desejado.',
      cta: 'Enviar e-mail',
      email: EMAIL,
    },
    cta: {
      title: 'Prefere testar antes de escrever?',
      text: 'Crie uma conta gratuita e faça a pergunta da sua pauta. A resposta vem com gráfico, código e fonte — o mesmo material que podemos preparar para a sua matéria.',
      primary: 'Começar grátis',
      secondary: 'Ver planos',
    },
  },

  en: {
    seo: {
      title: 'Journalists and Media',
      description:
        'Kwar-AI press material: verified numbers about EpidBot, downloadable brand assets, experts available for interview and direct contact with the technical team.',
    },
    hero: {
      badge: 'Journalists and Media',
      titleLine1: 'Public health data',
      titleGradient: 'with source and method on the record.',
      subtitle:
        'If you write about epidemiology, AI in health or open data, this is where the numbers we can stand behind, the visual assets and the direct line to the people building the platform live.',
      primaryCta: 'Talk to the team',
      secondaryCta: 'See EpidBot',
      secondaryTo: '/epidbot',
      note: 'Usual response time: one business day. For time-series data, tell us the condition, territory and period you need.',
    },
    facts: {
      title: 'Numbers we can stand behind',
      subtitle:
        'All verifiable in the product code, in the public datasets cited or in public records. If a number changes, this page changes.',
      items: [
        { label: 'Company', value: 'Kwar-AI — Deeplearn Pesquisa e Desenvolvimento Ltda., Rio de Janeiro, Brazil' },
        { label: 'Product', value: 'EpidBot, version 2.8.0 — analysis assistant for public health' },
        { label: 'Data sources', value: '41 open sources, including DATASUS, WHO, PAHO, CDC, ECDC and Africa CDC' },
        { label: 'Analysis tools', value: '321 tools available to the agent' },
        { label: 'International validation', value: 'Pilot with the WHO Eastern Mediterranean Regional Office (EMRO), across 22 countries' },
        { label: 'Public benchmark', value: 'EpiBench: 418 of 550 points (76%) in the June 2026 evaluation' },
        { label: 'Open source', value: 'epidatasets, epimodels and epigrass published in open repositories' },
        { label: 'Languages', value: 'Interface and documentation in Portuguese, English and Spanish' },
      ],
    },
    help: {
      title: 'How we can help your story',
      subtitle: 'No intermediaries: technical answers come from the people who build the platform.',
      items: [
        {
          icon: LineChart,
          title: 'Data and charts',
          text: 'Series on notifiable conditions, admissions and mortality from official sources, with the source and method declared on every chart.',
        },
        {
          icon: MessageSquare,
          title: 'Technical comment',
          text: 'Context on outbreaks, trends and the use of AI in public health, with the limits of what the data supports.',
        },
        {
          icon: Search,
          title: 'Number checking',
          text: 'Cross-checking indicators circulating in the press against the official database, including reporting delay and corrections.',
        },
        {
          icon: FileSpreadsheet,
          title: 'Data for the story',
          text: 'Extracts for a specific condition, territory and period, with the series and a description of the handling applied.',
        },
      ],
    },
    assets: {
      title: 'Brand assets',
      subtitle: 'Files for editorial use.',
      rights:
        'Free to use in journalistic and editorial material. Do not alter colours, proportions or typography, and do not use the mark in a way that suggests endorsement of content.',
      items: [
        {
          title: 'Logo (PNG)',
          text: 'Transparent background, general on-screen use.',
          href: `${SITE}/logo-oficial.png`,
          label: 'Download PNG',
        },
        {
          title: 'Logo (WEBP)',
          text: 'Lightweight version for pages and apps.',
          href: `${SITE}/logo-oficial.webp`,
          label: 'Download WEBP',
        },
        {
          title: 'Analysis screen',
          text: 'Example EpidBot answer with a dengue chart for Rio de Janeiro and São Paulo.',
          href: `${SITE}/conversation_dengue_rj_sp.png`,
          label: 'Download image',
        },
        {
          title: 'Series summary',
          text: 'Chart comparing the dengue series in both states.',
          href: `${SITE}/dengue_rj_sp_summary.png`,
          label: 'Download image',
        },
      ],
    },
    experts: {
      title: 'Who to talk to',
      subtitle: 'Research, product and operations — with no marketing layer in between.',
      items: [
        {
          name: 'Flávio Codeço Coelho',
          role: 'Professor and researcher (FGV EMAp) · technical lead at Kwar-AI',
          text: 'Computational epidemiology, modelling and arbovirus forecasting. Creator of the InfoDengue platform and author of forecasting models adopted into the Brazilian national health agenda.',
        },
        {
          name: 'Joyce Figueiró Braga',
          role: 'Co-founder · strategy and market',
          text: 'Institutional adoption, business model and relationships with health secretariats, hospitals and international organisations.',
        },
      ],
    },
    principles: {
      title: 'How we treat numbers',
      subtitle: 'Rules that apply to what we publish here and to what we answer to the press.',
      items: [
        {
          title: 'Every figure has a source',
          text: 'No number is released without the dataset behind it, the extraction date and the scope applied.',
        },
        {
          title: 'Forecasts need a method',
          text: 'When there is a forecast, the model, horizon and uncertainty come with it — never a number on its own.',
        },
        {
          title: 'Limits declared',
          text: 'Reporting delay, corrections and incomplete coverage are part of the series and travel with the answer.',
        },
        {
          title: 'Corrections on the record',
          text: 'If a number we published is wrong, we correct it and tell everyone who received it.',
        },
      ],
    },
    contact: {
      title: 'Press contact',
      text: 'Write with the subject "Press", your outlet and the deadline. If the story involves a data series, include the scope you need.',
      cta: 'Send e-mail',
      email: EMAIL,
    },
    cta: {
      title: 'Rather test it before writing?',
      text: 'Create a free account and ask the question behind your story. The answer arrives with chart, code and source — the same material we can prepare for your piece.',
      primary: 'Start for free',
      secondary: 'See plans',
    },
  },

  es: {
    seo: {
      title: 'Periodistas y Medios',
      description:
        'Material de prensa de Kwar-AI: cifras verificadas sobre EpidBot, identidad visual para descarga, especialistas para entrevista y contacto directo con el equipo técnico.',
    },
    hero: {
      badge: 'Periodistas y Medios',
      titleLine1: 'Datos de salud pública',
      titleGradient: 'con fuente y método declarados.',
      subtitle:
        'Si escribe sobre epidemiología, IA en salud o datos abiertos, aquí están las cifras que podemos sostener, los materiales visuales y el contacto directo con quienes desarrollan la plataforma.',
      primaryCta: 'Hablar con el equipo',
      secondaryCta: 'Conocer EpidBot',
      secondaryTo: '/epidbot',
      note: 'Plazo habitual de respuesta: un día hábil. Para datos de series temporales, indique evento, territorio y período deseados.',
    },
    facts: {
      title: 'Cifras que podemos sostener',
      subtitle:
        'Todas verificables en el código del producto, en los datos públicos citados o en registro público. Si una cifra cambia, esta página se actualiza.',
      items: [
        { label: 'Empresa', value: 'Kwar-AI — Deeplearn Pesquisa e Desenvolvimento Ltda., Río de Janeiro (RJ), Brasil' },
        { label: 'Producto', value: 'EpidBot, versión 2.8.0 — asistente de análisis para salud pública' },
        { label: 'Fuentes de datos', value: '41 fuentes abiertas, incluyendo DATASUS, OMS, OPS, CDC, ECDC y Africa CDC' },
        { label: 'Herramientas de análisis', value: '321 herramientas disponibles para el agente' },
        { label: 'Validación internacional', value: 'Piloto con la Oficina Regional para el Mediterráneo Oriental de la OMS (EMRO), en 22 países' },
        { label: 'Benchmark público', value: 'EpiBench: 418 de 550 puntos (76%) en la evaluación de junio de 2026' },
        { label: 'Código abierto', value: 'epidatasets, epimodels y epigrass publicados en repositorios abiertos' },
        { label: 'Idiomas', value: 'Interfaz y documentación en portugués, inglés y español' },
      ],
    },
    help: {
      title: 'Cómo podemos ayudar con el tema',
      subtitle: 'Sin intermediarios: las respuestas técnicas vienen de quienes construyen la plataforma.',
      items: [
        {
          icon: LineChart,
          title: 'Datos y gráficos',
          text: 'Series de eventos, internaciones y mortalidad a partir de fuentes oficiales, con la fuente y el método declarados en cada gráfico.',
        },
        {
          icon: MessageSquare,
          title: 'Comentario técnico',
          text: 'Contexto sobre brotes, tendencias y uso de IA en salud pública, con los límites de lo que el dato permite afirmar.',
        },
        {
          icon: Search,
          title: 'Verificación de cifras',
          text: 'Chequeo de indicadores que circulan en la prensa contra la base oficial, incluyendo atraso de notificación y rectificación.',
        },
        {
          icon: FileSpreadsheet,
          title: 'Datos para la nota',
          text: 'Extracción de recortes específicos por evento, territorio y período, con la serie y la descripción del tratamiento aplicado.',
        },
      ],
    },
    assets: {
      title: 'Identidad visual',
      subtitle: 'Archivos para uso editorial.',
      rights:
        'Uso libre en material periodístico y editorial. No altere colores, proporciones ni tipografía y no use la marca de forma que sugiera aval de contenido.',
      items: [
        {
          title: 'Logotipo (PNG)',
          text: 'Fondo transparente, uso general en pantalla.',
          href: `${SITE}/logo-oficial.png`,
          label: 'Descargar PNG',
        },
        {
          title: 'Logotipo (WEBP)',
          text: 'Versión liviana para páginas y aplicaciones.',
          href: `${SITE}/logo-oficial.webp`,
          label: 'Descargar WEBP',
        },
        {
          title: 'Pantalla de análisis',
          text: 'Ejemplo de respuesta de EpidBot con gráfico de dengue en Río de Janeiro y São Paulo.',
          href: `${SITE}/conversation_dengue_rj_sp.png`,
          label: 'Descargar imagen',
        },
        {
          title: 'Resumen de serie',
          text: 'Gráfico comparando las series de dengue en los dos estados.',
          href: `${SITE}/dengue_rj_sp_summary.png`,
          label: 'Descargar imagen',
        },
      ],
    },
    experts: {
      title: 'Con quién hablar',
      subtitle: 'Investigación, producto y operación — sin capa de marketing en medio.',
      items: [
        {
          name: 'Flávio Codeço Coelho',
          role: 'Profesor e investigador (FGV EMAp) · coordinador técnico de Kwar-AI',
          text: 'Epidemiología computacional, modelado y pronóstico de arbovirosis. Creador de la plataforma InfoDengue y autor de modelos de pronóstico incorporados a la agenda nacional de salud.',
        },
        {
          name: 'Joyce Figueiró Braga',
          role: 'Cofundadora · estrategia y mercado',
          text: 'Adopción institucional, modelo de negocio y relación con secretarías, hospitales y organismos internacionales.',
        },
      ],
    },
    principles: {
      title: 'Cómo tratamos las cifras',
      subtitle: 'Reglas que valen para lo que publicamos aquí y para lo que respondemos a la prensa.',
      items: [
        {
          title: 'Toda cifra tiene fuente',
          text: 'Ninguna cifra se divulga sin la base que la sostiene, la fecha de extracción y el recorte aplicado.',
        },
        {
          title: 'Proyección exige método',
          text: 'Cuando hay pronóstico, el modelo, el horizonte y la incertidumbre aparecen juntos — nunca un número suelto.',
        },
        {
          title: 'Límite declarado',
          text: 'El atraso de notificación, la rectificación y la cobertura incompleta son parte de la serie y van en la misma respuesta.',
        },
        {
          title: 'Corrección registrada',
          text: 'Si una cifra publicada por nosotros está equivocada, la corregimos e informamos a quienes la recibieron.',
        },
      ],
    },
    contact: {
      title: 'Contacto de prensa',
      text: 'Escriba con el asunto "Prensa", el medio y el plazo. Si el tema involucra una serie de datos, incluya el recorte deseado.',
      cta: 'Enviar correo',
      email: EMAIL,
    },
    cta: {
      title: '¿Prefiere probar antes de escribir?',
      text: 'Cree una cuenta gratuita y haga la pregunta de su nota. La respuesta llega con gráfico, código y fuente — el mismo material que podemos preparar para su artículo.',
      primary: 'Comenzar gratis',
      secondary: 'Ver planes',
    },
  },
};
