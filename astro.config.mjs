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
      // sidebar config snippet
      sidebar: [
        {
          label: "Foundations",
          items: [
            { label: "Introduction", slug: "getting-started/introduction" },
            { label: "Installation", slug: "getting-started/installation" },
            { label: "Quick Start", slug: "getting-started/quick-start" },
          ],
        },
        {
          label: "Concepts",
          items: [
            { label: "Syncing Workflow", slug: "guides/usage" },
            { label: "Asset Processing", slug: "guides/processing" }, // New logical split
          ],
        },
        {
          label: "Reference",
          items: [
            {
              label: "Configuration",
              slug: "reference/configuration",
            },
            { label: "Meta Files", slug: "reference/meta-files" },
            { label: "CLI Reference", slug: "reference/cli-reference" },
          ],
        },
      ],
    }),
  ],
});
