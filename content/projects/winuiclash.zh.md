---
title: "WinUIClash"
description: "将 FlClash 的 Flutter UI 迁移至 WinUI 3 的实验性项目。"
icon: "/icons/winuiclash.png"
cover: "/screenshots/winuiclash.png"
tags: ["C#", "WinUI 3", "Windows", ".NET"]
github: "https://github.com/sandhope/WinUIClash"
release: "https://github.com/sandhope/WinUIClash/releases/latest"
weight: 7
date: 2026-07-18
---

## 项目简介

WinUIClash 是一个将 [FlClash](https://github.com/chen08209/FlClash) 的 Flutter UI 迁移至 [WinUI 3](https://github.com/microsoft/microsoft-ui-xaml) 的实验性项目，带来完全原生的 Windows 体验。

## 项目目标

- 🎯 **1:1 还原** — 保持 FlClash 的 UI 功能不变，不增加也不减少任何功能点
- 🧪 **技术验证** — 验证 WinUI 3 在开发效率、性能和稳定性方面的表现

## 技术栈

| 组件 | 说明 |
|------|------|
| 框架 | .NET 10 + Windows App SDK 2.2 |
| UI | WinUI 3 (XAML) |
| 目标平台 | Windows 10 1809+ (`10.0.17763.0`) |
| 架构 | x86 / x64 / ARM64 |
