const { findTag, createTag, addTags, subTags } = require('../service/tag.service');
const { findBlog } = require('../service/blog.service');
class tools {
  // 日期格式转换
  timestampToTime(timestamp) {
    var date = new Date(timestamp);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return Y + M + D + h + m + s;
  }

  async tagsHandle(blog_id, tags, isNew) {
    const resBlog = await findBlog(blog_id);
    // 原blog的标签
    const tags_f = resBlog.tags;
    // 如果是新建blog
    if (isNew) {
      tags.forEach(async tag => {
        await createTag({ name: tag, blog_ids: [blog_id] });
      })
    } else {
      // 新增的tag
      let newTag = tags.filter(value => tags_f.indexOf(value) == -1);
      // 缺失的tag
      let subTag = tags_f.filter(value => tags.indexOf(value) == -1);
      if (newTag.length != 0) {
        newTag.forEach(async tag => {
          const res = await findTag(tag);
          // 如果没有tag则新建，有则更新tag数量
          if (res.length == 0) {
            await createTag({ name: tag, blog_ids: [blog_id] });
          } else {
            const tag_id = res[0]._id;
            await addTags({ tag_id, blog_id });
          }
        });
      }
      if (subTag.length != 0) {
        subTag.forEach(async tag => {
          const res = await findTag(tag);
          const tag_id = res[0]._id;
          await subTags({ tag_id, blog_id });
        });
      }
    }
  }
}

module.exports = new tools();