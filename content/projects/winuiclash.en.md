---
title: "WinUIClash"
description: "An experimental project that migrates the Flutter UI of FlClash to WinUI 3."
icon: "/icons/winuiclash.png"
cover: "/screenshots/winuiclash.png"
tags: ["C#", "WinUI 3", "Windows", ".NET"]
github: "https://github.com/sandhope/WinUIClash"
release: "https://github.com/sandhope/WinUIClash/releases/latest"
weight: 7
date: 2026-07-18
---

## Overview

WinUIClash is an experimental project that migrates the Flutter UI of [FlClash](https://github.com/chen08209/FlClash) to [WinUI 3](https://github.com/microsoft/microsoft-ui-xaml), bringing a fully native Windows experience.

## Project goals

- 🎯 **1:1 replication** — keep FlClash's UI functionality unchanged, without adding or removing any features
- 🧪 **Technical validation** — validate WinUI 3's performance in development efficiency, performance, and stability

## Tech stack

| Component | Description |
|-----------|-------------|
| Framework | .NET 10 + Windows App SDK 2.2 |
| UI | WinUI 3 (XAML) |
| Target platform | Windows 10 1809+ (`10.0.17763.0`) |
| Architecture | x86 / x64 / ARM64 |
