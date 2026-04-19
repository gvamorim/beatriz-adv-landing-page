import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Production: https://www.bvcadvocacia.com.br (GitHub Pages custom domain)
  site: "https://www.bvcadvocacia.com.br",
  base: "/",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
});
