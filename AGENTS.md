# AI Agent Instructions for user-center-frontend-vue

This is a Vue 3 + TypeScript frontend project for a user center application using Ant Design Vue for UI components.

## Quick Start

### Development Commands
```bash
npm install          # Install dependencies
npm run serve        # Start dev server (hot reload on http://localhost:8080)
npm run build        # Create production build in dist/
npm run lint         # Run ESLint with auto-fix
```

## Project Structure & Conventions

### Directory Layout
```
src/
  ├── main.ts              # Vue app initialization with Ant Design & Router
  ├── App.vue              # Root component using BasicLayout
  ├── router/
  │   └── index.ts         # Route definitions with lazy loading
  ├── layout/
  │   └── BasicLayout.vue  # Main app layout wrapper with Ant Design layout
  ├── views/               # Page-level components (routed)
  │   ├── HomeView.vue
  │   └── AboutView.vue
  ├── components/          # Reusable UI components
  │   └── HelloWorld.vue
  └── assets/              # Static assets
```

### Code Style & Patterns

**Component Definition**
- Use `<script setup>` with TypeScript for new components
- Files use PascalCase naming (e.g., `BasicLayout.vue`, `HomeView.vue`)
- TypeScript strict mode enabled in `tsconfig.json`

**Imports & Aliases**
- Use `@/` alias for src/ imports (configured in `tsconfig.json` paths)
- Example: `import HelloWorld from '@/components/HelloWorld.vue'`

**Ant Design Vue**
- Component prefix: `a-` (e.g., `a-layout`, `a-button`, `a-layout-header`)
- Import base styles in `main.ts`: `import 'ant-design-vue/dist/reset.css'`
- Refer to [Ant Design Vue Docs](https://www.antdv.com/docs/vue/introduce)

**Routing**
- Route definitions in `src/router/index.ts` using `RouteRecordRaw` type
- Implement lazy loading for routes: `component: () => import(/* webpackChunkName: "name" */ '../views/ViewName.vue')`
- View components go in `src/views/` directory

## Common Tasks

### Add a New Page
1. Create component in `src/views/PageName.vue`
2. Define route in `src/router/index.ts` with lazy loading
3. Use `router-link` or `router.push()` for navigation

### Add a Reusable Component
1. Create component in `src/components/ComponentName.vue` with `<script setup lang="ts">`
2. Import in parent: `import ComponentName from '@/components/ComponentName.vue'`

### Use Ant Design Components
- Browse available components at [Ant Design Vue](https://www.antdv.com/components/overview/)
- Components are auto-imported from `ant-design-vue` package
- Use TypeScript types for prop validation

## Build & Deployment

- **Development**: `npm run serve` for live preview
- **Production**: `npm run build` outputs to `dist/` directory
- **Linting**: `npm run lint` enforces ESLint & Prettier rules

## Configuration Files

- `tsconfig.json`: TypeScript configuration with strict mode, ES next target
- `vue.config.js`: Vue CLI overrides (lintOnSave warning only)
- `babel.config.js`: Babel configuration for transpilation
- `.eslintrc.js`, `.prettierrc.js`: Code quality and formatting rules

## Key Dependencies

- **vue@3.2.13**: Vue 3 framework
- **vue-router@4.0.3**: Client-side routing
- **ant-design-vue@4.2.6**: UI component library
- **typescript@4.5.5**: TypeScript language support
- **eslint & prettier**: Code quality and formatting tools
