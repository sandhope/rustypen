---
title: "Rusty Pen"
description: "A vintage-inspired cross-platform writing app that brings the ritual of traditional writing to the digital age."
icon: "/icons/rusty-pen.png"
cover: "/screenshots/rusty-pen-en.jpg"
tags: ["Tauri", "React", "Rust", "Writing"]
github: "https://github.com/RustyPen/rusty-pen"
release: "https://github.com/RustyPen/rusty-pen/releases/latest"
weight: 8
date: 2026-07-29
---

## Overview

> The pen is rusty. The mind isn't.

Rusty Pen is a vintage-inspired cross-platform writing application (Windows, macOS, Linux) that brings the ritual of traditional writing to the digital age — for those who miss the weight of a real pen.

Also available natively on iOS (SwiftUI): [download on the App Store](https://apps.apple.com/us/app/rusty-pen/id6759075369?mt=12).

## Features

- ✍️ **Four pens** — fountain, brush, feather, and ballpoint, each with its own font style and writing sound
- 📜 **Paper themes** — vintage stationery, parchment, manuscript, and telegram paper, plus custom backgrounds
- 🎨 **Six global themes** — light, dark, autumn leaves, winter night, ink, and vintage
- 🔊 **Immersive sound** — pen strokes, button clicks, and six ambient scenes (fireplace, rain, train, cafe, forest, waves)
- 💾 **Auto save** — articles are stored locally and saved as you write
- 📄 **PDF export** — keep paper themes and styles in the exported file
- 🌐 **Bilingual UI** — full English and Chinese interfaces

## Tech stack

| Component | Description |
|-----------|-------------|
| Desktop framework | Tauri 2 (Rust) |
| Frontend | React 19 + Vite |
| Audio | Web Audio API |
| PDF export | html2canvas + jsPDF |
