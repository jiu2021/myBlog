const bcrypt = require('bcryptjs');

const { userFormatError, userAlreadyExisted, userRegisterError, userDoesNotExist, passwordError, userLoginError } = require('../constant/err.type');
const { getUserInfo } = require('../service/user.service');
//注册校验
const registerValidator = async(ctx, next) => {
    const { username, password, account, passwordVerify } = ctx.request.body;
    // 合法性
    if (!username || !password || !account || !passwordVerify || password !== passwordVerify || !(/^1[0-9]{10}$/.test(account))) {
      console.error('输入不合法', ctx.request.body);
      ctx.app.emit('error', userFormatError, ctx);
      return
    }
    await next();
  }
  //登录校验
const loginValidator = async(ctx, next) => {
    const { password, account } = ctx.request.body;
    // 合法性
    if (!password || !account || !(/^1[0-9]{10}$/.test(account))) {
      console.error('输入不合法', ctx.request.body);
      ctx.app.emit('error', userFormatError, ctx);
      return
    }
    await next();
  }
  //账户查询
const verifyUser = async(ctx, next) => {
    const { account } = ctx.request.body;
    // 合理性
    try {
      // @ts-ignore
      const res = await getUserInfo({ account });
      if (res) {
        ctx.body = userAlreadyExisted;
        ctx.body.code = 400;
        console.error('账户已经存在', { account });
        return
      }
    } catch (err) {
      console.error('获取用户信息错误', err);
      ctx.app.emit('error', userRegisterError, ctx);
      return
    }
    await next();
  }
  //加密
const cryptPassword = async(ctx, next) => {
    const { password } = ctx.request.body;
    const salt = bcrypt.genSaltSync(9);
    // hash保存的是密文
    const hash = bcrypt.hashSync(password, salt);
    ctx.request.body.password = hash;
    await next();
  }
  //密码核对
const verifyLogin = async(ctx, next) => {
  const { account, password } = ctx.request.body;
  try {
    //判断用户是否存在
    // @ts-ignore
    const res = await getUserInfo({ account });
    if (!res) {
      console.error('用户不存在', { account });
      ctx.app.emit('error', userDoesNotExist, ctx);
      return
    }
    //密码是否匹配
    if (!bcrypt.compareSync(password, res.password)) {
      ctx.app.emit('error', passwordError, ctx);
      return
    }
  } catch (err) {
    console.error('获取用户信息错误', err);
    return ctx.app.emit('error', userLoginError, ctx);
  }
  await next();
}

module.exports = {
  registerValidator,
  cryptPassword,
  verifyUser,
  loginValidator,
  verifyLogin,
}