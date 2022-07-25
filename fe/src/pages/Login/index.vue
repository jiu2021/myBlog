<template>
  <div id="login-wrapper">
    <div id="login-box">
      <div id="account">
        <div class="input-box">
          <span>账号：</span>
          <div class="inputer">
            <input type="text" v-model="account">
            <span class="tip" v-show="isShowAT">11位电话号码格式！</span>
          </div>
        </div>
      </div>
      <div id="password">
        <div class="input-box">
          <span>密码：</span>
          <input type="password" v-model="password" @keyup.enter.prevent="getLogin()">
        </div>
      </div>
      <Buttons content = '登录' @click.native="getLogin()"/>
    </div>
  </div>
</template>

<script>
export default {
  name:"Login",
  data() {
    return {
      account:'',
      password:'',
      isShowAT:false
    }
  },
  methods:{
  async getLogin() {
    const account = this.account;
    const password = this.password;
    if(!this.isShowAT&&password.trim()) {
      try {
        await this.$store.dispatch('userLogin', { account, password });
        this.$router.push('/home');
      } catch (err) {
        console.error(err);
      }
    }else {
      this.$tip({tipInfo:'输入不能为空！'});
    }
  }
  },
  watch:{
    account: {
    handler(newValue,oldValue) {
      if(!(/^1[0-9]{10}$/.test(newValue))){
        this.isShowAT=true;
      }else {
        this.isShowAT = false;
      }
    }
  },
  }
}
</script>

<style scoped>
  #login-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #202022;
  }

  #login-box {
    display: flex;
    flex-flow: column;
    align-items: center;
    width:300px;
    height:200px ;
    background-color:#353536;
    color: #00dffc;
    border: 1px solid #00dffc;
    justify-content: center;
    padding: 1rem 0;
  }

  input {
    width: 200px;
    height: 2rem;
    border: 1px solid #00dffc;
    outline: none;
    background-color: #202022;
    color: white;
  }

  .input-box {
    padding-top: 0.5rem;
    height: 3.5rem;
  }

  .inputer {
    position: relative;
    display: inline-block;
  }

  .tip {
    display: block;
    position: absolute;
    height: 1rem;
    width: 100%;
  }
</style>