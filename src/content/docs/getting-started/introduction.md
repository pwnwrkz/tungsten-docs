---
title: Introduction
description: An overview of Tungsten and how it fits into your Roblox development workflow.
---

Welcome to the Tungsten documentation! This guide covers what Tungsten is, the features it offers, and how it compares to other  tools.

## What is Tungsten?

Tungsten is another command line tool to manage Roblox assets similar to Tarmac and Asphalt.

It was made out of frustration during the development of [LucideRoblox](https://github.com/notmagniill/LucideRoblox). While existing tools were functional, they were incomplete: **Tarmac** has become unusable due to aging APIs, and **Asphalt**, while excellent for syncing, lacks the essential ability to pack assets into spritesheets.

Tungsten bridges this gap by combining the best of both worlds:

- **The Utility of Tarmac:** Automatic spritesheet packing to optimize UI performance.
- **The Modernity of Asphalt:** Full integration with Roblox's Open Cloud API.
- **Developer Experience:** Meaningful error messages and a focus on ease of use.

## Features

### Available

- **Multi-Asset Syncing:** Push images, audio, models, and animations directly to Roblox.
- **Automatic Packing:** Combine images into optimized spritesheets on the fly.
- **Asset Conversion:** Native support for various file formats, including SVG-to-PNG conversion.
- **Metadata Support:** Define custom names and descriptions via `.tmeta` files.
- **Luau Codegen:** Automatically generate type-safe Luau code to reference your assets.
- **Flexible Targets:** Seamlessly switch between User and Group-owned assets.

### Planned

- **TypeScript Support:** Native codegen for `roblox-ts` workflows.
- **Watch Mode:** Automatic syncing as soon as files change (similar to `rojo serve`).
- **External Asset Mapping:** Link to existing assets already on Roblox.
- **High DPI Detection:** Automated scaling for high-resolution displays.
- **Smarter Initialization:** Auto-detects project folders to instantly generate your configuration.
- **Studio Syncing:** Preview assets in Roblox Studio before publishing to the Creator Marketplace.

:::tip
Have a feature request? We’d love to hear it! Open an issue with the `enhancement` tag on the GitHub repository.
:::

## Choosing the Right Tool

Asset management is a core part of your pipeline. Here is how Tungsten stacks up against the competition:

| Feature | Tungsten | Asphalt | Tarmac |
| :--- | :--- | :--- | :--- |
| **Status** | ✅ Active | ✅ Active | ❌ Deprecated |
| **API** | Open Cloud | Open Cloud | Legacy Web API |
| **Spritesheet Packing** | ✅ Supported | ❌ No | ⚠️ Partial [^1] |
| **Luau/TS Codegen** | ⚠️ Partial [^2] | ✅ Supported | ✅ Supported |
| **Asset Support** | Images, Audio, Models, Animations | Images, Audio, Video, Models, Animations | Images Only |

### Recommendation

- **Choose Tungsten** if you need an all-in-one tool for **spritesheet packing** and **SVG conversion**, but can sacrifice certain features such as **uploading videos** and **TypeScript codegen** (for now). It's the **best choice** if you're looking for a **modern, streamlined syncing experience**.
- **Choose Asphalt** if your project specifically requires **Video asset uploads** or if you are using a **TypeScript** (`roblox-ts`) currently and need **immediate codegen support**.
- **Avoid Tarmac.** It relies on **deprecated Web APIs** and **fails to sync**, making it **unreliable** for modern Roblox development.

[^1]: Tarmac requires images to be in strict **RGBA** color format; other color formats will cause the tool to panic and fail.
[^2]: Tungsten currently only supports Luau codegen, TypeScript codegen is in the works.
