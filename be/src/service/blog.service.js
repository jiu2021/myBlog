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

  async searchBlogs(key) {
    const reg = new RegExp(key, 'i');
    return await Blog.find({
      $or: [ //多条件，数组
        { title: { $regex: reg } },
        { content: { $regex: reg } },
        { abstract: { $regex: reg } },
        { tags: { $regex: reg } }
      ],
      deleted: false
    });
  }

  async createBlog(data) {
    return await Blog.create(data);
  }

  async updateBlog(data) {
    const { id, title, content, abstract, tags } = data;
    const res = await Blog.findById(id);
    res.title = title;
    res.content = content;
    res.abstract = abstract;
    res.tags = tags;
    return await Blog.updateOne({ '_id': id }, res);
  }

  async findBlogById(id) {
    const res = await Blog.findById(id);
    if (res == null) {
      return Promise.reject('博客不存在');
    }
    return res;
  }

  async findBlogsByIds(idArr) {
    return await Blog.find({ '_id': idArr, deleted: false });
  }

  async removeBlog(id) {
    // @ts-ignore
    const res = await Blog.deleteById({ '_id': id });;
    if (res == null) {
      return Promise.reject('博客不存在');
    }
    return res;
  }

  async visitBlog(id) {
    const res = await Blog.findById(id);
    if (res == null) {
      return Promise.reject('博客不存在');
    }
    // 访问量加一
    res.visited++;
    await Blog.updateOne({ '_id': id }, res);
    return res;
  }
}

module.exports = new BlogService();