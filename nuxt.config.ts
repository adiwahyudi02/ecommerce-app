// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "https://ecommerce-app-api-prod.vercel.app",
      urlBase: "https://ecommerce-app-prod.vercel.app",
      websiteName: "ecommerce app",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          // add global utilities
          additionalData: '@use "~/assets/styles/utilities.sass" as *\n',
        },
      },
    },
  },
  css: [
    // main style
    "@/assets/styles/main.sass",
    // toast
    "vue-toastification/dist/index.css",
  ],
  build: { transpile: ["vue-toastification"] },
  components: [
    // custom scanner for component auto-import
    { path: "~/components/page", prefix: "" },
    { path: "~/components/common", prefix: "" },

    // It's important that this comes last if you have overrides you wish to apply
    "~/components",
  ],
  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-swiper",
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
  ],
  app: {
    // transition
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },

    // set global head
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  // set rendering rule
  routeRules: {
    // client rendering
    "/shop": { ssr: false },
  },
});
