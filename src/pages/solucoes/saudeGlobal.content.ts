import {
  ArrowLeftRight,
  FileText,
  Globe,
  GraduationCap,
  Layers,
  Lock,
  Server,
  Workflow,
} from 'lucide-react';
import type { SolutionContentByLocale } from './types';

export const saudeGlobalContent: SolutionContentByLocale = {
  'pt-BR': {
    seo: {
      title: 'EpidBot para Saúde Global e Organizações Internacionais',
      description:
        'Inteligência epidemiológica para agências, ministérios e cooperação internacional: comparação entre países, fontes oficiais globais, implantação soberana e relatórios com método auditável.',
    },
    hero: {
      badge: 'Saúde Global e Organizações Internacionais',
      titleLine1: 'Inteligência epidemiológica',
      titleGradient: 'que atravessa fronteiras.',
      subtitle:
        'O EpidBot integra fontes oficiais de vários países e regiões, padroniza a leitura por semana epidemiológica e entrega relatórios com método documentado — em uma arquitetura que o parceiro pode hospedar e auditar.',
      primaryCta: 'Começar grátis',
      secondaryCta: 'Falar sobre cooperação',
      secondaryTo: '/?scroll=contact',
      note: 'Piloto inicial com o Escritório Regional do Mediterrâneo Oriental da OMS (EMRO), com uso em 22 países.',
    },
    stats: [
      { value: '22', label: 'países no piloto com a OMS EMRO' },
      { value: '41', label: 'fontes de dados abertas, globais e regionais', note: 'OMS, OPAS, CDC, ECDC, Africa CDC' },
      { value: '321', label: 'ferramentas de análise disponíveis para o agente' },
      { value: 'Apache/MIT', label: 'licenças permissivas nas camadas de implantação', note: 'operável on-premises, sem lock-in de modelo' },
    ],
    statsFootnote:
      'O piloto com a OMS EMRO é uma iniciativa de validação com profissionais de saúde pública da região; não implica endosso institucional da plataforma.',
    challenges: {
      title: 'O que trava a análise entre países',
      subtitle:
        'Séries heterogêneas, calendários distintos e exigências de procedência que raramente cabem em um relatório montado à mão.',
      items: [
        {
          icon: Layers,
          title: 'Séries que não se alinham',
          text: 'Definições de caso, semanas epidemiológicas e granularidade mudam de país para país; comparar exige harmonizar antes de qualquer conclusão.',
        },
        {
          icon: FileText,
          title: 'Procedência para o financiador',
          text: 'Parceiros e doadores pedem o caminho do dado: fonte, data de extração, filtro e método. Reconstruir isso depois é caro e pouco confiável.',
        },
        {
          icon: Lock,
          title: 'Soberania e dependência',
          text: 'Ministérios precisam saber onde o dado fica, qual modelo o processa e como sair do fornecedor. SaaS fechado e modelo único criam risco jurídico e estratégico.',
        },
      ],
    },
    capabilities: {
      title: 'O que a plataforma oferece à cooperação',
      subtitle:
        'Cobertura internacional, padronização e uma arquitetura que respeita a jurisdição de cada parceiro.',
      items: [
        {
          icon: Globe,
          title: 'Cobertura global de fontes',
          text: 'OMS (GHO), OPAS, ECDC, CDC, Africa CDC, RKI, China CDC, entre outras, além do DATASUS — 41 fontes abertas com procedência registrada.',
        },
        {
          icon: ArrowLeftRight,
          title: 'Comparação entre países e regiões',
          text: 'Alinhe séries por semana epidemiológica, faixa etária e definição para comparar cenários e monitorar tendências regionais.',
        },
        {
          icon: Workflow,
          title: 'Perguntas em linguagem natural',
          text: 'A equipe local pergunta no seu idioma de trabalho — a plataforma executa sobre as fontes oficiais e devolve o código usado.',
        },
        {
          icon: Server,
          title: 'Implantação soberana',
          text: 'Nuvem dedicada ou on-premises, inclusive em infraestrutura do próprio ministério, com o provedor de modelo escolhido pelo cliente.',
        },
        {
          icon: FileText,
          title: 'Relatórios para parceiros',
          text: 'Boletins e relatórios com fonte, período, filtros e script anexo — no formato que financiadores e comitês técnicos exigem.',
        },
        {
          icon: GraduationCap,
          title: 'Capacitação e adoção',
          text: 'Treinamento de equipes, materiais em português, inglês e espanhol e acompanhamento na primeira rodada de análises.',
        },
      ],
    },
    workflow: {
      title: 'Como um acordo de cooperação começa',
      subtitle: 'Do escopo técnico ao ambiente funcionando, com validação local em cada etapa.',
      stepLabel: 'Etapa',
      steps: [
        {
          title: 'Escopo',
          text: 'Definimos países, agravos prioritários, janela temporal e quais indicadores entram no primeiro relatório.',
        },
        {
          title: 'Fontes e dados internos',
          text: 'Conectamos as fontes oficiais do recorte e, se houver, as bases internas do parceiro, sob instrumento de tratamento de dados.',
        },
        {
          title: 'Validação local',
          text: 'A equipe técnica do país confere séries, definições e denominadores antes de qualquer publicação.',
        },
        {
          title: 'Implantação e treino',
          text: 'Ambiente provisionado, equipe treinada e um primeiro ciclo de boletim entregue — com o script e a memória de cálculo.',
        },
      ],
    },
    outcomes: {
      title: 'Resultados esperados para o parceiro',
      subtitle: 'O que muda quando a análise é comparável, rastreável e hospedada onde o dado precisa ficar.',
      items: [
        {
          title: 'Uma leitura comum entre países',
          text: 'Séries harmonizadas permitem comparar cenários e sustentar decisões regionais com a mesma régua.',
        },
        {
          title: 'Prestação de contas com método',
          text: 'Relatórios acompanhados de fonte e script reduzem o tempo gasto em auditoria e revisão técnica.',
        },
        {
          title: 'Sem dependência de um único provedor de IA',
          text: 'O modelo de linguagem é escolhido pelo parceiro; a camada de dados, ferramentas e conhecimento é da plataforma.',
        },
        {
          title: 'Capacidade instalada localmente',
          text: 'Treinamento e documentação deixam a equipe apta a rodar o próximo ciclo sem depender do fornecedor.',
        },
      ],
    },
    faq: {
      title: 'Perguntas frequentes',
      items: [
        {
          q: 'O piloto com a OMS EMRO pode ser contratado?',
          a: 'Foi uma iniciativa de validação com profissionais de saúde pública de 22 países. Acordos com ministérios, agências e instituições de pesquisa são tratados caso a caso, a partir do escopo técnico.',
        },
        {
          q: 'Onde os dados ficam hospedados?',
          a: 'Por padrão em nuvem; existem opções de nuvem dedicada e de instalação on-premises, inclusive em infraestrutura do próprio ministério ou instituição parceira.',
        },
        {
          q: 'Qual modelo de linguagem é usado?',
          a: 'O EpidBot é uma camada de ferramentas, dados e conhecimento sobre o modelo escolhido pelo cliente. A arquitetura é multi-provedor, o que evita dependência de um único fornecedor.',
        },
        {
          q: 'Como a plataforma lida com dados sensíveis?',
          a: 'O parceiro permanece controlador dos seus dados. Trabalhamos com minimização, finalidade registrada e instrumento específico de tratamento, conforme a legislação aplicável em cada jurisdição.',
        },
        {
          q: 'Há suporte em outros idiomas?',
          a: 'Interface e documentação em português, inglês e espanhol; o treinamento é conduzido no idioma de trabalho da equipe.',
        },
      ],
    },
    related: {
      title: 'Continue explorando',
      items: [
        { label: 'EpidBot', to: '/epidbot', text: 'A plataforma completa: fontes, ferramentas, plugins e segurança.' },
        { label: 'Vigilância Epidemiológica', to: '/vigilancia-epidemiologica', text: 'O uso diário por equipes de vigilância.' },
        { label: 'Planos', to: '/planos', text: 'Limites, recursos e condições para instituições.' },
      ],
    },
    cta: {
      title: 'Vamos desenhar o primeiro ciclo juntos',
      text: 'Traga um agravo, um conjunto de países e uma pergunta concreta. Montamos o recorte, rodamos a análise e você avalia o resultado com método e código ao lado.',
      primary: 'Começar grátis',
      secondary: 'Ver planos',
    },
  },

  en: {
    seo: {
      title: 'EpidBot for Global Health and International Organisations',
      description:
        'Epidemic intelligence for agencies, ministries and international cooperation: cross-country comparison, official global sources, sovereign deployment and reports with an auditable method.',
    },
    hero: {
      badge: 'Global Health and International Organisations',
      titleLine1: 'Epidemic intelligence',
      titleGradient: 'that crosses borders.',
      subtitle:
        'EpidBot integrates official sources from several countries and regions, standardises the reading by epidemiological week and delivers reports with a documented method — on an architecture the partner can host and audit.',
      primaryCta: 'Start for free',
      secondaryCta: 'Discuss cooperation',
      secondaryTo: '/?scroll=contact',
      note: 'Initial pilot with the WHO Eastern Mediterranean Regional Office (EMRO), used across 22 countries.',
    },
    stats: [
      { value: '22', label: 'countries in the WHO EMRO pilot' },
      { value: '41', label: 'open global and regional data sources', note: 'WHO, PAHO, CDC, ECDC, Africa CDC' },
      { value: '321', label: 'analysis tools available to the agent' },
      { value: 'Apache/MIT', label: 'permissive licences across deployment layers', note: 'on-premises capable, no model lock-in' },
    ],
    statsFootnote:
      'The WHO EMRO pilot is a validation initiative with public health professionals in the region; it does not imply institutional endorsement of the platform.',
    challenges: {
      title: 'What blocks cross-country analysis',
      subtitle:
        'Heterogeneous series, different calendars and provenance requirements that rarely fit a hand-built report.',
      items: [
        {
          icon: Layers,
          title: 'Series that do not align',
          text: 'Case definitions, epidemiological weeks and granularity change from country to country; comparison requires harmonising before any conclusion.',
        },
        {
          icon: FileText,
          title: 'Provenance for the funder',
          text: 'Partners and donors ask for the path of the data: source, extraction date, filter and method. Reconstructing it later is expensive and unreliable.',
        },
        {
          icon: Lock,
          title: 'Sovereignty and lock-in',
          text: 'Ministries need to know where the data sits, which model processes it and how to leave a vendor. Closed SaaS and a single model create legal and strategic risk.',
        },
      ],
    },
    capabilities: {
      title: 'What the platform offers to cooperation',
      subtitle:
        'International coverage, standardisation and an architecture that respects each partner jurisdiction.',
      items: [
        {
          icon: Globe,
          title: 'Global source coverage',
          text: 'WHO (GHO), PAHO, ECDC, CDC, Africa CDC, RKI, China CDC and others, alongside DATASUS — 41 open sources with recorded provenance.',
        },
        {
          icon: ArrowLeftRight,
          title: 'Country and region comparison',
          text: 'Align series by epidemiological week, age band and definition to compare scenarios and track regional trends.',
        },
        {
          icon: Workflow,
          title: 'Natural-language questions',
          text: 'The local team asks in its working language — the platform runs on official sources and returns the code it used.',
        },
        {
          icon: Server,
          title: 'Sovereign deployment',
          text: 'Dedicated cloud or on-premises, including inside the ministry infrastructure, with the model provider chosen by the client.',
        },
        {
          icon: FileText,
          title: 'Reports for partners',
          text: 'Bulletins and reports with source, period, filters and the script attached — in the format funders and technical committees require.',
        },
        {
          icon: GraduationCap,
          title: 'Training and adoption',
          text: 'Team training, material in Portuguese, English and Spanish, and support through the first round of analyses.',
        },
      ],
    },
    workflow: {
      title: 'How a cooperation agreement starts',
      subtitle: 'From technical scope to a running environment, with local validation at every step.',
      stepLabel: 'Step',
      steps: [
        {
          title: 'Scope',
          text: 'We define countries, priority conditions, time window and which indicators enter the first report.',
        },
        {
          title: 'Sources and internal data',
          text: 'We connect the official sources in scope and, where they exist, the partner internal datasets, under a data-processing instrument.',
        },
        {
          title: 'Local validation',
          text: 'The country technical team checks series, definitions and denominators before anything is published.',
        },
        {
          title: 'Deployment and training',
          text: 'Environment provisioned, team trained and a first bulletin cycle delivered — with the script and calculation trail.',
        },
      ],
    },
    outcomes: {
      title: 'Expected results for the partner',
      subtitle:
        'What changes when analysis is comparable, traceable and hosted where the data must stay.',
      items: [
        {
          title: 'One shared reading across countries',
          text: 'Harmonised series let partners compare scenarios and support regional decisions with the same yardstick.',
        },
        {
          title: 'Accountability with a method',
          text: 'Reports carrying source and script cut the time spent on audit and technical review.',
        },
        {
          title: 'No dependency on a single AI vendor',
          text: 'The language model is chosen by the partner; the data, tools and knowledge layer belongs to the platform.',
        },
        {
          title: 'Capability installed locally',
          text: 'Training and documentation leave the team able to run the next cycle without the vendor.',
        },
      ],
    },
    faq: {
      title: 'Frequent questions',
      items: [
        {
          q: 'Can the WHO EMRO pilot be contracted?',
          a: 'It was a validation initiative with public health professionals from 22 countries. Agreements with ministries, agencies and research institutions are handled case by case, starting from the technical scope.',
        },
        {
          q: 'Where is the data hosted?',
          a: 'In the cloud by default; dedicated cloud and on-premises installations are available, including inside the ministry or partner institution infrastructure.',
        },
        {
          q: 'Which language model is used?',
          a: 'EpidBot is a tools, data and knowledge layer on top of the model chosen by the client. The architecture is multi-provider, which avoids dependency on a single vendor.',
        },
        {
          q: 'How does the platform handle sensitive data?',
          a: 'The partner remains the controller of its data. We work with minimisation, recorded purpose and a specific processing instrument, under the legislation applicable in each jurisdiction.',
        },
        {
          q: 'Is support available in other languages?',
          a: 'Interface and documentation in Portuguese, English and Spanish; training is delivered in the working language of the team.',
        },
      ],
    },
    related: {
      title: 'Keep exploring',
      items: [
        { label: 'EpidBot', to: '/epidbot', text: 'The full platform: sources, tools, plugins and security.' },
        { label: 'Epidemiological Surveillance', to: '/vigilancia-epidemiologica', text: 'Day-to-day use by surveillance teams.' },
        { label: 'Plans', to: '/planos', text: 'Limits, features and institutional conditions.' },
      ],
    },
    cta: {
      title: "Let's design the first cycle together",
      text: 'Bring a condition, a set of countries and one concrete question. We build the scope, run the analysis and you review the result with the method and the code beside it.',
      primary: 'Start for free',
      secondary: 'See plans',
    },
  },

  es: {
    seo: {
      title: 'EpidBot para Salud Global y Organizaciones Internacionales',
      description:
        'Inteligencia epidémica para agencias, ministerios y cooperación internacional: comparación entre países, fuentes oficiales globales, despliegue soberano e informes con método auditable.',
    },
    hero: {
      badge: 'Salud Global y Organizaciones Internacionales',
      titleLine1: 'Inteligencia epidemiológica',
      titleGradient: 'que cruza fronteras.',
      subtitle:
        'EpidBot integra fuentes oficiales de varios países y regiones, estandariza la lectura por semana epidemiológica y entrega informes con método documentado — en una arquitectura que el socio puede alojar y auditar.',
      primaryCta: 'Comenzar gratis',
      secondaryCta: 'Hablar de cooperación',
      secondaryTo: '/?scroll=contact',
      note: 'Piloto inicial con la Oficina Regional para el Mediterráneo Oriental de la OMS (EMRO), con uso en 22 países.',
    },
    stats: [
      { value: '22', label: 'países en el piloto con la OMS EMRO' },
      { value: '41', label: 'fuentes de datos abiertas, globales y regionales', note: 'OMS, OPS, CDC, ECDC, Africa CDC' },
      { value: '321', label: 'herramientas de análisis disponibles para el agente' },
      { value: 'Apache/MIT', label: 'licencias permisivas en las capas de despliegue', note: 'operable on-premises, sin lock-in de modelo' },
    ],
    statsFootnote:
      'El piloto con la OMS EMRO es una iniciativa de validación con profesionales de salud pública de la región; no implica un aval institucional de la plataforma.',
    challenges: {
      title: 'Qué bloquea el análisis entre países',
      subtitle:
        'Series heterogéneas, calendarios distintos y exigencias de procedencia que rara vez caben en un informe hecho a mano.',
      items: [
        {
          icon: Layers,
          title: 'Series que no se alinean',
          text: 'Las definiciones de caso, las semanas epidemiológicas y la granularidad cambian de país a país; comparar exige armonizar antes de cualquier conclusión.',
        },
        {
          icon: FileText,
          title: 'Procedencia para el financiador',
          text: 'Socios y donantes piden el camino del dato: fuente, fecha de extracción, filtro y método. Reconstruirlo después es caro y poco confiable.',
        },
        {
          icon: Lock,
          title: 'Soberanía y dependencia',
          text: 'Los ministerios necesitan saber dónde está el dato, qué modelo lo procesa y cómo salir del proveedor. Un SaaS cerrado con un modelo único crea riesgo jurídico y estratégico.',
        },
      ],
    },
    capabilities: {
      title: 'Qué ofrece la plataforma a la cooperación',
      subtitle:
        'Cobertura internacional, estandarización y una arquitectura que respeta la jurisdicción de cada socio.',
      items: [
        {
          icon: Globe,
          title: 'Cobertura global de fuentes',
          text: 'OMS (GHO), OPS, ECDC, CDC, Africa CDC, RKI, China CDC, entre otras, además del DATASUS — 41 fuentes abiertas con procedencia registrada.',
        },
        {
          icon: ArrowLeftRight,
          title: 'Comparación entre países y regiones',
          text: 'Alinee series por semana epidemiológica, grupo de edad y definición para comparar escenarios y seguir tendencias regionales.',
        },
        {
          icon: Workflow,
          title: 'Preguntas en lenguaje natural',
          text: 'El equipo local pregunta en su idioma de trabajo — la plataforma ejecuta sobre las fuentes oficiales y devuelve el código usado.',
        },
        {
          icon: Server,
          title: 'Despliegue soberano',
          text: 'Nube dedicada u on-premises, incluso en la infraestructura del propio ministerio, con el proveedor de modelo elegido por el cliente.',
        },
        {
          icon: FileText,
          title: 'Informes para socios',
          text: 'Boletines e informes con fuente, período, filtros y script adjunto — en el formato que exigen financiadores y comités técnicos.',
        },
        {
          icon: GraduationCap,
          title: 'Capacitación y adopción',
          text: 'Formación de equipos, materiales en portugués, inglés y español y acompañamiento en la primera ronda de análisis.',
        },
      ],
    },
    workflow: {
      title: 'Cómo empieza un acuerdo de cooperación',
      subtitle: 'Del alcance técnico al ambiente funcionando, con validación local en cada etapa.',
      stepLabel: 'Etapa',
      steps: [
        {
          title: 'Alcance',
          text: 'Definimos países, eventos prioritarios, ventana temporal y qué indicadores entran en el primer informe.',
        },
        {
          title: 'Fuentes y datos internos',
          text: 'Conectamos las fuentes oficiales del recorte y, si existen, las bases internas del socio, bajo instrumento de tratamiento de datos.',
        },
        {
          title: 'Validación local',
          text: 'El equipo técnico del país verifica series, definiciones y denominadores antes de cualquier publicación.',
        },
        {
          title: 'Despliegue y formación',
          text: 'Ambiente provisto, equipo capacitado y un primer ciclo de boletín entregado — con el script y la memoria de cálculo.',
        },
      ],
    },
    outcomes: {
      title: 'Resultados esperados para el socio',
      subtitle:
        'Qué cambia cuando el análisis es comparable, trazable y alojado donde el dato debe quedarse.',
      items: [
        {
          title: 'Una lectura común entre países',
          text: 'Series armonizadas permiten comparar escenarios y sostener decisiones regionales con la misma regla.',
        },
        {
          title: 'Rendición de cuentas con método',
          text: 'Informes acompañados de fuente y script reducen el tiempo dedicado a auditoría y revisión técnica.',
        },
        {
          title: 'Sin dependencia de un único proveedor de IA',
          text: 'El modelo de lenguaje lo elige el socio; la capa de datos, herramientas y conocimiento es de la plataforma.',
        },
        {
          title: 'Capacidad instalada localmente',
          text: 'La formación y la documentación dejan al equipo apto para ejecutar el próximo ciclo sin el proveedor.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Se puede contratar el piloto con la OMS EMRO?',
          a: 'Fue una iniciativa de validación con profesionales de salud pública de 22 países. Los acuerdos con ministerios, agencias e instituciones de investigación se tratan caso a caso, a partir del alcance técnico.',
        },
        {
          q: '¿Dónde se alojan los datos?',
          a: 'Por defecto en la nube; existen opciones de nube dedicada e instalación on-premises, incluso en la infraestructura del propio ministerio o institución socia.',
        },
        {
          q: '¿Qué modelo de lenguaje se usa?',
          a: 'EpidBot es una capa de herramientas, datos y conocimiento sobre el modelo elegido por el cliente. La arquitectura es multiproveedor, lo que evita depender de un único proveedor.',
        },
        {
          q: '¿Cómo se tratan los datos sensibles?',
          a: 'El socio permanece como controlador de sus datos. Trabajamos con minimización, finalidad registrada e instrumento específico de tratamiento, conforme a la legislación aplicable en cada jurisdicción.',
        },
        {
          q: '¿Hay soporte en otros idiomas?',
          a: 'Interfaz y documentación en portugués, inglés y español; la formación se imparte en el idioma de trabajo del equipo.',
        },
      ],
    },
    related: {
      title: 'Siga explorando',
      items: [
        { label: 'EpidBot', to: '/epidbot', text: 'La plataforma completa: fuentes, herramientas, complementos y seguridad.' },
        { label: 'Vigilancia Epidemiológica', to: '/vigilancia-epidemiologica', text: 'El uso diario por equipos de vigilancia.' },
        { label: 'Planes', to: '/planos', text: 'Límites, funciones y condiciones para instituciones.' },
      ],
    },
    cta: {
      title: 'Diseñemos juntos el primer ciclo',
      text: 'Traiga un evento, un conjunto de países y una pregunta concreta. Armamos el recorte, ejecutamos el análisis y usted evalúa el resultado con método y código al lado.',
      primary: 'Comenzar gratis',
      secondary: 'Ver planes',
    },
  },
};
