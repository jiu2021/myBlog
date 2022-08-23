const mongoose = require('mongoose');
//连接数据库

// 生产环境
/*const user = `${process.env.USER}`;
const pwd = `${process.env.PWD}`;
const ip = `${process.env.ip}`
mongoose.connect(`mongodb://${user}:${pwd}@${ip}:27017/BLOG`);*/

//开发环境
mongoose.connect('mongodb://localhost:27017/BLOG');

//监听数据库连接状态
mongoose.connection.once('open', () => {
  console.log('数据库连接成功……');
});
mongoose.connection.once('close', () => {
  console.log('数据库断开……');
});

const Schema = mongoose.Schema;

module.exports = Schema;