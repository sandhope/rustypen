---
title: "Rusty Pen"
description: "复古风格的跨平台写作应用，把传统书写的仪式感带进数字时代。"
icon: "/icons/rusty-pen.png"
cover: "/screenshots/rusty-pen-zh.jpg"
tags: ["Tauri", "React", "Rust", "Writing"]
github: "https://github.com/RustyPen/rusty-pen"
release: "https://github.com/RustyPen/rusty-pen/releases/latest"
weight: 8
date: 2026-07-29
---

## 项目简介

> The pen is rusty. The mind isn't.

Rusty Pen 是一款复古风格的跨平台写作应用（Windows、macOS、Linux），把传统书写的仪式感带进数字时代——献给怀念真实笔触的你。

iOS 原生版本（SwiftUI）已上架：[App Store 下载](https://apps.apple.com/us/app/rusty-pen/id6759075369?mt=12)。

## 核心特性

- ✍️ **四种笔** — 钢笔、毛笔、羽毛笔、圆珠笔，每种笔都有独特的字体风格和书写音效
- 📜 **纸张主题** — 复古信纸、羊皮纸、手稿纸、电报纸，还支持自定义背景图
- 🎨 **六种全局主题** — 明亮、暗黑、秋日落叶、冬日雪夜、水墨、复古
- 🔊 **沉浸式音效** — 笔触声、按键声，以及壁炉、雨声、火车、咖啡馆、森林、海浪六种环境音
- 💾 **自动保存** — 文章本地持久化存储，边写边存
- 📄 **PDF 导出** — 导出时保留纸张主题与样式
- 🌐 **双语界面** — 完整的中英文界面切换

## 技术栈

| 组件 | 说明 |
|------|------|
| 桌面框架 | Tauri 2（Rust） |
| 前端 | React 19 + Vite |
| 音频 | Web Audio API |
| PDF 导出 | html2canvas + jsPDF |
