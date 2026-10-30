import {
  Award,
  BookOpen,
  Clock,
  Code2,
  Database,
  GitBranch,
  LineChart,
  Users,
} from 'lucide-react';
import type { SolutionContentByLocale } from './types';

export const pesquisaContent: SolutionContentByLocale = {
  'pt-BR': {
    seo: {
      title: 'EpidBot para Pesquisa e Universidades',
      description:
        'Acelere a pesquisa em saúde pública: 41 fontes abertas integradas, análise executada sobre dados oficiais, script reproduzível e referências verificadas em PubMed, OpenAlex, Crossref e ORCID.',
    },
    hero: {
      badge: 'Pesquisa e Universidades',
      titleLine1: 'Sua pergunta de pesquisa',
      titleGradient: 'direto sobre os dados.',
      subtitle:
        'O EpidBot reúne fontes oficiais, executa a análise e devolve o resultado junto com o código documentado — para que o tempo do projeto vá para a interpretação, não para a limpeza de planilha.',
      primaryCta: 'Começar grátis',
      secondaryCta: 'Ver planos e desconto acadêmico',
      secondaryTo: '/planos',
      note: 'Construído a partir da pesquisa em epidemiologia e modelagem do grupo do Prof. Flávio Codeço Coelho (FGV EMAp), cujo modelo de previsão de dengue foi publicado no PNAS e incorporado à agenda nacional do Ministério da Saúde.',
    },
    stats: [
      { value: '41', label: 'fontes de dados abertas na biblioteca epidatasets', note: 'DATASUS, OMS, OPAS, CDC, ECDC, Africa CDC' },
      { value: '321', label: 'ferramentas de análise disponíveis para o agente' },
      { value: '76%', label: 'EpiBench: 418 de 550 pontos no benchmark público', note: 'avaliação de junho de 2026' },
      { value: '4', label: 'bases de literatura conferidas em cada citação', note: 'PubMed, OpenAlex, Crossref, ORCID' },
    ],
    statsFootnote:
      'O escore do EpiBench é publicado junto a cada versão do produto; os demais números vêm das fontes abertas citadas.',
    challenges: {
      title: 'Onde a pesquisa em saúde perde tempo',
      subtitle:
        'Antes da análise vem o trabalho invisível: baixar, limpar, juntar, documentar e conferir referência.',
      items: [
        {
          icon: Clock,
          title: 'Semanas preparando o dado',
          text: 'Baixar, limpar e juntar bases costuma consumir a maior parte de um projeto — e o resultado fica preso a um notebook que só o autor consegue rodar de novo.',
        },
        {
          icon: GitBranch,
          title: 'Reprodutibilidade frágil',
          text: 'Sem registro do caminho percorrido, revisores e leitores não refazem a análise; uma mudança de versão da base altera o número publicado.',
        },
        {
          icon: BookOpen,
          title: 'Referências que não conferem',
          text: 'DOIs errados, citações desatualizadas e referências inventadas por LLMs genéricos custam revisões e podem comprometer o manuscrito.',
        },
      ],
    },
    capabilities: {
      title: 'O que o EpidBot entrega ao projeto',
      subtitle:
        'Aquisição, análise, figura, script e referência — no mesmo lugar, com procedência em cada etapa.',
      items: [
        {
          icon: Database,
          title: 'Aquisição de dados oficiais',
          text: 'SINAN, SIM, SINASC, SIH/SIA, CNES, SRAG/Sivep-Gripe, OMS GHO, OPAS, CDC, ECDC, Africa CDC, OpenDengue e mais — 41 fontes abertas acessadas por biblioteca própria.',
        },
        {
          icon: Code2,
          title: 'Código documentado da análise',
          text: 'A conversa termina em um script único, comentado e exportável, com as fontes usadas e os filtros aplicados — pronto para o material suplementar.',
        },
        {
          icon: BookOpen,
          title: 'Referências verificadas',
          text: 'Cada citação é checada em PubMed, OpenAlex, Crossref, ORCID e Google Scholar; nada entra no texto sem correspondência na base.',
        },
        {
          icon: LineChart,
          title: 'Figuras e tabelas para publicação',
          text: 'Gráficos exportáveis em imagem e vetor, tabelas prontas para o artigo e, nos planos avançados, apoio à redação em LaTeX/Overleaf e ao depósito no Zenodo.',
        },
        {
          icon: Award,
          title: 'Desempenho medido em público',
          text: 'O EpiBench avalia o agente em 21 tarefas de epidemiologia (coleta, análise espaço-temporal, métricas e citação) e o resultado é divulgado a cada versão.',
        },
        {
          icon: Users,
          title: 'Grupo de pesquisa na mesma conta',
          text: 'Workspaces por projeto, revisão entre pares, histórico de versões e relatórios agendados para acompanhar séries semanais.',
        },
      ],
    },
    workflow: {
      title: 'Da pergunta ao material suplementar',
      subtitle: 'Um ciclo curto, com tudo o que o revisor vai pedir.',
      stepLabel: 'Etapa',
      steps: [
        {
          title: 'Delimite a pergunta',
          text: 'Agrave, período, recorte geográfico e unidade de análise. O EpidBot ajuda a escolher as fontes compatíveis com o desenho.',
        },
        {
          title: 'Execute',
          text: 'A análise roda sobre os dados oficiais, com as fontes nomeadas e o código exibido a cada passo.',
        },
        {
          title: 'Itere',
          text: 'Ajuste denominador, agregação, período ou método — e compare cenários mantendo o histórico do que foi testado.',
        },
        {
          title: 'Documente',
          text: 'Exporte script, figuras e relatório; descreva o método no artigo e cite as bases originais com os identificadores fornecidos.',
        },
      ],
    },
    outcomes: {
      title: 'O que muda no projeto',
      subtitle: 'Menos encanamento, mais interpretação — e um método que se sustenta na revisão.',
      items: [
        {
          title: 'Do dado bruto ao resultado em horas',
          text: 'O tempo que ia para download e limpeza volta para a análise e a redação.',
        },
        {
          title: 'Método auditável para revisores',
          text: 'O script exportado descreve exatamente o que foi feito, com fonte, filtro e versão.',
        },
        {
          title: 'Referências que resistem à checagem',
          text: 'Autores, DOI e ano conferidos contra as bases de literatura antes de entrar no texto.',
        },
        {
          title: 'Acessível para grupo e para estudante',
          text: 'Plano gratuito para aprender e desconto acadêmico para estudantes, residentes e docentes com e-mail institucional verificado.',
        },
      ],
    },
    faq: {
      title: 'Perguntas frequentes',
      items: [
        {
          q: 'Posso usar os resultados em um artigo para publicação?',
          a: 'Sim. As análises são reproduzíveis e o script exportado permite descrever o método. Recomendamos registrar a versão da plataforma usada e citar as bases originais de cada série.',
        },
        {
          q: 'Os dados são apenas brasileiros?',
          a: 'Não. Além do DATASUS, o acervo inclui bases globais e regionais — OMS (GHO), OPAS, CDC, ECDC, Africa CDC, RKI, China CDC, entre outras.',
        },
        {
          q: 'Existe desconto para estudantes e docentes?',
          a: 'Sim: desconto acadêmico de 50% para estudantes, residentes e professores com e-mail institucional verificado, sem prazo de validade. Condições completas na página de planos.',
        },
        {
          q: 'Preciso saber programar?',
          a: 'Não para usar a plataforma: a interface é conversacional. Ajuda na hora de adaptar o script exportado, que é Python padrão com as bibliotecas usuais de análise de dados.',
        },
        {
          q: 'Meus arquivos enviados ficam privados?',
          a: 'Os arquivos enviados ficam no seu espaço de trabalho, acessíveis à sua conta e ao grupo com quem você compartilhar o projeto. Detalhes de tratamento de dados estão na política de privacidade.',
        },
        {
          q: 'Como cito o EpidBot?',
          a: 'Kwar-AI. EpidBot (versão 2.8.0) [software]. Rio de Janeiro: Kwar-AI. Disponível em https://epidbot.kwar-ai.com.br.',
        },
      ],
    },
    related: {
      title: 'Continue explorando',
      items: [
        { label: 'EpidBot', to: '/epidbot', text: 'A plataforma completa: fontes, ferramentas, plugins e segurança.' },
        { label: 'Planos', to: '/planos', text: 'Limites de uso, recursos por plano e desconto acadêmico.' },
        { label: 'Documentação', to: '/documentacao', text: 'Guias, manual, referência de API e tutoriais em vídeo.' },
      ],
    },
    cta: {
      title: 'Traga a pergunta do seu próximo artigo',
      text: 'Abra uma conta gratuita, rode uma análise com dados oficiais e veja o script sair junto. Se o projeto crescer, o plano acadêmico cobre o grupo.',
      primary: 'Começar grátis',
      secondary: 'Ver planos',
    },
  },

  en: {
    seo: {
      title: 'EpidBot for Research and Universities',
      description:
        'Speed up public health research: 41 open sources integrated, analysis run on official data, reproducible script and references checked against PubMed, OpenAlex, Crossref and ORCID.',
    },
    hero: {
      badge: 'Research and Universities',
      titleLine1: 'Your research question',
      titleGradient: 'straight onto the data.',
      subtitle:
        'EpidBot gathers official sources, runs the analysis and hands back the result together with the documented code — so project time goes into interpretation, not spreadsheet cleaning.',
      primaryCta: 'Start for free',
      secondaryCta: 'See plans and academic discount',
      secondaryTo: '/planos',
      note: "Built from the epidemiology and modelling research of Prof. Flávio Codeço Coelho's group (FGV EMAp), whose dengue forecasting model was published in PNAS and adopted into Brazil's national health agenda.",
    },
    stats: [
      { value: '41', label: 'open data sources in the epidatasets library', note: 'DATASUS, WHO, PAHO, CDC, ECDC, Africa CDC' },
      { value: '321', label: 'analysis tools available to the agent' },
      { value: '76%', label: 'EpiBench: 418 of 550 points on the public benchmark', note: 'June 2026 evaluation' },
      { value: '4', label: 'literature databases checked for every citation', note: 'PubMed, OpenAlex, Crossref, ORCID' },
    ],
    statsFootnote:
      'The EpiBench score is published with each product release; the other figures come from the open sources cited.',
    challenges: {
      title: 'Where health research loses time',
      subtitle:
        'Before the analysis comes the invisible work: downloading, cleaning, joining, documenting and checking references.',
      items: [
        {
          icon: Clock,
          title: 'Weeks preparing the data',
          text: 'Downloading, cleaning and joining datasets usually takes most of a project — and the result ends up trapped in a notebook only the author can rerun.',
        },
        {
          icon: GitBranch,
          title: 'Fragile reproducibility',
          text: 'Without a record of the path taken, reviewers and readers cannot repeat the analysis; a dataset version change moves the published number.',
        },
        {
          icon: BookOpen,
          title: 'Citations that do not check out',
          text: 'Wrong DOIs, outdated references and invented citations from generic LLMs cost review rounds and can undermine the manuscript.',
        },
      ],
    },
    capabilities: {
      title: 'What EpidBot brings to the project',
      subtitle:
        'Acquisition, analysis, figure, script and reference — in one place, with provenance at every step.',
      items: [
        {
          icon: Database,
          title: 'Official data acquisition',
          text: 'SINAN, SIM, SINASC, SIH/SIA, CNES, SRAG/Sivep-Gripe, WHO GHO, PAHO, CDC, ECDC, Africa CDC, OpenDengue and more — 41 open sources through a dedicated library.',
        },
        {
          icon: Code2,
          title: 'Documented analysis code',
          text: 'The conversation ends in a single, commented, exportable script with the sources used and the filters applied — ready for supplementary material.',
        },
        {
          icon: BookOpen,
          title: 'Verified references',
          text: 'Every citation is checked against PubMed, OpenAlex, Crossref, ORCID and Google Scholar; nothing enters the text without a match in the source database.',
        },
        {
          icon: LineChart,
          title: 'Publication-ready figures',
          text: 'Charts exportable as image and vector, tables ready for the paper and, on advanced plans, support for LaTeX/Overleaf writing and Zenodo deposits.',
        },
        {
          icon: Award,
          title: 'Performance measured in public',
          text: 'EpiBench evaluates the agent on 21 epidemiology tasks (retrieval, spatio-temporal analysis, metrics and citation) and the score is published with every release.',
        },
        {
          icon: Users,
          title: 'The whole group on one account',
          text: 'Project workspaces, peer review, version history and scheduled reports to follow weekly series.',
        },
      ],
    },
    workflow: {
      title: 'From question to supplementary material',
      subtitle: 'A short cycle that already contains what the reviewer will ask for.',
      stepLabel: 'Step',
      steps: [
        {
          title: 'Frame the question',
          text: 'Condition, period, geographical scope and unit of analysis. EpidBot helps pick the sources that fit the design.',
        },
        {
          title: 'Run it',
          text: 'The analysis runs on official data, with sources named and code shown at each step.',
        },
        {
          title: 'Iterate',
          text: 'Adjust denominator, aggregation, period or method — and compare scenarios while keeping a history of what was tried.',
        },
        {
          title: 'Document',
          text: 'Export script, figures and report; describe the method in the paper and cite the original datasets with the identifiers provided.',
        },
      ],
    },
    outcomes: {
      title: 'What changes in the project',
      subtitle: 'Less plumbing, more interpretation — and a method that survives review.',
      items: [
        {
          title: 'From raw data to result in hours',
          text: 'Time previously spent downloading and cleaning goes back into analysis and writing.',
        },
        {
          title: 'An auditable method for reviewers',
          text: 'The exported script states exactly what was done, with source, filter and version.',
        },
        {
          title: 'References that survive checking',
          text: 'Authors, DOI and year verified against the literature databases before entering the text.',
        },
        {
          title: 'Affordable for groups and students',
          text: 'A free plan to learn on and an academic discount for students, residents and lecturers with a verified institutional e-mail.',
        },
      ],
    },
    faq: {
      title: 'Frequent questions',
      items: [
        {
          q: 'Can I use the results in a paper for publication?',
          a: 'Yes. Analyses are reproducible and the exported script lets you describe the method. We recommend recording the platform version used and citing the original datasets for each series.',
        },
        {
          q: 'Is the data Brazil-only?',
          a: 'No. Beyond DATASUS, the collection includes global and regional sources — WHO (GHO), PAHO, CDC, ECDC, Africa CDC, RKI, China CDC, among others.',
        },
        {
          q: 'Is there a discount for students and lecturers?',
          a: 'Yes: a 50% academic discount for students, residents and lecturers with a verified institutional e-mail, with no expiry date. Full conditions on the plans page.',
        },
        {
          q: 'Do I need to know how to code?',
          a: 'Not to use the platform: the interface is conversational. It helps when adapting the exported script, which is standard Python with the usual data-analysis libraries.',
        },
        {
          q: 'Do the files I upload stay private?',
          a: 'Uploaded files stay in your workspace, reachable from your account and from the group you share the project with. Data-handling details are in the privacy policy.',
        },
        {
          q: 'How do I cite EpidBot?',
          a: 'Kwar-AI. EpidBot (version 2.8.0) [software]. Rio de Janeiro: Kwar-AI. Available at https://epidbot.kwar-ai.com.br.',
        },
      ],
    },
    related: {
      title: 'Keep exploring',
      items: [
        { label: 'EpidBot', to: '/epidbot', text: 'The full platform: sources, tools, plugins and security.' },
        { label: 'Plans', to: '/planos', text: 'Usage limits, features per plan and the academic discount.' },
        { label: 'Documentation', to: '/documentacao', text: 'Guides, manual, API reference and video tutorials.' },
      ],
    },
    cta: {
      title: 'Bring the question behind your next paper',
      text: 'Open a free account, run an analysis on official data and watch the script come out with it. If the project grows, the academic plan covers the group.',
      primary: 'Start for free',
      secondary: 'See plans',
    },
  },

  es: {
    seo: {
      title: 'EpidBot para Investigación y Universidades',
      description:
        'Acelere la investigación en salud pública: 41 fuentes abiertas integradas, análisis sobre datos oficiales, script reproducible y referencias verificadas en PubMed, OpenAlex, Crossref y ORCID.',
    },
    hero: {
      badge: 'Investigación y Universidades',
      titleLine1: 'Su pregunta de investigación',
      titleGradient: 'directo sobre los datos.',
      subtitle:
        'EpidBot reúne fuentes oficiales, ejecuta el análisis y devuelve el resultado junto con el código documentado — para que el tiempo del proyecto vaya a la interpretación y no a limpiar planillas.',
      primaryCta: 'Comenzar gratis',
      secondaryCta: 'Ver planes y descuento académico',
      secondaryTo: '/planos',
      note: 'Construido a partir de la investigación en epidemiología y modelado del grupo del Prof. Flávio Codeço Coelho (FGV EMAp), cuyo modelo de pronóstico de dengue fue publicado en PNAS e incorporado a la agenda nacional del Ministerio de Salud de Brasil.',
    },
    stats: [
      { value: '41', label: 'fuentes de datos abiertas en la biblioteca epidatasets', note: 'DATASUS, OMS, OPS, CDC, ECDC, Africa CDC' },
      { value: '321', label: 'herramientas de análisis disponibles para el agente' },
      { value: '76%', label: 'EpiBench: 418 de 550 puntos en el benchmark público', note: 'evaluación de junio de 2026' },
      { value: '4', label: 'bases de literatura verificadas en cada cita', note: 'PubMed, OpenAlex, Crossref, ORCID' },
    ],
    statsFootnote:
      'La puntuación de EpiBench se publica con cada versión del producto; las demás cifras provienen de las fuentes abiertas citadas.',
    challenges: {
      title: 'Dónde pierde tiempo la investigación en salud',
      subtitle:
        'Antes del análisis llega el trabajo invisible: descargar, limpiar, unir, documentar y verificar referencias.',
      items: [
        {
          icon: Clock,
          title: 'Semanas preparando el dato',
          text: 'Descargar, limpiar y unir bases suele consumir la mayor parte de un proyecto — y el resultado queda atrapado en un notebook que solo el autor puede volver a ejecutar.',
        },
        {
          icon: GitBranch,
          title: 'Reproducibilidad frágil',
          text: 'Sin registro del camino recorrido, revisores y lectores no pueden repetir el análisis; un cambio de versión de la base mueve el número publicado.',
        },
        {
          icon: BookOpen,
          title: 'Referencias que no coinciden',
          text: 'DOI equivocados, citas desactualizadas y referencias inventadas por LLM genéricos cuestan rondas de revisión y pueden comprometer el manuscrito.',
        },
      ],
    },
    capabilities: {
      title: 'Lo que EpidBot aporta al proyecto',
      subtitle:
        'Adquisición, análisis, figura, script y referencia — en un solo lugar, con procedencia en cada etapa.',
      items: [
        {
          icon: Database,
          title: 'Adquisición de datos oficiales',
          text: 'SINAN, SIM, SINASC, SIH/SIA, CNES, SRAG/Sivep-Gripe, OMS GHO, OPS, CDC, ECDC, Africa CDC, OpenDengue y más — 41 fuentes abiertas mediante una biblioteca propia.',
        },
        {
          icon: Code2,
          title: 'Código documentado del análisis',
          text: 'La conversación termina en un script único, comentado y exportable, con las fuentes usadas y los filtros aplicados — listo para el material suplementario.',
        },
        {
          icon: BookOpen,
          title: 'Referencias verificadas',
          text: 'Cada cita se verifica en PubMed, OpenAlex, Crossref, ORCID y Google Scholar; nada entra en el texto sin correspondencia en la base.',
        },
        {
          icon: LineChart,
          title: 'Figuras listas para publicación',
          text: 'Gráficos exportables en imagen y vector, tablas listas para el artículo y, en planes avanzados, apoyo a la redacción en LaTeX/Overleaf y al depósito en Zenodo.',
        },
        {
          icon: Award,
          title: 'Desempeño medido en público',
          text: 'EpiBench evalúa al agente en 21 tareas de epidemiología (obtención, análisis espacio-temporal, métricas y citas) y el resultado se publica en cada versión.',
        },
        {
          icon: Users,
          title: 'El grupo en una sola cuenta',
          text: 'Espacios de proyecto, revisión entre pares, historial de versiones e informes programados para seguir series semanales.',
        },
      ],
    },
    workflow: {
      title: 'De la pregunta al material suplementario',
      subtitle: 'Un ciclo corto que ya incluye lo que pedirá el revisor.',
      stepLabel: 'Paso',
      steps: [
        {
          title: 'Delimite la pregunta',
          text: 'Evento, período, recorte geográfico y unidad de análisis. EpidBot ayuda a elegir las fuentes compatibles con el diseño.',
        },
        {
          title: 'Ejecute',
          text: 'El análisis corre sobre datos oficiales, con las fuentes nombradas y el código visible en cada paso.',
        },
        {
          title: 'Itere',
          text: 'Ajuste denominador, agregación, período o método — y compare escenarios conservando el historial de lo probado.',
        },
        {
          title: 'Documente',
          text: 'Exporte script, figuras e informe; describa el método en el artículo y cite las bases originales con los identificadores provistos.',
        },
      ],
    },
    outcomes: {
      title: 'Qué cambia en el proyecto',
      subtitle: 'Menos plomería, más interpretación — y un método que resiste la revisión.',
      items: [
        {
          title: 'Del dato bruto al resultado en horas',
          text: 'El tiempo que iba a descarga y limpieza vuelve al análisis y a la redacción.',
        },
        {
          title: 'Método auditable para revisores',
          text: 'El script exportado describe exactamente lo que se hizo, con fuente, filtro y versión.',
        },
        {
          title: 'Referencias que resisten la verificación',
          text: 'Autores, DOI y año verificados contra las bases de literatura antes de entrar en el texto.',
        },
        {
          title: 'Accesible para el grupo y el estudiante',
          text: 'Plan gratuito para aprender y descuento académico para estudiantes, residentes y docentes con correo institucional verificado.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Puedo usar los resultados en un artículo para publicación?',
          a: 'Sí. Los análisis son reproducibles y el script exportado permite describir el método. Recomendamos registrar la versión de la plataforma usada y citar las bases originales de cada serie.',
        },
        {
          q: '¿Los datos son solo de Brasil?',
          a: 'No. Además del DATASUS, el acervo incluye bases globales y regionales — OMS (GHO), OPS, CDC, ECDC, Africa CDC, RKI, China CDC, entre otras.',
        },
        {
          q: '¿Hay descuento para estudiantes y docentes?',
          a: 'Sí: descuento académico del 50% para estudiantes, residentes y profesores con correo institucional verificado, sin fecha de vencimiento. Condiciones completas en la página de planes.',
        },
        {
          q: '¿Necesito saber programar?',
          a: 'No para usar la plataforma: la interfaz es conversacional. Ayuda al adaptar el script exportado, que es Python estándar con las bibliotecas habituales de análisis de datos.',
        },
        {
          q: '¿Los archivos que subo quedan privados?',
          a: 'Los archivos subidos quedan en su espacio de trabajo, accesibles para su cuenta y para el grupo con quien comparta el proyecto. Los detalles de tratamiento de datos están en la política de privacidad.',
        },
        {
          q: '¿Cómo cito EpidBot?',
          a: 'Kwar-AI. EpidBot (versión 2.8.0) [software]. Río de Janeiro: Kwar-AI. Disponible en https://epidbot.kwar-ai.com.br.',
        },
      ],
    },
    related: {
      title: 'Siga explorando',
      items: [
        { label: 'EpidBot', to: '/epidbot', text: 'La plataforma completa: fuentes, herramientas, complementos y seguridad.' },
        { label: 'Planes', to: '/planos', text: 'Límites de uso, funciones por plan y descuento académico.' },
        { label: 'Documentación', to: '/documentacao', text: 'Guías, manual, referencia de API y tutoriales en video.' },
      ],
    },
    cta: {
      title: 'Traiga la pregunta de su próximo artículo',
      text: 'Abra una cuenta gratuita, ejecute un análisis con datos oficiales y vea salir el script junto al resultado. Si el proyecto crece, el plan académico cubre al grupo.',
      primary: 'Comenzar gratis',
      secondary: 'Ver planes',
    },
  },
};
