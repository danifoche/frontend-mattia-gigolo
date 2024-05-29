import config from './configs'

const URL = ''
const title = 'Mattia Gigolo'
const description = ''

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Define Loading Bar
  // loading: '~/components/molecules/loading.vue',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mattia Gigolo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'format-detection', content: 'telephone=no' },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: URL,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: URL + 'logo_meta.png',
      },
      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Mattia Gigolo',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: URL,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: URL + 'logo_meta.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: URL + 'logo_meta.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, ...config.icons.map((href) => ({ rel: 'stylesheet', href }))],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/api.ts', mode: 'client' },
    { src: '~/plugins/vee-validate.ts', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    [
      '@nuxtjs/vuetify',
      {
        customVariables: ['~/assets/scss/vuetify/variables/_index.scss'],
        optionsPath: '~/configs/vuetify.ts',
        treeShake: true,
        defaultAssets: {
          font: false,
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
    'vue-toastification/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axiost
  axios: {
    baseUrl: process.env.STRAPI_ENDPOINT,
    headers: {
      common: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: '/icon.png',
    },
    manifest: {
      name: 'Mattia Gigolo',
      short_name: 'Mattia Gigolo',
      lang: 'it',
      display: 'standalone',
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
        },
        {
          urlPattern: config.icons[0],
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
        },
      ],
    },
  },

  // I18n module
  i18n: {
    strategy: 'no_prefix',
    locales: [
      { name: 'Italiano', code: 'it', iso: 'it-IT', file: 'it-IT.js' },
      { name: 'English', code: 'en', iso: 'en-US', file: 'en-US.js' },
    ],
    vueI18n: {
      fallbackLocale: 'it',
    },
    langDir: 'locales/',
    defaultLocale: 'it',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: '_locale',
      cookieCrossOrigin: true,
      alwaysRedirect: true,
    },
  },

  // Toast library configurations
  toast: {
    draggable: false,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#191D24',
        }
      }
    }
  },

  env: {
    STRAPI_TOKEN: process.env.STRAPI_TOKEN,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
  },

  /*
   ** Generate dynamic routes
   */
  generate: {
    fallback: true,
    routes: ['404', '403', '401', '500'],
  },
}
