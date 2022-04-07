const Router = require('koa-router');

const { auth,hadAdminPermission} = require('../middleware/auth.middleware');
const { userInfo } = require('../controller/user.controller');

const router = new Router({ prefix: '/blogs' });

// 上传接口
router.post('/upload', auth, hadAdminPermission, );

module.exports = router;