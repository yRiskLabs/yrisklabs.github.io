import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yrisklabs.com",
  integrations: [
    sitemap({
      filter: (page) => !page.startsWith("https://yrisklabs.com/lr-handoff"),
    }),
  ],
});
