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
      ar: { translation: ar },
      es: { translation: es },
    },
    // The language to use if translations in user language are not available
    fallbackLng: 'en',
    // Default language if no saved preference
    lng: localStorage.getItem('i18nextLng') || 'en',
    // Order and from where user language should be detected
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React already safeguards from xss
    },
  });

export default i18n;
