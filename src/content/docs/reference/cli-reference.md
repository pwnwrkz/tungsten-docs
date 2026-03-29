---
title: CLI Reference
description: A reference for all Tungsten commands and flags.
---

## `tungsten`

| Flag | Description |
|---|---|
| `--version` or `-V` | Prints the current version of Tungsten. |
| `--help` or `-H` | Prints a list of available commands. |

---

## `tungsten init`

Creates a new `tungsten.toml` config file in the current directory.
```bash
tungsten init
```

:::caution
This command will fail if a `tungsten.toml` already exists in the current directory to avoid overwriting your existing config.
:::

---

## `tungsten test`

Verifies that your `tungsten.toml` config is valid and that all assets referenced by your input globs can be found. Does not upload anything.
```bash
tungsten test
```

---

## `tungsten sync`

Uploads your assets to Roblox and generates the Luau output files defined in your config.
```bash
tungsten sync --target <target> --api-key <key>
```

| Flag | Value | Description |
|---|---|---|
| `--target` | `roblox` or `none` | Set to `roblox` to upload for real, or `none` for a dry run without uploading anything. |
| `--api-key` | Your Roblox Open Cloud API key. | Required for uploading assets to Roblox. |

:::tip
Use `--target none` to verify what Tungsten would sync without actually uploading anything to Roblox.
:::
