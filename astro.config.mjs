import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://adAdministrator.github.io',
  base: 'https://github.com/adAdministrator/adAdministrator.github.io',
  integrations: [tailwind()]
});