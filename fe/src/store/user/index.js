import { reqUserLogin, reqUserRegister, reqUserInfo } from "@/api"
const actions = {
  //注册
  async userRegister(context, user) {
    let result = await reqUserRegister(user);
    if (result.code == 200) {
      alert(result.data.username + '已注册成功！');
      return 'ok';
    } else if (result.code == 400) {
      alert(result.message + '，请重新输入！');
    } else {
      alert(result.message + '服务器内部出错，请稍后重试！');
    }
  },

  //登录
  async userLogin(context, user) {
    let result = await reqUserLogin(user);
    //服务器下发token
    if (result.code == 200) {
      //持久化存储token
      localStorage.setItem('Token', result.data.token);
      context.commit('USERLOGIN', result.data);
    } else if (result.code == 400) {
      alert(result.message);
    } else {
      alert(result.message + '服务器内部出错，请稍后重试！');
    }
  },
  //发验证码
  /*async getCode(context, phone) {
    let result = await reqGetCode(phone);
    if (result.code == 200) {
      console.log(result);
      context.commit('GETCODE', result.data);
    } else {
      return Promise.reject(new Error('faile'));
    }
  },*/
  //获取用户信息
  async getUserInfo(context) {
    let result = await reqUserInfo();
    if (result.code == 200) {
      context.commit('GETUSERINFO', result.data);
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  //退出登录
  async userLogout(context) {
    context.commit('USERLOGOUT');
  },
}

const mutations = {
  USERLOGIN(state, value) {
    state.token = value.token;
  },
  GETUSERINFO(state, value) {
    state.userInfo = value;
  },
  /*GETCODE(state, value) {
    state.code = value;
  },*/
  USERLOGOUT(state, value) {
    state.token = '';
    state.userInfo = {};
    localStorage.removeItem('Token');
  }
}

const state = {
  token: localStorage.getItem('Token') || '',
  //state中数据默认初始值不能任给
  //code: '',
  userInfo: {}
}

const getters = {}

//创建并暴露
export default {
  actions: actions,
  mutations: mutations,
  state: state,
  getters: getters,
}