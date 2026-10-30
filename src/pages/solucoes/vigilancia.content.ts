import {
  CalendarClock,
  Clock,
  FileText,
  LineChart,
  MapPin,
  MessageSquare,
  Search,
} from 'lucide-react';
import type { SolutionContentByLocale } from './types';

export const vigilanciaContent: SolutionContentByLocale = {
  'pt-BR': {
    seo: {
      title: 'EpidBot para Profissionais de Vigilância Epidemiológica',
      description:
        'Rotina de vigilância com IA: séries por semana epidemiológica, taxas por município, boletim pronto para publicar e investigação de surto com fonte e método ao lado.',
    },
    hero: {
      badge: 'Vigilância Epidemiológica',
      titleLine1: 'Seu boletim semanal',
      titleGradient: 'sem montar planilha do zero.',
      subtitle:
        'O EpidBot lê as bases oficiais, calcula as séries e as taxas do seu território e entrega o resultado com gráfico, fonte e código — para você gastar o tempo na interpretação e na resposta ao gestor.',
      primaryCta: 'Começar grátis',
      secondaryCta: 'Ver planos',
      secondaryTo: '/planos',
      note: 'A plataforma apoia o profissional de vigilância e não substitui a notificação nos sistemas oficiais nem o julgamento epidemiológico da equipe.',
    },
    stats: [
      { value: '41', label: 'fontes abertas integradas', note: 'DATASUS, OMS, OPAS, CDC, ECDC' },
      { value: '321', label: 'ferramentas de análise disponíveis para o agente' },
      { value: '4', label: 'sistemas do DATASUS lidos diretamente', note: 'SINAN, SIM, SINASC, SIH/SIA + CNES, PNI, e-SUS' },
      { value: '2019–2026', label: 'série pública de SRAG (Sivep-Gripe) disponível' },
    ],
    statsFootnote:
      'Números verificados no código do produto e nas bases públicas citadas. O uso dos dados segue a política de fontes abertas da plataforma.',
    challenges: {
      title: 'A rotina que consome a semana',
      subtitle:
        'O prazo do boletim não muda, mas a base muda de formato, de versão e de retificação — e a conferência é sempre manual.',
      items: [
        {
          icon: Clock,
          title: 'A semana epidemiológica não espera',
          text: 'Extrair, juntar e conferir bases consome os dias que deveriam ser de análise; sobra pouco tempo para interpretar a tendência.',
        },
        {
          icon: MapPin,
          title: 'Comparar territórios de portes diferentes',
          text: 'Número absoluto não compara municípios: é preciso taxa, denominador populacional e o mesmo recorte para todos.',
        },
        {
          icon: MessageSquare,
          title: 'Explicar de onde veio o número',
          text: 'O gestor pergunta por que o indicador subiu. Responder exige mostrar fonte, filtro, período e o que mudou na base.',
        },
      ],
    },
    capabilities: {
      title: 'O que o EpidBot faz na vigilância',
      subtitle:
        'Da pergunta simples ao boletim publicado, com rastreabilidade em cada passo.',
      items: [
        {
          icon: MessageSquare,
          title: 'Pergunta em português',
          text: '"Casos de dengue por semana epidemiológica nos últimos 12 meses, comparando minha regional com o estado." A resposta vem com gráfico e código.',
        },
        {
          icon: LineChart,
          title: 'Séries por semana epidemiológica',
          text: 'Agravos notificáveis, SRAG, internações e mortalidade organizados por SE, faixa etária e município de residência.',
        },
        {
          icon: MapPin,
          title: 'Taxas com denominador',
          text: 'Incidência e mortalidade por 100 mil habitantes, com a população de referência explícita e o recorte geográfico que você escolher.',
        },
        {
          icon: FileText,
          title: 'Boletim pronto para publicar',
          text: 'Relatório em PDF ou HTML com gráficos, tabelas, fonte e descrição do método — no formato que a secretaria já usa.',
        },
        {
          icon: Search,
          title: 'Apoio à investigação de surto',
          text: 'Workspaces de incidente com histórico de perguntas, tarefas atribuídas e consolidação do que a equipe apurou em campo.',
        },
        {
          icon: CalendarClock,
          title: 'Rotina que se repete sozinha',
          text: 'Perguntas salvas e relatórios agendados entregam o acompanhamento semanal ou mensal sem refazer o trabalho.',
        },
      ],
    },
    workflow: {
      title: 'Como entra na rotina',
      subtitle: 'Quatro passos do dado bruto ao boletim compartilhado.',
      stepLabel: 'Passo',
      steps: [
        {
          title: 'Escolha o recorte',
          text: 'Agravo, municípios ou regional, período e faixa etária. Se houver base interna, envie o arquivo.',
        },
        {
          title: 'Pergunte',
          text: 'Descreva o indicador que você precisa. O EpidBot busca nas fontes oficiais e monta a série.',
        },
        {
          title: 'Confira',
          text: 'Valide números e denominadores com a equipe; ajuste o recorte quando a base for retificada.',
        },
        {
          title: 'Publique',
          text: 'Exporte o boletim, compartilhe o link e agende a próxima edição.',
        },
      ],
    },
    outcomes: {
      title: 'O que muda na semana de trabalho',
      subtitle: 'O ganho aparece no tempo devolvido à análise e na segurança do número publicado.',
      items: [
        {
          title: 'Boletim em horas, não em dias',
          text: 'A coleta e o cruzamento saem do caminho manual e sobram horas para interpretar o cenário.',
        },
        {
          title: 'Resposta rápida ao gestor',
          text: 'Perguntas pontuais são respondidas na hora, com gráfico e fonte prontos para a reunião de gabinete.',
        },
        {
          title: 'Menos retrabalho com retificação',
          text: 'Quando a base é corrigida, a análise é reexecutada — e os relatórios antigos ficam marcados como desatualizados.',
        },
        {
          title: 'Nada é publicado sem procedência',
          text: 'Cada número sai com fonte, filtro e script, o que sustenta a resposta a auditoria e a órgãos de controle.',
        },
      ],
    },
    faq: {
      title: 'Perguntas frequentes',
      items: [
        {
          q: 'O EpidBot substitui o TabNet ou os sistemas oficiais?',
          a: 'Não. Ele é uma camada de análise sobre os sistemas oficiais: a notificação continua sendo feita no sistema de origem e o dado oficial segue sendo a referência.',
        },
        {
          q: 'Funciona para municípios pequenos?',
          a: 'Sim. O plano gratuito permite começar com as fontes públicas e o volume de consultas é compatível com a rotina de um município de pequeno porte.',
        },
        {
          q: 'E quando o dado é retificado?',
          a: 'A análise é reexecutada sobre a base atualizada e os relatórios anteriores ficam sinalizados como desatualizados, para evitar que um número antigo circule.',
        },
        {
          q: 'Preciso instalar algo?',
          a: 'Não: o uso é pelo navegador. Para mapas e integração com SIG existem plugins para QGIS e GeoLibre, disponíveis a partir do plano Pro.',
        },
        {
          q: 'Como levo o resultado para a gestão?',
          a: 'Exportando o boletim em PDF ou HTML, gerando um link de compartilhamento da análise ou apresentando o gráfico na reunião — o código e a fonte ficam anexos.',
        },
        {
          q: 'Preciso saber programar?',
          a: 'Não para o uso diário. O código aparece ao lado de cada resultado e pode ser exportado quando a equipe quiser adaptar ou auditar a análise.',
        },
      ],
    },
    related: {
      title: 'Continue explorando',
      items: [
        { label: 'Municípios', to: '/epidbot-landing', text: 'A proposta para secretarias municipais de saúde.' },
        { label: 'Hospitais', to: '/hospitais', text: 'Vigilância hospitalar e leitura de internações.' },
        { label: 'Documentação', to: '/documentacao', text: 'Guias, manual e tutoriais para começar hoje.' },
      ],
    },
    cta: {
      title: 'Teste com o agravo que você acompanha agora',
      text: 'Abra uma conta gratuita, peça a série do seu município e compare com o boletim da semana passada. Se o tempo economizado fizer sentido, o próximo passo é agendar a rotina.',
      primary: 'Começar grátis',
      secondary: 'Ver planos',
    },
  },

  en: {
    seo: {
      title: 'EpidBot for Epidemiological Surveillance Professionals',
      description:
        'Surveillance routine with AI: series by epidemiological week, rates per municipality, a bulletin ready to publish and outbreak investigation with source and method alongside.',
    },
    hero: {
      badge: 'Epidemiological Surveillance',
      titleLine1: 'Your weekly bulletin',
      titleGradient: 'without rebuilding the spreadsheet.',
      subtitle:
        'EpidBot reads the official databases, computes the series and rates for your territory and returns the result with chart, source and code — so your time goes into interpretation and into answering management.',
      primaryCta: 'Start for free',
      secondaryCta: 'See plans',
      secondaryTo: '/planos',
      note: 'The platform supports the surveillance professional and does not replace notification in the official systems or the epidemiological judgement of the team.',
    },
    stats: [
      { value: '41', label: 'open sources integrated', note: 'DATASUS, WHO, PAHO, CDC, ECDC' },
      { value: '321', label: 'analysis tools available to the agent' },
      { value: '4', label: 'DATASUS systems read directly', note: 'SINAN, SIM, SINASC, SIH/SIA + CNES, PNI, e-SUS' },
      { value: '2019–2026', label: 'public severe respiratory illness series (Sivep-Gripe) available' },
    ],
    statsFootnote:
      'Figures verified in the product code and in the public datasets cited. Data use follows the platform open-source policy.',
    challenges: {
      title: 'The routine that eats the week',
      subtitle:
        'The bulletin deadline does not move, but the database changes format, version and corrections — and reconciliation stays manual.',
      items: [
        {
          icon: Clock,
          title: 'The epidemiological week waits for no one',
          text: 'Extracting, joining and checking datasets consumes the days that should be for analysis; little time is left to interpret the trend.',
        },
        {
          icon: MapPin,
          title: 'Comparing territories of different sizes',
          text: 'Absolute counts do not compare municipalities: you need rates, a population denominator and the same scope for all of them.',
        },
        {
          icon: MessageSquare,
          title: 'Explaining where the number came from',
          text: 'Management asks why the indicator rose. Answering means showing source, filter, period and what changed in the database.',
        },
      ],
    },
    capabilities: {
      title: 'What EpidBot does in surveillance',
      subtitle: 'From the simple question to the published bulletin, traceable at every step.',
      items: [
        {
          icon: MessageSquare,
          title: 'Ask in plain language',
          text: '"Dengue cases per epidemiological week over the last 12 months, my health region against the state." The answer comes with a chart and the code.',
        },
        {
          icon: LineChart,
          title: 'Series by epidemiological week',
          text: 'Notifiable conditions, severe respiratory illness, admissions and mortality organised by week, age band and municipality of residence.',
        },
        {
          icon: MapPin,
          title: 'Rates with a denominator',
          text: 'Incidence and mortality per 100,000 inhabitants, with the reference population stated and the geographical scope you choose.',
        },
        {
          icon: FileText,
          title: 'A bulletin ready to publish',
          text: 'PDF or HTML report with charts, tables, source and method description — in the format the secretariat already uses.',
        },
        {
          icon: Search,
          title: 'Support for outbreak investigation',
          text: 'Incident workspaces with question history, assigned tasks and a consolidated record of what the field team found.',
        },
        {
          icon: CalendarClock,
          title: 'A routine that repeats itself',
          text: 'Saved questions and scheduled reports deliver the weekly or monthly follow-up without redoing the work.',
        },
      ],
    },
    workflow: {
      title: 'How it fits the routine',
      subtitle: 'Four steps from raw data to a shared bulletin.',
      stepLabel: 'Step',
      steps: [
        {
          title: 'Choose the scope',
          text: 'Condition, municipalities or health region, period and age band. If there is an internal dataset, upload it.',
        },
        {
          title: 'Ask',
          text: 'Describe the indicator you need. EpidBot searches the official sources and assembles the series.',
        },
        {
          title: 'Check',
          text: 'Validate numbers and denominators with the team; adjust the scope when the database is corrected.',
        },
        {
          title: 'Publish',
          text: 'Export the bulletin, share the link and schedule the next edition.',
        },
      ],
    },
    outcomes: {
      title: 'What changes in the working week',
      subtitle:
        'The gain shows up in the time returned to analysis and in the confidence of the published number.',
      items: [
        {
          title: 'A bulletin in hours, not days',
          text: 'Collection and cross-referencing leave the manual path, freeing hours to interpret the scenario.',
        },
        {
          title: 'Fast answers for management',
          text: 'Ad-hoc questions get answered on the spot, with a chart and source ready for the management meeting.',
        },
        {
          title: 'Less rework from corrections',
          text: 'When the database is fixed, the analysis is rerun — and older reports are flagged as outdated.',
        },
        {
          title: 'Nothing published without provenance',
          text: 'Every number ships with source, filter and script, which sustains answers to audit and oversight bodies.',
        },
      ],
    },
    faq: {
      title: 'Frequent questions',
      items: [
        {
          q: 'Does EpidBot replace TabNet or the official systems?',
          a: 'No. It is an analysis layer on top of the official systems: notification continues in the system of origin and the official data remains the reference.',
        },
        {
          q: 'Does it work for small municipalities?',
          a: 'Yes. The free plan starts with the public sources and the consultation volume fits the routine of a small municipality.',
        },
        {
          q: 'And when the data is corrected?',
          a: 'The analysis is rerun on the updated database and earlier reports are flagged as outdated, so an old number does not keep circulating.',
        },
        {
          q: 'Do I need to install anything?',
          a: 'No: it runs in the browser. For maps and GIS integration there are QGIS and GeoLibre plugins, available from the Pro plan up.',
        },
        {
          q: 'How do I take the result to management?',
          a: 'Export the bulletin as PDF or HTML, generate a share link for the analysis or present the chart in the meeting — the code and the source stay attached.',
        },
        {
          q: 'Do I need to know how to code?',
          a: 'Not for daily use. The code appears beside every result and can be exported when the team wants to adapt or audit the analysis.',
        },
      ],
    },
    related: {
      title: 'Keep exploring',
      items: [
        { label: 'Municipalities', to: '/epidbot-landing', text: 'The proposal for municipal health secretariats.' },
        { label: 'Hospitals', to: '/hospitais', text: 'Hospital surveillance and the reading of admissions.' },
        { label: 'Documentation', to: '/documentacao', text: 'Guides, manual and tutorials to start today.' },
      ],
    },
    cta: {
      title: 'Try it with the condition you track right now',
      text: 'Open a free account, ask for your municipality series and compare it with last week bulletin. If the time saved makes sense, the next step is scheduling the routine.',
      primary: 'Start for free',
      secondary: 'See plans',
    },
  },

  es: {
    seo: {
      title: 'EpidBot para Profesionales de Vigilancia Epidemiológica',
      description:
        'Rutina de vigilancia con IA: series por semana epidemiológica, tasas por municipio, boletín listo para publicar e investigación de brotes con fuente y método al lado.',
    },
    hero: {
      badge: 'Vigilancia Epidemiológica',
      titleLine1: 'Su boletín semanal',
      titleGradient: 'sin armar la planilla desde cero.',
      subtitle:
        'EpidBot lee las bases oficiales, calcula las series y las tasas de su territorio y entrega el resultado con gráfico, fuente y código — para que su tiempo vaya a la interpretación y a la respuesta a la dirección.',
      primaryCta: 'Comenzar gratis',
      secondaryCta: 'Ver planes',
      secondaryTo: '/planos',
      note: 'La plataforma apoya al profesional de vigilancia y no reemplaza la notificación en los sistemas oficiales ni el juicio epidemiológico del equipo.',
    },
    stats: [
      { value: '41', label: 'fuentes abiertas integradas', note: 'DATASUS, OMS, OPS, CDC, ECDC' },
      { value: '321', label: 'herramientas de análisis disponibles para el agente' },
      { value: '4', label: 'sistemas del DATASUS leídos directamente', note: 'SINAN, SIM, SINASC, SIH/SIA + CNES, PNI, e-SUS' },
      { value: '2019–2026', label: 'serie pública de SRAG (Sivep-Gripe) disponible' },
    ],
    statsFootnote:
      'Cifras verificadas en el código del producto y en las bases públicas citadas. El uso de los datos sigue la política de fuentes abiertas de la plataforma.',
    challenges: {
      title: 'La rutina que consume la semana',
      subtitle:
        'El plazo del boletín no cambia, pero la base cambia de formato, de versión y de rectificación — y la verificación sigue siendo manual.',
      items: [
        {
          icon: Clock,
          title: 'La semana epidemiológica no espera',
          text: 'Extraer, unir y verificar bases consume los días que deberían ser de análisis; queda poco tiempo para interpretar la tendencia.',
        },
        {
          icon: MapPin,
          title: 'Comparar territorios de tamaños distintos',
          text: 'El número absoluto no compara municipios: se necesita tasa, denominador poblacional y el mismo recorte para todos.',
        },
        {
          icon: MessageSquare,
          title: 'Explicar de dónde salió el número',
          text: 'La dirección pregunta por qué subió el indicador. Responder exige mostrar fuente, filtro, período y qué cambió en la base.',
        },
      ],
    },
    capabilities: {
      title: 'Qué hace EpidBot en la vigilancia',
      subtitle: 'De la pregunta simple al boletín publicado, con trazabilidad en cada paso.',
      items: [
        {
          icon: MessageSquare,
          title: 'Pregunta en español',
          text: '"Casos de dengue por semana epidemiológica en los últimos 12 meses, comparando mi región con el estado." La respuesta llega con gráfico y código.',
        },
        {
          icon: LineChart,
          title: 'Series por semana epidemiológica',
          text: 'Eventos notificables, SRAG, internaciones y mortalidad organizados por semana, grupo de edad y municipio de residencia.',
        },
        {
          icon: MapPin,
          title: 'Tasas con denominador',
          text: 'Incidencia y mortalidad por 100 mil habitantes, con la población de referencia explícita y el recorte geográfico que usted elija.',
        },
        {
          icon: FileText,
          title: 'Boletín listo para publicar',
          text: 'Informe en PDF o HTML con gráficos, tablas, fuente y descripción del método — en el formato que ya usa la secretaría.',
        },
        {
          icon: Search,
          title: 'Apoyo a la investigación de brotes',
          text: 'Espacios de incidente con historial de preguntas, tareas asignadas y consolidación de lo que el equipo verificó en campo.',
        },
        {
          icon: CalendarClock,
          title: 'Una rutina que se repite sola',
          text: 'Preguntas guardadas e informes programados entregan el seguimiento semanal o mensual sin rehacer el trabajo.',
        },
      ],
    },
    workflow: {
      title: 'Cómo entra en la rutina',
      subtitle: 'Cuatro pasos del dato bruto al boletín compartido.',
      stepLabel: 'Paso',
      steps: [
        {
          title: 'Elija el recorte',
          text: 'Evento, municipios o región, período y grupo de edad. Si hay base interna, suba el archivo.',
        },
        {
          title: 'Pregunte',
          text: 'Describa el indicador que necesita. EpidBot busca en las fuentes oficiales y arma la serie.',
        },
        {
          title: 'Verifique',
          text: 'Valide cifras y denominadores con el equipo; ajuste el recorte cuando la base sea rectificada.',
        },
        {
          title: 'Publique',
          text: 'Exporte el boletín, comparta el enlace y programe la próxima edición.',
        },
      ],
    },
    outcomes: {
      title: 'Qué cambia en la semana de trabajo',
      subtitle:
        'La ganancia aparece en el tiempo devuelto al análisis y en la seguridad de la cifra publicada.',
      items: [
        {
          title: 'Boletín en horas, no en días',
          text: 'La recolección y el cruce salen del camino manual y sobran horas para interpretar el escenario.',
        },
        {
          title: 'Respuesta rápida a la dirección',
          text: 'Las preguntas puntuales se responden en el momento, con gráfico y fuente listos para la reunión de gabinete.',
        },
        {
          title: 'Menos retrabajo por rectificaciones',
          text: 'Cuando se corrige la base, el análisis se vuelve a ejecutar y los informes anteriores quedan marcados como desactualizados.',
        },
        {
          title: 'Nada se publica sin procedencia',
          text: 'Cada cifra sale con fuente, filtro y script, lo que sostiene la respuesta a auditorías y órganos de control.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿EpidBot reemplaza TabNet o los sistemas oficiales?',
          a: 'No. Es una capa de análisis sobre los sistemas oficiales: la notificación sigue haciéndose en el sistema de origen y el dato oficial sigue siendo la referencia.',
        },
        {
          q: '¿Funciona para municipios pequeños?',
          a: 'Sí. El plan gratuito permite comenzar con las fuentes públicas y el volumen de consultas es compatible con la rutina de un municipio pequeño.',
        },
        {
          q: '¿Y cuando el dato se rectifica?',
          a: 'El análisis se vuelve a ejecutar sobre la base actualizada y los informes anteriores quedan señalados como desactualizados, para evitar que circule una cifra antigua.',
        },
        {
          q: '¿Necesito instalar algo?',
          a: 'No: se usa desde el navegador. Para mapas e integración con SIG existen complementos para QGIS y GeoLibre, disponibles desde el plan Pro.',
        },
        {
          q: '¿Cómo llevo el resultado a la dirección?',
          a: 'Exportando el boletín en PDF o HTML, generando un enlace de compartición del análisis o presentando el gráfico en la reunión — el código y la fuente van adjuntos.',
        },
        {
          q: '¿Necesito saber programar?',
          a: 'No para el uso diario. El código aparece junto a cada resultado y puede exportarse cuando el equipo quiera adaptar o auditar el análisis.',
        },
      ],
    },
    related: {
      title: 'Siga explorando',
      items: [
        { label: 'Municipios', to: '/epidbot-landing', text: 'La propuesta para secretarías municipales de salud.' },
        { label: 'Hospitales', to: '/hospitais', text: 'Vigilancia hospitalaria y lectura de internaciones.' },
        { label: 'Documentación', to: '/documentacao', text: 'Guías, manual y tutoriales para empezar hoy.' },
      ],
    },
    cta: {
      title: 'Pruébelo con el evento que sigue ahora',
      text: 'Abra una cuenta gratuita, pida la serie de su municipio y compárela con el boletín de la semana pasada. Si el tiempo ahorrado tiene sentido, el siguiente paso es programar la rutina.',
      primary: 'Comenzar gratis',
      secondary: 'Ver planes',
    },
  },
};
