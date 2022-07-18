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
    console.log(data);
    return await Blog.create(data);
  }

  /*async updateCarts(params) {
    const { id, number, selected } = params;

    const res = await Cart.findById(id);
    if (!res) {
      return '未找到购物车';
    } else {
      console.log(res);
      number !== undefined ? (res.number = number) : '';
      selected !== undefined ? (res.selected = selected) : '';
      return await Cart.updateOne({ '_id': id }, res);
    }
  }

  async removeCarts(id) {
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