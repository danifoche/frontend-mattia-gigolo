import locale3c5227c0 from '../../locales/it-IT.js'
import locale6010b66b from '../../locales/en-US.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: false,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"it"},
  vueI18nLoader: false,
  locales: [{"name":"Italiano","code":"it","iso":"it-IT","file":"it-IT.js"},{"name":"English","code":"en","iso":"en-US","file":"en-US.js"}],
  defaultLocale: "it",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "no_prefix",
  lazy: false,
  langDir: "/Users/daniele/Documents/projects/personal/websites/mattia-gigolo/frontend/locales",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":true,"cookieCrossOrigin":true,"cookieDomain":null,"cookieKey":"_locale","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"name":"Italiano","code":"it","iso":"it-IT","file":"it-IT.js"},{"name":"English","code":"en","iso":"en-US","file":"en-US.js"}],
  localeCodes: ["it","en"],
  additionalMessages: [],
}

export const localeMessages = {
  'it-IT.js': () => Promise.resolve(locale3c5227c0),
  'en-US.js': () => Promise.resolve(locale6010b66b),
}
