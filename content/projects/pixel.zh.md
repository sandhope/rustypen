---
title: "Pixel Logo Studio"
description: "拖拽式、积木式桌面 logo 编辑器——用基础图形拼搭 logo，导出保留透明背景的清晰 PNG 与 SVG。"
icon: "/icons/pixel.png"
cover: "/screenshots/pixel-zh.png"
tags: ["Wails", "Vue", "Go", "Design"]
github: "https://github.com/sandhope/pixel"
release: "https://github.com/sandhope/pixel/releases/latest"
weight: 9
date: 2026-08-05
---

## 项目简介

> 像搭积木一样做 logo。

Pixel Logo Studio 是一款拖拽式、积木式的桌面 logo 编辑器（Windows、macOS、Linux）。用 9 种基础图形拼搭 logo，保留透明背景，并导出清晰的 PNG 与 SVG——无需专业设计功底。

## 核心特性

- 🧱 **积木式设计** — 从左侧图形库拖拽（或点击）9 种基础图形到画布：矩形、圆形、椭圆、直线、三角形、多边形、星形、心形（路径）与文字
- 🔧 **完整变换** — 点击选中、拖拽移动、八方向缩放手柄、顶部旋转手柄（Shift 吸附 15°）、方向键微调（1 像素，Shift = 10 像素）
- 🗂️ **图层面板** — 拖拽排序、切换可见性/锁定、删除，四档层级按钮（置底 / 下移 / 上移 / 置顶）
- ⚙️ **属性面板** — 坐标、尺寸、旋转、透明度、圆角、星形角数与内比、多边形边数、文字与字体设置、填充与描边
- 📐 **多选对齐** — 选中 ≥ 2 个图形时，一键左 / 居中 / 右 / 上 / 居中 / 下对齐
- 🪟 **透明背景** — 棋盘格预览；PNG 保留 alpha 通道，SVG 省略背景矩形
- 📤 **导出** — PNG 由浏览器内 Canvas 以 1×–4× 超采样渲染并弹原生保存对话框；SVG 直接由图形树序列化导出（矢量无损）
- 💾 **工程持久化** — 保存 / 打开 `.pixel.json` 工程文件；编辑状态自动缓存到 `localStorage`
- ↩️ **撤销 / 重做** — 50 步历史栈（Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y）
- 🎨 **亮 / 暗主题** — 设置中切换，持久化到 `localStorage`
- 🌐 **双语界面** — 完整中英文本地化，可随时切换

## 技术栈

| 层 | 技术 |
|------|------|
| 桌面外壳 | Wails v2（Go 1.22+） |
| 原生对话框 / 文件读写 | Go（`runtime.SaveFileDialog`、`os.WriteFile`） |
| 前端 | Vue 3.5 + TypeScript + Vite 6 |
| 状态管理 | Pinia 2 |
| 渲染 | SVG DOM（可编辑） → Canvas（PNG 导出） |
