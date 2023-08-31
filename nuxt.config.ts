// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  components: [
    { path: "~/components/QuestsGlobal", pathPrefix: false, global: true },
    { path: "~/components/Quests", pathPrefix: false },
    "~/components",
  ],
  app: {
    head: {
      title: "Code Quest",
      meta: [
        {
          name: "description",
          content:
            "Interactive platform for learning front-end web development for DBS ITDT Members",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "favicon.svg" }],
    },
  },
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },
});
