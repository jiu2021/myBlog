const { findAllTags, findById } = require('../service/tag.service');
const { getTagsListError, getBlogsByTagError } = require('../constant/err.type');
class TagController {
  async findAll(ctx) {
    try {
      // 调用数据处理方法
      const res = await findAllTags();
      // 返回结果
      ctx.body = {
        code: 200,
        message: '获取标签列表成功',
        result: res,
      }
    } catch (err) {
      console.error(err);
      getTagsListError.result = err;
      return ctx.app.emit('error', getTagsListError, ctx);
    }
  }
  async findByTag(ctx) {
    const id = ctx.request.params.id;
    try {
      // 调用数据处理方法
      const res = await findById(id);
      // 返回结果
      ctx.body = {
        code: 200,
        message: '获取标签下的博客列表成功',
        result: res,
      }
    } catch (err) {
      console.error(err);
      getBlogsByTagError.result = err;
      return ctx.app.emit('error', getBlogsByTagError, ctx);
    }
  }
}

module.exports = new TagController();