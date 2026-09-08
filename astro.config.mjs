import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yrisklabs.com",
  redirects: {
    "/posts": "/research",
    "/posts/[id]": "/research/[id]",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.startsWith("https://yrisklabs.com/lr-handoff"),
    }),
  ],
});
