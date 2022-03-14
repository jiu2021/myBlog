<template>
  <div id="register-wrapper">
    <div id="register-box">
      <div id="username">
        <span>昵称：</span>
        <input type="text" v-model="username">
      </div>
      <div id="account">
        <span>账号：</span>
        <input type="text" v-model="account">
      </div>
      <div id="password">
        <span>密码：</span>
        <input type="text" v-model="password">
      </div>
      <div id="passwordVerify">
        <span>确认密码：</span>
        <input type="text" v-model="passwordVerify" @keyup.enter="getRegister()">
      </div>
      <Buttons content = '注册' @click="getRegister()"/>
    </div>
  </div>
</template>

<script>
export default {
  name:"Register",
  data() {
    return {
      username:'',
      account:'',
      password:'',
      passwordVerify:''
    }
  },
  methods:{
    getRegister() {
      const username = this.username;
      const account = this.account;
      const password = this.password;
      const passwordVerify = this.passwordVerify;
      if(username.trim()&&account.trim()&&password.trim()&&passwordVerify.trim()) {
        if(password === passwordVerify) {
          this.$store.dispatch('userRegister',
          {
          username,
          account,
          password,
          passwordVerify
          });
        }else {
          alert('密码不一致');
        }
      }else {
        alert('输入为空！');
      }
    }
  }
}
</script>

<style>
  #register-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #202022;
  }

  #register-box {
    display: flex;
    flex-flow: column;
    align-items: center;
    width:400px;
    height:250px;
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
  #username{
    margin-top: 1rem;
  }
  #account {
    margin: 1rem auto;
  }

  #password {
    margin-bottom: 1rem;
  }

  #passwordVerify {
    align-self: flex-start;
    margin-left: 55px;
  }
</style>