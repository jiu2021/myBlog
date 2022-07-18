const Router = require('koa-router');

const { auth, hadAdminPermission } = require('../middleware/auth.middleware');
const { findAll, add } = require('../controller/blog.controller');

const router = new Router({ prefix: '/blogs' });

// 添加博客接口
router.post('/upload', auth, hadAdminPermission, add);
// 获取博客列表接口
router.get('/getBlogs', findAll);

module.exports = router;