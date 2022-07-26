//该文件用于创建Vuex中最核心的store

//引入vuex
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

//引入小仓库
import user from './user';
import blog from './blog';
import tag from './tag'
//创建并暴露store
export default new Vuex.Store({
  //实现Vuex仓库模块化开发
  modules: { user, blog, tag },
  plugins: [createPersistedState()],
});