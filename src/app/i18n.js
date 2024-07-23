import i18n from "i18next";
import { initReactI18next } from 'react-i18next'
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';

// Importações adicionais

import ptTranslations from '../locale/pt-BR.json';
import enTranslations from '../locale/en-US.json';
import esTranslations from '../locale/es-AR.json';

i18n
.use(Backend) // Adiciona o Backend 
.use(initReactI18next)
.use(LanguageDetector)
.init({
  // debug: true,
  resources: {
    en: { translation: enTranslations },
    pt: { translation: ptTranslations },
    es: { translation: esTranslations }
  },
  lng: 'pt-BR', // Define explicitamente o idioma padrão inicial
  fallbackLng: 'pt-BR', // Configura o fallback geral para Português do Brasil

  // 'pt-BR': ['pt'], 
  // 'en-US': ['en'],  // Se 'en-US' faltar algo, recorra a 'en'
  //  // Se 'pt-BR' faltar algo, recorra a 'pt'
  // 'default': ['pt']
  // },  // Se nenhum idioma específico for encontrado, use 'en-US'
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resourceus: {
    backend: {
      loadPath: '/src/locales/{{lng}}/{{ns}}.json',
      // Caminho para os arquivos de tradução
    },
    languageDetector: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'], // Onde armazenar o idioma detectado
      lookupLocalStorage: 'i18nextLng', // Especifica a chave usada para armazenar o idioma no localStorage
    },
    
  }
  
})

export { i18n };












// // import i18n from "i18next";
// // import LanguageDetector from "i18next-browser-languagedetector";

// // import { messages } from '.'

// // const I18N_STORAGE_KEY = 'i18nextLng';

// // i18n
// // .use(LanguageDetector).init({
// //   messages,
// //   debug: false, //Define se o modo de depuração está ativado ou desativado.
// //   defaultNS: ["translations"], //Simplifica a busca de traduções ao não exigir a especificação do namespace se você estiver usando o namespace padrão.
// //   fallbackLng: "pt-BR", //Define o idioma de fallback que será usado se a tradução para o idioma atual não estiver disponível.
// //   ns: ["translations"], //Os namespaces permitem organizar suas traduções em diferentes conjuntos.
// //   resources: messages, //Define os recursos de tradução a serem usados pelo i18next
// //   detection: {
// //     //Configurações para detecção de idioma do usuário.
// //     order: ["cookie", "localStorage", "navigator"], //Define a ordem em que o i18next tentará detectar o idioma
// //     caches: ["cookie", "localStorage"],
// //     lookupCookie: "i18next",
// //     lookupLocalStorage: I18N_STORAGE_KEY,
// //     cookieMinutes: 10,
// //     cookieDomain: "localhost", //Define onde o idioma detectado deve ser armazenado em cache.
// //   },
// //   interpolation: {
// //     escapeValue: false, // React já escapa os valores por padrão
// //   },
// // });

// // // Defina o idioma inicial a partir do localStorage, somente no cliente
// // if (typeof window !== "undefined") {
// //   //Verifica se o código está sendo executado no ambiente do navegador.
// //   const storedLanguage = localStorage.getItem(I18N_STORAGE_KEY); //Tenta obter o valor armazenado sob a chave I18N_STORAGE_KEY no localStorage.
// //   if (storedLanguage) {
// //     //Verifica se há um valor armazenado para a chave I18N_STORAGE_KEY no localStorage.
// //     i18n.changeLanguage(storedLanguage); //Altera o idioma atual do i18next para o valor armazenado em storedLanguage.
// //   }
// // }

// // export { i18n };
