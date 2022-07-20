const { context } = require("../app");
const app = require("../app");
const {
  getBlogsListError,
  addBlogError,
  blogUpdateError
} = require('../constant/err.type');
const { findBlogs, createBlog, updateBlog } = require('../service/blog.service');
const { timestampToTime, tagsHandle } = require('../tools');

class Cartcontroller {
  async findAll(ctx) {
    // 解析pageNum,pageSize
    const { pageSize = 10, pageNum = 1 } = ctx.request.query;
    try {
      // 调用数据处理方法
      const res = await findBlogs(pageNum, pageSize);
      // 返回结果
      ctx.body = {
        code: 0,
        message: '获取博客列表成功',
        result: res,
      }
    } catch (err) {
      console.error(err);
      getBlogsListError.result = err;
      return ctx.app.emit('error', getBlogsListError, ctx);
    }
  }

  async add(ctx) {
    let { title, content, abstract = '', tags } = ctx.request.body;
    // 数据预处理
    if (abstract == '') {
      if (abstract.length > 80) {
        abstract = content.substring(0, 80);
      } else {
        abstract = content;
      }
    };
    let dateNum = new Date().getTime();
    const date = timestampToTime(dateNum);
    const newBlog = { title, content, abstract, tags, date };
    // 访问数据库
    try {
      const res = await createBlog(newBlog);
      // 处理标签问题
      tagsHandle(res._id, tags, true);
      ctx.body = {
        code: 0,
        message: '创建博客成功',
        result: res._id
      }
    } catch (err) {
      console.error(err);
      addBlogError.result = err;
      return ctx.app.emit('error', addBlogError, ctx);
    };
  }


  /*async update(ctx) {
    // 解析参数
    const { id } = ctx.request.params;
    const { title, content, abstract, tags } = ctx.request.body;
    try {
      // 处理标签问题
      tagsHandle(id, tags, false);
      const res = await updateBlog({ id, title, content, abstract, tags });
      ctx.body = {
        code: 0,
        message: '修改博客成功',
        result: res
      };
    } catch (err) {
      console.error(err);
      blogUpdateError.result = err;
      return ctx.app.emit('error', blogUpdateError, ctx);
    }
  }

  /*async remove(ctx) {
    const { id } = ctx.request.body;
    try {
      const res = await removeCarts(id);
      ctx.body = {
        code: 0,
        message: '移除购物车成功',
        result: ''
      }
    } catch (err) {
      console.error(err);
      removeCartsError.result = err;
      return ctx.app.emit('error', removeCartsError, ctx);
    }
  }

  async selectAll(ctx) {
    const user_id = ctx.state.user._doc._id;
    try {
      const res = await selectAllCarts(user_id);
      if (res.matchedCount) {
        ctx.body = {
          code: 0,
          message: '全选成功',
          result: ''
        }
      } else {
        return ctx.app.emit('error', selectAllError, ctx);
      }
    } catch (err) {
      console.error(err);
      return ctx.app.emit('error', selectAllError, ctx);
    }
  }

  async selectNone(ctx) {
    const user_id = ctx.state.user._doc._id;
    try {
      const res = await selectNoCarts(user_id);
      if (res.matchedCount) {
        ctx.body = {
          code: 0,
          message: '取消全选成功',
          result: ''
        }
      } else {
        return ctx.app.emit('error', selectNoneError, ctx);
      }
    } catch (err) {
      console.error(err);
      return ctx.app.emit('error', selectNoneError, ctx);
    }
  }*/
}


module.exports = new Cartcontroller();