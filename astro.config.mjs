import { defineConfig } from "astro/config";
import ampt from "@ampt/astro";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [ampt()],
});
