// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/variables.css"],

  devtools: { enabled: false },
  components: [
    { path: "~/components/QuestsGlobal", pathPrefix: false, global: true },
    { path: "~/components/Quests", pathPrefix: false },
    { path: "~/components/Leaderboard", pathPrefix: false },
    // { path: "~/components/UI", pathPrefix: false },
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
  modules: ["nuxt-security", "@pinia/nuxt"],
  security: {
    headers: {
      contentSecurityPolicy: {
        "script-src": [
          "'self'", // Fallback value, will be ignored by most modern browsers (level 3)
          "https:", // Fallback value, will be ignored by most modern browsers (level 3)
          "'unsafe-inline'", // Fallback value, will be ignored by almost any browser (level 2)
          "'strict-dynamic'", // Strict CSP via 'strict-dynamic', supported by most modern browsers (level 3)
          "'nonce-{{nonce}}'", // Enables CSP nonce support for scripts in SSR mode, supported by almost any browser (level 2)
        ],
        "style-src": [
          "'self'", // Enables loading of stylesheets hosted on same origin
          "https:", // For increased security, replace by the specific hosting domain or file name of your external stylesheets
          "'unsafe-inline'", // Recommended default for most Nuxt apps
        ],
        "img-src": [
          "'self'",
          "data:",
          "https://dudeproducts.com/cdn/shop/articles/gigachad_1068x.jpg",
          "https://www.dbs.edu.hk/dbslogoF-B.png",
          "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "https://www.dbspd.edu.hk/sites/default/files/inline-images/dbslogo.png",
          "https://placehold.co/80",
        ], // Add relevant https://... sources if you load images from external sources
        "font-src": ["'self'", "https:", "data:"], //  For increased security, replace by the specific sources for fonts
        "base-uri": ["'none'"],
        "object-src": ["'none'"],
        "script-src-attr": ["'none'"],
        "form-action": ["'self'"],
        "frame-ancestors": ["'self'"],
        "upgrade-insecure-requests": true,
      },
    },
    sri: true,
    rateLimiter: {
      tokensPerInterval: 100,
      interval: 60 * 60 * 1000,
      headers: true,
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 10000,
      maxUploadFileRequestInBytes: 8000000,
    },
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },
  imports: {},
  runtimeConfig: {
    dbURL: process.env.NUXT_DATABASE,
    serverEnv: process.env.SERVER_ENV,
    dbPassword: process.env.NUXT_DATABASE_PASSWORD,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  },
});
