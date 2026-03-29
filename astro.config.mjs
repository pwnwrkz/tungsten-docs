// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://pwnwrkz.github.io",
  base: "/tungsten-docs",
  integrations: [
    starlight({
      title: "Tungsten",
      favicon: "/favicon.ico",
      customCss: ["./src/styles/custom.css"],
      logo: {
        light: "./src/assets/tungsten_banner_light.png",
        dark: "./src/assets/tungsten_banner_dark.png",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/pwnwrkz/tungsten",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", slug: "getting-started/introduction" },
            { label: "Installation", slug: "getting-started/installation" },
            { label: "Quick Start", slug: "getting-started/quick-start" },
          ],
        },
        {
          label: "Guides",
          items: [{ label: "Usage", slug: "guides/usage" }],
        },
        {
          label: "Reference",
          items: [
            { label: "CLI Reference", slug: "reference/cli-reference" },
            { label: "Configuration", slug: "reference/configuration" },
          ],
        },
      ],
    }),
  ],
});
