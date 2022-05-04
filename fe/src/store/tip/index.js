const actions = {
  isConfirm(context, isTrue) {
    if (isTrue) {
      context.commit('YES');
    } else {
      context.commit('NO');
    }
  }
}

const mutations = {
  YES(state) {
    state.isConfirm = true;
  },
  NO(state) {
    state.isConfirm = false;
  }
}

const state = {
  isConfirm: true
}

const getters = {}

//创建并暴露
export default {
  actions: actions,
  mutations: mutations,
  state: state,
  getters: getters,
}