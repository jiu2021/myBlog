import { reqTagList } from "@/api"
const actions = {
  async getTagList(ctx) {
    const res = await reqTagList();
    if (res.code == 200) {
      ctx.commit('GETTAGLIST', res.result.list);
    } else {
      console.log('获取标签列表失败');
    }
  },
}

const mutations = {
  GETTAGLIST(state, value) {
    state.tagList = value;
  },
}

const state = {
  tagList: [],
}

const getters = {}

//创建并暴露
export default {
  actions: actions,
  mutations: mutations,
  state: state,
  getters: getters,
};