---
title: Configuration
description: A reference for every field in tungsten.toml.
---

Tungsten is configured through a `tungsten.toml` file in your project's root directory. Run `tungsten init` to generate one, or create it manually.

Here's a full example showing every available field:
```toml title="tungsten.toml"
[creator]
type = "user"
id = 12345678

[codegen]
style = "flat"
strip_extension = true

[inputs.packed_assets]
path = "assets/packed/**/*.png"
output_path = "shared/Assets/Packed.luau"
packable = true

[inputs.individual_assets]
path = "assets/individual/**/*.png"
output_path = "shared/Assets/Individual.luau"
packable = false
```

---

## `[creator]`

Defines which Roblox account or group assets are uploaded under.

| Field | Type | Description |
|---|---|---|
| `type` | `"user"` or `"group"` | Whether to upload under a user or a group. |
| `id` | number | The Roblox user or group ID to upload under. |

---

## `[codegen]`

Controls how Tungsten generates your Luau output files.

| Field | Type | Description |
|---|---|---|
| `style` | `"flat"` or `"nested"` | The structure of the generated Luau table. |
| `strip_extension` | boolean | Whether to strip the file extension from asset keys. |

---

## `[inputs.<name>]`

Defines a set of assets to sync. You can define as many input blocks as you need — each one is identified by its name (e.g. `[inputs.packed_assets]`).

| Field | Type | Description |
|---|---|---|
| `path` | string | A glob pattern pointing to the assets to sync. |
| `output_path` | string | Where Tungsten writes the generated Luau file. |
| `packable` | boolean | Whether to pack matched assets into a spritesheet before uploading. |

:::note
When `packable` is set to `true`, Tungsten packs the matched images into a spritesheet on the fly before uploading. The spritesheet is never saved to disk.
:::
