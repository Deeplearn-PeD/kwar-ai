import { useTranslation } from 'react-i18next';

export default function SkipToContent() {
  const { t } = useTranslation();

  return (
    <a
      href="#main-content"
      className="fixed -top-full left-4 z-[100] px-4 py-2 bg-kwar-electric text-kwar-deep text-sm font-bold rounded-b-lg focus:top-0 focus:outline-none transition-all duration-200"
    >
      {t('skipToContent', { defaultValue: 'Pular para o conteúdo' })}
    </a>
  );
}
