const path = require('path');
const Koa = require('koa');
const KoaBody = require('koa-body');
const KoaStatic = require('koa-static');
const parameter = require('koa-parameter');

const userRouter = require('../router/user.route');
const blogRouter = require('../router/blog.route');
const tagRouter = require('../router/tag.route');
const errHandler = require('./errHandler');

const app = new Koa();
app.use(KoaBody({
  multipart: true,
  formidable: {
    //不建议使用相对路径
    uploadDir: path.join(__dirname, '../upload'),
    keepExtensions: true,
  },
  parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE']
}));

app.use(KoaStatic(path.join(__dirname, '../upload')));

app.use(parameter(app));

// 处理路由
app.use(userRouter.routes());
app.use(blogRouter.routes());
app.use(tagRouter.routes());

// 导入配置文件
require('dotenv').config();
//  统一错误处理
app.on('error', errHandler);

module.exports = app;