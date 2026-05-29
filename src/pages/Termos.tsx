import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import SkipToContent from '@/components/SkipToContent';

const content: Record<string, { title: string; body: string; disclaimer?: string }> = {
  'pt-BR': {
    title: 'Termos de Uso',
    body: `## 1. Aceitação dos Termos

Bem-vindo ao EpidBot.

Estes Termos de Uso regulam o acesso e a utilização da plataforma EpidBot, desenvolvida e operada pela Kwar-AI Tecnologia em Saúde Pública Ltda. ("Kwar-AI", "nós" ou "empresa").

Ao acessar ou utilizar a plataforma, você declara ter lido, compreendido e concordado com estes Termos.

Caso não concorde com qualquer disposição aqui prevista, você não deverá utilizar o serviço.

---

## 2. Sobre o EpidBot

O EpidBot é uma plataforma de inteligência artificial desenvolvida para apoiar análises, pesquisas, monitoramento e interpretação de informações relacionadas à saúde pública, epidemiologia e áreas correlatas.

A plataforma pode utilizar inteligência artificial, modelos computacionais, bases de dados públicas, informações fornecidas pelos usuários e outras tecnologias para gerar respostas, análises, relatórios e sugestões.

O EpidBot é uma ferramenta de apoio à análise e à tomada de decisão, não substituindo avaliação humana especializada.

---

## 3. Elegibilidade

Ao utilizar a plataforma, o usuário declara possuir capacidade legal para celebrar contratos e assumir obrigações.

Quando o acesso ocorrer em nome de uma instituição, empresa, universidade, hospital ou organização governamental, o usuário declara possuir autorização para agir em nome dessa entidade.

---

## 4. Cadastro e Segurança da Conta

O usuário é responsável por:

* fornecer informações verdadeiras, completas e atualizadas;
* manter a confidencialidade de suas credenciais de acesso;
* adotar medidas razoáveis para proteger sua conta;
* comunicar imediatamente qualquer suspeita de acesso não autorizado.

O usuário é responsável pelas atividades realizadas por meio de sua conta.

---

## 5. Uso Permitido

O EpidBot poderá ser utilizado para finalidades legítimas, incluindo:

* pesquisa científica;
* atividades acadêmicas;
* análise epidemiológica;
* monitoramento de indicadores de saúde;
* planejamento institucional;
* produção de relatórios;
* apoio à tomada de decisão.

O uso da plataforma deverá sempre respeitar a legislação aplicável e estes Termos.

---

## 6. Uso Proibido

É proibido utilizar o EpidBot para:

* atividades ilícitas;
* disseminação de informações fraudulentas ou enganosas;
* violação de direitos de terceiros;
* tentativa de acesso não autorizado a sistemas ou dados;
* comprometimento da segurança da plataforma;
* engenharia reversa, cópia ou reprodução não autorizada da tecnologia;
* utilização automatizada abusiva que comprometa a estabilidade do serviço;
* transmissão de conteúdos maliciosos ou códigos destinados a causar danos.

A Kwar-AI poderá limitar, suspender ou encerrar acessos que violem estes Termos.

---

## 7. Inteligência Artificial e Limitações Tecnológicas

O usuário reconhece que sistemas de inteligência artificial possuem limitações inerentes.

As respostas, análises, previsões, interpretações, resumos e recomendações geradas pelo EpidBot podem conter erros, omissões, inconsistências, informações incompletas ou conteúdo desatualizado.

Nenhum resultado produzido pela plataforma deve ser considerado automaticamente correto, definitivo ou suficiente para tomada de decisões sem validação humana adequada.

O usuário permanece responsável por avaliar criticamente todas as informações obtidas por meio do sistema.

---

## 8. Ausência de Aconselhamento Profissional

As informações disponibilizadas pelo EpidBot possuem finalidade informacional e analítica.

O EpidBot não fornece:

* aconselhamento médico;
* diagnóstico clínico;
* parecer epidemiológico oficial;
* aconselhamento jurídico;
* consultoria profissional especializada.

As respostas geradas não substituem profissionais qualificados, autoridades sanitárias, pesquisadores responsáveis ou especialistas da área.

---

## 9. Responsabilidade pelas Decisões

Toda decisão tomada com base em informações obtidas por meio da plataforma é de responsabilidade exclusiva do usuário e/ou da instituição que utiliza o serviço.

A Kwar-AI não se responsabiliza por decisões operacionais, administrativas, científicas, acadêmicas, financeiras, regulatórias ou institucionais tomadas com base em resultados fornecidos pelo EpidBot.

---

## 10. Dados e Conteúdo Fornecidos pelo Usuário

O usuário é responsável pelos conteúdos, informações, documentos e dados submetidos à plataforma.

Ao utilizar o EpidBot, o usuário declara possuir os direitos, permissões e bases legais necessárias para compartilhar tais informações.

O usuário compromete-se a não inserir conteúdos ilícitos ou cuja utilização viole a legislação aplicável.

---

## 11. Propriedade Intelectual

Todos os direitos relacionados ao EpidBot pertencem à Kwar-AI ou aos seus respectivos licenciantes.

Isso inclui, entre outros:

* software;
* código-fonte;
* algoritmos;
* modelos proprietários;
* marca EpidBot;
* marca Kwar-AI;
* identidade visual;
* documentação;
* materiais institucionais.

Nenhuma disposição destes Termos concede ao usuário qualquer direito de propriedade intelectual sobre a plataforma.

---

## 12. Disponibilidade do Serviço

A Kwar-AI busca manter a plataforma disponível e funcional.

No entanto, não garantimos disponibilidade contínua, ausência de interrupções ou funcionamento livre de erros.

A plataforma poderá ficar temporariamente indisponível em razão de manutenção, atualizações, falhas técnicas, fatores externos ou circunstâncias fora do controle da empresa.

---

## 13. Suspensão ou Encerramento de Acesso

A Kwar-AI poderá suspender, restringir ou encerrar o acesso à plataforma quando houver:

* violação destes Termos;
* riscos à segurança do sistema;
* uso abusivo da plataforma;
* atividades fraudulentas;
* exigência legal ou regulatória.

Sempre que razoavelmente possível, a empresa poderá comunicar previamente o usuário.

---

## 14. Limitação de Responsabilidade

Na máxima extensão permitida pela legislação aplicável, a Kwar-AI não será responsável por danos indiretos, incidentais, especiais, consequenciais ou lucros cessantes decorrentes da utilização ou impossibilidade de utilização da plataforma.

O usuário reconhece que utiliza o EpidBot por sua própria conta e risco.

---

## 15. Alterações dos Termos

A Kwar-AI poderá modificar estes Termos periodicamente para refletir alterações legais, regulatórias, operacionais ou tecnológicas.

A versão mais recente permanecerá disponível nos canais oficiais da empresa.

A continuidade da utilização da plataforma após a publicação de alterações constitui aceitação dos Termos atualizados.

---

## 16. Lei Aplicável e Foro

Estes Termos serão regidos pelas leis da República Federativa do Brasil.

Fica eleito o foro da comarca do Rio de Janeiro, RJ, para resolução de controvérsias relacionadas a estes Termos, salvo disposição legal em contrário.

---

## 17. Contato

Kwar-AI Tecnologia em Saúde Pública Ltda.

[contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)

https://kwar-ai.com.br`,
  },
  en: {
    title: 'Terms of Use',
    disclaimer: 'In the event of any inconsistency between translations, the Portuguese version shall prevail.',
    body: `## 1. Acceptance of Terms

Welcome to EpidBot.

These Terms of Use govern access to and use of the EpidBot platform, developed and operated by Kwar-AI Tecnologia em Saúde Pública Ltda. ("Kwar-AI", "we" or "company").

By accessing or using the platform, you declare that you have read, understood and agreed to these Terms.

If you do not agree with any provision herein, you should not use the service.

---

## 2. About EpidBot

EpidBot is an artificial intelligence platform developed to support analysis, research, monitoring and interpretation of information related to public health, epidemiology and related areas.

The platform may use artificial intelligence, computational models, public databases, user-provided information and other technologies to generate responses, analyses, reports and suggestions.

EpidBot is a tool to support analysis and decision-making and does not replace specialized human evaluation.

---

## 3. Eligibility

By using the platform, the user declares they have the legal capacity to enter into contracts and assume obligations.

When access occurs on behalf of an institution, company, university, hospital or government organization, the user declares they have authorization to act on behalf of that entity.

---

## 4. Registration and Account Security

The user is responsible for:

* providing true, complete and up-to-date information;
* maintaining the confidentiality of their access credentials;
* taking reasonable measures to protect their account;
* immediately reporting any suspected unauthorized access.

The user is responsible for activities carried out through their account.

---

## 5. Permitted Use

EpidBot may be used for legitimate purposes, including:

* scientific research;
* academic activities;
* epidemiological analysis;
* health indicator monitoring;
* institutional planning;
* report generation;
* decision-making support.

Use of the platform must always respect applicable law and these Terms.

---

## 6. Prohibited Use

It is prohibited to use EpidBot for:

* illegal activities;
* dissemination of fraudulent or misleading information;
* violation of third-party rights;
* attempted unauthorized access to systems or data;
* compromising platform security;
* reverse engineering, unauthorized copying or reproduction of the technology;
* abusive automated use that compromises service stability;
* transmission of malicious content or code intended to cause harm.

Kwar-AI may limit, suspend or terminate access that violates these Terms.

---

## 7. Artificial Intelligence and Technological Limitations

The user acknowledges that artificial intelligence systems have inherent limitations.

Responses, analyses, predictions, interpretations, summaries and recommendations generated by EpidBot may contain errors, omissions, inconsistencies, incomplete information or outdated content.

No result produced by the platform should be automatically considered correct, definitive or sufficient for decision-making without adequate human validation.

The user remains responsible for critically evaluating all information obtained through the system.

---

## 8. Absence of Professional Advice

Information provided by EpidBot is for informational and analytical purposes.

EpidBot does not provide:

* medical advice;
* clinical diagnosis;
* official epidemiological opinion;
* legal advice;
* specialized professional consulting.

Generated responses do not replace qualified professionals, health authorities, responsible researchers or area specialists.

---

## 9. Responsibility for Decisions

Any decision made based on information obtained through the platform is the sole responsibility of the user and/or the institution using the service.

Kwar-AI is not responsible for operational, administrative, scientific, academic, financial, regulatory or institutional decisions made based on results provided by EpidBot.

---

## 10. User-Provided Data and Content

The user is responsible for the content, information, documents and data submitted to the platform.

By using EpidBot, the user declares they have the necessary rights, permissions and legal bases to share such information.

The user undertakes not to insert illegal content or content whose use violates applicable law.

---

## 11. Intellectual Property

All rights related to EpidBot belong to Kwar-AI or its respective licensors.

This includes, among others:

* software;
* source code;
* algorithms;
* proprietary models;
* EpidBot brand;
* Kwar-AI brand;
* visual identity;
* documentation;
* institutional materials.

No provision of these Terms grants the user any intellectual property rights over the platform.

---

## 12. Service Availability

Kwar-AI seeks to keep the platform available and functional.

However, we do not guarantee continuous availability, absence of interruptions or error-free operation.

The platform may be temporarily unavailable due to maintenance, updates, technical failures, external factors or circumstances beyond the company's control.

---

## 13. Suspension or Termination of Access

Kwar-AI may suspend, restrict or terminate access to the platform when there is:

* violation of these Terms;
* risks to system security;
* abusive use of the platform;
* fraudulent activities;
* legal or regulatory requirement.

Whenever reasonably possible, the company may notify the user in advance.

---

## 14. Limitation of Liability

To the maximum extent permitted by applicable law, Kwar-AI shall not be liable for indirect, incidental, special, consequential damages or lost profits arising from the use or inability to use the platform.

The user acknowledges that they use EpidBot at their own risk.

---

## 15. Changes to Terms

Kwar-AI may modify these Terms periodically to reflect legal, regulatory, operational or technological changes.

The most recent version will remain available on the company's official channels.

Continued use of the platform after publication of changes constitutes acceptance of the updated Terms.

---

## 16. Governing Law and Jurisdiction

These Terms shall be governed by the laws of the Federative Republic of Brazil.

The court of the district of Rio de Janeiro, RJ, is hereby elected for resolution of disputes related to these Terms, unless otherwise provided by law.

---

## 17. Contact

Kwar-AI Tecnologia em Saúde Pública Ltda.

[contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)

https://kwar-ai.com.br`,
  },
  es: {
    title: 'Términos de Uso',
    disclaimer: 'En caso de divergencia entre traducciones, prevalecerá la versión en portugués.',
    body: `## 1. Aceptación de los Términos

Bienvenido a EpidBot.

Estos Términos de Uso regulan el acceso y la utilización de la plataforma EpidBot, desarrollada y operada por Kwar-AI Tecnologia em Saúde Pública Ltda. ("Kwar-AI", "nosotros" o "empresa").

Al acceder o utilizar la plataforma, usted declara haber leído, comprendido y aceptado estos Términos.

Si no está de acuerdo con alguna disposición aquí prevista, no deberá utilizar el servicio.

---

## 2. Acerca de EpidBot

EpidBot es una plataforma de inteligencia artificial desarrollada para apoyar análisis, investigaciones, monitoreo e interpretación de información relacionada con la salud pública, epidemiología y áreas afines.

La plataforma puede utilizar inteligencia artificial, modelos computacionales, bases de datos públicas, información proporcionada por los usuarios y otras tecnologías para generar respuestas, análisis, informes y sugerencias.

EpidBot es una herramienta de apoyo al análisis y la toma de decisiones, no sustituyendo la evaluación humana especializada.

---

## 3. Elegibilidad

Al utilizar la plataforma, el usuario declara poseer capacidad legal para celebrar contratos y asumir obligaciones.

Cuando el acceso ocurra en nombre de una institución, empresa, universidad, hospital u organización gubernamental, el usuario declara poseer autorización para actuar en nombre de esa entidad.

---

## 4. Registro y Seguridad de la Cuenta

El usuario es responsable de:

* proporcionar información verdadera, completa y actualizada;
* mantener la confidencialidad de sus credenciales de acceso;
* adoptar medidas razonables para proteger su cuenta;
* comunicar inmediatamente cualquier sospecha de acceso no autorizado.

El usuario es responsable de las actividades realizadas a través de su cuenta.

---

## 5. Uso Permitido

EpidBot podrá ser utilizado para finalidades legítimas, incluyendo:

* investigación científica;
* actividades académicas;
* análisis epidemiológico;
* monitoreo de indicadores de salud;
* planificación institucional;
* generación de informes;
* apoyo a la toma de decisiones.

El uso de la plataforma deberá respetar siempre la legislación aplicable y estos Términos.

---

## 6. Uso Prohibido

Está prohibido utilizar EpidBot para:

* actividades ilícitas;
* difusión de información fraudulenta o engañosa;
* violación de derechos de terceros;
* intento de acceso no autorizado a sistemas o datos;
* comprometer la seguridad de la plataforma;
* ingeniería inversa, copia o reproducción no autorizada de la tecnología;
* uso automatizado abusivo que comprometa la estabilidad del servicio;
* transmisión de contenidos maliciosos o códigos destinados a causar daños.

Kwar-AI podrá limitar, suspender o cancelar accesos que violen estos Términos.

---

## 7. Inteligencia Artificial y Limitaciones Tecnológicas

El usuario reconoce que los sistemas de inteligencia artificial tienen limitaciones inherentes.

Las respuestas, análisis, predicciones, interpretaciones, resúmenes y recomendaciones generadas por EpidBot pueden contener errores, omisiones, inconsistencias, información incompleta o contenido desactualizado.

Ningún resultado producido por la plataforma debe considerarse automáticamente correcto, definitivo o suficiente para la toma de decisiones sin una validación humana adecuada.

El usuario sigue siendo responsable de evaluar críticamente toda la información obtenida a través del sistema.

---

## 8. Ausencia de Asesoramiento Profesional

La información proporcionada por EpidBot tiene fines informativos y analíticos.

EpidBot no proporciona:

* asesoramiento médico;
* diagnóstico clínico;
* opinión epidemiológica oficial;
* asesoramiento jurídico;
* consultoría profesional especializada.

Las respuestas generadas no sustituyen a profesionales calificados, autoridades sanitarias, investigadores responsables o especialistas del área.

---

## 9. Responsabilidad por las Decisiones

Toda decisión tomada con base en información obtenida a través de la plataforma es responsabilidad exclusiva del usuario y/o de la institución que utiliza el servicio.

Kwar-AI no se responsabiliza por decisiones operativas, administrativas, científicas, académicas, financieras, regulatorias o institucionales tomadas con base en resultados proporcionados por EpidBot.

---

## 10. Datos y Contenido Proporcionados por el Usuario

El usuario es responsable de los contenidos, informaciones, documentos y datos enviados a la plataforma.

Al utilizar EpidBot, el usuario declara poseer los derechos, permisos y bases legales necesarias para compartir dicha información.

El usuario se compromete a no insertar contenidos ilícitos o cuyo uso viole la legislación aplicable.

---

## 11. Propiedad Intelectual

Todos los derechos relacionados con EpidBot pertenecen a Kwar-AI o a sus respectivos licenciantes.

Esto incluye, entre otros:

* software;
* código fuente;
* algoritmos;
* modelos propietarios;
* marca EpidBot;
* marca Kwar-AI;
* identidad visual;
* documentación;
* materiales institucionales.

Ninguna disposición de estos Términos concede al usuario ningún derecho de propiedad intelectual sobre la plataforma.

---

## 12. Disponibilidad del Servicio

Kwar-AI busca mantener la plataforma disponible y funcional.

Sin embargo, no garantizamos disponibilidad continua, ausencia de interrupciones o funcionamiento libre de errores.

La plataforma podrá estar temporalmente indisponible por mantenimiento, actualizaciones, fallas técnicas, factores externos o circunstancias fuera del control de la empresa.

---

## 13. Suspensión o Cancelación de Acceso

Kwar-AI podrá suspender, restringir o cancelar el acceso a la plataforma cuando haya:

* violación de estos Términos;
* riesgos para la seguridad del sistema;
* uso abusivo de la plataforma;
* actividades fraudulentas;
* exigencia legal o regulatoria.

Siempre que sea razonablemente posible, la empresa podrá comunicarlo previamente al usuario.

---

## 14. Limitación de Responsabilidad

En la máxima medida permitida por la legislación aplicable, Kwar-AI no será responsable por daños indirectos, incidentales, especiales, consecuentes o lucro cesante derivados de la utilización o imposibilidad de utilización de la plataforma.

El usuario reconoce que utiliza EpidBot por su propia cuenta y riesgo.

---

## 15. Modificaciones de los Términos

Kwar-AI podrá modificar estos Términos periódicamente para reflejar cambios legales, regulatorios, operativos o tecnológicos.

La versión más reciente permanecerá disponible en los canales oficiales de la empresa.

La continuidad en la utilización de la plataforma después de la publicación de modificaciones constituye la aceptación de los Términos actualizados.

---

## 16. Ley Aplicable y Jurisdicción

Estos Términos se regirán por las leyes de la República Federativa de Brasil.

Se elige el fuero de la comarca de Río de Janeiro, RJ, para la resolución de controversias relacionadas con estos Términos, salvo disposición legal en contrario.

---

## 17. Contacto

Kwar-AI Tecnologia em Saúde Pública Ltda.

[contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)

https://kwar-ai.com.br`,
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
    } else if (line.startsWith('http')) {
      elements.push(
        <p key={i} className="text-white/60 my-3">
          <a href={line} target="_blank" rel="noopener noreferrer" className="text-kwar-electric hover:text-kwar-electric/80 transition-colors">{line}</a>
        </p>
      );
    } else if (line.trim() !== '') {
      elements.push(
        <p key={i} className="text-white/60 my-3 leading-relaxed">{line}</p>
      );
    }
    i++;
  }

  return elements;
}

export default function Termos() {
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
        description={`${t.title} - Kwar-AI EpidBot. Leia nossos termos de uso e condições de serviço.`}
        path="/termos"
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
          <p className="text-sm text-white/25">Última atualização: Maio de 2026</p>
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

            <hr className="my-12 border-white/[0.04]" />

            <footer className="text-sm text-white/25">
              <p className="font-medium text-white/40 mb-2">Kwar-AI Tecnologia em Saúde Pública Ltda.</p>
              <p>
                <a href="mailto:contato@kwar-ai.com.br" className="text-kwar-electric/60 hover:text-kwar-electric transition-colors">contato@kwar-ai.com.br</a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
