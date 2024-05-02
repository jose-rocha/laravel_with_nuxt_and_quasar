// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-quasar-ui',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  runtimeConfig: {
    dev: {
      apiBase: 'http://localhost:3000',
    },
    prod: {
      apiBase: 'https://api.nuxtjs.dev',
    },
    // The private keys which are only available within server-side
    apiSecret: process.env.NUXT_API_SECRET,
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  quasar: {
    config: {
      brand: {
        primary: '#00DC82', // Peguei do site do Nuxt https://nuxt.com/design-kit
        secondary: '#26A69A',
        accent: '#9C27B0',
        dark: '#020420', // Peguei do site do Nuxt https://nuxt.com/design-kit
        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037',
      },
    },
    plugins: ['Dialog', 'Loading'],
    lang: 'pt-BR',
    extras: {
      fontIcons: ['mdi-v7'],
    },
  },
  // eslint: {
  //   checker: true, // Mostrar erros no console e no navegador
  //   config: {
  //     stylistic: {
  //       indent: 2, // Tabulação
  //       semi: true, // Ponto e vírgula
  //       quotes: 'single', // Aspas simples
  //     },
  //   },
  // },
});
