import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import { ru } from 'date-fns/locale'

import _en from './en.json'
import _ru from './ru.json'

i18n.use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    lng: 'ru',
    debug: false,

    interpolation: {
      escapeValue: false // not needed for react!!
    },

    resources: {
      en: { translation: _en },
      ru: { translation: _ru }
    }
  })

export { useTranslation } from 'react-i18next'
export function t(name, params = {}) {
  return i18n.t(name, params)
}

// export const getLanguage = () => {
//   return i18n.language ||
//     (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
//     'en'
// }

export const getLanguage = () => {
  return i18n.language || 'ru'
}

export const getDateLocale = () => {
  switch (getLanguage()) {
    case 'en':
      return null
    case 'ru':
      return ru
    default:
      return null
  }
}

export const changeLanguage = (lang = 'ru') => {
  i18n.changeLanguage(lang)
}

export default i18n
