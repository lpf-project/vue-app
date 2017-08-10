# vue-app

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
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 操作步骤

需要使用的技术：
vue-cli
vux
vue-router
vuex


一、框架的搭建
vue init webpack vue-app
cd vue-app
npm install

二、过程
配置路由页面
import VueRouter from 'vue-router'
Vue.use(VueRouter)

安装vux-ui
npm install vux-save --save
npm install vux-loader --save-dev

安装less
npm install less less-loader --save-dev

安装 yaml-loader 以正确进行语言文件读取
npm install yaml-loader --save-dev

添加viewport meta
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<meta name="format-detection" content="telphone=no, email=no"/>

添加Fastclick移除移动端点击延迟
npm install fastclick --save
const FastClick = require('fastclick')
FastClick.attach(document.body)

添加webpack plugin, 在构建后去除重复css代码（通过配置vux-loader实现）
plugins: [{
  name: 'duplicate-style'
}]
