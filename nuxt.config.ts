export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "vue3-carousel-nuxt",
    "@samk-dev/nuxt-vcalendar",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
  ],

  // @ts-ignore
  googleFonts: {
    families: {
      "Barlow Condensed": [400, 500, 600, 700],
      Poppins: [400, 500, 600],
      "Playfair Display": [400, 500, 600, 700],
    },
  },

  icon: {
    serverBundle: {
      collections: ["guidance"],
    },
  },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },

  runtimeConfig: {
    public: {
      baseUrl: "https://netbs.sauvabelin.ch",
    },
  },
});
