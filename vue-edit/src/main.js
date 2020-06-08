//vue默认使用runtime-only 不识别模版
import Vue from 'vue'
import App from './App.vue'
//环境变量提示
// Vue.config.productionTip = false
console.log(App)
new Vue({
  // template: `<div>hello</div>
  //h就是createElement 渲染组件
  // ...app 因为app组件中有render方法 直接渲染这个组件
  render: h => h(App)
}).$mount('#app')
