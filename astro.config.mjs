import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const SITE = "https://jelenajevremovic.com";

export default defineConfig({
  site: SITE,
  output: "static",
  trailingSlash: "always",
  redirects: {
    "/": "/sr/"
  },
  integrations: [
    sitemap({
      filter: (page) => page !== `${SITE}/` && !page.endsWith("/hvala/"),
      i18n: {
        defaultLocale: "sr",
        locales: {
          sr: "sr-Latn-RS",
          en: "en-US"
        }
      }
    })
  ]
});
