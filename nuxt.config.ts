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

  app: {
    head: {
      title: "Eva a David budou mít svatbu!",
      meta: [
        { charset: "utf-8" },
        { name: "theme-color", content: "#fffdfa" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:title", content: "Eva a David budou mít svatbu!" },
        { property: "og:description", content: "Budeme se brát a jsme moc rádi, že u toho budete s námi." },
        { property: "og:image", content: "https://svatba.ovcacik.xyz/og-image.jpg" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#9dc05e" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },

  css: ["~/assets/css/fonts.css", "~/assets/css/animations.css"],

  vite: {
    plugins: [svgLoader({ svgo: false, defaultImport: "component" })],
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@formkit/nuxt"],
});
