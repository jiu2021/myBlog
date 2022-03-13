const Router = require('koa-router');

const { userValidator, cryptPassword, verifyUser } = require('../middleware/user.middleware');
const { register } = require('../controller/user.controller')

const router = new Router({ prefix: '/users' });

// 注册接口
router.post('/register', userValidator, verifyUser, cryptPassword, register);

// 登录接口
//router.post('/login', userValidator, verifyLogin, login);


module.exports = router;