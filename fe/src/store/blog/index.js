import { reqBlogList, reqBlog } from "@/api"
const actions = {
  async getBlogList(ctx, page) {
    const res = await reqBlogList(page);
    if (res.code == 200) {
      const { list, total } = res.result;
      ctx.commit('PAGE', page);
      ctx.commit('GETBLOGLIST', { list, total });
    } else {
      console.log('获取博客列表失败');
    }
  },
  async readBlog(ctx, id) {
    const res = await reqBlog(id);
    if (res.code == 200) {
      ctx.commit('READBLOG', res.result);
    } else {
      console.log('获取博客详细内容失败');
    }
  },
}

const mutations = {
  GETBLOGLIST(state, value) {
    state.total = value.total;
    state.blogList = value.list;
  },
  PAGE(state, value) {
    state.pageNum = value.pageNum;
    state.pageSize = value.pageSize;
  },
  READBLOG(state, value) {
    state.blogInfo = value;
  }
}

const state = {
  pageNum: 1,
  pageSize: 10,
  total: 0,
  blogList: [],
  blogInfo: {}
}

const getters = {}

//创建并暴露
export default {
  actions: actions,
  mutations: mutations,
  state: state,
  getters: getters,
};