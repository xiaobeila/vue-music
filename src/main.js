// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入懒加载插件
import VueLazyload from 'vue-lazyload'
// 引入公用方法库
import format from './utils/utils'

// 解决移动端300ms延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

// 将公用方法定义在vue原型
Vue.prototype.format = format

// 定义懒加载插件
Vue.use(VueLazyload, {
  error: require('./assets/images/404nofind.jpg'),
  loading: require('./assets/images/loading.png'),
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
