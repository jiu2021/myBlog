<template>
  <div id="header">
    <div id="header-content">
      <div id="header-title">jiu。’Blog</div>
      <div class="header-right">
        <div id="inputer">
          <input type="text" placeholder="搜索标题、文章、Tag。" v-model="searchKey" @keyup.enter="goSearch()"/>
          <img src="@/assets/svg/search.svg" id="search" @click="goSearch()">
        </div>
        <div class="users" v-if="!userName"> 
          <span class="login" @click="goLogin()">管理员登录</span>
        </div>
        <div class="users" v-else> 
          <span class="login_y">
            {{userName}}，已登录
          </span>
          <span @click="getLogout()" class="logout">退出登录</span>
        </div>
      </div>
      <img src="@/assets/svg/menu.svg" id="show-nav" @click="showNav()"/>
    </div>
    <div id="nav-bar" ref="nav" @click="closeNav()">
      <h2>站内导航</h2>
      <Buttons content = '关于我' @click.native.stop="goPage('关于我')"/>
      <Buttons content = '文章' @click.native="goPage('文章')"/>
      <Buttons content = '简历' @click.native.stop="goPage('简历')"/>
    </div>
  </div>
</template>

<script>
import { switchPage } from "@/utils";
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
    },
    getLogout() {
      let that = this;
      this.$tip({
        tipInfo:'是否退出登录？',
        cancelBtn:true,
        async confirm() {
          await that.$store.dispatch('userLogout');
        },
        cancel() {
          console.log('取消')
        }
      });
    },
    async goSearch() {
      const key = this.searchKey;
      if (key.trim() == '') {
        this.$tip({tipInfo:'输入不能为空！'});
      } else if (key.trim().length > 10) {
        this.$tip({tipInfo:'请输入合适的关键字！'});
      } else {
        this.$router.push({ path: `/search/${key.trim()}` });
      };
    },
    showNav() {
      const nav = this.$refs.nav;
      nav.style.display = 'flex';
      setTimeout(() => {
        nav.style.height = '100vh';
      }, 0);
    },
    closeNav() {
      const nav = this.$refs.nav;
      nav.style.height = '0';
      setTimeout(() => {
        nav.style.display = 'none';
      }, 500);
    },
    goPage(page) {
      switchPage(this, page);
    }
  },
  computed:{
    userName() {
        return this.$store.state.user.userInfo.username;
    },
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
.header-right {
  display: flex;
  align-items: center;
}
#header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

#header-title {
  font-size: 1.5rem;
  line-height: 48px;
  margin-right: 1rem;
    margin-left: 10vw;
}

.users {
  font-size: 0.8rem;
  color: #00dffc;
}

.login {
  margin:0 2rem 0 10vw;
}
.login_y {
    margin:0 0.5rem 0 10vw;
}

.logout {
  border-left:solid 1px #00dffc ;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
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
  width: 1.5rem;
  height: 100%;
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
  .date-content,
  .users {
    display: none;
  }
  .header-right {
    width: 100%;
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