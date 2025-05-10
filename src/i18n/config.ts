
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import deTranslations from './locales/de.json';
import arTranslations from './locales/ar.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      de: {
        translation: deTranslations
      },
      ar: {
        translation: arTranslations
      }
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false
    }
  });

// Enhanced RTL handling for Arabic
const handleLanguageChange = (lng: string) => {
  // Set the correct text direction
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
  
  // Add a data attribute for easier CSS selection
  document.documentElement.setAttribute('data-language', lng);

  // Add class for specific RTL handling if needed
  if (lng === 'ar') {
    document.body.classList.add('rtl-lang');
  } else {
    document.body.classList.remove('rtl-lang');
  }

  // Store language preference
  localStorage.setItem('i18nextLng', lng);
};

// Set initial language direction
handleLanguageChange(i18n.language);

// Listen for language changes
i18n.on('languageChanged', handleLanguageChange);

export default i18n;
