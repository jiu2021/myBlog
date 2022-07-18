const Schema = require('../db');
const mongoose = require('mongoose');
// 创建用户模型
const tagSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  num: {
    type: Number,
    default: 1
  },
  blog_ids: {
    type: [Schema.Types.ObjectId],
    required: true
  }
})

var tagModle = mongoose.model('tags', tagSchema);
// 导出数据表
module.exports = tagModle;