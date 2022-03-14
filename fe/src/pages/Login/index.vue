<template>
  <div id="login-wrapper">
    <div id="login-box">
      <div id="account">
        <span>账号：</span>
        <input type="text" v-model="account">
      </div>
      <div id="password">
        <span>密码：</span>
        <input type="text" v-model="password">
      </div>
      <Buttons content = '登录' @click="getLogin()"/>
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
    }
  },
  methods:{
  getLogin() {
    const account = this.account;
    const password = this.password;
    if(account.trim()&&password.trim()) {
        this.$store.dispatch('userLogin',
        {
        account,
        password,
        });
    }else {
      alert('输入为空！');
    }
  }
  }
}
</script>

<style>
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
  }

  input {
    width: 200px;
    height: 30px;
    border: 1px solid #00dffc;
    outline: none;
    background-color: #202022;
    color: white;
  }

  #account {
    margin: 1rem auto;
  }

  #password {
    margin-bottom: 1rem;
  }
</style>