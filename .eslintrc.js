// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "no-tabs": "off",
    "indent": ["error", 2], // 缩进2个空格
    "consistent-return": 0, // return 后面是否允许省略
    "quotes": 0, // 强制一致使用反引号，双引号或单引号
    "prefer-const": 0, // 如果一个变量从不重新分配，使用const声明更好
    "space-before-function-paren": 0, // 函数定义时括号前面要不要有空格
    "space-before-function-paren": ["error", { // 函数括号前端需要一个空格
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "ignore"
    }],
    "semi": ["error", "always"], // 语句后面添加的分号
    "no-unneeded-ternary": 0, // 当存在更简单的选择时不允许三元运算符
    "no-return-assign": 0, //
    "object-curly-spacing": 0, // 在大括号内强制执行一致的间距
    "padded-blocks": 'off', // 要求或不允许块内的填充
    "arrow-parens": 0, // 它也将有助于找到箭头函数（=>），这些函数可能被错误地包含在一个条件中，如果这样的比较>=是有意的。
    "generator-star-spacing": 0, // 围绕*生成器函数（generator-star-spacing）强制执行间距
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "semi-spacing": ["error", {"before": false, "after": false}], // 分号前后不准有空格
    "no-trailing-spaces": ["error", { "skipBlankLines": true }], // 允许在空行上结尾空白
    "no-multiple-empty-lines": ["error", {
      "max": 2, // "max"（默认2：）强制连续空行的最大数量
      "maxEOF": 2, // "maxEOF" 在文件末尾强制执行最大数量的连续空行
      "maxBOF": 2 // "maxBOF" 在文件的开头强制执行最大数量的连续空行
    }],
    "no-mixed-spaces-and-tabs": [2, false]//禁止混用tab和空格
  }
}
