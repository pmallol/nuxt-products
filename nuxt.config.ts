// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: 'Nuxt Merch',
      meta: [
        {name: 'description', content: 'Nuxt Merch is a sample Nuxt.js project for demonstrating how to build a simple e-commerce site using Nuxt.js.'},
      ],
    }
  },
  runtimeConfig: {
    currencyApiKey: process.env.CURRENCY_API_KEY,
  }
})
