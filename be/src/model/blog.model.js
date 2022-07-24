const Schema = require('../db');
const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
// 创建博客模型
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  abstract: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: []
  },
  visited: {
    type: Number,
    default: 0,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
})

//添加软删除插件
blogSchema.plugin(mongoose_delete);

var blogModle = mongoose.model('blogs', blogSchema);
// 导出数据表
module.exports = blogModle;