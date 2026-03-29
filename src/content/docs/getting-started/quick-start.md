---
title: Quick Start
description: Get up and running with Tungsten in a few minutes.
---

This guide will walk you through setting up Tungsten for the first time, from creating a config file to syncing your first assets to Roblox.

## Initialize a config file

Navigate to your project's root directory and run:
```bash title="Terminal"
tungsten init
```

This will create a `tungsten.toml` file in your current directory. If one already exists, the command will fail to avoid overwriting your existing config.

## Configure your creator

Open `tungsten.toml` and fill in your `[creator]` section:
```toml title="tungsten.toml"
[creator]
type = "user"  # or "group"
id = 12345678  # your Roblox user or group ID
```

If you're uploading assets under a group, set `type` to `"group"` and use your group's ID instead.

## Set up your inputs

Add an `[inputs]` block pointing at your assets. You can name it anything — Tungsten uses the name as an identifier:
```toml title="tungsten.toml"
[inputs.my_assets]
path = "assets/**/*.png"
output_path = "shared/Assets.luau"
packable = false
```

## Verify your config

Before syncing, run:
```bash title="Terminal"
tungsten test
```

This checks that your config is valid and your assets can be found without actually uploading anything. Fix any errors it reports before moving on.

## Sync your assets

Once everything looks good, run:
```bash title="Terminal"
tungsten sync
```

Tungsten will upload your assets to Roblox and generate a Luau file at the `output_path` you specified. It'll look something like this:
```luau title="Assets.luau"
local Assets = {
    ["arrow-up"] = {
        Image = "rbxassetid://18303920"
    }
}

return Assets
```

You can then require this file anywhere in your Roblox project to reference your assets.

## Next steps

- Learn more about configuring Tungsten in the [Usage](/tungsten-docs/guides/usage/) guide.
- See all available commands in the [CLI Reference](/tungsten-docs/reference/cli-reference/).
