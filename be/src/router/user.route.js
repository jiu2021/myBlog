const Router = require('koa-router');

const { userValidator, cryptPassword } = require('../middleware/user.middleware');

const router = new Router({ prefix: '/users' });

// 注册接口
router.post('/register', userValidator, cryptPassword, (ctx) => {
  ctx.body = {
    code: 201,
    result: '注册成功啦',
    message: '出错了'
  }
});

// 登录接口
//router.post('/login', userValidator, verifyLogin, login);


module.exports = router;