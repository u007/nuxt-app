import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel',
  },
  modules: ['./modules/antd'],
  css: ['ant-design-vue/dist/antd.css', '~/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  experimental: {
    reactivityTransform: true,
    viteNode: true,
  },
});
