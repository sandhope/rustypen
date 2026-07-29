# rustypen.com

English | [简体中文](./README.zh-CN.md)

The open-source hub for [sandhope](https://github.com/sandhope) projects — a zero-dependency static site built with [Hugo](https://gohugo.io/).

**Live site:** https://rustypen.com

- 🚫 No npm, no `node_modules`, no Dependabot alerts — the theme is hand-written and lives in this repo
- 🌐 English / 中文 · 🌙 Dark / light theme
- 📝 One markdown file per project

## Add a project

Create `content/projects/my-app.en.md` and `my-app.zh.md`:

```yaml
---
title: "My App"
description: "One-line summary shown on the card."
icon: "/icons/my-app.png"            # optional, app icon on the list card (static/icons/)
cover: "/screenshots/my-app.png"     # optional, screenshot on the detail page (static/screenshots/)
tags: ["Rust", "Desktop"]
github: "https://github.com/sandhope/my-app"
release: "https://github.com/sandhope/my-app/releases/latest"
weight: 7                            # sort order
---

Project intro in markdown...
```

## Develop & deploy

```sh
hugo server          # http://localhost:1313
hugo --minify        # production build
```

Pushing to `main` auto-deploys to GitHub Pages (`.github/workflows/deploy.yml`). Custom domain: `static/CNAME`.
