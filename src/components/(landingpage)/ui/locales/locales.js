import { i18n } from '@/config/i18next';

export const flag = {
  'pt-BR': 'Português',
  'en-US': 'English',
  'es-AR': 'Español',
};

export const locales = i18n.locales.map((code) => {
  return { code, name: flag[code] };
});
