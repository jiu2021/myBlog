//引入
import Vue from "vue"
import VueRouter from "vue-router"
//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home';
import About from '@/pages/About';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import BlogView from '@/components/BlogView';
import BlogList from '@/components/Blog';
import SearchBlog from "@/components/Blog/SearchBlog.vue";
//引入store
import store from '@/store'

//先把VueRouter原型对象的push先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push、replace
//第一个参数：告诉原来push方法往哪里跳转
VueRouter.prototype.push = function(location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => {}, () => {});
  }
}
VueRouter.prototype.replace = function(location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(this, location, () => {}, () => {});
  }
}

//配置路由
let router = new VueRouter({
  routes: [{
      path: "/home",
      component: Home,
      children: [{
          path: "",
          name: "bloglist",
          component: BlogList,
        },
        {
          path: "/blogview/:id",
          name: "blogview",
          component: BlogView,
        },
        {
          path: "/search/:key",
          name: "blogListOfKey",
          component: SearchBlog,
        },
        {
          path: "/tag/:index",
          name: "blogListOfTag",
          component: SearchBlog,
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/blogedit",
      name: "blogedit",
      component: () =>
        import ('@/components/BlogEdit'),
    },
    {
      path: "/blogpub",
      name: "blogpub",
      component: () =>
        import ('@/components/BlogEdit'),
    },
    //重定向，初始化首页
    {
      path: "*",
      redirect: "/about"
    }
  ]
});

//全局前置守卫
router.beforeEach(async(to, from, next) => {
  const token = store.state.user.token;
  const { username, isAdmin } = store.state.user.userInfo;
  if (token) {
    //用户登录了
    //console.log('有token');
    if (to.path == '/login') {
      next('/home');
    } else {
      //访问非登录页
      if (username) {
        //有用户信息
        next();
      } else {
        //获取用户信息
        try {
          const res = await store.dispatch('getUserInfo');
          console.log(res);
          next();
        } catch (error) {
          //token失效
          await store.dispatch('userLogout');
          next('/login');
        }
      }
    }
  } else {
    //未登录
    //console.log('未登录');
    next();
  }
  if (to.path == '/blogedit' || to.path == '/blogpub') {
    if (token && username && isAdmin) {
      next();
    } else {
      next('/about');
    }
  }
});


export default router;