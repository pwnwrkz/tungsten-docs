---
title: Installation
---

**Tungsten** is designed to be flexible and can be installed through several popular package managers. Choose the method that best fits your existing workflow.

:::note
The list may grow over time as **Tungsten** gets added to other package managers.
:::

## [Mise (mise-en-place)](https://mise.jdx.dev)
Mise is a polyglot tool manager that can handle **Tungsten** directly from GitHub.

To install and activate **Tungsten** in your current directory, run:

```bash title="Terminal"
mise use github:pwnwrkz/tungsten
```

## [Rokit](https://github.com/rojo-rbx/rokit) and [Aftman](https://github.com/LPGhatguy/aftman)
Both Rokit and Aftman are toolchain managers widely used in the Roblox ecosystem.

They function similarly; simply run the command for the tool you have installed.

### For Rokit
```bash title="Terminal"
rokit add pwnwrkz/tungsten
```

### For Aftman
```bash title="Terminal"
aftman add pwnwrkz/tungsten
```

:::tip
Which one should I use? These tools are alternatives to one another. You only need to run the command for the specific package manager you are currently using for your project.
:::

## [Cargo](https://crates.io/crates/tungsten-cli)
Installing via Cargo requires the Rust toolchain. If you don't have it, you can get it at [rust-lang.org](https://www.rust-lang.org/learn/get-started).

To install the **Tungsten** CLI globally:

```bash title="Terminal"
cargo install tungsten-cli
```

:::caution[Important]
The package is named `tungsten-cli` on [crates.io](https://crates.io/crates/tungsten-cli) because the name `tungsten` was already reserved for an outdated game framework. However, once installed, the command you use in your terminal is simply `tungsten`.
:::

# Verifying the installation
After running your chosen installation command, ensure that the **Tungsten** binary is correctly linked to your path by checking the help menu:

```bash title="Terminal"
tungsten --version
```

Tungsten should print something like this:
```bash title="Terminal"
tungsten 2.0.0
```
