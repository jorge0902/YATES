import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';
import ar from './locales/ar.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      ar: { translation: ar },
    },
    // The language to use if translations in user language are not available
    fallbackLng: 'en',
    // Order and from where user language should be detected
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React already safeguards from xss
    },
  });

export default i18n;
