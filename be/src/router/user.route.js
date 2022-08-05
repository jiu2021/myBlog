const Router = require('koa-router');

const { registerValidator, cryptPassword, verifyRegister, loginValidator, verifyLogin } = require('../middleware/user.middleware');
const { register, login } = require('../controller/user.controller');
const { auth } = require('../middleware/auth.middleware');
const { userInfo } = require('../controller/user.controller');

const router = new Router({ prefix: '/api/users' });

// 注册接口
router.post('/register', registerValidator, verifyRegister, cryptPassword, register);
// 登录接口
router.post('/login', loginValidator, verifyLogin, login);
// 用户信息接口
router.get('/getUserInfo', auth, userInfo);

module.exports = router;