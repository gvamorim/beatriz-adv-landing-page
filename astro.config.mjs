import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Must match GitHub Pages project URL: https://<user>.github.io/<repo>/
  site: "https://gvamorim.github.io",
  base: "/beatriz-adv-landing-page/",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
});
