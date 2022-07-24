const { findAllTags } = require('../service/tag.service');
const { getTagsListError } = require('../constant/err.type');
class TagController {
  async findAll(ctx) {
    try {
      // 调用数据处理方法
      const res = await findAllTags();
      // 返回结果
      ctx.body = {
        code: 0,
        message: '获取标签列表成功',
        result: res,
      }
    } catch (err) {
      console.error(err);
      getTagsListError.result = err;
      return ctx.app.emit('error', getTagsListError, ctx);
    }
  }
}

module.exports = new TagController();