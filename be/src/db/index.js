const mongoose = require('mongoose')
  //连接数据库
mongoose.connect('mongodb://localhost:27017/BLOG');

//监听数据库连接状态
mongoose.connection.once('open', () => {
  console.log('数据库连接成功……')
})
mongoose.connection.once('close', () => {
  console.log('数据库断开……')
})

const Schema = mongoose.Schema;

module.exports = Schema;