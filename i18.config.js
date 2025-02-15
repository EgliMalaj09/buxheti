import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import al from './src/locales/dictionary/al.json';
import en from './src/locales/dictionary/en.json';
import { Language } from '@/constants/language';



const resources = {
    en: {
        translation: en,
    },
    al: {
        translation: al,
    },
};

i18next.use(initReactI18next).init({
    debug: __DEV__,
    resources,
    lazy: true,
    supportedLngs: [Language.al, Language.en],
    comptibilityJSON: 'v3',
    fallbackLng: Language.en,
    lng: Language.al,
    interpolation: {
        escapeValue:false,
    },
});

export default i18next;
