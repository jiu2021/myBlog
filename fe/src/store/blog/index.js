import { reqBlogList, reqBlog, reqSearch, reqSearchByTag, reqUpload, reqEdit, reqDelete } from "@/api"
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
    const res = await reqBlog({ id });
    if (res.code == 200) {
      ctx.commit('READBLOG', res.result);
    } else {
      console.log('获取博客详细内容失败');
    }
  },
  async searchBlogList(ctx, key) {
    const res = await reqSearch({ key });
    if (res.code == 200) {
      console.log(res);
      const list = res.result;
      ctx.commit('SETBLOGLIST', { list });
    } else {
      console.log('查找博客列表失败');
    }
  },
  async searchBlogListOfTag(ctx, id) {
    const res = await reqSearchByTag({ id });
    if (res.code == 200) {
      console.log(res);
      const list = res.result;
      ctx.commit('SETBLOGLIST', { list });
    } else {
      console.log('查找标签下的博客列表失败');
    }
  },
  async pubBlog(ctx, blog) {
    const res = await reqUpload(blog);
    if (res.code == 200) {
      return Promise.resolve(res.result);
    } else {
      console.log('发布博客失败');
      return Promise.resolve(false);
    }
  },
  async editBlog(ctx, data) {
    console.log(data);
    const res = await reqEdit(data.id, data.blog);
    if (res.code == 200) {
      console.log(res);
    } else {
      console.log('编辑博客失败');
    }
  },
  async deleteBlog(ctx, id) {
    const res = await reqDelete({ id });
    if (res.code == 200) {
      console.log(res);
    } else {
      console.log('删除博客失败');
    }
  },
}

const mutations = {
  GETBLOGLIST(state, value) {
    state.total = value.total;
    state.blogList = value.list;
  },
  SETBLOGLIST(state, value) {
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
  blogInfo: {},
}

const getters = {}

//创建并暴露
export default {
  actions: actions,
  mutations: mutations,
  state: state,
  getters: getters,
};