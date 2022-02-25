import { createI18n } from 'vue-i18n'

import de from '@/locales/de.json'
import en from '@/locales/en.json'
import pl from '@/locales/pl.json'

const getBrowserLocale = (): string => {
  let location: string = navigator.language;
  const supported = ['de', 'en', 'pl']

  // needed because of various en laguages or if browser language is not supported
  if (location.includes('en') || !supported.includes(location)) 
    return 'en';

  return location;
}

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    globalInjection: true,
    messages: {
      de,
      en,
      pl
    }
});

if (import.meta.hot) {
  import.meta.hot.on("locales-update", (data) => {
    Object.keys(data).forEach((lang) => {
      i18n.global.setLocaleMessage(lang, data[lang]);
    });
  });
}


export default i18n;