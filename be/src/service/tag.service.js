const Tag = require('../model/tag.modle');
const { findBlogsByIds } = require('../service/blog.service');
class TagService {
  async findAllTags() {
    // 获取总数
    const count = await Tag.count({ "num": { $gt: 0 } });
    const res = await Tag.find({ "num": { $gt: 0 } });
    return {
      total: count,
      list: res,
    }
  }

  async findTag(tagname) {
    return await Tag.find({ name: tagname });
  }

  async findById(tagid) {
    const res = await Tag.findById({ '_id': tagid });
    console.log(res);
    const blog_ids = res.blog_ids;
    return await findBlogsByIds(blog_ids);
  }

  async createTag(data) {
    return await Tag.create(data);
  }

  async addTag(data) {
    const { tag_id, blog_id } = data;
    let res = await Tag.findById(tag_id);
    // 若tag未添加过该blog，则操作
    if (res.blog_ids.indexOf(blog_id) == -1) {
      res.blog_ids.push(blog_id);
      res.num = res.blog_ids.length;
      return await Tag.updateOne({ '_id': tag_id }, res);
    }
  }

  async subTag(data) {
    const { tag_id, blog_id } = data;
    let res = await Tag.findById(tag_id);
    // 若tag添加过该blog，则操作
    let index = res.blog_ids.indexOf(blog_id);
    if (index != -1) {
      res.blog_ids.splice(index, 1);
      res.num = res.blog_ids.length;
      return await Tag.updateOne({ '_id': tag_id }, res);
    }
  }
}

module.exports = new TagService();