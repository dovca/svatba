import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    gmailPassword: "",
    public: {
      mapsApiKey: "",
    },
  },

  devtools: { enabled: false },

  css: ["~/assets/css/fonts.css"],

  vite: {
    plugins: [svgLoader({ svgo: false, defaultImport: "component" })],
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@formkit/nuxt"],
});
