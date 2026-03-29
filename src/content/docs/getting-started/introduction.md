---
title: Introduction
description: Introduction to using Tungsten.
---

Welcome to the Tungsten documentation site! In this topic we'll discuss on what is Tungsten, it's features, and whether you should use it compared to other tools.

# What is Tungsten?

Tungsten handles uploading and packing assets for Roblox projects. It was built during the making of [LucideRoblox](https://github.com/notmagniill/LucideRoblox), when I was frustrated with the existing tools. Tarmac is completely unusable, and Asphalt (while great) doesn't support spritesheet packing.

Tungsten combines the best of both:

- Spritesheet packing from Tarmac
- Modern Open Cloud API from Asphalt
- Helpful error messages from neither

> Not sure about Asphalt but Tarmac sucks at error messages

Tungsten aims to become a more modern alternative of Tarmac and Asphalt, while maintaining its ease of use.

# Features

### Available

- Syncing images directly to Roblox (packing spritesheets supported)
- Generates Luau code for you to reference your assets in your projects
- Target between Roblox users and groups

### Planned

- [ ] Support for more asset types like audio, animations, models and more.
- [ ] Ability to process SVGs to PNGs similar to Asphalt
- [ ] Defining assets you already uploaded
- [ ] High DPI detection similar to Tarmac

:::tip
Have an idea? Feel free to submit one with the `enhancements` tag in the Issues tab of the repository!
:::

# What should I use then?

Choosing which asset management tool depends on what your project needs, here's a little comparison between the three:

| Feature | Tungsten | Asphalt | Tarmac |
|---|---|---|---|
| Status | ✅ Active | ✅ Active | ❌ Broken |
| API | Open Cloud | Open Cloud | Legacy Web API |
| Packing | ✅ Supported | ❌ Not Supported | ⚠️ Supported [^1] |
| Codegen | ✅ Supported | ✅ Supported (with TypeScript support) | ✅ Supported |
| Asset Support | Images (more coming) | Images, Audios, Videos, Models, Animations | Images only |

If you still don't know which to use, choose:

- **Tungsten**, if your current priority is **image assets** and you need the **spritesheet packing** feature.
- **Asphalt**, if you need to upload multiple asset types, the ability to use **TypeScript for codegen**, or just a **reliable** asset management tool.
- **Please, do not use Tarmac.** It relies on the **Legacy Web API** and because of that it is **broken** and is currently **not even usable** as it breaks on one bug while syncing.

Hope that helped you make up your mind!

[^1]: If your input images are not in the **RGBA** color format Tarmac will **not** accept your files and **panic**.