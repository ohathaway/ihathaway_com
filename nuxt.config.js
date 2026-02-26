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
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },

  css: ['~/assets/styles/global.css'],

  modules: ['@nuxt/content'],

  nitro: {
    // preset: 'service-worker'
    preset: 'cloudflare-pages'
  },

  ssr: false,

  compatibilityDate: '2025-02-07',
});