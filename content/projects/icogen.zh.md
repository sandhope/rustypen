---
title: "icogen"
description: "100% Rust 编写的 Windows 图标 & 资源生成工具集，GUI 基于 GPUI，零运行时依赖。"
icon: "/icons/icogen.png"
cover: "/screenshots/icogen.png"
tags: ["Rust", "GPUI", "CLI", "GUI"]
github: "https://github.com/sandhope/icogen"
release: "https://github.com/sandhope/icogen/releases/latest"
weight: 5
date: 2026-07-23
---

## 项目简介

icogen 是一套 **100% 基于 Rust** 编写的 Windows 图标 & 资源生成工具集——从单张源图生成 Windows 应用图标和 WinUI 3 资源，零运行时依赖。图形界面基于 [GPUI](https://www.gpui.rs/)（Zed 编辑器同款 GPU 加速 UI 框架），原生渲染、快速启动。

发布包含 5 个独立可执行文件。

## 图形界面（GPUI）

| 程序 | 用途 |
| --- | --- |
| **`icogen-app.exe`** | ⭐ 推荐。整合工具，顶部标签栏在「图标」与「资源」两种工作流间切换，复用同一份源图。 |
| **`icogen-gui.exe`** | 仅生成 `AppIcon.ico`，支持 contain/cover 模式、背景色、内边距和逐尺寸预览。 |
| **`icogen-assets-gui.exe`** | 仅生成 WinUI 3 / Windows App SDK 资源 PNG，逐目标开关。 |

## 命令行

| 程序 | 用途 |
| --- | --- |
| **`icogen.exe`** | 生成 `AppIcon.ico`，可配置尺寸、缩放模式、背景色。 |
| **`icogen-assets.exe`** | 生成 8 个 WinUI 3 资源 PNG 到 `Assets\` 目录。 |

## 快速开始

```powershell
# 图形界面（推荐）
icogen-app.exe

# 命令行
icogen.exe logo.png
icogen-assets.exe logo.png
```

> 100% Rust 编写，全部为独立二进制，无需安装 .NET 或其他运行时。
