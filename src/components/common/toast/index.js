import Toast from './Toast.vue'

const obj = {}

obj.install = function(Vue) {

  //创建一个组件构造器
  const toastContrustor = Vue.extend(Toast);

  //采用new的方法创建一个toast对象
  const toast = new toastContrustor();

  //在项目中得有一个容器用来显示toast组件，将此组件对象挂载到新建的 div中
  toast.$mount(document.createElement('div'));

  //将其 div添加到 <body/>标签中，这样toast对象就可以在所有页面显示
  document.body.appendChild(toast.$el);

  //将此组件对象赋给 vue.pototype的$toast属性,
  //这样在任何组件中都可以通过$toast访问上面创建的toast对象调用其数据和方法
  Vue.prototype.$toast = toast;
}
export default obj
