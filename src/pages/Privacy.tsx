import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const content: Record<string, { title: string; subtitle: string; body: string; disclaimer?: string }> = {
  'pt-BR': {
    title: 'Política de Privacidade',
    subtitle: 'Como o EpidBot coleta, utiliza e protege informações.',
    body: `## 1. Introdução

O EpidBot é uma plataforma de inteligência artificial desenvolvida e operada pela Kwar-AI Tecnologia em Saúde Pública Ltda. ("Kwar-AI", "nós" ou "empresa").

Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos informações relacionadas ao uso da plataforma EpidBot.

Ao utilizar nossos serviços, você declara estar ciente das práticas descritas neste documento.

---

## 2. Quem Somos

Kwar-AI Tecnologia em Saúde Pública Ltda.

Contato: [contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)

Website: https://kwar-ai.com.br

---

## 3. Aplicação desta Política

Esta Política aplica-se a todos os usuários do EpidBot, incluindo pesquisadores, universidades, hospitais, organizações governamentais, organizações internacionais e demais clientes que utilizem a plataforma.

---

## 4. Informações que Podemos Coletar

Podemos coletar informações necessárias para fornecer nossos serviços, incluindo:

### Dados de cadastro

* Nome
* Endereço de e-mail
* Cargo ou função
* Instituição ou organização

### Dados técnicos

* Endereço IP
* Tipo de navegador
* Sistema operacional
* Data e horário de acesso
* Registros técnicos de utilização

### Conteúdo fornecido pelo usuário

Podemos processar perguntas, consultas, documentos, arquivos e demais informações inseridas voluntariamente na plataforma para execução das funcionalidades contratadas.

O usuário é responsável por garantir que possui autorização legal para compartilhar qualquer informação submetida ao sistema.

---

## 5. Como Utilizamos as Informações

As informações coletadas podem ser utilizadas para:

* fornecer acesso à plataforma;
* autenticar usuários;
* executar funcionalidades contratadas;
* prestar suporte técnico;
* melhorar a estabilidade e desempenho do sistema;
* prevenir fraudes e acessos não autorizados;
* cumprir obrigações legais e regulatórias;
* responder solicitações dos usuários.

---

## 6. Inteligência Artificial

O EpidBot utiliza tecnologias de inteligência artificial para auxiliar na análise e interpretação de informações relacionadas à saúde pública.

As respostas geradas possuem caráter informacional e de apoio à tomada de decisão.

O usuário permanece responsável pela validação dos resultados antes de utilizá-los em atividades científicas, operacionais, administrativas ou institucionais.

O EpidBot não substitui pareceres médicos, epidemiológicos, científicos, jurídicos ou profissionais especializados.

---

## 7. Uso de Dados para Treinamento de Inteligência Artificial

A Kwar-AI não utiliza conteúdos, documentos, consultas, arquivos ou informações submetidas pelos clientes para treinamento de modelos públicos de inteligência artificial sem autorização expressa do cliente.

As informações processadas pelo EpidBot são utilizadas prioritariamente para:

* prestação dos serviços contratados;
* suporte técnico;
* monitoramento de segurança;
* melhoria operacional da plataforma.

Sempre que possível, análises internas são realizadas com dados agregados, estatísticos ou anonimizados.

---

## 8. Dados Epidemiológicos

O EpidBot integra e processa informações provenientes de fontes públicas e institucionais.

Grande parte das análises realizadas pela plataforma utiliza dados epidemiológicos agregados, estatísticos ou anonimizados, que não permitem a identificação direta de indivíduos.

Quando clientes optarem por utilizar bases próprias, permanecem responsáveis por garantir a legalidade do compartilhamento e do tratamento dessas informações.

---

## 9. Compartilhamento de Informações

Podemos compartilhar informações apenas quando necessário para operação da plataforma ou cumprimento de obrigações legais.

Isso pode incluir provedores de infraestrutura tecnológica, serviços de autenticação, comunicação, suporte técnico e autoridades competentes quando exigido por lei.

A Kwar-AI não vende, aluga ou comercializa dados pessoais de seus usuários.

---

## 10. Segurança das Informações

Adotamos medidas técnicas e organizacionais adequadas para proteger as informações sob nossa responsabilidade.

Essas medidas podem incluir controles de acesso, autenticação de usuários, monitoramento de segurança, backups operacionais e mecanismos destinados à proteção contra acessos não autorizados.

Embora empreguemos boas práticas de segurança, nenhum sistema pode garantir proteção absoluta contra todos os riscos existentes na internet.

Atualmente, a infraestrutura da plataforma é hospedada por meio da Hetzner Cloud, com servidores localizados na Finlândia. Os dados podem ser processados e armazenados na infraestrutura localizada na Finlândia e em outras localidades utilizadas pela Kwar-AI e seus provedores de serviço, conforme necessário para a operação da plataforma.

---

## 11. Retenção de Dados

As informações serão mantidas apenas pelo período necessário para:

* prestação dos serviços contratados;
* cumprimento de obrigações legais;
* exercício regular de direitos;
* proteção dos interesses legítimos da Kwar-AI.

Após esse período, os dados poderão ser excluídos, anonimizados ou mantidos quando houver obrigação legal aplicável.

---

## 12. Direitos dos Titulares

Nos termos da legislação aplicável, incluindo a Lei Geral de Proteção de Dados (LGPD), o titular poderá solicitar:

* confirmação da existência de tratamento;
* acesso aos dados pessoais;
* correção de informações incompletas ou desatualizadas;
* eliminação de dados quando legalmente aplicável;
* portabilidade dos dados;
* informações sobre compartilhamentos realizados;
* revisão de solicitações relacionadas ao tratamento de dados.

Solicitações podem ser encaminhadas para:

[contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)

---

## 13. Cookies e Tecnologias Semelhantes

O EpidBot pode utilizar cookies e tecnologias semelhantes para:

* autenticação de usuários;
* manutenção de sessões;
* funcionamento da plataforma;
* métricas de utilização;
* melhorias de desempenho e segurança.

O usuário poderá gerenciar cookies por meio das configurações de seu navegador, quando aplicável.

---

## 14. Alterações desta Política

Esta Política poderá ser atualizada periodicamente para refletir alterações legais, regulatórias, operacionais ou tecnológicas.

A versão mais recente permanecerá disponível nos canais oficiais da Kwar-AI.

---

## 15. Contato

Para dúvidas, solicitações ou questões relacionadas à privacidade e proteção de dados:

Kwar-AI Tecnologia em Saúde Pública Ltda.

[contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)

https://kwar-ai.com.br`,
  },
  en: {
    title: 'Privacy Policy',
    subtitle: 'How EpidBot collects, uses and protects information.',
    disclaimer: 'In the event of any inconsistency between translations, the Portuguese version shall prevail.',
    body: `## 1. Introduction

EpidBot is an artificial intelligence platform developed and operated by Kwar-AI Tecnologia em Saúde Pública Ltda. ("Kwar-AI", "we" or "company").

This Privacy Policy describes how we collect, use, store and protect information related to the use of the EpidBot platform.

By using our services, you declare that you are aware of the practices described in this document.

---

## 2. Who We Are

Kwar-AI Tecnologia em Saúde Pública Ltda.

Contact: [contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)

Website: https://kwar-ai.com.br

---

## 3. Scope of this Policy

This Policy applies to all EpidBot users, including researchers, universities, hospitals, government organizations, international organizations and other clients using the platform.

---

## 4. Information We May Collect

We may collect information necessary to provide our services, including:

### Registration data

* Name
* Email address
* Position or role
* Institution or organization

### Technical data

* IP address
* Browser type
* Operating system
* Access date and time
* Technical usage logs

### User-provided content

We may process questions, queries, documents, files and other information voluntarily entered into the platform to perform contracted functionalities.

The user is responsible for ensuring they have legal authorization to share any information submitted to the system.

---

## 5. How We Use Information

Collected information may be used to:

* provide access to the platform;
* authenticate users;
* execute contracted functionalities;
* provide technical support;
* improve system stability and performance;
* prevent fraud and unauthorized access;
* comply with legal and regulatory obligations;
* respond to user requests.

---

## 6. Artificial Intelligence

EpidBot uses artificial intelligence technologies to assist in the analysis and interpretation of public health information.

Generated responses are informational and intended to support decision-making.

The user remains responsible for validating results before using them in scientific, operational, administrative or institutional activities.

EpidBot does not replace medical, epidemiological, scientific, legal or specialized professional opinions.

---

## 7. Use of Data for AI Training

Kwar-AI does not use content, documents, queries, files or information submitted by clients for training public artificial intelligence models without the client's express authorization.

Information processed by EpidBot is primarily used for:

* providing contracted services;
* technical support;
* security monitoring;
* operational platform improvement.

Whenever possible, internal analyses are performed with aggregated, statistical or anonymized data.

---

## 8. Epidemiological Data

EpidBot integrates and processes information from public and institutional sources.

Most analyses performed by the platform use aggregated, statistical or anonymized epidemiological data that do not allow direct identification of individuals.

When clients choose to use their own databases, they remain responsible for ensuring the legality of sharing and processing such information.

---

## 9. Information Sharing

We may share information only when necessary for platform operation or compliance with legal obligations.

This may include technology infrastructure providers, authentication services, communication services, technical support and competent authorities when required by law.

Kwar-AI does not sell, rent or commercialize personal data of its users.

---

## 10. Information Security

We adopt appropriate technical and organizational measures to protect information under our responsibility.

These measures may include access controls, user authentication, security monitoring, operational backups and mechanisms designed to protect against unauthorized access.

Although we employ good security practices, no system can guarantee absolute protection against all risks existing on the internet.

The platform infrastructure is currently hosted through Hetzner Cloud, with servers located in Finland. Data may be processed and stored on infrastructure located in Finland and other locations used by Kwar-AI and its service providers as necessary for platform operation.

---

## 11. Data Retention

Information will be retained only for the period necessary to:

* provide contracted services;
* comply with legal obligations;
* exercise rights regularly;
* protect Kwar-AI's legitimate interests.

After this period, data may be deleted, anonymized or retained when there is an applicable legal obligation.

---

## 12. Data Subject Rights

Under applicable law, including the Brazilian General Data Protection Law (LGPD), data subjects may request:

* confirmation of the existence of processing;
* access to personal data;
* correction of incomplete or outdated information;
* deletion of data when legally applicable;
* data portability;
* information about sharing carried out;
* review of requests related to data processing.

Requests may be sent to:

[contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)

---

## 13. Cookies and Similar Technologies

EpidBot may use cookies and similar technologies for:

* user authentication;
* session maintenance;
* platform operation;
* usage metrics;
* performance and security improvements.

Users may manage cookies through their browser settings where applicable.

---

## 14. Changes to this Policy

This Policy may be updated periodically to reflect legal, regulatory, operational or technological changes.

The most recent version will remain available on Kwar-AI's official channels.

---

## 15. Contact

For questions, requests or issues related to privacy and data protection:

Kwar-AI Tecnologia em Saúde Pública Ltda.

[contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)

https://kwar-ai.com.br`,
  },
  es: {
    title: 'Política de Privacidad',
    subtitle: 'Cómo EpidBot recopila, utiliza y protege la información.',
    disclaimer: 'En caso de divergencia entre traducciones, prevalecerá la versión en portugués.',
    body: `## 1. Introducción

EpidBot es una plataforma de inteligencia artificial desarrollada y operada por Kwar-AI Tecnologia em Saúde Pública Ltda. ("Kwar-AI", "nosotros" o "empresa").

Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos la información relacionada con el uso de la plataforma EpidBot.

Al utilizar nuestros servicios, usted declara estar al tanto de las prácticas descritas en este documento.

---

## 2. Quiénes Somos

Kwar-AI Tecnologia em Saúde Pública Ltda.

Contacto: [contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)

Sitio web: https://kwar-ai.com.br

---

## 3. Alcance de esta Política

Esta Política se aplica a todos los usuarios de EpidBot, incluidos investigadores, universidades, hospitales, organizaciones gubernamentales, organizaciones internacionales y demás clientes que utilicen la plataforma.

---

## 4. Información que Podemos Recopilar

Podemos recopilar la información necesaria para proporcionar nuestros servicios, incluyendo:

### Datos de registro

* Nombre
* Dirección de correo electrónico
* Cargo o función
* Institución u organización

### Datos técnicos

* Dirección IP
* Tipo de navegador
* Sistema operativo
* Fecha y hora de acceso
* Registros técnicos de uso

### Contenido proporcionado por el usuario

Podemos procesar preguntas, consultas, documentos, archivos y demás información ingresada voluntariamente en la plataforma para ejecutar las funcionalidades contratadas.

El usuario es responsable de garantizar que posee autorización legal para compartir cualquier información enviada al sistema.

---

## 5. Cómo Utilizamos la Información

La información recopilada puede ser utilizada para:

* proporcionar acceso a la plataforma;
* autenticar usuarios;
* ejecutar funcionalidades contratadas;
* brindar soporte técnico;
* mejorar la estabilidad y el rendimiento del sistema;
* prevenir fraudes y accesos no autorizados;
* cumplir con obligaciones legales y regulatorias;
* responder a solicitudes de los usuarios.

---

## 6. Inteligencia Artificial

EpidBot utiliza tecnologías de inteligencia artificial para ayudar en el análisis e interpretación de información relacionada con la salud pública.

Las respuestas generadas tienen carácter informativo y de apoyo a la toma de decisiones.

El usuario sigue siendo responsable de validar los resultados antes de utilizarlos en actividades científicas, operativas, administrativas o institucionales.

EpidBot no sustituye opiniones médicas, epidemiológicas, científicas, jurídicas ni profesionales especializadas.

---

## 7. Uso de Datos para Entrenamiento de IA

Kwar-AI no utiliza contenidos, documentos, consultas, archivos o información enviada por los clientes para entrenar modelos públicos de inteligencia artificial sin autorización expresa del cliente.

La información procesada por EpidBot se utiliza prioritariamente para:

* prestación de los servicios contratados;
* soporte técnico;
* monitoreo de seguridad;
* mejora operativa de la plataforma.

Siempre que sea posible, los análisis internos se realizan con datos agregados, estadísticos o anonimizados.

---

## 8. Datos Epidemiológicos

EpidBot integra y procesa información proveniente de fuentes públicas e institucionales.

La mayoría de los análisis realizados por la plataforma utiliza datos epidemiológicos agregados, estadísticos o anonimizados, que no permiten la identificación directa de individuos.

Cuando los clientes opten por utilizar bases propias, seguirán siendo responsables de garantizar la legalidad del intercambio y tratamiento de dicha información.

---

## 9. Compartición de Información

Podemos compartir información solo cuando sea necesario para la operación de la plataforma o el cumplimiento de obligaciones legales.

Esto puede incluir proveedores de infraestructura tecnológica, servicios de autenticación, comunicación, soporte técnico y autoridades competentes cuando lo exija la ley.

Kwar-AI no vende, alquila ni comercializa datos personales de sus usuarios.

---

## 10. Seguridad de la Información

Adoptamos medidas técnicas y organizativas adecuadas para proteger la información bajo nuestra responsabilidad.

Estas medidas pueden incluir controles de acceso, autenticación de usuarios, monitoreo de seguridad, copias de seguridad operativas y mecanismos destinados a proteger contra accesos no autorizados.

Aunque empleamos buenas prácticas de seguridad, ningún sistema puede garantizar protección absoluta contra todos los riesgos existentes en internet.

La infraestructura de la plataforma se encuentra actualmente alojada en Hetzner Cloud, con servidores ubicados en Finlandia. Los datos pueden ser procesados y almacenados en infraestructura ubicada en Finlandia y en otras localidades utilizadas por Kwar-AI y sus proveedores de servicios, según sea necesario para la operación de la plataforma.

---

## 11. Retención de Datos

La información se conservará solo durante el período necesario para:

* prestación de los servicios contratados;
* cumplimiento de obligaciones legales;
* ejercicio regular de derechos;
* protección de los intereses legítimos de Kwar-AI.

Después de este período, los datos podrán ser eliminados, anonimizados o conservados cuando exista una obligación legal aplicable.

---

## 12. Derechos de los Titulares

De acuerdo con la legislación aplicable, incluyendo la Ley General de Protección de Datos de Brasil (LGPD), el titular podrá solicitar:

* confirmación de la existencia del tratamiento;
* acceso a los datos personales;
* corrección de información incompleta o desactualizada;
* eliminación de datos cuando sea legalmente aplicable;
* portabilidad de los datos;
* información sobre los intercambios realizados;
* revisión de solicitudes relacionadas con el tratamiento de datos.

Las solicitudes pueden enviarse a:

[contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)

---

## 13. Cookies y Tecnologías Similares

EpidBot puede utilizar cookies y tecnologías similares para:

* autenticación de usuarios;
* mantenimiento de sesiones;
* funcionamiento de la plataforma;
* métricas de uso;
* mejoras de rendimiento y seguridad.

El usuario podrá gestionar cookies a través de la configuración de su navegador, cuando corresponda.

---

## 14. Cambios en esta Política

Esta Política puede actualizarse periódicamente para reflejar cambios legales, regulatorios, operativos o tecnológicos.

La versión más reciente permanecerá disponible en los canales oficiales de Kwar-AI.

---

## 15. Contacto

Para dudas, solicitudes o cuestiones relacionadas con la privacidad y protección de datos:

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
    } else if (line.startsWith('### ')) {
      const heading = line.replace('### ', '');
      elements.push(
        <h3 key={i} className="text-lg font-semibold text-white/80 mt-8 mb-3">
          {heading}
        </h3>
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

export default function Privacy() {
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
    <div className="min-h-screen bg-[#080c14] text-white font-body antialiased">
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 border-b border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/30">
            <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/50">{t.title}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="py-12 border-b border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h1 className="font-display text-4xl font-bold text-white mb-3">{t.title}</h1>
          <p className="text-kwar-gray text-lg mb-2">{t.subtitle}</p>
          <p className="text-sm text-white/25">Última atualização: Maio de 2026</p>
          {t.disclaimer && (
            <p className="mt-4 text-xs text-white/15 italic">{t.disclaimer}</p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex gap-12">
          {/* Sidebar TOC — desktop */}
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

          {/* Main content */}
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
  );
}
