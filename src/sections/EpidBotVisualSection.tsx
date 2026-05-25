import { useTranslation } from 'react-i18next';

export function EpidBotVisualSection() {
  const { i18n } = useTranslation();

  const lang = i18n.language?.startsWith('pt') ? 'pt' : i18n.language?.startsWith('es') ? 'es' : 'en';
  const imageMap: Record<string, string> = {
    pt: '/images/epidbot pt.png',
    en: '/images/epidbot en.png',
    es: '/images/epidbot es.png',
  };
  const imageSrc = imageMap[lang] || '/images/epidbot en.png';

  return (
    <section
      id="epidbot-visual"
      className="relative w-full bg-[#050a10] overflow-hidden"
    >
      <img
        src={imageSrc}
        alt="EpidBot"
        className="w-full h-auto object-contain block"
      />
    </section>
  );
}

export default EpidBotVisualSection;
