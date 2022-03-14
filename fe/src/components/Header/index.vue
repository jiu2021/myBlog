<template>
  <div id="header">
    <div id="header-content">
      <div id="users"> 
        <span id="login" @click="goLogin()">登录</span>
        <span id="register" @click="goRegister()">注册</span>
      </div>
      <div id="header-title">jiu。'Blog</div>
      <div id="inputer">
        <input type="text" placeholder="搜索标题、文章、Tag。" v-model="searchKey"/>
        <div id="search"></div>
      </div>
      <img src="http://www.xiong35.cn/assets/menu.5cf60f26.svg" id="show-nav"/>
    </div>
    <div id="nav-bar">
      <h2>站内导航</h2>
      <Buttons content = '关于我'/>
      <Buttons content = '文章'/>
      <Buttons content = '简历'/>
    </div>
  </div>
</template>

<script>
export default {
  name:"Header",
  data() {
    return {
      searchKey:'',
    }
  },
  methods:{
    goLogin() {
      this.$router.push('/login');
    },
    goRegister() {
      this.$router.push('/register');
    }
  }
}
</script>

<style scoped>
/*头部样式*/

#header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 48px;
  border-bottom: 1px solid #e7e7e7;
  color: white;
  z-index: 5;
  background-color: #202022;
}

#header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
}

#header-title {
  font-size: 1.5rem;
  line-height: 48px;
}

#users {
  font-size: 0.8rem;
  line-height: 48px;
  color: #00dffc;
}

#login {
  border-right: 1px solid #00dffc;
  padding-right: 0.5rem;
}

#register {
  padding-left: 0.5rem;
}

#inputer {
  display: flex;
  width: 300px;
  height: 30px;
  border: 1px solid #e7e7e7;
}

#inputer input {
  flex: 1;
  height: 100%;
  outline: none;
  border: none;
  background-color: #202022;
  color: white;
}

#search {
  width: 2rem;
  height: 100%;
  background: url('http://www.xiong35.cn/assets/search.3d279bf0.svg') no-repeat center;
  background-size: 1.5rem;
}

#show-nav {
  display: none;
  width: 1.5rem;
  margin: auto 1rem;
}

/*头部样式*/

/*窄窗口适配*/

#nav-bar {
  display: none;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 0;
  position: absolute;
  top: -48px;
  padding-top: 80px;
  color: #08ffea;
  background-color: #101011;
  transition: 0.5s ease;
}

#nav-bar h2 {
  margin-bottom: 2rem;
}

@media screen and (max-width: 750px) {
  #menu,
  #header-title,
  #tag-container,
  .date-content {
    display: none;
  }
  #main {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  #show-nav {
    display: block;
  }
  #inputer {
    width: 100%;
    margin-left: 1rem;
  }
  #root {
    cursor: none;
  }
}

/*窄窗口适配*/

</style>