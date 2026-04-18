import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://guiguitz.github.io",
  base: "/beatrizadv/",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
});
