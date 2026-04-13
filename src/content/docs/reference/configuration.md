---
title: Configuration
description: A reference for every field in tungsten.toml.
---

Tungsten is configured through a `tungsten.toml` file in your project's root directory. Run `tungsten init` to generate one, or create it manually.

## Full example
```toml title="tungsten.toml"
[creator]
type = "user" # "user" or "group"
id = 12345678

[codegen]
style = "nested" # "flat" (default) or "nested"
strip_extension = true # Remove .png, .mp3, etc. from generated keys

# Example: UI Icons
[inputs.icons]
path = "assets/icons/**/*" 
output_path = "src/Icons.luau"
packable = true
svg_scale = 2.0        
convert = [
    "svg -> png",             
    "button.svg -> button.jpg" 
]

# Example: Large backgrounds
[inputs.backgrounds]
path = "assets/backgrounds/**/*"
output_path = "src/Backgrounds.luau"
packable = false
convert = [
    "jpg -> png" 
]

# Example: Audio and Models
[inputs.audio]
path = "assets/audio/**/*"
output_path = "src/Sounds.luau"

[inputs.models]
path = "assets/models/**/*"
output_path = "src/Models.luau"
```

## Fields

### `[creator]`

Defines which Roblox account or group assets are uploaded under.

| Field | Type | Description |
|---|---|---|
| `type` | `"user"` or `"group"` | Whether to upload under a user or a group. |
| `id` | `number` | The Roblox user or group ID to upload under. |

---

### `[codegen]`

Controls how Tungsten generates your Luau output files.

| Field | Type | Description |
|---|---|---|
| `style` | `"flat"` or `"nested"` | The structure of the generated Luau table. |
| `strip_extension` | `boolean` | Whether to strip the file extension from asset keys. |

---

### `[inputs.<name>]`

Defines a set of assets to sync. You can define as many input blocks as you need — each one is identified by its name (e.g. `[inputs.packed_assets]`).

| Field | Type | Description |
|---|---|---|
| `path` | `string` | A glob pattern pointing to the assets to sync. |
| `output_path` | `string` | Where Tungsten writes the generated Luau file. |
| `packable` | `boolean` | Whether to pack matched assets into a spritesheet before uploading. |
| `svg_scale` | `number` | (Optional) Multiplier for SVG rasterization. Default is 1.0. |
| `convert`	| `string[]` | (Optional) A list of rules to change file formats during sync. |

:::note
When `packable` is set to `true`, Tungsten packs the matched images into a spritesheet on the fly before uploading. The spritesheet is never saved to disk.
:::
