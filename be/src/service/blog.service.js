const Blog = require('../model/blog.model');
class BlogService {
  async findBlogs(pageNum, pageSize) {
    // 获取总数
    const count = await Blog.count({ deleted: false });
    // 设置分页查找参数
    const start = (pageNum - 1) * pageSize;
    const res = await Blog.find({ deleted: false }).skip(start).limit(pageSize);
    return {
      pageNum,
      pageSize,
      total: count,
      list: res,
    }
  }

  async createBlog(data) {
    return await Blog.create(data);
  }

  async updateBlog(data) {
    const { id, title, content, abstract, tags } = data;
    const res = await Blog.findById(id);
    console.log(res);
    res.title = title;
    res.content = content;
    res.abstract = abstract;
    abstract.tags = tags;
    return await Blog.updateOne({ '_id': id }, res);
  }

  async findBlog(id) {
    return await Blog.findById(id);
  }

  /*async removeCarts(id) {
    return await Cart.findOneAndRemove({ '_id': id });
  }

  async selectAllCarts(user_id) {
    return await Cart.updateMany({ user_id }, { "selected": true });
  }

  async selectNoCarts(user_id) {
    return await Cart.updateMany({ user_id }, { "selected": false });
  }*/
}

module.exports = new BlogService();