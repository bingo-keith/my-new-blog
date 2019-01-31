# my-new-blog

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

- assets // 静态资源
    - imgs
        + css.png // CSS文章背景图
        + ...
- common // 存放公共组件
    - SVG // 存放VUE图标组件
        + SVGAdd.vue // "添加到"按钮
        + SVGBack.vue // "返回"按钮
        + ...
    + BaseArticle.vue // 文章组件
    + BaseAvatar.vue // 头像组件
    + ...
- components // 存放功能组件
    - Post // 文章组件
        + module.js //文章状态管理
        + Post.vue // 文章显示组件
        + PostContent.vue // 文章目录组件
        + PostList.vue // 文章列表组件
        + SearchPost.vue // 搜索文章组件
        + ...
- constants // 存放常量配置
    + API.js // 存放API调用地址
- router // 存放路由
    + index.js
- store // 存放vuex
    + index.js
- utils // 存放工具方法
    + async.js // axios方法
    + fnVarificate.js // 表单验证方法
    + util.js // 其他工具方法