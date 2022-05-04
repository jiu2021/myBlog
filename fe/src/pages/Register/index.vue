<template>
  <div id="register-wrapper">
    <div id="register-box">
      <div id="username" class="input-box">
        <span>昵称：</span>
        <div class="inputer">
          <input type="text" v-model="username">
          <span class="tip" v-show="isShowNT">2-10位字符！</span>
        </div>
      </div>
      <div id="account" class="input-box">
        <span>账号：</span>
        <div class="inputer">
          <input type="text" v-model="account" placeholder="用户唯一标识">
          <span class="tip" v-show="isShowAT">11位电话号码格式！</span>
        </div>
      </div>
      <div id="password" class="input-box">
        <span>密码：</span>
        <div class="inputer">
          <input type="password" v-model="password"  name="pwd">
          <span class="tip" v-show="isShowPT">5-20位字符！</span>        
        </div>
      </div>
      <div id="passwordVerify" class="input-box">
        <span>确认密码：</span>
        <div class="inputer">
          <input type="password" v-model="passwordVerify" @keyup.enter="getRegister()">
          <span class="tip" v-show="isShowPVT">密码不一致！</span>
        </div>
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
      passwordVerify:'',
      isShowNT:false,
      isShowAT:false,
      isShowPT:false,
      isShowPVT:false,
    }
  },
  methods:{
    async getRegister() {
      const username = this.username;
      const account = this.account;
      const password = this.password;
      const passwordVerify = this.passwordVerify;
      if(username.trim()&&account.trim()&&password.trim()&&passwordVerify.trim()) {
        if(!this.isShowNT && !this.isShowAT && !this.isShowPT && !this.isShowPVT) {
          try {
          await this.$store.dispatch('userRegister',
          {
          username,
          account,
          password,
          passwordVerify
          });
          this.$router.push('/login');
          } catch (err) {
            console.error(err);
          }
        }else {
          let mode = 'alert';
        let tips = '请检查输入！';
        this.$bus.$emit('showTipBox',{mode,tips});
        }
      }else {
        let mode = 'alert';
        let tips = '输入不能为空！';
        this.$bus.$emit('showTipBox',{mode,tips});
      }
    },
  },
  watch:{
    username: {
      handler(newValue,oldValue) {
        if(newValue.length<2 || newValue>10){
          this.isShowNT = true;
        }else {
          this.isShowNT = false;
        }
      }
    },
    account: {
    handler(newValue,oldValue) {
      if(!(/^1[0-9]{10}$/.test(newValue))){
        this.isShowAT=true;
      }else {
        this.isShowAT = false;
      }
    }
  },
    password: {
    handler(newValue,oldValue) {
      if(newValue.length<5 || newValue.length>20){
        this.isShowPT=true;
      }else {
        this.isShowPT = false;
      }
    }
  },
  passwordVerify:{
    handler(newValue) {
      if(newValue !== this.password) {
        this.isShowPVT = true;
      }else {
        this.isShowPVT = false;
      }
    }
  }

}
}
</script>

<style scoped>
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
    height:300px;
    background-color:#353536;
    color: #00dffc;
    border: 1px solid #00dffc;
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
  }

  #passwordVerify {
    align-self: flex-start;
    margin-left: 55px;
  }

  .inputer {
    position: relative;
    display: inline-block;
    height: 3.5rem;
  }

  .tip {
    display: block;
    position: absolute;
    height: 1rem;
    width: 100%;
    bottom: 0;
  }
</style>