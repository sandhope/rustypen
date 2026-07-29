# rustypen.com

[English](./README.md) | 简体中文

[sandhope](https://github.com/sandhope) 开源项目主页——基于 [Hugo](https://gohugo.io/) 构建的零依赖静态网站。

**在线地址：** https://rustypen.com

- 🚫 无 npm、无 `node_modules`、无 Dependabot 告警——主题完全手写并内置在本仓库
- 🌐 中英双语 · 🌙 深色 / 浅色主题
- 📝 每个项目一个 markdown 文件

## 新增项目

创建 `content/projects/my-app.en.md` 和 `my-app.zh.md`：

```yaml
---
title: "My App"
description: "显示在卡片上的一句话简介。"
icon: "/icons/my-app.png"            # 可选，列表卡片的应用图标（static/icons/）
cover: "/screenshots/my-app.png"     # 可选，详情页的软件截图（static/screenshots/）
tags: ["Rust", "Desktop"]
github: "https://github.com/sandhope/my-app"
release: "https://github.com/sandhope/my-app/releases/latest"
weight: 7                            # 排序权重
---

正文写项目介绍（markdown）...
```

## 开发与部署

```sh
hugo server          # http://localhost:1313
hugo --minify        # 生产构建
```

推送到 `main` 自动部署到 GitHub Pages（`.github/workflows/deploy.yml`）。自定义域名：`static/CNAME`。
