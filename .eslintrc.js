module.exports = {
  // 1️⃣ root: true - 停止向上查找配置文件（这是项目根目录的配置）
  root: true,

  // 2️⃣ env - 定义全局变量（不会被误认为是未定义的变量）
  env: {
    node: true, // 支持 Node.js 全局变量（如 process）
  },

  // 3️⃣ extends - 继承其他配置集合（组合多个规则集）
  extends: [
    "plugin:vue/vue3-essential", // Vue 3 必要规则
    "eslint:recommended", // ESLint 推荐规则
    "@vue/typescript/recommended", // TypeScript 推荐规则
    "plugin:prettier/recommended", // Prettier 推荐规则（禁用冲突的ESLint规则）
  ],

  // 4️⃣ parserOptions - 解析器选项
  parserOptions: {
    ecmaVersion: 2020, // 支持 ES2020 语法
  },

  // 5️⃣ rules - 自定义规则
  rules: {
    // 生产环境警告 console，开发环境关闭
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 使用 Prettier 格式化，忽略 ESLint 的格式规则
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
  },
};
