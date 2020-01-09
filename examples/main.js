import Vue from 'vue'
import App from './App.vue'
// import './plugins/element.js'
// 导入组件库
import vueJigsawVerfication from './../packages/index.js'
// 注册组件库
Vue.use(vueJigsawVerfication)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
