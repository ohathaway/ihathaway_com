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
  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: true
  },
  modules: ['@nuxt/content'],
  nitro: {
    preset: 'service-worker'
  },
  ssr: false,
  target: "static",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/global.scss";',
        },
      },
    },
  },
});
