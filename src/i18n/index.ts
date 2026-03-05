import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptBR from '../../public/locales/pt-BR/translation.json';
import en from '../../public/locales/en/translation.json';
import es from '../../public/locales/es/translation.json';

const resources = {
  'pt-BR': {
    translation: ptBR
  },
  'en': {
    translation: en
  },
  'es': {
    translation: es
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    supportedLngs: ['pt-BR', 'en', 'es'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

export default i18n;
