const Router = require('koa-router');

const { auth, hadAdminPermission, validator } = require('../middleware/auth.middleware');
const { findAll, upload, update, remove, visit, findByKey } = require('../controller/blog.controller');

const router = new Router({ prefix: '/blogs' });

// 添加博客接口
router.post('/upload', auth, hadAdminPermission, validator({
  title: 'string', //只能用字符串表示类型
  content: 'string',
  abstract: 'string',
  tags: 'array'
}), upload);
// 编辑博客接口
router.put('/:id', auth, hadAdminPermission, validator({
  title: 'string',
  content: 'string',
  abstract: 'string',
  tags: 'array'
}), update);
// 删除（软）博客接口
router.delete('/:id', auth, hadAdminPermission, remove);
// 访问博客接口
router.get('/read/:id', visit);
// 获取博客列表接口
router.get('/', findAll);
// 关键字查找
router.get('/search/:key', findByKey);

module.exports = router;