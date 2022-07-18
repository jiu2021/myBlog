const { context } = require("../app");
const app = require("../app");
const {
  getBlogsListError,
  addBlogError
} = require('../constant/err.type');
const { findBlogs, createBlog } = require('../service/blog.service');
const { findTag, createTag, updateTag } = require('../service/tag.service');
const tools = require('../tools');

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
      console.error('获取博客列表失败', err);
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
    const date = tools.timestampToTime(dateNum);
    const newBlog = { title, content, abstract, tags, date };
    // 访问数据库
    try {
      const res = await createBlog(newBlog);
      const blog_id = res._id;
      // 处理标签问题
      tags.forEach(async tag => {
        const res = await findTag(tag);
        // 如果没有tag则新建，有则更新tag数量
        if (res.length == 0) {
          await createTag({ name: tag, blog_ids: [blog_id] });
        } else {
          const tag_id = res[0]._id;
          await updateTag({ tag_id, blog_id });
        }
      });
      ctx.body = {
        code: 0,
        message: '创建博客成功',
        result: blog_id
      }
    } catch (err) {
      console.error(err);
      return ctx.app.emit('error', addBlogError, ctx);
    };
  }


  /*async update(ctx) {
    // 解析参数
    const { id } = ctx.request.params;
    const { number, selected } = ctx.request.body;

    if (number === undefined && selected === undefined) {
      cartFormatError.message = 'number和selected不能同时为空';
      return ctx.app.emit('error', cartFormatError, ctx);
    }
    try {
      const res = await updateCarts({ id, number, selected });
      ctx.body = {
        code: 0,
        message: '更新购物车成功',
        result: res
      };
    } catch (err) {
      console.error(err);
      cartUpdateError.result = err;
      return ctx.app.emit('error', cartUpdateError, ctx);
    }
  }

  async remove(ctx) {
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