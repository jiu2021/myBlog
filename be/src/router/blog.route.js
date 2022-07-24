const Router = require('koa-router');

const { auth, hadAdminPermission } = require('../middleware/auth.middleware');
const { findAll, upload, update, remove } = require('../controller/blog.controller');

const router = new Router({ prefix: '/blogs' });

// 添加博客接口
router.post('/upload', auth, hadAdminPermission, upload);
// 编辑博客接口
router.post('/update', auth, hadAdminPermission, update);
// 删除（软）博客接口
router.post('/remove', auth, hadAdminPermission, remove);
// 获取博客列表接口
router.get('/getBlogs', findAll);

module.exports = router;