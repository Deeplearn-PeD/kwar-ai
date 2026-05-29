import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import SkipToContent from '@/components/SkipToContent';

const content: Record<string, { title: string; subtitle: string; body: string; disclaimer?: string }> = {
  'pt-BR': {
    title: 'Como funcionam os limites de uso',
    subtitle: 'Entenda como a capacidade de uso é calculada no EpidBot.',
    body: `## Como funcionam os limites de uso

O EpidBot utiliza inteligência artificial para realizar análises epidemiológicas, gerar visualizações, produzir relatórios e interpretar dados de saúde pública.

Nem todas as solicitações consomem a mesma quantidade de recursos computacionais.

Por esse motivo, os limites dos planos são baseados na capacidade de processamento utilizada e não apenas no número de mensagens enviadas.

---

## O que influencia o consumo

Alguns fatores que podem aumentar ou reduzir o consumo incluem:

* Complexidade da análise solicitada;
* Quantidade de dados processados;
* Geração de gráficos e visualizações;
* Produção de relatórios detalhados;
* Consultas envolvendo múltiplas regiões ou países;
* Upload e análise de documentos;
* Utilização de ferramentas avançadas de análise.

---

## O que significa "uso incluído"

Cada plano inclui uma determinada capacidade de utilização da plataforma.

Usuários com necessidades mais avançadas contam com limites progressivamente maiores nos planos superiores.

A maioria dos usuários não atinge esses limites durante o uso normal da plataforma.

---

## Como aproveitar melhor seu plano

Para obter o máximo valor do EpidBot:

* Forneça contexto suficiente em cada solicitação;
* Agrupe perguntas relacionadas quando possível;
* Reutilize análises anteriores;
* Estruture solicitações complexas de forma clara e objetiva.

---

## Precisa de mais capacidade?

Organizações com necessidades avançadas podem entrar em contato com a Kwar-AI para discutir opções institucionais e limites personalizados.

Contato:
[contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)`,
  },
  en: {
    title: 'How usage limits work',
    subtitle: 'Understand how usage capacity is measured in EpidBot.',
    disclaimer: 'In the event of any inconsistency between translations, the Portuguese version shall prevail.',
    body: `## How usage limits work

EpidBot uses artificial intelligence to perform epidemiological analyses, generate visualizations, produce reports and interpret public health data.

Not all requests consume the same amount of computational resources.

For this reason, plan limits are based on the processing capacity used and not solely on the number of messages sent.

---

## What influences consumption

Some factors that may increase or decrease consumption include:

* Complexity of the requested analysis;
* Amount of data processed;
* Generation of charts and visualizations;
* Production of detailed reports;
* Queries involving multiple regions or countries;
* Upload and analysis of documents;
* Use of advanced analysis tools.

---

## What "usage included" means

Each plan includes a certain amount of platform usage capacity.

Users with more advanced needs benefit from progressively higher limits in upper-tier plans.

Most users do not reach these limits during normal use of the platform.

---

## How to make the most of your plan

To get the most value from EpidBot:

* Provide sufficient context in each request;
* Group related questions when possible;
* Reuse previous analyses;
* Structure complex requests clearly and objectively.

---

## Need more capacity?

Organizations with advanced needs may contact Kwar-AI to discuss institutional options and customized limits.

Contact:
[contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)`,
  },
  es: {
    title: 'Cómo funcionan los límites de uso',
    subtitle: 'Comprenda cómo se mide la capacidad de uso en EpidBot.',
    disclaimer: 'En caso de divergencia entre traducciones, prevalecerá la versión en portugués.',
    body: `## Cómo funcionan los límites de uso

EpidBot utiliza inteligencia artificial para realizar análisis epidemiológicos, generar visualizaciones, producir informes e interpretar datos de salud pública.

No todas las solicitudes consumen la misma cantidad de recursos computacionales.

Por este motivo, los límites de los planes se basan en la capacidad de procesamiento utilizada y no solo en la cantidad de mensajes enviados.

---

## Qué influye en el consumo

Algunos factores que pueden aumentar o reducir el consumo incluyen:

* Complejidad del análisis solicitado;
* Cantidad de datos procesados;
* Generación de gráficos y visualizaciones;
* Producción de informes detallados;
* Consultas que involucran múltiples regiones o países;
* Carga y análisis de documentos;
* Uso de herramientas avanzadas de análisis.

---

## Qué significa "uso incluido"

Cada plan incluye una determinada capacidad de utilización de la plataforma.

Los usuarios con necesidades más avanzadas cuentan con límites progresivamente mayores en los planes superiores.

La mayoría de los usuarios no alcanza estos límites durante el uso normal de la plataforma.

---

## Cómo aprovechar mejor su plan

Para obtener el máximo valor de EpidBot:

* Proporcione contexto suficiente en cada solicitud;
* Agrupe preguntas relacionadas cuando sea posible;
* Reutilice análisis anteriores;
* Estructure solicitudes complejas de forma clara y objetiva.

---

## ¿Necesita más capacidad?

Las organizaciones con necesidades avanzadas pueden ponerse en contacto con Kwar-AI para discutir opciones institucionales y límites personalizados.

Contacto:
[contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)`,
  },
};

function renderMarkdown(text: string) {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      const heading = line.replace('## ', '');
      elements.push(
        <h2 key={i} id={heading.toLowerCase().replace(/\s+/g, '-')} className="text-xl font-bold text-white mt-12 mb-4 font-display">
          {heading}
        </h2>
      );
    } else if (line.startsWith('---')) {
      elements.push(<hr key={i} className="my-8 border-white/10" />);
    } else if (line.startsWith('* ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith('* ')) {
        items.push(lines[i].replace('* ', ''));
        i++;
      }
      i--;
      elements.push(
        <ul key={i} className="list-disc pl-6 space-y-1.5 text-white/60 my-3">
          {items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    } else if (line.startsWith('[') && line.includes('](mailto:')) {
      const match = line.match(/\[([^\]]+)\]\(mailto:([^)]+)\)/);
      if (match) {
        elements.push(
          <p key={i} className="text-white/60 my-3">
            <a href={`mailto:${match[2]}`} className="text-kwar-electric hover:text-kwar-electric/80 transition-colors">{match[1]}</a>
          </p>
        );
      }
    } else if (line.trim() !== '') {
      elements.push(
        <p key={i} className="text-white/60 my-3 leading-relaxed">{line}</p>
      );
    }
    i++;
  }

  return elements;
}

export default function LimitesDeUso() {
  const { i18n } = useTranslation();
  const lng = i18n.language.startsWith('en') ? 'en' : i18n.language.startsWith('es') ? 'es' : 'pt-BR';
  const t = content[lng];
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h2[id]');
      const scrollPos = window.scrollY + 160;
      let current = '';
      headings.forEach((h) => {
        const el = h as HTMLElement;
        if (el.offsetTop <= scrollPos) current = el.id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tocItems = t.body
    .split('\n')
    .filter((line) => line.startsWith('## ') && !line.startsWith('### '))
    .map((line) => {
      const title = line.replace('## ', '');
      return { id: title.toLowerCase().replace(/\s+/g, '-'), title };
    });

  return (
    <>
      <SEO
        title={t.title}
        description={t.subtitle}
        path="/limites-de-uso"
      />
      <SkipToContent />
      <div id="main-content" className="min-h-screen bg-[#080c14] text-white font-body antialiased">
      <div className="pt-24 pb-4 border-b border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/30">
            <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/50">{t.title}</span>
          </nav>
        </div>
      </div>

      <div className="py-12 border-b border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h1 className="font-display text-4xl font-bold text-white mb-3">{t.title}</h1>
          <p className="text-kwar-gray text-lg mb-2">{t.subtitle}</p>
          {t.disclaimer && (
            <p className="mt-4 text-xs text-white/15 italic">{t.disclaimer}</p>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex gap-12">
          <nav className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28 space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/25 mb-4">Índice</p>
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`block text-sm py-1.5 transition-colors ${
                    activeSection === item.id
                      ? 'text-kwar-electric font-medium'
                      : 'text-white/35 hover:text-white/60'
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <div className="prose prose-invert max-w-none">
              {renderMarkdown(t.body)}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
