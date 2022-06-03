import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast/index.js'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import "tailwindcss/tailwind.css"


Vue.use(toast);  //安装 toast插件，自动调用 toast的 install方法

FastClick.attach(document.body);     //使用fastclick解决移动端300ms延时问题

Vue.use(VueLazyLoad);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
