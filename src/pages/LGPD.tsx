import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const content: Record<string, { title: string; subtitle: string; body: string; disclaimer?: string }> = {
  'pt-BR': {
    title: 'LGPD – Seus Direitos de Proteção de Dados',
    subtitle: 'Informações sobre seus direitos relacionados à proteção de dados pessoais.',
    body: `## Nosso Compromisso

A Kwar-AI está comprometida com a proteção da privacidade e dos dados pessoais tratados em suas plataformas, incluindo o EpidBot.

Buscamos atuar em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD), adotando medidas proporcionais para proteger as informações sob nossa responsabilidade.

---

## Quais Direitos Você Possui

Nos termos da LGPD, você poderá solicitar, quando aplicável:

### Confirmação

Confirmar se realizamos tratamento de seus dados pessoais.

### Acesso

Solicitar acesso aos dados pessoais relacionados à sua conta ou utilização de nossos serviços.

### Correção

Solicitar a correção de informações incompletas, incorretas ou desatualizadas.

### Eliminação

Solicitar a exclusão de dados pessoais quando permitido pela legislação aplicável.

### Portabilidade

Solicitar a portabilidade de seus dados para outro fornecedor de serviços, quando aplicável.

### Informações sobre Compartilhamento

Solicitar informações sobre entidades com as quais seus dados possam ser compartilhados.

### Revogação de Consentimento

Quando o tratamento for baseado em consentimento, você poderá revogá-lo a qualquer momento.

---

## Como Exercer Seus Direitos

Solicitações relacionadas à proteção de dados podem ser enviadas para:

[contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)

Para proteger a privacidade dos usuários, poderemos solicitar informações adicionais para confirmar a identidade do solicitante antes de atender determinadas solicitações.

---

## Segurança e Proteção de Dados

A Kwar-AI adota medidas técnicas e organizacionais destinadas à proteção das informações processadas por suas plataformas.

Embora nenhum sistema seja completamente imune a riscos, buscamos aplicar boas práticas de segurança compatíveis com o estágio de desenvolvimento e operação dos nossos serviços.

---

## Mais Informações

Para entender como coletamos, utilizamos e protegemos informações, consulte também nossa Política de Privacidade.

---

## Contato

Kwar-AI Tecnologia em Saúde Pública Ltda.

[contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)

https://kwar-ai.com.br`,
  },
  en: {
    title: 'LGPD – Your Data Protection Rights',
    subtitle: 'Information about your rights regarding personal data protection.',
    disclaimer: 'In the event of any inconsistency between translations, the Portuguese version shall prevail.',
    body: `## Our Commitment

Kwar-AI is committed to protecting the privacy and personal data processed on its platforms, including EpidBot.

We seek to comply with the Brazilian General Data Protection Law (Law No. 13,709/2018 – LGPD), adopting proportionate measures to protect information under our responsibility.

---

## Your Rights

Under the LGPD, you may request, where applicable:

### Confirmation

Confirm whether we process your personal data.

### Access

Request access to personal data related to your account or use of our services.

### Correction

Request correction of incomplete, incorrect or outdated information.

### Deletion

Request deletion of personal data when permitted by applicable law.

### Portability

Request portability of your data to another service provider, where applicable.

### Sharing Information

Request information about entities with which your data may be shared.

### Consent Withdrawal

Where processing is based on consent, you may withdraw it at any time.

---

## How to Exercise Your Rights

Requests related to data protection may be sent to:

[contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)

To protect user privacy, we may request additional information to confirm the applicant's identity before fulfilling certain requests.

---

## Data Security and Protection

Kwar-AI adopts technical and organizational measures designed to protect information processed by its platforms.

While no system is completely immune to risk, we seek to apply good security practices compatible with the development and operation stage of our services.

---

## More Information

To understand how we collect, use and protect information, please also refer to our Privacy Policy.

---

## Contact

Kwar-AI Tecnologia em Saúde Pública Ltda.

[contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)

https://kwar-ai.com.br`,
  },
  es: {
    title: 'LGPD – Sus Derechos de Protección de Datos',
    subtitle: 'Información sobre sus derechos relacionados con la protección de datos personales.',
    disclaimer: 'En caso de divergencia entre traducciones, prevalecerá la versión en portugués.',
    body: `## Nuestro Compromiso

Kwar-AI está comprometida con la protección de la privacidad y de los datos personales tratados en sus plataformas, incluyendo EpidBot.

Buscamos actuar en conformidad con la Ley General de Protección de Datos Personales de Brasil (Ley nº 13.709/2018 – LGPD), adoptando medidas proporcionales para proteger la información bajo nuestra responsabilidad.

---

## Sus Derechos

En los términos de la LGPD, usted podrá solicitar, cuando sea aplicable:

### Confirmación

Confirmar si realizamos el tratamiento de sus datos personales.

### Acceso

Solicitar acceso a los datos personales relacionados con su cuenta o uso de nuestros servicios.

### Corrección

Solicitar la corrección de información incompleta, incorrecta o desactualizada.

### Eliminación

Solicitar la eliminación de datos personales cuando lo permita la legislación aplicable.

### Portabilidad

Solicitar la portabilidad de sus datos a otro proveedor de servicios, cuando sea aplicable.

### Información sobre Compartición

Solicitar información sobre entidades con las cuales sus datos puedan ser compartidos.

### Revocación del Consentimiento

Cuando el tratamiento se base en el consentimiento, usted podrá revocarlo en cualquier momento.

---

## Cómo Ejercer Sus Derechos

Las solicitudes relacionadas con la protección de datos pueden enviarse a:

[contato@kwar-ai.com.br](mailto:contato@kwar-ai.com.br)

Para proteger la privacidad de los usuarios, podremos solicitar información adicional para confirmar la identidad del solicitante antes de atender determinadas solicitudes.

---

## Seguridad y Protección de Datos

Kwar-AI adopta medidas técnicas y organizativas destinadas a proteger la información procesada por sus plataformas.

Aunque ningún sistema es completamente inmune a riesgos, buscamos aplicar buenas prácticas de seguridad compatibles con el estado de desarrollo y operación de nuestros servicios.

---

## Más Información

Para entender cómo recopilamos, utilizamos y protegemos la información, consulte también nuestra Política de Privacidad.

---

## Contacto

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

export default function LGPD() {
  const { i18n } = useTranslation();
  const lng = i18n.language.startsWith('en') ? 'en' : i18n.language.startsWith('es') ? 'es' : 'pt-BR';
  const t = content[lng];
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h2[id], h3[id]');
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
  );
}
