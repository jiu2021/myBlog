const Schema = require('../db');
const mongoose = require('mongoose');
// 创建用户模型
const userSchema = new Schema({
  username: {
    type: String,
    maxlength: 10,
    minlength: 2,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  account: {
    type: Number,
    match: /^[1][3,4,5,7,8][0-9]{9}$/,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  pushBlogs: {
    type: Array,
    ref: "blog"
  },
  likeBlogs: {
    type: Array,
    ref: "blog"
  },
  commentBlogs: {
    type: Array,
    ref: "blog"
  }
})

var userModle = mongoose.model('users', userSchema);
// 导出数据表
module.exports = userModle;