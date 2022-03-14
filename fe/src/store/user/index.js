import { reqUserLogin, reqUserRegister } from "@/api"
const actions = {
  //注册
  async userRegister(context, user) {
    let result = await reqUserRegister(user);
    if (result.code == 200) {
      alert(result.result.username + '已注册成功！');
      return 'ok';
    } else if (result.code == 400) {
      alert(result.message + '，请重新输入！');
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
  },
  //登录
  async userLogin(context, user) {
    let result = await reqUserLogin(user);
    //服务器下发token
    if (result.code == 200) {
      context.commit('USERLOGIN', result.data);
      //持久化存储token
      setToken(result.data.token);
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  //获取用户信息
  async getUserInfo(context) {
    let result = await reqUserInfo();
    console.log(result, '获取用户信息');
    //服务器下发token
    if (result.code == 200) {
      context.commit('GETUSERINFO', result.data);
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  //获取用户信息
  async userLogout(context) {
    let result = await reqUserInfo();
    console.log(result, '退出登录');
    //服务器下发token
    if (result.code == 200) {
      context.commit('USERLOGOUT');
      return 'ok';
    } else {
      return Promise.reject(new Error(result.message));
    }
  },*/
}

const mutations = {
  /*GETCODE(state, value) {
    state.code = value;
  },
  USERLOGIN(state, value) {
    state.token = value.token;
  },
  GETUSERINFO(state, value) {
    state.userInfo = value;
  },
  USERLOGOUT(state, value) {
    state.token = '';
    state.userInfo = {};
    removeToken();
  }*/
}

const state = {
  //state中数据默认初始值不能任给
  /*code: '',
  token: getToken(),
  userInfo: {}*/
}

const getters = {

}

//创建并暴露
export default {
  actions: actions,
  mutations: mutations,
  state: state,
  getters: getters,
}