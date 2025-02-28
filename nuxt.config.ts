import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@primevue/nuxt-module',
    '@pinia/nuxt',
  ],
  // vite: {
  //   server: {
  //     proxy: {
  //       '/api': {
  //         target: 'http://localhost:30000',
  //         changeOrigin: true,
  //       },
  //     },
  //   },
  // },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  eslint: {},
  ssr: true,
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
