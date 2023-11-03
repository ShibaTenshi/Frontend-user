// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins:{
      tailwindcss:{},
      autoprefixer: {}
    }
  },

  modules: ['@pinia/nuxt'],

  app:{
    head: {
      link:[{rel: 'icon', type: 'image/png', href: 'logoUser.png'}],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  }
})
