// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
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
  ],
});
