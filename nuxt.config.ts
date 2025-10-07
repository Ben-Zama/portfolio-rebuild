// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          type: "tetx/css",
          href: "https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css",
        },
        {
          rel: "stylesheet",
          type: "tetx/css",
          href: "https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css",
        },
      ],
    },
  },
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.scss"],
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
});
