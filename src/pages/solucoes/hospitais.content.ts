import {
  Activity,
  Code2,
  Database,
  FileText,
  MessageSquare,
  ShieldCheck,
  Users,
} from 'lucide-react';
import type { SolutionContentByLocale } from './types';

export const hospitaisContent: SolutionContentByLocale = {
  'pt-BR': {
    seo: {
      title: 'EpidBot para Hospitais e Laboratórios',
      description:
        'Inteligência epidemiológica para hospitais e laboratórios: cruze SINAN, SIH/SIA, Sivep-Gripe e bases assistenciais, separe sinal epidemiológico de artefato operacional e produza relatórios auditáveis.',
    },
    hero: {
      badge: 'Hospitais e Laboratórios',
      titleLine1: 'Vigilância epidemiológica hospitalar',
      titleGradient: 'com o dado certo, na hora certa.',
      subtitle:
        'O EpidBot conecta registros assistenciais e fontes públicas oficiais para apoiar a CCIH, o núcleo de vigilância epidemiológica e a gestão hospitalar na leitura de surtos, internações e tendências — com método documentado e rastreável.',
      primaryCta: 'Começar grátis',
      secondaryCta: 'Falar com a equipe',
      secondaryTo: '/?scroll=contact',
      note: 'Co-desenvolvimento com um hospital público no Rio de Janeiro, sob conformidade com a LGPD. Dados de pacientes permanecem sob o controlador hospitalar.',
    },
    stats: [
      { value: '41', label: 'fontes de dados abertas na biblioteca epidatasets', note: 'DATASUS, OMS, OPAS, CDC, ECDC' },
      { value: '321', label: 'ferramentas de análise disponíveis para o agente' },
      { value: '2019–2026', label: 'Série pública de SRAG (Sivep-Gripe) acessível' },
      { value: '100%', label: 'das respostas acompanhadas do código usado na análise', note: 'script reproduzível exportável' },
    ],
    statsFootnote:
      'Números verificados no código do produto e nas bases públicas citadas. Nenhum indicador individual de paciente é publicado nestas páginas.',
    challenges: {
      title: 'O que consome o tempo da vigilância hospitalar',
      subtitle:
        'A dificuldade raramente é a falta de dado: é conciliar bases, conferir números e explicar de onde veio cada conclusão.',
      items: [
        {
          icon: Activity,
          title: 'Sinal ou artefato?',
          text: 'Uma alta de casos pode ser epidemia, mudança de critério de notificação, atraso de digitação ou variação de demanda. Separar esses efeitos exige cruzar várias fontes — e é o que toma mais tempo.',
        },
        {
          icon: Database,
          title: 'Sistemas que não conversam',
          text: 'SINAN, SIM, SINASC, SIH/SIA, Sivep-Gripe, e-SUS e planilhas locais vivem em bases separadas. Consolidar por semana epidemiológica, município de residência e faixa etária é trabalho manual e recorrente.',
        },
        {
          icon: FileText,
          title: 'Prazo regulatório e repasse',
          text: 'Notificação compulsória, relatório para a secretaria e prestação de contas exigem números conferidos e uma memória de cálculo que qualquer auditor consiga seguir.',
        },
      ],
    },
    capabilities: {
      title: 'O que o EpidBot faz no hospital',
      subtitle:
        'Perguntas em linguagem natural, execução sobre dados oficiais e resultado acompanhado do código — do caso isolado ao relatório da CCIH.',
      items: [
        {
          icon: MessageSquare,
          title: 'Pergunta em português',
          text: '"Quantas internações por SRAG na minha macrorregião, por faixa etária, nas últimas 12 semanas?" A resposta vem com série, gráfico e o código que a produziu.',
        },
        {
          icon: Database,
          title: 'Fontes oficiais integradas',
          text: 'SINAN, SIM, SINASC, SIH/SIA, CNES, PNI, Sivep-Gripe e e-SUS Notifica, mais OMS, OPAS, CDC e ECDC — 41 fontes abertas em uma única interface.',
        },
        {
          icon: ShieldCheck,
          title: 'Separação de artefatos operacionais',
          text: 'Cruze notificações, internações e produção ambulatorial para distinguir aumento real de transmissão de mudança de registro, de glosa ou de demanda.',
        },
        {
          icon: FileText,
          title: 'Relatórios e boletins',
          text: 'Relatórios em PDF ou HTML com gráficos, tabelas e a descrição do método, prontos para a CCIH, a direção e a secretaria municipal.',
        },
        {
          icon: Code2,
          title: 'Análise reproduzível',
          text: 'Cada análise é consolidada em um script documentado: a mesma pergunta, com o mesmo recorte, produz o mesmo resultado na semana seguinte.',
        },
        {
          icon: Users,
          title: 'Trabalho em equipe',
          text: 'Workspaces por projeto com papéis, revisão entre pares, histórico de versões e alerta de relatório desatualizado quando a base muda.',
        },
      ],
    },
    workflow: {
      title: 'Como funciona na rotina do hospital',
      subtitle: 'Da pergunta da segunda-feira ao relatório entregue na sexta, sem montar planilha do zero.',
      stepLabel: 'Passo',
      steps: [
        {
          title: 'Contextualize',
          text: 'Envie os arquivos internos que a equipe já usa (CSV, XLSX, Parquet) e escolha o recorte: município, região de saúde, período, agravo.',
        },
        {
          title: 'Pergunte',
          text: 'Descreva a pergunta como faria para um colega. O EpidBot seleciona as fontes, executa a análise e mostra o caminho.',
        },
        {
          title: 'Valide',
          text: 'Confira números, séries e gráficos, peça ajustes de denominador, faixa etária ou período — e registre a interpretação da equipe.',
        },
        {
          title: 'Entregue',
          text: 'Exporte o relatório, compartilhe o link com a equipe e agende a repetição semanal ou mensal do boletim.',
        },
      ],
    },
    outcomes: {
      title: 'Resultados esperados na operação',
      subtitle: 'O que muda quando a análise deixa de depender de uma planilha montada à mão.',
      items: [
        {
          title: 'Menos tempo montando planilha',
          text: 'O trabalho recorrente de extrair, juntar e conferir bases passa a ser uma pergunta salva, repetível a cada semana.',
        },
        {
          title: 'Memória de cálculo auditável',
          text: 'Cada número sai com a fonte, o filtro aplicado e o script — o que facilita auditoria interna, prestação de contas e resposta a órgãos de controle.',
        },
        {
          title: 'Hospital e território na mesma leitura',
          text: 'Internações hospitalares e indicadores do município aparecem juntos, ajudando a antecipar demanda assistencial antes do pico.',
        },
        {
          title: 'LGPD por desenho',
          text: 'Operação com dados agregados ou sob instrumento específico de tratamento; implantação em nuvem dedicada ou on-premises, com licenças de código aberto.',
        },
      ],
    },
    faq: {
      title: 'Perguntas frequentes',
      items: [
        {
          q: 'O EpidBot substitui o CCIH ou o núcleo de vigilância?',
          a: 'Não. Ele apoia o profissional: automatiza a coleta e o cruzamento de dados e deixa a interpretação clínica e epidemiológica com a equipe. A decisão sobre surto, isolamento ou comunicação continua sendo do hospital.',
        },
        {
          q: 'Como ficam os dados de pacientes?',
          a: 'O hospital permanece controlador dos seus dados. É possível operar apenas com dados agregados ou com bases internas sob instrumento específico de tratamento, assinado caso a caso, com registro de finalidade e base legal conforme a LGPD.',
        },
        {
          q: 'Quais sistemas vocês já leem?',
          a: 'SINAN, SIM, SINASC, SIH/SIA, CNES, PNI, Sivep-Gripe/e-SUS Notifica e dados abertos da ANVISA, além de OMS, OPAS, CDC e ECDC. Para bases internas, CSV, XLSX, Parquet e DuckDB.',
        },
        {
          q: 'Preciso de equipe técnica para usar?',
          a: 'Não para o uso diário: a interface é de conversa. Para integração automatizada com sistemas internos existem chaves de API a partir do plano Pro, criadas em Configurações → Integrações.',
        },
        {
          q: 'Já existe uso em ambiente hospitalar?',
          a: 'Sim: o EpidBot é co-desenvolvido e validado com um hospital público no Rio de Janeiro, o que permite testar as análises contra a rotina real de vigilância antes de levá-las a outros hospitais.',
        },
      ],
    },
    related: {
      title: 'Continue explorando',
      items: [
        { label: 'EpidBot', to: '/epidbot', text: 'A plataforma completa: fontes, ferramentas, plugins e segurança.' },
        { label: 'Planos', to: '/planos', text: 'Limites de uso, recursos por plano e desconto acadêmico.' },
        { label: 'Documentação', to: '/documentacao', text: 'Guias, manual, referência de API e material de treinamento.' },
      ],
    },
    cta: {
      title: 'Comece pela sua pergunta mais repetida',
      text: 'Crie uma conta gratuita, traga uma pergunta real da sua rotina de vigilância e veja a análise com o código ao lado. Se fizer sentido para o hospital, a conversa seguinte é sobre integração e governança de dados.',
      primary: 'Começar grátis',
      secondary: 'Ver planos',
    },
  },

  en: {
    seo: {
      title: 'EpidBot for Hospitals and Laboratories',
      description:
        'Hospital epidemiology with AI: cross-reference SINAN, SIH/SIA, Sivep-Gripe and internal records, separate real signals from operational artefacts and produce auditable reports.',
    },
    hero: {
      badge: 'Hospitals and Laboratories',
      titleLine1: 'Hospital epidemiological surveillance',
      titleGradient: 'with the right data, on time.',
      subtitle:
        'EpidBot connects clinical records and official public sources to support infection control committees, surveillance units and hospital management in reading outbreaks, admissions and trends — with a documented, traceable method.',
      primaryCta: 'Start for free',
      secondaryCta: 'Talk to the team',
      secondaryTo: '/?scroll=contact',
      note: 'Co-developed with a public hospital in Rio de Janeiro under LGPD compliance. Patient data stays under the hospital controller.',
    },
    stats: [
      { value: '41', label: 'open data sources in the epidatasets library', note: 'DATASUS, WHO, PAHO, CDC, ECDC' },
      { value: '321', label: 'analysis tools available to the agent' },
      { value: '2019–2026', label: 'public severe respiratory illness series (Sivep-Gripe) available' },
      { value: '100%', label: 'of answers ship with the code behind the analysis', note: 'exportable reproducible script' },
    ],
    statsFootnote:
      'Figures verified in the product code and in the public datasets cited. No individual patient indicator is published on these pages.',
    challenges: {
      title: 'What eats the time of hospital surveillance',
      subtitle:
        'The hard part is rarely a missing dataset: it is reconciling systems, checking numbers and explaining where each conclusion came from.',
      items: [
        {
          icon: Activity,
          title: 'Signal or artefact?',
          text: 'A rise in cases may be an outbreak, a change in reporting criteria, a typing backlog or a shift in demand. Telling them apart means comparing several sources — and that is what takes the longest.',
        },
        {
          icon: Database,
          title: 'Systems that do not talk',
          text: 'SINAN, SIM, SINASC, SIH/SIA, Sivep-Gripe, e-SUS and local spreadsheets live apart. Consolidating by epidemiological week, municipality of residence and age band is manual, recurring work.',
        },
        {
          icon: FileText,
          title: 'Statutory deadlines',
          text: 'Mandatory notifications, reports to the health secretariat and accountability filings all demand checked figures and a calculation trail any auditor can follow.',
        },
      ],
    },
    capabilities: {
      title: 'What EpidBot does inside the hospital',
      subtitle:
        'Questions in plain language, execution over official data, and every result accompanied by its code — from a single case to the committee report.',
      items: [
        {
          icon: MessageSquare,
          title: 'Ask in plain language',
          text: '"How many severe respiratory admissions in my region, by age band, in the last 12 weeks?" The answer comes with the series, the chart and the code that produced it.',
        },
        {
          icon: Database,
          title: 'Official sources, integrated',
          text: 'SINAN, SIM, SINASC, SIH/SIA, CNES, PNI, Sivep-Gripe and e-SUS Notifica, plus WHO, PAHO, CDC and ECDC — 41 open sources behind one interface.',
        },
        {
          icon: ShieldCheck,
          title: 'Operational artefacts untangled',
          text: 'Cross healthcare notifications, admissions and outpatient production to separate real transmission from coding changes, claim rejections or demand shifts.',
        },
        {
          icon: FileText,
          title: 'Reports and bulletins',
          text: 'PDF or HTML reports with charts, tables and a method description, ready for the infection control committee, hospital direction and the municipal secretariat.',
        },
        {
          icon: Code2,
          title: 'Reproducible analysis',
          text: 'Every analysis is consolidated into a documented script: the same question, with the same filters, yields the same result next week.',
        },
        {
          icon: Users,
          title: 'Team work',
          text: 'Project workspaces with roles, peer review, version history and stale-report alerts when the underlying data changes.',
        },
      ],
    },
    workflow: {
      title: 'How it fits the hospital week',
      subtitle: "From Monday's question to Friday's report, without rebuilding the spreadsheet.",
      stepLabel: 'Step',
      steps: [
        {
          title: 'Set the context',
          text: 'Upload the internal files the team already uses (CSV, XLSX, Parquet) and choose the scope: municipality, health region, period, condition.',
        },
        {
          title: 'Ask',
          text: 'Describe the question the way you would to a colleague. EpidBot selects the sources, runs the analysis and shows the path.',
        },
        {
          title: 'Validate',
          text: 'Check numbers, series and charts, adjust denominator, age band or period — and record the team interpretation.',
        },
        {
          title: 'Deliver',
          text: 'Export the report, share the link with the team and schedule the weekly or monthly repeat of the bulletin.',
        },
      ],
    },
    outcomes: {
      title: 'What changes in the operation',
      subtitle: 'The difference between a hand-built spreadsheet and an analysis you can rerun.',
      items: [
        {
          title: 'Less time assembling data',
          text: 'The recurring work of extracting, joining and checking datasets becomes a saved question, repeatable every week.',
        },
        {
          title: 'An auditable calculation trail',
          text: 'Every number comes with its source, the filter applied and the script — which eases internal audit, accountability and answers to oversight bodies.',
        },
        {
          title: 'Hospital and territory in one view',
          text: 'Admissions and municipal indicators appear together, helping anticipate care demand before the peak.',
        },
        {
          title: 'Privacy by design',
          text: 'Operation on aggregated data or under a specific data-processing instrument; deployment in a dedicated cloud or on-premises, under open-source licences.',
        },
      ],
    },
    faq: {
      title: 'Frequent questions',
      items: [
        {
          q: 'Does EpidBot replace the infection control committee?',
          a: 'No. It supports the professional: it automates data collection and cross-referencing and leaves clinical and epidemiological interpretation with the team. Decisions about an outbreak, isolation or communication remain with the hospital.',
        },
        {
          q: 'What happens to patient data?',
          a: 'The hospital remains the controller of its data. It can operate on aggregated data alone, or with internal datasets under a specific processing instrument signed case by case, recording purpose and legal basis under the LGPD.',
        },
        {
          q: 'Which systems do you already read?',
          a: 'SINAN, SIM, SINASC, SIH/SIA, CNES, PNI, Sivep-Gripe/e-SUS Notifica and ANVISA open data, plus WHO, PAHO, CDC and ECDC. For internal bases, CSV, XLSX, Parquet and DuckDB.',
        },
        {
          q: 'Do I need a technical team to use it?',
          a: 'Not for daily use: the interface is conversational. For automated integration with internal systems there are API keys from the Pro plan up, created in Settings → Integrations.',
        },
        {
          q: 'Is it already used in a hospital?',
          a: 'Yes: EpidBot is co-developed and validated with a public hospital in Rio de Janeiro, which lets us test analyses against the real surveillance routine before taking them to other hospitals.',
        },
      ],
    },
    related: {
      title: 'Keep exploring',
      items: [
        { label: 'EpidBot', to: '/epidbot', text: 'The full platform: sources, tools, plugins and security.' },
        { label: 'Plans', to: '/planos', text: 'Usage limits, features per plan and the academic discount.' },
        { label: 'Documentation', to: '/documentacao', text: 'Guides, manual, API reference and training material.' },
      ],
    },
    cta: {
      title: 'Start with the question you ask every week',
      text: 'Create a free account, bring a real question from your surveillance routine and see the analysis next to its code. If it fits the hospital, the next conversation is about integration and data governance.',
      primary: 'Start for free',
      secondary: 'See plans',
    },
  },

  es: {
    seo: {
      title: 'EpidBot para Hospitales y Laboratorios',
      description:
        'Inteligencia epidemiológica hospitalaria: cruce SINAN, SIH/SIA, Sivep-Gripe y registros internos, separe señal epidemiológica de artefacto operativo y produzca informes auditables.',
    },
    hero: {
      badge: 'Hospitales y Laboratorios',
      titleLine1: 'Vigilancia epidemiológica hospitalaria',
      titleGradient: 'con el dato correcto, a tiempo.',
      subtitle:
        'EpidBot conecta registros asistenciales y fuentes públicas oficiales para apoyar al comité de control de infecciones, al núcleo de vigilancia y a la dirección del hospital en la lectura de brotes, internaciones y tendencias — con método documentado y trazable.',
      primaryCta: 'Comenzar gratis',
      secondaryCta: 'Hablar con el equipo',
      secondaryTo: '/?scroll=contact',
      note: 'Codesarrollo con un hospital público de Río de Janeiro, en conformidad con la LGPD. Los datos de pacientes permanecen bajo el controlador hospitalario.',
    },
    stats: [
      { value: '41', label: 'fuentes de datos abiertas en la biblioteca epidatasets', note: 'DATASUS, OMS, OPS, CDC, ECDC' },
      { value: '321', label: 'herramientas de análisis disponibles para el agente' },
      { value: '2019–2026', label: 'serie pública de SRAG (Sivep-Gripe) accesible' },
      { value: '100%', label: 'de las respuestas incluyen el código del análisis', note: 'script reproducible exportable' },
    ],
    statsFootnote:
      'Cifras verificadas en el código del producto y en las bases públicas citadas. Ningún indicador individual de paciente se publica en estas páginas.',
    challenges: {
      title: 'Qué consume el tiempo de la vigilancia hospitalaria',
      subtitle:
        'La dificultad rara vez es la falta de datos: es conciliar bases, verificar cifras y explicar de dónde salió cada conclusión.',
      items: [
        {
          icon: Activity,
          title: '¿Señal o artefacto?',
          text: 'Un aumento de casos puede ser epidemia, cambio de criterio de notificación, atraso de digitación o variación de demanda. Separar esos efectos exige cruzar varias fuentes — y es lo que más tiempo toma.',
        },
        {
          icon: Database,
          title: 'Sistemas que no se comunican',
          text: 'SINAN, SIM, SINASC, SIH/SIA, Sivep-Gripe, e-SUS y planillas locales viven en bases separadas. Consolidar por semana epidemiológica, municipio de residencia y grupo de edad es trabajo manual y recurrente.',
        },
        {
          icon: FileText,
          title: 'Plazos normativos',
          text: 'La notificación obligatoria, el informe a la secretaría y la rendición de cuentas exigen cifras verificadas y una memoria de cálculo que cualquier auditor pueda seguir.',
        },
      ],
    },
    capabilities: {
      title: 'Qué hace EpidBot en el hospital',
      subtitle:
        'Preguntas en lenguaje natural, ejecución sobre datos oficiales y resultado acompañado del código — del caso aislado al informe del comité.',
      items: [
        {
          icon: MessageSquare,
          title: 'Pregunta en español',
          text: '"¿Cuántas internaciones por SRAG en mi macrorregión, por grupo de edad, en las últimas 12 semanas?" La respuesta llega con serie, gráfico y el código que la produjo.',
        },
        {
          icon: Database,
          title: 'Fuentes oficiales integradas',
          text: 'SINAN, SIM, SINASC, SIH/SIA, CNES, PNI, Sivep-Gripe y e-SUS Notifica, además de OMS, OPS, CDC y ECDC — 41 fuentes abiertas en una sola interfaz.',
        },
        {
          icon: ShieldCheck,
          title: 'Artefactos operativos separados',
          text: 'Cruce notificaciones, internaciones y producción ambulatoria para distinguir un aumento real de transmisión de un cambio de registro, de glosa o de demanda.',
        },
        {
          icon: FileText,
          title: 'Informes y boletines',
          text: 'Informes en PDF o HTML con gráficos, tablas y la descripción del método, listos para el comité, la dirección y la secretaría municipal.',
        },
        {
          icon: Code2,
          title: 'Análisis reproducible',
          text: 'Cada análisis se consolida en un script documentado: la misma pregunta, con el mismo recorte, produce el mismo resultado la semana siguiente.',
        },
        {
          icon: Users,
          title: 'Trabajo en equipo',
          text: 'Espacios de proyecto con roles, revisión entre pares, historial de versiones y alerta de informe desactualizado cuando cambia la base.',
        },
      ],
    },
    workflow: {
      title: 'Cómo encaja en la rutina del hospital',
      subtitle: 'De la pregunta del lunes al informe del viernes, sin armar la planilla desde cero.',
      stepLabel: 'Paso',
      steps: [
        {
          title: 'Contextualice',
          text: 'Suba los archivos internos que el equipo ya usa (CSV, XLSX, Parquet) y elija el recorte: municipio, región de salud, período, evento.',
        },
        {
          title: 'Pregunte',
          text: 'Describa la pregunta como lo haría con un colega. EpidBot selecciona las fuentes, ejecuta el análisis y muestra el camino.',
        },
        {
          title: 'Valide',
          text: 'Revise cifras, series y gráficos, ajuste denominador, grupo de edad o período — y registre la interpretación del equipo.',
        },
        {
          title: 'Entregue',
          text: 'Exporte el informe, comparta el enlace con el equipo y programe la repetición semanal o mensual del boletín.',
        },
      ],
    },
    outcomes: {
      title: 'Resultados esperados en la operación',
      subtitle: 'Qué cambia cuando el análisis deja de depender de una planilla hecha a mano.',
      items: [
        {
          title: 'Menos tiempo armando planillas',
          text: 'El trabajo recurrente de extraer, unir y verificar bases pasa a ser una pregunta guardada, repetible cada semana.',
        },
        {
          title: 'Memoria de cálculo auditable',
          text: 'Cada cifra sale con la fuente, el filtro aplicado y el script — lo que facilita auditoría interna, rendición de cuentas y respuesta a órganos de control.',
        },
        {
          title: 'Hospital y territorio en una sola lectura',
          text: 'Internaciones e indicadores municipales aparecen juntos, ayudando a anticipar la demanda asistencial antes del pico.',
        },
        {
          title: 'Privacidad por diseño',
          text: 'Operación con datos agregados o bajo instrumento específico de tratamiento; despliegue en nube dedicada u on-premises, con licencias de código abierto.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿EpidBot reemplaza al comité de control de infecciones?',
          a: 'No. Apoya al profesional: automatiza la recolección y el cruce de datos y deja la interpretación clínica y epidemiológica al equipo. La decisión sobre brote, aislamiento o comunicación sigue siendo del hospital.',
        },
        {
          q: '¿Qué pasa con los datos de pacientes?',
          a: 'El hospital permanece como controlador de sus datos. Es posible operar solo con datos agregados o con bases internas bajo instrumento específico de tratamiento, firmado caso a caso, con registro de finalidad y base legal conforme a la LGPD.',
        },
        {
          q: '¿Qué sistemas ya leen?',
          a: 'SINAN, SIM, SINASC, SIH/SIA, CNES, PNI, Sivep-Gripe/e-SUS Notifica y datos abiertos de ANVISA, además de OMS, OPS, CDC y ECDC. Para bases internas, CSV, XLSX, Parquet y DuckDB.',
        },
        {
          q: '¿Necesito equipo técnico para usarlo?',
          a: 'No para el uso diario: la interfaz es conversacional. Para integración automatizada con sistemas internos existen claves de API desde el plan Pro, creadas en Configuración → Integraciones.',
        },
        {
          q: '¿Ya se usa en un hospital?',
          a: 'Sí: EpidBot se codesarrolla y valida con un hospital público de Río de Janeiro, lo que permite probar los análisis contra la rutina real de vigilancia antes de llevarlos a otros hospitales.',
        },
      ],
    },
    related: {
      title: 'Siga explorando',
      items: [
        { label: 'EpidBot', to: '/epidbot', text: 'La plataforma completa: fuentes, herramientas, complementos y seguridad.' },
        { label: 'Planes', to: '/planos', text: 'Límites de uso, funciones por plan y descuento académico.' },
        { label: 'Documentación', to: '/documentacao', text: 'Guías, manual, referencia de API y material de capacitación.' },
      ],
    },
    cta: {
      title: 'Empiece por la pregunta que repite cada semana',
      text: 'Cree una cuenta gratuita, traiga una pregunta real de su rutina de vigilancia y vea el análisis junto a su código. Si tiene sentido para el hospital, la siguiente conversación es sobre integración y gobernanza de datos.',
      primary: 'Comenzar gratis',
      secondary: 'Ver planes',
    },
  },
};
