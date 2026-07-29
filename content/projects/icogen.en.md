---
title: "icogen"
description: "A Windows icon & assets generation toolkit written in 100% Rust, with a GPUI-based GUI and zero runtime dependencies."
icon: "/icons/icogen.png"
cover: "/screenshots/icogen.png"
tags: ["Rust", "GPUI", "CLI", "GUI"]
github: "https://github.com/sandhope/icogen"
release: "https://github.com/sandhope/icogen/releases/latest"
weight: 5
date: 2026-07-23
---

## Overview

icogen is a Windows icon & assets generation toolkit written in **100% Rust** — turn a single source image into Windows app icons and WinUI 3 assets, with zero runtime dependencies. The GUI is built on [GPUI](https://www.gpui.rs/), the GPU-accelerated UI framework behind the Zed editor, for native rendering and fast startup.

The release ships 5 standalone executables.

## GUI (GPUI)

| Program | Purpose |
| --- | --- |
| **`icogen-app.exe`** | ⭐ Recommended. All-in-one tool with a top tab bar to switch between the "Icon" and "Assets" workflows, reusing the same source image. |
| **`icogen-gui.exe`** | Generates `AppIcon.ico` only, with contain/cover modes, background color, padding, and per-size preview. |
| **`icogen-assets-gui.exe`** | Generates WinUI 3 / Windows App SDK asset PNGs only, with per-target toggles. |

## Command line

| Program | Purpose |
| --- | --- |
| **`icogen.exe`** | Generates `AppIcon.ico` with configurable sizes, scaling mode, and background color. |
| **`icogen-assets.exe`** | Generates 8 WinUI 3 asset PNGs into the `Assets\` directory. |

## Quick start

```powershell
# GUI (recommended)
icogen-app.exe

# Command line
icogen.exe logo.png
icogen-assets.exe logo.png
```

> Written in 100% Rust — all binaries are standalone, no .NET or other runtime required.
