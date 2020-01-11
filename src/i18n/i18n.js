import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import CustomBackend from './CustomBackend';

const token = process.env.POEDITOR_TOKEN || 'aa719ec8092b8dcb3aeb3bdbf1350a84';
const id = process.env.POEDITOR_PROJECT_ID || '308099';

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(CustomBackend)
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    defaultLanguage: 'en',
    otherLanguages: ['pl'],
    fallbackLng: 'en',
    debug: true,
    saveMissing: true,
    backend: {
      // cors-anywhere is a trick. Don't use it in production
      loadPath: 'https://cors-anywhere.herokuapp.com/https://api.poeditor.com/v2/terms/list',
      addPath: 'https://cors-anywhere.herokuapp.com/https://api.poeditor.com/v2/terms/add',
      crossDomain: true,
      parse: data => {
        const parsedData = JSON.parse(data);
        const terms = parsedData.result.terms.reduce((acc, item) => {
          acc[item.term] = item.translation.content || item.term;

          return acc;
        }, {});

        return terms;
      },
      parsePayload: (namespace, key) => {
        if (key === '_t') return;

        const data = [{
          term: key,
        }];
        const payload = {
          api_token: token,
          data: JSON.stringify(data),
          id,
        };

        return payload;
      },
      parseLoadPayload: ({ lng }) => {
        const payload = {
          api_token: token,
          language: lng,
          id,
        };

        return payload;
      },
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
