// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Owen Hathaway\'s Personal Website'
    }
  },

  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/pro-solid-svg-icons',
      '@fortawesome/pro-regular-svg-icons',
      '@fortawesome/pro-light-svg-icons',
      '@fortawesome/pro-thin-svg-icons',
      '@fortawesome/pro-duotone-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },

  css: ['~/assets/styles/global.css'],

  nitro: {
    // preset: 'service-worker'
    preset: 'cloudflare-pages'
  },

  ssr: false,

  compatibilityDate: '2025-02-07',
});