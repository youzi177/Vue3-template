# Vue3 Template

一个基于 Vue 3 + TypeScript + Vite 的前端开发模板，集成常用开发工具与插件，开箱即用，方便快速启动新项目。从0到1的开发流程：[文章](https://t.youzi177.cn/posts/2026110501vue3-kai-fa-mo-ban/)

## ✨ Features

- **Vue 3** — Composition API、`<script setup>`
- **TypeScript** — 类型支持
- **Vite** — 快速开发与构建
- **Vue Router 5** — 文件路由
- **Pinia** — 状态管理
- **Element Plus** — UI 组件库，支持自动导入
- **UnoCSS** — 原子化 CSS，集成 Wind4 与 Icons
- **VueUse** — 常用组合式工具集
- **PWA** — 离线支持与版本更新提示
- **Mock** — 本地接口模拟
- **Vitest** — 单元测试
- **Cypress** — E2E 测试
- **ESLint + Oxlint + Prettier** — 代码检查与格式化

## 🚀 Getting Started

### 环境要求

- Node.js `^22.18.0 || >=24.12.0`
- pnpm

### 安装依赖

```
pnpm install
```

如果 Cypress 安装脚本未执行，可运行：

```
pnpm approve-builds
```

### 启动项目

```
pnpm dev
```

打开终端显示的本地地址即可访问。

### 项目构建

```
pnpm build
```

### 本地预览

```
pnpm preview
```

## 📦 Scripts

| 命令              | 说明                |
| ----------------- | ------------------- |
| `pnpm dev`        | 启动开发服务器      |
| `pnpm build`      | 类型检查并构建项目  |
| `pnpm build-only` | 仅构建项目          |
| `pnpm preview`    | 预览生产构建        |
| `pnpm type-check` | TypeScript 类型检查 |
| `pnpm lint`       | 代码检查并自动修复  |
| `pnpm format`     | 格式化代码          |
| `pnpm test:unit`  | 运行单元测试        |
| `pnpm test:e2e`   | 运行 E2E 测试       |

## 📁 Project Structure

```
src/
├── assets/         # 静态资源
├── components/     # 公共组件
├── layouts/        # 页面布局
├── pages/          # 页面（文件路由）
├── router/         # 路由配置
├── stores/         # Pinia 状态管理
├── App.vue         # 根组件
└── main.ts         # 项目入口

mock/               # Mock 数据
public/             # 公共静态资源
```

## 📚 Documentation

- [Vue 3](https://cn.vuejs.org/)
- [Vite](https://vite.dev/)
- [Vue Router](https://router.vuejs.org/)
- [UnoCSS](https://unocss.dev/)
- [Element Plus](https://element-plus.org/)

## 📄 License

MIT