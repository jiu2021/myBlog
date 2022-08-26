import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
//引入markdown编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
//注册全局组件
import Buttons from '@/components/Buttons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Tags from '@/components/Tags'
Vue.component(Buttons.name, Buttons)
Vue.component(Header.name, Header)
Vue.component(Footer.name, Footer)
Vue.component(Nav.name, Nav)
Vue.component(Tags.name, Tags)
  //引入仓库
import store from '@/store'
Vue.config.productionTip = false;
//引入全局提示框
import TipBox from '@/components/TipBox/index'
Vue.prototype.$tip = TipBox;
//注册编辑器
Vue.use(mavonEditor)
new Vue({
  //装载事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: h => h(App),
  //注册路由
  router,
  //注册仓库
  store,
  mavonEditor
}).$mount('#app')

// 动态修改页签标题
Vue.directive('title', {
  inserted: function(el, binding) {
    document.title = el.dataset.title;
  }
})