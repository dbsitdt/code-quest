// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  components: [
    { path: "~/components/QuestsGlobal", pathPrefix: false, global: true },
    { path: "~/components/Quests", pathPrefix: false },
    { path: "~/components/LeaderBoard", pathPrefix: false },
    { path: "~/components/UI", pathPrefix: false },
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
      link: [
        { rel: "icon", type: "image/x-icon", href: "favicon.svg" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
        },
      ],
    },
  },
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },
  runtimeConfig: {
    public: {
      authKey: process.env.NUXT_AUTH_API_TOKEN,
    },
  },
});
