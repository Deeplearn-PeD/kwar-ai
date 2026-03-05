import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';

const languages = [
  { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-kwar-gray hover:text-kwar-electric hover:bg-white/5 transition-all duration-300"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium hidden sm:inline">{currentLanguage.flag}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 rounded-lg bg-kwar-deep/95 backdrop-blur-xl border border-kwar-electric/20 shadow-lg z-50 overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-kwar-electric/10 transition-colors"
              >
                <span className="text-xl">{language.flag}</span>
                <span className="flex-1 text-left text-sm text-kwar-gray hover:text-white">
                  {language.name}
                </span>
                {i18n.language === language.code && (
                  <Check className="w-4 h-4 text-kwar-electric" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default LanguageSwitcher;
