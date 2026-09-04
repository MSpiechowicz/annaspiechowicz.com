import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://annaspiechowicz.com",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "redirect"
    }
  }
});
